<template>
	<view class="f-w-5">
		<!-- 自定义导航栏 -->
		<uni-nav-bar :status-bar="true" fixed="true" :border="false" left-icon="arrowleft" @clickLeft="back" @clickRight="submit">
			<view class="uni-flex-c uni-flex-item" @click="handleTextClick"> {{ privacy }} <view class="icon iconfont icon-xialazhankai"></view> </view>
			<!-- 右侧导航栏按钮 -->
			<block slot="right">
				<view class="uni-navbar-right-view" :class="{ canSubmit: canSubmitClass }"> <text class="uni-nav-bar-right-text">发表</text> </view>
			</block>
		</uni-nav-bar>
		<view class="container m-top-10">
			<!-- 内容区域 -->
			<scroll-view scroll-y :style="scrollHeight != 0 ? 'height: ' + scrollHeight + 'px' : ''">
				<!-- <scroll-view scroll-y > -->
				<view class="scroll-y">
					<!-- 文字区域 -->
					<view class="add-content">
						<textarea
							ref="addContentRef"
							id="add-textarea"
							:maxlength="maxlength"
							:style="'height:' + textareaHeight + 'rpx'"
							class="uni-textarea"
							:focus="focus"
							:cursor="cursor"
							:selection-start="cursor"
							:selection-end="cursor"
							:auto-blur="true"
							v-model="content"
							:adjust-position="true"
							:show-confirm-bar="false"
							:fixed="true"
							@input="checkWordsLength"
							@blur="textareaBlur"
							@focus="textareaFocus"
							placeholder="分享好玩的事情,和糗友一起笑一笑~"
						></textarea>
						<!-- 字数统计 -->
						<view class="words">{{ content.length }}/{{ maxlength }}</view>
					</view>
					<!-- 视频 -->
					<view class="add-video"> 
						<video v-if="videoSrc" :poster="poster" objectFit="fill" :src="videoSrc" :autoplay="false" :show-mute-btn="true">
							<cover-image class="guanbi" src="/static/img/guanbi.svg" mode="" @tap="delVideo"></cover-image>
						</video>
					</view>
					<!-- 图片 -->
					<qs-img-grid :showDelBtn="true" :imageList="imageList" @previewImage="previewImage" @delImage="delImage"></qs-img-grid>
					<!-- 表情栏 -->
					<scroll-view class="emojiStyle" v-show="showEmojiBar" :style="keyboardHeight" scroll-y="true">
						<emoji-list @clickemoji="clickemoji" :keyboardHeight="keyboardHeight" />
					</scroll-view>

					<!-- 爆社 -->
					<view class="baoshe uni-flex-sbc" @tap="handleBaoshe">
						<view class="uni-flex">
							<view class="icon iconfont icon-huati" :style="huati.active ? 'color:#ffde33' : ''"></view> <text :style="huati.active ? 'color:#000' : ''">{{ huati.title }}</text>
						</view>
						<view class="icon iconfont icon-jinru"></view>
					</view>

					<!-- 匿名 -->
					<view class="anymous uni-flex-sbc">
						<view class="uni-flex"> <view class="icon iconfont icon-goubianbian"></view> <text>启用匿名</text> </view>
						<view> <switch :checked="anymous" @change="handleAnymousSwitch" color="#ffde33" /> </view>
					</view>
				</view>
			</scroll-view>

			<!-- 匿名弹出框 -->
			<!-- #ifdef H5 -->
			<cover-view>
				<uni-popup id="popupDialog" ref="popupDialog" type="dialog">
					<uni-popup-dialog
						:html="true"
						type="success"
						title="确认启用匿名?"
						content="启用匿名后,帖子会显示[匿名用户]发表<br>同时糗友也无法通过该帖子关注你."
						:before-close="true"
						cancelText="确认启用"
						confirmText="取消"
						:confirmStyle="{ backgroundColor: '#ffde33', color: '#000 !important', borderRadius: '5px' }"
						:cancelStyle="{ backgroundColor: '#e4e4e4', color: '#8b8b8b', borderRadius: '5px' }"
						@confirm="dialogConfirm"
						@close="dialogClose"
					></uni-popup-dialog>
				</uni-popup>
			</cover-view>
			<!-- #endif -->

			<!-- 视频/图片/表情 -->
			<view :class=" animate?'animate-topic-type-box':'topic-type-box' " :style="animate?'bottom:'+(keyboardHeight-20)+'px;':''">
				<view :class=" animate?'animate-box':'box'">
					<view class="uni-flex-item" :class="animate?'animate-topic-type':'topic-type'"> <image src="/static/img/viedo.svg" mode="" @tap="handleVideoAction"></image> <text>视频</text> </view>
					<view class="uni-flex-item" :class="animate?'animate-topic-type':'topic-type'"> <image src="/static/img/img.svg" mode="" @tap="handleImageAction"></image> <text>图片</text> </view>
					<view class="uni-flex-item" :class="animate?'animate-topic-type':'topic-type'"> <image src="/static/img/expression.svg" @tap="handleEmojiAction" mode=""></image> <text>表情</text> </view>
				</view>
				
			</view>

			<!-- 视频/图片/表情 悬浮键盘 -->
			<!-- <view class="keyboard-topic-type-box animate__animated animate__fadeIn" v-show="showKeyboardActions || showEmojiBar" :style="{ bottom: keyboardHeight + 'px' }">
				<view class="keyboard-topic-type icon iconfont icon-shipin-tianchong" @tap="handleVideoAction"></view>
				<view class="keyboard-topic-type icon iconfont icon-tupian" @tap="handleImageAction"></view>
				<view class="keyboard-topic-type icon iconfont icon-biaoqing" @tap="handleEmojiAction"></view> 
			</view>-->
		</view>
	</view>
