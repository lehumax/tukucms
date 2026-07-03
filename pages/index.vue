<template>
	<view class="container container123679">
			<view class="flex flex-wrap diygw-col-24 justify-between items-center flex-clz">
				<image src="/static/wmm-1.png" class="response diygw-col-9" mode="widthFix"></image>
				
					<view class="flex justify-around items-center flex-nowrap">
							<text class="flex icon diygw-col-10 icon-clz diy-icon-youxi"></text>
							<a class="text-clz " href="https://xxx.com/">49导航</a>
					</view>
				

			</view>
			<view class="flex diygw-col-24 line-clz1"></view>
			<view id="nav" class="flex flex-wrap diygw-col-24 flex-direction-column flex1-clz">
				<view class="flex diygw-col-24 noticebar-clz">
					<diy-noticebar class="flex1 diy-notice-bar" color="#3295ff" bgColor="#fff" leftIcon="diy-icon-notification">
						<block v-slot:content>
							<text class="diy-notice-item">澳门六合彩资料大全，欢迎参考！</text>
						</block>
					</diy-noticebar>
				</view>
			</view>
			<view class="flex flex-wrap diygw-col-24 flex-direction-column flex51-clz">
				<view class="flex diygw-col-24 flex-direction-column white tabs-clz">
					<view class="diygw-tabs text-center justify-center scale-title small-border tabs-title">
						<view class="diygw-tab-item tabs-item-title" :class="index == tabsIndex ? '  cur text-green ' : ''" v-for="(item, index) in tabsDatas" :key="index" @click="changeTabs" :data-index="index"> <text v-if="item.icon" :class="item.icon"></text> {{ item.text }} </view>
					</view>
				</view>
			</view>
			<view class="flex flex-wrap diygw-col-24 flex-direction-column flex15-clz">
				<view class="flex flex-wrap diygw-col-24 justify-start flex16-clz">
					<view class="flex diygw-col-24 flex-nowrap flex18-clz">
						<view class="flex diygw-col-24 justify-start items-center flex-nowrap">
							<view class="diygw-col-16 text12-clz"> 第<text class="text100-clz">{{drawInfo.year}}{{drawInfo.period}}</text>期 </view>
							<view class="diygw-col-24 text26-clz" v-if="isOpenDraw ==2"> 距下期开奖：<u-count-down style="display:inline;" ref="refCountdown" :timestamp="drawInfo.nextLotteryTimestamp" format="HH:mm:ss"> </u-count-down> </view>
							<view class="diygw-col-24 text26-clz" v-else> 正在开奖中...</view>
						</view>
						<view class="flex flex-wrap diygw-col-11 flex-direction-column" v-if="isOpenDraw ==2">
							<a href="https://www.xxx.cc/#/pages/lotteryList" class="diygw-col-23 text10-clz" > 查看历史记录 </a>
						</view>
					</view>
					<view class="flex diygw-col-24 justify-start flex-nowrap flex21-clz" v-if="drawInfo.numberList[0]">
						<view class="flex flex-wrap diygw-col-24 flex-direction-column justify-center items-center">
							<view class="flex flex-wrap diygw-col-24 flex-direction-column justify-center items-center" :class="mubOtherColor(drawInfo.numberList[0].color)">
								<view class="diygw-col-24 text11-clz">{{drawInfo.numberList[0].number}}</view>
							</view>
							<view class="diygw-col-24 text13-clz"> {{drawInfo.numberList[0].shengXiao}}/{{drawInfo.numberList[0].wuXing}} </view>
						</view>
						<view class="flex flex-wrap diygw-col-24 flex-direction-column justify-center items-center">
							<view class="flex flex-wrap diygw-col-24 flex-direction-column justify-center items-center" :class="mubOtherColor(drawInfo.numberList[1].color)">
								<view class="diygw-col-24 text11-clz">{{drawInfo.numberList[1].number}}</view>
							</view>
							<view class="diygw-col-24 text13-clz"> {{drawInfo.numberList[1].shengXiao}}/{{drawInfo.numberList[1].wuXing}} </view>
						</view>
						<view class="flex flex-wrap diygw-col-24 flex-direction-column justify-center items-center">
							<view class="flex flex-wrap diygw-col-24 flex-direction-column justify-center items-center" :class="mubOtherColor(drawInfo.numberList[2].color)">
								<view class="diygw-col-24 text11-clz">{{drawInfo.numberList[2].number}}</view>
							</view>
							<view class="diygw-col-24 text13-clz"> {{drawInfo.numberList[2].shengXiao}}/{{drawInfo.numberList[2].wuXing}} </view>
						</view>
						<view class="flex flex-wrap diygw-col-24 flex-direction-column justify-center items-center">
							<view class="flex flex-wrap diygw-col-24 flex-direction-column justify-center items-center" :class="mubOtherColor(drawInfo.numberList[3].color)">
								<view class="diygw-col-24 text11-clz">{{drawInfo.numberList[3].number}}</view>
							</view>
							<view class="diygw-col-24 text13-clz"> {{drawInfo.numberList[3].shengXiao}}/{{drawInfo.numberList[3].wuXing}} </view>
						</view>
						<view class="flex flex-wrap diygw-col-24 flex-direction-column justify-center items-center">
							<view class="flex flex-wrap diygw-col-24 flex-direction-column justify-center items-center" :class="mubOtherColor(drawInfo.numberList[4].color)">
								<view class="diygw-col-24 text11-clz">{{drawInfo.numberList[4].number}}</view>
							</view>
							<view class="diygw-col-24 text13-clz"> {{drawInfo.numberList[4].shengXiao}}/{{drawInfo.numberList[4].wuXing}} </view>
						</view>
						<view class="flex flex-wrap diygw-col-24 flex-direction-column justify-center items-center">
							<view class="flex flex-wrap diygw-col-24 flex-direction-column justify-center items-center" :class="mubOtherColor(drawInfo.numberList[5].color)">
								<view class="diygw-col-24 text11-clz">{{drawInfo.numberList[5].number}}</view>
							</view>
							<view class="diygw-col-24 text13-clz"> {{drawInfo.numberList[5].shengXiao}}/{{drawInfo.numberList[5].wuXing}} </view>
						</view>
				
						<view class="flex flex-wrap diygw-col-24 flex-direction-column justify-center items-center flex17-clz">
							<image src="/static/add.png" class="response diygw-col-24 image9-clz" mode="widthFix"></image>
						</view>
						<view class="flex flex-wrap diygw-col-24 flex-direction-column justify-center items-center">
							<view class="flex flex-wrap diygw-col-24 flex-direction-column justify-center items-center" :class="mubOtherColor(drawInfo.numberList[6].color)">
								<view class="diygw-col-24 text11-clz">{{drawInfo.numberList[6].number}}</view>
							</view>
							<view class="diygw-col-24 text13-clz"> {{drawInfo.numberList[6].shengXiao}}/{{drawInfo.numberList[6].wuXing}} </view>
						</view>
					</view>
					<view class="diygw-col-24 text9-clz">{{drawInfo.title}}</view>
				</view>
			</view>
			<view class="flex flex-wrap diygw-col-24 flex-direction-column flex3-clz">
				<view class="flex flex-wrap diygw-col-24 white flex5-clz">
					<button class="diygw-col-6 btn8-clz diygw-btn-default" v-for="(item, index) in means_list" :key="index"  @click="scrollToAnchor(item.id)">{{item.name}}</button>
				
				</view>
			</view>
			<view class="flex flex-wrap diygw-col-24 flex-direction-column">
				<template v-for="(item, index) in adList" :key="index" :data-index="index">
					<image :src="item.image" class="response diygw-col-24 image222-clz" mode="widthFix"></image>
				</template>
			</view>
			<view class="flex flex-wrap diygw-col-24 flex-direction-column" id="means_content">
				<view class="flex flex-wrap diygw-col-24 flex-direction-column flex6-clz" v-for="(item, index) in means_list" :key="index"  :id="item.id">
					<view class="flex diygw-col-24 justify-center items-center flex-nowrap flex7-clz">
						<image src="/static/xz.png" class="response diygw-col-24 image11-clz" mode="widthFix"></image>
						<text class="text1-clz"> 【{{item.name}}】 </text>
					</view>
					<view class="flex diygw-col-24 flex-direction-column white flex8-clz">
						<view class="content">
								<table :class="item.class">
									<tbody >
										<rich-text :nodes="someObject[item.id]"></rich-text>
									</tbody>
								</table>
							<view class="contentdi" v-if="item.contentdi">
								<rich-text :nodes="item.contentdi"></rich-text>
							</view>
						</view>
					</view>
				</view>
				<view class="flex flex-wrap diygw-col-24 flex-direction-column flex6-clz"  id="imgData">
					<view class="flex diygw-col-24 justify-center items-center flex-nowrap flex7-clz">
						<image src="/static/xz.png" class="response diygw-col-24 image11-clz" mode="widthFix"></image>
						<text class="text1-clz"> 港澳六合图纸大全 </text>
					</view>
					<view class="flex diygw-col-24 flex-direction-column white flex8-clz">
						<view class="flex diygw-col-24">
							<swiper :current="swiperIndex" class="swiper" indicator-color="rgba(51, 51, 51, 0.39)" indicator-active-color="#fff" indicator-dots="true" autoplay interval="3000" circular="true" style="height: 300rpx">
								<swiper-item class="diygw-swiper-item" v-for="(item, index) in fallList" :key="index" :data-index="index">
									<view class="diygw-swiper-item-wrap">
										
										<image :src="item.image" class="diygw-swiper-image"></image>
										
									</view>
								</swiper-item>
								
							</swiper>
						</view>
						
						<image src="/static/mabiao.jpg" class="response diygw-col-24 image155-clz" mode="widthFix"></image>
						
					</view>
				</view>
			</view>
		
			<view class="version text-grey flex-direction-column flex diygw-col-24 justify-center align-center">
				<view style="margin-bottom: 10rpx;">说明</view>
				<view>本论坛所提供的内容、资料、图片和资讯，只应用在合法的澳门六合彩资料探讨，暂不适用于其它，外围博彩和使用。特此声明! </view>
					<view class="diygw-pzx" style="border-bottom: 1px solid rgb( 229,230,235 ) "></view>
				<view>论坛免责声明:以上所有广告内容均为赞助商提供，本站不对其经营行为负责。浏览或使用者须自行承担有关责任，本网站恕不负责。</view>
			</view>
			<view class="flex diygw-col-24 line-clz"></view>
			<view class="clearfix"></view>
			<view class="flex diygw-col-0 right-bottom floatbar-clz flex justify-center items-center" v-if="isShow" @click="topBack">
				<text class=" diy-icon-top text110-clz"> </text>
			</view>
	</view>
