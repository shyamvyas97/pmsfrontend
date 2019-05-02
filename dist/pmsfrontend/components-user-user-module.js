(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-user-user-module"],{

/***/ "./src/app/components/user/adduser/adduser.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/user/adduser/adduser.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9hZGR1c2VyL2FkZHVzZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/user/adduser/adduser.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/user/adduser/adduser.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      {{mode}} user<br>\n      <a routerLink=\"/user\">List Users</a>\n    </div>\n    <div class=\"col-md-6\">\n      <form [formGroup]=\"createUser\" name=\"createUser\" (ngSubmit)=\"onSubmit()\">\n        <mat-form-field class=\"field-full-width\">\n          <input matInput id=\"name\" placeholder=\"name\" formControlName=\"name\"\n            [ngClass]=\"{'is-invalid': submitted && c.name.errors}\" required #name>\n          <div *ngIf=\"submitted && c.name.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"c.name.errors.required\">Name is required</div>\n          </div>\n        </mat-form-field>\n\n        <br>\n\n        <mat-form-field class=\"field-full-width\">\n          <input matInput placeholder=\"email\" formControlName=\"email\"\n            [ngClass]=\"{'is-invalid': submitted && c.email.errors}\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" required #email>\n            <div *ngIf=\"email.errors &&(email.touched || email.dirty)\" class =\"aler alert-danger\">\n              <div [hidden]=\"!email.errors?.pattern\">\n                Invalid pattern\n              </div> \n            </div>\n        </mat-form-field>\n\n        <br>\n\n        <mat-form-field class=\"field-full-width\">\n          <mat-select formControlName=\"role_name\" placeholder=\"Roles\" [value]=\"role_name\" required #role_name>\n            <mat-option *ngFor=\"let role of roles\" [value]=\"role._id\">{{role.name}}</mat-option>\n          </mat-select>\n          <!-- <mat-error *ngIf=\"isFieldInvalid('role_name')\">\n            Your role please\n          </mat-error> -->\n        </mat-form-field>\n\n        <br>\n        <button type=\"submit\" [disabled]=\"!createUser.valid\" mat-raised-button color=\"primary\">Register\n        </button>\n\n      </form>\n    </div>\n    <div class=\"col-md-3\">\n    </div>\n  </div>\n</div>\n\n\n\n\n<!-- <input id=\"name\" name=\"name\" class=\"form-control\"\n      required minlength=\"4\" appForbiddenName=\"bob\"\n      [(ngModel)]=\"hero.name\" #name=\"ngModel\" > -->\n\n<!-- <div *ngIf=\"name.invalid\">\n    Name is required.\n</div> -->\n"

/***/ }),

/***/ "./src/app/components/user/adduser/adduser.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/user/adduser/adduser.component.ts ***!
  \**************************************************************/
/*! exports provided: AdduserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdduserComponent", function() { return AdduserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var AdduserComponent = /** @class */ (function () {
    function AdduserComponent(httpService, fb, router, route, snackBar) {
        this.httpService = httpService;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.snackBar = snackBar;
        this.submitted = false;
        this.mode = 'Add';
        this.createUser = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            role_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    AdduserComponent.prototype.ngOnInit = function () {
        this.fetchRoles();
        var id = this.route.snapshot.params["id"];
        if (id) {
            this.usersList(id);
            this.mode = "Edit";
        }
        else {
            this.mode = "Create";
            this.validator();
        }
    };
    Object.defineProperty(AdduserComponent.prototype, "c", {
        // convenience getter for easy access to form fields
        get: function () { return this.createUser.controls; },
        enumerable: true,
        configurable: true
    });
    // addUser(){
    //   const user = {
    //       name: this.name,
    //       email: this.email,
    //       role_name: this.role_name
    //     };
    //   this.httpService.doPost('user/add',user);
    //   // .subscribe(() => {
    //   //   this.router.navigate(['/dashboard']);
    //   // });
    // }
    AdduserComponent.prototype.fetchRoles = function () {
        var _this = this;
        this.httpService.doGet('roles')
            .subscribe(function (data) {
            _this.roles = data;
            console.log('Data requested ...');
            console.log(_this.roles);
        });
    };
    //   for(var i = 0; i < this.roles.length; i++)
    // {
    //   var element = this.roles.role_name[i];
    //   for (var j = 0; j < role_name.length; j++) {
    //     var version = role_name[j];
    //   }
    // }
    // isFieldInvalid(field: string) { // {6}
    //   return (
    //     (!this.createUser.get(field).valid && this.createUser.get(field).touched) ||
    //     (this.createUser.get(field).untouched && this.formSubmitAttempt)
    //   );
    // }
    AdduserComponent.prototype.usersList = function (id) {
        var _this = this;
        this.httpService.doGet("users/" + id).subscribe(function (res) {
            // this.issue = res;
            // this.createUser.get('name').setValue(res.name);
            // this.createUser.get('email').setValue(res.email);
            // this.createUser.get('role_name').setValue(res.role_name);
            _this.name = res.name;
            _this.email = res.email;
            _this.role_name = res.role_name;
            _this.validator();
        });
    };
    AdduserComponent.prototype.validator = function () {
        this.createUser = this.fb.group({
            name: [this.name],
            email: [this.email],
            role_name: [this.role_name]
        });
    };
    AdduserComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        var that = this;
        var id = this.route.snapshot.params["id"];
        if (!id) {
            // console.log(id);
            console.log(this.createUser.value);
            if (!this.createUser.invalid) {
                this.httpService.doPost("user/add", this.createUser.value)
                    .subscribe(function () {
                    _this.snackBar.open('User added successfully', 'OK', {
                        duration: 5000,
                        verticalPosition: 'top',
                        horizontalPosition: 'right'
                    });
                    that.router.navigate(["user"]);
                });
            }
        }
        else {
            this.httpService.doPatch("users/" + id, this.createUser.value)
                .subscribe(function () {
                _this.snackBar.open('User updated successfully', 'OK', {
                    duration: 5000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right'
                });
                that.router.navigate(["user"]);
            });
        }
        this.formSubmitAttempt = true;
    };
    AdduserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adduser',
            template: __webpack_require__(/*! ./adduser.component.html */ "./src/app/components/user/adduser/adduser.component.html"),
            styles: [__webpack_require__(/*! ./adduser.component.css */ "./src/app/components/user/adduser/adduser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], AdduserComponent);
    return AdduserComponent;
}());



/***/ }),

