<template>
	<view
		class="diy-notice-bar flex1"
		:style="{
			background: computeBgColor,
			padding: padding
		}"
	>
		<view class="flex align-center" :style="[textStyle]">
			<image v-if="leftImg" class="diy-notice-img" :src="leftImg"></image>
			<text :class="leftIcon" v-if="leftIcon" :color="computeColor"></text>
			<view class="diy-notice-box flex-sub" id="diy-notice-box">
				<view  v-if="vertical" class="diy-notice-swiper flex-sub" >
					<slot name="content"></slot>
				</view>
				<view v-else 
					class="diy-notice-content flex-sub"
					:class="[elClass]"
					:style="{
						animationDuration: animationDuration,
						animationPlayState: animationPlayState,
					}"
				>
					<div class="diy-notice-text" @tap="click"><slot name="content"></slot></div>
				</view>
			</view>
			
		</view>
	</view>
</template>
<script>
export default {
	name: 'diy-noticebar',
	props: {
		// 是否显示左侧的图片
		leftImg: {
			type: String,
			default: ''
		},
		// 是否显示左侧的图标
		leftIcon: {
			type: String,
			default: ''
		},
		// 是否自动播放
		autoplay: {
			type: Boolean,
			default: true
		},
		// 文字颜色，各图标也会使用文字颜色
		color: {
			type: String,
			default: ''
		},
		// 背景颜色
		bgColor: {
			type: String,
			default: ''
		},
		// 是否显示
		show: {
			type: Boolean,
			default: true
		},
		vertical: {
			type: Boolean,
			default: false
		},
		// 滚动一个周期的时间长，单位ms
		duration: {
			type: [Number, String],
			default: 7000
		},
		interval: {
			type: [Number, String],
			default: 2000
		},
		// 字体大小，单位rpx
		fontSize: {
			type: [Number, String],
			default: 28
		},
		// 水平滚动时的滚动速度，即每秒滚动多少rpx，这有利于控制文字无论多少时，都能有一个恒定的速度
		speed: {
			type: [Number, String],
			default: 160
		},
		// 播放状态，play-播放，paused-暂停
		playState: {
			type: String,
			default: 'play'
		},
		// 通知的边距
		padding: {
			type: [Number, String],
			default: '18rpx 24rpx'
		},
		remote:{
			type: Boolean,
			default:false,
		},
		list:{
			type: Array,
			default: []
		}
	},
	data() {
		return {
			elClass: this.$tools.guid(),
			textWidth: 0, // 滚动的文字宽度
			boxWidth: 0, // 供文字滚动的父盒子的宽度，和前者一起为了计算滚动速度
			animationDuration: '10s', // 动画执行时间
			animationPlayState: 'paused', // 动画的开始和结束执行
			showText: '' // 显示的文本
		};
	},
	watch: {
		playState(val) {
			if(val == 'play') this.animationPlayState = 'running';
			else this.animationPlayState = 'paused';
		},
		speed(val) {
			if(!this.remote){
				this.initSize();
			}
		},
		list(val){
			setTimeout(() => this.initSize(), 10);
		}
	},
	computed: {
		// 计算字体颜色，如果没有自定义的，就用uview主题颜色
		computeColor() {
			if (this.color) return this.color;
			// 如果是无主题，就默认使用content-color
			else if(this.type == 'none') return '#606266';
			else return this.type;
		},
		// 文字内容的样式
		textStyle() {
			let style = {};
			if (this.color) style.color = this.color;
			else if(this.type == 'none') style.color = '#606266';
			style.fontSize = this.fontSize + 'rpx';
			return style;
		},
		// 计算背景颜色
		computeBgColor() {
			if (this.bgColor) return this.bgColor;
			else if(this.type == 'none') return 'transparent';
		}
	},
	mounted() {
		if(!this.remote){
			this.$nextTick(() => {
				this.initSize();
			});
		}
	},
	methods: {
		initSize() {
			if(!this.vertical){
				let query = [],
					boxWidth = 0,
					textWidth = 0;
				let textQuery = new Promise((resolve, reject) => {
					uni.createSelectorQuery()
						.in(this)
						.select('.'+this.elClass)
						.boundingClientRect()
						.exec(ret => {
							this.textWidth = ret[0].width;
							resolve();
						});
				});
				query.push(textQuery);
				Promise.all(query).then(() => {
					// 根据t=s/v(时间=路程/速度)，这里为何不需要加上#diy-notice-box的宽度，因为中设置了.diy-notice-content样式中设置了padding-left: 100%
					// 恰巧计算出来的结果中已经包含了#diy-notice-box的宽度
					this.animationDuration = `${this.textWidth / uni.upx2px(this.speed)}s`;
					// 这里必须这样开始动画，否则在APP上动画速度不会改变(HX版本2.4.6，IOS13)
					this.animationPlayState = 'paused';
					setTimeout(() => {
						if(this.playState == 'play' && this.autoplay) this.animationPlayState = 'running';
					}, 10);
				});
			}
			
		}
	}
};
</script>

