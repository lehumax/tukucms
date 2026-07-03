<template>
	<view class="uon-preview-box">
		
		<template v-if="$slots.default">
			<view @click="handler()">
				<slot></slot>
			</view>
		</template>
		<template v-else>
			<image class="image_" :mode="mode" :src="src" :style="imgStyle" @click="handler()"></image>
		</template>
		
		<view class="preview-bxo" v-if="previewShow">
			<view class="icon iconfont close_" @click="previewShow = false">&#xeb76;</view>
			<view class="bottom_">
				<view class="icon iconfont" @click="handlerScale(1)">&#xea98;</view>
				<view class="icon iconfont" @click="scaleValue = 1">&#xea6b;</view>
				<view class="icon iconfont" @click="handlerScale(2)">&#xea99;</view>
				<!-- <view class="icon iconfont">&#xe66b;</view>
				<view class="icon iconfont">&#xe66a;</view> -->
			</view>
			
			<view v-if="list.length > 1" class="icon iconfont left_" @click="handlerChange(1)">&#xe63c;</view>
			<view v-if="list.length > 1" class="icon iconfont right_" @click="handlerChange(2)">&#xe618;</view>
			
			<movable-area class="movable_area">
				<movable-view
				direction="all" 
				class="movale_"
				:animation="false"
				:style="movableStyle" 
				scale out-of-bounds 
				:scale-value="scaleValue" 
				:scale-max="4"
				@scale="scale">
					<image class="preview_image" :src="previewSrc" mode="widthFix" :style="{width: previewWidth}"></image>
				</movable-view>
			</movable-area>
		</view>
		
	</view>
</template>
<script>
import { nextTick } from 'vue'
	export default {
		props: {
			mode: {
				type: String,
				default: 'widthFix'
			},
			src: {
				type: String,
				default: ''
			},
			width: {
				type: String,
				default: 'auto'
			},
			height: {
				type: String,
				default: 'auto'
			},
			preview: {
				type: Boolean,
				default: true
			},
			// 预览数组
			list: {
				type: Array,
				default: () => []
			},
			// 预览图片下标
			imgIndex: {
				type: Number,
				default: -1
			},
			// 数组中预览图片的 key 值
			keyName: {
				type: String,
				default: ''
			}
		},
		watch: {
			src: {
				handler(newval) {
					// 动态修改图片时从新计算预览图
					if(newval) this.initImage({ src: newval })
				}
			}
		},
		computed: {
			imgStyle() {
				return {
					width: this.setImgWidth,
					height: this.setImgHeight
				}
			},
			movableStyle() {
				return {
					left: this.leftMovable,
					top: this.topMovable, 
					width: this.previewWidth,
					height: this.previewHeight
				}
			}
		},
		data() {
			return {
				setImgWidth: '',
				setImgHeight: '',
				previewWidth: '100%',
				previewHeight: '',
				topMovable: '0%',
				leftMovable: '0%',
				windowWidth: '',
				windowHeight: '',
				previewShow: false,
				scaleValue: 1,
				previewIndex: 0,
				previewSrc: ''
			}
		},
		created() {
			const _this = this
			// 获取系统信息
			uni.getSystemInfo({
				success(res) {
					_this.windowHeight = res.windowHeight
					_this.windowWidth = res.windowWidth
					_this.previewSrc = _this.src
					_this.initImage({ width: res.windowWidth, height: res.windowHeight })
				}
			})
		},
		methods: {
			// 初始化
			initImage(options) {
				const { src = '', width = '', height = '', type = 1 } = options
				const _this = this
				let windowWidth = width ? width : _this.windowWidth
				let windowHeight = height ? height : _this.windowHeight
				
				// 获取预览图信息
				uni.getImageInfo({
					src: src ? src : _this.src,
					success: function (image) {
						// 初始化图片展示宽高
						if(type == 1) {
							if(_this.width == 'auto') _this.setImgWidth = image.width * 2 + 'rpx'
							else _this.setImgWidth = _this.width
							
							if(_this.height != 'auto') _this.setImgHeight = _this.height
						}
						
						// 记录计算后的预览图片宽高
						let setWidth = 0, setHeight = 0
						
						// 预览图初始 宽高 计算
						if(image.width < windowWidth) {
							_this.previewWidth = image.width + 'px'
							_this.previewHeight = image.height + 'px'
							setWidth = image.width
							setHeight = image.height
						}else {
							_this.previewWidth = windowWidth + 'px'
							_this.previewHeight = ((windowWidth * image.height) / image.width).toFixed(0) + 'px'
							setWidth = windowWidth
							setHeight = ((windowWidth * image.height) / image.width).toFixed(0)
						}
						
						// 预览图高小于可视高时垂直居中
						if(setHeight < windowHeight) {
							// 计算垂直剧中
							const offset = (windowHeight - Number(setHeight)) / 2
							_this.topMovable = ((offset / windowHeight) * 100).toFixed(0) + '%'
						}else _this.topMovable = '0%'
						
						// 根据预览图宽度水平居中
						if(setWidth < windowWidth) {
							// 计算水平居中
							const offset = (windowWidth - setWidth) / 2
							_this.leftMovable = ((offset / windowWidth) * 100).toFixed(0) + '%'
						}else _this.leftMovable = '0%'
					}
				});
			},
			// 点击预览
			handler() {
				if(!this.preview) return
				this.previewShow = true
				this.scaleValue = 1
				
				if(this.list.length > 0) {
					if(this.imgIndex != -1) this.previewIndex = this.imgIndex
					
					this.previewSrc = this.keyName ? this.list[this.previewIndex][this.keyName] : this.list[this.previewIndex]
					this.initImage({ src: this.previewSrc, type: 2 })
				}
			},
			// 预览图缩放操作
			handlerScale(type) {
				let scaleNum = this.scaleValue
				// 放大
				if(type === 1) scaleNum += 0.1
				// 缩小
				if(type === 2) scaleNum -= 0.1
				
				if(scaleNum < 0.5 || scaleNum > 4) return
				
				this.scaleValue = Number(scaleNum.toFixed(1))
			},
			// 预览图片切换
			handlerChange(type) {
				if(type === 1) {
					if(this.previewIndex <= 0) this.previewIndex = this.list.length - 1
					else this.previewIndex -= 1
					
				}else {
					if(this.previewIndex >= (this.list.length - 1)) this.previewIndex = 0
					else this.previewIndex += 1
				}
				
				this.scaleValue = 1
				this.previewSrc = this.keyName ? this.list[this.previewIndex][this.keyName] : this.list[this.previewIndex]
				this.initImage({ src: this.previewSrc, type: 2 })
			},
			scale(e) {
				this.scaleValue = e.detail.scale
			}
		}
	}