/***/ "./src/app/components/user/home/home.component.css":
/*!*********************************************************!*\
  !*** ./src/app/components/user/home/home.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/user/home/home.component.html":
/*!**********************************************************!*\
  !*** ./src/app/components/user/home/home.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/user/home/home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/user/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../http.service */ "./src/app/http.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(httpService) {
        this.httpService = httpService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var lsuser = JSON.parse(localStorage.getItem('user'));
        console.log(lsuser);
        for (var i = 0; i < lsuser.length; i++) {
            var item = lsuser[i];
        }
        this.role = item.name;
        this.id = item._id;
        console.log(this.role);
        this.httpService.doGet("permissions/" + this.id).subscribe(function (res) {
            _this.permission = res;
        });
        console.log(this.permission);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/user/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/user/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/user/listuser/listuser.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/user/listuser/listuser.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9saXN0dXNlci9saXN0dXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/user/listuser/listuser.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/user/listuser/listuser.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/user/adduser\">Add User</a>\n<div>\n    <!-- <button type=\"button\" class=\"btn btn-primary\" (click)=\"addUser()\" style=\"float: right;\">New Project</button> -->\n  <div class=\"card-body\">\n    <table class=\"table table-bordered\">\n      <tr>\n        <!-- <th>#</th> -->\n        <th>Name</th>\n        <th>Email</th>\n        <th>Role</th>\n        <th>Actions</th>\n      </tr>\n      <tr *ngFor=\"let user of users\">\n        <!-- <td>{{project._id}}</td> -->\n        <td>{{user.name}}</td>\n        <td>{{user.email}}</td>\n        <td><div *ngFor=\"let role of user.role_name\">{{role.name}}</div></td>\n        <td>\n            <!-- /users/add/ -->\n            <a routerLink=\"adduser/{{user._id}}\">Edit</a>&nbsp;\n          <a href=\"javascript:;\" (click)=\"deleteUser($event)\" data-id=\"{{user._id}}\">Delete</a>\n         </td>\n      </tr>\n    </table>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/user/listuser/listuser.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/user/listuser/listuser.component.ts ***!
  \****************************************************************/
/*! exports provided: ListuserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListuserComponent", function() { return ListuserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../http.service */ "./src/app/http.service.ts");




var ListuserComponent = /** @class */ (function () {
    function ListuserComponent(httpService, router) {
        this.httpService = httpService;
        this.router = router;
    }
    ListuserComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    ListuserComponent.prototype.getUsers = function () {
        var _this = this;
        this.httpService.doGet("users").subscribe(function (res) {
            _this.users = res;
        });
        console.log(this.users);
    };
    ListuserComponent.prototype.deleteUser = function ($event) {
        var id = $event.target.id;
        var that = this;
        this.httpService.doDel("users/" + id).subscribe(function (res) {
            that.getUsers();
        });
    };
    ListuserComponent.prototype.addUser = function () {
        this.router.navigate(['/adduser']);
    };
    ListuserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listuser',
            template: __webpack_require__(/*! ./listuser.component.html */ "./src/app/components/user/listuser/listuser.component.html"),
            styles: [__webpack_require__(/*! ./listuser.component.css */ "./src/app/components/user/listuser/listuser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListuserComponent);
    return ListuserComponent;
}());



/***/ }),

/***/ "./src/app/components/user/loginuser/loginuser.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/user/loginuser/loginuser.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9sb2dpbnVzZXIvbG9naW51c2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/user/loginuser/loginuser.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/user/loginuser/loginuser.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\">3 grid</div>\n    <div class=\"col-md-6\">\n      <form [formGroup]=\"loginForm\" name=\"loginForm\" (ngSubmit)=\"login()\">\n        <mat-form-field class=\"field-full-width\">\n          <input matInput placeholder=\"email\" formControlName=\"email\" #email>\n        </mat-form-field>\n        <br>\n        <button type=\"submit\" mat-raised-button color=\"primary\">Login</button>\n      </form>\n    </div>\n    <div class=\"col-md-3\">3 grid</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user/loginuser/loginuser.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/user/loginuser/loginuser.component.ts ***!
  \******************************************************************/
