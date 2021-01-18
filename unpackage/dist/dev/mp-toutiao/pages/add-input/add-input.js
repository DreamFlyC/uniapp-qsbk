(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/add-input/add-input"],{

/***/ 58:
/*!**************************************************************************************!*\
  !*** D:/workspace/uniapp/糗事百科/糗事百科/main.js?{"page":"pages%2Fadd-input%2Fadd-input"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _addInput = _interopRequireDefault(__webpack_require__(/*! ./pages/add-input/add-input.vue */ 59));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_addInput.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 59:
/*!*******************************************************************!*\
  !*** D:/workspace/uniapp/糗事百科/糗事百科/pages/add-input/add-input.vue ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_input_vue_vue_type_template_id_2796b904_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-input.vue?vue&type=template&id=2796b904&scoped=true& */ 60);
/* harmony import */ var _add_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-input.vue?vue&type=script&lang=js& */ 62);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _add_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _add_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _add_input_vue_vue_type_style_index_0_id_2796b904_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-input.vue?vue&type=style&index=0&id=2796b904&lang=scss&scoped=true& */ 66);
/* harmony import */ var _InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../InstallApps/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs





/* normalize component */

var component = Object(_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _add_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_input_vue_vue_type_template_id_2796b904_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_input_vue_vue_type_template_id_2796b904_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2796b904",
  null,
  false,
  _add_input_vue_vue_type_template_id_2796b904_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/add-input/add-input.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 60:
/*!**************************************************************************************************************!*\
  !*** D:/workspace/uniapp/糗事百科/糗事百科/pages/add-input/add-input.vue?vue&type=template&id=2796b904&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_input_vue_vue_type_template_id_2796b904_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../InstallApps/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../InstallApps/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../InstallApps/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../InstallApps/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../InstallApps/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../InstallApps/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./add-input.vue?vue&type=template&id=2796b904&scoped=true& */ 61);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_input_vue_vue_type_template_id_2796b904_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_input_vue_vue_type_template_id_2796b904_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_input_vue_vue_type_template_id_2796b904_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_input_vue_vue_type_template_id_2796b904_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 61:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/workspace/uniapp/糗事百科/糗事百科/pages/add-input/add-input.vue?vue&type=template&id=2796b904&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniNavBar: function() {
      return __webpack_require__.e(/*! import() | components/uni-nav-bar/uni-nav-bar */ "components/uni-nav-bar/uni-nav-bar").then(__webpack_require__.bind(null, /*! @/components/uni-nav-bar/uni-nav-bar.vue */ 130))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 62:
/*!********************************************************************************************!*\
  !*** D:/workspace/uniapp/糗事百科/糗事百科/pages/add-input/add-input.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../InstallApps/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../InstallApps/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../InstallApps/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../InstallApps/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../InstallApps/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./add-input.vue?vue&type=script&lang=js& */ 63);
/* harmony import */ var _InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 63:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/workspace/uniapp/糗事百科/糗事百科/pages/add-input/add-input.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 19));
















































































































var _permission = _interopRequireDefault(__webpack_require__(/*! @/common/js/permission.js */ 64));


