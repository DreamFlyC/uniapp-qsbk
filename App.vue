<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import './static/uni.css';
	/* 引入自定义图标库 */
	@import './static/iconfont/icon.css';
	/* 引入动画库 */
@import './static/animate.css';

@import './static/css/common.css';


scroll-view ::-webkit-scrollbar {  
    display: none !important;  
    width: 0 !important;  
    height: 0 !important;  
    -webkit-appearance: none;  
    background: transparent;  
}

::-webkit-scrollbar{
  display: none;
}

</style>
