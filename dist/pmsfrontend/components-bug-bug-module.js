(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-bug-bug-module"],{

/***/ "./src/app/components/bug/addbug/addbug.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/bug/addbug/addbug.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnVnL2FkZGJ1Zy9hZGRidWcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/bug/addbug/addbug.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/bug/addbug/addbug.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      {{mode}} bug<br>\n      <a routerLink=\"/bug\">List Bugs</a>\n    </div>\n    <div class=\"col-md-6\">\n      <form [formGroup]=\"createBug\" name=\"createBug\" (ngSubmit)=\"onSubmit()\">\n        <mat-form-field>\n          <input matInput placeholder=\"bug_name\" formControlName=\"bug_name\" required #bug_name>\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"field-full-width\">\n          <mat-select formControlName=\"of_project\" #of_project required placeholder=\"of_project\">\n            <mat-option *ngFor=\"let project of projects\" [value]=\"project._id\">{{project.title}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"field-full-width\">\n          <mat-select formControlName=\"users_assigned\" #users_assigned required placeholder=\"users_assigned\" multiple>\n            <mat-option *ngFor=\"let user of users\" [value]=\"user._id\">{{user.name}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n        <br>\n        <button type=\"submit\" [disabled]=\"!createBug.valid\" mat-raised-button color=\"primary\">Add Bug\n        </button>\n      </form>\n    </div>\n    <div class=\"col-md-3\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/bug/addbug/addbug.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/bug/addbug/addbug.component.ts ***!
  \***********************************************************/
/*! exports provided: AddbugComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbugComponent", function() { return AddbugComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../http.service */ "./src/app/http.service.ts");





var AddbugComponent = /** @class */ (function () {
    function AddbugComponent(httpService, fb, router, route) {
        this.httpService = httpService;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.mode = 'Add';
        this.createBug = this.fb.group({
            bug_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            of_project: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            users_assigned: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    // addBug() {
    //   const task = {
    //     bug_name: this.bug_name,
    //     of_project: this.of_project,
    //     users_assigned: this.users_assigned
    //   };
    //   this.httpService.doPost('bug/add', task);
    //   // .subscribe(() => {
    //   //   this.router.navigate(['/dashboard']);
    //   // });
    // }
    AddbugComponent.prototype.fetchUsers = function () {
        var _this = this;
        this.httpService.doGet('users')
            .subscribe(function (data) {
            _this.users = data;
            console.log('Data requested ...');
            console.log(_this.users);
        });
    };
    AddbugComponent.prototype.fetchProjects = function () {
        var _this = this;
        this.httpService.doGet('projects')
            .subscribe(function (data) {
            _this.projects = data;
            console.log('Data requested ...');
            console.log(_this.projects);
        });
    };
    AddbugComponent.prototype.ngOnInit = function () {
        this.fetchProjects();
        this.fetchUsers();
        var id = this.route.snapshot.params["id"];
        if (id) {
            this.bugsList(id);
            this.mode = "Edit";
        }
        else {
            this.mode = "Create";
            this.validator();
        }
    };
    AddbugComponent.prototype.bugsList = function (id) {
        var _this = this;
        this.httpService.doGet("bugs/" + id).subscribe(function (res) {
            _this.bug_name = res.bug_name;
            _this.of_project = res.of_project;
            _this.users_assigned = res.users_assigned;
            _this.validator();
        });
    };
    AddbugComponent.prototype.validator = function () {
        this.createBug = this.fb.group({
            bug_name: [this.bug_name],
            of_project: [this.of_project],
            users_assigned: [this.users_assigned]
        });
    };
    AddbugComponent.prototype.onSubmit = function () {
        var that = this;
        var id = this.route.snapshot.params["id"];
        if (!id) {
            console.log(id);
            this.httpService.doPost("bug/add", this.createBug.value)
                .subscribe(function (data) {
                that.router.navigate(["bug"]);
            }, function (err) { });
        }
        else {
            this.httpService.doPatch("bugs/" + id, this.createBug.value)
                .subscribe(function (data) {
                that.router.navigate(["bug"]);
            }, function (err) { });
        }
    };
    AddbugComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addbug',
            template: __webpack_require__(/*! ./addbug.component.html */ "./src/app/components/bug/addbug/addbug.component.html"),
            styles: [__webpack_require__(/*! ./addbug.component.css */ "./src/app/components/bug/addbug/addbug.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AddbugComponent);
    return AddbugComponent;
}());



/***/ }),

/***/ "./src/app/components/bug/bug-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/bug/bug-routing.module.ts ***!
  \******************************************************/
/*! exports provided: BugRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BugRoutingModule", function() { return BugRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _addbug_addbug_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addbug/addbug.component */ "./src/app/components/bug/addbug/addbug.component.ts");
/* harmony import */ var _listbug_listbug_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listbug/listbug.component */ "./src/app/components/bug/listbug/listbug.component.ts");





var routes = [
    {
        path: '',
        component: _listbug_listbug_component__WEBPACK_IMPORTED_MODULE_4__["ListbugComponent"]
    },
    {
        path: 'addbug',
        component: _addbug_addbug_component__WEBPACK_IMPORTED_MODULE_3__["AddbugComponent"]
    },
    {
        path: 'addbug/:id',
        component: _addbug_addbug_component__WEBPACK_IMPORTED_MODULE_3__["AddbugComponent"]
    }
];
var BugRoutingModule = /** @class */ (function () {
    function BugRoutingModule() {
    }
    BugRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BugRoutingModule);
    return BugRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/bug/bug.module.ts":
/*!**********************************************!*\
  !*** ./src/app/components/bug/bug.module.ts ***!
  \**********************************************/
/*! exports provided: BugModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BugModule", function() { return BugModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _bug_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bug-routing.module */ "./src/app/components/bug/bug-routing.module.ts");
/* harmony import */ var _addbug_addbug_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addbug/addbug.component */ "./src/app/components/bug/addbug/addbug.component.ts");
/* harmony import */ var _listbug_listbug_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./listbug/listbug.component */ "./src/app/components/bug/listbug/listbug.component.ts");








