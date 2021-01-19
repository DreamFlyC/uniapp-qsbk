<template>
	<view>
		<!-- 自定义导航栏 -->
		<qs-nav-bar>
			<!-- 导航栏中间部分 -->
			<view style="margin-left: 144rpx;"> <swiper-tab :current="tabIndex" :items="tabbars" :scrollFlag="true" :isEqually="false" @clickItem="handleTabTap"></swiper-tab> </view>
		</qs-nav-bar>

		<!-- 内容区域 -->
		<view class="main-box">
			<swiper :style="{ height: swiperHeight + 'px' }" :current="tabIndex" @change="handleSwiperChange">
				<!-- 附近 -->
				<swiper-item>
					<scroll-view v-if="nearList.length" scroll-y class="list" @scrolltolower="handleLoadMore()" enable-back-to-top>
						<!-- 图文列表 -->
						<dynamic-box v-for="(item, index) in nearList" type="near" :key="index" :item="item"></dynamic-box>
						<!-- 上拉加载 -->
						<uni-load-more :status="status" :content-text="contentText" v-if="nearList.length > 0" @clickLoadMore="handleLoadMore" />
					</scroll-view>
					<!-- 没有数据 -->
					<view v-else style="margin-top: 200rpx;"> <no-data></no-data> </view>
				</swiper-item>

				<!-- 关注 -->
				<swiper-item>
					<scroll-view v-if="followList.length" scroll-y class="list" @scrolltolower="handleLoadMore()" enable-back-to-top>
						<!-- 发现糗友 -->
						<view class="follow-faxain">
							<text>发现糗友</text><br />
							<text>有意思的糗友都在这里,关注TA,收货友...</text> <image src="/static/img/follow-bg.png" mode="aspectFill"></image>
						</view>
						<!-- 图文列表 -->
						<dynamic-box v-for="(item, index) in followList" type="guanzhu" :key="index" :item="item">
							<view class="follow-text iconfont b-t" :class="!item.userInfo.follow ? 'icon-add-circle' : 'icon-70chenggong'">
								<text v-if="!item.userInfo.follow">点击关注TA</text> <text v-else style="color: var(--bColor);">已关注</text>
							</view>
						</dynamic-box>
						<!-- 点击关注 -->

						<!-- 上拉加载 -->
						<uni-load-more :status="status" :content-text="contentText" v-if="nearList.length > 0" @clickLoadMore="handleLoadMore" />
					</scroll-view>
					<!-- 没有数据 -->
					<view v-else style="margin-top: 200rpx;"> <no-data></no-data> </view>
				</swiper-item>

				<!-- 话题 -->
				<swiper-item>
					<scroll-view scroll-y class="container list" @scrolltolower="handleLoadMore()" enable-back-to-top>
						<!-- 搜索框组件 -->
						<dynamic-search></dynamic-search>
						<!-- 轮播图 -->
						<view class="huati-swiper-box">
							<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-active-color="#FFFFFF" class="huati-swiper">
								<swiper-item>
									<navigator url="../index/index">
										<view class="swiper-item"> <image src="/static/demo/datapic/1.jpg" mode="aspectFill"></image> </view>
									</navigator>
								</swiper-item>
								<swiper-item>
									<navigator url="../index/index">
										<view class="swiper-item"> <image src="/static/demo/datapic/2.jpg" mode="aspectFill"></image> </view>
									</navigator>
								</swiper-item>
								<swiper-item>
									<navigator url="../index/index">
										<view class="swiper-item"> <image src="/static/demo/datapic/3.jpg" mode="aspectFill"></image> </view>
									</navigator>
								</swiper-item>
							</swiper>
						</view>
						<!-- 搜索历史记录 -->
						<view class="search-history"></view>
						<!-- 热门分类 -->
						<view class="huati-hot b-b b-t">
							<view class="uni-flex-sbc"> <view>热门分类</view> <view @tap="handleMoreCategory()">更多 ></view> </view>
							<view class="huati-hot-category">
								<view v-for="(item, index) in hotCategory" :key="index" @tap="$navTo.togo('./huati/category',{id:item.id})">{{ item.name }}</view>
							</view>
						</view>
						<!-- 最近更新 -->
						<view class="huati-hot">
							<view>最近更新</view>
							<view class="huati-update">
								<huati-box :list="huatiList" @handleClick="handleClick"></huati-box>
							</view>
						</view>

						<!-- 上拉加载 -->
						<uni-load-more :status="status" :content-text="contentText" v-if="nearList.length > 0" @clickLoadMore="handleLoadMore" />
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
import qsNavBar from '@/components/custom/qs-nav-bar/qs-nav-bar.vue';
import dynamicBox from '@/components/custom/dynamic/dynamic-box.vue';
import dynamicSearch from '@/components/custom/dynamic/dynamic-search.vue';
import huatiBox from '@/components/custom/dynamic/huati-box.vue';
import swiperTab from '@/components/custom/swiper-tab/swiper-tab.vue';
import noData from '@/components/custom/no-data/no-data.vue';

