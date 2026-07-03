<template>
	<view class="start">
		<web-view :src="url"></web-view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				url: ''
			};
		},
		onLoad(options) {
			if (options && options.url) {
				this.url = decodeURIComponent(options.url);
			}
		},
		onShow() {},
		onShareAppMessage: function () {}
	};
</script>

<style>
	page,
	body {
		width: 100%;
		height: 100%;
		position: relative;
		color: #333;
		background-color: #f8f8f8;
		font-size: 16px;
		font-family: -apple-system-font, Helvetica Neue, Helvetica, sans-serif;
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
		-webkit-tap-highlight-color: transparent;
	}

	.start {
		height: 100%;
	}

	.start swiper {
		height: 100%;
	}

	.start image {
		width: 100%;
		height: 100%;
	}
	.prv-down {
		display: none !important;
	}
</style>
