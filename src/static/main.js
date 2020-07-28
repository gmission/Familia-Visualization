(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_demo_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/demo/demo.component */ "./src/app/page/demo/demo.component.ts");




var routes = [
    { path: '**', component: _page_demo_demo_component__WEBPACK_IMPORTED_MODULE_3__["DemoComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: false })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'TextMining';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_demo_demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/demo/demo.component */ "./src/app/page/demo/demo.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm5/ngx-echarts.js");













Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_10___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _page_demo_demo_component__WEBPACK_IMPORTED_MODULE_4__["DemoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NgZorroAntdModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_12__["NgxEchartsModule"],
            ],
            providers: [{ provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["zh_CN"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/page/demo/demo.component.css":
/*!**********************************************!*\
  !*** ./src/app/page/demo/demo.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nz-layout {\n  background: url('banner.png') no-repeat top center,\n  url('bg_curve.png') no-repeat center 1712px,\n  url('bg_curve.png') no-repeat center 3363px,\n  url('Bottom.png') no-repeat bottom center,\n  #F6F8F9;\n\n  background-size: auto, auto, auto, 100%;\n}\n\nnz-content {\n  background: url('p1_bg.png') no-repeat 0px 1223px,\n  url('p2_pic.png') no-repeat 0px 2419px,\n  url('p1_bg.png') no-repeat 50% 3307px;\n  background-size: 992px, 702px 600px, auto;\n\n}\n\n@media screen and (max-width: 1280px) {\n  nz-layout {\n    width: 1280px;\n  }\n}\n\nnz-header {\n  position: fixed;\n  width: 100%;\n  z-index: 9999;\n  background: url('nav_bar.png') no-repeat center top transparent;\n  height: 100px;\n}\n\n.header, nz-content {\n  width: 1280px;\n  margin: 0 auto;\n}\n\n#header {\n  font-size: 20px;\n}\n\n.logo {\n  background: url('logo.png') no-repeat;\n  background-size: auto 100%;\n  height: 46px;\n  margin-top: 27px;\n}\n\ntextarea {\n  resize: none;\n}\n\n.menu {\n  background: none;\n  border: none;\n  color: white;\n  font-size: 16px;\n  margin-top: 18px;\n}\n\n.menu a {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.menu a:hover, .menu ant-menu-item-selected a {\n  color: rgba(255, 255, 255, 1);\n  font-weight: bold;\n}\n\n.introduction {\n  color: #fff;\n}\n\n.introduction h3 {\n  color: #fff;\n}\n\ntextarea {\n  border: none;\n}\n\n.block h3 {\n  font-size: 48px;\n  font-weight: bold;\n  border-left: #2258b6 5px solid;\n  padding-left: 20px;\n  margin-left: 4px;\n}\n\n.circle {\n  height: 192px;\n  width: 192px;\n  background: url('score_round.png') center center;\n  overflow: hidden;\n  margin: -96px auto 0px;\n  z-index: 999;\n}\n\n.circle .icon {\n  background: url('score_icon.png') center center no-repeat;\n  height: 30px;\n  margin-top: 30px;\n}\n\n.circle .text {\n  font-size: 18px;\n  margin-top: 5px;\n}\n\n.circle .num {\n  font-size: 36px;\n}\n\n.circle div {\n  color: #fff;\n  text-align: center;\n}\n\n#key-word-table {\n  height: 547px;\n  background: rgba(255, 255, 255, 1);\n  box-shadow: 0px 29px 36px 0px rgba(125, 138, 159, 0.13);\n  border-radius: 5px;\n  border: 1px solid rgba(201, 209, 219, 0.1);\n}\n\n#key-word-table th {\n  background: #2756DD;\n  color: #fff;\n  font-size: 16px;\n  text-align: center;\n}\n\n#key-word-table td {\n  text-align: center;\n  border: none;\n  padding: 14px 8px\n}\n\n[nz-carousel-content] {\n  text-align: center;\n  height: 160px;\n  line-height: 160px;\n  #background: #364d79;\n  #color: #fff;\n  overflow: hidden;\n}\n\nnz-header {\n  padding: 0px;\n}\n\nh3 {\n  height: 50px;\n  line-height: 50px;\n}\n\n#video {\n  box-shadow: 0 6px 18px -5px hsla(0, 0%, 68.6%, .5);\n}\n\n.dark {\n  background: #f8fafa;\n}\n\n.topic {\n  margin: 20px 40px;\n  padding-left: 25px;\n  height: 25px;\n  line-height: 25px;\n  font-weight: bold;\n  font-size: 18px;\n  background: url('themedistribution_icon.png') left no-repeat;\n}\n\n.f-topic{\n  background: url('pie-chart_icon.png') left no-repeat;\n}\n\n.y-topic{\n  background: url('xsd.png') left no-repeat;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9kZW1vL2RlbW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFOzs7O1NBSU87O0VBRVAsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0U7O3VDQUU0RDtFQUM1RCx5Q0FBeUM7O0FBRTNDOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsYUFBYTtFQUNiLCtEQUFzRjtFQUN0RixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQ0FBNEQ7RUFDNUQsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUdBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdEQUF1RTtFQUN2RSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlEQUFnRjtFQUNoRixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsdURBQXVEO0VBQ3ZELGtCQUFrQjtFQUNsQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBR0E7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiw0REFBbUY7QUFDckY7O0FBQ0E7RUFDRSxvREFBMkU7QUFDN0U7O0FBQ0E7RUFDRSx5Q0FBZ0U7QUFDbEUiLCJmaWxlIjoic3JjL2FwcC9wYWdlL2RlbW8vZGVtby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibnotbGF5b3V0IHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYW5uZXIucG5nXCIpIG5vLXJlcGVhdCB0b3AgY2VudGVyLFxuICB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnX2N1cnZlLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIDE3MTJweCxcbiAgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZ19jdXJ2ZS5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciAzMzYzcHgsXG4gIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvQm90dG9tLnBuZ1wiKSBuby1yZXBlYXQgYm90dG9tIGNlbnRlcixcbiAgI0Y2RjhGOTtcblxuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8sIGF1dG8sIGF1dG8sIDEwMCU7XG59XG5cbm56LWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3AxX2JnLnBuZ1wiKSBuby1yZXBlYXQgMHB4IDEyMjNweCxcbiAgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wMl9waWMucG5nXCIpIG5vLXJlcGVhdCAwcHggMjQxOXB4LFxuICB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3AxX2JnLnBuZ1wiKSBuby1yZXBlYXQgNTAlIDMzMDdweDtcbiAgYmFja2dyb3VuZC1zaXplOiA5OTJweCwgNzAycHggNjAwcHgsIGF1dG87XG5cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gIG56LWxheW91dCB7XG4gICAgd2lkdGg6IDEyODBweDtcbiAgfVxufVxuXG5uei1oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5OTk5O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL25hdl9iYXIucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgdG9wIHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uaGVhZGVyLCBuei1jb250ZW50IHtcbiAgd2lkdGg6IDEyODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbiNoZWFkZXIge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5sb2dvIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1wiKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xuICBoZWlnaHQ6IDQ2cHg7XG4gIG1hcmdpbi10b3A6IDI3cHg7XG59XG5cbnRleHRhcmVhIHtcbiAgcmVzaXplOiBub25lO1xufVxuXG4ubWVudSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG59XG5cblxuLm1lbnUgYSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5cbi5tZW51IGE6aG92ZXIsIC5tZW51IGFudC1tZW51LWl0ZW0tc2VsZWN0ZWQgYSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmludHJvZHVjdGlvbiB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uaW50cm9kdWN0aW9uIGgzIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbnRleHRhcmVhIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uYmxvY2sgaDMge1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItbGVmdDogIzIyNThiNiA1cHggc29saWQ7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLmNpcmNsZSB7XG4gIGhlaWdodDogMTkycHg7XG4gIHdpZHRoOiAxOTJweDtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zY29yZV9yb3VuZC5wbmdcIikgY2VudGVyIGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAtOTZweCBhdXRvIDBweDtcbiAgei1pbmRleDogOTk5O1xufVxuXG4uY2lyY2xlIC5pY29uIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zY29yZV9pY29uLnBuZ1wiKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uY2lyY2xlIC50ZXh0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5jaXJjbGUgLm51bSB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbn1cblxuLmNpcmNsZSBkaXYge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ja2V5LXdvcmQtdGFibGUge1xuICBoZWlnaHQ6IDU0N3B4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICBib3gtc2hhZG93OiAwcHggMjlweCAzNnB4IDBweCByZ2JhKDEyNSwgMTM4LCAxNTksIDAuMTMpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjAxLCAyMDksIDIxOSwgMC4xKTtcbn1cblxuI2tleS13b3JkLXRhYmxlIHRoIHtcbiAgYmFja2dyb3VuZDogIzI3NTZERDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ja2V5LXdvcmQtdGFibGUgdGQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTRweCA4cHhcbn1cblxuW256LWNhcm91c2VsLWNvbnRlbnRdIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDE2MHB4O1xuICBsaW5lLWhlaWdodDogMTYwcHg7XG4gICNiYWNrZ3JvdW5kOiAjMzY0ZDc5O1xuICAjY29sb3I6ICNmZmY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbm56LWhlYWRlciB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuaDMge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xufVxuXG4jdmlkZW8ge1xuICBib3gtc2hhZG93OiAwIDZweCAxOHB4IC01cHggaHNsYSgwLCAwJSwgNjguNiUsIC41KTtcbn1cblxuLmRhcmsge1xuICBiYWNrZ3JvdW5kOiAjZjhmYWZhO1xufVxuXG5cbi50b3BpYyB7XG4gIG1hcmdpbjogMjBweCA0MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvdGhlbWVkaXN0cmlidXRpb25faWNvbi5wbmdcIikgbGVmdCBuby1yZXBlYXQ7XG59XG4uZi10b3BpY3tcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9waWUtY2hhcnRfaWNvbi5wbmdcIikgbGVmdCBuby1yZXBlYXQ7XG59XG4ueS10b3BpY3tcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy94c2QucG5nXCIpIGxlZnQgbm8tcmVwZWF0O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/page/demo/demo.component.html":
/*!***********************************************!*\
  !*** ./src/app/page/demo/demo.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout id=\"tm\">\n  <nz-header nz-row id=\"header\">\n    <div class=\"header\">\n\n      <div nz-col nzLg=\"24\">\n        <div class=\"logo\" nz-col nzSpan=\"8\"></div>\n        <div nz-col nzSpan=\"16\">\n          <nz-anchor class=\"menu\" [nzAffix]=\"false\" id=\"m\">\n\n            <ul nz-menu class=\"menu\" [nzMode]=\"'horizontal'\">\n              <li nz-menu-item>\n                <nz-link nzHref=\"#title-index\" nzTitle=\"首页\"></nz-link>\n              </li>\n              <li nz-menu-item>\n                <nz-link nzHref=\"#title-infer\" nzTitle=\"文档语义分析\"></nz-link>\n              </li>\n              <li nz-menu-item>\n                <nz-link nzHref=\"#title-key\" nzTitle=\"文档关键词抽取\"></nz-link>\n              </li>\n              <li nz-menu-item>\n                <nz-link nzHref=\"#title-sl\" nzTitle=\"短文本-长文本语义匹配\"></nz-link>\n              </li>\n              <li nz-menu-item>\n                <nz-link nzHref=\"#title-ll\" nzTitle=\"长文本-长文本语义匹配\"></nz-link>\n              </li>\n            </ul>\n          </nz-anchor>\n        </div>\n      </div>\n    </div>\n  </nz-header>\n  <nz-content nz-row>\n  <div nz-row style=\"margin: 0 auto;\">\n\n\n    <div nz-row nzGutter=\"32\" style=\"margin-top: 260px;\" class=\"introduction\">\n      <div nz-col nzLg=\"24\">\n        <div nz-col nzSpan=\"10\">\n          <h3 style=\"font-size:48px\">Semantic+</h3>\n          <div style=\"margin-bottom:20px; font-size:18px\">\n            Semantic+语义分析套件基于业界领先的贝叶斯认知计算技术构建，支持用户以“拿来即用”的方式进行语义分析、关键词抽取、语义匹配等多种算子，可以灵活支持搜索、推荐、对话机器人等多种应用。</div>\n        </div>\n      </div>\n    </div>\n    <div nz-row nzGutter=\"32\" style=\"margin-top:438px\" class=\"block\">\n      <div nz-col nzLg=\"24\">\n        <h3 id=\"title-infer\">文档语义分析</h3>\n        <div style=\"font-size:16px;color:#4A4A4A;padding-left:28px;\">用于文档分类、聚类、内容丰富度分析、CTR预估等多种任务。</div>\n      </div>\n      <div nz-col nzLg=\"24\" style=\"margin-top:55px;\">\n        <h4>输入文档</h4>\n        <textarea\n          [(ngModel)]=\"infer.text\"\n          name=\"\" id=\"\" cols=\"30\" rows=\"10\" nz-input\n          style=\"height:314px;padding:25px 20px;box-shadow: 0px 15px 18px 0px rgba(125,138,159,0.13);border:1px solid rgba(201,209,219,0.1);\"\n        >\n            5月18日上午，全市公安机关2019年处置大规模群体性事件实兵对抗演练集训班开训仪式在警官培训中心成功举办。市局党委委员、政治部主任朱青春出席仪式并讲话，市局党委委员李彦主持。\n朱青春同志充分肯定了近年来全市巡特警工作取得的成绩，并就全力办好集训班提出三点要求: 一是要提高政治站位，严抓作风纪律。要提高政治站位，充分认识参加此次集训的重要意义，克服困难抓好集训工作，培训期问要严格遵守市局各项纪律制度。二是要树立娄警形象，彰显铁军风采。要发扬特警五特精神，强化战斗素养，提升实战能力，圆满完成集训任务，力争在省厅演练中为娄底公安争光添彩。三是要加强实战演练，促进战训结合。要理清思路、提振精神，以“真刀真枪”上阵的态度投入到集训中去，以练代战、以练促战达到战训结合的目的。\n          </textarea>\n        <button nz-button [nzLoading]=\"infer.loading\" nzType=\"primary\" (click)=\"infer.click()\"\n                style=\"margin-top:25px;\">语义分析\n        </button>\n\n      </div>\n      <div nz-col nzLg=\"24\" style=\"margin-top:24px\">\n        <div nz-row nzGutter=\"32\">\n          <div nz-col nzSpan=\"12\">\n            <div\n              style=\"height:500px;background:rgba(255,255,255,1);box-shadow:0px 29px 36px 0px rgba(125,138,159,0.13);border-radius:3px;border:1px solid rgba(201,209,219,0.1);\">\n              <div class=\"topic\">文档主题分布</div>\n              <div echarts (chartClick)=\"infer.test($event)\" [options]=\"infer.option\"></div>\n            </div>\n          </div>\n          <div nz-col nzSpan=\"12\">\n            <div nz-row\n                 style=\"height:500px;background:rgba(255,255,255,1);box-shadow:0px 29px 36px 0px rgba(125,138,159,0.13);border-radius:3px;border:1px solid rgba(201,209,219,0.1);\">\n              <div nz-col nzSpan=\"24\">\n                <div class=\"topic\">\"{{infer.top1}}\" 主题下的词分布</div>\n\n                <div echarts style=\"height: 450px;\" [options]=\"infer.optionPieFirst\"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div nz-row nzGutter=\"32\" style=\"margin-top:220px;\" class=\"block\">\n      <div nz-col nzLg=\"24\">\n        <div nz-row>\n          <h3 id=\"title-key\">文档关键词抽取</h3>\n        </div>\n        <div nz-row nzGutter=\"32\" style=\"margin-top: 30px;\">\n          <div nz-col nzLg=\"15\">\n            <div style=\"\n               padding:34px 40px;\n                height:517px;\n                background:rgba(255,255,255,1);\n                box-shadow:0px 29px 36px 0px rgba(125,138,159,0.13);\n                border-radius:5px;\n                border:1px solid rgba(201,209,219,0.1);\">\n              <textarea name=\"\" nz-input style=\"width:100%;height:100%;border: none;\" [(ngModel)]=\"keyWord.text\">\n                5月18日上午，全市公安机关2019年处置大规模群体性事件实兵对抗演练集训班开训仪式在警官培训中心成功举办。市局党委委员、政治部主任朱青春出席仪式并讲话，市局党委委员李彦主持。\n              </textarea>\n            </div>\n\n          </div>\n          <div nz-col nzLg=\"9\">\n            <div nz-row style=\"height: 517px;background: #fff;border-radius: 5px;\">\n              <div nz-col nzLg=\"24\" class=\"topic y-topic\">关键词相似度打分</div>\n              <div nz-col style=\"height: 400px\" nzLg=\"24\" echarts [options]=\"keyWord.optionWord\"></div>\n\n            </div>\n\n          </div>\n          <div nz-col nzLg=\"24\">\n            <button nz-button [nzLoading]=\"keyWord.loading\" nzType=\"primary\" style=\"margin-top:25px;\"\n                    (click)=\"keyWord.click()\">抽取关键词\n            </button>\n          </div>\n        </div>\n\n      </div>\n    </div>\n    <div nz-row nzGutter=\"32\" style=\"margin-top:200px;\" class=\"block\">\n      <div nz-row>\n        <h3 id=\"title-sl\">短文本 - 长文本语义匹配</h3>\n      </div>\n      <div nz-row nzGutter=\"32\">\n        <div nz-col nzLg=\"12\">\n          <div nz-row style=\"margin-top: 62px\">\n            <h4>短文本输入框</h4>\n          </div>\n          <div nz-row style=\"background:rgba(255,255,255,1);\nbox-shadow:0px 44px 54px 0px rgba(125,138,159,0.13);\nborder-radius:5px;\nborder:1px solid rgba(201,209,219,0.1);padding:20px;\">\n            <textarea nz-input name=\"\" cols=\"30\" rows=\"1\" [(ngModel)]=\"sl.sText\"></textarea>\n          </div>\n\n          <div nz-row style=\"margin-top:40px;\">\n            <h4>长文本输入框</h4>\n          </div>\n          <div nz-row>\n            <div\n              style=\"height:300px;padding:25px;background:rgba(255,255,255,1);box-shadow:0px 29px 36px 0px rgba(125,138,159,0.13);border-radius:3px;border:1px solid rgba(201,209,219,0.1);\">\n              <textarea nz-input name=\"\" cols=\"30\" rows=\"10\" [(ngModel)]=\"sl.lText\"></textarea>\n            </div>\n          </div>\n\n        </div>\n        <div nz-col nzLg=\"12\">\n          <div\n            style=\"margin-top:96px;height:448px;background:rgba(255,255,255,1);box-shadow:0px 29px 36px 0px rgba(125,138,159,0.13);border-radius:3px;border:1px solid rgba(201,209,219,0.1);\">\n            <div class=\"topic\" style=\"margin-left: 35%\">文档主题分布</div>\n\n            <div echarts style=\"height: 370px\" [options]=\"sl.option\"></div>\n\n          </div>\n        </div>\n      </div>\n\n      <div nz-row>\n\n        <div nz-row nzGutter=\"0\">\n          <div nz-col nzSpan=\"4\">\n            <button nz-button [nzLoading]=\"sl.loading\" nzType=\"primary\" style=\"margin-top: 30px;\" (click)=\"sl.click()\">\n              立即匹配\n            </button>\n          </div>\n          <div nz-col nzSpan=\"16\">\n            <div class=\"circle\" style=\"margin-top: -470px;\">\n              <div class=\"icon\"></div>\n              <div class=\"text\">匹配得分</div>\n              <div class=\"num\">{{sl.point.toFixed(5)}}</div>\n            </div>\n          </div>\n          <div nz-col nzSpan=\"4\"></div>\n        </div>\n      </div>\n\n    </div>\n    <div nz-row nzGutter=\"32\" style=\"margin-top:200px;\" class=\"block\">\n      <div nz-row>\n        <h3 id=\"title-ll\">长文本 - 长文本语义匹配</h3>\n      </div>\n\n      <div nz-row nzGutter=\"32\" style=\"margin-top:40px;\">\n        <div nz-col nzSpan=\"12\">\n          <div nz-row style=\"margin-top: 60px\">\n            <h4>长文本输入框</h4>\n          </div>\n          <div\n            style=\"height:329px;padding:25px;background:rgba(255,255,255,1);box-shadow:0px 29px 36px 0px rgba(125,138,159,0.13);border-radius:3px;border:1px solid rgba(201,209,219,0.1);\">\n            <textarea nz-input name=\"\" cols=\"30\" rows=\"12\" [(ngModel)]=\"ll.text1\"></textarea>\n          </div>\n        </div>\n        <div nz-col nzSpan=\"12\">\n          <div nz-row style=\"margin-top: 60px\">\n            <h4>长文本输入框</h4>\n          </div>\n          <div\n            style=\"height:329px;padding:25px;background:rgba(255,255,255,1);box-shadow:0px 29px 36px 0px rgba(125,138,159,0.13);border-radius:3px;border:1px solid rgba(201,209,219,0.1);\">\n            <textarea nz-input name=\"\" cols=\"30\" rows=\"12\" [(ngModel)]=\"ll.text2\"></textarea>\n          </div>\n        </div>\n      </div>\n      <div nz-row nzGutter=\"0\">\n        <div nz-col nzSpan=\"4\">\n          <button nz-button [nzLoading]=\"ll.loading\" nzType=\"primary\" style=\"margin-top: 34px;\" (click)=\"ll.click()\">\n            立即匹配\n          </button>\n        </div>\n        <div nz-col nzSpan=\"16\" style=\"z-index: 999;\">\n          <div class=\"circle\" style=\"margin-top:-25px;\">\n            <div class=\"icon\"></div>\n            <div class=\"text\">匹配得分</div>\n            <div class=\"num\">{{ll.point.toFixed(5)}}</div>\n          </div>\n        </div>\n        <div nz-col nzSpan=\"4\"></div>\n      </div>\n      <div nz-row nzGutter=\"32\">\n        <div nz-col nzSpan=\"12\">\n          <div\n            style=\"margin-top: -40px;height:430px;background:rgba(255,255,255,1);box-shadow:0px 29px 36px 0px rgba(125,138,159,0.13);border-radius:3px;border:1px solid rgba(201,209,219,0.1);\">\n            <div class=\"topic\">文档主题分布</div>\n            <div echarts style=\"height: 370px\" (chartClick)=\"ll.test1($event)\"  [options]=\"ll.option1\"></div>\n\n          </div>\n        </div>\n        <div nz-col nzSpan=\"12\">\n          <div\n            style=\"margin-top: -40px;height:430px;background:rgba(255,255,255,1);box-shadow:0px 29px 36px 0px rgba(125,138,159,0.13);border-radius:3px;border:1px solid rgba(201,209,219,0.1);\">\n            <div class=\"topic\">文档主题分布</div>\n\n            <div echarts style=\"height: 370px\" (chartClick)=\"ll.test2($event)\" [options]=\"ll.option2\"></div>\n\n          </div>\n        </div>\n      </div>\n      <div nz-row nzGutter=\"32\" style=\"margin-top:60px;\">\n        <div nz-col nzSpan=\"12\">\n          <div nz-row\n               style=\"height:500px;background:rgba(255,255,255,1);box-shadow:0px 29px 36px 0px rgba(125,138,159,0.13);border-radius:3px;border:1px solid rgba(201,209,219,0.1);\">\n            <div nz-col nzSpan=\"24\">\n              <div class=\"topic f-topic\">\"{{ll.top1}}\" 主题下的词分布</div>\n\n              <div echarts style=\"height: 450px;\" [options]=\"ll.optionPie1\"></div>\n            </div>\n          </div>\n        </div>\n        <div nz-col nzSpan=\"12\">\n          <div nz-row\n               style=\"height:500px;background:rgba(255,255,255,1);box-shadow:0px 29px 36px 0px rgba(125,138,159,0.13);border-radius:3px;border:1px solid rgba(201,209,219,0.1);\">\n            <div nz-col nzSpan=\"24\">\n              <div class=\"topic f-topic\">\"{{ll.top2}}\" 主题下的词分布</div>\n\n              <div echarts style=\"height: 450px;\" [options]=\"ll.optionPie2\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n    <div style=\"padding:150px;\"></div>\n  </nz-content>\n</nz-layout>\n"

/***/ }),

/***/ "./src/app/page/demo/demo.component.ts":
/*!*********************************************!*\
  !*** ./src/app/page/demo/demo.component.ts ***!
  \*********************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");




var DemoComponent = /** @class */ (function () {
    function DemoComponent(http, message) {
        var _this = this;
        this.http = http;
        this.message = message;
        this.category = 'news';
        //url = 'http://text-mining.bigbrothers.info';
        this.feUrl = '';
        this.url = 'http://127.0.0.1:8080';
        this.data = {
            newsStatus: false,
            webpageStatus: false,
            novelStatus: false,
            newsTopic: {},
            webpageTopic: {},
            novelTopic: {},
            status: false,
        };
        this.infer = {
            loading: false,
            top: [],
            top1: '机降',
            top2: '机降',
            text: '5月18日上午，全市公安机关2019年处置大规模群体性事件实兵对抗演练集训班开训仪式在警官培训中心成功举办。市局党委委员、政治部主任朱青春出席仪式并讲话，市局党委委员李彦主持。\n' +
                '朱青春同志充分肯定了近年来全市巡特警工作取得的成绩，并就全力办好集训班提出三点要求: 一是要提高政治站位，严抓作风纪律。要提高政治站位，充分认识参加此次集训的重要意义，克服困难抓好集训工作，培训期问要严格遵守市局各项纪律制度。二是要树立娄警形象，彰显铁军风采。要发扬特警五特精神，强化战斗素养，提升实战能力，圆满完成集训任务，力争在省厅演练中为娄底公安争光添彩。三是要加强实战演练，促进战训结合。要理清思路、提振精神，以“真刀真枪”上阵的态度投入到集训中去，以练代战、以练促战达到战训结合的目的。',
            click: function () {
                _this.infer.loading = true;
                _this.api.getTopic(_this.infer.text).subscribe(function (data) {
                    var top = _this.getTop(data);
                    _this.infer.top = top;
                    var d = _this.getTopTopic(top);
                    var option = _this.copy(_this.infer.option);
                    option.xAxis[0].data = d.map(function (x) { return x[0]; });
                    option.series[0].data = d.map(function (x) { return x[1]; });
                    _this.infer.top1 = option.xAxis[0].data[0];
                    _this.infer.top2 = option.xAxis[0].data[1];
                    _this.infer.option = option;
                    // first Topic
                    var f = _this.getTop(_this.data[_this.category + "Topic"]['' + top[0][0]]);
                    var optionPieF = _this.copy(_this.infer.optionPie);
                    optionPieF.series[0].data = f.map(function (x) {
                        return { value: x[1], name: x[0] };
                    });
                    _this.infer.optionPieFirst = optionPieF;
                    var optionWordF = _this.copy(_this.infer.optionWord);
                    optionWordF.series[0].textStyle.normal.color = function () {
                        // Random color
                        return 'rgb(' + [
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160)
                        ].join(',') + ')';
                    };
                    optionWordF.series[0].data = f.map(function (x) {
                        return { value: x[1], name: x[0] };
                    });
                    _this.infer.optionWordFirst = optionWordF;
                    // Second Topic
                    var s = _this.getTop(_this.data[_this.category + "Topic"]['' + top[1][0]]);
                    var optionPieS = _this.copy(_this.infer.optionPie);
                    optionPieS.series[0].data = s.map(function (x) {
                        return { value: x[1], name: x[0] };
                    });
                    _this.infer.optionPieSecond = optionPieS;
                    var optionWordS = _this.copy(_this.infer.optionWord);
                    optionWordS.series[0].textStyle.normal.color = function () {
                        // Random color
                        return 'rgb(' + [
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160)
                        ].join(',') + ')';
                    };
                    optionWordS.series[0].data = s.map(function (x) {
                        return { value: x[1], name: x[0] };
                    });
                    _this.infer.optionWordSecond = optionWordS;
                    _this.infer.loading = false;
                }, function (err) {
                    _this.message.error('文档语义分析获取失败');
                    _this.infer.loading = true;
                });
            },
            test: function (p) {
                _this.infer.top1 = _this.infer.option.xAxis[0].data[p.dataIndex];
                var f = _this.getTop(_this.data[_this.category + "Topic"]['' + _this.infer.top[p.dataIndex][0]]);
                var optionPieF = _this.copy(_this.infer.optionPie);
                optionPieF.series[0].data = f.map(function (x) {
                    return { value: x[1], name: x[0] };
                });
                _this.infer.optionPieFirst = optionPieF;
            },
            option: {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['机降', '复习', '工作', '训练', '公安', '着力点', '担当', '会上', '应急', '形象'],
                        axisLabel: {
                            interval: 0,
                        },
                        axisTick: {
                            alignWithLabel: true,
                            interval: 0,
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        name: '主题概率',
                        nameLocation: 'center',
                        nameGap: '30',
                    }
                ],
                series: [
                    {
                        name: '相关性',
                        type: 'bar',
                        barWidth: '60%',
                        itemStyle: {
                            normal: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{ offset: 0, color: '#83bff6' },
                                        { offset: 0.5, color: '#188df0' },
                                        { offset: 1, color: '#188df0' }],
                                    global: false
                                },
                            },
                        },
                        data: [0.08900343642611684, 0.05257731958762887, 0.04845360824742268, 0.03539518900343643, 0.03367697594501719, 0.03230240549828179, 0.031615120274914095, 0.027835051546391754, 0.02646048109965636, 0.025773195876288662]
                    }
                ]
            },
            optionPieFirst: {},
            optionPieSecond: {},
            optionPie: {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                color: ['#0B54BC', '#FE623E', '#50E3C2', '#FFF584', '#FF5C71', '#9B9B9B', '#6FE621', '#4A90E2', '#F1F9FF'],
                series: [
                    {
                        name: '',
                        type: 'pie',
                        radius: ['25%', '50%'],
                        avoidLabelOverlap: false,
                        label: {
                            formatter: '{b}\n{d}%',
                            color: '#000'
                        },
                        labelLine: {
                            normal: {
                                show: true
                            }
                        },
                        data: [{ value: 0.8953802585601807, name: '机降' }, { value: 0.8856164813041687, name: '侦察兵' }, {
                                value: 0.8677123188972473,
                                name: '作战'
                            }, { value: 0.8607262969017029, name: '实弹射击' }, { value: 0.8557944893836975, name: '研练' }, {
                                value: 0.8528088927268982,
                                name: '空降兵'
                            }, { value: 0.85112065076828, name: '课目' }, { value: 0.8496363759040833, name: '合成营' }, {
                                value: 0.8484421968460083,
                                name: '演兵场'
                            }, { value: 0.847089946269989, name: '破袭' }]
                    }
                ]
            },
            optionWord: {
                series: [{
                        type: 'wordCloud',
                        // The shape of the "cloud" to draw. Can be any polar equation represented as a
                        // callback function, or a keyword present. Available presents are circle (default),
                        // cardioid (apple or heart shape curve, the most known polar equation), diamond (
                        // alias of square), triangle-forward, triangle, (alias of triangle-upright, pentagon, and star.
                        shape: 'circle',
                        // A silhouette image which the white area will be excluded from drawing texts.
                        // The shape option will continue to apply as the shape of the cloud to grow.
                        // maskImage,
                        // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
                        // Default to be put in the center and has 75% x 80% size.
                        left: 'center',
                        top: 'center',
                        width: '100%',
                        height: '80%',
                        right: null,
                        bottom: null,
                        // Text size range which the value in data will be mapped to.
                        // Default to have minimum 12px and maximum 60px size.
                        sizeRange: [12, 60],
                        // Text rotation range and step in degree. Text will be rotated randomly in range [-90, 90] by rotationStep 45
                        rotationRange: [0, 0],
                        // rotationStep: 45,
                        // size of the grid in pixels for marking the availability of the canvas
                        // the larger the grid size, the bigger the gap between words.
                        gridSize: 8,
                        // set to true to allow word being draw partly outside of the canvas.
                        // Allow word bigger than the size of the canvas to be drawn
                        drawOutOfBound: false,
                        // Global text style
                        textStyle: {
                            normal: {
                                fontFamily: 'sans-serif',
                                fontWeight: 'bold',
                                // Color can be a callback function or a color string
                                color: {},
                            },
                            emphasis: {
                                shadowBlur: 1,
                                shadowColor: '#333'
                            }
                        },
                        // Data is an array. Each array item must have name and value property.
                        data: [{ value: 0.8953802585601807, name: '机降' }, { value: 0.8856164813041687, name: '侦察兵' }, {
                                value: 0.8677123188972473,
                                name: '作战'
                            }, { value: 0.8607262969017029, name: '实弹射击' }, { value: 0.8557944893836975, name: '研练' }, {
                                value: 0.8528088927268982,
                                name: '空降兵'
                            }, { value: 0.85112065076828, name: '课目' }, { value: 0.8496363759040833, name: '合成营' }, {
                                value: 0.8484421968460083,
                                name: '演兵场'
                            }, { value: 0.847089946269989, name: '破袭' }]
                    }]
            },
            optionWordFirst: {},
            optionWordSecond: {},
        };
        this.keyWord = {
            loading: false,
            text: '美国联合航空（United Airlines）周日一班由芝加哥飞往肯塔基州最大城市路易斯维尔、编号UA3411的国内航班，因超额订票而将一名不愿意下机的华裔乘客强行拖走。有乘客拍下片段并上载至互联网，航空公司亦因此遭网民闹爆。联合航空事后发表声明确认事件，表示为此深表歉意。 从当时的片段及照片可见，该名亚裔汉被至少两名警员拖离坐位时，曾一度发出惨叫，头部更疑似撞到隔邻坐位，被拖走时衣衫不整且眼睛亦滑落，额头及口部有血，更有乘客指他被打晕；亦有乘客为男子抱不平，说：我的天啊！看看你们做了什么！”。被拖走的男子在约10分钟后挣脱，并返回到机上，喃喃自语说：“我要回家，我要回家”、“杀死我吧！”。有乘客指他当时满面鲜血，并似乎变得迷迷糊糊，单最终仍然被带走，而涉事航班则因事件而延迟约3小时起飞。 对此，人民日报官微于11日晚发表评论指出，从视频中老人惨叫和满脸血痕，足以坐实安保人员的野蛮；美联航的事后回应，则充满傲慢和冷血。本该以人为本的航空公司，却如此践踏乘客权益谁还敢乘坐这样的航班？如今美联航沦为众矢之的，股价大跌，咎由自取。任何无底线的企业，都应遭受市场惩罚。',
            data: [],
            optionWord: {},
            click: function () {
                _this.keyWord.loading = true;
                var word = _this.copy(_this.infer.optionWord);
                word.series[0].textStyle.normal.color = function () {
                    var l = ['#0B54BC', '#FE623E', '#50E3C2', '#FFF584', '#FF5C71', '#9B9B9B', '#6FE621', '#4A90E2', '#F1F9FF', '#0B54BC', '#FE623E', '#50E3C2', '#FFF584', '#FF5C71', '#9B9B9B', '#6FE621', '#4A90E2', '#F1F9FF'];
                    return l[(Math.random() * l.length) | 0];
                };
                _this.api.getKeyWord(_this.keyWord.text).subscribe(function (data) {
                    _this.keyWord.data = (_this.getTop(data)).map(function (item) {
                        return { value: item[1].toFixed(4), name: item[0] + ' ' + item[1].toFixed(4) };
                    });
                    console.log(_this.keyWord.data);
                    word.series[0].data = _this.keyWord.data;
                    _this.keyWord.optionWord = word;
                    _this.keyWord.loading = false;
                }, function (err) {
                    console.log(err);
                    _this.message.error('关键词抽取失败');
                    _this.keyWord.loading = false;
                });
            }
        };
        this.sl = {
            loading: false,
            sText: '自动驾驶车',
            lText: '“时间表是2050年至2070年左右，所有的车都将是自动驾驶的车。”在昨日举行的中国（杭州）只能网联汽车前沿技术论坛暨中国（杭州）只能网联汽车产业促销大会上，中国工程院院士、中国智能学会理事长李德毅如此说道。 这样的预言并非毫无依据，随着人工智能、大数据、物联网、5G通讯技术等新一代信息技术与汽车制造、交通设施等领域的深度融合发展，近几年，只能网联汽车发展异军突起，自动驾驶已经成人工智能领域的“主战场”。尤其是5G通信技术的发展，将对加速智能网联汽车的应用、推动智能网联汽车产业化起到关键支撑作用。',
            point: 0,
            option: {},
            click: function () {
                _this.sl.loading = true;
                var status = false;
                _this.api.getQueryDoc(_this.sl.sText, _this.sl.lText).subscribe(function (data) {
                    _this.sl.point = data['TWE Similarity'];
                    _this.sl.loading = !(status);
                    status = true;
                }, function (err) {
                    _this.sl.loading = !(status);
                    status = true;
                    _this.message.error('短文本长文本语义匹配-匹配得分失败');
                });
                _this.api.getTopic(_this.sl.lText).subscribe(function (data) {
                    var top = _this.getTop(data);
                    var d = _this.getTopTopic(top);
                    var option = _this.copy(_this.infer.option);
                    option.xAxis[0].data = d.map(function (x) { return x[0]; });
                    option.series[0].data = d.map(function (x) { return x[1]; });
                    _this.sl.option = option;
                    _this.sl.loading = !(status);
                    status = true;
                }, function (err) {
                    _this.sl.loading = !(status);
                    status = true;
                    _this.message.error('短文本长文本语义匹配-文档语义失败');
                });
            }
        };
        this.ll = {
            loading: false,
            text1: '“时间表是2050年至2070年左右，所有的车都将是自动驾驶的车。”在昨日举行的中国（杭州）只能网联汽车前沿技术论坛暨中国（杭州）只能网联汽车产业促销大会上，中国工程院院士、中国智能学会理事长李德毅如此说道。 这样的预言并非毫无依据，随着人工智能、大数据、物联网、5G通讯技术等新一代信息技术与汽车制造、交通设施等领域的深度融合发展，近几年，只能网联汽车发展异军突起，自动驾驶已经成人工智能领域的“主战场”。尤其是5G通信技术的发展，将对加速智能网联汽车的应用、推动智能网联汽车产业化起到关键支撑作用。',
            text2: '美国联合航空（United Airlines）周日一班由芝加哥飞往肯塔基州最大城市路易斯维尔、编号UA3411的国内航班，因超额订票而将一名不愿意下机的华裔乘客强行拖走。有乘客拍下片段并上载至互联网，航空公司亦因此遭网民闹爆。联合航空事后发表声明确认事件，表示为此深表歉意。 从当时的片段及照片可见，该名亚裔汉被至少两名警员拖离坐位时，曾一度发出惨叫，头部更疑似撞到隔邻坐位，被拖走时衣衫不整且眼睛亦滑落，额头及口部有血，更有乘客指他被打晕；亦有乘客为男子抱不平，说：我的天啊！看看你们做了什么！”。被拖走的男子在约10分钟后挣脱，并返回到机上，喃喃自语说：“我要回家，我要回家”、“杀死我吧！”。有乘客指他当时满面鲜血，并似乎变得迷迷糊糊，单最终仍然被带走，而涉事航班则因事件而延迟约3小时起飞。 对此，人民日报官微于11日晚发表评论指出，从视频中老人惨叫和满脸血痕，足以坐实安保人员的野蛮；美联航的事后回应，则充满傲慢和冷血。本该以人为本的航空公司，却如此践踏乘客权益谁还敢乘坐这样的航班？如今美联航沦为众矢之的，股价大跌，咎由自取。任何无底线的企业，都应遭受市场惩罚。',
            point: 0,
            top1: '',
            top1List: [],
            top2List: [],
            top2: '',
            option1: {},
            option2: {},
            optionPie1: {},
            optionPie2: {},
            test1: function (p) {
                _this.ll.top1 = _this.ll.option1.xAxis[0].data[p.dataIndex];
                var f = _this.getTop(_this.data[_this.category + "Topic"]['' + _this.ll.top1List[p.dataIndex][0]]);
                var optionPieF = _this.copy(_this.ll.optionPie1);
                optionPieF.series[0].data = f.map(function (x) {
                    return { value: x[1], name: x[0] };
                });
                _this.ll.optionPie1 = optionPieF;
            },
            test2: function (p) {
                _this.ll.top2 = _this.ll.option2.xAxis[0].data[p.dataIndex];
                var f = _this.getTop(_this.data[_this.category + "Topic"]['' + _this.ll.top2List[p.dataIndex][0]]);
                var optionPieF = _this.copy(_this.ll.optionPie2);
                optionPieF.series[0].data = f.map(function (x) {
                    return { value: x[1], name: x[0] };
                });
                _this.ll.optionPie2 = optionPieF;
            },
            click: function () {
                var status = 0;
                _this.ll.loading = true;
                _this.api.getDocDistance(_this.ll.text1, _this.ll.text2).subscribe(function (data) {
                    _this.ll.point = 1 - data['Hellinger Distance'];
                    status = status + 1;
                    if (status === 7) {
                        _this.ll.loading = false;
                    }
                }, function (err) {
                    _this.ll.loading = false;
                    _this.message.error('长文本匹配-获取匹配度失败');
                });
                _this.api.getTopic(_this.ll.text1).subscribe(function (data) {
                    var top = _this.getTop(data);
                    _this.ll.top1List = top;
                    var d = _this.getTopTopic(top);
                    var option = _this.copy(_this.infer.option);
                    option.xAxis[0].data = d.map(function (x) { return x[0]; });
                    option.series[0].data = d.map(function (x) { return x[1]; });
                    _this.ll.option1 = option;
                    var f = _this.getTop(_this.data[_this.category + "Topic"]['' + top[0][0]]);
                    var optionPieF = _this.copy(_this.infer.optionPie);
                    optionPieF.series[0].data = f.map(function (x) {
                        return { value: x[1], name: x[0] };
                    });
                    _this.ll.optionPie1 = optionPieF;
                    _this.ll.top1 = _this.ll.option1.xAxis[0].data[0];
                    status = status + 2;
                    if (status === 7) {
                        _this.ll.loading = false;
                    }
                }, function (err) {
                    _this.ll.loading = false;
                    _this.message.error('长文本匹配-文本1获取失败');
                });
                _this.api.getTopic(_this.ll.text2).subscribe(function (data) {
                    var top = _this.getTop(data);
                    _this.ll.top2List = top;
                    var d = _this.getTopTopic(top);
                    var option = _this.copy(_this.infer.option);
                    option.xAxis[0].data = d.map(function (x) { return x[0]; });
                    option.series[0].data = d.map(function (x) { return x[1]; });
                    _this.ll.option2 = option;
                    var f = _this.getTop(_this.data[_this.category + "Topic"]['' + top[0][0]]);
                    var optionPieF = _this.copy(_this.infer.optionPie);
                    optionPieF.series[0].data = f.map(function (x) {
                        return { value: x[1], name: x[0] };
                    });
                    _this.ll.optionPie2 = optionPieF;
                    _this.ll.top2 = _this.ll.option2.xAxis[0].data[0];
                    status = status + 4;
                    if (status === 7) {
                        _this.ll.loading = false;
                    }
                }, function (err) {
                    _this.ll.loading = false;
                    _this.message.error('长文本匹配-文本2获取失败');
                });
            }
        };
        this.api = {
            getDocDistance: function (t1, t2, category) {
                if (category === void 0) { category = _this.category; }
                var url = _this.url + '/doc-distance';
                return _this.http.post(url, (new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                    .set('category', category)
                    .set('type', 'str')
                    .set('text1', t1)
                    .set('text2', t2)).toString(), {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });
            },
            getQueryDoc: function (s, l, category) {
                if (category === void 0) { category = _this.category; }
                var url = _this.url + '/query-doc-sim';
                return _this.http.post(url, (new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                    .set('category', category)
                    .set('type', 'str')
                    .set('text1', s)
                    .set('text2', l)).toString(), {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });
            },
            getKeyWord: function (text, category) {
                if (category === void 0) { category = _this.category; }
                var url = _this.url + '/doc-twe-keywords-plus';
                return _this.http.post(url, (new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                    .set('category', category)
                    .set('type', 'str')
                    .set('text', text)).toString(), {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });
            },
            getTopic: function (text, category) {
                if (category === void 0) { category = _this.category; }
                var url = _this.url + '/lda-infer';
                console.log(url);
                return _this.http.post(url, (new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                    .set('category', category)
                    .set('type', 'str')
                    .set('text', text)).toString(), {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                });
            }
        };
        this.http.get(this.feUrl + 'assets/topic-news-map.json').subscribe(function (data) {
            _this.data.newsTopic = data;
            _this.data.newsStatus = true;
            _this.data.status = (_this.data.newsStatus && _this.data.novelStatus && _this.data.webpageStatus);
        });
        this.http.get(this.feUrl + 'assets/topic-novel-map.json').subscribe(function (data) {
            _this.data.novelTopic = data;
            _this.data.novelStatus = true;
            _this.data.status = (_this.data.newsStatus && _this.data.novelStatus && _this.data.webpageStatus);
        });
        this.http.get(this.feUrl + 'assets/topic-webpage-map.json').subscribe(function (data) {
            _this.data.webpageTopic = data;
            _this.data.webpageStatus = true;
            _this.data.status = (_this.data.newsStatus && _this.data.novelStatus && _this.data.webpageStatus);
        });
    }
    DemoComponent.prototype.getTop = function (data, num) {
        if (num === void 0) { num = 10; }
        var list = [];
        for (var key in data) {
            list.push([key, data[key]]);
        }
        list.sort(function (f, s) {
            return s[1] - f[1];
        });
        return list.slice(0, num);
    };
    DemoComponent.prototype.getTopTopic = function (data, category, num) {
        var _this = this;
        if (category === void 0) { category = this.category; }
        if (num === void 0) { num = 10; }
        return data.map(function (item) {
            console.log('' + item[0]);
            var topicList = _this.data[category + "Topic"]['' + item[0]];
            return [_this.getTop(topicList)[0][0], item[1]];
        });
    };
    DemoComponent.prototype.ngOnInit = function () {
        // @ts-ignore
        __webpack_require__(/*! echarts-wordcloud */ "./node_modules/echarts-wordcloud/index.js");
        this.feUrl = window.location.pathname;
        this.infer.click();
        this.ll.click();
        this.keyWord.click();
        this.sl.click();
    };
    DemoComponent.prototype.copy = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };
    DemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-demo',
            template: __webpack_require__(/*! ./demo.component.html */ "./src/app/page/demo/demo.component.html"),
            styles: [__webpack_require__(/*! ./demo.component.css */ "./src/app/page/demo/demo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]])
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chenzhao/dev/TextMining-master/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map