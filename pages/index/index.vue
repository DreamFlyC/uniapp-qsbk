<template>
	<view>
		<!-- 导航栏部分 -->
		<swiper-tab :tabbars="tabbars" :tabIndex="tabIndex" :scrollFlag="true" :scrollInto="scrollInto" @handleTabTap="handleTabTap"></swiper-tab>
		<!-- 图文列表 -->
		<view class="uni-tab-bar animate__animated animate__fadeInUp">
			<swiper class="swiper-box" :style="{ height: swiperHeight + 'px' }" :current="tabIndex" @change="handleSwiperChange">
				<swiper-item v-for="(items, index) in tabList" :key="index">
					<scroll-view v-if="items.data.length" scroll-y class="list" @scrolltolower="handleLoadMore()" enable-back-to-top>
						<!-- 图文列表 -->
						<topic-box  v-for="(item, index1) in items.data" :key="index1" :item="item" :index="index1"></topic-box>
						<!-- 上拉加载 -->
						<uni-load-more :status="status" :content-text="contentText" v-if="items.data.length > 0" @clickLoadMore="handleLoadMore" />
					</scroll-view>
					
					<!-- 没有数据 -->
					<no-data v-else></no-data>
					
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
import topicBox from '../../components/custom/topic-box/topic-box.vue';
import swiperTab from '../../components/custom/swiper-tab/swiper-tab.vue';
import noData from '../../components/custom/no-data/no-data.vue';

