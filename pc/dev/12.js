(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "../node_modules/antd/es/steps/index.js":
/*!**********************************************!*\
  !*** ../node_modules/antd/es/steps/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rc_steps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-steps */ "../node_modules/rc-steps/es/index.js");








var Steps = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Steps, _React$Component);

    function Steps() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Steps);

        return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (Steps.__proto__ || Object.getPrototypeOf(Steps)).apply(this, arguments));
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Steps, [{
        key: 'render',
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](rc_steps__WEBPACK_IMPORTED_MODULE_6__["default"], this.props);
        }
    }]);

    return Steps;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Steps);

Steps.Step = rc_steps__WEBPACK_IMPORTED_MODULE_6__["default"].Step;
Steps.defaultProps = {
    prefixCls: 'ant-steps',
    iconPrefix: 'ant',
    current: 0
};
Steps.propTypes = {
    prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
    iconPrefix: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
    current: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number
};

/***/ }),

/***/ "../node_modules/antd/es/steps/style/css.js":
/*!**************************************************!*\
  !*** ../node_modules/antd/es/steps/style/css.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../node_modules/antd/es/steps/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "../node_modules/antd/es/steps/style/index.css":
/*!*****************************************************!*\
  !*** ../node_modules/antd/es/steps/style/index.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/steps/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/steps/style/index.css", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
		var newContent = __webpack_require__(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/steps/style/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	})(__WEBPACK_OUTDATED_DEPENDENCIES__); });

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/antd/es/steps/style/index.css":
/*!********************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/antd/es/steps/style/index.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n.ant-steps {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  font-size: 0;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.ant-steps-item {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow: hidden;\n}\n.ant-steps-item:last-child {\n  -webkit-box-flex: 0;\n  -webkit-flex: none;\n      -ms-flex: none;\n          flex: none;\n}\n.ant-steps-item:last-child .ant-steps-item-tail,\n.ant-steps-item:last-child .ant-steps-item-title:after {\n  display: none;\n}\n.ant-steps-item-icon,\n.ant-steps-item-content {\n  display: inline-block;\n  vertical-align: top;\n}\n.ant-steps-item-icon {\n  border: 1px solid rgba(0, 0, 0, 0.25);\n  width: 32px;\n  height: 32px;\n  line-height: 32px;\n  text-align: center;\n  border-radius: 32px;\n  font-size: 16px;\n  margin-right: 8px;\n  -webkit-transition: background-color 0.3s, border-color 0.3s;\n  transition: background-color 0.3s, border-color 0.3s;\n  font-family: \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n.ant-steps-item-icon > .ant-steps-icon {\n  line-height: 1;\n  top: -1px;\n  color: #1890ff;\n  position: relative;\n}\n.ant-steps-item-tail {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  top: 12px;\n  padding: 0 10px;\n}\n.ant-steps-item-tail:after {\n  content: '';\n  display: inline-block;\n  background: #e8e8e8;\n  height: 1px;\n  border-radius: 1px;\n  width: 100%;\n  -webkit-transition: background .3s;\n  transition: background .3s;\n}\n.ant-steps-item-title {\n  font-size: 16px;\n  color: rgba(0, 0, 0, 0.65);\n  display: inline-block;\n  padding-right: 16px;\n  position: relative;\n  line-height: 32px;\n}\n.ant-steps-item-title:after {\n  content: '';\n  height: 1px;\n  width: 9999px;\n  background: #e8e8e8;\n  display: block;\n  position: absolute;\n  top: 16px;\n  left: 100%;\n}\n.ant-steps-item-description {\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-steps-item-wait .ant-steps-item-icon {\n  border-color: rgba(0, 0, 0, 0.25);\n  background-color: #fff;\n}\n.ant-steps-item-wait .ant-steps-item-icon > .ant-steps-icon {\n  color: rgba(0, 0, 0, 0.25);\n}\n.ant-steps-item-wait .ant-steps-item-icon > .ant-steps-icon .ant-steps-icon-dot {\n  background: rgba(0, 0, 0, 0.25);\n}\n.ant-steps-item-wait > .ant-steps-item-content > .ant-steps-item-title {\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-steps-item-wait > .ant-steps-item-content > .ant-steps-item-title:after {\n  background-color: #e8e8e8;\n}\n.ant-steps-item-wait > .ant-steps-item-content > .ant-steps-item-description {\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-steps-item-wait > .ant-steps-item-tail:after {\n  background-color: #e8e8e8;\n}\n.ant-steps-item-process .ant-steps-item-icon {\n  border-color: #1890ff;\n  background-color: #fff;\n}\n.ant-steps-item-process .ant-steps-item-icon > .ant-steps-icon {\n  color: #1890ff;\n}\n.ant-steps-item-process .ant-steps-item-icon > .ant-steps-icon .ant-steps-icon-dot {\n  background: #1890ff;\n}\n.ant-steps-item-process > .ant-steps-item-content > .ant-steps-item-title {\n  color: rgba(0, 0, 0, 0.85);\n}\n.ant-steps-item-process > .ant-steps-item-content > .ant-steps-item-title:after {\n  background-color: #e8e8e8;\n}\n.ant-steps-item-process > .ant-steps-item-content > .ant-steps-item-description {\n  color: rgba(0, 0, 0, 0.65);\n}\n.ant-steps-item-process > .ant-steps-item-tail:after {\n  background-color: #e8e8e8;\n}\n.ant-steps-item-process .ant-steps-item-icon {\n  background: #1890ff;\n}\n.ant-steps-item-process .ant-steps-item-icon > .ant-steps-icon {\n  color: #fff;\n}\n.ant-steps-item-process .ant-steps-item-title {\n  font-weight: 500;\n}\n.ant-steps-item-finish .ant-steps-item-icon {\n  border-color: #1890ff;\n  background-color: #fff;\n}\n.ant-steps-item-finish .ant-steps-item-icon > .ant-steps-icon {\n  color: #1890ff;\n}\n.ant-steps-item-finish .ant-steps-item-icon > .ant-steps-icon .ant-steps-icon-dot {\n  background: #1890ff;\n}\n.ant-steps-item-finish > .ant-steps-item-content > .ant-steps-item-title {\n  color: rgba(0, 0, 0, 0.65);\n}\n.ant-steps-item-finish > .ant-steps-item-content > .ant-steps-item-title:after {\n  background-color: #1890ff;\n}\n.ant-steps-item-finish > .ant-steps-item-content > .ant-steps-item-description {\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-steps-item-finish > .ant-steps-item-tail:after {\n  background-color: #1890ff;\n}\n.ant-steps-item-error .ant-steps-item-icon {\n  border-color: #f5222d;\n  background-color: #fff;\n}\n.ant-steps-item-error .ant-steps-item-icon > .ant-steps-icon {\n  color: #f5222d;\n}\n.ant-steps-item-error .ant-steps-item-icon > .ant-steps-icon .ant-steps-icon-dot {\n  background: #f5222d;\n}\n.ant-steps-item-error > .ant-steps-item-content > .ant-steps-item-title {\n  color: #f5222d;\n}\n.ant-steps-item-error > .ant-steps-item-content > .ant-steps-item-title:after {\n  background-color: #e8e8e8;\n}\n.ant-steps-item-error > .ant-steps-item-content > .ant-steps-item-description {\n  color: #f5222d;\n}\n.ant-steps-item-error > .ant-steps-item-tail:after {\n  background-color: #e8e8e8;\n}\n.ant-steps-item.ant-steps-next-error .ant-steps-item-title:after {\n  background: #f5222d;\n}\n.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item {\n  margin-right: 16px;\n  white-space: nowrap;\n}\n.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item:last-child {\n  margin-right: 0;\n}\n.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item:last-child .ant-steps-item-title {\n  padding-right: 0;\n}\n.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item-tail {\n  display: none;\n}\n.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item-description {\n  max-width: 140px;\n}\n.ant-steps-item-custom .ant-steps-item-icon {\n  background: none;\n  border: 0;\n  width: auto;\n  height: auto;\n}\n.ant-steps-item-custom .ant-steps-item-icon > .ant-steps-icon {\n  font-size: 24px;\n  line-height: 32px;\n  top: 0;\n  left: 0.5px;\n  width: 32px;\n  height: 32px;\n}\n.ant-steps-item-custom.ant-steps-item-process .ant-steps-item-icon > .ant-steps-icon {\n  color: #1890ff;\n}\n.ant-steps-small.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item {\n  margin-right: 12px;\n}\n.ant-steps-small.ant-steps-horizontal:not(.ant-steps-label-vertical) .ant-steps-item:last-child {\n  margin-right: 0;\n}\n.ant-steps-small .ant-steps-item-icon {\n  width: 24px;\n  height: 24px;\n  line-height: 24px;\n  text-align: center;\n  border-radius: 24px;\n  font-size: 12px;\n}\n.ant-steps-small .ant-steps-item-title {\n  font-size: 14px;\n  line-height: 24px;\n  padding-right: 12px;\n}\n.ant-steps-small .ant-steps-item-title:after {\n  top: 12px;\n}\n.ant-steps-small .ant-steps-item-description {\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-steps-small .ant-steps-item-tail {\n  top: 8px;\n  padding: 0 8px;\n}\n.ant-steps-small .ant-steps-item-custom .ant-steps-item-icon {\n  width: inherit;\n  height: inherit;\n  line-height: inherit;\n  border-radius: 0;\n  border: 0;\n  background: none;\n}\n.ant-steps-small .ant-steps-item-custom .ant-steps-item-icon > .ant-steps-icon {\n  font-size: 24px;\n  line-height: 24px;\n  -webkit-transform: none;\n      -ms-transform: none;\n          transform: none;\n}\n.ant-steps-vertical {\n  display: block;\n}\n.ant-steps-vertical .ant-steps-item {\n  display: block;\n  overflow: visible;\n}\n.ant-steps-vertical .ant-steps-item-icon {\n  float: left;\n  margin-right: 16px;\n}\n.ant-steps-vertical .ant-steps-item-content {\n  min-height: 48px;\n  overflow: hidden;\n  display: block;\n}\n.ant-steps-vertical .ant-steps-item-title {\n  line-height: 32px;\n}\n.ant-steps-vertical .ant-steps-item-description {\n  padding-bottom: 12px;\n}\n.ant-steps-vertical > .ant-steps-item > .ant-steps-item-tail {\n  position: absolute;\n  left: 16px;\n  top: 0;\n  height: 100%;\n  width: 1px;\n  padding: 38px 0 6px;\n}\n.ant-steps-vertical > .ant-steps-item > .ant-steps-item-tail:after {\n  height: 100%;\n  width: 1px;\n}\n.ant-steps-vertical > .ant-steps-item:not(:last-child) > .ant-steps-item-tail {\n  display: block;\n}\n.ant-steps-vertical > .ant-steps-item > .ant-steps-item-content > .ant-steps-item-title:after {\n  display: none;\n}\n.ant-steps-vertical.ant-steps-small .ant-steps-item-tail {\n  position: absolute;\n  left: 12px;\n  top: 0;\n  padding: 30px 0 6px;\n}\n.ant-steps-vertical.ant-steps-small .ant-steps-item-title {\n  line-height: 24px;\n}\n@media (max-width: 480px) {\n  .ant-steps-horizontal.ant-steps-label-horizontal {\n    display: block;\n  }\n  .ant-steps-horizontal.ant-steps-label-horizontal .ant-steps-item {\n    display: block;\n    overflow: visible;\n  }\n  .ant-steps-horizontal.ant-steps-label-horizontal .ant-steps-item-icon {\n    float: left;\n    margin-right: 16px;\n  }\n  .ant-steps-horizontal.ant-steps-label-horizontal .ant-steps-item-content {\n    min-height: 48px;\n    overflow: hidden;\n    display: block;\n  }\n  .ant-steps-horizontal.ant-steps-label-horizontal .ant-steps-item-title {\n    line-height: 32px;\n  }\n  .ant-steps-horizontal.ant-steps-label-horizontal .ant-steps-item-description {\n    padding-bottom: 12px;\n  }\n  .ant-steps-horizontal.ant-steps-label-horizontal > .ant-steps-item > .ant-steps-item-tail {\n    position: absolute;\n    left: 16px;\n    top: 0;\n    height: 100%;\n    width: 1px;\n    padding: 38px 0 6px;\n  }\n  .ant-steps-horizontal.ant-steps-label-horizontal > .ant-steps-item > .ant-steps-item-tail:after {\n    height: 100%;\n    width: 1px;\n  }\n  .ant-steps-horizontal.ant-steps-label-horizontal > .ant-steps-item:not(:last-child) > .ant-steps-item-tail {\n    display: block;\n  }\n  .ant-steps-horizontal.ant-steps-label-horizontal > .ant-steps-item > .ant-steps-item-content > .ant-steps-item-title:after {\n    display: none;\n  }\n  .ant-steps-horizontal.ant-steps-label-horizontal.ant-steps-small .ant-steps-item-tail {\n    position: absolute;\n    left: 12px;\n    top: 0;\n    padding: 30px 0 6px;\n  }\n  .ant-steps-horizontal.ant-steps-label-horizontal.ant-steps-small .ant-steps-item-title {\n    line-height: 24px;\n  }\n}\n.ant-steps-label-vertical .ant-steps-item {\n  overflow: visible;\n}\n.ant-steps-label-vertical .ant-steps-item-tail {\n  padding: 0 24px;\n  margin-left: 48px;\n}\n.ant-steps-label-vertical .ant-steps-item-content {\n  display: block;\n  text-align: center;\n  margin-top: 8px;\n  width: 140px;\n}\n.ant-steps-label-vertical .ant-steps-item-icon {\n  display: inline-block;\n  margin-left: 36px;\n}\n.ant-steps-label-vertical .ant-steps-item-title {\n  padding-right: 0;\n}\n.ant-steps-label-vertical .ant-steps-item-title:after {\n  display: none;\n}\n.ant-steps-label-vertical .ant-steps-item-description {\n  text-align: left;\n}\n.ant-steps-dot .ant-steps-item-title {\n  line-height: 1.5;\n}\n.ant-steps-dot .ant-steps-item-tail {\n  width: 100%;\n  top: 2px;\n  margin: 0 0 0 70px;\n  padding: 0;\n}\n.ant-steps-dot .ant-steps-item-tail:after {\n  height: 3px;\n  width: calc(100% - 20px);\n  margin-left: 12px;\n}\n.ant-steps-dot .ant-steps-item:first-child .ant-steps-icon-dot {\n  left: 2px;\n}\n.ant-steps-dot .ant-steps-item-icon {\n  padding-right: 0;\n  width: 8px;\n  height: 8px;\n  line-height: 8px;\n  border: 0;\n  margin-left: 67px;\n  background: transparent;\n}\n.ant-steps-dot .ant-steps-item-icon .ant-steps-icon-dot {\n  float: left;\n  width: 100%;\n  height: 100%;\n  border-radius: 100px;\n  position: relative;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n  /* expand hover area */\n}\n.ant-steps-dot .ant-steps-item-icon .ant-steps-icon-dot:after {\n  content: \"\";\n  background: rgba(0, 0, 0, 0.001);\n  width: 60px;\n  height: 32px;\n  position: absolute;\n  top: -12px;\n  left: -26px;\n}\n.ant-steps-dot .ant-steps-item-process .ant-steps-item-icon {\n  width: 10px;\n  height: 10px;\n  line-height: 10px;\n}\n.ant-steps-dot .ant-steps-item-process .ant-steps-item-icon .ant-steps-icon-dot {\n  top: -1px;\n}\n.ant-steps-vertical.ant-steps-dot .ant-steps-item-icon {\n  margin-left: 0;\n  margin-top: 8px;\n}\n.ant-steps-vertical.ant-steps-dot .ant-steps-item-tail {\n  margin: 0;\n  left: -9px;\n  top: 2px;\n  padding: 22px 0 4px;\n}\n.ant-steps-vertical.ant-steps-dot .ant-steps-item:first-child .ant-steps-icon-dot {\n  left: 0;\n}\n.ant-steps-vertical.ant-steps-dot .ant-steps-item-process .ant-steps-icon-dot {\n  left: -2px;\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/lodash/debounce.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/debounce.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "../node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "../node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "../node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "../node_modules/lodash/now.js":
/*!*************************************!*\
  !*** ../node_modules/lodash/now.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "../node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "../node_modules/lodash/toNumber.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/toNumber.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "../node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "../node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "../node_modules/rc-steps/es/Step.js":
/*!*******************************************!*\
  !*** ../node_modules/rc-steps/es/Step.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "../node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);











function isString(str) {
  return typeof str === 'string';
}

var Step = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Step, _React$Component);

  function Step() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Step);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (Step.__proto__ || Object.getPrototypeOf(Step)).apply(this, arguments));
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Step, [{
    key: 'renderIconNode',
    value: function renderIconNode() {
      var _classNames;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          progressDot = _props.progressDot,
          stepNumber = _props.stepNumber,
          status = _props.status,
          title = _props.title,
          description = _props.description,
          icon = _props.icon,
          iconPrefix = _props.iconPrefix;

      var iconNode = void 0;
      var iconClassName = classnames__WEBPACK_IMPORTED_MODULE_9___default()(prefixCls + '-icon', iconPrefix + 'icon', (_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_classNames, iconPrefix + 'icon-' + icon, icon && isString(icon)), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_classNames, iconPrefix + 'icon-check', !icon && status === 'finish'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_classNames, iconPrefix + 'icon-cross', !icon && status === 'error'), _classNames));
      var iconDot = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('span', { className: prefixCls + '-icon-dot' });
      // `progressDot` enjoy the highest priority
      if (progressDot) {
        if (typeof progressDot === 'function') {
          iconNode = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            'span',
            { className: prefixCls + '-icon' },
            progressDot(iconDot, { index: stepNumber - 1, status: status, title: title, description: description })
          );
        } else {
          iconNode = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            'span',
            { className: prefixCls + '-icon' },
            iconDot
          );
        }
      } else if (icon && !isString(icon)) {
        iconNode = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          'span',
          { className: prefixCls + '-icon' },
          icon
        );
      } else if (icon || status === 'finish' || status === 'error') {
        iconNode = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement('span', { className: iconClassName });
      } else {
        iconNode = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          'span',
          { className: prefixCls + '-icon' },
          stepNumber
        );
      }
      return iconNode;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          prefixCls = _props2.prefixCls,
          style = _props2.style,
          itemWidth = _props2.itemWidth,
          _props2$status = _props2.status,
          status = _props2$status === undefined ? 'wait' : _props2$status,
          iconPrefix = _props2.iconPrefix,
          icon = _props2.icon,
          wrapperStyle = _props2.wrapperStyle,
          adjustMarginRight = _props2.adjustMarginRight,
          stepNumber = _props2.stepNumber,
          description = _props2.description,
          title = _props2.title,
          progressDot = _props2.progressDot,
          tailContent = _props2.tailContent,
          restProps = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_props2, ['className', 'prefixCls', 'style', 'itemWidth', 'status', 'iconPrefix', 'icon', 'wrapperStyle', 'adjustMarginRight', 'stepNumber', 'description', 'title', 'progressDot', 'tailContent']);

      var classString = classnames__WEBPACK_IMPORTED_MODULE_9___default()(prefixCls + '-item', prefixCls + '-item-' + status, className, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, prefixCls + '-item-custom', icon));
      var stepItemStyle = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, style);
      if (itemWidth) {
        stepItemStyle.width = itemWidth;
      }
      if (adjustMarginRight) {
        stepItemStyle.marginRight = adjustMarginRight;
      }
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        'div',
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, restProps, {
          className: classString,
          style: stepItemStyle
        }),
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          'div',
          { className: prefixCls + '-item-tail' },
          tailContent
        ),
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          'div',
          { className: prefixCls + '-item-icon' },
          this.renderIconNode()
        ),
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          'div',
          { className: prefixCls + '-item-content' },
          react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            'div',
            { className: prefixCls + '-item-title' },
            title
          ),
          description && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
            'div',
            { className: prefixCls + '-item-description' },
            description
          )
        )
      );
    }
  }]);

  return Step;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

Step.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  wrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  itemWidth: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string]),
  status: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  iconPrefix: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.node,
  adjustMarginRight: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string]),
  stepNumber: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any,
  title: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any,
  progressDot: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func]),
  tailContent: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any
};
/* harmony default export */ __webpack_exports__["default"] = (Step);

/***/ }),

