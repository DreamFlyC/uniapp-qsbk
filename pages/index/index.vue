<template>
	<view :style="topMenu ? 'margin-top:' + topMenu.height + 'px' : ''">
		<!-- 导航栏组件 -->
		<qs-nav-bar @clickLeft="handleClickLeft" @clickRight="handleClickRight">
			<!-- 搜索框组件 -->
			<qs-search :text="'搜索糗事~'" :type="1"> <qs-icon iconName="icon-bianji1" iconSize="50" iconColor="text-dark"></qs-icon> </qs-search>
		</qs-nav-bar>
		<!-- tab栏列表 -->
		<swiper-tab :current="tabIndex" :items="tabbars" :scrollFlag="true" :isEqually="false" @clickItem="handleTabTap"></swiper-tab>

		<!-- 图文列表 -->
		<view class="main-box">
			<swiper :style="{ height: swiperHeight + 'px' }" :current="tabIndex" @change="handleSwiperChange" @transition="handleSwiperTransition">
				<swiper-item v-for="(item, index) in tabbars" :key="index">
					<scroll-view v-if="tabList && tabList[index]" scroll-y class="list" @scrolltolower="handleLoadMore()" enable-back-to-top>
						<!-- 图文列表 -->
						<topic-box v-for="(item, index1) in tabList[index]" :key="index1" :item="item" :index="index1"></topic-box>
						<!-- 上拉加载 -->
						<uni-load-more :status="status" :content-text="contentText" v-if="tabList[index].length > 0" @clickLoadMore="handleLoadMore" />
					</scroll-view>

					<!-- 没有数据 -->
					<view v-else style="margin-top: 200rpx;"> <no-data></no-data> </view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
import qsNavBar from '@/components/custom/qs-nav-bar/qs-nav-bar.vue';
import qsSearch from '@/components/custom/qs-search/qs-search.vue';
import topicBox from '@/components/custom/index/topic-box/topic-box.vue';
import swiperTab from '@/components/custom/swiper-tab/swiper-tab.vue';
import noData from '@/components/custom/no-data/no-data.vue';
// 缓存每页最多
const MAX_CACHE_DATA = 100;
// 缓存页签数量
const MAX_CACHE_PAGE = 3;

