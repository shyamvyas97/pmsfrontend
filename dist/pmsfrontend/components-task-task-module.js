(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-task-task-module"],{

/***/ "./src/app/components/task/addtask/addtask.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/task/addtask/addtask.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFzay9hZGR0YXNrL2FkZHRhc2suY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/task/addtask/addtask.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/task/addtask/addtask.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      {{mode}} task<br>\n      <a routerLink=\"/task\">List Tasks</a>\n    </div>\n    <div class=\"col-md-6\">\n      \n      <form [formGroup]=\"createTask\" name=\"createTask\" (ngSubmit)=\"onSubmit()\">\n        <mat-form-field class=\"field-full-width\">\n          <input matInput placeholder=\"task_name\" formControlName=\"task_name\" required #task_name>\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"field-full-width\">\n          <mat-select formControlName=\"of_project\" #of_project required placeholder=\"of_project\">\n            <mat-option *ngFor=\"let project of projects\" [value]=\"project._id\">{{project.title}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n        <br>\n        <mat-form-field class=\"field-full-width\">\n          <mat-select formControlName=\"users_assigned\" #users_assigned\n            placeholder=\"users_assigned\" required multiple>\n            <mat-option *ngFor=\"let user of users\" [value]=\"user._id\">{{user.name}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n        <br>\n        <button type=\"submit\" [disabled]=\"!createTask.valid\" mat-raised-button color=\"primary\">Add Task\n        </button>\n      </form>\n      \n    </div>\n    <div class=\"col-md-3\">\n      \n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/task/addtask/addtask.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/task/addtask/addtask.component.ts ***!
  \**************************************************************/
/*! exports provided: AddtaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddtaskComponent", function() { return AddtaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../http.service */ "./src/app/http.service.ts");





