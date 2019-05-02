(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-entity-entity-module"],{

/***/ "./src/app/components/entity/addentity/addentity.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/entity/addentity/addentity.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW50aXR5L2FkZGVudGl0eS9hZGRlbnRpdHkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/entity/addentity/addentity.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/entity/addentity/addentity.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      {{mode}} entity<br>\n      <a routerLink=\"/entity\">List Entities</a>\n    </div>\n    <div class=\"col-md-6\">\n      <form [formGroup]=\"createEntity\" name=\"createEntity\" (ngSubmit)=\"onSubmit()\">\n\n        <mat-form-field class=\"field-full-width\">\n          <input matInput id=\"entity_name\" placeholder=\"Entity Name\" formControlName=\"entity_name\"\n            [ngClass]=\"{'is-invalid': submitted && c.entity_name.errors}\" #entity_name required>\n          <div *ngIf=\"submitted && c.entity_name.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"c.entity_name.errors.required\">Entity name is required</div>\n          </div>\n        </mat-form-field>\n\n        <br>\n\n        <button type=\"submit\" [disabled]=\"!createEntity.valid\" mat-raised-button color=\"primary\">Add Entity\n        </button>\n      </form>\n    </div>\n    <div class=\"col-md-3\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/entity/addentity/addentity.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/entity/addentity/addentity.component.ts ***!
  \********************************************************************/
/*! exports provided: AddentityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddentityComponent", function() { return AddentityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../http.service */ "./src/app/http.service.ts");





var AddentityComponent = /** @class */ (function () {
    function AddentityComponent(httpService, fb, router, route) {
        this.httpService = httpService;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.mode = 'Add';
        this.createEntity = this.fb.group({
            entity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    AddentityComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params["id"];
        if (id) {
            this.entitiesList(id);
            this.mode = "Edit";
        }
        else {
            this.mode = "Create";
            this.validator();
        }
    };
    AddentityComponent.prototype.entitiesList = function (id) {
        var _this = this;
        this.httpService.doGet("entities/" + id).subscribe(function (res) {
            _this.entity_name = res.entity_name;
            _this.validator();
        });
    };
    AddentityComponent.prototype.validator = function () {
        this.createEntity = this.fb.group({
            entity_name: [this.entity_name]
        });
    };
    AddentityComponent.prototype.onSubmit = function () {
        var that = this;
        var id = this.route.snapshot.params["id"];
        if (!id) {
            console.log(id);
            console.log(this.createEntity.value);
            this.httpService.doPost("entity/add", this.createEntity.value)
                .subscribe(function (data) {
                that.router.navigate(["entity"]);
            }, function (err) { });
        }
        else {
            this.httpService.doPatch("entities/" + id, this.createEntity.value)
                .subscribe(function (data) {
                that.router.navigate(["entity"]);
            }, function (err) { });
        }
    };
    AddentityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addentity',
            template: __webpack_require__(/*! ./addentity.component.html */ "./src/app/components/entity/addentity/addentity.component.html"),
            styles: [__webpack_require__(/*! ./addentity.component.css */ "./src/app/components/entity/addentity/addentity.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AddentityComponent);
    return AddentityComponent;
}());



/***/ }),

/***/ "./src/app/components/entity/entity-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/entity/entity-routing.module.ts ***!
  \************************************************************/
/*! exports provided: EntityRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityRoutingModule", function() { return EntityRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _addentity_addentity_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addentity/addentity.component */ "./src/app/components/entity/addentity/addentity.component.ts");
/* harmony import */ var _listentity_listentity_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listentity/listentity.component */ "./src/app/components/entity/listentity/listentity.component.ts");





var routes = [
    {
        path: '',
        component: _listentity_listentity_component__WEBPACK_IMPORTED_MODULE_4__["ListentityComponent"]
    },
    {
        path: 'addentity',
        component: _addentity_addentity_component__WEBPACK_IMPORTED_MODULE_3__["AddentityComponent"]
    },
    {
        path: 'addentity/:id',
        component: _addentity_addentity_component__WEBPACK_IMPORTED_MODULE_3__["AddentityComponent"]
    }
];
var EntityRoutingModule = /** @class */ (function () {
    function EntityRoutingModule() {
    }
    EntityRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], EntityRoutingModule);
    return EntityRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/entity/entity.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/entity/entity.module.ts ***!
  \****************************************************/
/*! exports provided: EntityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityModule", function() { return EntityModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _entity_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entity-routing.module */ "./src/app/components/entity/entity-routing.module.ts");
/* harmony import */ var _addentity_addentity_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addentity/addentity.component */ "./src/app/components/entity/addentity/addentity.component.ts");
/* harmony import */ var _listentity_listentity_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./listentity/listentity.component */ "./src/app/components/entity/listentity/listentity.component.ts");








var EntityModule = /** @class */ (function () {
    function EntityModule() {
    }
    EntityModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_addentity_addentity_component__WEBPACK_IMPORTED_MODULE_6__["AddentityComponent"], _listentity_listentity_component__WEBPACK_IMPORTED_MODULE_7__["ListentityComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _entity_routing_module__WEBPACK_IMPORTED_MODULE_5__["EntityRoutingModule"],
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
    ], EntityModule);
    return EntityModule;
}());



/***/ }),

/***/ "./src/app/components/entity/listentity/listentity.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/entity/listentity/listentity.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW50aXR5L2xpc3RlbnRpdHkvbGlzdGVudGl0eS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/entity/listentity/listentity.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/entity/listentity/listentity.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/entity/addentity\">Add Entity</a>\n<div>\n\n  <div class=\"card-body\">\n    <table class=\"table table-bordered\">\n      <tr>\n        <!-- <th>#</th> -->\n        <th>Entity Name</th>\n        <th>Actions</th>\n      </tr>\n      <tr *ngFor=\"let entity of entities\">\n        <td>{{entity.entity_name}}</td>\n        <td>\n          <a routerLink=\"addentity/{{entity._id}}\">Edit</a>&nbsp;\n          <a href=\"javascript:;\" (click)=\"deleteEntity($event)\" data-id=\"{{entity._id}}\">Delete</a>\n        </td>\n      </tr>\n    </table>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/entity/listentity/listentity.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/entity/listentity/listentity.component.ts ***!
  \**********************************************************************/
/*! exports provided: ListentityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListentityComponent", function() { return ListentityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../http.service */ "./src/app/http.service.ts");




var ListentityComponent = /** @class */ (function () {
    function ListentityComponent(httpService, router) {
        this.httpService = httpService;
        this.router = router;
    }
    ListentityComponent.prototype.ngOnInit = function () {
        this.getEntities();
    };
    ListentityComponent.prototype.getEntities = function () {
        var _this = this;
        this.httpService.doGet("entities").subscribe(function (res) {
            _this.entities = res;
        });
        console.log(this.entities);
    };
    ListentityComponent.prototype.deleteEntity = function ($event) {
        var id = $event.target.id;
        var that = this;
        this.httpService.doDel("entities/" + id).subscribe(function (res) {
            that.getEntities();
        });
    };
    ListentityComponent.prototype.addEntity = function () {
        this.router.navigate(['/addentity']);
    };
    ListentityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listentity',
            template: __webpack_require__(/*! ./listentity.component.html */ "./src/app/components/entity/listentity/listentity.component.html"),
            styles: [__webpack_require__(/*! ./listentity.component.css */ "./src/app/components/entity/listentity/listentity.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListentityComponent);
    return ListentityComponent;
}());



/***/ })

}]);
//# sourceMappingURL=components-entity-entity-module.js.map