</template>

<script>
	import site from "../siteinfo.js"
	import request from '@/utils/request';
	import { Lunar } from 'lunar-javascript';
	export default {
		data() {
			return {
				tabsDatas: [{ text: `澳门六合彩`, icon: `` }],
				// ad广告数组
				adList:[],
				fallList:[],
				tabsLeft: 0,
				tabsWidth: 0,
				tabsItemWidth: 0,
				tabsIndex: 0,
				isShow:false,
				means_list:[
					{
						name:"五肖一码",
						class:"toushu",
						id:"xiaoma_xiaoma",
						contentdi:""
					},
					{
						name:"一肖一码",
						class:"",
						id:"jinzita_jinzita",
						contentdi:""
					},
					{
						name:"平特七言",
						class:"",
						id:"pingtewuyan",
						contentdi:""
					},
					{
						name:"绝杀两肖",
						class:"",
						id:"jueshaliangxiao",
						contentdi:""
					},
					{
						name:"单双中特",
						class:"",
						id:"danshuang",
						contentdi:""
					},
					{
						name:"大小中特",
						class:"",
						id:"daxiao",
						contentdi:""
					},
					{
						name:"波色中特",
						class:"",
						id:"bose",
						contentdi:""
					},
					
					{
						name:"号码中特",
						class:"",
						id:"haoma",
						contentdi:""
					},
					{
						name:"尾大小",
						class:"",
						id:"weidaxiao_shu",
						contentdi:"尾大小玩法:特码数字尾数大于等于5为尾大"
					},
					{
						name:"家野肖中特",
						class:"",
						id:"jiaye",
						contentdi:"【家禽】:牛,马,羊,鸡,狗,猪<br> 【野兽】:鼠,虎,兔,龙,蛇,猴"
					},
					{
						name:"合单双中特",
						class:"",
						id:"hedanshuang_shu",
						contentdi:"合单双玩法:特码数字头尾数相加能除2为双"
					},
					{
						name:"五行中特",
						class:"",
						id:"wuxing",
						contentdi:""
					},
					{
						name:"六合肖中特",
						class:"",
						id:"liuhexiao",
						contentdi:""
					},
					{
						name:"三合肖中特",
						class:"",
						id:"sanhexiao",
						contentdi:""
					},
					{
						name:"三头中特",
						class:"",
						id:"toushu_div_tetou",
						contentdi:""
					},
					{
						name:"方位肖中特",
						class:"",
						id:"fangweixiao",
						contentdi:"【东肖】:虎,兔,龙 【南肖】:马,蛇,羊<br>【西肖】:鸡,猴,狗 【北肖】:鼠,猪,牛"
					},
					{
						name:"男女肖中特",
						class:"",
						id:"nannv",
						contentdi:"【男肖】:鼠,牛,虎,龙,马,猴,狗<br> 【女肖】:兔,蛇,羊,鸡,猪"
					},
					{
						name:"琴棋书画",
						class:"",
						id:"qinqishuhua",
						contentdi:"【琴肖】:兔,蛇,鸡 【棋肖】:鼠,牛,狗<br>【书肖】:虎,龙,马 【画肖】:羊,猴,猪"
					},
					{
						name:"代码肖中特",
						class:"",
						id:"daimingxiao",
						contentdi:""
					},
					{
						name:"五尾中特",
						class:"",
						id:"weishu_div_tewei",
						contentdi:""
					},
					{
						name:"半波单双",
						class:"",
						id:"banbodanshuang_shu",
						contentdi:""
					},
					{
						name:"单双大小",
						class:"",
						id:"danshuangdaxiao_shu",
						contentdi:""
					},
					{
						name:"天地肖中特",
						class:"",
						id:"tiandi",
						contentdi:"【天肖】:兔,马,猴,猪,牛,龙<br> 【地肖】:蛇,羊,鸡,狗,鼠,虎"
					},
					{
						name:"头单双中特",
						class:"",
						id:"toudanshuang_shu",
						contentdi:""
					},
				],
				scrollIntoViewId: '',
				// 定时请求，用来存储setInterval的ID，便于后续清除,
				intervalId: null, 
				// 当前是否在开奖 1开奖中，2已开奖
				isOpenDraw:2,
				// 开奖日期
				lotteryTimeList:[],
				// 开奖信息
				drawInfo:{
					numberList:[],
					originalDataList:[],
					nextLotteryTimestamp:0,
					period:"",
					title:"",
					playDate:''
				},
				// 每页条数
				pageSize: 5,
				// 开奖记录
				recordList:[],
				someObject: {
					toushu_div_tetou:'',
				} // 这个对象将用于动态添加属性
				
			};
		},
		onShow() {
		
		},
		onLoad(option) {
			this.init();
		},
		onPageScroll(e){
			if(e.scrollTop>=200){
				// 显示
				this.isShow=true
			}else{
				// 隐藏
				this.isShow=false
			}
		},
		methods: {
			async init() {
				this.getDraw();
				this.getSite();
				this.getDrawList();
				this.getFall();
				
			},
			scrollToAnchor(e) {
				uni.createSelectorQuery().select("#nav").boundingClientRect(data=>{  
					//最外层盒子的节点
					uni.createSelectorQuery().select("#" + e).boundingClientRect(res=>{  
						uni.pageScrollTo({
							duration: 100,//过渡时间
							scrollTop: res.top - data.top,//到达距离顶部的top值
						})
						console.log(res.top)
					}).exec()
				}).exec()
			},
			// 下期日期
			displayDate(timestamp) {
				var date = new Date(timestamp);
				var year = date.getFullYear();
				var month = (date.getMonth() + 1).toString().padStart(2, '0'); // 添加前导零
				var day = date.getDate().toString().padStart(2, '0'); // 添加前导零
				return `${month}月${day}日`;
			},
			// 倒计时请求接口
			triggerAction(e) {
				setTimeout(this.startInterval, e); 
	
			},
			// 开奖定时器，每隔5000毫秒（即5秒）执行executePeriodically
			startInterval() {
			  this.intervalId = setInterval(this.getDraw, 5000);
			},
			// 停止开奖定时器
			stopInterval() {
			  if (this.intervalId) {
				clearInterval(this.intervalId);
				this.intervalId = null; // 重置intervalId
			  }
			},
			// 计算球体颜色2
			mubOtherColor(e){
				if(e == 3){
					return 'flexbag-1'
				}else if(e == 1){
					return 'flexbag-2'
				}else if(e == 2){
					return 'flexbag-3'
				}else{
					return 'flexbag-0'
				}
			},
			// 获取配置
			getSite(){
				var _thas = this;
				request({
				  url: '/cms/list/site',
				  method: 'GET',
				}).then((res) => {
				  this.adList = res.ad_list;
				})
			},
			getFall(){
				var _thas = this;
				request({
				  url: '/app/tuku/wapapi/pic/index',
				  method: 'GET',
				  data: {
				  	limit:5,
				  	page: 1
				  },
				}).then((res) => {
				  _thas.fallList = res.data;
				})
			},
			getDraw(e){
				var _thas = this;
				request({
				  url: '/app/tuku/wapapi/lottery/index',
				  method: 'GET',
				}).then((newData) => {
					
					let playDate =  _thas.displayDate(newData.next_lottery_timestamp*1000);
					let nextLotteryTimestamp = newData.next_lottery_timestamp*1000-new Date().getTime();
					let getOpenTime = nextLotteryTimestamp - 300000;
									
					let newInfo = {
						numberList:newData.number_list,
						originalDataList:newData.original_data_list,
						nextLotteryTimestamp:nextLotteryTimestamp,
						period:newData.period,
						title:newData.title,
						playDate:playDate,
						year:newData.year
					}
					_thas.isOpenDraw = newData.status;
					_thas.drawInfo = newInfo;
				})
				
			},
			getDrawList(){
				var _thas = this;
				request({
				  url: '/app/tuku/wapapi/lottery/history',
				  method: 'GET',
				  data: {
				  	lotteryType:10,
				  	page:1,
				  },
				}).then((res) => {
				
				  let data = res.data
				  const newData = data.map(list => {
				  	
				      let number = list.original_data_list;
					  let lunarYear = Lunar.fromDate(new Date(list.lottery_time)).getYear();
				      return {
						qishu: list.period,
						nian: list.year,
						lunar: lunarYear,
						hao1: number[0]< 10 ? '0' + number[0] :"" +number[0],
				  		hao2: number[1]< 10 ? '0' + number[1] :"" +number[1],
				  		hao3: number[2]< 10 ? '0' + number[2] :"" +number[2],
				  		hao4: number[3]< 10 ? '0' + number[3] :"" +number[3],
				  		hao5: number[4]< 10 ? '0' + number[4] :"" +number[4],
				  		hao6: number[5]< 10 ? '0' + number[5] :"" +number[5],
				  		hao7: number[6]< 10 ? '0' + number[6] :"" +number[6],
				      };
				  });
				  let nextLotteryTime= data[0].next_lottery_time;
				  let nextLunarYear = Lunar.fromDate(new Date(nextLotteryTime)).getYear();
				  let year = Number(nextLotteryTime.split('-')[0]);
				  newData.unshift({
				  	qishu: data[0].next_period,
				  	nian: year,
					lunar: nextLunarYear,
				  	hao1: '00',
				  	hao2: '00',
				  	hao3: '00',
				  	hao4: '00',
				  	hao5: '00',
				  	hao6: '00',
				  	hao7: '00',
				  })
				  
				  _thas.recordList = newData;
				  this.getType();
				})
				
			},
			getType(){
				var _thas = this;
				let jsonData = this.recordList;
				let newJsonData =jsonData.slice(0, 2);
				let arr = this.means_list;
				arr.forEach(function (item) {
				    _thas.apiwf(jsonData,item.id);
				});
				//金字塔玩法
				_thas.apiwf(newJsonData,'jinzita_jinzita');
			},
			async apiwf(data,type){
				const dataList = await request({
				     method:'POST',
					 url: '/app/tuku/wapapi/mean/index',
				     header:{
				     	'content-type': 'application/json'
				     },
				     data:{data: data,type: type},
				});
				// 使用方括号表示法来动态设置对象属性
				this.someObject[type] = '<table>'+dataList+'</table>'; 
				// 如果dynamicKey为'e'，这行代码等同于this.someObject.e = value;
			},
			topBack(){
				uni.pageScrollTo({
					scrollTop:0,   // 滚动到页面的目标位置  这个是滚动到顶部, 0 
					duration:300  // 滚动动画的时长
				})
			}
		}
	};
