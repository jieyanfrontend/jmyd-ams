(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "../node_modules/antd/es/_util/isFlexSupported.js":
/*!********************************************************!*\
  !*** ../node_modules/antd/es/_util/isFlexSupported.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isFlexSupported; });
function isFlexSupported() {
    if (typeof window !== 'undefined' && window.document && window.document.documentElement) {
        var documentElement = window.document.documentElement;

        return 'flex' in documentElement.style || 'webkitFlex' in documentElement.style || 'Flex' in documentElement.style || 'msFlex' in documentElement.style;
    }
    return false;
}

/***/ }),

/***/ "../node_modules/antd/es/_util/throttleByAnimationFrame.js":
/*!*****************************************************************!*\
  !*** ../node_modules/antd/es/_util/throttleByAnimationFrame.js ***!
  \*****************************************************************/
/*! exports provided: default, throttleByAnimationFrameDecorator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return throttleByAnimationFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttleByAnimationFrameDecorator", function() { return throttleByAnimationFrameDecorator; });
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "../node_modules/babel-runtime/helpers/toConsumableArray.js");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_getRequestAnimationFrame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_util/getRequestAnimationFrame */ "../node_modules/antd/es/_util/getRequestAnimationFrame.js");


var reqAnimFrame = Object(_util_getRequestAnimationFrame__WEBPACK_IMPORTED_MODULE_1__["default"])();
function throttleByAnimationFrame(fn) {
    var requestId = void 0;
    var later = function later(args) {
        return function () {
            requestId = null;
            fn.apply(undefined, babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(args));
        };
    };
    var throttled = function throttled() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        if (requestId == null) {
            requestId = reqAnimFrame(later(args));
        }
    };
    throttled.cancel = function () {
        return Object(_util_getRequestAnimationFrame__WEBPACK_IMPORTED_MODULE_1__["cancelRequestAnimationFrame"])(requestId);
    };
    return throttled;
}
function throttleByAnimationFrameDecorator() {
    return function (target, key, descriptor) {
        var fn = descriptor.value;
        var definingProperty = false;
        return {
            configurable: true,
            get: function get() {
                if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {
                    return fn;
                }
                var boundFn = throttleByAnimationFrame(fn.bind(this));
                definingProperty = true;
                Object.defineProperty(this, key, {
                    value: boundFn,
                    configurable: true,
                    writable: true
                });
                definingProperty = false;
                return boundFn;
            }
        };
    };
}

/***/ }),

/***/ "../node_modules/antd/es/alert/index.js":
/*!**********************************************!*\
  !*** ../node_modules/antd/es/alert/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rc_animate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-animate */ "../node_modules/rc-animate/es/Animate.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icon */ "../node_modules/antd/es/icon/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);










function noop() {}

var Alert = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Alert, _React$Component);

    function Alert(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Alert);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).call(this, props));

        _this.handleClose = function (e) {
            e.preventDefault();
            var dom = react_dom__WEBPACK_IMPORTED_MODULE_6__["findDOMNode"](_this);
            dom.style.height = dom.offsetHeight + 'px';
            // Magic code
            // 重复一次后才能正确设置 height
            dom.style.height = dom.offsetHeight + 'px';
            _this.setState({
                closing: false
            });
            (_this.props.onClose || noop)(e);
        };
        _this.animationEnd = function () {
            _this.setState({
                closed: true,
                closing: true
            });
            (_this.props.afterClose || noop)();
        };
        _this.state = {
            closing: true,
            closed: false
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Alert, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props,
                closable = _props.closable,
                description = _props.description,
                type = _props.type,
                _props$prefixCls = _props.prefixCls,
                prefixCls = _props$prefixCls === undefined ? 'ant-alert' : _props$prefixCls,
                message = _props.message,
                closeText = _props.closeText,
                showIcon = _props.showIcon,
                banner = _props.banner,
                _props$className = _props.className,
                className = _props$className === undefined ? '' : _props$className,
                style = _props.style,
                iconType = _props.iconType;
            // banner模式默认有 Icon

            showIcon = banner && showIcon === undefined ? true : showIcon;
            // banner模式默认为警告
            type = banner && type === undefined ? 'warning' : type || 'info';
            if (!iconType) {
                switch (type) {
                    case 'success':
                        iconType = 'check-circle';
                        break;
                    case 'info':
                        iconType = 'info-circle';
                        break;
                    case 'error':
                        iconType = 'cross-circle';
                        break;
                    case 'warning':
                        iconType = 'exclamation-circle';
                        break;
                    default:
                        iconType = 'default';
                }
                // use outline icon in alert with description
                if (!!description) {
                    iconType += '-o';
                }
            }
            var alertCls = classnames__WEBPACK_IMPORTED_MODULE_9___default()(prefixCls, (_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-' + type, true), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-close', !this.state.closing), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-with-description', !!description), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-no-icon', !showIcon), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-banner', !!banner), _classNames), className);
            // closeable when closeText is assigned
            if (closeText) {
                closable = true;
            }
            var closeIcon = closable ? react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                'a',
                { onClick: this.handleClose, className: prefixCls + '-close-icon' },
                closeText || react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_8__["default"], { type: 'cross' })
            ) : null;
            return this.state.closed ? null : react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                rc_animate__WEBPACK_IMPORTED_MODULE_7__["default"],
                { component: '', showProp: 'data-show', transitionName: prefixCls + '-slide-up', onEnd: this.animationEnd },
                react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                    'div',
                    { 'data-show': this.state.closing, className: alertCls, style: style },
                    showIcon ? react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_8__["default"], { className: prefixCls + '-icon', type: iconType }) : null,
                    react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                        'span',
                        { className: prefixCls + '-message' },
                        message
                    ),
                    react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                        'span',
                        { className: prefixCls + '-description' },
                        description
                    ),
                    closeIcon
                )
            );
        }
    }]);

    return Alert;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Alert);

/***/ }),

/***/ "../node_modules/antd/es/alert/style/css.js":
/*!**************************************************!*\
  !*** ../node_modules/antd/es/alert/style/css.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../node_modules/antd/es/alert/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "../node_modules/antd/es/alert/style/index.css":
/*!*****************************************************!*\
  !*** ../node_modules/antd/es/alert/style/index.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/alert/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/alert/style/index.css", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
		var newContent = __webpack_require__(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/alert/style/index.css");

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

/***/ "../node_modules/antd/es/card/Grid.js":
/*!********************************************!*\
  !*** ../node_modules/antd/es/card/Grid.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
    var _props$prefixCls = props.prefixCls,
        prefixCls = _props$prefixCls === undefined ? 'ant-card' : _props$prefixCls,
        className = props.className,
        others = __rest(props, ["prefixCls", "className"]);

    var classString = classnames__WEBPACK_IMPORTED_MODULE_2___default()(prefixCls + '-grid', className);
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]('div', babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, others, { className: classString }));
});

/***/ }),

/***/ "../node_modules/antd/es/card/Meta.js":
/*!********************************************!*\
  !*** ../node_modules/antd/es/card/Meta.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
    var _props$prefixCls = props.prefixCls,
        prefixCls = _props$prefixCls === undefined ? 'ant-card' : _props$prefixCls,
        className = props.className,
        avatar = props.avatar,
        title = props.title,
        description = props.description,
        others = __rest(props, ["prefixCls", "className", "avatar", "title", "description"]);

    var classString = classnames__WEBPACK_IMPORTED_MODULE_2___default()(prefixCls + '-meta', className);
    var avatarDom = avatar ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
        'div',
        { className: prefixCls + '-meta-avatar' },
        avatar
    ) : null;
    var titleDom = title ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
        'div',
        { className: prefixCls + '-meta-title' },
        title
    ) : null;
    var descriptionDom = description ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
        'div',
        { className: prefixCls + '-meta-description' },
        description
    ) : null;
    var MetaDetail = titleDom || descriptionDom ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
        'div',
        { className: prefixCls + '-meta-detail' },
        titleDom,
        descriptionDom
    ) : null;
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
        'div',
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, others, { className: classString }),
        avatarDom,
        MetaDetail
    );
});

/***/ }),

/***/ "../node_modules/antd/es/card/index.js":
/*!*********************************************!*\
  !*** ../node_modules/antd/es/card/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babel-runtime/helpers/typeof */ "../node_modules/babel-runtime/helpers/typeof.js");
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-util/es/Dom/addEventListener */ "../node_modules/rc-util/es/Dom/addEventListener.js");
/* harmony import */ var omit_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! omit.js */ "../node_modules/omit.js/es/index.js");
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Grid */ "../node_modules/antd/es/card/Grid.js");
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Meta */ "../node_modules/antd/es/card/Meta.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../tabs */ "../node_modules/antd/es/tabs/index.js");
/* harmony import */ var _util_throttleByAnimationFrame__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../_util/throttleByAnimationFrame */ "../node_modules/antd/es/_util/throttleByAnimationFrame.js");
/* harmony import */ var _util_warning__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../_util/warning */ "../node_modules/antd/es/_util/warning.js");







var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_6___default()(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};










var Card = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Card, _React$Component);

    function Card() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Card);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));

        _this.state = {
            widerPadding: false
        };
        _this.onTabChange = function (key) {
            if (_this.props.onTabChange) {
                _this.props.onTabChange(key);
            }
        };
        _this.saveRef = function (node) {
            _this.container = node;
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Card, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.updateWiderPadding();
            this.resizeEvent = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_9__["default"])(window, 'resize', this.updateWiderPadding);
            if ('noHovering' in this.props) {
                Object(_util_warning__WEBPACK_IMPORTED_MODULE_15__["default"])(!this.props.noHovering, '`noHovering` of Card is deperated, you can remove it safely or use `hoverable` instead.');
                Object(_util_warning__WEBPACK_IMPORTED_MODULE_15__["default"])(!!this.props.noHovering, '`noHovering={false}` of Card is deperated, use `hoverable` instead.');
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            if (this.resizeEvent) {
                this.resizeEvent.remove();
            }
            this.updateWiderPadding.cancel();
        }
    }, {
        key: "updateWiderPadding",
        value: function updateWiderPadding() {
            var _this2 = this;

            if (!this.container) {
                return;
            }
            // 936 is a magic card width pixer number indicated by designer
            var WIDTH_BOUDARY_PX = 936;
            if (this.container.offsetWidth >= WIDTH_BOUDARY_PX && !this.state.widerPadding) {
                this.setState({ widerPadding: true }, function () {
                    _this2.updateWiderPaddingCalled = true; // first render without css transition
                });
            }
            if (this.container.offsetWidth < WIDTH_BOUDARY_PX && this.state.widerPadding) {
                this.setState({ widerPadding: false }, function () {
                    _this2.updateWiderPaddingCalled = true; // first render without css transition
                });
            }
        }
    }, {
        key: "isContainGrid",
        value: function isContainGrid() {
            var containGrid = void 0;
            react__WEBPACK_IMPORTED_MODULE_7__["Children"].forEach(this.props.children, function (element) {
                if (element && element.type && element.type === _Grid__WEBPACK_IMPORTED_MODULE_11__["default"]) {
                    containGrid = true;
                }
            });
            return containGrid;
        }
    }, {
        key: "getAction",
        value: function getAction(actions) {
            if (!actions || !actions.length) {
                return null;
            }
            var actionList = actions.map(function (action, index) {
                return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                    "li",
                    { style: { width: 100 / actions.length + "%" }, key: "action-" + index },
                    react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                        "span",
                        null,
                        action
                    )
                );
            });
            return actionList;
        }
        // For 2.x compatible

    }, {
        key: "getCompatibleHoverable",
        value: function getCompatibleHoverable() {
            var _props = this.props,
                noHovering = _props.noHovering,
                hoverable = _props.hoverable;

            if ('noHovering' in this.props) {
                return !noHovering || hoverable;
            }
            return !!hoverable;
        }
    }, {
        key: "render",
        value: function render() {
            var _classNames;

            var _a = this.props,
                _a$prefixCls = _a.prefixCls,
                prefixCls = _a$prefixCls === undefined ? 'ant-card' : _a$prefixCls,
                className = _a.className,
                extra = _a.extra,
                bodyStyle = _a.bodyStyle,
                noHovering = _a.noHovering,
                hoverable = _a.hoverable,
                title = _a.title,
                loading = _a.loading,
                _a$bordered = _a.bordered,
                bordered = _a$bordered === undefined ? true : _a$bordered,
                type = _a.type,
                cover = _a.cover,
                actions = _a.actions,
                tabList = _a.tabList,
                children = _a.children,
                activeTabKey = _a.activeTabKey,
                defaultActiveTabKey = _a.defaultActiveTabKey,
                others = __rest(_a, ["prefixCls", "className", "extra", "bodyStyle", "noHovering", "hoverable", "title", "loading", "bordered", "type", "cover", "actions", "tabList", "children", "activeTabKey", "defaultActiveTabKey"]);
            var classString = classnames__WEBPACK_IMPORTED_MODULE_8___default()(prefixCls, className, (_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + "-loading", loading), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + "-bordered", bordered), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + "-hoverable", this.getCompatibleHoverable()), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + "-wider-padding", this.state.widerPadding), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + "-padding-transition", this.updateWiderPaddingCalled), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + "-contain-grid", this.isContainGrid()), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + "-contain-tabs", tabList && tabList.length), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + "-type-" + type, !!type), _classNames));
            var loadingBlock = react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                "div",
                { className: prefixCls + "-loading-content" },
                react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("p", { className: prefixCls + "-loading-block", style: { width: '94%' } }),
                react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                    "p",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("span", { className: prefixCls + "-loading-block", style: { width: '28%' } }),
                    react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("span", { className: prefixCls + "-loading-block", style: { width: '62%' } })
                ),
                react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                    "p",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("span", { className: prefixCls + "-loading-block", style: { width: '22%' } }),
                    react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("span", { className: prefixCls + "-loading-block", style: { width: '66%' } })
                ),
                react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                    "p",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("span", { className: prefixCls + "-loading-block", style: { width: '56%' } }),
                    react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("span", { className: prefixCls + "-loading-block", style: { width: '39%' } })
                ),
                react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                    "p",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("span", { className: prefixCls + "-loading-block", style: { width: '21%' } }),
                    react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("span", { className: prefixCls + "-loading-block", style: { width: '15%' } }),
                    react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("span", { className: prefixCls + "-loading-block", style: { width: '40%' } })
                )
            );
            var hasActiveTabKey = activeTabKey !== undefined;
            var extraProps = babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, hasActiveTabKey ? 'activeKey' : 'defaultActiveKey', hasActiveTabKey ? activeTabKey : defaultActiveTabKey);
            var head = void 0;
            var tabs = tabList && tabList.length ? react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                _tabs__WEBPACK_IMPORTED_MODULE_13__["default"],
                babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, extraProps, { className: prefixCls + "-head-tabs", size: "large", onChange: this.onTabChange }),
                tabList.map(function (item) {
                    return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_tabs__WEBPACK_IMPORTED_MODULE_13__["default"].TabPane, { tab: item.tab, key: item.key });
                })
            ) : null;
            if (title || extra || tabs) {
                head = react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                    "div",
                    { className: prefixCls + "-head" },
                    react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                        "div",
                        { className: prefixCls + "-head-wrapper" },
                        title && react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                            "div",
                            { className: prefixCls + "-head-title" },
                            title
                        ),
                        extra && react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                            "div",
                            { className: prefixCls + "-extra" },
                            extra
                        )
                    ),
                    tabs
                );
            }
            var coverDom = cover ? react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                "div",
                { className: prefixCls + "-cover" },
                cover
            ) : null;
            var body = react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                "div",
                { className: prefixCls + "-body", style: bodyStyle },
                loading ? loadingBlock : children
            );
            var actionDom = actions && actions.length ? react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                "ul",
                { className: prefixCls + "-actions" },
                this.getAction(actions)
            ) : null;
            var divProps = Object(omit_js__WEBPACK_IMPORTED_MODULE_10__["default"])(others, ['onTabChange']);
            return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                "div",
                babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, divProps, { className: classString, ref: this.saveRef }),
                head,
                coverDom,
                body,
                actionDom
            );
        }
    }]);

    return Card;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Card);

Card.Grid = _Grid__WEBPACK_IMPORTED_MODULE_11__["default"];
Card.Meta = _Meta__WEBPACK_IMPORTED_MODULE_12__["default"];
__decorate([Object(_util_throttleByAnimationFrame__WEBPACK_IMPORTED_MODULE_14__["throttleByAnimationFrameDecorator"])()], Card.prototype, "updateWiderPadding", null);

/***/ }),

/***/ "../node_modules/antd/es/card/style/css.js":
/*!*************************************************!*\
  !*** ../node_modules/antd/es/card/style/css.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../node_modules/antd/es/card/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tabs_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tabs/style/css */ "../node_modules/antd/es/tabs/style/css.js");


// style dependencies


/***/ }),

/***/ "../node_modules/antd/es/card/style/index.css":
/*!****************************************************!*\
  !*** ../node_modules/antd/es/card/style/index.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/card/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/card/style/index.css", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
		var newContent = __webpack_require__(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/card/style/index.css");

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

/***/ "../node_modules/antd/es/col/index.js":
/*!********************************************!*\
  !*** ../node_modules/antd/es/col/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../grid */ "../node_modules/antd/es/grid/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_grid__WEBPACK_IMPORTED_MODULE_0__["Col"]);

/***/ }),

/***/ "../node_modules/antd/es/col/style/css.js":
/*!************************************************!*\
  !*** ../node_modules/antd/es/col/style/css.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grid_style_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../grid/style/index.css */ "../node_modules/antd/es/grid/style/index.css");
/* harmony import */ var _grid_style_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grid_style_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "../node_modules/antd/es/grid/index.js":
/*!*********************************************!*\
  !*** ../node_modules/antd/es/grid/index.js ***!
  \*********************************************/
/*! exports provided: Row, Col */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./row */ "../node_modules/antd/es/grid/row.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return _row__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./col */ "../node_modules/antd/es/grid/col.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Col", function() { return _col__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "../node_modules/antd/es/notification/index.js":
/*!*****************************************************!*\
  !*** ../node_modules/antd/es/notification/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-notification */ "../node_modules/rc-notification/es/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon */ "../node_modules/antd/es/icon/index.js");




var notificationInstance = {};
var defaultDuration = 4.5;
var defaultTop = 24;
var defaultBottom = 24;
var defaultPlacement = 'topRight';
var defaultGetContainer = void 0;
function setNotificationConfig(options) {
    var duration = options.duration,
        placement = options.placement,
        bottom = options.bottom,
        top = options.top,
        getContainer = options.getContainer;

    if (duration !== undefined) {
        defaultDuration = duration;
    }
    if (placement !== undefined) {
        defaultPlacement = placement;
    }
    if (bottom !== undefined) {
        defaultBottom = bottom;
    }
    if (top !== undefined) {
        defaultTop = top;
    }
    if (getContainer !== undefined) {
        defaultGetContainer = getContainer;
    }
}
function getPlacementStyle(placement) {
    var style = void 0;
    switch (placement) {
        case 'topLeft':
            style = {
                left: 0,
                top: defaultTop,
                bottom: 'auto'
            };
            break;
        case 'topRight':
            style = {
                right: 0,
                top: defaultTop,
                bottom: 'auto'
            };
            break;
        case 'bottomLeft':
            style = {
                left: 0,
                top: 'auto',
                bottom: defaultBottom
            };
            break;
        default:
            style = {
                right: 0,
                top: 'auto',
                bottom: defaultBottom
            };
            break;
    }
    return style;
}
function getNotificationInstance(prefixCls, placement, callback) {
    var cacheKey = prefixCls + '-' + placement;
    if (notificationInstance[cacheKey]) {
        callback(notificationInstance[cacheKey]);
        return;
    }
    rc_notification__WEBPACK_IMPORTED_MODULE_2__["default"].newInstance({
        prefixCls: prefixCls,
        className: prefixCls + '-' + placement,
        style: getPlacementStyle(placement),
        getContainer: defaultGetContainer
    }, function (notification) {
        notificationInstance[cacheKey] = notification;
        callback(notification);
    });
}
var typeToIcon = {
    success: 'check-circle-o',
    info: 'info-circle-o',
    error: 'cross-circle-o',
    warning: 'exclamation-circle-o'
};
function notice(args) {
    var outerPrefixCls = args.prefixCls || 'ant-notification';
    var prefixCls = outerPrefixCls + '-notice';
    var duration = args.duration === undefined ? defaultDuration : args.duration;
    var iconNode = null;
    if (args.icon) {
        iconNode = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
            'span',
            { className: prefixCls + '-icon' },
            args.icon
        );
    } else if (args.type) {
        var iconType = typeToIcon[args.type];
        iconNode = react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_3__["default"], { className: prefixCls + '-icon ' + prefixCls + '-icon-' + args.type, type: iconType });
    }
    var autoMarginTag = !args.description && iconNode ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"]('span', { className: prefixCls + '-message-single-line-auto-margin' }) : null;
    getNotificationInstance(outerPrefixCls, args.placement || defaultPlacement, function (notification) {
        notification.notice({
            content: react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                'div',
                { className: iconNode ? prefixCls + '-with-icon' : '' },
                iconNode,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                    'div',
                    { className: prefixCls + '-message' },
                    autoMarginTag,
                    args.message
                ),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                    'div',
                    { className: prefixCls + '-description' },
                    args.description
                ),
                args.btn ? react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                    'span',
                    { className: prefixCls + '-btn' },
                    args.btn
                ) : null
            ),
            duration: duration,
            closable: true,
            onClose: args.onClose,
            key: args.key,
            style: args.style || {},
            className: args.className
        });
    });
}
var api = {
    open: notice,
    close: function close(key) {
        Object.keys(notificationInstance).forEach(function (cacheKey) {
            return notificationInstance[cacheKey].removeNotice(key);
        });
    },

    config: setNotificationConfig,
    destroy: function destroy() {
        Object.keys(notificationInstance).forEach(function (cacheKey) {
            notificationInstance[cacheKey].destroy();
            delete notificationInstance[cacheKey];
        });
    }
};
['success', 'info', 'warning', 'error'].forEach(function (type) {
    api[type] = function (args) {
        return api.open(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, args, { type: type }));
    };
});
api.warn = api.warning;
/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ "../node_modules/antd/es/notification/style/css.js":
/*!*********************************************************!*\
  !*** ../node_modules/antd/es/notification/style/css.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../node_modules/antd/es/notification/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "../node_modules/antd/es/notification/style/index.css":
/*!************************************************************!*\
  !*** ../node_modules/antd/es/notification/style/index.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/notification/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/notification/style/index.css", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
		var newContent = __webpack_require__(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/notification/style/index.css");

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

/***/ "../node_modules/antd/es/row/index.js":
/*!********************************************!*\
  !*** ../node_modules/antd/es/row/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../grid */ "../node_modules/antd/es/grid/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_grid__WEBPACK_IMPORTED_MODULE_0__["Row"]);

/***/ }),

/***/ "../node_modules/antd/es/row/style/css.js":
/*!************************************************!*\
  !*** ../node_modules/antd/es/row/style/css.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grid_style_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../grid/style/index.css */ "../node_modules/antd/es/grid/style/index.css");
/* harmony import */ var _grid_style_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grid_style_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "../node_modules/antd/es/tabs/index.js":
/*!*********************************************!*\
  !*** ../node_modules/antd/es/tabs/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/typeof */ "../node_modules/babel-runtime/helpers/typeof.js");
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__);
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
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rc_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-tabs */ "../node_modules/rc-tabs/es/index.js");
/* harmony import */ var rc_tabs_es_ScrollableInkTabBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-tabs/es/ScrollableInkTabBar */ "../node_modules/rc-tabs/es/ScrollableInkTabBar.js");
/* harmony import */ var rc_tabs_es_TabContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rc-tabs/es/TabContent */ "../node_modules/rc-tabs/es/TabContent.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../icon */ "../node_modules/antd/es/icon/index.js");
/* harmony import */ var _util_warning__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../_util/warning */ "../node_modules/antd/es/_util/warning.js");
/* harmony import */ var _util_isFlexSupported__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../_util/isFlexSupported */ "../node_modules/antd/es/_util/isFlexSupported.js");

















var Tabs = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Tabs, _React$Component);

    function Tabs() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Tabs);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));

        _this.createNewTab = function (targetKey) {
            var onEdit = _this.props.onEdit;
            if (onEdit) {
                onEdit(targetKey, 'add');
            }
        };
        _this.removeTab = function (targetKey, e) {
            e.stopPropagation();
            if (!targetKey) {
                return;
            }
            var onEdit = _this.props.onEdit;
            if (onEdit) {
                onEdit(targetKey, 'remove');
            }
        };
        _this.handleChange = function (activeKey) {
            var onChange = _this.props.onChange;
            if (onChange) {
                onChange(activeKey);
            }
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Tabs, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var NO_FLEX = ' no-flex';
            var tabNode = react_dom__WEBPACK_IMPORTED_MODULE_8__["findDOMNode"](this);
            if (tabNode && !Object(_util_isFlexSupported__WEBPACK_IMPORTED_MODULE_15__["default"])() && tabNode.className.indexOf(NO_FLEX) === -1) {
                tabNode.className += NO_FLEX;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames,
                _this2 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                _props$className = _props.className,
                className = _props$className === undefined ? '' : _props$className,
                size = _props.size,
                _props$type = _props.type,
                type = _props$type === undefined ? 'line' : _props$type,
                tabPosition = _props.tabPosition,
                children = _props.children,
                tabBarExtraContent = _props.tabBarExtraContent,
                tabBarStyle = _props.tabBarStyle,
                hideAdd = _props.hideAdd,
                onTabClick = _props.onTabClick,
                onPrevClick = _props.onPrevClick,
                onNextClick = _props.onNextClick,
                _props$animated = _props.animated,
                animated = _props$animated === undefined ? true : _props$animated,
                tabBarGutter = _props.tabBarGutter;

            var _ref = (typeof animated === 'undefined' ? 'undefined' : babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(animated)) === 'object' ? {
                inkBarAnimated: animated.inkBar, tabPaneAnimated: animated.tabPane
            } : {
                inkBarAnimated: animated, tabPaneAnimated: animated
            },
                inkBarAnimated = _ref.inkBarAnimated,
                tabPaneAnimated = _ref.tabPaneAnimated;
            // card tabs should not have animation


            if (type !== 'line') {
                tabPaneAnimated = 'animated' in this.props ? tabPaneAnimated : false;
            }
            Object(_util_warning__WEBPACK_IMPORTED_MODULE_14__["default"])(!(type.indexOf('card') >= 0 && (size === 'small' || size === 'large')), 'Tabs[type=card|editable-card] doesn\'t have small or large size, it\'s by designed.');
            var cls = classnames__WEBPACK_IMPORTED_MODULE_12___default()(className, (_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-vertical', tabPosition === 'left' || tabPosition === 'right'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-' + size, !!size), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-card', type.indexOf('card') >= 0), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-' + type, true), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-no-animation', !tabPaneAnimated), _classNames));
            // only card type tabs can be added and closed
            var childrenWithClose = [];
            if (type === 'editable-card') {
                childrenWithClose = [];
                react__WEBPACK_IMPORTED_MODULE_7__["Children"].forEach(children, function (child, index) {
                    var closable = child.props.closable;
                    closable = typeof closable === 'undefined' ? true : closable;
                    var closeIcon = closable ? react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_13__["default"], { type: 'close', onClick: function onClick(e) {
                            return _this2.removeTab(child.key, e);
                        } }) : null;
                    childrenWithClose.push(react__WEBPACK_IMPORTED_MODULE_7__["cloneElement"](child, {
                        tab: react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                            'div',
                            { className: closable ? undefined : prefixCls + '-tab-unclosable' },
                            child.props.tab,
                            closeIcon
                        ),
                        key: child.key || index
                    }));
                });
                // Add new tab handler
                if (!hideAdd) {
                    tabBarExtraContent = react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                        'span',
                        null,
                        react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_13__["default"], { type: 'plus', className: prefixCls + '-new-tab', onClick: this.createNewTab }),
                        tabBarExtraContent
                    );
                }
            }
            tabBarExtraContent = tabBarExtraContent ? react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                'div',
                { className: prefixCls + '-extra-content' },
                tabBarExtraContent
            ) : null;
            var renderTabBar = function renderTabBar() {
                return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](rc_tabs_es_ScrollableInkTabBar__WEBPACK_IMPORTED_MODULE_10__["default"], { inkBarAnimated: inkBarAnimated, extraContent: tabBarExtraContent, onTabClick: onTabClick, onPrevClick: onPrevClick, onNextClick: onNextClick, style: tabBarStyle, tabBarGutter: tabBarGutter });
            };
            return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                rc_tabs__WEBPACK_IMPORTED_MODULE_9__["default"],
                babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props, { className: cls, tabBarPosition: tabPosition, renderTabBar: renderTabBar, renderTabContent: function renderTabContent() {
                        return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](rc_tabs_es_TabContent__WEBPACK_IMPORTED_MODULE_11__["default"], { animated: tabPaneAnimated, animatedWithMargin: true });
                    }, onChange: this.handleChange }),
                childrenWithClose.length > 0 ? childrenWithClose : children
            );
        }
    }]);

    return Tabs;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Tabs);

Tabs.TabPane = rc_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPane"];
Tabs.defaultProps = {
    prefixCls: 'ant-tabs',
    hideAdd: false
};

/***/ }),

/***/ "../node_modules/antd/es/tabs/style/css.js":
/*!*************************************************!*\
  !*** ../node_modules/antd/es/tabs/style/css.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../node_modules/antd/es/tabs/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "../node_modules/antd/es/tabs/style/index.css":
/*!****************************************************!*\
  !*** ../node_modules/antd/es/tabs/style/index.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/tabs/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/tabs/style/index.css", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
		var newContent = __webpack_require__(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/tabs/style/index.css");

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

/***/ "../node_modules/css-loader/index.js!../node_modules/antd/es/alert/style/index.css":
/*!********************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/antd/es/alert/style/index.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n.ant-alert {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: relative;\n  padding: 8px 15px 8px 37px;\n  border-radius: 4px;\n}\n.ant-alert.ant-alert-no-icon {\n  padding: 8px 15px;\n}\n.ant-alert-icon {\n  top: 12.5px;\n  left: 16px;\n  position: absolute;\n}\n.ant-alert-description {\n  font-size: 14px;\n  line-height: 22px;\n  display: none;\n}\n.ant-alert-success {\n  border: 1px solid #b7eb8f;\n  background-color: #f6ffed;\n}\n.ant-alert-success .ant-alert-icon {\n  color: #52c41a;\n}\n.ant-alert-info {\n  border: 1px solid #91d5ff;\n  background-color: #e6f7ff;\n}\n.ant-alert-info .ant-alert-icon {\n  color: #1890ff;\n}\n.ant-alert-warning {\n  border: 1px solid #ffe58f;\n  background-color: #fffbe6;\n}\n.ant-alert-warning .ant-alert-icon {\n  color: #faad14;\n}\n.ant-alert-error {\n  border: 1px solid #ffa39e;\n  background-color: #fff1f0;\n}\n.ant-alert-error .ant-alert-icon {\n  color: #f5222d;\n}\n.ant-alert-close-icon {\n  font-size: 12px;\n  position: absolute;\n  right: 16px;\n  top: 8px;\n  line-height: 22px;\n  overflow: hidden;\n  cursor: pointer;\n}\n.ant-alert-close-icon .anticon-cross {\n  color: rgba(0, 0, 0, 0.45);\n  -webkit-transition: color .3s;\n  transition: color .3s;\n}\n.ant-alert-close-icon .anticon-cross:hover {\n  color: #404040;\n}\n.ant-alert-close-text {\n  position: absolute;\n  right: 16px;\n}\n.ant-alert-with-description {\n  padding: 15px 15px 15px 64px;\n  position: relative;\n  border-radius: 4px;\n  color: rgba(0, 0, 0, 0.65);\n  line-height: 1.5;\n}\n.ant-alert-with-description.ant-alert-no-icon {\n  padding: 15px;\n}\n.ant-alert-with-description .ant-alert-icon {\n  position: absolute;\n  top: 16px;\n  left: 24px;\n  font-size: 24px;\n}\n.ant-alert-with-description .ant-alert-close-icon {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  cursor: pointer;\n  font-size: 14px;\n}\n.ant-alert-with-description .ant-alert-message {\n  font-size: 16px;\n  color: rgba(0, 0, 0, 0.85);\n  display: block;\n  margin-bottom: 4px;\n}\n.ant-alert-with-description .ant-alert-description {\n  display: block;\n}\n.ant-alert.ant-alert-close {\n  height: 0 !important;\n  margin: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  -webkit-transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  -webkit-transform-origin: 50% 0;\n      -ms-transform-origin: 50% 0;\n          transform-origin: 50% 0;\n}\n.ant-alert-slide-up-leave {\n  -webkit-animation: antAlertSlideUpOut 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n          animation: antAlertSlideUpOut 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n}\n.ant-alert-banner {\n  border-radius: 0;\n  border: 0;\n  margin-bottom: 0;\n}\n@-webkit-keyframes antAlertSlideUpIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 0% 0%;\n            transform-origin: 0% 0%;\n    -webkit-transform: scaleY(0);\n            transform: scaleY(0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform-origin: 0% 0%;\n            transform-origin: 0% 0%;\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n}\n@keyframes antAlertSlideUpIn {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 0% 0%;\n            transform-origin: 0% 0%;\n    -webkit-transform: scaleY(0);\n            transform: scaleY(0);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform-origin: 0% 0%;\n            transform-origin: 0% 0%;\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n}\n@-webkit-keyframes antAlertSlideUpOut {\n  0% {\n    opacity: 1;\n    -webkit-transform-origin: 0% 0%;\n            transform-origin: 0% 0%;\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 0% 0%;\n            transform-origin: 0% 0%;\n    -webkit-transform: scaleY(0);\n            transform: scaleY(0);\n  }\n}\n@keyframes antAlertSlideUpOut {\n  0% {\n    opacity: 1;\n    -webkit-transform-origin: 0% 0%;\n            transform-origin: 0% 0%;\n    -webkit-transform: scaleY(1);\n            transform: scaleY(1);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 0% 0%;\n            transform-origin: 0% 0%;\n    -webkit-transform: scaleY(0);\n            transform: scaleY(0);\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/antd/es/card/style/index.css":
/*!*******************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/antd/es/card/style/index.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n.ant-card {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  background: #fff;\n  border-radius: 2px;\n  position: relative;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n.ant-card-hoverable {\n  cursor: pointer;\n}\n.ant-card-hoverable:hover {\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);\n          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);\n  border-color: rgba(0, 0, 0, 0.09);\n}\n.ant-card-bordered {\n  border: 1px solid #e8e8e8;\n}\n.ant-card-head {\n  background: #fff;\n  border-bottom: 1px solid #e8e8e8;\n  padding: 0 24px;\n  border-radius: 2px 2px 0 0;\n  zoom: 1;\n  margin-bottom: -1px;\n  min-height: 48px;\n}\n.ant-card-head:before,\n.ant-card-head:after {\n  content: \" \";\n  display: table;\n}\n.ant-card-head:after {\n  clear: both;\n  visibility: hidden;\n  font-size: 0;\n  height: 0;\n}\n.ant-card-head-wrapper {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.ant-card-head-title {\n  font-size: 16px;\n  padding: 16px 0;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 500;\n  display: inline-block;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.ant-card-head .ant-tabs {\n  margin-bottom: -17px;\n  clear: both;\n}\n.ant-card-head .ant-tabs-bar {\n  border-bottom: 1px solid #e8e8e8;\n}\n.ant-card-extra {\n  float: right;\n  padding: 17.5px 0;\n  text-align: right;\n  margin-left: auto;\n}\n.ant-card-body {\n  padding: 24px;\n  zoom: 1;\n}\n.ant-card-body:before,\n.ant-card-body:after {\n  content: \" \";\n  display: table;\n}\n.ant-card-body:after {\n  clear: both;\n  visibility: hidden;\n  font-size: 0;\n  height: 0;\n}\n.ant-card-contain-grid .ant-card-body {\n  margin: -1px 0 0 -1px;\n  padding: 0;\n}\n.ant-card-grid {\n  border-radius: 0;\n  border: 0;\n  -webkit-box-shadow: 1px 0 0 0 #e8e8e8, 0 1px 0 0 #e8e8e8, 1px 1px 0 0 #e8e8e8, 1px 0 0 0 #e8e8e8 inset, 0 1px 0 0 #e8e8e8 inset;\n          box-shadow: 1px 0 0 0 #e8e8e8, 0 1px 0 0 #e8e8e8, 1px 1px 0 0 #e8e8e8, 1px 0 0 0 #e8e8e8 inset, 0 1px 0 0 #e8e8e8 inset;\n  width: 33.33%;\n  float: left;\n  padding: 24px;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n.ant-card-grid:hover {\n  position: relative;\n  z-index: 1;\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.ant-card-contain-tabs .ant-card-head-title {\n  padding-bottom: 0;\n  min-height: 32px;\n}\n.ant-card-contain-tabs .ant-card-extra {\n  padding-bottom: 0;\n}\n.ant-card-cover > * {\n  width: 100%;\n  display: block;\n}\n.ant-card-actions {\n  border-top: 1px solid #e8e8e8;\n  background: #fafafa;\n  zoom: 1;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.ant-card-actions:before,\n.ant-card-actions:after {\n  content: \" \";\n  display: table;\n}\n.ant-card-actions:after {\n  clear: both;\n  visibility: hidden;\n  font-size: 0;\n  height: 0;\n}\n.ant-card-actions > li {\n  float: left;\n  text-align: center;\n  margin: 12px 0;\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-card-actions > li > span {\n  display: inline-block;\n  font-size: 14px;\n  cursor: pointer;\n  line-height: 22px;\n  min-width: 32px;\n  position: relative;\n}\n.ant-card-actions > li > span:hover {\n  color: #1890ff;\n  -webkit-transition: color .3s;\n  transition: color .3s;\n}\n.ant-card-actions > li > span > .anticon {\n  font-size: 16px;\n  line-height: 22px;\n  display: block;\n  width: 100%;\n}\n.ant-card-actions > li > span a {\n  color: rgba(0, 0, 0, 0.45);\n  line-height: 22px;\n  display: inline-block;\n  width: 100%;\n}\n.ant-card-actions > li > span a:hover {\n  color: #1890ff;\n}\n.ant-card-actions > li:not(:last-child) {\n  border-right: 1px solid #e8e8e8;\n}\n.ant-card-wider-padding .ant-card-head {\n  padding: 0 32px;\n}\n.ant-card-wider-padding .ant-card-body {\n  padding: 24px 32px;\n}\n.ant-card-padding-transition .ant-card-head,\n.ant-card-padding-transition .ant-card-body {\n  -webkit-transition: padding .3s;\n  transition: padding .3s;\n}\n.ant-card-padding-transition .ant-card-extra {\n  -webkit-transition: right .3s;\n  transition: right .3s;\n}\n.ant-card-type-inner .ant-card-head {\n  padding: 0 24px;\n  background: #fafafa;\n}\n.ant-card-type-inner .ant-card-head-title {\n  padding: 12px 0;\n  font-size: 14px;\n}\n.ant-card-type-inner .ant-card-body {\n  padding: 16px 24px;\n}\n.ant-card-type-inner .ant-card-extra {\n  padding: 13.5px 0;\n}\n.ant-card-meta {\n  margin: -4px 0;\n  zoom: 1;\n}\n.ant-card-meta:before,\n.ant-card-meta:after {\n  content: \" \";\n  display: table;\n}\n.ant-card-meta:after {\n  clear: both;\n  visibility: hidden;\n  font-size: 0;\n  height: 0;\n}\n.ant-card-meta-avatar {\n  padding-right: 16px;\n  float: left;\n}\n.ant-card-meta-detail {\n  overflow: hidden;\n}\n.ant-card-meta-detail > div:not(:last-child) {\n  margin-bottom: 8px;\n}\n.ant-card-meta-title {\n  font-size: 16px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 500;\n}\n.ant-card-meta-description {\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-card-loading .ant-card-body {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  padding: 0;\n}\n.ant-card-loading-content {\n  padding: 24px;\n}\n.ant-card-loading-content p {\n  margin: 0;\n}\n.ant-card-loading-block {\n  display: inline-block;\n  margin: 5px 2% 0 0;\n  height: 14px;\n  border-radius: 2px;\n  background: -webkit-gradient(linear, left top, right top, from(rgba(207, 216, 220, 0.2)), color-stop(rgba(207, 216, 220, 0.4)), to(rgba(207, 216, 220, 0.2)));\n  background: -webkit-linear-gradient(left, rgba(207, 216, 220, 0.2), rgba(207, 216, 220, 0.4), rgba(207, 216, 220, 0.2));\n  background: linear-gradient(90deg, rgba(207, 216, 220, 0.2), rgba(207, 216, 220, 0.4), rgba(207, 216, 220, 0.2));\n  -webkit-animation: card-loading 1.4s ease infinite;\n          animation: card-loading 1.4s ease infinite;\n  background-size: 600% 600%;\n}\n@-webkit-keyframes card-loading {\n  0%,\n  100% {\n    background-position: 0 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n}\n@keyframes card-loading {\n  0%,\n  100% {\n    background-position: 0 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/antd/es/notification/style/index.css":
/*!***************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/antd/es/notification/style/index.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n.ant-notification {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: fixed;\n  z-index: 1010;\n  width: 384px;\n  max-width: calc(100vw - 32px);\n  margin-right: 24px;\n}\n.ant-notification-topLeft,\n.ant-notification-bottomLeft {\n  margin-left: 24px;\n  margin-right: 0;\n}\n.ant-notification-topLeft .ant-notification-fade-enter.ant-notification-fade-enter-active,\n.ant-notification-bottomLeft .ant-notification-fade-enter.ant-notification-fade-enter-active,\n.ant-notification-topLeft .ant-notification-fade-appear.ant-notification-fade-appear-active,\n.ant-notification-bottomLeft .ant-notification-fade-appear.ant-notification-fade-appear-active {\n  -webkit-animation-name: NotificationLeftFadeIn;\n          animation-name: NotificationLeftFadeIn;\n}\n.ant-notification-notice {\n  padding: 16px 24px;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  background: #fff;\n  line-height: 1.5;\n  position: relative;\n  margin-bottom: 16px;\n  overflow: hidden;\n}\n.ant-notification-notice-message {\n  font-size: 16px;\n  color: rgba(0, 0, 0, 0.85);\n  margin-bottom: 8px;\n  line-height: 24px;\n  display: inline-block;\n}\n.ant-notification-notice-message-single-line-auto-margin {\n  width: calc(384px - 24px * 2 - 24px - 48px - 100%);\n  background-color: transparent;\n  pointer-events: none;\n  display: block;\n  max-width: 4px;\n}\n.ant-notification-notice-message-single-line-auto-margin:before {\n  content: '';\n  display: block;\n  padding-bottom: 100%;\n}\n.ant-notification-notice-description {\n  font-size: 14px;\n}\n.ant-notification-notice-closable .ant-notification-notice-message {\n  padding-right: 24px;\n}\n.ant-notification-notice-with-icon .ant-notification-notice-message {\n  font-size: 16px;\n  margin-left: 48px;\n  margin-bottom: 4px;\n}\n.ant-notification-notice-with-icon .ant-notification-notice-description {\n  margin-left: 48px;\n  font-size: 14px;\n}\n.ant-notification-notice-icon {\n  position: absolute;\n  font-size: 24px;\n  line-height: 24px;\n  margin-left: 4px;\n}\n.ant-notification-notice-icon-success {\n  color: #52c41a;\n}\n.ant-notification-notice-icon-info {\n  color: #1890ff;\n}\n.ant-notification-notice-icon-warning {\n  color: #faad14;\n}\n.ant-notification-notice-icon-error {\n  color: #f5222d;\n}\n.ant-notification-notice-close-x:after {\n  font-size: 14px;\n  content: \"\\E633\";\n  font-family: \"anticon\";\n  cursor: pointer;\n}\n.ant-notification-notice-close {\n  position: absolute;\n  right: 22px;\n  top: 16px;\n  color: rgba(0, 0, 0, 0.45);\n  outline: none;\n}\na.ant-notification-notice-close:focus {\n  text-decoration: none;\n}\n.ant-notification-notice-close:hover {\n  color: #404040;\n}\n.ant-notification-notice-btn {\n  float: right;\n  margin-top: 16px;\n}\n.ant-notification .notification-fade-effect {\n  -webkit-animation-duration: 0.24s;\n          animation-duration: 0.24s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n          animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.ant-notification-fade-enter,\n.ant-notification-fade-appear {\n  opacity: 0;\n  -webkit-animation-duration: 0.24s;\n          animation-duration: 0.24s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n          animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.ant-notification-fade-leave {\n  -webkit-animation-duration: 0.24s;\n          animation-duration: 0.24s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n          animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);\n  -webkit-animation-duration: 0.2s;\n          animation-duration: 0.2s;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n.ant-notification-fade-enter.ant-notification-fade-enter-active,\n.ant-notification-fade-appear.ant-notification-fade-appear-active {\n  -webkit-animation-name: NotificationFadeIn;\n          animation-name: NotificationFadeIn;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n.ant-notification-fade-leave.ant-notification-fade-leave-active {\n  -webkit-animation-name: NotificationFadeOut;\n          animation-name: NotificationFadeOut;\n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n}\n@-webkit-keyframes NotificationFadeIn {\n  0% {\n    opacity: 0;\n    left: 384px;\n  }\n  100% {\n    left: 0;\n    opacity: 1;\n  }\n}\n@keyframes NotificationFadeIn {\n  0% {\n    opacity: 0;\n    left: 384px;\n  }\n  100% {\n    left: 0;\n    opacity: 1;\n  }\n}\n@-webkit-keyframes NotificationLeftFadeIn {\n  0% {\n    opacity: 0;\n    right: 384px;\n  }\n  100% {\n    right: 0;\n    opacity: 1;\n  }\n}\n@keyframes NotificationLeftFadeIn {\n  0% {\n    opacity: 0;\n    right: 384px;\n  }\n  100% {\n    right: 0;\n    opacity: 1;\n  }\n}\n@-webkit-keyframes NotificationFadeOut {\n  0% {\n    opacity: 1;\n    margin-bottom: 16px;\n    padding-top: 16px 24px;\n    padding-bottom: 16px 24px;\n    max-height: 150px;\n  }\n  100% {\n    opacity: 0;\n    margin-bottom: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    max-height: 0;\n  }\n}\n@keyframes NotificationFadeOut {\n  0% {\n    opacity: 1;\n    margin-bottom: 16px;\n    padding-top: 16px 24px;\n    padding-bottom: 16px 24px;\n    max-height: 150px;\n  }\n  100% {\n    opacity: 0;\n    margin-bottom: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    max-height: 0;\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/antd/es/tabs/style/index.css":
/*!*******************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/antd/es/tabs/style/index.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n.ant-tabs.ant-tabs-card > .ant-tabs-bar .ant-tabs-nav-container {\n  height: 40px;\n}\n.ant-tabs.ant-tabs-card > .ant-tabs-bar .ant-tabs-ink-bar {\n  visibility: hidden;\n}\n.ant-tabs.ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {\n  margin: 0;\n  border: 1px solid #e8e8e8;\n  border-bottom: 0;\n  border-radius: 4px 4px 0 0;\n  background: #fafafa;\n  margin-right: 2px;\n  padding: 0 16px;\n  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  line-height: 38px;\n}\n.ant-tabs.ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {\n  background: #fff;\n  border-color: #e8e8e8;\n  color: #1890ff;\n  padding-bottom: 1px;\n}\n.ant-tabs.ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-inactive {\n  padding: 0;\n}\n.ant-tabs.ant-tabs-card > .ant-tabs-bar .ant-tabs-nav-wrap {\n  margin-bottom: 0;\n}\n.ant-tabs.ant-tabs-card > .ant-tabs-bar .ant-tabs-tab .anticon-close {\n  color: rgba(0, 0, 0, 0.45);\n  -webkit-transition: all .3s;\n  transition: all .3s;\n  font-size: 12px;\n  margin-left: 3px;\n  margin-right: -5px;\n  overflow: hidden;\n  vertical-align: middle;\n  width: 16px;\n  height: 16px;\n  height: 14px;\n}\n.ant-tabs.ant-tabs-card > .ant-tabs-bar .ant-tabs-tab .anticon-close:hover {\n  color: rgba(0, 0, 0, 0.85);\n}\n.ant-tabs.ant-tabs-card .ant-tabs-content > .ant-tabs-tabpane,\n.ant-tabs.ant-tabs-editable-card .ant-tabs-content > .ant-tabs-tabpane {\n  -webkit-transition: none !important;\n  transition: none !important;\n}\n.ant-tabs.ant-tabs-card .ant-tabs-content > .ant-tabs-tabpane-inactive,\n.ant-tabs.ant-tabs-editable-card .ant-tabs-content > .ant-tabs-tabpane-inactive {\n  overflow: hidden;\n}\n.ant-tabs.ant-tabs-card > .ant-tabs-bar .ant-tabs-tab:hover .anticon-close {\n  opacity: 1;\n}\n.ant-tabs-extra-content {\n  line-height: 40px;\n}\n.ant-tabs-extra-content .ant-tabs-new-tab {\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n  text-align: center;\n  cursor: pointer;\n  border-radius: 2px;\n  border: 1px solid #e8e8e8;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n.ant-tabs-extra-content .ant-tabs-new-tab:hover {\n  color: #1890ff;\n  border-color: #1890ff;\n}\n.ant-tabs-vertical.ant-tabs-card > .ant-tabs-bar .ant-tabs-nav-container {\n  height: auto;\n}\n.ant-tabs-vertical.ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {\n  border-bottom: 1px solid #e8e8e8;\n  margin-bottom: 8px;\n}\n.ant-tabs-vertical.ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {\n  padding-bottom: 4px;\n}\n.ant-tabs-vertical.ant-tabs-card > .ant-tabs-bar .ant-tabs-tab:last-child {\n  margin-bottom: 8px;\n}\n.ant-tabs-vertical.ant-tabs-card > .ant-tabs-bar .ant-tabs-new-tab {\n  width: 90%;\n}\n.ant-tabs-vertical.ant-tabs-card.ant-tabs-left > .ant-tabs-bar .ant-tabs-nav-wrap {\n  margin-right: 0;\n}\n.ant-tabs-vertical.ant-tabs-card.ant-tabs-left > .ant-tabs-bar .ant-tabs-tab {\n  border-right: 0;\n  border-radius: 4px 0 0 4px;\n  margin-right: 1px;\n}\n.ant-tabs-vertical.ant-tabs-card.ant-tabs-left > .ant-tabs-bar .ant-tabs-tab-active {\n  margin-right: -1px;\n  padding-right: 18px;\n}\n.ant-tabs-vertical.ant-tabs-card.ant-tabs-right > .ant-tabs-bar .ant-tabs-nav-wrap {\n  margin-left: 0;\n}\n.ant-tabs-vertical.ant-tabs-card.ant-tabs-right > .ant-tabs-bar .ant-tabs-tab {\n  border-left: 0;\n  border-radius: 0 4px 4px 0;\n  margin-left: 1px;\n}\n.ant-tabs-vertical.ant-tabs-card.ant-tabs-right > .ant-tabs-bar .ant-tabs-tab-active {\n  margin-left: -1px;\n  padding-left: 18px;\n}\n.ant-tabs.ant-tabs-card.ant-tabs-bottom > .ant-tabs-bar .ant-tabs-tab {\n  border-bottom: 1px solid #e8e8e8;\n  border-top: 0;\n  border-radius: 0 0 4px 4px;\n}\n.ant-tabs.ant-tabs-card.ant-tabs-bottom > .ant-tabs-bar .ant-tabs-tab-active {\n  color: #1890ff;\n  padding-bottom: 0;\n  padding-top: 1px;\n}\n.ant-tabs {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: relative;\n  overflow: hidden;\n  zoom: 1;\n}\n.ant-tabs:before,\n.ant-tabs:after {\n  content: \" \";\n  display: table;\n}\n.ant-tabs:after {\n  clear: both;\n  visibility: hidden;\n  font-size: 0;\n  height: 0;\n}\n.ant-tabs-ink-bar {\n  z-index: 1;\n  position: absolute;\n  left: 0;\n  bottom: 1px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: 2px;\n  background-color: #1890ff;\n  -webkit-transform-origin: 0 0;\n      -ms-transform-origin: 0 0;\n          transform-origin: 0 0;\n}\n.ant-tabs-bar {\n  border-bottom: 1px solid #e8e8e8;\n  margin: 0 0 16px 0;\n  outline: none;\n  -webkit-transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.ant-tabs-nav-container {\n  overflow: hidden;\n  font-size: 14px;\n  line-height: 1.5;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: relative;\n  white-space: nowrap;\n  margin-bottom: -1px;\n  -webkit-transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  zoom: 1;\n}\n.ant-tabs-nav-container:before,\n.ant-tabs-nav-container:after {\n  content: \" \";\n  display: table;\n}\n.ant-tabs-nav-container:after {\n  clear: both;\n  visibility: hidden;\n  font-size: 0;\n  height: 0;\n}\n.ant-tabs-nav-container-scrolling {\n  padding-left: 32px;\n  padding-right: 32px;\n}\n.ant-tabs-bottom .ant-tabs-bar {\n  border-bottom: none;\n  border-top: 1px solid #e8e8e8;\n}\n.ant-tabs-bottom .ant-tabs-ink-bar {\n  bottom: auto;\n  top: 1px;\n}\n.ant-tabs-bottom .ant-tabs-nav-container {\n  margin-bottom: 0;\n  margin-top: -1px;\n}\n.ant-tabs-tab-prev,\n.ant-tabs-tab-next {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  z-index: 2;\n  width: 0;\n  height: 100%;\n  cursor: pointer;\n  border: 0;\n  background-color: transparent;\n  position: absolute;\n  text-align: center;\n  color: rgba(0, 0, 0, 0.45);\n  -webkit-transition: width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  opacity: 0;\n  pointer-events: none;\n}\n.ant-tabs-tab-prev.ant-tabs-tab-arrow-show,\n.ant-tabs-tab-next.ant-tabs-tab-arrow-show {\n  opacity: 1;\n  width: 32px;\n  height: 100%;\n  pointer-events: auto;\n}\n.ant-tabs-tab-prev:hover,\n.ant-tabs-tab-next:hover {\n  color: rgba(0, 0, 0, 0.65);\n}\n.ant-tabs-tab-prev-icon,\n.ant-tabs-tab-next-icon {\n  font-style: normal;\n  font-weight: bold;\n  font-variant: normal;\n  line-height: inherit;\n  vertical-align: baseline;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  text-align: center;\n  text-transform: none;\n}\n.ant-tabs-tab-prev-icon:before,\n.ant-tabs-tab-next-icon:before {\n  display: block;\n  font-family: \"anticon\" !important;\n  display: inline-block;\n  font-size: 12px;\n  font-size: 10px \\9;\n  -webkit-transform: scale(0.83333333) rotate(0deg);\n      -ms-transform: scale(0.83333333) rotate(0deg);\n          transform: scale(0.83333333) rotate(0deg);\n}\n:root .ant-tabs-tab-prev-icon:before,\n:root .ant-tabs-tab-next-icon:before {\n  font-size: 12px;\n}\n.ant-tabs-tab-btn-disabled {\n  cursor: not-allowed;\n}\n.ant-tabs-tab-btn-disabled,\n.ant-tabs-tab-btn-disabled:hover {\n  color: rgba(0, 0, 0, 0.25);\n}\n.ant-tabs-tab-next {\n  right: 2px;\n}\n.ant-tabs-tab-next-icon:before {\n  content: \"\\E61F\";\n}\n.ant-tabs-tab-prev {\n  left: 0;\n}\n.ant-tabs-tab-prev-icon:before {\n  content: \"\\E620\";\n}\n:root .ant-tabs-tab-prev {\n  -webkit-filter: none;\n          filter: none;\n}\n.ant-tabs-nav-wrap {\n  overflow: hidden;\n  margin-bottom: -1px;\n}\n.ant-tabs-nav-scroll {\n  overflow: hidden;\n  white-space: nowrap;\n}\n.ant-tabs-nav {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-left: 0;\n  -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  position: relative;\n  margin: 0;\n  list-style: none;\n  display: inline-block;\n}\n.ant-tabs-nav:before,\n.ant-tabs-nav:after {\n  display: table;\n  content: \" \";\n}\n.ant-tabs-nav:after {\n  clear: both;\n}\n.ant-tabs-nav .ant-tabs-tab-disabled {\n  pointer-events: none;\n  cursor: default;\n  color: rgba(0, 0, 0, 0.25);\n}\n.ant-tabs-nav .ant-tabs-tab {\n  display: inline-block;\n  height: 100%;\n  margin: 0 32px 0 0;\n  padding: 12px 16px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: relative;\n  -webkit-transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  cursor: pointer;\n  text-decoration: none;\n}\n.ant-tabs-nav .ant-tabs-tab:last-child {\n  margin-right: 0;\n}\n.ant-tabs-nav .ant-tabs-tab:hover {\n  color: #40a9ff;\n}\n.ant-tabs-nav .ant-tabs-tab:active {\n  color: #096dd9;\n}\n.ant-tabs-nav .ant-tabs-tab .anticon {\n  margin-right: 8px;\n}\n.ant-tabs-nav .ant-tabs-tab-active {\n  color: #1890ff;\n  font-weight: 500;\n}\n.ant-tabs-large .ant-tabs-nav-container {\n  font-size: 16px;\n}\n.ant-tabs-large .ant-tabs-tab {\n  padding: 16px;\n}\n.ant-tabs-small .ant-tabs-nav-container {\n  font-size: 14px;\n}\n.ant-tabs-small .ant-tabs-tab {\n  padding: 8px 16px;\n}\n.ant-tabs:not(.ant-tabs-vertical) > .ant-tabs-content {\n  width: 100%;\n}\n.ant-tabs:not(.ant-tabs-vertical) > .ant-tabs-content > .ant-tabs-tabpane {\n  -webkit-flex-shrink: 0;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n  width: 100%;\n  -webkit-transition: opacity .45s;\n  transition: opacity .45s;\n  opacity: 1;\n}\n.ant-tabs:not(.ant-tabs-vertical) > .ant-tabs-content > .ant-tabs-tabpane-inactive {\n  opacity: 0;\n  height: 0;\n  padding: 0 !important;\n  pointer-events: none;\n}\n.ant-tabs:not(.ant-tabs-vertical) > .ant-tabs-content-animated {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  will-change: margin-left;\n  -webkit-transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.ant-tabs-vertical > .ant-tabs-bar {\n  border-bottom: 0;\n  height: 100%;\n}\n.ant-tabs-vertical > .ant-tabs-bar-tab-prev,\n.ant-tabs-vertical > .ant-tabs-bar-tab-next {\n  width: 32px;\n  height: 0;\n  -webkit-transition: height 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: height 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.ant-tabs-vertical > .ant-tabs-bar-tab-prev.ant-tabs-tab-arrow-show,\n.ant-tabs-vertical > .ant-tabs-bar-tab-next.ant-tabs-tab-arrow-show {\n  width: 100%;\n  height: 32px;\n}\n.ant-tabs-vertical > .ant-tabs-bar .ant-tabs-tab {\n  float: none;\n  margin: 0 0 16px 0;\n  padding: 8px 24px;\n  display: block;\n}\n.ant-tabs-vertical > .ant-tabs-bar .ant-tabs-tab:last-child {\n  margin-bottom: 0;\n}\n.ant-tabs-vertical > .ant-tabs-bar .ant-tabs-extra-content {\n  text-align: center;\n}\n.ant-tabs-vertical > .ant-tabs-bar .ant-tabs-nav-scroll {\n  width: auto;\n}\n.ant-tabs-vertical > .ant-tabs-bar .ant-tabs-nav-container,\n.ant-tabs-vertical > .ant-tabs-bar .ant-tabs-nav-wrap {\n  height: 100%;\n}\n.ant-tabs-vertical > .ant-tabs-bar .ant-tabs-nav-container {\n  margin-bottom: 0;\n}\n.ant-tabs-vertical > .ant-tabs-bar .ant-tabs-nav-container.ant-tabs-nav-container-scrolling {\n  padding: 32px 0;\n}\n.ant-tabs-vertical > .ant-tabs-bar .ant-tabs-nav-wrap {\n  margin-bottom: 0;\n}\n.ant-tabs-vertical > .ant-tabs-bar .ant-tabs-nav {\n  width: 100%;\n}\n.ant-tabs-vertical > .ant-tabs-bar .ant-tabs-ink-bar {\n  width: 2px;\n  left: auto;\n  height: auto;\n  top: 0;\n}\n.ant-tabs-vertical > .ant-tabs-bar .ant-tabs-tab-next {\n  width: 100%;\n  bottom: 0;\n  height: 32px;\n}\n.ant-tabs-vertical > .ant-tabs-bar .ant-tabs-tab-next-icon:before {\n  content: \"\\E61D\";\n}\n.ant-tabs-vertical > .ant-tabs-bar .ant-tabs-tab-prev {\n  top: 0;\n  width: 100%;\n  height: 32px;\n}\n.ant-tabs-vertical > .ant-tabs-bar .ant-tabs-tab-prev-icon:before {\n  content: \"\\E61E\";\n}\n.ant-tabs-vertical > .ant-tabs-content {\n  overflow: hidden;\n  width: auto;\n  margin-top: 0 !important;\n}\n.ant-tabs-vertical.ant-tabs-left > .ant-tabs-bar {\n  float: left;\n  border-right: 1px solid #e8e8e8;\n  margin-right: -1px;\n  margin-bottom: 0;\n}\n.ant-tabs-vertical.ant-tabs-left > .ant-tabs-bar .ant-tabs-tab {\n  text-align: right;\n}\n.ant-tabs-vertical.ant-tabs-left > .ant-tabs-bar .ant-tabs-nav-container {\n  margin-right: -1px;\n}\n.ant-tabs-vertical.ant-tabs-left > .ant-tabs-bar .ant-tabs-nav-wrap {\n  margin-right: -1px;\n}\n.ant-tabs-vertical.ant-tabs-left > .ant-tabs-bar .ant-tabs-ink-bar {\n  right: 1px;\n}\n.ant-tabs-vertical.ant-tabs-left > .ant-tabs-content {\n  padding-left: 24px;\n  border-left: 1px solid #e8e8e8;\n}\n.ant-tabs-vertical.ant-tabs-right > .ant-tabs-bar {\n  float: right;\n  border-left: 1px solid #e8e8e8;\n  margin-left: -1px;\n  margin-bottom: 0;\n}\n.ant-tabs-vertical.ant-tabs-right > .ant-tabs-bar .ant-tabs-nav-container {\n  margin-left: -1px;\n}\n.ant-tabs-vertical.ant-tabs-right > .ant-tabs-bar .ant-tabs-nav-wrap {\n  margin-left: -1px;\n}\n.ant-tabs-vertical.ant-tabs-right > .ant-tabs-bar .ant-tabs-ink-bar {\n  left: 1px;\n}\n.ant-tabs-vertical.ant-tabs-right > .ant-tabs-content {\n  padding-right: 24px;\n  border-right: 1px solid #e8e8e8;\n}\n.ant-tabs-bottom > .ant-tabs-bar {\n  margin-bottom: 0;\n  margin-top: 16px;\n}\n.ant-tabs-top .ant-tabs-ink-bar-animated,\n.ant-tabs-bottom .ant-tabs-ink-bar-animated {\n  -webkit-transition: width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.ant-tabs-left .ant-tabs-ink-bar-animated,\n.ant-tabs-right .ant-tabs-ink-bar-animated {\n  -webkit-transition: height 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: height 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), height 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), height 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.no-flex > .ant-tabs-content-animated,\n.ant-tabs-no-animation > .ant-tabs-content-animated,\n.ant-tabs-vertical > .ant-tabs-content-animated {\n  -webkit-transform: none !important;\n      -ms-transform: none !important;\n          transform: none !important;\n  margin-left: 0 !important;\n}\n.no-flex > .ant-tabs-content > .ant-tabs-tabpane-inactive,\n.ant-tabs-no-animation > .ant-tabs-content > .ant-tabs-tabpane-inactive,\n.ant-tabs-vertical > .ant-tabs-content > .ant-tabs-tabpane-inactive {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js??ref--5-1!./pages/setting/setting.css":
/*!************************************************************************!*\
  !*** ../node_modules/css-loader??ref--5-1!./pages/setting/setting.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".setting_card{\r\n    width: 100%;\r\n}\r\n.setting_form_item {\r\n    display: flex !important;\r\n}\r\n.setting_search_form{\r\n    /*margin-bottom: 24px;*/\r\n}\r\n.setting_form_item .ant-form-item-control-wrapper {\r\n    flex: 1;\r\n}\r\n.setting_system_btn_group{\r\n    margin-top: 150px;\r\n    width: 100%;\r\n    text-align: center;\r\n}", "", {"version":3,"sources":["E:/前端/jmyd-ams/pc/src/pages/setting/setting.css"],"names":[],"mappings":"AAAA;IACI,YAAY;CACf;AACD;IACI,yBAAyB;CAC5B;AACD;IACI,wBAAwB;CAC3B;AACD;IACI,QAAQ;CACX;AACD;IACI,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;CACtB","file":"setting.css","sourcesContent":[".card{\r\n    width: 100%;\r\n}\r\n.form_item {\r\n    display: flex !important;\r\n}\r\n.search_form{\r\n    /*margin-bottom: 24px;*/\r\n}\r\n.form_item :global(.ant-form-item-control-wrapper) {\r\n    flex: 1;\r\n}\r\n.system_btn_group{\r\n    margin-top: 150px;\r\n    width: 100%;\r\n    text-align: center;\r\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"card": "setting_card",
	"form_item": "setting_form_item",
	"search_form": "setting_search_form",
	"system_btn_group": "setting_system_btn_group"
};

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

/***/ "../node_modules/rc-notification/es/Notice.js":
/*!****************************************************!*\
  !*** ../node_modules/rc-notification/es/Notice.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);









var Notice = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Notice, _Component);

  function Notice() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Notice);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_ref = Notice.__proto__ || Object.getPrototypeOf(Notice)).call.apply(_ref, [this].concat(args))), _this), _this.close = function () {
      _this.clearCloseTimer();
      _this.props.onClose();
    }, _this.startCloseTimer = function () {
      if (_this.props.duration) {
        _this.closeTimer = setTimeout(function () {
          _this.close();
        }, _this.props.duration * 1000);
      }
    }, _this.clearCloseTimer = function () {
      if (_this.closeTimer) {
        clearTimeout(_this.closeTimer);
        _this.closeTimer = null;
      }
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Notice, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.startCloseTimer();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.clearCloseTimer();
    }
  }, {
    key: 'render',
    value: function render() {
      var _className;

      var props = this.props;
      var componentClass = props.prefixCls + '-notice';
      var className = (_className = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_className, '' + componentClass, 1), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_className, componentClass + '-closable', props.closable), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_className, props.className, !!props.className), _className);
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
        'div',
        { className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(className), style: props.style, onMouseEnter: this.clearCloseTimer,
          onMouseLeave: this.startCloseTimer
        },
        react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'div',
          { className: componentClass + '-content' },
          props.children
        ),
        props.closable ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
          'a',
          { tabIndex: '0', onClick: this.close, className: componentClass + '-close' },
          react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('span', { className: componentClass + '-close-x' })
        ) : null
      );
    }
  }]);

  return Notice;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Notice.propTypes = {
  duration: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any
};
Notice.defaultProps = {
  onEnd: function onEnd() {},
  onClose: function onClose() {},

  duration: 1.5,
  style: {
    right: '50%'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Notice);

/***/ }),

/***/ "../node_modules/rc-notification/es/Notification.js":
/*!**********************************************************!*\
  !*** ../node_modules/rc-notification/es/Notification.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "../node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
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
/* harmony import */ var rc_animate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rc-animate */ "../node_modules/rc-animate/es/Animate.js");
/* harmony import */ var rc_util_es_createChainedFunction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rc-util/es/createChainedFunction */ "../node_modules/rc-util/es/createChainedFunction.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Notice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Notice */ "../node_modules/rc-notification/es/Notice.js");















var seed = 0;
var now = Date.now();

function getUuid() {
  return 'rcNotification_' + now + '_' + seed++;
}

var Notification = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Notification, _Component);

  function Notification() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Notification);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (_ref = Notification.__proto__ || Object.getPrototypeOf(Notification)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      notices: []
    }, _this.add = function (notice) {
      var key = notice.key = notice.key || getUuid();
      _this.setState(function (previousState) {
        var notices = previousState.notices;
        if (!notices.filter(function (v) {
          return v.key === key;
        }).length) {
          return {
            notices: notices.concat(notice)
          };
        }
      });
    }, _this.remove = function (key) {
      _this.setState(function (previousState) {
        return {
          notices: previousState.notices.filter(function (notice) {
            return notice.key !== key;
          })
        };
      });
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Notification, [{
    key: 'getTransitionName',
    value: function getTransitionName() {
      var props = this.props;
      var transitionName = props.transitionName;
      if (!transitionName && props.animation) {
        transitionName = props.prefixCls + '-' + props.animation;
      }
      return transitionName;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this,
          _className;

      var props = this.props;
      var noticeNodes = this.state.notices.map(function (notice) {
        var onClose = Object(rc_util_es_createChainedFunction__WEBPACK_IMPORTED_MODULE_11__["default"])(_this2.remove.bind(_this2, notice.key), notice.onClose);
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          _Notice__WEBPACK_IMPORTED_MODULE_13__["default"],
          babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({
            prefixCls: props.prefixCls
          }, notice, {
            onClose: onClose
          }),
          notice.content
        );
      });
      var className = (_className = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_className, props.prefixCls, 1), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_className, props.className, !!props.className), _className);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        'div',
        { className: classnames__WEBPACK_IMPORTED_MODULE_12___default()(className), style: props.style },
        react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
          rc_animate__WEBPACK_IMPORTED_MODULE_10__["default"],
          { transitionName: this.getTransitionName() },
          noticeNodes
        )
      );
    }
  }]);

  return Notification;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Notification.propTypes = {
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  transitionName: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  animation: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object]),
  style: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object
};
Notification.defaultProps = {
  prefixCls: 'rc-notification',
  animation: 'fade',
  style: {
    top: 65,
    left: '50%'
  }
};


Notification.newInstance = function newNotificationInstance(properties, callback) {
  var _ref2 = properties || {},
      getContainer = _ref2.getContainer,
      props = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, ['getContainer']);

  var div = document.createElement('div');
  if (getContainer) {
    var root = getContainer();
    root.appendChild(div);
  } else {
    document.body.appendChild(div);
  }
  var called = false;
  function ref(notification) {
    if (called) {
      return;
    }
    called = true;
    callback({
      notice: function notice(noticeProps) {
        notification.add(noticeProps);
      },
      removeNotice: function removeNotice(key) {
        notification.remove(key);
      },

      component: notification,
      destroy: function destroy() {
        react_dom__WEBPACK_IMPORTED_MODULE_9___default.a.unmountComponentAtNode(div);
        div.parentNode.removeChild(div);
      }
    });
  }
  react_dom__WEBPACK_IMPORTED_MODULE_9___default.a.render(react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Notification, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, props, { ref: ref })), div);
};

/* harmony default export */ __webpack_exports__["default"] = (Notification);

/***/ }),

/***/ "../node_modules/rc-notification/es/index.js":
/*!***************************************************!*\
  !*** ../node_modules/rc-notification/es/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notification */ "../node_modules/rc-notification/es/Notification.js");

/* harmony default export */ __webpack_exports__["default"] = (_Notification__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../node_modules/rc-tabs/es/InkTabBarMixin.js":
/*!****************************************************!*\
  !*** ../node_modules/rc-tabs/es/InkTabBarMixin.js ***!
  \****************************************************/
/*! exports provided: getScroll, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScroll", function() { return getScroll; });
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../node_modules/rc-tabs/es/utils.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);





var isDev = "development" !== 'production';

function getScroll(w, top) {
  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
  var method = 'scroll' + (top ? 'Top' : 'Left');
  if (typeof ret !== 'number') {
    var d = w.document;
    // ie6,7,8 standard mode
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      // quirks mode
      ret = d.body[method];
    }
  }
  return ret;
}

function offset(elem) {
  var box = void 0;
  var x = void 0;
  var y = void 0;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement;
  box = elem.getBoundingClientRect();
  x = box.left;
  y = box.top;
  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;
  var w = doc.defaultView || doc.parentWindow;
  x += getScroll(w);
  y += getScroll(w, true);
  return {
    left: x, top: y
  };
}

function _componentDidUpdate(component, init) {
  var styles = component.props.styles;

  var rootNode = component.root;
  var wrapNode = component.nav || rootNode;
  var containerOffset = offset(wrapNode);
  var inkBarNode = component.inkBar;
  var activeTab = component.activeTab;
  var inkBarNodeStyle = inkBarNode.style;
  var tabBarPosition = component.props.tabBarPosition;
  if (init) {
    // prevent mount animation
    inkBarNodeStyle.display = 'none';
  }
  if (activeTab) {
    var tabNode = activeTab;
    var tabOffset = offset(tabNode);
    var transformSupported = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["isTransformSupported"])(inkBarNodeStyle);
    if (tabBarPosition === 'top' || tabBarPosition === 'bottom') {
      var left = tabOffset.left - containerOffset.left;
      var width = tabNode.offsetWidth;

      // If tabNode'width width equal to wrapNode'width when tabBarPosition is top or bottom
      // It means no css working, then ink bar should not have width until css is loaded
      // Fix https://github.com/ant-design/ant-design/issues/7564
      if (width === rootNode.offsetWidth) {
        width = 0;
      } else if (styles.inkBar && styles.inkBar.width !== undefined) {
        width = parseFloat(styles.inkBar.width, 10);
        if (width) {
          left = left + (tabNode.offsetWidth - width) / 2;
        }
      }
      // use 3d gpu to optimize render
      if (transformSupported) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["setTransform"])(inkBarNodeStyle, 'translate3d(' + left + 'px,0,0)');
        inkBarNodeStyle.width = width + 'px';
        inkBarNodeStyle.height = '';
      } else {
        inkBarNodeStyle.left = left + 'px';
        inkBarNodeStyle.top = '';
        inkBarNodeStyle.bottom = '';
        inkBarNodeStyle.right = wrapNode.offsetWidth - left - width + 'px';
      }
    } else {
      var top = tabOffset.top - containerOffset.top;
      var height = tabNode.offsetHeight;
      if (styles.inkBar && styles.inkBar.height !== undefined) {
        height = parseFloat(styles.inkBar.height, 10);
        if (height) {
          top = top + (tabNode.offsetHeight - height) / 2;
        }
      }
      if (transformSupported) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["setTransform"])(inkBarNodeStyle, 'translate3d(0,' + top + 'px,0)');
        inkBarNodeStyle.height = height + 'px';
        inkBarNodeStyle.width = '';
      } else {
        inkBarNodeStyle.left = '';
        inkBarNodeStyle.right = '';
        inkBarNodeStyle.top = top + 'px';
        inkBarNodeStyle.bottom = wrapNode.offsetHeight - top - height + 'px';
      }
    }
  }
  inkBarNodeStyle.display = activeTab ? 'block' : 'none';
}

/* harmony default export */ __webpack_exports__["default"] = ({
  getDefaultProps: function getDefaultProps() {
    return {
      inkBarAnimated: true
    };
  },
  componentDidUpdate: function componentDidUpdate() {
    _componentDidUpdate(this);
  },
  componentDidMount: function componentDidMount() {
    var _this = this;

    if (isDev) {
      // https://github.com/ant-design/ant-design/issues/8678
      this.timeout = setTimeout(function () {
        _componentDidUpdate(_this, true);
      }, 0);
    } else {
      _componentDidUpdate(this, true);
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    clearTimeout(this.timeout);
  },
  getInkBarNode: function getInkBarNode() {
    var _classnames;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        styles = _props.styles,
        inkBarAnimated = _props.inkBarAnimated;

    var className = prefixCls + '-ink-bar';
    var classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()((_classnames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, className, true), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, inkBarAnimated ? className + '-animated' : className + '-no-animated', true), _classnames));
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement('div', {
      style: styles.inkBar,
      className: classes,
      key: 'inkBar',
      ref: this.saveRef('inkBar')
    });
  }
});

/***/ }),

/***/ "../node_modules/rc-tabs/es/KeyCode.js":
/*!*********************************************!*\
  !*** ../node_modules/rc-tabs/es/KeyCode.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  /**
   * LEFT
   */
  LEFT: 37, // also NUM_WEST
  /**
   * UP
   */
  UP: 38, // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39, // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40 // also NUM_SOUTH
});

/***/ }),

/***/ "../node_modules/rc-tabs/es/RefMixin.js":
/*!**********************************************!*\
  !*** ../node_modules/rc-tabs/es/RefMixin.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  saveRef: function saveRef(name) {
    var _this = this;

    return function (node) {
      _this[name] = node;
    };
  }
});

/***/ }),

/***/ "../node_modules/rc-tabs/es/ScrollableInkTabBar.js":
/*!*********************************************************!*\
  !*** ../node_modules/rc-tabs/es/ScrollableInkTabBar.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var create_react_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! create-react-class */ "../node_modules/create-react-class/index.js");
/* harmony import */ var create_react_class__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(create_react_class__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InkTabBarMixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InkTabBarMixin */ "../node_modules/rc-tabs/es/InkTabBarMixin.js");
/* harmony import */ var _ScrollableTabBarMixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScrollableTabBarMixin */ "../node_modules/rc-tabs/es/ScrollableTabBarMixin.js");
/* harmony import */ var _TabBarMixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TabBarMixin */ "../node_modules/rc-tabs/es/TabBarMixin.js");
/* harmony import */ var _RefMixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RefMixin */ "../node_modules/rc-tabs/es/RefMixin.js");






var ScrollableInkTabBar = create_react_class__WEBPACK_IMPORTED_MODULE_0___default()({
  displayName: 'ScrollableInkTabBar',
  mixins: [_RefMixin__WEBPACK_IMPORTED_MODULE_4__["default"], _TabBarMixin__WEBPACK_IMPORTED_MODULE_3__["default"], _InkTabBarMixin__WEBPACK_IMPORTED_MODULE_1__["default"], _ScrollableTabBarMixin__WEBPACK_IMPORTED_MODULE_2__["default"]],
  render: function render() {
    var inkBarNode = this.getInkBarNode();
    var tabs = this.getTabs();
    var scrollbarNode = this.getScrollBarNode([inkBarNode, tabs]);
    return this.getRootNode(scrollbarNode);
  }
});

/* harmony default export */ __webpack_exports__["default"] = (ScrollableInkTabBar);

/***/ }),

/***/ "../node_modules/rc-tabs/es/ScrollableTabBarMixin.js":
/*!***********************************************************!*\
  !*** ../node_modules/rc-tabs/es/ScrollableTabBarMixin.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "../node_modules/rc-tabs/es/utils.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-util/es/Dom/addEventListener */ "../node_modules/rc-util/es/Dom/addEventListener.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/debounce */ "../node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_5__);







/* harmony default export */ __webpack_exports__["default"] = ({
  getDefaultProps: function getDefaultProps() {
    return {
      scrollAnimated: true,
      onPrevClick: function onPrevClick() {},
      onNextClick: function onNextClick() {}
    };
  },
  getInitialState: function getInitialState() {
    this.offset = 0;
    return {
      next: false,
      prev: false
    };
  },
  componentDidMount: function componentDidMount() {
    var _this = this;

    this.componentDidUpdate();
    this.debouncedResize = lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default()(function () {
      _this.setNextPrev();
      _this.scrollToActiveTab();
    }, 200);
    this.resizeEvent = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_4__["default"])(window, 'resize', this.debouncedResize);
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    var props = this.props;
    if (prevProps && prevProps.tabBarPosition !== props.tabBarPosition) {
      this.setOffset(0);
      return;
    }
    var nextPrev = this.setNextPrev();
        
    if (this.isNextPrevShown(this.state) !== this.isNextPrevShown(nextPrev)) {
      this.setState({}, this.scrollToActiveTab);
    } else if (!prevProps || props.activeKey !== prevProps.activeKey) {
            this.scrollToActiveTab();
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    if (this.resizeEvent) {
      this.resizeEvent.remove();
    }
    if (this.debouncedResize && this.debouncedResize.cancel) {
      this.debouncedResize.cancel();
    }
  },
  setNextPrev: function setNextPrev() {
    var navNode = this.nav;
    var navNodeWH = this.getScrollWH(navNode);
    var containerWH = this.getOffsetWH(this.container);
    var navWrapNodeWH = this.getOffsetWH(this.navWrap);
    var offset = this.offset;

    var minOffset = containerWH - navNodeWH;
    var _state = this.state,
        next = _state.next,
        prev = _state.prev;

    if (minOffset >= 0) {
      next = false;
      this.setOffset(0, false);
      offset = 0;
    } else if (minOffset < offset) {
      next = true;
    } else {
      next = false;
                        var realOffset = navWrapNodeWH - navNodeWH;
      this.setOffset(realOffset, false);
      offset = realOffset;
    }

    if (offset < 0) {
      prev = true;
    } else {
      prev = false;
    }

    this.setNext(next);
    this.setPrev(prev);
    return {
      next: next,
      prev: prev
    };
  },
  getOffsetWH: function getOffsetWH(node) {
    var tabBarPosition = this.props.tabBarPosition;
    var prop = 'offsetWidth';
    if (tabBarPosition === 'left' || tabBarPosition === 'right') {
      prop = 'offsetHeight';
    }
    return node[prop];
  },
  getScrollWH: function getScrollWH(node) {
    var tabBarPosition = this.props.tabBarPosition;
    var prop = 'scrollWidth';
    if (tabBarPosition === 'left' || tabBarPosition === 'right') {
      prop = 'scrollHeight';
    }
    return node[prop];
  },
  getOffsetLT: function getOffsetLT(node) {
    var tabBarPosition = this.props.tabBarPosition;
    var prop = 'left';
    if (tabBarPosition === 'left' || tabBarPosition === 'right') {
      prop = 'top';
    }
    return node.getBoundingClientRect()[prop];
  },
  setOffset: function setOffset(offset) {
    var checkNextPrev = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var target = Math.min(0, offset);
    if (this.offset !== target) {
      this.offset = target;
      var navOffset = {};
      var tabBarPosition = this.props.tabBarPosition;
      var navStyle = this.nav.style;
      var transformSupported = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isTransformSupported"])(navStyle);
      if (tabBarPosition === 'left' || tabBarPosition === 'right') {
        if (transformSupported) {
          navOffset = {
            value: 'translate3d(0,' + target + 'px,0)'
          };
        } else {
          navOffset = {
            name: 'top',
            value: target + 'px'
          };
        }
      } else {
        if (transformSupported) {
          navOffset = {
            value: 'translate3d(' + target + 'px,0,0)'
          };
        } else {
          navOffset = {
            name: 'left',
            value: target + 'px'
          };
        }
      }
      if (transformSupported) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["setTransform"])(navStyle, navOffset.value);
      } else {
        navStyle[navOffset.name] = navOffset.value;
      }
      if (checkNextPrev) {
        this.setNextPrev();
      }
    }
  },
  setPrev: function setPrev(v) {
    if (this.state.prev !== v) {
      this.setState({
        prev: v
      });
    }
  },
  setNext: function setNext(v) {
    if (this.state.next !== v) {
      this.setState({
        next: v
      });
    }
  },
  isNextPrevShown: function isNextPrevShown(state) {
    if (state) {
      return state.next || state.prev;
    }
    return this.state.next || this.state.prev;
  },
  prevTransitionEnd: function prevTransitionEnd(e) {
    if (e.propertyName !== 'opacity') {
      return;
    }
    var container = this.container;

    this.scrollToActiveTab({
      target: container,
      currentTarget: container
    });
  },
  scrollToActiveTab: function scrollToActiveTab(e) {
    var activeTab = this.activeTab,
        navWrap = this.navWrap;

    if (e && e.target !== e.currentTarget || !activeTab) {
      return;
    }

        var needToSroll = this.isNextPrevShown() && this.lastNextPrevShown;
    this.lastNextPrevShown = this.isNextPrevShown();
    if (!needToSroll) {
      return;
    }

    var activeTabWH = this.getScrollWH(activeTab);
    var navWrapNodeWH = this.getOffsetWH(navWrap);
    var offset = this.offset;

    var wrapOffset = this.getOffsetLT(navWrap);
    var activeTabOffset = this.getOffsetLT(activeTab);
    if (wrapOffset > activeTabOffset) {
      offset += wrapOffset - activeTabOffset;
      this.setOffset(offset);
    } else if (wrapOffset + navWrapNodeWH < activeTabOffset + activeTabWH) {
      offset -= activeTabOffset + activeTabWH - (wrapOffset + navWrapNodeWH);
      this.setOffset(offset);
    }
  },
  prev: function prev(e) {
    this.props.onPrevClick(e);
    var navWrapNode = this.navWrap;
    var navWrapNodeWH = this.getOffsetWH(navWrapNode);
    var offset = this.offset;

    this.setOffset(offset + navWrapNodeWH);
  },
  next: function next(e) {
    this.props.onNextClick(e);
    var navWrapNode = this.navWrap;
    var navWrapNodeWH = this.getOffsetWH(navWrapNode);
    var offset = this.offset;

    this.setOffset(offset - navWrapNodeWH);
  },
  getScrollBarNode: function getScrollBarNode(content) {
    var _classnames, _classnames2, _classnames3, _classnames4;

    var _state2 = this.state,
        next = _state2.next,
        prev = _state2.prev;
    var _props = this.props,
        prefixCls = _props.prefixCls,
        scrollAnimated = _props.scrollAnimated;

    var showNextPrev = prev || next;

    var prevButton = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
      'span',
      {
        onClick: prev ? this.prev : null,
        unselectable: 'unselectable',
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_classnames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, prefixCls + '-tab-prev', 1), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, prefixCls + '-tab-btn-disabled', !prev), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, prefixCls + '-tab-arrow-show', showNextPrev), _classnames)),
        onTransitionEnd: this.prevTransitionEnd
      },
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement('span', { className: prefixCls + '-tab-prev-icon' })
    );

    var nextButton = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
      'span',
      {
        onClick: next ? this.next : null,
        unselectable: 'unselectable',
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_classnames2 = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames2, prefixCls + '-tab-next', 1), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames2, prefixCls + '-tab-btn-disabled', !next), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames2, prefixCls + '-tab-arrow-show', showNextPrev), _classnames2))
      },
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement('span', { className: prefixCls + '-tab-next-icon' })
    );

    var navClassName = prefixCls + '-nav';
    var navClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()((_classnames3 = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames3, navClassName, true), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames3, scrollAnimated ? navClassName + '-animated' : navClassName + '-no-animated', true), _classnames3));

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
      'div',
      {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_classnames4 = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames4, prefixCls + '-nav-container', 1), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames4, prefixCls + '-nav-container-scrolling', showNextPrev), _classnames4)),
        key: 'container',
        ref: this.saveRef('container')
      },
      prevButton,
      nextButton,
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
        'div',
        { className: prefixCls + '-nav-wrap', ref: this.saveRef('navWrap') },
        react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
          'div',
          { className: prefixCls + '-nav-scroll' },
          react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
            'div',
            { className: navClasses, ref: this.saveRef('nav') },
            content
          )
        )
      )
    );
  }
});

/***/ }),

/***/ "../node_modules/rc-tabs/es/TabBarMixin.js":
/*!*************************************************!*\
  !*** ../node_modules/rc-tabs/es/TabBarMixin.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "../node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! warning */ "../node_modules/warning/browser.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "../node_modules/rc-tabs/es/utils.js");








/* harmony default export */ __webpack_exports__["default"] = ({
  getDefaultProps: function getDefaultProps() {
    return {
      styles: {}
    };
  },
  onTabClick: function onTabClick(key) {
    this.props.onTabClick(key);
  },
  getTabs: function getTabs() {
    var _this = this;

    var _props = this.props,
        children = _props.panels,
        activeKey = _props.activeKey,
        prefixCls = _props.prefixCls,
        tabBarGutter = _props.tabBarGutter;

    var rst = [];

    react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.forEach(children, function (child, index) {
      if (!child) {
        return;
      }
      var key = child.key;
      var cls = activeKey === key ? prefixCls + '-tab-active' : '';
      cls += ' ' + prefixCls + '-tab';
      var events = {};
      if (child.props.disabled) {
        cls += ' ' + prefixCls + '-tab-disabled';
      } else {
        events = {
          onClick: _this.onTabClick.bind(_this, key)
        };
      }
      var ref = {};
      if (activeKey === key) {
        ref.ref = _this.saveRef('activeTab');
      }
      warning__WEBPACK_IMPORTED_MODULE_5___default()('tab' in child.props, 'There must be `tab` property on children of Tabs.');
      rst.push(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
        'div',
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({
          role: 'tab',
          'aria-disabled': child.props.disabled ? 'true' : 'false',
          'aria-selected': activeKey === key ? 'true' : 'false'
        }, events, {
          className: cls,
          key: key,
          style: { marginRight: tabBarGutter && index === children.length - 1 ? 0 : tabBarGutter }
        }, ref),
        child.props.tab
      ));
    });

    return rst;
  },
  getRootNode: function getRootNode(contents) {
    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        onKeyDown = _props2.onKeyDown,
        className = _props2.className,
        extraContent = _props2.extraContent,
        style = _props2.style,
        tabBarPosition = _props2.tabBarPosition,
        restProps = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_props2, ['prefixCls', 'onKeyDown', 'className', 'extraContent', 'style', 'tabBarPosition']);

    var cls = classnames__WEBPACK_IMPORTED_MODULE_4___default()(prefixCls + '-bar', babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, className, !!className));
    var topOrBottom = tabBarPosition === 'top' || tabBarPosition === 'bottom';
    var tabBarExtraContentStyle = topOrBottom ? { float: 'right' } : {};
    var extraContentStyle = extraContent && extraContent.props ? extraContent.props.style : {};
    var children = contents;
    if (extraContent) {
      children = [Object(react__WEBPACK_IMPORTED_MODULE_3__["cloneElement"])(extraContent, {
        key: 'extra',
        style: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, tabBarExtraContentStyle, extraContentStyle)
      }), Object(react__WEBPACK_IMPORTED_MODULE_3__["cloneElement"])(contents, { key: 'content' })];
      children = topOrBottom ? children : children.reverse();
    }
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
      'div',
      babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({
        role: 'tablist',
        className: cls,
        tabIndex: '0',
        ref: this.saveRef('root'),
        onKeyDown: onKeyDown,
        style: style
      }, Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getDataAttr"])(restProps)),
      children
    );
  }
});

/***/ }),

/***/ "../node_modules/rc-tabs/es/TabContent.js":
/*!************************************************!*\
  !*** ../node_modules/rc-tabs/es/TabContent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var create_react_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! create-react-class */ "../node_modules/create-react-class/index.js");
/* harmony import */ var create_react_class__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(create_react_class__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "../node_modules/rc-tabs/es/utils.js");








var TabContent = create_react_class__WEBPACK_IMPORTED_MODULE_3___default()({
  displayName: 'TabContent',
  propTypes: {
    animated: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    animatedWithMargin: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
    activeKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    style: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
    tabBarPosition: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      animated: true
    };
  },
  getTabPanes: function getTabPanes() {
    var props = this.props;
    var activeKey = props.activeKey;
    var children = props.children;
    var newChildren = [];

    react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.forEach(children, function (child) {
      if (!child) {
        return;
      }
      var key = child.key;
      var active = activeKey === key;
      newChildren.push(react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(child, {
        active: active,
        destroyInactiveTabPane: props.destroyInactiveTabPane,
        rootPrefixCls: props.prefixCls
      }));
    });

    return newChildren;
  },
  render: function render() {
    var _classnames;

    var props = this.props;
    var prefixCls = props.prefixCls,
        children = props.children,
        activeKey = props.activeKey,
        tabBarPosition = props.tabBarPosition,
        animated = props.animated,
        animatedWithMargin = props.animatedWithMargin;
    var style = props.style;

    var classes = classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classnames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classnames, prefixCls + '-content', true), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classnames, animated ? prefixCls + '-content-animated' : prefixCls + '-content-no-animated', true), _classnames));
    if (animated) {
      var activeIndex = Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getActiveIndex"])(children, activeKey);
      if (activeIndex !== -1) {
        var animatedStyle = animatedWithMargin ? Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getMarginStyle"])(activeIndex, tabBarPosition) : Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getTransformPropValue"])(Object(_utils__WEBPACK_IMPORTED_MODULE_6__["getTransformByIndex"])(activeIndex, tabBarPosition));
        style = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, style, animatedStyle);
      } else {
        style = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, style, {
          display: 'none'
        });
      }
    }
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      'div',
      {
        className: classes,
        style: style
      },
      this.getTabPanes()
    );
  }
});

/* harmony default export */ __webpack_exports__["default"] = (TabContent);

/***/ }),

/***/ "../node_modules/rc-tabs/es/TabPane.js":
/*!*********************************************!*\
  !*** ../node_modules/rc-tabs/es/TabPane.js ***!
  \*********************************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var create_react_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! create-react-class */ "../node_modules/create-react-class/index.js");
/* harmony import */ var create_react_class__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(create_react_class__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "../node_modules/rc-tabs/es/utils.js");









var TabPane = create_react_class__WEBPACK_IMPORTED_MODULE_5___default()({
  displayName: 'TabPane',
  propTypes: {
    className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    active: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    style: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
    destroyInactiveTabPane: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    forceRender: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
    placeholder: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node
  },
  getDefaultProps: function getDefaultProps() {
    return { placeholder: null };
  },
  render: function render() {
    var _classnames;

    var _props = this.props,
        className = _props.className,
        destroyInactiveTabPane = _props.destroyInactiveTabPane,
        active = _props.active,
        forceRender = _props.forceRender,
        rootPrefixCls = _props.rootPrefixCls,
        style = _props.style,
        children = _props.children,
        placeholder = _props.placeholder,
        restProps = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_props, ['className', 'destroyInactiveTabPane', 'active', 'forceRender', 'rootPrefixCls', 'style', 'children', 'placeholder']);

    this._isActived = this._isActived || active;
    var prefixCls = rootPrefixCls + '-tabpane';
    var cls = classnames__WEBPACK_IMPORTED_MODULE_6___default()((_classnames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classnames, prefixCls, 1), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classnames, prefixCls + '-inactive', !active), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classnames, prefixCls + '-active', active), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classnames, className, className), _classnames));
    var isRender = destroyInactiveTabPane ? active : this._isActived;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
      'div',
      babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        style: style,
        role: 'tabpanel',
        'aria-hidden': active ? 'false' : 'true',
        className: cls
      }, Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getDataAttr"])(restProps)),
      isRender || forceRender ? children : placeholder
    );
  }
});

/* harmony default export */ __webpack_exports__["default"] = (TabPane);

/***/ }),

/***/ "../node_modules/rc-tabs/es/Tabs.js":
/*!******************************************!*\
  !*** ../node_modules/rc-tabs/es/Tabs.js ***!
  \******************************************/
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
/* harmony import */ var _KeyCode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./KeyCode */ "../node_modules/rc-tabs/es/KeyCode.js");
/* harmony import */ var _TabPane__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TabPane */ "../node_modules/rc-tabs/es/TabPane.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils */ "../node_modules/rc-tabs/es/utils.js");














function noop() {}

function getDefaultActiveKey(props) {
  var activeKey = void 0;
  react__WEBPACK_IMPORTED_MODULE_7___default.a.Children.forEach(props.children, function (child) {
    if (child && !activeKey && !child.props.disabled) {
      activeKey = child.key;
    }
  });
  return activeKey;
}

function activeKeyIsValid(props, key) {
  var keys = react__WEBPACK_IMPORTED_MODULE_7___default.a.Children.map(props.children, function (child) {
    return child && child.key;
  });
  return keys.indexOf(key) >= 0;
}

var Tabs = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Tabs, _React$Component);

  function Tabs(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Tabs);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

    _initialiseProps.call(_this);

    var activeKey = void 0;
    if ('activeKey' in props) {
      activeKey = props.activeKey;
    } else if ('defaultActiveKey' in props) {
      activeKey = props.defaultActiveKey;
    } else {
      activeKey = getDefaultActiveKey(props);
    }

    _this.state = {
      activeKey: activeKey
    };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Tabs, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('activeKey' in nextProps) {
        this.setState({
          activeKey: nextProps.activeKey
        });
      } else if (!activeKeyIsValid(nextProps, this.state.activeKey)) {
        // https://github.com/ant-design/ant-design/issues/7093
        this.setState({
          activeKey: getDefaultActiveKey(nextProps)
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var props = this.props;

      var prefixCls = props.prefixCls,
          tabBarPosition = props.tabBarPosition,
          className = props.className,
          renderTabContent = props.renderTabContent,
          renderTabBar = props.renderTabBar,
          destroyInactiveTabPane = props.destroyInactiveTabPane,
          restProps = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(props, ['prefixCls', 'tabBarPosition', 'className', 'renderTabContent', 'renderTabBar', 'destroyInactiveTabPane']);

      var cls = classnames__WEBPACK_IMPORTED_MODULE_11___default()((_classnames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classnames, prefixCls, 1), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classnames, prefixCls + '-' + tabBarPosition, 1), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classnames, className, !!className), _classnames));

      this.tabBar = renderTabBar();
      var contents = [react__WEBPACK_IMPORTED_MODULE_7___default.a.cloneElement(this.tabBar, {
        prefixCls: prefixCls,
        key: 'tabBar',
        onKeyDown: this.onNavKeyDown,
        tabBarPosition: tabBarPosition,
        onTabClick: this.onTabClick,
        panels: props.children,
        activeKey: this.state.activeKey
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.cloneElement(renderTabContent(), {
        prefixCls: prefixCls,
        tabBarPosition: tabBarPosition,
        activeKey: this.state.activeKey,
        destroyInactiveTabPane: destroyInactiveTabPane,
        children: props.children,
        onChange: this.setActiveKey,
        key: 'tabContent'
      })];
      if (tabBarPosition === 'bottom') {
        contents.reverse();
      }
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(
        'div',
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          className: cls,
          style: props.style
        }, Object(_utils__WEBPACK_IMPORTED_MODULE_12__["getDataAttr"])(restProps)),
        contents
      );
    }
  }]);

  return Tabs;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onTabClick = function (activeKey) {
    if (_this2.tabBar.props.onTabClick) {
      _this2.tabBar.props.onTabClick(activeKey);
    }
    _this2.setActiveKey(activeKey);
  };

  this.onNavKeyDown = function (e) {
    var eventKeyCode = e.keyCode;
    if (eventKeyCode === _KeyCode__WEBPACK_IMPORTED_MODULE_9__["default"].RIGHT || eventKeyCode === _KeyCode__WEBPACK_IMPORTED_MODULE_9__["default"].DOWN) {
      e.preventDefault();
      var nextKey = _this2.getNextActiveKey(true);
      _this2.onTabClick(nextKey);
    } else if (eventKeyCode === _KeyCode__WEBPACK_IMPORTED_MODULE_9__["default"].LEFT || eventKeyCode === _KeyCode__WEBPACK_IMPORTED_MODULE_9__["default"].UP) {
      e.preventDefault();
      var previousKey = _this2.getNextActiveKey(false);
      _this2.onTabClick(previousKey);
    }
  };

  this.setActiveKey = function (activeKey) {
    if (_this2.state.activeKey !== activeKey) {
      if (!('activeKey' in _this2.props)) {
        _this2.setState({
          activeKey: activeKey
        });
      }
      _this2.props.onChange(activeKey);
    }
  };

  this.getNextActiveKey = function (next) {
    var activeKey = _this2.state.activeKey;
    var children = [];
    react__WEBPACK_IMPORTED_MODULE_7___default.a.Children.forEach(_this2.props.children, function (c) {
      if (c && !c.props.disabled) {
        if (next) {
          children.push(c);
        } else {
          children.unshift(c);
        }
      }
    });
    var length = children.length;
    var ret = length && children[0].key;
    children.forEach(function (child, i) {
      if (child.key === activeKey) {
        if (i === length - 1) {
          ret = children[0].key;
        } else {
          ret = children[i + 1].key;
        }
      }
    });
    return ret;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Tabs);


Tabs.propTypes = {
  destroyInactiveTabPane: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  renderTabBar: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  renderTabContent: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  tabBarPosition: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  activeKey: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  defaultActiveKey: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
};

Tabs.defaultProps = {
  prefixCls: 'rc-tabs',
  destroyInactiveTabPane: false,
  onChange: noop,
  tabBarPosition: 'top',
  style: {}
};

Tabs.TabPane = _TabPane__WEBPACK_IMPORTED_MODULE_10__["default"];

/***/ }),

/***/ "../node_modules/rc-tabs/es/index.js":
/*!*******************************************!*\
  !*** ../node_modules/rc-tabs/es/index.js ***!
  \*******************************************/
/*! exports provided: default, TabPane, TabContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tabs */ "../node_modules/rc-tabs/es/Tabs.js");
/* harmony import */ var _TabPane__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TabPane */ "../node_modules/rc-tabs/es/TabPane.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabPane", function() { return _TabPane__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _TabContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TabContent */ "../node_modules/rc-tabs/es/TabContent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabContent", function() { return _TabContent__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/* harmony default export */ __webpack_exports__["default"] = (_Tabs__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "../node_modules/rc-tabs/es/utils.js":
/*!*******************************************!*\
  !*** ../node_modules/rc-tabs/es/utils.js ***!
  \*******************************************/
/*! exports provided: toArray, getActiveIndex, getActiveKey, setTransform, isTransformSupported, setTransition, getTransformPropValue, isVertical, getTransformByIndex, getMarginStyle, getStyle, setPxStyle, getDataAttr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveIndex", function() { return getActiveIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveKey", function() { return getActiveKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTransform", function() { return setTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTransformSupported", function() { return isTransformSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTransition", function() { return setTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransformPropValue", function() { return getTransformPropValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVertical", function() { return isVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransformByIndex", function() { return getTransformByIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarginStyle", function() { return getMarginStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPxStyle", function() { return setPxStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataAttr", function() { return getDataAttr; });
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function toArray(children) {
  // allow [c,[a,b]]
  var c = [];
  react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.forEach(children, function (child) {
    if (child) {
      c.push(child);
    }
  });
  return c;
}

function getActiveIndex(children, activeKey) {
  var c = toArray(children);
  for (var i = 0; i < c.length; i++) {
    if (c[i].key === activeKey) {
      return i;
    }
  }
  return -1;
}

function getActiveKey(children, index) {
  var c = toArray(children);
  return c[index].key;
}

function setTransform(style, v) {
  style.transform = v;
  style.webkitTransform = v;
  style.mozTransform = v;
}

function isTransformSupported(style) {
  return 'transform' in style || 'webkitTransform' in style || 'MozTransform' in style;
}

function setTransition(style, v) {
  style.transition = v;
  style.webkitTransition = v;
  style.MozTransition = v;
}
function getTransformPropValue(v) {
  return {
    transform: v,
    WebkitTransform: v,
    MozTransform: v
  };
}

function isVertical(tabBarPosition) {
  return tabBarPosition === 'left' || tabBarPosition === 'right';
}

function getTransformByIndex(index, tabBarPosition) {
  var translate = isVertical(tabBarPosition) ? 'translateY' : 'translateX';
  return translate + '(' + -index * 100 + '%) translateZ(0)';
}

function getMarginStyle(index, tabBarPosition) {
  var marginDirection = isVertical(tabBarPosition) ? 'marginTop' : 'marginLeft';
  return babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, marginDirection, -index * 100 + '%');
}

function getStyle(el, property) {
  return +getComputedStyle(el).getPropertyValue(property).replace('px', '');
}

function setPxStyle(el, value, vertical) {
  value = vertical ? '0px, ' + value + 'px, 0px' : value + 'px, 0px, 0px';
  setTransform(el.style, 'translate3d(' + value + ')');
}

function getDataAttr(props) {
  return Object.keys(props).reduce(function (prev, key) {
    if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
      prev[key] = props[key];
    }
    return prev;
  }, {});
}

/***/ }),

/***/ "./components/update-modal.js":
/*!************************************!*\
  !*** ./components/update-modal.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modal = __webpack_require__(/*! antd/es/modal */ "../node_modules/antd/es/modal/index.js");

var _modal2 = _interopRequireDefault(_modal);

var _alert = __webpack_require__(/*! antd/es/alert */ "../node_modules/antd/es/alert/index.js");

var _alert2 = _interopRequireDefault(_alert);

var _form = __webpack_require__(/*! antd/es/form */ "../node_modules/antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _input = __webpack_require__(/*! antd/es/input */ "../node_modules/antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _button = __webpack_require__(/*! antd/es/button */ "../node_modules/antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/modal/style/css */ "../node_modules/antd/es/modal/style/css.js");

__webpack_require__(/*! antd/es/alert/style/css */ "../node_modules/antd/es/alert/style/css.js");

__webpack_require__(/*! antd/es/form/style/css */ "../node_modules/antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "../node_modules/antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "../node_modules/antd/es/button/style/css.js");

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UpdateModal = function (_React$Component) {
  _inherits(UpdateModal, _React$Component);

  function UpdateModal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, UpdateModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UpdateModal.__proto__ || Object.getPrototypeOf(UpdateModal)).call.apply(_ref, [this].concat(args))), _this), _this.setValue = function (type) {
      _this.props.form.setFields({
        task_type_name: {
          value: type.task_type_name
        },
        time_warn: {
          value: type.time_warn
        },
        time_out: {
          value: type.time_out
        }
      });
    }, _this.hasErrors = function (fieldsError) {
      return Object.keys(fieldsError).some(function (field) {
        return fieldsError[field];
      });
    }, _this.ensure = function () {
      var value = _this.props.form.getFieldsValue();
      var type = _this.props.type;
      _this.props.ensure(_extends({
        task_type_id: type.task_type_id
      }, value));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(UpdateModal, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          visible = _props.visible,
          close = _props.close,
          type = _props.type;
      var _props$form = this.props.form,
          getFieldDecorator = _props$form.getFieldDecorator,
          isFieldTouched = _props$form.isFieldTouched,
          getFieldError = _props$form.getFieldError,
          getFieldsError = _props$form.getFieldsError;

      var typeNameErr = isFieldTouched('task_type_name') && getFieldError('task_type_name');
      var timeWarnErr = isFieldTouched('time_warn') && getFieldError('time_warn');
      var timeOutErr = isFieldTouched('time_out') && getFieldError('time_out');
      return _react2.default.createElement(
        _modal2.default,
        {
          footer: _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              _button2.default,
              { onClick: function onClick() {
                  return close();
                } },
              '\u53D6\u6D88'
            ),
            _react2.default.createElement(
              _button2.default,
              { type: 'primary', onClick: function onClick() {
                  return _this2.ensure();
                }, disabled: this.hasErrors(getFieldsError(['task_type_name', 'time_warn', 'time_out'])) },
              '\u786E\u8BA4'
            )
          ),
          visible: visible, title: '你正在编辑 ' + type.task_type_name },
        _react2.default.createElement(
          _form2.default,
          null,
          _react2.default.createElement(
            _form2.default.Item,
            {
              validateStatus: typeNameErr ? 'error' : '', help: typeNameErr || '',
              label: '\u4EFB\u52A1\u7C7B\u578B' },
            getFieldDecorator('task_type_name', {
              rules: [{
                required: true,
                message: '请输入任务类型名称'
              }]
            })(_react2.default.createElement(_input2.default, { onChange: function onChange() {
                return _this2.handleChange();
              }, disabled: true }))
          ),
          _react2.default.createElement(
            _form2.default.Item,
            {
              validateStatus: timeWarnErr ? 'error' : '', help: timeWarnErr || '',
              label: '\u9884\u8B66\u65F6\u95F4' },
            getFieldDecorator('time_warn', {
              rules: [{
                required: true,
                message: '请输入预警时间'
              }]
            })(_react2.default.createElement(_input2.default, { addonAfter: '小时 ' }))
          ),
          _react2.default.createElement(
            _form2.default.Item,
            {
              validateStatus: timeOutErr ? 'error' : '', help: timeOutErr || '',
              label: '\u8D85\u65F6\u65F6\u95F4' },
            getFieldDecorator('time_out', {
              rules: [{
                required: true,
                message: '请输入超时时间'
              }]
            })(_react2.default.createElement(_input2.default, { addonAfter: '小时' }))
          )
        ),
        _react2.default.createElement(_alert2.default, { type: 'warning', message: '\u6CE8\u610F\uFF1A\u7F16\u8F91\u8BE5\u4EFB\u52A1\u7C7B\u578B\u7684\u9884\u8B66\u65F6\u95F4\u53CA\u8D85\u65F6\u65F6\u95F4\u5C06\u4F1A\u5F71\u54CD\u76F8\u540C\u4EFB\u52A1\u7C7B\u578B\u7684\u9884\u8B66\u65F6\u95F4\u548C\u8D85\u65F6\u65F6\u95F4' })
      );
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.type.task_type_id !== this.props.type.task_type_id) {
        this.setValue(nextProps.type);
      }
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return UpdateModal;
}(_react2.default.Component);

var UpdateModalForm = _form2.default.create()(UpdateModal);
var _default = UpdateModalForm;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(UpdateModal, 'UpdateModal', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\components\\update-modal.js');
  reactHotLoader.register(UpdateModalForm, 'UpdateModalForm', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\components\\update-modal.js');
  reactHotLoader.register(_default, 'default', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\components\\update-modal.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./helpers/handle-formdata.js":
/*!************************************!*\
  !*** ./helpers/handle-formdata.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

var handleFormData = function handleFormData(data) {
    var ret = new FormData();
    Object.keys(data).map(function (k) {
        if (Array.isArray(data[k])) {
            data[k].forEach(function (d) {
                ret.append(k, d);
            });
        } else {
            ret.append(k, data[k]);
        }
    });
    return ret;
};
var _default = handleFormData;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(handleFormData, "handleFormData", "E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\helpers\\handle-formdata.js");
    reactHotLoader.register(_default, "default", "E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\helpers\\handle-formdata.js");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./helpers/handle-json.js":
/*!********************************!*\
  !*** ./helpers/handle-json.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

var handleJson = function handleJson(data) {
    return JSON.stringify(data);
};
var _default = handleJson;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(handleJson, "handleJson", "E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\helpers\\handle-json.js");
    reactHotLoader.register(_default, "default", "E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\helpers\\handle-json.js");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./helpers/request.js":
/*!****************************!*\
  !*** ./helpers/request.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _handleJson = __webpack_require__(/*! ./handle-json */ "./helpers/handle-json.js");

var _handleJson2 = _interopRequireDefault(_handleJson);

var _handleFormdata = __webpack_require__(/*! ./handle-formdata */ "./helpers/handle-formdata.js");

var _handleFormdata2 = _interopRequireDefault(_handleFormdata);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function request(_ref) {
    var url = _ref.url,
        _ref$method = _ref.method,
        method = _ref$method === undefined ? 'POST' : _ref$method,
        _ref$postType = _ref.postType,
        postType = _ref$postType === undefined ? 'json' : _ref$postType,
        _ref$data = _ref.data,
        data = _ref$data === undefined ? {} : _ref$data,
        _ref$success = _ref.success,
        success = _ref$success === undefined ? function () {} : _ref$success,
        _ref$fail = _ref.fail,
        fail = _ref$fail === undefined ? function () {} : _ref$fail,
        _ref$complete = _ref.complete,
        complete = _ref$complete === undefined ? function () {} : _ref$complete;

    if (!url) {
        throw new Error('url参数不可缺省');
    }
    var xml = new XMLHttpRequest();
    xml.open(method, url);
    var postData = void 0;
    switch (postType) {
        case 'json':
            xml.setRequestHeader('Content-Type', 'application/json');
            postData = (0, _handleJson2.default)(data);
            break;
        case 'formdata':
            // xml.setRequestHeader('Content-Type', "application/vnd.ms-excel");
            postData = (0, _handleFormdata2.default)(data);
            break;
        default:
            xml.setRequestHeader('Content-Type', 'application/json');
            postData = (0, _handleJson2.default)(data);
    }
    xml.onreadystatechange = function () {
        if (xml.readyState === 4) {
            if (xml.status === 200) {
                var _data = JSON.parse(xml.responseText);
                var code = _data.code;
                try {
                    if (code === undefined) throw new Error('code is not defined');
                } catch (e) {
                    _data = JSON.parse(_data);
                }
                if (parseInt(_data.code) === 200) {
                    success(_data);
                } else {
                    fail(_data);
                }
            } else {
                alert('请求遇到了问题，请稍后再尝试');
                fail();
            }
            complete();
        }
    };
    xml.send(postData);
}
var _default = request;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(request, 'request', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\helpers\\request.js');
    reactHotLoader.register(_default, 'default', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\helpers\\request.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./pages/setting/setting.css":
/*!***********************************!*\
  !*** ./pages/setting/setting.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./setting.css */ "../node_modules/css-loader/index.js??ref--5-1!./pages/setting/setting.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--5-1!./setting.css */ "../node_modules/css-loader/index.js??ref--5-1!./pages/setting/setting.css", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./setting.css */ "../node_modules/css-loader/index.js??ref--5-1!./pages/setting/setting.css");

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

/***/ "./pages/setting/setting.js":
/*!**********************************!*\
  !*** ./pages/setting/setting.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _table = __webpack_require__(/*! antd/es/table */ "../node_modules/antd/es/table/index.js");

var _table2 = _interopRequireDefault(_table);

var _card = __webpack_require__(/*! antd/es/card */ "../node_modules/antd/es/card/index.js");

var _card2 = _interopRequireDefault(_card);

var _row = __webpack_require__(/*! antd/es/row */ "../node_modules/antd/es/row/index.js");

var _row2 = _interopRequireDefault(_row);

var _button = __webpack_require__(/*! antd/es/button */ "../node_modules/antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _col = __webpack_require__(/*! antd/es/col */ "../node_modules/antd/es/col/index.js");

var _col2 = _interopRequireDefault(_col);

var _form = __webpack_require__(/*! antd/es/form */ "../node_modules/antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _input = __webpack_require__(/*! antd/es/input */ "../node_modules/antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _notification2 = __webpack_require__(/*! antd/es/notification */ "../node_modules/antd/es/notification/index.js");

var _notification3 = _interopRequireDefault(_notification2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/table/style/css */ "../node_modules/antd/es/table/style/css.js");

__webpack_require__(/*! antd/es/card/style/css */ "../node_modules/antd/es/card/style/css.js");

__webpack_require__(/*! antd/es/row/style/css */ "../node_modules/antd/es/row/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "../node_modules/antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/col/style/css */ "../node_modules/antd/es/col/style/css.js");

__webpack_require__(/*! antd/es/form/style/css */ "../node_modules/antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "../node_modules/antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/notification/style/css */ "../node_modules/antd/es/notification/style/css.js");

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/es/index.js");

var _setting = __webpack_require__(/*! ./setting.css */ "./pages/setting/setting.css");

var _setting2 = _interopRequireDefault(_setting);

var _request = __webpack_require__(/*! ../../helpers/request */ "./helpers/request.js");

var _request2 = _interopRequireDefault(_request);

var _updateModal = __webpack_require__(/*! ../../components/update-modal */ "./components/update-modal.js");

var _updateModal2 = _interopRequireDefault(_updateModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Setting = function (_React$Component) {
    _inherits(Setting, _React$Component);

    function Setting() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Setting);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Setting.__proto__ || Object.getPrototypeOf(Setting)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            taskTypeList: [],
            loop: '',
            addTypeErr: false,
            updating: false,
            updateType: {}
        }, _this.columns = [{
            title: '任务类型',
            dataIndex: 'task_type_name'
        }, {
            title: '预警时间',
            dataIndex: 'time_warn',
            render: function render(time) {
                return _react2.default.createElement(
                    'span',
                    null,
                    '\u63D0\u524D',
                    time,
                    '\u5C0F\u65F6'
                );
            }
        }, {
            title: '超时时间',
            dataIndex: 'time_out',
            render: function render(time) {
                return _react2.default.createElement(
                    'span',
                    null,
                    '\u63D0\u524D',
                    time,
                    '\u5C0F\u65F6'
                );
            }
        }, {
            title: '操作',
            dataIndex: 'task_type_id',
            render: function render(id, record) {
                return _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement(
                        'a',
                        { onClick: function onClick() {
                                return _this.updateING(record);
                            }, style: { marginRight: '8px' } },
                        '\u4FEE\u6539'
                    ),
                    _react2.default.createElement(
                        'a',
                        { onClick: function onClick() {
                                return _this.deleteType(id);
                            } },
                        '\u5220\u9664'
                    )
                );
            }
        }], _this.hasErrors = function (fieldsError) {
            return Object.keys(fieldsError).some(function (field) {
                return fieldsError[field];
            });
        }, _this.fetchTaskTypeList = function () {
            (0, _request2.default)({
                url: '/api/get_config',
                data: {},
                success: function success(data) {
                    var table = data.table,
                        loop = data.loop;

                    _this.props.form.setFields({
                        loop: {
                            value: loop
                        }
                    });
                    _this.setState({
                        taskTypeList: table || [],
                        loop: loop
                    });
                }
            });
        }, _this.handleAddTaskType = function (e) {
            e.preventDefault();
            var that = _this;
            _this.props.form.validateFields(['task_type_name', 'time_warn', 'time_out'], function (err, values) {
                if (!err) {
                    var task_type_name = values.task_type_name,
                        time_warn = values.time_warn,
                        time_out = values.time_out;

                    (0, _request2.default)({
                        url: '/api/add_type',
                        data: {
                            task_type_name: task_type_name,
                            time_warn: time_warn,
                            time_out: time_out
                        },
                        success: function success(data) {
                            _notification3.default.success({
                                message: '新增任务类型成功',
                                description: ''
                            });
                            that.props.form.setFields({
                                task_type_name: '',
                                time_warn: '',
                                time_out: ''
                            });
                            that.props.form.validateFields();
                            that.fetchTaskTypeList();
                        },
                        fail: function fail(data) {
                            _this.setState({
                                addTypeErr: '不可重复新增'
                            });
                        }
                    });
                }
            });
        }, _this.updateING = function (type) {
            _this.setState({
                updating: true,
                updateType: type
            });
        }, _this.closeModal = function () {
            _this.setState({
                updating: false
            });
        }, _this.updateType = function (_ref2) {
            var task_type_id = _ref2.task_type_id,
                time_warn = _ref2.time_warn,
                time_out = _ref2.time_out;

            (0, _request2.default)({
                url: '/api/update_type',
                data: {
                    task_type_id: task_type_id,
                    time_warn: time_warn,
                    time_out: time_out
                },
                success: function success(res) {
                    _notification3.default.success({
                        message: '修改任务类型成功'
                    });
                    _this.closeModal();
                    _this.fetchTaskTypeList();
                }
            });
        }, _this.deleteType = function (id) {
            (0, _request2.default)({
                url: '/api/delete_type',
                data: {
                    task_type_id: id
                },
                success: function success() {
                    _notification3.default.success({
                        message: '删除任务类型成功'
                    });
                    _this.fetchTaskTypeList();
                }
            });
        }, _this.handleSetLoop = function (e) {
            e.preventDefault();
            var that = _this;
            _this.props.form.validateFields(['loop'], function (err, values) {
                if (!err) {
                    (0, _request2.default)({
                        url: '/api/set_loop',
                        data: {
                            loop_time: values.loop
                        },
                        success: function success() {
                            _notification3.default.success({
                                message: '设置查询周期成功',
                                description: '\u8BBE\u7F6E\u6210\u529F\u540E\u5C06\u6BCF\u9694' + values.loop + '\u5206\u949F\u81EA\u52A8\u5237\u65B0\u4E00\u6B21'
                            });
                            that.fetchTaskTypeList();
                        }
                    });
                }
            });
        }, _this.handleChange = function () {
            _this.setState({
                addTypeErr: false
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Setting, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props$form = this.props.form,
                getFieldDecorator = _props$form.getFieldDecorator,
                isFieldTouched = _props$form.isFieldTouched,
                getFieldError = _props$form.getFieldError,
                getFieldsError = _props$form.getFieldsError;
            var _state = this.state,
                taskTypeList = _state.taskTypeList,
                loop = _state.loop,
                addTypeErr = _state.addTypeErr,
                updating = _state.updating,
                updateType = _state.updateType;

            var typeNameErr = isFieldTouched('task_type_name') && getFieldError('task_type_name') || addTypeErr;
            var timeWarnErr = isFieldTouched('time_warn') && getFieldError('time_warn');
            var timeOutErr = isFieldTouched('time_out') && getFieldError('time_out');
            var loopErr = isFieldTouched('loop') && getFieldError('loop');
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_updateModal2.default, { visible: updating, type: updateType, ensure: function ensure(value) {
                        return _this2.updateType(value);
                    }, close: function close() {
                        return _this2.closeModal();
                    } }),
                _react2.default.createElement(
                    _card2.default,
                    { title: '任务设置', className: _setting2.default.card, bordered: false },
                    _react2.default.createElement(
                        _form2.default,
                        {
                            onSubmit: this.handleAddTaskType,
                            layout: 'inline', className: _setting2.default.search_form },
                        _react2.default.createElement(
                            _row2.default,
                            { gutter: 24 },
                            _react2.default.createElement(
                                _col2.default,
                                { span: 7 },
                                _react2.default.createElement(
                                    _form2.default.Item,
                                    {
                                        validateStatus: typeNameErr ? 'error' : '', help: typeNameErr || '',
                                        label: '\u4EFB\u52A1\u7C7B\u578B', className: _setting2.default.form_item },
                                    getFieldDecorator('task_type_name', {
                                        rules: [{
                                            required: true,
                                            message: '请输入任务类型名称'
                                        }]
                                    })(_react2.default.createElement(_input2.default, { onChange: function onChange() {
                                            return _this2.handleChange();
                                        } }))
                                )
                            ),
                            _react2.default.createElement(
                                _col2.default,
                                { span: 7 },
                                _react2.default.createElement(
                                    _form2.default.Item,
                                    {
                                        validateStatus: timeWarnErr ? 'error' : '', help: timeWarnErr || '',
                                        label: '\u9884\u8B66\u65F6\u95F4', className: _setting2.default.form_item },
                                    getFieldDecorator('time_warn', {
                                        rules: [{
                                            required: true,
                                            message: '请输入预警时间'
                                        }]
                                    })(_react2.default.createElement(_input2.default, { addonAfter: '小时 ' }))
                                )
                            ),
                            _react2.default.createElement(
                                _col2.default,
                                { span: 7 },
                                _react2.default.createElement(
                                    _form2.default.Item,
                                    {
                                        validateStatus: timeOutErr ? 'error' : '', help: timeOutErr || '',
                                        label: '\u8D85\u65F6\u65F6\u95F4', className: _setting2.default.form_item },
                                    getFieldDecorator('time_out', {
                                        rules: [{
                                            required: true,
                                            message: '请输入超时时间'
                                        }]
                                    })(_react2.default.createElement(_input2.default, { addonAfter: '小时' }))
                                )
                            ),
                            _react2.default.createElement(
                                _col2.default,
                                null,
                                _react2.default.createElement(
                                    _form2.default.Item,
                                    null,
                                    _react2.default.createElement(
                                        _button2.default,
                                        {
                                            disabled: this.hasErrors(getFieldsError(['task_type_name', 'time_warn', 'time_out'])),
                                            type: 'primary', icon: 'plus', htmlType: 'submit' },
                                        '\u65B0\u589E'
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _card2.default,
                    { className: _setting2.default.card, bordered: false },
                    _react2.default.createElement(_table2.default, { columns: this.columns, dataSource: taskTypeList, rowKey: 'task_type_id', pagination: false })
                ),
                _react2.default.createElement(
                    _card2.default,
                    { title: '系统设置', className: _setting2.default.card, bordered: false },
                    _react2.default.createElement(
                        _form2.default,
                        {
                            name: 'form2',
                            onSubmit: this.handleSetLoop,
                            layout: 'inline', className: _setting2.default.search_form },
                        _react2.default.createElement(
                            _row2.default,
                            { gutter: 24 },
                            _react2.default.createElement(
                                _col2.default,
                                { span: 8 },
                                _react2.default.createElement(
                                    _form2.default.Item,
                                    {
                                        validateStatus: loopErr ? 'error' : '', help: loopErr || '',
                                        label: '\u67E5\u8BE2\u5468\u671F', className: _setting2.default.form_item },
                                    getFieldDecorator('loop', {
                                        initialValue: loop,
                                        rules: [{
                                            required: true,
                                            message: '请输入查询周期'
                                        }, {
                                            validator: function validator(rule, value, cb) {
                                                return parseFloat(value) === parseFloat(loop) ? cb('请输入一个新的查询周期') : cb();
                                            },
                                            pattern: /^[1-9]\d*$/
                                        }]
                                    })(_react2.default.createElement(_input2.default, {
                                        autoComplete: 'off',
                                        addonAfter: '分钟' }))
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _form2.default.Item,
                            { className: _setting2.default.system_btn_group },
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/' },
                                _react2.default.createElement(
                                    _button2.default,
                                    { type: 'default', style: { marginRight: '16px' } },
                                    '\u8FD4\u56DE'
                                )
                            ),
                            _react2.default.createElement(
                                _button2.default,
                                {
                                    disabled: !isFieldTouched('loop') || this.hasErrors(getFieldsError(['loop'])),
                                    type: 'primary', htmlType: 'submit' },
                                '\u4FDD\u5B58'
                            )
                        )
                    )
                )
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.form.validateFields();
            this.fetchTaskTypeList();
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return Setting;
}(_react2.default.Component);

var SettingForm = _form2.default.create()(Setting);
var _default = SettingForm;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Setting, 'Setting', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\setting\\setting.js');
    reactHotLoader.register(SettingForm, 'SettingForm', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\setting\\setting.js');
    reactHotLoader.register(_default, 'default', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\setting\\setting.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvX3V0aWwvaXNGbGV4U3VwcG9ydGVkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9fdXRpbC90aHJvdHRsZUJ5QW5pbWF0aW9uRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2FsZXJ0L2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9hbGVydC9zdHlsZS9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2FsZXJ0L3N0eWxlL2luZGV4LmNzcz85OTAyIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9jYXJkL0dyaWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2NhcmQvTWV0YS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvY2FyZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvY2FyZC9zdHlsZS9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2NhcmQvc3R5bGUvaW5kZXguY3NzPzk2MTQiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2NvbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvY29sL3N0eWxlL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvZ3JpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvbm90aWZpY2F0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9ub3RpZmljYXRpb24vc3R5bGUvY3NzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9ub3RpZmljYXRpb24vc3R5bGUvaW5kZXguY3NzPzcwMzIiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3Jvdy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvcm93L3N0eWxlL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvdGFicy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvdGFicy9zdHlsZS9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3RhYnMvc3R5bGUvaW5kZXguY3NzP2ZiYzAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2FsZXJ0L3N0eWxlL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvY2FyZC9zdHlsZS9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL25vdGlmaWNhdGlvbi9zdHlsZS9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3RhYnMvc3R5bGUvaW5kZXguY3NzIiwid2VicGFjazovLy8uL3BhZ2VzL3NldHRpbmcvc2V0dGluZy5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvbm93LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvTnVtYmVyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmMtbm90aWZpY2F0aW9uL2VzL05vdGljZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JjLW5vdGlmaWNhdGlvbi9lcy9Ob3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYy1ub3RpZmljYXRpb24vZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYy10YWJzL2VzL0lua1RhYkJhck1peGluLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmMtdGFicy9lcy9LZXlDb2RlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmMtdGFicy9lcy9SZWZNaXhpbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JjLXRhYnMvZXMvU2Nyb2xsYWJsZUlua1RhYkJhci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JjLXRhYnMvZXMvU2Nyb2xsYWJsZVRhYkJhck1peGluLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmMtdGFicy9lcy9UYWJCYXJNaXhpbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JjLXRhYnMvZXMvVGFiQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JjLXRhYnMvZXMvVGFiUGFuZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JjLXRhYnMvZXMvVGFicy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JjLXRhYnMvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYy10YWJzL2VzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdXBkYXRlLW1vZGFsLmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvaGFuZGxlLWZvcm1kYXRhLmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvaGFuZGxlLWpzb24uanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9yZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3NldHRpbmcvc2V0dGluZy5jc3M/NWQyNSIsIndlYnBhY2s6Ly8vLi9wYWdlcy9zZXR0aW5nL3NldHRpbmcuanMiXSwibmFtZXMiOlsiVXBkYXRlTW9kYWwiLCJzZXRWYWx1ZSIsInR5cGUiLCJwcm9wcyIsImZvcm0iLCJzZXRGaWVsZHMiLCJ0YXNrX3R5cGVfbmFtZSIsInZhbHVlIiwidGltZV93YXJuIiwidGltZV9vdXQiLCJoYXNFcnJvcnMiLCJmaWVsZHNFcnJvciIsIk9iamVjdCIsImtleXMiLCJzb21lIiwiZmllbGQiLCJlbnN1cmUiLCJnZXRGaWVsZHNWYWx1ZSIsInRhc2tfdHlwZV9pZCIsInZpc2libGUiLCJjbG9zZSIsImdldEZpZWxkRGVjb3JhdG9yIiwiaXNGaWVsZFRvdWNoZWQiLCJnZXRGaWVsZEVycm9yIiwiZ2V0RmllbGRzRXJyb3IiLCJ0eXBlTmFtZUVyciIsInRpbWVXYXJuRXJyIiwidGltZU91dEVyciIsInJ1bGVzIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwiaGFuZGxlQ2hhbmdlIiwibmV4dFByb3BzIiwiQ29tcG9uZW50IiwiVXBkYXRlTW9kYWxGb3JtIiwiY3JlYXRlIiwiaGFuZGxlRm9ybURhdGEiLCJkYXRhIiwicmV0IiwiRm9ybURhdGEiLCJtYXAiLCJBcnJheSIsImlzQXJyYXkiLCJrIiwiZm9yRWFjaCIsImFwcGVuZCIsImQiLCJoYW5kbGVKc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJwb3N0VHlwZSIsInN1Y2Nlc3MiLCJmYWlsIiwiY29tcGxldGUiLCJFcnJvciIsInhtbCIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInBvc3REYXRhIiwic2V0UmVxdWVzdEhlYWRlciIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsImNvZGUiLCJ1bmRlZmluZWQiLCJlIiwicGFyc2VJbnQiLCJhbGVydCIsInNlbmQiLCJTZXR0aW5nIiwic3RhdGUiLCJ0YXNrVHlwZUxpc3QiLCJsb29wIiwiYWRkVHlwZUVyciIsInVwZGF0aW5nIiwidXBkYXRlVHlwZSIsImNvbHVtbnMiLCJ0aXRsZSIsImRhdGFJbmRleCIsInJlbmRlciIsInRpbWUiLCJpZCIsInJlY29yZCIsInVwZGF0ZUlORyIsIm1hcmdpblJpZ2h0IiwiZGVsZXRlVHlwZSIsImZldGNoVGFza1R5cGVMaXN0IiwidGFibGUiLCJzZXRTdGF0ZSIsImhhbmRsZUFkZFRhc2tUeXBlIiwicHJldmVudERlZmF1bHQiLCJ0aGF0IiwidmFsaWRhdGVGaWVsZHMiLCJlcnIiLCJ2YWx1ZXMiLCJkZXNjcmlwdGlvbiIsImNsb3NlTW9kYWwiLCJyZXMiLCJoYW5kbGVTZXRMb29wIiwibG9vcF90aW1lIiwibG9vcEVyciIsImNhcmQiLCJzZWFyY2hfZm9ybSIsImZvcm1faXRlbSIsImluaXRpYWxWYWx1ZSIsInZhbGlkYXRvciIsInJ1bGUiLCJjYiIsInBhcnNlRmxvYXQiLCJwYXR0ZXJuIiwic3lzdGVtX2J0bl9ncm91cCIsIlNldHRpbmdGb3JtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDZ0U7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUUsYUFBYTtBQUNwRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7QUFDQTtBQUNBLCtGQUFtQyxTQUFTLGFBQWE7QUFDekQ7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxvRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSkE7Ozs7Ozs7Ozs7Ozs7QUNDQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBLEVBQUU7O0FBRUYsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7Ozs7Ozs7OztBQzVDYztBQUNkLDBHOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUdBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0pBQTBF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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQzdMQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMyQjtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxtRUFBbUUsYUFBYTtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7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Q0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0ZBQStDO0FBQy9DO0FBQ0EsT0FBTztBQUNQLDBFQUFtQywwQ0FBMEM7QUFDN0U7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVGQUFnRDtBQUNoRCxPQUFPO0FBQ1AsMEVBQW1DLDBDQUEwQztBQUM3RTs7QUFFQTtBQUNBLHlGQUFrRDs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0EsdUZBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLG1FQUFtRTtBQUM1RTtBQUNBO0FBQ0EsV0FBVyx1Q0FBdUM7QUFDbEQ7QUFDQTtBQUNBLGFBQWEsa0RBQWtEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdFNBO0FBQ0E7QUFDQTtBQUM4QjtBQUM5QjtBQUNBO0FBQ3NCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0tBQStEO0FBQy9EO0FBQ0EsaURBQWlELGlCQUFpQjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0ZBQTBCO0FBQzFCLE9BQU8seUVBQTJCLGlCQUFpQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNxRjs7QUFFckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxRkFBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RkFBMkI7QUFDM0IsT0FBTztBQUNQLHVGQUEyQjtBQUMzQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELDJFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3NCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxZQUFZO0FBQ1osR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlGQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsd0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDc0I7O0FBRXRCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9GQUE0Qzs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7OytEQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsTkE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsY0FBYztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUZBQTJCO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLElBQUk7QUFDUCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsVzs7Ozs7Ozs7Ozs7Ozs7Z01BMkRKQyxRLEdBQVcsVUFBQ0MsSUFBRCxF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bmN0aW9uIGlzRmxleFN1cHBvcnRlZCgpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGRvY3VtZW50RWxlbWVudCA9IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgICAgICAgcmV0dXJuICdmbGV4JyBpbiBkb2N1bWVudEVsZW1lbnQuc3R5bGUgfHwgJ3dlYmtpdEZsZXgnIGluIGRvY3VtZW50RWxlbWVudC5zdHlsZSB8fCAnRmxleCcgaW4gZG9jdW1lbnRFbGVtZW50LnN0eWxlIHx8ICdtc0ZsZXgnIGluIGRvY3VtZW50RWxlbWVudC5zdHlsZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufSIsImltcG9ydCBfdG9Db25zdW1hYmxlQXJyYXkgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5JztcbmltcG9ydCBnZXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUsIHsgY2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lIH0gZnJvbSAnLi4vX3V0aWwvZ2V0UmVxdWVzdEFuaW1hdGlvbkZyYW1lJztcbnZhciByZXFBbmltRnJhbWUgPSBnZXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRocm90dGxlQnlBbmltYXRpb25GcmFtZShmbikge1xuICAgIHZhciByZXF1ZXN0SWQgPSB2b2lkIDA7XG4gICAgdmFyIGxhdGVyID0gZnVuY3Rpb24gbGF0ZXIoYXJncykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmVxdWVzdElkID0gbnVsbDtcbiAgICAgICAgICAgIGZuLmFwcGx5KHVuZGVmaW5lZCwgX3RvQ29uc3VtYWJsZUFycmF5KGFyZ3MpKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHZhciB0aHJvdHRsZWQgPSBmdW5jdGlvbiB0aHJvdHRsZWQoKSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlcXVlc3RJZCA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXF1ZXN0SWQgPSByZXFBbmltRnJhbWUobGF0ZXIoYXJncykpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB0aHJvdHRsZWQuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlcXVlc3RJZCk7XG4gICAgfTtcbiAgICByZXR1cm4gdGhyb3R0bGVkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRocm90dGxlQnlBbmltYXRpb25GcmFtZURlY29yYXRvcigpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5LCBkZXNjcmlwdG9yKSB7XG4gICAgICAgIHZhciBmbiA9IGRlc2NyaXB0b3IudmFsdWU7XG4gICAgICAgIHZhciBkZWZpbmluZ1Byb3BlcnR5ID0gZmFsc2U7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVmaW5pbmdQcm9wZXJ0eSB8fCB0aGlzID09PSB0YXJnZXQucHJvdG90eXBlIHx8IHRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBib3VuZEZuID0gdGhyb3R0bGVCeUFuaW1hdGlvbkZyYW1lKGZuLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIGRlZmluaW5nUHJvcGVydHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBrZXksIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGJvdW5kRm4sXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBkZWZpbmluZ1Byb3BlcnR5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJvdW5kRm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfTtcbn0iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBbmltYXRlIGZyb20gJ3JjLWFuaW1hdGUnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vaWNvbic7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG52YXIgQWxlcnQgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhBbGVydCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBBbGVydChwcm9wcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWxlcnQpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChBbGVydC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEFsZXJ0KSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgIF90aGlzLmhhbmRsZUNsb3NlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBkb20gPSBSZWFjdERPTS5maW5kRE9NTm9kZShfdGhpcyk7XG4gICAgICAgICAgICBkb20uc3R5bGUuaGVpZ2h0ID0gZG9tLm9mZnNldEhlaWdodCArICdweCc7XG4gICAgICAgICAgICAvLyBNYWdpYyBjb2RlXG4gICAgICAgICAgICAvLyDph43lpI3kuIDmrKHlkI7miY3og73mraPnoa7orr7nva4gaGVpZ2h0XG4gICAgICAgICAgICBkb20uc3R5bGUuaGVpZ2h0ID0gZG9tLm9mZnNldEhlaWdodCArICdweCc7XG4gICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgY2xvc2luZzogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgKF90aGlzLnByb3BzLm9uQ2xvc2UgfHwgbm9vcCkoZSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmFuaW1hdGlvbkVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjbG9zZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY2xvc2luZzogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAoX3RoaXMucHJvcHMuYWZ0ZXJDbG9zZSB8fCBub29wKSgpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNsb3Npbmc6IHRydWUsXG4gICAgICAgICAgICBjbG9zZWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoQWxlcnQsIFt7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIGNsb3NhYmxlID0gX3Byb3BzLmNsb3NhYmxlLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gX3Byb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIHR5cGUgPSBfcHJvcHMudHlwZSxcbiAgICAgICAgICAgICAgICBfcHJvcHMkcHJlZml4Q2xzID0gX3Byb3BzLnByZWZpeENscyxcbiAgICAgICAgICAgICAgICBwcmVmaXhDbHMgPSBfcHJvcHMkcHJlZml4Q2xzID09PSB1bmRlZmluZWQgPyAnYW50LWFsZXJ0JyA6IF9wcm9wcyRwcmVmaXhDbHMsXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IF9wcm9wcy5tZXNzYWdlLFxuICAgICAgICAgICAgICAgIGNsb3NlVGV4dCA9IF9wcm9wcy5jbG9zZVRleHQsXG4gICAgICAgICAgICAgICAgc2hvd0ljb24gPSBfcHJvcHMuc2hvd0ljb24sXG4gICAgICAgICAgICAgICAgYmFubmVyID0gX3Byb3BzLmJhbm5lcixcbiAgICAgICAgICAgICAgICBfcHJvcHMkY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMkY2xhc3NOYW1lID09PSB1bmRlZmluZWQgPyAnJyA6IF9wcm9wcyRjbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgICAgICAgICAgaWNvblR5cGUgPSBfcHJvcHMuaWNvblR5cGU7XG4gICAgICAgICAgICAvLyBiYW5uZXLmqKHlvI/pu5jorqTmnIkgSWNvblxuXG4gICAgICAgICAgICBzaG93SWNvbiA9IGJhbm5lciAmJiBzaG93SWNvbiA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IHNob3dJY29uO1xuICAgICAgICAgICAgLy8gYmFubmVy5qih5byP6buY6K6k5Li66K2m5ZGKXG4gICAgICAgICAgICB0eXBlID0gYmFubmVyICYmIHR5cGUgPT09IHVuZGVmaW5lZCA/ICd3YXJuaW5nJyA6IHR5cGUgfHwgJ2luZm8nO1xuICAgICAgICAgICAgaWYgKCFpY29uVHlwZSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25UeXBlID0gJ2NoZWNrLWNpcmNsZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaW5mbyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uVHlwZSA9ICdpbmZvLWNpcmNsZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZXJyb3InOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvblR5cGUgPSAnY3Jvc3MtY2lyY2xlJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd3YXJuaW5nJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25UeXBlID0gJ2V4Y2xhbWF0aW9uLWNpcmNsZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25UeXBlID0gJ2RlZmF1bHQnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyB1c2Ugb3V0bGluZSBpY29uIGluIGFsZXJ0IHdpdGggZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICBpZiAoISFkZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpY29uVHlwZSArPSAnLW8nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBhbGVydENscyA9IGNsYXNzTmFtZXMocHJlZml4Q2xzLCAoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLScgKyB0eXBlLCB0cnVlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLWNsb3NlJywgIXRoaXMuc3RhdGUuY2xvc2luZyksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy13aXRoLWRlc2NyaXB0aW9uJywgISFkZXNjcmlwdGlvbiksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy1uby1pY29uJywgIXNob3dJY29uKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLWJhbm5lcicsICEhYmFubmVyKSwgX2NsYXNzTmFtZXMpLCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgLy8gY2xvc2VhYmxlIHdoZW4gY2xvc2VUZXh0IGlzIGFzc2lnbmVkXG4gICAgICAgICAgICBpZiAoY2xvc2VUZXh0KSB7XG4gICAgICAgICAgICAgICAgY2xvc2FibGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGNsb3NlSWNvbiA9IGNsb3NhYmxlID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnYScsXG4gICAgICAgICAgICAgICAgeyBvbkNsaWNrOiB0aGlzLmhhbmRsZUNsb3NlLCBjbGFzc05hbWU6IHByZWZpeENscyArICctY2xvc2UtaWNvbicgfSxcbiAgICAgICAgICAgICAgICBjbG9zZVRleHQgfHwgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7IHR5cGU6ICdjcm9zcycgfSlcbiAgICAgICAgICAgICkgOiBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuY2xvc2VkID8gbnVsbCA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgQW5pbWF0ZSxcbiAgICAgICAgICAgICAgICB7IGNvbXBvbmVudDogJycsIHNob3dQcm9wOiAnZGF0YS1zaG93JywgdHJhbnNpdGlvbk5hbWU6IHByZWZpeENscyArICctc2xpZGUtdXAnLCBvbkVuZDogdGhpcy5hbmltYXRpb25FbmQgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyAnZGF0YS1zaG93JzogdGhpcy5zdGF0ZS5jbG9zaW5nLCBjbGFzc05hbWU6IGFsZXJ0Q2xzLCBzdHlsZTogc3R5bGUgfSxcbiAgICAgICAgICAgICAgICAgICAgc2hvd0ljb24gPyBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWljb24nLCB0eXBlOiBpY29uVHlwZSB9KSA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1tZXNzYWdlJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctZGVzY3JpcHRpb24nIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBjbG9zZUljb25cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEFsZXJ0O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBBbGVydDsiLCJpbXBvcnQgJy4uLy4uL3N0eWxlL2luZGV4LmNzcyc7XG5pbXBvcnQgJy4vaW5kZXguY3NzJzsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXguY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG52YXIgX19yZXN0ID0gdGhpcyAmJiB0aGlzLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gICAgfWlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCkgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgfXJldHVybiB0O1xufTtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBfcHJvcHMkcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICBwcmVmaXhDbHMgPSBfcHJvcHMkcHJlZml4Q2xzID09PSB1bmRlZmluZWQgPyAnYW50LWNhcmQnIDogX3Byb3BzJHByZWZpeENscyxcbiAgICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBvdGhlcnMgPSBfX3Jlc3QocHJvcHMsIFtcInByZWZpeENsc1wiLCBcImNsYXNzTmFtZVwiXSk7XG5cbiAgICB2YXIgY2xhc3NTdHJpbmcgPSBjbGFzc05hbWVzKHByZWZpeENscyArICctZ3JpZCcsIGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIF9leHRlbmRzKHt9LCBvdGhlcnMsIHsgY2xhc3NOYW1lOiBjbGFzc1N0cmluZyB9KSk7XG59KTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xudmFyIF9fcmVzdCA9IHRoaXMgJiYgdGhpcy5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICAgIH1pZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgIH1yZXR1cm4gdDtcbn07XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgX3Byb3BzJHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgICAgcHJlZml4Q2xzID0gX3Byb3BzJHByZWZpeENscyA9PT0gdW5kZWZpbmVkID8gJ2FudC1jYXJkJyA6IF9wcm9wcyRwcmVmaXhDbHMsXG4gICAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgYXZhdGFyID0gcHJvcHMuYXZhdGFyLFxuICAgICAgICB0aXRsZSA9IHByb3BzLnRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICBvdGhlcnMgPSBfX3Jlc3QocHJvcHMsIFtcInByZWZpeENsc1wiLCBcImNsYXNzTmFtZVwiLCBcImF2YXRhclwiLCBcInRpdGxlXCIsIFwiZGVzY3JpcHRpb25cIl0pO1xuXG4gICAgdmFyIGNsYXNzU3RyaW5nID0gY2xhc3NOYW1lcyhwcmVmaXhDbHMgKyAnLW1ldGEnLCBjbGFzc05hbWUpO1xuICAgIHZhciBhdmF0YXJEb20gPSBhdmF0YXIgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctbWV0YS1hdmF0YXInIH0sXG4gICAgICAgIGF2YXRhclxuICAgICkgOiBudWxsO1xuICAgIHZhciB0aXRsZURvbSA9IHRpdGxlID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLW1ldGEtdGl0bGUnIH0sXG4gICAgICAgIHRpdGxlXG4gICAgKSA6IG51bGw7XG4gICAgdmFyIGRlc2NyaXB0aW9uRG9tID0gZGVzY3JpcHRpb24gPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctbWV0YS1kZXNjcmlwdGlvbicgfSxcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICApIDogbnVsbDtcbiAgICB2YXIgTWV0YURldGFpbCA9IHRpdGxlRG9tIHx8IGRlc2NyaXB0aW9uRG9tID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLW1ldGEtZGV0YWlsJyB9LFxuICAgICAgICB0aXRsZURvbSxcbiAgICAgICAgZGVzY3JpcHRpb25Eb21cbiAgICApIDogbnVsbDtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIF9leHRlbmRzKHt9LCBvdGhlcnMsIHsgY2xhc3NOYW1lOiBjbGFzc1N0cmluZyB9KSxcbiAgICAgICAgYXZhdGFyRG9tLFxuICAgICAgICBNZXRhRGV0YWlsXG4gICAgKTtcbn0pOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIjtcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCI7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIjtcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIjtcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiO1xuaW1wb3J0IF90eXBlb2YgZnJvbSBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2ZcIjtcbnZhciBfX2RlY29yYXRlID0gdGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgICAgICByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYyxcbiAgICAgICAgZDtcbiAgICBpZiAoKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoUmVmbGVjdCkpID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgfXJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fcmVzdCA9IHRoaXMgJiYgdGhpcy5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICAgIH1pZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgIH1yZXR1cm4gdDtcbn07XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBhZGRFdmVudExpc3RlbmVyIGZyb20gXCJyYy11dGlsL2VzL0RvbS9hZGRFdmVudExpc3RlbmVyXCI7XG5pbXBvcnQgb21pdCBmcm9tICdvbWl0LmpzJztcbmltcG9ydCBHcmlkIGZyb20gJy4vR3JpZCc7XG5pbXBvcnQgTWV0YSBmcm9tICcuL01ldGEnO1xuaW1wb3J0IFRhYnMgZnJvbSAnLi4vdGFicyc7XG5pbXBvcnQgeyB0aHJvdHRsZUJ5QW5pbWF0aW9uRnJhbWVEZWNvcmF0b3IgfSBmcm9tICcuLi9fdXRpbC90aHJvdHRsZUJ5QW5pbWF0aW9uRnJhbWUnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnLi4vX3V0aWwvd2FybmluZyc7XG5cbnZhciBDYXJkID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoQ2FyZCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBDYXJkKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2FyZCk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENhcmQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDYXJkKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB3aWRlclBhZGRpbmc6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLm9uVGFiQ2hhbmdlID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKF90aGlzLnByb3BzLm9uVGFiQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucHJvcHMub25UYWJDaGFuZ2Uoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuc2F2ZVJlZiA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICBfdGhpcy5jb250YWluZXIgPSBub2RlO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKENhcmQsIFt7XG4gICAgICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVdpZGVyUGFkZGluZygpO1xuICAgICAgICAgICAgdGhpcy5yZXNpemVFdmVudCA9IGFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAncmVzaXplJywgdGhpcy51cGRhdGVXaWRlclBhZGRpbmcpO1xuICAgICAgICAgICAgaWYgKCdub0hvdmVyaW5nJyBpbiB0aGlzLnByb3BzKSB7XG4gICAgICAgICAgICAgICAgd2FybmluZyghdGhpcy5wcm9wcy5ub0hvdmVyaW5nLCAnYG5vSG92ZXJpbmdgIG9mIENhcmQgaXMgZGVwZXJhdGVkLCB5b3UgY2FuIHJlbW92ZSBpdCBzYWZlbHkgb3IgdXNlIGBob3ZlcmFibGVgIGluc3RlYWQuJyk7XG4gICAgICAgICAgICAgICAgd2FybmluZyghIXRoaXMucHJvcHMubm9Ib3ZlcmluZywgJ2Bub0hvdmVyaW5nPXtmYWxzZX1gIG9mIENhcmQgaXMgZGVwZXJhdGVkLCB1c2UgYGhvdmVyYWJsZWAgaW5zdGVhZC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc2l6ZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNpemVFdmVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXBkYXRlV2lkZXJQYWRkaW5nLmNhbmNlbCgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwidXBkYXRlV2lkZXJQYWRkaW5nXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVXaWRlclBhZGRpbmcoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKCF0aGlzLmNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIDkzNiBpcyBhIG1hZ2ljIGNhcmQgd2lkdGggcGl4ZXIgbnVtYmVyIGluZGljYXRlZCBieSBkZXNpZ25lclxuICAgICAgICAgICAgdmFyIFdJRFRIX0JPVURBUllfUFggPSA5MzY7XG4gICAgICAgICAgICBpZiAodGhpcy5jb250YWluZXIub2Zmc2V0V2lkdGggPj0gV0lEVEhfQk9VREFSWV9QWCAmJiAhdGhpcy5zdGF0ZS53aWRlclBhZGRpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgd2lkZXJQYWRkaW5nOiB0cnVlIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnVwZGF0ZVdpZGVyUGFkZGluZ0NhbGxlZCA9IHRydWU7IC8vIGZpcnN0IHJlbmRlciB3aXRob3V0IGNzcyB0cmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jb250YWluZXIub2Zmc2V0V2lkdGggPCBXSURUSF9CT1VEQVJZX1BYICYmIHRoaXMuc3RhdGUud2lkZXJQYWRkaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdpZGVyUGFkZGluZzogZmFsc2UgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczIudXBkYXRlV2lkZXJQYWRkaW5nQ2FsbGVkID0gdHJ1ZTsgLy8gZmlyc3QgcmVuZGVyIHdpdGhvdXQgY3NzIHRyYW5zaXRpb25cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImlzQ29udGFpbkdyaWRcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzQ29udGFpbkdyaWQoKSB7XG4gICAgICAgICAgICB2YXIgY29udGFpbkdyaWQgPSB2b2lkIDA7XG4gICAgICAgICAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKHRoaXMucHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC50eXBlICYmIGVsZW1lbnQudHlwZSA9PT0gR3JpZCkge1xuICAgICAgICAgICAgICAgICAgICBjb250YWluR3JpZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gY29udGFpbkdyaWQ7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJnZXRBY3Rpb25cIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEFjdGlvbihhY3Rpb25zKSB7XG4gICAgICAgICAgICBpZiAoIWFjdGlvbnMgfHwgIWFjdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgYWN0aW9uTGlzdCA9IGFjdGlvbnMubWFwKGZ1bmN0aW9uIChhY3Rpb24sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdHlsZTogeyB3aWR0aDogMTAwIC8gYWN0aW9ucy5sZW5ndGggKyBcIiVcIiB9LCBrZXk6IFwiYWN0aW9uLVwiICsgaW5kZXggfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvblxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbkxpc3Q7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRm9yIDIueCBjb21wYXRpYmxlXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJnZXRDb21wYXRpYmxlSG92ZXJhYmxlXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDb21wYXRpYmxlSG92ZXJhYmxlKCkge1xuICAgICAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgbm9Ib3ZlcmluZyA9IF9wcm9wcy5ub0hvdmVyaW5nLFxuICAgICAgICAgICAgICAgIGhvdmVyYWJsZSA9IF9wcm9wcy5ob3ZlcmFibGU7XG5cbiAgICAgICAgICAgIGlmICgnbm9Ib3ZlcmluZycgaW4gdGhpcy5wcm9wcykge1xuICAgICAgICAgICAgICAgIHJldHVybiAhbm9Ib3ZlcmluZyB8fCBob3ZlcmFibGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gISFob3ZlcmFibGU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBfYSRwcmVmaXhDbHMgPSBfYS5wcmVmaXhDbHMsXG4gICAgICAgICAgICAgICAgcHJlZml4Q2xzID0gX2EkcHJlZml4Q2xzID09PSB1bmRlZmluZWQgPyAnYW50LWNhcmQnIDogX2EkcHJlZml4Q2xzLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBleHRyYSA9IF9hLmV4dHJhLFxuICAgICAgICAgICAgICAgIGJvZHlTdHlsZSA9IF9hLmJvZHlTdHlsZSxcbiAgICAgICAgICAgICAgICBub0hvdmVyaW5nID0gX2Eubm9Ib3ZlcmluZyxcbiAgICAgICAgICAgICAgICBob3ZlcmFibGUgPSBfYS5ob3ZlcmFibGUsXG4gICAgICAgICAgICAgICAgdGl0bGUgPSBfYS50aXRsZSxcbiAgICAgICAgICAgICAgICBsb2FkaW5nID0gX2EubG9hZGluZyxcbiAgICAgICAgICAgICAgICBfYSRib3JkZXJlZCA9IF9hLmJvcmRlcmVkLFxuICAgICAgICAgICAgICAgIGJvcmRlcmVkID0gX2EkYm9yZGVyZWQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBfYSRib3JkZXJlZCxcbiAgICAgICAgICAgICAgICB0eXBlID0gX2EudHlwZSxcbiAgICAgICAgICAgICAgICBjb3ZlciA9IF9hLmNvdmVyLFxuICAgICAgICAgICAgICAgIGFjdGlvbnMgPSBfYS5hY3Rpb25zLFxuICAgICAgICAgICAgICAgIHRhYkxpc3QgPSBfYS50YWJMaXN0LFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuID0gX2EuY2hpbGRyZW4sXG4gICAgICAgICAgICAgICAgYWN0aXZlVGFiS2V5ID0gX2EuYWN0aXZlVGFiS2V5LFxuICAgICAgICAgICAgICAgIGRlZmF1bHRBY3RpdmVUYWJLZXkgPSBfYS5kZWZhdWx0QWN0aXZlVGFiS2V5LFxuICAgICAgICAgICAgICAgIG90aGVycyA9IF9fcmVzdChfYSwgW1wicHJlZml4Q2xzXCIsIFwiY2xhc3NOYW1lXCIsIFwiZXh0cmFcIiwgXCJib2R5U3R5bGVcIiwgXCJub0hvdmVyaW5nXCIsIFwiaG92ZXJhYmxlXCIsIFwidGl0bGVcIiwgXCJsb2FkaW5nXCIsIFwiYm9yZGVyZWRcIiwgXCJ0eXBlXCIsIFwiY292ZXJcIiwgXCJhY3Rpb25zXCIsIFwidGFiTGlzdFwiLCBcImNoaWxkcmVuXCIsIFwiYWN0aXZlVGFiS2V5XCIsIFwiZGVmYXVsdEFjdGl2ZVRhYktleVwiXSk7XG4gICAgICAgICAgICB2YXIgY2xhc3NTdHJpbmcgPSBjbGFzc05hbWVzKHByZWZpeENscywgY2xhc3NOYW1lLCAoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyBcIi1sb2FkaW5nXCIsIGxvYWRpbmcpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArIFwiLWJvcmRlcmVkXCIsIGJvcmRlcmVkKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyBcIi1ob3ZlcmFibGVcIiwgdGhpcy5nZXRDb21wYXRpYmxlSG92ZXJhYmxlKCkpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArIFwiLXdpZGVyLXBhZGRpbmdcIiwgdGhpcy5zdGF0ZS53aWRlclBhZGRpbmcpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArIFwiLXBhZGRpbmctdHJhbnNpdGlvblwiLCB0aGlzLnVwZGF0ZVdpZGVyUGFkZGluZ0NhbGxlZCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgXCItY29udGFpbi1ncmlkXCIsIHRoaXMuaXNDb250YWluR3JpZCgpKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyBcIi1jb250YWluLXRhYnNcIiwgdGFiTGlzdCAmJiB0YWJMaXN0Lmxlbmd0aCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgXCItdHlwZS1cIiArIHR5cGUsICEhdHlwZSksIF9jbGFzc05hbWVzKSk7XG4gICAgICAgICAgICB2YXIgbG9hZGluZ0Jsb2NrID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyBcIi1sb2FkaW5nLWNvbnRlbnRcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyBcIi1sb2FkaW5nLWJsb2NrXCIsIHN0eWxlOiB7IHdpZHRoOiAnOTQlJyB9IH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIFwicFwiLFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgXCItbG9hZGluZy1ibG9ja1wiLCBzdHlsZTogeyB3aWR0aDogJzI4JScgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IHByZWZpeENscyArIFwiLWxvYWRpbmctYmxvY2tcIiwgc3R5bGU6IHsgd2lkdGg6ICc2MiUnIH0gfSlcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIFwicFwiLFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgXCItbG9hZGluZy1ibG9ja1wiLCBzdHlsZTogeyB3aWR0aDogJzIyJScgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IHByZWZpeENscyArIFwiLWxvYWRpbmctYmxvY2tcIiwgc3R5bGU6IHsgd2lkdGg6ICc2NiUnIH0gfSlcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIFwicFwiLFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgXCItbG9hZGluZy1ibG9ja1wiLCBzdHlsZTogeyB3aWR0aDogJzU2JScgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IHByZWZpeENscyArIFwiLWxvYWRpbmctYmxvY2tcIiwgc3R5bGU6IHsgd2lkdGg6ICczOSUnIH0gfSlcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIFwicFwiLFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgXCItbG9hZGluZy1ibG9ja1wiLCBzdHlsZTogeyB3aWR0aDogJzIxJScgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IHByZWZpeENscyArIFwiLWxvYWRpbmctYmxvY2tcIiwgc3R5bGU6IHsgd2lkdGg6ICcxNSUnIH0gfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyBcIi1sb2FkaW5nLWJsb2NrXCIsIHN0eWxlOiB7IHdpZHRoOiAnNDAlJyB9IH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHZhciBoYXNBY3RpdmVUYWJLZXkgPSBhY3RpdmVUYWJLZXkgIT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBleHRyYVByb3BzID0gX2RlZmluZVByb3BlcnR5KHt9LCBoYXNBY3RpdmVUYWJLZXkgPyAnYWN0aXZlS2V5JyA6ICdkZWZhdWx0QWN0aXZlS2V5JywgaGFzQWN0aXZlVGFiS2V5ID8gYWN0aXZlVGFiS2V5IDogZGVmYXVsdEFjdGl2ZVRhYktleSk7XG4gICAgICAgICAgICB2YXIgaGVhZCA9IHZvaWQgMDtcbiAgICAgICAgICAgIHZhciB0YWJzID0gdGFiTGlzdCAmJiB0YWJMaXN0Lmxlbmd0aCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgVGFicyxcbiAgICAgICAgICAgICAgICBfZXh0ZW5kcyh7fSwgZXh0cmFQcm9wcywgeyBjbGFzc05hbWU6IHByZWZpeENscyArIFwiLWhlYWQtdGFic1wiLCBzaXplOiBcImxhcmdlXCIsIG9uQ2hhbmdlOiB0aGlzLm9uVGFiQ2hhbmdlIH0pLFxuICAgICAgICAgICAgICAgIHRhYkxpc3QubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFRhYnMuVGFiUGFuZSwgeyB0YWI6IGl0ZW0udGFiLCBrZXk6IGl0ZW0ua2V5IH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApIDogbnVsbDtcbiAgICAgICAgICAgIGlmICh0aXRsZSB8fCBleHRyYSB8fCB0YWJzKSB7XG4gICAgICAgICAgICAgICAgaGVhZCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyBcIi1oZWFkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgXCItaGVhZC13cmFwcGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgXCItaGVhZC10aXRsZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYSAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArIFwiLWV4dHJhXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRyYVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICB0YWJzXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjb3ZlckRvbSA9IGNvdmVyID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyBcIi1jb3ZlclwiIH0sXG4gICAgICAgICAgICAgICAgY292ZXJcbiAgICAgICAgICAgICkgOiBudWxsO1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArIFwiLWJvZHlcIiwgc3R5bGU6IGJvZHlTdHlsZSB9LFxuICAgICAgICAgICAgICAgIGxvYWRpbmcgPyBsb2FkaW5nQmxvY2sgOiBjaGlsZHJlblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHZhciBhY3Rpb25Eb20gPSBhY3Rpb25zICYmIGFjdGlvbnMubGVuZ3RoID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArIFwiLWFjdGlvbnNcIiB9LFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0QWN0aW9uKGFjdGlvbnMpXG4gICAgICAgICAgICApIDogbnVsbDtcbiAgICAgICAgICAgIHZhciBkaXZQcm9wcyA9IG9taXQob3RoZXJzLCBbJ29uVGFiQ2hhbmdlJ10pO1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICBfZXh0ZW5kcyh7fSwgZGl2UHJvcHMsIHsgY2xhc3NOYW1lOiBjbGFzc1N0cmluZywgcmVmOiB0aGlzLnNhdmVSZWYgfSksXG4gICAgICAgICAgICAgICAgaGVhZCxcbiAgICAgICAgICAgICAgICBjb3ZlckRvbSxcbiAgICAgICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgICAgIGFjdGlvbkRvbVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBDYXJkO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuXG5DYXJkLkdyaWQgPSBHcmlkO1xuQ2FyZC5NZXRhID0gTWV0YTtcbl9fZGVjb3JhdGUoW3Rocm90dGxlQnlBbmltYXRpb25GcmFtZURlY29yYXRvcigpXSwgQ2FyZC5wcm90b3R5cGUsIFwidXBkYXRlV2lkZXJQYWRkaW5nXCIsIG51bGwpOyIsImltcG9ydCAnLi4vLi4vc3R5bGUvaW5kZXguY3NzJztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuLy8gc3R5bGUgZGVwZW5kZW5jaWVzXG5pbXBvcnQgJy4uLy4uL3RhYnMvc3R5bGUvY3NzJzsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXguY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB7IENvbCB9IGZyb20gJy4uL2dyaWQnO1xuZXhwb3J0IGRlZmF1bHQgQ29sOyIsImltcG9ydCAnLi4vLi4vc3R5bGUvaW5kZXguY3NzJztcbmltcG9ydCAnLi4vLi4vZ3JpZC9zdHlsZS9pbmRleC5jc3MnOyIsImltcG9ydCBSb3cgZnJvbSAnLi9yb3cnO1xuaW1wb3J0IENvbCBmcm9tICcuL2NvbCc7XG5leHBvcnQgeyBSb3csIENvbCB9OyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJ3JjLW5vdGlmaWNhdGlvbic7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9pY29uJztcbnZhciBub3RpZmljYXRpb25JbnN0YW5jZSA9IHt9O1xudmFyIGRlZmF1bHREdXJhdGlvbiA9IDQuNTtcbnZhciBkZWZhdWx0VG9wID0gMjQ7XG52YXIgZGVmYXVsdEJvdHRvbSA9IDI0O1xudmFyIGRlZmF1bHRQbGFjZW1lbnQgPSAndG9wUmlnaHQnO1xudmFyIGRlZmF1bHRHZXRDb250YWluZXIgPSB2b2lkIDA7XG5mdW5jdGlvbiBzZXROb3RpZmljYXRpb25Db25maWcob3B0aW9ucykge1xuICAgIHZhciBkdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb24sXG4gICAgICAgIHBsYWNlbWVudCA9IG9wdGlvbnMucGxhY2VtZW50LFxuICAgICAgICBib3R0b20gPSBvcHRpb25zLmJvdHRvbSxcbiAgICAgICAgdG9wID0gb3B0aW9ucy50b3AsXG4gICAgICAgIGdldENvbnRhaW5lciA9IG9wdGlvbnMuZ2V0Q29udGFpbmVyO1xuXG4gICAgaWYgKGR1cmF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZGVmYXVsdER1cmF0aW9uID0gZHVyYXRpb247XG4gICAgfVxuICAgIGlmIChwbGFjZW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkZWZhdWx0UGxhY2VtZW50ID0gcGxhY2VtZW50O1xuICAgIH1cbiAgICBpZiAoYm90dG9tICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZGVmYXVsdEJvdHRvbSA9IGJvdHRvbTtcbiAgICB9XG4gICAgaWYgKHRvcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRlZmF1bHRUb3AgPSB0b3A7XG4gICAgfVxuICAgIGlmIChnZXRDb250YWluZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkZWZhdWx0R2V0Q29udGFpbmVyID0gZ2V0Q29udGFpbmVyO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldFBsYWNlbWVudFN0eWxlKHBsYWNlbWVudCkge1xuICAgIHZhciBzdHlsZSA9IHZvaWQgMDtcbiAgICBzd2l0Y2ggKHBsYWNlbWVudCkge1xuICAgICAgICBjYXNlICd0b3BMZWZ0JzpcbiAgICAgICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgdG9wOiBkZWZhdWx0VG9wLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogJ2F1dG8nXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3RvcFJpZ2h0JzpcbiAgICAgICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogZGVmYXVsdFRvcCxcbiAgICAgICAgICAgICAgICBib3R0b206ICdhdXRvJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdib3R0b21MZWZ0JzpcbiAgICAgICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgdG9wOiAnYXV0bycsXG4gICAgICAgICAgICAgICAgYm90dG9tOiBkZWZhdWx0Qm90dG9tXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgICAgICB0b3A6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICBib3R0b206IGRlZmF1bHRCb3R0b21cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHN0eWxlO1xufVxuZnVuY3Rpb24gZ2V0Tm90aWZpY2F0aW9uSW5zdGFuY2UocHJlZml4Q2xzLCBwbGFjZW1lbnQsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGNhY2hlS2V5ID0gcHJlZml4Q2xzICsgJy0nICsgcGxhY2VtZW50O1xuICAgIGlmIChub3RpZmljYXRpb25JbnN0YW5jZVtjYWNoZUtleV0pIHtcbiAgICAgICAgY2FsbGJhY2sobm90aWZpY2F0aW9uSW5zdGFuY2VbY2FjaGVLZXldKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBOb3RpZmljYXRpb24ubmV3SW5zdGFuY2Uoe1xuICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLScgKyBwbGFjZW1lbnQsXG4gICAgICAgIHN0eWxlOiBnZXRQbGFjZW1lbnRTdHlsZShwbGFjZW1lbnQpLFxuICAgICAgICBnZXRDb250YWluZXI6IGRlZmF1bHRHZXRDb250YWluZXJcbiAgICB9LCBmdW5jdGlvbiAobm90aWZpY2F0aW9uKSB7XG4gICAgICAgIG5vdGlmaWNhdGlvbkluc3RhbmNlW2NhY2hlS2V5XSA9IG5vdGlmaWNhdGlvbjtcbiAgICAgICAgY2FsbGJhY2sobm90aWZpY2F0aW9uKTtcbiAgICB9KTtcbn1cbnZhciB0eXBlVG9JY29uID0ge1xuICAgIHN1Y2Nlc3M6ICdjaGVjay1jaXJjbGUtbycsXG4gICAgaW5mbzogJ2luZm8tY2lyY2xlLW8nLFxuICAgIGVycm9yOiAnY3Jvc3MtY2lyY2xlLW8nLFxuICAgIHdhcm5pbmc6ICdleGNsYW1hdGlvbi1jaXJjbGUtbydcbn07XG5mdW5jdGlvbiBub3RpY2UoYXJncykge1xuICAgIHZhciBvdXRlclByZWZpeENscyA9IGFyZ3MucHJlZml4Q2xzIHx8ICdhbnQtbm90aWZpY2F0aW9uJztcbiAgICB2YXIgcHJlZml4Q2xzID0gb3V0ZXJQcmVmaXhDbHMgKyAnLW5vdGljZSc7XG4gICAgdmFyIGR1cmF0aW9uID0gYXJncy5kdXJhdGlvbiA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdER1cmF0aW9uIDogYXJncy5kdXJhdGlvbjtcbiAgICB2YXIgaWNvbk5vZGUgPSBudWxsO1xuICAgIGlmIChhcmdzLmljb24pIHtcbiAgICAgICAgaWNvbk5vZGUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctaWNvbicgfSxcbiAgICAgICAgICAgIGFyZ3MuaWNvblxuICAgICAgICApO1xuICAgIH0gZWxzZSBpZiAoYXJncy50eXBlKSB7XG4gICAgICAgIHZhciBpY29uVHlwZSA9IHR5cGVUb0ljb25bYXJncy50eXBlXTtcbiAgICAgICAgaWNvbk5vZGUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWljb24gJyArIHByZWZpeENscyArICctaWNvbi0nICsgYXJncy50eXBlLCB0eXBlOiBpY29uVHlwZSB9KTtcbiAgICB9XG4gICAgdmFyIGF1dG9NYXJnaW5UYWcgPSAhYXJncy5kZXNjcmlwdGlvbiAmJiBpY29uTm9kZSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1tZXNzYWdlLXNpbmdsZS1saW5lLWF1dG8tbWFyZ2luJyB9KSA6IG51bGw7XG4gICAgZ2V0Tm90aWZpY2F0aW9uSW5zdGFuY2Uob3V0ZXJQcmVmaXhDbHMsIGFyZ3MucGxhY2VtZW50IHx8IGRlZmF1bHRQbGFjZW1lbnQsIGZ1bmN0aW9uIChub3RpZmljYXRpb24pIHtcbiAgICAgICAgbm90aWZpY2F0aW9uLm5vdGljZSh7XG4gICAgICAgICAgICBjb250ZW50OiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBpY29uTm9kZSA/IHByZWZpeENscyArICctd2l0aC1pY29uJyA6ICcnIH0sXG4gICAgICAgICAgICAgICAgaWNvbk5vZGUsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLW1lc3NhZ2UnIH0sXG4gICAgICAgICAgICAgICAgICAgIGF1dG9NYXJnaW5UYWcsXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MubWVzc2FnZVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWRlc2NyaXB0aW9uJyB9LFxuICAgICAgICAgICAgICAgICAgICBhcmdzLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBhcmdzLmJ0biA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctYnRuJyB9LFxuICAgICAgICAgICAgICAgICAgICBhcmdzLmJ0blxuICAgICAgICAgICAgICAgICkgOiBudWxsXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgICAgY2xvc2FibGU6IHRydWUsXG4gICAgICAgICAgICBvbkNsb3NlOiBhcmdzLm9uQ2xvc2UsXG4gICAgICAgICAgICBrZXk6IGFyZ3Mua2V5LFxuICAgICAgICAgICAgc3R5bGU6IGFyZ3Muc3R5bGUgfHwge30sXG4gICAgICAgICAgICBjbGFzc05hbWU6IGFyZ3MuY2xhc3NOYW1lXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxudmFyIGFwaSA9IHtcbiAgICBvcGVuOiBub3RpY2UsXG4gICAgY2xvc2U6IGZ1bmN0aW9uIGNsb3NlKGtleSkge1xuICAgICAgICBPYmplY3Qua2V5cyhub3RpZmljYXRpb25JbnN0YW5jZSkuZm9yRWFjaChmdW5jdGlvbiAoY2FjaGVLZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBub3RpZmljYXRpb25JbnN0YW5jZVtjYWNoZUtleV0ucmVtb3ZlTm90aWNlKGtleSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBjb25maWc6IHNldE5vdGlmaWNhdGlvbkNvbmZpZyxcbiAgICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICBPYmplY3Qua2V5cyhub3RpZmljYXRpb25JbnN0YW5jZSkuZm9yRWFjaChmdW5jdGlvbiAoY2FjaGVLZXkpIHtcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbkluc3RhbmNlW2NhY2hlS2V5XS5kZXN0cm95KCk7XG4gICAgICAgICAgICBkZWxldGUgbm90aWZpY2F0aW9uSW5zdGFuY2VbY2FjaGVLZXldO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuWydzdWNjZXNzJywgJ2luZm8nLCAnd2FybmluZycsICdlcnJvciddLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICBhcGlbdHlwZV0gPSBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICByZXR1cm4gYXBpLm9wZW4oX2V4dGVuZHMoe30sIGFyZ3MsIHsgdHlwZTogdHlwZSB9KSk7XG4gICAgfTtcbn0pO1xuYXBpLndhcm4gPSBhcGkud2FybmluZztcbmV4cG9ydCBkZWZhdWx0IGFwaTsiLCJpbXBvcnQgJy4uLy4uL3N0eWxlL2luZGV4LmNzcyc7XG5pbXBvcnQgJy4vaW5kZXguY3NzJzsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXguY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB7IFJvdyB9IGZyb20gJy4uL2dyaWQnO1xuZXhwb3J0IGRlZmF1bHQgUm93OyIsImltcG9ydCAnLi4vLi4vc3R5bGUvaW5kZXguY3NzJztcbmltcG9ydCAnLi4vLi4vZ3JpZC9zdHlsZS9pbmRleC5jc3MnOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgX3R5cGVvZiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJjVGFicywgeyBUYWJQYW5lIH0gZnJvbSAncmMtdGFicyc7XG5pbXBvcnQgU2Nyb2xsYWJsZUlua1RhYkJhciBmcm9tICdyYy10YWJzL2VzL1Njcm9sbGFibGVJbmtUYWJCYXInO1xuaW1wb3J0IFRhYkNvbnRlbnQgZnJvbSAncmMtdGFicy9lcy9UYWJDb250ZW50JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vaWNvbic7XG5pbXBvcnQgd2FybmluZyBmcm9tICcuLi9fdXRpbC93YXJuaW5nJztcbmltcG9ydCBpc0ZsZXhTdXBwb3J0ZWQgZnJvbSAnLi4vX3V0aWwvaXNGbGV4U3VwcG9ydGVkJztcblxudmFyIFRhYnMgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhUYWJzLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFRhYnMoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUYWJzKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoVGFicy5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFRhYnMpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblxuICAgICAgICBfdGhpcy5jcmVhdGVOZXdUYWIgPSBmdW5jdGlvbiAodGFyZ2V0S2V5KSB7XG4gICAgICAgICAgICB2YXIgb25FZGl0ID0gX3RoaXMucHJvcHMub25FZGl0O1xuICAgICAgICAgICAgaWYgKG9uRWRpdCkge1xuICAgICAgICAgICAgICAgIG9uRWRpdCh0YXJnZXRLZXksICdhZGQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMucmVtb3ZlVGFiID0gZnVuY3Rpb24gKHRhcmdldEtleSwgZSkge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGlmICghdGFyZ2V0S2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG9uRWRpdCA9IF90aGlzLnByb3BzLm9uRWRpdDtcbiAgICAgICAgICAgIGlmIChvbkVkaXQpIHtcbiAgICAgICAgICAgICAgICBvbkVkaXQodGFyZ2V0S2V5LCAncmVtb3ZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIChhY3RpdmVLZXkpIHtcbiAgICAgICAgICAgIHZhciBvbkNoYW5nZSA9IF90aGlzLnByb3BzLm9uQ2hhbmdlO1xuICAgICAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgb25DaGFuZ2UoYWN0aXZlS2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhUYWJzLCBbe1xuICAgICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICAgIHZhciBOT19GTEVYID0gJyBuby1mbGV4JztcbiAgICAgICAgICAgIHZhciB0YWJOb2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG4gICAgICAgICAgICBpZiAodGFiTm9kZSAmJiAhaXNGbGV4U3VwcG9ydGVkKCkgJiYgdGFiTm9kZS5jbGFzc05hbWUuaW5kZXhPZihOT19GTEVYKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0YWJOb2RlLmNsYXNzTmFtZSArPSBOT19GTEVYO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgdmFyIF9jbGFzc05hbWVzLFxuICAgICAgICAgICAgICAgIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIHByZWZpeENscyA9IF9wcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgICAgICAgX3Byb3BzJGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzJGNsYXNzTmFtZSA9PT0gdW5kZWZpbmVkID8gJycgOiBfcHJvcHMkY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIHNpemUgPSBfcHJvcHMuc2l6ZSxcbiAgICAgICAgICAgICAgICBfcHJvcHMkdHlwZSA9IF9wcm9wcy50eXBlLFxuICAgICAgICAgICAgICAgIHR5cGUgPSBfcHJvcHMkdHlwZSA9PT0gdW5kZWZpbmVkID8gJ2xpbmUnIDogX3Byb3BzJHR5cGUsXG4gICAgICAgICAgICAgICAgdGFiUG9zaXRpb24gPSBfcHJvcHMudGFiUG9zaXRpb24sXG4gICAgICAgICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgICAgICAgdGFiQmFyRXh0cmFDb250ZW50ID0gX3Byb3BzLnRhYkJhckV4dHJhQ29udGVudCxcbiAgICAgICAgICAgICAgICB0YWJCYXJTdHlsZSA9IF9wcm9wcy50YWJCYXJTdHlsZSxcbiAgICAgICAgICAgICAgICBoaWRlQWRkID0gX3Byb3BzLmhpZGVBZGQsXG4gICAgICAgICAgICAgICAgb25UYWJDbGljayA9IF9wcm9wcy5vblRhYkNsaWNrLFxuICAgICAgICAgICAgICAgIG9uUHJldkNsaWNrID0gX3Byb3BzLm9uUHJldkNsaWNrLFxuICAgICAgICAgICAgICAgIG9uTmV4dENsaWNrID0gX3Byb3BzLm9uTmV4dENsaWNrLFxuICAgICAgICAgICAgICAgIF9wcm9wcyRhbmltYXRlZCA9IF9wcm9wcy5hbmltYXRlZCxcbiAgICAgICAgICAgICAgICBhbmltYXRlZCA9IF9wcm9wcyRhbmltYXRlZCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IF9wcm9wcyRhbmltYXRlZCxcbiAgICAgICAgICAgICAgICB0YWJCYXJHdXR0ZXIgPSBfcHJvcHMudGFiQmFyR3V0dGVyO1xuXG4gICAgICAgICAgICB2YXIgX3JlZiA9ICh0eXBlb2YgYW5pbWF0ZWQgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGFuaW1hdGVkKSkgPT09ICdvYmplY3QnID8ge1xuICAgICAgICAgICAgICAgIGlua0JhckFuaW1hdGVkOiBhbmltYXRlZC5pbmtCYXIsIHRhYlBhbmVBbmltYXRlZDogYW5pbWF0ZWQudGFiUGFuZVxuICAgICAgICAgICAgfSA6IHtcbiAgICAgICAgICAgICAgICBpbmtCYXJBbmltYXRlZDogYW5pbWF0ZWQsIHRhYlBhbmVBbmltYXRlZDogYW5pbWF0ZWRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaW5rQmFyQW5pbWF0ZWQgPSBfcmVmLmlua0JhckFuaW1hdGVkLFxuICAgICAgICAgICAgICAgIHRhYlBhbmVBbmltYXRlZCA9IF9yZWYudGFiUGFuZUFuaW1hdGVkO1xuICAgICAgICAgICAgLy8gY2FyZCB0YWJzIHNob3VsZCBub3QgaGF2ZSBhbmltYXRpb25cblxuXG4gICAgICAgICAgICBpZiAodHlwZSAhPT0gJ2xpbmUnKSB7XG4gICAgICAgICAgICAgICAgdGFiUGFuZUFuaW1hdGVkID0gJ2FuaW1hdGVkJyBpbiB0aGlzLnByb3BzID8gdGFiUGFuZUFuaW1hdGVkIDogZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3YXJuaW5nKCEodHlwZS5pbmRleE9mKCdjYXJkJykgPj0gMCAmJiAoc2l6ZSA9PT0gJ3NtYWxsJyB8fCBzaXplID09PSAnbGFyZ2UnKSksICdUYWJzW3R5cGU9Y2FyZHxlZGl0YWJsZS1jYXJkXSBkb2VzblxcJ3QgaGF2ZSBzbWFsbCBvciBsYXJnZSBzaXplLCBpdFxcJ3MgYnkgZGVzaWduZWQuJyk7XG4gICAgICAgICAgICB2YXIgY2xzID0gY2xhc3NOYW1lcyhjbGFzc05hbWUsIChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctdmVydGljYWwnLCB0YWJQb3NpdGlvbiA9PT0gJ2xlZnQnIHx8IHRhYlBvc2l0aW9uID09PSAncmlnaHQnKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLScgKyBzaXplLCAhIXNpemUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctY2FyZCcsIHR5cGUuaW5kZXhPZignY2FyZCcpID49IDApLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctJyArIHR5cGUsIHRydWUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctbm8tYW5pbWF0aW9uJywgIXRhYlBhbmVBbmltYXRlZCksIF9jbGFzc05hbWVzKSk7XG4gICAgICAgICAgICAvLyBvbmx5IGNhcmQgdHlwZSB0YWJzIGNhbiBiZSBhZGRlZCBhbmQgY2xvc2VkXG4gICAgICAgICAgICB2YXIgY2hpbGRyZW5XaXRoQ2xvc2UgPSBbXTtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnZWRpdGFibGUtY2FyZCcpIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbldpdGhDbG9zZSA9IFtdO1xuICAgICAgICAgICAgICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNsb3NhYmxlID0gY2hpbGQucHJvcHMuY2xvc2FibGU7XG4gICAgICAgICAgICAgICAgICAgIGNsb3NhYmxlID0gdHlwZW9mIGNsb3NhYmxlID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBjbG9zYWJsZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNsb3NlSWNvbiA9IGNsb3NhYmxlID8gUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7IHR5cGU6ICdjbG9zZScsIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIucmVtb3ZlVGFiKGNoaWxkLmtleSwgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0pIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5XaXRoQ2xvc2UucHVzaChSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYjogUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogY2xvc2FibGUgPyB1bmRlZmluZWQgOiBwcmVmaXhDbHMgKyAnLXRhYi11bmNsb3NhYmxlJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLnByb3BzLnRhYixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGNoaWxkLmtleSB8fCBpbmRleFxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gQWRkIG5ldyB0YWIgaGFuZGxlclxuICAgICAgICAgICAgICAgIGlmICghaGlkZUFkZCkge1xuICAgICAgICAgICAgICAgICAgICB0YWJCYXJFeHRyYUNvbnRlbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyB0eXBlOiAncGx1cycsIGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1uZXctdGFiJywgb25DbGljazogdGhpcy5jcmVhdGVOZXdUYWIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJCYXJFeHRyYUNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YWJCYXJFeHRyYUNvbnRlbnQgPSB0YWJCYXJFeHRyYUNvbnRlbnQgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWV4dHJhLWNvbnRlbnQnIH0sXG4gICAgICAgICAgICAgICAgdGFiQmFyRXh0cmFDb250ZW50XG4gICAgICAgICAgICApIDogbnVsbDtcbiAgICAgICAgICAgIHZhciByZW5kZXJUYWJCYXIgPSBmdW5jdGlvbiByZW5kZXJUYWJCYXIoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2Nyb2xsYWJsZUlua1RhYkJhciwgeyBpbmtCYXJBbmltYXRlZDogaW5rQmFyQW5pbWF0ZWQsIGV4dHJhQ29udGVudDogdGFiQmFyRXh0cmFDb250ZW50LCBvblRhYkNsaWNrOiBvblRhYkNsaWNrLCBvblByZXZDbGljazogb25QcmV2Q2xpY2ssIG9uTmV4dENsaWNrOiBvbk5leHRDbGljaywgc3R5bGU6IHRhYkJhclN0eWxlLCB0YWJCYXJHdXR0ZXI6IHRhYkJhckd1dHRlciB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBSY1RhYnMsXG4gICAgICAgICAgICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiBjbHMsIHRhYkJhclBvc2l0aW9uOiB0YWJQb3NpdGlvbiwgcmVuZGVyVGFiQmFyOiByZW5kZXJUYWJCYXIsIHJlbmRlclRhYkNvbnRlbnQ6IGZ1bmN0aW9uIHJlbmRlclRhYkNvbnRlbnQoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChUYWJDb250ZW50LCB7IGFuaW1hdGVkOiB0YWJQYW5lQW5pbWF0ZWQsIGFuaW1hdGVkV2l0aE1hcmdpbjogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgb25DaGFuZ2U6IHRoaXMuaGFuZGxlQ2hhbmdlIH0pLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuV2l0aENsb3NlLmxlbmd0aCA+IDAgPyBjaGlsZHJlbldpdGhDbG9zZSA6IGNoaWxkcmVuXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFRhYnM7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IFRhYnM7XG5cblRhYnMuVGFiUGFuZSA9IFRhYlBhbmU7XG5UYWJzLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwcmVmaXhDbHM6ICdhbnQtdGFicycsXG4gICAgaGlkZUFkZDogZmFsc2Vcbn07IiwiaW1wb3J0ICcuLi8uLi9zdHlsZS9pbmRleC5jc3MnO1xuaW1wb3J0ICcuL2luZGV4LmNzcyc7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogc3R5bGVsaW50LWRpc2FibGUgYXQtcnVsZS1lbXB0eS1saW5lLWJlZm9yZSxhdC1ydWxlLW5hbWUtc3BhY2UtYWZ0ZXIsYXQtcnVsZS1uby11bmtub3duICovXFxuLyogc3R5bGVsaW50LWRpc2FibGUgbm8tZHVwbGljYXRlLXNlbGVjdG9ycyAqL1xcbi8qIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLWJhbmctc3BhY2UtYmVmb3JlLG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnMgKi9cXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1iYW5nLXNwYWNlLWJlZm9yZSxuby1kdXBsaWNhdGUtc2VsZWN0b3JzICovXFxuLmFudC1hbGVydCB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbm9zcGFjZWQgTnVtYmVyXFxcIiwgXFxcIkNoaW5lc2UgUXVvdGVcXFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIlBpbmdGYW5nIFNDXFxcIiwgXFxcIkhpcmFnaW5vIFNhbnMgR0JcXFwiLCBcXFwiTWljcm9zb2Z0IFlhSGVpXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogOHB4IDE1cHggOHB4IDM3cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi5hbnQtYWxlcnQuYW50LWFsZXJ0LW5vLWljb24ge1xcbiAgcGFkZGluZzogOHB4IDE1cHg7XFxufVxcbi5hbnQtYWxlcnQtaWNvbiB7XFxuICB0b3A6IDEyLjVweDtcXG4gIGxlZnQ6IDE2cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi5hbnQtYWxlcnQtZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uYW50LWFsZXJ0LXN1Y2Nlc3Mge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2I3ZWI4ZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmZmZWQ7XFxufVxcbi5hbnQtYWxlcnQtc3VjY2VzcyAuYW50LWFsZXJ0LWljb24ge1xcbiAgY29sb3I6ICM1MmM0MWE7XFxufVxcbi5hbnQtYWxlcnQtaW5mbyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjOTFkNWZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZjdmZjtcXG59XFxuLmFudC1hbGVydC1pbmZvIC5hbnQtYWxlcnQtaWNvbiB7XFxuICBjb2xvcjogIzE4OTBmZjtcXG59XFxuLmFudC1hbGVydC13YXJuaW5nIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmU1OGY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYmU2O1xcbn1cXG4uYW50LWFsZXJ0LXdhcm5pbmcgLmFudC1hbGVydC1pY29uIHtcXG4gIGNvbG9yOiAjZmFhZDE0O1xcbn1cXG4uYW50LWFsZXJ0LWVycm9yIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmEzOWU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMWYwO1xcbn1cXG4uYW50LWFsZXJ0LWVycm9yIC5hbnQtYWxlcnQtaWNvbiB7XFxuICBjb2xvcjogI2Y1MjIyZDtcXG59XFxuLmFudC1hbGVydC1jbG9zZS1pY29uIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxNnB4O1xcbiAgdG9wOiA4cHg7XFxuICBsaW5lLWhlaWdodDogMjJweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5hbnQtYWxlcnQtY2xvc2UtaWNvbiAuYW50aWNvbi1jcm9zcyB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgLjNzO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgLjNzO1xcbn1cXG4uYW50LWFsZXJ0LWNsb3NlLWljb24gLmFudGljb24tY3Jvc3M6aG92ZXIge1xcbiAgY29sb3I6ICM0MDQwNDA7XFxufVxcbi5hbnQtYWxlcnQtY2xvc2UtdGV4dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTZweDtcXG59XFxuLmFudC1hbGVydC13aXRoLWRlc2NyaXB0aW9uIHtcXG4gIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDY0cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcbi5hbnQtYWxlcnQtd2l0aC1kZXNjcmlwdGlvbi5hbnQtYWxlcnQtbm8taWNvbiB7XFxuICBwYWRkaW5nOiAxNXB4O1xcbn1cXG4uYW50LWFsZXJ0LXdpdGgtZGVzY3JpcHRpb24gLmFudC1hbGVydC1pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTZweDtcXG4gIGxlZnQ6IDI0cHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcbi5hbnQtYWxlcnQtd2l0aC1kZXNjcmlwdGlvbiAuYW50LWFsZXJ0LWNsb3NlLWljb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxNnB4O1xcbiAgcmlnaHQ6IDE2cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbi5hbnQtYWxlcnQtd2l0aC1kZXNjcmlwdGlvbiAuYW50LWFsZXJ0LW1lc3NhZ2Uge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSk7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG59XFxuLmFudC1hbGVydC13aXRoLWRlc2NyaXB0aW9uIC5hbnQtYWxlcnQtZGVzY3JpcHRpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5hbnQtYWxlcnQuYW50LWFsZXJ0LWNsb3NlIHtcXG4gIGhlaWdodDogMCAhaW1wb3J0YW50O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcXG4gICAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xcbn1cXG4uYW50LWFsZXJ0LXNsaWRlLXVwLWxlYXZlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBhbnRBbGVydFNsaWRlVXBPdXQgMC4zcyBjdWJpYy1iZXppZXIoMC43OCwgMC4xNCwgMC4xNSwgMC44Nik7XFxuICAgICAgICAgIGFuaW1hdGlvbjogYW50QWxlcnRTbGlkZVVwT3V0IDAuM3MgY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbn1cXG4uYW50LWFsZXJ0LWJhbm5lciB7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGFudEFsZXJ0U2xpZGVVcEluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGFudEFsZXJ0U2xpZGVVcEluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYW50QWxlcnRTbGlkZVVwT3V0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGFudEFsZXJ0U2xpZGVVcE91dCB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XFxuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcXG4gIH1cXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIHN0eWxlbGludC1kaXNhYmxlIGF0LXJ1bGUtZW1wdHktbGluZS1iZWZvcmUsYXQtcnVsZS1uYW1lLXNwYWNlLWFmdGVyLGF0LXJ1bGUtbm8tdW5rbm93biAqL1xcbi8qIHN0eWxlbGludC1kaXNhYmxlIG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnMgKi9cXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1iYW5nLXNwYWNlLWJlZm9yZSxuby1kdXBsaWNhdGUtc2VsZWN0b3JzICovXFxuLyogc3R5bGVsaW50LWRpc2FibGUgZGVjbGFyYXRpb24tYmFuZy1zcGFjZS1iZWZvcmUsbm8tZHVwbGljYXRlLXNlbGVjdG9ycyAqL1xcbi5hbnQtY2FyZCB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbm9zcGFjZWQgTnVtYmVyXFxcIiwgXFxcIkNoaW5lc2UgUXVvdGVcXFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIlBpbmdGYW5nIFNDXFxcIiwgXFxcIkhpcmFnaW5vIFNhbnMgR0JcXFwiLCBcXFwiTWljcm9zb2Z0IFlhSGVpXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcztcXG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XFxufVxcbi5hbnQtY2FyZC1ob3ZlcmFibGUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYW50LWNhcmQtaG92ZXJhYmxlOmhvdmVyIHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wOSk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDkpO1xcbn1cXG4uYW50LWNhcmQtYm9yZGVyZWQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThlODtcXG59XFxuLmFudC1jYXJkLWhlYWQge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZThlOGU4O1xcbiAgcGFkZGluZzogMCAyNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4IDJweCAwIDA7XFxuICB6b29tOiAxO1xcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcXG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XFxufVxcbi5hbnQtY2FyZC1oZWFkOmJlZm9yZSxcXG4uYW50LWNhcmQtaGVhZDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG59XFxuLmFudC1jYXJkLWhlYWQ6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBmb250LXNpemU6IDA7XFxuICBoZWlnaHQ6IDA7XFxufVxcbi5hbnQtY2FyZC1oZWFkLXdyYXBwZXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5hbnQtY2FyZC1oZWFkLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHBhZGRpbmc6IDE2cHggMDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgLXdlYmtpdC1mbGV4OiAxO1xcbiAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxO1xcbn1cXG4uYW50LWNhcmQtaGVhZCAuYW50LXRhYnMge1xcbiAgbWFyZ2luLWJvdHRvbTogLTE3cHg7XFxuICBjbGVhcjogYm90aDtcXG59XFxuLmFudC1jYXJkLWhlYWQgLmFudC10YWJzLWJhciB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZThlODtcXG59XFxuLmFudC1jYXJkLWV4dHJhIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIHBhZGRpbmc6IDE3LjVweCAwO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuLmFudC1jYXJkLWJvZHkge1xcbiAgcGFkZGluZzogMjRweDtcXG4gIHpvb206IDE7XFxufVxcbi5hbnQtY2FyZC1ib2R5OmJlZm9yZSxcXG4uYW50LWNhcmQtYm9keTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG59XFxuLmFudC1jYXJkLWJvZHk6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBmb250LXNpemU6IDA7XFxuICBoZWlnaHQ6IDA7XFxufVxcbi5hbnQtY2FyZC1jb250YWluLWdyaWQgLmFudC1jYXJkLWJvZHkge1xcbiAgbWFyZ2luOiAtMXB4IDAgMCAtMXB4O1xcbiAgcGFkZGluZzogMDtcXG59XFxuLmFudC1jYXJkLWdyaWQge1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIGJvcmRlcjogMDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDAgMCAwICNlOGU4ZTgsIDAgMXB4IDAgMCAjZThlOGU4LCAxcHggMXB4IDAgMCAjZThlOGU4LCAxcHggMCAwIDAgI2U4ZThlOCBpbnNldCwgMCAxcHggMCAwICNlOGU4ZTggaW5zZXQ7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAwIDAgMCAjZThlOGU4LCAwIDFweCAwIDAgI2U4ZThlOCwgMXB4IDFweCAwIDAgI2U4ZThlOCwgMXB4IDAgMCAwICNlOGU4ZTggaW5zZXQsIDAgMXB4IDAgMCAjZThlOGU4IGluc2V0O1xcbiAgd2lkdGg6IDMzLjMzJTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgcGFkZGluZzogMjRweDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcztcXG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XFxufVxcbi5hbnQtY2FyZC1ncmlkOmhvdmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG59XFxuLmFudC1jYXJkLWNvbnRhaW4tdGFicyAuYW50LWNhcmQtaGVhZC10aXRsZSB7XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gIG1pbi1oZWlnaHQ6IDMycHg7XFxufVxcbi5hbnQtY2FyZC1jb250YWluLXRhYnMgLmFudC1jYXJkLWV4dHJhIHtcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcbn1cXG4uYW50LWNhcmQtY292ZXIgPiAqIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5hbnQtY2FyZC1hY3Rpb25zIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlOGU4O1xcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcXG4gIHpvb206IDE7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuLmFudC1jYXJkLWFjdGlvbnM6YmVmb3JlLFxcbi5hbnQtY2FyZC1hY3Rpb25zOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbn1cXG4uYW50LWNhcmQtYWN0aW9uczphZnRlciB7XFxuICBjbGVhcjogYm90aDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGZvbnQtc2l6ZTogMDtcXG4gIGhlaWdodDogMDtcXG59XFxuLmFudC1jYXJkLWFjdGlvbnMgPiBsaSB7XFxuICBmbG9hdDogbGVmdDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMTJweCAwO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxufVxcbi5hbnQtY2FyZC1hY3Rpb25zID4gbGkgPiBzcGFuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xcbiAgbWluLXdpZHRoOiAzMnB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYW50LWNhcmQtYWN0aW9ucyA+IGxpID4gc3Bhbjpob3ZlciB7XFxuICBjb2xvcjogIzE4OTBmZjtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgLjNzO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgLjNzO1xcbn1cXG4uYW50LWNhcmQtYWN0aW9ucyA+IGxpID4gc3BhbiA+IC5hbnRpY29uIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmFudC1jYXJkLWFjdGlvbnMgPiBsaSA+IHNwYW4gYSB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5hbnQtY2FyZC1hY3Rpb25zID4gbGkgPiBzcGFuIGE6aG92ZXIge1xcbiAgY29sb3I6ICMxODkwZmY7XFxufVxcbi5hbnQtY2FyZC1hY3Rpb25zID4gbGk6bm90KDpsYXN0LWNoaWxkKSB7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZThlOGU4O1xcbn1cXG4uYW50LWNhcmQtd2lkZXItcGFkZGluZyAuYW50LWNhcmQtaGVhZCB7XFxuICBwYWRkaW5nOiAwIDMycHg7XFxufVxcbi5hbnQtY2FyZC13aWRlci1wYWRkaW5nIC5hbnQtY2FyZC1ib2R5IHtcXG4gIHBhZGRpbmc6IDI0cHggMzJweDtcXG59XFxuLmFudC1jYXJkLXBhZGRpbmctdHJhbnNpdGlvbiAuYW50LWNhcmQtaGVhZCxcXG4uYW50LWNhcmQtcGFkZGluZy10cmFuc2l0aW9uIC5hbnQtY2FyZC1ib2R5IHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogcGFkZGluZyAuM3M7XFxuICB0cmFuc2l0aW9uOiBwYWRkaW5nIC4zcztcXG59XFxuLmFudC1jYXJkLXBhZGRpbmctdHJhbnNpdGlvbiAuYW50LWNhcmQtZXh0cmEge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiByaWdodCAuM3M7XFxuICB0cmFuc2l0aW9uOiByaWdodCAuM3M7XFxufVxcbi5hbnQtY2FyZC10eXBlLWlubmVyIC5hbnQtY2FyZC1oZWFkIHtcXG4gIHBhZGRpbmc6IDAgMjRweDtcXG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XFxufVxcbi5hbnQtY2FyZC10eXBlLWlubmVyIC5hbnQtY2FyZC1oZWFkLXRpdGxlIHtcXG4gIHBhZGRpbmc6IDEycHggMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLmFudC1jYXJkLXR5cGUtaW5uZXIgLmFudC1jYXJkLWJvZHkge1xcbiAgcGFkZGluZzogMTZweCAyNHB4O1xcbn1cXG4uYW50LWNhcmQtdHlwZS1pbm5lciAuYW50LWNhcmQtZXh0cmEge1xcbiAgcGFkZGluZzogMTMuNXB4IDA7XFxufVxcbi5hbnQtY2FyZC1tZXRhIHtcXG4gIG1hcmdpbjogLTRweCAwO1xcbiAgem9vbTogMTtcXG59XFxuLmFudC1jYXJkLW1ldGE6YmVmb3JlLFxcbi5hbnQtY2FyZC1tZXRhOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbn1cXG4uYW50LWNhcmQtbWV0YTphZnRlciB7XFxuICBjbGVhcjogYm90aDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGZvbnQtc2l6ZTogMDtcXG4gIGhlaWdodDogMDtcXG59XFxuLmFudC1jYXJkLW1ldGEtYXZhdGFyIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLmFudC1jYXJkLW1ldGEtZGV0YWlsIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5hbnQtY2FyZC1tZXRhLWRldGFpbCA+IGRpdjpub3QoOmxhc3QtY2hpbGQpIHtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuLmFudC1jYXJkLW1ldGEtdGl0bGUge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLmFudC1jYXJkLW1ldGEtZGVzY3JpcHRpb24ge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxufVxcbi5hbnQtY2FyZC1sb2FkaW5nIC5hbnQtY2FyZC1ib2R5IHtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4uYW50LWNhcmQtbG9hZGluZy1jb250ZW50IHtcXG4gIHBhZGRpbmc6IDI0cHg7XFxufVxcbi5hbnQtY2FyZC1sb2FkaW5nLWNvbnRlbnQgcCB7XFxuICBtYXJnaW46IDA7XFxufVxcbi5hbnQtY2FyZC1sb2FkaW5nLWJsb2NrIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbjogNXB4IDIlIDAgMDtcXG4gIGhlaWdodDogMTRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKHJnYmEoMjA3LCAyMTYsIDIyMCwgMC4yKSksIGNvbG9yLXN0b3AocmdiYSgyMDcsIDIxNiwgMjIwLCAwLjQpKSwgdG8ocmdiYSgyMDcsIDIxNiwgMjIwLCAwLjIpKSk7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDIwNywgMjE2LCAyMjAsIDAuMiksIHJnYmEoMjA3LCAyMTYsIDIyMCwgMC40KSwgcmdiYSgyMDcsIDIxNiwgMjIwLCAwLjIpKTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyMDcsIDIxNiwgMjIwLCAwLjIpLCByZ2JhKDIwNywgMjE2LCAyMjAsIDAuNCksIHJnYmEoMjA3LCAyMTYsIDIyMCwgMC4yKSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogY2FyZC1sb2FkaW5nIDEuNHMgZWFzZSBpbmZpbml0ZTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBjYXJkLWxvYWRpbmcgMS40cyBlYXNlIGluZmluaXRlO1xcbiAgYmFja2dyb3VuZC1zaXplOiA2MDAlIDYwMCU7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBjYXJkLWxvYWRpbmcge1xcbiAgMCUsXFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCA1MCU7XFxuICB9XFxuICA1MCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBjYXJkLWxvYWRpbmcge1xcbiAgMCUsXFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCA1MCU7XFxuICB9XFxuICA1MCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcXG4gIH1cXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIHN0eWxlbGludC1kaXNhYmxlIGF0LXJ1bGUtZW1wdHktbGluZS1iZWZvcmUsYXQtcnVsZS1uYW1lLXNwYWNlLWFmdGVyLGF0LXJ1bGUtbm8tdW5rbm93biAqL1xcbi8qIHN0eWxlbGludC1kaXNhYmxlIG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnMgKi9cXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1iYW5nLXNwYWNlLWJlZm9yZSxuby1kdXBsaWNhdGUtc2VsZWN0b3JzICovXFxuLyogc3R5bGVsaW50LWRpc2FibGUgZGVjbGFyYXRpb24tYmFuZy1zcGFjZS1iZWZvcmUsbm8tZHVwbGljYXRlLXNlbGVjdG9ycyAqL1xcbi5hbnQtbm90aWZpY2F0aW9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9ub3NwYWNlZCBOdW1iZXJcXFwiLCBcXFwiQ2hpbmVzZSBRdW90ZVxcXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiUGluZ0ZhbmcgU0NcXFwiLCBcXFwiSGlyYWdpbm8gU2FucyBHQlxcXCIsIFxcXCJNaWNyb3NvZnQgWWFIZWlcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxMDEwO1xcbiAgd2lkdGg6IDM4NHB4O1xcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gMzJweCk7XFxuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XFxufVxcbi5hbnQtbm90aWZpY2F0aW9uLXRvcExlZnQsXFxuLmFudC1ub3RpZmljYXRpb24tYm90dG9tTGVmdCB7XFxuICBtYXJnaW4tbGVmdDogMjRweDtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuLmFudC1ub3RpZmljYXRpb24tdG9wTGVmdCAuYW50LW5vdGlmaWNhdGlvbi1mYWRlLWVudGVyLmFudC1ub3RpZmljYXRpb24tZmFkZS1lbnRlci1hY3RpdmUsXFxuLmFudC1ub3RpZmljYXRpb24tYm90dG9tTGVmdCAuYW50LW5vdGlmaWNhdGlvbi1mYWRlLWVudGVyLmFudC1ub3RpZmljYXRpb24tZmFkZS1lbnRlci1hY3RpdmUsXFxuLmFudC1ub3RpZmljYXRpb24tdG9wTGVmdCAuYW50LW5vdGlmaWNhdGlvbi1mYWRlLWFwcGVhci5hbnQtbm90aWZpY2F0aW9uLWZhZGUtYXBwZWFyLWFjdGl2ZSxcXG4uYW50LW5vdGlmaWNhdGlvbi1ib3R0b21MZWZ0IC5hbnQtbm90aWZpY2F0aW9uLWZhZGUtYXBwZWFyLmFudC1ub3RpZmljYXRpb24tZmFkZS1hcHBlYXItYWN0aXZlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IE5vdGlmaWNhdGlvbkxlZnRGYWRlSW47XFxuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBOb3RpZmljYXRpb25MZWZ0RmFkZUluO1xcbn1cXG4uYW50LW5vdGlmaWNhdGlvbi1ub3RpY2Uge1xcbiAgcGFkZGluZzogMTZweCAyNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5hbnQtbm90aWZpY2F0aW9uLW5vdGljZS1tZXNzYWdlIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5hbnQtbm90aWZpY2F0aW9uLW5vdGljZS1tZXNzYWdlLXNpbmdsZS1saW5lLWF1dG8tbWFyZ2luIHtcXG4gIHdpZHRoOiBjYWxjKDM4NHB4IC0gMjRweCAqIDIgLSAyNHB4IC0gNDhweCAtIDEwMCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiA0cHg7XFxufVxcbi5hbnQtbm90aWZpY2F0aW9uLW5vdGljZS1tZXNzYWdlLXNpbmdsZS1saW5lLWF1dG8tbWFyZ2luOmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZy1ib3R0b206IDEwMCU7XFxufVxcbi5hbnQtbm90aWZpY2F0aW9uLW5vdGljZS1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbi5hbnQtbm90aWZpY2F0aW9uLW5vdGljZS1jbG9zYWJsZSAuYW50LW5vdGlmaWNhdGlvbi1ub3RpY2UtbWVzc2FnZSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xcbn1cXG4uYW50LW5vdGlmaWNhdGlvbi1ub3RpY2Utd2l0aC1pY29uIC5hbnQtbm90aWZpY2F0aW9uLW5vdGljZS1tZXNzYWdlIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIG1hcmdpbi1sZWZ0OiA0OHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbn1cXG4uYW50LW5vdGlmaWNhdGlvbi1ub3RpY2Utd2l0aC1pY29uIC5hbnQtbm90aWZpY2F0aW9uLW5vdGljZS1kZXNjcmlwdGlvbiB7XFxuICBtYXJnaW4tbGVmdDogNDhweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLmFudC1ub3RpZmljYXRpb24tbm90aWNlLWljb24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBtYXJnaW4tbGVmdDogNHB4O1xcbn1cXG4uYW50LW5vdGlmaWNhdGlvbi1ub3RpY2UtaWNvbi1zdWNjZXNzIHtcXG4gIGNvbG9yOiAjNTJjNDFhO1xcbn1cXG4uYW50LW5vdGlmaWNhdGlvbi1ub3RpY2UtaWNvbi1pbmZvIHtcXG4gIGNvbG9yOiAjMTg5MGZmO1xcbn1cXG4uYW50LW5vdGlmaWNhdGlvbi1ub3RpY2UtaWNvbi13YXJuaW5nIHtcXG4gIGNvbG9yOiAjZmFhZDE0O1xcbn1cXG4uYW50LW5vdGlmaWNhdGlvbi1ub3RpY2UtaWNvbi1lcnJvciB7XFxuICBjb2xvcjogI2Y1MjIyZDtcXG59XFxuLmFudC1ub3RpZmljYXRpb24tbm90aWNlLWNsb3NlLXg6YWZ0ZXIge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29udGVudDogXFxcIlxcXFxFNjMzXFxcIjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiYW50aWNvblxcXCI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5hbnQtbm90aWZpY2F0aW9uLW5vdGljZS1jbG9zZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMjJweDtcXG4gIHRvcDogMTZweDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuYS5hbnQtbm90aWZpY2F0aW9uLW5vdGljZS1jbG9zZTpmb2N1cyB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5hbnQtbm90aWZpY2F0aW9uLW5vdGljZS1jbG9zZTpob3ZlciB7XFxuICBjb2xvcjogIzQwNDA0MDtcXG59XFxuLmFudC1ub3RpZmljYXRpb24tbm90aWNlLWJ0biB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcbn1cXG4uYW50LW5vdGlmaWNhdGlvbiAubm90aWZpY2F0aW9uLWZhZGUtZWZmZWN0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjI0cztcXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjI0cztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XFxufVxcbi5hbnQtbm90aWZpY2F0aW9uLWZhZGUtZW50ZXIsXFxuLmFudC1ub3RpZmljYXRpb24tZmFkZS1hcHBlYXIge1xcbiAgb3BhY2l0eTogMDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjI0cztcXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjI0cztcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XFxuICAgICAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XFxufVxcbi5hbnQtbm90aWZpY2F0aW9uLWZhZGUtbGVhdmUge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuMjRzO1xcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMjRzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XFxuICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMnM7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XFxuICAgICAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XFxufVxcbi5hbnQtbm90aWZpY2F0aW9uLWZhZGUtZW50ZXIuYW50LW5vdGlmaWNhdGlvbi1mYWRlLWVudGVyLWFjdGl2ZSxcXG4uYW50LW5vdGlmaWNhdGlvbi1mYWRlLWFwcGVhci5hbnQtbm90aWZpY2F0aW9uLWZhZGUtYXBwZWFyLWFjdGl2ZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBOb3RpZmljYXRpb25GYWRlSW47XFxuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBOb3RpZmljYXRpb25GYWRlSW47XFxuICAtd2Via2l0LWFuaW1hdGlvbi1wbGF5LXN0YXRlOiBydW5uaW5nO1xcbiAgICAgICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcXG59XFxuLmFudC1ub3RpZmljYXRpb24tZmFkZS1sZWF2ZS5hbnQtbm90aWZpY2F0aW9uLWZhZGUtbGVhdmUtYWN0aXZlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IE5vdGlmaWNhdGlvbkZhZGVPdXQ7XFxuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBOb3RpZmljYXRpb25GYWRlT3V0O1xcbiAgLXdlYmtpdC1hbmltYXRpb24tcGxheS1zdGF0ZTogcnVubmluZztcXG4gICAgICAgICAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHJ1bm5pbmc7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBOb3RpZmljYXRpb25GYWRlSW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBsZWZ0OiAzODRweDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBsZWZ0OiAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIE5vdGlmaWNhdGlvbkZhZGVJbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGxlZnQ6IDM4NHB4O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIGxlZnQ6IDA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBOb3RpZmljYXRpb25MZWZ0RmFkZUluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcmlnaHQ6IDM4NHB4O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIE5vdGlmaWNhdGlvbkxlZnRGYWRlSW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICByaWdodDogMzg0cHg7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBOb3RpZmljYXRpb25GYWRlT3V0IHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gICAgcGFkZGluZy10b3A6IDE2cHggMjRweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDE2cHggMjRweDtcXG4gICAgbWF4LWhlaWdodDogMTUwcHg7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgcGFkZGluZy10b3A6IDA7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgICBtYXgtaGVpZ2h0OiAwO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIE5vdGlmaWNhdGlvbkZhZGVPdXQge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTZweCAyNHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweCAyNHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICBwYWRkaW5nLXRvcDogMDtcXG4gICAgcGFkZGluZy1ib3R0b206IDA7XFxuICAgIG1heC1oZWlnaHQ6IDA7XFxuICB9XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiBzdHlsZWxpbnQtZGlzYWJsZSBhdC1ydWxlLWVtcHR5LWxpbmUtYmVmb3JlLGF0LXJ1bGUtbmFtZS1zcGFjZS1hZnRlcixhdC1ydWxlLW5vLXVua25vd24gKi9cXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBuby1kdXBsaWNhdGUtc2VsZWN0b3JzICovXFxuLyogc3R5bGVsaW50LWRpc2FibGUgZGVjbGFyYXRpb24tYmFuZy1zcGFjZS1iZWZvcmUsbm8tZHVwbGljYXRlLXNlbGVjdG9ycyAqL1xcbi8qIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLWJhbmctc3BhY2UtYmVmb3JlLG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnMgKi9cXG4uYW50LXRhYnMuYW50LXRhYnMtY2FyZCA+IC5hbnQtdGFicy1iYXIgLmFudC10YWJzLW5hdi1jb250YWluZXIge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG4uYW50LXRhYnMuYW50LXRhYnMtY2FyZCA+IC5hbnQtdGFicy1iYXIgLmFudC10YWJzLWluay1iYXIge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4uYW50LXRhYnMuYW50LXRhYnMtY2FyZCA+IC5hbnQtdGFicy1iYXIgLmFudC10YWJzLXRhYiB7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGU4O1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcXG4gIG1hcmdpbi1yaWdodDogMnB4O1xcbiAgcGFkZGluZzogMCAxNnB4O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XFxuICBsaW5lLWhlaWdodDogMzhweDtcXG59XFxuLmFudC10YWJzLmFudC10YWJzLWNhcmQgPiAuYW50LXRhYnMtYmFyIC5hbnQtdGFicy10YWItYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItY29sb3I6ICNlOGU4ZTg7XFxuICBjb2xvcjogIzE4OTBmZjtcXG4gIHBhZGRpbmctYm90dG9tOiAxcHg7XFxufVxcbi5hbnQtdGFicy5hbnQtdGFicy1jYXJkID4gLmFudC10YWJzLWJhciAuYW50LXRhYnMtdGFiLWluYWN0aXZlIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5hbnQtdGFicy5hbnQtdGFicy1jYXJkID4gLmFudC10YWJzLWJhciAuYW50LXRhYnMtbmF2LXdyYXAge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLmFudC10YWJzLmFudC10YWJzLWNhcmQgPiAuYW50LXRhYnMtYmFyIC5hbnQtdGFicy10YWIgLmFudGljb24tY2xvc2Uge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3M7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbWFyZ2luLWxlZnQ6IDNweDtcXG4gIG1hcmdpbi1yaWdodDogLTVweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBoZWlnaHQ6IDE0cHg7XFxufVxcbi5hbnQtdGFicy5hbnQtdGFicy1jYXJkID4gLmFudC10YWJzLWJhciAuYW50LXRhYnMtdGFiIC5hbnRpY29uLWNsb3NlOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xcbn1cXG4uYW50LXRhYnMuYW50LXRhYnMtY2FyZCAuYW50LXRhYnMtY29udGVudCA+IC5hbnQtdGFicy10YWJwYW5lLFxcbi5hbnQtdGFicy5hbnQtdGFicy1lZGl0YWJsZS1jYXJkIC5hbnQtdGFicy1jb250ZW50ID4gLmFudC10YWJzLXRhYnBhbmUge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxuICB0cmFuc2l0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi5hbnQtdGFicy5hbnQtdGFicy1jYXJkIC5hbnQtdGFicy1jb250ZW50ID4gLmFudC10YWJzLXRhYnBhbmUtaW5hY3RpdmUsXFxuLmFudC10YWJzLmFudC10YWJzLWVkaXRhYmxlLWNhcmQgLmFudC10YWJzLWNvbnRlbnQgPiAuYW50LXRhYnMtdGFicGFuZS1pbmFjdGl2ZSB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uYW50LXRhYnMuYW50LXRhYnMtY2FyZCA+IC5hbnQtdGFicy1iYXIgLmFudC10YWJzLXRhYjpob3ZlciAuYW50aWNvbi1jbG9zZSB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4uYW50LXRhYnMtZXh0cmEtY29udGVudCB7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG59XFxuLmFudC10YWJzLWV4dHJhLWNvbnRlbnQgLmFudC10YWJzLW5ldy10YWIge1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZTg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcztcXG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XFxufVxcbi5hbnQtdGFicy1leHRyYS1jb250ZW50IC5hbnQtdGFicy1uZXctdGFiOmhvdmVyIHtcXG4gIGNvbG9yOiAjMTg5MGZmO1xcbiAgYm9yZGVyLWNvbG9yOiAjMTg5MGZmO1xcbn1cXG4uYW50LXRhYnMtdmVydGljYWwuYW50LXRhYnMtY2FyZCA+IC5hbnQtdGFicy1iYXIgLmFudC10YWJzLW5hdi1jb250YWluZXIge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4uYW50LXRhYnMtdmVydGljYWwuYW50LXRhYnMtY2FyZCA+IC5hbnQtdGFicy1iYXIgLmFudC10YWJzLXRhYiB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZThlODtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuLmFudC10YWJzLXZlcnRpY2FsLmFudC10YWJzLWNhcmQgPiAuYW50LXRhYnMtYmFyIC5hbnQtdGFicy10YWItYWN0aXZlIHtcXG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XFxufVxcbi5hbnQtdGFicy12ZXJ0aWNhbC5hbnQtdGFicy1jYXJkID4gLmFudC10YWJzLWJhciAuYW50LXRhYnMtdGFiOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG4uYW50LXRhYnMtdmVydGljYWwuYW50LXRhYnMtY2FyZCA+IC5hbnQtdGFicy1iYXIgLmFudC10YWJzLW5ldy10YWIge1xcbiAgd2lkdGg6IDkwJTtcXG59XFxuLmFudC10YWJzLXZlcnRpY2FsLmFudC10YWJzLWNhcmQuYW50LXRhYnMtbGVmdCA+IC5hbnQtdGFicy1iYXIgLmFudC10YWJzLW5hdi13cmFwIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuLmFudC10YWJzLXZlcnRpY2FsLmFudC10YWJzLWNhcmQuYW50LXRhYnMtbGVmdCA+IC5hbnQtdGFicy1iYXIgLmFudC10YWJzLXRhYiB7XFxuICBib3JkZXItcmlnaHQ6IDA7XFxuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcXG4gIG1hcmdpbi1yaWdodDogMXB4O1xcbn1cXG4uYW50LXRhYnMtdmVydGljYWwuYW50LXRhYnMtY2FyZC5hbnQtdGFicy1sZWZ0ID4gLmFudC10YWJzLWJhciAuYW50LXRhYnMtdGFiLWFjdGl2ZSB7XFxuICBtYXJnaW4tcmlnaHQ6IC0xcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxOHB4O1xcbn1cXG4uYW50LXRhYnMtdmVydGljYWwuYW50LXRhYnMtY2FyZC5hbnQtdGFicy1yaWdodCA+IC5hbnQtdGFicy1iYXIgLmFudC10YWJzLW5hdi13cmFwIHtcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcbn1cXG4uYW50LXRhYnMtdmVydGljYWwuYW50LXRhYnMtY2FyZC5hbnQtdGFicy1yaWdodCA+IC5hbnQtdGFicy1iYXIgLmFudC10YWJzLXRhYiB7XFxuICBib3JkZXItbGVmdDogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xcbiAgbWFyZ2luLWxlZnQ6IDFweDtcXG59XFxuLmFudC10YWJzLXZlcnRpY2FsLmFudC10YWJzLWNhcmQuYW50LXRhYnMtcmlnaHQgPiAuYW50LXRhYnMtYmFyIC5hbnQtdGFicy10YWItYWN0aXZlIHtcXG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xcbn1cXG4uYW50LXRhYnMuYW50LXRhYnMtY2FyZC5hbnQtdGFicy1ib3R0b20gPiAuYW50LXRhYnMtYmFyIC5hbnQtdGFicy10YWIge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGU4ZTg7XFxuICBib3JkZXItdG9wOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDRweCA0cHg7XFxufVxcbi5hbnQtdGFicy5hbnQtdGFicy1jYXJkLmFudC10YWJzLWJvdHRvbSA+IC5hbnQtdGFicy1iYXIgLmFudC10YWJzLXRhYi1hY3RpdmUge1xcbiAgY29sb3I6ICMxODkwZmY7XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gIHBhZGRpbmctdG9wOiAxcHg7XFxufVxcbi5hbnQtdGFicyB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbm9zcGFjZWQgTnVtYmVyXFxcIiwgXFxcIkNoaW5lc2UgUXVvdGVcXFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIlBpbmdGYW5nIFNDXFxcIiwgXFxcIkhpcmFnaW5vIFNhbnMgR0JcXFwiLCBcXFwiTWljcm9zb2Z0IFlhSGVpXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHpvb206IDE7XFxufVxcbi5hbnQtdGFiczpiZWZvcmUsXFxuLmFudC10YWJzOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbn1cXG4uYW50LXRhYnM6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBmb250LXNpemU6IDA7XFxuICBoZWlnaHQ6IDA7XFxufVxcbi5hbnQtdGFicy1pbmstYmFyIHtcXG4gIHotaW5kZXg6IDE7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAxcHg7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODkwZmY7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG4gICAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxufVxcbi5hbnQtdGFicy1iYXIge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGU4ZTg7XFxuICBtYXJnaW46IDAgMCAxNnB4IDA7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBwYWRkaW5nIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xcbiAgdHJhbnNpdGlvbjogcGFkZGluZyAwLjNzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcXG59XFxuLmFudC10YWJzLW5hdi1jb250YWluZXIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogcGFkZGluZyAwLjNzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcXG4gIHRyYW5zaXRpb246IHBhZGRpbmcgMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XFxuICB6b29tOiAxO1xcbn1cXG4uYW50LXRhYnMtbmF2LWNvbnRhaW5lcjpiZWZvcmUsXFxuLmFudC10YWJzLW5hdi1jb250YWluZXI6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgZGlzcGxheTogdGFibGU7XFxufVxcbi5hbnQtdGFicy1uYXYtY29udGFpbmVyOmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgZm9udC1zaXplOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG4uYW50LXRhYnMtbmF2LWNvbnRhaW5lci1zY3JvbGxpbmcge1xcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xcbiAgcGFkZGluZy1yaWdodDogMzJweDtcXG59XFxuLmFudC10YWJzLWJvdHRvbSAuYW50LXRhYnMtYmFyIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U4ZThlODtcXG59XFxuLmFudC10YWJzLWJvdHRvbSAuYW50LXRhYnMtaW5rLWJhciB7XFxuICBib3R0b206IGF1dG87XFxuICB0b3A6IDFweDtcXG59XFxuLmFudC10YWJzLWJvdHRvbSAuYW50LXRhYnMtbmF2LWNvbnRhaW5lciB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgbWFyZ2luLXRvcDogLTFweDtcXG59XFxuLmFudC10YWJzLXRhYi1wcmV2LFxcbi5hbnQtdGFicy10YWItbmV4dCB7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgei1pbmRleDogMjtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogd2lkdGggMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksIG9wYWNpdHkgMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksIGNvbG9yIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksIG9wYWNpdHkgMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksIGNvbG9yIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4uYW50LXRhYnMtdGFiLXByZXYuYW50LXRhYnMtdGFiLWFycm93LXNob3csXFxuLmFudC10YWJzLXRhYi1uZXh0LmFudC10YWJzLXRhYi1hcnJvdy1zaG93IHtcXG4gIG9wYWNpdHk6IDE7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cXG4uYW50LXRhYnMtdGFiLXByZXY6aG92ZXIsXFxuLmFudC10YWJzLXRhYi1uZXh0OmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbn1cXG4uYW50LXRhYnMtdGFiLXByZXYtaWNvbixcXG4uYW50LXRhYnMtdGFiLW5leHQtaWNvbiB7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG4uYW50LXRhYnMtdGFiLXByZXYtaWNvbjpiZWZvcmUsXFxuLmFudC10YWJzLXRhYi1uZXh0LWljb246YmVmb3JlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJhbnRpY29uXFxcIiAhaW1wb3J0YW50O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC1zaXplOiAxMHB4IFxcXFw5O1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuODMzMzMzMzMpIHJvdGF0ZSgwZGVnKTtcXG4gICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjgzMzMzMzMzKSByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44MzMzMzMzMykgcm90YXRlKDBkZWcpO1xcbn1cXG46cm9vdCAuYW50LXRhYnMtdGFiLXByZXYtaWNvbjpiZWZvcmUsXFxuOnJvb3QgLmFudC10YWJzLXRhYi1uZXh0LWljb246YmVmb3JlIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLmFudC10YWJzLXRhYi1idG4tZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLmFudC10YWJzLXRhYi1idG4tZGlzYWJsZWQsXFxuLmFudC10YWJzLXRhYi1idG4tZGlzYWJsZWQ6aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxufVxcbi5hbnQtdGFicy10YWItbmV4dCB7XFxuICByaWdodDogMnB4O1xcbn1cXG4uYW50LXRhYnMtdGFiLW5leHQtaWNvbjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjFGXFxcIjtcXG59XFxuLmFudC10YWJzLXRhYi1wcmV2IHtcXG4gIGxlZnQ6IDA7XFxufVxcbi5hbnQtdGFicy10YWItcHJldi1pY29uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MjBcXFwiO1xcbn1cXG46cm9vdCAuYW50LXRhYnMtdGFiLXByZXYge1xcbiAgLXdlYmtpdC1maWx0ZXI6IG5vbmU7XFxuICAgICAgICAgIGZpbHRlcjogbm9uZTtcXG59XFxuLmFudC10YWJzLW5hdi13cmFwIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xcbn1cXG4uYW50LXRhYnMtbmF2LXNjcm9sbCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLmFudC10YWJzLW5hdiB7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksIC13ZWJraXQtdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmFudC10YWJzLW5hdjpiZWZvcmUsXFxuLmFudC10YWJzLW5hdjphZnRlciB7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG59XFxuLmFudC10YWJzLW5hdjphZnRlciB7XFxuICBjbGVhcjogYm90aDtcXG59XFxuLmFudC10YWJzLW5hdiAuYW50LXRhYnMtdGFiLWRpc2FibGVkIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxufVxcbi5hbnQtdGFicy1uYXYgLmFudC10YWJzLXRhYiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDAgMzJweCAwIDA7XFxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5hbnQtdGFicy1uYXYgLmFudC10YWJzLXRhYjpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuLmFudC10YWJzLW5hdiAuYW50LXRhYnMtdGFiOmhvdmVyIHtcXG4gIGNvbG9yOiAjNDBhOWZmO1xcbn1cXG4uYW50LXRhYnMtbmF2IC5hbnQtdGFicy10YWI6YWN0aXZlIHtcXG4gIGNvbG9yOiAjMDk2ZGQ5O1xcbn1cXG4uYW50LXRhYnMtbmF2IC5hbnQtdGFicy10YWIgLmFudGljb24ge1xcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxufVxcbi5hbnQtdGFicy1uYXYgLmFudC10YWJzLXRhYi1hY3RpdmUge1xcbiAgY29sb3I6ICMxODkwZmY7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG4uYW50LXRhYnMtbGFyZ2UgLmFudC10YWJzLW5hdi1jb250YWluZXIge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4uYW50LXRhYnMtbGFyZ2UgLmFudC10YWJzLXRhYiB7XFxuICBwYWRkaW5nOiAxNnB4O1xcbn1cXG4uYW50LXRhYnMtc21hbGwgLmFudC10YWJzLW5hdi1jb250YWluZXIge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uYW50LXRhYnMtc21hbGwgLmFudC10YWJzLXRhYiB7XFxuICBwYWRkaW5nOiA4cHggMTZweDtcXG59XFxuLmFudC10YWJzOm5vdCguYW50LXRhYnMtdmVydGljYWwpID4gLmFudC10YWJzLWNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5hbnQtdGFiczpub3QoLmFudC10YWJzLXZlcnRpY2FsKSA+IC5hbnQtdGFicy1jb250ZW50ID4gLmFudC10YWJzLXRhYnBhbmUge1xcbiAgLXdlYmtpdC1mbGV4LXNocmluazogMDtcXG4gICAgICAtbXMtZmxleC1uZWdhdGl2ZTogMDtcXG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAuNDVzO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNDVzO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuLmFudC10YWJzOm5vdCguYW50LXRhYnMtdmVydGljYWwpID4gLmFudC10YWJzLWNvbnRlbnQgPiAuYW50LXRhYnMtdGFicGFuZS1pbmFjdGl2ZSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5hbnQtdGFiczpub3QoLmFudC10YWJzLXZlcnRpY2FsKSA+IC5hbnQtdGFicy1jb250ZW50LWFuaW1hdGVkIHtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiBob3Jpem9udGFsO1xcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XFxuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB3aWxsLWNoYW5nZTogbWFyZ2luLWxlZnQ7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuM3MgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xcbiAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XFxufVxcbi5hbnQtdGFicy12ZXJ0aWNhbCA+IC5hbnQtdGFicy1iYXIge1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmFudC10YWJzLXZlcnRpY2FsID4gLmFudC10YWJzLWJhci10YWItcHJldixcXG4uYW50LXRhYnMtdmVydGljYWwgPiAuYW50LXRhYnMtYmFyLXRhYi1uZXh0IHtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAwO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksIG9wYWNpdHkgMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksIGNvbG9yIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuM3MgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLCBvcGFjaXR5IDAuM3MgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLCBjb2xvciAwLjNzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcXG59XFxuLmFudC10YWJzLXZlcnRpY2FsID4gLmFudC10YWJzLWJhci10YWItcHJldi5hbnQtdGFicy10YWItYXJyb3ctc2hvdyxcXG4uYW50LXRhYnMtdmVydGljYWwgPiAuYW50LXRhYnMtYmFyLXRhYi1uZXh0LmFudC10YWJzLXRhYi1hcnJvdy1zaG93IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMnB4O1xcbn1cXG4uYW50LXRhYnMtdmVydGljYWwgPiAuYW50LXRhYnMtYmFyIC5hbnQtdGFicy10YWIge1xcbiAgZmxvYXQ6IG5vbmU7XFxuICBtYXJnaW46IDAgMCAxNnB4IDA7XFxuICBwYWRkaW5nOiA4cHggMjRweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uYW50LXRhYnMtdmVydGljYWwgPiAuYW50LXRhYnMtYmFyIC5hbnQtdGFicy10YWI6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4uYW50LXRhYnMtdmVydGljYWwgPiAuYW50LXRhYnMtYmFyIC5hbnQtdGFicy1leHRyYS1jb250ZW50IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmFudC10YWJzLXZlcnRpY2FsID4gLmFudC10YWJzLWJhciAuYW50LXRhYnMtbmF2LXNjcm9sbCB7XFxuICB3aWR0aDogYXV0bztcXG59XFxuLmFudC10YWJzLXZlcnRpY2FsID4gLmFudC10YWJzLWJhciAuYW50LXRhYnMtbmF2LWNvbnRhaW5lcixcXG4uYW50LXRhYnMtdmVydGljYWwgPiAuYW50LXRhYnMtYmFyIC5hbnQtdGFicy1uYXYtd3JhcCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5hbnQtdGFicy12ZXJ0aWNhbCA+IC5hbnQtdGFicy1iYXIgLmFudC10YWJzLW5hdi1jb250YWluZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLmFudC10YWJzLXZlcnRpY2FsID4gLmFudC10YWJzLWJhciAuYW50LXRhYnMtbmF2LWNvbnRhaW5lci5hbnQtdGFicy1uYXYtY29udGFpbmVyLXNjcm9sbGluZyB7XFxuICBwYWRkaW5nOiAzMnB4IDA7XFxufVxcbi5hbnQtdGFicy12ZXJ0aWNhbCA+IC5hbnQtdGFicy1iYXIgLmFudC10YWJzLW5hdi13cmFwIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5hbnQtdGFicy12ZXJ0aWNhbCA+IC5hbnQtdGFicy1iYXIgLmFudC10YWJzLW5hdiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmFudC10YWJzLXZlcnRpY2FsID4gLmFudC10YWJzLWJhciAuYW50LXRhYnMtaW5rLWJhciB7XFxuICB3aWR0aDogMnB4O1xcbiAgbGVmdDogYXV0bztcXG4gIGhlaWdodDogYXV0bztcXG4gIHRvcDogMDtcXG59XFxuLmFudC10YWJzLXZlcnRpY2FsID4gLmFudC10YWJzLWJhciAuYW50LXRhYnMtdGFiLW5leHQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3R0b206IDA7XFxuICBoZWlnaHQ6IDMycHg7XFxufVxcbi5hbnQtdGFicy12ZXJ0aWNhbCA+IC5hbnQtdGFicy1iYXIgLmFudC10YWJzLXRhYi1uZXh0LWljb246YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYxRFxcXCI7XFxufVxcbi5hbnQtdGFicy12ZXJ0aWNhbCA+IC5hbnQtdGFicy1iYXIgLmFudC10YWJzLXRhYi1wcmV2IHtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMnB4O1xcbn1cXG4uYW50LXRhYnMtdmVydGljYWwgPiAuYW50LXRhYnMtYmFyIC5hbnQtdGFicy10YWItcHJldi1pY29uOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MUVcXFwiO1xcbn1cXG4uYW50LXRhYnMtdmVydGljYWwgPiAuYW50LXRhYnMtY29udGVudCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XFxufVxcbi5hbnQtdGFicy12ZXJ0aWNhbC5hbnQtdGFicy1sZWZ0ID4gLmFudC10YWJzLWJhciB7XFxuICBmbG9hdDogbGVmdDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlOGU4ZTg7XFxuICBtYXJnaW4tcmlnaHQ6IC0xcHg7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4uYW50LXRhYnMtdmVydGljYWwuYW50LXRhYnMtbGVmdCA+IC5hbnQtdGFicy1iYXIgLmFudC10YWJzLXRhYiB7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuLmFudC10YWJzLXZlcnRpY2FsLmFudC10YWJzLWxlZnQgPiAuYW50LXRhYnMtYmFyIC5hbnQtdGFicy1uYXYtY29udGFpbmVyIHtcXG4gIG1hcmdpbi1yaWdodDogLTFweDtcXG59XFxuLmFudC10YWJzLXZlcnRpY2FsLmFudC10YWJzLWxlZnQgPiAuYW50LXRhYnMtYmFyIC5hbnQtdGFicy1uYXYtd3JhcCB7XFxuICBtYXJnaW4tcmlnaHQ6IC0xcHg7XFxufVxcbi5hbnQtdGFicy12ZXJ0aWNhbC5hbnQtdGFicy1sZWZ0ID4gLmFudC10YWJzLWJhciAuYW50LXRhYnMtaW5rLWJhciB7XFxuICByaWdodDogMXB4O1xcbn1cXG4uYW50LXRhYnMtdmVydGljYWwuYW50LXRhYnMtbGVmdCA+IC5hbnQtdGFicy1jb250ZW50IHtcXG4gIHBhZGRpbmctbGVmdDogMjRweDtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2U4ZThlODtcXG59XFxuLmFudC10YWJzLXZlcnRpY2FsLmFudC10YWJzLXJpZ2h0ID4gLmFudC10YWJzLWJhciB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlOGU4ZTg7XFxuICBtYXJnaW4tbGVmdDogLTFweDtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5hbnQtdGFicy12ZXJ0aWNhbC5hbnQtdGFicy1yaWdodCA+IC5hbnQtdGFicy1iYXIgLmFudC10YWJzLW5hdi1jb250YWluZXIge1xcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XFxufVxcbi5hbnQtdGFicy12ZXJ0aWNhbC5hbnQtdGFicy1yaWdodCA+IC5hbnQtdGFicy1iYXIgLmFudC10YWJzLW5hdi13cmFwIHtcXG4gIG1hcmdpbi1sZWZ0OiAtMXB4O1xcbn1cXG4uYW50LXRhYnMtdmVydGljYWwuYW50LXRhYnMtcmlnaHQgPiAuYW50LXRhYnMtYmFyIC5hbnQtdGFicy1pbmstYmFyIHtcXG4gIGxlZnQ6IDFweDtcXG59XFxuLmFudC10YWJzLXZlcnRpY2FsLmFudC10YWJzLXJpZ2h0ID4gLmFudC10YWJzLWNvbnRlbnQge1xcbiAgcGFkZGluZy1yaWdodDogMjRweDtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlOGU4ZTg7XFxufVxcbi5hbnQtdGFicy1ib3R0b20gPiAuYW50LXRhYnMtYmFyIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcbn1cXG4uYW50LXRhYnMtdG9wIC5hbnQtdGFicy1pbmstYmFyLWFuaW1hdGVkLFxcbi5hbnQtdGFicy1ib3R0b20gLmFudC10YWJzLWluay1iYXItYW5pbWF0ZWQge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSwgLXdlYmtpdC10cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XFxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSwgLXdlYmtpdC10cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksIHdpZHRoIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLCB3aWR0aCAwLjNzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSwgLXdlYmtpdC10cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XFxufVxcbi5hbnQtdGFicy1sZWZ0IC5hbnQtdGFicy1pbmstYmFyLWFuaW1hdGVkLFxcbi5hbnQtdGFicy1yaWdodCAuYW50LXRhYnMtaW5rLWJhci1hbmltYXRlZCB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGhlaWdodCAwLjNzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSwgLXdlYmtpdC10cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XFxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksIC13ZWJraXQtdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpLCBoZWlnaHQgMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSksIGhlaWdodCAwLjNzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKSwgLXdlYmtpdC10cmFuc2Zvcm0gMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XFxufVxcbi5uby1mbGV4ID4gLmFudC10YWJzLWNvbnRlbnQtYW5pbWF0ZWQsXFxuLmFudC10YWJzLW5vLWFuaW1hdGlvbiA+IC5hbnQtdGFicy1jb250ZW50LWFuaW1hdGVkLFxcbi5hbnQtdGFicy12ZXJ0aWNhbCA+IC5hbnQtdGFicy1jb250ZW50LWFuaW1hdGVkIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XFxuICAgICAgLW1zLXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xcbiAgICAgICAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcXG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XFxufVxcbi5uby1mbGV4ID4gLmFudC10YWJzLWNvbnRlbnQgPiAuYW50LXRhYnMtdGFicGFuZS1pbmFjdGl2ZSxcXG4uYW50LXRhYnMtbm8tYW5pbWF0aW9uID4gLmFudC10YWJzLWNvbnRlbnQgPiAuYW50LXRhYnMtdGFicGFuZS1pbmFjdGl2ZSxcXG4uYW50LXRhYnMtdmVydGljYWwgPiAuYW50LXRhYnMtY29udGVudCA+IC5hbnQtdGFicy10YWJwYW5lLWluYWN0aXZlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc2V0dGluZ19jYXJke1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLnNldHRpbmdfZm9ybV9pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG4uc2V0dGluZ19zZWFyY2hfZm9ybXtcXHJcXG4gICAgLyptYXJnaW4tYm90dG9tOiAyNHB4OyovXFxyXFxufVxcclxcbi5zZXR0aW5nX2Zvcm1faXRlbSAuYW50LWZvcm0taXRlbS1jb250cm9sLXdyYXBwZXIge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG4uc2V0dGluZ19zeXN0ZW1fYnRuX2dyb3Vwe1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkU6L+WJjeerry9qbXlkLWFtcy9wYy9zcmMvcGFnZXMvc2V0dGluZy9zZXR0aW5nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7Q0FDZjtBQUNEO0lBQ0kseUJBQXlCO0NBQzVCO0FBQ0Q7SUFDSSx3QkFBd0I7Q0FDM0I7QUFDRDtJQUNJLFFBQVE7Q0FDWDtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7Q0FDdEJcIixcImZpbGVcIjpcInNldHRpbmcuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jYXJke1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuLmZvcm1faXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuLnNlYXJjaF9mb3Jte1xcclxcbiAgICAvKm1hcmdpbi1ib3R0b206IDI0cHg7Ki9cXHJcXG59XFxyXFxuLmZvcm1faXRlbSA6Z2xvYmFsKC5hbnQtZm9ybS1pdGVtLWNvbnRyb2wtd3JhcHBlcikge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG4uc3lzdGVtX2J0bl9ncm91cHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJjYXJkXCI6IFwic2V0dGluZ19jYXJkXCIsXG5cdFwiZm9ybV9pdGVtXCI6IFwic2V0dGluZ19mb3JtX2l0ZW1cIixcblx0XCJzZWFyY2hfZm9ybVwiOiBcInNldHRpbmdfc2VhcmNoX2Zvcm1cIixcblx0XCJzeXN0ZW1fYnRuX2dyb3VwXCI6IFwic2V0dGluZ19zeXN0ZW1fYnRuX2dyb3VwXCJcbn07IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIG5vdyA9IHJlcXVpcmUoJy4vbm93JyksXG4gICAgdG9OdW1iZXIgPSByZXF1aXJlKCcuL3RvTnVtYmVyJyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGVsYXlzIGludm9raW5nIGBmdW5jYCB1bnRpbCBhZnRlciBgd2FpdGBcbiAqIG1pbGxpc2Vjb25kcyBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHdhc1xuICogaW52b2tlZC4gVGhlIGRlYm91bmNlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGAgbWV0aG9kIHRvIGNhbmNlbFxuICogZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG8gaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uXG4gKiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYCBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGVcbiAqIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YCB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWRcbiAqIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnRcbiAqIGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgXG4gKiBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVib3VuY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4V2FpdF1cbiAqICBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0J3MgaW52b2tlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBjb3N0bHkgY2FsY3VsYXRpb25zIHdoaWxlIHRoZSB3aW5kb3cgc2l6ZSBpcyBpbiBmbHV4LlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHNlbmRNYWlsYCB3aGVuIGNsaWNrZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxscy5cbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBfLmRlYm91bmNlKHNlbmRNYWlsLCAzMDAsIHtcbiAqICAgJ2xlYWRpbmcnOiB0cnVlLFxuICogICAndHJhaWxpbmcnOiBmYWxzZVxuICogfSkpO1xuICpcbiAqIC8vIEVuc3VyZSBgYmF0Y2hMb2dgIGlzIGludm9rZWQgb25jZSBhZnRlciAxIHNlY29uZCBvZiBkZWJvdW5jZWQgY2FsbHMuXG4gKiB2YXIgZGVib3VuY2VkID0gXy5kZWJvdW5jZShiYXRjaExvZywgMjUwLCB7ICdtYXhXYWl0JzogMTAwMCB9KTtcbiAqIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoJy9zdHJlYW0nKTtcbiAqIGpRdWVyeShzb3VyY2UpLm9uKCdtZXNzYWdlJywgZGVib3VuY2VkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIGRlYm91bmNlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgZGVib3VuY2VkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxhc3RBcmdzLFxuICAgICAgbGFzdFRoaXMsXG4gICAgICBtYXhXYWl0LFxuICAgICAgcmVzdWx0LFxuICAgICAgdGltZXJJZCxcbiAgICAgIGxhc3RDYWxsVGltZSxcbiAgICAgIGxhc3RJbnZva2VUaW1lID0gMCxcbiAgICAgIGxlYWRpbmcgPSBmYWxzZSxcbiAgICAgIG1heGluZyA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHdhaXQgPSB0b051bWJlcih3YWl0KSB8fCAwO1xuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4aW5nID0gJ21heFdhaXQnIGluIG9wdGlvbnM7XG4gICAgbWF4V2FpdCA9IG1heGluZyA/IG5hdGl2ZU1heCh0b051bWJlcihvcHRpb25zLm1heFdhaXQpIHx8IDAsIHdhaXQpIDogbWF4V2FpdDtcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlRnVuYyh0aW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBsYXN0QXJncyxcbiAgICAgICAgdGhpc0FyZyA9IGxhc3RUaGlzO1xuXG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gbGVhZGluZ0VkZ2UodGltZSkge1xuICAgIC8vIFJlc2V0IGFueSBgbWF4V2FpdGAgdGltZXIuXG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIC8vIFN0YXJ0IHRoZSB0aW1lciBmb3IgdGhlIHRyYWlsaW5nIGVkZ2UuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAvLyBJbnZva2UgdGhlIGxlYWRpbmcgZWRnZS5cbiAgICByZXR1cm4gbGVhZGluZyA/IGludm9rZUZ1bmModGltZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW1haW5pbmdXYWl0KHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lLFxuICAgICAgICB0aW1lV2FpdGluZyA9IHdhaXQgLSB0aW1lU2luY2VMYXN0Q2FsbDtcblxuICAgIHJldHVybiBtYXhpbmdcbiAgICAgID8gbmF0aXZlTWluKHRpbWVXYWl0aW5nLCBtYXhXYWl0IC0gdGltZVNpbmNlTGFzdEludm9rZSlcbiAgICAgIDogdGltZVdhaXRpbmc7XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRJbnZva2UodGltZSkge1xuICAgIHZhciB0aW1lU2luY2VMYXN0Q2FsbCA9IHRpbWUgLSBsYXN0Q2FsbFRpbWUsXG4gICAgICAgIHRpbWVTaW5jZUxhc3RJbnZva2UgPSB0aW1lIC0gbGFzdEludm9rZVRpbWU7XG5cbiAgICAvLyBFaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgY2FsbCwgYWN0aXZpdHkgaGFzIHN0b3BwZWQgYW5kIHdlJ3JlIGF0IHRoZVxuICAgIC8vIHRyYWlsaW5nIGVkZ2UsIHRoZSBzeXN0ZW0gdGltZSBoYXMgZ29uZSBiYWNrd2FyZHMgYW5kIHdlJ3JlIHRyZWF0aW5nXG4gICAgLy8gaXQgYXMgdGhlIHRyYWlsaW5nIGVkZ2UsIG9yIHdlJ3ZlIGhpdCB0aGUgYG1heFdhaXRgIGxpbWl0LlxuICAgIHJldHVybiAobGFzdENhbGxUaW1lID09PSB1bmRlZmluZWQgfHwgKHRpbWVTaW5jZUxhc3RDYWxsID49IHdhaXQpIHx8XG4gICAgICAodGltZVNpbmNlTGFzdENhbGwgPCAwKSB8fCAobWF4aW5nICYmIHRpbWVTaW5jZUxhc3RJbnZva2UgPj0gbWF4V2FpdCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdGltZXJFeHBpcmVkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgaWYgKHNob3VsZEludm9rZSh0aW1lKSkge1xuICAgICAgcmV0dXJuIHRyYWlsaW5nRWRnZSh0aW1lKTtcbiAgICB9XG4gICAgLy8gUmVzdGFydCB0aGUgdGltZXIuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCByZW1haW5pbmdXYWl0KHRpbWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWlsaW5nRWRnZSh0aW1lKSB7XG4gICAgdGltZXJJZCA9IHVuZGVmaW5lZDtcblxuICAgIC8vIE9ubHkgaW52b2tlIGlmIHdlIGhhdmUgYGxhc3RBcmdzYCB3aGljaCBtZWFucyBgZnVuY2AgaGFzIGJlZW5cbiAgICAvLyBkZWJvdW5jZWQgYXQgbGVhc3Qgb25jZS5cbiAgICBpZiAodHJhaWxpbmcgJiYgbGFzdEFyZ3MpIHtcbiAgICAgIHJldHVybiBpbnZva2VGdW5jKHRpbWUpO1xuICAgIH1cbiAgICBsYXN0QXJncyA9IGxhc3RUaGlzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVySWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICAgIH1cbiAgICBsYXN0SW52b2tlVGltZSA9IDA7XG4gICAgbGFzdEFyZ3MgPSBsYXN0Q2FsbFRpbWUgPSBsYXN0VGhpcyA9IHRpbWVySWQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBmdW5jdGlvbiBmbHVzaCgpIHtcbiAgICByZXR1cm4gdGltZXJJZCA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogdHJhaWxpbmdFZGdlKG5vdygpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYm91bmNlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpLFxuICAgICAgICBpc0ludm9raW5nID0gc2hvdWxkSW52b2tlKHRpbWUpO1xuXG4gICAgbGFzdEFyZ3MgPSBhcmd1bWVudHM7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RDYWxsVGltZSA9IHRpbWU7XG5cbiAgICBpZiAoaXNJbnZva2luZykge1xuICAgICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbGVhZGluZ0VkZ2UobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICAgIGlmIChtYXhpbmcpIHtcbiAgICAgICAgLy8gSGFuZGxlIGludm9jYXRpb25zIGluIGEgdGlnaHQgbG9vcC5cbiAgICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAgICAgcmV0dXJuIGludm9rZUZ1bmMobGFzdENhbGxUaW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRpbWVySWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBkZWJvdW5jZWQuY2FuY2VsID0gY2FuY2VsO1xuICBkZWJvdW5jZWQuZmx1c2ggPSBmbHVzaDtcbiAgcmV0dXJuIGRlYm91bmNlZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWJvdW5jZTtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKipcbiAqIEdldHMgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGF0IGhhdmUgZWxhcHNlZCBzaW5jZVxuICogdGhlIFVuaXggZXBvY2ggKDEgSmFudWFyeSAxOTcwIDAwOjAwOjAwIFVUQykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IERhdGVcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHRpbWVzdGFtcC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5kZWZlcihmdW5jdGlvbihzdGFtcCkge1xuICogICBjb25zb2xlLmxvZyhfLm5vdygpIC0gc3RhbXApO1xuICogfSwgXy5ub3coKSk7XG4gKiAvLyA9PiBMb2dzIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGl0IHRvb2sgZm9yIHRoZSBkZWZlcnJlZCBpbnZvY2F0aW9uLlxuICovXG52YXIgbm93ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiByb290LkRhdGUubm93KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vdztcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltID0gL15cXHMrfFxccyskL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVUcmltLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvTnVtYmVyO1xuIiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbnZhciBOb3RpY2UgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoTm90aWNlLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBOb3RpY2UoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE5vdGljZSk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gTm90aWNlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTm90aWNlKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5jbGVhckNsb3NlVGltZXIoKTtcbiAgICAgIF90aGlzLnByb3BzLm9uQ2xvc2UoKTtcbiAgICB9LCBfdGhpcy5zdGFydENsb3NlVGltZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMuZHVyYXRpb24pIHtcbiAgICAgICAgX3RoaXMuY2xvc2VUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzLmNsb3NlKCk7XG4gICAgICAgIH0sIF90aGlzLnByb3BzLmR1cmF0aW9uICogMTAwMCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuY2xlYXJDbG9zZVRpbWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF90aGlzLmNsb3NlVGltZXIpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLmNsb3NlVGltZXIpO1xuICAgICAgICBfdGhpcy5jbG9zZVRpbWVyID0gbnVsbDtcbiAgICAgIH1cbiAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhOb3RpY2UsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuc3RhcnRDbG9zZVRpbWVyKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuY2xlYXJDbG9zZVRpbWVyKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9jbGFzc05hbWU7XG5cbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgY29tcG9uZW50Q2xhc3MgPSBwcm9wcy5wcmVmaXhDbHMgKyAnLW5vdGljZSc7XG4gICAgICB2YXIgY2xhc3NOYW1lID0gKF9jbGFzc05hbWUgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWUsICcnICsgY29tcG9uZW50Q2xhc3MsIDEpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZSwgY29tcG9uZW50Q2xhc3MgKyAnLWNsb3NhYmxlJywgcHJvcHMuY2xvc2FibGUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZSwgcHJvcHMuY2xhc3NOYW1lLCAhIXByb3BzLmNsYXNzTmFtZSksIF9jbGFzc05hbWUpO1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbGFzc05hbWUpLCBzdHlsZTogcHJvcHMuc3R5bGUsIG9uTW91c2VFbnRlcjogdGhpcy5jbGVhckNsb3NlVGltZXIsXG4gICAgICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLnN0YXJ0Q2xvc2VUaW1lclxuICAgICAgICB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiBjb21wb25lbnRDbGFzcyArICctY29udGVudCcgfSxcbiAgICAgICAgICBwcm9wcy5jaGlsZHJlblxuICAgICAgICApLFxuICAgICAgICBwcm9wcy5jbG9zYWJsZSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2EnLFxuICAgICAgICAgIHsgdGFiSW5kZXg6ICcwJywgb25DbGljazogdGhpcy5jbG9zZSwgY2xhc3NOYW1lOiBjb21wb25lbnRDbGFzcyArICctY2xvc2UnIH0sXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiBjb21wb25lbnRDbGFzcyArICctY2xvc2UteCcgfSlcbiAgICAgICAgKSA6IG51bGxcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE5vdGljZTtcbn0oQ29tcG9uZW50KTtcblxuTm90aWNlLnByb3BUeXBlcyA9IHtcbiAgZHVyYXRpb246IFByb3BUeXBlcy5udW1iZXIsXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueVxufTtcbk5vdGljZS5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uRW5kOiBmdW5jdGlvbiBvbkVuZCgpIHt9LFxuICBvbkNsb3NlOiBmdW5jdGlvbiBvbkNsb3NlKCkge30sXG5cbiAgZHVyYXRpb246IDEuNSxcbiAgc3R5bGU6IHtcbiAgICByaWdodDogJzUwJSdcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IE5vdGljZTsiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQW5pbWF0ZSBmcm9tICdyYy1hbmltYXRlJztcbmltcG9ydCBjcmVhdGVDaGFpbmVkRnVuY3Rpb24gZnJvbSAncmMtdXRpbC9lcy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24nO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgTm90aWNlIGZyb20gJy4vTm90aWNlJztcblxudmFyIHNlZWQgPSAwO1xudmFyIG5vdyA9IERhdGUubm93KCk7XG5cbmZ1bmN0aW9uIGdldFV1aWQoKSB7XG4gIHJldHVybiAncmNOb3RpZmljYXRpb25fJyArIG5vdyArICdfJyArIHNlZWQrKztcbn1cblxudmFyIE5vdGlmaWNhdGlvbiA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhOb3RpZmljYXRpb24sIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE5vdGlmaWNhdGlvbigpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTm90aWZpY2F0aW9uKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBOb3RpZmljYXRpb24uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihOb3RpZmljYXRpb24pKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5vdGljZXM6IFtdXG4gICAgfSwgX3RoaXMuYWRkID0gZnVuY3Rpb24gKG5vdGljZSkge1xuICAgICAgdmFyIGtleSA9IG5vdGljZS5rZXkgPSBub3RpY2Uua2V5IHx8IGdldFV1aWQoKTtcbiAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2aW91c1N0YXRlKSB7XG4gICAgICAgIHZhciBub3RpY2VzID0gcHJldmlvdXNTdGF0ZS5ub3RpY2VzO1xuICAgICAgICBpZiAoIW5vdGljZXMuZmlsdGVyKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgcmV0dXJuIHYua2V5ID09PSBrZXk7XG4gICAgICAgIH0pLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBub3RpY2VzOiBub3RpY2VzLmNvbmNhdChub3RpY2UpXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgX3RoaXMucmVtb3ZlID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZpb3VzU3RhdGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBub3RpY2VzOiBwcmV2aW91c1N0YXRlLm5vdGljZXMuZmlsdGVyKGZ1bmN0aW9uIChub3RpY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBub3RpY2Uua2V5ICE9PSBrZXk7XG4gICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE5vdGlmaWNhdGlvbiwgW3tcbiAgICBrZXk6ICdnZXRUcmFuc2l0aW9uTmFtZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRyYW5zaXRpb25OYW1lKCkge1xuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciB0cmFuc2l0aW9uTmFtZSA9IHByb3BzLnRyYW5zaXRpb25OYW1lO1xuICAgICAgaWYgKCF0cmFuc2l0aW9uTmFtZSAmJiBwcm9wcy5hbmltYXRpb24pIHtcbiAgICAgICAgdHJhbnNpdGlvbk5hbWUgPSBwcm9wcy5wcmVmaXhDbHMgKyAnLScgKyBwcm9wcy5hbmltYXRpb247XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJhbnNpdGlvbk5hbWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXMsXG4gICAgICAgICAgX2NsYXNzTmFtZTtcblxuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciBub3RpY2VOb2RlcyA9IHRoaXMuc3RhdGUubm90aWNlcy5tYXAoZnVuY3Rpb24gKG5vdGljZSkge1xuICAgICAgICB2YXIgb25DbG9zZSA9IGNyZWF0ZUNoYWluZWRGdW5jdGlvbihfdGhpczIucmVtb3ZlLmJpbmQoX3RoaXMyLCBub3RpY2Uua2V5KSwgbm90aWNlLm9uQ2xvc2UpO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBOb3RpY2UsXG4gICAgICAgICAgX2V4dGVuZHMoe1xuICAgICAgICAgICAgcHJlZml4Q2xzOiBwcm9wcy5wcmVmaXhDbHNcbiAgICAgICAgICB9LCBub3RpY2UsIHtcbiAgICAgICAgICAgIG9uQ2xvc2U6IG9uQ2xvc2VcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBub3RpY2UuY29udGVudFxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgICB2YXIgY2xhc3NOYW1lID0gKF9jbGFzc05hbWUgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWUsIHByb3BzLnByZWZpeENscywgMSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lLCBwcm9wcy5jbGFzc05hbWUsICEhcHJvcHMuY2xhc3NOYW1lKSwgX2NsYXNzTmFtZSk7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiBjbGFzc25hbWVzKGNsYXNzTmFtZSksIHN0eWxlOiBwcm9wcy5zdHlsZSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIEFuaW1hdGUsXG4gICAgICAgICAgeyB0cmFuc2l0aW9uTmFtZTogdGhpcy5nZXRUcmFuc2l0aW9uTmFtZSgpIH0sXG4gICAgICAgICAgbm90aWNlTm9kZXNcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTm90aWZpY2F0aW9uO1xufShDb21wb25lbnQpO1xuXG5Ob3RpZmljYXRpb24ucHJvcFR5cGVzID0ge1xuICBwcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRyYW5zaXRpb25OYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhbmltYXRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3Rcbn07XG5Ob3RpZmljYXRpb24uZGVmYXVsdFByb3BzID0ge1xuICBwcmVmaXhDbHM6ICdyYy1ub3RpZmljYXRpb24nLFxuICBhbmltYXRpb246ICdmYWRlJyxcbiAgc3R5bGU6IHtcbiAgICB0b3A6IDY1LFxuICAgIGxlZnQ6ICc1MCUnXG4gIH1cbn07XG5cblxuTm90aWZpY2F0aW9uLm5ld0luc3RhbmNlID0gZnVuY3Rpb24gbmV3Tm90aWZpY2F0aW9uSW5zdGFuY2UocHJvcGVydGllcywgY2FsbGJhY2spIHtcbiAgdmFyIF9yZWYyID0gcHJvcGVydGllcyB8fCB7fSxcbiAgICAgIGdldENvbnRhaW5lciA9IF9yZWYyLmdldENvbnRhaW5lcixcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYyLCBbJ2dldENvbnRhaW5lciddKTtcblxuICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGlmIChnZXRDb250YWluZXIpIHtcbiAgICB2YXIgcm9vdCA9IGdldENvbnRhaW5lcigpO1xuICAgIHJvb3QuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG4gIH1cbiAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICBmdW5jdGlvbiByZWYobm90aWZpY2F0aW9uKSB7XG4gICAgaWYgKGNhbGxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjYWxsZWQgPSB0cnVlO1xuICAgIGNhbGxiYWNrKHtcbiAgICAgIG5vdGljZTogZnVuY3Rpb24gbm90aWNlKG5vdGljZVByb3BzKSB7XG4gICAgICAgIG5vdGlmaWNhdGlvbi5hZGQobm90aWNlUHJvcHMpO1xuICAgICAgfSxcbiAgICAgIHJlbW92ZU5vdGljZTogZnVuY3Rpb24gcmVtb3ZlTm90aWNlKGtleSkge1xuICAgICAgICBub3RpZmljYXRpb24ucmVtb3ZlKGtleSk7XG4gICAgICB9LFxuXG4gICAgICBjb21wb25lbnQ6IG5vdGlmaWNhdGlvbixcbiAgICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAgIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUoZGl2KTtcbiAgICAgICAgZGl2LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChOb3RpZmljYXRpb24sIF9leHRlbmRzKHt9LCBwcm9wcywgeyByZWY6IHJlZiB9KSksIGRpdik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb247IiwiaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuL05vdGlmaWNhdGlvbic7XG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb247IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IHsgc2V0VHJhbnNmb3JtLCBpc1RyYW5zZm9ybVN1cHBvcnRlZCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG52YXIgaXNEZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2Nyb2xsKHcsIHRvcCkge1xuICB2YXIgcmV0ID0gd1sncGFnZScgKyAodG9wID8gJ1knIDogJ1gnKSArICdPZmZzZXQnXTtcbiAgdmFyIG1ldGhvZCA9ICdzY3JvbGwnICsgKHRvcCA/ICdUb3AnIDogJ0xlZnQnKTtcbiAgaWYgKHR5cGVvZiByZXQgIT09ICdudW1iZXInKSB7XG4gICAgdmFyIGQgPSB3LmRvY3VtZW50O1xuICAgIC8vIGllNiw3LDggc3RhbmRhcmQgbW9kZVxuICAgIHJldCA9IGQuZG9jdW1lbnRFbGVtZW50W21ldGhvZF07XG4gICAgaWYgKHR5cGVvZiByZXQgIT09ICdudW1iZXInKSB7XG4gICAgICAvLyBxdWlya3MgbW9kZVxuICAgICAgcmV0ID0gZC5ib2R5W21ldGhvZF07XG4gICAgfVxuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIG9mZnNldChlbGVtKSB7XG4gIHZhciBib3ggPSB2b2lkIDA7XG4gIHZhciB4ID0gdm9pZCAwO1xuICB2YXIgeSA9IHZvaWQgMDtcbiAgdmFyIGRvYyA9IGVsZW0ub3duZXJEb2N1bWVudDtcbiAgdmFyIGJvZHkgPSBkb2MuYm9keTtcbiAgdmFyIGRvY0VsZW0gPSBkb2MgJiYgZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgYm94ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgeCA9IGJveC5sZWZ0O1xuICB5ID0gYm94LnRvcDtcbiAgeCAtPSBkb2NFbGVtLmNsaWVudExlZnQgfHwgYm9keS5jbGllbnRMZWZ0IHx8IDA7XG4gIHkgLT0gZG9jRWxlbS5jbGllbnRUb3AgfHwgYm9keS5jbGllbnRUb3AgfHwgMDtcbiAgdmFyIHcgPSBkb2MuZGVmYXVsdFZpZXcgfHwgZG9jLnBhcmVudFdpbmRvdztcbiAgeCArPSBnZXRTY3JvbGwodyk7XG4gIHkgKz0gZ2V0U2Nyb2xsKHcsIHRydWUpO1xuICByZXR1cm4ge1xuICAgIGxlZnQ6IHgsIHRvcDogeVxuICB9O1xufVxuXG5mdW5jdGlvbiBfY29tcG9uZW50RGlkVXBkYXRlKGNvbXBvbmVudCwgaW5pdCkge1xuICB2YXIgc3R5bGVzID0gY29tcG9uZW50LnByb3BzLnN0eWxlcztcblxuICB2YXIgcm9vdE5vZGUgPSBjb21wb25lbnQucm9vdDtcbiAgdmFyIHdyYXBOb2RlID0gY29tcG9uZW50Lm5hdiB8fCByb290Tm9kZTtcbiAgdmFyIGNvbnRhaW5lck9mZnNldCA9IG9mZnNldCh3cmFwTm9kZSk7XG4gIHZhciBpbmtCYXJOb2RlID0gY29tcG9uZW50Lmlua0JhcjtcbiAgdmFyIGFjdGl2ZVRhYiA9IGNvbXBvbmVudC5hY3RpdmVUYWI7XG4gIHZhciBpbmtCYXJOb2RlU3R5bGUgPSBpbmtCYXJOb2RlLnN0eWxlO1xuICB2YXIgdGFiQmFyUG9zaXRpb24gPSBjb21wb25lbnQucHJvcHMudGFiQmFyUG9zaXRpb247XG4gIGlmIChpbml0KSB7XG4gICAgLy8gcHJldmVudCBtb3VudCBhbmltYXRpb25cbiAgICBpbmtCYXJOb2RlU3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuICBpZiAoYWN0aXZlVGFiKSB7XG4gICAgdmFyIHRhYk5vZGUgPSBhY3RpdmVUYWI7XG4gICAgdmFyIHRhYk9mZnNldCA9IG9mZnNldCh0YWJOb2RlKTtcbiAgICB2YXIgdHJhbnNmb3JtU3VwcG9ydGVkID0gaXNUcmFuc2Zvcm1TdXBwb3J0ZWQoaW5rQmFyTm9kZVN0eWxlKTtcbiAgICBpZiAodGFiQmFyUG9zaXRpb24gPT09ICd0b3AnIHx8IHRhYkJhclBvc2l0aW9uID09PSAnYm90dG9tJykge1xuICAgICAgdmFyIGxlZnQgPSB0YWJPZmZzZXQubGVmdCAtIGNvbnRhaW5lck9mZnNldC5sZWZ0O1xuICAgICAgdmFyIHdpZHRoID0gdGFiTm9kZS5vZmZzZXRXaWR0aDtcblxuICAgICAgLy8gSWYgdGFiTm9kZSd3aWR0aCB3aWR0aCBlcXVhbCB0byB3cmFwTm9kZSd3aWR0aCB3aGVuIHRhYkJhclBvc2l0aW9uIGlzIHRvcCBvciBib3R0b21cbiAgICAgIC8vIEl0IG1lYW5zIG5vIGNzcyB3b3JraW5nLCB0aGVuIGluayBiYXIgc2hvdWxkIG5vdCBoYXZlIHdpZHRoIHVudGlsIGNzcyBpcyBsb2FkZWRcbiAgICAgIC8vIEZpeCBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy83NTY0XG4gICAgICBpZiAod2lkdGggPT09IHJvb3ROb2RlLm9mZnNldFdpZHRoKSB7XG4gICAgICAgIHdpZHRoID0gMDtcbiAgICAgIH0gZWxzZSBpZiAoc3R5bGVzLmlua0JhciAmJiBzdHlsZXMuaW5rQmFyLndpZHRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgd2lkdGggPSBwYXJzZUZsb2F0KHN0eWxlcy5pbmtCYXIud2lkdGgsIDEwKTtcbiAgICAgICAgaWYgKHdpZHRoKSB7XG4gICAgICAgICAgbGVmdCA9IGxlZnQgKyAodGFiTm9kZS5vZmZzZXRXaWR0aCAtIHdpZHRoKSAvIDI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIHVzZSAzZCBncHUgdG8gb3B0aW1pemUgcmVuZGVyXG4gICAgICBpZiAodHJhbnNmb3JtU3VwcG9ydGVkKSB7XG4gICAgICAgIHNldFRyYW5zZm9ybShpbmtCYXJOb2RlU3R5bGUsICd0cmFuc2xhdGUzZCgnICsgbGVmdCArICdweCwwLDApJyk7XG4gICAgICAgIGlua0Jhck5vZGVTdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcbiAgICAgICAgaW5rQmFyTm9kZVN0eWxlLmhlaWdodCA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5rQmFyTm9kZVN0eWxlLmxlZnQgPSBsZWZ0ICsgJ3B4JztcbiAgICAgICAgaW5rQmFyTm9kZVN0eWxlLnRvcCA9ICcnO1xuICAgICAgICBpbmtCYXJOb2RlU3R5bGUuYm90dG9tID0gJyc7XG4gICAgICAgIGlua0Jhck5vZGVTdHlsZS5yaWdodCA9IHdyYXBOb2RlLm9mZnNldFdpZHRoIC0gbGVmdCAtIHdpZHRoICsgJ3B4JztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHRvcCA9IHRhYk9mZnNldC50b3AgLSBjb250YWluZXJPZmZzZXQudG9wO1xuICAgICAgdmFyIGhlaWdodCA9IHRhYk5vZGUub2Zmc2V0SGVpZ2h0O1xuICAgICAgaWYgKHN0eWxlcy5pbmtCYXIgJiYgc3R5bGVzLmlua0Jhci5oZWlnaHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBoZWlnaHQgPSBwYXJzZUZsb2F0KHN0eWxlcy5pbmtCYXIuaGVpZ2h0LCAxMCk7XG4gICAgICAgIGlmIChoZWlnaHQpIHtcbiAgICAgICAgICB0b3AgPSB0b3AgKyAodGFiTm9kZS5vZmZzZXRIZWlnaHQgLSBoZWlnaHQpIC8gMjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRyYW5zZm9ybVN1cHBvcnRlZCkge1xuICAgICAgICBzZXRUcmFuc2Zvcm0oaW5rQmFyTm9kZVN0eWxlLCAndHJhbnNsYXRlM2QoMCwnICsgdG9wICsgJ3B4LDApJyk7XG4gICAgICAgIGlua0Jhck5vZGVTdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuICAgICAgICBpbmtCYXJOb2RlU3R5bGUud2lkdGggPSAnJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlua0Jhck5vZGVTdHlsZS5sZWZ0ID0gJyc7XG4gICAgICAgIGlua0Jhck5vZGVTdHlsZS5yaWdodCA9ICcnO1xuICAgICAgICBpbmtCYXJOb2RlU3R5bGUudG9wID0gdG9wICsgJ3B4JztcbiAgICAgICAgaW5rQmFyTm9kZVN0eWxlLmJvdHRvbSA9IHdyYXBOb2RlLm9mZnNldEhlaWdodCAtIHRvcCAtIGhlaWdodCArICdweCc7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlua0Jhck5vZGVTdHlsZS5kaXNwbGF5ID0gYWN0aXZlVGFiID8gJ2Jsb2NrJyA6ICdub25lJztcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW5rQmFyQW5pbWF0ZWQ6IHRydWVcbiAgICB9O1xuICB9LFxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBfY29tcG9uZW50RGlkVXBkYXRlKHRoaXMpO1xuICB9LFxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmIChpc0Rldikge1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvODY3OFxuICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9jb21wb25lbnREaWRVcGRhdGUoX3RoaXMsIHRydWUpO1xuICAgICAgfSwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9jb21wb25lbnREaWRVcGRhdGUodGhpcywgdHJ1ZSk7XG4gICAgfVxuICB9LFxuICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gIH0sXG4gIGdldElua0Jhck5vZGU6IGZ1bmN0aW9uIGdldElua0Jhck5vZGUoKSB7XG4gICAgdmFyIF9jbGFzc25hbWVzO1xuXG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIHByZWZpeENscyA9IF9wcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgIHN0eWxlcyA9IF9wcm9wcy5zdHlsZXMsXG4gICAgICAgIGlua0JhckFuaW1hdGVkID0gX3Byb3BzLmlua0JhckFuaW1hdGVkO1xuXG4gICAgdmFyIGNsYXNzTmFtZSA9IHByZWZpeENscyArICctaW5rLWJhcic7XG4gICAgdmFyIGNsYXNzZXMgPSBjbGFzc25hbWVzKChfY2xhc3NuYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzbmFtZXMsIGNsYXNzTmFtZSwgdHJ1ZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NuYW1lcywgaW5rQmFyQW5pbWF0ZWQgPyBjbGFzc05hbWUgKyAnLWFuaW1hdGVkJyA6IGNsYXNzTmFtZSArICctbm8tYW5pbWF0ZWQnLCB0cnVlKSwgX2NsYXNzbmFtZXMpKTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgc3R5bGU6IHN0eWxlcy5pbmtCYXIsXG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgICBrZXk6ICdpbmtCYXInLFxuICAgICAgcmVmOiB0aGlzLnNhdmVSZWYoJ2lua0JhcicpXG4gICAgfSk7XG4gIH1cbn07IiwiZXhwb3J0IGRlZmF1bHQge1xuICAvKipcbiAgICogTEVGVFxuICAgKi9cbiAgTEVGVDogMzcsIC8vIGFsc28gTlVNX1dFU1RcbiAgLyoqXG4gICAqIFVQXG4gICAqL1xuICBVUDogMzgsIC8vIGFsc28gTlVNX05PUlRIXG4gIC8qKlxuICAgKiBSSUdIVFxuICAgKi9cbiAgUklHSFQ6IDM5LCAvLyBhbHNvIE5VTV9FQVNUXG4gIC8qKlxuICAgKiBET1dOXG4gICAqL1xuICBET1dOOiA0MCAvLyBhbHNvIE5VTV9TT1VUSFxufTsiLCJleHBvcnQgZGVmYXVsdCB7XG4gIHNhdmVSZWY6IGZ1bmN0aW9uIHNhdmVSZWYobmFtZSkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIF90aGlzW25hbWVdID0gbm9kZTtcbiAgICB9O1xuICB9XG59OyIsImltcG9ydCBjcmVhdGVSZWFjdENsYXNzIGZyb20gJ2NyZWF0ZS1yZWFjdC1jbGFzcyc7XG5pbXBvcnQgSW5rVGFiQmFyTWl4aW4gZnJvbSAnLi9JbmtUYWJCYXJNaXhpbic7XG5pbXBvcnQgU2Nyb2xsYWJsZVRhYkJhck1peGluIGZyb20gJy4vU2Nyb2xsYWJsZVRhYkJhck1peGluJztcbmltcG9ydCBUYWJCYXJNaXhpbiBmcm9tICcuL1RhYkJhck1peGluJztcbmltcG9ydCBSZWZNaXhpbiBmcm9tICcuL1JlZk1peGluJztcblxudmFyIFNjcm9sbGFibGVJbmtUYWJCYXIgPSBjcmVhdGVSZWFjdENsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdTY3JvbGxhYmxlSW5rVGFiQmFyJyxcbiAgbWl4aW5zOiBbUmVmTWl4aW4sIFRhYkJhck1peGluLCBJbmtUYWJCYXJNaXhpbiwgU2Nyb2xsYWJsZVRhYkJhck1peGluXSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGlua0Jhck5vZGUgPSB0aGlzLmdldElua0Jhck5vZGUoKTtcbiAgICB2YXIgdGFicyA9IHRoaXMuZ2V0VGFicygpO1xuICAgIHZhciBzY3JvbGxiYXJOb2RlID0gdGhpcy5nZXRTY3JvbGxCYXJOb2RlKFtpbmtCYXJOb2RlLCB0YWJzXSk7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Um9vdE5vZGUoc2Nyb2xsYmFyTm9kZSk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxhYmxlSW5rVGFiQmFyOyIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgc2V0VHJhbnNmb3JtLCBpc1RyYW5zZm9ybVN1cHBvcnRlZCB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBhZGRFdmVudExpc3RlbmVyIGZyb20gJ3JjLXV0aWwvZXMvRG9tL2FkZEV2ZW50TGlzdGVuZXInO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC9kZWJvdW5jZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcm9sbEFuaW1hdGVkOiB0cnVlLFxuICAgICAgb25QcmV2Q2xpY2s6IGZ1bmN0aW9uIG9uUHJldkNsaWNrKCkge30sXG4gICAgICBvbk5leHRDbGljazogZnVuY3Rpb24gb25OZXh0Q2xpY2soKSB7fVxuICAgIH07XG4gIH0sXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgICByZXR1cm4ge1xuICAgICAgbmV4dDogZmFsc2UsXG4gICAgICBwcmV2OiBmYWxzZVxuICAgIH07XG4gIH0sXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdGhpcy5jb21wb25lbnREaWRVcGRhdGUoKTtcbiAgICB0aGlzLmRlYm91bmNlZFJlc2l6ZSA9IGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnNldE5leHRQcmV2KCk7XG4gICAgICBfdGhpcy5zY3JvbGxUb0FjdGl2ZVRhYigpO1xuICAgIH0sIDIwMCk7XG4gICAgdGhpcy5yZXNpemVFdmVudCA9IGFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAncmVzaXplJywgdGhpcy5kZWJvdW5jZWRSZXNpemUpO1xuICB9LFxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIGlmIChwcmV2UHJvcHMgJiYgcHJldlByb3BzLnRhYkJhclBvc2l0aW9uICE9PSBwcm9wcy50YWJCYXJQb3NpdGlvbikge1xuICAgICAgdGhpcy5zZXRPZmZzZXQoMCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBuZXh0UHJldiA9IHRoaXMuc2V0TmV4dFByZXYoKTtcbiAgICAgICAgXG4gICAgaWYgKHRoaXMuaXNOZXh0UHJldlNob3duKHRoaXMuc3RhdGUpICE9PSB0aGlzLmlzTmV4dFByZXZTaG93bihuZXh0UHJldikpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe30sIHRoaXMuc2Nyb2xsVG9BY3RpdmVUYWIpO1xuICAgIH0gZWxzZSBpZiAoIXByZXZQcm9wcyB8fCBwcm9wcy5hY3RpdmVLZXkgIT09IHByZXZQcm9wcy5hY3RpdmVLZXkpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9BY3RpdmVUYWIoKTtcbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5yZXNpemVFdmVudCkge1xuICAgICAgdGhpcy5yZXNpemVFdmVudC5yZW1vdmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZGVib3VuY2VkUmVzaXplICYmIHRoaXMuZGVib3VuY2VkUmVzaXplLmNhbmNlbCkge1xuICAgICAgdGhpcy5kZWJvdW5jZWRSZXNpemUuY2FuY2VsKCk7XG4gICAgfVxuICB9LFxuICBzZXROZXh0UHJldjogZnVuY3Rpb24gc2V0TmV4dFByZXYoKSB7XG4gICAgdmFyIG5hdk5vZGUgPSB0aGlzLm5hdjtcbiAgICB2YXIgbmF2Tm9kZVdIID0gdGhpcy5nZXRTY3JvbGxXSChuYXZOb2RlKTtcbiAgICB2YXIgY29udGFpbmVyV0ggPSB0aGlzLmdldE9mZnNldFdIKHRoaXMuY29udGFpbmVyKTtcbiAgICB2YXIgbmF2V3JhcE5vZGVXSCA9IHRoaXMuZ2V0T2Zmc2V0V0godGhpcy5uYXZXcmFwKTtcbiAgICB2YXIgb2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG5cbiAgICB2YXIgbWluT2Zmc2V0ID0gY29udGFpbmVyV0ggLSBuYXZOb2RlV0g7XG4gICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgIG5leHQgPSBfc3RhdGUubmV4dCxcbiAgICAgICAgcHJldiA9IF9zdGF0ZS5wcmV2O1xuXG4gICAgaWYgKG1pbk9mZnNldCA+PSAwKSB7XG4gICAgICBuZXh0ID0gZmFsc2U7XG4gICAgICB0aGlzLnNldE9mZnNldCgwLCBmYWxzZSk7XG4gICAgICBvZmZzZXQgPSAwO1xuICAgIH0gZWxzZSBpZiAobWluT2Zmc2V0IDwgb2Zmc2V0KSB7XG4gICAgICBuZXh0ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV4dCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlYWxPZmZzZXQgPSBuYXZXcmFwTm9kZVdIIC0gbmF2Tm9kZVdIO1xuICAgICAgdGhpcy5zZXRPZmZzZXQocmVhbE9mZnNldCwgZmFsc2UpO1xuICAgICAgb2Zmc2V0ID0gcmVhbE9mZnNldDtcbiAgICB9XG5cbiAgICBpZiAob2Zmc2V0IDwgMCkge1xuICAgICAgcHJldiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByZXYgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLnNldE5leHQobmV4dCk7XG4gICAgdGhpcy5zZXRQcmV2KHByZXYpO1xuICAgIHJldHVybiB7XG4gICAgICBuZXh0OiBuZXh0LFxuICAgICAgcHJldjogcHJldlxuICAgIH07XG4gIH0sXG4gIGdldE9mZnNldFdIOiBmdW5jdGlvbiBnZXRPZmZzZXRXSChub2RlKSB7XG4gICAgdmFyIHRhYkJhclBvc2l0aW9uID0gdGhpcy5wcm9wcy50YWJCYXJQb3NpdGlvbjtcbiAgICB2YXIgcHJvcCA9ICdvZmZzZXRXaWR0aCc7XG4gICAgaWYgKHRhYkJhclBvc2l0aW9uID09PSAnbGVmdCcgfHwgdGFiQmFyUG9zaXRpb24gPT09ICdyaWdodCcpIHtcbiAgICAgIHByb3AgPSAnb2Zmc2V0SGVpZ2h0JztcbiAgICB9XG4gICAgcmV0dXJuIG5vZGVbcHJvcF07XG4gIH0sXG4gIGdldFNjcm9sbFdIOiBmdW5jdGlvbiBnZXRTY3JvbGxXSChub2RlKSB7XG4gICAgdmFyIHRhYkJhclBvc2l0aW9uID0gdGhpcy5wcm9wcy50YWJCYXJQb3NpdGlvbjtcbiAgICB2YXIgcHJvcCA9ICdzY3JvbGxXaWR0aCc7XG4gICAgaWYgKHRhYkJhclBvc2l0aW9uID09PSAnbGVmdCcgfHwgdGFiQmFyUG9zaXRpb24gPT09ICdyaWdodCcpIHtcbiAgICAgIHByb3AgPSAnc2Nyb2xsSGVpZ2h0JztcbiAgICB9XG4gICAgcmV0dXJuIG5vZGVbcHJvcF07XG4gIH0sXG4gIGdldE9mZnNldExUOiBmdW5jdGlvbiBnZXRPZmZzZXRMVChub2RlKSB7XG4gICAgdmFyIHRhYkJhclBvc2l0aW9uID0gdGhpcy5wcm9wcy50YWJCYXJQb3NpdGlvbjtcbiAgICB2YXIgcHJvcCA9ICdsZWZ0JztcbiAgICBpZiAodGFiQmFyUG9zaXRpb24gPT09ICdsZWZ0JyB8fCB0YWJCYXJQb3NpdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgcHJvcCA9ICd0b3AnO1xuICAgIH1cbiAgICByZXR1cm4gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtwcm9wXTtcbiAgfSxcbiAgc2V0T2Zmc2V0OiBmdW5jdGlvbiBzZXRPZmZzZXQob2Zmc2V0KSB7XG4gICAgdmFyIGNoZWNrTmV4dFByZXYgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHRydWU7XG5cbiAgICB2YXIgdGFyZ2V0ID0gTWF0aC5taW4oMCwgb2Zmc2V0KTtcbiAgICBpZiAodGhpcy5vZmZzZXQgIT09IHRhcmdldCkge1xuICAgICAgdGhpcy5vZmZzZXQgPSB0YXJnZXQ7XG4gICAgICB2YXIgbmF2T2Zmc2V0ID0ge307XG4gICAgICB2YXIgdGFiQmFyUG9zaXRpb24gPSB0aGlzLnByb3BzLnRhYkJhclBvc2l0aW9uO1xuICAgICAgdmFyIG5hdlN0eWxlID0gdGhpcy5uYXYuc3R5bGU7XG4gICAgICB2YXIgdHJhbnNmb3JtU3VwcG9ydGVkID0gaXNUcmFuc2Zvcm1TdXBwb3J0ZWQobmF2U3R5bGUpO1xuICAgICAgaWYgKHRhYkJhclBvc2l0aW9uID09PSAnbGVmdCcgfHwgdGFiQmFyUG9zaXRpb24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgaWYgKHRyYW5zZm9ybVN1cHBvcnRlZCkge1xuICAgICAgICAgIG5hdk9mZnNldCA9IHtcbiAgICAgICAgICAgIHZhbHVlOiAndHJhbnNsYXRlM2QoMCwnICsgdGFyZ2V0ICsgJ3B4LDApJ1xuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmF2T2Zmc2V0ID0ge1xuICAgICAgICAgICAgbmFtZTogJ3RvcCcsXG4gICAgICAgICAgICB2YWx1ZTogdGFyZ2V0ICsgJ3B4J1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0cmFuc2Zvcm1TdXBwb3J0ZWQpIHtcbiAgICAgICAgICBuYXZPZmZzZXQgPSB7XG4gICAgICAgICAgICB2YWx1ZTogJ3RyYW5zbGF0ZTNkKCcgKyB0YXJnZXQgKyAncHgsMCwwKSdcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5hdk9mZnNldCA9IHtcbiAgICAgICAgICAgIG5hbWU6ICdsZWZ0JyxcbiAgICAgICAgICAgIHZhbHVlOiB0YXJnZXQgKyAncHgnXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRyYW5zZm9ybVN1cHBvcnRlZCkge1xuICAgICAgICBzZXRUcmFuc2Zvcm0obmF2U3R5bGUsIG5hdk9mZnNldC52YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuYXZTdHlsZVtuYXZPZmZzZXQubmFtZV0gPSBuYXZPZmZzZXQudmFsdWU7XG4gICAgICB9XG4gICAgICBpZiAoY2hlY2tOZXh0UHJldikge1xuICAgICAgICB0aGlzLnNldE5leHRQcmV2KCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBzZXRQcmV2OiBmdW5jdGlvbiBzZXRQcmV2KHYpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5wcmV2ICE9PSB2KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcHJldjogdlxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBzZXROZXh0OiBmdW5jdGlvbiBzZXROZXh0KHYpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5uZXh0ICE9PSB2KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbmV4dDogdlxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBpc05leHRQcmV2U2hvd246IGZ1bmN0aW9uIGlzTmV4dFByZXZTaG93bihzdGF0ZSkge1xuICAgIGlmIChzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLm5leHQgfHwgc3RhdGUucHJldjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUubmV4dCB8fCB0aGlzLnN0YXRlLnByZXY7XG4gIH0sXG4gIHByZXZUcmFuc2l0aW9uRW5kOiBmdW5jdGlvbiBwcmV2VHJhbnNpdGlvbkVuZChlKSB7XG4gICAgaWYgKGUucHJvcGVydHlOYW1lICE9PSAnb3BhY2l0eScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xuXG4gICAgdGhpcy5zY3JvbGxUb0FjdGl2ZVRhYih7XG4gICAgICB0YXJnZXQ6IGNvbnRhaW5lcixcbiAgICAgIGN1cnJlbnRUYXJnZXQ6IGNvbnRhaW5lclxuICAgIH0pO1xuICB9LFxuICBzY3JvbGxUb0FjdGl2ZVRhYjogZnVuY3Rpb24gc2Nyb2xsVG9BY3RpdmVUYWIoZSkge1xuICAgIHZhciBhY3RpdmVUYWIgPSB0aGlzLmFjdGl2ZVRhYixcbiAgICAgICAgbmF2V3JhcCA9IHRoaXMubmF2V3JhcDtcblxuICAgIGlmIChlICYmIGUudGFyZ2V0ICE9PSBlLmN1cnJlbnRUYXJnZXQgfHwgIWFjdGl2ZVRhYikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgICAgICB2YXIgbmVlZFRvU3JvbGwgPSB0aGlzLmlzTmV4dFByZXZTaG93bigpICYmIHRoaXMubGFzdE5leHRQcmV2U2hvd247XG4gICAgdGhpcy5sYXN0TmV4dFByZXZTaG93biA9IHRoaXMuaXNOZXh0UHJldlNob3duKCk7XG4gICAgaWYgKCFuZWVkVG9Tcm9sbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBhY3RpdmVUYWJXSCA9IHRoaXMuZ2V0U2Nyb2xsV0goYWN0aXZlVGFiKTtcbiAgICB2YXIgbmF2V3JhcE5vZGVXSCA9IHRoaXMuZ2V0T2Zmc2V0V0gobmF2V3JhcCk7XG4gICAgdmFyIG9mZnNldCA9IHRoaXMub2Zmc2V0O1xuXG4gICAgdmFyIHdyYXBPZmZzZXQgPSB0aGlzLmdldE9mZnNldExUKG5hdldyYXApO1xuICAgIHZhciBhY3RpdmVUYWJPZmZzZXQgPSB0aGlzLmdldE9mZnNldExUKGFjdGl2ZVRhYik7XG4gICAgaWYgKHdyYXBPZmZzZXQgPiBhY3RpdmVUYWJPZmZzZXQpIHtcbiAgICAgIG9mZnNldCArPSB3cmFwT2Zmc2V0IC0gYWN0aXZlVGFiT2Zmc2V0O1xuICAgICAgdGhpcy5zZXRPZmZzZXQob2Zmc2V0KTtcbiAgICB9IGVsc2UgaWYgKHdyYXBPZmZzZXQgKyBuYXZXcmFwTm9kZVdIIDwgYWN0aXZlVGFiT2Zmc2V0ICsgYWN0aXZlVGFiV0gpIHtcbiAgICAgIG9mZnNldCAtPSBhY3RpdmVUYWJPZmZzZXQgKyBhY3RpdmVUYWJXSCAtICh3cmFwT2Zmc2V0ICsgbmF2V3JhcE5vZGVXSCk7XG4gICAgICB0aGlzLnNldE9mZnNldChvZmZzZXQpO1xuICAgIH1cbiAgfSxcbiAgcHJldjogZnVuY3Rpb24gcHJldihlKSB7XG4gICAgdGhpcy5wcm9wcy5vblByZXZDbGljayhlKTtcbiAgICB2YXIgbmF2V3JhcE5vZGUgPSB0aGlzLm5hdldyYXA7XG4gICAgdmFyIG5hdldyYXBOb2RlV0ggPSB0aGlzLmdldE9mZnNldFdIKG5hdldyYXBOb2RlKTtcbiAgICB2YXIgb2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG5cbiAgICB0aGlzLnNldE9mZnNldChvZmZzZXQgKyBuYXZXcmFwTm9kZVdIKTtcbiAgfSxcbiAgbmV4dDogZnVuY3Rpb24gbmV4dChlKSB7XG4gICAgdGhpcy5wcm9wcy5vbk5leHRDbGljayhlKTtcbiAgICB2YXIgbmF2V3JhcE5vZGUgPSB0aGlzLm5hdldyYXA7XG4gICAgdmFyIG5hdldyYXBOb2RlV0ggPSB0aGlzLmdldE9mZnNldFdIKG5hdldyYXBOb2RlKTtcbiAgICB2YXIgb2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG5cbiAgICB0aGlzLnNldE9mZnNldChvZmZzZXQgLSBuYXZXcmFwTm9kZVdIKTtcbiAgfSxcbiAgZ2V0U2Nyb2xsQmFyTm9kZTogZnVuY3Rpb24gZ2V0U2Nyb2xsQmFyTm9kZShjb250ZW50KSB7XG4gICAgdmFyIF9jbGFzc25hbWVzLCBfY2xhc3NuYW1lczIsIF9jbGFzc25hbWVzMywgX2NsYXNzbmFtZXM0O1xuXG4gICAgdmFyIF9zdGF0ZTIgPSB0aGlzLnN0YXRlLFxuICAgICAgICBuZXh0ID0gX3N0YXRlMi5uZXh0LFxuICAgICAgICBwcmV2ID0gX3N0YXRlMi5wcmV2O1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBwcmVmaXhDbHMgPSBfcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICBzY3JvbGxBbmltYXRlZCA9IF9wcm9wcy5zY3JvbGxBbmltYXRlZDtcblxuICAgIHZhciBzaG93TmV4dFByZXYgPSBwcmV2IHx8IG5leHQ7XG5cbiAgICB2YXIgcHJldkJ1dHRvbiA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnc3BhbicsXG4gICAgICB7XG4gICAgICAgIG9uQ2xpY2s6IHByZXYgPyB0aGlzLnByZXYgOiBudWxsLFxuICAgICAgICB1bnNlbGVjdGFibGU6ICd1bnNlbGVjdGFibGUnLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzbmFtZXMoKF9jbGFzc25hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NuYW1lcywgcHJlZml4Q2xzICsgJy10YWItcHJldicsIDEpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzbmFtZXMsIHByZWZpeENscyArICctdGFiLWJ0bi1kaXNhYmxlZCcsICFwcmV2KSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc25hbWVzLCBwcmVmaXhDbHMgKyAnLXRhYi1hcnJvdy1zaG93Jywgc2hvd05leHRQcmV2KSwgX2NsYXNzbmFtZXMpKSxcbiAgICAgICAgb25UcmFuc2l0aW9uRW5kOiB0aGlzLnByZXZUcmFuc2l0aW9uRW5kXG4gICAgICB9LFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLXRhYi1wcmV2LWljb24nIH0pXG4gICAgKTtcblxuICAgIHZhciBuZXh0QnV0dG9uID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICdzcGFuJyxcbiAgICAgIHtcbiAgICAgICAgb25DbGljazogbmV4dCA/IHRoaXMubmV4dCA6IG51bGwsXG4gICAgICAgIHVuc2VsZWN0YWJsZTogJ3Vuc2VsZWN0YWJsZScsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NuYW1lcygoX2NsYXNzbmFtZXMyID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NuYW1lczIsIHByZWZpeENscyArICctdGFiLW5leHQnLCAxKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc25hbWVzMiwgcHJlZml4Q2xzICsgJy10YWItYnRuLWRpc2FibGVkJywgIW5leHQpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzbmFtZXMyLCBwcmVmaXhDbHMgKyAnLXRhYi1hcnJvdy1zaG93Jywgc2hvd05leHRQcmV2KSwgX2NsYXNzbmFtZXMyKSlcbiAgICAgIH0sXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctdGFiLW5leHQtaWNvbicgfSlcbiAgICApO1xuXG4gICAgdmFyIG5hdkNsYXNzTmFtZSA9IHByZWZpeENscyArICctbmF2JztcbiAgICB2YXIgbmF2Q2xhc3NlcyA9IGNsYXNzbmFtZXMoKF9jbGFzc25hbWVzMyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzbmFtZXMzLCBuYXZDbGFzc05hbWUsIHRydWUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzbmFtZXMzLCBzY3JvbGxBbmltYXRlZCA/IG5hdkNsYXNzTmFtZSArICctYW5pbWF0ZWQnIDogbmF2Q2xhc3NOYW1lICsgJy1uby1hbmltYXRlZCcsIHRydWUpLCBfY2xhc3NuYW1lczMpKTtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NuYW1lcygoX2NsYXNzbmFtZXM0ID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NuYW1lczQsIHByZWZpeENscyArICctbmF2LWNvbnRhaW5lcicsIDEpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzbmFtZXM0LCBwcmVmaXhDbHMgKyAnLW5hdi1jb250YWluZXItc2Nyb2xsaW5nJywgc2hvd05leHRQcmV2KSwgX2NsYXNzbmFtZXM0KSksXG4gICAgICAgIGtleTogJ2NvbnRhaW5lcicsXG4gICAgICAgIHJlZjogdGhpcy5zYXZlUmVmKCdjb250YWluZXInKVxuICAgICAgfSxcbiAgICAgIHByZXZCdXR0b24sXG4gICAgICBuZXh0QnV0dG9uLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLW5hdi13cmFwJywgcmVmOiB0aGlzLnNhdmVSZWYoJ25hdldyYXAnKSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLW5hdi1zY3JvbGwnIH0sXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6IG5hdkNsYXNzZXMsIHJlZjogdGhpcy5zYXZlUmVmKCduYXYnKSB9LFxuICAgICAgICAgICAgY29udGVudFxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn07IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBSZWFjdCwgeyBjbG9uZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB3YXJuaW5nIGZyb20gJ3dhcm5pbmcnO1xuaW1wb3J0IHsgZ2V0RGF0YUF0dHIgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3R5bGVzOiB7fVxuICAgIH07XG4gIH0sXG4gIG9uVGFiQ2xpY2s6IGZ1bmN0aW9uIG9uVGFiQ2xpY2soa2V5KSB7XG4gICAgdGhpcy5wcm9wcy5vblRhYkNsaWNrKGtleSk7XG4gIH0sXG4gIGdldFRhYnM6IGZ1bmN0aW9uIGdldFRhYnMoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5wYW5lbHMsXG4gICAgICAgIGFjdGl2ZUtleSA9IF9wcm9wcy5hY3RpdmVLZXksXG4gICAgICAgIHByZWZpeENscyA9IF9wcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgIHRhYkJhckd1dHRlciA9IF9wcm9wcy50YWJCYXJHdXR0ZXI7XG5cbiAgICB2YXIgcnN0ID0gW107XG5cbiAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgICBpZiAoIWNoaWxkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBrZXkgPSBjaGlsZC5rZXk7XG4gICAgICB2YXIgY2xzID0gYWN0aXZlS2V5ID09PSBrZXkgPyBwcmVmaXhDbHMgKyAnLXRhYi1hY3RpdmUnIDogJyc7XG4gICAgICBjbHMgKz0gJyAnICsgcHJlZml4Q2xzICsgJy10YWInO1xuICAgICAgdmFyIGV2ZW50cyA9IHt9O1xuICAgICAgaWYgKGNoaWxkLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIGNscyArPSAnICcgKyBwcmVmaXhDbHMgKyAnLXRhYi1kaXNhYmxlZCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBldmVudHMgPSB7XG4gICAgICAgICAgb25DbGljazogX3RoaXMub25UYWJDbGljay5iaW5kKF90aGlzLCBrZXkpXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICB2YXIgcmVmID0ge307XG4gICAgICBpZiAoYWN0aXZlS2V5ID09PSBrZXkpIHtcbiAgICAgICAgcmVmLnJlZiA9IF90aGlzLnNhdmVSZWYoJ2FjdGl2ZVRhYicpO1xuICAgICAgfVxuICAgICAgd2FybmluZygndGFiJyBpbiBjaGlsZC5wcm9wcywgJ1RoZXJlIG11c3QgYmUgYHRhYmAgcHJvcGVydHkgb24gY2hpbGRyZW4gb2YgVGFicy4nKTtcbiAgICAgIHJzdC5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBfZXh0ZW5kcyh7XG4gICAgICAgICAgcm9sZTogJ3RhYicsXG4gICAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiBjaGlsZC5wcm9wcy5kaXNhYmxlZCA/ICd0cnVlJyA6ICdmYWxzZScsXG4gICAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiBhY3RpdmVLZXkgPT09IGtleSA/ICd0cnVlJyA6ICdmYWxzZSdcbiAgICAgICAgfSwgZXZlbnRzLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbHMsXG4gICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgc3R5bGU6IHsgbWFyZ2luUmlnaHQ6IHRhYkJhckd1dHRlciAmJiBpbmRleCA9PT0gY2hpbGRyZW4ubGVuZ3RoIC0gMSA/IDAgOiB0YWJCYXJHdXR0ZXIgfVxuICAgICAgICB9LCByZWYpLFxuICAgICAgICBjaGlsZC5wcm9wcy50YWJcbiAgICAgICkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJzdDtcbiAgfSxcbiAgZ2V0Um9vdE5vZGU6IGZ1bmN0aW9uIGdldFJvb3ROb2RlKGNvbnRlbnRzKSB7XG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICBwcmVmaXhDbHMgPSBfcHJvcHMyLnByZWZpeENscyxcbiAgICAgICAgb25LZXlEb3duID0gX3Byb3BzMi5vbktleURvd24sXG4gICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wczIuY2xhc3NOYW1lLFxuICAgICAgICBleHRyYUNvbnRlbnQgPSBfcHJvcHMyLmV4dHJhQ29udGVudCxcbiAgICAgICAgc3R5bGUgPSBfcHJvcHMyLnN0eWxlLFxuICAgICAgICB0YWJCYXJQb3NpdGlvbiA9IF9wcm9wczIudGFiQmFyUG9zaXRpb24sXG4gICAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMyLCBbJ3ByZWZpeENscycsICdvbktleURvd24nLCAnY2xhc3NOYW1lJywgJ2V4dHJhQ29udGVudCcsICdzdHlsZScsICd0YWJCYXJQb3NpdGlvbiddKTtcblxuICAgIHZhciBjbHMgPSBjbGFzc25hbWVzKHByZWZpeENscyArICctYmFyJywgX2RlZmluZVByb3BlcnR5KHt9LCBjbGFzc05hbWUsICEhY2xhc3NOYW1lKSk7XG4gICAgdmFyIHRvcE9yQm90dG9tID0gdGFiQmFyUG9zaXRpb24gPT09ICd0b3AnIHx8IHRhYkJhclBvc2l0aW9uID09PSAnYm90dG9tJztcbiAgICB2YXIgdGFiQmFyRXh0cmFDb250ZW50U3R5bGUgPSB0b3BPckJvdHRvbSA/IHsgZmxvYXQ6ICdyaWdodCcgfSA6IHt9O1xuICAgIHZhciBleHRyYUNvbnRlbnRTdHlsZSA9IGV4dHJhQ29udGVudCAmJiBleHRyYUNvbnRlbnQucHJvcHMgPyBleHRyYUNvbnRlbnQucHJvcHMuc3R5bGUgOiB7fTtcbiAgICB2YXIgY2hpbGRyZW4gPSBjb250ZW50cztcbiAgICBpZiAoZXh0cmFDb250ZW50KSB7XG4gICAgICBjaGlsZHJlbiA9IFtjbG9uZUVsZW1lbnQoZXh0cmFDb250ZW50LCB7XG4gICAgICAgIGtleTogJ2V4dHJhJyxcbiAgICAgICAgc3R5bGU6IF9leHRlbmRzKHt9LCB0YWJCYXJFeHRyYUNvbnRlbnRTdHlsZSwgZXh0cmFDb250ZW50U3R5bGUpXG4gICAgICB9KSwgY2xvbmVFbGVtZW50KGNvbnRlbnRzLCB7IGtleTogJ2NvbnRlbnQnIH0pXTtcbiAgICAgIGNoaWxkcmVuID0gdG9wT3JCb3R0b20gPyBjaGlsZHJlbiA6IGNoaWxkcmVuLnJldmVyc2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIF9leHRlbmRzKHtcbiAgICAgICAgcm9sZTogJ3RhYmxpc3QnLFxuICAgICAgICBjbGFzc05hbWU6IGNscyxcbiAgICAgICAgdGFiSW5kZXg6ICcwJyxcbiAgICAgICAgcmVmOiB0aGlzLnNhdmVSZWYoJ3Jvb3QnKSxcbiAgICAgICAgb25LZXlEb3duOiBvbktleURvd24sXG4gICAgICAgIHN0eWxlOiBzdHlsZVxuICAgICAgfSwgZ2V0RGF0YUF0dHIocmVzdFByb3BzKSksXG4gICAgICBjaGlsZHJlblxuICAgICk7XG4gIH1cbn07IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3JlYXRlUmVhY3RDbGFzcyBmcm9tICdjcmVhdGUtcmVhY3QtY2xhc3MnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgZ2V0VHJhbnNmb3JtQnlJbmRleCwgZ2V0QWN0aXZlSW5kZXgsIGdldFRyYW5zZm9ybVByb3BWYWx1ZSwgZ2V0TWFyZ2luU3R5bGUgfSBmcm9tICcuL3V0aWxzJztcblxudmFyIFRhYkNvbnRlbnQgPSBjcmVhdGVSZWFjdENsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdUYWJDb250ZW50JyxcbiAgcHJvcFR5cGVzOiB7XG4gICAgYW5pbWF0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGFuaW1hdGVkV2l0aE1hcmdpbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICAgIGFjdGl2ZUtleTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdHlsZTogUHJvcFR5cGVzLmFueSxcbiAgICB0YWJCYXJQb3NpdGlvbjogUHJvcFR5cGVzLnN0cmluZ1xuICB9LFxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYW5pbWF0ZWQ6IHRydWVcbiAgICB9O1xuICB9LFxuICBnZXRUYWJQYW5lczogZnVuY3Rpb24gZ2V0VGFiUGFuZXMoKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgYWN0aXZlS2V5ID0gcHJvcHMuYWN0aXZlS2V5O1xuICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuICAgIHZhciBuZXdDaGlsZHJlbiA9IFtdO1xuXG4gICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICBpZiAoIWNoaWxkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBrZXkgPSBjaGlsZC5rZXk7XG4gICAgICB2YXIgYWN0aXZlID0gYWN0aXZlS2V5ID09PSBrZXk7XG4gICAgICBuZXdDaGlsZHJlbi5wdXNoKFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICBhY3RpdmU6IGFjdGl2ZSxcbiAgICAgICAgZGVzdHJveUluYWN0aXZlVGFiUGFuZTogcHJvcHMuZGVzdHJveUluYWN0aXZlVGFiUGFuZSxcbiAgICAgICAgcm9vdFByZWZpeENsczogcHJvcHMucHJlZml4Q2xzXG4gICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3Q2hpbGRyZW47XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfY2xhc3NuYW1lcztcblxuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgYWN0aXZlS2V5ID0gcHJvcHMuYWN0aXZlS2V5LFxuICAgICAgICB0YWJCYXJQb3NpdGlvbiA9IHByb3BzLnRhYkJhclBvc2l0aW9uLFxuICAgICAgICBhbmltYXRlZCA9IHByb3BzLmFuaW1hdGVkLFxuICAgICAgICBhbmltYXRlZFdpdGhNYXJnaW4gPSBwcm9wcy5hbmltYXRlZFdpdGhNYXJnaW47XG4gICAgdmFyIHN0eWxlID0gcHJvcHMuc3R5bGU7XG5cbiAgICB2YXIgY2xhc3NlcyA9IGNsYXNzbmFtZXMoKF9jbGFzc25hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NuYW1lcywgcHJlZml4Q2xzICsgJy1jb250ZW50JywgdHJ1ZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NuYW1lcywgYW5pbWF0ZWQgPyBwcmVmaXhDbHMgKyAnLWNvbnRlbnQtYW5pbWF0ZWQnIDogcHJlZml4Q2xzICsgJy1jb250ZW50LW5vLWFuaW1hdGVkJywgdHJ1ZSksIF9jbGFzc25hbWVzKSk7XG4gICAgaWYgKGFuaW1hdGVkKSB7XG4gICAgICB2YXIgYWN0aXZlSW5kZXggPSBnZXRBY3RpdmVJbmRleChjaGlsZHJlbiwgYWN0aXZlS2V5KTtcbiAgICAgIGlmIChhY3RpdmVJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdmFyIGFuaW1hdGVkU3R5bGUgPSBhbmltYXRlZFdpdGhNYXJnaW4gPyBnZXRNYXJnaW5TdHlsZShhY3RpdmVJbmRleCwgdGFiQmFyUG9zaXRpb24pIDogZ2V0VHJhbnNmb3JtUHJvcFZhbHVlKGdldFRyYW5zZm9ybUJ5SW5kZXgoYWN0aXZlSW5kZXgsIHRhYkJhclBvc2l0aW9uKSk7XG4gICAgICAgIHN0eWxlID0gX2V4dGVuZHMoe30sIHN0eWxlLCBhbmltYXRlZFN0eWxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlID0gX2V4dGVuZHMoe30sIHN0eWxlLCB7XG4gICAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgICAgIHN0eWxlOiBzdHlsZVxuICAgICAgfSxcbiAgICAgIHRoaXMuZ2V0VGFiUGFuZXMoKVxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBUYWJDb250ZW50OyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjcmVhdGVSZWFjdENsYXNzIGZyb20gJ2NyZWF0ZS1yZWFjdC1jbGFzcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IGdldERhdGFBdHRyIH0gZnJvbSAnLi91dGlscyc7XG5cbnZhciBUYWJQYW5lID0gY3JlYXRlUmVhY3RDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnVGFiUGFuZScsXG4gIHByb3BUeXBlczoge1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMuYW55LFxuICAgIGRlc3Ryb3lJbmFjdGl2ZVRhYlBhbmU6IFByb3BUeXBlcy5ib29sLFxuICAgIGZvcmNlUmVuZGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLm5vZGVcbiAgfSxcbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHsgcGxhY2Vob2xkZXI6IG51bGwgfTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9jbGFzc25hbWVzO1xuXG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGRlc3Ryb3lJbmFjdGl2ZVRhYlBhbmUgPSBfcHJvcHMuZGVzdHJveUluYWN0aXZlVGFiUGFuZSxcbiAgICAgICAgYWN0aXZlID0gX3Byb3BzLmFjdGl2ZSxcbiAgICAgICAgZm9yY2VSZW5kZXIgPSBfcHJvcHMuZm9yY2VSZW5kZXIsXG4gICAgICAgIHJvb3RQcmVmaXhDbHMgPSBfcHJvcHMucm9vdFByZWZpeENscyxcbiAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICBwbGFjZWhvbGRlciA9IF9wcm9wcy5wbGFjZWhvbGRlcixcbiAgICAgICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydjbGFzc05hbWUnLCAnZGVzdHJveUluYWN0aXZlVGFiUGFuZScsICdhY3RpdmUnLCAnZm9yY2VSZW5kZXInLCAncm9vdFByZWZpeENscycsICdzdHlsZScsICdjaGlsZHJlbicsICdwbGFjZWhvbGRlciddKTtcblxuICAgIHRoaXMuX2lzQWN0aXZlZCA9IHRoaXMuX2lzQWN0aXZlZCB8fCBhY3RpdmU7XG4gICAgdmFyIHByZWZpeENscyA9IHJvb3RQcmVmaXhDbHMgKyAnLXRhYnBhbmUnO1xuICAgIHZhciBjbHMgPSBjbGFzc25hbWVzKChfY2xhc3NuYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzbmFtZXMsIHByZWZpeENscywgMSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NuYW1lcywgcHJlZml4Q2xzICsgJy1pbmFjdGl2ZScsICFhY3RpdmUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzbmFtZXMsIHByZWZpeENscyArICctYWN0aXZlJywgYWN0aXZlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc25hbWVzLCBjbGFzc05hbWUsIGNsYXNzTmFtZSksIF9jbGFzc25hbWVzKSk7XG4gICAgdmFyIGlzUmVuZGVyID0gZGVzdHJveUluYWN0aXZlVGFiUGFuZSA/IGFjdGl2ZSA6IHRoaXMuX2lzQWN0aXZlZDtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgX2V4dGVuZHMoe1xuICAgICAgICBzdHlsZTogc3R5bGUsXG4gICAgICAgIHJvbGU6ICd0YWJwYW5lbCcsXG4gICAgICAgICdhcmlhLWhpZGRlbic6IGFjdGl2ZSA/ICdmYWxzZScgOiAndHJ1ZScsXG4gICAgICAgIGNsYXNzTmFtZTogY2xzXG4gICAgICB9LCBnZXREYXRhQXR0cihyZXN0UHJvcHMpKSxcbiAgICAgIGlzUmVuZGVyIHx8IGZvcmNlUmVuZGVyID8gY2hpbGRyZW4gOiBwbGFjZWhvbGRlclxuICAgICk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBUYWJQYW5lOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgS2V5Q29kZSBmcm9tICcuL0tleUNvZGUnO1xuaW1wb3J0IFRhYlBhbmUgZnJvbSAnLi9UYWJQYW5lJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgZ2V0RGF0YUF0dHIgfSBmcm9tICcuL3V0aWxzJztcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBY3RpdmVLZXkocHJvcHMpIHtcbiAgdmFyIGFjdGl2ZUtleSA9IHZvaWQgMDtcbiAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChwcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkICYmICFhY3RpdmVLZXkgJiYgIWNoaWxkLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICBhY3RpdmVLZXkgPSBjaGlsZC5rZXk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGFjdGl2ZUtleTtcbn1cblxuZnVuY3Rpb24gYWN0aXZlS2V5SXNWYWxpZChwcm9wcywga2V5KSB7XG4gIHZhciBrZXlzID0gUmVhY3QuQ2hpbGRyZW4ubWFwKHByb3BzLmNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQgJiYgY2hpbGQua2V5O1xuICB9KTtcbiAgcmV0dXJuIGtleXMuaW5kZXhPZihrZXkpID49IDA7XG59XG5cbnZhciBUYWJzID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFRhYnMsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFRhYnMocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGFicyk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoVGFicy5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFRhYnMpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfaW5pdGlhbGlzZVByb3BzLmNhbGwoX3RoaXMpO1xuXG4gICAgdmFyIGFjdGl2ZUtleSA9IHZvaWQgMDtcbiAgICBpZiAoJ2FjdGl2ZUtleScgaW4gcHJvcHMpIHtcbiAgICAgIGFjdGl2ZUtleSA9IHByb3BzLmFjdGl2ZUtleTtcbiAgICB9IGVsc2UgaWYgKCdkZWZhdWx0QWN0aXZlS2V5JyBpbiBwcm9wcykge1xuICAgICAgYWN0aXZlS2V5ID0gcHJvcHMuZGVmYXVsdEFjdGl2ZUtleTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0aXZlS2V5ID0gZ2V0RGVmYXVsdEFjdGl2ZUtleShwcm9wcyk7XG4gICAgfVxuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBhY3RpdmVLZXk6IGFjdGl2ZUtleVxuICAgIH07XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFRhYnMsIFt7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBpZiAoJ2FjdGl2ZUtleScgaW4gbmV4dFByb3BzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGFjdGl2ZUtleTogbmV4dFByb3BzLmFjdGl2ZUtleVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoIWFjdGl2ZUtleUlzVmFsaWQobmV4dFByb3BzLCB0aGlzLnN0YXRlLmFjdGl2ZUtleSkpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvNzA5M1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBhY3RpdmVLZXk6IGdldERlZmF1bHRBY3RpdmVLZXkobmV4dFByb3BzKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX2NsYXNzbmFtZXM7XG5cbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG5cbiAgICAgIHZhciBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgdGFiQmFyUG9zaXRpb24gPSBwcm9wcy50YWJCYXJQb3NpdGlvbixcbiAgICAgICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgcmVuZGVyVGFiQ29udGVudCA9IHByb3BzLnJlbmRlclRhYkNvbnRlbnQsXG4gICAgICAgICAgcmVuZGVyVGFiQmFyID0gcHJvcHMucmVuZGVyVGFiQmFyLFxuICAgICAgICAgIGRlc3Ryb3lJbmFjdGl2ZVRhYlBhbmUgPSBwcm9wcy5kZXN0cm95SW5hY3RpdmVUYWJQYW5lLFxuICAgICAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgWydwcmVmaXhDbHMnLCAndGFiQmFyUG9zaXRpb24nLCAnY2xhc3NOYW1lJywgJ3JlbmRlclRhYkNvbnRlbnQnLCAncmVuZGVyVGFiQmFyJywgJ2Rlc3Ryb3lJbmFjdGl2ZVRhYlBhbmUnXSk7XG5cbiAgICAgIHZhciBjbHMgPSBjbGFzc25hbWVzKChfY2xhc3NuYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzbmFtZXMsIHByZWZpeENscywgMSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NuYW1lcywgcHJlZml4Q2xzICsgJy0nICsgdGFiQmFyUG9zaXRpb24sIDEpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzbmFtZXMsIGNsYXNzTmFtZSwgISFjbGFzc05hbWUpLCBfY2xhc3NuYW1lcykpO1xuXG4gICAgICB0aGlzLnRhYkJhciA9IHJlbmRlclRhYkJhcigpO1xuICAgICAgdmFyIGNvbnRlbnRzID0gW1JlYWN0LmNsb25lRWxlbWVudCh0aGlzLnRhYkJhciwge1xuICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAga2V5OiAndGFiQmFyJyxcbiAgICAgICAgb25LZXlEb3duOiB0aGlzLm9uTmF2S2V5RG93bixcbiAgICAgICAgdGFiQmFyUG9zaXRpb246IHRhYkJhclBvc2l0aW9uLFxuICAgICAgICBvblRhYkNsaWNrOiB0aGlzLm9uVGFiQ2xpY2ssXG4gICAgICAgIHBhbmVsczogcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIGFjdGl2ZUtleTogdGhpcy5zdGF0ZS5hY3RpdmVLZXlcbiAgICAgIH0pLCBSZWFjdC5jbG9uZUVsZW1lbnQocmVuZGVyVGFiQ29udGVudCgpLCB7XG4gICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICB0YWJCYXJQb3NpdGlvbjogdGFiQmFyUG9zaXRpb24sXG4gICAgICAgIGFjdGl2ZUtleTogdGhpcy5zdGF0ZS5hY3RpdmVLZXksXG4gICAgICAgIGRlc3Ryb3lJbmFjdGl2ZVRhYlBhbmU6IGRlc3Ryb3lJbmFjdGl2ZVRhYlBhbmUsXG4gICAgICAgIGNoaWxkcmVuOiBwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgb25DaGFuZ2U6IHRoaXMuc2V0QWN0aXZlS2V5LFxuICAgICAgICBrZXk6ICd0YWJDb250ZW50J1xuICAgICAgfSldO1xuICAgICAgaWYgKHRhYkJhclBvc2l0aW9uID09PSAnYm90dG9tJykge1xuICAgICAgICBjb250ZW50cy5yZXZlcnNlKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIF9leHRlbmRzKHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNscyxcbiAgICAgICAgICBzdHlsZTogcHJvcHMuc3R5bGVcbiAgICAgICAgfSwgZ2V0RGF0YUF0dHIocmVzdFByb3BzKSksXG4gICAgICAgIGNvbnRlbnRzXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBUYWJzO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG52YXIgX2luaXRpYWxpc2VQcm9wcyA9IGZ1bmN0aW9uIF9pbml0aWFsaXNlUHJvcHMoKSB7XG4gIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gIHRoaXMub25UYWJDbGljayA9IGZ1bmN0aW9uIChhY3RpdmVLZXkpIHtcbiAgICBpZiAoX3RoaXMyLnRhYkJhci5wcm9wcy5vblRhYkNsaWNrKSB7XG4gICAgICBfdGhpczIudGFiQmFyLnByb3BzLm9uVGFiQ2xpY2soYWN0aXZlS2V5KTtcbiAgICB9XG4gICAgX3RoaXMyLnNldEFjdGl2ZUtleShhY3RpdmVLZXkpO1xuICB9O1xuXG4gIHRoaXMub25OYXZLZXlEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgZXZlbnRLZXlDb2RlID0gZS5rZXlDb2RlO1xuICAgIGlmIChldmVudEtleUNvZGUgPT09IEtleUNvZGUuUklHSFQgfHwgZXZlbnRLZXlDb2RlID09PSBLZXlDb2RlLkRPV04pIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHZhciBuZXh0S2V5ID0gX3RoaXMyLmdldE5leHRBY3RpdmVLZXkodHJ1ZSk7XG4gICAgICBfdGhpczIub25UYWJDbGljayhuZXh0S2V5KTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50S2V5Q29kZSA9PT0gS2V5Q29kZS5MRUZUIHx8IGV2ZW50S2V5Q29kZSA9PT0gS2V5Q29kZS5VUCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdmFyIHByZXZpb3VzS2V5ID0gX3RoaXMyLmdldE5leHRBY3RpdmVLZXkoZmFsc2UpO1xuICAgICAgX3RoaXMyLm9uVGFiQ2xpY2socHJldmlvdXNLZXkpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLnNldEFjdGl2ZUtleSA9IGZ1bmN0aW9uIChhY3RpdmVLZXkpIHtcbiAgICBpZiAoX3RoaXMyLnN0YXRlLmFjdGl2ZUtleSAhPT0gYWN0aXZlS2V5KSB7XG4gICAgICBpZiAoISgnYWN0aXZlS2V5JyBpbiBfdGhpczIucHJvcHMpKSB7XG4gICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7XG4gICAgICAgICAgYWN0aXZlS2V5OiBhY3RpdmVLZXlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBfdGhpczIucHJvcHMub25DaGFuZ2UoYWN0aXZlS2V5KTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5nZXROZXh0QWN0aXZlS2V5ID0gZnVuY3Rpb24gKG5leHQpIHtcbiAgICB2YXIgYWN0aXZlS2V5ID0gX3RoaXMyLnN0YXRlLmFjdGl2ZUtleTtcbiAgICB2YXIgY2hpbGRyZW4gPSBbXTtcbiAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKF90aGlzMi5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGMpIHtcbiAgICAgIGlmIChjICYmICFjLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIGlmIChuZXh0KSB7XG4gICAgICAgICAgY2hpbGRyZW4ucHVzaChjKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZHJlbi51bnNoaWZ0KGMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgdmFyIGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aDtcbiAgICB2YXIgcmV0ID0gbGVuZ3RoICYmIGNoaWxkcmVuWzBdLmtleTtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCwgaSkge1xuICAgICAgaWYgKGNoaWxkLmtleSA9PT0gYWN0aXZlS2V5KSB7XG4gICAgICAgIGlmIChpID09PSBsZW5ndGggLSAxKSB7XG4gICAgICAgICAgcmV0ID0gY2hpbGRyZW5bMF0ua2V5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldCA9IGNoaWxkcmVuW2kgKyAxXS5rZXk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmV0O1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFicztcblxuXG5UYWJzLnByb3BUeXBlcyA9IHtcbiAgZGVzdHJveUluYWN0aXZlVGFiUGFuZTogUHJvcFR5cGVzLmJvb2wsXG4gIHJlbmRlclRhYkJhcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcmVuZGVyVGFiQ29udGVudDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRhYkJhclBvc2l0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgYWN0aXZlS2V5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZWZhdWx0QWN0aXZlS2V5OiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5UYWJzLmRlZmF1bHRQcm9wcyA9IHtcbiAgcHJlZml4Q2xzOiAncmMtdGFicycsXG4gIGRlc3Ryb3lJbmFjdGl2ZVRhYlBhbmU6IGZhbHNlLFxuICBvbkNoYW5nZTogbm9vcCxcbiAgdGFiQmFyUG9zaXRpb246ICd0b3AnLFxuICBzdHlsZToge31cbn07XG5cblRhYnMuVGFiUGFuZSA9IFRhYlBhbmU7IiwiaW1wb3J0IFRhYnMgZnJvbSAnLi9UYWJzJztcbmltcG9ydCBUYWJQYW5lIGZyb20gJy4vVGFiUGFuZSc7XG5pbXBvcnQgVGFiQ29udGVudCBmcm9tICcuL1RhYkNvbnRlbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBUYWJzO1xuZXhwb3J0IHsgVGFiUGFuZSwgVGFiQ29udGVudCB9OyIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XG4gIC8vIGFsbG93IFtjLFthLGJdXVxuICB2YXIgYyA9IFtdO1xuICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBpZiAoY2hpbGQpIHtcbiAgICAgIGMucHVzaChjaGlsZCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBY3RpdmVJbmRleChjaGlsZHJlbiwgYWN0aXZlS2V5KSB7XG4gIHZhciBjID0gdG9BcnJheShjaGlsZHJlbik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChjW2ldLmtleSA9PT0gYWN0aXZlS2V5KSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWN0aXZlS2V5KGNoaWxkcmVuLCBpbmRleCkge1xuICB2YXIgYyA9IHRvQXJyYXkoY2hpbGRyZW4pO1xuICByZXR1cm4gY1tpbmRleF0ua2V5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VHJhbnNmb3JtKHN0eWxlLCB2KSB7XG4gIHN0eWxlLnRyYW5zZm9ybSA9IHY7XG4gIHN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHY7XG4gIHN0eWxlLm1velRyYW5zZm9ybSA9IHY7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RyYW5zZm9ybVN1cHBvcnRlZChzdHlsZSkge1xuICByZXR1cm4gJ3RyYW5zZm9ybScgaW4gc3R5bGUgfHwgJ3dlYmtpdFRyYW5zZm9ybScgaW4gc3R5bGUgfHwgJ01velRyYW5zZm9ybScgaW4gc3R5bGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRUcmFuc2l0aW9uKHN0eWxlLCB2KSB7XG4gIHN0eWxlLnRyYW5zaXRpb24gPSB2O1xuICBzdHlsZS53ZWJraXRUcmFuc2l0aW9uID0gdjtcbiAgc3R5bGUuTW96VHJhbnNpdGlvbiA9IHY7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0VHJhbnNmb3JtUHJvcFZhbHVlKHYpIHtcbiAgcmV0dXJuIHtcbiAgICB0cmFuc2Zvcm06IHYsXG4gICAgV2Via2l0VHJhbnNmb3JtOiB2LFxuICAgIE1velRyYW5zZm9ybTogdlxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNWZXJ0aWNhbCh0YWJCYXJQb3NpdGlvbikge1xuICByZXR1cm4gdGFiQmFyUG9zaXRpb24gPT09ICdsZWZ0JyB8fCB0YWJCYXJQb3NpdGlvbiA9PT0gJ3JpZ2h0Jztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRyYW5zZm9ybUJ5SW5kZXgoaW5kZXgsIHRhYkJhclBvc2l0aW9uKSB7XG4gIHZhciB0cmFuc2xhdGUgPSBpc1ZlcnRpY2FsKHRhYkJhclBvc2l0aW9uKSA/ICd0cmFuc2xhdGVZJyA6ICd0cmFuc2xhdGVYJztcbiAgcmV0dXJuIHRyYW5zbGF0ZSArICcoJyArIC1pbmRleCAqIDEwMCArICclKSB0cmFuc2xhdGVaKDApJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1hcmdpblN0eWxlKGluZGV4LCB0YWJCYXJQb3NpdGlvbikge1xuICB2YXIgbWFyZ2luRGlyZWN0aW9uID0gaXNWZXJ0aWNhbCh0YWJCYXJQb3NpdGlvbikgPyAnbWFyZ2luVG9wJyA6ICdtYXJnaW5MZWZ0JztcbiAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eSh7fSwgbWFyZ2luRGlyZWN0aW9uLCAtaW5kZXggKiAxMDAgKyAnJScpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3R5bGUoZWwsIHByb3BlcnR5KSB7XG4gIHJldHVybiArZ2V0Q29tcHV0ZWRTdHlsZShlbCkuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eSkucmVwbGFjZSgncHgnLCAnJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRQeFN0eWxlKGVsLCB2YWx1ZSwgdmVydGljYWwpIHtcbiAgdmFsdWUgPSB2ZXJ0aWNhbCA/ICcwcHgsICcgKyB2YWx1ZSArICdweCwgMHB4JyA6IHZhbHVlICsgJ3B4LCAwcHgsIDBweCc7XG4gIHNldFRyYW5zZm9ybShlbC5zdHlsZSwgJ3RyYW5zbGF0ZTNkKCcgKyB2YWx1ZSArICcpJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhQXR0cihwcm9wcykge1xuICByZXR1cm4gT2JqZWN0LmtleXMocHJvcHMpLnJlZHVjZShmdW5jdGlvbiAocHJldiwga2V5KSB7XG4gICAgaWYgKGtleS5zdWJzdHIoMCwgNSkgPT09ICdhcmlhLScgfHwga2V5LnN1YnN0cigwLCA1KSA9PT0gJ2RhdGEtJyB8fCBrZXkgPT09ICdyb2xlJykge1xuICAgICAgcHJldltrZXldID0gcHJvcHNba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHByZXY7XG4gIH0sIHt9KTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNb2RhbCwgRm9ybSwgSW5wdXQsIEJ1dHRvbiwgQWxlcnQgfSBmcm9tICdhbnRkJztcclxuY2xhc3MgVXBkYXRlTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgcmVuZGVyKCl7XHJcbiAgICBsZXQgeyB2aXNpYmxlLCBjbG9zZSwgdHlwZSB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHsgZ2V0RmllbGREZWNvcmF0b3IsIGlzRmllbGRUb3VjaGVkLCBnZXRGaWVsZEVycm9yLCBnZXRGaWVsZHNFcnJvciB9ID0gdGhpcy5wcm9wcy5mb3JtO1xyXG4gICAgY29uc3QgdHlwZU5hbWVFcnIgPSBpc0ZpZWxkVG91Y2hlZCgndGFza190eXBlX25hbWUnKSAmJiBnZXRGaWVsZEVycm9yKCd0YXNrX3R5cGVfbmFtZScpO1xyXG4gICAgY29uc3QgdGltZVdhcm5FcnIgPSBpc0ZpZWxkVG91Y2hlZCgndGltZV93YXJuJykgJiYgZ2V0RmllbGRFcnJvcigndGltZV93YXJuJyk7XHJcbiAgICBjb25zdCB0aW1lT3V0RXJyID0gaXNGaWVsZFRvdWNoZWQoJ3RpbWVfb3V0JykgJiYgZ2V0RmllbGRFcnJvcigndGltZV9vdXQnKTtcclxuICAgIHJldHVybiA8TW9kYWxcclxuICAgICAgZm9vdGVyPXs8ZGl2PlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gY2xvc2UoKX0+5Y+W5raIPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPXsncHJpbWFyeSd9IG9uQ2xpY2s9eygpID0+IHRoaXMuZW5zdXJlKCl9IGRpc2FibGVkPXt0aGlzLmhhc0Vycm9ycyhnZXRGaWVsZHNFcnJvcihbJ3Rhc2tfdHlwZV9uYW1lJywndGltZV93YXJuJywgJ3RpbWVfb3V0J10pKX0+56Gu6K6kPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2Pn1cclxuICAgICAgdmlzaWJsZT17dmlzaWJsZX0gdGl0bGU9eyfkvaDmraPlnKjnvJbovpEgJysgdHlwZS50YXNrX3R5cGVfbmFtZX0+XHJcbiAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgIHZhbGlkYXRlU3RhdHVzPXt0eXBlTmFtZUVyciA/ICdlcnJvcicgOiAnJ30gaGVscD17dHlwZU5hbWVFcnIgfHwgJyd9XHJcbiAgICAgICAgICAgIGxhYmVsPSfku7vliqHnsbvlnosnPlxyXG4gICAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ3Rhc2tfdHlwZV9uYW1lJywge1xyXG4gICAgICAgICAgICAgIHJ1bGVzOiBbe1xyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAn6K+36L6T5YWl5Lu75Yqh57G75Z6L5ZCN56ewJ1xyXG4gICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH0pKFxyXG4gICAgICAgICAgICAgIDxJbnB1dCBvbkNoYW5nZT17KCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoKX0gZGlzYWJsZWQ9e3RydWV9Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICB2YWxpZGF0ZVN0YXR1cz17dGltZVdhcm5FcnIgPyAnZXJyb3InIDogJyd9IGhlbHA9e3RpbWVXYXJuRXJyIHx8ICcnfVxyXG4gICAgICAgICAgICBsYWJlbD0n6aKE6K2m5pe26Ze0Jz5cclxuICAgICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKCd0aW1lX3dhcm4nLCB7XHJcbiAgICAgICAgICAgICAgcnVsZXM6IFt7XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfor7fovpPlhaXpooTorabml7bpl7QnXHJcbiAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSkoXHJcbiAgICAgICAgICAgICAgPElucHV0IGFkZG9uQWZ0ZXI9eyflsI/ml7YgJ30vPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgIHZhbGlkYXRlU3RhdHVzPXt0aW1lT3V0RXJyID8gJ2Vycm9yJyA6ICcnfSBoZWxwPXt0aW1lT3V0RXJyIHx8ICcnfVxyXG4gICAgICAgICAgICBsYWJlbD0n6LaF5pe25pe26Ze0Jz5cclxuICAgICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKCd0aW1lX291dCcsIHtcclxuICAgICAgICAgICAgICBydWxlczogW3tcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ+ivt+i+k+WFpei2heaXtuaXtumXtCdcclxuICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9KShcclxuICAgICAgICAgICAgICA8SW5wdXQgYWRkb25BZnRlcj17J+Wwj+aXtid9Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPEFsZXJ0IHR5cGU9J3dhcm5pbmcnIG1lc3NhZ2U9J+azqOaEj++8mue8lui+keivpeS7u+WKoeexu+Wei+eahOmihOitpuaXtumXtOWPiui2heaXtuaXtumXtOWwhuS8muW9seWTjeebuOWQjOS7u+WKoeexu+Wei+eahOmihOitpuaXtumXtOWSjOi2heaXtuaXtumXtCcvPlxyXG4gICAgPC9Nb2RhbD5cclxuICB9XHJcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpe1xyXG4gICAgaWYobmV4dFByb3BzLnR5cGUudGFza190eXBlX2lkICE9PSB0aGlzLnByb3BzLnR5cGUudGFza190eXBlX2lkKXtcclxuICAgICAgdGhpcy5zZXRWYWx1ZShuZXh0UHJvcHMudHlwZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldFZhbHVlID0gKHR5cGUpID0+IHtcclxuICAgIHRoaXMucHJvcHMuZm9ybS5zZXRGaWVsZHMoe1xyXG4gICAgICB0YXNrX3R5cGVfbmFtZToge1xyXG4gICAgICAgIHZhbHVlOiB0eXBlLnRhc2tfdHlwZV9uYW1lXHJcbiAgICAgIH0sXHJcbiAgICAgIHRpbWVfd2Fybjoge1xyXG4gICAgICAgIHZhbHVlOiB0eXBlLnRpbWVfd2FyblxyXG4gICAgICB9LFxyXG4gICAgICB0aW1lX291dDoge1xyXG4gICAgICAgIHZhbHVlOiB0eXBlLnRpbWVfb3V0XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfTtcclxuICBoYXNFcnJvcnMgPSAoZmllbGRzRXJyb3IpID0+IHtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhmaWVsZHNFcnJvcikuc29tZShmaWVsZCA9PiBmaWVsZHNFcnJvcltmaWVsZF0pO1xyXG4gIH07XHJcbiAgZW5zdXJlID0gKCkgPT4ge1xyXG4gICAgbGV0IHZhbHVlID0gdGhpcy5wcm9wcy5mb3JtLmdldEZpZWxkc1ZhbHVlKCk7XHJcbiAgICBsZXQgdHlwZSA9IHRoaXMucHJvcHMudHlwZTtcclxuICAgIHRoaXMucHJvcHMuZW5zdXJlKHtcclxuICAgICAgdGFza190eXBlX2lkOiB0eXBlLnRhc2tfdHlwZV9pZCxcclxuICAgICAgLi4udmFsdWVcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5sZXQgVXBkYXRlTW9kYWxGb3JtID0gRm9ybS5jcmVhdGUoKShVcGRhdGVNb2RhbCk7XHJcbmV4cG9ydCBkZWZhdWx0IFVwZGF0ZU1vZGFsRm9ybTsiLCJsZXQgaGFuZGxlRm9ybURhdGEgPSAoZGF0YSkgPT4ge1xyXG4gICAgbGV0IHJldCA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgT2JqZWN0LmtleXMoZGF0YSkubWFwKGsgPT4ge1xyXG4gICAgICAgIGlmKEFycmF5LmlzQXJyYXkoZGF0YVtrXSkpe1xyXG4gICAgICAgICAgICBkYXRhW2tdLmZvckVhY2goZCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXQuYXBwZW5kKGssZCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldC5hcHBlbmQoayxkYXRhW2tdKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXQ7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUZvcm1EYXRhOyIsImxldCBoYW5kbGVKc29uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlSnNvbjsiLCJpbXBvcnQgaGFuZGxlSnNvbiBmcm9tICcuL2hhbmRsZS1qc29uJztcclxuaW1wb3J0IGhhbmRsZUZvcm1EYXRhIGZyb20gJy4vaGFuZGxlLWZvcm1kYXRhJztcclxuXHJcbmZ1bmN0aW9uIHJlcXVlc3QoeyB1cmwsIG1ldGhvZCA9ICdQT1NUJywgcG9zdFR5cGUgPSAnanNvbicgLGRhdGEgPSB7fSwgc3VjY2VzcyA9ICgpID0+IHt9LCBmYWlsID0gKCkgPT4ge30sIGNvbXBsZXRlID0gKCkgPT4ge319KSB7XHJcbiAgICBpZighdXJsKXtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VybOWPguaVsOS4jeWPr+e8uuecgScpO1xyXG4gICAgfVxyXG4gICAgbGV0IHhtbCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeG1sLm9wZW4obWV0aG9kLCB1cmwpO1xyXG4gICAgbGV0IHBvc3REYXRhIDtcclxuICAgIHN3aXRjaCAocG9zdFR5cGUpe1xyXG4gICAgICAgIGNhc2UgJ2pzb24nOlxyXG4gICAgICAgICAgICB4bWwuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICAgICAgICAgICAgcG9zdERhdGEgPSBoYW5kbGVKc29uKGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdmb3JtZGF0YSc6XHJcbiAgICAgICAgICAgIC8vIHhtbC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCBcImFwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbFwiKTtcclxuICAgICAgICAgICAgcG9zdERhdGEgPSBoYW5kbGVGb3JtRGF0YShkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgeG1sLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICAgICAgICAgIHBvc3REYXRhID0gaGFuZGxlSnNvbihkYXRhKTtcclxuICAgIH1cclxuICAgIHhtbC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoeG1sLnJlYWR5U3RhdGUgPT09IDQpe1xyXG4gICAgICAgICAgICBpZih4bWwuc3RhdHVzID09PSAyMDApe1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHhtbC5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvZGUgPSBkYXRhLmNvZGU7XHJcbiAgICAgICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY29kZSA9PT0gdW5kZWZpbmVkKSB0aHJvdyBuZXcgRXJyb3IoJ2NvZGUgaXMgbm90IGRlZmluZWQnKTtcclxuICAgICAgICAgICAgICAgIH1jYXRjaChlKXtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHBhcnNlSW50KGRhdGEuY29kZSkgPT09IDIwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGZhaWwoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ+ivt+axgumBh+WIsOS6humXrumimO+8jOivt+eojeWQjuWGjeWwneivlScpO1xyXG4gICAgICAgICAgICAgICAgZmFpbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbXBsZXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHhtbC5zZW5kKHBvc3REYXRhKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0O1xyXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4vc2V0dGluZy5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuL3NldHRpbmcuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4vc2V0dGluZy5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IENhcmQsIEZvcm0sIElucHV0LFJvdyxDb2wsIEJ1dHRvbiwgVGFibGUsIG5vdGlmaWNhdGlvbiwgTW9kYWwgIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBzdHlsZSBmcm9tICcuL3NldHRpbmcuY3NzJztcclxuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vLi4vaGVscGVycy9yZXF1ZXN0JztcclxuaW1wb3J0IFVwZGF0ZU1vZGFsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdXBkYXRlLW1vZGFsJztcclxuY2xhc3MgU2V0dGluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIHRhc2tUeXBlTGlzdDogW10sXHJcbiAgICAgICAgbG9vcDogJycsXHJcbiAgICAgICAgYWRkVHlwZUVycjogZmFsc2UsXHJcbiAgICAgICAgdXBkYXRpbmc6IGZhbHNlLFxyXG4gICAgICAgIHVwZGF0ZVR5cGU6IHt9XHJcbiAgICB9O1xyXG4gICAgY29sdW1ucyA9IFt7XHJcbiAgICAgICAgdGl0bGU6ICfku7vliqHnsbvlnosnLFxyXG4gICAgICAgIGRhdGFJbmRleDogJ3Rhc2tfdHlwZV9uYW1lJ1xyXG4gICAgfSx7XHJcbiAgICAgICAgdGl0bGU6ICfpooTorabml7bpl7QnLFxyXG4gICAgICAgIGRhdGFJbmRleDogJ3RpbWVfd2FybicsXHJcbiAgICAgICAgcmVuZGVyOiAodGltZSkgPT4gPHNwYW4+5o+Q5YmNe3RpbWV95bCP5pe2PC9zcGFuPlxyXG4gICAgfSwge1xyXG4gICAgICAgIHRpdGxlOiAn6LaF5pe25pe26Ze0JyxcclxuICAgICAgICBkYXRhSW5kZXg6ICd0aW1lX291dCcsXHJcbiAgICAgICAgcmVuZGVyOiAodGltZSkgPT4gPHNwYW4+5o+Q5YmNe3RpbWV95bCP5pe2PC9zcGFuPlxyXG4gICAgfSwge1xyXG4gICAgICAgIHRpdGxlOiAn5pON5L2cJyxcclxuICAgICAgICBkYXRhSW5kZXg6ICd0YXNrX3R5cGVfaWQnLFxyXG4gICAgICAgIHJlbmRlcjogKGlkLCByZWNvcmQpID0+IDxzcGFuPlxyXG4gICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiB0aGlzLnVwZGF0ZUlORyhyZWNvcmQpfSBzdHlsZT17e21hcmdpblJpZ2h0OiAnOHB4J319PuS/ruaUuTwvYT5cclxuICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gdGhpcy5kZWxldGVUeXBlKGlkKX0+5Yig6ZmkPC9hPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgIH1dO1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3QgeyBnZXRGaWVsZERlY29yYXRvciwgaXNGaWVsZFRvdWNoZWQsIGdldEZpZWxkRXJyb3IsIGdldEZpZWxkc0Vycm9yIH0gPSB0aGlzLnByb3BzLmZvcm07XHJcbiAgICAgICAgY29uc3QgIHsgdGFza1R5cGVMaXN0LCBsb29wLCBhZGRUeXBlRXJyLCB1cGRhdGluZyAsIHVwZGF0ZVR5cGV9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB0eXBlTmFtZUVyciA9IGlzRmllbGRUb3VjaGVkKCd0YXNrX3R5cGVfbmFtZScpICYmIGdldEZpZWxkRXJyb3IoJ3Rhc2tfdHlwZV9uYW1lJykgfHwgYWRkVHlwZUVycjtcclxuICAgICAgICBjb25zdCB0aW1lV2FybkVyciA9IGlzRmllbGRUb3VjaGVkKCd0aW1lX3dhcm4nKSAmJiBnZXRGaWVsZEVycm9yKCd0aW1lX3dhcm4nKTtcclxuICAgICAgICBjb25zdCB0aW1lT3V0RXJyID0gaXNGaWVsZFRvdWNoZWQoJ3RpbWVfb3V0JykgJiYgZ2V0RmllbGRFcnJvcigndGltZV9vdXQnKTtcclxuICAgICAgICBjb25zdCBsb29wRXJyID0gaXNGaWVsZFRvdWNoZWQoJ2xvb3AnKSAmJiBnZXRGaWVsZEVycm9yKCdsb29wJyk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxVcGRhdGVNb2RhbCB2aXNpYmxlPXt1cGRhdGluZ30gdHlwZT17dXBkYXRlVHlwZX0gZW5zdXJlPXsodmFsdWUpID0+IHRoaXMudXBkYXRlVHlwZSh2YWx1ZSl9IGNsb3NlPXsoKSA9PiB0aGlzLmNsb3NlTW9kYWwoKX0vPlxyXG4gICAgICAgICAgICAgICAgPENhcmQgdGl0bGU9eyfku7vliqHorr7nva4nfSBjbGFzc05hbWU9e3N0eWxlLmNhcmR9IGJvcmRlcmVkPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMuaGFuZGxlQWRkVGFza1R5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cImlubGluZVwiIGNsYXNzTmFtZT17c3R5bGUuc2VhcmNoX2Zvcm19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93IGd1dHRlcj17MjR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXs3fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlU3RhdHVzPXt0eXBlTmFtZUVyciA/ICdlcnJvcicgOiAnJ30gaGVscD17dHlwZU5hbWVFcnIgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSfku7vliqHnsbvlnosnIGNsYXNzTmFtZT17c3R5bGUuZm9ybV9pdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKCd0YXNrX3R5cGVfbmFtZScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfor7fovpPlhaXku7vliqHnsbvlnovlkI3np7AnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBvbkNoYW5nZT17KCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoKX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVTdGF0dXM9e3RpbWVXYXJuRXJyID8gJ2Vycm9yJyA6ICcnfSBoZWxwPXt0aW1lV2FybkVyciB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J+mihOitpuaXtumXtCcgY2xhc3NOYW1lPXtzdHlsZS5mb3JtX2l0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ3RpbWVfd2FybicsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfor7fovpPlhaXpooTorabml7bpl7QnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBhZGRvbkFmdGVyPXsn5bCP5pe2ICd9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXs3fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlU3RhdHVzPXt0aW1lT3V0RXJyID8gJ2Vycm9yJyA6ICcnfSBoZWxwPXt0aW1lT3V0RXJyIHx8ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0n6LaF5pe25pe26Ze0JyBjbGFzc05hbWU9e3N0eWxlLmZvcm1faXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRGaWVsZERlY29yYXRvcigndGltZV9vdXQnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlczogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn6K+36L6T5YWl6LaF5pe25pe26Ze0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgYWRkb25BZnRlcj17J+Wwj+aXtid9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5oYXNFcnJvcnMoZ2V0RmllbGRzRXJyb3IoWyd0YXNrX3R5cGVfbmFtZScsJ3RpbWVfd2FybicsICd0aW1lX291dCddKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiIGljb249eydwbHVzJ30gaHRtbFR5cGU9XCJzdWJtaXRcIj7mlrDlop48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e3N0eWxlLmNhcmQgfSBib3JkZXJlZD17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZSBjb2x1bW5zPXt0aGlzLmNvbHVtbnN9IGRhdGFTb3VyY2U9e3Rhc2tUeXBlTGlzdH0gcm93S2V5PSd0YXNrX3R5cGVfaWQnIHBhZ2luYXRpb249e2ZhbHNlfS8+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCB0aXRsZT17J+ezu+e7n+iuvue9rid9IGNsYXNzTmFtZT17c3R5bGUuY2FyZH0gYm9yZGVyZWQ9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdmb3JtMidcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU2V0TG9vcH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiaW5saW5lXCIgY2xhc3NOYW1lPXtzdHlsZS5zZWFyY2hfZm9ybX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNwYW49ezh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVTdGF0dXM9e2xvb3BFcnIgPyAnZXJyb3InIDogJyd9IGhlbHA9e2xvb3BFcnIgfHwgJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSfmn6Xor6LlkajmnJ8nIGNsYXNzTmFtZT17c3R5bGUuZm9ybV9pdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKCdsb29wJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlOiBsb29wLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+ivt+i+k+WFpeafpeivouWRqOacnydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0se1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogKHJ1bGUsIHZhbHVlLCBjYikgPT4gcGFyc2VGbG9hdCh2YWx1ZSkgPT09IHBhcnNlRmxvYXQobG9vcCkgPyBjYign6K+36L6T5YWl5LiA5Liq5paw55qE5p+l6K+i5ZGo5pyfJykgOiBjYigpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdHRlcm46IC9eWzEtOV1cXGQqJC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT17J29mZid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkb25BZnRlcj17J+WIhumSnyd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gY2xhc3NOYW1lPXtzdHlsZS5zeXN0ZW1fYnRuX2dyb3VwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJkZWZhdWx0XCIgc3R5bGU9e3ttYXJnaW5SaWdodDogJzE2cHgnfX0+6L+U5ZuePC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc0ZpZWxkVG91Y2hlZCgnbG9vcCcpIHx8IHRoaXMuaGFzRXJyb3JzKGdldEZpZWxkc0Vycm9yKFsnbG9vcCddKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPuS/neWtmDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5mb3JtLnZhbGlkYXRlRmllbGRzKCk7XHJcbiAgICAgICAgdGhpcy5mZXRjaFRhc2tUeXBlTGlzdCgpO1xyXG4gICAgfVxyXG4gICAgaGFzRXJyb3JzID0gKGZpZWxkc0Vycm9yKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGZpZWxkc0Vycm9yKS5zb21lKGZpZWxkID0+IGZpZWxkc0Vycm9yW2ZpZWxkXSk7XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hUYXNrVHlwZUxpc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgcmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogJy9hcGkvZ2V0X2NvbmZpZycsXHJcbiAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyB0YWJsZSwgbG9vcCB9ID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZm9ybS5zZXRGaWVsZHMoe1xyXG4gICAgICAgICAgICAgICAgICAgIGxvb3A6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGxvb3BcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRhc2tUeXBlTGlzdDogdGFibGUgfHwgW10sXHJcbiAgICAgICAgICAgICAgICAgICAgbG9vcFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgaGFuZGxlQWRkVGFza1R5cGUgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5mb3JtLnZhbGlkYXRlRmllbGRzKFsndGFza190eXBlX25hbWUnLCd0aW1lX3dhcm4nLCAndGltZV9vdXQnXSwoZXJyLCB2YWx1ZXMpID0+IHtcclxuICAgICAgICAgICAgaWYoIWVycil7XHJcbiAgICAgICAgICAgICAgICBsZXQgeyB0YXNrX3R5cGVfbmFtZSwgdGltZV93YXJuLCB0aW1lX291dCB9ID0gdmFsdWVzO1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2FwaS9hZGRfdHlwZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrX3R5cGVfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZV93YXJuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lX291dFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLnN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+aWsOWinuS7u+WKoeexu+Wei+aIkOWKnycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQucHJvcHMuZm9ybS5zZXRGaWVsZHMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza190eXBlX25hbWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZV93YXJuOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVfb3V0OiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5wcm9wcy5mb3JtLnZhbGlkYXRlRmllbGRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZmV0Y2hUYXNrVHlwZUxpc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZhaWw6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVHlwZUVycjogJ+S4jeWPr+mHjeWkjeaWsOWinidcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIHVwZGF0ZUlORyA9ICh0eXBlKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHVwZGF0aW5nOiB0cnVlLFxyXG4gICAgICAgIHVwZGF0ZVR5cGU6IHR5cGVcclxuICAgICAgfSlcclxuICB9O1xyXG4gIGNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgdXBkYXRpbmc6IGZhbHNlXHJcbiAgICB9KVxyXG4gIH07XHJcbiAgdXBkYXRlVHlwZSA9ICh7dGFza190eXBlX2lkLCB0aW1lX3dhcm4sIHRpbWVfb3V0fSkgPT4ge1xyXG4gICAgICByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvYXBpL3VwZGF0ZV90eXBlJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICB0YXNrX3R5cGVfaWQ6IHRhc2tfdHlwZV9pZCxcclxuICAgICAgICAgIHRpbWVfd2FybjogdGltZV93YXJuLFxyXG4gICAgICAgICAgdGltZV9vdXQ6IHRpbWVfb3V0XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICBub3RpZmljYXRpb24uc3VjY2Vzcyh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6ICfkv67mlLnku7vliqHnsbvlnovmiJDlip8nXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xyXG4gICAgICAgICAgdGhpcy5mZXRjaFRhc2tUeXBlTGlzdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICB9O1xyXG4gICAgZGVsZXRlVHlwZSA9IChpZCkgPT4ge1xyXG4gICAgICAgIHJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6ICcvYXBpL2RlbGV0ZV90eXBlJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdGFza190eXBlX2lkOiBpZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBub3RpZmljYXRpb24uc3VjY2Vzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+WIoOmZpOS7u+WKoeexu+Wei+aIkOWKnydcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mZXRjaFRhc2tUeXBlTGlzdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcbiAgICBoYW5kbGVTZXRMb29wID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMucHJvcHMuZm9ybS52YWxpZGF0ZUZpZWxkcyhbJ2xvb3AnXSwoZXJyLCB2YWx1ZXMpID0+IHtcclxuICAgICAgICAgICAgaWYoIWVycil7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvYXBpL3NldF9sb29wJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvb3BfdGltZTogdmFsdWVzLmxvb3BcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLnN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+iuvue9ruafpeivouWRqOacn+aIkOWKnycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogYOiuvue9ruaIkOWKn+WQjuWwhuavj+malCR7dmFsdWVzLmxvb3B95YiG6ZKf6Ieq5Yqo5Yi35paw5LiA5qyhYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5mZXRjaFRhc2tUeXBlTGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuICAgIGhhbmRsZUNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgYWRkVHlwZUVycjogZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbmxldCBTZXR0aW5nRm9ybSA9IEZvcm0uY3JlYXRlKCkoU2V0dGluZyk7XHJcbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=