var BugModule = /** @class */ (function () {
    function BugModule() {
    }
    BugModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_addbug_addbug_component__WEBPACK_IMPORTED_MODULE_6__["AddbugComponent"], _listbug_listbug_component__WEBPACK_IMPORTED_MODULE_7__["ListbugComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _bug_routing_module__WEBPACK_IMPORTED_MODULE_5__["BugRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
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
    ], BugModule);
    return BugModule;
}());



/***/ }),

/***/ "./src/app/components/bug/listbug/listbug.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/bug/listbug/listbug.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnVnL2xpc3RidWcvbGlzdGJ1Zy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/bug/listbug/listbug.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/bug/listbug/listbug.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <a routerLink=\"/bug/addbug\">Add Bug</a>\n  <div class=\"card-body\">\n    <table class=\"table table-bordered\">\n      <tr>\n        <!-- <th>#</th> -->\n        <th>Bug</th>\n        <th>Project</th>\n        <th>Users</th>\n        <th>Actions</th>\n      </tr>\n      <tr *ngFor=\"let bug of bugs; let ind = index\">\n        <!-- <td>{{project._id}}</td> -->\n        <td>{{bug.bug_name}}</td>\n        <td>{{bug.of_project[0]?.title}}</td>\n        <!-- <td>{{bug.users_assigned[0]?.name}}</td> -->\n        <td><div *ngFor=\"let user of bug.users_assigned\">{{user.name}}</div></td>\n        <td>\n          <a routerLink=\"addbug/{{bug._id}}\">Edit</a>&nbsp;\n          <a href=\"javascript:;\" (click)=\"deleteBug($event)\" data-id=\"{{bug._id}}\">Delete</a>\n          <!-- <a routerLink=\"/{{commonFunctions.getAccessCodePrefix()}}/projects/edit/{{project._id}}\">Edit</a>&nbsp;\n            <a href=\"javascript:;\" (click)=\"deleteProject($event)\" data-id=\"{{project._id}}\">Delete</a> -->\n        </td>\n      </tr>\n    </table>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/bug/listbug/listbug.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/bug/listbug/listbug.component.ts ***!
  \*************************************************************/
/*! exports provided: ListbugComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListbugComponent", function() { return ListbugComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../http.service */ "./src/app/http.service.ts");




var ListbugComponent = /** @class */ (function () {
    function ListbugComponent(httpService, router) {
        this.httpService = httpService;
        this.router = router;
    }
    ListbugComponent.prototype.ngOnInit = function () {
        this.getBugs();
    };
    ListbugComponent.prototype.getBugs = function () {
        var _this = this;
        this.httpService.doGet("bugs").subscribe(function (res) {
            _this.bugs = res;
        });
        console.log(this.bugs);
    };
    ListbugComponent.prototype.deleteBug = function ($event) {
        var id = $event.target.id;
        var that = this;
        this.httpService.doDel("bugs/" + id).subscribe(function (res) {
            that.getBugs();
        });
    };
    ListbugComponent.prototype.addBug = function () {
        this.router.navigate(['addbug']);
    };
    ListbugComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listbug',
            template: __webpack_require__(/*! ./listbug.component.html */ "./src/app/components/bug/listbug/listbug.component.html"),
            styles: [__webpack_require__(/*! ./listbug.component.css */ "./src/app/components/bug/listbug/listbug.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListbugComponent);
    return ListbugComponent;
}());



/***/ })

}]);
//# sourceMappingURL=components-bug-bug-module.js.map