// 缓存每页最多
const MAX_CACHE_DATA = 100;
// 缓存页签数量
const MAX_CACHE_PAGE = 3;
export default {
	components: {
		topicBox,
		swiperTab,
		noData
	},
	data() {
		return {
			reload: false,
			status: 'more', // 上拉加载 [more|loading|noMore] loading 的状态
			contentText: {
					contentdown: '上拉加载更多~',
					contentrefresh: '加载中',
					contentnomore: '我是有底线的~'
			},
			swiperHeight: '500',
			scrollInto: '',
			cacheTab: [],
			/* 分类列表 */
			tabIndex: 1,
			categoryId: undefined,
			tabbars: [
				{ categoryId: 1, categoryName: '关注', status: 1, sort: 1, current: 0, createTime: '2021-01-07T16:11:28.000+0800', updateTime: '2021-01-07T16:11:28.000+0800', params: {} },
				{ categoryId: 2, categoryName: '推荐', status: 1, sort: 2, current: 1, createTime: '2021-01-07T16:11:28.000+0800', updateTime: '2021-01-07T16:11:28.000+0800', params: {} },
				{ categoryId: 3, categoryName: '体育', status: 1, sort: 3, current: 0, createTime: '2021-01-07T16:11:28.000+0800', updateTime: '2021-01-07T16:11:28.000+0800', params: {} },
				{ categoryId: 4, categoryName: '热点', status: 1, sort: 4, current: 0, createTime: '2021-01-07T16:11:28.000+0800', updateTime: '2021-01-07T16:11:28.000+0800', params: {} },
				{ categoryId: 5, categoryName: '财经', status: 1, sort: 5, current: 0, createTime: '2021-01-07T16:11:28.000+0800', updateTime: '2021-01-07T16:11:28.000+0800', params: {} },
				{ categoryId: 6, categoryName: '娱乐', status: 1, sort: 6, current: 0, createTime: '2021-01-07T16:11:28.000+0800', updateTime: '2021-01-07T16:11:28.000+0800', params: {} }
			],
			// 查询参数
			queryParams: {
				pageNum: 1,
				pageSize: 10
			},
			/* 话题列表 */
			tabList: [
				{
					categoryId: 1,
					data: [
						{
							id: 1,
							categoryId: 1,
							userInfo: {
								avatar: '../../static/demo/userpic/12.jpg',
								nickname: '锅德刚',
								desc: '沙雕糗友快乐源泉',
								follow: false // 是否关注
							},
							title: '民政局的人都认识我了', // 标题
							mediaInfo: {
								type: 'img', // 媒体类型,img图片,video视频
								titlePic: '../../static/demo/datapic/11.jpg', // 封面图
								playNum: 20000, // 播放次数
								countTime: '00:09' // 播放时长
							},
							operInfo: {
								flag: 1, // 0未操作,1顶,2踩
								smileNum: 941, // 笑脸数量
								cryNum: 23, // 哭脸数量
								commentNum: 123, // 评论数量
								shareNum: 43 // 转发数量
							},
							comment: {
								// 热门留言
								userInfo: {
									avatar: '../../static/demo/userpic/12.jpg',
									nickname: '指着门口说滚'
								},
								dingNum: 1230,
								content: '钱工近期!!!'
							}
						}
					]
				},
				{
					categoryId: 2,
					data: [
						{
							id: 2,
							categoryId: 2,
							userInfo: {
								avatar: '../../static/demo/userpic/11.jpg',
								nickname: 'CZP',
								desc: '沙雕糗友快乐源泉',
								follow: true // 是否关注
							},
							title: '民政局的人都认识我了', // 标题
							mediaInfo: {
								type: 'img', // 媒体类型,img图片,video视频
								titlePic: '../../static/demo/datapic/12.jpg', // 封面图
								playNum: 20000, // 播放次数
								countTime: '00:09' // 播放时长
							},
							operInfo: {
								flag: 2, // 未操作,1顶,2踩
								smileNum: 941, // 笑脸数量
								cryNum: 23, // 哭脸数量
								commentNum: 123, // 评论数量
								shareNum: 43 // 转发数量
							},
							comment: {
								// 热门留言
								userInfo: {
									avatar: '../../static/demo/userpic/12.jpg',
									nickname: '指着门口说滚'
								},
								dingNum: 110,
								content: '钱工近期!!!'
							}
						}
					]
				},
				{
					categoryId: 3,
					data: [
						{
							id: 3,
							categoryId: 3,
							userInfo: {
								avatar: '../../static/demo/userpic/13.jpg',
								nickname: 'CZP',
								desc: '沙雕糗友快乐源泉',
								follow: true // 是否关注
							},
							title: '民政局的人都认识我了', // 标题
							mediaInfo: {
								type: 'img', // 媒体类型,img图片,video视频
								titlePic: '../../static/demo/datapic/13.jpg', // 封面图
								playNum: 20000, // 播放次数
								countTime: '00:09' // 播放时长
							},
							operInfo: {
								flag: 0, // 未操作,1顶,2踩
								smileNum: 941, // 笑脸数量
								cryNum: 23, // 哭脸数量
								commentNum: 123, // 评论数量
								shareNum: 43 // 转发数量
							},
							comment: {
								// 热门留言
								userInfo: {
									avatar: '../../static/demo/userpic/12.jpg',
									nickname: '指着门口说滚'
								},
								dingNum: 110,
								content: '钱工近期!!!'
							}
						}
					]
				},
				{
					categoryId: 4,
					data: []
				},
				{
					categoryId: 5,
					data: []
				},
				{
					categoryId: 6,
					data: []
				}
			]
		};
	},
	/* 生命周期函数 */
	onLoad() {
		// 这里的scroll-view设置占满整个屏幕，height设置100%；swiper的height设置成屏幕的高度（除去tab栏的高度）,需要微信提供的api获取设备屏幕高度数据
		let res = uni.getSystemInfoSync();
		this.swiperHeight = res.windowHeight - 50;
		/* 获取话题分类 */
		this.getTabbars();
	},
	
	// 点击搜索框，跳转到搜索页
	onNavigationBarSearchInputClicked() {
		uni.navigateTo({
			url: '../search/search'
		});
	},
	
	// 监听原生导航栏按钮点击事件
	onNavigationBarButtonTap(e){
		
	},
	
	methods: {
		/* 导航栏点击事件 */
		handleTabTap(e) {
			this.tabIndex = e.index;
		},
		/* 页签切换事件 */
		handleSwiperChange(e) {
			let index = e.target.current || e.detail.current;
			this.switchTab(index);
		},

		/* 切换页签 */
		switchTab(index) {
			/* if (this.tabList[index].data.length === 0) {
		        this.getList(index);
		    } */

			if (this.tabIndex === index) {
				return;
			}
			// 缓存 tabId
			if (this.tabList[this.tabIndex].data.length > MAX_CACHE_DATA) {
				let isExist = this.cacheTab.indexOf(this.tabIndex);
				if (isExist < 0) {
					this.cacheTab.push(this.tabIndex);
					console.log('cache index:: ' + this.tabIndex);
				}
			}

			this.tabIndex = index;

			// 释放 tabId
			if (this.cacheTab.length > MAX_CACHE_PAGE) {
				let cacheIndex = this.cacheTab[0];
				this.clearTabData(cacheIndex);
				this.cacheTab.splice(0, 1);
				console.log('remove cache index:: ' + cacheIndex);
			}
		},
		clearTabData(e) {
			this.tabList[e].data.length = 0;
			this.tabList[e].loadingText = '加载更多...';
		},

		/* 上拉加载 TODO;修改status文字没变 */
		handleLoadMore(e) {
			this.status = 'loading';
			let categoryId = this.tabList[this.tabIndex].categoryId;
			let data = [
				{
					id: 1,
					categoryId: 1,
					userInfo: {
						avatar: '../../static/demo/userpic/12.jpg',
						nickname: '锅德刚',
						desc: '沙雕糗友快乐源泉',
						follow: false // 是否关注
					},
					title: '民政局的人都认识我了', // 标题
					mediaInfo: {
						type: 'img', // 媒体类型,img图片,video视频
						titlePic: '../../static/demo/datapic/11.jpg', // 封面图
						playNum: 20000, // 播放次数
						countTime: '00:09' // 播放时长
					},
					operInfo: {
						flag: 1, // 0未操作,1顶,2踩
						smileNum: 941, // 笑脸数量
						cryNum: 23, // 哭脸数量
						commentNum: 123, // 评论数量
						shareNum: 43 // 转发数量
					},
					comment: {
						// 热门留言
						userInfo: {
							avatar: '../../static/demo/userpic/12.jpg',
							nickname: '指着门口说滚'
						},
						dingNum: 1230,
						content: '钱工近期!!!'
					}
				}
			];
			
			setTimeout(() => {
				/* 模拟数据 */
				this.tabList[this.tabIndex].data.push(...data);
				// this.getTopicList();
			}, 2000);
			this.status = 'more';
		},

		/* 获取话题分类数据 */
		async getTabbars() {
			const res = await this.$http.get('/category/list');
			this.tabbars = res.rows;
			if (res.rows) {
				res.rows.forEach(row => {
					if (row.current === 1) {
						this.tabIndex = row.current;
					}
				});
			}
			/* 获取话题列表 */
			// this.getTopicList();
		},

		async getTopicList() {
			this.queryParams.categoryId = this.tabList[this.tabIndex].categoryId;
			const res = await this.$http.get('/topic/list', this.queryParams);
		}
	}
};
</script>

<style lang="scss" scoped>
.swiper-tab-list {
	color: #969696;
	font-weight: bold;
}
.uni-tab-bar .active {
	color: #343434;
}

.active .swiper-tab-line {
	border-top: 5rpx solid #fede33;
	border-bottom: 5rpx solid #fede33;
	border-radius: 20rpx;
	width: 70rpx;
	margin: 0 auto;
}

/* 不显示下边框的线 */
.uni-swiper-tab {
	border-bottom: 0;
}

.list {
	width: 750rpx;
	height: 100%;
}
</style>
