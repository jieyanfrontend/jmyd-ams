(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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

/***/ "../node_modules/css-loader/index.js??ref--5-1!./pages/login/login.css":
/*!********************************************************************!*\
  !*** ../node_modules/css-loader??ref--5-1!./pages/login/login.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".login_container{\r\n    align-items: center;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.login_form{\r\n    box-sizing: content-box;\r\n    width: 368px;\r\n    background: #fff;\r\n    padding: 65px 35px 35px;\r\n    border-radius: 6px;\r\n    margin-top: 150px;\r\n}\r\n.login_login_btn_group{\r\n\r\n}\r\n.login_login_btn{\r\n    width: 100%;\r\n}", "", {"version":3,"sources":["E:/前端/jmyd-ams/pc/src/pages/login/login.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,cAAc;IACd,wBAAwB;CAC3B;AACD;IACI,wBAAwB;IACxB,aAAa;IACb,iBAAiB;IACjB,wBAAwB;IACxB,mBAAmB;IACnB,kBAAkB;CACrB;AACD;;CAEC;AACD;IACI,YAAY;CACf","file":"login.css","sourcesContent":[".container{\r\n    align-items: center;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.form{\r\n    box-sizing: content-box;\r\n    width: 368px;\r\n    background: #fff;\r\n    padding: 65px 35px 35px;\r\n    border-radius: 6px;\r\n    margin-top: 150px;\r\n}\r\n.login_btn_group{\r\n\r\n}\r\n.login_btn{\r\n    width: 100%;\r\n}"],"sourceRoot":""}]);

// exports
exports.locals = {
	"container": "login_container",
	"form": "login_form",
	"login_btn_group": "login_login_btn_group",
	"login_btn": "login_login_btn"
};

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

/***/ "./pages/login/login.css":
/*!*******************************!*\
  !*** ./pages/login/login.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./login.css */ "../node_modules/css-loader/index.js??ref--5-1!./pages/login/login.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--5-1!./login.css */ "../node_modules/css-loader/index.js??ref--5-1!./pages/login/login.css", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!./login.css */ "../node_modules/css-loader/index.js??ref--5-1!./pages/login/login.css");

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

/***/ "./pages/login/login.js":
/*!******************************!*\
  !*** ./pages/login/login.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _button = __webpack_require__(/*! antd/es/button */ "../node_modules/antd/es/button/index.js");

var _button2 = _interopRequireDefault(_button);

var _checkbox = __webpack_require__(/*! antd/es/checkbox */ "../node_modules/antd/es/checkbox/index.js");

var _checkbox2 = _interopRequireDefault(_checkbox);

var _form = __webpack_require__(/*! antd/es/form */ "../node_modules/antd/es/form/index.js");

var _form2 = _interopRequireDefault(_form);

var _input = __webpack_require__(/*! antd/es/input */ "../node_modules/antd/es/input/index.js");

var _input2 = _interopRequireDefault(_input);

