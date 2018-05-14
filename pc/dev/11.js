(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "../node_modules/antd/es/_util/isCssAnimationSupported.js":
/*!****************************************************************!*\
  !*** ../node_modules/antd/es/_util/isCssAnimationSupported.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var animation = void 0;
function isCssAnimationSupported() {
    if (animation !== undefined) {
        return animation;
    }
    var domPrefixes = 'Webkit Moz O ms Khtml'.split(' ');
    var elm = document.createElement('div');
    if (elm.style.animationName !== undefined) {
        animation = true;
    }
    if (animation !== undefined) {
        for (var i = 0; i < domPrefixes.length; i++) {
            if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
                animation = true;
                break;
            }
        }
    }
    animation = animation || false;
    return animation;
}
/* harmony default export */ __webpack_exports__["default"] = (isCssAnimationSupported);

/***/ }),

/***/ "../node_modules/antd/es/dropdown/dropdown-button.js":
/*!***********************************************************!*\
  !*** ../node_modules/antd/es/dropdown/dropdown-button.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../button */ "../node_modules/antd/es/button/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icon */ "../node_modules/antd/es/icon/index.js");
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dropdown */ "../node_modules/antd/es/dropdown/dropdown.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);





var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};





var ButtonGroup = _button__WEBPACK_IMPORTED_MODULE_6__["default"].Group;

var DropdownButton = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(DropdownButton, _React$Component);

    function DropdownButton() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, DropdownButton);

        return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (DropdownButton.__proto__ || Object.getPrototypeOf(DropdownButton)).apply(this, arguments));
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(DropdownButton, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                type = _a.type,
                disabled = _a.disabled,
                onClick = _a.onClick,
                children = _a.children,
                prefixCls = _a.prefixCls,
                className = _a.className,
                overlay = _a.overlay,
                trigger = _a.trigger,
                align = _a.align,
                visible = _a.visible,
                onVisibleChange = _a.onVisibleChange,
                placement = _a.placement,
                getPopupContainer = _a.getPopupContainer,
                restProps = __rest(_a, ["type", "disabled", "onClick", "children", "prefixCls", "className", "overlay", "trigger", "align", "visible", "onVisibleChange", "placement", "getPopupContainer"]);
            var dropdownProps = {
                align: align,
                overlay: overlay,
                disabled: disabled,
                trigger: disabled ? [] : trigger,
                onVisibleChange: onVisibleChange,
                placement: placement,
                getPopupContainer: getPopupContainer
            };
            if ('visible' in this.props) {
                dropdownProps.visible = visible;
            }
            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                ButtonGroup,
                babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, restProps, { className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(prefixCls, className) }),
                react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                    _button__WEBPACK_IMPORTED_MODULE_6__["default"],
                    { type: type, disabled: disabled, onClick: onClick },
                    children
                ),
                react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                    _dropdown__WEBPACK_IMPORTED_MODULE_8__["default"],
                    dropdownProps,
                    react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                        _button__WEBPACK_IMPORTED_MODULE_6__["default"],
                        { type: type },
                        react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_7__["default"], { type: 'down' })
                    )
                )
            );
        }
    }]);

    return DropdownButton;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DropdownButton);

DropdownButton.defaultProps = {
    placement: 'bottomRight',
    type: 'default',
    prefixCls: 'ant-dropdown-button'
};

/***/ }),

/***/ "../node_modules/antd/es/dropdown/dropdown.js":
/*!****************************************************!*\
  !*** ../node_modules/antd/es/dropdown/dropdown.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var rc_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-dropdown */ "../node_modules/rc-dropdown/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _util_warning__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_util/warning */ "../node_modules/antd/es/_util/warning.js");










var Dropdown = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Dropdown, _React$Component);

    function Dropdown() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Dropdown);

        return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).apply(this, arguments));
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Dropdown, [{
        key: 'getTransitionName',
        value: function getTransitionName() {
            var _props = this.props,
                _props$placement = _props.placement,
                placement = _props$placement === undefined ? '' : _props$placement,
                transitionName = _props.transitionName;

            if (transitionName !== undefined) {
                return transitionName;
            }
            if (placement.indexOf('top') >= 0) {
                return 'slide-down';
            }
            return 'slide-up';
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var overlay = this.props.overlay;

            var overlayProps = overlay.props;
            Object(_util_warning__WEBPACK_IMPORTED_MODULE_8__["default"])(!overlayProps.mode || overlayProps.mode === 'vertical', 'mode="' + overlayProps.mode + '" is not supported for Dropdown\'s Menu.');
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                children = _props2.children,
                prefixCls = _props2.prefixCls,
                overlayElements = _props2.overlay,
                trigger = _props2.trigger,
                disabled = _props2.disabled;

            var child = react__WEBPACK_IMPORTED_MODULE_5__["Children"].only(children);
            var overlay = react__WEBPACK_IMPORTED_MODULE_5__["Children"].only(overlayElements);
            var dropdownTrigger = react__WEBPACK_IMPORTED_MODULE_5__["cloneElement"](child, {
                className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(child.props.className, prefixCls + '-trigger'),
                disabled: disabled
            });
            // menu cannot be selectable in dropdown defaultly
            var selectable = overlay.props.selectable || false;
            var fixedModeOverlay = react__WEBPACK_IMPORTED_MODULE_5__["cloneElement"](overlay, {
                mode: 'vertical',
                selectable: selectable
            });
            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                rc_dropdown__WEBPACK_IMPORTED_MODULE_6__["default"],
                babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props, { transitionName: this.getTransitionName(), trigger: disabled ? [] : trigger, overlay: fixedModeOverlay }),
                dropdownTrigger
            );
        }
    }]);

    return Dropdown;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

Dropdown.defaultProps = {
    prefixCls: 'ant-dropdown',
    mouseEnterDelay: 0.15,
    mouseLeaveDelay: 0.1,
    placement: 'bottomLeft'
};

/***/ }),

/***/ "../node_modules/antd/es/dropdown/index.js":
/*!*************************************************!*\
  !*** ../node_modules/antd/es/dropdown/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown */ "../node_modules/antd/es/dropdown/dropdown.js");
/* harmony import */ var _dropdown_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown-button */ "../node_modules/antd/es/dropdown/dropdown-button.js");


_dropdown__WEBPACK_IMPORTED_MODULE_0__["default"].Button = _dropdown_button__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (_dropdown__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../node_modules/antd/es/dropdown/style/css.js":
/*!*****************************************************!*\
  !*** ../node_modules/antd/es/dropdown/style/css.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../node_modules/antd/es/dropdown/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../button/style/css */ "../node_modules/antd/es/button/style/css.js");


// style dependencies


/***/ }),

/***/ "../node_modules/antd/es/dropdown/style/index.css":
/*!********************************************************!*\
  !*** ../node_modules/antd/es/dropdown/style/index.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/dropdown/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/dropdown/style/index.css", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
		var newContent = __webpack_require__(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/dropdown/style/index.css");

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

/***/ "../node_modules/antd/es/pagination/MiniSelect.js":
/*!********************************************************!*\
  !*** ../node_modules/antd/es/pagination/MiniSelect.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../select */ "../node_modules/antd/es/select/index.js");








var MiniSelect = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(MiniSelect, _React$Component);

    function MiniSelect() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, MiniSelect);

        return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (MiniSelect.__proto__ || Object.getPrototypeOf(MiniSelect)).apply(this, arguments));
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(MiniSelect, [{
        key: 'render',
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_select__WEBPACK_IMPORTED_MODULE_6__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ size: 'small' }, this.props));
        }
    }]);

    return MiniSelect;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MiniSelect);

MiniSelect.Option = _select__WEBPACK_IMPORTED_MODULE_6__["default"].Option;

/***/ }),

/***/ "../node_modules/antd/es/pagination/Pagination.js":
/*!********************************************************!*\
  !*** ../node_modules/antd/es/pagination/Pagination.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var rc_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-pagination */ "../node_modules/rc-pagination/es/index.js");
/* harmony import */ var rc_pagination_es_locale_en_US__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-pagination/es/locale/en_US */ "../node_modules/rc-pagination/es/locale/en_US.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../locale-provider/LocaleReceiver */ "../node_modules/antd/es/locale-provider/LocaleReceiver.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../select */ "../node_modules/antd/es/select/index.js");
/* harmony import */ var _MiniSelect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MiniSelect */ "../node_modules/antd/es/pagination/MiniSelect.js");





var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};








var Pagination = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Pagination, _React$Component);

    function Pagination() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Pagination);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).apply(this, arguments));

        _this.renderPagination = function (locale) {
            var _a = _this.props,
                className = _a.className,
                size = _a.size,
                restProps = __rest(_a, ["className", "size"]);
            var isSmall = size === 'small';
            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](rc_pagination__WEBPACK_IMPORTED_MODULE_6__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, restProps, { className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(className, { mini: isSmall }), selectComponentClass: isSmall ? _MiniSelect__WEBPACK_IMPORTED_MODULE_11__["default"] : _select__WEBPACK_IMPORTED_MODULE_10__["default"], locale: locale }));
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Pagination, [{
        key: 'render',
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                _locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_9__["default"],
                { componentName: 'Pagination', defaultLocale: rc_pagination_es_locale_en_US__WEBPACK_IMPORTED_MODULE_7__["default"] },
                this.renderPagination
            );
        }
    }]);

    return Pagination;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

Pagination.defaultProps = {
    prefixCls: 'ant-pagination',
    selectPrefixCls: 'ant-select'
};

/***/ }),

/***/ "../node_modules/antd/es/pagination/index.js":
/*!***************************************************!*\
  !*** ../node_modules/antd/es/pagination/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagination */ "../node_modules/antd/es/pagination/Pagination.js");

/* harmony default export */ __webpack_exports__["default"] = (_Pagination__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../node_modules/antd/es/pagination/style/css.js":
/*!*******************************************************!*\
  !*** ../node_modules/antd/es/pagination/style/css.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../node_modules/antd/es/pagination/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _select_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../select/style/css */ "../node_modules/antd/es/select/style/css.js");
/* harmony import */ var _input_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../input/style/css */ "../node_modules/antd/es/input/style/css.js");


// style dependencies



/***/ }),

/***/ "../node_modules/antd/es/pagination/style/index.css":
/*!**********************************************************!*\
  !*** ../node_modules/antd/es/pagination/style/index.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/pagination/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/pagination/style/index.css", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
		var newContent = __webpack_require__(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/pagination/style/index.css");

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

/***/ "../node_modules/antd/es/radio/group.js":
/*!**********************************************!*\
  !*** ../node_modules/antd/es/radio/group.js ***!
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! shallowequal */ "../node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./radio */ "../node_modules/antd/es/radio/radio.js");










function getCheckedValue(children) {
    var value = null;
    var matched = false;
    react__WEBPACK_IMPORTED_MODULE_5__["Children"].forEach(children, function (radio) {
        if (radio && radio.props && radio.props.checked) {
            value = radio.props.value;
            matched = true;
        }
    });
    return matched ? { value: value } : undefined;
}

var RadioGroup = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(RadioGroup, _React$Component);

    function RadioGroup(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, RadioGroup);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (RadioGroup.__proto__ || Object.getPrototypeOf(RadioGroup)).call(this, props));

        _this.onRadioChange = function (ev) {
            var lastValue = _this.state.value;
            var value = ev.target.value;

            if (!('value' in _this.props)) {
                _this.setState({
                    value: value
                });
            }
            var onChange = _this.props.onChange;
            if (onChange && value !== lastValue) {
                onChange(ev);
            }
        };
        var value = void 0;
        if ('value' in props) {
            value = props.value;
        } else if ('defaultValue' in props) {
            value = props.defaultValue;
        } else {
            var checkedValue = getCheckedValue(props.children);
            value = checkedValue && checkedValue.value;
        }
        _this.state = {
            value: value
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(RadioGroup, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                radioGroup: {
                    onChange: this.onRadioChange,
                    value: this.state.value,
                    disabled: this.props.disabled,
                    name: this.props.name
                }
            };
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                this.setState({
                    value: nextProps.value
                });
            } else {
                var checkedValue = getCheckedValue(nextProps.children);
                if (checkedValue) {
                    this.setState({
                        value: checkedValue.value
                    });
                }
            }
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return !shallowequal__WEBPACK_IMPORTED_MODULE_8___default()(this.props, nextProps) || !shallowequal__WEBPACK_IMPORTED_MODULE_8___default()(this.state, nextState);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var props = this.props;
            var _props$prefixCls = props.prefixCls,
                prefixCls = _props$prefixCls === undefined ? 'ant-radio-group' : _props$prefixCls,
                _props$className = props.className,
                className = _props$className === undefined ? '' : _props$className,
                options = props.options;

            var classString = classnames__WEBPACK_IMPORTED_MODULE_7___default()(prefixCls, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, prefixCls + '-' + props.size, props.size), className);
            var children = props.children;
            // 如果存在 options, 优先使用
            if (options && options.length > 0) {
                children = options.map(function (option, index) {
                    if (typeof option === 'string') {
                        // 此处类型自动推导为 string
                        return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                            _radio__WEBPACK_IMPORTED_MODULE_9__["default"],
                            { key: index, disabled: _this2.props.disabled, value: option, onChange: _this2.onRadioChange, checked: _this2.state.value === option },
                            option
                        );
                    } else {
                        // 此处类型自动推导为 { label: string value: string }
                        return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                            _radio__WEBPACK_IMPORTED_MODULE_9__["default"],
                            { key: index, disabled: option.disabled || _this2.props.disabled, value: option.value, onChange: _this2.onRadioChange, checked: _this2.state.value === option.value },
                            option.label
                        );
                    }
                });
            }
            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                'div',
                { className: classString, style: props.style, onMouseEnter: props.onMouseEnter, onMouseLeave: props.onMouseLeave, id: props.id },
                children
            );
        }
    }]);

    return RadioGroup;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RadioGroup);

RadioGroup.defaultProps = {
    disabled: false
};
RadioGroup.childContextTypes = {
    radioGroup: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any
};

/***/ }),

/***/ "../node_modules/antd/es/radio/index.js":
/*!**********************************************!*\
  !*** ../node_modules/antd/es/radio/index.js ***!
  \**********************************************/
/*! exports provided: Button, Group, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio */ "../node_modules/antd/es/radio/radio.js");
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./group */ "../node_modules/antd/es/radio/group.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return _group__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _radioButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./radioButton */ "../node_modules/antd/es/radio/radioButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _radioButton__WEBPACK_IMPORTED_MODULE_2__["default"]; });




_radio__WEBPACK_IMPORTED_MODULE_0__["default"].Button = _radioButton__WEBPACK_IMPORTED_MODULE_2__["default"];
_radio__WEBPACK_IMPORTED_MODULE_0__["default"].Group = _group__WEBPACK_IMPORTED_MODULE_1__["default"];

/* harmony default export */ __webpack_exports__["default"] = (_radio__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../node_modules/antd/es/radio/radio.js":
/*!**********************************************!*\
  !*** ../node_modules/antd/es/radio/radio.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/createClass */ "../node_modules/babel-runtime/helpers/createClass.js");
/* harmony import */ var babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rc_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-checkbox */ "../node_modules/rc-checkbox/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shallowequal */ "../node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_10__);






var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};






var Radio = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Radio, _React$Component);

    function Radio() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Radio);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).apply(this, arguments));

        _this.saveCheckbox = function (node) {
            _this.rcCheckbox = node;
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Radio, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
            return !shallowequal__WEBPACK_IMPORTED_MODULE_10___default()(this.props, nextProps) || !shallowequal__WEBPACK_IMPORTED_MODULE_10___default()(this.state, nextState) || !shallowequal__WEBPACK_IMPORTED_MODULE_10___default()(this.context.radioGroup, nextContext.radioGroup);
        }
    }, {
        key: 'focus',
        value: function focus() {
            this.rcCheckbox.focus();
        }
    }, {
        key: 'blur',
        value: function blur() {
            this.rcCheckbox.blur();
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var props = this.props,
                context = this.context;

            var prefixCls = props.prefixCls,
                className = props.className,
                children = props.children,
                style = props.style,
                restProps = __rest(props, ["prefixCls", "className", "children", "style"]);

            var radioGroup = context.radioGroup;

            var radioProps = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, restProps);
            if (radioGroup) {
                radioProps.name = radioGroup.name;
                radioProps.onChange = radioGroup.onChange;
                radioProps.checked = props.value === radioGroup.value;
                radioProps.disabled = props.disabled || radioGroup.disabled;
            }
            var wrapperClassString = classnames__WEBPACK_IMPORTED_MODULE_9___default()(className, (_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-wrapper', true), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-wrapper-checked', radioProps.checked), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-wrapper-disabled', radioProps.disabled), _classNames));
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'label',
                { className: wrapperClassString, style: style, onMouseEnter: props.onMouseEnter, onMouseLeave: props.onMouseLeave },
                react__WEBPACK_IMPORTED_MODULE_6__["createElement"](rc_checkbox__WEBPACK_IMPORTED_MODULE_8__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, radioProps, { prefixCls: prefixCls, ref: this.saveCheckbox })),
                children !== undefined ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    'span',
                    null,
                    children
                ) : null
            );
        }
    }]);

    return Radio;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Radio);

Radio.defaultProps = {
    prefixCls: 'ant-radio',
    type: 'radio'
};
Radio.contextTypes = {
    radioGroup: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any
};

/***/ }),

/***/ "../node_modules/antd/es/radio/radioButton.js":
/*!****************************************************!*\
  !*** ../node_modules/antd/es/radio/radioButton.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./radio */ "../node_modules/antd/es/radio/radio.js");









var RadioButton = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(RadioButton, _React$Component);

    function RadioButton() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, RadioButton);

        return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (RadioButton.__proto__ || Object.getPrototypeOf(RadioButton)).apply(this, arguments));
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(RadioButton, [{
        key: 'render',
        value: function render() {
            var radioProps = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props);
            if (this.context.radioGroup) {
                radioProps.onChange = this.context.radioGroup.onChange;
                radioProps.checked = this.props.value === this.context.radioGroup.value;
                radioProps.disabled = this.props.disabled || this.context.radioGroup.disabled;
            }
            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_radio__WEBPACK_IMPORTED_MODULE_7__["default"], radioProps);
        }
    }]);

    return RadioButton;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RadioButton);

RadioButton.defaultProps = {
    prefixCls: 'ant-radio-button'
};
RadioButton.contextTypes = {
    radioGroup: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any
};

/***/ }),

/***/ "../node_modules/antd/es/radio/style/css.js":
/*!**************************************************!*\
  !*** ../node_modules/antd/es/radio/style/css.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../node_modules/antd/es/radio/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "../node_modules/antd/es/radio/style/index.css":
/*!*****************************************************!*\
  !*** ../node_modules/antd/es/radio/style/index.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/radio/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/radio/style/index.css", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
		var newContent = __webpack_require__(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/radio/style/index.css");

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

/***/ "../node_modules/antd/es/spin/index.js":
/*!*********************************************!*\
  !*** ../node_modules/antd/es/spin/index.js ***!
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rc_animate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-animate */ "../node_modules/rc-animate/es/Animate.js");
/* harmony import */ var _util_isCssAnimationSupported__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_util/isCssAnimationSupported */ "../node_modules/antd/es/_util/isCssAnimationSupported.js");
/* harmony import */ var omit_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! omit.js */ "../node_modules/omit.js/es/index.js");






var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};







var Spin = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Spin, _React$Component);

    function Spin(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Spin);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Spin.__proto__ || Object.getPrototypeOf(Spin)).call(this, props));

        var spinning = props.spinning;
        _this.state = {
            spinning: spinning
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Spin, [{
        key: 'isNestedPattern',
        value: function isNestedPattern() {
            return !!(this.props && this.props.children);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (!Object(_util_isCssAnimationSupported__WEBPACK_IMPORTED_MODULE_10__["default"])()) {
                // Show text in IE9
                this.setState({
                    notCssAnimationSupported: true
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.debounceTimeout) {
                clearTimeout(this.debounceTimeout);
            }
            if (this.delayTimeout) {
                clearTimeout(this.delayTimeout);
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this2 = this;

            var currentSpinning = this.props.spinning;
            var spinning = nextProps.spinning;
            var delay = this.props.delay;

            if (this.debounceTimeout) {
                clearTimeout(this.debounceTimeout);
            }
            if (currentSpinning && !spinning) {
                this.debounceTimeout = window.setTimeout(function () {
                    return _this2.setState({ spinning: spinning });
                }, 200);
                if (this.delayTimeout) {
                    clearTimeout(this.delayTimeout);
                }
            } else {
                if (spinning && delay && !isNaN(Number(delay))) {
                    if (this.delayTimeout) {
                        clearTimeout(this.delayTimeout);
                    }
                    this.delayTimeout = window.setTimeout(function () {
                        return _this2.setState({ spinning: spinning });
                    }, delay);
                } else {
                    this.setState({ spinning: spinning });
                }
            }
        }
    }, {
        key: 'renderIndicator',
        value: function renderIndicator() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                indicator = _props.indicator;

            var dotClassName = prefixCls + '-dot';
            if (react__WEBPACK_IMPORTED_MODULE_6__["isValidElement"](indicator)) {
                return react__WEBPACK_IMPORTED_MODULE_6__["cloneElement"](indicator, {
                    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(indicator.props.className, dotClassName)
                });
            }
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'span',
                { className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(dotClassName, prefixCls + '-dot-spin') },
                react__WEBPACK_IMPORTED_MODULE_6__["createElement"]('i', null),
                react__WEBPACK_IMPORTED_MODULE_6__["createElement"]('i', null),
                react__WEBPACK_IMPORTED_MODULE_6__["createElement"]('i', null),
                react__WEBPACK_IMPORTED_MODULE_6__["createElement"]('i', null)
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var _a = this.props,
                className = _a.className,
                size = _a.size,
                prefixCls = _a.prefixCls,
                tip = _a.tip,
                wrapperClassName = _a.wrapperClassName,
                restProps = __rest(_a, ["className", "size", "prefixCls", "tip", "wrapperClassName"]);var _state = this.state,
                spinning = _state.spinning,
                notCssAnimationSupported = _state.notCssAnimationSupported;

            var spinClassName = classnames__WEBPACK_IMPORTED_MODULE_8___default()(prefixCls, (_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-sm', size === 'small'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-lg', size === 'large'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-spinning', spinning), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-show-text', !!tip || notCssAnimationSupported), _classNames), className);
            // fix https://fb.me/react-unknown-prop
            var divProps = Object(omit_js__WEBPACK_IMPORTED_MODULE_11__["default"])(restProps, ['spinning', 'delay', 'indicator']);
            var spinElement = react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'div',
                babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, divProps, { className: spinClassName }),
                this.renderIndicator(),
                tip ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    'div',
                    { className: prefixCls + '-text' },
                    tip
                ) : null
            );
            if (this.isNestedPattern()) {
                var _classNames2;

                var animateClassName = prefixCls + '-nested-loading';
                if (wrapperClassName) {
                    animateClassName += ' ' + wrapperClassName;
                }
                var containerClassName = classnames__WEBPACK_IMPORTED_MODULE_8___default()((_classNames2 = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames2, prefixCls + '-container', true), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames2, prefixCls + '-blur', spinning), _classNames2));
                return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    rc_animate__WEBPACK_IMPORTED_MODULE_9__["default"],
                    babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, divProps, { component: 'div', className: animateClassName, style: null, transitionName: 'fade' }),
                    spinning && react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                        'div',
                        { key: 'loading' },
                        spinElement
                    ),
                    react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                        'div',
                        { className: containerClassName, key: 'container' },
                        this.props.children
                    )
                );
            }
            return spinElement;
        }
    }]);

    return Spin;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Spin);

Spin.defaultProps = {
    prefixCls: 'ant-spin',
    spinning: true,
    size: 'default',
    wrapperClassName: ''
};
Spin.propTypes = {
    prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
    className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
    spinning: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
    size: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(['small', 'default', 'large']),
    wrapperClassName: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
    indicator: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node
};

/***/ }),

/***/ "../node_modules/antd/es/spin/style/css.js":
/*!*************************************************!*\
  !*** ../node_modules/antd/es/spin/style/css.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../node_modules/antd/es/spin/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "../node_modules/antd/es/spin/style/index.css":
/*!****************************************************!*\
  !*** ../node_modules/antd/es/spin/style/index.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/spin/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/spin/style/index.css", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
		var newContent = __webpack_require__(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/spin/style/index.css");

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

/***/ "../node_modules/antd/es/table/Column.js":
/*!***********************************************!*\
  !*** ../node_modules/antd/es/table/Column.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





var Column = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Column, _React$Component);

  function Column() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Column);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, (Column.__proto__ || Object.getPrototypeOf(Column)).apply(this, arguments));
  }

  return Column;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Column);

/***/ }),

/***/ "../node_modules/antd/es/table/ColumnGroup.js":
/*!****************************************************!*\
  !*** ../node_modules/antd/es/table/ColumnGroup.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





var ColumnGroup = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(ColumnGroup, _React$Component);

  function ColumnGroup() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ColumnGroup);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, (ColumnGroup.__proto__ || Object.getPrototypeOf(ColumnGroup)).apply(this, arguments));
  }

  return ColumnGroup;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ColumnGroup);

ColumnGroup.__ANT_TABLE_COLUMN_GROUP = true;

/***/ }),

/***/ "../node_modules/antd/es/table/FilterDropdownMenuWrapper.js":
/*!******************************************************************!*\
  !*** ../node_modules/antd/es/table/FilterDropdownMenuWrapper.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
        'div',
        { className: props.className, onClick: props.onClick },
        props.children
    );
});

/***/ }),

/***/ "../node_modules/antd/es/table/SelectionBox.js":
/*!*****************************************************!*\
  !*** ../node_modules/antd/es/table/SelectionBox.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../checkbox */ "../node_modules/antd/es/checkbox/index.js");
/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../radio */ "../node_modules/antd/es/radio/index.js");





var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};




var SelectionBox = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SelectionBox, _React$Component);

    function SelectionBox(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SelectionBox);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (SelectionBox.__proto__ || Object.getPrototypeOf(SelectionBox)).call(this, props));

        _this.state = {
            checked: _this.getCheckState(props)
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(SelectionBox, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.subscribe();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.unsubscribe) {
                this.unsubscribe();
            }
        }
    }, {
        key: 'subscribe',
        value: function subscribe() {
            var _this2 = this;

            var store = this.props.store;

            this.unsubscribe = store.subscribe(function () {
                var checked = _this2.getCheckState(_this2.props);
                _this2.setState({ checked: checked });
            });
        }
    }, {
        key: 'getCheckState',
        value: function getCheckState(props) {
            var store = props.store,
                defaultSelection = props.defaultSelection,
                rowIndex = props.rowIndex;

            var checked = false;
            if (store.getState().selectionDirty) {
                checked = store.getState().selectedRowKeys.indexOf(rowIndex) >= 0;
            } else {
                checked = store.getState().selectedRowKeys.indexOf(rowIndex) >= 0 || defaultSelection.indexOf(rowIndex) >= 0;
            }
            return checked;
        }
    }, {
        key: 'render',
        value: function render() {
            var _a = this.props,
                type = _a.type,
                rowIndex = _a.rowIndex,
                rest = __rest(_a, ["type", "rowIndex"]);var checked = this.state.checked;

            if (type === 'radio') {
                return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_radio__WEBPACK_IMPORTED_MODULE_7__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ checked: checked, value: rowIndex }, rest));
            } else {
                return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_checkbox__WEBPACK_IMPORTED_MODULE_6__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ checked: checked }, rest));
            }
        }
    }]);

    return SelectionBox;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SelectionBox);

/***/ }),

/***/ "../node_modules/antd/es/table/SelectionCheckboxAll.js":
/*!*************************************************************!*\
  !*** ../node_modules/antd/es/table/SelectionCheckboxAll.js ***!
  \*************************************************************/
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
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../checkbox */ "../node_modules/antd/es/checkbox/index.js");
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dropdown */ "../node_modules/antd/es/dropdown/index.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../menu */ "../node_modules/antd/es/menu/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../icon */ "../node_modules/antd/es/icon/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);












var SelectionCheckboxAll = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SelectionCheckboxAll, _React$Component);

    function SelectionCheckboxAll(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SelectionCheckboxAll);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (SelectionCheckboxAll.__proto__ || Object.getPrototypeOf(SelectionCheckboxAll)).call(this, props));

        _this.handleSelectAllChagne = function (e) {
            var checked = e.target.checked;
            _this.props.onSelect(checked ? 'all' : 'removeAll', 0, null);
        };
        _this.defaultSelections = props.hideDefaultSelections ? [] : [{
            key: 'all',
            text: props.locale.selectAll,
            onSelect: function onSelect() {}
        }, {
            key: 'invert',
            text: props.locale.selectInvert,
            onSelect: function onSelect() {}
        }];
        _this.state = {
            checked: _this.getCheckState(props),
            indeterminate: _this.getIndeterminateState(props)
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(SelectionCheckboxAll, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.subscribe();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setCheckState(nextProps);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.unsubscribe) {
                this.unsubscribe();
            }
        }
    }, {
        key: 'subscribe',
        value: function subscribe() {
            var _this2 = this;

            var store = this.props.store;

            this.unsubscribe = store.subscribe(function () {
                _this2.setCheckState(_this2.props);
            });
        }
    }, {
        key: 'checkSelection',
        value: function checkSelection(data, type, byDefaultChecked) {
            var _props = this.props,
                store = _props.store,
                getCheckboxPropsByItem = _props.getCheckboxPropsByItem,
                getRecordKey = _props.getRecordKey;
            // type should be 'every' | 'some'

            if (type === 'every' || type === 'some') {
                return byDefaultChecked ? data[type](function (item, i) {
                    return getCheckboxPropsByItem(item, i).defaultChecked;
                }) : data[type](function (item, i) {
                    return store.getState().selectedRowKeys.indexOf(getRecordKey(item, i)) >= 0;
                });
            }
            return false;
        }
    }, {
        key: 'setCheckState',
        value: function setCheckState(props) {
            var checked = this.getCheckState(props);
            var indeterminate = this.getIndeterminateState(props);
            if (checked !== this.state.checked) {
                this.setState({ checked: checked });
            }
            if (indeterminate !== this.state.indeterminate) {
                this.setState({ indeterminate: indeterminate });
            }
        }
    }, {
        key: 'getCheckState',
        value: function getCheckState(props) {
            var store = props.store,
                data = props.data;

            var checked = void 0;
            if (!data.length) {
                checked = false;
            } else {
                checked = store.getState().selectionDirty ? this.checkSelection(data, 'every', false) : this.checkSelection(data, 'every', false) || this.checkSelection(data, 'every', true);
            }
            return checked;
        }
    }, {
        key: 'getIndeterminateState',
        value: function getIndeterminateState(props) {
            var store = props.store,
                data = props.data;

            var indeterminate = void 0;
            if (!data.length) {
                indeterminate = false;
            } else {
                indeterminate = store.getState().selectionDirty ? this.checkSelection(data, 'some', false) && !this.checkSelection(data, 'every', false) : this.checkSelection(data, 'some', false) && !this.checkSelection(data, 'every', false) || this.checkSelection(data, 'some', true) && !this.checkSelection(data, 'every', true);
            }
            return indeterminate;
        }
    }, {
        key: 'renderMenus',
        value: function renderMenus(selections) {
            var _this3 = this;

            return selections.map(function (selection, index) {
                return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                    _menu__WEBPACK_IMPORTED_MODULE_8__["default"].Item,
                    { key: selection.key || index },
                    react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                        'div',
                        { onClick: function onClick() {
                                _this3.props.onSelect(selection.key, index, selection.onSelect);
                            } },
                        selection.text
                    )
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                disabled = _props2.disabled,
                prefixCls = _props2.prefixCls,
                selections = _props2.selections,
                getPopupContainer = _props2.getPopupContainer;
            var _state = this.state,
                checked = _state.checked,
                indeterminate = _state.indeterminate;

            var selectionPrefixCls = prefixCls + '-selection';
            var customSelections = null;
            if (selections) {
                var newSelections = Array.isArray(selections) ? this.defaultSelections.concat(selections) : this.defaultSelections;
                var menu = react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                    _menu__WEBPACK_IMPORTED_MODULE_8__["default"],
                    { className: selectionPrefixCls + '-menu', selectedKeys: [] },
                    this.renderMenus(newSelections)
                );
                customSelections = newSelections.length > 0 ? react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                    _dropdown__WEBPACK_IMPORTED_MODULE_7__["default"],
                    { overlay: menu, getPopupContainer: getPopupContainer },
                    react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                        'div',
                        { className: selectionPrefixCls + '-down' },
                        react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_9__["default"], { type: 'down' })
                    )
                ) : null;
            }
            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                'div',
                { className: selectionPrefixCls },
                react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_checkbox__WEBPACK_IMPORTED_MODULE_6__["default"], { className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, selectionPrefixCls + '-select-all-custom', customSelections)), checked: checked, indeterminate: indeterminate, disabled: disabled, onChange: this.handleSelectAllChagne }),
                customSelections
            );
        }
    }]);

    return SelectionCheckboxAll;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SelectionCheckboxAll);

/***/ }),

/***/ "../node_modules/antd/es/table/Table.js":
/*!**********************************************!*\
  !*** ../node_modules/antd/es/table/Table.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/typeof */ "../node_modules/babel-runtime/helpers/typeof.js");
/* harmony import */ var babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rc_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-table */ "../node_modules/rc-table/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pagination */ "../node_modules/antd/es/pagination/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../icon */ "../node_modules/antd/es/icon/index.js");
/* harmony import */ var _spin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../spin */ "../node_modules/antd/es/spin/index.js");
/* harmony import */ var _locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../locale-provider/LocaleReceiver */ "../node_modules/antd/es/locale-provider/LocaleReceiver.js");
/* harmony import */ var _locale_provider_default__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../locale-provider/default */ "../node_modules/antd/es/locale-provider/default.js");
/* harmony import */ var _util_warning__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../_util/warning */ "../node_modules/antd/es/_util/warning.js");
/* harmony import */ var _filterDropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./filterDropdown */ "../node_modules/antd/es/table/filterDropdown.js");
/* harmony import */ var _createStore__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./createStore */ "../node_modules/antd/es/table/createStore.js");
/* harmony import */ var _SelectionBox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./SelectionBox */ "../node_modules/antd/es/table/SelectionBox.js");
/* harmony import */ var _SelectionCheckboxAll__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./SelectionCheckboxAll */ "../node_modules/antd/es/table/SelectionCheckboxAll.js");
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Column */ "../node_modules/antd/es/table/Column.js");
/* harmony import */ var _ColumnGroup__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ColumnGroup */ "../node_modules/antd/es/table/ColumnGroup.js");
/* harmony import */ var _createBodyRow__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./createBodyRow */ "../node_modules/antd/es/table/createBodyRow.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./util */ "../node_modules/antd/es/table/util.js");







var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};



















function noop() {}
function stopPropagation(e) {
    e.stopPropagation();
    if (e.nativeEvent.stopImmediatePropagation) {
        e.nativeEvent.stopImmediatePropagation();
    }
}
var defaultPagination = {
    onChange: noop,
    onShowSizeChange: noop
};
/**
 * Avoid creating new object, so that parent component's shouldComponentUpdate
 * can works appropriately。
 */
var emptyObject = {};

var Table = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Table, _React$Component);

    function Table(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Table);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

        _this.getCheckboxPropsByItem = function (item, index) {
            var _this$props$rowSelect = _this.props.rowSelection,
                rowSelection = _this$props$rowSelect === undefined ? {} : _this$props$rowSelect;

            if (!rowSelection.getCheckboxProps) {
                return {};
            }
            var key = _this.getRecordKey(item, index);
            // Cache checkboxProps
            if (!_this.CheckboxPropsCache[key]) {
                _this.CheckboxPropsCache[key] = rowSelection.getCheckboxProps(item);
            }
            return _this.CheckboxPropsCache[key];
        };
        _this.onRow = function (record, index) {
            var _this$props = _this.props,
                onRow = _this$props.onRow,
                prefixCls = _this$props.prefixCls;

            var custom = onRow ? onRow(record, index) : {};
            return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, custom, { prefixCls: prefixCls, store: _this.store, rowKey: _this.getRecordKey(record, index) });
        };
        _this.handleFilter = function (column, nextFilters) {
            var props = _this.props;
            var pagination = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, _this.state.pagination);
            var filters = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, _this.state.filters, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, _this.getColumnKey(column), nextFilters));
            // Remove filters not in current columns
            var currentColumnKeys = [];
            Object(_util__WEBPACK_IMPORTED_MODULE_25__["treeMap"])(_this.columns, function (c) {
                if (!c.children) {
                    currentColumnKeys.push(_this.getColumnKey(c));
                }
            });
            Object.keys(filters).forEach(function (columnKey) {
                if (currentColumnKeys.indexOf(columnKey) < 0) {
                    delete filters[columnKey];
                }
            });
            if (props.pagination) {
                // Reset current prop
                pagination.current = 1;
                pagination.onChange(pagination.current);
            }
            var newState = {
                pagination: pagination,
                filters: {}
            };
            var filtersToSetState = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, filters);
            // Remove filters which is controlled
            _this.getFilteredValueColumns().forEach(function (col) {
                var columnKey = _this.getColumnKey(col);
                if (columnKey) {
                    delete filtersToSetState[columnKey];
                }
            });
            if (Object.keys(filtersToSetState).length > 0) {
                newState.filters = filtersToSetState;
            }
            // Controlled current prop will not respond user interaction
            if (babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(props.pagination) === 'object' && 'current' in props.pagination) {
                newState.pagination = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, pagination, { current: _this.state.pagination.current });
            }
            _this.setState(newState, function () {
                _this.store.setState({
                    selectionDirty: false
                });
                var onChange = _this.props.onChange;
                if (onChange) {
                    onChange.apply(null, _this.prepareParamsArguments(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, _this.state, { selectionDirty: false, filters: filters,
                        pagination: pagination })));
                }
            });
        };
        _this.handleSelect = function (record, rowIndex, e) {
            var checked = e.target.checked;
            var nativeEvent = e.nativeEvent;
            var defaultSelection = _this.store.getState().selectionDirty ? [] : _this.getDefaultSelection();
            var selectedRowKeys = _this.store.getState().selectedRowKeys.concat(defaultSelection);
            var key = _this.getRecordKey(record, rowIndex);
            if (checked) {
                selectedRowKeys.push(_this.getRecordKey(record, rowIndex));
            } else {
                selectedRowKeys = selectedRowKeys.filter(function (i) {
                    return key !== i;
                });
            }
            _this.store.setState({
                selectionDirty: true
            });
            _this.setSelectedRowKeys(selectedRowKeys, {
                selectWay: 'onSelect',
                record: record,
                checked: checked,
                changeRowKeys: void 0,
                nativeEvent: nativeEvent
            });
        };
        _this.handleRadioSelect = function (record, rowIndex, e) {
            var checked = e.target.checked;
            var nativeEvent = e.nativeEvent;
            var defaultSelection = _this.store.getState().selectionDirty ? [] : _this.getDefaultSelection();
            var selectedRowKeys = _this.store.getState().selectedRowKeys.concat(defaultSelection);
            var key = _this.getRecordKey(record, rowIndex);
            selectedRowKeys = [key];
            _this.store.setState({
                selectionDirty: true
            });
            _this.setSelectedRowKeys(selectedRowKeys, {
                selectWay: 'onSelect',
                record: record,
                checked: checked,
                changeRowKeys: void 0,
                nativeEvent: nativeEvent
            });
        };
        _this.handleSelectRow = function (selectionKey, index, onSelectFunc) {
            var data = _this.getFlatCurrentPageData();
            var defaultSelection = _this.store.getState().selectionDirty ? [] : _this.getDefaultSelection();
            var selectedRowKeys = _this.store.getState().selectedRowKeys.concat(defaultSelection);
            var changeableRowKeys = data.filter(function (item, i) {
                return !_this.getCheckboxPropsByItem(item, i).disabled;
            }).map(function (item, i) {
                return _this.getRecordKey(item, i);
            });
            var changeRowKeys = [];
            var selectWay = '';
            var checked = void 0;
            // handle default selection
            switch (selectionKey) {
                case 'all':
                    changeableRowKeys.forEach(function (key) {
                        if (selectedRowKeys.indexOf(key) < 0) {
                            selectedRowKeys.push(key);
                            changeRowKeys.push(key);
                        }
                    });
                    selectWay = 'onSelectAll';
                    checked = true;
                    break;
                case 'removeAll':
                    changeableRowKeys.forEach(function (key) {
                        if (selectedRowKeys.indexOf(key) >= 0) {
                            selectedRowKeys.splice(selectedRowKeys.indexOf(key), 1);
                            changeRowKeys.push(key);
                        }
                    });
                    selectWay = 'onSelectAll';
                    checked = false;
                    break;
                case 'invert':
                    changeableRowKeys.forEach(function (key) {
                        if (selectedRowKeys.indexOf(key) < 0) {
                            selectedRowKeys.push(key);
                        } else {
                            selectedRowKeys.splice(selectedRowKeys.indexOf(key), 1);
                        }
                        changeRowKeys.push(key);
                        selectWay = 'onSelectInvert';
                    });
                    break;
                default:
                    break;
            }
            _this.store.setState({
                selectionDirty: true
            });
            // when select custom selection, callback selections[n].onSelect
            var rowSelection = _this.props.rowSelection;

            var customSelectionStartIndex = 2;
            if (rowSelection && rowSelection.hideDefaultSelections) {
                customSelectionStartIndex = 0;
            }
            if (index >= customSelectionStartIndex && typeof onSelectFunc === 'function') {
                return onSelectFunc(changeableRowKeys);
            }
            _this.setSelectedRowKeys(selectedRowKeys, {
                selectWay: selectWay,
                checked: checked,
                changeRowKeys: changeRowKeys
            });
        };
        _this.handlePageChange = function (current) {
            for (var _len = arguments.length, otherArguments = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                otherArguments[_key - 1] = arguments[_key];
            }

            var props = _this.props;
            var pagination = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, _this.state.pagination);
            if (current) {
                pagination.current = current;
            } else {
                pagination.current = pagination.current || 1;
            }
            pagination.onChange.apply(pagination, [pagination.current].concat(otherArguments));
            var newState = {
                pagination: pagination
            };
            // Controlled current prop will not respond user interaction
            if (props.pagination && babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(props.pagination) === 'object' && 'current' in props.pagination) {
                newState.pagination = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, pagination, { current: _this.state.pagination.current });
            }
            _this.setState(newState);
            _this.store.setState({
                selectionDirty: false
            });
            var onChange = _this.props.onChange;
            if (onChange) {
                onChange.apply(null, _this.prepareParamsArguments(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, _this.state, { selectionDirty: false, pagination: pagination })));
            }
        };
        _this.renderSelectionBox = function (type) {
            return function (_, record, index) {
                var rowIndex = _this.getRecordKey(record, index); // 从 1 开始
                var props = _this.getCheckboxPropsByItem(record, index);
                var handleChange = function handleChange(e) {
                    type === 'radio' ? _this.handleRadioSelect(record, rowIndex, e) : _this.handleSelect(record, rowIndex, e);
                };
                return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                    'span',
                    { onClick: stopPropagation },
                    react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_SelectionBox__WEBPACK_IMPORTED_MODULE_20__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({ type: type, store: _this.store, rowIndex: rowIndex, onChange: handleChange, defaultSelection: _this.getDefaultSelection() }, props))
                );
            };
        };
        _this.getRecordKey = function (record, index) {
            var rowKey = _this.props.rowKey;
            var recordKey = typeof rowKey === 'function' ? rowKey(record, index) : record[rowKey];
            Object(_util_warning__WEBPACK_IMPORTED_MODULE_17__["default"])(recordKey !== undefined, 'Each record in dataSource of table should have a unique `key` prop, or set `rowKey` to an unique primary key,' + 'see https://u.ant.design/table-row-key');
            return recordKey === undefined ? index : recordKey;
        };
        _this.getPopupContainer = function () {
            return react_dom__WEBPACK_IMPORTED_MODULE_8__["findDOMNode"](_this);
        };
        _this.handleShowSizeChange = function (current, pageSize) {
            var pagination = _this.state.pagination;
            pagination.onShowSizeChange(current, pageSize);
            var nextPagination = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, pagination, { pageSize: pageSize,
                current: current });
            _this.setState({ pagination: nextPagination });
            var onChange = _this.props.onChange;
            if (onChange) {
                onChange.apply(null, _this.prepareParamsArguments(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, _this.state, { pagination: nextPagination })));
            }
        };
        _this.renderTable = function (contextLocale, loading) {
            var _classNames;

            var locale = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, contextLocale, _this.props.locale);
            var _a = _this.props,
                style = _a.style,
                className = _a.className,
                prefixCls = _a.prefixCls,
                showHeader = _a.showHeader,
                restProps = __rest(_a, ["style", "className", "prefixCls", "showHeader"]);
            var data = _this.getCurrentPageData();
            var expandIconAsCell = _this.props.expandedRowRender && _this.props.expandIconAsCell !== false;
            var classString = classnames__WEBPACK_IMPORTED_MODULE_11___default()((_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-' + _this.props.size, true), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-bordered', _this.props.bordered), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-empty', !data.length), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-without-column-header', !showHeader), _classNames));
            var columns = _this.renderRowSelection(locale);
            columns = _this.renderColumnsDropdown(columns, locale);
            columns = columns.map(function (column, i) {
                var newColumn = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, column);
                newColumn.key = _this.getColumnKey(newColumn, i);
                return newColumn;
            });
            var expandIconColumnIndex = columns[0] && columns[0].key === 'selection-column' ? 1 : 0;
            if ('expandIconColumnIndex' in restProps) {
                expandIconColumnIndex = restProps.expandIconColumnIndex;
            }
            return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](rc_table__WEBPACK_IMPORTED_MODULE_9__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({ key: 'table' }, restProps, { onRow: _this.onRow, components: _this.components, prefixCls: prefixCls, data: data, columns: columns, showHeader: showHeader, className: classString, expandIconColumnIndex: expandIconColumnIndex, expandIconAsCell: expandIconAsCell, emptyText: !loading.spinning && locale.emptyText }));
        };
        Object(_util_warning__WEBPACK_IMPORTED_MODULE_17__["default"])(!('columnsPageRange' in props || 'columnsPageSize' in props), '`columnsPageRange` and `columnsPageSize` are removed, please use ' + 'fixed columns instead, see: https://u.ant.design/fixed-columns.');
        _this.columns = props.columns || Object(_util__WEBPACK_IMPORTED_MODULE_25__["normalizeColumns"])(props.children);
        _this.createComponents(props.components);
        _this.state = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, _this.getDefaultSortOrder(_this.columns), {
            // 减少状态
            filters: _this.getFiltersFromColumns(), pagination: _this.getDefaultPagination(props) });
        _this.CheckboxPropsCache = {};
        _this.store = Object(_createStore__WEBPACK_IMPORTED_MODULE_19__["default"])({
            selectedRowKeys: (props.rowSelection || {}).selectedRowKeys || [],
            selectionDirty: false
        });
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Table, [{
        key: 'getDefaultSelection',
        value: function getDefaultSelection() {
            var _this2 = this;

            var _props$rowSelection = this.props.rowSelection,
                rowSelection = _props$rowSelection === undefined ? {} : _props$rowSelection;

            if (!rowSelection.getCheckboxProps) {
                return [];
            }
            return this.getFlatData().filter(function (item, rowIndex) {
                return _this2.getCheckboxPropsByItem(item, rowIndex).defaultChecked;
            }).map(function (record, rowIndex) {
                return _this2.getRecordKey(record, rowIndex);
            });
        }
    }, {
        key: 'getDefaultPagination',
        value: function getDefaultPagination(props) {
            var pagination = props.pagination || {};
            return this.hasPagination(props) ? babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, defaultPagination, pagination, { current: pagination.defaultCurrent || pagination.current || 1, pageSize: pagination.defaultPageSize || pagination.pageSize || 10 }) : {};
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.columns = nextProps.columns || Object(_util__WEBPACK_IMPORTED_MODULE_25__["normalizeColumns"])(nextProps.children);
            if ('pagination' in nextProps || 'pagination' in this.props) {
                this.setState(function (previousState) {
                    var newPagination = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, defaultPagination, previousState.pagination, nextProps.pagination);
                    newPagination.current = newPagination.current || 1;
                    newPagination.pageSize = newPagination.pageSize || 10;
                    return { pagination: nextProps.pagination !== false ? newPagination : emptyObject };
                });
            }
            if (nextProps.rowSelection && 'selectedRowKeys' in nextProps.rowSelection) {
                this.store.setState({
                    selectedRowKeys: nextProps.rowSelection.selectedRowKeys || []
                });
                var rowSelection = this.props.rowSelection;

                if (rowSelection && nextProps.rowSelection.getCheckboxProps !== rowSelection.getCheckboxProps) {
                    this.CheckboxPropsCache = {};
                }
            }
            if ('dataSource' in nextProps && nextProps.dataSource !== this.props.dataSource) {
                this.store.setState({
                    selectionDirty: false
                });
                this.CheckboxPropsCache = {};
            }
            if (this.getSortOrderColumns(this.columns).length > 0) {
                var sortState = this.getSortStateFromColumns(this.columns);
                if (sortState.sortColumn !== this.state.sortColumn || sortState.sortOrder !== this.state.sortOrder) {
                    this.setState(sortState);
                }
            }
            var filteredValueColumns = this.getFilteredValueColumns(this.columns);
            if (filteredValueColumns.length > 0) {
                var filtersFromColumns = this.getFiltersFromColumns(this.columns);
                var newFilters = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, this.state.filters);
                Object.keys(filtersFromColumns).forEach(function (key) {
                    newFilters[key] = filtersFromColumns[key];
                });
                if (this.isFiltersChanged(newFilters)) {
                    this.setState({ filters: newFilters });
                }
            }
            this.createComponents(nextProps.components, this.props.components);
        }
    }, {
        key: 'setSelectedRowKeys',
        value: function setSelectedRowKeys(selectedRowKeys, _ref) {
            var _this3 = this;

            var selectWay = _ref.selectWay,
                record = _ref.record,
                checked = _ref.checked,
                changeRowKeys = _ref.changeRowKeys,
                nativeEvent = _ref.nativeEvent;
            var _props$rowSelection2 = this.props.rowSelection,
                rowSelection = _props$rowSelection2 === undefined ? {} : _props$rowSelection2;

            if (rowSelection && !('selectedRowKeys' in rowSelection)) {
                this.store.setState({ selectedRowKeys: selectedRowKeys });
            }
            var data = this.getFlatData();
            if (!rowSelection.onChange && !rowSelection[selectWay]) {
                return;
            }
            var selectedRows = data.filter(function (row, i) {
                return selectedRowKeys.indexOf(_this3.getRecordKey(row, i)) >= 0;
            });
            if (rowSelection.onChange) {
                rowSelection.onChange(selectedRowKeys, selectedRows);
            }
            if (selectWay === 'onSelect' && rowSelection.onSelect) {
                rowSelection.onSelect(record, checked, selectedRows, nativeEvent);
            } else if (selectWay === 'onSelectAll' && rowSelection.onSelectAll) {
                var changeRows = data.filter(function (row, i) {
                    return changeRowKeys.indexOf(_this3.getRecordKey(row, i)) >= 0;
                });
                rowSelection.onSelectAll(checked, selectedRows, changeRows);
            } else if (selectWay === 'onSelectInvert' && rowSelection.onSelectInvert) {
                rowSelection.onSelectInvert(selectedRowKeys);
            }
        }
    }, {
        key: 'hasPagination',
        value: function hasPagination(props) {
            return (props || this.props).pagination !== false;
        }
    }, {
        key: 'isFiltersChanged',
        value: function isFiltersChanged(filters) {
            var _this4 = this;

            var filtersChanged = false;
            if (Object.keys(filters).length !== Object.keys(this.state.filters).length) {
                filtersChanged = true;
            } else {
                Object.keys(filters).forEach(function (columnKey) {
                    if (filters[columnKey] !== _this4.state.filters[columnKey]) {
                        filtersChanged = true;
                    }
                });
            }
            return filtersChanged;
        }
    }, {
        key: 'getSortOrderColumns',
        value: function getSortOrderColumns(columns) {
            return Object(_util__WEBPACK_IMPORTED_MODULE_25__["flatFilter"])(columns || this.columns || [], function (column) {
                return 'sortOrder' in column;
            });
        }
    }, {
        key: 'getFilteredValueColumns',
        value: function getFilteredValueColumns(columns) {
            return Object(_util__WEBPACK_IMPORTED_MODULE_25__["flatFilter"])(columns || this.columns || [], function (column) {
                return typeof column.filteredValue !== 'undefined';
            });
        }
    }, {
        key: 'getFiltersFromColumns',
        value: function getFiltersFromColumns(columns) {
            var _this5 = this;

            var filters = {};
            this.getFilteredValueColumns(columns).forEach(function (col) {
                var colKey = _this5.getColumnKey(col);
                filters[colKey] = col.filteredValue;
            });
            return filters;
        }
    }, {
        key: 'getDefaultSortOrder',
        value: function getDefaultSortOrder(columns) {
            var definedSortState = this.getSortStateFromColumns(columns);
            var defaultSortedColumn = Object(_util__WEBPACK_IMPORTED_MODULE_25__["flatFilter"])(columns || [], function (column) {
                return column.defaultSortOrder != null;
            })[0];
            if (defaultSortedColumn && !definedSortState.sortColumn) {
                return {
                    sortColumn: defaultSortedColumn,
                    sortOrder: defaultSortedColumn.defaultSortOrder
                };
            }
            return definedSortState;
        }
    }, {
        key: 'getSortStateFromColumns',
        value: function getSortStateFromColumns(columns) {
            // return first column which sortOrder is not falsy
            var sortedColumn = this.getSortOrderColumns(columns).filter(function (col) {
                return col.sortOrder;
            })[0];
            if (sortedColumn) {
                return {
                    sortColumn: sortedColumn,
                    sortOrder: sortedColumn.sortOrder
                };
            }
            return {
                sortColumn: null,
                sortOrder: null
            };
        }
    }, {
        key: 'getSorterFn',
        value: function getSorterFn() {
            var _state = this.state,
                sortOrder = _state.sortOrder,
                sortColumn = _state.sortColumn;

            if (!sortOrder || !sortColumn || typeof sortColumn.sorter !== 'function') {
                return;
            }
            return function (a, b) {
                var result = sortColumn.sorter(a, b);
                if (result !== 0) {
                    return sortOrder === 'descend' ? -result : result;
                }
                return 0;
            };
        }
    }, {
        key: 'toggleSortOrder',
        value: function toggleSortOrder(order, column) {
            var _state2 = this.state,
                sortColumn = _state2.sortColumn,
                sortOrder = _state2.sortOrder;
            // 只同时允许一列进行排序，否则会导致排序顺序的逻辑问题

            var isSortColumn = this.isSortColumn(column);
            if (!isSortColumn) {
                // 当前列未排序
                sortOrder = order;
                sortColumn = column;
            } else {
                // 当前列已排序
                if (sortOrder === order) {
                    // 切换为未排序状态
                    sortOrder = '';
                    sortColumn = null;
                } else {
                    // 切换为排序状态
                    sortOrder = order;
                }
            }
            var newState = {
                sortOrder: sortOrder,
                sortColumn: sortColumn
            };
            // Controlled
            if (this.getSortOrderColumns().length === 0) {
                this.setState(newState);
            }
            var onChange = this.props.onChange;
            if (onChange) {
                onChange.apply(null, this.prepareParamsArguments(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, this.state, newState)));
            }
        }
    }, {
        key: 'renderRowSelection',
        value: function renderRowSelection(locale) {
            var _this6 = this;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                rowSelection = _props.rowSelection;

            var columns = this.columns.concat();
            if (rowSelection) {
                var data = this.getFlatCurrentPageData().filter(function (item, index) {
                    if (rowSelection.getCheckboxProps) {
                        return !_this6.getCheckboxPropsByItem(item, index).disabled;
                    }
                    return true;
                });
                var selectionColumnClass = classnames__WEBPACK_IMPORTED_MODULE_11___default()(prefixCls + '-selection-column', babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, prefixCls + '-selection-column-custom', rowSelection.selections));
                var selectionColumn = {
                    key: 'selection-column',
                    render: this.renderSelectionBox(rowSelection.type),
                    className: selectionColumnClass,
                    fixed: rowSelection.fixed,
                    width: rowSelection.columnWidth
                };
                if (rowSelection.type !== 'radio') {
                    var checkboxAllDisabled = data.every(function (item, index) {
                        return _this6.getCheckboxPropsByItem(item, index).disabled;
                    });
                    selectionColumn.title = react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_SelectionCheckboxAll__WEBPACK_IMPORTED_MODULE_21__["default"], { store: this.store, locale: locale, data: data, getCheckboxPropsByItem: this.getCheckboxPropsByItem, getRecordKey: this.getRecordKey, disabled: checkboxAllDisabled, prefixCls: prefixCls, onSelect: this.handleSelectRow, selections: rowSelection.selections, hideDefaultSelections: rowSelection.hideDefaultSelections, getPopupContainer: this.getPopupContainer });
                }
                if ('fixed' in rowSelection) {
                    selectionColumn.fixed = rowSelection.fixed;
                } else if (columns.some(function (column) {
                    return column.fixed === 'left' || column.fixed === true;
                })) {
                    selectionColumn.fixed = 'left';
                }
                if (columns[0] && columns[0].key === 'selection-column') {
                    columns[0] = selectionColumn;
                } else {
                    columns.unshift(selectionColumn);
                }
            }
            return columns;
        }
    }, {
        key: 'getColumnKey',
        value: function getColumnKey(column, index) {
            return column.key || column.dataIndex || index;
        }
    }, {
        key: 'getMaxCurrent',
        value: function getMaxCurrent(total) {
            var _state$pagination = this.state.pagination,
                current = _state$pagination.current,
                pageSize = _state$pagination.pageSize;

            if ((current - 1) * pageSize >= total) {
                return Math.floor((total - 1) / pageSize) + 1;
            }
            return current;
        }
    }, {
        key: 'isSortColumn',
        value: function isSortColumn(column) {
            var sortColumn = this.state.sortColumn;

            if (!column || !sortColumn) {
                return false;
            }
            return this.getColumnKey(sortColumn) === this.getColumnKey(column);
        }
    }, {
        key: 'renderColumnsDropdown',
        value: function renderColumnsDropdown(columns, locale) {
            var _this7 = this;

            var _props2 = this.props,
                prefixCls = _props2.prefixCls,
                dropdownPrefixCls = _props2.dropdownPrefixCls;
            var sortOrder = this.state.sortOrder;

            return Object(_util__WEBPACK_IMPORTED_MODULE_25__["treeMap"])(columns, function (originColumn, i) {
                var column = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, originColumn);
                var key = _this7.getColumnKey(column, i);
                var filterDropdown = void 0;
                var sortButton = void 0;
                if (column.filters && column.filters.length > 0 || column.filterDropdown) {
                    var colFilters = _this7.state.filters[key] || [];
                    filterDropdown = react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_filterDropdown__WEBPACK_IMPORTED_MODULE_18__["default"], { locale: locale, column: column, selectedKeys: colFilters, confirmFilter: _this7.handleFilter, prefixCls: prefixCls + '-filter', dropdownPrefixCls: dropdownPrefixCls || 'ant-dropdown', getPopupContainer: _this7.getPopupContainer });
                }
                if (column.sorter) {
                    var isSortColumn = _this7.isSortColumn(column);
                    if (isSortColumn) {
                        column.className = classnames__WEBPACK_IMPORTED_MODULE_11___default()(column.className, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, prefixCls + '-column-sort', sortOrder));
                    }
                    var isAscend = isSortColumn && sortOrder === 'ascend';
                    var isDescend = isSortColumn && sortOrder === 'descend';
                    sortButton = react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                        'div',
                        { className: prefixCls + '-column-sorter' },
                        react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                            'span',
                            { className: prefixCls + '-column-sorter-up ' + (isAscend ? 'on' : 'off'), title: '\u2191', onClick: function onClick() {
                                    return _this7.toggleSortOrder('ascend', column);
                                } },
                            react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_13__["default"], { type: 'caret-up' })
                        ),
                        react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                            'span',
                            { className: prefixCls + '-column-sorter-down ' + (isDescend ? 'on' : 'off'), title: '\u2193', onClick: function onClick() {
                                    return _this7.toggleSortOrder('descend', column);
                                } },
                            react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_13__["default"], { type: 'caret-down' })
                        )
                    );
                }
                column.title = react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                    'span',
                    { key: key },
                    column.title,
                    sortButton,
                    filterDropdown
                );
                if (sortButton || filterDropdown) {
                    column.className = classnames__WEBPACK_IMPORTED_MODULE_11___default()(prefixCls + '-column-has-filters', column.className);
                }
                return column;
            });
        }
    }, {
        key: 'renderPagination',
        value: function renderPagination(paginationPosition) {
            // 强制不需要分页
            if (!this.hasPagination()) {
                return null;
            }
            var size = 'default';
            var pagination = this.state.pagination;

            if (pagination.size) {
                size = pagination.size;
            } else if (this.props.size === 'middle' || this.props.size === 'small') {
                size = 'small';
            }
            var position = pagination.position || 'bottom';
            var total = pagination.total || this.getLocalData().length;
            return total > 0 && (position === paginationPosition || position === 'both') ? react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_pagination__WEBPACK_IMPORTED_MODULE_12__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({ key: 'pagination-' + paginationPosition }, pagination, { className: classnames__WEBPACK_IMPORTED_MODULE_11___default()(pagination.className, this.props.prefixCls + '-pagination'), onChange: this.handlePageChange, total: total, size: size, current: this.getMaxCurrent(total), onShowSizeChange: this.handleShowSizeChange })) : null;
        }
        // Get pagination, filters, sorter

    }, {
        key: 'prepareParamsArguments',
        value: function prepareParamsArguments(state) {
            var pagination = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, state.pagination);
            // remove useless handle function in Table.onChange
            delete pagination.onChange;
            delete pagination.onShowSizeChange;
            var filters = state.filters;
            var sorter = {};
            if (state.sortColumn && state.sortOrder) {
                sorter.column = state.sortColumn;
                sorter.order = state.sortOrder;
                sorter.field = state.sortColumn.dataIndex;
                sorter.columnKey = this.getColumnKey(state.sortColumn);
            }
            return [pagination, filters, sorter];
        }
    }, {
        key: 'findColumn',
        value: function findColumn(myKey) {
            var _this8 = this;

            var column = void 0;
            Object(_util__WEBPACK_IMPORTED_MODULE_25__["treeMap"])(this.columns, function (c) {
                if (_this8.getColumnKey(c) === myKey) {
                    column = c;
                }
            });
            return column;
        }
    }, {
        key: 'getCurrentPageData',
        value: function getCurrentPageData() {
            var data = this.getLocalData();
            var current = void 0;
            var pageSize = void 0;
            var state = this.state;
            // 如果没有分页的话，默认全部展示
            if (!this.hasPagination()) {
                pageSize = Number.MAX_VALUE;
                current = 1;
            } else {
                pageSize = state.pagination.pageSize;
                current = this.getMaxCurrent(state.pagination.total || data.length);
            }
            // 分页
            // ---
            // 当数据量少于等于每页数量时，直接设置数据
            // 否则进行读取分页数据
            if (data.length > pageSize || pageSize === Number.MAX_VALUE) {
                data = data.filter(function (_, i) {
                    return i >= (current - 1) * pageSize && i < current * pageSize;
                });
            }
            return data;
        }
    }, {
        key: 'getFlatData',
        value: function getFlatData() {
            return Object(_util__WEBPACK_IMPORTED_MODULE_25__["flatArray"])(this.getLocalData());
        }
    }, {
        key: 'getFlatCurrentPageData',
        value: function getFlatCurrentPageData() {
            return Object(_util__WEBPACK_IMPORTED_MODULE_25__["flatArray"])(this.getCurrentPageData());
        }
    }, {
        key: 'recursiveSort',
        value: function recursiveSort(data, sorterFn) {
            var _this9 = this;

            var _props$childrenColumn = this.props.childrenColumnName,
                childrenColumnName = _props$childrenColumn === undefined ? 'children' : _props$childrenColumn;

            return data.sort(sorterFn).map(function (item) {
                return item[childrenColumnName] ? babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, item, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, childrenColumnName, _this9.recursiveSort(item[childrenColumnName], sorterFn))) : item;
            });
        }
    }, {
        key: 'getLocalData',
        value: function getLocalData() {
            var _this10 = this;

            var state = this.state;
            var dataSource = this.props.dataSource;

            var data = dataSource || [];
            // 优化本地排序
            data = data.slice(0);
            var sorterFn = this.getSorterFn();
            if (sorterFn) {
                data = this.recursiveSort(data, sorterFn);
            }
            // 筛选
            if (state.filters) {
                Object.keys(state.filters).forEach(function (columnKey) {
                    var col = _this10.findColumn(columnKey);
                    if (!col) {
                        return;
                    }
                    var values = state.filters[columnKey] || [];
                    if (values.length === 0) {
                        return;
                    }
                    var onFilter = col.onFilter;
                    data = onFilter ? data.filter(function (record) {
                        return values.some(function (v) {
                            return onFilter(v, record);
                        });
                    }) : data;
                });
            }
            return data;
        }
    }, {
        key: 'createComponents',
        value: function createComponents() {
            var components = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var prevComponents = arguments[1];

            var bodyRow = components && components.body && components.body.row;
            var preBodyRow = prevComponents && prevComponents.body && prevComponents.body.row;
            if (!this.components || bodyRow !== preBodyRow) {
                this.components = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, components);
                this.components.body = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, components.body, { row: Object(_createBodyRow__WEBPACK_IMPORTED_MODULE_24__["default"])(bodyRow) });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this11 = this;

            var _props3 = this.props,
                style = _props3.style,
                className = _props3.className,
                prefixCls = _props3.prefixCls;

            var data = this.getCurrentPageData();
            var loading = this.props.loading;
            if (typeof loading === 'boolean') {
                loading = {
                    spinning: loading
                };
            }
            var table = react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                _locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_15__["default"],
                { componentName: 'Table', defaultLocale: _locale_provider_default__WEBPACK_IMPORTED_MODULE_16__["default"].Table },
                function (locale) {
                    return _this11.renderTable(locale, loading);
                }
            );
            // if there is no pagination or no data,
            // the height of spin should decrease by half of pagination
            var paginationPatchClass = this.hasPagination() && data && data.length !== 0 ? prefixCls + '-with-pagination' : prefixCls + '-without-pagination';
            return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                'div',
                { className: classnames__WEBPACK_IMPORTED_MODULE_11___default()(prefixCls + '-wrapper', className), style: style },
                react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                    _spin__WEBPACK_IMPORTED_MODULE_14__["default"],
                    babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({}, loading, { className: loading.spinning ? paginationPatchClass + ' ' + prefixCls + '-spin-holder' : '' }),
                    this.renderPagination('top'),
                    table,
                    this.renderPagination('bottom')
                )
            );
        }
    }]);

    return Table;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Table);

Table.Column = _Column__WEBPACK_IMPORTED_MODULE_22__["default"];
Table.ColumnGroup = _ColumnGroup__WEBPACK_IMPORTED_MODULE_23__["default"];
Table.propTypes = {
    dataSource: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array,
    columns: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array,
    prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
    useFixedHeader: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
    rowSelection: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object,
    className: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
    size: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
    loading: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object]),
    bordered: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
    onChange: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
    locale: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object,
    dropdownPrefixCls: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string
};
Table.defaultProps = {
    dataSource: [],
    prefixCls: 'ant-table',
    useFixedHeader: false,
    rowSelection: null,
    className: '',
    size: 'large',
    loading: false,
    bordered: false,
    indentSize: 20,
    locale: {},
    rowKey: 'key',
    showHeader: true
};

/***/ }),

/***/ "../node_modules/antd/es/table/createBodyRow.js":
/*!******************************************************!*\
  !*** ../node_modules/antd/es/table/createBodyRow.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createTableRow; });
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var omit_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! omit.js */ "../node_modules/omit.js/es/index.js");









function createTableRow() {
    var Component = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'tr';

    var BodyRow = function (_React$Component) {
        babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(BodyRow, _React$Component);

        function BodyRow(props) {
            babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, BodyRow);

            var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (BodyRow.__proto__ || Object.getPrototypeOf(BodyRow)).call(this, props));

            _this.store = props.store;

            var _this$store$getState = _this.store.getState(),
                selectedRowKeys = _this$store$getState.selectedRowKeys;

            _this.state = {
                selected: selectedRowKeys.indexOf(props.rowKey) >= 0
            };
            return _this;
        }

        babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(BodyRow, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                this.subscribe();
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                if (this.unsubscribe) {
                    this.unsubscribe();
                }
            }
        }, {
            key: 'subscribe',
            value: function subscribe() {
                var _this2 = this;

                var _props = this.props,
                    store = _props.store,
                    rowKey = _props.rowKey;

                this.unsubscribe = store.subscribe(function () {
                    var _store$getState = _this2.store.getState(),
                        selectedRowKeys = _store$getState.selectedRowKeys;

                    var selected = selectedRowKeys.indexOf(rowKey) >= 0;
                    if (selected !== _this2.state.selected) {
                        _this2.setState({ selected: selected });
                    }
                });
            }
        }, {
            key: 'render',
            value: function render() {
                var rowProps = Object(omit_js__WEBPACK_IMPORTED_MODULE_8__["default"])(this.props, ['prefixCls', 'rowKey', 'store']);
                var className = classnames__WEBPACK_IMPORTED_MODULE_7___default()(this.props.className, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, this.props.prefixCls + '-row-selected', this.state.selected));
                return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    Component,
                    babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, rowProps, { className: className }),
                    this.props.children
                );
            }
        }]);

        return BodyRow;
    }(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

    return BodyRow;
}

/***/ }),

/***/ "../node_modules/antd/es/table/createStore.js":
/*!****************************************************!*\
  !*** ../node_modules/antd/es/table/createStore.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createStore; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);

function createStore(initialState) {
    var state = initialState;
    var listeners = [];
    function setState(partial) {
        state = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, state, partial);
        for (var i = 0; i < listeners.length; i++) {
            listeners[i]();
        }
    }
    function getState() {
        return state;
    }
    function subscribe(listener) {
        listeners.push(listener);
        return function unsubscribe() {
            var index = listeners.indexOf(listener);
            listeners.splice(index, 1);
        };
    }
    return {
        setState: setState,
        getState: getState,
        subscribe: subscribe
    };
}

/***/ }),

/***/ "../node_modules/antd/es/table/filterDropdown.js":
/*!*******************************************************!*\
  !*** ../node_modules/antd/es/table/filterDropdown.js ***!
  \*******************************************************/
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
/* harmony import */ var rc_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-menu */ "../node_modules/rc-menu/es/index.js");
/* harmony import */ var dom_closest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dom-closest */ "../node_modules/dom-closest/index.js");
/* harmony import */ var dom_closest__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dom_closest__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../dropdown */ "../node_modules/antd/es/dropdown/index.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../icon */ "../node_modules/antd/es/icon/index.js");
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../checkbox */ "../node_modules/antd/es/checkbox/index.js");
/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../radio */ "../node_modules/antd/es/radio/index.js");
/* harmony import */ var _FilterDropdownMenuWrapper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./FilterDropdownMenuWrapper */ "../node_modules/antd/es/table/FilterDropdownMenuWrapper.js");
















var FilterMenu = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(FilterMenu, _React$Component);

    function FilterMenu(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, FilterMenu);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (FilterMenu.__proto__ || Object.getPrototypeOf(FilterMenu)).call(this, props));

        _this.setNeverShown = function (column) {
            var rootNode = react_dom__WEBPACK_IMPORTED_MODULE_6__["findDOMNode"](_this);
            var filterBelongToScrollBody = !!dom_closest__WEBPACK_IMPORTED_MODULE_8___default()(rootNode, '.ant-table-scroll');
            if (filterBelongToScrollBody) {
                // When fixed column have filters, there will be two dropdown menus
                // Filter dropdown menu inside scroll body should never be shown
                // To fix https://github.com/ant-design/ant-design/issues/5010 and
                // https://github.com/ant-design/ant-design/issues/7909
                _this.neverShown = !!column.fixed;
            }
        };
        _this.setSelectedKeys = function (_ref) {
            var selectedKeys = _ref.selectedKeys;

            _this.setState({ selectedKeys: selectedKeys });
        };
        _this.handleClearFilters = function () {
            _this.setState({
                selectedKeys: []
            }, _this.handleConfirm);
        };
        _this.handleConfirm = function () {
            _this.setVisible(false);
            _this.confirmFilter();
        };
        _this.onVisibleChange = function (visible) {
            _this.setVisible(visible);
            if (!visible) {
                _this.confirmFilter();
            }
        };
        _this.handleMenuItemClick = function (info) {
            if (info.keyPath.length <= 1) {
                return;
            }
            var keyPathOfSelectedItem = _this.state.keyPathOfSelectedItem;
            if (_this.state.selectedKeys.indexOf(info.key) >= 0) {
                // deselect SubMenu child
                delete keyPathOfSelectedItem[info.key];
            } else {
                // select SubMenu child
                keyPathOfSelectedItem[info.key] = info.keyPath;
            }
            _this.setState({ keyPathOfSelectedItem: keyPathOfSelectedItem });
        };
        _this.renderFilterIcon = function () {
            var _this$props = _this.props,
                column = _this$props.column,
                locale = _this$props.locale,
                prefixCls = _this$props.prefixCls;

            var filterIcon = column.filterIcon;
            var dropdownSelectedClass = _this.props.selectedKeys.length > 0 ? prefixCls + '-selected' : '';
            return filterIcon ? react__WEBPACK_IMPORTED_MODULE_5__["cloneElement"](filterIcon, {
                title: locale.filterTitle,
                className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(filterIcon.className, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, prefixCls + '-icon', true))
            }) : react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_11__["default"], { title: locale.filterTitle, type: 'filter', className: dropdownSelectedClass });
        };
        var visible = 'filterDropdownVisible' in props.column ? props.column.filterDropdownVisible : false;
        _this.state = {
            selectedKeys: props.selectedKeys,
            keyPathOfSelectedItem: {},
            visible: visible
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(FilterMenu, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var column = this.props.column;

            this.setNeverShown(column);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var column = nextProps.column;

            this.setNeverShown(column);
            var newState = {};
            if ('selectedKeys' in nextProps) {
                newState.selectedKeys = nextProps.selectedKeys;
            }
            if ('filterDropdownVisible' in column) {
                newState.visible = column.filterDropdownVisible;
            }
            if (Object.keys(newState).length > 0) {
                this.setState(newState);
            }
        }
    }, {
        key: 'setVisible',
        value: function setVisible(visible) {
            var column = this.props.column;

            if (!('filterDropdownVisible' in column)) {
                this.setState({ visible: visible });
            }
            if (column.onFilterDropdownVisibleChange) {
                column.onFilterDropdownVisibleChange(visible);
            }
        }
    }, {
        key: 'confirmFilter',
        value: function confirmFilter() {
            if (this.state.selectedKeys !== this.props.selectedKeys) {
                this.props.confirmFilter(this.props.column, this.state.selectedKeys);
            }
        }
    }, {
        key: 'renderMenuItem',
        value: function renderMenuItem(item) {
            var column = this.props.column;

            var multiple = 'filterMultiple' in column ? column.filterMultiple : true;
            var input = multiple ? react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_checkbox__WEBPACK_IMPORTED_MODULE_12__["default"], { checked: this.state.selectedKeys.indexOf(item.value.toString()) >= 0 }) : react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_radio__WEBPACK_IMPORTED_MODULE_13__["default"], { checked: this.state.selectedKeys.indexOf(item.value.toString()) >= 0 });
            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                rc_menu__WEBPACK_IMPORTED_MODULE_7__["Item"],
                { key: item.value },
                input,
                react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                    'span',
                    null,
                    item.text
                )
            );
        }
    }, {
        key: 'hasSubMenu',
        value: function hasSubMenu() {
            var _props$column$filters = this.props.column.filters,
                filters = _props$column$filters === undefined ? [] : _props$column$filters;

            return filters.some(function (item) {
                return !!(item.children && item.children.length > 0);
            });
        }
    }, {
        key: 'renderMenus',
        value: function renderMenus(items) {
            var _this2 = this;

            return items.map(function (item) {
                if (item.children && item.children.length > 0) {
                    var keyPathOfSelectedItem = _this2.state.keyPathOfSelectedItem;

                    var containSelected = Object.keys(keyPathOfSelectedItem).some(function (key) {
                        return keyPathOfSelectedItem[key].indexOf(item.value) >= 0;
                    });
                    var subMenuCls = containSelected ? _this2.props.dropdownPrefixCls + '-submenu-contain-selected' : '';
                    return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                        rc_menu__WEBPACK_IMPORTED_MODULE_7__["SubMenu"],
                        { title: item.text, className: subMenuCls, key: item.value.toString() },
                        _this2.renderMenus(item.children)
                    );
                }
                return _this2.renderMenuItem(item);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                column = _props.column,
                locale = _props.locale,
                prefixCls = _props.prefixCls,
                dropdownPrefixCls = _props.dropdownPrefixCls,
                getPopupContainer = _props.getPopupContainer;
            // default multiple selection in filter dropdown

            var multiple = 'filterMultiple' in column ? column.filterMultiple : true;
            var dropdownMenuClass = classnames__WEBPACK_IMPORTED_MODULE_9___default()(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, dropdownPrefixCls + '-menu-without-submenu', !this.hasSubMenu()));
            var menus = column.filterDropdown ? react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                _FilterDropdownMenuWrapper__WEBPACK_IMPORTED_MODULE_14__["default"],
                null,
                column.filterDropdown
            ) : react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                _FilterDropdownMenuWrapper__WEBPACK_IMPORTED_MODULE_14__["default"],
                { className: prefixCls + '-dropdown' },
                react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                    rc_menu__WEBPACK_IMPORTED_MODULE_7__["default"],
                    { multiple: multiple, onClick: this.handleMenuItemClick, prefixCls: dropdownPrefixCls + '-menu', className: dropdownMenuClass, onSelect: this.setSelectedKeys, onDeselect: this.setSelectedKeys, selectedKeys: this.state.selectedKeys, getPopupContainer: function getPopupContainer(triggerNode) {
                            return triggerNode.parentNode;
                        } },
                    this.renderMenus(column.filters)
                ),
                react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                    'div',
                    { className: prefixCls + '-dropdown-btns' },
                    react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                        'a',
                        { className: prefixCls + '-dropdown-link confirm', onClick: this.handleConfirm },
                        locale.filterConfirm
                    ),
                    react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                        'a',
                        { className: prefixCls + '-dropdown-link clear', onClick: this.handleClearFilters },
                        locale.filterReset
                    )
                )
            );
            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                _dropdown__WEBPACK_IMPORTED_MODULE_10__["default"],
                { trigger: ['click'], overlay: menus, visible: this.neverShown ? false : this.state.visible, onVisibleChange: this.onVisibleChange, getPopupContainer: getPopupContainer, forceRender: true },
                this.renderFilterIcon()
            );
        }
    }]);

    return FilterMenu;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (FilterMenu);

FilterMenu.defaultProps = {
    handleFilter: function handleFilter() {},

    column: {}
};

/***/ }),

/***/ "../node_modules/antd/es/table/index.js":
/*!**********************************************!*\
  !*** ../node_modules/antd/es/table/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Table */ "../node_modules/antd/es/table/Table.js");

/* harmony default export */ __webpack_exports__["default"] = (_Table__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../node_modules/antd/es/table/style/css.js":
/*!**************************************************!*\
  !*** ../node_modules/antd/es/table/style/css.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../node_modules/antd/es/table/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radio_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../radio/style/css */ "../node_modules/antd/es/radio/style/css.js");
/* harmony import */ var _checkbox_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../checkbox/style/css */ "../node_modules/antd/es/checkbox/style/css.js");
/* harmony import */ var _dropdown_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dropdown/style/css */ "../node_modules/antd/es/dropdown/style/css.js");
/* harmony import */ var _spin_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../spin/style/css */ "../node_modules/antd/es/spin/style/css.js");
/* harmony import */ var _pagination_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pagination/style/css */ "../node_modules/antd/es/pagination/style/css.js");


// style dependencies






/***/ }),

/***/ "../node_modules/antd/es/table/style/index.css":
/*!*****************************************************!*\
  !*** ../node_modules/antd/es/table/style/index.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/table/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/table/style/index.css", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
		var newContent = __webpack_require__(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/table/style/index.css");

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

/***/ "../node_modules/antd/es/table/util.js":
/*!*********************************************!*\
  !*** ../node_modules/antd/es/table/util.js ***!
  \*********************************************/
/*! exports provided: flatArray, treeMap, flatFilter, normalizeColumns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatArray", function() { return flatArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "treeMap", function() { return treeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatFilter", function() { return flatFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeColumns", function() { return normalizeColumns; });
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "../node_modules/babel-runtime/helpers/toConsumableArray.js");
/* harmony import */ var babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function flatArray() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var childrenName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'children';

    var result = [];
    var loop = function loop(array) {
        array.forEach(function (item) {
            if (item[childrenName]) {
                var newItem = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, item);
                delete newItem[childrenName];
                result.push(newItem);
                if (item[childrenName].length > 0) {
                    loop(item[childrenName]);
                }
            } else {
                result.push(item);
            }
        });
    };
    loop(data);
    return result;
}
function treeMap(tree, mapper) {
    var childrenName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'children';

    return tree.map(function (node, index) {
        var extra = {};
        if (node[childrenName]) {
            extra[childrenName] = treeMap(node[childrenName], mapper, childrenName);
        }
        return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, mapper(node, index), extra);
    });
}
function flatFilter(tree, callback) {
    return tree.reduce(function (acc, node) {
        if (callback(node)) {
            acc.push(node);
        }
        if (node.children) {
            var children = flatFilter(node.children, callback);
            acc.push.apply(acc, babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(children));
        }
        return acc;
    }, []);
}
function normalizeColumns(elements) {
    var columns = [];
    react__WEBPACK_IMPORTED_MODULE_2__["Children"].forEach(elements, function (element) {
        if (!react__WEBPACK_IMPORTED_MODULE_2__["isValidElement"](element)) {
            return;
        }
        var column = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, element.props);
        if (element.key) {
            column.key = element.key;
        }
        if (element.type && element.type.__ANT_TABLE_COLUMN_GROUP) {
            column.children = normalizeColumns(column.children);
        }
        columns.push(column);
    });
    return columns;
}

/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/antd/es/dropdown/style/index.css":
/*!***********************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/antd/es/dropdown/style/index.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n.ant-dropdown {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: absolute;\n  left: -9999px;\n  top: -9999px;\n  z-index: 1050;\n  display: block;\n}\n.ant-dropdown-wrap {\n  position: relative;\n}\n.ant-dropdown-wrap .ant-btn > .anticon-down {\n  display: inline-block;\n  font-size: 12px;\n  font-size: 10px \\9;\n  -webkit-transform: scale(0.83333333) rotate(0deg);\n      -ms-transform: scale(0.83333333) rotate(0deg);\n          transform: scale(0.83333333) rotate(0deg);\n}\n:root .ant-dropdown-wrap .ant-btn > .anticon-down {\n  font-size: 12px;\n}\n.ant-dropdown-wrap .anticon-down:before {\n  -webkit-transition: -webkit-transform .2s;\n  transition: -webkit-transform .2s;\n  transition: transform .2s;\n  transition: transform .2s, -webkit-transform .2s;\n}\n.ant-dropdown-wrap-open .anticon-down:before {\n  -webkit-transform: rotate(180deg);\n      -ms-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n.ant-dropdown-hidden,\n.ant-dropdown-menu-hidden {\n  display: none;\n}\n.ant-dropdown-menu {\n  outline: none;\n  position: relative;\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n  text-align: left;\n  background-color: #fff;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  background-clip: padding-box;\n}\n.ant-dropdown-menu-item-group-title {\n  color: rgba(0, 0, 0, 0.45);\n  padding: 5px 12px;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n.ant-dropdown-menu-submenu-popup {\n  position: absolute;\n  z-index: 1050;\n}\n.ant-dropdown-menu-item,\n.ant-dropdown-menu-submenu-title {\n  padding: 5px 12px;\n  margin: 0;\n  clear: both;\n  font-size: 14px;\n  font-weight: normal;\n  color: rgba(0, 0, 0, 0.65);\n  white-space: nowrap;\n  cursor: pointer;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n  line-height: 22px;\n}\n.ant-dropdown-menu-item > a,\n.ant-dropdown-menu-submenu-title > a {\n  color: rgba(0, 0, 0, 0.65);\n  display: block;\n  padding: 5px 12px;\n  margin: -5px -12px;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n.ant-dropdown-menu-item > a:focus,\n.ant-dropdown-menu-submenu-title > a:focus {\n  text-decoration: none;\n}\n.ant-dropdown-menu-item-selected,\n.ant-dropdown-menu-submenu-title-selected,\n.ant-dropdown-menu-item-selected > a,\n.ant-dropdown-menu-submenu-title-selected > a {\n  color: #1890ff;\n  background-color: #e6f7ff;\n}\n.ant-dropdown-menu-item:hover,\n.ant-dropdown-menu-submenu-title:hover {\n  background-color: #e6f7ff;\n}\n.ant-dropdown-menu-item-disabled,\n.ant-dropdown-menu-submenu-title-disabled {\n  color: rgba(0, 0, 0, 0.25);\n  cursor: not-allowed;\n}\n.ant-dropdown-menu-item-disabled:hover,\n.ant-dropdown-menu-submenu-title-disabled:hover {\n  color: rgba(0, 0, 0, 0.25);\n  background-color: #fff;\n  cursor: not-allowed;\n}\n.ant-dropdown-menu-item:first-child,\n.ant-dropdown-menu-submenu-title:first-child,\n.ant-dropdown-menu-item:first-child > a,\n.ant-dropdown-menu-submenu-title:first-child > a {\n  border-radius: 4px 4px 0 0;\n}\n.ant-dropdown-menu-item:last-child,\n.ant-dropdown-menu-submenu-title:last-child,\n.ant-dropdown-menu-item:last-child > a,\n.ant-dropdown-menu-submenu-title:last-child > a {\n  border-radius: 0 0 4px 4px;\n}\n.ant-dropdown-menu-item:only-child,\n.ant-dropdown-menu-submenu-title:only-child,\n.ant-dropdown-menu-item:only-child > a,\n.ant-dropdown-menu-submenu-title:only-child > a {\n  border-radius: 4px;\n}\n.ant-dropdown-menu-item-divider,\n.ant-dropdown-menu-submenu-title-divider {\n  height: 1px;\n  overflow: hidden;\n  background-color: #e8e8e8;\n  line-height: 0;\n}\n.ant-dropdown-menu-item .ant-dropdown-menu-submenu-arrow,\n.ant-dropdown-menu-submenu-title .ant-dropdown-menu-submenu-arrow {\n  position: absolute;\n  right: 8px;\n}\n.ant-dropdown-menu-item .ant-dropdown-menu-submenu-arrow:after,\n.ant-dropdown-menu-submenu-title .ant-dropdown-menu-submenu-arrow:after {\n  font-family: \"anticon\" !important;\n  font-style: normal;\n  content: \"\\E61F\";\n  color: rgba(0, 0, 0, 0.45);\n  display: inline-block;\n  font-size: 12px;\n  font-size: 10px \\9;\n  -webkit-transform: scale(0.83333333) rotate(0deg);\n      -ms-transform: scale(0.83333333) rotate(0deg);\n          transform: scale(0.83333333) rotate(0deg);\n}\n:root .ant-dropdown-menu-item .ant-dropdown-menu-submenu-arrow:after,\n:root .ant-dropdown-menu-submenu-title .ant-dropdown-menu-submenu-arrow:after {\n  font-size: 12px;\n}\n.ant-dropdown-menu-submenu-title {\n  padding-right: 26px;\n}\n.ant-dropdown-menu-submenu-title:first-child,\n.ant-dropdown-menu-submenu-title:last-child {\n  border-radius: 0;\n}\n.ant-dropdown-menu-submenu-vertical {\n  position: relative;\n}\n.ant-dropdown-menu-submenu-vertical > .ant-dropdown-menu {\n  top: 0;\n  left: 100%;\n  position: absolute;\n  min-width: 100%;\n  margin-left: 4px;\n  -webkit-transform-origin: 0 0;\n      -ms-transform-origin: 0 0;\n          transform-origin: 0 0;\n}\n.ant-dropdown-menu-submenu.ant-dropdown-menu-submenu-disabled .ant-dropdown-menu-submenu-title,\n.ant-dropdown-menu-submenu.ant-dropdown-menu-submenu-disabled .ant-dropdown-menu-submenu-title .ant-dropdown-menu-submenu-arrow:after {\n  color: rgba(0, 0, 0, 0.25);\n}\n.ant-dropdown-menu-submenu:first-child .ant-dropdown-menu-submenu-title {\n  border-radius: 4px 4px 0 0;\n}\n.ant-dropdown-menu-submenu:last-child .ant-dropdown-menu-submenu-title {\n  border-radius: 0 0 4px 4px;\n}\n.ant-dropdown.slide-down-enter.slide-down-enter-active.ant-dropdown-placement-bottomLeft,\n.ant-dropdown.slide-down-appear.slide-down-appear-active.ant-dropdown-placement-bottomLeft,\n.ant-dropdown.slide-down-enter.slide-down-enter-active.ant-dropdown-placement-bottomCenter,\n.ant-dropdown.slide-down-appear.slide-down-appear-active.ant-dropdown-placement-bottomCenter,\n.ant-dropdown.slide-down-enter.slide-down-enter-active.ant-dropdown-placement-bottomRight,\n.ant-dropdown.slide-down-appear.slide-down-appear-active.ant-dropdown-placement-bottomRight {\n  -webkit-animation-name: antSlideUpIn;\n          animation-name: antSlideUpIn;\n}\n.ant-dropdown.slide-up-enter.slide-up-enter-active.ant-dropdown-placement-topLeft,\n.ant-dropdown.slide-up-appear.slide-up-appear-active.ant-dropdown-placement-topLeft,\n.ant-dropdown.slide-up-enter.slide-up-enter-active.ant-dropdown-placement-topCenter,\n.ant-dropdown.slide-up-appear.slide-up-appear-active.ant-dropdown-placement-topCenter,\n.ant-dropdown.slide-up-enter.slide-up-enter-active.ant-dropdown-placement-topRight,\n.ant-dropdown.slide-up-appear.slide-up-appear-active.ant-dropdown-placement-topRight {\n  -webkit-animation-name: antSlideDownIn;\n          animation-name: antSlideDownIn;\n}\n.ant-dropdown.slide-down-leave.slide-down-leave-active.ant-dropdown-placement-bottomLeft,\n.ant-dropdown.slide-down-leave.slide-down-leave-active.ant-dropdown-placement-bottomCenter,\n.ant-dropdown.slide-down-leave.slide-down-leave-active.ant-dropdown-placement-bottomRight {\n  -webkit-animation-name: antSlideUpOut;\n          animation-name: antSlideUpOut;\n}\n.ant-dropdown.slide-up-leave.slide-up-leave-active.ant-dropdown-placement-topLeft,\n.ant-dropdown.slide-up-leave.slide-up-leave-active.ant-dropdown-placement-topCenter,\n.ant-dropdown.slide-up-leave.slide-up-leave-active.ant-dropdown-placement-topRight {\n  -webkit-animation-name: antSlideDownOut;\n          animation-name: antSlideDownOut;\n}\n.ant-dropdown-trigger .anticon-down,\n.ant-dropdown-link .anticon-down {\n  display: inline-block;\n  font-size: 12px;\n  font-size: 10px \\9;\n  -webkit-transform: scale(0.83333333) rotate(0deg);\n      -ms-transform: scale(0.83333333) rotate(0deg);\n          transform: scale(0.83333333) rotate(0deg);\n}\n:root .ant-dropdown-trigger .anticon-down,\n:root .ant-dropdown-link .anticon-down {\n  font-size: 12px;\n}\n.ant-dropdown-button {\n  white-space: nowrap;\n}\n.ant-dropdown-button.ant-btn-group > .ant-btn:last-child:not(:first-child) {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.ant-dropdown-button .anticon-down {\n  display: inline-block;\n  font-size: 12px;\n  font-size: 10px \\9;\n  -webkit-transform: scale(0.83333333) rotate(0deg);\n      -ms-transform: scale(0.83333333) rotate(0deg);\n          transform: scale(0.83333333) rotate(0deg);\n}\n:root .ant-dropdown-button .anticon-down {\n  font-size: 12px;\n}\n.ant-dropdown-menu-dark,\n.ant-dropdown-menu-dark .ant-dropdown-menu {\n  background: #001529;\n}\n.ant-dropdown-menu-dark .ant-dropdown-menu-item,\n.ant-dropdown-menu-dark .ant-dropdown-menu-submenu-title,\n.ant-dropdown-menu-dark .ant-dropdown-menu-item > a {\n  color: rgba(255, 255, 255, 0.65);\n}\n.ant-dropdown-menu-dark .ant-dropdown-menu-item .ant-dropdown-menu-submenu-arrow:after,\n.ant-dropdown-menu-dark .ant-dropdown-menu-submenu-title .ant-dropdown-menu-submenu-arrow:after,\n.ant-dropdown-menu-dark .ant-dropdown-menu-item > a .ant-dropdown-menu-submenu-arrow:after {\n  color: rgba(255, 255, 255, 0.65);\n}\n.ant-dropdown-menu-dark .ant-dropdown-menu-item:hover,\n.ant-dropdown-menu-dark .ant-dropdown-menu-submenu-title:hover,\n.ant-dropdown-menu-dark .ant-dropdown-menu-item > a:hover {\n  color: #fff;\n  background: transparent;\n}\n.ant-dropdown-menu-dark .ant-dropdown-menu-item-selected,\n.ant-dropdown-menu-dark .ant-dropdown-menu-item-selected:hover,\n.ant-dropdown-menu-dark .ant-dropdown-menu-item-selected > a {\n  background: #1890ff;\n  color: #fff;\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/antd/es/pagination/style/index.css":
/*!*************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/antd/es/pagination/style/index.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n.ant-pagination {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.ant-pagination ul,\n.ant-pagination ol {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.ant-pagination:after {\n  content: \" \";\n  display: block;\n  height: 0;\n  clear: both;\n  overflow: hidden;\n  visibility: hidden;\n}\n.ant-pagination-total-text {\n  display: inline-block;\n  vertical-align: middle;\n  height: 32px;\n  line-height: 30px;\n  margin-right: 8px;\n}\n.ant-pagination-item {\n  cursor: pointer;\n  border-radius: 4px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  min-width: 32px;\n  height: 32px;\n  line-height: 30px;\n  text-align: center;\n  list-style: none;\n  display: inline-block;\n  vertical-align: middle;\n  border: 1px solid #d9d9d9;\n  background-color: #fff;\n  margin-right: 8px;\n  font-family: Arial;\n  outline: 0;\n}\n.ant-pagination-item a {\n  text-decoration: none;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-transition: none;\n  transition: none;\n  margin: 0 6px;\n}\n.ant-pagination-item:focus,\n.ant-pagination-item:hover {\n  -webkit-transition: all .3s;\n  transition: all .3s;\n  border-color: #1890ff;\n}\n.ant-pagination-item:focus a,\n.ant-pagination-item:hover a {\n  color: #1890ff;\n}\n.ant-pagination-item-active {\n  border-color: #1890ff;\n  font-weight: 500;\n}\n.ant-pagination-item-active a {\n  color: #1890ff;\n}\n.ant-pagination-item-active:focus,\n.ant-pagination-item-active:hover {\n  border-color: #40a9ff;\n}\n.ant-pagination-item-active:focus a,\n.ant-pagination-item-active:hover a {\n  color: #40a9ff;\n}\n.ant-pagination-jump-prev,\n.ant-pagination-jump-next {\n  outline: 0;\n}\n.ant-pagination-jump-prev:after,\n.ant-pagination-jump-next:after {\n  content: \"\\2022\\2022\\2022\";\n  display: block;\n  letter-spacing: 2px;\n  color: rgba(0, 0, 0, 0.25);\n  text-align: center;\n}\n.ant-pagination-jump-prev:focus:after,\n.ant-pagination-jump-next:focus:after,\n.ant-pagination-jump-prev:hover:after,\n.ant-pagination-jump-next:hover:after {\n  color: #1890ff;\n  display: inline-block;\n  font-size: 12px;\n  font-size: 8px \\9;\n  -webkit-transform: scale(0.66666667) rotate(0deg);\n      -ms-transform: scale(0.66666667) rotate(0deg);\n          transform: scale(0.66666667) rotate(0deg);\n  letter-spacing: -1px;\n  font-family: \"anticon\";\n}\n:root .ant-pagination-jump-prev:focus:after,\n:root .ant-pagination-jump-next:focus:after,\n:root .ant-pagination-jump-prev:hover:after,\n:root .ant-pagination-jump-next:hover:after {\n  font-size: 12px;\n}\n.ant-pagination-jump-prev:focus:after,\n.ant-pagination-jump-prev:hover:after {\n  content: \"\\E620\\E620\";\n}\n.ant-pagination-jump-next:focus:after,\n.ant-pagination-jump-next:hover:after {\n  content: \"\\E61F\\E61F\";\n}\n.ant-pagination-prev,\n.ant-pagination-jump-prev,\n.ant-pagination-jump-next {\n  margin-right: 8px;\n}\n.ant-pagination-prev,\n.ant-pagination-next,\n.ant-pagination-jump-prev,\n.ant-pagination-jump-next {\n  font-family: Arial;\n  cursor: pointer;\n  color: rgba(0, 0, 0, 0.65);\n  border-radius: 4px;\n  list-style: none;\n  min-width: 32px;\n  height: 32px;\n  line-height: 32px;\n  text-align: center;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n  display: inline-block;\n  vertical-align: middle;\n}\n.ant-pagination-prev,\n.ant-pagination-next {\n  outline: 0;\n}\n.ant-pagination-prev a,\n.ant-pagination-next a {\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.ant-pagination-prev:hover a,\n.ant-pagination-next:hover a {\n  border-color: #40a9ff;\n}\n.ant-pagination-prev .ant-pagination-item-link,\n.ant-pagination-next .ant-pagination-item-link {\n  border: 1px solid #d9d9d9;\n  background-color: #fff;\n  border-radius: 4px;\n  outline: none;\n  display: block;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n.ant-pagination-prev .ant-pagination-item-link:after,\n.ant-pagination-next .ant-pagination-item-link:after {\n  font-size: 12px;\n  display: block;\n  height: 30px;\n  font-family: \"anticon\";\n  text-align: center;\n  font-weight: 500;\n}\n.ant-pagination-prev:focus .ant-pagination-item-link,\n.ant-pagination-next:focus .ant-pagination-item-link,\n.ant-pagination-prev:hover .ant-pagination-item-link,\n.ant-pagination-next:hover .ant-pagination-item-link {\n  border-color: #1890ff;\n  color: #1890ff;\n}\n.ant-pagination-prev .ant-pagination-item-link:after {\n  content: \"\\E620\";\n  display: block;\n}\n.ant-pagination-next .ant-pagination-item-link:after {\n  content: \"\\E61F\";\n  display: block;\n}\n.ant-pagination-disabled,\n.ant-pagination-disabled:hover,\n.ant-pagination-disabled:focus {\n  cursor: not-allowed;\n}\n.ant-pagination-disabled a,\n.ant-pagination-disabled:hover a,\n.ant-pagination-disabled:focus a,\n.ant-pagination-disabled .ant-pagination-item-link,\n.ant-pagination-disabled:hover .ant-pagination-item-link,\n.ant-pagination-disabled:focus .ant-pagination-item-link {\n  border-color: #d9d9d9;\n  color: rgba(0, 0, 0, 0.25);\n  cursor: not-allowed;\n}\n.ant-pagination-slash {\n  margin: 0 10px 0 5px;\n}\n.ant-pagination-options {\n  display: inline-block;\n  vertical-align: middle;\n  margin-left: 16px;\n}\n.ant-pagination-options-size-changer.ant-select {\n  display: inline-block;\n  margin-right: 8px;\n}\n.ant-pagination-options-quick-jumper {\n  display: inline-block;\n  vertical-align: top;\n  height: 32px;\n  line-height: 32px;\n}\n.ant-pagination-options-quick-jumper input {\n  position: relative;\n  display: inline-block;\n  padding: 4px 11px;\n  width: 100%;\n  height: 32px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n  margin: 0 8px;\n  width: 50px;\n}\n.ant-pagination-options-quick-jumper input::-moz-placeholder {\n  color: #bfbfbf;\n  opacity: 1;\n}\n.ant-pagination-options-quick-jumper input:-ms-input-placeholder {\n  color: #bfbfbf;\n}\n.ant-pagination-options-quick-jumper input::-webkit-input-placeholder {\n  color: #bfbfbf;\n}\n.ant-pagination-options-quick-jumper input:hover {\n  border-color: #40a9ff;\n}\n.ant-pagination-options-quick-jumper input:focus {\n  border-color: #40a9ff;\n  outline: 0;\n  -webkit-box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);\n          box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);\n}\n.ant-pagination-options-quick-jumper input-disabled {\n  background-color: #f5f5f5;\n  opacity: 1;\n  cursor: not-allowed;\n  color: rgba(0, 0, 0, 0.25);\n}\n.ant-pagination-options-quick-jumper input-disabled:hover {\n  border-color: #e6d8d8;\n}\ntextarea.ant-pagination-options-quick-jumper input {\n  max-width: 100%;\n  height: auto;\n  vertical-align: bottom;\n  -webkit-transition: all .3s, height 0s;\n  transition: all .3s, height 0s;\n  min-height: 32px;\n}\n.ant-pagination-options-quick-jumper input-lg {\n  padding: 6px 11px;\n  height: 40px;\n  font-size: 16px;\n}\n.ant-pagination-options-quick-jumper input-sm {\n  padding: 1px 7px;\n  height: 24px;\n}\n.ant-pagination-simple .ant-pagination-prev,\n.ant-pagination-simple .ant-pagination-next {\n  height: 24px;\n  line-height: 24px;\n  vertical-align: top;\n}\n.ant-pagination-simple .ant-pagination-prev .ant-pagination-item-link,\n.ant-pagination-simple .ant-pagination-next .ant-pagination-item-link {\n  border: 0;\n  height: 24px;\n}\n.ant-pagination-simple .ant-pagination-prev .ant-pagination-item-link:after,\n.ant-pagination-simple .ant-pagination-next .ant-pagination-item-link:after {\n  height: 24px;\n  line-height: 24px;\n}\n.ant-pagination-simple .ant-pagination-simple-pager {\n  display: inline-block;\n  margin-right: 8px;\n  height: 24px;\n}\n.ant-pagination-simple .ant-pagination-simple-pager input {\n  margin-right: 8px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-color: #fff;\n  border-radius: 4px;\n  border: 1px solid #d9d9d9;\n  outline: none;\n  padding: 0 6px;\n  height: 100%;\n  text-align: center;\n  -webkit-transition: border-color 0.3s;\n  transition: border-color 0.3s;\n}\n.ant-pagination-simple .ant-pagination-simple-pager input:hover {\n  border-color: #1890ff;\n}\n.ant-pagination.mini .ant-pagination-total-text,\n.ant-pagination.mini .ant-pagination-simple-pager {\n  height: 24px;\n  line-height: 24px;\n}\n.ant-pagination.mini .ant-pagination-item {\n  margin: 0;\n  min-width: 24px;\n  height: 24px;\n  line-height: 22px;\n}\n.ant-pagination.mini .ant-pagination-item:not(.ant-pagination-item-active) {\n  background: transparent;\n  border-color: transparent;\n}\n.ant-pagination.mini .ant-pagination-prev,\n.ant-pagination.mini .ant-pagination-next {\n  margin: 0;\n  min-width: 24px;\n  height: 24px;\n  line-height: 24px;\n}\n.ant-pagination.mini .ant-pagination-prev .ant-pagination-item-link,\n.ant-pagination.mini .ant-pagination-next .ant-pagination-item-link {\n  border-color: transparent;\n  background: transparent;\n}\n.ant-pagination.mini .ant-pagination-prev .ant-pagination-item-link:after,\n.ant-pagination.mini .ant-pagination-next .ant-pagination-item-link:after {\n  height: 24px;\n  line-height: 24px;\n}\n.ant-pagination.mini .ant-pagination-jump-prev,\n.ant-pagination.mini .ant-pagination-jump-next {\n  height: 24px;\n  line-height: 24px;\n  margin-right: 0;\n}\n.ant-pagination.mini .ant-pagination-options {\n  margin-left: 2px;\n}\n.ant-pagination.mini .ant-pagination-options-quick-jumper {\n  height: 24px;\n  line-height: 24px;\n}\n.ant-pagination.mini .ant-pagination-options-quick-jumper input {\n  padding: 1px 7px;\n  height: 24px;\n  width: 44px;\n}\n@media only screen and (max-width: 992px) {\n  .ant-pagination-item-after-jump-prev,\n  .ant-pagination-item-before-jump-next {\n    display: none;\n  }\n}\n@media only screen and (max-width: 576px) {\n  .ant-pagination-options {\n    display: none;\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/antd/es/radio/style/index.css":
/*!********************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/antd/es/radio/style/index.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n.ant-radio-group {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: inline-block;\n  line-height: unset;\n}\n.ant-radio-wrapper {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: inline-block;\n  position: relative;\n  white-space: nowrap;\n  margin-right: 8px;\n  cursor: pointer;\n}\n.ant-radio {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  white-space: nowrap;\n  outline: none;\n  display: inline-block;\n  position: relative;\n  line-height: 1;\n  vertical-align: text-bottom;\n  cursor: pointer;\n}\n.ant-radio-wrapper:hover .ant-radio .ant-radio-inner,\n.ant-radio:hover .ant-radio-inner,\n.ant-radio-focused .ant-radio-inner {\n  border-color: #1890ff;\n}\n.ant-radio-checked:after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  border: 1px solid #1890ff;\n  content: '';\n  -webkit-animation: antRadioEffect 0.36s ease-in-out;\n          animation: antRadioEffect 0.36s ease-in-out;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  visibility: hidden;\n}\n.ant-radio:hover:after,\n.ant-radio-wrapper:hover .ant-radio:after {\n  visibility: visible;\n}\n.ant-radio-inner {\n  position: relative;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 16px;\n  height: 16px;\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 100px;\n  border-color: #d9d9d9;\n  background-color: #fff;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.ant-radio-inner:after {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  left: 3px;\n  top: 3px;\n  border-radius: 4px;\n  display: table;\n  border-top: 0;\n  border-left: 0;\n  content: ' ';\n  background-color: #1890ff;\n  opacity: 0;\n  -webkit-transform: scale(0);\n      -ms-transform: scale(0);\n          transform: scale(0);\n  -webkit-transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n}\n.ant-radio-input {\n  position: absolute;\n  left: 0;\n  z-index: 1;\n  cursor: pointer;\n  opacity: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n}\n.ant-radio-checked .ant-radio-inner {\n  border-color: #1890ff;\n}\n.ant-radio-checked .ant-radio-inner:after {\n  -webkit-transform: scale(0.875);\n      -ms-transform: scale(0.875);\n          transform: scale(0.875);\n  opacity: 1;\n  -webkit-transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n}\n.ant-radio-disabled .ant-radio-inner {\n  border-color: #d9d9d9 !important;\n  background-color: #f5f5f5;\n}\n.ant-radio-disabled .ant-radio-inner:after {\n  background-color: #ccc;\n}\n.ant-radio-disabled .ant-radio-input {\n  cursor: not-allowed;\n}\n.ant-radio-disabled + span {\n  color: rgba(0, 0, 0, 0.25);\n  cursor: not-allowed;\n}\nspan.ant-radio + * {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.ant-radio-button-wrapper {\n  margin: 0;\n  height: 32px;\n  line-height: 30px;\n  color: rgba(0, 0, 0, 0.65);\n  display: inline-block;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  border: 1px solid #d9d9d9;\n  border-left: 0;\n  border-top-width: 1.02px;\n  background: #fff;\n  padding: 0 15px;\n  position: relative;\n}\n.ant-radio-button-wrapper a {\n  color: rgba(0, 0, 0, 0.65);\n}\n.ant-radio-button-wrapper > .ant-radio-button {\n  margin-left: 0;\n  display: block;\n  width: 0;\n  height: 0;\n}\n.ant-radio-group-large .ant-radio-button-wrapper {\n  height: 40px;\n  line-height: 38px;\n  font-size: 16px;\n}\n.ant-radio-group-small .ant-radio-button-wrapper {\n  height: 24px;\n  line-height: 22px;\n  padding: 0 7px;\n}\n.ant-radio-button-wrapper:not(:first-child)::before {\n  content: \"\";\n  display: block;\n  top: 0;\n  left: -1px;\n  width: 1px;\n  height: 100%;\n  position: absolute;\n  background-color: #d9d9d9;\n}\n.ant-radio-button-wrapper:first-child {\n  border-radius: 4px 0 0 4px;\n  border-left: 1px solid #d9d9d9;\n}\n.ant-radio-button-wrapper:last-child {\n  border-radius: 0 4px 4px 0;\n}\n.ant-radio-button-wrapper:first-child:last-child {\n  border-radius: 4px;\n}\n.ant-radio-button-wrapper:hover,\n.ant-radio-button-wrapper-focused {\n  color: #1890ff;\n  position: relative;\n}\n.ant-radio-button-wrapper .ant-radio-inner,\n.ant-radio-button-wrapper input[type=\"checkbox\"],\n.ant-radio-button-wrapper input[type=\"radio\"] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.ant-radio-button-wrapper-checked {\n  background: #fff;\n  border-color: #1890ff;\n  color: #1890ff;\n  -webkit-box-shadow: -1px 0 0 0 #1890ff;\n          box-shadow: -1px 0 0 0 #1890ff;\n  z-index: 1;\n}\n.ant-radio-button-wrapper-checked::before {\n  background-color: #1890ff !important;\n  opacity: 0.1;\n}\n.ant-radio-button-wrapper-checked:first-child {\n  border-color: #1890ff;\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n}\n.ant-radio-button-wrapper-checked:hover {\n  border-color: #40a9ff;\n  -webkit-box-shadow: -1px 0 0 0 #40a9ff;\n          box-shadow: -1px 0 0 0 #40a9ff;\n  color: #40a9ff;\n}\n.ant-radio-button-wrapper-checked:active {\n  border-color: #096dd9;\n  -webkit-box-shadow: -1px 0 0 0 #096dd9;\n          box-shadow: -1px 0 0 0 #096dd9;\n  color: #096dd9;\n}\n.ant-radio-button-wrapper-disabled {\n  border-color: #d9d9d9;\n  background-color: #f5f5f5;\n  cursor: not-allowed;\n  color: rgba(0, 0, 0, 0.25);\n}\n.ant-radio-button-wrapper-disabled:first-child,\n.ant-radio-button-wrapper-disabled:hover {\n  border-color: #d9d9d9;\n  background-color: #f5f5f5;\n  color: rgba(0, 0, 0, 0.25);\n}\n.ant-radio-button-wrapper-disabled:first-child {\n  border-left-color: #d9d9d9;\n}\n.ant-radio-button-wrapper-disabled.ant-radio-button-wrapper-checked {\n  color: #fff;\n  background-color: #e6e6e6;\n  border-color: #d9d9d9;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n@-webkit-keyframes antRadioEffect {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 0.5;\n  }\n  100% {\n    -webkit-transform: scale(1.6);\n            transform: scale(1.6);\n    opacity: 0;\n  }\n}\n@keyframes antRadioEffect {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 0.5;\n  }\n  100% {\n    -webkit-transform: scale(1.6);\n            transform: scale(1.6);\n    opacity: 0;\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/antd/es/spin/style/index.css":
/*!*******************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/antd/es/spin/style/index.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n.ant-spin {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  color: #1890ff;\n  vertical-align: middle;\n  text-align: center;\n  opacity: 0;\n  position: absolute;\n  -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86), -webkit-transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  display: none;\n}\n.ant-spin-spinning {\n  opacity: 1;\n  position: static;\n  display: inline-block;\n}\n.ant-spin-nested-loading {\n  position: relative;\n}\n.ant-spin-nested-loading > div > .ant-spin {\n  position: absolute;\n  height: 100%;\n  max-height: 320px;\n  width: 100%;\n  z-index: 4;\n}\n.ant-spin-nested-loading > div > .ant-spin .ant-spin-dot {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -10px;\n}\n.ant-spin-nested-loading > div > .ant-spin .ant-spin-text {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  padding-top: 5px;\n  text-shadow: 0 1px 2px #fff;\n}\n.ant-spin-nested-loading > div > .ant-spin.ant-spin-show-text .ant-spin-dot {\n  margin-top: -20px;\n}\n.ant-spin-nested-loading > div > .ant-spin-sm .ant-spin-dot {\n  margin: -7px;\n}\n.ant-spin-nested-loading > div > .ant-spin-sm .ant-spin-text {\n  padding-top: 2px;\n}\n.ant-spin-nested-loading > div > .ant-spin-sm.ant-spin-show-text .ant-spin-dot {\n  margin-top: -17px;\n}\n.ant-spin-nested-loading > div > .ant-spin-lg .ant-spin-dot {\n  margin: -16px;\n}\n.ant-spin-nested-loading > div > .ant-spin-lg .ant-spin-text {\n  padding-top: 11px;\n}\n.ant-spin-nested-loading > div > .ant-spin-lg.ant-spin-show-text .ant-spin-dot {\n  margin-top: -26px;\n}\n.ant-spin-container {\n  position: relative;\n  zoom: 1;\n}\n.ant-spin-container:before,\n.ant-spin-container:after {\n  content: \" \";\n  display: table;\n}\n.ant-spin-container:after {\n  clear: both;\n  visibility: hidden;\n  font-size: 0;\n  height: 0;\n}\n.ant-spin-blur {\n  overflow: hidden;\n  opacity: 0.7;\n  -webkit-filter: blur(0.5px);\n  filter: blur(0.5px);\n  /* autoprefixer: off */\n  filter: progid\\:DXImageTransform\\.Microsoft\\.Blur(PixelRadius\\=1, MakeShadow\\=false);\n  -webkit-transform: translateZ(0);\n}\n.ant-spin-blur:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: #fff;\n  opacity: 0.3;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n  z-index: 10;\n}\n.ant-spin-tip {\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-spin-dot {\n  position: relative;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n}\n.ant-spin-dot i {\n  width: 9px;\n  height: 9px;\n  border-radius: 100%;\n  background-color: #1890ff;\n  -webkit-transform: scale(0.75);\n      -ms-transform: scale(0.75);\n          transform: scale(0.75);\n  display: block;\n  position: absolute;\n  opacity: 0.3;\n  -webkit-animation: antSpinMove 1s infinite linear alternate;\n          animation: antSpinMove 1s infinite linear alternate;\n  -webkit-transform-origin: 50% 50%;\n      -ms-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n}\n.ant-spin-dot i:nth-child(1) {\n  left: 0;\n  top: 0;\n}\n.ant-spin-dot i:nth-child(2) {\n  right: 0;\n  top: 0;\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n}\n.ant-spin-dot i:nth-child(3) {\n  right: 0;\n  bottom: 0;\n  -webkit-animation-delay: 0.8s;\n          animation-delay: 0.8s;\n}\n.ant-spin-dot i:nth-child(4) {\n  left: 0;\n  bottom: 0;\n  -webkit-animation-delay: 1.2s;\n          animation-delay: 1.2s;\n}\n.ant-spin-dot-spin {\n  -webkit-transform: rotate(45deg);\n      -ms-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-animation: antRotate 1.2s infinite linear;\n          animation: antRotate 1.2s infinite linear;\n}\n.ant-spin-sm .ant-spin-dot {\n  width: 14px;\n  height: 14px;\n}\n.ant-spin-sm .ant-spin-dot i {\n  width: 6px;\n  height: 6px;\n}\n.ant-spin-lg .ant-spin-dot {\n  width: 32px;\n  height: 32px;\n}\n.ant-spin-lg .ant-spin-dot i {\n  width: 14px;\n  height: 14px;\n}\n.ant-spin.ant-spin-show-text .ant-spin-text {\n  display: block;\n}\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  /* IE10+ */\n  .ant-spin-blur {\n    background: #fff;\n    opacity: 0.5;\n  }\n}\n@-webkit-keyframes antSpinMove {\n  to {\n    opacity: 1;\n  }\n}\n@keyframes antSpinMove {\n  to {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes antRotate {\n  to {\n    -webkit-transform: rotate(405deg);\n            transform: rotate(405deg);\n  }\n}\n@keyframes antRotate {\n  to {\n    -webkit-transform: rotate(405deg);\n            transform: rotate(405deg);\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/antd/es/table/style/index.css":
/*!********************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/antd/es/table/style/index.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n.ant-table-wrapper {\n  zoom: 1;\n}\n.ant-table-wrapper:before,\n.ant-table-wrapper:after {\n  content: \" \";\n  display: table;\n}\n.ant-table-wrapper:after {\n  clear: both;\n  visibility: hidden;\n  font-size: 0;\n  height: 0;\n}\n.ant-table {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: relative;\n  clear: both;\n}\n.ant-table-body {\n  -webkit-transition: opacity .3s;\n  transition: opacity .3s;\n}\n.ant-table table {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  text-align: left;\n  border-radius: 4px 4px 0 0;\n}\n.ant-table-thead > tr > th {\n  background: #fafafa;\n  -webkit-transition: background .3s ease;\n  transition: background .3s ease;\n  text-align: left;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 500;\n  border-bottom: 1px solid #e8e8e8;\n}\n.ant-table-thead > tr > th[colspan] {\n  text-align: center;\n  border-bottom: 0;\n}\n.ant-table-thead > tr > th .anticon-filter,\n.ant-table-thead > tr > th .ant-table-filter-icon {\n  position: relative;\n  margin-left: 8px;\n  font-size: 14px;\n  cursor: pointer;\n  color: rgba(0, 0, 0, 0.45);\n  -webkit-transition: all .3s;\n  transition: all .3s;\n  width: 14px;\n  font-weight: normal;\n  vertical-align: text-bottom;\n}\n.ant-table-thead > tr > th .anticon-filter:hover,\n.ant-table-thead > tr > th .ant-table-filter-icon:hover {\n  color: rgba(0, 0, 0, 0.65);\n}\n.ant-table-thead > tr > th .ant-table-column-sorter + .anticon-filter {\n  margin-left: 4px;\n}\n.ant-table-thead > tr > th .ant-table-filter-selected.anticon-filter {\n  color: #1890ff;\n}\n.ant-table-thead > tr > th.ant-table-column-has-filters {\n  overflow: hidden;\n}\n.ant-table-thead > tr:first-child > th:first-child {\n  border-top-left-radius: 4px;\n}\n.ant-table-thead > tr:first-child > th:last-child {\n  border-top-right-radius: 4px;\n}\n.ant-table-tbody > tr > td {\n  border-bottom: 1px solid #e8e8e8;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n.ant-table-thead > tr,\n.ant-table-tbody > tr {\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n.ant-table-thead > tr.ant-table-row-hover > td,\n.ant-table-tbody > tr.ant-table-row-hover > td,\n.ant-table-thead > tr:hover > td,\n.ant-table-tbody > tr:hover > td {\n  background: #e6f7ff;\n}\n.ant-table-thead > tr:hover {\n  background: none;\n}\n.ant-table-footer {\n  padding: 16px 16px;\n  background: #fafafa;\n  border-radius: 0 0 4px 4px;\n  position: relative;\n  border-top: 1px solid #e8e8e8;\n}\n.ant-table-footer:before {\n  content: '';\n  height: 1px;\n  background: #fafafa;\n  position: absolute;\n  top: -1px;\n  width: 100%;\n  left: 0;\n}\n.ant-table.ant-table-bordered .ant-table-footer {\n  border: 1px solid #e8e8e8;\n}\n.ant-table-title {\n  padding: 16px 0;\n  position: relative;\n  top: 1px;\n  border-radius: 4px 4px 0 0;\n}\n.ant-table.ant-table-bordered .ant-table-title {\n  border: 1px solid #e8e8e8;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.ant-table-title + .ant-table-content {\n  position: relative;\n  border-radius: 4px 4px 0 0;\n  overflow: hidden;\n}\n.ant-table-bordered .ant-table-title + .ant-table-content,\n.ant-table-bordered .ant-table-title + .ant-table-content table,\n.ant-table-bordered .ant-table-title + .ant-table-content .ant-table-thead > tr:first-child > th {\n  border-radius: 0;\n}\n.ant-table-without-column-header .ant-table-title + .ant-table-content,\n.ant-table-without-column-header table {\n  border-radius: 0;\n}\n.ant-table-tbody > tr.ant-table-row-selected td {\n  background: #fafafa;\n}\n.ant-table-thead > tr > th.ant-table-column-sort {\n  background: #f5f5f5;\n}\n.ant-table-thead > tr > th,\n.ant-table-tbody > tr > td {\n  padding: 16px 16px;\n  word-break: break-all;\n}\n.ant-table-thead > tr > th.ant-table-selection-column-custom {\n  padding-left: 16px;\n  padding-right: 0;\n}\n.ant-table-thead > tr > th.ant-table-selection-column,\n.ant-table-tbody > tr > td.ant-table-selection-column {\n  text-align: center;\n  min-width: 62px;\n  width: 62px;\n}\n.ant-table-thead > tr > th.ant-table-selection-column .ant-radio-wrapper,\n.ant-table-tbody > tr > td.ant-table-selection-column .ant-radio-wrapper {\n  margin-right: 0;\n}\n.ant-table-expand-icon-th,\n.ant-table-row-expand-icon-cell {\n  text-align: center;\n  min-width: 50px;\n  width: 50px;\n}\n.ant-table-header {\n  background: #fafafa;\n  overflow: hidden;\n}\n.ant-table-header table {\n  border-radius: 4px 4px 0 0;\n}\n.ant-table-loading {\n  position: relative;\n}\n.ant-table-loading .ant-table-body {\n  background: #fff;\n  opacity: 0.5;\n}\n.ant-table-loading .ant-table-spin-holder {\n  height: 20px;\n  line-height: 20px;\n  left: 50%;\n  top: 50%;\n  margin-left: -30px;\n  position: absolute;\n}\n.ant-table-loading .ant-table-with-pagination {\n  margin-top: -20px;\n}\n.ant-table-loading .ant-table-without-pagination {\n  margin-top: 10px;\n}\n.ant-table-column-sorter {\n  position: relative;\n  margin-left: 8px;\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  vertical-align: middle;\n  text-align: center;\n  font-weight: normal;\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-table-column-sorter-up,\n.ant-table-column-sorter-down {\n  line-height: 6px;\n  display: block;\n  width: 14px;\n  height: 6px;\n  cursor: pointer;\n  position: relative;\n}\n.ant-table-column-sorter-up:hover .anticon,\n.ant-table-column-sorter-down:hover .anticon {\n  color: #69c0ff;\n}\n.ant-table-column-sorter-up.on .anticon-caret-up,\n.ant-table-column-sorter-down.on .anticon-caret-up,\n.ant-table-column-sorter-up.on .anticon-caret-down,\n.ant-table-column-sorter-down.on .anticon-caret-down {\n  color: #1890ff;\n}\n.ant-table-column-sorter-up:after,\n.ant-table-column-sorter-down:after {\n  position: absolute;\n  content: '';\n  height: 30px;\n  width: 14px;\n  left: 0;\n}\n.ant-table-column-sorter-up:after {\n  bottom: 0;\n}\n.ant-table-column-sorter-down:after {\n  top: 0;\n}\n.ant-table-column-sorter .anticon-caret-up,\n.ant-table-column-sorter .anticon-caret-down {\n  display: inline-block;\n  font-size: 12px;\n  font-size: 8px \\9;\n  -webkit-transform: scale(0.66666667) rotate(0deg);\n      -ms-transform: scale(0.66666667) rotate(0deg);\n          transform: scale(0.66666667) rotate(0deg);\n  line-height: 4px;\n  height: 4px;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n  position: relative;\n}\n:root .ant-table-column-sorter .anticon-caret-up,\n:root .ant-table-column-sorter .anticon-caret-down {\n  font-size: 12px;\n}\n.ant-table-column-sorter-down {\n  margin-top: 1.5px;\n}\n.ant-table-column-sorter .anticon-caret-down {\n  top: -1.5px;\n}\n.ant-table-bordered .ant-table-header > table,\n.ant-table-bordered .ant-table-body > table,\n.ant-table-bordered .ant-table-fixed-left table,\n.ant-table-bordered .ant-table-fixed-right table {\n  border: 1px solid #e8e8e8;\n  border-right: 0;\n  border-bottom: 0;\n}\n.ant-table-bordered.ant-table-empty .ant-table-placeholder {\n  border-left: 1px solid #e8e8e8;\n  border-right: 1px solid #e8e8e8;\n}\n.ant-table-bordered.ant-table-fixed-header .ant-table-header > table {\n  border-bottom: 0;\n}\n.ant-table-bordered.ant-table-fixed-header .ant-table-body > table {\n  border-top: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.ant-table-bordered.ant-table-fixed-header .ant-table-body-inner > table {\n  border-top: 0;\n}\n.ant-table-bordered.ant-table-fixed-header .ant-table-placeholder {\n  border: 0;\n}\n.ant-table-bordered .ant-table-thead > tr > th {\n  border-bottom: 1px solid #e8e8e8;\n}\n.ant-table-bordered .ant-table-thead > tr > th,\n.ant-table-bordered .ant-table-tbody > tr > td {\n  border-right: 1px solid #e8e8e8;\n}\n.ant-table-placeholder {\n  position: relative;\n  padding: 16px 16px;\n  background: #fff;\n  border-bottom: 1px solid #e8e8e8;\n  text-align: center;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.45);\n  z-index: 1;\n}\n.ant-table-placeholder .anticon {\n  margin-right: 4px;\n}\n.ant-table-pagination.ant-pagination {\n  margin: 16px 0;\n  float: right;\n}\n.ant-table-filter-dropdown {\n  min-width: 96px;\n  margin-left: -8px;\n  background: #fff;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.ant-table-filter-dropdown .ant-dropdown-menu {\n  border: 0;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border-radius: 4px 4px 0 0;\n}\n.ant-table-filter-dropdown .ant-dropdown-menu-without-submenu {\n  max-height: 400px;\n  overflow-x: hidden;\n}\n.ant-table-filter-dropdown .ant-dropdown-menu-item > label + span {\n  padding-right: 0;\n}\n.ant-table-filter-dropdown .ant-dropdown-menu-sub {\n  border-radius: 4px;\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.ant-table-filter-dropdown .ant-dropdown-menu .ant-dropdown-submenu-contain-selected .ant-dropdown-menu-submenu-title:after {\n  color: #1890ff;\n  font-weight: bold;\n  text-shadow: 0 0 2px #bae7ff;\n}\n.ant-table-filter-dropdown .ant-dropdown-menu-item {\n  overflow: hidden;\n}\n.ant-table-filter-dropdown > .ant-dropdown-menu > .ant-dropdown-menu-item:last-child,\n.ant-table-filter-dropdown > .ant-dropdown-menu > .ant-dropdown-menu-submenu:last-child .ant-dropdown-menu-submenu-title {\n  border-radius: 0;\n}\n.ant-table-filter-dropdown-btns {\n  overflow: hidden;\n  padding: 7px 8px;\n  border-top: 1px solid #e8e8e8;\n}\n.ant-table-filter-dropdown-link {\n  color: #1890ff;\n}\n.ant-table-filter-dropdown-link:hover {\n  color: #40a9ff;\n}\n.ant-table-filter-dropdown-link:active {\n  color: #096dd9;\n}\n.ant-table-filter-dropdown-link.confirm {\n  float: left;\n}\n.ant-table-filter-dropdown-link.clear {\n  float: right;\n}\n.ant-table-selection-select-all-custom {\n  margin-right: 4px !important;\n}\n.ant-table-selection .anticon-down {\n  color: rgba(0, 0, 0, 0.45);\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n.ant-table-selection-menu {\n  min-width: 96px;\n  margin-top: 5px;\n  margin-left: -30px;\n  background: #fff;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.ant-table-selection-menu .ant-action-down {\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-table-selection-down {\n  cursor: pointer;\n  padding: 0;\n  display: inline-block;\n  line-height: 1;\n}\n.ant-table-selection-down:hover .anticon-down {\n  color: #666;\n}\n.ant-table-row-expand-icon {\n  cursor: pointer;\n  display: inline-block;\n  width: 17px;\n  height: 17px;\n  text-align: center;\n  line-height: 14px;\n  border: 1px solid #e8e8e8;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background: #fff;\n}\n.ant-table-row-expanded:after {\n  content: '-';\n}\n.ant-table-row-collapsed:after {\n  content: '+';\n}\n.ant-table-row-spaced {\n  visibility: hidden;\n}\n.ant-table-row-spaced:after {\n  content: '.';\n}\n.ant-table-row[class*=\"ant-table-row-level-0\"] .ant-table-selection-column > span {\n  display: inline-block;\n}\ntr.ant-table-expanded-row,\ntr.ant-table-expanded-row:hover {\n  background: #fbfbfb;\n}\n.ant-table .ant-table-row-indent + .ant-table-row-expand-icon {\n  margin-right: 8px;\n}\n.ant-table-scroll {\n  overflow: auto;\n  overflow-x: hidden;\n}\n.ant-table-scroll table {\n  min-width: 100%;\n}\n.ant-table-body-inner {\n  height: 100%;\n}\n.ant-table-fixed-header > .ant-table-content > .ant-table-scroll > .ant-table-body {\n  position: relative;\n  background: #fff;\n}\n.ant-table-fixed-header .ant-table-body-inner {\n  overflow: scroll;\n}\n.ant-table-fixed-header .ant-table-scroll .ant-table-header {\n  overflow: scroll;\n  padding-bottom: 20px;\n  margin-bottom: -20px;\n}\n.ant-table-fixed-left,\n.ant-table-fixed-right {\n  position: absolute;\n  top: 0;\n  overflow: hidden;\n  -webkit-transition: -webkit-box-shadow 0.3s ease;\n  transition: -webkit-box-shadow 0.3s ease;\n  transition: box-shadow 0.3s ease;\n  transition: box-shadow 0.3s ease, -webkit-box-shadow 0.3s ease;\n  border-radius: 0;\n}\n.ant-table-fixed-left table,\n.ant-table-fixed-right table {\n  width: auto;\n  background: #fff;\n}\n.ant-table-fixed-header .ant-table-fixed-left .ant-table-body-outer .ant-table-fixed,\n.ant-table-fixed-header .ant-table-fixed-right .ant-table-body-outer .ant-table-fixed {\n  border-radius: 0;\n}\n.ant-table-fixed-left {\n  left: 0;\n  -webkit-box-shadow: 6px 0 6px -4px rgba(0, 0, 0, 0.15);\n          box-shadow: 6px 0 6px -4px rgba(0, 0, 0, 0.15);\n}\n.ant-table-fixed-left .ant-table-header {\n  overflow-y: hidden;\n}\n.ant-table-fixed-left .ant-table-body-inner {\n  margin-right: -20px;\n  padding-right: 20px;\n}\n.ant-table-fixed-header .ant-table-fixed-left .ant-table-body-inner {\n  padding-right: 0;\n}\n.ant-table-fixed-left,\n.ant-table-fixed-left table {\n  border-radius: 4px 0 0 0;\n}\n.ant-table-fixed-left .ant-table-thead > tr > th:last-child {\n  border-top-right-radius: 0;\n}\n.ant-table-fixed-right {\n  right: 0;\n  -webkit-box-shadow: -6px 0 6px -4px rgba(0, 0, 0, 0.15);\n          box-shadow: -6px 0 6px -4px rgba(0, 0, 0, 0.15);\n}\n.ant-table-fixed-right,\n.ant-table-fixed-right table {\n  border-radius: 0 4px 0 0;\n}\n.ant-table-fixed-right .ant-table-expanded-row {\n  color: transparent;\n  pointer-events: none;\n}\n.ant-table-fixed-right .ant-table-thead > tr > th:first-child {\n  border-top-left-radius: 0;\n}\n.ant-table.ant-table-scroll-position-left .ant-table-fixed-left {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.ant-table.ant-table-scroll-position-right .ant-table-fixed-right {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.ant-table-middle > .ant-table-title,\n.ant-table-middle > .ant-table-footer {\n  padding: 12px 8px;\n}\n.ant-table-middle > .ant-table-content > .ant-table-header > table > .ant-table-thead > tr > th,\n.ant-table-middle > .ant-table-content > .ant-table-body > table > .ant-table-thead > tr > th,\n.ant-table-middle > .ant-table-content > .ant-table-scroll > .ant-table-header > table > .ant-table-thead > tr > th,\n.ant-table-middle > .ant-table-content > .ant-table-scroll > .ant-table-body > table > .ant-table-thead > tr > th,\n.ant-table-middle > .ant-table-content > .ant-table-fixed-left > .ant-table-header > table > .ant-table-thead > tr > th,\n.ant-table-middle > .ant-table-content > .ant-table-fixed-right > .ant-table-header > table > .ant-table-thead > tr > th,\n.ant-table-middle > .ant-table-content > .ant-table-fixed-left > .ant-table-body-outer > .ant-table-body-inner > table > .ant-table-thead > tr > th,\n.ant-table-middle > .ant-table-content > .ant-table-fixed-right > .ant-table-body-outer > .ant-table-body-inner > table > .ant-table-thead > tr > th,\n.ant-table-middle > .ant-table-content > .ant-table-header > table > .ant-table-tbody > tr > td,\n.ant-table-middle > .ant-table-content > .ant-table-body > table > .ant-table-tbody > tr > td,\n.ant-table-middle > .ant-table-content > .ant-table-scroll > .ant-table-header > table > .ant-table-tbody > tr > td,\n.ant-table-middle > .ant-table-content > .ant-table-scroll > .ant-table-body > table > .ant-table-tbody > tr > td,\n.ant-table-middle > .ant-table-content > .ant-table-fixed-left > .ant-table-header > table > .ant-table-tbody > tr > td,\n.ant-table-middle > .ant-table-content > .ant-table-fixed-right > .ant-table-header > table > .ant-table-tbody > tr > td,\n.ant-table-middle > .ant-table-content > .ant-table-fixed-left > .ant-table-body-outer > .ant-table-body-inner > table > .ant-table-tbody > tr > td,\n.ant-table-middle > .ant-table-content > .ant-table-fixed-right > .ant-table-body-outer > .ant-table-body-inner > table > .ant-table-tbody > tr > td {\n  padding: 12px 8px;\n}\n.ant-table-small {\n  border: 1px solid #e8e8e8;\n  border-radius: 4px;\n}\n.ant-table-small > .ant-table-title,\n.ant-table-small > .ant-table-footer {\n  padding: 8px 8px;\n}\n.ant-table-small > .ant-table-title {\n  border-bottom: 1px solid #e8e8e8;\n  top: 0;\n}\n.ant-table-small > .ant-table-content > .ant-table-header > table,\n.ant-table-small > .ant-table-content > .ant-table-body > table,\n.ant-table-small > .ant-table-content > .ant-table-scroll > .ant-table-header > table,\n.ant-table-small > .ant-table-content > .ant-table-scroll > .ant-table-body > table,\n.ant-table-small > .ant-table-content > .ant-table-fixed-left > .ant-table-header > table,\n.ant-table-small > .ant-table-content > .ant-table-fixed-right > .ant-table-header > table,\n.ant-table-small > .ant-table-content > .ant-table-fixed-left > .ant-table-body-outer > .ant-table-body-inner > table,\n.ant-table-small > .ant-table-content > .ant-table-fixed-right > .ant-table-body-outer > .ant-table-body-inner > table {\n  border: 0;\n  padding: 0 8px;\n}\n.ant-table-small > .ant-table-content > .ant-table-header > table > .ant-table-thead > tr > th,\n.ant-table-small > .ant-table-content > .ant-table-body > table > .ant-table-thead > tr > th,\n.ant-table-small > .ant-table-content > .ant-table-scroll > .ant-table-header > table > .ant-table-thead > tr > th,\n.ant-table-small > .ant-table-content > .ant-table-scroll > .ant-table-body > table > .ant-table-thead > tr > th,\n.ant-table-small > .ant-table-content > .ant-table-fixed-left > .ant-table-header > table > .ant-table-thead > tr > th,\n.ant-table-small > .ant-table-content > .ant-table-fixed-right > .ant-table-header > table > .ant-table-thead > tr > th,\n.ant-table-small > .ant-table-content > .ant-table-fixed-left > .ant-table-body-outer > .ant-table-body-inner > table > .ant-table-thead > tr > th,\n.ant-table-small > .ant-table-content > .ant-table-fixed-right > .ant-table-body-outer > .ant-table-body-inner > table > .ant-table-thead > tr > th,\n.ant-table-small > .ant-table-content > .ant-table-header > table > .ant-table-tbody > tr > td,\n.ant-table-small > .ant-table-content > .ant-table-body > table > .ant-table-tbody > tr > td,\n.ant-table-small > .ant-table-content > .ant-table-scroll > .ant-table-header > table > .ant-table-tbody > tr > td,\n.ant-table-small > .ant-table-content > .ant-table-scroll > .ant-table-body > table > .ant-table-tbody > tr > td,\n.ant-table-small > .ant-table-content > .ant-table-fixed-left > .ant-table-header > table > .ant-table-tbody > tr > td,\n.ant-table-small > .ant-table-content > .ant-table-fixed-right > .ant-table-header > table > .ant-table-tbody > tr > td,\n.ant-table-small > .ant-table-content > .ant-table-fixed-left > .ant-table-body-outer > .ant-table-body-inner > table > .ant-table-tbody > tr > td,\n.ant-table-small > .ant-table-content > .ant-table-fixed-right > .ant-table-body-outer > .ant-table-body-inner > table > .ant-table-tbody > tr > td {\n  padding: 8px 8px;\n}\n.ant-table-small > .ant-table-content > .ant-table-header > table > .ant-table-thead > tr > th,\n.ant-table-small > .ant-table-content > .ant-table-body > table > .ant-table-thead > tr > th,\n.ant-table-small > .ant-table-content > .ant-table-scroll > .ant-table-header > table > .ant-table-thead > tr > th,\n.ant-table-small > .ant-table-content > .ant-table-scroll > .ant-table-body > table > .ant-table-thead > tr > th,\n.ant-table-small > .ant-table-content > .ant-table-fixed-left > .ant-table-header > table > .ant-table-thead > tr > th,\n.ant-table-small > .ant-table-content > .ant-table-fixed-right > .ant-table-header > table > .ant-table-thead > tr > th,\n.ant-table-small > .ant-table-content > .ant-table-fixed-left > .ant-table-body-outer > .ant-table-body-inner > table > .ant-table-thead > tr > th,\n.ant-table-small > .ant-table-content > .ant-table-fixed-right > .ant-table-body-outer > .ant-table-body-inner > table > .ant-table-thead > tr > th {\n  background: #fff;\n  border-bottom: 1px solid #e8e8e8;\n}\n.ant-table-small > .ant-table-content > .ant-table-scroll > .ant-table-header > table,\n.ant-table-small > .ant-table-content > .ant-table-scroll > .ant-table-body > table,\n.ant-table-small > .ant-table-content > .ant-table-fixed-left > .ant-table-header > table,\n.ant-table-small > .ant-table-content > .ant-table-fixed-right > .ant-table-header > table,\n.ant-table-small > .ant-table-content > .ant-table-fixed-left > .ant-table-body-outer > .ant-table-body-inner > table,\n.ant-table-small > .ant-table-content > .ant-table-fixed-right > .ant-table-body-outer > .ant-table-body-inner > table {\n  padding: 0;\n}\n.ant-table-small > .ant-table-content .ant-table-header {\n  background: #fff;\n}\n.ant-table-small > .ant-table-content .ant-table-placeholder,\n.ant-table-small > .ant-table-content .ant-table-row:last-child td {\n  border-bottom: 0;\n}\n.ant-table-small.ant-table-bordered {\n  border-right: 0;\n}\n.ant-table-small.ant-table-bordered .ant-table-title {\n  border: 0;\n  border-bottom: 1px solid #e8e8e8;\n  border-right: 1px solid #e8e8e8;\n}\n.ant-table-small.ant-table-bordered .ant-table-content {\n  border-right: 1px solid #e8e8e8;\n}\n.ant-table-small.ant-table-bordered .ant-table-footer {\n  border: 0;\n  border-top: 1px solid #e8e8e8;\n  border-right: 1px solid #e8e8e8;\n}\n.ant-table-small.ant-table-bordered .ant-table-footer:before {\n  display: none;\n}\n.ant-table-small.ant-table-bordered .ant-table-placeholder {\n  border-left: 0;\n  border-bottom: 0;\n}\n.ant-table-small.ant-table-bordered .ant-table-thead > tr > th:last-child,\n.ant-table-small.ant-table-bordered .ant-table-tbody > tr > td:last-child {\n  border-right: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/dom-closest/index.js":
/*!********************************************!*\
  !*** ../node_modules/dom-closest/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies
 */

var matches = __webpack_require__(/*! dom-matches */ "../node_modules/dom-matches/index.js");

/**
 * @param element {Element}
 * @param selector {String}
 * @param context {Element}
 * @return {Element}
 */
module.exports = function (element, selector, context) {
  context = context || document;
  // guard against orphans
  element = { parentNode: element };

  while ((element = element.parentNode) && element !== context) {
    if (matches(element, selector)) {
      return element;
    }
  }
};


/***/ }),

/***/ "../node_modules/dom-matches/index.js":
/*!********************************************!*\
  !*** ../node_modules/dom-matches/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determine if a DOM element matches a CSS selector
 *
 * @param {Element} elem
 * @param {String} selector
 * @return {Boolean}
 * @api public
 */

function matches(elem, selector) {
  // Vendor-specific implementations of `Element.prototype.matches()`.
  var proto = window.Element.prototype;
  var nativeMatches = proto.matches ||
      proto.mozMatchesSelector ||
      proto.msMatchesSelector ||
      proto.oMatchesSelector ||
      proto.webkitMatchesSelector;

  if (!elem || elem.nodeType !== 1) {
    return false;
  }

  var parentElem = elem.parentNode;

  // use native 'matches'
  if (nativeMatches) {
    return nativeMatches.call(elem, selector);
  }

  // native support for `matches` is missing and a fallback is required
  var nodes = parentElem.querySelectorAll(selector);
  var len = nodes.length;

  for (var i = 0; i < len; i++) {
    if (nodes[i] === elem) {
      return true;
    }
  }

  return false;
}

/**
 * Expose `matches`
 */

module.exports = matches;


/***/ }),

/***/ "../node_modules/lodash/_Stack.js":
/*!****************************************!*\
  !*** ../node_modules/lodash/_Stack.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "../node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "../node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "../node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "../node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "../node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "../node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "../node_modules/lodash/_Uint8Array.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_Uint8Array.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "../node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "../node_modules/lodash/_apply.js":
/*!****************************************!*\
  !*** ../node_modules/lodash/_apply.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "../node_modules/lodash/_arrayLikeKeys.js":
/*!************************************************!*\
  !*** ../node_modules/lodash/_arrayLikeKeys.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "../node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "../node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "../node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "../node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "../node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "../node_modules/lodash/_assignMergeValue.js":
/*!***************************************************!*\
  !*** ../node_modules/lodash/_assignMergeValue.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "../node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "../node_modules/lodash/eq.js");

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),

/***/ "../node_modules/lodash/_baseCreate.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_baseCreate.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "../node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "../node_modules/lodash/_baseFor.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/_baseFor.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "../node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "../node_modules/lodash/_baseIsTypedArray.js":
/*!***************************************************!*\
  !*** ../node_modules/lodash/_baseIsTypedArray.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "../node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "../node_modules/lodash/_baseKeysIn.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_baseKeysIn.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "../node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "../node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "../node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "../node_modules/lodash/_baseMerge.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_baseMerge.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "../node_modules/lodash/_Stack.js"),
    assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "../node_modules/lodash/_assignMergeValue.js"),
    baseFor = __webpack_require__(/*! ./_baseFor */ "../node_modules/lodash/_baseFor.js"),
    baseMergeDeep = __webpack_require__(/*! ./_baseMergeDeep */ "../node_modules/lodash/_baseMergeDeep.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../node_modules/lodash/isObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "../node_modules/lodash/keysIn.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "../node_modules/lodash/_safeGet.js");

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    if (isObject(srcValue)) {
      stack || (stack = new Stack);
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),

/***/ "../node_modules/lodash/_baseMergeDeep.js":
/*!************************************************!*\
  !*** ../node_modules/lodash/_baseMergeDeep.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__(/*! ./_assignMergeValue */ "../node_modules/lodash/_assignMergeValue.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "../node_modules/lodash/_cloneBuffer.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "../node_modules/lodash/_cloneTypedArray.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "../node_modules/lodash/_copyArray.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "../node_modules/lodash/_initCloneObject.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "../node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../node_modules/lodash/isArray.js"),
    isArrayLikeObject = __webpack_require__(/*! ./isArrayLikeObject */ "../node_modules/lodash/isArrayLikeObject.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "../node_modules/lodash/isBuffer.js"),
    isFunction = __webpack_require__(/*! ./isFunction */ "../node_modules/lodash/isFunction.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../node_modules/lodash/isObject.js"),
    isPlainObject = __webpack_require__(/*! ./isPlainObject */ "../node_modules/lodash/isPlainObject.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "../node_modules/lodash/isTypedArray.js"),
    safeGet = __webpack_require__(/*! ./_safeGet */ "../node_modules/lodash/_safeGet.js"),
    toPlainObject = __webpack_require__(/*! ./toPlainObject */ "../node_modules/lodash/toPlainObject.js");

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),

/***/ "../node_modules/lodash/_baseRest.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_baseRest.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ "../node_modules/lodash/identity.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "../node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "../node_modules/lodash/_setToString.js");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "../node_modules/lodash/_baseSetToString.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash/_baseSetToString.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(/*! ./constant */ "../node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "../node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "../node_modules/lodash/identity.js");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "../node_modules/lodash/_baseTimes.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_baseTimes.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "../node_modules/lodash/_baseUnary.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_baseUnary.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "../node_modules/lodash/_cloneArrayBuffer.js":
/*!***************************************************!*\
  !*** ../node_modules/lodash/_cloneArrayBuffer.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "../node_modules/lodash/_Uint8Array.js");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "../node_modules/lodash/_cloneBuffer.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_cloneBuffer.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "../node_modules/lodash/_root.js");

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/lodash/_cloneTypedArray.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash/_cloneTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "../node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "../node_modules/lodash/_copyArray.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_copyArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "../node_modules/lodash/_copyObject.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_copyObject.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "../node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "../node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "../node_modules/lodash/_createAssigner.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash/_createAssigner.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(/*! ./_baseRest */ "../node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "../node_modules/lodash/_isIterateeCall.js");

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ "../node_modules/lodash/_createBaseFor.js":
/*!************************************************!*\
  !*** ../node_modules/lodash/_createBaseFor.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "../node_modules/lodash/_getPrototype.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/_getPrototype.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "../node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "../node_modules/lodash/_initCloneObject.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash/_initCloneObject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "../node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "../node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "../node_modules/lodash/_isPrototype.js");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "../node_modules/lodash/_isIterateeCall.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash/_isIterateeCall.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "../node_modules/lodash/eq.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "../node_modules/lodash/isArrayLike.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "../node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../node_modules/lodash/isObject.js");

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ "../node_modules/lodash/_isPrototype.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_isPrototype.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "../node_modules/lodash/_nativeKeysIn.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/_nativeKeysIn.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "../node_modules/lodash/_nodeUtil.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_nodeUtil.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "../node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/lodash/_overArg.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/_overArg.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "../node_modules/lodash/_overRest.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_overRest.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ "../node_modules/lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "../node_modules/lodash/_safeGet.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/_safeGet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key`, unless `key` is "__proto__".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  return key == '__proto__'
    ? undefined
    : object[key];
}

module.exports = safeGet;


/***/ }),

/***/ "../node_modules/lodash/_setToString.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_setToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "../node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "../node_modules/lodash/_shortOut.js");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "../node_modules/lodash/_shortOut.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_shortOut.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "../node_modules/lodash/_stackClear.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_stackClear.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "../node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "../node_modules/lodash/_stackDelete.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_stackDelete.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "../node_modules/lodash/_stackGet.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_stackGet.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "../node_modules/lodash/_stackHas.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_stackHas.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "../node_modules/lodash/_stackSet.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_stackSet.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "../node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "../node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "../node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "../node_modules/lodash/constant.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/constant.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "../node_modules/lodash/identity.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/identity.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "../node_modules/lodash/isArrayLike.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/isArrayLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "../node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "../node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "../node_modules/lodash/isArrayLikeObject.js":
/*!***************************************************!*\
  !*** ../node_modules/lodash/isArrayLikeObject.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "../node_modules/lodash/isArrayLike.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../node_modules/lodash/isObjectLike.js");

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ "../node_modules/lodash/isBuffer.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/isBuffer.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "../node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "../node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/lodash/isPlainObject.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/isPlainObject.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "../node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ "../node_modules/lodash/isTypedArray.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/isTypedArray.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "../node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "../node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "../node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "../node_modules/lodash/keysIn.js":
/*!****************************************!*\
  !*** ../node_modules/lodash/keysIn.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "../node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "../node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "../node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "../node_modules/lodash/merge.js":
/*!***************************************!*\
  !*** ../node_modules/lodash/merge.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(/*! ./_baseMerge */ "../node_modules/lodash/_baseMerge.js"),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ "../node_modules/lodash/_createAssigner.js");

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;


/***/ }),

/***/ "../node_modules/lodash/stubFalse.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/stubFalse.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "../node_modules/lodash/toPlainObject.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/toPlainObject.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "../node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "../node_modules/lodash/keysIn.js");

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),

/***/ "../node_modules/rc-dropdown/es/Dropdown.js":
/*!**************************************************!*\
  !*** ../node_modules/rc-dropdown/es/Dropdown.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_trigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-trigger */ "../node_modules/rc-trigger/es/index.js");
/* harmony import */ var _placements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./placements */ "../node_modules/rc-dropdown/es/placements.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Dropdown = function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _initialiseProps.call(_this);

    if ('visible' in props) {
      _this.state = {
        visible: props.visible
      };
    } else {
      _this.state = {
        visible: props.defaultVisible
      };
    }
    return _this;
  }

  Dropdown.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref) {
    var visible = _ref.visible;

    if (visible !== undefined) {
      this.setState({
        visible: visible
      });
    }
  };

  Dropdown.prototype.getMenuElement = function getMenuElement() {
    var _props = this.props,
        overlay = _props.overlay,
        prefixCls = _props.prefixCls;

    var extraOverlayProps = {
      prefixCls: prefixCls + '-menu',
      onClick: this.onClick
    };
    if (typeof overlay.type === 'string') {
      delete extraOverlayProps.prefixCls;
    }
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(overlay, extraOverlayProps);
  };

  Dropdown.prototype.getPopupDomNode = function getPopupDomNode() {
    return this.trigger.getPopupDomNode();
  };

  Dropdown.prototype.render = function render() {
    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        children = _props2.children,
        transitionName = _props2.transitionName,
        animation = _props2.animation,
        align = _props2.align,
        placement = _props2.placement,
        getPopupContainer = _props2.getPopupContainer,
        showAction = _props2.showAction,
        hideAction = _props2.hideAction,
        overlayClassName = _props2.overlayClassName,
        overlayStyle = _props2.overlayStyle,
        trigger = _props2.trigger,
        otherProps = _objectWithoutProperties(_props2, ['prefixCls', 'children', 'transitionName', 'animation', 'align', 'placement', 'getPopupContainer', 'showAction', 'hideAction', 'overlayClassName', 'overlayStyle', 'trigger']);

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      rc_trigger__WEBPACK_IMPORTED_MODULE_3__["default"],
      _extends({}, otherProps, {
        prefixCls: prefixCls,
        ref: this.saveTrigger,
        popupClassName: overlayClassName,
        popupStyle: overlayStyle,
        builtinPlacements: _placements__WEBPACK_IMPORTED_MODULE_4__["default"],
        action: trigger,
        showAction: showAction,
        hideAction: hideAction,
        popupPlacement: placement,
        popupAlign: align,
        popupTransitionName: transitionName,
        popupAnimation: animation,
        popupVisible: this.state.visible,
        afterPopupVisibleChange: this.afterVisibleChange,
        popup: this.getMenuElement(),
        onPopupVisibleChange: this.onVisibleChange,
        getPopupContainer: getPopupContainer
      }),
      children
    );
  };

  return Dropdown;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Dropdown.propTypes = {
  minOverlayWidthMatchTrigger: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onVisibleChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onOverlayClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  transitionName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  overlayClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  animation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  align: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  overlayStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  placement: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  overlay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  trigger: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  showAction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  hideAction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  getPopupContainer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  visible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  defaultVisible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
Dropdown.defaultProps = {
  minOverlayWidthMatchTrigger: true,
  prefixCls: 'rc-dropdown',
  trigger: ['hover'],
  showAction: [],
  hideAction: [],
  overlayClassName: '',
  overlayStyle: {},
  defaultVisible: false,
  onVisibleChange: function onVisibleChange() {},

  placement: 'bottomLeft'
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onClick = function (e) {
    var props = _this2.props;
    var overlayProps = props.overlay.props;
    // do no call onVisibleChange, if you need click to hide, use onClick and control visible
    if (!('visible' in props)) {
      _this2.setState({
        visible: false
      });
    }
    if (props.onOverlayClick) {
      props.onOverlayClick(e);
    }
    if (overlayProps.onClick) {
      overlayProps.onClick(e);
    }
  };

  this.onVisibleChange = function (visible) {
    var props = _this2.props;
    if (!('visible' in props)) {
      _this2.setState({
        visible: visible
      });
    }
    props.onVisibleChange(visible);
  };

  this.afterVisibleChange = function (visible) {
    if (visible && _this2.props.minOverlayWidthMatchTrigger) {
      var overlayNode = _this2.getPopupDomNode();
      var rootNode = react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.findDOMNode(_this2);
      if (rootNode && overlayNode && rootNode.offsetWidth > overlayNode.offsetWidth) {
        overlayNode.style.minWidth = rootNode.offsetWidth + 'px';
        if (_this2.trigger && _this2.trigger._component && _this2.trigger._component.alignInstance) {
          _this2.trigger._component.alignInstance.forceAlign();
        }
      }
    }
  };

  this.saveTrigger = function (node) {
    _this2.trigger = node;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

/***/ }),

/***/ "../node_modules/rc-dropdown/es/index.js":
/*!***********************************************!*\
  !*** ../node_modules/rc-dropdown/es/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdown */ "../node_modules/rc-dropdown/es/Dropdown.js");

/* harmony default export */ __webpack_exports__["default"] = (_Dropdown__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../node_modules/rc-dropdown/es/placements.js":
/*!****************************************************!*\
  !*** ../node_modules/rc-dropdown/es/placements.js ***!
  \****************************************************/
/*! exports provided: placements, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return placements; });
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};

var targetOffset = [0, 0];

var placements = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  topCenter: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  bottomCenter: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  }
};

/* harmony default export */ __webpack_exports__["default"] = (placements);

/***/ }),

/***/ "../node_modules/rc-pagination/es/KeyCode.js":
/*!***************************************************!*\
  !*** ../node_modules/rc-pagination/es/KeyCode.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  ZERO: 48,
  NINE: 57,

  NUMPAD_ZERO: 96,
  NUMPAD_NINE: 105,

  BACKSPACE: 8,
  DELETE: 46,
  ENTER: 13,

  ARROW_UP: 38,
  ARROW_DOWN: 40
});

/***/ }),

/***/ "../node_modules/rc-pagination/es/Options.js":
/*!***************************************************!*\
  !*** ../node_modules/rc-pagination/es/Options.js ***!
  \***************************************************/
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
/* harmony import */ var _KeyCode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./KeyCode */ "../node_modules/rc-pagination/es/KeyCode.js");








var Options = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Options, _React$Component);

  function Options(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Options);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

    _this.buildOptionText = function (value) {
      return value + ' ' + _this.props.locale.items_per_page;
    };

    _this.changeSize = function (value) {
      _this.props.changeSize(Number(value));
    };

    _this.handleChange = function (e) {
      _this.setState({
        goInputText: e.target.value
      });
    };

    _this.go = function (e) {
      var val = _this.state.goInputText;
      if (val === '') {
        return;
      }
      val = isNaN(val) ? _this.props.current : Number(val);
      if (e.keyCode === _KeyCode__WEBPACK_IMPORTED_MODULE_6__["default"].ENTER || e.type === 'click') {
        _this.setState({
          goInputText: ''
        });
        _this.props.quickGo(val);
      }
    };

    _this.state = {
      goInputText: ''
    };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Options, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var state = this.state;
      var locale = props.locale;
      var prefixCls = props.rootPrefixCls + '-options';
      var changeSize = props.changeSize;
      var quickGo = props.quickGo;
      var goButton = props.goButton;
      var buildOptionText = props.buildOptionText || this.buildOptionText;
      var Select = props.selectComponentClass;
      var changeSelect = null;
      var goInput = null;
      var gotoButton = null;

      if (!(changeSize || quickGo)) {
        return null;
      }

      if (changeSize && Select) {
        var Option = Select.Option;
        var pageSize = props.pageSize || props.pageSizeOptions[0];
        var options = props.pageSizeOptions.map(function (opt, i) {
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            Option,
            { key: i, value: opt },
            buildOptionText(opt)
          );
        });

        changeSelect = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          Select,
          {
            prefixCls: props.selectPrefixCls,
            showSearch: false,
            className: prefixCls + '-size-changer',
            optionLabelProp: 'children',
            dropdownMatchSelectWidth: false,
            value: pageSize.toString(),
            onChange: this.changeSize,
            getPopupContainer: function getPopupContainer(triggerNode) {
              return triggerNode.parentNode;
            }
          },
          options
        );
      }

      if (quickGo) {
        if (goButton) {
          if (typeof goButton === 'boolean') {
            gotoButton = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              'button',
              {
                type: 'button',
                onClick: this.go,
                onKeyUp: this.go
              },
              locale.jump_to_confirm
            );
          } else {
            gotoButton = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              'span',
              {
                onClick: this.go,
                onKeyUp: this.go
              },
              goButton
            );
          }
        }
        goInput = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          'div',
          { className: prefixCls + '-quick-jumper' },
          locale.jump_to,
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement('input', {
            type: 'text',
            value: state.goInputText,
            onChange: this.handleChange,
            onKeyUp: this.go
          }),
          locale.page,
          gotoButton
        );
      }

      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
        'li',
        { className: '' + prefixCls },
        changeSelect,
        goInput
      );
    }
  }]);

  return Options;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Options.propTypes = {
  changeSize: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  quickGo: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  selectComponentClass: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  current: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  pageSizeOptions: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string),
  pageSize: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  buildOptionText: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  locale: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object
};
Options.defaultProps = {
  pageSizeOptions: ['10', '20', '30', '40']
};


/* harmony default export */ __webpack_exports__["default"] = (Options);

/***/ }),

/***/ "../node_modules/rc-pagination/es/Pager.js":
/*!*************************************************!*\
  !*** ../node_modules/rc-pagination/es/Pager.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var Pager = function Pager(props) {
  var prefixCls = props.rootPrefixCls + '-item';
  var cls = prefixCls + ' ' + prefixCls + '-' + props.page;

  if (props.active) {
    cls = cls + ' ' + prefixCls + '-active';
  }

  if (props.className) {
    cls = cls + ' ' + props.className;
  }

  var handleClick = function handleClick() {
    props.onClick(props.page);
  };

  var handleKeyPress = function handleKeyPress(e) {
    props.onKeyPress(e, props.onClick, props.page);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'li',
    {
      title: props.showTitle ? props.page : null,
      className: cls,
      onClick: handleClick,
      onKeyPress: handleKeyPress,
      tabIndex: '0'
    },
    props.itemRender(props.page, 'page', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'a',
      null,
      props.page
    ))
  );
};

Pager.propTypes = {
  page: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  last: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  locale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  showTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  rootPrefixCls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onKeyPress: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  itemRender: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/* harmony default export */ __webpack_exports__["default"] = (Pager);

/***/ }),

/***/ "../node_modules/rc-pagination/es/Pagination.js":
/*!******************************************************!*\
  !*** ../node_modules/rc-pagination/es/Pagination.js ***!
  \******************************************************/
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
/* harmony import */ var _Pager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Pager */ "../node_modules/rc-pagination/es/Pager.js");
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Options */ "../node_modules/rc-pagination/es/Options.js");
/* harmony import */ var _KeyCode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./KeyCode */ "../node_modules/rc-pagination/es/KeyCode.js");
/* harmony import */ var _locale_zh_CN__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./locale/zh_CN */ "../node_modules/rc-pagination/es/locale/zh_CN.js");











function noop() {}

function isInteger(value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}

function defaultItemRender(page, type, element) {
  return element;
}

var Pagination = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Pagination, _React$Component);

  function Pagination(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Pagination);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

    _initialiseProps.call(_this);

    var hasOnChange = props.onChange !== noop;
    var hasCurrent = 'current' in props;
    if (hasCurrent && !hasOnChange) {
      console.warn('Warning: You provided a `current` prop to a Pagination component without an `onChange` handler. This will render a read-only component.'); // eslint-disable-line
    }

    var current = props.defaultCurrent;
    if ('current' in props) {
      current = props.current;
    }

    var pageSize = props.defaultPageSize;
    if ('pageSize' in props) {
      pageSize = props.pageSize;
    }

    _this.state = {
      current: current,
      currentInputValue: current,
      pageSize: pageSize
    };
    return _this;
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Pagination, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('current' in nextProps) {
        this.setState({
          current: nextProps.current,
          currentInputValue: nextProps.current
        });
      }

      if ('pageSize' in nextProps) {
        var newState = {};
        var current = this.state.current;
        var newCurrent = this.calculatePage(nextProps.pageSize);
        current = current > newCurrent ? newCurrent : current;
        if (!('current' in nextProps)) {
          newState.current = current;
          newState.currentInputValue = current;
        }
        newState.pageSize = nextProps.pageSize;
        this.setState(newState);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      // When current page change, fix focused style of prev item
      // A hacky solution of https://github.com/ant-design/ant-design/issues/8948
      var prefixCls = this.props.prefixCls;

      if (prevState.current !== this.state.current && this.paginationNode) {
        var lastCurrentNode = this.paginationNode.querySelector('.' + prefixCls + '-item-' + prevState.current);
        if (lastCurrentNode && document.activeElement === lastCurrentNode) {
          lastCurrentNode.blur();
        }
      }
    }
  }, {
    key: 'getJumpPrevPage',
    value: function getJumpPrevPage() {
      return Math.max(1, this.state.current - (this.props.showLessItems ? 3 : 5));
    }
  }, {
    key: 'getJumpNextPage',
    value: function getJumpNextPage() {
      return Math.min(this.calculatePage(), this.state.current + (this.props.showLessItems ? 3 : 5));
    }
  }, {
    key: 'getJumpPrevPage',
    value: function getJumpPrevPage() {
      return Math.max(1, this.state.current - (this.props.showLessItems ? 3 : 5));
    }
  }, {
    key: 'getJumpNextPage',
    value: function getJumpNextPage() {
      return Math.min(this.calculatePage(), this.state.current + (this.props.showLessItems ? 3 : 5));
    }
  }, {
    key: 'render',
    value: function render() {
      // When hideOnSinglePage is true and there is only 1 page, hide the pager
      if (this.props.hideOnSinglePage === true && this.props.total <= this.state.pageSize) {
        return null;
      }

      var props = this.props;
      var locale = props.locale;

      var prefixCls = props.prefixCls;
      var allPages = this.calculatePage();
      var pagerList = [];
      var jumpPrev = null;
      var jumpNext = null;
      var firstPager = null;
      var lastPager = null;
      var gotoButton = null;

      var goButton = props.showQuickJumper && props.showQuickJumper.goButton;
      var pageBufferSize = props.showLessItems ? 1 : 2;
      var _state = this.state,
          current = _state.current,
          pageSize = _state.pageSize;


      var prevPage = current - 1 > 0 ? current - 1 : 0;
      var nextPage = current + 1 < allPages ? current + 1 : allPages;

      if (props.simple) {
        if (goButton) {
          if (typeof goButton === 'boolean') {
            gotoButton = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              'button',
              {
                type: 'button',
                onClick: this.handleGoTO,
                onKeyUp: this.handleGoTO
              },
              locale.jump_to_confirm
            );
          } else {
            gotoButton = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              'span',
              {
                onClick: this.handleGoTO,
                onKeyUp: this.handleGoTO
              },
              goButton
            );
          }
          gotoButton = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'li',
            {
              title: props.showTitle ? '' + locale.jump_to + this.state.current + '/' + allPages : null,
              className: prefixCls + '-simple-pager'
            },
            gotoButton
          );
        }

        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          'ul',
          { className: prefixCls + ' ' + prefixCls + '-simple ' + props.className, style: props.style },
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'li',
            {
              title: props.showTitle ? locale.prev_page : null,
              onClick: this.prev,
              tabIndex: this.hasPrev() ? 0 : null,
              onKeyPress: this.runIfEnterPrev,
              className: (this.hasPrev() ? '' : prefixCls + '-disabled') + ' ' + prefixCls + '-prev',
              'aria-disabled': !this.hasPrev()
            },
            props.itemRender(prevPage, 'prev', react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement('a', { className: prefixCls + '-item-link' }))
          ),
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'li',
            {
              title: props.showTitle ? this.state.current + '/' + allPages : null,
              className: prefixCls + '-simple-pager'
            },
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement('input', {
              type: 'text',
              value: this.state.currentInputValue,
              onKeyDown: this.handleKeyDown,
              onKeyUp: this.handleKeyUp,
              onChange: this.handleKeyUp,
              size: '3'
            }),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              'span',
              { className: prefixCls + '-slash' },
              '\uFF0F'
            ),
            allPages
          ),
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'li',
            {
              title: props.showTitle ? locale.next_page : null,
              onClick: this.next,
              tabIndex: this.hasPrev() ? 0 : null,
              onKeyPress: this.runIfEnterNext,
              className: (this.hasNext() ? '' : prefixCls + '-disabled') + ' ' + prefixCls + '-next',
              'aria-disabled': !this.hasNext()
            },
            props.itemRender(nextPage, 'next', react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement('a', { className: prefixCls + '-item-link' }))
          ),
          gotoButton
        );
      }

      if (allPages <= 5 + pageBufferSize * 2) {
        for (var i = 1; i <= allPages; i++) {
          var active = this.state.current === i;
          pagerList.push(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Pager__WEBPACK_IMPORTED_MODULE_6__["default"], {
            locale: locale,
            rootPrefixCls: prefixCls,
            onClick: this.handleChange,
            onKeyPress: this.runIfEnter,
            key: i,
            page: i,
            active: active,
            showTitle: props.showTitle,
            itemRender: props.itemRender
          }));
        }
      } else {
        var prevItemTitle = props.showLessItems ? locale.prev_3 : locale.prev_5;
        var nextItemTitle = props.showLessItems ? locale.next_3 : locale.next_5;
        if (props.showPrevNextJumpers) {
          jumpPrev = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'li',
            {
              title: props.showTitle ? prevItemTitle : null,
              key: 'prev',
              onClick: this.jumpPrev,
              tabIndex: '0',
              onKeyPress: this.runIfEnterJumpPrev,
              className: prefixCls + '-jump-prev'
            },
            props.itemRender(this.getJumpPrevPage(), 'jump-prev', react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement('a', { className: prefixCls + '-item-link' }))
          );
          jumpNext = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'li',
            {
              title: props.showTitle ? nextItemTitle : null,
              key: 'next',
              tabIndex: '0',
              onClick: this.jumpNext,
              onKeyPress: this.runIfEnterJumpNext,
              className: prefixCls + '-jump-next'
            },
            props.itemRender(this.getJumpNextPage(), 'jump-next', react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement('a', { className: prefixCls + '-item-link' }))
          );
        }
        lastPager = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Pager__WEBPACK_IMPORTED_MODULE_6__["default"], {
          locale: props.locale,
          last: true,
          rootPrefixCls: prefixCls,
          onClick: this.handleChange,
          onKeyPress: this.runIfEnter,
          key: allPages,
          page: allPages,
          active: false,
          showTitle: props.showTitle,
          itemRender: props.itemRender
        });
        firstPager = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Pager__WEBPACK_IMPORTED_MODULE_6__["default"], {
          locale: props.locale,
          rootPrefixCls: prefixCls,
          onClick: this.handleChange,
          onKeyPress: this.runIfEnter,
          key: 1,
          page: 1,
          active: false,
          showTitle: props.showTitle,
          itemRender: props.itemRender
        });

        var left = Math.max(1, current - pageBufferSize);
        var right = Math.min(current + pageBufferSize, allPages);

        if (current - 1 <= pageBufferSize) {
          right = 1 + pageBufferSize * 2;
        }

        if (allPages - current <= pageBufferSize) {
          left = allPages - pageBufferSize * 2;
        }

        for (var _i = left; _i <= right; _i++) {
          var _active = current === _i;
          pagerList.push(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Pager__WEBPACK_IMPORTED_MODULE_6__["default"], {
            locale: props.locale,
            rootPrefixCls: prefixCls,
            onClick: this.handleChange,
            onKeyPress: this.runIfEnter,
            key: _i,
            page: _i,
            active: _active,
            showTitle: props.showTitle,
            itemRender: props.itemRender
          }));
        }

        if (current - 1 >= pageBufferSize * 2 && current !== 1 + 2) {
          pagerList[0] = react__WEBPACK_IMPORTED_MODULE_4___default.a.cloneElement(pagerList[0], {
            className: prefixCls + '-item-after-jump-prev'
          });
          pagerList.unshift(jumpPrev);
        }
        if (allPages - current >= pageBufferSize * 2 && current !== allPages - 2) {
          pagerList[pagerList.length - 1] = react__WEBPACK_IMPORTED_MODULE_4___default.a.cloneElement(pagerList[pagerList.length - 1], {
            className: prefixCls + '-item-before-jump-next'
          });
          pagerList.push(jumpNext);
        }

        if (left !== 1) {
          pagerList.unshift(firstPager);
        }
        if (right !== allPages) {
          pagerList.push(lastPager);
        }
      }

      var totalText = null;

      if (props.showTotal) {
        totalText = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          'li',
          { className: prefixCls + '-total-text' },
          props.showTotal(props.total, [(current - 1) * pageSize + 1, current * pageSize > props.total ? props.total : current * pageSize])
        );
      }
      var prevDisabled = !this.hasPrev();
      var nextDisabled = !this.hasNext();
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
        'ul',
        {
          className: prefixCls + ' ' + props.className,
          style: props.style,
          unselectable: 'unselectable',
          ref: this.savePaginationNode
        },
        totalText,
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          'li',
          {
            title: props.showTitle ? locale.prev_page : null,
            onClick: this.prev,
            tabIndex: prevDisabled ? null : 0,
            onKeyPress: this.runIfEnterPrev,
            className: (!prevDisabled ? '' : prefixCls + '-disabled') + ' ' + prefixCls + '-prev',
            'aria-disabled': prevDisabled
          },
          props.itemRender(prevPage, 'prev', react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement('a', { className: prefixCls + '-item-link' }))
        ),
        pagerList,
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          'li',
          {
            title: props.showTitle ? locale.next_page : null,
            onClick: this.next,
            tabIndex: nextDisabled ? null : 0,
            onKeyPress: this.runIfEnterNext,
            className: (!nextDisabled ? '' : prefixCls + '-disabled') + ' ' + prefixCls + '-next',
            'aria-disabled': nextDisabled
          },
          props.itemRender(nextPage, 'next', react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement('a', { className: prefixCls + '-item-link' }))
        ),
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Options__WEBPACK_IMPORTED_MODULE_7__["default"], {
          locale: props.locale,
          rootPrefixCls: prefixCls,
          selectComponentClass: props.selectComponentClass,
          selectPrefixCls: props.selectPrefixCls,
          changeSize: this.props.showSizeChanger ? this.changePageSize : null,
          current: this.state.current,
          pageSize: this.state.pageSize,
          pageSizeOptions: this.props.pageSizeOptions,
          quickGo: this.props.showQuickJumper ? this.handleChange : null,
          goButton: goButton
        })
      );
    }
  }]);

  return Pagination;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Pagination.propTypes = {
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  current: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  defaultCurrent: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  total: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  pageSize: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  defaultPageSize: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  hideOnSinglePage: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  showSizeChanger: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  showLessItems: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  onShowSizeChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  selectComponentClass: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  showPrevNextJumpers: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  showQuickJumper: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object]),
  showTitle: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  pageSizeOptions: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string),
  showTotal: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  locale: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  style: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  itemRender: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func
};
Pagination.defaultProps = {
  defaultCurrent: 1,
  total: 0,
  defaultPageSize: 10,
  onChange: noop,
  className: '',
  selectPrefixCls: 'rc-select',
  prefixCls: 'rc-pagination',
  selectComponentClass: null,
  hideOnSinglePage: false,
  showPrevNextJumpers: true,
  showQuickJumper: false,
  showSizeChanger: false,
  showLessItems: false,
  showTitle: true,
  onShowSizeChange: noop,
  locale: _locale_zh_CN__WEBPACK_IMPORTED_MODULE_9__["default"],
  style: {},
  itemRender: defaultItemRender
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.savePaginationNode = function (node) {
    _this2.paginationNode = node;
  };

  this.calculatePage = function (p) {
    var pageSize = p;
    if (typeof pageSize === 'undefined') {
      pageSize = _this2.state.pageSize;
    }
    return Math.floor((_this2.props.total - 1) / pageSize) + 1;
  };

  this.isValid = function (page) {
    return isInteger(page) && page >= 1 && page !== _this2.state.current;
  };

  this.handleKeyDown = function (e) {
    if (e.keyCode === _KeyCode__WEBPACK_IMPORTED_MODULE_8__["default"].ARROW_UP || e.keyCode === _KeyCode__WEBPACK_IMPORTED_MODULE_8__["default"].ARROW_DOWN) {
      e.preventDefault();
    }
  };

  this.handleKeyUp = function (e) {
    var inputValue = e.target.value;
    var currentInputValue = _this2.state.currentInputValue;
    var value = void 0;

    if (inputValue === '') {
      value = inputValue;
    } else if (isNaN(Number(inputValue))) {
      value = currentInputValue;
    } else {
      value = Number(inputValue);
    }

    if (value !== currentInputValue) {
      _this2.setState({
        currentInputValue: value
      });
    }

    if (e.keyCode === _KeyCode__WEBPACK_IMPORTED_MODULE_8__["default"].ENTER) {
      _this2.handleChange(value);
    } else if (e.keyCode === _KeyCode__WEBPACK_IMPORTED_MODULE_8__["default"].ARROW_UP) {
      _this2.handleChange(value - 1);
    } else if (e.keyCode === _KeyCode__WEBPACK_IMPORTED_MODULE_8__["default"].ARROW_DOWN) {
      _this2.handleChange(value + 1);
    }
  };

  this.changePageSize = function (size) {
    var current = _this2.state.current;
    var newCurrent = _this2.calculatePage(size);
    current = current > newCurrent ? newCurrent : current;
    if (typeof size === 'number') {
      if (!('pageSize' in _this2.props)) {
        _this2.setState({
          pageSize: size
        });
      }
      if (!('current' in _this2.props)) {
        _this2.setState({
          current: current,
          currentInputValue: current
        });
      }
    }
    _this2.props.onShowSizeChange(current, size);
  };

  this.handleChange = function (p) {
    var page = p;
    if (_this2.isValid(page)) {
      if (page > _this2.calculatePage()) {
        page = _this2.calculatePage();
      }

      if (!('current' in _this2.props)) {
        _this2.setState({
          current: page,
          currentInputValue: page
        });
      }

      var pageSize = _this2.state.pageSize;
      _this2.props.onChange(page, pageSize);

      return page;
    }

    return _this2.state.current;
  };

  this.prev = function () {
    if (_this2.hasPrev()) {
      _this2.handleChange(_this2.state.current - 1);
    }
  };

  this.next = function () {
    if (_this2.hasNext()) {
      _this2.handleChange(_this2.state.current + 1);
    }
  };

  this.jumpPrev = function () {
    _this2.handleChange(_this2.getJumpPrevPage());
  };

  this.jumpNext = function () {
    _this2.handleChange(_this2.getJumpNextPage());
  };

  this.hasPrev = function () {
    return _this2.state.current > 1;
  };

  this.hasNext = function () {
    return _this2.state.current < _this2.calculatePage();
  };

  this.runIfEnter = function (event, callback) {
    for (var _len = arguments.length, restParams = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      restParams[_key - 2] = arguments[_key];
    }

    if (event.key === 'Enter' || event.charCode === 13) {
      callback.apply(undefined, restParams);
    }
  };

  this.runIfEnterPrev = function (e) {
    _this2.runIfEnter(e, _this2.prev);
  };

  this.runIfEnterNext = function (e) {
    _this2.runIfEnter(e, _this2.next);
  };

  this.runIfEnterJumpPrev = function (e) {
    _this2.runIfEnter(e, _this2.jumpPrev);
  };

  this.runIfEnterJumpNext = function (e) {
    _this2.runIfEnter(e, _this2.jumpNext);
  };

  this.handleGoTO = function (e) {
    if (e.keyCode === _KeyCode__WEBPACK_IMPORTED_MODULE_8__["default"].ENTER || e.type === 'click') {
      _this2.handleChange(_this2.state.currentInputValue);
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "../node_modules/rc-pagination/es/index.js":
/*!*************************************************!*\
  !*** ../node_modules/rc-pagination/es/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagination */ "../node_modules/rc-pagination/es/Pagination.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Pagination__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../node_modules/rc-pagination/es/locale/zh_CN.js":
/*!********************************************************!*\
  !*** ../node_modules/rc-pagination/es/locale/zh_CN.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // Options.jsx
  items_per_page: '条/页',
  jump_to: '跳至',
  jump_to_confirm: '确定',
  page: '页',

  // Pagination.jsx
  prev_page: '上一页',
  next_page: '下一页',
  prev_5: '向前 5 页',
  next_5: '向后 5 页',
  prev_3: '向前 3 页',
  next_3: '向后 3 页'
});

/***/ }),

/***/ "../node_modules/rc-table/es/BaseTable.js":
/*!************************************************!*\
  !*** ../node_modules/rc-table/es/BaseTable.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mini_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mini-store */ "../node_modules/mini-store/lib/index.js");
/* harmony import */ var mini_store__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mini_store__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ColGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ColGroup */ "../node_modules/rc-table/es/ColGroup.js");
/* harmony import */ var _TableHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TableHeader */ "../node_modules/rc-table/es/TableHeader.js");
/* harmony import */ var _TableRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TableRow */ "../node_modules/rc-table/es/TableRow.js");
/* harmony import */ var _ExpandableRow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ExpandableRow */ "../node_modules/rc-table/es/ExpandableRow.js");












var BaseTable = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(BaseTable, _React$Component);

  function BaseTable() {
    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, BaseTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleRowHover = function (isHover, key) {
      _this.props.store.setState({
        currentHoverKey: isHover ? key : null
      });
    }, _this.renderRows = function (renderData, indent) {
      var ancestorKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var table = _this.context.table;
      var columnManager = table.columnManager,
          components = table.components;
      var _table$props = table.props,
          prefixCls = _table$props.prefixCls,
          childrenColumnName = _table$props.childrenColumnName,
          rowClassName = _table$props.rowClassName,
          rowRef = _table$props.rowRef,
          onRowClick = _table$props.onRowClick,
          onRowDoubleClick = _table$props.onRowDoubleClick,
          onRowContextMenu = _table$props.onRowContextMenu,
          onRowMouseEnter = _table$props.onRowMouseEnter,
          onRowMouseLeave = _table$props.onRowMouseLeave,
          onRow = _table$props.onRow;
      var _this$props = _this.props,
          getRowKey = _this$props.getRowKey,
          fixed = _this$props.fixed,
          expander = _this$props.expander,
          isAnyColumnsFixed = _this$props.isAnyColumnsFixed;


      var rows = [];

      var _loop = function _loop(i) {
        var record = renderData[i];
        var key = getRowKey(record, i);
        var className = typeof rowClassName === 'string' ? rowClassName : rowClassName(record, i, indent);

        var onHoverProps = {};
        if (columnManager.isAnyColumnsFixed()) {
          onHoverProps.onHover = _this.handleRowHover;
        }

        var leafColumns = void 0;
        if (fixed === 'left') {
          leafColumns = columnManager.leftLeafColumns();
        } else if (fixed === 'right') {
          leafColumns = columnManager.rightLeafColumns();
        } else {
          leafColumns = columnManager.leafColumns();
        }

        var rowPrefixCls = prefixCls + '-row';

        var row = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          _ExpandableRow__WEBPACK_IMPORTED_MODULE_10__["default"],
          babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, expander.props, {
            fixed: fixed,
            index: i,
            prefixCls: rowPrefixCls,
            record: record,
            key: key,
            rowKey: key,
            onRowClick: onRowClick,
            needIndentSpaced: expander.needIndentSpaced,
            onExpandedChange: expander.handleExpandChange
          }),
          function (expandableRow) {
            return (// eslint-disable-line
              react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_TableRow__WEBPACK_IMPORTED_MODULE_9__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
                fixed: fixed,
                indent: indent,
                className: className,
                record: record,
                index: i,
                prefixCls: rowPrefixCls,
                childrenColumnName: childrenColumnName,
                columns: leafColumns,
                onRow: onRow,
                onRowDoubleClick: onRowDoubleClick,
                onRowContextMenu: onRowContextMenu,
                onRowMouseEnter: onRowMouseEnter,
                onRowMouseLeave: onRowMouseLeave
              }, onHoverProps, {
                rowKey: key,
                ancestorKeys: ancestorKeys,
                ref: rowRef(record, i, indent),
                components: components,
                isAnyColumnsFixed: isAnyColumnsFixed
              }, expandableRow))
            );
          }
        );

        rows.push(row);

        expander.renderRows(_this.renderRows, rows, record, i, indent, fixed, key, ancestorKeys);
      };

      for (var i = 0; i < renderData.length; i++) {
        _loop(i);
      }
      return rows;
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(_this, _ret);
  }

  BaseTable.prototype.render = function render() {
    var table = this.context.table;
    var components = table.components;
    var _table$props2 = table.props,
        prefixCls = _table$props2.prefixCls,
        scroll = _table$props2.scroll,
        data = _table$props2.data,
        getBodyWrapper = _table$props2.getBodyWrapper;
    var _props = this.props,
        expander = _props.expander,
        tableClassName = _props.tableClassName,
        hasHead = _props.hasHead,
        hasBody = _props.hasBody,
        fixed = _props.fixed,
        columns = _props.columns;

    var tableStyle = {};

    if (!fixed && scroll.x) {
      // not set width, then use content fixed width
      if (scroll.x === true) {
        tableStyle.tableLayout = 'fixed';
      } else {
        tableStyle.width = scroll.x;
      }
    }

    var Table = hasBody ? components.table : 'table';
    var BodyWrapper = components.body.wrapper;

    var body = void 0;
    if (hasBody) {
      body = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
        BodyWrapper,
        { className: prefixCls + '-tbody' },
        this.renderRows(data, 0)
      );
      if (getBodyWrapper) {
        body = getBodyWrapper(body);
      }
    }

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
      Table,
      { className: tableClassName, style: tableStyle, key: 'table' },
      react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_ColGroup__WEBPACK_IMPORTED_MODULE_7__["default"], { columns: columns, fixed: fixed }),
      hasHead && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_TableHeader__WEBPACK_IMPORTED_MODULE_8__["default"], { expander: expander, columns: columns, fixed: fixed }),
      body
    );
  };

  return BaseTable;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

BaseTable.propTypes = {
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool]),
  columns: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array.isRequired,
  tableClassName: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
  hasHead: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool.isRequired,
  hasBody: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool.isRequired,
  store: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,
  expander: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,
  getRowKey: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  isAnyColumnsFixed: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool
};
BaseTable.contextTypes = {
  table: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any
};


/* harmony default export */ __webpack_exports__["default"] = (Object(mini_store__WEBPACK_IMPORTED_MODULE_6__["connect"])()(BaseTable));

/***/ }),

/***/ "../node_modules/rc-table/es/BodyTable.js":
/*!************************************************!*\
  !*** ../node_modules/rc-table/es/BodyTable.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BodyTable; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "../node_modules/rc-table/es/utils.js");
/* harmony import */ var _BaseTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BaseTable */ "../node_modules/rc-table/es/BaseTable.js");






function BodyTable(props, _ref) {
  var table = _ref.table;
  var _table$props = table.props,
      prefixCls = _table$props.prefixCls,
      scroll = _table$props.scroll;
  var columns = props.columns,
      fixed = props.fixed,
      tableClassName = props.tableClassName,
      getRowKey = props.getRowKey,
      handleBodyScroll = props.handleBodyScroll,
      handleWheel = props.handleWheel,
      expander = props.expander,
      isAnyColumnsFixed = props.isAnyColumnsFixed;
  var saveRef = table.saveRef;
  var useFixedHeader = table.props.useFixedHeader;

  var bodyStyle = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, table.props.bodyStyle);
  var innerBodyStyle = {};

  if (scroll.x || fixed) {
    bodyStyle.overflowX = bodyStyle.overflowX || 'auto';
    // Fix weired webkit render bug
    // https://github.com/ant-design/ant-design/issues/7783
    bodyStyle.WebkitTransform = 'translate3d (0, 0, 0)';
  }

  if (scroll.y) {
    // maxHeight will make fixed-Table scrolling not working
    // so we only set maxHeight to body-Table here
    if (fixed) {
      innerBodyStyle.maxHeight = bodyStyle.maxHeight || scroll.y;
      innerBodyStyle.overflowY = bodyStyle.overflowY || 'scroll';
    } else {
      bodyStyle.maxHeight = bodyStyle.maxHeight || scroll.y;
    }
    bodyStyle.overflowY = bodyStyle.overflowY || 'scroll';
    useFixedHeader = true;

    // Add negative margin bottom for scroll bar overflow bug
    var scrollbarWidth = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["measureScrollbar"])();
    if (scrollbarWidth > 0 && fixed) {
      bodyStyle.marginBottom = '-' + scrollbarWidth + 'px';
      bodyStyle.paddingBottom = '0px';
    }
  }

  var baseTable = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BaseTable__WEBPACK_IMPORTED_MODULE_4__["default"], {
    tableClassName: tableClassName,
    hasHead: !useFixedHeader,
    hasBody: true,
    fixed: fixed,
    columns: columns,
    expander: expander,
    getRowKey: getRowKey,
    isAnyColumnsFixed: isAnyColumnsFixed
  });

  if (fixed && columns.length) {
    var refName = void 0;
    if (columns[0].fixed === 'left' || columns[0].fixed === true) {
      refName = 'fixedColumnsBodyLeft';
    } else if (columns[0].fixed === 'right') {
      refName = 'fixedColumnsBodyRight';
    }
    delete bodyStyle.overflowX;
    delete bodyStyle.overflowY;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
      'div',
      { key: 'bodyTable', className: prefixCls + '-body-outer', style: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, bodyStyle) },
      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
        'div',
        {
          className: prefixCls + '-body-inner',
          style: innerBodyStyle,
          ref: saveRef(refName),
          onWheel: handleWheel,
          onScroll: handleBodyScroll
        },
        baseTable
      )
    );
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
    'div',
    {
      key: 'bodyTable',
      className: prefixCls + '-body',
      style: bodyStyle,
      ref: saveRef('bodyTable'),
      onWheel: handleWheel,
      onScroll: handleBodyScroll
    },
    baseTable
  );
}

BodyTable.propTypes = {
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool]),
  columns: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  tableClassName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  handleWheel: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  handleBodyScroll: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  getRowKey: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  expander: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  isAnyColumnsFixed: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};

BodyTable.contextTypes = {
  table: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any
};

/***/ }),

/***/ "../node_modules/rc-table/es/ColGroup.js":
/*!***********************************************!*\
  !*** ../node_modules/rc-table/es/ColGroup.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColGroup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



function ColGroup(props, _ref) {
  var table = _ref.table;
  var _table$props = table.props,
      prefixCls = _table$props.prefixCls,
      expandIconAsCell = _table$props.expandIconAsCell;
  var fixed = props.fixed;


  var cols = [];

  if (expandIconAsCell && fixed !== 'right') {
    cols.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('col', { className: prefixCls + '-expand-icon-col', key: 'rc-table-expand-icon-col' }));
  }

  var leafColumns = void 0;

  if (fixed === 'left') {
    leafColumns = table.columnManager.leftLeafColumns();
  } else if (fixed === 'right') {
    leafColumns = table.columnManager.rightLeafColumns();
  } else {
    leafColumns = table.columnManager.leafColumns();
  }
  cols = cols.concat(leafColumns.map(function (c) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('col', { key: c.key || c.dataIndex, style: { width: c.width, minWidth: c.width } });
  }));

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'colgroup',
    null,
    cols
  );
}

ColGroup.propTypes = {
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

ColGroup.contextTypes = {
  table: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};

/***/ }),

/***/ "../node_modules/rc-table/es/Column.js":
/*!*********************************************!*\
  !*** ../node_modules/rc-table/es/Column.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);


function Column() {}

Column.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  colSpan: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node,
  dataIndex: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  width: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf([true, 'left', 'right']),
  render: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onCellClick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onCell: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onHeaderCell: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};

/* harmony default export */ __webpack_exports__["default"] = (Column);

/***/ }),

/***/ "../node_modules/rc-table/es/ColumnGroup.js":
/*!**************************************************!*\
  !*** ../node_modules/rc-table/es/ColumnGroup.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);






var ColumnGroup = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(ColumnGroup, _Component);

  function ColumnGroup() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ColumnGroup);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _Component.apply(this, arguments));
  }

  return ColumnGroup;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

ColumnGroup.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node
};
ColumnGroup.isTableColumnGroup = true;
/* harmony default export */ __webpack_exports__["default"] = (ColumnGroup);

/***/ }),

/***/ "../node_modules/rc-table/es/ColumnManager.js":
/*!****************************************************!*\
  !*** ../node_modules/rc-table/es/ColumnManager.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




var ColumnManager = function () {
  function ColumnManager(columns, elements) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ColumnManager);

    this._cached = {};

    this.columns = columns || this.normalize(elements);
  }

  ColumnManager.prototype.isAnyColumnsFixed = function isAnyColumnsFixed() {
    var _this = this;

    return this._cache('isAnyColumnsFixed', function () {
      return _this.columns.some(function (column) {
        return !!column.fixed;
      });
    });
  };

  ColumnManager.prototype.isAnyColumnsLeftFixed = function isAnyColumnsLeftFixed() {
    var _this2 = this;

    return this._cache('isAnyColumnsLeftFixed', function () {
      return _this2.columns.some(function (column) {
        return column.fixed === 'left' || column.fixed === true;
      });
    });
  };

  ColumnManager.prototype.isAnyColumnsRightFixed = function isAnyColumnsRightFixed() {
    var _this3 = this;

    return this._cache('isAnyColumnsRightFixed', function () {
      return _this3.columns.some(function (column) {
        return column.fixed === 'right';
      });
    });
  };

  ColumnManager.prototype.leftColumns = function leftColumns() {
    var _this4 = this;

    return this._cache('leftColumns', function () {
      return _this4.groupedColumns().filter(function (column) {
        return column.fixed === 'left' || column.fixed === true;
      });
    });
  };

  ColumnManager.prototype.rightColumns = function rightColumns() {
    var _this5 = this;

    return this._cache('rightColumns', function () {
      return _this5.groupedColumns().filter(function (column) {
        return column.fixed === 'right';
      });
    });
  };

  ColumnManager.prototype.leafColumns = function leafColumns() {
    var _this6 = this;

    return this._cache('leafColumns', function () {
      return _this6._leafColumns(_this6.columns);
    });
  };

  ColumnManager.prototype.leftLeafColumns = function leftLeafColumns() {
    var _this7 = this;

    return this._cache('leftLeafColumns', function () {
      return _this7._leafColumns(_this7.leftColumns());
    });
  };

  ColumnManager.prototype.rightLeafColumns = function rightLeafColumns() {
    var _this8 = this;

    return this._cache('rightLeafColumns', function () {
      return _this8._leafColumns(_this8.rightColumns());
    });
  };

  // add appropriate rowspan and colspan to column


  ColumnManager.prototype.groupedColumns = function groupedColumns() {
    var _this9 = this;

    return this._cache('groupedColumns', function () {
      var _groupColumns = function _groupColumns(columns) {
        var currentRow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var parentColumn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var rows = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

        // track how many rows we got
        rows[currentRow] = rows[currentRow] || [];
        var grouped = [];
        var setRowSpan = function setRowSpan(column) {
          var rowSpan = rows.length - currentRow;
          if (column && !column.children && // parent columns are supposed to be one row
          rowSpan > 1 && (!column.rowSpan || column.rowSpan < rowSpan)) {
            column.rowSpan = rowSpan;
          }
        };
        columns.forEach(function (column, index) {
          var newColumn = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, column);
          rows[currentRow].push(newColumn);
          parentColumn.colSpan = parentColumn.colSpan || 0;
          if (newColumn.children && newColumn.children.length > 0) {
            newColumn.children = _groupColumns(newColumn.children, currentRow + 1, newColumn, rows);
            parentColumn.colSpan += newColumn.colSpan;
          } else {
            parentColumn.colSpan++;
          }
          // update rowspan to all same row columns
          for (var i = 0; i < rows[currentRow].length - 1; ++i) {
            setRowSpan(rows[currentRow][i]);
          }
          // last column, update rowspan immediately
          if (index + 1 === columns.length) {
            setRowSpan(newColumn);
          }
          grouped.push(newColumn);
        });
        return grouped;
      };
      return _groupColumns(_this9.columns);
    });
  };

  ColumnManager.prototype.normalize = function normalize(elements) {
    var _this10 = this;

    var columns = [];
    react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.forEach(elements, function (element) {
      if (!react__WEBPACK_IMPORTED_MODULE_2___default.a.isValidElement(element)) {
        return;
      }
      var column = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, element.props);
      if (element.key) {
        column.key = element.key;
      }
      if (element.type.isTableColumnGroup) {
        column.children = _this10.normalize(column.children);
      }
      columns.push(column);
    });
    return columns;
  };

  ColumnManager.prototype.reset = function reset(columns, elements) {
    this.columns = columns || this.normalize(elements);
    this._cached = {};
  };

  ColumnManager.prototype._cache = function _cache(name, fn) {
    if (name in this._cached) {
      return this._cached[name];
    }
    this._cached[name] = fn();
    return this._cached[name];
  };

  ColumnManager.prototype._leafColumns = function _leafColumns(columns) {
    var _this11 = this;

    var leafColumns = [];
    columns.forEach(function (column) {
      if (!column.children) {
        leafColumns.push(column);
      } else {
        leafColumns.push.apply(leafColumns, _this11._leafColumns(column.children));
      }
    });
    return leafColumns;
  };

  return ColumnManager;
}();

/* harmony default export */ __webpack_exports__["default"] = (ColumnManager);

/***/ }),

/***/ "../node_modules/rc-table/es/ExpandIcon.js":
/*!*************************************************!*\
  !*** ../node_modules/rc-table/es/ExpandIcon.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shallowequal */ "../node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_5__);







var ExpandIcon = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(ExpandIcon, _React$Component);

  function ExpandIcon() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ExpandIcon);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _React$Component.apply(this, arguments));
  }

  ExpandIcon.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return !shallowequal__WEBPACK_IMPORTED_MODULE_5___default()(nextProps, this.props);
  };

  ExpandIcon.prototype.render = function render() {
    var _props = this.props,
        expandable = _props.expandable,
        prefixCls = _props.prefixCls,
        onExpand = _props.onExpand,
        needIndentSpaced = _props.needIndentSpaced,
        expanded = _props.expanded,
        record = _props.record;

    if (expandable) {
      var expandClassName = expanded ? 'expanded' : 'collapsed';
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement('span', {
        className: prefixCls + '-expand-icon ' + prefixCls + '-' + expandClassName,
        onClick: function onClick(e) {
          return onExpand(record, e);
        }
      });
    } else if (needIndentSpaced) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement('span', { className: prefixCls + '-expand-icon ' + prefixCls + '-spaced' });
    }
    return null;
  };

  return ExpandIcon;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

ExpandIcon.propTypes = {
  record: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  expandable: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
  expanded: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  needIndentSpaced: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  onExpand: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (ExpandIcon);

/***/ }),

/***/ "../node_modules/rc-table/es/ExpandableRow.js":
/*!****************************************************!*\
  !*** ../node_modules/rc-table/es/ExpandableRow.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mini_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mini-store */ "../node_modules/mini-store/lib/index.js");
/* harmony import */ var mini_store__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mini_store__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ExpandIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ExpandIcon */ "../node_modules/rc-table/es/ExpandIcon.js");








var ExpandableRow = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(ExpandableRow, _React$Component);

  function ExpandableRow() {
    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ExpandableRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.hasExpandIcon = function (columnIndex) {
      var expandRowByClick = _this.props.expandRowByClick;

      return !_this.expandIconAsCell && !expandRowByClick && columnIndex === _this.expandIconColumnIndex;
    }, _this.handleExpandChange = function (record, event) {
      var _this$props = _this.props,
          onExpandedChange = _this$props.onExpandedChange,
          expanded = _this$props.expanded,
          rowKey = _this$props.rowKey;

      if (_this.expandable) {
        onExpandedChange(!expanded, record, event, rowKey);
      }
    }, _this.handleRowClick = function (record, index, event) {
      var _this$props2 = _this.props,
          expandRowByClick = _this$props2.expandRowByClick,
          onRowClick = _this$props2.onRowClick;

      if (expandRowByClick) {
        _this.handleExpandChange(record, event);
      }
      if (onRowClick) {
        onRowClick(record, index, event);
      }
    }, _this.renderExpandIcon = function () {
      var _this$props3 = _this.props,
          prefixCls = _this$props3.prefixCls,
          expanded = _this$props3.expanded,
          record = _this$props3.record,
          needIndentSpaced = _this$props3.needIndentSpaced;


      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ExpandIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
        expandable: _this.expandable,
        prefixCls: prefixCls,
        onExpand: _this.handleExpandChange,
        needIndentSpaced: needIndentSpaced,
        expanded: expanded,
        record: record
      });
    }, _this.renderExpandIconCell = function (cells) {
      if (!_this.expandIconAsCell) {
        return;
      }
      var prefixCls = _this.props.prefixCls;


      cells.push(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
        'td',
        { className: prefixCls + '-expand-icon-cell', key: 'rc-table-expand-icon-cell' },
        _this.renderExpandIcon()
      ));
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(_this, _ret);
  }

  ExpandableRow.prototype.componentWillUnmount = function componentWillUnmount() {
    this.handleDestroy();
  };

  ExpandableRow.prototype.handleDestroy = function handleDestroy() {
    var _props = this.props,
        onExpandedChange = _props.onExpandedChange,
        rowKey = _props.rowKey,
        record = _props.record;

    if (this.expandable) {
      onExpandedChange(false, record, null, rowKey, true);
    }
  };

  ExpandableRow.prototype.render = function render() {
    var _props2 = this.props,
        childrenColumnName = _props2.childrenColumnName,
        expandedRowRender = _props2.expandedRowRender,
        indentSize = _props2.indentSize,
        record = _props2.record,
        fixed = _props2.fixed;


    this.expandIconAsCell = fixed !== 'right' ? this.props.expandIconAsCell : false;
    this.expandIconColumnIndex = fixed !== 'right' ? this.props.expandIconColumnIndex : -1;
    var childrenData = record[childrenColumnName];
    this.expandable = !!(childrenData || expandedRowRender);

    var expandableRowProps = {
      indentSize: indentSize,
      onRowClick: this.handleRowClick,
      hasExpandIcon: this.hasExpandIcon,
      renderExpandIcon: this.renderExpandIcon,
      renderExpandIconCell: this.renderExpandIconCell
    };

    return this.props.children(expandableRowProps);
  };

  return ExpandableRow;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

ExpandableRow.propTypes = {
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
  rowKey: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]).isRequired,
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool]),
  record: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,
  indentSize: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  needIndentSpaced: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired,
  expandRowByClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  expanded: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool.isRequired,
  expandIconAsCell: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  expandIconColumnIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
  childrenColumnName: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  expandedRowRender: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  onExpandedChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  onRowClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
};


/* harmony default export */ __webpack_exports__["default"] = (Object(mini_store__WEBPACK_IMPORTED_MODULE_5__["connect"])(function (_ref, _ref2) {
  var expandedRowKeys = _ref.expandedRowKeys;
  var rowKey = _ref2.rowKey;
  return {
    expanded: !!~expandedRowKeys.indexOf(rowKey)
  };
})(ExpandableRow));

/***/ }),

/***/ "../node_modules/rc-table/es/ExpandableTable.js":
/*!******************************************************!*\
  !*** ../node_modules/rc-table/es/ExpandableTable.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mini_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mini-store */ "../node_modules/mini-store/lib/index.js");
/* harmony import */ var mini_store__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mini_store__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-lifecycles-compat */ "../node_modules/rc-table/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var _TableRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TableRow */ "../node_modules/rc-table/es/TableRow.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "../node_modules/rc-table/es/utils.js");











var ExpandableTable = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ExpandableTable, _React$Component);

  function ExpandableTable(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ExpandableTable);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    var data = props.data,
        childrenColumnName = props.childrenColumnName,
        defaultExpandAllRows = props.defaultExpandAllRows,
        expandedRowKeys = props.expandedRowKeys,
        defaultExpandedRowKeys = props.defaultExpandedRowKeys,
        getRowKey = props.getRowKey;


    var finnalExpandedRowKeys = [];
    var rows = [].concat(data);

    if (defaultExpandAllRows) {
      for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        finnalExpandedRowKeys.push(getRowKey(row, i));
        rows = rows.concat(row[childrenColumnName] || []);
      }
    } else {
      finnalExpandedRowKeys = expandedRowKeys || defaultExpandedRowKeys;
    }

    _this.columnManager = props.columnManager;
    _this.store = props.store;

    _this.store.setState({
      expandedRowsHeight: {},
      expandedRowKeys: finnalExpandedRowKeys
    });
    return _this;
  }

  ExpandableTable.prototype.componentDidUpdate = function componentDidUpdate() {
    if ('expandedRowKeys' in this.props) {
      this.store.setState({
        expandedRowKeys: this.props.expandedRowKeys
      });
    }
  };

  ExpandableTable.prototype.renderExpandedRow = function renderExpandedRow(record, index, _render, className, ancestorKeys, indent, fixed) {
    var _props = this.props,
        prefixCls = _props.prefixCls,
        expandIconAsCell = _props.expandIconAsCell,
        indentSize = _props.indentSize;

    var colCount = void 0;
    if (fixed === 'left') {
      colCount = this.columnManager.leftLeafColumns().length;
    } else if (fixed === 'right') {
      colCount = this.columnManager.rightLeafColumns().length;
    } else {
      colCount = this.columnManager.leafColumns().length;
    }
    var columns = [{
      key: 'extra-row',
      render: function render() {
        return {
          props: {
            colSpan: colCount
          },
          children: fixed !== 'right' ? _render(record, index, indent) : '&nbsp;'
        };
      }
    }];
    if (expandIconAsCell && fixed !== 'right') {
      columns.unshift({
        key: 'expand-icon-placeholder',
        render: function render() {
          return null;
        }
      });
    }
    var parentKey = ancestorKeys[ancestorKeys.length - 1];
    var rowKey = parentKey + '-extra-row';
    var components = {
      body: {
        row: 'tr',
        cell: 'td'
      }
    };

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_TableRow__WEBPACK_IMPORTED_MODULE_8__["default"], {
      key: rowKey,
      columns: columns,
      className: className,
      rowKey: rowKey,
      ancestorKeys: ancestorKeys,
      prefixCls: prefixCls + '-expanded-row',
      indentSize: indentSize,
      indent: indent,
      fixed: fixed,
      components: components,
      expandedRow: true
    });
  };

  ExpandableTable.prototype.render = function render() {
    var _props2 = this.props,
        data = _props2.data,
        childrenColumnName = _props2.childrenColumnName,
        children = _props2.children;

    var needIndentSpaced = data.some(function (record) {
      return record[childrenColumnName];
    });

    return children({
      props: this.props,
      needIndentSpaced: needIndentSpaced,
      renderRows: this.renderRows,
      handleExpandChange: this.handleExpandChange,
      renderExpandIndentCell: this.renderExpandIndentCell
    });
  };

  return ExpandableTable;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

ExpandableTable.propTypes = {
  expandIconAsCell: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  expandedRowKeys: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array,
  expandedRowClassName: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  defaultExpandAllRows: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  defaultExpandedRowKeys: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array,
  expandIconColumnIndex: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  expandedRowRender: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  childrenColumnName: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  indentSize: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  onExpand: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onExpandedRowsChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  columnManager: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,
  store: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array,
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  getRowKey: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
};
ExpandableTable.defaultProps = {
  expandIconAsCell: false,
  expandedRowClassName: function expandedRowClassName() {
    return '';
  },
  expandIconColumnIndex: 0,
  defaultExpandAllRows: false,
  defaultExpandedRowKeys: [],
  childrenColumnName: 'children',
  indentSize: 15,
  onExpand: function onExpand() {},
  onExpandedRowsChange: function onExpandedRowsChange() {}
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleExpandChange = function (expanded, record, event, rowKey) {
    var destroy = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    var _props3 = _this2.props,
        onExpandedRowsChange = _props3.onExpandedRowsChange,
        onExpand = _props3.onExpand;

    var _store$getState = _this2.store.getState(),
        expandedRowKeys = _store$getState.expandedRowKeys;

    if (expanded) {
      // row was expaned
      expandedRowKeys = [].concat(expandedRowKeys, [rowKey]);
    } else {
      // row was collapse
      var expandedRowIndex = expandedRowKeys.indexOf(rowKey);
      if (expandedRowIndex !== -1) {
        expandedRowKeys = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["remove"])(expandedRowKeys, rowKey);
      }
    }

    if (!_this2.props.expandedRowKeys) {
      _this2.store.setState({ expandedRowKeys: expandedRowKeys });
    }

    onExpandedRowsChange(expandedRowKeys);
    if (!destroy) {
      onExpand(expanded, record);
    }
  };

  this.renderExpandIndentCell = function (rows, fixed) {
    var _props4 = _this2.props,
        prefixCls = _props4.prefixCls,
        expandIconAsCell = _props4.expandIconAsCell;

    if (!expandIconAsCell || fixed === 'right' || !rows.length) {
      return;
    }

    var iconColumn = {
      key: 'rc-table-expand-icon-cell',
      className: prefixCls + '-expand-icon-th',
      title: '',
      rowSpan: rows.length
    };

    rows[0].unshift(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, iconColumn, { column: iconColumn }));
  };

  this.renderRows = function (renderRows, rows, record, index, indent, fixed, parentKey, ancestorKeys) {
    var _props5 = _this2.props,
        expandedRowClassName = _props5.expandedRowClassName,
        expandedRowRender = _props5.expandedRowRender,
        childrenColumnName = _props5.childrenColumnName;

    var childrenData = record[childrenColumnName];
    var nextAncestorKeys = [].concat(ancestorKeys, [parentKey]);
    var nextIndent = indent + 1;

    if (expandedRowRender) {
      rows.push(_this2.renderExpandedRow(record, index, expandedRowRender, expandedRowClassName(record, index, indent), nextAncestorKeys, nextIndent, fixed));
    }

    if (childrenData) {
      rows.push.apply(rows, renderRows(childrenData, nextIndent, nextAncestorKeys));
    }
  };
};

Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_7__["polyfill"])(ExpandableTable);

/* harmony default export */ __webpack_exports__["default"] = (Object(mini_store__WEBPACK_IMPORTED_MODULE_6__["connect"])()(ExpandableTable));

/***/ }),

/***/ "../node_modules/rc-table/es/HeadTable.js":
/*!************************************************!*\
  !*** ../node_modules/rc-table/es/HeadTable.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeadTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "../node_modules/rc-table/es/utils.js");
/* harmony import */ var _BaseTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BaseTable */ "../node_modules/rc-table/es/BaseTable.js");





function HeadTable(props, _ref) {
  var table = _ref.table;
  var _table$props = table.props,
      prefixCls = _table$props.prefixCls,
      scroll = _table$props.scroll,
      showHeader = _table$props.showHeader;
  var columns = props.columns,
      fixed = props.fixed,
      tableClassName = props.tableClassName,
      handleBodyScrollLeft = props.handleBodyScrollLeft,
      expander = props.expander;
  var saveRef = table.saveRef;
  var useFixedHeader = table.props.useFixedHeader;

  var headStyle = {};

  if (scroll.y) {
    useFixedHeader = true;
    // Add negative margin bottom for scroll bar overflow bug
    var scrollbarWidth = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["measureScrollbar"])('horizontal');
    if (scrollbarWidth > 0 && !fixed) {
      headStyle.marginBottom = '-' + scrollbarWidth + 'px';
      headStyle.paddingBottom = '0px';
    }
  }

  if (!useFixedHeader || !showHeader) {
    return null;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    {
      key: 'headTable',
      ref: fixed ? null : saveRef('headTable'),
      className: prefixCls + '-header',
      style: headStyle,
      onScroll: handleBodyScrollLeft
    },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BaseTable__WEBPACK_IMPORTED_MODULE_3__["default"], {
      tableClassName: tableClassName,
      hasHead: true,
      hasBody: false,
      fixed: fixed,
      columns: columns,
      expander: expander
    })
  );
}

HeadTable.propTypes = {
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool]),
  columns: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  tableClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  handleBodyScrollLeft: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  expander: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

HeadTable.contextTypes = {
  table: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};

/***/ }),

/***/ "../node_modules/rc-table/es/Table.js":
/*!********************************************!*\
  !*** ../node_modules/rc-table/es/Table.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shallowequal */ "../node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-util/es/Dom/addEventListener */ "../node_modules/rc-util/es/Dom/addEventListener.js");
/* harmony import */ var mini_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mini-store */ "../node_modules/mini-store/lib/index.js");
/* harmony import */ var mini_store__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mini_store__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/merge */ "../node_modules/lodash/merge.js");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var component_classes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! component-classes */ "../node_modules/component-classes/index.js");
/* harmony import */ var component_classes__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(component_classes__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-lifecycles-compat */ "../node_modules/rc-table/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils */ "../node_modules/rc-table/es/utils.js");
/* harmony import */ var _ColumnManager__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ColumnManager */ "../node_modules/rc-table/es/ColumnManager.js");
/* harmony import */ var _HeadTable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./HeadTable */ "../node_modules/rc-table/es/HeadTable.js");
/* harmony import */ var _BodyTable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./BodyTable */ "../node_modules/rc-table/es/BodyTable.js");
/* harmony import */ var _ExpandableTable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ExpandableTable */ "../node_modules/rc-table/es/ExpandableTable.js");


















var Table = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Table, _React$Component);

  Table.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.columns && nextProps.columns !== prevState.columns) {
      return {
        columns: nextProps.columns,
        children: null
      };
    } else if (nextProps.children !== prevState.children) {
      return {
        columns: null,
        children: nextProps.children
      };
    }
    return null;
  };

  function Table(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Table);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _React$Component.call(this, props));

    _this.state = {};

    _this.getRowKey = function (record, index) {
      var rowKey = _this.props.rowKey;
      var key = typeof rowKey === 'function' ? rowKey(record, index) : record[rowKey];
      Object(_utils__WEBPACK_IMPORTED_MODULE_12__["warningOnce"])(key !== undefined, 'Each record in table should have a unique `key` prop,' + 'or set `rowKey` to an unique primary key.');
      return key === undefined ? index : key;
    };

    _this.handleWindowResize = function () {
      _this.syncFixedTableRowHeight();
      _this.setScrollPositionClassName();
    };

    _this.syncFixedTableRowHeight = function () {
      var tableRect = _this.tableNode.getBoundingClientRect();
      // If tableNode's height less than 0, suppose it is hidden and don't recalculate rowHeight.
      // see: https://github.com/ant-design/ant-design/issues/4836
      if (tableRect.height !== undefined && tableRect.height <= 0) {
        return;
      }
      var prefixCls = _this.props.prefixCls;

      var headRows = _this.headTable ? _this.headTable.querySelectorAll('thead') : _this.bodyTable.querySelectorAll('thead');
      var bodyRows = _this.bodyTable.querySelectorAll('.' + prefixCls + '-row') || [];
      var fixedColumnsHeadRowsHeight = [].map.call(headRows, function (row) {
        return row.getBoundingClientRect().height || 'auto';
      });
      var fixedColumnsBodyRowsHeight = [].map.call(bodyRows, function (row) {
        return row.getBoundingClientRect().height || 'auto';
      });
      var state = _this.store.getState();
      if (shallowequal__WEBPACK_IMPORTED_MODULE_6___default()(state.fixedColumnsHeadRowsHeight, fixedColumnsHeadRowsHeight) && shallowequal__WEBPACK_IMPORTED_MODULE_6___default()(state.fixedColumnsBodyRowsHeight, fixedColumnsBodyRowsHeight)) {
        return;
      }

      _this.store.setState({
        fixedColumnsHeadRowsHeight: fixedColumnsHeadRowsHeight,
        fixedColumnsBodyRowsHeight: fixedColumnsBodyRowsHeight
      });
    };

    _this.handleBodyScrollLeft = function (e) {
      // Fix https://github.com/ant-design/ant-design/issues/7635
      if (e.currentTarget !== e.target) {
        return;
      }
      var target = e.target;
      var _this$props$scroll = _this.props.scroll,
          scroll = _this$props$scroll === undefined ? {} : _this$props$scroll;
      var headTable = _this.headTable,
          bodyTable = _this.bodyTable;

      if (target.scrollLeft !== _this.lastScrollLeft && scroll.x) {
        if (target === bodyTable && headTable) {
          headTable.scrollLeft = target.scrollLeft;
        } else if (target === headTable && bodyTable) {
          bodyTable.scrollLeft = target.scrollLeft;
        }
        _this.setScrollPositionClassName();
      }
      // Remember last scrollLeft for scroll direction detecting.
      _this.lastScrollLeft = target.scrollLeft;
    };

    _this.handleBodyScrollTop = function (e) {
      var target = e.target;
      // Fix https://github.com/ant-design/ant-design/issues/9033
      if (e.currentTarget !== target) {
        return;
      }
      var _this$props$scroll2 = _this.props.scroll,
          scroll = _this$props$scroll2 === undefined ? {} : _this$props$scroll2;
      var headTable = _this.headTable,
          bodyTable = _this.bodyTable,
          fixedColumnsBodyLeft = _this.fixedColumnsBodyLeft,
          fixedColumnsBodyRight = _this.fixedColumnsBodyRight;

      if (target.scrollTop !== _this.lastScrollTop && scroll.y && target !== headTable) {
        var scrollTop = target.scrollTop;
        if (fixedColumnsBodyLeft && target !== fixedColumnsBodyLeft) {
          fixedColumnsBodyLeft.scrollTop = scrollTop;
        }
        if (fixedColumnsBodyRight && target !== fixedColumnsBodyRight) {
          fixedColumnsBodyRight.scrollTop = scrollTop;
        }
        if (bodyTable && target !== bodyTable) {
          bodyTable.scrollTop = scrollTop;
        }
      }
      // Remember last scrollTop for scroll direction detecting.
      _this.lastScrollTop = target.scrollTop;
    };

    _this.handleBodyScroll = function (e) {
      _this.handleBodyScrollLeft(e);
      _this.handleBodyScrollTop(e);
    };

    _this.handleWheel = function (event) {
      var _this$props$scroll3 = _this.props.scroll,
          scroll = _this$props$scroll3 === undefined ? {} : _this$props$scroll3;

      if (window.navigator.userAgent.match(/Trident\/7\./) && scroll.y) {
        event.preventDefault();
        var wd = event.deltaY;
        var target = event.target;
        var bodyTable = _this.bodyTable,
            fixedColumnsBodyLeft = _this.fixedColumnsBodyLeft,
            fixedColumnsBodyRight = _this.fixedColumnsBodyRight;

        var scrollTop = 0;

        if (_this.lastScrollTop) {
          scrollTop = _this.lastScrollTop + wd;
        } else {
          scrollTop = wd;
        }

        if (fixedColumnsBodyLeft && target !== fixedColumnsBodyLeft) {
          fixedColumnsBodyLeft.scrollTop = scrollTop;
        }
        if (fixedColumnsBodyRight && target !== fixedColumnsBodyRight) {
          fixedColumnsBodyRight.scrollTop = scrollTop;
        }
        if (bodyTable && target !== bodyTable) {
          bodyTable.scrollTop = scrollTop;
        }
      }
    };

    _this.saveRef = function (name) {
      return function (node) {
        _this[name] = node;
      };
    };

    ['onRowClick', 'onRowDoubleClick', 'onRowContextMenu', 'onRowMouseEnter', 'onRowMouseLeave'].forEach(function (name) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_12__["warningOnce"])(props[name] === undefined, name + ' is deprecated, please use onRow instead.');
    });

    Object(_utils__WEBPACK_IMPORTED_MODULE_12__["warningOnce"])(props.getBodyWrapper === undefined, 'getBodyWrapper is deprecated, please use custom components instead.');

    _this.columnManager = new _ColumnManager__WEBPACK_IMPORTED_MODULE_13__["default"](props.columns, props.children);

    _this.store = Object(mini_store__WEBPACK_IMPORTED_MODULE_8__["create"])({
      currentHoverKey: null,
      fixedColumnsHeadRowsHeight: [],
      fixedColumnsBodyRowsHeight: []
    });

    _this.setScrollPosition('left');

    _this.debouncedWindowResize = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["debounce"])(_this.handleWindowResize, 150);
    return _this;
  }

  Table.prototype.getChildContext = function getChildContext() {
    return {
      table: {
        props: this.props,
        columnManager: this.columnManager,
        saveRef: this.saveRef,
        components: lodash_merge__WEBPACK_IMPORTED_MODULE_9___default()({
          table: 'table',
          header: {
            wrapper: 'thead',
            row: 'tr',
            cell: 'th'
          },
          body: {
            wrapper: 'tbody',
            row: 'tr',
            cell: 'td'
          }
        }, this.props.components)
      }
    };
  };

  Table.prototype.componentDidMount = function componentDidMount() {
    if (this.columnManager.isAnyColumnsFixed()) {
      this.handleWindowResize();
      this.resizeEvent = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_7__["default"])(window, 'resize', this.debouncedWindowResize);
    }
  };

  Table.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.columnManager.isAnyColumnsFixed()) {
      this.handleWindowResize();
      if (!this.resizeEvent) {
        this.resizeEvent = Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_7__["default"])(window, 'resize', this.debouncedWindowResize);
      }
    }
    // when table changes to empty, reset scrollLeft
    if (prevProps.data.length > 0 && this.props.data.length === 0 && this.hasScrollX()) {
      this.resetScrollX();
    }
  };

  Table.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.resizeEvent) {
      this.resizeEvent.remove();
    }
    if (this.debouncedWindowResize) {
      this.debouncedWindowResize.cancel();
    }
  };

  Table.prototype.setScrollPosition = function setScrollPosition(position) {
    this.scrollPosition = position;
    if (this.tableNode) {
      var prefixCls = this.props.prefixCls;

      if (position === 'both') {
        component_classes__WEBPACK_IMPORTED_MODULE_10___default()(this.tableNode).remove(new RegExp('^' + prefixCls + '-scroll-position-.+$')).add(prefixCls + '-scroll-position-left').add(prefixCls + '-scroll-position-right');
      } else {
        component_classes__WEBPACK_IMPORTED_MODULE_10___default()(this.tableNode).remove(new RegExp('^' + prefixCls + '-scroll-position-.+$')).add(prefixCls + '-scroll-position-' + position);
      }
    }
  };

  Table.prototype.setScrollPositionClassName = function setScrollPositionClassName() {
    var node = this.bodyTable;
    var scrollToLeft = node.scrollLeft === 0;
    var scrollToRight = node.scrollLeft + 1 >= node.children[0].getBoundingClientRect().width - node.getBoundingClientRect().width;
    if (scrollToLeft && scrollToRight) {
      this.setScrollPosition('both');
    } else if (scrollToLeft) {
      this.setScrollPosition('left');
    } else if (scrollToRight) {
      this.setScrollPosition('right');
    } else if (this.scrollPosition !== 'middle') {
      this.setScrollPosition('middle');
    }
  };

  Table.prototype.resetScrollX = function resetScrollX() {
    if (this.headTable) {
      this.headTable.scrollLeft = 0;
    }
    if (this.bodyTable) {
      this.bodyTable.scrollLeft = 0;
    }
  };

  Table.prototype.hasScrollX = function hasScrollX() {
    var _props$scroll = this.props.scroll,
        scroll = _props$scroll === undefined ? {} : _props$scroll;

    return 'x' in scroll;
  };

  Table.prototype.renderMainTable = function renderMainTable() {
    var _props = this.props,
        scroll = _props.scroll,
        prefixCls = _props.prefixCls;

    var isAnyColumnsFixed = this.columnManager.isAnyColumnsFixed();
    var scrollable = isAnyColumnsFixed || scroll.x || scroll.y;

    var table = [this.renderTable({
      columns: this.columnManager.groupedColumns(),
      isAnyColumnsFixed: isAnyColumnsFixed
    }), this.renderEmptyText(), this.renderFooter()];

    return scrollable ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
      'div',
      { className: prefixCls + '-scroll' },
      table
    ) : table;
  };

  Table.prototype.renderLeftFixedTable = function renderLeftFixedTable() {
    var prefixCls = this.props.prefixCls;


    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
      'div',
      { className: prefixCls + '-fixed-left' },
      this.renderTable({
        columns: this.columnManager.leftColumns(),
        fixed: 'left'
      })
    );
  };

  Table.prototype.renderRightFixedTable = function renderRightFixedTable() {
    var prefixCls = this.props.prefixCls;


    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
      'div',
      { className: prefixCls + '-fixed-right' },
      this.renderTable({
        columns: this.columnManager.rightColumns(),
        fixed: 'right'
      })
    );
  };

  Table.prototype.renderTable = function renderTable(options) {
    var columns = options.columns,
        fixed = options.fixed,
        isAnyColumnsFixed = options.isAnyColumnsFixed;
    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        _props2$scroll = _props2.scroll,
        scroll = _props2$scroll === undefined ? {} : _props2$scroll;

    var tableClassName = scroll.x || fixed ? prefixCls + '-fixed' : '';

    var headTable = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_HeadTable__WEBPACK_IMPORTED_MODULE_14__["default"], {
      key: 'head',
      columns: columns,
      fixed: fixed,
      tableClassName: tableClassName,
      handleBodyScrollLeft: this.handleBodyScrollLeft,
      expander: this.expander
    });

    var bodyTable = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_BodyTable__WEBPACK_IMPORTED_MODULE_15__["default"], {
      key: 'body',
      columns: columns,
      fixed: fixed,
      tableClassName: tableClassName,
      getRowKey: this.getRowKey,
      handleWheel: this.handleWheel,
      handleBodyScroll: this.handleBodyScroll,
      expander: this.expander,
      isAnyColumnsFixed: isAnyColumnsFixed
    });

    return [headTable, bodyTable];
  };

  Table.prototype.renderTitle = function renderTitle() {
    var _props3 = this.props,
        title = _props3.title,
        prefixCls = _props3.prefixCls;

    return title ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
      'div',
      { className: prefixCls + '-title', key: 'title' },
      title(this.props.data)
    ) : null;
  };

  Table.prototype.renderFooter = function renderFooter() {
    var _props4 = this.props,
        footer = _props4.footer,
        prefixCls = _props4.prefixCls;

    return footer ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
      'div',
      { className: prefixCls + '-footer', key: 'footer' },
      footer(this.props.data)
    ) : null;
  };

  Table.prototype.renderEmptyText = function renderEmptyText() {
    var _props5 = this.props,
        emptyText = _props5.emptyText,
        prefixCls = _props5.prefixCls,
        data = _props5.data;

    if (data.length) {
      return null;
    }
    var emptyClassName = prefixCls + '-placeholder';
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
      'div',
      { className: emptyClassName, key: 'emptyText' },
      typeof emptyText === 'function' ? emptyText() : emptyText
    );
  };

  Table.prototype.render = function render() {
    var _this2 = this;

    var props = this.props;
    var prefixCls = props.prefixCls;

    if (this.state.columns) {
      this.columnManager.reset(props.columns);
    } else if (this.state.children) {
      this.columnManager.reset(null, props.children);
    }

    var className = props.prefixCls;
    if (props.className) {
      className += ' ' + props.className;
    }
    if (props.useFixedHeader || props.scroll && props.scroll.y) {
      className += ' ' + prefixCls + '-fixed-header';
    }
    if (this.scrollPosition === 'both') {
      className += ' ' + prefixCls + '-scroll-position-left ' + prefixCls + '-scroll-position-right';
    } else {
      className += ' ' + prefixCls + '-scroll-position-' + this.scrollPosition;
    }
    var hasLeftFixed = this.columnManager.isAnyColumnsLeftFixed();
    var hasRightFixed = this.columnManager.isAnyColumnsRightFixed();

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
      mini_store__WEBPACK_IMPORTED_MODULE_8__["Provider"],
      { store: this.store },
      react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
        _ExpandableTable__WEBPACK_IMPORTED_MODULE_16__["default"],
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, { columnManager: this.columnManager, getRowKey: this.getRowKey }),
        function (expander) {
          _this2.expander = expander;
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'div',
            {
              ref: _this2.saveRef('tableNode'),
              className: className,
              style: props.style,
              id: props.id
            },
            _this2.renderTitle(),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              'div',
              { className: prefixCls + '-content' },
              _this2.renderMainTable(),
              hasLeftFixed && _this2.renderLeftFixedTable(),
              hasRightFixed && _this2.renderRightFixedTable()
            )
          );
        }
      )
    );
  };

  return Table;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Table.propTypes = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
  data: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array,
  useFixedHeader: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  columns: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  bodyStyle: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  style: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  rowKey: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func]),
  rowClassName: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func]),
  onRow: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onHeaderRow: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onRowClick: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onRowDoubleClick: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onRowContextMenu: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onRowMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  onRowMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  showHeader: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  title: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  id: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  footer: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  emptyText: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func]),
  scroll: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  rowRef: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  getBodyWrapper: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node,
  components: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
    table: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
    header: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
      wrapper: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
      row: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
      cell: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any
    }),
    body: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
      wrapper: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
      row: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
      cell: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any
    })
  })
}, _ExpandableTable__WEBPACK_IMPORTED_MODULE_16__["default"].PropTypes);
Table.childContextTypes = {
  table: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,
  components: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any
};
Table.defaultProps = {
  data: [],
  useFixedHeader: false,
  rowKey: 'key',
  rowClassName: function rowClassName() {
    return '';
  },
  onRow: function onRow() {},
  onHeaderRow: function onHeaderRow() {},

  prefixCls: 'rc-table',
  bodyStyle: {},
  style: {},
  showHeader: true,
  scroll: {},
  rowRef: function rowRef() {
    return null;
  },
  emptyText: function emptyText() {
    return 'No Data';
  }
};


Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_11__["polyfill"])(Table);

/* harmony default export */ __webpack_exports__["default"] = (Table);

/***/ }),

/***/ "../node_modules/rc-table/es/TableCell.js":
/*!************************************************!*\
  !*** ../node_modules/rc-table/es/TableCell.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/get */ "../node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_6__);








function isInvalidRenderCellText(text) {
  return text && !react__WEBPACK_IMPORTED_MODULE_4___default.a.isValidElement(text) && Object.prototype.toString.call(text) === '[object Object]';
}

var TableCell = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(TableCell, _React$Component);

  function TableCell() {
    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, TableCell);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (e) {
      var _this$props = _this.props,
          record = _this$props.record,
          onCellClick = _this$props.column.onCellClick;

      if (onCellClick) {
        onCellClick(record, e);
      }
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(_this, _ret);
  }

  TableCell.prototype.render = function render() {
    var _props = this.props,
        record = _props.record,
        indentSize = _props.indentSize,
        prefixCls = _props.prefixCls,
        indent = _props.indent,
        index = _props.index,
        expandIcon = _props.expandIcon,
        column = _props.column,
        BodyCell = _props.component;
    var dataIndex = column.dataIndex,
        render = column.render,
        _column$className = column.className,
        className = _column$className === undefined ? '' : _column$className;

    // We should return undefined if no dataIndex is specified, but in order to
    // be compatible with object-path's behavior, we return the record object instead.

    var text = void 0;
    if (typeof dataIndex === 'number') {
      text = lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(record, dataIndex);
    } else if (!dataIndex || dataIndex.length === 0) {
      text = record;
    } else {
      text = lodash_get__WEBPACK_IMPORTED_MODULE_6___default()(record, dataIndex);
    }
    var tdProps = {};
    var colSpan = void 0;
    var rowSpan = void 0;

    if (render) {
      text = render(text, record, index);
      if (isInvalidRenderCellText(text)) {
        tdProps = text.props || tdProps;
        colSpan = tdProps.colSpan;
        rowSpan = tdProps.rowSpan;
        text = text.children;
      }
    }

    if (column.onCell) {
      tdProps = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, tdProps, column.onCell(record));
    }

    // Fix https://github.com/ant-design/ant-design/issues/1202
    if (isInvalidRenderCellText(text)) {
      text = null;
    }

    var indentText = expandIcon ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement('span', {
      style: { paddingLeft: indentSize * indent + 'px' },
      className: prefixCls + '-indent indent-level-' + indent
    }) : null;

    if (rowSpan === 0 || colSpan === 0) {
      return null;
    }

    if (column.align) {
      tdProps.style = { textAlign: column.align };
    }

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
      BodyCell,
      babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ className: className, onClick: this.handleClick }, tdProps),
      indentText,
      expandIcon,
      text
    );
  };

  return TableCell;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

TableCell.propTypes = {
  record: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  index: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  indent: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  indentSize: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  column: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  expandIcon: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node,
  component: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any
};
/* harmony default export */ __webpack_exports__["default"] = (TableCell);

/***/ }),

/***/ "../node_modules/rc-table/es/TableHeader.js":
/*!**************************************************!*\
  !*** ../node_modules/rc-table/es/TableHeader.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TableHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TableHeaderRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TableHeaderRow */ "../node_modules/rc-table/es/TableHeaderRow.js");




function getHeaderRows(columns) {
  var currentRow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var rows = arguments[2];

  rows = rows || [];
  rows[currentRow] = rows[currentRow] || [];

  columns.forEach(function (column) {
    if (column.rowSpan && rows.length < column.rowSpan) {
      while (rows.length < column.rowSpan) {
        rows.push([]);
      }
    }
    var cell = {
      key: column.key,
      className: column.className || '',
      children: column.title,
      column: column
    };
    if (column.children) {
      getHeaderRows(column.children, currentRow + 1, rows);
    }
    if ('colSpan' in column) {
      cell.colSpan = column.colSpan;
    }
    if ('rowSpan' in column) {
      cell.rowSpan = column.rowSpan;
    }
    if (cell.colSpan !== 0) {
      rows[currentRow].push(cell);
    }
  });
  return rows.filter(function (row) {
    return row.length > 0;
  });
}

function TableHeader(props, _ref) {
  var table = _ref.table;
  var components = table.components;
  var _table$props = table.props,
      prefixCls = _table$props.prefixCls,
      showHeader = _table$props.showHeader,
      onHeaderRow = _table$props.onHeaderRow;
  var expander = props.expander,
      columns = props.columns,
      fixed = props.fixed;


  if (!showHeader) {
    return null;
  }

  var rows = getHeaderRows(columns);

  expander.renderExpandIndentCell(rows, fixed);

  var HeaderWrapper = components.header.wrapper;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    HeaderWrapper,
    { className: prefixCls + '-thead' },
    rows.map(function (row, index) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableHeaderRow__WEBPACK_IMPORTED_MODULE_2__["default"], {
        key: index,
        index: index,
        fixed: fixed,
        columns: columns,
        rows: rows,
        row: row,
        components: components,
        onHeaderRow: onHeaderRow
      });
    })
  );
}

TableHeader.propTypes = {
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  columns: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  expander: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onHeaderRow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

TableHeader.contextTypes = {
  table: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};

/***/ }),

/***/ "../node_modules/rc-table/es/TableHeaderRow.js":
/*!*****************************************************!*\
  !*** ../node_modules/rc-table/es/TableHeaderRow.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "../node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mini_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mini-store */ "../node_modules/mini-store/lib/index.js");
/* harmony import */ var mini_store__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mini_store__WEBPACK_IMPORTED_MODULE_4__);






function TableHeaderRow(_ref) {
  var row = _ref.row,
      index = _ref.index,
      height = _ref.height,
      components = _ref.components,
      onHeaderRow = _ref.onHeaderRow;

  var HeaderRow = components.header.row;
  var HeaderCell = components.header.cell;
  var rowProps = onHeaderRow(row.map(function (cell) {
    return cell.column;
  }), index);
  var customStyle = rowProps ? rowProps.style : {};
  var style = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({ height: height }, customStyle);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
    HeaderRow,
    babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, rowProps, { style: style }),
    row.map(function (cell, i) {
      var column = cell.column,
          cellProps = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(cell, ['column']);

      var customProps = column.onHeaderCell ? column.onHeaderCell(column) : {};
      if (column.align) {
        cellProps.style = { textAlign: column.align };
      }
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(HeaderCell, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, cellProps, customProps, { key: column.key || column.dataIndex || i }));
    })
  );
}

TableHeaderRow.propTypes = {
  row: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
  index: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  height: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),
  components: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,
  onHeaderRow: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};

function getRowHeight(state, props) {
  var fixedColumnsHeadRowsHeight = state.fixedColumnsHeadRowsHeight;
  var columns = props.columns,
      rows = props.rows,
      fixed = props.fixed;

  var headerHeight = fixedColumnsHeadRowsHeight[0];

  if (!fixed) {
    return null;
  }

  if (headerHeight && columns) {
    if (headerHeight === 'auto') {
      return 'auto';
    }
    return headerHeight / rows.length;
  }
  return null;
}

/* harmony default export */ __webpack_exports__["default"] = (Object(mini_store__WEBPACK_IMPORTED_MODULE_4__["connect"])(function (state, props) {
  return {
    height: getRowHeight(state, props)
  };
})(TableHeaderRow));

/***/ }),

/***/ "../node_modules/rc-table/es/TableRow.js":
/*!***********************************************!*\
  !*** ../node_modules/rc-table/es/TableRow.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var mini_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mini-store */ "../node_modules/mini-store/lib/index.js");
/* harmony import */ var mini_store__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mini_store__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-lifecycles-compat */ "../node_modules/rc-table/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
/* harmony import */ var _TableCell__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TableCell */ "../node_modules/rc-table/es/TableCell.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils */ "../node_modules/rc-table/es/utils.js");












var TableRow = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(TableRow, _React$Component);

  TableRow.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.visible || !prevState.visible && nextProps.visible) {
      return {
        shouldRender: true,
        visible: nextProps.visible
      };
    }
    return {
      visible: nextProps.visible
    };
  };

  function TableRow(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, TableRow);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _React$Component.call(this, props));

    _this.onRowClick = function (event) {
      var _this$props = _this.props,
          record = _this$props.record,
          index = _this$props.index,
          onRowClick = _this$props.onRowClick;

      if (onRowClick) {
        onRowClick(record, index, event);
      }
    };

    _this.onRowDoubleClick = function (event) {
      var _this$props2 = _this.props,
          record = _this$props2.record,
          index = _this$props2.index,
          onRowDoubleClick = _this$props2.onRowDoubleClick;

      if (onRowDoubleClick) {
        onRowDoubleClick(record, index, event);
      }
    };

    _this.onContextMenu = function (event) {
      var _this$props3 = _this.props,
          record = _this$props3.record,
          index = _this$props3.index,
          onRowContextMenu = _this$props3.onRowContextMenu;

      if (onRowContextMenu) {
        onRowContextMenu(record, index, event);
      }
    };

    _this.onMouseEnter = function (event) {
      var _this$props4 = _this.props,
          record = _this$props4.record,
          index = _this$props4.index,
          onRowMouseEnter = _this$props4.onRowMouseEnter,
          onHover = _this$props4.onHover,
          rowKey = _this$props4.rowKey;

      onHover(true, rowKey);
      if (onRowMouseEnter) {
        onRowMouseEnter(record, index, event);
      }
    };

    _this.onMouseLeave = function (event) {
      var _this$props5 = _this.props,
          record = _this$props5.record,
          index = _this$props5.index,
          onRowMouseLeave = _this$props5.onRowMouseLeave,
          onHover = _this$props5.onHover,
          rowKey = _this$props5.rowKey;

      onHover(false, rowKey);
      if (onRowMouseLeave) {
        onRowMouseLeave(record, index, event);
      }
    };

    _this.shouldRender = props.visible;

    _this.state = {};
    return _this;
  }

  TableRow.prototype.componentDidMount = function componentDidMount() {
    if (this.state.shouldRender) {
      this.saveRowRef();
    }
  };

  TableRow.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return !!(this.props.visible || nextProps.visible);
  };

  TableRow.prototype.componentDidUpdate = function componentDidUpdate() {
    if (this.state.shouldRender && !this.rowRef) {
      this.saveRowRef();
    }
  };

  TableRow.prototype.setExpanedRowHeight = function setExpanedRowHeight() {
    var _extends2;

    var _props = this.props,
        store = _props.store,
        rowKey = _props.rowKey;

    var _store$getState = store.getState(),
        expandedRowsHeight = _store$getState.expandedRowsHeight;

    var height = this.rowRef.getBoundingClientRect().height;
    expandedRowsHeight = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, expandedRowsHeight, (_extends2 = {}, _extends2[rowKey] = height, _extends2));
    store.setState({ expandedRowsHeight: expandedRowsHeight });
  };

  TableRow.prototype.setRowHeight = function setRowHeight() {
    var _props2 = this.props,
        store = _props2.store,
        index = _props2.index;

    var fixedColumnsBodyRowsHeight = store.getState().fixedColumnsBodyRowsHeight.slice();
    var height = this.rowRef.getBoundingClientRect().height;
    fixedColumnsBodyRowsHeight[index] = height;
    store.setState({ fixedColumnsBodyRowsHeight: fixedColumnsBodyRowsHeight });
  };

  TableRow.prototype.getStyle = function getStyle() {
    var _props3 = this.props,
        height = _props3.height,
        visible = _props3.visible;


    if (height && height !== this.style.height) {
      this.style = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.style, { height: height });
    }

    if (!visible && !this.style.display) {
      this.style = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.style, { display: 'none' });
    }

    return this.style;
  };

  TableRow.prototype.saveRowRef = function saveRowRef() {
    this.rowRef = react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.findDOMNode(this);

    var _props4 = this.props,
        isAnyColumnsFixed = _props4.isAnyColumnsFixed,
        fixed = _props4.fixed,
        expandedRow = _props4.expandedRow,
        ancestorKeys = _props4.ancestorKeys;


    if (!isAnyColumnsFixed) {
      return;
    }

    if (!fixed && expandedRow) {
      this.setExpanedRowHeight();
    }

    if (!fixed && ancestorKeys.length >= 0) {
      this.setRowHeight();
    }
  };

  TableRow.prototype.render = function render() {
    if (!this.state.shouldRender) {
      return null;
    }

    var _props5 = this.props,
        prefixCls = _props5.prefixCls,
        columns = _props5.columns,
        record = _props5.record,
        index = _props5.index,
        onRow = _props5.onRow,
        indent = _props5.indent,
        indentSize = _props5.indentSize,
        hovered = _props5.hovered,
        height = _props5.height,
        visible = _props5.visible,
        components = _props5.components,
        hasExpandIcon = _props5.hasExpandIcon,
        renderExpandIcon = _props5.renderExpandIcon,
        renderExpandIconCell = _props5.renderExpandIconCell;


    var BodyRow = components.body.row;
    var BodyCell = components.body.cell;

    var className = this.props.className;


    if (hovered) {
      className += ' ' + prefixCls + '-hover';
    }

    var cells = [];

    renderExpandIconCell(cells);

    for (var i = 0; i < columns.length; i++) {
      var column = columns[i];

      Object(_utils__WEBPACK_IMPORTED_MODULE_10__["warningOnce"])(column.onCellClick === undefined, 'column[onCellClick] is deprecated, please use column[onCell] instead.');

      cells.push(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
        prefixCls: prefixCls,
        record: record,
        indentSize: indentSize,
        indent: indent,
        index: index,
        column: column,
        key: column.key || column.dataIndex,
        expandIcon: hasExpandIcon(i) && renderExpandIcon(),
        component: BodyCell
      }));
    }

    var rowClassName = (prefixCls + ' ' + className + ' ' + prefixCls + '-level-' + indent).trim();

    var rowProps = onRow(record, index);
    var customStyle = rowProps ? rowProps.style : {};
    var style = { height: height };

    if (!visible) {
      style.display = 'none';
    }

    style = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, style, customStyle);

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
      BodyRow,
      babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        onClick: this.onRowClick,
        onDoubleClick: this.onRowDoubleClick,
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        onContextMenu: this.onContextMenu,
        className: rowClassName
      }, rowProps, {
        style: style
      }),
      cells
    );
  };

  return TableRow;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

TableRow.propTypes = {
  onRow: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  onRowClick: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  onRowDoubleClick: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  onRowContextMenu: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  onRowMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  onRowMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  record: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  onHover: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  columns: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
  height: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  index: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  rowKey: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]).isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  indent: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  indentSize: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  hasExpandIcon: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  hovered: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool.isRequired,
  visible: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool.isRequired,
  store: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool]),
  renderExpandIcon: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  renderExpandIconCell: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  components: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any,
  expandedRow: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  isAnyColumnsFixed: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  ancestorKeys: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array.isRequired
};
TableRow.defaultProps = {
  onRow: function onRow() {},
  onHover: function onHover() {},
  hasExpandIcon: function hasExpandIcon() {},
  renderExpandIcon: function renderExpandIcon() {},
  renderExpandIconCell: function renderExpandIconCell() {}
};


function getRowHeight(state, props) {
  var expandedRowsHeight = state.expandedRowsHeight,
      fixedColumnsBodyRowsHeight = state.fixedColumnsBodyRowsHeight;
  var fixed = props.fixed,
      index = props.index,
      rowKey = props.rowKey;


  if (!fixed) {
    return null;
  }

  if (expandedRowsHeight[rowKey]) {
    return expandedRowsHeight[rowKey];
  }

  if (fixedColumnsBodyRowsHeight[index]) {
    return fixedColumnsBodyRowsHeight[index];
  }

  return null;
}

Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_8__["polyfill"])(TableRow);

/* harmony default export */ __webpack_exports__["default"] = (Object(mini_store__WEBPACK_IMPORTED_MODULE_7__["connect"])(function (state, props) {
  var currentHoverKey = state.currentHoverKey,
      expandedRowKeys = state.expandedRowKeys;
  var rowKey = props.rowKey,
      ancestorKeys = props.ancestorKeys;

  var visible = ancestorKeys.length === 0 || ancestorKeys.every(function (k) {
    return ~expandedRowKeys.indexOf(k);
  });

  return {
    visible: visible,
    hovered: currentHoverKey === rowKey,
    height: getRowHeight(state, props)
  };
})(TableRow));

/***/ }),

/***/ "../node_modules/rc-table/es/index.js":
/*!********************************************!*\
  !*** ../node_modules/rc-table/es/index.js ***!
  \********************************************/
/*! exports provided: default, Column, ColumnGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Table */ "../node_modules/rc-table/es/Table.js");
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Column */ "../node_modules/rc-table/es/Column.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return _Column__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ColumnGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColumnGroup */ "../node_modules/rc-table/es/ColumnGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColumnGroup", function() { return _ColumnGroup__WEBPACK_IMPORTED_MODULE_2__["default"]; });





_Table__WEBPACK_IMPORTED_MODULE_0__["default"].Column = _Column__WEBPACK_IMPORTED_MODULE_1__["default"];
_Table__WEBPACK_IMPORTED_MODULE_0__["default"].ColumnGroup = _ColumnGroup__WEBPACK_IMPORTED_MODULE_2__["default"];

/* harmony default export */ __webpack_exports__["default"] = (_Table__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "../node_modules/rc-table/es/utils.js":
/*!********************************************!*\
  !*** ../node_modules/rc-table/es/utils.js ***!
  \********************************************/
/*! exports provided: measureScrollbar, debounce, warningOnce, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "measureScrollbar", function() { return measureScrollbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningOnce", function() { return warningOnce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! warning */ "../node_modules/warning/browser.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_0__);


var scrollbarSize = void 0;

// Measure scrollbar width for padding body during modal show/hide
var scrollbarMeasure = {
  position: 'absolute',
  top: '-9999px',
  width: '50px',
  height: '50px',
  overflow: 'scroll'
};

function measureScrollbar() {
  var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'vertical';

  if (typeof document === 'undefined' || typeof window === 'undefined') {
    return 0;
  }
  if (scrollbarSize) {
    return scrollbarSize;
  }
  var scrollDiv = document.createElement('div');
  Object.keys(scrollbarMeasure).forEach(function (scrollProp) {
    scrollDiv.style[scrollProp] = scrollbarMeasure[scrollProp];
  });
  document.body.appendChild(scrollDiv);
  var size = 0;
  if (direction === 'vertical') {
    size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  } else if (direction === 'horizontal') {
    size = scrollDiv.offsetHeight - scrollDiv.clientHeight;
  }

  document.body.removeChild(scrollDiv);
  scrollbarSize = size;
  return scrollbarSize;
}

function debounce(func, wait, immediate) {
  var timeout = void 0;
  function debounceFunc() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;
    // https://fb.me/react-event-pooling
    if (args[0] && args[0].persist) {
      args[0].persist();
    }
    var later = function later() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  }
  debounceFunc.cancel = function cancel() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  return debounceFunc;
}

var warned = {};
function warningOnce(condition, format, args) {
  if (!warned[format]) {
    warning__WEBPACK_IMPORTED_MODULE_0___default()(condition, format, args);
    warned[format] = !condition;
  }
}

function remove(array, item) {
  var index = array.indexOf(item);
  var front = array.slice(0, index);
  var last = array.slice(index + 1, array.length);
  return front.concat(last);
}

/***/ }),

/***/ "../node_modules/rc-table/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!***************************************************************************************************!*\
  !*** ../node_modules/rc-table/node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \***************************************************************************************************/
/*! exports provided: polyfill */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(nextProps, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvX3V0aWwvaXNDc3NBbmltYXRpb25TdXBwb3J0ZWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2Ryb3Bkb3duL2Ryb3Bkb3duLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvZHJvcGRvd24vZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2Ryb3Bkb3duL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9kcm9wZG93bi9zdHlsZS9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2Ryb3Bkb3duL3N0eWxlL2luZGV4LmNzcz9kNWM4Iiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9wYWdpbmF0aW9uL01pbmlTZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3BhZ2luYXRpb24vUGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvcGFnaW5hdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvcGFnaW5hdGlvbi9zdHlsZS9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3BhZ2luYXRpb24vc3R5bGUvaW5kZXguY3NzPzJmMTIiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3JhZGlvL2dyb3VwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9yYWRpby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvcmFkaW8vcmFkaW8uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3JhZGlvL3JhZGlvQnV0dG9uLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9yYWRpby9zdHlsZS9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3JhZGlvL3N0eWxlL2luZGV4LmNzcz85MjI4Iiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9zcGluL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9zcGluL3N0eWxlL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvc3Bpbi9zdHlsZS9pbmRleC5jc3M/NjZlNSIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvdGFibGUvQ29sdW1uLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy90YWJsZS9Db2x1bW5Hcm91cC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvdGFibGUvRmlsdGVyRHJvcGRvd25NZW51V3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvdGFibGUvU2VsZWN0aW9uQm94LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy90YWJsZS9TZWxlY3Rpb25DaGVja2JveEFsbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvdGFibGUvVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3RhYmxlL2NyZWF0ZUJvZHlSb3cuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3RhYmxlL2NyZWF0ZVN0b3JlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy90YWJsZS9maWx0ZXJEcm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvdGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3RhYmxlL3N0eWxlL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvdGFibGUvc3R5bGUvaW5kZXguY3NzP2Q3YmYiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3RhYmxlL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2Ryb3Bkb3duL3N0eWxlL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvcGFnaW5hdGlvbi9zdHlsZS9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3JhZGlvL3N0eWxlL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvc3Bpbi9zdHlsZS9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3RhYmxlL3N0eWxlL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2RvbS1jbG9zZXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZG9tLW1hdGNoZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N0YWNrLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19VaW50OEFycmF5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcHBseS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXNzaWduTWVyZ2VWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUZvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUtleXNJbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZU1lcmdlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlTWVyZ2VEZWVwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVNldFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVGltZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VVbmFyeS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVBcnJheUJ1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVCdWZmZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29weUFycmF5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5T2JqZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jcmVhdGVBc3NpZ25lci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlQmFzZUZvci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pbml0Q2xvbmVPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzSXRlcmF0ZWVDYWxsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc1Byb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlS2V5c0luLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19ub2RlVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb3ZlckFyZy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb3ZlclJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3NhZmVHZXQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3NldFRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zaG9ydE91dC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrR2V0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja0hhcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tTZXQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcnJheUxpa2UuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcnJheUxpa2VPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNCdWZmZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNQbGFpbk9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gva2V5c0luLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL21lcmdlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJGYWxzZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC90b1BsYWluT2JqZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmMtZHJvcGRvd24vZXMvRHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYy1kcm9wZG93bi9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JjLWRyb3Bkb3duL2VzL3BsYWNlbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYy1wYWdpbmF0aW9uL2VzL0tleUNvZGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYy1wYWdpbmF0aW9uL2VzL09wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYy1wYWdpbmF0aW9uL2VzL1BhZ2VyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmMtcGFnaW5hdGlvbi9lcy9QYWdpbmF0aW9uLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmMtcGFnaW5hdGlvbi9lcy9sb2NhbGUvemhfQ04uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYy10YWJsZS9lcy9CYXNlVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYy10YWJsZS9lcy9Cb2R5VGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYy10YWJsZS9lcy9Db2xHcm91cC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JjLXRhYmxlL2VzL0NvbHVtbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JjLXRhYmxlL2VzL0NvbHVtbkdyb3VwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmMtdGFibGUvZXMvQ29sdW1uTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JjLXRhYmxlL2VzL0V4cGFuZEljb24uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYy10YWJsZS9lcy9FeHBhbmRhYmxlUm93LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmMtdGFibGUvZXMvRXhwYW5kYWJsZVRhYmxlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmMtdGFibGUvZXMvSGVhZFRhYmxlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmMtdGFibGUvZXMvVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYy10YWJsZS9lcy9UYWJsZUNlbGwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYy10YWJsZS9lcy9UYWJsZUhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JjLXRhYmxlL2VzL1RhYmxlSGVhZGVyUm93LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmMtdGFibGUvZXMvVGFibGVSb3cuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYy10YWJsZS9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JjLXRhYmxlL2VzL3V0aWxzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmMtdGFibGUvbm9kZV9tb2R1bGVzL3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0L3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0LmVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyx5SEFBeUgsY0FBYztBQUM1STtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUZBQTJCLGNBQWMscUZBQThDO0FBQ3ZGO0FBQ0E7QUFDQSxxQkFBcUIsbURBQW1EO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGFBQWE7QUFDdEMsNEhBQW1ELGVBQWU7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFF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QUFLOztBQUVMO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUxBOzs7Ozs7Ozs7Ozs7O0FDQ0E7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQSxFQUFFOztBQUVGLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRCx1RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSw0Qzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxxREFBcUQ7QUFDOUQ7QUFDQTtBQUNBLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyx5SEFBeUgsY0FBYztBQUM1STtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGlDQUFp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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDckNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlFOzs7Ozs7Ozs7Ozs7OztBQ2pNQTtBQUNBLGtIOzs7Ozs7Ozs7Ozs7O0FDREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyRTs7Ozs7Ozs7Ozs7OztBQzlDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEscUJBQXFCO0FBQ2xDO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcseUNBQXlDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyw0QkFBNEI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0Esd0U7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEtBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7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O0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsOEdBQXVFLHNDQUFzQztBQUM3RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLDhHQUF1RSxzQ0FBc0M7QUFDN0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRGQUE0RixhQUFhO0FBQ3pHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3bEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLG1FQUFtRSxhQUFhO0FBQ2hGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsaUZBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHFCQUFxQix1QkFBdUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsa0NBQWtDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTyw2REFBNkQ7QUFDcEUscUhBQXFDLGlDQUFpQztBQUN0RSxtSUFBbUQscURBQXFEO0FBQ3hHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0Esd0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwTUE7QUFDQTtBQUNBO0FBQzJCO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5RkFBNkI7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sdUlBQTJFLGNBQWM7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSEE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0EsaUZBQTBDLDZFQUE2RTtBQUN2SDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDhFQUF1QyxvQ0FBb0Msb0NBQW9DLEVBQUU7QUFDakgsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDb0I7QUFDcEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUdBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGlDQUFpQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEZBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVELDhFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsaUZBQTBDLGlFQUFpRTtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNrQjtBQUNsQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsbUVBQW1FLGFBQWE7QUFDaEY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFNBQVMsK0VBQStFO0FBQ3hGO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9JRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDa0I7QUFDQztBQUNuQjtBQUNpQjs7QUFFakI7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLGdGQUFnRjtBQUNoRjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QixtQ0FBbUM7QUFDaEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJGQUErQixlQUFlLHFCQUFxQjtBQUNuRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw4STs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1UEE7QUFDQTtBQUMyQjtBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzJCO0FBQzNCO0FBQ0E7QUFDbUI7QUFDYTtBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQXlEOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaURBQWlEOztBQUVqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsT0FBTyxtQ0FBbUM7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxPQUFPLHVDQUF1QztBQUM5QztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsT0FBTyx3Q0FBd0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7O0FBRWxEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7QUN0RkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVRIiwiZmlsZSI6IjExLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFuaW1hdGlvbiA9IHZvaWQgMDtcbmZ1bmN0aW9uIGlzQ3NzQW5pbWF0aW9uU3VwcG9ydGVkKCkge1xuICAgIGlmIChhbmltYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gYW5pbWF0aW9uO1xuICAgIH1cbiAgICB2YXIgZG9tUHJlZml4ZXMgPSAnV2Via2l0IE1veiBPIG1zIEtodG1sJy5zcGxpdCgnICcpO1xuICAgIHZhciBlbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpZiAoZWxtLnN0eWxlLmFuaW1hdGlvbk5hbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhbmltYXRpb24gPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoYW5pbWF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb21QcmVmaXhlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGVsbS5zdHlsZVtkb21QcmVmaXhlc1tpXSArICdBbmltYXRpb25OYW1lJ10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgYW5pbWF0aW9uID0gYW5pbWF0aW9uIHx8IGZhbHNlO1xuICAgIHJldHVybiBhbmltYXRpb247XG59XG5leHBvcnQgZGVmYXVsdCBpc0Nzc0FuaW1hdGlvblN1cHBvcnRlZDsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbnZhciBfX3Jlc3QgPSB0aGlzICYmIHRoaXMuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgICB9aWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgICB9cmV0dXJuIHQ7XG59O1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24nO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vaWNvbic7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9kcm9wZG93bic7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbnZhciBCdXR0b25Hcm91cCA9IEJ1dHRvbi5Hcm91cDtcblxudmFyIERyb3Bkb3duQnV0dG9uID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoRHJvcGRvd25CdXR0b24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gRHJvcGRvd25CdXR0b24oKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEcm9wZG93bkJ1dHRvbik7XG5cbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChEcm9wZG93bkJ1dHRvbi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKERyb3Bkb3duQnV0dG9uKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKERyb3Bkb3duQnV0dG9uLCBbe1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICB0eXBlID0gX2EudHlwZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZCA9IF9hLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSBfYS5vbkNsaWNrLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuID0gX2EuY2hpbGRyZW4sXG4gICAgICAgICAgICAgICAgcHJlZml4Q2xzID0gX2EucHJlZml4Q2xzLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBvdmVybGF5ID0gX2Eub3ZlcmxheSxcbiAgICAgICAgICAgICAgICB0cmlnZ2VyID0gX2EudHJpZ2dlcixcbiAgICAgICAgICAgICAgICBhbGlnbiA9IF9hLmFsaWduLFxuICAgICAgICAgICAgICAgIHZpc2libGUgPSBfYS52aXNpYmxlLFxuICAgICAgICAgICAgICAgIG9uVmlzaWJsZUNoYW5nZSA9IF9hLm9uVmlzaWJsZUNoYW5nZSxcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQgPSBfYS5wbGFjZW1lbnQsXG4gICAgICAgICAgICAgICAgZ2V0UG9wdXBDb250YWluZXIgPSBfYS5nZXRQb3B1cENvbnRhaW5lcixcbiAgICAgICAgICAgICAgICByZXN0UHJvcHMgPSBfX3Jlc3QoX2EsIFtcInR5cGVcIiwgXCJkaXNhYmxlZFwiLCBcIm9uQ2xpY2tcIiwgXCJjaGlsZHJlblwiLCBcInByZWZpeENsc1wiLCBcImNsYXNzTmFtZVwiLCBcIm92ZXJsYXlcIiwgXCJ0cmlnZ2VyXCIsIFwiYWxpZ25cIiwgXCJ2aXNpYmxlXCIsIFwib25WaXNpYmxlQ2hhbmdlXCIsIFwicGxhY2VtZW50XCIsIFwiZ2V0UG9wdXBDb250YWluZXJcIl0pO1xuICAgICAgICAgICAgdmFyIGRyb3Bkb3duUHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgYWxpZ246IGFsaWduLFxuICAgICAgICAgICAgICAgIG92ZXJsYXk6IG92ZXJsYXksXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICAgICAgICAgIHRyaWdnZXI6IGRpc2FibGVkID8gW10gOiB0cmlnZ2VyLFxuICAgICAgICAgICAgICAgIG9uVmlzaWJsZUNoYW5nZTogb25WaXNpYmxlQ2hhbmdlLFxuICAgICAgICAgICAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgICAgICAgICAgIGdldFBvcHVwQ29udGFpbmVyOiBnZXRQb3B1cENvbnRhaW5lclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICgndmlzaWJsZScgaW4gdGhpcy5wcm9wcykge1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duUHJvcHMudmlzaWJsZSA9IHZpc2libGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBCdXR0b25Hcm91cCxcbiAgICAgICAgICAgICAgICBfZXh0ZW5kcyh7fSwgcmVzdFByb3BzLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhwcmVmaXhDbHMsIGNsYXNzTmFtZSkgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgQnV0dG9uLFxuICAgICAgICAgICAgICAgICAgICB7IHR5cGU6IHR5cGUsIGRpc2FibGVkOiBkaXNhYmxlZCwgb25DbGljazogb25DbGljayB9LFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgRHJvcGRvd24sXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duUHJvcHMsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBCdXR0b24sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHR5cGU6IHR5cGUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyB0eXBlOiAnZG93bicgfSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gRHJvcGRvd25CdXR0b247XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duQnV0dG9uO1xuXG5Ecm9wZG93bkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcGxhY2VtZW50OiAnYm90dG9tUmlnaHQnLFxuICAgIHR5cGU6ICdkZWZhdWx0JyxcbiAgICBwcmVmaXhDbHM6ICdhbnQtZHJvcGRvd24tYnV0dG9uJ1xufTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSY0Ryb3Bkb3duIGZyb20gJ3JjLWRyb3Bkb3duJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnLi4vX3V0aWwvd2FybmluZyc7XG5cbnZhciBEcm9wZG93biA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKERyb3Bkb3duLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIERyb3Bkb3duKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRHJvcGRvd24pO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoRHJvcGRvd24uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihEcm9wZG93bikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhEcm9wZG93biwgW3tcbiAgICAgICAga2V5OiAnZ2V0VHJhbnNpdGlvbk5hbWUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VHJhbnNpdGlvbk5hbWUoKSB7XG4gICAgICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBfcHJvcHMkcGxhY2VtZW50ID0gX3Byb3BzLnBsYWNlbWVudCxcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQgPSBfcHJvcHMkcGxhY2VtZW50ID09PSB1bmRlZmluZWQgPyAnJyA6IF9wcm9wcyRwbGFjZW1lbnQsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWUgPSBfcHJvcHMudHJhbnNpdGlvbk5hbWU7XG5cbiAgICAgICAgICAgIGlmICh0cmFuc2l0aW9uTmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRyYW5zaXRpb25OYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBsYWNlbWVudC5pbmRleE9mKCd0b3AnKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdzbGlkZS1kb3duJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAnc2xpZGUtdXAnO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICAgIHZhciBvdmVybGF5ID0gdGhpcy5wcm9wcy5vdmVybGF5O1xuXG4gICAgICAgICAgICB2YXIgb3ZlcmxheVByb3BzID0gb3ZlcmxheS5wcm9wcztcbiAgICAgICAgICAgIHdhcm5pbmcoIW92ZXJsYXlQcm9wcy5tb2RlIHx8IG92ZXJsYXlQcm9wcy5tb2RlID09PSAndmVydGljYWwnLCAnbW9kZT1cIicgKyBvdmVybGF5UHJvcHMubW9kZSArICdcIiBpcyBub3Qgc3VwcG9ydGVkIGZvciBEcm9wZG93blxcJ3MgTWVudS4nKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wczIuY2hpbGRyZW4sXG4gICAgICAgICAgICAgICAgcHJlZml4Q2xzID0gX3Byb3BzMi5wcmVmaXhDbHMsXG4gICAgICAgICAgICAgICAgb3ZlcmxheUVsZW1lbnRzID0gX3Byb3BzMi5vdmVybGF5LFxuICAgICAgICAgICAgICAgIHRyaWdnZXIgPSBfcHJvcHMyLnRyaWdnZXIsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQgPSBfcHJvcHMyLmRpc2FibGVkO1xuXG4gICAgICAgICAgICB2YXIgY2hpbGQgPSBSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICAgICAgICAgIHZhciBvdmVybGF5ID0gUmVhY3QuQ2hpbGRyZW4ub25seShvdmVybGF5RWxlbWVudHMpO1xuICAgICAgICAgICAgdmFyIGRyb3Bkb3duVHJpZ2dlciA9IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjaGlsZC5wcm9wcy5jbGFzc05hbWUsIHByZWZpeENscyArICctdHJpZ2dlcicpLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBtZW51IGNhbm5vdCBiZSBzZWxlY3RhYmxlIGluIGRyb3Bkb3duIGRlZmF1bHRseVxuICAgICAgICAgICAgdmFyIHNlbGVjdGFibGUgPSBvdmVybGF5LnByb3BzLnNlbGVjdGFibGUgfHwgZmFsc2U7XG4gICAgICAgICAgICB2YXIgZml4ZWRNb2RlT3ZlcmxheSA9IFJlYWN0LmNsb25lRWxlbWVudChvdmVybGF5LCB7XG4gICAgICAgICAgICAgICAgbW9kZTogJ3ZlcnRpY2FsJyxcbiAgICAgICAgICAgICAgICBzZWxlY3RhYmxlOiBzZWxlY3RhYmxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIFJjRHJvcGRvd24sXG4gICAgICAgICAgICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgdHJhbnNpdGlvbk5hbWU6IHRoaXMuZ2V0VHJhbnNpdGlvbk5hbWUoKSwgdHJpZ2dlcjogZGlzYWJsZWQgPyBbXSA6IHRyaWdnZXIsIG92ZXJsYXk6IGZpeGVkTW9kZU92ZXJsYXkgfSksXG4gICAgICAgICAgICAgICAgZHJvcGRvd25UcmlnZ2VyXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIERyb3Bkb3duO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bjtcblxuRHJvcGRvd24uZGVmYXVsdFByb3BzID0ge1xuICAgIHByZWZpeENsczogJ2FudC1kcm9wZG93bicsXG4gICAgbW91c2VFbnRlckRlbGF5OiAwLjE1LFxuICAgIG1vdXNlTGVhdmVEZWxheTogMC4xLFxuICAgIHBsYWNlbWVudDogJ2JvdHRvbUxlZnQnXG59OyIsImltcG9ydCBEcm9wZG93biBmcm9tICcuL2Ryb3Bkb3duJztcbmltcG9ydCBEcm9wZG93bkJ1dHRvbiBmcm9tICcuL2Ryb3Bkb3duLWJ1dHRvbic7XG5Ecm9wZG93bi5CdXR0b24gPSBEcm9wZG93bkJ1dHRvbjtcbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duOyIsImltcG9ydCAnLi4vLi4vc3R5bGUvaW5kZXguY3NzJztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuLy8gc3R5bGUgZGVwZW5kZW5jaWVzXG5pbXBvcnQgJy4uLy4uL2J1dHRvbi9zdHlsZS9jc3MnOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXguY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXguY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4uL3NlbGVjdCc7XG5cbnZhciBNaW5pU2VsZWN0ID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoTWluaVNlbGVjdCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBNaW5pU2VsZWN0KCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWluaVNlbGVjdCk7XG5cbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChNaW5pU2VsZWN0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTWluaVNlbGVjdCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhNaW5pU2VsZWN0LCBbe1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VsZWN0LCBfZXh0ZW5kcyh7IHNpemU6ICdzbWFsbCcgfSwgdGhpcy5wcm9wcykpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE1pbmlTZWxlY3Q7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IE1pbmlTZWxlY3Q7XG5cbk1pbmlTZWxlY3QuT3B0aW9uID0gU2VsZWN0Lk9wdGlvbjsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbnZhciBfX3Jlc3QgPSB0aGlzICYmIHRoaXMuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgICB9aWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgICB9cmV0dXJuIHQ7XG59O1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJjUGFnaW5hdGlvbiBmcm9tICdyYy1wYWdpbmF0aW9uJztcbmltcG9ydCBlblVTIGZyb20gJ3JjLXBhZ2luYXRpb24vZXMvbG9jYWxlL2VuX1VTJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IExvY2FsZVJlY2VpdmVyIGZyb20gJy4uL2xvY2FsZS1wcm92aWRlci9Mb2NhbGVSZWNlaXZlcic7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4uL3NlbGVjdCc7XG5pbXBvcnQgTWluaVNlbGVjdCBmcm9tICcuL01pbmlTZWxlY3QnO1xuXG52YXIgUGFnaW5hdGlvbiA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFBhZ2luYXRpb24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gUGFnaW5hdGlvbigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBhZ2luYXRpb24pO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChQYWdpbmF0aW9uLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUGFnaW5hdGlvbikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXG4gICAgICAgIF90aGlzLnJlbmRlclBhZ2luYXRpb24gPSBmdW5jdGlvbiAobG9jYWxlKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgc2l6ZSA9IF9hLnNpemUsXG4gICAgICAgICAgICAgICAgcmVzdFByb3BzID0gX19yZXN0KF9hLCBbXCJjbGFzc05hbWVcIiwgXCJzaXplXCJdKTtcbiAgICAgICAgICAgIHZhciBpc1NtYWxsID0gc2l6ZSA9PT0gJ3NtYWxsJztcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJjUGFnaW5hdGlvbiwgX2V4dGVuZHMoe30sIHJlc3RQcm9wcywgeyBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCB7IG1pbmk6IGlzU21hbGwgfSksIHNlbGVjdENvbXBvbmVudENsYXNzOiBpc1NtYWxsID8gTWluaVNlbGVjdCA6IFNlbGVjdCwgbG9jYWxlOiBsb2NhbGUgfSkpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFBhZ2luYXRpb24sIFt7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBMb2NhbGVSZWNlaXZlcixcbiAgICAgICAgICAgICAgICB7IGNvbXBvbmVudE5hbWU6ICdQYWdpbmF0aW9uJywgZGVmYXVsdExvY2FsZTogZW5VUyB9LFxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUGFnaW5hdGlvblxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBQYWdpbmF0aW9uO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uO1xuXG5QYWdpbmF0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwcmVmaXhDbHM6ICdhbnQtcGFnaW5hdGlvbicsXG4gICAgc2VsZWN0UHJlZml4Q2xzOiAnYW50LXNlbGVjdCdcbn07IiwiaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi9QYWdpbmF0aW9uJztcbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb247IiwiaW1wb3J0ICcuLi8uLi9zdHlsZS9pbmRleC5jc3MnO1xuaW1wb3J0ICcuL2luZGV4LmNzcyc7XG4vLyBzdHlsZSBkZXBlbmRlbmNpZXNcbmltcG9ydCAnLi4vLi4vc2VsZWN0L3N0eWxlL2Nzcyc7XG5pbXBvcnQgJy4uLy4uL2lucHV0L3N0eWxlL2Nzcyc7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHNoYWxsb3dFcXVhbCBmcm9tICdzaGFsbG93ZXF1YWwnO1xuaW1wb3J0IFJhZGlvIGZyb20gJy4vcmFkaW8nO1xuZnVuY3Rpb24gZ2V0Q2hlY2tlZFZhbHVlKGNoaWxkcmVuKSB7XG4gICAgdmFyIHZhbHVlID0gbnVsbDtcbiAgICB2YXIgbWF0Y2hlZCA9IGZhbHNlO1xuICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChyYWRpbykge1xuICAgICAgICBpZiAocmFkaW8gJiYgcmFkaW8ucHJvcHMgJiYgcmFkaW8ucHJvcHMuY2hlY2tlZCkge1xuICAgICAgICAgICAgdmFsdWUgPSByYWRpby5wcm9wcy52YWx1ZTtcbiAgICAgICAgICAgIG1hdGNoZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG1hdGNoZWQgPyB7IHZhbHVlOiB2YWx1ZSB9IDogdW5kZWZpbmVkO1xufVxuXG52YXIgUmFkaW9Hcm91cCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFJhZGlvR3JvdXAsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gUmFkaW9Hcm91cChwcm9wcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmFkaW9Hcm91cCk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFJhZGlvR3JvdXAuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihSYWRpb0dyb3VwKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgIF90aGlzLm9uUmFkaW9DaGFuZ2UgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIHZhciBsYXN0VmFsdWUgPSBfdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGV2LnRhcmdldC52YWx1ZTtcblxuICAgICAgICAgICAgaWYgKCEoJ3ZhbHVlJyBpbiBfdGhpcy5wcm9wcykpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG9uQ2hhbmdlID0gX3RoaXMucHJvcHMub25DaGFuZ2U7XG4gICAgICAgICAgICBpZiAob25DaGFuZ2UgJiYgdmFsdWUgIT09IGxhc3RWYWx1ZSkge1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKGV2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHZhbHVlID0gdm9pZCAwO1xuICAgICAgICBpZiAoJ3ZhbHVlJyBpbiBwcm9wcykge1xuICAgICAgICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmICgnZGVmYXVsdFZhbHVlJyBpbiBwcm9wcykge1xuICAgICAgICAgICAgdmFsdWUgPSBwcm9wcy5kZWZhdWx0VmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgY2hlY2tlZFZhbHVlID0gZ2V0Q2hlY2tlZFZhbHVlKHByb3BzLmNoaWxkcmVuKTtcbiAgICAgICAgICAgIHZhbHVlID0gY2hlY2tlZFZhbHVlICYmIGNoZWNrZWRWYWx1ZS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFJhZGlvR3JvdXAsIFt7XG4gICAgICAgIGtleTogJ2dldENoaWxkQ29udGV4dCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJhZGlvR3JvdXA6IHtcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25SYWRpb0NoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiB0aGlzLnByb3BzLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnByb3BzLm5hbWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgICAgICBpZiAoJ3ZhbHVlJyBpbiBuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG5leHRQcm9wcy52YWx1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hlY2tlZFZhbHVlID0gZ2V0Q2hlY2tlZFZhbHVlKG5leHRQcm9wcy5jaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrZWRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjaGVja2VkVmFsdWUudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzaG91bGRDb21wb25lbnRVcGRhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gIXNoYWxsb3dFcXVhbCh0aGlzLnByb3BzLCBuZXh0UHJvcHMpIHx8ICFzaGFsbG93RXF1YWwodGhpcy5zdGF0ZSwgbmV4dFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgICAgICAgdmFyIF9wcm9wcyRwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgICAgICAgcHJlZml4Q2xzID0gX3Byb3BzJHByZWZpeENscyA9PT0gdW5kZWZpbmVkID8gJ2FudC1yYWRpby1ncm91cCcgOiBfcHJvcHMkcHJlZml4Q2xzLFxuICAgICAgICAgICAgICAgIF9wcm9wcyRjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzJGNsYXNzTmFtZSA9PT0gdW5kZWZpbmVkID8gJycgOiBfcHJvcHMkY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSBwcm9wcy5vcHRpb25zO1xuXG4gICAgICAgICAgICB2YXIgY2xhc3NTdHJpbmcgPSBjbGFzc05hbWVzKHByZWZpeENscywgX2RlZmluZVByb3BlcnR5KHt9LCBwcmVmaXhDbHMgKyAnLScgKyBwcm9wcy5zaXplLCBwcm9wcy5zaXplKSwgY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuICAgICAgICAgICAgLy8g5aaC5p6c5a2Y5ZyoIG9wdGlvbnMsIOS8mOWFiOS9v+eUqFxuICAgICAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW4gPSBvcHRpb25zLm1hcChmdW5jdGlvbiAob3B0aW9uLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOatpOWkhOexu+Wei+iHquWKqOaOqOWvvOS4uiBzdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJhZGlvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBpbmRleCwgZGlzYWJsZWQ6IF90aGlzMi5wcm9wcy5kaXNhYmxlZCwgdmFsdWU6IG9wdGlvbiwgb25DaGFuZ2U6IF90aGlzMi5vblJhZGlvQ2hhbmdlLCBjaGVja2VkOiBfdGhpczIuc3RhdGUudmFsdWUgPT09IG9wdGlvbiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOatpOWkhOexu+Wei+iHquWKqOaOqOWvvOS4uiB7IGxhYmVsOiBzdHJpbmcgdmFsdWU6IHN0cmluZyB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSYWRpbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogaW5kZXgsIGRpc2FibGVkOiBvcHRpb24uZGlzYWJsZWQgfHwgX3RoaXMyLnByb3BzLmRpc2FibGVkLCB2YWx1ZTogb3B0aW9uLnZhbHVlLCBvbkNoYW5nZTogX3RoaXMyLm9uUmFkaW9DaGFuZ2UsIGNoZWNrZWQ6IF90aGlzMi5zdGF0ZS52YWx1ZSA9PT0gb3B0aW9uLnZhbHVlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLmxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogY2xhc3NTdHJpbmcsIHN0eWxlOiBwcm9wcy5zdHlsZSwgb25Nb3VzZUVudGVyOiBwcm9wcy5vbk1vdXNlRW50ZXIsIG9uTW91c2VMZWF2ZTogcHJvcHMub25Nb3VzZUxlYXZlLCBpZDogcHJvcHMuaWQgfSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBSYWRpb0dyb3VwO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBSYWRpb0dyb3VwO1xuXG5SYWRpb0dyb3VwLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBkaXNhYmxlZDogZmFsc2Vcbn07XG5SYWRpb0dyb3VwLmNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgIHJhZGlvR3JvdXA6IFByb3BUeXBlcy5hbnlcbn07IiwiaW1wb3J0IFJhZGlvIGZyb20gJy4vcmFkaW8nO1xuaW1wb3J0IEdyb3VwIGZyb20gJy4vZ3JvdXAnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL3JhZGlvQnV0dG9uJztcblJhZGlvLkJ1dHRvbiA9IEJ1dHRvbjtcblJhZGlvLkdyb3VwID0gR3JvdXA7XG5leHBvcnQgeyBCdXR0b24sIEdyb3VwIH07XG5leHBvcnQgZGVmYXVsdCBSYWRpbzsiLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbnZhciBfX3Jlc3QgPSB0aGlzICYmIHRoaXMuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgICB9aWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgICB9cmV0dXJuIHQ7XG59O1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSY0NoZWNrYm94IGZyb20gJ3JjLWNoZWNrYm94JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHNoYWxsb3dFcXVhbCBmcm9tICdzaGFsbG93ZXF1YWwnO1xuXG52YXIgUmFkaW8gPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhSYWRpbywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBSYWRpbygpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJhZGlvKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUmFkaW8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihSYWRpbykpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXG4gICAgICAgIF90aGlzLnNhdmVDaGVja2JveCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICBfdGhpcy5yY0NoZWNrYm94ID0gbm9kZTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhSYWRpbywgW3tcbiAgICAgICAga2V5OiAnc2hvdWxkQ29tcG9uZW50VXBkYXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSwgbmV4dENvbnRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiAhc2hhbGxvd0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcykgfHwgIXNoYWxsb3dFcXVhbCh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpIHx8ICFzaGFsbG93RXF1YWwodGhpcy5jb250ZXh0LnJhZGlvR3JvdXAsIG5leHRDb250ZXh0LnJhZGlvR3JvdXApO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdmb2N1cycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgICAgICAgIHRoaXMucmNDaGVja2JveC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdibHVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGJsdXIoKSB7XG4gICAgICAgICAgICB0aGlzLnJjQ2hlY2tib3guYmx1cigpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgICAgICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG5cbiAgICAgICAgICAgIHZhciBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgICAgICAgICAgICByZXN0UHJvcHMgPSBfX3Jlc3QocHJvcHMsIFtcInByZWZpeENsc1wiLCBcImNsYXNzTmFtZVwiLCBcImNoaWxkcmVuXCIsIFwic3R5bGVcIl0pO1xuXG4gICAgICAgICAgICB2YXIgcmFkaW9Hcm91cCA9IGNvbnRleHQucmFkaW9Hcm91cDtcblxuICAgICAgICAgICAgdmFyIHJhZGlvUHJvcHMgPSBfZXh0ZW5kcyh7fSwgcmVzdFByb3BzKTtcbiAgICAgICAgICAgIGlmIChyYWRpb0dyb3VwKSB7XG4gICAgICAgICAgICAgICAgcmFkaW9Qcm9wcy5uYW1lID0gcmFkaW9Hcm91cC5uYW1lO1xuICAgICAgICAgICAgICAgIHJhZGlvUHJvcHMub25DaGFuZ2UgPSByYWRpb0dyb3VwLm9uQ2hhbmdlO1xuICAgICAgICAgICAgICAgIHJhZGlvUHJvcHMuY2hlY2tlZCA9IHByb3BzLnZhbHVlID09PSByYWRpb0dyb3VwLnZhbHVlO1xuICAgICAgICAgICAgICAgIHJhZGlvUHJvcHMuZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCB8fCByYWRpb0dyb3VwLmRpc2FibGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHdyYXBwZXJDbGFzc1N0cmluZyA9IGNsYXNzTmFtZXMoY2xhc3NOYW1lLCAoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLXdyYXBwZXInLCB0cnVlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLXdyYXBwZXItY2hlY2tlZCcsIHJhZGlvUHJvcHMuY2hlY2tlZCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy13cmFwcGVyLWRpc2FibGVkJywgcmFkaW9Qcm9wcy5kaXNhYmxlZCksIF9jbGFzc05hbWVzKSk7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiB3cmFwcGVyQ2xhc3NTdHJpbmcsIHN0eWxlOiBzdHlsZSwgb25Nb3VzZUVudGVyOiBwcm9wcy5vbk1vdXNlRW50ZXIsIG9uTW91c2VMZWF2ZTogcHJvcHMub25Nb3VzZUxlYXZlIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSY0NoZWNrYm94LCBfZXh0ZW5kcyh7fSwgcmFkaW9Qcm9wcywgeyBwcmVmaXhDbHM6IHByZWZpeENscywgcmVmOiB0aGlzLnNhdmVDaGVja2JveCB9KSksXG4gICAgICAgICAgICAgICAgY2hpbGRyZW4gIT09IHVuZGVmaW5lZCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgICAgICAgICApIDogbnVsbFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBSYWRpbztcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgUmFkaW87XG5cblJhZGlvLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwcmVmaXhDbHM6ICdhbnQtcmFkaW8nLFxuICAgIHR5cGU6ICdyYWRpbydcbn07XG5SYWRpby5jb250ZXh0VHlwZXMgPSB7XG4gICAgcmFkaW9Hcm91cDogUHJvcFR5cGVzLmFueVxufTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmFkaW8gZnJvbSAnLi9yYWRpbyc7XG5cbnZhciBSYWRpb0J1dHRvbiA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFJhZGlvQnV0dG9uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFJhZGlvQnV0dG9uKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmFkaW9CdXR0b24pO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUmFkaW9CdXR0b24uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihSYWRpb0J1dHRvbikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhSYWRpb0J1dHRvbiwgW3tcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciByYWRpb1Byb3BzID0gX2V4dGVuZHMoe30sIHRoaXMucHJvcHMpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udGV4dC5yYWRpb0dyb3VwKSB7XG4gICAgICAgICAgICAgICAgcmFkaW9Qcm9wcy5vbkNoYW5nZSA9IHRoaXMuY29udGV4dC5yYWRpb0dyb3VwLm9uQ2hhbmdlO1xuICAgICAgICAgICAgICAgIHJhZGlvUHJvcHMuY2hlY2tlZCA9IHRoaXMucHJvcHMudmFsdWUgPT09IHRoaXMuY29udGV4dC5yYWRpb0dyb3VwLnZhbHVlO1xuICAgICAgICAgICAgICAgIHJhZGlvUHJvcHMuZGlzYWJsZWQgPSB0aGlzLnByb3BzLmRpc2FibGVkIHx8IHRoaXMuY29udGV4dC5yYWRpb0dyb3VwLmRpc2FibGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmFkaW8sIHJhZGlvUHJvcHMpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFJhZGlvQnV0dG9uO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBSYWRpb0J1dHRvbjtcblxuUmFkaW9CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICAgIHByZWZpeENsczogJ2FudC1yYWRpby1idXR0b24nXG59O1xuUmFkaW9CdXR0b24uY29udGV4dFR5cGVzID0ge1xuICAgIHJhZGlvR3JvdXA6IFByb3BUeXBlcy5hbnlcbn07IiwiaW1wb3J0ICcuLi8uLi9zdHlsZS9pbmRleC5jc3MnO1xuaW1wb3J0ICcuL2luZGV4LmNzcyc7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbnZhciBfX3Jlc3QgPSB0aGlzICYmIHRoaXMuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgICB9aWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgICB9cmV0dXJuIHQ7XG59O1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IEFuaW1hdGUgZnJvbSAncmMtYW5pbWF0ZSc7XG5pbXBvcnQgaXNDc3NBbmltYXRpb25TdXBwb3J0ZWQgZnJvbSAnLi4vX3V0aWwvaXNDc3NBbmltYXRpb25TdXBwb3J0ZWQnO1xuaW1wb3J0IG9taXQgZnJvbSAnb21pdC5qcyc7XG5cbnZhciBTcGluID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoU3BpbiwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBTcGluKHByb3BzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTcGluKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoU3Bpbi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNwaW4pKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgICAgdmFyIHNwaW5uaW5nID0gcHJvcHMuc3Bpbm5pbmc7XG4gICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc3Bpbm5pbmc6IHNwaW5uaW5nXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoU3BpbiwgW3tcbiAgICAgICAga2V5OiAnaXNOZXN0ZWRQYXR0ZXJuJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzTmVzdGVkUGF0dGVybigpIHtcbiAgICAgICAgICAgIHJldHVybiAhISh0aGlzLnByb3BzICYmIHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICAgIGlmICghaXNDc3NBbmltYXRpb25TdXBwb3J0ZWQoKSkge1xuICAgICAgICAgICAgICAgIC8vIFNob3cgdGV4dCBpbiBJRTlcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbm90Q3NzQW5pbWF0aW9uU3VwcG9ydGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGVib3VuY2VUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVib3VuY2VUaW1lb3V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmRlbGF5VGltZW91dCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5VGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgY3VycmVudFNwaW5uaW5nID0gdGhpcy5wcm9wcy5zcGlubmluZztcbiAgICAgICAgICAgIHZhciBzcGlubmluZyA9IG5leHRQcm9wcy5zcGlubmluZztcbiAgICAgICAgICAgIHZhciBkZWxheSA9IHRoaXMucHJvcHMuZGVsYXk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmRlYm91bmNlVGltZW91dCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlYm91bmNlVGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3VycmVudFNwaW5uaW5nICYmICFzcGlubmluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVib3VuY2VUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLnNldFN0YXRlKHsgc3Bpbm5pbmc6IHNwaW5uaW5nIH0pO1xuICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGVsYXlUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5VGltZW91dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoc3Bpbm5pbmcgJiYgZGVsYXkgJiYgIWlzTmFOKE51bWJlcihkZWxheSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRlbGF5VGltZW91dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVsYXlUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGF5VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIuc2V0U3RhdGUoeyBzcGlubmluZzogc3Bpbm5pbmcgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3Bpbm5pbmc6IHNwaW5uaW5nIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVySW5kaWNhdG9yJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckluZGljYXRvcigpIHtcbiAgICAgICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIHByZWZpeENscyA9IF9wcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgICAgICAgaW5kaWNhdG9yID0gX3Byb3BzLmluZGljYXRvcjtcblxuICAgICAgICAgICAgdmFyIGRvdENsYXNzTmFtZSA9IHByZWZpeENscyArICctZG90JztcbiAgICAgICAgICAgIGlmIChSZWFjdC5pc1ZhbGlkRWxlbWVudChpbmRpY2F0b3IpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChpbmRpY2F0b3IsIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGluZGljYXRvci5wcm9wcy5jbGFzc05hbWUsIGRvdENsYXNzTmFtZSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhkb3RDbGFzc05hbWUsIHByZWZpeENscyArICctZG90LXNwaW4nKSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2knLCBudWxsKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpJywgbnVsbCksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaScsIG51bGwpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2knLCBudWxsKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgc2l6ZSA9IF9hLnNpemUsXG4gICAgICAgICAgICAgICAgcHJlZml4Q2xzID0gX2EucHJlZml4Q2xzLFxuICAgICAgICAgICAgICAgIHRpcCA9IF9hLnRpcCxcbiAgICAgICAgICAgICAgICB3cmFwcGVyQ2xhc3NOYW1lID0gX2Eud3JhcHBlckNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICByZXN0UHJvcHMgPSBfX3Jlc3QoX2EsIFtcImNsYXNzTmFtZVwiLCBcInNpemVcIiwgXCJwcmVmaXhDbHNcIiwgXCJ0aXBcIiwgXCJ3cmFwcGVyQ2xhc3NOYW1lXCJdKTt2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgICAgICBzcGlubmluZyA9IF9zdGF0ZS5zcGlubmluZyxcbiAgICAgICAgICAgICAgICBub3RDc3NBbmltYXRpb25TdXBwb3J0ZWQgPSBfc3RhdGUubm90Q3NzQW5pbWF0aW9uU3VwcG9ydGVkO1xuXG4gICAgICAgICAgICB2YXIgc3BpbkNsYXNzTmFtZSA9IGNsYXNzTmFtZXMocHJlZml4Q2xzLCAoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLXNtJywgc2l6ZSA9PT0gJ3NtYWxsJyksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy1sZycsIHNpemUgPT09ICdsYXJnZScpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctc3Bpbm5pbmcnLCBzcGlubmluZyksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy1zaG93LXRleHQnLCAhIXRpcCB8fCBub3RDc3NBbmltYXRpb25TdXBwb3J0ZWQpLCBfY2xhc3NOYW1lcyksIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICAvLyBmaXggaHR0cHM6Ly9mYi5tZS9yZWFjdC11bmtub3duLXByb3BcbiAgICAgICAgICAgIHZhciBkaXZQcm9wcyA9IG9taXQocmVzdFByb3BzLCBbJ3NwaW5uaW5nJywgJ2RlbGF5JywgJ2luZGljYXRvciddKTtcbiAgICAgICAgICAgIHZhciBzcGluRWxlbWVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgX2V4dGVuZHMoe30sIGRpdlByb3BzLCB7IGNsYXNzTmFtZTogc3BpbkNsYXNzTmFtZSB9KSxcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckluZGljYXRvcigpLFxuICAgICAgICAgICAgICAgIHRpcCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy10ZXh0JyB9LFxuICAgICAgICAgICAgICAgICAgICB0aXBcbiAgICAgICAgICAgICAgICApIDogbnVsbFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTmVzdGVkUGF0dGVybigpKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9jbGFzc05hbWVzMjtcblxuICAgICAgICAgICAgICAgIHZhciBhbmltYXRlQ2xhc3NOYW1lID0gcHJlZml4Q2xzICsgJy1uZXN0ZWQtbG9hZGluZyc7XG4gICAgICAgICAgICAgICAgaWYgKHdyYXBwZXJDbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZUNsYXNzTmFtZSArPSAnICcgKyB3cmFwcGVyQ2xhc3NOYW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyQ2xhc3NOYW1lID0gY2xhc3NOYW1lcygoX2NsYXNzTmFtZXMyID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lczIsIHByZWZpeENscyArICctY29udGFpbmVyJywgdHJ1ZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lczIsIHByZWZpeENscyArICctYmx1cicsIHNwaW5uaW5nKSwgX2NsYXNzTmFtZXMyKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIEFuaW1hdGUsXG4gICAgICAgICAgICAgICAgICAgIF9leHRlbmRzKHt9LCBkaXZQcm9wcywgeyBjb21wb25lbnQ6ICdkaXYnLCBjbGFzc05hbWU6IGFuaW1hdGVDbGFzc05hbWUsIHN0eWxlOiBudWxsLCB0cmFuc2l0aW9uTmFtZTogJ2ZhZGUnIH0pLFxuICAgICAgICAgICAgICAgICAgICBzcGlubmluZyAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ2xvYWRpbmcnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGluRWxlbWVudFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogY29udGFpbmVyQ2xhc3NOYW1lLCBrZXk6ICdjb250YWluZXInIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNwaW5FbGVtZW50O1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFNwaW47XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IFNwaW47XG5cblNwaW4uZGVmYXVsdFByb3BzID0ge1xuICAgIHByZWZpeENsczogJ2FudC1zcGluJyxcbiAgICBzcGlubmluZzogdHJ1ZSxcbiAgICBzaXplOiAnZGVmYXVsdCcsXG4gICAgd3JhcHBlckNsYXNzTmFtZTogJydcbn07XG5TcGluLnByb3BUeXBlcyA9IHtcbiAgICBwcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNwaW5uaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydzbWFsbCcsICdkZWZhdWx0JywgJ2xhcmdlJ10pLFxuICAgIHdyYXBwZXJDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaW5kaWNhdG9yOiBQcm9wVHlwZXMubm9kZVxufTsiLCJpbXBvcnQgJy4uLy4uL3N0eWxlL2luZGV4LmNzcyc7XG5pbXBvcnQgJy4vaW5kZXguY3NzJzsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXguY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnZhciBDb2x1bW4gPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ29sdW1uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDb2x1bW4oKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbHVtbik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENvbHVtbi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENvbHVtbikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgcmV0dXJuIENvbHVtbjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29sdW1uOyIsImltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnZhciBDb2x1bW5Hcm91cCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhDb2x1bW5Hcm91cCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ29sdW1uR3JvdXAoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbHVtbkdyb3VwKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ29sdW1uR3JvdXAuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihDb2x1bW5Hcm91cCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgcmV0dXJuIENvbHVtbkdyb3VwO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBDb2x1bW5Hcm91cDtcblxuQ29sdW1uR3JvdXAuX19BTlRfVEFCTEVfQ09MVU1OX0dST1VQID0gdHJ1ZTsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7IGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lLCBvbkNsaWNrOiBwcm9wcy5vbkNsaWNrIH0sXG4gICAgICAgIHByb3BzLmNoaWxkcmVuXG4gICAgKTtcbn0pOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xudmFyIF9fcmVzdCA9IHRoaXMgJiYgdGhpcy5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICAgIH1pZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgIH1yZXR1cm4gdDtcbn07XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnLi4vY2hlY2tib3gnO1xuaW1wb3J0IFJhZGlvIGZyb20gJy4uL3JhZGlvJztcblxudmFyIFNlbGVjdGlvbkJveCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFNlbGVjdGlvbkJveCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBTZWxlY3Rpb25Cb3gocHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNlbGVjdGlvbkJveCk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFNlbGVjdGlvbkJveC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFNlbGVjdGlvbkJveCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNoZWNrZWQ6IF90aGlzLmdldENoZWNrU3RhdGUocHJvcHMpXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoU2VsZWN0aW9uQm94LCBbe1xuICAgICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudW5zdWJzY3JpYmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3N1YnNjcmliZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJzY3JpYmUoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIHN0b3JlID0gdGhpcy5wcm9wcy5zdG9yZTtcblxuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoZWNrZWQgPSBfdGhpczIuZ2V0Q2hlY2tTdGF0ZShfdGhpczIucHJvcHMpO1xuICAgICAgICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7IGNoZWNrZWQ6IGNoZWNrZWQgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0Q2hlY2tTdGF0ZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDaGVja1N0YXRlKHByb3BzKSB7XG4gICAgICAgICAgICB2YXIgc3RvcmUgPSBwcm9wcy5zdG9yZSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0U2VsZWN0aW9uID0gcHJvcHMuZGVmYXVsdFNlbGVjdGlvbixcbiAgICAgICAgICAgICAgICByb3dJbmRleCA9IHByb3BzLnJvd0luZGV4O1xuXG4gICAgICAgICAgICB2YXIgY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHN0b3JlLmdldFN0YXRlKCkuc2VsZWN0aW9uRGlydHkpIHtcbiAgICAgICAgICAgICAgICBjaGVja2VkID0gc3RvcmUuZ2V0U3RhdGUoKS5zZWxlY3RlZFJvd0tleXMuaW5kZXhPZihyb3dJbmRleCkgPj0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2hlY2tlZCA9IHN0b3JlLmdldFN0YXRlKCkuc2VsZWN0ZWRSb3dLZXlzLmluZGV4T2Yocm93SW5kZXgpID49IDAgfHwgZGVmYXVsdFNlbGVjdGlvbi5pbmRleE9mKHJvd0luZGV4KSA+PSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNoZWNrZWQ7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIHR5cGUgPSBfYS50eXBlLFxuICAgICAgICAgICAgICAgIHJvd0luZGV4ID0gX2Eucm93SW5kZXgsXG4gICAgICAgICAgICAgICAgcmVzdCA9IF9fcmVzdChfYSwgW1widHlwZVwiLCBcInJvd0luZGV4XCJdKTt2YXIgY2hlY2tlZCA9IHRoaXMuc3RhdGUuY2hlY2tlZDtcblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSYWRpbywgX2V4dGVuZHMoeyBjaGVja2VkOiBjaGVja2VkLCB2YWx1ZTogcm93SW5kZXggfSwgcmVzdCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDaGVja2JveCwgX2V4dGVuZHMoeyBjaGVja2VkOiBjaGVja2VkIH0sIHJlc3QpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBTZWxlY3Rpb25Cb3g7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGlvbkJveDsiLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJy4uL2NoZWNrYm94JztcbmltcG9ydCBEcm9wZG93biBmcm9tICcuLi9kcm9wZG93bic7XG5pbXBvcnQgTWVudSBmcm9tICcuLi9tZW51JztcbmltcG9ydCBJY29uIGZyb20gJy4uL2ljb24nO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbnZhciBTZWxlY3Rpb25DaGVja2JveEFsbCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFNlbGVjdGlvbkNoZWNrYm94QWxsLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFNlbGVjdGlvbkNoZWNrYm94QWxsKHByb3BzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTZWxlY3Rpb25DaGVja2JveEFsbCk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFNlbGVjdGlvbkNoZWNrYm94QWxsLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU2VsZWN0aW9uQ2hlY2tib3hBbGwpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgICAgX3RoaXMuaGFuZGxlU2VsZWN0QWxsQ2hhZ25lID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBjaGVja2VkID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgICAgIF90aGlzLnByb3BzLm9uU2VsZWN0KGNoZWNrZWQgPyAnYWxsJyA6ICdyZW1vdmVBbGwnLCAwLCBudWxsKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuZGVmYXVsdFNlbGVjdGlvbnMgPSBwcm9wcy5oaWRlRGVmYXVsdFNlbGVjdGlvbnMgPyBbXSA6IFt7XG4gICAgICAgICAgICBrZXk6ICdhbGwnLFxuICAgICAgICAgICAgdGV4dDogcHJvcHMubG9jYWxlLnNlbGVjdEFsbCxcbiAgICAgICAgICAgIG9uU2VsZWN0OiBmdW5jdGlvbiBvblNlbGVjdCgpIHt9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ2ludmVydCcsXG4gICAgICAgICAgICB0ZXh0OiBwcm9wcy5sb2NhbGUuc2VsZWN0SW52ZXJ0LFxuICAgICAgICAgICAgb25TZWxlY3Q6IGZ1bmN0aW9uIG9uU2VsZWN0KCkge31cbiAgICAgICAgfV07XG4gICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2hlY2tlZDogX3RoaXMuZ2V0Q2hlY2tTdGF0ZShwcm9wcyksXG4gICAgICAgICAgICBpbmRldGVybWluYXRlOiBfdGhpcy5nZXRJbmRldGVybWluYXRlU3RhdGUocHJvcHMpXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoU2VsZWN0aW9uQ2hlY2tib3hBbGwsIFt7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICAgICAgdGhpcy5zZXRDaGVja1N0YXRlKG5leHRQcm9wcyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudW5zdWJzY3JpYmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3N1YnNjcmliZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzdWJzY3JpYmUoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIHN0b3JlID0gdGhpcy5wcm9wcy5zdG9yZTtcblxuICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMyLnNldENoZWNrU3RhdGUoX3RoaXMyLnByb3BzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjaGVja1NlbGVjdGlvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjaGVja1NlbGVjdGlvbihkYXRhLCB0eXBlLCBieURlZmF1bHRDaGVja2VkKSB7XG4gICAgICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBzdG9yZSA9IF9wcm9wcy5zdG9yZSxcbiAgICAgICAgICAgICAgICBnZXRDaGVja2JveFByb3BzQnlJdGVtID0gX3Byb3BzLmdldENoZWNrYm94UHJvcHNCeUl0ZW0sXG4gICAgICAgICAgICAgICAgZ2V0UmVjb3JkS2V5ID0gX3Byb3BzLmdldFJlY29yZEtleTtcbiAgICAgICAgICAgIC8vIHR5cGUgc2hvdWxkIGJlICdldmVyeScgfCAnc29tZSdcblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdldmVyeScgfHwgdHlwZSA9PT0gJ3NvbWUnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ5RGVmYXVsdENoZWNrZWQgPyBkYXRhW3R5cGVdKGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRDaGVja2JveFByb3BzQnlJdGVtKGl0ZW0sIGkpLmRlZmF1bHRDaGVja2VkO1xuICAgICAgICAgICAgICAgIH0pIDogZGF0YVt0eXBlXShmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RvcmUuZ2V0U3RhdGUoKS5zZWxlY3RlZFJvd0tleXMuaW5kZXhPZihnZXRSZWNvcmRLZXkoaXRlbSwgaSkpID49IDA7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NldENoZWNrU3RhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Q2hlY2tTdGF0ZShwcm9wcykge1xuICAgICAgICAgICAgdmFyIGNoZWNrZWQgPSB0aGlzLmdldENoZWNrU3RhdGUocHJvcHMpO1xuICAgICAgICAgICAgdmFyIGluZGV0ZXJtaW5hdGUgPSB0aGlzLmdldEluZGV0ZXJtaW5hdGVTdGF0ZShwcm9wcyk7XG4gICAgICAgICAgICBpZiAoY2hlY2tlZCAhPT0gdGhpcy5zdGF0ZS5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoZWNrZWQ6IGNoZWNrZWQgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW5kZXRlcm1pbmF0ZSAhPT0gdGhpcy5zdGF0ZS5pbmRldGVybWluYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGluZGV0ZXJtaW5hdGU6IGluZGV0ZXJtaW5hdGUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldENoZWNrU3RhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2hlY2tTdGF0ZShwcm9wcykge1xuICAgICAgICAgICAgdmFyIHN0b3JlID0gcHJvcHMuc3RvcmUsXG4gICAgICAgICAgICAgICAgZGF0YSA9IHByb3BzLmRhdGE7XG5cbiAgICAgICAgICAgIHZhciBjaGVja2VkID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKCFkYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2hlY2tlZCA9IHN0b3JlLmdldFN0YXRlKCkuc2VsZWN0aW9uRGlydHkgPyB0aGlzLmNoZWNrU2VsZWN0aW9uKGRhdGEsICdldmVyeScsIGZhbHNlKSA6IHRoaXMuY2hlY2tTZWxlY3Rpb24oZGF0YSwgJ2V2ZXJ5JywgZmFsc2UpIHx8IHRoaXMuY2hlY2tTZWxlY3Rpb24oZGF0YSwgJ2V2ZXJ5JywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2hlY2tlZDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0SW5kZXRlcm1pbmF0ZVN0YXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEluZGV0ZXJtaW5hdGVTdGF0ZShwcm9wcykge1xuICAgICAgICAgICAgdmFyIHN0b3JlID0gcHJvcHMuc3RvcmUsXG4gICAgICAgICAgICAgICAgZGF0YSA9IHByb3BzLmRhdGE7XG5cbiAgICAgICAgICAgIHZhciBpbmRldGVybWluYXRlID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKCFkYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZSA9IHN0b3JlLmdldFN0YXRlKCkuc2VsZWN0aW9uRGlydHkgPyB0aGlzLmNoZWNrU2VsZWN0aW9uKGRhdGEsICdzb21lJywgZmFsc2UpICYmICF0aGlzLmNoZWNrU2VsZWN0aW9uKGRhdGEsICdldmVyeScsIGZhbHNlKSA6IHRoaXMuY2hlY2tTZWxlY3Rpb24oZGF0YSwgJ3NvbWUnLCBmYWxzZSkgJiYgIXRoaXMuY2hlY2tTZWxlY3Rpb24oZGF0YSwgJ2V2ZXJ5JywgZmFsc2UpIHx8IHRoaXMuY2hlY2tTZWxlY3Rpb24oZGF0YSwgJ3NvbWUnLCB0cnVlKSAmJiAhdGhpcy5jaGVja1NlbGVjdGlvbihkYXRhLCAnZXZlcnknLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpbmRldGVybWluYXRlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXJNZW51cycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJNZW51cyhzZWxlY3Rpb25zKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGlvbnMubWFwKGZ1bmN0aW9uIChzZWxlY3Rpb24sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIE1lbnUuSXRlbSxcbiAgICAgICAgICAgICAgICAgICAgeyBrZXk6IHNlbGVjdGlvbi5rZXkgfHwgaW5kZXggfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczMucHJvcHMub25TZWxlY3Qoc2VsZWN0aW9uLmtleSwgaW5kZXgsIHNlbGVjdGlvbi5vblNlbGVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uLnRleHRcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZCA9IF9wcm9wczIuZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgcHJlZml4Q2xzID0gX3Byb3BzMi5wcmVmaXhDbHMsXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9ucyA9IF9wcm9wczIuc2VsZWN0aW9ucyxcbiAgICAgICAgICAgICAgICBnZXRQb3B1cENvbnRhaW5lciA9IF9wcm9wczIuZ2V0UG9wdXBDb250YWluZXI7XG4gICAgICAgICAgICB2YXIgX3N0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgICAgICBjaGVja2VkID0gX3N0YXRlLmNoZWNrZWQsXG4gICAgICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZSA9IF9zdGF0ZS5pbmRldGVybWluYXRlO1xuXG4gICAgICAgICAgICB2YXIgc2VsZWN0aW9uUHJlZml4Q2xzID0gcHJlZml4Q2xzICsgJy1zZWxlY3Rpb24nO1xuICAgICAgICAgICAgdmFyIGN1c3RvbVNlbGVjdGlvbnMgPSBudWxsO1xuICAgICAgICAgICAgaWYgKHNlbGVjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3U2VsZWN0aW9ucyA9IEFycmF5LmlzQXJyYXkoc2VsZWN0aW9ucykgPyB0aGlzLmRlZmF1bHRTZWxlY3Rpb25zLmNvbmNhdChzZWxlY3Rpb25zKSA6IHRoaXMuZGVmYXVsdFNlbGVjdGlvbnM7XG4gICAgICAgICAgICAgICAgdmFyIG1lbnUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBNZW51LFxuICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogc2VsZWN0aW9uUHJlZml4Q2xzICsgJy1tZW51Jywgc2VsZWN0ZWRLZXlzOiBbXSB9LFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlck1lbnVzKG5ld1NlbGVjdGlvbnMpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBjdXN0b21TZWxlY3Rpb25zID0gbmV3U2VsZWN0aW9ucy5sZW5ndGggPiAwID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgRHJvcGRvd24sXG4gICAgICAgICAgICAgICAgICAgIHsgb3ZlcmxheTogbWVudSwgZ2V0UG9wdXBDb250YWluZXI6IGdldFBvcHVwQ29udGFpbmVyIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBzZWxlY3Rpb25QcmVmaXhDbHMgKyAnLWRvd24nIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHsgdHlwZTogJ2Rvd24nIH0pXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApIDogbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBzZWxlY3Rpb25QcmVmaXhDbHMgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENoZWNrYm94LCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhfZGVmaW5lUHJvcGVydHkoe30sIHNlbGVjdGlvblByZWZpeENscyArICctc2VsZWN0LWFsbC1jdXN0b20nLCBjdXN0b21TZWxlY3Rpb25zKSksIGNoZWNrZWQ6IGNoZWNrZWQsIGluZGV0ZXJtaW5hdGU6IGluZGV0ZXJtaW5hdGUsIGRpc2FibGVkOiBkaXNhYmxlZCwgb25DaGFuZ2U6IHRoaXMuaGFuZGxlU2VsZWN0QWxsQ2hhZ25lIH0pLFxuICAgICAgICAgICAgICAgIGN1c3RvbVNlbGVjdGlvbnNcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gU2VsZWN0aW9uQ2hlY2tib3hBbGw7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGlvbkNoZWNrYm94QWxsOyIsImltcG9ydCBfdHlwZW9mIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy90eXBlb2YnO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG52YXIgX19yZXN0ID0gdGhpcyAmJiB0aGlzLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gICAgfWlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCkgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgfXJldHVybiB0O1xufTtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUmNUYWJsZSBmcm9tICdyYy10YWJsZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuLi9wYWdpbmF0aW9uJztcbmltcG9ydCBJY29uIGZyb20gJy4uL2ljb24nO1xuaW1wb3J0IFNwaW4gZnJvbSAnLi4vc3Bpbic7XG5pbXBvcnQgTG9jYWxlUmVjZWl2ZXIgZnJvbSAnLi4vbG9jYWxlLXByb3ZpZGVyL0xvY2FsZVJlY2VpdmVyJztcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gJy4uL2xvY2FsZS1wcm92aWRlci9kZWZhdWx0JztcbmltcG9ydCB3YXJuaW5nIGZyb20gJy4uL191dGlsL3dhcm5pbmcnO1xuaW1wb3J0IEZpbHRlckRyb3Bkb3duIGZyb20gJy4vZmlsdGVyRHJvcGRvd24nO1xuaW1wb3J0IGNyZWF0ZVN0b3JlIGZyb20gJy4vY3JlYXRlU3RvcmUnO1xuaW1wb3J0IFNlbGVjdGlvbkJveCBmcm9tICcuL1NlbGVjdGlvbkJveCc7XG5pbXBvcnQgU2VsZWN0aW9uQ2hlY2tib3hBbGwgZnJvbSAnLi9TZWxlY3Rpb25DaGVja2JveEFsbCc7XG5pbXBvcnQgQ29sdW1uIGZyb20gJy4vQ29sdW1uJztcbmltcG9ydCBDb2x1bW5Hcm91cCBmcm9tICcuL0NvbHVtbkdyb3VwJztcbmltcG9ydCBjcmVhdGVCb2R5Um93IGZyb20gJy4vY3JlYXRlQm9keVJvdyc7XG5pbXBvcnQgeyBmbGF0QXJyYXksIHRyZWVNYXAsIGZsYXRGaWx0ZXIsIG5vcm1hbGl6ZUNvbHVtbnMgfSBmcm9tICcuL3V0aWwnO1xuZnVuY3Rpb24gbm9vcCgpIHt9XG5mdW5jdGlvbiBzdG9wUHJvcGFnYXRpb24oZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKGUubmF0aXZlRXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKSB7XG4gICAgICAgIGUubmF0aXZlRXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgfVxufVxudmFyIGRlZmF1bHRQYWdpbmF0aW9uID0ge1xuICAgIG9uQ2hhbmdlOiBub29wLFxuICAgIG9uU2hvd1NpemVDaGFuZ2U6IG5vb3Bcbn07XG4vKipcbiAqIEF2b2lkIGNyZWF0aW5nIG5ldyBvYmplY3QsIHNvIHRoYXQgcGFyZW50IGNvbXBvbmVudCdzIHNob3VsZENvbXBvbmVudFVwZGF0ZVxuICogY2FuIHdvcmtzIGFwcHJvcHJpYXRlbHnjgIJcbiAqL1xudmFyIGVtcHR5T2JqZWN0ID0ge307XG5cbnZhciBUYWJsZSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFRhYmxlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFRhYmxlKHByb3BzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUYWJsZSk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFRhYmxlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoVGFibGUpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgICAgX3RoaXMuZ2V0Q2hlY2tib3hQcm9wc0J5SXRlbSA9IGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIF90aGlzJHByb3BzJHJvd1NlbGVjdCA9IF90aGlzLnByb3BzLnJvd1NlbGVjdGlvbixcbiAgICAgICAgICAgICAgICByb3dTZWxlY3Rpb24gPSBfdGhpcyRwcm9wcyRyb3dTZWxlY3QgPT09IHVuZGVmaW5lZCA/IHt9IDogX3RoaXMkcHJvcHMkcm93U2VsZWN0O1xuXG4gICAgICAgICAgICBpZiAoIXJvd1NlbGVjdGlvbi5nZXRDaGVja2JveFByb3BzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGtleSA9IF90aGlzLmdldFJlY29yZEtleShpdGVtLCBpbmRleCk7XG4gICAgICAgICAgICAvLyBDYWNoZSBjaGVja2JveFByb3BzXG4gICAgICAgICAgICBpZiAoIV90aGlzLkNoZWNrYm94UHJvcHNDYWNoZVtrZXldKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuQ2hlY2tib3hQcm9wc0NhY2hlW2tleV0gPSByb3dTZWxlY3Rpb24uZ2V0Q2hlY2tib3hQcm9wcyhpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5DaGVja2JveFByb3BzQ2FjaGVba2V5XTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMub25Sb3cgPSBmdW5jdGlvbiAocmVjb3JkLCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgb25Sb3cgPSBfdGhpcyRwcm9wcy5vblJvdyxcbiAgICAgICAgICAgICAgICBwcmVmaXhDbHMgPSBfdGhpcyRwcm9wcy5wcmVmaXhDbHM7XG5cbiAgICAgICAgICAgIHZhciBjdXN0b20gPSBvblJvdyA/IG9uUm93KHJlY29yZCwgaW5kZXgpIDoge307XG4gICAgICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGN1c3RvbSwgeyBwcmVmaXhDbHM6IHByZWZpeENscywgc3RvcmU6IF90aGlzLnN0b3JlLCByb3dLZXk6IF90aGlzLmdldFJlY29yZEtleShyZWNvcmQsIGluZGV4KSB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuaGFuZGxlRmlsdGVyID0gZnVuY3Rpb24gKGNvbHVtbiwgbmV4dEZpbHRlcnMpIHtcbiAgICAgICAgICAgIHZhciBwcm9wcyA9IF90aGlzLnByb3BzO1xuICAgICAgICAgICAgdmFyIHBhZ2luYXRpb24gPSBfZXh0ZW5kcyh7fSwgX3RoaXMuc3RhdGUucGFnaW5hdGlvbik7XG4gICAgICAgICAgICB2YXIgZmlsdGVycyA9IF9leHRlbmRzKHt9LCBfdGhpcy5zdGF0ZS5maWx0ZXJzLCBfZGVmaW5lUHJvcGVydHkoe30sIF90aGlzLmdldENvbHVtbktleShjb2x1bW4pLCBuZXh0RmlsdGVycykpO1xuICAgICAgICAgICAgLy8gUmVtb3ZlIGZpbHRlcnMgbm90IGluIGN1cnJlbnQgY29sdW1uc1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRDb2x1bW5LZXlzID0gW107XG4gICAgICAgICAgICB0cmVlTWFwKF90aGlzLmNvbHVtbnMsIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFjLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDb2x1bW5LZXlzLnB1c2goX3RoaXMuZ2V0Q29sdW1uS2V5KGMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGZpbHRlcnMpLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbktleSkge1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Q29sdW1uS2V5cy5pbmRleE9mKGNvbHVtbktleSkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBmaWx0ZXJzW2NvbHVtbktleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAocHJvcHMucGFnaW5hdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIFJlc2V0IGN1cnJlbnQgcHJvcFxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb24uY3VycmVudCA9IDE7XG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbi5vbkNoYW5nZShwYWdpbmF0aW9uLmN1cnJlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG5ld1N0YXRlID0ge1xuICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHBhZ2luYXRpb24sXG4gICAgICAgICAgICAgICAgZmlsdGVyczoge31cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgZmlsdGVyc1RvU2V0U3RhdGUgPSBfZXh0ZW5kcyh7fSwgZmlsdGVycyk7XG4gICAgICAgICAgICAvLyBSZW1vdmUgZmlsdGVycyB3aGljaCBpcyBjb250cm9sbGVkXG4gICAgICAgICAgICBfdGhpcy5nZXRGaWx0ZXJlZFZhbHVlQ29sdW1ucygpLmZvckVhY2goZnVuY3Rpb24gKGNvbCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2x1bW5LZXkgPSBfdGhpcy5nZXRDb2x1bW5LZXkoY29sKTtcbiAgICAgICAgICAgICAgICBpZiAoY29sdW1uS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBmaWx0ZXJzVG9TZXRTdGF0ZVtjb2x1bW5LZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGZpbHRlcnNUb1NldFN0YXRlKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbmV3U3RhdGUuZmlsdGVycyA9IGZpbHRlcnNUb1NldFN0YXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ29udHJvbGxlZCBjdXJyZW50IHByb3Agd2lsbCBub3QgcmVzcG9uZCB1c2VyIGludGVyYWN0aW9uXG4gICAgICAgICAgICBpZiAoX3R5cGVvZihwcm9wcy5wYWdpbmF0aW9uKSA9PT0gJ29iamVjdCcgJiYgJ2N1cnJlbnQnIGluIHByb3BzLnBhZ2luYXRpb24pIHtcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZS5wYWdpbmF0aW9uID0gX2V4dGVuZHMoe30sIHBhZ2luYXRpb24sIHsgY3VycmVudDogX3RoaXMuc3RhdGUucGFnaW5hdGlvbi5jdXJyZW50IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUobmV3U3RhdGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zdG9yZS5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbkRpcnR5OiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHZhciBvbkNoYW5nZSA9IF90aGlzLnByb3BzLm9uQ2hhbmdlO1xuICAgICAgICAgICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZS5hcHBseShudWxsLCBfdGhpcy5wcmVwYXJlUGFyYW1zQXJndW1lbnRzKF9leHRlbmRzKHt9LCBfdGhpcy5zdGF0ZSwgeyBzZWxlY3Rpb25EaXJ0eTogZmFsc2UsIGZpbHRlcnM6IGZpbHRlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiBwYWdpbmF0aW9uIH0pKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmhhbmRsZVNlbGVjdCA9IGZ1bmN0aW9uIChyZWNvcmQsIHJvd0luZGV4LCBlKSB7XG4gICAgICAgICAgICB2YXIgY2hlY2tlZCA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICAgICAgICB2YXIgbmF0aXZlRXZlbnQgPSBlLm5hdGl2ZUV2ZW50O1xuICAgICAgICAgICAgdmFyIGRlZmF1bHRTZWxlY3Rpb24gPSBfdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLnNlbGVjdGlvbkRpcnR5ID8gW10gOiBfdGhpcy5nZXREZWZhdWx0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRSb3dLZXlzID0gX3RoaXMuc3RvcmUuZ2V0U3RhdGUoKS5zZWxlY3RlZFJvd0tleXMuY29uY2F0KGRlZmF1bHRTZWxlY3Rpb24pO1xuICAgICAgICAgICAgdmFyIGtleSA9IF90aGlzLmdldFJlY29yZEtleShyZWNvcmQsIHJvd0luZGV4KTtcbiAgICAgICAgICAgIGlmIChjaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRSb3dLZXlzLnB1c2goX3RoaXMuZ2V0UmVjb3JkS2V5KHJlY29yZCwgcm93SW5kZXgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRSb3dLZXlzID0gc2VsZWN0ZWRSb3dLZXlzLmZpbHRlcihmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5ICE9PSBpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMuc3RvcmUuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHNlbGVjdGlvbkRpcnR5OiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIF90aGlzLnNldFNlbGVjdGVkUm93S2V5cyhzZWxlY3RlZFJvd0tleXMsIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RXYXk6ICdvblNlbGVjdCcsXG4gICAgICAgICAgICAgICAgcmVjb3JkOiByZWNvcmQsXG4gICAgICAgICAgICAgICAgY2hlY2tlZDogY2hlY2tlZCxcbiAgICAgICAgICAgICAgICBjaGFuZ2VSb3dLZXlzOiB2b2lkIDAsXG4gICAgICAgICAgICAgICAgbmF0aXZlRXZlbnQ6IG5hdGl2ZUV2ZW50XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuaGFuZGxlUmFkaW9TZWxlY3QgPSBmdW5jdGlvbiAocmVjb3JkLCByb3dJbmRleCwgZSkge1xuICAgICAgICAgICAgdmFyIGNoZWNrZWQgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgICAgICAgICAgdmFyIG5hdGl2ZUV2ZW50ID0gZS5uYXRpdmVFdmVudDtcbiAgICAgICAgICAgIHZhciBkZWZhdWx0U2VsZWN0aW9uID0gX3RoaXMuc3RvcmUuZ2V0U3RhdGUoKS5zZWxlY3Rpb25EaXJ0eSA/IFtdIDogX3RoaXMuZ2V0RGVmYXVsdFNlbGVjdGlvbigpO1xuICAgICAgICAgICAgdmFyIHNlbGVjdGVkUm93S2V5cyA9IF90aGlzLnN0b3JlLmdldFN0YXRlKCkuc2VsZWN0ZWRSb3dLZXlzLmNvbmNhdChkZWZhdWx0U2VsZWN0aW9uKTtcbiAgICAgICAgICAgIHZhciBrZXkgPSBfdGhpcy5nZXRSZWNvcmRLZXkocmVjb3JkLCByb3dJbmRleCk7XG4gICAgICAgICAgICBzZWxlY3RlZFJvd0tleXMgPSBba2V5XTtcbiAgICAgICAgICAgIF90aGlzLnN0b3JlLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25EaXJ0eTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBfdGhpcy5zZXRTZWxlY3RlZFJvd0tleXMoc2VsZWN0ZWRSb3dLZXlzLCB7XG4gICAgICAgICAgICAgICAgc2VsZWN0V2F5OiAnb25TZWxlY3QnLFxuICAgICAgICAgICAgICAgIHJlY29yZDogcmVjb3JkLFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGNoZWNrZWQsXG4gICAgICAgICAgICAgICAgY2hhbmdlUm93S2V5czogdm9pZCAwLFxuICAgICAgICAgICAgICAgIG5hdGl2ZUV2ZW50OiBuYXRpdmVFdmVudFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmhhbmRsZVNlbGVjdFJvdyA9IGZ1bmN0aW9uIChzZWxlY3Rpb25LZXksIGluZGV4LCBvblNlbGVjdEZ1bmMpIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gX3RoaXMuZ2V0RmxhdEN1cnJlbnRQYWdlRGF0YSgpO1xuICAgICAgICAgICAgdmFyIGRlZmF1bHRTZWxlY3Rpb24gPSBfdGhpcy5zdG9yZS5nZXRTdGF0ZSgpLnNlbGVjdGlvbkRpcnR5ID8gW10gOiBfdGhpcy5nZXREZWZhdWx0U2VsZWN0aW9uKCk7XG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRSb3dLZXlzID0gX3RoaXMuc3RvcmUuZ2V0U3RhdGUoKS5zZWxlY3RlZFJvd0tleXMuY29uY2F0KGRlZmF1bHRTZWxlY3Rpb24pO1xuICAgICAgICAgICAgdmFyIGNoYW5nZWFibGVSb3dLZXlzID0gZGF0YS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIV90aGlzLmdldENoZWNrYm94UHJvcHNCeUl0ZW0oaXRlbSwgaSkuZGlzYWJsZWQ7XG4gICAgICAgICAgICB9KS5tYXAoZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuZ2V0UmVjb3JkS2V5KGl0ZW0sIGkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgY2hhbmdlUm93S2V5cyA9IFtdO1xuICAgICAgICAgICAgdmFyIHNlbGVjdFdheSA9ICcnO1xuICAgICAgICAgICAgdmFyIGNoZWNrZWQgPSB2b2lkIDA7XG4gICAgICAgICAgICAvLyBoYW5kbGUgZGVmYXVsdCBzZWxlY3Rpb25cbiAgICAgICAgICAgIHN3aXRjaCAoc2VsZWN0aW9uS2V5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnYWxsJzpcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlYWJsZVJvd0tleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRSb3dLZXlzLmluZGV4T2Yoa2V5KSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJvd0tleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVJvd0tleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0V2F5ID0gJ29uU2VsZWN0QWxsJztcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3JlbW92ZUFsbCc6XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZWFibGVSb3dLZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkUm93S2V5cy5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUm93S2V5cy5zcGxpY2Uoc2VsZWN0ZWRSb3dLZXlzLmluZGV4T2Yoa2V5KSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlUm93S2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RXYXkgPSAnb25TZWxlY3RBbGwnO1xuICAgICAgICAgICAgICAgICAgICBjaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2ludmVydCc6XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZWFibGVSb3dLZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkUm93S2V5cy5pbmRleE9mKGtleSkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSb3dLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSb3dLZXlzLnNwbGljZShzZWxlY3RlZFJvd0tleXMuaW5kZXhPZihrZXkpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVJvd0tleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0V2F5ID0gJ29uU2VsZWN0SW52ZXJ0JztcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMuc3RvcmUuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHNlbGVjdGlvbkRpcnR5OiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIHdoZW4gc2VsZWN0IGN1c3RvbSBzZWxlY3Rpb24sIGNhbGxiYWNrIHNlbGVjdGlvbnNbbl0ub25TZWxlY3RcbiAgICAgICAgICAgIHZhciByb3dTZWxlY3Rpb24gPSBfdGhpcy5wcm9wcy5yb3dTZWxlY3Rpb247XG5cbiAgICAgICAgICAgIHZhciBjdXN0b21TZWxlY3Rpb25TdGFydEluZGV4ID0gMjtcbiAgICAgICAgICAgIGlmIChyb3dTZWxlY3Rpb24gJiYgcm93U2VsZWN0aW9uLmhpZGVEZWZhdWx0U2VsZWN0aW9ucykge1xuICAgICAgICAgICAgICAgIGN1c3RvbVNlbGVjdGlvblN0YXJ0SW5kZXggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGluZGV4ID49IGN1c3RvbVNlbGVjdGlvblN0YXJ0SW5kZXggJiYgdHlwZW9mIG9uU2VsZWN0RnVuYyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBvblNlbGVjdEZ1bmMoY2hhbmdlYWJsZVJvd0tleXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMuc2V0U2VsZWN0ZWRSb3dLZXlzKHNlbGVjdGVkUm93S2V5cywge1xuICAgICAgICAgICAgICAgIHNlbGVjdFdheTogc2VsZWN0V2F5LFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGNoZWNrZWQsXG4gICAgICAgICAgICAgICAgY2hhbmdlUm93S2V5czogY2hhbmdlUm93S2V5c1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmhhbmRsZVBhZ2VDaGFuZ2UgPSBmdW5jdGlvbiAoY3VycmVudCkge1xuICAgICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG90aGVyQXJndW1lbnRzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgICAgIG90aGVyQXJndW1lbnRzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHByb3BzID0gX3RoaXMucHJvcHM7XG4gICAgICAgICAgICB2YXIgcGFnaW5hdGlvbiA9IF9leHRlbmRzKHt9LCBfdGhpcy5zdGF0ZS5wYWdpbmF0aW9uKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbi5jdXJyZW50ID0gY3VycmVudDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbi5jdXJyZW50ID0gcGFnaW5hdGlvbi5jdXJyZW50IHx8IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYWdpbmF0aW9uLm9uQ2hhbmdlLmFwcGx5KHBhZ2luYXRpb24sIFtwYWdpbmF0aW9uLmN1cnJlbnRdLmNvbmNhdChvdGhlckFyZ3VtZW50cykpO1xuICAgICAgICAgICAgdmFyIG5ld1N0YXRlID0ge1xuICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHBhZ2luYXRpb25cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBDb250cm9sbGVkIGN1cnJlbnQgcHJvcCB3aWxsIG5vdCByZXNwb25kIHVzZXIgaW50ZXJhY3Rpb25cbiAgICAgICAgICAgIGlmIChwcm9wcy5wYWdpbmF0aW9uICYmIF90eXBlb2YocHJvcHMucGFnaW5hdGlvbikgPT09ICdvYmplY3QnICYmICdjdXJyZW50JyBpbiBwcm9wcy5wYWdpbmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgbmV3U3RhdGUucGFnaW5hdGlvbiA9IF9leHRlbmRzKHt9LCBwYWdpbmF0aW9uLCB7IGN1cnJlbnQ6IF90aGlzLnN0YXRlLnBhZ2luYXRpb24uY3VycmVudCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKG5ld1N0YXRlKTtcbiAgICAgICAgICAgIF90aGlzLnN0b3JlLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25EaXJ0eTogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIG9uQ2hhbmdlID0gX3RoaXMucHJvcHMub25DaGFuZ2U7XG4gICAgICAgICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICBvbkNoYW5nZS5hcHBseShudWxsLCBfdGhpcy5wcmVwYXJlUGFyYW1zQXJndW1lbnRzKF9leHRlbmRzKHt9LCBfdGhpcy5zdGF0ZSwgeyBzZWxlY3Rpb25EaXJ0eTogZmFsc2UsIHBhZ2luYXRpb246IHBhZ2luYXRpb24gfSkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMucmVuZGVyU2VsZWN0aW9uQm94ID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoXywgcmVjb3JkLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHZhciByb3dJbmRleCA9IF90aGlzLmdldFJlY29yZEtleShyZWNvcmQsIGluZGV4KTsgLy8g5LuOIDEg5byA5aeLXG4gICAgICAgICAgICAgICAgdmFyIHByb3BzID0gX3RoaXMuZ2V0Q2hlY2tib3hQcm9wc0J5SXRlbShyZWNvcmQsIGluZGV4KTtcbiAgICAgICAgICAgICAgICB2YXIgaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gJ3JhZGlvJyA/IF90aGlzLmhhbmRsZVJhZGlvU2VsZWN0KHJlY29yZCwgcm93SW5kZXgsIGUpIDogX3RoaXMuaGFuZGxlU2VsZWN0KHJlY29yZCwgcm93SW5kZXgsIGUpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgeyBvbkNsaWNrOiBzdG9wUHJvcGFnYXRpb24gfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3Rpb25Cb3gsIF9leHRlbmRzKHsgdHlwZTogdHlwZSwgc3RvcmU6IF90aGlzLnN0b3JlLCByb3dJbmRleDogcm93SW5kZXgsIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsIGRlZmF1bHRTZWxlY3Rpb246IF90aGlzLmdldERlZmF1bHRTZWxlY3Rpb24oKSB9LCBwcm9wcykpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmdldFJlY29yZEtleSA9IGZ1bmN0aW9uIChyZWNvcmQsIGluZGV4KSB7XG4gICAgICAgICAgICB2YXIgcm93S2V5ID0gX3RoaXMucHJvcHMucm93S2V5O1xuICAgICAgICAgICAgdmFyIHJlY29yZEtleSA9IHR5cGVvZiByb3dLZXkgPT09ICdmdW5jdGlvbicgPyByb3dLZXkocmVjb3JkLCBpbmRleCkgOiByZWNvcmRbcm93S2V5XTtcbiAgICAgICAgICAgIHdhcm5pbmcocmVjb3JkS2V5ICE9PSB1bmRlZmluZWQsICdFYWNoIHJlY29yZCBpbiBkYXRhU291cmNlIG9mIHRhYmxlIHNob3VsZCBoYXZlIGEgdW5pcXVlIGBrZXlgIHByb3AsIG9yIHNldCBgcm93S2V5YCB0byBhbiB1bmlxdWUgcHJpbWFyeSBrZXksJyArICdzZWUgaHR0cHM6Ly91LmFudC5kZXNpZ24vdGFibGUtcm93LWtleScpO1xuICAgICAgICAgICAgcmV0dXJuIHJlY29yZEtleSA9PT0gdW5kZWZpbmVkID8gaW5kZXggOiByZWNvcmRLZXk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmdldFBvcHVwQ29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0RE9NLmZpbmRET01Ob2RlKF90aGlzKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuaGFuZGxlU2hvd1NpemVDaGFuZ2UgPSBmdW5jdGlvbiAoY3VycmVudCwgcGFnZVNpemUpIHtcbiAgICAgICAgICAgIHZhciBwYWdpbmF0aW9uID0gX3RoaXMuc3RhdGUucGFnaW5hdGlvbjtcbiAgICAgICAgICAgIHBhZ2luYXRpb24ub25TaG93U2l6ZUNoYW5nZShjdXJyZW50LCBwYWdlU2l6ZSk7XG4gICAgICAgICAgICB2YXIgbmV4dFBhZ2luYXRpb24gPSBfZXh0ZW5kcyh7fSwgcGFnaW5hdGlvbiwgeyBwYWdlU2l6ZTogcGFnZVNpemUsXG4gICAgICAgICAgICAgICAgY3VycmVudDogY3VycmVudCB9KTtcbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgcGFnaW5hdGlvbjogbmV4dFBhZ2luYXRpb24gfSk7XG4gICAgICAgICAgICB2YXIgb25DaGFuZ2UgPSBfdGhpcy5wcm9wcy5vbkNoYW5nZTtcbiAgICAgICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlLmFwcGx5KG51bGwsIF90aGlzLnByZXBhcmVQYXJhbXNBcmd1bWVudHMoX2V4dGVuZHMoe30sIF90aGlzLnN0YXRlLCB7IHBhZ2luYXRpb246IG5leHRQYWdpbmF0aW9uIH0pKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnJlbmRlclRhYmxlID0gZnVuY3Rpb24gKGNvbnRleHRMb2NhbGUsIGxvYWRpbmcpIHtcbiAgICAgICAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgICAgICAgdmFyIGxvY2FsZSA9IF9leHRlbmRzKHt9LCBjb250ZXh0TG9jYWxlLCBfdGhpcy5wcm9wcy5sb2NhbGUpO1xuICAgICAgICAgICAgdmFyIF9hID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgc3R5bGUgPSBfYS5zdHlsZSxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgcHJlZml4Q2xzID0gX2EucHJlZml4Q2xzLFxuICAgICAgICAgICAgICAgIHNob3dIZWFkZXIgPSBfYS5zaG93SGVhZGVyLFxuICAgICAgICAgICAgICAgIHJlc3RQcm9wcyA9IF9fcmVzdChfYSwgW1wic3R5bGVcIiwgXCJjbGFzc05hbWVcIiwgXCJwcmVmaXhDbHNcIiwgXCJzaG93SGVhZGVyXCJdKTtcbiAgICAgICAgICAgIHZhciBkYXRhID0gX3RoaXMuZ2V0Q3VycmVudFBhZ2VEYXRhKCk7XG4gICAgICAgICAgICB2YXIgZXhwYW5kSWNvbkFzQ2VsbCA9IF90aGlzLnByb3BzLmV4cGFuZGVkUm93UmVuZGVyICYmIF90aGlzLnByb3BzLmV4cGFuZEljb25Bc0NlbGwgIT09IGZhbHNlO1xuICAgICAgICAgICAgdmFyIGNsYXNzU3RyaW5nID0gY2xhc3NOYW1lcygoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLScgKyBfdGhpcy5wcm9wcy5zaXplLCB0cnVlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLWJvcmRlcmVkJywgX3RoaXMucHJvcHMuYm9yZGVyZWQpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctZW1wdHknLCAhZGF0YS5sZW5ndGgpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctd2l0aG91dC1jb2x1bW4taGVhZGVyJywgIXNob3dIZWFkZXIpLCBfY2xhc3NOYW1lcykpO1xuICAgICAgICAgICAgdmFyIGNvbHVtbnMgPSBfdGhpcy5yZW5kZXJSb3dTZWxlY3Rpb24obG9jYWxlKTtcbiAgICAgICAgICAgIGNvbHVtbnMgPSBfdGhpcy5yZW5kZXJDb2x1bW5zRHJvcGRvd24oY29sdW1ucywgbG9jYWxlKTtcbiAgICAgICAgICAgIGNvbHVtbnMgPSBjb2x1bW5zLm1hcChmdW5jdGlvbiAoY29sdW1uLCBpKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0NvbHVtbiA9IF9leHRlbmRzKHt9LCBjb2x1bW4pO1xuICAgICAgICAgICAgICAgIG5ld0NvbHVtbi5rZXkgPSBfdGhpcy5nZXRDb2x1bW5LZXkobmV3Q29sdW1uLCBpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3Q29sdW1uO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgZXhwYW5kSWNvbkNvbHVtbkluZGV4ID0gY29sdW1uc1swXSAmJiBjb2x1bW5zWzBdLmtleSA9PT0gJ3NlbGVjdGlvbi1jb2x1bW4nID8gMSA6IDA7XG4gICAgICAgICAgICBpZiAoJ2V4cGFuZEljb25Db2x1bW5JbmRleCcgaW4gcmVzdFByb3BzKSB7XG4gICAgICAgICAgICAgICAgZXhwYW5kSWNvbkNvbHVtbkluZGV4ID0gcmVzdFByb3BzLmV4cGFuZEljb25Db2x1bW5JbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFJjVGFibGUsIF9leHRlbmRzKHsga2V5OiAndGFibGUnIH0sIHJlc3RQcm9wcywgeyBvblJvdzogX3RoaXMub25Sb3csIGNvbXBvbmVudHM6IF90aGlzLmNvbXBvbmVudHMsIHByZWZpeENsczogcHJlZml4Q2xzLCBkYXRhOiBkYXRhLCBjb2x1bW5zOiBjb2x1bW5zLCBzaG93SGVhZGVyOiBzaG93SGVhZGVyLCBjbGFzc05hbWU6IGNsYXNzU3RyaW5nLCBleHBhbmRJY29uQ29sdW1uSW5kZXg6IGV4cGFuZEljb25Db2x1bW5JbmRleCwgZXhwYW5kSWNvbkFzQ2VsbDogZXhwYW5kSWNvbkFzQ2VsbCwgZW1wdHlUZXh0OiAhbG9hZGluZy5zcGlubmluZyAmJiBsb2NhbGUuZW1wdHlUZXh0IH0pKTtcbiAgICAgICAgfTtcbiAgICAgICAgd2FybmluZyghKCdjb2x1bW5zUGFnZVJhbmdlJyBpbiBwcm9wcyB8fCAnY29sdW1uc1BhZ2VTaXplJyBpbiBwcm9wcyksICdgY29sdW1uc1BhZ2VSYW5nZWAgYW5kIGBjb2x1bW5zUGFnZVNpemVgIGFyZSByZW1vdmVkLCBwbGVhc2UgdXNlICcgKyAnZml4ZWQgY29sdW1ucyBpbnN0ZWFkLCBzZWU6IGh0dHBzOi8vdS5hbnQuZGVzaWduL2ZpeGVkLWNvbHVtbnMuJyk7XG4gICAgICAgIF90aGlzLmNvbHVtbnMgPSBwcm9wcy5jb2x1bW5zIHx8IG5vcm1hbGl6ZUNvbHVtbnMocHJvcHMuY2hpbGRyZW4pO1xuICAgICAgICBfdGhpcy5jcmVhdGVDb21wb25lbnRzKHByb3BzLmNvbXBvbmVudHMpO1xuICAgICAgICBfdGhpcy5zdGF0ZSA9IF9leHRlbmRzKHt9LCBfdGhpcy5nZXREZWZhdWx0U29ydE9yZGVyKF90aGlzLmNvbHVtbnMpLCB7XG4gICAgICAgICAgICAvLyDlh4/lsJHnirbmgIFcbiAgICAgICAgICAgIGZpbHRlcnM6IF90aGlzLmdldEZpbHRlcnNGcm9tQ29sdW1ucygpLCBwYWdpbmF0aW9uOiBfdGhpcy5nZXREZWZhdWx0UGFnaW5hdGlvbihwcm9wcykgfSk7XG4gICAgICAgIF90aGlzLkNoZWNrYm94UHJvcHNDYWNoZSA9IHt9O1xuICAgICAgICBfdGhpcy5zdG9yZSA9IGNyZWF0ZVN0b3JlKHtcbiAgICAgICAgICAgIHNlbGVjdGVkUm93S2V5czogKHByb3BzLnJvd1NlbGVjdGlvbiB8fCB7fSkuc2VsZWN0ZWRSb3dLZXlzIHx8IFtdLFxuICAgICAgICAgICAgc2VsZWN0aW9uRGlydHk6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFRhYmxlLCBbe1xuICAgICAgICBrZXk6ICdnZXREZWZhdWx0U2VsZWN0aW9uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldERlZmF1bHRTZWxlY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIF9wcm9wcyRyb3dTZWxlY3Rpb24gPSB0aGlzLnByb3BzLnJvd1NlbGVjdGlvbixcbiAgICAgICAgICAgICAgICByb3dTZWxlY3Rpb24gPSBfcHJvcHMkcm93U2VsZWN0aW9uID09PSB1bmRlZmluZWQgPyB7fSA6IF9wcm9wcyRyb3dTZWxlY3Rpb247XG5cbiAgICAgICAgICAgIGlmICghcm93U2VsZWN0aW9uLmdldENoZWNrYm94UHJvcHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRGbGF0RGF0YSgpLmZpbHRlcihmdW5jdGlvbiAoaXRlbSwgcm93SW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMyLmdldENoZWNrYm94UHJvcHNCeUl0ZW0oaXRlbSwgcm93SW5kZXgpLmRlZmF1bHRDaGVja2VkO1xuICAgICAgICAgICAgfSkubWFwKGZ1bmN0aW9uIChyZWNvcmQsIHJvd0luZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5nZXRSZWNvcmRLZXkocmVjb3JkLCByb3dJbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0RGVmYXVsdFBhZ2luYXRpb24nLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGVmYXVsdFBhZ2luYXRpb24ocHJvcHMpIHtcbiAgICAgICAgICAgIHZhciBwYWdpbmF0aW9uID0gcHJvcHMucGFnaW5hdGlvbiB8fCB7fTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhc1BhZ2luYXRpb24ocHJvcHMpID8gX2V4dGVuZHMoe30sIGRlZmF1bHRQYWdpbmF0aW9uLCBwYWdpbmF0aW9uLCB7IGN1cnJlbnQ6IHBhZ2luYXRpb24uZGVmYXVsdEN1cnJlbnQgfHwgcGFnaW5hdGlvbi5jdXJyZW50IHx8IDEsIHBhZ2VTaXplOiBwYWdpbmF0aW9uLmRlZmF1bHRQYWdlU2l6ZSB8fCBwYWdpbmF0aW9uLnBhZ2VTaXplIHx8IDEwIH0pIDoge307XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucyA9IG5leHRQcm9wcy5jb2x1bW5zIHx8IG5vcm1hbGl6ZUNvbHVtbnMobmV4dFByb3BzLmNoaWxkcmVuKTtcbiAgICAgICAgICAgIGlmICgncGFnaW5hdGlvbicgaW4gbmV4dFByb3BzIHx8ICdwYWdpbmF0aW9uJyBpbiB0aGlzLnByb3BzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAocHJldmlvdXNTdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3UGFnaW5hdGlvbiA9IF9leHRlbmRzKHt9LCBkZWZhdWx0UGFnaW5hdGlvbiwgcHJldmlvdXNTdGF0ZS5wYWdpbmF0aW9uLCBuZXh0UHJvcHMucGFnaW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIG5ld1BhZ2luYXRpb24uY3VycmVudCA9IG5ld1BhZ2luYXRpb24uY3VycmVudCB8fCAxO1xuICAgICAgICAgICAgICAgICAgICBuZXdQYWdpbmF0aW9uLnBhZ2VTaXplID0gbmV3UGFnaW5hdGlvbi5wYWdlU2l6ZSB8fCAxMDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgcGFnaW5hdGlvbjogbmV4dFByb3BzLnBhZ2luYXRpb24gIT09IGZhbHNlID8gbmV3UGFnaW5hdGlvbiA6IGVtcHR5T2JqZWN0IH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmV4dFByb3BzLnJvd1NlbGVjdGlvbiAmJiAnc2VsZWN0ZWRSb3dLZXlzJyBpbiBuZXh0UHJvcHMucm93U2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUm93S2V5czogbmV4dFByb3BzLnJvd1NlbGVjdGlvbi5zZWxlY3RlZFJvd0tleXMgfHwgW11cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB2YXIgcm93U2VsZWN0aW9uID0gdGhpcy5wcm9wcy5yb3dTZWxlY3Rpb247XG5cbiAgICAgICAgICAgICAgICBpZiAocm93U2VsZWN0aW9uICYmIG5leHRQcm9wcy5yb3dTZWxlY3Rpb24uZ2V0Q2hlY2tib3hQcm9wcyAhPT0gcm93U2VsZWN0aW9uLmdldENoZWNrYm94UHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5DaGVja2JveFByb3BzQ2FjaGUgPSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ2RhdGFTb3VyY2UnIGluIG5leHRQcm9wcyAmJiBuZXh0UHJvcHMuZGF0YVNvdXJjZSAhPT0gdGhpcy5wcm9wcy5kYXRhU291cmNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZS5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbkRpcnR5OiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuQ2hlY2tib3hQcm9wc0NhY2hlID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5nZXRTb3J0T3JkZXJDb2x1bW5zKHRoaXMuY29sdW1ucykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBzb3J0U3RhdGUgPSB0aGlzLmdldFNvcnRTdGF0ZUZyb21Db2x1bW5zKHRoaXMuY29sdW1ucyk7XG4gICAgICAgICAgICAgICAgaWYgKHNvcnRTdGF0ZS5zb3J0Q29sdW1uICE9PSB0aGlzLnN0YXRlLnNvcnRDb2x1bW4gfHwgc29ydFN0YXRlLnNvcnRPcmRlciAhPT0gdGhpcy5zdGF0ZS5zb3J0T3JkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShzb3J0U3RhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBmaWx0ZXJlZFZhbHVlQ29sdW1ucyA9IHRoaXMuZ2V0RmlsdGVyZWRWYWx1ZUNvbHVtbnModGhpcy5jb2x1bW5zKTtcbiAgICAgICAgICAgIGlmIChmaWx0ZXJlZFZhbHVlQ29sdW1ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZpbHRlcnNGcm9tQ29sdW1ucyA9IHRoaXMuZ2V0RmlsdGVyc0Zyb21Db2x1bW5zKHRoaXMuY29sdW1ucyk7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0ZpbHRlcnMgPSBfZXh0ZW5kcyh7fSwgdGhpcy5zdGF0ZS5maWx0ZXJzKTtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhmaWx0ZXJzRnJvbUNvbHVtbnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdGaWx0ZXJzW2tleV0gPSBmaWx0ZXJzRnJvbUNvbHVtbnNba2V5XTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0ZpbHRlcnNDaGFuZ2VkKG5ld0ZpbHRlcnMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmaWx0ZXJzOiBuZXdGaWx0ZXJzIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQ29tcG9uZW50cyhuZXh0UHJvcHMuY29tcG9uZW50cywgdGhpcy5wcm9wcy5jb21wb25lbnRzKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2V0U2VsZWN0ZWRSb3dLZXlzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFNlbGVjdGVkUm93S2V5cyhzZWxlY3RlZFJvd0tleXMsIF9yZWYpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgc2VsZWN0V2F5ID0gX3JlZi5zZWxlY3RXYXksXG4gICAgICAgICAgICAgICAgcmVjb3JkID0gX3JlZi5yZWNvcmQsXG4gICAgICAgICAgICAgICAgY2hlY2tlZCA9IF9yZWYuY2hlY2tlZCxcbiAgICAgICAgICAgICAgICBjaGFuZ2VSb3dLZXlzID0gX3JlZi5jaGFuZ2VSb3dLZXlzLFxuICAgICAgICAgICAgICAgIG5hdGl2ZUV2ZW50ID0gX3JlZi5uYXRpdmVFdmVudDtcbiAgICAgICAgICAgIHZhciBfcHJvcHMkcm93U2VsZWN0aW9uMiA9IHRoaXMucHJvcHMucm93U2VsZWN0aW9uLFxuICAgICAgICAgICAgICAgIHJvd1NlbGVjdGlvbiA9IF9wcm9wcyRyb3dTZWxlY3Rpb24yID09PSB1bmRlZmluZWQgPyB7fSA6IF9wcm9wcyRyb3dTZWxlY3Rpb24yO1xuXG4gICAgICAgICAgICBpZiAocm93U2VsZWN0aW9uICYmICEoJ3NlbGVjdGVkUm93S2V5cycgaW4gcm93U2VsZWN0aW9uKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmUuc2V0U3RhdGUoeyBzZWxlY3RlZFJvd0tleXM6IHNlbGVjdGVkUm93S2V5cyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5nZXRGbGF0RGF0YSgpO1xuICAgICAgICAgICAgaWYgKCFyb3dTZWxlY3Rpb24ub25DaGFuZ2UgJiYgIXJvd1NlbGVjdGlvbltzZWxlY3RXYXldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHNlbGVjdGVkUm93cyA9IGRhdGEuZmlsdGVyKGZ1bmN0aW9uIChyb3csIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWRSb3dLZXlzLmluZGV4T2YoX3RoaXMzLmdldFJlY29yZEtleShyb3csIGkpKSA+PSAwO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAocm93U2VsZWN0aW9uLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgcm93U2VsZWN0aW9uLm9uQ2hhbmdlKHNlbGVjdGVkUm93S2V5cywgc2VsZWN0ZWRSb3dzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZWxlY3RXYXkgPT09ICdvblNlbGVjdCcgJiYgcm93U2VsZWN0aW9uLm9uU2VsZWN0KSB7XG4gICAgICAgICAgICAgICAgcm93U2VsZWN0aW9uLm9uU2VsZWN0KHJlY29yZCwgY2hlY2tlZCwgc2VsZWN0ZWRSb3dzLCBuYXRpdmVFdmVudCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdFdheSA9PT0gJ29uU2VsZWN0QWxsJyAmJiByb3dTZWxlY3Rpb24ub25TZWxlY3RBbGwpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hhbmdlUm93cyA9IGRhdGEuZmlsdGVyKGZ1bmN0aW9uIChyb3csIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoYW5nZVJvd0tleXMuaW5kZXhPZihfdGhpczMuZ2V0UmVjb3JkS2V5KHJvdywgaSkpID49IDA7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcm93U2VsZWN0aW9uLm9uU2VsZWN0QWxsKGNoZWNrZWQsIHNlbGVjdGVkUm93cywgY2hhbmdlUm93cyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdFdheSA9PT0gJ29uU2VsZWN0SW52ZXJ0JyAmJiByb3dTZWxlY3Rpb24ub25TZWxlY3RJbnZlcnQpIHtcbiAgICAgICAgICAgICAgICByb3dTZWxlY3Rpb24ub25TZWxlY3RJbnZlcnQoc2VsZWN0ZWRSb3dLZXlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFzUGFnaW5hdGlvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBoYXNQYWdpbmF0aW9uKHByb3BzKSB7XG4gICAgICAgICAgICByZXR1cm4gKHByb3BzIHx8IHRoaXMucHJvcHMpLnBhZ2luYXRpb24gIT09IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdpc0ZpbHRlcnNDaGFuZ2VkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGlzRmlsdGVyc0NoYW5nZWQoZmlsdGVycykge1xuICAgICAgICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBmaWx0ZXJzQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGZpbHRlcnMpLmxlbmd0aCAhPT0gT2JqZWN0LmtleXModGhpcy5zdGF0ZS5maWx0ZXJzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGZpbHRlcnMpLmZvckVhY2goZnVuY3Rpb24gKGNvbHVtbktleSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsdGVyc1tjb2x1bW5LZXldICE9PSBfdGhpczQuc3RhdGUuZmlsdGVyc1tjb2x1bW5LZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXJzQ2hhbmdlZDtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0U29ydE9yZGVyQ29sdW1ucycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTb3J0T3JkZXJDb2x1bW5zKGNvbHVtbnMpIHtcbiAgICAgICAgICAgIHJldHVybiBmbGF0RmlsdGVyKGNvbHVtbnMgfHwgdGhpcy5jb2x1bW5zIHx8IFtdLCBmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdzb3J0T3JkZXInIGluIGNvbHVtbjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRGaWx0ZXJlZFZhbHVlQ29sdW1ucycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGaWx0ZXJlZFZhbHVlQ29sdW1ucyhjb2x1bW5zKSB7XG4gICAgICAgICAgICByZXR1cm4gZmxhdEZpbHRlcihjb2x1bW5zIHx8IHRoaXMuY29sdW1ucyB8fCBbXSwgZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgY29sdW1uLmZpbHRlcmVkVmFsdWUgIT09ICd1bmRlZmluZWQnO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldEZpbHRlcnNGcm9tQ29sdW1ucycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGaWx0ZXJzRnJvbUNvbHVtbnMoY29sdW1ucykge1xuICAgICAgICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgICAgICAgIHZhciBmaWx0ZXJzID0ge307XG4gICAgICAgICAgICB0aGlzLmdldEZpbHRlcmVkVmFsdWVDb2x1bW5zKGNvbHVtbnMpLmZvckVhY2goZnVuY3Rpb24gKGNvbCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2xLZXkgPSBfdGhpczUuZ2V0Q29sdW1uS2V5KGNvbCk7XG4gICAgICAgICAgICAgICAgZmlsdGVyc1tjb2xLZXldID0gY29sLmZpbHRlcmVkVmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXJzO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXREZWZhdWx0U29ydE9yZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldERlZmF1bHRTb3J0T3JkZXIoY29sdW1ucykge1xuICAgICAgICAgICAgdmFyIGRlZmluZWRTb3J0U3RhdGUgPSB0aGlzLmdldFNvcnRTdGF0ZUZyb21Db2x1bW5zKGNvbHVtbnMpO1xuICAgICAgICAgICAgdmFyIGRlZmF1bHRTb3J0ZWRDb2x1bW4gPSBmbGF0RmlsdGVyKGNvbHVtbnMgfHwgW10sIGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sdW1uLmRlZmF1bHRTb3J0T3JkZXIgIT0gbnVsbDtcbiAgICAgICAgICAgIH0pWzBdO1xuICAgICAgICAgICAgaWYgKGRlZmF1bHRTb3J0ZWRDb2x1bW4gJiYgIWRlZmluZWRTb3J0U3RhdGUuc29ydENvbHVtbikge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHNvcnRDb2x1bW46IGRlZmF1bHRTb3J0ZWRDb2x1bW4sXG4gICAgICAgICAgICAgICAgICAgIHNvcnRPcmRlcjogZGVmYXVsdFNvcnRlZENvbHVtbi5kZWZhdWx0U29ydE9yZGVyXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkZWZpbmVkU29ydFN0YXRlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRTb3J0U3RhdGVGcm9tQ29sdW1ucycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTb3J0U3RhdGVGcm9tQ29sdW1ucyhjb2x1bW5zKSB7XG4gICAgICAgICAgICAvLyByZXR1cm4gZmlyc3QgY29sdW1uIHdoaWNoIHNvcnRPcmRlciBpcyBub3QgZmFsc3lcbiAgICAgICAgICAgIHZhciBzb3J0ZWRDb2x1bW4gPSB0aGlzLmdldFNvcnRPcmRlckNvbHVtbnMoY29sdW1ucykuZmlsdGVyKGZ1bmN0aW9uIChjb2wpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sLnNvcnRPcmRlcjtcbiAgICAgICAgICAgIH0pWzBdO1xuICAgICAgICAgICAgaWYgKHNvcnRlZENvbHVtbikge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHNvcnRDb2x1bW46IHNvcnRlZENvbHVtbixcbiAgICAgICAgICAgICAgICAgICAgc29ydE9yZGVyOiBzb3J0ZWRDb2x1bW4uc29ydE9yZGVyXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc29ydENvbHVtbjogbnVsbCxcbiAgICAgICAgICAgICAgICBzb3J0T3JkZXI6IG51bGxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldFNvcnRlckZuJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFNvcnRlckZuKCkge1xuICAgICAgICAgICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgc29ydE9yZGVyID0gX3N0YXRlLnNvcnRPcmRlcixcbiAgICAgICAgICAgICAgICBzb3J0Q29sdW1uID0gX3N0YXRlLnNvcnRDb2x1bW47XG5cbiAgICAgICAgICAgIGlmICghc29ydE9yZGVyIHx8ICFzb3J0Q29sdW1uIHx8IHR5cGVvZiBzb3J0Q29sdW1uLnNvcnRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBzb3J0Q29sdW1uLnNvcnRlcihhLCBiKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzb3J0T3JkZXIgPT09ICdkZXNjZW5kJyA/IC1yZXN1bHQgOiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndG9nZ2xlU29ydE9yZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRvZ2dsZVNvcnRPcmRlcihvcmRlciwgY29sdW1uKSB7XG4gICAgICAgICAgICB2YXIgX3N0YXRlMiA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgc29ydENvbHVtbiA9IF9zdGF0ZTIuc29ydENvbHVtbixcbiAgICAgICAgICAgICAgICBzb3J0T3JkZXIgPSBfc3RhdGUyLnNvcnRPcmRlcjtcbiAgICAgICAgICAgIC8vIOWPquWQjOaXtuWFgeiuuOS4gOWIl+i/m+ihjOaOkuW6j++8jOWQpuWImeS8muWvvOiHtOaOkuW6j+mhuuW6j+eahOmAu+i+kemXrumimFxuXG4gICAgICAgICAgICB2YXIgaXNTb3J0Q29sdW1uID0gdGhpcy5pc1NvcnRDb2x1bW4oY29sdW1uKTtcbiAgICAgICAgICAgIGlmICghaXNTb3J0Q29sdW1uKSB7XG4gICAgICAgICAgICAgICAgLy8g5b2T5YmN5YiX5pyq5o6S5bqPXG4gICAgICAgICAgICAgICAgc29ydE9yZGVyID0gb3JkZXI7XG4gICAgICAgICAgICAgICAgc29ydENvbHVtbiA9IGNvbHVtbjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g5b2T5YmN5YiX5bey5o6S5bqPXG4gICAgICAgICAgICAgICAgaWYgKHNvcnRPcmRlciA9PT0gb3JkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5YiH5o2i5Li65pyq5o6S5bqP54q25oCBXG4gICAgICAgICAgICAgICAgICAgIHNvcnRPcmRlciA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBzb3J0Q29sdW1uID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyDliIfmjaLkuLrmjpLluo/nirbmgIFcbiAgICAgICAgICAgICAgICAgICAgc29ydE9yZGVyID0gb3JkZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG5ld1N0YXRlID0ge1xuICAgICAgICAgICAgICAgIHNvcnRPcmRlcjogc29ydE9yZGVyLFxuICAgICAgICAgICAgICAgIHNvcnRDb2x1bW46IHNvcnRDb2x1bW5cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBDb250cm9sbGVkXG4gICAgICAgICAgICBpZiAodGhpcy5nZXRTb3J0T3JkZXJDb2x1bW5zKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgb25DaGFuZ2UgPSB0aGlzLnByb3BzLm9uQ2hhbmdlO1xuICAgICAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgb25DaGFuZ2UuYXBwbHkobnVsbCwgdGhpcy5wcmVwYXJlUGFyYW1zQXJndW1lbnRzKF9leHRlbmRzKHt9LCB0aGlzLnN0YXRlLCBuZXdTdGF0ZSkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyUm93U2VsZWN0aW9uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclJvd1NlbGVjdGlvbihsb2NhbGUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBwcmVmaXhDbHMgPSBfcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICAgICAgICAgIHJvd1NlbGVjdGlvbiA9IF9wcm9wcy5yb3dTZWxlY3Rpb247XG5cbiAgICAgICAgICAgIHZhciBjb2x1bW5zID0gdGhpcy5jb2x1bW5zLmNvbmNhdCgpO1xuICAgICAgICAgICAgaWYgKHJvd1NlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5nZXRGbGF0Q3VycmVudFBhZ2VEYXRhKCkuZmlsdGVyKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocm93U2VsZWN0aW9uLmdldENoZWNrYm94UHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhX3RoaXM2LmdldENoZWNrYm94UHJvcHNCeUl0ZW0oaXRlbSwgaW5kZXgpLmRpc2FibGVkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3Rpb25Db2x1bW5DbGFzcyA9IGNsYXNzTmFtZXMocHJlZml4Q2xzICsgJy1zZWxlY3Rpb24tY29sdW1uJywgX2RlZmluZVByb3BlcnR5KHt9LCBwcmVmaXhDbHMgKyAnLXNlbGVjdGlvbi1jb2x1bW4tY3VzdG9tJywgcm93U2VsZWN0aW9uLnNlbGVjdGlvbnMpKTtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0aW9uQ29sdW1uID0ge1xuICAgICAgICAgICAgICAgICAgICBrZXk6ICdzZWxlY3Rpb24tY29sdW1uJyxcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiB0aGlzLnJlbmRlclNlbGVjdGlvbkJveChyb3dTZWxlY3Rpb24udHlwZSksXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogc2VsZWN0aW9uQ29sdW1uQ2xhc3MsXG4gICAgICAgICAgICAgICAgICAgIGZpeGVkOiByb3dTZWxlY3Rpb24uZml4ZWQsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiByb3dTZWxlY3Rpb24uY29sdW1uV2lkdGhcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmIChyb3dTZWxlY3Rpb24udHlwZSAhPT0gJ3JhZGlvJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2hlY2tib3hBbGxEaXNhYmxlZCA9IGRhdGEuZXZlcnkoZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXM2LmdldENoZWNrYm94UHJvcHNCeUl0ZW0oaXRlbSwgaW5kZXgpLmRpc2FibGVkO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uQ29sdW1uLnRpdGxlID0gUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3Rpb25DaGVja2JveEFsbCwgeyBzdG9yZTogdGhpcy5zdG9yZSwgbG9jYWxlOiBsb2NhbGUsIGRhdGE6IGRhdGEsIGdldENoZWNrYm94UHJvcHNCeUl0ZW06IHRoaXMuZ2V0Q2hlY2tib3hQcm9wc0J5SXRlbSwgZ2V0UmVjb3JkS2V5OiB0aGlzLmdldFJlY29yZEtleSwgZGlzYWJsZWQ6IGNoZWNrYm94QWxsRGlzYWJsZWQsIHByZWZpeENsczogcHJlZml4Q2xzLCBvblNlbGVjdDogdGhpcy5oYW5kbGVTZWxlY3RSb3csIHNlbGVjdGlvbnM6IHJvd1NlbGVjdGlvbi5zZWxlY3Rpb25zLCBoaWRlRGVmYXVsdFNlbGVjdGlvbnM6IHJvd1NlbGVjdGlvbi5oaWRlRGVmYXVsdFNlbGVjdGlvbnMsIGdldFBvcHVwQ29udGFpbmVyOiB0aGlzLmdldFBvcHVwQ29udGFpbmVyIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoJ2ZpeGVkJyBpbiByb3dTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uQ29sdW1uLmZpeGVkID0gcm93U2VsZWN0aW9uLmZpeGVkO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29sdW1ucy5zb21lKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbHVtbi5maXhlZCA9PT0gJ2xlZnQnIHx8IGNvbHVtbi5maXhlZCA9PT0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25Db2x1bW4uZml4ZWQgPSAnbGVmdCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjb2x1bW5zWzBdICYmIGNvbHVtbnNbMF0ua2V5ID09PSAnc2VsZWN0aW9uLWNvbHVtbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uc1swXSA9IHNlbGVjdGlvbkNvbHVtbjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zLnVuc2hpZnQoc2VsZWN0aW9uQ29sdW1uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29sdW1ucztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0Q29sdW1uS2V5JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldENvbHVtbktleShjb2x1bW4sIGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gY29sdW1uLmtleSB8fCBjb2x1bW4uZGF0YUluZGV4IHx8IGluZGV4O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdnZXRNYXhDdXJyZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldE1heEN1cnJlbnQodG90YWwpIHtcbiAgICAgICAgICAgIHZhciBfc3RhdGUkcGFnaW5hdGlvbiA9IHRoaXMuc3RhdGUucGFnaW5hdGlvbixcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gX3N0YXRlJHBhZ2luYXRpb24uY3VycmVudCxcbiAgICAgICAgICAgICAgICBwYWdlU2l6ZSA9IF9zdGF0ZSRwYWdpbmF0aW9uLnBhZ2VTaXplO1xuXG4gICAgICAgICAgICBpZiAoKGN1cnJlbnQgLSAxKSAqIHBhZ2VTaXplID49IHRvdGFsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKHRvdGFsIC0gMSkgLyBwYWdlU2l6ZSkgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2lzU29ydENvbHVtbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc1NvcnRDb2x1bW4oY29sdW1uKSB7XG4gICAgICAgICAgICB2YXIgc29ydENvbHVtbiA9IHRoaXMuc3RhdGUuc29ydENvbHVtbjtcblxuICAgICAgICAgICAgaWYgKCFjb2x1bW4gfHwgIXNvcnRDb2x1bW4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRDb2x1bW5LZXkoc29ydENvbHVtbikgPT09IHRoaXMuZ2V0Q29sdW1uS2V5KGNvbHVtbik7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlckNvbHVtbnNEcm9wZG93bicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJDb2x1bW5zRHJvcGRvd24oY29sdW1ucywgbG9jYWxlKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM3ID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIHByZWZpeENscyA9IF9wcm9wczIucHJlZml4Q2xzLFxuICAgICAgICAgICAgICAgIGRyb3Bkb3duUHJlZml4Q2xzID0gX3Byb3BzMi5kcm9wZG93blByZWZpeENscztcbiAgICAgICAgICAgIHZhciBzb3J0T3JkZXIgPSB0aGlzLnN0YXRlLnNvcnRPcmRlcjtcblxuICAgICAgICAgICAgcmV0dXJuIHRyZWVNYXAoY29sdW1ucywgZnVuY3Rpb24gKG9yaWdpbkNvbHVtbiwgaSkge1xuICAgICAgICAgICAgICAgIHZhciBjb2x1bW4gPSBfZXh0ZW5kcyh7fSwgb3JpZ2luQ29sdW1uKTtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gX3RoaXM3LmdldENvbHVtbktleShjb2x1bW4sIGkpO1xuICAgICAgICAgICAgICAgIHZhciBmaWx0ZXJEcm9wZG93biA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB2YXIgc29ydEJ1dHRvbiA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICBpZiAoY29sdW1uLmZpbHRlcnMgJiYgY29sdW1uLmZpbHRlcnMubGVuZ3RoID4gMCB8fCBjb2x1bW4uZmlsdGVyRHJvcGRvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbEZpbHRlcnMgPSBfdGhpczcuc3RhdGUuZmlsdGVyc1trZXldIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJEcm9wZG93biA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmlsdGVyRHJvcGRvd24sIHsgbG9jYWxlOiBsb2NhbGUsIGNvbHVtbjogY29sdW1uLCBzZWxlY3RlZEtleXM6IGNvbEZpbHRlcnMsIGNvbmZpcm1GaWx0ZXI6IF90aGlzNy5oYW5kbGVGaWx0ZXIsIHByZWZpeENsczogcHJlZml4Q2xzICsgJy1maWx0ZXInLCBkcm9wZG93blByZWZpeENsczogZHJvcGRvd25QcmVmaXhDbHMgfHwgJ2FudC1kcm9wZG93bicsIGdldFBvcHVwQ29udGFpbmVyOiBfdGhpczcuZ2V0UG9wdXBDb250YWluZXIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjb2x1bW4uc29ydGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpc1NvcnRDb2x1bW4gPSBfdGhpczcuaXNTb3J0Q29sdW1uKGNvbHVtbik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1NvcnRDb2x1bW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbi5jbGFzc05hbWUgPSBjbGFzc05hbWVzKGNvbHVtbi5jbGFzc05hbWUsIF9kZWZpbmVQcm9wZXJ0eSh7fSwgcHJlZml4Q2xzICsgJy1jb2x1bW4tc29ydCcsIHNvcnRPcmRlcikpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBpc0FzY2VuZCA9IGlzU29ydENvbHVtbiAmJiBzb3J0T3JkZXIgPT09ICdhc2NlbmQnO1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXNEZXNjZW5kID0gaXNTb3J0Q29sdW1uICYmIHNvcnRPcmRlciA9PT0gJ2Rlc2NlbmQnO1xuICAgICAgICAgICAgICAgICAgICBzb3J0QnV0dG9uID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctY29sdW1uLXNvcnRlcicgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWNvbHVtbi1zb3J0ZXItdXAgJyArIChpc0FzY2VuZCA/ICdvbicgOiAnb2ZmJyksIHRpdGxlOiAnXFx1MjE5MScsIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXM3LnRvZ2dsZVNvcnRPcmRlcignYXNjZW5kJywgY29sdW1uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyB0eXBlOiAnY2FyZXQtdXAnIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctY29sdW1uLXNvcnRlci1kb3duICcgKyAoaXNEZXNjZW5kID8gJ29uJyA6ICdvZmYnKSwgdGl0bGU6ICdcXHUyMTkzJywgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczcudG9nZ2xlU29ydE9yZGVyKCdkZXNjZW5kJywgY29sdW1uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyB0eXBlOiAnY2FyZXQtZG93bicgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29sdW1uLnRpdGxlID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICB7IGtleToga2V5IH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbi50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgc29ydEJ1dHRvbixcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyRHJvcGRvd25cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChzb3J0QnV0dG9uIHx8IGZpbHRlckRyb3Bkb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbi5jbGFzc05hbWUgPSBjbGFzc05hbWVzKHByZWZpeENscyArICctY29sdW1uLWhhcy1maWx0ZXJzJywgY29sdW1uLmNsYXNzTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjb2x1bW47XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyUGFnaW5hdGlvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJQYWdpbmF0aW9uKHBhZ2luYXRpb25Qb3NpdGlvbikge1xuICAgICAgICAgICAgLy8g5by65Yi25LiN6ZyA6KaB5YiG6aG1XG4gICAgICAgICAgICBpZiAoIXRoaXMuaGFzUGFnaW5hdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc2l6ZSA9ICdkZWZhdWx0JztcbiAgICAgICAgICAgIHZhciBwYWdpbmF0aW9uID0gdGhpcy5zdGF0ZS5wYWdpbmF0aW9uO1xuXG4gICAgICAgICAgICBpZiAocGFnaW5hdGlvbi5zaXplKSB7XG4gICAgICAgICAgICAgICAgc2l6ZSA9IHBhZ2luYXRpb24uc2l6ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5zaXplID09PSAnbWlkZGxlJyB8fCB0aGlzLnByb3BzLnNpemUgPT09ICdzbWFsbCcpIHtcbiAgICAgICAgICAgICAgICBzaXplID0gJ3NtYWxsJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IHBhZ2luYXRpb24ucG9zaXRpb24gfHwgJ2JvdHRvbSc7XG4gICAgICAgICAgICB2YXIgdG90YWwgPSBwYWdpbmF0aW9uLnRvdGFsIHx8IHRoaXMuZ2V0TG9jYWxEYXRhKCkubGVuZ3RoO1xuICAgICAgICAgICAgcmV0dXJuIHRvdGFsID4gMCAmJiAocG9zaXRpb24gPT09IHBhZ2luYXRpb25Qb3NpdGlvbiB8fCBwb3NpdGlvbiA9PT0gJ2JvdGgnKSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnaW5hdGlvbiwgX2V4dGVuZHMoeyBrZXk6ICdwYWdpbmF0aW9uLScgKyBwYWdpbmF0aW9uUG9zaXRpb24gfSwgcGFnaW5hdGlvbiwgeyBjbGFzc05hbWU6IGNsYXNzTmFtZXMocGFnaW5hdGlvbi5jbGFzc05hbWUsIHRoaXMucHJvcHMucHJlZml4Q2xzICsgJy1wYWdpbmF0aW9uJyksIG9uQ2hhbmdlOiB0aGlzLmhhbmRsZVBhZ2VDaGFuZ2UsIHRvdGFsOiB0b3RhbCwgc2l6ZTogc2l6ZSwgY3VycmVudDogdGhpcy5nZXRNYXhDdXJyZW50KHRvdGFsKSwgb25TaG93U2l6ZUNoYW5nZTogdGhpcy5oYW5kbGVTaG93U2l6ZUNoYW5nZSB9KSkgOiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIEdldCBwYWdpbmF0aW9uLCBmaWx0ZXJzLCBzb3J0ZXJcblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncHJlcGFyZVBhcmFtc0FyZ3VtZW50cycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwcmVwYXJlUGFyYW1zQXJndW1lbnRzKHN0YXRlKSB7XG4gICAgICAgICAgICB2YXIgcGFnaW5hdGlvbiA9IF9leHRlbmRzKHt9LCBzdGF0ZS5wYWdpbmF0aW9uKTtcbiAgICAgICAgICAgIC8vIHJlbW92ZSB1c2VsZXNzIGhhbmRsZSBmdW5jdGlvbiBpbiBUYWJsZS5vbkNoYW5nZVxuICAgICAgICAgICAgZGVsZXRlIHBhZ2luYXRpb24ub25DaGFuZ2U7XG4gICAgICAgICAgICBkZWxldGUgcGFnaW5hdGlvbi5vblNob3dTaXplQ2hhbmdlO1xuICAgICAgICAgICAgdmFyIGZpbHRlcnMgPSBzdGF0ZS5maWx0ZXJzO1xuICAgICAgICAgICAgdmFyIHNvcnRlciA9IHt9O1xuICAgICAgICAgICAgaWYgKHN0YXRlLnNvcnRDb2x1bW4gJiYgc3RhdGUuc29ydE9yZGVyKSB7XG4gICAgICAgICAgICAgICAgc29ydGVyLmNvbHVtbiA9IHN0YXRlLnNvcnRDb2x1bW47XG4gICAgICAgICAgICAgICAgc29ydGVyLm9yZGVyID0gc3RhdGUuc29ydE9yZGVyO1xuICAgICAgICAgICAgICAgIHNvcnRlci5maWVsZCA9IHN0YXRlLnNvcnRDb2x1bW4uZGF0YUluZGV4O1xuICAgICAgICAgICAgICAgIHNvcnRlci5jb2x1bW5LZXkgPSB0aGlzLmdldENvbHVtbktleShzdGF0ZS5zb3J0Q29sdW1uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBbcGFnaW5hdGlvbiwgZmlsdGVycywgc29ydGVyXTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZmluZENvbHVtbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBmaW5kQ29sdW1uKG15S2V5KSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM4ID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIGNvbHVtbiA9IHZvaWQgMDtcbiAgICAgICAgICAgIHRyZWVNYXAodGhpcy5jb2x1bW5zLCBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpczguZ2V0Q29sdW1uS2V5KGMpID09PSBteUtleSkge1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW4gPSBjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbjtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0Q3VycmVudFBhZ2VEYXRhJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEN1cnJlbnRQYWdlRGF0YSgpIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5nZXRMb2NhbERhdGEoKTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gdm9pZCAwO1xuICAgICAgICAgICAgdmFyIHBhZ2VTaXplID0gdm9pZCAwO1xuICAgICAgICAgICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgICAgIC8vIOWmguaenOayoeacieWIhumhteeahOivne+8jOm7mOiupOWFqOmDqOWxleekulxuICAgICAgICAgICAgaWYgKCF0aGlzLmhhc1BhZ2luYXRpb24oKSkge1xuICAgICAgICAgICAgICAgIHBhZ2VTaXplID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFnZVNpemUgPSBzdGF0ZS5wYWdpbmF0aW9uLnBhZ2VTaXplO1xuICAgICAgICAgICAgICAgIGN1cnJlbnQgPSB0aGlzLmdldE1heEN1cnJlbnQoc3RhdGUucGFnaW5hdGlvbi50b3RhbCB8fCBkYXRhLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDliIbpobVcbiAgICAgICAgICAgIC8vIC0tLVxuICAgICAgICAgICAgLy8g5b2T5pWw5o2u6YeP5bCR5LqO562J5LqO5q+P6aG15pWw6YeP5pe277yM55u05o6l6K6+572u5pWw5o2uXG4gICAgICAgICAgICAvLyDlkKbliJnov5vooYzor7vlj5bliIbpobXmlbDmja5cbiAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IHBhZ2VTaXplIHx8IHBhZ2VTaXplID09PSBOdW1iZXIuTUFYX1ZBTFVFKSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IGRhdGEuZmlsdGVyKGZ1bmN0aW9uIChfLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpID49IChjdXJyZW50IC0gMSkgKiBwYWdlU2l6ZSAmJiBpIDwgY3VycmVudCAqIHBhZ2VTaXplO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldEZsYXREYXRhJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldEZsYXREYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIGZsYXRBcnJheSh0aGlzLmdldExvY2FsRGF0YSgpKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0RmxhdEN1cnJlbnRQYWdlRGF0YScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGbGF0Q3VycmVudFBhZ2VEYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIGZsYXRBcnJheSh0aGlzLmdldEN1cnJlbnRQYWdlRGF0YSgpKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVjdXJzaXZlU29ydCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZWN1cnNpdmVTb3J0KGRhdGEsIHNvcnRlckZuKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXM5ID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIF9wcm9wcyRjaGlsZHJlbkNvbHVtbiA9IHRoaXMucHJvcHMuY2hpbGRyZW5Db2x1bW5OYW1lLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuQ29sdW1uTmFtZSA9IF9wcm9wcyRjaGlsZHJlbkNvbHVtbiA9PT0gdW5kZWZpbmVkID8gJ2NoaWxkcmVuJyA6IF9wcm9wcyRjaGlsZHJlbkNvbHVtbjtcblxuICAgICAgICAgICAgcmV0dXJuIGRhdGEuc29ydChzb3J0ZXJGbikubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1bY2hpbGRyZW5Db2x1bW5OYW1lXSA/IF9leHRlbmRzKHt9LCBpdGVtLCBfZGVmaW5lUHJvcGVydHkoe30sIGNoaWxkcmVuQ29sdW1uTmFtZSwgX3RoaXM5LnJlY3Vyc2l2ZVNvcnQoaXRlbVtjaGlsZHJlbkNvbHVtbk5hbWVdLCBzb3J0ZXJGbikpKSA6IGl0ZW07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0TG9jYWxEYXRhJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldExvY2FsRGF0YSgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczEwID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgICAgIHZhciBkYXRhU291cmNlID0gdGhpcy5wcm9wcy5kYXRhU291cmNlO1xuXG4gICAgICAgICAgICB2YXIgZGF0YSA9IGRhdGFTb3VyY2UgfHwgW107XG4gICAgICAgICAgICAvLyDkvJjljJbmnKzlnLDmjpLluo9cbiAgICAgICAgICAgIGRhdGEgPSBkYXRhLnNsaWNlKDApO1xuICAgICAgICAgICAgdmFyIHNvcnRlckZuID0gdGhpcy5nZXRTb3J0ZXJGbigpO1xuICAgICAgICAgICAgaWYgKHNvcnRlckZuKSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IHRoaXMucmVjdXJzaXZlU29ydChkYXRhLCBzb3J0ZXJGbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDnrZvpgIlcbiAgICAgICAgICAgIGlmIChzdGF0ZS5maWx0ZXJzKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc3RhdGUuZmlsdGVycykuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb2wgPSBfdGhpczEwLmZpbmRDb2x1bW4oY29sdW1uS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb2wpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVzID0gc3RhdGUuZmlsdGVyc1tjb2x1bW5LZXldIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBvbkZpbHRlciA9IGNvbC5vbkZpbHRlcjtcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IG9uRmlsdGVyID8gZGF0YS5maWx0ZXIoZnVuY3Rpb24gKHJlY29yZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlcy5zb21lKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uRmlsdGVyKHYsIHJlY29yZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSkgOiBkYXRhO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NyZWF0ZUNvbXBvbmVudHMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50cygpIHtcbiAgICAgICAgICAgIHZhciBjb21wb25lbnRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAgICAgICAgIHZhciBwcmV2Q29tcG9uZW50cyA9IGFyZ3VtZW50c1sxXTtcblxuICAgICAgICAgICAgdmFyIGJvZHlSb3cgPSBjb21wb25lbnRzICYmIGNvbXBvbmVudHMuYm9keSAmJiBjb21wb25lbnRzLmJvZHkucm93O1xuICAgICAgICAgICAgdmFyIHByZUJvZHlSb3cgPSBwcmV2Q29tcG9uZW50cyAmJiBwcmV2Q29tcG9uZW50cy5ib2R5ICYmIHByZXZDb21wb25lbnRzLmJvZHkucm93O1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNvbXBvbmVudHMgfHwgYm9keVJvdyAhPT0gcHJlQm9keVJvdykge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50cyA9IF9leHRlbmRzKHt9LCBjb21wb25lbnRzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHMuYm9keSA9IF9leHRlbmRzKHt9LCBjb21wb25lbnRzLmJvZHksIHsgcm93OiBjcmVhdGVCb2R5Um93KGJvZHlSb3cpIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMTEgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgc3R5bGUgPSBfcHJvcHMzLnN0eWxlLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wczMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIHByZWZpeENscyA9IF9wcm9wczMucHJlZml4Q2xzO1xuXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuZ2V0Q3VycmVudFBhZ2VEYXRhKCk7XG4gICAgICAgICAgICB2YXIgbG9hZGluZyA9IHRoaXMucHJvcHMubG9hZGluZztcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbG9hZGluZyA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgbG9hZGluZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgc3Bpbm5pbmc6IGxvYWRpbmdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHRhYmxlID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBMb2NhbGVSZWNlaXZlcixcbiAgICAgICAgICAgICAgICB7IGNvbXBvbmVudE5hbWU6ICdUYWJsZScsIGRlZmF1bHRMb2NhbGU6IGRlZmF1bHRMb2NhbGUuVGFibGUgfSxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAobG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczExLnJlbmRlclRhYmxlKGxvY2FsZSwgbG9hZGluZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIHBhZ2luYXRpb24gb3Igbm8gZGF0YSxcbiAgICAgICAgICAgIC8vIHRoZSBoZWlnaHQgb2Ygc3BpbiBzaG91bGQgZGVjcmVhc2UgYnkgaGFsZiBvZiBwYWdpbmF0aW9uXG4gICAgICAgICAgICB2YXIgcGFnaW5hdGlvblBhdGNoQ2xhc3MgPSB0aGlzLmhhc1BhZ2luYXRpb24oKSAmJiBkYXRhICYmIGRhdGEubGVuZ3RoICE9PSAwID8gcHJlZml4Q2xzICsgJy13aXRoLXBhZ2luYXRpb24nIDogcHJlZml4Q2xzICsgJy13aXRob3V0LXBhZ2luYXRpb24nO1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IGNsYXNzTmFtZXMocHJlZml4Q2xzICsgJy13cmFwcGVyJywgY2xhc3NOYW1lKSwgc3R5bGU6IHN0eWxlIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgU3BpbixcbiAgICAgICAgICAgICAgICAgICAgX2V4dGVuZHMoe30sIGxvYWRpbmcsIHsgY2xhc3NOYW1lOiBsb2FkaW5nLnNwaW5uaW5nID8gcGFnaW5hdGlvblBhdGNoQ2xhc3MgKyAnICcgKyBwcmVmaXhDbHMgKyAnLXNwaW4taG9sZGVyJyA6ICcnIH0pLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclBhZ2luYXRpb24oJ3RvcCcpLFxuICAgICAgICAgICAgICAgICAgICB0YWJsZSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJQYWdpbmF0aW9uKCdib3R0b20nKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gVGFibGU7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlO1xuXG5UYWJsZS5Db2x1bW4gPSBDb2x1bW47XG5UYWJsZS5Db2x1bW5Hcm91cCA9IENvbHVtbkdyb3VwO1xuVGFibGUucHJvcFR5cGVzID0ge1xuICAgIGRhdGFTb3VyY2U6IFByb3BUeXBlcy5hcnJheSxcbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHVzZUZpeGVkSGVhZGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByb3dTZWxlY3Rpb246IFByb3BUeXBlcy5vYmplY3QsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNpemU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbG9hZGluZzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBib3JkZXJlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIGxvY2FsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBkcm9wZG93blByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZ1xufTtcblRhYmxlLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBkYXRhU291cmNlOiBbXSxcbiAgICBwcmVmaXhDbHM6ICdhbnQtdGFibGUnLFxuICAgIHVzZUZpeGVkSGVhZGVyOiBmYWxzZSxcbiAgICByb3dTZWxlY3Rpb246IG51bGwsXG4gICAgY2xhc3NOYW1lOiAnJyxcbiAgICBzaXplOiAnbGFyZ2UnLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIGJvcmRlcmVkOiBmYWxzZSxcbiAgICBpbmRlbnRTaXplOiAyMCxcbiAgICBsb2NhbGU6IHt9LFxuICAgIHJvd0tleTogJ2tleScsXG4gICAgc2hvd0hlYWRlcjogdHJ1ZVxufTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IG9taXQgZnJvbSAnb21pdC5qcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUYWJsZVJvdygpIHtcbiAgICB2YXIgQ29tcG9uZW50ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiAndHInO1xuXG4gICAgdmFyIEJvZHlSb3cgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgICAgICBfaW5oZXJpdHMoQm9keVJvdywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICAgICAgZnVuY3Rpb24gQm9keVJvdyhwcm9wcykge1xuICAgICAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJvZHlSb3cpO1xuXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQm9keVJvdy5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEJvZHlSb3cpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgICAgICAgIF90aGlzLnN0b3JlID0gcHJvcHMuc3RvcmU7XG5cbiAgICAgICAgICAgIHZhciBfdGhpcyRzdG9yZSRnZXRTdGF0ZSA9IF90aGlzLnN0b3JlLmdldFN0YXRlKCksXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRSb3dLZXlzID0gX3RoaXMkc3RvcmUkZ2V0U3RhdGUuc2VsZWN0ZWRSb3dLZXlzO1xuXG4gICAgICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogc2VsZWN0ZWRSb3dLZXlzLmluZGV4T2YocHJvcHMucm93S2V5KSA+PSAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgX2NyZWF0ZUNsYXNzKEJvZHlSb3csIFt7XG4gICAgICAgICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVuc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ3N1YnNjcmliZScsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc3Vic2NyaWJlKCkge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlID0gX3Byb3BzLnN0b3JlLFxuICAgICAgICAgICAgICAgICAgICByb3dLZXkgPSBfcHJvcHMucm93S2V5O1xuXG4gICAgICAgICAgICAgICAgdGhpcy51bnN1YnNjcmliZSA9IHN0b3JlLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfc3RvcmUkZ2V0U3RhdGUgPSBfdGhpczIuc3RvcmUuZ2V0U3RhdGUoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUm93S2V5cyA9IF9zdG9yZSRnZXRTdGF0ZS5zZWxlY3RlZFJvd0tleXM7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkID0gc2VsZWN0ZWRSb3dLZXlzLmluZGV4T2Yocm93S2V5KSA+PSAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWQgIT09IF90aGlzMi5zdGF0ZS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnNldFN0YXRlKHsgc2VsZWN0ZWQ6IHNlbGVjdGVkIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgICAgIHZhciByb3dQcm9wcyA9IG9taXQodGhpcy5wcm9wcywgWydwcmVmaXhDbHMnLCAncm93S2V5JywgJ3N0b3JlJ10pO1xuICAgICAgICAgICAgICAgIHZhciBjbGFzc05hbWUgPSBjbGFzc25hbWVzKHRoaXMucHJvcHMuY2xhc3NOYW1lLCBfZGVmaW5lUHJvcGVydHkoe30sIHRoaXMucHJvcHMucHJlZml4Q2xzICsgJy1yb3ctc2VsZWN0ZWQnLCB0aGlzLnN0YXRlLnNlbGVjdGVkKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgX2V4dGVuZHMoe30sIHJvd1Byb3BzLCB7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0pLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfV0pO1xuXG4gICAgICAgIHJldHVybiBCb2R5Um93O1xuICAgIH0oUmVhY3QuQ29tcG9uZW50KTtcblxuICAgIHJldHVybiBCb2R5Um93O1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xuICAgIHZhciBzdGF0ZSA9IGluaXRpYWxTdGF0ZTtcbiAgICB2YXIgbGlzdGVuZXJzID0gW107XG4gICAgZnVuY3Rpb24gc2V0U3RhdGUocGFydGlhbCkge1xuICAgICAgICBzdGF0ZSA9IF9leHRlbmRzKHt9LCBzdGF0ZSwgcGFydGlhbCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnNbaV0oKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICAgICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBsaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2V0U3RhdGU6IHNldFN0YXRlLFxuICAgICAgICBnZXRTdGF0ZTogZ2V0U3RhdGUsXG4gICAgICAgIHN1YnNjcmliZTogc3Vic2NyaWJlXG4gICAgfTtcbn0iLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBNZW51LCB7IFN1Yk1lbnUsIEl0ZW0gYXMgTWVudUl0ZW0gfSBmcm9tICdyYy1tZW51JztcbmltcG9ydCBjbG9zZXN0IGZyb20gJ2RvbS1jbG9zZXN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gJy4uL2Ryb3Bkb3duJztcbmltcG9ydCBJY29uIGZyb20gJy4uL2ljb24nO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJy4uL2NoZWNrYm94JztcbmltcG9ydCBSYWRpbyBmcm9tICcuLi9yYWRpbyc7XG5pbXBvcnQgRmlsdGVyRHJvcGRvd25NZW51V3JhcHBlciBmcm9tICcuL0ZpbHRlckRyb3Bkb3duTWVudVdyYXBwZXInO1xuXG52YXIgRmlsdGVyTWVudSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKEZpbHRlck1lbnUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gRmlsdGVyTWVudShwcm9wcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRmlsdGVyTWVudSk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEZpbHRlck1lbnUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihGaWx0ZXJNZW51KSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgIF90aGlzLnNldE5ldmVyU2hvd24gPSBmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgICAgICB2YXIgcm9vdE5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZShfdGhpcyk7XG4gICAgICAgICAgICB2YXIgZmlsdGVyQmVsb25nVG9TY3JvbGxCb2R5ID0gISFjbG9zZXN0KHJvb3ROb2RlLCAnLmFudC10YWJsZS1zY3JvbGwnKTtcbiAgICAgICAgICAgIGlmIChmaWx0ZXJCZWxvbmdUb1Njcm9sbEJvZHkpIHtcbiAgICAgICAgICAgICAgICAvLyBXaGVuIGZpeGVkIGNvbHVtbiBoYXZlIGZpbHRlcnMsIHRoZXJlIHdpbGwgYmUgdHdvIGRyb3Bkb3duIG1lbnVzXG4gICAgICAgICAgICAgICAgLy8gRmlsdGVyIGRyb3Bkb3duIG1lbnUgaW5zaWRlIHNjcm9sbCBib2R5IHNob3VsZCBuZXZlciBiZSBzaG93blxuICAgICAgICAgICAgICAgIC8vIFRvIGZpeCBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy81MDEwIGFuZFxuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzc5MDlcbiAgICAgICAgICAgICAgICBfdGhpcy5uZXZlclNob3duID0gISFjb2x1bW4uZml4ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnNldFNlbGVjdGVkS2V5cyA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRLZXlzID0gX3JlZi5zZWxlY3RlZEtleXM7XG5cbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRLZXlzOiBzZWxlY3RlZEtleXMgfSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmhhbmRsZUNsZWFyRmlsdGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEtleXM6IFtdXG4gICAgICAgICAgICB9LCBfdGhpcy5oYW5kbGVDb25maXJtKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuaGFuZGxlQ29uZmlybSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnNldFZpc2libGUoZmFsc2UpO1xuICAgICAgICAgICAgX3RoaXMuY29uZmlybUZpbHRlcigpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5vblZpc2libGVDaGFuZ2UgPSBmdW5jdGlvbiAodmlzaWJsZSkge1xuICAgICAgICAgICAgX3RoaXMuc2V0VmlzaWJsZSh2aXNpYmxlKTtcbiAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmNvbmZpcm1GaWx0ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuaGFuZGxlTWVudUl0ZW1DbGljayA9IGZ1bmN0aW9uIChpbmZvKSB7XG4gICAgICAgICAgICBpZiAoaW5mby5rZXlQYXRoLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGtleVBhdGhPZlNlbGVjdGVkSXRlbSA9IF90aGlzLnN0YXRlLmtleVBhdGhPZlNlbGVjdGVkSXRlbTtcbiAgICAgICAgICAgIGlmIChfdGhpcy5zdGF0ZS5zZWxlY3RlZEtleXMuaW5kZXhPZihpbmZvLmtleSkgPj0gMCkge1xuICAgICAgICAgICAgICAgIC8vIGRlc2VsZWN0IFN1Yk1lbnUgY2hpbGRcbiAgICAgICAgICAgICAgICBkZWxldGUga2V5UGF0aE9mU2VsZWN0ZWRJdGVtW2luZm8ua2V5XTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gc2VsZWN0IFN1Yk1lbnUgY2hpbGRcbiAgICAgICAgICAgICAgICBrZXlQYXRoT2ZTZWxlY3RlZEl0ZW1baW5mby5rZXldID0gaW5mby5rZXlQYXRoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBrZXlQYXRoT2ZTZWxlY3RlZEl0ZW06IGtleVBhdGhPZlNlbGVjdGVkSXRlbSB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMucmVuZGVyRmlsdGVySWNvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IF90aGlzJHByb3BzLmNvbHVtbixcbiAgICAgICAgICAgICAgICBsb2NhbGUgPSBfdGhpcyRwcm9wcy5sb2NhbGUsXG4gICAgICAgICAgICAgICAgcHJlZml4Q2xzID0gX3RoaXMkcHJvcHMucHJlZml4Q2xzO1xuXG4gICAgICAgICAgICB2YXIgZmlsdGVySWNvbiA9IGNvbHVtbi5maWx0ZXJJY29uO1xuICAgICAgICAgICAgdmFyIGRyb3Bkb3duU2VsZWN0ZWRDbGFzcyA9IF90aGlzLnByb3BzLnNlbGVjdGVkS2V5cy5sZW5ndGggPiAwID8gcHJlZml4Q2xzICsgJy1zZWxlY3RlZCcgOiAnJztcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXJJY29uID8gUmVhY3QuY2xvbmVFbGVtZW50KGZpbHRlckljb24sIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogbG9jYWxlLmZpbHRlclRpdGxlLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhmaWx0ZXJJY29uLmNsYXNzTmFtZSwgX2RlZmluZVByb3BlcnR5KHt9LCBwcmVmaXhDbHMgKyAnLWljb24nLCB0cnVlKSlcbiAgICAgICAgICAgIH0pIDogUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7IHRpdGxlOiBsb2NhbGUuZmlsdGVyVGl0bGUsIHR5cGU6ICdmaWx0ZXInLCBjbGFzc05hbWU6IGRyb3Bkb3duU2VsZWN0ZWRDbGFzcyB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHZpc2libGUgPSAnZmlsdGVyRHJvcGRvd25WaXNpYmxlJyBpbiBwcm9wcy5jb2x1bW4gPyBwcm9wcy5jb2x1bW4uZmlsdGVyRHJvcGRvd25WaXNpYmxlIDogZmFsc2U7XG4gICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2VsZWN0ZWRLZXlzOiBwcm9wcy5zZWxlY3RlZEtleXMsXG4gICAgICAgICAgICBrZXlQYXRoT2ZTZWxlY3RlZEl0ZW06IHt9LFxuICAgICAgICAgICAgdmlzaWJsZTogdmlzaWJsZVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEZpbHRlck1lbnUsIFt7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgICAgdmFyIGNvbHVtbiA9IHRoaXMucHJvcHMuY29sdW1uO1xuXG4gICAgICAgICAgICB0aGlzLnNldE5ldmVyU2hvd24oY29sdW1uKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICAgICAgdmFyIGNvbHVtbiA9IG5leHRQcm9wcy5jb2x1bW47XG5cbiAgICAgICAgICAgIHRoaXMuc2V0TmV2ZXJTaG93bihjb2x1bW4pO1xuICAgICAgICAgICAgdmFyIG5ld1N0YXRlID0ge307XG4gICAgICAgICAgICBpZiAoJ3NlbGVjdGVkS2V5cycgaW4gbmV4dFByb3BzKSB7XG4gICAgICAgICAgICAgICAgbmV3U3RhdGUuc2VsZWN0ZWRLZXlzID0gbmV4dFByb3BzLnNlbGVjdGVkS2V5cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgnZmlsdGVyRHJvcGRvd25WaXNpYmxlJyBpbiBjb2x1bW4pIHtcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZS52aXNpYmxlID0gY29sdW1uLmZpbHRlckRyb3Bkb3duVmlzaWJsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhuZXdTdGF0ZSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdzZXRWaXNpYmxlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFZpc2libGUodmlzaWJsZSkge1xuICAgICAgICAgICAgdmFyIGNvbHVtbiA9IHRoaXMucHJvcHMuY29sdW1uO1xuXG4gICAgICAgICAgICBpZiAoISgnZmlsdGVyRHJvcGRvd25WaXNpYmxlJyBpbiBjb2x1bW4pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZpc2libGU6IHZpc2libGUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29sdW1uLm9uRmlsdGVyRHJvcGRvd25WaXNpYmxlQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgY29sdW1uLm9uRmlsdGVyRHJvcGRvd25WaXNpYmxlQ2hhbmdlKHZpc2libGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjb25maXJtRmlsdGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbmZpcm1GaWx0ZXIoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RlZEtleXMgIT09IHRoaXMucHJvcHMuc2VsZWN0ZWRLZXlzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jb25maXJtRmlsdGVyKHRoaXMucHJvcHMuY29sdW1uLCB0aGlzLnN0YXRlLnNlbGVjdGVkS2V5cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlck1lbnVJdGVtJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlck1lbnVJdGVtKGl0ZW0pIHtcbiAgICAgICAgICAgIHZhciBjb2x1bW4gPSB0aGlzLnByb3BzLmNvbHVtbjtcblxuICAgICAgICAgICAgdmFyIG11bHRpcGxlID0gJ2ZpbHRlck11bHRpcGxlJyBpbiBjb2x1bW4gPyBjb2x1bW4uZmlsdGVyTXVsdGlwbGUgOiB0cnVlO1xuICAgICAgICAgICAgdmFyIGlucHV0ID0gbXVsdGlwbGUgPyBSZWFjdC5jcmVhdGVFbGVtZW50KENoZWNrYm94LCB7IGNoZWNrZWQ6IHRoaXMuc3RhdGUuc2VsZWN0ZWRLZXlzLmluZGV4T2YoaXRlbS52YWx1ZS50b1N0cmluZygpKSA+PSAwIH0pIDogUmVhY3QuY3JlYXRlRWxlbWVudChSYWRpbywgeyBjaGVja2VkOiB0aGlzLnN0YXRlLnNlbGVjdGVkS2V5cy5pbmRleE9mKGl0ZW0udmFsdWUudG9TdHJpbmcoKSkgPj0gMCB9KTtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIE1lbnVJdGVtLFxuICAgICAgICAgICAgICAgIHsga2V5OiBpdGVtLnZhbHVlIH0sXG4gICAgICAgICAgICAgICAgaW5wdXQsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICBpdGVtLnRleHRcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdoYXNTdWJNZW51JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhc1N1Yk1lbnUoKSB7XG4gICAgICAgICAgICB2YXIgX3Byb3BzJGNvbHVtbiRmaWx0ZXJzID0gdGhpcy5wcm9wcy5jb2x1bW4uZmlsdGVycyxcbiAgICAgICAgICAgICAgICBmaWx0ZXJzID0gX3Byb3BzJGNvbHVtbiRmaWx0ZXJzID09PSB1bmRlZmluZWQgPyBbXSA6IF9wcm9wcyRjb2x1bW4kZmlsdGVycztcblxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcnMuc29tZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhIShpdGVtLmNoaWxkcmVuICYmIGl0ZW0uY2hpbGRyZW4ubGVuZ3RoID4gMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyTWVudXMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyTWVudXMoaXRlbXMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICByZXR1cm4gaXRlbXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uY2hpbGRyZW4gJiYgaXRlbS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXlQYXRoT2ZTZWxlY3RlZEl0ZW0gPSBfdGhpczIuc3RhdGUua2V5UGF0aE9mU2VsZWN0ZWRJdGVtO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250YWluU2VsZWN0ZWQgPSBPYmplY3Qua2V5cyhrZXlQYXRoT2ZTZWxlY3RlZEl0ZW0pLnNvbWUoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleVBhdGhPZlNlbGVjdGVkSXRlbVtrZXldLmluZGV4T2YoaXRlbS52YWx1ZSkgPj0gMDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdWJNZW51Q2xzID0gY29udGFpblNlbGVjdGVkID8gX3RoaXMyLnByb3BzLmRyb3Bkb3duUHJlZml4Q2xzICsgJy1zdWJtZW51LWNvbnRhaW4tc2VsZWN0ZWQnIDogJyc7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgU3ViTWVudSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdGl0bGU6IGl0ZW0udGV4dCwgY2xhc3NOYW1lOiBzdWJNZW51Q2xzLCBrZXk6IGl0ZW0udmFsdWUudG9TdHJpbmcoKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnJlbmRlck1lbnVzKGl0ZW0uY2hpbGRyZW4pXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIucmVuZGVyTWVudUl0ZW0oaXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIGNvbHVtbiA9IF9wcm9wcy5jb2x1bW4sXG4gICAgICAgICAgICAgICAgbG9jYWxlID0gX3Byb3BzLmxvY2FsZSxcbiAgICAgICAgICAgICAgICBwcmVmaXhDbHMgPSBfcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICAgICAgICAgIGRyb3Bkb3duUHJlZml4Q2xzID0gX3Byb3BzLmRyb3Bkb3duUHJlZml4Q2xzLFxuICAgICAgICAgICAgICAgIGdldFBvcHVwQ29udGFpbmVyID0gX3Byb3BzLmdldFBvcHVwQ29udGFpbmVyO1xuICAgICAgICAgICAgLy8gZGVmYXVsdCBtdWx0aXBsZSBzZWxlY3Rpb24gaW4gZmlsdGVyIGRyb3Bkb3duXG5cbiAgICAgICAgICAgIHZhciBtdWx0aXBsZSA9ICdmaWx0ZXJNdWx0aXBsZScgaW4gY29sdW1uID8gY29sdW1uLmZpbHRlck11bHRpcGxlIDogdHJ1ZTtcbiAgICAgICAgICAgIHZhciBkcm9wZG93bk1lbnVDbGFzcyA9IGNsYXNzTmFtZXMoX2RlZmluZVByb3BlcnR5KHt9LCBkcm9wZG93blByZWZpeENscyArICctbWVudS13aXRob3V0LXN1Ym1lbnUnLCAhdGhpcy5oYXNTdWJNZW51KCkpKTtcbiAgICAgICAgICAgIHZhciBtZW51cyA9IGNvbHVtbi5maWx0ZXJEcm9wZG93biA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgRmlsdGVyRHJvcGRvd25NZW51V3JhcHBlcixcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIGNvbHVtbi5maWx0ZXJEcm9wZG93blxuICAgICAgICAgICAgKSA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgRmlsdGVyRHJvcGRvd25NZW51V3JhcHBlcixcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1kcm9wZG93bicgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBNZW51LFxuICAgICAgICAgICAgICAgICAgICB7IG11bHRpcGxlOiBtdWx0aXBsZSwgb25DbGljazogdGhpcy5oYW5kbGVNZW51SXRlbUNsaWNrLCBwcmVmaXhDbHM6IGRyb3Bkb3duUHJlZml4Q2xzICsgJy1tZW51JywgY2xhc3NOYW1lOiBkcm9wZG93bk1lbnVDbGFzcywgb25TZWxlY3Q6IHRoaXMuc2V0U2VsZWN0ZWRLZXlzLCBvbkRlc2VsZWN0OiB0aGlzLnNldFNlbGVjdGVkS2V5cywgc2VsZWN0ZWRLZXlzOiB0aGlzLnN0YXRlLnNlbGVjdGVkS2V5cywgZ2V0UG9wdXBDb250YWluZXI6IGZ1bmN0aW9uIGdldFBvcHVwQ29udGFpbmVyKHRyaWdnZXJOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRyaWdnZXJOb2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyTWVudXMoY29sdW1uLmZpbHRlcnMpXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctZHJvcGRvd24tYnRucycgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWRyb3Bkb3duLWxpbmsgY29uZmlybScsIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ29uZmlybSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlLmZpbHRlckNvbmZpcm1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWRyb3Bkb3duLWxpbmsgY2xlYXInLCBvbkNsaWNrOiB0aGlzLmhhbmRsZUNsZWFyRmlsdGVycyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlLmZpbHRlclJlc2V0XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgRHJvcGRvd24sXG4gICAgICAgICAgICAgICAgeyB0cmlnZ2VyOiBbJ2NsaWNrJ10sIG92ZXJsYXk6IG1lbnVzLCB2aXNpYmxlOiB0aGlzLm5ldmVyU2hvd24gPyBmYWxzZSA6IHRoaXMuc3RhdGUudmlzaWJsZSwgb25WaXNpYmxlQ2hhbmdlOiB0aGlzLm9uVmlzaWJsZUNoYW5nZSwgZ2V0UG9wdXBDb250YWluZXI6IGdldFBvcHVwQ29udGFpbmVyLCBmb3JjZVJlbmRlcjogdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyRmlsdGVySWNvbigpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEZpbHRlck1lbnU7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlck1lbnU7XG5cbkZpbHRlck1lbnUuZGVmYXVsdFByb3BzID0ge1xuICAgIGhhbmRsZUZpbHRlcjogZnVuY3Rpb24gaGFuZGxlRmlsdGVyKCkge30sXG5cbiAgICBjb2x1bW46IHt9XG59OyIsImltcG9ydCBUYWJsZSBmcm9tICcuL1RhYmxlJztcbmV4cG9ydCBkZWZhdWx0IFRhYmxlOyIsImltcG9ydCAnLi4vLi4vc3R5bGUvaW5kZXguY3NzJztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuLy8gc3R5bGUgZGVwZW5kZW5jaWVzXG5pbXBvcnQgJy4uLy4uL3JhZGlvL3N0eWxlL2Nzcyc7XG5pbXBvcnQgJy4uLy4uL2NoZWNrYm94L3N0eWxlL2Nzcyc7XG5pbXBvcnQgJy4uLy4uL2Ryb3Bkb3duL3N0eWxlL2Nzcyc7XG5pbXBvcnQgJy4uLy4uL3NwaW4vc3R5bGUvY3NzJztcbmltcG9ydCAnLi4vLi4vcGFnaW5hdGlvbi9zdHlsZS9jc3MnOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXguY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXguY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IF90b0NvbnN1bWFibGVBcnJheSBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXknO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBmdW5jdGlvbiBmbGF0QXJyYXkoKSB7XG4gICAgdmFyIGRhdGEgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFtdO1xuICAgIHZhciBjaGlsZHJlbk5hbWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICdjaGlsZHJlbic7XG5cbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGxvb3AgPSBmdW5jdGlvbiBsb29wKGFycmF5KSB7XG4gICAgICAgIGFycmF5LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChpdGVtW2NoaWxkcmVuTmFtZV0pIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3SXRlbSA9IF9leHRlbmRzKHt9LCBpdGVtKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgbmV3SXRlbVtjaGlsZHJlbk5hbWVdO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5ld0l0ZW0pO1xuICAgICAgICAgICAgICAgIGlmIChpdGVtW2NoaWxkcmVuTmFtZV0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBsb29wKGl0ZW1bY2hpbGRyZW5OYW1lXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBsb29wKGRhdGEpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnQgZnVuY3Rpb24gdHJlZU1hcCh0cmVlLCBtYXBwZXIpIHtcbiAgICB2YXIgY2hpbGRyZW5OYW1lID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAnY2hpbGRyZW4nO1xuXG4gICAgcmV0dXJuIHRyZWUubWFwKGZ1bmN0aW9uIChub2RlLCBpbmRleCkge1xuICAgICAgICB2YXIgZXh0cmEgPSB7fTtcbiAgICAgICAgaWYgKG5vZGVbY2hpbGRyZW5OYW1lXSkge1xuICAgICAgICAgICAgZXh0cmFbY2hpbGRyZW5OYW1lXSA9IHRyZWVNYXAobm9kZVtjaGlsZHJlbk5hbWVdLCBtYXBwZXIsIGNoaWxkcmVuTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBtYXBwZXIobm9kZSwgaW5kZXgpLCBleHRyYSk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZmxhdEZpbHRlcih0cmVlLCBjYWxsYmFjaykge1xuICAgIHJldHVybiB0cmVlLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBub2RlKSB7XG4gICAgICAgIGlmIChjYWxsYmFjayhub2RlKSkge1xuICAgICAgICAgICAgYWNjLnB1c2gobm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IGZsYXRGaWx0ZXIobm9kZS5jaGlsZHJlbiwgY2FsbGJhY2spO1xuICAgICAgICAgICAgYWNjLnB1c2guYXBwbHkoYWNjLCBfdG9Db25zdW1hYmxlQXJyYXkoY2hpbGRyZW4pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIFtdKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVDb2x1bW5zKGVsZW1lbnRzKSB7XG4gICAgdmFyIGNvbHVtbnMgPSBbXTtcbiAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvbHVtbiA9IF9leHRlbmRzKHt9LCBlbGVtZW50LnByb3BzKTtcbiAgICAgICAgaWYgKGVsZW1lbnQua2V5KSB7XG4gICAgICAgICAgICBjb2x1bW4ua2V5ID0gZWxlbWVudC5rZXk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQudHlwZSAmJiBlbGVtZW50LnR5cGUuX19BTlRfVEFCTEVfQ09MVU1OX0dST1VQKSB7XG4gICAgICAgICAgICBjb2x1bW4uY2hpbGRyZW4gPSBub3JtYWxpemVDb2x1bW5zKGNvbHVtbi5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgICAgY29sdW1ucy5wdXNoKGNvbHVtbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbHVtbnM7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIHN0eWxlbGludC1kaXNhYmxlIGF0LXJ1bGUtZW1wdHktbGluZS1iZWZvcmUsYXQtcnVsZS1uYW1lLXNwYWNlLWFmdGVyLGF0LXJ1bGUtbm8tdW5rbm93biAqL1xcbi8qIHN0eWxlbGludC1kaXNhYmxlIG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnMgKi9cXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1iYW5nLXNwYWNlLWJlZm9yZSxuby1kdXBsaWNhdGUtc2VsZWN0b3JzICovXFxuLyogc3R5bGVsaW50LWRpc2FibGUgZGVjbGFyYXRpb24tYmFuZy1zcGFjZS1iZWZvcmUsbm8tZHVwbGljYXRlLXNlbGVjdG9ycyAqL1xcbi5hbnQtZHJvcGRvd24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb25vc3BhY2VkIE51bWJlclxcXCIsIFxcXCJDaGluZXNlIFF1b3RlXFxcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJQaW5nRmFuZyBTQ1xcXCIsIFxcXCJIaXJhZ2lubyBTYW5zIEdCXFxcIiwgXFxcIk1pY3Jvc29mdCBZYUhlaVxcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC05OTk5cHg7XFxuICB0b3A6IC05OTk5cHg7XFxuICB6LWluZGV4OiAxMDUwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5hbnQtZHJvcGRvd24td3JhcCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5hbnQtZHJvcGRvd24td3JhcCAuYW50LWJ0biA+IC5hbnRpY29uLWRvd24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC1zaXplOiAxMHB4IFxcXFw5O1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuODMzMzMzMzMpIHJvdGF0ZSgwZGVnKTtcXG4gICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjgzMzMzMzMzKSByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44MzMzMzMzMykgcm90YXRlKDBkZWcpO1xcbn1cXG46cm9vdCAuYW50LWRyb3Bkb3duLXdyYXAgLmFudC1idG4gPiAuYW50aWNvbi1kb3duIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLmFudC1kcm9wZG93bi13cmFwIC5hbnRpY29uLWRvd246YmVmb3JlIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjJzO1xcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjJzO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMsIC13ZWJraXQtdHJhbnNmb3JtIC4ycztcXG59XFxuLmFudC1kcm9wZG93bi13cmFwLW9wZW4gLmFudGljb24tZG93bjpiZWZvcmUge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG4uYW50LWRyb3Bkb3duLWhpZGRlbixcXG4uYW50LWRyb3Bkb3duLW1lbnUtaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5hbnQtZHJvcGRvd24tbWVudSB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbn1cXG4uYW50LWRyb3Bkb3duLW1lbnUtaXRlbS1ncm91cC10aXRsZSB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gIHBhZGRpbmc6IDVweCAxMnB4O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcXG59XFxuLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtcG9wdXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTA1MDtcXG59XFxuLmFudC1kcm9wZG93bi1tZW51LWl0ZW0sXFxuLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtdGl0bGUge1xcbiAgcGFkZGluZzogNXB4IDEycHg7XFxuICBtYXJnaW46IDA7XFxuICBjbGVhcjogYm90aDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3M7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxufVxcbi5hbnQtZHJvcGRvd24tbWVudS1pdGVtID4gYSxcXG4uYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS10aXRsZSA+IGEge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDVweCAxMnB4O1xcbiAgbWFyZ2luOiAtNXB4IC0xMnB4O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcXG59XFxuLmFudC1kcm9wZG93bi1tZW51LWl0ZW0gPiBhOmZvY3VzLFxcbi5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LXRpdGxlID4gYTpmb2N1cyB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbi5hbnQtZHJvcGRvd24tbWVudS1pdGVtLXNlbGVjdGVkLFxcbi5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LXRpdGxlLXNlbGVjdGVkLFxcbi5hbnQtZHJvcGRvd24tbWVudS1pdGVtLXNlbGVjdGVkID4gYSxcXG4uYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS10aXRsZS1zZWxlY3RlZCA+IGEge1xcbiAgY29sb3I6ICMxODkwZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZmN2ZmO1xcbn1cXG4uYW50LWRyb3Bkb3duLW1lbnUtaXRlbTpob3ZlcixcXG4uYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS10aXRsZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZmN2ZmO1xcbn1cXG4uYW50LWRyb3Bkb3duLW1lbnUtaXRlbS1kaXNhYmxlZCxcXG4uYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS10aXRsZS1kaXNhYmxlZCB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi5hbnQtZHJvcGRvd24tbWVudS1pdGVtLWRpc2FibGVkOmhvdmVyLFxcbi5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LXRpdGxlLWRpc2FibGVkOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi5hbnQtZHJvcGRvd24tbWVudS1pdGVtOmZpcnN0LWNoaWxkLFxcbi5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LXRpdGxlOmZpcnN0LWNoaWxkLFxcbi5hbnQtZHJvcGRvd24tbWVudS1pdGVtOmZpcnN0LWNoaWxkID4gYSxcXG4uYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS10aXRsZTpmaXJzdC1jaGlsZCA+IGEge1xcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XFxufVxcbi5hbnQtZHJvcGRvd24tbWVudS1pdGVtOmxhc3QtY2hpbGQsXFxuLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtdGl0bGU6bGFzdC1jaGlsZCxcXG4uYW50LWRyb3Bkb3duLW1lbnUtaXRlbTpsYXN0LWNoaWxkID4gYSxcXG4uYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS10aXRsZTpsYXN0LWNoaWxkID4gYSB7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcXG59XFxuLmFudC1kcm9wZG93bi1tZW51LWl0ZW06b25seS1jaGlsZCxcXG4uYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS10aXRsZTpvbmx5LWNoaWxkLFxcbi5hbnQtZHJvcGRvd24tbWVudS1pdGVtOm9ubHktY2hpbGQgPiBhLFxcbi5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LXRpdGxlOm9ubHktY2hpbGQgPiBhIHtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLmFudC1kcm9wZG93bi1tZW51LWl0ZW0tZGl2aWRlcixcXG4uYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS10aXRsZS1kaXZpZGVyIHtcXG4gIGhlaWdodDogMXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XFxuICBsaW5lLWhlaWdodDogMDtcXG59XFxuLmFudC1kcm9wZG93bi1tZW51LWl0ZW0gLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtYXJyb3csXFxuLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtdGl0bGUgLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtYXJyb3cge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDhweDtcXG59XFxuLmFudC1kcm9wZG93bi1tZW51LWl0ZW0gLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtYXJyb3c6YWZ0ZXIsXFxuLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtdGl0bGUgLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtYXJyb3c6YWZ0ZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJhbnRpY29uXFxcIiAhaW1wb3J0YW50O1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgY29udGVudDogXFxcIlxcXFxFNjFGXFxcIjtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC1zaXplOiAxMHB4IFxcXFw5O1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuODMzMzMzMzMpIHJvdGF0ZSgwZGVnKTtcXG4gICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjgzMzMzMzMzKSByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44MzMzMzMzMykgcm90YXRlKDBkZWcpO1xcbn1cXG46cm9vdCAuYW50LWRyb3Bkb3duLW1lbnUtaXRlbSAuYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS1hcnJvdzphZnRlcixcXG46cm9vdCAuYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS10aXRsZSAuYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS1hcnJvdzphZnRlciB7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LXRpdGxlIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI2cHg7XFxufVxcbi5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LXRpdGxlOmZpcnN0LWNoaWxkLFxcbi5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LXRpdGxlOmxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtdmVydGljYWwge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS12ZXJ0aWNhbCA+IC5hbnQtZHJvcGRvd24tbWVudSB7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWluLXdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWxlZnQ6IDRweDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xcbiAgICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcXG59XFxuLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUuYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS1kaXNhYmxlZCAuYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS10aXRsZSxcXG4uYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LWRpc2FibGVkIC5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LXRpdGxlIC5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LWFycm93OmFmdGVyIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbn1cXG4uYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudTpmaXJzdC1jaGlsZCAuYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS10aXRsZSB7XFxuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcXG59XFxuLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnU6bGFzdC1jaGlsZCAuYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS10aXRsZSB7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcXG59XFxuLmFudC1kcm9wZG93bi5zbGlkZS1kb3duLWVudGVyLnNsaWRlLWRvd24tZW50ZXItYWN0aXZlLmFudC1kcm9wZG93bi1wbGFjZW1lbnQtYm90dG9tTGVmdCxcXG4uYW50LWRyb3Bkb3duLnNsaWRlLWRvd24tYXBwZWFyLnNsaWRlLWRvd24tYXBwZWFyLWFjdGl2ZS5hbnQtZHJvcGRvd24tcGxhY2VtZW50LWJvdHRvbUxlZnQsXFxuLmFudC1kcm9wZG93bi5zbGlkZS1kb3duLWVudGVyLnNsaWRlLWRvd24tZW50ZXItYWN0aXZlLmFudC1kcm9wZG93bi1wbGFjZW1lbnQtYm90dG9tQ2VudGVyLFxcbi5hbnQtZHJvcGRvd24uc2xpZGUtZG93bi1hcHBlYXIuc2xpZGUtZG93bi1hcHBlYXItYWN0aXZlLmFudC1kcm9wZG93bi1wbGFjZW1lbnQtYm90dG9tQ2VudGVyLFxcbi5hbnQtZHJvcGRvd24uc2xpZGUtZG93bi1lbnRlci5zbGlkZS1kb3duLWVudGVyLWFjdGl2ZS5hbnQtZHJvcGRvd24tcGxhY2VtZW50LWJvdHRvbVJpZ2h0LFxcbi5hbnQtZHJvcGRvd24uc2xpZGUtZG93bi1hcHBlYXIuc2xpZGUtZG93bi1hcHBlYXItYWN0aXZlLmFudC1kcm9wZG93bi1wbGFjZW1lbnQtYm90dG9tUmlnaHQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW50U2xpZGVVcEluO1xcbiAgICAgICAgICBhbmltYXRpb24tbmFtZTogYW50U2xpZGVVcEluO1xcbn1cXG4uYW50LWRyb3Bkb3duLnNsaWRlLXVwLWVudGVyLnNsaWRlLXVwLWVudGVyLWFjdGl2ZS5hbnQtZHJvcGRvd24tcGxhY2VtZW50LXRvcExlZnQsXFxuLmFudC1kcm9wZG93bi5zbGlkZS11cC1hcHBlYXIuc2xpZGUtdXAtYXBwZWFyLWFjdGl2ZS5hbnQtZHJvcGRvd24tcGxhY2VtZW50LXRvcExlZnQsXFxuLmFudC1kcm9wZG93bi5zbGlkZS11cC1lbnRlci5zbGlkZS11cC1lbnRlci1hY3RpdmUuYW50LWRyb3Bkb3duLXBsYWNlbWVudC10b3BDZW50ZXIsXFxuLmFudC1kcm9wZG93bi5zbGlkZS11cC1hcHBlYXIuc2xpZGUtdXAtYXBwZWFyLWFjdGl2ZS5hbnQtZHJvcGRvd24tcGxhY2VtZW50LXRvcENlbnRlcixcXG4uYW50LWRyb3Bkb3duLnNsaWRlLXVwLWVudGVyLnNsaWRlLXVwLWVudGVyLWFjdGl2ZS5hbnQtZHJvcGRvd24tcGxhY2VtZW50LXRvcFJpZ2h0LFxcbi5hbnQtZHJvcGRvd24uc2xpZGUtdXAtYXBwZWFyLnNsaWRlLXVwLWFwcGVhci1hY3RpdmUuYW50LWRyb3Bkb3duLXBsYWNlbWVudC10b3BSaWdodCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbnRTbGlkZURvd25JbjtcXG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGFudFNsaWRlRG93bkluO1xcbn1cXG4uYW50LWRyb3Bkb3duLnNsaWRlLWRvd24tbGVhdmUuc2xpZGUtZG93bi1sZWF2ZS1hY3RpdmUuYW50LWRyb3Bkb3duLXBsYWNlbWVudC1ib3R0b21MZWZ0LFxcbi5hbnQtZHJvcGRvd24uc2xpZGUtZG93bi1sZWF2ZS5zbGlkZS1kb3duLWxlYXZlLWFjdGl2ZS5hbnQtZHJvcGRvd24tcGxhY2VtZW50LWJvdHRvbUNlbnRlcixcXG4uYW50LWRyb3Bkb3duLnNsaWRlLWRvd24tbGVhdmUuc2xpZGUtZG93bi1sZWF2ZS1hY3RpdmUuYW50LWRyb3Bkb3duLXBsYWNlbWVudC1ib3R0b21SaWdodCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbnRTbGlkZVVwT3V0O1xcbiAgICAgICAgICBhbmltYXRpb24tbmFtZTogYW50U2xpZGVVcE91dDtcXG59XFxuLmFudC1kcm9wZG93bi5zbGlkZS11cC1sZWF2ZS5zbGlkZS11cC1sZWF2ZS1hY3RpdmUuYW50LWRyb3Bkb3duLXBsYWNlbWVudC10b3BMZWZ0LFxcbi5hbnQtZHJvcGRvd24uc2xpZGUtdXAtbGVhdmUuc2xpZGUtdXAtbGVhdmUtYWN0aXZlLmFudC1kcm9wZG93bi1wbGFjZW1lbnQtdG9wQ2VudGVyLFxcbi5hbnQtZHJvcGRvd24uc2xpZGUtdXAtbGVhdmUuc2xpZGUtdXAtbGVhdmUtYWN0aXZlLmFudC1kcm9wZG93bi1wbGFjZW1lbnQtdG9wUmlnaHQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW50U2xpZGVEb3duT3V0O1xcbiAgICAgICAgICBhbmltYXRpb24tbmFtZTogYW50U2xpZGVEb3duT3V0O1xcbn1cXG4uYW50LWRyb3Bkb3duLXRyaWdnZXIgLmFudGljb24tZG93bixcXG4uYW50LWRyb3Bkb3duLWxpbmsgLmFudGljb24tZG93biB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXNpemU6IDEwcHggXFxcXDk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44MzMzMzMzMykgcm90YXRlKDBkZWcpO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuODMzMzMzMzMpIHJvdGF0ZSgwZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgzMzMzMzMzKSByb3RhdGUoMGRlZyk7XFxufVxcbjpyb290IC5hbnQtZHJvcGRvd24tdHJpZ2dlciAuYW50aWNvbi1kb3duLFxcbjpyb290IC5hbnQtZHJvcGRvd24tbGluayAuYW50aWNvbi1kb3duIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLmFudC1kcm9wZG93bi1idXR0b24ge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLmFudC1kcm9wZG93bi1idXR0b24uYW50LWJ0bi1ncm91cCA+IC5hbnQtYnRuOmxhc3QtY2hpbGQ6bm90KDpmaXJzdC1jaGlsZCkge1xcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XFxufVxcbi5hbnQtZHJvcGRvd24tYnV0dG9uIC5hbnRpY29uLWRvd24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC1zaXplOiAxMHB4IFxcXFw5O1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuODMzMzMzMzMpIHJvdGF0ZSgwZGVnKTtcXG4gICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjgzMzMzMzMzKSByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44MzMzMzMzMykgcm90YXRlKDBkZWcpO1xcbn1cXG46cm9vdCAuYW50LWRyb3Bkb3duLWJ1dHRvbiAuYW50aWNvbi1kb3duIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLmFudC1kcm9wZG93bi1tZW51LWRhcmssXFxuLmFudC1kcm9wZG93bi1tZW51LWRhcmsgLmFudC1kcm9wZG93bi1tZW51IHtcXG4gIGJhY2tncm91bmQ6ICMwMDE1Mjk7XFxufVxcbi5hbnQtZHJvcGRvd24tbWVudS1kYXJrIC5hbnQtZHJvcGRvd24tbWVudS1pdGVtLFxcbi5hbnQtZHJvcGRvd24tbWVudS1kYXJrIC5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LXRpdGxlLFxcbi5hbnQtZHJvcGRvd24tbWVudS1kYXJrIC5hbnQtZHJvcGRvd24tbWVudS1pdGVtID4gYSB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY1KTtcXG59XFxuLmFudC1kcm9wZG93bi1tZW51LWRhcmsgLmFudC1kcm9wZG93bi1tZW51LWl0ZW0gLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtYXJyb3c6YWZ0ZXIsXFxuLmFudC1kcm9wZG93bi1tZW51LWRhcmsgLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtdGl0bGUgLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtYXJyb3c6YWZ0ZXIsXFxuLmFudC1kcm9wZG93bi1tZW51LWRhcmsgLmFudC1kcm9wZG93bi1tZW51LWl0ZW0gPiBhIC5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LWFycm93OmFmdGVyIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjUpO1xcbn1cXG4uYW50LWRyb3Bkb3duLW1lbnUtZGFyayAuYW50LWRyb3Bkb3duLW1lbnUtaXRlbTpob3ZlcixcXG4uYW50LWRyb3Bkb3duLW1lbnUtZGFyayAuYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS10aXRsZTpob3ZlcixcXG4uYW50LWRyb3Bkb3duLW1lbnUtZGFyayAuYW50LWRyb3Bkb3duLW1lbnUtaXRlbSA+IGE6aG92ZXIge1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuLmFudC1kcm9wZG93bi1tZW51LWRhcmsgLmFudC1kcm9wZG93bi1tZW51LWl0ZW0tc2VsZWN0ZWQsXFxuLmFudC1kcm9wZG93bi1tZW51LWRhcmsgLmFudC1kcm9wZG93bi1tZW51LWl0ZW0tc2VsZWN0ZWQ6aG92ZXIsXFxuLmFudC1kcm9wZG93bi1tZW51LWRhcmsgLmFudC1kcm9wZG93bi1tZW51LWl0ZW0tc2VsZWN0ZWQgPiBhIHtcXG4gIGJhY2tncm91bmQ6ICMxODkwZmY7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIHN0eWxlbGludC1kaXNhYmxlIGF0LXJ1bGUtZW1wdHktbGluZS1iZWZvcmUsYXQtcnVsZS1uYW1lLXNwYWNlLWFmdGVyLGF0LXJ1bGUtbm8tdW5rbm93biAqL1xcbi8qIHN0eWxlbGludC1kaXNhYmxlIG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnMgKi9cXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1iYW5nLXNwYWNlLWJlZm9yZSxuby1kdXBsaWNhdGUtc2VsZWN0b3JzICovXFxuLyogc3R5bGVsaW50LWRpc2FibGUgZGVjbGFyYXRpb24tYmFuZy1zcGFjZS1iZWZvcmUsbm8tZHVwbGljYXRlLXNlbGVjdG9ycyAqL1xcbi5hbnQtcGFnaW5hdGlvbiB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbm9zcGFjZWQgTnVtYmVyXFxcIiwgXFxcIkNoaW5lc2UgUXVvdGVcXFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIlBpbmdGYW5nIFNDXFxcIiwgXFxcIkhpcmFnaW5vIFNhbnMgR0JcXFwiLCBcXFwiTWljcm9zb2Z0IFlhSGVpXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4uYW50LXBhZ2luYXRpb24gdWwsXFxuLmFudC1wYWdpbmF0aW9uIG9sIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4uYW50LXBhZ2luYXRpb246YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDA7XFxuICBjbGVhcjogYm90aDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5hbnQtcGFnaW5hdGlvbi10b3RhbC10ZXh0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcbn1cXG4uYW50LXBhZ2luYXRpb24taXRlbSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgbWluLXdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuICBmb250LWZhbWlseTogQXJpYWw7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG4uYW50LXBhZ2luYXRpb24taXRlbSBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lO1xcbiAgdHJhbnNpdGlvbjogbm9uZTtcXG4gIG1hcmdpbjogMCA2cHg7XFxufVxcbi5hbnQtcGFnaW5hdGlvbi1pdGVtOmZvY3VzLFxcbi5hbnQtcGFnaW5hdGlvbi1pdGVtOmhvdmVyIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcztcXG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XFxuICBib3JkZXItY29sb3I6ICMxODkwZmY7XFxufVxcbi5hbnQtcGFnaW5hdGlvbi1pdGVtOmZvY3VzIGEsXFxuLmFudC1wYWdpbmF0aW9uLWl0ZW06aG92ZXIgYSB7XFxuICBjb2xvcjogIzE4OTBmZjtcXG59XFxuLmFudC1wYWdpbmF0aW9uLWl0ZW0tYWN0aXZlIHtcXG4gIGJvcmRlci1jb2xvcjogIzE4OTBmZjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi5hbnQtcGFnaW5hdGlvbi1pdGVtLWFjdGl2ZSBhIHtcXG4gIGNvbG9yOiAjMTg5MGZmO1xcbn1cXG4uYW50LXBhZ2luYXRpb24taXRlbS1hY3RpdmU6Zm9jdXMsXFxuLmFudC1wYWdpbmF0aW9uLWl0ZW0tYWN0aXZlOmhvdmVyIHtcXG4gIGJvcmRlci1jb2xvcjogIzQwYTlmZjtcXG59XFxuLmFudC1wYWdpbmF0aW9uLWl0ZW0tYWN0aXZlOmZvY3VzIGEsXFxuLmFudC1wYWdpbmF0aW9uLWl0ZW0tYWN0aXZlOmhvdmVyIGEge1xcbiAgY29sb3I6ICM0MGE5ZmY7XFxufVxcbi5hbnQtcGFnaW5hdGlvbi1qdW1wLXByZXYsXFxuLmFudC1wYWdpbmF0aW9uLWp1bXAtbmV4dCB7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG4uYW50LXBhZ2luYXRpb24tanVtcC1wcmV2OmFmdGVyLFxcbi5hbnQtcGFnaW5hdGlvbi1qdW1wLW5leHQ6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXFwyMDIyXFxcXDIwMjJcXFxcMjAyMlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmFudC1wYWdpbmF0aW9uLWp1bXAtcHJldjpmb2N1czphZnRlcixcXG4uYW50LXBhZ2luYXRpb24tanVtcC1uZXh0OmZvY3VzOmFmdGVyLFxcbi5hbnQtcGFnaW5hdGlvbi1qdW1wLXByZXY6aG92ZXI6YWZ0ZXIsXFxuLmFudC1wYWdpbmF0aW9uLWp1bXAtbmV4dDpob3ZlcjphZnRlciB7XFxuICBjb2xvcjogIzE4OTBmZjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtc2l6ZTogOHB4IFxcXFw5O1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNjY2NjY2NjcpIHJvdGF0ZSgwZGVnKTtcXG4gICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjY2NjY2NjY3KSByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC42NjY2NjY2Nykgcm90YXRlKDBkZWcpO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XFxuICBmb250LWZhbWlseTogXFxcImFudGljb25cXFwiO1xcbn1cXG46cm9vdCAuYW50LXBhZ2luYXRpb24tanVtcC1wcmV2OmZvY3VzOmFmdGVyLFxcbjpyb290IC5hbnQtcGFnaW5hdGlvbi1qdW1wLW5leHQ6Zm9jdXM6YWZ0ZXIsXFxuOnJvb3QgLmFudC1wYWdpbmF0aW9uLWp1bXAtcHJldjpob3ZlcjphZnRlcixcXG46cm9vdCAuYW50LXBhZ2luYXRpb24tanVtcC1uZXh0OmhvdmVyOmFmdGVyIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLmFudC1wYWdpbmF0aW9uLWp1bXAtcHJldjpmb2N1czphZnRlcixcXG4uYW50LXBhZ2luYXRpb24tanVtcC1wcmV2OmhvdmVyOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYyMFxcXFxFNjIwXFxcIjtcXG59XFxuLmFudC1wYWdpbmF0aW9uLWp1bXAtbmV4dDpmb2N1czphZnRlcixcXG4uYW50LXBhZ2luYXRpb24tanVtcC1uZXh0OmhvdmVyOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYxRlxcXFxFNjFGXFxcIjtcXG59XFxuLmFudC1wYWdpbmF0aW9uLXByZXYsXFxuLmFudC1wYWdpbmF0aW9uLWp1bXAtcHJldixcXG4uYW50LXBhZ2luYXRpb24tanVtcC1uZXh0IHtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcbn1cXG4uYW50LXBhZ2luYXRpb24tcHJldixcXG4uYW50LXBhZ2luYXRpb24tbmV4dCxcXG4uYW50LXBhZ2luYXRpb24tanVtcC1wcmV2LFxcbi5hbnQtcGFnaW5hdGlvbi1qdW1wLW5leHQge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWluLXdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDMycHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3M7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLmFudC1wYWdpbmF0aW9uLXByZXYsXFxuLmFudC1wYWdpbmF0aW9uLW5leHQge1xcbiAgb3V0bGluZTogMDtcXG59XFxuLmFudC1wYWdpbmF0aW9uLXByZXYgYSxcXG4uYW50LXBhZ2luYXRpb24tbmV4dCBhIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLmFudC1wYWdpbmF0aW9uLXByZXY6aG92ZXIgYSxcXG4uYW50LXBhZ2luYXRpb24tbmV4dDpob3ZlciBhIHtcXG4gIGJvcmRlci1jb2xvcjogIzQwYTlmZjtcXG59XFxuLmFudC1wYWdpbmF0aW9uLXByZXYgLmFudC1wYWdpbmF0aW9uLWl0ZW0tbGluayxcXG4uYW50LXBhZ2luYXRpb24tbmV4dCAuYW50LXBhZ2luYXRpb24taXRlbS1saW5rIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcXG59XFxuLmFudC1wYWdpbmF0aW9uLXByZXYgLmFudC1wYWdpbmF0aW9uLWl0ZW0tbGluazphZnRlcixcXG4uYW50LXBhZ2luYXRpb24tbmV4dCAuYW50LXBhZ2luYXRpb24taXRlbS1saW5rOmFmdGVyIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJhbnRpY29uXFxcIjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi5hbnQtcGFnaW5hdGlvbi1wcmV2OmZvY3VzIC5hbnQtcGFnaW5hdGlvbi1pdGVtLWxpbmssXFxuLmFudC1wYWdpbmF0aW9uLW5leHQ6Zm9jdXMgLmFudC1wYWdpbmF0aW9uLWl0ZW0tbGluayxcXG4uYW50LXBhZ2luYXRpb24tcHJldjpob3ZlciAuYW50LXBhZ2luYXRpb24taXRlbS1saW5rLFxcbi5hbnQtcGFnaW5hdGlvbi1uZXh0OmhvdmVyIC5hbnQtcGFnaW5hdGlvbi1pdGVtLWxpbmsge1xcbiAgYm9yZGVyLWNvbG9yOiAjMTg5MGZmO1xcbiAgY29sb3I6ICMxODkwZmY7XFxufVxcbi5hbnQtcGFnaW5hdGlvbi1wcmV2IC5hbnQtcGFnaW5hdGlvbi1pdGVtLWxpbms6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXFxFNjIwXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uYW50LXBhZ2luYXRpb24tbmV4dCAuYW50LXBhZ2luYXRpb24taXRlbS1saW5rOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYxRlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmFudC1wYWdpbmF0aW9uLWRpc2FibGVkLFxcbi5hbnQtcGFnaW5hdGlvbi1kaXNhYmxlZDpob3ZlcixcXG4uYW50LXBhZ2luYXRpb24tZGlzYWJsZWQ6Zm9jdXMge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLmFudC1wYWdpbmF0aW9uLWRpc2FibGVkIGEsXFxuLmFudC1wYWdpbmF0aW9uLWRpc2FibGVkOmhvdmVyIGEsXFxuLmFudC1wYWdpbmF0aW9uLWRpc2FibGVkOmZvY3VzIGEsXFxuLmFudC1wYWdpbmF0aW9uLWRpc2FibGVkIC5hbnQtcGFnaW5hdGlvbi1pdGVtLWxpbmssXFxuLmFudC1wYWdpbmF0aW9uLWRpc2FibGVkOmhvdmVyIC5hbnQtcGFnaW5hdGlvbi1pdGVtLWxpbmssXFxuLmFudC1wYWdpbmF0aW9uLWRpc2FibGVkOmZvY3VzIC5hbnQtcGFnaW5hdGlvbi1pdGVtLWxpbmsge1xcbiAgYm9yZGVyLWNvbG9yOiAjZDlkOWQ5O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4uYW50LXBhZ2luYXRpb24tc2xhc2gge1xcbiAgbWFyZ2luOiAwIDEwcHggMCA1cHg7XFxufVxcbi5hbnQtcGFnaW5hdGlvbi1vcHRpb25zIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBtYXJnaW4tbGVmdDogMTZweDtcXG59XFxuLmFudC1wYWdpbmF0aW9uLW9wdGlvbnMtc2l6ZS1jaGFuZ2VyLmFudC1zZWxlY3Qge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxufVxcbi5hbnQtcGFnaW5hdGlvbi1vcHRpb25zLXF1aWNrLWp1bXBlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDMycHg7XFxufVxcbi5hbnQtcGFnaW5hdGlvbi1vcHRpb25zLXF1aWNrLWp1bXBlciBpbnB1dCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiA0cHggMTFweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcXG4gIG1hcmdpbjogMCA4cHg7XFxuICB3aWR0aDogNTBweDtcXG59XFxuLmFudC1wYWdpbmF0aW9uLW9wdGlvbnMtcXVpY2stanVtcGVyIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjYmZiZmJmO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuLmFudC1wYWdpbmF0aW9uLW9wdGlvbnMtcXVpY2stanVtcGVyIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBjb2xvcjogI2JmYmZiZjtcXG59XFxuLmFudC1wYWdpbmF0aW9uLW9wdGlvbnMtcXVpY2stanVtcGVyIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjYmZiZmJmO1xcbn1cXG4uYW50LXBhZ2luYXRpb24tb3B0aW9ucy1xdWljay1qdW1wZXIgaW5wdXQ6aG92ZXIge1xcbiAgYm9yZGVyLWNvbG9yOiAjNDBhOWZmO1xcbn1cXG4uYW50LXBhZ2luYXRpb24tb3B0aW9ucy1xdWljay1qdW1wZXIgaW5wdXQ6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiAjNDBhOWZmO1xcbiAgb3V0bGluZTogMDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoMjQsIDE0NCwgMjU1LCAwLjIpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSgyNCwgMTQ0LCAyNTUsIDAuMik7XFxufVxcbi5hbnQtcGFnaW5hdGlvbi1vcHRpb25zLXF1aWNrLWp1bXBlciBpbnB1dC1kaXNhYmxlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbiAgb3BhY2l0eTogMTtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG59XFxuLmFudC1wYWdpbmF0aW9uLW9wdGlvbnMtcXVpY2stanVtcGVyIGlucHV0LWRpc2FibGVkOmhvdmVyIHtcXG4gIGJvcmRlci1jb2xvcjogI2U2ZDhkODtcXG59XFxudGV4dGFyZWEuYW50LXBhZ2luYXRpb24tb3B0aW9ucy1xdWljay1qdW1wZXIgaW5wdXQge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcywgaGVpZ2h0IDBzO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcywgaGVpZ2h0IDBzO1xcbiAgbWluLWhlaWdodDogMzJweDtcXG59XFxuLmFudC1wYWdpbmF0aW9uLW9wdGlvbnMtcXVpY2stanVtcGVyIGlucHV0LWxnIHtcXG4gIHBhZGRpbmc6IDZweCAxMXB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4uYW50LXBhZ2luYXRpb24tb3B0aW9ucy1xdWljay1qdW1wZXIgaW5wdXQtc20ge1xcbiAgcGFkZGluZzogMXB4IDdweDtcXG4gIGhlaWdodDogMjRweDtcXG59XFxuLmFudC1wYWdpbmF0aW9uLXNpbXBsZSAuYW50LXBhZ2luYXRpb24tcHJldixcXG4uYW50LXBhZ2luYXRpb24tc2ltcGxlIC5hbnQtcGFnaW5hdGlvbi1uZXh0IHtcXG4gIGhlaWdodDogMjRweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuLmFudC1wYWdpbmF0aW9uLXNpbXBsZSAuYW50LXBhZ2luYXRpb24tcHJldiAuYW50LXBhZ2luYXRpb24taXRlbS1saW5rLFxcbi5hbnQtcGFnaW5hdGlvbi1zaW1wbGUgLmFudC1wYWdpbmF0aW9uLW5leHQgLmFudC1wYWdpbmF0aW9uLWl0ZW0tbGluayB7XFxuICBib3JkZXI6IDA7XFxuICBoZWlnaHQ6IDI0cHg7XFxufVxcbi5hbnQtcGFnaW5hdGlvbi1zaW1wbGUgLmFudC1wYWdpbmF0aW9uLXByZXYgLmFudC1wYWdpbmF0aW9uLWl0ZW0tbGluazphZnRlcixcXG4uYW50LXBhZ2luYXRpb24tc2ltcGxlIC5hbnQtcGFnaW5hdGlvbi1uZXh0IC5hbnQtcGFnaW5hdGlvbi1pdGVtLWxpbms6YWZ0ZXIge1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxufVxcbi5hbnQtcGFnaW5hdGlvbi1zaW1wbGUgLmFudC1wYWdpbmF0aW9uLXNpbXBsZS1wYWdlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gIGhlaWdodDogMjRweDtcXG59XFxuLmFudC1wYWdpbmF0aW9uLXNpbXBsZSAuYW50LXBhZ2luYXRpb24tc2ltcGxlLXBhZ2VyIGlucHV0IHtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogMCA2cHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzO1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3M7XFxufVxcbi5hbnQtcGFnaW5hdGlvbi1zaW1wbGUgLmFudC1wYWdpbmF0aW9uLXNpbXBsZS1wYWdlciBpbnB1dDpob3ZlciB7XFxuICBib3JkZXItY29sb3I6ICMxODkwZmY7XFxufVxcbi5hbnQtcGFnaW5hdGlvbi5taW5pIC5hbnQtcGFnaW5hdGlvbi10b3RhbC10ZXh0LFxcbi5hbnQtcGFnaW5hdGlvbi5taW5pIC5hbnQtcGFnaW5hdGlvbi1zaW1wbGUtcGFnZXIge1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxufVxcbi5hbnQtcGFnaW5hdGlvbi5taW5pIC5hbnQtcGFnaW5hdGlvbi1pdGVtIHtcXG4gIG1hcmdpbjogMDtcXG4gIG1pbi13aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xcbn1cXG4uYW50LXBhZ2luYXRpb24ubWluaSAuYW50LXBhZ2luYXRpb24taXRlbTpub3QoLmFudC1wYWdpbmF0aW9uLWl0ZW0tYWN0aXZlKSB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5hbnQtcGFnaW5hdGlvbi5taW5pIC5hbnQtcGFnaW5hdGlvbi1wcmV2LFxcbi5hbnQtcGFnaW5hdGlvbi5taW5pIC5hbnQtcGFnaW5hdGlvbi1uZXh0IHtcXG4gIG1hcmdpbjogMDtcXG4gIG1pbi13aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbn1cXG4uYW50LXBhZ2luYXRpb24ubWluaSAuYW50LXBhZ2luYXRpb24tcHJldiAuYW50LXBhZ2luYXRpb24taXRlbS1saW5rLFxcbi5hbnQtcGFnaW5hdGlvbi5taW5pIC5hbnQtcGFnaW5hdGlvbi1uZXh0IC5hbnQtcGFnaW5hdGlvbi1pdGVtLWxpbmsge1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG4uYW50LXBhZ2luYXRpb24ubWluaSAuYW50LXBhZ2luYXRpb24tcHJldiAuYW50LXBhZ2luYXRpb24taXRlbS1saW5rOmFmdGVyLFxcbi5hbnQtcGFnaW5hdGlvbi5taW5pIC5hbnQtcGFnaW5hdGlvbi1uZXh0IC5hbnQtcGFnaW5hdGlvbi1pdGVtLWxpbms6YWZ0ZXIge1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxufVxcbi5hbnQtcGFnaW5hdGlvbi5taW5pIC5hbnQtcGFnaW5hdGlvbi1qdW1wLXByZXYsXFxuLmFudC1wYWdpbmF0aW9uLm1pbmkgLmFudC1wYWdpbmF0aW9uLWp1bXAtbmV4dCB7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuLmFudC1wYWdpbmF0aW9uLm1pbmkgLmFudC1wYWdpbmF0aW9uLW9wdGlvbnMge1xcbiAgbWFyZ2luLWxlZnQ6IDJweDtcXG59XFxuLmFudC1wYWdpbmF0aW9uLm1pbmkgLmFudC1wYWdpbmF0aW9uLW9wdGlvbnMtcXVpY2stanVtcGVyIHtcXG4gIGhlaWdodDogMjRweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbn1cXG4uYW50LXBhZ2luYXRpb24ubWluaSAuYW50LXBhZ2luYXRpb24tb3B0aW9ucy1xdWljay1qdW1wZXIgaW5wdXQge1xcbiAgcGFkZGluZzogMXB4IDdweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIHdpZHRoOiA0NHB4O1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XFxuICAuYW50LXBhZ2luYXRpb24taXRlbS1hZnRlci1qdW1wLXByZXYsXFxuICAuYW50LXBhZ2luYXRpb24taXRlbS1iZWZvcmUtanVtcC1uZXh0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xcbiAgLmFudC1wYWdpbmF0aW9uLW9wdGlvbnMge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogc3R5bGVsaW50LWRpc2FibGUgYXQtcnVsZS1lbXB0eS1saW5lLWJlZm9yZSxhdC1ydWxlLW5hbWUtc3BhY2UtYWZ0ZXIsYXQtcnVsZS1uby11bmtub3duICovXFxuLyogc3R5bGVsaW50LWRpc2FibGUgbm8tZHVwbGljYXRlLXNlbGVjdG9ycyAqL1xcbi8qIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLWJhbmctc3BhY2UtYmVmb3JlLG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnMgKi9cXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1iYW5nLXNwYWNlLWJlZm9yZSxuby1kdXBsaWNhdGUtc2VsZWN0b3JzICovXFxuLmFudC1yYWRpby1ncm91cCB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbm9zcGFjZWQgTnVtYmVyXFxcIiwgXFxcIkNoaW5lc2UgUXVvdGVcXFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIlBpbmdGYW5nIFNDXFxcIiwgXFxcIkhpcmFnaW5vIFNhbnMgR0JcXFwiLCBcXFwiTWljcm9zb2Z0IFlhSGVpXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbGluZS1oZWlnaHQ6IHVuc2V0O1xcbn1cXG4uYW50LXJhZGlvLXdyYXBwZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb25vc3BhY2VkIE51bWJlclxcXCIsIFxcXCJDaGluZXNlIFF1b3RlXFxcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJQaW5nRmFuZyBTQ1xcXCIsIFxcXCJIaXJhZ2lubyBTYW5zIEdCXFxcIiwgXFxcIk1pY3Jvc29mdCBZYUhlaVxcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmFudC1yYWRpbyB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbm9zcGFjZWQgTnVtYmVyXFxcIiwgXFxcIkNoaW5lc2UgUXVvdGVcXFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIlBpbmdGYW5nIFNDXFxcIiwgXFxcIkhpcmFnaW5vIFNhbnMgR0JcXFwiLCBcXFwiTWljcm9zb2Z0IFlhSGVpXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmFudC1yYWRpby13cmFwcGVyOmhvdmVyIC5hbnQtcmFkaW8gLmFudC1yYWRpby1pbm5lcixcXG4uYW50LXJhZGlvOmhvdmVyIC5hbnQtcmFkaW8taW5uZXIsXFxuLmFudC1yYWRpby1mb2N1c2VkIC5hbnQtcmFkaW8taW5uZXIge1xcbiAgYm9yZGVyLWNvbG9yOiAjMTg5MGZmO1xcbn1cXG4uYW50LXJhZGlvLWNoZWNrZWQ6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzE4OTBmZjtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGFudFJhZGlvRWZmZWN0IDAuMzZzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgICBhbmltYXRpb246IGFudFJhZGlvRWZmZWN0IDAuMzZzIGVhc2UtaW4tb3V0O1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4uYW50LXJhZGlvOmhvdmVyOmFmdGVyLFxcbi5hbnQtcmFkaW8td3JhcHBlcjpob3ZlciAuYW50LXJhZGlvOmFmdGVyIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcbi5hbnQtcmFkaW8taW5uZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gIGJvcmRlci1jb2xvcjogI2Q5ZDlkOTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcbi5hbnQtcmFkaW8taW5uZXI6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDhweDtcXG4gIGhlaWdodDogOHB4O1xcbiAgbGVmdDogM3B4O1xcbiAgdG9wOiAzcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIGJvcmRlci10b3A6IDA7XFxuICBib3JkZXItbGVmdDogMDtcXG4gIGNvbnRlbnQ6ICcgJztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODkwZmY7XFxuICBvcGFjaXR5OiAwO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC43OCwgMC4xNCwgMC4xNSwgMC44Nik7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC43OCwgMC4xNCwgMC4xNSwgMC44Nik7XFxufVxcbi5hbnQtcmFkaW8taW5wdXQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvcGFjaXR5OiAwO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcbi5hbnQtcmFkaW8tY2hlY2tlZCAuYW50LXJhZGlvLWlubmVyIHtcXG4gIGJvcmRlci1jb2xvcjogIzE4OTBmZjtcXG59XFxuLmFudC1yYWRpby1jaGVja2VkIC5hbnQtcmFkaW8taW5uZXI6YWZ0ZXIge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuODc1KTtcXG4gICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjg3NSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44NzUpO1xcbiAgb3BhY2l0eTogMTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpO1xcbn1cXG4uYW50LXJhZGlvLWRpc2FibGVkIC5hbnQtcmFkaW8taW5uZXIge1xcbiAgYm9yZGVyLWNvbG9yOiAjZDlkOWQ5ICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbn1cXG4uYW50LXJhZGlvLWRpc2FibGVkIC5hbnQtcmFkaW8taW5uZXI6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG59XFxuLmFudC1yYWRpby1kaXNhYmxlZCAuYW50LXJhZGlvLWlucHV0IHtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi5hbnQtcmFkaW8tZGlzYWJsZWQgKyBzcGFuIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuc3Bhbi5hbnQtcmFkaW8gKyAqIHtcXG4gIHBhZGRpbmctbGVmdDogOHB4O1xcbiAgcGFkZGluZy1yaWdodDogOHB4O1xcbn1cXG4uYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMzJweDtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcXG4gIGJvcmRlci1sZWZ0OiAwO1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMS4wMnB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmFudC1yYWRpby1idXR0b24td3JhcHBlciBhIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbn1cXG4uYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyID4gLmFudC1yYWRpby1idXR0b24ge1xcbiAgbWFyZ2luLWxlZnQ6IDA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG4uYW50LXJhZGlvLWdyb3VwLWxhcmdlIC5hbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXIge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5hbnQtcmFkaW8tZ3JvdXAtc21hbGwgLmFudC1yYWRpby1idXR0b24td3JhcHBlciB7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBsaW5lLWhlaWdodDogMjJweDtcXG4gIHBhZGRpbmc6IDAgN3B4O1xcbn1cXG4uYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyOm5vdCg6Zmlyc3QtY2hpbGQpOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IC0xcHg7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZDlkOTtcXG59XFxuLmFudC1yYWRpby1idXR0b24td3JhcHBlcjpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2Q5ZDlkOTtcXG59XFxuLmFudC1yYWRpby1idXR0b24td3JhcHBlcjpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xcbn1cXG4uYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyOmZpcnN0LWNoaWxkOmxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4uYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyOmhvdmVyLFxcbi5hbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXItZm9jdXNlZCB7XFxuICBjb2xvcjogIzE4OTBmZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmFudC1yYWRpby1idXR0b24td3JhcHBlciAuYW50LXJhZGlvLWlubmVyLFxcbi5hbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG4uYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgb3BhY2l0eTogMDtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG4uYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyLWNoZWNrZWQge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlci1jb2xvcjogIzE4OTBmZjtcXG4gIGNvbG9yOiAjMTg5MGZmO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDAgMCAwICMxODkwZmY7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IC0xcHggMCAwIDAgIzE4OTBmZjtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5hbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXItY2hlY2tlZDo6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODkwZmYgIWltcG9ydGFudDtcXG4gIG9wYWNpdHk6IDAuMTtcXG59XFxuLmFudC1yYWRpby1idXR0b24td3JhcHBlci1jaGVja2VkOmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci1jb2xvcjogIzE4OTBmZjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi5hbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXItY2hlY2tlZDpob3ZlciB7XFxuICBib3JkZXItY29sb3I6ICM0MGE5ZmY7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IC0xcHggMCAwIDAgIzQwYTlmZjtcXG4gICAgICAgICAgYm94LXNoYWRvdzogLTFweCAwIDAgMCAjNDBhOWZmO1xcbiAgY29sb3I6ICM0MGE5ZmY7XFxufVxcbi5hbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXItY2hlY2tlZDphY3RpdmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjMDk2ZGQ5O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMXB4IDAgMCAwICMwOTZkZDk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IC0xcHggMCAwIDAgIzA5NmRkOTtcXG4gIGNvbG9yOiAjMDk2ZGQ5O1xcbn1cXG4uYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyLWRpc2FibGVkIHtcXG4gIGJvcmRlci1jb2xvcjogI2Q5ZDlkOTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxufVxcbi5hbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXItZGlzYWJsZWQ6Zmlyc3QtY2hpbGQsXFxuLmFudC1yYWRpby1idXR0b24td3JhcHBlci1kaXNhYmxlZDpob3ZlciB7XFxuICBib3JkZXItY29sb3I6ICNkOWQ5ZDk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxufVxcbi5hbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXItZGlzYWJsZWQ6Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNkOWQ5ZDk7XFxufVxcbi5hbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXItZGlzYWJsZWQuYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyLWNoZWNrZWQge1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xcbiAgYm9yZGVyLWNvbG9yOiAjZDlkOWQ5O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYW50UmFkaW9FZmZlY3Qge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjYpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS42KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBhbnRSYWRpb0VmZmVjdCB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuNik7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjYpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogc3R5bGVsaW50LWRpc2FibGUgYXQtcnVsZS1lbXB0eS1saW5lLWJlZm9yZSxhdC1ydWxlLW5hbWUtc3BhY2UtYWZ0ZXIsYXQtcnVsZS1uby11bmtub3duICovXFxuLyogc3R5bGVsaW50LWRpc2FibGUgbm8tZHVwbGljYXRlLXNlbGVjdG9ycyAqL1xcbi8qIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLWJhbmctc3BhY2UtYmVmb3JlLG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnMgKi9cXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1iYW5nLXNwYWNlLWJlZm9yZSxuby1kdXBsaWNhdGUtc2VsZWN0b3JzICovXFxuLmFudC1zcGluIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9ub3NwYWNlZCBOdW1iZXJcXFwiLCBcXFwiQ2hpbmVzZSBRdW90ZVxcXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiUGluZ0ZhbmcgU0NcXFwiLCBcXFwiSGlyYWdpbm8gU2FucyBHQlxcXCIsIFxcXCJNaWNyb3NvZnQgWWFIZWlcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBjb2xvcjogIzE4OTBmZjtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjc4LCAwLjE0LCAwLjE1LCAwLjg2KTtcXG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpLCAtd2Via2l0LXRyYW5zZm9ybSAwLjNzIGN1YmljLWJlemllcigwLjc4LCAwLjE0LCAwLjE1LCAwLjg2KTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5hbnQtc3Bpbi1zcGlubmluZyB7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9zaXRpb246IHN0YXRpYztcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmFudC1zcGluLW5lc3RlZC1sb2FkaW5nIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmFudC1zcGluLW5lc3RlZC1sb2FkaW5nID4gZGl2ID4gLmFudC1zcGluIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDMyMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiA0O1xcbn1cXG4uYW50LXNwaW4tbmVzdGVkLWxvYWRpbmcgPiBkaXYgPiAuYW50LXNwaW4gLmFudC1zcGluLWRvdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbjogLTEwcHg7XFxufVxcbi5hbnQtc3Bpbi1uZXN0ZWQtbG9hZGluZyA+IGRpdiA+IC5hbnQtc3BpbiAuYW50LXNwaW4tdGV4dCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG4gIHRleHQtc2hhZG93OiAwIDFweCAycHggI2ZmZjtcXG59XFxuLmFudC1zcGluLW5lc3RlZC1sb2FkaW5nID4gZGl2ID4gLmFudC1zcGluLmFudC1zcGluLXNob3ctdGV4dCAuYW50LXNwaW4tZG90IHtcXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xcbn1cXG4uYW50LXNwaW4tbmVzdGVkLWxvYWRpbmcgPiBkaXYgPiAuYW50LXNwaW4tc20gLmFudC1zcGluLWRvdCB7XFxuICBtYXJnaW46IC03cHg7XFxufVxcbi5hbnQtc3Bpbi1uZXN0ZWQtbG9hZGluZyA+IGRpdiA+IC5hbnQtc3Bpbi1zbSAuYW50LXNwaW4tdGV4dCB7XFxuICBwYWRkaW5nLXRvcDogMnB4O1xcbn1cXG4uYW50LXNwaW4tbmVzdGVkLWxvYWRpbmcgPiBkaXYgPiAuYW50LXNwaW4tc20uYW50LXNwaW4tc2hvdy10ZXh0IC5hbnQtc3Bpbi1kb3Qge1xcbiAgbWFyZ2luLXRvcDogLTE3cHg7XFxufVxcbi5hbnQtc3Bpbi1uZXN0ZWQtbG9hZGluZyA+IGRpdiA+IC5hbnQtc3Bpbi1sZyAuYW50LXNwaW4tZG90IHtcXG4gIG1hcmdpbjogLTE2cHg7XFxufVxcbi5hbnQtc3Bpbi1uZXN0ZWQtbG9hZGluZyA+IGRpdiA+IC5hbnQtc3Bpbi1sZyAuYW50LXNwaW4tdGV4dCB7XFxuICBwYWRkaW5nLXRvcDogMTFweDtcXG59XFxuLmFudC1zcGluLW5lc3RlZC1sb2FkaW5nID4gZGl2ID4gLmFudC1zcGluLWxnLmFudC1zcGluLXNob3ctdGV4dCAuYW50LXNwaW4tZG90IHtcXG4gIG1hcmdpbi10b3A6IC0yNnB4O1xcbn1cXG4uYW50LXNwaW4tY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHpvb206IDE7XFxufVxcbi5hbnQtc3Bpbi1jb250YWluZXI6YmVmb3JlLFxcbi5hbnQtc3Bpbi1jb250YWluZXI6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgZGlzcGxheTogdGFibGU7XFxufVxcbi5hbnQtc3Bpbi1jb250YWluZXI6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBmb250LXNpemU6IDA7XFxuICBoZWlnaHQ6IDA7XFxufVxcbi5hbnQtc3Bpbi1ibHVyIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwLjc7XFxuICAtd2Via2l0LWZpbHRlcjogYmx1cigwLjVweCk7XFxuICBmaWx0ZXI6IGJsdXIoMC41cHgpO1xcbiAgLyogYXV0b3ByZWZpeGVyOiBvZmYgKi9cXG4gIGZpbHRlcjogcHJvZ2lkXFxcXDpEWEltYWdlVHJhbnNmb3JtXFxcXC5NaWNyb3NvZnRcXFxcLkJsdXIoUGl4ZWxSYWRpdXNcXFxcPTEsIE1ha2VTaGFkb3dcXFxcPWZhbHNlKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbn1cXG4uYW50LXNwaW4tYmx1cjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBvcGFjaXR5OiAwLjM7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3M7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xcbiAgei1pbmRleDogMTA7XFxufVxcbi5hbnQtc3Bpbi10aXAge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxufVxcbi5hbnQtc3Bpbi1kb3Qge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcbi5hbnQtc3Bpbi1kb3QgaSB7XFxuICB3aWR0aDogOXB4O1xcbiAgaGVpZ2h0OiA5cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4OTBmZjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcXG4gICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgb3BhY2l0eTogMC4zO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGFudFNwaW5Nb3ZlIDFzIGluZmluaXRlIGxpbmVhciBhbHRlcm5hdGU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogYW50U3Bpbk1vdmUgMXMgaW5maW5pdGUgbGluZWFyIGFsdGVybmF0ZTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcXG59XFxuLmFudC1zcGluLWRvdCBpOm50aC1jaGlsZCgxKSB7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbn1cXG4uYW50LXNwaW4tZG90IGk6bnRoLWNoaWxkKDIpIHtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNHM7XFxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC40cztcXG59XFxuLmFudC1zcGluLWRvdCBpOm50aC1jaGlsZCgzKSB7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XFxufVxcbi5hbnQtc3Bpbi1kb3QgaTpudGgtY2hpbGQoNCkge1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxLjJzO1xcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuMnM7XFxufVxcbi5hbnQtc3Bpbi1kb3Qtc3BpbiB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogYW50Um90YXRlIDEuMnMgaW5maW5pdGUgbGluZWFyO1xcbiAgICAgICAgICBhbmltYXRpb246IGFudFJvdGF0ZSAxLjJzIGluZmluaXRlIGxpbmVhcjtcXG59XFxuLmFudC1zcGluLXNtIC5hbnQtc3Bpbi1kb3Qge1xcbiAgd2lkdGg6IDE0cHg7XFxuICBoZWlnaHQ6IDE0cHg7XFxufVxcbi5hbnQtc3Bpbi1zbSAuYW50LXNwaW4tZG90IGkge1xcbiAgd2lkdGg6IDZweDtcXG4gIGhlaWdodDogNnB4O1xcbn1cXG4uYW50LXNwaW4tbGcgLmFudC1zcGluLWRvdCB7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMzJweDtcXG59XFxuLmFudC1zcGluLWxnIC5hbnQtc3Bpbi1kb3QgaSB7XFxuICB3aWR0aDogMTRweDtcXG4gIGhlaWdodDogMTRweDtcXG59XFxuLmFudC1zcGluLmFudC1zcGluLXNob3ctdGV4dCAuYW50LXNwaW4tdGV4dCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSwgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcXG4gIC8qIElFMTArICovXFxuICAuYW50LXNwaW4tYmx1ciB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGFudFNwaW5Nb3ZlIHtcXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBhbnRTcGluTW92ZSB7XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBhbnRSb3RhdGUge1xcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQwNWRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDA1ZGVnKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBhbnRSb3RhdGUge1xcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQwNWRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDA1ZGVnKTtcXG4gIH1cXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIHN0eWxlbGludC1kaXNhYmxlIGF0LXJ1bGUtZW1wdHktbGluZS1iZWZvcmUsYXQtcnVsZS1uYW1lLXNwYWNlLWFmdGVyLGF0LXJ1bGUtbm8tdW5rbm93biAqL1xcbi8qIHN0eWxlbGludC1kaXNhYmxlIG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnMgKi9cXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1iYW5nLXNwYWNlLWJlZm9yZSxuby1kdXBsaWNhdGUtc2VsZWN0b3JzICovXFxuLyogc3R5bGVsaW50LWRpc2FibGUgZGVjbGFyYXRpb24tYmFuZy1zcGFjZS1iZWZvcmUsbm8tZHVwbGljYXRlLXNlbGVjdG9ycyAqL1xcbi5hbnQtdGFibGUtd3JhcHBlciB7XFxuICB6b29tOiAxO1xcbn1cXG4uYW50LXRhYmxlLXdyYXBwZXI6YmVmb3JlLFxcbi5hbnQtdGFibGUtd3JhcHBlcjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG59XFxuLmFudC10YWJsZS13cmFwcGVyOmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgZm9udC1zaXplOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG4uYW50LXRhYmxlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9ub3NwYWNlZCBOdW1iZXJcXFwiLCBcXFwiQ2hpbmVzZSBRdW90ZVxcXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiUGluZ0ZhbmcgU0NcXFwiLCBcXFwiSGlyYWdpbm8gU2FucyBHQlxcXCIsIFxcXCJNaWNyb3NvZnQgWWFIZWlcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjbGVhcjogYm90aDtcXG59XFxuLmFudC10YWJsZS1ib2R5IHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAuM3M7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcztcXG59XFxuLmFudC10YWJsZSB0YWJsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcXG59XFxuLmFudC10YWJsZS10aGVhZCA+IHRyID4gdGgge1xcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3MgZWFzZTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzIGVhc2U7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGU4ZTg7XFxufVxcbi5hbnQtdGFibGUtdGhlYWQgPiB0ciA+IHRoW2NvbHNwYW5dIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDA7XFxufVxcbi5hbnQtdGFibGUtdGhlYWQgPiB0ciA+IHRoIC5hbnRpY29uLWZpbHRlcixcXG4uYW50LXRhYmxlLXRoZWFkID4gdHIgPiB0aCAuYW50LXRhYmxlLWZpbHRlci1pY29uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcztcXG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XFxuICB3aWR0aDogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XFxufVxcbi5hbnQtdGFibGUtdGhlYWQgPiB0ciA+IHRoIC5hbnRpY29uLWZpbHRlcjpob3ZlcixcXG4uYW50LXRhYmxlLXRoZWFkID4gdHIgPiB0aCAuYW50LXRhYmxlLWZpbHRlci1pY29uOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbn1cXG4uYW50LXRhYmxlLXRoZWFkID4gdHIgPiB0aCAuYW50LXRhYmxlLWNvbHVtbi1zb3J0ZXIgKyAuYW50aWNvbi1maWx0ZXIge1xcbiAgbWFyZ2luLWxlZnQ6IDRweDtcXG59XFxuLmFudC10YWJsZS10aGVhZCA+IHRyID4gdGggLmFudC10YWJsZS1maWx0ZXItc2VsZWN0ZWQuYW50aWNvbi1maWx0ZXIge1xcbiAgY29sb3I6ICMxODkwZmY7XFxufVxcbi5hbnQtdGFibGUtdGhlYWQgPiB0ciA+IHRoLmFudC10YWJsZS1jb2x1bW4taGFzLWZpbHRlcnMge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmFudC10YWJsZS10aGVhZCA+IHRyOmZpcnN0LWNoaWxkID4gdGg6Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xcbn1cXG4uYW50LXRhYmxlLXRoZWFkID4gdHI6Zmlyc3QtY2hpbGQgPiB0aDpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XFxufVxcbi5hbnQtdGFibGUtdGJvZHkgPiB0ciA+IHRkIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZThlOGU4O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcXG59XFxuLmFudC10YWJsZS10aGVhZCA+IHRyLFxcbi5hbnQtdGFibGUtdGJvZHkgPiB0ciB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3M7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xcbn1cXG4uYW50LXRhYmxlLXRoZWFkID4gdHIuYW50LXRhYmxlLXJvdy1ob3ZlciA+IHRkLFxcbi5hbnQtdGFibGUtdGJvZHkgPiB0ci5hbnQtdGFibGUtcm93LWhvdmVyID4gdGQsXFxuLmFudC10YWJsZS10aGVhZCA+IHRyOmhvdmVyID4gdGQsXFxuLmFudC10YWJsZS10Ym9keSA+IHRyOmhvdmVyID4gdGQge1xcbiAgYmFja2dyb3VuZDogI2U2ZjdmZjtcXG59XFxuLmFudC10YWJsZS10aGVhZCA+IHRyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcbi5hbnQtdGFibGUtZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDE2cHggMTZweDtcXG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlOGU4O1xcbn1cXG4uYW50LXRhYmxlLWZvb3RlcjpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxuICBoZWlnaHQ6IDFweDtcXG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxufVxcbi5hbnQtdGFibGUuYW50LXRhYmxlLWJvcmRlcmVkIC5hbnQtdGFibGUtZm9vdGVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZTg7XFxufVxcbi5hbnQtdGFibGUtdGl0bGUge1xcbiAgcGFkZGluZzogMTZweCAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAxcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcXG59XFxuLmFudC10YWJsZS5hbnQtdGFibGUtYm9yZGVyZWQgLmFudC10YWJsZS10aXRsZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGU4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xcbiAgcGFkZGluZy1yaWdodDogMTZweDtcXG59XFxuLmFudC10YWJsZS10aXRsZSArIC5hbnQtdGFibGUtY29udGVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5hbnQtdGFibGUtYm9yZGVyZWQgLmFudC10YWJsZS10aXRsZSArIC5hbnQtdGFibGUtY29udGVudCxcXG4uYW50LXRhYmxlLWJvcmRlcmVkIC5hbnQtdGFibGUtdGl0bGUgKyAuYW50LXRhYmxlLWNvbnRlbnQgdGFibGUsXFxuLmFudC10YWJsZS1ib3JkZXJlZCAuYW50LXRhYmxlLXRpdGxlICsgLmFudC10YWJsZS1jb250ZW50IC5hbnQtdGFibGUtdGhlYWQgPiB0cjpmaXJzdC1jaGlsZCA+IHRoIHtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxufVxcbi5hbnQtdGFibGUtd2l0aG91dC1jb2x1bW4taGVhZGVyIC5hbnQtdGFibGUtdGl0bGUgKyAuYW50LXRhYmxlLWNvbnRlbnQsXFxuLmFudC10YWJsZS13aXRob3V0LWNvbHVtbi1oZWFkZXIgdGFibGUge1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuLmFudC10YWJsZS10Ym9keSA+IHRyLmFudC10YWJsZS1yb3ctc2VsZWN0ZWQgdGQge1xcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcXG59XFxuLmFudC10YWJsZS10aGVhZCA+IHRyID4gdGguYW50LXRhYmxlLWNvbHVtbi1zb3J0IHtcXG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XFxufVxcbi5hbnQtdGFibGUtdGhlYWQgPiB0ciA+IHRoLFxcbi5hbnQtdGFibGUtdGJvZHkgPiB0ciA+IHRkIHtcXG4gIHBhZGRpbmc6IDE2cHggMTZweDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG59XFxuLmFudC10YWJsZS10aGVhZCA+IHRyID4gdGguYW50LXRhYmxlLXNlbGVjdGlvbi1jb2x1bW4tY3VzdG9tIHtcXG4gIHBhZGRpbmctbGVmdDogMTZweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7XFxufVxcbi5hbnQtdGFibGUtdGhlYWQgPiB0ciA+IHRoLmFudC10YWJsZS1zZWxlY3Rpb24tY29sdW1uLFxcbi5hbnQtdGFibGUtdGJvZHkgPiB0ciA+IHRkLmFudC10YWJsZS1zZWxlY3Rpb24tY29sdW1uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogNjJweDtcXG4gIHdpZHRoOiA2MnB4O1xcbn1cXG4uYW50LXRhYmxlLXRoZWFkID4gdHIgPiB0aC5hbnQtdGFibGUtc2VsZWN0aW9uLWNvbHVtbiAuYW50LXJhZGlvLXdyYXBwZXIsXFxuLmFudC10YWJsZS10Ym9keSA+IHRyID4gdGQuYW50LXRhYmxlLXNlbGVjdGlvbi1jb2x1bW4gLmFudC1yYWRpby13cmFwcGVyIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuLmFudC10YWJsZS1leHBhbmQtaWNvbi10aCxcXG4uYW50LXRhYmxlLXJvdy1leHBhbmQtaWNvbi1jZWxsIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbn1cXG4uYW50LXRhYmxlLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmFudC10YWJsZS1oZWFkZXIgdGFibGUge1xcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XFxufVxcbi5hbnQtdGFibGUtbG9hZGluZyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5hbnQtdGFibGUtbG9hZGluZyAuYW50LXRhYmxlLWJvZHkge1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuLmFudC10YWJsZS1sb2FkaW5nIC5hbnQtdGFibGUtc3Bpbi1ob2xkZXIge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtMzBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLmFudC10YWJsZS1sb2FkaW5nIC5hbnQtdGFibGUtd2l0aC1wYWdpbmF0aW9uIHtcXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xcbn1cXG4uYW50LXRhYmxlLWxvYWRpbmcgLmFudC10YWJsZS13aXRob3V0LXBhZ2luYXRpb24ge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuLmFudC10YWJsZS1jb2x1bW4tc29ydGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTRweDtcXG4gIGhlaWdodDogMTRweDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxufVxcbi5hbnQtdGFibGUtY29sdW1uLXNvcnRlci11cCxcXG4uYW50LXRhYmxlLWNvbHVtbi1zb3J0ZXItZG93biB7XFxuICBsaW5lLWhlaWdodDogNnB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTRweDtcXG4gIGhlaWdodDogNnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYW50LXRhYmxlLWNvbHVtbi1zb3J0ZXItdXA6aG92ZXIgLmFudGljb24sXFxuLmFudC10YWJsZS1jb2x1bW4tc29ydGVyLWRvd246aG92ZXIgLmFudGljb24ge1xcbiAgY29sb3I6ICM2OWMwZmY7XFxufVxcbi5hbnQtdGFibGUtY29sdW1uLXNvcnRlci11cC5vbiAuYW50aWNvbi1jYXJldC11cCxcXG4uYW50LXRhYmxlLWNvbHVtbi1zb3J0ZXItZG93bi5vbiAuYW50aWNvbi1jYXJldC11cCxcXG4uYW50LXRhYmxlLWNvbHVtbi1zb3J0ZXItdXAub24gLmFudGljb24tY2FyZXQtZG93bixcXG4uYW50LXRhYmxlLWNvbHVtbi1zb3J0ZXItZG93bi5vbiAuYW50aWNvbi1jYXJldC1kb3duIHtcXG4gIGNvbG9yOiAjMTg5MGZmO1xcbn1cXG4uYW50LXRhYmxlLWNvbHVtbi1zb3J0ZXItdXA6YWZ0ZXIsXFxuLmFudC10YWJsZS1jb2x1bW4tc29ydGVyLWRvd246YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogJyc7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMTRweDtcXG4gIGxlZnQ6IDA7XFxufVxcbi5hbnQtdGFibGUtY29sdW1uLXNvcnRlci11cDphZnRlciB7XFxuICBib3R0b206IDA7XFxufVxcbi5hbnQtdGFibGUtY29sdW1uLXNvcnRlci1kb3duOmFmdGVyIHtcXG4gIHRvcDogMDtcXG59XFxuLmFudC10YWJsZS1jb2x1bW4tc29ydGVyIC5hbnRpY29uLWNhcmV0LXVwLFxcbi5hbnQtdGFibGUtY29sdW1uLXNvcnRlciAuYW50aWNvbi1jYXJldC1kb3duIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtc2l6ZTogOHB4IFxcXFw5O1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNjY2NjY2NjcpIHJvdGF0ZSgwZGVnKTtcXG4gICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjY2NjY2NjY3KSByb3RhdGUoMGRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC42NjY2NjY2Nykgcm90YXRlKDBkZWcpO1xcbiAgbGluZS1oZWlnaHQ6IDRweDtcXG4gIGhlaWdodDogNHB4O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuOnJvb3QgLmFudC10YWJsZS1jb2x1bW4tc29ydGVyIC5hbnRpY29uLWNhcmV0LXVwLFxcbjpyb290IC5hbnQtdGFibGUtY29sdW1uLXNvcnRlciAuYW50aWNvbi1jYXJldC1kb3duIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLmFudC10YWJsZS1jb2x1bW4tc29ydGVyLWRvd24ge1xcbiAgbWFyZ2luLXRvcDogMS41cHg7XFxufVxcbi5hbnQtdGFibGUtY29sdW1uLXNvcnRlciAuYW50aWNvbi1jYXJldC1kb3duIHtcXG4gIHRvcDogLTEuNXB4O1xcbn1cXG4uYW50LXRhYmxlLWJvcmRlcmVkIC5hbnQtdGFibGUtaGVhZGVyID4gdGFibGUsXFxuLmFudC10YWJsZS1ib3JkZXJlZCAuYW50LXRhYmxlLWJvZHkgPiB0YWJsZSxcXG4uYW50LXRhYmxlLWJvcmRlcmVkIC5hbnQtdGFibGUtZml4ZWQtbGVmdCB0YWJsZSxcXG4uYW50LXRhYmxlLWJvcmRlcmVkIC5hbnQtdGFibGUtZml4ZWQtcmlnaHQgdGFibGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThlODtcXG4gIGJvcmRlci1yaWdodDogMDtcXG4gIGJvcmRlci1ib3R0b206IDA7XFxufVxcbi5hbnQtdGFibGUtYm9yZGVyZWQuYW50LXRhYmxlLWVtcHR5IC5hbnQtdGFibGUtcGxhY2Vob2xkZXIge1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZThlOGU4O1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2U4ZThlODtcXG59XFxuLmFudC10YWJsZS1ib3JkZXJlZC5hbnQtdGFibGUtZml4ZWQtaGVhZGVyIC5hbnQtdGFibGUtaGVhZGVyID4gdGFibGUge1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG59XFxuLmFudC10YWJsZS1ib3JkZXJlZC5hbnQtdGFibGUtZml4ZWQtaGVhZGVyIC5hbnQtdGFibGUtYm9keSA+IHRhYmxlIHtcXG4gIGJvcmRlci10b3A6IDA7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XFxufVxcbi5hbnQtdGFibGUtYm9yZGVyZWQuYW50LXRhYmxlLWZpeGVkLWhlYWRlciAuYW50LXRhYmxlLWJvZHktaW5uZXIgPiB0YWJsZSB7XFxuICBib3JkZXItdG9wOiAwO1xcbn1cXG4uYW50LXRhYmxlLWJvcmRlcmVkLmFudC10YWJsZS1maXhlZC1oZWFkZXIgLmFudC10YWJsZS1wbGFjZWhvbGRlciB7XFxuICBib3JkZXI6IDA7XFxufVxcbi5hbnQtdGFibGUtYm9yZGVyZWQgLmFudC10YWJsZS10aGVhZCA+IHRyID4gdGgge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGU4ZTg7XFxufVxcbi5hbnQtdGFibGUtYm9yZGVyZWQgLmFudC10YWJsZS10aGVhZCA+IHRyID4gdGgsXFxuLmFudC10YWJsZS1ib3JkZXJlZCAuYW50LXRhYmxlLXRib2R5ID4gdHIgPiB0ZCB7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZThlOGU4O1xcbn1cXG4uYW50LXRhYmxlLXBsYWNlaG9sZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDE2cHggMTZweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZThlODtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgei1pbmRleDogMTtcXG59XFxuLmFudC10YWJsZS1wbGFjZWhvbGRlciAuYW50aWNvbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDRweDtcXG59XFxuLmFudC10YWJsZS1wYWdpbmF0aW9uLmFudC1wYWdpbmF0aW9uIHtcXG4gIG1hcmdpbjogMTZweCAwO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG4uYW50LXRhYmxlLWZpbHRlci1kcm9wZG93biB7XFxuICBtaW4td2lkdGg6IDk2cHg7XFxuICBtYXJnaW4tbGVmdDogLThweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG59XFxuLmFudC10YWJsZS1maWx0ZXItZHJvcGRvd24gLmFudC1kcm9wZG93bi1tZW51IHtcXG4gIGJvcmRlcjogMDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xcbn1cXG4uYW50LXRhYmxlLWZpbHRlci1kcm9wZG93biAuYW50LWRyb3Bkb3duLW1lbnUtd2l0aG91dC1zdWJtZW51IHtcXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG4uYW50LXRhYmxlLWZpbHRlci1kcm9wZG93biAuYW50LWRyb3Bkb3duLW1lbnUtaXRlbSA+IGxhYmVsICsgc3BhbiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAwO1xcbn1cXG4uYW50LXRhYmxlLWZpbHRlci1kcm9wZG93biAuYW50LWRyb3Bkb3duLW1lbnUtc3ViIHtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbn1cXG4uYW50LXRhYmxlLWZpbHRlci1kcm9wZG93biAuYW50LWRyb3Bkb3duLW1lbnUgLmFudC1kcm9wZG93bi1zdWJtZW51LWNvbnRhaW4tc2VsZWN0ZWQgLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtdGl0bGU6YWZ0ZXIge1xcbiAgY29sb3I6ICMxODkwZmY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtc2hhZG93OiAwIDAgMnB4ICNiYWU3ZmY7XFxufVxcbi5hbnQtdGFibGUtZmlsdGVyLWRyb3Bkb3duIC5hbnQtZHJvcGRvd24tbWVudS1pdGVtIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5hbnQtdGFibGUtZmlsdGVyLWRyb3Bkb3duID4gLmFudC1kcm9wZG93bi1tZW51ID4gLmFudC1kcm9wZG93bi1tZW51LWl0ZW06bGFzdC1jaGlsZCxcXG4uYW50LXRhYmxlLWZpbHRlci1kcm9wZG93biA+IC5hbnQtZHJvcGRvd24tbWVudSA+IC5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51Omxhc3QtY2hpbGQgLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtdGl0bGUge1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuLmFudC10YWJsZS1maWx0ZXItZHJvcGRvd24tYnRucyB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcGFkZGluZzogN3B4IDhweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlOGU4O1xcbn1cXG4uYW50LXRhYmxlLWZpbHRlci1kcm9wZG93bi1saW5rIHtcXG4gIGNvbG9yOiAjMTg5MGZmO1xcbn1cXG4uYW50LXRhYmxlLWZpbHRlci1kcm9wZG93bi1saW5rOmhvdmVyIHtcXG4gIGNvbG9yOiAjNDBhOWZmO1xcbn1cXG4uYW50LXRhYmxlLWZpbHRlci1kcm9wZG93bi1saW5rOmFjdGl2ZSB7XFxuICBjb2xvcjogIzA5NmRkOTtcXG59XFxuLmFudC10YWJsZS1maWx0ZXItZHJvcGRvd24tbGluay5jb25maXJtIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4uYW50LXRhYmxlLWZpbHRlci1kcm9wZG93bi1saW5rLmNsZWFyIHtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuLmFudC10YWJsZS1zZWxlY3Rpb24tc2VsZWN0LWFsbC1jdXN0b20ge1xcbiAgbWFyZ2luLXJpZ2h0OiA0cHggIWltcG9ydGFudDtcXG59XFxuLmFudC10YWJsZS1zZWxlY3Rpb24gLmFudGljb24tZG93biB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcztcXG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XFxufVxcbi5hbnQtdGFibGUtc2VsZWN0aW9uLW1lbnUge1xcbiAgbWluLXdpZHRoOiA5NnB4O1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbn1cXG4uYW50LXRhYmxlLXNlbGVjdGlvbi1tZW51IC5hbnQtYWN0aW9uLWRvd24ge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxufVxcbi5hbnQtdGFibGUtc2VsZWN0aW9uLWRvd24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG4uYW50LXRhYmxlLXNlbGVjdGlvbi1kb3duOmhvdmVyIC5hbnRpY29uLWRvd24ge1xcbiAgY29sb3I6ICM2NjY7XFxufVxcbi5hbnQtdGFibGUtcm93LWV4cGFuZC1pY29uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxN3B4O1xcbiAgaGVpZ2h0OiAxN3B4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGU4O1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxufVxcbi5hbnQtdGFibGUtcm93LWV4cGFuZGVkOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICctJztcXG59XFxuLmFudC10YWJsZS1yb3ctY29sbGFwc2VkOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcrJztcXG59XFxuLmFudC10YWJsZS1yb3ctc3BhY2VkIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLmFudC10YWJsZS1yb3ctc3BhY2VkOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcuJztcXG59XFxuLmFudC10YWJsZS1yb3dbY2xhc3MqPVxcXCJhbnQtdGFibGUtcm93LWxldmVsLTBcXFwiXSAuYW50LXRhYmxlLXNlbGVjdGlvbi1jb2x1bW4gPiBzcGFuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxudHIuYW50LXRhYmxlLWV4cGFuZGVkLXJvdyxcXG50ci5hbnQtdGFibGUtZXhwYW5kZWQtcm93OmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNmYmZiZmI7XFxufVxcbi5hbnQtdGFibGUgLmFudC10YWJsZS1yb3ctaW5kZW50ICsgLmFudC10YWJsZS1yb3ctZXhwYW5kLWljb24ge1xcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxufVxcbi5hbnQtdGFibGUtc2Nyb2xsIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG4uYW50LXRhYmxlLXNjcm9sbCB0YWJsZSB7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxufVxcbi5hbnQtdGFibGUtYm9keS1pbm5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5hbnQtdGFibGUtZml4ZWQtaGVhZGVyID4gLmFudC10YWJsZS1jb250ZW50ID4gLmFudC10YWJsZS1zY3JvbGwgPiAuYW50LXRhYmxlLWJvZHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxuLmFudC10YWJsZS1maXhlZC1oZWFkZXIgLmFudC10YWJsZS1ib2R5LWlubmVyIHtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcbi5hbnQtdGFibGUtZml4ZWQtaGVhZGVyIC5hbnQtdGFibGUtc2Nyb2xsIC5hbnQtdGFibGUtaGVhZGVyIHtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IC0yMHB4O1xcbn1cXG4uYW50LXRhYmxlLWZpeGVkLWxlZnQsXFxuLmFudC10YWJsZS1maXhlZC1yaWdodCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LWJveC1zaGFkb3cgMC4zcyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC1ib3gtc2hhZG93IDAuM3MgZWFzZTtcXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzIGVhc2UsIC13ZWJraXQtYm94LXNoYWRvdyAwLjNzIGVhc2U7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbn1cXG4uYW50LXRhYmxlLWZpeGVkLWxlZnQgdGFibGUsXFxuLmFudC10YWJsZS1maXhlZC1yaWdodCB0YWJsZSB7XFxuICB3aWR0aDogYXV0bztcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxufVxcbi5hbnQtdGFibGUtZml4ZWQtaGVhZGVyIC5hbnQtdGFibGUtZml4ZWQtbGVmdCAuYW50LXRhYmxlLWJvZHktb3V0ZXIgLmFudC10YWJsZS1maXhlZCxcXG4uYW50LXRhYmxlLWZpeGVkLWhlYWRlciAuYW50LXRhYmxlLWZpeGVkLXJpZ2h0IC5hbnQtdGFibGUtYm9keS1vdXRlciAuYW50LXRhYmxlLWZpeGVkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxufVxcbi5hbnQtdGFibGUtZml4ZWQtbGVmdCB7XFxuICBsZWZ0OiAwO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiA2cHggMCA2cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiA2cHggMCA2cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbn1cXG4uYW50LXRhYmxlLWZpeGVkLWxlZnQgLmFudC10YWJsZS1oZWFkZXIge1xcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG4uYW50LXRhYmxlLWZpeGVkLWxlZnQgLmFudC10YWJsZS1ib2R5LWlubmVyIHtcXG4gIG1hcmdpbi1yaWdodDogLTIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG4uYW50LXRhYmxlLWZpeGVkLWhlYWRlciAuYW50LXRhYmxlLWZpeGVkLWxlZnQgLmFudC10YWJsZS1ib2R5LWlubmVyIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7XFxufVxcbi5hbnQtdGFibGUtZml4ZWQtbGVmdCxcXG4uYW50LXRhYmxlLWZpeGVkLWxlZnQgdGFibGUge1xcbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCAwO1xcbn1cXG4uYW50LXRhYmxlLWZpeGVkLWxlZnQgLmFudC10YWJsZS10aGVhZCA+IHRyID4gdGg6bGFzdC1jaGlsZCB7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcXG59XFxuLmFudC10YWJsZS1maXhlZC1yaWdodCB7XFxuICByaWdodDogMDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogLTZweCAwIDZweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IC02cHggMCA2cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbn1cXG4uYW50LXRhYmxlLWZpeGVkLXJpZ2h0LFxcbi5hbnQtdGFibGUtZml4ZWQtcmlnaHQgdGFibGUge1xcbiAgYm9yZGVyLXJhZGl1czogMCA0cHggMCAwO1xcbn1cXG4uYW50LXRhYmxlLWZpeGVkLXJpZ2h0IC5hbnQtdGFibGUtZXhwYW5kZWQtcm93IHtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4uYW50LXRhYmxlLWZpeGVkLXJpZ2h0IC5hbnQtdGFibGUtdGhlYWQgPiB0ciA+IHRoOmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XFxufVxcbi5hbnQtdGFibGUuYW50LXRhYmxlLXNjcm9sbC1wb3NpdGlvbi1sZWZ0IC5hbnQtdGFibGUtZml4ZWQtbGVmdCB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcbi5hbnQtdGFibGUuYW50LXRhYmxlLXNjcm9sbC1wb3NpdGlvbi1yaWdodCAuYW50LXRhYmxlLWZpeGVkLXJpZ2h0IHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuLmFudC10YWJsZS1taWRkbGUgPiAuYW50LXRhYmxlLXRpdGxlLFxcbi5hbnQtdGFibGUtbWlkZGxlID4gLmFudC10YWJsZS1mb290ZXIge1xcbiAgcGFkZGluZzogMTJweCA4cHg7XFxufVxcbi5hbnQtdGFibGUtbWlkZGxlID4gLmFudC10YWJsZS1jb250ZW50ID4gLmFudC10YWJsZS1oZWFkZXIgPiB0YWJsZSA+IC5hbnQtdGFibGUtdGhlYWQgPiB0ciA+IHRoLFxcbi5hbnQtdGFibGUtbWlkZGxlID4gLmFudC10YWJsZS1jb250ZW50ID4gLmFudC10YWJsZS1ib2R5ID4gdGFibGUgPiAuYW50LXRhYmxlLXRoZWFkID4gdHIgPiB0aCxcXG4uYW50LXRhYmxlLW1pZGRsZSA+IC5hbnQtdGFibGUtY29udGVudCA+IC5hbnQtdGFibGUtc2Nyb2xsID4gLmFudC10YWJsZS1oZWFkZXIgPiB0YWJsZSA+IC5hbnQtdGFibGUtdGhlYWQgPiB0ciA+IHRoLFxcbi5hbnQtdGFibGUtbWlkZGxlID4gLmFudC10YWJsZS1jb250ZW50ID4gLmFudC10YWJsZS1zY3JvbGwgPiAuYW50LXRhYmxlLWJvZHkgPiB0YWJsZSA+IC5hbnQtdGFibGUtdGhlYWQgPiB0ciA+IHRoLFxcbi5hbnQtdGFibGUtbWlkZGxlID4gLmFudC10YWJsZS1jb250ZW50ID4gLmFudC10YWJsZS1maXhlZC1sZWZ0ID4gLmFudC10YWJsZS1oZWFkZXIgPiB0YWJsZSA+IC5hbnQtdGFibGUtdGhlYWQgPiB0ciA+IHRoLFxcbi5hbnQtdGFibGUtbWlkZGxlID4gLmFudC10YWJsZS1jb250ZW50ID4gLmFudC10YWJsZS1maXhlZC1yaWdodCA+IC5hbnQtdGFibGUtaGVhZGVyID4gdGFibGUgPiAuYW50LXRhYmxlLXRoZWFkID4gdHIgPiB0aCxcXG4uYW50LXRhYmxlLW1pZGRsZSA+IC5hbnQtdGFibGUtY29udGVudCA+IC5hbnQtdGFibGUtZml4ZWQtbGVmdCA+IC5hbnQtdGFibGUtYm9keS1vdXRlciA+IC5hbnQtdGFibGUtYm9keS1pbm5lciA+IHRhYmxlID4gLmFudC10YWJsZS10aGVhZCA+IHRyID4gdGgsXFxuLmFudC10YWJsZS1taWRkbGUgPiAuYW50LXRhYmxlLWNvbnRlbnQgPiAuYW50LXRhYmxlLWZpeGVkLXJpZ2h0ID4gLmFudC10YWJsZS1ib2R5LW91dGVyID4gLmFudC10YWJsZS1ib2R5LWlubmVyID4gdGFibGUgPiAuYW50LXRhYmxlLXRoZWFkID4gdHIgPiB0aCxcXG4uYW50LXRhYmxlLW1pZGRsZSA+IC5hbnQtdGFibGUtY29udGVudCA+IC5hbnQtdGFibGUtaGVhZGVyID4gdGFibGUgPiAuYW50LXRhYmxlLXRib2R5ID4gdHIgPiB0ZCxcXG4uYW50LXRhYmxlLW1pZGRsZSA+IC5hbnQtdGFibGUtY29udGVudCA+IC5hbnQtdGFibGUtYm9keSA+IHRhYmxlID4gLmFudC10YWJsZS10Ym9keSA+IHRyID4gdGQsXFxuLmFudC10YWJsZS1taWRkbGUgPiAuYW50LXRhYmxlLWNvbnRlbnQgPiAuYW50LXRhYmxlLXNjcm9sbCA+IC5hbnQtdGFibGUtaGVhZGVyID4gdGFibGUgPiAuYW50LXRhYmxlLXRib2R5ID4gdHIgPiB0ZCxcXG4uYW50LXRhYmxlLW1pZGRsZSA+IC5hbnQtdGFibGUtY29udGVudCA+IC5hbnQtdGFibGUtc2Nyb2xsID4gLmFudC10YWJsZS1ib2R5ID4gdGFibGUgPiAuYW50LXRhYmxlLXRib2R5ID4gdHIgPiB0ZCxcXG4uYW50LXRhYmxlLW1pZGRsZSA+IC5hbnQtdGFibGUtY29udGVudCA+IC5hbnQtdGFibGUtZml4ZWQtbGVmdCA+IC5hbnQtdGFibGUtaGVhZGVyID4gdGFibGUgPiAuYW50LXRhYmxlLXRib2R5ID4gdHIgPiB0ZCxcXG4uYW50LXRhYmxlLW1pZGRsZSA+IC5hbnQtdGFibGUtY29udGVudCA+IC5hbnQtdGFibGUtZml4ZWQtcmlnaHQgPiAuYW50LXRhYmxlLWhlYWRlciA+IHRhYmxlID4gLmFudC10YWJsZS10Ym9keSA+IHRyID4gdGQsXFxuLmFudC10YWJsZS1taWRkbGUgPiAuYW50LXRhYmxlLWNvbnRlbnQgPiAuYW50LXRhYmxlLWZpeGVkLWxlZnQgPiAuYW50LXRhYmxlLWJvZHktb3V0ZXIgPiAuYW50LXRhYmxlLWJvZHktaW5uZXIgPiB0YWJsZSA+IC5hbnQtdGFibGUtdGJvZHkgPiB0ciA+IHRkLFxcbi5hbnQtdGFibGUtbWlkZGxlID4gLmFudC10YWJsZS1jb250ZW50ID4gLmFudC10YWJsZS1maXhlZC1yaWdodCA+IC5hbnQtdGFibGUtYm9keS1vdXRlciA+IC5hbnQtdGFibGUtYm9keS1pbm5lciA+IHRhYmxlID4gLmFudC10YWJsZS10Ym9keSA+IHRyID4gdGQge1xcbiAgcGFkZGluZzogMTJweCA4cHg7XFxufVxcbi5hbnQtdGFibGUtc21hbGwge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThlODtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLmFudC10YWJsZS1zbWFsbCA+IC5hbnQtdGFibGUtdGl0bGUsXFxuLmFudC10YWJsZS1zbWFsbCA+IC5hbnQtdGFibGUtZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDhweCA4cHg7XFxufVxcbi5hbnQtdGFibGUtc21hbGwgPiAuYW50LXRhYmxlLXRpdGxlIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZThlOGU4O1xcbiAgdG9wOiAwO1xcbn1cXG4uYW50LXRhYmxlLXNtYWxsID4gLmFudC10YWJsZS1jb250ZW50ID4gLmFudC10YWJsZS1oZWFkZXIgPiB0YWJsZSxcXG4uYW50LXRhYmxlLXNtYWxsID4gLmFudC10YWJsZS1jb250ZW50ID4gLmFudC10YWJsZS1ib2R5ID4gdGFibGUsXFxuLmFudC10YWJsZS1zbWFsbCA+IC5hbnQtdGFibGUtY29udGVudCA+IC5hbnQtdGFibGUtc2Nyb2xsID4gLmFudC10YWJsZS1oZWFkZXIgPiB0YWJsZSxcXG4uYW50LXRhYmxlLXNtYWxsID4gLmFudC10YWJsZS1jb250ZW50ID4gLmFudC10YWJsZS1zY3JvbGwgPiAuYW50LXRhYmxlLWJvZHkgPiB0YWJsZSxcXG4uYW50LXRhYmxlLXNtYWxsID4gLmFudC10YWJsZS1jb250ZW50ID4gLmFudC10YWJsZS1maXhlZC1sZWZ0ID4gLmFudC10YWJsZS1oZWFkZXIgPiB0YWJsZSxcXG4uYW50LXRhYmxlLXNtYWxsID4gLmFudC10YWJsZS1jb250ZW50ID4gLmFudC10YWJsZS1maXhlZC1yaWdodCA+IC5hbnQtdGFibGUtaGVhZGVyID4gdGFibGUsXFxuLmFudC10YWJsZS1zbWFsbCA+IC5hbnQtdGFibGUtY29udGVudCA+IC5hbnQtdGFibGUtZml4ZWQtbGVmdCA+IC5hbnQtdGFibGUtYm9keS1vdXRlciA+IC5hbnQtdGFibGUtYm9keS1pbm5lciA+IHRhYmxlLFxcbi5hbnQtdGFibGUtc21hbGwgPiAuYW50LXRhYmxlLWNvbnRlbnQgPiAuYW50LXRhYmxlLWZpeGVkLXJpZ2h0ID4gLmFudC10YWJsZS1ib2R5LW91dGVyID4gLmFudC10YWJsZS1ib2R5LWlubmVyID4gdGFibGUge1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMCA4cHg7XFxufVxcbi5hbnQtdGFibGUtc21hbGwgPiAuYW50LXRhYmxlLWNvbnRlbnQgPiAuYW50LXRhYmxlLWhlYWRlciA+IHRhYmxlID4gLmFudC10YWJsZS10aGVhZCA+IHRyID4gdGgsXFxuLmFudC10YWJsZS1zbWFsbCA+IC5hbnQtdGFibGUtY29udGVudCA+IC5hbnQtdGFibGUtYm9keSA+IHRhYmxlID4gLmFudC10YWJsZS10aGVhZCA+IHRyID4gdGgsXFxuLmFudC10YWJsZS1zbWFsbCA+IC5hbnQtdGFibGUtY29udGVudCA+IC5hbnQtdGFibGUtc2Nyb2xsID4gLmFudC10YWJsZS1oZWFkZXIgPiB0YWJsZSA+IC5hbnQtdGFibGUtdGhlYWQgPiB0ciA+IHRoLFxcbi5hbnQtdGFibGUtc21hbGwgPiAuYW50LXRhYmxlLWNvbnRlbnQgPiAuYW50LXRhYmxlLXNjcm9sbCA+IC5hbnQtdGFibGUtYm9keSA+IHRhYmxlID4gLmFudC10YWJsZS10aGVhZCA+IHRyID4gdGgsXFxuLmFudC10YWJsZS1zbWFsbCA+IC5hbnQtdGFibGUtY29udGVudCA+IC5hbnQtdGFibGUtZml4ZWQtbGVmdCA+IC5hbnQtdGFibGUtaGVhZGVyID4gdGFibGUgPiAuYW50LXRhYmxlLXRoZWFkID4gdHIgPiB0aCxcXG4uYW50LXRhYmxlLXNtYWxsID4gLmFudC10YWJsZS1jb250ZW50ID4gLmFudC10YWJsZS1maXhlZC1yaWdodCA+IC5hbnQtdGFibGUtaGVhZGVyID4gdGFibGUgPiAuYW50LXRhYmxlLXRoZWFkID4gdHIgPiB0aCxcXG4uYW50LXRhYmxlLXNtYWxsID4gLmFudC10YWJsZS1jb250ZW50ID4gLmFudC10YWJsZS1maXhlZC1sZWZ0ID4gLmFudC10YWJsZS1ib2R5LW91dGVyID4gLmFudC10YWJsZS1ib2R5LWlubmVyID4gdGFibGUgPiAuYW50LXRhYmxlLXRoZWFkID4gdHIgPiB0aCxcXG4uYW50LXRhYmxlLXNtYWxsID4gLmFudC10YWJsZS1jb250ZW50ID4gLmFudC10YWJsZS1maXhlZC1yaWdodCA+IC5hbnQtdGFibGUtYm9keS1vdXRlciA+IC5hbnQtdGFibGUtYm9keS1pbm5lciA+IHRhYmxlID4gLmFudC10YWJsZS10aGVhZCA+IHRyID4gdGgsXFxuLmFudC10YWJsZS1zbWFsbCA+IC5hbnQtdGFibGUtY29udGVudCA+IC5hbnQtdGFibGUtaGVhZGVyID4gdGFibGUgPiAuYW50LXRhYmxlLXRib2R5ID4gdHIgPiB0ZCxcXG4uYW50LXRhYmxlLXNtYWxsID4gLmFudC10YWJsZS1jb250ZW50ID4gLmFudC10YWJsZS1ib2R5ID4gdGFibGUgPiAuYW50LXRhYmxlLXRib2R5ID4gdHIgPiB0ZCxcXG4uYW50LXRhYmxlLXNtYWxsID4gLmFudC10YWJsZS1jb250ZW50ID4gLmFudC10YWJsZS1zY3JvbGwgPiAuYW50LXRhYmxlLWhlYWRlciA+IHRhYmxlID4gLmFudC10YWJsZS10Ym9keSA+IHRyID4gdGQsXFxuLmFudC10YWJsZS1zbWFsbCA+IC5hbnQtdGFibGUtY29udGVudCA+IC5hbnQtdGFibGUtc2Nyb2xsID4gLmFudC10YWJsZS1ib2R5ID4gdGFibGUgPiAuYW50LXRhYmxlLXRib2R5ID4gdHIgPiB0ZCxcXG4uYW50LXRhYmxlLXNtYWxsID4gLmFudC10YWJsZS1jb250ZW50ID4gLmFudC10YWJsZS1maXhlZC1sZWZ0ID4gLmFudC10YWJsZS1oZWFkZXIgPiB0YWJsZSA+IC5hbnQtdGFibGUtdGJvZHkgPiB0ciA+IHRkLFxcbi5hbnQtdGFibGUtc21hbGwgPiAuYW50LXRhYmxlLWNvbnRlbnQgPiAuYW50LXRhYmxlLWZpeGVkLXJpZ2h0ID4gLmFudC10YWJsZS1oZWFkZXIgPiB0YWJsZSA+IC5hbnQtdGFibGUtdGJvZHkgPiB0ciA+IHRkLFxcbi5hbnQtdGFibGUtc21hbGwgPiAuYW50LXRhYmxlLWNvbnRlbnQgPiAuYW50LXRhYmxlLWZpeGVkLWxlZnQgPiAuYW50LXRhYmxlLWJvZHktb3V0ZXIgPiAuYW50LXRhYmxlLWJvZHktaW5uZXIgPiB0YWJsZSA+IC5hbnQtdGFibGUtdGJvZHkgPiB0ciA+IHRkLFxcbi5hbnQtdGFibGUtc21hbGwgPiAuYW50LXRhYmxlLWNvbnRlbnQgPiAuYW50LXRhYmxlLWZpeGVkLXJpZ2h0ID4gLmFudC10YWJsZS1ib2R5LW91dGVyID4gLmFudC10YWJsZS1ib2R5LWlubmVyID4gdGFibGUgPiAuYW50LXRhYmxlLXRib2R5ID4gdHIgPiB0ZCB7XFxuICBwYWRkaW5nOiA4cHggOHB4O1xcbn1cXG4uYW50LXRhYmxlLXNtYWxsID4gLmFudC10YWJsZS1jb250ZW50ID4gLmFudC10YWJsZS1oZWFkZXIgPiB0YWJsZSA+IC5hbnQtdGFibGUtdGhlYWQgPiB0ciA+IHRoLFxcbi5hbnQtdGFibGUtc21hbGwgPiAuYW50LXRhYmxlLWNvbnRlbnQgPiAuYW50LXRhYmxlLWJvZHkgPiB0YWJsZSA+IC5hbnQtdGFibGUtdGhlYWQgPiB0ciA+IHRoLFxcbi5hbnQtdGFibGUtc21hbGwgPiAuYW50LXRhYmxlLWNvbnRlbnQgPiAuYW50LXRhYmxlLXNjcm9sbCA+IC5hbnQtdGFibGUtaGVhZGVyID4gdGFibGUgPiAuYW50LXRhYmxlLXRoZWFkID4gdHIgPiB0aCxcXG4uYW50LXRhYmxlLXNtYWxsID4gLmFudC10YWJsZS1jb250ZW50ID4gLmFudC10YWJsZS1zY3JvbGwgPiAuYW50LXRhYmxlLWJvZHkgPiB0YWJsZSA+IC5hbnQtdGFibGUtdGhlYWQgPiB0ciA+IHRoLFxcbi5hbnQtdGFibGUtc21hbGwgPiAuYW50LXRhYmxlLWNvbnRlbnQgPiAuYW50LXRhYmxlLWZpeGVkLWxlZnQgPiAuYW50LXRhYmxlLWhlYWRlciA+IHRhYmxlID4gLmFudC10YWJsZS10aGVhZCA+IHRyID4gdGgsXFxuLmFudC10YWJsZS1zbWFsbCA+IC5hbnQtdGFibGUtY29udGVudCA+IC5hbnQtdGFibGUtZml4ZWQtcmlnaHQgPiAuYW50LXRhYmxlLWhlYWRlciA+IHRhYmxlID4gLmFudC10YWJsZS10aGVhZCA+IHRyID4gdGgsXFxuLmFudC10YWJsZS1zbWFsbCA+IC5hbnQtdGFibGUtY29udGVudCA+IC5hbnQtdGFibGUtZml4ZWQtbGVmdCA+IC5hbnQtdGFibGUtYm9keS1vdXRlciA+IC5hbnQtdGFibGUtYm9keS1pbm5lciA+IHRhYmxlID4gLmFudC10YWJsZS10aGVhZCA+IHRyID4gdGgsXFxuLmFudC10YWJsZS1zbWFsbCA+IC5hbnQtdGFibGUtY29udGVudCA+IC5hbnQtdGFibGUtZml4ZWQtcmlnaHQgPiAuYW50LXRhYmxlLWJvZHktb3V0ZXIgPiAuYW50LXRhYmxlLWJvZHktaW5uZXIgPiB0YWJsZSA+IC5hbnQtdGFibGUtdGhlYWQgPiB0ciA+IHRoIHtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZThlODtcXG59XFxuLmFudC10YWJsZS1zbWFsbCA+IC5hbnQtdGFibGUtY29udGVudCA+IC5hbnQtdGFibGUtc2Nyb2xsID4gLmFudC10YWJsZS1oZWFkZXIgPiB0YWJsZSxcXG4uYW50LXRhYmxlLXNtYWxsID4gLmFudC10YWJsZS1jb250ZW50ID4gLmFudC10YWJsZS1zY3JvbGwgPiAuYW50LXRhYmxlLWJvZHkgPiB0YWJsZSxcXG4uYW50LXRhYmxlLXNtYWxsID4gLmFudC10YWJsZS1jb250ZW50ID4gLmFudC10YWJsZS1maXhlZC1sZWZ0ID4gLmFudC10YWJsZS1oZWFkZXIgPiB0YWJsZSxcXG4uYW50LXRhYmxlLXNtYWxsID4gLmFudC10YWJsZS1jb250ZW50ID4gLmFudC10YWJsZS1maXhlZC1yaWdodCA+IC5hbnQtdGFibGUtaGVhZGVyID4gdGFibGUsXFxuLmFudC10YWJsZS1zbWFsbCA+IC5hbnQtdGFibGUtY29udGVudCA+IC5hbnQtdGFibGUtZml4ZWQtbGVmdCA+IC5hbnQtdGFibGUtYm9keS1vdXRlciA+IC5hbnQtdGFibGUtYm9keS1pbm5lciA+IHRhYmxlLFxcbi5hbnQtdGFibGUtc21hbGwgPiAuYW50LXRhYmxlLWNvbnRlbnQgPiAuYW50LXRhYmxlLWZpeGVkLXJpZ2h0ID4gLmFudC10YWJsZS1ib2R5LW91dGVyID4gLmFudC10YWJsZS1ib2R5LWlubmVyID4gdGFibGUge1xcbiAgcGFkZGluZzogMDtcXG59XFxuLmFudC10YWJsZS1zbWFsbCA+IC5hbnQtdGFibGUtY29udGVudCAuYW50LXRhYmxlLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbn1cXG4uYW50LXRhYmxlLXNtYWxsID4gLmFudC10YWJsZS1jb250ZW50IC5hbnQtdGFibGUtcGxhY2Vob2xkZXIsXFxuLmFudC10YWJsZS1zbWFsbCA+IC5hbnQtdGFibGUtY29udGVudCAuYW50LXRhYmxlLXJvdzpsYXN0LWNoaWxkIHRkIHtcXG4gIGJvcmRlci1ib3R0b206IDA7XFxufVxcbi5hbnQtdGFibGUtc21hbGwuYW50LXRhYmxlLWJvcmRlcmVkIHtcXG4gIGJvcmRlci1yaWdodDogMDtcXG59XFxuLmFudC10YWJsZS1zbWFsbC5hbnQtdGFibGUtYm9yZGVyZWQgLmFudC10YWJsZS10aXRsZSB7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZThlODtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlOGU4ZTg7XFxufVxcbi5hbnQtdGFibGUtc21hbGwuYW50LXRhYmxlLWJvcmRlcmVkIC5hbnQtdGFibGUtY29udGVudCB7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZThlOGU4O1xcbn1cXG4uYW50LXRhYmxlLXNtYWxsLmFudC10YWJsZS1ib3JkZXJlZCAuYW50LXRhYmxlLWZvb3RlciB7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U4ZThlODtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlOGU4ZTg7XFxufVxcbi5hbnQtdGFibGUtc21hbGwuYW50LXRhYmxlLWJvcmRlcmVkIC5hbnQtdGFibGUtZm9vdGVyOmJlZm9yZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uYW50LXRhYmxlLXNtYWxsLmFudC10YWJsZS1ib3JkZXJlZCAuYW50LXRhYmxlLXBsYWNlaG9sZGVyIHtcXG4gIGJvcmRlci1sZWZ0OiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG59XFxuLmFudC10YWJsZS1zbWFsbC5hbnQtdGFibGUtYm9yZGVyZWQgLmFudC10YWJsZS10aGVhZCA+IHRyID4gdGg6bGFzdC1jaGlsZCxcXG4uYW50LXRhYmxlLXNtYWxsLmFudC10YWJsZS1ib3JkZXJlZCAuYW50LXRhYmxlLXRib2R5ID4gdHIgPiB0ZDpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cblxudmFyIG1hdGNoZXMgPSByZXF1aXJlKCdkb20tbWF0Y2hlcycpO1xuXG4vKipcbiAqIEBwYXJhbSBlbGVtZW50IHtFbGVtZW50fVxuICogQHBhcmFtIHNlbGVjdG9yIHtTdHJpbmd9XG4gKiBAcGFyYW0gY29udGV4dCB7RWxlbWVudH1cbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGVsZW1lbnQsIHNlbGVjdG9yLCBjb250ZXh0KSB7XG4gIGNvbnRleHQgPSBjb250ZXh0IHx8IGRvY3VtZW50O1xuICAvLyBndWFyZCBhZ2FpbnN0IG9ycGhhbnNcbiAgZWxlbWVudCA9IHsgcGFyZW50Tm9kZTogZWxlbWVudCB9O1xuXG4gIHdoaWxlICgoZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZSkgJiYgZWxlbWVudCAhPT0gY29udGV4dCkge1xuICAgIGlmIChtYXRjaGVzKGVsZW1lbnQsIHNlbGVjdG9yKSkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIERPTSBlbGVtZW50IG1hdGNoZXMgYSBDU1Mgc2VsZWN0b3JcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1cbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gbWF0Y2hlcyhlbGVtLCBzZWxlY3Rvcikge1xuICAvLyBWZW5kb3Itc3BlY2lmaWMgaW1wbGVtZW50YXRpb25zIG9mIGBFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzKClgLlxuICB2YXIgcHJvdG8gPSB3aW5kb3cuRWxlbWVudC5wcm90b3R5cGU7XG4gIHZhciBuYXRpdmVNYXRjaGVzID0gcHJvdG8ubWF0Y2hlcyB8fFxuICAgICAgcHJvdG8ubW96TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgICBwcm90by5tc01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgcHJvdG8ub01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgcHJvdG8ud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xuXG4gIGlmICghZWxlbSB8fCBlbGVtLm5vZGVUeXBlICE9PSAxKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHBhcmVudEVsZW0gPSBlbGVtLnBhcmVudE5vZGU7XG5cbiAgLy8gdXNlIG5hdGl2ZSAnbWF0Y2hlcydcbiAgaWYgKG5hdGl2ZU1hdGNoZXMpIHtcbiAgICByZXR1cm4gbmF0aXZlTWF0Y2hlcy5jYWxsKGVsZW0sIHNlbGVjdG9yKTtcbiAgfVxuXG4gIC8vIG5hdGl2ZSBzdXBwb3J0IGZvciBgbWF0Y2hlc2AgaXMgbWlzc2luZyBhbmQgYSBmYWxsYmFjayBpcyByZXF1aXJlZFxuICB2YXIgbm9kZXMgPSBwYXJlbnRFbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICB2YXIgbGVuID0gbm9kZXMubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAobm9kZXNbaV0gPT09IGVsZW0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBFeHBvc2UgYG1hdGNoZXNgXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBtYXRjaGVzO1xuIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIHN0YWNrQ2xlYXIgPSByZXF1aXJlKCcuL19zdGFja0NsZWFyJyksXG4gICAgc3RhY2tEZWxldGUgPSByZXF1aXJlKCcuL19zdGFja0RlbGV0ZScpLFxuICAgIHN0YWNrR2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tHZXQnKSxcbiAgICBzdGFja0hhcyA9IHJlcXVpcmUoJy4vX3N0YWNrSGFzJyksXG4gICAgc3RhY2tTZXQgPSByZXF1aXJlKCcuL19zdGFja1NldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGUoZW50cmllcyk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFN0YWNrYC5cblN0YWNrLnByb3RvdHlwZS5jbGVhciA9IHN0YWNrQ2xlYXI7XG5TdGFjay5wcm90b3R5cGVbJ2RlbGV0ZSddID0gc3RhY2tEZWxldGU7XG5TdGFjay5wcm90b3R5cGUuZ2V0ID0gc3RhY2tHZXQ7XG5TdGFjay5wcm90b3R5cGUuaGFzID0gc3RhY2tIYXM7XG5TdGFjay5wcm90b3R5cGUuc2V0ID0gc3RhY2tTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhY2s7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBVaW50OEFycmF5O1xuIiwiLyoqXG4gKiBBIGZhc3RlciBhbHRlcm5hdGl2ZSB0byBgRnVuY3Rpb24jYXBwbHlgLCB0aGlzIGZ1bmN0aW9uIGludm9rZXMgYGZ1bmNgXG4gKiB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiBgdGhpc0FyZ2AgYW5kIHRoZSBhcmd1bWVudHMgb2YgYGFyZ3NgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBpbnZva2UuXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgVGhlIGFyZ3VtZW50cyB0byBpbnZva2UgYGZ1bmNgIHdpdGguXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzdWx0IG9mIGBmdW5jYC5cbiAqL1xuZnVuY3Rpb24gYXBwbHkoZnVuYywgdGhpc0FyZywgYXJncykge1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcpO1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICB9XG4gIHJldHVybiBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFwcGx5O1xuIiwidmFyIGJhc2VUaW1lcyA9IHJlcXVpcmUoJy4vX2Jhc2VUaW1lcycpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKSxcbiAgICAgIGlzQXJnID0gIWlzQXJyICYmIGlzQXJndW1lbnRzKHZhbHVlKSxcbiAgICAgIGlzQnVmZiA9ICFpc0FyciAmJiAhaXNBcmcgJiYgaXNCdWZmZXIodmFsdWUpLFxuICAgICAgaXNUeXBlID0gIWlzQXJyICYmICFpc0FyZyAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheSh2YWx1ZSksXG4gICAgICBza2lwSW5kZXhlcyA9IGlzQXJyIHx8IGlzQXJnIHx8IGlzQnVmZiB8fCBpc1R5cGUsXG4gICAgICByZXN1bHQgPSBza2lwSW5kZXhlcyA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZykgOiBbXSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoXG4gICAgICAgICAgIC8vIFNhZmFyaSA5IGhhcyBlbnVtZXJhYmxlIGBhcmd1bWVudHMubGVuZ3RoYCBpbiBzdHJpY3QgbW9kZS5cbiAgICAgICAgICAga2V5ID09ICdsZW5ndGgnIHx8XG4gICAgICAgICAgIC8vIE5vZGUuanMgMC4xMCBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiBidWZmZXJzLlxuICAgICAgICAgICAoaXNCdWZmICYmIChrZXkgPT0gJ29mZnNldCcgfHwga2V5ID09ICdwYXJlbnQnKSkgfHxcbiAgICAgICAgICAgLy8gUGhhbnRvbUpTIDIgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gdHlwZWQgYXJyYXlzLlxuICAgICAgICAgICAoaXNUeXBlICYmIChrZXkgPT0gJ2J1ZmZlcicgfHwga2V5ID09ICdieXRlTGVuZ3RoJyB8fCBrZXkgPT0gJ2J5dGVPZmZzZXQnKSkgfHxcbiAgICAgICAgICAgLy8gU2tpcCBpbmRleCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICBpc0luZGV4KGtleSwgbGVuZ3RoKVxuICAgICAgICApKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUxpa2VLZXlzO1xuIiwidmFyIGJhc2VBc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ25WYWx1ZScpLFxuICAgIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZSBgYXNzaWduVmFsdWVgIGV4Y2VwdCB0aGF0IGl0IGRvZXNuJ3QgYXNzaWduXG4gKiBgdW5kZWZpbmVkYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYXNzaWduTWVyZ2VWYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgaWYgKCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmICFlcShvYmplY3Rba2V5XSwgdmFsdWUpKSB8fFxuICAgICAgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkpIHtcbiAgICBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc2lnbk1lcmdlVmFsdWU7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdENyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY3JlYXRlYCB3aXRob3V0IHN1cHBvcnQgZm9yIGFzc2lnbmluZ1xuICogcHJvcGVydGllcyB0byB0aGUgY3JlYXRlZCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm90byBUaGUgb2JqZWN0IHRvIGluaGVyaXQgZnJvbS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBvYmplY3QuXG4gKi9cbnZhciBiYXNlQ3JlYXRlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBvYmplY3QoKSB7fVxuICByZXR1cm4gZnVuY3Rpb24ocHJvdG8pIHtcbiAgICBpZiAoIWlzT2JqZWN0KHByb3RvKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBpZiAob2JqZWN0Q3JlYXRlKSB7XG4gICAgICByZXR1cm4gb2JqZWN0Q3JlYXRlKHByb3RvKTtcbiAgICB9XG4gICAgb2JqZWN0LnByb3RvdHlwZSA9IHByb3RvO1xuICAgIHZhciByZXN1bHQgPSBuZXcgb2JqZWN0O1xuICAgIG9iamVjdC5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUNyZWF0ZTtcbiIsInZhciBjcmVhdGVCYXNlRm9yID0gcmVxdWlyZSgnLi9fY3JlYXRlQmFzZUZvcicpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBiYXNlRm9yT3duYCB3aGljaCBpdGVyYXRlcyBvdmVyIGBvYmplY3RgXG4gKiBwcm9wZXJ0aWVzIHJldHVybmVkIGJ5IGBrZXlzRnVuY2AgYW5kIGludm9rZXMgYGl0ZXJhdGVlYCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqIEl0ZXJhdGVlIGZ1bmN0aW9ucyBtYXkgZXhpdCBpdGVyYXRpb24gZWFybHkgYnkgZXhwbGljaXRseSByZXR1cm5pbmcgYGZhbHNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xudmFyIGJhc2VGb3IgPSBjcmVhdGVCYXNlRm9yKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZvcjtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9XG50eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPSB0eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9XG50eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9XG50eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tzZXRUYWddID0gdHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9XG50eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW2Jhc2VHZXRUYWcodmFsdWUpXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNUeXBlZEFycmF5O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzSW4gPSByZXF1aXJlKCcuL19uYXRpdmVLZXlzSW4nKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzSW5gIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXNJbihvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXNJbihvYmplY3QpO1xuICB9XG4gIHZhciBpc1Byb3RvID0gaXNQcm90b3R5cGUob2JqZWN0KSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoIShrZXkgPT0gJ2NvbnN0cnVjdG9yJyAmJiAoaXNQcm90byB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlS2V5c0luO1xuIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBhc3NpZ25NZXJnZVZhbHVlID0gcmVxdWlyZSgnLi9fYXNzaWduTWVyZ2VWYWx1ZScpLFxuICAgIGJhc2VGb3IgPSByZXF1aXJlKCcuL19iYXNlRm9yJyksXG4gICAgYmFzZU1lcmdlRGVlcCA9IHJlcXVpcmUoJy4vX2Jhc2VNZXJnZURlZXAnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuL2tleXNJbicpLFxuICAgIHNhZmVHZXQgPSByZXF1aXJlKCcuL19zYWZlR2V0Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWVyZ2VgIHdpdGhvdXQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgc291cmNlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzcmNJbmRleCBUaGUgaW5kZXggb2YgYHNvdXJjZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBtZXJnZWQgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBzb3VyY2UgdmFsdWVzIGFuZCB0aGVpciBtZXJnZWRcbiAqICBjb3VudGVycGFydHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VNZXJnZShvYmplY3QsIHNvdXJjZSwgc3JjSW5kZXgsIGN1c3RvbWl6ZXIsIHN0YWNrKSB7XG4gIGlmIChvYmplY3QgPT09IHNvdXJjZSkge1xuICAgIHJldHVybjtcbiAgfVxuICBiYXNlRm9yKHNvdXJjZSwgZnVuY3Rpb24oc3JjVmFsdWUsIGtleSkge1xuICAgIGlmIChpc09iamVjdChzcmNWYWx1ZSkpIHtcbiAgICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgICBiYXNlTWVyZ2VEZWVwKG9iamVjdCwgc291cmNlLCBrZXksIHNyY0luZGV4LCBiYXNlTWVyZ2UsIGN1c3RvbWl6ZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgICAgID8gY3VzdG9taXplcihzYWZlR2V0KG9iamVjdCwga2V5KSwgc3JjVmFsdWUsIChrZXkgKyAnJyksIG9iamVjdCwgc291cmNlLCBzdGFjaylcbiAgICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gc3JjVmFsdWU7XG4gICAgICB9XG4gICAgICBhc3NpZ25NZXJnZVZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfVxuICB9LCBrZXlzSW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VNZXJnZTtcbiIsInZhciBhc3NpZ25NZXJnZVZhbHVlID0gcmVxdWlyZSgnLi9fYXNzaWduTWVyZ2VWYWx1ZScpLFxuICAgIGNsb25lQnVmZmVyID0gcmVxdWlyZSgnLi9fY2xvbmVCdWZmZXInKSxcbiAgICBjbG9uZVR5cGVkQXJyYXkgPSByZXF1aXJlKCcuL19jbG9uZVR5cGVkQXJyYXknKSxcbiAgICBjb3B5QXJyYXkgPSByZXF1aXJlKCcuL19jb3B5QXJyYXknKSxcbiAgICBpbml0Q2xvbmVPYmplY3QgPSByZXF1aXJlKCcuL19pbml0Q2xvbmVPYmplY3QnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNBcnJheUxpa2VPYmplY3QgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlT2JqZWN0JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzUGxhaW5PYmplY3QgPSByZXF1aXJlKCcuL2lzUGxhaW5PYmplY3QnKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpLFxuICAgIHNhZmVHZXQgPSByZXF1aXJlKCcuL19zYWZlR2V0JyksXG4gICAgdG9QbGFpbk9iamVjdCA9IHJlcXVpcmUoJy4vdG9QbGFpbk9iamVjdCcpO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZU1lcmdlYCBmb3IgYXJyYXlzIGFuZCBvYmplY3RzIHdoaWNoIHBlcmZvcm1zXG4gKiBkZWVwIG1lcmdlcyBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGVuYWJsaW5nIG9iamVjdHMgd2l0aCBjaXJjdWxhclxuICogcmVmZXJlbmNlcyB0byBiZSBtZXJnZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIG1lcmdlLlxuICogQHBhcmFtIHtudW1iZXJ9IHNyY0luZGV4IFRoZSBpbmRleCBvZiBgc291cmNlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IG1lcmdlRnVuYyBUaGUgZnVuY3Rpb24gdG8gbWVyZ2UgdmFsdWVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgYXNzaWduZWQgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBzb3VyY2UgdmFsdWVzIGFuZCB0aGVpciBtZXJnZWRcbiAqICBjb3VudGVycGFydHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VNZXJnZURlZXAob2JqZWN0LCBzb3VyY2UsIGtleSwgc3JjSW5kZXgsIG1lcmdlRnVuYywgY3VzdG9taXplciwgc3RhY2spIHtcbiAgdmFyIG9ialZhbHVlID0gc2FmZUdldChvYmplY3QsIGtleSksXG4gICAgICBzcmNWYWx1ZSA9IHNhZmVHZXQoc291cmNlLCBrZXkpLFxuICAgICAgc3RhY2tlZCA9IHN0YWNrLmdldChzcmNWYWx1ZSk7XG5cbiAgaWYgKHN0YWNrZWQpIHtcbiAgICBhc3NpZ25NZXJnZVZhbHVlKG9iamVjdCwga2V5LCBzdGFja2VkKTtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgID8gY3VzdG9taXplcihvYmpWYWx1ZSwgc3JjVmFsdWUsIChrZXkgKyAnJyksIG9iamVjdCwgc291cmNlLCBzdGFjaylcbiAgICA6IHVuZGVmaW5lZDtcblxuICB2YXIgaXNDb21tb24gPSBuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkO1xuXG4gIGlmIChpc0NvbW1vbikge1xuICAgIHZhciBpc0FyciA9IGlzQXJyYXkoc3JjVmFsdWUpLFxuICAgICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgaXNCdWZmZXIoc3JjVmFsdWUpLFxuICAgICAgICBpc1R5cGVkID0gIWlzQXJyICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHNyY1ZhbHVlKTtcblxuICAgIG5ld1ZhbHVlID0gc3JjVmFsdWU7XG4gICAgaWYgKGlzQXJyIHx8IGlzQnVmZiB8fCBpc1R5cGVkKSB7XG4gICAgICBpZiAoaXNBcnJheShvYmpWYWx1ZSkpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBvYmpWYWx1ZTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGlzQXJyYXlMaWtlT2JqZWN0KG9ialZhbHVlKSkge1xuICAgICAgICBuZXdWYWx1ZSA9IGNvcHlBcnJheShvYmpWYWx1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpc0J1ZmYpIHtcbiAgICAgICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICAgICAgbmV3VmFsdWUgPSBjbG9uZUJ1ZmZlcihzcmNWYWx1ZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpc1R5cGVkKSB7XG4gICAgICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgICAgIG5ld1ZhbHVlID0gY2xvbmVUeXBlZEFycmF5KHNyY1ZhbHVlLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBuZXdWYWx1ZSA9IFtdO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHNyY1ZhbHVlKSB8fCBpc0FyZ3VtZW50cyhzcmNWYWx1ZSkpIHtcbiAgICAgIG5ld1ZhbHVlID0gb2JqVmFsdWU7XG4gICAgICBpZiAoaXNBcmd1bWVudHMob2JqVmFsdWUpKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gdG9QbGFpbk9iamVjdChvYmpWYWx1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghaXNPYmplY3Qob2JqVmFsdWUpIHx8IChzcmNJbmRleCAmJiBpc0Z1bmN0aW9uKG9ialZhbHVlKSkpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBpbml0Q2xvbmVPYmplY3Qoc3JjVmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGlmIChpc0NvbW1vbikge1xuICAgIC8vIFJlY3Vyc2l2ZWx5IG1lcmdlIG9iamVjdHMgYW5kIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIHN0YWNrLnNldChzcmNWYWx1ZSwgbmV3VmFsdWUpO1xuICAgIG1lcmdlRnVuYyhuZXdWYWx1ZSwgc3JjVmFsdWUsIHNyY0luZGV4LCBjdXN0b21pemVyLCBzdGFjayk7XG4gICAgc3RhY2tbJ2RlbGV0ZSddKHNyY1ZhbHVlKTtcbiAgfVxuICBhc3NpZ25NZXJnZVZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZU1lcmdlRGVlcDtcbiIsInZhciBpZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKSxcbiAgICBvdmVyUmVzdCA9IHJlcXVpcmUoJy4vX292ZXJSZXN0JyksXG4gICAgc2V0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19zZXRUb1N0cmluZycpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnJlc3RgIHdoaWNoIGRvZXNuJ3QgdmFsaWRhdGUgb3IgY29lcmNlIGFyZ3VtZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUmVzdChmdW5jLCBzdGFydCkge1xuICByZXR1cm4gc2V0VG9TdHJpbmcob3ZlclJlc3QoZnVuYywgc3RhcnQsIGlkZW50aXR5KSwgZnVuYyArICcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUmVzdDtcbiIsInZhciBjb25zdGFudCA9IHJlcXVpcmUoJy4vY29uc3RhbnQnKSxcbiAgICBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2RlZmluZVByb3BlcnR5JyksXG4gICAgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYHNldFRvU3RyaW5nYCB3aXRob3V0IHN1cHBvcnQgZm9yIGhvdCBsb29wIHNob3J0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdHJpbmcgVGhlIGB0b1N0cmluZ2AgcmVzdWx0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGBmdW5jYC5cbiAqL1xudmFyIGJhc2VTZXRUb1N0cmluZyA9ICFkZWZpbmVQcm9wZXJ0eSA/IGlkZW50aXR5IDogZnVuY3Rpb24oZnVuYywgc3RyaW5nKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eShmdW5jLCAndG9TdHJpbmcnLCB7XG4gICAgJ2NvbmZpZ3VyYWJsZSc6IHRydWUsXG4gICAgJ2VudW1lcmFibGUnOiBmYWxzZSxcbiAgICAndmFsdWUnOiBjb25zdGFudChzdHJpbmcpLFxuICAgICd3cml0YWJsZSc6IHRydWVcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VTZXRUb1N0cmluZztcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRpbWVzO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmFyeTtcbiIsInZhciBVaW50OEFycmF5ID0gcmVxdWlyZSgnLi9fVWludDhBcnJheScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgYXJyYXlCdWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciBUaGUgYXJyYXkgYnVmZmVyIHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYXJyYXkgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUFycmF5QnVmZmVyKGFycmF5QnVmZmVyKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgYXJyYXlCdWZmZXIuY29uc3RydWN0b3IoYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCk7XG4gIG5ldyBVaW50OEFycmF5KHJlc3VsdCkuc2V0KG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVBcnJheUJ1ZmZlcjtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICBhbGxvY1Vuc2FmZSA9IEJ1ZmZlciA/IEJ1ZmZlci5hbGxvY1Vuc2FmZSA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgIGBidWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge0J1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVCdWZmZXIoYnVmZmVyLCBpc0RlZXApIHtcbiAgaWYgKGlzRGVlcCkge1xuICAgIHJldHVybiBidWZmZXIuc2xpY2UoKTtcbiAgfVxuICB2YXIgbGVuZ3RoID0gYnVmZmVyLmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGFsbG9jVW5zYWZlID8gYWxsb2NVbnNhZmUobGVuZ3RoKSA6IG5ldyBidWZmZXIuY29uc3RydWN0b3IobGVuZ3RoKTtcblxuICBidWZmZXIuY29weShyZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lQnVmZmVyO1xuIiwidmFyIGNsb25lQXJyYXlCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUFycmF5QnVmZmVyJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGB0eXBlZEFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHR5cGVkQXJyYXkgVGhlIHR5cGVkIGFycmF5IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCB0eXBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2xvbmVUeXBlZEFycmF5KHR5cGVkQXJyYXksIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcih0eXBlZEFycmF5LmJ1ZmZlcikgOiB0eXBlZEFycmF5LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyB0eXBlZEFycmF5LmNvbnN0cnVjdG9yKGJ1ZmZlciwgdHlwZWRBcnJheS5ieXRlT2Zmc2V0LCB0eXBlZEFycmF5Lmxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVUeXBlZEFycmF5O1xuIiwiLyoqXG4gKiBDb3BpZXMgdGhlIHZhbHVlcyBvZiBgc291cmNlYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBzb3VyY2UgVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXk9W11dIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyB0by5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBjb3B5QXJyYXkoc291cmNlLCBhcnJheSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHNvdXJjZS5sZW5ndGg7XG5cbiAgYXJyYXkgfHwgKGFycmF5ID0gQXJyYXkobGVuZ3RoKSk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbaW5kZXhdID0gc291cmNlW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weUFycmF5O1xuIiwidmFyIGFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYXNzaWduVmFsdWUnKSxcbiAgICBiYXNlQXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19iYXNlQXNzaWduVmFsdWUnKTtcblxuLyoqXG4gKiBDb3BpZXMgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IGlkZW50aWZpZXJzIHRvIGNvcHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb3BpZWQgdmFsdWVzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weU9iamVjdChzb3VyY2UsIHByb3BzLCBvYmplY3QsIGN1c3RvbWl6ZXIpIHtcbiAgdmFyIGlzTmV3ID0gIW9iamVjdDtcbiAgb2JqZWN0IHx8IChvYmplY3QgPSB7fSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuXG4gICAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgICAgPyBjdXN0b21pemVyKG9iamVjdFtrZXldLCBzb3VyY2Vba2V5XSwga2V5LCBvYmplY3QsIHNvdXJjZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG5ld1ZhbHVlID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIGlmIChpc05ldykge1xuICAgICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weU9iamVjdDtcbiIsInZhciBiYXNlUmVzdCA9IHJlcXVpcmUoJy4vX2Jhc2VSZXN0JyksXG4gICAgaXNJdGVyYXRlZUNhbGwgPSByZXF1aXJlKCcuL19pc0l0ZXJhdGVlQ2FsbCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiBsaWtlIGBfLmFzc2lnbmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFzc2lnbmVyIFRoZSBmdW5jdGlvbiB0byBhc3NpZ24gdmFsdWVzLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYXNzaWduZXIgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUFzc2lnbmVyKGFzc2lnbmVyKSB7XG4gIHJldHVybiBiYXNlUmVzdChmdW5jdGlvbihvYmplY3QsIHNvdXJjZXMpIHtcbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gc291cmNlcy5sZW5ndGgsXG4gICAgICAgIGN1c3RvbWl6ZXIgPSBsZW5ndGggPiAxID8gc291cmNlc1tsZW5ndGggLSAxXSA6IHVuZGVmaW5lZCxcbiAgICAgICAgZ3VhcmQgPSBsZW5ndGggPiAyID8gc291cmNlc1syXSA6IHVuZGVmaW5lZDtcblxuICAgIGN1c3RvbWl6ZXIgPSAoYXNzaWduZXIubGVuZ3RoID4gMyAmJiB0eXBlb2YgY3VzdG9taXplciA9PSAnZnVuY3Rpb24nKVxuICAgICAgPyAobGVuZ3RoLS0sIGN1c3RvbWl6ZXIpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChndWFyZCAmJiBpc0l0ZXJhdGVlQ2FsbChzb3VyY2VzWzBdLCBzb3VyY2VzWzFdLCBndWFyZCkpIHtcbiAgICAgIGN1c3RvbWl6ZXIgPSBsZW5ndGggPCAzID8gdW5kZWZpbmVkIDogY3VzdG9taXplcjtcbiAgICAgIGxlbmd0aCA9IDE7XG4gICAgfVxuICAgIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICB2YXIgc291cmNlID0gc291cmNlc1tpbmRleF07XG4gICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgIGFzc2lnbmVyKG9iamVjdCwgc291cmNlLCBpbmRleCwgY3VzdG9taXplcik7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUFzc2lnbmVyO1xuIiwiLyoqXG4gKiBDcmVhdGVzIGEgYmFzZSBmdW5jdGlvbiBmb3IgbWV0aG9kcyBsaWtlIGBfLmZvckluYCBhbmQgYF8uZm9yT3duYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBiYXNlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVCYXNlRm9yKGZyb21SaWdodCkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0LCBpdGVyYXRlZSwga2V5c0Z1bmMpIHtcbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgaXRlcmFibGUgPSBPYmplY3Qob2JqZWN0KSxcbiAgICAgICAgcHJvcHMgPSBrZXlzRnVuYyhvYmplY3QpLFxuICAgICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgIHZhciBrZXkgPSBwcm9wc1tmcm9tUmlnaHQgPyBsZW5ndGggOiArK2luZGV4XTtcbiAgICAgIGlmIChpdGVyYXRlZShpdGVyYWJsZVtrZXldLCBrZXksIGl0ZXJhYmxlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQmFzZUZvcjtcbiIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRQcm90b3R5cGU7XG4iLCJ2YXIgYmFzZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX2Jhc2VDcmVhdGUnKSxcbiAgICBnZXRQcm90b3R5cGUgPSByZXF1aXJlKCcuL19nZXRQcm90b3R5cGUnKSxcbiAgICBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gb2JqZWN0IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lT2JqZWN0KG9iamVjdCkge1xuICByZXR1cm4gKHR5cGVvZiBvYmplY3QuY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNQcm90b3R5cGUob2JqZWN0KSlcbiAgICA/IGJhc2VDcmVhdGUoZ2V0UHJvdG90eXBlKG9iamVjdCkpXG4gICAgOiB7fTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0Q2xvbmVPYmplY3Q7XG4iLCJ2YXIgZXEgPSByZXF1aXJlKCcuL2VxJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgdmFsdWUgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IGluZGV4IFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgaW5kZXggb3Iga2V5IGFyZ3VtZW50LlxuICogQHBhcmFtIHsqfSBvYmplY3QgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBvYmplY3QgYXJndW1lbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJdGVyYXRlZUNhbGwodmFsdWUsIGluZGV4LCBvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIGluZGV4O1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJ1xuICAgICAgICA/IChpc0FycmF5TGlrZShvYmplY3QpICYmIGlzSW5kZXgoaW5kZXgsIG9iamVjdC5sZW5ndGgpKVxuICAgICAgICA6ICh0eXBlID09ICdzdHJpbmcnICYmIGluZGV4IGluIG9iamVjdClcbiAgICAgICkge1xuICAgIHJldHVybiBlcShvYmplY3RbaW5kZXhdLCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSXRlcmF0ZWVDYWxsO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUHJvdG90eXBlO1xuIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2VcbiAqIFtgT2JqZWN0LmtleXNgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGV4Y2VwdCB0aGF0IGl0IGluY2x1ZGVzIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIG5hdGl2ZUtleXNJbihvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAob2JqZWN0ICE9IG51bGwpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5c0luO1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBub2RlVXRpbDtcbiIsIi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJBcmc7XG4iLCJ2YXIgYXBwbHkgPSByZXF1aXJlKCcuL19hcHBseScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXg7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUmVzdGAgd2hpY2ggdHJhbnNmb3JtcyB0aGUgcmVzdCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgcmVzdCBhcnJheSB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlclJlc3QoZnVuYywgc3RhcnQsIHRyYW5zZm9ybSkge1xuICBzdGFydCA9IG5hdGl2ZU1heChzdGFydCA9PT0gdW5kZWZpbmVkID8gKGZ1bmMubGVuZ3RoIC0gMSkgOiBzdGFydCwgMCk7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gbmF0aXZlTWF4KGFyZ3MubGVuZ3RoIC0gc3RhcnQsIDApLFxuICAgICAgICBhcnJheSA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgYXJyYXlbaW5kZXhdID0gYXJnc1tzdGFydCArIGluZGV4XTtcbiAgICB9XG4gICAgaW5kZXggPSAtMTtcbiAgICB2YXIgb3RoZXJBcmdzID0gQXJyYXkoc3RhcnQgKyAxKTtcbiAgICB3aGlsZSAoKytpbmRleCA8IHN0YXJ0KSB7XG4gICAgICBvdGhlckFyZ3NbaW5kZXhdID0gYXJnc1tpbmRleF07XG4gICAgfVxuICAgIG90aGVyQXJnc1tzdGFydF0gPSB0cmFuc2Zvcm0oYXJyYXkpO1xuICAgIHJldHVybiBhcHBseShmdW5jLCB0aGlzLCBvdGhlckFyZ3MpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJSZXN0O1xuIiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCwgdW5sZXNzIGBrZXlgIGlzIFwiX19wcm90b19fXCIuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzYWZlR2V0KG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBrZXkgPT0gJ19fcHJvdG9fXydcbiAgICA/IHVuZGVmaW5lZFxuICAgIDogb2JqZWN0W2tleV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2FmZUdldDtcbiIsInZhciBiYXNlU2V0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19iYXNlU2V0VG9TdHJpbmcnKSxcbiAgICBzaG9ydE91dCA9IHJlcXVpcmUoJy4vX3Nob3J0T3V0Jyk7XG5cbi8qKlxuICogU2V0cyB0aGUgYHRvU3RyaW5nYCBtZXRob2Qgb2YgYGZ1bmNgIHRvIHJldHVybiBgc3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3RyaW5nIFRoZSBgdG9TdHJpbmdgIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyBgZnVuY2AuXG4gKi9cbnZhciBzZXRUb1N0cmluZyA9IHNob3J0T3V0KGJhc2VTZXRUb1N0cmluZyk7XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0VG9TdHJpbmc7XG4iLCIvKiogVXNlZCB0byBkZXRlY3QgaG90IGZ1bmN0aW9ucyBieSBudW1iZXIgb2YgY2FsbHMgd2l0aGluIGEgc3BhbiBvZiBtaWxsaXNlY29uZHMuICovXG52YXIgSE9UX0NPVU5UID0gODAwLFxuICAgIEhPVF9TUEFOID0gMTY7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVOb3cgPSBEYXRlLm5vdztcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCdsbCBzaG9ydCBvdXQgYW5kIGludm9rZSBgaWRlbnRpdHlgIGluc3RlYWRcbiAqIG9mIGBmdW5jYCB3aGVuIGl0J3MgY2FsbGVkIGBIT1RfQ09VTlRgIG9yIG1vcmUgdGltZXMgaW4gYEhPVF9TUEFOYFxuICogbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byByZXN0cmljdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNob3J0YWJsZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gc2hvcnRPdXQoZnVuYykge1xuICB2YXIgY291bnQgPSAwLFxuICAgICAgbGFzdENhbGxlZCA9IDA7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdGFtcCA9IG5hdGl2ZU5vdygpLFxuICAgICAgICByZW1haW5pbmcgPSBIT1RfU1BBTiAtIChzdGFtcCAtIGxhc3RDYWxsZWQpO1xuXG4gICAgbGFzdENhbGxlZCA9IHN0YW1wO1xuICAgIGlmIChyZW1haW5pbmcgPiAwKSB7XG4gICAgICBpZiAoKytjb3VudCA+PSBIT1RfQ09VTlQpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3VtZW50c1swXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY291bnQgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gZnVuYy5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvcnRPdXQ7XG4iLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqL1xuZnVuY3Rpb24gc3RhY2tDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGU7XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tDbGVhcjtcbiIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICByZXN1bHQgPSBkYXRhWydkZWxldGUnXShrZXkpO1xuXG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0RlbGV0ZTtcbiIsIi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0dldDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhY2sgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0hhcyhrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tIYXM7XG4iLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKipcbiAqIFNldHMgdGhlIHN0YWNrIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIHN0YWNrIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzdGFja1NldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBkYXRhLl9fZGF0YV9fO1xuICAgIGlmICghTWFwIHx8IChwYWlycy5sZW5ndGggPCBMQVJHRV9BUlJBWV9TSVpFIC0gMSkpIHtcbiAgICAgIHBhaXJzLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICAgIHRoaXMuc2l6ZSA9ICsrZGF0YS5zaXplO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja1NldDtcbiIsIi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBgdmFsdWVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byByZXR1cm4gZnJvbSB0aGUgbmV3IGZ1bmN0aW9uLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY29uc3RhbnQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gXy50aW1lcygyLCBfLmNvbnN0YW50KHsgJ2EnOiAxIH0pKTtcbiAqXG4gKiBjb25zb2xlLmxvZyhvYmplY3RzKTtcbiAqIC8vID0+IFt7ICdhJzogMSB9LCB7ICdhJzogMSB9XVxuICpcbiAqIGNvbnNvbGUubG9nKG9iamVjdHNbMF0gPT09IG9iamVjdHNbMV0pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBjb25zdGFudCh2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnN0YW50O1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBmaXJzdCBhcmd1bWVudCBpdCByZWNlaXZlcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBBbnkgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyBgdmFsdWVgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqXG4gKiBjb25zb2xlLmxvZyhfLmlkZW50aXR5KG9iamVjdCkgPT09IG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpZGVudGl0eTtcbiIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlO1xuIiwidmFyIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5pc0FycmF5TGlrZWAgZXhjZXB0IHRoYXQgaXQgYWxzbyBjaGVja3MgaWYgYHZhbHVlYFxuICogaXMgYW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LWxpa2Ugb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheUxpa2VPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzQXJyYXlMaWtlKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZU9iamVjdDtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpLFxuICAgIHN0dWJGYWxzZSA9IHJlcXVpcmUoJy4vc3R1YkZhbHNlJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0J1ZmZlcjtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGdldFByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2dldFByb3RvdHlwZScpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGluZmVyIHRoZSBgT2JqZWN0YCBjb25zdHJ1Y3Rvci4gKi9cbnZhciBvYmplY3RDdG9yU3RyaW5nID0gZnVuY1RvU3RyaW5nLmNhbGwoT2JqZWN0KTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgdGhhdCBpcywgYW4gb2JqZWN0IGNyZWF0ZWQgYnkgdGhlXG4gKiBgT2JqZWN0YCBjb25zdHJ1Y3RvciBvciBvbmUgd2l0aCBhIGBbW1Byb3RvdHlwZV1dYCBvZiBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjguMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogfVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChuZXcgRm9vKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdCh7ICd4JzogMCwgJ3knOiAwIH0pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChPYmplY3QuY3JlYXRlKG51bGwpKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgfHwgYmFzZUdldFRhZyh2YWx1ZSkgIT0gb2JqZWN0VGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwcm90byA9IGdldFByb3RvdHlwZSh2YWx1ZSk7XG4gIGlmIChwcm90byA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBDdG9yID0gaGFzT3duUHJvcGVydHkuY2FsbChwcm90bywgJ2NvbnN0cnVjdG9yJykgJiYgcHJvdG8uY29uc3RydWN0b3I7XG4gIHJldHVybiB0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IgaW5zdGFuY2VvZiBDdG9yICYmXG4gICAgZnVuY1RvU3RyaW5nLmNhbGwoQ3RvcikgPT0gb2JqZWN0Q3RvclN0cmluZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1BsYWluT2JqZWN0O1xuIiwidmFyIGJhc2VJc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL19iYXNlSXNUeXBlZEFycmF5JyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc1R5cGVkQXJyYXk7XG4iLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5c0luID0gcmVxdWlyZSgnLi9fYmFzZUtleXNJbicpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzSW4obmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYicsICdjJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqL1xuZnVuY3Rpb24ga2V5c0luKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0LCB0cnVlKSA6IGJhc2VLZXlzSW4ob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzSW47XG4iLCJ2YXIgYmFzZU1lcmdlID0gcmVxdWlyZSgnLi9fYmFzZU1lcmdlJyksXG4gICAgY3JlYXRlQXNzaWduZXIgPSByZXF1aXJlKCcuL19jcmVhdGVBc3NpZ25lcicpO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uYXNzaWduYCBleGNlcHQgdGhhdCBpdCByZWN1cnNpdmVseSBtZXJnZXMgb3duIGFuZFxuICogaW5oZXJpdGVkIGVudW1lcmFibGUgc3RyaW5nIGtleWVkIHByb3BlcnRpZXMgb2Ygc291cmNlIG9iamVjdHMgaW50byB0aGVcbiAqIGRlc3RpbmF0aW9uIG9iamVjdC4gU291cmNlIHByb3BlcnRpZXMgdGhhdCByZXNvbHZlIHRvIGB1bmRlZmluZWRgIGFyZVxuICogc2tpcHBlZCBpZiBhIGRlc3RpbmF0aW9uIHZhbHVlIGV4aXN0cy4gQXJyYXkgYW5kIHBsYWluIG9iamVjdCBwcm9wZXJ0aWVzXG4gKiBhcmUgbWVyZ2VkIHJlY3Vyc2l2ZWx5LiBPdGhlciBvYmplY3RzIGFuZCB2YWx1ZSB0eXBlcyBhcmUgb3ZlcnJpZGRlbiBieVxuICogYXNzaWdubWVudC4gU291cmNlIG9iamVjdHMgYXJlIGFwcGxpZWQgZnJvbSBsZWZ0IHRvIHJpZ2h0LiBTdWJzZXF1ZW50XG4gKiBzb3VyY2VzIG92ZXJ3cml0ZSBwcm9wZXJ0eSBhc3NpZ25tZW50cyBvZiBwcmV2aW91cyBzb3VyY2VzLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBtdXRhdGVzIGBvYmplY3RgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC41LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7Li4uT2JqZWN0fSBbc291cmNlc10gVGhlIHNvdXJjZSBvYmplY3RzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHtcbiAqICAgJ2EnOiBbeyAnYic6IDIgfSwgeyAnZCc6IDQgfV1cbiAqIH07XG4gKlxuICogdmFyIG90aGVyID0ge1xuICogICAnYSc6IFt7ICdjJzogMyB9LCB7ICdlJzogNSB9XVxuICogfTtcbiAqXG4gKiBfLm1lcmdlKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4geyAnYSc6IFt7ICdiJzogMiwgJ2MnOiAzIH0sIHsgJ2QnOiA0LCAnZSc6IDUgfV0gfVxuICovXG52YXIgbWVyZ2UgPSBjcmVhdGVBc3NpZ25lcihmdW5jdGlvbihvYmplY3QsIHNvdXJjZSwgc3JjSW5kZXgpIHtcbiAgYmFzZU1lcmdlKG9iamVjdCwgc291cmNlLCBzcmNJbmRleCk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBtZXJnZTtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViRmFsc2U7XG4iLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuL2tleXNJbicpO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBwbGFpbiBvYmplY3QgZmxhdHRlbmluZyBpbmhlcml0ZWQgZW51bWVyYWJsZSBzdHJpbmdcbiAqIGtleWVkIHByb3BlcnRpZXMgb2YgYHZhbHVlYCB0byBvd24gcHJvcGVydGllcyBvZiB0aGUgcGxhaW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY29udmVydGVkIHBsYWluIG9iamVjdC5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5hc3NpZ24oeyAnYSc6IDEgfSwgbmV3IEZvbyk7XG4gKiAvLyA9PiB7ICdhJzogMSwgJ2InOiAyIH1cbiAqXG4gKiBfLmFzc2lnbih7ICdhJzogMSB9LCBfLnRvUGxhaW5PYmplY3QobmV3IEZvbykpO1xuICogLy8gPT4geyAnYSc6IDEsICdiJzogMiwgJ2MnOiAzIH1cbiAqL1xuZnVuY3Rpb24gdG9QbGFpbk9iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gY29weU9iamVjdCh2YWx1ZSwga2V5c0luKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9QbGFpbk9iamVjdDtcbiIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFRyaWdnZXIgZnJvbSAncmMtdHJpZ2dlcic7XG5pbXBvcnQgcGxhY2VtZW50cyBmcm9tICcuL3BsYWNlbWVudHMnO1xuXG52YXIgRHJvcGRvd24gPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRHJvcGRvd24sIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIERyb3Bkb3duKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERyb3Bkb3duKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX2luaXRpYWxpc2VQcm9wcy5jYWxsKF90aGlzKTtcblxuICAgIGlmICgndmlzaWJsZScgaW4gcHJvcHMpIHtcbiAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICB2aXNpYmxlOiBwcm9wcy52aXNpYmxlXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgdmlzaWJsZTogcHJvcHMuZGVmYXVsdFZpc2libGVcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIERyb3Bkb3duLnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhfcmVmKSB7XG4gICAgdmFyIHZpc2libGUgPSBfcmVmLnZpc2libGU7XG5cbiAgICBpZiAodmlzaWJsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdmlzaWJsZTogdmlzaWJsZVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIERyb3Bkb3duLnByb3RvdHlwZS5nZXRNZW51RWxlbWVudCA9IGZ1bmN0aW9uIGdldE1lbnVFbGVtZW50KCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBvdmVybGF5ID0gX3Byb3BzLm92ZXJsYXksXG4gICAgICAgIHByZWZpeENscyA9IF9wcm9wcy5wcmVmaXhDbHM7XG5cbiAgICB2YXIgZXh0cmFPdmVybGF5UHJvcHMgPSB7XG4gICAgICBwcmVmaXhDbHM6IHByZWZpeENscyArICctbWVudScsXG4gICAgICBvbkNsaWNrOiB0aGlzLm9uQ2xpY2tcbiAgICB9O1xuICAgIGlmICh0eXBlb2Ygb3ZlcmxheS50eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgZGVsZXRlIGV4dHJhT3ZlcmxheVByb3BzLnByZWZpeENscztcbiAgICB9XG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChvdmVybGF5LCBleHRyYU92ZXJsYXlQcm9wcyk7XG4gIH07XG5cbiAgRHJvcGRvd24ucHJvdG90eXBlLmdldFBvcHVwRG9tTm9kZSA9IGZ1bmN0aW9uIGdldFBvcHVwRG9tTm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy50cmlnZ2VyLmdldFBvcHVwRG9tTm9kZSgpO1xuICB9O1xuXG4gIERyb3Bkb3duLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICBwcmVmaXhDbHMgPSBfcHJvcHMyLnByZWZpeENscyxcbiAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMyLmNoaWxkcmVuLFxuICAgICAgICB0cmFuc2l0aW9uTmFtZSA9IF9wcm9wczIudHJhbnNpdGlvbk5hbWUsXG4gICAgICAgIGFuaW1hdGlvbiA9IF9wcm9wczIuYW5pbWF0aW9uLFxuICAgICAgICBhbGlnbiA9IF9wcm9wczIuYWxpZ24sXG4gICAgICAgIHBsYWNlbWVudCA9IF9wcm9wczIucGxhY2VtZW50LFxuICAgICAgICBnZXRQb3B1cENvbnRhaW5lciA9IF9wcm9wczIuZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICAgIHNob3dBY3Rpb24gPSBfcHJvcHMyLnNob3dBY3Rpb24sXG4gICAgICAgIGhpZGVBY3Rpb24gPSBfcHJvcHMyLmhpZGVBY3Rpb24sXG4gICAgICAgIG92ZXJsYXlDbGFzc05hbWUgPSBfcHJvcHMyLm92ZXJsYXlDbGFzc05hbWUsXG4gICAgICAgIG92ZXJsYXlTdHlsZSA9IF9wcm9wczIub3ZlcmxheVN0eWxlLFxuICAgICAgICB0cmlnZ2VyID0gX3Byb3BzMi50cmlnZ2VyLFxuICAgICAgICBvdGhlclByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wczIsIFsncHJlZml4Q2xzJywgJ2NoaWxkcmVuJywgJ3RyYW5zaXRpb25OYW1lJywgJ2FuaW1hdGlvbicsICdhbGlnbicsICdwbGFjZW1lbnQnLCAnZ2V0UG9wdXBDb250YWluZXInLCAnc2hvd0FjdGlvbicsICdoaWRlQWN0aW9uJywgJ292ZXJsYXlDbGFzc05hbWUnLCAnb3ZlcmxheVN0eWxlJywgJ3RyaWdnZXInXSk7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIFRyaWdnZXIsXG4gICAgICBfZXh0ZW5kcyh7fSwgb3RoZXJQcm9wcywge1xuICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgcmVmOiB0aGlzLnNhdmVUcmlnZ2VyLFxuICAgICAgICBwb3B1cENsYXNzTmFtZTogb3ZlcmxheUNsYXNzTmFtZSxcbiAgICAgICAgcG9wdXBTdHlsZTogb3ZlcmxheVN0eWxlLFxuICAgICAgICBidWlsdGluUGxhY2VtZW50czogcGxhY2VtZW50cyxcbiAgICAgICAgYWN0aW9uOiB0cmlnZ2VyLFxuICAgICAgICBzaG93QWN0aW9uOiBzaG93QWN0aW9uLFxuICAgICAgICBoaWRlQWN0aW9uOiBoaWRlQWN0aW9uLFxuICAgICAgICBwb3B1cFBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgICBwb3B1cEFsaWduOiBhbGlnbixcbiAgICAgICAgcG9wdXBUcmFuc2l0aW9uTmFtZTogdHJhbnNpdGlvbk5hbWUsXG4gICAgICAgIHBvcHVwQW5pbWF0aW9uOiBhbmltYXRpb24sXG4gICAgICAgIHBvcHVwVmlzaWJsZTogdGhpcy5zdGF0ZS52aXNpYmxlLFxuICAgICAgICBhZnRlclBvcHVwVmlzaWJsZUNoYW5nZTogdGhpcy5hZnRlclZpc2libGVDaGFuZ2UsXG4gICAgICAgIHBvcHVwOiB0aGlzLmdldE1lbnVFbGVtZW50KCksXG4gICAgICAgIG9uUG9wdXBWaXNpYmxlQ2hhbmdlOiB0aGlzLm9uVmlzaWJsZUNoYW5nZSxcbiAgICAgICAgZ2V0UG9wdXBDb250YWluZXI6IGdldFBvcHVwQ29udGFpbmVyXG4gICAgICB9KSxcbiAgICAgIGNoaWxkcmVuXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gRHJvcGRvd247XG59KENvbXBvbmVudCk7XG5cbkRyb3Bkb3duLnByb3BUeXBlcyA9IHtcbiAgbWluT3ZlcmxheVdpZHRoTWF0Y2hUcmlnZ2VyOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25WaXNpYmxlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25PdmVybGF5Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBwcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICB0cmFuc2l0aW9uTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb3ZlcmxheUNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYW5pbWF0aW9uOiBQcm9wVHlwZXMuYW55LFxuICBhbGlnbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgb3ZlcmxheVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBwbGFjZW1lbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG92ZXJsYXk6IFByb3BUeXBlcy5ub2RlLFxuICB0cmlnZ2VyOiBQcm9wVHlwZXMuYXJyYXksXG4gIHNob3dBY3Rpb246IFByb3BUeXBlcy5hcnJheSxcbiAgaGlkZUFjdGlvbjogUHJvcFR5cGVzLmFycmF5LFxuICBnZXRQb3B1cENvbnRhaW5lcjogUHJvcFR5cGVzLmZ1bmMsXG4gIHZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICBkZWZhdWx0VmlzaWJsZTogUHJvcFR5cGVzLmJvb2xcbn07XG5Ecm9wZG93bi5kZWZhdWx0UHJvcHMgPSB7XG4gIG1pbk92ZXJsYXlXaWR0aE1hdGNoVHJpZ2dlcjogdHJ1ZSxcbiAgcHJlZml4Q2xzOiAncmMtZHJvcGRvd24nLFxuICB0cmlnZ2VyOiBbJ2hvdmVyJ10sXG4gIHNob3dBY3Rpb246IFtdLFxuICBoaWRlQWN0aW9uOiBbXSxcbiAgb3ZlcmxheUNsYXNzTmFtZTogJycsXG4gIG92ZXJsYXlTdHlsZToge30sXG4gIGRlZmF1bHRWaXNpYmxlOiBmYWxzZSxcbiAgb25WaXNpYmxlQ2hhbmdlOiBmdW5jdGlvbiBvblZpc2libGVDaGFuZ2UoKSB7fSxcblxuICBwbGFjZW1lbnQ6ICdib3R0b21MZWZ0J1xufTtcblxudmFyIF9pbml0aWFsaXNlUHJvcHMgPSBmdW5jdGlvbiBfaW5pdGlhbGlzZVByb3BzKCkge1xuICB2YXIgX3RoaXMyID0gdGhpcztcblxuICB0aGlzLm9uQ2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBwcm9wcyA9IF90aGlzMi5wcm9wcztcbiAgICB2YXIgb3ZlcmxheVByb3BzID0gcHJvcHMub3ZlcmxheS5wcm9wcztcbiAgICAvLyBkbyBubyBjYWxsIG9uVmlzaWJsZUNoYW5nZSwgaWYgeW91IG5lZWQgY2xpY2sgdG8gaGlkZSwgdXNlIG9uQ2xpY2sgYW5kIGNvbnRyb2wgdmlzaWJsZVxuICAgIGlmICghKCd2aXNpYmxlJyBpbiBwcm9wcykpIHtcbiAgICAgIF90aGlzMi5zZXRTdGF0ZSh7XG4gICAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHByb3BzLm9uT3ZlcmxheUNsaWNrKSB7XG4gICAgICBwcm9wcy5vbk92ZXJsYXlDbGljayhlKTtcbiAgICB9XG4gICAgaWYgKG92ZXJsYXlQcm9wcy5vbkNsaWNrKSB7XG4gICAgICBvdmVybGF5UHJvcHMub25DbGljayhlKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5vblZpc2libGVDaGFuZ2UgPSBmdW5jdGlvbiAodmlzaWJsZSkge1xuICAgIHZhciBwcm9wcyA9IF90aGlzMi5wcm9wcztcbiAgICBpZiAoISgndmlzaWJsZScgaW4gcHJvcHMpKSB7XG4gICAgICBfdGhpczIuc2V0U3RhdGUoe1xuICAgICAgICB2aXNpYmxlOiB2aXNpYmxlXG4gICAgICB9KTtcbiAgICB9XG4gICAgcHJvcHMub25WaXNpYmxlQ2hhbmdlKHZpc2libGUpO1xuICB9O1xuXG4gIHRoaXMuYWZ0ZXJWaXNpYmxlQ2hhbmdlID0gZnVuY3Rpb24gKHZpc2libGUpIHtcbiAgICBpZiAodmlzaWJsZSAmJiBfdGhpczIucHJvcHMubWluT3ZlcmxheVdpZHRoTWF0Y2hUcmlnZ2VyKSB7XG4gICAgICB2YXIgb3ZlcmxheU5vZGUgPSBfdGhpczIuZ2V0UG9wdXBEb21Ob2RlKCk7XG4gICAgICB2YXIgcm9vdE5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZShfdGhpczIpO1xuICAgICAgaWYgKHJvb3ROb2RlICYmIG92ZXJsYXlOb2RlICYmIHJvb3ROb2RlLm9mZnNldFdpZHRoID4gb3ZlcmxheU5vZGUub2Zmc2V0V2lkdGgpIHtcbiAgICAgICAgb3ZlcmxheU5vZGUuc3R5bGUubWluV2lkdGggPSByb290Tm9kZS5vZmZzZXRXaWR0aCArICdweCc7XG4gICAgICAgIGlmIChfdGhpczIudHJpZ2dlciAmJiBfdGhpczIudHJpZ2dlci5fY29tcG9uZW50ICYmIF90aGlzMi50cmlnZ2VyLl9jb21wb25lbnQuYWxpZ25JbnN0YW5jZSkge1xuICAgICAgICAgIF90aGlzMi50cmlnZ2VyLl9jb21wb25lbnQuYWxpZ25JbnN0YW5jZS5mb3JjZUFsaWduKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdGhpcy5zYXZlVHJpZ2dlciA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgX3RoaXMyLnRyaWdnZXIgPSBub2RlO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247IiwiaW1wb3J0IERyb3Bkb3duIGZyb20gJy4vRHJvcGRvd24nO1xuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd247IiwidmFyIGF1dG9BZGp1c3RPdmVyZmxvdyA9IHtcbiAgYWRqdXN0WDogMSxcbiAgYWRqdXN0WTogMVxufTtcblxudmFyIHRhcmdldE9mZnNldCA9IFswLCAwXTtcblxuZXhwb3J0IHZhciBwbGFjZW1lbnRzID0ge1xuICB0b3BMZWZ0OiB7XG4gICAgcG9pbnRzOiBbJ2JsJywgJ3RsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCAtNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgdG9wQ2VudGVyOiB7XG4gICAgcG9pbnRzOiBbJ2JjJywgJ3RjJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCAtNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgdG9wUmlnaHQ6IHtcbiAgICBwb2ludHM6IFsnYnInLCAndHInXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIC00XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICBib3R0b21MZWZ0OiB7XG4gICAgcG9pbnRzOiBbJ3RsJywgJ2JsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCA0XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICBib3R0b21DZW50ZXI6IHtcbiAgICBwb2ludHM6IFsndGMnLCAnYmMnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIDRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIGJvdHRvbVJpZ2h0OiB7XG4gICAgcG9pbnRzOiBbJ3RyJywgJ2JyJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCA0XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwbGFjZW1lbnRzOyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgWkVSTzogNDgsXG4gIE5JTkU6IDU3LFxuXG4gIE5VTVBBRF9aRVJPOiA5NixcbiAgTlVNUEFEX05JTkU6IDEwNSxcblxuICBCQUNLU1BBQ0U6IDgsXG4gIERFTEVURTogNDYsXG4gIEVOVEVSOiAxMyxcblxuICBBUlJPV19VUDogMzgsXG4gIEFSUk9XX0RPV046IDQwXG59OyIsImltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBLRVlDT0RFIGZyb20gJy4vS2V5Q29kZSc7XG5cbnZhciBPcHRpb25zID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKE9wdGlvbnMsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE9wdGlvbnMocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgT3B0aW9ucyk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoT3B0aW9ucy5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE9wdGlvbnMpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5idWlsZE9wdGlvblRleHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSArICcgJyArIF90aGlzLnByb3BzLmxvY2FsZS5pdGVtc19wZXJfcGFnZTtcbiAgICB9O1xuXG4gICAgX3RoaXMuY2hhbmdlU2l6ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgX3RoaXMucHJvcHMuY2hhbmdlU2l6ZShOdW1iZXIodmFsdWUpKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZ29JbnB1dFRleHQ6IGUudGFyZ2V0LnZhbHVlXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ28gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHZhbCA9IF90aGlzLnN0YXRlLmdvSW5wdXRUZXh0O1xuICAgICAgaWYgKHZhbCA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFsID0gaXNOYU4odmFsKSA/IF90aGlzLnByb3BzLmN1cnJlbnQgOiBOdW1iZXIodmFsKTtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IEtFWUNPREUuRU5URVIgfHwgZS50eXBlID09PSAnY2xpY2snKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBnb0lucHV0VGV4dDogJydcbiAgICAgICAgfSk7XG4gICAgICAgIF90aGlzLnByb3BzLnF1aWNrR28odmFsKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBnb0lucHV0VGV4dDogJydcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhPcHRpb25zLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgICAgdmFyIGxvY2FsZSA9IHByb3BzLmxvY2FsZTtcbiAgICAgIHZhciBwcmVmaXhDbHMgPSBwcm9wcy5yb290UHJlZml4Q2xzICsgJy1vcHRpb25zJztcbiAgICAgIHZhciBjaGFuZ2VTaXplID0gcHJvcHMuY2hhbmdlU2l6ZTtcbiAgICAgIHZhciBxdWlja0dvID0gcHJvcHMucXVpY2tHbztcbiAgICAgIHZhciBnb0J1dHRvbiA9IHByb3BzLmdvQnV0dG9uO1xuICAgICAgdmFyIGJ1aWxkT3B0aW9uVGV4dCA9IHByb3BzLmJ1aWxkT3B0aW9uVGV4dCB8fCB0aGlzLmJ1aWxkT3B0aW9uVGV4dDtcbiAgICAgIHZhciBTZWxlY3QgPSBwcm9wcy5zZWxlY3RDb21wb25lbnRDbGFzcztcbiAgICAgIHZhciBjaGFuZ2VTZWxlY3QgPSBudWxsO1xuICAgICAgdmFyIGdvSW5wdXQgPSBudWxsO1xuICAgICAgdmFyIGdvdG9CdXR0b24gPSBudWxsO1xuXG4gICAgICBpZiAoIShjaGFuZ2VTaXplIHx8IHF1aWNrR28pKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hhbmdlU2l6ZSAmJiBTZWxlY3QpIHtcbiAgICAgICAgdmFyIE9wdGlvbiA9IFNlbGVjdC5PcHRpb247XG4gICAgICAgIHZhciBwYWdlU2l6ZSA9IHByb3BzLnBhZ2VTaXplIHx8IHByb3BzLnBhZ2VTaXplT3B0aW9uc1swXTtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBwcm9wcy5wYWdlU2l6ZU9wdGlvbnMubWFwKGZ1bmN0aW9uIChvcHQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIE9wdGlvbixcbiAgICAgICAgICAgIHsga2V5OiBpLCB2YWx1ZTogb3B0IH0sXG4gICAgICAgICAgICBidWlsZE9wdGlvblRleHQob3B0KVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNoYW5nZVNlbGVjdCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgU2VsZWN0LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHByZWZpeENsczogcHJvcHMuc2VsZWN0UHJlZml4Q2xzLFxuICAgICAgICAgICAgc2hvd1NlYXJjaDogZmFsc2UsXG4gICAgICAgICAgICBjbGFzc05hbWU6IHByZWZpeENscyArICctc2l6ZS1jaGFuZ2VyJyxcbiAgICAgICAgICAgIG9wdGlvbkxhYmVsUHJvcDogJ2NoaWxkcmVuJyxcbiAgICAgICAgICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZTogcGFnZVNpemUudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLmNoYW5nZVNpemUsXG4gICAgICAgICAgICBnZXRQb3B1cENvbnRhaW5lcjogZnVuY3Rpb24gZ2V0UG9wdXBDb250YWluZXIodHJpZ2dlck5vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRyaWdnZXJOb2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvcHRpb25zXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChxdWlja0dvKSB7XG4gICAgICAgIGlmIChnb0J1dHRvbikge1xuICAgICAgICAgIGlmICh0eXBlb2YgZ29CdXR0b24gPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgZ290b0J1dHRvbiA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdidXR0b24nLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgb25DbGljazogdGhpcy5nbyxcbiAgICAgICAgICAgICAgICBvbktleVVwOiB0aGlzLmdvXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGxvY2FsZS5qdW1wX3RvX2NvbmZpcm1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdvdG9CdXR0b24gPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiB0aGlzLmdvLFxuICAgICAgICAgICAgICAgIG9uS2V5VXA6IHRoaXMuZ29cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZ29CdXR0b25cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGdvSW5wdXQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLXF1aWNrLWp1bXBlcicgfSxcbiAgICAgICAgICBsb2NhbGUuanVtcF90byxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgIHZhbHVlOiBzdGF0ZS5nb0lucHV0VGV4dCxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLmhhbmRsZUNoYW5nZSxcbiAgICAgICAgICAgIG9uS2V5VXA6IHRoaXMuZ29cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBsb2NhbGUucGFnZSxcbiAgICAgICAgICBnb3RvQnV0dG9uXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnbGknLFxuICAgICAgICB7IGNsYXNzTmFtZTogJycgKyBwcmVmaXhDbHMgfSxcbiAgICAgICAgY2hhbmdlU2VsZWN0LFxuICAgICAgICBnb0lucHV0XG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBPcHRpb25zO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5PcHRpb25zLnByb3BUeXBlcyA9IHtcbiAgY2hhbmdlU2l6ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHF1aWNrR286IFByb3BUeXBlcy5mdW5jLFxuICBzZWxlY3RDb21wb25lbnRDbGFzczogUHJvcFR5cGVzLmZ1bmMsXG4gIGN1cnJlbnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIHBhZ2VTaXplT3B0aW9uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gIHBhZ2VTaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICBidWlsZE9wdGlvblRleHQ6IFByb3BUeXBlcy5mdW5jLFxuICBsb2NhbGU6IFByb3BUeXBlcy5vYmplY3Rcbn07XG5PcHRpb25zLmRlZmF1bHRQcm9wcyA9IHtcbiAgcGFnZVNpemVPcHRpb25zOiBbJzEwJywgJzIwJywgJzMwJywgJzQwJ11cbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgT3B0aW9uczsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxudmFyIFBhZ2VyID0gZnVuY3Rpb24gUGFnZXIocHJvcHMpIHtcbiAgdmFyIHByZWZpeENscyA9IHByb3BzLnJvb3RQcmVmaXhDbHMgKyAnLWl0ZW0nO1xuICB2YXIgY2xzID0gcHJlZml4Q2xzICsgJyAnICsgcHJlZml4Q2xzICsgJy0nICsgcHJvcHMucGFnZTtcblxuICBpZiAocHJvcHMuYWN0aXZlKSB7XG4gICAgY2xzID0gY2xzICsgJyAnICsgcHJlZml4Q2xzICsgJy1hY3RpdmUnO1xuICB9XG5cbiAgaWYgKHByb3BzLmNsYXNzTmFtZSkge1xuICAgIGNscyA9IGNscyArICcgJyArIHByb3BzLmNsYXNzTmFtZTtcbiAgfVxuXG4gIHZhciBoYW5kbGVDbGljayA9IGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xuICAgIHByb3BzLm9uQ2xpY2socHJvcHMucGFnZSk7XG4gIH07XG5cbiAgdmFyIGhhbmRsZUtleVByZXNzID0gZnVuY3Rpb24gaGFuZGxlS2V5UHJlc3MoZSkge1xuICAgIHByb3BzLm9uS2V5UHJlc3MoZSwgcHJvcHMub25DbGljaywgcHJvcHMucGFnZSk7XG4gIH07XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgJ2xpJyxcbiAgICB7XG4gICAgICB0aXRsZTogcHJvcHMuc2hvd1RpdGxlID8gcHJvcHMucGFnZSA6IG51bGwsXG4gICAgICBjbGFzc05hbWU6IGNscyxcbiAgICAgIG9uQ2xpY2s6IGhhbmRsZUNsaWNrLFxuICAgICAgb25LZXlQcmVzczogaGFuZGxlS2V5UHJlc3MsXG4gICAgICB0YWJJbmRleDogJzAnXG4gICAgfSxcbiAgICBwcm9wcy5pdGVtUmVuZGVyKHByb3BzLnBhZ2UsICdwYWdlJywgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICdhJyxcbiAgICAgIG51bGwsXG4gICAgICBwcm9wcy5wYWdlXG4gICAgKSlcbiAgKTtcbn07XG5cblBhZ2VyLnByb3BUeXBlcyA9IHtcbiAgcGFnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgYWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgbGFzdDogUHJvcFR5cGVzLmJvb2wsXG4gIGxvY2FsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzaG93VGl0bGU6IFByb3BUeXBlcy5ib29sLFxuICByb290UHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25LZXlQcmVzczogUHJvcFR5cGVzLmZ1bmMsXG4gIGl0ZW1SZW5kZXI6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlcjsiLCJpbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUGFnZXIgZnJvbSAnLi9QYWdlcic7XG5pbXBvcnQgT3B0aW9ucyBmcm9tICcuL09wdGlvbnMnO1xuaW1wb3J0IEtFWUNPREUgZnJvbSAnLi9LZXlDb2RlJztcbmltcG9ydCBMT0NBTEUgZnJvbSAnLi9sb2NhbGUvemhfQ04nO1xuXG5mdW5jdGlvbiBub29wKCkge31cblxuZnVuY3Rpb24gaXNJbnRlZ2VyKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIGlzRmluaXRlKHZhbHVlKSAmJiBNYXRoLmZsb29yKHZhbHVlKSA9PT0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRJdGVtUmVuZGVyKHBhZ2UsIHR5cGUsIGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbnZhciBQYWdpbmF0aW9uID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFBhZ2luYXRpb24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFBhZ2luYXRpb24ocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGFnaW5hdGlvbik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUGFnaW5hdGlvbi5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFBhZ2luYXRpb24pKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfaW5pdGlhbGlzZVByb3BzLmNhbGwoX3RoaXMpO1xuXG4gICAgdmFyIGhhc09uQ2hhbmdlID0gcHJvcHMub25DaGFuZ2UgIT09IG5vb3A7XG4gICAgdmFyIGhhc0N1cnJlbnQgPSAnY3VycmVudCcgaW4gcHJvcHM7XG4gICAgaWYgKGhhc0N1cnJlbnQgJiYgIWhhc09uQ2hhbmdlKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1dhcm5pbmc6IFlvdSBwcm92aWRlZCBhIGBjdXJyZW50YCBwcm9wIHRvIGEgUGFnaW5hdGlvbiBjb21wb25lbnQgd2l0aG91dCBhbiBgb25DaGFuZ2VgIGhhbmRsZXIuIFRoaXMgd2lsbCByZW5kZXIgYSByZWFkLW9ubHkgY29tcG9uZW50LicpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgfVxuXG4gICAgdmFyIGN1cnJlbnQgPSBwcm9wcy5kZWZhdWx0Q3VycmVudDtcbiAgICBpZiAoJ2N1cnJlbnQnIGluIHByb3BzKSB7XG4gICAgICBjdXJyZW50ID0gcHJvcHMuY3VycmVudDtcbiAgICB9XG5cbiAgICB2YXIgcGFnZVNpemUgPSBwcm9wcy5kZWZhdWx0UGFnZVNpemU7XG4gICAgaWYgKCdwYWdlU2l6ZScgaW4gcHJvcHMpIHtcbiAgICAgIHBhZ2VTaXplID0gcHJvcHMucGFnZVNpemU7XG4gICAgfVxuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBjdXJyZW50OiBjdXJyZW50LFxuICAgICAgY3VycmVudElucHV0VmFsdWU6IGN1cnJlbnQsXG4gICAgICBwYWdlU2l6ZTogcGFnZVNpemVcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQYWdpbmF0aW9uLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgaWYgKCdjdXJyZW50JyBpbiBuZXh0UHJvcHMpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY3VycmVudDogbmV4dFByb3BzLmN1cnJlbnQsXG4gICAgICAgICAgY3VycmVudElucHV0VmFsdWU6IG5leHRQcm9wcy5jdXJyZW50XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoJ3BhZ2VTaXplJyBpbiBuZXh0UHJvcHMpIHtcbiAgICAgICAgdmFyIG5ld1N0YXRlID0ge307XG4gICAgICAgIHZhciBjdXJyZW50ID0gdGhpcy5zdGF0ZS5jdXJyZW50O1xuICAgICAgICB2YXIgbmV3Q3VycmVudCA9IHRoaXMuY2FsY3VsYXRlUGFnZShuZXh0UHJvcHMucGFnZVNpemUpO1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudCA+IG5ld0N1cnJlbnQgPyBuZXdDdXJyZW50IDogY3VycmVudDtcbiAgICAgICAgaWYgKCEoJ2N1cnJlbnQnIGluIG5leHRQcm9wcykpIHtcbiAgICAgICAgICBuZXdTdGF0ZS5jdXJyZW50ID0gY3VycmVudDtcbiAgICAgICAgICBuZXdTdGF0ZS5jdXJyZW50SW5wdXRWYWx1ZSA9IGN1cnJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgbmV3U3RhdGUucGFnZVNpemUgPSBuZXh0UHJvcHMucGFnZVNpemU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgLy8gV2hlbiBjdXJyZW50IHBhZ2UgY2hhbmdlLCBmaXggZm9jdXNlZCBzdHlsZSBvZiBwcmV2IGl0ZW1cbiAgICAgIC8vIEEgaGFja3kgc29sdXRpb24gb2YgaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvODk0OFxuICAgICAgdmFyIHByZWZpeENscyA9IHRoaXMucHJvcHMucHJlZml4Q2xzO1xuXG4gICAgICBpZiAocHJldlN0YXRlLmN1cnJlbnQgIT09IHRoaXMuc3RhdGUuY3VycmVudCAmJiB0aGlzLnBhZ2luYXRpb25Ob2RlKSB7XG4gICAgICAgIHZhciBsYXN0Q3VycmVudE5vZGUgPSB0aGlzLnBhZ2luYXRpb25Ob2RlLnF1ZXJ5U2VsZWN0b3IoJy4nICsgcHJlZml4Q2xzICsgJy1pdGVtLScgKyBwcmV2U3RhdGUuY3VycmVudCk7XG4gICAgICAgIGlmIChsYXN0Q3VycmVudE5vZGUgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gbGFzdEN1cnJlbnROb2RlKSB7XG4gICAgICAgICAgbGFzdEN1cnJlbnROb2RlLmJsdXIoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEp1bXBQcmV2UGFnZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEp1bXBQcmV2UGFnZSgpIHtcbiAgICAgIHJldHVybiBNYXRoLm1heCgxLCB0aGlzLnN0YXRlLmN1cnJlbnQgLSAodGhpcy5wcm9wcy5zaG93TGVzc0l0ZW1zID8gMyA6IDUpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRKdW1wTmV4dFBhZ2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRKdW1wTmV4dFBhZ2UoKSB7XG4gICAgICByZXR1cm4gTWF0aC5taW4odGhpcy5jYWxjdWxhdGVQYWdlKCksIHRoaXMuc3RhdGUuY3VycmVudCArICh0aGlzLnByb3BzLnNob3dMZXNzSXRlbXMgPyAzIDogNSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEp1bXBQcmV2UGFnZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEp1bXBQcmV2UGFnZSgpIHtcbiAgICAgIHJldHVybiBNYXRoLm1heCgxLCB0aGlzLnN0YXRlLmN1cnJlbnQgLSAodGhpcy5wcm9wcy5zaG93TGVzc0l0ZW1zID8gMyA6IDUpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRKdW1wTmV4dFBhZ2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRKdW1wTmV4dFBhZ2UoKSB7XG4gICAgICByZXR1cm4gTWF0aC5taW4odGhpcy5jYWxjdWxhdGVQYWdlKCksIHRoaXMuc3RhdGUuY3VycmVudCArICh0aGlzLnByb3BzLnNob3dMZXNzSXRlbXMgPyAzIDogNSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIC8vIFdoZW4gaGlkZU9uU2luZ2xlUGFnZSBpcyB0cnVlIGFuZCB0aGVyZSBpcyBvbmx5IDEgcGFnZSwgaGlkZSB0aGUgcGFnZXJcbiAgICAgIGlmICh0aGlzLnByb3BzLmhpZGVPblNpbmdsZVBhZ2UgPT09IHRydWUgJiYgdGhpcy5wcm9wcy50b3RhbCA8PSB0aGlzLnN0YXRlLnBhZ2VTaXplKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIGxvY2FsZSA9IHByb3BzLmxvY2FsZTtcblxuICAgICAgdmFyIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscztcbiAgICAgIHZhciBhbGxQYWdlcyA9IHRoaXMuY2FsY3VsYXRlUGFnZSgpO1xuICAgICAgdmFyIHBhZ2VyTGlzdCA9IFtdO1xuICAgICAgdmFyIGp1bXBQcmV2ID0gbnVsbDtcbiAgICAgIHZhciBqdW1wTmV4dCA9IG51bGw7XG4gICAgICB2YXIgZmlyc3RQYWdlciA9IG51bGw7XG4gICAgICB2YXIgbGFzdFBhZ2VyID0gbnVsbDtcbiAgICAgIHZhciBnb3RvQnV0dG9uID0gbnVsbDtcblxuICAgICAgdmFyIGdvQnV0dG9uID0gcHJvcHMuc2hvd1F1aWNrSnVtcGVyICYmIHByb3BzLnNob3dRdWlja0p1bXBlci5nb0J1dHRvbjtcbiAgICAgIHZhciBwYWdlQnVmZmVyU2l6ZSA9IHByb3BzLnNob3dMZXNzSXRlbXMgPyAxIDogMjtcbiAgICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIGN1cnJlbnQgPSBfc3RhdGUuY3VycmVudCxcbiAgICAgICAgICBwYWdlU2l6ZSA9IF9zdGF0ZS5wYWdlU2l6ZTtcblxuXG4gICAgICB2YXIgcHJldlBhZ2UgPSBjdXJyZW50IC0gMSA+IDAgPyBjdXJyZW50IC0gMSA6IDA7XG4gICAgICB2YXIgbmV4dFBhZ2UgPSBjdXJyZW50ICsgMSA8IGFsbFBhZ2VzID8gY3VycmVudCArIDEgOiBhbGxQYWdlcztcblxuICAgICAgaWYgKHByb3BzLnNpbXBsZSkge1xuICAgICAgICBpZiAoZ29CdXR0b24pIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGdvQnV0dG9uID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIGdvdG9CdXR0b24gPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnYnV0dG9uJyxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlR29UTyxcbiAgICAgICAgICAgICAgICBvbktleVVwOiB0aGlzLmhhbmRsZUdvVE9cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbG9jYWxlLmp1bXBfdG9fY29uZmlybVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ290b0J1dHRvbiA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlR29UTyxcbiAgICAgICAgICAgICAgICBvbktleVVwOiB0aGlzLmhhbmRsZUdvVE9cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZ29CdXR0b25cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGdvdG9CdXR0b24gPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2xpJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6IHByb3BzLnNob3dUaXRsZSA/ICcnICsgbG9jYWxlLmp1bXBfdG8gKyB0aGlzLnN0YXRlLmN1cnJlbnQgKyAnLycgKyBhbGxQYWdlcyA6IG51bGwsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1zaW1wbGUtcGFnZXInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ290b0J1dHRvblxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAndWwnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnICcgKyBwcmVmaXhDbHMgKyAnLXNpbXBsZSAnICsgcHJvcHMuY2xhc3NOYW1lLCBzdHlsZTogcHJvcHMuc3R5bGUgfSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2xpJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6IHByb3BzLnNob3dUaXRsZSA/IGxvY2FsZS5wcmV2X3BhZ2UgOiBudWxsLFxuICAgICAgICAgICAgICBvbkNsaWNrOiB0aGlzLnByZXYsXG4gICAgICAgICAgICAgIHRhYkluZGV4OiB0aGlzLmhhc1ByZXYoKSA/IDAgOiBudWxsLFxuICAgICAgICAgICAgICBvbktleVByZXNzOiB0aGlzLnJ1bklmRW50ZXJQcmV2LFxuICAgICAgICAgICAgICBjbGFzc05hbWU6ICh0aGlzLmhhc1ByZXYoKSA/ICcnIDogcHJlZml4Q2xzICsgJy1kaXNhYmxlZCcpICsgJyAnICsgcHJlZml4Q2xzICsgJy1wcmV2JyxcbiAgICAgICAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiAhdGhpcy5oYXNQcmV2KClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm9wcy5pdGVtUmVuZGVyKHByZXZQYWdlLCAncHJldicsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2EnLCB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1pdGVtLWxpbmsnIH0pKVxuICAgICAgICAgICksXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdsaScsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpdGxlOiBwcm9wcy5zaG93VGl0bGUgPyB0aGlzLnN0YXRlLmN1cnJlbnQgKyAnLycgKyBhbGxQYWdlcyA6IG51bGwsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1zaW1wbGUtcGFnZXInXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuY3VycmVudElucHV0VmFsdWUsXG4gICAgICAgICAgICAgIG9uS2V5RG93bjogdGhpcy5oYW5kbGVLZXlEb3duLFxuICAgICAgICAgICAgICBvbktleVVwOiB0aGlzLmhhbmRsZUtleVVwLFxuICAgICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5oYW5kbGVLZXlVcCxcbiAgICAgICAgICAgICAgc2l6ZTogJzMnXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctc2xhc2gnIH0sXG4gICAgICAgICAgICAgICdcXHVGRjBGJ1xuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGFsbFBhZ2VzXG4gICAgICAgICAgKSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2xpJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6IHByb3BzLnNob3dUaXRsZSA/IGxvY2FsZS5uZXh0X3BhZ2UgOiBudWxsLFxuICAgICAgICAgICAgICBvbkNsaWNrOiB0aGlzLm5leHQsXG4gICAgICAgICAgICAgIHRhYkluZGV4OiB0aGlzLmhhc1ByZXYoKSA/IDAgOiBudWxsLFxuICAgICAgICAgICAgICBvbktleVByZXNzOiB0aGlzLnJ1bklmRW50ZXJOZXh0LFxuICAgICAgICAgICAgICBjbGFzc05hbWU6ICh0aGlzLmhhc05leHQoKSA/ICcnIDogcHJlZml4Q2xzICsgJy1kaXNhYmxlZCcpICsgJyAnICsgcHJlZml4Q2xzICsgJy1uZXh0JyxcbiAgICAgICAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiAhdGhpcy5oYXNOZXh0KClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm9wcy5pdGVtUmVuZGVyKG5leHRQYWdlLCAnbmV4dCcsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2EnLCB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1pdGVtLWxpbmsnIH0pKVxuICAgICAgICAgICksXG4gICAgICAgICAgZ290b0J1dHRvblxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWxsUGFnZXMgPD0gNSArIHBhZ2VCdWZmZXJTaXplICogMikge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8PSBhbGxQYWdlczsgaSsrKSB7XG4gICAgICAgICAgdmFyIGFjdGl2ZSA9IHRoaXMuc3RhdGUuY3VycmVudCA9PT0gaTtcbiAgICAgICAgICBwYWdlckxpc3QucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFBhZ2VyLCB7XG4gICAgICAgICAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICAgICAgICAgIHJvb3RQcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgICAgb25LZXlQcmVzczogdGhpcy5ydW5JZkVudGVyLFxuICAgICAgICAgICAga2V5OiBpLFxuICAgICAgICAgICAgcGFnZTogaSxcbiAgICAgICAgICAgIGFjdGl2ZTogYWN0aXZlLFxuICAgICAgICAgICAgc2hvd1RpdGxlOiBwcm9wcy5zaG93VGl0bGUsXG4gICAgICAgICAgICBpdGVtUmVuZGVyOiBwcm9wcy5pdGVtUmVuZGVyXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcHJldkl0ZW1UaXRsZSA9IHByb3BzLnNob3dMZXNzSXRlbXMgPyBsb2NhbGUucHJldl8zIDogbG9jYWxlLnByZXZfNTtcbiAgICAgICAgdmFyIG5leHRJdGVtVGl0bGUgPSBwcm9wcy5zaG93TGVzc0l0ZW1zID8gbG9jYWxlLm5leHRfMyA6IGxvY2FsZS5uZXh0XzU7XG4gICAgICAgIGlmIChwcm9wcy5zaG93UHJldk5leHRKdW1wZXJzKSB7XG4gICAgICAgICAganVtcFByZXYgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2xpJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGl0bGU6IHByb3BzLnNob3dUaXRsZSA/IHByZXZJdGVtVGl0bGUgOiBudWxsLFxuICAgICAgICAgICAgICBrZXk6ICdwcmV2JyxcbiAgICAgICAgICAgICAgb25DbGljazogdGhpcy5qdW1wUHJldixcbiAgICAgICAgICAgICAgdGFiSW5kZXg6ICcwJyxcbiAgICAgICAgICAgICAgb25LZXlQcmVzczogdGhpcy5ydW5JZkVudGVySnVtcFByZXYsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1qdW1wLXByZXYnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJvcHMuaXRlbVJlbmRlcih0aGlzLmdldEp1bXBQcmV2UGFnZSgpLCAnanVtcC1wcmV2JywgUmVhY3QuY3JlYXRlRWxlbWVudCgnYScsIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWl0ZW0tbGluaycgfSkpXG4gICAgICAgICAgKTtcbiAgICAgICAgICBqdW1wTmV4dCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnbGknLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aXRsZTogcHJvcHMuc2hvd1RpdGxlID8gbmV4dEl0ZW1UaXRsZSA6IG51bGwsXG4gICAgICAgICAgICAgIGtleTogJ25leHQnLFxuICAgICAgICAgICAgICB0YWJJbmRleDogJzAnLFxuICAgICAgICAgICAgICBvbkNsaWNrOiB0aGlzLmp1bXBOZXh0LFxuICAgICAgICAgICAgICBvbktleVByZXNzOiB0aGlzLnJ1bklmRW50ZXJKdW1wTmV4dCxcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWp1bXAtbmV4dCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm9wcy5pdGVtUmVuZGVyKHRoaXMuZ2V0SnVtcE5leHRQYWdlKCksICdqdW1wLW5leHQnLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdhJywgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctaXRlbS1saW5rJyB9KSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGxhc3RQYWdlciA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGFnZXIsIHtcbiAgICAgICAgICBsb2NhbGU6IHByb3BzLmxvY2FsZSxcbiAgICAgICAgICBsYXN0OiB0cnVlLFxuICAgICAgICAgIHJvb3RQcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZUNoYW5nZSxcbiAgICAgICAgICBvbktleVByZXNzOiB0aGlzLnJ1bklmRW50ZXIsXG4gICAgICAgICAga2V5OiBhbGxQYWdlcyxcbiAgICAgICAgICBwYWdlOiBhbGxQYWdlcyxcbiAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgIHNob3dUaXRsZTogcHJvcHMuc2hvd1RpdGxlLFxuICAgICAgICAgIGl0ZW1SZW5kZXI6IHByb3BzLml0ZW1SZW5kZXJcbiAgICAgICAgfSk7XG4gICAgICAgIGZpcnN0UGFnZXIgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFBhZ2VyLCB7XG4gICAgICAgICAgbG9jYWxlOiBwcm9wcy5sb2NhbGUsXG4gICAgICAgICAgcm9vdFByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgIG9uS2V5UHJlc3M6IHRoaXMucnVuSWZFbnRlcixcbiAgICAgICAgICBrZXk6IDEsXG4gICAgICAgICAgcGFnZTogMSxcbiAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgIHNob3dUaXRsZTogcHJvcHMuc2hvd1RpdGxlLFxuICAgICAgICAgIGl0ZW1SZW5kZXI6IHByb3BzLml0ZW1SZW5kZXJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGxlZnQgPSBNYXRoLm1heCgxLCBjdXJyZW50IC0gcGFnZUJ1ZmZlclNpemUpO1xuICAgICAgICB2YXIgcmlnaHQgPSBNYXRoLm1pbihjdXJyZW50ICsgcGFnZUJ1ZmZlclNpemUsIGFsbFBhZ2VzKTtcblxuICAgICAgICBpZiAoY3VycmVudCAtIDEgPD0gcGFnZUJ1ZmZlclNpemUpIHtcbiAgICAgICAgICByaWdodCA9IDEgKyBwYWdlQnVmZmVyU2l6ZSAqIDI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWxsUGFnZXMgLSBjdXJyZW50IDw9IHBhZ2VCdWZmZXJTaXplKSB7XG4gICAgICAgICAgbGVmdCA9IGFsbFBhZ2VzIC0gcGFnZUJ1ZmZlclNpemUgKiAyO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgX2kgPSBsZWZ0OyBfaSA8PSByaWdodDsgX2krKykge1xuICAgICAgICAgIHZhciBfYWN0aXZlID0gY3VycmVudCA9PT0gX2k7XG4gICAgICAgICAgcGFnZXJMaXN0LnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChQYWdlciwge1xuICAgICAgICAgICAgbG9jYWxlOiBwcm9wcy5sb2NhbGUsXG4gICAgICAgICAgICByb290UHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZUNoYW5nZSxcbiAgICAgICAgICAgIG9uS2V5UHJlc3M6IHRoaXMucnVuSWZFbnRlcixcbiAgICAgICAgICAgIGtleTogX2ksXG4gICAgICAgICAgICBwYWdlOiBfaSxcbiAgICAgICAgICAgIGFjdGl2ZTogX2FjdGl2ZSxcbiAgICAgICAgICAgIHNob3dUaXRsZTogcHJvcHMuc2hvd1RpdGxlLFxuICAgICAgICAgICAgaXRlbVJlbmRlcjogcHJvcHMuaXRlbVJlbmRlclxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50IC0gMSA+PSBwYWdlQnVmZmVyU2l6ZSAqIDIgJiYgY3VycmVudCAhPT0gMSArIDIpIHtcbiAgICAgICAgICBwYWdlckxpc3RbMF0gPSBSZWFjdC5jbG9uZUVsZW1lbnQocGFnZXJMaXN0WzBdLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IHByZWZpeENscyArICctaXRlbS1hZnRlci1qdW1wLXByZXYnXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcGFnZXJMaXN0LnVuc2hpZnQoanVtcFByZXYpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhbGxQYWdlcyAtIGN1cnJlbnQgPj0gcGFnZUJ1ZmZlclNpemUgKiAyICYmIGN1cnJlbnQgIT09IGFsbFBhZ2VzIC0gMikge1xuICAgICAgICAgIHBhZ2VyTGlzdFtwYWdlckxpc3QubGVuZ3RoIC0gMV0gPSBSZWFjdC5jbG9uZUVsZW1lbnQocGFnZXJMaXN0W3BhZ2VyTGlzdC5sZW5ndGggLSAxXSwge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWl0ZW0tYmVmb3JlLWp1bXAtbmV4dCdcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBwYWdlckxpc3QucHVzaChqdW1wTmV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGVmdCAhPT0gMSkge1xuICAgICAgICAgIHBhZ2VyTGlzdC51bnNoaWZ0KGZpcnN0UGFnZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyaWdodCAhPT0gYWxsUGFnZXMpIHtcbiAgICAgICAgICBwYWdlckxpc3QucHVzaChsYXN0UGFnZXIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB0b3RhbFRleHQgPSBudWxsO1xuXG4gICAgICBpZiAocHJvcHMuc2hvd1RvdGFsKSB7XG4gICAgICAgIHRvdGFsVGV4dCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2xpJyxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy10b3RhbC10ZXh0JyB9LFxuICAgICAgICAgIHByb3BzLnNob3dUb3RhbChwcm9wcy50b3RhbCwgWyhjdXJyZW50IC0gMSkgKiBwYWdlU2l6ZSArIDEsIGN1cnJlbnQgKiBwYWdlU2l6ZSA+IHByb3BzLnRvdGFsID8gcHJvcHMudG90YWwgOiBjdXJyZW50ICogcGFnZVNpemVdKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdmFyIHByZXZEaXNhYmxlZCA9ICF0aGlzLmhhc1ByZXYoKTtcbiAgICAgIHZhciBuZXh0RGlzYWJsZWQgPSAhdGhpcy5oYXNOZXh0KCk7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3VsJyxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJyAnICsgcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgIHN0eWxlOiBwcm9wcy5zdHlsZSxcbiAgICAgICAgICB1bnNlbGVjdGFibGU6ICd1bnNlbGVjdGFibGUnLFxuICAgICAgICAgIHJlZjogdGhpcy5zYXZlUGFnaW5hdGlvbk5vZGVcbiAgICAgICAgfSxcbiAgICAgICAgdG90YWxUZXh0LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdsaScsXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IHByb3BzLnNob3dUaXRsZSA/IGxvY2FsZS5wcmV2X3BhZ2UgOiBudWxsLFxuICAgICAgICAgICAgb25DbGljazogdGhpcy5wcmV2LFxuICAgICAgICAgICAgdGFiSW5kZXg6IHByZXZEaXNhYmxlZCA/IG51bGwgOiAwLFxuICAgICAgICAgICAgb25LZXlQcmVzczogdGhpcy5ydW5JZkVudGVyUHJldixcbiAgICAgICAgICAgIGNsYXNzTmFtZTogKCFwcmV2RGlzYWJsZWQgPyAnJyA6IHByZWZpeENscyArICctZGlzYWJsZWQnKSArICcgJyArIHByZWZpeENscyArICctcHJldicsXG4gICAgICAgICAgICAnYXJpYS1kaXNhYmxlZCc6IHByZXZEaXNhYmxlZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcHJvcHMuaXRlbVJlbmRlcihwcmV2UGFnZSwgJ3ByZXYnLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdhJywgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctaXRlbS1saW5rJyB9KSlcbiAgICAgICAgKSxcbiAgICAgICAgcGFnZXJMaXN0LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdsaScsXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6IHByb3BzLnNob3dUaXRsZSA/IGxvY2FsZS5uZXh0X3BhZ2UgOiBudWxsLFxuICAgICAgICAgICAgb25DbGljazogdGhpcy5uZXh0LFxuICAgICAgICAgICAgdGFiSW5kZXg6IG5leHREaXNhYmxlZCA/IG51bGwgOiAwLFxuICAgICAgICAgICAgb25LZXlQcmVzczogdGhpcy5ydW5JZkVudGVyTmV4dCxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogKCFuZXh0RGlzYWJsZWQgPyAnJyA6IHByZWZpeENscyArICctZGlzYWJsZWQnKSArICcgJyArIHByZWZpeENscyArICctbmV4dCcsXG4gICAgICAgICAgICAnYXJpYS1kaXNhYmxlZCc6IG5leHREaXNhYmxlZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcHJvcHMuaXRlbVJlbmRlcihuZXh0UGFnZSwgJ25leHQnLCBSZWFjdC5jcmVhdGVFbGVtZW50KCdhJywgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctaXRlbS1saW5rJyB9KSlcbiAgICAgICAgKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChPcHRpb25zLCB7XG4gICAgICAgICAgbG9jYWxlOiBwcm9wcy5sb2NhbGUsXG4gICAgICAgICAgcm9vdFByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICAgIHNlbGVjdENvbXBvbmVudENsYXNzOiBwcm9wcy5zZWxlY3RDb21wb25lbnRDbGFzcyxcbiAgICAgICAgICBzZWxlY3RQcmVmaXhDbHM6IHByb3BzLnNlbGVjdFByZWZpeENscyxcbiAgICAgICAgICBjaGFuZ2VTaXplOiB0aGlzLnByb3BzLnNob3dTaXplQ2hhbmdlciA/IHRoaXMuY2hhbmdlUGFnZVNpemUgOiBudWxsLFxuICAgICAgICAgIGN1cnJlbnQ6IHRoaXMuc3RhdGUuY3VycmVudCxcbiAgICAgICAgICBwYWdlU2l6ZTogdGhpcy5zdGF0ZS5wYWdlU2l6ZSxcbiAgICAgICAgICBwYWdlU2l6ZU9wdGlvbnM6IHRoaXMucHJvcHMucGFnZVNpemVPcHRpb25zLFxuICAgICAgICAgIHF1aWNrR286IHRoaXMucHJvcHMuc2hvd1F1aWNrSnVtcGVyID8gdGhpcy5oYW5kbGVDaGFuZ2UgOiBudWxsLFxuICAgICAgICAgIGdvQnV0dG9uOiBnb0J1dHRvblxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUGFnaW5hdGlvbjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuUGFnaW5hdGlvbi5wcm9wVHlwZXMgPSB7XG4gIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgY3VycmVudDogUHJvcFR5cGVzLm51bWJlcixcbiAgZGVmYXVsdEN1cnJlbnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIHRvdGFsOiBQcm9wVHlwZXMubnVtYmVyLFxuICBwYWdlU2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgZGVmYXVsdFBhZ2VTaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGhpZGVPblNpbmdsZVBhZ2U6IFByb3BUeXBlcy5ib29sLFxuICBzaG93U2l6ZUNoYW5nZXI6IFByb3BUeXBlcy5ib29sLFxuICBzaG93TGVzc0l0ZW1zOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25TaG93U2l6ZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHNlbGVjdENvbXBvbmVudENsYXNzOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2hvd1ByZXZOZXh0SnVtcGVyczogUHJvcFR5cGVzLmJvb2wsXG4gIHNob3dRdWlja0p1bXBlcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgc2hvd1RpdGxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgcGFnZVNpemVPcHRpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgc2hvd1RvdGFsOiBQcm9wVHlwZXMuZnVuYyxcbiAgbG9jYWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgaXRlbVJlbmRlcjogUHJvcFR5cGVzLmZ1bmNcbn07XG5QYWdpbmF0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGVmYXVsdEN1cnJlbnQ6IDEsXG4gIHRvdGFsOiAwLFxuICBkZWZhdWx0UGFnZVNpemU6IDEwLFxuICBvbkNoYW5nZTogbm9vcCxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgc2VsZWN0UHJlZml4Q2xzOiAncmMtc2VsZWN0JyxcbiAgcHJlZml4Q2xzOiAncmMtcGFnaW5hdGlvbicsXG4gIHNlbGVjdENvbXBvbmVudENsYXNzOiBudWxsLFxuICBoaWRlT25TaW5nbGVQYWdlOiBmYWxzZSxcbiAgc2hvd1ByZXZOZXh0SnVtcGVyczogdHJ1ZSxcbiAgc2hvd1F1aWNrSnVtcGVyOiBmYWxzZSxcbiAgc2hvd1NpemVDaGFuZ2VyOiBmYWxzZSxcbiAgc2hvd0xlc3NJdGVtczogZmFsc2UsXG4gIHNob3dUaXRsZTogdHJ1ZSxcbiAgb25TaG93U2l6ZUNoYW5nZTogbm9vcCxcbiAgbG9jYWxlOiBMT0NBTEUsXG4gIHN0eWxlOiB7fSxcbiAgaXRlbVJlbmRlcjogZGVmYXVsdEl0ZW1SZW5kZXJcbn07XG5cbnZhciBfaW5pdGlhbGlzZVByb3BzID0gZnVuY3Rpb24gX2luaXRpYWxpc2VQcm9wcygpIHtcbiAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgdGhpcy5zYXZlUGFnaW5hdGlvbk5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgIF90aGlzMi5wYWdpbmF0aW9uTm9kZSA9IG5vZGU7XG4gIH07XG5cbiAgdGhpcy5jYWxjdWxhdGVQYWdlID0gZnVuY3Rpb24gKHApIHtcbiAgICB2YXIgcGFnZVNpemUgPSBwO1xuICAgIGlmICh0eXBlb2YgcGFnZVNpemUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBwYWdlU2l6ZSA9IF90aGlzMi5zdGF0ZS5wYWdlU2l6ZTtcbiAgICB9XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKF90aGlzMi5wcm9wcy50b3RhbCAtIDEpIC8gcGFnZVNpemUpICsgMTtcbiAgfTtcblxuICB0aGlzLmlzVmFsaWQgPSBmdW5jdGlvbiAocGFnZSkge1xuICAgIHJldHVybiBpc0ludGVnZXIocGFnZSkgJiYgcGFnZSA+PSAxICYmIHBhZ2UgIT09IF90aGlzMi5zdGF0ZS5jdXJyZW50O1xuICB9O1xuXG4gIHRoaXMuaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gS0VZQ09ERS5BUlJPV19VUCB8fCBlLmtleUNvZGUgPT09IEtFWUNPREUuQVJST1dfRE9XTikge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLmhhbmRsZUtleVVwID0gZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgaW5wdXRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHZhciBjdXJyZW50SW5wdXRWYWx1ZSA9IF90aGlzMi5zdGF0ZS5jdXJyZW50SW5wdXRWYWx1ZTtcbiAgICB2YXIgdmFsdWUgPSB2b2lkIDA7XG5cbiAgICBpZiAoaW5wdXRWYWx1ZSA9PT0gJycpIHtcbiAgICAgIHZhbHVlID0gaW5wdXRWYWx1ZTtcbiAgICB9IGVsc2UgaWYgKGlzTmFOKE51bWJlcihpbnB1dFZhbHVlKSkpIHtcbiAgICAgIHZhbHVlID0gY3VycmVudElucHV0VmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gTnVtYmVyKGlucHV0VmFsdWUpO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZSAhPT0gY3VycmVudElucHV0VmFsdWUpIHtcbiAgICAgIF90aGlzMi5zZXRTdGF0ZSh7XG4gICAgICAgIGN1cnJlbnRJbnB1dFZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gS0VZQ09ERS5FTlRFUikge1xuICAgICAgX3RoaXMyLmhhbmRsZUNoYW5nZSh2YWx1ZSk7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IEtFWUNPREUuQVJST1dfVVApIHtcbiAgICAgIF90aGlzMi5oYW5kbGVDaGFuZ2UodmFsdWUgLSAxKTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gS0VZQ09ERS5BUlJPV19ET1dOKSB7XG4gICAgICBfdGhpczIuaGFuZGxlQ2hhbmdlKHZhbHVlICsgMSk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMuY2hhbmdlUGFnZVNpemUgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICAgIHZhciBjdXJyZW50ID0gX3RoaXMyLnN0YXRlLmN1cnJlbnQ7XG4gICAgdmFyIG5ld0N1cnJlbnQgPSBfdGhpczIuY2FsY3VsYXRlUGFnZShzaXplKTtcbiAgICBjdXJyZW50ID0gY3VycmVudCA+IG5ld0N1cnJlbnQgPyBuZXdDdXJyZW50IDogY3VycmVudDtcbiAgICBpZiAodHlwZW9mIHNpemUgPT09ICdudW1iZXInKSB7XG4gICAgICBpZiAoISgncGFnZVNpemUnIGluIF90aGlzMi5wcm9wcykpIHtcbiAgICAgICAgX3RoaXMyLnNldFN0YXRlKHtcbiAgICAgICAgICBwYWdlU2l6ZTogc2l6ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICghKCdjdXJyZW50JyBpbiBfdGhpczIucHJvcHMpKSB7XG4gICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7XG4gICAgICAgICAgY3VycmVudDogY3VycmVudCxcbiAgICAgICAgICBjdXJyZW50SW5wdXRWYWx1ZTogY3VycmVudFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgX3RoaXMyLnByb3BzLm9uU2hvd1NpemVDaGFuZ2UoY3VycmVudCwgc2l6ZSk7XG4gIH07XG5cbiAgdGhpcy5oYW5kbGVDaGFuZ2UgPSBmdW5jdGlvbiAocCkge1xuICAgIHZhciBwYWdlID0gcDtcbiAgICBpZiAoX3RoaXMyLmlzVmFsaWQocGFnZSkpIHtcbiAgICAgIGlmIChwYWdlID4gX3RoaXMyLmNhbGN1bGF0ZVBhZ2UoKSkge1xuICAgICAgICBwYWdlID0gX3RoaXMyLmNhbGN1bGF0ZVBhZ2UoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCEoJ2N1cnJlbnQnIGluIF90aGlzMi5wcm9wcykpIHtcbiAgICAgICAgX3RoaXMyLnNldFN0YXRlKHtcbiAgICAgICAgICBjdXJyZW50OiBwYWdlLFxuICAgICAgICAgIGN1cnJlbnRJbnB1dFZhbHVlOiBwYWdlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgcGFnZVNpemUgPSBfdGhpczIuc3RhdGUucGFnZVNpemU7XG4gICAgICBfdGhpczIucHJvcHMub25DaGFuZ2UocGFnZSwgcGFnZVNpemUpO1xuXG4gICAgICByZXR1cm4gcGFnZTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3RoaXMyLnN0YXRlLmN1cnJlbnQ7XG4gIH07XG5cbiAgdGhpcy5wcmV2ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChfdGhpczIuaGFzUHJldigpKSB7XG4gICAgICBfdGhpczIuaGFuZGxlQ2hhbmdlKF90aGlzMi5zdGF0ZS5jdXJyZW50IC0gMSk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoX3RoaXMyLmhhc05leHQoKSkge1xuICAgICAgX3RoaXMyLmhhbmRsZUNoYW5nZShfdGhpczIuc3RhdGUuY3VycmVudCArIDEpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLmp1bXBQcmV2ID0gZnVuY3Rpb24gKCkge1xuICAgIF90aGlzMi5oYW5kbGVDaGFuZ2UoX3RoaXMyLmdldEp1bXBQcmV2UGFnZSgpKTtcbiAgfTtcblxuICB0aGlzLmp1bXBOZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgIF90aGlzMi5oYW5kbGVDaGFuZ2UoX3RoaXMyLmdldEp1bXBOZXh0UGFnZSgpKTtcbiAgfTtcblxuICB0aGlzLmhhc1ByZXYgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF90aGlzMi5zdGF0ZS5jdXJyZW50ID4gMTtcbiAgfTtcblxuICB0aGlzLmhhc05leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF90aGlzMi5zdGF0ZS5jdXJyZW50IDwgX3RoaXMyLmNhbGN1bGF0ZVBhZ2UoKTtcbiAgfTtcblxuICB0aGlzLnJ1bklmRW50ZXIgPSBmdW5jdGlvbiAoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3RQYXJhbXMgPSBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICByZXN0UGFyYW1zW19rZXkgLSAyXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInIHx8IGV2ZW50LmNoYXJDb2RlID09PSAxMykge1xuICAgICAgY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCByZXN0UGFyYW1zKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5ydW5JZkVudGVyUHJldiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgX3RoaXMyLnJ1bklmRW50ZXIoZSwgX3RoaXMyLnByZXYpO1xuICB9O1xuXG4gIHRoaXMucnVuSWZFbnRlck5leHQgPSBmdW5jdGlvbiAoZSkge1xuICAgIF90aGlzMi5ydW5JZkVudGVyKGUsIF90aGlzMi5uZXh0KTtcbiAgfTtcblxuICB0aGlzLnJ1bklmRW50ZXJKdW1wUHJldiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgX3RoaXMyLnJ1bklmRW50ZXIoZSwgX3RoaXMyLmp1bXBQcmV2KTtcbiAgfTtcblxuICB0aGlzLnJ1bklmRW50ZXJKdW1wTmV4dCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgX3RoaXMyLnJ1bklmRW50ZXIoZSwgX3RoaXMyLmp1bXBOZXh0KTtcbiAgfTtcblxuICB0aGlzLmhhbmRsZUdvVE8gPSBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IEtFWUNPREUuRU5URVIgfHwgZS50eXBlID09PSAnY2xpY2snKSB7XG4gICAgICBfdGhpczIuaGFuZGxlQ2hhbmdlKF90aGlzMi5zdGF0ZS5jdXJyZW50SW5wdXRWYWx1ZSk7XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjsiLCJleHBvcnQgZGVmYXVsdCB7XG4gIC8vIE9wdGlvbnMuanN4XG4gIGl0ZW1zX3Blcl9wYWdlOiAn5p2hL+mhtScsXG4gIGp1bXBfdG86ICfot7Poh7MnLFxuICBqdW1wX3RvX2NvbmZpcm06ICfnoa7lrponLFxuICBwYWdlOiAn6aG1JyxcblxuICAvLyBQYWdpbmF0aW9uLmpzeFxuICBwcmV2X3BhZ2U6ICfkuIrkuIDpobUnLFxuICBuZXh0X3BhZ2U6ICfkuIvkuIDpobUnLFxuICBwcmV2XzU6ICflkJHliY0gNSDpobUnLFxuICBuZXh0XzU6ICflkJHlkI4gNSDpobUnLFxuICBwcmV2XzM6ICflkJHliY0gMyDpobUnLFxuICBuZXh0XzM6ICflkJHlkI4gMyDpobUnXG59OyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnbWluaS1zdG9yZSc7XG5pbXBvcnQgQ29sR3JvdXAgZnJvbSAnLi9Db2xHcm91cCc7XG5pbXBvcnQgVGFibGVIZWFkZXIgZnJvbSAnLi9UYWJsZUhlYWRlcic7XG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnLi9UYWJsZVJvdyc7XG5pbXBvcnQgRXhwYW5kYWJsZVJvdyBmcm9tICcuL0V4cGFuZGFibGVSb3cnO1xuXG52YXIgQmFzZVRhYmxlID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEJhc2VUYWJsZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQmFzZVRhYmxlKCkge1xuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQmFzZVRhYmxlKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5oYW5kbGVSb3dIb3ZlciA9IGZ1bmN0aW9uIChpc0hvdmVyLCBrZXkpIHtcbiAgICAgIF90aGlzLnByb3BzLnN0b3JlLnNldFN0YXRlKHtcbiAgICAgICAgY3VycmVudEhvdmVyS2V5OiBpc0hvdmVyID8ga2V5IDogbnVsbFxuICAgICAgfSk7XG4gICAgfSwgX3RoaXMucmVuZGVyUm93cyA9IGZ1bmN0aW9uIChyZW5kZXJEYXRhLCBpbmRlbnQpIHtcbiAgICAgIHZhciBhbmNlc3RvcktleXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IFtdO1xuICAgICAgdmFyIHRhYmxlID0gX3RoaXMuY29udGV4dC50YWJsZTtcbiAgICAgIHZhciBjb2x1bW5NYW5hZ2VyID0gdGFibGUuY29sdW1uTWFuYWdlcixcbiAgICAgICAgICBjb21wb25lbnRzID0gdGFibGUuY29tcG9uZW50cztcbiAgICAgIHZhciBfdGFibGUkcHJvcHMgPSB0YWJsZS5wcm9wcyxcbiAgICAgICAgICBwcmVmaXhDbHMgPSBfdGFibGUkcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICAgIGNoaWxkcmVuQ29sdW1uTmFtZSA9IF90YWJsZSRwcm9wcy5jaGlsZHJlbkNvbHVtbk5hbWUsXG4gICAgICAgICAgcm93Q2xhc3NOYW1lID0gX3RhYmxlJHByb3BzLnJvd0NsYXNzTmFtZSxcbiAgICAgICAgICByb3dSZWYgPSBfdGFibGUkcHJvcHMucm93UmVmLFxuICAgICAgICAgIG9uUm93Q2xpY2sgPSBfdGFibGUkcHJvcHMub25Sb3dDbGljayxcbiAgICAgICAgICBvblJvd0RvdWJsZUNsaWNrID0gX3RhYmxlJHByb3BzLm9uUm93RG91YmxlQ2xpY2ssXG4gICAgICAgICAgb25Sb3dDb250ZXh0TWVudSA9IF90YWJsZSRwcm9wcy5vblJvd0NvbnRleHRNZW51LFxuICAgICAgICAgIG9uUm93TW91c2VFbnRlciA9IF90YWJsZSRwcm9wcy5vblJvd01vdXNlRW50ZXIsXG4gICAgICAgICAgb25Sb3dNb3VzZUxlYXZlID0gX3RhYmxlJHByb3BzLm9uUm93TW91c2VMZWF2ZSxcbiAgICAgICAgICBvblJvdyA9IF90YWJsZSRwcm9wcy5vblJvdztcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGdldFJvd0tleSA9IF90aGlzJHByb3BzLmdldFJvd0tleSxcbiAgICAgICAgICBmaXhlZCA9IF90aGlzJHByb3BzLmZpeGVkLFxuICAgICAgICAgIGV4cGFuZGVyID0gX3RoaXMkcHJvcHMuZXhwYW5kZXIsXG4gICAgICAgICAgaXNBbnlDb2x1bW5zRml4ZWQgPSBfdGhpcyRwcm9wcy5pc0FueUNvbHVtbnNGaXhlZDtcblxuXG4gICAgICB2YXIgcm93cyA9IFtdO1xuXG4gICAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChpKSB7XG4gICAgICAgIHZhciByZWNvcmQgPSByZW5kZXJEYXRhW2ldO1xuICAgICAgICB2YXIga2V5ID0gZ2V0Um93S2V5KHJlY29yZCwgaSk7XG4gICAgICAgIHZhciBjbGFzc05hbWUgPSB0eXBlb2Ygcm93Q2xhc3NOYW1lID09PSAnc3RyaW5nJyA/IHJvd0NsYXNzTmFtZSA6IHJvd0NsYXNzTmFtZShyZWNvcmQsIGksIGluZGVudCk7XG5cbiAgICAgICAgdmFyIG9uSG92ZXJQcm9wcyA9IHt9O1xuICAgICAgICBpZiAoY29sdW1uTWFuYWdlci5pc0FueUNvbHVtbnNGaXhlZCgpKSB7XG4gICAgICAgICAgb25Ib3ZlclByb3BzLm9uSG92ZXIgPSBfdGhpcy5oYW5kbGVSb3dIb3ZlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsZWFmQ29sdW1ucyA9IHZvaWQgMDtcbiAgICAgICAgaWYgKGZpeGVkID09PSAnbGVmdCcpIHtcbiAgICAgICAgICBsZWFmQ29sdW1ucyA9IGNvbHVtbk1hbmFnZXIubGVmdExlYWZDb2x1bW5zKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZml4ZWQgPT09ICdyaWdodCcpIHtcbiAgICAgICAgICBsZWFmQ29sdW1ucyA9IGNvbHVtbk1hbmFnZXIucmlnaHRMZWFmQ29sdW1ucygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxlYWZDb2x1bW5zID0gY29sdW1uTWFuYWdlci5sZWFmQ29sdW1ucygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJvd1ByZWZpeENscyA9IHByZWZpeENscyArICctcm93JztcblxuICAgICAgICB2YXIgcm93ID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBFeHBhbmRhYmxlUm93LFxuICAgICAgICAgIF9leHRlbmRzKHt9LCBleHBhbmRlci5wcm9wcywge1xuICAgICAgICAgICAgZml4ZWQ6IGZpeGVkLFxuICAgICAgICAgICAgaW5kZXg6IGksXG4gICAgICAgICAgICBwcmVmaXhDbHM6IHJvd1ByZWZpeENscyxcbiAgICAgICAgICAgIHJlY29yZDogcmVjb3JkLFxuICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICByb3dLZXk6IGtleSxcbiAgICAgICAgICAgIG9uUm93Q2xpY2s6IG9uUm93Q2xpY2ssXG4gICAgICAgICAgICBuZWVkSW5kZW50U3BhY2VkOiBleHBhbmRlci5uZWVkSW5kZW50U3BhY2VkLFxuICAgICAgICAgICAgb25FeHBhbmRlZENoYW5nZTogZXhwYW5kZXIuaGFuZGxlRXhwYW5kQ2hhbmdlXG4gICAgICAgICAgfSksXG4gICAgICAgICAgZnVuY3Rpb24gKGV4cGFuZGFibGVSb3cpIHtcbiAgICAgICAgICAgIHJldHVybiAoLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRhYmxlUm93LCBfZXh0ZW5kcyh7XG4gICAgICAgICAgICAgICAgZml4ZWQ6IGZpeGVkLFxuICAgICAgICAgICAgICAgIGluZGVudDogaW5kZW50LFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIHJlY29yZDogcmVjb3JkLFxuICAgICAgICAgICAgICAgIGluZGV4OiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeENsczogcm93UHJlZml4Q2xzLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuQ29sdW1uTmFtZTogY2hpbGRyZW5Db2x1bW5OYW1lLFxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IGxlYWZDb2x1bW5zLFxuICAgICAgICAgICAgICAgIG9uUm93OiBvblJvdyxcbiAgICAgICAgICAgICAgICBvblJvd0RvdWJsZUNsaWNrOiBvblJvd0RvdWJsZUNsaWNrLFxuICAgICAgICAgICAgICAgIG9uUm93Q29udGV4dE1lbnU6IG9uUm93Q29udGV4dE1lbnUsXG4gICAgICAgICAgICAgICAgb25Sb3dNb3VzZUVudGVyOiBvblJvd01vdXNlRW50ZXIsXG4gICAgICAgICAgICAgICAgb25Sb3dNb3VzZUxlYXZlOiBvblJvd01vdXNlTGVhdmVcbiAgICAgICAgICAgICAgfSwgb25Ib3ZlclByb3BzLCB7XG4gICAgICAgICAgICAgICAgcm93S2V5OiBrZXksXG4gICAgICAgICAgICAgICAgYW5jZXN0b3JLZXlzOiBhbmNlc3RvcktleXMsXG4gICAgICAgICAgICAgICAgcmVmOiByb3dSZWYocmVjb3JkLCBpLCBpbmRlbnQpLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudHM6IGNvbXBvbmVudHMsXG4gICAgICAgICAgICAgICAgaXNBbnlDb2x1bW5zRml4ZWQ6IGlzQW55Q29sdW1uc0ZpeGVkXG4gICAgICAgICAgICAgIH0sIGV4cGFuZGFibGVSb3cpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgcm93cy5wdXNoKHJvdyk7XG5cbiAgICAgICAgZXhwYW5kZXIucmVuZGVyUm93cyhfdGhpcy5yZW5kZXJSb3dzLCByb3dzLCByZWNvcmQsIGksIGluZGVudCwgZml4ZWQsIGtleSwgYW5jZXN0b3JLZXlzKTtcbiAgICAgIH07XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVuZGVyRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBfbG9vcChpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByb3dzO1xuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgQmFzZVRhYmxlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIHRhYmxlID0gdGhpcy5jb250ZXh0LnRhYmxlO1xuICAgIHZhciBjb21wb25lbnRzID0gdGFibGUuY29tcG9uZW50cztcbiAgICB2YXIgX3RhYmxlJHByb3BzMiA9IHRhYmxlLnByb3BzLFxuICAgICAgICBwcmVmaXhDbHMgPSBfdGFibGUkcHJvcHMyLnByZWZpeENscyxcbiAgICAgICAgc2Nyb2xsID0gX3RhYmxlJHByb3BzMi5zY3JvbGwsXG4gICAgICAgIGRhdGEgPSBfdGFibGUkcHJvcHMyLmRhdGEsXG4gICAgICAgIGdldEJvZHlXcmFwcGVyID0gX3RhYmxlJHByb3BzMi5nZXRCb2R5V3JhcHBlcjtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgZXhwYW5kZXIgPSBfcHJvcHMuZXhwYW5kZXIsXG4gICAgICAgIHRhYmxlQ2xhc3NOYW1lID0gX3Byb3BzLnRhYmxlQ2xhc3NOYW1lLFxuICAgICAgICBoYXNIZWFkID0gX3Byb3BzLmhhc0hlYWQsXG4gICAgICAgIGhhc0JvZHkgPSBfcHJvcHMuaGFzQm9keSxcbiAgICAgICAgZml4ZWQgPSBfcHJvcHMuZml4ZWQsXG4gICAgICAgIGNvbHVtbnMgPSBfcHJvcHMuY29sdW1ucztcblxuICAgIHZhciB0YWJsZVN0eWxlID0ge307XG5cbiAgICBpZiAoIWZpeGVkICYmIHNjcm9sbC54KSB7XG4gICAgICAvLyBub3Qgc2V0IHdpZHRoLCB0aGVuIHVzZSBjb250ZW50IGZpeGVkIHdpZHRoXG4gICAgICBpZiAoc2Nyb2xsLnggPT09IHRydWUpIHtcbiAgICAgICAgdGFibGVTdHlsZS50YWJsZUxheW91dCA9ICdmaXhlZCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YWJsZVN0eWxlLndpZHRoID0gc2Nyb2xsLng7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIFRhYmxlID0gaGFzQm9keSA/IGNvbXBvbmVudHMudGFibGUgOiAndGFibGUnO1xuICAgIHZhciBCb2R5V3JhcHBlciA9IGNvbXBvbmVudHMuYm9keS53cmFwcGVyO1xuXG4gICAgdmFyIGJvZHkgPSB2b2lkIDA7XG4gICAgaWYgKGhhc0JvZHkpIHtcbiAgICAgIGJvZHkgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBCb2R5V3JhcHBlcixcbiAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctdGJvZHknIH0sXG4gICAgICAgIHRoaXMucmVuZGVyUm93cyhkYXRhLCAwKVxuICAgICAgKTtcbiAgICAgIGlmIChnZXRCb2R5V3JhcHBlcikge1xuICAgICAgICBib2R5ID0gZ2V0Qm9keVdyYXBwZXIoYm9keSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBUYWJsZSxcbiAgICAgIHsgY2xhc3NOYW1lOiB0YWJsZUNsYXNzTmFtZSwgc3R5bGU6IHRhYmxlU3R5bGUsIGtleTogJ3RhYmxlJyB9LFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb2xHcm91cCwgeyBjb2x1bW5zOiBjb2x1bW5zLCBmaXhlZDogZml4ZWQgfSksXG4gICAgICBoYXNIZWFkICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGFibGVIZWFkZXIsIHsgZXhwYW5kZXI6IGV4cGFuZGVyLCBjb2x1bW5zOiBjb2x1bW5zLCBmaXhlZDogZml4ZWQgfSksXG4gICAgICBib2R5XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gQmFzZVRhYmxlO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5CYXNlVGFibGUucHJvcFR5cGVzID0ge1xuICBmaXhlZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmJvb2xdKSxcbiAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIHRhYmxlQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGhhc0hlYWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGhhc0JvZHk6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIHN0b3JlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGV4cGFuZGVyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGdldFJvd0tleTogUHJvcFR5cGVzLmZ1bmMsXG4gIGlzQW55Q29sdW1uc0ZpeGVkOiBQcm9wVHlwZXMuYm9vbFxufTtcbkJhc2VUYWJsZS5jb250ZXh0VHlwZXMgPSB7XG4gIHRhYmxlOiBQcm9wVHlwZXMuYW55XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKShCYXNlVGFibGUpOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IG1lYXN1cmVTY3JvbGxiYXIgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBCYXNlVGFibGUgZnJvbSAnLi9CYXNlVGFibGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb2R5VGFibGUocHJvcHMsIF9yZWYpIHtcbiAgdmFyIHRhYmxlID0gX3JlZi50YWJsZTtcbiAgdmFyIF90YWJsZSRwcm9wcyA9IHRhYmxlLnByb3BzLFxuICAgICAgcHJlZml4Q2xzID0gX3RhYmxlJHByb3BzLnByZWZpeENscyxcbiAgICAgIHNjcm9sbCA9IF90YWJsZSRwcm9wcy5zY3JvbGw7XG4gIHZhciBjb2x1bW5zID0gcHJvcHMuY29sdW1ucyxcbiAgICAgIGZpeGVkID0gcHJvcHMuZml4ZWQsXG4gICAgICB0YWJsZUNsYXNzTmFtZSA9IHByb3BzLnRhYmxlQ2xhc3NOYW1lLFxuICAgICAgZ2V0Um93S2V5ID0gcHJvcHMuZ2V0Um93S2V5LFxuICAgICAgaGFuZGxlQm9keVNjcm9sbCA9IHByb3BzLmhhbmRsZUJvZHlTY3JvbGwsXG4gICAgICBoYW5kbGVXaGVlbCA9IHByb3BzLmhhbmRsZVdoZWVsLFxuICAgICAgZXhwYW5kZXIgPSBwcm9wcy5leHBhbmRlcixcbiAgICAgIGlzQW55Q29sdW1uc0ZpeGVkID0gcHJvcHMuaXNBbnlDb2x1bW5zRml4ZWQ7XG4gIHZhciBzYXZlUmVmID0gdGFibGUuc2F2ZVJlZjtcbiAgdmFyIHVzZUZpeGVkSGVhZGVyID0gdGFibGUucHJvcHMudXNlRml4ZWRIZWFkZXI7XG5cbiAgdmFyIGJvZHlTdHlsZSA9IF9leHRlbmRzKHt9LCB0YWJsZS5wcm9wcy5ib2R5U3R5bGUpO1xuICB2YXIgaW5uZXJCb2R5U3R5bGUgPSB7fTtcblxuICBpZiAoc2Nyb2xsLnggfHwgZml4ZWQpIHtcbiAgICBib2R5U3R5bGUub3ZlcmZsb3dYID0gYm9keVN0eWxlLm92ZXJmbG93WCB8fCAnYXV0byc7XG4gICAgLy8gRml4IHdlaXJlZCB3ZWJraXQgcmVuZGVyIGJ1Z1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzc3ODNcbiAgICBib2R5U3R5bGUuV2Via2l0VHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkICgwLCAwLCAwKSc7XG4gIH1cblxuICBpZiAoc2Nyb2xsLnkpIHtcbiAgICAvLyBtYXhIZWlnaHQgd2lsbCBtYWtlIGZpeGVkLVRhYmxlIHNjcm9sbGluZyBub3Qgd29ya2luZ1xuICAgIC8vIHNvIHdlIG9ubHkgc2V0IG1heEhlaWdodCB0byBib2R5LVRhYmxlIGhlcmVcbiAgICBpZiAoZml4ZWQpIHtcbiAgICAgIGlubmVyQm9keVN0eWxlLm1heEhlaWdodCA9IGJvZHlTdHlsZS5tYXhIZWlnaHQgfHwgc2Nyb2xsLnk7XG4gICAgICBpbm5lckJvZHlTdHlsZS5vdmVyZmxvd1kgPSBib2R5U3R5bGUub3ZlcmZsb3dZIHx8ICdzY3JvbGwnO1xuICAgIH0gZWxzZSB7XG4gICAgICBib2R5U3R5bGUubWF4SGVpZ2h0ID0gYm9keVN0eWxlLm1heEhlaWdodCB8fCBzY3JvbGwueTtcbiAgICB9XG4gICAgYm9keVN0eWxlLm92ZXJmbG93WSA9IGJvZHlTdHlsZS5vdmVyZmxvd1kgfHwgJ3Njcm9sbCc7XG4gICAgdXNlRml4ZWRIZWFkZXIgPSB0cnVlO1xuXG4gICAgLy8gQWRkIG5lZ2F0aXZlIG1hcmdpbiBib3R0b20gZm9yIHNjcm9sbCBiYXIgb3ZlcmZsb3cgYnVnXG4gICAgdmFyIHNjcm9sbGJhcldpZHRoID0gbWVhc3VyZVNjcm9sbGJhcigpO1xuICAgIGlmIChzY3JvbGxiYXJXaWR0aCA+IDAgJiYgZml4ZWQpIHtcbiAgICAgIGJvZHlTdHlsZS5tYXJnaW5Cb3R0b20gPSAnLScgKyBzY3JvbGxiYXJXaWR0aCArICdweCc7XG4gICAgICBib2R5U3R5bGUucGFkZGluZ0JvdHRvbSA9ICcwcHgnO1xuICAgIH1cbiAgfVxuXG4gIHZhciBiYXNlVGFibGUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KEJhc2VUYWJsZSwge1xuICAgIHRhYmxlQ2xhc3NOYW1lOiB0YWJsZUNsYXNzTmFtZSxcbiAgICBoYXNIZWFkOiAhdXNlRml4ZWRIZWFkZXIsXG4gICAgaGFzQm9keTogdHJ1ZSxcbiAgICBmaXhlZDogZml4ZWQsXG4gICAgY29sdW1uczogY29sdW1ucyxcbiAgICBleHBhbmRlcjogZXhwYW5kZXIsXG4gICAgZ2V0Um93S2V5OiBnZXRSb3dLZXksXG4gICAgaXNBbnlDb2x1bW5zRml4ZWQ6IGlzQW55Q29sdW1uc0ZpeGVkXG4gIH0pO1xuXG4gIGlmIChmaXhlZCAmJiBjb2x1bW5zLmxlbmd0aCkge1xuICAgIHZhciByZWZOYW1lID0gdm9pZCAwO1xuICAgIGlmIChjb2x1bW5zWzBdLmZpeGVkID09PSAnbGVmdCcgfHwgY29sdW1uc1swXS5maXhlZCA9PT0gdHJ1ZSkge1xuICAgICAgcmVmTmFtZSA9ICdmaXhlZENvbHVtbnNCb2R5TGVmdCc7XG4gICAgfSBlbHNlIGlmIChjb2x1bW5zWzBdLmZpeGVkID09PSAncmlnaHQnKSB7XG4gICAgICByZWZOYW1lID0gJ2ZpeGVkQ29sdW1uc0JvZHlSaWdodCc7XG4gICAgfVxuICAgIGRlbGV0ZSBib2R5U3R5bGUub3ZlcmZsb3dYO1xuICAgIGRlbGV0ZSBib2R5U3R5bGUub3ZlcmZsb3dZO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGtleTogJ2JvZHlUYWJsZScsIGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1ib2R5LW91dGVyJywgc3R5bGU6IF9leHRlbmRzKHt9LCBib2R5U3R5bGUpIH0sXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1ib2R5LWlubmVyJyxcbiAgICAgICAgICBzdHlsZTogaW5uZXJCb2R5U3R5bGUsXG4gICAgICAgICAgcmVmOiBzYXZlUmVmKHJlZk5hbWUpLFxuICAgICAgICAgIG9uV2hlZWw6IGhhbmRsZVdoZWVsLFxuICAgICAgICAgIG9uU2Nyb2xsOiBoYW5kbGVCb2R5U2Nyb2xsXG4gICAgICAgIH0sXG4gICAgICAgIGJhc2VUYWJsZVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAnZGl2JyxcbiAgICB7XG4gICAgICBrZXk6ICdib2R5VGFibGUnLFxuICAgICAgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWJvZHknLFxuICAgICAgc3R5bGU6IGJvZHlTdHlsZSxcbiAgICAgIHJlZjogc2F2ZVJlZignYm9keVRhYmxlJyksXG4gICAgICBvbldoZWVsOiBoYW5kbGVXaGVlbCxcbiAgICAgIG9uU2Nyb2xsOiBoYW5kbGVCb2R5U2Nyb2xsXG4gICAgfSxcbiAgICBiYXNlVGFibGVcbiAgKTtcbn1cblxuQm9keVRhYmxlLnByb3BUeXBlcyA9IHtcbiAgZml4ZWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ib29sXSksXG4gIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICB0YWJsZUNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBoYW5kbGVXaGVlbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaGFuZGxlQm9keVNjcm9sbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZ2V0Um93S2V5OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBleHBhbmRlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBpc0FueUNvbHVtbnNGaXhlZDogUHJvcFR5cGVzLmJvb2xcbn07XG5cbkJvZHlUYWJsZS5jb250ZXh0VHlwZXMgPSB7XG4gIHRhYmxlOiBQcm9wVHlwZXMuYW55XG59OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2xHcm91cChwcm9wcywgX3JlZikge1xuICB2YXIgdGFibGUgPSBfcmVmLnRhYmxlO1xuICB2YXIgX3RhYmxlJHByb3BzID0gdGFibGUucHJvcHMsXG4gICAgICBwcmVmaXhDbHMgPSBfdGFibGUkcHJvcHMucHJlZml4Q2xzLFxuICAgICAgZXhwYW5kSWNvbkFzQ2VsbCA9IF90YWJsZSRwcm9wcy5leHBhbmRJY29uQXNDZWxsO1xuICB2YXIgZml4ZWQgPSBwcm9wcy5maXhlZDtcblxuXG4gIHZhciBjb2xzID0gW107XG5cbiAgaWYgKGV4cGFuZEljb25Bc0NlbGwgJiYgZml4ZWQgIT09ICdyaWdodCcpIHtcbiAgICBjb2xzLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudCgnY29sJywgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctZXhwYW5kLWljb24tY29sJywga2V5OiAncmMtdGFibGUtZXhwYW5kLWljb24tY29sJyB9KSk7XG4gIH1cblxuICB2YXIgbGVhZkNvbHVtbnMgPSB2b2lkIDA7XG5cbiAgaWYgKGZpeGVkID09PSAnbGVmdCcpIHtcbiAgICBsZWFmQ29sdW1ucyA9IHRhYmxlLmNvbHVtbk1hbmFnZXIubGVmdExlYWZDb2x1bW5zKCk7XG4gIH0gZWxzZSBpZiAoZml4ZWQgPT09ICdyaWdodCcpIHtcbiAgICBsZWFmQ29sdW1ucyA9IHRhYmxlLmNvbHVtbk1hbmFnZXIucmlnaHRMZWFmQ29sdW1ucygpO1xuICB9IGVsc2Uge1xuICAgIGxlYWZDb2x1bW5zID0gdGFibGUuY29sdW1uTWFuYWdlci5sZWFmQ29sdW1ucygpO1xuICB9XG4gIGNvbHMgPSBjb2xzLmNvbmNhdChsZWFmQ29sdW1ucy5tYXAoZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnY29sJywgeyBrZXk6IGMua2V5IHx8IGMuZGF0YUluZGV4LCBzdHlsZTogeyB3aWR0aDogYy53aWR0aCwgbWluV2lkdGg6IGMud2lkdGggfSB9KTtcbiAgfSkpO1xuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICdjb2xncm91cCcsXG4gICAgbnVsbCxcbiAgICBjb2xzXG4gICk7XG59XG5cbkNvbEdyb3VwLnByb3BUeXBlcyA9IHtcbiAgZml4ZWQ6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbkNvbEdyb3VwLmNvbnRleHRUeXBlcyA9IHtcbiAgdGFibGU6IFByb3BUeXBlcy5hbnlcbn07IiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZnVuY3Rpb24gQ29sdW1uKCkge31cblxuQ29sdW1uLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjb2xTcGFuOiBQcm9wVHlwZXMubnVtYmVyLFxuICB0aXRsZTogUHJvcFR5cGVzLm5vZGUsXG4gIGRhdGFJbmRleDogUHJvcFR5cGVzLnN0cmluZyxcbiAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgZml4ZWQ6IFByb3BUeXBlcy5vbmVPZihbdHJ1ZSwgJ2xlZnQnLCAncmlnaHQnXSksXG4gIHJlbmRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ2VsbENsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25DZWxsOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25IZWFkZXJDZWxsOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29sdW1uOyIsImltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG52YXIgQ29sdW1uR3JvdXAgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ29sdW1uR3JvdXAsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIENvbHVtbkdyb3VwKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDb2x1bW5Hcm91cCk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIHJldHVybiBDb2x1bW5Hcm91cDtcbn0oQ29tcG9uZW50KTtcblxuQ29sdW1uR3JvdXAucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLm5vZGVcbn07XG5Db2x1bW5Hcm91cC5pc1RhYmxlQ29sdW1uR3JvdXAgPSB0cnVlO1xuZXhwb3J0IGRlZmF1bHQgQ29sdW1uR3JvdXA7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnZhciBDb2x1bW5NYW5hZ2VyID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDb2x1bW5NYW5hZ2VyKGNvbHVtbnMsIGVsZW1lbnRzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbHVtbk1hbmFnZXIpO1xuXG4gICAgdGhpcy5fY2FjaGVkID0ge307XG5cbiAgICB0aGlzLmNvbHVtbnMgPSBjb2x1bW5zIHx8IHRoaXMubm9ybWFsaXplKGVsZW1lbnRzKTtcbiAgfVxuXG4gIENvbHVtbk1hbmFnZXIucHJvdG90eXBlLmlzQW55Q29sdW1uc0ZpeGVkID0gZnVuY3Rpb24gaXNBbnlDb2x1bW5zRml4ZWQoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHJldHVybiB0aGlzLl9jYWNoZSgnaXNBbnlDb2x1bW5zRml4ZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMuY29sdW1ucy5zb21lKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgcmV0dXJuICEhY29sdW1uLmZpeGVkO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgQ29sdW1uTWFuYWdlci5wcm90b3R5cGUuaXNBbnlDb2x1bW5zTGVmdEZpeGVkID0gZnVuY3Rpb24gaXNBbnlDb2x1bW5zTGVmdEZpeGVkKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlKCdpc0FueUNvbHVtbnNMZWZ0Rml4ZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMyLmNvbHVtbnMuc29tZShmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgIHJldHVybiBjb2x1bW4uZml4ZWQgPT09ICdsZWZ0JyB8fCBjb2x1bW4uZml4ZWQgPT09IHRydWU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBDb2x1bW5NYW5hZ2VyLnByb3RvdHlwZS5pc0FueUNvbHVtbnNSaWdodEZpeGVkID0gZnVuY3Rpb24gaXNBbnlDb2x1bW5zUmlnaHRGaXhlZCgpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHJldHVybiB0aGlzLl9jYWNoZSgnaXNBbnlDb2x1bW5zUmlnaHRGaXhlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpczMuY29sdW1ucy5zb21lKGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgcmV0dXJuIGNvbHVtbi5maXhlZCA9PT0gJ3JpZ2h0JztcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIENvbHVtbk1hbmFnZXIucHJvdG90eXBlLmxlZnRDb2x1bW5zID0gZnVuY3Rpb24gbGVmdENvbHVtbnMoKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICByZXR1cm4gdGhpcy5fY2FjaGUoJ2xlZnRDb2x1bW5zJywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzNC5ncm91cGVkQ29sdW1ucygpLmZpbHRlcihmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICAgIHJldHVybiBjb2x1bW4uZml4ZWQgPT09ICdsZWZ0JyB8fCBjb2x1bW4uZml4ZWQgPT09IHRydWU7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBDb2x1bW5NYW5hZ2VyLnByb3RvdHlwZS5yaWdodENvbHVtbnMgPSBmdW5jdGlvbiByaWdodENvbHVtbnMoKSB7XG4gICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICByZXR1cm4gdGhpcy5fY2FjaGUoJ3JpZ2h0Q29sdW1ucycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfdGhpczUuZ3JvdXBlZENvbHVtbnMoKS5maWx0ZXIoZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICByZXR1cm4gY29sdW1uLmZpeGVkID09PSAncmlnaHQnO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgQ29sdW1uTWFuYWdlci5wcm90b3R5cGUubGVhZkNvbHVtbnMgPSBmdW5jdGlvbiBsZWFmQ29sdW1ucygpIHtcbiAgICB2YXIgX3RoaXM2ID0gdGhpcztcblxuICAgIHJldHVybiB0aGlzLl9jYWNoZSgnbGVhZkNvbHVtbnMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXM2Ll9sZWFmQ29sdW1ucyhfdGhpczYuY29sdW1ucyk7XG4gICAgfSk7XG4gIH07XG5cbiAgQ29sdW1uTWFuYWdlci5wcm90b3R5cGUubGVmdExlYWZDb2x1bW5zID0gZnVuY3Rpb24gbGVmdExlYWZDb2x1bW5zKCkge1xuICAgIHZhciBfdGhpczcgPSB0aGlzO1xuXG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlKCdsZWZ0TGVhZkNvbHVtbnMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXM3Ll9sZWFmQ29sdW1ucyhfdGhpczcubGVmdENvbHVtbnMoKSk7XG4gICAgfSk7XG4gIH07XG5cbiAgQ29sdW1uTWFuYWdlci5wcm90b3R5cGUucmlnaHRMZWFmQ29sdW1ucyA9IGZ1bmN0aW9uIHJpZ2h0TGVhZkNvbHVtbnMoKSB7XG4gICAgdmFyIF90aGlzOCA9IHRoaXM7XG5cbiAgICByZXR1cm4gdGhpcy5fY2FjaGUoJ3JpZ2h0TGVhZkNvbHVtbnMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXM4Ll9sZWFmQ29sdW1ucyhfdGhpczgucmlnaHRDb2x1bW5zKCkpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vIGFkZCBhcHByb3ByaWF0ZSByb3dzcGFuIGFuZCBjb2xzcGFuIHRvIGNvbHVtblxuXG5cbiAgQ29sdW1uTWFuYWdlci5wcm90b3R5cGUuZ3JvdXBlZENvbHVtbnMgPSBmdW5jdGlvbiBncm91cGVkQ29sdW1ucygpIHtcbiAgICB2YXIgX3RoaXM5ID0gdGhpcztcblxuICAgIHJldHVybiB0aGlzLl9jYWNoZSgnZ3JvdXBlZENvbHVtbnMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX2dyb3VwQ29sdW1ucyA9IGZ1bmN0aW9uIF9ncm91cENvbHVtbnMoY29sdW1ucykge1xuICAgICAgICB2YXIgY3VycmVudFJvdyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgICAgICAgdmFyIHBhcmVudENvbHVtbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgICAgIHZhciByb3dzID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBbXTtcblxuICAgICAgICAvLyB0cmFjayBob3cgbWFueSByb3dzIHdlIGdvdFxuICAgICAgICByb3dzW2N1cnJlbnRSb3ddID0gcm93c1tjdXJyZW50Um93XSB8fCBbXTtcbiAgICAgICAgdmFyIGdyb3VwZWQgPSBbXTtcbiAgICAgICAgdmFyIHNldFJvd1NwYW4gPSBmdW5jdGlvbiBzZXRSb3dTcGFuKGNvbHVtbikge1xuICAgICAgICAgIHZhciByb3dTcGFuID0gcm93cy5sZW5ndGggLSBjdXJyZW50Um93O1xuICAgICAgICAgIGlmIChjb2x1bW4gJiYgIWNvbHVtbi5jaGlsZHJlbiAmJiAvLyBwYXJlbnQgY29sdW1ucyBhcmUgc3VwcG9zZWQgdG8gYmUgb25lIHJvd1xuICAgICAgICAgIHJvd1NwYW4gPiAxICYmICghY29sdW1uLnJvd1NwYW4gfHwgY29sdW1uLnJvd1NwYW4gPCByb3dTcGFuKSkge1xuICAgICAgICAgICAgY29sdW1uLnJvd1NwYW4gPSByb3dTcGFuO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb2x1bW4sIGluZGV4KSB7XG4gICAgICAgICAgdmFyIG5ld0NvbHVtbiA9IF9leHRlbmRzKHt9LCBjb2x1bW4pO1xuICAgICAgICAgIHJvd3NbY3VycmVudFJvd10ucHVzaChuZXdDb2x1bW4pO1xuICAgICAgICAgIHBhcmVudENvbHVtbi5jb2xTcGFuID0gcGFyZW50Q29sdW1uLmNvbFNwYW4gfHwgMDtcbiAgICAgICAgICBpZiAobmV3Q29sdW1uLmNoaWxkcmVuICYmIG5ld0NvbHVtbi5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBuZXdDb2x1bW4uY2hpbGRyZW4gPSBfZ3JvdXBDb2x1bW5zKG5ld0NvbHVtbi5jaGlsZHJlbiwgY3VycmVudFJvdyArIDEsIG5ld0NvbHVtbiwgcm93cyk7XG4gICAgICAgICAgICBwYXJlbnRDb2x1bW4uY29sU3BhbiArPSBuZXdDb2x1bW4uY29sU3BhbjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50Q29sdW1uLmNvbFNwYW4rKztcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gdXBkYXRlIHJvd3NwYW4gdG8gYWxsIHNhbWUgcm93IGNvbHVtbnNcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd3NbY3VycmVudFJvd10ubGVuZ3RoIC0gMTsgKytpKSB7XG4gICAgICAgICAgICBzZXRSb3dTcGFuKHJvd3NbY3VycmVudFJvd11baV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBsYXN0IGNvbHVtbiwgdXBkYXRlIHJvd3NwYW4gaW1tZWRpYXRlbHlcbiAgICAgICAgICBpZiAoaW5kZXggKyAxID09PSBjb2x1bW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgc2V0Um93U3BhbihuZXdDb2x1bW4pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBncm91cGVkLnB1c2gobmV3Q29sdW1uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBncm91cGVkO1xuICAgICAgfTtcbiAgICAgIHJldHVybiBfZ3JvdXBDb2x1bW5zKF90aGlzOS5jb2x1bW5zKTtcbiAgICB9KTtcbiAgfTtcblxuICBDb2x1bW5NYW5hZ2VyLnByb3RvdHlwZS5ub3JtYWxpemUgPSBmdW5jdGlvbiBub3JtYWxpemUoZWxlbWVudHMpIHtcbiAgICB2YXIgX3RoaXMxMCA9IHRoaXM7XG5cbiAgICB2YXIgY29sdW1ucyA9IFtdO1xuICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goZWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBjb2x1bW4gPSBfZXh0ZW5kcyh7fSwgZWxlbWVudC5wcm9wcyk7XG4gICAgICBpZiAoZWxlbWVudC5rZXkpIHtcbiAgICAgICAgY29sdW1uLmtleSA9IGVsZW1lbnQua2V5O1xuICAgICAgfVxuICAgICAgaWYgKGVsZW1lbnQudHlwZS5pc1RhYmxlQ29sdW1uR3JvdXApIHtcbiAgICAgICAgY29sdW1uLmNoaWxkcmVuID0gX3RoaXMxMC5ub3JtYWxpemUoY29sdW1uLmNoaWxkcmVuKTtcbiAgICAgIH1cbiAgICAgIGNvbHVtbnMucHVzaChjb2x1bW4pO1xuICAgIH0pO1xuICAgIHJldHVybiBjb2x1bW5zO1xuICB9O1xuXG4gIENvbHVtbk1hbmFnZXIucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gcmVzZXQoY29sdW1ucywgZWxlbWVudHMpIHtcbiAgICB0aGlzLmNvbHVtbnMgPSBjb2x1bW5zIHx8IHRoaXMubm9ybWFsaXplKGVsZW1lbnRzKTtcbiAgICB0aGlzLl9jYWNoZWQgPSB7fTtcbiAgfTtcblxuICBDb2x1bW5NYW5hZ2VyLnByb3RvdHlwZS5fY2FjaGUgPSBmdW5jdGlvbiBfY2FjaGUobmFtZSwgZm4pIHtcbiAgICBpZiAobmFtZSBpbiB0aGlzLl9jYWNoZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jYWNoZWRbbmFtZV07XG4gICAgfVxuICAgIHRoaXMuX2NhY2hlZFtuYW1lXSA9IGZuKCk7XG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZFtuYW1lXTtcbiAgfTtcblxuICBDb2x1bW5NYW5hZ2VyLnByb3RvdHlwZS5fbGVhZkNvbHVtbnMgPSBmdW5jdGlvbiBfbGVhZkNvbHVtbnMoY29sdW1ucykge1xuICAgIHZhciBfdGhpczExID0gdGhpcztcblxuICAgIHZhciBsZWFmQ29sdW1ucyA9IFtdO1xuICAgIGNvbHVtbnMuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgICBpZiAoIWNvbHVtbi5jaGlsZHJlbikge1xuICAgICAgICBsZWFmQ29sdW1ucy5wdXNoKGNvbHVtbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZWFmQ29sdW1ucy5wdXNoLmFwcGx5KGxlYWZDb2x1bW5zLCBfdGhpczExLl9sZWFmQ29sdW1ucyhjb2x1bW4uY2hpbGRyZW4pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbGVhZkNvbHVtbnM7XG4gIH07XG5cbiAgcmV0dXJuIENvbHVtbk1hbmFnZXI7XG59KCk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbHVtbk1hbmFnZXI7IiwiaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHNoYWxsb3dlcXVhbCBmcm9tICdzaGFsbG93ZXF1YWwnO1xuXG52YXIgRXhwYW5kSWNvbiA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhFeHBhbmRJY29uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBFeHBhbmRJY29uKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFeHBhbmRJY29uKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgRXhwYW5kSWNvbi5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgIHJldHVybiAhc2hhbGxvd2VxdWFsKG5leHRQcm9wcywgdGhpcy5wcm9wcyk7XG4gIH07XG5cbiAgRXhwYW5kSWNvbi5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBleHBhbmRhYmxlID0gX3Byb3BzLmV4cGFuZGFibGUsXG4gICAgICAgIHByZWZpeENscyA9IF9wcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgIG9uRXhwYW5kID0gX3Byb3BzLm9uRXhwYW5kLFxuICAgICAgICBuZWVkSW5kZW50U3BhY2VkID0gX3Byb3BzLm5lZWRJbmRlbnRTcGFjZWQsXG4gICAgICAgIGV4cGFuZGVkID0gX3Byb3BzLmV4cGFuZGVkLFxuICAgICAgICByZWNvcmQgPSBfcHJvcHMucmVjb3JkO1xuXG4gICAgaWYgKGV4cGFuZGFibGUpIHtcbiAgICAgIHZhciBleHBhbmRDbGFzc05hbWUgPSBleHBhbmRlZCA/ICdleHBhbmRlZCcgOiAnY29sbGFwc2VkJztcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdzcGFuJywge1xuICAgICAgICBjbGFzc05hbWU6IHByZWZpeENscyArICctZXhwYW5kLWljb24gJyArIHByZWZpeENscyArICctJyArIGV4cGFuZENsYXNzTmFtZSxcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgICAgcmV0dXJuIG9uRXhwYW5kKHJlY29yZCwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobmVlZEluZGVudFNwYWNlZCkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1leHBhbmQtaWNvbiAnICsgcHJlZml4Q2xzICsgJy1zcGFjZWQnIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gRXhwYW5kSWNvbjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuRXhwYW5kSWNvbi5wcm9wVHlwZXMgPSB7XG4gIHJlY29yZDogUHJvcFR5cGVzLm9iamVjdCxcbiAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBleHBhbmRhYmxlOiBQcm9wVHlwZXMuYW55LFxuICBleHBhbmRlZDogUHJvcFR5cGVzLmJvb2wsXG4gIG5lZWRJbmRlbnRTcGFjZWQ6IFByb3BUeXBlcy5ib29sLFxuICBvbkV4cGFuZDogUHJvcFR5cGVzLmZ1bmNcbn07XG5leHBvcnQgZGVmYXVsdCBFeHBhbmRJY29uOyIsImltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdtaW5pLXN0b3JlJztcbmltcG9ydCBFeHBhbmRJY29uIGZyb20gJy4vRXhwYW5kSWNvbic7XG5cbnZhciBFeHBhbmRhYmxlUm93ID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEV4cGFuZGFibGVSb3csIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEV4cGFuZGFibGVSb3coKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFeHBhbmRhYmxlUm93KTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5oYXNFeHBhbmRJY29uID0gZnVuY3Rpb24gKGNvbHVtbkluZGV4KSB7XG4gICAgICB2YXIgZXhwYW5kUm93QnlDbGljayA9IF90aGlzLnByb3BzLmV4cGFuZFJvd0J5Q2xpY2s7XG5cbiAgICAgIHJldHVybiAhX3RoaXMuZXhwYW5kSWNvbkFzQ2VsbCAmJiAhZXhwYW5kUm93QnlDbGljayAmJiBjb2x1bW5JbmRleCA9PT0gX3RoaXMuZXhwYW5kSWNvbkNvbHVtbkluZGV4O1xuICAgIH0sIF90aGlzLmhhbmRsZUV4cGFuZENoYW5nZSA9IGZ1bmN0aW9uIChyZWNvcmQsIGV2ZW50KSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBvbkV4cGFuZGVkQ2hhbmdlID0gX3RoaXMkcHJvcHMub25FeHBhbmRlZENoYW5nZSxcbiAgICAgICAgICBleHBhbmRlZCA9IF90aGlzJHByb3BzLmV4cGFuZGVkLFxuICAgICAgICAgIHJvd0tleSA9IF90aGlzJHByb3BzLnJvd0tleTtcblxuICAgICAgaWYgKF90aGlzLmV4cGFuZGFibGUpIHtcbiAgICAgICAgb25FeHBhbmRlZENoYW5nZSghZXhwYW5kZWQsIHJlY29yZCwgZXZlbnQsIHJvd0tleSk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlUm93Q2xpY2sgPSBmdW5jdGlvbiAocmVjb3JkLCBpbmRleCwgZXZlbnQpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBleHBhbmRSb3dCeUNsaWNrID0gX3RoaXMkcHJvcHMyLmV4cGFuZFJvd0J5Q2xpY2ssXG4gICAgICAgICAgb25Sb3dDbGljayA9IF90aGlzJHByb3BzMi5vblJvd0NsaWNrO1xuXG4gICAgICBpZiAoZXhwYW5kUm93QnlDbGljaykge1xuICAgICAgICBfdGhpcy5oYW5kbGVFeHBhbmRDaGFuZ2UocmVjb3JkLCBldmVudCk7XG4gICAgICB9XG4gICAgICBpZiAob25Sb3dDbGljaykge1xuICAgICAgICBvblJvd0NsaWNrKHJlY29yZCwgaW5kZXgsIGV2ZW50KTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5yZW5kZXJFeHBhbmRJY29uID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHByZWZpeENscyA9IF90aGlzJHByb3BzMy5wcmVmaXhDbHMsXG4gICAgICAgICAgZXhwYW5kZWQgPSBfdGhpcyRwcm9wczMuZXhwYW5kZWQsXG4gICAgICAgICAgcmVjb3JkID0gX3RoaXMkcHJvcHMzLnJlY29yZCxcbiAgICAgICAgICBuZWVkSW5kZW50U3BhY2VkID0gX3RoaXMkcHJvcHMzLm5lZWRJbmRlbnRTcGFjZWQ7XG5cblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRXhwYW5kSWNvbiwge1xuICAgICAgICBleHBhbmRhYmxlOiBfdGhpcy5leHBhbmRhYmxlLFxuICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgb25FeHBhbmQ6IF90aGlzLmhhbmRsZUV4cGFuZENoYW5nZSxcbiAgICAgICAgbmVlZEluZGVudFNwYWNlZDogbmVlZEluZGVudFNwYWNlZCxcbiAgICAgICAgZXhwYW5kZWQ6IGV4cGFuZGVkLFxuICAgICAgICByZWNvcmQ6IHJlY29yZFxuICAgICAgfSk7XG4gICAgfSwgX3RoaXMucmVuZGVyRXhwYW5kSWNvbkNlbGwgPSBmdW5jdGlvbiAoY2VsbHMpIHtcbiAgICAgIGlmICghX3RoaXMuZXhwYW5kSWNvbkFzQ2VsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgcHJlZml4Q2xzID0gX3RoaXMucHJvcHMucHJlZml4Q2xzO1xuXG5cbiAgICAgIGNlbGxzLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3RkJyxcbiAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctZXhwYW5kLWljb24tY2VsbCcsIGtleTogJ3JjLXRhYmxlLWV4cGFuZC1pY29uLWNlbGwnIH0sXG4gICAgICAgIF90aGlzLnJlbmRlckV4cGFuZEljb24oKVxuICAgICAgKSk7XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBFeHBhbmRhYmxlUm93LnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuaGFuZGxlRGVzdHJveSgpO1xuICB9O1xuXG4gIEV4cGFuZGFibGVSb3cucHJvdG90eXBlLmhhbmRsZURlc3Ryb3kgPSBmdW5jdGlvbiBoYW5kbGVEZXN0cm95KCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBvbkV4cGFuZGVkQ2hhbmdlID0gX3Byb3BzLm9uRXhwYW5kZWRDaGFuZ2UsXG4gICAgICAgIHJvd0tleSA9IF9wcm9wcy5yb3dLZXksXG4gICAgICAgIHJlY29yZCA9IF9wcm9wcy5yZWNvcmQ7XG5cbiAgICBpZiAodGhpcy5leHBhbmRhYmxlKSB7XG4gICAgICBvbkV4cGFuZGVkQ2hhbmdlKGZhbHNlLCByZWNvcmQsIG51bGwsIHJvd0tleSwgdHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIEV4cGFuZGFibGVSb3cucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNoaWxkcmVuQ29sdW1uTmFtZSA9IF9wcm9wczIuY2hpbGRyZW5Db2x1bW5OYW1lLFxuICAgICAgICBleHBhbmRlZFJvd1JlbmRlciA9IF9wcm9wczIuZXhwYW5kZWRSb3dSZW5kZXIsXG4gICAgICAgIGluZGVudFNpemUgPSBfcHJvcHMyLmluZGVudFNpemUsXG4gICAgICAgIHJlY29yZCA9IF9wcm9wczIucmVjb3JkLFxuICAgICAgICBmaXhlZCA9IF9wcm9wczIuZml4ZWQ7XG5cblxuICAgIHRoaXMuZXhwYW5kSWNvbkFzQ2VsbCA9IGZpeGVkICE9PSAncmlnaHQnID8gdGhpcy5wcm9wcy5leHBhbmRJY29uQXNDZWxsIDogZmFsc2U7XG4gICAgdGhpcy5leHBhbmRJY29uQ29sdW1uSW5kZXggPSBmaXhlZCAhPT0gJ3JpZ2h0JyA/IHRoaXMucHJvcHMuZXhwYW5kSWNvbkNvbHVtbkluZGV4IDogLTE7XG4gICAgdmFyIGNoaWxkcmVuRGF0YSA9IHJlY29yZFtjaGlsZHJlbkNvbHVtbk5hbWVdO1xuICAgIHRoaXMuZXhwYW5kYWJsZSA9ICEhKGNoaWxkcmVuRGF0YSB8fCBleHBhbmRlZFJvd1JlbmRlcik7XG5cbiAgICB2YXIgZXhwYW5kYWJsZVJvd1Byb3BzID0ge1xuICAgICAgaW5kZW50U2l6ZTogaW5kZW50U2l6ZSxcbiAgICAgIG9uUm93Q2xpY2s6IHRoaXMuaGFuZGxlUm93Q2xpY2ssXG4gICAgICBoYXNFeHBhbmRJY29uOiB0aGlzLmhhc0V4cGFuZEljb24sXG4gICAgICByZW5kZXJFeHBhbmRJY29uOiB0aGlzLnJlbmRlckV4cGFuZEljb24sXG4gICAgICByZW5kZXJFeHBhbmRJY29uQ2VsbDogdGhpcy5yZW5kZXJFeHBhbmRJY29uQ2VsbFxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbihleHBhbmRhYmxlUm93UHJvcHMpO1xuICB9O1xuXG4gIHJldHVybiBFeHBhbmRhYmxlUm93O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5FeHBhbmRhYmxlUm93LnByb3BUeXBlcyA9IHtcbiAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHJvd0tleTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLmlzUmVxdWlyZWQsXG4gIGZpeGVkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYm9vbF0pLFxuICByZWNvcmQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgaW5kZW50U2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgbmVlZEluZGVudFNwYWNlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgZXhwYW5kUm93QnlDbGljazogUHJvcFR5cGVzLmJvb2wsXG4gIGV4cGFuZGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBleHBhbmRJY29uQXNDZWxsOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXhwYW5kSWNvbkNvbHVtbkluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBjaGlsZHJlbkNvbHVtbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGV4cGFuZGVkUm93UmVuZGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25FeHBhbmRlZENoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25Sb3dDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoZnVuY3Rpb24gKF9yZWYsIF9yZWYyKSB7XG4gIHZhciBleHBhbmRlZFJvd0tleXMgPSBfcmVmLmV4cGFuZGVkUm93S2V5cztcbiAgdmFyIHJvd0tleSA9IF9yZWYyLnJvd0tleTtcbiAgcmV0dXJuIHtcbiAgICBleHBhbmRlZDogISF+ZXhwYW5kZWRSb3dLZXlzLmluZGV4T2Yocm93S2V5KVxuICB9O1xufSkoRXhwYW5kYWJsZVJvdyk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdtaW5pLXN0b3JlJztcbmltcG9ydCB7IHBvbHlmaWxsIH0gZnJvbSAncmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQnO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJy4vVGFibGVSb3cnO1xuaW1wb3J0IHsgcmVtb3ZlIH0gZnJvbSAnLi91dGlscyc7XG5cbnZhciBFeHBhbmRhYmxlVGFibGUgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRXhwYW5kYWJsZVRhYmxlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBFeHBhbmRhYmxlVGFibGUocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXhwYW5kYWJsZVRhYmxlKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX2luaXRpYWxpc2VQcm9wcy5jYWxsKF90aGlzKTtcblxuICAgIHZhciBkYXRhID0gcHJvcHMuZGF0YSxcbiAgICAgICAgY2hpbGRyZW5Db2x1bW5OYW1lID0gcHJvcHMuY2hpbGRyZW5Db2x1bW5OYW1lLFxuICAgICAgICBkZWZhdWx0RXhwYW5kQWxsUm93cyA9IHByb3BzLmRlZmF1bHRFeHBhbmRBbGxSb3dzLFxuICAgICAgICBleHBhbmRlZFJvd0tleXMgPSBwcm9wcy5leHBhbmRlZFJvd0tleXMsXG4gICAgICAgIGRlZmF1bHRFeHBhbmRlZFJvd0tleXMgPSBwcm9wcy5kZWZhdWx0RXhwYW5kZWRSb3dLZXlzLFxuICAgICAgICBnZXRSb3dLZXkgPSBwcm9wcy5nZXRSb3dLZXk7XG5cblxuICAgIHZhciBmaW5uYWxFeHBhbmRlZFJvd0tleXMgPSBbXTtcbiAgICB2YXIgcm93cyA9IFtdLmNvbmNhdChkYXRhKTtcblxuICAgIGlmIChkZWZhdWx0RXhwYW5kQWxsUm93cykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciByb3cgPSByb3dzW2ldO1xuICAgICAgICBmaW5uYWxFeHBhbmRlZFJvd0tleXMucHVzaChnZXRSb3dLZXkocm93LCBpKSk7XG4gICAgICAgIHJvd3MgPSByb3dzLmNvbmNhdChyb3dbY2hpbGRyZW5Db2x1bW5OYW1lXSB8fCBbXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbm5hbEV4cGFuZGVkUm93S2V5cyA9IGV4cGFuZGVkUm93S2V5cyB8fCBkZWZhdWx0RXhwYW5kZWRSb3dLZXlzO1xuICAgIH1cblxuICAgIF90aGlzLmNvbHVtbk1hbmFnZXIgPSBwcm9wcy5jb2x1bW5NYW5hZ2VyO1xuICAgIF90aGlzLnN0b3JlID0gcHJvcHMuc3RvcmU7XG5cbiAgICBfdGhpcy5zdG9yZS5zZXRTdGF0ZSh7XG4gICAgICBleHBhbmRlZFJvd3NIZWlnaHQ6IHt9LFxuICAgICAgZXhwYW5kZWRSb3dLZXlzOiBmaW5uYWxFeHBhbmRlZFJvd0tleXNcbiAgICB9KTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBFeHBhbmRhYmxlVGFibGUucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBpZiAoJ2V4cGFuZGVkUm93S2V5cycgaW4gdGhpcy5wcm9wcykge1xuICAgICAgdGhpcy5zdG9yZS5zZXRTdGF0ZSh7XG4gICAgICAgIGV4cGFuZGVkUm93S2V5czogdGhpcy5wcm9wcy5leHBhbmRlZFJvd0tleXNcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBFeHBhbmRhYmxlVGFibGUucHJvdG90eXBlLnJlbmRlckV4cGFuZGVkUm93ID0gZnVuY3Rpb24gcmVuZGVyRXhwYW5kZWRSb3cocmVjb3JkLCBpbmRleCwgX3JlbmRlciwgY2xhc3NOYW1lLCBhbmNlc3RvcktleXMsIGluZGVudCwgZml4ZWQpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgcHJlZml4Q2xzID0gX3Byb3BzLnByZWZpeENscyxcbiAgICAgICAgZXhwYW5kSWNvbkFzQ2VsbCA9IF9wcm9wcy5leHBhbmRJY29uQXNDZWxsLFxuICAgICAgICBpbmRlbnRTaXplID0gX3Byb3BzLmluZGVudFNpemU7XG5cbiAgICB2YXIgY29sQ291bnQgPSB2b2lkIDA7XG4gICAgaWYgKGZpeGVkID09PSAnbGVmdCcpIHtcbiAgICAgIGNvbENvdW50ID0gdGhpcy5jb2x1bW5NYW5hZ2VyLmxlZnRMZWFmQ29sdW1ucygpLmxlbmd0aDtcbiAgICB9IGVsc2UgaWYgKGZpeGVkID09PSAncmlnaHQnKSB7XG4gICAgICBjb2xDb3VudCA9IHRoaXMuY29sdW1uTWFuYWdlci5yaWdodExlYWZDb2x1bW5zKCkubGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2xDb3VudCA9IHRoaXMuY29sdW1uTWFuYWdlci5sZWFmQ29sdW1ucygpLmxlbmd0aDtcbiAgICB9XG4gICAgdmFyIGNvbHVtbnMgPSBbe1xuICAgICAga2V5OiAnZXh0cmEtcm93JyxcbiAgICAgIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBjb2xTcGFuOiBjb2xDb3VudFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY2hpbGRyZW46IGZpeGVkICE9PSAncmlnaHQnID8gX3JlbmRlcihyZWNvcmQsIGluZGV4LCBpbmRlbnQpIDogJyZuYnNwOydcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XTtcbiAgICBpZiAoZXhwYW5kSWNvbkFzQ2VsbCAmJiBmaXhlZCAhPT0gJ3JpZ2h0Jykge1xuICAgICAgY29sdW1ucy51bnNoaWZ0KHtcbiAgICAgICAga2V5OiAnZXhwYW5kLWljb24tcGxhY2Vob2xkZXInLFxuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHZhciBwYXJlbnRLZXkgPSBhbmNlc3RvcktleXNbYW5jZXN0b3JLZXlzLmxlbmd0aCAtIDFdO1xuICAgIHZhciByb3dLZXkgPSBwYXJlbnRLZXkgKyAnLWV4dHJhLXJvdyc7XG4gICAgdmFyIGNvbXBvbmVudHMgPSB7XG4gICAgICBib2R5OiB7XG4gICAgICAgIHJvdzogJ3RyJyxcbiAgICAgICAgY2VsbDogJ3RkJ1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChUYWJsZVJvdywge1xuICAgICAga2V5OiByb3dLZXksXG4gICAgICBjb2x1bW5zOiBjb2x1bW5zLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICByb3dLZXk6IHJvd0tleSxcbiAgICAgIGFuY2VzdG9yS2V5czogYW5jZXN0b3JLZXlzLFxuICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMgKyAnLWV4cGFuZGVkLXJvdycsXG4gICAgICBpbmRlbnRTaXplOiBpbmRlbnRTaXplLFxuICAgICAgaW5kZW50OiBpbmRlbnQsXG4gICAgICBmaXhlZDogZml4ZWQsXG4gICAgICBjb21wb25lbnRzOiBjb21wb25lbnRzLFxuICAgICAgZXhwYW5kZWRSb3c6IHRydWVcbiAgICB9KTtcbiAgfTtcblxuICBFeHBhbmRhYmxlVGFibGUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgIGRhdGEgPSBfcHJvcHMyLmRhdGEsXG4gICAgICAgIGNoaWxkcmVuQ29sdW1uTmFtZSA9IF9wcm9wczIuY2hpbGRyZW5Db2x1bW5OYW1lLFxuICAgICAgICBjaGlsZHJlbiA9IF9wcm9wczIuY2hpbGRyZW47XG5cbiAgICB2YXIgbmVlZEluZGVudFNwYWNlZCA9IGRhdGEuc29tZShmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgICByZXR1cm4gcmVjb3JkW2NoaWxkcmVuQ29sdW1uTmFtZV07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2hpbGRyZW4oe1xuICAgICAgcHJvcHM6IHRoaXMucHJvcHMsXG4gICAgICBuZWVkSW5kZW50U3BhY2VkOiBuZWVkSW5kZW50U3BhY2VkLFxuICAgICAgcmVuZGVyUm93czogdGhpcy5yZW5kZXJSb3dzLFxuICAgICAgaGFuZGxlRXhwYW5kQ2hhbmdlOiB0aGlzLmhhbmRsZUV4cGFuZENoYW5nZSxcbiAgICAgIHJlbmRlckV4cGFuZEluZGVudENlbGw6IHRoaXMucmVuZGVyRXhwYW5kSW5kZW50Q2VsbFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBFeHBhbmRhYmxlVGFibGU7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkV4cGFuZGFibGVUYWJsZS5wcm9wVHlwZXMgPSB7XG4gIGV4cGFuZEljb25Bc0NlbGw6IFByb3BUeXBlcy5ib29sLFxuICBleHBhbmRlZFJvd0tleXM6IFByb3BUeXBlcy5hcnJheSxcbiAgZXhwYW5kZWRSb3dDbGFzc05hbWU6IFByb3BUeXBlcy5mdW5jLFxuICBkZWZhdWx0RXhwYW5kQWxsUm93czogUHJvcFR5cGVzLmJvb2wsXG4gIGRlZmF1bHRFeHBhbmRlZFJvd0tleXM6IFByb3BUeXBlcy5hcnJheSxcbiAgZXhwYW5kSWNvbkNvbHVtbkluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBleHBhbmRlZFJvd1JlbmRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGNoaWxkcmVuQ29sdW1uTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaW5kZW50U2l6ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgb25FeHBhbmQ6IFByb3BUeXBlcy5mdW5jLFxuICBvbkV4cGFuZGVkUm93c0NoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGNvbHVtbk1hbmFnZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgc3RvcmU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGRhdGE6IFByb3BUeXBlcy5hcnJheSxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGdldFJvd0tleTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufTtcbkV4cGFuZGFibGVUYWJsZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGV4cGFuZEljb25Bc0NlbGw6IGZhbHNlLFxuICBleHBhbmRlZFJvd0NsYXNzTmFtZTogZnVuY3Rpb24gZXhwYW5kZWRSb3dDbGFzc05hbWUoKSB7XG4gICAgcmV0dXJuICcnO1xuICB9LFxuICBleHBhbmRJY29uQ29sdW1uSW5kZXg6IDAsXG4gIGRlZmF1bHRFeHBhbmRBbGxSb3dzOiBmYWxzZSxcbiAgZGVmYXVsdEV4cGFuZGVkUm93S2V5czogW10sXG4gIGNoaWxkcmVuQ29sdW1uTmFtZTogJ2NoaWxkcmVuJyxcbiAgaW5kZW50U2l6ZTogMTUsXG4gIG9uRXhwYW5kOiBmdW5jdGlvbiBvbkV4cGFuZCgpIHt9LFxuICBvbkV4cGFuZGVkUm93c0NoYW5nZTogZnVuY3Rpb24gb25FeHBhbmRlZFJvd3NDaGFuZ2UoKSB7fVxufTtcblxudmFyIF9pbml0aWFsaXNlUHJvcHMgPSBmdW5jdGlvbiBfaW5pdGlhbGlzZVByb3BzKCkge1xuICB2YXIgX3RoaXMyID0gdGhpcztcblxuICB0aGlzLmhhbmRsZUV4cGFuZENoYW5nZSA9IGZ1bmN0aW9uIChleHBhbmRlZCwgcmVjb3JkLCBldmVudCwgcm93S2V5KSB7XG4gICAgdmFyIGRlc3Ryb3kgPSBhcmd1bWVudHMubGVuZ3RoID4gNCAmJiBhcmd1bWVudHNbNF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s0XSA6IGZhbHNlO1xuXG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgdmFyIF9wcm9wczMgPSBfdGhpczIucHJvcHMsXG4gICAgICAgIG9uRXhwYW5kZWRSb3dzQ2hhbmdlID0gX3Byb3BzMy5vbkV4cGFuZGVkUm93c0NoYW5nZSxcbiAgICAgICAgb25FeHBhbmQgPSBfcHJvcHMzLm9uRXhwYW5kO1xuXG4gICAgdmFyIF9zdG9yZSRnZXRTdGF0ZSA9IF90aGlzMi5zdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgICBleHBhbmRlZFJvd0tleXMgPSBfc3RvcmUkZ2V0U3RhdGUuZXhwYW5kZWRSb3dLZXlzO1xuXG4gICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICAvLyByb3cgd2FzIGV4cGFuZWRcbiAgICAgIGV4cGFuZGVkUm93S2V5cyA9IFtdLmNvbmNhdChleHBhbmRlZFJvd0tleXMsIFtyb3dLZXldKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gcm93IHdhcyBjb2xsYXBzZVxuICAgICAgdmFyIGV4cGFuZGVkUm93SW5kZXggPSBleHBhbmRlZFJvd0tleXMuaW5kZXhPZihyb3dLZXkpO1xuICAgICAgaWYgKGV4cGFuZGVkUm93SW5kZXggIT09IC0xKSB7XG4gICAgICAgIGV4cGFuZGVkUm93S2V5cyA9IHJlbW92ZShleHBhbmRlZFJvd0tleXMsIHJvd0tleSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFfdGhpczIucHJvcHMuZXhwYW5kZWRSb3dLZXlzKSB7XG4gICAgICBfdGhpczIuc3RvcmUuc2V0U3RhdGUoeyBleHBhbmRlZFJvd0tleXM6IGV4cGFuZGVkUm93S2V5cyB9KTtcbiAgICB9XG5cbiAgICBvbkV4cGFuZGVkUm93c0NoYW5nZShleHBhbmRlZFJvd0tleXMpO1xuICAgIGlmICghZGVzdHJveSkge1xuICAgICAgb25FeHBhbmQoZXhwYW5kZWQsIHJlY29yZCk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMucmVuZGVyRXhwYW5kSW5kZW50Q2VsbCA9IGZ1bmN0aW9uIChyb3dzLCBmaXhlZCkge1xuICAgIHZhciBfcHJvcHM0ID0gX3RoaXMyLnByb3BzLFxuICAgICAgICBwcmVmaXhDbHMgPSBfcHJvcHM0LnByZWZpeENscyxcbiAgICAgICAgZXhwYW5kSWNvbkFzQ2VsbCA9IF9wcm9wczQuZXhwYW5kSWNvbkFzQ2VsbDtcblxuICAgIGlmICghZXhwYW5kSWNvbkFzQ2VsbCB8fCBmaXhlZCA9PT0gJ3JpZ2h0JyB8fCAhcm93cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaWNvbkNvbHVtbiA9IHtcbiAgICAgIGtleTogJ3JjLXRhYmxlLWV4cGFuZC1pY29uLWNlbGwnLFxuICAgICAgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWV4cGFuZC1pY29uLXRoJyxcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIHJvd1NwYW46IHJvd3MubGVuZ3RoXG4gICAgfTtcblxuICAgIHJvd3NbMF0udW5zaGlmdChfZXh0ZW5kcyh7fSwgaWNvbkNvbHVtbiwgeyBjb2x1bW46IGljb25Db2x1bW4gfSkpO1xuICB9O1xuXG4gIHRoaXMucmVuZGVyUm93cyA9IGZ1bmN0aW9uIChyZW5kZXJSb3dzLCByb3dzLCByZWNvcmQsIGluZGV4LCBpbmRlbnQsIGZpeGVkLCBwYXJlbnRLZXksIGFuY2VzdG9yS2V5cykge1xuICAgIHZhciBfcHJvcHM1ID0gX3RoaXMyLnByb3BzLFxuICAgICAgICBleHBhbmRlZFJvd0NsYXNzTmFtZSA9IF9wcm9wczUuZXhwYW5kZWRSb3dDbGFzc05hbWUsXG4gICAgICAgIGV4cGFuZGVkUm93UmVuZGVyID0gX3Byb3BzNS5leHBhbmRlZFJvd1JlbmRlcixcbiAgICAgICAgY2hpbGRyZW5Db2x1bW5OYW1lID0gX3Byb3BzNS5jaGlsZHJlbkNvbHVtbk5hbWU7XG5cbiAgICB2YXIgY2hpbGRyZW5EYXRhID0gcmVjb3JkW2NoaWxkcmVuQ29sdW1uTmFtZV07XG4gICAgdmFyIG5leHRBbmNlc3RvcktleXMgPSBbXS5jb25jYXQoYW5jZXN0b3JLZXlzLCBbcGFyZW50S2V5XSk7XG4gICAgdmFyIG5leHRJbmRlbnQgPSBpbmRlbnQgKyAxO1xuXG4gICAgaWYgKGV4cGFuZGVkUm93UmVuZGVyKSB7XG4gICAgICByb3dzLnB1c2goX3RoaXMyLnJlbmRlckV4cGFuZGVkUm93KHJlY29yZCwgaW5kZXgsIGV4cGFuZGVkUm93UmVuZGVyLCBleHBhbmRlZFJvd0NsYXNzTmFtZShyZWNvcmQsIGluZGV4LCBpbmRlbnQpLCBuZXh0QW5jZXN0b3JLZXlzLCBuZXh0SW5kZW50LCBmaXhlZCkpO1xuICAgIH1cblxuICAgIGlmIChjaGlsZHJlbkRhdGEpIHtcbiAgICAgIHJvd3MucHVzaC5hcHBseShyb3dzLCByZW5kZXJSb3dzKGNoaWxkcmVuRGF0YSwgbmV4dEluZGVudCwgbmV4dEFuY2VzdG9yS2V5cykpO1xuICAgIH1cbiAgfTtcbn07XG5cbnBvbHlmaWxsKEV4cGFuZGFibGVUYWJsZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKShFeHBhbmRhYmxlVGFibGUpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgbWVhc3VyZVNjcm9sbGJhciB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IEJhc2VUYWJsZSBmcm9tICcuL0Jhc2VUYWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRUYWJsZShwcm9wcywgX3JlZikge1xuICB2YXIgdGFibGUgPSBfcmVmLnRhYmxlO1xuICB2YXIgX3RhYmxlJHByb3BzID0gdGFibGUucHJvcHMsXG4gICAgICBwcmVmaXhDbHMgPSBfdGFibGUkcHJvcHMucHJlZml4Q2xzLFxuICAgICAgc2Nyb2xsID0gX3RhYmxlJHByb3BzLnNjcm9sbCxcbiAgICAgIHNob3dIZWFkZXIgPSBfdGFibGUkcHJvcHMuc2hvd0hlYWRlcjtcbiAgdmFyIGNvbHVtbnMgPSBwcm9wcy5jb2x1bW5zLFxuICAgICAgZml4ZWQgPSBwcm9wcy5maXhlZCxcbiAgICAgIHRhYmxlQ2xhc3NOYW1lID0gcHJvcHMudGFibGVDbGFzc05hbWUsXG4gICAgICBoYW5kbGVCb2R5U2Nyb2xsTGVmdCA9IHByb3BzLmhhbmRsZUJvZHlTY3JvbGxMZWZ0LFxuICAgICAgZXhwYW5kZXIgPSBwcm9wcy5leHBhbmRlcjtcbiAgdmFyIHNhdmVSZWYgPSB0YWJsZS5zYXZlUmVmO1xuICB2YXIgdXNlRml4ZWRIZWFkZXIgPSB0YWJsZS5wcm9wcy51c2VGaXhlZEhlYWRlcjtcblxuICB2YXIgaGVhZFN0eWxlID0ge307XG5cbiAgaWYgKHNjcm9sbC55KSB7XG4gICAgdXNlRml4ZWRIZWFkZXIgPSB0cnVlO1xuICAgIC8vIEFkZCBuZWdhdGl2ZSBtYXJnaW4gYm90dG9tIGZvciBzY3JvbGwgYmFyIG92ZXJmbG93IGJ1Z1xuICAgIHZhciBzY3JvbGxiYXJXaWR0aCA9IG1lYXN1cmVTY3JvbGxiYXIoJ2hvcml6b250YWwnKTtcbiAgICBpZiAoc2Nyb2xsYmFyV2lkdGggPiAwICYmICFmaXhlZCkge1xuICAgICAgaGVhZFN0eWxlLm1hcmdpbkJvdHRvbSA9ICctJyArIHNjcm9sbGJhcldpZHRoICsgJ3B4JztcbiAgICAgIGhlYWRTdHlsZS5wYWRkaW5nQm90dG9tID0gJzBweCc7XG4gICAgfVxuICB9XG5cbiAgaWYgKCF1c2VGaXhlZEhlYWRlciB8fCAhc2hvd0hlYWRlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgJ2RpdicsXG4gICAge1xuICAgICAga2V5OiAnaGVhZFRhYmxlJyxcbiAgICAgIHJlZjogZml4ZWQgPyBudWxsIDogc2F2ZVJlZignaGVhZFRhYmxlJyksXG4gICAgICBjbGFzc05hbWU6IHByZWZpeENscyArICctaGVhZGVyJyxcbiAgICAgIHN0eWxlOiBoZWFkU3R5bGUsXG4gICAgICBvblNjcm9sbDogaGFuZGxlQm9keVNjcm9sbExlZnRcbiAgICB9LFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmFzZVRhYmxlLCB7XG4gICAgICB0YWJsZUNsYXNzTmFtZTogdGFibGVDbGFzc05hbWUsXG4gICAgICBoYXNIZWFkOiB0cnVlLFxuICAgICAgaGFzQm9keTogZmFsc2UsXG4gICAgICBmaXhlZDogZml4ZWQsXG4gICAgICBjb2x1bW5zOiBjb2x1bW5zLFxuICAgICAgZXhwYW5kZXI6IGV4cGFuZGVyXG4gICAgfSlcbiAgKTtcbn1cblxuSGVhZFRhYmxlLnByb3BUeXBlcyA9IHtcbiAgZml4ZWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5ib29sXSksXG4gIGNvbHVtbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICB0YWJsZUNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBoYW5kbGVCb2R5U2Nyb2xsTGVmdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZXhwYW5kZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuSGVhZFRhYmxlLmNvbnRleHRUeXBlcyA9IHtcbiAgdGFibGU6IFByb3BUeXBlcy5hbnlcbn07IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzaGFsbG93ZXF1YWwgZnJvbSAnc2hhbGxvd2VxdWFsJztcbmltcG9ydCBhZGRFdmVudExpc3RlbmVyIGZyb20gJ3JjLXV0aWwvZXMvRG9tL2FkZEV2ZW50TGlzdGVuZXInO1xuaW1wb3J0IHsgUHJvdmlkZXIsIGNyZWF0ZSB9IGZyb20gJ21pbmktc3RvcmUnO1xuaW1wb3J0IG1lcmdlIGZyb20gJ2xvZGFzaC9tZXJnZSc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICdjb21wb25lbnQtY2xhc3Nlcyc7XG5pbXBvcnQgeyBwb2x5ZmlsbCB9IGZyb20gJ3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0JztcbmltcG9ydCB7IGRlYm91bmNlLCB3YXJuaW5nT25jZSB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IENvbHVtbk1hbmFnZXIgZnJvbSAnLi9Db2x1bW5NYW5hZ2VyJztcbmltcG9ydCBIZWFkVGFibGUgZnJvbSAnLi9IZWFkVGFibGUnO1xuaW1wb3J0IEJvZHlUYWJsZSBmcm9tICcuL0JvZHlUYWJsZSc7XG5pbXBvcnQgRXhwYW5kYWJsZVRhYmxlIGZyb20gJy4vRXhwYW5kYWJsZVRhYmxlJztcblxudmFyIFRhYmxlID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFRhYmxlLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBUYWJsZS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAobmV4dFByb3BzLmNvbHVtbnMgJiYgbmV4dFByb3BzLmNvbHVtbnMgIT09IHByZXZTdGF0ZS5jb2x1bW5zKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb2x1bW5zOiBuZXh0UHJvcHMuY29sdW1ucyxcbiAgICAgICAgY2hpbGRyZW46IG51bGxcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChuZXh0UHJvcHMuY2hpbGRyZW4gIT09IHByZXZTdGF0ZS5jaGlsZHJlbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29sdW1uczogbnVsbCxcbiAgICAgICAgY2hpbGRyZW46IG5leHRQcm9wcy5jaGlsZHJlblxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgZnVuY3Rpb24gVGFibGUocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGFibGUpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHt9O1xuXG4gICAgX3RoaXMuZ2V0Um93S2V5ID0gZnVuY3Rpb24gKHJlY29yZCwgaW5kZXgpIHtcbiAgICAgIHZhciByb3dLZXkgPSBfdGhpcy5wcm9wcy5yb3dLZXk7XG4gICAgICB2YXIga2V5ID0gdHlwZW9mIHJvd0tleSA9PT0gJ2Z1bmN0aW9uJyA/IHJvd0tleShyZWNvcmQsIGluZGV4KSA6IHJlY29yZFtyb3dLZXldO1xuICAgICAgd2FybmluZ09uY2Uoa2V5ICE9PSB1bmRlZmluZWQsICdFYWNoIHJlY29yZCBpbiB0YWJsZSBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBga2V5YCBwcm9wLCcgKyAnb3Igc2V0IGByb3dLZXlgIHRvIGFuIHVuaXF1ZSBwcmltYXJ5IGtleS4nKTtcbiAgICAgIHJldHVybiBrZXkgPT09IHVuZGVmaW5lZCA/IGluZGV4IDoga2V5O1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVXaW5kb3dSZXNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5zeW5jRml4ZWRUYWJsZVJvd0hlaWdodCgpO1xuICAgICAgX3RoaXMuc2V0U2Nyb2xsUG9zaXRpb25DbGFzc05hbWUoKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc3luY0ZpeGVkVGFibGVSb3dIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdGFibGVSZWN0ID0gX3RoaXMudGFibGVOb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgLy8gSWYgdGFibGVOb2RlJ3MgaGVpZ2h0IGxlc3MgdGhhbiAwLCBzdXBwb3NlIGl0IGlzIGhpZGRlbiBhbmQgZG9uJ3QgcmVjYWxjdWxhdGUgcm93SGVpZ2h0LlxuICAgICAgLy8gc2VlOiBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy80ODM2XG4gICAgICBpZiAodGFibGVSZWN0LmhlaWdodCAhPT0gdW5kZWZpbmVkICYmIHRhYmxlUmVjdC5oZWlnaHQgPD0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgcHJlZml4Q2xzID0gX3RoaXMucHJvcHMucHJlZml4Q2xzO1xuXG4gICAgICB2YXIgaGVhZFJvd3MgPSBfdGhpcy5oZWFkVGFibGUgPyBfdGhpcy5oZWFkVGFibGUucXVlcnlTZWxlY3RvckFsbCgndGhlYWQnKSA6IF90aGlzLmJvZHlUYWJsZS5xdWVyeVNlbGVjdG9yQWxsKCd0aGVhZCcpO1xuICAgICAgdmFyIGJvZHlSb3dzID0gX3RoaXMuYm9keVRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgcHJlZml4Q2xzICsgJy1yb3cnKSB8fCBbXTtcbiAgICAgIHZhciBmaXhlZENvbHVtbnNIZWFkUm93c0hlaWdodCA9IFtdLm1hcC5jYWxsKGhlYWRSb3dzLCBmdW5jdGlvbiAocm93KSB7XG4gICAgICAgIHJldHVybiByb3cuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IHx8ICdhdXRvJztcbiAgICAgIH0pO1xuICAgICAgdmFyIGZpeGVkQ29sdW1uc0JvZHlSb3dzSGVpZ2h0ID0gW10ubWFwLmNhbGwoYm9keVJvd3MsIGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgcmV0dXJuIHJvdy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgfHwgJ2F1dG8nO1xuICAgICAgfSk7XG4gICAgICB2YXIgc3RhdGUgPSBfdGhpcy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgaWYgKHNoYWxsb3dlcXVhbChzdGF0ZS5maXhlZENvbHVtbnNIZWFkUm93c0hlaWdodCwgZml4ZWRDb2x1bW5zSGVhZFJvd3NIZWlnaHQpICYmIHNoYWxsb3dlcXVhbChzdGF0ZS5maXhlZENvbHVtbnNCb2R5Um93c0hlaWdodCwgZml4ZWRDb2x1bW5zQm9keVJvd3NIZWlnaHQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc3RvcmUuc2V0U3RhdGUoe1xuICAgICAgICBmaXhlZENvbHVtbnNIZWFkUm93c0hlaWdodDogZml4ZWRDb2x1bW5zSGVhZFJvd3NIZWlnaHQsXG4gICAgICAgIGZpeGVkQ29sdW1uc0JvZHlSb3dzSGVpZ2h0OiBmaXhlZENvbHVtbnNCb2R5Um93c0hlaWdodFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUJvZHlTY3JvbGxMZWZ0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIC8vIEZpeCBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy83NjM1XG4gICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0ICE9PSBlLnRhcmdldCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMkc2Nyb2xsID0gX3RoaXMucHJvcHMuc2Nyb2xsLFxuICAgICAgICAgIHNjcm9sbCA9IF90aGlzJHByb3BzJHNjcm9sbCA9PT0gdW5kZWZpbmVkID8ge30gOiBfdGhpcyRwcm9wcyRzY3JvbGw7XG4gICAgICB2YXIgaGVhZFRhYmxlID0gX3RoaXMuaGVhZFRhYmxlLFxuICAgICAgICAgIGJvZHlUYWJsZSA9IF90aGlzLmJvZHlUYWJsZTtcblxuICAgICAgaWYgKHRhcmdldC5zY3JvbGxMZWZ0ICE9PSBfdGhpcy5sYXN0U2Nyb2xsTGVmdCAmJiBzY3JvbGwueCkge1xuICAgICAgICBpZiAodGFyZ2V0ID09PSBib2R5VGFibGUgJiYgaGVhZFRhYmxlKSB7XG4gICAgICAgICAgaGVhZFRhYmxlLnNjcm9sbExlZnQgPSB0YXJnZXQuc2Nyb2xsTGVmdDtcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgPT09IGhlYWRUYWJsZSAmJiBib2R5VGFibGUpIHtcbiAgICAgICAgICBib2R5VGFibGUuc2Nyb2xsTGVmdCA9IHRhcmdldC5zY3JvbGxMZWZ0O1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLnNldFNjcm9sbFBvc2l0aW9uQ2xhc3NOYW1lKCk7XG4gICAgICB9XG4gICAgICAvLyBSZW1lbWJlciBsYXN0IHNjcm9sbExlZnQgZm9yIHNjcm9sbCBkaXJlY3Rpb24gZGV0ZWN0aW5nLlxuICAgICAgX3RoaXMubGFzdFNjcm9sbExlZnQgPSB0YXJnZXQuc2Nyb2xsTGVmdDtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlQm9keVNjcm9sbFRvcCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAvLyBGaXggaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvOTAzM1xuICAgICAgaWYgKGUuY3VycmVudFRhcmdldCAhPT0gdGFyZ2V0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBfdGhpcyRwcm9wcyRzY3JvbGwyID0gX3RoaXMucHJvcHMuc2Nyb2xsLFxuICAgICAgICAgIHNjcm9sbCA9IF90aGlzJHByb3BzJHNjcm9sbDIgPT09IHVuZGVmaW5lZCA/IHt9IDogX3RoaXMkcHJvcHMkc2Nyb2xsMjtcbiAgICAgIHZhciBoZWFkVGFibGUgPSBfdGhpcy5oZWFkVGFibGUsXG4gICAgICAgICAgYm9keVRhYmxlID0gX3RoaXMuYm9keVRhYmxlLFxuICAgICAgICAgIGZpeGVkQ29sdW1uc0JvZHlMZWZ0ID0gX3RoaXMuZml4ZWRDb2x1bW5zQm9keUxlZnQsXG4gICAgICAgICAgZml4ZWRDb2x1bW5zQm9keVJpZ2h0ID0gX3RoaXMuZml4ZWRDb2x1bW5zQm9keVJpZ2h0O1xuXG4gICAgICBpZiAodGFyZ2V0LnNjcm9sbFRvcCAhPT0gX3RoaXMubGFzdFNjcm9sbFRvcCAmJiBzY3JvbGwueSAmJiB0YXJnZXQgIT09IGhlYWRUYWJsZSkge1xuICAgICAgICB2YXIgc2Nyb2xsVG9wID0gdGFyZ2V0LnNjcm9sbFRvcDtcbiAgICAgICAgaWYgKGZpeGVkQ29sdW1uc0JvZHlMZWZ0ICYmIHRhcmdldCAhPT0gZml4ZWRDb2x1bW5zQm9keUxlZnQpIHtcbiAgICAgICAgICBmaXhlZENvbHVtbnNCb2R5TGVmdC5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpeGVkQ29sdW1uc0JvZHlSaWdodCAmJiB0YXJnZXQgIT09IGZpeGVkQ29sdW1uc0JvZHlSaWdodCkge1xuICAgICAgICAgIGZpeGVkQ29sdW1uc0JvZHlSaWdodC5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlUYWJsZSAmJiB0YXJnZXQgIT09IGJvZHlUYWJsZSkge1xuICAgICAgICAgIGJvZHlUYWJsZS5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIFJlbWVtYmVyIGxhc3Qgc2Nyb2xsVG9wIGZvciBzY3JvbGwgZGlyZWN0aW9uIGRldGVjdGluZy5cbiAgICAgIF90aGlzLmxhc3RTY3JvbGxUb3AgPSB0YXJnZXQuc2Nyb2xsVG9wO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVCb2R5U2Nyb2xsID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIF90aGlzLmhhbmRsZUJvZHlTY3JvbGxMZWZ0KGUpO1xuICAgICAgX3RoaXMuaGFuZGxlQm9keVNjcm9sbFRvcChlKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuaGFuZGxlV2hlZWwgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyRzY3JvbGwzID0gX3RoaXMucHJvcHMuc2Nyb2xsLFxuICAgICAgICAgIHNjcm9sbCA9IF90aGlzJHByb3BzJHNjcm9sbDMgPT09IHVuZGVmaW5lZCA/IHt9IDogX3RoaXMkcHJvcHMkc2Nyb2xsMztcblxuICAgICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9UcmlkZW50XFwvN1xcLi8pICYmIHNjcm9sbC55KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciB3ZCA9IGV2ZW50LmRlbHRhWTtcbiAgICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgdmFyIGJvZHlUYWJsZSA9IF90aGlzLmJvZHlUYWJsZSxcbiAgICAgICAgICAgIGZpeGVkQ29sdW1uc0JvZHlMZWZ0ID0gX3RoaXMuZml4ZWRDb2x1bW5zQm9keUxlZnQsXG4gICAgICAgICAgICBmaXhlZENvbHVtbnNCb2R5UmlnaHQgPSBfdGhpcy5maXhlZENvbHVtbnNCb2R5UmlnaHQ7XG5cbiAgICAgICAgdmFyIHNjcm9sbFRvcCA9IDA7XG5cbiAgICAgICAgaWYgKF90aGlzLmxhc3RTY3JvbGxUb3ApIHtcbiAgICAgICAgICBzY3JvbGxUb3AgPSBfdGhpcy5sYXN0U2Nyb2xsVG9wICsgd2Q7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2Nyb2xsVG9wID0gd2Q7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZml4ZWRDb2x1bW5zQm9keUxlZnQgJiYgdGFyZ2V0ICE9PSBmaXhlZENvbHVtbnNCb2R5TGVmdCkge1xuICAgICAgICAgIGZpeGVkQ29sdW1uc0JvZHlMZWZ0LnNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZml4ZWRDb2x1bW5zQm9keVJpZ2h0ICYmIHRhcmdldCAhPT0gZml4ZWRDb2x1bW5zQm9keVJpZ2h0KSB7XG4gICAgICAgICAgZml4ZWRDb2x1bW5zQm9keVJpZ2h0LnNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9keVRhYmxlICYmIHRhcmdldCAhPT0gYm9keVRhYmxlKSB7XG4gICAgICAgICAgYm9keVRhYmxlLnNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5zYXZlUmVmID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBfdGhpc1tuYW1lXSA9IG5vZGU7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBbJ29uUm93Q2xpY2snLCAnb25Sb3dEb3VibGVDbGljaycsICdvblJvd0NvbnRleHRNZW51JywgJ29uUm93TW91c2VFbnRlcicsICdvblJvd01vdXNlTGVhdmUnXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB3YXJuaW5nT25jZShwcm9wc1tuYW1lXSA9PT0gdW5kZWZpbmVkLCBuYW1lICsgJyBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIG9uUm93IGluc3RlYWQuJyk7XG4gICAgfSk7XG5cbiAgICB3YXJuaW5nT25jZShwcm9wcy5nZXRCb2R5V3JhcHBlciA9PT0gdW5kZWZpbmVkLCAnZ2V0Qm9keVdyYXBwZXIgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBjdXN0b20gY29tcG9uZW50cyBpbnN0ZWFkLicpO1xuXG4gICAgX3RoaXMuY29sdW1uTWFuYWdlciA9IG5ldyBDb2x1bW5NYW5hZ2VyKHByb3BzLmNvbHVtbnMsIHByb3BzLmNoaWxkcmVuKTtcblxuICAgIF90aGlzLnN0b3JlID0gY3JlYXRlKHtcbiAgICAgIGN1cnJlbnRIb3ZlcktleTogbnVsbCxcbiAgICAgIGZpeGVkQ29sdW1uc0hlYWRSb3dzSGVpZ2h0OiBbXSxcbiAgICAgIGZpeGVkQ29sdW1uc0JvZHlSb3dzSGVpZ2h0OiBbXVxuICAgIH0pO1xuXG4gICAgX3RoaXMuc2V0U2Nyb2xsUG9zaXRpb24oJ2xlZnQnKTtcblxuICAgIF90aGlzLmRlYm91bmNlZFdpbmRvd1Jlc2l6ZSA9IGRlYm91bmNlKF90aGlzLmhhbmRsZVdpbmRvd1Jlc2l6ZSwgMTUwKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBUYWJsZS5wcm90b3R5cGUuZ2V0Q2hpbGRDb250ZXh0ID0gZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB0YWJsZToge1xuICAgICAgICBwcm9wczogdGhpcy5wcm9wcyxcbiAgICAgICAgY29sdW1uTWFuYWdlcjogdGhpcy5jb2x1bW5NYW5hZ2VyLFxuICAgICAgICBzYXZlUmVmOiB0aGlzLnNhdmVSZWYsXG4gICAgICAgIGNvbXBvbmVudHM6IG1lcmdlKHtcbiAgICAgICAgICB0YWJsZTogJ3RhYmxlJyxcbiAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgIHdyYXBwZXI6ICd0aGVhZCcsXG4gICAgICAgICAgICByb3c6ICd0cicsXG4gICAgICAgICAgICBjZWxsOiAndGgnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICB3cmFwcGVyOiAndGJvZHknLFxuICAgICAgICAgICAgcm93OiAndHInLFxuICAgICAgICAgICAgY2VsbDogJ3RkJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcy5wcm9wcy5jb21wb25lbnRzKVxuICAgICAgfVxuICAgIH07XG4gIH07XG5cbiAgVGFibGUucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMuY29sdW1uTWFuYWdlci5pc0FueUNvbHVtbnNGaXhlZCgpKSB7XG4gICAgICB0aGlzLmhhbmRsZVdpbmRvd1Jlc2l6ZSgpO1xuICAgICAgdGhpcy5yZXNpemVFdmVudCA9IGFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAncmVzaXplJywgdGhpcy5kZWJvdW5jZWRXaW5kb3dSZXNpemUpO1xuICAgIH1cbiAgfTtcblxuICBUYWJsZS5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICh0aGlzLmNvbHVtbk1hbmFnZXIuaXNBbnlDb2x1bW5zRml4ZWQoKSkge1xuICAgICAgdGhpcy5oYW5kbGVXaW5kb3dSZXNpemUoKTtcbiAgICAgIGlmICghdGhpcy5yZXNpemVFdmVudCkge1xuICAgICAgICB0aGlzLnJlc2l6ZUV2ZW50ID0gYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdyZXNpemUnLCB0aGlzLmRlYm91bmNlZFdpbmRvd1Jlc2l6ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHdoZW4gdGFibGUgY2hhbmdlcyB0byBlbXB0eSwgcmVzZXQgc2Nyb2xsTGVmdFxuICAgIGlmIChwcmV2UHJvcHMuZGF0YS5sZW5ndGggPiAwICYmIHRoaXMucHJvcHMuZGF0YS5sZW5ndGggPT09IDAgJiYgdGhpcy5oYXNTY3JvbGxYKCkpIHtcbiAgICAgIHRoaXMucmVzZXRTY3JvbGxYKCk7XG4gICAgfVxuICB9O1xuXG4gIFRhYmxlLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnJlc2l6ZUV2ZW50KSB7XG4gICAgICB0aGlzLnJlc2l6ZUV2ZW50LnJlbW92ZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5kZWJvdW5jZWRXaW5kb3dSZXNpemUpIHtcbiAgICAgIHRoaXMuZGVib3VuY2VkV2luZG93UmVzaXplLmNhbmNlbCgpO1xuICAgIH1cbiAgfTtcblxuICBUYWJsZS5wcm90b3R5cGUuc2V0U2Nyb2xsUG9zaXRpb24gPSBmdW5jdGlvbiBzZXRTY3JvbGxQb3NpdGlvbihwb3NpdGlvbikge1xuICAgIHRoaXMuc2Nyb2xsUG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICBpZiAodGhpcy50YWJsZU5vZGUpIHtcbiAgICAgIHZhciBwcmVmaXhDbHMgPSB0aGlzLnByb3BzLnByZWZpeENscztcblxuICAgICAgaWYgKHBvc2l0aW9uID09PSAnYm90aCcpIHtcbiAgICAgICAgY2xhc3Nlcyh0aGlzLnRhYmxlTm9kZSkucmVtb3ZlKG5ldyBSZWdFeHAoJ14nICsgcHJlZml4Q2xzICsgJy1zY3JvbGwtcG9zaXRpb24tLiskJykpLmFkZChwcmVmaXhDbHMgKyAnLXNjcm9sbC1wb3NpdGlvbi1sZWZ0JykuYWRkKHByZWZpeENscyArICctc2Nyb2xsLXBvc2l0aW9uLXJpZ2h0Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGFzc2VzKHRoaXMudGFibGVOb2RlKS5yZW1vdmUobmV3IFJlZ0V4cCgnXicgKyBwcmVmaXhDbHMgKyAnLXNjcm9sbC1wb3NpdGlvbi0uKyQnKSkuYWRkKHByZWZpeENscyArICctc2Nyb2xsLXBvc2l0aW9uLScgKyBwb3NpdGlvbik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIFRhYmxlLnByb3RvdHlwZS5zZXRTY3JvbGxQb3NpdGlvbkNsYXNzTmFtZSA9IGZ1bmN0aW9uIHNldFNjcm9sbFBvc2l0aW9uQ2xhc3NOYW1lKCkge1xuICAgIHZhciBub2RlID0gdGhpcy5ib2R5VGFibGU7XG4gICAgdmFyIHNjcm9sbFRvTGVmdCA9IG5vZGUuc2Nyb2xsTGVmdCA9PT0gMDtcbiAgICB2YXIgc2Nyb2xsVG9SaWdodCA9IG5vZGUuc2Nyb2xsTGVmdCArIDEgPj0gbm9kZS5jaGlsZHJlblswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAtIG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgaWYgKHNjcm9sbFRvTGVmdCAmJiBzY3JvbGxUb1JpZ2h0KSB7XG4gICAgICB0aGlzLnNldFNjcm9sbFBvc2l0aW9uKCdib3RoJyk7XG4gICAgfSBlbHNlIGlmIChzY3JvbGxUb0xlZnQpIHtcbiAgICAgIHRoaXMuc2V0U2Nyb2xsUG9zaXRpb24oJ2xlZnQnKTtcbiAgICB9IGVsc2UgaWYgKHNjcm9sbFRvUmlnaHQpIHtcbiAgICAgIHRoaXMuc2V0U2Nyb2xsUG9zaXRpb24oJ3JpZ2h0Jyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNjcm9sbFBvc2l0aW9uICE9PSAnbWlkZGxlJykge1xuICAgICAgdGhpcy5zZXRTY3JvbGxQb3NpdGlvbignbWlkZGxlJyk7XG4gICAgfVxuICB9O1xuXG4gIFRhYmxlLnByb3RvdHlwZS5yZXNldFNjcm9sbFggPSBmdW5jdGlvbiByZXNldFNjcm9sbFgoKSB7XG4gICAgaWYgKHRoaXMuaGVhZFRhYmxlKSB7XG4gICAgICB0aGlzLmhlYWRUYWJsZS5zY3JvbGxMZWZ0ID0gMDtcbiAgICB9XG4gICAgaWYgKHRoaXMuYm9keVRhYmxlKSB7XG4gICAgICB0aGlzLmJvZHlUYWJsZS5zY3JvbGxMZWZ0ID0gMDtcbiAgICB9XG4gIH07XG5cbiAgVGFibGUucHJvdG90eXBlLmhhc1Njcm9sbFggPSBmdW5jdGlvbiBoYXNTY3JvbGxYKCkge1xuICAgIHZhciBfcHJvcHMkc2Nyb2xsID0gdGhpcy5wcm9wcy5zY3JvbGwsXG4gICAgICAgIHNjcm9sbCA9IF9wcm9wcyRzY3JvbGwgPT09IHVuZGVmaW5lZCA/IHt9IDogX3Byb3BzJHNjcm9sbDtcblxuICAgIHJldHVybiAneCcgaW4gc2Nyb2xsO1xuICB9O1xuXG4gIFRhYmxlLnByb3RvdHlwZS5yZW5kZXJNYWluVGFibGUgPSBmdW5jdGlvbiByZW5kZXJNYWluVGFibGUoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIHNjcm9sbCA9IF9wcm9wcy5zY3JvbGwsXG4gICAgICAgIHByZWZpeENscyA9IF9wcm9wcy5wcmVmaXhDbHM7XG5cbiAgICB2YXIgaXNBbnlDb2x1bW5zRml4ZWQgPSB0aGlzLmNvbHVtbk1hbmFnZXIuaXNBbnlDb2x1bW5zRml4ZWQoKTtcbiAgICB2YXIgc2Nyb2xsYWJsZSA9IGlzQW55Q29sdW1uc0ZpeGVkIHx8IHNjcm9sbC54IHx8IHNjcm9sbC55O1xuXG4gICAgdmFyIHRhYmxlID0gW3RoaXMucmVuZGVyVGFibGUoe1xuICAgICAgY29sdW1uczogdGhpcy5jb2x1bW5NYW5hZ2VyLmdyb3VwZWRDb2x1bW5zKCksXG4gICAgICBpc0FueUNvbHVtbnNGaXhlZDogaXNBbnlDb2x1bW5zRml4ZWRcbiAgICB9KSwgdGhpcy5yZW5kZXJFbXB0eVRleHQoKSwgdGhpcy5yZW5kZXJGb290ZXIoKV07XG5cbiAgICByZXR1cm4gc2Nyb2xsYWJsZSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLXNjcm9sbCcgfSxcbiAgICAgIHRhYmxlXG4gICAgKSA6IHRhYmxlO1xuICB9O1xuXG4gIFRhYmxlLnByb3RvdHlwZS5yZW5kZXJMZWZ0Rml4ZWRUYWJsZSA9IGZ1bmN0aW9uIHJlbmRlckxlZnRGaXhlZFRhYmxlKCkge1xuICAgIHZhciBwcmVmaXhDbHMgPSB0aGlzLnByb3BzLnByZWZpeENscztcblxuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWZpeGVkLWxlZnQnIH0sXG4gICAgICB0aGlzLnJlbmRlclRhYmxlKHtcbiAgICAgICAgY29sdW1uczogdGhpcy5jb2x1bW5NYW5hZ2VyLmxlZnRDb2x1bW5zKCksXG4gICAgICAgIGZpeGVkOiAnbGVmdCdcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBUYWJsZS5wcm90b3R5cGUucmVuZGVyUmlnaHRGaXhlZFRhYmxlID0gZnVuY3Rpb24gcmVuZGVyUmlnaHRGaXhlZFRhYmxlKCkge1xuICAgIHZhciBwcmVmaXhDbHMgPSB0aGlzLnByb3BzLnByZWZpeENscztcblxuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWZpeGVkLXJpZ2h0JyB9LFxuICAgICAgdGhpcy5yZW5kZXJUYWJsZSh7XG4gICAgICAgIGNvbHVtbnM6IHRoaXMuY29sdW1uTWFuYWdlci5yaWdodENvbHVtbnMoKSxcbiAgICAgICAgZml4ZWQ6ICdyaWdodCdcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBUYWJsZS5wcm90b3R5cGUucmVuZGVyVGFibGUgPSBmdW5jdGlvbiByZW5kZXJUYWJsZShvcHRpb25zKSB7XG4gICAgdmFyIGNvbHVtbnMgPSBvcHRpb25zLmNvbHVtbnMsXG4gICAgICAgIGZpeGVkID0gb3B0aW9ucy5maXhlZCxcbiAgICAgICAgaXNBbnlDb2x1bW5zRml4ZWQgPSBvcHRpb25zLmlzQW55Q29sdW1uc0ZpeGVkO1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgcHJlZml4Q2xzID0gX3Byb3BzMi5wcmVmaXhDbHMsXG4gICAgICAgIF9wcm9wczIkc2Nyb2xsID0gX3Byb3BzMi5zY3JvbGwsXG4gICAgICAgIHNjcm9sbCA9IF9wcm9wczIkc2Nyb2xsID09PSB1bmRlZmluZWQgPyB7fSA6IF9wcm9wczIkc2Nyb2xsO1xuXG4gICAgdmFyIHRhYmxlQ2xhc3NOYW1lID0gc2Nyb2xsLnggfHwgZml4ZWQgPyBwcmVmaXhDbHMgKyAnLWZpeGVkJyA6ICcnO1xuXG4gICAgdmFyIGhlYWRUYWJsZSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZFRhYmxlLCB7XG4gICAgICBrZXk6ICdoZWFkJyxcbiAgICAgIGNvbHVtbnM6IGNvbHVtbnMsXG4gICAgICBmaXhlZDogZml4ZWQsXG4gICAgICB0YWJsZUNsYXNzTmFtZTogdGFibGVDbGFzc05hbWUsXG4gICAgICBoYW5kbGVCb2R5U2Nyb2xsTGVmdDogdGhpcy5oYW5kbGVCb2R5U2Nyb2xsTGVmdCxcbiAgICAgIGV4cGFuZGVyOiB0aGlzLmV4cGFuZGVyXG4gICAgfSk7XG5cbiAgICB2YXIgYm9keVRhYmxlID0gUmVhY3QuY3JlYXRlRWxlbWVudChCb2R5VGFibGUsIHtcbiAgICAgIGtleTogJ2JvZHknLFxuICAgICAgY29sdW1uczogY29sdW1ucyxcbiAgICAgIGZpeGVkOiBmaXhlZCxcbiAgICAgIHRhYmxlQ2xhc3NOYW1lOiB0YWJsZUNsYXNzTmFtZSxcbiAgICAgIGdldFJvd0tleTogdGhpcy5nZXRSb3dLZXksXG4gICAgICBoYW5kbGVXaGVlbDogdGhpcy5oYW5kbGVXaGVlbCxcbiAgICAgIGhhbmRsZUJvZHlTY3JvbGw6IHRoaXMuaGFuZGxlQm9keVNjcm9sbCxcbiAgICAgIGV4cGFuZGVyOiB0aGlzLmV4cGFuZGVyLFxuICAgICAgaXNBbnlDb2x1bW5zRml4ZWQ6IGlzQW55Q29sdW1uc0ZpeGVkXG4gICAgfSk7XG5cbiAgICByZXR1cm4gW2hlYWRUYWJsZSwgYm9keVRhYmxlXTtcbiAgfTtcblxuICBUYWJsZS5wcm90b3R5cGUucmVuZGVyVGl0bGUgPSBmdW5jdGlvbiByZW5kZXJUaXRsZSgpIHtcbiAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgIHRpdGxlID0gX3Byb3BzMy50aXRsZSxcbiAgICAgICAgcHJlZml4Q2xzID0gX3Byb3BzMy5wcmVmaXhDbHM7XG5cbiAgICByZXR1cm4gdGl0bGUgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy10aXRsZScsIGtleTogJ3RpdGxlJyB9LFxuICAgICAgdGl0bGUodGhpcy5wcm9wcy5kYXRhKVxuICAgICkgOiBudWxsO1xuICB9O1xuXG4gIFRhYmxlLnByb3RvdHlwZS5yZW5kZXJGb290ZXIgPSBmdW5jdGlvbiByZW5kZXJGb290ZXIoKSB7XG4gICAgdmFyIF9wcm9wczQgPSB0aGlzLnByb3BzLFxuICAgICAgICBmb290ZXIgPSBfcHJvcHM0LmZvb3RlcixcbiAgICAgICAgcHJlZml4Q2xzID0gX3Byb3BzNC5wcmVmaXhDbHM7XG5cbiAgICByZXR1cm4gZm9vdGVyID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctZm9vdGVyJywga2V5OiAnZm9vdGVyJyB9LFxuICAgICAgZm9vdGVyKHRoaXMucHJvcHMuZGF0YSlcbiAgICApIDogbnVsbDtcbiAgfTtcblxuICBUYWJsZS5wcm90b3R5cGUucmVuZGVyRW1wdHlUZXh0ID0gZnVuY3Rpb24gcmVuZGVyRW1wdHlUZXh0KCkge1xuICAgIHZhciBfcHJvcHM1ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgZW1wdHlUZXh0ID0gX3Byb3BzNS5lbXB0eVRleHQsXG4gICAgICAgIHByZWZpeENscyA9IF9wcm9wczUucHJlZml4Q2xzLFxuICAgICAgICBkYXRhID0gX3Byb3BzNS5kYXRhO1xuXG4gICAgaWYgKGRhdGEubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIGVtcHR5Q2xhc3NOYW1lID0gcHJlZml4Q2xzICsgJy1wbGFjZWhvbGRlcic7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgY2xhc3NOYW1lOiBlbXB0eUNsYXNzTmFtZSwga2V5OiAnZW1wdHlUZXh0JyB9LFxuICAgICAgdHlwZW9mIGVtcHR5VGV4dCA9PT0gJ2Z1bmN0aW9uJyA/IGVtcHR5VGV4dCgpIDogZW1wdHlUZXh0XG4gICAgKTtcbiAgfTtcblxuICBUYWJsZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuY29sdW1ucykge1xuICAgICAgdGhpcy5jb2x1bW5NYW5hZ2VyLnJlc2V0KHByb3BzLmNvbHVtbnMpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jaGlsZHJlbikge1xuICAgICAgdGhpcy5jb2x1bW5NYW5hZ2VyLnJlc2V0KG51bGwsIHByb3BzLmNoaWxkcmVuKTtcbiAgICB9XG5cbiAgICB2YXIgY2xhc3NOYW1lID0gcHJvcHMucHJlZml4Q2xzO1xuICAgIGlmIChwcm9wcy5jbGFzc05hbWUpIHtcbiAgICAgIGNsYXNzTmFtZSArPSAnICcgKyBwcm9wcy5jbGFzc05hbWU7XG4gICAgfVxuICAgIGlmIChwcm9wcy51c2VGaXhlZEhlYWRlciB8fCBwcm9wcy5zY3JvbGwgJiYgcHJvcHMuc2Nyb2xsLnkpIHtcbiAgICAgIGNsYXNzTmFtZSArPSAnICcgKyBwcmVmaXhDbHMgKyAnLWZpeGVkLWhlYWRlcic7XG4gICAgfVxuICAgIGlmICh0aGlzLnNjcm9sbFBvc2l0aW9uID09PSAnYm90aCcpIHtcbiAgICAgIGNsYXNzTmFtZSArPSAnICcgKyBwcmVmaXhDbHMgKyAnLXNjcm9sbC1wb3NpdGlvbi1sZWZ0ICcgKyBwcmVmaXhDbHMgKyAnLXNjcm9sbC1wb3NpdGlvbi1yaWdodCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsYXNzTmFtZSArPSAnICcgKyBwcmVmaXhDbHMgKyAnLXNjcm9sbC1wb3NpdGlvbi0nICsgdGhpcy5zY3JvbGxQb3NpdGlvbjtcbiAgICB9XG4gICAgdmFyIGhhc0xlZnRGaXhlZCA9IHRoaXMuY29sdW1uTWFuYWdlci5pc0FueUNvbHVtbnNMZWZ0Rml4ZWQoKTtcbiAgICB2YXIgaGFzUmlnaHRGaXhlZCA9IHRoaXMuY29sdW1uTWFuYWdlci5pc0FueUNvbHVtbnNSaWdodEZpeGVkKCk7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIFByb3ZpZGVyLFxuICAgICAgeyBzdG9yZTogdGhpcy5zdG9yZSB9LFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgRXhwYW5kYWJsZVRhYmxlLFxuICAgICAgICBfZXh0ZW5kcyh7fSwgcHJvcHMsIHsgY29sdW1uTWFuYWdlcjogdGhpcy5jb2x1bW5NYW5hZ2VyLCBnZXRSb3dLZXk6IHRoaXMuZ2V0Um93S2V5IH0pLFxuICAgICAgICBmdW5jdGlvbiAoZXhwYW5kZXIpIHtcbiAgICAgICAgICBfdGhpczIuZXhwYW5kZXIgPSBleHBhbmRlcjtcbiAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6IF90aGlzMi5zYXZlUmVmKCd0YWJsZU5vZGUnKSxcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgICAgICAgIHN0eWxlOiBwcm9wcy5zdHlsZSxcbiAgICAgICAgICAgICAgaWQ6IHByb3BzLmlkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX3RoaXMyLnJlbmRlclRpdGxlKCksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctY29udGVudCcgfSxcbiAgICAgICAgICAgICAgX3RoaXMyLnJlbmRlck1haW5UYWJsZSgpLFxuICAgICAgICAgICAgICBoYXNMZWZ0Rml4ZWQgJiYgX3RoaXMyLnJlbmRlckxlZnRGaXhlZFRhYmxlKCksXG4gICAgICAgICAgICAgIGhhc1JpZ2h0Rml4ZWQgJiYgX3RoaXMyLnJlbmRlclJpZ2h0Rml4ZWRUYWJsZSgpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgKVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIFRhYmxlO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5UYWJsZS5wcm9wVHlwZXMgPSBfZXh0ZW5kcyh7XG4gIGRhdGE6IFByb3BUeXBlcy5hcnJheSxcbiAgdXNlRml4ZWRIZWFkZXI6IFByb3BUeXBlcy5ib29sLFxuICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXksXG4gIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgYm9keVN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgcm93S2V5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuY10pLFxuICByb3dDbGFzc05hbWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5mdW5jXSksXG4gIG9uUm93OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25IZWFkZXJSb3c6IFByb3BUeXBlcy5mdW5jLFxuICBvblJvd0NsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Sb3dEb3VibGVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uUm93Q29udGV4dE1lbnU6IFByb3BUeXBlcy5mdW5jLFxuICBvblJvd01vdXNlRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBvblJvd01vdXNlTGVhdmU6IFByb3BUeXBlcy5mdW5jLFxuICBzaG93SGVhZGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgdGl0bGU6IFByb3BUeXBlcy5mdW5jLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZm9vdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgZW1wdHlUZXh0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgc2Nyb2xsOiBQcm9wVHlwZXMub2JqZWN0LFxuICByb3dSZWY6IFByb3BUeXBlcy5mdW5jLFxuICBnZXRCb2R5V3JhcHBlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgY29tcG9uZW50czogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICB0YWJsZTogUHJvcFR5cGVzLmFueSxcbiAgICBoZWFkZXI6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICB3cmFwcGVyOiBQcm9wVHlwZXMuYW55LFxuICAgICAgcm93OiBQcm9wVHlwZXMuYW55LFxuICAgICAgY2VsbDogUHJvcFR5cGVzLmFueVxuICAgIH0pLFxuICAgIGJvZHk6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICB3cmFwcGVyOiBQcm9wVHlwZXMuYW55LFxuICAgICAgcm93OiBQcm9wVHlwZXMuYW55LFxuICAgICAgY2VsbDogUHJvcFR5cGVzLmFueVxuICAgIH0pXG4gIH0pXG59LCBFeHBhbmRhYmxlVGFibGUuUHJvcFR5cGVzKTtcblRhYmxlLmNoaWxkQ29udGV4dFR5cGVzID0ge1xuICB0YWJsZTogUHJvcFR5cGVzLmFueSxcbiAgY29tcG9uZW50czogUHJvcFR5cGVzLmFueVxufTtcblRhYmxlLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGF0YTogW10sXG4gIHVzZUZpeGVkSGVhZGVyOiBmYWxzZSxcbiAgcm93S2V5OiAna2V5JyxcbiAgcm93Q2xhc3NOYW1lOiBmdW5jdGlvbiByb3dDbGFzc05hbWUoKSB7XG4gICAgcmV0dXJuICcnO1xuICB9LFxuICBvblJvdzogZnVuY3Rpb24gb25Sb3coKSB7fSxcbiAgb25IZWFkZXJSb3c6IGZ1bmN0aW9uIG9uSGVhZGVyUm93KCkge30sXG5cbiAgcHJlZml4Q2xzOiAncmMtdGFibGUnLFxuICBib2R5U3R5bGU6IHt9LFxuICBzdHlsZToge30sXG4gIHNob3dIZWFkZXI6IHRydWUsXG4gIHNjcm9sbDoge30sXG4gIHJvd1JlZjogZnVuY3Rpb24gcm93UmVmKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9LFxuICBlbXB0eVRleHQ6IGZ1bmN0aW9uIGVtcHR5VGV4dCgpIHtcbiAgICByZXR1cm4gJ05vIERhdGEnO1xuICB9XG59O1xuXG5cbnBvbHlmaWxsKFRhYmxlKTtcblxuZXhwb3J0IGRlZmF1bHQgVGFibGU7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBnZXQgZnJvbSAnbG9kYXNoL2dldCc7XG5cbmZ1bmN0aW9uIGlzSW52YWxpZFJlbmRlckNlbGxUZXh0KHRleHQpIHtcbiAgcmV0dXJuIHRleHQgJiYgIVJlYWN0LmlzVmFsaWRFbGVtZW50KHRleHQpICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0ZXh0KSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG59XG5cbnZhciBUYWJsZUNlbGwgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVGFibGVDZWxsLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUYWJsZUNlbGwoKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUYWJsZUNlbGwpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHJlY29yZCA9IF90aGlzJHByb3BzLnJlY29yZCxcbiAgICAgICAgICBvbkNlbGxDbGljayA9IF90aGlzJHByb3BzLmNvbHVtbi5vbkNlbGxDbGljaztcblxuICAgICAgaWYgKG9uQ2VsbENsaWNrKSB7XG4gICAgICAgIG9uQ2VsbENsaWNrKHJlY29yZCwgZSk7XG4gICAgICB9XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBUYWJsZUNlbGwucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgcmVjb3JkID0gX3Byb3BzLnJlY29yZCxcbiAgICAgICAgaW5kZW50U2l6ZSA9IF9wcm9wcy5pbmRlbnRTaXplLFxuICAgICAgICBwcmVmaXhDbHMgPSBfcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICBpbmRlbnQgPSBfcHJvcHMuaW5kZW50LFxuICAgICAgICBpbmRleCA9IF9wcm9wcy5pbmRleCxcbiAgICAgICAgZXhwYW5kSWNvbiA9IF9wcm9wcy5leHBhbmRJY29uLFxuICAgICAgICBjb2x1bW4gPSBfcHJvcHMuY29sdW1uLFxuICAgICAgICBCb2R5Q2VsbCA9IF9wcm9wcy5jb21wb25lbnQ7XG4gICAgdmFyIGRhdGFJbmRleCA9IGNvbHVtbi5kYXRhSW5kZXgsXG4gICAgICAgIHJlbmRlciA9IGNvbHVtbi5yZW5kZXIsXG4gICAgICAgIF9jb2x1bW4kY2xhc3NOYW1lID0gY29sdW1uLmNsYXNzTmFtZSxcbiAgICAgICAgY2xhc3NOYW1lID0gX2NvbHVtbiRjbGFzc05hbWUgPT09IHVuZGVmaW5lZCA/ICcnIDogX2NvbHVtbiRjbGFzc05hbWU7XG5cbiAgICAvLyBXZSBzaG91bGQgcmV0dXJuIHVuZGVmaW5lZCBpZiBubyBkYXRhSW5kZXggaXMgc3BlY2lmaWVkLCBidXQgaW4gb3JkZXIgdG9cbiAgICAvLyBiZSBjb21wYXRpYmxlIHdpdGggb2JqZWN0LXBhdGgncyBiZWhhdmlvciwgd2UgcmV0dXJuIHRoZSByZWNvcmQgb2JqZWN0IGluc3RlYWQuXG5cbiAgICB2YXIgdGV4dCA9IHZvaWQgMDtcbiAgICBpZiAodHlwZW9mIGRhdGFJbmRleCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHRleHQgPSBnZXQocmVjb3JkLCBkYXRhSW5kZXgpO1xuICAgIH0gZWxzZSBpZiAoIWRhdGFJbmRleCB8fCBkYXRhSW5kZXgubGVuZ3RoID09PSAwKSB7XG4gICAgICB0ZXh0ID0gcmVjb3JkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZXh0ID0gZ2V0KHJlY29yZCwgZGF0YUluZGV4KTtcbiAgICB9XG4gICAgdmFyIHRkUHJvcHMgPSB7fTtcbiAgICB2YXIgY29sU3BhbiA9IHZvaWQgMDtcbiAgICB2YXIgcm93U3BhbiA9IHZvaWQgMDtcblxuICAgIGlmIChyZW5kZXIpIHtcbiAgICAgIHRleHQgPSByZW5kZXIodGV4dCwgcmVjb3JkLCBpbmRleCk7XG4gICAgICBpZiAoaXNJbnZhbGlkUmVuZGVyQ2VsbFRleHQodGV4dCkpIHtcbiAgICAgICAgdGRQcm9wcyA9IHRleHQucHJvcHMgfHwgdGRQcm9wcztcbiAgICAgICAgY29sU3BhbiA9IHRkUHJvcHMuY29sU3BhbjtcbiAgICAgICAgcm93U3BhbiA9IHRkUHJvcHMucm93U3BhbjtcbiAgICAgICAgdGV4dCA9IHRleHQuY2hpbGRyZW47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvbHVtbi5vbkNlbGwpIHtcbiAgICAgIHRkUHJvcHMgPSBfZXh0ZW5kcyh7fSwgdGRQcm9wcywgY29sdW1uLm9uQ2VsbChyZWNvcmQpKTtcbiAgICB9XG5cbiAgICAvLyBGaXggaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTIwMlxuICAgIGlmIChpc0ludmFsaWRSZW5kZXJDZWxsVGV4dCh0ZXh0KSkge1xuICAgICAgdGV4dCA9IG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGluZGVudFRleHQgPSBleHBhbmRJY29uID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIHtcbiAgICAgIHN0eWxlOiB7IHBhZGRpbmdMZWZ0OiBpbmRlbnRTaXplICogaW5kZW50ICsgJ3B4JyB9LFxuICAgICAgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWluZGVudCBpbmRlbnQtbGV2ZWwtJyArIGluZGVudFxuICAgIH0pIDogbnVsbDtcblxuICAgIGlmIChyb3dTcGFuID09PSAwIHx8IGNvbFNwYW4gPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChjb2x1bW4uYWxpZ24pIHtcbiAgICAgIHRkUHJvcHMuc3R5bGUgPSB7IHRleHRBbGlnbjogY29sdW1uLmFsaWduIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBCb2R5Q2VsbCxcbiAgICAgIF9leHRlbmRzKHsgY2xhc3NOYW1lOiBjbGFzc05hbWUsIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2sgfSwgdGRQcm9wcyksXG4gICAgICBpbmRlbnRUZXh0LFxuICAgICAgZXhwYW5kSWNvbixcbiAgICAgIHRleHRcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBUYWJsZUNlbGw7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cblRhYmxlQ2VsbC5wcm9wVHlwZXMgPSB7XG4gIHJlY29yZDogUHJvcFR5cGVzLm9iamVjdCxcbiAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgaW5kZW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICBpbmRlbnRTaXplOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjb2x1bW46IFByb3BUeXBlcy5vYmplY3QsXG4gIGV4cGFuZEljb246IFByb3BUeXBlcy5ub2RlLFxuICBjb21wb25lbnQ6IFByb3BUeXBlcy5hbnlcbn07XG5leHBvcnQgZGVmYXVsdCBUYWJsZUNlbGw7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgVGFibGVIZWFkZXJSb3cgZnJvbSAnLi9UYWJsZUhlYWRlclJvdyc7XG5cbmZ1bmN0aW9uIGdldEhlYWRlclJvd3MoY29sdW1ucykge1xuICB2YXIgY3VycmVudFJvdyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMDtcbiAgdmFyIHJvd3MgPSBhcmd1bWVudHNbMl07XG5cbiAgcm93cyA9IHJvd3MgfHwgW107XG4gIHJvd3NbY3VycmVudFJvd10gPSByb3dzW2N1cnJlbnRSb3ddIHx8IFtdO1xuXG4gIGNvbHVtbnMuZm9yRWFjaChmdW5jdGlvbiAoY29sdW1uKSB7XG4gICAgaWYgKGNvbHVtbi5yb3dTcGFuICYmIHJvd3MubGVuZ3RoIDwgY29sdW1uLnJvd1NwYW4pIHtcbiAgICAgIHdoaWxlIChyb3dzLmxlbmd0aCA8IGNvbHVtbi5yb3dTcGFuKSB7XG4gICAgICAgIHJvd3MucHVzaChbXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBjZWxsID0ge1xuICAgICAga2V5OiBjb2x1bW4ua2V5LFxuICAgICAgY2xhc3NOYW1lOiBjb2x1bW4uY2xhc3NOYW1lIHx8ICcnLFxuICAgICAgY2hpbGRyZW46IGNvbHVtbi50aXRsZSxcbiAgICAgIGNvbHVtbjogY29sdW1uXG4gICAgfTtcbiAgICBpZiAoY29sdW1uLmNoaWxkcmVuKSB7XG4gICAgICBnZXRIZWFkZXJSb3dzKGNvbHVtbi5jaGlsZHJlbiwgY3VycmVudFJvdyArIDEsIHJvd3MpO1xuICAgIH1cbiAgICBpZiAoJ2NvbFNwYW4nIGluIGNvbHVtbikge1xuICAgICAgY2VsbC5jb2xTcGFuID0gY29sdW1uLmNvbFNwYW47XG4gICAgfVxuICAgIGlmICgncm93U3BhbicgaW4gY29sdW1uKSB7XG4gICAgICBjZWxsLnJvd1NwYW4gPSBjb2x1bW4ucm93U3BhbjtcbiAgICB9XG4gICAgaWYgKGNlbGwuY29sU3BhbiAhPT0gMCkge1xuICAgICAgcm93c1tjdXJyZW50Um93XS5wdXNoKGNlbGwpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByb3dzLmZpbHRlcihmdW5jdGlvbiAocm93KSB7XG4gICAgcmV0dXJuIHJvdy5sZW5ndGggPiAwO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFibGVIZWFkZXIocHJvcHMsIF9yZWYpIHtcbiAgdmFyIHRhYmxlID0gX3JlZi50YWJsZTtcbiAgdmFyIGNvbXBvbmVudHMgPSB0YWJsZS5jb21wb25lbnRzO1xuICB2YXIgX3RhYmxlJHByb3BzID0gdGFibGUucHJvcHMsXG4gICAgICBwcmVmaXhDbHMgPSBfdGFibGUkcHJvcHMucHJlZml4Q2xzLFxuICAgICAgc2hvd0hlYWRlciA9IF90YWJsZSRwcm9wcy5zaG93SGVhZGVyLFxuICAgICAgb25IZWFkZXJSb3cgPSBfdGFibGUkcHJvcHMub25IZWFkZXJSb3c7XG4gIHZhciBleHBhbmRlciA9IHByb3BzLmV4cGFuZGVyLFxuICAgICAgY29sdW1ucyA9IHByb3BzLmNvbHVtbnMsXG4gICAgICBmaXhlZCA9IHByb3BzLmZpeGVkO1xuXG5cbiAgaWYgKCFzaG93SGVhZGVyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgcm93cyA9IGdldEhlYWRlclJvd3MoY29sdW1ucyk7XG5cbiAgZXhwYW5kZXIucmVuZGVyRXhwYW5kSW5kZW50Q2VsbChyb3dzLCBmaXhlZCk7XG5cbiAgdmFyIEhlYWRlcldyYXBwZXIgPSBjb21wb25lbnRzLmhlYWRlci53cmFwcGVyO1xuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIEhlYWRlcldyYXBwZXIsXG4gICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctdGhlYWQnIH0sXG4gICAgcm93cy5tYXAoZnVuY3Rpb24gKHJvdywgaW5kZXgpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFRhYmxlSGVhZGVyUm93LCB7XG4gICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgZml4ZWQ6IGZpeGVkLFxuICAgICAgICBjb2x1bW5zOiBjb2x1bW5zLFxuICAgICAgICByb3dzOiByb3dzLFxuICAgICAgICByb3c6IHJvdyxcbiAgICAgICAgY29tcG9uZW50czogY29tcG9uZW50cyxcbiAgICAgICAgb25IZWFkZXJSb3c6IG9uSGVhZGVyUm93XG4gICAgICB9KTtcbiAgICB9KVxuICApO1xufVxuXG5UYWJsZUhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIGZpeGVkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgZXhwYW5kZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgb25IZWFkZXJSb3c6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5UYWJsZUhlYWRlci5jb250ZXh0VHlwZXMgPSB7XG4gIHRhYmxlOiBQcm9wVHlwZXMuYW55XG59OyIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJztcbmltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdtaW5pLXN0b3JlJztcblxuZnVuY3Rpb24gVGFibGVIZWFkZXJSb3coX3JlZikge1xuICB2YXIgcm93ID0gX3JlZi5yb3csXG4gICAgICBpbmRleCA9IF9yZWYuaW5kZXgsXG4gICAgICBoZWlnaHQgPSBfcmVmLmhlaWdodCxcbiAgICAgIGNvbXBvbmVudHMgPSBfcmVmLmNvbXBvbmVudHMsXG4gICAgICBvbkhlYWRlclJvdyA9IF9yZWYub25IZWFkZXJSb3c7XG5cbiAgdmFyIEhlYWRlclJvdyA9IGNvbXBvbmVudHMuaGVhZGVyLnJvdztcbiAgdmFyIEhlYWRlckNlbGwgPSBjb21wb25lbnRzLmhlYWRlci5jZWxsO1xuICB2YXIgcm93UHJvcHMgPSBvbkhlYWRlclJvdyhyb3cubWFwKGZ1bmN0aW9uIChjZWxsKSB7XG4gICAgcmV0dXJuIGNlbGwuY29sdW1uO1xuICB9KSwgaW5kZXgpO1xuICB2YXIgY3VzdG9tU3R5bGUgPSByb3dQcm9wcyA/IHJvd1Byb3BzLnN0eWxlIDoge307XG4gIHZhciBzdHlsZSA9IF9leHRlbmRzKHsgaGVpZ2h0OiBoZWlnaHQgfSwgY3VzdG9tU3R5bGUpO1xuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgIEhlYWRlclJvdyxcbiAgICBfZXh0ZW5kcyh7fSwgcm93UHJvcHMsIHsgc3R5bGU6IHN0eWxlIH0pLFxuICAgIHJvdy5tYXAoZnVuY3Rpb24gKGNlbGwsIGkpIHtcbiAgICAgIHZhciBjb2x1bW4gPSBjZWxsLmNvbHVtbixcbiAgICAgICAgICBjZWxsUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoY2VsbCwgWydjb2x1bW4nXSk7XG5cbiAgICAgIHZhciBjdXN0b21Qcm9wcyA9IGNvbHVtbi5vbkhlYWRlckNlbGwgPyBjb2x1bW4ub25IZWFkZXJDZWxsKGNvbHVtbikgOiB7fTtcbiAgICAgIGlmIChjb2x1bW4uYWxpZ24pIHtcbiAgICAgICAgY2VsbFByb3BzLnN0eWxlID0geyB0ZXh0QWxpZ246IGNvbHVtbi5hbGlnbiB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyQ2VsbCwgX2V4dGVuZHMoe30sIGNlbGxQcm9wcywgY3VzdG9tUHJvcHMsIHsga2V5OiBjb2x1bW4ua2V5IHx8IGNvbHVtbi5kYXRhSW5kZXggfHwgaSB9KSk7XG4gICAgfSlcbiAgKTtcbn1cblxuVGFibGVIZWFkZXJSb3cucHJvcFR5cGVzID0ge1xuICByb3c6IFByb3BUeXBlcy5hcnJheSxcbiAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gIGhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICBjb21wb25lbnRzOiBQcm9wVHlwZXMuYW55LFxuICBvbkhlYWRlclJvdzogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmZ1bmN0aW9uIGdldFJvd0hlaWdodChzdGF0ZSwgcHJvcHMpIHtcbiAgdmFyIGZpeGVkQ29sdW1uc0hlYWRSb3dzSGVpZ2h0ID0gc3RhdGUuZml4ZWRDb2x1bW5zSGVhZFJvd3NIZWlnaHQ7XG4gIHZhciBjb2x1bW5zID0gcHJvcHMuY29sdW1ucyxcbiAgICAgIHJvd3MgPSBwcm9wcy5yb3dzLFxuICAgICAgZml4ZWQgPSBwcm9wcy5maXhlZDtcblxuICB2YXIgaGVhZGVySGVpZ2h0ID0gZml4ZWRDb2x1bW5zSGVhZFJvd3NIZWlnaHRbMF07XG5cbiAgaWYgKCFmaXhlZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYgKGhlYWRlckhlaWdodCAmJiBjb2x1bW5zKSB7XG4gICAgaWYgKGhlYWRlckhlaWdodCA9PT0gJ2F1dG8nKSB7XG4gICAgICByZXR1cm4gJ2F1dG8nO1xuICAgIH1cbiAgICByZXR1cm4gaGVhZGVySGVpZ2h0IC8gcm93cy5sZW5ndGg7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoZnVuY3Rpb24gKHN0YXRlLCBwcm9wcykge1xuICByZXR1cm4ge1xuICAgIGhlaWdodDogZ2V0Um93SGVpZ2h0KHN0YXRlLCBwcm9wcylcbiAgfTtcbn0pKFRhYmxlSGVhZGVyUm93KTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnbWluaS1zdG9yZSc7XG5pbXBvcnQgeyBwb2x5ZmlsbCB9IGZyb20gJ3JlYWN0LWxpZmVjeWNsZXMtY29tcGF0JztcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnLi9UYWJsZUNlbGwnO1xuaW1wb3J0IHsgd2FybmluZ09uY2UgfSBmcm9tICcuL3V0aWxzJztcblxudmFyIFRhYmxlUm93ID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFRhYmxlUm93LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBUYWJsZVJvdy5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICBpZiAocHJldlN0YXRlLnZpc2libGUgfHwgIXByZXZTdGF0ZS52aXNpYmxlICYmIG5leHRQcm9wcy52aXNpYmxlKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzaG91bGRSZW5kZXI6IHRydWUsXG4gICAgICAgIHZpc2libGU6IG5leHRQcm9wcy52aXNpYmxlXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdmlzaWJsZTogbmV4dFByb3BzLnZpc2libGVcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIFRhYmxlUm93KHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRhYmxlUm93KTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMub25Sb3dDbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgcmVjb3JkID0gX3RoaXMkcHJvcHMucmVjb3JkLFxuICAgICAgICAgIGluZGV4ID0gX3RoaXMkcHJvcHMuaW5kZXgsXG4gICAgICAgICAgb25Sb3dDbGljayA9IF90aGlzJHByb3BzLm9uUm93Q2xpY2s7XG5cbiAgICAgIGlmIChvblJvd0NsaWNrKSB7XG4gICAgICAgIG9uUm93Q2xpY2socmVjb3JkLCBpbmRleCwgZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vblJvd0RvdWJsZUNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgcmVjb3JkID0gX3RoaXMkcHJvcHMyLnJlY29yZCxcbiAgICAgICAgICBpbmRleCA9IF90aGlzJHByb3BzMi5pbmRleCxcbiAgICAgICAgICBvblJvd0RvdWJsZUNsaWNrID0gX3RoaXMkcHJvcHMyLm9uUm93RG91YmxlQ2xpY2s7XG5cbiAgICAgIGlmIChvblJvd0RvdWJsZUNsaWNrKSB7XG4gICAgICAgIG9uUm93RG91YmxlQ2xpY2socmVjb3JkLCBpbmRleCwgZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbkNvbnRleHRNZW51ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgcmVjb3JkID0gX3RoaXMkcHJvcHMzLnJlY29yZCxcbiAgICAgICAgICBpbmRleCA9IF90aGlzJHByb3BzMy5pbmRleCxcbiAgICAgICAgICBvblJvd0NvbnRleHRNZW51ID0gX3RoaXMkcHJvcHMzLm9uUm93Q29udGV4dE1lbnU7XG5cbiAgICAgIGlmIChvblJvd0NvbnRleHRNZW51KSB7XG4gICAgICAgIG9uUm93Q29udGV4dE1lbnUocmVjb3JkLCBpbmRleCwgZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5vbk1vdXNlRW50ZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczQgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICByZWNvcmQgPSBfdGhpcyRwcm9wczQucmVjb3JkLFxuICAgICAgICAgIGluZGV4ID0gX3RoaXMkcHJvcHM0LmluZGV4LFxuICAgICAgICAgIG9uUm93TW91c2VFbnRlciA9IF90aGlzJHByb3BzNC5vblJvd01vdXNlRW50ZXIsXG4gICAgICAgICAgb25Ib3ZlciA9IF90aGlzJHByb3BzNC5vbkhvdmVyLFxuICAgICAgICAgIHJvd0tleSA9IF90aGlzJHByb3BzNC5yb3dLZXk7XG5cbiAgICAgIG9uSG92ZXIodHJ1ZSwgcm93S2V5KTtcbiAgICAgIGlmIChvblJvd01vdXNlRW50ZXIpIHtcbiAgICAgICAgb25Sb3dNb3VzZUVudGVyKHJlY29yZCwgaW5kZXgsIGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25Nb3VzZUxlYXZlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM1ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgcmVjb3JkID0gX3RoaXMkcHJvcHM1LnJlY29yZCxcbiAgICAgICAgICBpbmRleCA9IF90aGlzJHByb3BzNS5pbmRleCxcbiAgICAgICAgICBvblJvd01vdXNlTGVhdmUgPSBfdGhpcyRwcm9wczUub25Sb3dNb3VzZUxlYXZlLFxuICAgICAgICAgIG9uSG92ZXIgPSBfdGhpcyRwcm9wczUub25Ib3ZlcixcbiAgICAgICAgICByb3dLZXkgPSBfdGhpcyRwcm9wczUucm93S2V5O1xuXG4gICAgICBvbkhvdmVyKGZhbHNlLCByb3dLZXkpO1xuICAgICAgaWYgKG9uUm93TW91c2VMZWF2ZSkge1xuICAgICAgICBvblJvd01vdXNlTGVhdmUocmVjb3JkLCBpbmRleCwgZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5zaG91bGRSZW5kZXIgPSBwcm9wcy52aXNpYmxlO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7fTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBUYWJsZVJvdy5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5zaG91bGRSZW5kZXIpIHtcbiAgICAgIHRoaXMuc2F2ZVJvd1JlZigpO1xuICAgIH1cbiAgfTtcblxuICBUYWJsZVJvdy5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgIHJldHVybiAhISh0aGlzLnByb3BzLnZpc2libGUgfHwgbmV4dFByb3BzLnZpc2libGUpO1xuICB9O1xuXG4gIFRhYmxlUm93LnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuc2hvdWxkUmVuZGVyICYmICF0aGlzLnJvd1JlZikge1xuICAgICAgdGhpcy5zYXZlUm93UmVmKCk7XG4gICAgfVxuICB9O1xuXG4gIFRhYmxlUm93LnByb3RvdHlwZS5zZXRFeHBhbmVkUm93SGVpZ2h0ID0gZnVuY3Rpb24gc2V0RXhwYW5lZFJvd0hlaWdodCgpIHtcbiAgICB2YXIgX2V4dGVuZHMyO1xuXG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIHN0b3JlID0gX3Byb3BzLnN0b3JlLFxuICAgICAgICByb3dLZXkgPSBfcHJvcHMucm93S2V5O1xuXG4gICAgdmFyIF9zdG9yZSRnZXRTdGF0ZSA9IHN0b3JlLmdldFN0YXRlKCksXG4gICAgICAgIGV4cGFuZGVkUm93c0hlaWdodCA9IF9zdG9yZSRnZXRTdGF0ZS5leHBhbmRlZFJvd3NIZWlnaHQ7XG5cbiAgICB2YXIgaGVpZ2h0ID0gdGhpcy5yb3dSZWYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIGV4cGFuZGVkUm93c0hlaWdodCA9IF9leHRlbmRzKHt9LCBleHBhbmRlZFJvd3NIZWlnaHQsIChfZXh0ZW5kczIgPSB7fSwgX2V4dGVuZHMyW3Jvd0tleV0gPSBoZWlnaHQsIF9leHRlbmRzMikpO1xuICAgIHN0b3JlLnNldFN0YXRlKHsgZXhwYW5kZWRSb3dzSGVpZ2h0OiBleHBhbmRlZFJvd3NIZWlnaHQgfSk7XG4gIH07XG5cbiAgVGFibGVSb3cucHJvdG90eXBlLnNldFJvd0hlaWdodCA9IGZ1bmN0aW9uIHNldFJvd0hlaWdodCgpIHtcbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgIHN0b3JlID0gX3Byb3BzMi5zdG9yZSxcbiAgICAgICAgaW5kZXggPSBfcHJvcHMyLmluZGV4O1xuXG4gICAgdmFyIGZpeGVkQ29sdW1uc0JvZHlSb3dzSGVpZ2h0ID0gc3RvcmUuZ2V0U3RhdGUoKS5maXhlZENvbHVtbnNCb2R5Um93c0hlaWdodC5zbGljZSgpO1xuICAgIHZhciBoZWlnaHQgPSB0aGlzLnJvd1JlZi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgZml4ZWRDb2x1bW5zQm9keVJvd3NIZWlnaHRbaW5kZXhdID0gaGVpZ2h0O1xuICAgIHN0b3JlLnNldFN0YXRlKHsgZml4ZWRDb2x1bW5zQm9keVJvd3NIZWlnaHQ6IGZpeGVkQ29sdW1uc0JvZHlSb3dzSGVpZ2h0IH0pO1xuICB9O1xuXG4gIFRhYmxlUm93LnByb3RvdHlwZS5nZXRTdHlsZSA9IGZ1bmN0aW9uIGdldFN0eWxlKCkge1xuICAgIHZhciBfcHJvcHMzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaGVpZ2h0ID0gX3Byb3BzMy5oZWlnaHQsXG4gICAgICAgIHZpc2libGUgPSBfcHJvcHMzLnZpc2libGU7XG5cblxuICAgIGlmIChoZWlnaHQgJiYgaGVpZ2h0ICE9PSB0aGlzLnN0eWxlLmhlaWdodCkge1xuICAgICAgdGhpcy5zdHlsZSA9IF9leHRlbmRzKHt9LCB0aGlzLnN0eWxlLCB7IGhlaWdodDogaGVpZ2h0IH0pO1xuICAgIH1cblxuICAgIGlmICghdmlzaWJsZSAmJiAhdGhpcy5zdHlsZS5kaXNwbGF5KSB7XG4gICAgICB0aGlzLnN0eWxlID0gX2V4dGVuZHMoe30sIHRoaXMuc3R5bGUsIHsgZGlzcGxheTogJ25vbmUnIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnN0eWxlO1xuICB9O1xuXG4gIFRhYmxlUm93LnByb3RvdHlwZS5zYXZlUm93UmVmID0gZnVuY3Rpb24gc2F2ZVJvd1JlZigpIHtcbiAgICB0aGlzLnJvd1JlZiA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgdmFyIF9wcm9wczQgPSB0aGlzLnByb3BzLFxuICAgICAgICBpc0FueUNvbHVtbnNGaXhlZCA9IF9wcm9wczQuaXNBbnlDb2x1bW5zRml4ZWQsXG4gICAgICAgIGZpeGVkID0gX3Byb3BzNC5maXhlZCxcbiAgICAgICAgZXhwYW5kZWRSb3cgPSBfcHJvcHM0LmV4cGFuZGVkUm93LFxuICAgICAgICBhbmNlc3RvcktleXMgPSBfcHJvcHM0LmFuY2VzdG9yS2V5cztcblxuXG4gICAgaWYgKCFpc0FueUNvbHVtbnNGaXhlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghZml4ZWQgJiYgZXhwYW5kZWRSb3cpIHtcbiAgICAgIHRoaXMuc2V0RXhwYW5lZFJvd0hlaWdodCgpO1xuICAgIH1cblxuICAgIGlmICghZml4ZWQgJiYgYW5jZXN0b3JLZXlzLmxlbmd0aCA+PSAwKSB7XG4gICAgICB0aGlzLnNldFJvd0hlaWdodCgpO1xuICAgIH1cbiAgfTtcblxuICBUYWJsZVJvdy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5zaG91bGRSZW5kZXIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBfcHJvcHM1ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgcHJlZml4Q2xzID0gX3Byb3BzNS5wcmVmaXhDbHMsXG4gICAgICAgIGNvbHVtbnMgPSBfcHJvcHM1LmNvbHVtbnMsXG4gICAgICAgIHJlY29yZCA9IF9wcm9wczUucmVjb3JkLFxuICAgICAgICBpbmRleCA9IF9wcm9wczUuaW5kZXgsXG4gICAgICAgIG9uUm93ID0gX3Byb3BzNS5vblJvdyxcbiAgICAgICAgaW5kZW50ID0gX3Byb3BzNS5pbmRlbnQsXG4gICAgICAgIGluZGVudFNpemUgPSBfcHJvcHM1LmluZGVudFNpemUsXG4gICAgICAgIGhvdmVyZWQgPSBfcHJvcHM1LmhvdmVyZWQsXG4gICAgICAgIGhlaWdodCA9IF9wcm9wczUuaGVpZ2h0LFxuICAgICAgICB2aXNpYmxlID0gX3Byb3BzNS52aXNpYmxlLFxuICAgICAgICBjb21wb25lbnRzID0gX3Byb3BzNS5jb21wb25lbnRzLFxuICAgICAgICBoYXNFeHBhbmRJY29uID0gX3Byb3BzNS5oYXNFeHBhbmRJY29uLFxuICAgICAgICByZW5kZXJFeHBhbmRJY29uID0gX3Byb3BzNS5yZW5kZXJFeHBhbmRJY29uLFxuICAgICAgICByZW5kZXJFeHBhbmRJY29uQ2VsbCA9IF9wcm9wczUucmVuZGVyRXhwYW5kSWNvbkNlbGw7XG5cblxuICAgIHZhciBCb2R5Um93ID0gY29tcG9uZW50cy5ib2R5LnJvdztcbiAgICB2YXIgQm9keUNlbGwgPSBjb21wb25lbnRzLmJvZHkuY2VsbDtcblxuICAgIHZhciBjbGFzc05hbWUgPSB0aGlzLnByb3BzLmNsYXNzTmFtZTtcblxuXG4gICAgaWYgKGhvdmVyZWQpIHtcbiAgICAgIGNsYXNzTmFtZSArPSAnICcgKyBwcmVmaXhDbHMgKyAnLWhvdmVyJztcbiAgICB9XG5cbiAgICB2YXIgY2VsbHMgPSBbXTtcblxuICAgIHJlbmRlckV4cGFuZEljb25DZWxsKGNlbGxzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29sdW1ucy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNvbHVtbiA9IGNvbHVtbnNbaV07XG5cbiAgICAgIHdhcm5pbmdPbmNlKGNvbHVtbi5vbkNlbGxDbGljayA9PT0gdW5kZWZpbmVkLCAnY29sdW1uW29uQ2VsbENsaWNrXSBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGNvbHVtbltvbkNlbGxdIGluc3RlYWQuJyk7XG5cbiAgICAgIGNlbGxzLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChUYWJsZUNlbGwsIHtcbiAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgIHJlY29yZDogcmVjb3JkLFxuICAgICAgICBpbmRlbnRTaXplOiBpbmRlbnRTaXplLFxuICAgICAgICBpbmRlbnQ6IGluZGVudCxcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICBjb2x1bW46IGNvbHVtbixcbiAgICAgICAga2V5OiBjb2x1bW4ua2V5IHx8IGNvbHVtbi5kYXRhSW5kZXgsXG4gICAgICAgIGV4cGFuZEljb246IGhhc0V4cGFuZEljb24oaSkgJiYgcmVuZGVyRXhwYW5kSWNvbigpLFxuICAgICAgICBjb21wb25lbnQ6IEJvZHlDZWxsXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgdmFyIHJvd0NsYXNzTmFtZSA9IChwcmVmaXhDbHMgKyAnICcgKyBjbGFzc05hbWUgKyAnICcgKyBwcmVmaXhDbHMgKyAnLWxldmVsLScgKyBpbmRlbnQpLnRyaW0oKTtcblxuICAgIHZhciByb3dQcm9wcyA9IG9uUm93KHJlY29yZCwgaW5kZXgpO1xuICAgIHZhciBjdXN0b21TdHlsZSA9IHJvd1Byb3BzID8gcm93UHJvcHMuc3R5bGUgOiB7fTtcbiAgICB2YXIgc3R5bGUgPSB7IGhlaWdodDogaGVpZ2h0IH07XG5cbiAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgIHN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgc3R5bGUgPSBfZXh0ZW5kcyh7fSwgc3R5bGUsIGN1c3RvbVN0eWxlKTtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgQm9keVJvdyxcbiAgICAgIF9leHRlbmRzKHtcbiAgICAgICAgb25DbGljazogdGhpcy5vblJvd0NsaWNrLFxuICAgICAgICBvbkRvdWJsZUNsaWNrOiB0aGlzLm9uUm93RG91YmxlQ2xpY2ssXG4gICAgICAgIG9uTW91c2VFbnRlcjogdGhpcy5vbk1vdXNlRW50ZXIsXG4gICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5vbk1vdXNlTGVhdmUsXG4gICAgICAgIG9uQ29udGV4dE1lbnU6IHRoaXMub25Db250ZXh0TWVudSxcbiAgICAgICAgY2xhc3NOYW1lOiByb3dDbGFzc05hbWVcbiAgICAgIH0sIHJvd1Byb3BzLCB7XG4gICAgICAgIHN0eWxlOiBzdHlsZVxuICAgICAgfSksXG4gICAgICBjZWxsc1xuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIFRhYmxlUm93O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5UYWJsZVJvdy5wcm9wVHlwZXMgPSB7XG4gIG9uUm93OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Sb3dDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uUm93RG91YmxlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICBvblJvd0NvbnRleHRNZW51OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Sb3dNb3VzZUVudGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Sb3dNb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgcmVjb3JkOiBQcm9wVHlwZXMub2JqZWN0LFxuICBwcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uSG92ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXksXG4gIGhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuICBpbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgcm93S2V5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSkuaXNSZXF1aXJlZCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpbmRlbnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGluZGVudFNpemU6IFByb3BUeXBlcy5udW1iZXIsXG4gIGhhc0V4cGFuZEljb246IFByb3BUeXBlcy5mdW5jLFxuICBob3ZlcmVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBzdG9yZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBmaXhlZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmJvb2xdKSxcbiAgcmVuZGVyRXhwYW5kSWNvbjogUHJvcFR5cGVzLmZ1bmMsXG4gIHJlbmRlckV4cGFuZEljb25DZWxsOiBQcm9wVHlwZXMuZnVuYyxcbiAgY29tcG9uZW50czogUHJvcFR5cGVzLmFueSxcbiAgZXhwYW5kZWRSb3c6IFByb3BUeXBlcy5ib29sLFxuICBpc0FueUNvbHVtbnNGaXhlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGFuY2VzdG9yS2V5czogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbn07XG5UYWJsZVJvdy5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uUm93OiBmdW5jdGlvbiBvblJvdygpIHt9LFxuICBvbkhvdmVyOiBmdW5jdGlvbiBvbkhvdmVyKCkge30sXG4gIGhhc0V4cGFuZEljb246IGZ1bmN0aW9uIGhhc0V4cGFuZEljb24oKSB7fSxcbiAgcmVuZGVyRXhwYW5kSWNvbjogZnVuY3Rpb24gcmVuZGVyRXhwYW5kSWNvbigpIHt9LFxuICByZW5kZXJFeHBhbmRJY29uQ2VsbDogZnVuY3Rpb24gcmVuZGVyRXhwYW5kSWNvbkNlbGwoKSB7fVxufTtcblxuXG5mdW5jdGlvbiBnZXRSb3dIZWlnaHQoc3RhdGUsIHByb3BzKSB7XG4gIHZhciBleHBhbmRlZFJvd3NIZWlnaHQgPSBzdGF0ZS5leHBhbmRlZFJvd3NIZWlnaHQsXG4gICAgICBmaXhlZENvbHVtbnNCb2R5Um93c0hlaWdodCA9IHN0YXRlLmZpeGVkQ29sdW1uc0JvZHlSb3dzSGVpZ2h0O1xuICB2YXIgZml4ZWQgPSBwcm9wcy5maXhlZCxcbiAgICAgIGluZGV4ID0gcHJvcHMuaW5kZXgsXG4gICAgICByb3dLZXkgPSBwcm9wcy5yb3dLZXk7XG5cblxuICBpZiAoIWZpeGVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoZXhwYW5kZWRSb3dzSGVpZ2h0W3Jvd0tleV0pIHtcbiAgICByZXR1cm4gZXhwYW5kZWRSb3dzSGVpZ2h0W3Jvd0tleV07XG4gIH1cblxuICBpZiAoZml4ZWRDb2x1bW5zQm9keVJvd3NIZWlnaHRbaW5kZXhdKSB7XG4gICAgcmV0dXJuIGZpeGVkQ29sdW1uc0JvZHlSb3dzSGVpZ2h0W2luZGV4XTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5wb2x5ZmlsbChUYWJsZVJvdyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoZnVuY3Rpb24gKHN0YXRlLCBwcm9wcykge1xuICB2YXIgY3VycmVudEhvdmVyS2V5ID0gc3RhdGUuY3VycmVudEhvdmVyS2V5LFxuICAgICAgZXhwYW5kZWRSb3dLZXlzID0gc3RhdGUuZXhwYW5kZWRSb3dLZXlzO1xuICB2YXIgcm93S2V5ID0gcHJvcHMucm93S2V5LFxuICAgICAgYW5jZXN0b3JLZXlzID0gcHJvcHMuYW5jZXN0b3JLZXlzO1xuXG4gIHZhciB2aXNpYmxlID0gYW5jZXN0b3JLZXlzLmxlbmd0aCA9PT0gMCB8fCBhbmNlc3RvcktleXMuZXZlcnkoZnVuY3Rpb24gKGspIHtcbiAgICByZXR1cm4gfmV4cGFuZGVkUm93S2V5cy5pbmRleE9mKGspO1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHZpc2libGU6IHZpc2libGUsXG4gICAgaG92ZXJlZDogY3VycmVudEhvdmVyS2V5ID09PSByb3dLZXksXG4gICAgaGVpZ2h0OiBnZXRSb3dIZWlnaHQoc3RhdGUsIHByb3BzKVxuICB9O1xufSkoVGFibGVSb3cpOyIsImltcG9ydCBUYWJsZSBmcm9tICcuL1RhYmxlJztcbmltcG9ydCBDb2x1bW4gZnJvbSAnLi9Db2x1bW4nO1xuaW1wb3J0IENvbHVtbkdyb3VwIGZyb20gJy4vQ29sdW1uR3JvdXAnO1xuXG5UYWJsZS5Db2x1bW4gPSBDb2x1bW47XG5UYWJsZS5Db2x1bW5Hcm91cCA9IENvbHVtbkdyb3VwO1xuXG5leHBvcnQgZGVmYXVsdCBUYWJsZTtcbmV4cG9ydCB7IENvbHVtbiwgQ29sdW1uR3JvdXAgfTsiLCJpbXBvcnQgd2FybmluZyBmcm9tICd3YXJuaW5nJztcblxudmFyIHNjcm9sbGJhclNpemUgPSB2b2lkIDA7XG5cbi8vIE1lYXN1cmUgc2Nyb2xsYmFyIHdpZHRoIGZvciBwYWRkaW5nIGJvZHkgZHVyaW5nIG1vZGFsIHNob3cvaGlkZVxudmFyIHNjcm9sbGJhck1lYXN1cmUgPSB7XG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB0b3A6ICctOTk5OXB4JyxcbiAgd2lkdGg6ICc1MHB4JyxcbiAgaGVpZ2h0OiAnNTBweCcsXG4gIG92ZXJmbG93OiAnc2Nyb2xsJ1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1lYXN1cmVTY3JvbGxiYXIoKSB7XG4gIHZhciBkaXJlY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICd2ZXJ0aWNhbCc7XG5cbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBpZiAoc2Nyb2xsYmFyU2l6ZSkge1xuICAgIHJldHVybiBzY3JvbGxiYXJTaXplO1xuICB9XG4gIHZhciBzY3JvbGxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgT2JqZWN0LmtleXMoc2Nyb2xsYmFyTWVhc3VyZSkuZm9yRWFjaChmdW5jdGlvbiAoc2Nyb2xsUHJvcCkge1xuICAgIHNjcm9sbERpdi5zdHlsZVtzY3JvbGxQcm9wXSA9IHNjcm9sbGJhck1lYXN1cmVbc2Nyb2xsUHJvcF07XG4gIH0pO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdik7XG4gIHZhciBzaXplID0gMDtcbiAgaWYgKGRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgIHNpemUgPSBzY3JvbGxEaXYub2Zmc2V0V2lkdGggLSBzY3JvbGxEaXYuY2xpZW50V2lkdGg7XG4gIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICBzaXplID0gc2Nyb2xsRGl2Lm9mZnNldEhlaWdodCAtIHNjcm9sbERpdi5jbGllbnRIZWlnaHQ7XG4gIH1cblxuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdik7XG4gIHNjcm9sbGJhclNpemUgPSBzaXplO1xuICByZXR1cm4gc2Nyb2xsYmFyU2l6ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIGltbWVkaWF0ZSkge1xuICB2YXIgdGltZW91dCA9IHZvaWQgMDtcbiAgZnVuY3Rpb24gZGVib3VuY2VGdW5jKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAvLyBodHRwczovL2ZiLm1lL3JlYWN0LWV2ZW50LXBvb2xpbmdcbiAgICBpZiAoYXJnc1swXSAmJiBhcmdzWzBdLnBlcnNpc3QpIHtcbiAgICAgIGFyZ3NbMF0ucGVyc2lzdCgpO1xuICAgIH1cbiAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbiBsYXRlcigpIHtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgaWYgKCFpbW1lZGlhdGUpIHtcbiAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHZhciBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgaWYgKGNhbGxOb3cpIHtcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfVxuICB9XG4gIGRlYm91bmNlRnVuYy5jYW5jZWwgPSBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGRlYm91bmNlRnVuYztcbn1cblxudmFyIHdhcm5lZCA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIHdhcm5pbmdPbmNlKGNvbmRpdGlvbiwgZm9ybWF0LCBhcmdzKSB7XG4gIGlmICghd2FybmVkW2Zvcm1hdF0pIHtcbiAgICB3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCBhcmdzKTtcbiAgICB3YXJuZWRbZm9ybWF0XSA9ICFjb25kaXRpb247XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZShhcnJheSwgaXRlbSkge1xuICB2YXIgaW5kZXggPSBhcnJheS5pbmRleE9mKGl0ZW0pO1xuICB2YXIgZnJvbnQgPSBhcnJheS5zbGljZSgwLCBpbmRleCk7XG4gIHZhciBsYXN0ID0gYXJyYXkuc2xpY2UoaW5kZXggKyAxLCBhcnJheS5sZW5ndGgpO1xuICByZXR1cm4gZnJvbnQuY29uY2F0KGxhc3QpO1xufSIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAvLyBDYWxsIHRoaXMuY29uc3RydWN0b3IuZ0RTRlAgdG8gc3VwcG9ydCBzdWItY2xhc3Nlcy5cbiAgdmFyIHN0YXRlID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHModGhpcy5wcm9wcywgdGhpcy5zdGF0ZSk7XG4gIGlmIChzdGF0ZSAhPT0gbnVsbCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgLy8gQ2FsbCB0aGlzLmNvbnN0cnVjdG9yLmdEU0ZQIHRvIHN1cHBvcnQgc3ViLWNsYXNzZXMuXG4gIHZhciBzdGF0ZSA9IHRoaXMuY29uc3RydWN0b3IuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgdGhpcy5zdGF0ZSk7XG4gIGlmIChzdGF0ZSAhPT0gbnVsbCAmJiBzdGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29tcG9uZW50V2lsbFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICB0cnkge1xuICAgIHZhciBwcmV2UHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBwcmV2U3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMucHJvcHMgPSBuZXh0UHJvcHM7XG4gICAgdGhpcy5zdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICB0aGlzLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90RmxhZyA9IHRydWU7XG4gICAgdGhpcy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdCA9IHRoaXMuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoXG4gICAgICBwcmV2UHJvcHMsXG4gICAgICBwcmV2U3RhdGVcbiAgICApO1xuICB9IGZpbmFsbHkge1xuICAgIHRoaXMucHJvcHMgPSBwcmV2UHJvcHM7XG4gICAgdGhpcy5zdGF0ZSA9IHByZXZTdGF0ZTtcbiAgfVxufVxuXG4vLyBSZWFjdCBtYXkgd2FybiBhYm91dCBjV00vY1dSUC9jV1UgbWV0aG9kcyBiZWluZyBkZXByZWNhdGVkLlxuLy8gQWRkIGEgZmxhZyB0byBzdXBwcmVzcyB0aGVzZSB3YXJuaW5ncyBmb3IgdGhpcyBzcGVjaWFsIGNhc2UuXG5jb21wb25lbnRXaWxsTW91bnQuX19zdXBwcmVzc0RlcHJlY2F0aW9uV2FybmluZyA9IHRydWU7XG5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzLl9fc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmcgPSB0cnVlO1xuY29tcG9uZW50V2lsbFVwZGF0ZS5fX3N1cHByZXNzRGVwcmVjYXRpb25XYXJuaW5nID0gdHJ1ZTtcblxuZnVuY3Rpb24gcG9seWZpbGwoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuXG4gIGlmICghcHJvdG90eXBlIHx8ICFwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG9ubHkgcG9seWZpbGwgY2xhc3MgY29tcG9uZW50cycpO1xuICB9XG5cbiAgaWYgKFxuICAgIHR5cGVvZiBDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzICE9PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIHByb3RvdHlwZS5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSAhPT0gJ2Z1bmN0aW9uJ1xuICApIHtcbiAgICByZXR1cm4gQ29tcG9uZW50O1xuICB9XG5cbiAgLy8gSWYgbmV3IGNvbXBvbmVudCBBUElzIGFyZSBkZWZpbmVkLCBcInVuc2FmZVwiIGxpZmVjeWNsZXMgd29uJ3QgYmUgY2FsbGVkLlxuICAvLyBFcnJvciBpZiBhbnkgb2YgdGhlc2UgbGlmZWN5Y2xlcyBhcmUgcHJlc2VudCxcbiAgLy8gQmVjYXVzZSB0aGV5IHdvdWxkIHdvcmsgZGlmZmVyZW50bHkgYmV0d2VlbiBvbGRlciBhbmQgbmV3ZXIgKDE2LjMrKSB2ZXJzaW9ucyBvZiBSZWFjdC5cbiAgdmFyIGZvdW5kV2lsbE1vdW50TmFtZSA9IG51bGw7XG4gIHZhciBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lID0gbnVsbDtcbiAgdmFyIGZvdW5kV2lsbFVwZGF0ZU5hbWUgPSBudWxsO1xuICBpZiAodHlwZW9mIHByb3RvdHlwZS5jb21wb25lbnRXaWxsTW91bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxNb3VudE5hbWUgPSAnY29tcG9uZW50V2lsbE1vdW50JztcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvdG90eXBlLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxNb3VudE5hbWUgPSAnVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCc7XG4gIH1cbiAgaWYgKHR5cGVvZiBwcm90b3R5cGUuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgPSAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyc7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb3RvdHlwZS5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgPSAnVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnO1xuICB9XG4gIGlmICh0eXBlb2YgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxVcGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxVcGRhdGVOYW1lID0gJ2NvbXBvbmVudFdpbGxVcGRhdGUnO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm90b3R5cGUuVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3VuZFdpbGxVcGRhdGVOYW1lID0gJ1VOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlJztcbiAgfVxuICBpZiAoXG4gICAgZm91bmRXaWxsTW91bnROYW1lICE9PSBudWxsIHx8XG4gICAgZm91bmRXaWxsUmVjZWl2ZVByb3BzTmFtZSAhPT0gbnVsbCB8fFxuICAgIGZvdW5kV2lsbFVwZGF0ZU5hbWUgIT09IG51bGxcbiAgKSB7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWU7XG4gICAgdmFyIG5ld0FwaU5hbWUgPVxuICAgICAgdHlwZW9mIENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyAnZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKCknXG4gICAgICAgIDogJ2dldFNuYXBzaG90QmVmb3JlVXBkYXRlKCknO1xuXG4gICAgdGhyb3cgRXJyb3IoXG4gICAgICAnVW5zYWZlIGxlZ2FjeSBsaWZlY3ljbGVzIHdpbGwgbm90IGJlIGNhbGxlZCBmb3IgY29tcG9uZW50cyB1c2luZyBuZXcgY29tcG9uZW50IEFQSXMuXFxuXFxuJyArXG4gICAgICAgIGNvbXBvbmVudE5hbWUgK1xuICAgICAgICAnIHVzZXMgJyArXG4gICAgICAgIG5ld0FwaU5hbWUgK1xuICAgICAgICAnIGJ1dCBhbHNvIGNvbnRhaW5zIHRoZSBmb2xsb3dpbmcgbGVnYWN5IGxpZmVjeWNsZXM6JyArXG4gICAgICAgIChmb3VuZFdpbGxNb3VudE5hbWUgIT09IG51bGwgPyAnXFxuICAnICsgZm91bmRXaWxsTW91bnROYW1lIDogJycpICtcbiAgICAgICAgKGZvdW5kV2lsbFJlY2VpdmVQcm9wc05hbWUgIT09IG51bGxcbiAgICAgICAgICA/ICdcXG4gICcgKyBmb3VuZFdpbGxSZWNlaXZlUHJvcHNOYW1lXG4gICAgICAgICAgOiAnJykgK1xuICAgICAgICAoZm91bmRXaWxsVXBkYXRlTmFtZSAhPT0gbnVsbCA/ICdcXG4gICcgKyBmb3VuZFdpbGxVcGRhdGVOYW1lIDogJycpICtcbiAgICAgICAgJ1xcblxcblRoZSBhYm92ZSBsaWZlY3ljbGVzIHNob3VsZCBiZSByZW1vdmVkLiBMZWFybiBtb3JlIGFib3V0IHRoaXMgd2FybmluZyBoZXJlOlxcbicgK1xuICAgICAgICAnaHR0cHM6Ly9mYi5tZS9yZWFjdC1hc3luYy1jb21wb25lbnQtbGlmZWN5Y2xlLWhvb2tzJ1xuICAgICk7XG4gIH1cblxuICAvLyBSZWFjdCA8PSAxNi4yIGRvZXMgbm90IHN1cHBvcnQgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcy5cbiAgLy8gQXMgYSB3b3JrYXJvdW5kLCB1c2UgY1dNIGFuZCBjV1JQIHRvIGludm9rZSB0aGUgbmV3IHN0YXRpYyBsaWZlY3ljbGUuXG4gIC8vIE5ld2VyIHZlcnNpb25zIG9mIFJlYWN0IHdpbGwgaWdub3JlIHRoZXNlIGxpZmVjeWNsZXMgaWYgZ0RTRlAgZXhpc3RzLlxuICBpZiAodHlwZW9mIENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBwcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gY29tcG9uZW50V2lsbE1vdW50O1xuICAgIHByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcztcbiAgfVxuXG4gIC8vIFJlYWN0IDw9IDE2LjIgZG9lcyBub3Qgc3VwcG9ydCBnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZS5cbiAgLy8gQXMgYSB3b3JrYXJvdW5kLCB1c2UgY1dVIHRvIGludm9rZSB0aGUgbmV3IGxpZmVjeWNsZS5cbiAgLy8gTmV3ZXIgdmVyc2lvbnMgb2YgUmVhY3Qgd2lsbCBpZ25vcmUgdGhhdCBsaWZlY3ljbGUgaWYgZ1NCVSBleGlzdHMuXG4gIGlmICh0eXBlb2YgcHJvdG90eXBlLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKHR5cGVvZiBwcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdDYW5ub3QgcG9seWZpbGwgZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoKSBmb3IgY29tcG9uZW50cyB0aGF0IGRvIG5vdCBkZWZpbmUgY29tcG9uZW50RGlkVXBkYXRlKCkgb24gdGhlIHByb3RvdHlwZSdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcHJvdG90eXBlLmNvbXBvbmVudFdpbGxVcGRhdGUgPSBjb21wb25lbnRXaWxsVXBkYXRlO1xuXG4gICAgdmFyIGNvbXBvbmVudERpZFVwZGF0ZSA9IHByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGU7XG5cbiAgICBwcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlUG9seWZpbGwoXG4gICAgICBwcmV2UHJvcHMsXG4gICAgICBwcmV2U3RhdGUsXG4gICAgICBtYXliZVNuYXBzaG90XG4gICAgKSB7XG4gICAgICAvLyAxNi4zKyB3aWxsIG5vdCBleGVjdXRlIG91ciB3aWxsLXVwZGF0ZSBtZXRob2Q7XG4gICAgICAvLyBJdCB3aWxsIHBhc3MgYSBzbmFwc2hvdCB2YWx1ZSB0byBkaWQtdXBkYXRlIHRob3VnaC5cbiAgICAgIC8vIE9sZGVyIHZlcnNpb25zIHdpbGwgcmVxdWlyZSBvdXIgcG9seWZpbGxlZCB3aWxsLXVwZGF0ZSB2YWx1ZS5cbiAgICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGJvdGggY2FzZXMsIGJ1dCBjYW4ndCBqdXN0IGNoZWNrIGZvciB0aGUgcHJlc2VuY2Ugb2YgXCJtYXliZVNuYXBzaG90XCIsXG4gICAgICAvLyBCZWNhdXNlIGZvciA8PSAxNS54IHZlcnNpb25zIHRoaXMgbWlnaHQgYmUgYSBcInByZXZDb250ZXh0XCIgb2JqZWN0LlxuICAgICAgLy8gV2UgYWxzbyBjYW4ndCBqdXN0IGNoZWNrIFwiX19yZWFjdEludGVybmFsU25hcHNob3RcIixcbiAgICAgIC8vIEJlY2F1c2UgZ2V0LXNuYXBzaG90IG1pZ2h0IHJldHVybiBhIGZhbHN5IHZhbHVlLlxuICAgICAgLy8gU28gY2hlY2sgZm9yIHRoZSBleHBsaWNpdCBfX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEZsYWcgZmxhZyB0byBkZXRlcm1pbmUgYmVoYXZpb3IuXG4gICAgICB2YXIgc25hcHNob3QgPSB0aGlzLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90RmxhZ1xuICAgICAgICA/IHRoaXMuX19yZWFjdEludGVybmFsU25hcHNob3RcbiAgICAgICAgOiBtYXliZVNuYXBzaG90O1xuXG4gICAgICBjb21wb25lbnREaWRVcGRhdGUuY2FsbCh0aGlzLCBwcmV2UHJvcHMsIHByZXZTdGF0ZSwgc25hcHNob3QpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gQ29tcG9uZW50O1xufVxuXG5leHBvcnQgeyBwb2x5ZmlsbCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==