export default {
	components: {
		swiperTab,
		qsNavBar,
		dynamicBox,
		noData,
		dynamicSearch,
		huatiBox
	},
	data() {
		return {
			status: 'more', // 上拉加载 [more|loading|noMore] loading 的状态
			contentText: {
				contentdown: '上拉加载更多~',
				contentrefresh: '加载中',
				contentnomore: '我是有底线的~'
			},
			// 附近列表
			nearList: [
				{
					id: 1,
					userInfo: {
						avatar: '/static/demo/userpic/16.jpg',
						nickname: '一笑了尘缘',
						follow: false, // 是否关注
						time: '2021-01-18 15:25:00', // 发言时间
						sex: 1, // 1男 2女 0 未知
						age: 32, // 年龄
						address: ['广东省', '惠州', '惠阳'] // 地址
					},
					title: '民政局的人都认识我了', // 标题
					mediaInfo: {
						type: 'img', // 媒体类型,img图片,video视频
						imageList: ['/static/demo/datapic/11.jpg'], // 图片列表
						playNum: 20000, // 播放次数
						countTime: '00:09' // 播放时长
					},
					operInfo: {
						commentNum: 123, // 评论数量
						zanNum: 122 // 点赞数量
					}
				},
				{
					id: 2,
					userInfo: {
						avatar: '/static/demo/userpic/8.jpg',
						nickname: '铁锤妹妹!~',
						follow: false, // 是否关注
						time: '2021-01-18 15:20:00', // 发言时间
						sex: 2, // 1男 2女 0 未知
						age: 22, // 年龄
						address: ['广东省', '深圳', '龙岗'] // 地址
					},
					title:
						'看到一个帖子：儿媳和公公婆婆一起住，大姑姐三天两头拖家带口去娘家住（一家四口），一住就好几天，一家人的东西基本占满了房子，弟媳就网上吐槽，觉得不习惯我说这大姑姐拎不清，嫁出去了，就不要三天两头拖家带口回去，逢年过节再回然后很多人说：她回她自己娘家有什么不妥，又不是回弟媳家我真的不知道应该怎么说', // 标题
					operInfo: {
						commentNum: 123, // 评论数量
						zanNum: 122 // 点赞数量
					}
				},
				{
					id: 3,
					userInfo: {
						avatar: '/static/demo/userpic/8.jpg',
						nickname: '返回福建赛!~',
						follow: false, // 是否关注
						time: '2021-01-15 15:20:00', // 发言时间
						sex: 2, // 1男 2女 0 未知
						age: 22, // 年龄
						address: ['广东省', '深圳', '龙岗'] // 地址
					},
					title:
						'看到一个帖子：儿媳和公公婆婆一起住，大姑姐三天两头拖家带口去娘家住（一家四口），一住就好几天，一家人的东西基本占满了房子，弟媳就网上吐槽，觉得不习惯我说这大姑姐拎不清，嫁出去了，就不要三天两头拖家带口回去，逢年过节再回然后很多人说：她回她自己娘家有什么不妥，又不是回弟媳家我真的不知道应该怎么说', // 标题
					mediaInfo: {
						type: 'img', // 媒体类型,img图片,video视频
						imageList: [
							'/static/demo/datapic/13.jpg',
							'/static/demo/datapic/14.jpg',
							'/static/demo/datapic/15.jpg',
							'/static/demo/datapic/16.jpg',
							'/static/demo/datapic/17.jpg',
							'/static/demo/datapic/18.jpg',
							'/static/demo/datapic/19.jpg',
							'/static/demo/datapic/20.jpg',
							'/static/demo/datapic/21.jpg'
						], // 图片列表
						playNum: 20000, // 播放次数
						countTime: '00:09' // 播放时长
					},
					operInfo: {
						commentNum: 123, // 评论数量
						zanNum: 122 // 点赞数量
					}
				}
			],
			followList: [
				{
					id: 4,
					userInfo: {
						avatar: '/static/demo/userpic/8.jpg',
						nickname: '铁锤妹妹!~',
						follow: true, // 是否关注
						time: '2021-01-15 15:20:00', // 发言时间
						sex: 2, // 1男 2女 0 未知
						age: 22, // 年龄
						address: ['湖南', '衡阳', '珠晖'] // 地址
					},
					title: '分享了糗事', // 标题
					mediaInfo: {
						type: 'share', // 媒体类型,img图片,video视频,share分享
						src: '/static/demo/datapic/13.jpg',
						title: '儿科护士一枚<br>早晨,要给一个4岁的宝宝抽血,可他暗示法是废物efasda色个色个顺风车撒旦废刷到过'
					},
					operInfo: {
						commentNum: 123, // 评论数量
						zanNum: 122 // 点赞数量
					}
				},
				{
					id: 4,
					userInfo: {
						avatar: '/static/demo/userpic/8.jpg',
						nickname: '铁锤妹妹!~',
						follow: false, // 是否关注
						time: '2021-01-15 15:20:00', // 发言时间
						sex: 2, // 1男 2女 0 未知
						age: 22, // 年龄
						address: ['湖南', '衡阳', '珠晖'] // 地址
					},
					title: '分享了糗事', // 标题
					mediaInfo: {
						type: 'share', // 媒体类型,img图片,video视频,share分享
						src: '/static/demo/datapic/13.jpg',
						title: '儿科护士一枚<br>早晨,要给一个4岁的宝宝抽血,可他暗示法是废物efasda色个色个顺风车撒旦废刷到过'
					},
					operInfo: {
						commentNum: 123, // 评论数量
						zanNum: 122 // 点赞数量
					}
				},
				{
					id: 4,
					userInfo: {
						avatar: '/static/demo/userpic/8.jpg',
						nickname: '铁锤妹妹!~',
						follow: false, // 是否关注
						time: '2021-01-15 15:20:00', // 发言时间
						sex: 2, // 1男 2女 0 未知
						age: 22, // 年龄
						address: ['湖南', '衡阳', '珠晖'] // 地址
					},
					title: '分享了糗事', // 标题
					mediaInfo: {
						type: 'share', // 媒体类型,img图片,video视频,share分享
						src: '/static/demo/datapic/13.jpg',
						title: '儿科护士一枚<br>早晨,要给一个4岁的宝宝抽血,可他暗示法是废物efasda色个色个顺风车撒旦废刷到过'
					},
					operInfo: {
						commentNum: 123, // 评论数量
						zanNum: 122 // 点赞数量
					}
				}
			], // 关注列表
			huatiList: [
				{
					image:'/static/demo/userpic/10.jpg',
					title:'#天天打卡#',
					desc:'天梯第一',
					dongtai:990052,
					nowday:112
				},
				{
					image:'/static/demo/userpic/11.jpg',
					title:'#我的心情#',
					desc:'每天赞一点努力和可爱,去换取一束光和更加美丽辽阔的海洋',
					dongtai:324531,
					nowday:13
				},
				{
					image:'/static/demo/userpic/12.jpg',
					title:'#迟来的爱#',
					desc:'王森房卡是伐啦深刻地拉开分配给客人配偶',
					dongtai:990052,
					nowday:112
				},
				{
					image:'/static/demo/userpic/13.jpg',
					title:'#闲人诗社#',
					desc:'将进酒,我欲乘风归去,啊是发顺丰是个狂热',
					dongtai:990052,
					nowday:112
				}
			], // 话题列表
			hotCategory: [
				{ id: 1, name: '娱乐' },
				{ id: 2, name: '最新' },
				{ id: 3, name: '情感' },
				{ id: 4, name: '喜爱' },
				{ id: 5, name: '游戏' },
				{ id: 6, name: '城市' },
			],
			swiperHeight: 500,
			tabIndex: 2,
			tabbars: [
				{
					id: 1,
					name: '附近'
				},
				{
					id: 2,
					name: '关注'
				},
				{
					id: 3,
					name: '话题'
				}
			]
		};
	},
	/* 生命周期函数 */
	onLoad() {
		// #ifdef MP
		//获取胶囊按钮的数据,微信小程序
		this.topMenu = uni.getMenuButtonBoundingClientRect();
		// #endif

		/* 获取话题分类 */
		// this.getTabbars();
	},
	onReady() {
		// 这里的scroll-view设置占满整个屏幕，height设置100%；swiper的height设置成屏幕的高度-减去tab栏的高度(49px)-原生导航栏的高度(44px),需要微信提供的api获取设备屏幕高度数据
		
		let that=this;
			uni.getSystemInfo({ //调用uni-app接口获取屏幕高度
				success(res) { //成功回调函数
					let titleH=uni.createSelectorQuery().select(".list"); //想要获取高度的元素名（class/id）
					titleH.boundingClientRect(data=>{
						let pH=res.windowHeight; //windoHeight为窗口高度，主要使用的是这个
						that.swiperHeight=pH-data.top  //计算高度：元素高度=窗口高度-元素距离顶部的距离（data.top）
					}).exec()
				}
			})
	},
	methods: {
		/* 导航栏点击事件 */
		handleTabTap(e) {
			this.tabIndex = e.currentIndex;
		},
		/* 页签切换事件 */
		handleSwiperChange(e) {
			let index = e.detail.current;
			if (this.tabIndex === index) {
				return;
			}
			this.tabIndex = index;
		},

		/* 上拉加载 TODO;修改status文字没变 */
		handleLoadMore(e) {
			this.status = 'loading';
			let data = [];

			setTimeout(() => {
				/* 模拟数据 */
				// this.tabList[this.tabIndex].data.push(...data);
				// this.getTopicList();
			}, 500);
			this.status = 'more';
		},
		handleClick(item){
			uni.navigateTo({
				url:'./huati/huati',
				events: {
				    // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
				    acceptDataFromOpenedPage: function(data) {
				      console.log(data)
				    },
				    someEvent: function(data) {
				      console.log(data)
				    }
				  },
				  success: function(res) {
				    // 通过eventChannel向被打开页面传送数据
				    res.eventChannel.emit('acceptDataFromOpenerPage', JSON.stringify(item))
				  }
			})
			
			/**
			 * // uni.navigateTo 目标页面 pages/test.vue
					onLoad: function(option) {
						console.log(option.query)
						const eventChannel = this.getOpenerEventChannel()
						eventChannel.emit('acceptDataFromOpenedPage', {data: 'test'});
						eventChannel.emit('someEvent', {data: 'test'});
						// 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
						eventChannel.on('acceptDataFromOpenerPage', function(data) {
							console.log(data)
						})
					}
			 */
		},
		
		/* 点击更多 */
		handleMoreCategory(){
			uni.navigateTo({
				url:'./huati/category'
			})
		}
	}
};
</script>

