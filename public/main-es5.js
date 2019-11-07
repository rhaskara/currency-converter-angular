(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<app-converter></app-converter>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/converter/converter.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/converter/converter.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container my-3 mx-auto\" id=\"converter-container\">\n  <app-currency-input></app-currency-input>\n  <h4 class=\"m-3 text-center\">Watch List</h4>\n  <div class=\"container my-3 mx-auto px-1\" id=\"currency-info-list\">\n    <ng-container *ngFor=\"let currency of watchList\">\n      <app-currency-info [currency]=\"currency\" (eventOutput)=\"removeFromWatchList(currency.id)\"></app-currency-info>\n    </ng-container>\n  </div>\n  <app-currency-adder [currencySelector]=\"rates\" (setWatching)=\"addToWatchList($event)\"></app-currency-adder>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/converter/currency-adder/currency-adder.component.html": 
        /*!*************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/converter/currency-adder/currency-adder.component.html ***!
          \*************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <!-- Update view depending on flag -->\n  <button [hidden]=\"requestAdd\" type=\"button\" class=\"btn btn-primary text-capitalize w-100\"\n   id=\"add-currency\" (click)=\"requestAdd = !requestAdd\">\n    <span class=\"lparen\"></span>\n    <span class=\"plus\"></span>\n    <span class=\"rparen\"></span> \n    Add More Currencies\n  </button>\n  <form (submit)=\"onSubmit(addSelection);\" [hidden]=\"!requestAdd\" id=\"add-currency-form\">\n    <select #addSelection>\n      <option hidden disabled selected value></option>\n      <!-- Hide and disable selection of watched currency to prevent duplicates -->\n      <option [hidden]=\"currency.watching\" [disabled]=\"currency.watching\"\n        *ngFor=\"let currency of currencySelector; let i = index\" [value]=\"i\">\n        {{ currency.id }} - {{ currency.name }}\n      </option>\n    </select>\n    <button type=\"submit\" class=\"btn btn-success text-capitalize\" id=\"submit-btn\">submit</button>\n  </form>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/converter/currency-info/currency-info.component.html": 
        /*!***********************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/converter/currency-info/currency-info.component.html ***!
          \***********************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<li class=\"w-100 p-2 currency-info rounded-0\">\n  <div class=\"information mr-1\">\n    <div class=\"calculated\">\n      <div class=\"curr-id font-weight-bold\">{{ currency.id }}</div>\n      <div class=\"curr-value text-right pr-2\">{{ currency.value }}</div>\n    </div>\n    <div class=\"font-weight-bold font-italic\">{{ currency.id }} - {{ currency.name }}</div>\n    <div class=\"font-italic pr-2\">1 USD = {{ currency.id }} {{ currency.rate }}</div>\n  </div>\n  <button type=\"button\" class=\"btn btn-danger\" (click)=\"removeWatch()\">\n    <span class=\"lparen\"></span>\n    <span class=\"minus\"></span>\n    <span class=\"rparen\"></span>\n  </button>\n</li>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/converter/currency-input/currency-input.component.html": 
        /*!*************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/converter/currency-input/currency-input.component.html ***!
          \*************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form class=\"form-input w-100 p-3 border rounded\">\n  <div class=\"form-group d-flex m-0\">\n    <!-- ngModel binds to input to variable, ngModelChange detects value changes in the ngModel -->\n    <label for=\"userInput\" class=\"input-label font-italic font-weight-bold\">{{ defaultCurrency.id }} - {{ defaultCurrency.name }}</label>\n    <div class=\"input-group border rounded\">\n      <div class=\"input-group-prepend border-right\">\n        <span class=\"input-group-text border-0 font-weight-bold\" id=\"currency-prepend\">{{ defaultCurrency.id }}</span>\n      </div>\n      <input type=\"number\" class=\"form-control border-0 text-right p-2\" [(ngModel)]=\"userInput\" aria-label=\"userInput\"\n       name=\"userInput\" (ngModelChange)=\"acceptValue()\" aria-describedby=\"currency-prepend\"\n       onfocus=\"this.placeholder = ''\" placeholder=\"10.000\"/>\n    </div>\n  </div>\n</form>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/header/header.component.html": 
        /*!******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/header/header.component.html ***!
          \******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-header\">\n  <h3>\n    Currency Converter\n  </h3>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'currency-converter-angular';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/layout/header/header.component */ "./src/app/components/layout/header/header.component.ts");
            /* harmony import */ var _components_converter_currency_input_currency_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/converter/currency-input/currency-input.component */ "./src/app/components/converter/currency-input/currency-input.component.ts");
            /* harmony import */ var _components_converter_currency_info_currency_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/converter/currency-info/currency-info.component */ "./src/app/components/converter/currency-info/currency-info.component.ts");
            /* harmony import */ var _components_converter_converter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/converter/converter.component */ "./src/app/components/converter/converter.component.ts");
            /* harmony import */ var _components_converter_currency_adder_currency_adder_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/converter/currency-adder/currency-adder.component */ "./src/app/components/converter/currency-adder/currency-adder.component.ts");
            var appRoutes = [
                { path: '', component: _components_converter_converter_component__WEBPACK_IMPORTED_MODULE_10__["ConverterComponent"] },
                { path: '**', redirectTo: '/' }
            ];
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                        _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                        _components_converter_currency_input_currency_input_component__WEBPACK_IMPORTED_MODULE_8__["CurrencyInputComponent"],
                        _components_converter_currency_info_currency_info_component__WEBPACK_IMPORTED_MODULE_9__["CurrencyInfoComponent"],
                        _components_converter_converter_component__WEBPACK_IMPORTED_MODULE_10__["ConverterComponent"],
                        _components_converter_currency_adder_currency_adder_component__WEBPACK_IMPORTED_MODULE_11__["CurrencyAdderComponent"]
                    ],
                    imports: [
                        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes),
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/components/converter/converter.component.scss": 
        /*!***************************************************************!*\
          !*** ./src/app/components/converter/converter.component.scss ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#converter-container {\n  max-width: 360px;\n  height: auto;\n}\n#converter-container #currency-info-list {\n  height: auto;\n  min-height: 300px;\n  max-height: 400px;\n  overflow-y: auto;\n}\n.hide-selection {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb252ZXJ0ZXIvQzpcXFVzZXJzXFxSYWZmZXJ0eSBBc2thcmFcXERvY3VtZW50c1xcR2l0SHViXFxjdXJyZW5jeS1jb252ZXJ0ZXItYW5ndWxhclxcY3VycmVuY3ktY29udmVydGVyLWFuZ3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNvbnZlcnRlclxcY29udmVydGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbnZlcnRlci9jb252ZXJ0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUNDRjtBRENFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NKO0FER0E7RUFDRSx3QkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb252ZXJ0ZXIvY29udmVydGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnZlcnRlci1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDM2MHB4O1xuICBoZWlnaHQ6IGF1dG87XG5cbiAgI2N1cnJlbmN5LWluZm8tbGlzdCB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIH1cbn1cblxuLmhpZGUtc2VsZWN0aW9uIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufSIsIiNjb252ZXJ0ZXItY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAzNjBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuI2NvbnZlcnRlci1jb250YWluZXIgI2N1cnJlbmN5LWluZm8tbGlzdCB7XG4gIGhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uaGlkZS1zZWxlY3Rpb24ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/converter/converter.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/components/converter/converter.component.ts ***!
          \*************************************************************/
        /*! exports provided: ConverterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConverterComponent", function () { return ConverterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_service_converter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app/service/converter.service */ "./src/app/service/converter.service.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var currencyNames = __webpack_require__(/*! src/config/currency */ "./src/config/currency.js");
            var ConverterComponent = /** @class */ (function () {
                function ConverterComponent(converterService) {
                    var _this = this;
                    this.converterService = converterService;
                    // Store latest/today's currency rates
                    this.rates = [];
                    // Store currency watchlist
                    this.watchList = [];
                    // base number for conversion (initialized to 10)
                    this.base = 10;
                    // base currency to convert from (hard coded to USD)
                    this.baseCurrency = "USD";
                    // Subscribe to user input. Input changes are debounced to minimize change detection by view
                    this.baseNumberSubscription = this.converterService.getUserInput()
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])()).subscribe(function (number) {
                        _this.base = number;
                        _this.updateValues();
                    });
                }
                ConverterComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // Initialization of currency rates
                    this.converterRequest = this.converterService.getRates(this.baseCurrency)
                        .subscribe(function (res) {
                        for (var rate in res["rates"]) {
                            _this.rates.push({
                                id: rate,
                                name: currencyNames[rate],
                                rate: res["rates"][rate],
                                value: res["rates"][rate] * _this.base,
                                watching: false
                            });
                        }
                    });
                };
                ConverterComponent.prototype.ngOnDestroy = function () {
                    // Remove subscription upon destroying component
                    this.converterRequest.unsubscribe();
                    this.baseNumberSubscription.unsubscribe();
                };
                /**
                 * Update exchange rate values
                 * @method updateValues
                 * @return none
                 */
                ConverterComponent.prototype.updateValues = function () {
                    for (var curr in this.rates) {
                        this.rates[curr]["value"] = this.rates[curr]["rate"] * this.base;
                    }
                };
                /**
                 * Set selected currency to watch list
                 * @method addToWatchList
                 * @param index {number} - numbered index of selected currency
                 * @return none
                 */
                ConverterComponent.prototype.addToWatchList = function (index) {
                    this.rates[index].watching = true;
                    this.watchList.push(this.rates[index]);
                };
                /**
                 * Remove selected country from watch list and set watching flag to false
                 * @method removeFromWatchList
                 * @param id {string} - ID of removed currency
                 * @return none
                 */
                ConverterComponent.prototype.removeFromWatchList = function (id) {
                    // Filter selected element from watchlist
                    this.watchList = this.watchList.filter(function (element) {
                        return element.id != id;
                    });
                    // Find index of element in rates
                    var rateIndex = this.rates.findIndex(function (e) {
                        return e.id == id;
                    });
                    // Set watching to false so user can see element again in dropdown option
                    this.rates[rateIndex].watching = false;
                };
                return ConverterComponent;
            }());
            ConverterComponent.ctorParameters = function () { return [
                { type: _app_service_converter_service__WEBPACK_IMPORTED_MODULE_2__["ConverterService"] }
            ]; };
            ConverterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-converter',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./converter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/converter/converter.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./converter.component.scss */ "./src/app/components/converter/converter.component.scss")).default]
                })
            ], ConverterComponent);
            /***/ 
        }),
        /***/ "./src/app/components/converter/currency-adder/currency-adder.component.scss": 
        /*!***********************************************************************************!*\
          !*** ./src/app/components/converter/currency-adder/currency-adder.component.scss ***!
          \***********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#add-currency {\n  word-break: breakword;\n  white-space: normal;\n}\n#add-currency span {\n  vertical-align: middle;\n}\n#add-currency-form {\n  display: flex;\n  flex-wrap: wrap;\n}\n#add-currency-form select {\n  flex: 8;\n  max-width: 100%;\n}\n#add-currency-form #submit-btn {\n  flex: 2;\n  margin: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb252ZXJ0ZXIvY3VycmVuY3ktYWRkZXIvQzpcXFVzZXJzXFxSYWZmZXJ0eSBBc2thcmFcXERvY3VtZW50c1xcR2l0SHViXFxjdXJyZW5jeS1jb252ZXJ0ZXItYW5ndWxhclxcY3VycmVuY3ktY29udmVydGVyLWFuZ3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNvbnZlcnRlclxcY3VycmVuY3ktYWRkZXJcXGN1cnJlbmN5LWFkZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbnZlcnRlci9jdXJyZW5jeS1hZGRlci9jdXJyZW5jeS1hZGRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0Usc0JBQUE7QUNDSjtBREdBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUNBRjtBREVFO0VBQ0UsT0FBQTtFQUNBLGVBQUE7QUNBSjtBREdFO0VBQ0UsT0FBQTtFQUNBLFdBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udmVydGVyL2N1cnJlbmN5LWFkZGVyL2N1cnJlbmN5LWFkZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2FkZC1jdXJyZW5jeSB7XG4gIHdvcmQtYnJlYWs6IGJyZWFrd29yZDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcblxuICBzcGFuIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG59XG5cbiNhZGQtY3VycmVuY3ktZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICBzZWxlY3Qge1xuICAgIGZsZXg6IDg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG5cbiAgI3N1Ym1pdC1idG4ge1xuICAgIGZsZXg6IDI7XG4gICAgbWFyZ2luOiAycHg7XG4gIH1cbn0iLCIjYWRkLWN1cnJlbmN5IHtcbiAgd29yZC1icmVhazogYnJlYWt3b3JkO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuI2FkZC1jdXJyZW5jeSBzcGFuIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuI2FkZC1jdXJyZW5jeS1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuI2FkZC1jdXJyZW5jeS1mb3JtIHNlbGVjdCB7XG4gIGZsZXg6IDg7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbiNhZGQtY3VycmVuY3ktZm9ybSAjc3VibWl0LWJ0biB7XG4gIGZsZXg6IDI7XG4gIG1hcmdpbjogMnB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/converter/currency-adder/currency-adder.component.ts": 
        /*!*********************************************************************************!*\
          !*** ./src/app/components/converter/currency-adder/currency-adder.component.ts ***!
          \*********************************************************************************/
        /*! exports provided: CurrencyAdderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyAdderComponent", function () { return CurrencyAdderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CurrencyAdderComponent = /** @class */ (function () {
                function CurrencyAdderComponent() {
                    this.setWatching = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.requestAdd = false; // Default flag of adding currency
                }
                /**
                 * Submit selected currency to be tracked
                 * @method onSubmit
                 * @param selection {any} - reference to HTML select option element
                 * @return none
                 */
                CurrencyAdderComponent.prototype.onSubmit = function (selection) {
                    // If a currency is selected, then emit value to parent
                    if (selection.value) {
                        // Return value is emitted via event emitter from child to parent
                        this.setWatching.emit(selection.value);
                        // Reset selection
                        selection.value = undefined;
                    }
                    // Reset state
                    this.requestAdd = !this.requestAdd;
                };
                return CurrencyAdderComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], CurrencyAdderComponent.prototype, "currencySelector", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], CurrencyAdderComponent.prototype, "setWatching", void 0);
            CurrencyAdderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-currency-adder',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./currency-adder.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/converter/currency-adder/currency-adder.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./currency-adder.component.scss */ "./src/app/components/converter/currency-adder/currency-adder.component.scss")).default]
                })
            ], CurrencyAdderComponent);
            /***/ 
        }),
        /***/ "./src/app/components/converter/currency-info/currency-info.component.scss": 
        /*!*********************************************************************************!*\
          !*** ./src/app/components/converter/currency-info/currency-info.component.scss ***!
          \*********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".currency-info {\n  display: flex;\n  flex-wrap: wrap;\n  border: 1px solid black;\n}\n.currency-info .information {\n  flex: 11;\n  display: flex;\n  flex-direction: column;\n}\n.currency-info .information .calculated {\n  display: table;\n  width: 100%;\n}\n.currency-info .information .calculated .curr-id {\n  display: inline-block;\n  width: 50px;\n  vertical-align: middle;\n}\n.currency-info .information .calculated .curr-value {\n  display: inline-block;\n  width: calc(100% - 50px);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n.currency-info .btn {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb252ZXJ0ZXIvY3VycmVuY3ktaW5mby9DOlxcVXNlcnNcXFJhZmZlcnR5IEFza2FyYVxcRG9jdW1lbnRzXFxHaXRIdWJcXGN1cnJlbmN5LWNvbnZlcnRlci1hbmd1bGFyXFxjdXJyZW5jeS1jb252ZXJ0ZXItYW5ndWxhci9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29udmVydGVyXFxjdXJyZW5jeS1pbmZvXFxjdXJyZW5jeS1pbmZvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbnZlcnRlci9jdXJyZW5jeS1pbmZvL2N1cnJlbmN5LWluZm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDQ0Y7QURDRTtFQUNFLFFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNDSjtBRENJO0VBQ0UsY0FBQTtFQUNBLFdBQUE7QUNDTjtBRENNO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNDUjtBREVNO0VBQ0UscUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDQVI7QURLRTtFQUNFLE9BQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udmVydGVyL2N1cnJlbmN5LWluZm8vY3VycmVuY3ktaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXJyZW5jeS1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcblxuICAuaW5mb3JtYXRpb24ge1xuICAgIGZsZXg6IDExO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC5jYWxjdWxhdGVkIHtcbiAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIC5jdXJyLWlkIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIH1cblxuICAgICAgLmN1cnItdmFsdWUge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmJ0biB7XG4gICAgZmxleDogMTtcbiAgfVxufSIsIi5jdXJyZW5jeS1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cbi5jdXJyZW5jeS1pbmZvIC5pbmZvcm1hdGlvbiB7XG4gIGZsZXg6IDExO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmN1cnJlbmN5LWluZm8gLmluZm9ybWF0aW9uIC5jYWxjdWxhdGVkIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmN1cnJlbmN5LWluZm8gLmluZm9ybWF0aW9uIC5jYWxjdWxhdGVkIC5jdXJyLWlkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNTBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5jdXJyZW5jeS1pbmZvIC5pbmZvcm1hdGlvbiAuY2FsY3VsYXRlZCAuY3Vyci12YWx1ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5jdXJyZW5jeS1pbmZvIC5idG4ge1xuICBmbGV4OiAxO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/converter/currency-info/currency-info.component.ts": 
        /*!*******************************************************************************!*\
          !*** ./src/app/components/converter/currency-info/currency-info.component.ts ***!
          \*******************************************************************************/
        /*! exports provided: CurrencyInfoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyInfoComponent", function () { return CurrencyInfoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CurrencyInfoComponent = /** @class */ (function () {
                function CurrencyInfoComponent() {
                    this.eventOutput = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                }
                /**
                 * Fire event to signal parent component that
                 * this currency should be removed from watchlist
                 * @method removeWatch
                 * @return none
                 */
                CurrencyInfoComponent.prototype.removeWatch = function () {
                    this.eventOutput.emit();
                };
                return CurrencyInfoComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], CurrencyInfoComponent.prototype, "currency", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], CurrencyInfoComponent.prototype, "eventOutput", void 0);
            CurrencyInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-currency-info',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./currency-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/converter/currency-info/currency-info.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./currency-info.component.scss */ "./src/app/components/converter/currency-info/currency-info.component.scss")).default]
                })
            ], CurrencyInfoComponent);
            /***/ 
        }),
        /***/ "./src/app/components/converter/currency-input/currency-input.component.scss": 
        /*!***********************************************************************************!*\
          !*** ./src/app/components/converter/currency-input/currency-input.component.scss ***!
          \***********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("/* Global shared variables */\n.form-input {\n  border: 1px solid black;\n}\n.form-input .form-group {\n  flex-wrap: wrap;\n}\n.form-input .form-group .input-label {\n  flex: 0 0 100%;\n}\n.form-input .form-group .input-group .input-group-text {\n  background-color: transparent;\n}\n.form-input .form-group .input-group input:focus {\n  box-shadow: none;\n}\n.form-input .form-group .input-group:focus-within {\n  border-color: #1F85CB !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb252ZXJ0ZXIvY3VycmVuY3ktaW5wdXQvQzpcXFVzZXJzXFxSYWZmZXJ0eSBBc2thcmFcXERvY3VtZW50c1xcR2l0SHViXFxjdXJyZW5jeS1jb252ZXJ0ZXItYW5ndWxhclxcY3VycmVuY3ktY29udmVydGVyLWFuZ3VsYXIvc3JjXFxhc3NldHNcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb252ZXJ0ZXIvY3VycmVuY3ktaW5wdXQvQzpcXFVzZXJzXFxSYWZmZXJ0eSBBc2thcmFcXERvY3VtZW50c1xcR2l0SHViXFxjdXJyZW5jeS1jb252ZXJ0ZXItYW5ndWxhclxcY3VycmVuY3ktY29udmVydGVyLWFuZ3VsYXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNvbnZlcnRlclxcY3VycmVuY3ktaW5wdXRcXGN1cnJlbmN5LWlucHV0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbnZlcnRlci9jdXJyZW5jeS1pbnB1dC9jdXJyZW5jeS1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0QkFBQTtBQ0VBO0VBQ0UsdUJBQUE7QUNBRjtBREVFO0VBQ0UsZUFBQTtBQ0FKO0FERUk7RUFDRSxjQUFBO0FDQU47QURJTTtFQUNFLDZCQUFBO0FDRlI7QURLTTtFQUNFLGdCQUFBO0FDSFI7QURNTTtFQUNFLGdDQUFBO0FDSlIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnZlcnRlci9jdXJyZW5jeS1pbnB1dC9jdXJyZW5jeS1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdsb2JhbCBzaGFyZWQgdmFyaWFibGVzICovXG4kZm9udC1zdGFjazogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4kcHJpbWFyeS1saWdodDogI0Y4RjhGODtcbiRwcmltYXJ5LWdyYXk6ICNBQUFBQUE7XG4kcHJpbWFyeS1ibHVlOiAjMUY4NUNCOyIsIkBpbXBvcnQgJ3NyYy9hc3NldHMvdmFyaWFibGVzJztcblxuLmZvcm0taW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcblxuICAuZm9ybS1ncm91cCB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgLmlucHV0LWxhYmVsIHtcbiAgICAgIGZsZXg6IDAgMCAxMDAlO1xuICAgIH1cblxuICAgIC5pbnB1dC1ncm91cCB7XG4gICAgICAuaW5wdXQtZ3JvdXAtdGV4dCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICBcbiAgICAgIGlucHV0OmZvY3VzIHtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIH1cblxuICAgICAgJjpmb2N1cy13aXRoaW4ge1xuICAgICAgICBib3JkZXItY29sb3I6ICRwcmltYXJ5LWJsdWUgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iLCIvKiBHbG9iYWwgc2hhcmVkIHZhcmlhYmxlcyAqL1xuLmZvcm0taW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cbi5mb3JtLWlucHV0IC5mb3JtLWdyb3VwIHtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmZvcm0taW5wdXQgLmZvcm0tZ3JvdXAgLmlucHV0LWxhYmVsIHtcbiAgZmxleDogMCAwIDEwMCU7XG59XG4uZm9ybS1pbnB1dCAuZm9ybS1ncm91cCAuaW5wdXQtZ3JvdXAgLmlucHV0LWdyb3VwLXRleHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5mb3JtLWlucHV0IC5mb3JtLWdyb3VwIC5pbnB1dC1ncm91cCBpbnB1dDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uZm9ybS1pbnB1dCAuZm9ybS1ncm91cCAuaW5wdXQtZ3JvdXA6Zm9jdXMtd2l0aGluIHtcbiAgYm9yZGVyLWNvbG9yOiAjMUY4NUNCICFpbXBvcnRhbnQ7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/converter/currency-input/currency-input.component.ts": 
        /*!*********************************************************************************!*\
          !*** ./src/app/components/converter/currency-input/currency-input.component.ts ***!
          \*********************************************************************************/
        /*! exports provided: CurrencyInputComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyInputComponent", function () { return CurrencyInputComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_service_converter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app/service/converter.service */ "./src/app/service/converter.service.ts");
            var CurrencyInputComponent = /** @class */ (function () {
                function CurrencyInputComponent(converterService) {
                    this.converterService = converterService;
                    this.defaultCurrency = {
                        id: "USD",
                        name: "United States Dollar"
                    };
                }
                /**
                 * Accept input value and process it to the service
                 * @method acceptValue
                 * @return none
                 */
                CurrencyInputComponent.prototype.acceptValue = function () {
                    this.converterService.sendUserInput(this.userInput);
                };
                return CurrencyInputComponent;
            }());
            CurrencyInputComponent.ctorParameters = function () { return [
                { type: _app_service_converter_service__WEBPACK_IMPORTED_MODULE_2__["ConverterService"] }
            ]; };
            CurrencyInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-currency-input',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./currency-input.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/converter/currency-input/currency-input.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./currency-input.component.scss */ "./src/app/components/converter/currency-input/currency-input.component.scss")).default]
                })
            ], CurrencyInputComponent);
            /***/ 
        }),
        /***/ "./src/app/components/layout/header/header.component.scss": 
        /*!****************************************************************!*\
          !*** ./src/app/components/layout/header/header.component.scss ***!
          \****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".page-header {\n  text-align: center;\n  padding: 10px;\n}\n.page-header h3 {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL0M6XFxVc2Vyc1xcUmFmZmVydHkgQXNrYXJhXFxEb2N1bWVudHNcXEdpdEh1YlxcY3VycmVuY3ktY29udmVydGVyLWFuZ3VsYXJcXGN1cnJlbmN5LWNvbnZlcnRlci1hbmd1bGFyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsYXlvdXRcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FDQ0Y7QURDRTtFQUNFLFNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIFxuICBoMyB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59IiwiLnBhZ2UtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnBhZ2UtaGVhZGVyIGgzIHtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/layout/header/header.component.ts": 
        /*!**************************************************************!*\
          !*** ./src/app/components/layout/header/header.component.ts ***!
          \**************************************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent() {
                }
                return HeaderComponent;
            }());
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/layout/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/components/layout/header/header.component.scss")).default]
                })
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/service/converter.service.ts": 
        /*!**********************************************!*\
          !*** ./src/app/service/converter.service.ts ***!
          \**********************************************/
        /*! exports provided: ConverterService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConverterService", function () { return ConverterService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var apiUrl = "https://api.exchangeratesapi.io/api/latest";
            var ConverterService = /** @class */ (function () {
                function ConverterService(http) {
                    this.http = http;
                    /* Subject to store base number input by user and send value changes to converter component */
                    this.baseNumber = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
                }
                /**
                 * Get currency conversion rates from exchangeratesapi.io
                 * @method getRates
                 * @param base {string} - base currency ID (hard coded to USD)
                 * @return {Observable} subscription response from server
                 */
                ConverterService.prototype.getRates = function (base) {
                    return this.http.get(apiUrl + "?base=" + base);
                };
                /**
                 * Send user input as subject value update
                 * @method sendUserInput
                 * @param number {number} - base currency number input from user
                 * @return none
                 */
                ConverterService.prototype.sendUserInput = function (number) {
                    this.baseNumber.next(number);
                };
                /**
                 * Observe user input to detect changes in value
                 * @method getUserInput
                 * @return {Observable} subscription to user input for base number
                 */
                ConverterService.prototype.getUserInput = function () {
                    return this.baseNumber.asObservable();
                };
                return ConverterService;
            }());
            ConverterService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            ConverterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ConverterService);
            /***/ 
        }),
        /***/ "./src/config/currency.js": 
        /*!********************************!*\
          !*** ./src/config/currency.js ***!
          \********************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            // Name config for currency ID
            module.exports = {
                USD: "United States Dollar",
                CAD: "Canadian Dollar",
                IDR: "Indonesian Rupiah",
                GBP: "Pound sterling",
                CHF: "Swiss Franc",
                SGD: "Singapore Dollar",
                INR: "Indian Rupee",
                MYR: "Malaysian Ringgit",
                JPY: "Japanese Yen",
                KRW: "South Korean Won",
                BGN: "Bulgarian Lev",
                CZK: "Czech Koruna",
                DKK: "Danish Krone",
                HUF: "Hungarian Forint",
                PLN: "Polish Zloty",
                RON: "Romanian Leu",
                SEK: "Swedish Krona",
                ISK: "Icelandic Krona",
                NOK: "Norwegian Krone",
                HRK: "Croatian Kuna",
                RUB: "Russian Ruble",
                TRY: "Turkish Lira",
                AUD: "Australian Dollar",
                BRL: "Brazilian Real",
                CNY: "Chinese Yuan",
                HKD: "Hong Kong Dollar",
                ILS: "Israel Shekel",
                MXN: "Mexican Peso",
                NZD: "New Zealand Dollar",
                PHP: "Philippine Peso",
                THB: "Thai Baht",
                ZAR: "South African Rand",
                EUR: "Euro"
            };
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\Rafferty Askara\Documents\GitHub\currency-converter-angular\currency-converter-angular\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map