/***/ "../node_modules/rc-steps/es/Steps.js":
/*!********************************************!*\
  !*** ../node_modules/rc-steps/es/Steps.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "../node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/debounce */ "../node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils */ "../node_modules/rc-steps/es/utils.js");







/* eslint react/no-did-mount-set-state: 0 */







var Steps = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Steps, _Component);

  function Steps(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Steps);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (Steps.__proto__ || Object.getPrototypeOf(Steps)).call(this, props));

    _this.calcStepOffsetWidth = function () {
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_12__["isFlexSupported"])()) {
        return;
      }
      // Just for IE9
      var domNode = Object(react_dom__WEBPACK_IMPORTED_MODULE_9__["findDOMNode"])(_this);
      if (domNode.children.length > 0) {
        if (_this.calcTimeout) {
          clearTimeout(_this.calcTimeout);
        }
        _this.calcTimeout = setTimeout(function () {
          // +1 for fit edge bug of digit width, like 35.4px
          var lastStepOffsetWidth = (domNode.lastChild.offsetWidth || 0) + 1;
          // Reduce shake bug
          if (_this.state.lastStepOffsetWidth === lastStepOffsetWidth || Math.abs(_this.state.lastStepOffsetWidth - lastStepOffsetWidth) <= 3) {
            return;
          }
          _this.setState({ lastStepOffsetWidth: lastStepOffsetWidth });
        });
      }
    };

    _this.state = {
      flexSupported: true,
      lastStepOffsetWidth: 0
    };
    _this.calcStepOffsetWidth = lodash_debounce__WEBPACK_IMPORTED_MODULE_11___default()(_this.calcStepOffsetWidth, 150);
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Steps, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.calcStepOffsetWidth();
      if (!Object(_utils__WEBPACK_IMPORTED_MODULE_12__["isFlexSupported"])()) {
        this.setState({
          flexSupported: false
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.calcStepOffsetWidth();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.calcTimeout) {
        clearTimeout(this.calcTimeout);
      }
      if (this.calcStepOffsetWidth && this.calcStepOffsetWidth.cancel) {
        this.calcStepOffsetWidth.cancel();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          _props$style = _props.style,
          style = _props$style === undefined ? {} : _props$style,
          className = _props.className,
          children = _props.children,
          direction = _props.direction,
          labelPlacement = _props.labelPlacement,
          iconPrefix = _props.iconPrefix,
          status = _props.status,
          size = _props.size,
          current = _props.current,
          progressDot = _props.progressDot,
          restProps = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_props, ['prefixCls', 'style', 'className', 'children', 'direction', 'labelPlacement', 'iconPrefix', 'status', 'size', 'current', 'progressDot']);

      var _state = this.state,
          lastStepOffsetWidth = _state.lastStepOffsetWidth,
          flexSupported = _state.flexSupported;

      var filteredChildren = react__WEBPACK_IMPORTED_MODULE_7___default.a.Children.toArray(children).filter(function (c) {
        return !!c;
      });
      var lastIndex = filteredChildren.length - 1;
      var adjustedlabelPlacement = !!progressDot ? 'vertical' : labelPlacement;
      var classString = classnames__WEBPACK_IMPORTED_MODULE_10___default()(prefixCls, prefixCls + '-' + direction, className, (_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-' + size, size), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-label-' + adjustedlabelPlacement, direction === 'horizontal'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-dot', !!progressDot), _classNames));

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        'div',
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ className: classString, style: style }, restProps),
        react__WEBPACK_IMPORTED_MODULE_7__["Children"].map(filteredChildren, function (child, index) {
          if (!child) {
            return null;
          }
          var childProps = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
            stepNumber: '' + (index + 1),
            prefixCls: prefixCls,
            iconPrefix: iconPrefix,
            wrapperStyle: style,
            progressDot: progressDot
          }, child.props);
          if (!flexSupported && direction !== 'vertical' && index !== lastIndex) {
            childProps.itemWidth = 100 / lastIndex + '%';
            childProps.adjustMarginRight = -Math.round(lastStepOffsetWidth / lastIndex + 1);
          }
          // fix tail color
          if (status === 'error' && index === current - 1) {
            childProps.className = prefixCls + '-next-error';
          }
          if (!child.props.status) {
            if (index === current) {
              childProps.status = status;
            } else if (index < current) {
              childProps.status = 'finish';
            } else {
              childProps.status = 'wait';
            }
          }
          return Object(react__WEBPACK_IMPORTED_MODULE_7__["cloneElement"])(child, childProps);
        })
      );
    }
  }]);

  return Steps;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Steps.propTypes = {
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  iconPrefix: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  direction: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  labelPlacement: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any,
  status: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  size: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  progressDot: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func]),
  style: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  current: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number
};
Steps.defaultProps = {
  prefixCls: 'rc-steps',
  iconPrefix: 'rc',
  direction: 'horizontal',
  labelPlacement: 'horizontal',
  current: 0,
  status: 'process',
  size: '',
  progressDot: false
};
/* harmony default export */ __webpack_exports__["default"] = (Steps);