<style lang="scss" scoped>
.main-box {
	height: 100%;
}
.list {
	width: 100%;
	height: 100%;
}

.icon-add-circle {
	color: var(--color);
	font-size: 40rpx;
}

.icon-70chenggong {
	color: var(--bColor);
}

.follow-text {
	justify-content: center;
	align-items: center;
	display: flex;
	padding: 15rpx 0;
	text-align: center;

	text {
		font-weight: bold;
		font-size: 32rpx;
		margin-left: 10rpx;
		color: #000000;
	}
}

/* 发现糗友 */
.follow-faxain {
	background-color: #f7f7f7;
	text-align: center;
	padding-top: 20rpx;
	text:first-child {
		font-weight: bold;
		font-size: 34rpx;
	}
	text:last-child {
		color: var(--bColor);
		font-size: 24rpx;
	}
	image {
		width: 100%;
		height: 130rpx;
	}
}



.huati-swiper-box {
	padding: 40rpx 0;
	.huati-swiper {
		height: 200rpx;
		border-radius: 20rpx;
		overflow: hidden;
		.swiper-item > image {
			width: 100%;
			height: 200rpx;
			border-radius: 20rpx;
			overflow: hidden;
		}
	}
}

/* 热门分类 */
.huati-hot {
	padding: 20rpx 0;
	color: var(--bColor);

	.huati-hot-category {
		display: flex;
		view {
			font-size: 24rpx;
			background-color: #f7f6f6;
			color: #000000;
			border-radius: 10rpx;
			padding: 4rpx 15rpx;
			margin: 16rpx;
		}
		view:first-child {
			margin-left: 0;
		}
	}
}

</style>
