<template>
  <view class="container-tabbar">
    <view
      class="tabbar-item"
      :class="[item.centerItem ? ' center-item' : '']"
      :style="'width: calc(100% /' + tabbarList.length + ')'"
      @click="changeItem(item)"
      v-for="(item, i) in tabbarList"
      :key="i"
    >
      <view class="item-top"><image :src="curItem === item.id ? item.selectedIconPath : item.iconPath" /></view>
      <view class="item-bottom" :class="[curItem === item.id ? 'item-active' : '']">{{ item.text }}</view>
    </view>
  </view>
</template>
 
<script>
export default {
  props: {
    /* 当前导航栏 */
    currPage: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      curItem: 0, // 当前所选导航栏
      tabbarList: [
        {
          id: 0,
          pagePath: "/pages/index",
          iconPath: "/static/home.7355bc48.png",
          selectedIconPath: "/static/home.png",
          text: "49图库",
          centerItem: false
        },
        {
          id: 1,
          pagePath: "/pages/find",
          iconPath: "/static/find.be4327ee.png",
          selectedIconPath: "/static/find.png",
          text: "发现",
          centerItem: false
        },
		{
		  id: 2,
		  pagePath: "/pages/market",
		  iconPath: "/static/icon-41.54d1ee44.png",
		  selectedIconPath: "/static/icon-41.54d1ee44.png",
		  text: "淘料市场",
		  centerItem: true
		},
        {
          id: 3,
          pagePath: "/pages/website",
          iconPath: "/static/find.be4327ee.png",
          selectedIconPath: "/static/find.png",
          text: "寻宝",
          centerItem: false
        },
        {
          id: 4,
          pagePath: "/pages/user",
          iconPath: "/static/my.9529fa90.png",
          selectedIconPath: "/static/my-act.e44a426a.png",
          text: "我的",
          centerItem: false
        }
      ] // 导航栏列表
    };
  },
  mounted() {
    this.curItem = this.currPage; // 当前所选导航栏
  },
  methods: {
    /* 导航栏切换 */
    changeItem(e) {
      // 中间凸起按钮
      uni.switchTab({ url: e.pagePath }); // 跳转到其他 tab 页面
    }
  }
};
</script>
 
<style lang="scss" scoped>
$textDefaultColor: #999; // 文字默认颜色
$bottomBg: #fff; // 底部背景
$textSelectedColor: #07c160; // 文字选中颜色
$centerItemBg: #fff; // 中间凸起按钮背景
.container-tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 110rpx;
  color: $textDefaultColor;
  padding: 5rpx 0;
  background-color: $bottomBg;
  box-shadow: 0 0 10rpx hsla(0,0%,62.7%,.5);
  z-index:9999999
}
.tabbar-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100rpx;
  .item-top {
    flex-shrink: 0;
    width: 65rpx;
    height: 65rpx;
    padding: 4rpx;
    image {
      width: 100%;
      height: 100%;
    }
  }
  .item-bottom {
    width: 100%;
    font-size: 28rpx;
	font-family: 雅黑;
  }
  .item-active {
    color: $textSelectedColor;
  }
}
.center-item {
  position: relative;
  .item-top {
    position: absolute;
    top: -55rpx;
    left: 50%;
    transform: translateX(-50%);
    width: 105rpx;
    height: 105rpx;

    border-radius: 50%;
  }
  .item-bottom {
    position: absolute;
    bottom: 5rpx;
  }
}
</style>