var _icon = __webpack_require__(/*! antd/es/icon */ "../node_modules/antd/es/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(/*! antd/es/button/style/css */ "../node_modules/antd/es/button/style/css.js");

__webpack_require__(/*! antd/es/checkbox/style/css */ "../node_modules/antd/es/checkbox/style/css.js");

__webpack_require__(/*! antd/es/form/style/css */ "../node_modules/antd/es/form/style/css.js");

__webpack_require__(/*! antd/es/input/style/css */ "../node_modules/antd/es/input/style/css.js");

__webpack_require__(/*! antd/es/icon/style/css */ "../node_modules/antd/es/icon/style/css.js");

var _react = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/es/index.js");

var _login = __webpack_require__(/*! ./login.css */ "./pages/login/login.css");

var _login2 = _interopRequireDefault(_login);

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

var Login = function (_React$Component) {
    _inherits(Login, _React$Component);

    function Login(props) {
        _classCallCheck(this, Login);

        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

        _this.handleRequest = function (_ref) {
            var userName = _ref.userName,
                password = _ref.password;

            (0, _request2.default)({
                url: "/api/login",
                data: {
                    user: userName,
                    password: password
                },
                success: function success(data) {
                    _this.setState({
                        loginSuccess: true
                    });
                },
                fail: function fail(data) {
                    console.log('fail');
                }
            });
        };

        _this.handleSubmit = function (e) {
            e.preventDefault();
            _this.props.form.validateFields(function (err, values) {
                if (err) {} else {
                    _this.handleRequest(values);
                }
            });
        };

        _this.hasErrors = function (fieldsError) {
            return Object.keys(fieldsError).some(function (field) {
                return fieldsError[field];
            });
        };

        _this.state = {
            loginSuccess: false
        };
        return _this;
    }

    _createClass(Login, [{
        key: 'render',
        value: function render() {
            var loginSuccess = this.state.loginSuccess;
            var _props$form = this.props.form,
                getFieldDecorator = _props$form.getFieldDecorator,
                isFieldTouched = _props$form.isFieldTouched,
                getFieldError = _props$form.getFieldError,
                getFieldsError = _props$form.getFieldsError;

            var userNameErr = isFieldTouched('userName') && getFieldError('userName');
            var passwordErr = isFieldTouched('password') && getFieldError('password');
            return _react2.default.createElement(
                'div',
                { className: _login2.default.container },
                loginSuccess ? _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' }) : null,
                _react2.default.createElement(
                    'div',
                    { className: _login2.default.form },
                    _react2.default.createElement(
                        _form2.default,
                        { onSubmit: this.handleSubmit },
                        _react2.default.createElement(
                            _form2.default.Item,
                            { validateStatus: userNameErr ? 'error' : '', help: userNameErr || '' },
                            getFieldDecorator('userName', {
                                rules: [{ required: true, message: '请输入用户名' }]
                            })(_react2.default.createElement(_input2.default, { size: 'large', prefix: _react2.default.createElement(_icon2.default, { type: 'user', style: { color: 'rgba(0,0,0,.25)' } }), placeholder: '\u7528\u6237\u540D' }))
                        ),
                        _react2.default.createElement(
                            _form2.default.Item,
                            { validateStatus: passwordErr ? 'error' : '', help: passwordErr || '' },
                            getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码' }]
                            })(_react2.default.createElement(_input2.default, { type: 'password', size: 'large', prefix: _react2.default.createElement(_icon2.default, { type: 'lock', style: { color: 'rgba(0,0,0,.25)' } }), placeholder: '\u5BC6\u7801' }))
                        ),
                        _react2.default.createElement(
                            _form2.default.Item,
                            null,
                            getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true
                            })(_react2.default.createElement(
                                _checkbox2.default,
                                null,
                                '\u8BB0\u4F4F\u6211'
                            ))
                        ),
                        _react2.default.createElement(
                            _form2.default.Item,
                            { className: _login2.default.login_btn_group },
                            _react2.default.createElement(
                                _button2.default,
                                {
                                    disabled: this.hasErrors(getFieldsError()),
                                    size: 'large', type: 'primary', htmlType: 'submit', className: _login2.default.login_btn },
                                '\u767B\u5F55'
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
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return Login;
}(_react2.default.Component);

var LoginForm = _form2.default.create()(Login);
var _default = LoginForm;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "../node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Login, 'Login', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\login\\login.js');
    reactHotLoader.register(LoginForm, 'LoginForm', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\login\\login.js');
    reactHotLoader.register(_default, 'default', 'E:\\\u524D\u7AEF\\jmyd-ams\\pc\\src\\pages\\login\\login.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi9sb2dpbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9oYW5kbGUtZm9ybWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9oYW5kbGUtanNvbi5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbG9naW4vbG9naW4uY3NzPzYzYTciLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbG9naW4vbG9naW4uanMiXSwibmFtZXMiOlsiaGFuZGxlRm9ybURhdGEiLCJkYXRhIiwicmV0IiwiRm9ybURhdGEiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiQXJyYXkiLCJpc0FycmF5IiwiayIsImZvckVhY2giLCJhcHBlbmQiLCJkIiwiaGFuZGxlSnNvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwicG9zdFR5cGUiLCJzdWNjZXNzIiwiZmFpbCIsImNvbXBsZXRlIiwiRXJyb3IiLCJ4bWwiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJwb3N0RGF0YSIsInNldFJlcXVlc3RIZWFkZXIiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJjb2RlIiwidW5kZWZpbmVkIiwiZSIsInBhcnNlSW50IiwiYWxlcnQiLCJzZW5kIiwiTG9naW4iLCJwcm9wcyIsImhhbmRsZVJlcXVlc3QiLCJ1c2VyTmFtZSIsInBhc3N3b3JkIiwidXNlciIsInNldFN0YXRlIiwibG9naW5TdWNjZXNzIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsInZhbGlkYXRlRmllbGRzIiwiZXJyIiwidmFsdWVzIiwiaGFzRXJyb3JzIiwiZmllbGRzRXJyb3IiLCJzb21lIiwiZmllbGQiLCJzdGF0ZSIsImdldEZpZWxkRGVjb3JhdG9yIiwiaXNGaWVsZFRvdWNoZWQiLCJnZXRGaWVsZEVycm9yIiwiZ2V0RmllbGRzRXJyb3IiLCJ1c2VyTmFtZUVyciIsInBhc3N3b3JkRXJyIiwiY29udGFpbmVyIiwicnVsZXMiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJjb2xvciIsInZhbHVlUHJvcE5hbWUiLCJpbml0aWFsVmFsdWUiLCJsb2dpbl9idG5fZ3JvdXAiLCJsb2dpbl9idG4iLCJDb21wb25lbnQiLCJMb2dpbkZvcm0iLCJjcmVhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUdBO0FBQ0EsMENBQTJDLDRCQUE0QixzQkFBc0IsZ0NBQWdDLEtBQUssZ0JBQWdCLGdDQUFnQyxxQkFBcUIseUJBQXlCLGdDQUFnQywyQkFBMkIsMEJBQTBCLEtBQUssMkJBQTJCLFNBQVMscUJBQXFCLG9CQUFvQixLQUFLLFFBQVEsa0dBQWtHLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsdURBQXVELDRCQUE0QixzQkFBc0IsZ0NBQWdDLEtBQUssVUFBVSxnQ0FBZ0MscUJBQXFCLHlCQUF5QixnQ0FBZ0MsMkJBQTJCLDBCQUEwQixLQUFLLHFCQUFxQixTQUFTLGVBQWUsb0JBQW9CLEtBQUssbUJBQW1COztBQUV2aUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkEsSUFBSUEsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFDQyxJQUFELEVBQVU7QUFDM0IsUUFBSUMsTUFBTSxJQUFJQyxRQUFKLEVBQVY7QUFDQUMsV0FBT0MsSUFBUCxDQUFZSixJQUFaLEVBQWtCSyxHQUFsQixDQUFzQixhQUFLO0FBQ3ZCLFlBQUdDLE1BQU1DLE9BQU4sQ0FBY1AsS0FBS1EsQ0FBTCxDQUFkLENBQUgsRUFBMEI7QUFDdEJSLGlCQUFLUSxDQUFMLEVBQVFDLE9BQVIsQ0FBZ0IsYUFBSztBQUNq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LEtBQWQsQ0FBaEI7ZUFDZXFDLFM7Ozs7Ozs7Ozs7Ozs7NEJBckZUckMsSzs0QkFvRkZxQyxTIiwiZmlsZSI6IjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmxvZ2luX2NvbnRhaW5lcntcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5sb2dpbl9mb3Jte1xcclxcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG4gICAgd2lkdGg6IDM2OHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiA2NXB4IDM1cHggMzVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcXHJcXG59XFxyXFxuLmxvZ2luX2xvZ2luX2J0bl9ncm91cHtcXHJcXG5cXHJcXG59XFxyXFxuLmxvZ2luX2xvZ2luX2J0bntcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJFOi/liY3nq68vam15ZC1hbXMvcGMvc3JjL3BhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2Qsd0JBQXdCO0NBQzNCO0FBQ0Q7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtDQUNyQjtBQUNEOztDQUVDO0FBQ0Q7SUFDSSxZQUFZO0NBQ2ZcIixcImZpbGVcIjpcImxvZ2luLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFpbmVye1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmZvcm17XFxyXFxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbiAgICB3aWR0aDogMzY4cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICAgIHBhZGRpbmc6IDY1cHggMzVweCAzNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xcclxcbn1cXHJcXG4ubG9naW5fYnRuX2dyb3Vwe1xcclxcblxcclxcbn1cXHJcXG4ubG9naW5fYnRue1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcImxvZ2luX2NvbnRhaW5lclwiLFxuXHRcImZvcm1cIjogXCJsb2dpbl9mb3JtXCIsXG5cdFwibG9naW5fYnRuX2dyb3VwXCI6IFwibG9naW5fbG9naW5fYnRuX2dyb3VwXCIsXG5cdFwibG9naW5fYnRuXCI6IFwibG9naW5fbG9naW5fYnRuXCJcbn07IiwibGV0IGhhbmRsZUZvcm1EYXRhID0gKGRhdGEpID0+IHtcclxuICAgIGxldCByZXQgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIE9iamVjdC5rZXlzKGRhdGEpLm1hcChrID0+IHtcclxuICAgICAgICBpZihBcnJheS5pc0FycmF5KGRhdGFba10pKXtcclxuICAgICAgICAgICAgZGF0YVtrXS5mb3JFYWNoKGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0LmFwcGVuZChrLGQpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXQuYXBwZW5kKGssZGF0YVtrXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmV0O1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVGb3JtRGF0YTsiLCJsZXQgaGFuZGxlSnNvbiA9IChkYXRhKSA9PiB7XHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUpzb247IiwiaW1wb3J0IGhhbmRsZUpzb24gZnJvbSAnLi9oYW5kbGUtanNvbic7XHJcbmltcG9ydCBoYW5kbGVGb3JtRGF0YSBmcm9tICcuL2hhbmRsZS1mb3JtZGF0YSc7XHJcblxyXG5mdW5jdGlvbiByZXF1ZXN0KHsgdXJsLCBtZXRob2QgPSAnUE9TVCcsIHBvc3RUeXBlID0gJ2pzb24nICxkYXRhID0ge30sIHN1Y2Nlc3MgPSAoKSA9PiB7fSwgZmFpbCA9ICgpID0+IHt9LCBjb21wbGV0ZSA9ICgpID0+IHt9fSkge1xyXG4gICAgaWYoIXVybCl7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1cmzlj4LmlbDkuI3lj6/nvLrnnIEnKTtcclxuICAgIH1cclxuICAgIGxldCB4bWwgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhtbC5vcGVuKG1ldGhvZCwgdXJsKTtcclxuICAgIGxldCBwb3N0RGF0YSA7XHJcbiAgICBzd2l0Y2ggKHBvc3RUeXBlKXtcclxuICAgICAgICBjYXNlICdqc29uJzpcclxuICAgICAgICAgICAgeG1sLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICAgICAgICAgIHBvc3REYXRhID0gaGFuZGxlSnNvbihkYXRhKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZm9ybWRhdGEnOlxyXG4gICAgICAgICAgICAvLyB4bWwuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgXCJhcHBsaWNhdGlvbi92bmQubXMtZXhjZWxcIik7XHJcbiAgICAgICAgICAgIHBvc3REYXRhID0gaGFuZGxlRm9ybURhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHhtbC5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgICAgICAgICBwb3N0RGF0YSA9IGhhbmRsZUpzb24oZGF0YSk7XHJcbiAgICB9XHJcbiAgICB4bWwub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHhtbC5yZWFkeVN0YXRlID09PSA0KXtcclxuICAgICAgICAgICAgaWYoeG1sLnN0YXR1cyA9PT0gMjAwKXtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZSh4bWwucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgIGxldCBjb2RlID0gZGF0YS5jb2RlO1xyXG4gICAgICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGNvZGUgPT09IHVuZGVmaW5lZCkgdGhyb3cgbmV3IEVycm9yKCdjb2RlIGlzIG5vdCBkZWZpbmVkJyk7XHJcbiAgICAgICAgICAgICAgICB9Y2F0Y2goZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihwYXJzZUludChkYXRhLmNvZGUpID09PSAyMDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBmYWlsKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KCfor7fmsYLpgYfliLDkuobpl67popjvvIzor7fnqI3lkI7lho3lsJ3or5UnKTtcclxuICAgICAgICAgICAgICAgIGZhaWwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb21wbGV0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB4bWwuc2VuZChwb3N0RGF0YSk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgcmVxdWVzdDtcclxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuL2xvZ2luLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4vbG9naW4uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4vbG9naW4uY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEljb24sIEJ1dHRvbiwgQ2hlY2tib3ggfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHN0eWxlIGZyb20gJy4vbG9naW4uY3NzJztcclxuaW1wb3J0IHJlcXVlc3QgZnJvbSAnLi4vLi4vaGVscGVycy9yZXF1ZXN0JztcclxuY2xhc3MgTG9naW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGxvZ2luU3VjY2VzczogZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgbGV0IHsgbG9naW5TdWNjZXNzIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHsgZ2V0RmllbGREZWNvcmF0b3IsIGlzRmllbGRUb3VjaGVkLCBnZXRGaWVsZEVycm9yLCBnZXRGaWVsZHNFcnJvciB9ID0gdGhpcy5wcm9wcy5mb3JtO1xyXG4gICAgICAgIGNvbnN0IHVzZXJOYW1lRXJyID0gaXNGaWVsZFRvdWNoZWQoJ3VzZXJOYW1lJykgJiYgZ2V0RmllbGRFcnJvcigndXNlck5hbWUnKTtcclxuICAgICAgICBjb25zdCBwYXNzd29yZEVyciA9IGlzRmllbGRUb3VjaGVkKCdwYXNzd29yZCcpICYmIGdldEZpZWxkRXJyb3IoJ3Bhc3N3b3JkJyk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICB7bG9naW5TdWNjZXNzID8gPFJlZGlyZWN0IHRvPScvJy8+OiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmZvcm19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gdmFsaWRhdGVTdGF0dXM9e3VzZXJOYW1lRXJyID8gJ2Vycm9yJyA6ICcnfSBoZWxwPXt1c2VyTmFtZUVyciB8fCAnJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ3VzZXJOYW1lJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ+ivt+i+k+WFpeeUqOaIt+WQjScgfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgc2l6ZT17J2xhcmdlJ30gcHJlZml4PXs8SWNvbiB0eXBlPVwidXNlclwiIHN0eWxlPXt7IGNvbG9yOiAncmdiYSgwLDAsMCwuMjUpJyB9fSAvPn0gcGxhY2Vob2xkZXI9XCLnlKjmiLflkI1cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW0gdmFsaWRhdGVTdGF0dXM9e3Bhc3N3b3JkRXJyID8gJ2Vycm9yJyA6ICcnfSBoZWxwPXtwYXNzd29yZEVyciB8fCAnJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0RmllbGREZWNvcmF0b3IoJ3Bhc3N3b3JkJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzOiBbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ+ivt+i+k+WFpeWvhueggScgfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT0ncGFzc3dvcmQnIHNpemU9eydsYXJnZSd9IHByZWZpeD17PEljb24gdHlwZT1cImxvY2tcIiBzdHlsZT17eyBjb2xvcjogJ3JnYmEoMCwwLDAsLjI1KScgfX0gLz59IHBsYWNlaG9sZGVyPVwi5a+G56CBXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldEZpZWxkRGVjb3JhdG9yKCdyZW1lbWJlcicsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVByb3BOYW1lOiAnY2hlY2tlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94PuiusOS9j+aIkTwvQ2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSAgY2xhc3NOYW1lPXtzdHlsZS5sb2dpbl9idG5fZ3JvdXB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLmhhc0Vycm9ycyhnZXRGaWVsZHNFcnJvcigpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsnbGFyZ2UnfSB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtzdHlsZS5sb2dpbl9idG59PueZu+W9lTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICB0aGlzLnByb3BzLmZvcm0udmFsaWRhdGVGaWVsZHMoKTtcclxuICAgIH1cclxuICAgIGhhbmRsZVJlcXVlc3QgPSAoe3VzZXJOYW1lLCBwYXNzd29yZH0pID0+IHtcclxuICAgICAgICAgIHJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgIHVybDogXCIvYXBpL2xvZ2luXCIsXHJcbiAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICB1c2VyOiB1c2VyTmFtZSxcclxuICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBzdWNjZXNzOihkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgbG9naW5TdWNjZXNzOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBmYWlsOiAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZmFpbCcpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5mb3JtLnZhbGlkYXRlRmllbGRzKChlcnIsIHZhbHVlcykgPT4ge1xyXG4gICAgICAgICAgICBpZihlcnIpe1xyXG5cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVJlcXVlc3QodmFsdWVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGhhc0Vycm9ycyA9IChmaWVsZHNFcnJvcikgPT4ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhmaWVsZHNFcnJvcikuc29tZShmaWVsZCA9PiBmaWVsZHNFcnJvcltmaWVsZF0pO1xyXG4gICAgfVxyXG59XHJcbmxldCBMb2dpbkZvcm0gPSBGb3JtLmNyZWF0ZSgpKExvZ2luKTtcclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9