</template>

<script>
// App平台在iOS上，webview中的软键盘弹出时，默认在软键盘上方有一个横条，显示着：上一项、下一项和完成等按钮。如不想显示这个横条，可以配置softinputNavBar: 'none'
// 配置方式，在 pages.json 中配置 style
import permision from '@/common/js/permission.js';
import emojiList from '@/components/custom/emoji-list/emoji-list.vue';
import qsImgGrid from '@/components/custom/qs-img-grid/qs-img-grid.vue';
import { qsEmoji } from '@/common/js/emojiName.js';

const privacyTextArr = ['所有人可见', '仅自己可见'];
const draftList = ['删除草稿', '保存草稿'];

var sourceType = [['camera'], ['album'], ['camera', 'album']];
var sizeType = [['compressed'], ['original'], ['compressed', 'original']];
export default {
	components: {
		emojiList,
		qsImgGrid
	},
	data() {
		return {
			animate: true, // 视频/图片/表情动画控制
			scrollHeight: 0, // 滚动栏高度
			textareaHeight: 300, // 文本域高度
			huati: {
				title: '添加爆社, 被更多糗友看到~',
				active: false
			},
			// 控制表情是否弹出
			showEmojiBar: false,
			// 表替换名
			emojiName: [],
			storageKey: 'add_input_draft',
			privacy: privacyTextArr[0],
			anymous: false,
			maxlength: 240,
			content: '',
			cursor: 0,
			canSubmitClass: false,
			showKeyboardActions: false, // 显示键盘上方功能区
			keyboardHeight: 0,
			videoSrc: '', // 视频地址
			poster: 'https://img13.360buyimg.com/babel/s380x560_jfs/t1/109210/24/11676/66872/5e8d8110E0a7c8ca8/1fe9eaae79b1c854.jpg!cc_380x560.webp', // 视频封面
			imageList: [], // 图片地址,
			imgLimit: 9, // 图片最大张数
			title: 'choose/previewImage',
			sourceTypeIndex: 2,
			sourceType: ['拍照', '相册', '拍照或相册'],
			sizeTypeIndex: 2,
			sizeType: ['压缩', '原图', '压缩或原图'],
			countIndex: 8,
			count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
			focus: true //获取焦点
		};
	},
	watch: {
		content: {
			handler(val) {
				if (val && val.length >= 5 && val.length <= this.maxlength) {
					this.canSubmitClass = true;
				} else {
					this.canSubmitClass = false;
				}
				console.log('watch content ', val.length);
				if (val.length > this.maxlength) {
					this.content = val.substring(0, this.maxlength);
					uni.showToast({
						title: `最多只能输入${this.maxlength}个字符`,
						icon: 'none',
						mask: true,
						duration: 1000
					});
				}
			},
			deep: true,
			immediate: true
		}
	},
	created() {
		this.emojiName = qsEmoji;
		// 进入页面不显示emoji列表栏
		this.showEmojiBar = false;
		// 这里的scroll-view设置占满整个屏幕，height设置100%；swiper的height设置成屏幕的高度（除去tab栏的高度）,需要微信提供的api获取设备屏幕高度数据
		let res = uni.getSystemInfoSync();
		this.swiperHeight = res.windowHeight - 50;
		const value = uni.getStorageSync(this.storageKey);
		if (value) {
			let data = JSON.parse(value);
			this.content = data.content;
			this.cursor = this.content.length;
			this.huati = data.huati;
			this.imageList = data.imageList;
			this.videoSrc = data.videoSrc;
		}
	},
	mounted() {
		var _this = this;
		uni.onKeyboardHeightChange(res => {
			let height = res.height;
			console.log('键盘高度:' + height);
			if (height > 0) {
				this.keyboardHeight = height - 40;
				this.showKeyboardActions = true;
			} else {
				this.showKeyboardActions = false;
			}
		});
		this.handleScrollHeight();
	},

	/* 监听页面滚动 */
	onPageScroll(e) {
		console.log('监听页面滚动', e);
		uni.hideKeyboard(); // 隐藏已经显示的软键盘，如果软键盘没有显示则不做任何操作。
		this.showKeyboardActions = false;
		//
	},
	methods: {
		/* 点击爆社事件 */
		handleBaoshe() {
			uni.navigateTo({
				url: '@/components/custom/bao-she/bao-she',
				animationType: 'slide-in-bottom', // 新窗体从底部进入
				animationDuration: 300
			});
		},

		/* 左侧返回按钮事件,需要保存草稿 */
		back() {
			this.showEmojiBar = false;
			let _this = this;
			if (_this.shouldSaveDraft()) {
				/* 提示用户保存 */
				uni.showActionSheet({
					itemList: draftList,
					success: res => {
						console.log('点击了' + res.tapIndex);
						if (0 === res.tapIndex) {
							// 删除草稿
							console.log(' 删除草稿');
							uni.removeStorage({
								key: _this.storageKey,
								success: function(res) {
									uni.showToast({
										icon: 'none',
										title: '删除草稿成功'
									});
								}
							});
						} else if (1 === res.tapIndex) {
							// 保存草稿
							let data = {
								content: _this.content,
								huati: _this.huati,
								imageList: this.imageList,
								videoSrc: this.videoSrc
							};
							uni.setStorage({
								key: _this.storageKey,
								data: JSON.stringify(data),
								success: function() {
									uni.showToast({
										icon: 'none',
										title: '保存草稿成功'
									});
								}
							});
						}
						/* 返回上一层 */
						uni.navigateBack({
							delta: 1
						});
					}
				});
			} else {
				/* 返回上一层 */
				uni.navigateBack({
					delta: 1
				});
			}
		},

		/* 判断是否需要保存草稿 */
		shouldSaveDraft() {
			let flag = false;
			/* 内容不为空 */
			if (this.content || this.huati.active || this.imageList.length > 0 || this.videoSrc) {
				flag = true;
			}
			return flag;
		},

		/* 发布 */
		submit() {},

		/* 切换隐私可见 */
		handleTextClick() {
			uni.showActionSheet({
				itemList: privacyTextArr,
				success: res => {
					this.privacy = privacyTextArr[res.tapIndex];
				}
			});
		},

		/* 匿名开关 */
		handleAnymousSwitch(e) {
			/* 触感反馈 */
			// #ifdef APP-PLUS
			if (uni.getSystemInfoSync().platform == 'ios') {
				let UIImpactFeedbackGenerator = plus.ios.importClass('UIImpactFeedbackGenerator');
				let impact = new UIImpactFeedbackGenerator();
				impact.prepare();
				impact.init(1);
				impact.impactOccurred();
			}
			if (uni.getSystemInfoSync().platform == 'android') {
				uni.vibrateShort({
					success: () => {
						console.log('点击震动');
					}
				});
			}
			// #endif

			this.anymous = e.detail.value;

			// #ifndef APP-PLUS
			if (this.anymous) {
				this.$refs.popupDialog.open();
			}
			// #endif
		},

		/**
		 * 对话框点击确认按钮
		 */
		dialogConfirm(done) {
			this.anymous = false;
			// 需要执行 done 才能关闭对话框
			done();
		},
		/**
		 * 对话框取消按钮
		 */
		dialogClose(done) {
			// 需要执行 done 才能关闭对话框
			done();
		},

		/* 文本框输入事件 */
		checkWordsLength(e) {
			if (e.detail.value.length >= this.maxlength) {
				uni.showToast({
					title: `最多只能输入${this.maxlength}个字符`,
					icon: 'none',
					mask: true,
					duration: 1000
				});
				return false;
			} else {
				this.content = e.detail.value;
			}
		},

		/* 输入框失去焦点时触发，event.detail = {value, cursor} */
		textareaBlur(e) {
			uni.hideKeyboard(); // 隐藏已经显示的软键盘，如果软键盘没有显示则不做任何操作。
			this.showKeyboardActions = false;
			this.showEmojiBar = false;
			this.focus = false;
			this.animate = false;
		},
		
		/* 输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度 */
		textareaFocus(e){
			console.log(e.detail);
			this.focus= true;
			this.animate = true;
			
		},

		/* 动态计算滚动栏的高度 */
		handleScrollHeight() {
			let self = this;
			self.$nextTick(() => {
				let info = uni.createSelectorQuery().select('.scroll-y');
				info
					.boundingClientRect(function(data) {
						//data - 各种参数
						console.log('动态计算滚动栏的高度', data.height); // 获取元素高度

						// 动态计算滚动栏的高度
						self.scrollHeight = data.height + 70;
					})
					.exec();
			});
		},

		/* 打开手机的视频文件 */
		handleVideoAction() {
			console.log('打开手机的视频文件');
			uni.chooseVideo({
				count: 1,
				sourceType: ['camera', 'album'],
				success: res => {
					let suffix = '?x-oss-process=videp/snapshot,t_0,f_jpg';
					this.videoSrc = res.tempFilePath + suffix;
					this.$nextTick(() => {
						this.textareaHeight = 150;
						// 动态计算滚动栏的高度
						this.handleScrollHeight();
					});
				}
			});
		},

		/* 打开手机的图片文件 */
		async handleImageAction() {
			console.log('打开手机的图片');
			// #ifdef APP-PLUS
			// TODO 选择相机或相册时 需要弹出actionsheet，目前无法获得是相机还是相册，在失败回调中处理
			if (this.sourceTypeIndex !== 2) {
				let status = await this.checkPermission();
				if (status !== 1) {
					uni.showModal({
						title: '授权失败',
						content: '需要从您的相机或相册获取图片，请在设置界面打开相关权限',
						success: res => {
							if (res.confirm) {
								uni.openSetting();
							}
						}
					});
					return;
				}
			}
			// #endif

			if (this.imageList.length === this.imgLimit) {
				let isContinue = await this.isFullImg();
				console.log('是否继续?', isContinue);
				if (!isContinue) {
					return;
				}
			}
			uni.chooseImage({
				sourceType: sourceType[this.sourceTypeIndex],
				sizeType: sizeType[this.sizeTypeIndex],
				count: this.imageList.length + this.count[this.countIndex] > 9 ? 9 - this.imageList.length : this.count[this.countIndex],
				success: res => {
					this.imageList = this.imageList.concat(res.tempFilePaths);
					this.textareaHeight = 150;
					// 动态计算滚动栏的高度
					this.handleScrollHeight();
				},
				fail: err => {
					console.error('chooseImage error', err);
					// #ifdef APP-PLUS
					if (err['code'] && err.code !== 0 && this.sourceTypeIndex === 2) {
						console.log('APP-PLUS处理错误');
						this.checkPermission(err.code);
					}
					// #endif
					// #ifdef MP
					uni.getSetting({
						success: res => {
							let authStatus = false;
							switch (this.sourceTypeIndex) {
								case 0:
									authStatus = res.authSetting['scope.camera'];
									break;
								case 1:
									authStatus = res.authSetting['scope.album'];
									break;
								case 2:
									authStatus = res.authSetting['scope.album'] && res.authSetting['scope.camera'];
									break;
								default:
									break;
							}
							if (!authStatus) {
								uni.showModal({
									title: '授权失败',
									content: 'Hello uni-app需要从您的相机或相册获取图片，请在设置界面打开相关权限',
									success: res => {
										if (res.confirm) {
											uni.openSetting();
										}
									}
								});
							}
						}
					});
					// #endif
				}
			});
		},

		/* 图片是否已满9张 */
		isFullImg: function() {
			return new Promise(res => {
				uni.showModal({
					content: `已经有${this.imgLimit}张图片了,是否清空现有图片？`,
					success: e => {
						if (e.confirm) {
							this.imageList = [];
							res(true);
						} else {
							res(false);
						}
					},
					fail: () => {
						res(false);
					}
				});
			});
		},

		/* 预览图片 */
		previewImage: function(e) {
			var current = e.src;
			uni.previewImage({
				current: current,
				urls: this.imageList,
				indicator: 'number'
			});
		},

		/* 检查图片权限 */
		async checkPermission(code) {
			console.log('检查图片权限 code', code);
			let type = code ? code - 2 : this.sourceTypeIndex;
			console.log('检查图片权限 type', type);
			console.log('检查图片权限 设备类型 ', permision.isIOS ? 'IOS' : 'Android');
			console.log('检查图片权限 sourceType ', sourceType[type][0]);
			let status = permision.isIOS
				? await permision.requestIOS(sourceType[type][0])
				: await permision.requestAndroid(type === 0 ? 'android.permission.CAMERA' : 'android.permission.READ_EXTERNAL_STORAGE');
			console.log('检查图片权限 status', status);
			if (status === null || status === 1) {
				status = 1;
			} else {
				uni.showModal({
					content: '没有开启权限',
					confirmText: '设置',
					success: function(res) {
						if (res.confirm) {
							permision.gotoAppSetting();
						}
					}
				});
			}

			return status;
		},

		/* 打开表情 */
		handleEmojiAction() {
			// 隐藏状态
			if (!this.showEmojiBar) {
				// 1.修改为可视状态
				this.showEmojiBar = true;
				// 2.隐藏键盘
				if (this.keyboardHeight > 0) {
					uni.hideKeyboard();
				}
			} else {
				// 打开状态
				// 1.修改为隐藏状态
				this.showEmojiBar = false;
				// 2.打开键盘,重新聚焦textarea
				this.focus = true;
			}
		},
		//点击表情
		clickemoji(url, emojiLine, emojiList) {
			let emojiName = this.emojiName[emojiLine][emojiList];
			if (emojiName != 'undefined') {
				this.content += emojiName;
			}
			// this.content.push("<img :src='" + url + "'/>");
		},

		/* 删除图片 */
		delImage(e) {
			let index = e.index;
			this.imageList.splice(index, 1);
			/* 
			uni.showModal({
				content: '确认移除该图片?',
				success: res => {
					if (res.confirm) {
						this.imageList.splice(index, 1);
					} else if (res.cancel) {
					}
				}
			}); */
		},
		/* 删除视频 */
		delVideo() {
			uni.showModal({
				content: '确认移除该视频?',
				success: res => {
					if (res.confirm) {
						this.videoSrc='';
					} else if (res.cancel) {
					}
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
	
	

/* 右侧导航栏按钮 */
.uni-nav-bar-right-text {
	font-size: $uni-font-size-base;
	font-weight: 500;
}

/* 右侧导航栏按钮 */
.uni-navbar-right-view {
	padding: 0 20rpx;
	background-color: #e4e4e4;
	color: #8b8b8b;
	border-radius: 10rpx;
	overflow: hidden;
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	align-items: center;
	flex-direction: row;
}

.canSubmit {
	background-color: var(--color);
	color: #000000;
}


/* 键盘上方显示视频/图片/表情 */
.keyboard-topic-type-box {
	border-top: 1px solid #f8f7f7;
	display: flex;
	position: absolute;
	z-index: 10;
	background-color: #ffffff;
	width: 100%;
	margin-left: -20rpx; // 解决绝对定位下宽度拉伸带来的左右抖动问题

	.keyboard-topic-type {
		color: #2c405a;
		margin: 25rpx;
		font-size: 40rpx;
	}
}

.add-content {
	position: relative;
}

.add-video {
	border-radius: 10rpx;
	overflow: hidden;
	video {
		width: 100%;
		background-color: #808080;
	position: relative;
		
		.guanbi {
			position: absolute;
			right: 10rpx;
			top: 10rpx;
			width: 40rpx;
			height: 40rpx;
			border-radius: 50%;
			overflow: hidden;
			border: 0;
			z-index: 100;
		}
		
	}
	
}

.words {
	position: absolute;
	right: 0rpx;
	bottom: 10rpx;
	z-index: 2;
	color: #8b8b8b;
}

.baoshe {
	color: var(--bColor);
	height: 100rpx;
	border-top: 1px solid #f8f7f7;
	border-bottom: 1px solid #f8f7f7;
	.icon-huati {
		font-size: 50rpx;
		line-height: 50rpx;
		margin-right: 20rpx;
	}
}

.anymous {
	color: #111;
	height: 100rpx;
	border-bottom: 1px solid #f8f7f7;

	.icon-goubianbian {
		width: 40rpx;
		border-radius: 50%;
		font-size: 40rpx;
		background-color: var(--color);
		height: 40rpx;
		line-height: 40rpx;
		color: #fff;
		margin-right: 20rpx;
	}
}

.popupDialog {
	z-index: 100;
}

// 表情
.emojiStyle {
	position: fixed;
	bottom: 20rpx;
}


/* ++++++++++++++++视频/图片/表情栏动画 开始++++++++++++++++ */

/* 聚焦的动画 */
@keyframes topic {
	to{
		bottom:318px;
	}
}
@keyframes animate-box {
		to{
				width: 30%;
		}
}
@keyframes box-type-image {
		to{
				font-size: 50rpx;
				width: 40rpx;
				height: 40rpx;
				color: #2c405a;
				
		}
}
@keyframes box-type-text {
		from{
			opacity: 0;
		}
		to{
			opacity: 0;
		}
}

.animate-topic-type-box{
	width: 100%;
	position: fixed;
	bottom: 0rpx;
	margin-left: -20rpx;
	box-sizing: border-box;
	background-color: #ffffff;
	padding-bottom: 20rpx;
	
	animation-name: topic;
	animation-direction: alternate;
	-webkit-animation-timing-function:linear;/*动画变换方式*/
	animation-duration: 0.4s;
	animation-fill-mode: forwards;
}

.animate-box{
	width: 100%;
	display: flex;
	position: relative;
	animation-name: animate-box;
	animation-direction: alternate;
	 -webkit-animation-timing-function:linear;/*动画变换方式*/
	animation-duration: 0.4s;
	animation-fill-mode: forwards;
}

.animate-topic-type{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	
	image {
		font-size: 50rpx;
		color: #4c4c4c;
		height: 70rpx;
		width: 70rpx;
		animation-name: box-type-image;
		animation-direction: alternate;
		 -webkit-animation-timing-function:linear;/*动画变换方式*/
		animation-duration: 0.4s;
		animation-fill-mode: forwards;
	}
	
	text{
		animation-name: box-type-text;
		animation-direction: alternate;
		 -webkit-animation-timing-function:linear;/*动画变换方式*/
		animation-duration: 0.4s;
		animation-fill-mode: forwards;
	}
}


/* 视频/图片/表情 */
.topic-type-box {
	width: 100%;
	position: fixed;
	bottom: 0rpx;
	margin-left: -20rpx;
	box-sizing: border-box;
	background-color: #ffffff;
	padding-bottom: 20rpx;
	
	
}
.box{
	display: flex;
	position: relative;
}
.topic-type {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	image {
		font-size: 50rpx;
		color: #4c4c4c;
		height: 70rpx;
		width: 70rpx;
	
	}
}
/* ++++++++++++++++视频/图片/表情栏动画 结束++++++++++++++++ */



</style>