var _emojiName = __webpack_require__(/*! @/common/js/emojiName.js */ 65);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var emojiList = function emojiList() {Promise.all(/*! require.ensure | components/custom/emoji-list/emoji-list */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/custom/emoji-list/emoji-list")]).then((function () {return resolve(__webpack_require__(/*! @/components/custom/emoji-list/emoji-list.vue */ 137));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var qsImgGrid = function qsImgGrid() {__webpack_require__.e(/*! require.ensure | components/custom/qs-img-grid/qs-img-grid */ "components/custom/qs-img-grid/qs-img-grid").then((function () {return resolve(__webpack_require__(/*! @/components/custom/qs-img-grid/qs-img-grid.vue */ 144));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};

var privacyTextArr = ['所有人可见', '仅自己可见'];
var draftList = ['删除草稿', '保存草稿'];

var sourceType = [['camera'], ['album'], ['camera', 'album']];
var sizeType = [['compressed'], ['original'], ['compressed', 'original']];var _default =
{
  components: {
    emojiList: emojiList,
    qsImgGrid: qsImgGrid },

  data: function data() {
    return {
      animate: true, // 视频/图片/表情动画控制
      scrollHeight: 0, // 滚动栏高度
      textareaHeight: 300, // 文本域高度
      huati: {
        title: '添加爆社, 被更多糗友看到~',
        active: false },

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
      handler: function handler(val) {
        if (val && val.length >= 5 && val.length <= this.maxlength) {
          this.canSubmitClass = true;
        } else {
          this.canSubmitClass = false;
        }
        console.log('watch content ', val.length);
        if (val.length > this.maxlength) {
          this.content = val.substring(0, this.maxlength);
          uni.showToast({
            title: "\u6700\u591A\u53EA\u80FD\u8F93\u5165".concat(this.maxlength, "\u4E2A\u5B57\u7B26"),
            icon: 'none',
            mask: true,
            duration: 1000 });

        }
      },
      deep: true,
      immediate: true } },


  created: function created() {
    this.emojiName = _emojiName.qsEmoji;
    // 进入页面不显示emoji列表栏
    this.showEmojiBar = false;
    // 这里的scroll-view设置占满整个屏幕，height设置100%；swiper的height设置成屏幕的高度（除去tab栏的高度）,需要微信提供的api获取设备屏幕高度数据
    var res = uni.getSystemInfoSync();
    this.swiperHeight = res.windowHeight - 50;
    var value = uni.getStorageSync(this.storageKey);
    if (value) {
      var data = JSON.parse(value);
      this.content = data.content;
      this.cursor = this.content.length;
      this.huati = data.huati;
      this.imageList = data.imageList;
      this.videoSrc = data.videoSrc;
    }
  },
  mounted: function mounted() {var _this2 = this;
    var _this = this;
    uni.onKeyboardHeightChange(function (res) {
      var height = res.height;
      console.log('键盘高度:' + height);
      if (height > 0) {
        _this2.keyboardHeight = height - 40;
        _this2.showKeyboardActions = true;
      } else {
        _this2.showKeyboardActions = false;
      }
    });
    this.handleScrollHeight();
  },

  /* 监听页面滚动 */
  onPageScroll: function onPageScroll(e) {
    console.log('监听页面滚动', e);
    uni.hideKeyboard(); // 隐藏已经显示的软键盘，如果软键盘没有显示则不做任何操作。
    this.showKeyboardActions = false;
    //
  },
  methods: {
    /* 点击爆社事件 */
    handleBaoshe: function handleBaoshe() {
      uni.navigateTo({
        url: '../../components/custom/bao-she/bao-she',
        animationType: 'slide-in-bottom', // 新窗体从底部进入
        animationDuration: 300 });

    },

    /* 左侧返回按钮事件,需要保存草稿 */
    back: function back() {var _this3 = this;
      this.showEmojiBar = false;
      var _this = this;
      if (_this.shouldSaveDraft()) {
        /* 提示用户保存 */
        uni.showActionSheet({
          itemList: draftList,
          success: function success(res) {
            console.log('点击了' + res.tapIndex);
            if (0 === res.tapIndex) {
              // 删除草稿
              console.log(' 删除草稿');
              uni.removeStorage({
                key: _this.storageKey,
                success: function success(res) {
                  uni.showToast({
                    icon: 'none',
                    title: '删除草稿成功' });

                } });

            } else if (1 === res.tapIndex) {
              // 保存草稿
              var data = {
                content: _this.content,
                huati: _this.huati,
                imageList: _this3.imageList,
                videoSrc: _this3.videoSrc };

              uni.setStorage({
                key: _this.storageKey,
                data: JSON.stringify(data),
                success: function success() {
                  uni.showToast({
                    icon: 'none',
                    title: '保存草稿成功' });

                } });

            }
            /* 返回上一层 */
            uni.navigateBack({
              delta: 1 });

          } });

      } else {
        /* 返回上一层 */
        uni.navigateBack({
          delta: 1 });

      }
    },

    /* 判断是否需要保存草稿 */
    shouldSaveDraft: function shouldSaveDraft() {
      var flag = false;
      /* 内容不为空 */
      if (this.content || this.huati.active || this.imageList.length > 0 || this.videoSrc) {
        flag = true;
      }
      return flag;
    },

    /* 发布 */
    submit: function submit() {},

    /* 切换隐私可见 */
    handleTextClick: function handleTextClick() {var _this4 = this;
      uni.showActionSheet({
        itemList: privacyTextArr,
        success: function success(res) {
          _this4.privacy = privacyTextArr[res.tapIndex];
        } });

    },

    /* 匿名开关 */
    handleAnymousSwitch: function handleAnymousSwitch(e) {
      /* 触感反馈 */

















      this.anymous = e.detail.value;


      if (this.anymous) {
        this.$refs.popupDialog.open();
      }

    },

    /**
        * 对话框点击确认按钮
        */
    dialogConfirm: function dialogConfirm(done) {
      this.anymous = false;
      // 需要执行 done 才能关闭对话框
      done();
    },
    /**
        * 对话框取消按钮
        */
    dialogClose: function dialogClose(done) {
      // 需要执行 done 才能关闭对话框
      done();
    },

    /* 文本框输入事件 */
    checkWordsLength: function checkWordsLength(e) {
      if (e.detail.value.length >= this.maxlength) {
        uni.showToast({
          title: "\u6700\u591A\u53EA\u80FD\u8F93\u5165".concat(this.maxlength, "\u4E2A\u5B57\u7B26"),
          icon: 'none',
          mask: true,
          duration: 1000 });

        return false;
      } else {
        this.content = e.detail.value;
      }
    },

    /* 输入框失去焦点时触发，event.detail = {value, cursor} */
    textareaBlur: function textareaBlur(e) {
      uni.hideKeyboard(); // 隐藏已经显示的软键盘，如果软键盘没有显示则不做任何操作。
      this.showKeyboardActions = false;
      this.showEmojiBar = false;
      this.focus = false;
      this.animate = false;
    },

    /* 输入框聚焦时触发，event.detail = { value, height }，height 为键盘高度 */
    textareaFocus: function textareaFocus(e) {
      console.log(e.detail);
      this.focus = true;
      this.animate = true;

    },

    /* 动态计算滚动栏的高度 */
    handleScrollHeight: function handleScrollHeight() {
      var self = this;
      self.$nextTick(function () {
        var info = uni.createSelectorQuery().select('.scroll-y');
        info.
        boundingClientRect(function (data) {
          //data - 各种参数
          console.log('动态计算滚动栏的高度', data.height); // 获取元素高度

          // 动态计算滚动栏的高度
          self.scrollHeight = data.height + 70;
        }).
        exec();
      });
    },

    /* 打开手机的视频文件 */
    handleVideoAction: function handleVideoAction() {var _this5 = this;
      console.log('打开手机的视频文件');
      uni.chooseVideo({
        count: 1,
        sourceType: ['camera', 'album'],
        success: function success(res) {
          var suffix = '?x-oss-process=videp/snapshot,t_0,f_jpg';
          _this5.videoSrc = res.tempFilePath + suffix;
          _this5.$nextTick(function () {
            _this5.textareaHeight = 150;
            // 动态计算滚动栏的高度
            _this5.handleScrollHeight();
          });
        } });

    },

    /* 打开手机的图片文件 */
    handleImageAction: function handleImageAction() {var _this6 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var isContinue;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                console.log('打开手机的图片');if (!(



















                _this6.imageList.length === _this6.imgLimit)) {_context.next = 8;break;}_context.next = 4;return (
                  _this6.isFullImg());case 4:isContinue = _context.sent;
                console.log('是否继续?', isContinue);if (
                isContinue) {_context.next = 8;break;}return _context.abrupt("return");case 8:



                uni.chooseImage({
                  sourceType: sourceType[_this6.sourceTypeIndex],
                  sizeType: sizeType[_this6.sizeTypeIndex],
                  count: _this6.imageList.length + _this6.count[_this6.countIndex] > 9 ? 9 - _this6.imageList.length : _this6.count[_this6.countIndex],
                  success: function success(res) {
                    _this6.imageList = _this6.imageList.concat(res.tempFilePaths);
                    _this6.textareaHeight = 150;
                    // 动态计算滚动栏的高度
                    _this6.handleScrollHeight();
                  },
                  fail: function fail(err) {
                    console.error('chooseImage error', err);







                    uni.getSetting({
                      success: function success(res) {
                        var authStatus = false;
                        switch (_this6.sourceTypeIndex) {
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
                            break;}

                        if (!authStatus) {
                          uni.showModal({
                            title: '授权失败',
                            content: 'Hello uni-app需要从您的相机或相册获取图片，请在设置界面打开相关权限',
                            success: function success(res) {
                              if (res.confirm) {
                                uni.openSetting();
                              }
                            } });

                        }
                      } });


                  } });case 9:case "end":return _context.stop();}}}, _callee);}))();

    },

    /* 图片是否已满9张 */
    isFullImg: function isFullImg() {var _this7 = this;
      return new Promise(function (res) {
        uni.showModal({
          content: "\u5DF2\u7ECF\u6709".concat(_this7.imgLimit, "\u5F20\u56FE\u7247\u4E86,\u662F\u5426\u6E05\u7A7A\u73B0\u6709\u56FE\u7247\uFF1F"),
          success: function success(e) {
            if (e.confirm) {
              _this7.imageList = [];
              res(true);
            } else {
              res(false);
            }
          },
          fail: function fail() {
            res(false);
          } });

      });
    },

    /* 预览图片 */
    previewImage: function previewImage(e) {
      var current = e.src;
      uni.previewImage({
        current: current,
        urls: this.imageList,
        indicator: 'number' });

    },

    /* 检查图片权限 */
    checkPermission: function checkPermission(code) {var _this8 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var type, status;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:
                console.log('检查图片权限 code', code);
                type = code ? code - 2 : _this8.sourceTypeIndex;
                console.log('检查图片权限 type', type);
                console.log('检查图片权限 设备类型 ', _permission.default.isIOS ? 'IOS' : 'Android');
                console.log('检查图片权限 sourceType ', sourceType[type][0]);if (!
                _permission.default.isIOS) {_context2.next = 11;break;}_context2.next = 8;return (
                  _permission.default.requestIOS(sourceType[type][0]));case 8:_context2.t0 = _context2.sent;_context2.next = 14;break;case 11:_context2.next = 13;return (
                  _permission.default.requestAndroid(type === 0 ? 'android.permission.CAMERA' : 'android.permission.READ_EXTERNAL_STORAGE'));case 13:_context2.t0 = _context2.sent;case 14:status = _context2.t0;
                console.log('检查图片权限 status', status);
                if (status === null || status === 1) {
                  status = 1;
                } else {
                  uni.showModal({
                    content: '没有开启权限',
                    confirmText: '设置',
                    success: function success(res) {
                      if (res.confirm) {
                        _permission.default.gotoAppSetting();
                      }
                    } });

                }return _context2.abrupt("return",

                status);case 18:case "end":return _context2.stop();}}}, _callee2);}))();
    },

    /* 打开表情 */
    handleEmojiAction: function handleEmojiAction() {
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
    clickemoji: function clickemoji(url, emojiLine, emojiList) {
      var emojiName = this.emojiName[emojiLine][emojiList];
      if (emojiName != 'undefined') {
        this.content += emojiName;
      }
      // this.content.push("<img :src='" + url + "'/>");
    },

    /* 删除图片 */
    delImage: function delImage(e) {var _this9 = this;
      var index = e.index;
      uni.showModal({
        content: '确认移除该图片?',
        success: function success(res) {
          if (res.confirm) {
            _this9.imageList.splice(index, 1);
          } else if (res.cancel) {
          }
        } });

    },
    /* 删除视频 */
    delVideo: function delVideo() {var _this10 = this;
      uni.showModal({
        content: '确认移除该视频?',
        success: function success(res) {
          if (res.confirm) {
            _this10.videoSrc = '';
          } else if (res.cancel) {
          }
        } });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 66:
/*!*****************************************************************************************************************************!*\
  !*** D:/workspace/uniapp/糗事百科/糗事百科/pages/add-input/add-input.vue?vue&type=style&index=0&id=2796b904&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_input_vue_vue_type_style_index_0_id_2796b904_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../InstallApps/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../InstallApps/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../InstallApps/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../InstallApps/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../InstallApps/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../InstallApps/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../InstallApps/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../InstallApps/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../InstallApps/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./add-input.vue?vue&type=style&index=0&id=2796b904&lang=scss&scoped=true& */ 67);
/* harmony import */ var _InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_input_vue_vue_type_style_index_0_id_2796b904_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_input_vue_vue_type_style_index_0_id_2796b904_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_input_vue_vue_type_style_index_0_id_2796b904_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_input_vue_vue_type_style_index_0_id_2796b904_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_InstallApps_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_add_input_vue_vue_type_style_index_0_id_2796b904_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 67:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/workspace/uniapp/糗事百科/糗事百科/pages/add-input/add-input.vue?vue&type=style&index=0&id=2796b904&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[58,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDovd29ya3NwYWNlL3VuaWFwcC/ns5fkuovnmb7np5Ev57OX5LqL55m+56eRL3BhZ2VzL2FkZC1pbnB1dC9hZGQtaW5wdXQudnVlPzU5ZjMiLCJ3ZWJwYWNrOi8vL0Q6L3dvcmtzcGFjZS91bmlhcHAv57OX5LqL55m+56eRL+ezl+S6i+eZvuenkS9wYWdlcy9hZGQtaW5wdXQvYWRkLWlucHV0LnZ1ZT9kOTM4Iiwid2VicGFjazovLy9EOi93b3Jrc3BhY2UvdW5pYXBwL+ezl+S6i+eZvuenkS/ns5fkuovnmb7np5EvcGFnZXMvYWRkLWlucHV0L2FkZC1pbnB1dC52dWU/YjhhOSIsIndlYnBhY2s6Ly8vRDovd29ya3NwYWNlL3VuaWFwcC/ns5fkuovnmb7np5Ev57OX5LqL55m+56eRL3BhZ2VzL2FkZC1pbnB1dC9hZGQtaW5wdXQudnVlPzdmOTciLCJ1bmktYXBwOi8vL3BhZ2VzL2FkZC1pbnB1dC9hZGQtaW5wdXQudnVlIiwid2VicGFjazovLy9EOi93b3Jrc3BhY2UvdW5pYXBwL+ezl+S6i+eZvuenkS/ns5fkuovnmb7np5EvcGFnZXMvYWRkLWlucHV0L2FkZC1pbnB1dC52dWU/YWRhYiIsIndlYnBhY2s6Ly8vRDovd29ya3NwYWNlL3VuaWFwcC/ns5fkuovnmb7np5Ev57OX5LqL55m+56eRL3BhZ2VzL2FkZC1pbnB1dC9hZGQtaW5wdXQudnVlPzQ0ZTYiXSwibmFtZXMiOlsiY3JlYXRlUGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0RBQUEsd0NBQW1CO0FBQ25CO0FBQ0EsdUc7QUFDQUEsVUFBVSxDQUFDQyxpQkFBRCxDQUFWLEM7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0k7QUFDbEk7QUFDNkQ7QUFDTDtBQUNzQzs7O0FBRzlGO0FBQ3FMO0FBQ3JMLGdCQUFnQix5TEFBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxnR0FBTTtB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QTtBQUNBO0FBQ0Esb0JBRkEsR0FFQSx3Q0FGQTtBQUdBO0FBQ0E7QUFDQSx1RUFMQTtBQU1BLHlDQU5BO0FBT0EscUVBUEE7QUFRQSwySUFSQSxnREFNQSxNQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0EsaUJBRkEsTUFFQTtBQUNBO0FBQ0EscUNBREE7QUFFQSxxQ0FGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBUEE7O0FBU0EsaUJBdEJBOztBQXdCQSxzQkF4QkE7QUF5QkEsS0FsVkE7O0FBb1ZBO0FBQ0EscUJBclZBLCtCQXFWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVBBLE1BT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXJXQTtBQXNXQTtBQUNBLGNBdldBLHNCQXVXQSxHQXZXQSxFQXVXQSxTQXZXQSxFQXVXQSxTQXZXQSxFQXVXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTdXQTs7QUErV0E7QUFDQSxZQWhYQSxvQkFnWEEsQ0FoWEEsRUFnWEE7QUFDQTtBQUNBO0FBQ0EsMkJBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUZBLE1BRUE7QUFDQTtBQUNBLFNBUEE7O0FBU0EsS0EzWEE7QUE0WEE7QUFDQSxZQTdYQSxzQkE2WEE7QUFDQTtBQUNBLDJCQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FGQSxNQUVBO0FBQ0E7QUFDQSxTQVBBOztBQVNBLEtBdllBLEVBdkdBLEU7Ozs7Ozs7Ozs7Ozs7QUMzSEE7QUFBQTtBQUFBO0FBQUE7QUFBcXlDLENBQWdCLGlzQ0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQXp6QztBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6InBhZ2VzL2FkZC1pbnB1dC9hZGQtaW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7aW1wb3J0ICdAZGNsb3VkaW8vdW5pLXN0YXQnO1xuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgUGFnZSBmcm9tICcuL3BhZ2VzL2FkZC1pbnB1dC9hZGQtaW5wdXQudnVlJ1xuY3JlYXRlUGFnZShQYWdlKSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vYWRkLWlucHV0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNzk2YjkwNCZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2FkZC1pbnB1dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2FkZC1pbnB1dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vYWRkLWlucHV0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI3OTZiOTA0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vSW5zdGFsbEFwcHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjI3OTZiOTA0XCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2FkZC1pbnB1dC9hZGQtaW5wdXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vSW5zdGFsbEFwcHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vSW5zdGFsbEFwcHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4vLi4vLi4vSW5zdGFsbEFwcHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vLi4vLi4vLi4vSW5zdGFsbEFwcHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi8uLi8uLi9JbnN0YWxsQXBwcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vSW5zdGFsbEFwcHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9hZGQtaW5wdXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI3OTZiOTA0JnNjb3BlZD10cnVlJlwiIiwidmFyIGNvbXBvbmVudHNcbnRyeSB7XG4gIGNvbXBvbmVudHMgPSB7XG4gICAgdW5pTmF2QmFyOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBpbXBvcnQoXG4gICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY29tcG9uZW50cy91bmktbmF2LWJhci91bmktbmF2LWJhclwiICovIFwiQC9jb21wb25lbnRzL3VuaS1uYXYtYmFyL3VuaS1uYXYtYmFyLnZ1ZVwiXG4gICAgICApXG4gICAgfVxuICB9XG59IGNhdGNoIChlKSB7XG4gIGlmIChcbiAgICBlLm1lc3NhZ2UuaW5kZXhPZihcIkNhbm5vdCBmaW5kIG1vZHVsZVwiKSAhPT0gLTEgJiZcbiAgICBlLm1lc3NhZ2UuaW5kZXhPZihcIi52dWVcIikgIT09IC0xXG4gICkge1xuICAgIGNvbnNvbGUuZXJyb3IoZS5tZXNzYWdlKVxuICAgIGNvbnNvbGUuZXJyb3IoXCIxLiDmjpLmn6Xnu4Tku7blkI3np7Dmi7zlhpnmmK/lkKbmraPnoa5cIilcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgXCIyLiDmjpLmn6Xnu4Tku7bmmK/lkKbnrKblkIggZWFzeWNvbSDop4TojIPvvIzmlofmoaPvvJpodHRwczovL3VuaWFwcC5kY2xvdWQubmV0LmNuL2NvbGxvY2F0aW9uL3BhZ2VzP2lkPWVhc3ljb21cIlxuICAgIClcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgXCIzLiDoi6Xnu4Tku7bkuI3nrKblkIggZWFzeWNvbSDop4TojIPvvIzpnIDmiYvliqjlvJXlhaXvvIzlubblnKggY29tcG9uZW50cyDkuK3ms6jlhozor6Xnu4Tku7ZcIlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBlXG4gIH1cbn1cbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vSW5zdGFsbEFwcHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9JbnN0YWxsQXBwcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi8uLi8uLi8uLi9JbnN0YWxsQXBwcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vLi4vLi4vLi4vSW5zdGFsbEFwcHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL0luc3RhbGxBcHBzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vYWRkLWlucHV0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9JbnN0YWxsQXBwcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL0luc3RhbGxBcHBzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uLy4uL0luc3RhbGxBcHBzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9JbnN0YWxsQXBwcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vSW5zdGFsbEFwcHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9hZGQtaW5wdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiZi13LTVcIj5cclxuXHRcdDwhLS0g6Ieq5a6a5LmJ5a+86Iiq5qCPIC0tPlxyXG5cdFx0PHVuaS1uYXYtYmFyIDpzdGF0dXMtYmFyPVwidHJ1ZVwiIGZpeGVkPVwidHJ1ZVwiIDpib3JkZXI9XCJmYWxzZVwiIGxlZnQtaWNvbj1cImFycm93bGVmdFwiIEBjbGlja0xlZnQ9XCJiYWNrXCIgQGNsaWNrUmlnaHQ9XCJzdWJtaXRcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktZmxleC1jIHVuaS1mbGV4LWl0ZW1cIiBAY2xpY2s9XCJoYW5kbGVUZXh0Q2xpY2tcIj4ge3sgcHJpdmFjeSB9fSA8dmlldyBjbGFzcz1cImljb24gaWNvbmZvbnQgaWNvbi14aWFsYXpoYW5rYWlcIj48L3ZpZXc+IDwvdmlldz5cclxuXHRcdFx0PCEtLSDlj7Pkvqflr7zoiKrmoI/mjInpkq4gLS0+XHJcblx0XHRcdDxibG9jayBzbG90PVwicmlnaHRcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1uYXZiYXItcmlnaHQtdmlld1wiIDpjbGFzcz1cInsgY2FuU3VibWl0OiBjYW5TdWJtaXRDbGFzcyB9XCI+IDx0ZXh0IGNsYXNzPVwidW5pLW5hdi1iYXItcmlnaHQtdGV4dFwiPuWPkeihqDwvdGV4dD4gPC92aWV3PlxyXG5cdFx0XHQ8L2Jsb2NrPlxyXG5cdFx0PC91bmktbmF2LWJhcj5cclxuXHRcdDx2aWV3IGNsYXNzPVwiY29udGFpbmVyIG0tdG9wLTEwXCI+XHJcblx0XHRcdDwhLS0g5YaF5a655Yy65Z+fIC0tPlxyXG5cdFx0XHQ8c2Nyb2xsLXZpZXcgc2Nyb2xsLXkgOnN0eWxlPVwic2Nyb2xsSGVpZ2h0ICE9IDAgPyAnaGVpZ2h0OiAnICsgc2Nyb2xsSGVpZ2h0ICsgJ3B4JyA6ICcnXCI+XHJcblx0XHRcdFx0PCEtLSA8c2Nyb2xsLXZpZXcgc2Nyb2xsLXkgPiAtLT5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInNjcm9sbC15XCI+XHJcblx0XHRcdFx0XHQ8IS0tIOaWh+Wtl+WMuuWfnyAtLT5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYWRkLWNvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0PHRleHRhcmVhXHJcblx0XHRcdFx0XHRcdFx0cmVmPVwiYWRkQ29udGVudFJlZlwiXHJcblx0XHRcdFx0XHRcdFx0aWQ9XCJhZGQtdGV4dGFyZWFcIlxyXG5cdFx0XHRcdFx0XHRcdDptYXhsZW5ndGg9XCJtYXhsZW5ndGhcIlxyXG5cdFx0XHRcdFx0XHRcdDpzdHlsZT1cIidoZWlnaHQ6JyArIHRleHRhcmVhSGVpZ2h0ICsgJ3JweCdcIlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwidW5pLXRleHRhcmVhXCJcclxuXHRcdFx0XHRcdFx0XHQ6Zm9jdXM9XCJmb2N1c1wiXHJcblx0XHRcdFx0XHRcdFx0OmN1cnNvcj1cImN1cnNvclwiXHJcblx0XHRcdFx0XHRcdFx0OnNlbGVjdGlvbi1zdGFydD1cImN1cnNvclwiXHJcblx0XHRcdFx0XHRcdFx0OnNlbGVjdGlvbi1lbmQ9XCJjdXJzb3JcIlxyXG5cdFx0XHRcdFx0XHRcdDphdXRvLWJsdXI9XCJ0cnVlXCJcclxuXHRcdFx0XHRcdFx0XHR2LW1vZGVsPVwiY29udGVudFwiXHJcblx0XHRcdFx0XHRcdFx0OmFkanVzdC1wb3NpdGlvbj1cInRydWVcIlxyXG5cdFx0XHRcdFx0XHRcdDpzaG93LWNvbmZpcm0tYmFyPVwiZmFsc2VcIlxyXG5cdFx0XHRcdFx0XHRcdDpmaXhlZD1cInRydWVcIlxyXG5cdFx0XHRcdFx0XHRcdEBpbnB1dD1cImNoZWNrV29yZHNMZW5ndGhcIlxyXG5cdFx0XHRcdFx0XHRcdEBibHVyPVwidGV4dGFyZWFCbHVyXCJcclxuXHRcdFx0XHRcdFx0XHRAZm9jdXM9XCJ0ZXh0YXJlYUZvY3VzXCJcclxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIuWIhuS6q+WlveeOqeeahOS6i+aDhSzlkozns5flj4vkuIDotbfnrJHkuIDnrJF+XCJcclxuXHRcdFx0XHRcdFx0PjwvdGV4dGFyZWE+XHJcblx0XHRcdFx0XHRcdDwhLS0g5a2X5pWw57uf6K6hIC0tPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cIndvcmRzXCI+e3sgY29udGVudC5sZW5ndGggfX0ve3sgbWF4bGVuZ3RoIH19PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PCEtLSDop4bpopEgLS0+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImFkZC12aWRlb1wiPiBcclxuXHRcdFx0XHRcdFx0PHZpZGVvIHYtaWY9XCJ2aWRlb1NyY1wiIDpwb3N0ZXI9XCJwb3N0ZXJcIiBvYmplY3RGaXQ9XCJmaWxsXCIgOnNyYz1cInZpZGVvU3JjXCIgOmF1dG9wbGF5PVwiZmFsc2VcIiA6c2hvdy1tdXRlLWJ0bj1cInRydWVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8Y292ZXItaW1hZ2UgY2xhc3M9XCJndWFuYmlcIiBzcmM9XCIvc3RhdGljL2ltZy9ndWFuYmkuc3ZnXCIgbW9kZT1cIlwiIEB0YXA9XCJkZWxWaWRlb1wiPjwvY292ZXItaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDwvdmlkZW8+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8IS0tIOWbvueJhyAtLT5cclxuXHRcdFx0XHRcdDxxcy1pbWctZ3JpZCA6aW1hZ2VMaXN0PVwiaW1hZ2VMaXN0XCIgQHByZXZpZXdJbWFnZT1cInByZXZpZXdJbWFnZVwiIEBkZWxJbWFnZT1cImRlbEltYWdlXCI+PC9xcy1pbWctZ3JpZD5cclxuXHRcdFx0XHRcdDwhLS0g6KGo5oOF5qCPIC0tPlxyXG5cdFx0XHRcdFx0PHNjcm9sbC12aWV3IGNsYXNzPVwiZW1vamlTdHlsZVwiIHYtc2hvdz1cInNob3dFbW9qaUJhclwiIDpzdHlsZT1cImtleWJvYXJkSGVpZ2h0XCIgc2Nyb2xsLXk9XCJ0cnVlXCI+XHJcblx0XHRcdFx0XHRcdDxlbW9qaS1saXN0IEBjbGlja2Vtb2ppPVwiY2xpY2tlbW9qaVwiIDprZXlib2FyZEhlaWdodD1cImtleWJvYXJkSGVpZ2h0XCIgLz5cclxuXHRcdFx0XHRcdDwvc2Nyb2xsLXZpZXc+XHJcblxyXG5cdFx0XHRcdFx0PCEtLSDniIbnpL4gLS0+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImJhb3NoZSB1bmktZmxleC1zYmNcIiBAdGFwPVwiaGFuZGxlQmFvc2hlXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWZsZXhcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImljb24gaWNvbmZvbnQgaWNvbi1odWF0aVwiIDpzdHlsZT1cImh1YXRpLmFjdGl2ZSA/ICdjb2xvcjojZmZkZTMzJyA6ICcnXCI+PC92aWV3PiA8dGV4dCA6c3R5bGU9XCJodWF0aS5hY3RpdmUgPyAnY29sb3I6IzAwMCcgOiAnJ1wiPnt7IGh1YXRpLnRpdGxlIH19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiaWNvbiBpY29uZm9udCBpY29uLWppbnJ1XCI+PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHRcdDwhLS0g5Yy/5ZCNIC0tPlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJhbnltb3VzIHVuaS1mbGV4LXNiY1wiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1mbGV4XCI+IDx2aWV3IGNsYXNzPVwiaWNvbiBpY29uZm9udCBpY29uLWdvdWJpYW5iaWFuXCI+PC92aWV3PiA8dGV4dD7lkK/nlKjljL/lkI08L3RleHQ+IDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHZpZXc+IDxzd2l0Y2ggOmNoZWNrZWQ9XCJhbnltb3VzXCIgQGNoYW5nZT1cImhhbmRsZUFueW1vdXNTd2l0Y2hcIiBjb2xvcj1cIiNmZmRlMzNcIiAvPiA8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3Njcm9sbC12aWV3PlxyXG5cclxuXHRcdFx0PCEtLSDljL/lkI3lvLnlh7rmoYYgLS0+XHJcblx0XHRcdDwhLS0gI2lmZGVmIEg1IC0tPlxyXG5cdFx0XHQ8Y292ZXItdmlldz5cclxuXHRcdFx0XHQ8dW5pLXBvcHVwIGlkPVwicG9wdXBEaWFsb2dcIiByZWY9XCJwb3B1cERpYWxvZ1wiIHR5cGU9XCJkaWFsb2dcIj5cclxuXHRcdFx0XHRcdDx1bmktcG9wdXAtZGlhbG9nXHJcblx0XHRcdFx0XHRcdDpodG1sPVwidHJ1ZVwiXHJcblx0XHRcdFx0XHRcdHR5cGU9XCJzdWNjZXNzXCJcclxuXHRcdFx0XHRcdFx0dGl0bGU9XCLnoa7orqTlkK/nlKjljL/lkI0/XCJcclxuXHRcdFx0XHRcdFx0Y29udGVudD1cIuWQr+eUqOWMv+WQjeWQjizluJblrZDkvJrmmL7npLpb5Yy/5ZCN55So5oi3XeWPkeihqDxicj7lkIzml7bns5flj4vkuZ/ml6Dms5XpgJrov4for6XluJblrZDlhbPms6jkvaAuXCJcclxuXHRcdFx0XHRcdFx0OmJlZm9yZS1jbG9zZT1cInRydWVcIlxyXG5cdFx0XHRcdFx0XHRjYW5jZWxUZXh0PVwi56Gu6K6k5ZCv55SoXCJcclxuXHRcdFx0XHRcdFx0Y29uZmlybVRleHQ9XCLlj5bmtohcIlxyXG5cdFx0XHRcdFx0XHQ6Y29uZmlybVN0eWxlPVwieyBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZkZTMzJywgY29sb3I6ICcjMDAwICFpbXBvcnRhbnQnLCBib3JkZXJSYWRpdXM6ICc1cHgnIH1cIlxyXG5cdFx0XHRcdFx0XHQ6Y2FuY2VsU3R5bGU9XCJ7IGJhY2tncm91bmRDb2xvcjogJyNlNGU0ZTQnLCBjb2xvcjogJyM4YjhiOGInLCBib3JkZXJSYWRpdXM6ICc1cHgnIH1cIlxyXG5cdFx0XHRcdFx0XHRAY29uZmlybT1cImRpYWxvZ0NvbmZpcm1cIlxyXG5cdFx0XHRcdFx0XHRAY2xvc2U9XCJkaWFsb2dDbG9zZVwiXHJcblx0XHRcdFx0XHQ+PC91bmktcG9wdXAtZGlhbG9nPlxyXG5cdFx0XHRcdDwvdW5pLXBvcHVwPlxyXG5cdFx0XHQ8L2NvdmVyLXZpZXc+XHJcblx0XHRcdDwhLS0gI2VuZGlmIC0tPlxyXG5cclxuXHRcdFx0PCEtLSDop4bpopEv5Zu+54mHL+ihqOaDhSAtLT5cclxuXHRcdFx0PHZpZXcgOmNsYXNzPVwiIGFuaW1hdGU/J2FuaW1hdGUtdG9waWMtdHlwZS1ib3gnOid0b3BpYy10eXBlLWJveCcgXCIgOnN0eWxlPVwiYW5pbWF0ZT8nYm90dG9tOicrKGtleWJvYXJkSGVpZ2h0LTIwKSsncHg7JzonJ1wiPlxyXG5cdFx0XHRcdDx2aWV3IDpjbGFzcz1cIiBhbmltYXRlPydhbmltYXRlLWJveCc6J2JveCdcIj5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWZsZXgtaXRlbVwiIDpjbGFzcz1cImFuaW1hdGU/J2FuaW1hdGUtdG9waWMtdHlwZSc6J3RvcGljLXR5cGUnXCI+IDxpbWFnZSBzcmM9XCIvc3RhdGljL2ltZy92aWVkby5zdmdcIiBtb2RlPVwiXCIgQHRhcD1cImhhbmRsZVZpZGVvQWN0aW9uXCI+PC9pbWFnZT4gPHRleHQ+6KeG6aKRPC90ZXh0PiA8L3ZpZXc+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1mbGV4LWl0ZW1cIiA6Y2xhc3M9XCJhbmltYXRlPydhbmltYXRlLXRvcGljLXR5cGUnOid0b3BpYy10eXBlJ1wiPiA8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9pbWcvaW1nLnN2Z1wiIG1vZGU9XCJcIiBAdGFwPVwiaGFuZGxlSW1hZ2VBY3Rpb25cIj48L2ltYWdlPiA8dGV4dD7lm77niYc8L3RleHQ+IDwvdmlldz5cclxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWZsZXgtaXRlbVwiIDpjbGFzcz1cImFuaW1hdGU/J2FuaW1hdGUtdG9waWMtdHlwZSc6J3RvcGljLXR5cGUnXCI+IDxpbWFnZSBzcmM9XCIvc3RhdGljL2ltZy9leHByZXNzaW9uLnN2Z1wiIEB0YXA9XCJoYW5kbGVFbW9qaUFjdGlvblwiIG1vZGU9XCJcIj48L2ltYWdlPiA8dGV4dD7ooajmg4U8L3RleHQ+IDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHJcblx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdDwhLS0g6KeG6aKRL+WbvueJhy/ooajmg4Ug5oKs5rWu6ZSu55uYIC0tPlxyXG5cdFx0XHQ8IS0tIDx2aWV3IGNsYXNzPVwia2V5Ym9hcmQtdG9waWMtdHlwZS1ib3ggYW5pbWF0ZV9fYW5pbWF0ZWQgYW5pbWF0ZV9fZmFkZUluXCIgdi1zaG93PVwic2hvd0tleWJvYXJkQWN0aW9ucyB8fCBzaG93RW1vamlCYXJcIiA6c3R5bGU9XCJ7IGJvdHRvbToga2V5Ym9hcmRIZWlnaHQgKyAncHgnIH1cIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImtleWJvYXJkLXRvcGljLXR5cGUgaWNvbiBpY29uZm9udCBpY29uLXNoaXBpbi10aWFuY2hvbmdcIiBAdGFwPVwiaGFuZGxlVmlkZW9BY3Rpb25cIj48L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJrZXlib2FyZC10b3BpYy10eXBlIGljb24gaWNvbmZvbnQgaWNvbi10dXBpYW5cIiBAdGFwPVwiaGFuZGxlSW1hZ2VBY3Rpb25cIj48L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJrZXlib2FyZC10b3BpYy10eXBlIGljb24gaWNvbmZvbnQgaWNvbi1iaWFvcWluZ1wiIEB0YXA9XCJoYW5kbGVFbW9qaUFjdGlvblwiPjwvdmlldz4gXHJcblx0XHRcdDwvdmlldz4tLT5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4vLyBBcHDlubPlj7DlnKhpT1PkuIrvvIx3ZWJ2aWV35Lit55qE6L2v6ZSu55uY5by55Ye65pe277yM6buY6K6k5Zyo6L2v6ZSu55uY5LiK5pa55pyJ5LiA5Liq5qiq5p2h77yM5pi+56S6552A77ya5LiK5LiA6aG544CB5LiL5LiA6aG55ZKM5a6M5oiQ562J5oyJ6ZKu44CC5aaC5LiN5oOz5pi+56S66L+Z5Liq5qiq5p2h77yM5Y+v5Lul6YWN572uc29mdGlucHV0TmF2QmFyOiAnbm9uZSdcclxuLy8g6YWN572u5pa55byP77yM5ZyoIHBhZ2VzLmpzb24g5Lit6YWN572uIHN0eWxlXHJcbmltcG9ydCBwZXJtaXNpb24gZnJvbSAnQC9jb21tb24vanMvcGVybWlzc2lvbi5qcyc7XHJcbmltcG9ydCBlbW9qaUxpc3QgZnJvbSAnQC9jb21wb25lbnRzL2N1c3RvbS9lbW9qaS1saXN0L2Vtb2ppLWxpc3QudnVlJztcclxuaW1wb3J0IHFzSW1nR3JpZCBmcm9tICdAL2NvbXBvbmVudHMvY3VzdG9tL3FzLWltZy1ncmlkL3FzLWltZy1ncmlkLnZ1ZSc7XHJcbmltcG9ydCB7IHFzRW1vamkgfSBmcm9tICdAL2NvbW1vbi9qcy9lbW9qaU5hbWUuanMnO1xyXG5cclxuY29uc3QgcHJpdmFjeVRleHRBcnIgPSBbJ+aJgOacieS6uuWPr+ingScsICfku4Xoh6rlt7Hlj6/op4EnXTtcclxuY29uc3QgZHJhZnRMaXN0ID0gWyfliKDpmaTojYnnqL8nLCAn5L+d5a2Y6I2J56i/J107XHJcblxyXG52YXIgc291cmNlVHlwZSA9IFtbJ2NhbWVyYSddLCBbJ2FsYnVtJ10sIFsnY2FtZXJhJywgJ2FsYnVtJ11dO1xyXG52YXIgc2l6ZVR5cGUgPSBbWydjb21wcmVzc2VkJ10sIFsnb3JpZ2luYWwnXSwgWydjb21wcmVzc2VkJywgJ29yaWdpbmFsJ11dO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0Y29tcG9uZW50czoge1xyXG5cdFx0ZW1vamlMaXN0LFxyXG5cdFx0cXNJbWdHcmlkXHJcblx0fSxcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0YW5pbWF0ZTogdHJ1ZSwgLy8g6KeG6aKRL+WbvueJhy/ooajmg4XliqjnlLvmjqfliLZcclxuXHRcdFx0c2Nyb2xsSGVpZ2h0OiAwLCAvLyDmu5rliqjmoI/pq5jluqZcclxuXHRcdFx0dGV4dGFyZWFIZWlnaHQ6IDMwMCwgLy8g5paH5pys5Z+f6auY5bqmXHJcblx0XHRcdGh1YXRpOiB7XHJcblx0XHRcdFx0dGl0bGU6ICfmt7vliqDniIbnpL4sIOiiq+abtOWkmuezl+WPi+eci+WIsH4nLFxyXG5cdFx0XHRcdGFjdGl2ZTogZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5o6n5Yi26KGo5oOF5piv5ZCm5by55Ye6XHJcblx0XHRcdHNob3dFbW9qaUJhcjogZmFsc2UsXHJcblx0XHRcdC8vIOihqOabv+aNouWQjVxyXG5cdFx0XHRlbW9qaU5hbWU6IFtdLFxyXG5cdFx0XHRzdG9yYWdlS2V5OiAnYWRkX2lucHV0X2RyYWZ0JyxcclxuXHRcdFx0cHJpdmFjeTogcHJpdmFjeVRleHRBcnJbMF0sXHJcblx0XHRcdGFueW1vdXM6IGZhbHNlLFxyXG5cdFx0XHRtYXhsZW5ndGg6IDI0MCxcclxuXHRcdFx0Y29udGVudDogJycsXHJcblx0XHRcdGN1cnNvcjogMCxcclxuXHRcdFx0Y2FuU3VibWl0Q2xhc3M6IGZhbHNlLFxyXG5cdFx0XHRzaG93S2V5Ym9hcmRBY3Rpb25zOiBmYWxzZSwgLy8g5pi+56S66ZSu55uY5LiK5pa55Yqf6IO95Yy6XHJcblx0XHRcdGtleWJvYXJkSGVpZ2h0OiAwLFxyXG5cdFx0XHR2aWRlb1NyYzogJycsIC8vIOinhumikeWcsOWdgFxyXG5cdFx0XHRwb3N0ZXI6ICdodHRwczovL2ltZzEzLjM2MGJ1eWltZy5jb20vYmFiZWwvczM4MHg1NjBfamZzL3QxLzEwOTIxMC8yNC8xMTY3Ni82Njg3Mi81ZThkODExMEUwYTdjOGNhOC8xZmU5ZWFhZTc5YjFjODU0LmpwZyFjY18zODB4NTYwLndlYnAnLCAvLyDop4bpopHlsIHpnaJcclxuXHRcdFx0aW1hZ2VMaXN0OiBbXSwgLy8g5Zu+54mH5Zyw5Z2ALFxyXG5cdFx0XHRpbWdMaW1pdDogOSwgLy8g5Zu+54mH5pyA5aSn5byg5pWwXHJcblx0XHRcdHRpdGxlOiAnY2hvb3NlL3ByZXZpZXdJbWFnZScsXHJcblx0XHRcdHNvdXJjZVR5cGVJbmRleDogMixcclxuXHRcdFx0c291cmNlVHlwZTogWyfmi43nhacnLCAn55u45YaMJywgJ+aLjeeFp+aIluebuOWGjCddLFxyXG5cdFx0XHRzaXplVHlwZUluZGV4OiAyLFxyXG5cdFx0XHRzaXplVHlwZTogWyfljovnvKknLCAn5Y6f5Zu+JywgJ+WOi+e8qeaIluWOn+WbviddLFxyXG5cdFx0XHRjb3VudEluZGV4OiA4LFxyXG5cdFx0XHRjb3VudDogWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldLFxyXG5cdFx0XHRmb2N1czogdHJ1ZSAvL+iOt+WPlueEpueCuVxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdHdhdGNoOiB7XHJcblx0XHRjb250ZW50OiB7XHJcblx0XHRcdGhhbmRsZXIodmFsKSB7XHJcblx0XHRcdFx0aWYgKHZhbCAmJiB2YWwubGVuZ3RoID49IDUgJiYgdmFsLmxlbmd0aCA8PSB0aGlzLm1heGxlbmd0aCkge1xyXG5cdFx0XHRcdFx0dGhpcy5jYW5TdWJtaXRDbGFzcyA9IHRydWU7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuY2FuU3VibWl0Q2xhc3MgPSBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ3dhdGNoIGNvbnRlbnQgJywgdmFsLmxlbmd0aCk7XHJcblx0XHRcdFx0aWYgKHZhbC5sZW5ndGggPiB0aGlzLm1heGxlbmd0aCkge1xyXG5cdFx0XHRcdFx0dGhpcy5jb250ZW50ID0gdmFsLnN1YnN0cmluZygwLCB0aGlzLm1heGxlbmd0aCk7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IGDmnIDlpJrlj6rog73ovpPlhaUke3RoaXMubWF4bGVuZ3RofeS4quWtl+espmAsXHJcblx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0bWFzazogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDEwMDBcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0ZGVlcDogdHJ1ZSxcclxuXHRcdFx0aW1tZWRpYXRlOiB0cnVlXHJcblx0XHR9XHJcblx0fSxcclxuXHRjcmVhdGVkKCkge1xyXG5cdFx0dGhpcy5lbW9qaU5hbWUgPSBxc0Vtb2ppO1xyXG5cdFx0Ly8g6L+b5YWl6aG16Z2i5LiN5pi+56S6ZW1vamnliJfooajmoI9cclxuXHRcdHRoaXMuc2hvd0Vtb2ppQmFyID0gZmFsc2U7XHJcblx0XHQvLyDov5nph4znmoRzY3JvbGwtdmlld+iuvue9ruWNoOa7oeaVtOS4quWxj+W5le+8jGhlaWdodOiuvue9rjEwMCXvvJtzd2lwZXLnmoRoZWlnaHTorr7nva7miJDlsY/luZXnmoTpq5jluqbvvIjpmaTljrt0YWLmoI/nmoTpq5jluqbvvIks6ZyA6KaB5b6u5L+h5o+Q5L6b55qEYXBp6I635Y+W6K6+5aSH5bGP5bmV6auY5bqm5pWw5o2uXHJcblx0XHRsZXQgcmVzID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCk7XHJcblx0XHR0aGlzLnN3aXBlckhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHQgLSA1MDtcclxuXHRcdGNvbnN0IHZhbHVlID0gdW5pLmdldFN0b3JhZ2VTeW5jKHRoaXMuc3RvcmFnZUtleSk7XHJcblx0XHRpZiAodmFsdWUpIHtcclxuXHRcdFx0bGV0IGRhdGEgPSBKU09OLnBhcnNlKHZhbHVlKTtcclxuXHRcdFx0dGhpcy5jb250ZW50ID0gZGF0YS5jb250ZW50O1xyXG5cdFx0XHR0aGlzLmN1cnNvciA9IHRoaXMuY29udGVudC5sZW5ndGg7XHJcblx0XHRcdHRoaXMuaHVhdGkgPSBkYXRhLmh1YXRpO1xyXG5cdFx0XHR0aGlzLmltYWdlTGlzdCA9IGRhdGEuaW1hZ2VMaXN0O1xyXG5cdFx0XHR0aGlzLnZpZGVvU3JjID0gZGF0YS52aWRlb1NyYztcclxuXHRcdH1cclxuXHR9LFxyXG5cdG1vdW50ZWQoKSB7XHJcblx0XHR2YXIgX3RoaXMgPSB0aGlzO1xyXG5cdFx0dW5pLm9uS2V5Ym9hcmRIZWlnaHRDaGFuZ2UocmVzID0+IHtcclxuXHRcdFx0bGV0IGhlaWdodCA9IHJlcy5oZWlnaHQ7XHJcblx0XHRcdGNvbnNvbGUubG9nKCfplK7nm5jpq5jluqY6JyArIGhlaWdodCk7XHJcblx0XHRcdGlmIChoZWlnaHQgPiAwKSB7XHJcblx0XHRcdFx0dGhpcy5rZXlib2FyZEhlaWdodCA9IGhlaWdodCAtIDQwO1xyXG5cdFx0XHRcdHRoaXMuc2hvd0tleWJvYXJkQWN0aW9ucyA9IHRydWU7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5zaG93S2V5Ym9hcmRBY3Rpb25zID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5oYW5kbGVTY3JvbGxIZWlnaHQoKTtcclxuXHR9LFxyXG5cclxuXHQvKiDnm5HlkKzpobXpnaLmu5rliqggKi9cclxuXHRvblBhZ2VTY3JvbGwoZSkge1xyXG5cdFx0Y29uc29sZS5sb2coJ+ebkeWQrOmhtemdoua7muWKqCcsIGUpO1xyXG5cdFx0dW5pLmhpZGVLZXlib2FyZCgpOyAvLyDpmpDol4/lt7Lnu4/mmL7npLrnmoTova/plK7nm5jvvIzlpoLmnpzova/plK7nm5jmsqHmnInmmL7npLrliJnkuI3lgZrku7vkvZXmk43kvZzjgIJcclxuXHRcdHRoaXMuc2hvd0tleWJvYXJkQWN0aW9ucyA9IGZhbHNlO1xyXG5cdFx0Ly9cclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdC8qIOeCueWHu+eIhuekvuS6i+S7tiAqL1xyXG5cdFx0aGFuZGxlQmFvc2hlKCkge1xyXG5cdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0dXJsOiAnLi4vLi4vY29tcG9uZW50cy9jdXN0b20vYmFvLXNoZS9iYW8tc2hlJyxcclxuXHRcdFx0XHRhbmltYXRpb25UeXBlOiAnc2xpZGUtaW4tYm90dG9tJywgLy8g5paw56qX5L2T5LuO5bqV6YOo6L+b5YWlXHJcblx0XHRcdFx0YW5pbWF0aW9uRHVyYXRpb246IDMwMFxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Lyog5bem5L6n6L+U5Zue5oyJ6ZKu5LqL5Lu2LOmcgOimgeS/neWtmOiNieeovyAqL1xyXG5cdFx0YmFjaygpIHtcclxuXHRcdFx0dGhpcy5zaG93RW1vamlCYXIgPSBmYWxzZTtcclxuXHRcdFx0bGV0IF90aGlzID0gdGhpcztcclxuXHRcdFx0aWYgKF90aGlzLnNob3VsZFNhdmVEcmFmdCgpKSB7XHJcblx0XHRcdFx0Lyog5o+Q56S655So5oi35L+d5a2YICovXHJcblx0XHRcdFx0dW5pLnNob3dBY3Rpb25TaGVldCh7XHJcblx0XHRcdFx0XHRpdGVtTGlzdDogZHJhZnRMaXN0LFxyXG5cdFx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+eCueWHu+S6hicgKyByZXMudGFwSW5kZXgpO1xyXG5cdFx0XHRcdFx0XHRpZiAoMCA9PT0gcmVzLnRhcEluZGV4KSB7XHJcblx0XHRcdFx0XHRcdFx0Ly8g5Yig6Zmk6I2J56i/XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJyDliKDpmaTojYnnqL8nKTtcclxuXHRcdFx0XHRcdFx0XHR1bmkucmVtb3ZlU3RvcmFnZSh7XHJcblx0XHRcdFx0XHRcdFx0XHRrZXk6IF90aGlzLnN0b3JhZ2VLZXksXHJcblx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5Yig6Zmk6I2J56i/5oiQ5YqfJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICgxID09PSByZXMudGFwSW5kZXgpIHtcclxuXHRcdFx0XHRcdFx0XHQvLyDkv53lrZjojYnnqL9cclxuXHRcdFx0XHRcdFx0XHRsZXQgZGF0YSA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IF90aGlzLmNvbnRlbnQsXHJcblx0XHRcdFx0XHRcdFx0XHRodWF0aTogX3RoaXMuaHVhdGksXHJcblx0XHRcdFx0XHRcdFx0XHRpbWFnZUxpc3Q6IHRoaXMuaW1hZ2VMaXN0LFxyXG5cdFx0XHRcdFx0XHRcdFx0dmlkZW9TcmM6IHRoaXMudmlkZW9TcmNcclxuXHRcdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlKHtcclxuXHRcdFx0XHRcdFx0XHRcdGtleTogX3RoaXMuc3RvcmFnZUtleSxcclxuXHRcdFx0XHRcdFx0XHRcdGRhdGE6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG5cdFx0XHRcdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+S/neWtmOiNieeov+aIkOWKnydcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Lyog6L+U5Zue5LiK5LiA5bGCICovXHJcblx0XHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soe1xyXG5cdFx0XHRcdFx0XHRcdGRlbHRhOiAxXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8qIOi/lOWbnuS4iuS4gOWxgiAqL1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soe1xyXG5cdFx0XHRcdFx0ZGVsdGE6IDFcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHQvKiDliKTmlq3mmK/lkKbpnIDopoHkv53lrZjojYnnqL8gKi9cclxuXHRcdHNob3VsZFNhdmVEcmFmdCgpIHtcclxuXHRcdFx0bGV0IGZsYWcgPSBmYWxzZTtcclxuXHRcdFx0Lyog5YaF5a655LiN5Li656m6ICovXHJcblx0XHRcdGlmICh0aGlzLmNvbnRlbnQgfHwgdGhpcy5odWF0aS5hY3RpdmUgfHwgdGhpcy5pbWFnZUxpc3QubGVuZ3RoID4gMCB8fCB0aGlzLnZpZGVvU3JjKSB7XHJcblx0XHRcdFx0ZmxhZyA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGZsYWc7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8qIOWPkeW4gyAqL1xyXG5cdFx0c3VibWl0KCkge30sXHJcblxyXG5cdFx0Lyog5YiH5o2i6ZqQ56eB5Y+v6KeBICovXHJcblx0XHRoYW5kbGVUZXh0Q2xpY2soKSB7XHJcblx0XHRcdHVuaS5zaG93QWN0aW9uU2hlZXQoe1xyXG5cdFx0XHRcdGl0ZW1MaXN0OiBwcml2YWN5VGV4dEFycixcclxuXHRcdFx0XHRzdWNjZXNzOiByZXMgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5wcml2YWN5ID0gcHJpdmFjeVRleHRBcnJbcmVzLnRhcEluZGV4XTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKiDljL/lkI3lvIDlhbMgKi9cclxuXHRcdGhhbmRsZUFueW1vdXNTd2l0Y2goZSkge1xyXG5cdFx0XHQvKiDop6bmhJ/lj43ppoggKi9cclxuXHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTXHJcblx0XHRcdGlmICh1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybSA9PSAnaW9zJykge1xyXG5cdFx0XHRcdGxldCBVSUltcGFjdEZlZWRiYWNrR2VuZXJhdG9yID0gcGx1cy5pb3MuaW1wb3J0Q2xhc3MoJ1VJSW1wYWN0RmVlZGJhY2tHZW5lcmF0b3InKTtcclxuXHRcdFx0XHRsZXQgaW1wYWN0ID0gbmV3IFVJSW1wYWN0RmVlZGJhY2tHZW5lcmF0b3IoKTtcclxuXHRcdFx0XHRpbXBhY3QucHJlcGFyZSgpO1xyXG5cdFx0XHRcdGltcGFjdC5pbml0KDEpO1xyXG5cdFx0XHRcdGltcGFjdC5pbXBhY3RPY2N1cnJlZCgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybSA9PSAnYW5kcm9pZCcpIHtcclxuXHRcdFx0XHR1bmkudmlicmF0ZVNob3J0KHtcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+eCueWHu+mch+WKqCcpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vICNlbmRpZlxyXG5cclxuXHRcdFx0dGhpcy5hbnltb3VzID0gZS5kZXRhaWwudmFsdWU7XHJcblxyXG5cdFx0XHQvLyAjaWZuZGVmIEFQUC1QTFVTXHJcblx0XHRcdGlmICh0aGlzLmFueW1vdXMpIHtcclxuXHRcdFx0XHR0aGlzLiRyZWZzLnBvcHVwRGlhbG9nLm9wZW4oKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyAjZW5kaWZcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiDlr7nor53moYbngrnlh7vnoa7orqTmjInpkq5cclxuXHRcdCAqL1xyXG5cdFx0ZGlhbG9nQ29uZmlybShkb25lKSB7XHJcblx0XHRcdHRoaXMuYW55bW91cyA9IGZhbHNlO1xyXG5cdFx0XHQvLyDpnIDopoHmiafooYwgZG9uZSDmiY3og73lhbPpl63lr7nor53moYZcclxuXHRcdFx0ZG9uZSgpO1xyXG5cdFx0fSxcclxuXHRcdC8qKlxyXG5cdFx0ICog5a+56K+d5qGG5Y+W5raI5oyJ6ZKuXHJcblx0XHQgKi9cclxuXHRcdGRpYWxvZ0Nsb3NlKGRvbmUpIHtcclxuXHRcdFx0Ly8g6ZyA6KaB5omn6KGMIGRvbmUg5omN6IO95YWz6Zet5a+56K+d5qGGXHJcblx0XHRcdGRvbmUoKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Lyog5paH5pys5qGG6L6T5YWl5LqL5Lu2ICovXHJcblx0XHRjaGVja1dvcmRzTGVuZ3RoKGUpIHtcclxuXHRcdFx0aWYgKGUuZGV0YWlsLnZhbHVlLmxlbmd0aCA+PSB0aGlzLm1heGxlbmd0aCkge1xyXG5cdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0dGl0bGU6IGDmnIDlpJrlj6rog73ovpPlhaUke3RoaXMubWF4bGVuZ3RofeS4quWtl+espmAsXHJcblx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHRtYXNrOiB0cnVlLFxyXG5cdFx0XHRcdFx0ZHVyYXRpb246IDEwMDBcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5jb250ZW50ID0gZS5kZXRhaWwudmFsdWU7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0Lyog6L6T5YWl5qGG5aSx5Y6754Sm54K55pe26Kem5Y+R77yMZXZlbnQuZGV0YWlsID0ge3ZhbHVlLCBjdXJzb3J9ICovXHJcblx0XHR0ZXh0YXJlYUJsdXIoZSkge1xyXG5cdFx0XHR1bmkuaGlkZUtleWJvYXJkKCk7IC8vIOmakOiXj+W3sue7j+aYvuekuueahOi9r+mUruebmO+8jOWmguaenOi9r+mUruebmOayoeacieaYvuekuuWImeS4jeWBmuS7u+S9leaTjeS9nOOAglxyXG5cdFx0XHR0aGlzLnNob3dLZXlib2FyZEFjdGlvbnMgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5zaG93RW1vamlCYXIgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5mb2N1cyA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLmFuaW1hdGUgPSBmYWxzZTtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdC8qIOi+k+WFpeahhuiBmueEpuaXtuinpuWPke+8jGV2ZW50LmRldGFpbCA9IHsgdmFsdWUsIGhlaWdodCB977yMaGVpZ2h0IOS4uumUruebmOmrmOW6piAqL1xyXG5cdFx0dGV4dGFyZWFGb2N1cyhlKXtcclxuXHRcdFx0Y29uc29sZS5sb2coZS5kZXRhaWwpO1xyXG5cdFx0XHR0aGlzLmZvY3VzPSB0cnVlO1xyXG5cdFx0XHR0aGlzLmFuaW1hdGUgPSB0cnVlO1xyXG5cdFx0XHRcclxuXHRcdH0sXHJcblxyXG5cdFx0Lyog5Yqo5oCB6K6h566X5rua5Yqo5qCP55qE6auY5bqmICovXHJcblx0XHRoYW5kbGVTY3JvbGxIZWlnaHQoKSB7XHJcblx0XHRcdGxldCBzZWxmID0gdGhpcztcclxuXHRcdFx0c2VsZi4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdGxldCBpbmZvID0gdW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5zZWxlY3QoJy5zY3JvbGwteScpO1xyXG5cdFx0XHRcdGluZm9cclxuXHRcdFx0XHRcdC5ib3VuZGluZ0NsaWVudFJlY3QoZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0XHRcdFx0XHQvL2RhdGEgLSDlkITnp43lj4LmlbBcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+WKqOaAgeiuoeeul+a7muWKqOagj+eahOmrmOW6picsIGRhdGEuaGVpZ2h0KTsgLy8g6I635Y+W5YWD57Sg6auY5bqmXHJcblxyXG5cdFx0XHRcdFx0XHQvLyDliqjmgIHorqHnrpfmu5rliqjmoI/nmoTpq5jluqZcclxuXHRcdFx0XHRcdFx0c2VsZi5zY3JvbGxIZWlnaHQgPSBkYXRhLmhlaWdodCArIDcwO1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC5leGVjKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKiDmiZPlvIDmiYvmnLrnmoTop4bpopHmlofku7YgKi9cclxuXHRcdGhhbmRsZVZpZGVvQWN0aW9uKCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZygn5omT5byA5omL5py655qE6KeG6aKR5paH5Lu2Jyk7XHJcblx0XHRcdHVuaS5jaG9vc2VWaWRlbyh7XHJcblx0XHRcdFx0Y291bnQ6IDEsXHJcblx0XHRcdFx0c291cmNlVHlwZTogWydjYW1lcmEnLCAnYWxidW0nXSxcclxuXHRcdFx0XHRzdWNjZXNzOiByZXMgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IHN1ZmZpeCA9ICc/eC1vc3MtcHJvY2Vzcz12aWRlcC9zbmFwc2hvdCx0XzAsZl9qcGcnO1xyXG5cdFx0XHRcdFx0dGhpcy52aWRlb1NyYyA9IHJlcy50ZW1wRmlsZVBhdGggKyBzdWZmaXg7XHJcblx0XHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMudGV4dGFyZWFIZWlnaHQgPSAxNTA7XHJcblx0XHRcdFx0XHRcdC8vIOWKqOaAgeiuoeeul+a7muWKqOagj+eahOmrmOW6plxyXG5cdFx0XHRcdFx0XHR0aGlzLmhhbmRsZVNjcm9sbEhlaWdodCgpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Lyog5omT5byA5omL5py655qE5Zu+54mH5paH5Lu2ICovXHJcblx0XHRhc3luYyBoYW5kbGVJbWFnZUFjdGlvbigpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ+aJk+W8gOaJi+acuueahOWbvueJhycpO1xyXG5cdFx0XHQvLyAjaWZkZWYgQVBQLVBMVVNcclxuXHRcdFx0Ly8gVE9ETyDpgInmi6nnm7jmnLrmiJbnm7jlhozml7Yg6ZyA6KaB5by55Ye6YWN0aW9uc2hlZXTvvIznm67liY3ml6Dms5XojrflvpfmmK/nm7jmnLrov5jmmK/nm7jlhozvvIzlnKjlpLHotKXlm57osIPkuK3lpITnkIZcclxuXHRcdFx0aWYgKHRoaXMuc291cmNlVHlwZUluZGV4ICE9PSAyKSB7XHJcblx0XHRcdFx0bGV0IHN0YXR1cyA9IGF3YWl0IHRoaXMuY2hlY2tQZXJtaXNzaW9uKCk7XHJcblx0XHRcdFx0aWYgKHN0YXR1cyAhPT0gMSkge1xyXG5cdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn5o6I5p2D5aSx6LSlJyxcclxuXHRcdFx0XHRcdFx0Y29udGVudDogJ+mcgOimgeS7juaCqOeahOebuOacuuaIluebuOWGjOiOt+WPluWbvueJh++8jOivt+WcqOiuvue9rueVjOmdouaJk+W8gOebuOWFs+adg+mZkCcsXHJcblx0XHRcdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkub3BlblNldHRpbmcoKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHQvLyAjZW5kaWZcclxuXHJcblx0XHRcdGlmICh0aGlzLmltYWdlTGlzdC5sZW5ndGggPT09IHRoaXMuaW1nTGltaXQpIHtcclxuXHRcdFx0XHRsZXQgaXNDb250aW51ZSA9IGF3YWl0IHRoaXMuaXNGdWxsSW1nKCk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ+aYr+WQpue7p+e7rT8nLCBpc0NvbnRpbnVlKTtcclxuXHRcdFx0XHRpZiAoIWlzQ29udGludWUpIHtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0dW5pLmNob29zZUltYWdlKHtcclxuXHRcdFx0XHRzb3VyY2VUeXBlOiBzb3VyY2VUeXBlW3RoaXMuc291cmNlVHlwZUluZGV4XSxcclxuXHRcdFx0XHRzaXplVHlwZTogc2l6ZVR5cGVbdGhpcy5zaXplVHlwZUluZGV4XSxcclxuXHRcdFx0XHRjb3VudDogdGhpcy5pbWFnZUxpc3QubGVuZ3RoICsgdGhpcy5jb3VudFt0aGlzLmNvdW50SW5kZXhdID4gOSA/IDkgLSB0aGlzLmltYWdlTGlzdC5sZW5ndGggOiB0aGlzLmNvdW50W3RoaXMuY291bnRJbmRleF0sXHJcblx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuaW1hZ2VMaXN0ID0gdGhpcy5pbWFnZUxpc3QuY29uY2F0KHJlcy50ZW1wRmlsZVBhdGhzKTtcclxuXHRcdFx0XHRcdHRoaXMudGV4dGFyZWFIZWlnaHQgPSAxNTA7XHJcblx0XHRcdFx0XHQvLyDliqjmgIHorqHnrpfmu5rliqjmoI/nmoTpq5jluqZcclxuXHRcdFx0XHRcdHRoaXMuaGFuZGxlU2Nyb2xsSGVpZ2h0KCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRmYWlsOiBlcnIgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcignY2hvb3NlSW1hZ2UgZXJyb3InLCBlcnIpO1xyXG5cdFx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTXHJcblx0XHRcdFx0XHRpZiAoZXJyWydjb2RlJ10gJiYgZXJyLmNvZGUgIT09IDAgJiYgdGhpcy5zb3VyY2VUeXBlSW5kZXggPT09IDIpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0FQUC1QTFVT5aSE55CG6ZSZ6K+vJyk7XHJcblx0XHRcdFx0XHRcdHRoaXMuY2hlY2tQZXJtaXNzaW9uKGVyci5jb2RlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdFx0Ly8gI2lmZGVmIE1QXHJcblx0XHRcdFx0XHR1bmkuZ2V0U2V0dGluZyh7XHJcblx0XHRcdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdFx0bGV0IGF1dGhTdGF0dXMgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRzd2l0Y2ggKHRoaXMuc291cmNlVHlwZUluZGV4KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlIDA6XHJcblx0XHRcdFx0XHRcdFx0XHRcdGF1dGhTdGF0dXMgPSByZXMuYXV0aFNldHRpbmdbJ3Njb3BlLmNhbWVyYSddO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHRcdFx0XHRcdFx0YXV0aFN0YXR1cyA9IHJlcy5hdXRoU2V0dGluZ1snc2NvcGUuYWxidW0nXTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0XHRcdFx0XHRcdGF1dGhTdGF0dXMgPSByZXMuYXV0aFNldHRpbmdbJ3Njb3BlLmFsYnVtJ10gJiYgcmVzLmF1dGhTZXR0aW5nWydzY29wZS5jYW1lcmEnXTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aWYgKCFhdXRoU3RhdHVzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfmjojmnYPlpLHotKUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnSGVsbG8gdW5pLWFwcOmcgOimgeS7juaCqOeahOebuOacuuaIluebuOWGjOiOt+WPluWbvueJh++8jOivt+WcqOiuvue9rueVjOmdouaJk+W8gOebuOWFs+adg+mZkCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1bmkub3BlblNldHRpbmcoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKiDlm77niYfmmK/lkKblt7Lmu6E55bygICovXHJcblx0XHRpc0Z1bGxJbWc6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFByb21pc2UocmVzID0+IHtcclxuXHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdGNvbnRlbnQ6IGDlt7Lnu4/mnIkke3RoaXMuaW1nTGltaXR95byg5Zu+54mH5LqGLOaYr+WQpua4heepuueOsOacieWbvueJh++8n2AsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiBlID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKGUuY29uZmlybSkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuaW1hZ2VMaXN0ID0gW107XHJcblx0XHRcdFx0XHRcdFx0cmVzKHRydWUpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHJlcyhmYWxzZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRmYWlsOiAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHJlcyhmYWxzZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKiDpooTop4jlm77niYcgKi9cclxuXHRcdHByZXZpZXdJbWFnZTogZnVuY3Rpb24oZSkge1xyXG5cdFx0XHR2YXIgY3VycmVudCA9IGUuc3JjO1xyXG5cdFx0XHR1bmkucHJldmlld0ltYWdlKHtcclxuXHRcdFx0XHRjdXJyZW50OiBjdXJyZW50LFxyXG5cdFx0XHRcdHVybHM6IHRoaXMuaW1hZ2VMaXN0LFxyXG5cdFx0XHRcdGluZGljYXRvcjogJ251bWJlcidcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8qIOajgOafpeWbvueJh+adg+mZkCAqL1xyXG5cdFx0YXN5bmMgY2hlY2tQZXJtaXNzaW9uKGNvZGUpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ+ajgOafpeWbvueJh+adg+mZkCBjb2RlJywgY29kZSk7XHJcblx0XHRcdGxldCB0eXBlID0gY29kZSA/IGNvZGUgLSAyIDogdGhpcy5zb3VyY2VUeXBlSW5kZXg7XHJcblx0XHRcdGNvbnNvbGUubG9nKCfmo4Dmn6Xlm77niYfmnYPpmZAgdHlwZScsIHR5cGUpO1xyXG5cdFx0XHRjb25zb2xlLmxvZygn5qOA5p+l5Zu+54mH5p2D6ZmQIOiuvuWkh+exu+WeiyAnLCBwZXJtaXNpb24uaXNJT1MgPyAnSU9TJyA6ICdBbmRyb2lkJyk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCfmo4Dmn6Xlm77niYfmnYPpmZAgc291cmNlVHlwZSAnLCBzb3VyY2VUeXBlW3R5cGVdWzBdKTtcclxuXHRcdFx0bGV0IHN0YXR1cyA9IHBlcm1pc2lvbi5pc0lPU1xyXG5cdFx0XHRcdD8gYXdhaXQgcGVybWlzaW9uLnJlcXVlc3RJT1Moc291cmNlVHlwZVt0eXBlXVswXSlcclxuXHRcdFx0XHQ6IGF3YWl0IHBlcm1pc2lvbi5yZXF1ZXN0QW5kcm9pZCh0eXBlID09PSAwID8gJ2FuZHJvaWQucGVybWlzc2lvbi5DQU1FUkEnIDogJ2FuZHJvaWQucGVybWlzc2lvbi5SRUFEX0VYVEVSTkFMX1NUT1JBR0UnKTtcclxuXHRcdFx0Y29uc29sZS5sb2coJ+ajgOafpeWbvueJh+adg+mZkCBzdGF0dXMnLCBzdGF0dXMpO1xyXG5cdFx0XHRpZiAoc3RhdHVzID09PSBudWxsIHx8IHN0YXR1cyA9PT0gMSkge1xyXG5cdFx0XHRcdHN0YXR1cyA9IDE7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRjb250ZW50OiAn5rKh5pyJ5byA5ZCv5p2D6ZmQJyxcclxuXHRcdFx0XHRcdGNvbmZpcm1UZXh0OiAn6K6+572uJyxcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzLmNvbmZpcm0pIHtcclxuXHRcdFx0XHRcdFx0XHRwZXJtaXNpb24uZ290b0FwcFNldHRpbmcoKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gc3RhdHVzO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKiDmiZPlvIDooajmg4UgKi9cclxuXHRcdGhhbmRsZUVtb2ppQWN0aW9uKCkge1xyXG5cdFx0XHQvLyDpmpDol4/nirbmgIFcclxuXHRcdFx0aWYgKCF0aGlzLnNob3dFbW9qaUJhcikge1xyXG5cdFx0XHRcdC8vIDEu5L+u5pS55Li65Y+v6KeG54q25oCBXHJcblx0XHRcdFx0dGhpcy5zaG93RW1vamlCYXIgPSB0cnVlO1xyXG5cdFx0XHRcdC8vIDIu6ZqQ6JeP6ZSu55uYXHJcblx0XHRcdFx0aWYgKHRoaXMua2V5Ym9hcmRIZWlnaHQgPiAwKSB7XHJcblx0XHRcdFx0XHR1bmkuaGlkZUtleWJvYXJkKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIOaJk+W8gOeKtuaAgVxyXG5cdFx0XHRcdC8vIDEu5L+u5pS55Li66ZqQ6JeP54q25oCBXHJcblx0XHRcdFx0dGhpcy5zaG93RW1vamlCYXIgPSBmYWxzZTtcclxuXHRcdFx0XHQvLyAyLuaJk+W8gOmUruebmCzph43mlrDogZrnhKZ0ZXh0YXJlYVxyXG5cdFx0XHRcdHRoaXMuZm9jdXMgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Ly/ngrnlh7vooajmg4VcclxuXHRcdGNsaWNrZW1vamkodXJsLCBlbW9qaUxpbmUsIGVtb2ppTGlzdCkge1xyXG5cdFx0XHRsZXQgZW1vamlOYW1lID0gdGhpcy5lbW9qaU5hbWVbZW1vamlMaW5lXVtlbW9qaUxpc3RdO1xyXG5cdFx0XHRpZiAoZW1vamlOYW1lICE9ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0dGhpcy5jb250ZW50ICs9IGVtb2ppTmFtZTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyB0aGlzLmNvbnRlbnQucHVzaChcIjxpbWcgOnNyYz0nXCIgKyB1cmwgKyBcIicvPlwiKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Lyog5Yig6Zmk5Zu+54mHICovXHJcblx0XHRkZWxJbWFnZShlKSB7XHJcblx0XHRcdGxldCBpbmRleCA9IGUuaW5kZXg7XHJcblx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdGNvbnRlbnQ6ICfnoa7orqTnp7vpmaTor6Xlm77niYc/JyxcclxuXHRcdFx0XHRzdWNjZXNzOiByZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuaW1hZ2VMaXN0LnNwbGljZShpbmRleCwgMSk7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHJlcy5jYW5jZWwpIHtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdC8qIOWIoOmZpOinhumikSAqL1xyXG5cdFx0ZGVsVmlkZW8oKSB7XHJcblx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdGNvbnRlbnQ6ICfnoa7orqTnp7vpmaTor6Xop4bpopE/JyxcclxuXHRcdFx0XHRzdWNjZXNzOiByZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMudmlkZW9TcmM9Jyc7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHJlcy5jYW5jZWwpIHtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcblx0XHJcblx0XHJcblxyXG4vKiDlj7Pkvqflr7zoiKrmoI/mjInpkq4gKi9cclxuLnVuaS1uYXYtYmFyLXJpZ2h0LXRleHQge1xyXG5cdGZvbnQtc2l6ZTogJHVuaS1mb250LXNpemUtYmFzZTtcclxuXHRmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4vKiDlj7Pkvqflr7zoiKrmoI/mjInpkq4gKi9cclxuLnVuaS1uYXZiYXItcmlnaHQtdmlldyB7XHJcblx0cGFkZGluZzogMCAyMHJweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xyXG5cdGNvbG9yOiAjOGI4YjhiO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcnB4O1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0LyogI2VuZGlmICovXHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4uY2FuU3VibWl0IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcik7XHJcblx0Y29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcblxyXG4vKiDplK7nm5jkuIrmlrnmmL7npLrop4bpopEv5Zu+54mHL+ihqOaDhSAqL1xyXG4ua2V5Ym9hcmQtdG9waWMtdHlwZS1ib3gge1xyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjhmN2Y3O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHotaW5kZXg6IDEwO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWFyZ2luLWxlZnQ6IC0yMHJweDsgLy8g6Kej5Yaz57ud5a+55a6a5L2N5LiL5a695bqm5ouJ5Ly45bim5p2l55qE5bem5Y+z5oqW5Yqo6Zeu6aKYXHJcblxyXG5cdC5rZXlib2FyZC10b3BpYy10eXBlIHtcclxuXHRcdGNvbG9yOiAjMmM0MDVhO1xyXG5cdFx0bWFyZ2luOiAyNXJweDtcclxuXHRcdGZvbnQtc2l6ZTogNDBycHg7XHJcblx0fVxyXG59XHJcblxyXG4uYWRkLWNvbnRlbnQge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmFkZC12aWRlbyB7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBycHg7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR2aWRlbyB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICM4MDgwODA7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHJcblx0XHQuZ3VhbmJpIHtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRyaWdodDogMTBycHg7XHJcblx0XHRcdHRvcDogMTBycHg7XHJcblx0XHRcdHdpZHRoOiA0MHJweDtcclxuXHRcdFx0aGVpZ2h0OiA0MHJweDtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0XHRib3JkZXI6IDA7XHJcblx0XHRcdHotaW5kZXg6IDEwMDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHRcclxufVxyXG5cclxuLndvcmRzIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cmlnaHQ6IDBycHg7XHJcblx0Ym90dG9tOiAxMHJweDtcclxuXHR6LWluZGV4OiAyO1xyXG5cdGNvbG9yOiAjOGI4YjhiO1xyXG59XHJcblxyXG4uYmFvc2hlIHtcclxuXHRjb2xvcjogIzk2OTY5NjtcclxuXHRoZWlnaHQ6IDEwMHJweDtcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgI2Y4ZjdmNztcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y4ZjdmNztcclxuXHQuaWNvbi1odWF0aSB7XHJcblx0XHRmb250LXNpemU6IDUwcnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDUwcnB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAyMHJweDtcclxuXHR9XHJcbn1cclxuXHJcbi5hbnltb3VzIHtcclxuXHRjb2xvcjogIzExMTtcclxuXHRoZWlnaHQ6IDEwMHJweDtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y4ZjdmNztcclxuXHJcblx0Lmljb24tZ291YmlhbmJpYW4ge1xyXG5cdFx0d2lkdGg6IDQwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0Zm9udC1zaXplOiA0MHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yKTtcclxuXHRcdGhlaWdodDogNDBycHg7XHJcblx0XHRsaW5lLWhlaWdodDogNDBycHg7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdG1hcmdpbi1yaWdodDogMjBycHg7XHJcblx0fVxyXG59XHJcblxyXG4ucG9wdXBEaWFsb2cge1xyXG5cdHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuLy8g6KGo5oOFXHJcbi5lbW9qaVN0eWxlIHtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0Ym90dG9tOiAyMHJweDtcclxufVxyXG5cclxuXHJcbi8qICsrKysrKysrKysrKysrKyvop4bpopEv5Zu+54mHL+ihqOaDheagj+WKqOeUuyDlvIDlp4srKysrKysrKysrKysrKysrICovXHJcblxyXG4vKiDogZrnhKbnmoTliqjnlLsgKi9cclxuQGtleWZyYW1lcyB0b3BpYyB7XHJcblx0dG97XHJcblx0XHRib3R0b206MzE4cHg7XHJcblx0fVxyXG59XHJcbkBrZXlmcmFtZXMgYW5pbWF0ZS1ib3gge1xuXHRcdHRve1xuXHRcdFx0XHR3aWR0aDogMzAlO1xyXG5cdFx0fVxufVxyXG5Aa2V5ZnJhbWVzIGJveC10eXBlLWltYWdlIHtcblx0XHR0b3tcclxuXHRcdFx0XHRmb250LXNpemU6IDUwcnB4O1xuXHRcdFx0XHR3aWR0aDogNDBycHg7XHJcblx0XHRcdFx0aGVpZ2h0OiA0MHJweDtcclxuXHRcdFx0XHRjb2xvcjogIzJjNDA1YTtcclxuXHRcdFx0XHRcclxuXHRcdH1cbn1cclxuQGtleWZyYW1lcyBib3gtdHlwZS10ZXh0IHtcclxuXHRcdGZyb217XHJcblx0XHRcdG9wYWNpdHk6IDA7XHJcblx0XHR9XG5cdFx0dG97XHJcblx0XHRcdG9wYWNpdHk6IDA7XG5cdFx0fVxufVxyXG5cclxuLmFuaW1hdGUtdG9waWMtdHlwZS1ib3h7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdGJvdHRvbTogMHJweDtcclxuXHRtYXJnaW4tbGVmdDogLTIwcnB4O1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHRwYWRkaW5nLWJvdHRvbTogMjBycHg7XHJcblx0XHJcblx0YW5pbWF0aW9uLW5hbWU6IHRvcGljO1xyXG5cdGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcclxuXHQtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyOy8q5Yqo55S75Y+Y5o2i5pa55byPKi9cclxuXHRhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XHJcblx0YW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbn1cclxuXHJcbi5hbmltYXRlLWJveHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRhbmltYXRpb24tbmFtZTogYW5pbWF0ZS1ib3g7XHJcblx0YW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xyXG5cdCAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyOy8q5Yqo55S75Y+Y5o2i5pa55byPKi9cclxuXHRhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XHJcblx0YW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbn1cclxuXHJcbi5hbmltYXRlLXRvcGljLXR5cGV7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHJcblx0aW1hZ2Uge1xyXG5cdFx0Zm9udC1zaXplOiA1MHJweDtcclxuXHRcdGNvbG9yOiAjNGM0YzRjO1xyXG5cdFx0aGVpZ2h0OiA3MHJweDtcclxuXHRcdHdpZHRoOiA3MHJweDtcclxuXHRcdGFuaW1hdGlvbi1uYW1lOiBib3gtdHlwZS1pbWFnZTtcclxuXHRcdGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcclxuXHRcdCAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyOy8q5Yqo55S75Y+Y5o2i5pa55byPKi9cclxuXHRcdGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuXHRcdGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG5cdH1cclxuXHRcclxuXHR0ZXh0e1xyXG5cdFx0YW5pbWF0aW9uLW5hbWU6IGJveC10eXBlLXRleHQ7XHJcblx0XHRhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XHJcblx0XHQgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjsvKuWKqOeUu+WPmOaNouaWueW8jyovXHJcblx0XHRhbmltYXRpb24tZHVyYXRpb246IDAuNHM7XHJcblx0XHRhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuXHR9XHJcbn1cclxuXHJcblxyXG4vKiDop4bpopEv5Zu+54mHL+ihqOaDhSAqL1xyXG4udG9waWMtdHlwZS1ib3gge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRib3R0b206IDBycHg7XHJcblx0bWFyZ2luLWxlZnQ6IC0yMHJweDtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblx0cGFkZGluZy1ib3R0b206IDIwcnB4O1xyXG5cdFxyXG5cdFxyXG59XHJcbi5ib3h7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnRvcGljLXR5cGUge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuXHRpbWFnZSB7XHJcblx0XHRmb250LXNpemU6IDUwcnB4O1xyXG5cdFx0Y29sb3I6ICM0YzRjNGM7XHJcblx0XHRoZWlnaHQ6IDcwcnB4O1xyXG5cdFx0d2lkdGg6IDcwcnB4O1xyXG5cdFxyXG5cdH1cclxufVxyXG4vKiArKysrKysrKysrKysrKysr6KeG6aKRL+WbvueJhy/ooajmg4XmoI/liqjnlLsg57uT5p2fKysrKysrKysrKysrKysrKyAqL1xyXG5cclxuXHJcblxyXG48L3N0eWxlPlxyXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0luc3RhbGxBcHBzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uLy4uL0luc3RhbGxBcHBzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vSW5zdGFsbEFwcHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9JbnN0YWxsQXBwcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vSW5zdGFsbEFwcHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uL0luc3RhbGxBcHBzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IS4uLy4uLy4uLy4uLy4uLy4uL0luc3RhbGxBcHBzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSEuLi8uLi8uLi8uLi8uLi8uLi9JbnN0YWxsQXBwcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vSW5zdGFsbEFwcHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9hZGQtaW5wdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Mjc5NmI5MDQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0luc3RhbGxBcHBzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uLy4uL0luc3RhbGxBcHBzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vSW5zdGFsbEFwcHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9JbnN0YWxsQXBwcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vSW5zdGFsbEFwcHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uL0luc3RhbGxBcHBzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IS4uLy4uLy4uLy4uLy4uLy4uL0luc3RhbGxBcHBzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSEuLi8uLi8uLi8uLi8uLi8uLi9JbnN0YWxsQXBwcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vSW5zdGFsbEFwcHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9hZGQtaW5wdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Mjc5NmI5MDQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYxMDY5MTk5NTk3NVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJEOi9JbnN0YWxsQXBwcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJwdWJsaWNQYXRoXCI6XCIuLi8uLi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=