// 原生导航栏按钮-签到  index为0
const nav_button_qiandao = 0;
// 原生导航栏按钮-发布  index为1
const nav_button_fabu = 1;
export default {
	components: {
		topicBox,
		swiperTab,
		noData,
		qsSearch,
		qsNavBar
	},
	data() {
		return {
			// 标题栏下面横线
			lineStyle: {
				width: '70rpx'
			},
			// 手指滑动
			startData: { clientX: '', clientY: '' },
			platform: '', // 平台
			topMenu: '', // 小程序顶部按钮
			reload: false,
			status: 'more', // 上拉加载 [more|loading|noMore] loading 的状态
			contentText: {
				contentdown: '上拉加载更多~',
				contentrefresh: '加载中',
				contentnomore: '我是有底线的~'
			},
			swiperHeight: 500,
			screenWidth: 0,
			scrollInto: '',
			cacheTab: [],
			/* 分类列表 */
			tabIndex: 1,
			id: undefined,
			tabbars: [
				{ id: 1, name: '关注', status: 1, sort: 1, current: 0, createTime: '2021-01-07T16:11:28.000+0800', updateTime: '2021-01-07T16:11:28.000+0800', params: {} },
				{ id: 2, name: '推荐', status: 1, sort: 2, current: 1, createTime: '2021-01-07T16:11:28.000+0800', updateTime: '2021-01-07T16:11:28.000+0800', params: {} },
				{ id: 3, name: '体育', status: 1, sort: 3, current: 0, createTime: '2021-01-07T16:11:28.000+0800', updateTime: '2021-01-07T16:11:28.000+0800', params: {} },
				{ id: 4, name: '热点', status: 1, sort: 4, current: 0, createTime: '2021-01-07T16:11:28.000+0800', updateTime: '2021-01-07T16:11:28.000+0800', params: {} },
				{ id: 5, name: '财经', status: 1, sort: 5, current: 0, createTime: '2021-01-07T16:11:28.000+0800', updateTime: '2021-01-07T16:11:28.000+0800', params: {} },
				{ id: 6, name: '娱乐', status: 1, sort: 6, current: 0, createTime: '2021-01-07T16:11:28.000+0800', updateTime: '2021-01-07T16:11:28.000+0800', params: {} },
				{ id: 7, name: '视频', status: 1, sort: 7, current: 0, createTime: '2021-01-07T16:11:28.000+0800', updateTime: '2021-01-07T16:11:28.000+0800', params: {} },
				{ id: 8, name: '国际', status: 1, sort: 7, current: 0, createTime: '2021-01-07T16:11:28.000+0800', updateTime: '2021-01-07T16:11:28.000+0800', params: {} }
			],
			// 查询参数
			queryParams: {
				pageNum: 1,
				pageSize: 10
			},
			/* 话题列表 */
			tabList: [
				[
					{
						id: 1,
						userInfo: {
							avatar: '/static/demo/userpic/12.jpg',
							nickname: '锅德刚',
							desc: '沙雕糗友快乐源泉',
							follow: false // 是否关注
						},
						title: '民政局的人都认识我了', // 标题
						mediaInfo: {
							type: 'img', // 媒体类型,img图片,video视频
							titlePic: '/static/demo/datapic/11.jpg', // 封面图
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
								avatar: '/static/demo/userpic/12.jpg',
								nickname: '指着门口说滚'
							},
							dingNum: 1230,
							content: '钱工近期!!!'
						}
					},
					{
						id: 2,
						userInfo: {
							avatar: '/static/demo/userpic/12.jpg',
							nickname: '锅德刚',
							desc: '沙雕糗友快乐源泉',
							follow: false // 是否关注
						},
						title: '民政局的人都认识我了', // 标题
						mediaInfo: {
							type: 'img', // 媒体类型,img图片,video视频
							titlePic: '/static/demo/datapic/21.jpg', // 封面图
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
								avatar: '/static/demo/userpic/5.jpg',
								nickname: '指着门口说滚'
							},
							dingNum: 1230,
							content: '钱工近期!!!'
						}
					}
				],
				[
					{
						id: 2,
						userInfo: {
							avatar: '/static/demo/userpic/11.jpg',
							nickname: 'CZP',
							desc: '沙雕糗友快乐源泉',
							follow: true // 是否关注
						},
						title: '民政局的人都认识我了', // 标题
						mediaInfo: {
							type: 'img', // 媒体类型,img图片,video视频
							titlePic: '/static/demo/datapic/12.jpg', // 封面图
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
								avatar: '/static/demo/userpic/12.jpg',
								nickname: '指着门口说滚'
							},
							dingNum: 110,
							content: '钱工近期!!!'
						}
					}
				],
				[
					{
						id: 3,
						userInfo: {
							avatar: '/static/demo/userpic/13.jpg',
							nickname: 'CZP',
							desc: '沙雕糗友快乐源泉',
							follow: true // 是否关注
						},
						title: '民政局的人都认识我了', // 标题
						mediaInfo: {
							type: 'img', // 媒体类型,img图片,video视频
							titlePic: '/static/demo/datapic/13.jpg', // 封面图
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
								avatar: '/static/demo/userpic/12.jpg',
								nickname: '指着门口说滚'
							},
							dingNum: 110,
							content: '钱工近期!!!'
						}
					}
				]
			]
		};
	},
	/* 生命周期函数 */
	onLoad() {
		// #ifdef MP
		//获取胶囊按钮的数据,微信小程序
		this.topMenu = uni.getMenuButtonBoundingClientRect();
		console.log('微信小程序平台');
		// #endif

		/* 获取话题分类 */
		// this.getTabbars();
	},
	onReady() {
		// 这里的scroll-view设置占满整个屏幕，height设置100%；swiper的height设置成屏幕的高度-减去tab栏的高度(49px)-原生导航栏的高度(44px),需要微信提供的api获取设备屏幕高度数据

		let that = this;
		uni.getSystemInfo({
			//调用uni-app接口获取屏幕高度
			success(res) {
				//成功回调函数
				let titleH = uni.createSelectorQuery().select('.list'); //想要获取高度的元素名（class/id）
				titleH
					.boundingClientRect(data => {
						let pH = res.windowHeight; //windoHeight为窗口高度，主要使用的是这个
						that.swiperHeight = pH - data.top; //计算高度：元素高度=窗口高度-元素距离顶部的距离（data.top）
					})
					.exec();
			}
		});
	},

	// 点击搜索框，跳转到搜索页,IOS下有bug,会自动触发
	/* onNavigationBarSearchInputClicked(e) {
		uni.navigateTo({
			url: '../search/search'
		});
	}, */

	// 监听原生导航栏按钮点击事件
	/* onNavigationBarButtonTap(e) {
		if (nav_button_qiandao === e.index) {
			// 点击左边签到按钮
		}
		if (nav_button_fabu === e.index) {
			// 点击右边发布按钮
			uni.navigateTo({
				url: '../add-input/add-input'
			});
		}
	}, */

	methods: {
		/* 监听滑动事件 */
		start(e) {
			this.startData.clientX = e.changedTouches[0].clientX;
			this.startData.clientY = e.changedTouches[0].clientY;
		},
		/* 监听滑动事件 */
		end(e) {
			const subX = e.changedTouches[0].clientX - this.startData.clientX;
			const subY = e.changedTouches[0].clientY - this.startData.clientY;
			if (subY > 50 || subY < -50) {
				if (subY > 50) {
					console.log('下滑');
				} else if (subY < -50) {
					console.log('上滑');
				}
			} else {
				// 两个标题的距离为70rpx*2+60rpx=200rpx
				let tabRange = 70 * 2 + 60;
				if (subX > 10) {
					console.log('右滑,', subX);
				} else if (subX < -10) {
					console.log('左滑,', Math.abs(subX));
					let range = Math.abs(subX); // 手指左右滑动的绝对距离
					console.log('屏幕宽度: ', this.screenWidth);
					if (range >= this.screenWidth / 2) {
						// 触发swipper的翻页效果
						console.log('触发swipper的翻页效果');
					} else {
						// 计算公式  滑动的绝对距离/屏幕宽度 = 横线的宽度/标题栏的总距离
						// range / this.screenWidth = this.lineStyle.width / tabRange;

						// this.lineStyle.width = (tabRange * range) / this.screenWidth + 'rpx'
						console.log(this.lineStyle.width);
					}
				} else {
					console.log('无效,', subX);
				}
			}
		},

		/* swiper-item 的位置发生改变时会触发 transition 事件 */
		handleSwiperTransition(e) {
			// console.log(e);
		},

		handleClickLeft() {
			console.log('handleClickLeft,点击签到按钮');
		},

		handleClickRight() {
			// 点击右边发布按钮
			uni.navigateTo({
				url: '../add-input/add-input'
			});
		},

		/* tab栏点击事件 */
		handleTabTap(e) {
			this.tabIndex = e.currentIndex;
		},
		/* 页签切换事件 */
		handleSwiperChange(e) {
			let index = e.detail.current;
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
			if (this.tabList[this.tabIndex] &&　this.tabList[this.tabIndex].length > MAX_CACHE_DATA) {
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
			let id = this.tabList[this.tabIndex].id;
			let data = [
				{
					id: 1,
					id: 1,
					userInfo: {
						avatar: '/static/demo/userpic/12.jpg',
						nickname: '锅德刚',
						desc: '沙雕糗友快乐源泉',
						follow: false // 是否关注
					},
					title: '民政局的人都认识我了', // 标题
					mediaInfo: {
						type: 'img', // 媒体类型,img图片,video视频
						titlePic: '/static/demo/datapic/11.jpg', // 封面图
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
							avatar: '/static/demo/userpic/12.jpg',
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
			}, 500);
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
			this.queryParams.id = this.tabList[this.tabIndex].id;
			const res = await this.$http.get('/topic/list', this.queryParams);
		}
	}
};
</script>

<style lang="scss" scoped>
.main-box {
	// box-sizing: border-box;
	// border: 1px solid red;
	// margin-top: 100rpx;
}

.swiper-tab-list {
	color: var(--bColor);
	font-weight: bold;
}

.list {
	width: 750rpx;
	height: 100%;
}
</style>
