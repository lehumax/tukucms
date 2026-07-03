<template>
	<view class="pc_flow">
		<view class="pc_flow_left">
			<view class="pc_flow_content" v-for="(item,index) in dataleft" :key="index" :style="index>0?'margin-top:20rpx;':''" @click="contact(item)">
				<uon-preview :src="field&&item[field]?item[field]:''">
					<image v-if="index%2==0" class="pc_img_max" :src="field&&item[field]?item[field]:''" :style="limitation?'height:400rpx;':''"></image>
					<image v-else class="pc_img_min" :src="field&&item[field]?item[field]:''" :style="limitation?'height:300rpx;':''"></image>
					<slot :row="item" :rowIndex="index*2"></slot>
				</uon-preview>
			</view>
		</view>
		<view class="pc_flow_right">
			<view class="pc_flow_content" v-for="(item,index) in dataright" :key="index" :style="index>0?'margin-top:20rpx;':''" @click="contact(item)">
				<uon-preview :src="field&&item[field]?item[field]:''">
					<image v-if="index%2!=0" class="pc_img_max" :src="field&&item[field]?item[field]:''" :style="limitation?'height:400rpx;':''"></image>
					<image v-else class="pc_img_min" :src="field&&item[field]?item[field]:''" :style="limitation?'height:300rpx;':''"></image>
					<slot :row="item" :rowIndex="index*2+1"></slot>
				</uon-preview>
			</view>
		</view>
	</view>
</template>
<script>
	export default{
		name:'pc-flow',
		props:{
			data:{
				type:Array,
				default:()=>([])
			},
			field:{
				type:String,
				default:''
			},
			limitation:{
				type:Boolean,
				default:false
			}
		},
		data(){
			return{
				dataleft:[],
				dataright:[]
			}
		},
		watch:{
			data:{
				handler(){
					this.dataleft = []
					this.dataright = []
					try{
						let arr = JSON.parse(JSON.stringify(this.data));
						arr.forEach((item,index)=>{
							if(index%2==0){
								this.dataleft.push(item)
							}else{
								this.dataright.push(item)
							}
						})
					}catch{
						console.error('pc-flow组件数据转换出错,请检查')
					}
				},deep:true,immediate:true
			}
		},
		methods:{
			contact(item){
				this.$emit('contact',item)
			}
		}
	}
</script>
<style lang="scss" scoped>
	.pc_flow{
		width: 100%;
		padding: 20rpx;
		overflow: hidden;
		display: flex;
		background-color: #ffffff;
		.pc_flow_content{
			background-color: #ffffff;
			border-radius: 10rpx;
			box-shadow: 0 2rpx 8rpx 0 hsla(0, 0%, 62.7%, 0.5);
		}
		.pc_flow_left,.pc_flow_right{
			width: 50%;
			flex: 1;
			.pc_img_max{
				width: 100%;
				border-radius: 5rpx;
				overflow: hidden;
			}
			.pc_img_min{
				width: 100%;
				border-radius: 5rpx;
				overflow: hidden;
			}
		}
		.pc_flow_right{
			margin-left: 20rpx;
		}
	}
</style>