/***/ }),

/***/ "../node_modules/rc-steps/es/index.js":
/*!********************************************!*\
  !*** ../node_modules/rc-steps/es/index.js ***!
  \********************************************/
/*! exports provided: Step, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Steps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Steps */ "../node_modules/rc-steps/es/Steps.js");
/* harmony import */ var _Step__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Step */ "../node_modules/rc-steps/es/Step.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Step", function() { return _Step__WEBPACK_IMPORTED_MODULE_1__["default"]; });




_Steps__WEBPACK_IMPORTED_MODULE_0__["default"].Step = _Step__WEBPACK_IMPORTED_MODULE_1__["default"];


/* harmony default export */ __webpack_exports__["default"] = (_Steps__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../node_modules/rc-steps/es/utils.js":
/*!********************************************!*\
  !*** ../node_modules/rc-steps/es/utils.js ***!
  \********************************************/
/*! exports provided: isFlexSupported */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFlexSupported", function() { return isFlexSupported; });
function isFlexSupported() {
  if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
    var documentElement = window.document.documentElement;

    return 'flex' in documentElement.style || 'webkitFlex' in documentElement.style || 'Flex' in documentElement.style || 'msFlex' in documentElement.style;
  }
  return false;
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvc3RlcHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3N0ZXBzL3N0eWxlL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvc3RlcHMvc3R5bGUvaW5kZXguY3NzP2NiMWEiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3N0ZXBzL3N0eWxlL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9kZWJvdW5jZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9ub3cuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9OdW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYy1zdGVwcy9lcy9TdGVwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmMtc3RlcHMvZXMvU3RlcHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYy1zdGVwcy9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JjLXN0ZXBzL2VzL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBOzs7Ozs7Ozs7Ozs7O0FDQ0E7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7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Q2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUM3TEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNB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dUNBQXVDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1S0E7QUFDQTs7QUFFQTs7QUFFUTtBQUNSLCtHOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6IjEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmNTdGVwcyBmcm9tICdyYy1zdGVwcyc7XG5cbnZhciBTdGVwcyA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFN0ZXBzLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFN0ZXBzKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RlcHMpO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoU3RlcHMuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTdGVwcykpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhTdGVwcywgW3tcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJjU3RlcHMsIHRoaXMucHJvcHMpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFN0ZXBzO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBTdGVwcztcblxuU3RlcHMuU3RlcCA9IFJjU3RlcHMuU3RlcDtcblN0ZXBzLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwcmVmaXhDbHM6ICdhbnQtc3RlcHMnLFxuICAgIGljb25QcmVmaXg6ICdhbnQnLFxuICAgIGN1cnJlbnQ6IDBcbn07XG5TdGVwcy5wcm9wVHlwZXMgPSB7XG4gICAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGljb25QcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY3VycmVudDogUHJvcFR5cGVzLm51bWJlclxufTsiLCJpbXBvcnQgJy4uLy4uL3N0eWxlL2luZGV4LmNzcyc7XG5pbXBvcnQgJy4vaW5kZXguY3NzJzsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXguY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiBzdHlsZWxpbnQtZGlzYWJsZSBhdC1ydWxlLWVtcHR5LWxpbmUtYmVmb3JlLGF0LXJ1bGUtbmFtZS1zcGFjZS1hZnRlcixhdC1ydWxlLW5vLXVua25vd24gKi9cXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBuby1kdXBsaWNhdGUtc2VsZWN0b3JzICovXFxuLyogc3R5bGVsaW50LWRpc2FibGUgZGVjbGFyYXRpb24tYmFuZy1zcGFjZS1iZWZvcmUsbm8tZHVwbGljYXRlLXNlbGVjdG9ycyAqL1xcbi8qIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLWJhbmctc3BhY2UtYmVmb3JlLG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnMgKi9cXG4uYW50LXN0ZXBzIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9ub3NwYWNlZCBOdW1iZXJcXFwiLCBcXFwiQ2hpbmVzZSBRdW90ZVxcXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiUGluZ0ZhbmcgU0NcXFwiLCBcXFwiSGlyYWdpbm8gU2FucyBHQlxcXCIsIFxcXCJNaWNyb3NvZnQgWWFIZWlcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBmb250LXNpemU6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uYW50LXN0ZXBzLWl0ZW0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAtd2Via2l0LWZsZXg6IDE7XFxuICAgICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICAgIGZsZXg6IDE7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uYW50LXN0ZXBzLWl0ZW06bGFzdC1jaGlsZCB7XFxuICAtd2Via2l0LWJveC1mbGV4OiAwO1xcbiAgLXdlYmtpdC1mbGV4OiBub25lO1xcbiAgICAgIC1tcy1mbGV4OiBub25lO1xcbiAgICAgICAgICBmbGV4OiBub25lO1xcbn1cXG4uYW50LXN0ZXBzLWl0ZW06bGFzdC1jaGlsZCAuYW50LXN0ZXBzLWl0ZW0tdGFpbCxcXG4uYW50LXN0ZXBzLWl0ZW06bGFzdC1jaGlsZCAuYW50LXN0ZXBzLWl0ZW0tdGl0bGU6YWZ0ZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmFudC1zdGVwcy1pdGVtLWljb24sXFxuLmFudC1zdGVwcy1pdGVtLWNvbnRlbnQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuLmFudC1zdGVwcy1pdGVtLWljb24ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDMycHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAzMnB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcywgYm9yZGVyLWNvbG9yIDAuM3M7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIGJvcmRlci1jb2xvciAwLjNzO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJDaGluZXNlIFF1b3RlXFxcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJQaW5nRmFuZyBTQ1xcXCIsIFxcXCJIaXJhZ2lubyBTYW5zIEdCXFxcIiwgXFxcIk1pY3Jvc29mdCBZYUhlaVxcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxufVxcbi5hbnQtc3RlcHMtaXRlbS1pY29uID4gLmFudC1zdGVwcy1pY29uIHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgdG9wOiAtMXB4O1xcbiAgY29sb3I6ICMxODkwZmY7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5hbnQtc3RlcHMtaXRlbS10YWlsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogMTJweDtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG59XFxuLmFudC1zdGVwcy1pdGVtLXRhaWw6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBib3JkZXItcmFkaXVzOiAxcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3M7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4zcztcXG59XFxuLmFudC1zdGVwcy1pdGVtLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZy1yaWdodDogMTZweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xcbn1cXG4uYW50LXN0ZXBzLWl0ZW0tdGl0bGU6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBoZWlnaHQ6IDFweDtcXG4gIHdpZHRoOiA5OTk5cHg7XFxuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDE2cHg7XFxuICBsZWZ0OiAxMDAlO1xcbn1cXG4uYW50LXN0ZXBzLWl0ZW0tZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxufVxcbi5hbnQtc3RlcHMtaXRlbS13YWl0IC5hbnQtc3RlcHMtaXRlbS1pY29uIHtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcbi5hbnQtc3RlcHMtaXRlbS13YWl0IC5hbnQtc3RlcHMtaXRlbS1pY29uID4gLmFudC1zdGVwcy1pY29uIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbn1cXG4uYW50LXN0ZXBzLWl0ZW0td2FpdCAuYW50LXN0ZXBzLWl0ZW0taWNvbiA+IC5hbnQtc3RlcHMtaWNvbiAuYW50LXN0ZXBzLWljb24tZG90IHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxufVxcbi5hbnQtc3RlcHMtaXRlbS13YWl0ID4gLmFudC1zdGVwcy1pdGVtLWNvbnRlbnQgPiAuYW50LXN0ZXBzLWl0ZW0tdGl0bGUge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxufVxcbi5hbnQtc3RlcHMtaXRlbS13YWl0ID4gLmFudC1zdGVwcy1pdGVtLWNvbnRlbnQgPiAuYW50LXN0ZXBzLWl0ZW0tdGl0bGU6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcXG59XFxuLmFudC1zdGVwcy1pdGVtLXdhaXQgPiAuYW50LXN0ZXBzLWl0ZW0tY29udGVudCA+IC5hbnQtc3RlcHMtaXRlbS1kZXNjcmlwdGlvbiB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG59XFxuLmFudC1zdGVwcy1pdGVtLXdhaXQgPiAuYW50LXN0ZXBzLWl0ZW0tdGFpbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xcbn1cXG4uYW50LXN0ZXBzLWl0ZW0tcHJvY2VzcyAuYW50LXN0ZXBzLWl0ZW0taWNvbiB7XFxuICBib3JkZXItY29sb3I6ICMxODkwZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG4uYW50LXN0ZXBzLWl0ZW0tcHJvY2VzcyAuYW50LXN0ZXBzLWl0ZW0taWNvbiA+IC5hbnQtc3RlcHMtaWNvbiB7XFxuICBjb2xvcjogIzE4OTBmZjtcXG59XFxuLmFudC1zdGVwcy1pdGVtLXByb2Nlc3MgLmFudC1zdGVwcy1pdGVtLWljb24gPiAuYW50LXN0ZXBzLWljb24gLmFudC1zdGVwcy1pY29uLWRvdCB7XFxuICBiYWNrZ3JvdW5kOiAjMTg5MGZmO1xcbn1cXG4uYW50LXN0ZXBzLWl0ZW0tcHJvY2VzcyA+IC5hbnQtc3RlcHMtaXRlbS1jb250ZW50ID4gLmFudC1zdGVwcy1pdGVtLXRpdGxlIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xcbn1cXG4uYW50LXN0ZXBzLWl0ZW0tcHJvY2VzcyA+IC5hbnQtc3RlcHMtaXRlbS1jb250ZW50ID4gLmFudC1zdGVwcy1pdGVtLXRpdGxlOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XFxufVxcbi5hbnQtc3RlcHMtaXRlbS1wcm9jZXNzID4gLmFudC1zdGVwcy1pdGVtLWNvbnRlbnQgPiAuYW50LXN0ZXBzLWl0ZW0tZGVzY3JpcHRpb24ge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxufVxcbi5hbnQtc3RlcHMtaXRlbS1wcm9jZXNzID4gLmFudC1zdGVwcy1pdGVtLXRhaWw6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcXG59XFxuLmFudC1zdGVwcy1pdGVtLXByb2Nlc3MgLmFudC1zdGVwcy1pdGVtLWljb24ge1xcbiAgYmFja2dyb3VuZDogIzE4OTBmZjtcXG59XFxuLmFudC1zdGVwcy1pdGVtLXByb2Nlc3MgLmFudC1zdGVwcy1pdGVtLWljb24gPiAuYW50LXN0ZXBzLWljb24ge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5hbnQtc3RlcHMtaXRlbS1wcm9jZXNzIC5hbnQtc3RlcHMtaXRlbS10aXRsZSB7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG4uYW50LXN0ZXBzLWl0ZW0tZmluaXNoIC5hbnQtc3RlcHMtaXRlbS1pY29uIHtcXG4gIGJvcmRlci1jb2xvcjogIzE4OTBmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcbi5hbnQtc3RlcHMtaXRlbS1maW5pc2ggLmFudC1zdGVwcy1pdGVtLWljb24gPiAuYW50LXN0ZXBzLWljb24ge1xcbiAgY29sb3I6ICMxODkwZmY7XFxufVxcbi5hbnQtc3RlcHMtaXRlbS1maW5pc2ggLmFudC1zdGVwcy1pdGVtLWljb24gPiAuYW50LXN0ZXBzLWljb24gLmFudC1zdGVwcy1pY29uLWRvdCB7XFxuICBiYWNrZ3JvdW5kOiAjMTg5MGZmO1xcbn1cXG4uYW50LXN0ZXBzLWl0ZW0tZmluaXNoID4gLmFudC1zdGVwcy1pdGVtLWNvbnRlbnQgPiAuYW50LXN0ZXBzLWl0ZW0tdGl0bGUge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxufVxcbi5hbnQtc3RlcHMtaXRlbS1maW5pc2ggPiAuYW50LXN0ZXBzLWl0ZW0tY29udGVudCA+IC5hbnQtc3RlcHMtaXRlbS10aXRsZTphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg5MGZmO1xcbn1cXG4uYW50LXN0ZXBzLWl0ZW0tZmluaXNoID4gLmFudC1zdGVwcy1pdGVtLWNvbnRlbnQgPiAuYW50LXN0ZXBzLWl0ZW0tZGVzY3JpcHRpb24ge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxufVxcbi5hbnQtc3RlcHMtaXRlbS1maW5pc2ggPiAuYW50LXN0ZXBzLWl0ZW0tdGFpbDphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg5MGZmO1xcbn1cXG4uYW50LXN0ZXBzLWl0ZW0tZXJyb3IgLmFudC1zdGVwcy1pdGVtLWljb24ge1xcbiAgYm9yZGVyLWNvbG9yOiAjZjUyMjJkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuLmFudC1zdGVwcy1pdGVtLWVycm9yIC5hbnQtc3RlcHMtaXRlbS1pY29uID4gLmFudC1zdGVwcy1pY29uIHtcXG4gIGNvbG9yOiAjZjUyMjJkO1xcbn1cXG4uYW50LXN0ZXBzLWl0ZW0tZXJyb3IgLmFudC1zdGVwcy1pdGVtLWljb24gPiAuYW50LXN0ZXBzLWljb24gLmFudC1zdGVwcy1pY29uLWRvdCB7XFxuICBiYWNrZ3JvdW5kOiAjZjUyMjJkO1xcbn1cXG4uYW50LXN0ZXBzLWl0ZW0tZXJyb3IgPiAuYW50LXN0ZXBzLWl0ZW0tY29udGVudCA+IC5hbnQtc3RlcHMtaXRlbS10aXRsZSB7XFxuICBjb2xvcjogI2Y1MjIyZDtcXG59XFxuLmFudC1zdGVwcy1pdGVtLWVycm9yID4gLmFudC1zdGVwcy1pdGVtLWNvbnRlbnQgPiAuYW50LXN0ZXBzLWl0ZW0tdGl0bGU6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcXG59XFxuLmFudC1zdGVwcy1pdGVtLWVycm9yID4gLmFudC1zdGVwcy1pdGVtLWNvbnRlbnQgPiAuYW50LXN0ZXBzLWl0ZW0tZGVzY3JpcHRpb24ge1xcbiAgY29sb3I6ICNmNTIyMmQ7XFxufVxcbi5hbnQtc3RlcHMtaXRlbS1lcnJvciA+IC5hbnQtc3RlcHMtaXRlbS10YWlsOmFmdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XFxufVxcbi5hbnQtc3RlcHMtaXRlbS5hbnQtc3RlcHMtbmV4dC1lcnJvciAuYW50LXN0ZXBzLWl0ZW0tdGl0bGU6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZDogI2Y1MjIyZDtcXG59XFxuLmFudC1zdGVwcy1ob3Jpem9udGFsOm5vdCguYW50LXN0ZXBzLWxhYmVsLXZlcnRpY2FsKSAuYW50LXN0ZXBzLWl0ZW0ge1xcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLmFudC1zdGVwcy1ob3Jpem9udGFsOm5vdCguYW50LXN0ZXBzLWxhYmVsLXZlcnRpY2FsKSAuYW50LXN0ZXBzLWl0ZW06bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcbi5hbnQtc3RlcHMtaG9yaXpvbnRhbDpub3QoLmFudC1zdGVwcy1sYWJlbC12ZXJ0aWNhbCkgLmFudC1zdGVwcy1pdGVtOmxhc3QtY2hpbGQgLmFudC1zdGVwcy1pdGVtLXRpdGxlIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7XFxufVxcbi5hbnQtc3RlcHMtaG9yaXpvbnRhbDpub3QoLmFudC1zdGVwcy1sYWJlbC12ZXJ0aWNhbCkgLmFudC1zdGVwcy1pdGVtLXRhaWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmFudC1zdGVwcy1ob3Jpem9udGFsOm5vdCguYW50LXN0ZXBzLWxhYmVsLXZlcnRpY2FsKSAuYW50LXN0ZXBzLWl0ZW0tZGVzY3JpcHRpb24ge1xcbiAgbWF4LXdpZHRoOiAxNDBweDtcXG59XFxuLmFudC1zdGVwcy1pdGVtLWN1c3RvbSAuYW50LXN0ZXBzLWl0ZW0taWNvbiB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiAwO1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbi5hbnQtc3RlcHMtaXRlbS1jdXN0b20gLmFudC1zdGVwcy1pdGVtLWljb24gPiAuYW50LXN0ZXBzLWljb24ge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDMycHg7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwLjVweDtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbn1cXG4uYW50LXN0ZXBzLWl0ZW0tY3VzdG9tLmFudC1zdGVwcy1pdGVtLXByb2Nlc3MgLmFudC1zdGVwcy1pdGVtLWljb24gPiAuYW50LXN0ZXBzLWljb24ge1xcbiAgY29sb3I6ICMxODkwZmY7XFxufVxcbi5hbnQtc3RlcHMtc21hbGwuYW50LXN0ZXBzLWhvcml6b250YWw6bm90KC5hbnQtc3RlcHMtbGFiZWwtdmVydGljYWwpIC5hbnQtc3RlcHMtaXRlbSB7XFxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XFxufVxcbi5hbnQtc3RlcHMtc21hbGwuYW50LXN0ZXBzLWhvcml6b250YWw6bm90KC5hbnQtc3RlcHMtbGFiZWwtdmVydGljYWwpIC5hbnQtc3RlcHMtaXRlbTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuLmFudC1zdGVwcy1zbWFsbCAuYW50LXN0ZXBzLWl0ZW0taWNvbiB7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLmFudC1zdGVwcy1zbWFsbCAuYW50LXN0ZXBzLWl0ZW0tdGl0bGUge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xcbn1cXG4uYW50LXN0ZXBzLXNtYWxsIC5hbnQtc3RlcHMtaXRlbS10aXRsZTphZnRlciB7XFxuICB0b3A6IDEycHg7XFxufVxcbi5hbnQtc3RlcHMtc21hbGwgLmFudC1zdGVwcy1pdGVtLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbn1cXG4uYW50LXN0ZXBzLXNtYWxsIC5hbnQtc3RlcHMtaXRlbS10YWlsIHtcXG4gIHRvcDogOHB4O1xcbiAgcGFkZGluZzogMCA4cHg7XFxufVxcbi5hbnQtc3RlcHMtc21hbGwgLmFudC1zdGVwcy1pdGVtLWN1c3RvbSAuYW50LXN0ZXBzLWl0ZW0taWNvbiB7XFxuICB3aWR0aDogaW5oZXJpdDtcXG4gIGhlaWdodDogaW5oZXJpdDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcbi5hbnQtc3RlcHMtc21hbGwgLmFudC1zdGVwcy1pdGVtLWN1c3RvbSAuYW50LXN0ZXBzLWl0ZW0taWNvbiA+IC5hbnQtc3RlcHMtaWNvbiB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06IG5vbmU7XFxuICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcXG59XFxuLmFudC1zdGVwcy12ZXJ0aWNhbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmFudC1zdGVwcy12ZXJ0aWNhbCAuYW50LXN0ZXBzLWl0ZW0ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuLmFudC1zdGVwcy12ZXJ0aWNhbCAuYW50LXN0ZXBzLWl0ZW0taWNvbiB7XFxuICBmbG9hdDogbGVmdDtcXG4gIG1hcmdpbi1yaWdodDogMTZweDtcXG59XFxuLmFudC1zdGVwcy12ZXJ0aWNhbCAuYW50LXN0ZXBzLWl0ZW0tY29udGVudCB7XFxuICBtaW4taGVpZ2h0OiA0OHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uYW50LXN0ZXBzLXZlcnRpY2FsIC5hbnQtc3RlcHMtaXRlbS10aXRsZSB7XFxuICBsaW5lLWhlaWdodDogMzJweDtcXG59XFxuLmFudC1zdGVwcy12ZXJ0aWNhbCAuYW50LXN0ZXBzLWl0ZW0tZGVzY3JpcHRpb24ge1xcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XFxufVxcbi5hbnQtc3RlcHMtdmVydGljYWwgPiAuYW50LXN0ZXBzLWl0ZW0gPiAuYW50LXN0ZXBzLWl0ZW0tdGFpbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxNnB4O1xcbiAgdG9wOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDFweDtcXG4gIHBhZGRpbmc6IDM4cHggMCA2cHg7XFxufVxcbi5hbnQtc3RlcHMtdmVydGljYWwgPiAuYW50LXN0ZXBzLWl0ZW0gPiAuYW50LXN0ZXBzLWl0ZW0tdGFpbDphZnRlciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMXB4O1xcbn1cXG4uYW50LXN0ZXBzLXZlcnRpY2FsID4gLmFudC1zdGVwcy1pdGVtOm5vdCg6bGFzdC1jaGlsZCkgPiAuYW50LXN0ZXBzLWl0ZW0tdGFpbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmFudC1zdGVwcy12ZXJ0aWNhbCA+IC5hbnQtc3RlcHMtaXRlbSA+IC5hbnQtc3RlcHMtaXRlbS1jb250ZW50ID4gLmFudC1zdGVwcy1pdGVtLXRpdGxlOmFmdGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5hbnQtc3RlcHMtdmVydGljYWwuYW50LXN0ZXBzLXNtYWxsIC5hbnQtc3RlcHMtaXRlbS10YWlsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDEycHg7XFxuICB0b3A6IDA7XFxuICBwYWRkaW5nOiAzMHB4IDAgNnB4O1xcbn1cXG4uYW50LXN0ZXBzLXZlcnRpY2FsLmFudC1zdGVwcy1zbWFsbCAuYW50LXN0ZXBzLWl0ZW0tdGl0bGUge1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgLmFudC1zdGVwcy1ob3Jpem9udGFsLmFudC1zdGVwcy1sYWJlbC1ob3Jpem9udGFsIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICAuYW50LXN0ZXBzLWhvcml6b250YWwuYW50LXN0ZXBzLWxhYmVsLWhvcml6b250YWwgLmFudC1zdGVwcy1pdGVtIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgfVxcbiAgLmFudC1zdGVwcy1ob3Jpem9udGFsLmFudC1zdGVwcy1sYWJlbC1ob3Jpem9udGFsIC5hbnQtc3RlcHMtaXRlbS1pY29uIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcXG4gIH1cXG4gIC5hbnQtc3RlcHMtaG9yaXpvbnRhbC5hbnQtc3RlcHMtbGFiZWwtaG9yaXpvbnRhbCAuYW50LXN0ZXBzLWl0ZW0tY29udGVudCB7XFxuICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgLmFudC1zdGVwcy1ob3Jpem9udGFsLmFudC1zdGVwcy1sYWJlbC1ob3Jpem9udGFsIC5hbnQtc3RlcHMtaXRlbS10aXRsZSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xcbiAgfVxcbiAgLmFudC1zdGVwcy1ob3Jpem9udGFsLmFudC1zdGVwcy1sYWJlbC1ob3Jpem9udGFsIC5hbnQtc3RlcHMtaXRlbS1kZXNjcmlwdGlvbiB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xcbiAgfVxcbiAgLmFudC1zdGVwcy1ob3Jpem9udGFsLmFudC1zdGVwcy1sYWJlbC1ob3Jpem9udGFsID4gLmFudC1zdGVwcy1pdGVtID4gLmFudC1zdGVwcy1pdGVtLXRhaWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDE2cHg7XFxuICAgIHRvcDogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMXB4O1xcbiAgICBwYWRkaW5nOiAzOHB4IDAgNnB4O1xcbiAgfVxcbiAgLmFudC1zdGVwcy1ob3Jpem9udGFsLmFudC1zdGVwcy1sYWJlbC1ob3Jpem9udGFsID4gLmFudC1zdGVwcy1pdGVtID4gLmFudC1zdGVwcy1pdGVtLXRhaWw6YWZ0ZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxcHg7XFxuICB9XFxuICAuYW50LXN0ZXBzLWhvcml6b250YWwuYW50LXN0ZXBzLWxhYmVsLWhvcml6b250YWwgPiAuYW50LXN0ZXBzLWl0ZW06bm90KDpsYXN0LWNoaWxkKSA+IC5hbnQtc3RlcHMtaXRlbS10YWlsIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICAuYW50LXN0ZXBzLWhvcml6b250YWwuYW50LXN0ZXBzLWxhYmVsLWhvcml6b250YWwgPiAuYW50LXN0ZXBzLWl0ZW0gPiAuYW50LXN0ZXBzLWl0ZW0tY29udGVudCA+IC5hbnQtc3RlcHMtaXRlbS10aXRsZTphZnRlciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuICAuYW50LXN0ZXBzLWhvcml6b250YWwuYW50LXN0ZXBzLWxhYmVsLWhvcml6b250YWwuYW50LXN0ZXBzLXNtYWxsIC5hbnQtc3RlcHMtaXRlbS10YWlsIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAxMnB4O1xcbiAgICB0b3A6IDA7XFxuICAgIHBhZGRpbmc6IDMwcHggMCA2cHg7XFxuICB9XFxuICAuYW50LXN0ZXBzLWhvcml6b250YWwuYW50LXN0ZXBzLWxhYmVsLWhvcml6b250YWwuYW50LXN0ZXBzLXNtYWxsIC5hbnQtc3RlcHMtaXRlbS10aXRsZSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgfVxcbn1cXG4uYW50LXN0ZXBzLWxhYmVsLXZlcnRpY2FsIC5hbnQtc3RlcHMtaXRlbSB7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuLmFudC1zdGVwcy1sYWJlbC12ZXJ0aWNhbCAuYW50LXN0ZXBzLWl0ZW0tdGFpbCB7XFxuICBwYWRkaW5nOiAwIDI0cHg7XFxuICBtYXJnaW4tbGVmdDogNDhweDtcXG59XFxuLmFudC1zdGVwcy1sYWJlbC12ZXJ0aWNhbCAuYW50LXN0ZXBzLWl0ZW0tY29udGVudCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG4gIHdpZHRoOiAxNDBweDtcXG59XFxuLmFudC1zdGVwcy1sYWJlbC12ZXJ0aWNhbCAuYW50LXN0ZXBzLWl0ZW0taWNvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogMzZweDtcXG59XFxuLmFudC1zdGVwcy1sYWJlbC12ZXJ0aWNhbCAuYW50LXN0ZXBzLWl0ZW0tdGl0bGUge1xcbiAgcGFkZGluZy1yaWdodDogMDtcXG59XFxuLmFudC1zdGVwcy1sYWJlbC12ZXJ0aWNhbCAuYW50LXN0ZXBzLWl0ZW0tdGl0bGU6YWZ0ZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmFudC1zdGVwcy1sYWJlbC12ZXJ0aWNhbCAuYW50LXN0ZXBzLWl0ZW0tZGVzY3JpcHRpb24ge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuLmFudC1zdGVwcy1kb3QgLmFudC1zdGVwcy1pdGVtLXRpdGxlIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcbi5hbnQtc3RlcHMtZG90IC5hbnQtc3RlcHMtaXRlbS10YWlsIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdG9wOiAycHg7XFxuICBtYXJnaW46IDAgMCAwIDcwcHg7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4uYW50LXN0ZXBzLWRvdCAuYW50LXN0ZXBzLWl0ZW0tdGFpbDphZnRlciB7XFxuICBoZWlnaHQ6IDNweDtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xcbn1cXG4uYW50LXN0ZXBzLWRvdCAuYW50LXN0ZXBzLWl0ZW06Zmlyc3QtY2hpbGQgLmFudC1zdGVwcy1pY29uLWRvdCB7XFxuICBsZWZ0OiAycHg7XFxufVxcbi5hbnQtc3RlcHMtZG90IC5hbnQtc3RlcHMtaXRlbS1pY29uIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7XFxuICB3aWR0aDogOHB4O1xcbiAgaGVpZ2h0OiA4cHg7XFxuICBsaW5lLWhlaWdodDogOHB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgbWFyZ2luLWxlZnQ6IDY3cHg7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuLmFudC1zdGVwcy1kb3QgLmFudC1zdGVwcy1pdGVtLWljb24gLmFudC1zdGVwcy1pY29uLWRvdCB7XFxuICBmbG9hdDogbGVmdDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3M7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xcbiAgLyogZXhwYW5kIGhvdmVyIGFyZWEgKi9cXG59XFxuLmFudC1zdGVwcy1kb3QgLmFudC1zdGVwcy1pdGVtLWljb24gLmFudC1zdGVwcy1pY29uLWRvdDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMDEpO1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xMnB4O1xcbiAgbGVmdDogLTI2cHg7XFxufVxcbi5hbnQtc3RlcHMtZG90IC5hbnQtc3RlcHMtaXRlbS1wcm9jZXNzIC5hbnQtc3RlcHMtaXRlbS1pY29uIHtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XFxufVxcbi5hbnQtc3RlcHMtZG90IC5hbnQtc3RlcHMtaXRlbS1wcm9jZXNzIC5hbnQtc3RlcHMtaXRlbS1pY29uIC5hbnQtc3RlcHMtaWNvbi1kb3Qge1xcbiAgdG9wOiAtMXB4O1xcbn1cXG4uYW50LXN0ZXBzLXZlcnRpY2FsLmFudC1zdGVwcy1kb3QgLmFudC1zdGVwcy1pdGVtLWljb24ge1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxufVxcbi5hbnQtc3RlcHMtdmVydGljYWwuYW50LXN0ZXBzLWRvdCAuYW50LXN0ZXBzLWl0ZW0tdGFpbCB7XFxuICBtYXJnaW46IDA7XFxuICBsZWZ0OiAtOXB4O1xcbiAgdG9wOiAycHg7XFxuICBwYWRkaW5nOiAyMnB4IDAgNHB4O1xcbn1cXG4uYW50LXN0ZXBzLXZlcnRpY2FsLmFudC1zdGVwcy1kb3QgLmFudC1zdGVwcy1pdGVtOmZpcnN0LWNoaWxkIC5hbnQtc3RlcHMtaWNvbi1kb3Qge1xcbiAgbGVmdDogMDtcXG59XFxuLmFudC1zdGVwcy12ZXJ0aWNhbC5hbnQtc3RlcHMtZG90IC5hbnQtc3RlcHMtaXRlbS1wcm9jZXNzIC5hbnQtc3RlcHMtaWNvbi1kb3Qge1xcbiAgbGVmdDogLTJweDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIG5vdyA9IHJlcXVpcmUoJy4vbm93JyksXG4gICAgdG9OdW1iZXIgPSByZXF1aXJlKCcuL3RvTnVtYmVyJyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGVsYXlzIGludm9raW5nIGBmdW5jYCB1bnRpbCBhZnRlciBgd2FpdGBcbiAqIG1pbGxpc2Vjb25kcyBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHdhc1xuICogaW52b2tlZC4gVGhlIGRlYm91bmNlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGAgbWV0aG9kIHRvIGNhbmNlbFxuICogZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG8gaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uXG4gKiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYCBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGVcbiAqIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YCB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWRcbiAqIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnRcbiAqIGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgXG4gKiBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVib3VuY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4V2FpdF1cbiAqICBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0J3MgaW52b2tlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBjb3N0bHkgY2FsY3VsYXRpb25zIHdoaWxlIHRoZSB3aW5kb3cgc2l6ZSBpcyBpbiBmbHV4LlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHNlbmRNYWlsYCB3aGVuIGNsaWNrZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxscy5cbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBfLmRlYm91bmNlKHNlbmRNYWlsLCAzMDAsIHtcbiAqICAgJ2xlYWRpbmcnOiB0cnVlLFxuICogICAndHJhaWxpbmcnOiBmYWxzZVxuICogfSkpO1xuICpcbiAqIC8vIEVuc3VyZSBgYmF0Y2hMb2dgIGlzIGludm9rZWQgb25jZSBhZnRlciAxIHNlY29uZCBvZiBkZWJvdW5jZWQgY2FsbHMuXG4gKiB2YXIgZGVib3VuY2VkID0gXy5kZWJvdW5jZShiYXRjaExvZywgMjUwLCB7ICdtYXhXYWl0JzogMTAwMCB9KTtcbiAqIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoJy9zdHJlYW0nKTtcbiAqIGpRdWVyeShzb3VyY2UpLm9uKCdtZXNzYWdlJywgZGVib3VuY2VkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIGRlYm91bmNlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgZGVib3VuY2VkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxhc3RBcmdzLFxuICAgICAgbGFzdFRoaXMsXG4gICAgICBtYXhXYWl0LFxuICAgICAgcmVzdWx0LFxuICAgICAgdGltZXJJZCxcbiAgICAgIGxhc3RDYWxsVGltZSxcbiAgICAgIGxhc3RJbnZva2VUaW1lID0gMCxcbiAgICAgIGxlYWRpbmcgPSBmYWxzZSxcbiAgICAgIG1heGluZyA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHdhaXQgPSB0b051bWJlcih3YWl0KSB8fCAwO1xuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4aW5nID0gJ21heFdhaXQnIGluIG9wdGlvbnM7XG4gICAgbWF4V2FpdCA9IG1heGluZyA/IG5hdGl2ZU1heCh0b051bWJlcihvcHRpb25zLm1heFdhaXQpIHx8IDAsIHdhaXQpIDogbWF4V2FpdDtcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlRnVuYyh0aW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBsYXN0QXJncyxcbiAgICAgICAgdGhpc0FyZyA9IGxhc3RUaGlzO1xuXG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gbGVhZGluZ0VkZ2UodGltZSkge1xuICAgIC8vIFJlc2V0IGFueSBgbWF4V2FpdGAgdGltZXIuXG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIC8vIFN0YXJ0IHRoZSB0aW1lciBmb3IgdGhlIHRyYWlsaW5nIGVkZ2UuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAvLyBJbnZva2UgdGhlIGxlYWRpbmcgZWRnZS5cbiAgICByZXR1cm4gbGVhZGluZyA/IGludm9rZUZ1bmModGltZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW1haW5pbmdXYWl0KHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lLFxuICAgICAgICB0aW1lV2FpdGluZyA9IHdhaXQgLSB0aW1lU2luY2VMYXN0Q2FsbDtcblxuICAgIHJldHVybiBtYXhpbmdcbiAgICAgID8gbmF0aXZlTWluKHRpbWVXYWl0aW5nLCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSlcbiAgICAgIDogdGltZVdhaXRpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuICAgIHJldHVybiAobGFzdENhbGxUaW1lID09PSB1bmRlZmluZWQgfHwgKHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQpIHx8XG4gICAgICAodGltZVNpbmNlTGFzdENhbGwgPCAwKSB8fCAobWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgaWYgKHNob3VsZEludm9rZSh0aW1lKSkge1xuICAgICAgcmV0dXJuIHRyYWlsaW5nRWRnZSh0aW1lKTtcbiAgICB9XG4gICAgLy8gUmVzdGFydCB0aGUgdGltZXIuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLFxuICAgICAgICBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuXG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgLy8gSGFuZGxlIGludm9jYXRpb25zIGluIGEgdGlnaHQgbG9vcC5cbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAgICAgcmV0dXJuIGludm9rZUZ1bmMobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICBkZWJvdW5jZWQuZmx1c2ggPSBmbHVzaDtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWJvdW5jZTtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKipcbiAqIEdldHMgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGhhdmUgZWxhcHNlZCBzaW5jZVxuICogdGhlIFVuaXggZXBvY2ggKDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IERhdGVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHRpbWVzdGFtcC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZlcihmdW5jdGlvbihzdGFtcCkge1xuICogICBjb25zb2xlLmxvZyhfLm5vdygpIC0gc3RhbXApO1xuICogfSwgXy5ub3coKSk7XG4gKiAvLyA9PiBMb2dzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRvb2sgZm9yIHRoZSBkZWZlcnJlZCBpbnZvY2F0aW9uLlxuICovXG52YXIgbm93ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByb290LkRhdGUubm93KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vdztcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltID0gL15cXHMrfFxccyskL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVUcmltLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvTnVtYmVyO1xuIiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJztcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5mdW5jdGlvbiBpc1N0cmluZyhzdHIpIHtcbiAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnO1xufVxuXG52YXIgU3RlcCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhTdGVwLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTdGVwKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdGVwKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoU3RlcC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFN0ZXApKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTdGVwLCBbe1xuICAgIGtleTogJ3JlbmRlckljb25Ob2RlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVySWNvbk5vZGUoKSB7XG4gICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHByZWZpeENscyA9IF9wcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgcHJvZ3Jlc3NEb3QgPSBfcHJvcHMucHJvZ3Jlc3NEb3QsXG4gICAgICAgICAgc3RlcE51bWJlciA9IF9wcm9wcy5zdGVwTnVtYmVyLFxuICAgICAgICAgIHN0YXR1cyA9IF9wcm9wcy5zdGF0dXMsXG4gICAgICAgICAgdGl0bGUgPSBfcHJvcHMudGl0bGUsXG4gICAgICAgICAgZGVzY3JpcHRpb24gPSBfcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgaWNvbiA9IF9wcm9wcy5pY29uLFxuICAgICAgICAgIGljb25QcmVmaXggPSBfcHJvcHMuaWNvblByZWZpeDtcblxuICAgICAgdmFyIGljb25Ob2RlID0gdm9pZCAwO1xuICAgICAgdmFyIGljb25DbGFzc05hbWUgPSBjbGFzc05hbWVzKHByZWZpeENscyArICctaWNvbicsIGljb25QcmVmaXggKyAnaWNvbicsIChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIGljb25QcmVmaXggKyAnaWNvbi0nICsgaWNvbiwgaWNvbiAmJiBpc1N0cmluZyhpY29uKSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgaWNvblByZWZpeCArICdpY29uLWNoZWNrJywgIWljb24gJiYgc3RhdHVzID09PSAnZmluaXNoJyksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgaWNvblByZWZpeCArICdpY29uLWNyb3NzJywgIWljb24gJiYgc3RhdHVzID09PSAnZXJyb3InKSwgX2NsYXNzTmFtZXMpKTtcbiAgICAgIHZhciBpY29uRG90ID0gUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWljb24tZG90JyB9KTtcbiAgICAgIC8vIGBwcm9ncmVzc0RvdGAgZW5qb3kgdGhlIGhpZ2hlc3QgcHJpb3JpdHlcbiAgICAgIGlmIChwcm9ncmVzc0RvdCkge1xuICAgICAgICBpZiAodHlwZW9mIHByb2dyZXNzRG90ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgaWNvbk5vZGUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctaWNvbicgfSxcbiAgICAgICAgICAgIHByb2dyZXNzRG90KGljb25Eb3QsIHsgaW5kZXg6IHN0ZXBOdW1iZXIgLSAxLCBzdGF0dXM6IHN0YXR1cywgdGl0bGU6IHRpdGxlLCBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24gfSlcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGljb25Ob2RlID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWljb24nIH0sXG4gICAgICAgICAgICBpY29uRG90XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpY29uICYmICFpc1N0cmluZyhpY29uKSkge1xuICAgICAgICBpY29uTm9kZSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWljb24nIH0sXG4gICAgICAgICAgaWNvblxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChpY29uIHx8IHN0YXR1cyA9PT0gJ2ZpbmlzaCcgfHwgc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgICAgIGljb25Ob2RlID0gUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiBpY29uQ2xhc3NOYW1lIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWNvbk5vZGUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1pY29uJyB9LFxuICAgICAgICAgIHN0ZXBOdW1iZXJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpY29uTm9kZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzMi5jbGFzc05hbWUsXG4gICAgICAgICAgcHJlZml4Q2xzID0gX3Byb3BzMi5wcmVmaXhDbHMsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMyLnN0eWxlLFxuICAgICAgICAgIGl0ZW1XaWR0aCA9IF9wcm9wczIuaXRlbVdpZHRoLFxuICAgICAgICAgIF9wcm9wczIkc3RhdHVzID0gX3Byb3BzMi5zdGF0dXMsXG4gICAgICAgICAgc3RhdHVzID0gX3Byb3BzMiRzdGF0dXMgPT09IHVuZGVmaW5lZCA/ICd3YWl0JyA6IF9wcm9wczIkc3RhdHVzLFxuICAgICAgICAgIGljb25QcmVmaXggPSBfcHJvcHMyLmljb25QcmVmaXgsXG4gICAgICAgICAgaWNvbiA9IF9wcm9wczIuaWNvbixcbiAgICAgICAgICB3cmFwcGVyU3R5bGUgPSBfcHJvcHMyLndyYXBwZXJTdHlsZSxcbiAgICAgICAgICBhZGp1c3RNYXJnaW5SaWdodCA9IF9wcm9wczIuYWRqdXN0TWFyZ2luUmlnaHQsXG4gICAgICAgICAgc3RlcE51bWJlciA9IF9wcm9wczIuc3RlcE51bWJlcixcbiAgICAgICAgICBkZXNjcmlwdGlvbiA9IF9wcm9wczIuZGVzY3JpcHRpb24sXG4gICAgICAgICAgdGl0bGUgPSBfcHJvcHMyLnRpdGxlLFxuICAgICAgICAgIHByb2dyZXNzRG90ID0gX3Byb3BzMi5wcm9ncmVzc0RvdCxcbiAgICAgICAgICB0YWlsQ29udGVudCA9IF9wcm9wczIudGFpbENvbnRlbnQsXG4gICAgICAgICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wczIsIFsnY2xhc3NOYW1lJywgJ3ByZWZpeENscycsICdzdHlsZScsICdpdGVtV2lkdGgnLCAnc3RhdHVzJywgJ2ljb25QcmVmaXgnLCAnaWNvbicsICd3cmFwcGVyU3R5bGUnLCAnYWRqdXN0TWFyZ2luUmlnaHQnLCAnc3RlcE51bWJlcicsICdkZXNjcmlwdGlvbicsICd0aXRsZScsICdwcm9ncmVzc0RvdCcsICd0YWlsQ29udGVudCddKTtcblxuICAgICAgdmFyIGNsYXNzU3RyaW5nID0gY2xhc3NOYW1lcyhwcmVmaXhDbHMgKyAnLWl0ZW0nLCBwcmVmaXhDbHMgKyAnLWl0ZW0tJyArIHN0YXR1cywgY2xhc3NOYW1lLCBfZGVmaW5lUHJvcGVydHkoe30sIHByZWZpeENscyArICctaXRlbS1jdXN0b20nLCBpY29uKSk7XG4gICAgICB2YXIgc3RlcEl0ZW1TdHlsZSA9IF9leHRlbmRzKHt9LCBzdHlsZSk7XG4gICAgICBpZiAoaXRlbVdpZHRoKSB7XG4gICAgICAgIHN0ZXBJdGVtU3R5bGUud2lkdGggPSBpdGVtV2lkdGg7XG4gICAgICB9XG4gICAgICBpZiAoYWRqdXN0TWFyZ2luUmlnaHQpIHtcbiAgICAgICAgc3RlcEl0ZW1TdHlsZS5tYXJnaW5SaWdodCA9IGFkanVzdE1hcmdpblJpZ2h0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBfZXh0ZW5kcyh7fSwgcmVzdFByb3BzLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc1N0cmluZyxcbiAgICAgICAgICBzdHlsZTogc3RlcEl0ZW1TdHlsZVxuICAgICAgICB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1pdGVtLXRhaWwnIH0sXG4gICAgICAgICAgdGFpbENvbnRlbnRcbiAgICAgICAgKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1pdGVtLWljb24nIH0sXG4gICAgICAgICAgdGhpcy5yZW5kZXJJY29uTm9kZSgpXG4gICAgICAgICksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctaXRlbS1jb250ZW50JyB9LFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWl0ZW0tdGl0bGUnIH0sXG4gICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICksXG4gICAgICAgICAgZGVzY3JpcHRpb24gJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctaXRlbS1kZXNjcmlwdGlvbicgfSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTdGVwO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5TdGVwLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICB3cmFwcGVyU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIGl0ZW1XaWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBzdGF0dXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb25QcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb246IFByb3BUeXBlcy5ub2RlLFxuICBhZGp1c3RNYXJnaW5SaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBzdGVwTnVtYmVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLmFueSxcbiAgdGl0bGU6IFByb3BUeXBlcy5hbnksXG4gIHByb2dyZXNzRG90OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgdGFpbENvbnRlbnQ6IFByb3BUeXBlcy5hbnlcbn07XG5leHBvcnQgZGVmYXVsdCBTdGVwOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuLyogZXNsaW50IHJlYWN0L25vLWRpZC1tb3VudC1zZXQtc3RhdGU6IDAgKi9cbmltcG9ydCBSZWFjdCwgeyBjbG9uZUVsZW1lbnQsIENoaWxkcmVuLCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgZmluZERPTU5vZGUgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoL2RlYm91bmNlJztcbmltcG9ydCB7IGlzRmxleFN1cHBvcnRlZCB9IGZyb20gJy4vdXRpbHMnO1xuXG52YXIgU3RlcHMgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoU3RlcHMsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFN0ZXBzKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFN0ZXBzKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChTdGVwcy5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFN0ZXBzKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMuY2FsY1N0ZXBPZmZzZXRXaWR0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpc0ZsZXhTdXBwb3J0ZWQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBKdXN0IGZvciBJRTlcbiAgICAgIHZhciBkb21Ob2RlID0gZmluZERPTU5vZGUoX3RoaXMpO1xuICAgICAgaWYgKGRvbU5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoX3RoaXMuY2FsY1RpbWVvdXQpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXMuY2FsY1RpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLmNhbGNUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gKzEgZm9yIGZpdCBlZGdlIGJ1ZyBvZiBkaWdpdCB3aWR0aCwgbGlrZSAzNS40cHhcbiAgICAgICAgICB2YXIgbGFzdFN0ZXBPZmZzZXRXaWR0aCA9IChkb21Ob2RlLmxhc3RDaGlsZC5vZmZzZXRXaWR0aCB8fCAwKSArIDE7XG4gICAgICAgICAgLy8gUmVkdWNlIHNoYWtlIGJ1Z1xuICAgICAgICAgIGlmIChfdGhpcy5zdGF0ZS5sYXN0U3RlcE9mZnNldFdpZHRoID09PSBsYXN0U3RlcE9mZnNldFdpZHRoIHx8IE1hdGguYWJzKF90aGlzLnN0YXRlLmxhc3RTdGVwT2Zmc2V0V2lkdGggLSBsYXN0U3RlcE9mZnNldFdpZHRoKSA8PSAzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgbGFzdFN0ZXBPZmZzZXRXaWR0aDogbGFzdFN0ZXBPZmZzZXRXaWR0aCB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgZmxleFN1cHBvcnRlZDogdHJ1ZSxcbiAgICAgIGxhc3RTdGVwT2Zmc2V0V2lkdGg6IDBcbiAgICB9O1xuICAgIF90aGlzLmNhbGNTdGVwT2Zmc2V0V2lkdGggPSBkZWJvdW5jZShfdGhpcy5jYWxjU3RlcE9mZnNldFdpZHRoLCAxNTApO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTdGVwcywgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5jYWxjU3RlcE9mZnNldFdpZHRoKCk7XG4gICAgICBpZiAoIWlzRmxleFN1cHBvcnRlZCgpKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGZsZXhTdXBwb3J0ZWQ6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgIHRoaXMuY2FsY1N0ZXBPZmZzZXRXaWR0aCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5jYWxjVGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5jYWxjVGltZW91dCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jYWxjU3RlcE9mZnNldFdpZHRoICYmIHRoaXMuY2FsY1N0ZXBPZmZzZXRXaWR0aC5jYW5jZWwpIHtcbiAgICAgICAgdGhpcy5jYWxjU3RlcE9mZnNldFdpZHRoLmNhbmNlbCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgcHJlZml4Q2xzID0gX3Byb3BzLnByZWZpeENscyxcbiAgICAgICAgICBfcHJvcHMkc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMkc3R5bGUgPT09IHVuZGVmaW5lZCA/IHt9IDogX3Byb3BzJHN0eWxlLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgZGlyZWN0aW9uID0gX3Byb3BzLmRpcmVjdGlvbixcbiAgICAgICAgICBsYWJlbFBsYWNlbWVudCA9IF9wcm9wcy5sYWJlbFBsYWNlbWVudCxcbiAgICAgICAgICBpY29uUHJlZml4ID0gX3Byb3BzLmljb25QcmVmaXgsXG4gICAgICAgICAgc3RhdHVzID0gX3Byb3BzLnN0YXR1cyxcbiAgICAgICAgICBzaXplID0gX3Byb3BzLnNpemUsXG4gICAgICAgICAgY3VycmVudCA9IF9wcm9wcy5jdXJyZW50LFxuICAgICAgICAgIHByb2dyZXNzRG90ID0gX3Byb3BzLnByb2dyZXNzRG90LFxuICAgICAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsncHJlZml4Q2xzJywgJ3N0eWxlJywgJ2NsYXNzTmFtZScsICdjaGlsZHJlbicsICdkaXJlY3Rpb24nLCAnbGFiZWxQbGFjZW1lbnQnLCAnaWNvblByZWZpeCcsICdzdGF0dXMnLCAnc2l6ZScsICdjdXJyZW50JywgJ3Byb2dyZXNzRG90J10pO1xuXG4gICAgICB2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBsYXN0U3RlcE9mZnNldFdpZHRoID0gX3N0YXRlLmxhc3RTdGVwT2Zmc2V0V2lkdGgsXG4gICAgICAgICAgZmxleFN1cHBvcnRlZCA9IF9zdGF0ZS5mbGV4U3VwcG9ydGVkO1xuXG4gICAgICB2YXIgZmlsdGVyZWRDaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pLmZpbHRlcihmdW5jdGlvbiAoYykge1xuICAgICAgICByZXR1cm4gISFjO1xuICAgICAgfSk7XG4gICAgICB2YXIgbGFzdEluZGV4ID0gZmlsdGVyZWRDaGlsZHJlbi5sZW5ndGggLSAxO1xuICAgICAgdmFyIGFkanVzdGVkbGFiZWxQbGFjZW1lbnQgPSAhIXByb2dyZXNzRG90ID8gJ3ZlcnRpY2FsJyA6IGxhYmVsUGxhY2VtZW50O1xuICAgICAgdmFyIGNsYXNzU3RyaW5nID0gY2xhc3NOYW1lcyhwcmVmaXhDbHMsIHByZWZpeENscyArICctJyArIGRpcmVjdGlvbiwgY2xhc3NOYW1lLCAoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLScgKyBzaXplLCBzaXplKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLWxhYmVsLScgKyBhZGp1c3RlZGxhYmVsUGxhY2VtZW50LCBkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy1kb3QnLCAhIXByb2dyZXNzRG90KSwgX2NsYXNzTmFtZXMpKTtcblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBfZXh0ZW5kcyh7IGNsYXNzTmFtZTogY2xhc3NTdHJpbmcsIHN0eWxlOiBzdHlsZSB9LCByZXN0UHJvcHMpLFxuICAgICAgICBDaGlsZHJlbi5tYXAoZmlsdGVyZWRDaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkLCBpbmRleCkge1xuICAgICAgICAgIGlmICghY2hpbGQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgY2hpbGRQcm9wcyA9IF9leHRlbmRzKHtcbiAgICAgICAgICAgIHN0ZXBOdW1iZXI6ICcnICsgKGluZGV4ICsgMSksXG4gICAgICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgICAgIGljb25QcmVmaXg6IGljb25QcmVmaXgsXG4gICAgICAgICAgICB3cmFwcGVyU3R5bGU6IHN0eWxlLFxuICAgICAgICAgICAgcHJvZ3Jlc3NEb3Q6IHByb2dyZXNzRG90XG4gICAgICAgICAgfSwgY2hpbGQucHJvcHMpO1xuICAgICAgICAgIGlmICghZmxleFN1cHBvcnRlZCAmJiBkaXJlY3Rpb24gIT09ICd2ZXJ0aWNhbCcgJiYgaW5kZXggIT09IGxhc3RJbmRleCkge1xuICAgICAgICAgICAgY2hpbGRQcm9wcy5pdGVtV2lkdGggPSAxMDAgLyBsYXN0SW5kZXggKyAnJSc7XG4gICAgICAgICAgICBjaGlsZFByb3BzLmFkanVzdE1hcmdpblJpZ2h0ID0gLU1hdGgucm91bmQobGFzdFN0ZXBPZmZzZXRXaWR0aCAvIGxhc3RJbmRleCArIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBmaXggdGFpbCBjb2xvclxuICAgICAgICAgIGlmIChzdGF0dXMgPT09ICdlcnJvcicgJiYgaW5kZXggPT09IGN1cnJlbnQgLSAxKSB7XG4gICAgICAgICAgICBjaGlsZFByb3BzLmNsYXNzTmFtZSA9IHByZWZpeENscyArICctbmV4dC1lcnJvcic7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghY2hpbGQucHJvcHMuc3RhdHVzKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IGN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgY2hpbGRQcm9wcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4IDwgY3VycmVudCkge1xuICAgICAgICAgICAgICBjaGlsZFByb3BzLnN0YXR1cyA9ICdmaW5pc2gnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2hpbGRQcm9wcy5zdGF0dXMgPSAnd2FpdCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3RlcHM7XG59KENvbXBvbmVudCk7XG5cblN0ZXBzLnByb3BUeXBlcyA9IHtcbiAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGljb25QcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRpcmVjdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWxQbGFjZW1lbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICBzdGF0dXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNpemU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHByb2dyZXNzRG90OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIGN1cnJlbnQ6IFByb3BUeXBlcy5udW1iZXJcbn07XG5TdGVwcy5kZWZhdWx0UHJvcHMgPSB7XG4gIHByZWZpeENsczogJ3JjLXN0ZXBzJyxcbiAgaWNvblByZWZpeDogJ3JjJyxcbiAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gIGxhYmVsUGxhY2VtZW50OiAnaG9yaXpvbnRhbCcsXG4gIGN1cnJlbnQ6IDAsXG4gIHN0YXR1czogJ3Byb2Nlc3MnLFxuICBzaXplOiAnJyxcbiAgcHJvZ3Jlc3NEb3Q6IGZhbHNlXG59O1xuZXhwb3J0IGRlZmF1bHQgU3RlcHM7IiwiaW1wb3J0IFN0ZXBzIGZyb20gJy4vU3RlcHMnO1xuaW1wb3J0IFN0ZXAgZnJvbSAnLi9TdGVwJztcblxuU3RlcHMuU3RlcCA9IFN0ZXA7XG5cbmV4cG9ydCB7IFN0ZXAgfTtcbmV4cG9ydCBkZWZhdWx0IFN0ZXBzOyIsImV4cG9ydCBmdW5jdGlvbiBpc0ZsZXhTdXBwb3J0ZWQoKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuICAgIHZhciBkb2N1bWVudEVsZW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgcmV0dXJuICdmbGV4JyBpbiBkb2N1bWVudEVsZW1lbnQuc3R5bGUgfHwgJ3dlYmtpdEZsZXgnIGluIGRvY3VtZW50RWxlbWVudC5zdHlsZSB8fCAnRmxleCcgaW4gZG9jdW1lbnRFbGVtZW50LnN0eWxlIHx8ICdtc0ZsZXgnIGluIGRvY3VtZW50RWxlbWVudC5zdHlsZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==