/*! exports provided: LoginuserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginuserComponent", function() { return LoginuserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




// import { Route } from "@angular/compiler/src/core";

var LoginuserComponent = /** @class */ (function () {
    function LoginuserComponent(fb, httpService, route, router) {
        this.fb = fb;
        this.httpService = httpService;
        this.route = route;
        this.router = router;
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
        });
    }
    LoginuserComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('isLoggedin') == 'true') {
            this.router.navigate(['/user']);
        }
        this.validator();
    };
    // fetch the roles
    // async fetchRole() {
    //   await this.login();
    //   this.httpService.doGet("users").subscribe(res => {
    //     this.users = res;
    //   });
    //   console.log(this.users.role_name);
    // }
    //1st function to call
    LoginuserComponent.prototype.login = function () {
        var that = this;
        this.httpService
            .doLogin("login", this.loginForm.value)
            .subscribe(function (data) {
            console.log(data);
            if (data.message == 'fail') {
                alert('Failed');
            }
            else {
                localStorage.setItem('user', JSON.stringify(data.role_name));
                localStorage.setItem('isLoggedin', 'true');
                that.router.navigate(["/home"]);
            }
        }, function (err) { });
    };
    //2nd function to call
    LoginuserComponent.prototype.getPermission = function () {
        var _this = this;
        var lsuser = JSON.parse(localStorage.getItem('user'));
        console.log(lsuser);
        for (var i = 0; i < lsuser.length; i++) {
            var item = lsuser[i];
        }
        this.role = item.name;
        console.log(this.role);
        this.httpService.doGet('permissions/' + this.role).subscribe(function (res) {
            _this.permissions = res;
        });
        console.log(this.permissions);
    };
    //Last function to call
    // getAlldata() {
    //   this.login();
    //   console.log()
    //     .subscribe(
    //       () => {
    //         this.getPermission();
    //       })
    //     .subscribe(
    //       () => { console.log(); });
    // }
    LoginuserComponent.prototype.validator = function () {
        this.loginForm = this.fb.group({
            email: [this.email],
        });
    };
    LoginuserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loginuser',
            template: __webpack_require__(/*! ./loginuser.component.html */ "./src/app/components/user/loginuser/loginuser.component.html"),
            styles: [__webpack_require__(/*! ./loginuser.component.css */ "./src/app/components/user/loginuser/loginuser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginuserComponent);
    return LoginuserComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/user/user-routing.module.ts ***!
  \********************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adduser_adduser_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adduser/adduser.component */ "./src/app/components/user/adduser/adduser.component.ts");
/* harmony import */ var _listuser_listuser_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listuser/listuser.component */ "./src/app/components/user/listuser/listuser.component.ts");
/* harmony import */ var _loginuser_loginuser_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loginuser/loginuser.component */ "./src/app/components/user/loginuser/loginuser.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/components/user/home/home.component.ts");







var roles = ["admin", "developer", "Q.A."];
var routes = [
    {
        path: 'login',
        component: _loginuser_loginuser_component__WEBPACK_IMPORTED_MODULE_5__["LoginuserComponent"]
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
    },
    {
        path: '',
        component: _listuser_listuser_component__WEBPACK_IMPORTED_MODULE_4__["ListuserComponent"]
        // canActivate: [AuthGuardService]
        // data: {
        //   allowedRoles: ['admin','developer','Q.A.']
        // }
    },
    {
        path: 'adduser',
        component: _adduser_adduser_component__WEBPACK_IMPORTED_MODULE_3__["AdduserComponent"]
        // canActivate: [AuthGuardService]
        // data: {
        //   allowedRoles: ['admin']
        // }
    },
    {
        path: 'adduser/:id',
        component: _adduser_adduser_component__WEBPACK_IMPORTED_MODULE_3__["AdduserComponent"]
        // canActivate: [AuthGuardService]
        // data: {
        //   allowedRoles: ['admin']
        // }
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/user/user.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/user/user.module.ts ***!
  \************************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/components/user/user-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _adduser_adduser_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adduser/adduser.component */ "./src/app/components/user/adduser/adduser.component.ts");
/* harmony import */ var _listuser_listuser_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./listuser/listuser.component */ "./src/app/components/user/listuser/listuser.component.ts");
/* harmony import */ var _loginuser_loginuser_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loginuser/loginuser.component */ "./src/app/components/user/loginuser/loginuser.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/components/user/home/home.component.ts");










var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_adduser_adduser_component__WEBPACK_IMPORTED_MODULE_6__["AdduserComponent"], _listuser_listuser_component__WEBPACK_IMPORTED_MODULE_7__["ListuserComponent"], _loginuser_loginuser_component__WEBPACK_IMPORTED_MODULE_8__["LoginuserComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDividerModule"]
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-user-user-module.js.map