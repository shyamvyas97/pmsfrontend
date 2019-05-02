(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-permission-permission-module"],{

/***/ "./src/app/components/permission/addpermission/addpermission.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/components/permission/addpermission/addpermission.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGVybWlzc2lvbi9hZGRwZXJtaXNzaW9uL2FkZHBlcm1pc3Npb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/permission/addpermission/addpermission.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/permission/addpermission/addpermission.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      {{mode}} permission<br>\n      <a routerLink=\"/bug\">List Permissions</a>\n      <br><br><br>Add/Edit<br>View<br>Delete\n    </div>\n    <div class=\"col-md-6\">\n      <form [formGroup]=\"createPermission\" name=\"createPermission\" (ngSubmit)=\"onSubmit()\">\n\n        <mat-form-field class=\"field-full-width\">\n          <mat-select formControlName=\"entity_name\" placeholder=\"Entities\" required #entity_name>\n            <mat-option *ngFor=\"let entity of entities\" [value]=\"entity._id\">{{entity.entity_name}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <br>\n\n        <mat-form-field class=\"field-full-width\">\n          <mat-select formControlName=\"role_name\" placeholder=\"Roles\" required multiple #role_name>\n            <mat-option *ngFor=\"let role of roles\" [value]=\"role._id\">{{role.name}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <br>\n\n        <mat-radio-group aria-label=\"Set Add/Edit Permission\" formControlName=\"add_edit\">\n          <mat-radio-button value=\"1\">Yes</mat-radio-button>\n          <mat-radio-button value=\"0\">No</mat-radio-button>\n        </mat-radio-group>\n\n        <br>\n\n        <mat-radio-group aria-label=\"Set View Permission\" formControlName=\"list\">\n          <mat-radio-button value=\"1\">Yes</mat-radio-button>\n          <mat-radio-button value=\"0\">No</mat-radio-button>\n        </mat-radio-group>\n\n        <br>\n\n        <mat-radio-group aria-label=\"Set Delete Permission\" formControlName=\"del\">\n          <mat-radio-button value=\"1\">Yes</mat-radio-button>\n          <mat-radio-button value=\"0\">No</mat-radio-button>\n        </mat-radio-group>\n\n        <br>\n\n        <button type=\"submit\" [disabled]=\"!createPermission.valid\" mat-raised-button color=\"primary\">Add Permission\n        </button>\n      </form>\n    </div>\n    <div class=\"col-md-3\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/permission/addpermission/addpermission.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/permission/addpermission/addpermission.component.ts ***!
  \********************************************************************************/
/*! exports provided: AddpermissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddpermissionComponent", function() { return AddpermissionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../http.service */ "./src/app/http.service.ts");





