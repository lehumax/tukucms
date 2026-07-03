<template>
	<view>
		<view class="diy-navbar  diygw-top" :style="[{height:CustomBar + 'px',position:isFixed?'fixed !important':'relative !important'}]">
			<view class="diygw-title flex fixed" :style="style" :class="[bgImage!=''?'none-bg text-white bg-img':'',bgColor]">
				<view class="diy-navbar-tool"  :style="[{top:StatusBar + 'px'}]" v-if="isBack||isHome">
					<view class="diy-navbar-tool-inner" :class="isCapsule?'diy-navbar-tool-solid':''" :style="[{border:isCapsule?'1px solid '+color:'none'}]">
						<view class="action flex align-center" @tap="BackPage" v-if="isBack">
							<text class="diy-icon-back title-bar-icon"></text>
							<slot name="backText"></slot>
						</view>
						<view class="diy-navbar-split" :style="[{borderColor:isCapsule?color:'none'}]" v-if="isBack&&isHome"></view>
						<view v-if="isHome" @tap="BackHome"  class="title-bar-icon  diy-icon-home  titlebar-icon"></view>
					</view>
				</view>
				<view class="content title flex1 text-center" :style="[{top:StatusBar + 'px'}]">
					<slot name="content"></slot>
				</view>
				<slot name="right"></slot>
			</view>
		</view>
		<view v-if="isFixed"  :style="[{paddingTop:CustomBar + 'px'}]"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar
			};
		},
		name: 'diy-navbar',
		computed: {
			style() {
				var StatusBar= this.StatusBar;
				var CustomBar= this.CustomBar;
				var bgImage = this.bgImage;
				var paddingLeft = this.isCapsule && (this.isBack||this.isHome)?10:0
				var style = `height:${CustomBar}px;padding-top:${StatusBar}px;padding-left:${paddingLeft}px;padding-right:0px;`;
				if (this.bgImage) {
					style = `${style}background-image:url(${bgImage});`;
				}
				if(this.bgCustom){
                    let bgCustom  = this.bgCustom;
                    style = `${style}background-color:${bgCustom} !important;`;
                }
				if(this.color){
					let color  = this.color;
					style = `${style}color:${color} !important;`;
				}
				if(!this.isFixed){
					style = `${style}position:relative !important;`;
				}
				return style
			}
		},
		props: {
			bgColor: {
				type: String,
				default: ''
			},
			isBack: {
				type: [Boolean, String],
				default: false
			},
			isHome: {
				type: [Boolean, String],
				default: false
			},
			// 导航栏是否固定在顶部
			isFixed: {
				type: Boolean,
				default: false
			},
			isCapsule: {
				type: [Boolean, String],
				default: false
			},
			bgImage: {
				type: String,
				default: ''
			},
            bgCustom:{
                type: String,
                default: ''
            },
			backUrl:{
				type: String,
				default: ''
			},
			backdelta:{
				type:Number,
				default:0
			},
			color:{
				type: String,
				default: ''
			}
		},
		methods: {
			BackPage() {
				if(this.backUrl){
				   uni.redirectTo({
					 url: this.backUrl
				   })
				}else if(this.backdelta){
				  uni.navigateBack({
					delta: this.backdelta
				  });
				}else{
				  uni.navigateBack();
				} 
			},
			BackHome() {
				if(getApp().globalData.homePage){
					uni.reLaunch({
					    url: getApp().globalData.homePage
					});
				}else{
					uni.showToast({
						icon:'none',
						title:"请先设置首页地址"
					})
				}
				
			}
		}
	}
</script>
<style>
	.diy-navbar-tool {
		position: absolute;
		top: 0;
		bottom: 0;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	
	.diy-navbar-tool-inner {
	    display: flex;
	    flex-direction: row;
	    align-items: center;
	    justify-content: space-between;
	    padding: 3px 7px;
	}
	.diy-navbar-tool-solid{
		border:1px solid #edeef0;
		border-width: 1rpx;
		border-radius: 100px;
	}
	.diy-navbar-split{
		margin: 1px 8px 0px;
		border-left: 1px solid #edeef0 !important;
		height: 14px;
	}
</style>
