(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "../node_modules/antd/es/icon/style/css.js":
/*!*************************************************!*\
  !*** ../node_modules/antd/es/icon/style/css.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../node_modules/antd/es/progress/index.js":
/*!*************************************************!*\
  !*** ../node_modules/antd/es/progress/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _progress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progress */ "../node_modules/antd/es/progress/progress.js");

/* harmony default export */ __webpack_exports__["default"] = (_progress__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../node_modules/antd/es/progress/progress.js":
/*!****************************************************!*\
  !*** ../node_modules/antd/es/progress/progress.js ***!
  \****************************************************/
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icon */ "../node_modules/antd/es/icon/index.js");
/* harmony import */ var rc_progress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rc-progress */ "../node_modules/rc-progress/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);






var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};





var statusColorMap = {
    normal: '#108ee9',
    exception: '#ff5500',
    success: '#87d068'
};

var Progress = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Progress, _React$Component);

    function Progress() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Progress);

        return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).apply(this, arguments));
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Progress, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var props = this.props;

            var prefixCls = props.prefixCls,
                className = props.className,
                _props$percent = props.percent,
                percent = _props$percent === undefined ? 0 : _props$percent,
                status = props.status,
                format = props.format,
                trailColor = props.trailColor,
                size = props.size,
                successPercent = props.successPercent,
                type = props.type,
                strokeWidth = props.strokeWidth,
                width = props.width,
                showInfo = props.showInfo,
                _props$gapDegree = props.gapDegree,
                gapDegree = _props$gapDegree === undefined ? 0 : _props$gapDegree,
                gapPosition = props.gapPosition,
                restProps = __rest(props, ["prefixCls", "className", "percent", "status", "format", "trailColor", "size", "successPercent", "type", "strokeWidth", "width", "showInfo", "gapDegree", "gapPosition"]);

            var progressStatus = parseInt(successPercent ? successPercent.toString() : percent.toString(), 10) >= 100 && !('status' in props) ? 'success' : status || 'normal';
            var progressInfo = void 0;
            var progress = void 0;
            var textFormatter = format || function (percentNumber) {
                return percentNumber + '%';
            };
            if (showInfo) {
                var text = void 0;
                var iconType = type === 'circle' || type === 'dashboard' ? '' : '-circle';
                if (progressStatus === 'exception') {
                    text = format ? textFormatter(percent) : react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_8__["default"], { type: 'cross' + iconType });
                } else if (progressStatus === 'success') {
                    text = format ? textFormatter(percent) : react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_8__["default"], { type: 'check' + iconType });
                } else {
                    text = textFormatter(percent);
                }
                progressInfo = react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                    'span',
                    { className: prefixCls + '-text' },
                    text
                );
            }
            if (type === 'line') {
                var percentStyle = {
                    width: percent + '%',
                    height: strokeWidth || (size === 'small' ? 6 : 8)
                };
                var successPercentStyle = {
                    width: successPercent + '%',
                    height: strokeWidth || (size === 'small' ? 6 : 8)
                };
                var successSegment = successPercent !== undefined ? react__WEBPACK_IMPORTED_MODULE_7__["createElement"]('div', { className: prefixCls + '-success-bg', style: successPercentStyle }) : null;
                progress = react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                    'div',
                    null,
                    react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                        'div',
                        { className: prefixCls + '-outer' },
                        react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                            'div',
                            { className: prefixCls + '-inner' },
                            react__WEBPACK_IMPORTED_MODULE_7__["createElement"]('div', { className: prefixCls + '-bg', style: percentStyle }),
                            successSegment
                        )
                    ),
                    progressInfo
                );
            } else if (type === 'circle' || type === 'dashboard') {
                var circleSize = width || 120;
                var circleStyle = {
                    width: circleSize,
                    height: circleSize,
                    fontSize: circleSize * 0.15 + 6
                };
                var circleWidth = strokeWidth || 6;
                var gapPos = gapPosition || type === 'dashboard' && 'bottom' || 'top';
                var gapDeg = gapDegree || type === 'dashboard' && 75;
                progress = react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                    'div',
                    { className: prefixCls + '-inner', style: circleStyle },
                    react__WEBPACK_IMPORTED_MODULE_7__["createElement"](rc_progress__WEBPACK_IMPORTED_MODULE_9__["Circle"], { percent: percent, strokeWidth: circleWidth, trailWidth: circleWidth, strokeColor: statusColorMap[progressStatus], trailColor: trailColor, prefixCls: prefixCls, gapDegree: gapDeg, gapPosition: gapPos }),
                    progressInfo
                );
            }
            var classString = classnames__WEBPACK_IMPORTED_MODULE_10___default()(prefixCls, (_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-' + (type === 'dashboard' && 'circle' || type), true), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-status-' + progressStatus, true), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-show-info', showInfo), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-' + size, size), _classNames), className);
            return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](
                'div',
                babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, restProps, { className: classString }),
                progress
            );
        }
    }]);

    return Progress;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Progress);

Progress.defaultProps = {
    type: 'line',
    percent: 0,
    showInfo: true,
    trailColor: '#f3f3f3',
    prefixCls: 'ant-progress',
    size: 'default'
};
Progress.propTypes = {
    status: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOf(['normal', 'exception', 'active', 'success']),
    type: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOf(['line', 'circle', 'dashboard']),
    showInfo: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
    percent: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
    width: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
    strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
    trailColor: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
    format: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
    gapDegree: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
    'default': prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOf(['default', 'small'])
};

/***/ }),

/***/ "../node_modules/antd/es/progress/style/css.js":
/*!*****************************************************!*\
  !*** ../node_modules/antd/es/progress/style/css.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../node_modules/antd/es/progress/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "../node_modules/antd/es/progress/style/index.css":
/*!********************************************************!*\
  !*** ../node_modules/antd/es/progress/style/index.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/progress/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/progress/style/index.css", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
		var newContent = __webpack_require__(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/progress/style/index.css");

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

/***/ "../node_modules/antd/es/upload/Dragger.js":
/*!*************************************************!*\
  !*** ../node_modules/antd/es/upload/Dragger.js ***!
  \*************************************************/
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
/* harmony import */ var _Upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Upload */ "../node_modules/antd/es/upload/Upload.js");








var Dragger = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Dragger, _React$Component);

    function Dragger() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Dragger);

        return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (Dragger.__proto__ || Object.getPrototypeOf(Dragger)).apply(this, arguments));
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Dragger, [{
        key: 'render',
        value: function render() {
            var props = this.props;

            return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_Upload__WEBPACK_IMPORTED_MODULE_6__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, { type: 'drag', style: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props.style, { height: props.height }) }));
        }
    }]);

    return Dragger;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Dragger);

/***/ }),

/***/ "../node_modules/antd/es/upload/Upload.js":
/*!************************************************!*\
  !*** ../node_modules/antd/es/upload/Upload.js ***!
  \************************************************/
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
/* harmony import */ var rc_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-upload */ "../node_modules/rc-upload/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/uniqBy */ "../node_modules/lodash/uniqBy.js");
/* harmony import */ var lodash_uniqBy__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqBy__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../locale-provider/LocaleReceiver */ "../node_modules/antd/es/locale-provider/LocaleReceiver.js");
/* harmony import */ var _locale_provider_default__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../locale-provider/default */ "../node_modules/antd/es/locale-provider/default.js");
/* harmony import */ var _UploadList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./UploadList */ "../node_modules/antd/es/upload/UploadList.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils */ "../node_modules/antd/es/upload/utils.js");















var Upload = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Upload, _React$Component);

    function Upload(props) {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Upload);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (Upload.__proto__ || Object.getPrototypeOf(Upload)).call(this, props));

        _this.onStart = function (file) {
            var targetItem = void 0;
            var nextFileList = _this.state.fileList.concat();
            targetItem = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["fileToObject"])(file);
            targetItem.status = 'uploading';
            nextFileList.push(targetItem);
            _this.onChange({
                file: targetItem,
                fileList: nextFileList
            });
            // fix ie progress
            if (!window.FormData) {
                _this.autoUpdateProgress(0, targetItem);
            }
        };
        _this.onSuccess = function (response, file) {
            _this.clearProgressTimer();
            try {
                if (typeof response === 'string') {
                    response = JSON.parse(response);
                }
            } catch (e) {/* do nothing */
            }
            var fileList = _this.state.fileList;
            var targetItem = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["getFileItem"])(file, fileList);
            // removed
            if (!targetItem) {
                return;
            }
            targetItem.status = 'done';
            targetItem.response = response;
            _this.onChange({
                file: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, targetItem),
                fileList: fileList
            });
        };
        _this.onProgress = function (e, file) {
            var fileList = _this.state.fileList;
            var targetItem = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["getFileItem"])(file, fileList);
            // removed
            if (!targetItem) {
                return;
            }
            targetItem.percent = e.percent;
            _this.onChange({
                event: e,
                file: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, targetItem),
                fileList: _this.state.fileList
            });
        };
        _this.onError = function (error, response, file) {
            _this.clearProgressTimer();
            var fileList = _this.state.fileList;
            var targetItem = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["getFileItem"])(file, fileList);
            // removed
            if (!targetItem) {
                return;
            }
            targetItem.error = error;
            targetItem.response = response;
            targetItem.status = 'error';
            _this.onChange({
                file: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, targetItem),
                fileList: fileList
            });
        };
        _this.handleManualRemove = function (file) {
            _this.upload.abort(file);
            file.status = 'removed'; // eslint-disable-line
            _this.handleRemove(file);
        };
        _this.onChange = function (info) {
            if (!('fileList' in _this.props)) {
                _this.setState({ fileList: info.fileList });
            }
            var onChange = _this.props.onChange;

            if (onChange) {
                onChange(info);
            }
        };
        _this.onFileDrop = function (e) {
            _this.setState({
                dragState: e.type
            });
        };
        _this.beforeUpload = function (file, fileList) {
            if (!_this.props.beforeUpload) {
                return true;
            }
            var result = _this.props.beforeUpload(file, fileList);
            if (result === false) {
                _this.onChange({
                    file: file,
                    fileList: lodash_uniqBy__WEBPACK_IMPORTED_MODULE_9___default()(fileList.concat(_this.state.fileList), function (item) {
                        return item.uid;
                    })
                });
                return false;
            } else if (result && result.then) {
                return result;
            }
            return true;
        };
        _this.saveUpload = function (node) {
            _this.upload = node;
        };
        _this.renderUploadList = function (locale) {
            var _this$props = _this.props,
                showUploadList = _this$props.showUploadList,
                listType = _this$props.listType,
                onPreview = _this$props.onPreview;
            var showRemoveIcon = showUploadList.showRemoveIcon,
                showPreviewIcon = showUploadList.showPreviewIcon;

            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_UploadList__WEBPACK_IMPORTED_MODULE_12__["default"], { listType: listType, items: _this.state.fileList, onPreview: onPreview, onRemove: _this.handleManualRemove, showRemoveIcon: showRemoveIcon, showPreviewIcon: showPreviewIcon, locale: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, locale, _this.props.locale) });
        };
        _this.state = {
            fileList: props.fileList || props.defaultFileList || [],
            dragState: 'drop'
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Upload, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.clearProgressTimer();
        }
    }, {
        key: 'autoUpdateProgress',
        value: function autoUpdateProgress(_, file) {
            var _this2 = this;

            var getPercent = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["genPercentAdd"])();
            var curPercent = 0;
            this.clearProgressTimer();
            this.progressTimer = setInterval(function () {
                curPercent = getPercent(curPercent);
                _this2.onProgress({
                    percent: curPercent
                }, file);
            }, 200);
        }
    }, {
        key: 'handleRemove',
        value: function handleRemove(file) {
            var _this3 = this;

            var onRemove = this.props.onRemove;

            Promise.resolve(typeof onRemove === 'function' ? onRemove(file) : onRemove).then(function (ret) {
                // Prevent removing file
                if (ret === false) {
                    return;
                }
                var removedFileList = Object(_utils__WEBPACK_IMPORTED_MODULE_13__["removeFileItem"])(file, _this3.state.fileList);
                if (removedFileList) {
                    _this3.onChange({
                        file: file,
                        fileList: removedFileList
                    });
                }
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('fileList' in nextProps) {
                this.setState({
                    fileList: nextProps.fileList || []
                });
            }
        }
    }, {
        key: 'clearProgressTimer',
        value: function clearProgressTimer() {
            clearInterval(this.progressTimer);
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames2;

            var _props = this.props,
                _props$prefixCls = _props.prefixCls,
                prefixCls = _props$prefixCls === undefined ? '' : _props$prefixCls,
                className = _props.className,
                showUploadList = _props.showUploadList,
                listType = _props.listType,
                type = _props.type,
                disabled = _props.disabled,
                children = _props.children;

            var rcUploadProps = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({ onStart: this.onStart, onError: this.onError, onProgress: this.onProgress, onSuccess: this.onSuccess }, this.props, { beforeUpload: this.beforeUpload });
            delete rcUploadProps.className;
            var uploadList = showUploadList ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                _locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_10__["default"],
                { componentName: 'Upload', defaultLocale: _locale_provider_default__WEBPACK_IMPORTED_MODULE_11__["default"].Upload },
                this.renderUploadList
            ) : null;
            if (type === 'drag') {
                var _classNames;

                var dragCls = classnames__WEBPACK_IMPORTED_MODULE_8___default()(prefixCls, (_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-drag', true), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-drag-uploading', this.state.fileList.some(function (file) {
                    return file.status === 'uploading';
                })), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-drag-hover', this.state.dragState === 'dragover'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-disabled', disabled), _classNames));
                return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    'span',
                    { className: className },
                    react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                        'div',
                        { className: dragCls, onDrop: this.onFileDrop, onDragOver: this.onFileDrop, onDragLeave: this.onFileDrop },
                        react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                            rc_upload__WEBPACK_IMPORTED_MODULE_7__["default"],
                            babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, rcUploadProps, { ref: this.saveUpload, className: prefixCls + '-btn' }),
                            react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                                'div',
                                { className: prefixCls + '-drag-container' },
                                children
                            )
                        )
                    ),
                    uploadList
                );
            }
            var uploadButtonCls = classnames__WEBPACK_IMPORTED_MODULE_8___default()(prefixCls, (_classNames2 = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames2, prefixCls + '-select', true), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames2, prefixCls + '-select-' + listType, true), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames2, prefixCls + '-disabled', disabled), _classNames2));
            var uploadButton = react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'div',
                { className: uploadButtonCls, style: { display: children ? '' : 'none' } },
                react__WEBPACK_IMPORTED_MODULE_6__["createElement"](rc_upload__WEBPACK_IMPORTED_MODULE_7__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, rcUploadProps, { ref: this.saveUpload }))
            );
            if (listType === 'picture-card') {
                return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    'span',
                    { className: className },
                    uploadList,
                    uploadButton
                );
            }
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'span',
                { className: className },
                uploadButton,
                uploadList
            );
        }
    }]);

    return Upload;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Upload);

Upload.defaultProps = {
    prefixCls: 'ant-upload',
    type: 'select',
    multiple: false,
    action: '',
    data: {},
    accept: '',
    beforeUpload: _utils__WEBPACK_IMPORTED_MODULE_13__["T"],
    showUploadList: true,
    listType: 'text',
    className: '',
    disabled: false,
    supportServerRender: true
};

/***/ }),

/***/ "../node_modules/antd/es/upload/UploadList.js":
/*!****************************************************!*\
  !*** ../node_modules/antd/es/upload/UploadList.js ***!
  \****************************************************/
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
/* harmony import */ var rc_animate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rc-animate */ "../node_modules/rc-animate/es/Animate.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icon */ "../node_modules/antd/es/icon/index.js");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../tooltip */ "../node_modules/antd/es/tooltip/index.js");
/* harmony import */ var _progress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../progress */ "../node_modules/antd/es/progress/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);












// https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
var previewFile = function previewFile(file, callback) {
    var reader = new FileReader();
    reader.onloadend = function () {
        return callback(reader.result);
    };
    reader.readAsDataURL(file);
};
var extname = function extname(url) {
    if (!url) {
        return '';
    }
    var temp = url.split('/');
    var filename = temp[temp.length - 1];
    return (/\.[^./\\]*$/.exec(filename) || [''])[0];
};
var isImageUrl = function isImageUrl(url) {
    if (/^data:image\//.test(url) || /\.(webp|svg|png|gif|jpg|jpeg)$/.test(url)) {
        return true;
    } else if (/^data:/.test(url)) {
        // other file types of base64
        return false;
    } else if (extname(url)) {
        // other file types which have extension
        return false;
    }
    return true;
};

var UploadList = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(UploadList, _React$Component);

    function UploadList() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, UploadList);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (UploadList.__proto__ || Object.getPrototypeOf(UploadList)).apply(this, arguments));

        _this.handleClose = function (file) {
            var onRemove = _this.props.onRemove;

            if (onRemove) {
                onRemove(file);
            }
        };
        _this.handlePreview = function (file, e) {
            var onPreview = _this.props.onPreview;

            if (!onPreview) {
                return;
            }
            e.preventDefault();
            return onPreview(file);
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(UploadList, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var _this2 = this;

            if (this.props.listType !== 'picture' && this.props.listType !== 'picture-card') {
                return;
            }
            (this.props.items || []).forEach(function (file) {
                if (typeof document === 'undefined' || typeof window === 'undefined' || !window.FileReader || !window.File || !(file.originFileObj instanceof File) || file.thumbUrl !== undefined) {
                    return;
                }
                /*eslint-disable */
                file.thumbUrl = '';
                /*eslint-enable */
                previewFile(file.originFileObj, function (previewDataUrl) {
                    /*eslint-disable */
                    file.thumbUrl = previewDataUrl;
                    /*eslint-enable */
                    _this2.forceUpdate();
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this,
                _classNames2;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                _props$items = _props.items,
                items = _props$items === undefined ? [] : _props$items,
                listType = _props.listType,
                showPreviewIcon = _props.showPreviewIcon,
                showRemoveIcon = _props.showRemoveIcon,
                locale = _props.locale;

            var list = items.map(function (file) {
                var _classNames;

                var progress = void 0;
                var icon = react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_8__["default"], { type: file.status === 'uploading' ? 'loading' : 'paper-clip' });
                if (listType === 'picture' || listType === 'picture-card') {
                    if (listType === 'picture-card' && file.status === 'uploading') {
                        icon = react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                            'div',
                            { className: prefixCls + '-list-item-uploading-text' },
                            locale.uploading
                        );
                    } else if (!file.thumbUrl && !file.url) {
                        icon = react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_8__["default"], { className: prefixCls + '-list-item-thumbnail', type: 'picture' });
                    } else {
                        var thumbnail = isImageUrl(file.thumbUrl || file.url) ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"]('img', { src: file.thumbUrl || file.url, alt: file.name }) : react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_8__["default"], { type: 'file', className: prefixCls + '-list-item-icon' });
                        icon = react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                            'a',
                            { className: prefixCls + '-list-item-thumbnail', onClick: function onClick(e) {
                                    return _this3.handlePreview(file, e);
                                }, href: file.url || file.thumbUrl, target: '_blank', rel: 'noopener noreferrer' },
                            thumbnail
                        );
                    }
                }
                if (file.status === 'uploading') {
                    // show loading icon if upload progress listener is disabled
                    var loadingProgress = 'percent' in file ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_progress__WEBPACK_IMPORTED_MODULE_10__["default"], babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({ type: 'line' }, _this3.props.progressAttr, { percent: file.percent })) : null;
                    progress = react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                        'div',
                        { className: prefixCls + '-list-item-progress', key: 'progress' },
                        loadingProgress
                    );
                }
                var infoUploadingClass = classnames__WEBPACK_IMPORTED_MODULE_11___default()((_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-list-item', true), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-list-item-' + file.status, true), _classNames));
                var preview = file.url ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    'a',
                    babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, file.linkProps, { href: file.url, target: '_blank', rel: 'noopener noreferrer', className: prefixCls + '-list-item-name', onClick: function onClick(e) {
                            return _this3.handlePreview(file, e);
                        }, title: file.name }),
                    file.name
                ) : react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    'span',
                    { className: prefixCls + '-list-item-name', onClick: function onClick(e) {
                            return _this3.handlePreview(file, e);
                        }, title: file.name },
                    file.name
                );
                var style = {
                    pointerEvents: 'none',
                    opacity: 0.5
                };
                var previewIcon = showPreviewIcon ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    'a',
                    { href: file.url || file.thumbUrl, target: '_blank', rel: 'noopener noreferrer', style: file.url || file.thumbUrl ? undefined : style, onClick: function onClick(e) {
                            return _this3.handlePreview(file, e);
                        }, title: locale.previewFile },
                    react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_8__["default"], { type: 'eye-o' })
                ) : null;
                var removeIcon = showRemoveIcon ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_8__["default"], { type: 'delete', title: locale.removeFile, onClick: function onClick() {
                        return _this3.handleClose(file);
                    } }) : null;
                var removeIconCross = showRemoveIcon ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_icon__WEBPACK_IMPORTED_MODULE_8__["default"], { type: 'cross', title: locale.removeFile, onClick: function onClick() {
                        return _this3.handleClose(file);
                    } }) : null;
                var actions = listType === 'picture-card' && file.status !== 'uploading' ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    'span',
                    { className: prefixCls + '-list-item-actions' },
                    previewIcon,
                    removeIcon
                ) : removeIconCross;
                var message = void 0;
                if (file.response && typeof file.response === 'string') {
                    message = file.response;
                } else {
                    message = file.error && file.error.statusText || locale.uploadError;
                }
                var iconAndPreview = file.status === 'error' ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    _tooltip__WEBPACK_IMPORTED_MODULE_9__["default"],
                    { title: message },
                    icon,
                    preview
                ) : react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    'span',
                    null,
                    icon,
                    preview
                );
                return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    'div',
                    { className: infoUploadingClass, key: file.uid },
                    react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                        'div',
                        { className: prefixCls + '-list-item-info' },
                        iconAndPreview
                    ),
                    actions,
                    react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                        rc_animate__WEBPACK_IMPORTED_MODULE_7__["default"],
                        { transitionName: 'fade', component: '' },
                        progress
                    )
                );
            });
            var listClassNames = classnames__WEBPACK_IMPORTED_MODULE_11___default()((_classNames2 = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames2, prefixCls + '-list', true), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames2, prefixCls + '-list-' + listType, true), _classNames2));
            var animationDirection = listType === 'picture-card' ? 'animate-inline' : 'animate';
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                rc_animate__WEBPACK_IMPORTED_MODULE_7__["default"],
                { transitionName: prefixCls + '-' + animationDirection, component: 'div', className: listClassNames },
                list
            );
        }
    }]);

    return UploadList;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (UploadList);

UploadList.defaultProps = {
    listType: 'text',
    progressAttr: {
        strokeWidth: 2,
        showInfo: false
    },
    prefixCls: 'ant-upload',
    showRemoveIcon: true,
    showPreviewIcon: true
};

/***/ }),

/***/ "../node_modules/antd/es/upload/index.js":
/*!***********************************************!*\
  !*** ../node_modules/antd/es/upload/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Upload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Upload */ "../node_modules/antd/es/upload/Upload.js");
/* harmony import */ var _Dragger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dragger */ "../node_modules/antd/es/upload/Dragger.js");


_Upload__WEBPACK_IMPORTED_MODULE_0__["default"].Dragger = _Dragger__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (_Upload__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../node_modules/antd/es/upload/style/css.js":
/*!***************************************************!*\
  !*** ../node_modules/antd/es/upload/style/css.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../node_modules/antd/es/upload/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _progress_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../progress/style/css */ "../node_modules/antd/es/progress/style/css.js");
/* harmony import */ var _tooltip_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tooltip/style/css */ "../node_modules/antd/es/tooltip/style/css.js");


// style dependencies



/***/ }),

/***/ "../node_modules/antd/es/upload/style/index.css":
/*!******************************************************!*\
  !*** ../node_modules/antd/es/upload/style/index.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/upload/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/upload/style/index.css", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
		var newContent = __webpack_require__(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/upload/style/index.css");

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

/***/ "../node_modules/antd/es/upload/utils.js":
/*!***********************************************!*\
  !*** ../node_modules/antd/es/upload/utils.js ***!
  \***********************************************/
/*! exports provided: T, fileToObject, genPercentAdd, getFileItem, removeFileItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileToObject", function() { return fileToObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genPercentAdd", function() { return genPercentAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFileItem", function() { return getFileItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFileItem", function() { return removeFileItem; });
function T() {
    return true;
}
// Fix IE file.status problem
// via coping a new Object
function fileToObject(file) {
    return {
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate,
        name: file.filename || file.name,
        size: file.size,
        type: file.type,
        uid: file.uid,
        response: file.response,
        error: file.error,
        percent: 0,
        originFileObj: file
    };
}
/**
 * 生成Progress percent: 0.1 -> 0.98
 *   - for ie
 */
function genPercentAdd() {
    var k = 0.1;
    var i = 0.01;
    var end = 0.98;
    return function (s) {
        var start = s;
        if (start >= end) {
            return start;
        }
        start += k;
        k = k - i;
        if (k < 0.001) {
            k = 0.001;
        }
        return start * 100;
    };
}
function getFileItem(file, fileList) {
    var matchKey = file.uid !== undefined ? 'uid' : 'name';
    return fileList.filter(function (item) {
        return item[matchKey] === file[matchKey];
    })[0];
}
function removeFileItem(file, fileList) {
    var matchKey = file.uid !== undefined ? 'uid' : 'name';
    var removed = fileList.filter(function (item) {
        return item[matchKey] !== file[matchKey];
    });
    if (removed.length === fileList.length) {
        return null;
    }
    return removed;
}

/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/antd/es/progress/style/index.css":
/*!***********************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/antd/es/progress/style/index.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n.ant-progress {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: inline-block;\n}\n.ant-progress-line {\n  width: 100%;\n  font-size: 14px;\n  position: relative;\n}\n.ant-progress-small.ant-progress-line,\n.ant-progress-small.ant-progress-line .ant-progress-text .anticon {\n  font-size: 12px;\n}\n.ant-progress-outer {\n  display: inline-block;\n  width: 100%;\n  margin-right: 0;\n  padding-right: 0;\n}\n.ant-progress-show-info .ant-progress-outer {\n  padding-right: calc(2em + 8px);\n  margin-right: calc(-2em - 8px);\n}\n.ant-progress-inner {\n  display: inline-block;\n  width: 100%;\n  background-color: #f5f5f5;\n  border-radius: 100px;\n  vertical-align: middle;\n  position: relative;\n}\n.ant-progress-circle-trail {\n  stroke: #f5f5f5;\n}\n.ant-progress-circle-path {\n  stroke: #1890ff;\n  -webkit-animation: ant-progress-appear 0.3s;\n          animation: ant-progress-appear 0.3s;\n}\n.ant-progress-success-bg,\n.ant-progress-bg {\n  border-radius: 100px;\n  background-color: #1890ff;\n  -webkit-transition: all 0.4s cubic-bezier(0.08, 0.82, 0.17, 1) 0s;\n  transition: all 0.4s cubic-bezier(0.08, 0.82, 0.17, 1) 0s;\n  position: relative;\n}\n.ant-progress-success-bg {\n  background-color: #52c41a;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.ant-progress-text {\n  word-break: normal;\n  width: 2em;\n  text-align: left;\n  font-size: 1em;\n  margin-left: 8px;\n  vertical-align: middle;\n  display: inline-block;\n  color: rgba(0, 0, 0, 0.45);\n  line-height: 1;\n}\n.ant-progress-text .anticon {\n  font-size: 14px;\n}\n.ant-progress-status-active .ant-progress-bg:before {\n  content: \"\";\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #fff;\n  border-radius: 10px;\n  -webkit-animation: ant-progress-active 2.4s cubic-bezier(0.23, 1, 0.32, 1) infinite;\n          animation: ant-progress-active 2.4s cubic-bezier(0.23, 1, 0.32, 1) infinite;\n}\n.ant-progress-status-exception .ant-progress-bg {\n  background-color: #f5222d;\n}\n.ant-progress-status-exception .ant-progress-text {\n  color: #f5222d;\n}\n.ant-progress-status-exception .ant-progress-circle-path {\n  stroke: #f5222d;\n}\n.ant-progress-status-success .ant-progress-bg {\n  background-color: #52c41a;\n}\n.ant-progress-status-success .ant-progress-text {\n  color: #52c41a;\n}\n.ant-progress-status-success .ant-progress-circle-path {\n  stroke: #52c41a;\n}\n.ant-progress-circle .ant-progress-inner {\n  position: relative;\n  line-height: 1;\n  background-color: transparent;\n}\n.ant-progress-circle .ant-progress-text {\n  display: block;\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  line-height: 1;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n          transform: translateY(-50%);\n  left: 0;\n  margin: 0;\n  color: rgba(0, 0, 0, 0.65);\n}\n.ant-progress-circle .ant-progress-text .anticon {\n  font-size: 1.16666667em;\n}\n.ant-progress-circle.ant-progress-status-exception .ant-progress-text {\n  color: #f5222d;\n}\n.ant-progress-circle.ant-progress-status-success .ant-progress-text {\n  color: #52c41a;\n}\n@-webkit-keyframes ant-progress-active {\n  0% {\n    opacity: 0.1;\n    width: 0;\n  }\n  20% {\n    opacity: 0.5;\n    width: 0;\n  }\n  100% {\n    opacity: 0;\n    width: 100%;\n  }\n}\n@keyframes ant-progress-active {\n  0% {\n    opacity: 0.1;\n    width: 0;\n  }\n  20% {\n    opacity: 0.5;\n    width: 0;\n  }\n  100% {\n    opacity: 0;\n    width: 100%;\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/antd/es/upload/style/index.css":
/*!*********************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/antd/es/upload/style/index.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n.ant-upload {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  outline: 0;\n}\n.ant-upload p {\n  margin: 0;\n}\n.ant-upload-btn {\n  display: block;\n  width: 100%;\n  outline: none;\n}\n.ant-upload input[type=\"file\"] {\n  cursor: pointer;\n}\n.ant-upload.ant-upload-select {\n  display: inline-block;\n}\n.ant-upload.ant-upload-select-picture-card {\n  border: 1px dashed #d9d9d9;\n  width: 104px;\n  height: 104px;\n  border-radius: 4px;\n  background-color: #fafafa;\n  text-align: center;\n  cursor: pointer;\n  -webkit-transition: border-color 0.3s ease;\n  transition: border-color 0.3s ease;\n  vertical-align: top;\n  margin-right: 8px;\n  margin-bottom: 8px;\n  display: table;\n}\n.ant-upload.ant-upload-select-picture-card > .ant-upload {\n  width: 100%;\n  height: 100%;\n  display: table-cell;\n  text-align: center;\n  vertical-align: middle;\n  padding: 8px;\n}\n.ant-upload.ant-upload-select-picture-card:hover {\n  border-color: #1890ff;\n}\n.ant-upload.ant-upload-drag {\n  border: 1px dashed #d9d9d9;\n  -webkit-transition: border-color 0.3s;\n  transition: border-color 0.3s;\n  cursor: pointer;\n  border-radius: 4px;\n  text-align: center;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  padding: 16px 0;\n  background: #fafafa;\n}\n.ant-upload.ant-upload-drag.ant-upload-drag-hover:not(.ant-upload-disabled) {\n  border: 2px dashed #40a9ff;\n}\n.ant-upload.ant-upload-drag.ant-upload-disabled {\n  cursor: not-allowed;\n}\n.ant-upload.ant-upload-drag .ant-upload-btn {\n  display: table;\n  height: 100%;\n}\n.ant-upload.ant-upload-drag .ant-upload-drag-container {\n  display: table-cell;\n  vertical-align: middle;\n}\n.ant-upload.ant-upload-drag:not(.ant-upload-disabled):hover {\n  border-color: #40a9ff;\n}\n.ant-upload.ant-upload-drag p.ant-upload-drag-icon {\n  margin-bottom: 20px;\n}\n.ant-upload.ant-upload-drag p.ant-upload-drag-icon .anticon {\n  font-size: 48px;\n  color: #40a9ff;\n}\n.ant-upload.ant-upload-drag p.ant-upload-text {\n  font-size: 16px;\n  margin: 0 0 4px;\n  color: rgba(0, 0, 0, 0.85);\n}\n.ant-upload.ant-upload-drag p.ant-upload-hint {\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-upload.ant-upload-drag .anticon-plus {\n  font-size: 30px;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n  color: rgba(0, 0, 0, 0.25);\n}\n.ant-upload.ant-upload-drag .anticon-plus:hover {\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-upload.ant-upload-drag:hover .anticon-plus {\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-upload-list {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  zoom: 1;\n}\n.ant-upload-list:before,\n.ant-upload-list:after {\n  content: \" \";\n  display: table;\n}\n.ant-upload-list:after {\n  clear: both;\n  visibility: hidden;\n  font-size: 0;\n  height: 0;\n}\n.ant-upload-list-item {\n  margin-top: 8px;\n  font-size: 14px;\n  position: relative;\n  height: 22px;\n}\n.ant-upload-list-item-name {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-left: 22px;\n  width: 100%;\n  display: inline-block;\n}\n.ant-upload-list-item-info {\n  height: 100%;\n  padding: 0 12px 0 4px;\n  -webkit-transition: background-color 0.3s;\n  transition: background-color 0.3s;\n}\n.ant-upload-list-item-info > span {\n  display: block;\n}\n.ant-upload-list-item-info .anticon-loading,\n.ant-upload-list-item-info .anticon-paper-clip {\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.45);\n  position: absolute;\n  top: 5px;\n}\n.ant-upload-list-item .anticon-cross {\n  display: inline-block;\n  font-size: 12px;\n  font-size: 10px \\9;\n  -webkit-transform: scale(0.83333333) rotate(0deg);\n      -ms-transform: scale(0.83333333) rotate(0deg);\n          transform: scale(0.83333333) rotate(0deg);\n  -webkit-transition: all .3s;\n  transition: all .3s;\n  opacity: 0;\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  right: 4px;\n  color: rgba(0, 0, 0, 0.45);\n  line-height: 22px;\n}\n:root .ant-upload-list-item .anticon-cross {\n  font-size: 12px;\n}\n.ant-upload-list-item .anticon-cross:hover {\n  color: rgba(0, 0, 0, 0.65);\n}\n.ant-upload-list-item:hover .ant-upload-list-item-info {\n  background-color: #e6f7ff;\n}\n.ant-upload-list-item:hover .anticon-cross {\n  opacity: 1;\n}\n.ant-upload-list-item-error,\n.ant-upload-list-item-error .anticon-paper-clip,\n.ant-upload-list-item-error .ant-upload-list-item-name {\n  color: #f5222d;\n}\n.ant-upload-list-item-error .anticon-cross {\n  opacity: 1;\n  color: #f5222d !important;\n}\n.ant-upload-list-item-progress {\n  line-height: 0;\n  font-size: 14px;\n  position: absolute;\n  width: 100%;\n  bottom: -12px;\n  padding-left: 26px;\n}\n.ant-upload-list-picture .ant-upload-list-item,\n.ant-upload-list-picture-card .ant-upload-list-item {\n  padding: 8px;\n  border-radius: 4px;\n  border: 1px solid #d9d9d9;\n  height: 66px;\n  position: relative;\n}\n.ant-upload-list-picture .ant-upload-list-item:hover,\n.ant-upload-list-picture-card .ant-upload-list-item:hover {\n  background: transparent;\n}\n.ant-upload-list-picture .ant-upload-list-item-error,\n.ant-upload-list-picture-card .ant-upload-list-item-error {\n  border-color: #f5222d;\n}\n.ant-upload-list-picture .ant-upload-list-item-info,\n.ant-upload-list-picture-card .ant-upload-list-item-info {\n  padding: 0;\n}\n.ant-upload-list-picture .ant-upload-list-item:hover .ant-upload-list-item-info,\n.ant-upload-list-picture-card .ant-upload-list-item:hover .ant-upload-list-item-info {\n  background: transparent;\n}\n.ant-upload-list-picture .ant-upload-list-item-uploading,\n.ant-upload-list-picture-card .ant-upload-list-item-uploading {\n  border-style: dashed;\n}\n.ant-upload-list-picture .ant-upload-list-item-thumbnail,\n.ant-upload-list-picture-card .ant-upload-list-item-thumbnail {\n  width: 48px;\n  height: 48px;\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  text-align: center;\n}\n.ant-upload-list-picture .ant-upload-list-item-icon,\n.ant-upload-list-picture-card .ant-upload-list-item-icon {\n  color: rgba(0, 0, 0, 0.25);\n  font-size: 36px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -18px;\n  margin-left: -18px;\n}\n.ant-upload-list-picture .ant-upload-list-item-thumbnail img,\n.ant-upload-list-picture-card .ant-upload-list-item-thumbnail img {\n  width: 48px;\n  height: 48px;\n  display: block;\n  overflow: hidden;\n}\n.ant-upload-list-picture .ant-upload-list-item-thumbnail.anticon:before,\n.ant-upload-list-picture-card .ant-upload-list-item-thumbnail.anticon:before {\n  line-height: 48px;\n  font-size: 24px;\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-upload-list-picture .ant-upload-list-item-name,\n.ant-upload-list-picture-card .ant-upload-list-item-name {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin: 0 0 0 8px;\n  line-height: 44px;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n  padding-left: 48px;\n  padding-right: 8px;\n  max-width: 100%;\n  display: inline-block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.ant-upload-list-picture .ant-upload-list-item-uploading .ant-upload-list-item-name,\n.ant-upload-list-picture-card .ant-upload-list-item-uploading .ant-upload-list-item-name {\n  line-height: 28px;\n}\n.ant-upload-list-picture .ant-upload-list-item-progress,\n.ant-upload-list-picture-card .ant-upload-list-item-progress {\n  padding-left: 56px;\n  margin-top: 0;\n  bottom: 14px;\n  width: calc(100% - 24px);\n}\n.ant-upload-list-picture .anticon-cross,\n.ant-upload-list-picture-card .anticon-cross {\n  position: absolute;\n  right: 8px;\n  top: 8px;\n  line-height: 1;\n}\n.ant-upload-list-picture-card {\n  display: inline;\n}\n.ant-upload-list-picture-card.ant-upload-list:after {\n  display: none;\n}\n.ant-upload-list-picture-card .ant-upload-list-item {\n  float: left;\n  width: 104px;\n  height: 104px;\n  margin: 0 8px 8px 0;\n}\n.ant-upload-list-picture-card .ant-upload-list-item-info {\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n}\n.ant-upload-list-picture-card .ant-upload-list-item-info:before {\n  content: ' ';\n  position: absolute;\n  z-index: 1;\n  background-color: rgba(0, 0, 0, 0.5);\n  -webkit-transition: all .3s;\n  transition: all .3s;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n}\n.ant-upload-list-picture-card .ant-upload-list-item:hover .ant-upload-list-item-info:before {\n  opacity: 1;\n}\n.ant-upload-list-picture-card .ant-upload-list-item-actions {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  z-index: 10;\n  white-space: nowrap;\n  opacity: 0;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n.ant-upload-list-picture-card .ant-upload-list-item-actions .anticon-eye-o,\n.ant-upload-list-picture-card .ant-upload-list-item-actions .anticon-delete {\n  z-index: 10;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n  cursor: pointer;\n  font-size: 16px;\n  width: 16px;\n  color: rgba(255, 255, 255, 0.85);\n  margin: 0 4px;\n}\n.ant-upload-list-picture-card .ant-upload-list-item-actions .anticon-eye-o:hover,\n.ant-upload-list-picture-card .ant-upload-list-item-actions .anticon-delete:hover {\n  color: #fff;\n}\n.ant-upload-list-picture-card .ant-upload-list-item-info:hover + .ant-upload-list-item-actions,\n.ant-upload-list-picture-card .ant-upload-list-item-actions:hover {\n  opacity: 1;\n}\n.ant-upload-list-picture-card .ant-upload-list-item-thumbnail,\n.ant-upload-list-picture-card .ant-upload-list-item-thumbnail img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: static;\n}\n.ant-upload-list-picture-card .ant-upload-list-item-name {\n  margin: 8px 0 0;\n  padding: 0;\n  text-align: center;\n  line-height: 1.5;\n  display: none;\n}\n.ant-upload-list-picture-card .anticon-picture + .ant-upload-list-item-name {\n  display: block;\n}\n.ant-upload-list-picture-card .ant-upload-list-item-uploading.ant-upload-list-item {\n  background-color: #fafafa;\n}\n.ant-upload-list-picture-card .ant-upload-list-item-uploading .ant-upload-list-item-info {\n  height: auto;\n}\n.ant-upload-list-picture-card .ant-upload-list-item-uploading .ant-upload-list-item-info:before,\n.ant-upload-list-picture-card .ant-upload-list-item-uploading .ant-upload-list-item-info .anticon-eye-o,\n.ant-upload-list-picture-card .ant-upload-list-item-uploading .ant-upload-list-item-info .anticon-delete {\n  display: none;\n}\n.ant-upload-list-picture-card .ant-upload-list-item-uploading-text {\n  margin-top: 18px;\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-upload-list-picture-card .ant-upload-list-item-progress {\n  padding-left: 0;\n  bottom: 32px;\n}\n.ant-upload-list .ant-upload-success-icon {\n  color: #52c41a;\n  font-weight: bold;\n}\n.ant-upload-list .ant-upload-animate-enter,\n.ant-upload-list .ant-upload-animate-leave,\n.ant-upload-list .ant-upload-animate-inline-enter,\n.ant-upload-list .ant-upload-animate-inline-leave {\n  -webkit-animation-duration: .3s;\n          animation-duration: .3s;\n  -webkit-animation-fill-mode: cubic-bezier(0.78, 0.14, 0.15, 0.86);\n          animation-fill-mode: cubic-bezier(0.78, 0.14, 0.15, 0.86);\n}\n.ant-upload-list .ant-upload-animate-enter {\n  -webkit-animation-name: uploadAnimateIn;\n          animation-name: uploadAnimateIn;\n}\n.ant-upload-list .ant-upload-animate-leave {\n  -webkit-animation-name: uploadAnimateOut;\n          animation-name: uploadAnimateOut;\n}\n.ant-upload-list .ant-upload-animate-inline-enter {\n  -webkit-animation-name: uploadAnimateInlineIn;\n          animation-name: uploadAnimateInlineIn;\n}\n.ant-upload-list .ant-upload-animate-inline-leave {\n  -webkit-animation-name: uploadAnimateInlineOut;\n          animation-name: uploadAnimateInlineOut;\n}\n@-webkit-keyframes uploadAnimateIn {\n  from {\n    height: 0;\n    margin: 0;\n    opacity: 0;\n    padding: 0;\n  }\n}\n@keyframes uploadAnimateIn {\n  from {\n    height: 0;\n    margin: 0;\n    opacity: 0;\n    padding: 0;\n  }\n}\n@-webkit-keyframes uploadAnimateOut {\n  to {\n    height: 0;\n    margin: 0;\n    padding: 0;\n    opacity: 0;\n  }\n}\n@keyframes uploadAnimateOut {\n  to {\n    height: 0;\n    margin: 0;\n    padding: 0;\n    opacity: 0;\n  }\n}\n@-webkit-keyframes uploadAnimateInlineIn {\n  from {\n    width: 0;\n    height: 0;\n    margin: 0;\n    opacity: 0;\n    padding: 0;\n  }\n}\n@keyframes uploadAnimateInlineIn {\n  from {\n    width: 0;\n    height: 0;\n    margin: 0;\n    opacity: 0;\n    padding: 0;\n  }\n}\n@-webkit-keyframes uploadAnimateInlineOut {\n  to {\n    width: 0;\n    height: 0;\n    margin: 0;\n    padding: 0;\n    opacity: 0;\n  }\n}\n@keyframes uploadAnimateInlineOut {\n  to {\n    width: 0;\n    height: 0;\n    margin: 0;\n    padding: 0;\n    opacity: 0;\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js??ref--5-1!./pages/batch_process/batch_process.css":
/*!************************************************************************************!*\
  !*** ../node_modules/css-loader??ref--5-1!./pages/batch_process/batch_process.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".batch_process_select {\r\n    width: 130px!important;\r\n}\r\n.batch_process_fr{\r\n    float: right;\r\n}\r\n.batch_process_action_bar{\r\n    padding: 15px 0;\r\n}\r\n.batch_process_action_bar button{\r\n    margin-right: 15px;\r\n}\r\n.batch_process_operate{\r\n    margin-right: 10px;\r\n}", "", {"version":3,"sources":["E:/前端/jmyd-ams/pc/src/pages/batch_process/batch_process.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;CAC1B;AACD;IACI,aAAa;CAChB;AACD;IACI,gBAAgB;CACnB;AACD;IACI,mBAAmB;CACtB;AACD;IACI,mBAAmB;CACtB","file":"batch_process.css","sourcesContent":[".select {\r\n    width: 130px!important;\r\n}\r\n.fr{\r\n    float: right;\r\n}\r\n.action_bar{\r\n    padding: 15px 0;\r\n}\r\n.action_bar button{\r\n    margin-right: 15px;\r\n}\r\n.operate{\r\n    margin-right: 10px;\r\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"select": "batch_process_select",
	"fr": "batch_process_fr",
	"action_bar": "batch_process_action_bar",
	"operate": "batch_process_operate"
};

/***/ }),

/***/ "../node_modules/lodash/_DataView.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_DataView.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "../node_modules/lodash/_Promise.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/_Promise.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "../node_modules/lodash/_Set.js":
/*!**************************************!*\
  !*** ../node_modules/lodash/_Set.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "../node_modules/lodash/_SetCache.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_SetCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "../node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "../node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "../node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "../node_modules/lodash/_WeakMap.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/_WeakMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "../node_modules/lodash/_arrayFilter.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_arrayFilter.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "../node_modules/lodash/_arrayIncludes.js":
/*!************************************************!*\
  !*** ../node_modules/lodash/_arrayIncludes.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ "../node_modules/lodash/_baseIndexOf.js");

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ "../node_modules/lodash/_arrayIncludesWith.js":
/*!****************************************************!*\
  !*** ../node_modules/lodash/_arrayIncludesWith.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),

/***/ "../node_modules/lodash/_arrayPush.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_arrayPush.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "../node_modules/lodash/_arraySome.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_arraySome.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ "../node_modules/lodash/_baseFindIndex.js":
/*!************************************************!*\
  !*** ../node_modules/lodash/_baseFindIndex.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ "../node_modules/lodash/_baseGetAllKeys.js":
/*!*************************************************!*\
  !*** ../node_modules/lodash/_baseGetAllKeys.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "../node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "../node_modules/lodash/_baseHasIn.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_baseHasIn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ "../node_modules/lodash/_baseIndexOf.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_baseIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ "../node_modules/lodash/_baseFindIndex.js"),
    baseIsNaN = __webpack_require__(/*! ./_baseIsNaN */ "../node_modules/lodash/_baseIsNaN.js"),
    strictIndexOf = __webpack_require__(/*! ./_strictIndexOf */ "../node_modules/lodash/_strictIndexOf.js");

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ "../node_modules/lodash/_baseIsEqual.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_baseIsEqual.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "../node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../node_modules/lodash/isObjectLike.js");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ "../node_modules/lodash/_baseIsEqualDeep.js":
/*!**************************************************!*\
  !*** ../node_modules/lodash/_baseIsEqualDeep.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "../node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "../node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ "../node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ "../node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "../node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "../node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "../node_modules/lodash/isTypedArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ "../node_modules/lodash/_baseIsMatch.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_baseIsMatch.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "../node_modules/lodash/_Stack.js"),
    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "../node_modules/lodash/_baseIsEqual.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ "../node_modules/lodash/_baseIsNaN.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_baseIsNaN.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ "../node_modules/lodash/_baseIteratee.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/_baseIteratee.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(/*! ./_baseMatches */ "../node_modules/lodash/_baseMatches.js"),
    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ "../node_modules/lodash/_baseMatchesProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "../node_modules/lodash/identity.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../node_modules/lodash/isArray.js"),
    property = __webpack_require__(/*! ./property */ "../node_modules/lodash/property.js");

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ "../node_modules/lodash/_baseKeys.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_baseKeys.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "../node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "../node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "../node_modules/lodash/_baseMatches.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_baseMatches.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ "../node_modules/lodash/_baseIsMatch.js"),
    getMatchData = __webpack_require__(/*! ./_getMatchData */ "../node_modules/lodash/_getMatchData.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "../node_modules/lodash/_matchesStrictComparable.js");

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ "../node_modules/lodash/_baseMatchesProperty.js":
/*!******************************************************!*\
  !*** ../node_modules/lodash/_baseMatchesProperty.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "../node_modules/lodash/_baseIsEqual.js"),
    get = __webpack_require__(/*! ./get */ "../node_modules/lodash/get.js"),
    hasIn = __webpack_require__(/*! ./hasIn */ "../node_modules/lodash/hasIn.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "../node_modules/lodash/_isKey.js"),
    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "../node_modules/lodash/_isStrictComparable.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "../node_modules/lodash/_matchesStrictComparable.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "../node_modules/lodash/_toKey.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ "../node_modules/lodash/_baseProperty.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/_baseProperty.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ "../node_modules/lodash/_basePropertyDeep.js":
/*!***************************************************!*\
  !*** ../node_modules/lodash/_basePropertyDeep.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "../node_modules/lodash/_baseGet.js");

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ "../node_modules/lodash/_baseUniq.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_baseUniq.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "../node_modules/lodash/_SetCache.js"),
    arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ "../node_modules/lodash/_arrayIncludes.js"),
    arrayIncludesWith = __webpack_require__(/*! ./_arrayIncludesWith */ "../node_modules/lodash/_arrayIncludesWith.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "../node_modules/lodash/_cacheHas.js"),
    createSet = __webpack_require__(/*! ./_createSet */ "../node_modules/lodash/_createSet.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "../node_modules/lodash/_setToArray.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),

/***/ "../node_modules/lodash/_cacheHas.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/_cacheHas.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "../node_modules/lodash/_createSet.js":
/*!********************************************!*\
  !*** ../node_modules/lodash/_createSet.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(/*! ./_Set */ "../node_modules/lodash/_Set.js"),
    noop = __webpack_require__(/*! ./noop */ "../node_modules/lodash/noop.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "../node_modules/lodash/_setToArray.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),

/***/ "../node_modules/lodash/_equalArrays.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_equalArrays.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "../node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__(/*! ./_arraySome */ "../node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "../node_modules/lodash/_cacheHas.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ "../node_modules/lodash/_equalByTag.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_equalByTag.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "../node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__(/*! ./eq */ "../node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "../node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "../node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "../node_modules/lodash/_setToArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ "../node_modules/lodash/_equalObjects.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/_equalObjects.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "../node_modules/lodash/_getAllKeys.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ "../node_modules/lodash/_getAllKeys.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_getAllKeys.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "../node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "../node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "../node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "../node_modules/lodash/_getMatchData.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash/_getMatchData.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "../node_modules/lodash/_isStrictComparable.js"),
    keys = __webpack_require__(/*! ./keys */ "../node_modules/lodash/keys.js");

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ "../node_modules/lodash/_getSymbols.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_getSymbols.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "../node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "../node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "../node_modules/lodash/_getTag.js":
/*!*****************************************!*\
  !*** ../node_modules/lodash/_getTag.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(/*! ./_DataView */ "../node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "../node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "../node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "../node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "../node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "../node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "../node_modules/lodash/_isStrictComparable.js":
/*!*****************************************************!*\
  !*** ../node_modules/lodash/_isStrictComparable.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "../node_modules/lodash/isObject.js");

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ "../node_modules/lodash/_mapToArray.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_mapToArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "../node_modules/lodash/_matchesStrictComparable.js":
/*!**********************************************************!*\
  !*** ../node_modules/lodash/_matchesStrictComparable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ "../node_modules/lodash/_nativeKeys.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_nativeKeys.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "../node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "../node_modules/lodash/_setCacheAdd.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_setCacheAdd.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "../node_modules/lodash/_setCacheHas.js":
/*!**********************************************!*\
  !*** ../node_modules/lodash/_setCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "../node_modules/lodash/_setToArray.js":
/*!*********************************************!*\
  !*** ../node_modules/lodash/_setToArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "../node_modules/lodash/_strictIndexOf.js":
/*!************************************************!*\
  !*** ../node_modules/lodash/_strictIndexOf.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ "../node_modules/lodash/hasIn.js":
/*!***************************************!*\
  !*** ../node_modules/lodash/hasIn.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ "../node_modules/lodash/_baseHasIn.js"),
    hasPath = __webpack_require__(/*! ./_hasPath */ "../node_modules/lodash/_hasPath.js");

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ "../node_modules/lodash/keys.js":
/*!**************************************!*\
  !*** ../node_modules/lodash/keys.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "../node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "../node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "../node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
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
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "../node_modules/lodash/noop.js":
/*!**************************************!*\
  !*** ../node_modules/lodash/noop.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ "../node_modules/lodash/property.js":
/*!******************************************!*\
  !*** ../node_modules/lodash/property.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ "../node_modules/lodash/_baseProperty.js"),
    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ "../node_modules/lodash/_basePropertyDeep.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "../node_modules/lodash/_isKey.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "../node_modules/lodash/_toKey.js");

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ "../node_modules/lodash/stubArray.js":
/*!*******************************************!*\
  !*** ../node_modules/lodash/stubArray.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "../node_modules/lodash/uniqBy.js":
/*!****************************************!*\
  !*** ../node_modules/lodash/uniqBy.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "../node_modules/lodash/_baseIteratee.js"),
    baseUniq = __webpack_require__(/*! ./_baseUniq */ "../node_modules/lodash/_baseUniq.js");

/**
 * This method is like `_.uniq` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * uniqueness is computed. The order of result values is determined by the
 * order they occur in the array. The iteratee is invoked with one argument:
 * (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
 * // => [2.1, 1.2]
 *
 * // The `_.property` iteratee shorthand.
 * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }, { 'x': 2 }]
 */
function uniqBy(array, iteratee) {
  return (array && array.length) ? baseUniq(array, baseIteratee(iteratee, 2)) : [];
}

module.exports = uniqBy;


/***/ }),

/***/ "../node_modules/mobx-react/index.module.js":
/*!**************************************************!*\
  !*** ../node_modules/mobx-react/index.module.js ***!
  \**************************************************/
/*! exports provided: propTypes, PropTypes, onError, observer, Observer, renderReporter, componentByNodeRegistery, trackComponents, useStaticRendering, Provider, inject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propTypes", function() { return propTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropTypes", function() { return propTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onError", function() { return onError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observer", function() { return observer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return Observer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderReporter", function() { return renderReporter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentByNodeRegistery", function() { return componentByNodeRegistery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackComponents", function() { return trackComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStaticRendering", function() { return useStaticRendering; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return inject; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "../node_modules/mobx/lib/mobx.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);




// These functions can be stubbed out in specific environments
var unstable_batchedUpdates$1 = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var EventEmitter = function () {
    function EventEmitter() {
        classCallCheck(this, EventEmitter);
        this.listeners = [];
    }

    createClass(EventEmitter, [{
        key: "on",
        value: function on(cb) {
            var _this = this;

            this.listeners.push(cb);
            return function () {
                var index = _this.listeners.indexOf(cb);
                if (index !== -1) _this.listeners.splice(index, 1);
            };
        }
    }, {
        key: "emit",
        value: function emit(data) {
            this.listeners.forEach(function (fn) {
                return fn(data);
            });
        }
    }]);
    return EventEmitter;
}();

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
'use strict';

var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};

var defineProperty$1 = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

var hoistNonReactStatics = function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty$1(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
};

// Copied from React.PropTypes
function createChainableTypeChecker(validate) {
    function checkType(isRequired, props, propName, componentName, location, propFullName) {
        for (var _len = arguments.length, rest = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
            rest[_key - 6] = arguments[_key];
        }

        return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["untracked"])(function () {
            componentName = componentName || "<<anonymous>>";
            propFullName = propFullName || propName;
            if (props[propName] == null) {
                if (isRequired) {
                    var actual = props[propName] === null ? "null" : "undefined";
                    return new Error("The " + location + " `" + propFullName + "` is marked as required " + "in `" + componentName + "`, but its value is `" + actual + "`.");
                }
                return null;
            } else {
                return validate.apply(undefined, [props, propName, componentName, location, propFullName].concat(rest));
            }
        });
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
}

// Copied from React.PropTypes
function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === "symbol") {
        return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue["@@toStringTag"] === "Symbol") {
        return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === "function" && propValue instanceof Symbol) {
        return true;
    }

    return false;
}

// Copied from React.PropTypes
function getPropType(propValue) {
    var propType = typeof propValue === "undefined" ? "undefined" : _typeof(propValue);
    if (Array.isArray(propValue)) {
        return "array";
    }
    if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return "object";
    }
    if (isSymbol(propType, propValue)) {
        return "symbol";
    }
    return propType;
}

// This handles more types than `getPropType`. Only used for error messages.
// Copied from React.PropTypes
function getPreciseType(propValue) {
    var propType = getPropType(propValue);
    if (propType === "object") {
        if (propValue instanceof Date) {
            return "date";
        } else if (propValue instanceof RegExp) {
            return "regexp";
        }
    }
    return propType;
}

function createObservableTypeCheckerCreator(allowNativeType, mobxType) {
    return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
        return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["untracked"])(function () {
            if (allowNativeType) {
                if (getPropType(props[propName]) === mobxType.toLowerCase()) return null;
            }
            var mobxChecker = void 0;
            switch (mobxType) {
                case "Array":
                    mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_0__["isObservableArray"];
                    break;
                case "Object":
                    mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_0__["isObservableObject"];
                    break;
                case "Map":
                    mobxChecker = mobx__WEBPACK_IMPORTED_MODULE_0__["isObservableMap"];
                    break;
                default:
                    throw new Error("Unexpected mobxType: " + mobxType);
            }
            var propValue = props[propName];
            if (!mobxChecker(propValue)) {
                var preciseType = getPreciseType(propValue);
                var nativeTypeExpectationMessage = allowNativeType ? " or javascript `" + mobxType.toLowerCase() + "`" : "";
                return new Error("Invalid prop `" + propFullName + "` of type `" + preciseType + "` supplied to" + " `" + componentName + "`, expected `mobx.Observable" + mobxType + "`" + nativeTypeExpectationMessage + ".");
            }
            return null;
        });
    });
}

function createObservableArrayOfTypeChecker(allowNativeType, typeChecker) {
    return createChainableTypeChecker(function (props, propName, componentName, location, propFullName) {
        for (var _len2 = arguments.length, rest = Array(_len2 > 5 ? _len2 - 5 : 0), _key2 = 5; _key2 < _len2; _key2++) {
            rest[_key2 - 5] = arguments[_key2];
        }

        return Object(mobx__WEBPACK_IMPORTED_MODULE_0__["untracked"])(function () {
            if (typeof typeChecker !== "function") {
                return new Error("Property `" + propFullName + "` of component `" + componentName + "` has " + "invalid PropType notation.");
            }
            var error = createObservableTypeCheckerCreator(allowNativeType, "Array")(props, propName, componentName);
            if (error instanceof Error) return error;
            var propValue = props[propName];
            for (var i = 0; i < propValue.length; i++) {
                error = typeChecker.apply(undefined, [propValue, i, componentName, location, propFullName + "[" + i + "]"].concat(rest));
                if (error instanceof Error) return error;
            }
            return null;
        });
    });
}

var observableArray = createObservableTypeCheckerCreator(false, "Array");
var observableArrayOf = createObservableArrayOfTypeChecker.bind(null, false);
var observableMap = createObservableTypeCheckerCreator(false, "Map");
var observableObject = createObservableTypeCheckerCreator(false, "Object");
var arrayOrObservableArray = createObservableTypeCheckerCreator(true, "Array");
var arrayOrObservableArrayOf = createObservableArrayOfTypeChecker.bind(null, true);
var objectOrObservableObject = createObservableTypeCheckerCreator(true, "Object");



var propTypes = Object.freeze({
	observableArray: observableArray,
	observableArrayOf: observableArrayOf,
	observableMap: observableMap,
	observableObject: observableObject,
	arrayOrObservableArray: arrayOrObservableArray,
	arrayOrObservableArrayOf: arrayOrObservableArrayOf,
	objectOrObservableObject: objectOrObservableObject
});

function isStateless(component) {
    // `function() {}` has prototype, but `() => {}` doesn't
    // `() => {}` via Babel has prototype too.
    return !(component.prototype && component.prototype.render);
}

var injectorContextTypes = {
    mobxStores: objectOrObservableObject
};
Object.seal(injectorContextTypes);

var proxiedInjectorProps = {
    contextTypes: {
        get: function get$$1() {
            return injectorContextTypes;
        },
        set: function set$$1(_) {
            console.warn("Mobx Injector: you are trying to attach `contextTypes` on an component decorated with `inject` (or `observer`) HOC. Please specify the contextTypes on the wrapped component instead. It is accessible through the `wrappedComponent`");
        },
        configurable: true,
        enumerable: false
    },
    isMobxInjector: {
        value: true,
        writable: true,
        configurable: true,
        enumerable: true
    }

    /**
     * Store Injection
     */
};function createStoreInjector(grabStoresFn, component, injectNames) {
    var _class, _temp2;

    var displayName = "inject-" + (component.displayName || component.name || component.constructor && component.constructor.name || "Unknown");
    if (injectNames) displayName += "-with-" + injectNames;

    var Injector = (_temp2 = _class = function (_Component) {
        inherits(Injector, _Component);

        function Injector() {
            var _ref;

            var _temp, _this, _ret;

            classCallCheck(this, Injector);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Injector.__proto__ || Object.getPrototypeOf(Injector)).call.apply(_ref, [this].concat(args))), _this), _this.storeRef = function (instance) {
                _this.wrappedInstance = instance;
            }, _temp), possibleConstructorReturn(_this, _ret);
        }

        createClass(Injector, [{
            key: "render",
            value: function render() {
                // Optimization: it might be more efficient to apply the mapper function *outside* the render method
                // (if the mapper is a function), that could avoid expensive(?) re-rendering of the injector component
                // See this test: 'using a custom injector is not too reactive' in inject.js
                var newProps = {};
                for (var key in this.props) {
                    if (this.props.hasOwnProperty(key)) {
                        newProps[key] = this.props[key];
                    }
                }var additionalProps = grabStoresFn(this.context.mobxStores || {}, newProps, this.context) || {};
                for (var _key2 in additionalProps) {
                    newProps[_key2] = additionalProps[_key2];
                }

                if (!isStateless(component)) {
                    newProps.ref = this.storeRef;
                }

                return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(component, newProps);
            }
        }]);
        return Injector;
    }(react__WEBPACK_IMPORTED_MODULE_1__["Component"]), _class.displayName = displayName, _temp2);

    // Static fields from component should be visible on the generated Injector

    hoistNonReactStatics(Injector, component);

    Injector.wrappedComponent = component;
    Object.defineProperties(Injector, proxiedInjectorProps);

    return Injector;
}

function grabStoresByName(storeNames) {
    return function (baseStores, nextProps) {
        storeNames.forEach(function (storeName) {
            if (storeName in nextProps // prefer props over stores
            ) return;
            if (!(storeName in baseStores)) throw new Error("MobX injector: Store '" + storeName + "' is not available! Make sure it is provided by some Provider");
            nextProps[storeName] = baseStores[storeName];
        });
        return nextProps;
    };
}

/**
 * higher order component that injects stores to a child.
 * takes either a varargs list of strings, which are stores read from the context,
 * or a function that manually maps the available stores from the context to props:
 * storesToProps(mobxStores, props, context) => newProps
 */
function inject() /* fn(stores, nextProps) or ...storeNames */{
    var grabStoresFn = void 0;
    if (typeof arguments[0] === "function") {
        grabStoresFn = arguments[0];
        return function (componentClass) {
            var injected = createStoreInjector(grabStoresFn, componentClass);
            injected.isMobxInjector = false; // supress warning
            // mark the Injector as observer, to make it react to expressions in `grabStoresFn`,
            // see #111
            injected = observer(injected);
            injected.isMobxInjector = true; // restore warning
            return injected;
        };
    } else {
        var storeNames = [];
        for (var i = 0; i < arguments.length; i++) {
            storeNames[i] = arguments[i];
        }grabStoresFn = grabStoresByName(storeNames);
        return function (componentClass) {
            return createStoreInjector(grabStoresFn, componentClass, storeNames.join("-"));
        };
    }
}

/**
 * dev tool support
 */
var isDevtoolsEnabled = false;

var isUsingStaticRendering = false;

var warnedAboutObserverInjectDeprecation = false;

// WeakMap<Node, Object>;
var componentByNodeRegistery = typeof WeakMap !== "undefined" ? new WeakMap() : undefined;
var renderReporter = new EventEmitter();

function findDOMNode$2(component) {
    if (react_dom__WEBPACK_IMPORTED_MODULE_2__["findDOMNode"]) {
        try {
            return Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["findDOMNode"])(component);
        } catch (e) {
            // findDOMNode will throw in react-test-renderer, see:
            // See https://github.com/mobxjs/mobx-react/issues/216
            // Is there a better heuristic?
            return null;
        }
    }
    return null;
}

function reportRendering(component) {
    var node = findDOMNode$2(component);
    if (node && componentByNodeRegistery) componentByNodeRegistery.set(node, component);

    renderReporter.emit({
        event: "render",
        renderTime: component.__$mobRenderEnd - component.__$mobRenderStart,
        totalTime: Date.now() - component.__$mobRenderStart,
        component: component,
        node: node
    });
}

function trackComponents() {
    if (typeof WeakMap === "undefined") throw new Error("[mobx-react] tracking components is not supported in this browser.");
    if (!isDevtoolsEnabled) isDevtoolsEnabled = true;
}

function useStaticRendering(useStaticRendering) {
    isUsingStaticRendering = useStaticRendering;
}

/**
 * Errors reporter
 */

var errorsReporter = new EventEmitter();

/**
 * Utilities
 */

function patch(target, funcName) {
    var runMixinFirst = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var base = target[funcName];
    var mixinFunc = reactiveMixin[funcName];
    var f = !base ? mixinFunc : runMixinFirst === true ? function () {
        mixinFunc.apply(this, arguments);
        base.apply(this, arguments);
    } : function () {
        base.apply(this, arguments);
        mixinFunc.apply(this, arguments);
    };

    // MWE: ideally we freeze here to protect against accidental overwrites in component instances, see #195
    // ...but that breaks react-hot-loader, see #231...
    target[funcName] = f;
}

function shallowEqual(objA, objB) {
    //From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
    if (is(objA, objB)) return true;
    if ((typeof objA === "undefined" ? "undefined" : _typeof(objA)) !== "object" || objA === null || (typeof objB === "undefined" ? "undefined" : _typeof(objB)) !== "object" || objB === null) {
        return false;
    }
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) return false;
    for (var i = 0; i < keysA.length; i++) {
        if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
            return false;
        }
    }
    return true;
}

function is(x, y) {
    // From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js
    if (x === y) {
        return x !== 0 || 1 / x === 1 / y;
    } else {
        return x !== x && y !== y;
    }
}

/**
 * ReactiveMixin
 */
var reactiveMixin = {
    componentWillMount: function componentWillMount() {
        var _this = this;

        if (isUsingStaticRendering === true) return;
        // Generate friendly name for debugging
        var initialName = this.displayName || this.name || this.constructor && (this.constructor.displayName || this.constructor.name) || "<component>";
        var rootNodeID = this._reactInternalInstance && this._reactInternalInstance._rootNodeID || this._reactInternalFiber && this._reactInternalFiber._debugID;

        /**
         * If props are shallowly modified, react will render anyway,
         * so atom.reportChanged() should not result in yet another re-render
         */
        var skipRender = false;
        /**
         * forceUpdate will re-assign this.props. We don't want that to cause a loop,
         * so detect these changes
         */
        var isForcingUpdate = false;

        function makePropertyObservableReference(propName) {
            var valueHolder = this[propName];
            var atom = Object(mobx__WEBPACK_IMPORTED_MODULE_0__["createAtom"])("reactive " + propName);
            Object.defineProperty(this, propName, {
                configurable: true,
                enumerable: true,
                get: function get$$1() {
                    atom.reportObserved();
                    return valueHolder;
                },
                set: function set$$1(v) {
                    if (!isForcingUpdate && !shallowEqual(valueHolder, v)) {
                        valueHolder = v;
                        skipRender = true;
                        atom.reportChanged();
                        skipRender = false;
                    } else {
                        valueHolder = v;
                    }
                }
            });
        }

        // make this.props an observable reference, see #124
        makePropertyObservableReference.call(this, "props");
        // make state an observable reference
        makePropertyObservableReference.call(this, "state");

        // wire up reactive render
        var baseRender = this.render.bind(this);
        var reaction = null;
        var isRenderingPending = false;

        var initialRender = function initialRender() {
            reaction = new mobx__WEBPACK_IMPORTED_MODULE_0__["Reaction"](initialName + "#" + rootNodeID + ".render()", function () {
                if (!isRenderingPending) {
                    // N.B. Getting here *before mounting* means that a component constructor has side effects (see the relevant test in misc.js)
                    // This unidiomatic React usage but React will correctly warn about this so we continue as usual
                    // See #85 / Pull #44
                    isRenderingPending = true;
                    if (typeof _this.componentWillReact === "function") _this.componentWillReact(); // TODO: wrap in action?
                    if (_this.__$mobxIsUnmounted !== true) {
                        // If we are unmounted at this point, componentWillReact() had a side effect causing the component to unmounted
                        // TODO: remove this check? Then react will properly warn about the fact that this should not happen? See #73
                        // However, people also claim this migth happen during unit tests..
                        var hasError = true;
                        try {
                            isForcingUpdate = true;
                            if (!skipRender) react__WEBPACK_IMPORTED_MODULE_1__["Component"].prototype.forceUpdate.call(_this);
                            hasError = false;
                        } finally {
                            isForcingUpdate = false;
                            if (hasError) reaction.dispose();
                        }
                    }
                }
            });
            reaction.reactComponent = _this;
            reactiveRender.$mobx = reaction;
            _this.render = reactiveRender;
            return reactiveRender();
        };

        var reactiveRender = function reactiveRender() {
            isRenderingPending = false;
            var exception = undefined;
            var rendering = undefined;
            reaction.track(function () {
                if (isDevtoolsEnabled) {
                    _this.__$mobRenderStart = Date.now();
                }
                try {
                    rendering = Object(mobx__WEBPACK_IMPORTED_MODULE_0__["_allowStateChanges"])(false, baseRender);
                } catch (e) {
                    exception = e;
                }
                if (isDevtoolsEnabled) {
                    _this.__$mobRenderEnd = Date.now();
                }
            });
            if (exception) {
                errorsReporter.emit(exception);
                throw exception;
            }
            return rendering;
        };

        this.render = initialRender;
    },

    componentWillUnmount: function componentWillUnmount() {
        if (isUsingStaticRendering === true) return;
        this.render.$mobx && this.render.$mobx.dispose();
        this.__$mobxIsUnmounted = true;
        if (isDevtoolsEnabled) {
            var node = findDOMNode$2(this);
            if (node && componentByNodeRegistery) {
                componentByNodeRegistery.delete(node);
            }
            renderReporter.emit({
                event: "destroy",
                component: this,
                node: node
            });
        }
    },

    componentDidMount: function componentDidMount() {
        if (isDevtoolsEnabled) {
            reportRendering(this);
        }
    },

    componentDidUpdate: function componentDidUpdate() {
        if (isDevtoolsEnabled) {
            reportRendering(this);
        }
    },

    shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
        if (isUsingStaticRendering) {
            console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side.");
        }
        // update on any state changes (as is the default)
        if (this.state !== nextState) {
            return true;
        }
        // update if props are shallowly not equal, inspired by PureRenderMixin
        // we could return just 'false' here, and avoid the `skipRender` checks etc
        // however, it is nicer if lifecycle events are triggered like usually,
        // so we return true here if props are shallowly modified.
        return !shallowEqual(this.props, nextProps);
    }

    /**
     * Observer function / decorator
     */
};function observer(arg1, arg2) {
    if (typeof arg1 === "string") {
        throw new Error("Store names should be provided as array");
    }
    if (Array.isArray(arg1)) {
        // component needs stores
        if (!warnedAboutObserverInjectDeprecation) {
            warnedAboutObserverInjectDeprecation = true;
            console.warn('Mobx observer: Using observer to inject stores is deprecated since 4.0. Use `@inject("store1", "store2") @observer ComponentClass` or `inject("store1", "store2")(observer(componentClass))` instead of `@observer(["store1", "store2"]) ComponentClass`');
        }
        if (!arg2) {
            // invoked as decorator
            return function (componentClass) {
                return observer(arg1, componentClass);
            };
        } else {
            return inject.apply(null, arg1)(observer(arg2));
        }
    }
    var componentClass = arg1;

    if (componentClass.isMobxInjector === true) {
        console.warn("Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'");
    }

    // Stateless function component:
    // If it is function but doesn't seem to be a react class constructor,
    // wrap it to a react class automatically
    if (typeof componentClass === "function" && (!componentClass.prototype || !componentClass.prototype.render) && !componentClass.isReactClass && !react__WEBPACK_IMPORTED_MODULE_1__["Component"].isPrototypeOf(componentClass)) {
        var _class, _temp;

        return observer((_temp = _class = function (_Component) {
            inherits(_class, _Component);

            function _class() {
                classCallCheck(this, _class);
                return possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
            }

            createClass(_class, [{
                key: "render",
                value: function render() {
                    return componentClass.call(this, this.props, this.context);
                }
            }]);
            return _class;
        }(react__WEBPACK_IMPORTED_MODULE_1__["Component"]), _class.displayName = componentClass.displayName || componentClass.name, _class.contextTypes = componentClass.contextTypes, _class.propTypes = componentClass.propTypes, _class.defaultProps = componentClass.defaultProps, _temp));
    }

    if (!componentClass) {
        throw new Error("Please pass a valid component to 'observer'");
    }

    var target = componentClass.prototype || componentClass;
    mixinLifecycleEvents(target);
    componentClass.isMobXReactObserver = true;
    return componentClass;
}

function mixinLifecycleEvents(target) {
    patch(target, "componentWillMount", true);["componentDidMount", "componentWillUnmount", "componentDidUpdate"].forEach(function (funcName) {
        patch(target, funcName);
    });
    if (!target.shouldComponentUpdate) {
        target.shouldComponentUpdate = reactiveMixin.shouldComponentUpdate;
    }
}

// TODO: support injection somehow as well?
var Observer = observer(function (_ref) {
    var children = _ref.children,
        observerInject = _ref.inject,
        render = _ref.render;

    var component = children || render;
    if (typeof component === "undefined") {
        return null;
    }
    if (!observerInject) {
        return component();
    }
    var InjectComponent = inject(observerInject)(component);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InjectComponent, null);
});

Observer.displayName = "Observer";

var ObserverPropsCheck = function ObserverPropsCheck(props, key, componentName, location, propFullName) {
    var extraKey = key === "children" ? "render" : "children";
    if (typeof props[key] === "function" && typeof props[extraKey] === "function") {
        return new Error("Invalid prop,do not use children and render in the same time in`" + componentName);
    }

    if (typeof props[key] === "function" || typeof props[extraKey] === "function") {
        return;
    }
    return new Error("Invalid prop `" + propFullName + "` of type `" + _typeof(props[key]) + "` supplied to" + " `" + componentName + "`, expected `function`.");
};

Observer.propTypes = {
    render: ObserverPropsCheck,
    children: ObserverPropsCheck
};

var _class;
var _temp;

var specialReactKeys = { children: true, key: true, ref: true };

var Provider = (_temp = _class = function (_Component) {
    inherits(Provider, _Component);

    function Provider() {
        classCallCheck(this, Provider);
        return possibleConstructorReturn(this, (Provider.__proto__ || Object.getPrototypeOf(Provider)).apply(this, arguments));
    }

    createClass(Provider, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_1__["Children"].only(this.props.children);
        }
    }, {
        key: "getChildContext",
        value: function getChildContext() {
            var stores = {};
            // inherit stores
            var baseStores = this.context.mobxStores;
            if (baseStores) for (var key in baseStores) {
                stores[key] = baseStores[key];
            }
            // add own stores
            for (var _key in this.props) {
                if (!specialReactKeys[_key] && _key !== "suppressChangedStoreWarning") stores[_key] = this.props[_key];
            }return {
                mobxStores: stores
            };
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            // Maybe this warning is too aggressive?
            if (Object.keys(nextProps).length !== Object.keys(this.props).length) console.warn("MobX Provider: The set of provided stores has changed. Please avoid changing stores as the change might not propagate to all children");
            if (!nextProps.suppressChangedStoreWarning) for (var key in nextProps) {
                if (!specialReactKeys[key] && this.props[key] !== nextProps[key]) console.warn("MobX Provider: Provided store '" + key + "' has changed. Please avoid replacing stores as the change might not propagate to all children");
            }
        }
    }]);
    return Provider;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]), _class.contextTypes = {
    mobxStores: objectOrObservableObject
}, _class.childContextTypes = {
    mobxStores: objectOrObservableObject.isRequired
}, _temp);

if (!react__WEBPACK_IMPORTED_MODULE_1__["Component"]) throw new Error("mobx-react requires React to be available");
if (!mobx__WEBPACK_IMPORTED_MODULE_0__["spy"]) throw new Error("mobx-react requires mobx to be available");

if (typeof react_dom__WEBPACK_IMPORTED_MODULE_2__["unstable_batchedUpdates"] === "function") Object(mobx__WEBPACK_IMPORTED_MODULE_0__["configure"])({ reactionScheduler: react_dom__WEBPACK_IMPORTED_MODULE_2__["unstable_batchedUpdates"] });else if (typeof unstable_batchedUpdates$1 === "function") Object(mobx__WEBPACK_IMPORTED_MODULE_0__["configure"])({ reactionScheduler: unstable_batchedUpdates$1 });

var onError = function onError(fn) {
    return errorsReporter.on(fn);
};

/* DevTool support */
// See: https://github.com/andykog/mobx-devtools/blob/d8976c24b8cb727ed59f9a0bc905a009df79e221/src/backend/installGlobalHook.js

if ((typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "undefined" ? "undefined" : _typeof(__MOBX_DEVTOOLS_GLOBAL_HOOK__)) === "object") {
    var mobx$1 = { spy: mobx__WEBPACK_IMPORTED_MODULE_0__["spy"], extras: { getDebugName: mobx__WEBPACK_IMPORTED_MODULE_0__["getDebugName"] } };
    var mobxReact = { renderReporter: renderReporter, componentByNodeRegistery: componentByNodeRegistery, trackComponents: trackComponents };
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobxReact(mobxReact, mobx$1);
}




/***/ }),

/***/ "../node_modules/rc-progress/es/Circle.js":
/*!************************************************!*\
  !*** ../node_modules/rc-progress/es/Circle.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "../node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _enhancer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enhancer */ "../node_modules/rc-progress/es/enhancer.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./types */ "../node_modules/rc-progress/es/types.js");





/* eslint react/prop-types: 0 */





var Circle = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Circle, _Component);

  function Circle() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Circle);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _Component.apply(this, arguments));
  }

  Circle.prototype.getPathStyles = function getPathStyles() {
    var _props = this.props,
        percent = _props.percent,
        strokeWidth = _props.strokeWidth,
        _props$gapDegree = _props.gapDegree,
        gapDegree = _props$gapDegree === undefined ? 0 : _props$gapDegree,
        gapPosition = _props.gapPosition;

    var radius = 50 - strokeWidth / 2;
    var beginPositionX = 0;
    var beginPositionY = -radius;
    var endPositionX = 0;
    var endPositionY = -2 * radius;
    switch (gapPosition) {
      case 'left':
        beginPositionX = -radius;
        beginPositionY = 0;
        endPositionX = 2 * radius;
        endPositionY = 0;
        break;
      case 'right':
        beginPositionX = radius;
        beginPositionY = 0;
        endPositionX = -2 * radius;
        endPositionY = 0;
        break;
      case 'bottom':
        beginPositionY = radius;
        endPositionY = 2 * radius;
        break;
      default:
    }
    var pathString = 'M 50,50 m ' + beginPositionX + ',' + beginPositionY + '\n     a ' + radius + ',' + radius + ' 0 1 1 ' + endPositionX + ',' + -endPositionY + '\n     a ' + radius + ',' + radius + ' 0 1 1 ' + -endPositionX + ',' + endPositionY;
    var len = Math.PI * 2 * radius;
    var trailPathStyle = {
      strokeDasharray: len - gapDegree + 'px ' + len + 'px',
      strokeDashoffset: '-' + gapDegree / 2 + 'px',
      transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
    };
    var strokePathStyle = {
      strokeDasharray: percent / 100 * (len - gapDegree) + 'px ' + len + 'px',
      strokeDashoffset: '-' + gapDegree / 2 + 'px',
      transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s' // eslint-disable-line
    };
    return { pathString: pathString, trailPathStyle: trailPathStyle, strokePathStyle: strokePathStyle };
  };

  Circle.prototype.render = function render() {
    var _this2 = this;

    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        strokeWidth = _props2.strokeWidth,
        trailWidth = _props2.trailWidth,
        strokeColor = _props2.strokeColor,
        percent = _props2.percent,
        trailColor = _props2.trailColor,
        strokeLinecap = _props2.strokeLinecap,
        style = _props2.style,
        className = _props2.className,
        restProps = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_props2, ['prefixCls', 'strokeWidth', 'trailWidth', 'strokeColor', 'percent', 'trailColor', 'strokeLinecap', 'style', 'className']);

    var _getPathStyles = this.getPathStyles(),
        pathString = _getPathStyles.pathString,
        trailPathStyle = _getPathStyles.trailPathStyle,
        strokePathStyle = _getPathStyles.strokePathStyle;

    delete restProps.percent;
    delete restProps.gapDegree;
    delete restProps.gapPosition;
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
      'svg',
      babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        className: prefixCls + '-circle ' + className,
        viewBox: '0 0 100 100',
        style: style
      }, restProps),
      react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('path', {
        className: prefixCls + '-circle-trail',
        d: pathString,
        stroke: trailColor,
        strokeWidth: trailWidth || strokeWidth,
        fillOpacity: '0',
        style: trailPathStyle
      }),
      react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('path', {
        className: prefixCls + '-circle-path',
        d: pathString,
        strokeLinecap: strokeLinecap,
        stroke: strokeColor,
        strokeWidth: this.props.percent === 0 ? 0 : strokeWidth,
        fillOpacity: '0',
        ref: function ref(path) {
          _this2.path = path;
        },
        style: strokePathStyle
      })
    );
  };

  return Circle;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Circle.propTypes = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _types__WEBPACK_IMPORTED_MODULE_8__["propTypes"], {
  gapPosition: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOf(['top', 'bottom', 'left', 'right'])
});

Circle.defaultProps = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, _types__WEBPACK_IMPORTED_MODULE_8__["defaultProps"], {
  gapPosition: 'top'
});

/* harmony default export */ __webpack_exports__["default"] = (Object(_enhancer__WEBPACK_IMPORTED_MODULE_7__["default"])(Circle));

/***/ }),

/***/ "../node_modules/rc-progress/es/Line.js":
/*!**********************************************!*\
  !*** ../node_modules/rc-progress/es/Line.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "../node_modules/babel-runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "../node_modules/babel-runtime/helpers/classCallCheck.js");
/* harmony import */ var babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "../node_modules/babel-runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babel-runtime/helpers/inherits */ "../node_modules/babel-runtime/helpers/inherits.js");
/* harmony import */ var babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _enhancer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enhancer */ "../node_modules/rc-progress/es/enhancer.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types */ "../node_modules/rc-progress/es/types.js");









var Line = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Line, _Component);

  function Line() {
    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Line);

    return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _Component.apply(this, arguments));
  }

  Line.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        className = _props.className,
        percent = _props.percent,
        prefixCls = _props.prefixCls,
        strokeColor = _props.strokeColor,
        strokeLinecap = _props.strokeLinecap,
        strokeWidth = _props.strokeWidth,
        style = _props.style,
        trailColor = _props.trailColor,
        trailWidth = _props.trailWidth,
        restProps = babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_props, ['className', 'percent', 'prefixCls', 'strokeColor', 'strokeLinecap', 'strokeWidth', 'style', 'trailColor', 'trailWidth']);

    delete restProps.gapPosition;

    var pathStyle = {
      strokeDasharray: '100px, 100px',
      strokeDashoffset: 100 - percent + 'px',
      transition: 'stroke-dashoffset 0.3s ease 0s, stroke 0.3s linear'
    };

    var center = strokeWidth / 2;
    var right = 100 - strokeWidth / 2;
    var pathString = 'M ' + (strokeLinecap === 'round' ? center : 0) + ',' + center + '\n           L ' + (strokeLinecap === 'round' ? right : 100) + ',' + center;
    var viewBoxString = '0 0 100 ' + strokeWidth;

    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
      'svg',
      babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        className: prefixCls + '-line ' + className,
        viewBox: viewBoxString,
        preserveAspectRatio: 'none',
        style: style
      }, restProps),
      react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('path', {
        className: prefixCls + '-line-trail',
        d: pathString,
        strokeLinecap: strokeLinecap,
        stroke: trailColor,
        strokeWidth: trailWidth || strokeWidth,
        fillOpacity: '0'
      }),
      react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement('path', {
        className: prefixCls + '-line-path',
        d: pathString,
        strokeLinecap: strokeLinecap,
        stroke: strokeColor,
        strokeWidth: strokeWidth,
        fillOpacity: '0',
        ref: function ref(path) {
          _this2.path = path;
        },
        style: pathStyle
      })
    );
  };

  return Line;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Line.propTypes = _types__WEBPACK_IMPORTED_MODULE_7__["propTypes"];

Line.defaultProps = _types__WEBPACK_IMPORTED_MODULE_7__["defaultProps"];

/* harmony default export */ __webpack_exports__["default"] = (Object(_enhancer__WEBPACK_IMPORTED_MODULE_6__["default"])(Line));

/***/ }),

/***/ "../node_modules/rc-progress/es/enhancer.js":
/*!**************************************************!*\
  !*** ../node_modules/rc-progress/es/enhancer.js ***!
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



var enhancer = function enhancer(WrappedComponent) {
  return function (_WrappedComponent) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Progress, _WrappedComponent);

    function Progress() {
      babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Progress);

      return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, _WrappedComponent.apply(this, arguments));
    }

    Progress.prototype.componentDidUpdate = function componentDidUpdate() {
      if (!this.path) {
        return;
      }
      var pathStyle = this.path.style;
      pathStyle.transitionDuration = '.3s, .3s, .3s, .06s';
      var now = Date.now();
      if (this.prevTimeStamp && now - this.prevTimeStamp < 100) {
        pathStyle.transitionDuration = '0s, 0s';
      }
      this.prevTimeStamp = Date.now();
    };

    Progress.prototype.render = function render() {
      return _WrappedComponent.prototype.render.call(this);
    };

    return Progress;
  }(WrappedComponent);
};

/* harmony default export */ __webpack_exports__["default"] = (enhancer);

/***/ }),

/***/ "../node_modules/rc-progress/es/index.js":
/*!***********************************************!*\
  !*** ../node_modules/rc-progress/es/index.js ***!
  \***********************************************/
/*! exports provided: Line, Circle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Line */ "../node_modules/rc-progress/es/Line.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return _Line__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Circle */ "../node_modules/rc-progress/es/Circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return _Circle__WEBPACK_IMPORTED_MODULE_1__["default"]; });






/* harmony default export */ __webpack_exports__["default"] = ({
  Line: _Line__WEBPACK_IMPORTED_MODULE_0__["default"],
  Circle: _Circle__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "../node_modules/rc-progress/es/types.js":
/*!***********************************************!*\
  !*** ../node_modules/rc-progress/es/types.js ***!
  \***********************************************/
/*! exports provided: defaultProps, propTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProps", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propTypes", function() { return propTypes; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);


var defaultProps = {
  className: '',
  percent: 0,
  prefixCls: 'rc-progress',
  strokeColor: '#2db7f5',
  strokeLinecap: 'round',
  strokeWidth: 1,
  style: {},
  trailColor: '#D9D9D9',
  trailWidth: 1
};

var propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  percent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  strokeColor: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  strokeLinecap: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['butt', 'round', 'square']),
  strokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),
  style: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  trailColor: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  trailWidth: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string])
};

/***/ }),

/***/ "../node_modules/rc-upload/es/AjaxUploader.js":
/*!****************************************************!*\
  !*** ../node_modules/rc-upload/es/AjaxUploader.js ***!
  \****************************************************/
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
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./request */ "../node_modules/rc-upload/es/request.js");
/* harmony import */ var _uid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./uid */ "../node_modules/rc-upload/es/uid.js");
/* harmony import */ var _attr_accept__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./attr-accept */ "../node_modules/rc-upload/es/attr-accept.js");






/* eslint react/no-is-mounted:0 react/sort-comp:0 */








var AjaxUploader = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(AjaxUploader, _Component);

  function AjaxUploader() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, AjaxUploader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (_ref = AjaxUploader.__proto__ || Object.getPrototypeOf(AjaxUploader)).call.apply(_ref, [this].concat(args))), _this), _this.state = { uid: Object(_uid__WEBPACK_IMPORTED_MODULE_10__["default"])() }, _this.reqs = {}, _this.onChange = function (e) {
      var files = e.target.files;
      _this.uploadFiles(files);
      _this.reset();
    }, _this.onClick = function () {
      var el = _this.fileInput;
      if (!el) {
        return;
      }
      el.click();
    }, _this.onKeyDown = function (e) {
      if (e.key === 'Enter') {
        _this.onClick();
      }
    }, _this.onFileDrop = function (e) {
      if (e.type === 'dragover') {
        e.preventDefault();
        return;
      }
      var files = Array.prototype.slice.call(e.dataTransfer.files).filter(function (file) {
        return Object(_attr_accept__WEBPACK_IMPORTED_MODULE_11__["default"])(file, _this.props.accept);
      });
      _this.uploadFiles(files);

      e.preventDefault();
    }, _this.saveFileInput = function (node) {
      _this.fileInput = node;
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(AjaxUploader, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._isMounted = true;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._isMounted = false;
      this.abort();
    }
  }, {
    key: 'uploadFiles',
    value: function uploadFiles(files) {
      var _this2 = this;

      var postFiles = Array.prototype.slice.call(files);
      postFiles.forEach(function (file) {
        file.uid = Object(_uid__WEBPACK_IMPORTED_MODULE_10__["default"])();
        _this2.upload(file, postFiles);
      });
    }
  }, {
    key: 'upload',
    value: function upload(file, fileList) {
      var _this3 = this;

      var props = this.props;

      if (!props.beforeUpload) {
        // always async in case use react state to keep fileList
        return setTimeout(function () {
          return _this3.post(file);
        }, 0);
      }

      var before = props.beforeUpload(file, fileList);
      if (before && before.then) {
        before.then(function (processedFile) {
          var processedFileType = Object.prototype.toString.call(processedFile);
          if (processedFileType === '[object File]' || processedFileType === '[object Blob]') {
            _this3.post(processedFile);
          } else {
            _this3.post(file);
          }
        })['catch'](function (e) {
          console && console.log(e); // eslint-disable-line
        });
      } else if (before !== false) {
        setTimeout(function () {
          return _this3.post(file);
        }, 0);
      }
    }
  }, {
    key: 'post',
    value: function post(file) {
      var _this4 = this;

      if (!this._isMounted) {
        return;
      }
      var props = this.props;
      var data = props.data;
      var onStart = props.onStart,
          onProgress = props.onProgress;

      if (typeof data === 'function') {
        data = data(file);
      }
      var uid = file.uid;

      var request = props.customRequest || _request__WEBPACK_IMPORTED_MODULE_9__["default"];
      this.reqs[uid] = request({
        action: props.action,
        filename: props.name,
        file: file,
        data: data,
        headers: props.headers,
        withCredentials: props.withCredentials,
        onProgress: onProgress ? function (e) {
          onProgress(e, file);
        } : null,
        onSuccess: function onSuccess(ret, xhr) {
          delete _this4.reqs[uid];
          props.onSuccess(ret, file, xhr);
        },
        onError: function onError(err, ret) {
          delete _this4.reqs[uid];
          props.onError(err, ret, file);
        }
      });
      onStart(file);
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.setState({
        uid: Object(_uid__WEBPACK_IMPORTED_MODULE_10__["default"])()
      });
    }
  }, {
    key: 'abort',
    value: function abort(file) {
      var reqs = this.reqs;

      if (file) {
        var uid = file;
        if (file && file.uid) {
          uid = file.uid;
        }
        if (reqs[uid]) {
          reqs[uid].abort();
          delete reqs[uid];
        }
      } else {
        Object.keys(reqs).forEach(function (uid) {
          if (reqs[uid]) {
            reqs[uid].abort();
          }

          delete reqs[uid];
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          Tag = _props.component,
          prefixCls = _props.prefixCls,
          className = _props.className,
          disabled = _props.disabled,
          style = _props.style,
          multiple = _props.multiple,
          accept = _props.accept,
          children = _props.children;

      var cls = classnames__WEBPACK_IMPORTED_MODULE_8___default()((_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls, true), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-disabled', disabled), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, className, className), _classNames));
      var events = disabled ? {} : {
        onClick: this.onClick,
        onKeyDown: this.onKeyDown,
        onDrop: this.onFileDrop,
        onDragOver: this.onFileDrop,
        tabIndex: '0'
      };
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
        Tag,
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, events, {
          className: cls,
          role: 'button',
          style: style
        }),
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement('input', {
          type: 'file',
          ref: this.saveFileInput,
          key: this.state.uid,
          style: { display: 'none' },
          accept: accept,
          multiple: multiple,
          onChange: this.onChange
        }),
        children
      );
    }
  }]);

  return AjaxUploader;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

AjaxUploader.propTypes = {
  component: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  multiple: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  accept: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any,
  onStart: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  data: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func]),
  headers: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  beforeUpload: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  customRequest: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  onProgress: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  withCredentials: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool
};


/* harmony default export */ __webpack_exports__["default"] = (AjaxUploader);

/***/ }),

/***/ "../node_modules/rc-upload/es/IframeUploader.js":
/*!******************************************************!*\
  !*** ../node_modules/rc-upload/es/IframeUploader.js ***!
  \******************************************************/
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
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _uid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./uid */ "../node_modules/rc-upload/es/uid.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! warning */ "../node_modules/rc-upload/node_modules/warning/browser.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_11__);






/* eslint react/sort-comp:0 */







var IFRAME_STYLE = {
  position: 'absolute',
  top: 0,
  opacity: 0,
  filter: 'alpha(opacity=0)',
  left: 0,
  zIndex: 9999
};

// diferent from AjaxUpload, can only upload on at one time, serial seriously

var IframeUploader = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(IframeUploader, _Component);

  function IframeUploader() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, IframeUploader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (_ref = IframeUploader.__proto__ || Object.getPrototypeOf(IframeUploader)).call.apply(_ref, [this].concat(args))), _this), _this.state = { uploading: false }, _this.file = {}, _this.onLoad = function () {
      if (!_this.state.uploading) {
        return;
      }
      var _this2 = _this,
          props = _this2.props,
          file = _this2.file;

      var response = void 0;
      try {
        var doc = _this.getIframeDocument();
        var script = doc.getElementsByTagName('script')[0];
        if (script && script.parentNode === doc.body) {
          doc.body.removeChild(script);
        }
        response = doc.body.innerHTML;
        props.onSuccess(response, file);
      } catch (err) {
        warning__WEBPACK_IMPORTED_MODULE_11___default()(false, 'cross domain error for Upload. Maybe server should return document.domain script. see Note from https://github.com/react-component/upload');
        response = 'cross-domain';
        props.onError(err, null, file);
      }
      _this.endUpload();
    }, _this.onChange = function () {
      var target = _this.getFormInputNode();
      // ie8/9 don't support FileList Object
      // http://stackoverflow.com/questions/12830058/ie8-input-type-file-get-files
      var file = _this.file = {
        uid: Object(_uid__WEBPACK_IMPORTED_MODULE_10__["default"])(),
        name: target.value
      };
      _this.startUpload();
      var _this3 = _this,
          props = _this3.props;

      if (!props.beforeUpload) {
        return _this.post(file);
      }
      var before = props.beforeUpload(file);
      if (before && before.then) {
        before.then(function () {
          _this.post(file);
        }, function () {
          _this.endUpload();
        });
      } else if (before !== false) {
        _this.post(file);
      } else {
        _this.endUpload();
      }
    }, _this.saveIframe = function (node) {
      _this.iframe = node;
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(IframeUploader, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateIframeWH();
      this.initIframe();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.updateIframeWH();
    }
  }, {
    key: 'getIframeNode',
    value: function getIframeNode() {
      return this.iframe;
    }
  }, {
    key: 'getIframeDocument',
    value: function getIframeDocument() {
      return this.getIframeNode().contentDocument;
    }
  }, {
    key: 'getFormNode',
    value: function getFormNode() {
      return this.getIframeDocument().getElementById('form');
    }
  }, {
    key: 'getFormInputNode',
    value: function getFormInputNode() {
      return this.getIframeDocument().getElementById('input');
    }
  }, {
    key: 'getFormDataNode',
    value: function getFormDataNode() {
      return this.getIframeDocument().getElementById('data');
    }
  }, {
    key: 'getFileForMultiple',
    value: function getFileForMultiple(file) {
      return this.props.multiple ? [file] : file;
    }
  }, {
    key: 'getIframeHTML',
    value: function getIframeHTML(domain) {
      var domainScript = '';
      var domainInput = '';
      if (domain) {
        var script = 'script';
        domainScript = '<' + script + '>document.domain="' + domain + '";</' + script + '>';
        domainInput = '<input name="_documentDomain" value="' + domain + '" />';
      }
      return '\n    <!DOCTYPE html>\n    <html>\n    <head>\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <style>\n    body,html {padding:0;margin:0;border:0;overflow:hidden;}\n    </style>\n    ' + domainScript + '\n    </head>\n    <body>\n    <form method="post"\n    encType="multipart/form-data"\n    action="' + this.props.action + '" id="form"\n    style="display:block;height:9999px;position:relative;overflow:hidden;">\n    <input id="input" type="file"\n     name="' + this.props.name + '"\n     style="position:absolute;top:0;right:0;height:9999px;font-size:9999px;cursor:pointer;"/>\n    ' + domainInput + '\n    <span id="data"></span>\n    </form>\n    </body>\n    </html>\n    ';
    }
  }, {
    key: 'initIframeSrc',
    value: function initIframeSrc() {
      if (this.domain) {
        this.getIframeNode().src = 'javascript:void((function(){\n        var d = document;\n        d.open();\n        d.domain=\'' + this.domain + '\';\n        d.write(\'\');\n        d.close();\n      })())';
      }
    }
  }, {
    key: 'initIframe',
    value: function initIframe() {
      var iframeNode = this.getIframeNode();
      var win = iframeNode.contentWindow;
      var doc = void 0;
      this.domain = this.domain || '';
      this.initIframeSrc();
      try {
        doc = win.document;
      } catch (e) {
        this.domain = document.domain;
        this.initIframeSrc();
        win = iframeNode.contentWindow;
        doc = win.document;
      }
      doc.open('text/html', 'replace');
      doc.write(this.getIframeHTML(this.domain));
      doc.close();
      this.getFormInputNode().onchange = this.onChange;
    }
  }, {
    key: 'endUpload',
    value: function endUpload() {
      if (this.state.uploading) {
        this.file = {};
        // hack avoid batch
        this.state.uploading = false;
        this.setState({
          uploading: false
        });
        this.initIframe();
      }
    }
  }, {
    key: 'startUpload',
    value: function startUpload() {
      if (!this.state.uploading) {
        this.state.uploading = true;
        this.setState({
          uploading: true
        });
      }
    }
  }, {
    key: 'updateIframeWH',
    value: function updateIframeWH() {
      var rootNode = react_dom__WEBPACK_IMPORTED_MODULE_8___default.a.findDOMNode(this);
      var iframeNode = this.getIframeNode();
      iframeNode.style.height = rootNode.offsetHeight + 'px';
      iframeNode.style.width = rootNode.offsetWidth + 'px';
    }
  }, {
    key: 'abort',
    value: function abort(file) {
      if (file) {
        var uid = file;
        if (file && file.uid) {
          uid = file.uid;
        }
        if (uid === this.file.uid) {
          this.endUpload();
        }
      } else {
        this.endUpload();
      }
    }
  }, {
    key: 'post',
    value: function post(file) {
      var formNode = this.getFormNode();
      var dataSpan = this.getFormDataNode();
      var data = this.props.data;
      var onStart = this.props.onStart;

      if (typeof data === 'function') {
        data = data(file);
      }
      var inputs = document.createDocumentFragment();
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          var input = document.createElement('input');
          input.setAttribute('name', key);
          input.value = data[key];
          inputs.appendChild(input);
        }
      }
      dataSpan.appendChild(inputs);
      formNode.submit();
      dataSpan.innerHTML = '';
      onStart(file);
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          Tag = _props.component,
          disabled = _props.disabled,
          className = _props.className,
          prefixCls = _props.prefixCls,
          children = _props.children,
          style = _props.style;

      var iframeStyle = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, IFRAME_STYLE, {
        display: this.state.uploading || disabled ? 'none' : ''
      });
      var cls = classnames__WEBPACK_IMPORTED_MODULE_9___default()((_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls, true), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-disabled', disabled), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, className, className), _classNames));
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
        Tag,
        {
          className: cls,
          style: babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({ position: 'relative', zIndex: 0 }, style)
        },
        react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement('iframe', {
          ref: this.saveIframe,
          onLoad: this.onLoad,
          style: iframeStyle
        }),
        children
      );
    }
  }]);

  return IframeUploader;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

IframeUploader.propTypes = {
  component: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  className: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  accept: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  onStart: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func,
  multiple: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any,
  data: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func]),
  action: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string
};


/* harmony default export */ __webpack_exports__["default"] = (IframeUploader);

/***/ }),

/***/ "../node_modules/rc-upload/es/Upload.js":
/*!**********************************************!*\
  !*** ../node_modules/rc-upload/es/Upload.js ***!
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _AjaxUploader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AjaxUploader */ "../node_modules/rc-upload/es/AjaxUploader.js");
/* harmony import */ var _IframeUploader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./IframeUploader */ "../node_modules/rc-upload/es/IframeUploader.js");










function empty() {}

var Upload = function (_Component) {
  babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Upload, _Component);

  function Upload() {
    var _ref;

    var _temp, _this, _ret;

    babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Upload);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_ref = Upload.__proto__ || Object.getPrototypeOf(Upload)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      Component: null
    }, _this.saveUploader = function (node) {
      _this.uploader = node;
    }, _temp), babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(_this, _ret);
  }

  babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Upload, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.supportServerRender) {
        /* eslint react/no-did-mount-set-state:0 */
        this.setState({
          Component: this.getComponent()
        }, this.props.onReady);
      }
    }
  }, {
    key: 'getComponent',
    value: function getComponent() {
      return typeof File !== 'undefined' ? _AjaxUploader__WEBPACK_IMPORTED_MODULE_7__["default"] : _IframeUploader__WEBPACK_IMPORTED_MODULE_8__["default"];
    }
  }, {
    key: 'abort',
    value: function abort(file) {
      this.uploader.abort(file);
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.supportServerRender) {
        var _ComponentUploader = this.state.Component;
        if (_ComponentUploader) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ComponentUploader, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props, { ref: this.saveUploader }));
        }
        return null;
      }
      var ComponentUploader = this.getComponent();
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ComponentUploader, babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, this.props, { ref: this.saveUploader }));
    }
  }]);

  return Upload;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Upload.propTypes = {
  component: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  action: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  multipart: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  onError: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  onSuccess: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  onProgress: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  onStart: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  data: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func]),
  headers: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  accept: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  multiple: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  beforeUpload: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  customRequest: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  onReady: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  withCredentials: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  supportServerRender: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool
};
Upload.defaultProps = {
  component: 'span',
  prefixCls: 'rc-upload',
  data: {},
  headers: {},
  name: 'file',
  multipart: false,
  onReady: empty,
  onStart: empty,
  onError: empty,
  onSuccess: empty,
  supportServerRender: false,
  multiple: false,
  beforeUpload: null,
  customRequest: null,
  withCredentials: false
};


/* harmony default export */ __webpack_exports__["default"] = (Upload);

/***/ }),

/***/ "../node_modules/rc-upload/es/attr-accept.js":
/*!***************************************************!*\
  !*** ../node_modules/rc-upload/es/attr-accept.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function endsWith(str, suffix) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

/* harmony default export */ __webpack_exports__["default"] = (function (file, acceptedFiles) {
  if (file && acceptedFiles) {
    var acceptedFilesArray = Array.isArray(acceptedFiles) ? acceptedFiles : acceptedFiles.split(',');
    var fileName = file.name || '';
    var mimeType = file.type || '';
    var baseMimeType = mimeType.replace(/\/.*$/, '');

    return acceptedFilesArray.some(function (type) {
      var validType = type.trim();
      if (validType.charAt(0) === '.') {
        return endsWith(fileName.toLowerCase(), validType.toLowerCase());
      } else if (/\/\*$/.test(validType)) {
        // This is something like a image/* mime type
        return baseMimeType === validType.replace(/\/.*$/, '');
      }
      return mimeType === validType;
    });
  }
  return true;
});

/***/ }),

/***/ "../node_modules/rc-upload/es/index.js":
/*!*********************************************!*\
  !*** ../node_modules/rc-upload/es/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Upload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Upload */ "../node_modules/rc-upload/es/Upload.js");
// export this package's api


/* harmony default export */ __webpack_exports__["default"] = (_Upload__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../node_modules/rc-upload/es/request.js":
/*!***********************************************!*\
  !*** ../node_modules/rc-upload/es/request.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return upload; });
function getError(option, xhr) {
  var msg = 'cannot post ' + option.action + ' ' + xhr.status + '\'';
  var err = new Error(msg);
  err.status = xhr.status;
  err.method = 'post';
  err.url = option.action;
  return err;
}

function getBody(xhr) {
  var text = xhr.responseText || xhr.response;
  if (!text) {
    return text;
  }

  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}

// option {
//  onProgress: (event: { percent: number }): void,
//  onError: (event: Error, body?: Object): void,
//  onSuccess: (body: Object): void,
//  data: Object,
//  filename: String,
//  file: File,
//  withCredentials: Boolean,
//  action: String,
//  headers: Object,
// }
function upload(option) {
  var xhr = new XMLHttpRequest();

  if (option.onProgress && xhr.upload) {
    xhr.upload.onprogress = function progress(e) {
      if (e.total > 0) {
        e.percent = e.loaded / e.total * 100;
      }
      option.onProgress(e);
    };
  }

  var formData = new FormData();

  if (option.data) {
    Object.keys(option.data).map(function (key) {
      formData.append(key, option.data[key]);
    });
  }

  formData.append(option.filename, option.file);

  xhr.onerror = function error(e) {
    option.onError(e);
  };

  xhr.onload = function onload() {
    // allow success when 2xx status
    // see https://github.com/react-component/upload/issues/34
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError(option, xhr), getBody(xhr));
    }

    option.onSuccess(getBody(xhr), xhr);
  };

  xhr.open('post', option.action, true);

  // Has to be after `.open()`. See https://github.com/enyo/dropzone/issues/179
  if (option.withCredentials && 'withCredentials' in xhr) {
    xhr.withCredentials = true;
  }

  var headers = option.headers || {};

  // when set headers['X-Requested-With'] = null , can close default XHR header
  // see https://github.com/react-component/upload/issues/33
  if (headers['X-Requested-With'] !== null) {
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  }

  for (var h in headers) {
    if (headers.hasOwnProperty(h) && headers[h] !== null) {
      xhr.setRequestHeader(h, headers[h]);
    }
  }
  xhr.send(formData);

  return {
    abort: function abort() {
      xhr.abort();
    }
  };
}

/***/ }),

/***/ "../node_modules/rc-upload/es/uid.js":
/*!*******************************************!*\
  !*** ../node_modules/rc-upload/es/uid.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return uid; });
var now = +new Date();
var index = 0;

function uid() {
  return "rc-upload-" + now + "-" + ++index;
}

/***/ }),

/***/ "../node_modules/rc-upload/node_modules/warning/browser.js":
/*!*****************************************************************!*\
  !*** ../node_modules/rc-upload/node_modules/warning/browser.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (true) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./config/common-form.js":
/*!*******************************!*\
  !*** ./config/common-form.js ***!
  \*******************************/
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

var _default = {
  labelCol: {
    span: 4,
    gutter: 16
  },
  wrapperCol: {
    span: 18,
    gutter: 16
  }
};
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\config\\common-form.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./config/common-modal.js":
/*!********************************!*\
  !*** ./config/common-modal.js ***!
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

var _default = {
  width: 800,
  maskClosable: false
};
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\config\\common-modal.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./helpers/export-file.js":
/*!********************************!*\
  !*** ./helpers/export-file.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _handleUrlencode = __webpack_require__(/*! ./handle-urlencode */ "./helpers/handle-urlencode.js");

var _handleUrlencode2 = _interopRequireDefault(_handleUrlencode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

var exportFile = function exportFile(_ref) {
    var _ref$url = _ref.url,
        url = _ref$url === undefined ? '' : _ref$url,
        _ref$data = _ref.data,
        data = _ref$data === undefined ? {} : _ref$data;

    window.open(url + '?' + (0, _handleUrlencode2.default)(data));
};
var _default = exportFile;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(exportFile, 'exportFile', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\helpers\\export-file.js');
    reactHotLoader.register(_default, 'default', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\helpers\\export-file.js');
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

/***/ "./helpers/handle-urlencode.js":
/*!*************************************!*\
  !*** ./helpers/handle-urlencode.js ***!
  \*************************************/
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

var handleUrlEncode = function handleUrlEncode(data) {
    return Object.keys(data).map(function (key) {
        return key + '=' + data[key];
    }).join('&');
};
var _default = handleUrlEncode;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(handleUrlEncode, 'handleUrlEncode', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\helpers\\handle-urlencode.js');
    reactHotLoader.register(_default, 'default', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\helpers\\handle-urlencode.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./helpers/has-errors.js":
/*!*******************************!*\
  !*** ./helpers/has-errors.js ***!
  \*******************************/
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

var _default = function _default(errors) {
  return Object.keys(errors).some(function (key) {
    return errors[key];
  });
};

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\helpers\\has-errors.js");
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

/***/ "./history.js":
/*!********************!*\
  !*** ./history.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createHashHistory = __webpack_require__(/*! history/createHashHistory */ "../node_modules/history/createHashHistory.js");

var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

var history = (0, _createHashHistory2.default)();
var _default = history;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(history, 'history', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\history.js');
  reactHotLoader.register(_default, 'default', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\history.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./pages/batch_process/batch_process.css":
/*!***********************************************!*\
  !*** ./pages/batch_process/batch_process.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./batch_process.css */ "../node_modules/css-loader/index.js??ref--5-1!./pages/batch_process/batch_process.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--5-1!./batch_process.css */ "../node_modules/css-loader/index.js??ref--5-1!./pages/batch_process/batch_process.css", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./batch_process.css */ "../node_modules/css-loader/index.js??ref--5-1!./pages/batch_process/batch_process.css");

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

/***/ "./pages/batch_process/batch_process.js":
/*!**********************************************!*\
  !*** ./pages/batch_process/batch_process.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _table = __webpack_require__(/*! antd/es/table */ "../node_modules/antd/es/table/index.js");

var _table2 = _interopRequireDefault(_table);

var _button = __webpack_require__(/*! antd/es/button */ "../node_modules/antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _form = __webpack_require__(/*! antd/es/form */ "../node_modules/antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _input = __webpack_require__(/*! antd/es/input */ "../node_modules/antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _select = __webpack_require__(/*! antd/es/select */ "../node_modules/antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

__webpack_require__(/*! antd/es/table/style/css */ "../node_modules/antd/es/table/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "../node_modules/antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/form/style/css */ "../node_modules/antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "../node_modules/antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "../node_modules/antd/es/select/style/css.js");

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(/*! mobx-react */ "../node_modules/mobx-react/index.module.js");

var _store = __webpack_require__(/*! ./store */ "./pages/batch_process/store.js");

var _store2 = _interopRequireDefault(_store);

var _batch_process = __webpack_require__(/*! ./batch_process.css */ "./pages/batch_process/batch_process.css");

var _batch_process2 = _interopRequireDefault(_batch_process);

var _create_a = __webpack_require__(/*! ../create_a/create_a */ "./pages/create_a/create_a.js");

var _create_a2 = _interopRequireDefault(_create_a);

var _edit_a = __webpack_require__(/*! ../edit_a/edit_a */ "./pages/edit_a/edit_a.js");

var _edit_a2 = _interopRequireDefault(_edit_a);

var _request = __webpack_require__(/*! ../../helpers/request */ "./helpers/request.js");

var _request2 = _interopRequireDefault(_request);

var _history = __webpack_require__(/*! ../../history */ "./history.js");

var _history2 = _interopRequireDefault(_history);

var _exportFile = __webpack_require__(/*! ../../helpers/export-file */ "./helpers/export-file.js");

var _exportFile2 = _interopRequireDefault(_exportFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _select2.default.Option;

var Search = _input2.default.Search;

var BatchProcess = (0, _mobxReact.observer)(_class = function (_React$Component) {
    _inherits(BatchProcess, _React$Component);

    function BatchProcess() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, BatchProcess);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BatchProcess.__proto__ || Object.getPrototypeOf(BatchProcess)).call.apply(_ref, [this].concat(args))), _this), _this.columns = [{
            title: '编号',
            dataIndex: 'id'
        }, {
            title: '效率100编号',
            dataIndex: 'wf_id'
        }, {
            title: '标题',
            dataIndex: 'title'
        }, {
            title: '创建人',
            dataIndex: 'creator'
        }, {
            title: '创建时间',
            dataIndex: 'create_time'
        }, {
            title: '操作',
            render: function render(text, record) {
                return _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement(
                        'a',
                        { className: _batch_process2.default.operate, onClick: function onClick() {
                                return _this.editItem(record);
                            } },
                        '\u7F16\u8F91'
                    ),
                    _react2.default.createElement(
                        'a',
                        { className: _batch_process2.default.operate, onClick: function onClick() {
                                return _this.deleteItem(record);
                            } },
                        '\u5220\u9664'
                    ),
                    _react2.default.createElement(
                        'a',
                        { className: _batch_process2.default.operate, onClick: function onClick() {
                                return _this.goToDetail(record.id, record.wf_id);
                            } },
                        '\u67E5\u770B\u8BE6\u60C5'
                    )
                );
            }
        }], _this.createA = function () {
            _this.setCreateVisible(true);
        }, _this.fetchFileAList = function () {
            (0, _request2.default)({
                url: '/api/get_flow_list',
                data: {
                    keyword: ''
                },
                success: function success(_ref2) {
                    var table = _ref2.table;

                    console.log(table);
                    _store2.default.setFileAList(table);
                }
            });
        }, _this.setCreateVisible = function (bool) {
            _store2.default.setVisible({
                create: bool
            });
        }, _this.setEditVisible = function (bool) {
            _store2.default.setVisible({
                edit: bool
            });
        }, _this.editItem = function (item) {
            _store2.default.setSelectedItem(Object.assign({}, item, {
                editType: 'edit'
            }));
            _store2.default.setVisible({
                edit: true
            });
        }, _this.deleteItem = function (item) {
            _store2.default.setSelectedItem(Object.assign({}, item, {
                editType: 'delete'
            }));
            _store2.default.setVisible({
                edit: true
            });
        }, _this.goToDetail = function (id, wf_id) {
            _history2.default.push('/process/' + id + '/' + wf_id);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(BatchProcess, [{
        key: 'render',
        value: function render() {
            var visible = _store2.default.visible,
                list = _store2.default.list,
                selectedItem = _store2.default.selectedItem,
                fileAList = _store2.default.fileAList;

            var dataSource = Array.from(fileAList);
            var wf_ids = list.wf_ids,
                titles = list.titles,
                creators = list.creators;
            var getFieldDecorator = this.props.form.getFieldDecorator;

            var SelectBar = function SelectBar() {
                return _react2.default.createElement(
                    _form2.default,
                    { layout: 'inline' },
                    _react2.default.createElement(
                        _form2.default.Item,
                        { label: '\u6548\u7387100\u7F16\u53F7' },
                        getFieldDecorator('wf_id', {
                            initialValue: '0'
                        })(_react2.default.createElement(
                            _select2.default,
                            { className: _batch_process2.default.select },
                            _react2.default.createElement(
                                Option,
                                { value: '0' },
                                '\u5168\u90E8'
                            ),
                            wf_ids.map(function (id) {
                                return _react2.default.createElement(
                                    Option,
                                    { key: id, value: id },
                                    id
                                );
                            })
                        ))
                    ),
                    _react2.default.createElement(
                        _form2.default.Item,
                        { label: '\u6807\u9898' },
                        getFieldDecorator('title', {
                            initialValue: '0'
                        })(_react2.default.createElement(
                            _select2.default,
                            { className: _batch_process2.default.select },
                            _react2.default.createElement(
                                Option,
                                { value: '0' },
                                '\u5168\u90E8'
                            ),
                            titles.map(function (t) {
                                return _react2.default.createElement(
                                    Option,
                                    { key: t, value: t },
                                    t
                                );
                            })
                        ))
                    ),
                    _react2.default.createElement(
                        _form2.default.Item,
                        { label: '\u521B\u5EFA\u4EBA' },
                        getFieldDecorator('creator', {
                            initialValue: '0'
                        })(_react2.default.createElement(
                            _select2.default,
                            { className: _batch_process2.default.select },
                            _react2.default.createElement(
                                Option,
                                { value: '0' },
                                '\u5168\u90E8'
                            ),
                            creators.map(function (c) {
                                return _react2.default.createElement(
                                    Option,
                                    { key: c, value: c },
                                    c
                                );
                            })
                        ))
                    ),
                    _react2.default.createElement(
                        _form2.default.Item,
                        null,
                        _react2.default.createElement(
                            _button2.default,
                            { type: 'primary' },
                            '\u67E5\u8BE2'
                        )
                    ),
                    _react2.default.createElement(
                        _form2.default.Item,
                        { className: _batch_process2.default.fr },
                        _react2.default.createElement(Search, { placeholder: '\u8BF7\u8F93\u5165\u5176\u4ED6\u5173\u952E\u5B57', enterButton: true })
                    )
                );
            };
            return _react2.default.createElement(
                'div',
                { className: 'init-height' },
                _react2.default.createElement(SelectBar, null),
                _react2.default.createElement(
                    'div',
                    { className: _batch_process2.default.action_bar },
                    _react2.default.createElement(
                        _button2.default,
                        { type: 'primary', onClick: this.createA },
                        '\u521B\u5EFA\u4EFB\u52A1'
                    ),
                    _react2.default.createElement(
                        _button2.default,
                        { onClick: this.fetchFileAList },
                        'test'
                    )
                ),
                _react2.default.createElement(_table2.default, { columns: this.columns, dataSource: dataSource, rowKey: 'id' }),
                _react2.default.createElement(_create_a2.default, { setVisible: this.setCreateVisible, visible: visible }),
                _react2.default.createElement(_edit_a2.default, { setVisible: this.setEditVisible, visible: visible, selectedItem: selectedItem })
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.fetchFileAList();
            // console.log(1);
        }
    }, {
        key: '__reactstandin__regenerateByEval',

        // exportFileA = () => {
        //     let values = this.props.form.getFieldsValue();
        //     console.log(values);
        //     // exportFile({
        //     //   url: '/api/get_file',
        //     //   data: data
        //     // })
        // }
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return BatchProcess;
}(_react2.default.Component)) || _class;

var _default = _form2.default.create()(BatchProcess);

exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Option, 'Option', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\batch_process\\batch_process.js');
    reactHotLoader.register(Search, 'Search', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\batch_process\\batch_process.js');
    reactHotLoader.register(BatchProcess, 'BatchProcess', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\batch_process\\batch_process.js');
    reactHotLoader.register(_default, 'default', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\batch_process\\batch_process.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./pages/batch_process/store.js":
/*!**************************************!*\
  !*** ./pages/batch_process/store.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3;

var _mobx = __webpack_require__(/*! mobx */ "../node_modules/mobx/lib/mobx.module.js");

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var Store = (_class = function () {
  function Store() {
    _classCallCheck(this, Store);

    _initDefineProp(this, 'visible', _descriptor, this);

    _initDefineProp(this, 'fileAList', _descriptor2, this);

    _initDefineProp(this, 'selectedItem', _descriptor3, this);
  }

  _createClass(Store, [{
    key: 'setVisible',
    value: function setVisible(type) {
      this.visible = Object.assign({}, this.visible, type);
    }
  }, {
    key: 'setFileAList',
    value: function setFileAList(list) {
      this.fileAList = list;
    }
  }, {
    key: 'setSelectedItem',
    value: function setSelectedItem(item) {
      this.selectedItem = item;
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }, {
    key: 'list',
    get: function get() {
      var allWf_ids = [],
          allTitles = [],
          allCreators = [];
      this.fileAList.map(function (file) {
        allWf_ids.push(file.wf_id);
        allTitles.push(file.title);
        allCreators.push(file.creator);
      });
      return {
        wf_ids: Array.from(new Set(allWf_ids)),
        titles: Array.from(new Set(allTitles)),
        creators: Array.from(new Set(allCreators))
      };
    }
  }]);

  return Store;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'visible', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return {
      create: false,
      edit: false
    };
  }
}), _applyDecoratedDescriptor(_class.prototype, 'setVisible', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setVisible'), _class.prototype), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'fileAList', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _applyDecoratedDescriptor(_class.prototype, 'setFileAList', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setFileAList'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'list', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'list'), _class.prototype), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'selectedItem', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return {
      //editType: 'edit'
    };
  }
}), _applyDecoratedDescriptor(_class.prototype, 'setSelectedItem', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setSelectedItem'), _class.prototype)), _class);


var store = new Store();
var _default = store;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Store, 'Store', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\batch_process\\store.js');
  reactHotLoader.register(store, 'store', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\batch_process\\store.js');
  reactHotLoader.register(_default, 'default', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\batch_process\\store.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./pages/create_a/create_a.js":
/*!************************************!*\
  !*** ./pages/create_a/create_a.js ***!
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

var _upload = __webpack_require__(/*! antd/es/upload */ "../node_modules/antd/es/upload/index.js");

var _upload2 = _interopRequireDefault(_upload);

var _icon = __webpack_require__(/*! antd/es/icon */ "../node_modules/antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _form = __webpack_require__(/*! antd/es/form */ "../node_modules/antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _input = __webpack_require__(/*! antd/es/input */ "../node_modules/antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _button = __webpack_require__(/*! antd/es/button */ "../node_modules/antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/modal/style/css */ "../node_modules/antd/es/modal/style/css.js");

__webpack_require__(/*! antd/es/upload/style/css */ "../node_modules/antd/es/upload/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "../node_modules/antd/es/icon/style/css.js");

__webpack_require__(/*! antd/es/form/style/css */ "../node_modules/antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "../node_modules/antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "../node_modules/antd/es/button/style/css.js");

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _commonForm = __webpack_require__(/*! ../../config/common-form */ "./config/common-form.js");

var _commonForm2 = _interopRequireDefault(_commonForm);

var _commonModal = __webpack_require__(/*! ../../config/common-modal */ "./config/common-modal.js");

var _commonModal2 = _interopRequireDefault(_commonModal);

var _request = __webpack_require__(/*! ../../helpers/request */ "./helpers/request.js");

var _request2 = _interopRequireDefault(_request);

var _hasErrors = __webpack_require__(/*! ../../helpers/has-errors */ "./helpers/has-errors.js");

var _hasErrors2 = _interopRequireDefault(_hasErrors);

var _store = __webpack_require__(/*! ../batch_process/store */ "./pages/batch_process/store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateA = function (_Component) {
    _inherits(CreateA, _Component);

    function CreateA() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, CreateA);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CreateA.__proto__ || Object.getPrototypeOf(CreateA)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            fileList: []
        }, _this.uploadProps = {
            onChange: function onChange(_ref2) {
                var fileList = _ref2.fileList;

                _this.setState({
                    fileList: fileList
                });
            },
            beforeUpload: function beforeUpload() {
                return false;
            },
            onRemove: function onRemove() {
                _this.props.form.setFieldsValue({
                    file: null
                });
                _this.setState({
                    fileList: []
                }, function () {
                    _this.props.form.validateFields();
                });
            }
        }, _this.createA = function () {
            var _this$props$form = _this.props.form,
                getFieldsValue = _this$props$form.getFieldsValue,
                getFieldsError = _this$props$form.getFieldsError;

            console.log(_this.state.fileList);
            var canCreate = !(0, _hasErrors2.default)(getFieldsError());
            if (canCreate) {
                var values = getFieldsValue();
                // let {...other,file } = values
                // console.log(values);
                (0, _request2.default)({
                    url: '/api/create_flow',
                    data: _extends({}, values, {
                        file: values.file.file }),
                    postType: 'formdata',
                    success: function success(data) {
                        _this.props.setVisible(false);
                        _this.fetchFileAList();
                    },
                    fail: function fail(data) {
                        // console.log(data);
                        // this.props.store.setCreateVisible(false);
                    }
                });
            }
        }, _this.fetchFileAList = function () {
            (0, _request2.default)({
                url: '/api/get_flow_list',
                data: {
                    keyword: ''
                },
                success: function success(_ref3) {
                    var table = _ref3.table;

                    console.log(table);
                    _store2.default.setFileAList(table);
                }
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(CreateA, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                form = _props.form,
                setVisible = _props.setVisible,
                visible = _props.visible;
            // console.log(this.props)
            // console.log(form);

            var fileList = this.state.fileList;

            var createVisible = visible.create;
            var getFieldDecorator = form.getFieldDecorator,
                isFieldTouched = form.isFieldTouched,
                getFieldError = form.getFieldError,
                getFieldsError = form.getFieldsError;

            var wf_idErr = isFieldTouched('wf_id') && getFieldError('wf_id'),
                titleErr = isFieldTouched('title') && getFieldError('title'),
                fileErr = isFieldTouched('file') && getFieldError('file');
            var ModalFooter = function ModalFooter() {
                return _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        _button2.default,
                        { onClick: function onClick() {
                                return setVisible(false);
                            } },
                        '\u53D6\u6D88'
                    ),
                    _react2.default.createElement(
                        _button2.default,
                        { type: 'primary', disabled: (0, _hasErrors2.default)(getFieldsError()), onClick: _this2.createA },
                        '\u786E\u8BA4'
                    )
                );
            };
            return _react2.default.createElement(
                _modal2.default,
                _extends({ visible: createVisible, title: '\u521B\u5EFA\u4EFB\u52A1', footer: _react2.default.createElement(ModalFooter, null),
                    onCancel: function onCancel() {
                        return setVisible(false);
                    } }, _commonModal2.default),
                _react2.default.createElement(
                    _form2.default,
                    null,
                    _react2.default.createElement(
                        _form2.default.Item,
                        _extends({
                            help: wf_idErr ? wf_idErr : '',
                            validateStatus: wf_idErr ? 'error' : '',
                            label: '\u6548\u7387100\u7F16\u53F7' }, _commonForm2.default),
                        getFieldDecorator('wf_id', {
                            rules: [{
                                required: true,
                                message: '请输入效率100编号'
                            }]
                        })(_react2.default.createElement(_input2.default, null))
                    ),
                    _react2.default.createElement(
                        _form2.default.Item,
                        _extends({
                            help: titleErr ? titleErr : '',
                            validateStatus: titleErr ? 'error' : '',
                            label: '\u6807\u9898' }, _commonForm2.default),
                        ' ',
                        getFieldDecorator('title', {
                            rules: [{
                                required: true,
                                message: '请输入标题'
                            }]
                        })(_react2.default.createElement(_input2.default, null))
                    ),
                    _react2.default.createElement(
                        _form2.default.Item,
                        _extends({
                            help: fileErr ? fileErr : '',
                            validateStatus: fileErr ? 'error' : '',
                            label: '\u5BFC\u5165A\u7C7B\u6587\u4EF6' }, _commonForm2.default),
                        getFieldDecorator('file', {
                            rules: [{
                                required: true,
                                message: '请选择文件导入'
                            }]
                        })(_react2.default.createElement(
                            _upload2.default,
                            _extends({}, this.uploadProps, { fileList: fileList }),
                            _react2.default.createElement(
                                _button2.default,
                                null,
                                _react2.default.createElement(_icon2.default, { type: 'upload' }),
                                '\u9009\u62E9\u6587\u4EF6'
                            )
                        ))
                    )
                )
            );
        }
        //
        // componentDidMount() {
        //     this.props.form.validateFields();
        // }

    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return CreateA;
}(_react.Component);

var _default = _form2.default.create()(CreateA);

exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(CreateA, 'CreateA', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\create_a\\create_a.js');
    reactHotLoader.register(_default, 'default', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\create_a\\create_a.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./pages/edit_a/edit_a.js":
/*!********************************!*\
  !*** ./pages/edit_a/edit_a.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modal = __webpack_require__(/*! antd/es/modal */ "../node_modules/antd/es/modal/index.js");

var _modal2 = _interopRequireDefault(_modal);

var _input = __webpack_require__(/*! antd/es/input */ "../node_modules/antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _form = __webpack_require__(/*! antd/es/form */ "../node_modules/antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _button = __webpack_require__(/*! antd/es/button */ "../node_modules/antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/modal/style/css */ "../node_modules/antd/es/modal/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "../node_modules/antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/form/style/css */ "../node_modules/antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "../node_modules/antd/es/button/style/css.js");

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _commonModal = __webpack_require__(/*! ../../config/common-modal */ "./config/common-modal.js");

var _commonModal2 = _interopRequireDefault(_commonModal);

var _commonForm = __webpack_require__(/*! ../../config/common-form */ "./config/common-form.js");

var _commonForm2 = _interopRequireDefault(_commonForm);

var _request = __webpack_require__(/*! ../../helpers/request */ "./helpers/request.js");

var _request2 = _interopRequireDefault(_request);

var _hasErrors = __webpack_require__(/*! ../../helpers/has-errors */ "./helpers/has-errors.js");

var _hasErrors2 = _interopRequireDefault(_hasErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditA = function (_Component) {
  _inherits(EditA, _Component);

  function EditA() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EditA);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EditA.__proto__ || Object.getPrototypeOf(EditA)).call.apply(_ref, [this].concat(args))), _this), _this.ensure = function () {
      var selectItem = _this.props.selectedItem;
      var getFieldsError = _this.props.form.getFieldsError;

      var canPost = !(0, _hasErrors2.default)(getFieldsError());
      if (canPost) {
        if (selectItem.editType === 'edit') {
          _this._edit();
        } else {
          _this._delete();
        }
      }
    }, _this._edit = function () {
      var form = _this.props.form;

      var _form$getFieldsValue = form.getFieldsValue(),
          wf_id = _form$getFieldsValue.wf_id,
          title = _form$getFieldsValue.title;

      var id = _this.props.selectedItem.id;
      (0, _request2.default)({
        url: '/api/alert_flow',
        data: {
          id: id,
          wf_id: wf_id,
          title: title
        },
        success: function success(data) {
          _this.closeModal();
        },
        fail: function fail() {
          // this.closeModal();
        }
      });
    }, _this._delete = function () {
      var form = _this.props.form;

      var _form$getFieldsValue2 = form.getFieldsValue(),
          reason = _form$getFieldsValue2.reason;

      var id = _this.props.selectedItem.id;
      (0, _request2.default)({
        url: '/api/delete_flow',
        data: {
          id: id,
          reason: reason
        },
        success: function success() {
          _this.closeModal();
        },
        fail: function fail() {
          // this.closeModal();
        }
      });
    }, _this.closeModal = function () {
      var setVisible = _this.props.setVisible;

      setVisible(false);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EditA, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          selectedItem = _props.selectedItem,
          visible = _props.visible,
          form = _props.form;
      var isFieldTouched = form.isFieldTouched,
          getFieldError = form.getFieldError,
          getFieldsError = form.getFieldsError,
          getFieldDecorator = form.getFieldDecorator;

      var editVisible = visible.edit;
      var editType = selectedItem.editType,
          id = selectedItem.id,
          wf_id = selectedItem.wf_id,
          title = selectedItem.title,
          creator = selectedItem.creator,
          create_time = selectedItem.create_time;

      var modalTitle = editType === 'edit' ? '编辑' : '删除';
      var titleError = isFieldTouched('title') && getFieldError('title');
      var wf_idError = isFieldTouched('wf_id') && getFieldError('wf_id');
      var reasonError = isFieldTouched('reason') && getFieldError('reason');
      var isDisabledBtn = editType === 'edit' ? (0, _hasErrors2.default)(getFieldsError(['title', 'wf_id'])) : (0, _hasErrors2.default)(getFieldsError(['reason']));
      var ModalFooter = function ModalFooter() {
        return _react2.default.createElement(
          _react2.default.Fragment,
          null,
          _react2.default.createElement(
            _button2.default,
            { onClick: _this2.closeModal },
            '\u53D6\u6D88'
          ),
          _react2.default.createElement(
            _button2.default,
            { type: 'primary', disabled: isDisabledBtn, onClick: _this2.ensure },
            '\u786E\u5B9A'
          )
        );
      };
      return _react2.default.createElement(
        _modal2.default,
        _extends({ visible: editVisible, title: modalTitle + '----\u4E00\u7EA7\u660E\u7EC6', onCancel: this.closeModal, footer: _react2.default.createElement(ModalFooter, null) }, _commonModal2.default),
        _react2.default.createElement(
          _form2.default,
          null,
          _react2.default.createElement(
            _form2.default.Item,
            _extends({ label: '\u7F16\u53F7' }, _commonForm2.default),
            id
          ),
          _react2.default.createElement(
            _form2.default.Item,
            _extends({
              help: wf_idError ? wf_idError : '',
              validateStatus: wf_idError ? 'error' : '',
              label: '\u6548\u7387100\u7F16\u53F7' }, _commonForm2.default),
            editType !== 'edit' ? wf_id : getFieldDecorator('wf_id', {
              initialValue: wf_id,
              rules: [{
                required: true,
                message: '请输入效率100编号'
              }]
            })(_react2.default.createElement(_input2.default, null))
          ),
          _react2.default.createElement(
            _form2.default.Item,
            _extends({
              label: '\u6807\u9898',
              help: titleError ? titleError : '',
              validateStatus: titleError ? 'error' : ''
            }, _commonForm2.default),
            editType !== 'edit' ? title : getFieldDecorator('title', {
              initialValue: title,
              rules: [{
                required: true,
                message: '请输入标题'
              }]
            })(_react2.default.createElement(_input2.default, null))
          ),
          _react2.default.createElement(
            _form2.default.Item,
            _extends({ label: '\u521B\u5EFA\u4EBA' }, _commonForm2.default),
            creator
          ),
          _react2.default.createElement(
            _form2.default.Item,
            _extends({ label: '\u521B\u5EFA\u65F6\u95F4' }, _commonForm2.default),
            create_time
          ),
          editType === 'edit' ? null : _react2.default.createElement(
            _form2.default.Item,
            _extends({
              style: { display: editType === 'edit' ? 'none' : 'block' },
              help: reasonError ? reasonError : '',
              validateStatus: reasonError ? 'error' : '',
              label: '\u5220\u9664\u539F\u56E0' }, _commonForm2.default),
            getFieldDecorator('reason', {
              rules: [{
                required: true,
                message: '请输入删除原因'
              }]
            })(_react2.default.createElement(_input2.default, { placeholder: '\u5FC5\u586B' }))
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.form.validateFields();
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return EditA;
}(_react.Component);

var _default = _form2.default.create()(EditA);

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(EditA, 'EditA', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\edit_a\\edit_a.js');
  reactHotLoader.register(_default, 'default', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\edit_a\\edit_a.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvcHJvZ3Jlc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3Byb2dyZXNzL3Byb2dyZXNzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9wcm9ncmVzcy9zdHlsZS9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3Byb2dyZXNzL3N0eWxlL2luZGV4LmNzcz9kMWJmIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy91cGxvYWQvRHJhZ2dlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvdXBsb2FkL1VwbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvdXBsb2FkL1VwbG9hZExpc3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3VwbG9hZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvdXBsb2FkL3N0eWxlL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvdXBsb2FkL3N0eWxlL2luZGV4LmNzcz83ZmExIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy91cGxvYWQvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3Byb2dyZXNzL3N0eWxlL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvdXBsb2FkL3N0eWxlL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9iYXRjaF9wcm9jZXNzL2JhdGNoX3Byb2Nlc3MuY3NzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19EYXRhVmlldy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fUHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU2V0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TZXRDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fV2Vha01hcC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5SW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5SW5jbHVkZXNXaXRoLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheVB1c2guanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5U29tZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUZpbmRJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldEFsbEtleXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VIYXNJbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUluZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc0VxdWFsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNFcXVhbERlZXAuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc01hdGNoLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNOYU4uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJdGVyYXRlZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VNYXRjaGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlTWF0Y2hlc1Byb3BlcnR5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eURlZXAuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VVbmlxLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlU2V0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19lcXVhbEFycmF5cy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZXF1YWxCeVRhZy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZXF1YWxPYmplY3RzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRBbGxLZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRNYXRjaERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNTdHJpY3RDb21wYXJhYmxlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBUb0FycmF5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXRjaGVzU3RyaWN0Q29tcGFyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc2V0Q2FjaGVBZGQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3NldENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRUb0FycmF5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdHJpY3RJbmRleE9mLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL2hhc0luLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvbm9vcC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9zdHViQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdW5pcUJ5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbW9ieC1yZWFjdC9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYy1wcm9ncmVzcy9lcy9DaXJjbGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYy1wcm9ncmVzcy9lcy9MaW5lLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmMtcHJvZ3Jlc3MvZXMvZW5oYW5jZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYy1wcm9ncmVzcy9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JjLXByb2dyZXNzL2VzL3R5cGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmMtdXBsb2FkL2VzL0FqYXhVcGxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JjLXVwbG9hZC9lcy9JZnJhbWVVcGxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JjLXVwbG9hZC9lcy9VcGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYy11cGxvYWQvZXMvYXR0ci1hY2NlcHQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYy11cGxvYWQvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYy11cGxvYWQvZXMvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JjLXVwbG9hZC9lcy91aWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYy11cGxvYWQvbm9kZV9tb2R1bGVzL3dhcm5pbmcvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcvY29tbW9uLWZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2NvbW1vbi1tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2V4cG9ydC1maWxlLmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvaGFuZGxlLWZvcm1kYXRhLmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvaGFuZGxlLWpzb24uanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9oYW5kbGUtdXJsZW5jb2RlLmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvaGFzLWVycm9ycy5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vaGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9iYXRjaF9wcm9jZXNzL2JhdGNoX3Byb2Nlc3MuY3NzPzg2ODMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYmF0Y2hfcHJvY2Vzcy9iYXRjaF9wcm9jZXNzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2JhdGNoX3Byb2Nlc3Mvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY3JlYXRlX2EvY3JlYXRlX2EuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZWRpdF9hL2VkaXRfYS5qcyJdLCJuYW1lcyI6WyJsYWJlbENvbCIsInNwYW4iLCJndXR0ZXIiLCJ3cmFwcGVyQ29sIiwid2lkdGgiLCJtYXNrQ2xvc2FibGUiLCJleHBvcnRGaWxlIiwidXJsIiwiZGF0YSIsIndpbmRvdyIsIm9wZW4iLCJoYW5kbGVGb3JtRGF0YSIsInJldCIsIkZvcm1EYXRhIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIkFycmF5IiwiaXNBcnJheSIsImsiLCJmb3JFYWNoIiwiYXBwZW5kIiwiZCIsImhhbmRsZUpzb24iLCJKU09OIiwic3RyaW5naWZ5IiwiaGFuZGxlVXJsRW5jb2RlIiwia2V5Iiwiam9pbiIsImVycm9ycyIsInNvbWUiLCJyZXF1ZXN0IiwibWV0aG9kIiwicG9zdFR5cGUiLCJzdWNjZXNzIiwiZmFpbCIsImNvbXBsZXRlIiwiRXJyb3IiLCJ4bWwiLCJYTUxIdHRwUmVxdWVzdCIsInBvc3REYXRhIiwic2V0UmVxdWVzdEhlYWRlciIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsImNvZGUiLCJ1bmRlZmluZWQiLCJlIiwicGFyc2VJbnQiLCJhbGVydCIsInNlbmQiLCJoaXN0b3J5IiwiT3B0aW9uIiwiU2VhcmNoIiwiQmF0Y2hQcm9jZXNzIiwiY29sdW1ucyIsInRpdGxlIiwiZGF0YUluZGV4IiwicmVuZGVyIiwidGV4dCIsInJlY29yZCIsIm9wZXJhdGUiLCJlZGl0SXRlbSIsImRlbGV0ZUl0ZW0iLCJnb1RvRGV0YWlsIiwiaWQiLCJ3Zl9pZCIsImNyZWF0ZUEiLCJzZXRDcmVhdGVWaXNpYmxlIiwiZmV0Y2hGaWxlQUxpc3QiLCJrZXl3b3JkIiwidGFibGUiLCJjb25zb2xlIiwibG9nIiwic2V0RmlsZUFMaXN0IiwiYm9vbCIsInNldFZpc2libGUiLCJjcmVhdGUiLCJzZXRFZGl0VmlzaWJsZSIsImVkaXQiLCJpdGVtIiwic2V0U2VsZWN0ZWRJdGVtIiwiYXNzaWduIiwiZWRpdFR5cGUiLCJwdXNoIiwidmlzaWJsZSIsImxpc3QiLCJzZWxlY3RlZEl0ZW0iLCJmaWxlQUxpc3QiLCJkYXRhU291cmNlIiwiZnJvbSIsIndmX2lkcyIsInRpdGxlcyIsImNyZWF0b3JzIiwiZ2V0RmllbGREZWNvcmF0b3IiLCJwcm9wcyIsImZvcm0iLCJTZWxlY3RCYXIiLCJpbml0aWFsVmFsdWUiLCJzZWxlY3QiLCJ0IiwiYyIsImZyIiwiYWN0aW9uX2JhciIsIkNvbXBvbmVudCIsIlN0b3JlIiwidHlwZSIsImFsbFdmX2lkcyIsImFsbFRpdGxlcyIsImFsbENyZWF0b3JzIiwiZmlsZSIsImNyZWF0b3IiLCJTZXQiLCJzdG9yZSIsIkNyZWF0ZUEiLCJzdGF0ZSIsImZpbGVMaXN0IiwidXBsb2FkUHJvcHMiLCJvbkNoYW5nZSIsInNldFN0YXRlIiwiYmVmb3JlVXBsb2FkIiwib25SZW1vdmUiLCJzZXRGaWVsZHNWYWx1ZSIsInZhbGlkYXRlRmllbGRzIiwiZ2V0RmllbGRzVmFsdWUiLCJnZXRGaWVsZHNFcnJvciIsImNhbkNyZWF0ZSIsInZhbHVlcyIsImNyZWF0ZVZpc2libGUiLCJpc0ZpZWxkVG91Y2hlZCIsImdldEZpZWxkRXJyb3IiLCJ3Zl9pZEVyciIsInRpdGxlRXJyIiwiZmlsZUVyciIsIk1vZGFsRm9vdGVyIiwicnVsZXMiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJFZGl0QSIsImVuc3VyZSIsInNlbGVjdEl0ZW0iLCJjYW5Qb3N0IiwiX2VkaXQiLCJfZGVsZXRlIiwiY2xvc2VNb2RhbCIsInJlYXNvbiIsImVkaXRWaXNpYmxlIiwiY3JlYXRlX3RpbWUiLCJtb2RhbFRpdGxlIiwidGl0bGVFcnJvciIsIndmX2lkRXJyb3IiLCJyZWFzb25FcnJvciIsImlzRGlzYWJsZWRCdG4iLCJkaXNwbGF5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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztB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O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7O0FBTUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7OztBQVVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhDQUE4Qzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdCQUF3Qjs7QUFFeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUEscUpBQThELHVGQUE2QyxFQUFFLGtIQUFxRSwrQ0FBK0M7O0FBRWpPO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLHlEQUFvQixrRUFBNkI7QUFDbkUscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ovQlI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzJCO0FBQzNCO0FBQ0E7QUFDa0M7O0FBRWxDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRCwwRkFBOEI7QUFDOUI7QUFDQSxDQUFDOztBQUVELDZGQUFpQztBQUNqQztBQUNBLENBQUM7O0FBRUQsa0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25JQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzJCO0FBQzNCO0FBQ2tDOztBQUVsQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUEsZ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBLHlFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7O0FBRVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxtRUFBbUUsYUFBYTtBQUNoRjtBQUNBOztBQUVBLHVRQUEyTSwrREFBZ0IsaUJBQWlCO0FBQzVPO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Qsb0NBQW9DO0FBQ3BDLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtRkFBNEM7QUFDNUMsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsNkU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLG1FQUFtRSxhQUFhO0FBQ2hGO0FBQ0E7O0FBRUEsMlFBQStNLG1CQUFtQixpQkFBaUI7QUFDblA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUU7QUFDekU7QUFDQTtBQUNBLHNKQUFzSixVQUFVLFNBQVMsU0FBUyxpQkFBaUIsME1BQTBNLGNBQWMsa0JBQWtCLGdCQUFnQiwwR0FBMEcsTUFBTSxRQUFRLGNBQWMsaUJBQWlCLGVBQWU7QUFDbm1CO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSwyQkFBMkIsbUJBQW1CLDJDQUEyQyx3QkFBd0Isb0JBQW9CLFNBQVM7QUFDOU07QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrRkFBbUM7QUFDbkM7QUFDQSxPQUFPO0FBQ1AsbUZBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUZBQTJCLGtDQUFrQztBQUM3RCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsK0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxtRUFBbUUsYUFBYTtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUtBQW9FLGVBQWUseUJBQXlCO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0tBQStELGVBQWUseUJBQXlCO0FBQ3ZHO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsdUU7Ozs7Ozs7Ozs7OztBQ2hIQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUMsRTs7Ozs7Ozs7Ozs7OztBQ3ZCRDtBQUFBO0FBQ0E7O0FBRUEsZ0g7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QixrQkFBa0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7QUNoR0E7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixXQUFXO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VDM0RlO0FBQ2JBLFlBQVU7QUFDUkMsVUFBTSxDQURFO0FBRVJDLFlBQVE7QUFGQSxHQURHO0FBS2JDLGNBQVk7QUFDVkYsVUFBTSxFQURJO0FBRVZDLFlBQVE7QUFGRTtBQUxDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQ0FBO0FBQ2JFLFNBQU8sR0FETTtBQUViQyxnQkFBYztBQUZELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FmOzs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQyxhQUFhLFNBQWJBLFVBQWEsT0FBMkI7QUFBQSx3QkFBekJDLEdBQXlCO0FBQUEsUUFBekJBLEdBQXlCLDRCQUFuQixFQUFtQjtBQUFBLHlCQUFmQyxJQUFlO0FBQUEsUUFBZkEsSUFBZSw2QkFBUixFQUFROztBQUN4Q0MsV0FBT0MsSUFBUCxDQUFZSCxNQUFNLEdBQU4sR0FBWSwrQkFBZ0JDLElBQWhCLENBQXhCO0FBQ0gsQ0FGRDtlQUdlRixVOzs7Ozs7Ozs7Ozs7OzRCQUhYQSxVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNESixJQUFJSyxpQkFBaUIsU0FBakJBLGNBQWlCLENBQUNILElBQUQsRUFBVTtBQUMzQixRQUFJSSxNQUFNLElBQUlDLFFBQUosRUFBVjtBQUNBQyxXQUFPQyxJQUFQLENBQVlQLElBQVosRUFBa0JRLEdBQWxCLENBQXNCLGFBQUs7QUFDdkIsWUFBR0MsTUFBTUMsT0FBTixDQUFjVixLQUFLVyxDQUFMLENBQWQsQ0FBSCxFQUEwQjtBQUN0QlgsaUJBQUtXLENBQUwsRUFBUUMsT0FBUixDQUFnQixhQUFLO0FBQ2pCUixvQkFBSVMsTUFBSixDQUFXRixDQUFYLEVBQWFHLENBQWI7QUFDSCxhQUZEO0FBR0gsU0FKRCxNQUlLO0FBQ0RWLGdCQUFJUyxNQUFKLENBQVdGLENBQVgsRUFBYVgsS0FBS1csQ0FBTCxDQUFiO0FBQ0g7QUFDSixLQVJEO0FBU0EsV0FBT1AsR0FBUDtBQUNILENBWkQ7ZUFhZUQsYzs7Ozs7Ozs7Ozs7Ozs0QkFiWEEsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUosSUFBSVksYUFBYSxTQUFiQSxVQUFhLENBQUNmLElBQUQsRUFBVTtBQUN2QixXQUFPZ0IsS0FBS0MsU0FBTCxDQUFlakIsSUFBZixDQUFQO0FBQ0gsQ0FGRDtlQUdlZSxVOzs7Ozs7Ozs7Ozs7OzRCQUhYQSxVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBSixJQUFJRyxrQkFBa0IsU0FBbEJBLGVBQWtCLENBQUNsQixJQUFELEVBQVU7QUFDNUIsV0FBT00sT0FBT0MsSUFBUCxDQUFZUCxJQUFaLEVBQWtCUSxHQUFsQixDQUFzQixlQUFPO0FBQ2hDLGVBQU9XLE1BQU0sR0FBTixHQUFZbkIsS0FBS21CLEdBQUwsQ0FBbkI7QUFDSCxLQUZNLEVBRUpDLElBRkksQ0FFQyxHQUZELENBQVA7QUFHSCxDQUpEO2VBS2VGLGU7Ozs7Ozs7Ozs7Ozs7NEJBTFhBLGU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQ0FXLGtCQUFDRyxNQUFELEVBQVk7QUFDekIsU0FBT2YsT0FBT0MsSUFBUCxDQUFZYyxNQUFaLEVBQW9CQyxJQUFwQixDQUF5QjtBQUFBLFdBQU9ELE9BQU9GLEdBQVAsQ0FBUDtBQUFBLEdBQXpCLENBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkQ7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsU0FBU0ksT0FBVCxPQUFrSTtBQUFBLFFBQS9HeEIsR0FBK0csUUFBL0dBLEdBQStHO0FBQUEsMkJBQTFHeUIsTUFBMEc7QUFBQSxRQUExR0EsTUFBMEcsK0JBQWpHLE1BQWlHO0FBQUEsNkJBQXpGQyxRQUF5RjtBQUFBLFFBQXpGQSxRQUF5RixpQ0FBOUUsTUFBOEU7QUFBQSx5QkFBdEV6QixJQUFzRTtBQUFBLFFBQXRFQSxJQUFzRSw2QkFBL0QsRUFBK0Q7QUFBQSw0QkFBM0QwQixPQUEyRDtBQUFBLFFBQTNEQSxPQUEyRCxnQ0FBakQsWUFBTSxDQUFFLENBQXlDO0FBQUEseUJBQXZDQyxJQUF1QztBQUFBLFFBQXZDQSxJQUF1Qyw2QkFBaEMsWUFBTSxDQUFFLENBQXdCO0FBQUEsNkJBQXRCQyxRQUFzQjtBQUFBLFFBQXRCQSxRQUFzQixpQ0FBWCxZQUFNLENBQUUsQ0FBRzs7QUFDOUgsUUFBRyxDQUFDN0IsR0FBSixFQUFRO0FBQ0osY0FBTSxJQUFJOEIsS0FBSixDQUFVLFdBQVYsQ0FBTjtBQUNIO0FBQ0QsUUFBSUMsTUFBTSxJQUFJQyxjQUFKLEVBQVY7QUFDQUQsUUFBSTVCLElBQUosQ0FBU3NCLE1BQVQsRUFBaUJ6QixHQUFqQjtBQUNBLFFBQUlpQyxpQkFBSjtBQUNBLFlBQVFQLFFBQVI7QUFDSSxhQUFLLE1BQUw7QUFDSUssZ0JBQUlHLGdCQUFKLENBQXFCLGNBQXJCLEVBQXFDLGtCQUFyQztBQUNBRCx1QkFBVywwQkFBV2hDLElBQVgsQ0FBWDtBQUNBO0FBQ0osYUFBSyxVQUFMO0FBQ0k7QUFDQWdDLHVCQUFXLDhCQUFlaEMsSUFBZixDQUFYO0FBQ0E7QUFDSjtBQUNJOEIsZ0JBQUlHLGdCQUFKLENBQXFCLGNBQXJCLEVBQXFDLGtCQUFyQztBQUNBRCx1QkFBVywwQkFBV2hDLElBQVgsQ0FBWDtBQVhSO0FBYUE4QixRQUFJSSxrQkFBSixHQUF5QixZQUFNO0FBQzNCLFlBQUdKLElBQUlLLFVBQUosS0FBbUIsQ0FBdEIsRUFBd0I7QUFDcEIsZ0JBQUdMLElBQUlNLE1BQUosS0FBZSxHQUFsQixFQUFzQjtBQUNsQixvQkFBSXBDLFFBQU9nQixLQUFLcUIsS0FBTCxDQUFXUCxJQUFJUSxZQUFmLENBQVg7QUFDQSxvQkFBSUMsT0FBT3ZDLE1BQUt1QyxJQUFoQjtBQUNBLG9CQUFHO0FBQ0Msd0JBQUdBLFNBQVNDLFNBQVosRUFBdUIsTUFBTSxJQUFJWCxLQUFKLENBQVUscUJBQVYsQ0FBTjtBQUMxQixpQkFGRCxDQUVDLE9BQU1ZLENBQU4sRUFBUTtBQUNMekMsNEJBQU9nQixLQUFLcUIsS0FBTCxDQUFXckMsS0FBWCxDQUFQO0FBQ0g7QUFDRCxvQkFBRzBDLFNBQVMxQyxNQUFLdUMsSUFBZCxNQUF3QixHQUEzQixFQUErQjtBQUMzQmIsNEJBQVExQixLQUFSO0FBQ0gsaUJBRkQsTUFFSztBQUNEMkIseUJBQUszQixLQUFMO0FBQ0g7QUFDSixhQWJELE1BYUs7QUFDRDJDLHNCQUFNLGdCQUFOO0FBQ0FoQjtBQUNIO0FBQ0RDO0FBQ0g7QUFDSixLQXJCRDtBQXNCQUUsUUFBSWMsSUFBSixDQUFTWixRQUFUO0FBQ0g7ZUFDY1QsTzs7Ozs7Ozs7Ozs7Ozs0QkE1Q05BLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hUOzs7Ozs7Ozs7Ozs7QUFDQSxJQUFJc0IsVUFBVyxrQ0FBZjtlQUNlQSxPOzs7Ozs7Ozs7Ozs7OzBCQURYQSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBSjs7QUFFQTs7QUFFQTtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBLEVBQUU7O0FBRUYsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBOzs7O0FBR0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVJBLElBQU1DLFNBQVMsaUJBQU9BLE1BQXRCOztBQVNBLElBQU1DLFNBQVMsZ0JBQU1BLE1BQXJCOztJQUVNQyxZOzs7Ozs7Ozs7Ozs7OztzTUFDRkMsTyxHQUFVLENBQUM7QUFDUEMsbUJBQU8sSUFEQTtBQUVQQyx1QkFBVztBQUZKLFNBQUQsRUFHUDtBQUNDRCxtQkFBTyxTQURSO0FBRUNDLHVCQUFXO0FBRlosU0FITyxFQU1QO0FBQ0NELG1CQUFPLElBRFI7QUFFQ0MsdUJBQVc7QUFGWixTQU5PLEVBU1A7QUFDQ0QsbUJBQU8sS0FEUjtBQUVDQyx1QkFBVztBQUZaLFNBVE8sRUFZUDtBQUNDRCxtQkFBTyxNQURSO0FBRUNDLHVCQUFXO0FBRlosU0FaTyxFQWVQO0FBQ0NELG1CQUFPLElBRFI7QUFFQ0Usb0JBQVEsZ0JBQUNDLElBQUQsRUFBT0MsTUFBUDtBQUFBLHVCQUNKO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSwwQkFBRyxXQUFXLHdCQUFNQyxPQUFwQixFQUE2QixTQUFTO0FBQUEsdUNBQU0sTUFBS0MsUUFBTCxDQUFjRixNQUFkLENBQU47QUFBQSw2QkFBdEM7QUFBQTtBQUFBLHFCQURKO0FBRUk7QUFBQTtBQUFBLDBCQUFHLFdBQVcsd0JBQU1DLE9BQXBCLEVBQTZCLFNBQVM7QUFBQSx1Q0FBTSxNQUFLRSxVQUFMLENBQWdCSCxNQUFoQixDQUFOO0FBQUEsNkJBQXRDO0FBQUE7QUFBQSxxQkFGSjtBQUdJO0FBQUE7QUFBQSwwQkFBRyxXQUFXLHdCQUFNQyxPQUFwQixFQUE2QixTQUFTO0FBQUEsdUNBQU0sTUFBS0csVUFBTCxDQUFnQkosT0FBT0ssRUFBdkIsRUFBMEJMLE9BQU9NLEtBQWpDLENBQU47QUFBQSw2QkFBdEM7QUFBQTtBQUFBO0FBSEosaUJBREk7QUFBQTtBQUZULFNBZk8sQyxRQXdGVkMsTyxHQUFVLFlBQU07QUFDWixrQkFBS0MsZ0JBQUwsQ0FBc0IsSUFBdEI7QUFDSCxTLFFBQ0RDLGMsR0FBaUIsWUFBTTtBQUNuQixtQ0FBUTtBQUNKaEUscUJBQUssb0JBREQ7QUFFSkMsc0JBQU07QUFDRmdFLDZCQUFTO0FBRFAsaUJBRkY7QUFLSnRDLHlCQUFTLHdCQUFhO0FBQUEsd0JBQVh1QyxLQUFXLFNBQVhBLEtBQVc7O0FBQ2xCQyw0QkFBUUMsR0FBUixDQUFZRixLQUFaO0FBQ0Esb0NBQU1HLFlBQU4sQ0FBbUJILEtBQW5CO0FBQ0g7QUFSRyxhQUFSO0FBVUgsUyxRQUNESCxnQixHQUFtQixVQUFDTyxJQUFELEVBQVU7QUFDekIsNEJBQU1DLFVBQU4sQ0FBaUI7QUFDYkMsd0JBQVFGO0FBREssYUFBakI7QUFHSCxTLFFBQ0RHLGMsR0FBaUIsVUFBQ0gsSUFBRCxFQUFVO0FBQ3ZCLDRCQUFNQyxVQUFOLENBQWlCO0FBQ2JHLHNCQUFNSjtBQURPLGFBQWpCO0FBR0gsUyxRQUNEYixRLEdBQVcsVUFBQ2tCLElBQUQsRUFBVTtBQUNqQiw0QkFBTUMsZUFBTixDQUFzQnJFLE9BQU9zRSxNQUFQLENBQWMsRUFBZCxFQUFrQkYsSUFBbEIsRUFBd0I7QUFDMUNHLDBCQUFVO0FBRGdDLGFBQXhCLENBQXRCO0FBR0EsNEJBQU1QLFVBQU4sQ0FBaUI7QUFDYkcsc0JBQU07QUFETyxhQUFqQjtBQUdILFMsUUFDRGhCLFUsR0FBYSxVQUFDaUIsSUFBRCxFQUFVO0FBQ25CLDRCQUFNQyxlQUFOLENBQXNCckUsT0FBT3NFLE1BQVAsQ0FBYyxFQUFkLEVBQWtCRixJQUFsQixFQUF3QjtBQUMxQ0csMEJBQVU7QUFEZ0MsYUFBeEIsQ0FBdEI7QUFHQSw0QkFBTVAsVUFBTixDQUFpQjtBQUNiRyxzQkFBTTtBQURPLGFBQWpCO0FBR0gsUyxRQUNEZixVLEdBQWEsVUFBQ0MsRUFBRCxFQUFJQyxLQUFKLEVBQWM7QUFDdkIsOEJBQVFrQixJQUFSLGVBQXlCbkIsRUFBekIsU0FBK0JDLEtBQS9CO0FBQ0gsUzs7Ozs7aUNBMUdPO0FBQUEsZ0JBQ0VtQixPQURGLG1CQUNFQSxPQURGO0FBQUEsZ0JBQ1dDLElBRFgsbUJBQ1dBLElBRFg7QUFBQSxnQkFDaUJDLFlBRGpCLG1CQUNpQkEsWUFEakI7QUFBQSxnQkFDK0JDLFNBRC9CLG1CQUMrQkEsU0FEL0I7O0FBRUosZ0JBQUlDLGFBQWExRSxNQUFNMkUsSUFBTixDQUFXRixTQUFYLENBQWpCO0FBRkksZ0JBR0VHLE1BSEYsR0FHK0JMLElBSC9CLENBR0VLLE1BSEY7QUFBQSxnQkFHVUMsTUFIVixHQUcrQk4sSUFIL0IsQ0FHVU0sTUFIVjtBQUFBLGdCQUdrQkMsUUFIbEIsR0FHK0JQLElBSC9CLENBR2tCTyxRQUhsQjtBQUFBLGdCQUlFQyxpQkFKRixHQUl3QixLQUFLQyxLQUFMLENBQVdDLElBSm5DLENBSUVGLGlCQUpGOztBQUtKLGdCQUFJRyxZQUFZLFNBQVpBLFNBQVk7QUFBQSx1QkFDWjtBQUFBO0FBQUEsc0JBQU0sUUFBTyxRQUFiO0FBQ0k7QUFBQSx1Q0FBTSxJQUFOO0FBQUEsMEJBQVcsT0FBTSw2QkFBakI7QUFDSUgsMENBQWtCLE9BQWxCLEVBQTJCO0FBQ3ZCSSwwQ0FBYztBQURTLHlCQUEzQixFQUdJO0FBQUE7QUFBQSw4QkFBUSxXQUFXLHdCQUFNQyxNQUF6QjtBQUNJO0FBQUMsc0NBQUQ7QUFBQSxrQ0FBUSxPQUFNLEdBQWQ7QUFBQTtBQUFBLDZCQURKO0FBQ2tDUixtQ0FBTzdFLEdBQVAsQ0FBVztBQUFBLHVDQUN6QztBQUFDLDBDQUFEO0FBQUEsc0NBQVEsS0FBS21ELEVBQWIsRUFBaUIsT0FBT0EsRUFBeEI7QUFBNkJBO0FBQTdCLGlDQUR5QztBQUFBLDZCQUFYO0FBRGxDLHlCQUhKO0FBREoscUJBREo7QUFXSTtBQUFBLHVDQUFNLElBQU47QUFBQSwwQkFBVyxPQUFNLGNBQWpCO0FBQ0k2QiwwQ0FBa0IsT0FBbEIsRUFBMkI7QUFDdkJJLDBDQUFjO0FBRFMseUJBQTNCLEVBR0k7QUFBQTtBQUFBLDhCQUFRLFdBQVcsd0JBQU1DLE1BQXpCO0FBQ0k7QUFBQyxzQ0FBRDtBQUFBLGtDQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsNkJBREo7QUFDa0NQLG1DQUFPOUUsR0FBUCxDQUFXO0FBQUEsdUNBQ3pDO0FBQUMsMENBQUQ7QUFBQSxzQ0FBUSxLQUFLc0YsQ0FBYixFQUFnQixPQUFPQSxDQUF2QjtBQUEyQkE7QUFBM0IsaUNBRHlDO0FBQUEsNkJBQVg7QUFEbEMseUJBSEo7QUFESixxQkFYSjtBQXFCSTtBQUFBLHVDQUFNLElBQU47QUFBQSwwQkFBVyxPQUFNLG9CQUFqQjtBQUNJTiwwQ0FBa0IsU0FBbEIsRUFBNkI7QUFDekJJLDBDQUFjO0FBRFcseUJBQTdCLEVBR0k7QUFBQTtBQUFBLDhCQUFRLFdBQVcsd0JBQU1DLE1BQXpCO0FBQ0k7QUFBQyxzQ0FBRDtBQUFBLGtDQUFRLE9BQU0sR0FBZDtBQUFBO0FBQUEsNkJBREo7QUFDa0NOLHFDQUFTL0UsR0FBVCxDQUFhO0FBQUEsdUNBQzNDO0FBQUMsMENBQUQ7QUFBQSxzQ0FBUSxLQUFLdUYsQ0FBYixFQUFnQixPQUFPQSxDQUF2QjtBQUEyQkE7QUFBM0IsaUNBRDJDO0FBQUEsNkJBQWI7QUFEbEMseUJBSEo7QUFESixxQkFyQko7QUErQkk7QUFBQSx1Q0FBTSxJQUFOO0FBQUE7QUFDSTtBQUFBO0FBQUEsOEJBQVEsTUFBSyxTQUFiO0FBQUE7QUFBQTtBQURKLHFCQS9CSjtBQWtDSTtBQUFBLHVDQUFNLElBQU47QUFBQSwwQkFBVyxXQUFXLHdCQUFNQyxFQUE1QjtBQUNJLHNEQUFDLE1BQUQsSUFBUSxhQUFZLGtEQUFwQixFQUErQixpQkFBL0I7QUFESjtBQWxDSixpQkFEWTtBQUFBLGFBQWhCO0FBd0NBLG1CQUNJO0FBQUE7QUFBQSxrQkFBSyxXQUFXLGFBQWhCO0FBQ0ksOENBQUMsU0FBRCxPQURKO0FBRUk7QUFBQTtBQUFBLHNCQUFLLFdBQVcsd0JBQU1DLFVBQXRCO0FBQ0k7QUFBQTtBQUFBLDBCQUFRLE1BQUssU0FBYixFQUF1QixTQUFTLEtBQUtwQyxPQUFyQztBQUFBO0FBQUEscUJBREo7QUFHSTtBQUFBO0FBQUEsMEJBQVEsU0FBUyxLQUFLRSxjQUF0QjtBQUFBO0FBQUE7QUFISixpQkFGSjtBQU9JLGlFQUFPLFNBQVMsS0FBS2QsT0FBckIsRUFBOEIsWUFBWWtDLFVBQTFDLEVBQXNELFFBQU8sSUFBN0QsR0FQSjtBQVFJLG9FQUFTLFlBQVksS0FBS3JCLGdCQUExQixFQUE0QyxTQUFTaUIsT0FBckQsR0FSSjtBQVNJLGtFQUFPLFlBQVksS0FBS1AsY0FBeEIsRUFBd0MsU0FBU08sT0FBakQsRUFBMEQsY0FBY0UsWUFBeEU7QUFUSixhQURKO0FBYUg7Ozs0Q0FDa0I7QUFDZixpQkFBS2xCLGNBQUw7QUFDQTtBQUNIOzs7O0FBNkNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7RUE1SXVCLGdCQUFNbUMsUzs7ZUE4SWxCLGVBQUszQixNQUFMLEdBQWN2QixZQUFkLEM7Ozs7Ozs7Ozs7Ozs7OzRCQXpKVEYsTTs0QkFTQUMsTTs0QkFFQUMsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUNNbUQsSzs7Ozs7Ozs7Ozs7OzsrQkFNT0MsSSxFQUFLO0FBQ2QsV0FBS3JCLE9BQUwsR0FBZXpFLE9BQU9zRSxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFLRyxPQUF2QixFQUFnQ3FCLElBQWhDLENBQWY7QUFDRDs7O2lDQUdZcEIsSSxFQUFLO0FBQ2hCLFdBQUtFLFNBQUwsR0FBaUJGLElBQWpCO0FBQ0Q7OztvQ0FxQmVOLEksRUFBSztBQUNuQixXQUFLTyxZQUFMLEdBQW9CUCxJQUFwQjtBQUNEOzs7Ozs7Ozt3QkFyQlM7QUFDUixVQUFJMkIsWUFBWSxFQUFoQjtBQUFBLFVBQ0VDLFlBQVksRUFEZDtBQUFBLFVBRUVDLGNBQWMsRUFGaEI7QUFHQSxXQUFLckIsU0FBTCxDQUFlMUUsR0FBZixDQUFtQixnQkFBUTtBQUN6QjZGLGtCQUFVdkIsSUFBVixDQUFlMEIsS0FBSzVDLEtBQXBCO0FBQ0EwQyxrQkFBVXhCLElBQVYsQ0FBZTBCLEtBQUt0RCxLQUFwQjtBQUNBcUQsb0JBQVl6QixJQUFaLENBQWlCMEIsS0FBS0MsT0FBdEI7QUFDRCxPQUpEO0FBS0EsYUFBTztBQUNMcEIsZ0JBQVE1RSxNQUFNMkUsSUFBTixDQUFXLElBQUlzQixHQUFKLENBQVFMLFNBQVIsQ0FBWCxDQURIO0FBRUxmLGdCQUFRN0UsTUFBTTJFLElBQU4sQ0FBVyxJQUFJc0IsR0FBSixDQUFRSixTQUFSLENBQVgsQ0FGSDtBQUdMZixrQkFBVTlFLE1BQU0yRSxJQUFOLENBQVcsSUFBSXNCLEdBQUosQ0FBUUgsV0FBUixDQUFYO0FBSEwsT0FBUDtBQUtEOzs7Ozs7O1dBNUJxQjtBQUNwQmhDLGNBQVEsS0FEWTtBQUVwQkUsWUFBTTtBQUZjLEs7Ozs7O1dBUUUsRTs7Ozs7V0FxQkc7QUFDekI7QUFEeUIsSzs7Ozs7QUFTN0IsSUFBSWtDLFFBQVEsSUFBSVIsS0FBSixFQUFaO2VBQ2VRLEs7Ozs7Ozs7Ozs7Ozs7MEJBeENUUixLOzBCQXVDRlEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDSjs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQyxPOzs7Ozs7Ozs7Ozs7Ozs0TEFDRkMsSyxHQUFRO0FBQ0pDLHNCQUFVO0FBRE4sUyxRQUdSQyxXLEdBQWM7QUFDVkMsc0JBQVUseUJBQWdCO0FBQUEsb0JBQWRGLFFBQWMsU0FBZEEsUUFBYzs7QUFDdEIsc0JBQUtHLFFBQUwsQ0FBYztBQUNWSDtBQURVLGlCQUFkO0FBR0gsYUFMUztBQU1WSSwwQkFBYztBQUFBLHVCQUFNLEtBQU47QUFBQSxhQU5KO0FBT1ZDLHNCQUFVLG9CQUFNO0FBQ1osc0JBQUsxQixLQUFMLENBQVdDLElBQVgsQ0FBZ0IwQixjQUFoQixDQUErQjtBQUMzQlosMEJBQU07QUFEcUIsaUJBQS9CO0FBR0Esc0JBQUtTLFFBQUwsQ0FBYztBQUNWSCw4QkFBVTtBQURBLGlCQUFkLEVBRUcsWUFBTTtBQUNMLDBCQUFLckIsS0FBTCxDQUFXQyxJQUFYLENBQWdCMkIsY0FBaEI7QUFDSCxpQkFKRDtBQUtIO0FBaEJTLFMsUUEyRmR4RCxPLEdBQVUsWUFBTTtBQUFBLG1DQUMyQixNQUFLNEIsS0FBTCxDQUFXQyxJQUR0QztBQUFBLGdCQUNQNEIsY0FETyxvQkFDUEEsY0FETztBQUFBLGdCQUNTQyxjQURULG9CQUNTQSxjQURUOztBQUVackQsb0JBQVFDLEdBQVIsQ0FBWSxNQUFLMEMsS0FBTCxDQUFXQyxRQUF2QjtBQUNBLGdCQUFJVSxZQUFZLENBQUMseUJBQVVELGdCQUFWLENBQWpCO0FBQ0EsZ0JBQUlDLFNBQUosRUFBZTtBQUNYLG9CQUFJQyxTQUFTSCxnQkFBYjtBQUNBO0FBQ0E7QUFDQSx1Q0FBUTtBQUNKdkgseUJBQUssa0JBREQ7QUFFSkMsdUNBQVV5SCxNQUFWO0FBQ0lqQiw4QkFBTWlCLE9BQU9qQixJQUFQLENBQVlBLElBRHRCLEdBRkk7QUFJSi9FLDhCQUFVLFVBSk47QUFLSkMsNkJBQVMsaUJBQUMxQixJQUFELEVBQVU7QUFDZiw4QkFBS3lGLEtBQUwsQ0FBV25CLFVBQVgsQ0FBc0IsS0FBdEI7QUFDQSw4QkFBS1AsY0FBTDtBQUNILHFCQVJHO0FBU0pwQywwQkFBTSxjQUFDM0IsSUFBRCxFQUFVO0FBQ1o7QUFDQTtBQUNIO0FBWkcsaUJBQVI7QUFjSDtBQUNKLFMsUUFDRCtELGMsR0FBaUIsWUFBTTtBQUNuQixtQ0FBUTtBQUNKaEUscUJBQUssb0JBREQ7QUFFSkMsc0JBQU07QUFDRmdFLDZCQUFTO0FBRFAsaUJBRkY7QUFLSnRDLHlCQUFTLHdCQUFhO0FBQUEsd0JBQVh1QyxLQUFXLFNBQVhBLEtBQVc7O0FBQ2xCQyw0QkFBUUMsR0FBUixDQUFZRixLQUFaO0FBQ0Esb0NBQU1HLFlBQU4sQ0FBbUJILEtBQW5CO0FBQ0g7QUFSRyxhQUFSO0FBVUgsUzs7Ozs7aUNBM0dRO0FBQUE7O0FBQUEseUJBQzZCLEtBQUt3QixLQURsQztBQUFBLGdCQUNBQyxJQURBLFVBQ0FBLElBREE7QUFBQSxnQkFDTXBCLFVBRE4sVUFDTUEsVUFETjtBQUFBLGdCQUNrQlMsT0FEbEIsVUFDa0JBLE9BRGxCO0FBRUw7QUFDQTs7QUFISyxnQkFJQStCLFFBSkEsR0FJWSxLQUFLRCxLQUpqQixDQUlBQyxRQUpBOztBQUtMLGdCQUFJWSxnQkFBZ0IzQyxRQUFRUixNQUE1QjtBQUxLLGdCQU1BaUIsaUJBTkEsR0FNb0VFLElBTnBFLENBTUFGLGlCQU5BO0FBQUEsZ0JBTW1CbUMsY0FObkIsR0FNb0VqQyxJQU5wRSxDQU1tQmlDLGNBTm5CO0FBQUEsZ0JBTW1DQyxhQU5uQyxHQU1vRWxDLElBTnBFLENBTW1Da0MsYUFObkM7QUFBQSxnQkFNa0RMLGNBTmxELEdBTW9FN0IsSUFOcEUsQ0FNa0Q2QixjQU5sRDs7QUFPTCxnQkFBSU0sV0FBV0YsZUFBZSxPQUFmLEtBQTJCQyxjQUFjLE9BQWQsQ0FBMUM7QUFBQSxnQkFDSUUsV0FBV0gsZUFBZSxPQUFmLEtBQTJCQyxjQUFjLE9BQWQsQ0FEMUM7QUFBQSxnQkFFSUcsVUFBVUosZUFBZSxNQUFmLEtBQTBCQyxjQUFjLE1BQWQsQ0FGeEM7QUFHQSxnQkFBSUksY0FBYyxTQUFkQSxXQUFjO0FBQUEsdUJBQ2Q7QUFBQSxvQ0FBTyxRQUFQO0FBQUE7QUFDSTtBQUFBO0FBQUEsMEJBQVEsU0FBUztBQUFBLHVDQUFNMUQsV0FBVyxLQUFYLENBQU47QUFBQSw2QkFBakI7QUFBQTtBQUFBLHFCQURKO0FBRUk7QUFBQTtBQUFBLDBCQUFRLE1BQUssU0FBYixFQUF1QixVQUFVLHlCQUFVaUQsZ0JBQVYsQ0FBakMsRUFBOEQsU0FBUyxPQUFLMUQsT0FBNUU7QUFBQTtBQUFBO0FBRkosaUJBRGM7QUFBQSxhQUFsQjtBQU1BLG1CQUNJO0FBQUE7QUFBQSwyQkFBTyxTQUFTNkQsYUFBaEIsRUFBK0IsT0FBTSwwQkFBckMsRUFBNEMsUUFBUSw4QkFBQyxXQUFELE9BQXBEO0FBQ08sOEJBQVU7QUFBQSwrQkFBTXBELFdBQVcsS0FBWCxDQUFOO0FBQUEscUJBRGpCO0FBRUk7QUFBQTtBQUFBO0FBQ0k7QUFBQSx1Q0FBTSxJQUFOO0FBQUE7QUFDSSxrQ0FBTXVELFdBQVdBLFFBQVgsR0FBc0IsRUFEaEM7QUFFSSw0Q0FBZ0JBLFdBQVcsT0FBWCxHQUFxQixFQUZ6QztBQUdJLG1DQUFNLDZCQUhWO0FBSUlyQywwQ0FBa0IsT0FBbEIsRUFBMkI7QUFDdkJ5QyxtQ0FBTyxDQUFDO0FBQ0pDLDBDQUFVLElBRE47QUFFSkMseUNBQVM7QUFGTCw2QkFBRDtBQURnQix5QkFBM0IsRUFNSSxvREFOSjtBQUpKLHFCQURKO0FBY0k7QUFBQSx1Q0FBTSxJQUFOO0FBQUE7QUFDSSxrQ0FBTUwsV0FBV0EsUUFBWCxHQUFzQixFQURoQztBQUVJLDRDQUFnQkEsV0FBVyxPQUFYLEdBQXFCLEVBRnpDO0FBR0ksbUNBQU0sY0FIVjtBQUFBO0FBSUl0QywwQ0FBa0IsT0FBbEIsRUFBMkI7QUFDdkJ5QyxtQ0FBTyxDQUFDO0FBQ0pDLDBDQUFVLElBRE47QUFFSkMseUNBQVM7QUFGTCw2QkFBRDtBQURnQix5QkFBM0IsRUFNSSxvREFOSjtBQUpKLHFCQWRKO0FBMkJJO0FBQUEsdUNBQU0sSUFBTjtBQUFBO0FBQ0ksa0NBQU1KLFVBQVVBLE9BQVYsR0FBb0IsRUFEOUI7QUFFSSw0Q0FBZ0JBLFVBQVUsT0FBVixHQUFvQixFQUZ4QztBQUdJLG1DQUFNLGlDQUhWO0FBSUl2QywwQ0FBa0IsTUFBbEIsRUFBMEI7QUFDdEJ5QyxtQ0FBTyxDQUFDO0FBQ0pDLDBDQUFVLElBRE47QUFFSkMseUNBQVM7QUFGTCw2QkFBRDtBQURlLHlCQUExQixFQU1JO0FBQUE7QUFBQSx5Q0FBWSxLQUFLcEIsV0FBakIsSUFBOEIsVUFBVUQsUUFBeEM7QUFDSTtBQUFBO0FBQUE7QUFDSSxnRkFBTSxNQUFLLFFBQVgsR0FESjtBQUFBO0FBQUE7QUFESix5QkFOSjtBQUpKO0FBM0JKO0FBRkosYUFESjtBQWtESDtBQUNEO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7ZUF5Q1csZUFBS3ZDLE1BQUwsR0FBY3FDLE9BQWQsQzs7Ozs7Ozs7Ozs7Ozs7NEJBdElUQSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUk47Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQ013QixLOzs7Ozs7Ozs7Ozs7OztvTEEyRUpDLE0sR0FBUyxZQUFNO0FBQ2IsVUFBSUMsYUFBYSxNQUFLN0MsS0FBTCxDQUFXUixZQUE1QjtBQURhLFVBRVBzQyxjQUZPLEdBRVksTUFBSzlCLEtBQUwsQ0FBV0MsSUFGdkIsQ0FFUDZCLGNBRk87O0FBR2IsVUFBSWdCLFVBQVUsQ0FBQyx5QkFBVWhCLGdCQUFWLENBQWY7QUFDQSxVQUFHZ0IsT0FBSCxFQUFXO0FBQ1QsWUFBR0QsV0FBV3pELFFBQVgsS0FBd0IsTUFBM0IsRUFBa0M7QUFDaEMsZ0JBQUsyRCxLQUFMO0FBQ0QsU0FGRCxNQUVLO0FBQ0gsZ0JBQUtDLE9BQUw7QUFDRDtBQUNGO0FBQ0YsSyxRQUNERCxLLEdBQVEsWUFBTTtBQUFBLFVBQ045QyxJQURNLEdBQ0csTUFBS0QsS0FEUixDQUNOQyxJQURNOztBQUFBLGlDQUVXQSxLQUFLNEIsY0FBTCxFQUZYO0FBQUEsVUFFTjFELEtBRk0sd0JBRU5BLEtBRk07QUFBQSxVQUVDVixLQUZELHdCQUVDQSxLQUZEOztBQUdaLFVBQUlTLEtBQUssTUFBSzhCLEtBQUwsQ0FBV1IsWUFBWCxDQUF3QnRCLEVBQWpDO0FBQ0EsNkJBQVE7QUFDTjVELGFBQUssaUJBREM7QUFFTkMsY0FBTTtBQUNKMkQsZ0JBREk7QUFFSkMsc0JBRkk7QUFHSlY7QUFISSxTQUZBO0FBT054QixpQkFBUyxpQkFBQzFCLElBQUQsRUFBVTtBQUNqQixnQkFBSzBJLFVBQUw7QUFDRCxTQVRLO0FBVU4vRyxjQUFNLGdCQUFNO0FBQ1Y7QUFDRDtBQVpLLE9BQVI7QUFjRCxLLFFBQ0Q4RyxPLEdBQVUsWUFBTTtBQUFBLFVBQ1IvQyxJQURRLEdBQ0MsTUFBS0QsS0FETixDQUNSQyxJQURROztBQUFBLGtDQUVHQSxLQUFLNEIsY0FBTCxFQUZIO0FBQUEsVUFFUnFCLE1BRlEseUJBRVJBLE1BRlE7O0FBR2QsVUFBSWhGLEtBQUssTUFBSzhCLEtBQUwsQ0FBV1IsWUFBWCxDQUF3QnRCLEVBQWpDO0FBQ0EsNkJBQVE7QUFDTjVELGFBQUssa0JBREM7QUFFTkMsY0FBTTtBQUNKMkQsZ0JBREk7QUFFSmdGO0FBRkksU0FGQTtBQU1OakgsaUJBQVMsbUJBQU07QUFDYixnQkFBS2dILFVBQUw7QUFDRCxTQVJLO0FBU04vRyxjQUFNLGdCQUFNO0FBQ1Y7QUFDRDtBQVhLLE9BQVI7QUFhRCxLLFFBQ0QrRyxVLEdBQWEsWUFBTTtBQUFBLFVBQ1hwRSxVQURXLEdBQ0ksTUFBS21CLEtBRFQsQ0FDWG5CLFVBRFc7O0FBRWpCQSxpQkFBVyxLQUFYO0FBQ0QsSzs7Ozs7NkJBOUhPO0FBQUE7O0FBQUEsbUJBQ2dDLEtBQUttQixLQURyQztBQUFBLFVBQ0FSLFlBREEsVUFDQUEsWUFEQTtBQUFBLFVBQ2NGLE9BRGQsVUFDY0EsT0FEZDtBQUFBLFVBQ3VCVyxJQUR2QixVQUN1QkEsSUFEdkI7QUFBQSxVQUVBaUMsY0FGQSxHQUVvRWpDLElBRnBFLENBRUFpQyxjQUZBO0FBQUEsVUFFZ0JDLGFBRmhCLEdBRW9FbEMsSUFGcEUsQ0FFZ0JrQyxhQUZoQjtBQUFBLFVBRThCTCxjQUY5QixHQUVvRTdCLElBRnBFLENBRThCNkIsY0FGOUI7QUFBQSxVQUU4Qy9CLGlCQUY5QyxHQUVvRUUsSUFGcEUsQ0FFOENGLGlCQUY5Qzs7QUFHTixVQUFJb0QsY0FBYzdELFFBQVFOLElBQTFCO0FBSE0sVUFJQUksUUFKQSxHQUlxREksWUFKckQsQ0FJQUosUUFKQTtBQUFBLFVBSVVsQixFQUpWLEdBSXFEc0IsWUFKckQsQ0FJVXRCLEVBSlY7QUFBQSxVQUljQyxLQUpkLEdBSXFEcUIsWUFKckQsQ0FJY3JCLEtBSmQ7QUFBQSxVQUlxQlYsS0FKckIsR0FJcUQrQixZQUpyRCxDQUlxQi9CLEtBSnJCO0FBQUEsVUFJNEJ1RCxPQUo1QixHQUlxRHhCLFlBSnJELENBSTRCd0IsT0FKNUI7QUFBQSxVQUlxQ29DLFdBSnJDLEdBSXFENUQsWUFKckQsQ0FJcUM0RCxXQUpyQzs7QUFLTixVQUFJQyxhQUFhakUsYUFBYSxNQUFiLEdBQXNCLElBQXRCLEdBQTZCLElBQTlDO0FBQ0EsVUFBSWtFLGFBQWFwQixlQUFlLE9BQWYsS0FBMkJDLGNBQWMsT0FBZCxDQUE1QztBQUNBLFVBQUlvQixhQUFhckIsZUFBZSxPQUFmLEtBQTJCQyxjQUFjLE9BQWQsQ0FBNUM7QUFDQSxVQUFJcUIsY0FBY3RCLGVBQWUsUUFBZixLQUE0QkMsY0FBYyxRQUFkLENBQTlDO0FBQ0EsVUFBSXNCLGdCQUFnQnJFLGFBQWEsTUFBYixHQUFzQix5QkFBVTBDLGVBQWUsQ0FBQyxPQUFELEVBQVUsT0FBVixDQUFmLENBQVYsQ0FBdEIsR0FBc0UseUJBQVVBLGVBQWUsQ0FBQyxRQUFELENBQWYsQ0FBVixDQUExRjtBQUNBLFVBQUlTLGNBQWMsU0FBZEEsV0FBYztBQUFBLGVBQ2hCO0FBQUEsMEJBQU8sUUFBUDtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQVEsU0FBUyxPQUFLVSxVQUF0QjtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQSxjQUFRLE1BQUssU0FBYixFQUF1QixVQUFVUSxhQUFqQyxFQUFnRCxTQUFTLE9BQUtiLE1BQTlEO0FBQUE7QUFBQTtBQUZGLFNBRGdCO0FBQUEsT0FBbEI7QUFNQSxhQUNFO0FBQUE7QUFBQSxtQkFBTyxTQUFTTyxXQUFoQixFQUE2QixPQUFVRSxVQUFWLGlDQUE3QixFQUE2RCxVQUFVLEtBQUtKLFVBQTVFLEVBQXdGLFFBQVEsOEJBQUMsV0FBRCxPQUFoRztBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUEsMkJBQU0sSUFBTjtBQUFBLHVCQUFXLE9BQU0sY0FBakI7QUFBOEMvRTtBQUE5QyxXQURGO0FBRUU7QUFBQSwyQkFBTSxJQUFOO0FBQUE7QUFDRSxvQkFBTXFGLGFBQWFBLFVBQWIsR0FBMEIsRUFEbEM7QUFFRSw4QkFBZ0JBLGFBQWEsT0FBYixHQUFxQixFQUZ2QztBQUdFLHFCQUFNLDZCQUhSO0FBSUduRSx5QkFBYSxNQUFiLEdBQXNCakIsS0FBdEIsR0FBOEI0QixrQkFBa0IsT0FBbEIsRUFBMkI7QUFDeERJLDRCQUFjaEMsS0FEMEM7QUFFeERxRSxxQkFBTyxDQUFDO0FBQ05DLDBCQUFVLElBREo7QUFFTkMseUJBQVM7QUFGSCxlQUFEO0FBRmlELGFBQTNCLEVBTzdCLG9EQVA2QjtBQUpqQyxXQUZGO0FBZ0JFO0FBQUEsMkJBQU0sSUFBTjtBQUFBO0FBQ0UscUJBQU0sY0FEUjtBQUVFLG9CQUFNWSxhQUFhQSxVQUFiLEdBQTBCLEVBRmxDO0FBR0UsOEJBQWdCQSxhQUFhLE9BQWIsR0FBcUI7QUFIdkM7QUFLR2xFLHlCQUFhLE1BQWIsR0FBc0IzQixLQUF0QixHQUE4QnNDLGtCQUFrQixPQUFsQixFQUEyQjtBQUN4REksNEJBQWMxQyxLQUQwQztBQUV4RCtFLHFCQUFPLENBQUM7QUFDTkMsMEJBQVUsSUFESjtBQUVOQyx5QkFBUztBQUZILGVBQUQ7QUFGaUQsYUFBM0IsRUFPN0Isb0RBUDZCO0FBTGpDLFdBaEJGO0FBK0JFO0FBQUEsMkJBQU0sSUFBTjtBQUFBLHVCQUFXLE9BQU0sb0JBQWpCO0FBQStDMUI7QUFBL0MsV0EvQkY7QUFnQ0U7QUFBQSwyQkFBTSxJQUFOO0FBQUEsdUJBQVcsT0FBTSwwQkFBakI7QUFBZ0RvQztBQUFoRCxXQWhDRjtBQWlDR2hFLHVCQUFhLE1BQWIsR0FBc0IsSUFBdEIsR0FDQztBQUFBLDJCQUFNLElBQU47QUFBQTtBQUNBLHFCQUFPLEVBQUNzRSxTQUFTdEUsYUFBYSxNQUFiLEdBQXNCLE1BQXRCLEdBQStCLE9BQXpDLEVBRFA7QUFFQSxvQkFBTW9FLGNBQWNBLFdBQWQsR0FBNEIsRUFGbEM7QUFHQSw4QkFBaUJBLGNBQWMsT0FBZCxHQUF3QixFQUh6QztBQUlBLHFCQUFNLDBCQUpOO0FBS0N6RCw4QkFBa0IsUUFBbEIsRUFBNEI7QUFDM0J5QyxxQkFBTyxDQUFDO0FBQ05DLDBCQUFVLElBREo7QUFFTkMseUJBQVM7QUFGSCxlQUFEO0FBRG9CLGFBQTVCLEVBTUMsaURBQU8sYUFBWSxjQUFuQixHQU5EO0FBTEQ7QUFsQ0o7QUFERixPQURGO0FBc0REOzs7d0NBQ2tCO0FBQ2pCLFdBQUsxQyxLQUFMLENBQVdDLElBQVgsQ0FBZ0IyQixjQUFoQjtBQUNEOzs7Ozs7Ozs7OztlQXdEWSxlQUFLOUMsTUFBTCxHQUFjNkQsS0FBZCxDOzs7Ozs7Ozs7Ozs7OzswQkFsSVRBLEsiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9ncmVzcyBmcm9tICcuL3Byb2dyZXNzJztcbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xudmFyIF9fcmVzdCA9IHRoaXMgJiYgdGhpcy5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICAgIH1pZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgIH1yZXR1cm4gdDtcbn07XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vaWNvbic7XG5pbXBvcnQgeyBDaXJjbGUgfSBmcm9tICdyYy1wcm9ncmVzcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbnZhciBzdGF0dXNDb2xvck1hcCA9IHtcbiAgICBub3JtYWw6ICcjMTA4ZWU5JyxcbiAgICBleGNlcHRpb246ICcjZmY1NTAwJyxcbiAgICBzdWNjZXNzOiAnIzg3ZDA2OCdcbn07XG5cbnZhciBQcm9ncmVzcyA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFByb2dyZXNzLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFByb2dyZXNzKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHJvZ3Jlc3MpO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUHJvZ3Jlc3MuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihQcm9ncmVzcykpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhQcm9ncmVzcywgW3tcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcblxuICAgICAgICAgICAgdmFyIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgX3Byb3BzJHBlcmNlbnQgPSBwcm9wcy5wZXJjZW50LFxuICAgICAgICAgICAgICAgIHBlcmNlbnQgPSBfcHJvcHMkcGVyY2VudCA9PT0gdW5kZWZpbmVkID8gMCA6IF9wcm9wcyRwZXJjZW50LFxuICAgICAgICAgICAgICAgIHN0YXR1cyA9IHByb3BzLnN0YXR1cyxcbiAgICAgICAgICAgICAgICBmb3JtYXQgPSBwcm9wcy5mb3JtYXQsXG4gICAgICAgICAgICAgICAgdHJhaWxDb2xvciA9IHByb3BzLnRyYWlsQ29sb3IsXG4gICAgICAgICAgICAgICAgc2l6ZSA9IHByb3BzLnNpemUsXG4gICAgICAgICAgICAgICAgc3VjY2Vzc1BlcmNlbnQgPSBwcm9wcy5zdWNjZXNzUGVyY2VudCxcbiAgICAgICAgICAgICAgICB0eXBlID0gcHJvcHMudHlwZSxcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aCA9IHByb3BzLnN0cm9rZVdpZHRoLFxuICAgICAgICAgICAgICAgIHdpZHRoID0gcHJvcHMud2lkdGgsXG4gICAgICAgICAgICAgICAgc2hvd0luZm8gPSBwcm9wcy5zaG93SW5mbyxcbiAgICAgICAgICAgICAgICBfcHJvcHMkZ2FwRGVncmVlID0gcHJvcHMuZ2FwRGVncmVlLFxuICAgICAgICAgICAgICAgIGdhcERlZ3JlZSA9IF9wcm9wcyRnYXBEZWdyZWUgPT09IHVuZGVmaW5lZCA/IDAgOiBfcHJvcHMkZ2FwRGVncmVlLFxuICAgICAgICAgICAgICAgIGdhcFBvc2l0aW9uID0gcHJvcHMuZ2FwUG9zaXRpb24sXG4gICAgICAgICAgICAgICAgcmVzdFByb3BzID0gX19yZXN0KHByb3BzLCBbXCJwcmVmaXhDbHNcIiwgXCJjbGFzc05hbWVcIiwgXCJwZXJjZW50XCIsIFwic3RhdHVzXCIsIFwiZm9ybWF0XCIsIFwidHJhaWxDb2xvclwiLCBcInNpemVcIiwgXCJzdWNjZXNzUGVyY2VudFwiLCBcInR5cGVcIiwgXCJzdHJva2VXaWR0aFwiLCBcIndpZHRoXCIsIFwic2hvd0luZm9cIiwgXCJnYXBEZWdyZWVcIiwgXCJnYXBQb3NpdGlvblwiXSk7XG5cbiAgICAgICAgICAgIHZhciBwcm9ncmVzc1N0YXR1cyA9IHBhcnNlSW50KHN1Y2Nlc3NQZXJjZW50ID8gc3VjY2Vzc1BlcmNlbnQudG9TdHJpbmcoKSA6IHBlcmNlbnQudG9TdHJpbmcoKSwgMTApID49IDEwMCAmJiAhKCdzdGF0dXMnIGluIHByb3BzKSA/ICdzdWNjZXNzJyA6IHN0YXR1cyB8fCAnbm9ybWFsJztcbiAgICAgICAgICAgIHZhciBwcm9ncmVzc0luZm8gPSB2b2lkIDA7XG4gICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSB2b2lkIDA7XG4gICAgICAgICAgICB2YXIgdGV4dEZvcm1hdHRlciA9IGZvcm1hdCB8fCBmdW5jdGlvbiAocGVyY2VudE51bWJlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBwZXJjZW50TnVtYmVyICsgJyUnO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChzaG93SW5mbykge1xuICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHZhciBpY29uVHlwZSA9IHR5cGUgPT09ICdjaXJjbGUnIHx8IHR5cGUgPT09ICdkYXNoYm9hcmQnID8gJycgOiAnLWNpcmNsZSc7XG4gICAgICAgICAgICAgICAgaWYgKHByb2dyZXNzU3RhdHVzID09PSAnZXhjZXB0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gZm9ybWF0ID8gdGV4dEZvcm1hdHRlcihwZXJjZW50KSA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyB0eXBlOiAnY3Jvc3MnICsgaWNvblR5cGUgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9ncmVzc1N0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQgPSBmb3JtYXQgPyB0ZXh0Rm9ybWF0dGVyKHBlcmNlbnQpIDogUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7IHR5cGU6ICdjaGVjaycgKyBpY29uVHlwZSB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gdGV4dEZvcm1hdHRlcihwZXJjZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NJbmZvID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy10ZXh0JyB9LFxuICAgICAgICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnbGluZScpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGVyY2VudFN0eWxlID0ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogcGVyY2VudCArICclJyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBzdHJva2VXaWR0aCB8fCAoc2l6ZSA9PT0gJ3NtYWxsJyA/IDYgOiA4KVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIHN1Y2Nlc3NQZXJjZW50U3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBzdWNjZXNzUGVyY2VudCArICclJyxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBzdHJva2VXaWR0aCB8fCAoc2l6ZSA9PT0gJ3NtYWxsJyA/IDYgOiA4KVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIHN1Y2Nlc3NTZWdtZW50ID0gc3VjY2Vzc1BlcmNlbnQgIT09IHVuZGVmaW5lZCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLXN1Y2Nlc3MtYmcnLCBzdHlsZTogc3VjY2Vzc1BlcmNlbnRTdHlsZSB9KSA6IG51bGw7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctb3V0ZXInIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWlubmVyJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWJnJywgc3R5bGU6IHBlcmNlbnRTdHlsZSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzU2VnbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0luZm9cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnY2lyY2xlJyB8fCB0eXBlID09PSAnZGFzaGJvYXJkJykge1xuICAgICAgICAgICAgICAgIHZhciBjaXJjbGVTaXplID0gd2lkdGggfHwgMTIwO1xuICAgICAgICAgICAgICAgIHZhciBjaXJjbGVTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNpcmNsZVNpemUsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2lyY2xlU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IGNpcmNsZVNpemUgKiAwLjE1ICsgNlxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIGNpcmNsZVdpZHRoID0gc3Ryb2tlV2lkdGggfHwgNjtcbiAgICAgICAgICAgICAgICB2YXIgZ2FwUG9zID0gZ2FwUG9zaXRpb24gfHwgdHlwZSA9PT0gJ2Rhc2hib2FyZCcgJiYgJ2JvdHRvbScgfHwgJ3RvcCc7XG4gICAgICAgICAgICAgICAgdmFyIGdhcERlZyA9IGdhcERlZ3JlZSB8fCB0eXBlID09PSAnZGFzaGJvYXJkJyAmJiA3NTtcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1pbm5lcicsIHN0eWxlOiBjaXJjbGVTdHlsZSB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENpcmNsZSwgeyBwZXJjZW50OiBwZXJjZW50LCBzdHJva2VXaWR0aDogY2lyY2xlV2lkdGgsIHRyYWlsV2lkdGg6IGNpcmNsZVdpZHRoLCBzdHJva2VDb2xvcjogc3RhdHVzQ29sb3JNYXBbcHJvZ3Jlc3NTdGF0dXNdLCB0cmFpbENvbG9yOiB0cmFpbENvbG9yLCBwcmVmaXhDbHM6IHByZWZpeENscywgZ2FwRGVncmVlOiBnYXBEZWcsIGdhcFBvc2l0aW9uOiBnYXBQb3MgfSksXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzSW5mb1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY2xhc3NTdHJpbmcgPSBjbGFzc05hbWVzKHByZWZpeENscywgKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy0nICsgKHR5cGUgPT09ICdkYXNoYm9hcmQnICYmICdjaXJjbGUnIHx8IHR5cGUpLCB0cnVlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLXN0YXR1cy0nICsgcHJvZ3Jlc3NTdGF0dXMsIHRydWUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctc2hvdy1pbmZvJywgc2hvd0luZm8pLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctJyArIHNpemUsIHNpemUpLCBfY2xhc3NOYW1lcyksIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICBfZXh0ZW5kcyh7fSwgcmVzdFByb3BzLCB7IGNsYXNzTmFtZTogY2xhc3NTdHJpbmcgfSksXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gUHJvZ3Jlc3M7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzO1xuXG5Qcm9ncmVzcy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdHlwZTogJ2xpbmUnLFxuICAgIHBlcmNlbnQ6IDAsXG4gICAgc2hvd0luZm86IHRydWUsXG4gICAgdHJhaWxDb2xvcjogJyNmM2YzZjMnLFxuICAgIHByZWZpeENsczogJ2FudC1wcm9ncmVzcycsXG4gICAgc2l6ZTogJ2RlZmF1bHQnXG59O1xuUHJvZ3Jlc3MucHJvcFR5cGVzID0ge1xuICAgIHN0YXR1czogUHJvcFR5cGVzLm9uZU9mKFsnbm9ybWFsJywgJ2V4Y2VwdGlvbicsICdhY3RpdmUnLCAnc3VjY2VzcyddKSxcbiAgICB0eXBlOiBQcm9wVHlwZXMub25lT2YoWydsaW5lJywgJ2NpcmNsZScsICdkYXNoYm9hcmQnXSksXG4gICAgc2hvd0luZm86IFByb3BUeXBlcy5ib29sLFxuICAgIHBlcmNlbnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgd2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgc3Ryb2tlV2lkdGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdHJhaWxDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmb3JtYXQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIGdhcERlZ3JlZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICAnZGVmYXVsdCc6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAnc21hbGwnXSlcbn07IiwiaW1wb3J0ICcuLi8uLi9zdHlsZS9pbmRleC5jc3MnO1xuaW1wb3J0ICcuL2luZGV4LmNzcyc7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBVcGxvYWQgZnJvbSAnLi9VcGxvYWQnO1xuXG52YXIgRHJhZ2dlciA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKERyYWdnZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gRHJhZ2dlcigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERyYWdnZXIpO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoRHJhZ2dlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKERyYWdnZXIpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoRHJhZ2dlciwgW3tcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFVwbG9hZCwgX2V4dGVuZHMoe30sIHByb3BzLCB7IHR5cGU6ICdkcmFnJywgc3R5bGU6IF9leHRlbmRzKHt9LCBwcm9wcy5zdHlsZSwgeyBoZWlnaHQ6IHByb3BzLmhlaWdodCB9KSB9KSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gRHJhZ2dlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgRHJhZ2dlcjsiLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSY1VwbG9hZCBmcm9tICdyYy11cGxvYWQnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgdW5pcUJ5IGZyb20gJ2xvZGFzaC91bmlxQnknO1xuaW1wb3J0IExvY2FsZVJlY2VpdmVyIGZyb20gJy4uL2xvY2FsZS1wcm92aWRlci9Mb2NhbGVSZWNlaXZlcic7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tICcuLi9sb2NhbGUtcHJvdmlkZXIvZGVmYXVsdCc7XG5pbXBvcnQgVXBsb2FkTGlzdCBmcm9tICcuL1VwbG9hZExpc3QnO1xuaW1wb3J0IHsgVCwgZmlsZVRvT2JqZWN0LCBnZW5QZXJjZW50QWRkLCBnZXRGaWxlSXRlbSwgcmVtb3ZlRmlsZUl0ZW0gfSBmcm9tICcuL3V0aWxzJztcblxudmFyIFVwbG9hZCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFVwbG9hZCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBVcGxvYWQocHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFVwbG9hZCk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFVwbG9hZC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFVwbG9hZCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgICAgICBfdGhpcy5vblN0YXJ0ID0gZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXRJdGVtID0gdm9pZCAwO1xuICAgICAgICAgICAgdmFyIG5leHRGaWxlTGlzdCA9IF90aGlzLnN0YXRlLmZpbGVMaXN0LmNvbmNhdCgpO1xuICAgICAgICAgICAgdGFyZ2V0SXRlbSA9IGZpbGVUb09iamVjdChmaWxlKTtcbiAgICAgICAgICAgIHRhcmdldEl0ZW0uc3RhdHVzID0gJ3VwbG9hZGluZyc7XG4gICAgICAgICAgICBuZXh0RmlsZUxpc3QucHVzaCh0YXJnZXRJdGVtKTtcbiAgICAgICAgICAgIF90aGlzLm9uQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICBmaWxlOiB0YXJnZXRJdGVtLFxuICAgICAgICAgICAgICAgIGZpbGVMaXN0OiBuZXh0RmlsZUxpc3RcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gZml4IGllIHByb2dyZXNzXG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5Gb3JtRGF0YSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmF1dG9VcGRhdGVQcm9ncmVzcygwLCB0YXJnZXRJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMub25TdWNjZXNzID0gZnVuY3Rpb24gKHJlc3BvbnNlLCBmaWxlKSB7XG4gICAgICAgICAgICBfdGhpcy5jbGVhclByb2dyZXNzVGltZXIoKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXNwb25zZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7LyogZG8gbm90aGluZyAqL1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGZpbGVMaXN0ID0gX3RoaXMuc3RhdGUuZmlsZUxpc3Q7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0SXRlbSA9IGdldEZpbGVJdGVtKGZpbGUsIGZpbGVMaXN0KTtcbiAgICAgICAgICAgIC8vIHJlbW92ZWRcbiAgICAgICAgICAgIGlmICghdGFyZ2V0SXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhcmdldEl0ZW0uc3RhdHVzID0gJ2RvbmUnO1xuICAgICAgICAgICAgdGFyZ2V0SXRlbS5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgX3RoaXMub25DaGFuZ2Uoe1xuICAgICAgICAgICAgICAgIGZpbGU6IF9leHRlbmRzKHt9LCB0YXJnZXRJdGVtKSxcbiAgICAgICAgICAgICAgICBmaWxlTGlzdDogZmlsZUxpc3RcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5vblByb2dyZXNzID0gZnVuY3Rpb24gKGUsIGZpbGUpIHtcbiAgICAgICAgICAgIHZhciBmaWxlTGlzdCA9IF90aGlzLnN0YXRlLmZpbGVMaXN0O1xuICAgICAgICAgICAgdmFyIHRhcmdldEl0ZW0gPSBnZXRGaWxlSXRlbShmaWxlLCBmaWxlTGlzdCk7XG4gICAgICAgICAgICAvLyByZW1vdmVkXG4gICAgICAgICAgICBpZiAoIXRhcmdldEl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXRJdGVtLnBlcmNlbnQgPSBlLnBlcmNlbnQ7XG4gICAgICAgICAgICBfdGhpcy5vbkNoYW5nZSh7XG4gICAgICAgICAgICAgICAgZXZlbnQ6IGUsXG4gICAgICAgICAgICAgICAgZmlsZTogX2V4dGVuZHMoe30sIHRhcmdldEl0ZW0pLFxuICAgICAgICAgICAgICAgIGZpbGVMaXN0OiBfdGhpcy5zdGF0ZS5maWxlTGlzdFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLm9uRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IsIHJlc3BvbnNlLCBmaWxlKSB7XG4gICAgICAgICAgICBfdGhpcy5jbGVhclByb2dyZXNzVGltZXIoKTtcbiAgICAgICAgICAgIHZhciBmaWxlTGlzdCA9IF90aGlzLnN0YXRlLmZpbGVMaXN0O1xuICAgICAgICAgICAgdmFyIHRhcmdldEl0ZW0gPSBnZXRGaWxlSXRlbShmaWxlLCBmaWxlTGlzdCk7XG4gICAgICAgICAgICAvLyByZW1vdmVkXG4gICAgICAgICAgICBpZiAoIXRhcmdldEl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXRJdGVtLmVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICB0YXJnZXRJdGVtLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgICAgICAgICB0YXJnZXRJdGVtLnN0YXR1cyA9ICdlcnJvcic7XG4gICAgICAgICAgICBfdGhpcy5vbkNoYW5nZSh7XG4gICAgICAgICAgICAgICAgZmlsZTogX2V4dGVuZHMoe30sIHRhcmdldEl0ZW0pLFxuICAgICAgICAgICAgICAgIGZpbGVMaXN0OiBmaWxlTGlzdFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmhhbmRsZU1hbnVhbFJlbW92ZSA9IGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgICAgICBfdGhpcy51cGxvYWQuYWJvcnQoZmlsZSk7XG4gICAgICAgICAgICBmaWxlLnN0YXR1cyA9ICdyZW1vdmVkJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgICAgX3RoaXMuaGFuZGxlUmVtb3ZlKGZpbGUpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uIChpbmZvKSB7XG4gICAgICAgICAgICBpZiAoISgnZmlsZUxpc3QnIGluIF90aGlzLnByb3BzKSkge1xuICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgZmlsZUxpc3Q6IGluZm8uZmlsZUxpc3QgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgb25DaGFuZ2UgPSBfdGhpcy5wcm9wcy5vbkNoYW5nZTtcblxuICAgICAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgb25DaGFuZ2UoaW5mbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLm9uRmlsZURyb3AgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGRyYWdTdGF0ZTogZS50eXBlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuYmVmb3JlVXBsb2FkID0gZnVuY3Rpb24gKGZpbGUsIGZpbGVMaXN0KSB7XG4gICAgICAgICAgICBpZiAoIV90aGlzLnByb3BzLmJlZm9yZVVwbG9hZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IF90aGlzLnByb3BzLmJlZm9yZVVwbG9hZChmaWxlLCBmaWxlTGlzdCk7XG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLm9uQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZTogZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgZmlsZUxpc3Q6IHVuaXFCeShmaWxlTGlzdC5jb25jYXQoX3RoaXMuc3RhdGUuZmlsZUxpc3QpLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0udWlkO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5zYXZlVXBsb2FkID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIF90aGlzLnVwbG9hZCA9IG5vZGU7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnJlbmRlclVwbG9hZExpc3QgPSBmdW5jdGlvbiAobG9jYWxlKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBzaG93VXBsb2FkTGlzdCA9IF90aGlzJHByb3BzLnNob3dVcGxvYWRMaXN0LFxuICAgICAgICAgICAgICAgIGxpc3RUeXBlID0gX3RoaXMkcHJvcHMubGlzdFR5cGUsXG4gICAgICAgICAgICAgICAgb25QcmV2aWV3ID0gX3RoaXMkcHJvcHMub25QcmV2aWV3O1xuICAgICAgICAgICAgdmFyIHNob3dSZW1vdmVJY29uID0gc2hvd1VwbG9hZExpc3Quc2hvd1JlbW92ZUljb24sXG4gICAgICAgICAgICAgICAgc2hvd1ByZXZpZXdJY29uID0gc2hvd1VwbG9hZExpc3Quc2hvd1ByZXZpZXdJY29uO1xuXG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChVcGxvYWRMaXN0LCB7IGxpc3RUeXBlOiBsaXN0VHlwZSwgaXRlbXM6IF90aGlzLnN0YXRlLmZpbGVMaXN0LCBvblByZXZpZXc6IG9uUHJldmlldywgb25SZW1vdmU6IF90aGlzLmhhbmRsZU1hbnVhbFJlbW92ZSwgc2hvd1JlbW92ZUljb246IHNob3dSZW1vdmVJY29uLCBzaG93UHJldmlld0ljb246IHNob3dQcmV2aWV3SWNvbiwgbG9jYWxlOiBfZXh0ZW5kcyh7fSwgbG9jYWxlLCBfdGhpcy5wcm9wcy5sb2NhbGUpIH0pO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGZpbGVMaXN0OiBwcm9wcy5maWxlTGlzdCB8fCBwcm9wcy5kZWZhdWx0RmlsZUxpc3QgfHwgW10sXG4gICAgICAgICAgICBkcmFnU3RhdGU6ICdkcm9wJ1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFVwbG9hZCwgW3tcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyUHJvZ3Jlc3NUaW1lcigpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdhdXRvVXBkYXRlUHJvZ3Jlc3MnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gYXV0b1VwZGF0ZVByb2dyZXNzKF8sIGZpbGUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgZ2V0UGVyY2VudCA9IGdlblBlcmNlbnRBZGQoKTtcbiAgICAgICAgICAgIHZhciBjdXJQZXJjZW50ID0gMDtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJQcm9ncmVzc1RpbWVyKCk7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzVGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY3VyUGVyY2VudCA9IGdldFBlcmNlbnQoY3VyUGVyY2VudCk7XG4gICAgICAgICAgICAgICAgX3RoaXMyLm9uUHJvZ3Jlc3Moe1xuICAgICAgICAgICAgICAgICAgICBwZXJjZW50OiBjdXJQZXJjZW50XG4gICAgICAgICAgICAgICAgfSwgZmlsZSk7XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdoYW5kbGVSZW1vdmUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlUmVtb3ZlKGZpbGUpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgb25SZW1vdmUgPSB0aGlzLnByb3BzLm9uUmVtb3ZlO1xuXG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUodHlwZW9mIG9uUmVtb3ZlID09PSAnZnVuY3Rpb24nID8gb25SZW1vdmUoZmlsZSkgOiBvblJlbW92ZSkudGhlbihmdW5jdGlvbiAocmV0KSB7XG4gICAgICAgICAgICAgICAgLy8gUHJldmVudCByZW1vdmluZyBmaWxlXG4gICAgICAgICAgICAgICAgaWYgKHJldCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcmVtb3ZlZEZpbGVMaXN0ID0gcmVtb3ZlRmlsZUl0ZW0oZmlsZSwgX3RoaXMzLnN0YXRlLmZpbGVMaXN0KTtcbiAgICAgICAgICAgICAgICBpZiAocmVtb3ZlZEZpbGVMaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzMy5vbkNoYW5nZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlOiBmaWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZUxpc3Q6IHJlbW92ZWRGaWxlTGlzdFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICAgICAgaWYgKCdmaWxlTGlzdCcgaW4gbmV4dFByb3BzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGZpbGVMaXN0OiBuZXh0UHJvcHMuZmlsZUxpc3QgfHwgW11cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY2xlYXJQcm9ncmVzc1RpbWVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFyUHJvZ3Jlc3NUaW1lcigpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5wcm9ncmVzc1RpbWVyKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfY2xhc3NOYW1lczI7XG5cbiAgICAgICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIF9wcm9wcyRwcmVmaXhDbHMgPSBfcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICAgICAgICAgIHByZWZpeENscyA9IF9wcm9wcyRwcmVmaXhDbHMgPT09IHVuZGVmaW5lZCA/ICcnIDogX3Byb3BzJHByZWZpeENscyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIHNob3dVcGxvYWRMaXN0ID0gX3Byb3BzLnNob3dVcGxvYWRMaXN0LFxuICAgICAgICAgICAgICAgIGxpc3RUeXBlID0gX3Byb3BzLmxpc3RUeXBlLFxuICAgICAgICAgICAgICAgIHR5cGUgPSBfcHJvcHMudHlwZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZCA9IF9wcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbjtcblxuICAgICAgICAgICAgdmFyIHJjVXBsb2FkUHJvcHMgPSBfZXh0ZW5kcyh7IG9uU3RhcnQ6IHRoaXMub25TdGFydCwgb25FcnJvcjogdGhpcy5vbkVycm9yLCBvblByb2dyZXNzOiB0aGlzLm9uUHJvZ3Jlc3MsIG9uU3VjY2VzczogdGhpcy5vblN1Y2Nlc3MgfSwgdGhpcy5wcm9wcywgeyBiZWZvcmVVcGxvYWQ6IHRoaXMuYmVmb3JlVXBsb2FkIH0pO1xuICAgICAgICAgICAgZGVsZXRlIHJjVXBsb2FkUHJvcHMuY2xhc3NOYW1lO1xuICAgICAgICAgICAgdmFyIHVwbG9hZExpc3QgPSBzaG93VXBsb2FkTGlzdCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgTG9jYWxlUmVjZWl2ZXIsXG4gICAgICAgICAgICAgICAgeyBjb21wb25lbnROYW1lOiAnVXBsb2FkJywgZGVmYXVsdExvY2FsZTogZGVmYXVsdExvY2FsZS5VcGxvYWQgfSxcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclVwbG9hZExpc3RcbiAgICAgICAgICAgICkgOiBudWxsO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdkcmFnJykge1xuICAgICAgICAgICAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgICAgICAgICAgIHZhciBkcmFnQ2xzID0gY2xhc3NOYW1lcyhwcmVmaXhDbHMsIChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctZHJhZycsIHRydWUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctZHJhZy11cGxvYWRpbmcnLCB0aGlzLnN0YXRlLmZpbGVMaXN0LnNvbWUoZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbGUuc3RhdHVzID09PSAndXBsb2FkaW5nJztcbiAgICAgICAgICAgICAgICB9KSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy1kcmFnLWhvdmVyJywgdGhpcy5zdGF0ZS5kcmFnU3RhdGUgPT09ICdkcmFnb3ZlcicpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctZGlzYWJsZWQnLCBkaXNhYmxlZCksIF9jbGFzc05hbWVzKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogZHJhZ0Nscywgb25Ecm9wOiB0aGlzLm9uRmlsZURyb3AsIG9uRHJhZ092ZXI6IHRoaXMub25GaWxlRHJvcCwgb25EcmFnTGVhdmU6IHRoaXMub25GaWxlRHJvcCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSY1VwbG9hZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZXh0ZW5kcyh7fSwgcmNVcGxvYWRQcm9wcywgeyByZWY6IHRoaXMuc2F2ZVVwbG9hZCwgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWJ0bicgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWRyYWctY29udGFpbmVyJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgdXBsb2FkTGlzdFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdXBsb2FkQnV0dG9uQ2xzID0gY2xhc3NOYW1lcyhwcmVmaXhDbHMsIChfY2xhc3NOYW1lczIgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzMiwgcHJlZml4Q2xzICsgJy1zZWxlY3QnLCB0cnVlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzMiwgcHJlZml4Q2xzICsgJy1zZWxlY3QtJyArIGxpc3RUeXBlLCB0cnVlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzMiwgcHJlZml4Q2xzICsgJy1kaXNhYmxlZCcsIGRpc2FibGVkKSwgX2NsYXNzTmFtZXMyKSk7XG4gICAgICAgICAgICB2YXIgdXBsb2FkQnV0dG9uID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogdXBsb2FkQnV0dG9uQ2xzLCBzdHlsZTogeyBkaXNwbGF5OiBjaGlsZHJlbiA/ICcnIDogJ25vbmUnIH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJjVXBsb2FkLCBfZXh0ZW5kcyh7fSwgcmNVcGxvYWRQcm9wcywgeyByZWY6IHRoaXMuc2F2ZVVwbG9hZCB9KSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAobGlzdFR5cGUgPT09ICdwaWN0dXJlLWNhcmQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICB1cGxvYWRMaXN0LFxuICAgICAgICAgICAgICAgICAgICB1cGxvYWRCdXR0b25cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSxcbiAgICAgICAgICAgICAgICB1cGxvYWRCdXR0b24sXG4gICAgICAgICAgICAgICAgdXBsb2FkTGlzdFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBVcGxvYWQ7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IFVwbG9hZDtcblxuVXBsb2FkLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwcmVmaXhDbHM6ICdhbnQtdXBsb2FkJyxcbiAgICB0eXBlOiAnc2VsZWN0JyxcbiAgICBtdWx0aXBsZTogZmFsc2UsXG4gICAgYWN0aW9uOiAnJyxcbiAgICBkYXRhOiB7fSxcbiAgICBhY2NlcHQ6ICcnLFxuICAgIGJlZm9yZVVwbG9hZDogVCxcbiAgICBzaG93VXBsb2FkTGlzdDogdHJ1ZSxcbiAgICBsaXN0VHlwZTogJ3RleHQnLFxuICAgIGNsYXNzTmFtZTogJycsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIHN1cHBvcnRTZXJ2ZXJSZW5kZXI6IHRydWVcbn07IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQW5pbWF0ZSBmcm9tICdyYy1hbmltYXRlJztcbmltcG9ydCBJY29uIGZyb20gJy4uL2ljb24nO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi4vdG9vbHRpcCc7XG5pbXBvcnQgUHJvZ3Jlc3MgZnJvbSAnLi4vcHJvZ3Jlc3MnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmlsZVJlYWRlci9yZWFkQXNEYXRhVVJMXG52YXIgcHJldmlld0ZpbGUgPSBmdW5jdGlvbiBwcmV2aWV3RmlsZShmaWxlLCBjYWxsYmFjaykge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhyZWFkZXIucmVzdWx0KTtcbiAgICB9O1xuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xufTtcbnZhciBleHRuYW1lID0gZnVuY3Rpb24gZXh0bmFtZSh1cmwpIHtcbiAgICBpZiAoIXVybCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHZhciB0ZW1wID0gdXJsLnNwbGl0KCcvJyk7XG4gICAgdmFyIGZpbGVuYW1lID0gdGVtcFt0ZW1wLmxlbmd0aCAtIDFdO1xuICAgIHJldHVybiAoL1xcLlteLi9cXFxcXSokLy5leGVjKGZpbGVuYW1lKSB8fCBbJyddKVswXTtcbn07XG52YXIgaXNJbWFnZVVybCA9IGZ1bmN0aW9uIGlzSW1hZ2VVcmwodXJsKSB7XG4gICAgaWYgKC9eZGF0YTppbWFnZVxcLy8udGVzdCh1cmwpIHx8IC9cXC4od2VicHxzdmd8cG5nfGdpZnxqcGd8anBlZykkLy50ZXN0KHVybCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICgvXmRhdGE6Ly50ZXN0KHVybCkpIHtcbiAgICAgICAgLy8gb3RoZXIgZmlsZSB0eXBlcyBvZiBiYXNlNjRcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoZXh0bmFtZSh1cmwpKSB7XG4gICAgICAgIC8vIG90aGVyIGZpbGUgdHlwZXMgd2hpY2ggaGF2ZSBleHRlbnNpb25cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cbnZhciBVcGxvYWRMaXN0ID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoVXBsb2FkTGlzdCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBVcGxvYWRMaXN0KCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVXBsb2FkTGlzdCk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFVwbG9hZExpc3QuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihVcGxvYWRMaXN0KSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG5cbiAgICAgICAgX3RoaXMuaGFuZGxlQ2xvc2UgPSBmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICAgICAgdmFyIG9uUmVtb3ZlID0gX3RoaXMucHJvcHMub25SZW1vdmU7XG5cbiAgICAgICAgICAgIGlmIChvblJlbW92ZSkge1xuICAgICAgICAgICAgICAgIG9uUmVtb3ZlKGZpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5oYW5kbGVQcmV2aWV3ID0gZnVuY3Rpb24gKGZpbGUsIGUpIHtcbiAgICAgICAgICAgIHZhciBvblByZXZpZXcgPSBfdGhpcy5wcm9wcy5vblByZXZpZXc7XG5cbiAgICAgICAgICAgIGlmICghb25QcmV2aWV3KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgcmV0dXJuIG9uUHJldmlldyhmaWxlKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhVcGxvYWRMaXN0LCBbe1xuICAgICAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmxpc3RUeXBlICE9PSAncGljdHVyZScgJiYgdGhpcy5wcm9wcy5saXN0VHlwZSAhPT0gJ3BpY3R1cmUtY2FyZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAodGhpcy5wcm9wcy5pdGVtcyB8fCBbXSkuZm9yRWFjaChmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICF3aW5kb3cuRmlsZVJlYWRlciB8fCAhd2luZG93LkZpbGUgfHwgIShmaWxlLm9yaWdpbkZpbGVPYmogaW5zdGFuY2VvZiBGaWxlKSB8fCBmaWxlLnRodW1iVXJsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvKmVzbGludC1kaXNhYmxlICovXG4gICAgICAgICAgICAgICAgZmlsZS50aHVtYlVybCA9ICcnO1xuICAgICAgICAgICAgICAgIC8qZXNsaW50LWVuYWJsZSAqL1xuICAgICAgICAgICAgICAgIHByZXZpZXdGaWxlKGZpbGUub3JpZ2luRmlsZU9iaiwgZnVuY3Rpb24gKHByZXZpZXdEYXRhVXJsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qZXNsaW50LWRpc2FibGUgKi9cbiAgICAgICAgICAgICAgICAgICAgZmlsZS50aHVtYlVybCA9IHByZXZpZXdEYXRhVXJsO1xuICAgICAgICAgICAgICAgICAgICAvKmVzbGludC1lbmFibGUgKi9cbiAgICAgICAgICAgICAgICAgICAgX3RoaXMyLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczMgPSB0aGlzLFxuICAgICAgICAgICAgICAgIF9jbGFzc05hbWVzMjtcblxuICAgICAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgcHJlZml4Q2xzID0gX3Byb3BzLnByZWZpeENscyxcbiAgICAgICAgICAgICAgICBfcHJvcHMkaXRlbXMgPSBfcHJvcHMuaXRlbXMsXG4gICAgICAgICAgICAgICAgaXRlbXMgPSBfcHJvcHMkaXRlbXMgPT09IHVuZGVmaW5lZCA/IFtdIDogX3Byb3BzJGl0ZW1zLFxuICAgICAgICAgICAgICAgIGxpc3RUeXBlID0gX3Byb3BzLmxpc3RUeXBlLFxuICAgICAgICAgICAgICAgIHNob3dQcmV2aWV3SWNvbiA9IF9wcm9wcy5zaG93UHJldmlld0ljb24sXG4gICAgICAgICAgICAgICAgc2hvd1JlbW92ZUljb24gPSBfcHJvcHMuc2hvd1JlbW92ZUljb24sXG4gICAgICAgICAgICAgICAgbG9jYWxlID0gX3Byb3BzLmxvY2FsZTtcblxuICAgICAgICAgICAgdmFyIGxpc3QgPSBpdGVtcy5tYXAoZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgdmFyIGljb24gPSBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHsgdHlwZTogZmlsZS5zdGF0dXMgPT09ICd1cGxvYWRpbmcnID8gJ2xvYWRpbmcnIDogJ3BhcGVyLWNsaXAnIH0pO1xuICAgICAgICAgICAgICAgIGlmIChsaXN0VHlwZSA9PT0gJ3BpY3R1cmUnIHx8IGxpc3RUeXBlID09PSAncGljdHVyZS1jYXJkJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGlzdFR5cGUgPT09ICdwaWN0dXJlLWNhcmQnICYmIGZpbGUuc3RhdHVzID09PSAndXBsb2FkaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbiA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctbGlzdC1pdGVtLXVwbG9hZGluZy10ZXh0JyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZS51cGxvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWZpbGUudGh1bWJVcmwgJiYgIWZpbGUudXJsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uID0gUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1saXN0LWl0ZW0tdGh1bWJuYWlsJywgdHlwZTogJ3BpY3R1cmUnIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRodW1ibmFpbCA9IGlzSW1hZ2VVcmwoZmlsZS50aHVtYlVybCB8fCBmaWxlLnVybCkgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbWcnLCB7IHNyYzogZmlsZS50aHVtYlVybCB8fCBmaWxlLnVybCwgYWx0OiBmaWxlLm5hbWUgfSkgOiBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHsgdHlwZTogJ2ZpbGUnLCBjbGFzc05hbWU6IHByZWZpeENscyArICctbGlzdC1pdGVtLWljb24nIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbiA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2EnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWxpc3QtaXRlbS10aHVtYm5haWwnLCBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczMuaGFuZGxlUHJldmlldyhmaWxlLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgaHJlZjogZmlsZS51cmwgfHwgZmlsZS50aHVtYlVybCwgdGFyZ2V0OiAnX2JsYW5rJywgcmVsOiAnbm9vcGVuZXIgbm9yZWZlcnJlcicgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZpbGUuc3RhdHVzID09PSAndXBsb2FkaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBzaG93IGxvYWRpbmcgaWNvbiBpZiB1cGxvYWQgcHJvZ3Jlc3MgbGlzdGVuZXIgaXMgZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxvYWRpbmdQcm9ncmVzcyA9ICdwZXJjZW50JyBpbiBmaWxlID8gUmVhY3QuY3JlYXRlRWxlbWVudChQcm9ncmVzcywgX2V4dGVuZHMoeyB0eXBlOiAnbGluZScgfSwgX3RoaXMzLnByb3BzLnByb2dyZXNzQXR0ciwgeyBwZXJjZW50OiBmaWxlLnBlcmNlbnQgfSkpIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1saXN0LWl0ZW0tcHJvZ3Jlc3MnLCBrZXk6ICdwcm9ncmVzcycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdQcm9ncmVzc1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgaW5mb1VwbG9hZGluZ0NsYXNzID0gY2xhc3NOYW1lcygoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLWxpc3QtaXRlbScsIHRydWUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctbGlzdC1pdGVtLScgKyBmaWxlLnN0YXR1cywgdHJ1ZSksIF9jbGFzc05hbWVzKSk7XG4gICAgICAgICAgICAgICAgdmFyIHByZXZpZXcgPSBmaWxlLnVybCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdhJyxcbiAgICAgICAgICAgICAgICAgICAgX2V4dGVuZHMoe30sIGZpbGUubGlua1Byb3BzLCB7IGhyZWY6IGZpbGUudXJsLCB0YXJnZXQ6ICdfYmxhbmsnLCByZWw6ICdub29wZW5lciBub3JlZmVycmVyJywgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWxpc3QtaXRlbS1uYW1lJywgb25DbGljazogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5oYW5kbGVQcmV2aWV3KGZpbGUsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGl0bGU6IGZpbGUubmFtZSB9KSxcbiAgICAgICAgICAgICAgICAgICAgZmlsZS5uYW1lXG4gICAgICAgICAgICAgICAgKSA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctbGlzdC1pdGVtLW5hbWUnLCBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMzLmhhbmRsZVByZXZpZXcoZmlsZSwgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0aXRsZTogZmlsZS5uYW1lIH0sXG4gICAgICAgICAgICAgICAgICAgIGZpbGUubmFtZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdmFyIHN0eWxlID0ge1xuICAgICAgICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdmFyIHByZXZpZXdJY29uID0gc2hvd1ByZXZpZXdJY29uID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2EnLFxuICAgICAgICAgICAgICAgICAgICB7IGhyZWY6IGZpbGUudXJsIHx8IGZpbGUudGh1bWJVcmwsIHRhcmdldDogJ19ibGFuaycsIHJlbDogJ25vb3BlbmVyIG5vcmVmZXJyZXInLCBzdHlsZTogZmlsZS51cmwgfHwgZmlsZS50aHVtYlVybCA/IHVuZGVmaW5lZCA6IHN0eWxlLCBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMzLmhhbmRsZVByZXZpZXcoZmlsZSwgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0aXRsZTogbG9jYWxlLnByZXZpZXdGaWxlIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyB0eXBlOiAnZXllLW8nIH0pXG4gICAgICAgICAgICAgICAgKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgdmFyIHJlbW92ZUljb24gPSBzaG93UmVtb3ZlSWNvbiA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyB0eXBlOiAnZGVsZXRlJywgdGl0bGU6IGxvY2FsZS5yZW1vdmVGaWxlLCBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5oYW5kbGVDbG9zZShmaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgfSB9KSA6IG51bGw7XG4gICAgICAgICAgICAgICAgdmFyIHJlbW92ZUljb25Dcm9zcyA9IHNob3dSZW1vdmVJY29uID8gUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7IHR5cGU6ICdjcm9zcycsIHRpdGxlOiBsb2NhbGUucmVtb3ZlRmlsZSwgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczMuaGFuZGxlQ2xvc2UoZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gfSkgOiBudWxsO1xuICAgICAgICAgICAgICAgIHZhciBhY3Rpb25zID0gbGlzdFR5cGUgPT09ICdwaWN0dXJlLWNhcmQnICYmIGZpbGUuc3RhdHVzICE9PSAndXBsb2FkaW5nJyA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctbGlzdC1pdGVtLWFjdGlvbnMnIH0sXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXdJY29uLFxuICAgICAgICAgICAgICAgICAgICByZW1vdmVJY29uXG4gICAgICAgICAgICAgICAgKSA6IHJlbW92ZUljb25Dcm9zcztcbiAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICBpZiAoZmlsZS5yZXNwb25zZSAmJiB0eXBlb2YgZmlsZS5yZXNwb25zZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGZpbGUucmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IGZpbGUuZXJyb3IgJiYgZmlsZS5lcnJvci5zdGF0dXNUZXh0IHx8IGxvY2FsZS51cGxvYWRFcnJvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGljb25BbmRQcmV2aWV3ID0gZmlsZS5zdGF0dXMgPT09ICdlcnJvcicgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBUb29sdGlwLFxuICAgICAgICAgICAgICAgICAgICB7IHRpdGxlOiBtZXNzYWdlIH0sXG4gICAgICAgICAgICAgICAgICAgIGljb24sXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXdcbiAgICAgICAgICAgICAgICApIDogUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICBpY29uLFxuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBpbmZvVXBsb2FkaW5nQ2xhc3MsIGtleTogZmlsZS51aWQgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctbGlzdC1pdGVtLWluZm8nIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uQW5kUHJldmlld1xuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgQW5pbWF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdHJhbnNpdGlvbk5hbWU6ICdmYWRlJywgY29tcG9uZW50OiAnJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBsaXN0Q2xhc3NOYW1lcyA9IGNsYXNzTmFtZXMoKF9jbGFzc05hbWVzMiA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMyLCBwcmVmaXhDbHMgKyAnLWxpc3QnLCB0cnVlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzMiwgcHJlZml4Q2xzICsgJy1saXN0LScgKyBsaXN0VHlwZSwgdHJ1ZSksIF9jbGFzc05hbWVzMikpO1xuICAgICAgICAgICAgdmFyIGFuaW1hdGlvbkRpcmVjdGlvbiA9IGxpc3RUeXBlID09PSAncGljdHVyZS1jYXJkJyA/ICdhbmltYXRlLWlubGluZScgOiAnYW5pbWF0ZSc7XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICBBbmltYXRlLFxuICAgICAgICAgICAgICAgIHsgdHJhbnNpdGlvbk5hbWU6IHByZWZpeENscyArICctJyArIGFuaW1hdGlvbkRpcmVjdGlvbiwgY29tcG9uZW50OiAnZGl2JywgY2xhc3NOYW1lOiBsaXN0Q2xhc3NOYW1lcyB9LFxuICAgICAgICAgICAgICAgIGxpc3RcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gVXBsb2FkTGlzdDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgVXBsb2FkTGlzdDtcblxuVXBsb2FkTGlzdC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgbGlzdFR5cGU6ICd0ZXh0JyxcbiAgICBwcm9ncmVzc0F0dHI6IHtcbiAgICAgICAgc3Ryb2tlV2lkdGg6IDIsXG4gICAgICAgIHNob3dJbmZvOiBmYWxzZVxuICAgIH0sXG4gICAgcHJlZml4Q2xzOiAnYW50LXVwbG9hZCcsXG4gICAgc2hvd1JlbW92ZUljb246IHRydWUsXG4gICAgc2hvd1ByZXZpZXdJY29uOiB0cnVlXG59OyIsImltcG9ydCBVcGxvYWQgZnJvbSAnLi9VcGxvYWQnO1xuaW1wb3J0IERyYWdnZXIgZnJvbSAnLi9EcmFnZ2VyJztcblVwbG9hZC5EcmFnZ2VyID0gRHJhZ2dlcjtcbmV4cG9ydCBkZWZhdWx0IFVwbG9hZDsiLCJpbXBvcnQgJy4uLy4uL3N0eWxlL2luZGV4LmNzcyc7XG5pbXBvcnQgJy4vaW5kZXguY3NzJztcbi8vIHN0eWxlIGRlcGVuZGVuY2llc1xuaW1wb3J0ICcuLi8uLi9wcm9ncmVzcy9zdHlsZS9jc3MnO1xuaW1wb3J0ICcuLi8uLi90b29sdGlwL3N0eWxlL2Nzcyc7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gVCgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbi8vIEZpeCBJRSBmaWxlLnN0YXR1cyBwcm9ibGVtXG4vLyB2aWEgY29waW5nIGEgbmV3IE9iamVjdFxuZXhwb3J0IGZ1bmN0aW9uIGZpbGVUb09iamVjdChmaWxlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGFzdE1vZGlmaWVkOiBmaWxlLmxhc3RNb2RpZmllZCxcbiAgICAgICAgbGFzdE1vZGlmaWVkRGF0ZTogZmlsZS5sYXN0TW9kaWZpZWREYXRlLFxuICAgICAgICBuYW1lOiBmaWxlLmZpbGVuYW1lIHx8IGZpbGUubmFtZSxcbiAgICAgICAgc2l6ZTogZmlsZS5zaXplLFxuICAgICAgICB0eXBlOiBmaWxlLnR5cGUsXG4gICAgICAgIHVpZDogZmlsZS51aWQsXG4gICAgICAgIHJlc3BvbnNlOiBmaWxlLnJlc3BvbnNlLFxuICAgICAgICBlcnJvcjogZmlsZS5lcnJvcixcbiAgICAgICAgcGVyY2VudDogMCxcbiAgICAgICAgb3JpZ2luRmlsZU9iajogZmlsZVxuICAgIH07XG59XG4vKipcbiAqIOeUn+aIkFByb2dyZXNzIHBlcmNlbnQ6IDAuMSAtPiAwLjk4XG4gKiAgIC0gZm9yIGllXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZW5QZXJjZW50QWRkKCkge1xuICAgIHZhciBrID0gMC4xO1xuICAgIHZhciBpID0gMC4wMTtcbiAgICB2YXIgZW5kID0gMC45ODtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gcztcbiAgICAgICAgaWYgKHN0YXJ0ID49IGVuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXJ0O1xuICAgICAgICB9XG4gICAgICAgIHN0YXJ0ICs9IGs7XG4gICAgICAgIGsgPSBrIC0gaTtcbiAgICAgICAgaWYgKGsgPCAwLjAwMSkge1xuICAgICAgICAgICAgayA9IDAuMDAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdGFydCAqIDEwMDtcbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpbGVJdGVtKGZpbGUsIGZpbGVMaXN0KSB7XG4gICAgdmFyIG1hdGNoS2V5ID0gZmlsZS51aWQgIT09IHVuZGVmaW5lZCA/ICd1aWQnIDogJ25hbWUnO1xuICAgIHJldHVybiBmaWxlTGlzdC5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW1bbWF0Y2hLZXldID09PSBmaWxlW21hdGNoS2V5XTtcbiAgICB9KVswXTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGaWxlSXRlbShmaWxlLCBmaWxlTGlzdCkge1xuICAgIHZhciBtYXRjaEtleSA9IGZpbGUudWlkICE9PSB1bmRlZmluZWQgPyAndWlkJyA6ICduYW1lJztcbiAgICB2YXIgcmVtb3ZlZCA9IGZpbGVMaXN0LmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbVttYXRjaEtleV0gIT09IGZpbGVbbWF0Y2hLZXldO1xuICAgIH0pO1xuICAgIGlmIChyZW1vdmVkLmxlbmd0aCA9PT0gZmlsZUxpc3QubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gcmVtb3ZlZDtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogc3R5bGVsaW50LWRpc2FibGUgYXQtcnVsZS1lbXB0eS1saW5lLWJlZm9yZSxhdC1ydWxlLW5hbWUtc3BhY2UtYWZ0ZXIsYXQtcnVsZS1uby11bmtub3duICovXFxuLyogc3R5bGVsaW50LWRpc2FibGUgbm8tZHVwbGljYXRlLXNlbGVjdG9ycyAqL1xcbi8qIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLWJhbmctc3BhY2UtYmVmb3JlLG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnMgKi9cXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1iYW5nLXNwYWNlLWJlZm9yZSxuby1kdXBsaWNhdGUtc2VsZWN0b3JzICovXFxuLmFudC1wcm9ncmVzcyB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbm9zcGFjZWQgTnVtYmVyXFxcIiwgXFxcIkNoaW5lc2UgUXVvdGVcXFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIlBpbmdGYW5nIFNDXFxcIiwgXFxcIkhpcmFnaW5vIFNhbnMgR0JcXFwiLCBcXFwiTWljcm9zb2Z0IFlhSGVpXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uYW50LXByb2dyZXNzLWxpbmUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5hbnQtcHJvZ3Jlc3Mtc21hbGwuYW50LXByb2dyZXNzLWxpbmUsXFxuLmFudC1wcm9ncmVzcy1zbWFsbC5hbnQtcHJvZ3Jlc3MtbGluZSAuYW50LXByb2dyZXNzLXRleHQgLmFudGljb24ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4uYW50LXByb2dyZXNzLW91dGVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgcGFkZGluZy1yaWdodDogMDtcXG59XFxuLmFudC1wcm9ncmVzcy1zaG93LWluZm8gLmFudC1wcm9ncmVzcy1vdXRlciB7XFxuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKDJlbSArIDhweCk7XFxuICBtYXJnaW4tcmlnaHQ6IGNhbGMoLTJlbSAtIDhweCk7XFxufVxcbi5hbnQtcHJvZ3Jlc3MtaW5uZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYW50LXByb2dyZXNzLWNpcmNsZS10cmFpbCB7XFxuICBzdHJva2U6ICNmNWY1ZjU7XFxufVxcbi5hbnQtcHJvZ3Jlc3MtY2lyY2xlLXBhdGgge1xcbiAgc3Ryb2tlOiAjMTg5MGZmO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGFudC1wcm9ncmVzcy1hcHBlYXIgMC4zcztcXG4gICAgICAgICAgYW5pbWF0aW9uOiBhbnQtcHJvZ3Jlc3MtYXBwZWFyIDAuM3M7XFxufVxcbi5hbnQtcHJvZ3Jlc3Mtc3VjY2Vzcy1iZyxcXG4uYW50LXByb2dyZXNzLWJnIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4OTBmZjtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMDgsIDAuODIsIDAuMTcsIDEpIDBzO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuMDgsIDAuODIsIDAuMTcsIDEpIDBzO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYW50LXByb2dyZXNzLXN1Y2Nlc3MtYmcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyYzQxYTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxufVxcbi5hbnQtcHJvZ3Jlc3MtdGV4dCB7XFxuICB3b3JkLWJyZWFrOiBub3JtYWw7XFxuICB3aWR0aDogMmVtO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG4uYW50LXByb2dyZXNzLXRleHQgLmFudGljb24ge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uYW50LXByb2dyZXNzLXN0YXR1cy1hY3RpdmUgLmFudC1wcm9ncmVzcy1iZzpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogYW50LXByb2dyZXNzLWFjdGl2ZSAyLjRzIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSBpbmZpbml0ZTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBhbnQtcHJvZ3Jlc3MtYWN0aXZlIDIuNHMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpIGluZmluaXRlO1xcbn1cXG4uYW50LXByb2dyZXNzLXN0YXR1cy1leGNlcHRpb24gLmFudC1wcm9ncmVzcy1iZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjUyMjJkO1xcbn1cXG4uYW50LXByb2dyZXNzLXN0YXR1cy1leGNlcHRpb24gLmFudC1wcm9ncmVzcy10ZXh0IHtcXG4gIGNvbG9yOiAjZjUyMjJkO1xcbn1cXG4uYW50LXByb2dyZXNzLXN0YXR1cy1leGNlcHRpb24gLmFudC1wcm9ncmVzcy1jaXJjbGUtcGF0aCB7XFxuICBzdHJva2U6ICNmNTIyMmQ7XFxufVxcbi5hbnQtcHJvZ3Jlc3Mtc3RhdHVzLXN1Y2Nlc3MgLmFudC1wcm9ncmVzcy1iZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTJjNDFhO1xcbn1cXG4uYW50LXByb2dyZXNzLXN0YXR1cy1zdWNjZXNzIC5hbnQtcHJvZ3Jlc3MtdGV4dCB7XFxuICBjb2xvcjogIzUyYzQxYTtcXG59XFxuLmFudC1wcm9ncmVzcy1zdGF0dXMtc3VjY2VzcyAuYW50LXByb2dyZXNzLWNpcmNsZS1wYXRoIHtcXG4gIHN0cm9rZTogIzUyYzQxYTtcXG59XFxuLmFudC1wcm9ncmVzcy1jaXJjbGUgLmFudC1wcm9ncmVzcy1pbm5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4uYW50LXByb2dyZXNzLWNpcmNsZSAuYW50LXByb2dyZXNzLXRleHQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgdG9wOiA1MCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICBsZWZ0OiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxufVxcbi5hbnQtcHJvZ3Jlc3MtY2lyY2xlIC5hbnQtcHJvZ3Jlc3MtdGV4dCAuYW50aWNvbiB7XFxuICBmb250LXNpemU6IDEuMTY2NjY2NjdlbTtcXG59XFxuLmFudC1wcm9ncmVzcy1jaXJjbGUuYW50LXByb2dyZXNzLXN0YXR1cy1leGNlcHRpb24gLmFudC1wcm9ncmVzcy10ZXh0IHtcXG4gIGNvbG9yOiAjZjUyMjJkO1xcbn1cXG4uYW50LXByb2dyZXNzLWNpcmNsZS5hbnQtcHJvZ3Jlc3Mtc3RhdHVzLXN1Y2Nlc3MgLmFudC1wcm9ncmVzcy10ZXh0IHtcXG4gIGNvbG9yOiAjNTJjNDFhO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYW50LXByb2dyZXNzLWFjdGl2ZSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDAuMTtcXG4gICAgd2lkdGg6IDA7XFxuICB9XFxuICAyMCUge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHdpZHRoOiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGFudC1wcm9ncmVzcy1hY3RpdmUge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwLjE7XFxuICAgIHdpZHRoOiAwO1xcbiAgfVxcbiAgMjAlIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICB3aWR0aDogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIHN0eWxlbGludC1kaXNhYmxlIGF0LXJ1bGUtZW1wdHktbGluZS1iZWZvcmUsYXQtcnVsZS1uYW1lLXNwYWNlLWFmdGVyLGF0LXJ1bGUtbm8tdW5rbm93biAqL1xcbi8qIHN0eWxlbGludC1kaXNhYmxlIG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnMgKi9cXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1iYW5nLXNwYWNlLWJlZm9yZSxuby1kdXBsaWNhdGUtc2VsZWN0b3JzICovXFxuLyogc3R5bGVsaW50LWRpc2FibGUgZGVjbGFyYXRpb24tYmFuZy1zcGFjZS1iZWZvcmUsbm8tZHVwbGljYXRlLXNlbGVjdG9ycyAqL1xcbi5hbnQtdXBsb2FkIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9ub3NwYWNlZCBOdW1iZXJcXFwiLCBcXFwiQ2hpbmVzZSBRdW90ZVxcXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiUGluZ0ZhbmcgU0NcXFwiLCBcXFwiSGlyYWdpbm8gU2FucyBHQlxcXCIsIFxcXCJNaWNyb3NvZnQgWWFIZWlcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG4uYW50LXVwbG9hZCBwIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuLmFudC11cGxvYWQtYnRuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4uYW50LXVwbG9hZCBpbnB1dFt0eXBlPVxcXCJmaWxlXFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYW50LXVwbG9hZC5hbnQtdXBsb2FkLXNlbGVjdCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5hbnQtdXBsb2FkLmFudC11cGxvYWQtc2VsZWN0LXBpY3R1cmUtY2FyZCB7XFxuICBib3JkZXI6IDFweCBkYXNoZWQgI2Q5ZDlkOTtcXG4gIHdpZHRoOiAxMDRweDtcXG4gIGhlaWdodDogMTA0cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZTtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbn1cXG4uYW50LXVwbG9hZC5hbnQtdXBsb2FkLXNlbGVjdC1waWN0dXJlLWNhcmQgPiAuYW50LXVwbG9hZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG4uYW50LXVwbG9hZC5hbnQtdXBsb2FkLXNlbGVjdC1waWN0dXJlLWNhcmQ6aG92ZXIge1xcbiAgYm9yZGVyLWNvbG9yOiAjMTg5MGZmO1xcbn1cXG4uYW50LXVwbG9hZC5hbnQtdXBsb2FkLWRyYWcge1xcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNkOWQ5ZDk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzO1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3M7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDE2cHggMDtcXG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XFxufVxcbi5hbnQtdXBsb2FkLmFudC11cGxvYWQtZHJhZy5hbnQtdXBsb2FkLWRyYWctaG92ZXI6bm90KC5hbnQtdXBsb2FkLWRpc2FibGVkKSB7XFxuICBib3JkZXI6IDJweCBkYXNoZWQgIzQwYTlmZjtcXG59XFxuLmFudC11cGxvYWQuYW50LXVwbG9hZC1kcmFnLmFudC11cGxvYWQtZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLmFudC11cGxvYWQuYW50LXVwbG9hZC1kcmFnIC5hbnQtdXBsb2FkLWJ0biB7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLmFudC11cGxvYWQuYW50LXVwbG9hZC1kcmFnIC5hbnQtdXBsb2FkLWRyYWctY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uYW50LXVwbG9hZC5hbnQtdXBsb2FkLWRyYWc6bm90KC5hbnQtdXBsb2FkLWRpc2FibGVkKTpob3ZlciB7XFxuICBib3JkZXItY29sb3I6ICM0MGE5ZmY7XFxufVxcbi5hbnQtdXBsb2FkLmFudC11cGxvYWQtZHJhZyBwLmFudC11cGxvYWQtZHJhZy1pY29uIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5hbnQtdXBsb2FkLmFudC11cGxvYWQtZHJhZyBwLmFudC11cGxvYWQtZHJhZy1pY29uIC5hbnRpY29uIHtcXG4gIGZvbnQtc2l6ZTogNDhweDtcXG4gIGNvbG9yOiAjNDBhOWZmO1xcbn1cXG4uYW50LXVwbG9hZC5hbnQtdXBsb2FkLWRyYWcgcC5hbnQtdXBsb2FkLXRleHQge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbWFyZ2luOiAwIDAgNHB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSk7XFxufVxcbi5hbnQtdXBsb2FkLmFudC11cGxvYWQtZHJhZyBwLmFudC11cGxvYWQtaGludCB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG59XFxuLmFudC11cGxvYWQuYW50LXVwbG9hZC1kcmFnIC5hbnRpY29uLXBsdXMge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcbn1cXG4uYW50LXVwbG9hZC5hbnQtdXBsb2FkLWRyYWcgLmFudGljb24tcGx1czpob3ZlciB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG59XFxuLmFudC11cGxvYWQuYW50LXVwbG9hZC1kcmFnOmhvdmVyIC5hbnRpY29uLXBsdXMge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxufVxcbi5hbnQtdXBsb2FkLWxpc3Qge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb25vc3BhY2VkIE51bWJlclxcXCIsIFxcXCJDaGluZXNlIFF1b3RlXFxcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJQaW5nRmFuZyBTQ1xcXCIsIFxcXCJIaXJhZ2lubyBTYW5zIEdCXFxcIiwgXFxcIk1pY3Jvc29mdCBZYUhlaVxcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHpvb206IDE7XFxufVxcbi5hbnQtdXBsb2FkLWxpc3Q6YmVmb3JlLFxcbi5hbnQtdXBsb2FkLWxpc3Q6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgZGlzcGxheTogdGFibGU7XFxufVxcbi5hbnQtdXBsb2FkLWxpc3Q6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBmb250LXNpemU6IDA7XFxuICBoZWlnaHQ6IDA7XFxufVxcbi5hbnQtdXBsb2FkLWxpc3QtaXRlbSB7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDIycHg7XFxufVxcbi5hbnQtdXBsb2FkLWxpc3QtaXRlbS1uYW1lIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBwYWRkaW5nLWxlZnQ6IDIycHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmFudC11cGxvYWQtbGlzdC1pdGVtLWluZm8ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMCAxMnB4IDAgNHB4O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxufVxcbi5hbnQtdXBsb2FkLWxpc3QtaXRlbS1pbmZvID4gc3BhbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmFudC11cGxvYWQtbGlzdC1pdGVtLWluZm8gLmFudGljb24tbG9hZGluZyxcXG4uYW50LXVwbG9hZC1saXN0LWl0ZW0taW5mbyAuYW50aWNvbi1wYXBlci1jbGlwIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1cHg7XFxufVxcbi5hbnQtdXBsb2FkLWxpc3QtaXRlbSAuYW50aWNvbi1jcm9zcyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXNpemU6IDEwcHggXFxcXDk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC44MzMzMzMzMykgcm90YXRlKDBkZWcpO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuODMzMzMzMzMpIHJvdGF0ZSgwZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgzMzMzMzMzKSByb3RhdGUoMGRlZyk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3M7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xcbiAgb3BhY2l0eTogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiA0cHg7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xcbn1cXG46cm9vdCAuYW50LXVwbG9hZC1saXN0LWl0ZW0gLmFudGljb24tY3Jvc3Mge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4uYW50LXVwbG9hZC1saXN0LWl0ZW0gLmFudGljb24tY3Jvc3M6aG92ZXIge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxufVxcbi5hbnQtdXBsb2FkLWxpc3QtaXRlbTpob3ZlciAuYW50LXVwbG9hZC1saXN0LWl0ZW0taW5mbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZmN2ZmO1xcbn1cXG4uYW50LXVwbG9hZC1saXN0LWl0ZW06aG92ZXIgLmFudGljb24tY3Jvc3Mge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuLmFudC11cGxvYWQtbGlzdC1pdGVtLWVycm9yLFxcbi5hbnQtdXBsb2FkLWxpc3QtaXRlbS1lcnJvciAuYW50aWNvbi1wYXBlci1jbGlwLFxcbi5hbnQtdXBsb2FkLWxpc3QtaXRlbS1lcnJvciAuYW50LXVwbG9hZC1saXN0LWl0ZW0tbmFtZSB7XFxuICBjb2xvcjogI2Y1MjIyZDtcXG59XFxuLmFudC11cGxvYWQtbGlzdC1pdGVtLWVycm9yIC5hbnRpY29uLWNyb3NzIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBjb2xvcjogI2Y1MjIyZCAhaW1wb3J0YW50O1xcbn1cXG4uYW50LXVwbG9hZC1saXN0LWl0ZW0tcHJvZ3Jlc3Mge1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvdHRvbTogLTEycHg7XFxuICBwYWRkaW5nLWxlZnQ6IDI2cHg7XFxufVxcbi5hbnQtdXBsb2FkLWxpc3QtcGljdHVyZSAuYW50LXVwbG9hZC1saXN0LWl0ZW0sXFxuLmFudC11cGxvYWQtbGlzdC1waWN0dXJlLWNhcmQgLmFudC11cGxvYWQtbGlzdC1pdGVtIHtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XFxuICBoZWlnaHQ6IDY2cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5hbnQtdXBsb2FkLWxpc3QtcGljdHVyZSAuYW50LXVwbG9hZC1saXN0LWl0ZW06aG92ZXIsXFxuLmFudC11cGxvYWQtbGlzdC1waWN0dXJlLWNhcmQgLmFudC11cGxvYWQtbGlzdC1pdGVtOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG4uYW50LXVwbG9hZC1saXN0LXBpY3R1cmUgLmFudC11cGxvYWQtbGlzdC1pdGVtLWVycm9yLFxcbi5hbnQtdXBsb2FkLWxpc3QtcGljdHVyZS1jYXJkIC5hbnQtdXBsb2FkLWxpc3QtaXRlbS1lcnJvciB7XFxuICBib3JkZXItY29sb3I6ICNmNTIyMmQ7XFxufVxcbi5hbnQtdXBsb2FkLWxpc3QtcGljdHVyZSAuYW50LXVwbG9hZC1saXN0LWl0ZW0taW5mbyxcXG4uYW50LXVwbG9hZC1saXN0LXBpY3R1cmUtY2FyZCAuYW50LXVwbG9hZC1saXN0LWl0ZW0taW5mbyB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4uYW50LXVwbG9hZC1saXN0LXBpY3R1cmUgLmFudC11cGxvYWQtbGlzdC1pdGVtOmhvdmVyIC5hbnQtdXBsb2FkLWxpc3QtaXRlbS1pbmZvLFxcbi5hbnQtdXBsb2FkLWxpc3QtcGljdHVyZS1jYXJkIC5hbnQtdXBsb2FkLWxpc3QtaXRlbTpob3ZlciAuYW50LXVwbG9hZC1saXN0LWl0ZW0taW5mbyB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuLmFudC11cGxvYWQtbGlzdC1waWN0dXJlIC5hbnQtdXBsb2FkLWxpc3QtaXRlbS11cGxvYWRpbmcsXFxuLmFudC11cGxvYWQtbGlzdC1waWN0dXJlLWNhcmQgLmFudC11cGxvYWQtbGlzdC1pdGVtLXVwbG9hZGluZyB7XFxuICBib3JkZXItc3R5bGU6IGRhc2hlZDtcXG59XFxuLmFudC11cGxvYWQtbGlzdC1waWN0dXJlIC5hbnQtdXBsb2FkLWxpc3QtaXRlbS10aHVtYm5haWwsXFxuLmFudC11cGxvYWQtbGlzdC1waWN0dXJlLWNhcmQgLmFudC11cGxvYWQtbGlzdC1pdGVtLXRodW1ibmFpbCB7XFxuICB3aWR0aDogNDhweDtcXG4gIGhlaWdodDogNDhweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogOHB4O1xcbiAgbGVmdDogOHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYW50LXVwbG9hZC1saXN0LXBpY3R1cmUgLmFudC11cGxvYWQtbGlzdC1pdGVtLWljb24sXFxuLmFudC11cGxvYWQtbGlzdC1waWN0dXJlLWNhcmQgLmFudC11cGxvYWQtbGlzdC1pdGVtLWljb24ge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxuICBmb250LXNpemU6IDM2cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi10b3A6IC0xOHB4O1xcbiAgbWFyZ2luLWxlZnQ6IC0xOHB4O1xcbn1cXG4uYW50LXVwbG9hZC1saXN0LXBpY3R1cmUgLmFudC11cGxvYWQtbGlzdC1pdGVtLXRodW1ibmFpbCBpbWcsXFxuLmFudC11cGxvYWQtbGlzdC1waWN0dXJlLWNhcmQgLmFudC11cGxvYWQtbGlzdC1pdGVtLXRodW1ibmFpbCBpbWcge1xcbiAgd2lkdGg6IDQ4cHg7XFxuICBoZWlnaHQ6IDQ4cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5hbnQtdXBsb2FkLWxpc3QtcGljdHVyZSAuYW50LXVwbG9hZC1saXN0LWl0ZW0tdGh1bWJuYWlsLmFudGljb246YmVmb3JlLFxcbi5hbnQtdXBsb2FkLWxpc3QtcGljdHVyZS1jYXJkIC5hbnQtdXBsb2FkLWxpc3QtaXRlbS10aHVtYm5haWwuYW50aWNvbjpiZWZvcmUge1xcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG59XFxuLmFudC11cGxvYWQtbGlzdC1waWN0dXJlIC5hbnQtdXBsb2FkLWxpc3QtaXRlbS1uYW1lLFxcbi5hbnQtdXBsb2FkLWxpc3QtcGljdHVyZS1jYXJkIC5hbnQtdXBsb2FkLWxpc3QtaXRlbS1uYW1lIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBtYXJnaW46IDAgMCAwIDhweDtcXG4gIGxpbmUtaGVpZ2h0OiA0NHB4O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcXG4gIHBhZGRpbmctbGVmdDogNDhweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLmFudC11cGxvYWQtbGlzdC1waWN0dXJlIC5hbnQtdXBsb2FkLWxpc3QtaXRlbS11cGxvYWRpbmcgLmFudC11cGxvYWQtbGlzdC1pdGVtLW5hbWUsXFxuLmFudC11cGxvYWQtbGlzdC1waWN0dXJlLWNhcmQgLmFudC11cGxvYWQtbGlzdC1pdGVtLXVwbG9hZGluZyAuYW50LXVwbG9hZC1saXN0LWl0ZW0tbmFtZSB7XFxuICBsaW5lLWhlaWdodDogMjhweDtcXG59XFxuLmFudC11cGxvYWQtbGlzdC1waWN0dXJlIC5hbnQtdXBsb2FkLWxpc3QtaXRlbS1wcm9ncmVzcyxcXG4uYW50LXVwbG9hZC1saXN0LXBpY3R1cmUtY2FyZCAuYW50LXVwbG9hZC1saXN0LWl0ZW0tcHJvZ3Jlc3Mge1xcbiAgcGFkZGluZy1sZWZ0OiA1NnB4O1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGJvdHRvbTogMTRweDtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNHB4KTtcXG59XFxuLmFudC11cGxvYWQtbGlzdC1waWN0dXJlIC5hbnRpY29uLWNyb3NzLFxcbi5hbnQtdXBsb2FkLWxpc3QtcGljdHVyZS1jYXJkIC5hbnRpY29uLWNyb3NzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA4cHg7XFxuICB0b3A6IDhweDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG4uYW50LXVwbG9hZC1saXN0LXBpY3R1cmUtY2FyZCB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcbi5hbnQtdXBsb2FkLWxpc3QtcGljdHVyZS1jYXJkLmFudC11cGxvYWQtbGlzdDphZnRlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uYW50LXVwbG9hZC1saXN0LXBpY3R1cmUtY2FyZCAuYW50LXVwbG9hZC1saXN0LWl0ZW0ge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB3aWR0aDogMTA0cHg7XFxuICBoZWlnaHQ6IDEwNHB4O1xcbiAgbWFyZ2luOiAwIDhweCA4cHggMDtcXG59XFxuLmFudC11cGxvYWQtbGlzdC1waWN0dXJlLWNhcmQgLmFudC11cGxvYWQtbGlzdC1pdGVtLWluZm8ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmFudC11cGxvYWQtbGlzdC1waWN0dXJlLWNhcmQgLmFudC11cGxvYWQtbGlzdC1pdGVtLWluZm86YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcgJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3M7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4uYW50LXVwbG9hZC1saXN0LXBpY3R1cmUtY2FyZCAuYW50LXVwbG9hZC1saXN0LWl0ZW06aG92ZXIgLmFudC11cGxvYWQtbGlzdC1pdGVtLWluZm86YmVmb3JlIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5hbnQtdXBsb2FkLWxpc3QtcGljdHVyZS1jYXJkIC5hbnQtdXBsb2FkLWxpc3QtaXRlbS1hY3Rpb25zIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgei1pbmRleDogMTA7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgb3BhY2l0eTogMDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcztcXG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XFxufVxcbi5hbnQtdXBsb2FkLWxpc3QtcGljdHVyZS1jYXJkIC5hbnQtdXBsb2FkLWxpc3QtaXRlbS1hY3Rpb25zIC5hbnRpY29uLWV5ZS1vLFxcbi5hbnQtdXBsb2FkLWxpc3QtcGljdHVyZS1jYXJkIC5hbnQtdXBsb2FkLWxpc3QtaXRlbS1hY3Rpb25zIC5hbnRpY29uLWRlbGV0ZSB7XFxuICB6LWluZGV4OiAxMDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcztcXG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICB3aWR0aDogMTZweDtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xcbiAgbWFyZ2luOiAwIDRweDtcXG59XFxuLmFudC11cGxvYWQtbGlzdC1waWN0dXJlLWNhcmQgLmFudC11cGxvYWQtbGlzdC1pdGVtLWFjdGlvbnMgLmFudGljb24tZXllLW86aG92ZXIsXFxuLmFudC11cGxvYWQtbGlzdC1waWN0dXJlLWNhcmQgLmFudC11cGxvYWQtbGlzdC1pdGVtLWFjdGlvbnMgLmFudGljb24tZGVsZXRlOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uYW50LXVwbG9hZC1saXN0LXBpY3R1cmUtY2FyZCAuYW50LXVwbG9hZC1saXN0LWl0ZW0taW5mbzpob3ZlciArIC5hbnQtdXBsb2FkLWxpc3QtaXRlbS1hY3Rpb25zLFxcbi5hbnQtdXBsb2FkLWxpc3QtcGljdHVyZS1jYXJkIC5hbnQtdXBsb2FkLWxpc3QtaXRlbS1hY3Rpb25zOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5hbnQtdXBsb2FkLWxpc3QtcGljdHVyZS1jYXJkIC5hbnQtdXBsb2FkLWxpc3QtaXRlbS10aHVtYm5haWwsXFxuLmFudC11cGxvYWQtbGlzdC1waWN0dXJlLWNhcmQgLmFudC11cGxvYWQtbGlzdC1pdGVtLXRodW1ibmFpbCBpbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBzdGF0aWM7XFxufVxcbi5hbnQtdXBsb2FkLWxpc3QtcGljdHVyZS1jYXJkIC5hbnQtdXBsb2FkLWxpc3QtaXRlbS1uYW1lIHtcXG4gIG1hcmdpbjogOHB4IDAgMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmFudC11cGxvYWQtbGlzdC1waWN0dXJlLWNhcmQgLmFudGljb24tcGljdHVyZSArIC5hbnQtdXBsb2FkLWxpc3QtaXRlbS1uYW1lIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uYW50LXVwbG9hZC1saXN0LXBpY3R1cmUtY2FyZCAuYW50LXVwbG9hZC1saXN0LWl0ZW0tdXBsb2FkaW5nLmFudC11cGxvYWQtbGlzdC1pdGVtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxufVxcbi5hbnQtdXBsb2FkLWxpc3QtcGljdHVyZS1jYXJkIC5hbnQtdXBsb2FkLWxpc3QtaXRlbS11cGxvYWRpbmcgLmFudC11cGxvYWQtbGlzdC1pdGVtLWluZm8ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4uYW50LXVwbG9hZC1saXN0LXBpY3R1cmUtY2FyZCAuYW50LXVwbG9hZC1saXN0LWl0ZW0tdXBsb2FkaW5nIC5hbnQtdXBsb2FkLWxpc3QtaXRlbS1pbmZvOmJlZm9yZSxcXG4uYW50LXVwbG9hZC1saXN0LXBpY3R1cmUtY2FyZCAuYW50LXVwbG9hZC1saXN0LWl0ZW0tdXBsb2FkaW5nIC5hbnQtdXBsb2FkLWxpc3QtaXRlbS1pbmZvIC5hbnRpY29uLWV5ZS1vLFxcbi5hbnQtdXBsb2FkLWxpc3QtcGljdHVyZS1jYXJkIC5hbnQtdXBsb2FkLWxpc3QtaXRlbS11cGxvYWRpbmcgLmFudC11cGxvYWQtbGlzdC1pdGVtLWluZm8gLmFudGljb24tZGVsZXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5hbnQtdXBsb2FkLWxpc3QtcGljdHVyZS1jYXJkIC5hbnQtdXBsb2FkLWxpc3QtaXRlbS11cGxvYWRpbmctdGV4dCB7XFxuICBtYXJnaW4tdG9wOiAxOHB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxufVxcbi5hbnQtdXBsb2FkLWxpc3QtcGljdHVyZS1jYXJkIC5hbnQtdXBsb2FkLWxpc3QtaXRlbS1wcm9ncmVzcyB7XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxuICBib3R0b206IDMycHg7XFxufVxcbi5hbnQtdXBsb2FkLWxpc3QgLmFudC11cGxvYWQtc3VjY2Vzcy1pY29uIHtcXG4gIGNvbG9yOiAjNTJjNDFhO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5hbnQtdXBsb2FkLWxpc3QgLmFudC11cGxvYWQtYW5pbWF0ZS1lbnRlcixcXG4uYW50LXVwbG9hZC1saXN0IC5hbnQtdXBsb2FkLWFuaW1hdGUtbGVhdmUsXFxuLmFudC11cGxvYWQtbGlzdCAuYW50LXVwbG9hZC1hbmltYXRlLWlubGluZS1lbnRlcixcXG4uYW50LXVwbG9hZC1saXN0IC5hbnQtdXBsb2FkLWFuaW1hdGUtaW5saW5lLWxlYXZlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAuM3M7XFxuICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjNzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBjdWJpYy1iZXppZXIoMC43OCwgMC4xNCwgMC4xNSwgMC44Nik7XFxuICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGN1YmljLWJlemllcigwLjc4LCAwLjE0LCAwLjE1LCAwLjg2KTtcXG59XFxuLmFudC11cGxvYWQtbGlzdCAuYW50LXVwbG9hZC1hbmltYXRlLWVudGVyIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHVwbG9hZEFuaW1hdGVJbjtcXG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHVwbG9hZEFuaW1hdGVJbjtcXG59XFxuLmFudC11cGxvYWQtbGlzdCAuYW50LXVwbG9hZC1hbmltYXRlLWxlYXZlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHVwbG9hZEFuaW1hdGVPdXQ7XFxuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiB1cGxvYWRBbmltYXRlT3V0O1xcbn1cXG4uYW50LXVwbG9hZC1saXN0IC5hbnQtdXBsb2FkLWFuaW1hdGUtaW5saW5lLWVudGVyIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHVwbG9hZEFuaW1hdGVJbmxpbmVJbjtcXG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHVwbG9hZEFuaW1hdGVJbmxpbmVJbjtcXG59XFxuLmFudC11cGxvYWQtbGlzdCAuYW50LXVwbG9hZC1hbmltYXRlLWlubGluZS1sZWF2ZSB7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiB1cGxvYWRBbmltYXRlSW5saW5lT3V0O1xcbiAgICAgICAgICBhbmltYXRpb24tbmFtZTogdXBsb2FkQW5pbWF0ZUlubGluZU91dDtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHVwbG9hZEFuaW1hdGVJbiB7XFxuICBmcm9tIHtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgdXBsb2FkQW5pbWF0ZUluIHtcXG4gIGZyb20ge1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHVwbG9hZEFuaW1hdGVPdXQge1xcbiAgdG8ge1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyB1cGxvYWRBbmltYXRlT3V0IHtcXG4gIHRvIHtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyB1cGxvYWRBbmltYXRlSW5saW5lSW4ge1xcbiAgZnJvbSB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyB1cGxvYWRBbmltYXRlSW5saW5lSW4ge1xcbiAgZnJvbSB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHVwbG9hZEFuaW1hdGVJbmxpbmVPdXQge1xcbiAgdG8ge1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgdXBsb2FkQW5pbWF0ZUlubGluZU91dCB7XFxuICB0byB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5iYXRjaF9wcm9jZXNzX3NlbGVjdCB7XFxyXFxuICAgIHdpZHRoOiAxMzBweCFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbi5iYXRjaF9wcm9jZXNzX2Zye1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxufVxcclxcbi5iYXRjaF9wcm9jZXNzX2FjdGlvbl9iYXJ7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHggMDtcXHJcXG59XFxyXFxuLmJhdGNoX3Byb2Nlc3NfYWN0aW9uX2JhciBidXR0b257XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXHJcXG59XFxyXFxuLmJhdGNoX3Byb2Nlc3Nfb3BlcmF0ZXtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiRTov5YmN56uvL2pteWQtYW1zL3BjL3NyYy9wYWdlcy9iYXRjaF9wcm9jZXNzL2JhdGNoX3Byb2Nlc3MuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksdUJBQXVCO0NBQzFCO0FBQ0Q7SUFDSSxhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksbUJBQW1CO0NBQ3RCXCIsXCJmaWxlXCI6XCJiYXRjaF9wcm9jZXNzLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2VsZWN0IHtcXHJcXG4gICAgd2lkdGg6IDEzMHB4IWltcG9ydGFudDtcXHJcXG59XFxyXFxuLmZye1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxufVxcclxcbi5hY3Rpb25fYmFye1xcclxcbiAgICBwYWRkaW5nOiAxNXB4IDA7XFxyXFxufVxcclxcbi5hY3Rpb25fYmFyIGJ1dHRvbntcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcclxcbn1cXHJcXG4ub3BlcmF0ZXtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwic2VsZWN0XCI6IFwiYmF0Y2hfcHJvY2Vzc19zZWxlY3RcIixcblx0XCJmclwiOiBcImJhdGNoX3Byb2Nlc3NfZnJcIixcblx0XCJhY3Rpb25fYmFyXCI6IFwiYmF0Y2hfcHJvY2Vzc19hY3Rpb25fYmFyXCIsXG5cdFwib3BlcmF0ZVwiOiBcImJhdGNoX3Byb2Nlc3Nfb3BlcmF0ZVwiXG59OyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgRGF0YVZpZXcgPSBnZXROYXRpdmUocm9vdCwgJ0RhdGFWaWV3Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0YVZpZXc7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFByb21pc2UgPSBnZXROYXRpdmUocm9vdCwgJ1Byb21pc2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBTZXQgPSBnZXROYXRpdmUocm9vdCwgJ1NldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldDtcbiIsInZhciBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyksXG4gICAgc2V0Q2FjaGVBZGQgPSByZXF1aXJlKCcuL19zZXRDYWNoZUFkZCcpLFxuICAgIHNldENhY2hlSGFzID0gcmVxdWlyZSgnLi9fc2V0Q2FjaGVIYXMnKTtcblxuLyoqXG4gKlxuICogQ3JlYXRlcyBhbiBhcnJheSBjYWNoZSBvYmplY3QgdG8gc3RvcmUgdW5pcXVlIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbdmFsdWVzXSBUaGUgdmFsdWVzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTZXRDYWNoZSh2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMgPT0gbnVsbCA/IDAgOiB2YWx1ZXMubGVuZ3RoO1xuXG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGU7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdGhpcy5hZGQodmFsdWVzW2luZGV4XSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFNldENhY2hlYC5cblNldENhY2hlLnByb3RvdHlwZS5hZGQgPSBTZXRDYWNoZS5wcm90b3R5cGUucHVzaCA9IHNldENhY2hlQWRkO1xuU2V0Q2FjaGUucHJvdG90eXBlLmhhcyA9IHNldENhY2hlSGFzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldENhY2hlO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBXZWFrTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdXZWFrTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gV2Vha01hcDtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZpbHRlcmAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGZpbHRlcmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheUZpbHRlcihhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXNJbmRleCA9IDAsXG4gICAgICByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXN1bHRbcmVzSW5kZXgrK10gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUZpbHRlcjtcbiIsInZhciBiYXNlSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Jhc2VJbmRleE9mJyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmluY2x1ZGVzYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIHNwZWNpZnlpbmcgYW4gaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHRhcmdldCBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdGFyZ2V0YCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBhcnJheUluY2x1ZGVzKGFycmF5LCB2YWx1ZSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJiBiYXNlSW5kZXhPZihhcnJheSwgdmFsdWUsIDApID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlJbmNsdWRlcztcbiIsIi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlIGBhcnJheUluY2x1ZGVzYCBleGNlcHQgdGhhdCBpdCBhY2NlcHRzIGEgY29tcGFyYXRvci5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0IFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29tcGFyYXRvciBUaGUgY29tcGFyYXRvciBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB0YXJnZXRgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5SW5jbHVkZXNXaXRoKGFycmF5LCB2YWx1ZSwgY29tcGFyYXRvcikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGNvbXBhcmF0b3IodmFsdWUsIGFycmF5W2luZGV4XSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlJbmNsdWRlc1dpdGg7XG4iLCIvKipcbiAqIEFwcGVuZHMgdGhlIGVsZW1lbnRzIG9mIGB2YWx1ZXNgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhcHBlbmQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlQdXNoKGFycmF5LCB2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgb2Zmc2V0ID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbb2Zmc2V0ICsgaW5kZXhdID0gdmFsdWVzW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlQdXNoO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uc29tZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbnkgZWxlbWVudCBwYXNzZXMgdGhlIHByZWRpY2F0ZSBjaGVjayxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5U29tZShhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVNvbWU7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZpbmRJbmRleGAgYW5kIGBfLmZpbmRMYXN0SW5kZXhgIHdpdGhvdXRcbiAqIHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlLCBmcm9tSW5kZXgsIGZyb21SaWdodCkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgaW5kZXggPSBmcm9tSW5kZXggKyAoZnJvbVJpZ2h0ID8gMSA6IC0xKTtcblxuICB3aGlsZSAoKGZyb21SaWdodCA/IGluZGV4LS0gOiArK2luZGV4IDwgbGVuZ3RoKSkge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRmluZEluZGV4O1xuIiwidmFyIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0QWxsS2V5c2AgYW5kIGBnZXRBbGxLZXlzSW5gIHdoaWNoIHVzZXNcbiAqIGBrZXlzRnVuY2AgYW5kIGBzeW1ib2xzRnVuY2AgdG8gZ2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN5bWJvbHNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNGdW5jLCBzeW1ib2xzRnVuYykge1xuICB2YXIgcmVzdWx0ID0ga2V5c0Z1bmMob2JqZWN0KTtcbiAgcmV0dXJuIGlzQXJyYXkob2JqZWN0KSA/IHJlc3VsdCA6IGFycmF5UHVzaChyZXN1bHQsIHN5bWJvbHNGdW5jKG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRBbGxLZXlzO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5oYXNJbmAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBrZXkgVGhlIGtleSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUhhc0luKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgIT0gbnVsbCAmJiBrZXkgaW4gT2JqZWN0KG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUhhc0luO1xuIiwidmFyIGJhc2VGaW5kSW5kZXggPSByZXF1aXJlKCcuL19iYXNlRmluZEluZGV4JyksXG4gICAgYmFzZUlzTmFOID0gcmVxdWlyZSgnLi9fYmFzZUlzTmFOJyksXG4gICAgc3RyaWN0SW5kZXhPZiA9IHJlcXVpcmUoJy4vX3N0cmljdEluZGV4T2YnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pbmRleE9mYCB3aXRob3V0IGBmcm9tSW5kZXhgIGJvdW5kcyBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZVxuICAgID8gc3RyaWN0SW5kZXhPZihhcnJheSwgdmFsdWUsIGZyb21JbmRleClcbiAgICA6IGJhc2VGaW5kSW5kZXgoYXJyYXksIGJhc2VJc05hTiwgZnJvbUluZGV4KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSW5kZXhPZjtcbiIsInZhciBiYXNlSXNFcXVhbERlZXAgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbERlZXAnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzRXF1YWxgIHdoaWNoIHN1cHBvcnRzIHBhcnRpYWwgY29tcGFyaXNvbnNcbiAqIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtib29sZWFufSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLlxuICogIDEgLSBVbm9yZGVyZWQgY29tcGFyaXNvblxuICogIDIgLSBQYXJ0aWFsIGNvbXBhcmlzb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBgdmFsdWVgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbCh2YWx1ZSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSB7XG4gIGlmICh2YWx1ZSA9PT0gb3RoZXIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCB8fCBvdGhlciA9PSBudWxsIHx8ICghaXNPYmplY3RMaWtlKHZhbHVlKSAmJiAhaXNPYmplY3RMaWtlKG90aGVyKSkpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcjtcbiAgfVxuICByZXR1cm4gYmFzZUlzRXF1YWxEZWVwKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgYmFzZUlzRXF1YWwsIHN0YWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbDtcbiIsInZhciBTdGFjayA9IHJlcXVpcmUoJy4vX1N0YWNrJyksXG4gICAgZXF1YWxBcnJheXMgPSByZXF1aXJlKCcuL19lcXVhbEFycmF5cycpLFxuICAgIGVxdWFsQnlUYWcgPSByZXF1aXJlKCcuL19lcXVhbEJ5VGFnJyksXG4gICAgZXF1YWxPYmplY3RzID0gcmVxdWlyZSgnLi9fZXF1YWxPYmplY3RzJyksXG4gICAgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbGAgZm9yIGFycmF5cyBhbmQgb2JqZWN0cyB3aGljaCBwZXJmb3Jtc1xuICogZGVlcCBjb21wYXJpc29ucyBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGVuYWJsaW5nIG9iamVjdHMgd2l0aCBjaXJjdWxhclxuICogcmVmZXJlbmNlcyB0byBiZSBjb21wYXJlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWxEZWVwKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIG9iaklzQXJyID0gaXNBcnJheShvYmplY3QpLFxuICAgICAgb3RoSXNBcnIgPSBpc0FycmF5KG90aGVyKSxcbiAgICAgIG9ialRhZyA9IG9iaklzQXJyID8gYXJyYXlUYWcgOiBnZXRUYWcob2JqZWN0KSxcbiAgICAgIG90aFRhZyA9IG90aElzQXJyID8gYXJyYXlUYWcgOiBnZXRUYWcob3RoZXIpO1xuXG4gIG9ialRhZyA9IG9ialRhZyA9PSBhcmdzVGFnID8gb2JqZWN0VGFnIDogb2JqVGFnO1xuICBvdGhUYWcgPSBvdGhUYWcgPT0gYXJnc1RhZyA/IG9iamVjdFRhZyA6IG90aFRhZztcblxuICB2YXIgb2JqSXNPYmogPSBvYmpUYWcgPT0gb2JqZWN0VGFnLFxuICAgICAgb3RoSXNPYmogPSBvdGhUYWcgPT0gb2JqZWN0VGFnLFxuICAgICAgaXNTYW1lVGFnID0gb2JqVGFnID09IG90aFRhZztcblxuICBpZiAoaXNTYW1lVGFnICYmIGlzQnVmZmVyKG9iamVjdCkpIHtcbiAgICBpZiAoIWlzQnVmZmVyKG90aGVyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBvYmpJc0FyciA9IHRydWU7XG4gICAgb2JqSXNPYmogPSBmYWxzZTtcbiAgfVxuICBpZiAoaXNTYW1lVGFnICYmICFvYmpJc09iaikge1xuICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgcmV0dXJuIChvYmpJc0FyciB8fCBpc1R5cGVkQXJyYXkob2JqZWN0KSlcbiAgICAgID8gZXF1YWxBcnJheXMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaylcbiAgICAgIDogZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCBvYmpUYWcsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xuICB9XG4gIGlmICghKGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRykpIHtcbiAgICB2YXIgb2JqSXNXcmFwcGVkID0gb2JqSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsICdfX3dyYXBwZWRfXycpLFxuICAgICAgICBvdGhJc1dyYXBwZWQgPSBvdGhJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCAnX193cmFwcGVkX18nKTtcblxuICAgIGlmIChvYmpJc1dyYXBwZWQgfHwgb3RoSXNXcmFwcGVkKSB7XG4gICAgICB2YXIgb2JqVW53cmFwcGVkID0gb2JqSXNXcmFwcGVkID8gb2JqZWN0LnZhbHVlKCkgOiBvYmplY3QsXG4gICAgICAgICAgb3RoVW53cmFwcGVkID0gb3RoSXNXcmFwcGVkID8gb3RoZXIudmFsdWUoKSA6IG90aGVyO1xuXG4gICAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgICAgcmV0dXJuIGVxdWFsRnVuYyhvYmpVbndyYXBwZWQsIG90aFVud3JhcHBlZCwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spO1xuICAgIH1cbiAgfVxuICBpZiAoIWlzU2FtZVRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICByZXR1cm4gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0VxdWFsRGVlcDtcbiIsInZhciBTdGFjayA9IHJlcXVpcmUoJy4vX1N0YWNrJyksXG4gICAgYmFzZUlzRXF1YWwgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbCcpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNNYXRjaGAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCBvZiBwcm9wZXJ0eSB2YWx1ZXMgdG8gbWF0Y2guXG4gKiBAcGFyYW0ge0FycmF5fSBtYXRjaERhdGEgVGhlIHByb3BlcnR5IG5hbWVzLCB2YWx1ZXMsIGFuZCBjb21wYXJlIGZsYWdzIHRvIG1hdGNoLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYG9iamVjdGAgaXMgYSBtYXRjaCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNNYXRjaChvYmplY3QsIHNvdXJjZSwgbWF0Y2hEYXRhLCBjdXN0b21pemVyKSB7XG4gIHZhciBpbmRleCA9IG1hdGNoRGF0YS5sZW5ndGgsXG4gICAgICBsZW5ndGggPSBpbmRleCxcbiAgICAgIG5vQ3VzdG9taXplciA9ICFjdXN0b21pemVyO1xuXG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiAhbGVuZ3RoO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBkYXRhID0gbWF0Y2hEYXRhW2luZGV4XTtcbiAgICBpZiAoKG5vQ3VzdG9taXplciAmJiBkYXRhWzJdKVxuICAgICAgICAgID8gZGF0YVsxXSAhPT0gb2JqZWN0W2RhdGFbMF1dXG4gICAgICAgICAgOiAhKGRhdGFbMF0gaW4gb2JqZWN0KVxuICAgICAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBkYXRhID0gbWF0Y2hEYXRhW2luZGV4XTtcbiAgICB2YXIga2V5ID0gZGF0YVswXSxcbiAgICAgICAgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgc3JjVmFsdWUgPSBkYXRhWzFdO1xuXG4gICAgaWYgKG5vQ3VzdG9taXplciAmJiBkYXRhWzJdKSB7XG4gICAgICBpZiAob2JqVmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHN0YWNrID0gbmV3IFN0YWNrO1xuICAgICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGN1c3RvbWl6ZXIob2JqVmFsdWUsIHNyY1ZhbHVlLCBrZXksIG9iamVjdCwgc291cmNlLCBzdGFjayk7XG4gICAgICB9XG4gICAgICBpZiAoIShyZXN1bHQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBiYXNlSXNFcXVhbChzcmNWYWx1ZSwgb2JqVmFsdWUsIENPTVBBUkVfUEFSVElBTF9GTEFHIHwgQ09NUEFSRV9VTk9SREVSRURfRkxBRywgY3VzdG9taXplciwgc3RhY2spXG4gICAgICAgICAgICA6IHJlc3VsdFxuICAgICAgICAgICkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNNYXRjaDtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYU5gIHdpdGhvdXQgc3VwcG9ydCBmb3IgbnVtYmVyIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYE5hTmAsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmFOO1xuIiwidmFyIGJhc2VNYXRjaGVzID0gcmVxdWlyZSgnLi9fYmFzZU1hdGNoZXMnKSxcbiAgICBiYXNlTWF0Y2hlc1Byb3BlcnR5ID0gcmVxdWlyZSgnLi9fYmFzZU1hdGNoZXNQcm9wZXJ0eScpLFxuICAgIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBwcm9wZXJ0eSA9IHJlcXVpcmUoJy4vcHJvcGVydHknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pdGVyYXRlZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gW3ZhbHVlPV8uaWRlbnRpdHldIFRoZSB2YWx1ZSB0byBjb252ZXJ0IHRvIGFuIGl0ZXJhdGVlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBpdGVyYXRlZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUl0ZXJhdGVlKHZhbHVlKSB7XG4gIC8vIERvbid0IHN0b3JlIHRoZSBgdHlwZW9mYCByZXN1bHQgaW4gYSB2YXJpYWJsZSB0byBhdm9pZCBhIEpJVCBidWcgaW4gU2FmYXJpIDkuXG4gIC8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTU2MDM0IGZvciBtb3JlIGRldGFpbHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiBpZGVudGl0eTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGlzQXJyYXkodmFsdWUpXG4gICAgICA/IGJhc2VNYXRjaGVzUHJvcGVydHkodmFsdWVbMF0sIHZhbHVlWzFdKVxuICAgICAgOiBiYXNlTWF0Y2hlcyh2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHByb3BlcnR5KHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXRlcmF0ZWU7XG4iLCJ2YXIgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpLFxuICAgIG5hdGl2ZUtleXMgPSByZXF1aXJlKCcuL19uYXRpdmVLZXlzJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c2Agd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5cyhvYmplY3QpIHtcbiAgaWYgKCFpc1Byb3RvdHlwZShvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXMob2JqZWN0KTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBrZXkgIT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlS2V5cztcbiIsInZhciBiYXNlSXNNYXRjaCA9IHJlcXVpcmUoJy4vX2Jhc2VJc01hdGNoJyksXG4gICAgZ2V0TWF0Y2hEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWF0Y2hEYXRhJyksXG4gICAgbWF0Y2hlc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19tYXRjaGVzU3RyaWN0Q29tcGFyYWJsZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLm1hdGNoZXNgIHdoaWNoIGRvZXNuJ3QgY2xvbmUgYHNvdXJjZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCBvZiBwcm9wZXJ0eSB2YWx1ZXMgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzcGVjIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlTWF0Y2hlcyhzb3VyY2UpIHtcbiAgdmFyIG1hdGNoRGF0YSA9IGdldE1hdGNoRGF0YShzb3VyY2UpO1xuICBpZiAobWF0Y2hEYXRhLmxlbmd0aCA9PSAxICYmIG1hdGNoRGF0YVswXVsyXSkge1xuICAgIHJldHVybiBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZShtYXRjaERhdGFbMF1bMF0sIG1hdGNoRGF0YVswXVsxXSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgPT09IHNvdXJjZSB8fCBiYXNlSXNNYXRjaChvYmplY3QsIHNvdXJjZSwgbWF0Y2hEYXRhKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTWF0Y2hlcztcbiIsInZhciBiYXNlSXNFcXVhbCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsJyksXG4gICAgZ2V0ID0gcmVxdWlyZSgnLi9nZXQnKSxcbiAgICBoYXNJbiA9IHJlcXVpcmUoJy4vaGFzSW4nKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4vX2lzS2V5JyksXG4gICAgaXNTdHJpY3RDb21wYXJhYmxlID0gcmVxdWlyZSgnLi9faXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAgbWF0Y2hlc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19tYXRjaGVzU3RyaWN0Q29tcGFyYWJsZScpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLm1hdGNoZXNQcm9wZXJ0eWAgd2hpY2ggZG9lc24ndCBjbG9uZSBgc3JjVmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBzcmNWYWx1ZSBUaGUgdmFsdWUgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzcGVjIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlTWF0Y2hlc1Byb3BlcnR5KHBhdGgsIHNyY1ZhbHVlKSB7XG4gIGlmIChpc0tleShwYXRoKSAmJiBpc1N0cmljdENvbXBhcmFibGUoc3JjVmFsdWUpKSB7XG4gICAgcmV0dXJuIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKHRvS2V5KHBhdGgpLCBzcmNWYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBvYmpWYWx1ZSA9IGdldChvYmplY3QsIHBhdGgpO1xuICAgIHJldHVybiAob2JqVmFsdWUgPT09IHVuZGVmaW5lZCAmJiBvYmpWYWx1ZSA9PT0gc3JjVmFsdWUpXG4gICAgICA/IGhhc0luKG9iamVjdCwgcGF0aClcbiAgICAgIDogYmFzZUlzRXF1YWwoc3JjVmFsdWUsIG9ialZhbHVlLCBDT01QQVJFX1BBUlRJQUxfRkxBRyB8IENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VNYXRjaGVzUHJvcGVydHk7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnByb3BlcnR5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eShrZXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wZXJ0eTtcbiIsInZhciBiYXNlR2V0ID0gcmVxdWlyZSgnLi9fYmFzZUdldCcpO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZVByb3BlcnR5YCB3aGljaCBzdXBwb3J0cyBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eURlZXAocGF0aCkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIGJhc2VHZXQob2JqZWN0LCBwYXRoKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUHJvcGVydHlEZWVwO1xuIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheUluY2x1ZGVzID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlcycpLFxuICAgIGFycmF5SW5jbHVkZXNXaXRoID0gcmVxdWlyZSgnLi9fYXJyYXlJbmNsdWRlc1dpdGgnKSxcbiAgICBjYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2NhY2hlSGFzJyksXG4gICAgY3JlYXRlU2V0ID0gcmVxdWlyZSgnLi9fY3JlYXRlU2V0JyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmlxQnlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWVdIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NvbXBhcmF0b3JdIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBkdXBsaWNhdGUgZnJlZSBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuaXEoYXJyYXksIGl0ZXJhdGVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgaW5jbHVkZXMgPSBhcnJheUluY2x1ZGVzLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgaXNDb21tb24gPSB0cnVlLFxuICAgICAgcmVzdWx0ID0gW10sXG4gICAgICBzZWVuID0gcmVzdWx0O1xuXG4gIGlmIChjb21wYXJhdG9yKSB7XG4gICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICBpbmNsdWRlcyA9IGFycmF5SW5jbHVkZXNXaXRoO1xuICB9XG4gIGVsc2UgaWYgKGxlbmd0aCA+PSBMQVJHRV9BUlJBWV9TSVpFKSB7XG4gICAgdmFyIHNldCA9IGl0ZXJhdGVlID8gbnVsbCA6IGNyZWF0ZVNldChhcnJheSk7XG4gICAgaWYgKHNldCkge1xuICAgICAgcmV0dXJuIHNldFRvQXJyYXkoc2V0KTtcbiAgICB9XG4gICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICBpbmNsdWRlcyA9IGNhY2hlSGFzO1xuICAgIHNlZW4gPSBuZXcgU2V0Q2FjaGU7XG4gIH1cbiAgZWxzZSB7XG4gICAgc2VlbiA9IGl0ZXJhdGVlID8gW10gOiByZXN1bHQ7XG4gIH1cbiAgb3V0ZXI6XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICBjb21wdXRlZCA9IGl0ZXJhdGVlID8gaXRlcmF0ZWUodmFsdWUpIDogdmFsdWU7XG5cbiAgICB2YWx1ZSA9IChjb21wYXJhdG9yIHx8IHZhbHVlICE9PSAwKSA/IHZhbHVlIDogMDtcbiAgICBpZiAoaXNDb21tb24gJiYgY29tcHV0ZWQgPT09IGNvbXB1dGVkKSB7XG4gICAgICB2YXIgc2VlbkluZGV4ID0gc2Vlbi5sZW5ndGg7XG4gICAgICB3aGlsZSAoc2VlbkluZGV4LS0pIHtcbiAgICAgICAgaWYgKHNlZW5bc2VlbkluZGV4XSA9PT0gY29tcHV0ZWQpIHtcbiAgICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGl0ZXJhdGVlKSB7XG4gICAgICAgIHNlZW4ucHVzaChjb21wdXRlZCk7XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCFpbmNsdWRlcyhzZWVuLCBjb21wdXRlZCwgY29tcGFyYXRvcikpIHtcbiAgICAgIGlmIChzZWVuICE9PSByZXN1bHQpIHtcbiAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5pcTtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGEgYGNhY2hlYCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gY2FjaGUgVGhlIGNhY2hlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGNhY2hlSGFzKGNhY2hlLCBrZXkpIHtcbiAgcmV0dXJuIGNhY2hlLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhY2hlSGFzO1xuIiwidmFyIFNldCA9IHJlcXVpcmUoJy4vX1NldCcpLFxuICAgIG5vb3AgPSByZXF1aXJlKCcuL25vb3AnKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzZXQgb2JqZWN0IG9mIGB2YWx1ZXNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhZGQgdG8gdGhlIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBzZXQuXG4gKi9cbnZhciBjcmVhdGVTZXQgPSAhKFNldCAmJiAoMSAvIHNldFRvQXJyYXkobmV3IFNldChbLC0wXSkpWzFdKSA9PSBJTkZJTklUWSkgPyBub29wIDogZnVuY3Rpb24odmFsdWVzKSB7XG4gIHJldHVybiBuZXcgU2V0KHZhbHVlcyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVNldDtcbiIsInZhciBTZXRDYWNoZSA9IHJlcXVpcmUoJy4vX1NldENhY2hlJyksXG4gICAgYXJyYXlTb21lID0gcmVxdWlyZSgnLi9fYXJyYXlTb21lJyksXG4gICAgY2FjaGVIYXMgPSByZXF1aXJlKCcuL19jYWNoZUhhcycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBhcnJheXMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7QXJyYXl9IG90aGVyIFRoZSBvdGhlciBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgYXJyYXlgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFycmF5cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEFycmF5cyhhcnJheSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRyxcbiAgICAgIGFyckxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIG90aExlbmd0aCA9IG90aGVyLmxlbmd0aDtcblxuICBpZiAoYXJyTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhKGlzUGFydGlhbCAmJiBvdGhMZW5ndGggPiBhcnJMZW5ndGgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQoYXJyYXkpO1xuICBpZiAoc3RhY2tlZCAmJiBzdGFjay5nZXQob3RoZXIpKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gIH1cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSB0cnVlLFxuICAgICAgc2VlbiA9IChiaXRtYXNrICYgQ09NUEFSRV9VTk9SREVSRURfRkxBRykgPyBuZXcgU2V0Q2FjaGUgOiB1bmRlZmluZWQ7XG5cbiAgc3RhY2suc2V0KGFycmF5LCBvdGhlcik7XG4gIHN0YWNrLnNldChvdGhlciwgYXJyYXkpO1xuXG4gIC8vIElnbm9yZSBub24taW5kZXggcHJvcGVydGllcy5cbiAgd2hpbGUgKCsraW5kZXggPCBhcnJMZW5ndGgpIHtcbiAgICB2YXIgYXJyVmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJbaW5kZXhdO1xuXG4gICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgIHZhciBjb21wYXJlZCA9IGlzUGFydGlhbFxuICAgICAgICA/IGN1c3RvbWl6ZXIob3RoVmFsdWUsIGFyclZhbHVlLCBpbmRleCwgb3RoZXIsIGFycmF5LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKGFyclZhbHVlLCBvdGhWYWx1ZSwgaW5kZXgsIGFycmF5LCBvdGhlciwgc3RhY2spO1xuICAgIH1cbiAgICBpZiAoY29tcGFyZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGNvbXBhcmVkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBhcnJheXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBpZiAoc2Vlbikge1xuICAgICAgaWYgKCFhcnJheVNvbWUob3RoZXIsIGZ1bmN0aW9uKG90aFZhbHVlLCBvdGhJbmRleCkge1xuICAgICAgICAgICAgaWYgKCFjYWNoZUhhcyhzZWVuLCBvdGhJbmRleCkgJiZcbiAgICAgICAgICAgICAgICAoYXJyVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNlZW4ucHVzaChvdGhJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIShcbiAgICAgICAgICBhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHxcbiAgICAgICAgICAgIGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKVxuICAgICAgICApKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBzdGFja1snZGVsZXRlJ10oYXJyYXkpO1xuICBzdGFja1snZGVsZXRlJ10ob3RoZXIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsQXJyYXlzO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIFVpbnQ4QXJyYXkgPSByZXF1aXJlKCcuL19VaW50OEFycmF5JyksXG4gICAgZXEgPSByZXF1aXJlKCcuL2VxJyksXG4gICAgZXF1YWxBcnJheXMgPSByZXF1aXJlKCcuL19lcXVhbEFycmF5cycpLFxuICAgIG1hcFRvQXJyYXkgPSByZXF1aXJlKCcuL19tYXBUb0FycmF5JyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xWYWx1ZU9mID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by52YWx1ZU9mIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgY29tcGFyaW5nIG9iamVjdHMgb2ZcbiAqIHRoZSBzYW1lIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjb21wYXJpbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdHMgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIHRhZywgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgZGF0YVZpZXdUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgKG9iamVjdC5ieXRlT2Zmc2V0ICE9IG90aGVyLmJ5dGVPZmZzZXQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIG9iamVjdCA9IG9iamVjdC5idWZmZXI7XG4gICAgICBvdGhlciA9IG90aGVyLmJ1ZmZlcjtcblxuICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgIWVxdWFsRnVuYyhuZXcgVWludDhBcnJheShvYmplY3QpLCBuZXcgVWludDhBcnJheShvdGhlcikpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICAgIC8vIENvZXJjZSBib29sZWFucyB0byBgMWAgb3IgYDBgIGFuZCBkYXRlcyB0byBtaWxsaXNlY29uZHMuXG4gICAgICAvLyBJbnZhbGlkIGRhdGVzIGFyZSBjb2VyY2VkIHRvIGBOYU5gLlxuICAgICAgcmV0dXJuIGVxKCtvYmplY3QsICtvdGhlcik7XG5cbiAgICBjYXNlIGVycm9yVGFnOlxuICAgICAgcmV0dXJuIG9iamVjdC5uYW1lID09IG90aGVyLm5hbWUgJiYgb2JqZWN0Lm1lc3NhZ2UgPT0gb3RoZXIubWVzc2FnZTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgLy8gQ29lcmNlIHJlZ2V4ZXMgdG8gc3RyaW5ncyBhbmQgdHJlYXQgc3RyaW5ncywgcHJpbWl0aXZlcyBhbmQgb2JqZWN0cyxcbiAgICAgIC8vIGFzIGVxdWFsLiBTZWUgaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXJlZ2V4cC5wcm90b3R5cGUudG9zdHJpbmdcbiAgICAgIC8vIGZvciBtb3JlIGRldGFpbHMuXG4gICAgICByZXR1cm4gb2JqZWN0ID09IChvdGhlciArICcnKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgdmFyIGNvbnZlcnQgPSBtYXBUb0FycmF5O1xuXG4gICAgY2FzZSBzZXRUYWc6XG4gICAgICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHO1xuICAgICAgY29udmVydCB8fCAoY29udmVydCA9IHNldFRvQXJyYXkpO1xuXG4gICAgICBpZiAob2JqZWN0LnNpemUgIT0gb3RoZXIuc2l6ZSAmJiAhaXNQYXJ0aWFsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgICAgIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gICAgICBpZiAoc3RhY2tlZCkge1xuICAgICAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgICAgIH1cbiAgICAgIGJpdG1hc2sgfD0gQ09NUEFSRV9VTk9SREVSRURfRkxBRztcblxuICAgICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgICBzdGFjay5zZXQob2JqZWN0LCBvdGhlcik7XG4gICAgICB2YXIgcmVzdWx0ID0gZXF1YWxBcnJheXMoY29udmVydChvYmplY3QpLCBjb252ZXJ0KG90aGVyKSwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG4gICAgICBzdGFja1snZGVsZXRlJ10ob2JqZWN0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICBjYXNlIHN5bWJvbFRhZzpcbiAgICAgIGlmIChzeW1ib2xWYWx1ZU9mKSB7XG4gICAgICAgIHJldHVybiBzeW1ib2xWYWx1ZU9mLmNhbGwob2JqZWN0KSA9PSBzeW1ib2xWYWx1ZU9mLmNhbGwob3RoZXIpO1xuICAgICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbEJ5VGFnO1xuIiwidmFyIGdldEFsbEtleXMgPSByZXF1aXJlKCcuL19nZXRBbGxLZXlzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIG9iamVjdHMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRyxcbiAgICAgIG9ialByb3BzID0gZ2V0QWxsS2V5cyhvYmplY3QpLFxuICAgICAgb2JqTGVuZ3RoID0gb2JqUHJvcHMubGVuZ3RoLFxuICAgICAgb3RoUHJvcHMgPSBnZXRBbGxLZXlzKG90aGVyKSxcbiAgICAgIG90aExlbmd0aCA9IG90aFByb3BzLmxlbmd0aDtcblxuICBpZiAob2JqTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhaXNQYXJ0aWFsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBpbmRleCA9IG9iakxlbmd0aDtcbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICB2YXIga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIGlmICghKGlzUGFydGlhbCA/IGtleSBpbiBvdGhlciA6IGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsIGtleSkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQob2JqZWN0KTtcbiAgaWYgKHN0YWNrZWQgJiYgc3RhY2suZ2V0KG90aGVyKSkge1xuICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICB9XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuICBzdGFjay5zZXQob2JqZWN0LCBvdGhlcik7XG4gIHN0YWNrLnNldChvdGhlciwgb2JqZWN0KTtcblxuICB2YXIgc2tpcEN0b3IgPSBpc1BhcnRpYWw7XG4gIHdoaWxlICgrK2luZGV4IDwgb2JqTGVuZ3RoKSB7XG4gICAga2V5ID0gb2JqUHJvcHNbaW5kZXhdO1xuICAgIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldLFxuICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2tleV07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgb2JqVmFsdWUsIGtleSwgb3RoZXIsIG9iamVjdCwgc3RhY2spXG4gICAgICAgIDogY3VzdG9taXplcihvYmpWYWx1ZSwgb3RoVmFsdWUsIGtleSwgb2JqZWN0LCBvdGhlciwgc3RhY2spO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBpZiAoIShjb21wYXJlZCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyAob2JqVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhvYmpWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSlcbiAgICAgICAgICA6IGNvbXBhcmVkXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHNraXBDdG9yIHx8IChza2lwQ3RvciA9IGtleSA9PSAnY29uc3RydWN0b3InKTtcbiAgfVxuICBpZiAocmVzdWx0ICYmICFza2lwQ3Rvcikge1xuICAgIHZhciBvYmpDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yLFxuICAgICAgICBvdGhDdG9yID0gb3RoZXIuY29uc3RydWN0b3I7XG5cbiAgICAvLyBOb24gYE9iamVjdGAgb2JqZWN0IGluc3RhbmNlcyB3aXRoIGRpZmZlcmVudCBjb25zdHJ1Y3RvcnMgYXJlIG5vdCBlcXVhbC5cbiAgICBpZiAob2JqQ3RvciAhPSBvdGhDdG9yICYmXG4gICAgICAgICgnY29uc3RydWN0b3InIGluIG9iamVjdCAmJiAnY29uc3RydWN0b3InIGluIG90aGVyKSAmJlxuICAgICAgICAhKHR5cGVvZiBvYmpDdG9yID09ICdmdW5jdGlvbicgJiYgb2JqQ3RvciBpbnN0YW5jZW9mIG9iakN0b3IgJiZcbiAgICAgICAgICB0eXBlb2Ygb3RoQ3RvciA9PSAnZnVuY3Rpb24nICYmIG90aEN0b3IgaW5zdGFuY2VvZiBvdGhDdG9yKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICBzdGFja1snZGVsZXRlJ10ob3RoZXIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsT2JqZWN0cztcbiIsInZhciBiYXNlR2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRBbGxLZXlzJyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5cywgZ2V0U3ltYm9scyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QWxsS2V5cztcbiIsInZhciBpc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19pc1N0cmljdENvbXBhcmFibGUnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgcHJvcGVydHkgbmFtZXMsIHZhbHVlcywgYW5kIGNvbXBhcmUgZmxhZ3Mgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbWF0Y2ggZGF0YSBvZiBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gZ2V0TWF0Y2hEYXRhKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0ga2V5cyhvYmplY3QpLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICB2YXIga2V5ID0gcmVzdWx0W2xlbmd0aF0sXG4gICAgICAgIHZhbHVlID0gb2JqZWN0W2tleV07XG5cbiAgICByZXN1bHRbbGVuZ3RoXSA9IFtrZXksIHZhbHVlLCBpc1N0cmljdENvbXBhcmFibGUodmFsdWUpXTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hdGNoRGF0YTtcbiIsInZhciBhcnJheUZpbHRlciA9IHJlcXVpcmUoJy4vX2FycmF5RmlsdGVyJyksXG4gICAgc3R1YkFycmF5ID0gcmVxdWlyZSgnLi9zdHViQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHMgPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHJldHVybiBhcnJheUZpbHRlcihuYXRpdmVHZXRTeW1ib2xzKG9iamVjdCksIGZ1bmN0aW9uKHN5bWJvbCkge1xuICAgIHJldHVybiBwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iamVjdCwgc3ltYm9sKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFN5bWJvbHM7XG4iLCJ2YXIgRGF0YVZpZXcgPSByZXF1aXJlKCcuL19EYXRhVmlldycpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIFByb21pc2UgPSByZXF1aXJlKCcuL19Qcm9taXNlJyksXG4gICAgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgV2Vha01hcCA9IHJlcXVpcmUoJy4vX1dlYWtNYXAnKSxcbiAgICBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEgYW5kIHByb21pc2VzIGluIE5vZGUuanMgPCA2LlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUdldFRhZyh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiAnJztcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYWc7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHN0cmljdCBlcXVhbGl0eSBjb21wYXJpc29ucywgaS5lLiBgPT09YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpZiBzdWl0YWJsZSBmb3Igc3RyaWN0XG4gKiAgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNTdHJpY3RDb21wYXJhYmxlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgJiYgIWlzT2JqZWN0KHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N0cmljdENvbXBhcmFibGU7XG4iLCIvKipcbiAqIENvbnZlcnRzIGBtYXBgIHRvIGl0cyBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBrZXktdmFsdWUgcGFpcnMuXG4gKi9cbmZ1bmN0aW9uIG1hcFRvQXJyYXkobWFwKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobWFwLnNpemUpO1xuXG4gIG1hcC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSBba2V5LCB2YWx1ZV07XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcFRvQXJyYXk7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgbWF0Y2hlc1Byb3BlcnR5YCBmb3Igc291cmNlIHZhbHVlcyBzdWl0YWJsZVxuICogZm9yIHN0cmljdCBlcXVhbGl0eSBjb21wYXJpc29ucywgaS5lLiBgPT09YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IHNyY1ZhbHVlIFRoZSB2YWx1ZSB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKGtleSwgc3JjVmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0W2tleV0gPT09IHNyY1ZhbHVlICYmXG4gICAgICAoc3JjVmFsdWUgIT09IHVuZGVmaW5lZCB8fCAoa2V5IGluIE9iamVjdChvYmplY3QpKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWF0Y2hlc1N0cmljdENvbXBhcmFibGU7XG4iLCJ2YXIgb3ZlckFyZyA9IHJlcXVpcmUoJy4vX292ZXJBcmcnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUtleXMgPSBvdmVyQXJnKE9iamVjdC5rZXlzLCBPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUtleXM7XG4iLCIvKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogQWRkcyBgdmFsdWVgIHRvIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgYWRkXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBhbGlhcyBwdXNoXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjYWNoZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUFkZCh2YWx1ZSkge1xuICB0aGlzLl9fZGF0YV9fLnNldCh2YWx1ZSwgSEFTSF9VTkRFRklORUQpO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRDYWNoZUFkZDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgaW4gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVIYXModmFsdWUpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRDYWNoZUhhcztcbiIsIi8qKlxuICogQ29udmVydHMgYHNldGAgdG8gYW4gYXJyYXkgb2YgaXRzIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gc2V0VG9BcnJheShzZXQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShzZXQuc2l6ZSk7XG5cbiAgc2V0LmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0VG9BcnJheTtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmluZGV4T2ZgIHdoaWNoIHBlcmZvcm1zIHN0cmljdCBlcXVhbGl0eVxuICogY29tcGFyaXNvbnMgb2YgdmFsdWVzLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIHN0cmljdEluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgdmFyIGluZGV4ID0gZnJvbUluZGV4IC0gMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChhcnJheVtpbmRleF0gPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpY3RJbmRleE9mO1xuIiwidmFyIGJhc2VIYXNJbiA9IHJlcXVpcmUoJy4vX2Jhc2VIYXNJbicpLFxuICAgIGhhc1BhdGggPSByZXF1aXJlKCcuL19oYXNQYXRoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBwYXRoYCBpcyBhIGRpcmVjdCBvciBpbmhlcml0ZWQgcHJvcGVydHkgb2YgYG9iamVjdGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHBhdGhgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0gXy5jcmVhdGUoeyAnYSc6IF8uY3JlYXRlKHsgJ2InOiAyIH0pIH0pO1xuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCAnYS5iJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsIFsnYScsICdiJ10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCAnYicpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaGFzSW4ob2JqZWN0LCBwYXRoKSB7XG4gIHJldHVybiBvYmplY3QgIT0gbnVsbCAmJiBoYXNQYXRoKG9iamVjdCwgcGF0aCwgYmFzZUhhc0luKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNJbjtcbiIsInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUtleXMnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5cztcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgdW5kZWZpbmVkYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8ubm9vcCk7XG4gKiAvLyA9PiBbdW5kZWZpbmVkLCB1bmRlZmluZWRdXG4gKi9cbmZ1bmN0aW9uIG5vb3AoKSB7XG4gIC8vIE5vIG9wZXJhdGlvbiBwZXJmb3JtZWQuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gbm9vcDtcbiIsInZhciBiYXNlUHJvcGVydHkgPSByZXF1aXJlKCcuL19iYXNlUHJvcGVydHknKSxcbiAgICBiYXNlUHJvcGVydHlEZWVwID0gcmVxdWlyZSgnLi9fYmFzZVByb3BlcnR5RGVlcCcpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9faXNLZXknKSxcbiAgICB0b0tleSA9IHJlcXVpcmUoJy4vX3RvS2V5Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgdmFsdWUgYXQgYHBhdGhgIG9mIGEgZ2l2ZW4gb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW1xuICogICB7ICdhJzogeyAnYic6IDIgfSB9LFxuICogICB7ICdhJzogeyAnYic6IDEgfSB9XG4gKiBdO1xuICpcbiAqIF8ubWFwKG9iamVjdHMsIF8ucHJvcGVydHkoJ2EuYicpKTtcbiAqIC8vID0+IFsyLCAxXVxuICpcbiAqIF8ubWFwKF8uc29ydEJ5KG9iamVjdHMsIF8ucHJvcGVydHkoWydhJywgJ2InXSkpLCAnYS5iJyk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqL1xuZnVuY3Rpb24gcHJvcGVydHkocGF0aCkge1xuICByZXR1cm4gaXNLZXkocGF0aCkgPyBiYXNlUHJvcGVydHkodG9LZXkocGF0aCkpIDogYmFzZVByb3BlcnR5RGVlcChwYXRoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwcm9wZXJ0eTtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkFycmF5O1xuIiwidmFyIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpLFxuICAgIGJhc2VVbmlxID0gcmVxdWlyZSgnLi9fYmFzZVVuaXEnKTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLnVuaXFgIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYGl0ZXJhdGVlYCB3aGljaCBpc1xuICogaW52b2tlZCBmb3IgZWFjaCBlbGVtZW50IGluIGBhcnJheWAgdG8gZ2VuZXJhdGUgdGhlIGNyaXRlcmlvbiBieSB3aGljaFxuICogdW5pcXVlbmVzcyBpcyBjb21wdXRlZC4gVGhlIG9yZGVyIG9mIHJlc3VsdCB2YWx1ZXMgaXMgZGV0ZXJtaW5lZCBieSB0aGVcbiAqIG9yZGVyIHRoZXkgb2NjdXIgaW4gdGhlIGFycmF5LiBUaGUgaXRlcmF0ZWUgaXMgaW52b2tlZCB3aXRoIG9uZSBhcmd1bWVudDpcbiAqICh2YWx1ZSkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZT1fLmlkZW50aXR5XSBUaGUgaXRlcmF0ZWUgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGR1cGxpY2F0ZSBmcmVlIGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnVuaXFCeShbMi4xLCAxLjIsIDIuM10sIE1hdGguZmxvb3IpO1xuICogLy8gPT4gWzIuMSwgMS4yXVxuICpcbiAqIC8vIFRoZSBgXy5wcm9wZXJ0eWAgaXRlcmF0ZWUgc2hvcnRoYW5kLlxuICogXy51bmlxQnkoW3sgJ3gnOiAxIH0sIHsgJ3gnOiAyIH0sIHsgJ3gnOiAxIH1dLCAneCcpO1xuICogLy8gPT4gW3sgJ3gnOiAxIH0sIHsgJ3gnOiAyIH1dXG4gKi9cbmZ1bmN0aW9uIHVuaXFCeShhcnJheSwgaXRlcmF0ZWUpIHtcbiAgcmV0dXJuIChhcnJheSAmJiBhcnJheS5sZW5ndGgpID8gYmFzZVVuaXEoYXJyYXksIGJhc2VJdGVyYXRlZShpdGVyYXRlZSwgMikpIDogW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdW5pcUJ5O1xuIiwiaW1wb3J0IHsgUmVhY3Rpb24sIF9hbGxvd1N0YXRlQ2hhbmdlcywgY29uZmlndXJlLCBjcmVhdGVBdG9tLCBnZXREZWJ1Z05hbWUsIGlzT2JzZXJ2YWJsZUFycmF5LCBpc09ic2VydmFibGVNYXAsIGlzT2JzZXJ2YWJsZU9iamVjdCwgc3B5LCB1bnRyYWNrZWQgfSBmcm9tICdtb2J4JztcbmltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgQ29tcG9uZW50LCBjcmVhdGVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZmluZERPTU5vZGUsIHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzIH0gZnJvbSAncmVhY3QtZG9tJztcblxuLy8gVGhlc2UgZnVuY3Rpb25zIGNhbiBiZSBzdHViYmVkIG91dCBpbiBzcGVjaWZpYyBlbnZpcm9ubWVudHNcbnZhciB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyQxID0gdW5kZWZpbmVkO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iajtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xufTtcblxuXG5cblxuXG52YXIgYXN5bmNHZW5lcmF0b3IgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEF3YWl0VmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBmdW5jdGlvbiBBc3luY0dlbmVyYXRvcihnZW4pIHtcbiAgICB2YXIgZnJvbnQsIGJhY2s7XG5cbiAgICBmdW5jdGlvbiBzZW5kKGtleSwgYXJnKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgcmVxdWVzdCA9IHtcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICBhcmc6IGFyZyxcbiAgICAgICAgICByZXNvbHZlOiByZXNvbHZlLFxuICAgICAgICAgIHJlamVjdDogcmVqZWN0LFxuICAgICAgICAgIG5leHQ6IG51bGxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoYmFjaykge1xuICAgICAgICAgIGJhY2sgPSBiYWNrLm5leHQgPSByZXF1ZXN0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZyb250ID0gYmFjayA9IHJlcXVlc3Q7XG4gICAgICAgICAgcmVzdW1lKGtleSwgYXJnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzdW1lKGtleSwgYXJnKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gZ2VuW2tleV0oYXJnKTtcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEF3YWl0VmFsdWUpIHtcbiAgICAgICAgICBQcm9taXNlLnJlc29sdmUodmFsdWUudmFsdWUpLnRoZW4oZnVuY3Rpb24gKGFyZykge1xuICAgICAgICAgICAgcmVzdW1lKFwibmV4dFwiLCBhcmcpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgICAgIHJlc3VtZShcInRocm93XCIsIGFyZyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0dGxlKHJlc3VsdC5kb25lID8gXCJyZXR1cm5cIiA6IFwibm9ybWFsXCIsIHJlc3VsdC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBzZXR0bGUoXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldHRsZSh0eXBlLCB2YWx1ZSkge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgXCJyZXR1cm5cIjpcbiAgICAgICAgICBmcm9udC5yZXNvbHZlKHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGRvbmU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwidGhyb3dcIjpcbiAgICAgICAgICBmcm9udC5yZWplY3QodmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgZnJvbnQucmVzb2x2ZSh7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBkb25lOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBmcm9udCA9IGZyb250Lm5leHQ7XG5cbiAgICAgIGlmIChmcm9udCkge1xuICAgICAgICByZXN1bWUoZnJvbnQua2V5LCBmcm9udC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmFjayA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5faW52b2tlID0gc2VuZDtcblxuICAgIGlmICh0eXBlb2YgZ2VuLnJldHVybiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aGlzLnJldHVybiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5hc3luY0l0ZXJhdG9yKSB7XG4gICAgQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gIH1cblxuICBBc3luY0dlbmVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICByZXR1cm4gdGhpcy5faW52b2tlKFwibmV4dFwiLCBhcmcpO1xuICB9O1xuXG4gIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS50aHJvdyA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICByZXR1cm4gdGhpcy5faW52b2tlKFwidGhyb3dcIiwgYXJnKTtcbiAgfTtcblxuICBBc3luY0dlbmVyYXRvci5wcm90b3R5cGUucmV0dXJuID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiB0aGlzLl9pbnZva2UoXCJyZXR1cm5cIiwgYXJnKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHdyYXA6IGZ1bmN0aW9uIChmbikge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBc3luY0dlbmVyYXRvcihmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICBhd2FpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gbmV3IEF3YWl0VmFsdWUodmFsdWUpO1xuICAgIH1cbiAgfTtcbn0oKTtcblxuXG5cblxuXG52YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxudmFyIGNyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG5cblxuXG5cblxuXG5cblxudmFyIGluaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxuXG5cblxuXG5cblxuXG5cblxuXG52YXIgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxudmFyIEV2ZW50RW1pdHRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIEV2ZW50RW1pdHRlcik7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgfVxuXG4gICAgY3JlYXRlQ2xhc3MoRXZlbnRFbWl0dGVyLCBbe1xuICAgICAgICBrZXk6IFwib25cIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uKGNiKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGNiKTtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gX3RoaXMubGlzdGVuZXJzLmluZGV4T2YoY2IpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIF90aGlzLmxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImVtaXRcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVtaXQoZGF0YSkge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm4oZGF0YSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gRXZlbnRFbWl0dGVyO1xufSgpO1xuXG4vKipcbiAqIENvcHlyaWdodCAyMDE1LCBZYWhvbyEgSW5jLlxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSRUFDVF9TVEFUSUNTID0ge1xuICAgIGNoaWxkQ29udGV4dFR5cGVzOiB0cnVlLFxuICAgIGNvbnRleHRUeXBlczogdHJ1ZSxcbiAgICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gICAgZGlzcGxheU5hbWU6IHRydWUsXG4gICAgZ2V0RGVmYXVsdFByb3BzOiB0cnVlLFxuICAgIG1peGluczogdHJ1ZSxcbiAgICBwcm9wVHlwZXM6IHRydWUsXG4gICAgdHlwZTogdHJ1ZVxufTtcblxudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gIG5hbWU6IHRydWUsXG4gIGxlbmd0aDogdHJ1ZSxcbiAgcHJvdG90eXBlOiB0cnVlLFxuICBjYWxsZXI6IHRydWUsXG4gIGNhbGxlZTogdHJ1ZSxcbiAgYXJndW1lbnRzOiB0cnVlLFxuICBhcml0eTogdHJ1ZVxufTtcblxudmFyIGRlZmluZVByb3BlcnR5JDEgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBvYmplY3RQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZiAmJiBnZXRQcm90b3R5cGVPZihPYmplY3QpO1xuXG52YXIgaG9pc3ROb25SZWFjdFN0YXRpY3MgPSBmdW5jdGlvbiBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCwgYmxhY2tsaXN0KSB7XG4gICAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7IC8vIGRvbid0IGhvaXN0IG92ZXIgc3RyaW5nIChodG1sKSBjb21wb25lbnRzXG5cbiAgICAgICAgaWYgKG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICAgICAgdmFyIGluaGVyaXRlZENvbXBvbmVudCA9IGdldFByb3RvdHlwZU9mKHNvdXJjZUNvbXBvbmVudCk7XG4gICAgICAgICAgICBpZiAoaW5oZXJpdGVkQ29tcG9uZW50ICYmIGluaGVyaXRlZENvbXBvbmVudCAhPT0gb2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICAgICAgICAgICAgaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBpbmhlcml0ZWRDb21wb25lbnQsIGJsYWNrbGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcblxuICAgICAgICBpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICAgICAgICBrZXlzID0ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICAgIGlmICghUkVBQ1RfU1RBVElDU1trZXldICYmICFLTk9XTl9TVEFUSUNTW2tleV0gJiYgKCFibGFja2xpc3QgfHwgIWJsYWNrbGlzdFtrZXldKSkge1xuICAgICAgICAgICAgICAgIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZUNvbXBvbmVudCwga2V5KTtcbiAgICAgICAgICAgICAgICB0cnkgeyAvLyBBdm9pZCBmYWlsdXJlcyBmcm9tIHJlYWQtb25seSBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgICAgIGRlZmluZVByb3BlcnR5JDEodGFyZ2V0Q29tcG9uZW50LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG59O1xuXG4vLyBDb3BpZWQgZnJvbSBSZWFjdC5Qcm9wVHlwZXNcbmZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcmVzdCA9IEFycmF5KF9sZW4gPiA2ID8gX2xlbiAtIDYgOiAwKSwgX2tleSA9IDY7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgIHJlc3RbX2tleSAtIDZdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVudHJhY2tlZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBcIjw8YW5vbnltb3VzPj5cIjtcbiAgICAgICAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcbiAgICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhY3R1YWwgPSBwcm9wc1twcm9wTmFtZV0gPT09IG51bGwgPyBcIm51bGxcIiA6IFwidW5kZWZpbmVkXCI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJUaGUgXCIgKyBsb2NhdGlvbiArIFwiIGBcIiArIHByb3BGdWxsTmFtZSArIFwiYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgXCIgKyBcImluIGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAsIGJ1dCBpdHMgdmFsdWUgaXMgYFwiICsgYWN0dWFsICsgXCJgLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZS5hcHBseSh1bmRlZmluZWQsIFtwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWVdLmNvbmNhdChyZXN0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xufVxuXG4vLyBDb3BpZWQgZnJvbSBSZWFjdC5Qcm9wVHlwZXNcbmZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gXCJzeW1ib2xcIikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbXCJAQHRvU3RyaW5nVGFnXCJdID09PSBcIlN5bWJvbFwiKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8vIENvcGllZCBmcm9tIFJlYWN0LlByb3BUeXBlc1xuZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHByb3BWYWx1ZSk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICByZXR1cm4gXCJhcnJheVwiO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgICByZXR1cm4gXCJvYmplY3RcIjtcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBcInN5bWJvbFwiO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG59XG5cbi8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbi8vIENvcGllZCBmcm9tIFJlYWN0LlByb3BUeXBlc1xuZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBcImRhdGVcIjtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgICAgIHJldHVybiBcInJlZ2V4cFwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2YWJsZVR5cGVDaGVja2VyQ3JlYXRvcihhbGxvd05hdGl2ZVR5cGUsIG1vYnhUeXBlKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGZ1bmN0aW9uIChwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHVudHJhY2tlZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoYWxsb3dOYXRpdmVUeXBlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGdldFByb3BUeXBlKHByb3BzW3Byb3BOYW1lXSkgPT09IG1vYnhUeXBlLnRvTG93ZXJDYXNlKCkpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG1vYnhDaGVja2VyID0gdm9pZCAwO1xuICAgICAgICAgICAgc3dpdGNoIChtb2J4VHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJheVwiOlxuICAgICAgICAgICAgICAgICAgICBtb2J4Q2hlY2tlciA9IGlzT2JzZXJ2YWJsZUFycmF5O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiT2JqZWN0XCI6XG4gICAgICAgICAgICAgICAgICAgIG1vYnhDaGVja2VyID0gaXNPYnNlcnZhYmxlT2JqZWN0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiTWFwXCI6XG4gICAgICAgICAgICAgICAgICAgIG1vYnhDaGVja2VyID0gaXNPYnNlcnZhYmxlTWFwO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIG1vYnhUeXBlOiBcIiArIG1vYnhUeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICAgICAgICBpZiAoIW1vYnhDaGVja2VyKHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICAgICAgICAgIHZhciBuYXRpdmVUeXBlRXhwZWN0YXRpb25NZXNzYWdlID0gYWxsb3dOYXRpdmVUeXBlID8gXCIgb3IgamF2YXNjcmlwdCBgXCIgKyBtb2J4VHlwZS50b0xvd2VyQ2FzZSgpICsgXCJgXCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJJbnZhbGlkIHByb3AgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIG9mIHR5cGUgYFwiICsgcHJlY2lzZVR5cGUgKyBcImAgc3VwcGxpZWQgdG9cIiArIFwiIGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAsIGV4cGVjdGVkIGBtb2J4Lk9ic2VydmFibGVcIiArIG1vYnhUeXBlICsgXCJgXCIgKyBuYXRpdmVUeXBlRXhwZWN0YXRpb25NZXNzYWdlICsgXCIuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZhYmxlQXJyYXlPZlR5cGVDaGVja2VyKGFsbG93TmF0aXZlVHlwZSwgdHlwZUNoZWNrZXIpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZnVuY3Rpb24gKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBBcnJheShfbGVuMiA+IDUgPyBfbGVuMiAtIDUgOiAwKSwgX2tleTIgPSA1OyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgICAgICByZXN0W19rZXkyIC0gNV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVudHJhY2tlZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFwiUHJvcGVydHkgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIG9mIGNvbXBvbmVudCBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgIGhhcyBcIiArIFwiaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbi5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZXJyb3IgPSBjcmVhdGVPYnNlcnZhYmxlVHlwZUNoZWNrZXJDcmVhdG9yKGFsbG93TmF0aXZlVHlwZSwgXCJBcnJheVwiKShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpO1xuICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHJldHVybiBlcnJvcjtcbiAgICAgICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGVycm9yID0gdHlwZUNoZWNrZXIuYXBwbHkodW5kZWZpbmVkLCBbcHJvcFZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgXCJbXCIgKyBpICsgXCJdXCJdLmNvbmNhdChyZXN0KSk7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHJldHVybiBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxudmFyIG9ic2VydmFibGVBcnJheSA9IGNyZWF0ZU9ic2VydmFibGVUeXBlQ2hlY2tlckNyZWF0b3IoZmFsc2UsIFwiQXJyYXlcIik7XG52YXIgb2JzZXJ2YWJsZUFycmF5T2YgPSBjcmVhdGVPYnNlcnZhYmxlQXJyYXlPZlR5cGVDaGVja2VyLmJpbmQobnVsbCwgZmFsc2UpO1xudmFyIG9ic2VydmFibGVNYXAgPSBjcmVhdGVPYnNlcnZhYmxlVHlwZUNoZWNrZXJDcmVhdG9yKGZhbHNlLCBcIk1hcFwiKTtcbnZhciBvYnNlcnZhYmxlT2JqZWN0ID0gY3JlYXRlT2JzZXJ2YWJsZVR5cGVDaGVja2VyQ3JlYXRvcihmYWxzZSwgXCJPYmplY3RcIik7XG52YXIgYXJyYXlPck9ic2VydmFibGVBcnJheSA9IGNyZWF0ZU9ic2VydmFibGVUeXBlQ2hlY2tlckNyZWF0b3IodHJ1ZSwgXCJBcnJheVwiKTtcbnZhciBhcnJheU9yT2JzZXJ2YWJsZUFycmF5T2YgPSBjcmVhdGVPYnNlcnZhYmxlQXJyYXlPZlR5cGVDaGVja2VyLmJpbmQobnVsbCwgdHJ1ZSk7XG52YXIgb2JqZWN0T3JPYnNlcnZhYmxlT2JqZWN0ID0gY3JlYXRlT2JzZXJ2YWJsZVR5cGVDaGVja2VyQ3JlYXRvcih0cnVlLCBcIk9iamVjdFwiKTtcblxuXG5cbnZhciBwcm9wVHlwZXMgPSBPYmplY3QuZnJlZXplKHtcblx0b2JzZXJ2YWJsZUFycmF5OiBvYnNlcnZhYmxlQXJyYXksXG5cdG9ic2VydmFibGVBcnJheU9mOiBvYnNlcnZhYmxlQXJyYXlPZixcblx0b2JzZXJ2YWJsZU1hcDogb2JzZXJ2YWJsZU1hcCxcblx0b2JzZXJ2YWJsZU9iamVjdDogb2JzZXJ2YWJsZU9iamVjdCxcblx0YXJyYXlPck9ic2VydmFibGVBcnJheTogYXJyYXlPck9ic2VydmFibGVBcnJheSxcblx0YXJyYXlPck9ic2VydmFibGVBcnJheU9mOiBhcnJheU9yT2JzZXJ2YWJsZUFycmF5T2YsXG5cdG9iamVjdE9yT2JzZXJ2YWJsZU9iamVjdDogb2JqZWN0T3JPYnNlcnZhYmxlT2JqZWN0XG59KTtcblxuZnVuY3Rpb24gaXNTdGF0ZWxlc3MoY29tcG9uZW50KSB7XG4gICAgLy8gYGZ1bmN0aW9uKCkge31gIGhhcyBwcm90b3R5cGUsIGJ1dCBgKCkgPT4ge31gIGRvZXNuJ3RcbiAgICAvLyBgKCkgPT4ge31gIHZpYSBCYWJlbCBoYXMgcHJvdG90eXBlIHRvby5cbiAgICByZXR1cm4gIShjb21wb25lbnQucHJvdG90eXBlICYmIGNvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyKTtcbn1cblxudmFyIGluamVjdG9yQ29udGV4dFR5cGVzID0ge1xuICAgIG1vYnhTdG9yZXM6IG9iamVjdE9yT2JzZXJ2YWJsZU9iamVjdFxufTtcbk9iamVjdC5zZWFsKGluamVjdG9yQ29udGV4dFR5cGVzKTtcblxudmFyIHByb3hpZWRJbmplY3RvclByb3BzID0ge1xuICAgIGNvbnRleHRUeXBlczoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgICAgICAgIHJldHVybiBpbmplY3RvckNvbnRleHRUeXBlcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQkJDEoXykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiTW9ieCBJbmplY3RvcjogeW91IGFyZSB0cnlpbmcgdG8gYXR0YWNoIGBjb250ZXh0VHlwZXNgIG9uIGFuIGNvbXBvbmVudCBkZWNvcmF0ZWQgd2l0aCBgaW5qZWN0YCAob3IgYG9ic2VydmVyYCkgSE9DLiBQbGVhc2Ugc3BlY2lmeSB0aGUgY29udGV4dFR5cGVzIG9uIHRoZSB3cmFwcGVkIGNvbXBvbmVudCBpbnN0ZWFkLiBJdCBpcyBhY2Nlc3NpYmxlIHRocm91Z2ggdGhlIGB3cmFwcGVkQ29tcG9uZW50YFwiKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZVxuICAgIH0sXG4gICAgaXNNb2J4SW5qZWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdG9yZSBJbmplY3Rpb25cbiAgICAgKi9cbn07ZnVuY3Rpb24gY3JlYXRlU3RvcmVJbmplY3RvcihncmFiU3RvcmVzRm4sIGNvbXBvbmVudCwgaW5qZWN0TmFtZXMpIHtcbiAgICB2YXIgX2NsYXNzLCBfdGVtcDI7XG5cbiAgICB2YXIgZGlzcGxheU5hbWUgPSBcImluamVjdC1cIiArIChjb21wb25lbnQuZGlzcGxheU5hbWUgfHwgY29tcG9uZW50Lm5hbWUgfHwgY29tcG9uZW50LmNvbnN0cnVjdG9yICYmIGNvbXBvbmVudC5jb25zdHJ1Y3Rvci5uYW1lIHx8IFwiVW5rbm93blwiKTtcbiAgICBpZiAoaW5qZWN0TmFtZXMpIGRpc3BsYXlOYW1lICs9IFwiLXdpdGgtXCIgKyBpbmplY3ROYW1lcztcblxuICAgIHZhciBJbmplY3RvciA9IChfdGVtcDIgPSBfY2xhc3MgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICAgICBpbmhlcml0cyhJbmplY3RvciwgX0NvbXBvbmVudCk7XG5cbiAgICAgICAgZnVuY3Rpb24gSW5qZWN0b3IoKSB7XG4gICAgICAgICAgICB2YXIgX3JlZjtcblxuICAgICAgICAgICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgICAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5qZWN0b3IpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX3JlZiA9IEluamVjdG9yLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoSW5qZWN0b3IpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdG9yZVJlZiA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLndyYXBwZWRJbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgICAgICAgfSwgX3RlbXApLCBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNyZWF0ZUNsYXNzKEluamVjdG9yLCBbe1xuICAgICAgICAgICAga2V5OiBcInJlbmRlclwiLFxuICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgICAgICAvLyBPcHRpbWl6YXRpb246IGl0IG1pZ2h0IGJlIG1vcmUgZWZmaWNpZW50IHRvIGFwcGx5IHRoZSBtYXBwZXIgZnVuY3Rpb24gKm91dHNpZGUqIHRoZSByZW5kZXIgbWV0aG9kXG4gICAgICAgICAgICAgICAgLy8gKGlmIHRoZSBtYXBwZXIgaXMgYSBmdW5jdGlvbiksIHRoYXQgY291bGQgYXZvaWQgZXhwZW5zaXZlKD8pIHJlLXJlbmRlcmluZyBvZiB0aGUgaW5qZWN0b3IgY29tcG9uZW50XG4gICAgICAgICAgICAgICAgLy8gU2VlIHRoaXMgdGVzdDogJ3VzaW5nIGEgY3VzdG9tIGluamVjdG9yIGlzIG5vdCB0b28gcmVhY3RpdmUnIGluIGluamVjdC5qc1xuICAgICAgICAgICAgICAgIHZhciBuZXdQcm9wcyA9IHt9O1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLnByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Byb3BzW2tleV0gPSB0aGlzLnByb3BzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9dmFyIGFkZGl0aW9uYWxQcm9wcyA9IGdyYWJTdG9yZXNGbih0aGlzLmNvbnRleHQubW9ieFN0b3JlcyB8fCB7fSwgbmV3UHJvcHMsIHRoaXMuY29udGV4dCkgfHwge307XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2tleTIgaW4gYWRkaXRpb25hbFByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Byb3BzW19rZXkyXSA9IGFkZGl0aW9uYWxQcm9wc1tfa2V5Ml07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFpc1N0YXRlbGVzcyhjb21wb25lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Byb3BzLnJlZiA9IHRoaXMuc3RvcmVSZWY7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBuZXdQcm9wcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1dKTtcbiAgICAgICAgcmV0dXJuIEluamVjdG9yO1xuICAgIH0oQ29tcG9uZW50KSwgX2NsYXNzLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWUsIF90ZW1wMik7XG5cbiAgICAvLyBTdGF0aWMgZmllbGRzIGZyb20gY29tcG9uZW50IHNob3VsZCBiZSB2aXNpYmxlIG9uIHRoZSBnZW5lcmF0ZWQgSW5qZWN0b3JcblxuICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKEluamVjdG9yLCBjb21wb25lbnQpO1xuXG4gICAgSW5qZWN0b3Iud3JhcHBlZENvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhJbmplY3RvciwgcHJveGllZEluamVjdG9yUHJvcHMpO1xuXG4gICAgcmV0dXJuIEluamVjdG9yO1xufVxuXG5mdW5jdGlvbiBncmFiU3RvcmVzQnlOYW1lKHN0b3JlTmFtZXMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGJhc2VTdG9yZXMsIG5leHRQcm9wcykge1xuICAgICAgICBzdG9yZU5hbWVzLmZvckVhY2goZnVuY3Rpb24gKHN0b3JlTmFtZSkge1xuICAgICAgICAgICAgaWYgKHN0b3JlTmFtZSBpbiBuZXh0UHJvcHMgLy8gcHJlZmVyIHByb3BzIG92ZXIgc3RvcmVzXG4gICAgICAgICAgICApIHJldHVybjtcbiAgICAgICAgICAgIGlmICghKHN0b3JlTmFtZSBpbiBiYXNlU3RvcmVzKSkgdGhyb3cgbmV3IEVycm9yKFwiTW9iWCBpbmplY3RvcjogU3RvcmUgJ1wiICsgc3RvcmVOYW1lICsgXCInIGlzIG5vdCBhdmFpbGFibGUhIE1ha2Ugc3VyZSBpdCBpcyBwcm92aWRlZCBieSBzb21lIFByb3ZpZGVyXCIpO1xuICAgICAgICAgICAgbmV4dFByb3BzW3N0b3JlTmFtZV0gPSBiYXNlU3RvcmVzW3N0b3JlTmFtZV07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV4dFByb3BzO1xuICAgIH07XG59XG5cbi8qKlxuICogaGlnaGVyIG9yZGVyIGNvbXBvbmVudCB0aGF0IGluamVjdHMgc3RvcmVzIHRvIGEgY2hpbGQuXG4gKiB0YWtlcyBlaXRoZXIgYSB2YXJhcmdzIGxpc3Qgb2Ygc3RyaW5ncywgd2hpY2ggYXJlIHN0b3JlcyByZWFkIGZyb20gdGhlIGNvbnRleHQsXG4gKiBvciBhIGZ1bmN0aW9uIHRoYXQgbWFudWFsbHkgbWFwcyB0aGUgYXZhaWxhYmxlIHN0b3JlcyBmcm9tIHRoZSBjb250ZXh0IHRvIHByb3BzOlxuICogc3RvcmVzVG9Qcm9wcyhtb2J4U3RvcmVzLCBwcm9wcywgY29udGV4dCkgPT4gbmV3UHJvcHNcbiAqL1xuZnVuY3Rpb24gaW5qZWN0KCkgLyogZm4oc3RvcmVzLCBuZXh0UHJvcHMpIG9yIC4uLnN0b3JlTmFtZXMgKi97XG4gICAgdmFyIGdyYWJTdG9yZXNGbiA9IHZvaWQgMDtcbiAgICBpZiAodHlwZW9mIGFyZ3VtZW50c1swXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGdyYWJTdG9yZXNGbiA9IGFyZ3VtZW50c1swXTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChjb21wb25lbnRDbGFzcykge1xuICAgICAgICAgICAgdmFyIGluamVjdGVkID0gY3JlYXRlU3RvcmVJbmplY3RvcihncmFiU3RvcmVzRm4sIGNvbXBvbmVudENsYXNzKTtcbiAgICAgICAgICAgIGluamVjdGVkLmlzTW9ieEluamVjdG9yID0gZmFsc2U7IC8vIHN1cHJlc3Mgd2FybmluZ1xuICAgICAgICAgICAgLy8gbWFyayB0aGUgSW5qZWN0b3IgYXMgb2JzZXJ2ZXIsIHRvIG1ha2UgaXQgcmVhY3QgdG8gZXhwcmVzc2lvbnMgaW4gYGdyYWJTdG9yZXNGbmAsXG4gICAgICAgICAgICAvLyBzZWUgIzExMVxuICAgICAgICAgICAgaW5qZWN0ZWQgPSBvYnNlcnZlcihpbmplY3RlZCk7XG4gICAgICAgICAgICBpbmplY3RlZC5pc01vYnhJbmplY3RvciA9IHRydWU7IC8vIHJlc3RvcmUgd2FybmluZ1xuICAgICAgICAgICAgcmV0dXJuIGluamVjdGVkO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBzdG9yZU5hbWVzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzdG9yZU5hbWVzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9Z3JhYlN0b3Jlc0ZuID0gZ3JhYlN0b3Jlc0J5TmFtZShzdG9yZU5hbWVzKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChjb21wb25lbnRDbGFzcykge1xuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZVN0b3JlSW5qZWN0b3IoZ3JhYlN0b3Jlc0ZuLCBjb21wb25lbnRDbGFzcywgc3RvcmVOYW1lcy5qb2luKFwiLVwiKSk7XG4gICAgICAgIH07XG4gICAgfVxufVxuXG4vKipcbiAqIGRldiB0b29sIHN1cHBvcnRcbiAqL1xudmFyIGlzRGV2dG9vbHNFbmFibGVkID0gZmFsc2U7XG5cbnZhciBpc1VzaW5nU3RhdGljUmVuZGVyaW5nID0gZmFsc2U7XG5cbnZhciB3YXJuZWRBYm91dE9ic2VydmVySW5qZWN0RGVwcmVjYXRpb24gPSBmYWxzZTtcblxuLy8gV2Vha01hcDxOb2RlLCBPYmplY3Q+O1xudmFyIGNvbXBvbmVudEJ5Tm9kZVJlZ2lzdGVyeSA9IHR5cGVvZiBXZWFrTWFwICE9PSBcInVuZGVmaW5lZFwiID8gbmV3IFdlYWtNYXAoKSA6IHVuZGVmaW5lZDtcbnZhciByZW5kZXJSZXBvcnRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuZnVuY3Rpb24gZmluZERPTU5vZGUkMihjb21wb25lbnQpIHtcbiAgICBpZiAoZmluZERPTU5vZGUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBmaW5kRE9NTm9kZShjb21wb25lbnQpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBmaW5kRE9NTm9kZSB3aWxsIHRocm93IGluIHJlYWN0LXRlc3QtcmVuZGVyZXIsIHNlZTpcbiAgICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbW9ieGpzL21vYngtcmVhY3QvaXNzdWVzLzIxNlxuICAgICAgICAgICAgLy8gSXMgdGhlcmUgYSBiZXR0ZXIgaGV1cmlzdGljP1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIHJlcG9ydFJlbmRlcmluZyhjb21wb25lbnQpIHtcbiAgICB2YXIgbm9kZSA9IGZpbmRET01Ob2RlJDIoY29tcG9uZW50KTtcbiAgICBpZiAobm9kZSAmJiBjb21wb25lbnRCeU5vZGVSZWdpc3RlcnkpIGNvbXBvbmVudEJ5Tm9kZVJlZ2lzdGVyeS5zZXQobm9kZSwgY29tcG9uZW50KTtcblxuICAgIHJlbmRlclJlcG9ydGVyLmVtaXQoe1xuICAgICAgICBldmVudDogXCJyZW5kZXJcIixcbiAgICAgICAgcmVuZGVyVGltZTogY29tcG9uZW50Ll9fJG1vYlJlbmRlckVuZCAtIGNvbXBvbmVudC5fXyRtb2JSZW5kZXJTdGFydCxcbiAgICAgICAgdG90YWxUaW1lOiBEYXRlLm5vdygpIC0gY29tcG9uZW50Ll9fJG1vYlJlbmRlclN0YXJ0LFxuICAgICAgICBjb21wb25lbnQ6IGNvbXBvbmVudCxcbiAgICAgICAgbm9kZTogbm9kZVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB0cmFja0NvbXBvbmVudHMoKSB7XG4gICAgaWYgKHR5cGVvZiBXZWFrTWFwID09PSBcInVuZGVmaW5lZFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJbbW9ieC1yZWFjdF0gdHJhY2tpbmcgY29tcG9uZW50cyBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3Nlci5cIik7XG4gICAgaWYgKCFpc0RldnRvb2xzRW5hYmxlZCkgaXNEZXZ0b29sc0VuYWJsZWQgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiB1c2VTdGF0aWNSZW5kZXJpbmcodXNlU3RhdGljUmVuZGVyaW5nKSB7XG4gICAgaXNVc2luZ1N0YXRpY1JlbmRlcmluZyA9IHVzZVN0YXRpY1JlbmRlcmluZztcbn1cblxuLyoqXG4gKiBFcnJvcnMgcmVwb3J0ZXJcbiAqL1xuXG52YXIgZXJyb3JzUmVwb3J0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbi8qKlxuICogVXRpbGl0aWVzXG4gKi9cblxuZnVuY3Rpb24gcGF0Y2godGFyZ2V0LCBmdW5jTmFtZSkge1xuICAgIHZhciBydW5NaXhpbkZpcnN0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcblxuICAgIHZhciBiYXNlID0gdGFyZ2V0W2Z1bmNOYW1lXTtcbiAgICB2YXIgbWl4aW5GdW5jID0gcmVhY3RpdmVNaXhpbltmdW5jTmFtZV07XG4gICAgdmFyIGYgPSAhYmFzZSA/IG1peGluRnVuYyA6IHJ1bk1peGluRmlyc3QgPT09IHRydWUgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1peGluRnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICBiYXNlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYmFzZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICBtaXhpbkZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgLy8gTVdFOiBpZGVhbGx5IHdlIGZyZWV6ZSBoZXJlIHRvIHByb3RlY3QgYWdhaW5zdCBhY2NpZGVudGFsIG92ZXJ3cml0ZXMgaW4gY29tcG9uZW50IGluc3RhbmNlcywgc2VlICMxOTVcbiAgICAvLyAuLi5idXQgdGhhdCBicmVha3MgcmVhY3QtaG90LWxvYWRlciwgc2VlICMyMzEuLi5cbiAgICB0YXJnZXRbZnVuY05hbWVdID0gZjtcbn1cblxuZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIpIHtcbiAgICAvL0Zyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mYmpzL2Jsb2IvYzY5OTA0YTUxMWI5MDAyNjY5MzUxNjgyMjMwNjNkZDg3NzJkZmM0MC9wYWNrYWdlcy9mYmpzL3NyYy9jb3JlL3NoYWxsb3dFcXVhbC5qc1xuICAgIGlmIChpcyhvYmpBLCBvYmpCKSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKCh0eXBlb2Ygb2JqQSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iakEpKSAhPT0gXCJvYmplY3RcIiB8fCBvYmpBID09PSBudWxsIHx8ICh0eXBlb2Ygb2JqQiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKG9iakIpKSAhPT0gXCJvYmplY3RcIiB8fCBvYmpCID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gICAgdmFyIGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG4gICAgaWYgKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzQS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIWhhc093blByb3BlcnR5LmNhbGwob2JqQiwga2V5c0FbaV0pIHx8ICFpcyhvYmpBW2tleXNBW2ldXSwgb2JqQltrZXlzQVtpXV0pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBGcm9tOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmJqcy9ibG9iL2M2OTkwNGE1MTFiOTAwMjY2OTM1MTY4MjIzMDYzZGQ4NzcyZGZjNDAvcGFja2FnZXMvZmJqcy9zcmMvY29yZS9zaGFsbG93RXF1YWwuanNcbiAgICBpZiAoeCA9PT0geSkge1xuICAgICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgICB9XG59XG5cbi8qKlxuICogUmVhY3RpdmVNaXhpblxuICovXG52YXIgcmVhY3RpdmVNaXhpbiA9IHtcbiAgICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICBpZiAoaXNVc2luZ1N0YXRpY1JlbmRlcmluZyA9PT0gdHJ1ZSkgcmV0dXJuO1xuICAgICAgICAvLyBHZW5lcmF0ZSBmcmllbmRseSBuYW1lIGZvciBkZWJ1Z2dpbmdcbiAgICAgICAgdmFyIGluaXRpYWxOYW1lID0gdGhpcy5kaXNwbGF5TmFtZSB8fCB0aGlzLm5hbWUgfHwgdGhpcy5jb25zdHJ1Y3RvciAmJiAodGhpcy5jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpIHx8IFwiPGNvbXBvbmVudD5cIjtcbiAgICAgICAgdmFyIHJvb3ROb2RlSUQgPSB0aGlzLl9yZWFjdEludGVybmFsSW5zdGFuY2UgJiYgdGhpcy5fcmVhY3RJbnRlcm5hbEluc3RhbmNlLl9yb290Tm9kZUlEIHx8IHRoaXMuX3JlYWN0SW50ZXJuYWxGaWJlciAmJiB0aGlzLl9yZWFjdEludGVybmFsRmliZXIuX2RlYnVnSUQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHByb3BzIGFyZSBzaGFsbG93bHkgbW9kaWZpZWQsIHJlYWN0IHdpbGwgcmVuZGVyIGFueXdheSxcbiAgICAgICAgICogc28gYXRvbS5yZXBvcnRDaGFuZ2VkKCkgc2hvdWxkIG5vdCByZXN1bHQgaW4geWV0IGFub3RoZXIgcmUtcmVuZGVyXG4gICAgICAgICAqL1xuICAgICAgICB2YXIgc2tpcFJlbmRlciA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogZm9yY2VVcGRhdGUgd2lsbCByZS1hc3NpZ24gdGhpcy5wcm9wcy4gV2UgZG9uJ3Qgd2FudCB0aGF0IHRvIGNhdXNlIGEgbG9vcCxcbiAgICAgICAgICogc28gZGV0ZWN0IHRoZXNlIGNoYW5nZXNcbiAgICAgICAgICovXG4gICAgICAgIHZhciBpc0ZvcmNpbmdVcGRhdGUgPSBmYWxzZTtcblxuICAgICAgICBmdW5jdGlvbiBtYWtlUHJvcGVydHlPYnNlcnZhYmxlUmVmZXJlbmNlKHByb3BOYW1lKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWVIb2xkZXIgPSB0aGlzW3Byb3BOYW1lXTtcbiAgICAgICAgICAgIHZhciBhdG9tID0gY3JlYXRlQXRvbShcInJlYWN0aXZlIFwiICsgcHJvcE5hbWUpO1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIHByb3BOYW1lLCB7XG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0b20ucmVwb3J0T2JzZXJ2ZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlSG9sZGVyO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiBzZXQkJDEodikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzRm9yY2luZ1VwZGF0ZSAmJiAhc2hhbGxvd0VxdWFsKHZhbHVlSG9sZGVyLCB2KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVIb2xkZXIgPSB2O1xuICAgICAgICAgICAgICAgICAgICAgICAgc2tpcFJlbmRlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdG9tLnJlcG9ydENoYW5nZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNraXBSZW5kZXIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlSG9sZGVyID0gdjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbWFrZSB0aGlzLnByb3BzIGFuIG9ic2VydmFibGUgcmVmZXJlbmNlLCBzZWUgIzEyNFxuICAgICAgICBtYWtlUHJvcGVydHlPYnNlcnZhYmxlUmVmZXJlbmNlLmNhbGwodGhpcywgXCJwcm9wc1wiKTtcbiAgICAgICAgLy8gbWFrZSBzdGF0ZSBhbiBvYnNlcnZhYmxlIHJlZmVyZW5jZVxuICAgICAgICBtYWtlUHJvcGVydHlPYnNlcnZhYmxlUmVmZXJlbmNlLmNhbGwodGhpcywgXCJzdGF0ZVwiKTtcblxuICAgICAgICAvLyB3aXJlIHVwIHJlYWN0aXZlIHJlbmRlclxuICAgICAgICB2YXIgYmFzZVJlbmRlciA9IHRoaXMucmVuZGVyLmJpbmQodGhpcyk7XG4gICAgICAgIHZhciByZWFjdGlvbiA9IG51bGw7XG4gICAgICAgIHZhciBpc1JlbmRlcmluZ1BlbmRpbmcgPSBmYWxzZTtcblxuICAgICAgICB2YXIgaW5pdGlhbFJlbmRlciA9IGZ1bmN0aW9uIGluaXRpYWxSZW5kZXIoKSB7XG4gICAgICAgICAgICByZWFjdGlvbiA9IG5ldyBSZWFjdGlvbihpbml0aWFsTmFtZSArIFwiI1wiICsgcm9vdE5vZGVJRCArIFwiLnJlbmRlcigpXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzUmVuZGVyaW5nUGVuZGluZykge1xuICAgICAgICAgICAgICAgICAgICAvLyBOLkIuIEdldHRpbmcgaGVyZSAqYmVmb3JlIG1vdW50aW5nKiBtZWFucyB0aGF0IGEgY29tcG9uZW50IGNvbnN0cnVjdG9yIGhhcyBzaWRlIGVmZmVjdHMgKHNlZSB0aGUgcmVsZXZhbnQgdGVzdCBpbiBtaXNjLmpzKVxuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIHVuaWRpb21hdGljIFJlYWN0IHVzYWdlIGJ1dCBSZWFjdCB3aWxsIGNvcnJlY3RseSB3YXJuIGFib3V0IHRoaXMgc28gd2UgY29udGludWUgYXMgdXN1YWxcbiAgICAgICAgICAgICAgICAgICAgLy8gU2VlICM4NSAvIFB1bGwgIzQ0XG4gICAgICAgICAgICAgICAgICAgIGlzUmVuZGVyaW5nUGVuZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgX3RoaXMuY29tcG9uZW50V2lsbFJlYWN0ID09PSBcImZ1bmN0aW9uXCIpIF90aGlzLmNvbXBvbmVudFdpbGxSZWFjdCgpOyAvLyBUT0RPOiB3cmFwIGluIGFjdGlvbj9cbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLl9fJG1vYnhJc1VubW91bnRlZCAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgYXJlIHVubW91bnRlZCBhdCB0aGlzIHBvaW50LCBjb21wb25lbnRXaWxsUmVhY3QoKSBoYWQgYSBzaWRlIGVmZmVjdCBjYXVzaW5nIHRoZSBjb21wb25lbnQgdG8gdW5tb3VudGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiByZW1vdmUgdGhpcyBjaGVjaz8gVGhlbiByZWFjdCB3aWxsIHByb3Blcmx5IHdhcm4gYWJvdXQgdGhlIGZhY3QgdGhhdCB0aGlzIHNob3VsZCBub3QgaGFwcGVuPyBTZWUgIzczXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIb3dldmVyLCBwZW9wbGUgYWxzbyBjbGFpbSB0aGlzIG1pZ3RoIGhhcHBlbiBkdXJpbmcgdW5pdCB0ZXN0cy4uXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGFzRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZvcmNpbmdVcGRhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2tpcFJlbmRlcikgQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZS5jYWxsKF90aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNFcnJvciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZvcmNpbmdVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzRXJyb3IpIHJlYWN0aW9uLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVhY3Rpb24ucmVhY3RDb21wb25lbnQgPSBfdGhpcztcbiAgICAgICAgICAgIHJlYWN0aXZlUmVuZGVyLiRtb2J4ID0gcmVhY3Rpb247XG4gICAgICAgICAgICBfdGhpcy5yZW5kZXIgPSByZWFjdGl2ZVJlbmRlcjtcbiAgICAgICAgICAgIHJldHVybiByZWFjdGl2ZVJlbmRlcigpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciByZWFjdGl2ZVJlbmRlciA9IGZ1bmN0aW9uIHJlYWN0aXZlUmVuZGVyKCkge1xuICAgICAgICAgICAgaXNSZW5kZXJpbmdQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgZXhjZXB0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIHJlbmRlcmluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHJlYWN0aW9uLnRyYWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNEZXZ0b29sc0VuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX18kbW9iUmVuZGVyU3RhcnQgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJpbmcgPSBfYWxsb3dTdGF0ZUNoYW5nZXMoZmFsc2UsIGJhc2VSZW5kZXIpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZXhjZXB0aW9uID0gZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlzRGV2dG9vbHNFbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9fJG1vYlJlbmRlckVuZCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZXhjZXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JzUmVwb3J0ZXIuZW1pdChleGNlcHRpb24pO1xuICAgICAgICAgICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZW5kZXJpbmc7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5yZW5kZXIgPSBpbml0aWFsUmVuZGVyO1xuICAgIH0sXG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIGlmIChpc1VzaW5nU3RhdGljUmVuZGVyaW5nID09PSB0cnVlKSByZXR1cm47XG4gICAgICAgIHRoaXMucmVuZGVyLiRtb2J4ICYmIHRoaXMucmVuZGVyLiRtb2J4LmRpc3Bvc2UoKTtcbiAgICAgICAgdGhpcy5fXyRtb2J4SXNVbm1vdW50ZWQgPSB0cnVlO1xuICAgICAgICBpZiAoaXNEZXZ0b29sc0VuYWJsZWQpIHtcbiAgICAgICAgICAgIHZhciBub2RlID0gZmluZERPTU5vZGUkMih0aGlzKTtcbiAgICAgICAgICAgIGlmIChub2RlICYmIGNvbXBvbmVudEJ5Tm9kZVJlZ2lzdGVyeSkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudEJ5Tm9kZVJlZ2lzdGVyeS5kZWxldGUobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW5kZXJSZXBvcnRlci5lbWl0KHtcbiAgICAgICAgICAgICAgICBldmVudDogXCJkZXN0cm95XCIsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgICAgICAgICAgIG5vZGU6IG5vZGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKGlzRGV2dG9vbHNFbmFibGVkKSB7XG4gICAgICAgICAgICByZXBvcnRSZW5kZXJpbmcodGhpcyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIGlmIChpc0RldnRvb2xzRW5hYmxlZCkge1xuICAgICAgICAgICAgcmVwb3J0UmVuZGVyaW5nKHRoaXMpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZTogZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgICAgIGlmIChpc1VzaW5nU3RhdGljUmVuZGVyaW5nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbbW9ieC1yZWFjdF0gSXQgc2VlbXMgdGhhdCBhIHJlLXJlbmRlcmluZyBvZiBhIFJlYWN0IGNvbXBvbmVudCBpcyB0cmlnZ2VyZWQgd2hpbGUgaW4gc3RhdGljIChzZXJ2ZXItc2lkZSkgbW9kZS4gUGxlYXNlIG1ha2Ugc3VyZSBjb21wb25lbnRzIGFyZSByZW5kZXJlZCBvbmx5IG9uY2Ugc2VydmVyLXNpZGUuXCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHVwZGF0ZSBvbiBhbnkgc3RhdGUgY2hhbmdlcyAoYXMgaXMgdGhlIGRlZmF1bHQpXG4gICAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBuZXh0U3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIHVwZGF0ZSBpZiBwcm9wcyBhcmUgc2hhbGxvd2x5IG5vdCBlcXVhbCwgaW5zcGlyZWQgYnkgUHVyZVJlbmRlck1peGluXG4gICAgICAgIC8vIHdlIGNvdWxkIHJldHVybiBqdXN0ICdmYWxzZScgaGVyZSwgYW5kIGF2b2lkIHRoZSBgc2tpcFJlbmRlcmAgY2hlY2tzIGV0Y1xuICAgICAgICAvLyBob3dldmVyLCBpdCBpcyBuaWNlciBpZiBsaWZlY3ljbGUgZXZlbnRzIGFyZSB0cmlnZ2VyZWQgbGlrZSB1c3VhbGx5LFxuICAgICAgICAvLyBzbyB3ZSByZXR1cm4gdHJ1ZSBoZXJlIGlmIHByb3BzIGFyZSBzaGFsbG93bHkgbW9kaWZpZWQuXG4gICAgICAgIHJldHVybiAhc2hhbGxvd0VxdWFsKHRoaXMucHJvcHMsIG5leHRQcm9wcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT2JzZXJ2ZXIgZnVuY3Rpb24gLyBkZWNvcmF0b3JcbiAgICAgKi9cbn07ZnVuY3Rpb24gb2JzZXJ2ZXIoYXJnMSwgYXJnMikge1xuICAgIGlmICh0eXBlb2YgYXJnMSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTdG9yZSBuYW1lcyBzaG91bGQgYmUgcHJvdmlkZWQgYXMgYXJyYXlcIik7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KGFyZzEpKSB7XG4gICAgICAgIC8vIGNvbXBvbmVudCBuZWVkcyBzdG9yZXNcbiAgICAgICAgaWYgKCF3YXJuZWRBYm91dE9ic2VydmVySW5qZWN0RGVwcmVjYXRpb24pIHtcbiAgICAgICAgICAgIHdhcm5lZEFib3V0T2JzZXJ2ZXJJbmplY3REZXByZWNhdGlvbiA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ01vYnggb2JzZXJ2ZXI6IFVzaW5nIG9ic2VydmVyIHRvIGluamVjdCBzdG9yZXMgaXMgZGVwcmVjYXRlZCBzaW5jZSA0LjAuIFVzZSBgQGluamVjdChcInN0b3JlMVwiLCBcInN0b3JlMlwiKSBAb2JzZXJ2ZXIgQ29tcG9uZW50Q2xhc3NgIG9yIGBpbmplY3QoXCJzdG9yZTFcIiwgXCJzdG9yZTJcIikob2JzZXJ2ZXIoY29tcG9uZW50Q2xhc3MpKWAgaW5zdGVhZCBvZiBgQG9ic2VydmVyKFtcInN0b3JlMVwiLCBcInN0b3JlMlwiXSkgQ29tcG9uZW50Q2xhc3NgJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhcmcyKSB7XG4gICAgICAgICAgICAvLyBpbnZva2VkIGFzIGRlY29yYXRvclxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChjb21wb25lbnRDbGFzcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYnNlcnZlcihhcmcxLCBjb21wb25lbnRDbGFzcyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGluamVjdC5hcHBseShudWxsLCBhcmcxKShvYnNlcnZlcihhcmcyKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIGNvbXBvbmVudENsYXNzID0gYXJnMTtcblxuICAgIGlmIChjb21wb25lbnRDbGFzcy5pc01vYnhJbmplY3RvciA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJNb2J4IG9ic2VydmVyOiBZb3UgYXJlIHRyeWluZyB0byB1c2UgJ29ic2VydmVyJyBvbiBhIGNvbXBvbmVudCB0aGF0IGFscmVhZHkgaGFzICdpbmplY3QnLiBQbGVhc2UgYXBwbHkgJ29ic2VydmVyJyBiZWZvcmUgYXBwbHlpbmcgJ2luamVjdCdcIik7XG4gICAgfVxuXG4gICAgLy8gU3RhdGVsZXNzIGZ1bmN0aW9uIGNvbXBvbmVudDpcbiAgICAvLyBJZiBpdCBpcyBmdW5jdGlvbiBidXQgZG9lc24ndCBzZWVtIHRvIGJlIGEgcmVhY3QgY2xhc3MgY29uc3RydWN0b3IsXG4gICAgLy8gd3JhcCBpdCB0byBhIHJlYWN0IGNsYXNzIGF1dG9tYXRpY2FsbHlcbiAgICBpZiAodHlwZW9mIGNvbXBvbmVudENsYXNzID09PSBcImZ1bmN0aW9uXCIgJiYgKCFjb21wb25lbnRDbGFzcy5wcm90b3R5cGUgfHwgIWNvbXBvbmVudENsYXNzLnByb3RvdHlwZS5yZW5kZXIpICYmICFjb21wb25lbnRDbGFzcy5pc1JlYWN0Q2xhc3MgJiYgIUNvbXBvbmVudC5pc1Byb3RvdHlwZU9mKGNvbXBvbmVudENsYXNzKSkge1xuICAgICAgICB2YXIgX2NsYXNzLCBfdGVtcDtcblxuICAgICAgICByZXR1cm4gb2JzZXJ2ZXIoKF90ZW1wID0gX2NsYXNzID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICAgICAgICAgIGluaGVyaXRzKF9jbGFzcywgX0NvbXBvbmVudCk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIF9jbGFzcygpIHtcbiAgICAgICAgICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBfY2xhc3MpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfY2xhc3MuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihfY2xhc3MpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3JlYXRlQ2xhc3MoX2NsYXNzLCBbe1xuICAgICAgICAgICAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9uZW50Q2xhc3MuY2FsbCh0aGlzLCB0aGlzLnByb3BzLCB0aGlzLmNvbnRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgIHJldHVybiBfY2xhc3M7XG4gICAgICAgIH0oQ29tcG9uZW50KSwgX2NsYXNzLmRpc3BsYXlOYW1lID0gY29tcG9uZW50Q2xhc3MuZGlzcGxheU5hbWUgfHwgY29tcG9uZW50Q2xhc3MubmFtZSwgX2NsYXNzLmNvbnRleHRUeXBlcyA9IGNvbXBvbmVudENsYXNzLmNvbnRleHRUeXBlcywgX2NsYXNzLnByb3BUeXBlcyA9IGNvbXBvbmVudENsYXNzLnByb3BUeXBlcywgX2NsYXNzLmRlZmF1bHRQcm9wcyA9IGNvbXBvbmVudENsYXNzLmRlZmF1bHRQcm9wcywgX3RlbXApKTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbXBvbmVudENsYXNzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBwYXNzIGEgdmFsaWQgY29tcG9uZW50IHRvICdvYnNlcnZlcidcIik7XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldCA9IGNvbXBvbmVudENsYXNzLnByb3RvdHlwZSB8fCBjb21wb25lbnRDbGFzcztcbiAgICBtaXhpbkxpZmVjeWNsZUV2ZW50cyh0YXJnZXQpO1xuICAgIGNvbXBvbmVudENsYXNzLmlzTW9iWFJlYWN0T2JzZXJ2ZXIgPSB0cnVlO1xuICAgIHJldHVybiBjb21wb25lbnRDbGFzcztcbn1cblxuZnVuY3Rpb24gbWl4aW5MaWZlY3ljbGVFdmVudHModGFyZ2V0KSB7XG4gICAgcGF0Y2godGFyZ2V0LCBcImNvbXBvbmVudFdpbGxNb3VudFwiLCB0cnVlKTtbXCJjb21wb25lbnREaWRNb3VudFwiLCBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsIFwiY29tcG9uZW50RGlkVXBkYXRlXCJdLmZvckVhY2goZnVuY3Rpb24gKGZ1bmNOYW1lKSB7XG4gICAgICAgIHBhdGNoKHRhcmdldCwgZnVuY05hbWUpO1xuICAgIH0pO1xuICAgIGlmICghdGFyZ2V0LnNob3VsZENvbXBvbmVudFVwZGF0ZSkge1xuICAgICAgICB0YXJnZXQuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gcmVhY3RpdmVNaXhpbi5zaG91bGRDb21wb25lbnRVcGRhdGU7XG4gICAgfVxufVxuXG4vLyBUT0RPOiBzdXBwb3J0IGluamVjdGlvbiBzb21laG93IGFzIHdlbGw/XG52YXIgT2JzZXJ2ZXIgPSBvYnNlcnZlcihmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICAgIG9ic2VydmVySW5qZWN0ID0gX3JlZi5pbmplY3QsXG4gICAgICAgIHJlbmRlciA9IF9yZWYucmVuZGVyO1xuXG4gICAgdmFyIGNvbXBvbmVudCA9IGNoaWxkcmVuIHx8IHJlbmRlcjtcbiAgICBpZiAodHlwZW9mIGNvbXBvbmVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKCFvYnNlcnZlckluamVjdCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50KCk7XG4gICAgfVxuICAgIHZhciBJbmplY3RDb21wb25lbnQgPSBpbmplY3Qob2JzZXJ2ZXJJbmplY3QpKGNvbXBvbmVudCk7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5qZWN0Q29tcG9uZW50LCBudWxsKTtcbn0pO1xuXG5PYnNlcnZlci5kaXNwbGF5TmFtZSA9IFwiT2JzZXJ2ZXJcIjtcblxudmFyIE9ic2VydmVyUHJvcHNDaGVjayA9IGZ1bmN0aW9uIE9ic2VydmVyUHJvcHNDaGVjayhwcm9wcywga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgdmFyIGV4dHJhS2V5ID0ga2V5ID09PSBcImNoaWxkcmVuXCIgPyBcInJlbmRlclwiIDogXCJjaGlsZHJlblwiO1xuICAgIGlmICh0eXBlb2YgcHJvcHNba2V5XSA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBwcm9wc1tleHRyYUtleV0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKFwiSW52YWxpZCBwcm9wLGRvIG5vdCB1c2UgY2hpbGRyZW4gYW5kIHJlbmRlciBpbiB0aGUgc2FtZSB0aW1lIGluYFwiICsgY29tcG9uZW50TmFtZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwcm9wc1trZXldID09PSBcImZ1bmN0aW9uXCIgfHwgdHlwZW9mIHByb3BzW2V4dHJhS2V5XSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBFcnJvcihcIkludmFsaWQgcHJvcCBgXCIgKyBwcm9wRnVsbE5hbWUgKyBcImAgb2YgdHlwZSBgXCIgKyBfdHlwZW9mKHByb3BzW2tleV0pICsgXCJgIHN1cHBsaWVkIHRvXCIgKyBcIiBgXCIgKyBjb21wb25lbnROYW1lICsgXCJgLCBleHBlY3RlZCBgZnVuY3Rpb25gLlwiKTtcbn07XG5cbk9ic2VydmVyLnByb3BUeXBlcyA9IHtcbiAgICByZW5kZXI6IE9ic2VydmVyUHJvcHNDaGVjayxcbiAgICBjaGlsZHJlbjogT2JzZXJ2ZXJQcm9wc0NoZWNrXG59O1xuXG52YXIgX2NsYXNzO1xudmFyIF90ZW1wO1xuXG52YXIgc3BlY2lhbFJlYWN0S2V5cyA9IHsgY2hpbGRyZW46IHRydWUsIGtleTogdHJ1ZSwgcmVmOiB0cnVlIH07XG5cbnZhciBQcm92aWRlciA9IChfdGVtcCA9IF9jbGFzcyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgaW5oZXJpdHMoUHJvdmlkZXIsIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gUHJvdmlkZXIoKSB7XG4gICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFByb3ZpZGVyKTtcbiAgICAgICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFByb3ZpZGVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUHJvdmlkZXIpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDbGFzcyhQcm92aWRlciwgW3tcbiAgICAgICAga2V5OiBcInJlbmRlclwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIENoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJnZXRDaGlsZENvbnRleHRcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgICAgICAgIHZhciBzdG9yZXMgPSB7fTtcbiAgICAgICAgICAgIC8vIGluaGVyaXQgc3RvcmVzXG4gICAgICAgICAgICB2YXIgYmFzZVN0b3JlcyA9IHRoaXMuY29udGV4dC5tb2J4U3RvcmVzO1xuICAgICAgICAgICAgaWYgKGJhc2VTdG9yZXMpIGZvciAodmFyIGtleSBpbiBiYXNlU3RvcmVzKSB7XG4gICAgICAgICAgICAgICAgc3RvcmVzW2tleV0gPSBiYXNlU3RvcmVzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhZGQgb3duIHN0b3Jlc1xuICAgICAgICAgICAgZm9yICh2YXIgX2tleSBpbiB0aGlzLnByb3BzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzcGVjaWFsUmVhY3RLZXlzW19rZXldICYmIF9rZXkgIT09IFwic3VwcHJlc3NDaGFuZ2VkU3RvcmVXYXJuaW5nXCIpIHN0b3Jlc1tfa2V5XSA9IHRoaXMucHJvcHNbX2tleV07XG4gICAgICAgICAgICB9cmV0dXJuIHtcbiAgICAgICAgICAgICAgICBtb2J4U3RvcmVzOiBzdG9yZXNcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICAgICAgLy8gTWF5YmUgdGhpcyB3YXJuaW5nIGlzIHRvbyBhZ2dyZXNzaXZlP1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKG5leHRQcm9wcykubGVuZ3RoICE9PSBPYmplY3Qua2V5cyh0aGlzLnByb3BzKS5sZW5ndGgpIGNvbnNvbGUud2FybihcIk1vYlggUHJvdmlkZXI6IFRoZSBzZXQgb2YgcHJvdmlkZWQgc3RvcmVzIGhhcyBjaGFuZ2VkLiBQbGVhc2UgYXZvaWQgY2hhbmdpbmcgc3RvcmVzIGFzIHRoZSBjaGFuZ2UgbWlnaHQgbm90IHByb3BhZ2F0ZSB0byBhbGwgY2hpbGRyZW5cIik7XG4gICAgICAgICAgICBpZiAoIW5leHRQcm9wcy5zdXBwcmVzc0NoYW5nZWRTdG9yZVdhcm5pbmcpIGZvciAodmFyIGtleSBpbiBuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXNwZWNpYWxSZWFjdEtleXNba2V5XSAmJiB0aGlzLnByb3BzW2tleV0gIT09IG5leHRQcm9wc1trZXldKSBjb25zb2xlLndhcm4oXCJNb2JYIFByb3ZpZGVyOiBQcm92aWRlZCBzdG9yZSAnXCIgKyBrZXkgKyBcIicgaGFzIGNoYW5nZWQuIFBsZWFzZSBhdm9pZCByZXBsYWNpbmcgc3RvcmVzIGFzIHRoZSBjaGFuZ2UgbWlnaHQgbm90IHByb3BhZ2F0ZSB0byBhbGwgY2hpbGRyZW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XSk7XG4gICAgcmV0dXJuIFByb3ZpZGVyO1xufShDb21wb25lbnQpLCBfY2xhc3MuY29udGV4dFR5cGVzID0ge1xuICAgIG1vYnhTdG9yZXM6IG9iamVjdE9yT2JzZXJ2YWJsZU9iamVjdFxufSwgX2NsYXNzLmNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgIG1vYnhTdG9yZXM6IG9iamVjdE9yT2JzZXJ2YWJsZU9iamVjdC5pc1JlcXVpcmVkXG59LCBfdGVtcCk7XG5cbmlmICghQ29tcG9uZW50KSB0aHJvdyBuZXcgRXJyb3IoXCJtb2J4LXJlYWN0IHJlcXVpcmVzIFJlYWN0IHRvIGJlIGF2YWlsYWJsZVwiKTtcbmlmICghc3B5KSB0aHJvdyBuZXcgRXJyb3IoXCJtb2J4LXJlYWN0IHJlcXVpcmVzIG1vYnggdG8gYmUgYXZhaWxhYmxlXCIpO1xuXG5pZiAodHlwZW9mIHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzID09PSBcImZ1bmN0aW9uXCIpIGNvbmZpZ3VyZSh7IHJlYWN0aW9uU2NoZWR1bGVyOiB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyB9KTtlbHNlIGlmICh0eXBlb2YgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMkMSA9PT0gXCJmdW5jdGlvblwiKSBjb25maWd1cmUoeyByZWFjdGlvblNjaGVkdWxlcjogdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMkMSB9KTtcblxudmFyIG9uRXJyb3IgPSBmdW5jdGlvbiBvbkVycm9yKGZuKSB7XG4gICAgcmV0dXJuIGVycm9yc1JlcG9ydGVyLm9uKGZuKTtcbn07XG5cbi8qIERldlRvb2wgc3VwcG9ydCAqL1xuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYW5keWtvZy9tb2J4LWRldnRvb2xzL2Jsb2IvZDg5NzZjMjRiOGNiNzI3ZWQ1OWY5YTBiYzkwNWEwMDlkZjc5ZTIyMS9zcmMvYmFja2VuZC9pbnN0YWxsR2xvYmFsSG9vay5qc1xuXG5pZiAoKHR5cGVvZiBfX01PQlhfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKF9fTU9CWF9ERVZUT09MU19HTE9CQUxfSE9PS19fKSkgPT09IFwib2JqZWN0XCIpIHtcbiAgICB2YXIgbW9ieCQxID0geyBzcHk6IHNweSwgZXh0cmFzOiB7IGdldERlYnVnTmFtZTogZ2V0RGVidWdOYW1lIH0gfTtcbiAgICB2YXIgbW9ieFJlYWN0ID0geyByZW5kZXJSZXBvcnRlcjogcmVuZGVyUmVwb3J0ZXIsIGNvbXBvbmVudEJ5Tm9kZVJlZ2lzdGVyeTogY29tcG9uZW50QnlOb2RlUmVnaXN0ZXJ5LCB0cmFja0NvbXBvbmVudHM6IHRyYWNrQ29tcG9uZW50cyB9O1xuICAgIF9fTU9CWF9ERVZUT09MU19HTE9CQUxfSE9PS19fLmluamVjdE1vYnhSZWFjdChtb2J4UmVhY3QsIG1vYngkMSk7XG59XG5cbmV4cG9ydCB7IHByb3BUeXBlcywgcHJvcFR5cGVzIGFzIFByb3BUeXBlcywgb25FcnJvciwgb2JzZXJ2ZXIsIE9ic2VydmVyLCByZW5kZXJSZXBvcnRlciwgY29tcG9uZW50QnlOb2RlUmVnaXN0ZXJ5LCB0cmFja0NvbXBvbmVudHMsIHVzZVN0YXRpY1JlbmRlcmluZywgUHJvdmlkZXIsIGluamVjdCB9O1xuIiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG4vKiBlc2xpbnQgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZW5oYW5jZXIgZnJvbSAnLi9lbmhhbmNlcic7XG5pbXBvcnQgeyBwcm9wVHlwZXMsIGRlZmF1bHRQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuXG52YXIgQ2lyY2xlID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENpcmNsZSwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ2lyY2xlKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDaXJjbGUpO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBDaXJjbGUucHJvdG90eXBlLmdldFBhdGhTdHlsZXMgPSBmdW5jdGlvbiBnZXRQYXRoU3R5bGVzKCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBwZXJjZW50ID0gX3Byb3BzLnBlcmNlbnQsXG4gICAgICAgIHN0cm9rZVdpZHRoID0gX3Byb3BzLnN0cm9rZVdpZHRoLFxuICAgICAgICBfcHJvcHMkZ2FwRGVncmVlID0gX3Byb3BzLmdhcERlZ3JlZSxcbiAgICAgICAgZ2FwRGVncmVlID0gX3Byb3BzJGdhcERlZ3JlZSA9PT0gdW5kZWZpbmVkID8gMCA6IF9wcm9wcyRnYXBEZWdyZWUsXG4gICAgICAgIGdhcFBvc2l0aW9uID0gX3Byb3BzLmdhcFBvc2l0aW9uO1xuXG4gICAgdmFyIHJhZGl1cyA9IDUwIC0gc3Ryb2tlV2lkdGggLyAyO1xuICAgIHZhciBiZWdpblBvc2l0aW9uWCA9IDA7XG4gICAgdmFyIGJlZ2luUG9zaXRpb25ZID0gLXJhZGl1cztcbiAgICB2YXIgZW5kUG9zaXRpb25YID0gMDtcbiAgICB2YXIgZW5kUG9zaXRpb25ZID0gLTIgKiByYWRpdXM7XG4gICAgc3dpdGNoIChnYXBQb3NpdGlvbikge1xuICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgIGJlZ2luUG9zaXRpb25YID0gLXJhZGl1cztcbiAgICAgICAgYmVnaW5Qb3NpdGlvblkgPSAwO1xuICAgICAgICBlbmRQb3NpdGlvblggPSAyICogcmFkaXVzO1xuICAgICAgICBlbmRQb3NpdGlvblkgPSAwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgYmVnaW5Qb3NpdGlvblggPSByYWRpdXM7XG4gICAgICAgIGJlZ2luUG9zaXRpb25ZID0gMDtcbiAgICAgICAgZW5kUG9zaXRpb25YID0gLTIgKiByYWRpdXM7XG4gICAgICAgIGVuZFBvc2l0aW9uWSA9IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgYmVnaW5Qb3NpdGlvblkgPSByYWRpdXM7XG4gICAgICAgIGVuZFBvc2l0aW9uWSA9IDIgKiByYWRpdXM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gICAgdmFyIHBhdGhTdHJpbmcgPSAnTSA1MCw1MCBtICcgKyBiZWdpblBvc2l0aW9uWCArICcsJyArIGJlZ2luUG9zaXRpb25ZICsgJ1xcbiAgICAgYSAnICsgcmFkaXVzICsgJywnICsgcmFkaXVzICsgJyAwIDEgMSAnICsgZW5kUG9zaXRpb25YICsgJywnICsgLWVuZFBvc2l0aW9uWSArICdcXG4gICAgIGEgJyArIHJhZGl1cyArICcsJyArIHJhZGl1cyArICcgMCAxIDEgJyArIC1lbmRQb3NpdGlvblggKyAnLCcgKyBlbmRQb3NpdGlvblk7XG4gICAgdmFyIGxlbiA9IE1hdGguUEkgKiAyICogcmFkaXVzO1xuICAgIHZhciB0cmFpbFBhdGhTdHlsZSA9IHtcbiAgICAgIHN0cm9rZURhc2hhcnJheTogbGVuIC0gZ2FwRGVncmVlICsgJ3B4ICcgKyBsZW4gKyAncHgnLFxuICAgICAgc3Ryb2tlRGFzaG9mZnNldDogJy0nICsgZ2FwRGVncmVlIC8gMiArICdweCcsXG4gICAgICB0cmFuc2l0aW9uOiAnc3Ryb2tlLWRhc2hvZmZzZXQgLjNzIGVhc2UgMHMsIHN0cm9rZS1kYXNoYXJyYXkgLjNzIGVhc2UgMHMsIHN0cm9rZSAuM3MnXG4gICAgfTtcbiAgICB2YXIgc3Ryb2tlUGF0aFN0eWxlID0ge1xuICAgICAgc3Ryb2tlRGFzaGFycmF5OiBwZXJjZW50IC8gMTAwICogKGxlbiAtIGdhcERlZ3JlZSkgKyAncHggJyArIGxlbiArICdweCcsXG4gICAgICBzdHJva2VEYXNob2Zmc2V0OiAnLScgKyBnYXBEZWdyZWUgLyAyICsgJ3B4JyxcbiAgICAgIHRyYW5zaXRpb246ICdzdHJva2UtZGFzaG9mZnNldCAuM3MgZWFzZSAwcywgc3Ryb2tlLWRhc2hhcnJheSAuM3MgZWFzZSAwcywgc3Ryb2tlIC4zcywgc3Ryb2tlLXdpZHRoIC4wNnMgZWFzZSAuM3MnIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICB9O1xuICAgIHJldHVybiB7IHBhdGhTdHJpbmc6IHBhdGhTdHJpbmcsIHRyYWlsUGF0aFN0eWxlOiB0cmFpbFBhdGhTdHlsZSwgc3Ryb2tlUGF0aFN0eWxlOiBzdHJva2VQYXRoU3R5bGUgfTtcbiAgfTtcblxuICBDaXJjbGUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgcHJlZml4Q2xzID0gX3Byb3BzMi5wcmVmaXhDbHMsXG4gICAgICAgIHN0cm9rZVdpZHRoID0gX3Byb3BzMi5zdHJva2VXaWR0aCxcbiAgICAgICAgdHJhaWxXaWR0aCA9IF9wcm9wczIudHJhaWxXaWR0aCxcbiAgICAgICAgc3Ryb2tlQ29sb3IgPSBfcHJvcHMyLnN0cm9rZUNvbG9yLFxuICAgICAgICBwZXJjZW50ID0gX3Byb3BzMi5wZXJjZW50LFxuICAgICAgICB0cmFpbENvbG9yID0gX3Byb3BzMi50cmFpbENvbG9yLFxuICAgICAgICBzdHJva2VMaW5lY2FwID0gX3Byb3BzMi5zdHJva2VMaW5lY2FwLFxuICAgICAgICBzdHlsZSA9IF9wcm9wczIuc3R5bGUsXG4gICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wczIuY2xhc3NOYW1lLFxuICAgICAgICByZXN0UHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzMiwgWydwcmVmaXhDbHMnLCAnc3Ryb2tlV2lkdGgnLCAndHJhaWxXaWR0aCcsICdzdHJva2VDb2xvcicsICdwZXJjZW50JywgJ3RyYWlsQ29sb3InLCAnc3Ryb2tlTGluZWNhcCcsICdzdHlsZScsICdjbGFzc05hbWUnXSk7XG5cbiAgICB2YXIgX2dldFBhdGhTdHlsZXMgPSB0aGlzLmdldFBhdGhTdHlsZXMoKSxcbiAgICAgICAgcGF0aFN0cmluZyA9IF9nZXRQYXRoU3R5bGVzLnBhdGhTdHJpbmcsXG4gICAgICAgIHRyYWlsUGF0aFN0eWxlID0gX2dldFBhdGhTdHlsZXMudHJhaWxQYXRoU3R5bGUsXG4gICAgICAgIHN0cm9rZVBhdGhTdHlsZSA9IF9nZXRQYXRoU3R5bGVzLnN0cm9rZVBhdGhTdHlsZTtcblxuICAgIGRlbGV0ZSByZXN0UHJvcHMucGVyY2VudDtcbiAgICBkZWxldGUgcmVzdFByb3BzLmdhcERlZ3JlZTtcbiAgICBkZWxldGUgcmVzdFByb3BzLmdhcFBvc2l0aW9uO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3N2ZycsXG4gICAgICBfZXh0ZW5kcyh7XG4gICAgICAgIGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1jaXJjbGUgJyArIGNsYXNzTmFtZSxcbiAgICAgICAgdmlld0JveDogJzAgMCAxMDAgMTAwJyxcbiAgICAgICAgc3R5bGU6IHN0eWxlXG4gICAgICB9LCByZXN0UHJvcHMpLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgncGF0aCcsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWNpcmNsZS10cmFpbCcsXG4gICAgICAgIGQ6IHBhdGhTdHJpbmcsXG4gICAgICAgIHN0cm9rZTogdHJhaWxDb2xvcixcbiAgICAgICAgc3Ryb2tlV2lkdGg6IHRyYWlsV2lkdGggfHwgc3Ryb2tlV2lkdGgsXG4gICAgICAgIGZpbGxPcGFjaXR5OiAnMCcsXG4gICAgICAgIHN0eWxlOiB0cmFpbFBhdGhTdHlsZVxuICAgICAgfSksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdwYXRoJywge1xuICAgICAgICBjbGFzc05hbWU6IHByZWZpeENscyArICctY2lyY2xlLXBhdGgnLFxuICAgICAgICBkOiBwYXRoU3RyaW5nLFxuICAgICAgICBzdHJva2VMaW5lY2FwOiBzdHJva2VMaW5lY2FwLFxuICAgICAgICBzdHJva2U6IHN0cm9rZUNvbG9yLFxuICAgICAgICBzdHJva2VXaWR0aDogdGhpcy5wcm9wcy5wZXJjZW50ID09PSAwID8gMCA6IHN0cm9rZVdpZHRoLFxuICAgICAgICBmaWxsT3BhY2l0eTogJzAnLFxuICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZihwYXRoKSB7XG4gICAgICAgICAgX3RoaXMyLnBhdGggPSBwYXRoO1xuICAgICAgICB9LFxuICAgICAgICBzdHlsZTogc3Ryb2tlUGF0aFN0eWxlXG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIENpcmNsZTtcbn0oQ29tcG9uZW50KTtcblxuQ2lyY2xlLnByb3BUeXBlcyA9IF9leHRlbmRzKHt9LCBwcm9wVHlwZXMsIHtcbiAgZ2FwUG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihbJ3RvcCcsICdib3R0b20nLCAnbGVmdCcsICdyaWdodCddKVxufSk7XG5cbkNpcmNsZS5kZWZhdWx0UHJvcHMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdFByb3BzLCB7XG4gIGdhcFBvc2l0aW9uOiAndG9wJ1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGVuaGFuY2VyKENpcmNsZSk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGVuaGFuY2VyIGZyb20gJy4vZW5oYW5jZXInO1xuaW1wb3J0IHsgcHJvcFR5cGVzLCBkZWZhdWx0UHJvcHMgfSBmcm9tICcuL3R5cGVzJztcblxudmFyIExpbmUgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoTGluZSwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTGluZSgpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGluZSk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIExpbmUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBwZXJjZW50ID0gX3Byb3BzLnBlcmNlbnQsXG4gICAgICAgIHByZWZpeENscyA9IF9wcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgIHN0cm9rZUNvbG9yID0gX3Byb3BzLnN0cm9rZUNvbG9yLFxuICAgICAgICBzdHJva2VMaW5lY2FwID0gX3Byb3BzLnN0cm9rZUxpbmVjYXAsXG4gICAgICAgIHN0cm9rZVdpZHRoID0gX3Byb3BzLnN0cm9rZVdpZHRoLFxuICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcbiAgICAgICAgdHJhaWxDb2xvciA9IF9wcm9wcy50cmFpbENvbG9yLFxuICAgICAgICB0cmFpbFdpZHRoID0gX3Byb3BzLnRyYWlsV2lkdGgsXG4gICAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnY2xhc3NOYW1lJywgJ3BlcmNlbnQnLCAncHJlZml4Q2xzJywgJ3N0cm9rZUNvbG9yJywgJ3N0cm9rZUxpbmVjYXAnLCAnc3Ryb2tlV2lkdGgnLCAnc3R5bGUnLCAndHJhaWxDb2xvcicsICd0cmFpbFdpZHRoJ10pO1xuXG4gICAgZGVsZXRlIHJlc3RQcm9wcy5nYXBQb3NpdGlvbjtcblxuICAgIHZhciBwYXRoU3R5bGUgPSB7XG4gICAgICBzdHJva2VEYXNoYXJyYXk6ICcxMDBweCwgMTAwcHgnLFxuICAgICAgc3Ryb2tlRGFzaG9mZnNldDogMTAwIC0gcGVyY2VudCArICdweCcsXG4gICAgICB0cmFuc2l0aW9uOiAnc3Ryb2tlLWRhc2hvZmZzZXQgMC4zcyBlYXNlIDBzLCBzdHJva2UgMC4zcyBsaW5lYXInXG4gICAgfTtcblxuICAgIHZhciBjZW50ZXIgPSBzdHJva2VXaWR0aCAvIDI7XG4gICAgdmFyIHJpZ2h0ID0gMTAwIC0gc3Ryb2tlV2lkdGggLyAyO1xuICAgIHZhciBwYXRoU3RyaW5nID0gJ00gJyArIChzdHJva2VMaW5lY2FwID09PSAncm91bmQnID8gY2VudGVyIDogMCkgKyAnLCcgKyBjZW50ZXIgKyAnXFxuICAgICAgICAgICBMICcgKyAoc3Ryb2tlTGluZWNhcCA9PT0gJ3JvdW5kJyA/IHJpZ2h0IDogMTAwKSArICcsJyArIGNlbnRlcjtcbiAgICB2YXIgdmlld0JveFN0cmluZyA9ICcwIDAgMTAwICcgKyBzdHJva2VXaWR0aDtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ3N2ZycsXG4gICAgICBfZXh0ZW5kcyh7XG4gICAgICAgIGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1saW5lICcgKyBjbGFzc05hbWUsXG4gICAgICAgIHZpZXdCb3g6IHZpZXdCb3hTdHJpbmcsXG4gICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW86ICdub25lJyxcbiAgICAgICAgc3R5bGU6IHN0eWxlXG4gICAgICB9LCByZXN0UHJvcHMpLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgncGF0aCcsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWxpbmUtdHJhaWwnLFxuICAgICAgICBkOiBwYXRoU3RyaW5nLFxuICAgICAgICBzdHJva2VMaW5lY2FwOiBzdHJva2VMaW5lY2FwLFxuICAgICAgICBzdHJva2U6IHRyYWlsQ29sb3IsXG4gICAgICAgIHN0cm9rZVdpZHRoOiB0cmFpbFdpZHRoIHx8IHN0cm9rZVdpZHRoLFxuICAgICAgICBmaWxsT3BhY2l0eTogJzAnXG4gICAgICB9KSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7XG4gICAgICAgIGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1saW5lLXBhdGgnLFxuICAgICAgICBkOiBwYXRoU3RyaW5nLFxuICAgICAgICBzdHJva2VMaW5lY2FwOiBzdHJva2VMaW5lY2FwLFxuICAgICAgICBzdHJva2U6IHN0cm9rZUNvbG9yLFxuICAgICAgICBzdHJva2VXaWR0aDogc3Ryb2tlV2lkdGgsXG4gICAgICAgIGZpbGxPcGFjaXR5OiAnMCcsXG4gICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKHBhdGgpIHtcbiAgICAgICAgICBfdGhpczIucGF0aCA9IHBhdGg7XG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlOiBwYXRoU3R5bGVcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gTGluZTtcbn0oQ29tcG9uZW50KTtcblxuTGluZS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbkxpbmUuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuXG5leHBvcnQgZGVmYXVsdCBlbmhhbmNlcihMaW5lKTsiLCJpbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xudmFyIGVuaGFuY2VyID0gZnVuY3Rpb24gZW5oYW5jZXIoV3JhcHBlZENvbXBvbmVudCkge1xuICByZXR1cm4gZnVuY3Rpb24gKF9XcmFwcGVkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFByb2dyZXNzLCBfV3JhcHBlZENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBQcm9ncmVzcygpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQcm9ncmVzcyk7XG5cbiAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfV3JhcHBlZENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBQcm9ncmVzcy5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgaWYgKCF0aGlzLnBhdGgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHBhdGhTdHlsZSA9IHRoaXMucGF0aC5zdHlsZTtcbiAgICAgIHBhdGhTdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnLjNzLCAuM3MsIC4zcywgLjA2cyc7XG4gICAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgIGlmICh0aGlzLnByZXZUaW1lU3RhbXAgJiYgbm93IC0gdGhpcy5wcmV2VGltZVN0YW1wIDwgMTAwKSB7XG4gICAgICAgIHBhdGhTdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnMHMsIDBzJztcbiAgICAgIH1cbiAgICAgIHRoaXMucHJldlRpbWVTdGFtcCA9IERhdGUubm93KCk7XG4gICAgfTtcblxuICAgIFByb2dyZXNzLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gX1dyYXBwZWRDb21wb25lbnQucHJvdG90eXBlLnJlbmRlci5jYWxsKHRoaXMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gUHJvZ3Jlc3M7XG4gIH0oV3JhcHBlZENvbXBvbmVudCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlbmhhbmNlcjsiLCJpbXBvcnQgTGluZSBmcm9tICcuL0xpbmUnO1xuaW1wb3J0IENpcmNsZSBmcm9tICcuL0NpcmNsZSc7XG5cbmV4cG9ydCB7IExpbmUsIENpcmNsZSB9O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIExpbmU6IExpbmUsXG4gIENpcmNsZTogQ2lyY2xlXG59OyIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCB2YXIgZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6ICcnLFxuICBwZXJjZW50OiAwLFxuICBwcmVmaXhDbHM6ICdyYy1wcm9ncmVzcycsXG4gIHN0cm9rZUNvbG9yOiAnIzJkYjdmNScsXG4gIHN0cm9rZUxpbmVjYXA6ICdyb3VuZCcsXG4gIHN0cm9rZVdpZHRoOiAxLFxuICBzdHlsZToge30sXG4gIHRyYWlsQ29sb3I6ICcjRDlEOUQ5JyxcbiAgdHJhaWxXaWR0aDogMVxufTtcblxuZXhwb3J0IHZhciBwcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcGVyY2VudDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBwcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0cm9rZUNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdHJva2VMaW5lY2FwOiBQcm9wVHlwZXMub25lT2YoWydidXR0JywgJ3JvdW5kJywgJ3NxdWFyZSddKSxcbiAgc3Ryb2tlV2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIHRyYWlsQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRyYWlsV2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKVxufTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbi8qIGVzbGludCByZWFjdC9uby1pcy1tb3VudGVkOjAgcmVhY3Qvc29ydC1jb21wOjAgKi9cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBkZWZhdWx0UmVxdWVzdCBmcm9tICcuL3JlcXVlc3QnO1xuaW1wb3J0IGdldFVpZCBmcm9tICcuL3VpZCc7XG5pbXBvcnQgYXR0ckFjY2VwdCBmcm9tICcuL2F0dHItYWNjZXB0JztcblxudmFyIEFqYXhVcGxvYWRlciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhBamF4VXBsb2FkZXIsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEFqYXhVcGxvYWRlcigpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWpheFVwbG9hZGVyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBBamF4VXBsb2FkZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihBamF4VXBsb2FkZXIpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHsgdWlkOiBnZXRVaWQoKSB9LCBfdGhpcy5yZXFzID0ge30sIF90aGlzLm9uQ2hhbmdlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBmaWxlcyA9IGUudGFyZ2V0LmZpbGVzO1xuICAgICAgX3RoaXMudXBsb2FkRmlsZXMoZmlsZXMpO1xuICAgICAgX3RoaXMucmVzZXQoKTtcbiAgICB9LCBfdGhpcy5vbkNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGVsID0gX3RoaXMuZmlsZUlucHV0O1xuICAgICAgaWYgKCFlbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlbC5jbGljaygpO1xuICAgIH0sIF90aGlzLm9uS2V5RG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgX3RoaXMub25DbGljaygpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLm9uRmlsZURyb3AgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUudHlwZSA9PT0gJ2RyYWdvdmVyJykge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBmaWxlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGUuZGF0YVRyYW5zZmVyLmZpbGVzKS5maWx0ZXIoZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgcmV0dXJuIGF0dHJBY2NlcHQoZmlsZSwgX3RoaXMucHJvcHMuYWNjZXB0KTtcbiAgICAgIH0pO1xuICAgICAgX3RoaXMudXBsb2FkRmlsZXMoZmlsZXMpO1xuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSwgX3RoaXMuc2F2ZUZpbGVJbnB1dCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBfdGhpcy5maWxlSW5wdXQgPSBub2RlO1xuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEFqYXhVcGxvYWRlciwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5faXNNb3VudGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmFib3J0KCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndXBsb2FkRmlsZXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGxvYWRGaWxlcyhmaWxlcykge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBwb3N0RmlsZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmaWxlcyk7XG4gICAgICBwb3N0RmlsZXMuZm9yRWFjaChmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICBmaWxlLnVpZCA9IGdldFVpZCgpO1xuICAgICAgICBfdGhpczIudXBsb2FkKGZpbGUsIHBvc3RGaWxlcyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1cGxvYWQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGxvYWQoZmlsZSwgZmlsZUxpc3QpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuXG4gICAgICBpZiAoIXByb3BzLmJlZm9yZVVwbG9hZCkge1xuICAgICAgICAvLyBhbHdheXMgYXN5bmMgaW4gY2FzZSB1c2UgcmVhY3Qgc3RhdGUgdG8ga2VlcCBmaWxlTGlzdFxuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMy5wb3N0KGZpbGUpO1xuICAgICAgICB9LCAwKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGJlZm9yZSA9IHByb3BzLmJlZm9yZVVwbG9hZChmaWxlLCBmaWxlTGlzdCk7XG4gICAgICBpZiAoYmVmb3JlICYmIGJlZm9yZS50aGVuKSB7XG4gICAgICAgIGJlZm9yZS50aGVuKGZ1bmN0aW9uIChwcm9jZXNzZWRGaWxlKSB7XG4gICAgICAgICAgdmFyIHByb2Nlc3NlZEZpbGVUeXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHByb2Nlc3NlZEZpbGUpO1xuICAgICAgICAgIGlmIChwcm9jZXNzZWRGaWxlVHlwZSA9PT0gJ1tvYmplY3QgRmlsZV0nIHx8IHByb2Nlc3NlZEZpbGVUeXBlID09PSAnW29iamVjdCBCbG9iXScpIHtcbiAgICAgICAgICAgIF90aGlzMy5wb3N0KHByb2Nlc3NlZEZpbGUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpczMucG9zdChmaWxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pWydjYXRjaCddKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgY29uc29sZSAmJiBjb25zb2xlLmxvZyhlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoYmVmb3JlICE9PSBmYWxzZSkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMzLnBvc3QoZmlsZSk7XG4gICAgICAgIH0sIDApO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Bvc3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwb3N0KGZpbGUpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICBpZiAoIXRoaXMuX2lzTW91bnRlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIGRhdGEgPSBwcm9wcy5kYXRhO1xuICAgICAgdmFyIG9uU3RhcnQgPSBwcm9wcy5vblN0YXJ0LFxuICAgICAgICAgIG9uUHJvZ3Jlc3MgPSBwcm9wcy5vblByb2dyZXNzO1xuXG4gICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZGF0YSA9IGRhdGEoZmlsZSk7XG4gICAgICB9XG4gICAgICB2YXIgdWlkID0gZmlsZS51aWQ7XG5cbiAgICAgIHZhciByZXF1ZXN0ID0gcHJvcHMuY3VzdG9tUmVxdWVzdCB8fCBkZWZhdWx0UmVxdWVzdDtcbiAgICAgIHRoaXMucmVxc1t1aWRdID0gcmVxdWVzdCh7XG4gICAgICAgIGFjdGlvbjogcHJvcHMuYWN0aW9uLFxuICAgICAgICBmaWxlbmFtZTogcHJvcHMubmFtZSxcbiAgICAgICAgZmlsZTogZmlsZSxcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgaGVhZGVyczogcHJvcHMuaGVhZGVycyxcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiBwcm9wcy53aXRoQ3JlZGVudGlhbHMsXG4gICAgICAgIG9uUHJvZ3Jlc3M6IG9uUHJvZ3Jlc3MgPyBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIG9uUHJvZ3Jlc3MoZSwgZmlsZSk7XG4gICAgICAgIH0gOiBudWxsLFxuICAgICAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uIG9uU3VjY2VzcyhyZXQsIHhocikge1xuICAgICAgICAgIGRlbGV0ZSBfdGhpczQucmVxc1t1aWRdO1xuICAgICAgICAgIHByb3BzLm9uU3VjY2VzcyhyZXQsIGZpbGUsIHhocik7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uIG9uRXJyb3IoZXJyLCByZXQpIHtcbiAgICAgICAgICBkZWxldGUgX3RoaXM0LnJlcXNbdWlkXTtcbiAgICAgICAgICBwcm9wcy5vbkVycm9yKGVyciwgcmV0LCBmaWxlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBvblN0YXJ0KGZpbGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Jlc2V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdWlkOiBnZXRVaWQoKVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYWJvcnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhYm9ydChmaWxlKSB7XG4gICAgICB2YXIgcmVxcyA9IHRoaXMucmVxcztcblxuICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgdmFyIHVpZCA9IGZpbGU7XG4gICAgICAgIGlmIChmaWxlICYmIGZpbGUudWlkKSB7XG4gICAgICAgICAgdWlkID0gZmlsZS51aWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcXNbdWlkXSkge1xuICAgICAgICAgIHJlcXNbdWlkXS5hYm9ydCgpO1xuICAgICAgICAgIGRlbGV0ZSByZXFzW3VpZF07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHJlcXMpLmZvckVhY2goZnVuY3Rpb24gKHVpZCkge1xuICAgICAgICAgIGlmIChyZXFzW3VpZF0pIHtcbiAgICAgICAgICAgIHJlcXNbdWlkXS5hYm9ydCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRlbGV0ZSByZXFzW3VpZF07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgVGFnID0gX3Byb3BzLmNvbXBvbmVudCxcbiAgICAgICAgICBwcmVmaXhDbHMgPSBfcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgICAgbXVsdGlwbGUgPSBfcHJvcHMubXVsdGlwbGUsXG4gICAgICAgICAgYWNjZXB0ID0gX3Byb3BzLmFjY2VwdCxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbjtcblxuICAgICAgdmFyIGNscyA9IGNsYXNzTmFtZXMoKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzLCB0cnVlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLWRpc2FibGVkJywgZGlzYWJsZWQpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIGNsYXNzTmFtZSwgY2xhc3NOYW1lKSwgX2NsYXNzTmFtZXMpKTtcbiAgICAgIHZhciBldmVudHMgPSBkaXNhYmxlZCA/IHt9IDoge1xuICAgICAgICBvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssXG4gICAgICAgIG9uS2V5RG93bjogdGhpcy5vbktleURvd24sXG4gICAgICAgIG9uRHJvcDogdGhpcy5vbkZpbGVEcm9wLFxuICAgICAgICBvbkRyYWdPdmVyOiB0aGlzLm9uRmlsZURyb3AsXG4gICAgICAgIHRhYkluZGV4OiAnMCdcbiAgICAgIH07XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgVGFnLFxuICAgICAgICBfZXh0ZW5kcyh7fSwgZXZlbnRzLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbHMsXG4gICAgICAgICAgcm9sZTogJ2J1dHRvbicsXG4gICAgICAgICAgc3R5bGU6IHN0eWxlXG4gICAgICAgIH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgICAgICB0eXBlOiAnZmlsZScsXG4gICAgICAgICAgcmVmOiB0aGlzLnNhdmVGaWxlSW5wdXQsXG4gICAgICAgICAga2V5OiB0aGlzLnN0YXRlLnVpZCxcbiAgICAgICAgICBzdHlsZTogeyBkaXNwbGF5OiAnbm9uZScgfSxcbiAgICAgICAgICBhY2NlcHQ6IGFjY2VwdCxcbiAgICAgICAgICBtdWx0aXBsZTogbXVsdGlwbGUsXG4gICAgICAgICAgb25DaGFuZ2U6IHRoaXMub25DaGFuZ2VcbiAgICAgICAgfSksXG4gICAgICAgIGNoaWxkcmVuXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBBamF4VXBsb2FkZXI7XG59KENvbXBvbmVudCk7XG5cbkFqYXhVcGxvYWRlci5wcm9wVHlwZXMgPSB7XG4gIGNvbXBvbmVudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgYWNjZXB0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgb25TdGFydDogUHJvcFR5cGVzLmZ1bmMsXG4gIGRhdGE6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSksXG4gIGhlYWRlcnM6IFByb3BUeXBlcy5vYmplY3QsXG4gIGJlZm9yZVVwbG9hZDogUHJvcFR5cGVzLmZ1bmMsXG4gIGN1c3RvbVJlcXVlc3Q6IFByb3BUeXBlcy5mdW5jLFxuICBvblByb2dyZXNzOiBQcm9wVHlwZXMuZnVuYyxcbiAgd2l0aENyZWRlbnRpYWxzOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBBamF4VXBsb2FkZXI7IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG4vKiBlc2xpbnQgcmVhY3Qvc29ydC1jb21wOjAgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBnZXRVaWQgZnJvbSAnLi91aWQnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnd2FybmluZyc7XG5cbnZhciBJRlJBTUVfU1RZTEUgPSB7XG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB0b3A6IDAsXG4gIG9wYWNpdHk6IDAsXG4gIGZpbHRlcjogJ2FscGhhKG9wYWNpdHk9MCknLFxuICBsZWZ0OiAwLFxuICB6SW5kZXg6IDk5OTlcbn07XG5cbi8vIGRpZmVyZW50IGZyb20gQWpheFVwbG9hZCwgY2FuIG9ubHkgdXBsb2FkIG9uIGF0IG9uZSB0aW1lLCBzZXJpYWwgc2VyaW91c2x5XG5cbnZhciBJZnJhbWVVcGxvYWRlciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhJZnJhbWVVcGxvYWRlciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gSWZyYW1lVXBsb2FkZXIoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIElmcmFtZVVwbG9hZGVyKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBJZnJhbWVVcGxvYWRlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKElmcmFtZVVwbG9hZGVyKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7IHVwbG9hZGluZzogZmFsc2UgfSwgX3RoaXMuZmlsZSA9IHt9LCBfdGhpcy5vbkxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIV90aGlzLnN0YXRlLnVwbG9hZGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgX3RoaXMyID0gX3RoaXMsXG4gICAgICAgICAgcHJvcHMgPSBfdGhpczIucHJvcHMsXG4gICAgICAgICAgZmlsZSA9IF90aGlzMi5maWxlO1xuXG4gICAgICB2YXIgcmVzcG9uc2UgPSB2b2lkIDA7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgZG9jID0gX3RoaXMuZ2V0SWZyYW1lRG9jdW1lbnQoKTtcbiAgICAgICAgdmFyIHNjcmlwdCA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XG4gICAgICAgIGlmIChzY3JpcHQgJiYgc2NyaXB0LnBhcmVudE5vZGUgPT09IGRvYy5ib2R5KSB7XG4gICAgICAgICAgZG9jLmJvZHkucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfVxuICAgICAgICByZXNwb25zZSA9IGRvYy5ib2R5LmlubmVySFRNTDtcbiAgICAgICAgcHJvcHMub25TdWNjZXNzKHJlc3BvbnNlLCBmaWxlKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB3YXJuaW5nKGZhbHNlLCAnY3Jvc3MgZG9tYWluIGVycm9yIGZvciBVcGxvYWQuIE1heWJlIHNlcnZlciBzaG91bGQgcmV0dXJuIGRvY3VtZW50LmRvbWFpbiBzY3JpcHQuIHNlZSBOb3RlIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC91cGxvYWQnKTtcbiAgICAgICAgcmVzcG9uc2UgPSAnY3Jvc3MtZG9tYWluJztcbiAgICAgICAgcHJvcHMub25FcnJvcihlcnIsIG51bGwsIGZpbGUpO1xuICAgICAgfVxuICAgICAgX3RoaXMuZW5kVXBsb2FkKCk7XG4gICAgfSwgX3RoaXMub25DaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gX3RoaXMuZ2V0Rm9ybUlucHV0Tm9kZSgpO1xuICAgICAgLy8gaWU4LzkgZG9uJ3Qgc3VwcG9ydCBGaWxlTGlzdCBPYmplY3RcbiAgICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTI4MzAwNTgvaWU4LWlucHV0LXR5cGUtZmlsZS1nZXQtZmlsZXNcbiAgICAgIHZhciBmaWxlID0gX3RoaXMuZmlsZSA9IHtcbiAgICAgICAgdWlkOiBnZXRVaWQoKSxcbiAgICAgICAgbmFtZTogdGFyZ2V0LnZhbHVlXG4gICAgICB9O1xuICAgICAgX3RoaXMuc3RhcnRVcGxvYWQoKTtcbiAgICAgIHZhciBfdGhpczMgPSBfdGhpcyxcbiAgICAgICAgICBwcm9wcyA9IF90aGlzMy5wcm9wcztcblxuICAgICAgaWYgKCFwcm9wcy5iZWZvcmVVcGxvYWQpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnBvc3QoZmlsZSk7XG4gICAgICB9XG4gICAgICB2YXIgYmVmb3JlID0gcHJvcHMuYmVmb3JlVXBsb2FkKGZpbGUpO1xuICAgICAgaWYgKGJlZm9yZSAmJiBiZWZvcmUudGhlbikge1xuICAgICAgICBiZWZvcmUudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMucG9zdChmaWxlKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzLmVuZFVwbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoYmVmb3JlICE9PSBmYWxzZSkge1xuICAgICAgICBfdGhpcy5wb3N0KGZpbGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMuZW5kVXBsb2FkKCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuc2F2ZUlmcmFtZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBfdGhpcy5pZnJhbWUgPSBub2RlO1xuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKElmcmFtZVVwbG9hZGVyLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLnVwZGF0ZUlmcmFtZVdIKCk7XG4gICAgICB0aGlzLmluaXRJZnJhbWUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICB0aGlzLnVwZGF0ZUlmcmFtZVdIKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0SWZyYW1lTm9kZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldElmcmFtZU5vZGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pZnJhbWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0SWZyYW1lRG9jdW1lbnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJZnJhbWVEb2N1bWVudCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldElmcmFtZU5vZGUoKS5jb250ZW50RG9jdW1lbnQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Rm9ybU5vZGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGb3JtTm9kZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldElmcmFtZURvY3VtZW50KCkuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRGb3JtSW5wdXROb2RlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Rm9ybUlucHV0Tm9kZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldElmcmFtZURvY3VtZW50KCkuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0Jyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Rm9ybURhdGFOb2RlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Rm9ybURhdGFOb2RlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0SWZyYW1lRG9jdW1lbnQoKS5nZXRFbGVtZW50QnlJZCgnZGF0YScpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEZpbGVGb3JNdWx0aXBsZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEZpbGVGb3JNdWx0aXBsZShmaWxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5tdWx0aXBsZSA/IFtmaWxlXSA6IGZpbGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0SWZyYW1lSFRNTCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldElmcmFtZUhUTUwoZG9tYWluKSB7XG4gICAgICB2YXIgZG9tYWluU2NyaXB0ID0gJyc7XG4gICAgICB2YXIgZG9tYWluSW5wdXQgPSAnJztcbiAgICAgIGlmIChkb21haW4pIHtcbiAgICAgICAgdmFyIHNjcmlwdCA9ICdzY3JpcHQnO1xuICAgICAgICBkb21haW5TY3JpcHQgPSAnPCcgKyBzY3JpcHQgKyAnPmRvY3VtZW50LmRvbWFpbj1cIicgKyBkb21haW4gKyAnXCI7PC8nICsgc2NyaXB0ICsgJz4nO1xuICAgICAgICBkb21haW5JbnB1dCA9ICc8aW5wdXQgbmFtZT1cIl9kb2N1bWVudERvbWFpblwiIHZhbHVlPVwiJyArIGRvbWFpbiArICdcIiAvPic7XG4gICAgICB9XG4gICAgICByZXR1cm4gJ1xcbiAgICA8IURPQ1RZUEUgaHRtbD5cXG4gICAgPGh0bWw+XFxuICAgIDxoZWFkPlxcbiAgICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxcbiAgICA8c3R5bGU+XFxuICAgIGJvZHksaHRtbCB7cGFkZGluZzowO21hcmdpbjowO2JvcmRlcjowO292ZXJmbG93OmhpZGRlbjt9XFxuICAgIDwvc3R5bGU+XFxuICAgICcgKyBkb21haW5TY3JpcHQgKyAnXFxuICAgIDwvaGVhZD5cXG4gICAgPGJvZHk+XFxuICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIlxcbiAgICBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXFxuICAgIGFjdGlvbj1cIicgKyB0aGlzLnByb3BzLmFjdGlvbiArICdcIiBpZD1cImZvcm1cIlxcbiAgICBzdHlsZT1cImRpc3BsYXk6YmxvY2s7aGVpZ2h0Ojk5OTlweDtwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW47XCI+XFxuICAgIDxpbnB1dCBpZD1cImlucHV0XCIgdHlwZT1cImZpbGVcIlxcbiAgICAgbmFtZT1cIicgKyB0aGlzLnByb3BzLm5hbWUgKyAnXCJcXG4gICAgIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtoZWlnaHQ6OTk5OXB4O2ZvbnQtc2l6ZTo5OTk5cHg7Y3Vyc29yOnBvaW50ZXI7XCIvPlxcbiAgICAnICsgZG9tYWluSW5wdXQgKyAnXFxuICAgIDxzcGFuIGlkPVwiZGF0YVwiPjwvc3Bhbj5cXG4gICAgPC9mb3JtPlxcbiAgICA8L2JvZHk+XFxuICAgIDwvaHRtbD5cXG4gICAgJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpbml0SWZyYW1lU3JjJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdElmcmFtZVNyYygpIHtcbiAgICAgIGlmICh0aGlzLmRvbWFpbikge1xuICAgICAgICB0aGlzLmdldElmcmFtZU5vZGUoKS5zcmMgPSAnamF2YXNjcmlwdDp2b2lkKChmdW5jdGlvbigpe1xcbiAgICAgICAgdmFyIGQgPSBkb2N1bWVudDtcXG4gICAgICAgIGQub3BlbigpO1xcbiAgICAgICAgZC5kb21haW49XFwnJyArIHRoaXMuZG9tYWluICsgJ1xcJztcXG4gICAgICAgIGQud3JpdGUoXFwnXFwnKTtcXG4gICAgICAgIGQuY2xvc2UoKTtcXG4gICAgICB9KSgpKSc7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaW5pdElmcmFtZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluaXRJZnJhbWUoKSB7XG4gICAgICB2YXIgaWZyYW1lTm9kZSA9IHRoaXMuZ2V0SWZyYW1lTm9kZSgpO1xuICAgICAgdmFyIHdpbiA9IGlmcmFtZU5vZGUuY29udGVudFdpbmRvdztcbiAgICAgIHZhciBkb2MgPSB2b2lkIDA7XG4gICAgICB0aGlzLmRvbWFpbiA9IHRoaXMuZG9tYWluIHx8ICcnO1xuICAgICAgdGhpcy5pbml0SWZyYW1lU3JjKCk7XG4gICAgICB0cnkge1xuICAgICAgICBkb2MgPSB3aW4uZG9jdW1lbnQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRoaXMuZG9tYWluID0gZG9jdW1lbnQuZG9tYWluO1xuICAgICAgICB0aGlzLmluaXRJZnJhbWVTcmMoKTtcbiAgICAgICAgd2luID0gaWZyYW1lTm9kZS5jb250ZW50V2luZG93O1xuICAgICAgICBkb2MgPSB3aW4uZG9jdW1lbnQ7XG4gICAgICB9XG4gICAgICBkb2Mub3BlbigndGV4dC9odG1sJywgJ3JlcGxhY2UnKTtcbiAgICAgIGRvYy53cml0ZSh0aGlzLmdldElmcmFtZUhUTUwodGhpcy5kb21haW4pKTtcbiAgICAgIGRvYy5jbG9zZSgpO1xuICAgICAgdGhpcy5nZXRGb3JtSW5wdXROb2RlKCkub25jaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2VuZFVwbG9hZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVuZFVwbG9hZCgpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLnVwbG9hZGluZykge1xuICAgICAgICB0aGlzLmZpbGUgPSB7fTtcbiAgICAgICAgLy8gaGFjayBhdm9pZCBiYXRjaFxuICAgICAgICB0aGlzLnN0YXRlLnVwbG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB1cGxvYWRpbmc6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmluaXRJZnJhbWUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzdGFydFVwbG9hZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXJ0VXBsb2FkKCkge1xuICAgICAgaWYgKCF0aGlzLnN0YXRlLnVwbG9hZGluZykge1xuICAgICAgICB0aGlzLnN0YXRlLnVwbG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHVwbG9hZGluZzogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1cGRhdGVJZnJhbWVXSCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZUlmcmFtZVdIKCkge1xuICAgICAgdmFyIHJvb3ROb2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG4gICAgICB2YXIgaWZyYW1lTm9kZSA9IHRoaXMuZ2V0SWZyYW1lTm9kZSgpO1xuICAgICAgaWZyYW1lTm9kZS5zdHlsZS5oZWlnaHQgPSByb290Tm9kZS5vZmZzZXRIZWlnaHQgKyAncHgnO1xuICAgICAgaWZyYW1lTm9kZS5zdHlsZS53aWR0aCA9IHJvb3ROb2RlLm9mZnNldFdpZHRoICsgJ3B4JztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdhYm9ydCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFib3J0KGZpbGUpIHtcbiAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgIHZhciB1aWQgPSBmaWxlO1xuICAgICAgICBpZiAoZmlsZSAmJiBmaWxlLnVpZCkge1xuICAgICAgICAgIHVpZCA9IGZpbGUudWlkO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1aWQgPT09IHRoaXMuZmlsZS51aWQpIHtcbiAgICAgICAgICB0aGlzLmVuZFVwbG9hZCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVuZFVwbG9hZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Bvc3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwb3N0KGZpbGUpIHtcbiAgICAgIHZhciBmb3JtTm9kZSA9IHRoaXMuZ2V0Rm9ybU5vZGUoKTtcbiAgICAgIHZhciBkYXRhU3BhbiA9IHRoaXMuZ2V0Rm9ybURhdGFOb2RlKCk7XG4gICAgICB2YXIgZGF0YSA9IHRoaXMucHJvcHMuZGF0YTtcbiAgICAgIHZhciBvblN0YXJ0ID0gdGhpcy5wcm9wcy5vblN0YXJ0O1xuXG4gICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZGF0YSA9IGRhdGEoZmlsZSk7XG4gICAgICB9XG4gICAgICB2YXIgaW5wdXRzID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywga2V5KTtcbiAgICAgICAgICBpbnB1dC52YWx1ZSA9IGRhdGFba2V5XTtcbiAgICAgICAgICBpbnB1dHMuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkYXRhU3Bhbi5hcHBlbmRDaGlsZChpbnB1dHMpO1xuICAgICAgZm9ybU5vZGUuc3VibWl0KCk7XG4gICAgICBkYXRhU3Bhbi5pbm5lckhUTUwgPSAnJztcbiAgICAgIG9uU3RhcnQoZmlsZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBUYWcgPSBfcHJvcHMuY29tcG9uZW50LFxuICAgICAgICAgIGRpc2FibGVkID0gX3Byb3BzLmRpc2FibGVkLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgcHJlZml4Q2xzID0gX3Byb3BzLnByZWZpeENscyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZTtcblxuICAgICAgdmFyIGlmcmFtZVN0eWxlID0gX2V4dGVuZHMoe30sIElGUkFNRV9TVFlMRSwge1xuICAgICAgICBkaXNwbGF5OiB0aGlzLnN0YXRlLnVwbG9hZGluZyB8fCBkaXNhYmxlZCA/ICdub25lJyA6ICcnXG4gICAgICB9KTtcbiAgICAgIHZhciBjbHMgPSBjbGFzc05hbWVzKChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscywgdHJ1ZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy1kaXNhYmxlZCcsIGRpc2FibGVkKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBjbGFzc05hbWUsIGNsYXNzTmFtZSksIF9jbGFzc05hbWVzKSk7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgVGFnLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbHMsXG4gICAgICAgICAgc3R5bGU6IF9leHRlbmRzKHsgcG9zaXRpb246ICdyZWxhdGl2ZScsIHpJbmRleDogMCB9LCBzdHlsZSlcbiAgICAgICAgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnaWZyYW1lJywge1xuICAgICAgICAgIHJlZjogdGhpcy5zYXZlSWZyYW1lLFxuICAgICAgICAgIG9uTG9hZDogdGhpcy5vbkxvYWQsXG4gICAgICAgICAgc3R5bGU6IGlmcmFtZVN0eWxlXG4gICAgICAgIH0pLFxuICAgICAgICBjaGlsZHJlblxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSWZyYW1lVXBsb2FkZXI7XG59KENvbXBvbmVudCk7XG5cbklmcmFtZVVwbG9hZGVyLnByb3BUeXBlcyA9IHtcbiAgY29tcG9uZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBwcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYWNjZXB0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvblN0YXJ0OiBQcm9wVHlwZXMuZnVuYyxcbiAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgZGF0YTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgYWN0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IElmcmFtZVVwbG9hZGVyOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQWpheFVwbG9hZCBmcm9tICcuL0FqYXhVcGxvYWRlcic7XG5pbXBvcnQgSWZyYW1lVXBsb2FkIGZyb20gJy4vSWZyYW1lVXBsb2FkZXInO1xuXG5mdW5jdGlvbiBlbXB0eSgpIHt9XG5cbnZhciBVcGxvYWQgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVXBsb2FkLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBVcGxvYWQoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFVwbG9hZCk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gVXBsb2FkLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoVXBsb2FkKSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBDb21wb25lbnQ6IG51bGxcbiAgICB9LCBfdGhpcy5zYXZlVXBsb2FkZXIgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgX3RoaXMudXBsb2FkZXIgPSBub2RlO1xuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFVwbG9hZCwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuc3VwcG9ydFNlcnZlclJlbmRlcikge1xuICAgICAgICAvKiBlc2xpbnQgcmVhY3Qvbm8tZGlkLW1vdW50LXNldC1zdGF0ZTowICovXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIENvbXBvbmVudDogdGhpcy5nZXRDb21wb25lbnQoKVxuICAgICAgICB9LCB0aGlzLnByb3BzLm9uUmVhZHkpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldENvbXBvbmVudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENvbXBvbmVudCgpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgRmlsZSAhPT0gJ3VuZGVmaW5lZCcgPyBBamF4VXBsb2FkIDogSWZyYW1lVXBsb2FkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Fib3J0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWJvcnQoZmlsZSkge1xuICAgICAgdGhpcy51cGxvYWRlci5hYm9ydChmaWxlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5zdXBwb3J0U2VydmVyUmVuZGVyKSB7XG4gICAgICAgIHZhciBfQ29tcG9uZW50VXBsb2FkZXIgPSB0aGlzLnN0YXRlLkNvbXBvbmVudDtcbiAgICAgICAgaWYgKF9Db21wb25lbnRVcGxvYWRlcikge1xuICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9Db21wb25lbnRVcGxvYWRlciwgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgcmVmOiB0aGlzLnNhdmVVcGxvYWRlciB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICB2YXIgQ29tcG9uZW50VXBsb2FkZXIgPSB0aGlzLmdldENvbXBvbmVudCgpO1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50VXBsb2FkZXIsIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IHJlZjogdGhpcy5zYXZlVXBsb2FkZXIgfSkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBVcGxvYWQ7XG59KENvbXBvbmVudCk7XG5cblVwbG9hZC5wcm9wVHlwZXMgPSB7XG4gIGNvbXBvbmVudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgYWN0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBtdWx0aXBhcnQ6IFByb3BUeXBlcy5ib29sLFxuICBvbkVycm9yOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TdWNjZXNzOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Qcm9ncmVzczogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU3RhcnQ6IFByb3BUeXBlcy5mdW5jLFxuICBkYXRhOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuY10pLFxuICBoZWFkZXJzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBhY2NlcHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG11bHRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBiZWZvcmVVcGxvYWQ6IFByb3BUeXBlcy5mdW5jLFxuICBjdXN0b21SZXF1ZXN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25SZWFkeTogUHJvcFR5cGVzLmZ1bmMsXG4gIHdpdGhDcmVkZW50aWFsczogUHJvcFR5cGVzLmJvb2wsXG4gIHN1cHBvcnRTZXJ2ZXJSZW5kZXI6IFByb3BUeXBlcy5ib29sXG59O1xuVXBsb2FkLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29tcG9uZW50OiAnc3BhbicsXG4gIHByZWZpeENsczogJ3JjLXVwbG9hZCcsXG4gIGRhdGE6IHt9LFxuICBoZWFkZXJzOiB7fSxcbiAgbmFtZTogJ2ZpbGUnLFxuICBtdWx0aXBhcnQ6IGZhbHNlLFxuICBvblJlYWR5OiBlbXB0eSxcbiAgb25TdGFydDogZW1wdHksXG4gIG9uRXJyb3I6IGVtcHR5LFxuICBvblN1Y2Nlc3M6IGVtcHR5LFxuICBzdXBwb3J0U2VydmVyUmVuZGVyOiBmYWxzZSxcbiAgbXVsdGlwbGU6IGZhbHNlLFxuICBiZWZvcmVVcGxvYWQ6IG51bGwsXG4gIGN1c3RvbVJlcXVlc3Q6IG51bGwsXG4gIHdpdGhDcmVkZW50aWFsczogZmFsc2Vcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgVXBsb2FkOyIsImZ1bmN0aW9uIGVuZHNXaXRoKHN0ciwgc3VmZml4KSB7XG4gIHJldHVybiBzdHIuaW5kZXhPZihzdWZmaXgsIHN0ci5sZW5ndGggLSBzdWZmaXgubGVuZ3RoKSAhPT0gLTE7XG59XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoZmlsZSwgYWNjZXB0ZWRGaWxlcykge1xuICBpZiAoZmlsZSAmJiBhY2NlcHRlZEZpbGVzKSB7XG4gICAgdmFyIGFjY2VwdGVkRmlsZXNBcnJheSA9IEFycmF5LmlzQXJyYXkoYWNjZXB0ZWRGaWxlcykgPyBhY2NlcHRlZEZpbGVzIDogYWNjZXB0ZWRGaWxlcy5zcGxpdCgnLCcpO1xuICAgIHZhciBmaWxlTmFtZSA9IGZpbGUubmFtZSB8fCAnJztcbiAgICB2YXIgbWltZVR5cGUgPSBmaWxlLnR5cGUgfHwgJyc7XG4gICAgdmFyIGJhc2VNaW1lVHlwZSA9IG1pbWVUeXBlLnJlcGxhY2UoL1xcLy4qJC8sICcnKTtcblxuICAgIHJldHVybiBhY2NlcHRlZEZpbGVzQXJyYXkuc29tZShmdW5jdGlvbiAodHlwZSkge1xuICAgICAgdmFyIHZhbGlkVHlwZSA9IHR5cGUudHJpbSgpO1xuICAgICAgaWYgKHZhbGlkVHlwZS5jaGFyQXQoMCkgPT09ICcuJykge1xuICAgICAgICByZXR1cm4gZW5kc1dpdGgoZmlsZU5hbWUudG9Mb3dlckNhc2UoKSwgdmFsaWRUeXBlLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfSBlbHNlIGlmICgvXFwvXFwqJC8udGVzdCh2YWxpZFR5cGUpKSB7XG4gICAgICAgIC8vIFRoaXMgaXMgc29tZXRoaW5nIGxpa2UgYSBpbWFnZS8qIG1pbWUgdHlwZVxuICAgICAgICByZXR1cm4gYmFzZU1pbWVUeXBlID09PSB2YWxpZFR5cGUucmVwbGFjZSgvXFwvLiokLywgJycpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1pbWVUeXBlID09PSB2YWxpZFR5cGU7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59KTsiLCIvLyBleHBvcnQgdGhpcyBwYWNrYWdlJ3MgYXBpXG5pbXBvcnQgVXBsb2FkIGZyb20gJy4vVXBsb2FkJztcblxuZXhwb3J0IGRlZmF1bHQgVXBsb2FkOyIsImZ1bmN0aW9uIGdldEVycm9yKG9wdGlvbiwgeGhyKSB7XG4gIHZhciBtc2cgPSAnY2Fubm90IHBvc3QgJyArIG9wdGlvbi5hY3Rpb24gKyAnICcgKyB4aHIuc3RhdHVzICsgJ1xcJyc7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IobXNnKTtcbiAgZXJyLnN0YXR1cyA9IHhoci5zdGF0dXM7XG4gIGVyci5tZXRob2QgPSAncG9zdCc7XG4gIGVyci51cmwgPSBvcHRpb24uYWN0aW9uO1xuICByZXR1cm4gZXJyO1xufVxuXG5mdW5jdGlvbiBnZXRCb2R5KHhocikge1xuICB2YXIgdGV4dCA9IHhoci5yZXNwb25zZVRleHQgfHwgeGhyLnJlc3BvbnNlO1xuICBpZiAoIXRleHQpIHtcbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UodGV4dCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdGV4dDtcbiAgfVxufVxuXG4vLyBvcHRpb24ge1xuLy8gIG9uUHJvZ3Jlc3M6IChldmVudDogeyBwZXJjZW50OiBudW1iZXIgfSk6IHZvaWQsXG4vLyAgb25FcnJvcjogKGV2ZW50OiBFcnJvciwgYm9keT86IE9iamVjdCk6IHZvaWQsXG4vLyAgb25TdWNjZXNzOiAoYm9keTogT2JqZWN0KTogdm9pZCxcbi8vICBkYXRhOiBPYmplY3QsXG4vLyAgZmlsZW5hbWU6IFN0cmluZyxcbi8vICBmaWxlOiBGaWxlLFxuLy8gIHdpdGhDcmVkZW50aWFsczogQm9vbGVhbixcbi8vICBhY3Rpb246IFN0cmluZyxcbi8vICBoZWFkZXJzOiBPYmplY3QsXG4vLyB9XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGxvYWQob3B0aW9uKSB7XG4gIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICBpZiAob3B0aW9uLm9uUHJvZ3Jlc3MgJiYgeGhyLnVwbG9hZCkge1xuICAgIHhoci51cGxvYWQub25wcm9ncmVzcyA9IGZ1bmN0aW9uIHByb2dyZXNzKGUpIHtcbiAgICAgIGlmIChlLnRvdGFsID4gMCkge1xuICAgICAgICBlLnBlcmNlbnQgPSBlLmxvYWRlZCAvIGUudG90YWwgKiAxMDA7XG4gICAgICB9XG4gICAgICBvcHRpb24ub25Qcm9ncmVzcyhlKTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgaWYgKG9wdGlvbi5kYXRhKSB7XG4gICAgT2JqZWN0LmtleXMob3B0aW9uLmRhdGEpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoa2V5LCBvcHRpb24uZGF0YVtrZXldKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZvcm1EYXRhLmFwcGVuZChvcHRpb24uZmlsZW5hbWUsIG9wdGlvbi5maWxlKTtcblxuICB4aHIub25lcnJvciA9IGZ1bmN0aW9uIGVycm9yKGUpIHtcbiAgICBvcHRpb24ub25FcnJvcihlKTtcbiAgfTtcblxuICB4aHIub25sb2FkID0gZnVuY3Rpb24gb25sb2FkKCkge1xuICAgIC8vIGFsbG93IHN1Y2Nlc3Mgd2hlbiAyeHggc3RhdHVzXG4gICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvdXBsb2FkL2lzc3Vlcy8zNFxuICAgIGlmICh4aHIuc3RhdHVzIDwgMjAwIHx8IHhoci5zdGF0dXMgPj0gMzAwKSB7XG4gICAgICByZXR1cm4gb3B0aW9uLm9uRXJyb3IoZ2V0RXJyb3Iob3B0aW9uLCB4aHIpLCBnZXRCb2R5KHhocikpO1xuICAgIH1cblxuICAgIG9wdGlvbi5vblN1Y2Nlc3MoZ2V0Qm9keSh4aHIpLCB4aHIpO1xuICB9O1xuXG4gIHhoci5vcGVuKCdwb3N0Jywgb3B0aW9uLmFjdGlvbiwgdHJ1ZSk7XG5cbiAgLy8gSGFzIHRvIGJlIGFmdGVyIGAub3BlbigpYC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lbnlvL2Ryb3B6b25lL2lzc3Vlcy8xNzlcbiAgaWYgKG9wdGlvbi53aXRoQ3JlZGVudGlhbHMgJiYgJ3dpdGhDcmVkZW50aWFscycgaW4geGhyKSB7XG4gICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gIH1cblxuICB2YXIgaGVhZGVycyA9IG9wdGlvbi5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIHdoZW4gc2V0IGhlYWRlcnNbJ1gtUmVxdWVzdGVkLVdpdGgnXSA9IG51bGwgLCBjYW4gY2xvc2UgZGVmYXVsdCBYSFIgaGVhZGVyXG4gIC8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L3VwbG9hZC9pc3N1ZXMvMzNcbiAgaWYgKGhlYWRlcnNbJ1gtUmVxdWVzdGVkLVdpdGgnXSAhPT0gbnVsbCkge1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdYLVJlcXVlc3RlZC1XaXRoJywgJ1hNTEh0dHBSZXF1ZXN0Jyk7XG4gIH1cblxuICBmb3IgKHZhciBoIGluIGhlYWRlcnMpIHtcbiAgICBpZiAoaGVhZGVycy5oYXNPd25Qcm9wZXJ0eShoKSAmJiBoZWFkZXJzW2hdICE9PSBudWxsKSB7XG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihoLCBoZWFkZXJzW2hdKTtcbiAgICB9XG4gIH1cbiAgeGhyLnNlbmQoZm9ybURhdGEpO1xuXG4gIHJldHVybiB7XG4gICAgYWJvcnQ6IGZ1bmN0aW9uIGFib3J0KCkge1xuICAgICAgeGhyLmFib3J0KCk7XG4gICAgfVxuICB9O1xufSIsInZhciBub3cgPSArbmV3IERhdGUoKTtcbnZhciBpbmRleCA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVpZCgpIHtcbiAgcmV0dXJuIFwicmMtdXBsb2FkLVwiICsgbm93ICsgXCItXCIgKyArK2luZGV4O1xufSIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuaW5nID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGFyZ3MpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiA+IDIgPyBsZW4gLSAyIDogMCk7XG4gICAgZm9yICh2YXIga2V5ID0gMjsga2V5IDwgbGVuOyBrZXkrKykge1xuICAgICAgYXJnc1trZXkgLSAyXSA9IGFyZ3VtZW50c1trZXldO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgK1xuICAgICAgICAnbWVzc2FnZSBhcmd1bWVudCdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5sZW5ndGggPCAxMCB8fCAoL15bc1xcV10qJC8pLnRlc3QoZm9ybWF0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVGhlIHdhcm5pbmcgZm9ybWF0IHNob3VsZCBiZSBhYmxlIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgJyArXG4gICAgICAgICd3YXJuaW5nLiBQbGVhc2UsIHVzZSBhIG1vcmUgZGVzY3JpcHRpdmUgZm9ybWF0IHRoYW46ICcgKyBmb3JtYXRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICtcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgICB9KTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgfSBjYXRjaCh4KSB7fVxuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIGxhYmVsQ29sOiB7XHJcbiAgICBzcGFuOiA0LFxyXG4gICAgZ3V0dGVyOiAxNlxyXG4gIH0sXHJcbiAgd3JhcHBlckNvbDoge1xyXG4gICAgc3BhbjogMTgsXHJcbiAgICBndXR0ZXI6IDE2XHJcbiAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIHdpZHRoOiA4MDAsXHJcbiAgbWFza0Nsb3NhYmxlOiBmYWxzZVxyXG59IiwiaW1wb3J0IGhhbmRsZVVybEVuY29kZSBmcm9tICcuL2hhbmRsZS11cmxlbmNvZGUnO1xyXG5sZXQgZXhwb3J0RmlsZSA9ICh7dXJsID0gJycsIGRhdGEgPSB7fX0pID0+IHtcclxuICAgIHdpbmRvdy5vcGVuKHVybCArICc/JyArIGhhbmRsZVVybEVuY29kZShkYXRhKSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGV4cG9ydEZpbGU7IiwibGV0IGhhbmRsZUZvcm1EYXRhID0gKGRhdGEpID0+IHtcclxuICAgIGxldCByZXQgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIE9iamVjdC5rZXlzKGRhdGEpLm1hcChrID0+IHtcclxuICAgICAgICBpZihBcnJheS5pc0FycmF5KGRhdGFba10pKXtcclxuICAgICAgICAgICAgZGF0YVtrXS5mb3JFYWNoKGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0LmFwcGVuZChrLGQpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXQuYXBwZW5kKGssZGF0YVtrXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmV0O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVGb3JtRGF0YTsiLCJsZXQgaGFuZGxlSnNvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUpzb247IiwibGV0IGhhbmRsZVVybEVuY29kZSA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSkubWFwKGtleSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGtleSArICc9JyArIGRhdGFba2V5XTtcclxuICAgIH0pLmpvaW4oJyYnKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlVXJsRW5jb2RlOyIsImV4cG9ydCBkZWZhdWx0IChlcnJvcnMpID0+IHtcclxuICByZXR1cm4gT2JqZWN0LmtleXMoZXJyb3JzKS5zb21lKGtleSA9PiBlcnJvcnNba2V5XSk7XHJcbn0iLCJpbXBvcnQgaGFuZGxlSnNvbiBmcm9tICcuL2hhbmRsZS1qc29uJztcclxuaW1wb3J0IGhhbmRsZUZvcm1EYXRhIGZyb20gJy4vaGFuZGxlLWZvcm1kYXRhJztcclxuXHJcbmZ1bmN0aW9uIHJlcXVlc3QoeyB1cmwsIG1ldGhvZCA9ICdQT1NUJywgcG9zdFR5cGUgPSAnanNvbicgLGRhdGEgPSB7fSwgc3VjY2VzcyA9ICgpID0+IHt9LCBmYWlsID0gKCkgPT4ge30sIGNvbXBsZXRlID0gKCkgPT4ge319KSB7XHJcbiAgICBpZighdXJsKXtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3VybOWPguaVsOS4jeWPr+e8uuecgScpO1xyXG4gICAgfVxyXG4gICAgbGV0IHhtbCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeG1sLm9wZW4obWV0aG9kLCB1cmwpO1xyXG4gICAgbGV0IHBvc3REYXRhIDtcclxuICAgIHN3aXRjaCAocG9zdFR5cGUpe1xyXG4gICAgICAgIGNhc2UgJ2pzb24nOlxyXG4gICAgICAgICAgICB4bWwuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICAgICAgICAgICAgcG9zdERhdGEgPSBoYW5kbGVKc29uKGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdmb3JtZGF0YSc6XHJcbiAgICAgICAgICAgIC8vIHhtbC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCBcImFwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbFwiKTtcclxuICAgICAgICAgICAgcG9zdERhdGEgPSBoYW5kbGVGb3JtRGF0YShkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgeG1sLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICAgICAgICAgIHBvc3REYXRhID0gaGFuZGxlSnNvbihkYXRhKTtcclxuICAgIH1cclxuICAgIHhtbC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoeG1sLnJlYWR5U3RhdGUgPT09IDQpe1xyXG4gICAgICAgICAgICBpZih4bWwuc3RhdHVzID09PSAyMDApe1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHhtbC5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvZGUgPSBkYXRhLmNvZGU7XHJcbiAgICAgICAgICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY29kZSA9PT0gdW5kZWZpbmVkKSB0aHJvdyBuZXcgRXJyb3IoJ2NvZGUgaXMgbm90IGRlZmluZWQnKTtcclxuICAgICAgICAgICAgICAgIH1jYXRjaChlKXtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHBhcnNlSW50KGRhdGEuY29kZSkgPT09IDIwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGZhaWwoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ+ivt+axgumBh+WIsOS6humXrumimO+8jOivt+eojeWQjuWGjeWwneivlScpO1xyXG4gICAgICAgICAgICAgICAgZmFpbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbXBsZXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHhtbC5zZW5kKHBvc3REYXRhKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0O1xyXG4iLCJpbXBvcnQgY3JlYXRlSGlzdG9yeSBmcm9tICdoaXN0b3J5L2NyZWF0ZUhhc2hIaXN0b3J5JztcclxubGV0IGhpc3RvcnkgID0gY3JlYXRlSGlzdG9yeSgpO1xyXG5leHBvcnQgZGVmYXVsdCBoaXN0b3J5OyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi9iYXRjaF9wcm9jZXNzLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4vYmF0Y2hfcHJvY2Vzcy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi9iYXRjaF9wcm9jZXNzLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm0sIFNlbGVjdCwgQnV0dG9uLCBJbnB1dCwgVGFibGUgfSBmcm9tICdhbnRkJztcclxuY29uc3QgT3B0aW9uID0gU2VsZWN0Lk9wdGlvbjtcclxuaW1wb3J0IHsgb2JzZXJ2ZXIgfSBmcm9tICdtb2J4LXJlYWN0JztcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9iYXRjaF9wcm9jZXNzLmNzcyc7XHJcbmltcG9ydCBDcmVhdGVBIGZyb20gJy4uL2NyZWF0ZV9hL2NyZWF0ZV9hJztcclxuaW1wb3J0IEVkaXRBIGZyb20gJy4uL2VkaXRfYS9lZGl0X2EnO1xyXG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi8uLi9oZWxwZXJzL3JlcXVlc3QnO1xyXG5pbXBvcnQgaGlzdG9yeSBmcm9tICcuLi8uLi9oaXN0b3J5JztcclxuaW1wb3J0IGV4cG9ydEZpbGUgZnJvbSAnLi4vLi4vaGVscGVycy9leHBvcnQtZmlsZSc7XHJcbmNvbnN0IFNlYXJjaCA9IElucHV0LlNlYXJjaDtcclxuQG9ic2VydmVyXHJcbmNsYXNzIEJhdGNoUHJvY2VzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbHVtbnMgPSBbe1xyXG4gICAgICAgIHRpdGxlOiAn57yW5Y+3JyxcclxuICAgICAgICBkYXRhSW5kZXg6ICdpZCdcclxuICAgIH0sIHtcclxuICAgICAgICB0aXRsZTogJ+aViOeOhzEwMOe8luWPtycsXHJcbiAgICAgICAgZGF0YUluZGV4OiAnd2ZfaWQnXHJcbiAgICB9LCB7XHJcbiAgICAgICAgdGl0bGU6ICfmoIfpopgnLFxyXG4gICAgICAgIGRhdGFJbmRleDogJ3RpdGxlJ1xyXG4gICAgfSwge1xyXG4gICAgICAgIHRpdGxlOiAn5Yib5bu65Lq6JyxcclxuICAgICAgICBkYXRhSW5kZXg6ICdjcmVhdG9yJ1xyXG4gICAgfSwge1xyXG4gICAgICAgIHRpdGxlOiAn5Yib5bu65pe26Ze0JyxcclxuICAgICAgICBkYXRhSW5kZXg6ICdjcmVhdGVfdGltZSdcclxuICAgIH0sIHtcclxuICAgICAgICB0aXRsZTogJ+aTjeS9nCcsXHJcbiAgICAgICAgcmVuZGVyOiAodGV4dCwgcmVjb3JkKSA9PiAoXHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZS5vcGVyYXRlfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmVkaXRJdGVtKHJlY29yZCl9Pue8lui+kTwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGUub3BlcmF0ZX0gb25DbGljaz17KCkgPT4gdGhpcy5kZWxldGVJdGVtKHJlY29yZCl9PuWIoOmZpDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGUub3BlcmF0ZX0gb25DbGljaz17KCkgPT4gdGhpcy5nb1RvRGV0YWlsKHJlY29yZC5pZCxyZWNvcmQud2ZfaWQpfT7mn6XnnIvor6bmg4U8L2E+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApXHJcbiAgICB9XTtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGxldCB7IHZpc2libGUsIGxpc3QsIHNlbGVjdGVkSXRlbSwgZmlsZUFMaXN0IH0gPSBzdG9yZTtcclxuICAgICAgICBsZXQgZGF0YVNvdXJjZSA9IEFycmF5LmZyb20oZmlsZUFMaXN0KTtcclxuICAgICAgICBsZXQgeyB3Zl9pZHMsIHRpdGxlcywgY3JlYXRvcnMgfSA9IGxpc3Q7XHJcbiAgICAgICAgbGV0IHsgZ2V0RmllbGREZWNvcmF0b3IgfSA9IHRoaXMucHJvcHMuZm9ybTtcclxuICAgICAgICBsZXQgU2VsZWN0QmFyID0gKCkgPT4gKFxyXG4gICAgICAgICAgICA8Rm9ybSBsYXlvdXQ9J2lubGluZSc+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPSfmlYjnjocxMDDnvJblj7cnPntcclxuICAgICAgICAgICAgICAgICAgICBnZXRGaWVsZERlY29yYXRvcignd2ZfaWQnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZTogJzAnXHJcbiAgICAgICAgICAgICAgICAgICAgfSkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgY2xhc3NOYW1lPXtzdHlsZS5zZWxlY3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT0nMCc+5YWo6YOoPC9PcHRpb24+e3dmX2lkcy5tYXAoaWQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiBrZXk9e2lkfSB2YWx1ZT17aWR9PntpZH08L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9PC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfTwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD0n5qCH6aKYJz57XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0RmllbGREZWNvcmF0b3IoJ3RpdGxlJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWU6ICcwJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0IGNsYXNzTmFtZT17c3R5bGUuc2VsZWN0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9JzAnPuWFqOmDqDwvT3B0aW9uPnt0aXRsZXMubWFwKHQgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiBrZXk9e3R9IHZhbHVlPXt0fT57dH08L09wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9PC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfTwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD0n5Yib5bu65Lq6Jz57XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0RmllbGREZWNvcmF0b3IoJ2NyZWF0b3InLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZTogJzAnXHJcbiAgICAgICAgICAgICAgICAgICAgfSkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgY2xhc3NOYW1lPXtzdHlsZS5zZWxlY3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT0nMCc+5YWo6YOoPC9PcHRpb24+e2NyZWF0b3JzLm1hcChjID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24ga2V5PXtjfSB2YWx1ZT17Y30+e2N9PC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfTwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH08L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPSdwcmltYXJ5Jz7mn6Xor6I8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBjbGFzc05hbWU9e3N0eWxlLmZyfT5cclxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoIHBsYWNlaG9sZGVyPSfor7fovpPlhaXlhbbku5blhbPplK7lrZcnIGVudGVyQnV0dG9uLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnaW5pdC1oZWlnaHQnfT5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RCYXIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5hY3Rpb25fYmFyfT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9J3ByaW1hcnknIG9uQ2xpY2s9e3RoaXMuY3JlYXRlQX0+5Yib5bu65Lu75YqhPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmV4cG9ydEZpbGVBfT7lr7zlh7o8L0J1dHRvbj4qL31cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuZmV0Y2hGaWxlQUxpc3R9PnRlc3Q8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlIGNvbHVtbnM9e3RoaXMuY29sdW1uc30gZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX0gcm93S2V5PSdpZCcvPlxyXG4gICAgICAgICAgICAgICAgPENyZWF0ZUEgc2V0VmlzaWJsZT17dGhpcy5zZXRDcmVhdGVWaXNpYmxlfSB2aXNpYmxlPXt2aXNpYmxlfS8+XHJcbiAgICAgICAgICAgICAgICA8RWRpdEEgc2V0VmlzaWJsZT17dGhpcy5zZXRFZGl0VmlzaWJsZX0gdmlzaWJsZT17dmlzaWJsZX0gc2VsZWN0ZWRJdGVtPXtzZWxlY3RlZEl0ZW19Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICB0aGlzLmZldGNoRmlsZUFMaXN0KCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coMSk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVBID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0Q3JlYXRlVmlzaWJsZSh0cnVlKTtcclxuICAgIH07XHJcbiAgICBmZXRjaEZpbGVBTGlzdCA9ICgpID0+IHtcclxuICAgICAgICByZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiAnL2FwaS9nZXRfZmxvd19saXN0JyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAga2V5d29yZDogJydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogKHt0YWJsZX0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhYmxlKTtcclxuICAgICAgICAgICAgICAgIHN0b3JlLnNldEZpbGVBTGlzdCh0YWJsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuICAgIHNldENyZWF0ZVZpc2libGUgPSAoYm9vbCkgPT4ge1xyXG4gICAgICAgIHN0b3JlLnNldFZpc2libGUoe1xyXG4gICAgICAgICAgICBjcmVhdGU6IGJvb2xcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBzZXRFZGl0VmlzaWJsZSA9IChib29sKSA9PiB7XHJcbiAgICAgICAgc3RvcmUuc2V0VmlzaWJsZSh7XHJcbiAgICAgICAgICAgIGVkaXQ6IGJvb2xcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBlZGl0SXRlbSA9IChpdGVtKSA9PiB7XHJcbiAgICAgICAgc3RvcmUuc2V0U2VsZWN0ZWRJdGVtKE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHtcclxuICAgICAgICAgICAgZWRpdFR5cGU6ICdlZGl0J1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBzdG9yZS5zZXRWaXNpYmxlKHtcclxuICAgICAgICAgICAgZWRpdDogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgZGVsZXRlSXRlbSA9IChpdGVtKSA9PiB7XHJcbiAgICAgICAgc3RvcmUuc2V0U2VsZWN0ZWRJdGVtKE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHtcclxuICAgICAgICAgICAgZWRpdFR5cGU6ICdkZWxldGUnXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHN0b3JlLnNldFZpc2libGUoe1xyXG4gICAgICAgICAgICBlZGl0OiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcbiAgICBnb1RvRGV0YWlsID0gKGlkLHdmX2lkKSA9PiB7XHJcbiAgICAgICAgaGlzdG9yeS5wdXNoKGAvcHJvY2Vzcy8ke2lkfS8ke3dmX2lkfWApXHJcbiAgICB9O1xyXG4gICAgLy8gZXhwb3J0RmlsZUEgPSAoKSA9PiB7XHJcbiAgICAvLyAgICAgbGV0IHZhbHVlcyA9IHRoaXMucHJvcHMuZm9ybS5nZXRGaWVsZHNWYWx1ZSgpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7XHJcbiAgICAvLyAgICAgLy8gZXhwb3J0RmlsZSh7XHJcbiAgICAvLyAgICAgLy8gICB1cmw6ICcvYXBpL2dldF9maWxlJyxcclxuICAgIC8vICAgICAvLyAgIGRhdGE6IGRhdGFcclxuICAgIC8vICAgICAvLyB9KVxyXG4gICAgLy8gfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZvcm0uY3JlYXRlKCkoQmF0Y2hQcm9jZXNzKTsiLCJpbXBvcnQgeyBvYnNlcnZhYmxlLCBhY3Rpb24sIGNvbXB1dGVkIH0gZnJvbSAnbW9ieCc7XHJcbmNsYXNzIFN0b3JlIHtcclxuICBAb2JzZXJ2YWJsZSB2aXNpYmxlID0ge1xyXG4gICAgY3JlYXRlOiBmYWxzZSxcclxuICAgIGVkaXQ6IGZhbHNlXHJcbiAgfTtcclxuICBAYWN0aW9uXHJcbiAgc2V0VmlzaWJsZSh0eXBlKXtcclxuICAgIHRoaXMudmlzaWJsZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMudmlzaWJsZSwgdHlwZSk7XHJcbiAgfVxyXG4gIEBvYnNlcnZhYmxlIGZpbGVBTGlzdCA9IFtdO1xyXG4gIEBhY3Rpb25cclxuICBzZXRGaWxlQUxpc3QobGlzdCl7XHJcbiAgICB0aGlzLmZpbGVBTGlzdCA9IGxpc3Q7XHJcbiAgfVxyXG4gIEBjb21wdXRlZFxyXG4gIGdldCBsaXN0KCl7XHJcbiAgICBsZXQgYWxsV2ZfaWRzID0gW10sXHJcbiAgICAgIGFsbFRpdGxlcyA9IFtdLFxyXG4gICAgICBhbGxDcmVhdG9ycyA9IFtdO1xyXG4gICAgdGhpcy5maWxlQUxpc3QubWFwKGZpbGUgPT4ge1xyXG4gICAgICBhbGxXZl9pZHMucHVzaChmaWxlLndmX2lkKTtcclxuICAgICAgYWxsVGl0bGVzLnB1c2goZmlsZS50aXRsZSk7XHJcbiAgICAgIGFsbENyZWF0b3JzLnB1c2goZmlsZS5jcmVhdG9yKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgd2ZfaWRzOiBBcnJheS5mcm9tKG5ldyBTZXQoYWxsV2ZfaWRzKSksXHJcbiAgICAgIHRpdGxlczogQXJyYXkuZnJvbShuZXcgU2V0KGFsbFRpdGxlcykpLFxyXG4gICAgICBjcmVhdG9yczogQXJyYXkuZnJvbShuZXcgU2V0KGFsbENyZWF0b3JzKSlcclxuICAgIH1cclxuICB9XHJcbiAgQG9ic2VydmFibGUgc2VsZWN0ZWRJdGVtID0ge1xyXG4gICAgLy9lZGl0VHlwZTogJ2VkaXQnXHJcbiAgfTtcclxuICBAYWN0aW9uXHJcbiAgc2V0U2VsZWN0ZWRJdGVtKGl0ZW0pe1xyXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xyXG4gIH1cclxufVxyXG5cclxubGV0IHN0b3JlID0gbmV3IFN0b3JlKCk7XHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtGb3JtLCBNb2RhbCwgSW5wdXQsIFVwbG9hZCwgQnV0dG9uLCBJY29ufSBmcm9tICdhbnRkJztcclxuaW1wb3J0IGNvbW1vbkZvcm1Qcm9wcyBmcm9tICcuLi8uLi9jb25maWcvY29tbW9uLWZvcm0nO1xyXG5pbXBvcnQgY29tbW9uTW9kYWxQcm9wcyBmcm9tICcuLi8uLi9jb25maWcvY29tbW9uLW1vZGFsJztcclxuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vLi4vaGVscGVycy9yZXF1ZXN0JztcclxuaW1wb3J0IGhhc0Vycm9ycyBmcm9tICcuLi8uLi9oZWxwZXJzL2hhcy1lcnJvcnMnO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL2JhdGNoX3Byb2Nlc3Mvc3RvcmVcIjtcclxuXHJcbmNsYXNzIENyZWF0ZUEgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgZmlsZUxpc3Q6IFtdXHJcbiAgICB9O1xyXG4gICAgdXBsb2FkUHJvcHMgPSB7XHJcbiAgICAgICAgb25DaGFuZ2U6ICh7ZmlsZUxpc3R9KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZmlsZUxpc3RcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJlZm9yZVVwbG9hZDogKCkgPT4gZmFsc2UsXHJcbiAgICAgICAgb25SZW1vdmU6ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5mb3JtLnNldEZpZWxkc1ZhbHVlKHtcclxuICAgICAgICAgICAgICAgIGZpbGU6IG51bGxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZmlsZUxpc3Q6IFtdXHJcbiAgICAgICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZm9ybS52YWxpZGF0ZUZpZWxkcygpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB7Zm9ybSwgc2V0VmlzaWJsZSwgdmlzaWJsZX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZm9ybSk7XHJcbiAgICAgICAgbGV0IHtmaWxlTGlzdH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGxldCBjcmVhdGVWaXNpYmxlID0gdmlzaWJsZS5jcmVhdGU7XHJcbiAgICAgICAgbGV0IHtnZXRGaWVsZERlY29yYXRvciwgaXNGaWVsZFRvdWNoZWQsIGdldEZpZWxkRXJyb3IsIGdldEZpZWxkc0Vycm9yfSA9IGZvcm07XHJcbiAgICAgICAgbGV0IHdmX2lkRXJyID0gaXNGaWVsZFRvdWNoZWQoJ3dmX2lkJykgJiYgZ2V0RmllbGRFcnJvcignd2ZfaWQnKSxcclxuICAgICAgICAgICAgdGl0bGVFcnIgPSBpc0ZpZWxkVG91Y2hlZCgndGl0bGUnKSAmJiBnZXRGaWVsZEVycm9yKCd0aXRsZScpLFxyXG4gICAgICAgICAgICBmaWxlRXJyID0gaXNGaWVsZFRvdWNoZWQoJ2ZpbGUnKSAmJiBnZXRGaWVsZEVycm9yKCdmaWxlJyk7XHJcbiAgICAgICAgbGV0IE1vZGFsRm9vdGVyID0gKCkgPT4gKFxyXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFZpc2libGUoZmFsc2UpfT7lj5bmtog8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT0ncHJpbWFyeScgZGlzYWJsZWQ9e2hhc0Vycm9ycyhnZXRGaWVsZHNFcnJvcigpKX0gb25DbGljaz17dGhpcy5jcmVhdGVBfT7noa7orqQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxNb2RhbCB2aXNpYmxlPXtjcmVhdGVWaXNpYmxlfSB0aXRsZT0n5Yib5bu65Lu75YqhJyBmb290ZXI9ezxNb2RhbEZvb3Rlci8+fVxyXG4gICAgICAgICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IHNldFZpc2libGUoZmFsc2UpfSB7Li4uY29tbW9uTW9kYWxQcm9wc30+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9e3dmX2lkRXJyID8gd2ZfaWRFcnIgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVTdGF0dXM9e3dmX2lkRXJyID8gJ2Vycm9yJyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0n5pWI546HMTAw57yW5Y+3JyB7Li4uY29tbW9uRm9ybVByb3BzfT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldEZpZWxkRGVjb3JhdG9yKCd3Zl9pZCcsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfor7fovpPlhaXmlYjnjocxMDDnvJblj7cnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9PC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwPXt0aXRsZUVyciA/IHRpdGxlRXJyIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlU3RhdHVzPXt0aXRsZUVyciA/ICdlcnJvcicgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J+agh+mimCcgey4uLmNvbW1vbkZvcm1Qcm9wc30+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0RmllbGREZWNvcmF0b3IoJ3RpdGxlJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+ivt+i+k+WFpeagh+mimCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH08L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9e2ZpbGVFcnIgPyBmaWxlRXJyIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlU3RhdHVzPXtmaWxlRXJyID8gJ2Vycm9yJyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0n5a+85YWlQeexu+aWh+S7ticgey4uLmNvbW1vbkZvcm1Qcm9wc30+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRGaWVsZERlY29yYXRvcignZmlsZScsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfor7fpgInmi6nmlofku7blr7zlhaUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVcGxvYWQgey4uLnRoaXMudXBsb2FkUHJvcHN9IGZpbGVMaXN0PXtmaWxlTGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gdHlwZT1cInVwbG9hZFwiLz7pgInmi6nmlofku7ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVXBsb2FkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfTwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIC8vXHJcbiAgICAvLyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIC8vICAgICB0aGlzLnByb3BzLmZvcm0udmFsaWRhdGVGaWVsZHMoKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBjcmVhdGVBID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB7Z2V0RmllbGRzVmFsdWUsIGdldEZpZWxkc0Vycm9yfSA9IHRoaXMucHJvcHMuZm9ybTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmZpbGVMaXN0KTtcclxuICAgICAgICBsZXQgY2FuQ3JlYXRlID0gIWhhc0Vycm9ycyhnZXRGaWVsZHNFcnJvcigpKTtcclxuICAgICAgICBpZiAoY2FuQ3JlYXRlKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZXMgPSBnZXRGaWVsZHNWYWx1ZSgpO1xyXG4gICAgICAgICAgICAvLyBsZXQgey4uLm90aGVyLGZpbGUgfSA9IHZhbHVlc1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG4gICAgICAgICAgICByZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9hcGkvY3JlYXRlX2Zsb3cnLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogey4uLnZhbHVlcyxcclxuICAgICAgICAgICAgICAgICAgICBmaWxlOiB2YWx1ZXMuZmlsZS5maWxlfSxcclxuICAgICAgICAgICAgICAgIHBvc3RUeXBlOiAnZm9ybWRhdGEnLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hGaWxlQUxpc3QoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucHJvcHMuc3RvcmUuc2V0Q3JlYXRlVmlzaWJsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoRmlsZUFMaXN0ID0gKCkgPT4ge1xyXG4gICAgICAgIHJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6ICcvYXBpL2dldF9mbG93X2xpc3QnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBrZXl3b3JkOiAnJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAoe3RhYmxlfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFibGUpO1xyXG4gICAgICAgICAgICAgICAgc3RvcmUuc2V0RmlsZUFMaXN0KHRhYmxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybS5jcmVhdGUoKShDcmVhdGVBKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNb2RhbCwgRm9ybSwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgQ29tbW9uTW9kYWxDb25maWcgZnJvbSAnLi4vLi4vY29uZmlnL2NvbW1vbi1tb2RhbCc7XHJcbmltcG9ydCBDb21tb25Gb3JtQ29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZy9jb21tb24tZm9ybSc7XHJcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4uLy4uL2hlbHBlcnMvcmVxdWVzdCc7XHJcbmltcG9ydCBoYXNFcnJvcnMgZnJvbSAnLi4vLi4vaGVscGVycy9oYXMtZXJyb3JzJztcclxuY2xhc3MgRWRpdEEgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgcmVuZGVyKCl7XHJcbiAgICBsZXQgeyBzZWxlY3RlZEl0ZW0sIHZpc2libGUsIGZvcm0gfSA9IHRoaXMucHJvcHM7XHJcbiAgICBsZXQgeyBpc0ZpZWxkVG91Y2hlZCwgZ2V0RmllbGRFcnJvcixnZXRGaWVsZHNFcnJvciwgZ2V0RmllbGREZWNvcmF0b3IgfSA9IGZvcm07XHJcbiAgICBsZXQgZWRpdFZpc2libGUgPSB2aXNpYmxlLmVkaXQ7XHJcbiAgICBsZXQgeyBlZGl0VHlwZSwgaWQsIHdmX2lkLCB0aXRsZSwgY3JlYXRvciwgY3JlYXRlX3RpbWUgfSA9IHNlbGVjdGVkSXRlbTtcclxuICAgIGxldCBtb2RhbFRpdGxlID0gZWRpdFR5cGUgPT09ICdlZGl0JyA/ICfnvJbovpEnIDogJ+WIoOmZpCc7XHJcbiAgICBsZXQgdGl0bGVFcnJvciA9IGlzRmllbGRUb3VjaGVkKCd0aXRsZScpICYmIGdldEZpZWxkRXJyb3IoJ3RpdGxlJyk7XHJcbiAgICBsZXQgd2ZfaWRFcnJvciA9IGlzRmllbGRUb3VjaGVkKCd3Zl9pZCcpICYmIGdldEZpZWxkRXJyb3IoJ3dmX2lkJyk7XHJcbiAgICBsZXQgcmVhc29uRXJyb3IgPSBpc0ZpZWxkVG91Y2hlZCgncmVhc29uJykgJiYgZ2V0RmllbGRFcnJvcigncmVhc29uJyk7XHJcbiAgICBsZXQgaXNEaXNhYmxlZEJ0biA9IGVkaXRUeXBlID09PSAnZWRpdCcgPyBoYXNFcnJvcnMoZ2V0RmllbGRzRXJyb3IoWyd0aXRsZScsICd3Zl9pZCddKSkgOiBoYXNFcnJvcnMoZ2V0RmllbGRzRXJyb3IoWydyZWFzb24nXSkpO1xyXG4gICAgbGV0IE1vZGFsRm9vdGVyID0gKCkgPT4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNsb3NlTW9kYWx9PuWPlua2iDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT0ncHJpbWFyeScgZGlzYWJsZWQ9e2lzRGlzYWJsZWRCdG59IG9uQ2xpY2s9e3RoaXMuZW5zdXJlfT7noa7lrpo8L0J1dHRvbj5cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TW9kYWwgdmlzaWJsZT17ZWRpdFZpc2libGV9IHRpdGxlPXtgJHttb2RhbFRpdGxlfS0tLS3kuIDnuqfmmI7nu4ZgfSBvbkNhbmNlbD17dGhpcy5jbG9zZU1vZGFsfSBmb290ZXI9ezxNb2RhbEZvb3Rlci8+fSB7Li4uQ29tbW9uTW9kYWxDb25maWd9PlxyXG4gICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD0n57yW5Y+3JyB7IC4uLkNvbW1vbkZvcm1Db25maWd9PntpZH08L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgaGVscD17d2ZfaWRFcnJvciA/IHdmX2lkRXJyb3IgOiAnJ31cclxuICAgICAgICAgICAgdmFsaWRhdGVTdGF0dXM9e3dmX2lkRXJyb3IgPyAnZXJyb3InOicnfVxyXG4gICAgICAgICAgICBsYWJlbD0n5pWI546HMTAw57yW5Y+3JyB7IC4uLkNvbW1vbkZvcm1Db25maWd9PlxyXG4gICAgICAgICAgICB7ZWRpdFR5cGUgIT09ICdlZGl0JyA/IHdmX2lkIDogZ2V0RmllbGREZWNvcmF0b3IoJ3dmX2lkJywge1xyXG4gICAgICAgICAgICAgIGluaXRpYWxWYWx1ZTogd2ZfaWQsXHJcbiAgICAgICAgICAgICAgcnVsZXM6IFt7XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfor7fovpPlhaXmlYjnjocxMDDnvJblj7cnXHJcbiAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSkoXHJcbiAgICAgICAgICAgICAgPElucHV0Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICBsYWJlbD0n5qCH6aKYJ1xyXG4gICAgICAgICAgICBoZWxwPXt0aXRsZUVycm9yID8gdGl0bGVFcnJvciA6ICcnfVxyXG4gICAgICAgICAgICB2YWxpZGF0ZVN0YXR1cz17dGl0bGVFcnJvciA/ICdlcnJvcic6Jyd9XHJcbiAgICAgICAgICAgeyAuLi5Db21tb25Gb3JtQ29uZmlnfT5cclxuICAgICAgICAgICAge2VkaXRUeXBlICE9PSAnZWRpdCcgPyB0aXRsZSA6IGdldEZpZWxkRGVjb3JhdG9yKCd0aXRsZScsIHtcclxuICAgICAgICAgICAgICBpbml0aWFsVmFsdWU6IHRpdGxlLFxyXG4gICAgICAgICAgICAgIHJ1bGVzOiBbe1xyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAn6K+36L6T5YWl5qCH6aKYJ1xyXG4gICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgIH0pKFxyXG4gICAgICAgICAgICAgIDxJbnB1dC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9J+WIm+W7uuS6uicgeyAuLi5Db21tb25Gb3JtQ29uZmlnfT57Y3JlYXRvcn08L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9J+WIm+W7uuaXtumXtCcgeyAuLi5Db21tb25Gb3JtQ29uZmlnfT57Y3JlYXRlX3RpbWV9PC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICB7ZWRpdFR5cGUgPT09ICdlZGl0JyA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgc3R5bGU9e3tkaXNwbGF5OiBlZGl0VHlwZSA9PT0gJ2VkaXQnID8gJ25vbmUnIDogJ2Jsb2NrJ319XHJcbiAgICAgICAgICAgIGhlbHA9e3JlYXNvbkVycm9yID8gcmVhc29uRXJyb3IgOiAnJ31cclxuICAgICAgICAgICAgdmFsaWRhdGVTdGF0dXM9eyByZWFzb25FcnJvciA/ICdlcnJvcicgOiAnJ31cclxuICAgICAgICAgICAgbGFiZWw9J+WIoOmZpOWOn+WboCcgeyAuLi5Db21tb25Gb3JtQ29uZmlnfT5cclxuICAgICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKCdyZWFzb24nLCB7XHJcbiAgICAgICAgICAgICAgcnVsZXM6IFt7XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfor7fovpPlhaXliKDpmaTljp/lm6AnXHJcbiAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSkoXHJcbiAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPSflv4XloasnLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIClcclxuICB9XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgIHRoaXMucHJvcHMuZm9ybS52YWxpZGF0ZUZpZWxkcygpO1xyXG4gIH1cclxuICBlbnN1cmUgPSAoKSA9PiB7XHJcbiAgICBsZXQgc2VsZWN0SXRlbSA9IHRoaXMucHJvcHMuc2VsZWN0ZWRJdGVtO1xyXG4gICAgbGV0IHsgZ2V0RmllbGRzRXJyb3IgfSA9IHRoaXMucHJvcHMuZm9ybTtcclxuICAgIGxldCBjYW5Qb3N0ID0gIWhhc0Vycm9ycyhnZXRGaWVsZHNFcnJvcigpKTtcclxuICAgIGlmKGNhblBvc3Qpe1xyXG4gICAgICBpZihzZWxlY3RJdGVtLmVkaXRUeXBlID09PSAnZWRpdCcpe1xyXG4gICAgICAgIHRoaXMuX2VkaXQoKTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5fZGVsZXRlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIF9lZGl0ID0gKCkgPT4ge1xyXG4gICAgbGV0IHsgZm9ybSB9ID0gdGhpcy5wcm9wcztcclxuICAgIGxldCB7IHdmX2lkLCB0aXRsZSB9ID0gZm9ybS5nZXRGaWVsZHNWYWx1ZSgpO1xyXG4gICAgbGV0IGlkID0gdGhpcy5wcm9wcy5zZWxlY3RlZEl0ZW0uaWQ7XHJcbiAgICByZXF1ZXN0KHtcclxuICAgICAgdXJsOiAnL2FwaS9hbGVydF9mbG93JyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIHdmX2lkLFxyXG4gICAgICAgIHRpdGxlXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jbG9zZU1vZGFsKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6ICgpID0+IHtcclxuICAgICAgICAvLyB0aGlzLmNsb3NlTW9kYWwoKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9O1xyXG4gIF9kZWxldGUgPSAoKSA9PiB7XHJcbiAgICBsZXQgeyBmb3JtIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgbGV0IHsgcmVhc29uIH0gPSBmb3JtLmdldEZpZWxkc1ZhbHVlKCk7XHJcbiAgICBsZXQgaWQgPSB0aGlzLnByb3BzLnNlbGVjdGVkSXRlbS5pZDtcclxuICAgIHJlcXVlc3Qoe1xyXG4gICAgICB1cmw6ICcvYXBpL2RlbGV0ZV9mbG93JyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIHJlYXNvblxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jbG9zZU1vZGFsKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6ICgpID0+IHtcclxuICAgICAgICAvLyB0aGlzLmNsb3NlTW9kYWwoKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9O1xyXG4gIGNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBsZXQgeyBzZXRWaXNpYmxlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgc2V0VmlzaWJsZShmYWxzZSlcclxuICB9XHJcbiAgXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRm9ybS5jcmVhdGUoKShFZGl0QSk7Il0sInNvdXJjZVJvb3QiOiIifQ==