var AddtaskComponent = /** @class */ (function () {
    function AddtaskComponent(httpService, fb, router, route) {
        this.httpService = httpService;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.mode = 'Add';
        this.createTask = this.fb.group({
            task_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            of_project: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            users_assigned: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    AddtaskComponent.prototype.fetchUsers = function () {
        var _this = this;
        this.httpService.doGet('users')
            .subscribe(function (data) {
            _this.users = data;
            console.log('Data requested ...');
            console.log(_this.users);
        });
    };
    AddtaskComponent.prototype.fetchProjects = function () {
        var _this = this;
        this.httpService.doGet('projects')
            .subscribe(function (data) {
            _this.projects = data;
            console.log('Data requested ...');
            console.log(_this.projects);
        });
    };
    AddtaskComponent.prototype.ngOnInit = function () {
        this.fetchProjects();
        this.fetchUsers();
        var id = this.route.snapshot.params["id"];
        if (id) {
            this.tasksList(id);
            this.mode = "Edit";
        }
        else {
            this.mode = "Create";
            this.validator();
        }
    };
    AddtaskComponent.prototype.tasksList = function (id) {
        var _this = this;
        this.httpService.doGet("tasks/" + id).subscribe(function (res) {
            _this.task_name = res.task_name;
            _this.of_project = res.of_project;
            _this.users_assigned = res.users_assigned;
            _this.validator();
        });
    };
    AddtaskComponent.prototype.validator = function () {
        this.createTask = this.fb.group({
            task_name: [this.task_name],
            of_project: [this.of_project],
            users_assigned: [this.users_assigned]
        });
    };
    AddtaskComponent.prototype.onSubmit = function () {
        var that = this;
        var id = this.route.snapshot.params["id"];
        if (!id) {
            console.log(id);
            this.httpService.doPost("task/add", this.createTask.value)
                .subscribe(function (data) {
                that.router.navigate(["task"]);
            }, function (err) { });
        }
        else {
            this.httpService.doPatch("tasks/" + id, this.createTask.value)
                .subscribe(function (data) {
                that.router.navigate(["task"]);
            }, function (err) { });
        }
    };
    AddtaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addtask',
            template: __webpack_require__(/*! ./addtask.component.html */ "./src/app/components/task/addtask/addtask.component.html"),
            styles: [__webpack_require__(/*! ./addtask.component.css */ "./src/app/components/task/addtask/addtask.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AddtaskComponent);
    return AddtaskComponent;
}());



/***/ }),

/***/ "./src/app/components/task/listtask/listtask.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/task/listtask/listtask.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFzay9saXN0dGFzay9saXN0dGFzay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/task/listtask/listtask.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/task/listtask/listtask.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/task/addtask\">Add Task</a>\n<div>\n  <!-- <button type=\"button\" class=\"btn btn-primary\" (click)=\"addTask()\" style=\"float: right;\">New Project</button> -->\n<div class=\"card-body\">\n  <table class=\"table table-bordered\">\n    <tr>\n      <!-- <th>#</th> -->\n      <th>Task</th>\n      <th>Project</th>\n      <th>Users</th>\n      <th>Actions</th>\n    </tr>\n    <tr *ngFor=\"let task of tasks; let ind = index\">\n      <!-- <td>{{project._id}}</td> -->\n      <!-- task.of_project[0]?.title -->\n      <td>{{task.task_name}}</td>\n      <td>{{task.of_project[0]?.title}}</td>\n      <!-- <td>{{task.users_assigned[0]?.name}}</td> -->\n      <td><div *ngFor=\"let user of task.users_assigned\">{{user.name}}</div></td>\n      <td>\n          <a routerLink=\"addtask/{{task._id}}\">Edit</a>&nbsp;\n          <a href=\"javascript:;\" (click)=\"deleteTask($event)\" data-id=\"{{task._id}}\">Delete</a>\n        <!-- <a routerLink=\"/{{commonFunctions.getAccessCodePrefix()}}/projects/edit/{{project._id}}\">Edit</a>&nbsp;\n            <a href=\"javascript:;\" (click)=\"deleteProject($event)\" data-id=\"{{project._id}}\">Delete</a> -->\n      </td>\n    </tr>\n  </table>\n</div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/task/listtask/listtask.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/task/listtask/listtask.component.ts ***!
  \****************************************************************/
/*! exports provided: ListtaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListtaskComponent", function() { return ListtaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../http.service */ "./src/app/http.service.ts");




var ListtaskComponent = /** @class */ (function () {
    function ListtaskComponent(httpService, router) {
        this.httpService = httpService;
        this.router = router;
    }
    ListtaskComponent.prototype.ngOnInit = function () {
        this.getTasks();
    };
    ListtaskComponent.prototype.getTasks = function () {
        var _this = this;
        this.httpService.doGet("tasks").subscribe(function (res) {
            _this.tasks = res;
        });
        console.log(this.tasks);
    };
    ListtaskComponent.prototype.deleteTask = function ($event) {
        var id = $event.target.id;
        var that = this;
        this.httpService.doDel("tasks/" + id).subscribe(function (res) {
            that.getTasks();
        });
    };
    ListtaskComponent.prototype.addTask = function () {
        this.router.navigate(['/addtask']);
    };
    ListtaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listtask',
            template: __webpack_require__(/*! ./listtask.component.html */ "./src/app/components/task/listtask/listtask.component.html"),
            styles: [__webpack_require__(/*! ./listtask.component.css */ "./src/app/components/task/listtask/listtask.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListtaskComponent);
    return ListtaskComponent;
}());



/***/ }),

/***/ "./src/app/components/task/task-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/task/task-routing.module.ts ***!
  \********************************************************/
/*! exports provided: TaskRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskRoutingModule", function() { return TaskRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _listtask_listtask_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listtask/listtask.component */ "./src/app/components/task/listtask/listtask.component.ts");
/* harmony import */ var _addtask_addtask_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addtask/addtask.component */ "./src/app/components/task/addtask/addtask.component.ts");





var routes = [
    {
        path: '',
        component: _listtask_listtask_component__WEBPACK_IMPORTED_MODULE_3__["ListtaskComponent"]
    },
    {
        path: 'addtask',
        component: _addtask_addtask_component__WEBPACK_IMPORTED_MODULE_4__["AddtaskComponent"]
    },
    {
        path: 'addtask/:id',
        component: _addtask_addtask_component__WEBPACK_IMPORTED_MODULE_4__["AddtaskComponent"]
    }
];
var TaskRoutingModule = /** @class */ (function () {
    function TaskRoutingModule() {
    }
    TaskRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TaskRoutingModule);
    return TaskRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/task/task.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/task/task.module.ts ***!
  \************************************************/
/*! exports provided: TaskModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskModule", function() { return TaskModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _task_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task-routing.module */ "./src/app/components/task/task-routing.module.ts");
/* harmony import */ var _addtask_addtask_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addtask/addtask.component */ "./src/app/components/task/addtask/addtask.component.ts");
/* harmony import */ var _listtask_listtask_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./listtask/listtask.component */ "./src/app/components/task/listtask/listtask.component.ts");








var TaskModule = /** @class */ (function () {
    function TaskModule() {
    }
    TaskModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_addtask_addtask_component__WEBPACK_IMPORTED_MODULE_6__["AddtaskComponent"], _listtask_listtask_component__WEBPACK_IMPORTED_MODULE_7__["ListtaskComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _task_routing_module__WEBPACK_IMPORTED_MODULE_5__["TaskRoutingModule"],
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
    ], TaskModule);
    return TaskModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-task-task-module.js.map