</script>
<style lang="scss" scoped>
@import url("../../static/iconfont/iconfont.css");
.uon-preview-box {
	position: relative;
	.image_ {
		display: block;
	}
	.preview-bxo {
		position: fixed;
		width: 100vw;
		height: 100vh;
		left: 0rpx;
		top: 0rpx;
		z-index: 999999998;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		.close_ {
			position: absolute;
			right: 40rpx;
			top: 50rpx;
			width: 60rpx;
			height: 60rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: rgba(96,98,102, 0.5);
			border-radius: 50%;
			color: #E5E5E5;
			z-index: 100;
			font-size: 46rpx;
		}
		.bottom_ {
			position: absolute;
			bottom: 60rpx;
			width: 400rpx;
			height: 80rpx;
			border-radius: 50rpx;
			display: flex;
			background-color: rgba(96,98,102, 0.5);
			justify-content: space-around;
			align-items: center;
			z-index: 100;
			&>view {
				font-size: 56rpx;
				color:#E5E5E5
			}
		}
		.left_, .right_ {
			position: absolute;
			top: 50%;
			margin-top: -35rpx;
			width: 70rpx;
			height: 70rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: rgba(96,98,102, 0.5);
			border-radius: 50%;
			color: #E5E5E5;
			z-index: 100;
			font-size: 50rpx;
		}
		.left_ {
			left: 30rpx;
		}
		.right_ {
			right: 30rpx;
		}
		.movable_area {
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			pointer-events: none;
		}
		.movale_ {
			pointer-events: auto;
			height: max-content;
			position: absolute !important;
			.preview_image {
				display: block;
			}
		}
	}
}
</style>
