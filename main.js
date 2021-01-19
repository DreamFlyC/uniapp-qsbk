import Vue from 'vue'
import App from './App'

// #ifdef H5
// var VConsole = require('./common/vconsole.min.js')
// Vue.prototype.$vconsole = new VConsole() // 使用vconsole
// #endif

Vue.config.productionTip = false

// 挂载全局方法
import config from "./common/js/config.js"
Vue.prototype.config=config

import lib from "./common/js/lib.js"
Vue.prototype.lib=lib

import request from "./common/js/request.js";
Vue.prototype.$http = request;

import chat from "./common/js/chat.js";
Vue.prototype.$chat = chat;

import User from "./common/js/user.js"
Vue.prototype.User = User

//全局注册icon组件
import qsIcon from "./components/custom/qs-icon/qs-icon.vue";
Vue.component("qsIcon", qsIcon)

import moment from 'moment'; //导入模块
moment.locale('zh-cn'); //设置语言 或 moment.lang('zh-cn'); 
Vue.prototype.$moment = moment;//赋值使用

/* 导航跳转 */
import * as navTo from './common/js/navTo'
Vue.prototype.$navTo = navTo

/* 
this.$moment('2019/06/17 14:00:00').startOf('hour').fromNow(); //1小时前
this.$moment().format('YYYY年MM月DD日 HH时mm分ss秒');  //2019年08月01日 19时50分20秒
this.$moment(new Date()).format('YYYY年MM月DD日 HH时mm分ss秒');  //2019年08月01日 19时50分20秒

//计算两个日期的天数
let days = this.$moment('2019/06/17 14:00:00').diff(this.$moment('2019/06/20 14:00:00'), 'days'); 

//比较两个日期的大小
let flag = this.$moment('2019/06/17 14:00:00').isBefore('2019/06/17 14:00:00'); 
 
 
 */

App.mpType = 'app'

const app = new Vue({
    ...App,
	config,
	lib,
})
app.$mount()
