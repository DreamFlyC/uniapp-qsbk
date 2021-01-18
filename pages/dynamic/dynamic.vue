<template>
	<view>
		<!-- 自定义导航栏 -->
		<qs-nav-bar>
			<!-- 导航栏中间部分 -->
			<view style="margin-left: 144rpx;"> <swiper-tab :current="tabIndex" :items="tabbars" :scrollFlag="true" :isEqually="false" @clickItem="handleTabTap"></swiper-tab> </view>
		</qs-nav-bar>

		<!-- 内容区域 -->
		<view class="main-box animate__animated animate__fadeIn">
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
						<!-- 图文列表 -->
						<dynamic-box v-for="(item, index) in followList" type="guanzhu" :key="index" :item="item">
							<view class="follow-text iconfont b-t" :class="!item.userInfo.follow ?'icon-add-circle':'icon-70chenggong'">
								<text v-if="!item.userInfo.follow">点击关注TA</text>
								<text v-else style="color: var(--bColor);">已关注</text>
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
					<scroll-view v-if="huatiList.length" scroll-y class="list" @scrolltolower="handleLoadMore()" enable-back-to-top>
						<!-- 图文列表 -->
						<dynamic-box v-for="(item, index) in huatiList" type="huati" :key="index" :item="item"></dynamic-box>
						<!-- 上拉加载 -->
						<uni-load-more :status="status" :content-text="contentText" v-if="nearList.length > 0" @clickLoadMore="handleLoadMore" />
					</scroll-view>
					<!-- 没有数据 -->
					<view v-else style="margin-top: 200rpx;"> <no-data></no-data> </view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
import qsNavBar from '../../components/custom/qs-nav-bar/qs-nav-bar.vue';
import dynamicBox from '../../components/custom/dynamic/dynamic-box.vue';
import swiperTab from '../../components/custom/swiper-tab/swiper-tab.vue';
import noData from '../../components/custom/no-data/no-data.vue';

export default {
	components: {
		swiperTab,
		qsNavBar,
		dynamicBox,
		noData
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
			huatiList: [], // 话题列表
			swiperHeight: 500,
			tabIndex: 0,
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
		// 这里的scroll-view设置占满整个屏幕，height设置100%；swiper的height设置成屏幕的高度-减去tab栏的高度(50)-原生导航栏的高度(44),需要微信提供的api获取设备屏幕高度数据
		let res = uni.getSystemInfoSync();
		// #ifdef APP-PLUS
		// this.swiperHeight = res.windowHeight - 94;
		this.swiperHeight = res.windowHeight - 44;
		// #endif

		// #ifndef APP-PLUS
		this.swiperHeight = res.windowHeight - 44;
		// #endif
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

.icon-add-circle{
	color: var(--color);
	font-size: 40rpx;
}

.icon-70chenggong{
	color: var(--bColor);
}

.follow-text{
	justify-content: center;
	    align-items: center;
	    display: flex;
	padding: 15rpx 0;
	font-weight: 600;
	letter-spacing: 2px;
	text-align: center;
	
	text{
		font-size: 32rpx;
		margin-left: 10rpx;
		color: #000000;
	}
}

</style>