</script>

<style lang="scss" scoped>
	.flex-clz {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 99; /* 确保头部在最上层 */
		flex-shrink: 0;
		padding-top: 10rpx;
		padding-left: 20rpx;
		padding-bottom: 10rpx;
		background-image: url(/static/myloginbg.07f20972.png);
		background-size: 100% 278rpx;
		background-repeat: no-repeat;
		height: 100rpx !important;
		padding-right: 20rpx;
	}
	.icon-clz {
		color: #ffffff;
	}
	.icon {
		font-size: 44rpx;
	}
	.text-clz {
		color: #ffffff;
		font-size: 30rpx !important;
		white-space: nowrap;
		margin-left: 10rpx;
		text-decoration: none;
	}
	.flex1-clz {
		padding-top: 20rpx;
		padding-left: 20rpx;
		padding-bottom: 20rpx;
		padding-right: 20rpx;
	}
	.noticebar-clz {
		border-bottom-left-radius: 20rpx;
		overflow: hidden;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		border-bottom-right-radius: 20rpx;
	}
	.flex2-clz {
		flex-shrink: 0;
		height: 400rpx !important;
	}
	.flex3-clz {
		padding-top: 20rpx;
		padding-left: 20rpx;
		padding-bottom: 20rpx;
		padding-right: 20rpx;
	}
	.flex5-clz {
		padding-top: 10rpx;
		border-bottom-left-radius: 20rpx;
		overflow: hidden;
		padding-left: 10rpx;
		padding-bottom: 20rpx;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		border-bottom-right-radius: 20rpx;
		padding-right: 10rpx;
	}
	.btn8-clz {
		padding-top: 10rpx;
		border-bottom-left-radius: 8rpx;
		color: #0b0b0b;
		padding-left: 10rpx;
		padding-bottom: 10rpx;
		border-top-right-radius: 8rpx;
		margin-right: 10rpx;
		background-color: #f5f6f7;
		margin-left: 10rpx;
		overflow: hidden;
		width: calc(25% - 10rpx - 10rpx) !important;
		border-top-left-radius: 8rpx;
		margin-top: 10rpx;
		border-bottom-right-radius: 8rpx;
		margin-bottom: 0rpx;
		text-align: center;
		padding-right: 10rpx;
	}
	
	.flex6-clz {
		padding-top: 20rpx;
		padding-left: 20rpx;
		padding-bottom: 20rpx;
		padding-right: 20rpx;
	}
	.flex7-clz {
		flex-shrink: 0;
		background-size: 100% 100%;
		background-image: url(/static/title-bg.10e1aec4.png);
		height: 76rpx !important;
	}
	.text1-clz {
		font-size: 32rpx !important;
		font-weight: 600;
		color: #ffffff;
		text-align: center;
	}
	.flex8-clz {
		flex-shrink: 0;
		border-bottom-left-radius: 20rpx;
		overflow: hidden;
		border-top-left-radius: 0rpx;
		border-top-right-radius: 0rpx;
		border-bottom-right-radius: 20rpx;
		padding: 10rpx;

	}
	.container123679 {
		background: #eee;
		background-image: url(/static/boxshaowbg.96c8f779.png);
		background-size: 100% 860rpx;
		background-repeat: no-repeat;
		
	}
	.flex15-clz {
		padding: 20rpx;
	}
	.text9-clz {
		margin-left: 0rpx;
		color: #e71607;
		width: calc(100% - 0rpx - 0rpx) !important;
		font-family: 雅黑;
		margin-top: 10rpx;
		margin-bottom: 15rpx;
		text-align: center;
		margin-right: 0rpx;
	}
	.flex16-clz {
		background-color: #ffffffff;
		overflow: hidden;
		border-radius: 12rpx;

	}
	.flex18-clz {
		margin-left: 20rpx;
		width: calc(100% - 20rpx - 20rpx) !important;
		margin-top: 20rpx;
		margin-bottom: 10rpx;
		margin-right: 20rpx;
	}
	.text12-clz {
		font-size: 28rpx !important;
		font-family: 雅黑;
	}
	.text26-clz {
		color: #ff0000;
		font-family: 雅黑;
	}
	.text100-clz {
		color: rgb(50, 149, 255);
	}
	.text10-clz {
		color: rgb(50, 149, 255);
		font-size: 28rpx !important;
		font-family: 雅黑;
		text-align: right;
		text-decoration: none;
	}
	.flex21-clz {
		padding-top: 10rpx;
		padding-left: 20rpx; 
		padding-bottom: 10rpx;
		padding-right: 20rpx;
	}
	.flexbag-0 {
		flex-shrink: 0;
		background-size: contain;
		width: 90rpx !important;
		background-image: url(/static/number-icon-0.png);
		height: 90rpx !important;
	}
	.flexbag-1 {
		flex-shrink: 0;
		background-size: contain;
		width: 90rpx !important;
		background-image: url(/static/number-icon-1.png);
		height: 90rpx !important;
	}
	.flexbag-2 {
		flex-shrink: 0;
		background-size: contain;
		width: 90rpx !important;
		background-image: url(/static/number-icon-2.png);
		height: 90rpx !important;
	}
	.flexbag-3 {
		flex-shrink: 0;
		background-size: contain;
		width: 90rpx !important;
		background-image: url(/static/number-icon-3.png);
		height: 90rpx !important;
	}
	.text11-clz {
		font-weight: bold;
		font-size: 44rpx !important;
		font-family: 雅黑;
		text-align: center;
	}
	.text13-clz {
		margin-left: 0rpx;
		width: calc(100% - 0rpx - 0rpx) !important;
		font-family: 雅黑;
		margin-top: 6rpx;
		margin-bottom: 0rpx;
		text-align: center;
		margin-right: 0rpx;
	}
	.text22-clz {
		font-weight: bold;
		font-size: 44rpx !important;
		font-family: 雅黑;
		text-align: center;
	}
	.content{
	    font-size: 28rpx;
	    font-weight: bold;
	    
	    border-radius: 5rpx;
	    overflow: hidden;
	    background-image: linear-gradient(to right, #FFD3D3, #FFCCCC, #FFD8D8, #FFDBDB, #FFDFDF, #FFD9D9, #FFD3D3);
	    filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#99000000, endcolorstr=#99000000);
	}
	.contentdi{
		padding: 20rpx 10rpx;
		font-size:24rpx;
		text-align:center;
		background: #5b9966;
		color: #fff;
		line-height:40rpx;
		font-weight: bold;
	}
	
	table {
	    width: 100%;
	    max-width: 100%;
	    border-collapse: collapse;
	    margin-top: 0rpx;
	    font-weight: bold;
	    word-wrap: break-word;
	    word-break: break-all;
	    text-align: center;
	}
	

	
	th, td {
		border: 1px solid #ccc;
		padding: 20rpx 10rpx;
		word-wrap: break-word;
		display: table-cell;
		vertical-align: inherit;
	}

	td:nth-child(2) {
		max-width: 300rpx; 
		overflow: hidden;
	}


	.content span {
		background-color: yellow;
	}
			
	.toushu tr td:first-child {
	    background-color: #000000; /* 黑色背景 */
	    color: #FFFFFF; /* 白色字体 */
	}
	
	.toushu tr td:nth-child(2) {
	    background-color: #808080; /* 灰色背景 */
	    color: #0000FF; /* 蓝色字体 */
	}
	
	.toushu tr td:nth-child(3) {
	    background-color: #FF0000; /* 红色背景 */
	    color: #00ff00; /* 绿色字体 */
	}
	.line-clz {
		flex-shrink: 0;
		height: 100rpx !important;
	}
	.line-clz1 {
		flex-shrink: 0;
		height: 100rpx !important;
	}
	.image11-clz {
		flex-shrink: 0;
		width: 40rpx !important;
		height: 40rpx !important;
	}
	.floatbar-clz {
		bottom: 60rpx;
		width: 80rpx !important;
		height: 80rpx !important;
		right: 20rpx;
		border-radius: 80rpx;
		background: rgba(255, 255, 255, 0.80);
		box-shadow: 0rpx 0rpx 8rpx 1px rgba(72, 75, 78, 0.43);
	}
	.flex51-clz {
			padding-top: 20rpx;
			padding-left: 20rpx;
			padding-bottom: 10rpx;
			padding-right: 20rpx;
	}
	.text110-clz{
		font-size: 40rpx;
		color: #353d44;
	}
	.tabs-clz {
		border-radius: 20rpx;
		overflow: hidden;
	}
	.tabs-item-title {
		color: #3399ff !important;
		font-size: 12px !important;
	}
	.tabs-title {
	}
	.tabs-item-title.cur {
		color: #3399ff !important;
		font-size: calc(4px + 12px) !important;
	}
	.version{
		padding: 20rpx;
	}
	.image222-clz {
		margin-left: 10rpx;
		width: calc(100% - 10rpx - 10rpx) !important;
		margin-top: 0rpx;
		margin-bottom: 6rpx;
		margin-right: 10rpx;
	}
	.image155-clz {
		margin-left: 0rpx;
		width: calc(100% - 0rpx - 0rpx) !important;
		margin-top: 10rpx;
		margin-bottom: 0rpx;
		margin-right: 0rpx;
	}
</style>
