(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "../node_modules/antd/es/breadcrumb/Breadcrumb.js":
/*!********************************************************!*\
  !*** ../node_modules/antd/es/breadcrumb/Breadcrumb.js ***!
  \********************************************************/
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
/* harmony import */ var _util_warning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_util/warning */ "../node_modules/antd/es/_util/warning.js");
/* harmony import */ var _BreadcrumbItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BreadcrumbItem */ "../node_modules/antd/es/breadcrumb/BreadcrumbItem.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);










function getBreadcrumbName(route, params) {
    if (!route.breadcrumbName) {
        return null;
    }
    var paramsKeys = Object.keys(params).join('|');
    var name = route.breadcrumbName.replace(new RegExp(':(' + paramsKeys + ')', 'g'), function (replacement, key) {
        return params[key] || replacement;
    });
    return name;
}
function defaultItemRender(route, params, routes, paths) {
    var isLastItem = routes.indexOf(route) === routes.length - 1;
    var name = getBreadcrumbName(route, params);
    return isLastItem ? react__WEBPACK_IMPORTED_MODULE_4__["createElement"](
        'span',
        null,
        name
    ) : react__WEBPACK_IMPORTED_MODULE_4__["createElement"](
        'a',
        { href: '#/' + paths.join('/') },
        name
    );
}

var Breadcrumb = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(Breadcrumb, _React$Component);

    function Breadcrumb() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Breadcrumb);

        return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (Breadcrumb.__proto__ || Object.getPrototypeOf(Breadcrumb)).apply(this, arguments));
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Breadcrumb, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var props = this.props;
            Object(_util_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(!('linkRender' in props || 'nameRender' in props), '`linkRender` and `nameRender` are removed, please use `itemRender` instead, ' + 'see: https://u.ant.design/item-render.');
        }
    }, {
        key: 'render',
        value: function render() {
            var crumbs = void 0;
            var _props = this.props,
                separator = _props.separator,
                prefixCls = _props.prefixCls,
                style = _props.style,
                className = _props.className,
                routes = _props.routes,
                _props$params = _props.params,
                params = _props$params === undefined ? {} : _props$params,
                children = _props.children,
                _props$itemRender = _props.itemRender,
                itemRender = _props$itemRender === undefined ? defaultItemRender : _props$itemRender;

            if (routes && routes.length > 0) {
                var paths = [];
                crumbs = routes.map(function (route) {
                    route.path = route.path || '';
                    var path = route.path.replace(/^\//, '');
                    Object.keys(params).forEach(function (key) {
                        path = path.replace(':' + key, params[key]);
                    });
                    if (path) {
                        paths.push(path);
                    }
                    return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](
                        _BreadcrumbItem__WEBPACK_IMPORTED_MODULE_7__["default"],
                        { separator: separator, key: route.breadcrumbName || path },
                        itemRender(route, params, routes, paths)
                    );
                });
            } else if (children) {
                crumbs = react__WEBPACK_IMPORTED_MODULE_4__["Children"].map(children, function (element, index) {
                    if (!element) {
                        return element;
                    }
                    Object(_util_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(element.type && element.type.__ANT_BREADCRUMB_ITEM, 'Breadcrumb only accepts Breadcrumb.Item as it\'s children');
                    return Object(react__WEBPACK_IMPORTED_MODULE_4__["cloneElement"])(element, {
                        separator: separator,
                        key: index
                    });
                });
            }
            return react__WEBPACK_IMPORTED_MODULE_4__["createElement"](
                'div',
                { className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(className, prefixCls), style: style },
                crumbs
            );
        }
    }]);

    return Breadcrumb;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Breadcrumb);

Breadcrumb.defaultProps = {
    prefixCls: 'ant-breadcrumb',
    separator: '/'
};
Breadcrumb.propTypes = {
    prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
    separator: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node,
    routes: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array,
    params: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
    linkRender: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
    nameRender: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func
};

/***/ }),

/***/ "../node_modules/antd/es/breadcrumb/BreadcrumbItem.js":
/*!************************************************************!*\
  !*** ../node_modules/antd/es/breadcrumb/BreadcrumbItem.js ***!
  \************************************************************/
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





var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};



var BreadcrumbItem = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(BreadcrumbItem, _React$Component);

    function BreadcrumbItem() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, BreadcrumbItem);

        return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (BreadcrumbItem.__proto__ || Object.getPrototypeOf(BreadcrumbItem)).apply(this, arguments));
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(BreadcrumbItem, [{
        key: 'render',
        value: function render() {
            var _a = this.props,
                prefixCls = _a.prefixCls,
                separator = _a.separator,
                children = _a.children,
                restProps = __rest(_a, ["prefixCls", "separator", "children"]);
            var link = void 0;
            if ('href' in this.props) {
                link = react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                    'a',
                    babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ className: prefixCls + '-link' }, restProps),
                    children
                );
            } else {
                link = react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                    'span',
                    babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ className: prefixCls + '-link' }, restProps),
                    children
                );
            }
            if (children) {
                return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                    'span',
                    null,
                    link,
                    react__WEBPACK_IMPORTED_MODULE_5__["createElement"](
                        'span',
                        { className: prefixCls + '-separator' },
                        separator
                    )
                );
            }
            return null;
        }
    }]);

    return BreadcrumbItem;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BreadcrumbItem);

BreadcrumbItem.__ANT_BREADCRUMB_ITEM = true;
BreadcrumbItem.defaultProps = {
    prefixCls: 'ant-breadcrumb',
    separator: '/'
};
BreadcrumbItem.propTypes = {
    prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
    separator: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.element]),
    href: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string
};

/***/ }),

/***/ "../node_modules/antd/es/breadcrumb/index.js":
/*!***************************************************!*\
  !*** ../node_modules/antd/es/breadcrumb/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Breadcrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Breadcrumb */ "../node_modules/antd/es/breadcrumb/Breadcrumb.js");
/* harmony import */ var _BreadcrumbItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BreadcrumbItem */ "../node_modules/antd/es/breadcrumb/BreadcrumbItem.js");


_Breadcrumb__WEBPACK_IMPORTED_MODULE_0__["default"].Item = _BreadcrumbItem__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (_Breadcrumb__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "../node_modules/antd/es/breadcrumb/style/css.js":
/*!*******************************************************!*\
  !*** ../node_modules/antd/es/breadcrumb/style/css.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../node_modules/antd/es/breadcrumb/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "../node_modules/antd/es/breadcrumb/style/index.css":
/*!**********************************************************!*\
  !*** ../node_modules/antd/es/breadcrumb/style/index.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/breadcrumb/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/breadcrumb/style/index.css", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
		var newContent = __webpack_require__(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/breadcrumb/style/index.css");

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

/***/ "../node_modules/antd/es/divider/index.js":
/*!************************************************!*\
  !*** ../node_modules/antd/es/divider/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Divider; });
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "../node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);


var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};


function Divider(_a) {
    var _classNames;

    var _a$prefixCls = _a.prefixCls,
        prefixCls = _a$prefixCls === undefined ? 'ant' : _a$prefixCls,
        _a$type = _a.type,
        type = _a$type === undefined ? 'horizontal' : _a$type,
        _a$orientation = _a.orientation,
        orientation = _a$orientation === undefined ? '' : _a$orientation,
        className = _a.className,
        children = _a.children,
        dashed = _a.dashed,
        restProps = __rest(_a, ["prefixCls", "type", "orientation", "className", "children", "dashed"]);

    var orientationPrefix = orientation.length > 0 ? '-' + orientation : orientation;
    var classString = classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, prefixCls + '-divider', prefixCls + '-divider-' + type, (_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-divider-with-text' + orientationPrefix, children), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, prefixCls + '-divider-dashed', !!dashed), _classNames));
    return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
        'div',
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({ className: classString }, restProps),
        children && react__WEBPACK_IMPORTED_MODULE_2__["createElement"](
            'span',
            { className: prefixCls + '-divider-inner-text' },
            children
        )
    );
}

/***/ }),

/***/ "../node_modules/antd/es/divider/style/css.js":
/*!****************************************************!*\
  !*** ../node_modules/antd/es/divider/style/css.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../node_modules/antd/es/divider/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "../node_modules/antd/es/divider/style/index.css":
/*!*******************************************************!*\
  !*** ../node_modules/antd/es/divider/style/index.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/divider/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/divider/style/index.css", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
		var newContent = __webpack_require__(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/divider/style/index.css");

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

/***/ "../node_modules/antd/es/list/Item.js":
/*!********************************************!*\
  !*** ../node_modules/antd/es/list/Item.js ***!
  \********************************************/
/*! exports provided: Meta, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Meta", function() { return Meta; });
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
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! babel-runtime/helpers/extends */ "../node_modules/babel-runtime/helpers/extends.js");
/* harmony import */ var babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../grid */ "../node_modules/antd/es/grid/index.js");






var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};




var Meta = function Meta(props) {
    var _props$prefixCls = props.prefixCls,
        prefixCls = _props$prefixCls === undefined ? 'ant-list' : _props$prefixCls,
        className = props.className,
        avatar = props.avatar,
        title = props.title,
        description = props.description,
        others = __rest(props, ["prefixCls", "className", "avatar", "title", "description"]);

    var classString = classnames__WEBPACK_IMPORTED_MODULE_8___default()(prefixCls + '-item-meta', className);
    var content = react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
        'div',
        { className: prefixCls + '-item-meta-content' },
        title && react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
            'h4',
            { className: prefixCls + '-item-meta-title' },
            title
        ),
        description && react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
            'div',
            { className: prefixCls + '-item-meta-description' },
            description
        )
    );
    return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
        'div',
        babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5___default()({}, others, { className: classString }),
        avatar && react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
            'div',
            { className: prefixCls + '-item-meta-avatar' },
            avatar
        ),
        (title || description) && content
    );
};
function getGrid(grid, t) {
    return grid[t] && Math.floor(24 / grid[t]);
}
var GridColumns = ['', 1, 2, 3, 4, 6, 8, 12, 24];

var Item = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Item, _React$Component);

    function Item() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Item);

        return babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Item, [{
        key: 'render',
        value: function render() {
            var grid = this.context.grid;
            var _a = this.props,
                _a$prefixCls = _a.prefixCls,
                prefixCls = _a$prefixCls === undefined ? 'ant-list' : _a$prefixCls,
                children = _a.children,
                actions = _a.actions,
                extra = _a.extra,
                className = _a.className,
                others = __rest(_a, ["prefixCls", "children", "actions", "extra", "className"]);
            var classString = classnames__WEBPACK_IMPORTED_MODULE_8___default()(prefixCls + '-item', className);
            var metaContent = [];
            var otherContent = [];
            react__WEBPACK_IMPORTED_MODULE_6__["Children"].forEach(children, function (element) {
                if (element && element.type && element.type === Meta) {
                    metaContent.push(element);
                } else {
                    otherContent.push(element);
                }
            });
            var contentClassString = classnames__WEBPACK_IMPORTED_MODULE_8___default()(prefixCls + '-item-content', babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, prefixCls + '-item-content-single', metaContent.length < 1));
            var content = otherContent.length > 0 ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'div',
                { className: contentClassString },
                otherContent
            ) : null;
            var actionsContent = void 0;
            if (actions && actions.length > 0) {
                var actionsContentItem = function actionsContentItem(action, i) {
                    return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                        'li',
                        { key: prefixCls + '-item-action-' + i },
                        action,
                        i !== actions.length - 1 && react__WEBPACK_IMPORTED_MODULE_6__["createElement"]('em', { className: prefixCls + '-item-action-split' })
                    );
                };
                actionsContent = react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    'ul',
                    { className: prefixCls + '-item-action' },
                    actions.map(function (action, i) {
                        return actionsContentItem(action, i);
                    })
                );
            }
            var extraContent = react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'div',
                { className: prefixCls + '-item-extra-wrap' },
                react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    'div',
                    { className: prefixCls + '-item-main' },
                    metaContent,
                    content,
                    actionsContent
                ),
                react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    'div',
                    { className: prefixCls + '-item-extra' },
                    extra
                )
            );
            var mainContent = grid ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                _grid__WEBPACK_IMPORTED_MODULE_9__["Col"],
                { span: getGrid(grid, 'column'), xs: getGrid(grid, 'xs'), sm: getGrid(grid, 'sm'), md: getGrid(grid, 'md'), lg: getGrid(grid, 'lg'), xl: getGrid(grid, 'xl'), xxl: getGrid(grid, 'xxl') },
                react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    'div',
                    babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5___default()({}, others, { className: classString }),
                    extra && extraContent,
                    !extra && metaContent,
                    !extra && content,
                    !extra && actionsContent
                )
            ) : react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'div',
                babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_5___default()({}, others, { className: classString }),
                extra && extraContent,
                !extra && metaContent,
                !extra && content,
                !extra && actionsContent
            );
            return mainContent;
        }
    }]);

    return Item;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Item);

Item.Meta = Meta;
Item.propTypes = {
    column: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(GridColumns),
    xs: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(GridColumns),
    sm: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(GridColumns),
    md: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(GridColumns),
    lg: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(GridColumns),
    xl: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(GridColumns),
    xxl: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(GridColumns)
};
Item.contextTypes = {
    grid: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any
};

/***/ }),

/***/ "../node_modules/antd/es/list/index.js":
/*!*********************************************!*\
  !*** ../node_modules/antd/es/list/index.js ***!
  \*********************************************/
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../locale-provider/LocaleReceiver */ "../node_modules/antd/es/locale-provider/LocaleReceiver.js");
/* harmony import */ var _locale_provider_default__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../locale-provider/default */ "../node_modules/antd/es/locale-provider/default.js");
/* harmony import */ var _spin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../spin */ "../node_modules/antd/es/spin/index.js");
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pagination */ "../node_modules/antd/es/pagination/index.js");
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../grid */ "../node_modules/antd/es/grid/index.js");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Item */ "../node_modules/antd/es/list/Item.js");






var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};










var List = function (_React$Component) {
    babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(List, _React$Component);

    function List() {
        babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, List);

        var _this = babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));

        _this.keys = {};
        _this.renderItem = function (item, index) {
            var _this$props = _this.props,
                dataSource = _this$props.dataSource,
                renderItem = _this$props.renderItem,
                rowKey = _this$props.rowKey;

            var key = void 0;
            if (typeof rowKey === 'function') {
                key = rowKey(dataSource[index]);
            } else if (typeof rowKey === 'string') {
                key = dataSource[rowKey];
            } else {
                key = dataSource.key;
            }
            if (!key) {
                key = 'list-item-' + index;
            }
            _this.keys[index] = key;
            return renderItem(item, index);
        };
        _this.renderEmpty = function (contextLocale) {
            var locale = babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, contextLocale, _this.props.locale);
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'div',
                { className: _this.props.prefixCls + '-empty-text' },
                locale.emptyText
            );
        };
        return _this;
    }

    babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(List, [{
        key: 'getChildContext',
        value: function getChildContext() {
            return {
                grid: this.props.grid
            };
        }
    }, {
        key: 'isSomethingAfterLastTtem',
        value: function isSomethingAfterLastTtem() {
            var _props = this.props,
                loadMore = _props.loadMore,
                pagination = _props.pagination,
                footer = _props.footer;

            return !!(loadMore || pagination || footer);
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames,
                _this2 = this;

            var _a = this.props,
                bordered = _a.bordered,
                split = _a.split,
                className = _a.className,
                children = _a.children,
                itemLayout = _a.itemLayout,
                loadMore = _a.loadMore,
                pagination = _a.pagination,
                prefixCls = _a.prefixCls,
                grid = _a.grid,
                dataSource = _a.dataSource,
                size = _a.size,
                rowKey = _a.rowKey,
                renderItem = _a.renderItem,
                header = _a.header,
                footer = _a.footer,
                loading = _a.loading,
                rest = __rest(_a, ["bordered", "split", "className", "children", "itemLayout", "loadMore", "pagination", "prefixCls", "grid", "dataSource", "size", "rowKey", "renderItem", "header", "footer", "loading"]);
            var loadingProp = loading;
            if (typeof loadingProp === 'boolean') {
                loadingProp = {
                    spinning: loadingProp
                };
            }
            var isLoading = loadingProp && loadingProp.spinning;
            // large => lg
            // small => sm
            var sizeCls = '';
            switch (size) {
                case 'large':
                    sizeCls = 'lg';
                    break;
                case 'small':
                    sizeCls = 'sm';
                default:
                    break;
            }
            var classString = classnames__WEBPACK_IMPORTED_MODULE_8___default()(prefixCls, className, (_classNames = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-vertical', itemLayout === 'vertical'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-' + sizeCls, sizeCls), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-split', split), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-bordered', bordered), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-loading', isLoading), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-grid', grid), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classNames, prefixCls + '-something-after-last-item', this.isSomethingAfterLastTtem()), _classNames));
            var paginationContent = react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'div',
                { className: prefixCls + '-pagination' },
                react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_pagination__WEBPACK_IMPORTED_MODULE_12__["default"], pagination)
            );
            var childrenContent = void 0;
            childrenContent = isLoading && react__WEBPACK_IMPORTED_MODULE_6__["createElement"]('div', { style: { minHeight: 53 } });
            if (dataSource.length > 0) {
                var items = dataSource.map(function (item, index) {
                    return _this2.renderItem(item, index);
                });
                var childrenList = react__WEBPACK_IMPORTED_MODULE_6__["Children"].map(items, function (child, index) {
                    return react__WEBPACK_IMPORTED_MODULE_6__["cloneElement"](child, {
                        key: _this2.keys[index]
                    });
                });
                childrenContent = grid ? react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    _grid__WEBPACK_IMPORTED_MODULE_13__["Row"],
                    { gutter: grid.gutter },
                    childrenList
                ) : childrenList;
            } else if (!children && !isLoading) {
                childrenContent = react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    _locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_9__["default"],
                    { componentName: 'Table', defaultLocale: _locale_provider_default__WEBPACK_IMPORTED_MODULE_10__["default"].Table },
                    this.renderEmpty
                );
            }
            var content = react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'div',
                null,
                react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    _spin__WEBPACK_IMPORTED_MODULE_11__["default"],
                    loadingProp,
                    childrenContent
                ),
                loadMore,
                !loadMore && pagination ? paginationContent : null
            );
            return react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                'div',
                babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({ className: classString }, rest),
                header && react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    'div',
                    { className: prefixCls + '-header' },
                    header
                ),
                content,
                children,
                footer && react__WEBPACK_IMPORTED_MODULE_6__["createElement"](
                    'div',
                    { className: prefixCls + '-footer' },
                    footer
                )
            );
        }
    }]);

    return List;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (List);

List.Item = _Item__WEBPACK_IMPORTED_MODULE_14__["default"];
List.childContextTypes = {
    grid: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.any
};
List.defaultProps = {
    dataSource: [],
    prefixCls: 'ant-list',
    bordered: false,
    split: true,
    loading: false,
    pagination: false
};

/***/ }),

/***/ "../node_modules/antd/es/list/style/css.js":
/*!*************************************************!*\
  !*** ../node_modules/antd/es/list/style/css.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.css */ "../node_modules/antd/es/style/index.css");
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "../node_modules/antd/es/list/style/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _spin_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../spin/style/css */ "../node_modules/antd/es/spin/style/css.js");
/* harmony import */ var _pagination_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pagination/style/css */ "../node_modules/antd/es/pagination/style/css.js");
/* harmony import */ var _grid_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../grid/style/css */ "../node_modules/antd/es/grid/style/css.js");


// style dependencies




/***/ }),

/***/ "../node_modules/antd/es/list/style/index.css":
/*!****************************************************!*\
  !*** ../node_modules/antd/es/list/style/index.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/list/style/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/list/style/index.css", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
		var newContent = __webpack_require__(/*! !../../../../css-loader!./index.css */ "../node_modules/css-loader/index.js!../node_modules/antd/es/list/style/index.css");

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

/***/ "../node_modules/css-loader/index.js!../node_modules/antd/es/breadcrumb/style/index.css":
/*!*************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/antd/es/breadcrumb/style/index.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n.ant-breadcrumb {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 14px;\n}\n.ant-breadcrumb .anticon {\n  font-size: 12px;\n}\n.ant-breadcrumb a {\n  color: rgba(0, 0, 0, 0.45);\n  -webkit-transition: color .3s;\n  transition: color .3s;\n}\n.ant-breadcrumb a:hover {\n  color: #40a9ff;\n}\n.ant-breadcrumb > span:last-child {\n  color: rgba(0, 0, 0, 0.65);\n}\n.ant-breadcrumb > span:last-child .ant-breadcrumb-separator {\n  display: none;\n}\n.ant-breadcrumb-separator {\n  margin: 0 8px;\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-breadcrumb-link > .anticon + span {\n  margin-left: 4px;\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/antd/es/divider/style/index.css":
/*!**********************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/antd/es/divider/style/index.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n.ant-divider {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  background: #e8e8e8;\n}\n.ant-divider,\n.ant-divider-vertical {\n  margin: 0 8px;\n  display: inline-block;\n  height: 0.9em;\n  width: 1px;\n  vertical-align: middle;\n  position: relative;\n  top: -0.06em;\n}\n.ant-divider-horizontal {\n  display: block;\n  height: 1px;\n  width: 100%;\n  margin: 24px 0;\n  clear: both;\n}\n.ant-divider-horizontal.ant-divider-with-text {\n  display: table;\n  white-space: nowrap;\n  text-align: center;\n  background: transparent;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 16px;\n  margin: 16px 0;\n}\n.ant-divider-horizontal.ant-divider-with-text:before,\n.ant-divider-horizontal.ant-divider-with-text:after {\n  content: '';\n  display: table-cell;\n  position: relative;\n  top: 50%;\n  width: 50%;\n  border-top: 1px solid #e8e8e8;\n  -webkit-transform: translateY(50%);\n      -ms-transform: translateY(50%);\n          transform: translateY(50%);\n}\n.ant-divider-inner-text {\n  display: inline-block;\n  padding: 0 24px;\n}\n.ant-divider-horizontal.ant-divider-with-text-left {\n  display: table;\n  white-space: nowrap;\n  text-align: center;\n  background: transparent;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 14px;\n  margin: 16px 0;\n}\n.ant-divider-horizontal.ant-divider-with-text-left:before {\n  content: '';\n  display: table-cell;\n  position: relative;\n  top: 50%;\n  width: 5%;\n  border-top: 1px solid #e8e8e8;\n  -webkit-transform: translateY(50%);\n      -ms-transform: translateY(50%);\n          transform: translateY(50%);\n}\n.ant-divider-horizontal.ant-divider-with-text-left:after {\n  content: '';\n  display: table-cell;\n  position: relative;\n  top: 50%;\n  width: 95%;\n  border-top: 1px solid #e8e8e8;\n  -webkit-transform: translateY(50%);\n      -ms-transform: translateY(50%);\n          transform: translateY(50%);\n}\n.ant-divider-horizontal.ant-divider-with-text-left-inner-text {\n  display: inline-block;\n  padding: 0 10px;\n}\n.ant-divider-horizontal.ant-divider-with-text-right {\n  display: table;\n  white-space: nowrap;\n  text-align: center;\n  background: transparent;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 14px;\n  margin: 16px 0;\n}\n.ant-divider-horizontal.ant-divider-with-text-right:before {\n  content: '';\n  display: table-cell;\n  position: relative;\n  top: 50%;\n  width: 95%;\n  border-top: 1px solid #e8e8e8;\n  -webkit-transform: translateY(50%);\n      -ms-transform: translateY(50%);\n          transform: translateY(50%);\n}\n.ant-divider-horizontal.ant-divider-with-text-right:after {\n  content: '';\n  display: table-cell;\n  position: relative;\n  top: 50%;\n  width: 5%;\n  border-top: 1px solid #e8e8e8;\n  -webkit-transform: translateY(50%);\n      -ms-transform: translateY(50%);\n          transform: translateY(50%);\n}\n.ant-divider-horizontal.ant-divider-with-text-right-inner-text {\n  display: inline-block;\n  padding: 0 10px;\n}\n.ant-divider-dashed {\n  background: none;\n  border-top: 1px dashed #e8e8e8;\n}\n.ant-divider-horizontal.ant-divider-with-text.ant-divider-dashed {\n  border-top: 0;\n}\n.ant-divider-horizontal.ant-divider-with-text.ant-divider-dashed:before,\n.ant-divider-horizontal.ant-divider-with-text.ant-divider-dashed:after {\n  border-style: dashed none none;\n}\n", ""]);

// exports


/***/ }),

/***/ "../node_modules/css-loader/index.js!../node_modules/antd/es/list/style/index.css":
/*!*******************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/antd/es/list/style/index.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n.ant-list {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: relative;\n}\n.ant-list * {\n  outline: none;\n}\n.ant-list-pagination {\n  margin-top: 24px;\n  text-align: right;\n}\n.ant-list-more {\n  margin-top: 12px;\n  text-align: center;\n}\n.ant-list-more button {\n  padding-left: 32px;\n  padding-right: 32px;\n}\n.ant-list-spin {\n  text-align: center;\n  min-height: 40px;\n}\n.ant-list-empty-text {\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 14px;\n  padding: 16px;\n  text-align: center;\n}\n.ant-list-item {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\n.ant-list-item-meta {\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  font-size: 0;\n}\n.ant-list-item-meta-avatar {\n  margin-right: 16px;\n}\n.ant-list-item-meta-content {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1 0;\n      -ms-flex: 1 0;\n          flex: 1 0;\n}\n.ant-list-item-meta-title {\n  color: rgba(0, 0, 0, 0.65);\n  margin-bottom: 4px;\n  font-size: 14px;\n  line-height: 22px;\n}\n.ant-list-item-meta-title > a {\n  color: rgba(0, 0, 0, 0.65);\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n.ant-list-item-meta-title > a:hover {\n  color: #1890ff;\n}\n.ant-list-item-meta-description {\n  color: rgba(0, 0, 0, 0.45);\n  font-size: 14px;\n  line-height: 22px;\n}\n.ant-list-item-content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.ant-list-item-content-single {\n  -webkit-box-pack: start;\n  -webkit-justify-content: flex-start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n.ant-list-item-action {\n  font-size: 0;\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  margin-left: 48px;\n  padding: 0;\n  list-style: none;\n}\n.ant-list-item-action > li {\n  display: inline-block;\n  color: rgba(0, 0, 0, 0.45);\n  cursor: pointer;\n  padding: 0 8px;\n  position: relative;\n  font-size: 14px;\n  line-height: 22px;\n  text-align: center;\n}\n.ant-list-item-action > li:first-child {\n  padding-left: 0;\n}\n.ant-list-item-action-split {\n  background-color: #e8e8e8;\n  margin-top: -7px;\n  position: absolute;\n  top: 50%;\n  right: 0;\n  width: 1px;\n  height: 14px;\n}\n.ant-list-item-main {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.ant-list-header,\n.ant-list-footer {\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\n.ant-list-empty {\n  color: rgba(0, 0, 0, 0.45);\n  padding: 16px 0;\n  font-size: 12px;\n  text-align: center;\n}\n.ant-list-split .ant-list-item {\n  border-bottom: 1px solid #e8e8e8;\n}\n.ant-list-split .ant-list-item:last-child {\n  border-bottom: none;\n}\n.ant-list-split .ant-list-header {\n  border-bottom: 1px solid #e8e8e8;\n}\n.ant-list-loading .ant-list-spin-nested-loading {\n  min-height: 32px;\n}\n.ant-list-something-after-last-item .ant-list-item:last-child {\n  border-bottom: 1px solid #e8e8e8;\n}\n.ant-list-lg .ant-list-item {\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n.ant-list-sm .ant-list-item {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n.ant-list-vertical .ant-list-item {\n  display: block;\n}\n.ant-list-vertical .ant-list-item-extra-wrap {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.ant-list-vertical .ant-list-item-main {\n  display: block;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.ant-list-vertical .ant-list-item-extra {\n  margin-left: 58px;\n}\n.ant-list-vertical .ant-list-item-meta {\n  margin-bottom: 16px;\n}\n.ant-list-vertical .ant-list-item-meta-avatar {\n  display: none;\n}\n.ant-list-vertical .ant-list-item-meta-title {\n  color: rgba(0, 0, 0, 0.85);\n  margin-bottom: 12px;\n  font-size: 16px;\n  line-height: 24px;\n}\n.ant-list-vertical .ant-list-item-content {\n  display: block;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  margin-bottom: 16px;\n}\n.ant-list-vertical .ant-list-item-action {\n  margin-left: auto;\n}\n.ant-list-vertical .ant-list-item-action > li {\n  padding: 0 16px;\n}\n.ant-list-vertical .ant-list-item-action > li:first-child {\n  padding-left: 0;\n}\n.ant-list-grid .ant-list-item {\n  border-bottom: none;\n  padding-top: 0;\n  padding-bottom: 0;\n  margin-bottom: 20px;\n}\n.ant-list-grid .ant-list-item-content {\n  display: block;\n}\n.ant-list-bordered {\n  border-radius: 4px;\n  border: 1px solid #d9d9d9;\n}\n.ant-list-bordered .ant-list-header {\n  padding-left: 24px;\n  padding-right: 24px;\n}\n.ant-list-bordered .ant-list-footer {\n  padding-left: 24px;\n  padding-right: 24px;\n}\n.ant-list-bordered .ant-list-item {\n  border-bottom: 1px solid #e8e8e8;\n  padding-left: 24px;\n  padding-right: 24px;\n}\n.ant-list-bordered .ant-list-pagination {\n  margin: 16px 24px;\n}\n.ant-list-bordered.ant-list-sm .ant-list-item {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.ant-list-bordered.ant-list-sm .ant-list-header,\n.ant-list-bordered.ant-list-sm .ant-list-footer {\n  padding: 8px 16px;\n}\n.ant-list-bordered.ant-list-lg .ant-list-header,\n.ant-list-bordered.ant-list-lg .ant-list-footer {\n  padding: 16px 24px;\n}\n@media screen and (max-width: 768px) {\n  .ant-list-item-action {\n    margin-left: 24px;\n  }\n  .ant-list-vertical .ant-list-item-extra {\n    margin-left: 24px;\n  }\n}\n@media screen and (max-width: 480px) {\n  .ant-list-item {\n    -webkit-flex-wrap: wrap;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n  }\n  .ant-list-item-action {\n    margin-left: 12px;\n  }\n  .ant-list-vertical .ant-list-item-extra-wrap {\n    -webkit-flex-wrap: wrap-reverse;\n        -ms-flex-wrap: wrap-reverse;\n            flex-wrap: wrap-reverse;\n  }\n  .ant-list-vertical .ant-list-item-main {\n    min-width: 220px;\n  }\n  .ant-list-vertical .ant-list-item-extra {\n    margin-left: 0;\n  }\n}\n", ""]);

// exports


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

/***/ "../node_modules/css-loader/index.js??ref--5-1!./pages/edit_b/edit_b.css":
/*!**********************************************************************!*\
  !*** ../node_modules/css-loader??ref--5-1!./pages/edit_b/edit_b.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".edit_b_pl25{\r\n    padding-left: 25px;\r\n}", "", {"version":3,"sources":["E:/前端/jmyd-ams/pc/src/pages/edit_b/edit_b.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;CACtB","file":"edit_b.css","sourcesContent":[".pl25{\r\n    padding-left: 25px;\r\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"pl25": "edit_b_pl25"
};

/***/ }),

/***/ "../node_modules/css-loader/index.js??ref--5-1!./pages/process/process.css":
/*!************************************************************************!*\
  !*** ../node_modules/css-loader??ref--5-1!./pages/process/process.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".process_form{\r\n    padding: 15px 0;\r\n}\r\n.process_select{\r\n    width: 130px !important;\r\n}", "", {"version":3,"sources":["E:/前端/jmyd-ams/pc/src/pages/process/process.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;CACnB;AACD;IACI,wBAAwB;CAC3B","file":"process.css","sourcesContent":[".form{\r\n    padding: 15px 0;\r\n}\r\n.select{\r\n    width: 130px !important;\r\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"form": "process_form",
	"select": "process_select"
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

/***/ "./pages/edit_b/edit_b.css":
/*!*********************************!*\
  !*** ./pages/edit_b/edit_b.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./edit_b.css */ "../node_modules/css-loader/index.js??ref--5-1!./pages/edit_b/edit_b.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--5-1!./edit_b.css */ "../node_modules/css-loader/index.js??ref--5-1!./pages/edit_b/edit_b.css", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./edit_b.css */ "../node_modules/css-loader/index.js??ref--5-1!./pages/edit_b/edit_b.css");

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

/***/ "./pages/edit_b/edit_b.js":
/*!********************************!*\
  !*** ./pages/edit_b/edit_b.js ***!
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

var _store = __webpack_require__(/*! ../process/store */ "./pages/process/store.js");

var _store2 = _interopRequireDefault(_store);

var _exportFile = __webpack_require__(/*! ../../helpers/export-file */ "./helpers/export-file.js");

var _exportFile2 = _interopRequireDefault(_exportFile);

var _edit_b = __webpack_require__(/*! ./edit_b.css */ "./pages/edit_b/edit_b.css");

var _edit_b2 = _interopRequireDefault(_edit_b);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditB = function (_Component) {
  _inherits(EditB, _Component);

  function EditB() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EditB);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EditB.__proto__ || Object.getPrototypeOf(EditB)).call.apply(_ref, [this].concat(args))), _this), _this.ensure = function () {
      var selectItem = _this.props.selectedItem;
      var getFieldsError = _this.props.form.getFieldsError;

      var canPost = !(0, _hasErrors2.default)(getFieldsError);
      if (canPost) {
        if (selectItem.editType === 'edit') {
          _this._edit();
        } else {
          _this._delete();
        }
      }
    }, _this._edit = function () {
      var form = _this.props.form;

      var selectItem = _this.props.selectedItem;
      var file_id = selectItem.file_id;

      var id = _this.props.id;

      var _form$getFieldsValue = form.getFieldsValue(),
          remark = _form$getFieldsValue.remark;

      console.log(id);
      (0, _request2.default)({
        url: '/api/edit_file',
        data: {
          flow_id: id,
          file_id: file_id,
          remark: remark
        },
        success: function success() {
          _this.closeModal();
          _this.fetchProcessList();
        },
        fail: function fail() {}
      });
    }, _this._delete = function () {
      var form = _this.props.form;

      var selectItem = _this.props.selectedItem;
      var file_id = selectItem.file_id;

      var id = _this.props.id;

      var _form$getFieldsValue2 = form.getFieldsValue(),
          reason = _form$getFieldsValue2.reason;

      (0, _request2.default)({
        url: '/api/delete_file',
        data: {
          flow_id: id,
          file_id: file_id,
          reason: reason
        },
        success: function success() {
          _this.closeModal();
          _this.fetchProcessList();
        },
        fail: function fail() {
          // this.closeModal();
        }
      });
    }, _this.closeModal = function () {
      var setVisible = _this.props.setVisible;

      setVisible(false);
    }, _this.fetchProcessList = function () {
      (0, _request2.default)({
        url: '/api/get_file_list',
        data: {
          id: _this.props.id,
          keyword: '',
          file_type: ''
        },
        success: function success(_ref2) {
          var table = _ref2.table;

          _store2.default.setProcessList(table);
        }
      });
    }, _this.exportFileA = function () {
      var selectItem = _this.props.selectedItem;
      var file_id = selectItem.file_id;
      var id = _this.props.id;

      (0, _exportFile2.default)({
        url: '/api/get_file',
        data: {
          id: id,
          file_id: file_id
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EditB, [{
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
          wf_id = selectedItem.wf_id,
          title = selectedItem.title,
          creator = selectedItem.creator,
          create_time = selectedItem.create_time,
          file_type = selectedItem.file_type,
          remark = selectedItem.remark,
          file_id = selectedItem.file_id,
          file_name = selectedItem.file_name;

      var modalTitle = editType === 'edit' ? '编辑' : '删除';
      // let titleError = isFieldTouched('title') && getFieldError('title');
      // let wf_idError = isFieldTouched('wf_id') && getFieldError('wf_id');
      var remarkError = isFieldTouched('remark') && getFieldError('remark');
      var reasonError = isFieldTouched('reason') && getFieldError('reason');
      var isDisabledBtn = editType === 'edit' ? null : (0, _hasErrors2.default)(getFieldsError(['reason']));
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
      var file_type_list = ['全部', 'A类文件', 'B类文件', 'C类文件', 'D类文件', 'E类文件'];
      return _react2.default.createElement(
        _modal2.default,
        _extends({
          visible: editVisible,
          title: modalTitle + '----\u4E8C\u7EA7\u660E\u7EC6',
          onCancel: this.closeModal,
          footer: _react2.default.createElement(ModalFooter, null)
        }, _commonModal2.default),
        _react2.default.createElement(
          _form2.default,
          null,
          _react2.default.createElement(
            _form2.default.Item,
            _extends({ label: '\u6587\u4EF6\u7C7B\u578B' }, _commonForm2.default),
            file_type_list[file_type]
          ),
          _react2.default.createElement(
            _form2.default.Item,
            _extends({ label: '\u6548\u7387100\u7F16\u53F7' }, _commonForm2.default),
            wf_id
          ),
          _react2.default.createElement(
            _form2.default.Item,
            _extends({ label: '\u6807\u9898' }, _commonForm2.default),
            title
          ),
          _react2.default.createElement(
            _form2.default.Item,
            _extends({ label: '\u6587\u4EF6\u540D\u79F0' }, _commonForm2.default),
            file_id
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
          _react2.default.createElement(
            _form2.default.Item,
            _extends({
              label: '\u5907\u6CE8',
              help: remarkError ? remarkError : '',
              validateStatus: remarkError ? 'error' : ''
            }, _commonForm2.default),
            editType !== 'edit' ? remark : getFieldDecorator('remark', {
              initialValue: remark
            })(_react2.default.createElement(_input2.default, null)),
            _react2.default.createElement(
              'span',
              { className: _edit_b2.default.pl25 },
              _react2.default.createElement(
                'a',
                { onClick: this.exportFileA },
                file_name
              )
            )
          ),
          editType === 'edit' ? null : _react2.default.createElement(
            _form2.default.Item,
            _extends({
              style: { display: editType === 'edit' ? 'none' : 'block' },
              help: reasonError ? reasonError : '',
              validateStatus: reasonError ? 'reason' : '',
              label: '\u5220\u9664\u539F\u56E0'
            }, _commonForm2.default),
            getFieldDecorator('reason', {
              rules: [{
                require: true,
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

  return EditB;
}(_react.Component);

var _default = _form2.default.create()(EditB);

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(EditB, 'EditB', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\edit_b\\edit_b.js');
  reactHotLoader.register(_default, 'default', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\edit_b\\edit_b.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./pages/file_b/file_b.js":
/*!********************************!*\
  !*** ./pages/file_b/file_b.js ***!
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

var _table = __webpack_require__(/*! antd/es/table */ "../node_modules/antd/es/table/index.js");

var _table2 = _interopRequireDefault(_table);

var _form = __webpack_require__(/*! antd/es/form */ "../node_modules/antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _button = __webpack_require__(/*! antd/es/button */ "../node_modules/antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _radio = __webpack_require__(/*! antd/es/radio */ "../node_modules/antd/es/radio/index.js");

var _radio2 = _interopRequireDefault(_radio);

var _select = __webpack_require__(/*! antd/es/select */ "../node_modules/antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _input = __webpack_require__(/*! antd/es/input */ "../node_modules/antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

__webpack_require__(/*! antd/es/modal/style/css */ "../node_modules/antd/es/modal/style/css.js");

__webpack_require__(/*! antd/es/table/style/css */ "../node_modules/antd/es/table/style/css.js");

__webpack_require__(/*! antd/es/form/style/css */ "../node_modules/antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "../node_modules/antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/radio/style/css */ "../node_modules/antd/es/radio/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "../node_modules/antd/es/select/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "../node_modules/antd/es/input/style/css.js");

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(/*! mobx-react */ "../node_modules/mobx-react/index.module.js");

var _store = __webpack_require__(/*! ./store */ "./pages/file_b/store.js");

var _store2 = _interopRequireDefault(_store);

var _store3 = __webpack_require__(/*! ../process/store */ "./pages/process/store.js");

var _store4 = _interopRequireDefault(_store3);

var _hasErrors = __webpack_require__(/*! ../../helpers/has-errors */ "./helpers/has-errors.js");

var _hasErrors2 = _interopRequireDefault(_hasErrors);

var _request = __webpack_require__(/*! ../../helpers/request */ "./helpers/request.js");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextArea = _input2.default.TextArea;

var Option = _select2.default.Option;
var RadioGroup = _radio2.default.Group;
var formProps = {
  labelCol: {
    span: 4,
    gutter: 16
  },
  wrapperCol: {
    span: 18,
    gutter: 16
  }
};
var allTypes = {
  批开停开机: {
    opertaion_type: 1,
    dataSource: [{
      order: '1',
      field: '电话号码',
      input_format: '号码',
      output_format: function output_format() {
        return _react2.default.createElement(
          'span',
          null,
          '\u6309A\u7C7B\u6587\u4EF6\u53F7\u7801'
        );
      }
    }],
    columns: [{
      title: '顺序',
      dataIndex: 'order'
    }, {
      title: '字段',
      dataIndex: 'field'
    }, {
      title: 'A类文件输入格式',
      dataIndex: 'input_format'
    }, {
      title: '输出格式',
      dataIndex: 'output_format',
      render: function render(Comp) {
        return _react2.default.createElement(Comp, null);
      }
    }],
    example: {
      input: '13912345678',
      output: '13912345678'
    }
  },
  批量实名登记: {
    opertaion_type: 2,
    dataSource: [{
      order: '1',
      field: '电话号码',
      input_format: '号码',
      output_format: function output_format() {
        return _react2.default.createElement(
          'span',
          null,
          '\u6309A\u7C7B\u6587\u4EF6\u53F7\u7801'
        );
      }
    }, {
      order: '2',
      field: '证件类型',
      input_format: '证件类型',
      output_format: function output_format() {
        return _react2.default.createElement(
          'span',
          null,
          '\u6309A\u7C7B\u6587\u4EF6\u8BC1\u4EF6\u7C7B\u578B'
        );
      }
    }, {
      order: '3',
      field: '证件号码',
      input_format: '证件号码',
      output_format: function output_format() {
        return _react2.default.createElement(
          'span',
          null,
          '\u6309A\u7C7B\u6587\u4EF6\u8BC1\u4EF6\u53F7\u7801'
        );
      }
    }, {
      order: '4',
      field: '证件地址',
      input_format: '证件地址',
      output_format: function output_format() {
        return _react2.default.createElement(
          'span',
          null,
          '\u6309A\u7C7B\u6587\u4EF6\u8BC1\u4EF6\u5730\u5740'
        );
      }
    }, {
      order: '5',
      field: '客户名称',
      input_format: '客户名称',
      output_format: function output_format() {
        return _react2.default.createElement(
          'span',
          null,
          '\u6309A\u7C7B\u5BA2\u6237\u540D\u79F0'
        );
      }
    }],
    columns: [{
      title: '顺序',
      dataIndex: 'order'
    }, {
      title: '字段',
      dataIndex: 'field'
    }, {
      title: 'A类文件输入格式',
      dataIndex: 'input_format'
    }, {
      title: '格式内容',
      dataIndex: 'output_format',
      render: function render(Comp) {
        return _react2.default.createElement(Comp, null);
      }
    }],
    example: {
      input: '13912345678|IdCard|440722194510062719|广东省台山市三合镇东联潮洋村15号之一|陈国富',
      output: '13912345678|IdCard|440722194510062719|广东省台山市三合镇东联潮洋村15号之一|陈国富'
    }
  },
  批量订单回退: {
    opertaion_type: 3,
    dataSource: [{
      order: 1,
      field: '订单编号',
      input_format: '订单编号',
      output_format: function output_format() {
        return _react2.default.createElement(
          'span',
          null,
          '\u6309A\u7C7B\u6587\u4EF6\u8BA2\u5355\u7F16\u53F7'
        );
      }
    }, {
      order: 2,
      field: '回退原因',
      input_format: '',
      output_format: function output_format() {
        return _react2.default.createElement(
          RadioGroup,
          { defaultValue: '', name: 'content' },
          _react2.default.createElement(
            _radio2.default,
            { value: 'rest' },
            '\u4F59\u989D\u4E0D\u8DB3'
          ),
          _react2.default.createElement(
            _radio2.default,
            { value: 'other' },
            _react2.default.createElement(_input2.default, { placeholder: '\u5176\u4ED6', style: { width: 85 } })
          )
        );
      }
    }],
    columns: [{
      title: '顺序',
      dataIndex: 'order'
    }, {
      title: '字段',
      dataIndex: 'field'
    }, {
      title: 'A类文件输入格式',
      dataIndex: 'input_format'
    }, {
      title: '格式内容',
      dataIndex: 'output_format',
      render: function render(Comp) {
        return _react2.default.createElement(Comp, null);
      }
    }],
    example: {
      input: '00012345678',
      output: '00012345678|余额不足'
    }
  },
  批量产品订购退订与变更: {
    opertaion_type: 4,
    dataSource: [{
      order: 1,
      field: '电话号码',
      input_format: '电话号码',
      output_format: function output_format() {
        return _react2.default.createElement(
          'span',
          null,
          '\u6309A\u7C7B\u6587\u4EF6\u624B\u673A\u53F7\u7801'
        );
      }
    }, {
      order: 2,
      field: '备注',
      input_format: '-',
      output_format: function output_format() {
        return _react2.default.createElement(
          RadioGroup,
          { name: '\u6279\u91CF\u4EA7\u54C1\u8BA2\u8D2D\u9000\u8BA2\u4E0E\u53D8\u66F4' },
          _react2.default.createElement(
            _radio2.default,
            { value: 'rest' },
            '\u4F18\u60E0\u5DF2\u5230\u671F'
          ),
          _react2.default.createElement(
            _radio2.default,
            { value: 'other' },
            _react2.default.createElement(_input2.default, { placeholder: '\u5176\u4ED6', style: { width: 85 } })
          )
        );
      }
    }],
    columns: [{
      title: '序号',
      dataIndex: 'order'
    }, {
      title: '字段',
      dataIndex: 'field'
    }, {
      title: 'A类文件输入格式',
      dataIndex: 'input_format'
    }, {
      title: '输出格式',
      dataIndex: 'output_format',
      render: function render(Comp) {
        return _react2.default.createElement(Comp, null);
      }
    }],
    example: {
      input: '13912345678',
      output: '13912345678|优惠已到期'
    }
  },
  批量密码重置: {
    opertaion_type: 5,
    dataSource: [{
      order: 1,
      field: '电话号码',
      input_format: '电话号码',
      output_format: function output_format() {
        return _react2.default.createElement(
          'span',
          null,
          '\u6309A\u7C7B\u6587\u4EF6\u624B\u673A\u683C\u5F0F'
        );
      }
    }, {
      order: 2,
      field: '密码',
      input_format: '-',
      output_format: function output_format() {
        return _react2.default.createElement(_input2.default, { defaultValue: '000000' });
      }
    }],
    columns: [{
      title: '序号',
      dataIndex: 'order'
    }, {
      title: '字段',
      dataIndex: 'field'
    }, {
      title: 'A类文件输入格式',
      dataIndex: 'input_format'
    }, {
      title: '输出格式',
      dataIndex: 'output_format',
      render: function render(Comp) {
        return _react2.default.createElement(Comp, null);
      }
    }],
    example: {
      input: '13912345678',
      output: '13912345678|000000'
    }
  },
  批量产品订购退订: {
    opertaion_type: 6,
    dataSource: [{
      order: 1,
      field: '电话号码',
      input_format: '电话号码',
      output_format: function output_format() {
        return _react2.default.createElement(
          'span',
          null,
          '\u6309A\u7C7B\u6587\u4EF6\u624B\u673A\u53F7\u7801'
        );
      }
    }, {
      order: 2,
      field: '增值产品代码',
      input_format: '增值产品代码',
      output_format: function output_format() {
        return _react2.default.createElement(
          'span',
          null,
          '\u6309A\u7C7B\u6587\u4EF6\u589E\u503C\u4EA7\u54C1\u4EE3\u7801'
        );
      }
    }, {
      order: 3,
      field: '生效方式/代码',
      input_format: '-',
      output_format: function output_format() {
        return _react2.default.createElement(
          RadioGroup,
          { name: '\u751F\u6548\u65B9\u5F0F/\u4EE3\u7801' },
          _react2.default.createElement(
            _radio2.default,
            { value: '1' },
            '0'
          ),
          _react2.default.createElement(
            _radio2.default,
            { value: '2' },
            _react2.default.createElement(_input2.default, { placeholder: '\u5176\u4ED6', style: { width: 85 } })
          )
        );
      }
    }, {
      order: 4,
      field: '操作类型代码',
      input_format: '-',
      output_format: function output_format() {
        return _react2.default.createElement(
          RadioGroup,
          { name: '\u64CD\u4F5C\u7C7B\u578B\u4EE3\u7801' },
          _react2.default.createElement(
            _radio2.default,
            { value: '1' },
            'N'
          ),
          _react2.default.createElement(
            _radio2.default,
            { value: '2' },
            _react2.default.createElement(_input2.default, { placeholder: '\u5176\u4ED6', style: { width: 85 } })
          )
        );
      }
    }, {
      order: 5,
      field: '备注',
      input_format: '-',
      output_format: function output_format() {
        return _react2.default.createElement(TextArea, { rows: '2' });
      }
    }, {
      order: 6,
      field: '附加属性编码',
      input_format: '-',
      output_format: function output_format() {
        return _react2.default.createElement(
          RadioGroup,
          { name: '\u9644\u52A0\u5C5E\u6027\u7F16\u7801' },
          _react2.default.createElement(
            _radio2.default,
            { value: '1' },
            '\u7A7A'
          ),
          _react2.default.createElement(
            _radio2.default,
            { value: '2' },
            _react2.default.createElement(_input2.default, { placeholder: '\u5176\u4ED6', style: { width: 85 } })
          )
        );
      }
    }],
    columns: [{
      title: '序号',
      dataIndex: 'order'
    }, {
      title: '字段',
      dataIndex: 'field'
    }, {
      title: 'A类文件输入格式',
      dataIndex: 'input_format'
    }, {
      title: '输出格式',
      dataIndex: 'output_format',
      render: function render(Comp) {
        return _react2.default.createElement(Comp, null);
      }
    }],
    example: {
      input: '13912345678|JYPT750.180112823084.0',
      output: '13912345678|JYPT750.180112823084.0|0|N|20188642吴振明18年一季度流量（存量）营销优惠活动2月外呼套餐迁转及升级|空'
    }
  },
  批量多层产品订购退订: {
    opertaion_type: 7,
    dataSource: [{
      order: 1,
      field: '电话号码',
      input_format: '电话号码',
      output_format: function output_format() {
        return _react2.default.createElement(
          'span',
          null,
          '\u6309A\u7C7B\u6587\u4EF6\u624B\u673A\u53F7\u7801'
        );
      }
    }, {
      order: 2,
      field: '用户主体产品ID',
      input_format: '用户主体产品ID',
      output_format: function output_format() {
        return _react2.default.createElement(
          'span',
          null,
          '\u6309A\u7C7B\u6587\u4EF6\u4EA7\u54C1\u4E3B\u4F53ID'
        );
      }
    }, {
      order: 3,
      field: '产品结构描述',
      input_format: '产品结构描述',
      output_format: function output_format() {
        return _react2.default.createElement(
          'span',
          null,
          '\u6309A\u7C7B\u6587\u4EF6\u4EA7\u54C1\u7ED3\u6784\u63CF\u8FF0'
        );
      }
    }, {
      order: 4,
      field: '缴费方式',
      input_format: '-',
      output_format: function output_format() {
        return _react2.default.createElement(
          RadioGroup,
          { name: '\u7F34\u8D39\u65B9\u5F0F' },
          _react2.default.createElement(
            _radio2.default,
            { value: '1' },
            'cash'
          ),
          _react2.default.createElement(
            _radio2.default,
            { value: '2' },
            _react2.default.createElement(_input2.default, { placeholder: '\u5176\u4ED6', style: { width: 85 } })
          )
        );
      }
    }, {
      order: 5,
      field: 'POS流水号',
      input_format: '-',
      output_format: function output_format() {
        return _react2.default.createElement(_input2.default, null);
      }
    }, {
      order: 6,
      field: '开户银行',
      input_format: '-',
      output_format: function output_format() {
        return _react2.default.createElement(
          RadioGroup,
          { name: '\u5F00\u6237\u94F6\u884C' },
          _react2.default.createElement(
            _radio2.default,
            { value: '1' },
            '\u7A7A'
          ),
          _react2.default.createElement(
            _radio2.default,
            { value: '2' },
            _react2.default.createElement(_input2.default, { placeholder: '\u5176\u4ED6', style: { width: 85 } })
          )
        );
      }
    }, {
      order: 7,
      field: '支票号',
      input_format: '-',
      output_format: function output_format() {
        return _react2.default.createElement(_input2.default, null);
      }
    }, {
      order: 8,
      field: '实际收取金额',
      input_format: '-',
      output_format: function output_format() {
        return _react2.default.createElement(_input2.default, { defaultValue: '0' });
      }
    }, {
      order: 9,
      field: '备注',
      input_format: '-',
      output_format: function output_format() {
        return _react2.default.createElement(TextArea, { row: 2 });
      }
    }],
    columns: [{
      title: '序号',
      dataIndex: 'order'
    }, {
      title: '字段',
      dataIndex: 'field'
    }, {
      title: 'A类文件输入格式',
      dataIndex: 'input_format'
    }, {
      title: '输出格式',
      dataIndex: 'output_format',
      render: function render(Comp) {
        return _react2.default.createElement(Comp, null);
      }
    }],
    example: {
      input: '13912345678|JYPT750.180112822084.0',
      output: '13912345678|JYPT750.180112823084.0|Cash||||0|'
    }
  }
};

var CreateFileB = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(CreateFileB, _Component);

  function CreateFileB() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CreateFileB);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CreateFileB.__proto__ || Object.getPrototypeOf(CreateFileB)).call.apply(_ref, [this].concat(args))), _this), _this.changeSelectType = function (value) {
      _store2.default.changeType(value);
    }, _this.createB = function () {
      var _this$props$form = _this.props.form,
          getFieldsValue = _this$props$form.getFieldsValue,
          getFieldsError = _this$props$form.getFieldsError;

      var canCreate = !(0, _hasErrors2.default)(getFieldsError());
      if (canCreate) {
        var values = getFieldsValue();
        var type = _store2.default.type;
        var operation_type = allTypes[type].opertaion_type;
        var id = _this.props.id;
        var that = _this;
        console.log(typeof operation_type === 'undefined' ? 'undefined' : _typeof(operation_type));
        (0, _request2.default)({
          url: '/api/create_file_b',
          data: {
            operation_type: operation_type,
            id: id,
            word1: '',
            word2: '',
            word3: '',
            word4: '',
            word5: '',
            word6: '',
            word7: '',
            word8: '',
            word9: ''
          },
          // postType: 'formdata',
          success: function success(res) {
            _this.props.setVisible(false);
            that.fetchProcessList();
          },
          fail: function fail(data) {
            // console.log(data);
            //this.props.store.setCreateVisible(false);
          }
        });
      }
    }, _this.fetchProcessList = function () {
      (0, _request2.default)({
        url: '/api/get_file_list',
        data: {
          id: _this.props.id,
          keyword: '',
          file_type: ''
        },
        success: function success(_ref2) {
          var table = _ref2.table;

          _store4.default.setProcessList(table);
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CreateFileB, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          visible = _props.visible,
          setVisible = _props.setVisible,
          wf_id = _props.wf_id,
          form = _props.form;
      // console.log(this.props);
      // console.log(form);

      var fileBVisible = visible.file_b;
      var type = _store2.default.type;
      var _allTypes$type = allTypes[type],
          dataSource = _allTypes$type.dataSource,
          columns = _allTypes$type.columns,
          _allTypes$type$exampl = _allTypes$type.example,
          example = _allTypes$type$exampl === undefined ? {} : _allTypes$type$exampl;

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
            { type: 'primary', onClick: function onClick() {
                return _this2.createB();
              } },
            '\u786E\u8BA4'
          )
        );
      };
      return _react2.default.createElement(
        _modal2.default,
        {
          visible: fileBVisible,
          title: '\u521B\u5EFAB\u7C7B\u6587\u4EF6',
          footer: _react2.default.createElement(ModalFooter, null),
          onCancel: function onCancel() {
            return setVisible(false);
          },
          width: 800
        },
        _react2.default.createElement(
          _form2.default,
          null,
          _react2.default.createElement(
            _form2.default.Item,
            _extends({ label: '\u6548\u7387100\u7F16\u53F7' }, formProps),
            _react2.default.createElement(_input2.default, { disabled: true, defaultValue: wf_id })
          ),
          _react2.default.createElement(
            _form2.default.Item,
            _extends({ label: '\u64CD\u4F5C\u7C7B\u578B' }, formProps),
            _react2.default.createElement(
              _select2.default,
              { defaultValue: '批开停开机', onChange: this.changeSelectType },
              Object.keys(allTypes).map(function (type) {
                return _react2.default.createElement(
                  Option,
                  { value: type, key: type },
                  type
                );
              })
            )
          ),
          _react2.default.createElement(
            _form2.default.Item,
            _extends({ label: '\u8F93\u51FA\u683C\u5F0F' }, formProps),
            _react2.default.createElement(_table2.default, { dataSource: dataSource, columns: columns, pagination: false, rowKey: 'order', size: 'small' })
          ),
          _react2.default.createElement(
            _form2.default.Item,
            _extends({ label: '\u8F93\u5165\u793A\u4F8B' }, formProps),
            example.input
          ),
          _react2.default.createElement(
            _form2.default.Item,
            _extends({ label: '\u8F93\u51FA\u793A\u4F8B' }, formProps),
            example.output
          )
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return CreateFileB;
}(_react.Component)) || _class;

var _default = _form2.default.create()(CreateFileB);

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TextArea, 'TextArea', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\file_b\\file_b.js');
  reactHotLoader.register(Option, 'Option', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\file_b\\file_b.js');
  reactHotLoader.register(RadioGroup, 'RadioGroup', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\file_b\\file_b.js');
  reactHotLoader.register(formProps, 'formProps', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\file_b\\file_b.js');
  reactHotLoader.register(allTypes, 'allTypes', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\file_b\\file_b.js');
  reactHotLoader.register(CreateFileB, 'CreateFileB', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\file_b\\file_b.js');
  reactHotLoader.register(_default, 'default', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\file_b\\file_b.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./pages/file_b/store.js":
/*!*******************************!*\
  !*** ./pages/file_b/store.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2;

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

    _initDefineProp(this, 'type', _descriptor, this);

    _initDefineProp(this, 'wf_id', _descriptor2, this);
  }

  _createClass(Store, [{
    key: 'changeType',
    value: function changeType(type) {
      this.type = type;
    }
  }, {
    key: 'setWf_id',
    value: function setWf_id(wf_if) {
      this.wf_id = wf_if;
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Store;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'type', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return '批开停开机';
  }
}), _applyDecoratedDescriptor(_class.prototype, 'changeType', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'changeType'), _class.prototype), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'wf_id', [_mobx.observable], {
  enumerable: true,
  initializer: function initializer() {
    return {};
  }
}), _applyDecoratedDescriptor(_class.prototype, 'setWf_id', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setWf_id'), _class.prototype)), _class);

var _default = new Store();

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Store, 'Store', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\file_b\\store.js');
  reactHotLoader.register(_default, 'default', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\file_b\\store.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./pages/file_c/file_c.js":
/*!********************************!*\
  !*** ./pages/file_c/file_c.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _form = __webpack_require__(/*! antd/es/form */ "../node_modules/antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _modal = __webpack_require__(/*! antd/es/modal */ "../node_modules/antd/es/modal/index.js");

var _modal2 = _interopRequireDefault(_modal);

var _list = __webpack_require__(/*! antd/es/list */ "../node_modules/antd/es/list/index.js");

var _list2 = _interopRequireDefault(_list);

var _table = __webpack_require__(/*! antd/es/table */ "../node_modules/antd/es/table/index.js");

var _table2 = _interopRequireDefault(_table);

var _button = __webpack_require__(/*! antd/es/button */ "../node_modules/antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _checkbox = __webpack_require__(/*! antd/es/checkbox */ "../node_modules/antd/es/checkbox/index.js");

var _checkbox2 = _interopRequireDefault(_checkbox);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

__webpack_require__(/*! antd/es/form/style/css */ "../node_modules/antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/modal/style/css */ "../node_modules/antd/es/modal/style/css.js");

__webpack_require__(/*! antd/es/list/style/css */ "../node_modules/antd/es/list/style/css.js");

__webpack_require__(/*! antd/es/table/style/css */ "../node_modules/antd/es/table/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "../node_modules/antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/checkbox/style/css */ "../node_modules/antd/es/checkbox/style/css.js");

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _store = __webpack_require__(/*! ./store */ "./pages/file_c/store.js");

var _store2 = _interopRequireDefault(_store);

var _store3 = __webpack_require__(/*! ../process/store */ "./pages/process/store.js");

var _store4 = _interopRequireDefault(_store3);

var _mobxReact = __webpack_require__(/*! mobx-react */ "../node_modules/mobx-react/index.module.js");

var _exportFile = __webpack_require__(/*! ../../helpers/export-file */ "./helpers/export-file.js");

var _exportFile2 = _interopRequireDefault(_exportFile);

var _hasErrors = __webpack_require__(/*! ../../helpers/has-errors */ "./helpers/has-errors.js");

var _hasErrors2 = _interopRequireDefault(_hasErrors);

var _request = __webpack_require__(/*! ../../helpers/request */ "./helpers/request.js");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var file_type = ['全部', 'A类文件', 'B类文件', 'C类文件', 'D类文件', 'E类文件'];

var CreateFileC = (0, _mobxReact.observer)(_class = function (_Component) {
  _inherits(CreateFileC, _Component);

  function CreateFileC() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CreateFileC);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CreateFileC.__proto__ || Object.getPrototypeOf(CreateFileC)).call.apply(_ref, [this].concat(args))), _this), _this.columns = [{
      title: '编号',
      dataIndex: 'number'
    }, {
      title: '创建人',
      dataIndex: 'user'
    }, {
      title: '创建时间',
      dataIndex: 'create_time'
    }, {
      title: '文件类型',
      dataIndex: 'file_type',
      render: function render(text) {
        return _react2.default.createElement(
          'span',
          null,
          file_type[text]
        );
      }
    }, {
      title: '打开附件',
      dataIndex: 'file_name',
      render: function render(text, record) {
        return _react2.default.createElement(
          'span',
          null,
          _react2.default.createElement(
            'a',
            { onClick: function onClick() {
                return _this.handleExportFile(record.file_id);
              } },
            text
          )
        );
      }
    }, {
      title: '选择比对',
      dataIndex: '',
      render: function render(text, record) {
        return _react2.default.createElement(_checkbox2.default, { onChange: function onChange(e) {
            return _this.handleCheckChange(e, record);
          } });
      }
    }], _this.handleCheckChange = function (e, record) {
      console.log(record);
      var file_id = record.file_id;
      var file_ids = _store2.default.file_ids;
      // console.log(file_id);

      var allFile_Ids = Array.from(file_ids);
      if (e.target.checked) {
        allFile_Ids.push(file_id);
      } else {
        allFile_Ids.splice(allFile_Ids.indexOf(file_id), 1);
      }
      _store2.default.setFileIds(allFile_Ids);
      console.log(allFile_Ids);
      console.log(file_ids);
    }, _this.handleExportFile = function (file_id) {
      var id = _this.props.id;

      (0, _exportFile2.default)({
        url: '/api/get_file',
        data: {
          id: id,
          file_id: file_id
        }
      });
    }, _this.createC = function () {
      var _this$props$form = _this.props.form,
          getFieldsValue = _this$props$form.getFieldsValue,
          getFieldsError = _this$props$form.getFieldsError;

      var canCreate = !(0, _hasErrors2.default)(getFieldsError());
      if (canCreate) {
        var values = getFieldsValue();
        var file_ids = _store2.default.file_ids;

        var id = _this.props.id;
        var all_ids = file_ids.toString();
        // console.log(file_ids);
        // console.log(typeof (operation_type));
        (0, _request2.default)({
          url: '/api/create_file_c',
          data: {
            id: id,
            file_ids: all_ids
          },
          success: function success(res) {
            console.log(res);
            _this.fetchProcessList();
          }
        });
      }
    }, _this.fetchProcessList = function () {
      (0, _request2.default)({
        url: '/api/get_file_list',
        data: {
          id: _this.props.id,
          keyword: '',
          file_type: ''
        },
        success: function success(_ref2) {
          var table = _ref2.table;

          _store4.default.setProcessList(table);
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CreateFileC, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          visible = _props.visible,
          setVisible = _props.setVisible,
          dataSource = _props.dataSource;
      var file_id = dataSource.file_id;
      // console.log(dataSource);

      var fileCVisible = visible.file_c;
      var Footer = function Footer() {
        return _react2.default.createElement(
          'footer',
          { style: { textAlign: 'right' } },
          _react2.default.createElement(
            _button2.default,
            { type: 'primary', onClick: _this2.createC },
            '\u6267\u884C\u6BD4\u5BF9'
          )
        );
      };
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
            { type: 'primary', onClick: function onClick() {
                return setVisible(false);
              } },
            '\u786E\u8BA4'
          )
        );
      };
      return _react2.default.createElement(
        _modal2.default,
        {
          visible: fileCVisible,
          title: '\u521B\u5EFAC\u7C7B\u6587\u4EF6',
          width: 800,
          footer: _react2.default.createElement(ModalFooter, null),
          onCancel: function onCancel() {
            return setVisible(false);
          }
        },
        _react2.default.createElement(_table2.default, {
          title: function title() {
            return _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'span',
                { className: 'mr15' },
                '\u6548\u7387100\u7F16\u53F7\uFF1A',
                _this2.props.wf_id
              )
            );
          },
          dataSource: dataSource,
          columns: this.columns,
          size: 'small',
          bordered: false,
          footer: Footer,
          rowKey: 'file_id'
        }),
        _react2.default.createElement(_list2.default, {
          size: 'small',
          header: _react2.default.createElement(
            'div',
            null,
            '\u6BD4\u5BF9\u7ED3\u679C'
          ),
          bordered: false,
          locale: { emptyText: '' },
          dataSource: [],
          renderItem: function renderItem(item) {
            return _react2.default.createElement(
              _list2.default.Item,
              null,
              item
            );
          }
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return CreateFileC;
}(_react.Component)) || _class;

var _default = _form2.default.create()(CreateFileC);

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(file_type, 'file_type', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\file_c\\file_c.js');
  reactHotLoader.register(CreateFileC, 'CreateFileC', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\file_c\\file_c.js');
  reactHotLoader.register(_default, 'default', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\file_c\\file_c.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./pages/file_c/store.js":
/*!*******************************!*\
  !*** ./pages/file_c/store.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor;

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

        _initDefineProp(this, 'file_ids', _descriptor, this);
    }

    _createClass(Store, [{
        key: 'setFileIds',
        value: function setFileIds(value) {
            this.file_ids = value;
        }
        // @computed
        // get fileIds(){
        //     let allFile_ids = [];
        //     this.file_ids.map(file => {
        //         allFile_ids.push(file.file_id);
        //     });
        //     return {
        //         file_ids: Array.from(new Set(allFile_ids))
        //     }
        // }

    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return Store;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'file_ids', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return [];
    }
}), _applyDecoratedDescriptor(_class.prototype, 'setFileIds', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setFileIds'), _class.prototype)), _class);

var _default = new Store();

exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Store, 'Store', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\file_c\\store.js');
    reactHotLoader.register(_default, 'default', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\file_c\\store.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./pages/file_e/file_e.js":
/*!********************************!*\
  !*** ./pages/file_e/file_e.js ***!
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

var _table = __webpack_require__(/*! antd/es/table */ "../node_modules/antd/es/table/index.js");

var _table2 = _interopRequireDefault(_table);

var _upload = __webpack_require__(/*! antd/es/upload */ "../node_modules/antd/es/upload/index.js");

var _upload2 = _interopRequireDefault(_upload);

var _form = __webpack_require__(/*! antd/es/form */ "../node_modules/antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _button = __webpack_require__(/*! antd/es/button */ "../node_modules/antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _select = __webpack_require__(/*! antd/es/select */ "../node_modules/antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/modal/style/css */ "../node_modules/antd/es/modal/style/css.js");

__webpack_require__(/*! antd/es/table/style/css */ "../node_modules/antd/es/table/style/css.js");

__webpack_require__(/*! antd/es/upload/style/css */ "../node_modules/antd/es/upload/style/css.js");

__webpack_require__(/*! antd/es/form/style/css */ "../node_modules/antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "../node_modules/antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "../node_modules/antd/es/select/style/css.js");

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _request = __webpack_require__(/*! ../../helpers/request */ "./helpers/request.js");

var _request2 = _interopRequireDefault(_request);

var _hasErrors = __webpack_require__(/*! ../../helpers/has-errors */ "./helpers/has-errors.js");

var _hasErrors2 = _interopRequireDefault(_hasErrors);

var _store = __webpack_require__(/*! ../process/store */ "./pages/process/store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Option = _select2.default.Option;
var formProps = {
  labelCol: {
    span: 4,
    gutter: 16
  },
  wrapperCol: {
    span: 18,
    gutter: 16
  }
};
var standards = {
  input: {
    dataSource: [{
      phone: '1234567890',
      code: '-',
      operate_time: '-',
      result: 'SUCCESS',
      error: '无'
    }, {
      phone: '1234567890',
      code: '-',
      operate_time: '-',
      result: '-',
      error: '不符合条件'
    }],
    columns: [{
      title: '号码',
      dataIndex: 'phone'
    }, {
      title: '营销方案编码',
      dataIndex: 'code'
    }, {
      title: '操作时间',
      dataIndex: 'operate_time'
    }, {
      title: '结果',
      dataIndex: 'result'
    }, {
      title: '失败原因',
      dataIndex: 'error'
    }]
  },
  output: {
    dataSource: [{
      order: 1,
      phone: 1234567890,
      code: '',
      operate_time: '',
      result: '成功',
      error: '无'
    }, {
      order: 2,
      phone: 1234567890,
      code: '',
      operate_time: '',
      result: '失败',
      error: '不符合条件'
    }],
    columns: [{
      title: '序号',
      dataIndex: 'order'
    }, {
      title: '号码',
      dataIndex: 'phone'
    }, {
      title: '营销方案编码',
      dataIndex: 'code'
    }, {
      title: '操作时间',
      dataIndex: 'operate_time'
    }, {
      title: '结果',
      dataIndex: 'result'
    }, {
      title: '失败原因',
      dataIndex: 'error'
    }]
  }
};
var tableProps = {
  size: 'small',
  pagination: false
};

var CreateFileE = function (_Component) {
  _inherits(CreateFileE, _Component);

  function CreateFileE() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CreateFileE);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CreateFileE.__proto__ || Object.getPrototypeOf(CreateFileE)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      fileList: []
    }, _this.uploadProps2 = {
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
    }, _this.createE = function () {
      // console.log(this.props);
      var id = _this.props.id;
      // console.log(id);

      var _this$props$form = _this.props.form,
          getFieldsValue = _this$props$form.getFieldsValue,
          getFieldsError = _this$props$form.getFieldsError;

      var canCreate = !(0, _hasErrors2.default)(getFieldsError());
      if (canCreate) {
        var values = getFieldsValue();
        var fileList1 = values.file.fileList[0];
        var fileList2 = values.file.fileList[1];
        // let formData = new FormData();
        // formData.append('file',fileList1);
        // formData.append('file',fileList2);
        // formData.append('id',id);
        (0, _request2.default)({
          url: '/api/create_file_e',
          data: {
            id: id,
            file: values.file.fileList
          },
          postType: 'formdata',
          success: function success(data) {
            _this.props.setVisible(false);
            _this.fetchProcessList();
          },
          fail: function fail(data) {
            // console.log(data);
            // this.props.store.setCreateVisible(false);
          }
        });
      }
    }, _this.fetchProcessList = function () {
      (0, _request2.default)({
        url: '/api/get_file_list',
        data: {
          id: _this.props.id,
          keyword: '',
          file_type: ''
        },
        success: function success(_ref3) {
          var table = _ref3.table;

          _store2.default.setProcessList(table);
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CreateFileE, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          visible = _props.visible,
          setVisible = _props.setVisible,
          form = _props.form;
      // console.log(form);

      var getFieldDecorator = form.getFieldDecorator;
      var fileList = this.state.fileList;

      var fileEVisible = visible.file_e;
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
            { type: 'primary', onClick: _this2.createE },
            '\u786E\u8BA4'
          )
        );
      };
      return _react2.default.createElement(
        _modal2.default,
        { title: '\u521B\u5EFAE\u7C7B\u6587\u4EF6', visible: fileEVisible, footer: _react2.default.createElement(ModalFooter, null), onCancel: function onCancel() {
            return setVisible(false);
          }, width: 800 },
        _react2.default.createElement(
          _form2.default,
          null,
          _react2.default.createElement(
            _form2.default.Item,
            _extends({ label: '\u6587\u4EF6\u7C7B\u578B' }, formProps),
            _react2.default.createElement(
              _select2.default,
              { defaultValue: 'D\u7C7B\u6587\u4EF6' },
              _react2.default.createElement(
                Option,
                { value: 'D\u7C7B\u6587\u4EF6' },
                'D\u7C7B\u6587\u4EF6'
              )
            )
          ),
          _react2.default.createElement(
            _form2.default.Item,
            _extends({ label: _react2.default.createElement('span', null), colon: false }, formProps),
            getFieldDecorator('file', {
              rules: [{
                required: true,
                message: '请选择文件导入'
              }]
            })(_react2.default.createElement(
              _upload2.default,
              _extends({}, this.uploadProps2, { fileList: fileList }),
              _react2.default.createElement(
                _button2.default,
                null,
                '\u9009\u62E9\u6587\u4EF6'
              )
            ))
          ),
          _react2.default.createElement(
            _form2.default.Item,
            _extends({ label: '\u8F93\u5165\u683C\u5F0F' }, formProps),
            _react2.default.createElement(_table2.default, _extends({}, standards.input, tableProps))
          ),
          _react2.default.createElement(
            _form2.default.Item,
            _extends({ label: '\u8F93\u51FA\u683C\u5F0F' }, formProps),
            _react2.default.createElement(_table2.default, _extends({}, standards.output, tableProps))
          )
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return CreateFileE;
}(_react.Component);

var _default = _form2.default.create()(CreateFileE);

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Option, 'Option', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\file_e\\file_e.js');
  reactHotLoader.register(formProps, 'formProps', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\file_e\\file_e.js');
  reactHotLoader.register(standards, 'standards', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\file_e\\file_e.js');
  reactHotLoader.register(tableProps, 'tableProps', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\file_e\\file_e.js');
  reactHotLoader.register(CreateFileE, 'CreateFileE', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\file_e\\file_e.js');
  reactHotLoader.register(_default, 'default', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\file_e\\file_e.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./pages/partition_fileb/partition_fileb.js":
/*!**************************************************!*\
  !*** ./pages/partition_fileb/partition_fileb.js ***!
  \**************************************************/
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

var _table = __webpack_require__(/*! antd/es/table */ "../node_modules/antd/es/table/index.js");

var _table2 = _interopRequireDefault(_table);

var _button = __webpack_require__(/*! antd/es/button */ "../node_modules/antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _checkbox = __webpack_require__(/*! antd/es/checkbox */ "../node_modules/antd/es/checkbox/index.js");

var _checkbox2 = _interopRequireDefault(_checkbox);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/modal/style/css */ "../node_modules/antd/es/modal/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "../node_modules/antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/form/style/css */ "../node_modules/antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/table/style/css */ "../node_modules/antd/es/table/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "../node_modules/antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/checkbox/style/css */ "../node_modules/antd/es/checkbox/style/css.js");

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _request = __webpack_require__(/*! ../../helpers/request */ "./helpers/request.js");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var file_type = ['全部', 'A类文件', 'B类文件', 'C类文件', 'D类文件', 'E类文件'];

var partitionFileB = function (_Component) {
  _inherits(partitionFileB, _Component);

  function partitionFileB() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, partitionFileB);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = partitionFileB.__proto__ || Object.getPrototypeOf(partitionFileB)).call.apply(_ref, [this].concat(args))), _this), _this.columns = [{
      title: '编号',
      dataIndex: 'number'
    }, {
      title: '创建人',
      dataIndex: 'user'
    }, {
      title: '创建时间',
      dataIndex: 'create_time'
    }, {
      title: '文件类型',
      dataIndex: 'file_type',
      render: function render(text) {
        return _react2.default.createElement(
          'span',
          null,
          file_type[text]
        );
      }
    }, {
      title: '打开附件',
      dataIndex: 'file_name',
      render: function render(text, record) {
        return _react2.default.createElement(
          'span',
          null,
          _react2.default.createElement(
            'a',
            { onClick: function onClick() {
                return _this.handleExportFile(record.file_id);
              } },
            text
          )
        );
      }
    }, {
      title: '分割',
      dataIndex: '',
      render: function render(text, record) {
        return _react2.default.createElement(_checkbox2.default, { onChange: function onChange(e) {
            return _this.handleCheckChange(e, record);
          } });
      }
    }], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(partitionFileB, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          visible = _props.visible,
          setVisible = _props.setVisible,
          form = _props.form,
          dataSource = _props.dataSource;
      var isFieldTouched = form.isFieldTouched,
          getFieldError = form.getFieldError,
          getFieldDecorator = form.getFieldDecorator;
      // let partition_rowError = isFieldTouched('partition_row') && getFieldError('partition_row');

      var partition = visible.partition;
      dataSource.filter(function (item) {
        return item.file_type == 2;
      });
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
            { type: 'primary', onClick: function onClick() {
                return setVisible(false);
              } },
            '\u786E\u8BA4'
          )
        );
      };
      return _react2.default.createElement(
        _modal2.default,
        {
          visible: partition,
          title: '\u5206\u5272B\u7C7B\u6587\u4EF6',
          width: 600,
          onCancel: function onCancel() {
            return setVisible(false);
          },
          footer: _react2.default.createElement(ModalFooter, null)
        },
        _react2.default.createElement(
          _form2.default,
          null,
          _react2.default.createElement(
            _form2.default.Item,
            null,
            _react2.default.createElement(_table2.default, {
              title: function title() {
                return _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'span',
                    { className: 'mr15' },
                    '\u6548\u7387100\u7F16\u53F7\uFF1A',
                    _this2.props.wf_id
                  )
                );
              },
              dataSource: dataSource,
              columns: this.columns,
              size: 'small',
              bordered: false,
              rowKey: 'file_name'
            })
          ),
          _react2.default.createElement(
            _form2.default.Item,
            null,
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(_checkbox2.default, null),
                '\u81EA\u52A8\u5206\u5272\uFF0C\u6309\u6BCF\u4E2A\u6587\u4EF6',
                getFieldDecorator('partition_row', { initialValue: 1000, rules: [{
                    required: true,
                    message: '请输入分割行数'
                  }] })(_react2.default.createElement(_input2.default, { size: 'small', style: { width: 60 } })),
                '\u884C\u5206\u5272,',
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'span',
                  { style: { fontSize: 12 } },
                  '\uFF08\u81EA\u52A8\u5728\u6807\u9898\u540E\u7F00+_001,\u6BD4\u5982\u5173\u4E8E\u4F18\u60E0\u7528\u6237\u5957\u9910_001\uFF0C\u5173\u4E8E\u4F18\u60E0\u7528\u6237\u5957\u9910_002)'
                )
              )
            )
          )
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return partitionFileB;
}(_react.Component);

var _default = _form2.default.create()(partitionFileB);

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(file_type, 'file_type', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\partition_fileb\\partition_fileb.js');
  reactHotLoader.register(partitionFileB, 'partitionFileB', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\partition_fileb\\partition_fileb.js');
  reactHotLoader.register(_default, 'default', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\partition_fileb\\partition_fileb.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./pages/process/process.css":
/*!***********************************!*\
  !*** ./pages/process/process.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./process.css */ "../node_modules/css-loader/index.js??ref--5-1!./pages/process/process.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--5-1!./process.css */ "../node_modules/css-loader/index.js??ref--5-1!./pages/process/process.css", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./process.css */ "../node_modules/css-loader/index.js??ref--5-1!./pages/process/process.css");

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

/***/ "./pages/process/process.js":
/*!**********************************!*\
  !*** ./pages/process/process.js ***!
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

var _breadcrumb = __webpack_require__(/*! antd/es/breadcrumb */ "../node_modules/antd/es/breadcrumb/index.js");

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _button = __webpack_require__(/*! antd/es/button */ "../node_modules/antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _form = __webpack_require__(/*! antd/es/form */ "../node_modules/antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _divider = __webpack_require__(/*! antd/es/divider */ "../node_modules/antd/es/divider/index.js");

var _divider2 = _interopRequireDefault(_divider);

var _select = __webpack_require__(/*! antd/es/select */ "../node_modules/antd/es/select/index.js");

var _select2 = _interopRequireDefault(_select);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

__webpack_require__(/*! antd/es/table/style/css */ "../node_modules/antd/es/table/style/css.js");

__webpack_require__(/*! antd/es/breadcrumb/style/css */ "../node_modules/antd/es/breadcrumb/style/css.js");

__webpack_require__(/*! antd/es/button/style/css */ "../node_modules/antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/form/style/css */ "../node_modules/antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/divider/style/css */ "../node_modules/antd/es/divider/style/css.js");

__webpack_require__(/*! antd/es/select/style/css */ "../node_modules/antd/es/select/style/css.js");

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _mobxReact = __webpack_require__(/*! mobx-react */ "../node_modules/mobx-react/index.module.js");

var _store = __webpack_require__(/*! ./store */ "./pages/process/store.js");

var _store2 = _interopRequireDefault(_store);

var _process = __webpack_require__(/*! ./process.css */ "./pages/process/process.css");

var _process2 = _interopRequireDefault(_process);

var _history = __webpack_require__(/*! ../../history */ "./history.js");

var _history2 = _interopRequireDefault(_history);

var _edit_b = __webpack_require__(/*! ../edit_b/edit_b */ "./pages/edit_b/edit_b.js");

var _edit_b2 = _interopRequireDefault(_edit_b);

var _file_b = __webpack_require__(/*! ../file_b/file_b */ "./pages/file_b/file_b.js");

var _file_b2 = _interopRequireDefault(_file_b);

var _file_c = __webpack_require__(/*! ../file_c/file_c */ "./pages/file_c/file_c.js");

var _file_c2 = _interopRequireDefault(_file_c);

var _file_e = __webpack_require__(/*! ../file_e/file_e */ "./pages/file_e/file_e.js");

var _file_e2 = _interopRequireDefault(_file_e);

var _partition_fileb = __webpack_require__(/*! ../partition_fileb/partition_fileb */ "./pages/partition_fileb/partition_fileb.js");

var _partition_fileb2 = _interopRequireDefault(_partition_fileb);

var _request = __webpack_require__(/*! ../../helpers/request */ "./helpers/request.js");

var _request2 = _interopRequireDefault(_request);

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

var file_type = ['全部', 'A类文件', 'B类文件', 'C类文件', 'D类文件', 'E类文件'];

var Process = (0, _mobxReact.observer)(_class = function (_React$Component) {
    _inherits(Process, _React$Component);

    function Process() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Process);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Process.__proto__ || Object.getPrototypeOf(Process)).call.apply(_ref, [this].concat(args))), _this), _this.columns = [{
            title: '文件类型',
            dataIndex: 'file_type',
            render: function render(text) {
                return _react2.default.createElement(
                    'span',
                    null,
                    file_type[text]
                );
            }
        }, {
            title: '效率100编号',
            dataIndex: 'wf_id'
        }, {
            title: '标题',
            dataIndex: 'title'
        }, {
            title: '文件名称',
            dataIndex: 'file_id'
        }, {
            title: '创建人',
            dataIndex: 'creator'
        }, {
            title: '创建时间',
            dataIndex: 'create_time'
        }, {
            title: '备注',
            dataIndex: 'remark'
        }, {
            title: '打开附件',
            dataIndex: 'file_name',
            render: function render(text, record) {
                return _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement(
                        'a',
                        { onClick: function onClick() {
                                return _this.exportFileA(record.file_id);
                            } },
                        text
                    )
                );
            }
        }, {
            title: '操作',
            render: function render(text, record) {
                return _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement(
                        'a',
                        { onClick: function onClick() {
                                return _this.editItem(record);
                            } },
                        '\u7F16\u8F91'
                    ),
                    _react2.default.createElement(_divider2.default, { type: 'vertical' }),
                    _react2.default.createElement(
                        'a',
                        { onClick: function onClick() {
                                return _this.deleteItem(record);
                            } },
                        '\u5220\u9664'
                    )
                );
            }
        }], _this.fetchProcessList = function () {
            (0, _request2.default)({
                url: '/api/get_file_list',
                data: {
                    id: _this.props.match.params.id,
                    keyword: '',
                    file_type: ''
                },
                success: function success(_ref2) {
                    var table = _ref2.table;

                    // console.log(table);
                    _store2.default.setProcessList(table);
                }
            });
        }, _this.goBack = function (e) {
            e.preventDefault();
            _history2.default.push('/batch_process');
        }, _this.setEditVisible = function (bool) {
            _store2.default.setVisible({
                edit: bool
            });
        }, _this.setPartitionVisible = function (bool) {
            _store2.default.setVisible({
                partition: bool
            });
        }, _this.setFileBVisible = function (bool) {
            _store2.default.setVisible({
                file_b: bool
            });
        }, _this.setFileCVisible = function (bool) {
            _store2.default.setVisible({
                file_c: bool
            });
        }, _this.setFileEVisible = function (bool) {
            _store2.default.setVisible({
                file_e: bool
            });
        }, _this.patitionFileB = function () {
            _store2.default.setVisible({
                partition: true
            });
        }, _this.fileBItem = function () {
            _store2.default.setVisible({
                file_b: true
            });
        }, _this.fileCItem = function () {
            _store2.default.setVisible({
                file_c: true
            });
        }, _this.fileEItem = function () {
            _store2.default.setVisible({
                file_e: true
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
        }, _this.exportFileA = function (file_id) {
            var match = _this.props.match;
            var params = match.params;
            var id = params.id;

            (0, _exportFile2.default)({
                url: '/api/get_file',
                data: {
                    id: id,
                    file_id: file_id
                }
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Process, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var visible = _store2.default.visible,
                list = _store2.default.list,
                process_list = _store2.default.process_list,
                selectedItem = _store2.default.selectedItem;
            var file_types = list.file_types;
            // console.log(process_list);
            // let dataSource = Array.from(process_list);

            var dataSource = process_list.slice();
            var getFieldDecorator = this.props.form.getFieldDecorator;
            var match = this.props.match;

            var bool = match && match.params.id && match.params.wf_id;
            if (!bool) return null;
            var SelectBar = function SelectBar() {
                return _react2.default.createElement(
                    _form2.default,
                    { layout: 'inline', className: _process2.default.form },
                    _react2.default.createElement(
                        _form2.default.Item,
                        { label: '\u6587\u4EF6\u7C7B\u578B' },
                        getFieldDecorator('type', {
                            initialValue: '0'
                        })(_react2.default.createElement(
                            _select2.default,
                            { className: _process2.default.select },
                            _react2.default.createElement(
                                Option,
                                { value: '0' },
                                '\u5168\u90E8'
                            ),
                            file_types.map(function (b) {
                                return _react2.default.createElement(
                                    Option,
                                    { value: b, key: b },
                                    file_type[b]
                                );
                            })
                        ))
                    ),
                    _react2.default.createElement(
                        _form2.default.Item,
                        null,
                        _react2.default.createElement(
                            _button2.default,
                            { type: 'primary', onClick: function onClick() {
                                    return _this2.fileBItem();
                                } },
                            '\u521B\u5EFAB\u7C7B\u6587\u4EF6'
                        )
                    ),
                    _react2.default.createElement(
                        _form2.default.Item,
                        null,
                        _react2.default.createElement(
                            _button2.default,
                            { type: 'primary', onClick: function onClick() {
                                    return _this2.fileCItem();
                                } },
                            '\u521B\u5EFAC\u7C7B\u6587\u4EF6'
                        )
                    ),
                    _react2.default.createElement(
                        _form2.default.Item,
                        null,
                        _react2.default.createElement(
                            _button2.default,
                            { type: 'primary', onClick: function onClick() {
                                    return _this2.fileEItem();
                                } },
                            '\u521B\u5EFAE\u7C7B\u6587\u4EF6'
                        )
                    ),
                    _react2.default.createElement(
                        _form2.default.Item,
                        { className: 'fr' },
                        _react2.default.createElement(
                            _button2.default,
                            { onClick: function onClick() {
                                    return _this2.patitionFileB();
                                } },
                            '\u5206\u5272'
                        )
                    )
                );
            };
            return _react2.default.createElement(
                'div',
                { className: 'init-height' },
                _react2.default.createElement(
                    'a',
                    { onClick: this.goBack },
                    _react2.default.createElement(
                        _breadcrumb2.default.Item,
                        null,
                        '\u8FD4\u56DE'
                    )
                ),
                _react2.default.createElement(SelectBar, null),
                _react2.default.createElement(_table2.default, { dataSource: dataSource, columns: this.columns, rowKey: 'file_name' }),
                _react2.default.createElement(_edit_b2.default, { setVisible: this.setEditVisible, visible: visible, selectedItem: selectedItem, id: this.props.match.params.id }),
                _react2.default.createElement(_partition_fileb2.default, { setVisible: this.setPartitionVisible, visible: visible, dataSource: dataSource, wf_id: this.props.match.params.wf_id }),
                _react2.default.createElement(_file_b2.default, { setVisible: this.setFileBVisible, visible: visible, wf_id: this.props.match.params.wf_id, id: this.props.match.params.id }),
                _react2.default.createElement(_file_c2.default, { setVisible: this.setFileCVisible, visible: visible, dataSource: dataSource, wf_id: this.props.match.params.wf_id, id: this.props.match.params.id }),
                _react2.default.createElement(_file_e2.default, { setVisible: this.setFileEVisible, visible: visible, id: this.props.match.params.id })
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.fetchProcessList();
            // console.log(this.props);
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return Process;
}(_react2.default.Component)) || _class;

var _default = _form2.default.create()(Process);

exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Option, 'Option', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\process\\process.js');
    reactHotLoader.register(file_type, 'file_type', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\process\\process.js');
    reactHotLoader.register(Process, 'Process', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\process\\process.js');
    reactHotLoader.register(_default, 'default', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\process\\process.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./pages/process/store.js":
/*!********************************!*\
  !*** ./pages/process/store.js ***!
  \********************************/
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

        _initDefineProp(this, 'process_list', _descriptor2, this);

        _initDefineProp(this, 'selectedItem', _descriptor3, this);
    }

    _createClass(Store, [{
        key: 'setVisible',
        value: function setVisible(type) {
            this.visible = Object.assign({}, this.visible, type);
        }
    }, {
        key: 'setProcessList',
        value: function setProcessList(list) {
            this.process_list = list;
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
            var allFileTypes = [];
            this.process_list.map(function (file) {
                allFileTypes.push(file.file_type);
                // allFileIds.push(file.file_id);
            });
            return {
                file_types: Array.from(new Set(allFileTypes))
                // file_ids: Array.from(new Set(fileIds))
            };
        }
    }]);

    return Store;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'visible', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return {
            edit: false,
            file_b: false,
            file_c: false,
            file_e: false,
            partition: false
        };
    }
}), _applyDecoratedDescriptor(_class.prototype, 'setVisible', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setVisible'), _class.prototype), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'process_list', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return [];
    }
}), _applyDecoratedDescriptor(_class.prototype, 'setProcessList', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setProcessList'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'list', [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, 'list'), _class.prototype), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'selectedItem', [_mobx.observable], {
    enumerable: true,
    initializer: function initializer() {
        return {};
    }
}), _applyDecoratedDescriptor(_class.prototype, 'setSelectedItem', [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, 'setSelectedItem'), _class.prototype)), _class);

var _default = new Store();

exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Store, 'Store', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\process\\store.js');
    reactHotLoader.register(_default, 'default', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\process\\store.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvYnJlYWRjcnVtYi9CcmVhZGNydW1iLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9icmVhZGNydW1iL0JyZWFkY3J1bWJJdGVtLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9icmVhZGNydW1iL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9icmVhZGNydW1iL3N0eWxlL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvYnJlYWRjcnVtYi9zdHlsZS9pbmRleC5jc3M/YWEyZiIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvZGl2aWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvZGl2aWRlci9zdHlsZS9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2RpdmlkZXIvc3R5bGUvaW5kZXguY3NzP2ZkMDEiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2dyaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2xpc3QvSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvbGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvbGlzdC9zdHlsZS9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2xpc3Qvc3R5bGUvaW5kZXguY3NzPzgzMjciLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3Byb2dyZXNzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9wcm9ncmVzcy9wcm9ncmVzcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvcHJvZ3Jlc3Mvc3R5bGUvY3NzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9wcm9ncmVzcy9zdHlsZS9pbmRleC5jc3M/ZDFiZiIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvdXBsb2FkL0RyYWdnZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3VwbG9hZC9VcGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3VwbG9hZC9VcGxvYWRMaXN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy91cGxvYWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3VwbG9hZC9zdHlsZS9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3VwbG9hZC9zdHlsZS9pbmRleC5jc3M/N2ZhMSIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvdXBsb2FkL3V0aWxzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9icmVhZGNydW1iL3N0eWxlL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2FudGQvZXMvZGl2aWRlci9zdHlsZS9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL2xpc3Qvc3R5bGUvaW5kZXguY3NzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9wcm9ncmVzcy9zdHlsZS9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3VwbG9hZC9zdHlsZS9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZWRpdF9iL2VkaXRfYi5jc3MiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcHJvY2Vzcy9wcm9jZXNzLmNzcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fRGF0YVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1NldC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU2V0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1dlYWtNYXAuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5RmlsdGVyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUluY2x1ZGVzV2l0aC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlQdXNoLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheVNvbWUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VGaW5kSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSGFzSW4uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJbmRleE9mLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNFcXVhbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzRXF1YWxEZWVwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNNYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzTmFOLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXRlcmF0ZWUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VLZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlTWF0Y2hlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZU1hdGNoZXNQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlUHJvcGVydHlEZWVwLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVW5pcS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NyZWF0ZVNldC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZXF1YWxBcnJheXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2VxdWFsQnlUYWcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2VxdWFsT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TWF0Y2hEYXRhLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRTeW1ib2xzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzU3RyaWN0Q29tcGFyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWF0Y2hlc1N0cmljdENvbXBhcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3NldENhY2hlQWRkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRDYWNoZUhhcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RyaWN0SW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9oYXNJbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9rZXlzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vb3AuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvc3R1YkFycmF5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL3VuaXFCeS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL21vYngtcmVhY3QvaW5kZXgubW9kdWxlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmMtcHJvZ3Jlc3MvZXMvQ2lyY2xlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmMtcHJvZ3Jlc3MvZXMvTGluZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JjLXByb2dyZXNzL2VzL2VuaGFuY2VyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmMtcHJvZ3Jlc3MvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYy1wcm9ncmVzcy9lcy90eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JjLXVwbG9hZC9lcy9BamF4VXBsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYy11cGxvYWQvZXMvSWZyYW1lVXBsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYy11cGxvYWQvZXMvVXBsb2FkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmMtdXBsb2FkL2VzL2F0dHItYWNjZXB0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmMtdXBsb2FkL2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmMtdXBsb2FkL2VzL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yYy11cGxvYWQvZXMvdWlkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmMtdXBsb2FkL25vZGVfbW9kdWxlcy93YXJuaW5nL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2NvbW1vbi1mb3JtLmpzIiwid2VicGFjazovLy8uL2NvbmZpZy9jb21tb24tbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9leHBvcnQtZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2hhbmRsZS1mb3JtZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2hhbmRsZS1qc29uLmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvaGFuZGxlLXVybGVuY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2hhcy1lcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9yZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL2hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZWRpdF9iL2VkaXRfYi5jc3M/MDU1MyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9lZGl0X2IvZWRpdF9iLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2ZpbGVfYi9maWxlX2IuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZmlsZV9iL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2ZpbGVfYy9maWxlX2MuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZmlsZV9jL3N0b3JlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2ZpbGVfZS9maWxlX2UuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcGFydGl0aW9uX2ZpbGViL3BhcnRpdGlvbl9maWxlYi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9jZXNzL3Byb2Nlc3MuY3NzP2VlZjAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcHJvY2Vzcy9wcm9jZXNzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3Byb2Nlc3Mvc3RvcmUuanMiXSwibmFtZXMiOlsibGFiZWxDb2wiLCJzcGFuIiwiZ3V0dGVyIiwid3JhcHBlckNvbCIsIndpZHRoIiwibWFza0Nsb3NhYmxlIiwiZXhwb3J0RmlsZSIsInVybCIsImRhdGEiLCJ3aW5kb3ciLCJvcGVuIiwiaGFuZGxlRm9ybURhdGEiLCJyZXQiLCJGb3JtRGF0YSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJBcnJheSIsImlzQXJyYXkiLCJrIiwiZm9yRWFjaCIsImFwcGVuZCIsImQiLCJoYW5kbGVKc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsImhhbmRsZVVybEVuY29kZSIsImtleSIsImpvaW4iLCJlcnJvcnMiLCJzb21lIiwicmVxdWVzdCIsIm1ldGhvZCIsInBvc3RUeXBlIiwic3VjY2VzcyIsImZhaWwiLCJjb21wbGV0ZSIsIkVycm9yIiwieG1sIiwiWE1MSHR0cFJlcXVlc3QiLCJwb3N0RGF0YSIsInNldFJlcXVlc3RIZWFkZXIiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJjb2RlIiwidW5kZWZpbmVkIiwiZSIsInBhcnNlSW50IiwiYWxlcnQiLCJzZW5kIiwiaGlzdG9yeSIsIkVkaXRCIiwiZW5zdXJlIiwic2VsZWN0SXRlbSIsInByb3BzIiwic2VsZWN0ZWRJdGVtIiwiZ2V0RmllbGRzRXJyb3IiLCJmb3JtIiwiY2FuUG9zdCIsImVkaXRUeXBlIiwiX2VkaXQiLCJfZGVsZXRlIiwiZmlsZV9pZCIsImlkIiwiZ2V0RmllbGRzVmFsdWUiLCJyZW1hcmsiLCJjb25zb2xlIiwibG9nIiwiZmxvd19pZCIsImNsb3NlTW9kYWwiLCJmZXRjaFByb2Nlc3NMaXN0IiwicmVhc29uIiwic2V0VmlzaWJsZSIsImtleXdvcmQiLCJmaWxlX3R5cGUiLCJ0YWJsZSIsInNldFByb2Nlc3NMaXN0IiwiZXhwb3J0RmlsZUEiLCJ2aXNpYmxlIiwiaXNGaWVsZFRvdWNoZWQiLCJnZXRGaWVsZEVycm9yIiwiZ2V0RmllbGREZWNvcmF0b3IiLCJlZGl0VmlzaWJsZSIsImVkaXQiLCJ3Zl9pZCIsInRpdGxlIiwiY3JlYXRvciIsImNyZWF0ZV90aW1lIiwiZmlsZV9uYW1lIiwibW9kYWxUaXRsZSIsInJlbWFya0Vycm9yIiwicmVhc29uRXJyb3IiLCJpc0Rpc2FibGVkQnRuIiwiTW9kYWxGb290ZXIiLCJmaWxlX3R5cGVfbGlzdCIsImluaXRpYWxWYWx1ZSIsInBsMjUiLCJkaXNwbGF5IiwicnVsZXMiLCJyZXF1aXJlIiwibWVzc2FnZSIsInZhbGlkYXRlRmllbGRzIiwiY3JlYXRlIiwiVGV4dEFyZWEiLCJPcHRpb24iLCJSYWRpb0dyb3VwIiwiR3JvdXAiLCJmb3JtUHJvcHMiLCJhbGxUeXBlcyIsIuaJueW8gOWBnOW8gOacuiIsIm9wZXJ0YWlvbl90eXBlIiwiZGF0YVNvdXJjZSIsIm9yZGVyIiwiZmllbGQiLCJpbnB1dF9mb3JtYXQiLCJvdXRwdXRfZm9ybWF0IiwiY29sdW1ucyIsImRhdGFJbmRleCIsInJlbmRlciIsImV4YW1wbGUiLCJpbnB1dCIsIm91dHB1dCIsIuaJuemHj+WunuWQjeeZu+iusCIsIuaJuemHj+iuouWNleWbnumAgCIsIuaJuemHj+S6p+WTgeiuoui0remAgOiuouS4juWPmOabtCIsIuaJuemHj+WvhueggemHjee9riIsIuaJuemHj+S6p+WTgeiuoui0remAgOiuoiIsIuaJuemHj+WkmuWxguS6p+WTgeiuoui0remAgOiuoiIsIkNyZWF0ZUZpbGVCIiwiY2hhbmdlU2VsZWN0VHlwZSIsImNoYW5nZVR5cGUiLCJ2YWx1ZSIsImNyZWF0ZUIiLCJjYW5DcmVhdGUiLCJ2YWx1ZXMiLCJ0eXBlIiwib3BlcmF0aW9uX3R5cGUiLCJ0aGF0Iiwid29yZDEiLCJ3b3JkMiIsIndvcmQzIiwid29yZDQiLCJ3b3JkNSIsIndvcmQ2Iiwid29yZDciLCJ3b3JkOCIsIndvcmQ5IiwiZmlsZUJWaXNpYmxlIiwiZmlsZV9iIiwiU3RvcmUiLCJ3Zl9pZiIsIkNyZWF0ZUZpbGVDIiwidGV4dCIsInJlY29yZCIsImhhbmRsZUV4cG9ydEZpbGUiLCJoYW5kbGVDaGVja0NoYW5nZSIsImZpbGVfaWRzIiwiYWxsRmlsZV9JZHMiLCJmcm9tIiwidGFyZ2V0IiwiY2hlY2tlZCIsInB1c2giLCJzcGxpY2UiLCJpbmRleE9mIiwic2V0RmlsZUlkcyIsImNyZWF0ZUMiLCJhbGxfaWRzIiwidG9TdHJpbmciLCJyZXMiLCJmaWxlQ1Zpc2libGUiLCJmaWxlX2MiLCJGb290ZXIiLCJ0ZXh0QWxpZ24iLCJlbXB0eVRleHQiLCJpdGVtIiwic3RhbmRhcmRzIiwicGhvbmUiLCJvcGVyYXRlX3RpbWUiLCJyZXN1bHQiLCJlcnJvciIsInRhYmxlUHJvcHMiLCJzaXplIiwicGFnaW5hdGlvbiIsIkNyZWF0ZUZpbGVFIiwic3RhdGUiLCJmaWxlTGlzdCIsInVwbG9hZFByb3BzMiIsIm9uQ2hhbmdlIiwic2V0U3RhdGUiLCJiZWZvcmVVcGxvYWQiLCJvblJlbW92ZSIsInNldEZpZWxkc1ZhbHVlIiwiZmlsZSIsImNyZWF0ZUUiLCJmaWxlTGlzdDEiLCJmaWxlTGlzdDIiLCJmaWxlRVZpc2libGUiLCJmaWxlX2UiLCJyZXF1aXJlZCIsInBhcnRpdGlvbkZpbGVCIiwicGFydGl0aW9uIiwiZmlsdGVyIiwiZm9udFNpemUiLCJQcm9jZXNzIiwiZWRpdEl0ZW0iLCJkZWxldGVJdGVtIiwibWF0Y2giLCJwYXJhbXMiLCJnb0JhY2siLCJwcmV2ZW50RGVmYXVsdCIsInNldEVkaXRWaXNpYmxlIiwiYm9vbCIsInNldFBhcnRpdGlvblZpc2libGUiLCJzZXRGaWxlQlZpc2libGUiLCJzZXRGaWxlQ1Zpc2libGUiLCJzZXRGaWxlRVZpc2libGUiLCJwYXRpdGlvbkZpbGVCIiwiZmlsZUJJdGVtIiwiZmlsZUNJdGVtIiwiZmlsZUVJdGVtIiwic2V0U2VsZWN0ZWRJdGVtIiwiYXNzaWduIiwibGlzdCIsInByb2Nlc3NfbGlzdCIsImZpbGVfdHlwZXMiLCJzbGljZSIsIlNlbGVjdEJhciIsInNlbGVjdCIsImIiLCJDb21wb25lbnQiLCJhbGxGaWxlVHlwZXMiLCJTZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUywrQkFBK0I7QUFDeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwwREFBMEQ7QUFDbkY7QUFDQTtB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O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdCQUF3Qjs7QUFFeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7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QUFMLEdBQWNxRyxPQUFkLEM7Ozs7Ozs7Ozs7Ozs7OzRCQXpNVG5HLE07NEJBU0Y5QixTOzRCQUVFaUksTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDTXRELEs7Ozs7Ozs7Ozs7Ozs7bUNBU1NkLEksRUFBSztBQUNaLGlCQUFLekQsT0FBTCxHQUFlbkUsT0FBT2tOLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQUsvSSxPQUF2QixFQUFnQ3lELElBQWhDLENBQWY7QUFDSDs7O3VDQUdZdUYsSSxFQUFLO0FBQ2xCLGlCQUFLQyxZQUFMLEdBQW9CRCxJQUFwQjtBQUNEOzs7d0NBaUJpQmhELEksRUFBSztBQUNuQixpQkFBS3ZILFlBQUwsR0FBb0J1SCxJQUFwQjtBQUNEOzs7Ozs7Ozs0QkFqQk87QUFDTixnQkFBSXdELGVBQWUsRUFBbkI7QUFDQSxpQkFBS1AsWUFBTCxDQUFrQmxOLEdBQWxCLENBQXNCLGdCQUFRO0FBQzFCeU4sNkJBQWFyRSxJQUFiLENBQWtCK0IsS0FBS3RILFNBQXZCO0FBQ0E7QUFDSCxhQUhEO0FBSUEsbUJBQU87QUFDTHNKLDRCQUFZbE4sTUFBTWdKLElBQU4sQ0FBVyxJQUFJeUUsR0FBSixDQUFRRCxZQUFSLENBQVg7QUFDVjtBQUZHLGFBQVA7QUFJSDs7Ozs7OztlQTNCdUI7QUFDbEJuSixrQkFBTSxLQURZO0FBRWxCaUUsb0JBQVEsS0FGVTtBQUdsQnNCLG9CQUFPLEtBSFc7QUFJbEIyQixvQkFBTyxLQUpXO0FBS2xCRyx1QkFBVTtBQUxRLFM7Ozs7O2VBV0csRTs7Ozs7ZUFpQkEsRTs7OztlQVFkLElBQUluRCxLQUFKLEU7Ozs7Ozs7Ozs7Ozs7OzRCQXJDVEEsSyIsImZpbGUiOiIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjbG9uZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2FybmluZyBmcm9tICcuLi9fdXRpbC93YXJuaW5nJztcbmltcG9ydCBCcmVhZGNydW1iSXRlbSBmcm9tICcuL0JyZWFkY3J1bWJJdGVtJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuZnVuY3Rpb24gZ2V0QnJlYWRjcnVtYk5hbWUocm91dGUsIHBhcmFtcykge1xuICAgIGlmICghcm91dGUuYnJlYWRjcnVtYk5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciBwYXJhbXNLZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKS5qb2luKCd8Jyk7XG4gICAgdmFyIG5hbWUgPSByb3V0ZS5icmVhZGNydW1iTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoJzooJyArIHBhcmFtc0tleXMgKyAnKScsICdnJyksIGZ1bmN0aW9uIChyZXBsYWNlbWVudCwga2V5KSB7XG4gICAgICAgIHJldHVybiBwYXJhbXNba2V5XSB8fCByZXBsYWNlbWVudDtcbiAgICB9KTtcbiAgICByZXR1cm4gbmFtZTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRJdGVtUmVuZGVyKHJvdXRlLCBwYXJhbXMsIHJvdXRlcywgcGF0aHMpIHtcbiAgICB2YXIgaXNMYXN0SXRlbSA9IHJvdXRlcy5pbmRleE9mKHJvdXRlKSA9PT0gcm91dGVzLmxlbmd0aCAtIDE7XG4gICAgdmFyIG5hbWUgPSBnZXRCcmVhZGNydW1iTmFtZShyb3V0ZSwgcGFyYW1zKTtcbiAgICByZXR1cm4gaXNMYXN0SXRlbSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdzcGFuJyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgbmFtZVxuICAgICkgOiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnYScsXG4gICAgICAgIHsgaHJlZjogJyMvJyArIHBhdGhzLmpvaW4oJy8nKSB9LFxuICAgICAgICBuYW1lXG4gICAgKTtcbn1cblxudmFyIEJyZWFkY3J1bWIgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhCcmVhZGNydW1iLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIEJyZWFkY3J1bWIoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCcmVhZGNydW1iKTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEJyZWFkY3J1bWIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihCcmVhZGNydW1iKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEJyZWFkY3J1bWIsIFt7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgICAgIHdhcm5pbmcoISgnbGlua1JlbmRlcicgaW4gcHJvcHMgfHwgJ25hbWVSZW5kZXInIGluIHByb3BzKSwgJ2BsaW5rUmVuZGVyYCBhbmQgYG5hbWVSZW5kZXJgIGFyZSByZW1vdmVkLCBwbGVhc2UgdXNlIGBpdGVtUmVuZGVyYCBpbnN0ZWFkLCAnICsgJ3NlZTogaHR0cHM6Ly91LmFudC5kZXNpZ24vaXRlbS1yZW5kZXIuJyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgY3J1bWJzID0gdm9pZCAwO1xuICAgICAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgc2VwYXJhdG9yID0gX3Byb3BzLnNlcGFyYXRvcixcbiAgICAgICAgICAgICAgICBwcmVmaXhDbHMgPSBfcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICAgICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgcm91dGVzID0gX3Byb3BzLnJvdXRlcyxcbiAgICAgICAgICAgICAgICBfcHJvcHMkcGFyYW1zID0gX3Byb3BzLnBhcmFtcyxcbiAgICAgICAgICAgICAgICBwYXJhbXMgPSBfcHJvcHMkcGFyYW1zID09PSB1bmRlZmluZWQgPyB7fSA6IF9wcm9wcyRwYXJhbXMsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgICAgICAgX3Byb3BzJGl0ZW1SZW5kZXIgPSBfcHJvcHMuaXRlbVJlbmRlcixcbiAgICAgICAgICAgICAgICBpdGVtUmVuZGVyID0gX3Byb3BzJGl0ZW1SZW5kZXIgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRJdGVtUmVuZGVyIDogX3Byb3BzJGl0ZW1SZW5kZXI7XG5cbiAgICAgICAgICAgIGlmIChyb3V0ZXMgJiYgcm91dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgcGF0aHMgPSBbXTtcbiAgICAgICAgICAgICAgICBjcnVtYnMgPSByb3V0ZXMubWFwKGZ1bmN0aW9uIChyb3V0ZSkge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZS5wYXRoID0gcm91dGUucGF0aCB8fCAnJztcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhdGggPSByb3V0ZS5wYXRoLnJlcGxhY2UoL15cXC8vLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoID0gcGF0aC5yZXBsYWNlKCc6JyArIGtleSwgcGFyYW1zW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhzLnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICBCcmVhZGNydW1iSXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc2VwYXJhdG9yOiBzZXBhcmF0b3IsIGtleTogcm91dGUuYnJlYWRjcnVtYk5hbWUgfHwgcGF0aCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVJlbmRlcihyb3V0ZSwgcGFyYW1zLCByb3V0ZXMsIHBhdGhzKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGNydW1icyA9IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2FybmluZyhlbGVtZW50LnR5cGUgJiYgZWxlbWVudC50eXBlLl9fQU5UX0JSRUFEQ1JVTUJfSVRFTSwgJ0JyZWFkY3J1bWIgb25seSBhY2NlcHRzIEJyZWFkY3J1bWIuSXRlbSBhcyBpdFxcJ3MgY2hpbGRyZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNsb25lRWxlbWVudChlbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXBhcmF0b3I6IHNlcGFyYXRvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbGFzc05hbWUsIHByZWZpeENscyksIHN0eWxlOiBzdHlsZSB9LFxuICAgICAgICAgICAgICAgIGNydW1ic1xuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBCcmVhZGNydW1iO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBCcmVhZGNydW1iO1xuXG5CcmVhZGNydW1iLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBwcmVmaXhDbHM6ICdhbnQtYnJlYWRjcnVtYicsXG4gICAgc2VwYXJhdG9yOiAnLydcbn07XG5CcmVhZGNydW1iLnByb3BUeXBlcyA9IHtcbiAgICBwcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2VwYXJhdG9yOiBQcm9wVHlwZXMubm9kZSxcbiAgICByb3V0ZXM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBwYXJhbXM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgbGlua1JlbmRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgbmFtZVJlbmRlcjogUHJvcFR5cGVzLmZ1bmNcbn07IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG52YXIgX19yZXN0ID0gdGhpcyAmJiB0aGlzLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gICAgfWlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCkgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgfXJldHVybiB0O1xufTtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbnZhciBCcmVhZGNydW1iSXRlbSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKEJyZWFkY3J1bWJJdGVtLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIEJyZWFkY3J1bWJJdGVtKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQnJlYWRjcnVtYkl0ZW0pO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQnJlYWRjcnVtYkl0ZW0uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihCcmVhZGNydW1iSXRlbSkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhCcmVhZGNydW1iSXRlbSwgW3tcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgcHJlZml4Q2xzID0gX2EucHJlZml4Q2xzLFxuICAgICAgICAgICAgICAgIHNlcGFyYXRvciA9IF9hLnNlcGFyYXRvcixcbiAgICAgICAgICAgICAgICBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuLFxuICAgICAgICAgICAgICAgIHJlc3RQcm9wcyA9IF9fcmVzdChfYSwgW1wicHJlZml4Q2xzXCIsIFwic2VwYXJhdG9yXCIsIFwiY2hpbGRyZW5cIl0pO1xuICAgICAgICAgICAgdmFyIGxpbmsgPSB2b2lkIDA7XG4gICAgICAgICAgICBpZiAoJ2hyZWYnIGluIHRoaXMucHJvcHMpIHtcbiAgICAgICAgICAgICAgICBsaW5rID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2EnLFxuICAgICAgICAgICAgICAgICAgICBfZXh0ZW5kcyh7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1saW5rJyB9LCByZXN0UHJvcHMpLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxpbmsgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgIF9leHRlbmRzKHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWxpbmsnIH0sIHJlc3RQcm9wcyksXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGxpbmssXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1zZXBhcmF0b3InIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXBhcmF0b3JcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBCcmVhZGNydW1iSXRlbTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgQnJlYWRjcnVtYkl0ZW07XG5cbkJyZWFkY3J1bWJJdGVtLl9fQU5UX0JSRUFEQ1JVTUJfSVRFTSA9IHRydWU7XG5CcmVhZGNydW1iSXRlbS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcHJlZml4Q2xzOiAnYW50LWJyZWFkY3J1bWInLFxuICAgIHNlcGFyYXRvcjogJy8nXG59O1xuQnJlYWRjcnVtYkl0ZW0ucHJvcFR5cGVzID0ge1xuICAgIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZXBhcmF0b3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5lbGVtZW50XSksXG4gICAgaHJlZjogUHJvcFR5cGVzLnN0cmluZ1xufTsiLCJpbXBvcnQgQnJlYWRjcnVtYiBmcm9tICcuL0JyZWFkY3J1bWInO1xuaW1wb3J0IEJyZWFkY3J1bWJJdGVtIGZyb20gJy4vQnJlYWRjcnVtYkl0ZW0nO1xuQnJlYWRjcnVtYi5JdGVtID0gQnJlYWRjcnVtYkl0ZW07XG5leHBvcnQgZGVmYXVsdCBCcmVhZGNydW1iOyIsImltcG9ydCAnLi4vLi4vc3R5bGUvaW5kZXguY3NzJztcbmltcG9ydCAnLi9pbmRleC5jc3MnOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXguY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXguY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5JztcbnZhciBfX3Jlc3QgPSB0aGlzICYmIHRoaXMuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgICB9aWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgICB9cmV0dXJuIHQ7XG59O1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEaXZpZGVyKF9hKSB7XG4gICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgdmFyIF9hJHByZWZpeENscyA9IF9hLnByZWZpeENscyxcbiAgICAgICAgcHJlZml4Q2xzID0gX2EkcHJlZml4Q2xzID09PSB1bmRlZmluZWQgPyAnYW50JyA6IF9hJHByZWZpeENscyxcbiAgICAgICAgX2EkdHlwZSA9IF9hLnR5cGUsXG4gICAgICAgIHR5cGUgPSBfYSR0eXBlID09PSB1bmRlZmluZWQgPyAnaG9yaXpvbnRhbCcgOiBfYSR0eXBlLFxuICAgICAgICBfYSRvcmllbnRhdGlvbiA9IF9hLm9yaWVudGF0aW9uLFxuICAgICAgICBvcmllbnRhdGlvbiA9IF9hJG9yaWVudGF0aW9uID09PSB1bmRlZmluZWQgPyAnJyA6IF9hJG9yaWVudGF0aW9uLFxuICAgICAgICBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsXG4gICAgICAgIGNoaWxkcmVuID0gX2EuY2hpbGRyZW4sXG4gICAgICAgIGRhc2hlZCA9IF9hLmRhc2hlZCxcbiAgICAgICAgcmVzdFByb3BzID0gX19yZXN0KF9hLCBbXCJwcmVmaXhDbHNcIiwgXCJ0eXBlXCIsIFwib3JpZW50YXRpb25cIiwgXCJjbGFzc05hbWVcIiwgXCJjaGlsZHJlblwiLCBcImRhc2hlZFwiXSk7XG5cbiAgICB2YXIgb3JpZW50YXRpb25QcmVmaXggPSBvcmllbnRhdGlvbi5sZW5ndGggPiAwID8gJy0nICsgb3JpZW50YXRpb24gOiBvcmllbnRhdGlvbjtcbiAgICB2YXIgY2xhc3NTdHJpbmcgPSBjbGFzc05hbWVzKGNsYXNzTmFtZSwgcHJlZml4Q2xzICsgJy1kaXZpZGVyJywgcHJlZml4Q2xzICsgJy1kaXZpZGVyLScgKyB0eXBlLCAoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLWRpdmlkZXItd2l0aC10ZXh0JyArIG9yaWVudGF0aW9uUHJlZml4LCBjaGlsZHJlbiksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy1kaXZpZGVyLWRhc2hlZCcsICEhZGFzaGVkKSwgX2NsYXNzTmFtZXMpKTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIF9leHRlbmRzKHsgY2xhc3NOYW1lOiBjbGFzc1N0cmluZyB9LCByZXN0UHJvcHMpLFxuICAgICAgICBjaGlsZHJlbiAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ3NwYW4nLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctZGl2aWRlci1pbm5lci10ZXh0JyB9LFxuICAgICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgKVxuICAgICk7XG59IiwiaW1wb3J0ICcuLi8uLi9zdHlsZS9pbmRleC5jc3MnO1xuaW1wb3J0ICcuL2luZGV4LmNzcyc7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgUm93IGZyb20gJy4vcm93JztcbmltcG9ydCBDb2wgZnJvbSAnLi9jb2wnO1xuZXhwb3J0IHsgUm93LCBDb2wgfTsiLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbnZhciBfX3Jlc3QgPSB0aGlzICYmIHRoaXMuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgICB9aWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgICB9cmV0dXJuIHQ7XG59O1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgQ29sIH0gZnJvbSAnLi4vZ3JpZCc7XG5leHBvcnQgdmFyIE1ldGEgPSBmdW5jdGlvbiBNZXRhKHByb3BzKSB7XG4gICAgdmFyIF9wcm9wcyRwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgIHByZWZpeENscyA9IF9wcm9wcyRwcmVmaXhDbHMgPT09IHVuZGVmaW5lZCA/ICdhbnQtbGlzdCcgOiBfcHJvcHMkcHJlZml4Q2xzLFxuICAgICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGF2YXRhciA9IHByb3BzLmF2YXRhcixcbiAgICAgICAgdGl0bGUgPSBwcm9wcy50aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgb3RoZXJzID0gX19yZXN0KHByb3BzLCBbXCJwcmVmaXhDbHNcIiwgXCJjbGFzc05hbWVcIiwgXCJhdmF0YXJcIiwgXCJ0aXRsZVwiLCBcImRlc2NyaXB0aW9uXCJdKTtcblxuICAgIHZhciBjbGFzc1N0cmluZyA9IGNsYXNzTmFtZXMocHJlZml4Q2xzICsgJy1pdGVtLW1ldGEnLCBjbGFzc05hbWUpO1xuICAgIHZhciBjb250ZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWl0ZW0tbWV0YS1jb250ZW50JyB9LFxuICAgICAgICB0aXRsZSAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2g0JyxcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWl0ZW0tbWV0YS10aXRsZScgfSxcbiAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICksXG4gICAgICAgIGRlc2NyaXB0aW9uICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWl0ZW0tbWV0YS1kZXNjcmlwdGlvbicgfSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgIClcbiAgICApO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgX2V4dGVuZHMoe30sIG90aGVycywgeyBjbGFzc05hbWU6IGNsYXNzU3RyaW5nIH0pLFxuICAgICAgICBhdmF0YXIgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctaXRlbS1tZXRhLWF2YXRhcicgfSxcbiAgICAgICAgICAgIGF2YXRhclxuICAgICAgICApLFxuICAgICAgICAodGl0bGUgfHwgZGVzY3JpcHRpb24pICYmIGNvbnRlbnRcbiAgICApO1xufTtcbmZ1bmN0aW9uIGdldEdyaWQoZ3JpZCwgdCkge1xuICAgIHJldHVybiBncmlkW3RdICYmIE1hdGguZmxvb3IoMjQgLyBncmlkW3RdKTtcbn1cbnZhciBHcmlkQ29sdW1ucyA9IFsnJywgMSwgMiwgMywgNCwgNiwgOCwgMTIsIDI0XTtcblxudmFyIEl0ZW0gPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhJdGVtLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIEl0ZW0oKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJdGVtKTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEl0ZW0uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihJdGVtKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKEl0ZW0sIFt7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgZ3JpZCA9IHRoaXMuY29udGV4dC5ncmlkO1xuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBfYSRwcmVmaXhDbHMgPSBfYS5wcmVmaXhDbHMsXG4gICAgICAgICAgICAgICAgcHJlZml4Q2xzID0gX2EkcHJlZml4Q2xzID09PSB1bmRlZmluZWQgPyAnYW50LWxpc3QnIDogX2EkcHJlZml4Q2xzLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuID0gX2EuY2hpbGRyZW4sXG4gICAgICAgICAgICAgICAgYWN0aW9ucyA9IF9hLmFjdGlvbnMsXG4gICAgICAgICAgICAgICAgZXh0cmEgPSBfYS5leHRyYSxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgb3RoZXJzID0gX19yZXN0KF9hLCBbXCJwcmVmaXhDbHNcIiwgXCJjaGlsZHJlblwiLCBcImFjdGlvbnNcIiwgXCJleHRyYVwiLCBcImNsYXNzTmFtZVwiXSk7XG4gICAgICAgICAgICB2YXIgY2xhc3NTdHJpbmcgPSBjbGFzc05hbWVzKHByZWZpeENscyArICctaXRlbScsIGNsYXNzTmFtZSk7XG4gICAgICAgICAgICB2YXIgbWV0YUNvbnRlbnQgPSBbXTtcbiAgICAgICAgICAgIHZhciBvdGhlckNvbnRlbnQgPSBbXTtcbiAgICAgICAgICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC50eXBlICYmIGVsZW1lbnQudHlwZSA9PT0gTWV0YSkge1xuICAgICAgICAgICAgICAgICAgICBtZXRhQ29udGVudC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG90aGVyQ29udGVudC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnRDbGFzc1N0cmluZyA9IGNsYXNzTmFtZXMocHJlZml4Q2xzICsgJy1pdGVtLWNvbnRlbnQnLCBfZGVmaW5lUHJvcGVydHkoe30sIHByZWZpeENscyArICctaXRlbS1jb250ZW50LXNpbmdsZScsIG1ldGFDb250ZW50Lmxlbmd0aCA8IDEpKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gb3RoZXJDb250ZW50Lmxlbmd0aCA+IDAgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBjb250ZW50Q2xhc3NTdHJpbmcgfSxcbiAgICAgICAgICAgICAgICBvdGhlckNvbnRlbnRcbiAgICAgICAgICAgICkgOiBudWxsO1xuICAgICAgICAgICAgdmFyIGFjdGlvbnNDb250ZW50ID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKGFjdGlvbnMgJiYgYWN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFjdGlvbnNDb250ZW50SXRlbSA9IGZ1bmN0aW9uIGFjdGlvbnNDb250ZW50SXRlbShhY3Rpb24sIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnbGknLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IHByZWZpeENscyArICctaXRlbS1hY3Rpb24tJyArIGkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgIT09IGFjdGlvbnMubGVuZ3RoIC0gMSAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KCdlbScsIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWl0ZW0tYWN0aW9uLXNwbGl0JyB9KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYWN0aW9uc0NvbnRlbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAndWwnLFxuICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1pdGVtLWFjdGlvbicgfSxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucy5tYXAoZnVuY3Rpb24gKGFjdGlvbiwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnNDb250ZW50SXRlbShhY3Rpb24sIGkpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZXh0cmFDb250ZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1pdGVtLWV4dHJhLXdyYXAnIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWl0ZW0tbWFpbicgfSxcbiAgICAgICAgICAgICAgICAgICAgbWV0YUNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnNDb250ZW50XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctaXRlbS1leHRyYScgfSxcbiAgICAgICAgICAgICAgICAgICAgZXh0cmFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdmFyIG1haW5Db250ZW50ID0gZ3JpZCA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgQ29sLFxuICAgICAgICAgICAgICAgIHsgc3BhbjogZ2V0R3JpZChncmlkLCAnY29sdW1uJyksIHhzOiBnZXRHcmlkKGdyaWQsICd4cycpLCBzbTogZ2V0R3JpZChncmlkLCAnc20nKSwgbWQ6IGdldEdyaWQoZ3JpZCwgJ21kJyksIGxnOiBnZXRHcmlkKGdyaWQsICdsZycpLCB4bDogZ2V0R3JpZChncmlkLCAneGwnKSwgeHhsOiBnZXRHcmlkKGdyaWQsICd4eGwnKSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICBfZXh0ZW5kcyh7fSwgb3RoZXJzLCB7IGNsYXNzTmFtZTogY2xhc3NTdHJpbmcgfSksXG4gICAgICAgICAgICAgICAgICAgIGV4dHJhICYmIGV4dHJhQ29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgIWV4dHJhICYmIG1ldGFDb250ZW50LFxuICAgICAgICAgICAgICAgICAgICAhZXh0cmEgJiYgY29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgIWV4dHJhICYmIGFjdGlvbnNDb250ZW50XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgX2V4dGVuZHMoe30sIG90aGVycywgeyBjbGFzc05hbWU6IGNsYXNzU3RyaW5nIH0pLFxuICAgICAgICAgICAgICAgIGV4dHJhICYmIGV4dHJhQ29udGVudCxcbiAgICAgICAgICAgICAgICAhZXh0cmEgJiYgbWV0YUNvbnRlbnQsXG4gICAgICAgICAgICAgICAgIWV4dHJhICYmIGNvbnRlbnQsXG4gICAgICAgICAgICAgICAgIWV4dHJhICYmIGFjdGlvbnNDb250ZW50XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIG1haW5Db250ZW50O1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIEl0ZW07XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW07XG5cbkl0ZW0uTWV0YSA9IE1ldGE7XG5JdGVtLnByb3BUeXBlcyA9IHtcbiAgICBjb2x1bW46IFByb3BUeXBlcy5vbmVPZihHcmlkQ29sdW1ucyksXG4gICAgeHM6IFByb3BUeXBlcy5vbmVPZihHcmlkQ29sdW1ucyksXG4gICAgc206IFByb3BUeXBlcy5vbmVPZihHcmlkQ29sdW1ucyksXG4gICAgbWQ6IFByb3BUeXBlcy5vbmVPZihHcmlkQ29sdW1ucyksXG4gICAgbGc6IFByb3BUeXBlcy5vbmVPZihHcmlkQ29sdW1ucyksXG4gICAgeGw6IFByb3BUeXBlcy5vbmVPZihHcmlkQ29sdW1ucyksXG4gICAgeHhsOiBQcm9wVHlwZXMub25lT2YoR3JpZENvbHVtbnMpXG59O1xuSXRlbS5jb250ZXh0VHlwZXMgPSB7XG4gICAgZ3JpZDogUHJvcFR5cGVzLmFueVxufTsiLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbnZhciBfX3Jlc3QgPSB0aGlzICYmIHRoaXMuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgICB9aWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgICB9cmV0dXJuIHQ7XG59O1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IExvY2FsZVJlY2VpdmVyIGZyb20gJy4uL2xvY2FsZS1wcm92aWRlci9Mb2NhbGVSZWNlaXZlcic7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tICcuLi9sb2NhbGUtcHJvdmlkZXIvZGVmYXVsdCc7XG5pbXBvcnQgU3BpbiBmcm9tICcuLi9zcGluJztcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4uL3BhZ2luYXRpb24nO1xuaW1wb3J0IHsgUm93IH0gZnJvbSAnLi4vZ3JpZCc7XG5pbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nO1xuXG52YXIgTGlzdCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKExpc3QsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gTGlzdCgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExpc3QpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChMaXN0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTGlzdCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXG4gICAgICAgIF90aGlzLmtleXMgPSB7fTtcbiAgICAgICAgX3RoaXMucmVuZGVySXRlbSA9IGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZSA9IF90aGlzJHByb3BzLmRhdGFTb3VyY2UsXG4gICAgICAgICAgICAgICAgcmVuZGVySXRlbSA9IF90aGlzJHByb3BzLnJlbmRlckl0ZW0sXG4gICAgICAgICAgICAgICAgcm93S2V5ID0gX3RoaXMkcHJvcHMucm93S2V5O1xuXG4gICAgICAgICAgICB2YXIga2V5ID0gdm9pZCAwO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByb3dLZXkgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBrZXkgPSByb3dLZXkoZGF0YVNvdXJjZVtpbmRleF0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygcm93S2V5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGtleSA9IGRhdGFTb3VyY2Vbcm93S2V5XTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAga2V5ID0gZGF0YVNvdXJjZS5rZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgICAgIGtleSA9ICdsaXN0LWl0ZW0tJyArIGluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMua2V5c1tpbmRleF0gPSBrZXk7XG4gICAgICAgICAgICByZXR1cm4gcmVuZGVySXRlbShpdGVtLCBpbmRleCk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLnJlbmRlckVtcHR5ID0gZnVuY3Rpb24gKGNvbnRleHRMb2NhbGUpIHtcbiAgICAgICAgICAgIHZhciBsb2NhbGUgPSBfZXh0ZW5kcyh7fSwgY29udGV4dExvY2FsZSwgX3RoaXMucHJvcHMubG9jYWxlKTtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBfdGhpcy5wcm9wcy5wcmVmaXhDbHMgKyAnLWVtcHR5LXRleHQnIH0sXG4gICAgICAgICAgICAgICAgbG9jYWxlLmVtcHR5VGV4dFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhMaXN0LCBbe1xuICAgICAgICBrZXk6ICdnZXRDaGlsZENvbnRleHQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBncmlkOiB0aGlzLnByb3BzLmdyaWRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2lzU29tZXRoaW5nQWZ0ZXJMYXN0VHRlbScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBpc1NvbWV0aGluZ0FmdGVyTGFzdFR0ZW0oKSB7XG4gICAgICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBsb2FkTW9yZSA9IF9wcm9wcy5sb2FkTW9yZSxcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uID0gX3Byb3BzLnBhZ2luYXRpb24sXG4gICAgICAgICAgICAgICAgZm9vdGVyID0gX3Byb3BzLmZvb3RlcjtcblxuICAgICAgICAgICAgcmV0dXJuICEhKGxvYWRNb3JlIHx8IHBhZ2luYXRpb24gfHwgZm9vdGVyKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHZhciBfY2xhc3NOYW1lcyxcbiAgICAgICAgICAgICAgICBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIGJvcmRlcmVkID0gX2EuYm9yZGVyZWQsXG4gICAgICAgICAgICAgICAgc3BsaXQgPSBfYS5zcGxpdCxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbixcbiAgICAgICAgICAgICAgICBpdGVtTGF5b3V0ID0gX2EuaXRlbUxheW91dCxcbiAgICAgICAgICAgICAgICBsb2FkTW9yZSA9IF9hLmxvYWRNb3JlLFxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb24gPSBfYS5wYWdpbmF0aW9uLFxuICAgICAgICAgICAgICAgIHByZWZpeENscyA9IF9hLnByZWZpeENscyxcbiAgICAgICAgICAgICAgICBncmlkID0gX2EuZ3JpZCxcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlID0gX2EuZGF0YVNvdXJjZSxcbiAgICAgICAgICAgICAgICBzaXplID0gX2Euc2l6ZSxcbiAgICAgICAgICAgICAgICByb3dLZXkgPSBfYS5yb3dLZXksXG4gICAgICAgICAgICAgICAgcmVuZGVySXRlbSA9IF9hLnJlbmRlckl0ZW0sXG4gICAgICAgICAgICAgICAgaGVhZGVyID0gX2EuaGVhZGVyLFxuICAgICAgICAgICAgICAgIGZvb3RlciA9IF9hLmZvb3RlcixcbiAgICAgICAgICAgICAgICBsb2FkaW5nID0gX2EubG9hZGluZyxcbiAgICAgICAgICAgICAgICByZXN0ID0gX19yZXN0KF9hLCBbXCJib3JkZXJlZFwiLCBcInNwbGl0XCIsIFwiY2xhc3NOYW1lXCIsIFwiY2hpbGRyZW5cIiwgXCJpdGVtTGF5b3V0XCIsIFwibG9hZE1vcmVcIiwgXCJwYWdpbmF0aW9uXCIsIFwicHJlZml4Q2xzXCIsIFwiZ3JpZFwiLCBcImRhdGFTb3VyY2VcIiwgXCJzaXplXCIsIFwicm93S2V5XCIsIFwicmVuZGVySXRlbVwiLCBcImhlYWRlclwiLCBcImZvb3RlclwiLCBcImxvYWRpbmdcIl0pO1xuICAgICAgICAgICAgdmFyIGxvYWRpbmdQcm9wID0gbG9hZGluZztcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbG9hZGluZ1Byb3AgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgIGxvYWRpbmdQcm9wID0ge1xuICAgICAgICAgICAgICAgICAgICBzcGlubmluZzogbG9hZGluZ1Byb3BcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGlzTG9hZGluZyA9IGxvYWRpbmdQcm9wICYmIGxvYWRpbmdQcm9wLnNwaW5uaW5nO1xuICAgICAgICAgICAgLy8gbGFyZ2UgPT4gbGdcbiAgICAgICAgICAgIC8vIHNtYWxsID0+IHNtXG4gICAgICAgICAgICB2YXIgc2l6ZUNscyA9ICcnO1xuICAgICAgICAgICAgc3dpdGNoIChzaXplKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnbGFyZ2UnOlxuICAgICAgICAgICAgICAgICAgICBzaXplQ2xzID0gJ2xnJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnc21hbGwnOlxuICAgICAgICAgICAgICAgICAgICBzaXplQ2xzID0gJ3NtJztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjbGFzc1N0cmluZyA9IGNsYXNzTmFtZXMocHJlZml4Q2xzLCBjbGFzc05hbWUsIChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctdmVydGljYWwnLCBpdGVtTGF5b3V0ID09PSAndmVydGljYWwnKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLScgKyBzaXplQ2xzLCBzaXplQ2xzKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLXNwbGl0Jywgc3BsaXQpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctYm9yZGVyZWQnLCBib3JkZXJlZCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy1sb2FkaW5nJywgaXNMb2FkaW5nKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLWdyaWQnLCBncmlkKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLXNvbWV0aGluZy1hZnRlci1sYXN0LWl0ZW0nLCB0aGlzLmlzU29tZXRoaW5nQWZ0ZXJMYXN0VHRlbSgpKSwgX2NsYXNzTmFtZXMpKTtcbiAgICAgICAgICAgIHZhciBwYWdpbmF0aW9uQ29udGVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctcGFnaW5hdGlvbicgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFBhZ2luYXRpb24sIHBhZ2luYXRpb24pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuQ29udGVudCA9IHZvaWQgMDtcbiAgICAgICAgICAgIGNoaWxkcmVuQ29udGVudCA9IGlzTG9hZGluZyAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IHN0eWxlOiB7IG1pbkhlaWdodDogNTMgfSB9KTtcbiAgICAgICAgICAgIGlmIChkYXRhU291cmNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbXMgPSBkYXRhU291cmNlLm1hcChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5yZW5kZXJJdGVtKGl0ZW0sIGluZGV4KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRyZW5MaXN0ID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGl0ZW1zLCBmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogX3RoaXMyLmtleXNbaW5kZXhdXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuQ29udGVudCA9IGdyaWQgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBSb3csXG4gICAgICAgICAgICAgICAgICAgIHsgZ3V0dGVyOiBncmlkLmd1dHRlciB9LFxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbkxpc3RcbiAgICAgICAgICAgICAgICApIDogY2hpbGRyZW5MaXN0O1xuICAgICAgICAgICAgfSBlbHNlIGlmICghY2hpbGRyZW4gJiYgIWlzTG9hZGluZykge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuQ29udGVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgIExvY2FsZVJlY2VpdmVyLFxuICAgICAgICAgICAgICAgICAgICB7IGNvbXBvbmVudE5hbWU6ICdUYWJsZScsIGRlZmF1bHRMb2NhbGU6IGRlZmF1bHRMb2NhbGUuVGFibGUgfSxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJFbXB0eVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICBTcGluLFxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nUHJvcCxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5Db250ZW50XG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBsb2FkTW9yZSxcbiAgICAgICAgICAgICAgICAhbG9hZE1vcmUgJiYgcGFnaW5hdGlvbiA/IHBhZ2luYXRpb25Db250ZW50IDogbnVsbFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgIF9leHRlbmRzKHsgY2xhc3NOYW1lOiBjbGFzc1N0cmluZyB9LCByZXN0KSxcbiAgICAgICAgICAgICAgICBoZWFkZXIgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWhlYWRlcicgfSxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBjb250ZW50LFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuLFxuICAgICAgICAgICAgICAgIGZvb3RlciAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctZm9vdGVyJyB9LFxuICAgICAgICAgICAgICAgICAgICBmb290ZXJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIExpc3Q7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IExpc3Q7XG5cbkxpc3QuSXRlbSA9IEl0ZW07XG5MaXN0LmNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgIGdyaWQ6IFByb3BUeXBlcy5hbnlcbn07XG5MaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBkYXRhU291cmNlOiBbXSxcbiAgICBwcmVmaXhDbHM6ICdhbnQtbGlzdCcsXG4gICAgYm9yZGVyZWQ6IGZhbHNlLFxuICAgIHNwbGl0OiB0cnVlLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIHBhZ2luYXRpb246IGZhbHNlXG59OyIsImltcG9ydCAnLi4vLi4vc3R5bGUvaW5kZXguY3NzJztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuLy8gc3R5bGUgZGVwZW5kZW5jaWVzXG5pbXBvcnQgJy4uLy4uL3NwaW4vc3R5bGUvY3NzJztcbmltcG9ydCAnLi4vLi4vcGFnaW5hdGlvbi9zdHlsZS9jc3MnO1xuaW1wb3J0ICcuLi8uLi9ncmlkL3N0eWxlL2Nzcyc7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgUHJvZ3Jlc3MgZnJvbSAnLi9wcm9ncmVzcyc7XG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzczsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbnZhciBfX3Jlc3QgPSB0aGlzICYmIHRoaXMuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgICB9aWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgICB9cmV0dXJuIHQ7XG59O1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJY29uIGZyb20gJy4uL2ljb24nO1xuaW1wb3J0IHsgQ2lyY2xlIH0gZnJvbSAncmMtcHJvZ3Jlc3MnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG52YXIgc3RhdHVzQ29sb3JNYXAgPSB7XG4gICAgbm9ybWFsOiAnIzEwOGVlOScsXG4gICAgZXhjZXB0aW9uOiAnI2ZmNTUwMCcsXG4gICAgc3VjY2VzczogJyM4N2QwNjgnXG59O1xuXG52YXIgUHJvZ3Jlc3MgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhQcm9ncmVzcywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBQcm9ncmVzcygpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFByb2dyZXNzKTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFByb2dyZXNzLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUHJvZ3Jlc3MpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoUHJvZ3Jlc3MsIFt7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgICAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgICAgIHZhciBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIF9wcm9wcyRwZXJjZW50ID0gcHJvcHMucGVyY2VudCxcbiAgICAgICAgICAgICAgICBwZXJjZW50ID0gX3Byb3BzJHBlcmNlbnQgPT09IHVuZGVmaW5lZCA/IDAgOiBfcHJvcHMkcGVyY2VudCxcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSBwcm9wcy5zdGF0dXMsXG4gICAgICAgICAgICAgICAgZm9ybWF0ID0gcHJvcHMuZm9ybWF0LFxuICAgICAgICAgICAgICAgIHRyYWlsQ29sb3IgPSBwcm9wcy50cmFpbENvbG9yLFxuICAgICAgICAgICAgICAgIHNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NQZXJjZW50ID0gcHJvcHMuc3VjY2Vzc1BlcmNlbnQsXG4gICAgICAgICAgICAgICAgdHlwZSA9IHByb3BzLnR5cGUsXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGggPSBwcm9wcy5zdHJva2VXaWR0aCxcbiAgICAgICAgICAgICAgICB3aWR0aCA9IHByb3BzLndpZHRoLFxuICAgICAgICAgICAgICAgIHNob3dJbmZvID0gcHJvcHMuc2hvd0luZm8sXG4gICAgICAgICAgICAgICAgX3Byb3BzJGdhcERlZ3JlZSA9IHByb3BzLmdhcERlZ3JlZSxcbiAgICAgICAgICAgICAgICBnYXBEZWdyZWUgPSBfcHJvcHMkZ2FwRGVncmVlID09PSB1bmRlZmluZWQgPyAwIDogX3Byb3BzJGdhcERlZ3JlZSxcbiAgICAgICAgICAgICAgICBnYXBQb3NpdGlvbiA9IHByb3BzLmdhcFBvc2l0aW9uLFxuICAgICAgICAgICAgICAgIHJlc3RQcm9wcyA9IF9fcmVzdChwcm9wcywgW1wicHJlZml4Q2xzXCIsIFwiY2xhc3NOYW1lXCIsIFwicGVyY2VudFwiLCBcInN0YXR1c1wiLCBcImZvcm1hdFwiLCBcInRyYWlsQ29sb3JcIiwgXCJzaXplXCIsIFwic3VjY2Vzc1BlcmNlbnRcIiwgXCJ0eXBlXCIsIFwic3Ryb2tlV2lkdGhcIiwgXCJ3aWR0aFwiLCBcInNob3dJbmZvXCIsIFwiZ2FwRGVncmVlXCIsIFwiZ2FwUG9zaXRpb25cIl0pO1xuXG4gICAgICAgICAgICB2YXIgcHJvZ3Jlc3NTdGF0dXMgPSBwYXJzZUludChzdWNjZXNzUGVyY2VudCA/IHN1Y2Nlc3NQZXJjZW50LnRvU3RyaW5nKCkgOiBwZXJjZW50LnRvU3RyaW5nKCksIDEwKSA+PSAxMDAgJiYgISgnc3RhdHVzJyBpbiBwcm9wcykgPyAnc3VjY2VzcycgOiBzdGF0dXMgfHwgJ25vcm1hbCc7XG4gICAgICAgICAgICB2YXIgcHJvZ3Jlc3NJbmZvID0gdm9pZCAwO1xuICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gdm9pZCAwO1xuICAgICAgICAgICAgdmFyIHRleHRGb3JtYXR0ZXIgPSBmb3JtYXQgfHwgZnVuY3Rpb24gKHBlcmNlbnROdW1iZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGVyY2VudE51bWJlciArICclJztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoc2hvd0luZm8pIHtcbiAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB2YXIgaWNvblR5cGUgPSB0eXBlID09PSAnY2lyY2xlJyB8fCB0eXBlID09PSAnZGFzaGJvYXJkJyA/ICcnIDogJy1jaXJjbGUnO1xuICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzc1N0YXR1cyA9PT0gJ2V4Y2VwdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dCA9IGZvcm1hdCA/IHRleHRGb3JtYXR0ZXIocGVyY2VudCkgOiBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHsgdHlwZTogJ2Nyb3NzJyArIGljb25UeXBlIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvZ3Jlc3NTdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gZm9ybWF0ID8gdGV4dEZvcm1hdHRlcihwZXJjZW50KSA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyB0eXBlOiAnY2hlY2snICsgaWNvblR5cGUgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dCA9IHRleHRGb3JtYXR0ZXIocGVyY2VudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByb2dyZXNzSW5mbyA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctdGV4dCcgfSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2xpbmUnKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBlcmNlbnRTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHBlcmNlbnQgKyAnJScsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogc3Ryb2tlV2lkdGggfHwgKHNpemUgPT09ICdzbWFsbCcgPyA2IDogOClcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciBzdWNjZXNzUGVyY2VudFN0eWxlID0ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogc3VjY2Vzc1BlcmNlbnQgKyAnJScsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogc3Ryb2tlV2lkdGggfHwgKHNpemUgPT09ICdzbWFsbCcgPyA2IDogOClcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciBzdWNjZXNzU2VnbWVudCA9IHN1Y2Nlc3NQZXJjZW50ICE9PSB1bmRlZmluZWQgPyBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1zdWNjZXNzLWJnJywgc3R5bGU6IHN1Y2Nlc3NQZXJjZW50U3R5bGUgfSkgOiBudWxsO1xuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLW91dGVyJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1pbm5lcicgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1iZycsIHN0eWxlOiBwZXJjZW50U3R5bGUgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc1NlZ21lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NJbmZvXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2NpcmNsZScgfHwgdHlwZSA9PT0gJ2Rhc2hib2FyZCcpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2lyY2xlU2l6ZSA9IHdpZHRoIHx8IDEyMDtcbiAgICAgICAgICAgICAgICB2YXIgY2lyY2xlU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjaXJjbGVTaXplLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNpcmNsZVNpemUsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBjaXJjbGVTaXplICogMC4xNSArIDZcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciBjaXJjbGVXaWR0aCA9IHN0cm9rZVdpZHRoIHx8IDY7XG4gICAgICAgICAgICAgICAgdmFyIGdhcFBvcyA9IGdhcFBvc2l0aW9uIHx8IHR5cGUgPT09ICdkYXNoYm9hcmQnICYmICdib3R0b20nIHx8ICd0b3AnO1xuICAgICAgICAgICAgICAgIHZhciBnYXBEZWcgPSBnYXBEZWdyZWUgfHwgdHlwZSA9PT0gJ2Rhc2hib2FyZCcgJiYgNzU7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctaW5uZXInLCBzdHlsZTogY2lyY2xlU3R5bGUgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDaXJjbGUsIHsgcGVyY2VudDogcGVyY2VudCwgc3Ryb2tlV2lkdGg6IGNpcmNsZVdpZHRoLCB0cmFpbFdpZHRoOiBjaXJjbGVXaWR0aCwgc3Ryb2tlQ29sb3I6IHN0YXR1c0NvbG9yTWFwW3Byb2dyZXNzU3RhdHVzXSwgdHJhaWxDb2xvcjogdHJhaWxDb2xvciwgcHJlZml4Q2xzOiBwcmVmaXhDbHMsIGdhcERlZ3JlZTogZ2FwRGVnLCBnYXBQb3NpdGlvbjogZ2FwUG9zIH0pLFxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0luZm9cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGNsYXNzU3RyaW5nID0gY2xhc3NOYW1lcyhwcmVmaXhDbHMsIChfY2xhc3NOYW1lcyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctJyArICh0eXBlID09PSAnZGFzaGJvYXJkJyAmJiAnY2lyY2xlJyB8fCB0eXBlKSwgdHJ1ZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy1zdGF0dXMtJyArIHByb2dyZXNzU3RhdHVzLCB0cnVlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLXNob3ctaW5mbycsIHNob3dJbmZvKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLScgKyBzaXplLCBzaXplKSwgX2NsYXNzTmFtZXMpLCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgX2V4dGVuZHMoe30sIHJlc3RQcm9wcywgeyBjbGFzc05hbWU6IGNsYXNzU3RyaW5nIH0pLFxuICAgICAgICAgICAgICAgIHByb2dyZXNzXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFByb2dyZXNzO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzcztcblxuUHJvZ3Jlc3MuZGVmYXVsdFByb3BzID0ge1xuICAgIHR5cGU6ICdsaW5lJyxcbiAgICBwZXJjZW50OiAwLFxuICAgIHNob3dJbmZvOiB0cnVlLFxuICAgIHRyYWlsQ29sb3I6ICcjZjNmM2YzJyxcbiAgICBwcmVmaXhDbHM6ICdhbnQtcHJvZ3Jlc3MnLFxuICAgIHNpemU6ICdkZWZhdWx0J1xufTtcblByb2dyZXNzLnByb3BUeXBlcyA9IHtcbiAgICBzdGF0dXM6IFByb3BUeXBlcy5vbmVPZihbJ25vcm1hbCcsICdleGNlcHRpb24nLCAnYWN0aXZlJywgJ3N1Y2Nlc3MnXSksXG4gICAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFsnbGluZScsICdjaXJjbGUnLCAnZGFzaGJvYXJkJ10pLFxuICAgIHNob3dJbmZvOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwZXJjZW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHN0cm9rZVdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHRyYWlsQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZm9ybWF0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBnYXBEZWdyZWU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgJ2RlZmF1bHQnOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ3NtYWxsJ10pXG59OyIsImltcG9ydCAnLi4vLi4vc3R5bGUvaW5kZXguY3NzJztcbmltcG9ydCAnLi9pbmRleC5jc3MnOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXguY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXguY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVXBsb2FkIGZyb20gJy4vVXBsb2FkJztcblxudmFyIERyYWdnZXIgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhEcmFnZ2VyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIERyYWdnZXIoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEcmFnZ2VyKTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKERyYWdnZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihEcmFnZ2VyKSkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKERyYWdnZXIsIFt7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuXG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChVcGxvYWQsIF9leHRlbmRzKHt9LCBwcm9wcywgeyB0eXBlOiAnZHJhZycsIHN0eWxlOiBfZXh0ZW5kcyh7fSwgcHJvcHMuc3R5bGUsIHsgaGVpZ2h0OiBwcm9wcy5oZWlnaHQgfSkgfSkpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIERyYWdnZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IERyYWdnZXI7IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmNVcGxvYWQgZnJvbSAncmMtdXBsb2FkJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHVuaXFCeSBmcm9tICdsb2Rhc2gvdW5pcUJ5JztcbmltcG9ydCBMb2NhbGVSZWNlaXZlciBmcm9tICcuLi9sb2NhbGUtcHJvdmlkZXIvTG9jYWxlUmVjZWl2ZXInO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSAnLi4vbG9jYWxlLXByb3ZpZGVyL2RlZmF1bHQnO1xuaW1wb3J0IFVwbG9hZExpc3QgZnJvbSAnLi9VcGxvYWRMaXN0JztcbmltcG9ydCB7IFQsIGZpbGVUb09iamVjdCwgZ2VuUGVyY2VudEFkZCwgZ2V0RmlsZUl0ZW0sIHJlbW92ZUZpbGVJdGVtIH0gZnJvbSAnLi91dGlscyc7XG5cbnZhciBVcGxvYWQgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhVcGxvYWQsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gVXBsb2FkKHByb3BzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBVcGxvYWQpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChVcGxvYWQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihVcGxvYWQpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgICAgX3RoaXMub25TdGFydCA9IGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0SXRlbSA9IHZvaWQgMDtcbiAgICAgICAgICAgIHZhciBuZXh0RmlsZUxpc3QgPSBfdGhpcy5zdGF0ZS5maWxlTGlzdC5jb25jYXQoKTtcbiAgICAgICAgICAgIHRhcmdldEl0ZW0gPSBmaWxlVG9PYmplY3QoZmlsZSk7XG4gICAgICAgICAgICB0YXJnZXRJdGVtLnN0YXR1cyA9ICd1cGxvYWRpbmcnO1xuICAgICAgICAgICAgbmV4dEZpbGVMaXN0LnB1c2godGFyZ2V0SXRlbSk7XG4gICAgICAgICAgICBfdGhpcy5vbkNoYW5nZSh7XG4gICAgICAgICAgICAgICAgZmlsZTogdGFyZ2V0SXRlbSxcbiAgICAgICAgICAgICAgICBmaWxlTGlzdDogbmV4dEZpbGVMaXN0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIGZpeCBpZSBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKCF3aW5kb3cuRm9ybURhdGEpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hdXRvVXBkYXRlUHJvZ3Jlc3MoMCwgdGFyZ2V0SXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLm9uU3VjY2VzcyA9IGZ1bmN0aW9uIChyZXNwb25zZSwgZmlsZSkge1xuICAgICAgICAgICAgX3RoaXMuY2xlYXJQcm9ncmVzc1RpbWVyKCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzcG9uc2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkgey8qIGRvIG5vdGhpbmcgKi9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBmaWxlTGlzdCA9IF90aGlzLnN0YXRlLmZpbGVMaXN0O1xuICAgICAgICAgICAgdmFyIHRhcmdldEl0ZW0gPSBnZXRGaWxlSXRlbShmaWxlLCBmaWxlTGlzdCk7XG4gICAgICAgICAgICAvLyByZW1vdmVkXG4gICAgICAgICAgICBpZiAoIXRhcmdldEl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXRJdGVtLnN0YXR1cyA9ICdkb25lJztcbiAgICAgICAgICAgIHRhcmdldEl0ZW0ucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgICAgIF90aGlzLm9uQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICBmaWxlOiBfZXh0ZW5kcyh7fSwgdGFyZ2V0SXRlbSksXG4gICAgICAgICAgICAgICAgZmlsZUxpc3Q6IGZpbGVMaXN0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMub25Qcm9ncmVzcyA9IGZ1bmN0aW9uIChlLCBmaWxlKSB7XG4gICAgICAgICAgICB2YXIgZmlsZUxpc3QgPSBfdGhpcy5zdGF0ZS5maWxlTGlzdDtcbiAgICAgICAgICAgIHZhciB0YXJnZXRJdGVtID0gZ2V0RmlsZUl0ZW0oZmlsZSwgZmlsZUxpc3QpO1xuICAgICAgICAgICAgLy8gcmVtb3ZlZFxuICAgICAgICAgICAgaWYgKCF0YXJnZXRJdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0SXRlbS5wZXJjZW50ID0gZS5wZXJjZW50O1xuICAgICAgICAgICAgX3RoaXMub25DaGFuZ2Uoe1xuICAgICAgICAgICAgICAgIGV2ZW50OiBlLFxuICAgICAgICAgICAgICAgIGZpbGU6IF9leHRlbmRzKHt9LCB0YXJnZXRJdGVtKSxcbiAgICAgICAgICAgICAgICBmaWxlTGlzdDogX3RoaXMuc3RhdGUuZmlsZUxpc3RcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5vbkVycm9yID0gZnVuY3Rpb24gKGVycm9yLCByZXNwb25zZSwgZmlsZSkge1xuICAgICAgICAgICAgX3RoaXMuY2xlYXJQcm9ncmVzc1RpbWVyKCk7XG4gICAgICAgICAgICB2YXIgZmlsZUxpc3QgPSBfdGhpcy5zdGF0ZS5maWxlTGlzdDtcbiAgICAgICAgICAgIHZhciB0YXJnZXRJdGVtID0gZ2V0RmlsZUl0ZW0oZmlsZSwgZmlsZUxpc3QpO1xuICAgICAgICAgICAgLy8gcmVtb3ZlZFxuICAgICAgICAgICAgaWYgKCF0YXJnZXRJdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0SXRlbS5lcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgdGFyZ2V0SXRlbS5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgdGFyZ2V0SXRlbS5zdGF0dXMgPSAnZXJyb3InO1xuICAgICAgICAgICAgX3RoaXMub25DaGFuZ2Uoe1xuICAgICAgICAgICAgICAgIGZpbGU6IF9leHRlbmRzKHt9LCB0YXJnZXRJdGVtKSxcbiAgICAgICAgICAgICAgICBmaWxlTGlzdDogZmlsZUxpc3RcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5oYW5kbGVNYW51YWxSZW1vdmUgPSBmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICAgICAgX3RoaXMudXBsb2FkLmFib3J0KGZpbGUpO1xuICAgICAgICAgICAgZmlsZS5zdGF0dXMgPSAncmVtb3ZlZCc7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICAgIF90aGlzLmhhbmRsZVJlbW92ZShmaWxlKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMub25DaGFuZ2UgPSBmdW5jdGlvbiAoaW5mbykge1xuICAgICAgICAgICAgaWYgKCEoJ2ZpbGVMaXN0JyBpbiBfdGhpcy5wcm9wcykpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGZpbGVMaXN0OiBpbmZvLmZpbGVMaXN0IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG9uQ2hhbmdlID0gX3RoaXMucHJvcHMub25DaGFuZ2U7XG5cbiAgICAgICAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKGluZm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5vbkZpbGVEcm9wID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBkcmFnU3RhdGU6IGUudHlwZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLmJlZm9yZVVwbG9hZCA9IGZ1bmN0aW9uIChmaWxlLCBmaWxlTGlzdCkge1xuICAgICAgICAgICAgaWYgKCFfdGhpcy5wcm9wcy5iZWZvcmVVcGxvYWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBfdGhpcy5wcm9wcy5iZWZvcmVVcGxvYWQoZmlsZSwgZmlsZUxpc3QpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5vbkNoYW5nZSh7XG4gICAgICAgICAgICAgICAgICAgIGZpbGU6IGZpbGUsXG4gICAgICAgICAgICAgICAgICAgIGZpbGVMaXN0OiB1bmlxQnkoZmlsZUxpc3QuY29uY2F0KF90aGlzLnN0YXRlLmZpbGVMaXN0KSwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnVpZDtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuc2F2ZVVwbG9hZCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICBfdGhpcy51cGxvYWQgPSBub2RlO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5yZW5kZXJVcGxvYWRMaXN0ID0gZnVuY3Rpb24gKGxvY2FsZSkge1xuICAgICAgICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgc2hvd1VwbG9hZExpc3QgPSBfdGhpcyRwcm9wcy5zaG93VXBsb2FkTGlzdCxcbiAgICAgICAgICAgICAgICBsaXN0VHlwZSA9IF90aGlzJHByb3BzLmxpc3RUeXBlLFxuICAgICAgICAgICAgICAgIG9uUHJldmlldyA9IF90aGlzJHByb3BzLm9uUHJldmlldztcbiAgICAgICAgICAgIHZhciBzaG93UmVtb3ZlSWNvbiA9IHNob3dVcGxvYWRMaXN0LnNob3dSZW1vdmVJY29uLFxuICAgICAgICAgICAgICAgIHNob3dQcmV2aWV3SWNvbiA9IHNob3dVcGxvYWRMaXN0LnNob3dQcmV2aWV3SWNvbjtcblxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVXBsb2FkTGlzdCwgeyBsaXN0VHlwZTogbGlzdFR5cGUsIGl0ZW1zOiBfdGhpcy5zdGF0ZS5maWxlTGlzdCwgb25QcmV2aWV3OiBvblByZXZpZXcsIG9uUmVtb3ZlOiBfdGhpcy5oYW5kbGVNYW51YWxSZW1vdmUsIHNob3dSZW1vdmVJY29uOiBzaG93UmVtb3ZlSWNvbiwgc2hvd1ByZXZpZXdJY29uOiBzaG93UHJldmlld0ljb24sIGxvY2FsZTogX2V4dGVuZHMoe30sIGxvY2FsZSwgX3RoaXMucHJvcHMubG9jYWxlKSB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBmaWxlTGlzdDogcHJvcHMuZmlsZUxpc3QgfHwgcHJvcHMuZGVmYXVsdEZpbGVMaXN0IHx8IFtdLFxuICAgICAgICAgICAgZHJhZ1N0YXRlOiAnZHJvcCdcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhVcGxvYWQsIFt7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAgICAgdGhpcy5jbGVhclByb2dyZXNzVGltZXIoKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnYXV0b1VwZGF0ZVByb2dyZXNzJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGF1dG9VcGRhdGVQcm9ncmVzcyhfLCBmaWxlKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIGdldFBlcmNlbnQgPSBnZW5QZXJjZW50QWRkKCk7XG4gICAgICAgICAgICB2YXIgY3VyUGVyY2VudCA9IDA7XG4gICAgICAgICAgICB0aGlzLmNsZWFyUHJvZ3Jlc3NUaW1lcigpO1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc1RpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGN1clBlcmNlbnQgPSBnZXRQZXJjZW50KGN1clBlcmNlbnQpO1xuICAgICAgICAgICAgICAgIF90aGlzMi5vblByb2dyZXNzKHtcbiAgICAgICAgICAgICAgICAgICAgcGVyY2VudDogY3VyUGVyY2VudFxuICAgICAgICAgICAgICAgIH0sIGZpbGUpO1xuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlUmVtb3ZlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVJlbW92ZShmaWxlKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIG9uUmVtb3ZlID0gdGhpcy5wcm9wcy5vblJlbW92ZTtcblxuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHR5cGVvZiBvblJlbW92ZSA9PT0gJ2Z1bmN0aW9uJyA/IG9uUmVtb3ZlKGZpbGUpIDogb25SZW1vdmUpLnRoZW4oZnVuY3Rpb24gKHJldCkge1xuICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgcmVtb3ZpbmcgZmlsZVxuICAgICAgICAgICAgICAgIGlmIChyZXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHJlbW92ZWRGaWxlTGlzdCA9IHJlbW92ZUZpbGVJdGVtKGZpbGUsIF90aGlzMy5zdGF0ZS5maWxlTGlzdCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlbW92ZWRGaWxlTGlzdCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczMub25DaGFuZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZTogZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVMaXN0OiByZW1vdmVkRmlsZUxpc3RcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgICAgIGlmICgnZmlsZUxpc3QnIGluIG5leHRQcm9wcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBmaWxlTGlzdDogbmV4dFByb3BzLmZpbGVMaXN0IHx8IFtdXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NsZWFyUHJvZ3Jlc3NUaW1lcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhclByb2dyZXNzVGltZXIoKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMucHJvZ3Jlc3NUaW1lcik7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX2NsYXNzTmFtZXMyO1xuXG4gICAgICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgICBfcHJvcHMkcHJlZml4Q2xzID0gX3Byb3BzLnByZWZpeENscyxcbiAgICAgICAgICAgICAgICBwcmVmaXhDbHMgPSBfcHJvcHMkcHJlZml4Q2xzID09PSB1bmRlZmluZWQgPyAnJyA6IF9wcm9wcyRwcmVmaXhDbHMsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBzaG93VXBsb2FkTGlzdCA9IF9wcm9wcy5zaG93VXBsb2FkTGlzdCxcbiAgICAgICAgICAgICAgICBsaXN0VHlwZSA9IF9wcm9wcy5saXN0VHlwZSxcbiAgICAgICAgICAgICAgICB0eXBlID0gX3Byb3BzLnR5cGUsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQgPSBfcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW47XG5cbiAgICAgICAgICAgIHZhciByY1VwbG9hZFByb3BzID0gX2V4dGVuZHMoeyBvblN0YXJ0OiB0aGlzLm9uU3RhcnQsIG9uRXJyb3I6IHRoaXMub25FcnJvciwgb25Qcm9ncmVzczogdGhpcy5vblByb2dyZXNzLCBvblN1Y2Nlc3M6IHRoaXMub25TdWNjZXNzIH0sIHRoaXMucHJvcHMsIHsgYmVmb3JlVXBsb2FkOiB0aGlzLmJlZm9yZVVwbG9hZCB9KTtcbiAgICAgICAgICAgIGRlbGV0ZSByY1VwbG9hZFByb3BzLmNsYXNzTmFtZTtcbiAgICAgICAgICAgIHZhciB1cGxvYWRMaXN0ID0gc2hvd1VwbG9hZExpc3QgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIExvY2FsZVJlY2VpdmVyLFxuICAgICAgICAgICAgICAgIHsgY29tcG9uZW50TmFtZTogJ1VwbG9hZCcsIGRlZmF1bHRMb2NhbGU6IGRlZmF1bHRMb2NhbGUuVXBsb2FkIH0sXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJVcGxvYWRMaXN0XG4gICAgICAgICAgICApIDogbnVsbDtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnZHJhZycpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgICAgICAgICAgICB2YXIgZHJhZ0NscyA9IGNsYXNzTmFtZXMocHJlZml4Q2xzLCAoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLWRyYWcnLCB0cnVlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLWRyYWctdXBsb2FkaW5nJywgdGhpcy5zdGF0ZS5maWxlTGlzdC5zb21lKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmaWxlLnN0YXR1cyA9PT0gJ3VwbG9hZGluZyc7XG4gICAgICAgICAgICAgICAgfSkpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctZHJhZy1ob3ZlcicsIHRoaXMuc3RhdGUuZHJhZ1N0YXRlID09PSAnZHJhZ292ZXInKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLWRpc2FibGVkJywgZGlzYWJsZWQpLCBfY2xhc3NOYW1lcykpO1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IGRyYWdDbHMsIG9uRHJvcDogdGhpcy5vbkZpbGVEcm9wLCBvbkRyYWdPdmVyOiB0aGlzLm9uRmlsZURyb3AsIG9uRHJhZ0xlYXZlOiB0aGlzLm9uRmlsZURyb3AgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmNVcGxvYWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2V4dGVuZHMoe30sIHJjVXBsb2FkUHJvcHMsIHsgcmVmOiB0aGlzLnNhdmVVcGxvYWQsIGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1idG4nIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1kcmFnLWNvbnRhaW5lcicgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIHVwbG9hZExpc3RcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHVwbG9hZEJ1dHRvbkNscyA9IGNsYXNzTmFtZXMocHJlZml4Q2xzLCAoX2NsYXNzTmFtZXMyID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lczIsIHByZWZpeENscyArICctc2VsZWN0JywgdHJ1ZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lczIsIHByZWZpeENscyArICctc2VsZWN0LScgKyBsaXN0VHlwZSwgdHJ1ZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lczIsIHByZWZpeENscyArICctZGlzYWJsZWQnLCBkaXNhYmxlZCksIF9jbGFzc05hbWVzMikpO1xuICAgICAgICAgICAgdmFyIHVwbG9hZEJ1dHRvbiA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHVwbG9hZEJ1dHRvbkNscywgc3R5bGU6IHsgZGlzcGxheTogY2hpbGRyZW4gPyAnJyA6ICdub25lJyB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSY1VwbG9hZCwgX2V4dGVuZHMoe30sIHJjVXBsb2FkUHJvcHMsIHsgcmVmOiB0aGlzLnNhdmVVcGxvYWQgfSkpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKGxpc3RUeXBlID09PSAncGljdHVyZS1jYXJkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgdXBsb2FkTGlzdCxcbiAgICAgICAgICAgICAgICAgICAgdXBsb2FkQnV0dG9uXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0sXG4gICAgICAgICAgICAgICAgdXBsb2FkQnV0dG9uLFxuICAgICAgICAgICAgICAgIHVwbG9hZExpc3RcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gVXBsb2FkO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBVcGxvYWQ7XG5cblVwbG9hZC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgcHJlZml4Q2xzOiAnYW50LXVwbG9hZCcsXG4gICAgdHlwZTogJ3NlbGVjdCcsXG4gICAgbXVsdGlwbGU6IGZhbHNlLFxuICAgIGFjdGlvbjogJycsXG4gICAgZGF0YToge30sXG4gICAgYWNjZXB0OiAnJyxcbiAgICBiZWZvcmVVcGxvYWQ6IFQsXG4gICAgc2hvd1VwbG9hZExpc3Q6IHRydWUsXG4gICAgbGlzdFR5cGU6ICd0ZXh0JyxcbiAgICBjbGFzc05hbWU6ICcnLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBzdXBwb3J0U2VydmVyUmVuZGVyOiB0cnVlXG59OyIsImltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFuaW1hdGUgZnJvbSAncmMtYW5pbWF0ZSc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi9pY29uJztcbmltcG9ydCBUb29sdGlwIGZyb20gJy4uL3Rvb2x0aXAnO1xuaW1wb3J0IFByb2dyZXNzIGZyb20gJy4uL3Byb2dyZXNzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZpbGVSZWFkZXIvcmVhZEFzRGF0YVVSTFxudmFyIHByZXZpZXdGaWxlID0gZnVuY3Rpb24gcHJldmlld0ZpbGUoZmlsZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2socmVhZGVyLnJlc3VsdCk7XG4gICAgfTtcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbn07XG52YXIgZXh0bmFtZSA9IGZ1bmN0aW9uIGV4dG5hbWUodXJsKSB7XG4gICAgaWYgKCF1cmwpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB2YXIgdGVtcCA9IHVybC5zcGxpdCgnLycpO1xuICAgIHZhciBmaWxlbmFtZSA9IHRlbXBbdGVtcC5sZW5ndGggLSAxXTtcbiAgICByZXR1cm4gKC9cXC5bXi4vXFxcXF0qJC8uZXhlYyhmaWxlbmFtZSkgfHwgWycnXSlbMF07XG59O1xudmFyIGlzSW1hZ2VVcmwgPSBmdW5jdGlvbiBpc0ltYWdlVXJsKHVybCkge1xuICAgIGlmICgvXmRhdGE6aW1hZ2VcXC8vLnRlc3QodXJsKSB8fCAvXFwuKHdlYnB8c3ZnfHBuZ3xnaWZ8anBnfGpwZWcpJC8udGVzdCh1cmwpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoL15kYXRhOi8udGVzdCh1cmwpKSB7XG4gICAgICAgIC8vIG90aGVyIGZpbGUgdHlwZXMgb2YgYmFzZTY0XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGV4dG5hbWUodXJsKSkge1xuICAgICAgICAvLyBvdGhlciBmaWxlIHR5cGVzIHdoaWNoIGhhdmUgZXh0ZW5zaW9uXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG52YXIgVXBsb2FkTGlzdCA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFVwbG9hZExpc3QsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gVXBsb2FkTGlzdCgpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFVwbG9hZExpc3QpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChVcGxvYWRMaXN0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoVXBsb2FkTGlzdCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXG4gICAgICAgIF90aGlzLmhhbmRsZUNsb3NlID0gZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgICAgIHZhciBvblJlbW92ZSA9IF90aGlzLnByb3BzLm9uUmVtb3ZlO1xuXG4gICAgICAgICAgICBpZiAob25SZW1vdmUpIHtcbiAgICAgICAgICAgICAgICBvblJlbW92ZShmaWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuaGFuZGxlUHJldmlldyA9IGZ1bmN0aW9uIChmaWxlLCBlKSB7XG4gICAgICAgICAgICB2YXIgb25QcmV2aWV3ID0gX3RoaXMucHJvcHMub25QcmV2aWV3O1xuXG4gICAgICAgICAgICBpZiAoIW9uUHJldmlldykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybiBvblByZXZpZXcoZmlsZSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoVXBsb2FkTGlzdCwgW3tcbiAgICAgICAga2V5OiAnY29tcG9uZW50RGlkVXBkYXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5saXN0VHlwZSAhPT0gJ3BpY3R1cmUnICYmIHRoaXMucHJvcHMubGlzdFR5cGUgIT09ICdwaWN0dXJlLWNhcmQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKHRoaXMucHJvcHMuaXRlbXMgfHwgW10pLmZvckVhY2goZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhd2luZG93LkZpbGVSZWFkZXIgfHwgIXdpbmRvdy5GaWxlIHx8ICEoZmlsZS5vcmlnaW5GaWxlT2JqIGluc3RhbmNlb2YgRmlsZSkgfHwgZmlsZS50aHVtYlVybCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLyplc2xpbnQtZGlzYWJsZSAqL1xuICAgICAgICAgICAgICAgIGZpbGUudGh1bWJVcmwgPSAnJztcbiAgICAgICAgICAgICAgICAvKmVzbGludC1lbmFibGUgKi9cbiAgICAgICAgICAgICAgICBwcmV2aWV3RmlsZShmaWxlLm9yaWdpbkZpbGVPYmosIGZ1bmN0aW9uIChwcmV2aWV3RGF0YVVybCkge1xuICAgICAgICAgICAgICAgICAgICAvKmVzbGludC1kaXNhYmxlICovXG4gICAgICAgICAgICAgICAgICAgIGZpbGUudGh1bWJVcmwgPSBwcmV2aWV3RGF0YVVybDtcbiAgICAgICAgICAgICAgICAgICAgLyplc2xpbnQtZW5hYmxlICovXG4gICAgICAgICAgICAgICAgICAgIF90aGlzMi5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcyxcbiAgICAgICAgICAgICAgICBfY2xhc3NOYW1lczI7XG5cbiAgICAgICAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgICAgIHByZWZpeENscyA9IF9wcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgICAgICAgX3Byb3BzJGl0ZW1zID0gX3Byb3BzLml0ZW1zLFxuICAgICAgICAgICAgICAgIGl0ZW1zID0gX3Byb3BzJGl0ZW1zID09PSB1bmRlZmluZWQgPyBbXSA6IF9wcm9wcyRpdGVtcyxcbiAgICAgICAgICAgICAgICBsaXN0VHlwZSA9IF9wcm9wcy5saXN0VHlwZSxcbiAgICAgICAgICAgICAgICBzaG93UHJldmlld0ljb24gPSBfcHJvcHMuc2hvd1ByZXZpZXdJY29uLFxuICAgICAgICAgICAgICAgIHNob3dSZW1vdmVJY29uID0gX3Byb3BzLnNob3dSZW1vdmVJY29uLFxuICAgICAgICAgICAgICAgIGxvY2FsZSA9IF9wcm9wcy5sb2NhbGU7XG5cbiAgICAgICAgICAgIHZhciBsaXN0ID0gaXRlbXMubWFwKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgIHZhciBpY29uID0gUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7IHR5cGU6IGZpbGUuc3RhdHVzID09PSAndXBsb2FkaW5nJyA/ICdsb2FkaW5nJyA6ICdwYXBlci1jbGlwJyB9KTtcbiAgICAgICAgICAgICAgICBpZiAobGlzdFR5cGUgPT09ICdwaWN0dXJlJyB8fCBsaXN0VHlwZSA9PT0gJ3BpY3R1cmUtY2FyZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3RUeXBlID09PSAncGljdHVyZS1jYXJkJyAmJiBmaWxlLnN0YXR1cyA9PT0gJ3VwbG9hZGluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb24gPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWxpc3QtaXRlbS11cGxvYWRpbmctdGV4dCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGUudXBsb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFmaWxlLnRodW1iVXJsICYmICFmaWxlLnVybCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbiA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctbGlzdC1pdGVtLXRodW1ibmFpbCcsIHR5cGU6ICdwaWN0dXJlJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aHVtYm5haWwgPSBpc0ltYWdlVXJsKGZpbGUudGh1bWJVcmwgfHwgZmlsZS51cmwpID8gUmVhY3QuY3JlYXRlRWxlbWVudCgnaW1nJywgeyBzcmM6IGZpbGUudGh1bWJVcmwgfHwgZmlsZS51cmwsIGFsdDogZmlsZS5uYW1lIH0pIDogUmVhY3QuY3JlYXRlRWxlbWVudChJY29uLCB7IHR5cGU6ICdmaWxlJywgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWxpc3QtaXRlbS1pY29uJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb24gPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1saXN0LWl0ZW0tdGh1bWJuYWlsJywgb25DbGljazogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMzLmhhbmRsZVByZXZpZXcoZmlsZSwgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGhyZWY6IGZpbGUudXJsIHx8IGZpbGUudGh1bWJVcmwsIHRhcmdldDogJ19ibGFuaycsIHJlbDogJ25vb3BlbmVyIG5vcmVmZXJyZXInIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmaWxlLnN0YXR1cyA9PT0gJ3VwbG9hZGluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gc2hvdyBsb2FkaW5nIGljb24gaWYgdXBsb2FkIHByb2dyZXNzIGxpc3RlbmVyIGlzIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgIHZhciBsb2FkaW5nUHJvZ3Jlc3MgPSAncGVyY2VudCcgaW4gZmlsZSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoUHJvZ3Jlc3MsIF9leHRlbmRzKHsgdHlwZTogJ2xpbmUnIH0sIF90aGlzMy5wcm9wcy5wcm9ncmVzc0F0dHIsIHsgcGVyY2VudDogZmlsZS5wZXJjZW50IH0pKSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6IHByZWZpeENscyArICctbGlzdC1pdGVtLXByb2dyZXNzJywga2V5OiAncHJvZ3Jlc3MnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nUHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGluZm9VcGxvYWRpbmdDbGFzcyA9IGNsYXNzTmFtZXMoKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzICsgJy1saXN0LWl0ZW0nLCB0cnVlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLWxpc3QtaXRlbS0nICsgZmlsZS5zdGF0dXMsIHRydWUpLCBfY2xhc3NOYW1lcykpO1xuICAgICAgICAgICAgICAgIHZhciBwcmV2aWV3ID0gZmlsZS51cmwgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnYScsXG4gICAgICAgICAgICAgICAgICAgIF9leHRlbmRzKHt9LCBmaWxlLmxpbmtQcm9wcywgeyBocmVmOiBmaWxlLnVybCwgdGFyZ2V0OiAnX2JsYW5rJywgcmVsOiAnbm9vcGVuZXIgbm9yZWZlcnJlcicsIGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1saXN0LWl0ZW0tbmFtZScsIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczMuaGFuZGxlUHJldmlldyhmaWxlLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRpdGxlOiBmaWxlLm5hbWUgfSksXG4gICAgICAgICAgICAgICAgICAgIGZpbGUubmFtZVxuICAgICAgICAgICAgICAgICkgOiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWxpc3QtaXRlbS1uYW1lJywgb25DbGljazogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5oYW5kbGVQcmV2aWV3KGZpbGUsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGl0bGU6IGZpbGUubmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICBmaWxlLm5hbWVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHZhciBzdHlsZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHZhciBwcmV2aWV3SWNvbiA9IHNob3dQcmV2aWV3SWNvbiA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdhJyxcbiAgICAgICAgICAgICAgICAgICAgeyBocmVmOiBmaWxlLnVybCB8fCBmaWxlLnRodW1iVXJsLCB0YXJnZXQ6ICdfYmxhbmsnLCByZWw6ICdub29wZW5lciBub3JlZmVycmVyJywgc3R5bGU6IGZpbGUudXJsIHx8IGZpbGUudGh1bWJVcmwgPyB1bmRlZmluZWQgOiBzdHlsZSwgb25DbGljazogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5oYW5kbGVQcmV2aWV3KGZpbGUsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGl0bGU6IGxvY2FsZS5wcmV2aWV3RmlsZSB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHsgdHlwZTogJ2V5ZS1vJyB9KVxuICAgICAgICAgICAgICAgICkgOiBudWxsO1xuICAgICAgICAgICAgICAgIHZhciByZW1vdmVJY29uID0gc2hvd1JlbW92ZUljb24gPyBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHsgdHlwZTogJ2RlbGV0ZScsIHRpdGxlOiBsb2NhbGUucmVtb3ZlRmlsZSwgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczMuaGFuZGxlQ2xvc2UoZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gfSkgOiBudWxsO1xuICAgICAgICAgICAgICAgIHZhciByZW1vdmVJY29uQ3Jvc3MgPSBzaG93UmVtb3ZlSWNvbiA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyB0eXBlOiAnY3Jvc3MnLCB0aXRsZTogbG9jYWxlLnJlbW92ZUZpbGUsIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMzLmhhbmRsZUNsb3NlKGZpbGUpO1xuICAgICAgICAgICAgICAgICAgICB9IH0pIDogbnVsbDtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aW9ucyA9IGxpc3RUeXBlID09PSAncGljdHVyZS1jYXJkJyAmJiBmaWxlLnN0YXR1cyAhPT0gJ3VwbG9hZGluZycgPyBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWxpc3QtaXRlbS1hY3Rpb25zJyB9LFxuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3SWNvbixcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlSWNvblxuICAgICAgICAgICAgICAgICkgOiByZW1vdmVJY29uQ3Jvc3M7XG4gICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgaWYgKGZpbGUucmVzcG9uc2UgJiYgdHlwZW9mIGZpbGUucmVzcG9uc2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBmaWxlLnJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBmaWxlLmVycm9yICYmIGZpbGUuZXJyb3Iuc3RhdHVzVGV4dCB8fCBsb2NhbGUudXBsb2FkRXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBpY29uQW5kUHJldmlldyA9IGZpbGUuc3RhdHVzID09PSAnZXJyb3InID8gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgVG9vbHRpcCxcbiAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogbWVzc2FnZSB9LFxuICAgICAgICAgICAgICAgICAgICBpY29uLFxuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3XG4gICAgICAgICAgICAgICAgKSA6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgaWNvbixcbiAgICAgICAgICAgICAgICAgICAgcHJldmlld1xuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogaW5mb1VwbG9hZGluZ0NsYXNzLCBrZXk6IGZpbGUudWlkIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWxpc3QtaXRlbS1pbmZvJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkFuZFByZXZpZXdcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIEFuaW1hdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHRyYW5zaXRpb25OYW1lOiAnZmFkZScsIGNvbXBvbmVudDogJycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgbGlzdENsYXNzTmFtZXMgPSBjbGFzc05hbWVzKChfY2xhc3NOYW1lczIgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzMiwgcHJlZml4Q2xzICsgJy1saXN0JywgdHJ1ZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lczIsIHByZWZpeENscyArICctbGlzdC0nICsgbGlzdFR5cGUsIHRydWUpLCBfY2xhc3NOYW1lczIpKTtcbiAgICAgICAgICAgIHZhciBhbmltYXRpb25EaXJlY3Rpb24gPSBsaXN0VHlwZSA9PT0gJ3BpY3R1cmUtY2FyZCcgPyAnYW5pbWF0ZS1pbmxpbmUnIDogJ2FuaW1hdGUnO1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgQW5pbWF0ZSxcbiAgICAgICAgICAgICAgICB7IHRyYW5zaXRpb25OYW1lOiBwcmVmaXhDbHMgKyAnLScgKyBhbmltYXRpb25EaXJlY3Rpb24sIGNvbXBvbmVudDogJ2RpdicsIGNsYXNzTmFtZTogbGlzdENsYXNzTmFtZXMgfSxcbiAgICAgICAgICAgICAgICBsaXN0XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFVwbG9hZExpc3Q7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IFVwbG9hZExpc3Q7XG5cblVwbG9hZExpc3QuZGVmYXVsdFByb3BzID0ge1xuICAgIGxpc3RUeXBlOiAndGV4dCcsXG4gICAgcHJvZ3Jlc3NBdHRyOiB7XG4gICAgICAgIHN0cm9rZVdpZHRoOiAyLFxuICAgICAgICBzaG93SW5mbzogZmFsc2VcbiAgICB9LFxuICAgIHByZWZpeENsczogJ2FudC11cGxvYWQnLFxuICAgIHNob3dSZW1vdmVJY29uOiB0cnVlLFxuICAgIHNob3dQcmV2aWV3SWNvbjogdHJ1ZVxufTsiLCJpbXBvcnQgVXBsb2FkIGZyb20gJy4vVXBsb2FkJztcbmltcG9ydCBEcmFnZ2VyIGZyb20gJy4vRHJhZ2dlcic7XG5VcGxvYWQuRHJhZ2dlciA9IERyYWdnZXI7XG5leHBvcnQgZGVmYXVsdCBVcGxvYWQ7IiwiaW1wb3J0ICcuLi8uLi9zdHlsZS9pbmRleC5jc3MnO1xuaW1wb3J0ICcuL2luZGV4LmNzcyc7XG4vLyBzdHlsZSBkZXBlbmRlbmNpZXNcbmltcG9ydCAnLi4vLi4vcHJvZ3Jlc3Mvc3R5bGUvY3NzJztcbmltcG9ydCAnLi4vLi4vdG9vbHRpcC9zdHlsZS9jc3MnOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXguY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXguY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIFQoKSB7XG4gICAgcmV0dXJuIHRydWU7XG59XG4vLyBGaXggSUUgZmlsZS5zdGF0dXMgcHJvYmxlbVxuLy8gdmlhIGNvcGluZyBhIG5ldyBPYmplY3RcbmV4cG9ydCBmdW5jdGlvbiBmaWxlVG9PYmplY3QoZmlsZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGxhc3RNb2RpZmllZDogZmlsZS5sYXN0TW9kaWZpZWQsXG4gICAgICAgIGxhc3RNb2RpZmllZERhdGU6IGZpbGUubGFzdE1vZGlmaWVkRGF0ZSxcbiAgICAgICAgbmFtZTogZmlsZS5maWxlbmFtZSB8fCBmaWxlLm5hbWUsXG4gICAgICAgIHNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgdHlwZTogZmlsZS50eXBlLFxuICAgICAgICB1aWQ6IGZpbGUudWlkLFxuICAgICAgICByZXNwb25zZTogZmlsZS5yZXNwb25zZSxcbiAgICAgICAgZXJyb3I6IGZpbGUuZXJyb3IsXG4gICAgICAgIHBlcmNlbnQ6IDAsXG4gICAgICAgIG9yaWdpbkZpbGVPYmo6IGZpbGVcbiAgICB9O1xufVxuLyoqXG4gKiDnlJ/miJBQcm9ncmVzcyBwZXJjZW50OiAwLjEgLT4gMC45OFxuICogICAtIGZvciBpZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2VuUGVyY2VudEFkZCgpIHtcbiAgICB2YXIgayA9IDAuMTtcbiAgICB2YXIgaSA9IDAuMDE7XG4gICAgdmFyIGVuZCA9IDAuOTg7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIHZhciBzdGFydCA9IHM7XG4gICAgICAgIGlmIChzdGFydCA+PSBlbmQpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGFydDtcbiAgICAgICAgfVxuICAgICAgICBzdGFydCArPSBrO1xuICAgICAgICBrID0gayAtIGk7XG4gICAgICAgIGlmIChrIDwgMC4wMDEpIHtcbiAgICAgICAgICAgIGsgPSAwLjAwMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RhcnQgKiAxMDA7XG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaWxlSXRlbShmaWxlLCBmaWxlTGlzdCkge1xuICAgIHZhciBtYXRjaEtleSA9IGZpbGUudWlkICE9PSB1bmRlZmluZWQgPyAndWlkJyA6ICduYW1lJztcbiAgICByZXR1cm4gZmlsZUxpc3QuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtW21hdGNoS2V5XSA9PT0gZmlsZVttYXRjaEtleV07XG4gICAgfSlbMF07XG59XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRmlsZUl0ZW0oZmlsZSwgZmlsZUxpc3QpIHtcbiAgICB2YXIgbWF0Y2hLZXkgPSBmaWxlLnVpZCAhPT0gdW5kZWZpbmVkID8gJ3VpZCcgOiAnbmFtZSc7XG4gICAgdmFyIHJlbW92ZWQgPSBmaWxlTGlzdC5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW1bbWF0Y2hLZXldICE9PSBmaWxlW21hdGNoS2V5XTtcbiAgICB9KTtcbiAgICBpZiAocmVtb3ZlZC5sZW5ndGggPT09IGZpbGVMaXN0Lmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHJlbW92ZWQ7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIHN0eWxlbGludC1kaXNhYmxlIGF0LXJ1bGUtZW1wdHktbGluZS1iZWZvcmUsYXQtcnVsZS1uYW1lLXNwYWNlLWFmdGVyLGF0LXJ1bGUtbm8tdW5rbm93biAqL1xcbi8qIHN0eWxlbGludC1kaXNhYmxlIG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnMgKi9cXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1iYW5nLXNwYWNlLWJlZm9yZSxuby1kdXBsaWNhdGUtc2VsZWN0b3JzICovXFxuLyogc3R5bGVsaW50LWRpc2FibGUgZGVjbGFyYXRpb24tYmFuZy1zcGFjZS1iZWZvcmUsbm8tZHVwbGljYXRlLXNlbGVjdG9ycyAqL1xcbi5hbnQtYnJlYWRjcnVtYiB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbm9zcGFjZWQgTnVtYmVyXFxcIiwgXFxcIkNoaW5lc2UgUXVvdGVcXFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIlBpbmdGYW5nIFNDXFxcIiwgXFxcIkhpcmFnaW5vIFNhbnMgR0JcXFwiLCBcXFwiTWljcm9zb2Z0IFlhSGVpXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbi5hbnQtYnJlYWRjcnVtYiAuYW50aWNvbiB7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5hbnQtYnJlYWRjcnVtYiBhIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAuM3M7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAuM3M7XFxufVxcbi5hbnQtYnJlYWRjcnVtYiBhOmhvdmVyIHtcXG4gIGNvbG9yOiAjNDBhOWZmO1xcbn1cXG4uYW50LWJyZWFkY3J1bWIgPiBzcGFuOmxhc3QtY2hpbGQge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxufVxcbi5hbnQtYnJlYWRjcnVtYiA+IHNwYW46bGFzdC1jaGlsZCAuYW50LWJyZWFkY3J1bWItc2VwYXJhdG9yIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5hbnQtYnJlYWRjcnVtYi1zZXBhcmF0b3Ige1xcbiAgbWFyZ2luOiAwIDhweDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbn1cXG4uYW50LWJyZWFkY3J1bWItbGluayA+IC5hbnRpY29uICsgc3BhbiB7XFxuICBtYXJnaW4tbGVmdDogNHB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogc3R5bGVsaW50LWRpc2FibGUgYXQtcnVsZS1lbXB0eS1saW5lLWJlZm9yZSxhdC1ydWxlLW5hbWUtc3BhY2UtYWZ0ZXIsYXQtcnVsZS1uby11bmtub3duICovXFxuLyogc3R5bGVsaW50LWRpc2FibGUgbm8tZHVwbGljYXRlLXNlbGVjdG9ycyAqL1xcbi8qIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLWJhbmctc3BhY2UtYmVmb3JlLG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnMgKi9cXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1iYW5nLXNwYWNlLWJlZm9yZSxuby1kdXBsaWNhdGUtc2VsZWN0b3JzICovXFxuLmFudC1kaXZpZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9ub3NwYWNlZCBOdW1iZXJcXFwiLCBcXFwiQ2hpbmVzZSBRdW90ZVxcXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiUGluZ0ZhbmcgU0NcXFwiLCBcXFwiSGlyYWdpbm8gU2FucyBHQlxcXCIsIFxcXCJNaWNyb3NvZnQgWWFIZWlcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xcbn1cXG4uYW50LWRpdmlkZXIsXFxuLmFudC1kaXZpZGVyLXZlcnRpY2FsIHtcXG4gIG1hcmdpbjogMCA4cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDAuOWVtO1xcbiAgd2lkdGg6IDFweDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IC0wLjA2ZW07XFxufVxcbi5hbnQtZGl2aWRlci1ob3Jpem9udGFsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMjRweCAwO1xcbiAgY2xlYXI6IGJvdGg7XFxufVxcbi5hbnQtZGl2aWRlci1ob3Jpem9udGFsLmFudC1kaXZpZGVyLXdpdGgtdGV4dCB7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIG1hcmdpbjogMTZweCAwO1xcbn1cXG4uYW50LWRpdmlkZXItaG9yaXpvbnRhbC5hbnQtZGl2aWRlci13aXRoLXRleHQ6YmVmb3JlLFxcbi5hbnQtZGl2aWRlci1ob3Jpem9udGFsLmFudC1kaXZpZGVyLXdpdGgtdGV4dDphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDUwJTtcXG4gIHdpZHRoOiA1MCU7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U4ZThlODtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XFxuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcXG59XFxuLmFudC1kaXZpZGVyLWlubmVyLXRleHQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMCAyNHB4O1xcbn1cXG4uYW50LWRpdmlkZXItaG9yaXpvbnRhbC5hbnQtZGl2aWRlci13aXRoLXRleHQtbGVmdCB7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIG1hcmdpbjogMTZweCAwO1xcbn1cXG4uYW50LWRpdmlkZXItaG9yaXpvbnRhbC5hbnQtZGl2aWRlci13aXRoLXRleHQtbGVmdDpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA1MCU7XFxuICB3aWR0aDogNSU7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U4ZThlODtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XFxuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcXG59XFxuLmFudC1kaXZpZGVyLWhvcml6b250YWwuYW50LWRpdmlkZXItd2l0aC10ZXh0LWxlZnQ6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiA1MCU7XFxuICB3aWR0aDogOTUlO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOGU4ZTg7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XFxufVxcbi5hbnQtZGl2aWRlci1ob3Jpem9udGFsLmFudC1kaXZpZGVyLXdpdGgtdGV4dC1sZWZ0LWlubmVyLXRleHQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbn1cXG4uYW50LWRpdmlkZXItaG9yaXpvbnRhbC5hbnQtZGl2aWRlci13aXRoLXRleHQtcmlnaHQge1xcbiAgZGlzcGxheTogdGFibGU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSk7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBtYXJnaW46IDE2cHggMDtcXG59XFxuLmFudC1kaXZpZGVyLWhvcml6b250YWwuYW50LWRpdmlkZXItd2l0aC10ZXh0LXJpZ2h0OmJlZm9yZSB7XFxuICBjb250ZW50OiAnJztcXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDUwJTtcXG4gIHdpZHRoOiA5NSU7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U4ZThlODtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XFxuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcXG59XFxuLmFudC1kaXZpZGVyLWhvcml6b250YWwuYW50LWRpdmlkZXItd2l0aC10ZXh0LXJpZ2h0OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogNTAlO1xcbiAgd2lkdGg6IDUlO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOGU4ZTg7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XFxufVxcbi5hbnQtZGl2aWRlci1ob3Jpem9udGFsLmFudC1kaXZpZGVyLXdpdGgtdGV4dC1yaWdodC1pbm5lci10ZXh0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG59XFxuLmFudC1kaXZpZGVyLWRhc2hlZCB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZCAjZThlOGU4O1xcbn1cXG4uYW50LWRpdmlkZXItaG9yaXpvbnRhbC5hbnQtZGl2aWRlci13aXRoLXRleHQuYW50LWRpdmlkZXItZGFzaGVkIHtcXG4gIGJvcmRlci10b3A6IDA7XFxufVxcbi5hbnQtZGl2aWRlci1ob3Jpem9udGFsLmFudC1kaXZpZGVyLXdpdGgtdGV4dC5hbnQtZGl2aWRlci1kYXNoZWQ6YmVmb3JlLFxcbi5hbnQtZGl2aWRlci1ob3Jpem9udGFsLmFudC1kaXZpZGVyLXdpdGgtdGV4dC5hbnQtZGl2aWRlci1kYXNoZWQ6YWZ0ZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBkYXNoZWQgbm9uZSBub25lO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogc3R5bGVsaW50LWRpc2FibGUgYXQtcnVsZS1lbXB0eS1saW5lLWJlZm9yZSxhdC1ydWxlLW5hbWUtc3BhY2UtYWZ0ZXIsYXQtcnVsZS1uby11bmtub3duICovXFxuLyogc3R5bGVsaW50LWRpc2FibGUgbm8tZHVwbGljYXRlLXNlbGVjdG9ycyAqL1xcbi8qIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLWJhbmctc3BhY2UtYmVmb3JlLG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnMgKi9cXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1iYW5nLXNwYWNlLWJlZm9yZSxuby1kdXBsaWNhdGUtc2VsZWN0b3JzICovXFxuLmFudC1saXN0IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9ub3NwYWNlZCBOdW1iZXJcXFwiLCBcXFwiQ2hpbmVzZSBRdW90ZVxcXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiUGluZ0ZhbmcgU0NcXFwiLCBcXFwiSGlyYWdpbm8gU2FucyBHQlxcXCIsIFxcXCJNaWNyb3NvZnQgWWFIZWlcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5hbnQtbGlzdCAqIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5hbnQtbGlzdC1wYWdpbmF0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDI0cHg7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuLmFudC1saXN0LW1vcmUge1xcbiAgbWFyZ2luLXRvcDogMTJweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmFudC1saXN0LW1vcmUgYnV0dG9uIHtcXG4gIHBhZGRpbmctbGVmdDogMzJweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDMycHg7XFxufVxcbi5hbnQtbGlzdC1zcGluIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XFxufVxcbi5hbnQtbGlzdC1lbXB0eS10ZXh0IHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgcGFkZGluZzogMTZweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmFudC1saXN0LWl0ZW0ge1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nLXRvcDogMTJweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xcbn1cXG4uYW50LWxpc3QtaXRlbS1tZXRhIHtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBzdGFydDtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IHN0YXJ0O1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gIC13ZWJraXQtZmxleDogMTtcXG4gICAgICAtbXMtZmxleDogMTtcXG4gICAgICAgICAgZmxleDogMTtcXG4gIGZvbnQtc2l6ZTogMDtcXG59XFxuLmFudC1saXN0LWl0ZW0tbWV0YS1hdmF0YXIge1xcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xcbn1cXG4uYW50LWxpc3QtaXRlbS1tZXRhLWNvbnRlbnQge1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gIC13ZWJraXQtZmxleDogMSAwO1xcbiAgICAgIC1tcy1mbGV4OiAxIDA7XFxuICAgICAgICAgIGZsZXg6IDEgMDtcXG59XFxuLmFudC1saXN0LWl0ZW0tbWV0YS10aXRsZSB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xcbn1cXG4uYW50LWxpc3QtaXRlbS1tZXRhLXRpdGxlID4gYSB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcztcXG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XFxufVxcbi5hbnQtbGlzdC1pdGVtLW1ldGEtdGl0bGUgPiBhOmhvdmVyIHtcXG4gIGNvbG9yOiAjMTg5MGZmO1xcbn1cXG4uYW50LWxpc3QtaXRlbS1tZXRhLWRlc2NyaXB0aW9uIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxufVxcbi5hbnQtbGlzdC1pdGVtLWNvbnRlbnQge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgLXdlYmtpdC1mbGV4OiAxO1xcbiAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogZW5kO1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGVuZDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLmFudC1saXN0LWl0ZW0tY29udGVudC1zaW5nbGUge1xcbiAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBzdGFydDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG4uYW50LWxpc3QtaXRlbS1hY3Rpb24ge1xcbiAgZm9udC1zaXplOiAwO1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMDtcXG4gIC13ZWJraXQtZmxleDogMCAwIGF1dG87XFxuICAgICAgLW1zLWZsZXg6IDAgMCBhdXRvO1xcbiAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiA0OHB4O1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbi5hbnQtbGlzdC1pdGVtLWFjdGlvbiA+IGxpIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGFkZGluZzogMCA4cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsaW5lLWhlaWdodDogMjJweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmFudC1saXN0LWl0ZW0tYWN0aW9uID4gbGk6Zmlyc3QtY2hpbGQge1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbn1cXG4uYW50LWxpc3QtaXRlbS1hY3Rpb24tc3BsaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcXG4gIG1hcmdpbi10b3A6IC03cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDFweDtcXG4gIGhlaWdodDogMTRweDtcXG59XFxuLmFudC1saXN0LWl0ZW0tbWFpbiB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAtd2Via2l0LWZsZXg6IDE7XFxuICAgICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICAgIGZsZXg6IDE7XFxufVxcbi5hbnQtbGlzdC1oZWFkZXIsXFxuLmFudC1saXN0LWZvb3RlciB7XFxuICBwYWRkaW5nLXRvcDogMTJweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xcbn1cXG4uYW50LWxpc3QtZW1wdHkge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxuICBwYWRkaW5nOiAxNnB4IDA7XFxuICBmb250LXNpemU6IDEycHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5hbnQtbGlzdC1zcGxpdCAuYW50LWxpc3QtaXRlbSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZThlODtcXG59XFxuLmFudC1saXN0LXNwbGl0IC5hbnQtbGlzdC1pdGVtOmxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuLmFudC1saXN0LXNwbGl0IC5hbnQtbGlzdC1oZWFkZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGU4ZTg7XFxufVxcbi5hbnQtbGlzdC1sb2FkaW5nIC5hbnQtbGlzdC1zcGluLW5lc3RlZC1sb2FkaW5nIHtcXG4gIG1pbi1oZWlnaHQ6IDMycHg7XFxufVxcbi5hbnQtbGlzdC1zb21ldGhpbmctYWZ0ZXItbGFzdC1pdGVtIC5hbnQtbGlzdC1pdGVtOmxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGU4ZTg7XFxufVxcbi5hbnQtbGlzdC1sZyAuYW50LWxpc3QtaXRlbSB7XFxuICBwYWRkaW5nLXRvcDogMTZweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xcbn1cXG4uYW50LWxpc3Qtc20gLmFudC1saXN0LWl0ZW0ge1xcbiAgcGFkZGluZy10b3A6IDhweDtcXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XFxufVxcbi5hbnQtbGlzdC12ZXJ0aWNhbCAuYW50LWxpc3QtaXRlbSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmFudC1saXN0LXZlcnRpY2FsIC5hbnQtbGlzdC1pdGVtLWV4dHJhLXdyYXAge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5hbnQtbGlzdC12ZXJ0aWNhbCAuYW50LWxpc3QtaXRlbS1tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gIC13ZWJraXQtZmxleDogMTtcXG4gICAgICAtbXMtZmxleDogMTtcXG4gICAgICAgICAgZmxleDogMTtcXG59XFxuLmFudC1saXN0LXZlcnRpY2FsIC5hbnQtbGlzdC1pdGVtLWV4dHJhIHtcXG4gIG1hcmdpbi1sZWZ0OiA1OHB4O1xcbn1cXG4uYW50LWxpc3QtdmVydGljYWwgLmFudC1saXN0LWl0ZW0tbWV0YSB7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG4uYW50LWxpc3QtdmVydGljYWwgLmFudC1saXN0LWl0ZW0tbWV0YS1hdmF0YXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmFudC1saXN0LXZlcnRpY2FsIC5hbnQtbGlzdC1pdGVtLW1ldGEtdGl0bGUge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSk7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxufVxcbi5hbnQtbGlzdC12ZXJ0aWNhbCAuYW50LWxpc3QtaXRlbS1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG4uYW50LWxpc3QtdmVydGljYWwgLmFudC1saXN0LWl0ZW0tYWN0aW9uIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG4uYW50LWxpc3QtdmVydGljYWwgLmFudC1saXN0LWl0ZW0tYWN0aW9uID4gbGkge1xcbiAgcGFkZGluZzogMCAxNnB4O1xcbn1cXG4uYW50LWxpc3QtdmVydGljYWwgLmFudC1saXN0LWl0ZW0tYWN0aW9uID4gbGk6Zmlyc3QtY2hpbGQge1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbn1cXG4uYW50LWxpc3QtZ3JpZCAuYW50LWxpc3QtaXRlbSB7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5hbnQtbGlzdC1ncmlkIC5hbnQtbGlzdC1pdGVtLWNvbnRlbnQge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5hbnQtbGlzdC1ib3JkZXJlZCB7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xcbn1cXG4uYW50LWxpc3QtYm9yZGVyZWQgLmFudC1saXN0LWhlYWRlciB7XFxuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xcbn1cXG4uYW50LWxpc3QtYm9yZGVyZWQgLmFudC1saXN0LWZvb3RlciB7XFxuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xcbn1cXG4uYW50LWxpc3QtYm9yZGVyZWQgLmFudC1saXN0LWl0ZW0ge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGU4ZTg7XFxuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xcbn1cXG4uYW50LWxpc3QtYm9yZGVyZWQgLmFudC1saXN0LXBhZ2luYXRpb24ge1xcbiAgbWFyZ2luOiAxNnB4IDI0cHg7XFxufVxcbi5hbnQtbGlzdC1ib3JkZXJlZC5hbnQtbGlzdC1zbSAuYW50LWxpc3QtaXRlbSB7XFxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xcbn1cXG4uYW50LWxpc3QtYm9yZGVyZWQuYW50LWxpc3Qtc20gLmFudC1saXN0LWhlYWRlcixcXG4uYW50LWxpc3QtYm9yZGVyZWQuYW50LWxpc3Qtc20gLmFudC1saXN0LWZvb3RlciB7XFxuICBwYWRkaW5nOiA4cHggMTZweDtcXG59XFxuLmFudC1saXN0LWJvcmRlcmVkLmFudC1saXN0LWxnIC5hbnQtbGlzdC1oZWFkZXIsXFxuLmFudC1saXN0LWJvcmRlcmVkLmFudC1saXN0LWxnIC5hbnQtbGlzdC1mb290ZXIge1xcbiAgcGFkZGluZzogMTZweCAyNHB4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLmFudC1saXN0LWl0ZW0tYWN0aW9uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7XFxuICB9XFxuICAuYW50LWxpc3QtdmVydGljYWwgLmFudC1saXN0LWl0ZW0tZXh0cmEge1xcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gIC5hbnQtbGlzdC1pdGVtIHtcXG4gICAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIH1cXG4gIC5hbnQtbGlzdC1pdGVtLWFjdGlvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xcbiAgfVxcbiAgLmFudC1saXN0LXZlcnRpY2FsIC5hbnQtbGlzdC1pdGVtLWV4dHJhLXdyYXAge1xcbiAgICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xcbiAgICAgICAgLW1zLWZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlO1xcbiAgfVxcbiAgLmFudC1saXN0LXZlcnRpY2FsIC5hbnQtbGlzdC1pdGVtLW1haW4ge1xcbiAgICBtaW4td2lkdGg6IDIyMHB4O1xcbiAgfVxcbiAgLmFudC1saXN0LXZlcnRpY2FsIC5hbnQtbGlzdC1pdGVtLWV4dHJhIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICB9XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiBzdHlsZWxpbnQtZGlzYWJsZSBhdC1ydWxlLWVtcHR5LWxpbmUtYmVmb3JlLGF0LXJ1bGUtbmFtZS1zcGFjZS1hZnRlcixhdC1ydWxlLW5vLXVua25vd24gKi9cXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBuby1kdXBsaWNhdGUtc2VsZWN0b3JzICovXFxuLyogc3R5bGVsaW50LWRpc2FibGUgZGVjbGFyYXRpb24tYmFuZy1zcGFjZS1iZWZvcmUsbm8tZHVwbGljYXRlLXNlbGVjdG9ycyAqL1xcbi8qIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLWJhbmctc3BhY2UtYmVmb3JlLG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnMgKi9cXG4uYW50LXByb2dyZXNzIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9ub3NwYWNlZCBOdW1iZXJcXFwiLCBcXFwiQ2hpbmVzZSBRdW90ZVxcXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiUGluZ0ZhbmcgU0NcXFwiLCBcXFwiSGlyYWdpbm8gU2FucyBHQlxcXCIsIFxcXCJNaWNyb3NvZnQgWWFIZWlcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5hbnQtcHJvZ3Jlc3MtbGluZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmFudC1wcm9ncmVzcy1zbWFsbC5hbnQtcHJvZ3Jlc3MtbGluZSxcXG4uYW50LXByb2dyZXNzLXNtYWxsLmFudC1wcm9ncmVzcy1saW5lIC5hbnQtcHJvZ3Jlc3MtdGV4dCAuYW50aWNvbiB7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5hbnQtcHJvZ3Jlc3Mtb3V0ZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxuICBwYWRkaW5nLXJpZ2h0OiAwO1xcbn1cXG4uYW50LXByb2dyZXNzLXNob3ctaW5mbyAuYW50LXByb2dyZXNzLW91dGVyIHtcXG4gIHBhZGRpbmctcmlnaHQ6IGNhbGMoMmVtICsgOHB4KTtcXG4gIG1hcmdpbi1yaWdodDogY2FsYygtMmVtIC0gOHB4KTtcXG59XFxuLmFudC1wcm9ncmVzcy1pbm5lciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5hbnQtcHJvZ3Jlc3MtY2lyY2xlLXRyYWlsIHtcXG4gIHN0cm9rZTogI2Y1ZjVmNTtcXG59XFxuLmFudC1wcm9ncmVzcy1jaXJjbGUtcGF0aCB7XFxuICBzdHJva2U6ICMxODkwZmY7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogYW50LXByb2dyZXNzLWFwcGVhciAwLjNzO1xcbiAgICAgICAgICBhbmltYXRpb246IGFudC1wcm9ncmVzcy1hcHBlYXIgMC4zcztcXG59XFxuLmFudC1wcm9ncmVzcy1zdWNjZXNzLWJnLFxcbi5hbnQtcHJvZ3Jlc3MtYmcge1xcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg5MGZmO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4wOCwgMC44MiwgMC4xNywgMSkgMHM7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC4wOCwgMC44MiwgMC4xNywgMSkgMHM7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5hbnQtcHJvZ3Jlc3Mtc3VjY2Vzcy1iZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTJjNDFhO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG59XFxuLmFudC1wcm9ncmVzcy10ZXh0IHtcXG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcXG4gIHdpZHRoOiAyZW07XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBtYXJnaW4tbGVmdDogOHB4O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbi5hbnQtcHJvZ3Jlc3MtdGV4dCAuYW50aWNvbiB7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbi5hbnQtcHJvZ3Jlc3Mtc3RhdHVzLWFjdGl2ZSAuYW50LXByb2dyZXNzLWJnOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBhbnQtcHJvZ3Jlc3MtYWN0aXZlIDIuNHMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpIGluZmluaXRlO1xcbiAgICAgICAgICBhbmltYXRpb246IGFudC1wcm9ncmVzcy1hY3RpdmUgMi40cyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSkgaW5maW5pdGU7XFxufVxcbi5hbnQtcHJvZ3Jlc3Mtc3RhdHVzLWV4Y2VwdGlvbiAuYW50LXByb2dyZXNzLWJnIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNTIyMmQ7XFxufVxcbi5hbnQtcHJvZ3Jlc3Mtc3RhdHVzLWV4Y2VwdGlvbiAuYW50LXByb2dyZXNzLXRleHQge1xcbiAgY29sb3I6ICNmNTIyMmQ7XFxufVxcbi5hbnQtcHJvZ3Jlc3Mtc3RhdHVzLWV4Y2VwdGlvbiAuYW50LXByb2dyZXNzLWNpcmNsZS1wYXRoIHtcXG4gIHN0cm9rZTogI2Y1MjIyZDtcXG59XFxuLmFudC1wcm9ncmVzcy1zdGF0dXMtc3VjY2VzcyAuYW50LXByb2dyZXNzLWJnIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MmM0MWE7XFxufVxcbi5hbnQtcHJvZ3Jlc3Mtc3RhdHVzLXN1Y2Nlc3MgLmFudC1wcm9ncmVzcy10ZXh0IHtcXG4gIGNvbG9yOiAjNTJjNDFhO1xcbn1cXG4uYW50LXByb2dyZXNzLXN0YXR1cy1zdWNjZXNzIC5hbnQtcHJvZ3Jlc3MtY2lyY2xlLXBhdGgge1xcbiAgc3Ryb2tlOiAjNTJjNDFhO1xcbn1cXG4uYW50LXByb2dyZXNzLWNpcmNsZSAuYW50LXByb2dyZXNzLWlubmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5hbnQtcHJvZ3Jlc3MtY2lyY2xlIC5hbnQtcHJvZ3Jlc3MtdGV4dCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICB0b3A6IDUwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIGxlZnQ6IDA7XFxuICBtYXJnaW46IDA7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcXG59XFxuLmFudC1wcm9ncmVzcy1jaXJjbGUgLmFudC1wcm9ncmVzcy10ZXh0IC5hbnRpY29uIHtcXG4gIGZvbnQtc2l6ZTogMS4xNjY2NjY2N2VtO1xcbn1cXG4uYW50LXByb2dyZXNzLWNpcmNsZS5hbnQtcHJvZ3Jlc3Mtc3RhdHVzLWV4Y2VwdGlvbiAuYW50LXByb2dyZXNzLXRleHQge1xcbiAgY29sb3I6ICNmNTIyMmQ7XFxufVxcbi5hbnQtcHJvZ3Jlc3MtY2lyY2xlLmFudC1wcm9ncmVzcy1zdGF0dXMtc3VjY2VzcyAuYW50LXByb2dyZXNzLXRleHQge1xcbiAgY29sb3I6ICM1MmM0MWE7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBhbnQtcHJvZ3Jlc3MtYWN0aXZlIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMC4xO1xcbiAgICB3aWR0aDogMDtcXG4gIH1cXG4gIDIwJSB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgd2lkdGg6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgYW50LXByb2dyZXNzLWFjdGl2ZSB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDAuMTtcXG4gICAgd2lkdGg6IDA7XFxuICB9XFxuICAyMCUge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHdpZHRoOiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogc3R5bGVsaW50LWRpc2FibGUgYXQtcnVsZS1lbXB0eS1saW5lLWJlZm9yZSxhdC1ydWxlLW5hbWUtc3BhY2UtYWZ0ZXIsYXQtcnVsZS1uby11bmtub3duICovXFxuLyogc3R5bGVsaW50LWRpc2FibGUgbm8tZHVwbGljYXRlLXNlbGVjdG9ycyAqL1xcbi8qIHN0eWxlbGludC1kaXNhYmxlIGRlY2xhcmF0aW9uLWJhbmctc3BhY2UtYmVmb3JlLG5vLWR1cGxpY2F0ZS1zZWxlY3RvcnMgKi9cXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1iYW5nLXNwYWNlLWJlZm9yZSxuby1kdXBsaWNhdGUtc2VsZWN0b3JzICovXFxuLmFudC11cGxvYWQge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb25vc3BhY2VkIE51bWJlclxcXCIsIFxcXCJDaGluZXNlIFF1b3RlXFxcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJQaW5nRmFuZyBTQ1xcXCIsIFxcXCJIaXJhZ2lubyBTYW5zIEdCXFxcIiwgXFxcIk1pY3Jvc29mdCBZYUhlaVxcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG91dGxpbmU6IDA7XFxufVxcbi5hbnQtdXBsb2FkIHAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4uYW50LXVwbG9hZC1idG4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5hbnQtdXBsb2FkIGlucHV0W3R5cGU9XFxcImZpbGVcXFwiXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5hbnQtdXBsb2FkLmFudC11cGxvYWQtc2VsZWN0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmFudC11cGxvYWQuYW50LXVwbG9hZC1zZWxlY3QtcGljdHVyZS1jYXJkIHtcXG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjZDlkOWQ5O1xcbiAgd2lkdGg6IDEwNHB4O1xcbiAgaGVpZ2h0OiAxMDRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBlYXNlO1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgZGlzcGxheTogdGFibGU7XFxufVxcbi5hbnQtdXBsb2FkLmFudC11cGxvYWQtc2VsZWN0LXBpY3R1cmUtY2FyZCA+IC5hbnQtdXBsb2FkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcbi5hbnQtdXBsb2FkLmFudC11cGxvYWQtc2VsZWN0LXBpY3R1cmUtY2FyZDpob3ZlciB7XFxuICBib3JkZXItY29sb3I6ICMxODkwZmY7XFxufVxcbi5hbnQtdXBsb2FkLmFudC11cGxvYWQtZHJhZyB7XFxuICBib3JkZXI6IDFweCBkYXNoZWQgI2Q5ZDlkOTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3M7XFxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMTZweCAwO1xcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcXG59XFxuLmFudC11cGxvYWQuYW50LXVwbG9hZC1kcmFnLmFudC11cGxvYWQtZHJhZy1ob3Zlcjpub3QoLmFudC11cGxvYWQtZGlzYWJsZWQpIHtcXG4gIGJvcmRlcjogMnB4IGRhc2hlZCAjNDBhOWZmO1xcbn1cXG4uYW50LXVwbG9hZC5hbnQtdXBsb2FkLWRyYWcuYW50LXVwbG9hZC1kaXNhYmxlZCB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4uYW50LXVwbG9hZC5hbnQtdXBsb2FkLWRyYWcgLmFudC11cGxvYWQtYnRuIHtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uYW50LXVwbG9hZC5hbnQtdXBsb2FkLWRyYWcgLmFudC11cGxvYWQtZHJhZy1jb250YWluZXIge1xcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5hbnQtdXBsb2FkLmFudC11cGxvYWQtZHJhZzpub3QoLmFudC11cGxvYWQtZGlzYWJsZWQpOmhvdmVyIHtcXG4gIGJvcmRlci1jb2xvcjogIzQwYTlmZjtcXG59XFxuLmFudC11cGxvYWQuYW50LXVwbG9hZC1kcmFnIHAuYW50LXVwbG9hZC1kcmFnLWljb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLmFudC11cGxvYWQuYW50LXVwbG9hZC1kcmFnIHAuYW50LXVwbG9hZC1kcmFnLWljb24gLmFudGljb24ge1xcbiAgZm9udC1zaXplOiA0OHB4O1xcbiAgY29sb3I6ICM0MGE5ZmY7XFxufVxcbi5hbnQtdXBsb2FkLmFudC11cGxvYWQtZHJhZyBwLmFudC11cGxvYWQtdGV4dCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBtYXJnaW46IDAgMCA0cHg7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTtcXG59XFxuLmFudC11cGxvYWQuYW50LXVwbG9hZC1kcmFnIHAuYW50LXVwbG9hZC1oaW50IHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbn1cXG4uYW50LXVwbG9hZC5hbnQtdXBsb2FkLWRyYWcgLmFudGljb24tcGx1cyB7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3M7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XFxufVxcbi5hbnQtdXBsb2FkLmFudC11cGxvYWQtZHJhZyAuYW50aWNvbi1wbHVzOmhvdmVyIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbn1cXG4uYW50LXVwbG9hZC5hbnQtdXBsb2FkLWRyYWc6aG92ZXIgLmFudGljb24tcGx1cyB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG59XFxuLmFudC11cGxvYWQtbGlzdCB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbm9zcGFjZWQgTnVtYmVyXFxcIiwgXFxcIkNoaW5lc2UgUXVvdGVcXFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIlBpbmdGYW5nIFNDXFxcIiwgXFxcIkhpcmFnaW5vIFNhbnMgR0JcXFwiLCBcXFwiTWljcm9zb2Z0IFlhSGVpXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgem9vbTogMTtcXG59XFxuLmFudC11cGxvYWQtbGlzdDpiZWZvcmUsXFxuLmFudC11cGxvYWQtbGlzdDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG59XFxuLmFudC11cGxvYWQtbGlzdDphZnRlciB7XFxuICBjbGVhcjogYm90aDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIGZvbnQtc2l6ZTogMDtcXG4gIGhlaWdodDogMDtcXG59XFxuLmFudC11cGxvYWQtbGlzdC1pdGVtIHtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogMjJweDtcXG59XFxuLmFudC11cGxvYWQtbGlzdC1pdGVtLW5hbWUge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHBhZGRpbmctbGVmdDogMjJweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uYW50LXVwbG9hZC1saXN0LWl0ZW0taW5mbyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAwIDEycHggMCA0cHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXG59XFxuLmFudC11cGxvYWQtbGlzdC1pdGVtLWluZm8gPiBzcGFuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uYW50LXVwbG9hZC1saXN0LWl0ZW0taW5mbyAuYW50aWNvbi1sb2FkaW5nLFxcbi5hbnQtdXBsb2FkLWxpc3QtaXRlbS1pbmZvIC5hbnRpY29uLXBhcGVyLWNsaXAge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDVweDtcXG59XFxuLmFudC11cGxvYWQtbGlzdC1pdGVtIC5hbnRpY29uLWNyb3NzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtc2l6ZTogMTBweCBcXFxcOTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjgzMzMzMzMzKSByb3RhdGUoMGRlZyk7XFxuICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC44MzMzMzMzMykgcm90YXRlKDBkZWcpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuODMzMzMzMzMpIHJvdGF0ZSgwZGVnKTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcztcXG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XFxuICBvcGFjaXR5OiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDRweDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxufVxcbjpyb290IC5hbnQtdXBsb2FkLWxpc3QtaXRlbSAuYW50aWNvbi1jcm9zcyB7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5hbnQtdXBsb2FkLWxpc3QtaXRlbSAuYW50aWNvbi1jcm9zczpob3ZlciB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcXG59XFxuLmFudC11cGxvYWQtbGlzdC1pdGVtOmhvdmVyIC5hbnQtdXBsb2FkLWxpc3QtaXRlbS1pbmZvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmY3ZmY7XFxufVxcbi5hbnQtdXBsb2FkLWxpc3QtaXRlbTpob3ZlciAuYW50aWNvbi1jcm9zcyB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4uYW50LXVwbG9hZC1saXN0LWl0ZW0tZXJyb3IsXFxuLmFudC11cGxvYWQtbGlzdC1pdGVtLWVycm9yIC5hbnRpY29uLXBhcGVyLWNsaXAsXFxuLmFudC11cGxvYWQtbGlzdC1pdGVtLWVycm9yIC5hbnQtdXBsb2FkLWxpc3QtaXRlbS1uYW1lIHtcXG4gIGNvbG9yOiAjZjUyMjJkO1xcbn1cXG4uYW50LXVwbG9hZC1saXN0LWl0ZW0tZXJyb3IgLmFudGljb24tY3Jvc3Mge1xcbiAgb3BhY2l0eTogMTtcXG4gIGNvbG9yOiAjZjUyMjJkICFpbXBvcnRhbnQ7XFxufVxcbi5hbnQtdXBsb2FkLWxpc3QtaXRlbS1wcm9ncmVzcyB7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm90dG9tOiAtMTJweDtcXG4gIHBhZGRpbmctbGVmdDogMjZweDtcXG59XFxuLmFudC11cGxvYWQtbGlzdC1waWN0dXJlIC5hbnQtdXBsb2FkLWxpc3QtaXRlbSxcXG4uYW50LXVwbG9hZC1saXN0LXBpY3R1cmUtY2FyZCAuYW50LXVwbG9hZC1saXN0LWl0ZW0ge1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcXG4gIGhlaWdodDogNjZweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmFudC11cGxvYWQtbGlzdC1waWN0dXJlIC5hbnQtdXBsb2FkLWxpc3QtaXRlbTpob3ZlcixcXG4uYW50LXVwbG9hZC1saXN0LXBpY3R1cmUtY2FyZCAuYW50LXVwbG9hZC1saXN0LWl0ZW06aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcbi5hbnQtdXBsb2FkLWxpc3QtcGljdHVyZSAuYW50LXVwbG9hZC1saXN0LWl0ZW0tZXJyb3IsXFxuLmFudC11cGxvYWQtbGlzdC1waWN0dXJlLWNhcmQgLmFudC11cGxvYWQtbGlzdC1pdGVtLWVycm9yIHtcXG4gIGJvcmRlci1jb2xvcjogI2Y1MjIyZDtcXG59XFxuLmFudC11cGxvYWQtbGlzdC1waWN0dXJlIC5hbnQtdXBsb2FkLWxpc3QtaXRlbS1pbmZvLFxcbi5hbnQtdXBsb2FkLWxpc3QtcGljdHVyZS1jYXJkIC5hbnQtdXBsb2FkLWxpc3QtaXRlbS1pbmZvIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5hbnQtdXBsb2FkLWxpc3QtcGljdHVyZSAuYW50LXVwbG9hZC1saXN0LWl0ZW06aG92ZXIgLmFudC11cGxvYWQtbGlzdC1pdGVtLWluZm8sXFxuLmFudC11cGxvYWQtbGlzdC1waWN0dXJlLWNhcmQgLmFudC11cGxvYWQtbGlzdC1pdGVtOmhvdmVyIC5hbnQtdXBsb2FkLWxpc3QtaXRlbS1pbmZvIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG4uYW50LXVwbG9hZC1saXN0LXBpY3R1cmUgLmFudC11cGxvYWQtbGlzdC1pdGVtLXVwbG9hZGluZyxcXG4uYW50LXVwbG9hZC1saXN0LXBpY3R1cmUtY2FyZCAuYW50LXVwbG9hZC1saXN0LWl0ZW0tdXBsb2FkaW5nIHtcXG4gIGJvcmRlci1zdHlsZTogZGFzaGVkO1xcbn1cXG4uYW50LXVwbG9hZC1saXN0LXBpY3R1cmUgLmFudC11cGxvYWQtbGlzdC1pdGVtLXRodW1ibmFpbCxcXG4uYW50LXVwbG9hZC1saXN0LXBpY3R1cmUtY2FyZCAuYW50LXVwbG9hZC1saXN0LWl0ZW0tdGh1bWJuYWlsIHtcXG4gIHdpZHRoOiA0OHB4O1xcbiAgaGVpZ2h0OiA0OHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA4cHg7XFxuICBsZWZ0OiA4cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5hbnQtdXBsb2FkLWxpc3QtcGljdHVyZSAuYW50LXVwbG9hZC1saXN0LWl0ZW0taWNvbixcXG4uYW50LXVwbG9hZC1saXN0LXBpY3R1cmUtY2FyZCAuYW50LXVwbG9hZC1saXN0LWl0ZW0taWNvbiB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luLXRvcDogLTE4cHg7XFxuICBtYXJnaW4tbGVmdDogLTE4cHg7XFxufVxcbi5hbnQtdXBsb2FkLWxpc3QtcGljdHVyZSAuYW50LXVwbG9hZC1saXN0LWl0ZW0tdGh1bWJuYWlsIGltZyxcXG4uYW50LXVwbG9hZC1saXN0LXBpY3R1cmUtY2FyZCAuYW50LXVwbG9hZC1saXN0LWl0ZW0tdGh1bWJuYWlsIGltZyB7XFxuICB3aWR0aDogNDhweDtcXG4gIGhlaWdodDogNDhweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmFudC11cGxvYWQtbGlzdC1waWN0dXJlIC5hbnQtdXBsb2FkLWxpc3QtaXRlbS10aHVtYm5haWwuYW50aWNvbjpiZWZvcmUsXFxuLmFudC11cGxvYWQtbGlzdC1waWN0dXJlLWNhcmQgLmFudC11cGxvYWQtbGlzdC1pdGVtLXRodW1ibmFpbC5hbnRpY29uOmJlZm9yZSB7XFxuICBsaW5lLWhlaWdodDogNDhweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbn1cXG4uYW50LXVwbG9hZC1saXN0LXBpY3R1cmUgLmFudC11cGxvYWQtbGlzdC1pdGVtLW5hbWUsXFxuLmFudC11cGxvYWQtbGlzdC1waWN0dXJlLWNhcmQgLmFudC11cGxvYWQtbGlzdC1pdGVtLW5hbWUge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG1hcmdpbjogMCAwIDAgOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3M7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xcbiAgcGFkZGluZy1sZWZ0OiA0OHB4O1xcbiAgcGFkZGluZy1yaWdodDogOHB4O1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4uYW50LXVwbG9hZC1saXN0LXBpY3R1cmUgLmFudC11cGxvYWQtbGlzdC1pdGVtLXVwbG9hZGluZyAuYW50LXVwbG9hZC1saXN0LWl0ZW0tbmFtZSxcXG4uYW50LXVwbG9hZC1saXN0LXBpY3R1cmUtY2FyZCAuYW50LXVwbG9hZC1saXN0LWl0ZW0tdXBsb2FkaW5nIC5hbnQtdXBsb2FkLWxpc3QtaXRlbS1uYW1lIHtcXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xcbn1cXG4uYW50LXVwbG9hZC1saXN0LXBpY3R1cmUgLmFudC11cGxvYWQtbGlzdC1pdGVtLXByb2dyZXNzLFxcbi5hbnQtdXBsb2FkLWxpc3QtcGljdHVyZS1jYXJkIC5hbnQtdXBsb2FkLWxpc3QtaXRlbS1wcm9ncmVzcyB7XFxuICBwYWRkaW5nLWxlZnQ6IDU2cHg7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgYm90dG9tOiAxNHB4O1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDI0cHgpO1xcbn1cXG4uYW50LXVwbG9hZC1saXN0LXBpY3R1cmUgLmFudGljb24tY3Jvc3MsXFxuLmFudC11cGxvYWQtbGlzdC1waWN0dXJlLWNhcmQgLmFudGljb24tY3Jvc3Mge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDhweDtcXG4gIHRvcDogOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbi5hbnQtdXBsb2FkLWxpc3QtcGljdHVyZS1jYXJkIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuLmFudC11cGxvYWQtbGlzdC1waWN0dXJlLWNhcmQuYW50LXVwbG9hZC1saXN0OmFmdGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5hbnQtdXBsb2FkLWxpc3QtcGljdHVyZS1jYXJkIC5hbnQtdXBsb2FkLWxpc3QtaXRlbSB7XFxuICBmbG9hdDogbGVmdDtcXG4gIHdpZHRoOiAxMDRweDtcXG4gIGhlaWdodDogMTA0cHg7XFxuICBtYXJnaW46IDAgOHB4IDhweCAwO1xcbn1cXG4uYW50LXVwbG9hZC1saXN0LXBpY3R1cmUtY2FyZCAuYW50LXVwbG9hZC1saXN0LWl0ZW0taW5mbyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uYW50LXVwbG9hZC1saXN0LXBpY3R1cmUtY2FyZCAuYW50LXVwbG9hZC1saXN0LWl0ZW0taW5mbzpiZWZvcmUge1xcbiAgY29udGVudDogJyAnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcztcXG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5hbnQtdXBsb2FkLWxpc3QtcGljdHVyZS1jYXJkIC5hbnQtdXBsb2FkLWxpc3QtaXRlbTpob3ZlciAuYW50LXVwbG9hZC1saXN0LWl0ZW0taW5mbzpiZWZvcmUge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuLmFudC11cGxvYWQtbGlzdC1waWN0dXJlLWNhcmQgLmFudC11cGxvYWQtbGlzdC1pdGVtLWFjdGlvbnMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICB6LWluZGV4OiAxMDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBvcGFjaXR5OiAwO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcXG59XFxuLmFudC11cGxvYWQtbGlzdC1waWN0dXJlLWNhcmQgLmFudC11cGxvYWQtbGlzdC1pdGVtLWFjdGlvbnMgLmFudGljb24tZXllLW8sXFxuLmFudC11cGxvYWQtbGlzdC1waWN0dXJlLWNhcmQgLmFudC11cGxvYWQtbGlzdC1pdGVtLWFjdGlvbnMgLmFudGljb24tZGVsZXRlIHtcXG4gIHotaW5kZXg6IDEwO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XFxuICBtYXJnaW46IDAgNHB4O1xcbn1cXG4uYW50LXVwbG9hZC1saXN0LXBpY3R1cmUtY2FyZCAuYW50LXVwbG9hZC1saXN0LWl0ZW0tYWN0aW9ucyAuYW50aWNvbi1leWUtbzpob3ZlcixcXG4uYW50LXVwbG9hZC1saXN0LXBpY3R1cmUtY2FyZCAuYW50LXVwbG9hZC1saXN0LWl0ZW0tYWN0aW9ucyAuYW50aWNvbi1kZWxldGU6aG92ZXIge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5hbnQtdXBsb2FkLWxpc3QtcGljdHVyZS1jYXJkIC5hbnQtdXBsb2FkLWxpc3QtaXRlbS1pbmZvOmhvdmVyICsgLmFudC11cGxvYWQtbGlzdC1pdGVtLWFjdGlvbnMsXFxuLmFudC11cGxvYWQtbGlzdC1waWN0dXJlLWNhcmQgLmFudC11cGxvYWQtbGlzdC1pdGVtLWFjdGlvbnM6aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuLmFudC11cGxvYWQtbGlzdC1waWN0dXJlLWNhcmQgLmFudC11cGxvYWQtbGlzdC1pdGVtLXRodW1ibmFpbCxcXG4uYW50LXVwbG9hZC1saXN0LXBpY3R1cmUtY2FyZCAuYW50LXVwbG9hZC1saXN0LWl0ZW0tdGh1bWJuYWlsIGltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IHN0YXRpYztcXG59XFxuLmFudC11cGxvYWQtbGlzdC1waWN0dXJlLWNhcmQgLmFudC11cGxvYWQtbGlzdC1pdGVtLW5hbWUge1xcbiAgbWFyZ2luOiA4cHggMCAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uYW50LXVwbG9hZC1saXN0LXBpY3R1cmUtY2FyZCAuYW50aWNvbi1waWN0dXJlICsgLmFudC11cGxvYWQtbGlzdC1pdGVtLW5hbWUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5hbnQtdXBsb2FkLWxpc3QtcGljdHVyZS1jYXJkIC5hbnQtdXBsb2FkLWxpc3QtaXRlbS11cGxvYWRpbmcuYW50LXVwbG9hZC1saXN0LWl0ZW0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG59XFxuLmFudC11cGxvYWQtbGlzdC1waWN0dXJlLWNhcmQgLmFudC11cGxvYWQtbGlzdC1pdGVtLXVwbG9hZGluZyAuYW50LXVwbG9hZC1saXN0LWl0ZW0taW5mbyB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbi5hbnQtdXBsb2FkLWxpc3QtcGljdHVyZS1jYXJkIC5hbnQtdXBsb2FkLWxpc3QtaXRlbS11cGxvYWRpbmcgLmFudC11cGxvYWQtbGlzdC1pdGVtLWluZm86YmVmb3JlLFxcbi5hbnQtdXBsb2FkLWxpc3QtcGljdHVyZS1jYXJkIC5hbnQtdXBsb2FkLWxpc3QtaXRlbS11cGxvYWRpbmcgLmFudC11cGxvYWQtbGlzdC1pdGVtLWluZm8gLmFudGljb24tZXllLW8sXFxuLmFudC11cGxvYWQtbGlzdC1waWN0dXJlLWNhcmQgLmFudC11cGxvYWQtbGlzdC1pdGVtLXVwbG9hZGluZyAuYW50LXVwbG9hZC1saXN0LWl0ZW0taW5mbyAuYW50aWNvbi1kZWxldGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmFudC11cGxvYWQtbGlzdC1waWN0dXJlLWNhcmQgLmFudC11cGxvYWQtbGlzdC1pdGVtLXVwbG9hZGluZy10ZXh0IHtcXG4gIG1hcmdpbi10b3A6IDE4cHg7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG59XFxuLmFudC11cGxvYWQtbGlzdC1waWN0dXJlLWNhcmQgLmFudC11cGxvYWQtbGlzdC1pdGVtLXByb2dyZXNzIHtcXG4gIHBhZGRpbmctbGVmdDogMDtcXG4gIGJvdHRvbTogMzJweDtcXG59XFxuLmFudC11cGxvYWQtbGlzdCAuYW50LXVwbG9hZC1zdWNjZXNzLWljb24ge1xcbiAgY29sb3I6ICM1MmM0MWE7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmFudC11cGxvYWQtbGlzdCAuYW50LXVwbG9hZC1hbmltYXRlLWVudGVyLFxcbi5hbnQtdXBsb2FkLWxpc3QgLmFudC11cGxvYWQtYW5pbWF0ZS1sZWF2ZSxcXG4uYW50LXVwbG9hZC1saXN0IC5hbnQtdXBsb2FkLWFuaW1hdGUtaW5saW5lLWVudGVyLFxcbi5hbnQtdXBsb2FkLWxpc3QgLmFudC11cGxvYWQtYW5pbWF0ZS1pbmxpbmUtbGVhdmUge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IC4zcztcXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuM3M7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGN1YmljLWJlemllcigwLjc4LCAwLjE0LCAwLjE1LCAwLjg2KTtcXG4gICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogY3ViaWMtYmV6aWVyKDAuNzgsIDAuMTQsIDAuMTUsIDAuODYpO1xcbn1cXG4uYW50LXVwbG9hZC1saXN0IC5hbnQtdXBsb2FkLWFuaW1hdGUtZW50ZXIge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogdXBsb2FkQW5pbWF0ZUluO1xcbiAgICAgICAgICBhbmltYXRpb24tbmFtZTogdXBsb2FkQW5pbWF0ZUluO1xcbn1cXG4uYW50LXVwbG9hZC1saXN0IC5hbnQtdXBsb2FkLWFuaW1hdGUtbGVhdmUge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogdXBsb2FkQW5pbWF0ZU91dDtcXG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHVwbG9hZEFuaW1hdGVPdXQ7XFxufVxcbi5hbnQtdXBsb2FkLWxpc3QgLmFudC11cGxvYWQtYW5pbWF0ZS1pbmxpbmUtZW50ZXIge1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogdXBsb2FkQW5pbWF0ZUlubGluZUluO1xcbiAgICAgICAgICBhbmltYXRpb24tbmFtZTogdXBsb2FkQW5pbWF0ZUlubGluZUluO1xcbn1cXG4uYW50LXVwbG9hZC1saXN0IC5hbnQtdXBsb2FkLWFuaW1hdGUtaW5saW5lLWxlYXZlIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHVwbG9hZEFuaW1hdGVJbmxpbmVPdXQ7XFxuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiB1cGxvYWRBbmltYXRlSW5saW5lT3V0O1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgdXBsb2FkQW5pbWF0ZUluIHtcXG4gIGZyb20ge1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyB1cGxvYWRBbmltYXRlSW4ge1xcbiAgZnJvbSB7XFxuICAgIGhlaWdodDogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgdXBsb2FkQW5pbWF0ZU91dCB7XFxuICB0byB7XFxuICAgIGhlaWdodDogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHVwbG9hZEFuaW1hdGVPdXQge1xcbiAgdG8ge1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHVwbG9hZEFuaW1hdGVJbmxpbmVJbiB7XFxuICBmcm9tIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIHVwbG9hZEFuaW1hdGVJbmxpbmVJbiB7XFxuICBmcm9tIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgdXBsb2FkQW5pbWF0ZUlubGluZU91dCB7XFxuICB0byB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyB1cGxvYWRBbmltYXRlSW5saW5lT3V0IHtcXG4gIHRvIHtcXG4gICAgd2lkdGg6IDA7XFxuICAgIGhlaWdodDogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmVkaXRfYl9wbDI1e1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxyXFxufVwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJFOi/liY3nq68vam15ZC1hbXMvcGMvc3JjL3BhZ2VzL2VkaXRfYi9lZGl0X2IuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0NBQ3RCXCIsXCJmaWxlXCI6XCJlZGl0X2IuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5wbDI1e1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJwbDI1XCI6IFwiZWRpdF9iX3BsMjVcIlxufTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnByb2Nlc3NfZm9ybXtcXHJcXG4gICAgcGFkZGluZzogMTVweCAwO1xcclxcbn1cXHJcXG4ucHJvY2Vzc19zZWxlY3R7XFxyXFxuICAgIHdpZHRoOiAxMzBweCAhaW1wb3J0YW50O1xcclxcbn1cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiRTov5YmN56uvL2pteWQtYW1zL3BjL3NyYy9wYWdlcy9wcm9jZXNzL3Byb2Nlc3MuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSx3QkFBd0I7Q0FDM0JcIixcImZpbGVcIjpcInByb2Nlc3MuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mb3Jte1xcclxcbiAgICBwYWRkaW5nOiAxNXB4IDA7XFxyXFxufVxcclxcbi5zZWxlY3R7XFxyXFxuICAgIHdpZHRoOiAxMzBweCAhaW1wb3J0YW50O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiZm9ybVwiOiBcInByb2Nlc3NfZm9ybVwiLFxuXHRcInNlbGVjdFwiOiBcInByb2Nlc3Nfc2VsZWN0XCJcbn07IiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBEYXRhVmlldyA9IGdldE5hdGl2ZShyb290LCAnRGF0YVZpZXcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBEYXRhVmlldztcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgUHJvbWlzZSA9IGdldE5hdGl2ZShyb290LCAnUHJvbWlzZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb21pc2U7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFNldCA9IGdldE5hdGl2ZShyb290LCAnU2V0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0O1xuIiwidmFyIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKSxcbiAgICBzZXRDYWNoZUFkZCA9IHJlcXVpcmUoJy4vX3NldENhY2hlQWRkJyksXG4gICAgc2V0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19zZXRDYWNoZUhhcycpO1xuXG4vKipcbiAqXG4gKiBDcmVhdGVzIGFuIGFycmF5IGNhY2hlIG9iamVjdCB0byBzdG9yZSB1bmlxdWUgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFt2YWx1ZXNdIFRoZSB2YWx1ZXMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFNldENhY2hlKHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcyA9PSBudWxsID8gMCA6IHZhbHVlcy5sZW5ndGg7XG5cbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB0aGlzLmFkZCh2YWx1ZXNbaW5kZXhdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU2V0Q2FjaGVgLlxuU2V0Q2FjaGUucHJvdG90eXBlLmFkZCA9IFNldENhY2hlLnByb3RvdHlwZS5wdXNoID0gc2V0Q2FjaGVBZGQ7XG5TZXRDYWNoZS5wcm90b3R5cGUuaGFzID0gc2V0Q2FjaGVIYXM7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0Q2FjaGU7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFdlYWtNYXAgPSBnZXROYXRpdmUocm9vdCwgJ1dlYWtNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBXZWFrTWFwO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZmlsdGVyYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc0luZGV4ID0gMCxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJlc3VsdFtyZXNJbmRleCsrXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RmlsdGVyO1xuIiwidmFyIGJhc2VJbmRleE9mID0gcmVxdWlyZSgnLi9fYmFzZUluZGV4T2YnKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uaW5jbHVkZXNgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogc3BlY2lmeWluZyBhbiBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0IFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB0YXJnZXRgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5SW5jbHVkZXMoYXJyYXksIHZhbHVlKSB7XG4gIHZhciBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmIGJhc2VJbmRleE9mKGFycmF5LCB2YWx1ZSwgMCkgPiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUluY2x1ZGVzO1xuIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2UgYGFycmF5SW5jbHVkZXNgIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYSBjb21wYXJhdG9yLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB0YXJnZXQgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb21wYXJhdG9yIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHRhcmdldGAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlJbmNsdWRlc1dpdGgoYXJyYXksIHZhbHVlLCBjb21wYXJhdG9yKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoY29tcGFyYXRvcih2YWx1ZSwgYXJyYXlbaW5kZXhdKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUluY2x1ZGVzV2l0aDtcbiIsIi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVB1c2g7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5zb21lYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFueSBlbGVtZW50IHBhc3NlcyB0aGUgcHJlZGljYXRlIGNoZWNrLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlTb21lKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5U29tZTtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZmluZEluZGV4YCBhbmQgYF8uZmluZExhc3RJbmRleGAgd2l0aG91dFxuICogc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBiYXNlRmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUsIGZyb21JbmRleCwgZnJvbVJpZ2h0KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBpbmRleCA9IGZyb21JbmRleCArIChmcm9tUmlnaHQgPyAxIDogLTEpO1xuXG4gIHdoaWxlICgoZnJvbVJpZ2h0ID8gaW5kZXgtLSA6ICsraW5kZXggPCBsZW5ndGgpKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGaW5kSW5kZXg7XG4iLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRBbGxLZXlzYCBhbmQgYGdldEFsbEtleXNJbmAgd2hpY2ggdXNlc1xuICogYGtleXNGdW5jYCBhbmQgYHN5bWJvbHNGdW5jYCB0byBnZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3ltYm9sc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0Z1bmMsIHN5bWJvbHNGdW5jKSB7XG4gIHZhciByZXN1bHQgPSBrZXlzRnVuYyhvYmplY3QpO1xuICByZXR1cm4gaXNBcnJheShvYmplY3QpID8gcmVzdWx0IDogYXJyYXlQdXNoKHJlc3VsdCwgc3ltYm9sc0Z1bmMob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldEFsbEtleXM7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmhhc0luYCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IGtleSBUaGUga2V5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSGFzSW4ob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIGtleSBpbiBPYmplY3Qob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSGFzSW47XG4iLCJ2YXIgYmFzZUZpbmRJbmRleCA9IHJlcXVpcmUoJy4vX2Jhc2VGaW5kSW5kZXgnKSxcbiAgICBiYXNlSXNOYU4gPSByZXF1aXJlKCcuL19iYXNlSXNOYU4nKSxcbiAgICBzdHJpY3RJbmRleE9mID0gcmVxdWlyZSgnLi9fc3RyaWN0SW5kZXhPZicpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmluZGV4T2ZgIHdpdGhvdXQgYGZyb21JbmRleGAgYm91bmRzIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBiYXNlSW5kZXhPZihhcnJheSwgdmFsdWUsIGZyb21JbmRleCkge1xuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlXG4gICAgPyBzdHJpY3RJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KVxuICAgIDogYmFzZUZpbmRJbmRleChhcnJheSwgYmFzZUlzTmFOLCBmcm9tSW5kZXgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJbmRleE9mO1xuIiwidmFyIGJhc2VJc0VxdWFsRGVlcCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsRGVlcCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNFcXVhbGAgd2hpY2ggc3VwcG9ydHMgcGFydGlhbCBjb21wYXJpc29uc1xuICogYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuXG4gKiAgMSAtIFVub3JkZXJlZCBjb21wYXJpc29uXG4gKiAgMiAtIFBhcnRpYWwgY29tcGFyaXNvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGB2YWx1ZWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spIHtcbiAgaWYgKHZhbHVlID09PSBvdGhlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsIHx8IG90aGVyID09IG51bGwgfHwgKCFpc09iamVjdExpa2UodmFsdWUpICYmICFpc09iamVjdExpa2Uob3RoZXIpKSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyO1xuICB9XG4gIHJldHVybiBiYXNlSXNFcXVhbERlZXAodmFsdWUsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBiYXNlSXNFcXVhbCwgc3RhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0VxdWFsO1xuIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBlcXVhbEFycmF5cyA9IHJlcXVpcmUoJy4vX2VxdWFsQXJyYXlzJyksXG4gICAgZXF1YWxCeVRhZyA9IHJlcXVpcmUoJy4vX2VxdWFsQnlUYWcnKSxcbiAgICBlcXVhbE9iamVjdHMgPSByZXF1aXJlKCcuL19lcXVhbE9iamVjdHMnKSxcbiAgICBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsYCBmb3IgYXJyYXlzIGFuZCBvYmplY3RzIHdoaWNoIHBlcmZvcm1zXG4gKiBkZWVwIGNvbXBhcmlzb25zIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMgZW5hYmxpbmcgb2JqZWN0cyB3aXRoIGNpcmN1bGFyXG4gKiByZWZlcmVuY2VzIHRvIGJlIGNvbXBhcmVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbERlZXAob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgb2JqSXNBcnIgPSBpc0FycmF5KG9iamVjdCksXG4gICAgICBvdGhJc0FyciA9IGlzQXJyYXkob3RoZXIpLFxuICAgICAgb2JqVGFnID0gb2JqSXNBcnIgPyBhcnJheVRhZyA6IGdldFRhZyhvYmplY3QpLFxuICAgICAgb3RoVGFnID0gb3RoSXNBcnIgPyBhcnJheVRhZyA6IGdldFRhZyhvdGhlcik7XG5cbiAgb2JqVGFnID0gb2JqVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvYmpUYWc7XG4gIG90aFRhZyA9IG90aFRhZyA9PSBhcmdzVGFnID8gb2JqZWN0VGFnIDogb3RoVGFnO1xuXG4gIHZhciBvYmpJc09iaiA9IG9ialRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBvdGhJc09iaiA9IG90aFRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBpc1NhbWVUYWcgPSBvYmpUYWcgPT0gb3RoVGFnO1xuXG4gIGlmIChpc1NhbWVUYWcgJiYgaXNCdWZmZXIob2JqZWN0KSkge1xuICAgIGlmICghaXNCdWZmZXIob3RoZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIG9iaklzQXJyID0gdHJ1ZTtcbiAgICBvYmpJc09iaiA9IGZhbHNlO1xuICB9XG4gIGlmIChpc1NhbWVUYWcgJiYgIW9iaklzT2JqKSB7XG4gICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICByZXR1cm4gKG9iaklzQXJyIHx8IGlzVHlwZWRBcnJheShvYmplY3QpKVxuICAgICAgPyBlcXVhbEFycmF5cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKVxuICAgICAgOiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIG9ialRhZywgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG4gIH1cbiAgaWYgKCEoYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHKSkge1xuICAgIHZhciBvYmpJc1dyYXBwZWQgPSBvYmpJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgJ19fd3JhcHBlZF9fJyksXG4gICAgICAgIG90aElzV3JhcHBlZCA9IG90aElzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsICdfX3dyYXBwZWRfXycpO1xuXG4gICAgaWYgKG9iaklzV3JhcHBlZCB8fCBvdGhJc1dyYXBwZWQpIHtcbiAgICAgIHZhciBvYmpVbndyYXBwZWQgPSBvYmpJc1dyYXBwZWQgPyBvYmplY3QudmFsdWUoKSA6IG9iamVjdCxcbiAgICAgICAgICBvdGhVbndyYXBwZWQgPSBvdGhJc1dyYXBwZWQgPyBvdGhlci52YWx1ZSgpIDogb3RoZXI7XG5cbiAgICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgICByZXR1cm4gZXF1YWxGdW5jKG9ialVud3JhcHBlZCwgb3RoVW53cmFwcGVkLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjayk7XG4gICAgfVxuICB9XG4gIGlmICghaXNTYW1lVGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gIHJldHVybiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzRXF1YWxEZWVwO1xuIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBiYXNlSXNFcXVhbCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc01hdGNoYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IG9mIHByb3BlcnR5IHZhbHVlcyB0byBtYXRjaC5cbiAqIEBwYXJhbSB7QXJyYXl9IG1hdGNoRGF0YSBUaGUgcHJvcGVydHkgbmFtZXMsIHZhbHVlcywgYW5kIGNvbXBhcmUgZmxhZ3MgdG8gbWF0Y2guXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgb2JqZWN0YCBpcyBhIG1hdGNoLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc01hdGNoKG9iamVjdCwgc291cmNlLCBtYXRjaERhdGEsIGN1c3RvbWl6ZXIpIHtcbiAgdmFyIGluZGV4ID0gbWF0Y2hEYXRhLmxlbmd0aCxcbiAgICAgIGxlbmd0aCA9IGluZGV4LFxuICAgICAgbm9DdXN0b21pemVyID0gIWN1c3RvbWl6ZXI7XG5cbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuICFsZW5ndGg7XG4gIH1cbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgdmFyIGRhdGEgPSBtYXRjaERhdGFbaW5kZXhdO1xuICAgIGlmICgobm9DdXN0b21pemVyICYmIGRhdGFbMl0pXG4gICAgICAgICAgPyBkYXRhWzFdICE9PSBvYmplY3RbZGF0YVswXV1cbiAgICAgICAgICA6ICEoZGF0YVswXSBpbiBvYmplY3QpXG4gICAgICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGRhdGEgPSBtYXRjaERhdGFbaW5kZXhdO1xuICAgIHZhciBrZXkgPSBkYXRhWzBdLFxuICAgICAgICBvYmpWYWx1ZSA9IG9iamVjdFtrZXldLFxuICAgICAgICBzcmNWYWx1ZSA9IGRhdGFbMV07XG5cbiAgICBpZiAobm9DdXN0b21pemVyICYmIGRhdGFbMl0pIHtcbiAgICAgIGlmIChvYmpWYWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc3RhY2sgPSBuZXcgU3RhY2s7XG4gICAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgICB2YXIgcmVzdWx0ID0gY3VzdG9taXplcihvYmpWYWx1ZSwgc3JjVmFsdWUsIGtleSwgb2JqZWN0LCBzb3VyY2UsIHN0YWNrKTtcbiAgICAgIH1cbiAgICAgIGlmICghKHJlc3VsdCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGJhc2VJc0VxdWFsKHNyY1ZhbHVlLCBvYmpWYWx1ZSwgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgfCBDT01QQVJFX1VOT1JERVJFRF9GTEFHLCBjdXN0b21pemVyLCBzdGFjaylcbiAgICAgICAgICAgIDogcmVzdWx0XG4gICAgICAgICAgKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc01hdGNoO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hTmAgd2l0aG91dCBzdXBwb3J0IGZvciBudW1iZXIgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBgTmFOYCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYU4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYU47XG4iLCJ2YXIgYmFzZU1hdGNoZXMgPSByZXF1aXJlKCcuL19iYXNlTWF0Y2hlcycpLFxuICAgIGJhc2VNYXRjaGVzUHJvcGVydHkgPSByZXF1aXJlKCcuL19iYXNlTWF0Y2hlc1Byb3BlcnR5JyksXG4gICAgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5JyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIHByb3BlcnR5ID0gcmVxdWlyZSgnLi9wcm9wZXJ0eScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLml0ZXJhdGVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSBbdmFsdWU9Xy5pZGVudGl0eV0gVGhlIHZhbHVlIHRvIGNvbnZlcnQgdG8gYW4gaXRlcmF0ZWUuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIGl0ZXJhdGVlLlxuICovXG5mdW5jdGlvbiBiYXNlSXRlcmF0ZWUodmFsdWUpIHtcbiAgLy8gRG9uJ3Qgc3RvcmUgdGhlIGB0eXBlb2ZgIHJlc3VsdCBpbiBhIHZhcmlhYmxlIHRvIGF2b2lkIGEgSklUIGJ1ZyBpbiBTYWZhcmkgOS5cbiAgLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNTYwMzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGlkZW50aXR5O1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gaXNBcnJheSh2YWx1ZSlcbiAgICAgID8gYmFzZU1hdGNoZXNQcm9wZXJ0eSh2YWx1ZVswXSwgdmFsdWVbMV0pXG4gICAgICA6IGJhc2VNYXRjaGVzKHZhbHVlKTtcbiAgfVxuICByZXR1cm4gcHJvcGVydHkodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJdGVyYXRlZTtcbiIsInZhciBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5cyA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXMnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzO1xuIiwidmFyIGJhc2VJc01hdGNoID0gcmVxdWlyZSgnLi9fYmFzZUlzTWF0Y2gnKSxcbiAgICBnZXRNYXRjaERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXRjaERhdGEnKSxcbiAgICBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWF0Y2hlc2Agd2hpY2ggZG9lc24ndCBjbG9uZSBgc291cmNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IG9mIHByb3BlcnR5IHZhbHVlcyB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VNYXRjaGVzKHNvdXJjZSkge1xuICB2YXIgbWF0Y2hEYXRhID0gZ2V0TWF0Y2hEYXRhKHNvdXJjZSk7XG4gIGlmIChtYXRjaERhdGEubGVuZ3RoID09IDEgJiYgbWF0Y2hEYXRhWzBdWzJdKSB7XG4gICAgcmV0dXJuIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKG1hdGNoRGF0YVswXVswXSwgbWF0Y2hEYXRhWzBdWzFdKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PT0gc291cmNlIHx8IGJhc2VJc01hdGNoKG9iamVjdCwgc291cmNlLCBtYXRjaERhdGEpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VNYXRjaGVzO1xuIiwidmFyIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWwnKSxcbiAgICBnZXQgPSByZXF1aXJlKCcuL2dldCcpLFxuICAgIGhhc0luID0gcmVxdWlyZSgnLi9oYXNJbicpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9faXNLZXknKSxcbiAgICBpc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19pc1N0cmljdENvbXBhcmFibGUnKSxcbiAgICBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWF0Y2hlc1Byb3BlcnR5YCB3aGljaCBkb2Vzbid0IGNsb25lIGBzcmNWYWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IHNyY1ZhbHVlIFRoZSB2YWx1ZSB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VNYXRjaGVzUHJvcGVydHkocGF0aCwgc3JjVmFsdWUpIHtcbiAgaWYgKGlzS2V5KHBhdGgpICYmIGlzU3RyaWN0Q29tcGFyYWJsZShzcmNWYWx1ZSkpIHtcbiAgICByZXR1cm4gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUodG9LZXkocGF0aCksIHNyY1ZhbHVlKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIG9ialZhbHVlID0gZ2V0KG9iamVjdCwgcGF0aCk7XG4gICAgcmV0dXJuIChvYmpWYWx1ZSA9PT0gdW5kZWZpbmVkICYmIG9ialZhbHVlID09PSBzcmNWYWx1ZSlcbiAgICAgID8gaGFzSW4ob2JqZWN0LCBwYXRoKVxuICAgICAgOiBiYXNlSXNFcXVhbChzcmNWYWx1ZSwgb2JqVmFsdWUsIENPTVBBUkVfUEFSVElBTF9GTEFHIHwgQ09NUEFSRV9VTk9SREVSRURfRkxBRyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZU1hdGNoZXNQcm9wZXJ0eTtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucHJvcGVydHlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5KGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVByb3BlcnR5O1xuIiwidmFyIGJhc2VHZXQgPSByZXF1aXJlKCcuL19iYXNlR2V0Jyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUHJvcGVydHlgIHdoaWNoIHN1cHBvcnRzIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5RGVlcChwYXRoKSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gYmFzZUdldChvYmplY3QsIHBhdGgpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wZXJ0eURlZXA7XG4iLCJ2YXIgU2V0Q2FjaGUgPSByZXF1aXJlKCcuL19TZXRDYWNoZScpLFxuICAgIGFycmF5SW5jbHVkZXMgPSByZXF1aXJlKCcuL19hcnJheUluY2x1ZGVzJyksXG4gICAgYXJyYXlJbmNsdWRlc1dpdGggPSByZXF1aXJlKCcuL19hcnJheUluY2x1ZGVzV2l0aCcpLFxuICAgIGNhY2hlSGFzID0gcmVxdWlyZSgnLi9fY2FjaGVIYXMnKSxcbiAgICBjcmVhdGVTZXQgPSByZXF1aXJlKCcuL19jcmVhdGVTZXQnKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuaXFCeWAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZV0gVGhlIGl0ZXJhdGVlIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY29tcGFyYXRvcl0gVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGR1cGxpY2F0ZSBmcmVlIGFycmF5LlxuICovXG5mdW5jdGlvbiBiYXNlVW5pcShhcnJheSwgaXRlcmF0ZWUsIGNvbXBhcmF0b3IpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBpbmNsdWRlcyA9IGFycmF5SW5jbHVkZXMsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBpc0NvbW1vbiA9IHRydWUsXG4gICAgICByZXN1bHQgPSBbXSxcbiAgICAgIHNlZW4gPSByZXN1bHQ7XG5cbiAgaWYgKGNvbXBhcmF0b3IpIHtcbiAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgIGluY2x1ZGVzID0gYXJyYXlJbmNsdWRlc1dpdGg7XG4gIH1cbiAgZWxzZSBpZiAobGVuZ3RoID49IExBUkdFX0FSUkFZX1NJWkUpIHtcbiAgICB2YXIgc2V0ID0gaXRlcmF0ZWUgPyBudWxsIDogY3JlYXRlU2V0KGFycmF5KTtcbiAgICBpZiAoc2V0KSB7XG4gICAgICByZXR1cm4gc2V0VG9BcnJheShzZXQpO1xuICAgIH1cbiAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgIGluY2x1ZGVzID0gY2FjaGVIYXM7XG4gICAgc2VlbiA9IG5ldyBTZXRDYWNoZTtcbiAgfVxuICBlbHNlIHtcbiAgICBzZWVuID0gaXRlcmF0ZWUgPyBbXSA6IHJlc3VsdDtcbiAgfVxuICBvdXRlcjpcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIGNvbXB1dGVkID0gaXRlcmF0ZWUgPyBpdGVyYXRlZSh2YWx1ZSkgOiB2YWx1ZTtcblxuICAgIHZhbHVlID0gKGNvbXBhcmF0b3IgfHwgdmFsdWUgIT09IDApID8gdmFsdWUgOiAwO1xuICAgIGlmIChpc0NvbW1vbiAmJiBjb21wdXRlZCA9PT0gY29tcHV0ZWQpIHtcbiAgICAgIHZhciBzZWVuSW5kZXggPSBzZWVuLmxlbmd0aDtcbiAgICAgIHdoaWxlIChzZWVuSW5kZXgtLSkge1xuICAgICAgICBpZiAoc2VlbltzZWVuSW5kZXhdID09PSBjb21wdXRlZCkge1xuICAgICAgICAgIGNvbnRpbnVlIG91dGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXRlcmF0ZWUpIHtcbiAgICAgICAgc2Vlbi5wdXNoKGNvbXB1dGVkKTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoIWluY2x1ZGVzKHNlZW4sIGNvbXB1dGVkLCBjb21wYXJhdG9yKSkge1xuICAgICAgaWYgKHNlZW4gIT09IHJlc3VsdCkge1xuICAgICAgICBzZWVuLnB1c2goY29tcHV0ZWQpO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmlxO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBgY2FjaGVgIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjYWNoZSBUaGUgY2FjaGUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gY2FjaGVIYXMoY2FjaGUsIGtleSkge1xuICByZXR1cm4gY2FjaGUuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FjaGVIYXM7XG4iLCJ2YXIgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgbm9vcCA9IHJlcXVpcmUoJy4vbm9vcCcpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHNldCBvYmplY3Qgb2YgYHZhbHVlc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFkZCB0byB0aGUgc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IHNldC5cbiAqL1xudmFyIGNyZWF0ZVNldCA9ICEoU2V0ICYmICgxIC8gc2V0VG9BcnJheShuZXcgU2V0KFssLTBdKSlbMV0pID09IElORklOSVRZKSA/IG5vb3AgOiBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgcmV0dXJuIG5ldyBTZXQodmFsdWVzKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlU2V0O1xuIiwidmFyIFNldENhY2hlID0gcmVxdWlyZSgnLi9fU2V0Q2FjaGUnKSxcbiAgICBhcnJheVNvbWUgPSByZXF1aXJlKCcuL19hcnJheVNvbWUnKSxcbiAgICBjYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2NhY2hlSGFzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGFycmF5cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtBcnJheX0gb3RoZXIgVGhlIG90aGVyIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBhcnJheWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJyYXlzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQXJyYXlzKGFycmF5LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgYXJyTGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoZXIubGVuZ3RoO1xuXG4gIGlmIChhcnJMZW5ndGggIT0gb3RoTGVuZ3RoICYmICEoaXNQYXJ0aWFsICYmIG90aExlbmd0aCA+IGFyckxlbmd0aCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChhcnJheSk7XG4gIGlmIChzdGFja2VkICYmIHN0YWNrLmdldChvdGhlcikpIHtcbiAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgfVxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IHRydWUsXG4gICAgICBzZWVuID0gKGJpdG1hc2sgJiBDT01QQVJFX1VOT1JERVJFRF9GTEFHKSA/IG5ldyBTZXRDYWNoZSA6IHVuZGVmaW5lZDtcblxuICBzdGFjay5zZXQoYXJyYXksIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBhcnJheSk7XG5cbiAgLy8gSWdub3JlIG5vbi1pbmRleCBwcm9wZXJ0aWVzLlxuICB3aGlsZSAoKytpbmRleCA8IGFyckxlbmd0aCkge1xuICAgIHZhciBhcnJWYWx1ZSA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltpbmRleF07XG5cbiAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgdmFyIGNvbXBhcmVkID0gaXNQYXJ0aWFsXG4gICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgYXJyVmFsdWUsIGluZGV4LCBvdGhlciwgYXJyYXksIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIoYXJyVmFsdWUsIG90aFZhbHVlLCBpbmRleCwgYXJyYXksIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIGlmIChjb21wYXJlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAoY29tcGFyZWQpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmIChzZWVuKSB7XG4gICAgICBpZiAoIWFycmF5U29tZShvdGhlciwgZnVuY3Rpb24ob3RoVmFsdWUsIG90aEluZGV4KSB7XG4gICAgICAgICAgICBpZiAoIWNhY2hlSGFzKHNlZW4sIG90aEluZGV4KSAmJlxuICAgICAgICAgICAgICAgIChhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKSkge1xuICAgICAgICAgICAgICByZXR1cm4gc2Vlbi5wdXNoKG90aEluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghKFxuICAgICAgICAgIGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fFxuICAgICAgICAgICAgZXF1YWxGdW5jKGFyclZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spXG4gICAgICAgICkpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHN0YWNrWydkZWxldGUnXShhcnJheSk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxBcnJheXM7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgVWludDhBcnJheSA9IHJlcXVpcmUoJy4vX1VpbnQ4QXJyYXknKSxcbiAgICBlcSA9IHJlcXVpcmUoJy4vZXEnKSxcbiAgICBlcXVhbEFycmF5cyA9IHJlcXVpcmUoJy4vX2VxdWFsQXJyYXlzJyksXG4gICAgbWFwVG9BcnJheSA9IHJlcXVpcmUoJy4vX21hcFRvQXJyYXknKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFZhbHVlT2YgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnZhbHVlT2YgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBjb21wYXJpbmcgb2JqZWN0cyBvZlxuICogdGhlIHNhbWUgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNvbXBhcmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0cyB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgdGFnLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBkYXRhVmlld1RhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAob2JqZWN0LmJ5dGVPZmZzZXQgIT0gb3RoZXIuYnl0ZU9mZnNldCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgb2JqZWN0ID0gb2JqZWN0LmJ1ZmZlcjtcbiAgICAgIG90aGVyID0gb3RoZXIuYnVmZmVyO1xuXG4gICAgY2FzZSBhcnJheUJ1ZmZlclRhZzpcbiAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAhZXF1YWxGdW5jKG5ldyBVaW50OEFycmF5KG9iamVjdCksIG5ldyBVaW50OEFycmF5KG90aGVyKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICBjYXNlIGJvb2xUYWc6XG4gICAgY2FzZSBkYXRlVGFnOlxuICAgIGNhc2UgbnVtYmVyVGFnOlxuICAgICAgLy8gQ29lcmNlIGJvb2xlYW5zIHRvIGAxYCBvciBgMGAgYW5kIGRhdGVzIHRvIG1pbGxpc2Vjb25kcy5cbiAgICAgIC8vIEludmFsaWQgZGF0ZXMgYXJlIGNvZXJjZWQgdG8gYE5hTmAuXG4gICAgICByZXR1cm4gZXEoK29iamVjdCwgK290aGVyKTtcblxuICAgIGNhc2UgZXJyb3JUYWc6XG4gICAgICByZXR1cm4gb2JqZWN0Lm5hbWUgPT0gb3RoZXIubmFtZSAmJiBvYmplY3QubWVzc2FnZSA9PSBvdGhlci5tZXNzYWdlO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICAvLyBDb2VyY2UgcmVnZXhlcyB0byBzdHJpbmdzIGFuZCB0cmVhdCBzdHJpbmdzLCBwcmltaXRpdmVzIGFuZCBvYmplY3RzLFxuICAgICAgLy8gYXMgZXF1YWwuIFNlZSBodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcmVnZXhwLnByb3RvdHlwZS50b3N0cmluZ1xuICAgICAgLy8gZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgIHJldHVybiBvYmplY3QgPT0gKG90aGVyICsgJycpO1xuXG4gICAgY2FzZSBtYXBUYWc6XG4gICAgICB2YXIgY29udmVydCA9IG1hcFRvQXJyYXk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUc7XG4gICAgICBjb252ZXJ0IHx8IChjb252ZXJ0ID0gc2V0VG9BcnJheSk7XG5cbiAgICAgIGlmIChvYmplY3Quc2l6ZSAhPSBvdGhlci5zaXplICYmICFpc1BhcnRpYWwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICAgICAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQob2JqZWN0KTtcbiAgICAgIGlmIChzdGFja2VkKSB7XG4gICAgICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICAgICAgfVxuICAgICAgYml0bWFzayB8PSBDT01QQVJFX1VOT1JERVJFRF9GTEFHO1xuXG4gICAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICAgIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgICAgIHZhciByZXN1bHQgPSBlcXVhbEFycmF5cyhjb252ZXJ0KG9iamVjdCksIGNvbnZlcnQob3RoZXIpLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbiAgICAgIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgaWYgKHN5bWJvbFZhbHVlT2YpIHtcbiAgICAgICAgcmV0dXJuIHN5bWJvbFZhbHVlT2YuY2FsbChvYmplY3QpID09IHN5bWJvbFZhbHVlT2YuY2FsbChvdGhlcik7XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsQnlUYWc7XG4iLCJ2YXIgZ2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2dldEFsbEtleXMnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3Igb2JqZWN0cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgb2JqUHJvcHMgPSBnZXRBbGxLZXlzKG9iamVjdCksXG4gICAgICBvYmpMZW5ndGggPSBvYmpQcm9wcy5sZW5ndGgsXG4gICAgICBvdGhQcm9wcyA9IGdldEFsbEtleXMob3RoZXIpLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoUHJvcHMubGVuZ3RoO1xuXG4gIGlmIChvYmpMZW5ndGggIT0gb3RoTGVuZ3RoICYmICFpc1BhcnRpYWwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGluZGV4ID0gb2JqTGVuZ3RoO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgaWYgKCEoaXNQYXJ0aWFsID8ga2V5IGluIG90aGVyIDogaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwga2V5KSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChvYmplY3QpO1xuICBpZiAoc3RhY2tlZCAmJiBzdGFjay5nZXQob3RoZXIpKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IHRydWU7XG4gIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBvYmplY3QpO1xuXG4gIHZhciBza2lwQ3RvciA9IGlzUGFydGlhbDtcbiAgd2hpbGUgKCsraW5kZXggPCBvYmpMZW5ndGgpIHtcbiAgICBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJba2V5XTtcblxuICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICB2YXIgY29tcGFyZWQgPSBpc1BhcnRpYWxcbiAgICAgICAgPyBjdXN0b21pemVyKG90aFZhbHVlLCBvYmpWYWx1ZSwga2V5LCBvdGhlciwgb2JqZWN0LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKG9ialZhbHVlLCBvdGhWYWx1ZSwga2V5LCBvYmplY3QsIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmICghKGNvbXBhcmVkID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IChvYmpWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKG9ialZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKVxuICAgICAgICAgIDogY29tcGFyZWRcbiAgICAgICAgKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgc2tpcEN0b3IgfHwgKHNraXBDdG9yID0ga2V5ID09ICdjb25zdHJ1Y3RvcicpO1xuICB9XG4gIGlmIChyZXN1bHQgJiYgIXNraXBDdG9yKSB7XG4gICAgdmFyIG9iakN0b3IgPSBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICAgIG90aEN0b3IgPSBvdGhlci5jb25zdHJ1Y3RvcjtcblxuICAgIC8vIE5vbiBgT2JqZWN0YCBvYmplY3QgaW5zdGFuY2VzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWFsLlxuICAgIGlmIChvYmpDdG9yICE9IG90aEN0b3IgJiZcbiAgICAgICAgKCdjb25zdHJ1Y3RvcicgaW4gb2JqZWN0ICYmICdjb25zdHJ1Y3RvcicgaW4gb3RoZXIpICYmXG4gICAgICAgICEodHlwZW9mIG9iakN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvYmpDdG9yIGluc3RhbmNlb2Ygb2JqQ3RvciAmJlxuICAgICAgICAgIHR5cGVvZiBvdGhDdG9yID09ICdmdW5jdGlvbicgJiYgb3RoQ3RvciBpbnN0YW5jZW9mIG90aEN0b3IpKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgc3RhY2tbJ2RlbGV0ZSddKG9iamVjdCk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxPYmplY3RzO1xuIiwidmFyIGJhc2VHZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUdldEFsbEtleXMnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBnZXRBbGxLZXlzKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzLCBnZXRTeW1ib2xzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRBbGxLZXlzO1xuIiwidmFyIGlzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX2lzU3RyaWN0Q29tcGFyYWJsZScpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBwcm9wZXJ0eSBuYW1lcywgdmFsdWVzLCBhbmQgY29tcGFyZSBmbGFncyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBtYXRjaCBkYXRhIG9mIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBnZXRNYXRjaERhdGEob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBrZXlzKG9iamVjdCksXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIHZhciBrZXkgPSByZXN1bHRbbGVuZ3RoXSxcbiAgICAgICAgdmFsdWUgPSBvYmplY3Rba2V5XTtcblxuICAgIHJlc3VsdFtsZW5ndGhdID0gW2tleSwgdmFsdWUsIGlzU3RyaWN0Q29tcGFyYWJsZSh2YWx1ZSldO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWF0Y2hEYXRhO1xuIiwidmFyIGFycmF5RmlsdGVyID0gcmVxdWlyZSgnLi9fYXJyYXlGaWx0ZXInKSxcbiAgICBzdHViQXJyYXkgPSByZXF1aXJlKCcuL3N0dWJBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9scyA9ICFuYXRpdmVHZXRTeW1ib2xzID8gc3R1YkFycmF5IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgcmV0dXJuIGFycmF5RmlsdGVyKG5hdGl2ZUdldFN5bWJvbHMob2JqZWN0KSwgZnVuY3Rpb24oc3ltYm9sKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqZWN0LCBzeW1ib2wpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0U3ltYm9scztcbiIsInZhciBEYXRhVmlldyA9IHJlcXVpcmUoJy4vX0RhdGFWaWV3JyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgUHJvbWlzZSA9IHJlcXVpcmUoJy4vX1Byb21pc2UnKSxcbiAgICBTZXQgPSByZXF1aXJlKCcuL19TZXQnKSxcbiAgICBXZWFrTWFwID0gcmVxdWlyZSgnLi9fV2Vha01hcCcpLFxuICAgIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcHJvbWlzZVRhZyA9ICdbb2JqZWN0IFByb21pc2VdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWFwcywgc2V0cywgYW5kIHdlYWttYXBzLiAqL1xudmFyIGRhdGFWaWV3Q3RvclN0cmluZyA9IHRvU291cmNlKERhdGFWaWV3KSxcbiAgICBtYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoTWFwKSxcbiAgICBwcm9taXNlQ3RvclN0cmluZyA9IHRvU291cmNlKFByb21pc2UpLFxuICAgIHNldEN0b3JTdHJpbmcgPSB0b1NvdXJjZShTZXQpLFxuICAgIHdlYWtNYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoV2Vha01hcCk7XG5cbi8qKlxuICogR2V0cyB0aGUgYHRvU3RyaW5nVGFnYCBvZiBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbnZhciBnZXRUYWcgPSBiYXNlR2V0VGFnO1xuXG4vLyBGYWxsYmFjayBmb3IgZGF0YSB2aWV3cywgbWFwcywgc2V0cywgYW5kIHdlYWsgbWFwcyBpbiBJRSAxMSBhbmQgcHJvbWlzZXMgaW4gTm9kZS5qcyA8IDYuXG5pZiAoKERhdGFWaWV3ICYmIGdldFRhZyhuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDEpKSkgIT0gZGF0YVZpZXdUYWcpIHx8XG4gICAgKE1hcCAmJiBnZXRUYWcobmV3IE1hcCkgIT0gbWFwVGFnKSB8fFxuICAgIChQcm9taXNlICYmIGdldFRhZyhQcm9taXNlLnJlc29sdmUoKSkgIT0gcHJvbWlzZVRhZykgfHxcbiAgICAoU2V0ICYmIGdldFRhZyhuZXcgU2V0KSAhPSBzZXRUYWcpIHx8XG4gICAgKFdlYWtNYXAgJiYgZ2V0VGFnKG5ldyBXZWFrTWFwKSAhPSB3ZWFrTWFwVGFnKSkge1xuICBnZXRUYWcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciByZXN1bHQgPSBiYXNlR2V0VGFnKHZhbHVlKSxcbiAgICAgICAgQ3RvciA9IHJlc3VsdCA9PSBvYmplY3RUYWcgPyB2YWx1ZS5jb25zdHJ1Y3RvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgY3RvclN0cmluZyA9IEN0b3IgPyB0b1NvdXJjZShDdG9yKSA6ICcnO1xuXG4gICAgaWYgKGN0b3JTdHJpbmcpIHtcbiAgICAgIHN3aXRjaCAoY3RvclN0cmluZykge1xuICAgICAgICBjYXNlIGRhdGFWaWV3Q3RvclN0cmluZzogcmV0dXJuIGRhdGFWaWV3VGFnO1xuICAgICAgICBjYXNlIG1hcEN0b3JTdHJpbmc6IHJldHVybiBtYXBUYWc7XG4gICAgICAgIGNhc2UgcHJvbWlzZUN0b3JTdHJpbmc6IHJldHVybiBwcm9taXNlVGFnO1xuICAgICAgICBjYXNlIHNldEN0b3JTdHJpbmc6IHJldHVybiBzZXRUYWc7XG4gICAgICAgIGNhc2Ugd2Vha01hcEN0b3JTdHJpbmc6IHJldHVybiB3ZWFrTWFwVGFnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFRhZztcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3Igc3RyaWN0IGVxdWFsaXR5IGNvbXBhcmlzb25zLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlmIHN1aXRhYmxlIGZvciBzdHJpY3RcbiAqICBlcXVhbGl0eSBjb21wYXJpc29ucywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1N0cmljdENvbXBhcmFibGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSAmJiAhaXNPYmplY3QodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3RyaWN0Q29tcGFyYWJsZTtcbiIsIi8qKlxuICogQ29udmVydHMgYG1hcGAgdG8gaXRzIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGtleS12YWx1ZSBwYWlycy5cbiAqL1xuZnVuY3Rpb24gbWFwVG9BcnJheShtYXApIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShtYXAuc2l6ZSk7XG5cbiAgbWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IFtrZXksIHZhbHVlXTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwVG9BcnJheTtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBtYXRjaGVzUHJvcGVydHlgIGZvciBzb3VyY2UgdmFsdWVzIHN1aXRhYmxlXG4gKiBmb3Igc3RyaWN0IGVxdWFsaXR5IGNvbXBhcmlzb25zLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7Kn0gc3JjVmFsdWUgVGhlIHZhbHVlIHRvIG1hdGNoLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc3BlYyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUoa2V5LCBzcmNWYWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Rba2V5XSA9PT0gc3JjVmFsdWUgJiZcbiAgICAgIChzcmNWYWx1ZSAhPT0gdW5kZWZpbmVkIHx8IChrZXkgaW4gT2JqZWN0KG9iamVjdCkpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZTtcbiIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5cztcbiIsIi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBBZGRzIGB2YWx1ZWAgdG8gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBhZGRcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQGFsaWFzIHB1c2hcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNhY2hlLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlQWRkKHZhbHVlKSB7XG4gIHRoaXMuX19kYXRhX18uc2V0KHZhbHVlLCBIQVNIX1VOREVGSU5FRCk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldENhY2hlQWRkO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBpbiB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUhhcyh2YWx1ZSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXModmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldENhY2hlSGFzO1xuIiwiLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBhbiBhcnJheSBvZiBpdHMgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBzZXRUb0FycmF5KHNldCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KHNldC5zaXplKTtcblxuICBzZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRUb0FycmF5O1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uaW5kZXhPZmAgd2hpY2ggcGVyZm9ybXMgc3RyaWN0IGVxdWFsaXR5XG4gKiBjb21wYXJpc29ucyBvZiB2YWx1ZXMsIGkuZS4gYD09PWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gc3RyaWN0SW5kZXhPZihhcnJheSwgdmFsdWUsIGZyb21JbmRleCkge1xuICB2YXIgaW5kZXggPSBmcm9tSW5kZXggLSAxLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGFycmF5W2luZGV4XSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmljdEluZGV4T2Y7XG4iLCJ2YXIgYmFzZUhhc0luID0gcmVxdWlyZSgnLi9fYmFzZUhhc0luJyksXG4gICAgaGFzUGF0aCA9IHJlcXVpcmUoJy4vX2hhc1BhdGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHBhdGhgIGlzIGEgZGlyZWN0IG9yIGluaGVyaXRlZCBwcm9wZXJ0eSBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgcGF0aGAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSBfLmNyZWF0ZSh7ICdhJzogXy5jcmVhdGUoeyAnYic6IDIgfSkgfSk7XG4gKlxuICogXy5oYXNJbihvYmplY3QsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsICdhLmInKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsICdiJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBoYXNJbihvYmplY3QsIHBhdGgpIHtcbiAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIGhhc1BhdGgob2JqZWN0LCBwYXRoLCBiYXNlSGFzSW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc0luO1xuIiwidmFyIGFycmF5TGlrZUtleXMgPSByZXF1aXJlKCcuL19hcnJheUxpa2VLZXlzJyksXG4gICAgYmFzZUtleXMgPSByZXF1aXJlKCcuL19iYXNlS2V5cycpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG4gKiBbRVMgc3BlY10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5cyhuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLmtleXMoJ2hpJyk7XG4gKiAvLyA9PiBbJzAnLCAnMSddXG4gKi9cbmZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QpIDogYmFzZUtleXMob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzO1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGB1bmRlZmluZWRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi4zLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5ub29wKTtcbiAqIC8vID0+IFt1bmRlZmluZWQsIHVuZGVmaW5lZF1cbiAqL1xuZnVuY3Rpb24gbm9vcCgpIHtcbiAgLy8gTm8gb3BlcmF0aW9uIHBlcmZvcm1lZC5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBub29wO1xuIiwidmFyIGJhc2VQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2Jhc2VQcm9wZXJ0eScpLFxuICAgIGJhc2VQcm9wZXJ0eURlZXAgPSByZXF1aXJlKCcuL19iYXNlUHJvcGVydHlEZWVwJyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSB2YWx1ZSBhdCBgcGF0aGAgb2YgYSBnaXZlbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBbXG4gKiAgIHsgJ2EnOiB7ICdiJzogMiB9IH0sXG4gKiAgIHsgJ2EnOiB7ICdiJzogMSB9IH1cbiAqIF07XG4gKlxuICogXy5tYXAob2JqZWN0cywgXy5wcm9wZXJ0eSgnYS5iJykpO1xuICogLy8gPT4gWzIsIDFdXG4gKlxuICogXy5tYXAoXy5zb3J0Qnkob2JqZWN0cywgXy5wcm9wZXJ0eShbJ2EnLCAnYiddKSksICdhLmInKTtcbiAqIC8vID0+IFsxLCAyXVxuICovXG5mdW5jdGlvbiBwcm9wZXJ0eShwYXRoKSB7XG4gIHJldHVybiBpc0tleShwYXRoKSA/IGJhc2VQcm9wZXJ0eSh0b0tleShwYXRoKSkgOiBiYXNlUHJvcGVydHlEZWVwKHBhdGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByb3BlcnR5O1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGEgbmV3IGVtcHR5IGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZW1wdHkgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhcnJheXMgPSBfLnRpbWVzKDIsIF8uc3R1YkFycmF5KTtcbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXMpO1xuICogLy8gPT4gW1tdLCBbXV1cbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXNbMF0gPT09IGFycmF5c1sxXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBzdHViQXJyYXkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViQXJyYXk7XG4iLCJ2YXIgYmFzZUl0ZXJhdGVlID0gcmVxdWlyZSgnLi9fYmFzZUl0ZXJhdGVlJyksXG4gICAgYmFzZVVuaXEgPSByZXF1aXJlKCcuL19iYXNlVW5pcScpO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8udW5pcWAgZXhjZXB0IHRoYXQgaXQgYWNjZXB0cyBgaXRlcmF0ZWVgIHdoaWNoIGlzXG4gKiBpbnZva2VkIGZvciBlYWNoIGVsZW1lbnQgaW4gYGFycmF5YCB0byBnZW5lcmF0ZSB0aGUgY3JpdGVyaW9uIGJ5IHdoaWNoXG4gKiB1bmlxdWVuZXNzIGlzIGNvbXB1dGVkLiBUaGUgb3JkZXIgb2YgcmVzdWx0IHZhbHVlcyBpcyBkZXRlcm1pbmVkIGJ5IHRoZVxuICogb3JkZXIgdGhleSBvY2N1ciBpbiB0aGUgYXJyYXkuIFRoZSBpdGVyYXRlZSBpcyBpbnZva2VkIHdpdGggb25lIGFyZ3VtZW50OlxuICogKHZhbHVlKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlPV8uaWRlbnRpdHldIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZHVwbGljYXRlIGZyZWUgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udW5pcUJ5KFsyLjEsIDEuMiwgMi4zXSwgTWF0aC5mbG9vcik7XG4gKiAvLyA9PiBbMi4xLCAxLjJdXG4gKlxuICogLy8gVGhlIGBfLnByb3BlcnR5YCBpdGVyYXRlZSBzaG9ydGhhbmQuXG4gKiBfLnVuaXFCeShbeyAneCc6IDEgfSwgeyAneCc6IDIgfSwgeyAneCc6IDEgfV0sICd4Jyk7XG4gKiAvLyA9PiBbeyAneCc6IDEgfSwgeyAneCc6IDIgfV1cbiAqL1xuZnVuY3Rpb24gdW5pcUJ5KGFycmF5LCBpdGVyYXRlZSkge1xuICByZXR1cm4gKGFycmF5ICYmIGFycmF5Lmxlbmd0aCkgPyBiYXNlVW5pcShhcnJheSwgYmFzZUl0ZXJhdGVlKGl0ZXJhdGVlLCAyKSkgOiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB1bmlxQnk7XG4iLCJpbXBvcnQgeyBSZWFjdGlvbiwgX2FsbG93U3RhdGVDaGFuZ2VzLCBjb25maWd1cmUsIGNyZWF0ZUF0b20sIGdldERlYnVnTmFtZSwgaXNPYnNlcnZhYmxlQXJyYXksIGlzT2JzZXJ2YWJsZU1hcCwgaXNPYnNlcnZhYmxlT2JqZWN0LCBzcHksIHVudHJhY2tlZCB9IGZyb20gJ21vYngnO1xuaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBDb21wb25lbnQsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBmaW5kRE9NTm9kZSwgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMgfSBmcm9tICdyZWFjdC1kb20nO1xuXG4vLyBUaGVzZSBmdW5jdGlvbnMgY2FuIGJlIHN0dWJiZWQgb3V0IGluIHNwZWNpZmljIGVudmlyb25tZW50c1xudmFyIHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzJDEgPSB1bmRlZmluZWQ7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG59O1xuXG5cblxuXG5cbnZhciBhc3luY0dlbmVyYXRvciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQXdhaXRWYWx1ZSh2YWx1ZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIEFzeW5jR2VuZXJhdG9yKGdlbikge1xuICAgIHZhciBmcm9udCwgYmFjaztcblxuICAgIGZ1bmN0aW9uIHNlbmQoa2V5LCBhcmcpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciByZXF1ZXN0ID0ge1xuICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgIGFyZzogYXJnLFxuICAgICAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICAgICAgcmVqZWN0OiByZWplY3QsXG4gICAgICAgICAgbmV4dDogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChiYWNrKSB7XG4gICAgICAgICAgYmFjayA9IGJhY2submV4dCA9IHJlcXVlc3Q7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZnJvbnQgPSBiYWNrID0gcmVxdWVzdDtcbiAgICAgICAgICByZXN1bWUoa2V5LCBhcmcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXN1bWUoa2V5LCBhcmcpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBnZW5ba2V5XShhcmcpO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG5cbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXdhaXRWYWx1ZSkge1xuICAgICAgICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZS52YWx1ZSkudGhlbihmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgICAgICByZXN1bWUoXCJuZXh0XCIsIGFyZyk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGFyZykge1xuICAgICAgICAgICAgcmVzdW1lKFwidGhyb3dcIiwgYXJnKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXR0bGUocmVzdWx0LmRvbmUgPyBcInJldHVyblwiIDogXCJub3JtYWxcIiwgcmVzdWx0LnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHNldHRsZShcInRocm93XCIsIGVycik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0dGxlKHR5cGUsIHZhbHVlKSB7XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBcInJldHVyblwiOlxuICAgICAgICAgIGZyb250LnJlc29sdmUoe1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgZG9uZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJ0aHJvd1wiOlxuICAgICAgICAgIGZyb250LnJlamVjdCh2YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBmcm9udC5yZXNvbHZlKHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGRvbmU6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGZyb250ID0gZnJvbnQubmV4dDtcblxuICAgICAgaWYgKGZyb250KSB7XG4gICAgICAgIHJlc3VtZShmcm9udC5rZXksIGZyb250LmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiYWNrID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9pbnZva2UgPSBzZW5kO1xuXG4gICAgaWYgKHR5cGVvZiBnZW4ucmV0dXJuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRoaXMucmV0dXJuID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHtcbiAgICBBc3luY0dlbmVyYXRvci5wcm90b3R5cGVbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgfVxuXG4gIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiB0aGlzLl9pbnZva2UoXCJuZXh0XCIsIGFyZyk7XG4gIH07XG5cbiAgQXN5bmNHZW5lcmF0b3IucHJvdG90eXBlLnRocm93ID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiB0aGlzLl9pbnZva2UoXCJ0aHJvd1wiLCBhcmcpO1xuICB9O1xuXG4gIEFzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS5yZXR1cm4gPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ludm9rZShcInJldHVyblwiLCBhcmcpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgd3JhcDogZnVuY3Rpb24gKGZuKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IEFzeW5jR2VuZXJhdG9yKGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIGF3YWl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBuZXcgQXdhaXRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuICB9O1xufSgpO1xuXG5cblxuXG5cbnZhciBjbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG52YXIgY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cblxuXG5cblxuXG5cblxuXG52YXIgaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG5cblxuXG5cblxuXG5cblxuXG5cbnZhciBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG52YXIgRXZlbnRFbWl0dGVyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgRXZlbnRFbWl0dGVyKTtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICB9XG5cbiAgICBjcmVhdGVDbGFzcyhFdmVudEVtaXR0ZXIsIFt7XG4gICAgICAgIGtleTogXCJvblwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb24oY2IpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2goY2IpO1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBfdGhpcy5saXN0ZW5lcnMuaW5kZXhPZihjYik7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkgX3RoaXMubGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwiZW1pdFwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZW1pdChkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChmbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmbihkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfV0pO1xuICAgIHJldHVybiBFdmVudEVtaXR0ZXI7XG59KCk7XG5cbi8qKlxuICogQ29weXJpZ2h0IDIwMTUsIFlhaG9vISBJbmMuXG4gKiBDb3B5cmlnaHRzIGxpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIExpY2Vuc2UuIFNlZSB0aGUgYWNjb21wYW55aW5nIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMuXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIFJFQUNUX1NUQVRJQ1MgPSB7XG4gICAgY2hpbGRDb250ZXh0VHlwZXM6IHRydWUsXG4gICAgY29udGV4dFR5cGVzOiB0cnVlLFxuICAgIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgICBnZXREZWZhdWx0UHJvcHM6IHRydWUsXG4gICAgbWl4aW5zOiB0cnVlLFxuICAgIHByb3BUeXBlczogdHJ1ZSxcbiAgICB0eXBlOiB0cnVlXG59O1xuXG52YXIgS05PV05fU1RBVElDUyA9IHtcbiAgbmFtZTogdHJ1ZSxcbiAgbGVuZ3RoOiB0cnVlLFxuICBwcm90b3R5cGU6IHRydWUsXG4gIGNhbGxlcjogdHJ1ZSxcbiAgY2FsbGVlOiB0cnVlLFxuICBhcmd1bWVudHM6IHRydWUsXG4gIGFyaXR5OiB0cnVlXG59O1xuXG52YXIgZGVmaW5lUHJvcGVydHkkMSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIG9iamVjdFByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mICYmIGdldFByb3RvdHlwZU9mKE9iamVjdCk7XG5cbnZhciBob2lzdE5vblJlYWN0U3RhdGljcyA9IGZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50LCBibGFja2xpc3QpIHtcbiAgICBpZiAodHlwZW9mIHNvdXJjZUNvbXBvbmVudCAhPT0gJ3N0cmluZycpIHsgLy8gZG9uJ3QgaG9pc3Qgb3ZlciBzdHJpbmcgKGh0bWwpIGNvbXBvbmVudHNcblxuICAgICAgICBpZiAob2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICAgICAgICB2YXIgaW5oZXJpdGVkQ29tcG9uZW50ID0gZ2V0UHJvdG90eXBlT2Yoc291cmNlQ29tcG9uZW50KTtcbiAgICAgICAgICAgIGlmIChpbmhlcml0ZWRDb21wb25lbnQgJiYgaW5oZXJpdGVkQ29tcG9uZW50ICE9PSBvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgICAgICAgICAgICBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIGluaGVyaXRlZENvbXBvbmVudCwgYmxhY2tsaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgICAgIGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgICAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlQ29tcG9uZW50KSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgaWYgKCFSRUFDVF9TVEFUSUNTW2tleV0gJiYgIUtOT1dOX1NUQVRJQ1Nba2V5XSAmJiAoIWJsYWNrbGlzdCB8fCAhYmxhY2tsaXN0W2tleV0pKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlQ29tcG9uZW50LCBrZXkpO1xuICAgICAgICAgICAgICAgIHRyeSB7IC8vIEF2b2lkIGZhaWx1cmVzIGZyb20gcmVhZC1vbmx5IHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5lUHJvcGVydHkkMSh0YXJnZXRDb21wb25lbnQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbn07XG5cbi8vIENvcGllZCBmcm9tIFJlYWN0LlByb3BUeXBlc1xuZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCByZXN0ID0gQXJyYXkoX2xlbiA+IDYgPyBfbGVuIC0gNiA6IDApLCBfa2V5ID0gNjsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgcmVzdFtfa2V5IC0gNl0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW50cmFja2VkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IFwiPDxhbm9ueW1vdXM+PlwiO1xuICAgICAgICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuICAgICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFjdHVhbCA9IHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCA/IFwibnVsbFwiIDogXCJ1bmRlZmluZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcIlRoZSBcIiArIGxvY2F0aW9uICsgXCIgYFwiICsgcHJvcEZ1bGxOYW1lICsgXCJgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBcIiArIFwiaW4gYFwiICsgY29tcG9uZW50TmFtZSArIFwiYCwgYnV0IGl0cyB2YWx1ZSBpcyBgXCIgKyBhY3R1YWwgKyBcImAuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlLmFwcGx5KHVuZGVmaW5lZCwgW3Byb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZV0uY29uY2F0KHJlc3QpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG59XG5cbi8vIENvcGllZCBmcm9tIFJlYWN0LlByb3BUeXBlc1xuZnVuY3Rpb24gaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkge1xuICAgIC8vIE5hdGl2ZSBTeW1ib2wuXG4gICAgaWYgKHByb3BUeXBlID09PSBcInN5bWJvbFwiKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVtcIkBAdG9TdHJpbmdUYWdcIl0gPT09IFwiU3ltYm9sXCIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLy8gQ29waWVkIGZyb20gUmVhY3QuUHJvcFR5cGVzXG5mdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YocHJvcFZhbHVlKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBcImFycmF5XCI7XG4gICAgfVxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgICAgIHJldHVybiBcIm9iamVjdFwiO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIFwic3ltYm9sXCI7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbn1cblxuLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuLy8gQ29waWVkIGZyb20gUmVhY3QuUHJvcFR5cGVzXG5mdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiZGF0ZVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICAgICAgcmV0dXJuIFwicmVnZXhwXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZhYmxlVHlwZUNoZWNrZXJDcmVhdG9yKGFsbG93TmF0aXZlVHlwZSwgbW9ieFR5cGUpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZnVuY3Rpb24gKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgICByZXR1cm4gdW50cmFja2VkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChhbGxvd05hdGl2ZVR5cGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZ2V0UHJvcFR5cGUocHJvcHNbcHJvcE5hbWVdKSA9PT0gbW9ieFR5cGUudG9Mb3dlckNhc2UoKSkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbW9ieENoZWNrZXIgPSB2b2lkIDA7XG4gICAgICAgICAgICBzd2l0Y2ggKG1vYnhUeXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcIkFycmF5XCI6XG4gICAgICAgICAgICAgICAgICAgIG1vYnhDaGVja2VyID0gaXNPYnNlcnZhYmxlQXJyYXk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJPYmplY3RcIjpcbiAgICAgICAgICAgICAgICAgICAgbW9ieENoZWNrZXIgPSBpc09ic2VydmFibGVPYmplY3Q7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJNYXBcIjpcbiAgICAgICAgICAgICAgICAgICAgbW9ieENoZWNrZXIgPSBpc09ic2VydmFibGVNYXA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgbW9ieFR5cGU6IFwiICsgbW9ieFR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgICAgIGlmICghbW9ieENoZWNrZXIocHJvcFZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgICAgICAgICAgdmFyIG5hdGl2ZVR5cGVFeHBlY3RhdGlvbk1lc3NhZ2UgPSBhbGxvd05hdGl2ZVR5cGUgPyBcIiBvciBqYXZhc2NyaXB0IGBcIiArIG1vYnhUeXBlLnRvTG93ZXJDYXNlKCkgKyBcImBcIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcIkludmFsaWQgcHJvcCBgXCIgKyBwcm9wRnVsbE5hbWUgKyBcImAgb2YgdHlwZSBgXCIgKyBwcmVjaXNlVHlwZSArIFwiYCBzdXBwbGllZCB0b1wiICsgXCIgYFwiICsgY29tcG9uZW50TmFtZSArIFwiYCwgZXhwZWN0ZWQgYG1vYnguT2JzZXJ2YWJsZVwiICsgbW9ieFR5cGUgKyBcImBcIiArIG5hdGl2ZVR5cGVFeHBlY3RhdGlvbk1lc3NhZ2UgKyBcIi5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmFibGVBcnJheU9mVHlwZUNoZWNrZXIoYWxsb3dOYXRpdmVUeXBlLCB0eXBlQ2hlY2tlcikge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihmdW5jdGlvbiAocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgcmVzdCA9IEFycmF5KF9sZW4yID4gNSA/IF9sZW4yIC0gNSA6IDApLCBfa2V5MiA9IDU7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgICAgIHJlc3RbX2tleTIgLSA1XSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW50cmFja2VkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJQcm9wZXJ0eSBgXCIgKyBwcm9wRnVsbE5hbWUgKyBcImAgb2YgY29tcG9uZW50IGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAgaGFzIFwiICsgXCJpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBlcnJvciA9IGNyZWF0ZU9ic2VydmFibGVUeXBlQ2hlY2tlckNyZWF0b3IoYWxsb3dOYXRpdmVUeXBlLCBcIkFycmF5XCIpKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSk7XG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikgcmV0dXJuIGVycm9yO1xuICAgICAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSB0eXBlQ2hlY2tlci5hcHBseSh1bmRlZmluZWQsIFtwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyBcIltcIiArIGkgKyBcIl1cIl0uY29uY2F0KHJlc3QpKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikgcmV0dXJuIGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG52YXIgb2JzZXJ2YWJsZUFycmF5ID0gY3JlYXRlT2JzZXJ2YWJsZVR5cGVDaGVja2VyQ3JlYXRvcihmYWxzZSwgXCJBcnJheVwiKTtcbnZhciBvYnNlcnZhYmxlQXJyYXlPZiA9IGNyZWF0ZU9ic2VydmFibGVBcnJheU9mVHlwZUNoZWNrZXIuYmluZChudWxsLCBmYWxzZSk7XG52YXIgb2JzZXJ2YWJsZU1hcCA9IGNyZWF0ZU9ic2VydmFibGVUeXBlQ2hlY2tlckNyZWF0b3IoZmFsc2UsIFwiTWFwXCIpO1xudmFyIG9ic2VydmFibGVPYmplY3QgPSBjcmVhdGVPYnNlcnZhYmxlVHlwZUNoZWNrZXJDcmVhdG9yKGZhbHNlLCBcIk9iamVjdFwiKTtcbnZhciBhcnJheU9yT2JzZXJ2YWJsZUFycmF5ID0gY3JlYXRlT2JzZXJ2YWJsZVR5cGVDaGVja2VyQ3JlYXRvcih0cnVlLCBcIkFycmF5XCIpO1xudmFyIGFycmF5T3JPYnNlcnZhYmxlQXJyYXlPZiA9IGNyZWF0ZU9ic2VydmFibGVBcnJheU9mVHlwZUNoZWNrZXIuYmluZChudWxsLCB0cnVlKTtcbnZhciBvYmplY3RPck9ic2VydmFibGVPYmplY3QgPSBjcmVhdGVPYnNlcnZhYmxlVHlwZUNoZWNrZXJDcmVhdG9yKHRydWUsIFwiT2JqZWN0XCIpO1xuXG5cblxudmFyIHByb3BUeXBlcyA9IE9iamVjdC5mcmVlemUoe1xuXHRvYnNlcnZhYmxlQXJyYXk6IG9ic2VydmFibGVBcnJheSxcblx0b2JzZXJ2YWJsZUFycmF5T2Y6IG9ic2VydmFibGVBcnJheU9mLFxuXHRvYnNlcnZhYmxlTWFwOiBvYnNlcnZhYmxlTWFwLFxuXHRvYnNlcnZhYmxlT2JqZWN0OiBvYnNlcnZhYmxlT2JqZWN0LFxuXHRhcnJheU9yT2JzZXJ2YWJsZUFycmF5OiBhcnJheU9yT2JzZXJ2YWJsZUFycmF5LFxuXHRhcnJheU9yT2JzZXJ2YWJsZUFycmF5T2Y6IGFycmF5T3JPYnNlcnZhYmxlQXJyYXlPZixcblx0b2JqZWN0T3JPYnNlcnZhYmxlT2JqZWN0OiBvYmplY3RPck9ic2VydmFibGVPYmplY3Rcbn0pO1xuXG5mdW5jdGlvbiBpc1N0YXRlbGVzcyhjb21wb25lbnQpIHtcbiAgICAvLyBgZnVuY3Rpb24oKSB7fWAgaGFzIHByb3RvdHlwZSwgYnV0IGAoKSA9PiB7fWAgZG9lc24ndFxuICAgIC8vIGAoKSA9PiB7fWAgdmlhIEJhYmVsIGhhcyBwcm90b3R5cGUgdG9vLlxuICAgIHJldHVybiAhKGNvbXBvbmVudC5wcm90b3R5cGUgJiYgY29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXIpO1xufVxuXG52YXIgaW5qZWN0b3JDb250ZXh0VHlwZXMgPSB7XG4gICAgbW9ieFN0b3Jlczogb2JqZWN0T3JPYnNlcnZhYmxlT2JqZWN0XG59O1xuT2JqZWN0LnNlYWwoaW5qZWN0b3JDb250ZXh0VHlwZXMpO1xuXG52YXIgcHJveGllZEluamVjdG9yUHJvcHMgPSB7XG4gICAgY29udGV4dFR5cGVzOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgICAgICAgcmV0dXJuIGluamVjdG9yQ29udGV4dFR5cGVzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCQkMShfKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJNb2J4IEluamVjdG9yOiB5b3UgYXJlIHRyeWluZyB0byBhdHRhY2ggYGNvbnRleHRUeXBlc2Agb24gYW4gY29tcG9uZW50IGRlY29yYXRlZCB3aXRoIGBpbmplY3RgIChvciBgb2JzZXJ2ZXJgKSBIT0MuIFBsZWFzZSBzcGVjaWZ5IHRoZSBjb250ZXh0VHlwZXMgb24gdGhlIHdyYXBwZWQgY29tcG9uZW50IGluc3RlYWQuIEl0IGlzIGFjY2Vzc2libGUgdGhyb3VnaCB0aGUgYHdyYXBwZWRDb21wb25lbnRgXCIpO1xuICAgICAgICB9LFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlXG4gICAgfSxcbiAgICBpc01vYnhJbmplY3Rvcjoge1xuICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0b3JlIEluamVjdGlvblxuICAgICAqL1xufTtmdW5jdGlvbiBjcmVhdGVTdG9yZUluamVjdG9yKGdyYWJTdG9yZXNGbiwgY29tcG9uZW50LCBpbmplY3ROYW1lcykge1xuICAgIHZhciBfY2xhc3MsIF90ZW1wMjtcblxuICAgIHZhciBkaXNwbGF5TmFtZSA9IFwiaW5qZWN0LVwiICsgKGNvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBjb21wb25lbnQubmFtZSB8fCBjb21wb25lbnQuY29uc3RydWN0b3IgJiYgY29tcG9uZW50LmNvbnN0cnVjdG9yLm5hbWUgfHwgXCJVbmtub3duXCIpO1xuICAgIGlmIChpbmplY3ROYW1lcykgZGlzcGxheU5hbWUgKz0gXCItd2l0aC1cIiArIGluamVjdE5hbWVzO1xuXG4gICAgdmFyIEluamVjdG9yID0gKF90ZW1wMiA9IF9jbGFzcyA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgICAgIGluaGVyaXRzKEluamVjdG9yLCBfQ29tcG9uZW50KTtcblxuICAgICAgICBmdW5jdGlvbiBJbmplY3RvcigpIHtcbiAgICAgICAgICAgIHZhciBfcmVmO1xuXG4gICAgICAgICAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgICAgICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBJbmplY3Rvcik7XG5cbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gSW5qZWN0b3IuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihJbmplY3RvcikpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0b3JlUmVmID0gZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMud3JhcHBlZEluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICAgICAgICB9LCBfdGVtcCksIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3JlYXRlQ2xhc3MoSW5qZWN0b3IsIFt7XG4gICAgICAgICAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgICAgIC8vIE9wdGltaXphdGlvbjogaXQgbWlnaHQgYmUgbW9yZSBlZmZpY2llbnQgdG8gYXBwbHkgdGhlIG1hcHBlciBmdW5jdGlvbiAqb3V0c2lkZSogdGhlIHJlbmRlciBtZXRob2RcbiAgICAgICAgICAgICAgICAvLyAoaWYgdGhlIG1hcHBlciBpcyBhIGZ1bmN0aW9uKSwgdGhhdCBjb3VsZCBhdm9pZCBleHBlbnNpdmUoPykgcmUtcmVuZGVyaW5nIG9mIHRoZSBpbmplY3RvciBjb21wb25lbnRcbiAgICAgICAgICAgICAgICAvLyBTZWUgdGhpcyB0ZXN0OiAndXNpbmcgYSBjdXN0b20gaW5qZWN0b3IgaXMgbm90IHRvbyByZWFjdGl2ZScgaW4gaW5qZWN0LmpzXG4gICAgICAgICAgICAgICAgdmFyIG5ld1Byb3BzID0ge307XG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMucHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvcHNba2V5XSA9IHRoaXMucHJvcHNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH12YXIgYWRkaXRpb25hbFByb3BzID0gZ3JhYlN0b3Jlc0ZuKHRoaXMuY29udGV4dC5tb2J4U3RvcmVzIHx8IHt9LCBuZXdQcm9wcywgdGhpcy5jb250ZXh0KSB8fCB7fTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfa2V5MiBpbiBhZGRpdGlvbmFsUHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3UHJvcHNbX2tleTJdID0gYWRkaXRpb25hbFByb3BzW19rZXkyXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWlzU3RhdGVsZXNzKGNvbXBvbmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3UHJvcHMucmVmID0gdGhpcy5zdG9yZVJlZjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChjb21wb25lbnQsIG5ld1Byb3BzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfV0pO1xuICAgICAgICByZXR1cm4gSW5qZWN0b3I7XG4gICAgfShDb21wb25lbnQpLCBfY2xhc3MuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZSwgX3RlbXAyKTtcblxuICAgIC8vIFN0YXRpYyBmaWVsZHMgZnJvbSBjb21wb25lbnQgc2hvdWxkIGJlIHZpc2libGUgb24gdGhlIGdlbmVyYXRlZCBJbmplY3RvclxuXG4gICAgaG9pc3ROb25SZWFjdFN0YXRpY3MoSW5qZWN0b3IsIGNvbXBvbmVudCk7XG5cbiAgICBJbmplY3Rvci53cmFwcGVkQ29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEluamVjdG9yLCBwcm94aWVkSW5qZWN0b3JQcm9wcyk7XG5cbiAgICByZXR1cm4gSW5qZWN0b3I7XG59XG5cbmZ1bmN0aW9uIGdyYWJTdG9yZXNCeU5hbWUoc3RvcmVOYW1lcykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYmFzZVN0b3JlcywgbmV4dFByb3BzKSB7XG4gICAgICAgIHN0b3JlTmFtZXMuZm9yRWFjaChmdW5jdGlvbiAoc3RvcmVOYW1lKSB7XG4gICAgICAgICAgICBpZiAoc3RvcmVOYW1lIGluIG5leHRQcm9wcyAvLyBwcmVmZXIgcHJvcHMgb3ZlciBzdG9yZXNcbiAgICAgICAgICAgICkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKCEoc3RvcmVOYW1lIGluIGJhc2VTdG9yZXMpKSB0aHJvdyBuZXcgRXJyb3IoXCJNb2JYIGluamVjdG9yOiBTdG9yZSAnXCIgKyBzdG9yZU5hbWUgKyBcIicgaXMgbm90IGF2YWlsYWJsZSEgTWFrZSBzdXJlIGl0IGlzIHByb3ZpZGVkIGJ5IHNvbWUgUHJvdmlkZXJcIik7XG4gICAgICAgICAgICBuZXh0UHJvcHNbc3RvcmVOYW1lXSA9IGJhc2VTdG9yZXNbc3RvcmVOYW1lXTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXh0UHJvcHM7XG4gICAgfTtcbn1cblxuLyoqXG4gKiBoaWdoZXIgb3JkZXIgY29tcG9uZW50IHRoYXQgaW5qZWN0cyBzdG9yZXMgdG8gYSBjaGlsZC5cbiAqIHRha2VzIGVpdGhlciBhIHZhcmFyZ3MgbGlzdCBvZiBzdHJpbmdzLCB3aGljaCBhcmUgc3RvcmVzIHJlYWQgZnJvbSB0aGUgY29udGV4dCxcbiAqIG9yIGEgZnVuY3Rpb24gdGhhdCBtYW51YWxseSBtYXBzIHRoZSBhdmFpbGFibGUgc3RvcmVzIGZyb20gdGhlIGNvbnRleHQgdG8gcHJvcHM6XG4gKiBzdG9yZXNUb1Byb3BzKG1vYnhTdG9yZXMsIHByb3BzLCBjb250ZXh0KSA9PiBuZXdQcm9wc1xuICovXG5mdW5jdGlvbiBpbmplY3QoKSAvKiBmbihzdG9yZXMsIG5leHRQcm9wcykgb3IgLi4uc3RvcmVOYW1lcyAqL3tcbiAgICB2YXIgZ3JhYlN0b3Jlc0ZuID0gdm9pZCAwO1xuICAgIGlmICh0eXBlb2YgYXJndW1lbnRzWzBdID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZ3JhYlN0b3Jlc0ZuID0gYXJndW1lbnRzWzBdO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGNvbXBvbmVudENsYXNzKSB7XG4gICAgICAgICAgICB2YXIgaW5qZWN0ZWQgPSBjcmVhdGVTdG9yZUluamVjdG9yKGdyYWJTdG9yZXNGbiwgY29tcG9uZW50Q2xhc3MpO1xuICAgICAgICAgICAgaW5qZWN0ZWQuaXNNb2J4SW5qZWN0b3IgPSBmYWxzZTsgLy8gc3VwcmVzcyB3YXJuaW5nXG4gICAgICAgICAgICAvLyBtYXJrIHRoZSBJbmplY3RvciBhcyBvYnNlcnZlciwgdG8gbWFrZSBpdCByZWFjdCB0byBleHByZXNzaW9ucyBpbiBgZ3JhYlN0b3Jlc0ZuYCxcbiAgICAgICAgICAgIC8vIHNlZSAjMTExXG4gICAgICAgICAgICBpbmplY3RlZCA9IG9ic2VydmVyKGluamVjdGVkKTtcbiAgICAgICAgICAgIGluamVjdGVkLmlzTW9ieEluamVjdG9yID0gdHJ1ZTsgLy8gcmVzdG9yZSB3YXJuaW5nXG4gICAgICAgICAgICByZXR1cm4gaW5qZWN0ZWQ7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHN0b3JlTmFtZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHN0b3JlTmFtZXNbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1ncmFiU3RvcmVzRm4gPSBncmFiU3RvcmVzQnlOYW1lKHN0b3JlTmFtZXMpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGNvbXBvbmVudENsYXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlU3RvcmVJbmplY3RvcihncmFiU3RvcmVzRm4sIGNvbXBvbmVudENsYXNzLCBzdG9yZU5hbWVzLmpvaW4oXCItXCIpKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbi8qKlxuICogZGV2IHRvb2wgc3VwcG9ydFxuICovXG52YXIgaXNEZXZ0b29sc0VuYWJsZWQgPSBmYWxzZTtcblxudmFyIGlzVXNpbmdTdGF0aWNSZW5kZXJpbmcgPSBmYWxzZTtcblxudmFyIHdhcm5lZEFib3V0T2JzZXJ2ZXJJbmplY3REZXByZWNhdGlvbiA9IGZhbHNlO1xuXG4vLyBXZWFrTWFwPE5vZGUsIE9iamVjdD47XG52YXIgY29tcG9uZW50QnlOb2RlUmVnaXN0ZXJ5ID0gdHlwZW9mIFdlYWtNYXAgIT09IFwidW5kZWZpbmVkXCIgPyBuZXcgV2Vha01hcCgpIDogdW5kZWZpbmVkO1xudmFyIHJlbmRlclJlcG9ydGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5mdW5jdGlvbiBmaW5kRE9NTm9kZSQyKGNvbXBvbmVudCkge1xuICAgIGlmIChmaW5kRE9NTm9kZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGZpbmRET01Ob2RlKGNvbXBvbmVudCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIGZpbmRET01Ob2RlIHdpbGwgdGhyb3cgaW4gcmVhY3QtdGVzdC1yZW5kZXJlciwgc2VlOlxuICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb2J4anMvbW9ieC1yZWFjdC9pc3N1ZXMvMjE2XG4gICAgICAgICAgICAvLyBJcyB0aGVyZSBhIGJldHRlciBoZXVyaXN0aWM/XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gcmVwb3J0UmVuZGVyaW5nKGNvbXBvbmVudCkge1xuICAgIHZhciBub2RlID0gZmluZERPTU5vZGUkMihjb21wb25lbnQpO1xuICAgIGlmIChub2RlICYmIGNvbXBvbmVudEJ5Tm9kZVJlZ2lzdGVyeSkgY29tcG9uZW50QnlOb2RlUmVnaXN0ZXJ5LnNldChub2RlLCBjb21wb25lbnQpO1xuXG4gICAgcmVuZGVyUmVwb3J0ZXIuZW1pdCh7XG4gICAgICAgIGV2ZW50OiBcInJlbmRlclwiLFxuICAgICAgICByZW5kZXJUaW1lOiBjb21wb25lbnQuX18kbW9iUmVuZGVyRW5kIC0gY29tcG9uZW50Ll9fJG1vYlJlbmRlclN0YXJ0LFxuICAgICAgICB0b3RhbFRpbWU6IERhdGUubm93KCkgLSBjb21wb25lbnQuX18kbW9iUmVuZGVyU3RhcnQsXG4gICAgICAgIGNvbXBvbmVudDogY29tcG9uZW50LFxuICAgICAgICBub2RlOiBub2RlXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHRyYWNrQ29tcG9uZW50cygpIHtcbiAgICBpZiAodHlwZW9mIFdlYWtNYXAgPT09IFwidW5kZWZpbmVkXCIpIHRocm93IG5ldyBFcnJvcihcIlttb2J4LXJlYWN0XSB0cmFja2luZyBjb21wb25lbnRzIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyLlwiKTtcbiAgICBpZiAoIWlzRGV2dG9vbHNFbmFibGVkKSBpc0RldnRvb2xzRW5hYmxlZCA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIHVzZVN0YXRpY1JlbmRlcmluZyh1c2VTdGF0aWNSZW5kZXJpbmcpIHtcbiAgICBpc1VzaW5nU3RhdGljUmVuZGVyaW5nID0gdXNlU3RhdGljUmVuZGVyaW5nO1xufVxuXG4vKipcbiAqIEVycm9ycyByZXBvcnRlclxuICovXG5cbnZhciBlcnJvcnNSZXBvcnRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuLyoqXG4gKiBVdGlsaXRpZXNcbiAqL1xuXG5mdW5jdGlvbiBwYXRjaCh0YXJnZXQsIGZ1bmNOYW1lKSB7XG4gICAgdmFyIHJ1bk1peGluRmlyc3QgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuXG4gICAgdmFyIGJhc2UgPSB0YXJnZXRbZnVuY05hbWVdO1xuICAgIHZhciBtaXhpbkZ1bmMgPSByZWFjdGl2ZU1peGluW2Z1bmNOYW1lXTtcbiAgICB2YXIgZiA9ICFiYXNlID8gbWl4aW5GdW5jIDogcnVuTWl4aW5GaXJzdCA9PT0gdHJ1ZSA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbWl4aW5GdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIGJhc2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9IDogZnVuY3Rpb24gKCkge1xuICAgICAgICBiYXNlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIG1peGluRnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICAvLyBNV0U6IGlkZWFsbHkgd2UgZnJlZXplIGhlcmUgdG8gcHJvdGVjdCBhZ2FpbnN0IGFjY2lkZW50YWwgb3ZlcndyaXRlcyBpbiBjb21wb25lbnQgaW5zdGFuY2VzLCBzZWUgIzE5NVxuICAgIC8vIC4uLmJ1dCB0aGF0IGJyZWFrcyByZWFjdC1ob3QtbG9hZGVyLCBzZWUgIzIzMS4uLlxuICAgIHRhcmdldFtmdW5jTmFtZV0gPSBmO1xufVxuXG5mdW5jdGlvbiBzaGFsbG93RXF1YWwob2JqQSwgb2JqQikge1xuICAgIC8vRnJvbTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2ZianMvYmxvYi9jNjk5MDRhNTExYjkwMDI2NjkzNTE2ODIyMzA2M2RkODc3MmRmYzQwL3BhY2thZ2VzL2ZianMvc3JjL2NvcmUvc2hhbGxvd0VxdWFsLmpzXG4gICAgaWYgKGlzKG9iakEsIG9iakIpKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoKHR5cGVvZiBvYmpBID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqQSkpICE9PSBcIm9iamVjdFwiIHx8IG9iakEgPT09IG51bGwgfHwgKHR5cGVvZiBvYmpCID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yob2JqQikpICE9PSBcIm9iamVjdFwiIHx8IG9iakIgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIga2V5c0EgPSBPYmplY3Qua2V5cyhvYmpBKTtcbiAgICB2YXIga2V5c0IgPSBPYmplY3Qua2V5cyhvYmpCKTtcbiAgICBpZiAoa2V5c0EubGVuZ3RoICE9PSBrZXlzQi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXNBLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghaGFzT3duUHJvcGVydHkuY2FsbChvYmpCLCBrZXlzQVtpXSkgfHwgIWlzKG9iakFba2V5c0FbaV1dLCBvYmpCW2tleXNBW2ldXSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaXMoeCwgeSkge1xuICAgIC8vIEZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mYmpzL2Jsb2IvYzY5OTA0YTUxMWI5MDAyNjY5MzUxNjgyMjMwNjNkZDg3NzJkZmM0MC9wYWNrYWdlcy9mYmpzL3NyYy9jb3JlL3NoYWxsb3dFcXVhbC5qc1xuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZWFjdGl2ZU1peGluXG4gKi9cbnZhciByZWFjdGl2ZU1peGluID0ge1xuICAgIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIGlmIChpc1VzaW5nU3RhdGljUmVuZGVyaW5nID09PSB0cnVlKSByZXR1cm47XG4gICAgICAgIC8vIEdlbmVyYXRlIGZyaWVuZGx5IG5hbWUgZm9yIGRlYnVnZ2luZ1xuICAgICAgICB2YXIgaW5pdGlhbE5hbWUgPSB0aGlzLmRpc3BsYXlOYW1lIHx8IHRoaXMubmFtZSB8fCB0aGlzLmNvbnN0cnVjdG9yICYmICh0aGlzLmNvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IHRoaXMuY29uc3RydWN0b3IubmFtZSkgfHwgXCI8Y29tcG9uZW50PlwiO1xuICAgICAgICB2YXIgcm9vdE5vZGVJRCA9IHRoaXMuX3JlYWN0SW50ZXJuYWxJbnN0YW5jZSAmJiB0aGlzLl9yZWFjdEludGVybmFsSW5zdGFuY2UuX3Jvb3ROb2RlSUQgfHwgdGhpcy5fcmVhY3RJbnRlcm5hbEZpYmVyICYmIHRoaXMuX3JlYWN0SW50ZXJuYWxGaWJlci5fZGVidWdJRDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgcHJvcHMgYXJlIHNoYWxsb3dseSBtb2RpZmllZCwgcmVhY3Qgd2lsbCByZW5kZXIgYW55d2F5LFxuICAgICAgICAgKiBzbyBhdG9tLnJlcG9ydENoYW5nZWQoKSBzaG91bGQgbm90IHJlc3VsdCBpbiB5ZXQgYW5vdGhlciByZS1yZW5kZXJcbiAgICAgICAgICovXG4gICAgICAgIHZhciBza2lwUmVuZGVyID0gZmFsc2U7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBmb3JjZVVwZGF0ZSB3aWxsIHJlLWFzc2lnbiB0aGlzLnByb3BzLiBXZSBkb24ndCB3YW50IHRoYXQgdG8gY2F1c2UgYSBsb29wLFxuICAgICAgICAgKiBzbyBkZXRlY3QgdGhlc2UgY2hhbmdlc1xuICAgICAgICAgKi9cbiAgICAgICAgdmFyIGlzRm9yY2luZ1VwZGF0ZSA9IGZhbHNlO1xuXG4gICAgICAgIGZ1bmN0aW9uIG1ha2VQcm9wZXJ0eU9ic2VydmFibGVSZWZlcmVuY2UocHJvcE5hbWUpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZUhvbGRlciA9IHRoaXNbcHJvcE5hbWVdO1xuICAgICAgICAgICAgdmFyIGF0b20gPSBjcmVhdGVBdG9tKFwicmVhY3RpdmUgXCIgKyBwcm9wTmFtZSk7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgcHJvcE5hbWUsIHtcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgICAgICAgICAgICAgICAgYXRvbS5yZXBvcnRPYnNlcnZlZCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVIb2xkZXI7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCQkMSh2KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNGb3JjaW5nVXBkYXRlICYmICFzaGFsbG93RXF1YWwodmFsdWVIb2xkZXIsIHYpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZUhvbGRlciA9IHY7XG4gICAgICAgICAgICAgICAgICAgICAgICBza2lwUmVuZGVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0b20ucmVwb3J0Q2hhbmdlZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2tpcFJlbmRlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVIb2xkZXIgPSB2O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtYWtlIHRoaXMucHJvcHMgYW4gb2JzZXJ2YWJsZSByZWZlcmVuY2UsIHNlZSAjMTI0XG4gICAgICAgIG1ha2VQcm9wZXJ0eU9ic2VydmFibGVSZWZlcmVuY2UuY2FsbCh0aGlzLCBcInByb3BzXCIpO1xuICAgICAgICAvLyBtYWtlIHN0YXRlIGFuIG9ic2VydmFibGUgcmVmZXJlbmNlXG4gICAgICAgIG1ha2VQcm9wZXJ0eU9ic2VydmFibGVSZWZlcmVuY2UuY2FsbCh0aGlzLCBcInN0YXRlXCIpO1xuXG4gICAgICAgIC8vIHdpcmUgdXAgcmVhY3RpdmUgcmVuZGVyXG4gICAgICAgIHZhciBiYXNlUmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdmFyIHJlYWN0aW9uID0gbnVsbDtcbiAgICAgICAgdmFyIGlzUmVuZGVyaW5nUGVuZGluZyA9IGZhbHNlO1xuXG4gICAgICAgIHZhciBpbml0aWFsUmVuZGVyID0gZnVuY3Rpb24gaW5pdGlhbFJlbmRlcigpIHtcbiAgICAgICAgICAgIHJlYWN0aW9uID0gbmV3IFJlYWN0aW9uKGluaXRpYWxOYW1lICsgXCIjXCIgKyByb290Tm9kZUlEICsgXCIucmVuZGVyKClcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICghaXNSZW5kZXJpbmdQZW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE4uQi4gR2V0dGluZyBoZXJlICpiZWZvcmUgbW91bnRpbmcqIG1lYW5zIHRoYXQgYSBjb21wb25lbnQgY29uc3RydWN0b3IgaGFzIHNpZGUgZWZmZWN0cyAoc2VlIHRoZSByZWxldmFudCB0ZXN0IGluIG1pc2MuanMpXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgdW5pZGlvbWF0aWMgUmVhY3QgdXNhZ2UgYnV0IFJlYWN0IHdpbGwgY29ycmVjdGx5IHdhcm4gYWJvdXQgdGhpcyBzbyB3ZSBjb250aW51ZSBhcyB1c3VhbFxuICAgICAgICAgICAgICAgICAgICAvLyBTZWUgIzg1IC8gUHVsbCAjNDRcbiAgICAgICAgICAgICAgICAgICAgaXNSZW5kZXJpbmdQZW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBfdGhpcy5jb21wb25lbnRXaWxsUmVhY3QgPT09IFwiZnVuY3Rpb25cIikgX3RoaXMuY29tcG9uZW50V2lsbFJlYWN0KCk7IC8vIFRPRE86IHdyYXAgaW4gYWN0aW9uP1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuX18kbW9ieElzVW5tb3VudGVkICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBhcmUgdW5tb3VudGVkIGF0IHRoaXMgcG9pbnQsIGNvbXBvbmVudFdpbGxSZWFjdCgpIGhhZCBhIHNpZGUgZWZmZWN0IGNhdXNpbmcgdGhlIGNvbXBvbmVudCB0byB1bm1vdW50ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSB0aGlzIGNoZWNrPyBUaGVuIHJlYWN0IHdpbGwgcHJvcGVybHkgd2FybiBhYm91dCB0aGUgZmFjdCB0aGF0IHRoaXMgc2hvdWxkIG5vdCBoYXBwZW4/IFNlZSAjNzNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhvd2V2ZXIsIHBlb3BsZSBhbHNvIGNsYWltIHRoaXMgbWlndGggaGFwcGVuIGR1cmluZyB1bml0IHRlc3RzLi5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoYXNFcnJvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRm9yY2luZ1VwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFza2lwUmVuZGVyKSBDb21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlLmNhbGwoX3RoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc0Vycm9yID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRm9yY2luZ1VwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNFcnJvcikgcmVhY3Rpb24uZGlzcG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZWFjdGlvbi5yZWFjdENvbXBvbmVudCA9IF90aGlzO1xuICAgICAgICAgICAgcmVhY3RpdmVSZW5kZXIuJG1vYnggPSByZWFjdGlvbjtcbiAgICAgICAgICAgIF90aGlzLnJlbmRlciA9IHJlYWN0aXZlUmVuZGVyO1xuICAgICAgICAgICAgcmV0dXJuIHJlYWN0aXZlUmVuZGVyKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHJlYWN0aXZlUmVuZGVyID0gZnVuY3Rpb24gcmVhY3RpdmVSZW5kZXIoKSB7XG4gICAgICAgICAgICBpc1JlbmRlcmluZ1BlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciBleGNlcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgcmVuZGVyaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgcmVhY3Rpb24udHJhY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmIChpc0RldnRvb2xzRW5hYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5fXyRtb2JSZW5kZXJTdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmluZyA9IF9hbGxvd1N0YXRlQ2hhbmdlcyhmYWxzZSwgYmFzZVJlbmRlcik7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBleGNlcHRpb24gPSBlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaXNEZXZ0b29sc0VuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX18kbW9iUmVuZGVyRW5kID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChleGNlcHRpb24pIHtcbiAgICAgICAgICAgICAgICBlcnJvcnNSZXBvcnRlci5lbWl0KGV4Y2VwdGlvbik7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlbmRlcmluZztcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnJlbmRlciA9IGluaXRpYWxSZW5kZXI7XG4gICAgfSxcblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgaWYgKGlzVXNpbmdTdGF0aWNSZW5kZXJpbmcgPT09IHRydWUpIHJldHVybjtcbiAgICAgICAgdGhpcy5yZW5kZXIuJG1vYnggJiYgdGhpcy5yZW5kZXIuJG1vYnguZGlzcG9zZSgpO1xuICAgICAgICB0aGlzLl9fJG1vYnhJc1VubW91bnRlZCA9IHRydWU7XG4gICAgICAgIGlmIChpc0RldnRvb2xzRW5hYmxlZCkge1xuICAgICAgICAgICAgdmFyIG5vZGUgPSBmaW5kRE9NTm9kZSQyKHRoaXMpO1xuICAgICAgICAgICAgaWYgKG5vZGUgJiYgY29tcG9uZW50QnlOb2RlUmVnaXN0ZXJ5KSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50QnlOb2RlUmVnaXN0ZXJ5LmRlbGV0ZShub2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbmRlclJlcG9ydGVyLmVtaXQoe1xuICAgICAgICAgICAgICAgIGV2ZW50OiBcImRlc3Ryb3lcIixcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICAgICAgICAgICAgbm9kZTogbm9kZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZiAoaXNEZXZ0b29sc0VuYWJsZWQpIHtcbiAgICAgICAgICAgIHJlcG9ydFJlbmRlcmluZyh0aGlzKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKGlzRGV2dG9vbHNFbmFibGVkKSB7XG4gICAgICAgICAgICByZXBvcnRSZW5kZXJpbmcodGhpcyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgc2hvdWxkQ29tcG9uZW50VXBkYXRlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgaWYgKGlzVXNpbmdTdGF0aWNSZW5kZXJpbmcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlttb2J4LXJlYWN0XSBJdCBzZWVtcyB0aGF0IGEgcmUtcmVuZGVyaW5nIG9mIGEgUmVhY3QgY29tcG9uZW50IGlzIHRyaWdnZXJlZCB3aGlsZSBpbiBzdGF0aWMgKHNlcnZlci1zaWRlKSBtb2RlLiBQbGVhc2UgbWFrZSBzdXJlIGNvbXBvbmVudHMgYXJlIHJlbmRlcmVkIG9ubHkgb25jZSBzZXJ2ZXItc2lkZS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdXBkYXRlIG9uIGFueSBzdGF0ZSBjaGFuZ2VzIChhcyBpcyB0aGUgZGVmYXVsdClcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IG5leHRTdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdXBkYXRlIGlmIHByb3BzIGFyZSBzaGFsbG93bHkgbm90IGVxdWFsLCBpbnNwaXJlZCBieSBQdXJlUmVuZGVyTWl4aW5cbiAgICAgICAgLy8gd2UgY291bGQgcmV0dXJuIGp1c3QgJ2ZhbHNlJyBoZXJlLCBhbmQgYXZvaWQgdGhlIGBza2lwUmVuZGVyYCBjaGVja3MgZXRjXG4gICAgICAgIC8vIGhvd2V2ZXIsIGl0IGlzIG5pY2VyIGlmIGxpZmVjeWNsZSBldmVudHMgYXJlIHRyaWdnZXJlZCBsaWtlIHVzdWFsbHksXG4gICAgICAgIC8vIHNvIHdlIHJldHVybiB0cnVlIGhlcmUgaWYgcHJvcHMgYXJlIHNoYWxsb3dseSBtb2RpZmllZC5cbiAgICAgICAgcmV0dXJuICFzaGFsbG93RXF1YWwodGhpcy5wcm9wcywgbmV4dFByb3BzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPYnNlcnZlciBmdW5jdGlvbiAvIGRlY29yYXRvclxuICAgICAqL1xufTtmdW5jdGlvbiBvYnNlcnZlcihhcmcxLCBhcmcyKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcxID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlN0b3JlIG5hbWVzIHNob3VsZCBiZSBwcm92aWRlZCBhcyBhcnJheVwiKTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnMSkpIHtcbiAgICAgICAgLy8gY29tcG9uZW50IG5lZWRzIHN0b3Jlc1xuICAgICAgICBpZiAoIXdhcm5lZEFib3V0T2JzZXJ2ZXJJbmplY3REZXByZWNhdGlvbikge1xuICAgICAgICAgICAgd2FybmVkQWJvdXRPYnNlcnZlckluamVjdERlcHJlY2F0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTW9ieCBvYnNlcnZlcjogVXNpbmcgb2JzZXJ2ZXIgdG8gaW5qZWN0IHN0b3JlcyBpcyBkZXByZWNhdGVkIHNpbmNlIDQuMC4gVXNlIGBAaW5qZWN0KFwic3RvcmUxXCIsIFwic3RvcmUyXCIpIEBvYnNlcnZlciBDb21wb25lbnRDbGFzc2Agb3IgYGluamVjdChcInN0b3JlMVwiLCBcInN0b3JlMlwiKShvYnNlcnZlcihjb21wb25lbnRDbGFzcykpYCBpbnN0ZWFkIG9mIGBAb2JzZXJ2ZXIoW1wic3RvcmUxXCIsIFwic3RvcmUyXCJdKSBDb21wb25lbnRDbGFzc2AnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWFyZzIpIHtcbiAgICAgICAgICAgIC8vIGludm9rZWQgYXMgZGVjb3JhdG9yXG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGNvbXBvbmVudENsYXNzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ic2VydmVyKGFyZzEsIGNvbXBvbmVudENsYXNzKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaW5qZWN0LmFwcGx5KG51bGwsIGFyZzEpKG9ic2VydmVyKGFyZzIpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgY29tcG9uZW50Q2xhc3MgPSBhcmcxO1xuXG4gICAgaWYgKGNvbXBvbmVudENsYXNzLmlzTW9ieEluamVjdG9yID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIk1vYnggb2JzZXJ2ZXI6IFlvdSBhcmUgdHJ5aW5nIHRvIHVzZSAnb2JzZXJ2ZXInIG9uIGEgY29tcG9uZW50IHRoYXQgYWxyZWFkeSBoYXMgJ2luamVjdCcuIFBsZWFzZSBhcHBseSAnb2JzZXJ2ZXInIGJlZm9yZSBhcHBseWluZyAnaW5qZWN0J1wiKTtcbiAgICB9XG5cbiAgICAvLyBTdGF0ZWxlc3MgZnVuY3Rpb24gY29tcG9uZW50OlxuICAgIC8vIElmIGl0IGlzIGZ1bmN0aW9uIGJ1dCBkb2Vzbid0IHNlZW0gdG8gYmUgYSByZWFjdCBjbGFzcyBjb25zdHJ1Y3RvcixcbiAgICAvLyB3cmFwIGl0IHRvIGEgcmVhY3QgY2xhc3MgYXV0b21hdGljYWxseVxuICAgIGlmICh0eXBlb2YgY29tcG9uZW50Q2xhc3MgPT09IFwiZnVuY3Rpb25cIiAmJiAoIWNvbXBvbmVudENsYXNzLnByb3RvdHlwZSB8fCAhY29tcG9uZW50Q2xhc3MucHJvdG90eXBlLnJlbmRlcikgJiYgIWNvbXBvbmVudENsYXNzLmlzUmVhY3RDbGFzcyAmJiAhQ29tcG9uZW50LmlzUHJvdG90eXBlT2YoY29tcG9uZW50Q2xhc3MpKSB7XG4gICAgICAgIHZhciBfY2xhc3MsIF90ZW1wO1xuXG4gICAgICAgIHJldHVybiBvYnNlcnZlcigoX3RlbXAgPSBfY2xhc3MgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICAgICAgICAgaW5oZXJpdHMoX2NsYXNzLCBfQ29tcG9uZW50KTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gX2NsYXNzKCkge1xuICAgICAgICAgICAgICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIF9jbGFzcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9jbGFzcy5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKF9jbGFzcykpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjcmVhdGVDbGFzcyhfY2xhc3MsIFt7XG4gICAgICAgICAgICAgICAga2V5OiBcInJlbmRlclwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb21wb25lbnRDbGFzcy5jYWxsKHRoaXMsIHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgcmV0dXJuIF9jbGFzcztcbiAgICAgICAgfShDb21wb25lbnQpLCBfY2xhc3MuZGlzcGxheU5hbWUgPSBjb21wb25lbnRDbGFzcy5kaXNwbGF5TmFtZSB8fCBjb21wb25lbnRDbGFzcy5uYW1lLCBfY2xhc3MuY29udGV4dFR5cGVzID0gY29tcG9uZW50Q2xhc3MuY29udGV4dFR5cGVzLCBfY2xhc3MucHJvcFR5cGVzID0gY29tcG9uZW50Q2xhc3MucHJvcFR5cGVzLCBfY2xhc3MuZGVmYXVsdFByb3BzID0gY29tcG9uZW50Q2xhc3MuZGVmYXVsdFByb3BzLCBfdGVtcCkpO1xuICAgIH1cblxuICAgIGlmICghY29tcG9uZW50Q2xhc3MpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHBhc3MgYSB2YWxpZCBjb21wb25lbnQgdG8gJ29ic2VydmVyJ1wiKTtcbiAgICB9XG5cbiAgICB2YXIgdGFyZ2V0ID0gY29tcG9uZW50Q2xhc3MucHJvdG90eXBlIHx8IGNvbXBvbmVudENsYXNzO1xuICAgIG1peGluTGlmZWN5Y2xlRXZlbnRzKHRhcmdldCk7XG4gICAgY29tcG9uZW50Q2xhc3MuaXNNb2JYUmVhY3RPYnNlcnZlciA9IHRydWU7XG4gICAgcmV0dXJuIGNvbXBvbmVudENsYXNzO1xufVxuXG5mdW5jdGlvbiBtaXhpbkxpZmVjeWNsZUV2ZW50cyh0YXJnZXQpIHtcbiAgICBwYXRjaCh0YXJnZXQsIFwiY29tcG9uZW50V2lsbE1vdW50XCIsIHRydWUpO1tcImNvbXBvbmVudERpZE1vdW50XCIsIFwiY29tcG9uZW50V2lsbFVubW91bnRcIiwgXCJjb21wb25lbnREaWRVcGRhdGVcIl0uZm9yRWFjaChmdW5jdGlvbiAoZnVuY05hbWUpIHtcbiAgICAgICAgcGF0Y2godGFyZ2V0LCBmdW5jTmFtZSk7XG4gICAgfSk7XG4gICAgaWYgKCF0YXJnZXQuc2hvdWxkQ29tcG9uZW50VXBkYXRlKSB7XG4gICAgICAgIHRhcmdldC5zaG91bGRDb21wb25lbnRVcGRhdGUgPSByZWFjdGl2ZU1peGluLnNob3VsZENvbXBvbmVudFVwZGF0ZTtcbiAgICB9XG59XG5cbi8vIFRPRE86IHN1cHBvcnQgaW5qZWN0aW9uIHNvbWVob3cgYXMgd2VsbD9cbnZhciBPYnNlcnZlciA9IG9ic2VydmVyKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgICAgb2JzZXJ2ZXJJbmplY3QgPSBfcmVmLmluamVjdCxcbiAgICAgICAgcmVuZGVyID0gX3JlZi5yZW5kZXI7XG5cbiAgICB2YXIgY29tcG9uZW50ID0gY2hpbGRyZW4gfHwgcmVuZGVyO1xuICAgIGlmICh0eXBlb2YgY29tcG9uZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoIW9ic2VydmVySW5qZWN0KSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQoKTtcbiAgICB9XG4gICAgdmFyIEluamVjdENvbXBvbmVudCA9IGluamVjdChvYnNlcnZlckluamVjdCkoY29tcG9uZW50KTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChJbmplY3RDb21wb25lbnQsIG51bGwpO1xufSk7XG5cbk9ic2VydmVyLmRpc3BsYXlOYW1lID0gXCJPYnNlcnZlclwiO1xuXG52YXIgT2JzZXJ2ZXJQcm9wc0NoZWNrID0gZnVuY3Rpb24gT2JzZXJ2ZXJQcm9wc0NoZWNrKHByb3BzLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICB2YXIgZXh0cmFLZXkgPSBrZXkgPT09IFwiY2hpbGRyZW5cIiA/IFwicmVuZGVyXCIgOiBcImNoaWxkcmVuXCI7XG4gICAgaWYgKHR5cGVvZiBwcm9wc1trZXldID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIHByb3BzW2V4dHJhS2V5XSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJJbnZhbGlkIHByb3AsZG8gbm90IHVzZSBjaGlsZHJlbiBhbmQgcmVuZGVyIGluIHRoZSBzYW1lIHRpbWUgaW5gXCIgKyBjb21wb25lbnROYW1lKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHByb3BzW2tleV0gPT09IFwiZnVuY3Rpb25cIiB8fCB0eXBlb2YgcHJvcHNbZXh0cmFLZXldID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEVycm9yKFwiSW52YWxpZCBwcm9wIGBcIiArIHByb3BGdWxsTmFtZSArIFwiYCBvZiB0eXBlIGBcIiArIF90eXBlb2YocHJvcHNba2V5XSkgKyBcImAgc3VwcGxpZWQgdG9cIiArIFwiIGBcIiArIGNvbXBvbmVudE5hbWUgKyBcImAsIGV4cGVjdGVkIGBmdW5jdGlvbmAuXCIpO1xufTtcblxuT2JzZXJ2ZXIucHJvcFR5cGVzID0ge1xuICAgIHJlbmRlcjogT2JzZXJ2ZXJQcm9wc0NoZWNrLFxuICAgIGNoaWxkcmVuOiBPYnNlcnZlclByb3BzQ2hlY2tcbn07XG5cbnZhciBfY2xhc3M7XG52YXIgX3RlbXA7XG5cbnZhciBzcGVjaWFsUmVhY3RLZXlzID0geyBjaGlsZHJlbjogdHJ1ZSwga2V5OiB0cnVlLCByZWY6IHRydWUgfTtcblxudmFyIFByb3ZpZGVyID0gKF90ZW1wID0gX2NsYXNzID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBpbmhlcml0cyhQcm92aWRlciwgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBQcm92aWRlcigpIHtcbiAgICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgUHJvdmlkZXIpO1xuICAgICAgICByZXR1cm4gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUHJvdmlkZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihQcm92aWRlcikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNsYXNzKFByb3ZpZGVyLCBbe1xuICAgICAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImdldENoaWxkQ29udGV4dFwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgICAgICAgdmFyIHN0b3JlcyA9IHt9O1xuICAgICAgICAgICAgLy8gaW5oZXJpdCBzdG9yZXNcbiAgICAgICAgICAgIHZhciBiYXNlU3RvcmVzID0gdGhpcy5jb250ZXh0Lm1vYnhTdG9yZXM7XG4gICAgICAgICAgICBpZiAoYmFzZVN0b3JlcykgZm9yICh2YXIga2V5IGluIGJhc2VTdG9yZXMpIHtcbiAgICAgICAgICAgICAgICBzdG9yZXNba2V5XSA9IGJhc2VTdG9yZXNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGFkZCBvd24gc3RvcmVzXG4gICAgICAgICAgICBmb3IgKHZhciBfa2V5IGluIHRoaXMucHJvcHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXNwZWNpYWxSZWFjdEtleXNbX2tleV0gJiYgX2tleSAhPT0gXCJzdXBwcmVzc0NoYW5nZWRTdG9yZVdhcm5pbmdcIikgc3RvcmVzW19rZXldID0gdGhpcy5wcm9wc1tfa2V5XTtcbiAgICAgICAgICAgIH1yZXR1cm4ge1xuICAgICAgICAgICAgICAgIG1vYnhTdG9yZXM6IHN0b3Jlc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgICAgICAvLyBNYXliZSB0aGlzIHdhcm5pbmcgaXMgdG9vIGFnZ3Jlc3NpdmU/XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMobmV4dFByb3BzKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKHRoaXMucHJvcHMpLmxlbmd0aCkgY29uc29sZS53YXJuKFwiTW9iWCBQcm92aWRlcjogVGhlIHNldCBvZiBwcm92aWRlZCBzdG9yZXMgaGFzIGNoYW5nZWQuIFBsZWFzZSBhdm9pZCBjaGFuZ2luZyBzdG9yZXMgYXMgdGhlIGNoYW5nZSBtaWdodCBub3QgcHJvcGFnYXRlIHRvIGFsbCBjaGlsZHJlblwiKTtcbiAgICAgICAgICAgIGlmICghbmV4dFByb3BzLnN1cHByZXNzQ2hhbmdlZFN0b3JlV2FybmluZykgZm9yICh2YXIga2V5IGluIG5leHRQcm9wcykge1xuICAgICAgICAgICAgICAgIGlmICghc3BlY2lhbFJlYWN0S2V5c1trZXldICYmIHRoaXMucHJvcHNba2V5XSAhPT0gbmV4dFByb3BzW2tleV0pIGNvbnNvbGUud2FybihcIk1vYlggUHJvdmlkZXI6IFByb3ZpZGVkIHN0b3JlICdcIiArIGtleSArIFwiJyBoYXMgY2hhbmdlZC4gUGxlYXNlIGF2b2lkIHJlcGxhY2luZyBzdG9yZXMgYXMgdGhlIGNoYW5nZSBtaWdodCBub3QgcHJvcGFnYXRlIHRvIGFsbCBjaGlsZHJlblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1dKTtcbiAgICByZXR1cm4gUHJvdmlkZXI7XG59KENvbXBvbmVudCksIF9jbGFzcy5jb250ZXh0VHlwZXMgPSB7XG4gICAgbW9ieFN0b3Jlczogb2JqZWN0T3JPYnNlcnZhYmxlT2JqZWN0XG59LCBfY2xhc3MuY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gICAgbW9ieFN0b3Jlczogb2JqZWN0T3JPYnNlcnZhYmxlT2JqZWN0LmlzUmVxdWlyZWRcbn0sIF90ZW1wKTtcblxuaWYgKCFDb21wb25lbnQpIHRocm93IG5ldyBFcnJvcihcIm1vYngtcmVhY3QgcmVxdWlyZXMgUmVhY3QgdG8gYmUgYXZhaWxhYmxlXCIpO1xuaWYgKCFzcHkpIHRocm93IG5ldyBFcnJvcihcIm1vYngtcmVhY3QgcmVxdWlyZXMgbW9ieCB0byBiZSBhdmFpbGFibGVcIik7XG5cbmlmICh0eXBlb2YgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMgPT09IFwiZnVuY3Rpb25cIikgY29uZmlndXJlKHsgcmVhY3Rpb25TY2hlZHVsZXI6IHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzIH0pO2Vsc2UgaWYgKHR5cGVvZiB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyQxID09PSBcImZ1bmN0aW9uXCIpIGNvbmZpZ3VyZSh7IHJlYWN0aW9uU2NoZWR1bGVyOiB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyQxIH0pO1xuXG52YXIgb25FcnJvciA9IGZ1bmN0aW9uIG9uRXJyb3IoZm4pIHtcbiAgICByZXR1cm4gZXJyb3JzUmVwb3J0ZXIub24oZm4pO1xufTtcblxuLyogRGV2VG9vbCBzdXBwb3J0ICovXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmR5a29nL21vYngtZGV2dG9vbHMvYmxvYi9kODk3NmMyNGI4Y2I3MjdlZDU5ZjlhMGJjOTA1YTAwOWRmNzllMjIxL3NyYy9iYWNrZW5kL2luc3RhbGxHbG9iYWxIb29rLmpzXG5cbmlmICgodHlwZW9mIF9fTU9CWF9ERVZUT09MU19HTE9CQUxfSE9PS19fID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2YoX19NT0JYX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pKSA9PT0gXCJvYmplY3RcIikge1xuICAgIHZhciBtb2J4JDEgPSB7IHNweTogc3B5LCBleHRyYXM6IHsgZ2V0RGVidWdOYW1lOiBnZXREZWJ1Z05hbWUgfSB9O1xuICAgIHZhciBtb2J4UmVhY3QgPSB7IHJlbmRlclJlcG9ydGVyOiByZW5kZXJSZXBvcnRlciwgY29tcG9uZW50QnlOb2RlUmVnaXN0ZXJ5OiBjb21wb25lbnRCeU5vZGVSZWdpc3RlcnksIHRyYWNrQ29tcG9uZW50czogdHJhY2tDb21wb25lbnRzIH07XG4gICAgX19NT0JYX0RFVlRPT0xTX0dMT0JBTF9IT09LX18uaW5qZWN0TW9ieFJlYWN0KG1vYnhSZWFjdCwgbW9ieCQxKTtcbn1cblxuZXhwb3J0IHsgcHJvcFR5cGVzLCBwcm9wVHlwZXMgYXMgUHJvcFR5cGVzLCBvbkVycm9yLCBvYnNlcnZlciwgT2JzZXJ2ZXIsIHJlbmRlclJlcG9ydGVyLCBjb21wb25lbnRCeU5vZGVSZWdpc3RlcnksIHRyYWNrQ29tcG9uZW50cywgdXNlU3RhdGljUmVuZGVyaW5nLCBQcm92aWRlciwgaW5qZWN0IH07XG4iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbi8qIGVzbGludCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBlbmhhbmNlciBmcm9tICcuL2VuaGFuY2VyJztcbmltcG9ydCB7IHByb3BUeXBlcywgZGVmYXVsdFByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5cbnZhciBDaXJjbGUgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoQ2lyY2xlLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDaXJjbGUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENpcmNsZSk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIENpcmNsZS5wcm90b3R5cGUuZ2V0UGF0aFN0eWxlcyA9IGZ1bmN0aW9uIGdldFBhdGhTdHlsZXMoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIHBlcmNlbnQgPSBfcHJvcHMucGVyY2VudCxcbiAgICAgICAgc3Ryb2tlV2lkdGggPSBfcHJvcHMuc3Ryb2tlV2lkdGgsXG4gICAgICAgIF9wcm9wcyRnYXBEZWdyZWUgPSBfcHJvcHMuZ2FwRGVncmVlLFxuICAgICAgICBnYXBEZWdyZWUgPSBfcHJvcHMkZ2FwRGVncmVlID09PSB1bmRlZmluZWQgPyAwIDogX3Byb3BzJGdhcERlZ3JlZSxcbiAgICAgICAgZ2FwUG9zaXRpb24gPSBfcHJvcHMuZ2FwUG9zaXRpb247XG5cbiAgICB2YXIgcmFkaXVzID0gNTAgLSBzdHJva2VXaWR0aCAvIDI7XG4gICAgdmFyIGJlZ2luUG9zaXRpb25YID0gMDtcbiAgICB2YXIgYmVnaW5Qb3NpdGlvblkgPSAtcmFkaXVzO1xuICAgIHZhciBlbmRQb3NpdGlvblggPSAwO1xuICAgIHZhciBlbmRQb3NpdGlvblkgPSAtMiAqIHJhZGl1cztcbiAgICBzd2l0Y2ggKGdhcFBvc2l0aW9uKSB7XG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgYmVnaW5Qb3NpdGlvblggPSAtcmFkaXVzO1xuICAgICAgICBiZWdpblBvc2l0aW9uWSA9IDA7XG4gICAgICAgIGVuZFBvc2l0aW9uWCA9IDIgKiByYWRpdXM7XG4gICAgICAgIGVuZFBvc2l0aW9uWSA9IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICBiZWdpblBvc2l0aW9uWCA9IHJhZGl1cztcbiAgICAgICAgYmVnaW5Qb3NpdGlvblkgPSAwO1xuICAgICAgICBlbmRQb3NpdGlvblggPSAtMiAqIHJhZGl1cztcbiAgICAgICAgZW5kUG9zaXRpb25ZID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICBiZWdpblBvc2l0aW9uWSA9IHJhZGl1cztcbiAgICAgICAgZW5kUG9zaXRpb25ZID0gMiAqIHJhZGl1cztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgICB2YXIgcGF0aFN0cmluZyA9ICdNIDUwLDUwIG0gJyArIGJlZ2luUG9zaXRpb25YICsgJywnICsgYmVnaW5Qb3NpdGlvblkgKyAnXFxuICAgICBhICcgKyByYWRpdXMgKyAnLCcgKyByYWRpdXMgKyAnIDAgMSAxICcgKyBlbmRQb3NpdGlvblggKyAnLCcgKyAtZW5kUG9zaXRpb25ZICsgJ1xcbiAgICAgYSAnICsgcmFkaXVzICsgJywnICsgcmFkaXVzICsgJyAwIDEgMSAnICsgLWVuZFBvc2l0aW9uWCArICcsJyArIGVuZFBvc2l0aW9uWTtcbiAgICB2YXIgbGVuID0gTWF0aC5QSSAqIDIgKiByYWRpdXM7XG4gICAgdmFyIHRyYWlsUGF0aFN0eWxlID0ge1xuICAgICAgc3Ryb2tlRGFzaGFycmF5OiBsZW4gLSBnYXBEZWdyZWUgKyAncHggJyArIGxlbiArICdweCcsXG4gICAgICBzdHJva2VEYXNob2Zmc2V0OiAnLScgKyBnYXBEZWdyZWUgLyAyICsgJ3B4JyxcbiAgICAgIHRyYW5zaXRpb246ICdzdHJva2UtZGFzaG9mZnNldCAuM3MgZWFzZSAwcywgc3Ryb2tlLWRhc2hhcnJheSAuM3MgZWFzZSAwcywgc3Ryb2tlIC4zcydcbiAgICB9O1xuICAgIHZhciBzdHJva2VQYXRoU3R5bGUgPSB7XG4gICAgICBzdHJva2VEYXNoYXJyYXk6IHBlcmNlbnQgLyAxMDAgKiAobGVuIC0gZ2FwRGVncmVlKSArICdweCAnICsgbGVuICsgJ3B4JyxcbiAgICAgIHN0cm9rZURhc2hvZmZzZXQ6ICctJyArIGdhcERlZ3JlZSAvIDIgKyAncHgnLFxuICAgICAgdHJhbnNpdGlvbjogJ3N0cm9rZS1kYXNob2Zmc2V0IC4zcyBlYXNlIDBzLCBzdHJva2UtZGFzaGFycmF5IC4zcyBlYXNlIDBzLCBzdHJva2UgLjNzLCBzdHJva2Utd2lkdGggLjA2cyBlYXNlIC4zcycgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIH07XG4gICAgcmV0dXJuIHsgcGF0aFN0cmluZzogcGF0aFN0cmluZywgdHJhaWxQYXRoU3R5bGU6IHRyYWlsUGF0aFN0eWxlLCBzdHJva2VQYXRoU3R5bGU6IHN0cm9rZVBhdGhTdHlsZSB9O1xuICB9O1xuXG4gIENpcmNsZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICBwcmVmaXhDbHMgPSBfcHJvcHMyLnByZWZpeENscyxcbiAgICAgICAgc3Ryb2tlV2lkdGggPSBfcHJvcHMyLnN0cm9rZVdpZHRoLFxuICAgICAgICB0cmFpbFdpZHRoID0gX3Byb3BzMi50cmFpbFdpZHRoLFxuICAgICAgICBzdHJva2VDb2xvciA9IF9wcm9wczIuc3Ryb2tlQ29sb3IsXG4gICAgICAgIHBlcmNlbnQgPSBfcHJvcHMyLnBlcmNlbnQsXG4gICAgICAgIHRyYWlsQ29sb3IgPSBfcHJvcHMyLnRyYWlsQ29sb3IsXG4gICAgICAgIHN0cm9rZUxpbmVjYXAgPSBfcHJvcHMyLnN0cm9rZUxpbmVjYXAsXG4gICAgICAgIHN0eWxlID0gX3Byb3BzMi5zdHlsZSxcbiAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzMi5jbGFzc05hbWUsXG4gICAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMyLCBbJ3ByZWZpeENscycsICdzdHJva2VXaWR0aCcsICd0cmFpbFdpZHRoJywgJ3N0cm9rZUNvbG9yJywgJ3BlcmNlbnQnLCAndHJhaWxDb2xvcicsICdzdHJva2VMaW5lY2FwJywgJ3N0eWxlJywgJ2NsYXNzTmFtZSddKTtcblxuICAgIHZhciBfZ2V0UGF0aFN0eWxlcyA9IHRoaXMuZ2V0UGF0aFN0eWxlcygpLFxuICAgICAgICBwYXRoU3RyaW5nID0gX2dldFBhdGhTdHlsZXMucGF0aFN0cmluZyxcbiAgICAgICAgdHJhaWxQYXRoU3R5bGUgPSBfZ2V0UGF0aFN0eWxlcy50cmFpbFBhdGhTdHlsZSxcbiAgICAgICAgc3Ryb2tlUGF0aFN0eWxlID0gX2dldFBhdGhTdHlsZXMuc3Ryb2tlUGF0aFN0eWxlO1xuXG4gICAgZGVsZXRlIHJlc3RQcm9wcy5wZXJjZW50O1xuICAgIGRlbGV0ZSByZXN0UHJvcHMuZ2FwRGVncmVlO1xuICAgIGRlbGV0ZSByZXN0UHJvcHMuZ2FwUG9zaXRpb247XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnc3ZnJyxcbiAgICAgIF9leHRlbmRzKHtcbiAgICAgICAgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWNpcmNsZSAnICsgY2xhc3NOYW1lLFxuICAgICAgICB2aWV3Qm94OiAnMCAwIDEwMCAxMDAnLFxuICAgICAgICBzdHlsZTogc3R5bGVcbiAgICAgIH0sIHJlc3RQcm9wcyksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdwYXRoJywge1xuICAgICAgICBjbGFzc05hbWU6IHByZWZpeENscyArICctY2lyY2xlLXRyYWlsJyxcbiAgICAgICAgZDogcGF0aFN0cmluZyxcbiAgICAgICAgc3Ryb2tlOiB0cmFpbENvbG9yLFxuICAgICAgICBzdHJva2VXaWR0aDogdHJhaWxXaWR0aCB8fCBzdHJva2VXaWR0aCxcbiAgICAgICAgZmlsbE9wYWNpdHk6ICcwJyxcbiAgICAgICAgc3R5bGU6IHRyYWlsUGF0aFN0eWxlXG4gICAgICB9KSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7XG4gICAgICAgIGNsYXNzTmFtZTogcHJlZml4Q2xzICsgJy1jaXJjbGUtcGF0aCcsXG4gICAgICAgIGQ6IHBhdGhTdHJpbmcsXG4gICAgICAgIHN0cm9rZUxpbmVjYXA6IHN0cm9rZUxpbmVjYXAsXG4gICAgICAgIHN0cm9rZTogc3Ryb2tlQ29sb3IsXG4gICAgICAgIHN0cm9rZVdpZHRoOiB0aGlzLnByb3BzLnBlcmNlbnQgPT09IDAgPyAwIDogc3Ryb2tlV2lkdGgsXG4gICAgICAgIGZpbGxPcGFjaXR5OiAnMCcsXG4gICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKHBhdGgpIHtcbiAgICAgICAgICBfdGhpczIucGF0aCA9IHBhdGg7XG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlOiBzdHJva2VQYXRoU3R5bGVcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gQ2lyY2xlO1xufShDb21wb25lbnQpO1xuXG5DaXJjbGUucHJvcFR5cGVzID0gX2V4dGVuZHMoe30sIHByb3BUeXBlcywge1xuICBnYXBQb3NpdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsndG9wJywgJ2JvdHRvbScsICdsZWZ0JywgJ3JpZ2h0J10pXG59KTtcblxuQ2lyY2xlLmRlZmF1bHRQcm9wcyA9IF9leHRlbmRzKHt9LCBkZWZhdWx0UHJvcHMsIHtcbiAgZ2FwUG9zaXRpb246ICd0b3AnXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZW5oYW5jZXIoQ2lyY2xlKTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZW5oYW5jZXIgZnJvbSAnLi9lbmhhbmNlcic7XG5pbXBvcnQgeyBwcm9wVHlwZXMsIGRlZmF1bHRQcm9wcyB9IGZyb20gJy4vdHlwZXMnO1xuXG52YXIgTGluZSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhMaW5lLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBMaW5lKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMaW5lKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgTGluZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIHBlcmNlbnQgPSBfcHJvcHMucGVyY2VudCxcbiAgICAgICAgcHJlZml4Q2xzID0gX3Byb3BzLnByZWZpeENscyxcbiAgICAgICAgc3Ryb2tlQ29sb3IgPSBfcHJvcHMuc3Ryb2tlQ29sb3IsXG4gICAgICAgIHN0cm9rZUxpbmVjYXAgPSBfcHJvcHMuc3Ryb2tlTGluZWNhcCxcbiAgICAgICAgc3Ryb2tlV2lkdGggPSBfcHJvcHMuc3Ryb2tlV2lkdGgsXG4gICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlLFxuICAgICAgICB0cmFpbENvbG9yID0gX3Byb3BzLnRyYWlsQ29sb3IsXG4gICAgICAgIHRyYWlsV2lkdGggPSBfcHJvcHMudHJhaWxXaWR0aCxcbiAgICAgICAgcmVzdFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydjbGFzc05hbWUnLCAncGVyY2VudCcsICdwcmVmaXhDbHMnLCAnc3Ryb2tlQ29sb3InLCAnc3Ryb2tlTGluZWNhcCcsICdzdHJva2VXaWR0aCcsICdzdHlsZScsICd0cmFpbENvbG9yJywgJ3RyYWlsV2lkdGgnXSk7XG5cbiAgICBkZWxldGUgcmVzdFByb3BzLmdhcFBvc2l0aW9uO1xuXG4gICAgdmFyIHBhdGhTdHlsZSA9IHtcbiAgICAgIHN0cm9rZURhc2hhcnJheTogJzEwMHB4LCAxMDBweCcsXG4gICAgICBzdHJva2VEYXNob2Zmc2V0OiAxMDAgLSBwZXJjZW50ICsgJ3B4JyxcbiAgICAgIHRyYW5zaXRpb246ICdzdHJva2UtZGFzaG9mZnNldCAwLjNzIGVhc2UgMHMsIHN0cm9rZSAwLjNzIGxpbmVhcidcbiAgICB9O1xuXG4gICAgdmFyIGNlbnRlciA9IHN0cm9rZVdpZHRoIC8gMjtcbiAgICB2YXIgcmlnaHQgPSAxMDAgLSBzdHJva2VXaWR0aCAvIDI7XG4gICAgdmFyIHBhdGhTdHJpbmcgPSAnTSAnICsgKHN0cm9rZUxpbmVjYXAgPT09ICdyb3VuZCcgPyBjZW50ZXIgOiAwKSArICcsJyArIGNlbnRlciArICdcXG4gICAgICAgICAgIEwgJyArIChzdHJva2VMaW5lY2FwID09PSAncm91bmQnID8gcmlnaHQgOiAxMDApICsgJywnICsgY2VudGVyO1xuICAgIHZhciB2aWV3Qm94U3RyaW5nID0gJzAgMCAxMDAgJyArIHN0cm9rZVdpZHRoO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnc3ZnJyxcbiAgICAgIF9leHRlbmRzKHtcbiAgICAgICAgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWxpbmUgJyArIGNsYXNzTmFtZSxcbiAgICAgICAgdmlld0JveDogdmlld0JveFN0cmluZyxcbiAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbzogJ25vbmUnLFxuICAgICAgICBzdHlsZTogc3R5bGVcbiAgICAgIH0sIHJlc3RQcm9wcyksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdwYXRoJywge1xuICAgICAgICBjbGFzc05hbWU6IHByZWZpeENscyArICctbGluZS10cmFpbCcsXG4gICAgICAgIGQ6IHBhdGhTdHJpbmcsXG4gICAgICAgIHN0cm9rZUxpbmVjYXA6IHN0cm9rZUxpbmVjYXAsXG4gICAgICAgIHN0cm9rZTogdHJhaWxDb2xvcixcbiAgICAgICAgc3Ryb2tlV2lkdGg6IHRyYWlsV2lkdGggfHwgc3Ryb2tlV2lkdGgsXG4gICAgICAgIGZpbGxPcGFjaXR5OiAnMCdcbiAgICAgIH0pLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgncGF0aCcsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBwcmVmaXhDbHMgKyAnLWxpbmUtcGF0aCcsXG4gICAgICAgIGQ6IHBhdGhTdHJpbmcsXG4gICAgICAgIHN0cm9rZUxpbmVjYXA6IHN0cm9rZUxpbmVjYXAsXG4gICAgICAgIHN0cm9rZTogc3Ryb2tlQ29sb3IsXG4gICAgICAgIHN0cm9rZVdpZHRoOiBzdHJva2VXaWR0aCxcbiAgICAgICAgZmlsbE9wYWNpdHk6ICcwJyxcbiAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYocGF0aCkge1xuICAgICAgICAgIF90aGlzMi5wYXRoID0gcGF0aDtcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGU6IHBhdGhTdHlsZVxuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBMaW5lO1xufShDb21wb25lbnQpO1xuXG5MaW5lLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuTGluZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbmV4cG9ydCBkZWZhdWx0IGVuaGFuY2VyKExpbmUpOyIsImltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG52YXIgZW5oYW5jZXIgPSBmdW5jdGlvbiBlbmhhbmNlcihXcmFwcGVkQ29tcG9uZW50KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoX1dyYXBwZWRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoUHJvZ3Jlc3MsIF9XcmFwcGVkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFByb2dyZXNzKCkge1xuICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFByb2dyZXNzKTtcblxuICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9XcmFwcGVkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIFByb2dyZXNzLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICBpZiAoIXRoaXMucGF0aCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgcGF0aFN0eWxlID0gdGhpcy5wYXRoLnN0eWxlO1xuICAgICAgcGF0aFN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcuM3MsIC4zcywgLjNzLCAuMDZzJztcbiAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgaWYgKHRoaXMucHJldlRpbWVTdGFtcCAmJiBub3cgLSB0aGlzLnByZXZUaW1lU3RhbXAgPCAxMDApIHtcbiAgICAgICAgcGF0aFN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcwcywgMHMnO1xuICAgICAgfVxuICAgICAgdGhpcy5wcmV2VGltZVN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICB9O1xuXG4gICAgUHJvZ3Jlc3MucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBfV3JhcHBlZENvbXBvbmVudC5wcm90b3R5cGUucmVuZGVyLmNhbGwodGhpcyk7XG4gICAgfTtcblxuICAgIHJldHVybiBQcm9ncmVzcztcbiAgfShXcmFwcGVkQ29tcG9uZW50KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVuaGFuY2VyOyIsImltcG9ydCBMaW5lIGZyb20gJy4vTGluZSc7XG5pbXBvcnQgQ2lyY2xlIGZyb20gJy4vQ2lyY2xlJztcblxuZXhwb3J0IHsgTGluZSwgQ2lyY2xlIH07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgTGluZTogTGluZSxcbiAgQ2lyY2xlOiBDaXJjbGVcbn07IiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IHZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogJycsXG4gIHBlcmNlbnQ6IDAsXG4gIHByZWZpeENsczogJ3JjLXByb2dyZXNzJyxcbiAgc3Ryb2tlQ29sb3I6ICcjMmRiN2Y1JyxcbiAgc3Ryb2tlTGluZWNhcDogJ3JvdW5kJyxcbiAgc3Ryb2tlV2lkdGg6IDEsXG4gIHN0eWxlOiB7fSxcbiAgdHJhaWxDb2xvcjogJyNEOUQ5RDknLFxuICB0cmFpbFdpZHRoOiAxXG59O1xuXG5leHBvcnQgdmFyIHByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwZXJjZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3Ryb2tlQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0cm9rZUxpbmVjYXA6IFByb3BUeXBlcy5vbmVPZihbJ2J1dHQnLCAncm91bmQnLCAnc3F1YXJlJ10pLFxuICBzdHJva2VXaWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgdHJhaWxDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgdHJhaWxXaWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pXG59OyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcyc7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuLyogZXNsaW50IHJlYWN0L25vLWlzLW1vdW50ZWQ6MCByZWFjdC9zb3J0LWNvbXA6MCAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IGRlZmF1bHRSZXF1ZXN0IGZyb20gJy4vcmVxdWVzdCc7XG5pbXBvcnQgZ2V0VWlkIGZyb20gJy4vdWlkJztcbmltcG9ydCBhdHRyQWNjZXB0IGZyb20gJy4vYXR0ci1hY2NlcHQnO1xuXG52YXIgQWpheFVwbG9hZGVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEFqYXhVcGxvYWRlciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQWpheFVwbG9hZGVyKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBamF4VXBsb2FkZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX3JlZiA9IEFqYXhVcGxvYWRlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEFqYXhVcGxvYWRlcikpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0geyB1aWQ6IGdldFVpZCgpIH0sIF90aGlzLnJlcXMgPSB7fSwgX3RoaXMub25DaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGZpbGVzID0gZS50YXJnZXQuZmlsZXM7XG4gICAgICBfdGhpcy51cGxvYWRGaWxlcyhmaWxlcyk7XG4gICAgICBfdGhpcy5yZXNldCgpO1xuICAgIH0sIF90aGlzLm9uQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZWwgPSBfdGhpcy5maWxlSW5wdXQ7XG4gICAgICBpZiAoIWVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGVsLmNsaWNrKCk7XG4gICAgfSwgX3RoaXMub25LZXlEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICBfdGhpcy5vbkNsaWNrKCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMub25GaWxlRHJvcCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZS50eXBlID09PSAnZHJhZ292ZXInKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGZpbGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZS5kYXRhVHJhbnNmZXIuZmlsZXMpLmZpbHRlcihmdW5jdGlvbiAoZmlsZSkge1xuICAgICAgICByZXR1cm4gYXR0ckFjY2VwdChmaWxlLCBfdGhpcy5wcm9wcy5hY2NlcHQpO1xuICAgICAgfSk7XG4gICAgICBfdGhpcy51cGxvYWRGaWxlcyhmaWxlcyk7XG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9LCBfdGhpcy5zYXZlRmlsZUlucHV0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIF90aGlzLmZpbGVJbnB1dCA9IG5vZGU7XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQWpheFVwbG9hZGVyLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICB0aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuYWJvcnQoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1cGxvYWRGaWxlcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwbG9hZEZpbGVzKGZpbGVzKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIHBvc3RGaWxlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZpbGVzKTtcbiAgICAgIHBvc3RGaWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChmaWxlKSB7XG4gICAgICAgIGZpbGUudWlkID0gZ2V0VWlkKCk7XG4gICAgICAgIF90aGlzMi51cGxvYWQoZmlsZSwgcG9zdEZpbGVzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3VwbG9hZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwbG9hZChmaWxlLCBmaWxlTGlzdCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGlmICghcHJvcHMuYmVmb3JlVXBsb2FkKSB7XG4gICAgICAgIC8vIGFsd2F5cyBhc3luYyBpbiBjYXNlIHVzZSByZWFjdCBzdGF0ZSB0byBrZWVwIGZpbGVMaXN0XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMzLnBvc3QoZmlsZSk7XG4gICAgICAgIH0sIDApO1xuICAgICAgfVxuXG4gICAgICB2YXIgYmVmb3JlID0gcHJvcHMuYmVmb3JlVXBsb2FkKGZpbGUsIGZpbGVMaXN0KTtcbiAgICAgIGlmIChiZWZvcmUgJiYgYmVmb3JlLnRoZW4pIHtcbiAgICAgICAgYmVmb3JlLnRoZW4oZnVuY3Rpb24gKHByb2Nlc3NlZEZpbGUpIHtcbiAgICAgICAgICB2YXIgcHJvY2Vzc2VkRmlsZVR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocHJvY2Vzc2VkRmlsZSk7XG4gICAgICAgICAgaWYgKHByb2Nlc3NlZEZpbGVUeXBlID09PSAnW29iamVjdCBGaWxlXScgfHwgcHJvY2Vzc2VkRmlsZVR5cGUgPT09ICdbb2JqZWN0IEJsb2JdJykge1xuICAgICAgICAgICAgX3RoaXMzLnBvc3QocHJvY2Vzc2VkRmlsZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzMy5wb3N0KGZpbGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlbJ2NhdGNoJ10oZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBjb25zb2xlICYmIGNvbnNvbGUubG9nKGUpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChiZWZvcmUgIT09IGZhbHNlKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczMucG9zdChmaWxlKTtcbiAgICAgICAgfSwgMCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncG9zdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBvc3QoZmlsZSkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIGlmICghdGhpcy5faXNNb3VudGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgZGF0YSA9IHByb3BzLmRhdGE7XG4gICAgICB2YXIgb25TdGFydCA9IHByb3BzLm9uU3RhcnQsXG4gICAgICAgICAgb25Qcm9ncmVzcyA9IHByb3BzLm9uUHJvZ3Jlc3M7XG5cbiAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBkYXRhID0gZGF0YShmaWxlKTtcbiAgICAgIH1cbiAgICAgIHZhciB1aWQgPSBmaWxlLnVpZDtcblxuICAgICAgdmFyIHJlcXVlc3QgPSBwcm9wcy5jdXN0b21SZXF1ZXN0IHx8IGRlZmF1bHRSZXF1ZXN0O1xuICAgICAgdGhpcy5yZXFzW3VpZF0gPSByZXF1ZXN0KHtcbiAgICAgICAgYWN0aW9uOiBwcm9wcy5hY3Rpb24sXG4gICAgICAgIGZpbGVuYW1lOiBwcm9wcy5uYW1lLFxuICAgICAgICBmaWxlOiBmaWxlLFxuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBoZWFkZXJzOiBwcm9wcy5oZWFkZXJzLFxuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHByb3BzLndpdGhDcmVkZW50aWFscyxcbiAgICAgICAgb25Qcm9ncmVzczogb25Qcm9ncmVzcyA/IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgb25Qcm9ncmVzcyhlLCBmaWxlKTtcbiAgICAgICAgfSA6IG51bGwsXG4gICAgICAgIG9uU3VjY2VzczogZnVuY3Rpb24gb25TdWNjZXNzKHJldCwgeGhyKSB7XG4gICAgICAgICAgZGVsZXRlIF90aGlzNC5yZXFzW3VpZF07XG4gICAgICAgICAgcHJvcHMub25TdWNjZXNzKHJldCwgZmlsZSwgeGhyKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FcnJvcjogZnVuY3Rpb24gb25FcnJvcihlcnIsIHJldCkge1xuICAgICAgICAgIGRlbGV0ZSBfdGhpczQucmVxc1t1aWRdO1xuICAgICAgICAgIHByb3BzLm9uRXJyb3IoZXJyLCByZXQsIGZpbGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIG9uU3RhcnQoZmlsZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVzZXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB1aWQ6IGdldFVpZCgpXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdhYm9ydCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFib3J0KGZpbGUpIHtcbiAgICAgIHZhciByZXFzID0gdGhpcy5yZXFzO1xuXG4gICAgICBpZiAoZmlsZSkge1xuICAgICAgICB2YXIgdWlkID0gZmlsZTtcbiAgICAgICAgaWYgKGZpbGUgJiYgZmlsZS51aWQpIHtcbiAgICAgICAgICB1aWQgPSBmaWxlLnVpZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVxc1t1aWRdKSB7XG4gICAgICAgICAgcmVxc1t1aWRdLmFib3J0KCk7XG4gICAgICAgICAgZGVsZXRlIHJlcXNbdWlkXTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmtleXMocmVxcykuZm9yRWFjaChmdW5jdGlvbiAodWlkKSB7XG4gICAgICAgICAgaWYgKHJlcXNbdWlkXSkge1xuICAgICAgICAgICAgcmVxc1t1aWRdLmFib3J0KCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGVsZXRlIHJlcXNbdWlkXTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBUYWcgPSBfcHJvcHMuY29tcG9uZW50LFxuICAgICAgICAgIHByZWZpeENscyA9IF9wcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICBkaXNhYmxlZCA9IF9wcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wcy5zdHlsZSxcbiAgICAgICAgICBtdWx0aXBsZSA9IF9wcm9wcy5tdWx0aXBsZSxcbiAgICAgICAgICBhY2NlcHQgPSBfcHJvcHMuYWNjZXB0LFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuO1xuXG4gICAgICB2YXIgY2xzID0gY2xhc3NOYW1lcygoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMsIHRydWUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIHByZWZpeENscyArICctZGlzYWJsZWQnLCBkaXNhYmxlZCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgY2xhc3NOYW1lLCBjbGFzc05hbWUpLCBfY2xhc3NOYW1lcykpO1xuICAgICAgdmFyIGV2ZW50cyA9IGRpc2FibGVkID8ge30gOiB7XG4gICAgICAgIG9uQ2xpY2s6IHRoaXMub25DbGljayxcbiAgICAgICAgb25LZXlEb3duOiB0aGlzLm9uS2V5RG93bixcbiAgICAgICAgb25Ecm9wOiB0aGlzLm9uRmlsZURyb3AsXG4gICAgICAgIG9uRHJhZ092ZXI6IHRoaXMub25GaWxlRHJvcCxcbiAgICAgICAgdGFiSW5kZXg6ICcwJ1xuICAgICAgfTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBUYWcsXG4gICAgICAgIF9leHRlbmRzKHt9LCBldmVudHMsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNscyxcbiAgICAgICAgICByb2xlOiAnYnV0dG9uJyxcbiAgICAgICAgICBzdHlsZTogc3R5bGVcbiAgICAgICAgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jywge1xuICAgICAgICAgIHR5cGU6ICdmaWxlJyxcbiAgICAgICAgICByZWY6IHRoaXMuc2F2ZUZpbGVJbnB1dCxcbiAgICAgICAgICBrZXk6IHRoaXMuc3RhdGUudWlkLFxuICAgICAgICAgIHN0eWxlOiB7IGRpc3BsYXk6ICdub25lJyB9LFxuICAgICAgICAgIGFjY2VwdDogYWNjZXB0LFxuICAgICAgICAgIG11bHRpcGxlOiBtdWx0aXBsZSxcbiAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZVxuICAgICAgICB9KSxcbiAgICAgICAgY2hpbGRyZW5cbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEFqYXhVcGxvYWRlcjtcbn0oQ29tcG9uZW50KTtcblxuQWpheFVwbG9hZGVyLnByb3BUeXBlcyA9IHtcbiAgY29tcG9uZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG11bHRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBhY2NlcHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICBvblN0YXJ0OiBQcm9wVHlwZXMuZnVuYyxcbiAgZGF0YTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmZ1bmNdKSxcbiAgaGVhZGVyczogUHJvcFR5cGVzLm9iamVjdCxcbiAgYmVmb3JlVXBsb2FkOiBQcm9wVHlwZXMuZnVuYyxcbiAgY3VzdG9tUmVxdWVzdDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uUHJvZ3Jlc3M6IFByb3BUeXBlcy5mdW5jLFxuICB3aXRoQ3JlZGVudGlhbHM6IFByb3BUeXBlcy5ib29sXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IEFqYXhVcGxvYWRlcjsiLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbi8qIGVzbGludCByZWFjdC9zb3J0LWNvbXA6MCAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IGdldFVpZCBmcm9tICcuL3VpZCc7XG5pbXBvcnQgd2FybmluZyBmcm9tICd3YXJuaW5nJztcblxudmFyIElGUkFNRV9TVFlMRSA9IHtcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHRvcDogMCxcbiAgb3BhY2l0eTogMCxcbiAgZmlsdGVyOiAnYWxwaGEob3BhY2l0eT0wKScsXG4gIGxlZnQ6IDAsXG4gIHpJbmRleDogOTk5OVxufTtcblxuLy8gZGlmZXJlbnQgZnJvbSBBamF4VXBsb2FkLCBjYW4gb25seSB1cGxvYWQgb24gYXQgb25lIHRpbWUsIHNlcmlhbCBzZXJpb3VzbHlcblxudmFyIElmcmFtZVVwbG9hZGVyID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKElmcmFtZVVwbG9hZGVyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBJZnJhbWVVcGxvYWRlcigpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSWZyYW1lVXBsb2FkZXIpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoX3JlZiA9IElmcmFtZVVwbG9hZGVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoSWZyYW1lVXBsb2FkZXIpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHsgdXBsb2FkaW5nOiBmYWxzZSB9LCBfdGhpcy5maWxlID0ge30sIF90aGlzLm9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghX3RoaXMuc3RhdGUudXBsb2FkaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBfdGhpczIgPSBfdGhpcyxcbiAgICAgICAgICBwcm9wcyA9IF90aGlzMi5wcm9wcyxcbiAgICAgICAgICBmaWxlID0gX3RoaXMyLmZpbGU7XG5cbiAgICAgIHZhciByZXNwb25zZSA9IHZvaWQgMDtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBkb2MgPSBfdGhpcy5nZXRJZnJhbWVEb2N1bWVudCgpO1xuICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcbiAgICAgICAgaWYgKHNjcmlwdCAmJiBzY3JpcHQucGFyZW50Tm9kZSA9PT0gZG9jLmJvZHkpIHtcbiAgICAgICAgICBkb2MuYm9keS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICB9XG4gICAgICAgIHJlc3BvbnNlID0gZG9jLmJvZHkuaW5uZXJIVE1MO1xuICAgICAgICBwcm9wcy5vblN1Y2Nlc3MocmVzcG9uc2UsIGZpbGUpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHdhcm5pbmcoZmFsc2UsICdjcm9zcyBkb21haW4gZXJyb3IgZm9yIFVwbG9hZC4gTWF5YmUgc2VydmVyIHNob3VsZCByZXR1cm4gZG9jdW1lbnQuZG9tYWluIHNjcmlwdC4gc2VlIE5vdGUgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vcmVhY3QtY29tcG9uZW50L3VwbG9hZCcpO1xuICAgICAgICByZXNwb25zZSA9ICdjcm9zcy1kb21haW4nO1xuICAgICAgICBwcm9wcy5vbkVycm9yKGVyciwgbnVsbCwgZmlsZSk7XG4gICAgICB9XG4gICAgICBfdGhpcy5lbmRVcGxvYWQoKTtcbiAgICB9LCBfdGhpcy5vbkNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0YXJnZXQgPSBfdGhpcy5nZXRGb3JtSW5wdXROb2RlKCk7XG4gICAgICAvLyBpZTgvOSBkb24ndCBzdXBwb3J0IEZpbGVMaXN0IE9iamVjdFxuICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMjgzMDA1OC9pZTgtaW5wdXQtdHlwZS1maWxlLWdldC1maWxlc1xuICAgICAgdmFyIGZpbGUgPSBfdGhpcy5maWxlID0ge1xuICAgICAgICB1aWQ6IGdldFVpZCgpLFxuICAgICAgICBuYW1lOiB0YXJnZXQudmFsdWVcbiAgICAgIH07XG4gICAgICBfdGhpcy5zdGFydFVwbG9hZCgpO1xuICAgICAgdmFyIF90aGlzMyA9IF90aGlzLFxuICAgICAgICAgIHByb3BzID0gX3RoaXMzLnByb3BzO1xuXG4gICAgICBpZiAoIXByb3BzLmJlZm9yZVVwbG9hZCkge1xuICAgICAgICByZXR1cm4gX3RoaXMucG9zdChmaWxlKTtcbiAgICAgIH1cbiAgICAgIHZhciBiZWZvcmUgPSBwcm9wcy5iZWZvcmVVcGxvYWQoZmlsZSk7XG4gICAgICBpZiAoYmVmb3JlICYmIGJlZm9yZS50aGVuKSB7XG4gICAgICAgIGJlZm9yZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5wb3N0KGZpbGUpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMuZW5kVXBsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChiZWZvcmUgIT09IGZhbHNlKSB7XG4gICAgICAgIF90aGlzLnBvc3QoZmlsZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5lbmRVcGxvYWQoKTtcbiAgICAgIH1cbiAgICB9LCBfdGhpcy5zYXZlSWZyYW1lID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIF90aGlzLmlmcmFtZSA9IG5vZGU7XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSWZyYW1lVXBsb2FkZXIsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMudXBkYXRlSWZyYW1lV0goKTtcbiAgICAgIHRoaXMuaW5pdElmcmFtZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgIHRoaXMudXBkYXRlSWZyYW1lV0goKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRJZnJhbWVOb2RlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SWZyYW1lTm9kZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlmcmFtZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRJZnJhbWVEb2N1bWVudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldElmcmFtZURvY3VtZW50KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0SWZyYW1lTm9kZSgpLmNvbnRlbnREb2N1bWVudDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRGb3JtTm9kZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEZvcm1Ob2RlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0SWZyYW1lRG9jdW1lbnQoKS5nZXRFbGVtZW50QnlJZCgnZm9ybScpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEZvcm1JbnB1dE5vZGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGb3JtSW5wdXROb2RlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0SWZyYW1lRG9jdW1lbnQoKS5nZXRFbGVtZW50QnlJZCgnaW5wdXQnKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRGb3JtRGF0YU5vZGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGb3JtRGF0YU5vZGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRJZnJhbWVEb2N1bWVudCgpLmdldEVsZW1lbnRCeUlkKCdkYXRhJyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0RmlsZUZvck11bHRpcGxlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RmlsZUZvck11bHRpcGxlKGZpbGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLm11bHRpcGxlID8gW2ZpbGVdIDogZmlsZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRJZnJhbWVIVE1MJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SWZyYW1lSFRNTChkb21haW4pIHtcbiAgICAgIHZhciBkb21haW5TY3JpcHQgPSAnJztcbiAgICAgIHZhciBkb21haW5JbnB1dCA9ICcnO1xuICAgICAgaWYgKGRvbWFpbikge1xuICAgICAgICB2YXIgc2NyaXB0ID0gJ3NjcmlwdCc7XG4gICAgICAgIGRvbWFpblNjcmlwdCA9ICc8JyArIHNjcmlwdCArICc+ZG9jdW1lbnQuZG9tYWluPVwiJyArIGRvbWFpbiArICdcIjs8LycgKyBzY3JpcHQgKyAnPic7XG4gICAgICAgIGRvbWFpbklucHV0ID0gJzxpbnB1dCBuYW1lPVwiX2RvY3VtZW50RG9tYWluXCIgdmFsdWU9XCInICsgZG9tYWluICsgJ1wiIC8+JztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnXFxuICAgIDwhRE9DVFlQRSBodG1sPlxcbiAgICA8aHRtbD5cXG4gICAgPGhlYWQ+XFxuICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XFxuICAgIDxzdHlsZT5cXG4gICAgYm9keSxodG1sIHtwYWRkaW5nOjA7bWFyZ2luOjA7Ym9yZGVyOjA7b3ZlcmZsb3c6aGlkZGVuO31cXG4gICAgPC9zdHlsZT5cXG4gICAgJyArIGRvbWFpblNjcmlwdCArICdcXG4gICAgPC9oZWFkPlxcbiAgICA8Ym9keT5cXG4gICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiXFxuICAgIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcXG4gICAgYWN0aW9uPVwiJyArIHRoaXMucHJvcHMuYWN0aW9uICsgJ1wiIGlkPVwiZm9ybVwiXFxuICAgIHN0eWxlPVwiZGlzcGxheTpibG9jaztoZWlnaHQ6OTk5OXB4O3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbjtcIj5cXG4gICAgPGlucHV0IGlkPVwiaW5wdXRcIiB0eXBlPVwiZmlsZVwiXFxuICAgICBuYW1lPVwiJyArIHRoaXMucHJvcHMubmFtZSArICdcIlxcbiAgICAgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2hlaWdodDo5OTk5cHg7Zm9udC1zaXplOjk5OTlweDtjdXJzb3I6cG9pbnRlcjtcIi8+XFxuICAgICcgKyBkb21haW5JbnB1dCArICdcXG4gICAgPHNwYW4gaWQ9XCJkYXRhXCI+PC9zcGFuPlxcbiAgICA8L2Zvcm0+XFxuICAgIDwvYm9keT5cXG4gICAgPC9odG1sPlxcbiAgICAnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2luaXRJZnJhbWVTcmMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0SWZyYW1lU3JjKCkge1xuICAgICAgaWYgKHRoaXMuZG9tYWluKSB7XG4gICAgICAgIHRoaXMuZ2V0SWZyYW1lTm9kZSgpLnNyYyA9ICdqYXZhc2NyaXB0OnZvaWQoKGZ1bmN0aW9uKCl7XFxuICAgICAgICB2YXIgZCA9IGRvY3VtZW50O1xcbiAgICAgICAgZC5vcGVuKCk7XFxuICAgICAgICBkLmRvbWFpbj1cXCcnICsgdGhpcy5kb21haW4gKyAnXFwnO1xcbiAgICAgICAgZC53cml0ZShcXCdcXCcpO1xcbiAgICAgICAgZC5jbG9zZSgpO1xcbiAgICAgIH0pKCkpJztcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpbml0SWZyYW1lJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5pdElmcmFtZSgpIHtcbiAgICAgIHZhciBpZnJhbWVOb2RlID0gdGhpcy5nZXRJZnJhbWVOb2RlKCk7XG4gICAgICB2YXIgd2luID0gaWZyYW1lTm9kZS5jb250ZW50V2luZG93O1xuICAgICAgdmFyIGRvYyA9IHZvaWQgMDtcbiAgICAgIHRoaXMuZG9tYWluID0gdGhpcy5kb21haW4gfHwgJyc7XG4gICAgICB0aGlzLmluaXRJZnJhbWVTcmMoKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRvYyA9IHdpbi5kb2N1bWVudDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhpcy5kb21haW4gPSBkb2N1bWVudC5kb21haW47XG4gICAgICAgIHRoaXMuaW5pdElmcmFtZVNyYygpO1xuICAgICAgICB3aW4gPSBpZnJhbWVOb2RlLmNvbnRlbnRXaW5kb3c7XG4gICAgICAgIGRvYyA9IHdpbi5kb2N1bWVudDtcbiAgICAgIH1cbiAgICAgIGRvYy5vcGVuKCd0ZXh0L2h0bWwnLCAncmVwbGFjZScpO1xuICAgICAgZG9jLndyaXRlKHRoaXMuZ2V0SWZyYW1lSFRNTCh0aGlzLmRvbWFpbikpO1xuICAgICAgZG9jLmNsb3NlKCk7XG4gICAgICB0aGlzLmdldEZvcm1JbnB1dE5vZGUoKS5vbmNoYW5nZSA9IHRoaXMub25DaGFuZ2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZW5kVXBsb2FkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW5kVXBsb2FkKCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUudXBsb2FkaW5nKSB7XG4gICAgICAgIHRoaXMuZmlsZSA9IHt9O1xuICAgICAgICAvLyBoYWNrIGF2b2lkIGJhdGNoXG4gICAgICAgIHRoaXMuc3RhdGUudXBsb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHVwbG9hZGluZzogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaW5pdElmcmFtZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3N0YXJ0VXBsb2FkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnRVcGxvYWQoKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUudXBsb2FkaW5nKSB7XG4gICAgICAgIHRoaXMuc3RhdGUudXBsb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdXBsb2FkaW5nOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3VwZGF0ZUlmcmFtZVdIJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlSWZyYW1lV0goKSB7XG4gICAgICB2YXIgcm9vdE5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICAgIHZhciBpZnJhbWVOb2RlID0gdGhpcy5nZXRJZnJhbWVOb2RlKCk7XG4gICAgICBpZnJhbWVOb2RlLnN0eWxlLmhlaWdodCA9IHJvb3ROb2RlLm9mZnNldEhlaWdodCArICdweCc7XG4gICAgICBpZnJhbWVOb2RlLnN0eWxlLndpZHRoID0gcm9vdE5vZGUub2Zmc2V0V2lkdGggKyAncHgnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Fib3J0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWJvcnQoZmlsZSkge1xuICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgdmFyIHVpZCA9IGZpbGU7XG4gICAgICAgIGlmIChmaWxlICYmIGZpbGUudWlkKSB7XG4gICAgICAgICAgdWlkID0gZmlsZS51aWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVpZCA9PT0gdGhpcy5maWxlLnVpZCkge1xuICAgICAgICAgIHRoaXMuZW5kVXBsb2FkKCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZW5kVXBsb2FkKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncG9zdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHBvc3QoZmlsZSkge1xuICAgICAgdmFyIGZvcm1Ob2RlID0gdGhpcy5nZXRGb3JtTm9kZSgpO1xuICAgICAgdmFyIGRhdGFTcGFuID0gdGhpcy5nZXRGb3JtRGF0YU5vZGUoKTtcbiAgICAgIHZhciBkYXRhID0gdGhpcy5wcm9wcy5kYXRhO1xuICAgICAgdmFyIG9uU3RhcnQgPSB0aGlzLnByb3BzLm9uU3RhcnQ7XG5cbiAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBkYXRhID0gZGF0YShmaWxlKTtcbiAgICAgIH1cbiAgICAgIHZhciBpbnB1dHMgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBrZXkpO1xuICAgICAgICAgIGlucHV0LnZhbHVlID0gZGF0YVtrZXldO1xuICAgICAgICAgIGlucHV0cy5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGRhdGFTcGFuLmFwcGVuZENoaWxkKGlucHV0cyk7XG4gICAgICBmb3JtTm9kZS5zdWJtaXQoKTtcbiAgICAgIGRhdGFTcGFuLmlubmVySFRNTCA9ICcnO1xuICAgICAgb25TdGFydChmaWxlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIFRhZyA9IF9wcm9wcy5jb21wb25lbnQsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICBwcmVmaXhDbHMgPSBfcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIHN0eWxlID0gX3Byb3BzLnN0eWxlO1xuXG4gICAgICB2YXIgaWZyYW1lU3R5bGUgPSBfZXh0ZW5kcyh7fSwgSUZSQU1FX1NUWUxFLCB7XG4gICAgICAgIGRpc3BsYXk6IHRoaXMuc3RhdGUudXBsb2FkaW5nIHx8IGRpc2FibGVkID8gJ25vbmUnIDogJydcbiAgICAgIH0pO1xuICAgICAgdmFyIGNscyA9IGNsYXNzTmFtZXMoKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzLCB0cnVlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBwcmVmaXhDbHMgKyAnLWRpc2FibGVkJywgZGlzYWJsZWQpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIGNsYXNzTmFtZSwgY2xhc3NOYW1lKSwgX2NsYXNzTmFtZXMpKTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBUYWcsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNscyxcbiAgICAgICAgICBzdHlsZTogX2V4dGVuZHMoeyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgekluZGV4OiAwIH0sIHN0eWxlKVxuICAgICAgICB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnLCB7XG4gICAgICAgICAgcmVmOiB0aGlzLnNhdmVJZnJhbWUsXG4gICAgICAgICAgb25Mb2FkOiB0aGlzLm9uTG9hZCxcbiAgICAgICAgICBzdHlsZTogaWZyYW1lU3R5bGVcbiAgICAgICAgfSksXG4gICAgICAgIGNoaWxkcmVuXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBJZnJhbWVVcGxvYWRlcjtcbn0oQ29tcG9uZW50KTtcblxuSWZyYW1lVXBsb2FkZXIucHJvcFR5cGVzID0ge1xuICBjb21wb25lbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhY2NlcHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uU3RhcnQ6IFByb3BUeXBlcy5mdW5jLFxuICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICBkYXRhOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuZnVuY10pLFxuICBhY3Rpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgSWZyYW1lVXBsb2FkZXI7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBBamF4VXBsb2FkIGZyb20gJy4vQWpheFVwbG9hZGVyJztcbmltcG9ydCBJZnJhbWVVcGxvYWQgZnJvbSAnLi9JZnJhbWVVcGxvYWRlcic7XG5cbmZ1bmN0aW9uIGVtcHR5KCkge31cblxudmFyIFVwbG9hZCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhVcGxvYWQsIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFVwbG9hZCgpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVXBsb2FkKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBVcGxvYWQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihVcGxvYWQpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIENvbXBvbmVudDogbnVsbFxuICAgIH0sIF90aGlzLnNhdmVVcGxvYWRlciA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBfdGhpcy51cGxvYWRlciA9IG5vZGU7XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVXBsb2FkLCBbe1xuICAgIGtleTogJ2NvbXBvbmVudERpZE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5zdXBwb3J0U2VydmVyUmVuZGVyKSB7XG4gICAgICAgIC8qIGVzbGludCByZWFjdC9uby1kaWQtbW91bnQtc2V0LXN0YXRlOjAgKi9cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgQ29tcG9uZW50OiB0aGlzLmdldENvbXBvbmVudCgpXG4gICAgICAgIH0sIHRoaXMucHJvcHMub25SZWFkeSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q29tcG9uZW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29tcG9uZW50KCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBGaWxlICE9PSAndW5kZWZpbmVkJyA/IEFqYXhVcGxvYWQgOiBJZnJhbWVVcGxvYWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYWJvcnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhYm9ydChmaWxlKSB7XG4gICAgICB0aGlzLnVwbG9hZGVyLmFib3J0KGZpbGUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnN1cHBvcnRTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgdmFyIF9Db21wb25lbnRVcGxvYWRlciA9IHRoaXMuc3RhdGUuQ29tcG9uZW50O1xuICAgICAgICBpZiAoX0NvbXBvbmVudFVwbG9hZGVyKSB7XG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoX0NvbXBvbmVudFVwbG9hZGVyLCBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyByZWY6IHRoaXMuc2F2ZVVwbG9hZGVyIH0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIHZhciBDb21wb25lbnRVcGxvYWRlciA9IHRoaXMuZ2V0Q29tcG9uZW50KCk7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnRVcGxvYWRlciwgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgcmVmOiB0aGlzLnNhdmVVcGxvYWRlciB9KSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFVwbG9hZDtcbn0oQ29tcG9uZW50KTtcblxuVXBsb2FkLnByb3BUeXBlcyA9IHtcbiAgY29tcG9uZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhY3Rpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG11bHRpcGFydDogUHJvcFR5cGVzLmJvb2wsXG4gIG9uRXJyb3I6IFByb3BUeXBlcy5mdW5jLFxuICBvblN1Y2Nlc3M6IFByb3BUeXBlcy5mdW5jLFxuICBvblByb2dyZXNzOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TdGFydDogUHJvcFR5cGVzLmZ1bmMsXG4gIGRhdGE6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSksXG4gIGhlYWRlcnM6IFByb3BUeXBlcy5vYmplY3QsXG4gIGFjY2VwdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGJlZm9yZVVwbG9hZDogUHJvcFR5cGVzLmZ1bmMsXG4gIGN1c3RvbVJlcXVlc3Q6IFByb3BUeXBlcy5mdW5jLFxuICBvblJlYWR5OiBQcm9wVHlwZXMuZnVuYyxcbiAgd2l0aENyZWRlbnRpYWxzOiBQcm9wVHlwZXMuYm9vbCxcbiAgc3VwcG9ydFNlcnZlclJlbmRlcjogUHJvcFR5cGVzLmJvb2xcbn07XG5VcGxvYWQuZGVmYXVsdFByb3BzID0ge1xuICBjb21wb25lbnQ6ICdzcGFuJyxcbiAgcHJlZml4Q2xzOiAncmMtdXBsb2FkJyxcbiAgZGF0YToge30sXG4gIGhlYWRlcnM6IHt9LFxuICBuYW1lOiAnZmlsZScsXG4gIG11bHRpcGFydDogZmFsc2UsXG4gIG9uUmVhZHk6IGVtcHR5LFxuICBvblN0YXJ0OiBlbXB0eSxcbiAgb25FcnJvcjogZW1wdHksXG4gIG9uU3VjY2VzczogZW1wdHksXG4gIHN1cHBvcnRTZXJ2ZXJSZW5kZXI6IGZhbHNlLFxuICBtdWx0aXBsZTogZmFsc2UsXG4gIGJlZm9yZVVwbG9hZDogbnVsbCxcbiAgY3VzdG9tUmVxdWVzdDogbnVsbCxcbiAgd2l0aENyZWRlbnRpYWxzOiBmYWxzZVxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBVcGxvYWQ7IiwiZnVuY3Rpb24gZW5kc1dpdGgoc3RyLCBzdWZmaXgpIHtcbiAgcmV0dXJuIHN0ci5pbmRleE9mKHN1ZmZpeCwgc3RyLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGgpICE9PSAtMTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIChmaWxlLCBhY2NlcHRlZEZpbGVzKSB7XG4gIGlmIChmaWxlICYmIGFjY2VwdGVkRmlsZXMpIHtcbiAgICB2YXIgYWNjZXB0ZWRGaWxlc0FycmF5ID0gQXJyYXkuaXNBcnJheShhY2NlcHRlZEZpbGVzKSA/IGFjY2VwdGVkRmlsZXMgOiBhY2NlcHRlZEZpbGVzLnNwbGl0KCcsJyk7XG4gICAgdmFyIGZpbGVOYW1lID0gZmlsZS5uYW1lIHx8ICcnO1xuICAgIHZhciBtaW1lVHlwZSA9IGZpbGUudHlwZSB8fCAnJztcbiAgICB2YXIgYmFzZU1pbWVUeXBlID0gbWltZVR5cGUucmVwbGFjZSgvXFwvLiokLywgJycpO1xuXG4gICAgcmV0dXJuIGFjY2VwdGVkRmlsZXNBcnJheS5zb21lKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICB2YXIgdmFsaWRUeXBlID0gdHlwZS50cmltKCk7XG4gICAgICBpZiAodmFsaWRUeXBlLmNoYXJBdCgwKSA9PT0gJy4nKSB7XG4gICAgICAgIHJldHVybiBlbmRzV2l0aChmaWxlTmFtZS50b0xvd2VyQ2FzZSgpLCB2YWxpZFR5cGUudG9Mb3dlckNhc2UoKSk7XG4gICAgICB9IGVsc2UgaWYgKC9cXC9cXCokLy50ZXN0KHZhbGlkVHlwZSkpIHtcbiAgICAgICAgLy8gVGhpcyBpcyBzb21ldGhpbmcgbGlrZSBhIGltYWdlLyogbWltZSB0eXBlXG4gICAgICAgIHJldHVybiBiYXNlTWltZVR5cGUgPT09IHZhbGlkVHlwZS5yZXBsYWNlKC9cXC8uKiQvLCAnJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbWltZVR5cGUgPT09IHZhbGlkVHlwZTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn0pOyIsIi8vIGV4cG9ydCB0aGlzIHBhY2thZ2UncyBhcGlcbmltcG9ydCBVcGxvYWQgZnJvbSAnLi9VcGxvYWQnO1xuXG5leHBvcnQgZGVmYXVsdCBVcGxvYWQ7IiwiZnVuY3Rpb24gZ2V0RXJyb3Iob3B0aW9uLCB4aHIpIHtcbiAgdmFyIG1zZyA9ICdjYW5ub3QgcG9zdCAnICsgb3B0aW9uLmFjdGlvbiArICcgJyArIHhoci5zdGF0dXMgKyAnXFwnJztcbiAgdmFyIGVyciA9IG5ldyBFcnJvcihtc2cpO1xuICBlcnIuc3RhdHVzID0geGhyLnN0YXR1cztcbiAgZXJyLm1ldGhvZCA9ICdwb3N0JztcbiAgZXJyLnVybCA9IG9wdGlvbi5hY3Rpb247XG4gIHJldHVybiBlcnI7XG59XG5cbmZ1bmN0aW9uIGdldEJvZHkoeGhyKSB7XG4gIHZhciB0ZXh0ID0geGhyLnJlc3BvbnNlVGV4dCB8fCB4aHIucmVzcG9uc2U7XG4gIGlmICghdGV4dCkge1xuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZSh0ZXh0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0ZXh0O1xuICB9XG59XG5cbi8vIG9wdGlvbiB7XG4vLyAgb25Qcm9ncmVzczogKGV2ZW50OiB7IHBlcmNlbnQ6IG51bWJlciB9KTogdm9pZCxcbi8vICBvbkVycm9yOiAoZXZlbnQ6IEVycm9yLCBib2R5PzogT2JqZWN0KTogdm9pZCxcbi8vICBvblN1Y2Nlc3M6IChib2R5OiBPYmplY3QpOiB2b2lkLFxuLy8gIGRhdGE6IE9iamVjdCxcbi8vICBmaWxlbmFtZTogU3RyaW5nLFxuLy8gIGZpbGU6IEZpbGUsXG4vLyAgd2l0aENyZWRlbnRpYWxzOiBCb29sZWFuLFxuLy8gIGFjdGlvbjogU3RyaW5nLFxuLy8gIGhlYWRlcnM6IE9iamVjdCxcbi8vIH1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwbG9hZChvcHRpb24pIHtcbiAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gIGlmIChvcHRpb24ub25Qcm9ncmVzcyAmJiB4aHIudXBsb2FkKSB7XG4gICAgeGhyLnVwbG9hZC5vbnByb2dyZXNzID0gZnVuY3Rpb24gcHJvZ3Jlc3MoZSkge1xuICAgICAgaWYgKGUudG90YWwgPiAwKSB7XG4gICAgICAgIGUucGVyY2VudCA9IGUubG9hZGVkIC8gZS50b3RhbCAqIDEwMDtcbiAgICAgIH1cbiAgICAgIG9wdGlvbi5vblByb2dyZXNzKGUpO1xuICAgIH07XG4gIH1cblxuICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICBpZiAob3B0aW9uLmRhdGEpIHtcbiAgICBPYmplY3Qua2V5cyhvcHRpb24uZGF0YSkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChrZXksIG9wdGlvbi5kYXRhW2tleV0pO1xuICAgIH0pO1xuICB9XG5cbiAgZm9ybURhdGEuYXBwZW5kKG9wdGlvbi5maWxlbmFtZSwgb3B0aW9uLmZpbGUpO1xuXG4gIHhoci5vbmVycm9yID0gZnVuY3Rpb24gZXJyb3IoZSkge1xuICAgIG9wdGlvbi5vbkVycm9yKGUpO1xuICB9O1xuXG4gIHhoci5vbmxvYWQgPSBmdW5jdGlvbiBvbmxvYWQoKSB7XG4gICAgLy8gYWxsb3cgc3VjY2VzcyB3aGVuIDJ4eCBzdGF0dXNcbiAgICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC91cGxvYWQvaXNzdWVzLzM0XG4gICAgaWYgKHhoci5zdGF0dXMgPCAyMDAgfHwgeGhyLnN0YXR1cyA+PSAzMDApIHtcbiAgICAgIHJldHVybiBvcHRpb24ub25FcnJvcihnZXRFcnJvcihvcHRpb24sIHhociksIGdldEJvZHkoeGhyKSk7XG4gICAgfVxuXG4gICAgb3B0aW9uLm9uU3VjY2VzcyhnZXRCb2R5KHhociksIHhocik7XG4gIH07XG5cbiAgeGhyLm9wZW4oJ3Bvc3QnLCBvcHRpb24uYWN0aW9uLCB0cnVlKTtcblxuICAvLyBIYXMgdG8gYmUgYWZ0ZXIgYC5vcGVuKClgLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2VueW8vZHJvcHpvbmUvaXNzdWVzLzE3OVxuICBpZiAob3B0aW9uLndpdGhDcmVkZW50aWFscyAmJiAnd2l0aENyZWRlbnRpYWxzJyBpbiB4aHIpIHtcbiAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgfVxuXG4gIHZhciBoZWFkZXJzID0gb3B0aW9uLmhlYWRlcnMgfHwge307XG5cbiAgLy8gd2hlbiBzZXQgaGVhZGVyc1snWC1SZXF1ZXN0ZWQtV2l0aCddID0gbnVsbCAsIGNhbiBjbG9zZSBkZWZhdWx0IFhIUiBoZWFkZXJcbiAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvdXBsb2FkL2lzc3Vlcy8zM1xuICBpZiAoaGVhZGVyc1snWC1SZXF1ZXN0ZWQtV2l0aCddICE9PSBudWxsKSB7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ1gtUmVxdWVzdGVkLVdpdGgnLCAnWE1MSHR0cFJlcXVlc3QnKTtcbiAgfVxuXG4gIGZvciAodmFyIGggaW4gaGVhZGVycykge1xuICAgIGlmIChoZWFkZXJzLmhhc093blByb3BlcnR5KGgpICYmIGhlYWRlcnNbaF0gIT09IG51bGwpIHtcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGgsIGhlYWRlcnNbaF0pO1xuICAgIH1cbiAgfVxuICB4aHIuc2VuZChmb3JtRGF0YSk7XG5cbiAgcmV0dXJuIHtcbiAgICBhYm9ydDogZnVuY3Rpb24gYWJvcnQoKSB7XG4gICAgICB4aHIuYWJvcnQoKTtcbiAgICB9XG4gIH07XG59IiwidmFyIG5vdyA9ICtuZXcgRGF0ZSgpO1xudmFyIGluZGV4ID0gMDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdWlkKCkge1xuICByZXR1cm4gXCJyYy11cGxvYWQtXCIgKyBub3cgKyBcIi1cIiArICsraW5kZXg7XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5pbmcgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYXJncykge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuID4gMiA/IGxlbiAtIDIgOiAwKTtcbiAgICBmb3IgKHZhciBrZXkgPSAyOyBrZXkgPCBsZW47IGtleSsrKSB7XG4gICAgICBhcmdzW2tleSAtIDJdID0gYXJndW1lbnRzW2tleV07XG4gICAgfVxuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArXG4gICAgICAgICdtZXNzYWdlIGFyZ3VtZW50J1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0Lmxlbmd0aCA8IDEwIHx8ICgvXltzXFxXXSokLykudGVzdChmb3JtYXQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdUaGUgd2FybmluZyBmb3JtYXQgc2hvdWxkIGJlIGFibGUgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyAnICtcbiAgICAgICAgJ3dhcm5pbmcuIFBsZWFzZSwgdXNlIGEgbW9yZSBkZXNjcmlwdGl2ZSBmb3JtYXQgdGhhbjogJyArIGZvcm1hdFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgK1xuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICAgIH0pO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICB9IGNhdGNoKHgpIHt9XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgbGFiZWxDb2w6IHtcclxuICAgIHNwYW46IDQsXHJcbiAgICBndXR0ZXI6IDE2XHJcbiAgfSxcclxuICB3cmFwcGVyQ29sOiB7XHJcbiAgICBzcGFuOiAxOCxcclxuICAgIGd1dHRlcjogMTZcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgd2lkdGg6IDgwMCxcclxuICBtYXNrQ2xvc2FibGU6IGZhbHNlXHJcbn0iLCJpbXBvcnQgaGFuZGxlVXJsRW5jb2RlIGZyb20gJy4vaGFuZGxlLXVybGVuY29kZSc7XHJcbmxldCBleHBvcnRGaWxlID0gKHt1cmwgPSAnJywgZGF0YSA9IHt9fSkgPT4ge1xyXG4gICAgd2luZG93Lm9wZW4odXJsICsgJz8nICsgaGFuZGxlVXJsRW5jb2RlKGRhdGEpKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZXhwb3J0RmlsZTsiLCJsZXQgaGFuZGxlRm9ybURhdGEgPSAoZGF0YSkgPT4ge1xyXG4gICAgbGV0IHJldCA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgT2JqZWN0LmtleXMoZGF0YSkubWFwKGsgPT4ge1xyXG4gICAgICAgIGlmKEFycmF5LmlzQXJyYXkoZGF0YVtrXSkpe1xyXG4gICAgICAgICAgICBkYXRhW2tdLmZvckVhY2goZCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXQuYXBwZW5kKGssZCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldC5hcHBlbmQoayxkYXRhW2tdKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXQ7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUZvcm1EYXRhOyIsImxldCBoYW5kbGVKc29uID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlSnNvbjsiLCJsZXQgaGFuZGxlVXJsRW5jb2RlID0gKGRhdGEpID0+IHtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICByZXR1cm4ga2V5ICsgJz0nICsgZGF0YVtrZXldO1xyXG4gICAgfSkuam9pbignJicpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVVcmxFbmNvZGU7IiwiZXhwb3J0IGRlZmF1bHQgKGVycm9ycykgPT4ge1xyXG4gIHJldHVybiBPYmplY3Qua2V5cyhlcnJvcnMpLnNvbWUoa2V5ID0+IGVycm9yc1trZXldKTtcclxufSIsImltcG9ydCBoYW5kbGVKc29uIGZyb20gJy4vaGFuZGxlLWpzb24nO1xyXG5pbXBvcnQgaGFuZGxlRm9ybURhdGEgZnJvbSAnLi9oYW5kbGUtZm9ybWRhdGEnO1xyXG5cclxuZnVuY3Rpb24gcmVxdWVzdCh7IHVybCwgbWV0aG9kID0gJ1BPU1QnLCBwb3N0VHlwZSA9ICdqc29uJyAsZGF0YSA9IHt9LCBzdWNjZXNzID0gKCkgPT4ge30sIGZhaWwgPSAoKSA9PiB7fSwgY29tcGxldGUgPSAoKSA9PiB7fX0pIHtcclxuICAgIGlmKCF1cmwpe1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndXJs5Y+C5pWw5LiN5Y+v57y655yBJyk7XHJcbiAgICB9XHJcbiAgICBsZXQgeG1sID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICB4bWwub3BlbihtZXRob2QsIHVybCk7XHJcbiAgICBsZXQgcG9zdERhdGEgO1xyXG4gICAgc3dpdGNoIChwb3N0VHlwZSl7XHJcbiAgICAgICAgY2FzZSAnanNvbic6XHJcbiAgICAgICAgICAgIHhtbC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgICAgICAgICBwb3N0RGF0YSA9IGhhbmRsZUpzb24oZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2Zvcm1kYXRhJzpcclxuICAgICAgICAgICAgLy8geG1sLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsIFwiYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsXCIpO1xyXG4gICAgICAgICAgICBwb3N0RGF0YSA9IGhhbmRsZUZvcm1EYXRhKGRhdGEpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICB4bWwuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICAgICAgICAgICAgcG9zdERhdGEgPSBoYW5kbGVKc29uKGRhdGEpO1xyXG4gICAgfVxyXG4gICAgeG1sLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICBpZih4bWwucmVhZHlTdGF0ZSA9PT0gNCl7XHJcbiAgICAgICAgICAgIGlmKHhtbC5zdGF0dXMgPT09IDIwMCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UoeG1sLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29kZSA9IGRhdGEuY29kZTtcclxuICAgICAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgICAgICBpZihjb2RlID09PSB1bmRlZmluZWQpIHRocm93IG5ldyBFcnJvcignY29kZSBpcyBub3QgZGVmaW5lZCcpO1xyXG4gICAgICAgICAgICAgICAgfWNhdGNoKGUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYocGFyc2VJbnQoZGF0YS5jb2RlKSA9PT0gMjAwKXtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbChkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgn6K+35rGC6YGH5Yiw5LqG6Zeu6aKY77yM6K+356iN5ZCO5YaN5bCd6K+VJyk7XHJcbiAgICAgICAgICAgICAgICBmYWlsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29tcGxldGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgeG1sLnNlbmQocG9zdERhdGEpO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3Q7XHJcbiIsImltcG9ydCBjcmVhdGVIaXN0b3J5IGZyb20gJ2hpc3RvcnkvY3JlYXRlSGFzaEhpc3RvcnknO1xyXG5sZXQgaGlzdG9yeSAgPSBjcmVhdGVIaXN0b3J5KCk7XHJcbmV4cG9ydCBkZWZhdWx0IGhpc3Rvcnk7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuL2VkaXRfYi5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuL2VkaXRfYi5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi9lZGl0X2IuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTW9kYWwsIElucHV0LCBCdXR0b24sIEZvcm0sIEljb24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IENvbW1vbk1vZGFsQ29uZmlnIGZyb20gJy4uLy4uL2NvbmZpZy9jb21tb24tbW9kYWwnO1xyXG5pbXBvcnQgQ29tbW9uRm9ybUNvbmZpZyBmcm9tICcuLi8uLi9jb25maWcvY29tbW9uLWZvcm0nO1xyXG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi8uLi9oZWxwZXJzL3JlcXVlc3QnO1xyXG5pbXBvcnQgaGFzRXJyb3JzIGZyb20gJy4uLy4uL2hlbHBlcnMvaGFzLWVycm9ycyc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9wcm9jZXNzL3N0b3JlJztcclxuaW1wb3J0IGV4cG9ydEZpbGUgZnJvbSBcIi4uLy4uL2hlbHBlcnMvZXhwb3J0LWZpbGVcIjtcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4vZWRpdF9iLmNzcydcclxuY2xhc3MgRWRpdEIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCB7IHNlbGVjdGVkSXRlbSwgdmlzaWJsZSwgZm9ybSB9ID0gdGhpcy5wcm9wcztcclxuICAgIGxldCB7IGlzRmllbGRUb3VjaGVkLCBnZXRGaWVsZEVycm9yLCBnZXRGaWVsZHNFcnJvciwgZ2V0RmllbGREZWNvcmF0b3IgfSA9IGZvcm07XHJcbiAgICBsZXQgZWRpdFZpc2libGUgPSB2aXNpYmxlLmVkaXQ7XHJcbiAgICBsZXQgeyBlZGl0VHlwZSwgd2ZfaWQsIHRpdGxlLCBjcmVhdG9yLCBjcmVhdGVfdGltZSwgZmlsZV90eXBlLCByZW1hcmssIGZpbGVfaWQsIGZpbGVfbmFtZSB9ID0gc2VsZWN0ZWRJdGVtO1xyXG4gICAgbGV0IG1vZGFsVGl0bGUgPSBlZGl0VHlwZSA9PT0gJ2VkaXQnID8gJ+e8lui+kScgOiAn5Yig6ZmkJztcclxuICAgIC8vIGxldCB0aXRsZUVycm9yID0gaXNGaWVsZFRvdWNoZWQoJ3RpdGxlJykgJiYgZ2V0RmllbGRFcnJvcigndGl0bGUnKTtcclxuICAgIC8vIGxldCB3Zl9pZEVycm9yID0gaXNGaWVsZFRvdWNoZWQoJ3dmX2lkJykgJiYgZ2V0RmllbGRFcnJvcignd2ZfaWQnKTtcclxuICAgIGxldCByZW1hcmtFcnJvciA9IGlzRmllbGRUb3VjaGVkKCdyZW1hcmsnKSAmJiBnZXRGaWVsZEVycm9yKCdyZW1hcmsnKTtcclxuICAgIGxldCByZWFzb25FcnJvciA9IGlzRmllbGRUb3VjaGVkKCdyZWFzb24nKSAmJiBnZXRGaWVsZEVycm9yKCdyZWFzb24nKTtcclxuICAgIGxldCBpc0Rpc2FibGVkQnRuID0gZWRpdFR5cGUgPT09ICdlZGl0JyA/IG51bGwgOiBoYXNFcnJvcnMoZ2V0RmllbGRzRXJyb3IoWydyZWFzb24nXSkpO1xyXG4gICAgbGV0IE1vZGFsRm9vdGVyID0gKCkgPT4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmNsb3NlTW9kYWx9PuWPlua2iDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBkaXNhYmxlZD17aXNEaXNhYmxlZEJ0bn0gb25DbGljaz17dGhpcy5lbnN1cmV9PlxyXG4gICAgICAgICAg56Gu5a6aXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG4gICAgbGV0IGZpbGVfdHlwZV9saXN0ID0gWyflhajpg6gnLCAnQeexu+aWh+S7ticsICdC57G75paH5Lu2JywgJ0Pnsbvmlofku7YnLCAnROexu+aWh+S7ticsICdF57G75paH5Lu2J107XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB2aXNpYmxlPXtlZGl0VmlzaWJsZX1cclxuICAgICAgICB0aXRsZT17YCR7bW9kYWxUaXRsZX0tLS0t5LqM57qn5piO57uGYH1cclxuICAgICAgICBvbkNhbmNlbD17dGhpcy5jbG9zZU1vZGFsfVxyXG4gICAgICAgIGZvb3Rlcj17PE1vZGFsRm9vdGVyIC8+fVxyXG4gICAgICAgIHsuLi5Db21tb25Nb2RhbENvbmZpZ31cclxuICAgICAgPlxyXG4gICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIuaWh+S7tuexu+Wei1wiIHsuLi5Db21tb25Gb3JtQ29uZmlnfT5cclxuICAgICAgICAgICAge2ZpbGVfdHlwZV9saXN0W2ZpbGVfdHlwZV19XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCLmlYjnjocxMDDnvJblj7dcIiB7Li4uQ29tbW9uRm9ybUNvbmZpZ30+XHJcbiAgICAgICAgICAgIHt3Zl9pZH1cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIuagh+mimFwiIHsuLi5Db21tb25Gb3JtQ29uZmlnfT5cclxuICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwi5paH5Lu25ZCN56ewXCIgey4uLkNvbW1vbkZvcm1Db25maWd9PlxyXG4gICAgICAgICAgICB7ZmlsZV9pZH1cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD1cIuWIm+W7uuS6ulwiIHsuLi5Db21tb25Gb3JtQ29uZmlnfT5cclxuICAgICAgICAgICAge2NyZWF0b3J9XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCLliJvlu7rml7bpl7RcIiB7Li4uQ29tbW9uRm9ybUNvbmZpZ30+XHJcbiAgICAgICAgICAgIHtjcmVhdGVfdGltZX1cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICBsYWJlbD1cIuWkh+azqFwiXHJcbiAgICAgICAgICAgIGhlbHA9e3JlbWFya0Vycm9yID8gcmVtYXJrRXJyb3IgOiAnJ31cclxuICAgICAgICAgICAgdmFsaWRhdGVTdGF0dXM9e3JlbWFya0Vycm9yID8gJ2Vycm9yJyA6ICcnfVxyXG4gICAgICAgICAgICB7Li4uQ29tbW9uRm9ybUNvbmZpZ31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2VkaXRUeXBlICE9PSAnZWRpdCdcclxuICAgICAgICAgICAgICA/IHJlbWFya1xyXG4gICAgICAgICAgICAgIDogZ2V0RmllbGREZWNvcmF0b3IoJ3JlbWFyaycsIHtcclxuICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlOiByZW1hcmssXHJcbiAgICAgICAgICAgICAgICB9KSg8SW5wdXQgLz4pfVxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZS5wbDI1fT48YSBvbkNsaWNrPXt0aGlzLmV4cG9ydEZpbGVBfT57ZmlsZV9uYW1lfTwvYT48L3NwYW4+XHJcblxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICB7ZWRpdFR5cGUgPT09ICdlZGl0JyA/IG51bGwgOiAoXHJcbiAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBlZGl0VHlwZSA9PT0gJ2VkaXQnID8gJ25vbmUnIDogJ2Jsb2NrJyB9fVxyXG4gICAgICAgICAgICAgIGhlbHA9e3JlYXNvbkVycm9yID8gcmVhc29uRXJyb3IgOiAnJ31cclxuICAgICAgICAgICAgICB2YWxpZGF0ZVN0YXR1cz17cmVhc29uRXJyb3IgPyAncmVhc29uJyA6ICcnfVxyXG4gICAgICAgICAgICAgIGxhYmVsPVwi5Yig6Zmk5Y6f5ZugXCJcclxuICAgICAgICAgICAgICB7Li4uQ29tbW9uRm9ybUNvbmZpZ31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtnZXRGaWVsZERlY29yYXRvcigncmVhc29uJywge1xyXG4gICAgICAgICAgICAgICAgcnVsZXM6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfor7fovpPlhaXliKDpmaTljp/lm6AnLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgIH0pKDxJbnB1dCBwbGFjZWhvbGRlcj1cIuW/heWhq1wiIC8+KX1cclxuICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICk7XHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5wcm9wcy5mb3JtLnZhbGlkYXRlRmllbGRzKCk7XHJcbiAgfVxyXG4gIGVuc3VyZSA9ICgpID0+IHtcclxuICAgIGxldCBzZWxlY3RJdGVtID0gdGhpcy5wcm9wcy5zZWxlY3RlZEl0ZW07XHJcbiAgICBsZXQgeyBnZXRGaWVsZHNFcnJvciB9ID0gdGhpcy5wcm9wcy5mb3JtO1xyXG4gICAgbGV0IGNhblBvc3QgPSAhaGFzRXJyb3JzKGdldEZpZWxkc0Vycm9yKTtcclxuICAgIGlmIChjYW5Qb3N0KSB7XHJcbiAgICAgIGlmIChzZWxlY3RJdGVtLmVkaXRUeXBlID09PSAnZWRpdCcpIHtcclxuICAgICAgICB0aGlzLl9lZGl0KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fZGVsZXRlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIF9lZGl0ID0gKCkgPT4ge1xyXG4gICAgbGV0IHsgZm9ybSB9ID0gdGhpcy5wcm9wcztcclxuICAgIGxldCBzZWxlY3RJdGVtID0gdGhpcy5wcm9wcy5zZWxlY3RlZEl0ZW07XHJcbiAgICBsZXQgeyBmaWxlX2lkIH0gPSBzZWxlY3RJdGVtO1xyXG4gICAgbGV0IGlkID0gdGhpcy5wcm9wcy5pZDtcclxuICAgIGxldCB7IHJlbWFyayB9ID0gZm9ybS5nZXRGaWVsZHNWYWx1ZSgpO1xyXG4gICAgY29uc29sZS5sb2coaWQpO1xyXG4gICAgcmVxdWVzdCh7XHJcbiAgICAgIHVybDogJy9hcGkvZWRpdF9maWxlJyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGZsb3dfaWQ6IGlkLFxyXG4gICAgICAgIGZpbGVfaWQsXHJcbiAgICAgICAgcmVtYXJrOiByZW1hcmssXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICB0aGlzLmNsb3NlTW9kYWwoKTtcclxuICAgICAgICB0aGlzLmZldGNoUHJvY2Vzc0xpc3QoKTtcclxuICAgICAgfSxcclxuICAgICAgZmFpbDogKCkgPT4ge30sXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIF9kZWxldGUgPSAoKSA9PiB7XHJcbiAgICAgIGxldCB7IGZvcm0gfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIGxldCBzZWxlY3RJdGVtID0gdGhpcy5wcm9wcy5zZWxlY3RlZEl0ZW07XHJcbiAgICAgIGxldCB7IGZpbGVfaWQgfSA9IHNlbGVjdEl0ZW07XHJcbiAgICAgIGxldCBpZCA9IHRoaXMucHJvcHMuaWQ7XHJcbiAgICAgIGxldCB7IHJlYXNvbiB9ID0gZm9ybS5nZXRGaWVsZHNWYWx1ZSgpO1xyXG4gICAgcmVxdWVzdCh7XHJcbiAgICAgIHVybDogJy9hcGkvZGVsZXRlX2ZpbGUnLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBmbG93X2lkOiBpZCxcclxuICAgICAgICAgIGZpbGVfaWQsXHJcbiAgICAgICAgIHJlYXNvbixcclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY2xvc2VNb2RhbCgpO1xyXG4gICAgICAgIHRoaXMuZmV0Y2hQcm9jZXNzTGlzdCgpXHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6ICgpID0+IHtcclxuICAgICAgICAvLyB0aGlzLmNsb3NlTW9kYWwoKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgIGxldCB7IHNldFZpc2libGUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBzZXRWaXNpYmxlKGZhbHNlKTtcclxuICB9O1xyXG4gIGZldGNoUHJvY2Vzc0xpc3QgPSAoKSA9PiB7XHJcbiAgICByZXF1ZXN0KHtcclxuICAgICAgdXJsOiAnL2FwaS9nZXRfZmlsZV9saXN0JyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICAgIGtleXdvcmQ6ICcnLFxyXG4gICAgICAgIGZpbGVfdHlwZTogJycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3M6ICh7IHRhYmxlIH0pID0+IHtcclxuICAgICAgICBzdG9yZS5zZXRQcm9jZXNzTGlzdCh0YWJsZSk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG4gICAgZXhwb3J0RmlsZUEgPSAoKT0+e1xyXG4gICAgICAgIGxldCBzZWxlY3RJdGVtID0gdGhpcy5wcm9wcy5zZWxlY3RlZEl0ZW07XHJcbiAgICAgICAgbGV0IHsgZmlsZV9pZCB9ID0gc2VsZWN0SXRlbTtcclxuICAgICAgICBsZXR7aWR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBleHBvcnRGaWxlKHtcclxuICAgICAgICAgICAgdXJsOiAnL2FwaS9nZXRfZmlsZScsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGlkOmlkLFxyXG4gICAgICAgICAgICAgICAgZmlsZV9pZCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRm9ybS5jcmVhdGUoKShFZGl0Qik7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1vZGFsLCBGb3JtLCBJbnB1dCwgU2VsZWN0LCBUYWJsZSwgUmFkaW8sIEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QnO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZSc7XHJcbmltcG9ydCBzdG9yZTIgZnJvbSBcIi4uL3Byb2Nlc3Mvc3RvcmVcIjtcclxuaW1wb3J0IGhhc0Vycm9ycyBmcm9tICcuLi8uLi9oZWxwZXJzL2hhcy1lcnJvcnMnO1xyXG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi8uLi9oZWxwZXJzL3JlcXVlc3QnO1xyXG5sZXQgeyBUZXh0QXJlYSB9ID0gSW5wdXQ7XHJcbmxldCBPcHRpb24gPSBTZWxlY3QuT3B0aW9uO1xyXG5sZXQgUmFkaW9Hcm91cCA9IFJhZGlvLkdyb3VwO1xyXG5sZXQgZm9ybVByb3BzID0ge1xyXG4gIGxhYmVsQ29sOiB7XHJcbiAgICBzcGFuOiA0LFxyXG4gICAgZ3V0dGVyOiAxNixcclxuICB9LFxyXG4gIHdyYXBwZXJDb2w6IHtcclxuICAgIHNwYW46IDE4LFxyXG4gICAgZ3V0dGVyOiAxNixcclxuICB9LFxyXG59O1xyXG5sZXQgYWxsVHlwZXMgPSB7XHJcbiAg5om55byA5YGc5byA5py6OiB7XHJcbiAgICBvcGVydGFpb25fdHlwZTogMSxcclxuICAgIGRhdGFTb3VyY2U6IFtcclxuICAgICAge1xyXG4gICAgICAgIG9yZGVyOiAnMScsXHJcbiAgICAgICAgZmllbGQ6ICfnlLXor53lj7fnoIEnLFxyXG4gICAgICAgIGlucHV0X2Zvcm1hdDogJ+WPt+eggScsXHJcbiAgICAgICAgb3V0cHV0X2Zvcm1hdDogKCkgPT4gPHNwYW4+5oyJQeexu+aWh+S7tuWPt+eggTwvc3Bhbj4sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgY29sdW1uczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICfpobrluo8nLFxyXG4gICAgICAgIGRhdGFJbmRleDogJ29yZGVyJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAn5a2X5q61JyxcclxuICAgICAgICBkYXRhSW5kZXg6ICdmaWVsZCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ0Hnsbvmlofku7bovpPlhaXmoLzlvI8nLFxyXG4gICAgICAgIGRhdGFJbmRleDogJ2lucHV0X2Zvcm1hdCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ+i+k+WHuuagvOW8jycsXHJcbiAgICAgICAgZGF0YUluZGV4OiAnb3V0cHV0X2Zvcm1hdCcsXHJcbiAgICAgICAgcmVuZGVyOiBDb21wID0+IDxDb21wIC8+LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIGV4YW1wbGU6IHtcclxuICAgICAgaW5wdXQ6ICcxMzkxMjM0NTY3OCcsXHJcbiAgICAgIG91dHB1dDogJzEzOTEyMzQ1Njc4JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICDmibnph4/lrp7lkI3nmbvorrA6IHtcclxuICAgIG9wZXJ0YWlvbl90eXBlOiAyLFxyXG4gICAgZGF0YVNvdXJjZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgb3JkZXI6ICcxJyxcclxuICAgICAgICBmaWVsZDogJ+eUteivneWPt+eggScsXHJcbiAgICAgICAgaW5wdXRfZm9ybWF0OiAn5Y+356CBJyxcclxuICAgICAgICBvdXRwdXRfZm9ybWF0OiAoKSA9PiA8c3Bhbj7mjIlB57G75paH5Lu25Y+356CBPC9zcGFuPixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG9yZGVyOiAnMicsXHJcbiAgICAgICAgZmllbGQ6ICfor4Hku7bnsbvlnosnLFxyXG4gICAgICAgIGlucHV0X2Zvcm1hdDogJ+ivgeS7tuexu+WeiycsXHJcbiAgICAgICAgb3V0cHV0X2Zvcm1hdDogKCkgPT4gPHNwYW4+5oyJQeexu+aWh+S7tuivgeS7tuexu+Weizwvc3Bhbj4sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBvcmRlcjogJzMnLFxyXG4gICAgICAgIGZpZWxkOiAn6K+B5Lu25Y+356CBJyxcclxuICAgICAgICBpbnB1dF9mb3JtYXQ6ICfor4Hku7blj7fnoIEnLFxyXG4gICAgICAgIG91dHB1dF9mb3JtYXQ6ICgpID0+IDxzcGFuPuaMiUHnsbvmlofku7bor4Hku7blj7fnoIE8L3NwYW4+LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgb3JkZXI6ICc0JyxcclxuICAgICAgICBmaWVsZDogJ+ivgeS7tuWcsOWdgCcsXHJcbiAgICAgICAgaW5wdXRfZm9ybWF0OiAn6K+B5Lu25Zyw5Z2AJyxcclxuICAgICAgICBvdXRwdXRfZm9ybWF0OiAoKSA9PiA8c3Bhbj7mjIlB57G75paH5Lu26K+B5Lu25Zyw5Z2APC9zcGFuPixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG9yZGVyOiAnNScsXHJcbiAgICAgICAgZmllbGQ6ICflrqLmiLflkI3np7AnLFxyXG4gICAgICAgIGlucHV0X2Zvcm1hdDogJ+WuouaIt+WQjeensCcsXHJcbiAgICAgICAgb3V0cHV0X2Zvcm1hdDogKCkgPT4gPHNwYW4+5oyJQeexu+WuouaIt+WQjeensDwvc3Bhbj4sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgY29sdW1uczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICfpobrluo8nLFxyXG4gICAgICAgIGRhdGFJbmRleDogJ29yZGVyJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAn5a2X5q61JyxcclxuICAgICAgICBkYXRhSW5kZXg6ICdmaWVsZCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ0Hnsbvmlofku7bovpPlhaXmoLzlvI8nLFxyXG4gICAgICAgIGRhdGFJbmRleDogJ2lucHV0X2Zvcm1hdCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ+agvOW8j+WGheWuuScsXHJcbiAgICAgICAgZGF0YUluZGV4OiAnb3V0cHV0X2Zvcm1hdCcsXHJcbiAgICAgICAgcmVuZGVyOiBDb21wID0+IDxDb21wIC8+LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIGV4YW1wbGU6IHtcclxuICAgICAgaW5wdXQ6ICcxMzkxMjM0NTY3OHxJZENhcmR8NDQwNzIyMTk0NTEwMDYyNzE5fOW5v+S4nOecgeWPsOWxseW4guS4ieWQiOmVh+S4nOiBlOa9rua0i+adkTE15Y+35LmL5LiAfOmZiOWbveWvjCcsXHJcbiAgICAgIG91dHB1dDogJzEzOTEyMzQ1Njc4fElkQ2FyZHw0NDA3MjIxOTQ1MTAwNjI3MTl85bm/5Lic55yB5Y+w5bGx5biC5LiJ5ZCI6ZWH5Lic6IGU5r2u5rSL5p2RMTXlj7fkuYvkuIB86ZmI5Zu95a+MJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICDmibnph4/orqLljZXlm57pgIA6IHtcclxuICAgIG9wZXJ0YWlvbl90eXBlOiAzLFxyXG4gICAgZGF0YVNvdXJjZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgb3JkZXI6IDEsXHJcbiAgICAgICAgZmllbGQ6ICforqLljZXnvJblj7cnLFxyXG4gICAgICAgIGlucHV0X2Zvcm1hdDogJ+iuouWNlee8luWPtycsXHJcbiAgICAgICAgb3V0cHV0X2Zvcm1hdDogKCkgPT4gPHNwYW4+5oyJQeexu+aWh+S7tuiuouWNlee8luWPtzwvc3Bhbj4sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBvcmRlcjogMixcclxuICAgICAgICBmaWVsZDogJ+WbnumAgOWOn+WboCcsXHJcbiAgICAgICAgaW5wdXRfZm9ybWF0OiAnJyxcclxuICAgICAgICBvdXRwdXRfZm9ybWF0OiAoKSA9PiAoXHJcbiAgICAgICAgICA8UmFkaW9Hcm91cCBkZWZhdWx0VmFsdWU9eycnfSBuYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICA8UmFkaW8gdmFsdWU9XCJyZXN0XCI+5L2Z6aKd5LiN6LazPC9SYWRpbz5cclxuICAgICAgICAgICAgPFJhZGlvIHZhbHVlPVwib3RoZXJcIj5cclxuICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCLlhbbku5ZcIiBzdHlsZT17eyB3aWR0aDogODUgfX0gLz5cclxuICAgICAgICAgICAgPC9SYWRpbz5cclxuICAgICAgICAgIDwvUmFkaW9Hcm91cD5cclxuICAgICAgICApLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIGNvbHVtbnM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAn6aG65bqPJyxcclxuICAgICAgICBkYXRhSW5kZXg6ICdvcmRlcicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ+Wtl+autScsXHJcbiAgICAgICAgZGF0YUluZGV4OiAnZmllbGQnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdB57G75paH5Lu26L6T5YWl5qC85byPJyxcclxuICAgICAgICBkYXRhSW5kZXg6ICdpbnB1dF9mb3JtYXQnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICfmoLzlvI/lhoXlrrknLFxyXG4gICAgICAgIGRhdGFJbmRleDogJ291dHB1dF9mb3JtYXQnLFxyXG4gICAgICAgIHJlbmRlcjogQ29tcCA9PiA8Q29tcCAvPixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBleGFtcGxlOiB7XHJcbiAgICAgIGlucHV0OiAnMDAwMTIzNDU2NzgnLFxyXG4gICAgICBvdXRwdXQ6ICcwMDAxMjM0NTY3OHzkvZnpop3kuI3otrMnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIOaJuemHj+S6p+WTgeiuoui0remAgOiuouS4juWPmOabtDoge1xyXG4gICAgb3BlcnRhaW9uX3R5cGU6IDQsXHJcbiAgICBkYXRhU291cmNlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBvcmRlcjogMSxcclxuICAgICAgICBmaWVsZDogJ+eUteivneWPt+eggScsXHJcbiAgICAgICAgaW5wdXRfZm9ybWF0OiAn55S16K+d5Y+356CBJyxcclxuICAgICAgICBvdXRwdXRfZm9ybWF0OiAoKSA9PiA8c3Bhbj7mjIlB57G75paH5Lu25omL5py65Y+356CBPC9zcGFuPixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG9yZGVyOiAyLFxyXG4gICAgICAgIGZpZWxkOiAn5aSH5rOoJyxcclxuICAgICAgICBpbnB1dF9mb3JtYXQ6ICctJyxcclxuICAgICAgICBvdXRwdXRfZm9ybWF0OiAoKSA9PiAoXHJcbiAgICAgICAgICA8UmFkaW9Hcm91cCBuYW1lPVwi5om56YeP5Lqn5ZOB6K6i6LSt6YCA6K6i5LiO5Y+Y5pu0XCI+XHJcbiAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT1cInJlc3RcIj7kvJjmg6Dlt7LliLDmnJ88L1JhZGlvPlxyXG4gICAgICAgICAgICA8UmFkaW8gdmFsdWU9XCJvdGhlclwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIuWFtuS7llwiIHN0eWxlPXt7IHdpZHRoOiA4NSB9fSAvPlxyXG4gICAgICAgICAgICA8L1JhZGlvPlxyXG4gICAgICAgICAgPC9SYWRpb0dyb3VwPlxyXG4gICAgICAgICksXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgY29sdW1uczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICfluo/lj7cnLFxyXG4gICAgICAgIGRhdGFJbmRleDogJ29yZGVyJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAn5a2X5q61JyxcclxuICAgICAgICBkYXRhSW5kZXg6ICdmaWVsZCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ0Hnsbvmlofku7bovpPlhaXmoLzlvI8nLFxyXG4gICAgICAgIGRhdGFJbmRleDogJ2lucHV0X2Zvcm1hdCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ+i+k+WHuuagvOW8jycsXHJcbiAgICAgICAgZGF0YUluZGV4OiAnb3V0cHV0X2Zvcm1hdCcsXHJcbiAgICAgICAgcmVuZGVyOiBDb21wID0+IDxDb21wIC8+LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIGV4YW1wbGU6IHtcclxuICAgICAgaW5wdXQ6ICcxMzkxMjM0NTY3OCcsXHJcbiAgICAgIG91dHB1dDogJzEzOTEyMzQ1Njc4fOS8mOaDoOW3suWIsOacnycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAg5om56YeP5a+G56CB6YeN572uOiB7XHJcbiAgICBvcGVydGFpb25fdHlwZTogNSxcclxuICAgIGRhdGFTb3VyY2U6IFtcclxuICAgICAge1xyXG4gICAgICAgIG9yZGVyOiAxLFxyXG4gICAgICAgIGZpZWxkOiAn55S16K+d5Y+356CBJyxcclxuICAgICAgICBpbnB1dF9mb3JtYXQ6ICfnlLXor53lj7fnoIEnLFxyXG4gICAgICAgIG91dHB1dF9mb3JtYXQ6ICgpID0+IDxzcGFuPuaMiUHnsbvmlofku7bmiYvmnLrmoLzlvI88L3NwYW4+LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgb3JkZXI6IDIsXHJcbiAgICAgICAgZmllbGQ6ICflr4bnoIEnLFxyXG4gICAgICAgIGlucHV0X2Zvcm1hdDogJy0nLFxyXG4gICAgICAgIG91dHB1dF9mb3JtYXQ6ICgpID0+IDxJbnB1dCBkZWZhdWx0VmFsdWU9XCIwMDAwMDBcIiAvPixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBjb2x1bW5zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ+W6j+WPtycsXHJcbiAgICAgICAgZGF0YUluZGV4OiAnb3JkZXInLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICflrZfmrrUnLFxyXG4gICAgICAgIGRhdGFJbmRleDogJ2ZpZWxkJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAnQeexu+aWh+S7tui+k+WFpeagvOW8jycsXHJcbiAgICAgICAgZGF0YUluZGV4OiAnaW5wdXRfZm9ybWF0JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAn6L6T5Ye65qC85byPJyxcclxuICAgICAgICBkYXRhSW5kZXg6ICdvdXRwdXRfZm9ybWF0JyxcclxuICAgICAgICByZW5kZXI6IENvbXAgPT4gPENvbXAgLz4sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgZXhhbXBsZToge1xyXG4gICAgICBpbnB1dDogJzEzOTEyMzQ1Njc4JyxcclxuICAgICAgb3V0cHV0OiAnMTM5MTIzNDU2Nzh8MDAwMDAwJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICDmibnph4/kuqflk4HorqLotK3pgIDorqI6IHtcclxuICAgIG9wZXJ0YWlvbl90eXBlOiA2LFxyXG4gICAgZGF0YVNvdXJjZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgb3JkZXI6IDEsXHJcbiAgICAgICAgZmllbGQ6ICfnlLXor53lj7fnoIEnLFxyXG4gICAgICAgIGlucHV0X2Zvcm1hdDogJ+eUteivneWPt+eggScsXHJcbiAgICAgICAgb3V0cHV0X2Zvcm1hdDogKCkgPT4gPHNwYW4+5oyJQeexu+aWh+S7tuaJi+acuuWPt+eggTwvc3Bhbj4sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBvcmRlcjogMixcclxuICAgICAgICBmaWVsZDogJ+WinuWAvOS6p+WTgeS7o+eggScsXHJcbiAgICAgICAgaW5wdXRfZm9ybWF0OiAn5aKe5YC85Lqn5ZOB5Luj56CBJyxcclxuICAgICAgICBvdXRwdXRfZm9ybWF0OiAoKSA9PiA8c3Bhbj7mjIlB57G75paH5Lu25aKe5YC85Lqn5ZOB5Luj56CBPC9zcGFuPixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG9yZGVyOiAzLFxyXG4gICAgICAgIGZpZWxkOiAn55Sf5pWI5pa55byPL+S7o+eggScsXHJcbiAgICAgICAgaW5wdXRfZm9ybWF0OiAnLScsXHJcbiAgICAgICAgb3V0cHV0X2Zvcm1hdDogKCkgPT4gKFxyXG4gICAgICAgICAgPFJhZGlvR3JvdXAgbmFtZT1cIueUn+aViOaWueW8jy/ku6PnoIFcIj5cclxuICAgICAgICAgICAgPFJhZGlvIHZhbHVlPVwiMVwiPjA8L1JhZGlvPlxyXG4gICAgICAgICAgICA8UmFkaW8gdmFsdWU9XCIyXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwi5YW25LuWXCIgc3R5bGU9e3sgd2lkdGg6IDg1IH19IC8+XHJcbiAgICAgICAgICAgIDwvUmFkaW8+XHJcbiAgICAgICAgICA8L1JhZGlvR3JvdXA+XHJcbiAgICAgICAgKSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG9yZGVyOiA0LFxyXG4gICAgICAgIGZpZWxkOiAn5pON5L2c57G75Z6L5Luj56CBJyxcclxuICAgICAgICBpbnB1dF9mb3JtYXQ6ICctJyxcclxuICAgICAgICBvdXRwdXRfZm9ybWF0OiAoKSA9PiAoXHJcbiAgICAgICAgICA8UmFkaW9Hcm91cCBuYW1lPVwi5pON5L2c57G75Z6L5Luj56CBXCI+XHJcbiAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT1cIjFcIj5OPC9SYWRpbz5cclxuICAgICAgICAgICAgPFJhZGlvIHZhbHVlPVwiMlwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIuWFtuS7llwiIHN0eWxlPXt7IHdpZHRoOiA4NSB9fSAvPlxyXG4gICAgICAgICAgICA8L1JhZGlvPlxyXG4gICAgICAgICAgPC9SYWRpb0dyb3VwPlxyXG4gICAgICAgICksXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBvcmRlcjogNSxcclxuICAgICAgICBmaWVsZDogJ+Wkh+azqCcsXHJcbiAgICAgICAgaW5wdXRfZm9ybWF0OiAnLScsXHJcbiAgICAgICAgb3V0cHV0X2Zvcm1hdDogKCkgPT4gPFRleHRBcmVhIHJvd3M9XCIyXCIgLz4sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBvcmRlcjogNixcclxuICAgICAgICBmaWVsZDogJ+mZhOWKoOWxnuaAp+e8lueggScsXHJcbiAgICAgICAgaW5wdXRfZm9ybWF0OiAnLScsXHJcbiAgICAgICAgb3V0cHV0X2Zvcm1hdDogKCkgPT4gKFxyXG4gICAgICAgICAgPFJhZGlvR3JvdXAgbmFtZT1cIumZhOWKoOWxnuaAp+e8lueggVwiPlxyXG4gICAgICAgICAgICA8UmFkaW8gdmFsdWU9XCIxXCI+56m6PC9SYWRpbz5cclxuICAgICAgICAgICAgPFJhZGlvIHZhbHVlPVwiMlwiPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIuWFtuS7llwiIHN0eWxlPXt7IHdpZHRoOiA4NSB9fSAvPlxyXG4gICAgICAgICAgICA8L1JhZGlvPlxyXG4gICAgICAgICAgPC9SYWRpb0dyb3VwPlxyXG4gICAgICAgICksXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgY29sdW1uczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICfluo/lj7cnLFxyXG4gICAgICAgIGRhdGFJbmRleDogJ29yZGVyJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAn5a2X5q61JyxcclxuICAgICAgICBkYXRhSW5kZXg6ICdmaWVsZCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ0Hnsbvmlofku7bovpPlhaXmoLzlvI8nLFxyXG4gICAgICAgIGRhdGFJbmRleDogJ2lucHV0X2Zvcm1hdCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ+i+k+WHuuagvOW8jycsXHJcbiAgICAgICAgZGF0YUluZGV4OiAnb3V0cHV0X2Zvcm1hdCcsXHJcbiAgICAgICAgcmVuZGVyOiBDb21wID0+IDxDb21wIC8+LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIGV4YW1wbGU6IHtcclxuICAgICAgaW5wdXQ6ICcxMzkxMjM0NTY3OHxKWVBUNzUwLjE4MDExMjgyMzA4NC4wJyxcclxuICAgICAgb3V0cHV0OlxyXG4gICAgICAgICcxMzkxMjM0NTY3OHxKWVBUNzUwLjE4MDExMjgyMzA4NC4wfDB8TnwyMDE4ODY0MuWQtOaMr+aYjjE45bm05LiA5a2j5bqm5rWB6YeP77yI5a2Y6YeP77yJ6JCl6ZSA5LyY5oOg5rS75YqoMuaciOWkluWRvOWll+mkkOi/gei9rOWPiuWNh+e6p3znqbonLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIOaJuemHj+WkmuWxguS6p+WTgeiuoui0remAgOiuojoge1xyXG4gICAgb3BlcnRhaW9uX3R5cGU6IDcsXHJcbiAgICBkYXRhU291cmNlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBvcmRlcjogMSxcclxuICAgICAgICBmaWVsZDogJ+eUteivneWPt+eggScsXHJcbiAgICAgICAgaW5wdXRfZm9ybWF0OiAn55S16K+d5Y+356CBJyxcclxuICAgICAgICBvdXRwdXRfZm9ybWF0OiAoKSA9PiA8c3Bhbj7mjIlB57G75paH5Lu25omL5py65Y+356CBPC9zcGFuPixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG9yZGVyOiAyLFxyXG4gICAgICAgIGZpZWxkOiAn55So5oi35Li75L2T5Lqn5ZOBSUQnLFxyXG4gICAgICAgIGlucHV0X2Zvcm1hdDogJ+eUqOaIt+S4u+S9k+S6p+WTgUlEJyxcclxuICAgICAgICBvdXRwdXRfZm9ybWF0OiAoKSA9PiA8c3Bhbj7mjIlB57G75paH5Lu25Lqn5ZOB5Li75L2TSUQ8L3NwYW4+LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgb3JkZXI6IDMsXHJcbiAgICAgICAgZmllbGQ6ICfkuqflk4Hnu5PmnoTmj4/ov7AnLFxyXG4gICAgICAgIGlucHV0X2Zvcm1hdDogJ+S6p+WTgee7k+aehOaPj+i/sCcsXHJcbiAgICAgICAgb3V0cHV0X2Zvcm1hdDogKCkgPT4gPHNwYW4+5oyJQeexu+aWh+S7tuS6p+WTgee7k+aehOaPj+i/sDwvc3Bhbj4sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBvcmRlcjogNCxcclxuICAgICAgICBmaWVsZDogJ+e8tOi0ueaWueW8jycsXHJcbiAgICAgICAgaW5wdXRfZm9ybWF0OiAnLScsXHJcbiAgICAgICAgb3V0cHV0X2Zvcm1hdDogKCkgPT4gKFxyXG4gICAgICAgICAgPFJhZGlvR3JvdXAgbmFtZT1cIue8tOi0ueaWueW8j1wiPlxyXG4gICAgICAgICAgICA8UmFkaW8gdmFsdWU9XCIxXCI+Y2FzaDwvUmFkaW8+XHJcbiAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT1cIjJcIj5cclxuICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCLlhbbku5ZcIiBzdHlsZT17eyB3aWR0aDogODUgfX0gLz5cclxuICAgICAgICAgICAgPC9SYWRpbz5cclxuICAgICAgICAgIDwvUmFkaW9Hcm91cD5cclxuICAgICAgICApLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgb3JkZXI6IDUsXHJcbiAgICAgICAgZmllbGQ6ICdQT1PmtYHmsLTlj7cnLFxyXG4gICAgICAgIGlucHV0X2Zvcm1hdDogJy0nLFxyXG4gICAgICAgIG91dHB1dF9mb3JtYXQ6ICgpID0+IDxJbnB1dCAvPixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG9yZGVyOiA2LFxyXG4gICAgICAgIGZpZWxkOiAn5byA5oi36ZO26KGMJyxcclxuICAgICAgICBpbnB1dF9mb3JtYXQ6ICctJyxcclxuICAgICAgICBvdXRwdXRfZm9ybWF0OiAoKSA9PiAoXHJcbiAgICAgICAgICA8UmFkaW9Hcm91cCBuYW1lPVwi5byA5oi36ZO26KGMXCI+XHJcbiAgICAgICAgICAgIDxSYWRpbyB2YWx1ZT1cIjFcIj7nqbo8L1JhZGlvPlxyXG4gICAgICAgICAgICA8UmFkaW8gdmFsdWU9XCIyXCI+XHJcbiAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwi5YW25LuWXCIgc3R5bGU9e3sgd2lkdGg6IDg1IH19IC8+XHJcbiAgICAgICAgICAgIDwvUmFkaW8+XHJcbiAgICAgICAgICA8L1JhZGlvR3JvdXA+XHJcbiAgICAgICAgKSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG9yZGVyOiA3LFxyXG4gICAgICAgIGZpZWxkOiAn5pSv56Wo5Y+3JyxcclxuICAgICAgICBpbnB1dF9mb3JtYXQ6ICctJyxcclxuICAgICAgICBvdXRwdXRfZm9ybWF0OiAoKSA9PiA8SW5wdXQgLz4sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBvcmRlcjogOCxcclxuICAgICAgICBmaWVsZDogJ+WunumZheaUtuWPlumHkeminScsXHJcbiAgICAgICAgaW5wdXRfZm9ybWF0OiAnLScsXHJcbiAgICAgICAgb3V0cHV0X2Zvcm1hdDogKCkgPT4gPElucHV0IGRlZmF1bHRWYWx1ZT1cIjBcIiAvPixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG9yZGVyOiA5LFxyXG4gICAgICAgIGZpZWxkOiAn5aSH5rOoJyxcclxuICAgICAgICBpbnB1dF9mb3JtYXQ6ICctJyxcclxuICAgICAgICBvdXRwdXRfZm9ybWF0OiAoKSA9PiA8VGV4dEFyZWEgcm93PXsyfSAvPixcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBjb2x1bW5zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0aXRsZTogJ+W6j+WPtycsXHJcbiAgICAgICAgZGF0YUluZGV4OiAnb3JkZXInLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGl0bGU6ICflrZfmrrUnLFxyXG4gICAgICAgIGRhdGFJbmRleDogJ2ZpZWxkJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAnQeexu+aWh+S7tui+k+WFpeagvOW8jycsXHJcbiAgICAgICAgZGF0YUluZGV4OiAnaW5wdXRfZm9ybWF0JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRpdGxlOiAn6L6T5Ye65qC85byPJyxcclxuICAgICAgICBkYXRhSW5kZXg6ICdvdXRwdXRfZm9ybWF0JyxcclxuICAgICAgICByZW5kZXI6IENvbXAgPT4gPENvbXAgLz4sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgZXhhbXBsZToge1xyXG4gICAgICBpbnB1dDogJzEzOTEyMzQ1Njc4fEpZUFQ3NTAuMTgwMTEyODIyMDg0LjAnLFxyXG4gICAgICBvdXRwdXQ6ICcxMzkxMjM0NTY3OHxKWVBUNzUwLjE4MDExMjgyMzA4NC4wfENhc2h8fHx8MHwnLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5Ab2JzZXJ2ZXJcclxuY2xhc3MgQ3JlYXRlRmlsZUIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCB7IHZpc2libGUsIHNldFZpc2libGUsIHdmX2lkLCBmb3JtIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9wcyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhmb3JtKTtcclxuICAgIGxldCBmaWxlQlZpc2libGUgPSB2aXNpYmxlLmZpbGVfYjtcclxuICAgIGxldCB0eXBlID0gc3RvcmUudHlwZTtcclxuICAgIGxldCB7IGRhdGFTb3VyY2UsIGNvbHVtbnMsIGV4YW1wbGUgPSB7fSB9ID0gYWxsVHlwZXNbdHlwZV07XHJcbiAgICBsZXQgTW9kYWxGb290ZXIgPSAoKSA9PiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFZpc2libGUoZmFsc2UpfT7lj5bmtog8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gdGhpcy5jcmVhdGVCKCl9PlxyXG4gICAgICAgICAg56Gu6K6kXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdmlzaWJsZT17ZmlsZUJWaXNpYmxlfVxyXG4gICAgICAgIHRpdGxlPVwi5Yib5bu6Quexu+aWh+S7tlwiXHJcbiAgICAgICAgZm9vdGVyPXs8TW9kYWxGb290ZXIgLz59XHJcbiAgICAgICAgb25DYW5jZWw9eygpID0+IHNldFZpc2libGUoZmFsc2UpfVxyXG4gICAgICAgIHdpZHRoPXs4MDB9XHJcbiAgICAgID5cclxuICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCLmlYjnjocxMDDnvJblj7dcIiB7Li4uZm9ybVByb3BzfT5cclxuICAgICAgICAgICAgey8qeyovfVxyXG4gICAgICAgICAgICB7LypnZXRGaWVsZERlY29yYXRvcignd2ZfaWQnLHsqL31cclxuICAgICAgICAgICAgey8qaW5pdGlhbFZhbHVlOiB3Zl9pZCwqL31cclxuICAgICAgICAgICAgey8qcnVsZXM6IFt7Ki99XHJcbiAgICAgICAgICAgIHsvKnJlcXVpcmVkOiB0cnVlLCovfVxyXG4gICAgICAgICAgICB7LyptZXNzYWdlOiAn6K+36L6T5YWl5pWI546HMTAw57yW5Y+3JyovfVxyXG4gICAgICAgICAgICB7Lyp9XSovfVxyXG4gICAgICAgICAgICB7Lyp9KSg8SW5wdXQvPikqL31cclxuICAgICAgICAgICAgey8qfSovfVxyXG4gICAgICAgICAgICA8SW5wdXQgZGlzYWJsZWQ9e3RydWV9IGRlZmF1bHRWYWx1ZT17d2ZfaWR9IC8+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0gbGFiZWw9XCLmk43kvZznsbvlnotcIiB7Li4uZm9ybVByb3BzfT5cclxuICAgICAgICAgICAgPFNlbGVjdCBkZWZhdWx0VmFsdWU9eyfmibnlvIDlgZzlvIDmnLonfSBvbkNoYW5nZT17dGhpcy5jaGFuZ2VTZWxlY3RUeXBlfT5cclxuICAgICAgICAgICAgICB7T2JqZWN0LmtleXMoYWxsVHlwZXMpLm1hcCh0eXBlID0+IChcclxuICAgICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9e3R5cGV9IGtleT17dHlwZX0+XHJcbiAgICAgICAgICAgICAgICAgIHt0eXBlfVxyXG4gICAgICAgICAgICAgICAgPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwi6L6T5Ye65qC85byPXCIgey4uLmZvcm1Qcm9wc30+XHJcbiAgICAgICAgICAgIDxUYWJsZSBkYXRhU291cmNlPXtkYXRhU291cmNlfSBjb2x1bW5zPXtjb2x1bW5zfSBwYWdpbmF0aW9uPXtmYWxzZX0gcm93S2V5PVwib3JkZXJcIiBzaXplPXsnc21hbGwnfSAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwi6L6T5YWl56S65L6LXCIgey4uLmZvcm1Qcm9wc30+XHJcbiAgICAgICAgICAgIHtleGFtcGxlLmlucHV0fVxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPVwi6L6T5Ye656S65L6LXCIgey4uLmZvcm1Qcm9wc30+XHJcbiAgICAgICAgICAgIHtleGFtcGxlLm91dHB1dH1cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICk7XHJcbiAgfVxyXG4gIGNoYW5nZVNlbGVjdFR5cGUgPSB2YWx1ZSA9PiB7XHJcbiAgICBzdG9yZS5jaGFuZ2VUeXBlKHZhbHVlKTtcclxuICB9O1xyXG4gIGNyZWF0ZUIgPSAoKSA9PiB7XHJcbiAgICBsZXQgeyBnZXRGaWVsZHNWYWx1ZSwgZ2V0RmllbGRzRXJyb3IgfSA9IHRoaXMucHJvcHMuZm9ybTtcclxuICAgIGxldCBjYW5DcmVhdGUgPSAhaGFzRXJyb3JzKGdldEZpZWxkc0Vycm9yKCkpO1xyXG4gICAgaWYgKGNhbkNyZWF0ZSkge1xyXG4gICAgICBsZXQgdmFsdWVzID0gZ2V0RmllbGRzVmFsdWUoKTtcclxuICAgICAgbGV0IHR5cGUgPSBzdG9yZS50eXBlO1xyXG4gICAgICBsZXQgb3BlcmF0aW9uX3R5cGUgPSBhbGxUeXBlc1t0eXBlXS5vcGVydGFpb25fdHlwZTtcclxuICAgICAgbGV0IGlkID0gdGhpcy5wcm9wcy5pZDtcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICBjb25zb2xlLmxvZyh0eXBlb2Ygb3BlcmF0aW9uX3R5cGUpO1xyXG4gICAgICByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvYXBpL2NyZWF0ZV9maWxlX2InLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIG9wZXJhdGlvbl90eXBlLFxyXG4gICAgICAgICAgaWQsXHJcbiAgICAgICAgICB3b3JkMTogJycsXHJcbiAgICAgICAgICB3b3JkMjogJycsXHJcbiAgICAgICAgICB3b3JkMzogJycsXHJcbiAgICAgICAgICB3b3JkNDogJycsXHJcbiAgICAgICAgICB3b3JkNTogJycsXHJcbiAgICAgICAgICB3b3JkNjogJycsXHJcbiAgICAgICAgICB3b3JkNzogJycsXHJcbiAgICAgICAgICB3b3JkODogJycsXHJcbiAgICAgICAgICB3b3JkOTogJycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBwb3N0VHlwZTogJ2Zvcm1kYXRhJyxcclxuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wcm9wcy5zZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICAgIHRoYXQuZmV0Y2hQcm9jZXNzTGlzdCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbDogZGF0YSA9PiB7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIC8vdGhpcy5wcm9wcy5zdG9yZS5zZXRDcmVhdGVWaXNpYmxlKGZhbHNlKTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gICAgZmV0Y2hQcm9jZXNzTGlzdCA9ICgpID0+IHtcclxuICAgICAgICByZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOicvYXBpL2dldF9maWxlX2xpc3QnLFxyXG4gICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgIGlkOnRoaXMucHJvcHMuaWQsXHJcbiAgICAgICAgICAgICAgICBrZXl3b3JkOicnLFxyXG4gICAgICAgICAgICAgICAgZmlsZV90eXBlOicnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAoe3RhYmxlfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3RvcmUyLnNldFByb2Nlc3NMaXN0KHRhYmxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9fVxyXG5leHBvcnQgZGVmYXVsdCBGb3JtLmNyZWF0ZSgpKENyZWF0ZUZpbGVCKTtcclxuIiwiaW1wb3J0IHsgb2JzZXJ2YWJsZSwgYWN0aW9uIH0gZnJvbSAnbW9ieCc7XHJcbmNsYXNzIFN0b3JlIHtcclxuICBAb2JzZXJ2YWJsZSB0eXBlID0gJ+aJueW8gOWBnOW8gOacuic7XHJcbiAgQGFjdGlvblxyXG4gIGNoYW5nZVR5cGUodHlwZSl7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gIH1cclxuIEBvYnNlcnZhYmxlIHdmX2lkID0ge1xyXG5cclxuIH1cclxuIEBhY3Rpb25cclxuICBzZXRXZl9pZCh3Zl9pZil7XHJcbiAgICB0aGlzLndmX2lkID0gd2ZfaWY7XHJcbiB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbmV3IFN0b3JlKCk7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTW9kYWwsIFRhYmxlLCBDaGVja2JveCwgQnV0dG9uLCBMaXN0LCBGb3JtIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcclxuaW1wb3J0IHN0b3JlMiBmcm9tIFwiLi4vcHJvY2Vzcy9zdG9yZVwiO1xyXG5pbXBvcnQgeyBvYnNlcnZlciB9IGZyb20gJ21vYngtcmVhY3QnO1xyXG5pbXBvcnQgZXhwb3J0RmlsZSBmcm9tICcuLi8uLi9oZWxwZXJzL2V4cG9ydC1maWxlJztcclxuaW1wb3J0IGhhc0Vycm9ycyBmcm9tIFwiLi4vLi4vaGVscGVycy9oYXMtZXJyb3JzXCI7XHJcbmltcG9ydCByZXF1ZXN0IGZyb20gXCIuLi8uLi9oZWxwZXJzL3JlcXVlc3RcIjtcclxubGV0IGZpbGVfdHlwZSA9IFsn5YWo6YOoJywgJ0Hnsbvmlofku7YnLCAnQuexu+aWh+S7ticsICdD57G75paH5Lu2JywgJ0Tnsbvmlofku7YnLCAnReexu+aWh+S7tiddO1xyXG5Ab2JzZXJ2ZXJcclxuY2xhc3MgQ3JlYXRlRmlsZUMgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbHVtbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn57yW5Y+3JyxcclxuICAgICAgZGF0YUluZGV4OiAnbnVtYmVyJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn5Yib5bu65Lq6JyxcclxuICAgICAgZGF0YUluZGV4OiAndXNlcicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ+WIm+W7uuaXtumXtCcsXHJcbiAgICAgIGRhdGFJbmRleDogJ2NyZWF0ZV90aW1lJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn5paH5Lu257G75Z6LJyxcclxuICAgICAgZGF0YUluZGV4OiAnZmlsZV90eXBlJyxcclxuICAgICAgcmVuZGVyOiB0ZXh0ID0+IHtcclxuICAgICAgICByZXR1cm4gPHNwYW4+e2ZpbGVfdHlwZVt0ZXh0XX08L3NwYW4+O1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfmiZPlvIDpmYTku7YnLFxyXG4gICAgICBkYXRhSW5kZXg6ICdmaWxlX25hbWUnLFxyXG4gICAgICByZW5kZXI6ICh0ZXh0LCByZWNvcmQpID0+IChcclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRXhwb3J0RmlsZShyZWNvcmQuZmlsZV9pZCl9Pnt0ZXh0fTwvYT5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICksXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ+mAieaLqeavlOWvuScsXHJcbiAgICAgIGRhdGFJbmRleDogJycsXHJcbiAgICAgIHJlbmRlcjogKHRleHQsIHJlY29yZCkgPT4ge1xyXG4gICAgICAgIHJldHVybiA8Q2hlY2tib3ggb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVDaGVja0NoYW5nZShlLCByZWNvcmQpfSAvPjtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgXTtcclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgeyB2aXNpYmxlLCBzZXRWaXNpYmxlLCBkYXRhU291cmNlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgbGV0IHsgZmlsZV9pZCB9ID0gZGF0YVNvdXJjZTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGFTb3VyY2UpO1xyXG4gICAgbGV0IGZpbGVDVmlzaWJsZSA9IHZpc2libGUuZmlsZV9jO1xyXG4gICAgbGV0IEZvb3RlciA9ICgpID0+IChcclxuICAgICAgPGZvb3RlciBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcgfX0+XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e3RoaXMuY3JlYXRlQ30+5omn6KGM5q+U5a+5PC9CdXR0b24+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgKTtcclxuICAgIGxldCBNb2RhbEZvb3RlciA9ICgpID0+IChcclxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZShmYWxzZSl9PuWPlua2iDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBzZXRWaXNpYmxlKGZhbHNlKX0+XHJcbiAgICAgICAgICDnoa7orqRcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICB2aXNpYmxlPXtmaWxlQ1Zpc2libGV9XHJcbiAgICAgICAgdGl0bGU9XCLliJvlu7pD57G75paH5Lu2XCJcclxuICAgICAgICB3aWR0aD17ODAwfVxyXG4gICAgICAgIGZvb3Rlcj17PE1vZGFsRm9vdGVyIC8+fVxyXG4gICAgICAgIG9uQ2FuY2VsPXsoKSA9PiBzZXRWaXNpYmxlKGZhbHNlKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxUYWJsZVxyXG4gICAgICAgICAgdGl0bGU9eygpID0+IChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yMTVcIj7mlYjnjocxMDDnvJblj7fvvJp7dGhpcy5wcm9wcy53Zl9pZH08L3NwYW4+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxyXG4gICAgICAgICAgY29sdW1ucz17dGhpcy5jb2x1bW5zfVxyXG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgIGJvcmRlcmVkPXtmYWxzZX1cclxuICAgICAgICAgIGZvb3Rlcj17Rm9vdGVyfVxyXG4gICAgICAgICAgcm93S2V5PVwiZmlsZV9pZFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgIGhlYWRlcj17PGRpdj7mr5Tlr7nnu5Pmnpw8L2Rpdj59XHJcbiAgICAgICAgICBib3JkZXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICBsb2NhbGU9e3sgZW1wdHlUZXh0OiAnJyB9fVxyXG4gICAgICAgICAgZGF0YVNvdXJjZT17W119XHJcbiAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IDxMaXN0Lkl0ZW0+e2l0ZW19PC9MaXN0Lkl0ZW0+fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICApO1xyXG4gIH1cclxuICBoYW5kbGVDaGVja0NoYW5nZSA9IChlLCByZWNvcmQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHJlY29yZCk7XHJcbiAgICBsZXQgeyBmaWxlX2lkIH0gPSByZWNvcmQ7XHJcbiAgICBsZXQgeyBmaWxlX2lkcyB9ID0gc3RvcmU7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhmaWxlX2lkKTtcclxuICAgIGxldCBhbGxGaWxlX0lkcyA9IEFycmF5LmZyb20oZmlsZV9pZHMpO1xyXG4gICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgIGFsbEZpbGVfSWRzLnB1c2goZmlsZV9pZCk7XHJcbiAgICB9IGVsc2V7XHJcbiAgICAgICAgICBhbGxGaWxlX0lkcy5zcGxpY2UoYWxsRmlsZV9JZHMuaW5kZXhPZihmaWxlX2lkKSwgMSk7XHJcbiAgICB9XHJcbiAgICBzdG9yZS5zZXRGaWxlSWRzKGFsbEZpbGVfSWRzKTtcclxuICAgIGNvbnNvbGUubG9nKGFsbEZpbGVfSWRzKTtcclxuICAgIGNvbnNvbGUubG9nKGZpbGVfaWRzKTtcclxuICB9O1xyXG4gIGhhbmRsZUV4cG9ydEZpbGUgPSBmaWxlX2lkID0+IHtcclxuICAgIGxldCB7IGlkIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgZXhwb3J0RmlsZSh7XHJcbiAgICAgIHVybDogJy9hcGkvZ2V0X2ZpbGUnLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgIGZpbGVfaWQ6IGZpbGVfaWQsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNyZWF0ZUMgPSAoKT0+e1xyXG4gICAgICBsZXQgeyBnZXRGaWVsZHNWYWx1ZSwgZ2V0RmllbGRzRXJyb3IgfSA9dGhpcy5wcm9wcy5mb3JtO1xyXG4gICAgICBsZXQgY2FuQ3JlYXRlID0gIWhhc0Vycm9ycyhnZXRGaWVsZHNFcnJvcigpKTtcclxuICAgICAgaWYoY2FuQ3JlYXRlKXtcclxuICAgICAgICAgIGxldCB2YWx1ZXMgPSBnZXRGaWVsZHNWYWx1ZSgpO1xyXG4gICAgICAgICAgbGV0IHtmaWxlX2lkc30gPSBzdG9yZTtcclxuICAgICAgICAgIGxldCBpZCA9IHRoaXMucHJvcHMuaWQ7XHJcbiAgICAgICAgICBsZXQgYWxsX2lkcyA9IGZpbGVfaWRzLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhmaWxlX2lkcyk7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0eXBlb2YgKG9wZXJhdGlvbl90eXBlKSk7XHJcbiAgICAgICAgcmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDonL2FwaS9jcmVhdGVfZmlsZV9jJyxcclxuICAgICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICAgIGZpbGVfaWRzOiBhbGxfaWRzXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mZXRjaFByb2Nlc3NMaXN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gIH1cclxufVxyXG4gICAgZmV0Y2hQcm9jZXNzTGlzdCA9ICgpID0+IHtcclxuICAgICAgICByZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOicvYXBpL2dldF9maWxlX2xpc3QnLFxyXG4gICAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgICAgIGlkOnRoaXMucHJvcHMuaWQsXHJcbiAgICAgICAgICAgICAgICBrZXl3b3JkOicnLFxyXG4gICAgICAgICAgICAgICAgZmlsZV90eXBlOicnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAoe3RhYmxlfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3RvcmUyLnNldFByb2Nlc3NMaXN0KHRhYmxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRm9ybS5jcmVhdGUoKShDcmVhdGVGaWxlQyk7XHJcbiIsImltcG9ydCB7IG9ic2VydmFibGUsIGFjdGlvbn0gZnJvbSAnbW9ieCc7XHJcbmNsYXNzIFN0b3Jle1xyXG4gICAgQG9ic2VydmFibGUgZmlsZV9pZHMgPSBbXTtcclxuICAgIEBhY3Rpb25cclxuICAgIHNldEZpbGVJZHModmFsdWUpe1xyXG4gICAgICAgIHRoaXMuZmlsZV9pZHMgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIC8vIEBjb21wdXRlZFxyXG4gICAgLy8gZ2V0IGZpbGVJZHMoKXtcclxuICAgIC8vICAgICBsZXQgYWxsRmlsZV9pZHMgPSBbXTtcclxuICAgIC8vICAgICB0aGlzLmZpbGVfaWRzLm1hcChmaWxlID0+IHtcclxuICAgIC8vICAgICAgICAgYWxsRmlsZV9pZHMucHVzaChmaWxlLmZpbGVfaWQpO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gICAgIHJldHVybiB7XHJcbiAgICAvLyAgICAgICAgIGZpbGVfaWRzOiBBcnJheS5mcm9tKG5ldyBTZXQoYWxsRmlsZV9pZHMpKVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgU3RvcmUoKSIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNb2RhbCwgRm9ybSwgU2VsZWN0LCBVcGxvYWQsIEJ1dHRvbiwgVGFibGUgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4uLy4uL2hlbHBlcnMvcmVxdWVzdFwiO1xyXG5pbXBvcnQgaGFzRXJyb3JzIGZyb20gXCIuLi8uLi9oZWxwZXJzL2hhcy1lcnJvcnNcIjtcclxuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9wcm9jZXNzL3N0b3JlXCI7XHJcbmxldCBPcHRpb24gPSBTZWxlY3QuT3B0aW9uO1xyXG5sZXQgZm9ybVByb3BzID0ge1xyXG4gIGxhYmVsQ29sOiB7XHJcbiAgICBzcGFuOiA0LFxyXG4gICAgZ3V0dGVyOiAxNlxyXG4gIH0sXHJcbiAgd3JhcHBlckNvbDoge1xyXG4gICAgc3BhbjogMTgsXHJcbiAgICBndXR0ZXI6IDE2XHJcbiAgfVxyXG59O1xyXG5sZXQgc3RhbmRhcmRzID0ge1xyXG4gIGlucHV0OiB7XHJcbiAgICBkYXRhU291cmNlOiBbe1xyXG4gICAgICBwaG9uZTogJzEyMzQ1Njc4OTAnLFxyXG4gICAgICBjb2RlOiAnLScsXHJcbiAgICAgIG9wZXJhdGVfdGltZTogJy0nLFxyXG4gICAgICByZXN1bHQ6ICdTVUNDRVNTJyxcclxuICAgICAgZXJyb3I6ICfml6AnXHJcbiAgICB9LCB7XHJcbiAgICAgIHBob25lOiAnMTIzNDU2Nzg5MCcsXHJcbiAgICAgIGNvZGU6ICctJyxcclxuICAgICAgb3BlcmF0ZV90aW1lOiAnLScsXHJcbiAgICAgIHJlc3VsdDogJy0nLFxyXG4gICAgICBlcnJvcjogJ+S4jeespuWQiOadoeS7tidcclxuICAgIH1dLFxyXG4gICAgY29sdW1uczogW3tcclxuICAgICAgdGl0bGU6ICflj7fnoIEnLFxyXG4gICAgICBkYXRhSW5kZXg6ICdwaG9uZSdcclxuICAgIH0sIHtcclxuICAgICAgdGl0bGU6ICfokKXplIDmlrnmoYjnvJbnoIEnLFxyXG4gICAgICBkYXRhSW5kZXg6ICdjb2RlJ1xyXG4gICAgfSwge1xyXG4gICAgICB0aXRsZTogJ+aTjeS9nOaXtumXtCcsXHJcbiAgICAgIGRhdGFJbmRleDogJ29wZXJhdGVfdGltZSdcclxuICAgIH0sIHtcclxuICAgICAgdGl0bGU6ICfnu5PmnpwnLFxyXG4gICAgICBkYXRhSW5kZXg6ICdyZXN1bHQnXHJcbiAgICB9LCB7XHJcbiAgICAgIHRpdGxlOiAn5aSx6LSl5Y6f5ZugJyxcclxuICAgICAgZGF0YUluZGV4OiAnZXJyb3InXHJcbiAgICB9XVxyXG4gIH0sXHJcbiAgb3V0cHV0OiB7XHJcbiAgICBkYXRhU291cmNlOiBbe1xyXG4gICAgICBvcmRlcjogMSxcclxuICAgICAgcGhvbmU6IDEyMzQ1Njc4OTAsXHJcbiAgICAgIGNvZGU6ICcnLFxyXG4gICAgICBvcGVyYXRlX3RpbWU6ICcnLFxyXG4gICAgICByZXN1bHQ6ICfmiJDlip8nLFxyXG4gICAgICBlcnJvcjogJ+aXoCdcclxuICAgIH0sIHtcclxuICAgICAgb3JkZXI6IDIsXHJcbiAgICAgIHBob25lOiAxMjM0NTY3ODkwLFxyXG4gICAgICBjb2RlOiAnJyxcclxuICAgICAgb3BlcmF0ZV90aW1lOiAnJyxcclxuICAgICAgcmVzdWx0OiAn5aSx6LSlJyxcclxuICAgICAgZXJyb3I6ICfkuI3nrKblkIjmnaHku7YnXHJcbiAgICB9XSxcclxuICAgIGNvbHVtbnM6IFt7XHJcbiAgICAgIHRpdGxlOiAn5bqP5Y+3JyxcclxuICAgICAgZGF0YUluZGV4OiAnb3JkZXInXHJcbiAgICB9LCB7XHJcbiAgICAgIHRpdGxlOiAn5Y+356CBJyxcclxuICAgICAgZGF0YUluZGV4OiAncGhvbmUnLFxyXG4gICAgfSwge1xyXG4gICAgICB0aXRsZTogJ+iQpemUgOaWueahiOe8lueggScsXHJcbiAgICAgIGRhdGFJbmRleDogJ2NvZGUnXHJcbiAgICB9LCB7XHJcbiAgICAgIHRpdGxlOiAn5pON5L2c5pe26Ze0JyxcclxuICAgICAgZGF0YUluZGV4OiAnb3BlcmF0ZV90aW1lJ1xyXG4gICAgfSwge1xyXG4gICAgICB0aXRsZTogJ+e7k+aenCcsXHJcbiAgICAgIGRhdGFJbmRleDogJ3Jlc3VsdCdcclxuICAgIH0sIHtcclxuICAgICAgdGl0bGU6ICflpLHotKXljp/lm6AnLFxyXG4gICAgICBkYXRhSW5kZXg6ICdlcnJvcidcclxuICAgIH1dXHJcbiAgfVxyXG59O1xyXG5sZXQgdGFibGVQcm9wcyA9IHtcclxuICBzaXplOiAnc21hbGwnLFxyXG4gIHBhZ2luYXRpb246IGZhbHNlXHJcbn1cclxuY2xhc3MgQ3JlYXRlRmlsZUUgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBmaWxlTGlzdDogW11cclxuICAgIH07XHJcbiAgICB1cGxvYWRQcm9wczIgPSB7XHJcbiAgICAgICAgb25DaGFuZ2U6ICh7ZmlsZUxpc3R9KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZmlsZUxpc3RcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJlZm9yZVVwbG9hZDogKCkgPT4gZmFsc2UsXHJcbiAgICAgICAgb25SZW1vdmU6ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5mb3JtLnNldEZpZWxkc1ZhbHVlKHtcclxuICAgICAgICAgICAgICAgIGZpbGU6IG51bGxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgZmlsZUxpc3Q6IFtdXHJcbiAgICAgICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZm9ybS52YWxpZGF0ZUZpZWxkcygpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgcmVuZGVyKCl7XHJcbiAgICBsZXQgeyB2aXNpYmxlLCBzZXRWaXNpYmxlLCBmb3JtIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgLy8gY29uc29sZS5sb2coZm9ybSk7XHJcbiAgICBsZXQgeyBnZXRGaWVsZERlY29yYXRvciB9ID0gZm9ybTtcclxuICAgIGxldCB7ZmlsZUxpc3R9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGxldCBmaWxlRVZpc2libGUgPSB2aXNpYmxlLmZpbGVfZTtcclxuICAgICAgbGV0IE1vZGFsRm9vdGVyID0gKCkgPT4gKFxyXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZShmYWxzZSl9PuWPlua2iDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT0ncHJpbWFyeScgb25DbGljaz17dGhpcy5jcmVhdGVFfT7noa7orqQ8L0J1dHRvbj5cclxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TW9kYWwgdGl0bGU9J+WIm+W7ukXnsbvmlofku7YnIHZpc2libGU9e2ZpbGVFVmlzaWJsZX0gZm9vdGVyPXs8TW9kYWxGb290ZXIvPn0gb25DYW5jZWw9eygpPT5zZXRWaXNpYmxlKGZhbHNlKX0gd2lkdGg9ezgwMH0+XHJcbiAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtIGxhYmVsPSfmlofku7bnsbvlnosnIHsuLi5mb3JtUHJvcHN9PlxyXG4gICAgICAgICAgICA8U2VsZWN0IGRlZmF1bHRWYWx1ZT0nROexu+aWh+S7tic+XHJcbiAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT0nROexu+aWh+S7tic+ROexu+aWh+S7tjwvT3B0aW9uPlxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD17PHNwYW4+PC9zcGFuPn0gY29sb249e2ZhbHNlfSB7Li4uZm9ybVByb3BzfT5cclxuICAgICAgICAgICAgey8qPFVwbG9hZD4qL31cclxuICAgICAgICAgICAgICB7Lyo8QnV0dG9uPuWvvOWFpeaWh+S7tjwvQnV0dG9uPiovfVxyXG4gICAgICAgICAgICB7Lyo8L1VwbG9hZD4qL31cclxuICAgICAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ2ZpbGUnLCB7XHJcbiAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAn6K+36YCJ5oup5paH5Lu25a+85YWlJ1xyXG4gICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgIH0pKFxyXG4gICAgICAgICAgICAgICAgICA8VXBsb2FkIHsuLi50aGlzLnVwbG9hZFByb3BzMn0gZmlsZUxpc3Q9e2ZpbGVMaXN0fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAg6YCJ5oup5paH5Lu2XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9VcGxvYWQ+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD0n6L6T5YWl5qC85byPJyB7Li4uZm9ybVByb3BzfT5cclxuICAgICAgICAgICAgPFRhYmxlIHsuLi5zdGFuZGFyZHMuaW5wdXR9ey4uLnRhYmxlUHJvcHN9Lz5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD0n6L6T5Ye65qC85byPJyB7Li4uZm9ybVByb3BzfT5cclxuICAgICAgICAgICAgPFRhYmxlIHsuLi5zdGFuZGFyZHMub3V0cHV0fSB7Li4udGFibGVQcm9wc30vPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgKVxyXG4gIH1cclxuICBjcmVhdGVFID0gKCk9PntcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xyXG4gICAgICBsZXQge2lkfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGlkKTtcclxuICAgICAgbGV0IHtnZXRGaWVsZHNWYWx1ZSwgZ2V0RmllbGRzRXJyb3J9ID0gdGhpcy5wcm9wcy5mb3JtO1xyXG4gICAgICBsZXQgY2FuQ3JlYXRlID0gIWhhc0Vycm9ycyhnZXRGaWVsZHNFcnJvcigpKTtcclxuICAgICAgaWYgKGNhbkNyZWF0ZSkge1xyXG4gICAgICAgICAgbGV0IHZhbHVlcyA9IGdldEZpZWxkc1ZhbHVlKCk7XHJcbiAgICAgICAgICBsZXQgZmlsZUxpc3QxID0gdmFsdWVzLmZpbGUuZmlsZUxpc3RbMF07XHJcbiAgICAgICAgICBsZXQgZmlsZUxpc3QyID0gdmFsdWVzLmZpbGUuZmlsZUxpc3RbMV07XHJcbiAgICAgICAgICAvLyBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsZmlsZUxpc3QxKTtcclxuICAgICAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsZmlsZUxpc3QyKTtcclxuICAgICAgICAgIC8vIGZvcm1EYXRhLmFwcGVuZCgnaWQnLGlkKTtcclxuICAgICAgICAgIHJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgIHVybDogJy9hcGkvY3JlYXRlX2ZpbGVfZScsXHJcbiAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICAgICAgZmlsZTogdmFsdWVzLmZpbGUuZmlsZUxpc3QsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBwb3N0VHlwZTogJ2Zvcm1kYXRhJyxcclxuICAgICAgICAgICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNldFZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmZldGNoUHJvY2Vzc0xpc3QoKTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGZhaWw6IChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAvLyB0aGlzLnByb3BzLnN0b3JlLnNldENyZWF0ZVZpc2libGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgIH1cclxuICB9XHJcbiAgICBmZXRjaFByb2Nlc3NMaXN0ID0gKCkgPT4ge1xyXG4gICAgICAgIHJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6Jy9hcGkvZ2V0X2ZpbGVfbGlzdCcsXHJcbiAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgaWQ6dGhpcy5wcm9wcy5pZCxcclxuICAgICAgICAgICAgICAgIGtleXdvcmQ6JycsXHJcbiAgICAgICAgICAgICAgICBmaWxlX3R5cGU6JycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6ICh7dGFibGV9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdG9yZS5zZXRQcm9jZXNzTGlzdCh0YWJsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZvcm0uY3JlYXRlKCkoQ3JlYXRlRmlsZUUpOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1vZGFsLCBUYWJsZSwgQ2hlY2tib3gsIEJ1dHRvbiwgRm9ybSwgSW5wdXQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vLi4vaGVscGVycy9yZXF1ZXN0JztcclxubGV0IGZpbGVfdHlwZSA9IFsn5YWo6YOoJywgJ0Hnsbvmlofku7YnLCAnQuexu+aWh+S7ticsICdD57G75paH5Lu2JywgJ0Tnsbvmlofku7YnLCAnReexu+aWh+S7tiddO1xyXG5jbGFzcyBwYXJ0aXRpb25GaWxlQiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29sdW1ucyA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfnvJblj7cnLFxyXG4gICAgICBkYXRhSW5kZXg6ICdudW1iZXInLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfliJvlu7rkuronLFxyXG4gICAgICBkYXRhSW5kZXg6ICd1c2VyJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn5Yib5bu65pe26Ze0JyxcclxuICAgICAgZGF0YUluZGV4OiAnY3JlYXRlX3RpbWUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICfmlofku7bnsbvlnosnLFxyXG4gICAgICBkYXRhSW5kZXg6ICdmaWxlX3R5cGUnLFxyXG4gICAgICByZW5kZXI6IHRleHQgPT4ge1xyXG4gICAgICAgIHJldHVybiA8c3Bhbj57ZmlsZV90eXBlW3RleHRdfTwvc3Bhbj47XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ+aJk+W8gOmZhOS7ticsXHJcbiAgICAgIGRhdGFJbmRleDogJ2ZpbGVfbmFtZScsXHJcbiAgICAgIHJlbmRlcjogKHRleHQsIHJlY29yZCkgPT4gKFxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVFeHBvcnRGaWxlKHJlY29yZC5maWxlX2lkKX0+e3RleHR9PC9hPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgKSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn5YiG5YmyJyxcclxuICAgICAgZGF0YUluZGV4OiAnJyxcclxuICAgICAgcmVuZGVyOiAodGV4dCwgcmVjb3JkKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIDxDaGVja2JveCBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUNoZWNrQ2hhbmdlKGUsIHJlY29yZCl9IC8+O1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICBdO1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCB7IHZpc2libGUsIHNldFZpc2libGUsIGZvcm0sIGRhdGFTb3VyY2UgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBsZXQgeyBpc0ZpZWxkVG91Y2hlZCwgZ2V0RmllbGRFcnJvciwgZ2V0RmllbGREZWNvcmF0b3IgfSA9IGZvcm07XHJcbiAgICAvLyBsZXQgcGFydGl0aW9uX3Jvd0Vycm9yID0gaXNGaWVsZFRvdWNoZWQoJ3BhcnRpdGlvbl9yb3cnKSAmJiBnZXRGaWVsZEVycm9yKCdwYXJ0aXRpb25fcm93Jyk7XHJcbiAgICBsZXQgcGFydGl0aW9uID0gdmlzaWJsZS5wYXJ0aXRpb247XHJcbiAgICBkYXRhU291cmNlLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5maWxlX3R5cGUgPT0gMik7XHJcbiAgICBsZXQgTW9kYWxGb290ZXIgPSAoKSA9PiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFZpc2libGUoZmFsc2UpfT7lj5bmtog8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZShmYWxzZSl9PlxyXG4gICAgICAgICAg56Gu6K6kXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdmlzaWJsZT17cGFydGl0aW9ufVxyXG4gICAgICAgIHRpdGxlPVwi5YiG5YmyQuexu+aWh+S7tlwiXHJcbiAgICAgICAgd2lkdGg9ezYwMH1cclxuICAgICAgICBvbkNhbmNlbD17KCkgPT4gc2V0VmlzaWJsZShmYWxzZSl9XHJcbiAgICAgICAgZm9vdGVyPXs8TW9kYWxGb290ZXIgLz59XHJcbiAgICAgID5cclxuICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgIDxGb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDxUYWJsZVxyXG4gICAgICAgICAgICAgIHRpdGxlPXsoKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yMTVcIj7mlYjnjocxMDDnvJblj7fvvJp7dGhpcy5wcm9wcy53Zl9pZH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhU291cmNlfVxyXG4gICAgICAgICAgICAgIGNvbHVtbnM9e3RoaXMuY29sdW1uc31cclxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgIGJvcmRlcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICByb3dLZXk9XCJmaWxlX25hbWVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgPENoZWNrYm94IC8+6Ieq5Yqo5YiG5Ymy77yM5oyJ5q+P5Liq5paH5Lu2e2dldEZpZWxkRGVjb3JhdG9yKCdwYXJ0aXRpb25fcm93JywgeyBpbml0aWFsVmFsdWU6IDEwMDAgLCBydWxlczogW3tcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ+ivt+i+k+WFpeWIhuWJsuihjOaVsCdcclxuICAgICAgICAgICAgICAgICAgfV19KShcclxuICAgICAgICAgICAgICAgICAgPElucHV0IHNpemU9eydzbWFsbCd9IHN0eWxlPXt7IHdpZHRoOiA2MCB9fSAvPlxyXG4gICAgICAgICAgICAgICAgKX3ooYzliIblibIsPGJyLz48c3BhbiBzdHlsZT17e2ZvbnRTaXplOjEyfX0+77yI6Ieq5Yqo5Zyo5qCH6aKY5ZCO57yAK18wMDEs5q+U5aaC5YWz5LqO5LyY5oOg55So5oi35aWX6aSQXzAwMe+8jOWFs+S6juS8mOaDoOeUqOaIt+Wll+mkkF8wMDIpPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBGb3JtLmNyZWF0ZSgpKHBhcnRpdGlvbkZpbGVCKTtcclxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuL3Byb2Nlc3MuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi9wcm9jZXNzLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuL3Byb2Nlc3MuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnJlYWRjcnVtYiwgRm9ybSwgU2VsZWN0LCBCdXR0b24sIFRhYmxlLCBEaXZpZGVyIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IG9ic2VydmVyIH0gZnJvbSAnbW9ieC1yZWFjdCc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4vcHJvY2Vzcy5jc3MnO1xyXG5jb25zdCBPcHRpb24gPSBTZWxlY3QuT3B0aW9uO1xyXG5pbXBvcnQgaGlzdG9yeSBmcm9tICcuLi8uLi9oaXN0b3J5JztcclxuaW1wb3J0IEVkaXRCIGZyb20gJy4uL2VkaXRfYi9lZGl0X2InO1xyXG5pbXBvcnQgQ3JlYXRlRmlsZUIgZnJvbSAnLi4vZmlsZV9iL2ZpbGVfYic7XHJcbmltcG9ydCBDcmVhdGVGaWxlQyBmcm9tICcuLi9maWxlX2MvZmlsZV9jJztcclxuaW1wb3J0IENyZWF0ZUZpbGVFIGZyb20gJy4uL2ZpbGVfZS9maWxlX2UnO1xyXG5pbXBvcnQgUGFydGl0aW9uRmlsZUIgZnJvbSAnLi4vcGFydGl0aW9uX2ZpbGViL3BhcnRpdGlvbl9maWxlYidcclxuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vLi4vaGVscGVycy9yZXF1ZXN0JztcclxuaW1wb3J0IGV4cG9ydEZpbGUgZnJvbSAnLi4vLi4vaGVscGVycy9leHBvcnQtZmlsZSc7XHJcbmxldCBmaWxlX3R5cGUgPVsn5YWo6YOoJywnQeexu+aWh+S7ticsJ0Lnsbvmlofku7YnLCdD57G75paH5Lu2JywnROexu+aWh+S7ticsJ0Xnsbvmlofku7YnXTtcclxuQG9ic2VydmVyXHJcbmNsYXNzIFByb2Nlc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBjb2x1bW5zID0gWyB7XHJcbiAgICAgICAgdGl0bGU6ICfmlofku7bnsbvlnosnLFxyXG4gICAgICAgIGRhdGFJbmRleDogJ2ZpbGVfdHlwZScsXHJcbiAgICAgICAgcmVuZGVyOiAodGV4dCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPHNwYW4+e2ZpbGVfdHlwZVt0ZXh0XX08L3NwYW4+XHJcbiAgICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICAgIHRpdGxlOiAn5pWI546HMTAw57yW5Y+3JyxcclxuICAgICAgICBkYXRhSW5kZXg6ICd3Zl9pZCdcclxuICAgIH0sIHtcclxuICAgICAgICB0aXRsZTogJ+agh+mimCcsXHJcbiAgICAgICAgZGF0YUluZGV4OiAndGl0bGUnXHJcbiAgICB9LCB7XHJcbiAgICAgICAgdGl0bGU6ICfmlofku7blkI3np7AnLFxyXG4gICAgICAgIGRhdGFJbmRleDogJ2ZpbGVfaWQnXHJcbiAgICB9LCB7XHJcbiAgICAgICAgdGl0bGU6ICfliJvlu7rkuronLFxyXG4gICAgICAgIGRhdGFJbmRleDogJ2NyZWF0b3InXHJcbiAgICB9LCB7XHJcbiAgICAgICAgdGl0bGU6ICfliJvlu7rml7bpl7QnLFxyXG4gICAgICAgIGRhdGFJbmRleDogJ2NyZWF0ZV90aW1lJ1xyXG4gICAgfSwge1xyXG4gICAgICAgIHRpdGxlOiAn5aSH5rOoJyxcclxuICAgICAgICBkYXRhSW5kZXg6ICdyZW1hcmsnXHJcbiAgICB9LCB7XHJcbiAgICAgICAgdGl0bGU6ICfmiZPlvIDpmYTku7YnLFxyXG4gICAgICAgIGRhdGFJbmRleDogJ2ZpbGVfbmFtZScsXHJcbiAgICAgICAgcmVuZGVyOih0ZXh0LHJlY29yZCkgPT4gKFxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHRoaXMuZXhwb3J0RmlsZUEocmVjb3JkLmZpbGVfaWQpfT57dGV4dH08L2E+PC9zcGFuPlxyXG4gICAgICAgIClcclxuICAgIH0sIHtcclxuICAgICAgICB0aXRsZTogJ+aTjeS9nCcsXHJcbiAgICAgICAgcmVuZGVyOiAodGV4dCxyZWNvcmQpID0+KDxzcGFuPlxyXG4gICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiB0aGlzLmVkaXRJdGVtKHJlY29yZCl9Pue8lui+kTwvYT5cclxuICAgICAgICAgICAgPERpdmlkZXIgdHlwZT0ndmVydGljYWwnLz5cclxuICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gdGhpcy5kZWxldGVJdGVtKHJlY29yZCl9PuWIoOmZpDwvYT5cclxuICAgICAgICA8L3NwYW4+KVxyXG4gICAgfV07XHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBsZXQge3Zpc2libGUsIGxpc3QsIHByb2Nlc3NfbGlzdCwgc2VsZWN0ZWRJdGVtfSA9IHN0b3JlO1xyXG4gICAgICAgIGxldCB7IGZpbGVfdHlwZXMgfSA9IGxpc3Q7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJvY2Vzc19saXN0KTtcclxuICAgICAgICAvLyBsZXQgZGF0YVNvdXJjZSA9IEFycmF5LmZyb20ocHJvY2Vzc19saXN0KTtcclxuICAgICAgICBsZXQgZGF0YVNvdXJjZSA9IHByb2Nlc3NfbGlzdC5zbGljZSgpO1xyXG4gICAgICAgIGxldCB7IGdldEZpZWxkRGVjb3JhdG9yIH0gPSB0aGlzLnByb3BzLmZvcm07XHJcbiAgICAgICAgbGV0IHsgbWF0Y2ggfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbGV0IGJvb2wgPSBtYXRjaCAmJiBtYXRjaC5wYXJhbXMuaWQgJiYgbWF0Y2gucGFyYW1zLndmX2lkO1xyXG4gICAgICAgIGlmKCFib29sKXJldHVybiBudWxsO1xyXG4gICAgICAgIGxldCBTZWxlY3RCYXIgPSAoKSA9PiAoXHJcbiAgICAgICAgICAgIDxGb3JtIGxheW91dD0naW5saW5lJyBjbGFzc05hbWU9e3N0eWxlLmZvcm19PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBsYWJlbD0n5paH5Lu257G75Z6LJz5cclxuICAgICAgICAgICAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ3R5cGUnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZTogJzAnXHJcbiAgICAgICAgICAgICAgICAgICAgfSkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3QgY2xhc3NOYW1lPXtzdHlsZS5zZWxlY3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT0nMCc+5YWo6YOoPC9PcHRpb24+e2ZpbGVfdHlwZXMubWFwKGIgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT17Yn0ga2V5PXtifT57ZmlsZV90eXBlW2JdfTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9J3ByaW1hcnknIG9uQ2xpY2s9eygpID0+IHRoaXMuZmlsZUJJdGVtKCl9PuWIm+W7ukLnsbvmlofku7Y8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9J3ByaW1hcnknIG9uQ2xpY2s9eygpID0+IHRoaXMuZmlsZUNJdGVtKCl9PuWIm+W7ukPnsbvmlofku7Y8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9J3ByaW1hcnknIG9uQ2xpY2s9eygpID0+IHRoaXMuZmlsZUVJdGVtKCl9PuWIm+W7ukXnsbvmlofku7Y8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0uSXRlbSBjbGFzc05hbWU9J2ZyJz5cclxuICAgICAgICAgICAgICAgICAgICB7Lyo8QnV0dG9uIGNsYXNzTmFtZT0nbXIxNSc+5YiG5Ye6PC9CdXR0b24+Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgey8qPEJ1dHRvbiBjbGFzc05hbWU9J21yMTUnPuWvvOWFpTwvQnV0dG9uPiovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wYXRpdGlvbkZpbGVCKCl9PuWIhuWJsjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnaW5pdC1oZWlnaHQnfT5cclxuICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuZ29CYWNrfT5cclxuICAgICAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYi5JdGVtPui/lOWbnjwvQnJlYWRjcnVtYi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPFNlbGVjdEJhciAvPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlIGRhdGFTb3VyY2U9e2RhdGFTb3VyY2V9IGNvbHVtbnM9e3RoaXMuY29sdW1uc30gcm93S2V5PSdmaWxlX25hbWUnLz5cclxuICAgICAgICAgICAgICAgIDxFZGl0QiBzZXRWaXNpYmxlPXt0aGlzLnNldEVkaXRWaXNpYmxlfSB2aXNpYmxlPXt2aXNpYmxlfSBzZWxlY3RlZEl0ZW09e3NlbGVjdGVkSXRlbX0gaWQ9e3RoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkfS8+XHJcbiAgICAgICAgICAgICAgICA8UGFydGl0aW9uRmlsZUIgc2V0VmlzaWJsZT17dGhpcy5zZXRQYXJ0aXRpb25WaXNpYmxlfSB2aXNpYmxlPXt2aXNpYmxlfSBkYXRhU291cmNlPXtkYXRhU291cmNlfSB3Zl9pZD17dGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMud2ZfaWR9Lz5cclxuICAgICAgICAgICAgICAgIDxDcmVhdGVGaWxlQiBzZXRWaXNpYmxlPXt0aGlzLnNldEZpbGVCVmlzaWJsZX0gdmlzaWJsZT17dmlzaWJsZX0gd2ZfaWQ9e3RoaXMucHJvcHMubWF0Y2gucGFyYW1zLndmX2lkfSBpZD17dGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWR9Lz5cclxuICAgICAgICAgICAgICAgIDxDcmVhdGVGaWxlQyBzZXRWaXNpYmxlPXt0aGlzLnNldEZpbGVDVmlzaWJsZX0gdmlzaWJsZT17dmlzaWJsZX0gZGF0YVNvdXJjZT17ZGF0YVNvdXJjZX0gd2ZfaWQ9e3RoaXMucHJvcHMubWF0Y2gucGFyYW1zLndmX2lkfSBpZD17dGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWR9Lz5cclxuICAgICAgICAgICAgICAgIDxDcmVhdGVGaWxlRSBzZXRWaXNpYmxlPXt0aGlzLnNldEZpbGVFVmlzaWJsZX0gdmlzaWJsZT17dmlzaWJsZX0gaWQ9e3RoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICAgICAgdGhpcy5mZXRjaFByb2Nlc3NMaXN0KCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wcm9wcyk7XHJcbiAgICB9XHJcbiAgICBmZXRjaFByb2Nlc3NMaXN0ID0gKCkgPT4ge1xyXG4gICAgICAgIHJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6Jy9hcGkvZ2V0X2ZpbGVfbGlzdCcsXHJcbiAgICAgICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgaWQ6dGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQsXHJcbiAgICAgICAgICAgICAgICBrZXl3b3JkOicnLFxyXG4gICAgICAgICAgICAgICAgZmlsZV90eXBlOicnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAoe3RhYmxlfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGFibGUpO1xyXG4gICAgICAgICAgICAgICAgc3RvcmUuc2V0UHJvY2Vzc0xpc3QodGFibGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGdvQmFjayA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGhpc3RvcnkucHVzaCgnL2JhdGNoX3Byb2Nlc3MnKTtcclxuICAgIH07XHJcbiAgICBzZXRFZGl0VmlzaWJsZSA9IChib29sKSA9PiB7XHJcbiAgICAgICAgc3RvcmUuc2V0VmlzaWJsZSh7XHJcbiAgICAgICAgICAgIGVkaXQ6IGJvb2xcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBzZXRQYXJ0aXRpb25WaXNpYmxlID0gKGJvb2wpID0+e1xyXG4gICAgICAgIHN0b3JlLnNldFZpc2libGUoe1xyXG4gICAgICAgICAgICBwYXJ0aXRpb246IGJvb2xcclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuICAgIHNldEZpbGVCVmlzaWJsZSA9IChib29sKSA9PntcclxuICAgICAgICBzdG9yZS5zZXRWaXNpYmxlKHtcclxuICAgICAgICAgICAgZmlsZV9iOiBib29sXHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcbiAgICBzZXRGaWxlQ1Zpc2libGUgPSAoYm9vbCkgPT57XHJcbiAgICAgICAgc3RvcmUuc2V0VmlzaWJsZSh7XHJcbiAgICAgICAgICAgIGZpbGVfYzogYm9vbFxyXG4gICAgICAgIH0pXHJcbiAgICB9OztcclxuICAgIHNldEZpbGVFVmlzaWJsZSA9IChib29sKSA9PntcclxuICAgICAgICBzdG9yZS5zZXRWaXNpYmxlKHtcclxuICAgICAgICAgICAgZmlsZV9lOiBib29sXHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcbiAgICBwYXRpdGlvbkZpbGVCID0gKCkgPT57XHJcbiAgICAgICAgc3RvcmUuc2V0VmlzaWJsZSh7XHJcbiAgICAgICAgICAgIHBhcnRpdGlvbjp0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGZpbGVCSXRlbSA9ICgpID0+IHtcclxuICAgICAgICBzdG9yZS5zZXRWaXNpYmxlKHtcclxuICAgICAgICAgICAgZmlsZV9iOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcbiAgICBmaWxlQ0l0ZW0gPSAoKSA9PiB7XHJcbiAgICAgICAgc3RvcmUuc2V0VmlzaWJsZSh7XHJcbiAgICAgICAgICAgIGZpbGVfYzogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgZmlsZUVJdGVtID0gKCkgPT4ge1xyXG4gICAgICAgIHN0b3JlLnNldFZpc2libGUoe1xyXG4gICAgICAgICAgICBmaWxlX2U6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuICAgIGVkaXRJdGVtID0gKGl0ZW0pID0+IHtcclxuICAgICAgICBzdG9yZS5zZXRTZWxlY3RlZEl0ZW0oT2JqZWN0LmFzc2lnbih7fSwgaXRlbSwge1xyXG4gICAgICAgICAgICBlZGl0VHlwZTogJ2VkaXQnXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHN0b3JlLnNldFZpc2libGUoe1xyXG4gICAgICAgICAgICBlZGl0OiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcbiAgICBkZWxldGVJdGVtID0gKGl0ZW0pID0+IHtcclxuICAgICAgICBzdG9yZS5zZXRTZWxlY3RlZEl0ZW0oT2JqZWN0LmFzc2lnbih7fSwgaXRlbSwge1xyXG4gICAgICAgICAgICBlZGl0VHlwZTogJ2RlbGV0ZSdcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgc3RvcmUuc2V0VmlzaWJsZSh7XHJcbiAgICAgICAgICAgIGVkaXQ6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuICAgIGV4cG9ydEZpbGVBID0gKGZpbGVfaWQpPT57XHJcbiAgICAgICAgbGV0e21hdGNofSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbGV0IHtwYXJhbXN9ID0gbWF0Y2g7XHJcbiAgICAgICAgbGV0IHtpZH0gPSBwYXJhbXM7XHJcbiAgICAgICAgICAgIGV4cG9ydEZpbGUoe1xyXG4gICAgICAgICAgICAgIHVybDogJy9hcGkvZ2V0X2ZpbGUnLFxyXG4gICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgaWQ6aWQsXHJcbiAgICAgICAgICAgICAgICAgIGZpbGVfaWQ6ZmlsZV9pZCxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRm9ybS5jcmVhdGUoKShQcm9jZXNzKTsiLCJpbXBvcnQgeyBvYnNlcnZhYmxlLCBhY3Rpb24sIGNvbXB1dGVkIH0gZnJvbSAnbW9ieCc7XHJcbmNsYXNzIFN0b3JlIHtcclxuICAgIEBvYnNlcnZhYmxlIHZpc2libGUgPSB7XHJcbiAgICAgICAgZWRpdDogZmFsc2UsXHJcbiAgICAgICAgZmlsZV9iOiBmYWxzZSxcclxuICAgICAgICBmaWxlX2M6ZmFsc2UsXHJcbiAgICAgICAgZmlsZV9lOmZhbHNlLFxyXG4gICAgICAgIHBhcnRpdGlvbjpmYWxzZVxyXG4gICAgfVxyXG4gICAgQGFjdGlvblxyXG4gICAgc2V0VmlzaWJsZSh0eXBlKXtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnZpc2libGUsIHR5cGUpO1xyXG4gICAgfVxyXG4gIEBvYnNlcnZhYmxlIHByb2Nlc3NfbGlzdCA9IFtdO1xyXG4gIEBhY3Rpb25cclxuICBzZXRQcm9jZXNzTGlzdChsaXN0KXtcclxuICAgIHRoaXMucHJvY2Vzc19saXN0ID0gbGlzdDtcclxuICB9XHJcbiAgQGNvbXB1dGVkXHJcbiAgZ2V0IGxpc3QoKXtcclxuICAgICAgbGV0IGFsbEZpbGVUeXBlcyA9IFtdO1xyXG4gICAgICB0aGlzLnByb2Nlc3NfbGlzdC5tYXAoZmlsZSA9PiB7XHJcbiAgICAgICAgICBhbGxGaWxlVHlwZXMucHVzaChmaWxlLmZpbGVfdHlwZSk7XHJcbiAgICAgICAgICAvLyBhbGxGaWxlSWRzLnB1c2goZmlsZS5maWxlX2lkKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgZmlsZV90eXBlczogQXJyYXkuZnJvbShuZXcgU2V0KGFsbEZpbGVUeXBlcykpLFxyXG4gICAgICAgICAgLy8gZmlsZV9pZHM6IEFycmF5LmZyb20obmV3IFNldChmaWxlSWRzKSlcclxuICAgICAgfVxyXG4gIH1cclxuICBAb2JzZXJ2YWJsZSBzZWxlY3RlZEl0ZW0gPSB7XHJcblxyXG59XHJcbiAgICBAYWN0aW9uXHJcbiAgICBzZXRTZWxlY3RlZEl0ZW0oaXRlbSl7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gaXRlbTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBuZXcgU3RvcmUoKTsiXSwic291cmNlUm9vdCI6IiJ9