var AddpermissionComponent = /** @class */ (function () {
    function AddpermissionComponent(httpService, fb, router, route) {
        this.httpService = httpService;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.submitted = false;
        this.mode = 'Add';
        this.createPermission = this.fb.group({
            entity_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            role_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            add_edit: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            del: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            list: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    AddpermissionComponent.prototype.ngOnInit = function () {
        this.fetchRoles();
        this.fetchEntities();
        var id = this.route.snapshot.params["id"];
        if (id) {
            this.permissionsList(id);
            this.mode = "Edit";
        }
        else {
            this.mode = "Create";
            this.validator();
        }
    };
    AddpermissionComponent.prototype.permissionsList = function (id) {
        var _this = this;
        this.httpService.doGet("permissions/" + id).subscribe(function (res) {
            _this.entity_name = res.entity_name;
            _this.role_name = res.role_name;
            _this.add_edit = res.add_edit;
            _this.del = res.del;
            _this.list = res.list;
            _this.validator();
        });
    };
    AddpermissionComponent.prototype.getc = function () { return this.createPermission.controls; };
    AddpermissionComponent.prototype.fetchRoles = function () {
        var _this = this;
        this.httpService.doGet('roles')
            .subscribe(function (data) {
            _this.roles = data;
            console.log('Data requested ...');
            console.log(_this.roles);
        });
    };
    AddpermissionComponent.prototype.fetchEntities = function () {
        var _this = this;
        this.httpService.doGet('entities')
            .subscribe(function (req_data) {
            _this.entities = req_data;
            console.log(_this.entities);
        });
    };
    AddpermissionComponent.prototype.validator = function () {
        this.createPermission = this.fb.group({
            entity_name: [this.entity_name],
            role_name: [this.role_name],
            add_edit: [this.add_edit],
            del: [this.del],
            list: [this.list]
        });
    };
    AddpermissionComponent.prototype.onSubmit = function () {
        this.submitted = true;
        var that = this;
        var id = this.route.snapshot.params["id"];
        if (!id) {
            // console.log(id);
            if (!this.createPermission.invalid) {
                console.log(this.createPermission.value);
                this.httpService.doPost("permission/add", this.createPermission.value)
                    .subscribe(function () {
                    that.router.navigate(["permission"]);
                });
            }
        }
        else {
            this.httpService.doPatch("permissions/" + id, this.createPermission.value)
                .subscribe(function () {
                that.router.navigate(["permission"]);
            });
        }
        this.formSubmitAttempt = true;
    };
    AddpermissionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addpermission',
            template: __webpack_require__(/*! ./addpermission.component.html */ "./src/app/components/permission/addpermission/addpermission.component.html"),
            styles: [__webpack_require__(/*! ./addpermission.component.css */ "./src/app/components/permission/addpermission/addpermission.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AddpermissionComponent);
    return AddpermissionComponent;
}());



/***/ }),

/***/ "./src/app/components/permission/listpermission/listpermission.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/components/permission/listpermission/listpermission.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGVybWlzc2lvbi9saXN0cGVybWlzc2lvbi9saXN0cGVybWlzc2lvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/permission/listpermission/listpermission.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/components/permission/listpermission/listpermission.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/permission/addpermission\">Add Permission</a>\n<div>\n  <div class=\"card-body\">\n    <table class=\"table table-bordered\">\n      <tr>\n        <!-- <th>#</th> -->\n        <th>Entity</th>\n        <th>Role</th>\n        <th>Add/Edit</th>\n        <th>List</th>\n        <th>Delete</th>\n        <th>Actions</th>\n      </tr>\n      <tr *ngFor=\"let permission of permissions\">\n        <td>\n          <div *ngFor=\"let entity of permission.entity_name\">{{entity.entity_name}}</div>\n        </td>\n        <td>\n          <div *ngFor=\"let role of permission.role_name\">{{role.name}}</div>\n        </td>\n        <td>{{permission.add_edit}}</td>\n        <td>{{permission.list}}</td>\n        <td>{{permission.del}}</td>\n        <td>\n          <a routerLink=\"addpermission/{{permission._id}}\">Edit</a>&nbsp;\n          <a href=\"javascript:;\" (click)=\"deletePermission($event)\" data-id=\"{{permission._id}}\">Delete</a>\n        </td>\n      </tr>\n    </table>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/permission/listpermission/listpermission.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/permission/listpermission/listpermission.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ListpermissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListpermissionComponent", function() { return ListpermissionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../http.service */ "./src/app/http.service.ts");




var ListpermissionComponent = /** @class */ (function () {
    function ListpermissionComponent(httpService, router) {
        this.httpService = httpService;
        this.router = router;
    }
    ListpermissionComponent.prototype.ngOnInit = function () {
        this.getPermissions();
    };
    ListpermissionComponent.prototype.getPermissions = function () {
        var _this = this;
        this.httpService.doGet("permissions").subscribe(function (res) {
            _this.permissions = res;
        });
        console.log(this.permissions);
    };
    ListpermissionComponent.prototype.deletePermission = function ($event) {
        var id = $event.target.id;
        var that = this;
        this.httpService.doDel("permissions/" + id).subscribe(function (res) {
            that.getPermissions();
        });
    };
    ListpermissionComponent.prototype.addPermission = function () {
        this.router.navigate(['addpermission']);
    };
    ListpermissionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listpermission',
            template: __webpack_require__(/*! ./listpermission.component.html */ "./src/app/components/permission/listpermission/listpermission.component.html"),
            styles: [__webpack_require__(/*! ./listpermission.component.css */ "./src/app/components/permission/listpermission/listpermission.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListpermissionComponent);
    return ListpermissionComponent;
}());



/***/ }),

/***/ "./src/app/components/permission/permission-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/permission/permission-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: PermissionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionRoutingModule", function() { return PermissionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _addpermission_addpermission_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addpermission/addpermission.component */ "./src/app/components/permission/addpermission/addpermission.component.ts");
/* harmony import */ var _listpermission_listpermission_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listpermission/listpermission.component */ "./src/app/components/permission/listpermission/listpermission.component.ts");





var routes = [
    {
        path: '',
        component: _listpermission_listpermission_component__WEBPACK_IMPORTED_MODULE_4__["ListpermissionComponent"]
    },
    {
        path: 'addpermission',
        component: _addpermission_addpermission_component__WEBPACK_IMPORTED_MODULE_3__["AddpermissionComponent"]
    },
    {
        path: 'addpermission/:id',
        component: _addpermission_addpermission_component__WEBPACK_IMPORTED_MODULE_3__["AddpermissionComponent"]
    }
];
var PermissionRoutingModule = /** @class */ (function () {
    function PermissionRoutingModule() {
    }
    PermissionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PermissionRoutingModule);
    return PermissionRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/permission/permission.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/permission/permission.module.ts ***!
  \************************************************************/
/*! exports provided: PermissionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionModule", function() { return PermissionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _permission_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./permission-routing.module */ "./src/app/components/permission/permission-routing.module.ts");
/* harmony import */ var _addpermission_addpermission_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addpermission/addpermission.component */ "./src/app/components/permission/addpermission/addpermission.component.ts");
/* harmony import */ var _listpermission_listpermission_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./listpermission/listpermission.component */ "./src/app/components/permission/listpermission/listpermission.component.ts");








var PermissionModule = /** @class */ (function () {
    function PermissionModule() {
    }
    PermissionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_addpermission_addpermission_component__WEBPACK_IMPORTED_MODULE_6__["AddpermissionComponent"], _listpermission_listpermission_component__WEBPACK_IMPORTED_MODULE_7__["ListpermissionComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _permission_routing_module__WEBPACK_IMPORTED_MODULE_5__["PermissionRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"]
            ]
        })
    ], PermissionModule);
    return PermissionModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-permission-permission-module.js.map