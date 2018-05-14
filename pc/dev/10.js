(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "../node_modules/antd/es/calendar/locale/en_US.js":
/*!********************************************************!*\
  !*** ../node_modules/antd/es/calendar/locale/en_US.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../date-picker/locale/en_US */ "../node_modules/antd/es/date-picker/locale/en_US.js");

/* harmony default export */ __webpack_exports__["default"] = (_date_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../node_modules/antd/es/date-picker/locale/en_US.js":
/*!***********************************************************!*\
  !*** ../node_modules/antd/es/date-picker/locale/en_US.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_calendar_es_locale_en_US__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-calendar/es/locale/en_US */ "../node_modules/rc-calendar/es/locale/en_US.js");
/* harmony import */ var _time_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../time-picker/locale/en_US */ "../node_modules/antd/es/time-picker/locale/en_US.js");



// Merge into a locale object
var locale = {
    lang: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ placeholder: 'Select date', rangePlaceholder: ['Start date', 'End date'] }, rc_calendar_es_locale_en_US__WEBPACK_IMPORTED_MODULE_1__["default"]),
    timePickerLocale: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _time_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_2__["default"])
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ "../node_modules/antd/es/locale-provider/LocaleReceiver.js":
/*!*****************************************************************!*\
  !*** ../node_modules/antd/es/locale-provider/LocaleReceiver.js ***!
  \*****************************************************************/
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








var LocaleReceiver = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(LocaleReceiver, _React$Component);

    function LocaleReceiver() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, LocaleReceiver);

        return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (LocaleReceiver.__proto__ || Object.getPrototypeOf(LocaleReceiver)).apply(this, arguments));
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(LocaleReceiver, [{
        key: 'getLocale',
        value: function getLocale() {
            var _props = this.props,
                componentName = _props.componentName,
                defaultLocale = _props.defaultLocale;
            var antLocale = this.context.antLocale;

            var localeFromContext = antLocale && antLocale[componentName];
            return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, typeof defaultLocale === 'function' ? defaultLocale() : defaultLocale, localeFromContext || {});
        }
    }, {
        key: 'getLocaleCode',
        value: function getLocaleCode() {
            var antLocale = this.context.antLocale;

            var localeCode = antLocale && antLocale.locale;
            // Had use LocaleProvide but didn't set locale
            if (antLocale && antLocale.exist && !localeCode) {
                return 'en-us';
            }
            return localeCode;
        }
    }, {
        key: 'render',
        value: function render() {
            return this.props.children(this.getLocale(), this.getLocaleCode());
        }
    }]);

    return LocaleReceiver;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LocaleReceiver);

LocaleReceiver.contextTypes = {
    antLocale: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object
};

/***/ }),

/***/ "../node_modules/antd/es/locale-provider/default.js":
/*!**********************************************************!*\
  !*** ../node_modules/antd/es/locale-provider/default.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rc_pagination_es_locale_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rc-pagination/es/locale/en_US */ "../node_modules/rc-pagination/es/locale/en_US.js");
/* harmony import */ var _date_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../date-picker/locale/en_US */ "../node_modules/antd/es/date-picker/locale/en_US.js");
/* harmony import */ var _time_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../time-picker/locale/en_US */ "../node_modules/antd/es/time-picker/locale/en_US.js");
/* harmony import */ var _calendar_locale_en_US__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../calendar/locale/en_US */ "../node_modules/antd/es/calendar/locale/en_US.js");




/* harmony default export */ __webpack_exports__["default"] = ({
    locale: 'en',
    Pagination: rc_pagination_es_locale_en_US__WEBPACK_IMPORTED_MODULE_0__["default"],
    DatePicker: _date_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_1__["default"],
    TimePicker: _time_picker_locale_en_US__WEBPACK_IMPORTED_MODULE_2__["default"],
    Calendar: _calendar_locale_en_US__WEBPACK_IMPORTED_MODULE_3__["default"],
    Table: {
        filterTitle: 'Filter menu',
        filterConfirm: 'OK',
        filterReset: 'Reset',
        emptyText: 'No data',
        selectAll: 'Select current page',
        selectInvert: 'Invert current page'
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Cancel',
        justOkText: 'OK'
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Cancel'
    },
    Transfer: {
        titles: ['', ''],
        notFoundContent: 'Not Found',
        searchPlaceholder: 'Search here',
        itemUnit: 'item',
        itemsUnit: 'items'
    },
    Select: {
        notFoundContent: 'Not Found'
    },
    Upload: {
        uploading: 'Uploading...',
        removeFile: 'Remove file',
        uploadError: 'Upload error',
        previewFile: 'Preview file'
    }
});

/***/ }),

/***/ "../node_modules/antd/es/modal/ActionButton.js":
/*!*****************************************************!*\
  !*** ../node_modules/antd/es/modal/ActionButton.js ***!
  \*****************************************************/
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
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../button */ "../node_modules/antd/es/button/index.js");








var ActionButton = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ActionButton, _React$Component);

    function ActionButton(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ActionButton);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (ActionButton.__proto__ || Object.getPrototypeOf(ActionButton)).call(this, props));

        _this.onClick = function () {
            var _this$props = _this.props,
                actionFn = _this$props.actionFn,
                closeModal = _this$props.closeModal;

            if (actionFn) {
                var ret = void 0;
                if (actionFn.length) {
                    ret = actionFn(closeModal);
                } else {
                    ret = actionFn();
                    if (!ret) {
                        closeModal();
                    }
                }
                if (ret && ret.then) {
                    _this.setState({ loading: true });
                    ret.then(function () {
                        // It's unnecessary to set loading=false, for the Modal will be unmounted after close.
                        // this.setState({ loading: false });
                        closeModal.apply(undefined, arguments);
                    }, function () {
                        // See: https://github.com/ant-design/ant-design/issues/6183
                        _this.setState({ loading: false });
                    });
                }
            } else {
                closeModal();
            }
        };
        _this.state = {
            loading: false
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ActionButton, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.autoFocus) {
                var $this = react_dom__WEBPACK_IMPORTED_MODULE_5__["findDOMNode"](this);
                this.timeoutId = setTimeout(function () {
                    return $this.focus();
                });
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearTimeout(this.timeoutId);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                type = _props.type,
                children = _props.children;

            var loading = this.state.loading;
            return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](
                _button__WEBPACK_IMPORTED_MODULE_6__["default"],
                { type: type, onClick: this.onClick, loading: loading },
                children
            );
        }
    }]);

    return ActionButton;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ActionButton);

/***/ }),

/***/ "../node_modules/antd/es/modal/Modal.js":
/*!**********************************************!*\
  !*** ../node_modules/antd/es/modal/Modal.js ***!
  \**********************************************/
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
/* harmony import */ var rc_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-dialog */ "../node_modules/rc-dialog/es/DialogWrap.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-util/es/Dom/addEventListener */ "../node_modules/rc-util/es/Dom/addEventListener.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../button */ "../node_modules/antd/es/button/index.js");
/* harmony import */ var _locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../locale-provider/LocaleReceiver */ "../node_modules/antd/es/locale-provider/LocaleReceiver.js");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./locale */ "../node_modules/antd/es/modal/locale.js");












var mousePosition = void 0;
var mousePositionEventBinded = void 0;

var Modal = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Modal, _React$Component);

    function Modal() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Modal);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));

        _this.handleCancel = function (e) {
            var onCancel = _this.props.onCancel;
            if (onCancel) {
                onCancel(e);
            }
        };
        _this.handleOk = function (e) {
            var onOk = _this.props.onOk;
            if (onOk) {
                onOk(e);
            }
        };
        _this.renderFooter = function (locale) {
            var _this$props = _this.props,
                okText = _this$props.okText,
                okType = _this$props.okType,
                cancelText = _this$props.cancelText,
                confirmLoading = _this$props.confirmLoading;

            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                'div',
                null,
                react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                    _button__WEBPACK_IMPORTED_MODULE_9__["default"],
                    { onClick: _this.handleCancel },
                    cancelText || locale.cancelText
                ),
                react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                    _button__WEBPACK_IMPORTED_MODULE_9__["default"],
                    { type: okType, loading: confirmLoading, onClick: _this.handleOk },
                    okText || locale.okText
                )
            );
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Modal, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (mousePositionEventBinded) {
                return;
            }
            // 只有点击事件支持从鼠标位置动画展开
            Object(rc_util_es_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_8__["default"])(document.documentElement, 'click', function (e) {
                mousePosition = {
                    x: e.pageX,
                    y: e.pageY
                };
                // 100ms 内发生过点击事件，则从点击位置动画展示
                // 否则直接 zoom 展示
                // 这样可以兼容非点击方式展开
                setTimeout(function () {
                    return mousePosition = null;
                }, 100);
            });
            mousePositionEventBinded = true;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                footer = _props.footer,
                visible = _props.visible;

            var defaultFooter = react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                _locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_10__["default"],
                { componentName: 'Modal', defaultLocale: Object(_locale__WEBPACK_IMPORTED_MODULE_11__["getConfirmLocale"])() },
                this.renderFooter
            );
            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](rc_dialog__WEBPACK_IMPORTED_MODULE_6__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props, { footer: footer === undefined ? defaultFooter : footer, visible: visible, mousePosition: mousePosition, onClose: this.handleCancel }));
        }
    }]);

    return Modal;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Modal);

Modal.defaultProps = {
    prefixCls: 'ant-modal',
    width: 520,
    transitionName: 'zoom',
    maskTransitionName: 'fade',
    confirmLoading: false,
    visible: false,
    okType: 'primary'
};
Modal.propTypes = {
    prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
    onOk: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
    onCancel: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
    okText: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node,
    cancelText: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node,
    width: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string]),
    confirmLoading: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
    visible: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
    align: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
    footer: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node,
    title: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.node,
    closable: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool
};

/***/ }),

/***/ "../node_modules/antd/es/modal/confirm.js":
/*!************************************************!*\
  !*** ../node_modules/antd/es/modal/confirm.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return confirm; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icon */ "../node_modules/antd/es/icon/index.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modal */ "../node_modules/antd/es/modal/Modal.js");
/* harmony import */ var _ActionButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ActionButton */ "../node_modules/antd/es/modal/ActionButton.js");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./locale */ "../node_modules/antd/es/modal/locale.js");


var _this = undefined;








var IS_REACT_16 = !!react_dom__WEBPACK_IMPORTED_MODULE_2__["createPortal"];
var ConfirmDialog = function ConfirmDialog(props) {
    var onCancel = props.onCancel,
        onOk = props.onOk,
        close = props.close,
        zIndex = props.zIndex,
        afterClose = props.afterClose,
        visible = props.visible,
        keyboard = props.keyboard;

    var iconType = props.iconType || 'question-circle';
    var okType = props.okType || 'primary';
    var prefixCls = props.prefixCls || 'ant-confirm';
    // 默认为 true，保持向下兼容
    var okCancel = 'okCancel' in props ? props.okCancel : true;
    var width = props.width || 416;
    var style = props.style || {};
    // 默认为 false，保持旧版默认行为
    var maskClosable = props.maskClosable === undefined ? false : props.maskClosable;
    var runtimeLocale = Object(_locale__WEBPACK_IMPORTED_MODULE_7__["getConfirmLocale"])();
    var okText = props.okText || (okCancel ? runtimeLocale.okText : runtimeLocale.justOkText);
    var cancelText = props.cancelText || runtimeLocale.cancelText;
    var classString = classnames__WEBPACK_IMPORTED_MODULE_3___default()(prefixCls, prefixCls + '-' + props.type, props.className);
    var cancelButton = okCancel && react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
        _ActionButton__WEBPACK_IMPORTED_MODULE_6__["default"],
        { actionFn: onCancel, closeModal: close },
        cancelText
    );
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
        _Modal__WEBPACK_IMPORTED_MODULE_5__["default"],
        { className: classString, onCancel: close.bind(_this, { triggerCancel: true }), visible: visible, title: '', transitionName: 'zoom', footer: '', maskTransitionName: 'fade', maskClosable: maskClosable, style: style, width: width, zIndex: zIndex, afterClose: afterClose, keyboard: keyboard },
        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
            'div',
            { className: prefixCls + '-body-wrapper' },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                'div',
                { className: prefixCls + '-body' },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_4__["default"], { type: iconType }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                    'span',
                    { className: prefixCls + '-title' },
                    props.title
                ),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                    'div',
                    { className: prefixCls + '-content' },
                    props.content
                )
            ),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                'div',
                { className: prefixCls + '-btns' },
                cancelButton,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](
                    _ActionButton__WEBPACK_IMPORTED_MODULE_6__["default"],
                    { type: okType, actionFn: onOk, closeModal: close, autoFocus: true },
                    okText
                )
            )
        )
    );
};
function confirm(config) {
    var div = document.createElement('div');
    document.body.appendChild(div);
    function close() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        if (IS_REACT_16) {
            render(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, config, { close: close, visible: false, afterClose: destroy.bind.apply(destroy, [this].concat(args)) }));
        } else {
            destroy.apply(undefined, args);
        }
    }
    function destroy() {
        var unmountResult = react_dom__WEBPACK_IMPORTED_MODULE_2__["unmountComponentAtNode"](div);
        if (unmountResult && div.parentNode) {
            div.parentNode.removeChild(div);
        }

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        var triggerCancel = args && args.length && args.some(function (param) {
            return param && param.triggerCancel;
        });
        if (config.onCancel && triggerCancel) {
            config.onCancel.apply(config, args);
        }
    }
    function render(props) {
        react_dom__WEBPACK_IMPORTED_MODULE_2__["render"](react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ConfirmDialog, props), div);
    }
    render(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, config, { visible: true, close: close }));
    return {
        destroy: close
    };
}

/***/ }),

/***/ "../node_modules/antd/es/modal/index.js":
/*!**********************************************!*\
  !*** ../node_modules/antd/es/modal/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal */ "../node_modules/antd/es/modal/Modal.js");
/* harmony import */ var _confirm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirm */ "../node_modules/antd/es/modal/confirm.js");



_Modal__WEBPACK_IMPORTED_MODULE_1__["default"].info = function (props) {
    var config = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ type: 'info', iconType: 'info-circle', okCancel: false }, props);
    return Object(_confirm__WEBPACK_IMPORTED_MODULE_2__["default"])(config);
};
_Modal__WEBPACK_IMPORTED_MODULE_1__["default"].success = function (props) {
    var config = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ type: 'success', iconType: 'check-circle', okCancel: false }, props);
    return Object(_confirm__WEBPACK_IMPORTED_MODULE_2__["default"])(config);
};
_Modal__WEBPACK_IMPORTED_MODULE_1__["default"].error = function (props) {
    var config = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ type: 'error', iconType: 'cross-circle', okCancel: false }, props);
    return Object(_confirm__WEBPACK_IMPORTED_MODULE_2__["default"])(config);
};
_Modal__WEBPACK_IMPORTED_MODULE_1__["default"].warning = _Modal__WEBPACK_IMPORTED_MODULE_1__["default"].warn = function (props) {
    var config = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ type: 'warning', iconType: 'exclamation-circle', okCancel: false }, props);
    return Object(_confirm__WEBPACK_IMPORTED_MODULE_2__["default"])(config);
};
_Modal__WEBPACK_IMPORTED_MODULE_1__["default"].confirm = function (props) {
    var config = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ type: 'confirm', okCancel: true }, props);
    return Object(_confirm__WEBPACK_IMPORTED_MODULE_2__["default"])(config);
};
/* harmony default export */ __webpack_exports__["default"] = (_Modal__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "../node_modules/antd/es/modal/locale.js":
/*!***********************************************!*\
  !*** ../node_modules/antd/es/modal/locale.js ***!
  \***********************************************/
/*! exports provided: changeConfirmLocale, getConfirmLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeConfirmLocale", function() { return changeConfirmLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfirmLocale", function() { return getConfirmLocale; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locale_provider_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale-provider/default */ "../node_modules/antd/es/locale-provider/default.js");


var runtimeLocale = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _locale_provider_default__WEBPACK_IMPORTED_MODULE_1__["default"].Modal);
function changeConfirmLocale(newLocale) {
    if (newLocale) {
        runtimeLocale = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, runtimeLocale, newLocale);
    } else {
        runtimeLocale = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _locale_provider_default__WEBPACK_IMPORTED_MODULE_1__["default"].Modal);
    }
}
function getConfirmLocale() {
    return runtimeLocale;
}

/***/ }),

/***/ "../node_modules/antd/es/modal/style/css.js":
/*!**************************************************!*\
  !*** ../node_modules/antd/es/modal/style/css.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../node_modules/antd/es/modal/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../button/style/css */ "../node_modules/antd/es/button/style/css.js");


// style dependencies


/***/ }),

/***/ "../node_modules/antd/es/modal/style/index.css":
/*!*****************************************************!*\
  !*** ../node_modules/antd/es/modal/style/index.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/modal/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/modal/style/index.css", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
		var newContent = __webpack_require__(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/modal/style/index.css");

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

/***/ "../node_modules/antd/es/select/index.js":
/*!***********************************************!*\
  !*** ../node_modules/antd/es/select/index.js ***!
  \***********************************************/
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
/* harmony import */ var rc_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-select */ "../node_modules/rc-select/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../locale-provider/LocaleReceiver */ "../node_modules/antd/es/locale-provider/LocaleReceiver.js");
/* harmony import */ var _locale_provider_default__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../locale-provider/default */ "../node_modules/antd/es/locale-provider/default.js");






var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};






var SelectPropTypes = {
    prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
    className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
    size: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(['default', 'large', 'small']),
    combobox: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
    notFoundContent: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any,
    showSearch: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
    optionLabelProp: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
    transitionName: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
    choiceTransitionName: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string
};
// => It is needless to export the declaration of below two inner components.
// export { Option, OptGroup };

var Select = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Select, _React$Component);

    function Select() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Select);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));

        _this.saveSelect = function (node) {
            _this.rcSelect = node;
        };
        _this.renderSelect = function (locale) {
            var _classNames;

            var _a = _this.props,
                prefixCls = _a.prefixCls,
                _a$className = _a.className,
                className = _a$className === undefined ? '' : _a$className,
                size = _a.size,
                mode = _a.mode,
                restProps = __rest(_a, ["prefixCls", "className", "size", "mode"]);
            var cls = classnames__WEBPACK_IMPORTED_MODULE_9___default()((_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-lg', size === 'large'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-sm', size === 'small'), _classNames), className);
            var optionLabelProp = _this.props.optionLabelProp;

            var isCombobox = mode === 'combobox';
            if (isCombobox) {
                // children 带 dom 结构时，无法填入输入框
                optionLabelProp = optionLabelProp || 'value';
            }
            var modeConfig = {
                multiple: mode === 'multiple',
                tags: mode === 'tags',
                combobox: isCombobox
            };
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](rc_select__WEBPACK_IMPORTED_MODULE_8__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, restProps, modeConfig, { prefixCls: prefixCls, className: cls, optionLabelProp: optionLabelProp || 'children', notFoundContent: _this.getNotFoundContent(locale), ref: _this.saveSelect }));
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Select, [{
        key: 'focus',
        value: function focus() {
            this.rcSelect.focus();
        }
    }, {
        key: 'blur',
        value: function blur() {
            this.rcSelect.blur();
        }
    }, {
        key: 'getNotFoundContent',
        value: function getNotFoundContent(locale) {
            var _props = this.props,
                notFoundContent = _props.notFoundContent,
                mode = _props.mode;

            var isCombobox = mode === 'combobox';
            if (isCombobox) {
                // AutoComplete don't have notFoundContent defaultly
                return notFoundContent === undefined ? null : notFoundContent;
            }
            return notFoundContent === undefined ? locale.notFoundContent : notFoundContent;
        }
    }, {
        key: 'render',
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                _locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_10__["default"],
                { componentName: 'Select', defaultLocale: _locale_provider_default__WEBPACK_IMPORTED_MODULE_11__["default"].Select },
                this.renderSelect
            );
        }
    }]);

    return Select;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Select);

Select.Option = rc_select__WEBPACK_IMPORTED_MODULE_8__["Option"];
Select.OptGroup = rc_select__WEBPACK_IMPORTED_MODULE_8__["OptGroup"];
Select.defaultProps = {
    prefixCls: 'ant-select',
    showSearch: false,
    transitionName: 'slide-up',
    choiceTransitionName: 'zoom'
};
Select.propTypes = SelectPropTypes;

/***/ }),

/***/ "../node_modules/antd/es/select/style/css.js":
/*!***************************************************!*\
  !*** ../node_modules/antd/es/select/style/css.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../node_modules/antd/es/select/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _input_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../input/style/css */ "../node_modules/antd/es/input/style/css.js");


// style dependencies


/***/ }),

/***/ "../node_modules/antd/es/select/style/index.css":
/*!******************************************************!*\
  !*** ../node_modules/antd/es/select/style/index.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/select/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/select/style/index.css", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
		var newContent = __webpack_require__(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/select/style/index.css");

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

/***/ "../node_modules/antd/es/time-picker/locale/en_US.js":
/*!***********************************************************!*\
  !*** ../node_modules/antd/es/time-picker/locale/en_US.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var locale = {
    placeholder: 'Select time'
};
/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/antd/es/modal/style/index.css":
/*!********************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/antd/es/modal/style/index.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n.ant-modal {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: relative;\n  width: auto;\n  margin: 0 auto;\n  top: 100px;\n  padding-bottom: 24px;\n}\n.ant-modal-wrap {\n  position: fixed;\n  overflow: auto;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1000;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n.ant-modal-title {\n  margin: 0;\n  font-size: 16px;\n  line-height: 22px;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.85);\n}\n.ant-modal-content {\n  position: relative;\n  background-color: #fff;\n  border: 0;\n  border-radius: 4px;\n  background-clip: padding-box;\n  -webkit-box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.ant-modal-close {\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 10;\n  font-weight: 700;\n  line-height: 1;\n  text-decoration: none;\n  -webkit-transition: color .3s;\n  transition: color .3s;\n  color: rgba(0, 0, 0, 0.45);\n  outline: 0;\n  padding: 0;\n}\n.ant-modal-close-x {\n  display: block;\n  font-style: normal;\n  vertical-align: baseline;\n  text-align: center;\n  text-transform: none;\n  text-rendering: auto;\n  width: 56px;\n  height: 56px;\n  line-height: 56px;\n  font-size: 16px;\n}\n.ant-modal-close-x:before {\n  content: \"\\E633\";\n  display: block;\n  font-family: \"anticon\" !important;\n}\n.ant-modal-close:focus,\n.ant-modal-close:hover {\n  color: #444;\n  text-decoration: none;\n}\n.ant-modal-header {\n  padding: 16px 24px;\n  border-radius: 4px 4px 0 0;\n  background: #fff;\n  color: rgba(0, 0, 0, 0.65);\n  border-bottom: 1px solid #e8e8e8;\n}\n.ant-modal-body {\n  padding: 24px;\n  font-size: 14px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.ant-modal-footer {\n  border-top: 1px solid #e8e8e8;\n  padding: 10px 16px;\n  text-align: right;\n  border-radius: 0 0 4px 4px;\n}\n.ant-modal-footer button + button {\n  margin-left: 8px;\n  margin-bottom: 0;\n}\n.ant-modal.zoom-enter,\n.ant-modal.zoom-appear {\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n  -webkit-transform: none;\n      -ms-transform: none;\n          transform: none;\n  opacity: 0;\n}\n.ant-modal-mask {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background-color: #373737;\n  background-color: rgba(0, 0, 0, 0.65);\n  height: 100%;\n  z-index: 1000;\n  filter: alpha(opacity=50);\n}\n.ant-modal-mask-hidden {\n  display: none;\n}\n.ant-modal-open {\n  overflow: hidden;\n}\n@media (max-width: 768px) {\n  .ant-modal {\n    width: auto !important;\n    margin: 10px;\n  }\n  .vertical-center-modal .ant-modal {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n  }\n}\n.ant-confirm .ant-modal-header {\n  display: none;\n}\n.ant-confirm .ant-modal-close {\n  display: none;\n}\n.ant-confirm .ant-modal-body {\n  padding: 32px 32px 24px;\n}\n.ant-confirm-body-wrapper {\n  zoom: 1;\n}\n.ant-confirm-body-wrapper:before,\n.ant-confirm-body-wrapper:after {\n  content: \" \";\n  display: table;\n}\n.ant-confirm-body-wrapper:after {\n  clear: both;\n  visibility: hidden;\n  font-size: 0;\n  height: 0;\n}\n.ant-confirm-body .ant-confirm-title {\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 22px;\n  display: block;\n  overflow: auto;\n}\n.ant-confirm-body .ant-confirm-content {\n  margin-left: 38px;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.65);\n  margin-top: 8px;\n}\n.ant-confirm-body > .anticon {\n  font-size: 22px;\n  margin-right: 16px;\n  float: left;\n}\n.ant-confirm .ant-confirm-btns {\n  margin-top: 24px;\n  float: right;\n}\n.ant-confirm .ant-confirm-btns button + button {\n  margin-left: 8px;\n  margin-bottom: 0;\n}\n.ant-confirm-error .ant-confirm-body > .anticon {\n  color: #f5222d;\n}\n.ant-confirm-warning .ant-confirm-body > .anticon,\n.ant-confirm-confirm .ant-confirm-body > .anticon {\n  color: #faad14;\n}\n.ant-confirm-info .ant-confirm-body > .anticon {\n  color: #1890ff;\n}\n.ant-confirm-success .ant-confirm-body > .anticon {\n  color: #52c41a;\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/antd/es/select/style/index.css":
/*!*********************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/antd/es/select/style/index.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n.ant-select {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: inline-block;\n  position: relative;\n}\n.ant-select ul,\n.ant-select ol {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.ant-select > ul > li > a {\n  padding: 0;\n  background-color: #fff;\n}\n.ant-select-arrow {\n  display: inline-block;\n  font-style: normal;\n  vertical-align: baseline;\n  text-align: center;\n  text-transform: none;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  position: absolute;\n  top: 50%;\n  right: 11px;\n  line-height: 1;\n  margin-top: -6px;\n  -webkit-transform-origin: 50% 50%;\n      -ms-transform-origin: 50% 50%;\n          transform-origin: 50% 50%;\n  color: rgba(0, 0, 0, 0.25);\n  font-size: 12px;\n}\n.ant-select-arrow:before {\n  display: block;\n  font-family: \"anticon\" !important;\n}\n.ant-select-arrow * {\n  display: none;\n}\n.ant-select-arrow:before {\n  content: '\\E61D';\n  -webkit-transition: -webkit-transform .3s;\n  transition: -webkit-transform .3s;\n  transition: transform .3s;\n  transition: transform .3s, -webkit-transform .3s;\n}\n.ant-select-selection {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: block;\n  background-color: #fff;\n  border-radius: 4px;\n  border: 1px solid #d9d9d9;\n  border-top-width: 1.02px;\n  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.ant-select-selection:hover {\n  border-color: #40a9ff;\n}\n.ant-select-focused .ant-select-selection,\n.ant-select-selection:focus,\n.ant-select-selection:active {\n  border-color: #40a9ff;\n  outline: 0;\n  -webkit-box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);\n          box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);\n}\n.ant-select-selection__clear {\n  display: inline-block;\n  font-style: normal;\n  vertical-align: baseline;\n  text-align: center;\n  text-transform: none;\n  text-rendering: auto;\n  opacity: 0;\n  position: absolute;\n  right: 11px;\n  z-index: 1;\n  background: #fff;\n  top: 50%;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.25);\n  width: 12px;\n  height: 12px;\n  margin-top: -6px;\n  line-height: 12px;\n  cursor: pointer;\n  -webkit-transition: color 0.3s ease, opacity 0.15s ease;\n  transition: color 0.3s ease, opacity 0.15s ease;\n}\n.ant-select-selection__clear:before {\n  display: block;\n  font-family: 'anticon';\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  content: \"\\E62E\";\n}\n.ant-select-selection__clear:hover {\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-select-selection:hover .ant-select-selection__clear {\n  opacity: 1;\n}\n.ant-select-selection-selected-value {\n  float: left;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 100%;\n  padding-right: 20px;\n}\n.ant-select-disabled {\n  color: rgba(0, 0, 0, 0.25);\n}\n.ant-select-disabled .ant-select-selection {\n  background: #f5f5f5;\n  cursor: not-allowed;\n}\n.ant-select-disabled .ant-select-selection:hover,\n.ant-select-disabled .ant-select-selection:focus,\n.ant-select-disabled .ant-select-selection:active {\n  border-color: #d9d9d9;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.ant-select-disabled .ant-select-selection__clear {\n  display: none;\n  visibility: hidden;\n  pointer-events: none;\n}\n.ant-select-disabled .ant-select-selection--multiple .ant-select-selection__choice {\n  background: #f5f5f5;\n  color: #aaa;\n  padding-right: 10px;\n}\n.ant-select-disabled .ant-select-selection--multiple .ant-select-selection__choice__remove {\n  display: none;\n}\n.ant-select-selection--single {\n  height: 32px;\n  position: relative;\n  cursor: pointer;\n}\n.ant-select-selection__rendered {\n  display: block;\n  margin-left: 11px;\n  margin-right: 11px;\n  position: relative;\n  line-height: 30px;\n}\n.ant-select-selection__rendered:after {\n  content: '.';\n  visibility: hidden;\n  pointer-events: none;\n  display: inline-block;\n  width: 0;\n}\n.ant-select-lg {\n  font-size: 16px;\n}\n.ant-select-lg .ant-select-selection--single {\n  height: 40px;\n}\n.ant-select-lg .ant-select-selection__rendered {\n  line-height: 38px;\n}\n.ant-select-lg .ant-select-selection--multiple {\n  min-height: 40px;\n}\n.ant-select-lg .ant-select-selection--multiple .ant-select-selection__rendered li {\n  height: 32px;\n  line-height: 32px;\n}\n.ant-select-lg .ant-select-selection--multiple .ant-select-selection__clear {\n  top: 20px;\n}\n.ant-select-sm .ant-select-selection--single {\n  height: 24px;\n}\n.ant-select-sm .ant-select-selection__rendered {\n  line-height: 22px;\n  margin: 0 7px;\n}\n.ant-select-sm .ant-select-selection--multiple {\n  min-height: 24px;\n}\n.ant-select-sm .ant-select-selection--multiple .ant-select-selection__rendered li {\n  height: 16px;\n  line-height: 14px;\n}\n.ant-select-sm .ant-select-selection--multiple .ant-select-selection__clear {\n  top: 12px;\n}\n.ant-select-sm .ant-select-selection__clear,\n.ant-select-sm .ant-select-arrow {\n  right: 8px;\n}\n.ant-select-disabled .ant-select-selection__choice__remove {\n  color: rgba(0, 0, 0, 0.25);\n  cursor: default;\n}\n.ant-select-disabled .ant-select-selection__choice__remove:hover {\n  color: rgba(0, 0, 0, 0.25);\n}\n.ant-select-search__field__wrap {\n  display: inline-block;\n  position: relative;\n}\n.ant-select-selection__placeholder,\n.ant-select-search__field__placeholder {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 9px;\n  color: #bfbfbf;\n  line-height: 20px;\n  height: 20px;\n  max-width: 100%;\n  margin-top: -10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-align: left;\n}\n.ant-select-search__field__placeholder {\n  left: 12px;\n}\n.ant-select-search__field__mirror {\n  position: absolute;\n  top: 0;\n  left: -9999px;\n  white-space: pre;\n  pointer-events: none;\n}\n.ant-select-search--inline {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n.ant-select-search--inline .ant-select-search__field__wrap {\n  width: 100%;\n  height: 100%;\n}\n.ant-select-search--inline .ant-select-search__field {\n  border-width: 0;\n  font-size: 100%;\n  height: 100%;\n  width: 100%;\n  background: transparent;\n  outline: 0;\n  border-radius: 4px;\n  line-height: 1;\n}\n.ant-select-search--inline > i {\n  float: right;\n}\n.ant-select-selection--multiple {\n  min-height: 32px;\n  cursor: text;\n  padding-bottom: 3px;\n  zoom: 1;\n}\n.ant-select-selection--multiple:before,\n.ant-select-selection--multiple:after {\n  content: \" \";\n  display: table;\n}\n.ant-select-selection--multiple:after {\n  clear: both;\n  visibility: hidden;\n  font-size: 0;\n  height: 0;\n}\n.ant-select-selection--multiple .ant-select-search--inline {\n  float: left;\n  position: static;\n  width: auto;\n  padding: 0;\n  max-width: 100%;\n}\n.ant-select-selection--multiple .ant-select-search--inline .ant-select-search__field {\n  max-width: 100%;\n  width: 0.75em;\n}\n.ant-select-selection--multiple .ant-select-selection__rendered {\n  margin-left: 5px;\n  margin-bottom: -3px;\n  height: auto;\n}\n.ant-select-selection--multiple .ant-select-selection__placeholder {\n  margin-left: 6px;\n}\n.ant-select-selection--multiple > ul > li,\n.ant-select-selection--multiple .ant-select-selection__rendered > ul > li {\n  margin-top: 3px;\n  height: 24px;\n  line-height: 22px;\n}\n.ant-select-selection--multiple .ant-select-selection__choice {\n  color: rgba(0, 0, 0, 0.65);\n  background-color: #fafafa;\n  border: 1px solid #e8e8e8;\n  border-radius: 2px;\n  cursor: default;\n  float: left;\n  margin-right: 4px;\n  max-width: 99%;\n  position: relative;\n  overflow: hidden;\n  -webkit-transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  padding: 0 20px 0 10px;\n}\n.ant-select-selection--multiple .ant-select-selection__choice__disabled {\n  padding: 0 10px;\n}\n.ant-select-selection--multiple .ant-select-selection__choice__content {\n  display: inline-block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 100%;\n  -webkit-transition: margin 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: margin 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n}\n.ant-select-selection--multiple .ant-select-selection__choice__remove {\n  font-style: normal;\n  vertical-align: baseline;\n  text-align: center;\n  text-transform: none;\n  line-height: 1;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  color: rgba(0, 0, 0, 0.45);\n  line-height: inherit;\n  cursor: pointer;\n  font-weight: bold;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n  display: inline-block;\n  font-size: 12px;\n  font-size: 10px \\9;\n  -webkit-transform: scale(0.83333333) rotate(0deg);\n      -ms-transform: scale(0.83333333) rotate(0deg);\n          transform: scale(0.83333333) rotate(0deg);\n  position: absolute;\n  right: 4px;\n}\n.ant-select-selection--multiple .ant-select-selection__choice__remove:before {\n  display: block;\n  font-family: \"anticon\" !important;\n}\n:root .ant-select-selection--multiple .ant-select-selection__choice__remove {\n  font-size: 12px;\n}\n.ant-select-selection--multiple .ant-select-selection__choice__remove:hover {\n  color: #404040;\n}\n.ant-select-selection--multiple .ant-select-selection__choice__remove:before {\n  content: \"\\E633\";\n}\n.ant-select-selection--multiple .ant-select-selection__clear {\n  top: 16px;\n}\n.ant-select-allow-clear .ant-select-selection--multiple .ant-select-selection__rendered {\n  margin-right: 20px;\n}\n.ant-select-open .ant-select-arrow:before {\n  -webkit-transform: rotate(180deg);\n      -ms-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n.ant-select-open .ant-select-selection {\n  border-color: #40a9ff;\n  outline: 0;\n  -webkit-box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);\n          box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);\n}\n.ant-select-combobox .ant-select-arrow {\n  display: none;\n}\n.ant-select-combobox .ant-select-search--inline {\n  height: 100%;\n  width: 100%;\n  float: none;\n}\n.ant-select-combobox .ant-select-search__field__wrap {\n  width: 100%;\n  height: 100%;\n}\n.ant-select-combobox .ant-select-search__field {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.ant-select-combobox.ant-select-allow-clear .ant-select-selection:hover .ant-select-selection__rendered {\n  margin-right: 20px;\n}\n.ant-select-dropdown {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  background-color: #fff;\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  z-index: 1050;\n  left: -9999px;\n  top: -9999px;\n  position: absolute;\n  outline: none;\n  font-size: 14px;\n}\n.ant-select-dropdown.slide-up-enter.slide-up-enter-active.ant-select-dropdown-placement-bottomLeft,\n.ant-select-dropdown.slide-up-appear.slide-up-appear-active.ant-select-dropdown-placement-bottomLeft {\n  -webkit-animation-name: antSlideUpIn;\n          animation-name: antSlideUpIn;\n}\n.ant-select-dropdown.slide-up-enter.slide-up-enter-active.ant-select-dropdown-placement-topLeft,\n.ant-select-dropdown.slide-up-appear.slide-up-appear-active.ant-select-dropdown-placement-topLeft {\n  -webkit-animation-name: antSlideDownIn;\n          animation-name: antSlideDownIn;\n}\n.ant-select-dropdown.slide-up-leave.slide-up-leave-active.ant-select-dropdown-placement-bottomLeft {\n  -webkit-animation-name: antSlideUpOut;\n          animation-name: antSlideUpOut;\n}\n.ant-select-dropdown.slide-up-leave.slide-up-leave-active.ant-select-dropdown-placement-topLeft {\n  -webkit-animation-name: antSlideDownOut;\n          animation-name: antSlideDownOut;\n}\n.ant-select-dropdown-hidden {\n  display: none;\n}\n.ant-select-dropdown-menu {\n  outline: none;\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style: none;\n  max-height: 250px;\n  overflow: auto;\n}\n.ant-select-dropdown-menu-item-group-list {\n  margin: 0;\n  padding: 0;\n}\n.ant-select-dropdown-menu-item-group-list > .ant-select-dropdown-menu-item {\n  padding-left: 20px;\n}\n.ant-select-dropdown-menu-item-group-title {\n  color: rgba(0, 0, 0, 0.45);\n  padding: 0 12px;\n  height: 32px;\n  line-height: 32px;\n  font-size: 12px;\n}\n.ant-select-dropdown-menu-item {\n  position: relative;\n  display: block;\n  padding: 5px 12px;\n  line-height: 22px;\n  font-weight: normal;\n  color: rgba(0, 0, 0, 0.65);\n  white-space: nowrap;\n  cursor: pointer;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-transition: background 0.3s ease;\n  transition: background 0.3s ease;\n}\n.ant-select-dropdown-menu-item:hover {\n  background-color: #e6f7ff;\n}\n.ant-select-dropdown-menu-item:first-child {\n  border-radius: 4px 4px 0 0;\n}\n.ant-select-dropdown-menu-item:last-child {\n  border-radius: 0 0 4px 4px;\n}\n.ant-select-dropdown-menu-item-disabled {\n  color: rgba(0, 0, 0, 0.25);\n  cursor: not-allowed;\n}\n.ant-select-dropdown-menu-item-disabled:hover {\n  color: rgba(0, 0, 0, 0.25);\n  background-color: #fff;\n  cursor: not-allowed;\n}\n.ant-select-dropdown-menu-item-selected,\n.ant-select-dropdown-menu-item-selected:hover {\n  background-color: #fafafa;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.65);\n}\n.ant-select-dropdown-menu-item-active {\n  background-color: #e6f7ff;\n}\n.ant-select-dropdown-menu-item-divider {\n  height: 1px;\n  margin: 1px 0;\n  overflow: hidden;\n  background-color: #e8e8e8;\n  line-height: 0;\n}\n.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item:after {\n  font-family: 'anticon';\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  content: \"\\E632\";\n  color: transparent;\n  display: inline-block;\n  font-size: 12px;\n  font-size: 10px \\9;\n  -webkit-transform: scale(0.83333333) rotate(0deg);\n      -ms-transform: scale(0.83333333) rotate(0deg);\n          transform: scale(0.83333333) rotate(0deg);\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n  right: 12px;\n  font-weight: bold;\n  text-shadow: 0 0.1px 0, 0.1px 0 0, 0 -0.1px 0, -0.1px 0;\n}\n:root .ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item:after {\n  font-size: 12px;\n}\n.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item:hover:after {\n  color: #ddd;\n}\n.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-disabled:after {\n  display: none;\n}\n.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected:after,\n.ant-select-dropdown.ant-select-dropdown--multiple .ant-select-dropdown-menu-item-selected:hover:after {\n  color: #1890ff;\n  display: inline-block;\n}\n.ant-select-dropdown-container-open .ant-select-dropdown,\n.ant-select-dropdown-open .ant-select-dropdown {\n  display: block;\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/rc-calendar/es/locale/en_US.js":
/*!******************************************************!*\
  !*** ../node_modules/rc-calendar/es/locale/en_US.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'Ok',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  timeSelect: 'Select time',
  dateSelect: 'Select date',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century'
});

/***/ }),

/***/ "../node_modules/rc-dialog/es/Dialog.js":
/*!**********************************************!*\
  !*** ../node_modules/rc-dialog/es/Dialog.js ***!
  \**********************************************/
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
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-util/es/KeyCode */ "../node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var rc_animate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-animate */ "../node_modules/rc-animate/es/Animate.js");
/* harmony import */ var _LazyRenderBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LazyRenderBox */ "../node_modules/rc-dialog/es/LazyRenderBox.js");
/* harmony import */ var rc_util_es_getScrollBarSize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-util/es/getScrollBarSize */ "../node_modules/rc-util/es/getScrollBarSize.js");










var uuid = 0;
var openCount = 0;
/* eslint react/no-is-mounted:0 */
function getScroll(w, top) {
    var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
    var method = 'scroll' + (top ? 'Top' : 'Left');
    if (typeof ret !== 'number') {
        var d = w.document;
        ret = d.documentElement[method];
        if (typeof ret !== 'number') {
            ret = d.body[method];
        }
    }
    return ret;
}
function setTransformOrigin(node, value) {
    var style = node.style;
    ['Webkit', 'Moz', 'Ms', 'ms'].forEach(function (prefix) {
        style[prefix + 'TransformOrigin'] = value;
    });
    style['transformOrigin'] = value;
}
function offset(el) {
    var rect = el.getBoundingClientRect();
    var pos = {
        left: rect.left,
        top: rect.top
    };
    var doc = el.ownerDocument;
    var w = doc.defaultView || doc.parentWindow;
    pos.left += getScroll(w);
    pos.top += getScroll(w, true);
    return pos;
}

var Dialog = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Dialog, _React$Component);

    function Dialog() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Dialog);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _React$Component.apply(this, arguments));

        _this.onAnimateLeave = function () {
            var afterClose = _this.props.afterClose;
            // need demo?
            // https://github.com/react-component/dialog/pull/28

            if (_this.wrap) {
                _this.wrap.style.display = 'none';
            }
            _this.inTransition = false;
            _this.removeScrollingEffect();
            if (afterClose) {
                afterClose();
            }
        };
        _this.onMaskClick = function (e) {
            // android trigger click on open (fastclick??)
            if (Date.now() - _this.openTime < 300) {
                return;
            }
            if (e.target === e.currentTarget) {
                _this.close(e);
            }
        };
        _this.onKeyDown = function (e) {
            var props = _this.props;
            if (props.keyboard && e.keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__["default"].ESC) {
                _this.close(e);
            }
            // keep focus inside dialog
            if (props.visible) {
                if (e.keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__["default"].TAB) {
                    var activeElement = document.activeElement;
                    var dialogRoot = _this.wrap;
                    if (e.shiftKey) {
                        if (activeElement === dialogRoot) {
                            _this.sentinel.focus();
                        }
                    } else if (activeElement === _this.sentinel) {
                        dialogRoot.focus();
                    }
                }
            }
        };
        _this.getDialogElement = function () {
            var props = _this.props;
            var closable = props.closable;
            var prefixCls = props.prefixCls;
            var dest = {};
            if (props.width !== undefined) {
                dest.width = props.width;
            }
            if (props.height !== undefined) {
                dest.height = props.height;
            }
            var footer = void 0;
            if (props.footer) {
                footer = react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: prefixCls + '-footer', ref: _this.saveRef('footer') }, props.footer);
            }
            var header = void 0;
            if (props.title) {
                header = react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: prefixCls + '-header', ref: _this.saveRef('header') }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: prefixCls + '-title', id: _this.titleId }, props.title));
            }
            var closer = void 0;
            if (closable) {
                closer = react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("button", { onClick: _this.close, "aria-label": "Close", className: prefixCls + '-close' }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", { className: prefixCls + '-close-x' }));
            }
            var style = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props.style, dest);
            var transitionName = _this.getTransitionName();
            var dialogElement = react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_LazyRenderBox__WEBPACK_IMPORTED_MODULE_8__["default"], { key: "dialog-element", role: "document", ref: _this.saveRef('dialog'), style: style, className: prefixCls + ' ' + (props.className || ''), visible: props.visible }, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: prefixCls + '-content' }, closer, header, react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ className: prefixCls + '-body', style: props.bodyStyle, ref: _this.saveRef('body') }, props.bodyProps), props.children), footer), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { tabIndex: 0, ref: _this.saveRef('sentinel'), style: { width: 0, height: 0, overflow: 'hidden' } }, "sentinel"));
            return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](rc_animate__WEBPACK_IMPORTED_MODULE_7__["default"], { key: "dialog", showProp: "visible", onLeave: _this.onAnimateLeave, transitionName: transitionName, component: "", transitionAppear: true }, props.visible || !props.destroyOnClose ? dialogElement : null);
        };
        _this.getZIndexStyle = function () {
            var style = {};
            var props = _this.props;
            if (props.zIndex !== undefined) {
                style.zIndex = props.zIndex;
            }
            return style;
        };
        _this.getWrapStyle = function () {
            return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.getZIndexStyle(), _this.props.wrapStyle);
        };
        _this.getMaskStyle = function () {
            return babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _this.getZIndexStyle(), _this.props.maskStyle);
        };
        _this.getMaskElement = function () {
            var props = _this.props;
            var maskElement = void 0;
            if (props.mask) {
                var maskTransition = _this.getMaskTransitionName();
                maskElement = react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_LazyRenderBox__WEBPACK_IMPORTED_MODULE_8__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ style: _this.getMaskStyle(), key: "mask", className: props.prefixCls + '-mask', hiddenClassName: props.prefixCls + '-mask-hidden', visible: props.visible }, props.maskProps));
                if (maskTransition) {
                    maskElement = react__WEBPACK_IMPORTED_MODULE_4__["createElement"](rc_animate__WEBPACK_IMPORTED_MODULE_7__["default"], { key: "mask", showProp: "visible", transitionAppear: true, component: "", transitionName: maskTransition }, maskElement);
                }
            }
            return maskElement;
        };
        _this.getMaskTransitionName = function () {
            var props = _this.props;
            var transitionName = props.maskTransitionName;
            var animation = props.maskAnimation;
            if (!transitionName && animation) {
                transitionName = props.prefixCls + '-' + animation;
            }
            return transitionName;
        };
        _this.getTransitionName = function () {
            var props = _this.props;
            var transitionName = props.transitionName;
            var animation = props.animation;
            if (!transitionName && animation) {
                transitionName = props.prefixCls + '-' + animation;
            }
            return transitionName;
        };
        _this.setScrollbar = function () {
            if (_this.bodyIsOverflowing && _this.scrollbarWidth !== undefined) {
                document.body.style.paddingRight = _this.scrollbarWidth + 'px';
            }
        };
        _this.addScrollingEffect = function () {
            openCount++;
            if (openCount !== 1) {
                return;
            }
            _this.checkScrollbar();
            _this.setScrollbar();
            document.body.style.overflow = 'hidden';
            // this.adjustDialog();
        };
        _this.removeScrollingEffect = function () {
            openCount--;
            if (openCount !== 0) {
                return;
            }
            document.body.style.overflow = '';
            _this.resetScrollbar();
            // this.resetAdjustments();
        };
        _this.close = function (e) {
            var onClose = _this.props.onClose;

            if (onClose) {
                onClose(e);
            }
        };
        _this.checkScrollbar = function () {
            var fullWindowWidth = window.innerWidth;
            if (!fullWindowWidth) {
                // workaround for missing window.innerWidth in IE8
                var documentElementRect = document.documentElement.getBoundingClientRect();
                fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
            }
            _this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
            if (_this.bodyIsOverflowing) {
                _this.scrollbarWidth = Object(rc_util_es_getScrollBarSize__WEBPACK_IMPORTED_MODULE_9__["default"])();
            }
        };
        _this.resetScrollbar = function () {
            document.body.style.paddingRight = '';
        };
        _this.adjustDialog = function () {
            if (_this.wrap && _this.scrollbarWidth !== undefined) {
                var modalIsOverflowing = _this.wrap.scrollHeight > document.documentElement.clientHeight;
                _this.wrap.style.paddingLeft = (!_this.bodyIsOverflowing && modalIsOverflowing ? _this.scrollbarWidth : '') + 'px';
                _this.wrap.style.paddingRight = (_this.bodyIsOverflowing && !modalIsOverflowing ? _this.scrollbarWidth : '') + 'px';
            }
        };
        _this.resetAdjustments = function () {
            if (_this.wrap) {
                _this.wrap.style.paddingLeft = _this.wrap.style.paddingLeft = '';
            }
        };
        _this.saveRef = function (name) {
            return function (node) {
                _this[name] = node;
            };
        };
        return _this;
    }

    Dialog.prototype.componentWillMount = function componentWillMount() {
        this.inTransition = false;
        this.titleId = 'rcDialogTitle' + uuid++;
    };

    Dialog.prototype.componentDidMount = function componentDidMount() {
        this.componentDidUpdate({});
    };

    Dialog.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        var props = this.props;
        var mousePosition = this.props.mousePosition;
        if (props.visible) {
            // first show
            if (!prevProps.visible) {
                this.openTime = Date.now();
                this.lastOutSideFocusNode = document.activeElement;
                this.addScrollingEffect();
                this.wrap.focus();
                var dialogNode = react_dom__WEBPACK_IMPORTED_MODULE_5__["findDOMNode"](this.dialog);
                if (mousePosition) {
                    var elOffset = offset(dialogNode);
                    setTransformOrigin(dialogNode, mousePosition.x - elOffset.left + 'px ' + (mousePosition.y - elOffset.top) + 'px');
                } else {
                    setTransformOrigin(dialogNode, '');
                }
            }
        } else if (prevProps.visible) {
            this.inTransition = true;
            if (props.mask && this.lastOutSideFocusNode) {
                try {
                    this.lastOutSideFocusNode.focus();
                } catch (e) {
                    this.lastOutSideFocusNode = null;
                }
                this.lastOutSideFocusNode = null;
            }
        }
    };

    Dialog.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.props.visible || this.inTransition) {
            this.removeScrollingEffect();
        }
    };

    Dialog.prototype.render = function render() {
        var props = this.props;
        var prefixCls = props.prefixCls,
            maskClosable = props.maskClosable;

        var style = this.getWrapStyle();
        // clear hide display
        // and only set display after async anim, not here for hide
        if (props.visible) {
            style.display = null;
        }
        return react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", null, this.getMaskElement(), react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ tabIndex: -1, onKeyDown: this.onKeyDown, className: prefixCls + '-wrap ' + (props.wrapClassName || ''), ref: this.saveRef('wrap'), onClick: maskClosable ? this.onMaskClick : undefined, role: "dialog", "aria-labelledby": props.title ? this.titleId : null, style: style }, props.wrapProps), this.getDialogElement()));
    };

    return Dialog;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Dialog);

Dialog.defaultProps = {
    className: '',
    mask: true,
    visible: false,
    keyboard: true,
    closable: true,
    maskClosable: true,
    destroyOnClose: false,
    prefixCls: 'rc-dialog'
};

/***/ }),

/***/ "../node_modules/rc-dialog/es/DialogWrap.js":
/*!**************************************************!*\
  !*** ../node_modules/rc-dialog/es/DialogWrap.js ***!
  \**************************************************/
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
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Dialog */ "../node_modules/rc-dialog/es/Dialog.js");
/* harmony import */ var rc_util_es_ContainerRender__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-util/es/ContainerRender */ "../node_modules/rc-util/es/ContainerRender.js");
/* harmony import */ var rc_util_es_Portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-util/es/Portal */ "../node_modules/rc-util/es/Portal.js");









var IS_REACT_16 = 'createPortal' in react_dom__WEBPACK_IMPORTED_MODULE_5__;

var DialogWrap = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(DialogWrap, _React$Component);

    function DialogWrap() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, DialogWrap);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _React$Component.apply(this, arguments));

        _this.saveDialog = function (node) {
            _this._component = node;
        };
        _this.getComponent = function () {
            var extra = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](_Dialog__WEBPACK_IMPORTED_MODULE_6__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ ref: _this.saveDialog }, _this.props, extra, { key: "dialog" }));
        };
        _this.getContainer = function () {
            if (_this.props.getContainer) {
                return _this.props.getContainer();
            }
            var container = document.createElement('div');
            document.body.appendChild(container);
            return container;
        };
        return _this;
    }

    DialogWrap.prototype.shouldComponentUpdate = function shouldComponentUpdate(_ref) {
        var visible = _ref.visible;

        return !!(this.props.visible || visible);
    };

    DialogWrap.prototype.componentWillUnmount = function componentWillUnmount() {
        if (IS_REACT_16) {
            return;
        }
        if (this.props.visible) {
            this.renderComponent({
                afterClose: this.removeContainer,
                onClose: function onClose() {},

                visible: false
            });
        } else {
            this.removeContainer();
        }
    };

    DialogWrap.prototype.render = function render() {
        var _this2 = this;

        var visible = this.props.visible;

        var portal = null;
        if (!IS_REACT_16) {
            return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](rc_util_es_ContainerRender__WEBPACK_IMPORTED_MODULE_7__["default"], { parent: this, visible: visible, autoDestroy: false, getComponent: this.getComponent, getContainer: this.getContainer }, function (_ref2) {
                var renderComponent = _ref2.renderComponent,
                    removeContainer = _ref2.removeContainer;

                _this2.renderComponent = renderComponent;
                _this2.removeContainer = removeContainer;
                return null;
            });
        }
        if (visible || this._component) {
            portal = react__WEBPACK_IMPORTED_MODULE_4__["createElement"](rc_util_es_Portal__WEBPACK_IMPORTED_MODULE_8__["default"], { getContainer: this.getContainer }, this.getComponent());
        }
        return portal;
    };

    return DialogWrap;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

DialogWrap.defaultProps = {
    visible: false
};
/* harmony default export */ __webpack_exports__["default"] = (DialogWrap);

/***/ }),

/***/ "../node_modules/rc-dialog/es/LazyRenderBox.js":
/*!*****************************************************!*\
  !*** ../node_modules/rc-dialog/es/LazyRenderBox.js ***!
  \*****************************************************/
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






var LazyRenderBox = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(LazyRenderBox, _React$Component);

    function LazyRenderBox() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, LazyRenderBox);

        return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _React$Component.apply(this, arguments));
    }

    LazyRenderBox.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return !!nextProps.hiddenClassName || !!nextProps.visible;
    };

    LazyRenderBox.prototype.render = function render() {
        var className = this.props.className;
        if (!!this.props.hiddenClassName && !this.props.visible) {
            className += " " + this.props.hiddenClassName;
        }
        var props = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props);
        delete props.hiddenClassName;
        delete props.visible;
        props.className = className;
        return react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props));
    };

    return LazyRenderBox;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LazyRenderBox);

/***/ }),

/***/ "../node_modules/rc-pagination/es/locale/en_US.js":
/*!********************************************************!*\
  !*** ../node_modules/rc-pagination/es/locale/en_US.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // Options.jsx
  items_per_page: '/ page',
  jump_to: 'Goto',
  jump_to_confirm: 'confirm',
  page: '',

  // Pagination.jsx
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages'
});

/***/ }),

/***/ "../node_modules/rc-select/es/DropdownMenu.js":
/*!****************************************************!*\
  !*** ../node_modules/rc-select/es/DropdownMenu.js ***!
  \****************************************************/
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
/* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-util/es/Children/toArray */ "../node_modules/rc-util/es/Children/toArray.js");
/* harmony import */ var rc_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rc-menu */ "../node_modules/rc-menu/es/index.js");
/* harmony import */ var dom_scroll_into_view__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dom-scroll-into-view */ "../node_modules/dom-scroll-into-view/lib/index.js");
/* harmony import */ var dom_scroll_into_view__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dom_scroll_into_view__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./util */ "../node_modules/rc-select/es/util.js");












var DropdownMenu = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(DropdownMenu, _React$Component);

  function DropdownMenu() {
    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, DropdownMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.scrollActiveItemToView = function () {
      // scroll into view
      var itemComponent = Object(react_dom__WEBPACK_IMPORTED_MODULE_5__["findDOMNode"])(_this.firstActiveItem);
      var props = _this.props;

      if (itemComponent) {
        var scrollIntoViewOpts = {
          onlyScrollIfNeeded: true
        };
        if ((!props.value || props.value.length === 0) && props.firstActiveValue) {
          scrollIntoViewOpts.alignWithTop = true;
        }

        dom_scroll_into_view__WEBPACK_IMPORTED_MODULE_9___default()(itemComponent, Object(react_dom__WEBPACK_IMPORTED_MODULE_5__["findDOMNode"])(_this.menuRef), scrollIntoViewOpts);
      }
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(_this, _ret);
  }

  DropdownMenu.prototype.componentWillMount = function componentWillMount() {
    this.lastInputValue = this.props.inputValue;
  };

  DropdownMenu.prototype.componentDidMount = function componentDidMount() {
    this.scrollActiveItemToView();
    this.lastVisible = this.props.visible;
  };

  DropdownMenu.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    if (!nextProps.visible) {
      this.lastVisible = false;
    }
    // freeze when hide
    return nextProps.visible;
  };

  DropdownMenu.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var props = this.props;
    if (!prevProps.visible && props.visible) {
      this.scrollActiveItemToView();
    }
    this.lastVisible = props.visible;
    this.lastInputValue = props.inputValue;
  };

  DropdownMenu.prototype.renderMenu = function renderMenu() {
    var _this2 = this;

    var props = this.props;
    var menuItems = props.menuItems,
        defaultActiveFirstOption = props.defaultActiveFirstOption,
        value = props.value,
        prefixCls = props.prefixCls,
        multiple = props.multiple,
        onMenuSelect = props.onMenuSelect,
        inputValue = props.inputValue,
        firstActiveValue = props.firstActiveValue,
        backfillValue = props.backfillValue;

    if (menuItems && menuItems.length) {
      var menuProps = {};
      if (multiple) {
        menuProps.onDeselect = props.onMenuDeselect;
        menuProps.onSelect = onMenuSelect;
      } else {
        menuProps.onClick = onMenuSelect;
      }

      var selectedKeys = Object(_util__WEBPACK_IMPORTED_MODULE_10__["getSelectKeys"])(menuItems, value);
      var activeKeyProps = {};

      var clonedMenuItems = menuItems;
      if (selectedKeys.length || firstActiveValue) {
        if (props.visible && !this.lastVisible) {
          activeKeyProps.activeKey = selectedKeys[0] || firstActiveValue;
        }
        var foundFirst = false;
        // set firstActiveItem via cloning menus
        // for scroll into view
        var clone = function clone(item) {
          if (!foundFirst && selectedKeys.indexOf(item.key) !== -1 || !foundFirst && !selectedKeys.length && firstActiveValue.indexOf(item.key) !== -1) {
            foundFirst = true;
            return Object(react__WEBPACK_IMPORTED_MODULE_4__["cloneElement"])(item, {
              ref: function ref(_ref) {
                _this2.firstActiveItem = _ref;
              }
            });
          }
          return item;
        };

        clonedMenuItems = menuItems.map(function (item) {
          if (item.type.isMenuItemGroup) {
            var children = Object(rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_7__["default"])(item.props.children).map(clone);
            return Object(react__WEBPACK_IMPORTED_MODULE_4__["cloneElement"])(item, {}, children);
          }
          return clone(item);
        });
      }

      // clear activeKey when inputValue change
      var lastValue = value && value[value.length - 1];
      if (inputValue !== this.lastInputValue && (!lastValue || lastValue !== backfillValue)) {
        activeKeyProps.activeKey = '';
      }

      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
        rc_menu__WEBPACK_IMPORTED_MODULE_8__["default"],
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          ref: Object(_util__WEBPACK_IMPORTED_MODULE_10__["saveRef"])(this, 'menuRef'),
          style: this.props.dropdownMenuStyle,
          defaultActiveFirst: defaultActiveFirstOption
        }, activeKeyProps, {
          multiple: multiple
        }, menuProps, {
          selectedKeys: selectedKeys,
          prefixCls: prefixCls + '-menu'
        }),
        clonedMenuItems
      );
    }
    return null;
  };

  DropdownMenu.prototype.render = function render() {
    var renderMenu = this.renderMenu();
    return renderMenu ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
      'div',
      {
        style: { overflow: 'auto' },
        onFocus: this.props.onPopupFocus,
        onMouseDown: _util__WEBPACK_IMPORTED_MODULE_10__["preventDefaultEvent"],
        onScroll: this.props.onPopupScroll
      },
      renderMenu
    ) : null;
  };

  return DropdownMenu;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

DropdownMenu.propTypes = {
  defaultActiveFirstOption: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  value: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any,
  dropdownMenuStyle: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  multiple: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  onPopupFocus: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  onPopupScroll: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  onMenuDeSelect: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  onMenuSelect: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  menuItems: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any,
  inputValue: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  visible: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (DropdownMenu);


DropdownMenu.displayName = 'DropdownMenu';

/***/ }),

/***/ "../node_modules/rc-select/es/OptGroup.js":
/*!************************************************!*\
  !*** ../node_modules/rc-select/es/OptGroup.js ***!
  \************************************************/
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





var OptGroup = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(OptGroup, _React$Component);

  function OptGroup() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, OptGroup);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _React$Component.apply(this, arguments));
  }

  return OptGroup;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

OptGroup.isSelectOptGroup = true;
/* harmony default export */ __webpack_exports__["default"] = (OptGroup);

/***/ }),

/***/ "../node_modules/rc-select/es/Option.js":
/*!**********************************************!*\
  !*** ../node_modules/rc-select/es/Option.js ***!
  \**********************************************/
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






var Option = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Option, _React$Component);

  function Option() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Option);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _React$Component.apply(this, arguments));
  }

  return Option;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

Option.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number])
};
Option.isSelectOption = true;
/* harmony default export */ __webpack_exports__["default"] = (Option);

/***/ }),

/***/ "../node_modules/rc-select/es/PropTypes.js":
/*!*************************************************!*\
  !*** ../node_modules/rc-select/es/PropTypes.js ***!
  \*************************************************/
/*! exports provided: SelectPropTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPropTypes", function() { return SelectPropTypes; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);


function valueType(props, propName, componentName) {
  var basicType = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]);

  var labelInValueShape = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    key: basicType.isRequired,
    label: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node
  });
  if (props.labelInValue) {
    var validate = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(labelInValueShape), labelInValueShape]);
    var error = validate.apply(undefined, arguments);
    if (error) {
      return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`, ' + ('when you set `labelInValue` to `true`, `' + propName + '` should in ') + 'shape of `{ key: string | number, label?: ReactNode }`.');
    }
  } else if ((props.mode === 'multiple' || props.mode === 'tags' || props.multiple || props.tags) && props[propName] === '') {
    return new Error('Invalid prop `' + propName + '` of type `string` supplied to `' + componentName + '`, ' + 'expected `array` when `multiple` or `tags` is `true`.');
  } else {
    var _validate = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(basicType), basicType]);
    return _validate.apply(undefined, arguments);
  }
}

var SelectPropTypes = {
  defaultActiveFirstOption: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  multiple: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  filterOption: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any,
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any,
  showSearch: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  allowClear: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  showArrow: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  tags: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  transitionName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  optionLabelProp: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  optionFilterProp: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  animation: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  choiceTransitionName: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onSearch: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onPopupScroll: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  onInputKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.any,
  onDeselect: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  labelInValue: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
  value: valueType,
  defaultValue: valueType,
  dropdownStyle: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  maxTagTextLength: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  maxTagCount: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  maxTagPlaceholder: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func]),
  tokenSeparators: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string),
  getInputElement: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,
  showAction: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string)
};

/***/ }),

/***/ "../node_modules/rc-select/es/Select.js":
/*!**********************************************!*\
  !*** ../node_modules/rc-select/es/Select.js ***!
  \**********************************************/
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
/* harmony import */ var rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-util/es/KeyCode */ "../node_modules/rc-util/es/KeyCode.js");
/* harmony import */ var rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-util/es/Children/toArray */ "../node_modules/rc-util/es/Children/toArray.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rc_animate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-animate */ "../node_modules/rc-animate/es/Animate.js");
/* harmony import */ var component_classes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! component-classes */ "../node_modules/component-classes/index.js");
/* harmony import */ var component_classes__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(component_classes__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rc_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rc-menu */ "../node_modules/rc-menu/es/index.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! warning */ "../node_modules/warning/browser.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Option */ "../node_modules/rc-select/es/Option.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./util */ "../node_modules/rc-select/es/util.js");
/* harmony import */ var _SelectTrigger__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SelectTrigger */ "../node_modules/rc-select/es/SelectTrigger.js");
/* harmony import */ var _PropTypes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./PropTypes */ "../node_modules/rc-select/es/PropTypes.js");




/* eslint func-names: 1 */















function noop() {}

function chaining() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    // eslint-disable-line
    // eslint-disable-line
    for (var i = 0; i < fns.length; i++) {
      if (fns[i] && typeof fns[i] === 'function') {
        fns[i].apply(this, args);
      }
    }
  };
}

var Select = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Select, _React$Component);

  function Select(props) {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Select);

    var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    var value = _this.getValueFromProps(props);
    var optionsInfo = _this.getOptionsInfoFromProps(props);
    var inputValue = '';
    if (props.combobox) {
      inputValue = value.length ? _this.getLabelBySingleValue(value[0], optionsInfo) : '';
    }
    var open = props.open;
    if (open === undefined) {
      open = props.defaultOpen;
    }
    _this.state = {
      value: value,
      inputValue: inputValue,
      open: open,
      optionsInfo: optionsInfo
    };
    _this.adjustOpenState();
    return _this;
  }

  Select.prototype.componentDidMount = function componentDidMount() {
    if (this.props.autoFocus) {
      this.focus();
    }
  };

  Select.prototype.componentWillUpdate = function componentWillUpdate(nextProps, nextState) {
    this.props = nextProps;
    this.state = nextState;
    this.adjustOpenState();
  };

  Select.prototype.componentDidUpdate = function componentDidUpdate() {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_14__["isMultipleOrTags"])(this.props)) {
      var inputNode = this.getInputDOMNode();
      var mirrorNode = this.getInputMirrorDOMNode();
      if (inputNode.value) {
        inputNode.style.width = '';
        inputNode.style.width = mirrorNode.clientWidth + 'px';
      } else {
        inputNode.style.width = '';
      }
    }
  };

  Select.prototype.componentWillUnmount = function componentWillUnmount() {
    this.clearFocusTime();
    this.clearBlurTime();
    this.clearAdjustTimer();
    if (this.dropdownContainer) {
      react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.unmountComponentAtNode(this.dropdownContainer);
      document.body.removeChild(this.dropdownContainer);
      this.dropdownContainer = null;
    }
  };

  // combobox ignore


  Select.prototype.focus = function focus() {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_14__["isSingleMode"])(this.props)) {
      this.selectionRef.focus();
    } else {
      this.getInputDOMNode().focus();
    }
  };

  Select.prototype.blur = function blur() {
    if (Object(_util__WEBPACK_IMPORTED_MODULE_14__["isSingleMode"])(this.props)) {
      this.selectionRef.blur();
    } else {
      this.getInputDOMNode().blur();
    }
  };

  Select.prototype.renderClear = function renderClear() {
    var _props = this.props,
        prefixCls = _props.prefixCls,
        allowClear = _props.allowClear;
    var _state = this.state,
        value = _state.value,
        inputValue = _state.inputValue;

    var clear = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement('span', babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      key: 'clear',
      onMouseDown: _util__WEBPACK_IMPORTED_MODULE_14__["preventDefaultEvent"],
      style: _util__WEBPACK_IMPORTED_MODULE_14__["UNSELECTABLE_STYLE"]
    }, _util__WEBPACK_IMPORTED_MODULE_14__["UNSELECTABLE_ATTRIBUTE"], {
      className: prefixCls + '-selection__clear',
      onClick: this.onClearSelection
    }));
    if (!allowClear) {
      return null;
    }
    if (Object(_util__WEBPACK_IMPORTED_MODULE_14__["isCombobox"])(this.props)) {
      if (inputValue) {
        return clear;
      }
      return null;
    }
    if (inputValue || value.length) {
      return clear;
    }
    return null;
  };

  Select.prototype.render = function render() {
    var _rootCls;

    var props = this.props;
    var multiple = Object(_util__WEBPACK_IMPORTED_MODULE_14__["isMultipleOrTags"])(props);
    var state = this.state;
    var className = props.className,
        disabled = props.disabled,
        prefixCls = props.prefixCls;

    var ctrlNode = this.renderTopControlNode();
    var extraSelectionProps = {};
    var open = this.state.open;

    var options = this._options;
    if (!Object(_util__WEBPACK_IMPORTED_MODULE_14__["isMultipleOrTagsOrCombobox"])(props)) {
      extraSelectionProps = {
        onKeyDown: this.onKeyDown,
        tabIndex: props.disabled ? -1 : 0
      };
    }
    var rootCls = (_rootCls = {}, _rootCls[className] = !!className, _rootCls[prefixCls] = 1, _rootCls[prefixCls + '-open'] = open, _rootCls[prefixCls + '-focused'] = open || !!this._focused, _rootCls[prefixCls + '-combobox'] = Object(_util__WEBPACK_IMPORTED_MODULE_14__["isCombobox"])(props), _rootCls[prefixCls + '-disabled'] = disabled, _rootCls[prefixCls + '-enabled'] = !disabled, _rootCls[prefixCls + '-allow-clear'] = !!props.allowClear, _rootCls);
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
      _SelectTrigger__WEBPACK_IMPORTED_MODULE_15__["default"],
      {
        onPopupFocus: this.onPopupFocus,
        onMouseEnter: this.props.onMouseEnter,
        onMouseLeave: this.props.onMouseLeave,
        dropdownAlign: props.dropdownAlign,
        dropdownClassName: props.dropdownClassName,
        dropdownMatchSelectWidth: props.dropdownMatchSelectWidth,
        defaultActiveFirstOption: props.defaultActiveFirstOption,
        dropdownMenuStyle: props.dropdownMenuStyle,
        transitionName: props.transitionName,
        animation: props.animation,
        prefixCls: props.prefixCls,
        dropdownStyle: props.dropdownStyle,
        combobox: props.combobox,
        showSearch: props.showSearch,
        options: options,
        multiple: multiple,
        disabled: disabled,
        visible: open,
        inputValue: state.inputValue,
        value: state.value,
        backfillValue: state.backfillValue,
        firstActiveValue: props.firstActiveValue,
        onDropdownVisibleChange: this.onDropdownVisibleChange,
        getPopupContainer: props.getPopupContainer,
        onMenuSelect: this.onMenuSelect,
        onMenuDeselect: this.onMenuDeselect,
        onPopupScroll: props.onPopupScroll,
        showAction: props.showAction,
        ref: Object(_util__WEBPACK_IMPORTED_MODULE_14__["saveRef"])(this, 'selectTriggerRef')
      },
      react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
        'div',
        {
          style: props.style,
          ref: Object(_util__WEBPACK_IMPORTED_MODULE_14__["saveRef"])(this, 'rootRef'),
          onBlur: this.onOuterBlur,
          onFocus: this.onOuterFocus,
          className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(rootCls)
        },
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          'div',
          babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
            ref: Object(_util__WEBPACK_IMPORTED_MODULE_14__["saveRef"])(this, 'selectionRef'),
            key: 'selection',
            className: prefixCls + '-selection\n            ' + prefixCls + '-selection--' + (multiple ? 'multiple' : 'single'),
            role: 'combobox',
            'aria-autocomplete': 'list',
            'aria-haspopup': 'true',
            'aria-expanded': open
          }, extraSelectionProps),
          ctrlNode,
          this.renderClear(),
          multiple || !props.showArrow ? null : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'span',
            babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
              key: 'arrow',
              className: prefixCls + '-arrow',
              style: _util__WEBPACK_IMPORTED_MODULE_14__["UNSELECTABLE_STYLE"]
            }, _util__WEBPACK_IMPORTED_MODULE_14__["UNSELECTABLE_ATTRIBUTE"], {
              onClick: this.onArrowClick
            }),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement('b', null)
          )
        )
      )
    );
  };

  return Select;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);

Select.propTypes = _PropTypes__WEBPACK_IMPORTED_MODULE_16__["SelectPropTypes"];
Select.defaultProps = {
  prefixCls: 'rc-select',
  defaultOpen: false,
  labelInValue: false,
  defaultActiveFirstOption: true,
  showSearch: true,
  allowClear: false,
  placeholder: '',
  onChange: noop,
  onFocus: noop,
  onBlur: noop,
  onSelect: noop,
  onSearch: noop,
  onDeselect: noop,
  onInputKeyDown: noop,
  showArrow: true,
  dropdownMatchSelectWidth: true,
  dropdownStyle: {},
  dropdownMenuStyle: {},
  optionFilterProp: 'value',
  optionLabelProp: 'value',
  notFoundContent: 'Not Found',
  backfill: false,
  showAction: ['click'],
  tokenSeparators: []
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.componentWillReceiveProps = function (nextProps) {
    var optionsInfo = _this2.getOptionsInfoFromProps(nextProps);
    _this2.setState({
      optionsInfo: optionsInfo
    });
    if ('value' in nextProps) {
      var value = _this2.getValueFromProps(nextProps);
      _this2.setState({
        value: value
      }, _this2.forcePopupAlign);
      if (nextProps.combobox) {
        _this2.setState({
          inputValue: value.length ? _this2.getLabelBySingleValue(value[0], optionsInfo) : ''
        });
      }
    }
  };

  this.onInputChange = function (event) {
    var tokenSeparators = _this2.props.tokenSeparators;

    var val = event.target.value;
    if (Object(_util__WEBPACK_IMPORTED_MODULE_14__["isMultipleOrTags"])(_this2.props) && tokenSeparators.length && Object(_util__WEBPACK_IMPORTED_MODULE_14__["includesSeparators"])(val, tokenSeparators)) {
      var nextValue = _this2.getValueByInput(val);
      if (nextValue !== undefined) {
        _this2.fireChange(nextValue);
      }
      _this2.setOpenState(false, true);
      _this2.setInputValue('', false);
      return;
    }
    _this2.setInputValue(val);
    _this2.setState({
      open: true
    });
    if (Object(_util__WEBPACK_IMPORTED_MODULE_14__["isCombobox"])(_this2.props)) {
      _this2.fireChange([val]);
    }
  };

  this.onDropdownVisibleChange = function (open) {
    if (open && !_this2._focused) {
      _this2.clearBlurTime();
      _this2.timeoutFocus();
      _this2._focused = true;
      _this2.updateFocusClassName();
    }
    _this2.setOpenState(open);
  };

  this.onKeyDown = function (event) {
    var props = _this2.props;
    if (props.disabled) {
      return;
    }
    var keyCode = event.keyCode;
    if (_this2.state.open && !_this2.getInputDOMNode()) {
      _this2.onInputKeyDown(event);
    } else if (keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__["default"].ENTER || keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__["default"].DOWN) {
      _this2.setOpenState(true);
      event.preventDefault();
    }
  };

  this.onInputKeyDown = function (event) {
    var props = _this2.props;
    if (props.disabled) {
      return;
    }
    var state = _this2.state;
    var keyCode = event.keyCode;
    if (Object(_util__WEBPACK_IMPORTED_MODULE_14__["isMultipleOrTags"])(props) && !event.target.value && keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__["default"].BACKSPACE) {
      event.preventDefault();
      var value = state.value;

      if (value.length) {
        _this2.removeSelected(value[value.length - 1]);
      }
      return;
    }
    if (keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__["default"].DOWN) {
      if (!state.open) {
        _this2.openIfHasChildren();
        event.preventDefault();
        event.stopPropagation();
        return;
      }
    } else if (keyCode === rc_util_es_KeyCode__WEBPACK_IMPORTED_MODULE_6__["default"].ESC) {
      if (state.open) {
        _this2.setOpenState(false);
        event.preventDefault();
        event.stopPropagation();
      }
      return;
    }

    if (state.open) {
      var menu = _this2.selectTriggerRef.getInnerMenu();
      if (menu && menu.onKeyDown(event, _this2.handleBackfill)) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
  };

  this.onMenuSelect = function (_ref) {
    var item = _ref.item;

    var value = _this2.state.value;
    var props = _this2.props;
    var selectedValue = Object(_util__WEBPACK_IMPORTED_MODULE_14__["getValuePropValue"])(item);
    var lastValue = value[value.length - 1];
    _this2.fireSelect(selectedValue);
    if (Object(_util__WEBPACK_IMPORTED_MODULE_14__["isMultipleOrTags"])(props)) {
      if (Object(_util__WEBPACK_IMPORTED_MODULE_14__["findIndexInValueBySingleValue"])(value, selectedValue) !== -1) {
        return;
      }
      value = value.concat([selectedValue]);
    } else {
      if (Object(_util__WEBPACK_IMPORTED_MODULE_14__["isCombobox"])(props)) {
        _this2.skipAdjustOpen = true;
        _this2.clearAdjustTimer();
        _this2.skipAdjustOpenTimer = setTimeout(function () {
          _this2.skipAdjustOpen = false;
        }, 0);
      }
      if (lastValue && lastValue === selectedValue && selectedValue !== _this2.state.backfillValue) {
        _this2.setOpenState(false, true);
        return;
      }
      value = [selectedValue];
      _this2.setOpenState(false, true);
    }
    _this2.fireChange(value);
    var inputValue = void 0;
    if (Object(_util__WEBPACK_IMPORTED_MODULE_14__["isCombobox"])(props)) {
      inputValue = Object(_util__WEBPACK_IMPORTED_MODULE_14__["getPropValue"])(item, props.optionLabelProp);
    } else {
      inputValue = '';
    }
    _this2.setInputValue(inputValue, false);
  };

  this.onMenuDeselect = function (_ref2) {
    var item = _ref2.item,
        domEvent = _ref2.domEvent;

    if (domEvent.type === 'click') {
      _this2.removeSelected(Object(_util__WEBPACK_IMPORTED_MODULE_14__["getValuePropValue"])(item));
    }
    _this2.setInputValue('', false);
  };

  this.onArrowClick = function (e) {
    e.stopPropagation();
    e.preventDefault();
    if (!_this2.props.disabled) {
      _this2.setOpenState(!_this2.state.open, !_this2.state.open);
    }
  };

  this.onPlaceholderClick = function () {
    if (_this2.getInputDOMNode()) {
      _this2.getInputDOMNode().focus();
    }
  };

  this.onOuterFocus = function (e) {
    if (_this2.props.disabled) {
      e.preventDefault();
      return;
    }
    _this2.clearBlurTime();
    if (!Object(_util__WEBPACK_IMPORTED_MODULE_14__["isMultipleOrTagsOrCombobox"])(_this2.props) && e.target === _this2.getInputDOMNode()) {
      return;
    }
    if (_this2._focused) {
      return;
    }
    _this2._focused = true;
    _this2.updateFocusClassName();
    _this2.timeoutFocus();
  };

  this.onPopupFocus = function () {
    // fix ie scrollbar, focus element again
    _this2.maybeFocus(true, true);
  };

  this.onOuterBlur = function (e) {
    if (_this2.props.disabled) {
      e.preventDefault();
      return;
    }
    _this2.blurTimer = setTimeout(function () {
      _this2._focused = false;
      _this2.updateFocusClassName();
      var props = _this2.props;
      var value = _this2.state.value;
      var inputValue = _this2.state.inputValue;

      if (Object(_util__WEBPACK_IMPORTED_MODULE_14__["isSingleMode"])(props) && props.showSearch && inputValue && props.defaultActiveFirstOption) {
        var options = _this2._options || [];
        if (options.length) {
          var firstOption = Object(_util__WEBPACK_IMPORTED_MODULE_14__["findFirstMenuItem"])(options);
          if (firstOption) {
            value = [Object(_util__WEBPACK_IMPORTED_MODULE_14__["getValuePropValue"])(firstOption)];
            _this2.fireChange(value);
          }
        }
      } else if (Object(_util__WEBPACK_IMPORTED_MODULE_14__["isMultipleOrTags"])(props) && inputValue) {
        // why not use setState?
        _this2.state.inputValue = _this2.getInputDOMNode().value = '';

        value = _this2.getValueByInput(inputValue);
        if (value !== undefined) {
          _this2.fireChange(value);
        }
      }
      props.onBlur(_this2.getVLForOnChange(value));
      _this2.setOpenState(false);
    }, 10);
  };

  this.onClearSelection = function (event) {
    var props = _this2.props;
    var state = _this2.state;
    if (props.disabled) {
      return;
    }
    var inputValue = state.inputValue,
        value = state.value;

    event.stopPropagation();
    if (inputValue || value.length) {
      if (value.length) {
        _this2.fireChange([]);
      }
      _this2.setOpenState(false, true);
      if (inputValue) {
        _this2.setInputValue('');
      }
    }
  };

  this.onChoiceAnimationLeave = function () {
    _this2.forcePopupAlign();
  };

  this.getValueFromProps = function (props) {
    var value = [];
    if ('value' in props) {
      value = Object(_util__WEBPACK_IMPORTED_MODULE_14__["toArray"])(props.value);
    } else {
      value = Object(_util__WEBPACK_IMPORTED_MODULE_14__["toArray"])(props.defaultValue);
    }
    if (props.labelInValue) {
      value = value.map(function (v) {
        return v.key;
      });
    }
    return value;
  };

  this.getOptionsInfoFromProps = function (props) {
    var options = _this2.getOptionsFromChildren(props.children);
    var oldOptionsInfo = _this2.state ? _this2.state.optionsInfo : {};
    var value = _this2.state ? _this2.state.value : [];
    var optionsInfo = {};
    options.forEach(function (option) {
      var singleValue = Object(_util__WEBPACK_IMPORTED_MODULE_14__["getValuePropValue"])(option);
      optionsInfo[Object(_util__WEBPACK_IMPORTED_MODULE_14__["getMapKey"])(singleValue)] = {
        option: option,
        value: singleValue,
        label: _this2.getLabelFromOption(option),
        title: option.props.title
      };
    });
    value.forEach(function (v) {
      var key = Object(_util__WEBPACK_IMPORTED_MODULE_14__["getMapKey"])(v);
      if (!optionsInfo[key]) {
        optionsInfo[key] = oldOptionsInfo[key];
      }
    });
    return optionsInfo;
  };

  this.getOptionInfoBySingleValue = function (value, optionsInfo) {
    var info = void 0;
    optionsInfo = optionsInfo || _this2.state.optionsInfo;
    if (optionsInfo[Object(_util__WEBPACK_IMPORTED_MODULE_14__["getMapKey"])(value)]) {
      info = optionsInfo[Object(_util__WEBPACK_IMPORTED_MODULE_14__["getMapKey"])(value)];
    }
    if (info) {
      return info;
    }
    var defaultLabel = value;
    if (_this2.props.labelInValue) {
      var label = Object(_util__WEBPACK_IMPORTED_MODULE_14__["getLabelFromPropsValue"])(_this2.props.value, value);
      if (label !== undefined) {
        defaultLabel = label;
      }
    }
    var defaultInfo = {
      option: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
        _Option__WEBPACK_IMPORTED_MODULE_13__["default"],
        { value: value, key: value },
        value
      ),
      value: value,
      label: defaultLabel
    };
    return defaultInfo;
  };

  this.getOptionBySingleValue = function (value) {
    var _getOptionInfoBySingl = _this2.getOptionInfoBySingleValue(value),
        option = _getOptionInfoBySingl.option;

    return option;
  };

  this.getOptionsBySingleValue = function (values) {
    return values.map(function (value) {
      return _this2.getOptionBySingleValue(value);
    });
  };

  this.getOptionsFromChildren = function (children) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    react__WEBPACK_IMPORTED_MODULE_4___default.a.Children.forEach(children, function (child) {
      if (!child) {
        return;
      }
      if (child.type.isSelectOptGroup) {
        _this2.getOptionsFromChildren(child.props.children, options);
      } else {
        options.push(child);
      }
    });
    return options;
  };

  this.getValueByLabel = function (label) {
    if (label === undefined) {
      return null;
    }
    var value = null;
    Object.keys(_this2.state.optionsInfo).forEach(function (key) {
      var info = _this2.state.optionsInfo[key];
      if (Object(_util__WEBPACK_IMPORTED_MODULE_14__["toArray"])(info.label).join('') === label) {
        value = info.value;
      }
    });
    return value;
  };

  this.getLabelFromOption = function (option) {
    return Object(_util__WEBPACK_IMPORTED_MODULE_14__["getPropValue"])(option, _this2.props.optionLabelProp);
  };

  this.getVLBySingleValue = function (value) {
    if (_this2.props.labelInValue) {
      return {
        key: value,
        label: _this2.getLabelBySingleValue(value)
      };
    }
    return value;
  };

  this.getVLForOnChange = function (vls_) {
    var vls = vls_;
    if (vls !== undefined) {
      if (!_this2.props.labelInValue) {
        vls = vls.map(function (v) {
          return v;
        });
      } else {
        vls = vls.map(function (vl) {
          return {
            key: vl,
            label: _this2.getLabelBySingleValue(vl)
          };
        });
      }
      return Object(_util__WEBPACK_IMPORTED_MODULE_14__["isMultipleOrTags"])(_this2.props) ? vls : vls[0];
    }
    return vls;
  };

  this.getLabelBySingleValue = function (value, optionsInfo) {
    var _getOptionInfoBySingl2 = _this2.getOptionInfoBySingleValue(value, optionsInfo),
        label = _getOptionInfoBySingl2.label;

    return label;
  };

  this.getDropdownContainer = function () {
    if (!_this2.dropdownContainer) {
      _this2.dropdownContainer = document.createElement('div');
      document.body.appendChild(_this2.dropdownContainer);
    }
    return _this2.dropdownContainer;
  };

  this.getPlaceholderElement = function () {
    var props = _this2.props,
        state = _this2.state;

    var hidden = false;
    if (state.inputValue) {
      hidden = true;
    }
    if (state.value.length) {
      hidden = true;
    }
    if (Object(_util__WEBPACK_IMPORTED_MODULE_14__["isCombobox"])(props) && state.value.length === 1 && !state.value[0]) {
      hidden = false;
    }
    var placeholder = props.placeholder;
    if (placeholder) {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
        'div',
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          onMouseDown: _util__WEBPACK_IMPORTED_MODULE_14__["preventDefaultEvent"],
          style: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
            display: hidden ? 'none' : 'block'
          }, _util__WEBPACK_IMPORTED_MODULE_14__["UNSELECTABLE_STYLE"])
        }, _util__WEBPACK_IMPORTED_MODULE_14__["UNSELECTABLE_ATTRIBUTE"], {
          onClick: _this2.onPlaceholderClick,
          className: props.prefixCls + '-selection__placeholder'
        }),
        placeholder
      );
    }
    return null;
  };

  this.getInputElement = function () {
    var _classnames;

    var props = _this2.props;
    var inputElement = props.getInputElement ? props.getInputElement() : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement('input', { id: props.id, autoComplete: 'off' });
    var inputCls = classnames__WEBPACK_IMPORTED_MODULE_8___default()(inputElement.props.className, (_classnames = {}, _classnames[props.prefixCls + '-search__field'] = true, _classnames));
    // https://github.com/ant-design/ant-design/issues/4992#issuecomment-281542159
    // Add space to the end of the inputValue as the width measurement tolerance
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
      'div',
      { className: props.prefixCls + '-search__field__wrap' },
      react__WEBPACK_IMPORTED_MODULE_4___default.a.cloneElement(inputElement, {
        ref: Object(_util__WEBPACK_IMPORTED_MODULE_14__["saveRef"])(_this2, 'inputRef'),
        onChange: _this2.onInputChange,
        onKeyDown: chaining(_this2.onInputKeyDown, inputElement.props.onKeyDown, _this2.props.onInputKeyDown),
        value: _this2.state.inputValue,
        disabled: props.disabled,
        className: inputCls
      }),
      react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
        'span',
        {
          ref: Object(_util__WEBPACK_IMPORTED_MODULE_14__["saveRef"])(_this2, 'inputMirrorRef'),
          className: props.prefixCls + '-search__field__mirror'
        },
        _this2.state.inputValue,
        '\xA0'
      )
    );
  };

  this.getInputDOMNode = function () {
    return _this2.topCtrlRef ? _this2.topCtrlRef.querySelector('input,textarea,div[contentEditable]') : _this2.inputRef;
  };

  this.getInputMirrorDOMNode = function () {
    return _this2.inputMirrorRef;
  };

  this.getPopupDOMNode = function () {
    return _this2.selectTriggerRef.getPopupDOMNode();
  };

  this.getPopupMenuComponent = function () {
    return _this2.selectTriggerRef.getInnerMenu();
  };

  this.setOpenState = function (open, needFocus) {
    var props = _this2.props,
        state = _this2.state;

    if (state.open === open) {
      _this2.maybeFocus(open, needFocus);
      return;
    }
    var nextState = {
      open: open,
      backfillValue: undefined
    };
    // clear search input value when open is false in singleMode.
    if (!open && Object(_util__WEBPACK_IMPORTED_MODULE_14__["isSingleMode"])(props) && props.showSearch) {
      _this2.setInputValue('');
    }
    if (!open) {
      _this2.maybeFocus(open, needFocus);
    }
    _this2.setState(nextState, function () {
      if (open) {
        _this2.maybeFocus(open, needFocus);
      }
    });
  };

  this.setInputValue = function (inputValue) {
    var fireSearch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (inputValue !== _this2.state.inputValue) {
      _this2.setState({
        inputValue: inputValue
      }, _this2.forcePopupAlign);
      if (fireSearch) {
        _this2.props.onSearch(inputValue);
      }
    }
  };

  this.getValueByInput = function (string) {
    var _props2 = _this2.props,
        multiple = _props2.multiple,
        tokenSeparators = _props2.tokenSeparators;

    var nextValue = _this2.state.value;
    var hasNewValue = false;
    Object(_util__WEBPACK_IMPORTED_MODULE_14__["splitBySeparators"])(string, tokenSeparators).forEach(function (label) {
      var selectedValue = [label];
      if (multiple) {
        var value = _this2.getValueByLabel(label);
        if (value && Object(_util__WEBPACK_IMPORTED_MODULE_14__["findIndexInValueBySingleValue"])(nextValue, value) === -1) {
          nextValue = nextValue.concat(value);
          hasNewValue = true;
          _this2.fireSelect(value);
        }
      } else {
        // tag
        if (Object(_util__WEBPACK_IMPORTED_MODULE_14__["findIndexInValueBySingleValue"])(nextValue, label) === -1) {
          nextValue = nextValue.concat(selectedValue);
          hasNewValue = true;
          _this2.fireSelect(label);
        }
      }
    });
    return hasNewValue ? nextValue : undefined;
  };

  this.handleBackfill = function (item) {
    if (!_this2.props.backfill || !(Object(_util__WEBPACK_IMPORTED_MODULE_14__["isSingleMode"])(_this2.props) || Object(_util__WEBPACK_IMPORTED_MODULE_14__["isCombobox"])(_this2.props))) {
      return;
    }

    var key = Object(_util__WEBPACK_IMPORTED_MODULE_14__["getValuePropValue"])(item);

    if (Object(_util__WEBPACK_IMPORTED_MODULE_14__["isCombobox"])(_this2.props)) {
      _this2.setInputValue(key, false);
    }

    _this2.setState({
      value: [key],
      backfillValue: key
    });
  };

  this.filterOption = function (input, child) {
    var defaultFilter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _util__WEBPACK_IMPORTED_MODULE_14__["defaultFilterFn"];
    var value = _this2.state.value;

    var lastValue = value[value.length - 1];
    if (!input || lastValue && lastValue === _this2.state.backfillValue) {
      return true;
    }
    var filterFn = _this2.props.filterOption;
    if ('filterOption' in _this2.props) {
      if (_this2.props.filterOption === true) {
        filterFn = defaultFilter;
      }
    } else {
      filterFn = defaultFilter;
    }

    if (!filterFn) {
      return true;
    } else if (typeof filterFn === 'function') {
      return filterFn.call(_this2, input, child);
    } else if (child.props.disabled) {
      return false;
    }
    return true;
  };

  this.timeoutFocus = function () {
    if (_this2.focusTimer) {
      _this2.clearFocusTime();
    }
    _this2.focusTimer = setTimeout(function () {
      _this2.props.onFocus();
    }, 10);
  };

  this.clearFocusTime = function () {
    if (_this2.focusTimer) {
      clearTimeout(_this2.focusTimer);
      _this2.focusTimer = null;
    }
  };

  this.clearBlurTime = function () {
    if (_this2.blurTimer) {
      clearTimeout(_this2.blurTimer);
      _this2.blurTimer = null;
    }
  };

  this.clearAdjustTimer = function () {
    if (_this2.skipAdjustOpenTimer) {
      clearTimeout(_this2.skipAdjustOpenTimer);
      _this2.skipAdjustOpenTimer = null;
    }
  };

  this.updateFocusClassName = function () {
    var rootRef = _this2.rootRef,
        props = _this2.props;
    // avoid setState and its side effect

    if (_this2._focused) {
      component_classes__WEBPACK_IMPORTED_MODULE_10___default()(rootRef).add(props.prefixCls + '-focused');
    } else {
      component_classes__WEBPACK_IMPORTED_MODULE_10___default()(rootRef).remove(props.prefixCls + '-focused');
    }
  };

  this.maybeFocus = function (open, needFocus) {
    if (needFocus || open) {
      var input = _this2.getInputDOMNode();
      var _document = document,
          activeElement = _document.activeElement;

      if (input && (open || Object(_util__WEBPACK_IMPORTED_MODULE_14__["isMultipleOrTagsOrCombobox"])(_this2.props))) {
        if (activeElement !== input) {
          input.focus();
          _this2._focused = true;
        }
      } else {
        if (activeElement !== _this2.selectionRef) {
          _this2.selectionRef.focus();
          _this2._focused = true;
        }
      }
    }
  };

  this.removeSelected = function (selectedKey) {
    var props = _this2.props;
    if (props.disabled || _this2.isChildDisabled(selectedKey)) {
      return;
    }
    var value = _this2.state.value.filter(function (singleValue) {
      return singleValue !== selectedKey;
    });
    var canMultiple = Object(_util__WEBPACK_IMPORTED_MODULE_14__["isMultipleOrTags"])(props);

    if (canMultiple) {
      var event = selectedKey;
      if (props.labelInValue) {
        event = {
          key: selectedKey,
          label: _this2.getLabelBySingleValue(selectedKey)
        };
      }
      props.onDeselect(event, _this2.getOptionBySingleValue(selectedKey));
    }
    _this2.fireChange(value);
  };

  this.openIfHasChildren = function () {
    var props = _this2.props;
    if (react__WEBPACK_IMPORTED_MODULE_4___default.a.Children.count(props.children) || Object(_util__WEBPACK_IMPORTED_MODULE_14__["isSingleMode"])(props)) {
      _this2.setOpenState(true);
    }
  };

  this.fireSelect = function (value) {
    _this2.props.onSelect(_this2.getVLBySingleValue(value), _this2.getOptionBySingleValue(value));
  };

  this.fireChange = function (value) {
    var props = _this2.props;
    if (!('value' in props)) {
      _this2.setState({
        value: value
      }, _this2.forcePopupAlign);
    }
    var vls = _this2.getVLForOnChange(value);
    var options = _this2.getOptionsBySingleValue(value);
    props.onChange(vls, Object(_util__WEBPACK_IMPORTED_MODULE_14__["isMultipleOrTags"])(_this2.props) ? options : options[0]);
  };

  this.isChildDisabled = function (key) {
    return Object(rc_util_es_Children_toArray__WEBPACK_IMPORTED_MODULE_7__["default"])(_this2.props.children).some(function (child) {
      var childValue = Object(_util__WEBPACK_IMPORTED_MODULE_14__["getValuePropValue"])(child);
      return childValue === key && child.props && child.props.disabled;
    });
  };

  this.adjustOpenState = function () {
    if (_this2.skipAdjustOpen) {
      return;
    }
    var open = _this2.state.open;

    var options = [];
    // If hidden menu due to no options, then it should be calculated again
    if (open || _this2.hiddenForNoOptions) {
      options = _this2.renderFilterOptions();
    }
    _this2._options = options;

    if (Object(_util__WEBPACK_IMPORTED_MODULE_14__["isMultipleOrTagsOrCombobox"])(_this2.props) || !_this2.props.showSearch) {
      if (open && !options.length) {
        open = false;
        _this2.hiddenForNoOptions = true;
      }
      // Keep menu open if there are options and hidden for no options before
      if (_this2.hiddenForNoOptions && options.length) {
        open = true;
        _this2.hiddenForNoOptions = false;
      }
    }
    _this2.state.open = open;
  };

  this.forcePopupAlign = function () {
    _this2.selectTriggerRef.triggerRef.forcePopupAlign();
  };

  this.renderFilterOptions = function () {
    var inputValue = _this2.state.inputValue;
    var _props3 = _this2.props,
        children = _props3.children,
        tags = _props3.tags,
        filterOption = _props3.filterOption,
        notFoundContent = _props3.notFoundContent;

    var menuItems = [];
    var childrenKeys = [];
    var options = _this2.renderFilterOptionsFromChildren(children, childrenKeys, menuItems);
    if (tags) {
      // tags value must be string
      var value = _this2.state.value || [];
      value = value.filter(function (singleValue) {
        return childrenKeys.indexOf(singleValue) === -1 && (!inputValue || String(singleValue).indexOf(String(inputValue)) > -1);
      });
      value.forEach(function (singleValue) {
        var key = singleValue;
        var menuItem = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          rc_menu__WEBPACK_IMPORTED_MODULE_11__["Item"],
          {
            style: _util__WEBPACK_IMPORTED_MODULE_14__["UNSELECTABLE_STYLE"],
            attribute: _util__WEBPACK_IMPORTED_MODULE_14__["UNSELECTABLE_ATTRIBUTE"],
            value: key,
            key: key
          },
          key
        );
        options.push(menuItem);
        menuItems.push(menuItem);
      });
      if (inputValue) {
        var notFindInputItem = menuItems.every(function (option) {
          // this.filterOption return true has two meaning,
          // 1, some one exists after filtering
          // 2, filterOption is set to false
          // condition 2 does not mean the option has same value with inputValue
          var filterFn = function filterFn() {
            return Object(_util__WEBPACK_IMPORTED_MODULE_14__["getValuePropValue"])(option) === inputValue;
          };
          if (filterOption !== false) {
            return !_this2.filterOption.call(_this2, inputValue, option, filterFn);
          }
          return !filterFn();
        });
        if (notFindInputItem) {
          options.unshift(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            rc_menu__WEBPACK_IMPORTED_MODULE_11__["Item"],
            {
              style: _util__WEBPACK_IMPORTED_MODULE_14__["UNSELECTABLE_STYLE"],
              attribute: _util__WEBPACK_IMPORTED_MODULE_14__["UNSELECTABLE_ATTRIBUTE"],
              value: inputValue,
              key: inputValue
            },
            inputValue
          ));
        }
      }
    }

    if (!options.length && notFoundContent) {
      options = [react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
        rc_menu__WEBPACK_IMPORTED_MODULE_11__["Item"],
        {
          style: _util__WEBPACK_IMPORTED_MODULE_14__["UNSELECTABLE_STYLE"],
          attribute: _util__WEBPACK_IMPORTED_MODULE_14__["UNSELECTABLE_ATTRIBUTE"],
          disabled: true,
          value: 'NOT_FOUND',
          key: 'NOT_FOUND'
        },
        notFoundContent
      )];
    }
    return options;
  };

  this.renderFilterOptionsFromChildren = function (children, childrenKeys, menuItems) {
    var sel = [];
    var props = _this2.props;
    var inputValue = _this2.state.inputValue;

    var tags = props.tags;
    react__WEBPACK_IMPORTED_MODULE_4___default.a.Children.forEach(children, function (child) {
      if (!child) {
        return;
      }
      if (child.type.isSelectOptGroup) {
        var innerItems = _this2.renderFilterOptionsFromChildren(child.props.children, childrenKeys, menuItems);
        if (innerItems.length) {
          var label = child.props.label;
          var key = child.key;
          if (!key && typeof label === 'string') {
            key = label;
          } else if (!label && key) {
            label = key;
          }
          sel.push(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            rc_menu__WEBPACK_IMPORTED_MODULE_11__["ItemGroup"],
            { key: key, title: label },
            innerItems
          ));
        }
        return;
      }

      warning__WEBPACK_IMPORTED_MODULE_12___default()(child.type.isSelectOption, 'the children of `Select` should be `Select.Option` or `Select.OptGroup`, ' + ('instead of `' + (child.type.name || child.type.displayName || child.type) + '`.'));

      var childValue = Object(_util__WEBPACK_IMPORTED_MODULE_14__["getValuePropValue"])(child);

      Object(_util__WEBPACK_IMPORTED_MODULE_14__["validateOptionValue"])(childValue, _this2.props);

      if (_this2.filterOption(inputValue, child)) {
        var menuItem = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(rc_menu__WEBPACK_IMPORTED_MODULE_11__["Item"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          style: _util__WEBPACK_IMPORTED_MODULE_14__["UNSELECTABLE_STYLE"],
          attribute: _util__WEBPACK_IMPORTED_MODULE_14__["UNSELECTABLE_ATTRIBUTE"],
          value: childValue,
          key: childValue
        }, child.props));
        sel.push(menuItem);
        menuItems.push(menuItem);
      }
      if (tags && !child.props.disabled) {
        childrenKeys.push(childValue);
      }
    });

    return sel;
  };

  this.renderTopControlNode = function () {
    var _state2 = _this2.state,
        value = _state2.value,
        open = _state2.open,
        inputValue = _state2.inputValue;

    var props = _this2.props;
    var choiceTransitionName = props.choiceTransitionName,
        prefixCls = props.prefixCls,
        maxTagTextLength = props.maxTagTextLength,
        maxTagCount = props.maxTagCount,
        maxTagPlaceholder = props.maxTagPlaceholder,
        showSearch = props.showSearch;

    var className = prefixCls + '-selection__rendered';
    // search input is inside topControlNode in single, multiple & combobox. 2016/04/13
    var innerNode = null;
    if (Object(_util__WEBPACK_IMPORTED_MODULE_14__["isSingleMode"])(props)) {
      var selectedValue = null;
      if (value.length) {
        var showSelectedValue = false;
        var opacity = 1;
        if (!showSearch) {
          showSelectedValue = true;
        } else {
          if (open) {
            showSelectedValue = !inputValue;
            if (showSelectedValue) {
              opacity = 0.4;
            }
          } else {
            showSelectedValue = true;
          }
        }
        var singleValue = value[0];

        var _getOptionInfoBySingl3 = _this2.getOptionInfoBySingleValue(singleValue),
            label = _getOptionInfoBySingl3.label,
            title = _getOptionInfoBySingl3.title;

        selectedValue = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          'div',
          {
            key: 'value',
            className: prefixCls + '-selection-selected-value',
            title: title || label,
            style: {
              display: showSelectedValue ? 'block' : 'none',
              opacity: opacity
            }
          },
          label
        );
      }
      if (!showSearch) {
        innerNode = [selectedValue];
      } else {
        innerNode = [selectedValue, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          'div',
          {
            className: prefixCls + '-search ' + prefixCls + '-search--inline',
            key: 'input',
            style: {
              display: open ? 'block' : 'none'
            }
          },
          _this2.getInputElement()
        )];
      }
    } else {
      var selectedValueNodes = [];
      var limitedCountValue = value;
      var maxTagPlaceholderEl = void 0;
      if (maxTagCount !== undefined && value.length > maxTagCount) {
        limitedCountValue = limitedCountValue.slice(0, maxTagCount);
        var omittedValues = _this2.getVLForOnChange(value.slice(maxTagCount, value.length));
        var content = '+ ' + (value.length - maxTagCount) + ' ...';
        if (maxTagPlaceholder) {
          content = typeof maxTagPlaceholder === 'function' ? maxTagPlaceholder(omittedValues) : maxTagPlaceholder;
        }
        maxTagPlaceholderEl = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          'li',
          babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
            style: _util__WEBPACK_IMPORTED_MODULE_14__["UNSELECTABLE_STYLE"]
          }, _util__WEBPACK_IMPORTED_MODULE_14__["UNSELECTABLE_ATTRIBUTE"], {
            onMouseDown: _util__WEBPACK_IMPORTED_MODULE_14__["preventDefaultEvent"],
            className: prefixCls + '-selection__choice ' + prefixCls + '-selection__choice__disabled',
            key: 'maxTagPlaceholder',
            title: content
          }),
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'div',
            { className: prefixCls + '-selection__choice__content' },
            content
          )
        );
      }
      if (Object(_util__WEBPACK_IMPORTED_MODULE_14__["isMultipleOrTags"])(props)) {
        selectedValueNodes = limitedCountValue.map(function (singleValue) {
          var info = _this2.getOptionInfoBySingleValue(singleValue);
          var content = info.label;
          var title = info.title || content;
          if (maxTagTextLength && typeof content === 'string' && content.length > maxTagTextLength) {
            content = content.slice(0, maxTagTextLength) + '...';
          }
          var disabled = _this2.isChildDisabled(singleValue);
          var choiceClassName = disabled ? prefixCls + '-selection__choice ' + prefixCls + '-selection__choice__disabled' : prefixCls + '-selection__choice';
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            'li',
            babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
              style: _util__WEBPACK_IMPORTED_MODULE_14__["UNSELECTABLE_STYLE"]
            }, _util__WEBPACK_IMPORTED_MODULE_14__["UNSELECTABLE_ATTRIBUTE"], {
              onMouseDown: _util__WEBPACK_IMPORTED_MODULE_14__["preventDefaultEvent"],
              className: choiceClassName,
              key: singleValue,
              title: title
            }),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              'div',
              { className: prefixCls + '-selection__choice__content' },
              content
            ),
            disabled ? null : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement('span', {
              className: prefixCls + '-selection__choice__remove',
              onClick: _this2.removeSelected.bind(_this2, singleValue)
            })
          );
        });
      }
      if (maxTagPlaceholderEl) {
        selectedValueNodes.push(maxTagPlaceholderEl);
      }
      selectedValueNodes.push(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
        'li',
        {
          className: prefixCls + '-search ' + prefixCls + '-search--inline',
          key: '__input'
        },
        _this2.getInputElement()
      ));

      if (Object(_util__WEBPACK_IMPORTED_MODULE_14__["isMultipleOrTags"])(props) && choiceTransitionName) {
        innerNode = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          rc_animate__WEBPACK_IMPORTED_MODULE_9__["default"],
          {
            onLeave: _this2.onChoiceAnimationLeave,
            component: 'ul',
            transitionName: choiceTransitionName
          },
          selectedValueNodes
        );
      } else {
        innerNode = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          'ul',
          null,
          selectedValueNodes
        );
      }
    }
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
      'div',
      { className: className, ref: Object(_util__WEBPACK_IMPORTED_MODULE_14__["saveRef"])(_this2, 'topCtrlRef') },
      _this2.getPlaceholderElement(),
      innerNode
    );
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Select);


Select.displayName = 'Select';

/***/ }),

/***/ "../node_modules/rc-select/es/SelectTrigger.js":
/*!*****************************************************!*\
  !*** ../node_modules/rc-select/es/SelectTrigger.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "../node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_trigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-trigger */ "../node_modules/rc-trigger/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _DropdownMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./DropdownMenu */ "../node_modules/rc-select/es/DropdownMenu.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./util */ "../node_modules/rc-select/es/util.js");













rc_trigger__WEBPACK_IMPORTED_MODULE_5__["default"].displayName = 'Trigger';

var BUILT_IN_PLACEMENTS = {
  bottomLeft: {
    points: ['tl', 'bl'],
    offset: [0, 4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  },
  topLeft: {
    points: ['bl', 'tl'],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  }
};

var SelectTrigger = function (_React$Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SelectTrigger, _React$Component);

  function SelectTrigger() {
    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, SelectTrigger);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      dropdownWidth: null
    }, _this.setDropdownWidth = function () {
      var width = react_dom__WEBPACK_IMPORTED_MODULE_10___default.a.findDOMNode(_this).offsetWidth;
      if (width !== _this.state.dropdownWidth) {
        _this.setState({ dropdownWidth: width });
      }
    }, _this.getInnerMenu = function () {
      return _this.dropdownMenuRef && _this.dropdownMenuRef.menuRef;
    }, _this.getPopupDOMNode = function () {
      return _this.triggerRef.getPopupDomNode();
    }, _this.getDropdownElement = function (newProps) {
      var props = _this.props;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_DropdownMenu__WEBPACK_IMPORTED_MODULE_9__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
        ref: Object(_util__WEBPACK_IMPORTED_MODULE_11__["saveRef"])(_this, 'dropdownMenuRef')
      }, newProps, {
        prefixCls: _this.getDropdownPrefixCls(),
        onMenuSelect: props.onMenuSelect,
        onMenuDeselect: props.onMenuDeselect,
        onPopupScroll: props.onPopupScroll,
        value: props.value,
        backfillValue: props.backfillValue,
        firstActiveValue: props.firstActiveValue,
        defaultActiveFirstOption: props.defaultActiveFirstOption,
        dropdownMenuStyle: props.dropdownMenuStyle
      }));
    }, _this.getDropdownTransitionName = function () {
      var props = _this.props;
      var transitionName = props.transitionName;
      if (!transitionName && props.animation) {
        transitionName = _this.getDropdownPrefixCls() + '-' + props.animation;
      }
      return transitionName;
    }, _this.getDropdownPrefixCls = function () {
      return _this.props.prefixCls + '-dropdown';
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(_this, _ret);
  }

  SelectTrigger.prototype.componentDidMount = function componentDidMount() {
    this.setDropdownWidth();
  };

  SelectTrigger.prototype.componentDidUpdate = function componentDidUpdate() {
    this.setDropdownWidth();
  };

  SelectTrigger.prototype.render = function render() {
    var _popupClassName;

    var _props = this.props,
        onPopupFocus = _props.onPopupFocus,
        props = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_props, ['onPopupFocus']);

    var multiple = props.multiple,
        visible = props.visible,
        inputValue = props.inputValue,
        dropdownAlign = props.dropdownAlign,
        disabled = props.disabled,
        showSearch = props.showSearch,
        dropdownClassName = props.dropdownClassName,
        dropdownStyle = props.dropdownStyle,
        dropdownMatchSelectWidth = props.dropdownMatchSelectWidth;

    var dropdownPrefixCls = this.getDropdownPrefixCls();
    var popupClassName = (_popupClassName = {}, _popupClassName[dropdownClassName] = !!dropdownClassName, _popupClassName[dropdownPrefixCls + '--' + (multiple ? 'multiple' : 'single')] = 1, _popupClassName);
    var popupElement = this.getDropdownElement({
      menuItems: props.options,
      onPopupFocus: onPopupFocus,
      multiple: multiple,
      inputValue: inputValue,
      visible: visible
    });
    var hideAction = void 0;
    if (disabled) {
      hideAction = [];
    } else if (Object(_util__WEBPACK_IMPORTED_MODULE_11__["isSingleMode"])(props) && !showSearch) {
      hideAction = ['click'];
    } else {
      hideAction = ['blur'];
    }
    var popupStyle = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, dropdownStyle);
    var widthProp = dropdownMatchSelectWidth ? 'width' : 'minWidth';
    if (this.state.dropdownWidth) {
      popupStyle[widthProp] = this.state.dropdownWidth + 'px';
    }

    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
      rc_trigger__WEBPACK_IMPORTED_MODULE_5__["default"],
      babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, props, {
        showAction: disabled ? [] : this.props.showAction,
        hideAction: hideAction,
        ref: Object(_util__WEBPACK_IMPORTED_MODULE_11__["saveRef"])(this, 'triggerRef'),
        popupPlacement: 'bottomLeft',
        builtinPlacements: BUILT_IN_PLACEMENTS,
        prefixCls: dropdownPrefixCls,
        popupTransitionName: this.getDropdownTransitionName(),
        onPopupVisibleChange: props.onDropdownVisibleChange,
        popup: popupElement,
        popupAlign: dropdownAlign,
        popupVisible: visible,
        getPopupContainer: props.getPopupContainer,
        popupClassName: classnames__WEBPACK_IMPORTED_MODULE_8___default()(popupClassName),
        popupStyle: popupStyle
      }),
      props.children
    );
  };

  return SelectTrigger;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

SelectTrigger.propTypes = {
  onPopupFocus: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onPopupScroll: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  dropdownMatchSelectWidth: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  dropdownAlign: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  visible: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  showSearch: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  dropdownClassName: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  multiple: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  inputValue: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  filterOption: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any,
  options: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  popupClassName: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any,
  showAction: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string)
};
/* harmony default export */ __webpack_exports__["default"] = (SelectTrigger);


SelectTrigger.displayName = 'SelectTrigger';

/***/ }),

/***/ "../node_modules/rc-select/es/index.js":
/*!*********************************************!*\
  !*** ../node_modules/rc-select/es/index.js ***!
  \*********************************************/
/*! exports provided: Option, OptGroup, SelectPropTypes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Select */ "../node_modules/rc-select/es/Select.js");
/* harmony import */ var _Option__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Option */ "../node_modules/rc-select/es/Option.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return _Option__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _PropTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PropTypes */ "../node_modules/rc-select/es/PropTypes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SelectPropTypes", function() { return _PropTypes__WEBPACK_IMPORTED_MODULE_2__["SelectPropTypes"]; });

/* harmony import */ var _OptGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OptGroup */ "../node_modules/rc-select/es/OptGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OptGroup", function() { return _OptGroup__WEBPACK_IMPORTED_MODULE_3__["default"]; });





_Select__WEBPACK_IMPORTED_MODULE_0__["default"].Option = _Option__WEBPACK_IMPORTED_MODULE_1__["default"];
_Select__WEBPACK_IMPORTED_MODULE_0__["default"].OptGroup = _OptGroup__WEBPACK_IMPORTED_MODULE_3__["default"];

/* harmony default export */ __webpack_exports__["default"] = (_Select__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../node_modules/rc-select/es/util.js":
/*!********************************************!*\
  !*** ../node_modules/rc-select/es/util.js ***!
  \********************************************/
/*! exports provided: getValuePropValue, getPropValue, isMultiple, isCombobox, isMultipleOrTags, isMultipleOrTagsOrCombobox, isSingleMode, toArray, getMapKey, preventDefaultEvent, findIndexInValueBySingleValue, getLabelFromPropsValue, getSelectKeys, UNSELECTABLE_STYLE, UNSELECTABLE_ATTRIBUTE, findFirstMenuItem, includesSeparators, splitBySeparators, defaultFilterFn, validateOptionValue, saveRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValuePropValue", function() { return getValuePropValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPropValue", function() { return getPropValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMultiple", function() { return isMultiple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCombobox", function() { return isCombobox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMultipleOrTags", function() { return isMultipleOrTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMultipleOrTagsOrCombobox", function() { return isMultipleOrTagsOrCombobox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSingleMode", function() { return isSingleMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMapKey", function() { return getMapKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preventDefaultEvent", function() { return preventDefaultEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndexInValueBySingleValue", function() { return findIndexInValueBySingleValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLabelFromPropsValue", function() { return getLabelFromPropsValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectKeys", function() { return getSelectKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNSELECTABLE_STYLE", function() { return UNSELECTABLE_STYLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNSELECTABLE_ATTRIBUTE", function() { return UNSELECTABLE_ATTRIBUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findFirstMenuItem", function() { return findFirstMenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "includesSeparators", function() { return includesSeparators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitBySeparators", function() { return splitBySeparators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultFilterFn", function() { return defaultFilterFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateOptionValue", function() { return validateOptionValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveRef", function() { return saveRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function getValuePropValue(child) {
  var props = child.props;
  if ('value' in props) {
    return props.value;
  }
  if (child.key) {
    return child.key;
  }
  if (child.type && child.type.isSelectOptGroup && props.label) {
    return props.label;
  }
  throw new Error('Need at least a key or a value or a label (only for OptGroup) for ' + child);
}

function getPropValue(child, prop) {
  if (prop === 'value') {
    return getValuePropValue(child);
  }
  return child.props[prop];
}

function isMultiple(props) {
  return props.multiple;
}

function isCombobox(props) {
  return props.combobox;
}

function isMultipleOrTags(props) {
  return props.multiple || props.tags;
}

function isMultipleOrTagsOrCombobox(props) {
  return isMultipleOrTags(props) || isCombobox(props);
}

function isSingleMode(props) {
  return !isMultipleOrTagsOrCombobox(props);
}

function toArray(value) {
  var ret = value;
  if (value === undefined) {
    ret = [];
  } else if (!Array.isArray(value)) {
    ret = [value];
  }
  return ret;
}

function getMapKey(value) {
  return typeof value + '-' + value;
}

function preventDefaultEvent(e) {
  e.preventDefault();
}

function findIndexInValueBySingleValue(value, singleValue) {
  var index = -1;
  for (var i = 0; i < value.length; i++) {
    if (value[i] === singleValue) {
      index = i;
      break;
    }
  }
  return index;
}

function getLabelFromPropsValue(value, key) {
  var label = void 0;
  value = toArray(value);
  for (var i = 0; i < value.length; i++) {
    if (value[i].key === key) {
      label = value[i].label;
      break;
    }
  }
  return label;
}

function getSelectKeys(menuItems, value) {
  if (value === null || value === undefined) {
    return [];
  }
  var selectedKeys = [];
  react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.forEach(menuItems, function (item) {
    if (item.type.isMenuItemGroup) {
      selectedKeys = selectedKeys.concat(getSelectKeys(item.props.children, value));
    } else {
      var itemValue = getValuePropValue(item);
      var itemKey = item.key;
      if (findIndexInValueBySingleValue(value, itemValue) !== -1 && itemKey) {
        selectedKeys.push(itemKey);
      }
    }
  });
  return selectedKeys;
}

var UNSELECTABLE_STYLE = {
  userSelect: 'none',
  WebkitUserSelect: 'none'
};

var UNSELECTABLE_ATTRIBUTE = {
  unselectable: 'unselectable'
};

function findFirstMenuItem(children) {
  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    if (child.type.isMenuItemGroup) {
      var found = findFirstMenuItem(child.props.children);
      if (found) {
        return found;
      }
    } else if (!child.props.disabled) {
      return child;
    }
  }
  return null;
}

function includesSeparators(string, separators) {
  for (var i = 0; i < separators.length; ++i) {
    if (string.lastIndexOf(separators[i]) > 0) {
      return true;
    }
  }
  return false;
}

function splitBySeparators(string, separators) {
  var reg = new RegExp('[' + separators.join() + ']');
  return string.split(reg).filter(function (token) {
    return token;
  });
}

function defaultFilterFn(input, child) {
  if (child.props.disabled) {
    return false;
  }
  var value = toArray(getPropValue(child, this.props.optionFilterProp)).join('');
  return value.toLowerCase().indexOf(input.toLowerCase()) > -1;
}

function validateOptionValue(value, props) {
  if (isSingleMode(props) || isMultiple(props)) {
    return;
  }
  if (typeof value !== 'string') {
    throw new Error('Invalid `value` of type `' + typeof value + '` supplied to Option, ' + 'expected `string` when `tags/combobox` is `true`.');
  }
}

function saveRef(instance, name) {
  return function (node) {
    instance[name] = node;
  };
}

/***/ }),

/***/ "../node_modules/rc-util/es/Children/toArray.js":
/*!******************************************************!*\
  !*** ../node_modules/rc-util/es/Children/toArray.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toArray; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function toArray(children) {
  var ret = [];
  react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.forEach(children, function (c) {
    ret.push(c);
  });
  return ret;
}

/***/ }),

/***/ "../node_modules/rc-util/es/getScrollBarSize.js":
/*!******************************************************!*\
  !*** ../node_modules/rc-util/es/getScrollBarSize.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getScrollBarSize; });
var cached = void 0;

function getScrollBarSize(fresh) {
  if (fresh || cached === undefined) {
    var inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';

    var outer = document.createElement('div');
    var outerStyle = outer.style;

    outerStyle.position = 'absolute';
    outerStyle.top = 0;
    outerStyle.left = 0;
    outerStyle.pointerEvents = 'none';
    outerStyle.visibility = 'hidden';
    outerStyle.width = '200px';
    outerStyle.height = '150px';
    outerStyle.overflow = 'hidden';

    outer.appendChild(inner);

    document.body.appendChild(outer);

    var widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var widthScroll = inner.offsetWidth;

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }

    document.body.removeChild(outer);

    cached = widthContained - widthScroll;
  }
  return cached;
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvY2FsZW5kYXIvbG9jYWxlL2VuX1VTLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9kYXRlLXBpY2tlci9sb2NhbGUvZW5fVVMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2xvY2FsZS1wcm92aWRlci9Mb2NhbGVSZWNlaXZlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvbG9jYWxlLXByb3ZpZGVyL2RlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL21vZGFsL0FjdGlvbkJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvbW9kYWwvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL21vZGFsL2NvbmZpcm0uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL21vZGFsL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9tb2RhbC9sb2NhbGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL21vZGFsL3N0eWxlL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvbW9kYWwvc3R5bGUvaW5kZXguY3NzPzU5N2UiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3NlbGVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvc2VsZWN0L3N0eWxlL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvc2VsZWN0L3N0eWxlL2luZGV4LmNzcz81ZDU1Iiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy90aW1lLXBpY2tlci9sb2NhbGUvZW5fVVMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL21vZGFsL3N0eWxlL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvc2VsZWN0L3N0eWxlL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JjLWNhbGVuZGFyL2VzL2xvY2FsZS9lbl9VUy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JjLWRpYWxvZy9lcy9EaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYy1kaWFsb2cvZXMvRGlhbG9nV3JhcC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JjLWRpYWxvZy9lcy9MYXp5UmVuZGVyQm94LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmMtcGFnaW5hdGlvbi9lcy9sb2NhbGUvZW5fVVMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYy1zZWxlY3QvZXMvRHJvcGRvd25NZW51LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmMtc2VsZWN0L2VzL09wdEdyb3VwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmMtc2VsZWN0L2VzL09wdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JjLXNlbGVjdC9lcy9Qcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYy1zZWxlY3QvZXMvU2VsZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmMtc2VsZWN0L2VzL1NlbGVjdFRyaWdnZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYy1zZWxlY3QvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYy1zZWxlY3QvZXMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JjLXV0aWwvZXMvQ2hpbGRyZW4vdG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JjLXV0aWwvZXMvZ2V0U2Nyb2xsQmFyU2l6ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLGtJOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRkFBb0IsMkVBQTJFO0FBQy9GLDZGQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQSx1RTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwRkFBOEIsZ0dBQWdHO0FBQzlIO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGdCQUFnQjtBQUNwRDtBQUNBO0FBQ0EsMENBQTBDLGlCQUFpQjtBQUMzRDtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLHdDQUF3QyxpQkFBaUI7QUFDekQscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzREFBc0Q7QUFDdkU7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLENBQUM7O0FBRUQsNkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMkI7QUFDM0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsOEJBQThCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlFQUFpRTtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsNkdBQTREO0FBQzdFO0FBQ0E7QUFDQSxpTUFBMEQsZUFBZSxvSUFBb0k7QUFDN007QUFDQSxLQUFLOztBQUVMO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUhBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx3Q0FBd0M7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHNEQUFzRCxzQkFBc0Isb05BQW9OO0FBQ3pTO0FBQ0E7QUFDQSxhQUFhLHlDQUF5QztBQUN0RDtBQUNBO0FBQ0EsaUJBQWlCLGlDQUFpQztBQUNsRCxvSEFBMkMsaUJBQWlCO0FBQzVEO0FBQ0E7QUFDQSxxQkFBcUIsa0NBQWtDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG9DQUFvQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGlDQUFpQztBQUNsRDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbUVBQW1FO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFLGFBQWE7QUFDcEY7QUFDQTs7QUFFQTtBQUNBLDBGQUE4QixXQUFXLDZGQUE2RjtBQUN0SSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwRUFBMEUsZUFBZTtBQUN6RjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRkFBc0IsV0FBVyw4QkFBOEI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RkFBMkIseURBQXlEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBLHVGQUEyQiw2REFBNkQ7QUFDeEY7QUFDQTtBQUNBO0FBQ0EsdUZBQTJCLDJEQUEyRDtBQUN0RjtBQUNBO0FBQ0E7QUFDQSx1RkFBMkIsbUVBQW1FO0FBQzlGO0FBQ0E7QUFDQTtBQUNBLHVGQUEyQixrQ0FBa0M7QUFDN0Q7QUFDQTtBQUNBLCtHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBLDJGQUErQjtBQUMvQjtBQUNBO0FBQ0EsK0ZBQW1DO0FBQ25DLEtBQUs7QUFDTCwrRkFBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBLEVBQUU7O0FBRUYsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyx5SEFBeUgsY0FBYztBQUM1STtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlGQUFrRDtBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlNQUE0RCwwQkFBMEIsaUtBQWlLO0FBQ3ZQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbUhBQStEO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekhBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsRUFBRTs7QUFFRixnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7Ozs7OztBQzVDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLHVFOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7OztBQUdBO0FBQ0EsZ1ZBQWlWLGlPQUFpTyxvQkFBb0IscUJBQXFCLCtCQUErQixtQ0FBbUMsbUNBQW1DLGNBQWMsZUFBZSxxQkFBcUIsdUJBQXVCLGdCQUFnQixtQkFBbUIsZUFBZSx5QkFBeUIsR0FBRyxtQkFBbUIsb0JBQW9CLG1CQUFtQixXQUFXLGFBQWEsY0FBYyxZQUFZLGtCQUFrQixzQ0FBc0MsZUFBZSxHQUFHLG9CQUFvQixjQUFjLG9CQUFvQixzQkFBc0IscUJBQXFCLCtCQUErQixHQUFHLHNCQUFzQix1QkFBdUIsMkJBQTJCLGNBQWMsdUJBQXVCLGlDQUFpQyx1REFBdUQsdURBQXVELEdBQUcsb0JBQW9CLG9CQUFvQixjQUFjLDRCQUE0Qix1QkFBdUIsYUFBYSxXQUFXLGdCQUFnQixxQkFBcUIsbUJBQW1CLDBCQUEwQixrQ0FBa0MsMEJBQTBCLCtCQUErQixlQUFlLGVBQWUsR0FBRyxzQkFBc0IsbUJBQW1CLHVCQUF1Qiw2QkFBNkIsdUJBQXVCLHlCQUF5Qix5QkFBeUIsZ0JBQWdCLGlCQUFpQixzQkFBc0Isb0JBQW9CLEdBQUcsNkJBQTZCLHdCQUF3QixtQkFBbUIsd0NBQXdDLEdBQUcsbURBQW1ELGdCQUFnQiwwQkFBMEIsR0FBRyxxQkFBcUIsdUJBQXVCLCtCQUErQixxQkFBcUIsK0JBQStCLHFDQUFxQyxHQUFHLG1CQUFtQixrQkFBa0Isb0JBQW9CLHFCQUFxQiwwQkFBMEIsR0FBRyxxQkFBcUIsa0NBQWtDLHVCQUF1QixzQkFBc0IsK0JBQStCLEdBQUcscUNBQXFDLHFCQUFxQixxQkFBcUIsR0FBRyxrREFBa0QscUNBQXFDLHFDQUFxQyw0QkFBNEIsNEJBQTRCLDRCQUE0QixlQUFlLEdBQUcsbUJBQW1CLG9CQUFvQixXQUFXLGFBQWEsWUFBWSxjQUFjLDhCQUE4QiwwQ0FBMEMsaUJBQWlCLGtCQUFrQiw4QkFBOEIsR0FBRywwQkFBMEIsa0JBQWtCLEdBQUcsbUJBQW1CLHFCQUFxQixHQUFHLDZCQUE2QixnQkFBZ0IsNkJBQTZCLG1CQUFtQixLQUFLLHVDQUF1QywwQkFBMEIsc0JBQXNCLHNCQUFzQixzQkFBc0IsS0FBSyxHQUFHLGtDQUFrQyxrQkFBa0IsR0FBRyxpQ0FBaUMsa0JBQWtCLEdBQUcsZ0NBQWdDLDRCQUE0QixHQUFHLDZCQUE2QixZQUFZLEdBQUcsc0VBQXNFLG1CQUFtQixtQkFBbUIsR0FBRyxtQ0FBbUMsZ0JBQWdCLHVCQUF1QixpQkFBaUIsY0FBYyxHQUFHLHdDQUF3QywrQkFBK0IscUJBQXFCLG9CQUFvQixzQkFBc0IsbUJBQW1CLG1CQUFtQixHQUFHLDBDQUEwQyxzQkFBc0Isb0JBQW9CLCtCQUErQixvQkFBb0IsR0FBRyxnQ0FBZ0Msb0JBQW9CLHVCQUF1QixnQkFBZ0IsR0FBRyxrQ0FBa0MscUJBQXFCLGlCQUFpQixHQUFHLGtEQUFrRCxxQkFBcUIscUJBQXFCLEdBQUcsbURBQW1ELG1CQUFtQixHQUFHLHlHQUF5RyxtQkFBbUIsR0FBRyxrREFBa0QsbUJBQW1CLEdBQUcscURBQXFELG1CQUFtQixHQUFHOztBQUU1dUo7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7OztBQUdBO0FBQ0EsaVZBQWtWLGlPQUFpTyxvQkFBb0IscUJBQXFCLCtCQUErQixtQ0FBbUMsbUNBQW1DLGNBQWMsZUFBZSxxQkFBcUIsMEJBQTBCLHVCQUF1QixHQUFHLG1DQUFtQyxjQUFjLGVBQWUscUJBQXFCLEdBQUcsNkJBQTZCLGVBQWUsMkJBQTJCLEdBQUcscUJBQXFCLDBCQUEwQix1QkFBdUIsNkJBQTZCLHVCQUF1Qix5QkFBeUIsdUNBQXVDLHdDQUF3Qyx1Q0FBdUMsdUJBQXVCLGFBQWEsZ0JBQWdCLG1CQUFtQixxQkFBcUIsc0NBQXNDLHNDQUFzQyxzQ0FBc0MsK0JBQStCLG9CQUFvQixHQUFHLDRCQUE0QixtQkFBbUIsd0NBQXdDLEdBQUcsdUJBQXVCLGtCQUFrQixHQUFHLDRCQUE0QixzQkFBc0IsOENBQThDLHNDQUFzQyw4QkFBOEIscURBQXFELEdBQUcseUJBQXlCLGtCQUFrQiw4QkFBOEIsOEJBQThCLDhCQUE4Qiw4QkFBOEIsbUNBQW1DLG1DQUFtQyxtQkFBbUIsMkJBQTJCLHVCQUF1Qiw4QkFBOEIsNkJBQTZCLHNFQUFzRSw4REFBOEQsR0FBRywrQkFBK0IsMEJBQTBCLEdBQUcsMEdBQTBHLDBCQUEwQixlQUFlLDBEQUEwRCwwREFBMEQsR0FBRyxnQ0FBZ0MsMEJBQTBCLHVCQUF1Qiw2QkFBNkIsdUJBQXVCLHlCQUF5Qix5QkFBeUIsZUFBZSx1QkFBdUIsZ0JBQWdCLGVBQWUscUJBQXFCLGFBQWEsb0JBQW9CLCtCQUErQixnQkFBZ0IsaUJBQWlCLHFCQUFxQixzQkFBc0Isb0JBQW9CLDREQUE0RCxvREFBb0QsR0FBRyx1Q0FBdUMsbUJBQW1CLDJCQUEyQix1Q0FBdUMsd0NBQXdDLHVDQUF1Qyx3QkFBd0IsR0FBRyxzQ0FBc0MsK0JBQStCLEdBQUcsNERBQTRELGVBQWUsR0FBRyx3Q0FBd0MsZ0JBQWdCLHFCQUFxQiw0QkFBNEIsd0JBQXdCLG9CQUFvQix3QkFBd0IsR0FBRyx3QkFBd0IsK0JBQStCLEdBQUcsOENBQThDLHdCQUF3Qix3QkFBd0IsR0FBRywySkFBMkosMEJBQTBCLDZCQUE2Qiw2QkFBNkIsR0FBRyxxREFBcUQsa0JBQWtCLHVCQUF1Qix5QkFBeUIsR0FBRyxzRkFBc0Ysd0JBQXdCLGdCQUFnQix3QkFBd0IsR0FBRyw4RkFBOEYsa0JBQWtCLEdBQUcsaUNBQWlDLGlCQUFpQix1QkFBdUIsb0JBQW9CLEdBQUcsbUNBQW1DLG1CQUFtQixzQkFBc0IsdUJBQXVCLHVCQUF1QixzQkFBc0IsR0FBRyx5Q0FBeUMsaUJBQWlCLHVCQUF1Qix5QkFBeUIsMEJBQTBCLGFBQWEsR0FBRyxrQkFBa0Isb0JBQW9CLEdBQUcsZ0RBQWdELGlCQUFpQixHQUFHLGtEQUFrRCxzQkFBc0IsR0FBRyxrREFBa0QscUJBQXFCLEdBQUcscUZBQXFGLGlCQUFpQixzQkFBc0IsR0FBRywrRUFBK0UsY0FBYyxHQUFHLGdEQUFnRCxpQkFBaUIsR0FBRyxrREFBa0Qsc0JBQXNCLGtCQUFrQixHQUFHLGtEQUFrRCxxQkFBcUIsR0FBRyxxRkFBcUYsaUJBQWlCLHNCQUFzQixHQUFHLCtFQUErRSxjQUFjLEdBQUcsa0ZBQWtGLGVBQWUsR0FBRyw4REFBOEQsK0JBQStCLG9CQUFvQixHQUFHLG9FQUFvRSwrQkFBK0IsR0FBRyxtQ0FBbUMsMEJBQTBCLHVCQUF1QixHQUFHLCtFQUErRSx1QkFBdUIsYUFBYSxZQUFZLGVBQWUsbUJBQW1CLHNCQUFzQixpQkFBaUIsb0JBQW9CLHNCQUFzQixxQkFBcUIsNEJBQTRCLHdCQUF3QixxQkFBcUIsR0FBRywwQ0FBMEMsZUFBZSxHQUFHLHFDQUFxQyx1QkFBdUIsV0FBVyxrQkFBa0IscUJBQXFCLHlCQUF5QixHQUFHLDhCQUE4Qix1QkFBdUIsaUJBQWlCLGdCQUFnQixHQUFHLDhEQUE4RCxnQkFBZ0IsaUJBQWlCLEdBQUcsd0RBQXdELG9CQUFvQixvQkFBb0IsaUJBQWlCLGdCQUFnQiw0QkFBNEIsZUFBZSx1QkFBdUIsbUJBQW1CLEdBQUcsa0NBQWtDLGlCQUFpQixHQUFHLG1DQUFtQyxxQkFBcUIsaUJBQWlCLHdCQUF3QixZQUFZLEdBQUcsa0ZBQWtGLG1CQUFtQixtQkFBbUIsR0FBRyx5Q0FBeUMsZ0JBQWdCLHVCQUF1QixpQkFBaUIsY0FBYyxHQUFHLDhEQUE4RCxnQkFBZ0IscUJBQXFCLGdCQUFnQixlQUFlLG9CQUFvQixHQUFHLHdGQUF3RixvQkFBb0Isa0JBQWtCLEdBQUcsbUVBQW1FLHFCQUFxQix3QkFBd0IsaUJBQWlCLEdBQUcsc0VBQXNFLHFCQUFxQixHQUFHLHlIQUF5SCxvQkFBb0IsaUJBQWlCLHNCQUFzQixHQUFHLGlFQUFpRSwrQkFBK0IsOEJBQThCLDhCQUE4Qix1QkFBdUIsb0JBQW9CLGdCQUFnQixzQkFBc0IsbUJBQW1CLHVCQUF1QixxQkFBcUIsMEVBQTBFLGtFQUFrRSwyQkFBMkIsR0FBRywyRUFBMkUsb0JBQW9CLEdBQUcsMEVBQTBFLDBCQUEwQix3QkFBd0IscUJBQXFCLDRCQUE0QixvQkFBb0IseUVBQXlFLGlFQUFpRSxHQUFHLHlFQUF5RSx1QkFBdUIsNkJBQTZCLHVCQUF1Qix5QkFBeUIsbUJBQW1CLHVDQUF1Qyx3Q0FBd0MsdUNBQXVDLCtCQUErQix5QkFBeUIsb0JBQW9CLHNCQUFzQixnQ0FBZ0Msd0JBQXdCLDBCQUEwQixvQkFBb0Isd0JBQXdCLHNEQUFzRCxzREFBc0Qsc0RBQXNELHVCQUF1QixlQUFlLEdBQUcsZ0ZBQWdGLG1CQUFtQix3Q0FBd0MsR0FBRywrRUFBK0Usb0JBQW9CLEdBQUcsK0VBQStFLG1CQUFtQixHQUFHLGdGQUFnRix3QkFBd0IsR0FBRyxnRUFBZ0UsY0FBYyxHQUFHLDJGQUEyRix1QkFBdUIsR0FBRyw2Q0FBNkMsc0NBQXNDLHNDQUFzQyxzQ0FBc0MsR0FBRywwQ0FBMEMsMEJBQTBCLGVBQWUsMERBQTBELDBEQUEwRCxHQUFHLDBDQUEwQyxrQkFBa0IsR0FBRyxtREFBbUQsaUJBQWlCLGdCQUFnQixnQkFBZ0IsR0FBRyx3REFBd0QsZ0JBQWdCLGlCQUFpQixHQUFHLGtEQUFrRCxnQkFBZ0IsaUJBQWlCLHVCQUF1QixlQUFlLHNFQUFzRSw4REFBOEQsNkJBQTZCLDZCQUE2QixHQUFHLDJHQUEyRyx1QkFBdUIsR0FBRyx3QkFBd0IsaU9BQWlPLHFCQUFxQiwrQkFBK0IsY0FBYyxlQUFlLHFCQUFxQiwyQkFBMkIsc0RBQXNELHNEQUFzRCx1QkFBdUIsbUNBQW1DLG1DQUFtQyxrQkFBa0Isa0JBQWtCLGlCQUFpQix1QkFBdUIsa0JBQWtCLG9CQUFvQixHQUFHLDZNQUE2TSx5Q0FBeUMseUNBQXlDLEdBQUcsdU1BQXVNLDJDQUEyQywyQ0FBMkMsR0FBRyxzR0FBc0csMENBQTBDLDBDQUEwQyxHQUFHLG1HQUFtRyw0Q0FBNEMsNENBQTRDLEdBQUcsK0JBQStCLGtCQUFrQixHQUFHLDZCQUE2QixrQkFBa0IscUJBQXFCLG9CQUFvQixxQkFBcUIsc0JBQXNCLG1CQUFtQixHQUFHLDZDQUE2QyxjQUFjLGVBQWUsR0FBRyw4RUFBOEUsdUJBQXVCLEdBQUcsOENBQThDLCtCQUErQixvQkFBb0IsaUJBQWlCLHNCQUFzQixvQkFBb0IsR0FBRyxrQ0FBa0MsdUJBQXVCLG1CQUFtQixzQkFBc0Isc0JBQXNCLHdCQUF3QiwrQkFBK0Isd0JBQXdCLG9CQUFvQixxQkFBcUIsNEJBQTRCLDZDQUE2QyxxQ0FBcUMsR0FBRyx3Q0FBd0MsOEJBQThCLEdBQUcsOENBQThDLCtCQUErQixHQUFHLDZDQUE2QywrQkFBK0IsR0FBRywyQ0FBMkMsK0JBQStCLHdCQUF3QixHQUFHLGlEQUFpRCwrQkFBK0IsMkJBQTJCLHdCQUF3QixHQUFHLDJGQUEyRiw4QkFBOEIscUJBQXFCLCtCQUErQixHQUFHLHlDQUF5Qyw4QkFBOEIsR0FBRywwQ0FBMEMsZ0JBQWdCLGtCQUFrQixxQkFBcUIsOEJBQThCLG1CQUFtQixHQUFHLDJGQUEyRiwyQkFBMkIsdUNBQXVDLHdDQUF3Qyx1Q0FBdUMsd0JBQXdCLHVCQUF1QiwwQkFBMEIsb0JBQW9CLHdCQUF3QixzREFBc0Qsc0RBQXNELHNEQUFzRCxzQ0FBc0MsOEJBQThCLHVCQUF1QixhQUFhLHdDQUF3Qyx3Q0FBd0Msd0NBQXdDLGdCQUFnQixzQkFBc0IsNERBQTRELEdBQUcsaUdBQWlHLG9CQUFvQixHQUFHLGlHQUFpRyxnQkFBZ0IsR0FBRyxvR0FBb0csa0JBQWtCLEdBQUcsNk1BQTZNLG1CQUFtQiwwQkFBMEIsR0FBRyw2R0FBNkcsbUJBQW1CLEdBQUc7O0FBRS95Z0I7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRkFBcUQsaUVBQWlFO0FBQ3RIO0FBQ0E7QUFDQTtBQUNBLHFGQUFxRCxpRUFBaUUsOERBQThCLHFEQUFxRDtBQUN6TTtBQUNBO0FBQ0E7QUFDQSx3RkFBd0QsK0VBQStFLCtEQUErQixvQ0FBb0M7QUFDMU07QUFDQSwrRkFBbUM7QUFDbkM7QUFDQSw2SUFBb0Usb0tBQW9LLDhEQUE4QixvQ0FBb0MsbUpBQXVELHFGQUFxRiwwR0FBMEUsc0RBQXNELDBDQUEwQyxFQUFFO0FBQ2xtQiw0SEFBaUQsMklBQTJJO0FBQzVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEZBQThCO0FBQzlCO0FBQ0E7QUFDQSwwRkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ05BQTJFLDRKQUE0SjtBQUN2TztBQUNBLDJJQUFnRSwwR0FBMEc7QUFDMUs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQ0FBa0M7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd09BQTRHLDhRQUE4UTtBQUMxWDs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4TEFBeUQsd0JBQXdCLHVCQUF1QixnQkFBZ0I7QUFDeEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7O0FBRTlDO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsNElBQXlELHVIQUF1SDtBQUNoTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EscUlBQWtELGtDQUFrQztBQUNwRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLDJFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkZBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLGlKQUFxRDtBQUNyRDs7QUFFQTtBQUNBLENBQUM7O0FBRUQsOEU7Ozs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUM4QjtBQUNSO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ3NEOztBQUV0RDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsbUVBQW1FLGFBQWE7QUFDaEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzRkFBd0M7QUFDeEM7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBbUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSwwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckxBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHlFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0xBQXdMLDBDQUEwQztBQUNsTztBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUywyQkFBMkI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw4SUFBdUcsb0NBQW9DO0FBQzNJLG9IQUE2RTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sc0RBQXNEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixxQkFBcUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BLQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlbl9VUyBmcm9tICcuLi8uLi9kYXRlLXBpY2tlci9sb2NhbGUvZW5fVVMnO1xuZXhwb3J0IGRlZmF1bHQgZW5fVVM7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBDYWxlbmRhckxvY2FsZSBmcm9tICdyYy1jYWxlbmRhci9lcy9sb2NhbGUvZW5fVVMnO1xuaW1wb3J0IFRpbWVQaWNrZXJMb2NhbGUgZnJvbSAnLi4vLi4vdGltZS1waWNrZXIvbG9jYWxlL2VuX1VTJztcbi8vIE1lcmdlIGludG8gYSBsb2NhbGUgb2JqZWN0XG52YXIgbG9jYWxlID0ge1xuICAgIGxhbmc6IF9leHRlbmRzKHsgcGxhY2Vob2xkZXI6ICdTZWxlY3QgZGF0ZScsIHJhbmdlUGxhY2Vob2xkZXI6IFsnU3RhcnQgZGF0ZScsICdFbmQgZGF0ZSddIH0sIENhbGVuZGFyTG9jYWxlKSxcbiAgICB0aW1lUGlja2VyTG9jYWxlOiBfZXh0ZW5kcyh7fSwgVGltZVBpY2tlckxvY2FsZSlcbn07XG4vLyBBbGwgc2V0dGluZ3MgYXQ6XG4vLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2Jsb2IvbWFzdGVyL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvbG9jYWxlL2V4YW1wbGUuanNvblxuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxudmFyIExvY2FsZVJlY2VpdmVyID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoTG9jYWxlUmVjZWl2ZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gTG9jYWxlUmVjZWl2ZXIoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMb2NhbGVSZWNlaXZlcik7XG5cbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChMb2NhbGVSZWNlaXZlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKExvY2FsZVJlY2VpdmVyKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKExvY2FsZVJlY2VpdmVyLCBbe1xuICAgICAgICBrZXk6ICdnZXRMb2NhbGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TG9jYWxlKCkge1xuICAgICAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50TmFtZSA9IF9wcm9wcy5jb21wb25lbnROYW1lLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRMb2NhbGUgPSBfcHJvcHMuZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgIHZhciBhbnRMb2NhbGUgPSB0aGlzLmNvbnRleHQuYW50TG9jYWxlO1xuXG4gICAgICAgICAgICB2YXIgbG9jYWxlRnJvbUNvbnRleHQgPSBhbnRMb2NhbGUgJiYgYW50TG9jYWxlW2NvbXBvbmVudE5hbWVdO1xuICAgICAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCB0eXBlb2YgZGVmYXVsdExvY2FsZSA9PT0gJ2Z1bmN0aW9uJyA/IGRlZmF1bHRMb2NhbGUoKSA6IGRlZmF1bHRMb2NhbGUsIGxvY2FsZUZyb21Db250ZXh0IHx8IHt9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZ2V0TG9jYWxlQ29kZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRMb2NhbGVDb2RlKCkge1xuICAgICAgICAgICAgdmFyIGFudExvY2FsZSA9IHRoaXMuY29udGV4dC5hbnRMb2NhbGU7XG5cbiAgICAgICAgICAgIHZhciBsb2NhbGVDb2RlID0gYW50TG9jYWxlICYmIGFudExvY2FsZS5sb2NhbGU7XG4gICAgICAgICAgICAvLyBIYWQgdXNlIExvY2FsZVByb3ZpZGUgYnV0IGRpZG4ndCBzZXQgbG9jYWxlXG4gICAgICAgICAgICBpZiAoYW50TG9jYWxlICYmIGFudExvY2FsZS5leGlzdCAmJiAhbG9jYWxlQ29kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnZW4tdXMnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGxvY2FsZUNvZGU7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbih0aGlzLmdldExvY2FsZSgpLCB0aGlzLmdldExvY2FsZUNvZGUoKSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTG9jYWxlUmVjZWl2ZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IExvY2FsZVJlY2VpdmVyO1xuXG5Mb2NhbGVSZWNlaXZlci5jb250ZXh0VHlwZXMgPSB7XG4gICAgYW50TG9jYWxlOiBQcm9wVHlwZXMub2JqZWN0XG59OyIsImltcG9ydCBQYWdpbmF0aW9uIGZyb20gJ3JjLXBhZ2luYXRpb24vZXMvbG9jYWxlL2VuX1VTJztcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gJy4uL2RhdGUtcGlja2VyL2xvY2FsZS9lbl9VUyc7XG5pbXBvcnQgVGltZVBpY2tlciBmcm9tICcuLi90aW1lLXBpY2tlci9sb2NhbGUvZW5fVVMnO1xuaW1wb3J0IENhbGVuZGFyIGZyb20gJy4uL2NhbGVuZGFyL2xvY2FsZS9lbl9VUyc7XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbG9jYWxlOiAnZW4nLFxuICAgIFBhZ2luYXRpb246IFBhZ2luYXRpb24sXG4gICAgRGF0ZVBpY2tlcjogRGF0ZVBpY2tlcixcbiAgICBUaW1lUGlja2VyOiBUaW1lUGlja2VyLFxuICAgIENhbGVuZGFyOiBDYWxlbmRhcixcbiAgICBUYWJsZToge1xuICAgICAgICBmaWx0ZXJUaXRsZTogJ0ZpbHRlciBtZW51JyxcbiAgICAgICAgZmlsdGVyQ29uZmlybTogJ09LJyxcbiAgICAgICAgZmlsdGVyUmVzZXQ6ICdSZXNldCcsXG4gICAgICAgIGVtcHR5VGV4dDogJ05vIGRhdGEnLFxuICAgICAgICBzZWxlY3RBbGw6ICdTZWxlY3QgY3VycmVudCBwYWdlJyxcbiAgICAgICAgc2VsZWN0SW52ZXJ0OiAnSW52ZXJ0IGN1cnJlbnQgcGFnZSdcbiAgICB9LFxuICAgIE1vZGFsOiB7XG4gICAgICAgIG9rVGV4dDogJ09LJyxcbiAgICAgICAgY2FuY2VsVGV4dDogJ0NhbmNlbCcsXG4gICAgICAgIGp1c3RPa1RleHQ6ICdPSydcbiAgICB9LFxuICAgIFBvcGNvbmZpcm06IHtcbiAgICAgICAgb2tUZXh0OiAnT0snLFxuICAgICAgICBjYW5jZWxUZXh0OiAnQ2FuY2VsJ1xuICAgIH0sXG4gICAgVHJhbnNmZXI6IHtcbiAgICAgICAgdGl0bGVzOiBbJycsICcnXSxcbiAgICAgICAgbm90Rm91bmRDb250ZW50OiAnTm90IEZvdW5kJyxcbiAgICAgICAgc2VhcmNoUGxhY2Vob2xkZXI6ICdTZWFyY2ggaGVyZScsXG4gICAgICAgIGl0ZW1Vbml0OiAnaXRlbScsXG4gICAgICAgIGl0ZW1zVW5pdDogJ2l0ZW1zJ1xuICAgIH0sXG4gICAgU2VsZWN0OiB7XG4gICAgICAgIG5vdEZvdW5kQ29udGVudDogJ05vdCBGb3VuZCdcbiAgICB9LFxuICAgIFVwbG9hZDoge1xuICAgICAgICB1cGxvYWRpbmc6ICdVcGxvYWRpbmcuLi4nLFxuICAgICAgICByZW1vdmVGaWxlOiAnUmVtb3ZlIGZpbGUnLFxuICAgICAgICB1cGxvYWRFcnJvcjogJ1VwbG9hZCBlcnJvcicsXG4gICAgICAgIHByZXZpZXdGaWxlOiAnUHJldmlldyBmaWxlJ1xuICAgIH1cbn07IiwiaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbic7XG5cbnZhciBBY3Rpb25CdXR0b24gPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhBY3Rpb25CdXR0b24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gQWN0aW9uQnV0dG9uKHByb3BzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBY3Rpb25CdXR0b24pO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChBY3Rpb25CdXR0b24uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihBY3Rpb25CdXR0b24pKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgICAgX3RoaXMub25DbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIGFjdGlvbkZuID0gX3RoaXMkcHJvcHMuYWN0aW9uRm4sXG4gICAgICAgICAgICAgICAgY2xvc2VNb2RhbCA9IF90aGlzJHByb3BzLmNsb3NlTW9kYWw7XG5cbiAgICAgICAgICAgIGlmIChhY3Rpb25Gbikge1xuICAgICAgICAgICAgICAgIHZhciByZXQgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbkZuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXQgPSBhY3Rpb25GbihjbG9zZU1vZGFsKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXQgPSBhY3Rpb25GbigpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXJldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VNb2RhbCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXQgJiYgcmV0LnRoZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXQudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJdCdzIHVubmVjZXNzYXJ5IHRvIHNldCBsb2FkaW5nPWZhbHNlLCBmb3IgdGhlIE1vZGFsIHdpbGwgYmUgdW5tb3VudGVkIGFmdGVyIGNsb3NlLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VNb2RhbC5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvNjE4M1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhBY3Rpb25CdXR0b24sIFt7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuYXV0b0ZvY3VzKSB7XG4gICAgICAgICAgICAgICAgdmFyICR0aGlzID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICR0aGlzLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dElkKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIHR5cGUgPSBfcHJvcHMudHlwZSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbjtcblxuICAgICAgICAgICAgdmFyIGxvYWRpbmcgPSB0aGlzLnN0YXRlLmxvYWRpbmc7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBCdXR0b24sXG4gICAgICAgICAgICAgICAgeyB0eXBlOiB0eXBlLCBvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssIGxvYWRpbmc6IGxvYWRpbmcgfSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBBY3Rpb25CdXR0b247XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbkJ1dHRvbjsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEaWFsb2cgZnJvbSAncmMtZGlhbG9nJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgYWRkRXZlbnRMaXN0ZW5lciBmcm9tICdyYy11dGlsL2VzL0RvbS9hZGRFdmVudExpc3RlbmVyJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uJztcbmltcG9ydCBMb2NhbGVSZWNlaXZlciBmcm9tICcuLi9sb2NhbGUtcHJvdmlkZXIvTG9jYWxlUmVjZWl2ZXInO1xuaW1wb3J0IHsgZ2V0Q29uZmlybUxvY2FsZSB9IGZyb20gJy4vbG9jYWxlJztcbnZhciBtb3VzZVBvc2l0aW9uID0gdm9pZCAwO1xudmFyIG1vdXNlUG9zaXRpb25FdmVudEJpbmRlZCA9IHZvaWQgMDtcblxudmFyIE1vZGFsID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoTW9kYWwsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gTW9kYWwoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNb2RhbCk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKE1vZGFsLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTW9kYWwpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblxuICAgICAgICBfdGhpcy5oYW5kbGVDYW5jZWwgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIG9uQ2FuY2VsID0gX3RoaXMucHJvcHMub25DYW5jZWw7XG4gICAgICAgICAgICBpZiAob25DYW5jZWwpIHtcbiAgICAgICAgICAgICAgICBvbkNhbmNlbChlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuaGFuZGxlT2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIG9uT2sgPSBfdGhpcy5wcm9wcy5vbk9rO1xuICAgICAgICAgICAgaWYgKG9uT2spIHtcbiAgICAgICAgICAgICAgICBvbk9rKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5yZW5kZXJGb290ZXIgPSBmdW5jdGlvbiAobG9jYWxlKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBva1RleHQgPSBfdGhpcyRwcm9wcy5va1RleHQsXG4gICAgICAgICAgICAgICAgb2tUeXBlID0gX3RoaXMkcHJvcHMub2tUeXBlLFxuICAgICAgICAgICAgICAgIGNhbmNlbFRleHQgPSBfdGhpcyRwcm9wcy5jYW5jZWxUZXh0LFxuICAgICAgICAgICAgICAgIGNvbmZpcm1Mb2FkaW5nID0gX3RoaXMkcHJvcHMuY29uZmlybUxvYWRpbmc7XG5cbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgQnV0dG9uLFxuICAgICAgICAgICAgICAgICAgICB7IG9uQ2xpY2s6IF90aGlzLmhhbmRsZUNhbmNlbCB9LFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxUZXh0IHx8IGxvY2FsZS5jYW5jZWxUZXh0XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBCdXR0b24sXG4gICAgICAgICAgICAgICAgICAgIHsgdHlwZTogb2tUeXBlLCBsb2FkaW5nOiBjb25maXJtTG9hZGluZywgb25DbGljazogX3RoaXMuaGFuZGxlT2sgfSxcbiAgICAgICAgICAgICAgICAgICAgb2tUZXh0IHx8IGxvY2FsZS5va1RleHRcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKE1vZGFsLCBbe1xuICAgICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICAgIGlmIChtb3VzZVBvc2l0aW9uRXZlbnRCaW5kZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDlj6rmnInngrnlh7vkuovku7bmlK/mjIHku47pvKDmoIfkvY3nva7liqjnlLvlsZXlvIBcbiAgICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCAnY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIG1vdXNlUG9zaXRpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGUucGFnZVgsXG4gICAgICAgICAgICAgICAgICAgIHk6IGUucGFnZVlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIC8vIDEwMG1zIOWGheWPkeeUn+i/h+eCueWHu+S6i+S7tu+8jOWImeS7jueCueWHu+S9jee9ruWKqOeUu+WxleekulxuICAgICAgICAgICAgICAgIC8vIOWQpuWImeebtOaOpSB6b29tIOWxleekulxuICAgICAgICAgICAgICAgIC8vIOi/meagt+WPr+S7peWFvOWuuemdnueCueWHu+aWueW8j+WxleW8gFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW91c2VQb3NpdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbW91c2VQb3NpdGlvbkV2ZW50QmluZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIGZvb3RlciA9IF9wcm9wcy5mb290ZXIsXG4gICAgICAgICAgICAgICAgdmlzaWJsZSA9IF9wcm9wcy52aXNpYmxlO1xuXG4gICAgICAgICAgICB2YXIgZGVmYXVsdEZvb3RlciA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgTG9jYWxlUmVjZWl2ZXIsXG4gICAgICAgICAgICAgICAgeyBjb21wb25lbnROYW1lOiAnTW9kYWwnLCBkZWZhdWx0TG9jYWxlOiBnZXRDb25maXJtTG9jYWxlKCkgfSxcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckZvb3RlclxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KERpYWxvZywgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgZm9vdGVyOiBmb290ZXIgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRGb290ZXIgOiBmb290ZXIsIHZpc2libGU6IHZpc2libGUsIG1vdXNlUG9zaXRpb246IG1vdXNlUG9zaXRpb24sIG9uQ2xvc2U6IHRoaXMuaGFuZGxlQ2FuY2VsIH0pKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBNb2RhbDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG5cbk1vZGFsLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwcmVmaXhDbHM6ICdhbnQtbW9kYWwnLFxuICAgIHdpZHRoOiA1MjAsXG4gICAgdHJhbnNpdGlvbk5hbWU6ICd6b29tJyxcbiAgICBtYXNrVHJhbnNpdGlvbk5hbWU6ICdmYWRlJyxcbiAgICBjb25maXJtTG9hZGluZzogZmFsc2UsXG4gICAgdmlzaWJsZTogZmFsc2UsXG4gICAgb2tUeXBlOiAncHJpbWFyeSdcbn07XG5Nb2RhbC5wcm9wVHlwZXMgPSB7XG4gICAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uT2s6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBva1RleHQ6IFByb3BUeXBlcy5ub2RlLFxuICAgIGNhbmNlbFRleHQ6IFByb3BUeXBlcy5ub2RlLFxuICAgIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgY29uZmlybUxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxuICAgIHZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGFsaWduOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGZvb3RlcjogUHJvcFR5cGVzLm5vZGUsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5ub2RlLFxuICAgIGNsb3NhYmxlOiBQcm9wVHlwZXMuYm9vbFxufTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuXG52YXIgX3RoaXMgPSB0aGlzO1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9pY29uJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnLi9Nb2RhbCc7XG5pbXBvcnQgQWN0aW9uQnV0dG9uIGZyb20gJy4vQWN0aW9uQnV0dG9uJztcbmltcG9ydCB7IGdldENvbmZpcm1Mb2NhbGUgfSBmcm9tICcuL2xvY2FsZSc7XG52YXIgSVNfUkVBQ1RfMTYgPSAhIVJlYWN0RE9NLmNyZWF0ZVBvcnRhbDtcbnZhciBDb25maXJtRGlhbG9nID0gZnVuY3Rpb24gQ29uZmlybURpYWxvZyhwcm9wcykge1xuICAgIHZhciBvbkNhbmNlbCA9IHByb3BzLm9uQ2FuY2VsLFxuICAgICAgICBvbk9rID0gcHJvcHMub25PayxcbiAgICAgICAgY2xvc2UgPSBwcm9wcy5jbG9zZSxcbiAgICAgICAgekluZGV4ID0gcHJvcHMuekluZGV4LFxuICAgICAgICBhZnRlckNsb3NlID0gcHJvcHMuYWZ0ZXJDbG9zZSxcbiAgICAgICAgdmlzaWJsZSA9IHByb3BzLnZpc2libGUsXG4gICAgICAgIGtleWJvYXJkID0gcHJvcHMua2V5Ym9hcmQ7XG5cbiAgICB2YXIgaWNvblR5cGUgPSBwcm9wcy5pY29uVHlwZSB8fCAncXVlc3Rpb24tY2lyY2xlJztcbiAgICB2YXIgb2tUeXBlID0gcHJvcHMub2tUeXBlIHx8ICdwcmltYXJ5JztcbiAgICB2YXIgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzIHx8ICdhbnQtY29uZmlybSc7XG4gICAgLy8g6buY6K6k5Li6IHRydWXvvIzkv53mjIHlkJHkuIvlhbzlrrlcbiAgICB2YXIgb2tDYW5jZWwgPSAnb2tDYW5jZWwnIGluIHByb3BzID8gcHJvcHMub2tDYW5jZWwgOiB0cnVlO1xuICAgIHZhciB3aWR0aCA9IHByb3BzLndpZHRoIHx8IDQxNjtcbiAgICB2YXIgc3R5bGUgPSBwcm9wcy5zdHlsZSB8fCB7fTtcbiAgICAvLyDpu5jorqTkuLogZmFsc2XvvIzkv53mjIHml6fniYjpu5jorqTooYzkuLpcbiAgICB2YXIgbWFza0Nsb3NhYmxlID0gcHJvcHMubWFza0Nsb3NhYmxlID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IHByb3BzLm1hc2tDbG9zYWJsZTtcbiAgICB2YXIgcnVudGltZUxvY2FsZSA9IGdldENvbmZpcm1Mb2NhbGUoKTtcbiAgICB2YXIgb2tUZXh0ID0gcHJvcHMub2tUZXh0IHx8IChva0NhbmNlbCA/IHJ1bnRpbWVMb2NhbGUub2tUZXh0IDogcnVudGltZUxvY2FsZS5qdXN0T2tUZXh0KTtcbiAgICB2YXIgY2FuY2VsVGV4dCA9IHByb3BzLmNhbmNlbFRleHQgfHwgcnVudGltZUxvY2FsZS5jYW5jZWxUZXh0O1xuICAgIHZhciBjbGFzc1N0cmluZyA9IGNsYXNzTmFtZXMocHJlZml4Q2xzLCBwcmVmaXhDbHMgKyAnLScgKyBwcm9wcy50eXBlLCBwcm9wcy5jbGFzc05hbWUpO1xuICAgIHZhciBjYW5jZWxCdXR0b24gPSBva0NhbmNlbCAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBBY3Rpb25CdXR0b24sXG4gICAgICAgIHsgYWN0aW9uRm46IG9uQ2FuY2VsLCBjbG9zZU1vZGFsOiBjbG9zZSB9LFxuICAgICAgICBjYW5jZWxUZXh0XG4gICAgKTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgRGlhbG9nLFxuICAgICAgICB7IGNsYXNzTmFtZTogY2xhc3NTdHJpbmcsIG9uQ2FuY2VsOiBjbG9zZS5iaW5kKF90aGlzLCB7IHRyaWdnZXJDYW5jZWw6IHRydWUgfSksIHZpc2libGU6IHZpc2libGUsIHRpdGxlOiAnJywgdHJhbnNpdGlvbk5hbWU6ICd6b29tJywgZm9vdGVyOiAnJywgbWFza1RyYW5zaXRpb25OYW1lOiAnZmFkZScsIG1hc2tDbG9zYWJsZTogbWFza0Nsb3NhYmxlLCBzdHlsZTogc3R5bGUsIHdpZHRoOiB3aWR0aCwgekluZGV4OiB6SW5kZXgsIGFmdGVyQ2xvc2U6IGFmdGVyQ2xvc2UsIGtleWJvYXJkOiBrZXlib2FyZCB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1ib2R5LXdyYXBwZXInIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWJvZHknIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7IHR5cGU6IGljb25UeXBlIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctdGl0bGUnIH0sXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnRpdGxlXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctY29udGVudCcgfSxcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuY29udGVudFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWJ0bnMnIH0sXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIEFjdGlvbkJ1dHRvbixcbiAgICAgICAgICAgICAgICAgICAgeyB0eXBlOiBva1R5cGUsIGFjdGlvbkZuOiBvbk9rLCBjbG9zZU1vZGFsOiBjbG9zZSwgYXV0b0ZvY3VzOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgICAgIG9rVGV4dFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlybShjb25maWcpIHtcbiAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChJU19SRUFDVF8xNikge1xuICAgICAgICAgICAgcmVuZGVyKF9leHRlbmRzKHt9LCBjb25maWcsIHsgY2xvc2U6IGNsb3NlLCB2aXNpYmxlOiBmYWxzZSwgYWZ0ZXJDbG9zZTogZGVzdHJveS5iaW5kLmFwcGx5KGRlc3Ryb3ksIFt0aGlzXS5jb25jYXQoYXJncykpIH0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlc3Ryb3kuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICB2YXIgdW5tb3VudFJlc3VsdCA9IFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUoZGl2KTtcbiAgICAgICAgaWYgKHVubW91bnRSZXN1bHQgJiYgZGl2LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIGRpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRpdik7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRyaWdnZXJDYW5jZWwgPSBhcmdzICYmIGFyZ3MubGVuZ3RoICYmIGFyZ3Muc29tZShmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJhbSAmJiBwYXJhbS50cmlnZ2VyQ2FuY2VsO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGNvbmZpZy5vbkNhbmNlbCAmJiB0cmlnZ2VyQ2FuY2VsKSB7XG4gICAgICAgICAgICBjb25maWcub25DYW5jZWwuYXBwbHkoY29uZmlnLCBhcmdzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiByZW5kZXIocHJvcHMpIHtcbiAgICAgICAgUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29uZmlybURpYWxvZywgcHJvcHMpLCBkaXYpO1xuICAgIH1cbiAgICByZW5kZXIoX2V4dGVuZHMoe30sIGNvbmZpZywgeyB2aXNpYmxlOiB0cnVlLCBjbG9zZTogY2xvc2UgfSkpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGRlc3Ryb3k6IGNsb3NlXG4gICAgfTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vTW9kYWwnO1xuaW1wb3J0IGNvbmZpcm0gZnJvbSAnLi9jb25maXJtJztcbk1vZGFsLmluZm8gPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgY29uZmlnID0gX2V4dGVuZHMoeyB0eXBlOiAnaW5mbycsIGljb25UeXBlOiAnaW5mby1jaXJjbGUnLCBva0NhbmNlbDogZmFsc2UgfSwgcHJvcHMpO1xuICAgIHJldHVybiBjb25maXJtKGNvbmZpZyk7XG59O1xuTW9kYWwuc3VjY2VzcyA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBjb25maWcgPSBfZXh0ZW5kcyh7IHR5cGU6ICdzdWNjZXNzJywgaWNvblR5cGU6ICdjaGVjay1jaXJjbGUnLCBva0NhbmNlbDogZmFsc2UgfSwgcHJvcHMpO1xuICAgIHJldHVybiBjb25maXJtKGNvbmZpZyk7XG59O1xuTW9kYWwuZXJyb3IgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgY29uZmlnID0gX2V4dGVuZHMoeyB0eXBlOiAnZXJyb3InLCBpY29uVHlwZTogJ2Nyb3NzLWNpcmNsZScsIG9rQ2FuY2VsOiBmYWxzZSB9LCBwcm9wcyk7XG4gICAgcmV0dXJuIGNvbmZpcm0oY29uZmlnKTtcbn07XG5Nb2RhbC53YXJuaW5nID0gTW9kYWwud2FybiA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBjb25maWcgPSBfZXh0ZW5kcyh7IHR5cGU6ICd3YXJuaW5nJywgaWNvblR5cGU6ICdleGNsYW1hdGlvbi1jaXJjbGUnLCBva0NhbmNlbDogZmFsc2UgfSwgcHJvcHMpO1xuICAgIHJldHVybiBjb25maXJtKGNvbmZpZyk7XG59O1xuTW9kYWwuY29uZmlybSA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciBjb25maWcgPSBfZXh0ZW5kcyh7IHR5cGU6ICdjb25maXJtJywgb2tDYW5jZWw6IHRydWUgfSwgcHJvcHMpO1xuICAgIHJldHVybiBjb25maXJtKGNvbmZpZyk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTW9kYWw7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gJy4uL2xvY2FsZS1wcm92aWRlci9kZWZhdWx0JztcbnZhciBydW50aW1lTG9jYWxlID0gX2V4dGVuZHMoe30sIGRlZmF1bHRMb2NhbGUuTW9kYWwpO1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUNvbmZpcm1Mb2NhbGUobmV3TG9jYWxlKSB7XG4gICAgaWYgKG5ld0xvY2FsZSkge1xuICAgICAgICBydW50aW1lTG9jYWxlID0gX2V4dGVuZHMoe30sIHJ1bnRpbWVMb2NhbGUsIG5ld0xvY2FsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcnVudGltZUxvY2FsZSA9IF9leHRlbmRzKHt9LCBkZWZhdWx0TG9jYWxlLk1vZGFsKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29uZmlybUxvY2FsZSgpIHtcbiAgICByZXR1cm4gcnVudGltZUxvY2FsZTtcbn0iLCJpbXBvcnQgJy4uLy4uL3N0eWxlL2luZGV4LmNzcyc7XG5pbXBvcnQgJy4vaW5kZXguY3NzJztcbi8vIHN0eWxlIGRlcGVuZGVuY2llc1xuaW1wb3J0ICcuLi8uLi9idXR0b24vc3R5bGUvY3NzJzsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXguY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xudmFyIF9fcmVzdCA9IHRoaXMgJiYgdGhpcy5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICAgIH1pZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgIH1yZXR1cm4gdDtcbn07XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJjU2VsZWN0LCB7IE9wdGlvbiwgT3B0R3JvdXAgfSBmcm9tICdyYy1zZWxlY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgTG9jYWxlUmVjZWl2ZXIgZnJvbSAnLi4vbG9jYWxlLXByb3ZpZGVyL0xvY2FsZVJlY2VpdmVyJztcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gJy4uL2xvY2FsZS1wcm92aWRlci9kZWZhdWx0JztcbnZhciBTZWxlY3RQcm9wVHlwZXMgPSB7XG4gICAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ2xhcmdlJywgJ3NtYWxsJ10pLFxuICAgIGNvbWJvYm94OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBub3RGb3VuZENvbnRlbnQ6IFByb3BUeXBlcy5hbnksXG4gICAgc2hvd1NlYXJjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgb3B0aW9uTGFiZWxQcm9wOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRyYW5zaXRpb25OYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNob2ljZVRyYW5zaXRpb25OYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuLy8gPT4gSXQgaXMgbmVlZGxlc3MgdG8gZXhwb3J0IHRoZSBkZWNsYXJhdGlvbiBvZiBiZWxvdyB0d28gaW5uZXIgY29tcG9uZW50cy5cbi8vIGV4cG9ydCB7IE9wdGlvbiwgT3B0R3JvdXAgfTtcblxudmFyIFNlbGVjdCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFNlbGVjdCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBTZWxlY3QoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTZWxlY3QpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChTZWxlY3QuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTZWxlY3QpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcblxuICAgICAgICBfdGhpcy5zYXZlU2VsZWN0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIF90aGlzLnJjU2VsZWN0ID0gbm9kZTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMucmVuZGVyU2VsZWN0ID0gZnVuY3Rpb24gKGxvY2FsZSkge1xuICAgICAgICAgICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBwcmVmaXhDbHMgPSBfYS5wcmVmaXhDbHMsXG4gICAgICAgICAgICAgICAgX2EkY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IF9hJGNsYXNzTmFtZSA9PT0gdW5kZWZpbmVkID8gJycgOiBfYSRjbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgc2l6ZSA9IF9hLnNpemUsXG4gICAgICAgICAgICAgICAgbW9kZSA9IF9hLm1vZGUsXG4gICAgICAgICAgICAgICAgcmVzdFByb3BzID0gX19yZXN0KF9hLCBbXCJwcmVmaXhDbHNcIiwgXCJjbGFzc05hbWVcIiwgXCJzaXplXCIsIFwibW9kZVwiXSk7XG4gICAgICAgICAgICB2YXIgY2xzID0gY2xhc3NOYW1lcygoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLWxnJywgc2l6ZSA9PT0gJ2xhcmdlJyksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy1zbScsIHNpemUgPT09ICdzbWFsbCcpLCBfY2xhc3NOYW1lcyksIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB2YXIgb3B0aW9uTGFiZWxQcm9wID0gX3RoaXMucHJvcHMub3B0aW9uTGFiZWxQcm9wO1xuXG4gICAgICAgICAgICB2YXIgaXNDb21ib2JveCA9IG1vZGUgPT09ICdjb21ib2JveCc7XG4gICAgICAgICAgICBpZiAoaXNDb21ib2JveCkge1xuICAgICAgICAgICAgICAgIC8vIGNoaWxkcmVuIOW4piBkb20g57uT5p6E5pe277yM5peg5rOV5aGr5YWl6L6T5YWl5qGGXG4gICAgICAgICAgICAgICAgb3B0aW9uTGFiZWxQcm9wID0gb3B0aW9uTGFiZWxQcm9wIHx8ICd2YWx1ZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbW9kZUNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBtdWx0aXBsZTogbW9kZSA9PT0gJ211bHRpcGxlJyxcbiAgICAgICAgICAgICAgICB0YWdzOiBtb2RlID09PSAndGFncycsXG4gICAgICAgICAgICAgICAgY29tYm9ib3g6IGlzQ29tYm9ib3hcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChSY1NlbGVjdCwgX2V4dGVuZHMoe30sIHJlc3RQcm9wcywgbW9kZUNvbmZpZywgeyBwcmVmaXhDbHM6IHByZWZpeENscywgY2xhc3NOYW1lOiBjbHMsIG9wdGlvbkxhYmVsUHJvcDogb3B0aW9uTGFiZWxQcm9wIHx8ICdjaGlsZHJlbicsIG5vdEZvdW5kQ29udGVudDogX3RoaXMuZ2V0Tm90Rm91bmRDb250ZW50KGxvY2FsZSksIHJlZjogX3RoaXMuc2F2ZVNlbGVjdCB9KSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoU2VsZWN0LCBbe1xuICAgICAgICBrZXk6ICdmb2N1cycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgICAgICAgIHRoaXMucmNTZWxlY3QuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnYmx1cicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBibHVyKCkge1xuICAgICAgICAgICAgdGhpcy5yY1NlbGVjdC5ibHVyKCk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2dldE5vdEZvdW5kQ29udGVudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXROb3RGb3VuZENvbnRlbnQobG9jYWxlKSB7XG4gICAgICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBub3RGb3VuZENvbnRlbnQgPSBfcHJvcHMubm90Rm91bmRDb250ZW50LFxuICAgICAgICAgICAgICAgIG1vZGUgPSBfcHJvcHMubW9kZTtcblxuICAgICAgICAgICAgdmFyIGlzQ29tYm9ib3ggPSBtb2RlID09PSAnY29tYm9ib3gnO1xuICAgICAgICAgICAgaWYgKGlzQ29tYm9ib3gpIHtcbiAgICAgICAgICAgICAgICAvLyBBdXRvQ29tcGxldGUgZG9uJ3QgaGF2ZSBub3RGb3VuZENvbnRlbnQgZGVmYXVsdGx5XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vdEZvdW5kQ29udGVudCA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IG5vdEZvdW5kQ29udGVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBub3RGb3VuZENvbnRlbnQgPT09IHVuZGVmaW5lZCA/IGxvY2FsZS5ub3RGb3VuZENvbnRlbnQgOiBub3RGb3VuZENvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBMb2NhbGVSZWNlaXZlcixcbiAgICAgICAgICAgICAgICB7IGNvbXBvbmVudE5hbWU6ICdTZWxlY3QnLCBkZWZhdWx0TG9jYWxlOiBkZWZhdWx0TG9jYWxlLlNlbGVjdCB9LFxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyU2VsZWN0XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFNlbGVjdDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0O1xuXG5TZWxlY3QuT3B0aW9uID0gT3B0aW9uO1xuU2VsZWN0Lk9wdEdyb3VwID0gT3B0R3JvdXA7XG5TZWxlY3QuZGVmYXVsdFByb3BzID0ge1xuICAgIHByZWZpeENsczogJ2FudC1zZWxlY3QnLFxuICAgIHNob3dTZWFyY2g6IGZhbHNlLFxuICAgIHRyYW5zaXRpb25OYW1lOiAnc2xpZGUtdXAnLFxuICAgIGNob2ljZVRyYW5zaXRpb25OYW1lOiAnem9vbSdcbn07XG5TZWxlY3QucHJvcFR5cGVzID0gU2VsZWN0UHJvcFR5cGVzOyIsImltcG9ydCAnLi4vLi4vc3R5bGUvaW5kZXguY3NzJztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuLy8gc3R5bGUgZGVwZW5kZW5jaWVzXG5pbXBvcnQgJy4uLy4uL2lucHV0L3N0eWxlL2Nzcyc7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgbG9jYWxlID0ge1xuICAgIHBsYWNlaG9sZGVyOiAnU2VsZWN0IHRpbWUnXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiBzdHlsZWxpbnQtZGlzYWJsZSBhdC1ydWxlLWVtcHR5LWxpbmUtYmVmb3JlLGF0LXJ1bGUtbmFtZS1zcGFjZS1hZnRlcixhdC1ydWxlLW5vLXVua25vd24gKi9cXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBuby1kdXBsaWNhdGUtc2VsZWN0b3JzICovXFxuLyogc3R5bGVsaW50LWRpc2FibGUgZGVjbGFyYXRpb24tYmFuZy1zcGFjZS1iZWZvcmUsbm8tZHVwbGljYXRlLXNlbGVjdG9ycyAqL1xcbi8qIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLWJhbmctc3BhY2UtYmVmb3JlLG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnMgKi9cXG4uYW50LW1vZGFsIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9ub3NwYWNlZCBOdW1iZXJcXFwiLCBcXFwiQ2hpbmVzZSBRdW90ZVxcXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiUGluZ0ZhbmcgU0NcXFwiLCBcXFwiSGlyYWdpbm8gU2FucyBHQlxcXCIsIFxcXCJNaWNyb3NvZnQgWWFIZWlcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogYXV0bztcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgdG9wOiAxMDBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAyNHB4O1xcbn1cXG4uYW50LW1vZGFsLXdyYXAge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxMDAwO1xcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcbiAgb3V0bGluZTogMDtcXG59XFxuLmFudC1tb2RhbC10aXRsZSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMjJweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTtcXG59XFxuLmFudC1tb2RhbC1jb250ZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG59XFxuLmFudC1tb2RhbC1jbG9zZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDA7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMTA7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIC4zcztcXG4gIHRyYW5zaXRpb246IGNvbG9yIC4zcztcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgb3V0bGluZTogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5hbnQtbW9kYWwtY2xvc2UteCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxuICB3aWR0aDogNTZweDtcXG4gIGhlaWdodDogNTZweDtcXG4gIGxpbmUtaGVpZ2h0OiA1NnB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4uYW50LW1vZGFsLWNsb3NlLXg6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYzM1xcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiYW50aWNvblxcXCIgIWltcG9ydGFudDtcXG59XFxuLmFudC1tb2RhbC1jbG9zZTpmb2N1cyxcXG4uYW50LW1vZGFsLWNsb3NlOmhvdmVyIHtcXG4gIGNvbG9yOiAjNDQ0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG4uYW50LW1vZGFsLWhlYWRlciB7XFxuICBwYWRkaW5nOiAxNnB4IDI0cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZThlOGU4O1xcbn1cXG4uYW50LW1vZGFsLWJvZHkge1xcbiAgcGFkZGluZzogMjRweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcbi5hbnQtbW9kYWwtZm9vdGVyIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlOGU4O1xcbiAgcGFkZGluZzogMTBweCAxNnB4O1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcXG59XFxuLmFudC1tb2RhbC1mb290ZXIgYnV0dG9uICsgYnV0dG9uIHtcXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4uYW50LW1vZGFsLnpvb20tZW50ZXIsXFxuLmFudC1tb2RhbC56b29tLWFwcGVhciB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XFxuICAgICAgLW1zLXRyYW5zZm9ybTogbm9uZTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLmFudC1tb2RhbC1tYXNrIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNzM3Mzc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgei1pbmRleDogMTAwMDtcXG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT01MCk7XFxufVxcbi5hbnQtbW9kYWwtbWFzay1oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmFudC1tb2RhbC1vcGVuIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLmFudC1tb2RhbCB7XFxuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gIH1cXG4gIC52ZXJ0aWNhbC1jZW50ZXItbW9kYWwgLmFudC1tb2RhbCB7XFxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAgIC13ZWJraXQtZmxleDogMTtcXG4gICAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICAgIGZsZXg6IDE7XFxuICB9XFxufVxcbi5hbnQtY29uZmlybSAuYW50LW1vZGFsLWhlYWRlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uYW50LWNvbmZpcm0gLmFudC1tb2RhbC1jbG9zZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uYW50LWNvbmZpcm0gLmFudC1tb2RhbC1ib2R5IHtcXG4gIHBhZGRpbmc6IDMycHggMzJweCAyNHB4O1xcbn1cXG4uYW50LWNvbmZpcm0tYm9keS13cmFwcGVyIHtcXG4gIHpvb206IDE7XFxufVxcbi5hbnQtY29uZmlybS1ib2R5LXdyYXBwZXI6YmVmb3JlLFxcbi5hbnQtY29uZmlybS1ib2R5LXdyYXBwZXI6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgZGlzcGxheTogdGFibGU7XFxufVxcbi5hbnQtY29uZmlybS1ib2R5LXdyYXBwZXI6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBmb250LXNpemU6IDA7XFxuICBoZWlnaHQ6IDA7XFxufVxcbi5hbnQtY29uZmlybS1ib2R5IC5hbnQtY29uZmlybS10aXRsZSB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMjJweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcbi5hbnQtY29uZmlybS1ib2R5IC5hbnQtY29uZmlybS1jb250ZW50IHtcXG4gIG1hcmdpbi1sZWZ0OiAzOHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxufVxcbi5hbnQtY29uZmlybS1ib2R5ID4gLmFudGljb24ge1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5hbnQtY29uZmlybSAuYW50LWNvbmZpcm0tYnRucyB7XFxuICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG4uYW50LWNvbmZpcm0gLmFudC1jb25maXJtLWJ0bnMgYnV0dG9uICsgYnV0dG9uIHtcXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4uYW50LWNvbmZpcm0tZXJyb3IgLmFudC1jb25maXJtLWJvZHkgPiAuYW50aWNvbiB7XFxuICBjb2xvcjogI2Y1MjIyZDtcXG59XFxuLmFudC1jb25maXJtLXdhcm5pbmcgLmFudC1jb25maXJtLWJvZHkgPiAuYW50aWNvbixcXG4uYW50LWNvbmZpcm0tY29uZmlybSAuYW50LWNvbmZpcm0tYm9keSA+IC5hbnRpY29uIHtcXG4gIGNvbG9yOiAjZmFhZDE0O1xcbn1cXG4uYW50LWNvbmZpcm0taW5mbyAuYW50LWNvbmZpcm0tYm9keSA+IC5hbnRpY29uIHtcXG4gIGNvbG9yOiAjMTg5MGZmO1xcbn1cXG4uYW50LWNvbmZpcm0tc3VjY2VzcyAuYW50LWNvbmZpcm0tYm9keSA+IC5hbnRpY29uIHtcXG4gIGNvbG9yOiAjNTJjNDFhO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogc3R5bGVsaW50LWRpc2FibGUgYXQtcnVsZS1lbXB0eS1saW5lLWJlZm9yZSxhdC1ydWxlLW5hbWUtc3BhY2UtYWZ0ZXIsYXQtcnVsZS1uby11bmtub3duICovXFxuLyogc3R5bGVsaW50LWRpc2FibGUgbm8tZHVwbGljYXRlLXNlbGVjdG9ycyAqL1xcbi8qIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLWJhbmctc3BhY2UtYmVmb3JlLG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnMgKi9cXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1iYW5nLXNwYWNlLWJlZm9yZSxuby1kdXBsaWNhdGUtc2VsZWN0b3JzICovXFxuLmFudC1zZWxlY3Qge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb25vc3BhY2VkIE51bWJlclxcXCIsIFxcXCJDaGluZXNlIFF1b3RlXFxcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJQaW5nRmFuZyBTQ1xcXCIsIFxcXCJIaXJhZ2lubyBTYW5zIEdCXFxcIiwgXFxcIk1pY3Jvc29mdCBZYUhlaVxcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmFudC1zZWxlY3QgdWwsXFxuLmFudC1zZWxlY3Qgb2wge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbi5hbnQtc2VsZWN0ID4gdWwgPiBsaSA+IGEge1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcbi5hbnQtc2VsZWN0LWFycm93IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgcmlnaHQ6IDExcHg7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIG1hcmdpbi10b3A6IC02cHg7XFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLmFudC1zZWxlY3QtYXJyb3c6YmVmb3JlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJhbnRpY29uXFxcIiAhaW1wb3J0YW50O1xcbn1cXG4uYW50LXNlbGVjdC1hcnJvdyAqIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5hbnQtc2VsZWN0LWFycm93OmJlZm9yZSB7XFxuICBjb250ZW50OiAnXFxcXEU2MUQnO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuM3M7XFxuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuM3M7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcywgLXdlYmtpdC10cmFuc2Zvcm0gLjNzO1xcbn1cXG4uYW50LXNlbGVjdC1zZWxlY3Rpb24ge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMS4wMnB4O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XFxufVxcbi5hbnQtc2VsZWN0LXNlbGVjdGlvbjpob3ZlciB7XFxuICBib3JkZXItY29sb3I6ICM0MGE5ZmY7XFxufVxcbi5hbnQtc2VsZWN0LWZvY3VzZWQgLmFudC1zZWxlY3Qtc2VsZWN0aW9uLFxcbi5hbnQtc2VsZWN0LXNlbGVjdGlvbjpmb2N1cyxcXG4uYW50LXNlbGVjdC1zZWxlY3Rpb246YWN0aXZlIHtcXG4gIGJvcmRlci1jb2xvcjogIzQwYTlmZjtcXG4gIG91dGxpbmU6IDA7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKDI0LCAxNDQsIDI1NSwgMC4yKTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoMjQsIDE0NCwgMjU1LCAwLjIpO1xcbn1cXG4uYW50LXNlbGVjdC1zZWxlY3Rpb25fX2NsZWFyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDExcHg7XFxuICB6LWluZGV4OiAxO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHRvcDogNTAlO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICB3aWR0aDogMTJweDtcXG4gIGhlaWdodDogMTJweDtcXG4gIG1hcmdpbi10b3A6IC02cHg7XFxuICBsaW5lLWhlaWdodDogMTJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLCBvcGFjaXR5IDAuMTVzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2UsIG9wYWNpdHkgMC4xNXMgZWFzZTtcXG59XFxuLmFudC1zZWxlY3Qtc2VsZWN0aW9uX19jbGVhcjpiZWZvcmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LWZhbWlseTogJ2FudGljb24nO1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYyRVxcXCI7XFxufVxcbi5hbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2xlYXI6aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxufVxcbi5hbnQtc2VsZWN0LXNlbGVjdGlvbjpob3ZlciAuYW50LXNlbGVjdC1zZWxlY3Rpb25fX2NsZWFyIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5hbnQtc2VsZWN0LXNlbGVjdGlvbi1zZWxlY3RlZC12YWx1ZSB7XFxuICBmbG9hdDogbGVmdDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbn1cXG4uYW50LXNlbGVjdC1kaXNhYmxlZCB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG59XFxuLmFudC1zZWxlY3QtZGlzYWJsZWQgLmFudC1zZWxlY3Qtc2VsZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4uYW50LXNlbGVjdC1kaXNhYmxlZCAuYW50LXNlbGVjdC1zZWxlY3Rpb246aG92ZXIsXFxuLmFudC1zZWxlY3QtZGlzYWJsZWQgLmFudC1zZWxlY3Qtc2VsZWN0aW9uOmZvY3VzLFxcbi5hbnQtc2VsZWN0LWRpc2FibGVkIC5hbnQtc2VsZWN0LXNlbGVjdGlvbjphY3RpdmUge1xcbiAgYm9yZGVyLWNvbG9yOiAjZDlkOWQ5O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xcbn1cXG4uYW50LXNlbGVjdC1kaXNhYmxlZCAuYW50LXNlbGVjdC1zZWxlY3Rpb25fX2NsZWFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLmFudC1zZWxlY3QtZGlzYWJsZWQgLmFudC1zZWxlY3Qtc2VsZWN0aW9uLS1tdWx0aXBsZSAuYW50LXNlbGVjdC1zZWxlY3Rpb25fX2Nob2ljZSB7XFxuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xcbiAgY29sb3I6ICNhYWE7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG4uYW50LXNlbGVjdC1kaXNhYmxlZCAuYW50LXNlbGVjdC1zZWxlY3Rpb24tLW11bHRpcGxlIC5hbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2hvaWNlX19yZW1vdmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmFudC1zZWxlY3Qtc2VsZWN0aW9uLS1zaW5nbGUge1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYW50LXNlbGVjdC1zZWxlY3Rpb25fX3JlbmRlcmVkIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWxlZnQ6IDExcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDExcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG59XFxuLmFudC1zZWxlY3Qtc2VsZWN0aW9uX19yZW5kZXJlZDphZnRlciB7XFxuICBjb250ZW50OiAnLic7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAwO1xcbn1cXG4uYW50LXNlbGVjdC1sZyB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5hbnQtc2VsZWN0LWxnIC5hbnQtc2VsZWN0LXNlbGVjdGlvbi0tc2luZ2xlIHtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuLmFudC1zZWxlY3QtbGcgLmFudC1zZWxlY3Qtc2VsZWN0aW9uX19yZW5kZXJlZCB7XFxuICBsaW5lLWhlaWdodDogMzhweDtcXG59XFxuLmFudC1zZWxlY3QtbGcgLmFudC1zZWxlY3Qtc2VsZWN0aW9uLS1tdWx0aXBsZSB7XFxuICBtaW4taGVpZ2h0OiA0MHB4O1xcbn1cXG4uYW50LXNlbGVjdC1sZyAuYW50LXNlbGVjdC1zZWxlY3Rpb24tLW11bHRpcGxlIC5hbnQtc2VsZWN0LXNlbGVjdGlvbl9fcmVuZGVyZWQgbGkge1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDMycHg7XFxufVxcbi5hbnQtc2VsZWN0LWxnIC5hbnQtc2VsZWN0LXNlbGVjdGlvbi0tbXVsdGlwbGUgLmFudC1zZWxlY3Qtc2VsZWN0aW9uX19jbGVhciB7XFxuICB0b3A6IDIwcHg7XFxufVxcbi5hbnQtc2VsZWN0LXNtIC5hbnQtc2VsZWN0LXNlbGVjdGlvbi0tc2luZ2xlIHtcXG4gIGhlaWdodDogMjRweDtcXG59XFxuLmFudC1zZWxlY3Qtc20gLmFudC1zZWxlY3Qtc2VsZWN0aW9uX19yZW5kZXJlZCB7XFxuICBsaW5lLWhlaWdodDogMjJweDtcXG4gIG1hcmdpbjogMCA3cHg7XFxufVxcbi5hbnQtc2VsZWN0LXNtIC5hbnQtc2VsZWN0LXNlbGVjdGlvbi0tbXVsdGlwbGUge1xcbiAgbWluLWhlaWdodDogMjRweDtcXG59XFxuLmFudC1zZWxlY3Qtc20gLmFudC1zZWxlY3Qtc2VsZWN0aW9uLS1tdWx0aXBsZSAuYW50LXNlbGVjdC1zZWxlY3Rpb25fX3JlbmRlcmVkIGxpIHtcXG4gIGhlaWdodDogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xcbn1cXG4uYW50LXNlbGVjdC1zbSAuYW50LXNlbGVjdC1zZWxlY3Rpb24tLW11bHRpcGxlIC5hbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2xlYXIge1xcbiAgdG9wOiAxMnB4O1xcbn1cXG4uYW50LXNlbGVjdC1zbSAuYW50LXNlbGVjdC1zZWxlY3Rpb25fX2NsZWFyLFxcbi5hbnQtc2VsZWN0LXNtIC5hbnQtc2VsZWN0LWFycm93IHtcXG4gIHJpZ2h0OiA4cHg7XFxufVxcbi5hbnQtc2VsZWN0LWRpc2FibGVkIC5hbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2hvaWNlX19yZW1vdmUge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbi5hbnQtc2VsZWN0LWRpc2FibGVkIC5hbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2hvaWNlX19yZW1vdmU6aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxufVxcbi5hbnQtc2VsZWN0LXNlYXJjaF9fZmllbGRfX3dyYXAge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYW50LXNlbGVjdC1zZWxlY3Rpb25fX3BsYWNlaG9sZGVyLFxcbi5hbnQtc2VsZWN0LXNlYXJjaF9fZmllbGRfX3BsYWNlaG9sZGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiA5cHg7XFxuICBjb2xvcjogI2JmYmZiZjtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogLTEwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuLmFudC1zZWxlY3Qtc2VhcmNoX19maWVsZF9fcGxhY2Vob2xkZXIge1xcbiAgbGVmdDogMTJweDtcXG59XFxuLmFudC1zZWxlY3Qtc2VhcmNoX19maWVsZF9fbWlycm9yIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IC05OTk5cHg7XFxuICB3aGl0ZS1zcGFjZTogcHJlO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5hbnQtc2VsZWN0LXNlYXJjaC0taW5saW5lIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uYW50LXNlbGVjdC1zZWFyY2gtLWlubGluZSAuYW50LXNlbGVjdC1zZWFyY2hfX2ZpZWxkX193cmFwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uYW50LXNlbGVjdC1zZWFyY2gtLWlubGluZSAuYW50LXNlbGVjdC1zZWFyY2hfX2ZpZWxkIHtcXG4gIGJvcmRlci13aWR0aDogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBvdXRsaW5lOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbi5hbnQtc2VsZWN0LXNlYXJjaC0taW5saW5lID4gaSB7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcbi5hbnQtc2VsZWN0LXNlbGVjdGlvbi0tbXVsdGlwbGUge1xcbiAgbWluLWhlaWdodDogMzJweDtcXG4gIGN1cnNvcjogdGV4dDtcXG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XFxuICB6b29tOiAxO1xcbn1cXG4uYW50LXNlbGVjdC1zZWxlY3Rpb24tLW11bHRpcGxlOmJlZm9yZSxcXG4uYW50LXNlbGVjdC1zZWxlY3Rpb24tLW11bHRpcGxlOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbn1cXG4uYW50LXNlbGVjdC1zZWxlY3Rpb24tLW11bHRpcGxlOmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgZm9udC1zaXplOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG4uYW50LXNlbGVjdC1zZWxlY3Rpb24tLW11bHRpcGxlIC5hbnQtc2VsZWN0LXNlYXJjaC0taW5saW5lIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgcG9zaXRpb246IHN0YXRpYztcXG4gIHdpZHRoOiBhdXRvO1xcbiAgcGFkZGluZzogMDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuLmFudC1zZWxlY3Qtc2VsZWN0aW9uLS1tdWx0aXBsZSAuYW50LXNlbGVjdC1zZWFyY2gtLWlubGluZSAuYW50LXNlbGVjdC1zZWFyY2hfX2ZpZWxkIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHdpZHRoOiAwLjc1ZW07XFxufVxcbi5hbnQtc2VsZWN0LXNlbGVjdGlvbi0tbXVsdGlwbGUgLmFudC1zZWxlY3Qtc2VsZWN0aW9uX19yZW5kZXJlZCB7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogLTNweDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuLmFudC1zZWxlY3Qtc2VsZWN0aW9uLS1tdWx0aXBsZSAuYW50LXNlbGVjdC1zZWxlY3Rpb25fX3BsYWNlaG9sZGVyIHtcXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XFxufVxcbi5hbnQtc2VsZWN0LXNlbGVjdGlvbi0tbXVsdGlwbGUgPiB1bCA+IGxpLFxcbi5hbnQtc2VsZWN0LXNlbGVjdGlvbi0tbXVsdGlwbGUgLmFudC1zZWxlY3Qtc2VsZWN0aW9uX19yZW5kZXJlZCA+IHVsID4gbGkge1xcbiAgbWFyZ2luLXRvcDogM3B4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxufVxcbi5hbnQtc2VsZWN0LXNlbGVjdGlvbi0tbXVsdGlwbGUgLmFudC1zZWxlY3Qtc2VsZWN0aW9uX19jaG9pY2Uge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThlODtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XFxuICBtYXgtd2lkdGg6IDk5JTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICAtd2Via2l0LXRyYW5zaXRpb246IHBhZGRpbmcgMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XFxuICB0cmFuc2l0aW9uOiBwYWRkaW5nIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xcbiAgcGFkZGluZzogMCAyMHB4IDAgMTBweDtcXG59XFxuLmFudC1zZWxlY3Qtc2VsZWN0aW9uLS1tdWx0aXBsZSAuYW50LXNlbGVjdC1zZWxlY3Rpb25fX2Nob2ljZV9fZGlzYWJsZWQge1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbn1cXG4uYW50LXNlbGVjdC1zZWxlY3Rpb24tLW11bHRpcGxlIC5hbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2hvaWNlX19jb250ZW50IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG1hcmdpbiAwLjNzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcXG4gIHRyYW5zaXRpb246IG1hcmdpbiAwLjNzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcXG59XFxuLmFudC1zZWxlY3Qtc2VsZWN0aW9uLS1tdWx0aXBsZSAuYW50LXNlbGVjdC1zZWxlY3Rpb25fX2Nob2ljZV9fcmVtb3ZlIHtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtc2l6ZTogMTBweCBcXFxcOTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjgzMzMzMzMzKSByb3RhdGUoMGRlZyk7XFxuICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC44MzMzMzMzMykgcm90YXRlKDBkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuODMzMzMzMzMpIHJvdGF0ZSgwZGVnKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA0cHg7XFxufVxcbi5hbnQtc2VsZWN0LXNlbGVjdGlvbi0tbXVsdGlwbGUgLmFudC1zZWxlY3Qtc2VsZWN0aW9uX19jaG9pY2VfX3JlbW92ZTpiZWZvcmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LWZhbWlseTogXFxcImFudGljb25cXFwiICFpbXBvcnRhbnQ7XFxufVxcbjpyb290IC5hbnQtc2VsZWN0LXNlbGVjdGlvbi0tbXVsdGlwbGUgLmFudC1zZWxlY3Qtc2VsZWN0aW9uX19jaG9pY2VfX3JlbW92ZSB7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5hbnQtc2VsZWN0LXNlbGVjdGlvbi0tbXVsdGlwbGUgLmFudC1zZWxlY3Qtc2VsZWN0aW9uX19jaG9pY2VfX3JlbW92ZTpob3ZlciB7XFxuICBjb2xvcjogIzQwNDA0MDtcXG59XFxuLmFudC1zZWxlY3Qtc2VsZWN0aW9uLS1tdWx0aXBsZSAuYW50LXNlbGVjdC1zZWxlY3Rpb25fX2Nob2ljZV9fcmVtb3ZlOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXEU2MzNcXFwiO1xcbn1cXG4uYW50LXNlbGVjdC1zZWxlY3Rpb24tLW11bHRpcGxlIC5hbnQtc2VsZWN0LXNlbGVjdGlvbl9fY2xlYXIge1xcbiAgdG9wOiAxNnB4O1xcbn1cXG4uYW50LXNlbGVjdC1hbGxvdy1jbGVhciAuYW50LXNlbGVjdC1zZWxlY3Rpb24tLW11bHRpcGxlIC5hbnQtc2VsZWN0LXNlbGVjdGlvbl9fcmVuZGVyZWQge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG4uYW50LXNlbGVjdC1vcGVuIC5hbnQtc2VsZWN0LWFycm93OmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcbi5hbnQtc2VsZWN0LW9wZW4gLmFudC1zZWxlY3Qtc2VsZWN0aW9uIHtcXG4gIGJvcmRlci1jb2xvcjogIzQwYTlmZjtcXG4gIG91dGxpbmU6IDA7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKDI0LCAxNDQsIDI1NSwgMC4yKTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoMjQsIDE0NCwgMjU1LCAwLjIpO1xcbn1cXG4uYW50LXNlbGVjdC1jb21ib2JveCAuYW50LXNlbGVjdC1hcnJvdyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uYW50LXNlbGVjdC1jb21ib2JveCAuYW50LXNlbGVjdC1zZWFyY2gtLWlubGluZSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsb2F0OiBub25lO1xcbn1cXG4uYW50LXNlbGVjdC1jb21ib2JveCAuYW50LXNlbGVjdC1zZWFyY2hfX2ZpZWxkX193cmFwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uYW50LXNlbGVjdC1jb21ib2JveCAuYW50LXNlbGVjdC1zZWFyY2hfX2ZpZWxkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xcbn1cXG4uYW50LXNlbGVjdC1jb21ib2JveC5hbnQtc2VsZWN0LWFsbG93LWNsZWFyIC5hbnQtc2VsZWN0LXNlbGVjdGlvbjpob3ZlciAuYW50LXNlbGVjdC1zZWxlY3Rpb25fX3JlbmRlcmVkIHtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuLmFudC1zZWxlY3QtZHJvcGRvd24ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb25vc3BhY2VkIE51bWJlclxcXCIsIFxcXCJDaGluZXNlIFF1b3RlXFxcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJQaW5nRmFuZyBTQ1xcXCIsIFxcXCJIaXJhZ2lubyBTYW5zIEdCXFxcIiwgXFxcIk1pY3Jvc29mdCBZYUhlaVxcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHotaW5kZXg6IDEwNTA7XFxuICBsZWZ0OiAtOTk5OXB4O1xcbiAgdG9wOiAtOTk5OXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLmFudC1zZWxlY3QtZHJvcGRvd24uc2xpZGUtdXAtZW50ZXIuc2xpZGUtdXAtZW50ZXItYWN0aXZlLmFudC1zZWxlY3QtZHJvcGRvd24tcGxhY2VtZW50LWJvdHRvbUxlZnQsXFxuLmFudC1zZWxlY3QtZHJvcGRvd24uc2xpZGUtdXAtYXBwZWFyLnNsaWRlLXVwLWFwcGVhci1hY3RpdmUuYW50LXNlbGVjdC1kcm9wZG93bi1wbGFjZW1lbnQtYm90dG9tTGVmdCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbnRTbGlkZVVwSW47XFxuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBhbnRTbGlkZVVwSW47XFxufVxcbi5hbnQtc2VsZWN0LWRyb3Bkb3duLnNsaWRlLXVwLWVudGVyLnNsaWRlLXVwLWVudGVyLWFjdGl2ZS5hbnQtc2VsZWN0LWRyb3Bkb3duLXBsYWNlbWVudC10b3BMZWZ0LFxcbi5hbnQtc2VsZWN0LWRyb3Bkb3duLnNsaWRlLXVwLWFwcGVhci5zbGlkZS11cC1hcHBlYXItYWN0aXZlLmFudC1zZWxlY3QtZHJvcGRvd24tcGxhY2VtZW50LXRvcExlZnQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW50U2xpZGVEb3duSW47XFxuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBhbnRTbGlkZURvd25JbjtcXG59XFxuLmFudC1zZWxlY3QtZHJvcGRvd24uc2xpZGUtdXAtbGVhdmUuc2xpZGUtdXAtbGVhdmUtYWN0aXZlLmFudC1zZWxlY3QtZHJvcGRvd24tcGxhY2VtZW50LWJvdHRvbUxlZnQge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW50U2xpZGVVcE91dDtcXG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGFudFNsaWRlVXBPdXQ7XFxufVxcbi5hbnQtc2VsZWN0LWRyb3Bkb3duLnNsaWRlLXVwLWxlYXZlLnNsaWRlLXVwLWxlYXZlLWFjdGl2ZS5hbnQtc2VsZWN0LWRyb3Bkb3duLXBsYWNlbWVudC10b3BMZWZ0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFudFNsaWRlRG93bk91dDtcXG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGFudFNsaWRlRG93bk91dDtcXG59XFxuLmFudC1zZWxlY3QtZHJvcGRvd24taGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5hbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWF4LWhlaWdodDogMjUwcHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLWdyb3VwLWxpc3Qge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLWdyb3VwLWxpc3QgPiAuYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0ge1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbn1cXG4uYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tZ3JvdXAtdGl0bGUge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxuICBwYWRkaW5nOiAwIDEycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBsaW5lLWhlaWdodDogMzJweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogNXB4IDEycHg7XFxuICBsaW5lLWhlaWdodDogMjJweDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2U7XFxufVxcbi5hbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZmN2ZmO1xcbn1cXG4uYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW06Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XFxufVxcbi5hbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbTpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4O1xcbn1cXG4uYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tZGlzYWJsZWQge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4uYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tZGlzYWJsZWQ6aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLXNlbGVjdGVkLFxcbi5hbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1zZWxlY3RlZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbn1cXG4uYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmY3ZmY7XFxufVxcbi5hbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1kaXZpZGVyIHtcXG4gIGhlaWdodDogMXB4O1xcbiAgbWFyZ2luOiAxcHggMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlOGU4O1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxufVxcbi5hbnQtc2VsZWN0LWRyb3Bkb3duLmFudC1zZWxlY3QtZHJvcGRvd24tLW11bHRpcGxlIC5hbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbTphZnRlciB7XFxuICBmb250LWZhbWlseTogJ2FudGljb24nO1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcRTYzMlxcXCI7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXNpemU6IDEwcHggXFxcXDk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44MzMzMzMzMykgcm90YXRlKDBkZWcpO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuODMzMzMzMzMpIHJvdGF0ZSgwZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgzMzMzMzMzKSByb3RhdGUoMGRlZyk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICByaWdodDogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1zaGFkb3c6IDAgMC4xcHggMCwgMC4xcHggMCAwLCAwIC0wLjFweCAwLCAtMC4xcHggMDtcXG59XFxuOnJvb3QgLmFudC1zZWxlY3QtZHJvcGRvd24uYW50LXNlbGVjdC1kcm9wZG93bi0tbXVsdGlwbGUgLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtOmFmdGVyIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLmFudC1zZWxlY3QtZHJvcGRvd24uYW50LXNlbGVjdC1kcm9wZG93bi0tbXVsdGlwbGUgLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtOmhvdmVyOmFmdGVyIHtcXG4gIGNvbG9yOiAjZGRkO1xcbn1cXG4uYW50LXNlbGVjdC1kcm9wZG93bi5hbnQtc2VsZWN0LWRyb3Bkb3duLS1tdWx0aXBsZSAuYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tZGlzYWJsZWQ6YWZ0ZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmFudC1zZWxlY3QtZHJvcGRvd24uYW50LXNlbGVjdC1kcm9wZG93bi0tbXVsdGlwbGUgLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLXNlbGVjdGVkOmFmdGVyLFxcbi5hbnQtc2VsZWN0LWRyb3Bkb3duLmFudC1zZWxlY3QtZHJvcGRvd24tLW11bHRpcGxlIC5hbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1zZWxlY3RlZDpob3ZlcjphZnRlciB7XFxuICBjb2xvcjogIzE4OTBmZjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmFudC1zZWxlY3QtZHJvcGRvd24tY29udGFpbmVyLW9wZW4gLmFudC1zZWxlY3QtZHJvcGRvd24sXFxuLmFudC1zZWxlY3QtZHJvcGRvd24tb3BlbiAuYW50LXNlbGVjdC1kcm9wZG93biB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICB0b2RheTogJ1RvZGF5JyxcbiAgbm93OiAnTm93JyxcbiAgYmFja1RvVG9kYXk6ICdCYWNrIHRvIHRvZGF5JyxcbiAgb2s6ICdPaycsXG4gIGNsZWFyOiAnQ2xlYXInLFxuICBtb250aDogJ01vbnRoJyxcbiAgeWVhcjogJ1llYXInLFxuICB0aW1lU2VsZWN0OiAnU2VsZWN0IHRpbWUnLFxuICBkYXRlU2VsZWN0OiAnU2VsZWN0IGRhdGUnLFxuICBtb250aFNlbGVjdDogJ0Nob29zZSBhIG1vbnRoJyxcbiAgeWVhclNlbGVjdDogJ0Nob29zZSBhIHllYXInLFxuICBkZWNhZGVTZWxlY3Q6ICdDaG9vc2UgYSBkZWNhZGUnLFxuICB5ZWFyRm9ybWF0OiAnWVlZWScsXG4gIGRhdGVGb3JtYXQ6ICdNL0QvWVlZWScsXG4gIGRheUZvcm1hdDogJ0QnLFxuICBkYXRlVGltZUZvcm1hdDogJ00vRC9ZWVlZIEhIOm1tOnNzJyxcbiAgbW9udGhCZWZvcmVZZWFyOiB0cnVlLFxuICBwcmV2aW91c01vbnRoOiAnUHJldmlvdXMgbW9udGggKFBhZ2VVcCknLFxuICBuZXh0TW9udGg6ICdOZXh0IG1vbnRoIChQYWdlRG93biknLFxuICBwcmV2aW91c1llYXI6ICdMYXN0IHllYXIgKENvbnRyb2wgKyBsZWZ0KScsXG4gIG5leHRZZWFyOiAnTmV4dCB5ZWFyIChDb250cm9sICsgcmlnaHQpJyxcbiAgcHJldmlvdXNEZWNhZGU6ICdMYXN0IGRlY2FkZScsXG4gIG5leHREZWNhZGU6ICdOZXh0IGRlY2FkZScsXG4gIHByZXZpb3VzQ2VudHVyeTogJ0xhc3QgY2VudHVyeScsXG4gIG5leHRDZW50dXJ5OiAnTmV4dCBjZW50dXJ5J1xufTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgS2V5Q29kZSBmcm9tICdyYy11dGlsL2VzL0tleUNvZGUnO1xuaW1wb3J0IEFuaW1hdGUgZnJvbSAncmMtYW5pbWF0ZSc7XG5pbXBvcnQgTGF6eVJlbmRlckJveCBmcm9tICcuL0xhenlSZW5kZXJCb3gnO1xuaW1wb3J0IGdldFNjcm9sbEJhclNpemUgZnJvbSAncmMtdXRpbC9lcy9nZXRTY3JvbGxCYXJTaXplJztcbnZhciB1dWlkID0gMDtcbnZhciBvcGVuQ291bnQgPSAwO1xuLyogZXNsaW50IHJlYWN0L25vLWlzLW1vdW50ZWQ6MCAqL1xuZnVuY3Rpb24gZ2V0U2Nyb2xsKHcsIHRvcCkge1xuICAgIHZhciByZXQgPSB3WydwYWdlJyArICh0b3AgPyAnWScgOiAnWCcpICsgJ09mZnNldCddO1xuICAgIHZhciBtZXRob2QgPSAnc2Nyb2xsJyArICh0b3AgPyAnVG9wJyA6ICdMZWZ0Jyk7XG4gICAgaWYgKHR5cGVvZiByZXQgIT09ICdudW1iZXInKSB7XG4gICAgICAgIHZhciBkID0gdy5kb2N1bWVudDtcbiAgICAgICAgcmV0ID0gZC5kb2N1bWVudEVsZW1lbnRbbWV0aG9kXTtcbiAgICAgICAgaWYgKHR5cGVvZiByZXQgIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICByZXQgPSBkLmJvZHlbbWV0aG9kXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuZnVuY3Rpb24gc2V0VHJhbnNmb3JtT3JpZ2luKG5vZGUsIHZhbHVlKSB7XG4gICAgdmFyIHN0eWxlID0gbm9kZS5zdHlsZTtcbiAgICBbJ1dlYmtpdCcsICdNb3onLCAnTXMnLCAnbXMnXS5mb3JFYWNoKGZ1bmN0aW9uIChwcmVmaXgpIHtcbiAgICAgICAgc3R5bGVbcHJlZml4ICsgJ1RyYW5zZm9ybU9yaWdpbiddID0gdmFsdWU7XG4gICAgfSk7XG4gICAgc3R5bGVbJ3RyYW5zZm9ybU9yaWdpbiddID0gdmFsdWU7XG59XG5mdW5jdGlvbiBvZmZzZXQoZWwpIHtcbiAgICB2YXIgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBwb3MgPSB7XG4gICAgICAgIGxlZnQ6IHJlY3QubGVmdCxcbiAgICAgICAgdG9wOiByZWN0LnRvcFxuICAgIH07XG4gICAgdmFyIGRvYyA9IGVsLm93bmVyRG9jdW1lbnQ7XG4gICAgdmFyIHcgPSBkb2MuZGVmYXVsdFZpZXcgfHwgZG9jLnBhcmVudFdpbmRvdztcbiAgICBwb3MubGVmdCArPSBnZXRTY3JvbGwodyk7XG4gICAgcG9zLnRvcCArPSBnZXRTY3JvbGwodywgdHJ1ZSk7XG4gICAgcmV0dXJuIHBvcztcbn1cblxudmFyIERpYWxvZyA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKERpYWxvZywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBEaWFsb2coKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEaWFsb2cpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cbiAgICAgICAgX3RoaXMub25BbmltYXRlTGVhdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYWZ0ZXJDbG9zZSA9IF90aGlzLnByb3BzLmFmdGVyQ2xvc2U7XG4gICAgICAgICAgICAvLyBuZWVkIGRlbW8/XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L2RpYWxvZy9wdWxsLzI4XG5cbiAgICAgICAgICAgIGlmIChfdGhpcy53cmFwKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMud3JhcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMuaW5UcmFuc2l0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICBfdGhpcy5yZW1vdmVTY3JvbGxpbmdFZmZlY3QoKTtcbiAgICAgICAgICAgIGlmIChhZnRlckNsb3NlKSB7XG4gICAgICAgICAgICAgICAgYWZ0ZXJDbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5vbk1hc2tDbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvLyBhbmRyb2lkIHRyaWdnZXIgY2xpY2sgb24gb3BlbiAoZmFzdGNsaWNrPz8pXG4gICAgICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIF90aGlzLm9wZW5UaW1lIDwgMzAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBlLmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jbG9zZShlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMub25LZXlEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBwcm9wcyA9IF90aGlzLnByb3BzO1xuICAgICAgICAgICAgaWYgKHByb3BzLmtleWJvYXJkICYmIGUua2V5Q29kZSA9PT0gS2V5Q29kZS5FU0MpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jbG9zZShlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGtlZXAgZm9jdXMgaW5zaWRlIGRpYWxvZ1xuICAgICAgICAgICAgaWYgKHByb3BzLnZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSBLZXlDb2RlLlRBQikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkaWFsb2dSb290ID0gX3RoaXMud3JhcDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY3RpdmVFbGVtZW50ID09PSBkaWFsb2dSb290KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2VudGluZWwuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhY3RpdmVFbGVtZW50ID09PSBfdGhpcy5zZW50aW5lbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nUm9vdC5mb2N1cygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5nZXREaWFsb2dFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHByb3BzID0gX3RoaXMucHJvcHM7XG4gICAgICAgICAgICB2YXIgY2xvc2FibGUgPSBwcm9wcy5jbG9zYWJsZTtcbiAgICAgICAgICAgIHZhciBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHM7XG4gICAgICAgICAgICB2YXIgZGVzdCA9IHt9O1xuICAgICAgICAgICAgaWYgKHByb3BzLndpZHRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBkZXN0LndpZHRoID0gcHJvcHMud2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvcHMuaGVpZ2h0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBkZXN0LmhlaWdodCA9IHByb3BzLmhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBmb290ZXIgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAocHJvcHMuZm9vdGVyKSB7XG4gICAgICAgICAgICAgICAgZm9vdGVyID0gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1mb290ZXInLCByZWY6IF90aGlzLnNhdmVSZWYoJ2Zvb3RlcicpIH0sIHByb3BzLmZvb3Rlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaGVhZGVyID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKHByb3BzLnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyID0gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1oZWFkZXInLCByZWY6IF90aGlzLnNhdmVSZWYoJ2hlYWRlcicpIH0sIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctdGl0bGUnLCBpZDogX3RoaXMudGl0bGVJZCB9LCBwcm9wcy50aXRsZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGNsb3NlciA9IHZvaWQgMDtcbiAgICAgICAgICAgIGlmIChjbG9zYWJsZSkge1xuICAgICAgICAgICAgICAgIGNsb3NlciA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBvbkNsaWNrOiBfdGhpcy5jbG9zZSwgXCJhcmlhLWxhYmVsXCI6IFwiQ2xvc2VcIiwgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWNsb3NlJyB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1jbG9zZS14JyB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc3R5bGUgPSBfZXh0ZW5kcyh7fSwgcHJvcHMuc3R5bGUsIGRlc3QpO1xuICAgICAgICAgICAgdmFyIHRyYW5zaXRpb25OYW1lID0gX3RoaXMuZ2V0VHJhbnNpdGlvbk5hbWUoKTtcbiAgICAgICAgICAgIHZhciBkaWFsb2dFbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChMYXp5UmVuZGVyQm94LCB7IGtleTogXCJkaWFsb2ctZWxlbWVudFwiLCByb2xlOiBcImRvY3VtZW50XCIsIHJlZjogX3RoaXMuc2F2ZVJlZignZGlhbG9nJyksIHN0eWxlOiBzdHlsZSwgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnICcgKyAocHJvcHMuY2xhc3NOYW1lIHx8ICcnKSwgdmlzaWJsZTogcHJvcHMudmlzaWJsZSB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWNvbnRlbnQnIH0sIGNsb3NlciwgaGVhZGVyLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWJvZHknLCBzdHlsZTogcHJvcHMuYm9keVN0eWxlLCByZWY6IF90aGlzLnNhdmVSZWYoJ2JvZHknKSB9LCBwcm9wcy5ib2R5UHJvcHMpLCBwcm9wcy5jaGlsZHJlbiksIGZvb3RlciksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyB0YWJJbmRleDogMCwgcmVmOiBfdGhpcy5zYXZlUmVmKCdzZW50aW5lbCcpLCBzdHlsZTogeyB3aWR0aDogMCwgaGVpZ2h0OiAwLCBvdmVyZmxvdzogJ2hpZGRlbicgfSB9LCBcInNlbnRpbmVsXCIpKTtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEFuaW1hdGUsIHsga2V5OiBcImRpYWxvZ1wiLCBzaG93UHJvcDogXCJ2aXNpYmxlXCIsIG9uTGVhdmU6IF90aGlzLm9uQW5pbWF0ZUxlYXZlLCB0cmFuc2l0aW9uTmFtZTogdHJhbnNpdGlvbk5hbWUsIGNvbXBvbmVudDogXCJcIiwgdHJhbnNpdGlvbkFwcGVhcjogdHJ1ZSB9LCBwcm9wcy52aXNpYmxlIHx8ICFwcm9wcy5kZXN0cm95T25DbG9zZSA/IGRpYWxvZ0VsZW1lbnQgOiBudWxsKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuZ2V0WkluZGV4U3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc3R5bGUgPSB7fTtcbiAgICAgICAgICAgIHZhciBwcm9wcyA9IF90aGlzLnByb3BzO1xuICAgICAgICAgICAgaWYgKHByb3BzLnpJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUuekluZGV4ID0gcHJvcHMuekluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5nZXRXcmFwU3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIF90aGlzLmdldFpJbmRleFN0eWxlKCksIF90aGlzLnByb3BzLndyYXBTdHlsZSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmdldE1hc2tTdHlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgX3RoaXMuZ2V0WkluZGV4U3R5bGUoKSwgX3RoaXMucHJvcHMubWFza1N0eWxlKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuZ2V0TWFza0VsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcHJvcHMgPSBfdGhpcy5wcm9wcztcbiAgICAgICAgICAgIHZhciBtYXNrRWxlbWVudCA9IHZvaWQgMDtcbiAgICAgICAgICAgIGlmIChwcm9wcy5tYXNrKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1hc2tUcmFuc2l0aW9uID0gX3RoaXMuZ2V0TWFza1RyYW5zaXRpb25OYW1lKCk7XG4gICAgICAgICAgICAgICAgbWFza0VsZW1lbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KExhenlSZW5kZXJCb3gsIF9leHRlbmRzKHsgc3R5bGU6IF90aGlzLmdldE1hc2tTdHlsZSgpLCBrZXk6IFwibWFza1wiLCBjbGFzc05hbWU6IHByb3BzLnByZWZpeENscyArICctbWFzaycsIGhpZGRlbkNsYXNzTmFtZTogcHJvcHMucHJlZml4Q2xzICsgJy1tYXNrLWhpZGRlbicsIHZpc2libGU6IHByb3BzLnZpc2libGUgfSwgcHJvcHMubWFza1Byb3BzKSk7XG4gICAgICAgICAgICAgICAgaWYgKG1hc2tUcmFuc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hc2tFbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChBbmltYXRlLCB7IGtleTogXCJtYXNrXCIsIHNob3dQcm9wOiBcInZpc2libGVcIiwgdHJhbnNpdGlvbkFwcGVhcjogdHJ1ZSwgY29tcG9uZW50OiBcIlwiLCB0cmFuc2l0aW9uTmFtZTogbWFza1RyYW5zaXRpb24gfSwgbWFza0VsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtYXNrRWxlbWVudDtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuZ2V0TWFza1RyYW5zaXRpb25OYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHByb3BzID0gX3RoaXMucHJvcHM7XG4gICAgICAgICAgICB2YXIgdHJhbnNpdGlvbk5hbWUgPSBwcm9wcy5tYXNrVHJhbnNpdGlvbk5hbWU7XG4gICAgICAgICAgICB2YXIgYW5pbWF0aW9uID0gcHJvcHMubWFza0FuaW1hdGlvbjtcbiAgICAgICAgICAgIGlmICghdHJhbnNpdGlvbk5hbWUgJiYgYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWUgPSBwcm9wcy5wcmVmaXhDbHMgKyAnLScgKyBhbmltYXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJhbnNpdGlvbk5hbWU7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmdldFRyYW5zaXRpb25OYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHByb3BzID0gX3RoaXMucHJvcHM7XG4gICAgICAgICAgICB2YXIgdHJhbnNpdGlvbk5hbWUgPSBwcm9wcy50cmFuc2l0aW9uTmFtZTtcbiAgICAgICAgICAgIHZhciBhbmltYXRpb24gPSBwcm9wcy5hbmltYXRpb247XG4gICAgICAgICAgICBpZiAoIXRyYW5zaXRpb25OYW1lICYmIGFuaW1hdGlvbikge1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lID0gcHJvcHMucHJlZml4Q2xzICsgJy0nICsgYW5pbWF0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRyYW5zaXRpb25OYW1lO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5zZXRTY3JvbGxiYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuYm9keUlzT3ZlcmZsb3dpbmcgJiYgX3RoaXMuc2Nyb2xsYmFyV2lkdGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gX3RoaXMuc2Nyb2xsYmFyV2lkdGggKyAncHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5hZGRTY3JvbGxpbmdFZmZlY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBvcGVuQ291bnQrKztcbiAgICAgICAgICAgIGlmIChvcGVuQ291bnQgIT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdGhpcy5jaGVja1Njcm9sbGJhcigpO1xuICAgICAgICAgICAgX3RoaXMuc2V0U2Nyb2xsYmFyKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAvLyB0aGlzLmFkanVzdERpYWxvZygpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5yZW1vdmVTY3JvbGxpbmdFZmZlY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBvcGVuQ291bnQtLTtcbiAgICAgICAgICAgIGlmIChvcGVuQ291bnQgIT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XG4gICAgICAgICAgICBfdGhpcy5yZXNldFNjcm9sbGJhcigpO1xuICAgICAgICAgICAgLy8gdGhpcy5yZXNldEFkanVzdG1lbnRzKCk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmNsb3NlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHZhciBvbkNsb3NlID0gX3RoaXMucHJvcHMub25DbG9zZTtcblxuICAgICAgICAgICAgaWYgKG9uQ2xvc2UpIHtcbiAgICAgICAgICAgICAgICBvbkNsb3NlKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5jaGVja1Njcm9sbGJhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBmdWxsV2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgIGlmICghZnVsbFdpbmRvd1dpZHRoKSB7XG4gICAgICAgICAgICAgICAgLy8gd29ya2Fyb3VuZCBmb3IgbWlzc2luZyB3aW5kb3cuaW5uZXJXaWR0aCBpbiBJRThcbiAgICAgICAgICAgICAgICB2YXIgZG9jdW1lbnRFbGVtZW50UmVjdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICBmdWxsV2luZG93V2lkdGggPSBkb2N1bWVudEVsZW1lbnRSZWN0LnJpZ2h0IC0gTWF0aC5hYnMoZG9jdW1lbnRFbGVtZW50UmVjdC5sZWZ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF90aGlzLmJvZHlJc092ZXJmbG93aW5nID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA8IGZ1bGxXaW5kb3dXaWR0aDtcbiAgICAgICAgICAgIGlmIChfdGhpcy5ib2R5SXNPdmVyZmxvd2luZykge1xuICAgICAgICAgICAgICAgIF90aGlzLnNjcm9sbGJhcldpZHRoID0gZ2V0U2Nyb2xsQmFyU2l6ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5yZXNldFNjcm9sbGJhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJyc7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmFkanVzdERpYWxvZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy53cmFwICYmIF90aGlzLnNjcm9sbGJhcldpZHRoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbW9kYWxJc092ZXJmbG93aW5nID0gX3RoaXMud3JhcC5zY3JvbGxIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgICAgIF90aGlzLndyYXAuc3R5bGUucGFkZGluZ0xlZnQgPSAoIV90aGlzLmJvZHlJc092ZXJmbG93aW5nICYmIG1vZGFsSXNPdmVyZmxvd2luZyA/IF90aGlzLnNjcm9sbGJhcldpZHRoIDogJycpICsgJ3B4JztcbiAgICAgICAgICAgICAgICBfdGhpcy53cmFwLnN0eWxlLnBhZGRpbmdSaWdodCA9IChfdGhpcy5ib2R5SXNPdmVyZmxvd2luZyAmJiAhbW9kYWxJc092ZXJmbG93aW5nID8gX3RoaXMuc2Nyb2xsYmFyV2lkdGggOiAnJykgKyAncHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5yZXNldEFkanVzdG1lbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLndyYXApIHtcbiAgICAgICAgICAgICAgICBfdGhpcy53cmFwLnN0eWxlLnBhZGRpbmdMZWZ0ID0gX3RoaXMud3JhcC5zdHlsZS5wYWRkaW5nTGVmdCA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5zYXZlUmVmID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIF90aGlzW25hbWVdID0gbm9kZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBEaWFsb2cucHJvdG90eXBlLmNvbXBvbmVudFdpbGxNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdGhpcy5pblRyYW5zaXRpb24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy50aXRsZUlkID0gJ3JjRGlhbG9nVGl0bGUnICsgdXVpZCsrO1xuICAgIH07XG5cbiAgICBEaWFsb2cucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50RGlkVXBkYXRlKHt9KTtcbiAgICB9O1xuXG4gICAgRGlhbG9nLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgIHZhciBtb3VzZVBvc2l0aW9uID0gdGhpcy5wcm9wcy5tb3VzZVBvc2l0aW9uO1xuICAgICAgICBpZiAocHJvcHMudmlzaWJsZSkge1xuICAgICAgICAgICAgLy8gZmlyc3Qgc2hvd1xuICAgICAgICAgICAgaWYgKCFwcmV2UHJvcHMudmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3BlblRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdE91dFNpZGVGb2N1c05vZGUgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkU2Nyb2xsaW5nRWZmZWN0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy53cmFwLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgdmFyIGRpYWxvZ05vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLmRpYWxvZyk7XG4gICAgICAgICAgICAgICAgaWYgKG1vdXNlUG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsT2Zmc2V0ID0gb2Zmc2V0KGRpYWxvZ05vZGUpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUcmFuc2Zvcm1PcmlnaW4oZGlhbG9nTm9kZSwgbW91c2VQb3NpdGlvbi54IC0gZWxPZmZzZXQubGVmdCArICdweCAnICsgKG1vdXNlUG9zaXRpb24ueSAtIGVsT2Zmc2V0LnRvcCkgKyAncHgnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXRUcmFuc2Zvcm1PcmlnaW4oZGlhbG9nTm9kZSwgJycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwcmV2UHJvcHMudmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5pblRyYW5zaXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHByb3BzLm1hc2sgJiYgdGhpcy5sYXN0T3V0U2lkZUZvY3VzTm9kZSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdE91dFNpZGVGb2N1c05vZGUuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdE91dFNpZGVGb2N1c05vZGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RPdXRTaWRlRm9jdXNOb2RlID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBEaWFsb2cucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnZpc2libGUgfHwgdGhpcy5pblRyYW5zaXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlU2Nyb2xsaW5nRWZmZWN0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgRGlhbG9nLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgIHZhciBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgICBtYXNrQ2xvc2FibGUgPSBwcm9wcy5tYXNrQ2xvc2FibGU7XG5cbiAgICAgICAgdmFyIHN0eWxlID0gdGhpcy5nZXRXcmFwU3R5bGUoKTtcbiAgICAgICAgLy8gY2xlYXIgaGlkZSBkaXNwbGF5XG4gICAgICAgIC8vIGFuZCBvbmx5IHNldCBkaXNwbGF5IGFmdGVyIGFzeW5jIGFuaW0sIG5vdCBoZXJlIGZvciBoaWRlXG4gICAgICAgIGlmIChwcm9wcy52aXNpYmxlKSB7XG4gICAgICAgICAgICBzdHlsZS5kaXNwbGF5ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCB0aGlzLmdldE1hc2tFbGVtZW50KCksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoeyB0YWJJbmRleDogLTEsIG9uS2V5RG93bjogdGhpcy5vbktleURvd24sIGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy13cmFwICcgKyAocHJvcHMud3JhcENsYXNzTmFtZSB8fCAnJyksIHJlZjogdGhpcy5zYXZlUmVmKCd3cmFwJyksIG9uQ2xpY2s6IG1hc2tDbG9zYWJsZSA/IHRoaXMub25NYXNrQ2xpY2sgOiB1bmRlZmluZWQsIHJvbGU6IFwiZGlhbG9nXCIsIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IHByb3BzLnRpdGxlID8gdGhpcy50aXRsZUlkIDogbnVsbCwgc3R5bGU6IHN0eWxlIH0sIHByb3BzLndyYXBQcm9wcyksIHRoaXMuZ2V0RGlhbG9nRWxlbWVudCgpKSk7XG4gICAgfTtcblxuICAgIHJldHVybiBEaWFsb2c7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IERpYWxvZztcblxuRGlhbG9nLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIG1hc2s6IHRydWUsXG4gICAgdmlzaWJsZTogZmFsc2UsXG4gICAga2V5Ym9hcmQ6IHRydWUsXG4gICAgY2xvc2FibGU6IHRydWUsXG4gICAgbWFza0Nsb3NhYmxlOiB0cnVlLFxuICAgIGRlc3Ryb3lPbkNsb3NlOiBmYWxzZSxcbiAgICBwcmVmaXhDbHM6ICdyYy1kaWFsb2cnXG59OyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnLi9EaWFsb2cnO1xuaW1wb3J0IENvbnRhaW5lclJlbmRlciBmcm9tICdyYy11dGlsL2VzL0NvbnRhaW5lclJlbmRlcic7XG5pbXBvcnQgUG9ydGFsIGZyb20gJ3JjLXV0aWwvZXMvUG9ydGFsJztcbnZhciBJU19SRUFDVF8xNiA9ICdjcmVhdGVQb3J0YWwnIGluIFJlYWN0RE9NO1xuXG52YXIgRGlhbG9nV3JhcCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKERpYWxvZ1dyYXAsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gRGlhbG9nV3JhcCgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERpYWxvZ1dyYXApO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cbiAgICAgICAgX3RoaXMuc2F2ZURpYWxvZyA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICBfdGhpcy5fY29tcG9uZW50ID0gbm9kZTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuZ2V0Q29tcG9uZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGV4dHJhID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGlhbG9nLCBfZXh0ZW5kcyh7IHJlZjogX3RoaXMuc2F2ZURpYWxvZyB9LCBfdGhpcy5wcm9wcywgZXh0cmEsIHsga2V5OiBcImRpYWxvZ1wiIH0pKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuZ2V0Q29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLnByb3BzLmdldENvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5wcm9wcy5nZXRDb250YWluZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBEaWFsb2dXcmFwLnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUoX3JlZikge1xuICAgICAgICB2YXIgdmlzaWJsZSA9IF9yZWYudmlzaWJsZTtcblxuICAgICAgICByZXR1cm4gISEodGhpcy5wcm9wcy52aXNpYmxlIHx8IHZpc2libGUpO1xuICAgIH07XG5cbiAgICBEaWFsb2dXcmFwLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBpZiAoSVNfUkVBQ1RfMTYpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy52aXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlckNvbXBvbmVudCh7XG4gICAgICAgICAgICAgICAgYWZ0ZXJDbG9zZTogdGhpcy5yZW1vdmVDb250YWluZXIsXG4gICAgICAgICAgICAgICAgb25DbG9zZTogZnVuY3Rpb24gb25DbG9zZSgpIHt9LFxuXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVDb250YWluZXIoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBEaWFsb2dXcmFwLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHZhciB2aXNpYmxlID0gdGhpcy5wcm9wcy52aXNpYmxlO1xuXG4gICAgICAgIHZhciBwb3J0YWwgPSBudWxsO1xuICAgICAgICBpZiAoIUlTX1JFQUNUXzE2KSB7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb250YWluZXJSZW5kZXIsIHsgcGFyZW50OiB0aGlzLCB2aXNpYmxlOiB2aXNpYmxlLCBhdXRvRGVzdHJveTogZmFsc2UsIGdldENvbXBvbmVudDogdGhpcy5nZXRDb21wb25lbnQsIGdldENvbnRhaW5lcjogdGhpcy5nZXRDb250YWluZXIgfSwgZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlbmRlckNvbXBvbmVudCA9IF9yZWYyLnJlbmRlckNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ29udGFpbmVyID0gX3JlZjIucmVtb3ZlQ29udGFpbmVyO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMyLnJlbmRlckNvbXBvbmVudCA9IHJlbmRlckNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICBfdGhpczIucmVtb3ZlQ29udGFpbmVyID0gcmVtb3ZlQ29udGFpbmVyO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZpc2libGUgfHwgdGhpcy5fY29tcG9uZW50KSB7XG4gICAgICAgICAgICBwb3J0YWwgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFBvcnRhbCwgeyBnZXRDb250YWluZXI6IHRoaXMuZ2V0Q29udGFpbmVyIH0sIHRoaXMuZ2V0Q29tcG9uZW50KCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb3J0YWw7XG4gICAgfTtcblxuICAgIHJldHVybiBEaWFsb2dXcmFwO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5EaWFsb2dXcmFwLmRlZmF1bHRQcm9wcyA9IHtcbiAgICB2aXNpYmxlOiBmYWxzZVxufTtcbmV4cG9ydCBkZWZhdWx0IERpYWxvZ1dyYXA7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCI7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCI7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxudmFyIExhenlSZW5kZXJCb3ggPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhMYXp5UmVuZGVyQm94LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIExhenlSZW5kZXJCb3goKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMYXp5UmVuZGVyQm94KTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBMYXp5UmVuZGVyQm94LnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICAgIHJldHVybiAhIW5leHRQcm9wcy5oaWRkZW5DbGFzc05hbWUgfHwgISFuZXh0UHJvcHMudmlzaWJsZTtcbiAgICB9O1xuXG4gICAgTGF6eVJlbmRlckJveC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgY2xhc3NOYW1lID0gdGhpcy5wcm9wcy5jbGFzc05hbWU7XG4gICAgICAgIGlmICghIXRoaXMucHJvcHMuaGlkZGVuQ2xhc3NOYW1lICYmICF0aGlzLnByb3BzLnZpc2libGUpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSArPSBcIiBcIiArIHRoaXMucHJvcHMuaGlkZGVuQ2xhc3NOYW1lO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcm9wcyA9IF9leHRlbmRzKHt9LCB0aGlzLnByb3BzKTtcbiAgICAgICAgZGVsZXRlIHByb3BzLmhpZGRlbkNsYXNzTmFtZTtcbiAgICAgICAgZGVsZXRlIHByb3BzLnZpc2libGU7XG4gICAgICAgIHByb3BzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe30sIHByb3BzKSk7XG4gICAgfTtcblxuICAgIHJldHVybiBMYXp5UmVuZGVyQm94O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBMYXp5UmVuZGVyQm94OyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gT3B0aW9ucy5qc3hcbiAgaXRlbXNfcGVyX3BhZ2U6ICcvIHBhZ2UnLFxuICBqdW1wX3RvOiAnR290bycsXG4gIGp1bXBfdG9fY29uZmlybTogJ2NvbmZpcm0nLFxuICBwYWdlOiAnJyxcblxuICAvLyBQYWdpbmF0aW9uLmpzeFxuICBwcmV2X3BhZ2U6ICdQcmV2aW91cyBQYWdlJyxcbiAgbmV4dF9wYWdlOiAnTmV4dCBQYWdlJyxcbiAgcHJldl81OiAnUHJldmlvdXMgNSBQYWdlcycsXG4gIG5leHRfNTogJ05leHQgNSBQYWdlcycsXG4gIHByZXZfMzogJ1ByZXZpb3VzIDMgUGFnZXMnLFxuICBuZXh0XzM6ICdOZXh0IDMgUGFnZXMnXG59OyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0IFJlYWN0LCB7IGNsb25lRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgdG9BcnJheSBmcm9tICdyYy11dGlsL2VzL0NoaWxkcmVuL3RvQXJyYXknO1xuaW1wb3J0IE1lbnUgZnJvbSAncmMtbWVudSc7XG5pbXBvcnQgc2Nyb2xsSW50b1ZpZXcgZnJvbSAnZG9tLXNjcm9sbC1pbnRvLXZpZXcnO1xuaW1wb3J0IHsgZ2V0U2VsZWN0S2V5cywgcHJldmVudERlZmF1bHRFdmVudCwgc2F2ZVJlZiB9IGZyb20gJy4vdXRpbCc7XG5cbnZhciBEcm9wZG93bk1lbnUgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRHJvcGRvd25NZW51LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBEcm9wZG93bk1lbnUoKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEcm9wZG93bk1lbnUpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnNjcm9sbEFjdGl2ZUl0ZW1Ub1ZpZXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzY3JvbGwgaW50byB2aWV3XG4gICAgICB2YXIgaXRlbUNvbXBvbmVudCA9IGZpbmRET01Ob2RlKF90aGlzLmZpcnN0QWN0aXZlSXRlbSk7XG4gICAgICB2YXIgcHJvcHMgPSBfdGhpcy5wcm9wcztcblxuICAgICAgaWYgKGl0ZW1Db21wb25lbnQpIHtcbiAgICAgICAgdmFyIHNjcm9sbEludG9WaWV3T3B0cyA9IHtcbiAgICAgICAgICBvbmx5U2Nyb2xsSWZOZWVkZWQ6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCghcHJvcHMudmFsdWUgfHwgcHJvcHMudmFsdWUubGVuZ3RoID09PSAwKSAmJiBwcm9wcy5maXJzdEFjdGl2ZVZhbHVlKSB7XG4gICAgICAgICAgc2Nyb2xsSW50b1ZpZXdPcHRzLmFsaWduV2l0aFRvcCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBzY3JvbGxJbnRvVmlldyhpdGVtQ29tcG9uZW50LCBmaW5kRE9NTm9kZShfdGhpcy5tZW51UmVmKSwgc2Nyb2xsSW50b1ZpZXdPcHRzKTtcbiAgICAgIH1cbiAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIERyb3Bkb3duTWVudS5wcm90b3R5cGUuY29tcG9uZW50V2lsbE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHRoaXMubGFzdElucHV0VmFsdWUgPSB0aGlzLnByb3BzLmlucHV0VmFsdWU7XG4gIH07XG5cbiAgRHJvcGRvd25NZW51LnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2Nyb2xsQWN0aXZlSXRlbVRvVmlldygpO1xuICAgIHRoaXMubGFzdFZpc2libGUgPSB0aGlzLnByb3BzLnZpc2libGU7XG4gIH07XG5cbiAgRHJvcGRvd25NZW51LnByb3RvdHlwZS5zaG91bGRDb21wb25lbnRVcGRhdGUgPSBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgaWYgKCFuZXh0UHJvcHMudmlzaWJsZSkge1xuICAgICAgdGhpcy5sYXN0VmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBmcmVlemUgd2hlbiBoaWRlXG4gICAgcmV0dXJuIG5leHRQcm9wcy52aXNpYmxlO1xuICB9O1xuXG4gIERyb3Bkb3duTWVudS5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFwcmV2UHJvcHMudmlzaWJsZSAmJiBwcm9wcy52aXNpYmxlKSB7XG4gICAgICB0aGlzLnNjcm9sbEFjdGl2ZUl0ZW1Ub1ZpZXcoKTtcbiAgICB9XG4gICAgdGhpcy5sYXN0VmlzaWJsZSA9IHByb3BzLnZpc2libGU7XG4gICAgdGhpcy5sYXN0SW5wdXRWYWx1ZSA9IHByb3BzLmlucHV0VmFsdWU7XG4gIH07XG5cbiAgRHJvcGRvd25NZW51LnByb3RvdHlwZS5yZW5kZXJNZW51ID0gZnVuY3Rpb24gcmVuZGVyTWVudSgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIG1lbnVJdGVtcyA9IHByb3BzLm1lbnVJdGVtcyxcbiAgICAgICAgZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uID0gcHJvcHMuZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uLFxuICAgICAgICB2YWx1ZSA9IHByb3BzLnZhbHVlLFxuICAgICAgICBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgIG11bHRpcGxlID0gcHJvcHMubXVsdGlwbGUsXG4gICAgICAgIG9uTWVudVNlbGVjdCA9IHByb3BzLm9uTWVudVNlbGVjdCxcbiAgICAgICAgaW5wdXRWYWx1ZSA9IHByb3BzLmlucHV0VmFsdWUsXG4gICAgICAgIGZpcnN0QWN0aXZlVmFsdWUgPSBwcm9wcy5maXJzdEFjdGl2ZVZhbHVlLFxuICAgICAgICBiYWNrZmlsbFZhbHVlID0gcHJvcHMuYmFja2ZpbGxWYWx1ZTtcblxuICAgIGlmIChtZW51SXRlbXMgJiYgbWVudUl0ZW1zLmxlbmd0aCkge1xuICAgICAgdmFyIG1lbnVQcm9wcyA9IHt9O1xuICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgIG1lbnVQcm9wcy5vbkRlc2VsZWN0ID0gcHJvcHMub25NZW51RGVzZWxlY3Q7XG4gICAgICAgIG1lbnVQcm9wcy5vblNlbGVjdCA9IG9uTWVudVNlbGVjdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lbnVQcm9wcy5vbkNsaWNrID0gb25NZW51U2VsZWN0O1xuICAgICAgfVxuXG4gICAgICB2YXIgc2VsZWN0ZWRLZXlzID0gZ2V0U2VsZWN0S2V5cyhtZW51SXRlbXMsIHZhbHVlKTtcbiAgICAgIHZhciBhY3RpdmVLZXlQcm9wcyA9IHt9O1xuXG4gICAgICB2YXIgY2xvbmVkTWVudUl0ZW1zID0gbWVudUl0ZW1zO1xuICAgICAgaWYgKHNlbGVjdGVkS2V5cy5sZW5ndGggfHwgZmlyc3RBY3RpdmVWYWx1ZSkge1xuICAgICAgICBpZiAocHJvcHMudmlzaWJsZSAmJiAhdGhpcy5sYXN0VmlzaWJsZSkge1xuICAgICAgICAgIGFjdGl2ZUtleVByb3BzLmFjdGl2ZUtleSA9IHNlbGVjdGVkS2V5c1swXSB8fCBmaXJzdEFjdGl2ZVZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBmb3VuZEZpcnN0ID0gZmFsc2U7XG4gICAgICAgIC8vIHNldCBmaXJzdEFjdGl2ZUl0ZW0gdmlhIGNsb25pbmcgbWVudXNcbiAgICAgICAgLy8gZm9yIHNjcm9sbCBpbnRvIHZpZXdcbiAgICAgICAgdmFyIGNsb25lID0gZnVuY3Rpb24gY2xvbmUoaXRlbSkge1xuICAgICAgICAgIGlmICghZm91bmRGaXJzdCAmJiBzZWxlY3RlZEtleXMuaW5kZXhPZihpdGVtLmtleSkgIT09IC0xIHx8ICFmb3VuZEZpcnN0ICYmICFzZWxlY3RlZEtleXMubGVuZ3RoICYmIGZpcnN0QWN0aXZlVmFsdWUuaW5kZXhPZihpdGVtLmtleSkgIT09IC0xKSB7XG4gICAgICAgICAgICBmb3VuZEZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBjbG9uZUVsZW1lbnQoaXRlbSwge1xuICAgICAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihfcmVmKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMyLmZpcnN0QWN0aXZlSXRlbSA9IF9yZWY7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfTtcblxuICAgICAgICBjbG9uZWRNZW51SXRlbXMgPSBtZW51SXRlbXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgaWYgKGl0ZW0udHlwZS5pc01lbnVJdGVtR3JvdXApIHtcbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IHRvQXJyYXkoaXRlbS5wcm9wcy5jaGlsZHJlbikubWFwKGNsb25lKTtcbiAgICAgICAgICAgIHJldHVybiBjbG9uZUVsZW1lbnQoaXRlbSwge30sIGNoaWxkcmVuKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNsb25lKGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gY2xlYXIgYWN0aXZlS2V5IHdoZW4gaW5wdXRWYWx1ZSBjaGFuZ2VcbiAgICAgIHZhciBsYXN0VmFsdWUgPSB2YWx1ZSAmJiB2YWx1ZVt2YWx1ZS5sZW5ndGggLSAxXTtcbiAgICAgIGlmIChpbnB1dFZhbHVlICE9PSB0aGlzLmxhc3RJbnB1dFZhbHVlICYmICghbGFzdFZhbHVlIHx8IGxhc3RWYWx1ZSAhPT0gYmFja2ZpbGxWYWx1ZSkpIHtcbiAgICAgICAgYWN0aXZlS2V5UHJvcHMuYWN0aXZlS2V5ID0gJyc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBNZW51LFxuICAgICAgICBfZXh0ZW5kcyh7XG4gICAgICAgICAgcmVmOiBzYXZlUmVmKHRoaXMsICdtZW51UmVmJyksXG4gICAgICAgICAgc3R5bGU6IHRoaXMucHJvcHMuZHJvcGRvd25NZW51U3R5bGUsXG4gICAgICAgICAgZGVmYXVsdEFjdGl2ZUZpcnN0OiBkZWZhdWx0QWN0aXZlRmlyc3RPcHRpb25cbiAgICAgICAgfSwgYWN0aXZlS2V5UHJvcHMsIHtcbiAgICAgICAgICBtdWx0aXBsZTogbXVsdGlwbGVcbiAgICAgICAgfSwgbWVudVByb3BzLCB7XG4gICAgICAgICAgc2VsZWN0ZWRLZXlzOiBzZWxlY3RlZEtleXMsXG4gICAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMgKyAnLW1lbnUnXG4gICAgICAgIH0pLFxuICAgICAgICBjbG9uZWRNZW51SXRlbXNcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIERyb3Bkb3duTWVudS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciByZW5kZXJNZW51ID0gdGhpcy5yZW5kZXJNZW51KCk7XG4gICAgcmV0dXJuIHJlbmRlck1lbnUgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7XG4gICAgICAgIHN0eWxlOiB7IG92ZXJmbG93OiAnYXV0bycgfSxcbiAgICAgICAgb25Gb2N1czogdGhpcy5wcm9wcy5vblBvcHVwRm9jdXMsXG4gICAgICAgIG9uTW91c2VEb3duOiBwcmV2ZW50RGVmYXVsdEV2ZW50LFxuICAgICAgICBvblNjcm9sbDogdGhpcy5wcm9wcy5vblBvcHVwU2Nyb2xsXG4gICAgICB9LFxuICAgICAgcmVuZGVyTWVudVxuICAgICkgOiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBEcm9wZG93bk1lbnU7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbkRyb3Bkb3duTWVudS5wcm9wVHlwZXMgPSB7XG4gIGRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbjogUHJvcFR5cGVzLmJvb2wsXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxuICBkcm9wZG93bk1lbnVTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxuICBvblBvcHVwRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuICBvblBvcHVwU2Nyb2xsOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25NZW51RGVTZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICBvbk1lbnVTZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICBwcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG1lbnVJdGVtczogUHJvcFR5cGVzLmFueSxcbiAgaW5wdXRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2xcbn07XG5leHBvcnQgZGVmYXVsdCBEcm9wZG93bk1lbnU7XG5cblxuRHJvcGRvd25NZW51LmRpc3BsYXlOYW1lID0gJ0Ryb3Bkb3duTWVudSc7IiwiaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnZhciBPcHRHcm91cCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhPcHRHcm91cCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gT3B0R3JvdXAoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE9wdEdyb3VwKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgcmV0dXJuIE9wdEdyb3VwO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5PcHRHcm91cC5pc1NlbGVjdE9wdEdyb3VwID0gdHJ1ZTtcbmV4cG9ydCBkZWZhdWx0IE9wdEdyb3VwOyIsImltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxudmFyIE9wdGlvbiA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhPcHRpb24sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIE9wdGlvbigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgT3B0aW9uKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgcmV0dXJuIE9wdGlvbjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuT3B0aW9uLnByb3BUeXBlcyA9IHtcbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKVxufTtcbk9wdGlvbi5pc1NlbGVjdE9wdGlvbiA9IHRydWU7XG5leHBvcnQgZGVmYXVsdCBPcHRpb247IiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZnVuY3Rpb24gdmFsdWVUeXBlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICB2YXIgYmFzaWNUeXBlID0gUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pO1xuXG4gIHZhciBsYWJlbEluVmFsdWVTaGFwZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gICAga2V5OiBiYXNpY1R5cGUuaXNSZXF1aXJlZCxcbiAgICBsYWJlbDogUHJvcFR5cGVzLm5vZGVcbiAgfSk7XG4gIGlmIChwcm9wcy5sYWJlbEluVmFsdWUpIHtcbiAgICB2YXIgdmFsaWRhdGUgPSBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYXJyYXlPZihsYWJlbEluVmFsdWVTaGFwZSksIGxhYmVsSW5WYWx1ZVNoYXBlXSk7XG4gICAgdmFyIGVycm9yID0gdmFsaWRhdGUuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICAgIGlmIChlcnJvcikge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignSW52YWxpZCBwcm9wIGAnICsgcHJvcE5hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgJyArICgnd2hlbiB5b3Ugc2V0IGBsYWJlbEluVmFsdWVgIHRvIGB0cnVlYCwgYCcgKyBwcm9wTmFtZSArICdgIHNob3VsZCBpbiAnKSArICdzaGFwZSBvZiBgeyBrZXk6IHN0cmluZyB8IG51bWJlciwgbGFiZWw/OiBSZWFjdE5vZGUgfWAuJyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKChwcm9wcy5tb2RlID09PSAnbXVsdGlwbGUnIHx8IHByb3BzLm1vZGUgPT09ICd0YWdzJyB8fCBwcm9wcy5tdWx0aXBsZSB8fCBwcm9wcy50YWdzKSAmJiBwcm9wc1twcm9wTmFtZV0gPT09ICcnKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcignSW52YWxpZCBwcm9wIGAnICsgcHJvcE5hbWUgKyAnYCBvZiB0eXBlIGBzdHJpbmdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCAnICsgJ2V4cGVjdGVkIGBhcnJheWAgd2hlbiBgbXVsdGlwbGVgIG9yIGB0YWdzYCBpcyBgdHJ1ZWAuJyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIF92YWxpZGF0ZSA9IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5hcnJheU9mKGJhc2ljVHlwZSksIGJhc2ljVHlwZV0pO1xuICAgIHJldHVybiBfdmFsaWRhdGUuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICB9XG59XG5cbmV4cG9ydCB2YXIgU2VsZWN0UHJvcFR5cGVzID0ge1xuICBkZWZhdWx0QWN0aXZlRmlyc3RPcHRpb246IFByb3BUeXBlcy5ib29sLFxuICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG4gIGZpbHRlck9wdGlvbjogUHJvcFR5cGVzLmFueSxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG4gIHNob3dTZWFyY2g6IFByb3BUeXBlcy5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGFsbG93Q2xlYXI6IFByb3BUeXBlcy5ib29sLFxuICBzaG93QXJyb3c6IFByb3BUeXBlcy5ib29sLFxuICB0YWdzOiBQcm9wVHlwZXMuYm9vbCxcbiAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRyYW5zaXRpb25OYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvcHRpb25MYWJlbFByb3A6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9wdGlvbkZpbHRlclByb3A6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFuaW1hdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hvaWNlVHJhbnNpdGlvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TZWFyY2g6IFByb3BUeXBlcy5mdW5jLFxuICBvblBvcHVwU2Nyb2xsOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Nb3VzZUVudGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Nb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25JbnB1dEtleURvd246IFByb3BUeXBlcy5mdW5jLFxuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLmFueSxcbiAgb25EZXNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIGxhYmVsSW5WYWx1ZTogUHJvcFR5cGVzLmJvb2wsXG4gIHZhbHVlOiB2YWx1ZVR5cGUsXG4gIGRlZmF1bHRWYWx1ZTogdmFsdWVUeXBlLFxuICBkcm9wZG93blN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBtYXhUYWdUZXh0TGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyLFxuICBtYXhUYWdDb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgbWF4VGFnUGxhY2Vob2xkZXI6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMuZnVuY10pLFxuICB0b2tlblNlcGFyYXRvcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICBnZXRJbnB1dEVsZW1lbnQ6IFByb3BUeXBlcy5mdW5jLFxuICBzaG93QWN0aW9uOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKVxufTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbi8qIGVzbGludCBmdW5jLW5hbWVzOiAxICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgS2V5Q29kZSBmcm9tICdyYy11dGlsL2VzL0tleUNvZGUnO1xuaW1wb3J0IGNoaWxkcmVuVG9BcnJheSBmcm9tICdyYy11dGlsL2VzL0NoaWxkcmVuL3RvQXJyYXknO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgQW5pbWF0ZSBmcm9tICdyYy1hbmltYXRlJztcbmltcG9ydCBjbGFzc2VzIGZyb20gJ2NvbXBvbmVudC1jbGFzc2VzJztcbmltcG9ydCB7IEl0ZW0gYXMgTWVudUl0ZW0sIEl0ZW1Hcm91cCBhcyBNZW51SXRlbUdyb3VwIH0gZnJvbSAncmMtbWVudSc7XG5pbXBvcnQgd2FybmluZyBmcm9tICd3YXJuaW5nJztcbmltcG9ydCBPcHRpb24gZnJvbSAnLi9PcHRpb24nO1xuXG5pbXBvcnQgeyBnZXRQcm9wVmFsdWUsIGdldFZhbHVlUHJvcFZhbHVlLCBpc0NvbWJvYm94LCBpc011bHRpcGxlT3JUYWdzLCBpc011bHRpcGxlT3JUYWdzT3JDb21ib2JveCwgaXNTaW5nbGVNb2RlLCB0b0FycmF5LCBnZXRNYXBLZXksIGZpbmRJbmRleEluVmFsdWVCeVNpbmdsZVZhbHVlLCBnZXRMYWJlbEZyb21Qcm9wc1ZhbHVlLCBVTlNFTEVDVEFCTEVfQVRUUklCVVRFLCBVTlNFTEVDVEFCTEVfU1RZTEUsIHByZXZlbnREZWZhdWx0RXZlbnQsIGZpbmRGaXJzdE1lbnVJdGVtLCBpbmNsdWRlc1NlcGFyYXRvcnMsIHNwbGl0QnlTZXBhcmF0b3JzLCBkZWZhdWx0RmlsdGVyRm4sIHZhbGlkYXRlT3B0aW9uVmFsdWUsIHNhdmVSZWYgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IFNlbGVjdFRyaWdnZXIgZnJvbSAnLi9TZWxlY3RUcmlnZ2VyJztcbmltcG9ydCB7IFNlbGVjdFByb3BUeXBlcyB9IGZyb20gJy4vUHJvcFR5cGVzJztcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmZ1bmN0aW9uIGNoYWluaW5nKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZm5zID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgZm5zW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChmbnNbaV0gJiYgdHlwZW9mIGZuc1tpXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBmbnNbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG52YXIgU2VsZWN0ID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFNlbGVjdCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gU2VsZWN0KHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFNlbGVjdCk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF9pbml0aWFsaXNlUHJvcHMuY2FsbChfdGhpcyk7XG5cbiAgICB2YXIgdmFsdWUgPSBfdGhpcy5nZXRWYWx1ZUZyb21Qcm9wcyhwcm9wcyk7XG4gICAgdmFyIG9wdGlvbnNJbmZvID0gX3RoaXMuZ2V0T3B0aW9uc0luZm9Gcm9tUHJvcHMocHJvcHMpO1xuICAgIHZhciBpbnB1dFZhbHVlID0gJyc7XG4gICAgaWYgKHByb3BzLmNvbWJvYm94KSB7XG4gICAgICBpbnB1dFZhbHVlID0gdmFsdWUubGVuZ3RoID8gX3RoaXMuZ2V0TGFiZWxCeVNpbmdsZVZhbHVlKHZhbHVlWzBdLCBvcHRpb25zSW5mbykgOiAnJztcbiAgICB9XG4gICAgdmFyIG9wZW4gPSBwcm9wcy5vcGVuO1xuICAgIGlmIChvcGVuID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG9wZW4gPSBwcm9wcy5kZWZhdWx0T3BlbjtcbiAgICB9XG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBpbnB1dFZhbHVlOiBpbnB1dFZhbHVlLFxuICAgICAgb3Blbjogb3BlbixcbiAgICAgIG9wdGlvbnNJbmZvOiBvcHRpb25zSW5mb1xuICAgIH07XG4gICAgX3RoaXMuYWRqdXN0T3BlblN0YXRlKCk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgU2VsZWN0LnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLmF1dG9Gb2N1cykge1xuICAgICAgdGhpcy5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBTZWxlY3QucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgdGhpcy5wcm9wcyA9IG5leHRQcm9wcztcbiAgICB0aGlzLnN0YXRlID0gbmV4dFN0YXRlO1xuICAgIHRoaXMuYWRqdXN0T3BlblN0YXRlKCk7XG4gIH07XG5cbiAgU2VsZWN0LnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgaWYgKGlzTXVsdGlwbGVPclRhZ3ModGhpcy5wcm9wcykpIHtcbiAgICAgIHZhciBpbnB1dE5vZGUgPSB0aGlzLmdldElucHV0RE9NTm9kZSgpO1xuICAgICAgdmFyIG1pcnJvck5vZGUgPSB0aGlzLmdldElucHV0TWlycm9yRE9NTm9kZSgpO1xuICAgICAgaWYgKGlucHV0Tm9kZS52YWx1ZSkge1xuICAgICAgICBpbnB1dE5vZGUuc3R5bGUud2lkdGggPSAnJztcbiAgICAgICAgaW5wdXROb2RlLnN0eWxlLndpZHRoID0gbWlycm9yTm9kZS5jbGllbnRXaWR0aCArICdweCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbnB1dE5vZGUuc3R5bGUud2lkdGggPSAnJztcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgU2VsZWN0LnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuY2xlYXJGb2N1c1RpbWUoKTtcbiAgICB0aGlzLmNsZWFyQmx1clRpbWUoKTtcbiAgICB0aGlzLmNsZWFyQWRqdXN0VGltZXIoKTtcbiAgICBpZiAodGhpcy5kcm9wZG93bkNvbnRhaW5lcikge1xuICAgICAgUmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZSh0aGlzLmRyb3Bkb3duQ29udGFpbmVyKTtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5kcm9wZG93bkNvbnRhaW5lcik7XG4gICAgICB0aGlzLmRyb3Bkb3duQ29udGFpbmVyID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gY29tYm9ib3ggaWdub3JlXG5cblxuICBTZWxlY3QucHJvdG90eXBlLmZvY3VzID0gZnVuY3Rpb24gZm9jdXMoKSB7XG4gICAgaWYgKGlzU2luZ2xlTW9kZSh0aGlzLnByb3BzKSkge1xuICAgICAgdGhpcy5zZWxlY3Rpb25SZWYuZm9jdXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5nZXRJbnB1dERPTU5vZGUoKS5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICBTZWxlY3QucHJvdG90eXBlLmJsdXIgPSBmdW5jdGlvbiBibHVyKCkge1xuICAgIGlmIChpc1NpbmdsZU1vZGUodGhpcy5wcm9wcykpIHtcbiAgICAgIHRoaXMuc2VsZWN0aW9uUmVmLmJsdXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5nZXRJbnB1dERPTU5vZGUoKS5ibHVyKCk7XG4gICAgfVxuICB9O1xuXG4gIFNlbGVjdC5wcm90b3R5cGUucmVuZGVyQ2xlYXIgPSBmdW5jdGlvbiByZW5kZXJDbGVhcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgcHJlZml4Q2xzID0gX3Byb3BzLnByZWZpeENscyxcbiAgICAgICAgYWxsb3dDbGVhciA9IF9wcm9wcy5hbGxvd0NsZWFyO1xuICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICB2YWx1ZSA9IF9zdGF0ZS52YWx1ZSxcbiAgICAgICAgaW5wdXRWYWx1ZSA9IF9zdGF0ZS5pbnB1dFZhbHVlO1xuXG4gICAgdmFyIGNsZWFyID0gUmVhY3QuY3JlYXRlRWxlbWVudCgnc3BhbicsIF9leHRlbmRzKHtcbiAgICAgIGtleTogJ2NsZWFyJyxcbiAgICAgIG9uTW91c2VEb3duOiBwcmV2ZW50RGVmYXVsdEV2ZW50LFxuICAgICAgc3R5bGU6IFVOU0VMRUNUQUJMRV9TVFlMRVxuICAgIH0sIFVOU0VMRUNUQUJMRV9BVFRSSUJVVEUsIHtcbiAgICAgIGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1zZWxlY3Rpb25fX2NsZWFyJyxcbiAgICAgIG9uQ2xpY2s6IHRoaXMub25DbGVhclNlbGVjdGlvblxuICAgIH0pKTtcbiAgICBpZiAoIWFsbG93Q2xlYXIpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoaXNDb21ib2JveCh0aGlzLnByb3BzKSkge1xuICAgICAgaWYgKGlucHV0VmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGNsZWFyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChpbnB1dFZhbHVlIHx8IHZhbHVlLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGNsZWFyO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBTZWxlY3QucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Jvb3RDbHM7XG5cbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBtdWx0aXBsZSA9IGlzTXVsdGlwbGVPclRhZ3MocHJvcHMpO1xuICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzO1xuXG4gICAgdmFyIGN0cmxOb2RlID0gdGhpcy5yZW5kZXJUb3BDb250cm9sTm9kZSgpO1xuICAgIHZhciBleHRyYVNlbGVjdGlvblByb3BzID0ge307XG4gICAgdmFyIG9wZW4gPSB0aGlzLnN0YXRlLm9wZW47XG5cbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMuX29wdGlvbnM7XG4gICAgaWYgKCFpc011bHRpcGxlT3JUYWdzT3JDb21ib2JveChwcm9wcykpIHtcbiAgICAgIGV4dHJhU2VsZWN0aW9uUHJvcHMgPSB7XG4gICAgICAgIG9uS2V5RG93bjogdGhpcy5vbktleURvd24sXG4gICAgICAgIHRhYkluZGV4OiBwcm9wcy5kaXNhYmxlZCA/IC0xIDogMFxuICAgICAgfTtcbiAgICB9XG4gICAgdmFyIHJvb3RDbHMgPSAoX3Jvb3RDbHMgPSB7fSwgX3Jvb3RDbHNbY2xhc3NOYW1lXSA9ICEhY2xhc3NOYW1lLCBfcm9vdENsc1twcmVmaXhDbHNdID0gMSwgX3Jvb3RDbHNbcHJlZml4Q2xzICsgJy1vcGVuJ10gPSBvcGVuLCBfcm9vdENsc1twcmVmaXhDbHMgKyAnLWZvY3VzZWQnXSA9IG9wZW4gfHwgISF0aGlzLl9mb2N1c2VkLCBfcm9vdENsc1twcmVmaXhDbHMgKyAnLWNvbWJvYm94J10gPSBpc0NvbWJvYm94KHByb3BzKSwgX3Jvb3RDbHNbcHJlZml4Q2xzICsgJy1kaXNhYmxlZCddID0gZGlzYWJsZWQsIF9yb290Q2xzW3ByZWZpeENscyArICctZW5hYmxlZCddID0gIWRpc2FibGVkLCBfcm9vdENsc1twcmVmaXhDbHMgKyAnLWFsbG93LWNsZWFyJ10gPSAhIXByb3BzLmFsbG93Q2xlYXIsIF9yb290Q2xzKTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIFNlbGVjdFRyaWdnZXIsXG4gICAgICB7XG4gICAgICAgIG9uUG9wdXBGb2N1czogdGhpcy5vblBvcHVwRm9jdXMsXG4gICAgICAgIG9uTW91c2VFbnRlcjogdGhpcy5wcm9wcy5vbk1vdXNlRW50ZXIsXG4gICAgICAgIG9uTW91c2VMZWF2ZTogdGhpcy5wcm9wcy5vbk1vdXNlTGVhdmUsXG4gICAgICAgIGRyb3Bkb3duQWxpZ246IHByb3BzLmRyb3Bkb3duQWxpZ24sXG4gICAgICAgIGRyb3Bkb3duQ2xhc3NOYW1lOiBwcm9wcy5kcm9wZG93bkNsYXNzTmFtZSxcbiAgICAgICAgZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoOiBwcm9wcy5kcm9wZG93bk1hdGNoU2VsZWN0V2lkdGgsXG4gICAgICAgIGRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbjogcHJvcHMuZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uLFxuICAgICAgICBkcm9wZG93bk1lbnVTdHlsZTogcHJvcHMuZHJvcGRvd25NZW51U3R5bGUsXG4gICAgICAgIHRyYW5zaXRpb25OYW1lOiBwcm9wcy50cmFuc2l0aW9uTmFtZSxcbiAgICAgICAgYW5pbWF0aW9uOiBwcm9wcy5hbmltYXRpb24sXG4gICAgICAgIHByZWZpeENsczogcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICBkcm9wZG93blN0eWxlOiBwcm9wcy5kcm9wZG93blN0eWxlLFxuICAgICAgICBjb21ib2JveDogcHJvcHMuY29tYm9ib3gsXG4gICAgICAgIHNob3dTZWFyY2g6IHByb3BzLnNob3dTZWFyY2gsXG4gICAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICAgIG11bHRpcGxlOiBtdWx0aXBsZSxcbiAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICB2aXNpYmxlOiBvcGVuLFxuICAgICAgICBpbnB1dFZhbHVlOiBzdGF0ZS5pbnB1dFZhbHVlLFxuICAgICAgICB2YWx1ZTogc3RhdGUudmFsdWUsXG4gICAgICAgIGJhY2tmaWxsVmFsdWU6IHN0YXRlLmJhY2tmaWxsVmFsdWUsXG4gICAgICAgIGZpcnN0QWN0aXZlVmFsdWU6IHByb3BzLmZpcnN0QWN0aXZlVmFsdWUsXG4gICAgICAgIG9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlOiB0aGlzLm9uRHJvcGRvd25WaXNpYmxlQ2hhbmdlLFxuICAgICAgICBnZXRQb3B1cENvbnRhaW5lcjogcHJvcHMuZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICAgIG9uTWVudVNlbGVjdDogdGhpcy5vbk1lbnVTZWxlY3QsXG4gICAgICAgIG9uTWVudURlc2VsZWN0OiB0aGlzLm9uTWVudURlc2VsZWN0LFxuICAgICAgICBvblBvcHVwU2Nyb2xsOiBwcm9wcy5vblBvcHVwU2Nyb2xsLFxuICAgICAgICBzaG93QWN0aW9uOiBwcm9wcy5zaG93QWN0aW9uLFxuICAgICAgICByZWY6IHNhdmVSZWYodGhpcywgJ3NlbGVjdFRyaWdnZXJSZWYnKVxuICAgICAgfSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAgc3R5bGU6IHByb3BzLnN0eWxlLFxuICAgICAgICAgIHJlZjogc2F2ZVJlZih0aGlzLCAncm9vdFJlZicpLFxuICAgICAgICAgIG9uQmx1cjogdGhpcy5vbk91dGVyQmx1cixcbiAgICAgICAgICBvbkZvY3VzOiB0aGlzLm9uT3V0ZXJGb2N1cyxcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzbmFtZXMocm9vdENscylcbiAgICAgICAgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICBfZXh0ZW5kcyh7XG4gICAgICAgICAgICByZWY6IHNhdmVSZWYodGhpcywgJ3NlbGVjdGlvblJlZicpLFxuICAgICAgICAgICAga2V5OiAnc2VsZWN0aW9uJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1zZWxlY3Rpb25cXG4gICAgICAgICAgICAnICsgcHJlZml4Q2xzICsgJy1zZWxlY3Rpb24tLScgKyAobXVsdGlwbGUgPyAnbXVsdGlwbGUnIDogJ3NpbmdsZScpLFxuICAgICAgICAgICAgcm9sZTogJ2NvbWJvYm94JyxcbiAgICAgICAgICAgICdhcmlhLWF1dG9jb21wbGV0ZSc6ICdsaXN0JyxcbiAgICAgICAgICAgICdhcmlhLWhhc3BvcHVwJzogJ3RydWUnLFxuICAgICAgICAgICAgJ2FyaWEtZXhwYW5kZWQnOiBvcGVuXG4gICAgICAgICAgfSwgZXh0cmFTZWxlY3Rpb25Qcm9wcyksXG4gICAgICAgICAgY3RybE5vZGUsXG4gICAgICAgICAgdGhpcy5yZW5kZXJDbGVhcigpLFxuICAgICAgICAgIG11bHRpcGxlIHx8ICFwcm9wcy5zaG93QXJyb3cgPyBudWxsIDogUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgIF9leHRlbmRzKHtcbiAgICAgICAgICAgICAga2V5OiAnYXJyb3cnLFxuICAgICAgICAgICAgICBjbGFzc05hbWU6IHByZWZpeENscyArICctYXJyb3cnLFxuICAgICAgICAgICAgICBzdHlsZTogVU5TRUxFQ1RBQkxFX1NUWUxFXG4gICAgICAgICAgICB9LCBVTlNFTEVDVEFCTEVfQVRUUklCVVRFLCB7XG4gICAgICAgICAgICAgIG9uQ2xpY2s6IHRoaXMub25BcnJvd0NsaWNrXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2InLCBudWxsKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIFNlbGVjdDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuU2VsZWN0LnByb3BUeXBlcyA9IFNlbGVjdFByb3BUeXBlcztcblNlbGVjdC5kZWZhdWx0UHJvcHMgPSB7XG4gIHByZWZpeENsczogJ3JjLXNlbGVjdCcsXG4gIGRlZmF1bHRPcGVuOiBmYWxzZSxcbiAgbGFiZWxJblZhbHVlOiBmYWxzZSxcbiAgZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uOiB0cnVlLFxuICBzaG93U2VhcmNoOiB0cnVlLFxuICBhbGxvd0NsZWFyOiBmYWxzZSxcbiAgcGxhY2Vob2xkZXI6ICcnLFxuICBvbkNoYW5nZTogbm9vcCxcbiAgb25Gb2N1czogbm9vcCxcbiAgb25CbHVyOiBub29wLFxuICBvblNlbGVjdDogbm9vcCxcbiAgb25TZWFyY2g6IG5vb3AsXG4gIG9uRGVzZWxlY3Q6IG5vb3AsXG4gIG9uSW5wdXRLZXlEb3duOiBub29wLFxuICBzaG93QXJyb3c6IHRydWUsXG4gIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDogdHJ1ZSxcbiAgZHJvcGRvd25TdHlsZToge30sXG4gIGRyb3Bkb3duTWVudVN0eWxlOiB7fSxcbiAgb3B0aW9uRmlsdGVyUHJvcDogJ3ZhbHVlJyxcbiAgb3B0aW9uTGFiZWxQcm9wOiAndmFsdWUnLFxuICBub3RGb3VuZENvbnRlbnQ6ICdOb3QgRm91bmQnLFxuICBiYWNrZmlsbDogZmFsc2UsXG4gIHNob3dBY3Rpb246IFsnY2xpY2snXSxcbiAgdG9rZW5TZXBhcmF0b3JzOiBbXVxufTtcblxudmFyIF9pbml0aWFsaXNlUHJvcHMgPSBmdW5jdGlvbiBfaW5pdGlhbGlzZVByb3BzKCkge1xuICB2YXIgX3RoaXMyID0gdGhpcztcblxuICB0aGlzLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiAobmV4dFByb3BzKSB7XG4gICAgdmFyIG9wdGlvbnNJbmZvID0gX3RoaXMyLmdldE9wdGlvbnNJbmZvRnJvbVByb3BzKG5leHRQcm9wcyk7XG4gICAgX3RoaXMyLnNldFN0YXRlKHtcbiAgICAgIG9wdGlvbnNJbmZvOiBvcHRpb25zSW5mb1xuICAgIH0pO1xuICAgIGlmICgndmFsdWUnIGluIG5leHRQcm9wcykge1xuICAgICAgdmFyIHZhbHVlID0gX3RoaXMyLmdldFZhbHVlRnJvbVByb3BzKG5leHRQcm9wcyk7XG4gICAgICBfdGhpczIuc2V0U3RhdGUoe1xuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0sIF90aGlzMi5mb3JjZVBvcHVwQWxpZ24pO1xuICAgICAgaWYgKG5leHRQcm9wcy5jb21ib2JveCkge1xuICAgICAgICBfdGhpczIuc2V0U3RhdGUoe1xuICAgICAgICAgIGlucHV0VmFsdWU6IHZhbHVlLmxlbmd0aCA/IF90aGlzMi5nZXRMYWJlbEJ5U2luZ2xlVmFsdWUodmFsdWVbMF0sIG9wdGlvbnNJbmZvKSA6ICcnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB0aGlzLm9uSW5wdXRDaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgdG9rZW5TZXBhcmF0b3JzID0gX3RoaXMyLnByb3BzLnRva2VuU2VwYXJhdG9ycztcblxuICAgIHZhciB2YWwgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgaWYgKGlzTXVsdGlwbGVPclRhZ3MoX3RoaXMyLnByb3BzKSAmJiB0b2tlblNlcGFyYXRvcnMubGVuZ3RoICYmIGluY2x1ZGVzU2VwYXJhdG9ycyh2YWwsIHRva2VuU2VwYXJhdG9ycykpIHtcbiAgICAgIHZhciBuZXh0VmFsdWUgPSBfdGhpczIuZ2V0VmFsdWVCeUlucHV0KHZhbCk7XG4gICAgICBpZiAobmV4dFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgX3RoaXMyLmZpcmVDaGFuZ2UobmV4dFZhbHVlKTtcbiAgICAgIH1cbiAgICAgIF90aGlzMi5zZXRPcGVuU3RhdGUoZmFsc2UsIHRydWUpO1xuICAgICAgX3RoaXMyLnNldElucHV0VmFsdWUoJycsIGZhbHNlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgX3RoaXMyLnNldElucHV0VmFsdWUodmFsKTtcbiAgICBfdGhpczIuc2V0U3RhdGUoe1xuICAgICAgb3BlbjogdHJ1ZVxuICAgIH0pO1xuICAgIGlmIChpc0NvbWJvYm94KF90aGlzMi5wcm9wcykpIHtcbiAgICAgIF90aGlzMi5maXJlQ2hhbmdlKFt2YWxdKTtcbiAgICB9XG4gIH07XG5cbiAgdGhpcy5vbkRyb3Bkb3duVmlzaWJsZUNoYW5nZSA9IGZ1bmN0aW9uIChvcGVuKSB7XG4gICAgaWYgKG9wZW4gJiYgIV90aGlzMi5fZm9jdXNlZCkge1xuICAgICAgX3RoaXMyLmNsZWFyQmx1clRpbWUoKTtcbiAgICAgIF90aGlzMi50aW1lb3V0Rm9jdXMoKTtcbiAgICAgIF90aGlzMi5fZm9jdXNlZCA9IHRydWU7XG4gICAgICBfdGhpczIudXBkYXRlRm9jdXNDbGFzc05hbWUoKTtcbiAgICB9XG4gICAgX3RoaXMyLnNldE9wZW5TdGF0ZShvcGVuKTtcbiAgfTtcblxuICB0aGlzLm9uS2V5RG93biA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBwcm9wcyA9IF90aGlzMi5wcm9wcztcbiAgICBpZiAocHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuICAgIGlmIChfdGhpczIuc3RhdGUub3BlbiAmJiAhX3RoaXMyLmdldElucHV0RE9NTm9kZSgpKSB7XG4gICAgICBfdGhpczIub25JbnB1dEtleURvd24oZXZlbnQpO1xuICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gS2V5Q29kZS5FTlRFUiB8fCBrZXlDb2RlID09PSBLZXlDb2RlLkRPV04pIHtcbiAgICAgIF90aGlzMi5zZXRPcGVuU3RhdGUodHJ1ZSk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLm9uSW5wdXRLZXlEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIHByb3BzID0gX3RoaXMyLnByb3BzO1xuICAgIGlmIChwcm9wcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgc3RhdGUgPSBfdGhpczIuc3RhdGU7XG4gICAgdmFyIGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuICAgIGlmIChpc011bHRpcGxlT3JUYWdzKHByb3BzKSAmJiAhZXZlbnQudGFyZ2V0LnZhbHVlICYmIGtleUNvZGUgPT09IEtleUNvZGUuQkFDS1NQQUNFKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdmFyIHZhbHVlID0gc3RhdGUudmFsdWU7XG5cbiAgICAgIGlmICh2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgX3RoaXMyLnJlbW92ZVNlbGVjdGVkKHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGtleUNvZGUgPT09IEtleUNvZGUuRE9XTikge1xuICAgICAgaWYgKCFzdGF0ZS5vcGVuKSB7XG4gICAgICAgIF90aGlzMi5vcGVuSWZIYXNDaGlsZHJlbigpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gS2V5Q29kZS5FU0MpIHtcbiAgICAgIGlmIChzdGF0ZS5vcGVuKSB7XG4gICAgICAgIF90aGlzMi5zZXRPcGVuU3RhdGUoZmFsc2UpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUub3Blbikge1xuICAgICAgdmFyIG1lbnUgPSBfdGhpczIuc2VsZWN0VHJpZ2dlclJlZi5nZXRJbm5lck1lbnUoKTtcbiAgICAgIGlmIChtZW51ICYmIG1lbnUub25LZXlEb3duKGV2ZW50LCBfdGhpczIuaGFuZGxlQmFja2ZpbGwpKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB0aGlzLm9uTWVudVNlbGVjdCA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGl0ZW0gPSBfcmVmLml0ZW07XG5cbiAgICB2YXIgdmFsdWUgPSBfdGhpczIuc3RhdGUudmFsdWU7XG4gICAgdmFyIHByb3BzID0gX3RoaXMyLnByb3BzO1xuICAgIHZhciBzZWxlY3RlZFZhbHVlID0gZ2V0VmFsdWVQcm9wVmFsdWUoaXRlbSk7XG4gICAgdmFyIGxhc3RWYWx1ZSA9IHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdO1xuICAgIF90aGlzMi5maXJlU2VsZWN0KHNlbGVjdGVkVmFsdWUpO1xuICAgIGlmIChpc011bHRpcGxlT3JUYWdzKHByb3BzKSkge1xuICAgICAgaWYgKGZpbmRJbmRleEluVmFsdWVCeVNpbmdsZVZhbHVlKHZhbHVlLCBzZWxlY3RlZFZhbHVlKSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFsdWUgPSB2YWx1ZS5jb25jYXQoW3NlbGVjdGVkVmFsdWVdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlzQ29tYm9ib3gocHJvcHMpKSB7XG4gICAgICAgIF90aGlzMi5za2lwQWRqdXN0T3BlbiA9IHRydWU7XG4gICAgICAgIF90aGlzMi5jbGVhckFkanVzdFRpbWVyKCk7XG4gICAgICAgIF90aGlzMi5za2lwQWRqdXN0T3BlblRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLnNraXBBZGp1c3RPcGVuID0gZmFsc2U7XG4gICAgICAgIH0sIDApO1xuICAgICAgfVxuICAgICAgaWYgKGxhc3RWYWx1ZSAmJiBsYXN0VmFsdWUgPT09IHNlbGVjdGVkVmFsdWUgJiYgc2VsZWN0ZWRWYWx1ZSAhPT0gX3RoaXMyLnN0YXRlLmJhY2tmaWxsVmFsdWUpIHtcbiAgICAgICAgX3RoaXMyLnNldE9wZW5TdGF0ZShmYWxzZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhbHVlID0gW3NlbGVjdGVkVmFsdWVdO1xuICAgICAgX3RoaXMyLnNldE9wZW5TdGF0ZShmYWxzZSwgdHJ1ZSk7XG4gICAgfVxuICAgIF90aGlzMi5maXJlQ2hhbmdlKHZhbHVlKTtcbiAgICB2YXIgaW5wdXRWYWx1ZSA9IHZvaWQgMDtcbiAgICBpZiAoaXNDb21ib2JveChwcm9wcykpIHtcbiAgICAgIGlucHV0VmFsdWUgPSBnZXRQcm9wVmFsdWUoaXRlbSwgcHJvcHMub3B0aW9uTGFiZWxQcm9wKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXRWYWx1ZSA9ICcnO1xuICAgIH1cbiAgICBfdGhpczIuc2V0SW5wdXRWYWx1ZShpbnB1dFZhbHVlLCBmYWxzZSk7XG4gIH07XG5cbiAgdGhpcy5vbk1lbnVEZXNlbGVjdCA9IGZ1bmN0aW9uIChfcmVmMikge1xuICAgIHZhciBpdGVtID0gX3JlZjIuaXRlbSxcbiAgICAgICAgZG9tRXZlbnQgPSBfcmVmMi5kb21FdmVudDtcblxuICAgIGlmIChkb21FdmVudC50eXBlID09PSAnY2xpY2snKSB7XG4gICAgICBfdGhpczIucmVtb3ZlU2VsZWN0ZWQoZ2V0VmFsdWVQcm9wVmFsdWUoaXRlbSkpO1xuICAgIH1cbiAgICBfdGhpczIuc2V0SW5wdXRWYWx1ZSgnJywgZmFsc2UpO1xuICB9O1xuXG4gIHRoaXMub25BcnJvd0NsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIV90aGlzMi5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgX3RoaXMyLnNldE9wZW5TdGF0ZSghX3RoaXMyLnN0YXRlLm9wZW4sICFfdGhpczIuc3RhdGUub3Blbik7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMub25QbGFjZWhvbGRlckNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChfdGhpczIuZ2V0SW5wdXRET01Ob2RlKCkpIHtcbiAgICAgIF90aGlzMi5nZXRJbnB1dERPTU5vZGUoKS5mb2N1cygpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLm9uT3V0ZXJGb2N1cyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKF90aGlzMi5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBfdGhpczIuY2xlYXJCbHVyVGltZSgpO1xuICAgIGlmICghaXNNdWx0aXBsZU9yVGFnc09yQ29tYm9ib3goX3RoaXMyLnByb3BzKSAmJiBlLnRhcmdldCA9PT0gX3RoaXMyLmdldElucHV0RE9NTm9kZSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChfdGhpczIuX2ZvY3VzZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgX3RoaXMyLl9mb2N1c2VkID0gdHJ1ZTtcbiAgICBfdGhpczIudXBkYXRlRm9jdXNDbGFzc05hbWUoKTtcbiAgICBfdGhpczIudGltZW91dEZvY3VzKCk7XG4gIH07XG5cbiAgdGhpcy5vblBvcHVwRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gZml4IGllIHNjcm9sbGJhciwgZm9jdXMgZWxlbWVudCBhZ2FpblxuICAgIF90aGlzMi5tYXliZUZvY3VzKHRydWUsIHRydWUpO1xuICB9O1xuXG4gIHRoaXMub25PdXRlckJsdXIgPSBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChfdGhpczIucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgX3RoaXMyLmJsdXJUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMyLl9mb2N1c2VkID0gZmFsc2U7XG4gICAgICBfdGhpczIudXBkYXRlRm9jdXNDbGFzc05hbWUoKTtcbiAgICAgIHZhciBwcm9wcyA9IF90aGlzMi5wcm9wcztcbiAgICAgIHZhciB2YWx1ZSA9IF90aGlzMi5zdGF0ZS52YWx1ZTtcbiAgICAgIHZhciBpbnB1dFZhbHVlID0gX3RoaXMyLnN0YXRlLmlucHV0VmFsdWU7XG5cbiAgICAgIGlmIChpc1NpbmdsZU1vZGUocHJvcHMpICYmIHByb3BzLnNob3dTZWFyY2ggJiYgaW5wdXRWYWx1ZSAmJiBwcm9wcy5kZWZhdWx0QWN0aXZlRmlyc3RPcHRpb24pIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBfdGhpczIuX29wdGlvbnMgfHwgW107XG4gICAgICAgIGlmIChvcHRpb25zLmxlbmd0aCkge1xuICAgICAgICAgIHZhciBmaXJzdE9wdGlvbiA9IGZpbmRGaXJzdE1lbnVJdGVtKG9wdGlvbnMpO1xuICAgICAgICAgIGlmIChmaXJzdE9wdGlvbikge1xuICAgICAgICAgICAgdmFsdWUgPSBbZ2V0VmFsdWVQcm9wVmFsdWUoZmlyc3RPcHRpb24pXTtcbiAgICAgICAgICAgIF90aGlzMi5maXJlQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaXNNdWx0aXBsZU9yVGFncyhwcm9wcykgJiYgaW5wdXRWYWx1ZSkge1xuICAgICAgICAvLyB3aHkgbm90IHVzZSBzZXRTdGF0ZT9cbiAgICAgICAgX3RoaXMyLnN0YXRlLmlucHV0VmFsdWUgPSBfdGhpczIuZ2V0SW5wdXRET01Ob2RlKCkudmFsdWUgPSAnJztcblxuICAgICAgICB2YWx1ZSA9IF90aGlzMi5nZXRWYWx1ZUJ5SW5wdXQoaW5wdXRWYWx1ZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgX3RoaXMyLmZpcmVDaGFuZ2UodmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBwcm9wcy5vbkJsdXIoX3RoaXMyLmdldFZMRm9yT25DaGFuZ2UodmFsdWUpKTtcbiAgICAgIF90aGlzMi5zZXRPcGVuU3RhdGUoZmFsc2UpO1xuICAgIH0sIDEwKTtcbiAgfTtcblxuICB0aGlzLm9uQ2xlYXJTZWxlY3Rpb24gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgcHJvcHMgPSBfdGhpczIucHJvcHM7XG4gICAgdmFyIHN0YXRlID0gX3RoaXMyLnN0YXRlO1xuICAgIGlmIChwcm9wcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgaW5wdXRWYWx1ZSA9IHN0YXRlLmlucHV0VmFsdWUsXG4gICAgICAgIHZhbHVlID0gc3RhdGUudmFsdWU7XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAoaW5wdXRWYWx1ZSB8fCB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgX3RoaXMyLmZpcmVDaGFuZ2UoW10pO1xuICAgICAgfVxuICAgICAgX3RoaXMyLnNldE9wZW5TdGF0ZShmYWxzZSwgdHJ1ZSk7XG4gICAgICBpZiAoaW5wdXRWYWx1ZSkge1xuICAgICAgICBfdGhpczIuc2V0SW5wdXRWYWx1ZSgnJyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHRoaXMub25DaG9pY2VBbmltYXRpb25MZWF2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBfdGhpczIuZm9yY2VQb3B1cEFsaWduKCk7XG4gIH07XG5cbiAgdGhpcy5nZXRWYWx1ZUZyb21Qcm9wcyA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHZhciB2YWx1ZSA9IFtdO1xuICAgIGlmICgndmFsdWUnIGluIHByb3BzKSB7XG4gICAgICB2YWx1ZSA9IHRvQXJyYXkocHJvcHMudmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IHRvQXJyYXkocHJvcHMuZGVmYXVsdFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKHByb3BzLmxhYmVsSW5WYWx1ZSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZS5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIHYua2V5O1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICB0aGlzLmdldE9wdGlvbnNJbmZvRnJvbVByb3BzID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBfdGhpczIuZ2V0T3B0aW9uc0Zyb21DaGlsZHJlbihwcm9wcy5jaGlsZHJlbik7XG4gICAgdmFyIG9sZE9wdGlvbnNJbmZvID0gX3RoaXMyLnN0YXRlID8gX3RoaXMyLnN0YXRlLm9wdGlvbnNJbmZvIDoge307XG4gICAgdmFyIHZhbHVlID0gX3RoaXMyLnN0YXRlID8gX3RoaXMyLnN0YXRlLnZhbHVlIDogW107XG4gICAgdmFyIG9wdGlvbnNJbmZvID0ge307XG4gICAgb3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgIHZhciBzaW5nbGVWYWx1ZSA9IGdldFZhbHVlUHJvcFZhbHVlKG9wdGlvbik7XG4gICAgICBvcHRpb25zSW5mb1tnZXRNYXBLZXkoc2luZ2xlVmFsdWUpXSA9IHtcbiAgICAgICAgb3B0aW9uOiBvcHRpb24sXG4gICAgICAgIHZhbHVlOiBzaW5nbGVWYWx1ZSxcbiAgICAgICAgbGFiZWw6IF90aGlzMi5nZXRMYWJlbEZyb21PcHRpb24ob3B0aW9uKSxcbiAgICAgICAgdGl0bGU6IG9wdGlvbi5wcm9wcy50aXRsZVxuICAgICAgfTtcbiAgICB9KTtcbiAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICB2YXIga2V5ID0gZ2V0TWFwS2V5KHYpO1xuICAgICAgaWYgKCFvcHRpb25zSW5mb1trZXldKSB7XG4gICAgICAgIG9wdGlvbnNJbmZvW2tleV0gPSBvbGRPcHRpb25zSW5mb1trZXldO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvcHRpb25zSW5mbztcbiAgfTtcblxuICB0aGlzLmdldE9wdGlvbkluZm9CeVNpbmdsZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBvcHRpb25zSW5mbykge1xuICAgIHZhciBpbmZvID0gdm9pZCAwO1xuICAgIG9wdGlvbnNJbmZvID0gb3B0aW9uc0luZm8gfHwgX3RoaXMyLnN0YXRlLm9wdGlvbnNJbmZvO1xuICAgIGlmIChvcHRpb25zSW5mb1tnZXRNYXBLZXkodmFsdWUpXSkge1xuICAgICAgaW5mbyA9IG9wdGlvbnNJbmZvW2dldE1hcEtleSh2YWx1ZSldO1xuICAgIH1cbiAgICBpZiAoaW5mbykge1xuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuICAgIHZhciBkZWZhdWx0TGFiZWwgPSB2YWx1ZTtcbiAgICBpZiAoX3RoaXMyLnByb3BzLmxhYmVsSW5WYWx1ZSkge1xuICAgICAgdmFyIGxhYmVsID0gZ2V0TGFiZWxGcm9tUHJvcHNWYWx1ZShfdGhpczIucHJvcHMudmFsdWUsIHZhbHVlKTtcbiAgICAgIGlmIChsYWJlbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRlZmF1bHRMYWJlbCA9IGxhYmVsO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgZGVmYXVsdEluZm8gPSB7XG4gICAgICBvcHRpb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIE9wdGlvbixcbiAgICAgICAgeyB2YWx1ZTogdmFsdWUsIGtleTogdmFsdWUgfSxcbiAgICAgICAgdmFsdWVcbiAgICAgICksXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBsYWJlbDogZGVmYXVsdExhYmVsXG4gICAgfTtcbiAgICByZXR1cm4gZGVmYXVsdEluZm87XG4gIH07XG5cbiAgdGhpcy5nZXRPcHRpb25CeVNpbmdsZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIF9nZXRPcHRpb25JbmZvQnlTaW5nbCA9IF90aGlzMi5nZXRPcHRpb25JbmZvQnlTaW5nbGVWYWx1ZSh2YWx1ZSksXG4gICAgICAgIG9wdGlvbiA9IF9nZXRPcHRpb25JbmZvQnlTaW5nbC5vcHRpb247XG5cbiAgICByZXR1cm4gb3B0aW9uO1xuICB9O1xuXG4gIHRoaXMuZ2V0T3B0aW9uc0J5U2luZ2xlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgcmV0dXJuIHZhbHVlcy5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gX3RoaXMyLmdldE9wdGlvbkJ5U2luZ2xlVmFsdWUodmFsdWUpO1xuICAgIH0pO1xuICB9O1xuXG4gIHRoaXMuZ2V0T3B0aW9uc0Zyb21DaGlsZHJlbiA9IGZ1bmN0aW9uIChjaGlsZHJlbikge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBbXTtcblxuICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgaWYgKCFjaGlsZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoY2hpbGQudHlwZS5pc1NlbGVjdE9wdEdyb3VwKSB7XG4gICAgICAgIF90aGlzMi5nZXRPcHRpb25zRnJvbUNoaWxkcmVuKGNoaWxkLnByb3BzLmNoaWxkcmVuLCBvcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wdGlvbnMucHVzaChjaGlsZCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH07XG5cbiAgdGhpcy5nZXRWYWx1ZUJ5TGFiZWwgPSBmdW5jdGlvbiAobGFiZWwpIHtcbiAgICBpZiAobGFiZWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciB2YWx1ZSA9IG51bGw7XG4gICAgT2JqZWN0LmtleXMoX3RoaXMyLnN0YXRlLm9wdGlvbnNJbmZvKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBpbmZvID0gX3RoaXMyLnN0YXRlLm9wdGlvbnNJbmZvW2tleV07XG4gICAgICBpZiAodG9BcnJheShpbmZvLmxhYmVsKS5qb2luKCcnKSA9PT0gbGFiZWwpIHtcbiAgICAgICAgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICB0aGlzLmdldExhYmVsRnJvbU9wdGlvbiA9IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICByZXR1cm4gZ2V0UHJvcFZhbHVlKG9wdGlvbiwgX3RoaXMyLnByb3BzLm9wdGlvbkxhYmVsUHJvcCk7XG4gIH07XG5cbiAgdGhpcy5nZXRWTEJ5U2luZ2xlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoX3RoaXMyLnByb3BzLmxhYmVsSW5WYWx1ZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAga2V5OiB2YWx1ZSxcbiAgICAgICAgbGFiZWw6IF90aGlzMi5nZXRMYWJlbEJ5U2luZ2xlVmFsdWUodmFsdWUpXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG5cbiAgdGhpcy5nZXRWTEZvck9uQ2hhbmdlID0gZnVuY3Rpb24gKHZsc18pIHtcbiAgICB2YXIgdmxzID0gdmxzXztcbiAgICBpZiAodmxzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICghX3RoaXMyLnByb3BzLmxhYmVsSW5WYWx1ZSkge1xuICAgICAgICB2bHMgPSB2bHMubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmxzID0gdmxzLm1hcChmdW5jdGlvbiAodmwpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2V5OiB2bCxcbiAgICAgICAgICAgIGxhYmVsOiBfdGhpczIuZ2V0TGFiZWxCeVNpbmdsZVZhbHVlKHZsKVxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGlzTXVsdGlwbGVPclRhZ3MoX3RoaXMyLnByb3BzKSA/IHZscyA6IHZsc1swXTtcbiAgICB9XG4gICAgcmV0dXJuIHZscztcbiAgfTtcblxuICB0aGlzLmdldExhYmVsQnlTaW5nbGVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgb3B0aW9uc0luZm8pIHtcbiAgICB2YXIgX2dldE9wdGlvbkluZm9CeVNpbmdsMiA9IF90aGlzMi5nZXRPcHRpb25JbmZvQnlTaW5nbGVWYWx1ZSh2YWx1ZSwgb3B0aW9uc0luZm8pLFxuICAgICAgICBsYWJlbCA9IF9nZXRPcHRpb25JbmZvQnlTaW5nbDIubGFiZWw7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH07XG5cbiAgdGhpcy5nZXREcm9wZG93bkNvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIV90aGlzMi5kcm9wZG93bkNvbnRhaW5lcikge1xuICAgICAgX3RoaXMyLmRyb3Bkb3duQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKF90aGlzMi5kcm9wZG93bkNvbnRhaW5lcik7XG4gICAgfVxuICAgIHJldHVybiBfdGhpczIuZHJvcGRvd25Db250YWluZXI7XG4gIH07XG5cbiAgdGhpcy5nZXRQbGFjZWhvbGRlckVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb3BzID0gX3RoaXMyLnByb3BzLFxuICAgICAgICBzdGF0ZSA9IF90aGlzMi5zdGF0ZTtcblxuICAgIHZhciBoaWRkZW4gPSBmYWxzZTtcbiAgICBpZiAoc3RhdGUuaW5wdXRWYWx1ZSkge1xuICAgICAgaGlkZGVuID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHN0YXRlLnZhbHVlLmxlbmd0aCkge1xuICAgICAgaGlkZGVuID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGlzQ29tYm9ib3gocHJvcHMpICYmIHN0YXRlLnZhbHVlLmxlbmd0aCA9PT0gMSAmJiAhc3RhdGUudmFsdWVbMF0pIHtcbiAgICAgIGhpZGRlbiA9IGZhbHNlO1xuICAgIH1cbiAgICB2YXIgcGxhY2Vob2xkZXIgPSBwcm9wcy5wbGFjZWhvbGRlcjtcbiAgICBpZiAocGxhY2Vob2xkZXIpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgX2V4dGVuZHMoe1xuICAgICAgICAgIG9uTW91c2VEb3duOiBwcmV2ZW50RGVmYXVsdEV2ZW50LFxuICAgICAgICAgIHN0eWxlOiBfZXh0ZW5kcyh7XG4gICAgICAgICAgICBkaXNwbGF5OiBoaWRkZW4gPyAnbm9uZScgOiAnYmxvY2snXG4gICAgICAgICAgfSwgVU5TRUxFQ1RBQkxFX1NUWUxFKVxuICAgICAgICB9LCBVTlNFTEVDVEFCTEVfQVRUUklCVVRFLCB7XG4gICAgICAgICAgb25DbGljazogX3RoaXMyLm9uUGxhY2Vob2xkZXJDbGljayxcbiAgICAgICAgICBjbGFzc05hbWU6IHByb3BzLnByZWZpeENscyArICctc2VsZWN0aW9uX19wbGFjZWhvbGRlcidcbiAgICAgICAgfSksXG4gICAgICAgIHBsYWNlaG9sZGVyXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICB0aGlzLmdldElucHV0RWxlbWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2NsYXNzbmFtZXM7XG5cbiAgICB2YXIgcHJvcHMgPSBfdGhpczIucHJvcHM7XG4gICAgdmFyIGlucHV0RWxlbWVudCA9IHByb3BzLmdldElucHV0RWxlbWVudCA/IHByb3BzLmdldElucHV0RWxlbWVudCgpIDogUmVhY3QuY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7IGlkOiBwcm9wcy5pZCwgYXV0b0NvbXBsZXRlOiAnb2ZmJyB9KTtcbiAgICB2YXIgaW5wdXRDbHMgPSBjbGFzc25hbWVzKGlucHV0RWxlbWVudC5wcm9wcy5jbGFzc05hbWUsIChfY2xhc3NuYW1lcyA9IHt9LCBfY2xhc3NuYW1lc1twcm9wcy5wcmVmaXhDbHMgKyAnLXNlYXJjaF9fZmllbGQnXSA9IHRydWUsIF9jbGFzc25hbWVzKSk7XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvNDk5MiNpc3N1ZWNvbW1lbnQtMjgxNTQyMTU5XG4gICAgLy8gQWRkIHNwYWNlIHRvIHRoZSBlbmQgb2YgdGhlIGlucHV0VmFsdWUgYXMgdGhlIHdpZHRoIG1lYXN1cmVtZW50IHRvbGVyYW5jZVxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogcHJvcHMucHJlZml4Q2xzICsgJy1zZWFyY2hfX2ZpZWxkX193cmFwJyB9LFxuICAgICAgUmVhY3QuY2xvbmVFbGVtZW50KGlucHV0RWxlbWVudCwge1xuICAgICAgICByZWY6IHNhdmVSZWYoX3RoaXMyLCAnaW5wdXRSZWYnKSxcbiAgICAgICAgb25DaGFuZ2U6IF90aGlzMi5vbklucHV0Q2hhbmdlLFxuICAgICAgICBvbktleURvd246IGNoYWluaW5nKF90aGlzMi5vbklucHV0S2V5RG93biwgaW5wdXRFbGVtZW50LnByb3BzLm9uS2V5RG93biwgX3RoaXMyLnByb3BzLm9uSW5wdXRLZXlEb3duKSxcbiAgICAgICAgdmFsdWU6IF90aGlzMi5zdGF0ZS5pbnB1dFZhbHVlLFxuICAgICAgICBkaXNhYmxlZDogcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgIGNsYXNzTmFtZTogaW5wdXRDbHNcbiAgICAgIH0pLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICB7XG4gICAgICAgICAgcmVmOiBzYXZlUmVmKF90aGlzMiwgJ2lucHV0TWlycm9yUmVmJyksXG4gICAgICAgICAgY2xhc3NOYW1lOiBwcm9wcy5wcmVmaXhDbHMgKyAnLXNlYXJjaF9fZmllbGRfX21pcnJvcidcbiAgICAgICAgfSxcbiAgICAgICAgX3RoaXMyLnN0YXRlLmlucHV0VmFsdWUsXG4gICAgICAgICdcXHhBMCdcbiAgICAgIClcbiAgICApO1xuICB9O1xuXG4gIHRoaXMuZ2V0SW5wdXRET01Ob2RlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdGhpczIudG9wQ3RybFJlZiA/IF90aGlzMi50b3BDdHJsUmVmLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0LHRleHRhcmVhLGRpdltjb250ZW50RWRpdGFibGVdJykgOiBfdGhpczIuaW5wdXRSZWY7XG4gIH07XG5cbiAgdGhpcy5nZXRJbnB1dE1pcnJvckRPTU5vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF90aGlzMi5pbnB1dE1pcnJvclJlZjtcbiAgfTtcblxuICB0aGlzLmdldFBvcHVwRE9NTm9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3RoaXMyLnNlbGVjdFRyaWdnZXJSZWYuZ2V0UG9wdXBET01Ob2RlKCk7XG4gIH07XG5cbiAgdGhpcy5nZXRQb3B1cE1lbnVDb21wb25lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF90aGlzMi5zZWxlY3RUcmlnZ2VyUmVmLmdldElubmVyTWVudSgpO1xuICB9O1xuXG4gIHRoaXMuc2V0T3BlblN0YXRlID0gZnVuY3Rpb24gKG9wZW4sIG5lZWRGb2N1cykge1xuICAgIHZhciBwcm9wcyA9IF90aGlzMi5wcm9wcyxcbiAgICAgICAgc3RhdGUgPSBfdGhpczIuc3RhdGU7XG5cbiAgICBpZiAoc3RhdGUub3BlbiA9PT0gb3Blbikge1xuICAgICAgX3RoaXMyLm1heWJlRm9jdXMob3BlbiwgbmVlZEZvY3VzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIG5leHRTdGF0ZSA9IHtcbiAgICAgIG9wZW46IG9wZW4sXG4gICAgICBiYWNrZmlsbFZhbHVlOiB1bmRlZmluZWRcbiAgICB9O1xuICAgIC8vIGNsZWFyIHNlYXJjaCBpbnB1dCB2YWx1ZSB3aGVuIG9wZW4gaXMgZmFsc2UgaW4gc2luZ2xlTW9kZS5cbiAgICBpZiAoIW9wZW4gJiYgaXNTaW5nbGVNb2RlKHByb3BzKSAmJiBwcm9wcy5zaG93U2VhcmNoKSB7XG4gICAgICBfdGhpczIuc2V0SW5wdXRWYWx1ZSgnJyk7XG4gICAgfVxuICAgIGlmICghb3Blbikge1xuICAgICAgX3RoaXMyLm1heWJlRm9jdXMob3BlbiwgbmVlZEZvY3VzKTtcbiAgICB9XG4gICAgX3RoaXMyLnNldFN0YXRlKG5leHRTdGF0ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgX3RoaXMyLm1heWJlRm9jdXMob3BlbiwgbmVlZEZvY3VzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICB0aGlzLnNldElucHV0VmFsdWUgPSBmdW5jdGlvbiAoaW5wdXRWYWx1ZSkge1xuICAgIHZhciBmaXJlU2VhcmNoID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0cnVlO1xuXG4gICAgaWYgKGlucHV0VmFsdWUgIT09IF90aGlzMi5zdGF0ZS5pbnB1dFZhbHVlKSB7XG4gICAgICBfdGhpczIuc2V0U3RhdGUoe1xuICAgICAgICBpbnB1dFZhbHVlOiBpbnB1dFZhbHVlXG4gICAgICB9LCBfdGhpczIuZm9yY2VQb3B1cEFsaWduKTtcbiAgICAgIGlmIChmaXJlU2VhcmNoKSB7XG4gICAgICAgIF90aGlzMi5wcm9wcy5vblNlYXJjaChpbnB1dFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgdGhpcy5nZXRWYWx1ZUJ5SW5wdXQgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIF9wcm9wczIgPSBfdGhpczIucHJvcHMsXG4gICAgICAgIG11bHRpcGxlID0gX3Byb3BzMi5tdWx0aXBsZSxcbiAgICAgICAgdG9rZW5TZXBhcmF0b3JzID0gX3Byb3BzMi50b2tlblNlcGFyYXRvcnM7XG5cbiAgICB2YXIgbmV4dFZhbHVlID0gX3RoaXMyLnN0YXRlLnZhbHVlO1xuICAgIHZhciBoYXNOZXdWYWx1ZSA9IGZhbHNlO1xuICAgIHNwbGl0QnlTZXBhcmF0b3JzKHN0cmluZywgdG9rZW5TZXBhcmF0b3JzKS5mb3JFYWNoKGZ1bmN0aW9uIChsYWJlbCkge1xuICAgICAgdmFyIHNlbGVjdGVkVmFsdWUgPSBbbGFiZWxdO1xuICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IF90aGlzMi5nZXRWYWx1ZUJ5TGFiZWwobGFiZWwpO1xuICAgICAgICBpZiAodmFsdWUgJiYgZmluZEluZGV4SW5WYWx1ZUJ5U2luZ2xlVmFsdWUobmV4dFZhbHVlLCB2YWx1ZSkgPT09IC0xKSB7XG4gICAgICAgICAgbmV4dFZhbHVlID0gbmV4dFZhbHVlLmNvbmNhdCh2YWx1ZSk7XG4gICAgICAgICAgaGFzTmV3VmFsdWUgPSB0cnVlO1xuICAgICAgICAgIF90aGlzMi5maXJlU2VsZWN0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdGFnXG4gICAgICAgIGlmIChmaW5kSW5kZXhJblZhbHVlQnlTaW5nbGVWYWx1ZShuZXh0VmFsdWUsIGxhYmVsKSA9PT0gLTEpIHtcbiAgICAgICAgICBuZXh0VmFsdWUgPSBuZXh0VmFsdWUuY29uY2F0KHNlbGVjdGVkVmFsdWUpO1xuICAgICAgICAgIGhhc05ld1ZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICBfdGhpczIuZmlyZVNlbGVjdChsYWJlbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gaGFzTmV3VmFsdWUgPyBuZXh0VmFsdWUgOiB1bmRlZmluZWQ7XG4gIH07XG5cbiAgdGhpcy5oYW5kbGVCYWNrZmlsbCA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgaWYgKCFfdGhpczIucHJvcHMuYmFja2ZpbGwgfHwgIShpc1NpbmdsZU1vZGUoX3RoaXMyLnByb3BzKSB8fCBpc0NvbWJvYm94KF90aGlzMi5wcm9wcykpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGtleSA9IGdldFZhbHVlUHJvcFZhbHVlKGl0ZW0pO1xuXG4gICAgaWYgKGlzQ29tYm9ib3goX3RoaXMyLnByb3BzKSkge1xuICAgICAgX3RoaXMyLnNldElucHV0VmFsdWUoa2V5LCBmYWxzZSk7XG4gICAgfVxuXG4gICAgX3RoaXMyLnNldFN0YXRlKHtcbiAgICAgIHZhbHVlOiBba2V5XSxcbiAgICAgIGJhY2tmaWxsVmFsdWU6IGtleVxuICAgIH0pO1xuICB9O1xuXG4gIHRoaXMuZmlsdGVyT3B0aW9uID0gZnVuY3Rpb24gKGlucHV0LCBjaGlsZCkge1xuICAgIHZhciBkZWZhdWx0RmlsdGVyID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBkZWZhdWx0RmlsdGVyRm47XG4gICAgdmFyIHZhbHVlID0gX3RoaXMyLnN0YXRlLnZhbHVlO1xuXG4gICAgdmFyIGxhc3RWYWx1ZSA9IHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdO1xuICAgIGlmICghaW5wdXQgfHwgbGFzdFZhbHVlICYmIGxhc3RWYWx1ZSA9PT0gX3RoaXMyLnN0YXRlLmJhY2tmaWxsVmFsdWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB2YXIgZmlsdGVyRm4gPSBfdGhpczIucHJvcHMuZmlsdGVyT3B0aW9uO1xuICAgIGlmICgnZmlsdGVyT3B0aW9uJyBpbiBfdGhpczIucHJvcHMpIHtcbiAgICAgIGlmIChfdGhpczIucHJvcHMuZmlsdGVyT3B0aW9uID09PSB0cnVlKSB7XG4gICAgICAgIGZpbHRlckZuID0gZGVmYXVsdEZpbHRlcjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZmlsdGVyRm4gPSBkZWZhdWx0RmlsdGVyO1xuICAgIH1cblxuICAgIGlmICghZmlsdGVyRm4pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZpbHRlckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gZmlsdGVyRm4uY2FsbChfdGhpczIsIGlucHV0LCBjaGlsZCk7XG4gICAgfSBlbHNlIGlmIChjaGlsZC5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICB0aGlzLnRpbWVvdXRGb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoX3RoaXMyLmZvY3VzVGltZXIpIHtcbiAgICAgIF90aGlzMi5jbGVhckZvY3VzVGltZSgpO1xuICAgIH1cbiAgICBfdGhpczIuZm9jdXNUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMyLnByb3BzLm9uRm9jdXMoKTtcbiAgICB9LCAxMCk7XG4gIH07XG5cbiAgdGhpcy5jbGVhckZvY3VzVGltZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoX3RoaXMyLmZvY3VzVGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dChfdGhpczIuZm9jdXNUaW1lcik7XG4gICAgICBfdGhpczIuZm9jdXNUaW1lciA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMuY2xlYXJCbHVyVGltZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoX3RoaXMyLmJsdXJUaW1lcikge1xuICAgICAgY2xlYXJUaW1lb3V0KF90aGlzMi5ibHVyVGltZXIpO1xuICAgICAgX3RoaXMyLmJsdXJUaW1lciA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMuY2xlYXJBZGp1c3RUaW1lciA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoX3RoaXMyLnNraXBBZGp1c3RPcGVuVGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dChfdGhpczIuc2tpcEFkanVzdE9wZW5UaW1lcik7XG4gICAgICBfdGhpczIuc2tpcEFkanVzdE9wZW5UaW1lciA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMudXBkYXRlRm9jdXNDbGFzc05hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJvb3RSZWYgPSBfdGhpczIucm9vdFJlZixcbiAgICAgICAgcHJvcHMgPSBfdGhpczIucHJvcHM7XG4gICAgLy8gYXZvaWQgc2V0U3RhdGUgYW5kIGl0cyBzaWRlIGVmZmVjdFxuXG4gICAgaWYgKF90aGlzMi5fZm9jdXNlZCkge1xuICAgICAgY2xhc3Nlcyhyb290UmVmKS5hZGQocHJvcHMucHJlZml4Q2xzICsgJy1mb2N1c2VkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsYXNzZXMocm9vdFJlZikucmVtb3ZlKHByb3BzLnByZWZpeENscyArICctZm9jdXNlZCcpO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLm1heWJlRm9jdXMgPSBmdW5jdGlvbiAob3BlbiwgbmVlZEZvY3VzKSB7XG4gICAgaWYgKG5lZWRGb2N1cyB8fCBvcGVuKSB7XG4gICAgICB2YXIgaW5wdXQgPSBfdGhpczIuZ2V0SW5wdXRET01Ob2RlKCk7XG4gICAgICB2YXIgX2RvY3VtZW50ID0gZG9jdW1lbnQsXG4gICAgICAgICAgYWN0aXZlRWxlbWVudCA9IF9kb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgICBpZiAoaW5wdXQgJiYgKG9wZW4gfHwgaXNNdWx0aXBsZU9yVGFnc09yQ29tYm9ib3goX3RoaXMyLnByb3BzKSkpIHtcbiAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQgIT09IGlucHV0KSB7XG4gICAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICBfdGhpczIuX2ZvY3VzZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoYWN0aXZlRWxlbWVudCAhPT0gX3RoaXMyLnNlbGVjdGlvblJlZikge1xuICAgICAgICAgIF90aGlzMi5zZWxlY3Rpb25SZWYuZm9jdXMoKTtcbiAgICAgICAgICBfdGhpczIuX2ZvY3VzZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHRoaXMucmVtb3ZlU2VsZWN0ZWQgPSBmdW5jdGlvbiAoc2VsZWN0ZWRLZXkpIHtcbiAgICB2YXIgcHJvcHMgPSBfdGhpczIucHJvcHM7XG4gICAgaWYgKHByb3BzLmRpc2FibGVkIHx8IF90aGlzMi5pc0NoaWxkRGlzYWJsZWQoc2VsZWN0ZWRLZXkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB2YWx1ZSA9IF90aGlzMi5zdGF0ZS52YWx1ZS5maWx0ZXIoZnVuY3Rpb24gKHNpbmdsZVZhbHVlKSB7XG4gICAgICByZXR1cm4gc2luZ2xlVmFsdWUgIT09IHNlbGVjdGVkS2V5O1xuICAgIH0pO1xuICAgIHZhciBjYW5NdWx0aXBsZSA9IGlzTXVsdGlwbGVPclRhZ3MocHJvcHMpO1xuXG4gICAgaWYgKGNhbk11bHRpcGxlKSB7XG4gICAgICB2YXIgZXZlbnQgPSBzZWxlY3RlZEtleTtcbiAgICAgIGlmIChwcm9wcy5sYWJlbEluVmFsdWUpIHtcbiAgICAgICAgZXZlbnQgPSB7XG4gICAgICAgICAga2V5OiBzZWxlY3RlZEtleSxcbiAgICAgICAgICBsYWJlbDogX3RoaXMyLmdldExhYmVsQnlTaW5nbGVWYWx1ZShzZWxlY3RlZEtleSlcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHByb3BzLm9uRGVzZWxlY3QoZXZlbnQsIF90aGlzMi5nZXRPcHRpb25CeVNpbmdsZVZhbHVlKHNlbGVjdGVkS2V5KSk7XG4gICAgfVxuICAgIF90aGlzMi5maXJlQ2hhbmdlKHZhbHVlKTtcbiAgfTtcblxuICB0aGlzLm9wZW5JZkhhc0NoaWxkcmVuID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9wcyA9IF90aGlzMi5wcm9wcztcbiAgICBpZiAoUmVhY3QuQ2hpbGRyZW4uY291bnQocHJvcHMuY2hpbGRyZW4pIHx8IGlzU2luZ2xlTW9kZShwcm9wcykpIHtcbiAgICAgIF90aGlzMi5zZXRPcGVuU3RhdGUodHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMuZmlyZVNlbGVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIF90aGlzMi5wcm9wcy5vblNlbGVjdChfdGhpczIuZ2V0VkxCeVNpbmdsZVZhbHVlKHZhbHVlKSwgX3RoaXMyLmdldE9wdGlvbkJ5U2luZ2xlVmFsdWUodmFsdWUpKTtcbiAgfTtcblxuICB0aGlzLmZpcmVDaGFuZ2UgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgcHJvcHMgPSBfdGhpczIucHJvcHM7XG4gICAgaWYgKCEoJ3ZhbHVlJyBpbiBwcm9wcykpIHtcbiAgICAgIF90aGlzMi5zZXRTdGF0ZSh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSwgX3RoaXMyLmZvcmNlUG9wdXBBbGlnbik7XG4gICAgfVxuICAgIHZhciB2bHMgPSBfdGhpczIuZ2V0VkxGb3JPbkNoYW5nZSh2YWx1ZSk7XG4gICAgdmFyIG9wdGlvbnMgPSBfdGhpczIuZ2V0T3B0aW9uc0J5U2luZ2xlVmFsdWUodmFsdWUpO1xuICAgIHByb3BzLm9uQ2hhbmdlKHZscywgaXNNdWx0aXBsZU9yVGFncyhfdGhpczIucHJvcHMpID8gb3B0aW9ucyA6IG9wdGlvbnNbMF0pO1xuICB9O1xuXG4gIHRoaXMuaXNDaGlsZERpc2FibGVkID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBjaGlsZHJlblRvQXJyYXkoX3RoaXMyLnByb3BzLmNoaWxkcmVuKS5zb21lKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgdmFyIGNoaWxkVmFsdWUgPSBnZXRWYWx1ZVByb3BWYWx1ZShjaGlsZCk7XG4gICAgICByZXR1cm4gY2hpbGRWYWx1ZSA9PT0ga2V5ICYmIGNoaWxkLnByb3BzICYmIGNoaWxkLnByb3BzLmRpc2FibGVkO1xuICAgIH0pO1xuICB9O1xuXG4gIHRoaXMuYWRqdXN0T3BlblN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChfdGhpczIuc2tpcEFkanVzdE9wZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIG9wZW4gPSBfdGhpczIuc3RhdGUub3BlbjtcblxuICAgIHZhciBvcHRpb25zID0gW107XG4gICAgLy8gSWYgaGlkZGVuIG1lbnUgZHVlIHRvIG5vIG9wdGlvbnMsIHRoZW4gaXQgc2hvdWxkIGJlIGNhbGN1bGF0ZWQgYWdhaW5cbiAgICBpZiAob3BlbiB8fCBfdGhpczIuaGlkZGVuRm9yTm9PcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0gX3RoaXMyLnJlbmRlckZpbHRlck9wdGlvbnMoKTtcbiAgICB9XG4gICAgX3RoaXMyLl9vcHRpb25zID0gb3B0aW9ucztcblxuICAgIGlmIChpc011bHRpcGxlT3JUYWdzT3JDb21ib2JveChfdGhpczIucHJvcHMpIHx8ICFfdGhpczIucHJvcHMuc2hvd1NlYXJjaCkge1xuICAgICAgaWYgKG9wZW4gJiYgIW9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIG9wZW4gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMyLmhpZGRlbkZvck5vT3B0aW9ucyA9IHRydWU7XG4gICAgICB9XG4gICAgICAvLyBLZWVwIG1lbnUgb3BlbiBpZiB0aGVyZSBhcmUgb3B0aW9ucyBhbmQgaGlkZGVuIGZvciBubyBvcHRpb25zIGJlZm9yZVxuICAgICAgaWYgKF90aGlzMi5oaWRkZW5Gb3JOb09wdGlvbnMgJiYgb3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgb3BlbiA9IHRydWU7XG4gICAgICAgIF90aGlzMi5oaWRkZW5Gb3JOb09wdGlvbnMgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgX3RoaXMyLnN0YXRlLm9wZW4gPSBvcGVuO1xuICB9O1xuXG4gIHRoaXMuZm9yY2VQb3B1cEFsaWduID0gZnVuY3Rpb24gKCkge1xuICAgIF90aGlzMi5zZWxlY3RUcmlnZ2VyUmVmLnRyaWdnZXJSZWYuZm9yY2VQb3B1cEFsaWduKCk7XG4gIH07XG5cbiAgdGhpcy5yZW5kZXJGaWx0ZXJPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpbnB1dFZhbHVlID0gX3RoaXMyLnN0YXRlLmlucHV0VmFsdWU7XG4gICAgdmFyIF9wcm9wczMgPSBfdGhpczIucHJvcHMsXG4gICAgICAgIGNoaWxkcmVuID0gX3Byb3BzMy5jaGlsZHJlbixcbiAgICAgICAgdGFncyA9IF9wcm9wczMudGFncyxcbiAgICAgICAgZmlsdGVyT3B0aW9uID0gX3Byb3BzMy5maWx0ZXJPcHRpb24sXG4gICAgICAgIG5vdEZvdW5kQ29udGVudCA9IF9wcm9wczMubm90Rm91bmRDb250ZW50O1xuXG4gICAgdmFyIG1lbnVJdGVtcyA9IFtdO1xuICAgIHZhciBjaGlsZHJlbktleXMgPSBbXTtcbiAgICB2YXIgb3B0aW9ucyA9IF90aGlzMi5yZW5kZXJGaWx0ZXJPcHRpb25zRnJvbUNoaWxkcmVuKGNoaWxkcmVuLCBjaGlsZHJlbktleXMsIG1lbnVJdGVtcyk7XG4gICAgaWYgKHRhZ3MpIHtcbiAgICAgIC8vIHRhZ3MgdmFsdWUgbXVzdCBiZSBzdHJpbmdcbiAgICAgIHZhciB2YWx1ZSA9IF90aGlzMi5zdGF0ZS52YWx1ZSB8fCBbXTtcbiAgICAgIHZhbHVlID0gdmFsdWUuZmlsdGVyKGZ1bmN0aW9uIChzaW5nbGVWYWx1ZSkge1xuICAgICAgICByZXR1cm4gY2hpbGRyZW5LZXlzLmluZGV4T2Yoc2luZ2xlVmFsdWUpID09PSAtMSAmJiAoIWlucHV0VmFsdWUgfHwgU3RyaW5nKHNpbmdsZVZhbHVlKS5pbmRleE9mKFN0cmluZyhpbnB1dFZhbHVlKSkgPiAtMSk7XG4gICAgICB9KTtcbiAgICAgIHZhbHVlLmZvckVhY2goZnVuY3Rpb24gKHNpbmdsZVZhbHVlKSB7XG4gICAgICAgIHZhciBrZXkgPSBzaW5nbGVWYWx1ZTtcbiAgICAgICAgdmFyIG1lbnVJdGVtID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBNZW51SXRlbSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdHlsZTogVU5TRUxFQ1RBQkxFX1NUWUxFLFxuICAgICAgICAgICAgYXR0cmlidXRlOiBVTlNFTEVDVEFCTEVfQVRUUklCVVRFLFxuICAgICAgICAgICAgdmFsdWU6IGtleSxcbiAgICAgICAgICAgIGtleToga2V5XG4gICAgICAgICAgfSxcbiAgICAgICAgICBrZXlcbiAgICAgICAgKTtcbiAgICAgICAgb3B0aW9ucy5wdXNoKG1lbnVJdGVtKTtcbiAgICAgICAgbWVudUl0ZW1zLnB1c2gobWVudUl0ZW0pO1xuICAgICAgfSk7XG4gICAgICBpZiAoaW5wdXRWYWx1ZSkge1xuICAgICAgICB2YXIgbm90RmluZElucHV0SXRlbSA9IG1lbnVJdGVtcy5ldmVyeShmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcy5maWx0ZXJPcHRpb24gcmV0dXJuIHRydWUgaGFzIHR3byBtZWFuaW5nLFxuICAgICAgICAgIC8vIDEsIHNvbWUgb25lIGV4aXN0cyBhZnRlciBmaWx0ZXJpbmdcbiAgICAgICAgICAvLyAyLCBmaWx0ZXJPcHRpb24gaXMgc2V0IHRvIGZhbHNlXG4gICAgICAgICAgLy8gY29uZGl0aW9uIDIgZG9lcyBub3QgbWVhbiB0aGUgb3B0aW9uIGhhcyBzYW1lIHZhbHVlIHdpdGggaW5wdXRWYWx1ZVxuICAgICAgICAgIHZhciBmaWx0ZXJGbiA9IGZ1bmN0aW9uIGZpbHRlckZuKCkge1xuICAgICAgICAgICAgcmV0dXJuIGdldFZhbHVlUHJvcFZhbHVlKG9wdGlvbikgPT09IGlucHV0VmFsdWU7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAoZmlsdGVyT3B0aW9uICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuICFfdGhpczIuZmlsdGVyT3B0aW9uLmNhbGwoX3RoaXMyLCBpbnB1dFZhbHVlLCBvcHRpb24sIGZpbHRlckZuKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuICFmaWx0ZXJGbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG5vdEZpbmRJbnB1dEl0ZW0pIHtcbiAgICAgICAgICBvcHRpb25zLnVuc2hpZnQoUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIE1lbnVJdGVtLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdHlsZTogVU5TRUxFQ1RBQkxFX1NUWUxFLFxuICAgICAgICAgICAgICBhdHRyaWJ1dGU6IFVOU0VMRUNUQUJMRV9BVFRSSUJVVEUsXG4gICAgICAgICAgICAgIHZhbHVlOiBpbnB1dFZhbHVlLFxuICAgICAgICAgICAgICBrZXk6IGlucHV0VmFsdWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnB1dFZhbHVlXG4gICAgICAgICAgKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvbnMubGVuZ3RoICYmIG5vdEZvdW5kQ29udGVudCkge1xuICAgICAgb3B0aW9ucyA9IFtSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBNZW51SXRlbSxcbiAgICAgICAge1xuICAgICAgICAgIHN0eWxlOiBVTlNFTEVDVEFCTEVfU1RZTEUsXG4gICAgICAgICAgYXR0cmlidXRlOiBVTlNFTEVDVEFCTEVfQVRUUklCVVRFLFxuICAgICAgICAgIGRpc2FibGVkOiB0cnVlLFxuICAgICAgICAgIHZhbHVlOiAnTk9UX0ZPVU5EJyxcbiAgICAgICAgICBrZXk6ICdOT1RfRk9VTkQnXG4gICAgICAgIH0sXG4gICAgICAgIG5vdEZvdW5kQ29udGVudFxuICAgICAgKV07XG4gICAgfVxuICAgIHJldHVybiBvcHRpb25zO1xuICB9O1xuXG4gIHRoaXMucmVuZGVyRmlsdGVyT3B0aW9uc0Zyb21DaGlsZHJlbiA9IGZ1bmN0aW9uIChjaGlsZHJlbiwgY2hpbGRyZW5LZXlzLCBtZW51SXRlbXMpIHtcbiAgICB2YXIgc2VsID0gW107XG4gICAgdmFyIHByb3BzID0gX3RoaXMyLnByb3BzO1xuICAgIHZhciBpbnB1dFZhbHVlID0gX3RoaXMyLnN0YXRlLmlucHV0VmFsdWU7XG5cbiAgICB2YXIgdGFncyA9IHByb3BzLnRhZ3M7XG4gICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICBpZiAoIWNoaWxkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChjaGlsZC50eXBlLmlzU2VsZWN0T3B0R3JvdXApIHtcbiAgICAgICAgdmFyIGlubmVySXRlbXMgPSBfdGhpczIucmVuZGVyRmlsdGVyT3B0aW9uc0Zyb21DaGlsZHJlbihjaGlsZC5wcm9wcy5jaGlsZHJlbiwgY2hpbGRyZW5LZXlzLCBtZW51SXRlbXMpO1xuICAgICAgICBpZiAoaW5uZXJJdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICB2YXIgbGFiZWwgPSBjaGlsZC5wcm9wcy5sYWJlbDtcbiAgICAgICAgICB2YXIga2V5ID0gY2hpbGQua2V5O1xuICAgICAgICAgIGlmICgha2V5ICYmIHR5cGVvZiBsYWJlbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGtleSA9IGxhYmVsO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIWxhYmVsICYmIGtleSkge1xuICAgICAgICAgICAgbGFiZWwgPSBrZXk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNlbC5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBNZW51SXRlbUdyb3VwLFxuICAgICAgICAgICAgeyBrZXk6IGtleSwgdGl0bGU6IGxhYmVsIH0sXG4gICAgICAgICAgICBpbm5lckl0ZW1zXG4gICAgICAgICAgKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB3YXJuaW5nKGNoaWxkLnR5cGUuaXNTZWxlY3RPcHRpb24sICd0aGUgY2hpbGRyZW4gb2YgYFNlbGVjdGAgc2hvdWxkIGJlIGBTZWxlY3QuT3B0aW9uYCBvciBgU2VsZWN0Lk9wdEdyb3VwYCwgJyArICgnaW5zdGVhZCBvZiBgJyArIChjaGlsZC50eXBlLm5hbWUgfHwgY2hpbGQudHlwZS5kaXNwbGF5TmFtZSB8fCBjaGlsZC50eXBlKSArICdgLicpKTtcblxuICAgICAgdmFyIGNoaWxkVmFsdWUgPSBnZXRWYWx1ZVByb3BWYWx1ZShjaGlsZCk7XG5cbiAgICAgIHZhbGlkYXRlT3B0aW9uVmFsdWUoY2hpbGRWYWx1ZSwgX3RoaXMyLnByb3BzKTtcblxuICAgICAgaWYgKF90aGlzMi5maWx0ZXJPcHRpb24oaW5wdXRWYWx1ZSwgY2hpbGQpKSB7XG4gICAgICAgIHZhciBtZW51SXRlbSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudUl0ZW0sIF9leHRlbmRzKHtcbiAgICAgICAgICBzdHlsZTogVU5TRUxFQ1RBQkxFX1NUWUxFLFxuICAgICAgICAgIGF0dHJpYnV0ZTogVU5TRUxFQ1RBQkxFX0FUVFJJQlVURSxcbiAgICAgICAgICB2YWx1ZTogY2hpbGRWYWx1ZSxcbiAgICAgICAgICBrZXk6IGNoaWxkVmFsdWVcbiAgICAgICAgfSwgY2hpbGQucHJvcHMpKTtcbiAgICAgICAgc2VsLnB1c2gobWVudUl0ZW0pO1xuICAgICAgICBtZW51SXRlbXMucHVzaChtZW51SXRlbSk7XG4gICAgICB9XG4gICAgICBpZiAodGFncyAmJiAhY2hpbGQucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgY2hpbGRyZW5LZXlzLnB1c2goY2hpbGRWYWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2VsO1xuICB9O1xuXG4gIHRoaXMucmVuZGVyVG9wQ29udHJvbE5vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9zdGF0ZTIgPSBfdGhpczIuc3RhdGUsXG4gICAgICAgIHZhbHVlID0gX3N0YXRlMi52YWx1ZSxcbiAgICAgICAgb3BlbiA9IF9zdGF0ZTIub3BlbixcbiAgICAgICAgaW5wdXRWYWx1ZSA9IF9zdGF0ZTIuaW5wdXRWYWx1ZTtcblxuICAgIHZhciBwcm9wcyA9IF90aGlzMi5wcm9wcztcbiAgICB2YXIgY2hvaWNlVHJhbnNpdGlvbk5hbWUgPSBwcm9wcy5jaG9pY2VUcmFuc2l0aW9uTmFtZSxcbiAgICAgICAgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICBtYXhUYWdUZXh0TGVuZ3RoID0gcHJvcHMubWF4VGFnVGV4dExlbmd0aCxcbiAgICAgICAgbWF4VGFnQ291bnQgPSBwcm9wcy5tYXhUYWdDb3VudCxcbiAgICAgICAgbWF4VGFnUGxhY2Vob2xkZXIgPSBwcm9wcy5tYXhUYWdQbGFjZWhvbGRlcixcbiAgICAgICAgc2hvd1NlYXJjaCA9IHByb3BzLnNob3dTZWFyY2g7XG5cbiAgICB2YXIgY2xhc3NOYW1lID0gcHJlZml4Q2xzICsgJy1zZWxlY3Rpb25fX3JlbmRlcmVkJztcbiAgICAvLyBzZWFyY2ggaW5wdXQgaXMgaW5zaWRlIHRvcENvbnRyb2xOb2RlIGluIHNpbmdsZSwgbXVsdGlwbGUgJiBjb21ib2JveC4gMjAxNi8wNC8xM1xuICAgIHZhciBpbm5lck5vZGUgPSBudWxsO1xuICAgIGlmIChpc1NpbmdsZU1vZGUocHJvcHMpKSB7XG4gICAgICB2YXIgc2VsZWN0ZWRWYWx1ZSA9IG51bGw7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoKSB7XG4gICAgICAgIHZhciBzaG93U2VsZWN0ZWRWYWx1ZSA9IGZhbHNlO1xuICAgICAgICB2YXIgb3BhY2l0eSA9IDE7XG4gICAgICAgIGlmICghc2hvd1NlYXJjaCkge1xuICAgICAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgc2hvd1NlbGVjdGVkVmFsdWUgPSAhaW5wdXRWYWx1ZTtcbiAgICAgICAgICAgIGlmIChzaG93U2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgICAgICAgICBvcGFjaXR5ID0gMC40O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaG93U2VsZWN0ZWRWYWx1ZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBzaW5nbGVWYWx1ZSA9IHZhbHVlWzBdO1xuXG4gICAgICAgIHZhciBfZ2V0T3B0aW9uSW5mb0J5U2luZ2wzID0gX3RoaXMyLmdldE9wdGlvbkluZm9CeVNpbmdsZVZhbHVlKHNpbmdsZVZhbHVlKSxcbiAgICAgICAgICAgIGxhYmVsID0gX2dldE9wdGlvbkluZm9CeVNpbmdsMy5sYWJlbCxcbiAgICAgICAgICAgIHRpdGxlID0gX2dldE9wdGlvbkluZm9CeVNpbmdsMy50aXRsZTtcblxuICAgICAgICBzZWxlY3RlZFZhbHVlID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6ICd2YWx1ZScsXG4gICAgICAgICAgICBjbGFzc05hbWU6IHByZWZpeENscyArICctc2VsZWN0aW9uLXNlbGVjdGVkLXZhbHVlJyxcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSB8fCBsYWJlbCxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IHNob3dTZWxlY3RlZFZhbHVlID8gJ2Jsb2NrJyA6ICdub25lJyxcbiAgICAgICAgICAgICAgb3BhY2l0eTogb3BhY2l0eVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbGFiZWxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmICghc2hvd1NlYXJjaCkge1xuICAgICAgICBpbm5lck5vZGUgPSBbc2VsZWN0ZWRWYWx1ZV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbm5lck5vZGUgPSBbc2VsZWN0ZWRWYWx1ZSwgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IHByZWZpeENscyArICctc2VhcmNoICcgKyBwcmVmaXhDbHMgKyAnLXNlYXJjaC0taW5saW5lJyxcbiAgICAgICAgICAgIGtleTogJ2lucHV0JyxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG9wZW4gPyAnYmxvY2snIDogJ25vbmUnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBfdGhpczIuZ2V0SW5wdXRFbGVtZW50KClcbiAgICAgICAgKV07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzZWxlY3RlZFZhbHVlTm9kZXMgPSBbXTtcbiAgICAgIHZhciBsaW1pdGVkQ291bnRWYWx1ZSA9IHZhbHVlO1xuICAgICAgdmFyIG1heFRhZ1BsYWNlaG9sZGVyRWwgPSB2b2lkIDA7XG4gICAgICBpZiAobWF4VGFnQ291bnQgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS5sZW5ndGggPiBtYXhUYWdDb3VudCkge1xuICAgICAgICBsaW1pdGVkQ291bnRWYWx1ZSA9IGxpbWl0ZWRDb3VudFZhbHVlLnNsaWNlKDAsIG1heFRhZ0NvdW50KTtcbiAgICAgICAgdmFyIG9taXR0ZWRWYWx1ZXMgPSBfdGhpczIuZ2V0VkxGb3JPbkNoYW5nZSh2YWx1ZS5zbGljZShtYXhUYWdDb3VudCwgdmFsdWUubGVuZ3RoKSk7XG4gICAgICAgIHZhciBjb250ZW50ID0gJysgJyArICh2YWx1ZS5sZW5ndGggLSBtYXhUYWdDb3VudCkgKyAnIC4uLic7XG4gICAgICAgIGlmIChtYXhUYWdQbGFjZWhvbGRlcikge1xuICAgICAgICAgIGNvbnRlbnQgPSB0eXBlb2YgbWF4VGFnUGxhY2Vob2xkZXIgPT09ICdmdW5jdGlvbicgPyBtYXhUYWdQbGFjZWhvbGRlcihvbWl0dGVkVmFsdWVzKSA6IG1heFRhZ1BsYWNlaG9sZGVyO1xuICAgICAgICB9XG4gICAgICAgIG1heFRhZ1BsYWNlaG9sZGVyRWwgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdsaScsXG4gICAgICAgICAgX2V4dGVuZHMoe1xuICAgICAgICAgICAgc3R5bGU6IFVOU0VMRUNUQUJMRV9TVFlMRVxuICAgICAgICAgIH0sIFVOU0VMRUNUQUJMRV9BVFRSSUJVVEUsIHtcbiAgICAgICAgICAgIG9uTW91c2VEb3duOiBwcmV2ZW50RGVmYXVsdEV2ZW50LFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLXNlbGVjdGlvbl9fY2hvaWNlICcgKyBwcmVmaXhDbHMgKyAnLXNlbGVjdGlvbl9fY2hvaWNlX19kaXNhYmxlZCcsXG4gICAgICAgICAgICBrZXk6ICdtYXhUYWdQbGFjZWhvbGRlcicsXG4gICAgICAgICAgICB0aXRsZTogY29udGVudFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLXNlbGVjdGlvbl9fY2hvaWNlX19jb250ZW50JyB9LFxuICAgICAgICAgICAgY29udGVudFxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc011bHRpcGxlT3JUYWdzKHByb3BzKSkge1xuICAgICAgICBzZWxlY3RlZFZhbHVlTm9kZXMgPSBsaW1pdGVkQ291bnRWYWx1ZS5tYXAoZnVuY3Rpb24gKHNpbmdsZVZhbHVlKSB7XG4gICAgICAgICAgdmFyIGluZm8gPSBfdGhpczIuZ2V0T3B0aW9uSW5mb0J5U2luZ2xlVmFsdWUoc2luZ2xlVmFsdWUpO1xuICAgICAgICAgIHZhciBjb250ZW50ID0gaW5mby5sYWJlbDtcbiAgICAgICAgICB2YXIgdGl0bGUgPSBpbmZvLnRpdGxlIHx8IGNvbnRlbnQ7XG4gICAgICAgICAgaWYgKG1heFRhZ1RleHRMZW5ndGggJiYgdHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnICYmIGNvbnRlbnQubGVuZ3RoID4gbWF4VGFnVGV4dExlbmd0aCkge1xuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuc2xpY2UoMCwgbWF4VGFnVGV4dExlbmd0aCkgKyAnLi4uJztcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGRpc2FibGVkID0gX3RoaXMyLmlzQ2hpbGREaXNhYmxlZChzaW5nbGVWYWx1ZSk7XG4gICAgICAgICAgdmFyIGNob2ljZUNsYXNzTmFtZSA9IGRpc2FibGVkID8gcHJlZml4Q2xzICsgJy1zZWxlY3Rpb25fX2Nob2ljZSAnICsgcHJlZml4Q2xzICsgJy1zZWxlY3Rpb25fX2Nob2ljZV9fZGlzYWJsZWQnIDogcHJlZml4Q2xzICsgJy1zZWxlY3Rpb25fX2Nob2ljZSc7XG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnbGknLFxuICAgICAgICAgICAgX2V4dGVuZHMoe1xuICAgICAgICAgICAgICBzdHlsZTogVU5TRUxFQ1RBQkxFX1NUWUxFXG4gICAgICAgICAgICB9LCBVTlNFTEVDVEFCTEVfQVRUUklCVVRFLCB7XG4gICAgICAgICAgICAgIG9uTW91c2VEb3duOiBwcmV2ZW50RGVmYXVsdEV2ZW50LFxuICAgICAgICAgICAgICBjbGFzc05hbWU6IGNob2ljZUNsYXNzTmFtZSxcbiAgICAgICAgICAgICAga2V5OiBzaW5nbGVWYWx1ZSxcbiAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1zZWxlY3Rpb25fX2Nob2ljZV9fY29udGVudCcgfSxcbiAgICAgICAgICAgICAgY29udGVudFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGRpc2FibGVkID8gbnVsbCA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1zZWxlY3Rpb25fX2Nob2ljZV9fcmVtb3ZlJyxcbiAgICAgICAgICAgICAgb25DbGljazogX3RoaXMyLnJlbW92ZVNlbGVjdGVkLmJpbmQoX3RoaXMyLCBzaW5nbGVWYWx1ZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAobWF4VGFnUGxhY2Vob2xkZXJFbCkge1xuICAgICAgICBzZWxlY3RlZFZhbHVlTm9kZXMucHVzaChtYXhUYWdQbGFjZWhvbGRlckVsKTtcbiAgICAgIH1cbiAgICAgIHNlbGVjdGVkVmFsdWVOb2Rlcy5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdsaScsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6IHByZWZpeENscyArICctc2VhcmNoICcgKyBwcmVmaXhDbHMgKyAnLXNlYXJjaC0taW5saW5lJyxcbiAgICAgICAgICBrZXk6ICdfX2lucHV0J1xuICAgICAgICB9LFxuICAgICAgICBfdGhpczIuZ2V0SW5wdXRFbGVtZW50KClcbiAgICAgICkpO1xuXG4gICAgICBpZiAoaXNNdWx0aXBsZU9yVGFncyhwcm9wcykgJiYgY2hvaWNlVHJhbnNpdGlvbk5hbWUpIHtcbiAgICAgICAgaW5uZXJOb2RlID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBBbmltYXRlLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG9uTGVhdmU6IF90aGlzMi5vbkNob2ljZUFuaW1hdGlvbkxlYXZlLFxuICAgICAgICAgICAgY29tcG9uZW50OiAndWwnLFxuICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU6IGNob2ljZVRyYW5zaXRpb25OYW1lXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZWxlY3RlZFZhbHVlTm9kZXNcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlubmVyTm9kZSA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ3VsJyxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHNlbGVjdGVkVmFsdWVOb2Rlc1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICdkaXYnLFxuICAgICAgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSwgcmVmOiBzYXZlUmVmKF90aGlzMiwgJ3RvcEN0cmxSZWYnKSB9LFxuICAgICAgX3RoaXMyLmdldFBsYWNlaG9sZGVyRWxlbWVudCgpLFxuICAgICAgaW5uZXJOb2RlXG4gICAgKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdDtcblxuXG5TZWxlY3QuZGlzcGxheU5hbWUgPSAnU2VsZWN0JzsiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcyc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBUcmlnZ2VyIGZyb20gJ3JjLXRyaWdnZXInO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBEcm9wZG93bk1lbnUgZnJvbSAnLi9Ecm9wZG93bk1lbnUnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBpc1NpbmdsZU1vZGUsIHNhdmVSZWYgfSBmcm9tICcuL3V0aWwnO1xuXG5UcmlnZ2VyLmRpc3BsYXlOYW1lID0gJ1RyaWdnZXInO1xuXG52YXIgQlVJTFRfSU5fUExBQ0VNRU5UUyA9IHtcbiAgYm90dG9tTGVmdDoge1xuICAgIHBvaW50czogWyd0bCcsICdibCddLFxuICAgIG9mZnNldDogWzAsIDRdLFxuICAgIG92ZXJmbG93OiB7XG4gICAgICBhZGp1c3RYOiAwLFxuICAgICAgYWRqdXN0WTogMVxuICAgIH1cbiAgfSxcbiAgdG9wTGVmdDoge1xuICAgIHBvaW50czogWydibCcsICd0bCddLFxuICAgIG9mZnNldDogWzAsIC00XSxcbiAgICBvdmVyZmxvdzoge1xuICAgICAgYWRqdXN0WDogMCxcbiAgICAgIGFkanVzdFk6IDFcbiAgICB9XG4gIH1cbn07XG5cbnZhciBTZWxlY3RUcmlnZ2VyID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFNlbGVjdFRyaWdnZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFNlbGVjdFRyaWdnZXIoKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTZWxlY3RUcmlnZ2VyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRyb3Bkb3duV2lkdGg6IG51bGxcbiAgICB9LCBfdGhpcy5zZXREcm9wZG93bldpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHdpZHRoID0gUmVhY3RET00uZmluZERPTU5vZGUoX3RoaXMpLm9mZnNldFdpZHRoO1xuICAgICAgaWYgKHdpZHRoICE9PSBfdGhpcy5zdGF0ZS5kcm9wZG93bldpZHRoKSB7XG4gICAgICAgIF90aGlzLnNldFN0YXRlKHsgZHJvcGRvd25XaWR0aDogd2lkdGggfSk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuZ2V0SW5uZXJNZW51ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLmRyb3Bkb3duTWVudVJlZiAmJiBfdGhpcy5kcm9wZG93bk1lbnVSZWYubWVudVJlZjtcbiAgICB9LCBfdGhpcy5nZXRQb3B1cERPTU5vZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMudHJpZ2dlclJlZi5nZXRQb3B1cERvbU5vZGUoKTtcbiAgICB9LCBfdGhpcy5nZXREcm9wZG93bkVsZW1lbnQgPSBmdW5jdGlvbiAobmV3UHJvcHMpIHtcbiAgICAgIHZhciBwcm9wcyA9IF90aGlzLnByb3BzO1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRHJvcGRvd25NZW51LCBfZXh0ZW5kcyh7XG4gICAgICAgIHJlZjogc2F2ZVJlZihfdGhpcywgJ2Ryb3Bkb3duTWVudVJlZicpXG4gICAgICB9LCBuZXdQcm9wcywge1xuICAgICAgICBwcmVmaXhDbHM6IF90aGlzLmdldERyb3Bkb3duUHJlZml4Q2xzKCksXG4gICAgICAgIG9uTWVudVNlbGVjdDogcHJvcHMub25NZW51U2VsZWN0LFxuICAgICAgICBvbk1lbnVEZXNlbGVjdDogcHJvcHMub25NZW51RGVzZWxlY3QsXG4gICAgICAgIG9uUG9wdXBTY3JvbGw6IHByb3BzLm9uUG9wdXBTY3JvbGwsXG4gICAgICAgIHZhbHVlOiBwcm9wcy52YWx1ZSxcbiAgICAgICAgYmFja2ZpbGxWYWx1ZTogcHJvcHMuYmFja2ZpbGxWYWx1ZSxcbiAgICAgICAgZmlyc3RBY3RpdmVWYWx1ZTogcHJvcHMuZmlyc3RBY3RpdmVWYWx1ZSxcbiAgICAgICAgZGVmYXVsdEFjdGl2ZUZpcnN0T3B0aW9uOiBwcm9wcy5kZWZhdWx0QWN0aXZlRmlyc3RPcHRpb24sXG4gICAgICAgIGRyb3Bkb3duTWVudVN0eWxlOiBwcm9wcy5kcm9wZG93bk1lbnVTdHlsZVxuICAgICAgfSkpO1xuICAgIH0sIF90aGlzLmdldERyb3Bkb3duVHJhbnNpdGlvbk5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcHJvcHMgPSBfdGhpcy5wcm9wcztcbiAgICAgIHZhciB0cmFuc2l0aW9uTmFtZSA9IHByb3BzLnRyYW5zaXRpb25OYW1lO1xuICAgICAgaWYgKCF0cmFuc2l0aW9uTmFtZSAmJiBwcm9wcy5hbmltYXRpb24pIHtcbiAgICAgICAgdHJhbnNpdGlvbk5hbWUgPSBfdGhpcy5nZXREcm9wZG93blByZWZpeENscygpICsgJy0nICsgcHJvcHMuYW5pbWF0aW9uO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRyYW5zaXRpb25OYW1lO1xuICAgIH0sIF90aGlzLmdldERyb3Bkb3duUHJlZml4Q2xzID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF90aGlzLnByb3BzLnByZWZpeENscyArICctZHJvcGRvd24nO1xuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgU2VsZWN0VHJpZ2dlci5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldERyb3Bkb3duV2lkdGgoKTtcbiAgfTtcblxuICBTZWxlY3RUcmlnZ2VyLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5zZXREcm9wZG93bldpZHRoKCk7XG4gIH07XG5cbiAgU2VsZWN0VHJpZ2dlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcG9wdXBDbGFzc05hbWU7XG5cbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgb25Qb3B1cEZvY3VzID0gX3Byb3BzLm9uUG9wdXBGb2N1cyxcbiAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzLCBbJ29uUG9wdXBGb2N1cyddKTtcblxuICAgIHZhciBtdWx0aXBsZSA9IHByb3BzLm11bHRpcGxlLFxuICAgICAgICB2aXNpYmxlID0gcHJvcHMudmlzaWJsZSxcbiAgICAgICAgaW5wdXRWYWx1ZSA9IHByb3BzLmlucHV0VmFsdWUsXG4gICAgICAgIGRyb3Bkb3duQWxpZ24gPSBwcm9wcy5kcm9wZG93bkFsaWduLFxuICAgICAgICBkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgICBzaG93U2VhcmNoID0gcHJvcHMuc2hvd1NlYXJjaCxcbiAgICAgICAgZHJvcGRvd25DbGFzc05hbWUgPSBwcm9wcy5kcm9wZG93bkNsYXNzTmFtZSxcbiAgICAgICAgZHJvcGRvd25TdHlsZSA9IHByb3BzLmRyb3Bkb3duU3R5bGUsXG4gICAgICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCA9IHByb3BzLmRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDtcblxuICAgIHZhciBkcm9wZG93blByZWZpeENscyA9IHRoaXMuZ2V0RHJvcGRvd25QcmVmaXhDbHMoKTtcbiAgICB2YXIgcG9wdXBDbGFzc05hbWUgPSAoX3BvcHVwQ2xhc3NOYW1lID0ge30sIF9wb3B1cENsYXNzTmFtZVtkcm9wZG93bkNsYXNzTmFtZV0gPSAhIWRyb3Bkb3duQ2xhc3NOYW1lLCBfcG9wdXBDbGFzc05hbWVbZHJvcGRvd25QcmVmaXhDbHMgKyAnLS0nICsgKG11bHRpcGxlID8gJ211bHRpcGxlJyA6ICdzaW5nbGUnKV0gPSAxLCBfcG9wdXBDbGFzc05hbWUpO1xuICAgIHZhciBwb3B1cEVsZW1lbnQgPSB0aGlzLmdldERyb3Bkb3duRWxlbWVudCh7XG4gICAgICBtZW51SXRlbXM6IHByb3BzLm9wdGlvbnMsXG4gICAgICBvblBvcHVwRm9jdXM6IG9uUG9wdXBGb2N1cyxcbiAgICAgIG11bHRpcGxlOiBtdWx0aXBsZSxcbiAgICAgIGlucHV0VmFsdWU6IGlucHV0VmFsdWUsXG4gICAgICB2aXNpYmxlOiB2aXNpYmxlXG4gICAgfSk7XG4gICAgdmFyIGhpZGVBY3Rpb24gPSB2b2lkIDA7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICBoaWRlQWN0aW9uID0gW107XG4gICAgfSBlbHNlIGlmIChpc1NpbmdsZU1vZGUocHJvcHMpICYmICFzaG93U2VhcmNoKSB7XG4gICAgICBoaWRlQWN0aW9uID0gWydjbGljayddO1xuICAgIH0gZWxzZSB7XG4gICAgICBoaWRlQWN0aW9uID0gWydibHVyJ107XG4gICAgfVxuICAgIHZhciBwb3B1cFN0eWxlID0gX2V4dGVuZHMoe30sIGRyb3Bkb3duU3R5bGUpO1xuICAgIHZhciB3aWR0aFByb3AgPSBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGggPyAnd2lkdGgnIDogJ21pbldpZHRoJztcbiAgICBpZiAodGhpcy5zdGF0ZS5kcm9wZG93bldpZHRoKSB7XG4gICAgICBwb3B1cFN0eWxlW3dpZHRoUHJvcF0gPSB0aGlzLnN0YXRlLmRyb3Bkb3duV2lkdGggKyAncHgnO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgVHJpZ2dlcixcbiAgICAgIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICBzaG93QWN0aW9uOiBkaXNhYmxlZCA/IFtdIDogdGhpcy5wcm9wcy5zaG93QWN0aW9uLFxuICAgICAgICBoaWRlQWN0aW9uOiBoaWRlQWN0aW9uLFxuICAgICAgICByZWY6IHNhdmVSZWYodGhpcywgJ3RyaWdnZXJSZWYnKSxcbiAgICAgICAgcG9wdXBQbGFjZW1lbnQ6ICdib3R0b21MZWZ0JyxcbiAgICAgICAgYnVpbHRpblBsYWNlbWVudHM6IEJVSUxUX0lOX1BMQUNFTUVOVFMsXG4gICAgICAgIHByZWZpeENsczogZHJvcGRvd25QcmVmaXhDbHMsXG4gICAgICAgIHBvcHVwVHJhbnNpdGlvbk5hbWU6IHRoaXMuZ2V0RHJvcGRvd25UcmFuc2l0aW9uTmFtZSgpLFxuICAgICAgICBvblBvcHVwVmlzaWJsZUNoYW5nZTogcHJvcHMub25Ecm9wZG93blZpc2libGVDaGFuZ2UsXG4gICAgICAgIHBvcHVwOiBwb3B1cEVsZW1lbnQsXG4gICAgICAgIHBvcHVwQWxpZ246IGRyb3Bkb3duQWxpZ24sXG4gICAgICAgIHBvcHVwVmlzaWJsZTogdmlzaWJsZSxcbiAgICAgICAgZ2V0UG9wdXBDb250YWluZXI6IHByb3BzLmdldFBvcHVwQ29udGFpbmVyLFxuICAgICAgICBwb3B1cENsYXNzTmFtZTogY2xhc3NuYW1lcyhwb3B1cENsYXNzTmFtZSksXG4gICAgICAgIHBvcHVwU3R5bGU6IHBvcHVwU3R5bGVcbiAgICAgIH0pLFxuICAgICAgcHJvcHMuY2hpbGRyZW5cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBTZWxlY3RUcmlnZ2VyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5TZWxlY3RUcmlnZ2VyLnByb3BUeXBlcyA9IHtcbiAgb25Qb3B1cEZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Qb3B1cFNjcm9sbDogUHJvcFR5cGVzLmZ1bmMsXG4gIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDogUHJvcFR5cGVzLmJvb2wsXG4gIGRyb3Bkb3duQWxpZ246IFByb3BUeXBlcy5vYmplY3QsXG4gIHZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHNob3dTZWFyY2g6IFByb3BUeXBlcy5ib29sLFxuICBkcm9wZG93bkNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxuICBpbnB1dFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmaWx0ZXJPcHRpb246IFByb3BUeXBlcy5hbnksXG4gIG9wdGlvbnM6IFByb3BUeXBlcy5hbnksXG4gIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgcG9wdXBDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICBzaG93QWN0aW9uOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKVxufTtcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdFRyaWdnZXI7XG5cblxuU2VsZWN0VHJpZ2dlci5kaXNwbGF5TmFtZSA9ICdTZWxlY3RUcmlnZ2VyJzsiLCJpbXBvcnQgU2VsZWN0IGZyb20gJy4vU2VsZWN0JztcbmltcG9ydCBPcHRpb24gZnJvbSAnLi9PcHRpb24nO1xuaW1wb3J0IHsgU2VsZWN0UHJvcFR5cGVzIH0gZnJvbSAnLi9Qcm9wVHlwZXMnO1xuaW1wb3J0IE9wdEdyb3VwIGZyb20gJy4vT3B0R3JvdXAnO1xuU2VsZWN0Lk9wdGlvbiA9IE9wdGlvbjtcblNlbGVjdC5PcHRHcm91cCA9IE9wdEdyb3VwO1xuZXhwb3J0IHsgT3B0aW9uLCBPcHRHcm91cCwgU2VsZWN0UHJvcFR5cGVzIH07XG5leHBvcnQgZGVmYXVsdCBTZWxlY3Q7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlUHJvcFZhbHVlKGNoaWxkKSB7XG4gIHZhciBwcm9wcyA9IGNoaWxkLnByb3BzO1xuICBpZiAoJ3ZhbHVlJyBpbiBwcm9wcykge1xuICAgIHJldHVybiBwcm9wcy52YWx1ZTtcbiAgfVxuICBpZiAoY2hpbGQua2V5KSB7XG4gICAgcmV0dXJuIGNoaWxkLmtleTtcbiAgfVxuICBpZiAoY2hpbGQudHlwZSAmJiBjaGlsZC50eXBlLmlzU2VsZWN0T3B0R3JvdXAgJiYgcHJvcHMubGFiZWwpIHtcbiAgICByZXR1cm4gcHJvcHMubGFiZWw7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKCdOZWVkIGF0IGxlYXN0IGEga2V5IG9yIGEgdmFsdWUgb3IgYSBsYWJlbCAob25seSBmb3IgT3B0R3JvdXApIGZvciAnICsgY2hpbGQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvcFZhbHVlKGNoaWxkLCBwcm9wKSB7XG4gIGlmIChwcm9wID09PSAndmFsdWUnKSB7XG4gICAgcmV0dXJuIGdldFZhbHVlUHJvcFZhbHVlKGNoaWxkKTtcbiAgfVxuICByZXR1cm4gY2hpbGQucHJvcHNbcHJvcF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc011bHRpcGxlKHByb3BzKSB7XG4gIHJldHVybiBwcm9wcy5tdWx0aXBsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29tYm9ib3gocHJvcHMpIHtcbiAgcmV0dXJuIHByb3BzLmNvbWJvYm94O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNNdWx0aXBsZU9yVGFncyhwcm9wcykge1xuICByZXR1cm4gcHJvcHMubXVsdGlwbGUgfHwgcHJvcHMudGFncztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTXVsdGlwbGVPclRhZ3NPckNvbWJvYm94KHByb3BzKSB7XG4gIHJldHVybiBpc011bHRpcGxlT3JUYWdzKHByb3BzKSB8fCBpc0NvbWJvYm94KHByb3BzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2luZ2xlTW9kZShwcm9wcykge1xuICByZXR1cm4gIWlzTXVsdGlwbGVPclRhZ3NPckNvbWJvYm94KHByb3BzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvQXJyYXkodmFsdWUpIHtcbiAgdmFyIHJldCA9IHZhbHVlO1xuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldCA9IFtdO1xuICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldCA9IFt2YWx1ZV07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1hcEtleSh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlICsgJy0nICsgdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmV2ZW50RGVmYXVsdEV2ZW50KGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZEluZGV4SW5WYWx1ZUJ5U2luZ2xlVmFsdWUodmFsdWUsIHNpbmdsZVZhbHVlKSB7XG4gIHZhciBpbmRleCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHZhbHVlW2ldID09PSBzaW5nbGVWYWx1ZSkge1xuICAgICAgaW5kZXggPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBpbmRleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExhYmVsRnJvbVByb3BzVmFsdWUodmFsdWUsIGtleSkge1xuICB2YXIgbGFiZWwgPSB2b2lkIDA7XG4gIHZhbHVlID0gdG9BcnJheSh2YWx1ZSk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodmFsdWVbaV0ua2V5ID09PSBrZXkpIHtcbiAgICAgIGxhYmVsID0gdmFsdWVbaV0ubGFiZWw7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0S2V5cyhtZW51SXRlbXMsIHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciBzZWxlY3RlZEtleXMgPSBbXTtcbiAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChtZW51SXRlbXMsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgaWYgKGl0ZW0udHlwZS5pc01lbnVJdGVtR3JvdXApIHtcbiAgICAgIHNlbGVjdGVkS2V5cyA9IHNlbGVjdGVkS2V5cy5jb25jYXQoZ2V0U2VsZWN0S2V5cyhpdGVtLnByb3BzLmNoaWxkcmVuLCB2YWx1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgaXRlbVZhbHVlID0gZ2V0VmFsdWVQcm9wVmFsdWUoaXRlbSk7XG4gICAgICB2YXIgaXRlbUtleSA9IGl0ZW0ua2V5O1xuICAgICAgaWYgKGZpbmRJbmRleEluVmFsdWVCeVNpbmdsZVZhbHVlKHZhbHVlLCBpdGVtVmFsdWUpICE9PSAtMSAmJiBpdGVtS2V5KSB7XG4gICAgICAgIHNlbGVjdGVkS2V5cy5wdXNoKGl0ZW1LZXkpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzZWxlY3RlZEtleXM7XG59XG5cbmV4cG9ydCB2YXIgVU5TRUxFQ1RBQkxFX1NUWUxFID0ge1xuICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gIFdlYmtpdFVzZXJTZWxlY3Q6ICdub25lJ1xufTtcblxuZXhwb3J0IHZhciBVTlNFTEVDVEFCTEVfQVRUUklCVVRFID0ge1xuICB1bnNlbGVjdGFibGU6ICd1bnNlbGVjdGFibGUnXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZmluZEZpcnN0TWVudUl0ZW0oY2hpbGRyZW4pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgIGlmIChjaGlsZC50eXBlLmlzTWVudUl0ZW1Hcm91cCkge1xuICAgICAgdmFyIGZvdW5kID0gZmluZEZpcnN0TWVudUl0ZW0oY2hpbGQucHJvcHMuY2hpbGRyZW4pO1xuICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIHJldHVybiBmb3VuZDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFjaGlsZC5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluY2x1ZGVzU2VwYXJhdG9ycyhzdHJpbmcsIHNlcGFyYXRvcnMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZXBhcmF0b3JzLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKHN0cmluZy5sYXN0SW5kZXhPZihzZXBhcmF0b3JzW2ldKSA+IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcGxpdEJ5U2VwYXJhdG9ycyhzdHJpbmcsIHNlcGFyYXRvcnMpIHtcbiAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoJ1snICsgc2VwYXJhdG9ycy5qb2luKCkgKyAnXScpO1xuICByZXR1cm4gc3RyaW5nLnNwbGl0KHJlZykuZmlsdGVyKGZ1bmN0aW9uICh0b2tlbikge1xuICAgIHJldHVybiB0b2tlbjtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0RmlsdGVyRm4oaW5wdXQsIGNoaWxkKSB7XG4gIGlmIChjaGlsZC5wcm9wcy5kaXNhYmxlZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdmFsdWUgPSB0b0FycmF5KGdldFByb3BWYWx1ZShjaGlsZCwgdGhpcy5wcm9wcy5vcHRpb25GaWx0ZXJQcm9wKSkuam9pbignJyk7XG4gIHJldHVybiB2YWx1ZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoaW5wdXQudG9Mb3dlckNhc2UoKSkgPiAtMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlT3B0aW9uVmFsdWUodmFsdWUsIHByb3BzKSB7XG4gIGlmIChpc1NpbmdsZU1vZGUocHJvcHMpIHx8IGlzTXVsdGlwbGUocHJvcHMpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGB2YWx1ZWAgb2YgdHlwZSBgJyArIHR5cGVvZiB2YWx1ZSArICdgIHN1cHBsaWVkIHRvIE9wdGlvbiwgJyArICdleHBlY3RlZCBgc3RyaW5nYCB3aGVuIGB0YWdzL2NvbWJvYm94YCBpcyBgdHJ1ZWAuJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVSZWYoaW5zdGFuY2UsIG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgaW5zdGFuY2VbbmFtZV0gPSBub2RlO1xuICB9O1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgdmFyIHJldCA9IFtdO1xuICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoYykge1xuICAgIHJldC5wdXNoKGMpO1xuICB9KTtcbiAgcmV0dXJuIHJldDtcbn0iLCJ2YXIgY2FjaGVkID0gdm9pZCAwO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTY3JvbGxCYXJTaXplKGZyZXNoKSB7XG4gIGlmIChmcmVzaCB8fCBjYWNoZWQgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhciBpbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGlubmVyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgIGlubmVyLnN0eWxlLmhlaWdodCA9ICcyMDBweCc7XG5cbiAgICB2YXIgb3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2YXIgb3V0ZXJTdHlsZSA9IG91dGVyLnN0eWxlO1xuXG4gICAgb3V0ZXJTdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgb3V0ZXJTdHlsZS50b3AgPSAwO1xuICAgIG91dGVyU3R5bGUubGVmdCA9IDA7XG4gICAgb3V0ZXJTdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgIG91dGVyU3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIG91dGVyU3R5bGUud2lkdGggPSAnMjAwcHgnO1xuICAgIG91dGVyU3R5bGUuaGVpZ2h0ID0gJzE1MHB4JztcbiAgICBvdXRlclN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG5cbiAgICBvdXRlci5hcHBlbmRDaGlsZChpbm5lcik7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG91dGVyKTtcblxuICAgIHZhciB3aWR0aENvbnRhaW5lZCA9IGlubmVyLm9mZnNldFdpZHRoO1xuICAgIG91dGVyLnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gICAgdmFyIHdpZHRoU2Nyb2xsID0gaW5uZXIub2Zmc2V0V2lkdGg7XG5cbiAgICBpZiAod2lkdGhDb250YWluZWQgPT09IHdpZHRoU2Nyb2xsKSB7XG4gICAgICB3aWR0aFNjcm9sbCA9IG91dGVyLmNsaWVudFdpZHRoO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQob3V0ZXIpO1xuXG4gICAgY2FjaGVkID0gd2lkdGhDb250YWluZWQgLSB3aWR0aFNjcm9sbDtcbiAgfVxuICByZXR1cm4gY2FjaGVkO1xufSJdLCJzb3VyY2VSb290IjoiIn0=