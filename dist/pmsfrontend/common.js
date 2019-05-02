(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HttpService = /** @class */ (function () {
    function HttpService(router, http) {
        this.router = router;
        this.http = http;
        // uri = 'http://139.59.25.162:3000/';
        this.uri = 'http://localhost:3000/';
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
    }
    Object.defineProperty(HttpService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedIn.asObservable(); // {2}
        },
        enumerable: true,
        configurable: true
    });
    HttpService.prototype.doPost = function (path, data) {
        return this.http.post("" + this.uri + path, data);
    };
    HttpService.prototype.doGet = function (path) {
        return this.http.get("" + this.uri + path);
    };
    HttpService.prototype.doDel = function (path) {
        return this.http.delete("" + this.uri + path);
    };
    HttpService.prototype.doPatch = function (path, data) {
        return this.http.put("" + this.uri + path, data);
    };
    HttpService.prototype.doLogin = function (path, data) {
        this.loggedIn.next(true);
        this.router.navigate(['/user']);
        return this.http.post("" + this.uri + path, data);
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map