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
/* harmony import */ var _containers_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/login/login.component */ "./src/app/containers/login/login.component.ts");
/* harmony import */ var _containers_reset_pass_reset_pass_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/reset-pass/reset-pass.component */ "./src/app/containers/reset-pass/reset-pass.component.ts");
/* harmony import */ var _containers_restore_pass_restore_pass_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/restore-pass/restore-pass.component */ "./src/app/containers/restore-pass/restore-pass.component.ts");
/* harmony import */ var _services_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/guard.service */ "./src/app/services/guard.service.ts");







var routes = [
    {
        path: "login",
        component: _containers_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_6__["GuardService"]]
    },
    {
        path: "reset",
        component: _containers_reset_pass_reset_pass_component__WEBPACK_IMPORTED_MODULE_4__["ResetPassComponent"]
    },
    {
        path: "appregistro",
        component: _containers_reset_pass_reset_pass_component__WEBPACK_IMPORTED_MODULE_4__["ResetPassComponent"]
    },
    {
        path: "restore",
        component: _containers_restore_pass_restore_pass_component__WEBPACK_IMPORTED_MODULE_5__["RestorePassComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet *ngIf=\"!islogged\"></router-outlet>\n<dashboard-root *ngIf=\"islogged\"></dashboard-root>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".appBox {\n  display: flex;\n  height: 100%;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  flex-direction: row;\n  align-items: flex-start; }\n\n.headerBox {\n  width: 100%;\n  /*height: 30vh;*/\n  margin-bottom: 5px; }\n\n.menuBox {\n  width: 0%;\n  transition: width 0.2s ease-out; }\n\n.aMenu {\n  width: 25%; }\n\n.contentBox {\n  width: 75%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZ2Vsb2Fjci9Qcm95ZWN0b3MvSW5WZW4vaW52ZW5BcHAvaW52ZW5hcHAvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBOztBQUd6QjtFQUNFLFdBQVc7RUFDWCxnQkFBQTtFQUNBLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFNBQVM7RUFDVCwrQkFBK0IsRUFBQTs7QUFHakM7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwQm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLmhlYWRlckJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICAvKmhlaWdodDogMzB2aDsqL1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5tZW51Qm94IHtcbiAgd2lkdGg6IDAlO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzIGVhc2Utb3V0O1xufVxuXG4uYU1lbnUge1xuICB3aWR0aDogMjUlO1xufVxuXG4uY29udGVudEJveCB7XG4gIHdpZHRoOiA3NSU7XG59XG4iXX0= */"

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(auth, router) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                _this.ngOnInit();
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.islogged = this.auth.isAuthenticated();
    };
    AppComponent.prototype.ngOnChanges = function () {
        this.islogged = this.auth.isAuthenticated();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _directives_fileControl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/fileControl */ "./src/app/directives/fileControl.ts");
/* harmony import */ var _directives_fileValidator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/fileValidator */ "./src/app/directives/fileValidator.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _containers_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./containers/login/login.component */ "./src/app/containers/login/login.component.ts");
/* harmony import */ var _containers_reset_pass_reset_pass_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./containers/reset-pass/reset-pass.component */ "./src/app/containers/reset-pass/reset-pass.component.ts");
/* harmony import */ var _angular_common_locales_es_VE__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/locales/es-VE */ "./node_modules/@angular/common/locales/es-VE.js");
/* harmony import */ var _angular_common_locales_es_VE__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es_VE__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_form_usuario_form_usuario_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/form-usuario/form-usuario.component */ "./src/app/components/form-usuario/form-usuario.component.ts");
/* harmony import */ var _containers_registro_registro_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./containers/registro/registro.component */ "./src/app/containers/registro/registro.component.ts");
/* harmony import */ var _containers_restore_pass_restore_pass_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./containers/restore-pass/restore-pass.component */ "./src/app/containers/restore-pass/restore-pass.component.ts");




















Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["registerLocaleData"])(_angular_common_locales_es_VE__WEBPACK_IMPORTED_MODULE_15___default.a, "es-VE");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _containers_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _containers_reset_pass_reset_pass_component__WEBPACK_IMPORTED_MODULE_14__["ResetPassComponent"],
                _directives_fileControl__WEBPACK_IMPORTED_MODULE_9__["FileValueAccessor"],
                _directives_fileValidator__WEBPACK_IMPORTED_MODULE_10__["FileValidator"],
                _components_form_usuario_form_usuario_component__WEBPACK_IMPORTED_MODULE_16__["FormUsuarioComponent"],
                _containers_registro_registro_component__WEBPACK_IMPORTED_MODULE_17__["RegistroComponent"],
                _containers_restore_pass_restore_pass_component__WEBPACK_IMPORTED_MODULE_18__["RestorePassComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_6__["DashboardModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"]
            ],
            entryComponents: [],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"], useValue: "es-VE" }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/form-usuario/form-usuario.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/form-usuario/form-usuario.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  form-usuario works!\n</p>"

/***/ }),

/***/ "./src/app/components/form-usuario/form-usuario.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/form-usuario/form-usuario.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS11c3VhcmlvL2Zvcm0tdXN1YXJpby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/form-usuario/form-usuario.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/form-usuario/form-usuario.component.ts ***!
  \*******************************************************************/
/*! exports provided: FormUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormUsuarioComponent", function() { return FormUsuarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormUsuarioComponent = /** @class */ (function () {
    function FormUsuarioComponent() {
    }
    FormUsuarioComponent.prototype.ngOnInit = function () { };
    FormUsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-form-usuario",
            template: __webpack_require__(/*! ./form-usuario.component.html */ "./src/app/components/form-usuario/form-usuario.component.html"),
            styles: [__webpack_require__(/*! ./form-usuario.component.scss */ "./src/app/components/form-usuario/form-usuario.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormUsuarioComponent);
    return FormUsuarioComponent;
}());



/***/ }),

/***/ "./src/app/containers/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/containers/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pageBoxlogin\">\n  <div class=\"logBox\">\n    <div class=\"logoBoxlogin\">\n      <img class=\"formImglogin\" src=\"assets/logo.png\" alt=\"Logo\" />\n    </div>\n    <div class=\"formHeaderlogin\">\n      <h1>Inicio de sesión</h1>\n    </div>\n    <div class=\"formBoxlogin\">\n      <form [formGroup]=\"login\" (ngSubmit)=\"logUser()\">\n        <div class=\"formContentlogin\">\n          <div class=\"formInputlogin\">\n            <!--<label for=\"\">Usuario</label>-->\n            <input placeholder=\"Usuario\" type=\"text\" formControlName=\"username\" name=\"username\" />\n          </div>\n          <div class=\"errorTaglogin\" *ngIf=\"\n              fLogin.username.errors?.required &&\n              (fLogin.username.touched || fLogin.username.dirty)\n            \">\n            Debe ingresar un usuario\n          </div>\n          <div class=\"formInputlogin\">\n            <!--<label for=\"\">Contraseña</label>-->\n            <input placeholder=\"Contraseña\" type=\"password\" formControlName=\"password\" name=\"password\" />\n          </div>\n          <div class=\"errorTaglogin\" *ngIf=\"\n              fLogin.password.errors?.required &&\n              (fLogin.password.touched || fLogin.password.dirty)\n            \">\n           Debe ingresar una contraseña\n          </div>\n          <div class=\"buttonBoxlogin\">\n            <!--<button type=\"button\" class=\"formButton\" (click)=\"registro()\">\n              <p>Registrarse</p>\n            </button>-->\n            <button type=\"submit\" class=\"formButtonlogin\">\n              <p>Iniciar Sesion</p>\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <app-error class=\"errorBoxlogin\" [msg]=\"errorMsg\" [ngClass]=\"showError\" (closeError)=\"closeError()\"></app-error>\n</div>"

/***/ }),

/***/ "./src/app/containers/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/containers/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pageBoxlogin {\n  width: 100%;\n  height: 100vh;\n  margin: auto;\n  font-family: \"Roboto\", sans-serif;\n  display: flex;\n  background-color: white;\n  /*background: linear-gradient(212deg, rgba(52,127,196,1) 0%, rgba(49,233,129,1) 51%);*/ }\n\n.logBox {\n  width: 340px;\n  height: 500px;\n  background-color: #161925;\n  box-shadow: 0px 12px 13px 5px rgba(0, 0, 0, 0.41); }\n\n.logoBoxlogin {\n  width: 80%;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.logoBoxlogin img {\n    width: 100%; }\n\n.logoBoxlogin img.formImglogin {\n      width: 100%;\n      margin: 50px auto 0 auto; }\n\n.formHeaderlogin {\n  width: 100%;\n  height: auto;\n  text-align: center; }\n\n.formHeaderlogin h1 {\n    color: white;\n    font-weight: 100;\n    font-size: 1.5em;\n    font-family: \"Open Sans\", sans-serif; }\n\n.formBoxlogin {\n  width: 80%;\n  margin: auto; }\n\n.formBoxlogin.formContentlogin {\n    width: 100%;\n    height: auto;\n    padding: 30px auto 0 auto;\n    display: flex; }\n\n.formInputlogin {\n  width: 100%;\n  height: 50px;\n  margin-top: 10px; }\n\n.formInputlogin input {\n    width: 100%;\n    padding: 12px;\n    background-color: #161925;\n    border: 2px solid #347fc4;\n    border-radius: 5px;\n    font-size: 0.9em;\n    font-family: \"Open Sans\", sans-serif;\n    color: white;\n    /*&:focus {\n      \n    }*/ }\n\n.errorTaglogin {\n  font-size: 0.8em;\n  color: rgba(219, 199, 199, 0.918);\n  width: 100%;\n  margin-bottom: 18px;\n  text-align: right;\n  font-family: \"Open Sans\", sans-serif; }\n\n.buttonBoxlogin {\n  width: 100%;\n  margin-top: 30px;\n  display: flex;\n  justify-content: center; }\n\n.buttonBoxlogin button {\n    background-color: #0d25aa;\n    border: none;\n    color: white;\n    transition: all 0.4s ease; }\n\n.buttonBoxlogin button:hover {\n      background: #347fc4; }\n\n.formButtonlogin {\n  width: 100%;\n  padding: 15px;\n  cursor: pointer; }\n\n.formButtonlogin p {\n    font-size: 1.2em; }\n\n.tagBoxlogin {\n  font-size: 10px; }\n\n.errorBoxlogin {\n  display: none;\n  height: 0; }\n\n.errorActlogin {\n  display: block;\n  width: 100%;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZ2Vsb2Fjci9Qcm95ZWN0b3MvSW5WZW4vaW52ZW5BcHAvaW52ZW5hcHAvc3JjL2FwcC9jb250YWluZXJzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWluZXJzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0VBQ1osaUNBUDBCO0VBUzFCLGFBQWE7RUFDYix1QkFBdUI7RUFFdkIsc0ZBQUEsRUFBdUY7O0FBR3pGO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFuQmE7RUF1QmIsaURBQXNELEVBQUE7O0FBR3hEO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQUxyQjtJQVFJLFdBQVcsRUFBQTs7QUFSZjtNQVdNLFdBQVc7TUFDWCx3QkFBd0IsRUFBQTs7QUFLOUI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUhwQjtJQU1JLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG9DQWxEMkIsRUFBQTs7QUFzRC9CO0VBQ0UsVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFGZDtJQUtJLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGFBQWEsRUFBQTs7QUFJakI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQixFQUFBOztBQUhsQjtJQU1JLFdBQVc7SUFDWCxhQUFhO0lBQ2IseUJBNUVXO0lBNkVYLHlCQTlFa0I7SUErRWxCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsb0NBOUUyQjtJQStFM0IsWUFBWTtJQUNaOztNQ3RCRSxFRHdCQzs7QUFJUDtFQUNFLGdCQUFnQjtFQUNoQixpQ0FBaUM7RUFDakMsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsb0NBNUY2QixFQUFBOztBQStGL0I7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix1QkFBdUIsRUFBQTs7QUFKekI7SUFPSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUIsRUFBQTs7QUFWN0I7TUFhTSxtQkEvR2dCLEVBQUE7O0FBb0h0QjtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZUFBZSxFQUFBOztBQUhqQjtJQU1JLGdCQUFnQixFQUFBOztBQUlwQjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxhQUFhO0VBQ2IsU0FBUyxFQUFBOztBQUdYO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXJzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnk6ICMzNDdmYzQ7IC8vcmdiKDUyLDEyNywxOTYpO1xuJHNlY29uZGFyeTogIzMxZTk4MTtcbiRib3JkZXItaW5wdXQ6ICMzNDdmYzQ7XG4kdGhpcmQ6ICMxNjE5MjU7XG4kZm9udDE6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuJGZvbnQyOiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcblxuLnBhZ2VCb3hsb2dpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtZmFtaWx5OiAkZm9udDE7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC8vYmFja2dyb3VuZDogJHByaW1hcnk7XG4gIC8qYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIxMmRlZywgcmdiYSg1MiwxMjcsMTk2LDEpIDAlLCByZ2JhKDQ5LDIzMywxMjksMSkgNTElKTsqL1xufVxuXG4ubG9nQm94IHtcbiAgd2lkdGg6IDM0MHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhpcmQ7XG5cbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMTJweCAxM3B4IDVweCByZ2JhKDAsMCwwLDAuNDEpO1xuICAtbW96LWJveC1zaGFkb3c6ICAgIDBweCAxMnB4IDEzcHggNXB4IHJnYmEoMCwwLDAsMC40MSk7XG4gIGJveC1zaGFkb3c6ICAgICAgICAgMHB4IDEycHggMTNweCA1cHggcmdiYSgwLDAsMCwwLjQxKTtcbn1cblxuLmxvZ29Cb3hsb2dpbiB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgJiBpbWd7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAmLmZvcm1JbWdsb2dpbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbjogNTBweCBhdXRvIDAgYXV0bztcbiAgICB9XG4gIH1cbn1cblxuLmZvcm1IZWFkZXJsb2dpbiB7ICBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgJiBoMSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBmb250LWZhbWlseTogJGZvbnQyO1xuICB9XG59XG5cbi5mb3JtQm94bG9naW4ge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG87XG5cbiAgJi5mb3JtQ29udGVudGxvZ2luIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMzBweCBhdXRvIDAgYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4OyAgXG4gIH1cbn1cblxuLmZvcm1JbnB1dGxvZ2luIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcblxuICAmIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGlyZDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkYm9yZGVyLWlucHV0O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udDI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC8qJjpmb2N1cyB7XG4gICAgICBcbiAgICB9Ki9cbiAgfVxufVxuXG4uZXJyb3JUYWdsb2dpbiB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiByZ2JhKDIxOSwgMTk5LCAxOTksIDAuOTE4KTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LWZhbWlseTogJGZvbnQyO1xufVxuXG4uYnV0dG9uQm94bG9naW4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgJiBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDI1YWE7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xuICAgIFxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogJGJvcmRlci1pbnB1dDtcbiAgICB9XG4gIH1cbn1cblxuLmZvcm1CdXR0b25sb2dpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJiBwIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICB9XG59XG5cbi50YWdCb3hsb2dpbiB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmVycm9yQm94bG9naW4ge1xuICBkaXNwbGF5OiBub25lO1xuICBoZWlnaHQ6IDA7XG59XG5cbi5lcnJvckFjdGxvZ2luIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59IiwiLnBhZ2VCb3hsb2dpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLypiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjEyZGVnLCByZ2JhKDUyLDEyNywxOTYsMSkgMCUsIHJnYmEoNDksMjMzLDEyOSwxKSA1MSUpOyovIH1cblxuLmxvZ0JveCB7XG4gIHdpZHRoOiAzNDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2MTkyNTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMTJweCAxM3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuNDEpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAxMnB4IDEzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC40MSk7XG4gIGJveC1zaGFkb3c6IDBweCAxMnB4IDEzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC40MSk7IH1cblxuLmxvZ29Cb3hsb2dpbiB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgLmxvZ29Cb3hsb2dpbiBpbWcge1xuICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgLmxvZ29Cb3hsb2dpbiBpbWcuZm9ybUltZ2xvZ2luIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luOiA1MHB4IGF1dG8gMCBhdXRvOyB9XG5cbi5mb3JtSGVhZGVybG9naW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgLmZvcm1IZWFkZXJsb2dpbiBoMSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjsgfVxuXG4uZm9ybUJveGxvZ2luIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvOyB9XG4gIC5mb3JtQm94bG9naW4uZm9ybUNvbnRlbnRsb2dpbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDMwcHggYXV0byAwIGF1dG87XG4gICAgZGlzcGxheTogZmxleDsgfVxuXG4uZm9ybUlucHV0bG9naW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4OyB9XG4gIC5mb3JtSW5wdXRsb2dpbiBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYxOTI1O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzNDdmYzQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC8qJjpmb2N1cyB7XG4gICAgICBcbiAgICB9Ki8gfVxuXG4uZXJyb3JUYWdsb2dpbiB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiByZ2JhKDIxOSwgMTk5LCAxOTksIDAuOTE4KTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjsgfVxuXG4uYnV0dG9uQm94bG9naW4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgLmJ1dHRvbkJveGxvZ2luIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkMjVhYTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7IH1cbiAgICAuYnV0dG9uQm94bG9naW4gYnV0dG9uOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICMzNDdmYzQ7IH1cblxuLmZvcm1CdXR0b25sb2dpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgLmZvcm1CdXR0b25sb2dpbiBwIHtcbiAgICBmb250LXNpemU6IDEuMmVtOyB9XG5cbi50YWdCb3hsb2dpbiB7XG4gIGZvbnQtc2l6ZTogMTBweDsgfVxuXG4uZXJyb3JCb3hsb2dpbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGhlaWdodDogMDsgfVxuXG4uZXJyb3JBY3Rsb2dpbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/containers/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/containers/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _dashboard_services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dashboard/services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, dbHandler, fb, router) {
        this.auth = auth;
        this.dbHandler = dbHandler;
        this.fb = fb;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.login = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
    };
    LoginComponent.prototype.logUser = function () {
        var _this = this;
        if (this.catchUserErrors()) {
            var errorMsg = "Algunos campos son inválidos. Por favor, revise el formulario e intente de nuevo";
            this.openError(errorMsg);
        }
        else {
            var data = this.login.value;
            this.auth.login(data).subscribe(function (logData) {
                if (!logData.status) {
                    var errorMsg = logData.msg;
                    _this.openError(errorMsg);
                }
                else {
                    _this.auth.storeData(logData);
                    _this.actualizar();
                }
            });
        }
    };
    Object.defineProperty(LoginComponent.prototype, "fLogin", {
        get: function () {
            return this.login.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.actualizar = function () {
        this.dbHandler.actualizar();
    };
    LoginComponent.prototype.flush = function () {
        this.login.setValue({
            username: "",
            password: ""
        });
    };
    LoginComponent.prototype.registro = function () {
        this.router.navigateByUrl("/registro");
    };
    LoginComponent.prototype.catchUserErrors = function () {
        var aux1 = this.fLogin.username.errors
            ? this.fLogin.username.errors.required
            : false;
        var aux2 = this.fLogin.password.errors
            ? this.fLogin.password.errors.required
            : false;
        var error = aux1 || aux2;
        return error;
    };
    LoginComponent.prototype.openError = function (msg) {
        this.errorMsg = msg;
        this.showError = {
            errorAct: true
        };
    };
    LoginComponent.prototype.closeError = function () {
        this.showError = {
            errorAct: false
        };
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/containers/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/containers/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _dashboard_services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/containers/registro/registro.component.html":
/*!*************************************************************!*\
  !*** ./src/app/containers/registro/registro.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  registro works!\n</p>\n"

/***/ }),

/***/ "./src/app/containers/registro/registro.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/containers/registro/registro.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvcmVnaXN0cm8vcmVnaXN0cm8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/containers/registro/registro.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/containers/registro/registro.component.ts ***!
  \***********************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegistroComponent = /** @class */ (function () {
    function RegistroComponent() {
    }
    RegistroComponent.prototype.ngOnInit = function () {
    };
    RegistroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registro',
            template: __webpack_require__(/*! ./registro.component.html */ "./src/app/containers/registro/registro.component.html"),
            styles: [__webpack_require__(/*! ./registro.component.scss */ "./src/app/containers/registro/registro.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegistroComponent);
    return RegistroComponent;
}());



/***/ }),

/***/ "./src/app/containers/reset-pass/reset-pass.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/containers/reset-pass/reset-pass.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  reset-pass works!\n</p>"

/***/ }),

/***/ "./src/app/containers/reset-pass/reset-pass.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/containers/reset-pass/reset-pass.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvcmVzZXQtcGFzcy9yZXNldC1wYXNzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/containers/reset-pass/reset-pass.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/containers/reset-pass/reset-pass.component.ts ***!
  \***************************************************************/
/*! exports provided: ResetPassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPassComponent", function() { return ResetPassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResetPassComponent = /** @class */ (function () {
    function ResetPassComponent() {
    }
    ResetPassComponent.prototype.ngOnInit = function () { };
    ResetPassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-reset-pass",
            template: __webpack_require__(/*! ./reset-pass.component.html */ "./src/app/containers/reset-pass/reset-pass.component.html"),
            styles: [__webpack_require__(/*! ./reset-pass.component.scss */ "./src/app/containers/reset-pass/reset-pass.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResetPassComponent);
    return ResetPassComponent;
}());



/***/ }),

/***/ "./src/app/containers/restore-pass/restore-pass.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/containers/restore-pass/restore-pass.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  restore-pass works!\n</p>\n"

/***/ }),

/***/ "./src/app/containers/restore-pass/restore-pass.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/containers/restore-pass/restore-pass.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvcmVzdG9yZS1wYXNzL3Jlc3RvcmUtcGFzcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/containers/restore-pass/restore-pass.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/containers/restore-pass/restore-pass.component.ts ***!
  \*******************************************************************/
/*! exports provided: RestorePassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestorePassComponent", function() { return RestorePassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RestorePassComponent = /** @class */ (function () {
    function RestorePassComponent() {
    }
    RestorePassComponent.prototype.ngOnInit = function () {
    };
    RestorePassComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-restore-pass',
            template: __webpack_require__(/*! ./restore-pass.component.html */ "./src/app/containers/restore-pass/restore-pass.component.html"),
            styles: [__webpack_require__(/*! ./restore-pass.component.scss */ "./src/app/containers/restore-pass/restore-pass.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RestorePassComponent);
    return RestorePassComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/detalle-almacen/detalle-almacen.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-almacen/detalle-almacen.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  detalle-almacen works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/components/detalle-almacen/detalle-almacen.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-almacen/detalle-almacen.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2RldGFsbGUtYWxtYWNlbi9kZXRhbGxlLWFsbWFjZW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/components/detalle-almacen/detalle-almacen.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-almacen/detalle-almacen.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DetalleAlmacenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleAlmacenComponent", function() { return DetalleAlmacenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetalleAlmacenComponent = /** @class */ (function () {
    function DetalleAlmacenComponent() {
    }
    DetalleAlmacenComponent.prototype.ngOnInit = function () {
    };
    DetalleAlmacenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detalle-almacen',
            template: __webpack_require__(/*! ./detalle-almacen.component.html */ "./src/app/dashboard/components/detalle-almacen/detalle-almacen.component.html"),
            styles: [__webpack_require__(/*! ./detalle-almacen.component.scss */ "./src/app/dashboard/components/detalle-almacen/detalle-almacen.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DetalleAlmacenComponent);
    return DetalleAlmacenComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/detalle-banco/detalle-banco.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-banco/detalle-banco.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  detalle-banco works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/components/detalle-banco/detalle-banco.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-banco/detalle-banco.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2RldGFsbGUtYmFuY28vZGV0YWxsZS1iYW5jby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/components/detalle-banco/detalle-banco.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-banco/detalle-banco.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DetalleBancoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleBancoComponent", function() { return DetalleBancoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetalleBancoComponent = /** @class */ (function () {
    function DetalleBancoComponent() {
    }
    DetalleBancoComponent.prototype.ngOnInit = function () {
    };
    DetalleBancoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detalle-banco',
            template: __webpack_require__(/*! ./detalle-banco.component.html */ "./src/app/dashboard/components/detalle-banco/detalle-banco.component.html"),
            styles: [__webpack_require__(/*! ./detalle-banco.component.scss */ "./src/app/dashboard/components/detalle-banco/detalle-banco.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DetalleBancoComponent);
    return DetalleBancoComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/detalle-cliente/detalle-cliente.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-cliente/detalle-cliente.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  detalle-banco works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/components/detalle-cliente/detalle-cliente.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-cliente/detalle-cliente.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2RldGFsbGUtY2xpZW50ZS9kZXRhbGxlLWNsaWVudGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/components/detalle-cliente/detalle-cliente.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-cliente/detalle-cliente.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DetalleClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleClienteComponent", function() { return DetalleClienteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetalleClienteComponent = /** @class */ (function () {
    function DetalleClienteComponent() {
    }
    DetalleClienteComponent.prototype.ngOnInit = function () {
    };
    DetalleClienteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detalle-cliente',
            template: __webpack_require__(/*! ./detalle-cliente.component.html */ "./src/app/dashboard/components/detalle-cliente/detalle-cliente.component.html"),
            styles: [__webpack_require__(/*! ./detalle-cliente.component.scss */ "./src/app/dashboard/components/detalle-cliente/detalle-cliente.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DetalleClienteComponent);
    return DetalleClienteComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/detalle-cobro/detalle-cobro.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-cobro/detalle-cobro.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  detalle-cobro works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/components/detalle-cobro/detalle-cobro.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-cobro/detalle-cobro.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2RldGFsbGUtY29icm8vZGV0YWxsZS1jb2Jyby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/components/detalle-cobro/detalle-cobro.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-cobro/detalle-cobro.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DetalleCobroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleCobroComponent", function() { return DetalleCobroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetalleCobroComponent = /** @class */ (function () {
    function DetalleCobroComponent() {
    }
    DetalleCobroComponent.prototype.ngOnInit = function () {
    };
    DetalleCobroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detalle-cobro',
            template: __webpack_require__(/*! ./detalle-cobro.component.html */ "./src/app/dashboard/components/detalle-cobro/detalle-cobro.component.html"),
            styles: [__webpack_require__(/*! ./detalle-cobro.component.scss */ "./src/app/dashboard/components/detalle-cobro/detalle-cobro.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DetalleCobroComponent);
    return DetalleCobroComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/detalle-compra/detalle-compra.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-compra/detalle-compra.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  detalle-compra works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/components/detalle-compra/detalle-compra.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-compra/detalle-compra.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2RldGFsbGUtY29tcHJhL2RldGFsbGUtY29tcHJhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/components/detalle-compra/detalle-compra.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-compra/detalle-compra.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DetalleCompraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleCompraComponent", function() { return DetalleCompraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetalleCompraComponent = /** @class */ (function () {
    function DetalleCompraComponent() {
    }
    DetalleCompraComponent.prototype.ngOnInit = function () {
    };
    DetalleCompraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detalle-compra',
            template: __webpack_require__(/*! ./detalle-compra.component.html */ "./src/app/dashboard/components/detalle-compra/detalle-compra.component.html"),
            styles: [__webpack_require__(/*! ./detalle-compra.component.scss */ "./src/app/dashboard/components/detalle-compra/detalle-compra.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DetalleCompraComponent);
    return DetalleCompraComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/detalle-cuenta-por-cobrar/detalle-cuenta-por-cobrar.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-cuenta-por-cobrar/detalle-cuenta-por-cobrar.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  detalle-cuenta-por-cobrar works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/components/detalle-cuenta-por-cobrar/detalle-cuenta-por-cobrar.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-cuenta-por-cobrar/detalle-cuenta-por-cobrar.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2RldGFsbGUtY3VlbnRhLXBvci1jb2JyYXIvZGV0YWxsZS1jdWVudGEtcG9yLWNvYnJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/components/detalle-cuenta-por-cobrar/detalle-cuenta-por-cobrar.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-cuenta-por-cobrar/detalle-cuenta-por-cobrar.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: DetalleCuentaPorCobrarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleCuentaPorCobrarComponent", function() { return DetalleCuentaPorCobrarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetalleCuentaPorCobrarComponent = /** @class */ (function () {
    function DetalleCuentaPorCobrarComponent() {
    }
    DetalleCuentaPorCobrarComponent.prototype.ngOnInit = function () {
    };
    DetalleCuentaPorCobrarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detalle-cuenta-por-cobrar',
            template: __webpack_require__(/*! ./detalle-cuenta-por-cobrar.component.html */ "./src/app/dashboard/components/detalle-cuenta-por-cobrar/detalle-cuenta-por-cobrar.component.html"),
            styles: [__webpack_require__(/*! ./detalle-cuenta-por-cobrar.component.scss */ "./src/app/dashboard/components/detalle-cuenta-por-cobrar/detalle-cuenta-por-cobrar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DetalleCuentaPorCobrarComponent);
    return DetalleCuentaPorCobrarComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/detalle-cuenta-por-pagar/detalle-cuenta-por-pagar.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-cuenta-por-pagar/detalle-cuenta-por-pagar.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  detalle-cuenta-por-pagar works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/components/detalle-cuenta-por-pagar/detalle-cuenta-por-pagar.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-cuenta-por-pagar/detalle-cuenta-por-pagar.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2RldGFsbGUtY3VlbnRhLXBvci1wYWdhci9kZXRhbGxlLWN1ZW50YS1wb3ItcGFnYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/components/detalle-cuenta-por-pagar/detalle-cuenta-por-pagar.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-cuenta-por-pagar/detalle-cuenta-por-pagar.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DetalleCuentaPorPagarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleCuentaPorPagarComponent", function() { return DetalleCuentaPorPagarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetalleCuentaPorPagarComponent = /** @class */ (function () {
    function DetalleCuentaPorPagarComponent() {
    }
    DetalleCuentaPorPagarComponent.prototype.ngOnInit = function () {
    };
    DetalleCuentaPorPagarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detalle-cuenta-por-pagar',
            template: __webpack_require__(/*! ./detalle-cuenta-por-pagar.component.html */ "./src/app/dashboard/components/detalle-cuenta-por-pagar/detalle-cuenta-por-pagar.component.html"),
            styles: [__webpack_require__(/*! ./detalle-cuenta-por-pagar.component.scss */ "./src/app/dashboard/components/detalle-cuenta-por-pagar/detalle-cuenta-por-pagar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DetalleCuentaPorPagarComponent);
    return DetalleCuentaPorPagarComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/detalle-cuenta-t/detalle-cuenta-t.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-cuenta-t/detalle-cuenta-t.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  detalle-cuenta-t works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/components/detalle-cuenta-t/detalle-cuenta-t.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-cuenta-t/detalle-cuenta-t.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2RldGFsbGUtY3VlbnRhLXQvZGV0YWxsZS1jdWVudGEtdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/components/detalle-cuenta-t/detalle-cuenta-t.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-cuenta-t/detalle-cuenta-t.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DetalleCuentaTComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleCuentaTComponent", function() { return DetalleCuentaTComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetalleCuentaTComponent = /** @class */ (function () {
    function DetalleCuentaTComponent() {
    }
    DetalleCuentaTComponent.prototype.ngOnInit = function () {
    };
    DetalleCuentaTComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detalle-cuenta-t',
            template: __webpack_require__(/*! ./detalle-cuenta-t.component.html */ "./src/app/dashboard/components/detalle-cuenta-t/detalle-cuenta-t.component.html"),
            styles: [__webpack_require__(/*! ./detalle-cuenta-t.component.scss */ "./src/app/dashboard/components/detalle-cuenta-t/detalle-cuenta-t.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DetalleCuentaTComponent);
    return DetalleCuentaTComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/detalle-gasto/detalle-gasto.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-gasto/detalle-gasto.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  detalle-gasto works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/components/detalle-gasto/detalle-gasto.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-gasto/detalle-gasto.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2RldGFsbGUtZ2FzdG8vZGV0YWxsZS1nYXN0by5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/components/detalle-gasto/detalle-gasto.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-gasto/detalle-gasto.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DetalleGastoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleGastoComponent", function() { return DetalleGastoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetalleGastoComponent = /** @class */ (function () {
    function DetalleGastoComponent() {
    }
    DetalleGastoComponent.prototype.ngOnInit = function () {
    };
    DetalleGastoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detalle-gasto',
            template: __webpack_require__(/*! ./detalle-gasto.component.html */ "./src/app/dashboard/components/detalle-gasto/detalle-gasto.component.html"),
            styles: [__webpack_require__(/*! ./detalle-gasto.component.scss */ "./src/app/dashboard/components/detalle-gasto/detalle-gasto.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DetalleGastoComponent);
    return DetalleGastoComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/detalle-pago/detalle-pago.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-pago/detalle-pago.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  detalle-pago works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/components/detalle-pago/detalle-pago.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-pago/detalle-pago.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2RldGFsbGUtcGFnby9kZXRhbGxlLXBhZ28uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/components/detalle-pago/detalle-pago.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-pago/detalle-pago.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DetallePagoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallePagoComponent", function() { return DetallePagoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetallePagoComponent = /** @class */ (function () {
    function DetallePagoComponent() {
    }
    DetallePagoComponent.prototype.ngOnInit = function () {
    };
    DetallePagoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detalle-pago',
            template: __webpack_require__(/*! ./detalle-pago.component.html */ "./src/app/dashboard/components/detalle-pago/detalle-pago.component.html"),
            styles: [__webpack_require__(/*! ./detalle-pago.component.scss */ "./src/app/dashboard/components/detalle-pago/detalle-pago.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DetallePagoComponent);
    return DetallePagoComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/detalle-pedido/detalle-pedido.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-pedido/detalle-pedido.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  detalle-pedido works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/components/detalle-pedido/detalle-pedido.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-pedido/detalle-pedido.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2RldGFsbGUtcGVkaWRvL2RldGFsbGUtcGVkaWRvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/components/detalle-pedido/detalle-pedido.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-pedido/detalle-pedido.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DetallePedidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallePedidoComponent", function() { return DetallePedidoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetallePedidoComponent = /** @class */ (function () {
    function DetallePedidoComponent() {
    }
    DetallePedidoComponent.prototype.ngOnInit = function () {
    };
    DetallePedidoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detalle-pedido',
            template: __webpack_require__(/*! ./detalle-pedido.component.html */ "./src/app/dashboard/components/detalle-pedido/detalle-pedido.component.html"),
            styles: [__webpack_require__(/*! ./detalle-pedido.component.scss */ "./src/app/dashboard/components/detalle-pedido/detalle-pedido.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DetallePedidoComponent);
    return DetallePedidoComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/detalle-producto/detalle-producto.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-producto/detalle-producto.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  detalle-producto works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/components/detalle-producto/detalle-producto.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-producto/detalle-producto.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2RldGFsbGUtcHJvZHVjdG8vZGV0YWxsZS1wcm9kdWN0by5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/components/detalle-producto/detalle-producto.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-producto/detalle-producto.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DetalleProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleProductoComponent", function() { return DetalleProductoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetalleProductoComponent = /** @class */ (function () {
    function DetalleProductoComponent() {
    }
    DetalleProductoComponent.prototype.ngOnInit = function () {
    };
    DetalleProductoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detalle-producto',
            template: __webpack_require__(/*! ./detalle-producto.component.html */ "./src/app/dashboard/components/detalle-producto/detalle-producto.component.html"),
            styles: [__webpack_require__(/*! ./detalle-producto.component.scss */ "./src/app/dashboard/components/detalle-producto/detalle-producto.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DetalleProductoComponent);
    return DetalleProductoComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/detalle-proforma/detalle-proforma.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-proforma/detalle-proforma.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  detalle-proforma works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/components/detalle-proforma/detalle-proforma.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-proforma/detalle-proforma.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2RldGFsbGUtcHJvZm9ybWEvZGV0YWxsZS1wcm9mb3JtYS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/components/detalle-proforma/detalle-proforma.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-proforma/detalle-proforma.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DetalleProformaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleProformaComponent", function() { return DetalleProformaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetalleProformaComponent = /** @class */ (function () {
    function DetalleProformaComponent() {
    }
    DetalleProformaComponent.prototype.ngOnInit = function () {
    };
    DetalleProformaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detalle-proforma',
            template: __webpack_require__(/*! ./detalle-proforma.component.html */ "./src/app/dashboard/components/detalle-proforma/detalle-proforma.component.html"),
            styles: [__webpack_require__(/*! ./detalle-proforma.component.scss */ "./src/app/dashboard/components/detalle-proforma/detalle-proforma.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DetalleProformaComponent);
    return DetalleProformaComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/detalle-proveedor/detalle-proveedor.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-proveedor/detalle-proveedor.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  detalle-banco works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/components/detalle-proveedor/detalle-proveedor.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-proveedor/detalle-proveedor.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2RldGFsbGUtcHJvdmVlZG9yL2RldGFsbGUtcHJvdmVlZG9yLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/components/detalle-proveedor/detalle-proveedor.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/dashboard/components/detalle-proveedor/detalle-proveedor.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DetalleProveedorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleProveedorComponent", function() { return DetalleProveedorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetalleProveedorComponent = /** @class */ (function () {
    function DetalleProveedorComponent() {
    }
    DetalleProveedorComponent.prototype.ngOnInit = function () {
    };
    DetalleProveedorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detalle-proveedor',
            template: __webpack_require__(/*! ./detalle-proveedor.component.html */ "./src/app/dashboard/components/detalle-proveedor/detalle-proveedor.component.html"),
            styles: [__webpack_require__(/*! ./detalle-proveedor.component.scss */ "./src/app/dashboard/components/detalle-proveedor/detalle-proveedor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DetalleProveedorComponent);
    return DetalleProveedorComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/form-almacen/form-almacen.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/components/form-almacen/form-almacen.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cardBox\">\n    <form class=\"formBox\" [formGroup]=\"registroAlmacen\" (ngSubmit)=\"endRegistro()\">\n        <div class=\"formContent\">\n            <div class=\"formInput\">\n                <label for=\"\">Código*</label>\n                <input class=\"lInput\" type=\"text\" formControlName=\"code\" name=\"code\" />\n            </div>\n            <div class=\"errorTag\"\n                *ngIf=\"fAlmacen.code.errors?.required && (fAlmacen.code.touched || fAlmacen.code.dirty)\">Por favor\n                ingrese un código</div>\n            <div class=\"formInput\">\n                <label for=\"\">Estado*</label>\n                <input class=\"lInput\" type=\"text\" formControlName=\"state\" name=\"state\" />\n            </div>\n            <div class=\"errorTag\"\n                *ngIf=\"fAlmacen.state.errors?.required && (fAlmacen.state.touched || fAlmacen.state.dirty)\">Por favor\n                ingrese un estado</div>\n            <div class=\"formInput\">\n                <label for=\"\">Ciudad*</label>\n                <input class=\"lInput\" type=\"text\" formControlName=\"city\" name=\"city\" />\n            </div>\n            <div class=\"errorTag\"\n                *ngIf=\"fAlmacen.city.errors?.required && (fAlmacen.city.touched || fAlmacen.city.dirty)\">Por favor\n                ingrese una ciudad</div>\n            <div class=\"formInput\">\n                <label for=\"\">Dirección*</label>\n                <input class=\"lInput\" type=\"text\" formControlName=\"address\" name=\"address\" />\n            </div>\n            <div class=\"errorTag\"\n                *ngIf=\"fAlmacen.address.errors?.required && (fAlmacen.address.touched || fAlmacen.address.dirty)\">Por\n                favor ingrese una dirección</div>\n        </div>\n        <button type=\"submit\" class=\"buttonBox\">\n            <p>Registrar almacén</p>\n        </button>\n    </form>\n</div>\n\n<app-error class=\"errorBox\" [msg]='errorMsg' [ngClass]=\"showError\" (closeError)=\"closeError()\"></app-error>"

/***/ }),

/***/ "./src/app/dashboard/components/form-almacen/form-almacen.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/components/form-almacen/form-almacen.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2Zvcm0tYWxtYWNlbi9mb3JtLWFsbWFjZW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/components/form-almacen/form-almacen.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/components/form-almacen/form-almacen.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FormAlmacenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormAlmacenComponent", function() { return FormAlmacenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var FormAlmacenComponent = /** @class */ (function () {
    function FormAlmacenComponent(auth, dbHandler, fb, router) {
        this.auth = auth;
        this.dbHandler = dbHandler;
        this.fb = fb;
        this.router = router;
        this.onData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FormAlmacenComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.showError = {
            errorAct: false
        };
    };
    FormAlmacenComponent.prototype.initForm = function () {
        this.registroAlmacen = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
    };
    Object.defineProperty(FormAlmacenComponent.prototype, "fAlmacen", {
        get: function () {
            return this.registroAlmacen.controls;
        },
        enumerable: true,
        configurable: true
    });
    FormAlmacenComponent.prototype.endRegistro = function () {
        var _this = this;
        var dataAux = this.registroAlmacen.value;
        var dataValues;
        var error;
        var refreshList;
        var endpoint;
        dataValues = {
            code: dataAux.code,
            state: dataAux.state,
            city: dataAux.city,
            address: dataAux.address
        };
        endpoint = "/almacenes";
        error = this.catchUserErrors();
        if (error) {
            var errorMsg = "Algunos campos son inválidos. Por favor, revise el formulario e intente de nuevo";
            this.openError(errorMsg);
        }
        else {
            this.dbHandler
                .createSomething(dataValues, endpoint)
                .subscribe(function (data) {
                // data is already a JSON object
                if (!data.status) {
                    var errorMsg = data.msg;
                    _this.openError(errorMsg);
                }
                else {
                    _this.onData.emit(data);
                }
            });
        }
    };
    FormAlmacenComponent.prototype.openError = function (msg) {
        this.errorMsg = msg;
        this.showError = {
            errorAct: true
        };
    };
    FormAlmacenComponent.prototype.closeError = function () {
        this.showError = {
            errorAct: false
        };
    };
    FormAlmacenComponent.prototype.resetForms = function () {
        this.registroAlmacen.reset();
    };
    FormAlmacenComponent.prototype.catchUserErrors = function () {
        var aux1 = this.fAlmacen.code.errors
            ? this.fAlmacen.code.errors.required
            : false;
        var aux2 = this.fAlmacen.state.errors
            ? this.fAlmacen.state.errors.required
            : false;
        var aux3 = this.fAlmacen.address.errors
            ? this.fAlmacen.address.errors.required
            : false;
        var aux4 = this.fAlmacen.city.errors
            ? this.fAlmacen.city.errors.required
            : false;
        var error = aux1 || aux2 || aux3 || aux4;
        return error;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], FormAlmacenComponent.prototype, "editMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormAlmacenComponent.prototype, "almacen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormAlmacenComponent.prototype, "onData", void 0);
    FormAlmacenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-form-almacen",
            template: __webpack_require__(/*! ./form-almacen.component.html */ "./src/app/dashboard/components/form-almacen/form-almacen.component.html"),
            styles: [__webpack_require__(/*! ./form-almacen.component.scss */ "./src/app/dashboard/components/form-almacen/form-almacen.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], FormAlmacenComponent);
    return FormAlmacenComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/form-banco/form-banco.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/components/form-banco/form-banco.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cardBox\">\n  <form class=\"formBox\" [formGroup]=\"registroBanco\" (ngSubmit)=\"endRegistro()\">\n    <div class=\"formContent\">\n\n      <div class=\"formInput\">\n        <label for=\"bank\">Banco: </label>\n        <input class=\"lInput\" type=\"text\" formControlName=\"bank\" name=\"bank\" placeHolder=\"Banco\">\n      </div>\n      <div class=\"errorTag\" *ngIf=\"\n          fBanco.bank.errors?.required &&\n          (fBanco.bank.touched || fBanco.bank.dirty)\n        \">\n        Por favor ingrese el nombre del banco\n      </div>\n      <div class=\"formInput\">\n        <label for=\"alias\">Alias: </label>\n        <input class=\"lInput\" type=\"text\" formControlName=\"alias\" name=\"alias\" placeHolder=\"Alias\">\n      </div>\n      <div class=\"errorTag\" *ngIf=\"\n          fBanco.alias.errors?.required &&\n          (fBanco.alias.touched || fBanco.alias.dirty)\n        \">\n        Por favor ingrese el alias de esta cuenta\n      </div>\n      <div class=\"formInput\">\n        <label for=\"accountNumber\">Numero de cuenta: </label>\n        <input class=\"lInput\" type=\"text\" formControlName=\"accountNumber\" name=\"accountNumber\"\n          placeHolder=\"Numero de cuenta\">\n      </div>\n      <div class=\"formInput\">\n        <label for=\"accountNumber\">Saldo inicial: </label>\n        <input class=\"lInput\" type=\"number\" formControlName=\"saldoInicial\" name=\"saldoInicial\"\n          placeHolder=\"Numero de cuenta\">\n      </div>\n      <div class=\"formInput\">\n        <label for=\"status\">Status: </label>\n        <select class=\"lInput\" name=\"status\" formControlName=\"status\">\n          <option value=\"Activa\">Activa</option>\n          <option value=\"Inactiva\">Inactiva</option>\n          <option value=\"Cerrada\">Cerrada</option>\n        </select>\n      </div>\n      <!--       <div class=\"formInput\">\n        <label for=\"address\">Dirección: </label>\n        <input class=\"lInput\" type=\"text\" formControlName=\"address\" name=\"address\" placeHolder=\"Dirección\">\n      </div>\n      <div class=\"formInput\">\n        <label for=\"tlf\">Teléfono:\n          <input class=\"lInput\" type=\"text\" formControlName=\"tlf\" name=\"tlf\" placeHolder=\"Teléfono\">\n        </label>\n      </div>\n      <div class=\"formInput\">\n        <label for=\"executive\">Ejecutivo de cuenta:\n          <input class=\"lInput\" type=\"text\" formControlName=\"executive\" name=\"executive\" placeHolder=\"Ejecutivo\">\n        </label>\n      </div>\n      <div class=\"formInput\">\n        <label for=\"executiveTlf\">Telefono personal Ejecutivo:\n          <input class=\"lInput\" type=\"text\" formControlName=\"executiveTlf\" name=\"executiveTlf\"\n            placeHolder=\"Teléfono Ejecutivo\">\n        </label>\n      </div>\n -->\n      <button type=\"submit\" class=\"formButton\">\n        <p>Registrar Banco</p>\n      </button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/components/form-banco/form-banco.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/components/form-banco/form-banco.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2Zvcm0tYmFuY28vZm9ybS1iYW5jby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/components/form-banco/form-banco.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/components/form-banco/form-banco.component.ts ***!
  \*************************************************************************/
/*! exports provided: FormBancoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBancoComponent", function() { return FormBancoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var FormBancoComponent = /** @class */ (function () {
    function FormBancoComponent(auth, dbHandler, fb, router) {
        this.auth = auth;
        this.dbHandler = dbHandler;
        this.fb = fb;
        this.router = router;
        this.onData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FormBancoComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.showError = {
            errorAct: false
        };
    };
    FormBancoComponent.prototype.initForm = function () {
        this.registroBanco = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            bank: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            alias: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            accountNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
            saldoInicial: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
            tlf: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
            executive: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
            executiveTlf: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("")
        });
    };
    Object.defineProperty(FormBancoComponent.prototype, "fBanco", {
        get: function () {
            return this.registroBanco.controls;
        },
        enumerable: true,
        configurable: true
    });
    FormBancoComponent.prototype.endRegistro = function () {
        var _this = this;
        var dataAux = this.registroBanco.value;
        var dataValues;
        var error;
        var refreshList;
        var endpoint;
        console.log("here");
        dataValues = {
            bank: dataAux.bank,
            alias: dataAux.alias,
            accountNumber: dataAux.accountNumber,
            saldoInicial: dataAux.saldoInicial,
            status: dataAux.status
        };
        endpoint = "/bancos";
        error = this.catchUserErrors();
        if (error) {
            var errorMsg = "Algunos campos son inválidos. Por favor, revise el formulario e intente de nuevo";
            this.openError(errorMsg);
        }
        else {
            this.dbHandler
                .createSomething(dataValues, endpoint)
                .subscribe(function (data) {
                // data is already a JSON object
                if (!data.status) {
                    var errorMsg = data.msg;
                    _this.openError(errorMsg);
                }
                else {
                    _this.onData.emit(data);
                }
            });
        }
    };
    FormBancoComponent.prototype.openError = function (msg) {
        this.errorMsg = msg;
        this.showError = {
            errorAct: true
        };
    };
    FormBancoComponent.prototype.closeError = function () {
        this.showError = {
            errorAct: false
        };
    };
    FormBancoComponent.prototype.resetForms = function () {
        this.registroBanco.reset();
    };
    FormBancoComponent.prototype.catchUserErrors = function () {
        var aux1 = this.fBanco.bank.errors
            ? this.fBanco.bank.errors.required
            : false;
        var aux2 = this.fBanco.alias.errors
            ? this.fBanco.alias.errors.required
            : false;
        var error = aux1 || aux2;
        return error;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], FormBancoComponent.prototype, "editMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormBancoComponent.prototype, "banco", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormBancoComponent.prototype, "onData", void 0);
    FormBancoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-form-banco",
            template: __webpack_require__(/*! ./form-banco.component.html */ "./src/app/dashboard/components/form-banco/form-banco.component.html"),
            styles: [__webpack_require__(/*! ./form-banco.component.scss */ "./src/app/dashboard/components/form-banco/form-banco.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], FormBancoComponent);
    return FormBancoComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/form-clientes/form-clientes.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/components/form-clientes/form-clientes.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cardBox\">\n    <form class=\"formBox\" [formGroup]=\"registroCliente\" (ngSubmit)=\"endRegistro()\">\n        <div class=\"formContent\">\n            <div class=\"formInput\">\n                <label for=\"\">Nombre*</label>\n                <input class=\"lInput\" type=\"text\" formControlName=\"name\" name=\"name\" />\n            </div>\n            <div class=\"errorTag\"\n                *ngIf=\"fCliente.name.errors?.required && (fCliente.name.touched || fCliente.name.dirty)\">Por favor\n                ingrese su nombre</div>\n            <div class=\"formInput\">\n                <label for=\"\">RIF*</label>\n                <input class=\"lInput\" type=\"text\" formControlName=\"rif\" name=\"rif\" />\n            </div>\n            <div class=\"errorTag\" *ngIf=\"fCliente.rif.errors?.required && (fCliente.rif.touched || fCliente.rif.dirty)\">\n                Por favor ingrese su nombre</div>\n            <div class=\"formInput\">\n                <label for=\"\">Correo Electrónico*</label>\n                <input class=\"lInput\" type=\"text\" formControlName=\"mail\" name=\"mail\" />\n            </div>\n            <div class=\"errorTag\"\n                *ngIf=\"fCliente.mail.errors?.required && (fCliente.mail.touched || fCliente.mail.dirty)\">Por favor\n                ingrese su correo</div>\n            <div class=\"errorTag\" *ngIf=\"fCliente.mail.errors?.email && (fCliente.mail.touched || fCliente.mail.dirty)\">\n                Por favor ingrese una dirección de correo válida</div>\n            <div class=\"formInput\">\n                <label for=\"\">Dirección*</label>\n                <input class=\"lInput\" type=\"text\" formControlName=\"address\" name=\"address\" />\n            </div>\n            <div class=\"errorTag\"\n                *ngIf=\"fCliente.address.errors?.required && (fCliente.address.touched || fCliente.address.dirty)\">Por\n                favor ingrese una dirección</div>\n            <div class=\"formInput\">\n                <label for=\"\">Whatsapp*</label>\n                <input class=\"lInput\" type=\"text\" formControlName=\"ws\" name=\"ws\" />\n            </div>\n            <div class=\"errorTag\" *ngIf=\"fCliente.ws.errors?.required && (fCliente.ws.touched || fCliente.ws.dirty)\">Por\n                favor ingrese un número valido</div>\n            <div class=\"formInput\">\n                <label for=\"\">Instagram</label>\n                <input class=\"lInput\" type=\"text\" formControlName=\"ig\" name=\"ig\" />\n            </div>\n            <div class=\"errorTag\" *ngIf=\"fCliente.ig.errors?.required && (fCliente.ig.touched || fCliente.ig.dirty)\">Por\n                favor ingrese un número valido</div>\n        </div>\n        <button type=\"submit\" class=\"formButton\">\n            <p>Registrar cliente</p>\n        </button>\n    </form>\n</div>\n\n<app-error class=\"errorBox\" [msg]='errorMsg' [ngClass]=\"showError\" (closeError)=\"closeError()\"></app-error>"

/***/ }),

/***/ "./src/app/dashboard/components/form-clientes/form-clientes.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/components/form-clientes/form-clientes.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2Zvcm0tY2xpZW50ZXMvZm9ybS1jbGllbnRlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/components/form-clientes/form-clientes.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/components/form-clientes/form-clientes.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FormClientesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormClientesComponent", function() { return FormClientesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var FormClientesComponent = /** @class */ (function () {
    function FormClientesComponent(auth, dbHandler, fb, router) {
        this.auth = auth;
        this.dbHandler = dbHandler;
        this.fb = fb;
        this.router = router;
        this.onData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FormClientesComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.showError = {
            errorAct: false
        };
    };
    FormClientesComponent.prototype.initForm = function () {
        this.registroCliente = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            ws: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            mail: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            rif: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            ig: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("")
        });
    };
    Object.defineProperty(FormClientesComponent.prototype, "fCliente", {
        get: function () {
            return this.registroCliente.controls;
        },
        enumerable: true,
        configurable: true
    });
    FormClientesComponent.prototype.endRegistro = function () {
        var _this = this;
        var dataAux = this.registroCliente.value;
        var dataValues;
        var error;
        var refreshList;
        var endpoint;
        console.log("here");
        dataValues = {
            name: dataAux.name,
            ws: dataAux.ws,
            mail: dataAux.mail,
            address: dataAux.address,
            ig: dataAux.ig,
            rif: dataAux.rif
        };
        endpoint = "/clientes";
        error = this.catchUserErrors();
        if (error) {
            var errorMsg = "Algunos campos son inválidos. Por favor, revise el formulario e intente de nuevo";
            this.openError(errorMsg);
        }
        else {
            this.dbHandler
                .createSomething(dataValues, endpoint)
                .subscribe(function (data) {
                // data is already a JSON object
                if (!data.status) {
                    var errorMsg = data.msg;
                    _this.openError(errorMsg);
                }
                else {
                    _this.onData.emit(data);
                }
            });
        }
    };
    FormClientesComponent.prototype.openError = function (msg) {
        this.errorMsg = msg;
        this.showError = {
            errorAct: true
        };
    };
    FormClientesComponent.prototype.closeError = function () {
        this.showError = {
            errorAct: false
        };
    };
    FormClientesComponent.prototype.resetForms = function () {
        this.registroCliente.reset();
    };
    FormClientesComponent.prototype.catchUserErrors = function () {
        var aux1 = this.fCliente.name.errors
            ? this.fCliente.name.errors.required
            : false;
        var aux2 = this.fCliente.mail.errors
            ? this.fCliente.mail.errors.required
            : false;
        var aux3 = this.fCliente.address.errors
            ? this.fCliente.address.errors.required
            : false;
        var aux4 = this.fCliente.ws.errors
            ? this.fCliente.ws.errors.required
            : false;
        var aux5 = this.fCliente.rif.errors
            ? this.fCliente.rif.errors.minlength
            : false;
        var error = aux1 || aux2 || aux3 || aux4 || aux5;
        return error;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], FormClientesComponent.prototype, "editMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormClientesComponent.prototype, "cliente", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormClientesComponent.prototype, "onData", void 0);
    FormClientesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-form-clientes",
            template: __webpack_require__(/*! ./form-clientes.component.html */ "./src/app/dashboard/components/form-clientes/form-clientes.component.html"),
            styles: [__webpack_require__(/*! ./form-clientes.component.scss */ "./src/app/dashboard/components/form-clientes/form-clientes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], FormClientesComponent);
    return FormClientesComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/form-cobro/form-cobro.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/components/form-cobro/form-cobro.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cardBox\">\n\n  <form class=\"formBox\" [formGroup]=\"registroCobro\" (ngSubmit)=\"endRegistro()\">\n    <div class=\"formContent\">\n      <div class=\"formInput\">\n        <label for=\"\">Fecha*</label>\n        <input type=\"date\" class=\"lInput\" name=\"\" formControlName=\"fecha\" [max]=\"getToday()\">\n      </div>\n      <div class=\"formInput\">\n\n        <label for=\"mBacc\">Banco </label>\n        <select class=\"lInput\" formControlName=\"banco\">\n          <option *ngFor=\"let value of bancos;\" value={{value._id}}>{{value.alias}}</option>\n        </select>\n      </div>\n      <div class=\"formInput\">\n        <label for=\"mTAcc\">Referencia </label>\n        <select class=\"lInput\" formControlName=\"ctaPorCobrar\">\n          <option *ngFor=\"let value of cuentasPorCobrar;\" value={{value._id}}>{{value._id}}</option>\n        </select>\n      </div>\n      <div class=\"formInput\">\n        <label for=\"mAmmount\">Monto </label>\n        <input i18n lang=\"es-VE\" type=\"number\" step=\"0.01\" class=\"lInput\" formControlName=\"monto\" name=\"\">\n      </div>\n    </div>\n    <button type=\"submit\" class=\"buttonBox\">\n      <p>Registrar Cobro</p>\n    </button>\n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/dashboard/components/form-cobro/form-cobro.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/components/form-cobro/form-cobro.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2Zvcm0tY29icm8vZm9ybS1jb2Jyby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/components/form-cobro/form-cobro.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/components/form-cobro/form-cobro.component.ts ***!
  \*************************************************************************/
/*! exports provided: FormCobroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCobroComponent", function() { return FormCobroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var FormCobroComponent = /** @class */ (function () {
    function FormCobroComponent(auth, dbHandler, fb, router) {
        this.auth = auth;
        this.dbHandler = dbHandler;
        this.fb = fb;
        this.router = router;
        this.onData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FormCobroComponent.prototype.ngOnInit = function () {
        this.bancos = this.dbHandler.getLocal("bancosValues");
        this.cuentasT = this.dbHandler.getLocal("cuentastValues");
        this.cuentasPorCobrar = this.dbHandler.getLocal("cuentasporcobrarValues");
        this.initForm();
        this.showError = {
            errorAct: false
        };
    };
    FormCobroComponent.prototype.initForm = function () {
        this.registroCobro = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            banco: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
            fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
            cuentat: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
            ctaPorCobrar: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
            monto: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("")
        });
    };
    FormCobroComponent.prototype.getToday = function () {
        return new Date().toISOString().split("T")[0];
    };
    Object.defineProperty(FormCobroComponent.prototype, "fCobro", {
        get: function () {
            return this.registroCobro.controls;
        },
        enumerable: true,
        configurable: true
    });
    FormCobroComponent.prototype.endRegistro = function () {
        var _this = this;
        var dataAux = this.registroCobro.value;
        var dataValues;
        var error;
        var refreshList;
        var endpoint;
        console.log("here");
        dataValues = {
            fecha: dataAux.fecha,
            banco: dataAux.banco,
            ctaPorCobrar: dataAux.ctaPorCobrar,
            monto: dataAux.monto
        };
        endpoint = "/cobros";
        error = this.catchUserErrors();
        if (error) {
            var errorMsg = "Algunos campos son inválidos. Por favor, revise el formulario e intente de nuevo";
            this.openError(errorMsg);
        }
        else {
            this.dbHandler
                .createSomething(dataValues, endpoint)
                .subscribe(function (data) {
                // data is already a JSON object
                if (!data.status) {
                    var errorMsg = data.msg;
                    _this.openError(errorMsg);
                }
                else {
                    _this.onData.emit(data);
                }
            });
        }
    };
    FormCobroComponent.prototype.openError = function (msg) {
        this.errorMsg = msg;
        this.showError = {
            errorAct: true
        };
    };
    FormCobroComponent.prototype.closeError = function () {
        this.showError = {
            errorAct: false
        };
    };
    FormCobroComponent.prototype.resetForms = function () {
        this.registroCobro.reset();
    };
    FormCobroComponent.prototype.catchUserErrors = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], FormCobroComponent.prototype, "editMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormCobroComponent.prototype, "cobro", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormCobroComponent.prototype, "onData", void 0);
    FormCobroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-form-cobro",
            template: __webpack_require__(/*! ./form-cobro.component.html */ "./src/app/dashboard/components/form-cobro/form-cobro.component.html"),
            styles: [__webpack_require__(/*! ./form-cobro.component.scss */ "./src/app/dashboard/components/form-cobro/form-cobro.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], FormCobroComponent);
    return FormCobroComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/form-company/form-company.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/components/form-company/form-company.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cardBox\">\n    <form class=\"formBox\" [formGroup]=\"registroCompany\">\n        <div class=\"formContent\">\n            <div class=\"formInput\">\n                <label for=\"\">Nombre*</label>\n                <input class=\"lInput\" type=\"text\" formControlName=\"name\" name=\"name\" />\n            </div>\n            <div class=\"errorTag\"\n                *ngIf=\"fCompany.name.errors?.required && (fCompany.name.touched || fCompany.name.dirty)\">Por favor\n                ingrese el nombre de la compañía</div>\n            <div class=\"formInput\">\n                <label for=\"\">RIF*</label>\n                <input class=\"lInput\" type=\"text\" formControlName=\"rif\" name=\"rif\" />\n            </div>\n            <div class=\"errorTag\" *ngIf=\"fCompany.rif.errors?.required && (fCompany.rif.touched || fCompany.rif.dirty)\">\n                Por favor ingrese el rif de la compañía</div>\n            <div class=\"formInput\">\n                <label for=\"\">Dirección*</label>\n                <input class=\"lInput\" type=\"text\" formControlName=\"address\" name=\"address\" />\n            </div>\n            <div class=\"errorTag\"\n                *ngIf=\"fCompany.address.errors?.required && (fCompany.address.touched || fCompany.address.dirty)\">Por\n                favor ingrese la dirección de la compañía</div>\n            <div class=\"formInput\">\n                <label for=\"\">Correo*</label>\n                <input class=\"lInput\" type=\"text\" formControlName=\"mail\" name=\"mail\" />\n            </div>\n            <div class=\"errorTag\"\n                *ngIf=\"fCompany.mail.errors?.required && (fCompany.mail.touched || fCompany.mail.dirty)\">Por favor\n                ingrese un correo</div>\n            <div class=\"formInput\">\n                <label for=\"\">Teléfono*</label>\n                <input class=\"lInput\" type=\"text\" formControlName=\"tlf\" name=\"tlf\" />\n            </div>\n            <div class=\"errorTag\" *ngIf=\"fCompany.tlf.errors?.required && (fCompany.tlf.touched || fCompany.tlf.dirty)\">\n                Por favor ingrese un número telefónico</div>\n        </div>\n        <button type=\"submit\" *ngIf=\"!editMode\" class=\"buttonBox\" (click)=\"endRegistro()\">\n            <p>Registrar compañía</p>\n        </button>\n        <button type=\"submit\" *ngIf=\"editMode\" class=\"buttonBox\" (click)=\"endUpdate()\">\n            <p>Actualizar compañía</p>\n        </button>\n    </form>\n</div>\n\n<app-error class=\"errorBox\" [msg]='errorMsg' [ngClass]=\"showError\" (closeError)=\"closeError()\"></app-error>"

/***/ }),

/***/ "./src/app/dashboard/components/form-company/form-company.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/components/form-company/form-company.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2Zvcm0tY29tcGFueS9mb3JtLWNvbXBhbnkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/components/form-company/form-company.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/components/form-company/form-company.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FormCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCompanyComponent", function() { return FormCompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var FormCompanyComponent = /** @class */ (function () {
    function FormCompanyComponent(auth, dbHandler, fb, router) {
        this.auth = auth;
        this.dbHandler = dbHandler;
        this.fb = fb;
        this.router = router;
        this.onData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FormCompanyComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.showError = {
            errorAct: false
        };
    };
    FormCompanyComponent.prototype.initForm = function () {
        this.registroCompany = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            tlf: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            rif: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            mail: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
        if (this.editMode) {
            this.registroCompany.controls["name"].setValue(this.company.name);
            this.registroCompany.controls["tlf"].setValue(this.company.tlf);
            this.registroCompany.controls["address"].setValue(this.company.address);
            this.registroCompany.controls["rif"].setValue(this.company.rif);
            this.registroCompany.controls["mail"].setValue(this.company.mail);
        }
    };
    Object.defineProperty(FormCompanyComponent.prototype, "fCompany", {
        get: function () {
            return this.registroCompany.controls;
        },
        enumerable: true,
        configurable: true
    });
    FormCompanyComponent.prototype.endRegistro = function () {
        var _this = this;
        var dataAux = this.registroCompany.value;
        var dataValues;
        var error;
        var refreshList;
        var endpoint;
        dataValues = {
            name: dataAux.name,
            tlf: dataAux.tlf,
            rif: dataAux.rif,
            mail: dataAux.mail,
            address: dataAux.address
        };
        endpoint = "/company";
        error = this.catchUserErrors();
        if (error) {
            var errorMsg = "Algunos campos son inválidos. Por favor, revise el formulario e intente de nuevo";
            this.openError(errorMsg);
        }
        else {
            this.dbHandler
                .createSomething(dataValues, endpoint)
                .subscribe(function (data) {
                // data is already a JSON object
                if (!data.status) {
                    var errorMsg = data.msg;
                    _this.openError(errorMsg);
                }
                else {
                    _this.onData.emit(data);
                }
            });
        }
    };
    FormCompanyComponent.prototype.endUpdate = function () {
        var _this = this;
        var dataAux = this.registroCompany.value;
        var dataValues;
        var error;
        var refreshList;
        var endpoint;
        dataValues = {
            name: dataAux.name,
            tlf: dataAux.tlf,
            rif: dataAux.rif,
            mail: dataAux.mail,
            address: dataAux.address,
            id: this.company._id
        };
        endpoint = "/company";
        error = this.catchUserErrors();
        if (error) {
            var errorMsg = "Algunos campos son inválidos. Por favor, revise el formulario e intente de nuevo";
            this.openError(errorMsg);
        }
        else {
            this.dbHandler
                .updateSomething(dataValues, endpoint)
                .subscribe(function (data) {
                // data is already a JSON object
                if (!data.status) {
                    var errorMsg = data.msg;
                    _this.openError(errorMsg);
                }
                else {
                    _this.onData.emit(data);
                }
            });
        }
    };
    FormCompanyComponent.prototype.openError = function (msg) {
        this.errorMsg = msg;
        this.showError = {
            errorAct: true
        };
    };
    FormCompanyComponent.prototype.closeError = function () {
        this.showError = {
            errorAct: false
        };
    };
    FormCompanyComponent.prototype.resetForms = function () {
        this.registroCompany.reset();
    };
    FormCompanyComponent.prototype.catchUserErrors = function () {
        var aux1 = this.fCompany.name.errors
            ? this.fCompany.name.errors.required
            : false;
        var aux2 = this.fCompany.tlf.errors
            ? this.fCompany.tlf.errors.required
            : false;
        var aux3 = this.fCompany.address.errors
            ? this.fCompany.address.errors.required
            : false;
        var aux4 = this.fCompany.rif.errors
            ? this.fCompany.rif.errors.required
            : false;
        var aux5 = this.fCompany.mail.errors
            ? this.fCompany.mail.errors.required
            : false;
        var error = aux1 || aux2 || aux3 || aux4;
        return error;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], FormCompanyComponent.prototype, "editMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormCompanyComponent.prototype, "company", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormCompanyComponent.prototype, "onData", void 0);
    FormCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-form-company",
            template: __webpack_require__(/*! ./form-company.component.html */ "./src/app/dashboard/components/form-company/form-company.component.html"),
            styles: [__webpack_require__(/*! ./form-company.component.scss */ "./src/app/dashboard/components/form-company/form-company.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], FormCompanyComponent);
    return FormCompanyComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/form-compra/form-compra.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/components/form-compra/form-compra.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cardBox\">\n  <form class=\"formBox\" [formGroup]=\"registroCompra\" (ngSubmit)=\"endRegistro()\">\n    <div class=\"formContent\">\n      <div class=\"formInput\">\n        <label for=\"\">Fecha*</label>\n        <input type=\"date\" class=\"lInput\" name=\"\" formControlName=\"fecha\" [max]=\"getToday()\">\n      </div>\n      <div class=\"formInput\">\n        <label for=\"\">Proveedor*</label>\n        <select class=\"lInput\" name=\"\" formControlName=\"proveedor\">\n          <option *ngFor=\"let value of proveedores\" [value]=\"value._id\">{{value.name}}</option>\n        </select>\n\n      </div>\n      <div class=\"errorTag\"\n        *ngIf=\"fCompra.proveedor.errors?.required && (fCompra.proveedor.touched || fCompra.proveedor.dirty)\">Por\n        favor seleccione el proveedor\n      </div>\n      <div class=\"formInput\">\n        <label for=\"\">Almacen*</label>\n        <select class=\"lInput\" name=\"\" formControlName=\"almacen\">\n          <option *ngFor=\"let value of almacenes\" [value]=\"value._id\">{{value.code}}</option>\n        </select>\n\n      </div>\n      <div class=\"errorTag\"\n        *ngIf=\"fCompra.almacen.errors?.required && (fCompra.almacen.touched || fCompra.almacen.dirty)\">Por favor\n        seleccione el almacen</div>\n      <div class=\"formInput\">\n        <label for=\"\">Referencia de compra*</label>\n        <input type=\"text\" class=\"lInput\" name=\"\" formControlName=\"referencia\">\n      </div>\n      <div class=\"errorTag\"\n        *ngIf=\"fCompra.referencia.errors?.required && (fCompra.referencia.touched || fCompra.referencia.dirty)\">Por\n        favor ingrese la referencia de compra</div>\n      <div class=\"formInput\">\n        <label for=\"\">Observaciones</label>\n        <textarea class=\"\" rows=\"6\" type=\"text\" formControlName=\"observaciones\" name=\"\"></textarea>\n      </div>\n      <div class=\"formInput\">\n        <label for=\"\">Monto total de la compra*</label>\n        <input type=\"number\" step=\"0.01\" class=\"lInput\" name=\"\" formControlName=\"montoTotal\">\n      </div>\n      <div class=\"errorTag\"\n        *ngIf=\"fCompra.referencia.errors?.required && (fCompra.referencia.touched || fCompra.referencia.dirty)\">Por\n        favor ingrese monto total de la compra</div>\n      <div class=\"formInput\">\n        <label for=\"\">Estado del pago*</label>\n        <select (change)=\"togglePayments()\" class=\"lInput\" name=\"\" formControlName=\"estado\">\n          <option value=\"Pagado\">Pagado</option>\n          <option value=\"Por pagar\">Por pagar</option>\n        </select>\n\n      </div>\n      <div class=\"errorTag\" *ngIf=\"fCompra.estado.errors?.required && (fCompra.estado.touched || fCompra.estado.dirty)\">\n        Por favor\n        seleccione el estado del pago</div>\n\n    </div>\n\n    <div class=\"paymentsBox\" *ngIf=\"showPayments\">\n      <div class=\"paymentsFunctions\">\n        <p class=\"paymentFunction\" (click)=\"addPago()\">Agregar pago</p>\n      </div>\n      <div class=\"paymentsList\">\n        <div class=\"paymentsTitle\">\n          <p class=\"fechaTitle\">Fecha</p>\n          <p class=\"bankTitle\">Banco</p>\n          <p class=\"amountTitle\">Monto</p>\n          <p class=\"deleteTitle\">Eliminar</p>\n        </div>\n        <div class=\"arrayBox\" *ngFor=\"let pago of pagos.controls; let i = index;\">\n          <ng-container class=\"controlBox\" [formGroup]=\"pago\">\n            <div class=\"fechaField\">\n              <input type=\"date\" class=\"fechaInput\" name=\"\" formControlName=\"fecha\" [max]=\"getToday()\">\n            </div>\n            <div class=\"bankField\">\n              <select class=\"bankInput\" name=\"\" formControlName=\"banco\">\n                <option *ngFor=\"let value of bancos\" [value]=\"value._id\">{{value.alias}}</option>\n              </select>\n            </div>\n            <div class=\"amountField\">\n              <input class=\"amountInput\" type=\"number\" step=\"0.01\" formControlName=\"monto\" />\n            </div>\n\n            <div class=\"deleteField\">\n              <p (click)=\"removePayment($event, i)\">X</p>\n            </div>\n          </ng-container>\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"productsBox\">\n      <div class=\"productsFunctions\">\n        <p class=\"productFunction\" (click)=\"addProducto()\">Agregar productos</p>\n      </div>\n      <div class=\"productsList\">\n        <div class=\"productsTitle\">\n          <p class=\"productTitle\">Producto</p>\n          <p class=\"qtyTitle\">Cantidad</p>\n          <p class=\"qtyTitle\">Costo unitario</p>\n          <p class=\"deleteTitle\">Eliminar</p>\n        </div>\n        <div class=\"arrayBox\" *ngFor=\"let productoIngreso of productosIngresos.controls; let i = index;\">\n          <ng-container class=\"controlBox\" [formGroup]=\"productoIngreso\">\n            <div class=\"productField\">\n              <select class=\"productInput\" name=\"\" formControlName=\"producto\">\n                <option *ngFor=\"let value of productos\" [value]=\"value._id\">{{value.name}}</option>\n              </select>\n            </div>\n            <div class=\"qtyField\">\n              <input class=\"qtyInput\" type=\"number\" min=\"1\" formControlName=\"qty\" name=\"qty\" />\n            </div>\n            <div class=\"qtyField\">\n              <input class=\"qtyInput\" type=\"number\" lang=\"es\" step=\"0.01\" formControlName=\"price\" name=\"price\" />\n            </div>\n\n            <div class=\"deleteField\">\n              <p (click)=\"removeProduct($event, i)\">X</p>\n            </div>\n          </ng-container>\n\n        </div>\n      </div>\n    </div>\n\n    <button type=\"submit\" class=\"buttonBox\">\n      <p>Registrar compra</p>\n    </button>\n  </form>\n</div>\n\n<app-error class=\"errorBox\" [msg]='errorMsg' [ngClass]=\"showError\" (closeError)=\"closeError()\"></app-error>"

/***/ }),

/***/ "./src/app/dashboard/components/form-compra/form-compra.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/components/form-compra/form-compra.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".productsBox {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-top: 25px; }\n\n.productsFunctions {\n  width: 100%;\n  margin-bottom: 16px; }\n\n.productFunction {\n  margin: 0;\n  font-size: 16px;\n  text-align: center;\n  width: 100%;\n  cursor: pointer; }\n\n.productFunction:hover {\n  font-weight: bold; }\n\n.productsList {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  flex-wrap: wrap; }\n\n.productsTitle {\n  display: flex;\n  flex-direction: row;\n  width: 100%; }\n\n.productField {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: nowrap;\n  margin-bottom: 10px;\n  align-self: center;\n  width: 50%; }\n\n.qtyField {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: nowrap;\n  margin-bottom: 10px;\n  align-self: center;\n  width: 25%; }\n\n.deleteField {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: nowrap;\n  margin-bottom: 10px;\n  align-self: center;\n  width: 25%; }\n\n.deleteField p {\n  font-size: 14px;\n  width: 100%;\n  text-align: center;\n  cursor: pointer; }\n\n.deleteField p:hover {\n  font-weight: bold; }\n\n.productTitle {\n  font-size: 14px;\n  text-align: center;\n  font-weight: bold;\n  width: 50%; }\n\n.qtyTitle {\n  font-size: 14px;\n  font-weight: bold;\n  text-align: center;\n  width: 25%; }\n\n.deleteTitle {\n  font-size: 14px;\n  font-weight: bold;\n  text-align: center;\n  width: 25%; }\n\n.qtyInput {\n  width: 50%;\n  margin-top: 5px;\n  font-size: 16px;\n  padding-left: 16px;\n  height: 33px;\n  border: none;\n  background-image: none;\n  background-color: white;\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  border-bottom-style: solid;\n  border-bottom-width: 2px;\n  border-bottom-color: black;\n  box-shadow: none; }\n\n.productInput {\n  width: 100%;\n  margin-top: 5px;\n  font-size: 16px;\n  padding-left: 16px;\n  height: 33px;\n  border: none;\n  background-image: none;\n  background-color: white;\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  border-bottom-style: solid;\n  border-bottom-width: 2px;\n  border-bottom-color: black;\n  box-shadow: none; }\n\n.paymentsBox {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-top: 25px; }\n\n.paymentsFunctions {\n  width: 100%;\n  margin-bottom: 16px; }\n\n.paymentFunction {\n  margin: 0;\n  font-size: 16px;\n  text-align: center;\n  width: 100%;\n  cursor: pointer; }\n\n.paymentFunction:hover {\n  font-weight: bold; }\n\n.paymentsList {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  flex-wrap: wrap; }\n\n.paymentsTitle {\n  display: flex;\n  flex-direction: row;\n  width: 100%; }\n\n.fechaField {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: nowrap;\n  margin-bottom: 10px;\n  align-self: center;\n  width: 30%; }\n\n.bankField {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: nowrap;\n  margin-bottom: 10px;\n  align-self: center;\n  width: 30%; }\n\n.amountField {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: nowrap;\n  margin-bottom: 10px;\n  align-self: center;\n  width: 20%; }\n\n.fechaTitle {\n  font-size: 14px;\n  text-align: center;\n  font-weight: bold;\n  width: 30%; }\n\n.bankTitle {\n  font-size: 14px;\n  text-align: center;\n  font-weight: bold;\n  width: 30%; }\n\n.amountTitle {\n  font-size: 14px;\n  font-weight: bold;\n  text-align: center;\n  width: 20%; }\n\n.amountInput {\n  width: 50%;\n  margin-top: 5px;\n  font-size: 16px;\n  padding-left: 16px;\n  height: 33px;\n  border: none;\n  background-image: none;\n  background-color: white;\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  border-bottom-style: solid;\n  border-bottom-width: 2px;\n  border-bottom-color: black;\n  box-shadow: none; }\n\n.bankInput {\n  width: 100%;\n  margin-top: 5px;\n  font-size: 16px;\n  padding-left: 16px;\n  height: 33px;\n  border: none;\n  background-image: none;\n  background-color: white;\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  border-bottom-style: solid;\n  border-bottom-width: 2px;\n  border-bottom-color: black;\n  box-shadow: none; }\n\n.arrayBox {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center; }\n\n.controlBox {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZ2Vsb2Fjci9Qcm95ZWN0b3MvSW5WZW4vaW52ZW5BcHAvaW52ZW5hcHAvc3JjL2FwcC9kYXNoYm9hcmQvY29tcG9uZW50cy9mb3JtLWNvbXByYS9mb3JtLWNvbXByYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBR1o7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQUdaO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUVqQixVQUFVLEVBQUE7O0FBR1o7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUVsQixVQUFVLEVBQUE7O0FBR1o7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBRVo7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQix3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBRVo7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQUdaO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBRWpCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBRWpCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBRWxCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudHMvZm9ybS1jb21wcmEvZm9ybS1jb21wcmEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdHNCb3gge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLnByb2R1Y3RzRnVuY3Rpb25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5wcm9kdWN0RnVuY3Rpb24ge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvZHVjdEZ1bmN0aW9uOmhvdmVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wcm9kdWN0c0xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ucHJvZHVjdHNUaXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvZHVjdEZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5xdHlGaWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogMjUlO1xufVxuXG4uZGVsZXRlRmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgd2lkdGg6IDI1JTtcbn1cblxuLmRlbGV0ZUZpZWxkIHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRlbGV0ZUZpZWxkIHA6aG92ZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnByb2R1Y3RUaXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcblxuICB3aWR0aDogNTAlO1xufVxuXG4ucXR5VGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgd2lkdGg6IDI1JTtcbn1cblxuLmRlbGV0ZVRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMjUlO1xufVxuLnF0eUlucHV0IHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgaGVpZ2h0OiAzM3B4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogYmxhY2s7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5wcm9kdWN0SW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgaGVpZ2h0OiAzM3B4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogYmxhY2s7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5wYXltZW50c0JveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4ucGF5bWVudHNGdW5jdGlvbnMge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLnBheW1lbnRGdW5jdGlvbiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wYXltZW50RnVuY3Rpb246aG92ZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnBheW1lbnRzTGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5wYXltZW50c1RpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG59XG4uZmVjaGFGaWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogMzAlO1xufVxuLmJhbmtGaWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogMzAlO1xufVxuXG4uYW1vdW50RmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgd2lkdGg6IDIwJTtcbn1cblxuLmZlY2hhVGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgd2lkdGg6IDMwJTtcbn1cblxuLmJhbmtUaXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcblxuICB3aWR0aDogMzAlO1xufVxuXG4uYW1vdW50VGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgd2lkdGg6IDIwJTtcbn1cblxuLmFtb3VudElucHV0IHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgaGVpZ2h0OiAzM3B4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogYmxhY2s7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5iYW5rSW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgaGVpZ2h0OiAzM3B4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogYmxhY2s7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5hcnJheUJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRyb2xCb3gge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/components/form-compra/form-compra.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/components/form-compra/form-compra.component.ts ***!
  \***************************************************************************/
/*! exports provided: FormCompraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCompraComponent", function() { return FormCompraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var FormCompraComponent = /** @class */ (function () {
    function FormCompraComponent(auth, dbHandler, fb, router) {
        this.auth = auth;
        this.dbHandler = dbHandler;
        this.fb = fb;
        this.router = router;
        this.onData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.productosIngresos = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([]);
        this.pagos = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([]);
        this.showPayments = false;
    }
    FormCompraComponent.prototype.ngOnInit = function () {
        this.getValues();
        this.initForm();
        var type = this.auth.getType();
        switch (type) {
            case "Admin":
                break;
            case "Vendedor":
                break;
            default:
                break;
        }
        this.showError = {
            errorAct: false
        };
    };
    FormCompraComponent.prototype.getToday = function () {
        return new Date().toISOString().split("T")[0];
    };
    FormCompraComponent.prototype.getValues = function () {
        this.proveedores = this.dbHandler.getLocal("proveedoresValues");
        this.productos = this.dbHandler.getLocal("productosValues");
        this.bancos = this.dbHandler.getLocal("bancosValues");
        this.almacenes = this.dbHandler.getLocal("almacenesValues");
        console.log(this.proveedores);
        console.log(this.productos);
    };
    FormCompraComponent.prototype.initForm = function () {
        this.registroCompra = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            proveedor: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            almacen: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            estado: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            observaciones: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            referencia: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            montoTotal: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            productos: this.productosIngresos
        });
        this.addPago();
        this.addProducto();
    };
    FormCompraComponent.prototype.addPago = function () {
        var pago = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            banco: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            monto: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
        this.pagos.push(pago);
    };
    FormCompraComponent.prototype.removePago = function (event, index) {
        this.pagos.removeAt(index);
    };
    FormCompraComponent.prototype.togglePayments = function () {
        var estadoPago = this.registroCompra.value.estado;
        switch (estadoPago) {
            case "Pagado":
                this.showPayments = true;
                break;
            default:
                this.showPayments = false;
                break;
        }
    };
    FormCompraComponent.prototype.addProducto = function () {
        var productoIngreso = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            producto: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            qty: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("")
        });
        this.productosIngresos.push(productoIngreso);
    };
    FormCompraComponent.prototype.removeProduct = function (event, index) {
        this.productosIngresos.removeAt(index);
    };
    Object.defineProperty(FormCompraComponent.prototype, "fCompra", {
        get: function () {
            return this.registroCompra.controls;
        },
        enumerable: true,
        configurable: true
    });
    FormCompraComponent.prototype.endRegistro = function () {
        var _this = this;
        var dataAux = this.registroCompra.value;
        var dataValues;
        var error;
        var refreshList;
        var endpoint;
        var productosIngresos = [];
        var productosIngresosControls = this.productosIngresos.controls;
        for (var _i = 0, productosIngresosControls_1 = productosIngresosControls; _i < productosIngresosControls_1.length; _i++) {
            var control = productosIngresosControls_1[_i];
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]) {
                var producto = control.controls["producto"].value;
                var qty = control.controls["qty"].value;
                var unitcost = control.controls["price"].value;
                var productoIngreso = {
                    producto: producto,
                    qty: qty,
                    unitcost: unitcost
                };
                productosIngresos.push(productoIngreso);
            }
        }
        var pagos = [];
        var pagosControls = this.pagos.controls;
        for (var _a = 0, pagosControls_1 = pagosControls; _a < pagosControls_1.length; _a++) {
            var control = pagosControls_1[_a];
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]) {
                var banco = control.controls["banco"].value;
                var monto = control.controls["monto"].value;
                var fecha = control.controls["fecha"].value;
                var pago = {
                    banco: banco,
                    monto: monto,
                    fecha: fecha
                };
                pagos.push(pago);
            }
        }
        dataValues = {
            proveedor: dataAux.proveedor,
            fecha: dataAux.fecha,
            estado: dataAux.estado,
            almacen: dataAux.almacen,
            observaciones: dataAux.observaciones,
            montoTotal: dataAux.montoTotal,
            referencia: dataAux.referencia,
            productosIngresados: productosIngresos,
            pagos: pagos
        };
        endpoint = "/compras";
        error = this.catchUserErrors();
        if (error) {
            var errorMsg = "Algunos campos son inválidos. Por favor, revise el formulario e intente de nuevo";
            this.openError(errorMsg);
        }
        else {
            this.dbHandler
                .createSomething(dataValues, endpoint)
                .subscribe(function (data) {
                // data is already a JSON object
                if (!data.status) {
                    var errorMsg = data.msg;
                    _this.openError(errorMsg);
                }
                else {
                    _this.onData.emit(data);
                }
            });
        }
    };
    FormCompraComponent.prototype.openError = function (msg) {
        this.errorMsg = msg;
        this.showError = {
            errorAct: true
        };
    };
    FormCompraComponent.prototype.closeError = function () {
        this.showError = {
            errorAct: false
        };
    };
    FormCompraComponent.prototype.resetForms = function () {
        this.registroCompra.reset();
    };
    FormCompraComponent.prototype.catchUserErrors = function () {
        var aux1 = this.fCompra.fecha.errors
            ? this.fCompra.fecha.errors.required
            : false;
        var error = aux1;
        return error;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], FormCompraComponent.prototype, "editMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormCompraComponent.prototype, "compra", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormCompraComponent.prototype, "onData", void 0);
    FormCompraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-form-compra",
            template: __webpack_require__(/*! ./form-compra.component.html */ "./src/app/dashboard/components/form-compra/form-compra.component.html"),
            styles: [__webpack_require__(/*! ./form-compra.component.scss */ "./src/app/dashboard/components/form-compra/form-compra.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], FormCompraComponent);
    return FormCompraComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/form-cuentas-t/form-cuentas-t.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard/components/form-cuentas-t/form-cuentas-t.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cardBox\">\n\n  <form class=\"formBox\" [formGroup]=\"registroCuentast\" (ngSubmit)=\"endRegistro()\">\n    <div class=\"formContent\">\n\n      <div class=\"formInput\">\n        <label for=\"desc\">Nombre </label>\n        <input type=\"text\" class=\"lInput\" formControlName=\"nombre\" name=\"nombre\">\n      </div>\n\n      <div class=\"formInput\">\n        <label for=\"tipo\">Codigo clasificador </label>\n        <select class=\"lInput\" name=\"clasificacion\" formControlName=\"clasificacion\">\n          <option value=\"Activo\">1.- Activo</option>\n          <option value=\"Pasivo\">2.- Pasivo</option>\n          <option value=\"Capital\">3.- Capital</option>\n          <option value=\"Ingresos\">4.- Ingresos</option>\n          <option value=\"Costos\">5.- Costos</option>\n          <option value=\"Gastos\">6.- Gastos</option>\n          <option value=\"Otros Ingresos\">7.- Otros Ingresos</option>\n          <option value=\"Otros Egresos\">8.- Otros Egresos</option>\n        </select>\n      </div>\n      <div class=\"formInput\">\n        <label for=\"naturaleza\">Naturaleza </label>\n        <select class=\"lInput\" name=\"naturaleza\" formControlName=\"naturaleza\">\n          <option value=\"Debe\">Debe</option>\n          <option value=\"Haber\">Haber</option>\n        </select>\n      </div>\n\n      <button type=\"submit\" class=\"formButton\">\n        <p>Registrar Cuenta T</p>\n      </button>\n\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/components/form-cuentas-t/form-cuentas-t.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard/components/form-cuentas-t/form-cuentas-t.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2Zvcm0tY3VlbnRhcy10L2Zvcm0tY3VlbnRhcy10LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/components/form-cuentas-t/form-cuentas-t.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/components/form-cuentas-t/form-cuentas-t.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FormCuentasTComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCuentasTComponent", function() { return FormCuentasTComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var FormCuentasTComponent = /** @class */ (function () {
    function FormCuentasTComponent(auth, dbHandler, fb, router) {
        this.auth = auth;
        this.dbHandler = dbHandler;
        this.fb = fb;
        this.router = router;
        this.onData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FormCuentasTComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.showError = {
            errorAct: false
        };
    };
    FormCuentasTComponent.prototype.initForm = function () {
        this.registroCuentast = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
            clasificacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
            naturaleza: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
            descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("")
        });
    };
    Object.defineProperty(FormCuentasTComponent.prototype, "fCuentast", {
        get: function () {
            return this.registroCuentast.controls;
        },
        enumerable: true,
        configurable: true
    });
    FormCuentasTComponent.prototype.endRegistro = function () {
        var _this = this;
        var dataAux = this.registroCuentast.value;
        var dataValues;
        var error;
        var refreshList;
        var endpoint;
        console.log("here");
        dataValues = {
            name: dataAux.nombre,
            clasificacion: dataAux.clasificacion,
            descripcion: dataAux.descripcion,
            naturaleza: dataAux.naturaleza
        };
        endpoint = "/cuentast";
        error = this.catchUserErrors();
        if (error) {
            var errorMsg = "Algunos campos son inválidos. Por favor, revise el formulario e intente de nuevo";
            this.openError(errorMsg);
        }
        else {
            this.dbHandler
                .createSomething(dataValues, endpoint)
                .subscribe(function (data) {
                // data is already a JSON object
                if (!data.status) {
                    var errorMsg = data.msg;
                    _this.openError(errorMsg);
                }
                else {
                    _this.onData.emit(data);
                }
            });
        }
    };
    FormCuentasTComponent.prototype.openError = function (msg) {
        this.errorMsg = msg;
        this.showError = {
            errorAct: true
        };
    };
    FormCuentasTComponent.prototype.closeError = function () {
        this.showError = {
            errorAct: false
        };
    };
    FormCuentasTComponent.prototype.resetForms = function () {
        this.registroCuentast.reset();
    };
    FormCuentasTComponent.prototype.catchUserErrors = function () {
        var aux1 = this.fCuentast.nombre.errors
            ? this.fCuentast.nombre.errors.required
            : false;
        var aux2 = this.fCuentast.clasificacion.errors
            ? this.fCuentast.clasificacion.errors.required
            : false;
        var error = aux1 || aux2;
        return error;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], FormCuentasTComponent.prototype, "editMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormCuentasTComponent.prototype, "cuentaT", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormCuentasTComponent.prototype, "onData", void 0);
    FormCuentasTComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-form-cuentas-t",
            template: __webpack_require__(/*! ./form-cuentas-t.component.html */ "./src/app/dashboard/components/form-cuentas-t/form-cuentas-t.component.html"),
            styles: [__webpack_require__(/*! ./form-cuentas-t.component.scss */ "./src/app/dashboard/components/form-cuentas-t/form-cuentas-t.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], FormCuentasTComponent);
    return FormCuentasTComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/form-egreso/form-egreso.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/components/form-egreso/form-egreso.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  form-egreso works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/components/form-egreso/form-egreso.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/components/form-egreso/form-egreso.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2Zvcm0tZWdyZXNvL2Zvcm0tZWdyZXNvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/components/form-egreso/form-egreso.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/components/form-egreso/form-egreso.component.ts ***!
  \***************************************************************************/
/*! exports provided: FormEgresoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormEgresoComponent", function() { return FormEgresoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var FormEgresoComponent = /** @class */ (function () {
    function FormEgresoComponent(auth, dbHandler, fb, router) {
        this.auth = auth;
        this.dbHandler = dbHandler;
        this.fb = fb;
        this.router = router;
        this.onData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FormEgresoComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.showError = {
            errorAct: false
        };
    };
    FormEgresoComponent.prototype.initForm = function () {
        this.registroEgreso = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
    };
    Object.defineProperty(FormEgresoComponent.prototype, "fEgreso", {
        get: function () {
            return this.registroEgreso.controls;
        },
        enumerable: true,
        configurable: true
    });
    FormEgresoComponent.prototype.endRegistro = function () {
        var _this = this;
        var dataAux = this.registroEgreso.value;
        var dataValues;
        var error;
        var refreshList;
        var endpoint;
        console.log("here");
        dataValues = {
            name: dataAux.name,
            ws: dataAux.ws,
            mail: dataAux.mail,
            address: dataAux.address,
            ig: dataAux.ig,
            rif: dataAux.rif
        };
        endpoint = "/egresos";
        error = this.catchUserErrors();
        if (error) {
            var errorMsg = "Algunos campos son inválidos. Por favor, revise el formulario e intente de nuevo";
            this.openError(errorMsg);
        }
        else {
            this.dbHandler
                .createSomething(dataValues, endpoint)
                .subscribe(function (data) {
                // data is already a JSON object
                if (!data.status) {
                    var errorMsg = data.msg;
                    _this.openError(errorMsg);
                }
                else {
                    _this.onData.emit(data);
                }
            });
        }
    };
    FormEgresoComponent.prototype.openError = function (msg) {
        this.errorMsg = msg;
        this.showError = {
            errorAct: true
        };
    };
    FormEgresoComponent.prototype.closeError = function () {
        this.showError = {
            errorAct: false
        };
    };
    FormEgresoComponent.prototype.resetForms = function () {
        this.registroEgreso.reset();
    };
    FormEgresoComponent.prototype.catchUserErrors = function () {
        var aux1 = this.fEgreso.name.errors
            ? this.fEgreso.name.errors.required
            : false;
        var aux2 = this.fEgreso.mail.errors
            ? this.fEgreso.mail.errors.required
            : false;
        var aux3 = this.fEgreso.address.errors
            ? this.fEgreso.address.errors.required
            : false;
        var aux4 = this.fEgreso.ws.errors ? this.fEgreso.ws.errors.required : false;
        var aux5 = this.fEgreso.rif.errors
            ? this.fEgreso.rif.errors.minlength
            : false;
        var error = aux1 || aux2 || aux3 || aux4 || aux5;
        return error;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], FormEgresoComponent.prototype, "editMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormEgresoComponent.prototype, "egreso", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormEgresoComponent.prototype, "onData", void 0);
    FormEgresoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-form-egreso",
            template: __webpack_require__(/*! ./form-egreso.component.html */ "./src/app/dashboard/components/form-egreso/form-egreso.component.html"),
            styles: [__webpack_require__(/*! ./form-egreso.component.scss */ "./src/app/dashboard/components/form-egreso/form-egreso.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], FormEgresoComponent);
    return FormEgresoComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/form-gasto/form-gasto.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/components/form-gasto/form-gasto.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cardBox\">\n  <form class=\"formBox\" [formGroup]=\"registroGasto\" (ngSubmit)=\"endRegistro()\">\n    <div class=\"formContent\">\n      <!--       <div class=\"formInput\">\n        <label for=\"\">Fecha*</label>\n        <input type=\"date\" class=\"lInput\" name=\"\" formControlName=\"fecha\" [max]=\"getToday()\">\n      </div>\n      <div class=\"formInput\">\n        <label for=\"\">Proveedor*</label>\n        <select class=\"lInput\" name=\"\" formControlName=\"proveedor\">\n          <option *ngFor=\"let value of proveedores\" [value]=\"value._id\">{{value.name}}</option>\n        </select>\n\n      </div>\n      <div class=\"errorTag\"\n        *ngIf=\"fGasto.proveedor.errors?.required && (fGasto.proveedor.touched || fGasto.proveedor.dirty)\">Por\n        favor seleccione el proveedor\n      </div>\n -->\n      <div class=\"formInput\">\n        <label for=\"\">Almacen*</label>\n        <select class=\"lInput\" name=\"\" formControlName=\"almacen\">\n          <option *ngFor=\"let value of almacenes\" [value]=\"value._id\">{{value.code}}</option>\n        </select>\n\n      </div>\n      <div class=\"errorTag\" *ngIf=\"fGasto.almacen.errors?.required && (fGasto.almacen.touched || fGasto.almacen.dirty)\">\n        Por favor\n        seleccione el almacen</div>\n      <div class=\"formInput\">\n        <label for=\"\">Descripción del gasto*</label>\n        <input type=\"text\" class=\"lInput\" name=\"\" formControlName=\"descripcion\">\n      </div>\n      <div class=\"errorTag\"\n        *ngIf=\"fGasto.descripcion.errors?.required && (fGasto.descripcion.touched || fGasto.descripcion.dirty)\">Por\n        favor ingrese la descripción del gasto</div>\n      <div class=\"formInput\">\n        <label for=\"\">Referencia de gasto*</label>\n        <input type=\"text\" class=\"lInput\" name=\"\" formControlName=\"referencia\">\n      </div>\n      <div class=\"errorTag\"\n        *ngIf=\"fGasto.referencia.errors?.required && (fGasto.referencia.touched || fGasto.referencia.dirty)\">Por\n        favor ingrese la referencia de gasto</div>\n      <div class=\"formInput\">\n        <label for=\"\">Monto total del gasto*</label>\n        <input type=\"number\" step=\"0.01\" class=\"lInput\" name=\"\" formControlName=\"montoTotal\">\n      </div>\n      <div class=\"errorTag\"\n        *ngIf=\"fGasto.montoTotal.errors?.required && (fGasto.montoTotal.touched || fGasto.montoTotal.dirty)\">Por\n        favor ingrese el monto total del gasto</div>\n      <div class=\"formInput\">\n        <label for=\"\">Observaciones</label>\n        <textarea class=\"\" rows=\"6\" type=\"text\" formControlName=\"observaciones\" name=\"\"></textarea>\n      </div>\n\n      <div class=\"formInput\">\n        <label for=\"\">Estado del pago*</label>\n        <select (change)=\"togglePayments()\" class=\"lInput\" name=\"\" formControlName=\"estadoPago\">\n          <option value=\"Pagado\">Pagado</option>\n          <option value=\"Por pagar\">Por pagar</option>\n        </select>\n\n      </div>\n      <div class=\"errorTag\"\n        *ngIf=\"fGasto.estadoPago.errors?.required && (fGasto.estadoPago.touched || fGasto.estadoPago.dirty)\">\n        Por favor\n        seleccione el estado del pago</div>\n\n    </div>\n\n\n    <div class=\"paymentsBox\" *ngIf=\"showPayments\">\n      <div class=\"paymentsFunctions\">\n        <p class=\"paymentFunction\" (click)=\"addPago()\">Agregar pago</p>\n      </div>\n      <div class=\"paymentsList\">\n        <div class=\"paymentsTitle\">\n          <p class=\"fechaTitle\">Fecha</p>\n          <p class=\"bankTitle\">Banco</p>\n          <p class=\"amountTitle\">Monto</p>\n          <p class=\"deleteTitle\">Eliminar</p>\n        </div>\n        <div class=\"arrayBox\" *ngFor=\"let pago of pagos.controls; let i = index;\">\n          <ng-container class=\"controlBox\" [formGroup]=\"pago\">\n            <div class=\"fechaField\">\n              <input type=\"date\" class=\"fechaInput\" name=\"\" formControlName=\"fecha\" [max]=\"getToday()\">\n            </div>\n            <div class=\"bankField\">\n              <select class=\"bankInput\" name=\"\" formControlName=\"banco\">\n                <option *ngFor=\"let value of bancos\" [value]=\"value._id\">{{value.alias}}</option>\n              </select>\n            </div>\n            <div class=\"amountField\">\n              <input class=\"amountInput\" type=\"number\" step=\"0.01\" formControlName=\"monto\" />\n            </div>\n\n            <div class=\"deleteField\">\n              <p (click)=\"removePayment($event, i)\">X</p>\n            </div>\n          </ng-container>\n\n        </div>\n      </div>\n    </div>\n\n    <button type=\"submit\" class=\"buttonBox\">\n      <p>Registrar gasto</p>\n    </button>\n  </form>\n</div>\n\n<app-error class=\"errorBox\" [msg]='errorMsg' [ngClass]=\"showError\" (closeError)=\"closeError()\"></app-error>"

/***/ }),

/***/ "./src/app/dashboard/components/form-gasto/form-gasto.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/components/form-gasto/form-gasto.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".paymentsBox {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-top: 25px; }\n\n.paymentsFunctions {\n  width: 100%;\n  margin-bottom: 16px; }\n\n.paymentFunction {\n  margin: 0;\n  font-size: 16px;\n  text-align: center;\n  width: 100%;\n  cursor: pointer; }\n\n.paymentFunction:hover {\n  font-weight: bold; }\n\n.paymentsList {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  flex-wrap: wrap; }\n\n.paymentsTitle {\n  display: flex;\n  flex-direction: row;\n  width: 100%; }\n\n.fechaField {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: nowrap;\n  margin-bottom: 10px;\n  align-self: center;\n  width: 30%; }\n\n.bankField {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: nowrap;\n  margin-bottom: 10px;\n  align-self: center;\n  width: 30%; }\n\n.amountField {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: nowrap;\n  margin-bottom: 10px;\n  align-self: center;\n  width: 20%; }\n\n.fechaTitle {\n  font-size: 14px;\n  text-align: center;\n  font-weight: bold;\n  width: 30%; }\n\n.bankTitle {\n  font-size: 14px;\n  text-align: center;\n  font-weight: bold;\n  width: 30%; }\n\n.amountTitle {\n  font-size: 14px;\n  font-weight: bold;\n  text-align: center;\n  width: 20%; }\n\n.amountInput {\n  width: 50%;\n  margin-top: 5px;\n  font-size: 16px;\n  padding-left: 16px;\n  height: 33px;\n  border: none;\n  background-image: none;\n  background-color: white;\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  border-bottom-style: solid;\n  border-bottom-width: 2px;\n  border-bottom-color: black;\n  box-shadow: none; }\n\n.bankInput {\n  width: 100%;\n  margin-top: 5px;\n  font-size: 16px;\n  padding-left: 16px;\n  height: 33px;\n  border: none;\n  background-image: none;\n  background-color: white;\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  border-bottom-style: solid;\n  border-bottom-width: 2px;\n  border-bottom-color: black;\n  box-shadow: none; }\n\n.deleteTitle {\n  font-size: 14px;\n  font-weight: bold;\n  text-align: center;\n  width: 20%; }\n\n.deleteField {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: nowrap;\n  margin-bottom: 10px;\n  align-self: center;\n  width: 20%; }\n\n.deleteField p {\n  font-size: 14px;\n  width: 100%;\n  text-align: center;\n  cursor: pointer; }\n\n.deleteField p:hover {\n  font-weight: bold; }\n\n.arrayBox {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center; }\n\n.controlBox {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZ2Vsb2Fjci9Qcm95ZWN0b3MvSW5WZW4vaW52ZW5BcHAvaW52ZW5hcHAvc3JjL2FwcC9kYXNoYm9hcmQvY29tcG9uZW50cy9mb3JtLWdhc3RvL2Zvcm0tZ2FzdG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsU0FBUztFQUNULGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXLEVBQUE7O0FBRWI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQUVaO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBR1o7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUVqQixVQUFVLEVBQUE7O0FBR1o7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUVqQixVQUFVLEVBQUE7O0FBR1o7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUVsQixVQUFVLEVBQUE7O0FBR1o7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQix3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBR1o7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudHMvZm9ybS1nYXN0by9mb3JtLWdhc3RvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBheW1lbnRzQm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5wYXltZW50c0Z1bmN0aW9ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4ucGF5bWVudEZ1bmN0aW9uIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBheW1lbnRGdW5jdGlvbjpob3ZlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucGF5bWVudHNMaXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnBheW1lbnRzVGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbn1cbi5mZWNoYUZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHdpZHRoOiAzMCU7XG59XG4uYmFua0ZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHdpZHRoOiAzMCU7XG59XG5cbi5hbW91bnRGaWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogMjAlO1xufVxuXG4uZmVjaGFUaXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcblxuICB3aWR0aDogMzAlO1xufVxuXG4uYmFua1RpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gIHdpZHRoOiAzMCU7XG59XG5cbi5hbW91bnRUaXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICB3aWR0aDogMjAlO1xufVxuXG4uYW1vdW50SW5wdXQge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBoZWlnaHQ6IDMzcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiBibGFjaztcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmJhbmtJbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBoZWlnaHQ6IDMzcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgLW1vei1ib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiBibGFjaztcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmRlbGV0ZVRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMjAlO1xufVxuXG4uZGVsZXRlRmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgd2lkdGg6IDIwJTtcbn1cblxuLmRlbGV0ZUZpZWxkIHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRlbGV0ZUZpZWxkIHA6aG92ZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmFycmF5Qm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29udHJvbEJveCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/components/form-gasto/form-gasto.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/components/form-gasto/form-gasto.component.ts ***!
  \*************************************************************************/
/*! exports provided: FormGastoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGastoComponent", function() { return FormGastoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var FormGastoComponent = /** @class */ (function () {
    function FormGastoComponent(auth, dbHandler, fb, router) {
        this.auth = auth;
        this.dbHandler = dbHandler;
        this.fb = fb;
        this.router = router;
        this.showPayments = false;
        this.onData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pagos = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([]);
    }
    FormGastoComponent.prototype.ngOnInit = function () {
        this.getValues();
        this.initForm();
        var type = this.auth.getType();
        switch (type) {
            case "Admin":
                break;
            case "Vendedor":
                break;
            default:
                break;
        }
        this.showError = {
            errorAct: false
        };
    };
    FormGastoComponent.prototype.getToday = function () {
        return new Date().toISOString().split("T")[0];
    };
    FormGastoComponent.prototype.getValues = function () {
        this.almacenes = this.dbHandler.getLocal("almacenesValues");
        this.bancos = this.dbHandler.getLocal("bancosValues");
    };
    FormGastoComponent.prototype.initForm = function () {
        this.registroGasto = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            estadoPago: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            almacen: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            montoTotal: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
            observaciones: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            referencia: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            pagos: this.pagos
        });
        this.addPago();
    };
    FormGastoComponent.prototype.addPago = function () {
        var pago = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            banco: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            monto: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
        this.pagos.push(pago);
    };
    FormGastoComponent.prototype.removePago = function (event, index) {
        this.pagos.removeAt(index);
    };
    Object.defineProperty(FormGastoComponent.prototype, "fGasto", {
        get: function () {
            return this.registroGasto.controls;
        },
        enumerable: true,
        configurable: true
    });
    FormGastoComponent.prototype.endRegistro = function () {
        var _this = this;
        var dataAux = this.registroGasto.value;
        var dataValues;
        var error;
        var refreshList;
        var endpoint;
        var pagos = [];
        var pagosControls = this.pagos.controls;
        for (var _i = 0, pagosControls_1 = pagosControls; _i < pagosControls_1.length; _i++) {
            var control = pagosControls_1[_i];
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]) {
                var banco = control.controls["banco"].value;
                var monto = control.controls["monto"].value;
                var fecha = control.controls["fecha"].value;
                var pago = {
                    banco: banco,
                    monto: monto,
                    fecha: fecha
                };
                pagos.push(pago);
            }
        }
        dataValues = {
            estadoPago: dataAux.estadoPago,
            almacen: dataAux.almacen,
            montoTotal: dataAux.montoTotal,
            descripcion: dataAux.descripcion,
            observaciones: dataAux.observaciones,
            referencia: dataAux.referencia,
            pagos: pagos
        };
        endpoint = "/gastos";
        error = this.catchUserErrors();
        if (error) {
            var errorMsg = "Algunos campos son inválidos. Por favor, revise el formulario e intente de nuevo";
            this.openError(errorMsg);
        }
        else {
            this.dbHandler
                .createSomething(dataValues, endpoint)
                .subscribe(function (data) {
                // data is already a JSON object
                if (!data.status) {
                    var errorMsg = data.msg;
                    _this.openError(errorMsg);
                }
                else {
                    _this.onData.emit(data);
                }
            });
        }
    };
    FormGastoComponent.prototype.togglePayments = function () {
        var estadoPago = this.registroGasto.value.estadoPago;
        switch (estadoPago) {
            case "Pagado":
                this.showPayments = true;
                break;
            default:
                this.showPayments = false;
                break;
        }
    };
    FormGastoComponent.prototype.openError = function (msg) {
        this.errorMsg = msg;
        this.showError = {
            errorAct: true
        };
    };
    FormGastoComponent.prototype.closeError = function () {
        this.showError = {
            errorAct: false
        };
    };
    FormGastoComponent.prototype.resetForms = function () {
        this.registroGasto.reset();
    };
    FormGastoComponent.prototype.catchUserErrors = function () {
        var aux1 = this.fGasto.fecha.errors
            ? this.fGasto.fecha.errors.required
            : false;
        var error = aux1;
        return error;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], FormGastoComponent.prototype, "editMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormGastoComponent.prototype, "gasto", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormGastoComponent.prototype, "onData", void 0);
    FormGastoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-form-gasto",
            template: __webpack_require__(/*! ./form-gasto.component.html */ "./src/app/dashboard/components/form-gasto/form-gasto.component.html"),
            styles: [__webpack_require__(/*! ./form-gasto.component.scss */ "./src/app/dashboard/components/form-gasto/form-gasto.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], FormGastoComponent);
    return FormGastoComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/form-movimiento-diario/form-movimiento-diario.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/dashboard/components/form-movimiento-diario/form-movimiento-diario.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cardBox\">\n\n  <form class=\"formBox\" [formGroup]=\"registroMovimientoDiario\" (ngSubmit)=\"endRegistro()\">\n    <div class=\"formContent\">\n      <div class=\"formInput\">\n\n        <label for=\"mBacc\">Banco </label>\n        <select class=\"lInput\" formControlName=\"banco\">\n          <option *ngFor=\"let value of bancos;\" value={{value._id}}>{{value.alias}}</option>\n        </select>\n      </div>\n      <div class=\"formInput\">\n        <label for=\"mTAcc\">Cuenta Contable </label>\n        <select class=\"lInput\" formControlName=\"cuentat\">\n          <option *ngFor=\"let value of cuentasT;\" value={{value._id}}>{{value.name}}</option>\n        </select>\n      </div>\n      <div class=\"formInput\">\n        <label for=\"mDesc\">Descripcion </label>\n        <input type=\"text\" class=\"lInput\" formControlName=\"descripcion\" name=\"\">\n      </div>\n      <div class=\"formInput\">\n        <label for=\"mAmmount\">Monto </label>\n        <input i18n lang=\"es-VE\" type=\"number\" step=\"0.01\" class=\"lInput\" formControlName=\"monto\" name=\"\">\n      </div>\n      <button type=\"submit\" class=\"formButton\">\n        <p>Registrar Movimiento Diario</p>\n      </button>\n    </div>\n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/dashboard/components/form-movimiento-diario/form-movimiento-diario.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/dashboard/components/form-movimiento-diario/form-movimiento-diario.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2Zvcm0tbW92aW1pZW50by1kaWFyaW8vZm9ybS1tb3ZpbWllbnRvLWRpYXJpby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/components/form-movimiento-diario/form-movimiento-diario.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/dashboard/components/form-movimiento-diario/form-movimiento-diario.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: FormMovimientoDiarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormMovimientoDiarioComponent", function() { return FormMovimientoDiarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var FormMovimientoDiarioComponent = /** @class */ (function () {
    function FormMovimientoDiarioComponent(auth, dbHandler, fb, router) {
        this.auth = auth;
        this.dbHandler = dbHandler;
        this.fb = fb;
        this.router = router;
        this.onData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FormMovimientoDiarioComponent.prototype.ngOnInit = function () {
        this.bancos = this.dbHandler.getLocal("bancosValues");
        this.cuentasT = this.dbHandler.getLocal("cuentastValues");
        this.initForm();
        this.showError = {
            errorAct: false
        };
    };
    FormMovimientoDiarioComponent.prototype.initForm = function () {
        this.registroMovimientoDiario = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            banco: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
            cuentat: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
            descripcion: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
            monto: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("")
        });
    };
    Object.defineProperty(FormMovimientoDiarioComponent.prototype, "fMovimientoDiario", {
        get: function () {
            return this.registroMovimientoDiario.controls;
        },
        enumerable: true,
        configurable: true
    });
    FormMovimientoDiarioComponent.prototype.endRegistro = function () {
        var _this = this;
        var dataAux = this.registroMovimientoDiario.value;
        var dataValues;
        var error;
        var refreshList;
        var endpoint;
        console.log("here");
        dataValues = {
            banco: dataAux.banco,
            cuentat: dataAux.cuentat,
            descripcion: dataAux.descripcion,
            monto: dataAux.monto
        };
        endpoint = "/movimientosdiarios";
        error = this.catchUserErrors();
        if (error) {
            var errorMsg = "Algunos campos son inválidos. Por favor, revise el formulario e intente de nuevo";
            this.openError(errorMsg);
        }
        else {
            this.dbHandler
                .createSomething(dataValues, endpoint)
                .subscribe(function (data) {
                // data is already a JSON object
                if (!data.status) {
                    var errorMsg = data.msg;
                    _this.openError(errorMsg);
                }
                else {
                    _this.onData.emit(data);
                }
            });
        }
    };
    FormMovimientoDiarioComponent.prototype.openError = function (msg) {
        this.errorMsg = msg;
        this.showError = {
            errorAct: true
        };
    };
    FormMovimientoDiarioComponent.prototype.closeError = function () {
        this.showError = {
            errorAct: false
        };
    };
    FormMovimientoDiarioComponent.prototype.resetForms = function () {
        this.registroMovimientoDiario.reset();
    };
    FormMovimientoDiarioComponent.prototype.catchUserErrors = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], FormMovimientoDiarioComponent.prototype, "editMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormMovimientoDiarioComponent.prototype, "movimientoDiario", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormMovimientoDiarioComponent.prototype, "onData", void 0);
    FormMovimientoDiarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-form-movimiento-diario",
            template: __webpack_require__(/*! ./form-movimiento-diario.component.html */ "./src/app/dashboard/components/form-movimiento-diario/form-movimiento-diario.component.html"),
            styles: [__webpack_require__(/*! ./form-movimiento-diario.component.scss */ "./src/app/dashboard/components/form-movimiento-diario/form-movimiento-diario.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], FormMovimientoDiarioComponent);
    return FormMovimientoDiarioComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/form-pago/form-pago.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/components/form-pago/form-pago.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cardBox\">\n\n  <form class=\"formBox\" [formGroup]=\"registroPago\" (ngSubmit)=\"endRegistro()\">\n    <div class=\"formContent\">\n      <div class=\"formInput\">\n        <label for=\"\">Fecha*</label>\n        <input type=\"date\" class=\"lInput\" name=\"\" formControlName=\"fecha\" [max]=\"getToday()\">\n      </div>\n      <div class=\"formInput\">\n        <label for=\"mBacc\">Banco </label>\n        <select class=\"lInput\" formControlName=\"banco\">\n          <option *ngFor=\"let value of bancos;\" value={{value._id}}>{{value.alias}}</option>\n        </select>\n      </div>\n      <div class=\"formInput\">\n        <label for=\"mTAcc\">Referencia </label>\n        <select class=\"lInput\" formControlName=\"ctaPorPagar\">\n          <option *ngFor=\"let value of cuentasPorPagar;\" value={{value._id}}>{{value._id}}</option>\n        </select>\n      </div>\n      <div class=\"formInput\">\n        <label for=\"mAmmount\">Monto </label>\n        <input i18n lang=\"es-VE\" type=\"number\" step=\"0.01\" class=\"lInput\" formControlName=\"monto\" name=\"\">\n      </div>\n    </div>\n    <button type=\"submit\" class=\"buttonBox\">\n      <p>Registrar Pago</p>\n    </button>\n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/dashboard/components/form-pago/form-pago.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/components/form-pago/form-pago.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2Zvcm0tcGFnby9mb3JtLXBhZ28uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/components/form-pago/form-pago.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/components/form-pago/form-pago.component.ts ***!
  \***********************************************************************/
/*! exports provided: FormPagoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPagoComponent", function() { return FormPagoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var FormPagoComponent = /** @class */ (function () {
    function FormPagoComponent(auth, dbHandler, fb, router) {
        this.auth = auth;
        this.dbHandler = dbHandler;
        this.fb = fb;
        this.router = router;
        this.onData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FormPagoComponent.prototype.ngOnInit = function () {
        this.bancos = this.dbHandler.getLocal("bancosValues");
        this.cuentasT = this.dbHandler.getLocal("cuentastValues");
        this.cuentasPorPagar = this.dbHandler.getLocal("cuentasporpagarValues");
        this.initForm();
        this.showError = {
            errorAct: false
        };
    };
    FormPagoComponent.prototype.initForm = function () {
        this.registroPago = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            banco: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
            fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
            cuentat: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
            ctaPorPagar: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
            monto: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("")
        });
    };
    Object.defineProperty(FormPagoComponent.prototype, "fPago", {
        get: function () {
            return this.registroPago.controls;
        },
        enumerable: true,
        configurable: true
    });
    FormPagoComponent.prototype.getToday = function () {
        return new Date().toISOString().split("T")[0];
    };
    FormPagoComponent.prototype.endRegistro = function () {
        var _this = this;
        var dataAux = this.registroPago.value;
        var dataValues;
        var error;
        var refreshList;
        var endpoint;
        console.log("here");
        dataValues = {
            banco: dataAux.banco,
            fecha: dataAux.fecha,
            monto: dataAux.monto,
            ctaPorPagar: dataAux.ctaPorPagar
        };
        endpoint = "/pagos";
        error = this.catchUserErrors();
        if (error) {
            var errorMsg = "Algunos campos son inválidos. Por favor, revise el formulario e intente de nuevo";
            this.openError(errorMsg);
        }
        else {
            this.dbHandler
                .createSomething(dataValues, endpoint)
                .subscribe(function (data) {
                // data is already a JSON object
                if (!data.status) {
                    var errorMsg = data.msg;
                    _this.openError(errorMsg);
                }
                else {
                    _this.onData.emit(data);
                }
            });
        }
    };
    FormPagoComponent.prototype.openError = function (msg) {
        this.errorMsg = msg;
        this.showError = {
            errorAct: true
        };
    };
    FormPagoComponent.prototype.closeError = function () {
        this.showError = {
            errorAct: false
        };
    };
    FormPagoComponent.prototype.resetForms = function () {
        this.registroPago.reset();
    };
    FormPagoComponent.prototype.catchUserErrors = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], FormPagoComponent.prototype, "editMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormPagoComponent.prototype, "pago", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormPagoComponent.prototype, "onData", void 0);
    FormPagoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-form-pago",
            template: __webpack_require__(/*! ./form-pago.component.html */ "./src/app/dashboard/components/form-pago/form-pago.component.html"),
            styles: [__webpack_require__(/*! ./form-pago.component.scss */ "./src/app/dashboard/components/form-pago/form-pago.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], FormPagoComponent);
    return FormPagoComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/form-pedido/form-pedido.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/components/form-pedido/form-pedido.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cardBox\">\n  <form class=\"formBox\" [formGroup]=\"registroPedido\" (ngSubmit)=\"endRegistro()\">\n    <div class=\"formContent\">\n      <div class=\"formInput\">\n        <label for=\"\">Fecha*</label>\n        <input type=\"date\" class=\"lInput\" name=\"\" formControlName=\"fecha\" [max]=\"getToday()\">\n      </div>\n      <div class=\"formInput\">\n        <label for=\"\">Cliente*</label>\n        <select class=\"lInput\" name=\"\" formControlName=\"cliente\">\n          <option *ngFor=\"let value of clientes\" [value]=\"value._id\">{{value.name}}</option>\n        </select>\n        \n      </div>\n      <div class=\"errorTag\"\n          *ngIf=\"fPedido.cliente.errors?.required && (fPedido.cliente.touched || fPedido.cliente.dirty)\">Por favor\n          seleccione el cliente</div>\n      <div class=\"formInput\">\n        <label for=\"\">Vendedor*</label>\n        <select class=\"lInput\" name=\"\" formControlName=\"vendedor\">\n          <option *ngFor=\"let value of vendedores\" [value]=\"value._id\">{{value.name}}</option>\n        </select>\n        \n      </div>\n      <div class=\"errorTag\"\n          *ngIf=\"fPedido.vendedor.errors?.required && (fPedido.vendedor.touched || fPedido.vendedor.dirty)\">Por favor\n          seleccione el Vendedor</div>\n      <div class=\"formInput\">\n        <label for=\"\">Observaciones</label>\n        <textarea class=\"\" rows=\"6\" type=\"text\" formControlName=\"observaciones\" name=\"\"></textarea>\n      </div>\n      <div class=\"formInput\">\n        <label for=\"\">Condición de venta*</label>\n        <select class=\"lInput\" name=\"\" formControlName=\"condicionVenta\">\n          <option value=\"Contado\">Contado</option>\n          <option value=\"Crédito\">Crédito</option>\n        </select>\n        \n      <!--           <div class=\"formInput\">\n            <label for=\"\">Estado*</label>\n            <select class=\"lInput\" name=\"\" formControlName=\"estado\">\n                <option value=\"Bloqueada\">Bloqueada</option>\n                <option value=\"Procesada\">Procesada</option>\n                <option value=\"Rechazada\">Rechazada</option>\n            </select>          \n            <div class=\"errorTag\" *ngIf=\"fPedido.estado.errors?.required && (fPedido.estado.touched || fPedido.estado.dirty)\">Por favor seleccione el estado</div>\n          </div>\n -->\n    </div>\n    <div class=\"errorTag\"\n          *ngIf=\"fPedido.condicionVenta.errors?.required && (fPedido.condicionVenta.touched || fPedido.condicionVenta.dirty)\">\n          Por favor seleccione la condición de venta</div>\n      </div>\n\n\n\n    <div class=\"productsBox\">\n      <div class=\"productsFunctions\">\n        <p class=\"productFunction\" (click)=\"addProducto()\">Agregar productos</p>\n      </div>\n      <div class=\"productsList\">\n        <div class=\"productsTitle\">\n          <p class=\"productTitle\">Producto</p>\n          <p class=\"qtyTitle\">Cantidad</p>\n          <p class=\"deleteTitle\">Eliminar</p>\n        </div>\n        <div class=\"arrayBox\" *ngFor=\"let productoPedido of productosPedidos.controls; let i = index;\">\n          <ng-container class=\"controlBox\" [formGroup]=\"productoPedido\">\n            <div class=\"productField\">\n              <select class=\"productInput\" name=\"\" formControlName=\"producto\">\n                <option *ngFor=\"let value of productos\" [value]=\"value._id\">{{value.name}}</option>\n              </select>\n            </div>\n            <div class=\"qtyField\">\n              <input class=\"qtyInput\" type=\"number\" min=\"1\" formControlName=\"qty\" name=\"qty\" />\n            </div>\n\n            <div class=\"deleteField\">\n              <p (click)=\"removeProduct($event, i)\">X</p>\n            </div>\n          </ng-container>\n\n        </div>\n      </div>\n    </div>\n\n    <button type=\"submit\" class=\"buttonBox\">\n      <p>Registrar pedido</p>\n    </button>\n  </form>\n</div>\n\n<app-error class=\"errorBox\" [msg]='errorMsg' [ngClass]=\"showError\" (closeError)=\"closeError()\"></app-error>"

/***/ }),

/***/ "./src/app/dashboard/components/form-pedido/form-pedido.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/components/form-pedido/form-pedido.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".productsBox {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-top: 25px; }\n\n.productsFunctions {\n  width: 100%;\n  margin-bottom: 16px; }\n\n.productFunction {\n  margin: 0;\n  font-size: 16px;\n  text-align: center;\n  width: 100%;\n  cursor: pointer; }\n\n.productFunction:hover {\n  font-weight: bold; }\n\n.productsList {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  flex-wrap: wrap; }\n\n.productsTitle {\n  display: flex;\n  flex-direction: row;\n  width: 100%; }\n\n.productField {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: nowrap;\n  margin-bottom: 10px;\n  align-self: center;\n  width: 50%; }\n\n.qtyField {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: nowrap;\n  margin-bottom: 10px;\n  align-self: center;\n  width: 25%; }\n\n.deleteField {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: nowrap;\n  margin-bottom: 10px;\n  align-self: center;\n  width: 25%; }\n\n.deleteField p {\n  font-size: 14px;\n  width: 100%;\n  text-align: center;\n  cursor: pointer; }\n\n.deleteField p:hover {\n  font-weight: bold; }\n\n.productTitle {\n  font-size: 14px;\n  text-align: center;\n  font-weight: bold;\n  width: 50%; }\n\n.qtyTitle {\n  font-size: 14px;\n  font-weight: bold;\n  text-align: center;\n  width: 25%; }\n\n.deleteTitle {\n  font-size: 14px;\n  font-weight: bold;\n  text-align: center;\n  width: 25%; }\n\n.qtyInput {\n  width: 50%;\n  margin-top: 5px;\n  font-size: 16px;\n  padding-left: 16px;\n  height: 33px;\n  border: none;\n  background-image: none;\n  background-color: white;\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  border-bottom-style: solid;\n  border-bottom-width: 2px;\n  border-bottom-color: black;\n  box-shadow: none; }\n\n.productInput {\n  width: 100%;\n  margin-top: 5px;\n  font-size: 16px;\n  padding-left: 16px;\n  height: 33px;\n  border: none;\n  background-image: none;\n  background-color: white;\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  border-bottom-style: solid;\n  border-bottom-width: 2px;\n  border-bottom-color: black;\n  box-shadow: none; }\n\n.arrayBox {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center; }\n\n.controlBox {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZ2Vsb2Fjci9Qcm95ZWN0b3MvSW5WZW4vaW52ZW5BcHAvaW52ZW5hcHAvc3JjL2FwcC9kYXNoYm9hcmQvY29tcG9uZW50cy9mb3JtLXBlZGlkby9mb3JtLXBlZGlkby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBR1o7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQUdaO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUVqQixVQUFVLEVBQUE7O0FBR1o7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUVsQixVQUFVLEVBQUE7O0FBR1o7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBRVo7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQix3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBOztBQUd6QjtFQUNFLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2Zvcm0tcGVkaWRvL2Zvcm0tcGVkaWRvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3RzQm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5wcm9kdWN0c0Z1bmN0aW9ucyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4ucHJvZHVjdEZ1bmN0aW9uIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2R1Y3RGdW5jdGlvbjpob3ZlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucHJvZHVjdHNMaXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnByb2R1Y3RzVGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2R1Y3RGaWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogNTAlO1xufVxuXG4ucXR5RmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgd2lkdGg6IDI1JTtcbn1cblxuLmRlbGV0ZUZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHdpZHRoOiAyNSU7XG59XG5cbi5kZWxldGVGaWVsZCBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kZWxldGVGaWVsZCBwOmhvdmVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wcm9kdWN0VGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgd2lkdGg6IDUwJTtcbn1cblxuLnF0eVRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHdpZHRoOiAyNSU7XG59XG5cbi5kZWxldGVUaXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDI1JTtcbn1cbi5xdHlJbnB1dCB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIGhlaWdodDogMzNweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IGJsYWNrO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ucHJvZHVjdElucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIGhlaWdodDogMzNweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IGJsYWNrO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uYXJyYXlCb3gge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250cm9sQm94IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/components/form-pedido/form-pedido.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/components/form-pedido/form-pedido.component.ts ***!
  \***************************************************************************/
/*! exports provided: FormPedidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPedidoComponent", function() { return FormPedidoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var FormPedidoComponent = /** @class */ (function () {
    function FormPedidoComponent(auth, dbHandler, fb, router) {
        this.auth = auth;
        this.dbHandler = dbHandler;
        this.fb = fb;
        this.router = router;
        this.onData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.productosPedidos = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([]);
    }
    FormPedidoComponent.prototype.ngOnInit = function () {
        this.getValues();
        this.initForm();
        var type = this.auth.getType();
        this.registroPedido.controls["estado"].setValue("Bloqueada");
        this.registroPedido.controls["estado"].disable();
        switch (type) {
            case "Vendedor":
                this.vendedor = this.auth.getId();
                this.registroPedido.controls["vendedor"].setValue(this.vendedor);
                this.registroPedido.controls["vendedor"].disable();
                break;
            case "Admin":
                break;
            default:
                break;
        }
        this.showError = {
            errorAct: false
        };
    };
    FormPedidoComponent.prototype.getValues = function () {
        this.clientes = this.dbHandler.getLocal("clientesValues");
        this.productos = this.dbHandler.getLocal("productosValues");
        this.precios = this.dbHandler.getLocal("preciosValues");
        this.vendedores = [];
        var users = this.dbHandler.getLocal("usersValues");
        for (var i = 0; i < users.length; i++) {
            if (users[i]["type"] === "Vendedor") {
                this.vendedores.push(users[i]);
            }
        }
    };
    FormPedidoComponent.prototype.initForm = function () {
        this.registroPedido = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            cliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            vendedor: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            estado: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            observaciones: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            condicionVenta: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            productos: this.productosPedidos
        });
        if (this.editMode) {
        }
        this.addProducto();
    };
    FormPedidoComponent.prototype.addProducto = function () {
        var productoPedido = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            producto: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            qty: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
        this.productosPedidos.push(productoPedido);
    };
    FormPedidoComponent.prototype.removeProduct = function (event, index) {
        this.productosPedidos.removeAt(index);
    };
    Object.defineProperty(FormPedidoComponent.prototype, "fPedido", {
        get: function () {
            return this.registroPedido.controls;
        },
        enumerable: true,
        configurable: true
    });
    FormPedidoComponent.prototype.getToday = function () {
        return new Date().toISOString().split("T")[0];
    };
    FormPedidoComponent.prototype.endRegistro = function () {
        var _this = this;
        var dataAux = this.registroPedido.value;
        var dataValues;
        var error;
        var refreshList;
        var endpoint;
        var productosPedidos = [];
        var montoTotal = 0;
        var productosPedidosControls = this.productosPedidos.controls;
        var _loop_1 = function (control) {
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]) {
                var precio_1;
                var producto_1 = control.controls["producto"].value;
                var qty = control.controls["qty"].value;
                //Buscar precio del producto
                this_1.precios.forEach(function (prec) {
                    if (prec.producto._id == producto_1) {
                        precio_1 = prec.valor;
                        return;
                    }
                });
                var montoProductoAux = precio_1 * qty;
                montoTotal += montoProductoAux;
                var montoProducto = montoProductoAux.toFixed(2);
                var productoPedido = {
                    producto: producto_1,
                    qty: qty,
                    montoProducto: montoProducto,
                    precio: precio_1
                };
                productosPedidos.push(productoPedido);
            }
        };
        var this_1 = this;
        for (var _i = 0, productosPedidosControls_1 = productosPedidosControls; _i < productosPedidosControls_1.length; _i++) {
            var control = productosPedidosControls_1[_i];
            _loop_1(control);
        }
        var montoTotalAux = montoTotal.toFixed(2);
        dataValues = {
            cliente: dataAux.cliente,
            vendedor: dataAux.vendedor,
            fecha: dataAux.fecha,
            estado: dataAux.estado,
            condicionVenta: dataAux.condicionVenta,
            observaciones: dataAux.observaciones,
            montoTotal: montoTotalAux,
            productosPedidos: productosPedidos
        };
        endpoint = "/pedidos";
        error = this.catchUserErrors();
        if (error) {
            var errorMsg = "Algunos campos son inválidos. Por favor, revise el formulario e intente de nuevo";
            this.openError(errorMsg);
        }
        else {
            this.dbHandler
                .createSomething(dataValues, endpoint)
                .subscribe(function (data) {
                // data is already a JSON object
                if (!data.status) {
                    var errorMsg = data.msg;
                    _this.openError(errorMsg);
                }
                else {
                    _this.onData.emit(data);
                }
            });
        }
    };
    FormPedidoComponent.prototype.openError = function (msg) {
        this.errorMsg = msg;
        this.showError = {
            errorAct: true
        };
    };
    FormPedidoComponent.prototype.closeError = function () {
        this.showError = {
            errorAct: false
        };
    };
    FormPedidoComponent.prototype.resetForms = function () {
        this.registroPedido.reset();
    };
    FormPedidoComponent.prototype.catchUserErrors = function () {
        var aux1 = this.fPedido.fecha.errors
            ? this.fPedido.fecha.errors.required
            : false;
        var error = aux1;
        return error;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], FormPedidoComponent.prototype, "editMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormPedidoComponent.prototype, "pedido", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormPedidoComponent.prototype, "onData", void 0);
    FormPedidoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-form-pedido",
            template: __webpack_require__(/*! ./form-pedido.component.html */ "./src/app/dashboard/components/form-pedido/form-pedido.component.html"),
            styles: [__webpack_require__(/*! ./form-pedido.component.scss */ "./src/app/dashboard/components/form-pedido/form-pedido.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], FormPedidoComponent);
    return FormPedidoComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/form-producto/form-producto.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/components/form-producto/form-producto.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cardBox\">\n  <form class=\"formBox\" [formGroup]=\"registroProducto\" (ngSubmit)=\"endRegistro()\">\n    <div class=\"formContent\">\n      <div class=\"formInput\">\n        <label for=\"\">Código*</label>\n        <input class=\"lInput\" type=\"text\" formControlName=\"code\" name=\"code\" />\n      </div>\n      <div class=\"errorTag\" *ngIf=\"fProducto.code.errors?.required && (fProducto.code.touched || fProducto.code.dirty)\">\n        Por favor ingrese el código del producto</div>\n      <div class=\"formInput\">\n        <label for=\"\">Nombre*</label>\n        <input class=\"lInput\" type=\"text\" formControlName=\"name\" name=\"name\" />\n      </div>\n      <div class=\"errorTag\" *ngIf=\"fProducto.name.errors?.required && (fProducto.name.touched || fProducto.name.dirty)\">\n        Por favor ingrese el nombre del producto</div>\n      <!--       <div class=\"formInput\">\n          <label for=\"\">Proveedor*</label>\n        <select class=\"lInput\" name=\"\" formControlName=\"proveedor\">\n                <option *ngFor=\"let value of proveedores.values\" value=\"value._id\">{{value.name}}</option>\n            </select>\n      </div>\n          <div class=\"errorTag\" *ngIf=\"fProducto.proveedor.errors?.required && (fProducto.proveedor.touched || fProducto.proveedor.dirty)\">Por favor ingrese el proveedor del producto</div>\n -->\n      <div class=\"formInput\">\n        <label for=\"\">Marca*</label>\n        <input class=\"lInput\" type=\"text\" formControlName=\"brand\" name=\"brand\" />\n      </div>\n      <div class=\"errorTag\"\n        *ngIf=\"fProducto.brand.errors?.required && (fProducto.brand.touched || fProducto.brand.dirty)\">Por favor ingrese\n        la marca del producto</div>\n\n        <div class=\"formInput\">\n          <label for=\"\">Descripción</label>\n          <textarea class=\"lInput\" rows=\"6\" type=\"text\" formControlName=\"description\" name=\"\"></textarea>\n        </div>\n      <!--       <div class=\"formInput\">\n          <label for=\"\">Almacén*</label>\n            <select class=\"lInput\" name=\"\" formControlName=\"almacen\">\n                <option *ngFor=\"let value of almacenes.values\" value=\"value._id\">{{value.code}}</option>\n            </select>\n            </div>\n          <div class=\"errorTag\" *ngIf=\"fProducto.almacen.errors?.required && (fProducto.almacen.touched || fProducto.almacen.dirty)\">Por favor ingrese la ubicación del producto</div>\n -->\n    </div>\n    \n\n    <button type=\"submit\" class=\"buttonBox\">\n      <p>Registrar producto</p>\n    </button>\n  </form>\n</div>\n<app-error class=\"errorBox\" [msg]='errorMsg' [ngClass]=\"showError\" (closeError)=\"closeError()\"></app-error>"

/***/ }),

/***/ "./src/app/dashboard/components/form-producto/form-producto.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/components/form-producto/form-producto.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2Zvcm0tcHJvZHVjdG8vZm9ybS1wcm9kdWN0by5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/components/form-producto/form-producto.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/components/form-producto/form-producto.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FormProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormProductoComponent", function() { return FormProductoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var FormProductoComponent = /** @class */ (function () {
    function FormProductoComponent(auth, dbHandler, fb, router) {
        this.auth = auth;
        this.dbHandler = dbHandler;
        this.fb = fb;
        this.router = router;
        this.onData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FormProductoComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.showError = {
            errorAct: false
        };
    };
    FormProductoComponent.prototype.initForm = function () {
        this.registroProducto = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            brand: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
    };
    Object.defineProperty(FormProductoComponent.prototype, "fProducto", {
        get: function () {
            return this.registroProducto.controls;
        },
        enumerable: true,
        configurable: true
    });
    FormProductoComponent.prototype.endRegistro = function () {
        var _this = this;
        var dataAux = this.registroProducto.value;
        var dataValues;
        var error;
        var refreshList;
        var endpoint;
        dataValues = {
            price: dataAux.price,
            brand: dataAux.brand,
            description: dataAux.description,
            name: dataAux.name,
            code: dataAux.code
        };
        endpoint = "/productos";
        error = this.catchUserErrors();
        if (error) {
            var errorMsg = "Algunos campos son inválidos. Por favor, revise el formulario e intente de nuevo";
            this.openError(errorMsg);
        }
        else {
            this.dbHandler
                .createSomething(dataValues, endpoint)
                .subscribe(function (data) {
                // data is already a JSON object
                if (!data.status) {
                    var errorMsg = data.msg;
                    _this.openError(errorMsg);
                }
                else {
                    _this.onData.emit(data);
                }
            });
        }
    };
    FormProductoComponent.prototype.openError = function (msg) {
        this.errorMsg = msg;
        this.showError = {
            errorAct: true
        };
    };
    FormProductoComponent.prototype.closeError = function () {
        this.showError = {
            errorAct: false
        };
    };
    FormProductoComponent.prototype.resetForms = function () {
        this.registroProducto.reset();
    };
    FormProductoComponent.prototype.catchUserErrors = function () {
        /*     let aux1 = this.fProducto.price.errors ? this.fProducto.price.errors.required : false;
         */ /* let aux2 = this.fProducto.almacen.errors ? this.fProducto.almacen.errors.required : false;
        */ var aux3 = this.fProducto.brand.errors
            ? this.fProducto.brand.errors.required
            : false;
        var aux4 = this.fProducto.name.errors
            ? this.fProducto.name.errors.required
            : false;
        var aux5 = this.fProducto.code.errors
            ? this.fProducto.code.errors.required
            : false;
        /* let aux6 = this.fProducto.proveedor.errors ? this.fProducto.provvedor.errors.required : false;
         */ var error = aux3 || aux4 || aux5;
        return error;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], FormProductoComponent.prototype, "editMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormProductoComponent.prototype, "producto", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormProductoComponent.prototype, "onData", void 0);
    FormProductoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-form-producto",
            template: __webpack_require__(/*! ./form-producto.component.html */ "./src/app/dashboard/components/form-producto/form-producto.component.html"),
            styles: [__webpack_require__(/*! ./form-producto.component.scss */ "./src/app/dashboard/components/form-producto/form-producto.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], FormProductoComponent);
    return FormProductoComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/form-proforma/form-proforma.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/components/form-proforma/form-proforma.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cardBox\">\n  <form class=\"formBox\" *ngIf=\"pedidos\" [formGroup]=\"registroProforma\" (ngSubmit)=\"endRegistro()\">\n    <div class=\"formContent\">\n      <div class=\"formInput\">\n        <label for=\"\">Fecha*</label>\n        <input type=\"date\" class=\"lInput\" name=\"\" formControlName=\"fecha\" [max]=\"getToday()\">\n      </div>\n      <div class=\"formInput\">\n        <label for=\"\">Solicitud asociada*</label>\n        <select class=\"lInput\" name=\"\" formControlName=\"pedido\" (change)=\"togglePedido()\">\n          <option *ngFor=\"let value of pedidos; let i=index\" [value]=\"i\">{{value._id}}</option>\n        </select>\n        <div class=\"errorTag\"\n          *ngIf=\"fProforma.pedido.errors?.required && (fProforma.pedido.touched || fProforma.pedido.dirty)\">Por favor\n          seleccione la solicitud asociada</div>\n      </div>\n      <div class=\"formInput\">\n        <label for=\"\">Referencia u Orden de compra*</label>\n        <input type=\"text\" class=\"lInput\" name=\"\" formControlName=\"referencia\">\n        <div class=\"errorTag\"\n          *ngIf=\"fProforma.referencia.errors?.required && (fProforma.referencia.touched || fProforma.referencia.dirty)\">\n          Por favor ingrese la referencia</div>\n      </div>\n      <div class=\"formInput\">\n        <label for=\"\">Recibo de cobro</label>\n        <input type=\"text\" class=\"lInput\" name=\"\" formControlName=\"recibo\">\n        <div class=\"errorTag\"\n          *ngIf=\"fProforma.recibo.errors?.required && (fProforma.recibo.touched || fProforma.recibo.dirty)\">Por\n          favor ingrese el recibo</div>\n      </div>\n      <!--       <div class=\"formInput\">\n        <label for=\"\">Vendedor*</label>\n        <select class=\"lInput\" name=\"\" formControlName=\"vendedor\">\n          <option *ngFor=\"let value of vendedores\" [value]=\"value._id\">{{value.name}}</option>\n        </select>\n        <div class=\"errorTag\"\n          *ngIf=\"fProforma.vendedor.errors?.required && (fProforma.vendedor.touched || fProforma.vendedor.dirty)\">Por favor\n          seleccione el Vendedor</div>\n      </div>\n -->\n      <div class=\"formInput\">\n        <label for=\"\">Observaciones</label>\n        <textarea class=\"\" rows=\"6\" type=\"text\" formControlName=\"observaciones\" name=\"\"></textarea>\n      </div>\n      <!-- \n      <div class=\"formInput\">\n        <label for=\"\">Condición de venta*</label>\n        <select class=\"lInput\" name=\"\" formControlName=\"condicionVenta\">\n          <option value=\"Contado\">Contado</option>\n          <option value=\"Crédito\">Crédito</option>\n        </select>\n        <div class=\"errorTag\"\n          *ngIf=\"fProforma.condicionVenta.errors?.required && (fProforma.condicionVenta.touched || fProforma.condicionVenta.dirty)\">\n          Por favor seleccione la condición de venta</div>\n      </div> -->\n      <!--           <div class=\"formInput\">\n            <label for=\"\">Estado*</label>\n            <select class=\"lInput\" name=\"\" formControlName=\"estado\">\n                <option value=\"Bloqueada\">Bloqueada</option>\n                <option value=\"Procesada\">Procesada</option>\n                <option value=\"Rechazada\">Rechazada</option>\n            </select>          \n            <div class=\"errorTag\" *ngIf=\"fProforma.estado.errors?.required && (fProforma.estado.touched || fProforma.estado.dirty)\">Por favor seleccione el estado</div>\n          </div>\n -->\n      <div class=\"formInput\">\n        <label for=\"\">Estado del cobro*</label>\n        <select (change)=\"toggleCobros()\" class=\"lInput\" name=\"\" formControlName=\"estadoCobro\">\n          <option value=\"Cobrado\">Cobrado</option>\n          <option value=\"Por cobrar\">Por cobrar</option>\n        </select>\n\n      </div>\n      <div class=\"errorTag\"\n        *ngIf=\"fProforma.estadoCobro.errors?.required && (fProforma.estadoCobro.touched || fProforma.estadoCobro.dirty)\">\n        Por favor\n        seleccione el estado del cobro</div>\n\n\n    </div>\n\n    <div class=\"cobrosBox\" *ngIf=\"showCobros\">\n      <div class=\"cobrosFunctions\">\n        <p class=\"cobroFunction\" (click)=\"addCobro()\">Agregar cobro</p>\n      </div>\n      <div class=\"cobrosList\">\n        <div class=\"cobrosTitle\">\n          <p class=\"fechaTitle\">Fecha</p>\n          <p class=\"bankTitle\">Banco</p>\n          <p class=\"amountTitle\">Monto</p>\n          <p class=\"deleteTitle\">Eliminar</p>\n        </div>\n        <div class=\"arrayBox\" *ngFor=\"let cobro of cobros.controls; let i = index;\">\n          <ng-container class=\"controlBox\" [formGroup]=\"cobro\">\n            <div class=\"fechaField\">\n              <input type=\"date\" class=\"fechaInput\" name=\"\" formControlName=\"fecha\" [max]=\"getToday()\">\n            </div>\n            <div class=\"bankField\">\n              <select class=\"bankInput\" name=\"\" formControlName=\"banco\">\n                <option *ngFor=\"let value of bancos\" [value]=\"value._id\">{{value.alias}}</option>\n              </select>\n            </div>\n            <div class=\"amountField\">\n              <input class=\"amountInput\" type=\"number\" step=\"0.01\" formControlName=\"monto\" />\n            </div>\n\n            <div class=\"deleteField\">\n              <p (click)=\"removeCobro($event, i)\">X</p>\n            </div>\n          </ng-container>\n\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"productsBox\" *ngIf=\"pedidoSelected\">\n      <div class=\"productsList\">\n        <div class=\"productsTitle\">\n          <p class=\"productTitle\">Producto</p>\n          <p class=\"qtyTitle\">Cantidades solicitadas</p>\n          <p class=\"qtyTitle\">Cantidades Autorizadas</p>\n          <p class=\"deleteTitle\">Precio Cotizado</p>\n          <p class=\"deleteTitle\">Precio Autorizado</p>\n        </div>\n        <div class=\"arrayBox\" *ngFor=\"let productoAutorizado of productosAutorizados.controls; let i = index;\">\n          <ng-container class=\"controlBox\" [formGroup]=\"productoAutorizado\">\n            <div class=\"productField\">\n              <p>{{pedido.productosPedidos[i].producto.code}}</p>\n            </div>\n            <div class=\"qtyField\">\n              <p>{{pedido.productosPedidos[i].qty}}</p>\n\n            </div>\n            <div class=\"qtyField\">\n              <input class=\"qtyInput\" type=\"number\" min=\"1\" [max]=\"pedido.productosPedidos[i].qty\" formControlName=\"qty\"\n                name=\"qty\" />\n            </div>\n            <div class=\"qtyField\">\n              <p>{{pedido.productosPedidos[i].precio}}</p>\n            </div>\n            <div class=\"qtyField\">\n\n              <select class=\"qtyInput\" name=\"\" formControlName=\"price\">\n                <option *ngFor=\"let value of preciosAutorizados[i];\" [value]=\"value\">{{value}}</option>\n              </select>\n              <!--               <input class=\"qtyInput\" type=\"number\" min=\"1\" formControlName=\"price\" name=\"price\" /> -->\n            </div>\n\n          </ng-container>\n\n        </div>\n      </div>\n    </div>\n\n    <button type=\"submit\" class=\"buttonBox\">\n      <p>Registrar Proforma</p>\n    </button>\n  </form>\n</div>\n<div class=\"cardBox\" *ngIf=\"!pedidos\">\n  No hay pedidos registrados\n</div>\n\n<app-error class=\"errorBox\" [msg]='errorMsg' [ngClass]=\"showError\" (closeError)=\"closeError()\"></app-error>"

/***/ }),

/***/ "./src/app/dashboard/components/form-proforma/form-proforma.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/components/form-proforma/form-proforma.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".productsBox {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-top: 25px; }\n\n.productsFunctions {\n  width: 100%;\n  margin-bottom: 16px; }\n\n.productFunction {\n  margin: 0;\n  font-size: 16px;\n  text-align: center;\n  width: 100%;\n  cursor: pointer; }\n\n.productFunction:hover {\n  font-weight: bold; }\n\n.productsList {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  flex-wrap: wrap; }\n\n.productsTitle {\n  display: flex;\n  flex-direction: row;\n  width: 100%; }\n\n.productField {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: nowrap;\n  margin-bottom: 10px;\n  align-self: center;\n  width: 40%; }\n\n.qtyField {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: nowrap;\n  margin-bottom: 10px;\n  align-self: center;\n  width: 25%; }\n\n.deleteField {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: nowrap;\n  margin-bottom: 10px;\n  align-self: center;\n  width: 25%; }\n\n.deleteField p {\n  font-size: 14px;\n  width: 100%;\n  text-align: center;\n  cursor: pointer; }\n\n.deleteField p:hover {\n  font-weight: bold; }\n\n.productTitle {\n  font-size: 14px;\n  text-align: center;\n  font-weight: bold;\n  width: 40%; }\n\n.qtyTitle {\n  font-size: 14px;\n  font-weight: bold;\n  text-align: center;\n  width: 25%; }\n\n.deleteTitle {\n  font-size: 14px;\n  font-weight: bold;\n  text-align: center;\n  width: 25%; }\n\n.qtyInput {\n  width: 100%;\n  margin-top: 5px;\n  font-size: 16px;\n  padding-left: 16px;\n  height: 33px;\n  text-align: center;\n  border: none;\n  background-image: none;\n  background-color: white;\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  border-bottom-style: solid;\n  border-bottom-width: 2px;\n  border-bottom-color: black;\n  box-shadow: none; }\n\n.productInput {\n  width: 100%;\n  margin-top: 5px;\n  font-size: 16px;\n  padding-left: 16px;\n  height: 33px;\n  border: none;\n  background-image: none;\n  background-color: white;\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  border-bottom-style: solid;\n  border-bottom-width: 2px;\n  border-bottom-color: black;\n  box-shadow: none; }\n\n.arrayBox {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center; }\n\n.formInput textarea {\n  width: 100%;\n  border-width: 2px;\n  padding-left: 16px;\n  border-color: black;\n  background-color: white; }\n\n.controlBox {\n  width: 100%; }\n\n.cobrosBox {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-top: 25px; }\n\n.cobrosFunctions {\n  width: 100%;\n  margin-bottom: 16px; }\n\n.cobroFunction {\n  margin: 0;\n  font-size: 16px;\n  text-align: center;\n  width: 100%;\n  cursor: pointer; }\n\n.cobroFunction:hover {\n  font-weight: bold; }\n\n.cobrosList {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  flex-wrap: wrap; }\n\n.cobrosTitle {\n  display: flex;\n  flex-direction: row;\n  width: 100%; }\n\n.fechaField {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: nowrap;\n  margin-bottom: 10px;\n  align-self: center;\n  width: 30%; }\n\n.bankField {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: nowrap;\n  margin-bottom: 10px;\n  align-self: center;\n  width: 30%; }\n\n.amountField {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: nowrap;\n  margin-bottom: 10px;\n  align-self: center;\n  width: 20%; }\n\n.fechaTitle {\n  font-size: 14px;\n  text-align: center;\n  font-weight: bold;\n  width: 30%; }\n\n.bankTitle {\n  font-size: 14px;\n  text-align: center;\n  font-weight: bold;\n  width: 30%; }\n\n.amountTitle {\n  font-size: 14px;\n  font-weight: bold;\n  text-align: center;\n  width: 20%; }\n\n.amountInput {\n  width: 50%;\n  margin-top: 5px;\n  font-size: 16px;\n  padding-left: 16px;\n  height: 33px;\n  border: none;\n  background-image: none;\n  background-color: white;\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  border-bottom-style: solid;\n  border-bottom-width: 2px;\n  border-bottom-color: black;\n  box-shadow: none; }\n\n.bankInput {\n  width: 100%;\n  margin-top: 5px;\n  font-size: 16px;\n  padding-left: 16px;\n  height: 33px;\n  border: none;\n  background-image: none;\n  background-color: white;\n  -webkit-box-shadow: none;\n  -moz-box-shadow: none;\n  border-bottom-style: solid;\n  border-bottom-width: 2px;\n  border-bottom-color: black;\n  box-shadow: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZ2Vsb2Fjci9Qcm95ZWN0b3MvSW5WZW4vaW52ZW5BcHAvaW52ZW5hcHAvc3JjL2FwcC9kYXNoYm9hcmQvY29tcG9uZW50cy9mb3JtLXByb2Zvcm1hL2Zvcm0tcHJvZm9ybWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsU0FBUztFQUNULGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXLEVBQUE7O0FBR2I7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQUdaO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBR1o7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFFakIsVUFBVSxFQUFBOztBQUdaO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFFbEIsVUFBVSxFQUFBOztBQUdaO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQUVaO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBOztBQUd6QjtFQUNFLFdBQVcsRUFBQTs7QUFJYjtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVcsRUFBQTs7QUFFYjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBRVo7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQUdaO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBRWpCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBRWpCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBRWxCLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIsd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvY29tcG9uZW50cy9mb3JtLXByb2Zvcm1hL2Zvcm0tcHJvZm9ybWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdHNCb3gge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLnByb2R1Y3RzRnVuY3Rpb25zIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5wcm9kdWN0RnVuY3Rpb24ge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvZHVjdEZ1bmN0aW9uOmhvdmVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wcm9kdWN0c0xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ucHJvZHVjdHNUaXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvZHVjdEZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHdpZHRoOiA0MCU7XG59XG5cbi5xdHlGaWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogMjUlO1xufVxuXG4uZGVsZXRlRmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgd2lkdGg6IDI1JTtcbn1cblxuLmRlbGV0ZUZpZWxkIHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRlbGV0ZUZpZWxkIHA6aG92ZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnByb2R1Y3RUaXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcblxuICB3aWR0aDogNDAlO1xufVxuXG4ucXR5VGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgd2lkdGg6IDI1JTtcbn1cblxuLmRlbGV0ZVRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMjUlO1xufVxuLnF0eUlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIGhlaWdodDogMzNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogYmxhY2s7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5wcm9kdWN0SW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgaGVpZ2h0OiAzM3B4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIC1tb3otYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogYmxhY2s7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5hcnJheUJveCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZvcm1JbnB1dCB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRyb2xCb3gge1xuICB3aWR0aDogMTAwJTtcbn1cblxuXG4uY29icm9zQm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5jb2Jyb3NGdW5jdGlvbnMge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmNvYnJvRnVuY3Rpb24ge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29icm9GdW5jdGlvbjpob3ZlciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29icm9zTGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jb2Jyb3NUaXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmZlY2hhRmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgd2lkdGg6IDMwJTtcbn1cbi5iYW5rRmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgd2lkdGg6IDMwJTtcbn1cblxuLmFtb3VudEZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHdpZHRoOiAyMCU7XG59XG5cbi5mZWNoYVRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gIHdpZHRoOiAzMCU7XG59XG5cbi5iYW5rVGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgd2lkdGg6IDMwJTtcbn1cblxuLmFtb3VudFRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHdpZHRoOiAyMCU7XG59XG5cbi5hbW91bnRJbnB1dCB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIGhlaWdodDogMzNweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IGJsYWNrO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uYmFua0lucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIGhlaWdodDogMzNweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IGJsYWNrO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/components/form-proforma/form-proforma.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/components/form-proforma/form-proforma.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FormProformaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormProformaComponent", function() { return FormProformaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var FormProformaComponent = /** @class */ (function () {
    function FormProformaComponent(auth, dbHandler, fb, router) {
        this.auth = auth;
        this.dbHandler = dbHandler;
        this.fb = fb;
        this.router = router;
        this.onData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pedidoSelected = false;
        this.cobros = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([]);
        this.showCobros = false;
        this.productosAutorizados = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([]);
    }
    FormProformaComponent.prototype.ngOnInit = function () {
        this.pedidos = this.dbHandler.getLocal("pedidosValues");
        this.precios = this.dbHandler.getLocal("preciosValues");
        this.bancos = this.dbHandler.getLocal("bancosValues");
        this.initForm();
        this.showError = {
            errorAct: false
        };
    };
    FormProformaComponent.prototype.initForm = function () {
        this.registroProforma = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
            pedido: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            referencia: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
            recibo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
            observaciones: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
            estadoCobro: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
            requiereFactura: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
            productosAutorizados: this.productosAutorizados
        });
        this.addCobro();
    };
    FormProformaComponent.prototype.addCobro = function () {
        var cobro = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            banco: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            monto: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
        this.cobros.push(cobro);
    };
    FormProformaComponent.prototype.removeCobro = function (event, index) {
        this.cobros.removeAt(index);
    };
    FormProformaComponent.prototype.toggleCobros = function () {
        var estadoCobro = this.registroProforma.value.estadoCobro;
        switch (estadoCobro) {
            case "Cobrado":
                this.showCobros = true;
                break;
            default:
                this.showCobros = false;
                break;
        }
    };
    FormProformaComponent.prototype.addProducto = function (productoId) {
        var productoAutorizado = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            producto: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
            qty: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](""),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("")
        });
        productoAutorizado.controls["producto"].setValue(productoId);
        this.productosAutorizados.push(productoAutorizado);
    };
    FormProformaComponent.prototype.removeProduct = function (event, index) {
        this.productosAutorizados.removeAt(index);
    };
    Object.defineProperty(FormProformaComponent.prototype, "fProforma", {
        get: function () {
            return this.registroProforma.controls;
        },
        enumerable: true,
        configurable: true
    });
    FormProformaComponent.prototype.togglePedido = function () {
        var _this = this;
        this.preciosAutorizados = [];
        this.productosAutorizados = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([]);
        var dataAux = this.registroProforma.value;
        console.log(dataAux);
        this.pedido = this.pedidos[dataAux.pedido];
        console.log(this.pedido);
        var productosPedidos = this.pedido.productosPedidos;
        productosPedidos.forEach(function (productoPedido) {
            var productoId = productoPedido.producto._id;
            var aux = [];
            _this.precios.forEach(function (precio) {
                if (precio.producto._id == productoId) {
                    aux.push(precio.valor);
                }
            });
            _this.preciosAutorizados.push(aux);
            _this.addProducto(productoId);
        });
        this.pedidoSelected = true;
    };
    FormProformaComponent.prototype.endRegistro = function () {
        var _this = this;
        var dataAux = this.registroProforma.value;
        var dataValues;
        var error;
        var refreshList;
        var endpoint;
        var productosAutorizados = [];
        var montoTotal = 0;
        var productosAutorizadosControls = this.productosAutorizados.controls;
        for (var _i = 0, productosAutorizadosControls_1 = productosAutorizadosControls; _i < productosAutorizadosControls_1.length; _i++) {
            var control = productosAutorizadosControls_1[_i];
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]) {
                var precio = control.controls["price"].value;
                var producto = control.controls["producto"].value;
                var qty = control.controls["qty"].value;
                var montoProductoAux = precio * qty;
                console.log(montoProductoAux);
                montoTotal += montoProductoAux;
                var montoProducto = montoProductoAux.toFixed(2);
                var productoAutorizado = {
                    producto: producto,
                    qty: qty,
                    montoProducto: montoProducto,
                    precio: precio
                };
                productosAutorizados.push(productoAutorizado);
            }
        }
        var cobros = [];
        var cobrosControls = this.cobros.controls;
        for (var _a = 0, cobrosControls_1 = cobrosControls; _a < cobrosControls_1.length; _a++) {
            var control = cobrosControls_1[_a];
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]) {
                var banco = control.controls["banco"].value;
                var monto = control.controls["monto"].value;
                var fecha = control.controls["fecha"].value;
                var cobro = {
                    banco: banco,
                    monto: monto,
                    fecha: fecha
                };
                cobros.push(cobro);
            }
        }
        var montoTotalAux = montoTotal.toFixed(2);
        dataValues = {
            pedido: this.pedido._id,
            fecha: dataAux.fecha,
            referencia: dataAux.referencia,
            reciboDeCobro: dataAux.recibo,
            observaciones: dataAux.observaciones,
            requiereFactura: dataAux.requiereFactura,
            productosAutorizados: productosAutorizados,
            montoTotal: montoTotalAux,
            cliente: this.pedido.cliente._id,
            cobros: cobros
        };
        endpoint = "/proformas";
        error = this.catchUserErrors();
        if (error) {
            var errorMsg = "Algunos campos son inválidos. Por favor, revise el formulario e intente de nuevo";
            this.openError(errorMsg);
        }
        else {
            this.dbHandler
                .createSomething(dataValues, endpoint)
                .subscribe(function (data) {
                // data is already a JSON object
                if (!data.status) {
                    var errorMsg = data.msg;
                    _this.openError(errorMsg);
                }
                else {
                    _this.onData.emit(data);
                }
            });
        }
    };
    FormProformaComponent.prototype.openError = function (msg) {
        this.errorMsg = msg;
        this.showError = {
            errorAct: true
        };
    };
    FormProformaComponent.prototype.closeError = function () {
        this.showError = {
            errorAct: false
        };
    };
    FormProformaComponent.prototype.resetForms = function () {
        this.registroProforma.reset();
    };
    FormProformaComponent.prototype.catchUserErrors = function () {
        var aux1 = this.fProforma.pedido.errors
            ? this.fProforma.pedido.errors.required
            : false;
        var error = aux1;
        return error;
    };
    FormProformaComponent.prototype.getToday = function () {
        return new Date().toISOString().split("T")[0];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], FormProformaComponent.prototype, "editMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormProformaComponent.prototype, "proforma", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormProformaComponent.prototype, "onData", void 0);
    FormProformaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-form-proforma",
            template: __webpack_require__(/*! ./form-proforma.component.html */ "./src/app/dashboard/components/form-proforma/form-proforma.component.html"),
            styles: [__webpack_require__(/*! ./form-proforma.component.scss */ "./src/app/dashboard/components/form-proforma/form-proforma.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], FormProformaComponent);
    return FormProformaComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/form-proveedores/form-proveedores.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/dashboard/components/form-proveedores/form-proveedores.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cardBox\">\n    <form class=\"formBox\" [formGroup]=\"registroProve\" (ngSubmit)=\"endRegistro()\">\n        <div class=\"formContent\">\n            <div class=\"formInput\">\n                <label for=\"\">Nombre*</label>\n                <input class=\"lInput\" type=\"text\" formControlName=\"name\" name=\"name\" />\n            </div>\n            <div class=\"errorTag\"\n                *ngIf=\"fProveedor.name.errors?.required && (fProveedor.name.touched || fProveedor.name.dirty)\">Por favor\n                ingrese su nombre</div>\n            <div class=\"formInput\">\n                <label for=\"\">Correo Electrónico*</label>\n                <input class=\"lInput\" type=\"text\" formControlName=\"mail\" name=\"mail\" />\n            </div>\n            <div class=\"errorTag\"\n                *ngIf=\"fProveedor.mail.errors?.required && (fProveedor.mail.touched || fProveedor.mail.dirty)\">Por favor\n                ingrese su correo</div>\n            <div class=\"errorTag\"\n                *ngIf=\"fProveedor.mail.errors?.email && (fProveedor.mail.touched || fProveedor.mail.dirty)\">Por favor\n                ingrese una dirección de correo válida</div>\n            <div class=\"formInput\">\n                <label for=\"\">RIF*</label>\n                <input class=\"lInput\" type=\"text\" formControlName=\"rif\" name=\"rif\" />\n            </div>\n            <div class=\"errorTag\"\n                *ngIf=\"fProveedor.rif.errors?.required && (fProveedor.rif.touched || fProveedor.rif.dirty)\">Por favor\n                ingrese su nombre</div>\n            <div class=\"formInput\">\n                <label for=\"\">Dirección*</label>\n                <input class=\"lInput\" type=\"text\" formControlName=\"address\" name=\"address\" />\n            </div>\n            <div class=\"errorTag\"\n                *ngIf=\"fProveedor.address.errors?.required && (fProveedor.address.touched || fProveedor.address.dirty)\">\n                Por favor ingrese una dirección</div>\n            <div class=\"formInput\">\n                <label for=\"\">Whatsapp*</label>\n                <input class=\"lInput\" type=\"text\" formControlName=\"ws\" name=\"ws\" />\n            </div>\n            <div class=\"errorTag\"\n                *ngIf=\"fProveedor.ws.errors?.required && (fProveedor.ws.touched || fProveedor.ws.dirty)\">Por favor\n                ingrese un número valido</div>\n            <div class=\"formInput\">\n                <label for=\"\">Instagram</label>\n                <input class=\"lInput\" type=\"text\" formControlName=\"ig\" name=\"ig\" />\n            </div>\n            <div class=\"errorTag\"\n                *ngIf=\"fProveedor.ig.errors?.required && (fProveedor.ig.touched || fProveedor.ig.dirty)\">Por favor\n                ingrese un número valido</div>\n        </div>\n        <button type=\"submit\" class=\"formButton\">\n            <p>Registrar proveedor</p>\n        </button>\n    </form>\n</div>\n<app-error class=\"errorBox\" [msg]='errorMsg' [ngClass]=\"showError\" (closeError)=\"closeError()\"></app-error>"

/***/ }),

/***/ "./src/app/dashboard/components/form-proveedores/form-proveedores.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/dashboard/components/form-proveedores/form-proveedores.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2Zvcm0tcHJvdmVlZG9yZXMvZm9ybS1wcm92ZWVkb3Jlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/components/form-proveedores/form-proveedores.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/components/form-proveedores/form-proveedores.component.ts ***!
  \*************************************************************************************/
/*! exports provided: FormProveedoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormProveedoresComponent", function() { return FormProveedoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var FormProveedoresComponent = /** @class */ (function () {
    function FormProveedoresComponent(auth, dbHandler, fb, router) {
        this.auth = auth;
        this.dbHandler = dbHandler;
        this.fb = fb;
        this.router = router;
        this.onData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FormProveedoresComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.showError = {
            errorAct: false
        };
    };
    FormProveedoresComponent.prototype.initForm = function () {
        this.registroProve = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            ws: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            mail: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            rif: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            ig: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("")
        });
    };
    Object.defineProperty(FormProveedoresComponent.prototype, "fProveedor", {
        get: function () {
            return this.registroProve.controls;
        },
        enumerable: true,
        configurable: true
    });
    FormProveedoresComponent.prototype.endRegistro = function () {
        var _this = this;
        var dataAux = this.registroProve.value;
        var dataValues;
        var error;
        var refreshList;
        var endpoint;
        dataValues = {
            name: dataAux.name,
            ws: dataAux.ws,
            mail: dataAux.mail,
            address: dataAux.address,
            rif: dataAux.rif,
            ig: dataAux.ig
        };
        endpoint = "/proveedores";
        error = this.catchUserErrors();
        if (error) {
            var errorMsg = "Algunos campos son inválidos. Por favor, revise el formulario e intente de nuevo";
            this.openError(errorMsg);
        }
        else {
            this.dbHandler
                .createSomething(dataValues, endpoint)
                .subscribe(function (data) {
                // data is already a JSON object
                if (!data.status) {
                    var errorMsg = data.msg;
                    _this.openError(errorMsg);
                }
                else {
                    _this.onData.emit(data);
                }
            });
        }
    };
    FormProveedoresComponent.prototype.openError = function (msg) {
        this.errorMsg = msg;
        this.showError = {
            errorAct: true
        };
    };
    FormProveedoresComponent.prototype.closeError = function () {
        this.showError = {
            errorAct: false
        };
    };
    FormProveedoresComponent.prototype.resetForms = function () {
        this.registroProve.reset();
    };
    FormProveedoresComponent.prototype.catchUserErrors = function () {
        var aux1 = this.fProveedor.name.errors
            ? this.fProveedor.name.errors.required
            : false;
        var aux2 = this.fProveedor.mail.errors
            ? this.fProveedor.mail.errors.required
            : false;
        var aux3 = this.fProveedor.address.errors
            ? this.fProveedor.address.errors.required
            : false;
        var aux4 = this.fProveedor.ws.errors
            ? this.fProveedor.ws.errors.required
            : false;
        var aux5 = this.fProveedor.rif.errors
            ? this.fProveedor.rif.errors.required
            : false;
        var error = aux1 || aux2 || aux3 || aux4 || aux5;
        return error;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], FormProveedoresComponent.prototype, "editMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], FormProveedoresComponent.prototype, "proveedor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormProveedoresComponent.prototype, "onData", void 0);
    FormProveedoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-form-proveedores",
            template: __webpack_require__(/*! ./form-proveedores.component.html */ "./src/app/dashboard/components/form-proveedores/form-proveedores.component.html"),
            styles: [__webpack_require__(/*! ./form-proveedores.component.scss */ "./src/app/dashboard/components/form-proveedores/form-proveedores.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], FormProveedoresComponent);
    return FormProveedoresComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/form-rol/form-rol.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/components/form-rol/form-rol.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cardBox\">\n  <form class=\"formBox\" [formGroup]=\"registroRol\" (ngSubmit)=\"endRegistro()\">\n    <div class=\"formContent\">\n      <div class=\"formInput\">\n        <label for=\"\">Nombre*</label>\n        <input class=\"lInput\" type=\"text\" formControlName=\"name\" name=\"name\" />\n      </div>\n    </div>\n    <div class=\"errorTag\" *ngIf=\"fRol.name.errors?.required && (fRol.name.touched || fRol.name.dirty)\">Por favor ingrese\n      nombre del rol</div>\n    <button type=\"submit\" class=\"buttonBox\">\n      <p>Registrar rol</p>\n    </button>\n  </form>\n</div>\n\n<app-error class=\"errorBox\" [msg]='errorMsg' [ngClass]=\"showError\" (closeError)=\"closeError()\"></app-error>"

/***/ }),

/***/ "./src/app/dashboard/components/form-rol/form-rol.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/components/form-rol/form-rol.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2Zvcm0tcm9sL2Zvcm0tcm9sLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/components/form-rol/form-rol.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/components/form-rol/form-rol.component.ts ***!
  \*********************************************************************/
/*! exports provided: FormRolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRolComponent", function() { return FormRolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var FormRolComponent = /** @class */ (function () {
    function FormRolComponent(auth, dbHandler, fb, router) {
        this.auth = auth;
        this.dbHandler = dbHandler;
        this.fb = fb;
        this.router = router;
        this.onData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FormRolComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.showError = {
            errorAct: false
        };
    };
    FormRolComponent.prototype.initForm = function () {
        this.registroRol = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
    };
    Object.defineProperty(FormRolComponent.prototype, "fRol", {
        get: function () {
            return this.registroRol.controls;
        },
        enumerable: true,
        configurable: true
    });
    FormRolComponent.prototype.endRegistro = function () {
        var _this = this;
        var dataAux = this.registroRol.value;
        var dataValues;
        var error;
        var refreshList;
        var endpoint;
        dataValues = {};
        endpoint = "/roles";
        error = this.catchUserErrors();
        if (error) {
            var errorMsg = "Algunos campos son inválidos. Por favor, revise el formulario e intente de nuevo";
            this.openError(errorMsg);
        }
        else {
            this.dbHandler
                .createSomething(dataValues, endpoint)
                .subscribe(function (data) {
                // data is already a JSON object
                if (!data.status) {
                    var errorMsg = data.msg;
                    _this.openError(errorMsg);
                }
                else {
                    _this.onData.emit(data);
                }
            });
        }
    };
    FormRolComponent.prototype.openError = function (msg) {
        this.errorMsg = msg;
        this.showError = {
            errorAct: true
        };
    };
    FormRolComponent.prototype.closeError = function () {
        this.showError = {
            errorAct: false
        };
    };
    FormRolComponent.prototype.resetForms = function () {
        this.registroRol.reset();
    };
    FormRolComponent.prototype.catchUserErrors = function () {
        var aux1 = this.fRol.name.errors ? this.fRol.name.errors.required : false;
        var error = aux1;
        return error;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], FormRolComponent.prototype, "editMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormRolComponent.prototype, "rol", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormRolComponent.prototype, "onData", void 0);
    FormRolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-form-rol",
            template: __webpack_require__(/*! ./form-rol.component.html */ "./src/app/dashboard/components/form-rol/form-rol.component.html"),
            styles: [__webpack_require__(/*! ./form-rol.component.scss */ "./src/app/dashboard/components/form-rol/form-rol.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], FormRolComponent);
    return FormRolComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/form-usuario/form-usuario.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/components/form-usuario/form-usuario.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cardBox\">\n  <form class=\"formBox\" [formGroup]=\"registroUsuario\" (ngSubmit)=\"endRegistro()\">\n    <div class=\"formContent\">\n      <div class=\"formInput\">\n        <label for=\"\">Nombre*</label>\n        <input class=\"lInput\" type=\"text\" formControlName=\"name\" name=\"name\" />\n      </div>\n      <div class=\"errorTag\" *ngIf=\"\n          fUsuario.name.errors?.required &&\n          (fUsuario.name.touched || fUsuario.name.dirty)\n        \">\n        Por favor ingrese su nombre\n      </div>\n      <div class=\"formInput\">\n        <label for=\"\">Correo Electrónico*</label>\n        <input class=\"lInput\" type=\"text\" formControlName=\"mail\" name=\"mail\" />\n      </div>\n      <div class=\"errorTag\" *ngIf=\"\n          fUsuario.mail.errors?.required &&\n          (fUsuario.mail.touched || fUsuario.mail.dirty)\n        \">\n        Por favor ingrese su correo\n      </div>\n      <div class=\"errorTag\" *ngIf=\"\n          fUsuario.mail.errors?.email &&\n          (fUsuario.mail.touched || fUsuario.mail.dirty)\n        \">\n        Por favor ingrese una dirección de correo válida\n      </div>\n      <div class=\"formInput\">\n        <label for=\"\">Usuario*</label>\n        <input class=\"lInput\" type=\"text\" formControlName=\"username\" name=\"username\" />\n      </div>\n      <div class=\"errorTag\" *ngIf=\"\n          fUsuario.username.errors?.required &&\n          (fUsuario.username.touched || fUsuario.username.dirty)\n        \">\n        Por favor ingrese un nombre de usuario\n      </div>\n      <div class=\"formInput\">\n        <label for=\"\">Tipo de usuario</label>\n        <select class=\"lInput\" formControlName=\"tipo\">\n          <option value=\"SuperAdmin\" selected=\"true\">Super Administrador</option>\n          <option value=\"Vendedor\">Vendedor</option>\n          <option value=\"Admin\">Administrador</option>\n        </select>\n      </div>\n      <!--       <div class=\"formInput\" *ngIf=\"!isUpdate\">\n -->\n      <div class=\"formInput\">\n        <label for=\"\">Contraseña*</label>\n        <input class=\"lInput\" type=\"password\" formControlName=\"password\" name=\"password\" />\n      </div>\n      <div class=\"errorTag\" *ngIf=\"\n          fUsuario.password.errors?.required &&\n          (fUsuario.password.touched || fUsuario.password.dirty)\n        \">\n        Por favor ingrese una contraseña valida\n      </div>\n      <div class=\"errorTag\" *ngIf=\"\n          fUsuario.password.errors?.minlength &&\n          (fUsuario.password.touched || fUsuario.password.dirty)\n        \">\n        La contraseña debe contener al menos 6 carácteres\n      </div>\n      <!--             <div class=\"formInput\" *ngIf=\"!isUpdate\">\n -->\n      <div class=\"formInput\">\n        <label for=\"\">Confirmar contraseña*</label>\n        <input class=\"lInput\" type=\"password\" formControlName=\"cpassword\" name=\"cpassword\" />\n      </div>\n      <div class=\"errorTag\" *ngIf=\"fUsuario.cpassword.errors?.ConfirmPassword\">\n        Las contraseñas deben coincidir\n      </div>\n      <div class=\"errorTag\" *ngIf=\"\n          fUsuario.cpassword.errors?.required &&\n          (fUsuario.cpassword.touched || fUsuario.cpassword.dirty)\n        \">\n        Por favor vuelva a ingresar la contraseña\n      </div>\n    </div>\n    <button type=\"submit\" class=\"buttonBox\">\n      <p>Registrar usuario</p>\n    </button>\n  </form>\n</div>\n\n<app-error class=\"errorBox\" [msg]=\"errorMsg\" [ngClass]=\"showError\" (closeError)=\"closeError()\"></app-error>"

/***/ }),

/***/ "./src/app/dashboard/components/form-usuario/form-usuario.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/components/form-usuario/form-usuario.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2Zvcm0tdXN1YXJpby9mb3JtLXVzdWFyaW8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/components/form-usuario/form-usuario.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/components/form-usuario/form-usuario.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FormUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormUsuarioComponent", function() { return FormUsuarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _directives_must_match_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../directives/must-match.validator */ "./src/app/directives/must-match.validator.ts");







var FormUsuarioComponent = /** @class */ (function () {
    function FormUsuarioComponent(auth, dbHandler, fb, router) {
        this.auth = auth;
        this.dbHandler = dbHandler;
        this.fb = fb;
        this.router = router;
        this.onData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FormUsuarioComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.showError = {
            errorAct: false
        };
    };
    FormUsuarioComponent.prototype.initForm = function () {
        this.registroUsuario = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            mail: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            tlf: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)
            ]),
            cpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        }, _directives_must_match_validator__WEBPACK_IMPORTED_MODULE_6__["ConfirmPasswordValidator"].MatchPassword);
    };
    Object.defineProperty(FormUsuarioComponent.prototype, "fUsuario", {
        get: function () {
            return this.registroUsuario.controls;
        },
        enumerable: true,
        configurable: true
    });
    FormUsuarioComponent.prototype.endRegistro = function () {
        var _this = this;
        var userAux = this.registroUsuario.value;
        var userValues;
        var tipo = userAux.tipo;
        var error;
        var refreshList;
        var endpoint;
        userValues = {
            username: userAux.username,
            name: userAux.name,
            tlf: userAux.tlf,
            mail: userAux.mail,
            password: userAux.password,
            type: userAux.tipo
        };
        switch (tipo) {
            case "SuperAdmin":
                endpoint = "/superadmins";
                break;
            case "Vendedor":
                endpoint = "/vendedores";
                break;
            default:
                endpoint = "/admins";
                break;
        }
        error = this.catchUsuarioErrors();
        if (error) {
            var errorMsg = "Algunos campos son inválidos. Por favor, revise el formulario e intente de nuevo";
            this.openError(errorMsg);
        }
        else {
            this.dbHandler
                .createSomething(userValues, endpoint)
                .subscribe(function (data) {
                // data is already a JSON object
                if (!data.status) {
                    var errorMsg = data.msg;
                    _this.openError(errorMsg);
                }
                else {
                    _this.onData.emit(data);
                }
            });
        }
    };
    FormUsuarioComponent.prototype.catchUsuarioErrors = function () {
        var aux1 = this.fUsuario.name.errors
            ? this.fUsuario.name.errors.required
            : false;
        var aux2 = this.fUsuario.mail.errors
            ? this.fUsuario.mail.errors.required
            : false;
        var aux3 = this.fUsuario.username.errors
            ? this.fUsuario.username.errors.required
            : false;
        var aux4 = this.fUsuario.password.errors
            ? this.fUsuario.password.errors.required
            : false;
        var aux5 = this.fUsuario.password.errors
            ? this.fUsuario.password.errors.minlength
            : false;
        var aux6 = this.fUsuario.cpassword.errors
            ? this.fUsuario.cpassword.errors.required
            : false;
        var aux7 = this.fUsuario.cpassword.errors
            ? this.fUsuario.cpassword.errors.ConfirmPassword
            : false;
        var error = aux1 || aux2 || aux3 || aux4 || aux5 || aux6 || aux7;
        return error;
    };
    FormUsuarioComponent.prototype.openError = function (msg) {
        this.errorMsg = msg;
        this.showError = {
            errorAct: true
        };
    };
    FormUsuarioComponent.prototype.closeError = function () {
        this.showError = {
            errorAct: false
        };
    };
    FormUsuarioComponent.prototype.resetForms = function () {
        this.registroUsuario.reset();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], FormUsuarioComponent.prototype, "editMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormUsuarioComponent.prototype, "usuario", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormUsuarioComponent.prototype, "onData", void 0);
    FormUsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-form-usuario",
            template: __webpack_require__(/*! ./form-usuario.component.html */ "./src/app/dashboard/components/form-usuario/form-usuario.component.html"),
            styles: [__webpack_require__(/*! ./form-usuario.component.scss */ "./src/app/dashboard/components/form-usuario/form-usuario.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], FormUsuarioComponent);
    return FormUsuarioComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/header/header.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/components/header/header.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"smallHeadBox\">\n  <!-- <p class=\"wTag\">{{welcome}}</p-->\n  <fa-icon style=\"color: white\" class=\"faIcon\" [icon]=\"faBars\" size=\"2x\" (click)=\"tMenu()\"></fa-icon>\n  <!-- <img class=\"headerImg\" src=\"assets/logo.png\" alt=\"\" /> -->\n  <p class=\"aTag\" style=\"margin-left: auto\" (click)=\"actualizar()\">Actualizar</p>\n  <p class=\"aTag\" (click)=\"logout()\">Salir</p>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/components/header/header.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/components/header/header.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bigHeadBox {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  /*max-height: 25vh;*/\n  width: 100%;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center top; }\n\n.faIcon {\n  width: auto;\n  margin-left: 23px;\n  font-size: 13px; }\n\n.headerImg {\n  width: 170px;\n  margin-left: 15px;\n  padding-top: 7px;\n  height: 44px; }\n\n.hImg {\n  width: 100%;\n  height: 100%;\n  display: block; }\n\n.smallHeadBox {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 0 auto;\n  width: 100%;\n  height: 100%;\n  background: #161925;\n  color: white;\n  font-family: \"Open Sans\", sans-serif; }\n\n.wTag {\n  display: inline-block;\n  position: relative;\n  margin: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  margin-left: 42px; }\n\n.aTag {\n  cursor: pointer;\n  margin-right: 30px;\n  font-size: 14px;\n  transition: all 0.3s ease; }\n\n.aTag:hover {\n    font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZ2Vsb2Fjci9Qcm95ZWN0b3MvSW5WZW4vaW52ZW5BcHAvaW52ZW5hcHAvc3JjL2FwcC9kYXNoYm9hcmQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsb0JBQUE7RUFDQSxXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4QiwrQkFBK0IsRUFBQTs7QUFHakM7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBM0NhO0VBNENiLFlBQVk7RUFDWixvQ0EzQzZCLEVBQUE7O0FBOEMvQjtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUiwyQkFBMkI7RUFDM0IsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCLEVBQUE7O0FBSjNCO0lBTUksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnk6ICMzNDdmYzQ7IC8vcmdiKDUyLDEyNywxOTYpO1xuJHNlY29uZGFyeTogIzMxZTk4MTtcbiRib3JkZXItaW5wdXQ6ICMzNDdmYzQ7XG4kdGhpcmQ6ICMxNjE5MjU7XG4kZm9udDE6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuJGZvbnQyOiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcblxuXG4uYmlnSGVhZEJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgLyptYXgtaGVpZ2h0OiAyNXZoOyovXG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XG59XG5cbi5mYUljb24ge1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDIzcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmhlYWRlckltZyB7XG4gIHdpZHRoOiAxNzBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiA3cHg7XG4gIGhlaWdodDogNDRweDtcbn1cblxuLmhJbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNtYWxsSGVhZEJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICR0aGlyZDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogJGZvbnQyO1xufVxuXG4ud1RhZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIG1hcmdpbi1sZWZ0OiA0MnB4O1xufVxuXG4uYVRhZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICY6aG92ZXIge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/components/header/header.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/components/header/header.component.ts ***!
  \*****************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(dbHandler, auth, router) {
        this.dbHandler = dbHandler;
        this.auth = auth;
        this.router = router;
        this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faBars"];
        this.menu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.tMenu = function () {
        this.menu.emit();
    };
    HeaderComponent.prototype.actualizar = function () {
        this.dbHandler.actualizar();
    };
    HeaderComponent.prototype.logout = function () {
        this.auth.logout();
        window.location.reload();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "menu", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-header",
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/dashboard/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/dashboard/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/lista-almacen/lista-almacen.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-almacen/lista-almacen.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cardBox\" *ngIf=\"!isEmpty\">\n\t<div class=\"btnBox\">\n\t\t<button class=\"buttonBox\" (click)=\"agregar()\">\n\t\t\t{{ addText }}\n\t\t </button>\n\t</div>\n  <div class=\"listBox\">\n    \t<table class=\"classtable\">\n\t\t\t<thead class=\"classthead\">\n\t\t\t\t<tr class=\"classtr\">\n\t\t\t\t\t<th class=\"classth\" scope=\"col\">Acciones</th>\n\t\t\t\t\t<th class=\"classth\" scope=\"col\" *ngFor=\"let field of fields\">{{ field }}</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody class=\"classtbody\">\n\t\t\t\t<tr class=\"classtr\" *ngFor=\"let value of values; let i = index\">\n\t\t\t\t\t<div class=\"btn-details-btnhd\">\n            <div>\n                <fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEye\" size=\"2x\" (click)=\"verDetalle($event, i)\"></fa-icon>\n                <fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEdit\" size=\"2x\" (click)=\"openUpdate($event, i)\"></fa-icon>\n                <fa-icon style=\"color: red; stroke: black\" class=\"faIcon\" [icon]=\"faPdf\" size=\"2x\"\n                (click)=\"generatePdf($event, i)\"></fa-icon>\n                <fa-icon style=\"color: red\" class=\"faIcon\" [icon]=\"faTrash\" size=\"2x\" (click)=\"confirmDelete($event, i)\">\n                </fa-icon>\n            </div>\n\n            <div class=\"actionBox\">\n              <button type=\"button\" class=\"actionButton\"\n                (click)=\"habilitarElemento($event, i, 1)\">\n                <p>HABILITAR</p>\n              </button>\n              <button type=\"button\" class=\"actionButton\"\n                (click)=\"habilitarElemento($event, i, 0)\">\n                <p>DESHABILITAR</p>\n              </button>\n            </div>\n\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<td class=\"classtd\" *ngFor=\"let item of value\">\n\t\t\t\t\t\t<p>{{ item }}</p>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n    \t</table>\n\n    <br><br>\n  </div>\n  <!--\t<div class=\"titleRow\">-->\n      <!--<p style=\"width: 250px;\">Acciones</p>\n      <p *ngFor=\"let field of fields\">{{ field }}</p>-->\n   \t<!--<div class=\"contentRow\" *ngFor=\"let value of values; let i = index\">\n      \t<!--<div class=\"actionBox\" style=\"width: 250px;\">\n        \t<!-- <p class=\"listButton\"> -->\n        \t<!-- <button type=\"button\" id=\"closeB\" (click)=\"deleteItem($event, i)\">X</button>-->\n         <!--<img id=\"updateB\" src=\"/assets/tuerca.png\" (click)=\"openUpdate($event, i)\"/>-->\n        \t\t<!--<fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEye\" size=\"2x\" (click)=\"verDetalle($event, i)\"></fa-icon>\n        \t\t<fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEdit\" size=\"2x\" (click)=\"openUpdate($event, i)\"></fa-icon>\n        \t\t<fa-icon style=\"color: red; stroke: black\" class=\"faIcon\" [icon]=\"faPdf\" size=\"2x\" (click)=\"generatePdf($event, i)\"></fa-icon>\n        \t\t<fa-icon style=\"color: red\" class=\"faIcon\" [icon]=\"faTrash\" size=\"2x\" (click)=\"confirmDelete($event, i)\"></fa-icon>-->\n        \t<!-- <button\n              style=\"background-color: orange\"\n              type=\"button\"\n              class=\"actionButton\"\n              (click)=\"openUpdate($event, i)\"\n            >\n              <p>EDITAR</p>\n            </button>-->\n            <!--<button\n              style=\"background-color: red\"\n              type=\"button\"\n              class=\"actionButton\"\n              (click)=\"confirmDelete($event, i)\"\n            >\n              <p>ELIMINAR</p>\n            </button>    -->\n\n        <!-- <button\n              style=\"background-color: green\"\n              type=\"button\"\n              class=\"actionButton\"\n              (click)=\"habilitarElemento($event, i, 1)\"\n            >\n              <p>HABILITAR</p>\n            </button>-->\n            <!--<button\n              style=\"background-color: red\"\n              type=\"button\"\n              class=\"actionButton\"\n              (click)=\"habilitarElemento($event, i, 0)\"\n            >\n              <p>DESHABILITAR</p>\n            </button> -->\n      \t<!--</div>-->\n      <!--<div *ngFor=\"let item of value\">\n        <p>{{ item }}</p>-->\n   \n</div>\n\n<div class=\"cardBox\" *ngIf=\"isEmpty\">\n  <p>No hay elementos para mostrar</p>\n</div>\n\n<app-error class=\"errorBox\" [msg]='errorMsg' [ngClass]=\"showError\" (closeError)=\"closeError()\"></app-error>\n\n<div class=\"confirmBox\" [ngClass]=\"showConfirm\">\n  <div class=\"blackBox\" (click)=\"closeConfirm()\"></div>\n  <div class=\"logBox2\">\n    <p class=\"confirmHeader\">CONFIRMACIÓN</p>\n    <p class=\"confirmContent\">Segro que quiere eliminar este elemento</p>\n    <div class=\"confirmButtons\">\n      <button type=\"button\" class=\"confirm buttonBox\" (click)=\"deleteItem($event, deletedItem)\">\n        <p>SÍ</p>\n      </button>\n      <button type=\"button\" class=\"goback buttonBox\" (click)=\"closeConfirm()\">\n        <p>NO</p>\n      </button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/components/lista-almacen/lista-almacen.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-almacen/lista-almacen.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2xpc3RhLWFsbWFjZW4vbGlzdGEtYWxtYWNlbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/components/lista-almacen/lista-almacen.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-almacen/lista-almacen.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ListaAlmacenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaAlmacenComponent", function() { return ListaAlmacenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__);









pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default.a.pdfMake.vfs;
var ListaAlmacenComponent = /** @class */ (function () {
    function ListaAlmacenComponent(auth, dbHandler, router, fb) {
        this.auth = auth;
        this.dbHandler = dbHandler;
        this.router = router;
        this.fb = fb;
        this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEye"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTrashAlt"];
        this.faPdf = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faFilePdf"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEdit"];
    }
    ListaAlmacenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initComponent("/almacenes", "Lista de Almacenes", "Agregar Almacén", "almacenes");
        this.initForm();
        this.isEmpty = true;
        var auxfields = this.dbHandler.getLocal(this.name + "Fields");
        var auxValues = this.dbHandler.getLocal(this.name + "Values");
        this.fields = ["Id", "Código", "Estado", "Ciudad", "Dirección"];
        this.values = [];
        auxValues.forEach(function (value) {
            var aux = [value._id, value.code, value.state, value.city, value.address];
            _this.values.push(aux);
        });
        if (this.values.length) {
            this.isEmpty = false;
        }
    };
    ListaAlmacenComponent.prototype.initForm = function () {
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("")
        });
    };
    ListaAlmacenComponent.prototype.initComponent = function (endpoint, title, addText, name) {
        this.endpoint = endpoint;
        this.title = title;
        this.addText = addText;
        this.name = name;
    };
    ListaAlmacenComponent.prototype.deleteItem = function (event, index) {
        var _this = this;
        var auxValues = this.dbHandler.getLocal(this.name + "Values");
        var item = auxValues[index];
        var myEnd = this.endpoint;
        var type = this.auth.getType();
        this.isAdmin = type === "Admin";
        this.isVendedor = type === "Vendedor";
        this.isSuperAdmin = type === "SuperAdmin";
        //Autorizacion basada en roles. Modificar eventualmente a basada en reglas
        console.log(this.isSuperAdmin);
        console.log(this.isAdmin);
        if (!(this.isAdmin || this.isSuperAdmin)) {
            this.closeConfirm();
            var errorMsg = "Usuario no autorizado";
            this.openError(errorMsg);
        }
        else {
            this.dbHandler.deleteSomething(item._id, myEnd).subscribe(function (data) {
                _this.closeConfirm();
                if (!data.status) {
                    var errorMsg = data.msg;
                    _this.openError(errorMsg);
                }
                else {
                    _this.dbHandler.actualizar();
                }
            });
        }
    };
    ListaAlmacenComponent.prototype.confirmDelete = function (event, item) {
        this.deletedItem = item;
        this.openConfirm();
    };
    ListaAlmacenComponent.prototype.openConfirm = function () {
        this.showConfirm = {
            confirmAct: true
        };
    };
    ListaAlmacenComponent.prototype.closeConfirm = function () {
        this.showConfirm = {
            confirmAct: false
        };
    };
    ListaAlmacenComponent.prototype.openUpdate = function (event, item) {
        this.router.navigateByUrl("/actualizar/almacen/" + item);
    };
    ListaAlmacenComponent.prototype.agregar = function () {
        this.router.navigateByUrl("/registro/almacen");
    };
    ListaAlmacenComponent.prototype.habilitarElemento = function (event, elemento, isHabilitar) { };
    ListaAlmacenComponent.prototype.openError = function (msg) {
        this.errorMsg = msg;
        this.showError = {
            errorAct: true
        };
    };
    ListaAlmacenComponent.prototype.closeError = function () {
        this.showError = {
            errorAct: false
        };
    };
    ListaAlmacenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-lista-almacen",
            template: __webpack_require__(/*! ./lista-almacen.component.html */ "./src/app/dashboard/components/lista-almacen/lista-almacen.component.html"),
            styles: [__webpack_require__(/*! ./lista-almacen.component.scss */ "./src/app/dashboard/components/lista-almacen/lista-almacen.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], ListaAlmacenComponent);
    return ListaAlmacenComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/lista-banco/lista-banco.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-banco/lista-banco.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cardBox\" *ngIf=\"!isEmpty\">\n  <div class=\"listBox\">\n    <table class=\"classtable\">\n      <thead class=\"classthead\">\n        <tr class=\"classtr\">\n          <th class=\"classth\" scope=\"col\">Acciones</th>\n          <th class=\"classth\" scope=\"col\" *ngFor=\"let field of fields\">{{ field }}</th>\n        </tr>\n      </thead>\n      <tbody class=\"classtbody\">\n        <tr class=\"classtr\" *ngFor=\"let value of values; let i = index\">\n          <div class=\"btn-details-btnhd\">\n            <div>\n              <fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEye\" size=\"2x\" (click)=\"verDetalle($event, i)\">\n              </fa-icon>\n              <fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEdit\" size=\"2x\" (click)=\"openUpdate($event, i)\">\n              </fa-icon>\n              <fa-icon style=\"color: red; stroke: black\" class=\"faIcon\" [icon]=\"faPdf\" size=\"2x\"\n                (click)=\"generatePdf($event, i)\"></fa-icon>\n              <fa-icon style=\"color: red\" class=\"faIcon\" [icon]=\"faTrash\" size=\"2x\" (click)=\"confirmDelete($event, i)\">\n              </fa-icon>\n            </div>\n\n            <div class=\"actionBox\">\n              <button type=\"button\" class=\"actionButton\" (click)=\"habilitarElemento($event, i, 1)\">\n                <p>HABILITAR</p>\n              </button>\n              <button type=\"button\" class=\"actionButton\" (click)=\"habilitarElemento($event, i, 0)\">\n                <p>DESHABILITAR</p>\n              </button>\n            </div>\n\n          </div>\n\n          <td class=\"classtd\" *ngFor=\"let item of value\">\n            <p>{{ item }}</p>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n    <br><br>\n  </div>\n</div>\n\n<div class=\"cardBox\" *ngIf=\"isEmpty\">\n  <p>No hay elementos para mostrar</p>\n</div>\n\n<app-error class=\"errorBox\" [msg]='errorMsg' [ngClass]=\"showError\" (closeError)=\"closeError()\"></app-error>\n\n<div class=\"confirmBox\" [ngClass]=\"showConfirm\">\n  <div class=\"blackBox\" (click)=\"closeConfirm()\"></div>\n  <div class=\"logBox2\">\n    <p class=\"confirmHeader\">CONFIRMACIÓN</p>\n    <p class=\"confirmContent\">Segro que quiere eliminar este elemento</p>\n    <div class=\"confirmButtons\">\n      <button type=\"button\" class=\"confirm buttonBox\" (click)=\"deleteItem($event, deletedItem)\">\n        <p>SÍ</p>\n      </button>\n      <button type=\"button\" class=\"goback buttonBox\" (click)=\"closeConfirm()\">\n        <p>NO</p>\n      </button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/components/lista-banco/lista-banco.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-banco/lista-banco.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2xpc3RhLWJhbmNvL2xpc3RhLWJhbmNvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/components/lista-banco/lista-banco.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-banco/lista-banco.component.ts ***!
  \***************************************************************************/
/*! exports provided: ListaBancoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaBancoComponent", function() { return ListaBancoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__);









pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default.a.pdfMake.vfs;
var ListaBancoComponent = /** @class */ (function () {
    function ListaBancoComponent(auth, dbHandler, router, fb) {
        this.auth = auth;
        this.dbHandler = dbHandler;
        this.router = router;
        this.fb = fb;
        this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEye"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTrashAlt"];
        this.faPdf = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faFilePdf"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEdit"];
    }
    ListaBancoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initComponent("/bancos", "Lista de Bancos", "Agregar Banco", "bancos");
        this.initForm();
        this.isEmpty = true;
        var auxfields = this.dbHandler.getLocal(this.name + "Fields");
        var auxValues = this.dbHandler.getLocal(this.name + "Values");
        this.fields = ["Id", "Banco", "Alias", "Status", "Número de cuenta"];
        this.values = [];
        auxValues.forEach(function (value) {
            var aux = [
                value._id,
                value.bank,
                value.alias,
                value.status,
                value.accountNumber
            ];
            _this.values.push(aux);
        });
        if (this.values.length) {
            this.isEmpty = false;
        }
    };
    ListaBancoComponent.prototype.initForm = function () {
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("")
        });
    };
    ListaBancoComponent.prototype.initComponent = function (endpoint, title, addText, name) {
        this.endpoint = endpoint;
        this.title = title;
        this.addText = addText;
        this.name = name;
    };
    ListaBancoComponent.prototype.deleteItem = function (event, index) {
        var _this = this;
        var auxValues = this.dbHandler.getLocal(this.name + "Values");
        var item = auxValues[index];
        var myEnd = this.endpoint;
        var type = this.auth.getType();
        this.isAdmin = type === "Admin";
        this.isVendedor = type === "Vendedor";
        this.isSuperAdmin = type === "SuperAdmin";
        //Autorizacion basada en roles. Modificar eventualmente a basada en reglas
        console.log(this.isSuperAdmin);
        console.log(this.isAdmin);
        if (!(this.isAdmin || this.isSuperAdmin)) {
            this.closeConfirm();
            var errorMsg = "Usuario no autorizado";
            this.openError(errorMsg);
        }
        else {
            this.dbHandler.deleteSomething(item._id, myEnd).subscribe(function (data) {
                _this.closeConfirm();
                if (!data.status) {
                    var errorMsg = data.msg;
                    _this.openError(errorMsg);
                }
                else {
                    _this.dbHandler.actualizar();
                }
            });
        }
    };
    ListaBancoComponent.prototype.confirmDelete = function (event, item) {
        this.deletedItem = item;
        this.openConfirm();
    };
    ListaBancoComponent.prototype.openConfirm = function () {
        this.showConfirm = {
            confirmAct: true
        };
    };
    ListaBancoComponent.prototype.closeConfirm = function () {
        this.showConfirm = {
            confirmAct: false
        };
    };
    ListaBancoComponent.prototype.openUpdate = function (event, item) {
        this.router.navigateByUrl("/actualizar/banco/" + item);
    };
    ListaBancoComponent.prototype.agregar = function () {
        this.router.navigateByUrl("/registro/banco");
    };
    ListaBancoComponent.prototype.habilitarElemento = function (event, elemento, isHabilitar) { };
    ListaBancoComponent.prototype.openError = function (msg) {
        this.errorMsg = msg;
        this.showError = {
            errorAct: true
        };
    };
    ListaBancoComponent.prototype.closeError = function () {
        this.showError = {
            errorAct: false
        };
    };
    ListaBancoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-lista-banco",
            template: __webpack_require__(/*! ./lista-banco.component.html */ "./src/app/dashboard/components/lista-banco/lista-banco.component.html"),
            styles: [__webpack_require__(/*! ./lista-banco.component.scss */ "./src/app/dashboard/components/lista-banco/lista-banco.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], ListaBancoComponent);
    return ListaBancoComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/lista-clientes/lista-clientes.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-clientes/lista-clientes.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"buttonBox\" (click)=\"agregar()\">\n  {{ addText }}\n</button>\n\n<div class=\"cardBox\" *ngIf=\"!isEmpty\">\n  <div class=\"listBox\">\n    <div class=\"titleRow\">\n      <p style=\"width: 250px;\">Acciones</p>\n      <p *ngFor=\"let field of fields\">{{ field }}</p>\n    </div>\n    <div class=\"contentRow\" *ngFor=\"let value of values; let i = index\">\n      <div class=\"actionBox\" style=\"width: 250px;\">\n        <!-- <p class=\"listButton\"> -->\n        <!-- <button type=\"button\" id=\"closeB\" (click)=\"deleteItem($event, i)\">\n            X\n          </button>\n          <img\n            id=\"updateB\"\n            src=\"/assets/tuerca.png\"\n            (click)=\"openUpdate($event, i)\"\n          /> -->\n        <fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEye\" size=\"2x\" (click)=\"verDetalle($event, i)\"></fa-icon>\n        <fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEdit\" size=\"2x\" (click)=\"openUpdate($event, i)\"></fa-icon>\n        <fa-icon style=\"color: red; stroke: black\" class=\"faIcon\" [icon]=\"faPdf\" size=\"2x\"\n          (click)=\"generatePdf($event, i)\"></fa-icon>\n        <fa-icon style=\"color: red\" class=\"faIcon\" [icon]=\"faTrash\" size=\"2x\" (click)=\"confirmDelete($event, i)\">\n        </fa-icon>\n        <!-- <button\n              style=\"background-color: orange\"\n              type=\"button\"\n              class=\"actionButton\"\n              (click)=\"openUpdate($event, i)\"\n            >\n              <p>EDITAR</p>\n            </button>\n            <button\n              style=\"background-color: red\"\n              type=\"button\"\n              class=\"actionButton\"\n              (click)=\"confirmDelete($event, i)\"\n            >\n              <p>ELIMINAR</p>\n            </button>    -->\n\n        <!-- <button\n              style=\"background-color: green\"\n              type=\"button\"\n              class=\"actionButton\"\n              (click)=\"habilitarElemento($event, i, 1)\"\n            >\n              <p>HABILITAR</p>\n            </button>\n            <button\n              style=\"background-color: red\"\n              type=\"button\"\n              class=\"actionButton\"\n              (click)=\"habilitarElemento($event, i, 0)\"\n            >\n              <p>DESHABILITAR</p>\n            </button> -->\n      </div>\n      <div *ngFor=\"let item of value\">\n        <p>{{ item }}</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"cardBox\" *ngIf=\"isEmpty\">\n  <p>No hay elementos para mostrar</p>\n</div>\n\n\n<app-error class=\"errorBox\" [msg]='errorMsg' [ngClass]=\"showError\" (closeError)=\"closeError()\"></app-error>\n\n<div class=\"confirmBox\" [ngClass]=\"showConfirm\">\n  <div class=\"blackBox\" (click)=\"closeConfirm()\"></div>\n\n  <div class=\"logBox\">\n    <div class=\"closeButton\">\n      <button class=\"closeB\" (click)=\"closeConfirm()\">X</button>\n    </div>\n    <p class=\"confirmHeader\">CONFIRMACIÓN</p>\n    <p class=\"confirmContent\">Segro que quiere eliminar este elemento</p>\n    <div class=\"confirmButtons\">\n      <button type=\"button\" class=\"confirm formButton\" (click)=\"deleteItem($event, deletedItem)\">\n        <p>SÍ</p>\n      </button>\n      <button type=\"button\" class=\"goback formButton\" (click)=\"closeConfirm()\">\n        <p>NO</p>\n      </button>\n    </div>\n\n  </div>"

/***/ }),

/***/ "./src/app/dashboard/components/lista-clientes/lista-clientes.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-clientes/lista-clientes.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2xpc3RhLWNsaWVudGVzL2xpc3RhLWNsaWVudGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/components/lista-clientes/lista-clientes.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-clientes/lista-clientes.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ListaClientesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaClientesComponent", function() { return ListaClientesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__);









pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default.a.pdfMake.vfs;
var ListaClientesComponent = /** @class */ (function () {
    function ListaClientesComponent(auth, dbHandler, router, fb) {
        this.auth = auth;
        this.dbHandler = dbHandler;
        this.router = router;
        this.fb = fb;
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTrashAlt"];
        this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEye"];
        this.faPdf = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faFilePdf"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEdit"];
    }
    ListaClientesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initComponent("/clientes", "Lista de Clientes", "Agregar Cliente", "clientes");
        this.initForm();
        this.isEmpty = true;
        var auxfields = this.dbHandler.getLocal(this.name + "Fields");
        var auxValues = this.dbHandler.getLocal(this.name + "Values");
        this.fields = [
            "Id",
            "RIF",
            "Nombre",
            "Correo",
            "Dirección",
            "Teléfono",
            "Instagram"
        ];
        this.values = [];
        console.log(auxValues);
        auxValues.forEach(function (value) {
            console.log(value);
            var aux = [
                value._id,
                value.rif,
                value.name,
                value.mail,
                value.address,
                value.ws,
                value.ig
            ];
            console.log(aux);
            _this.values.push(aux);
        });
        if (this.values.length) {
            this.isEmpty = false;
        }
    };
    ListaClientesComponent.prototype.initComponent = function (endpoint, title, addText, name) {
        this.endpoint = endpoint;
        this.title = title;
        this.addText = addText;
        this.name = name;
    };
    ListaClientesComponent.prototype.deleteItem = function (event, index) {
        var _this = this;
        var auxValues = this.dbHandler.getLocal(this.name + "Values");
        var item = auxValues[index];
        var myEnd = this.endpoint;
        var type = this.auth.getType();
        this.isAdmin = type === "Admin";
        this.isVendedor = type === "Vendedor";
        this.isSuperAdmin = type === "SuperAdmin";
        //Autorizacion basada en roles. Modificar eventualmente a basada en reglas
        console.log(this.isSuperAdmin);
        console.log(this.isAdmin);
        if (!(this.isAdmin || this.isSuperAdmin)) {
            this.closeConfirm();
            var errorMsg = "Usuario no autorizado";
            this.openError(errorMsg);
        }
        else {
            this.dbHandler.deleteSomething(item._id, myEnd).subscribe(function (data) {
                _this.closeConfirm();
                if (!data.status) {
                    var errorMsg = data.msg;
                    _this.openError(errorMsg);
                }
                else {
                    _this.dbHandler.actualizar();
                }
            });
        }
    };
    ListaClientesComponent.prototype.confirmDelete = function (event, item) {
        this.deletedItem = item;
        this.openConfirm();
    };
    ListaClientesComponent.prototype.openConfirm = function () {
        this.showConfirm = {
            confirmAct: true
        };
    };
    ListaClientesComponent.prototype.closeConfirm = function () {
        this.showConfirm = {
            confirmAct: false
        };
    };
    ListaClientesComponent.prototype.openUpdate = function (event, item) {
        this.router.navigateByUrl("/actualizar/cliente/" + item);
    };
    ListaClientesComponent.prototype.agregar = function () {
        this.router.navigateByUrl("/registro/cliente");
    };
    ListaClientesComponent.prototype.habilitarElemento = function (event, elemento, isHabilitar) { };
    ListaClientesComponent.prototype.openError = function (msg) {
        this.errorMsg = msg;
        this.showError = {
            errorAct: true
        };
    };
    ListaClientesComponent.prototype.closeError = function () {
        this.showError = {
            errorAct: false
        };
    };
    ListaClientesComponent.prototype.initForm = function () {
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("")
        });
    };
    ListaClientesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-lista-clientes",
            template: __webpack_require__(/*! ./lista-clientes.component.html */ "./src/app/dashboard/components/lista-clientes/lista-clientes.component.html"),
            styles: [__webpack_require__(/*! ./lista-clientes.component.scss */ "./src/app/dashboard/components/lista-clientes/lista-clientes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], ListaClientesComponent);
    return ListaClientesComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/lista-cobro/lista-cobro.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-cobro/lista-cobro.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"btnBox\">\n  <button class=\"buttonBox\" (click)=\"agregar()\">\n    {{ addText }}\n  </button>\n</div>\n<div class=\"cardBox\" *ngIf=\"!isEmpty\">\n  <div class=\"listBox\">\n    <table class=\"classtable\">\n      <thead class=\"classthead\">\n        <tr class=\"classtr\">\n          <th class=\"classth\" scope=\"col\">Acciones</th>\n          <th class=\"classth\" scope=\"col\" *ngFor=\"let field of fields\">{{ field }}</th>\n        </tr>\n      </thead>\n      <tbody class=\"classtbody\">\n        <tr class=\"classtr\" *ngFor=\"let value of values; let i = index\">\n          <div class=\"btn-details\">\n            <fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEye\" size=\"2x\" (click)=\"verDetalle($event, i)\">\n            </fa-icon>\n            <fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEdit\" size=\"2x\" (click)=\"openUpdate($event, i)\">\n            </fa-icon>\n            <fa-icon style=\"color: red; stroke: black\" class=\"faIcon\" [icon]=\"faPdf\" size=\"2x\"\n              (click)=\"generatePdf($event, i)\"></fa-icon>\n            <fa-icon style=\"color: red\" class=\"faIcon\" [icon]=\"faTrash\" size=\"2x\" (click)=\"confirmDelete($event, i)\">\n            </fa-icon>\n          </div>\n\n          <td class=\"classtd\" *ngFor=\"let item of value\">\n            <p>{{ item }}</p>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n    <br><br>\n  </div>\n\n</div>\n<div class=\"cardBox\" *ngIf=\"isEmpty\">\n  <p>No hay elementos para mostrar</p>\n</div>\n\n\n<app-error class=\"errorBox\" [msg]='errorMsg' [ngClass]=\"showError\" (closeError)=\"closeError()\"></app-error>\n\n<div class=\"confirmBox\" [ngClass]=\"showConfirm\">\n  <div class=\"blackBox\" (click)=\"closeConfirm()\"></div>\n  <div class=\"logBox2\">\n    <p class=\"confirmHeader\">CONFIRMACIÓN</p>\n    <p class=\"confirmContent\">Segro que quiere eliminar este elemento</p>\n    <div class=\"confirmButtons\">\n      <button type=\"button\" class=\"confirm buttonBox\" (click)=\"deleteItem($event, deletedItem)\">\n        <p>SÍ</p>\n      </button>\n      <button type=\"button\" class=\"goback buttonBox\" (click)=\"closeConfirm()\">\n        <p>NO</p>\n      </button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/components/lista-cobro/lista-cobro.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-cobro/lista-cobro.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2xpc3RhLWNvYnJvL2xpc3RhLWNvYnJvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/components/lista-cobro/lista-cobro.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-cobro/lista-cobro.component.ts ***!
  \***************************************************************************/
/*! exports provided: ListaCobroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaCobroComponent", function() { return ListaCobroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__);









pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default.a.pdfMake.vfs;
var ListaCobroComponent = /** @class */ (function () {
    function ListaCobroComponent(auth, dbHandler, router, fb) {
        this.auth = auth;
        this.dbHandler = dbHandler;
        this.router = router;
        this.fb = fb;
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTrashAlt"];
        this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEye"];
        this.faPdf = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faFilePdf"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEdit"];
    }
    ListaCobroComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initComponent("/cobros", "Lista de Cobros", "Agregar Cobro", "cobros");
        this.initForm();
        this.isEmpty = true;
        var auxfields = this.dbHandler.getLocal(this.name + "Fields");
        var auxValues = this.dbHandler.getLocal(this.name + "Values");
        this.fields = ["Id", "Fecha", "Banco", "Monto"];
        this.values = [];
        auxValues.forEach(function (value) {
            var aux = [value._id, value.movimiento.fecha, value.banco, value.monto];
            _this.values.push(aux);
        });
        if (this.values.length) {
            this.isEmpty = false;
        }
    };
    ListaCobroComponent.prototype.initComponent = function (endpoint, title, addText, name) {
        this.endpoint = endpoint;
        this.title = title;
        this.addText = addText;
        this.name = name;
    };
    ListaCobroComponent.prototype.deleteItem = function (event, index) {
        var _this = this;
        var auxValues = this.dbHandler.getLocal(this.name + "Values");
        var item = auxValues[index];
        var myEnd = this.endpoint;
        var type = this.auth.getType();
        this.isAdmin = type === "Admin";
        this.isVendedor = type === "Vendedor";
        this.isSuperAdmin = type === "SuperAdmin";
        //Autorizacion basada en roles. Modificar eventualmente a basada en reglas
        console.log(this.isSuperAdmin);
        console.log(this.isAdmin);
        if (!this.isSuperAdmin) {
            this.closeConfirm();
            var errorMsg = "Usuario no autorizado";
            this.openError(errorMsg);
        }
        else {
            this.dbHandler.deleteSomething(item._id, myEnd).subscribe(function (data) {
                _this.closeConfirm();
                if (!data.status) {
                    var errorMsg = data.msg;
                    _this.openError(errorMsg);
                }
                else {
                    _this.dbHandler.actualizar();
                }
            });
        }
    };
    ListaCobroComponent.prototype.confirmDelete = function (event, item) {
        this.deletedItem = item;
        this.openConfirm();
    };
    ListaCobroComponent.prototype.openConfirm = function () {
        this.showConfirm = {
            confirmAct: true
        };
    };
    ListaCobroComponent.prototype.closeConfirm = function () {
        this.showConfirm = {
            confirmAct: false
        };
    };
    ListaCobroComponent.prototype.openUpdate = function (event, item) {
        this.router.navigateByUrl("/actualizar/cobro/" + item);
    };
    ListaCobroComponent.prototype.agregar = function () {
        this.router.navigateByUrl("/registro/cobro");
    };
    ListaCobroComponent.prototype.habilitarElemento = function (event, elemento, isHabilitar) { };
    ListaCobroComponent.prototype.initForm = function () {
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("")
        });
    };
    ListaCobroComponent.prototype.openError = function (msg) {
        this.errorMsg = msg;
        this.showError = {
            errorAct: true
        };
    };
    ListaCobroComponent.prototype.closeError = function () {
        this.showError = {
            errorAct: false
        };
    };
    ListaCobroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-lista-cobro",
            template: __webpack_require__(/*! ./lista-cobro.component.html */ "./src/app/dashboard/components/lista-cobro/lista-cobro.component.html"),
            styles: [__webpack_require__(/*! ./lista-cobro.component.scss */ "./src/app/dashboard/components/lista-cobro/lista-cobro.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], ListaCobroComponent);
    return ListaCobroComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/lista-compra/lista-compra.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-compra/lista-compra.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"btnBox\">\n  <button class=\"buttonBox\" (click)=\"agregar()\">\n    {{ addText }}\n  </button>\n</div>\n<div class=\"cardBox\" *ngIf=\"!isEmpty\">\n  <div class=\"listBox\">\n    <table class=\"classtable\">\n      <thead class=\"classthead\">\n        <tr class=\"classtr\">\n          <th class=\"classth\" scope=\"col\">Acciones</th>\n          <th class=\"classth\" scope=\"col\" *ngFor=\"let field of fields\">{{ field }}</th>\n        </tr>\n      </thead>\n      <tbody class=\"classtbody\">\n        <tr class=\"classtr\" *ngFor=\"let value of values; let i = index\">\n          <div class=\"btn-details\">\n            <fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEye\" size=\"2x\" (click)=\"verDetalle($event, i)\">\n            </fa-icon>\n            <fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEdit\" size=\"2x\" (click)=\"openUpdate($event, i)\">\n            </fa-icon>\n            <fa-icon style=\"color: red; stroke: black\" class=\"faIcon\" [icon]=\"faPdf\" size=\"2x\"\n              (click)=\"generatePdf($event, i)\"></fa-icon>\n            <fa-icon style=\"color: red\" class=\"faIcon\" [icon]=\"faTrash\" size=\"2x\" (click)=\"confirmDelete($event, i)\">\n            </fa-icon>\n          </div>\n\n          <td class=\"classtd\" *ngFor=\"let item of value\">\n            <p>{{ item }}</p>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n    <br><br>\n  </div>\n\n</div>\n<div class=\"cardBox\" *ngIf=\"isEmpty\">\n  <p>No hay elementos para mostrar</p>\n</div>\n\n<app-error class=\"errorBox\" [msg]='errorMsg' [ngClass]=\"showError\" (closeError)=\"closeError()\"></app-error>\n\n<div class=\"confirmBox\" [ngClass]=\"showConfirm\">\n  <div class=\"blackBox\" (click)=\"closeConfirm()\"></div>\n  <div class=\"logBox2\">\n    <p class=\"confirmHeader\">CONFIRMACIÓN</p>\n    <p class=\"confirmContent\">Segro que quiere eliminar este elemento</p>\n    <div class=\"confirmButtons\">\n      <button type=\"button\" class=\"confirm buttonBox\" (click)=\"deleteItem($event, deletedItem)\">\n        <p>SÍ</p>\n      </button>\n      <button type=\"button\" class=\"goback buttonBox\" (click)=\"closeConfirm()\">\n        <p>NO</p>\n      </button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/components/lista-compra/lista-compra.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-compra/lista-compra.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2xpc3RhLWNvbXByYS9saXN0YS1jb21wcmEuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/components/lista-compra/lista-compra.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-compra/lista-compra.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ListaCompraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaCompraComponent", function() { return ListaCompraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__);









pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default.a.pdfMake.vfs;
var ListaCompraComponent = /** @class */ (function () {
    function ListaCompraComponent(
    //    private pdf: PdfHandlerService,
    auth, dbHandler, router, fb) {
        this.auth = auth;
        this.dbHandler = dbHandler;
        this.router = router;
        this.fb = fb;
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTrashAlt"];
        this.faPdf = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faFilePdf"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEdit"];
        this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEye"];
        //    this.pdf.load('pdfMake', 'vfsFonts');
    }
    ListaCompraComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initComponent("/compras", "Lista de Compras", "Agregar Compra", "compras");
        this.initForm();
        this.isEmpty = true;
        var auxfields = this.dbHandler.getLocal(this.name + "Fields");
        var auxValues = this.dbHandler.getLocal(this.name + "Values");
        this.fields = [
            "Id",
            "Fecha",
            "Almacen",
            "Estado",
            "Observaciones",
            "Referencia de compra"
        ];
        this.values = [];
        auxValues.forEach(function (value) {
            var aux = [
                value._id,
                value.fecha,
                value.almacen,
                value.estado,
                value.observaciones,
                value.referencia
            ];
            _this.values.push(aux);
        });
        if (this.values.length) {
            this.isEmpty = false;
        }
    };
    ListaCompraComponent.prototype.initComponent = function (endpoint, title, addText, name) {
        this.endpoint = endpoint;
        this.title = title;
        this.addText = addText;
        this.name = name;
    };
    ListaCompraComponent.prototype.deleteItem = function (event, index) {
        var _this = this;
        var auxValues = this.dbHandler.getLocal(this.name + "Values");
        var item = auxValues[index];
        console.log(item);
        var myEnd = this.endpoint;
        var type = this.auth.getType();
        this.isAdmin = type === "Admin";
        this.isVendedor = type === "Vendedor";
        this.isSuperAdmin = type === "SuperAdmin";
        //Autorizacion basada en roles. Modificar eventualmente a basada en reglas
        console.log(this.isSuperAdmin);
        console.log(this.isAdmin);
        if (!(this.isAdmin || this.isSuperAdmin)) {
            this.closeConfirm();
            var errorMsg = "Usuario no autorizado";
            this.openError(errorMsg);
        }
        else {
            this.dbHandler.deleteSomething(item._id, myEnd).subscribe(function (data) {
                _this.closeConfirm();
                if (!data.status) {
                    var errorMsg = data.msg;
                    _this.openError(errorMsg);
                }
                else {
                    _this.dbHandler.actualizar();
                }
            });
        }
    };
    ListaCompraComponent.prototype.confirmDelete = function (event, item) {
        this.deletedItem = item;
        this.openConfirm();
    };
    ListaCompraComponent.prototype.openConfirm = function () {
        this.showConfirm = {
            confirmAct: true
        };
    };
    ListaCompraComponent.prototype.closeConfirm = function () {
        this.showConfirm = {
            confirmAct: false
        };
    };
    ListaCompraComponent.prototype.openUpdate = function (event, index) {
        this.router.navigateByUrl("/actualizar/compra/" + index);
    };
    ListaCompraComponent.prototype.agregar = function () {
        this.router.navigateByUrl("/registro/compra");
    };
    ListaCompraComponent.prototype.habilitarElemento = function (event, elemento, isHabilitar) { };
    ListaCompraComponent.prototype.openError = function (msg) {
        this.errorMsg = msg;
        this.showError = {
            errorAct: true
        };
    };
    ListaCompraComponent.prototype.closeError = function () {
        this.showError = {
            errorAct: false
        };
    };
    ListaCompraComponent.prototype.initForm = function () {
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("")
        });
    };
    ListaCompraComponent.prototype.generatePdf = function (event, i) {
        var documentDefinition = this.getDocumentDefinition(i);
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default.a.createPdf(documentDefinition).open();
    };
    ListaCompraComponent.prototype.getDocHeader = function (company, correlativo, fecha) {
        var headerLeft = [
            {
                text: company.name,
                style: "name"
            },
            {
                text: company.address
            },
            {
                text: "Correo : " + company.email
            },
            {
                text: "Teléfono : " + company.tlf
            }
        ];
        var headerRight = [
            this.getProfilePicObject(company),
            {
                text: correlativo
            },
            {
                text: fecha
            }
        ];
        return {
            columns: [headerLeft, headerRight]
        };
    };
    ListaCompraComponent.prototype.getDocumentDefinition = function (i) {
        var reporte = {
            titulo: "Reporte de " + this.name,
            subtituloA: "Detalle de " + this.name,
            subtituloB: "Productos ingresados"
        };
        var username = this.auth.getUsername();
        var compras = this.dbHandler.getLocal("comprasValues");
        var productos = this.dbHandler.getLocal("productosValues");
        var company = this.dbHandler.getLocal("companyValues")[0];
        var almacenes = this.dbHandler.getLocal("almacenesValues");
        console.log(company);
        var compra = compras[i];
        var id = compra._id;
        var fecha = compra.fecha;
        var observaciones = compra.observaciones;
        var productosIngresados = compra.productosIngresados;
        var fieldsA = ["Almacen", "Estatus", "Referencia"];
        var almacenId = compra.almacen;
        var almacenCode;
        almacenes.forEach(function (almacen) {
            if (almacen._id == almacenId) {
                almacenCode = almacen.code;
            }
        });
        var valuesA = [[almacenCode, compra.estado, compra.referencia]];
        var fieldsB = ["Producto", "Cantidad", "Costo unitario"];
        var valuesB = [];
        productosIngresados.forEach(function (productoIngresado) {
            var productoId = productoIngresado.producto;
            var qty = productoIngresado.qty;
            var costo = productoIngresado.unitcost;
            var productoName;
            productos.forEach(function (producto) {
                if (producto._id == productoId) {
                    productoName = producto.name;
                }
            });
            var aux = [productoName, qty, costo];
            valuesB.push(aux);
        });
        var correlativo = "";
        return {
            content: [
                {
                    text: reporte.titulo,
                    bold: true,
                    fontSize: 20,
                    alignment: "center",
                    margin: [0, 0, 0, 20]
                },
                this.getDocHeader(company, correlativo, fecha),
                {
                    text: reporte.subtituloA,
                    style: "header"
                },
                this.getValuesObject(fieldsA, valuesA),
                {
                    text: reporte.subtituloB,
                    style: "header"
                },
                this.getValuesObject(fieldsB, valuesB),
                {
                    text: "Observaciones",
                    style: "header"
                },
                {
                    text: observaciones
                },
                {
                    text: "Firmas",
                    style: "sign"
                },
                {
                    columns: [
                        { qr: id, fit: 100 },
                        {
                            text: "Procesado por",
                            alignment: "right"
                        }
                    ]
                }
            ],
            info: {
                title: reporte.titulo,
                author: username,
                subject: "REPORTE",
                keywords: "REPORTE, CONTROL"
            },
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    margin: [0, 20, 0, 10],
                    decoration: "underline"
                },
                name: {
                    fontSize: 16,
                    bold: true
                },
                jobTitle: {
                    fontSize: 14,
                    bold: true,
                    italics: true
                },
                sign: {
                    margin: [0, 50, 0, 10],
                    alignment: "right",
                    italics: true
                },
                tableHeader: {
                    bold: true
                }
            }
        };
    };
    ListaCompraComponent.prototype.getValuesObject = function (fields, values) {
        var titleRow = [];
        var widths = [];
        var titleContent = [];
        var wLength = fields.length;
        for (var i = 0; i < wLength; i++) {
            widths.push("*");
        }
        fields.forEach(function (field) {
            var aux = {
                text: field,
                style: "tableHeader"
            };
            titleRow.push(aux);
        });
        var aux = [];
        values.forEach(function (value) {
            value.forEach(function (item) {
                var auxb = {
                    text: item,
                    style: "tableContent"
                };
                aux.push(auxb);
            });
            titleContent.push(aux);
        });
        return {
            table: {
                widths: widths,
                body: [titleRow].concat(titleContent)
            }
        };
    };
    ListaCompraComponent.prototype.getProfilePicObject = function (company) {
        if (company.logo) {
            return {
                image: company.logo,
                width: 75,
                alignment: "right"
            };
        }
        return null;
    };
    ListaCompraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-lista-compra",
            template: __webpack_require__(/*! ./lista-compra.component.html */ "./src/app/dashboard/components/lista-compra/lista-compra.component.html"),
            styles: [__webpack_require__(/*! ./lista-compra.component.scss */ "./src/app/dashboard/components/lista-compra/lista-compra.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], ListaCompraComponent);
    return ListaCompraComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/lista-cuentas-por-cobrar/lista-cuentas-por-cobrar.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-cuentas-por-cobrar/lista-cuentas-por-cobrar.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"btnBox\">\n  <button class=\"buttonBox\" (click)=\"agregar()\">\n    {{ addText }}\n  </button>\n</div>\n<div class=\"cardBox\" *ngIf=\"!isEmpty\">\n  <div class=\"listBox\">\n    <table class=\"classtable\">\n      <thead class=\"classthead\">\n        <tr class=\"classtr\">\n          <th class=\"classth\" scope=\"col\">Acciones</th>\n          <th class=\"classth\" scope=\"col\" *ngFor=\"let field of fields\">{{ field }}</th>\n        </tr>\n      </thead>\n      <tbody class=\"classtbody\">\n        <tr class=\"classtr\" *ngFor=\"let value of values; let i = index\">\n          <div class=\"btn-details\">\n            <fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEye\" size=\"2x\" (click)=\"verDetalle($event, i)\">\n            </fa-icon>\n            <fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEdit\" size=\"2x\" (click)=\"openUpdate($event, i)\">\n            </fa-icon>\n            <fa-icon style=\"color: red; stroke: black\" class=\"faIcon\" [icon]=\"faPdf\" size=\"2x\"\n              (click)=\"generatePdf($event, i)\"></fa-icon>\n            <fa-icon style=\"color: red\" class=\"faIcon\" [icon]=\"faTrash\" size=\"2x\" (click)=\"confirmDelete($event, i)\">\n            </fa-icon>\n          </div>\n\n          <td class=\"classtd\" *ngFor=\"let item of value\">\n            <p>{{ item }}</p>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n    <br><br>\n  </div>\n\n</div>\n<div class=\"cardBox\" *ngIf=\"isEmpty\">\n  <p>No hay elementos para mostrar</p>\n</div>\n\n<app-error class=\"errorBox\" [msg]='errorMsg' [ngClass]=\"showError\" (closeError)=\"closeError()\"></app-error>\n\n<div class=\"confirmBox\" [ngClass]=\"showConfirm\">\n  <div class=\"blackBox\" (click)=\"closeConfirm()\"></div>\n  <div class=\"logBox2\">\n    <p class=\"confirmHeader\">CONFIRMACIÓN</p>\n    <p class=\"confirmContent\">Segro que quiere eliminar este elemento</p>\n    <div class=\"confirmButtons\">\n      <button type=\"button\" class=\"confirm buttonBox\" (click)=\"deleteItem($event, deletedItem)\">\n        <p>SÍ</p>\n      </button>\n      <button type=\"button\" class=\"goback buttonBox\" (click)=\"closeConfirm()\">\n        <p>NO</p>\n      </button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/components/lista-cuentas-por-cobrar/lista-cuentas-por-cobrar.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-cuentas-por-cobrar/lista-cuentas-por-cobrar.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2xpc3RhLWN1ZW50YXMtcG9yLWNvYnJhci9saXN0YS1jdWVudGFzLXBvci1jb2JyYXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/components/lista-cuentas-por-cobrar/lista-cuentas-por-cobrar.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-cuentas-por-cobrar/lista-cuentas-por-cobrar.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ListaCuentasPorCobrarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaCuentasPorCobrarComponent", function() { return ListaCuentasPorCobrarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__);









pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default.a.pdfMake.vfs;
var ListaCuentasPorCobrarComponent = /** @class */ (function () {
    function ListaCuentasPorCobrarComponent(auth, dbHandler, router, fb) {
        this.auth = auth;
        this.dbHandler = dbHandler;
        this.router = router;
        this.fb = fb;
        this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEye"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTrashAlt"];
        this.faPdf = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faFilePdf"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEdit"];
    }
    ListaCuentasPorCobrarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initComponent("/cuentasporcobrar", "Lista de Cuentas Por Cobrar", "Agregar Cuentas Por Cobrar", "cuentasporcobrar");
        this.initForm();
        this.isEmpty = true;
        var auxfields = this.dbHandler.getLocal(this.name + "Fields");
        var auxValues = this.dbHandler.getLocal(this.name + "Values");
        this.fields = ["Id", "Referencia", "Monto pendiente"];
        this.values = [];
        auxValues.forEach(function (value) {
            var aux = [value._id, value.referencia, value.balance];
            _this.values.push(aux);
        });
        if (this.values.length) {
            this.isEmpty = false;
        }
    };
    ListaCuentasPorCobrarComponent.prototype.initForm = function () {
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("")
        });
    };
    ListaCuentasPorCobrarComponent.prototype.initComponent = function (endpoint, title, addText, name) {
        this.endpoint = endpoint;
        this.title = title;
        this.addText = addText;
        this.name = name;
    };
    ListaCuentasPorCobrarComponent.prototype.deleteItem = function (event, index) {
        var _this = this;
        var auxValues = this.dbHandler.getLocal(this.name + "Values");
        var item = auxValues[index];
        var myEnd = this.endpoint;
        var type = this.auth.getType();
        this.isAdmin = type === "Admin";
        this.isVendedor = type === "Vendedor";
        this.isSuperAdmin = type === "SuperAdmin";
        //Autorizacion basada en roles. Modificar eventualmente a basada en reglas
        console.log(this.isSuperAdmin);
        console.log(this.isAdmin);
        if (!(this.isAdmin || this.isSuperAdmin)) {
            this.closeConfirm();
            var errorMsg = "Usuario no autorizado";
            this.openError(errorMsg);
        }
        else {
            this.dbHandler.deleteSomething(item._id, myEnd).subscribe(function (data) {
                _this.closeConfirm();
                if (!data.status) {
                    var errorMsg = data.msg;
                    _this.openError(errorMsg);
                }
                else {
                    _this.dbHandler.actualizar();
                }
            });
        }
    };
    ListaCuentasPorCobrarComponent.prototype.confirmDelete = function (event, item) {
        this.deletedItem = item;
        this.openConfirm();
    };
    ListaCuentasPorCobrarComponent.prototype.openConfirm = function () {
        this.showConfirm = {
            confirmAct: true
        };
    };
    ListaCuentasPorCobrarComponent.prototype.closeConfirm = function () {
        this.showConfirm = {
            confirmAct: false
        };
    };
    ListaCuentasPorCobrarComponent.prototype.openUpdate = function (event, item) {
        this.router.navigateByUrl("/actualizar/cuentaporcobrar/" + item);
    };
    ListaCuentasPorCobrarComponent.prototype.agregar = function () {
        this.router.navigateByUrl("/registro/cuentaporcobrar");
    };
    ListaCuentasPorCobrarComponent.prototype.habilitarElemento = function (event, elemento, isHabilitar) { };
    ListaCuentasPorCobrarComponent.prototype.openError = function (msg) {
        this.errorMsg = msg;
        this.showError = {
            errorAct: true
        };
    };
    ListaCuentasPorCobrarComponent.prototype.closeError = function () {
        this.showError = {
            errorAct: false
        };
    };
    ListaCuentasPorCobrarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-lista-cuentas-por-cobrar",
            template: __webpack_require__(/*! ./lista-cuentas-por-cobrar.component.html */ "./src/app/dashboard/components/lista-cuentas-por-cobrar/lista-cuentas-por-cobrar.component.html"),
            styles: [__webpack_require__(/*! ./lista-cuentas-por-cobrar.component.scss */ "./src/app/dashboard/components/lista-cuentas-por-cobrar/lista-cuentas-por-cobrar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], ListaCuentasPorCobrarComponent);
    return ListaCuentasPorCobrarComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/lista-cuentas-por-pagar/lista-cuentas-por-pagar.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-cuentas-por-pagar/lista-cuentas-por-pagar.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"btnBox\">\n  <button class=\"buttonBox\" (click)=\"agregar()\">\n    {{ addText }}\n  </button>\n</div>\n<div class=\"cardBox\" *ngIf=\"!isEmpty\">\n  <div class=\"listBox\">\n    <table class=\"classtable\">\n      <thead class=\"classthead\">\n        <tr class=\"classtr\">\n          <th class=\"classth\" scope=\"col\">Acciones</th>\n          <th class=\"classth\" scope=\"col\" *ngFor=\"let field of fields\">{{ field }}</th>\n        </tr>\n      </thead>\n      <tbody class=\"classtbody\">\n        <tr class=\"classtr\" *ngFor=\"let value of values; let i = index\">\n          <div class=\"btn-details\">\n            <fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEye\" size=\"2x\" (click)=\"verDetalle($event, i)\">\n            </fa-icon>\n            <fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEdit\" size=\"2x\" (click)=\"openUpdate($event, i)\">\n            </fa-icon>\n            <fa-icon style=\"color: red; stroke: black\" class=\"faIcon\" [icon]=\"faPdf\" size=\"2x\"\n              (click)=\"generatePdf($event, i)\"></fa-icon>\n            <fa-icon style=\"color: red\" class=\"faIcon\" [icon]=\"faTrash\" size=\"2x\" (click)=\"confirmDelete($event, i)\">\n            </fa-icon>\n          </div>\n\n          <td class=\"classtd\" *ngFor=\"let item of value\">\n            <p>{{ item }}</p>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n    <br><br>\n  </div>\n\n</div>\n<div class=\"cardBox\" *ngIf=\"isEmpty\">\n  <p>No hay elementos para mostrar</p>\n</div>\n\n<app-error class=\"errorBox\" [msg]='errorMsg' [ngClass]=\"showError\" (closeError)=\"closeError()\"></app-error>\n\n<div class=\"confirmBox\" [ngClass]=\"showConfirm\">\n  <div class=\"blackBox\" (click)=\"closeConfirm()\"></div>\n  <div class=\"logBox2\">\n    <p class=\"confirmHeader\">CONFIRMACIÓN</p>\n    <p class=\"confirmContent\">Segro que quiere eliminar este elemento</p>\n    <div class=\"confirmButtons\">\n      <button type=\"button\" class=\"confirm buttonBox\" (click)=\"deleteItem($event, deletedItem)\">\n        <p>SÍ</p>\n      </button>\n      <button type=\"button\" class=\"goback buttonBox\" (click)=\"closeConfirm()\">\n        <p>NO</p>\n      </button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/components/lista-cuentas-por-pagar/lista-cuentas-por-pagar.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-cuentas-por-pagar/lista-cuentas-por-pagar.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2xpc3RhLWN1ZW50YXMtcG9yLXBhZ2FyL2xpc3RhLWN1ZW50YXMtcG9yLXBhZ2FyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/components/lista-cuentas-por-pagar/lista-cuentas-por-pagar.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-cuentas-por-pagar/lista-cuentas-por-pagar.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ListaCuentasPorPagarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaCuentasPorPagarComponent", function() { return ListaCuentasPorPagarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__);









pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default.a.pdfMake.vfs;
var ListaCuentasPorPagarComponent = /** @class */ (function () {
    function ListaCuentasPorPagarComponent(auth, dbHandler, router, fb) {
        this.auth = auth;
        this.dbHandler = dbHandler;
        this.router = router;
        this.fb = fb;
        this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEye"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTrashAlt"];
        this.faPdf = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faFilePdf"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEdit"];
    }
    ListaCuentasPorPagarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initComponent("/cuentasporpagar", "Lista de Cuentas Por Pagar", "Agregar Cuentas Por Pagar", "cuentasporpagar");
        this.initForm();
        this.isEmpty = true;
        var auxfields = this.dbHandler.getLocal(this.name + "Fields");
        var auxValues = this.dbHandler.getLocal(this.name + "Values");
        this.fields = ["Id", "Referencia", "Monto pendiente"];
        this.values = [];
        auxValues.forEach(function (value) {
            var aux = [value._id, value.referencia, value.balance];
            _this.values.push(aux);
        });
        if (this.values.length) {
            this.isEmpty = false;
        }
    };
    ListaCuentasPorPagarComponent.prototype.initForm = function () {
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("")
        });
    };
    ListaCuentasPorPagarComponent.prototype.initComponent = function (endpoint, title, addText, name) {
        this.endpoint = endpoint;
        this.title = title;
        this.addText = addText;
        this.name = name;
    };
    ListaCuentasPorPagarComponent.prototype.deleteItem = function (event, index) {
        var _this = this;
        var auxValues = this.dbHandler.getLocal(this.name + "Values");
        var item = auxValues[index];
        var myEnd = this.endpoint;
        var type = this.auth.getType();
        this.isAdmin = type === "Admin";
        this.isVendedor = type === "Vendedor";
        this.isSuperAdmin = type === "SuperAdmin";
        //Autorizacion basada en roles. Modificar eventualmente a basada en reglas
        console.log(this.isSuperAdmin);
        console.log(this.isAdmin);
        if (!(this.isAdmin || this.isSuperAdmin)) {
            this.closeConfirm();
            var errorMsg = "Usuario no autorizado";
            this.openError(errorMsg);
        }
        else {
            this.dbHandler.deleteSomething(item._id, myEnd).subscribe(function (data) {
                _this.closeConfirm();
                if (!data.status) {
                    var errorMsg = data.msg;
                    _this.openError(errorMsg);
                }
                else {
                    _this.dbHandler.actualizar();
                }
            });
        }
    };
    ListaCuentasPorPagarComponent.prototype.confirmDelete = function (event, item) {
        this.deletedItem = item;
        this.openConfirm();
    };
    ListaCuentasPorPagarComponent.prototype.openConfirm = function () {
        this.showConfirm = {
            confirmAct: true
        };
    };
    ListaCuentasPorPagarComponent.prototype.closeConfirm = function () {
        this.showConfirm = {
            confirmAct: false
        };
    };
    ListaCuentasPorPagarComponent.prototype.openUpdate = function (event, item) {
        this.router.navigateByUrl("/actualizar/cuentaporpagar/" + item);
    };
    ListaCuentasPorPagarComponent.prototype.agregar = function () {
        this.router.navigateByUrl("/registro/cuentaporpagar");
    };
    ListaCuentasPorPagarComponent.prototype.habilitarElemento = function (event, elemento, isHabilitar) { };
    ListaCuentasPorPagarComponent.prototype.openError = function (msg) {
        this.errorMsg = msg;
        this.showError = {
            errorAct: true
        };
    };
    ListaCuentasPorPagarComponent.prototype.closeError = function () {
        this.showError = {
            errorAct: false
        };
    };
    ListaCuentasPorPagarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-lista-cuentas-por-pagar",
            template: __webpack_require__(/*! ./lista-cuentas-por-pagar.component.html */ "./src/app/dashboard/components/lista-cuentas-por-pagar/lista-cuentas-por-pagar.component.html"),
            styles: [__webpack_require__(/*! ./lista-cuentas-por-pagar.component.scss */ "./src/app/dashboard/components/lista-cuentas-por-pagar/lista-cuentas-por-pagar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], ListaCuentasPorPagarComponent);
    return ListaCuentasPorPagarComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/lista-cuentas-t/lista-cuentas-t.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-cuentas-t/lista-cuentas-t.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"buttonBox\" (click)=\"agregar()\">\n  {{ addText }}\n</button>\n\n<div class=\"cardBox\" *ngIf=\"!isEmpty\">\n  <div class=\"listBox\">\n    <div class=\"titleRow\">\n      <p style=\"width: 250px;\">Acciones</p>\n      <p *ngFor=\"let field of fields\">{{ field }}</p>\n    </div>\n    <div class=\"contentRow\" *ngFor=\"let value of values; let i = index\">\n      <div class=\"actionBox\" style=\"width: 250px;\">\n\n        <fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEye\" size=\"2x\" (click)=\"verDetalle($event, i)\"></fa-icon>\n        <fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEdit\" size=\"2x\" (click)=\"openUpdate($event, i)\"></fa-icon>\n        <fa-icon style=\"color: red; stroke: black\" class=\"faIcon\" [icon]=\"faPdf\" size=\"2x\"\n          (click)=\"generatePdf($event, i)\"></fa-icon>\n        <fa-icon style=\"color: red\" class=\"faIcon\" [icon]=\"faTrash\" size=\"2x\" (click)=\"confirmDelete($event, i)\">\n        </fa-icon>\n\n      </div>\n      <div *ngFor=\"let item of value\">\n        <p>{{ item }}</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"cardBox\" *ngIf=\"isEmpty\">\n  <p>No hay elementos para mostrar</p>\n</div>\n\n<app-error class=\"errorBox\" [msg]='errorMsg' [ngClass]=\"showError\" (closeError)=\"closeError()\"></app-error>\n\n<div class=\"confirmBox\" [ngClass]=\"showConfirm\">\n  <div class=\"blackBox\" (click)=\"closeConfirm()\"></div>\n\n  <div class=\"logBox\">\n    <div class=\"closeButton\">\n      <button class=\"closeB\" (click)=\"closeConfirm()\">X</button>\n    </div>\n    <p class=\"confirmHeader\">CONFIRMACIÓN</p>\n    <p class=\"confirmContent\">Segro que quiere eliminar este elemento</p>\n    <div class=\"confirmButtons\">\n      <button type=\"button\" class=\"confirm formButton\" (click)=\"deleteItem($event, deletedItem)\">\n        <p>SÍ</p>\n      </button>\n      <button type=\"button\" class=\"goback formButton\" (click)=\"closeConfirm()\">\n        <p>NO</p>\n      </button>\n    </div>\n\n  </div>"

/***/ }),

/***/ "./src/app/dashboard/components/lista-cuentas-t/lista-cuentas-t.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-cuentas-t/lista-cuentas-t.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2xpc3RhLWN1ZW50YXMtdC9saXN0YS1jdWVudGFzLXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/components/lista-cuentas-t/lista-cuentas-t.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-cuentas-t/lista-cuentas-t.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ListaCuentasTComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaCuentasTComponent", function() { return ListaCuentasTComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__);









pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default.a.pdfMake.vfs;
var ListaCuentasTComponent = /** @class */ (function () {
    function ListaCuentasTComponent(auth, dbHandler, router, fb) {
        this.auth = auth;
        this.dbHandler = dbHandler;
        this.router = router;
        this.fb = fb;
        this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEye"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTrashAlt"];
        this.faPdf = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faFilePdf"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEdit"];
    }
    ListaCuentasTComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initComponent("/cuentast", "Lista de Cuentas T", "Agregar Cuentas T", "cuentast");
        this.initForm();
        this.isEmpty = true;
        var auxfields = this.dbHandler.getLocal(this.name + "Fields");
        var auxValues = this.dbHandler.getLocal(this.name + "Values");
        this.fields = ["Id", "Nombre", "Clasificacion", "Naturaleza"];
        this.values = [];
        auxValues.forEach(function (value) {
            var aux = [value._id, value.name, value.clasificacion, value.naturaleza];
            _this.values.push(aux);
        });
        if (this.values.length) {
            this.isEmpty = false;
        }
    };
    ListaCuentasTComponent.prototype.initForm = function () {
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("")
        });
    };
    ListaCuentasTComponent.prototype.initComponent = function (endpoint, title, addText, name) {
        this.endpoint = endpoint;
        this.title = title;
        this.addText = addText;
        this.name = name;
    };
    ListaCuentasTComponent.prototype.deleteItem = function (event, index) {
        var _this = this;
        var auxValues = this.dbHandler.getLocal(this.name + "Values");
        var item = auxValues[index];
        var myEnd = this.endpoint;
        var type = this.auth.getType();
        this.isAdmin = type === "Admin";
        this.isVendedor = type === "Vendedor";
        this.isSuperAdmin = type === "SuperAdmin";
        //Autorizacion basada en roles. Modificar eventualmente a basada en reglas
        console.log(this.isSuperAdmin);
        console.log(this.isAdmin);
        if (!(this.isAdmin || this.isSuperAdmin)) {
            this.closeConfirm();
            var errorMsg = "Usuario no autorizado";
            this.openError(errorMsg);
        }
        else {
            this.dbHandler.deleteSomething(item._id, myEnd).subscribe(function (data) {
                _this.closeConfirm();
                if (!data.status) {
                    var errorMsg = data.msg;
                    _this.openError(errorMsg);
                }
                else {
                    _this.dbHandler.actualizar();
                }
            });
        }
    };
    ListaCuentasTComponent.prototype.confirmDelete = function (event, item) {
        this.deletedItem = item;
        this.openConfirm();
    };
    ListaCuentasTComponent.prototype.openConfirm = function () {
        this.showConfirm = {
            confirmAct: true
        };
    };
    ListaCuentasTComponent.prototype.closeConfirm = function () {
        this.showConfirm = {
            confirmAct: false
        };
    };
    ListaCuentasTComponent.prototype.openUpdate = function (event, item) {
        this.router.navigateByUrl("/actualizar/cuentat/" + item);
    };
    ListaCuentasTComponent.prototype.agregar = function () {
        this.router.navigateByUrl("/registro/cuentat");
    };
    ListaCuentasTComponent.prototype.habilitarElemento = function (event, elemento, isHabilitar) { };
    ListaCuentasTComponent.prototype.openError = function (msg) {
        this.errorMsg = msg;
        this.showError = {
            errorAct: true
        };
    };
    ListaCuentasTComponent.prototype.closeError = function () {
        this.showError = {
            errorAct: false
        };
    };
    ListaCuentasTComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-lista-cuentas-t",
            template: __webpack_require__(/*! ./lista-cuentas-t.component.html */ "./src/app/dashboard/components/lista-cuentas-t/lista-cuentas-t.component.html"),
            styles: [__webpack_require__(/*! ./lista-cuentas-t.component.scss */ "./src/app/dashboard/components/lista-cuentas-t/lista-cuentas-t.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], ListaCuentasTComponent);
    return ListaCuentasTComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/lista-egreso/lista-egreso.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-egreso/lista-egreso.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  lista-egreso works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/components/lista-egreso/lista-egreso.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-egreso/lista-egreso.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2xpc3RhLWVncmVzby9saXN0YS1lZ3Jlc28uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/components/lista-egreso/lista-egreso.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-egreso/lista-egreso.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ListaEgresoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaEgresoComponent", function() { return ListaEgresoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_3__);




pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_2___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_3___default.a.pdfMake.vfs;
var ListaEgresoComponent = /** @class */ (function () {
    function ListaEgresoComponent() {
    }
    ListaEgresoComponent.prototype.ngOnInit = function () { };
    ListaEgresoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-lista-egreso",
            template: __webpack_require__(/*! ./lista-egreso.component.html */ "./src/app/dashboard/components/lista-egreso/lista-egreso.component.html"),
            styles: [__webpack_require__(/*! ./lista-egreso.component.scss */ "./src/app/dashboard/components/lista-egreso/lista-egreso.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListaEgresoComponent);
    return ListaEgresoComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/lista-gasto/lista-gasto.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-gasto/lista-gasto.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"btnBox\">\n  <button class=\"buttonBox\" (click)=\"agregar()\">\n    {{ addText }}\n  </button>\n</div>\n<div class=\"cardBox\" *ngIf=\"!isEmpty\">\n  <div class=\"listBox\">\n    <table class=\"classtable\">\n      <thead class=\"classthead\">\n        <tr class=\"classtr\">\n          <th class=\"classth\" scope=\"col\">Acciones</th>\n          <th class=\"classth\" scope=\"col\" *ngFor=\"let field of fields\">{{ field }}</th>\n        </tr>\n      </thead>\n      <tbody class=\"classtbody\">\n        <tr class=\"classtr\" *ngFor=\"let value of values; let i = index\">\n          <div class=\"btn-details\">\n            <fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEye\" size=\"2x\" (click)=\"verDetalle($event, i)\">\n            </fa-icon>\n            <fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEdit\" size=\"2x\" (click)=\"openUpdate($event, i)\">\n            </fa-icon>\n            <fa-icon style=\"color: red; stroke: black\" class=\"faIcon\" [icon]=\"faPdf\" size=\"2x\"\n              (click)=\"generatePdf($event, i)\"></fa-icon>\n            <fa-icon style=\"color: red\" class=\"faIcon\" [icon]=\"faTrash\" size=\"2x\" (click)=\"confirmDelete($event, i)\">\n            </fa-icon>\n          </div>\n\n          <td class=\"classtd\" *ngFor=\"let item of value\">\n            <p>{{ item }}</p>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n    <br><br>\n  </div>\n\n</div>\n<div class=\"cardBox\" *ngIf=\"isEmpty\">\n  <p>No hay elementos para mostrar</p>\n</div>\n\n\n<app-error class=\"errorBox\" [msg]='errorMsg' [ngClass]=\"showError\" (closeError)=\"closeError()\"></app-error>\n\n<div class=\"confirmBox\" [ngClass]=\"showConfirm\">\n  <div class=\"blackBox\" (click)=\"closeConfirm()\"></div>\n  <div class=\"logBox2\">\n    <p class=\"confirmHeader\">CONFIRMACIÓN</p>\n    <p class=\"confirmContent\">Segro que quiere eliminar este elemento</p>\n    <div class=\"confirmButtons\">\n      <button type=\"button\" class=\"confirm buttonBox\" (click)=\"deleteItem($event, deletedItem)\">\n        <p>SÍ</p>\n      </button>\n      <button type=\"button\" class=\"goback buttonBox\" (click)=\"closeConfirm()\">\n        <p>NO</p>\n      </button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/components/lista-gasto/lista-gasto.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-gasto/lista-gasto.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2xpc3RhLWdhc3RvL2xpc3RhLWdhc3RvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/components/lista-gasto/lista-gasto.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-gasto/lista-gasto.component.ts ***!
  \***************************************************************************/
/*! exports provided: ListaGastoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaGastoComponent", function() { return ListaGastoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__);









pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default.a.pdfMake.vfs;
var ListaGastoComponent = /** @class */ (function () {
    function ListaGastoComponent(auth, dbHandler, router, fb) {
        this.auth = auth;
        this.dbHandler = dbHandler;
        this.router = router;
        this.fb = fb;
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTrashAlt"];
        this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEye"];
        this.faPdf = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faFilePdf"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEdit"];
    }
    ListaGastoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initComponent("/gastos", "Lista de Gastos", "Agregar Gasto", "gastos");
        this.initForm();
        this.isEmpty = true;
        var auxfields = this.dbHandler.getLocal(this.name + "Fields");
        var auxValues = this.dbHandler.getLocal(this.name + "Values");
        this.fields = [
            "Id",
            "Descripcion",
            "Monto Total",
            "Monto Pendiente",
            "Cliente"
        ];
        this.values = [];
        auxValues.forEach(function (value) {
            var aux = [
                value._id,
                value.descripcion,
                value.montoTotal,
                value.montoPendiente,
                value.cliente.name
            ];
            _this.values.push(aux);
        });
        if (this.values.length) {
            this.isEmpty = false;
        }
    };
    ListaGastoComponent.prototype.initComponent = function (endpoint, title, addText, name) {
        this.endpoint = endpoint;
        this.title = title;
        this.addText = addText;
        this.name = name;
    };
    ListaGastoComponent.prototype.deleteItem = function (event, index) {
        var _this = this;
        var auxValues = this.dbHandler.getLocal(this.name + "Values");
        var item = auxValues[index];
        var myEnd = this.endpoint;
        var type = this.auth.getType();
        this.isAdmin = type === "Admin";
        this.isVendedor = type === "Vendedor";
        this.isSuperAdmin = type === "SuperAdmin";
        //Autorizacion basada en roles. Modificar eventualmente a basada en reglas
        console.log(this.isSuperAdmin);
        console.log(this.isAdmin);
        if (!this.isSuperAdmin) {
            this.closeConfirm();
            var errorMsg = "Usuario no autorizado";
            this.openError(errorMsg);
        }
        else {
            this.dbHandler.deleteSomething(item._id, myEnd).subscribe(function (data) {
                _this.closeConfirm();
                if (!data.status) {
                    var errorMsg = data.msg;
                    _this.openError(errorMsg);
                }
                else {
                    _this.dbHandler.actualizar();
                }
            });
        }
    };
    ListaGastoComponent.prototype.confirmDelete = function (event, item) {
        this.deletedItem = item;
        this.openConfirm();
    };
    ListaGastoComponent.prototype.openConfirm = function () {
        this.showConfirm = {
            confirmAct: true
        };
    };
    ListaGastoComponent.prototype.closeConfirm = function () {
        this.showConfirm = {
            confirmAct: false
        };
    };
    ListaGastoComponent.prototype.openUpdate = function (event, item) {
        this.router.navigateByUrl("/actualizar/gasto/" + item);
    };
    ListaGastoComponent.prototype.agregar = function () {
        this.router.navigateByUrl("/registro/gasto");
    };
    ListaGastoComponent.prototype.habilitarElemento = function (event, elemento, isHabilitar) { };
    ListaGastoComponent.prototype.initForm = function () {
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("")
        });
    };
    ListaGastoComponent.prototype.openError = function (msg) {
        this.errorMsg = msg;
        this.showError = {
            errorAct: true
        };
    };
    ListaGastoComponent.prototype.closeError = function () {
        this.showError = {
            errorAct: false
        };
    };
    ListaGastoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-lista-gasto",
            template: __webpack_require__(/*! ./lista-gasto.component.html */ "./src/app/dashboard/components/lista-gasto/lista-gasto.component.html"),
            styles: [__webpack_require__(/*! ./lista-gasto.component.scss */ "./src/app/dashboard/components/lista-gasto/lista-gasto.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], ListaGastoComponent);
    return ListaGastoComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/lista-movimiento-diario/lista-movimiento-diario.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-movimiento-diario/lista-movimiento-diario.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"buttonBox\" (click)=\"agregar()\">\n  {{ addText }}\n</button>\n\n<div class=\"cardBox\" *ngIf=\"!isEmpty\">\n  <div class=\"listBox\">\n    <div class=\"titleRow\">\n      <p style=\"width: 250px;\">Acciones</p>\n      <p *ngFor=\"let field of fields\">{{ field }}</p>\n    </div>\n    <div class=\"contentRow\" *ngFor=\"let value of values; let i = index\">\n      <div class=\"actionBox\" style=\"width: 250px;\">\n\n        <fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEye\" size=\"2x\" (click)=\"verDetalle($event, i)\"></fa-icon>\n        <fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEdit\" size=\"2x\" (click)=\"openUpdate($event, i)\"></fa-icon>\n        <fa-icon style=\"color: red; stroke: black\" class=\"faIcon\" [icon]=\"faPdf\" size=\"2x\"\n          (click)=\"generatePdf($event, i)\"></fa-icon>\n        <fa-icon style=\"color: red\" class=\"faIcon\" [icon]=\"faTrash\" size=\"2x\" (click)=\"confirmDelete($event, i)\">\n        </fa-icon>\n\n      </div>\n      <div *ngFor=\"let item of value\">\n        <p>{{ item }}</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"cardBox\" *ngIf=\"isEmpty\">\n  <p>No hay elementos para mostrar</p>\n</div>\n\n<app-error class=\"errorBox\" [msg]='errorMsg' [ngClass]=\"showError\" (closeError)=\"closeError()\"></app-error>\n\n<div class=\"confirmBox\" [ngClass]=\"showConfirm\">\n  <div class=\"blackBox\" (click)=\"closeConfirm()\"></div>\n\n  <div class=\"logBox\">\n    <div class=\"closeButton\">\n      <button class=\"closeB\" (click)=\"closeConfirm()\">X</button>\n    </div>\n    <p class=\"confirmHeader\">CONFIRMACIÓN</p>\n    <p class=\"confirmContent\">Segro que quiere eliminar este elemento</p>\n    <div class=\"confirmButtons\">\n      <button type=\"button\" class=\"confirm formButton\" (click)=\"deleteItem($event, deletedItem)\">\n        <p>SÍ</p>\n      </button>\n      <button type=\"button\" class=\"goback formButton\" (click)=\"closeConfirm()\">\n        <p>NO</p>\n      </button>\n    </div>\n\n  </div>"

/***/ }),

/***/ "./src/app/dashboard/components/lista-movimiento-diario/lista-movimiento-diario.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-movimiento-diario/lista-movimiento-diario.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2xpc3RhLW1vdmltaWVudG8tZGlhcmlvL2xpc3RhLW1vdmltaWVudG8tZGlhcmlvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/components/lista-movimiento-diario/lista-movimiento-diario.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-movimiento-diario/lista-movimiento-diario.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ListaMovimientoDiarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaMovimientoDiarioComponent", function() { return ListaMovimientoDiarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__);









pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default.a.pdfMake.vfs;
var ListaMovimientoDiarioComponent = /** @class */ (function () {
    function ListaMovimientoDiarioComponent(auth, dbHandler, router, fb) {
        this.auth = auth;
        this.dbHandler = dbHandler;
        this.router = router;
        this.fb = fb;
        this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEye"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTrashAlt"];
        this.faPdf = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faFilePdf"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEdit"];
    }
    ListaMovimientoDiarioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initComponent("/movimientosdiarios", "Lista de Movimientos Diarios", "Agregar Movimiento Diario", "movimientosdiarios");
        this.initForm();
        this.isEmpty = true;
        var auxfields = this.dbHandler.getLocal(this.name + "Fields");
        var auxValues = this.dbHandler.getLocal(this.name + "Values");
        this.fields = [
            "Id",
            "Fecha",
            "Banco",
            "Descripción",
            "Referencia",
            "Abonos",
            "Cargos",
            "Saldo Inicial",
            "Saldo Final"
        ];
        this.values = [];
        auxValues.forEach(function (value) {
            var aux = [
                value._id,
                value.fecha,
                value.banco,
                value.descripcion,
                value.referencia,
                value.abonos,
                value.cargos,
                value.saldoInicial,
                value.saldoFinal
            ];
            _this.values.push(aux);
        });
        if (this.values.length) {
            this.isEmpty = false;
        }
    };
    ListaMovimientoDiarioComponent.prototype.initForm = function () {
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("")
        });
    };
    ListaMovimientoDiarioComponent.prototype.initComponent = function (endpoint, title, addText, name) {
        this.endpoint = endpoint;
        this.title = title;
        this.addText = addText;
        this.name = name;
    };
    ListaMovimientoDiarioComponent.prototype.deleteItem = function (event, index) {
        var _this = this;
        var auxValues = this.dbHandler.getLocal(this.name + "Values");
        var item = auxValues[index];
        var myEnd = this.endpoint;
        var type = this.auth.getType();
        this.isAdmin = type === "Admin";
        this.isVendedor = type === "Vendedor";
        this.isSuperAdmin = type === "SuperAdmin";
        //Autorizacion basada en roles. Modificar eventualmente a basada en reglas
        console.log(this.isSuperAdmin);
        console.log(this.isAdmin);
        if (!(this.isAdmin || this.isSuperAdmin)) {
            this.closeConfirm();
            var errorMsg = "Usuario no autorizado";
            this.openError(errorMsg);
        }
        else {
            this.dbHandler.deleteSomething(item._id, myEnd).subscribe(function (data) {
                _this.closeConfirm();
                if (!data.status) {
                    var errorMsg = data.msg;
                    _this.openError(errorMsg);
                }
                else {
                    _this.dbHandler.actualizar();
                }
            });
        }
    };
    ListaMovimientoDiarioComponent.prototype.confirmDelete = function (event, item) {
        this.deletedItem = item;
        this.openConfirm();
    };
    ListaMovimientoDiarioComponent.prototype.openConfirm = function () {
        this.showConfirm = {
            confirmAct: true
        };
    };
    ListaMovimientoDiarioComponent.prototype.closeConfirm = function () {
        this.showConfirm = {
            confirmAct: false
        };
    };
    ListaMovimientoDiarioComponent.prototype.openUpdate = function (event, item) {
        this.router.navigateByUrl("/actualizar/proforma/" + item);
    };
    ListaMovimientoDiarioComponent.prototype.agregar = function () {
        this.router.navigateByUrl("/registro/proforma");
    };
    ListaMovimientoDiarioComponent.prototype.habilitarElemento = function (event, elemento, isHabilitar) { };
    ListaMovimientoDiarioComponent.prototype.openError = function (msg) {
        this.errorMsg = msg;
        this.showError = {
            errorAct: true
        };
    };
    ListaMovimientoDiarioComponent.prototype.closeError = function () {
        this.showError = {
            errorAct: false
        };
    };
    ListaMovimientoDiarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-lista-movimiento-diario",
            template: __webpack_require__(/*! ./lista-movimiento-diario.component.html */ "./src/app/dashboard/components/lista-movimiento-diario/lista-movimiento-diario.component.html"),
            styles: [__webpack_require__(/*! ./lista-movimiento-diario.component.scss */ "./src/app/dashboard/components/lista-movimiento-diario/lista-movimiento-diario.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], ListaMovimientoDiarioComponent);
    return ListaMovimientoDiarioComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/lista-pago/lista-pago.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-pago/lista-pago.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"btnBox\">\n  <button class=\"buttonBox\" (click)=\"agregar()\">\n    {{ addText }}\n  </button>\n</div>\n<div class=\"cardBox\" *ngIf=\"!isEmpty\">\n  <div class=\"listBox\">\n    <table class=\"classtable\">\n      <thead class=\"classthead\">\n        <tr class=\"classtr\">\n          <th class=\"classth\" scope=\"col\">Acciones</th>\n          <th class=\"classth\" scope=\"col\" *ngFor=\"let field of fields\">{{ field }}</th>\n        </tr>\n      </thead>\n      <tbody class=\"classtbody\">\n        <tr class=\"classtr\" *ngFor=\"let value of values; let i = index\">\n          <div class=\"btn-details\">\n            <fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEye\" size=\"2x\" (click)=\"verDetalle($event, i)\">\n            </fa-icon>\n            <fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEdit\" size=\"2x\" (click)=\"openUpdate($event, i)\">\n            </fa-icon>\n            <fa-icon style=\"color: red; stroke: black\" class=\"faIcon\" [icon]=\"faPdf\" size=\"2x\"\n              (click)=\"generatePdf($event, i)\"></fa-icon>\n            <fa-icon style=\"color: red\" class=\"faIcon\" [icon]=\"faTrash\" size=\"2x\" (click)=\"confirmDelete($event, i)\">\n            </fa-icon>\n          </div>\n\n          <td class=\"classtd\" *ngFor=\"let item of value\">\n            <p>{{ item }}</p>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n    <br><br>\n  </div>\n\n</div>\n<div class=\"cardBox\" *ngIf=\"isEmpty\">\n  <p>No hay elementos para mostrar</p>\n</div>\n\n\n<app-error class=\"errorBox\" [msg]='errorMsg' [ngClass]=\"showError\" (closeError)=\"closeError()\"></app-error>\n\n<div class=\"confirmBox\" [ngClass]=\"showConfirm\">\n  <div class=\"blackBox\" (click)=\"closeConfirm()\"></div>\n  <div class=\"logBox2\">\n    <p class=\"confirmHeader\">CONFIRMACIÓN</p>\n    <p class=\"confirmContent\">Segro que quiere eliminar este elemento</p>\n    <div class=\"confirmButtons\">\n      <button type=\"button\" class=\"confirm buttonBox\" (click)=\"deleteItem($event, deletedItem)\">\n        <p>SÍ</p>\n      </button>\n      <button type=\"button\" class=\"goback buttonBox\" (click)=\"closeConfirm()\">\n        <p>NO</p>\n      </button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/components/lista-pago/lista-pago.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-pago/lista-pago.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2xpc3RhLXBhZ28vbGlzdGEtcGFnby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/components/lista-pago/lista-pago.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-pago/lista-pago.component.ts ***!
  \*************************************************************************/
/*! exports provided: ListaPagoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaPagoComponent", function() { return ListaPagoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__);









pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default.a.pdfMake.vfs;
var ListaPagoComponent = /** @class */ (function () {
    function ListaPagoComponent(auth, dbHandler, router, fb) {
        this.auth = auth;
        this.dbHandler = dbHandler;
        this.router = router;
        this.fb = fb;
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTrashAlt"];
        this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEye"];
        this.faPdf = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faFilePdf"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEdit"];
    }
    ListaPagoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initComponent("/pagos", "Lista de Pagos", "Agregar Pago", "pagos");
        this.initForm();
        this.isEmpty = true;
        var auxfields = this.dbHandler.getLocal(this.name + "Fields");
        var auxValues = this.dbHandler.getLocal(this.name + "Values");
        this.fields = ["Id", "Fecha", "Banco", "Monto"];
        this.values = [];
        auxValues.forEach(function (value) {
            var aux = [value._id, value.movimiento.fecha, value.banco, value.monto];
            _this.values.push(aux);
        });
        if (this.values.length) {
            this.isEmpty = false;
        }
    };
    ListaPagoComponent.prototype.initComponent = function (endpoint, title, addText, name) {
        this.endpoint = endpoint;
        this.title = title;
        this.addText = addText;
        this.name = name;
    };
    ListaPagoComponent.prototype.deleteItem = function (event, index) {
        var _this = this;
        var auxValues = this.dbHandler.getLocal(this.name + "Values");
        var item = auxValues[index];
        var myEnd = this.endpoint;
        var type = this.auth.getType();
        this.isAdmin = type === "Admin";
        this.isVendedor = type === "Vendedor";
        this.isSuperAdmin = type === "SuperAdmin";
        //Autorizacion basada en roles. Modificar eventualmente a basada en reglas
        console.log(this.isSuperAdmin);
        console.log(this.isAdmin);
        if (!this.isSuperAdmin) {
            this.closeConfirm();
            var errorMsg = "Usuario no autorizado";
            this.openError(errorMsg);
        }
        else {
            this.dbHandler.deleteSomething(item._id, myEnd).subscribe(function (data) {
                _this.closeConfirm();
                if (!data.status) {
                    var errorMsg = data.msg;
                    _this.openError(errorMsg);
                }
                else {
                    _this.dbHandler.actualizar();
                }
            });
        }
    };
    ListaPagoComponent.prototype.confirmDelete = function (event, item) {
        this.deletedItem = item;
        this.openConfirm();
    };
    ListaPagoComponent.prototype.openConfirm = function () {
        this.showConfirm = {
            confirmAct: true
        };
    };
    ListaPagoComponent.prototype.closeConfirm = function () {
        this.showConfirm = {
            confirmAct: false
        };
    };
    ListaPagoComponent.prototype.openUpdate = function (event, item) {
        this.router.navigateByUrl("/actualizar/pago/" + item);
    };
    ListaPagoComponent.prototype.agregar = function () {
        this.router.navigateByUrl("/registro/pago");
    };
    ListaPagoComponent.prototype.habilitarElemento = function (event, elemento, isHabilitar) { };
    ListaPagoComponent.prototype.initForm = function () {
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("")
        });
    };
    ListaPagoComponent.prototype.openError = function (msg) {
        this.errorMsg = msg;
        this.showError = {
            errorAct: true
        };
    };
    ListaPagoComponent.prototype.closeError = function () {
        this.showError = {
            errorAct: false
        };
    };
    ListaPagoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-lista-pago",
            template: __webpack_require__(/*! ./lista-pago.component.html */ "./src/app/dashboard/components/lista-pago/lista-pago.component.html"),
            styles: [__webpack_require__(/*! ./lista-pago.component.scss */ "./src/app/dashboard/components/lista-pago/lista-pago.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], ListaPagoComponent);
    return ListaPagoComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/lista-pedido/lista-pedido.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-pedido/lista-pedido.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cardBox\" *ngIf=\"!isEmpty\">\n  <div class=\"btnBox\">\n    <button class=\"buttonBox\" (click)=\"agregar()\">\n      {{ addText }}\n    </button>\n  </div>\n  <div class=\"listBox\">\n    <table class=\"classtable\">\n      <thead class=\"classthead\">\n        <tr class=\"classtr\">\n          <th class=\"classth\" scope=\"col\">Acciones</th>\n          <th class=\"classth\" scope=\"col\" *ngFor=\"let field of fields\">{{ field }}</th>\n        </tr>\n      </thead>\n      <tbody class=\"classtbody\">\n        <tr class=\"classtr\" *ngFor=\"let value of values; let i = index\">\n          <div class=\"btn-details-btnhd\">\n            <div>\n              <fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEye\" size=\"2x\" (click)=\"verDetalle($event, i)\">\n              </fa-icon>\n              <fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEdit\" size=\"2x\" (click)=\"openUpdate($event, i)\">\n              </fa-icon>\n              <fa-icon style=\"color: red; stroke: black\" class=\"faIcon\" [icon]=\"faPdf\" size=\"2x\"\n                (click)=\"generatePdf($event, i)\"></fa-icon>\n              <fa-icon style=\"color: red\" class=\"faIcon\" [icon]=\"faTrash\" size=\"2x\" (click)=\"confirmDelete($event, i)\">\n              </fa-icon>\n            </div>\n\n            <div class=\"actionBox\">\n              <button type=\"button\" class=\"actionButton\" (click)=\"habilitarElemento($event, i, 1)\">\n                <p>HABILITAR</p>\n              </button>\n              <button type=\"button\" class=\"actionButton\" (click)=\"habilitarElemento($event, i, 0)\">\n                <p>DESHABILITAR</p>\n              </button>\n            </div>\n\n          </div>\n\n          <td class=\"classtd\" *ngFor=\"let item of value\">\n            <p>{{ item }}</p>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n    <br><br>\n  </div>\n</div>\n\n<div class=\"cardBox\" *ngIf=\"isEmpty\">\n  <p>No hay elementos para mostrar</p>\n</div>\n\n<app-error class=\"errorBox\" [msg]='errorMsg' [ngClass]=\"showError\" (closeError)=\"closeError()\"></app-error>\n\n<div class=\"confirmBox\" [ngClass]=\"showConfirm\">\n  <div class=\"blackBox\" (click)=\"closeConfirm()\"></div>\n  <div class=\"logBox2\">\n    <p class=\"confirmHeader\">CONFIRMACIÓN</p>\n    <p class=\"confirmContent\">Segro que quiere eliminar este elemento</p>\n    <div class=\"confirmButtons\">\n      <button type=\"button\" class=\"confirm buttonBox\" (click)=\"deleteItem($event, deletedItem)\">\n        <p>SÍ</p>\n      </button>\n      <button type=\"button\" class=\"goback buttonBox\" (click)=\"closeConfirm()\">\n        <p>NO</p>\n      </button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/components/lista-pedido/lista-pedido.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-pedido/lista-pedido.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2xpc3RhLXBlZGlkby9saXN0YS1wZWRpZG8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/components/lista-pedido/lista-pedido.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-pedido/lista-pedido.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ListaPedidoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaPedidoComponent", function() { return ListaPedidoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_file_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/file-handler.service */ "./src/app/dashboard/services/file-handler.service.ts");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_10__);











pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_9___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_10___default.a.pdfMake.vfs;
var ListaPedidoComponent = /** @class */ (function () {
    function ListaPedidoComponent(datepipe, auth, fileHandler, dbHandler, router, fb) {
        this.datepipe = datepipe;
        this.auth = auth;
        this.fileHandler = fileHandler;
        this.dbHandler = dbHandler;
        this.router = router;
        this.fb = fb;
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faTrashAlt"];
        this.faPdf = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faFilePdf"];
        this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faEye"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faEdit"];
    }
    ListaPedidoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initComponent("/pedidos", "Lista de Pedidos", "Agregar Pedido", "pedidos");
        this.initForm();
        this.isEmpty = true;
        var auxfields = this.dbHandler.getLocal(this.name + "Fields");
        var auxValues = this.dbHandler.getLocal(this.name + "Values");
        this.fields = ["Id", "Fecha", "Cliente", "Vendedor", "Observaciones"];
        this.values = [];
        auxValues.forEach(function (value) {
            var aux = [
                value._id,
                value.fecha,
                value.cliente.name,
                value.vendedor.name,
                value.observaciones
            ];
            //value.estado
            _this.values.push(aux);
        });
        if (this.values.length) {
            this.isEmpty = false;
        }
    };
    ListaPedidoComponent.prototype.initComponent = function (endpoint, title, addText, name) {
        this.endpoint = endpoint;
        this.title = title;
        this.addText = addText;
        this.name = name;
    };
    ListaPedidoComponent.prototype.deleteItem = function (event, index) {
        var _this = this;
        var auxValues = this.dbHandler.getLocal(this.name + "Values");
        var item = auxValues[index];
        var myEnd = this.endpoint;
        var type = this.auth.getType();
        this.isAdmin = type === "Admin";
        this.isVendedor = type === "Vendedor";
        this.isSuperAdmin = type === "SuperAdmin";
        //Autorizacion basada en roles. Modificar eventualmente a basada en reglas
        if (!(this.isAdmin || this.isSuperAdmin)) {
            this.closeConfirm();
            var errorMsg = "Usuario no autorizado";
            this.openError(errorMsg);
        }
        else {
            this.dbHandler.deleteSomething(item._id, myEnd).subscribe(function (data) {
                _this.closeConfirm();
                if (!data.status) {
                    var errorMsg = data.msg;
                    _this.openError(errorMsg);
                }
                else {
                    _this.dbHandler.actualizar();
                }
            });
        }
    };
    ListaPedidoComponent.prototype.confirmDelete = function (event, item) {
        this.deletedItem = item;
        this.openConfirm();
    };
    ListaPedidoComponent.prototype.openConfirm = function () {
        this.showConfirm = {
            confirmAct: true
        };
    };
    ListaPedidoComponent.prototype.closeConfirm = function () {
        this.showConfirm = {
            confirmAct: false
        };
    };
    ListaPedidoComponent.prototype.openUpdate = function (event, item) {
        this.router.navigateByUrl("/actualizar/pedido/" + item);
    };
    ListaPedidoComponent.prototype.agregar = function () {
        this.router.navigateByUrl("/registro/pedido");
    };
    ListaPedidoComponent.prototype.habilitarElemento = function (event, elemento, isHabilitar) { };
    ListaPedidoComponent.prototype.openError = function (msg) {
        this.errorMsg = msg;
        this.showError = {
            errorAct: true
        };
    };
    ListaPedidoComponent.prototype.closeError = function () {
        this.showError = {
            errorAct: false
        };
    };
    ListaPedidoComponent.prototype.initForm = function () {
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]("")
        });
    };
    ListaPedidoComponent.prototype.generatePdf = function (event, i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var documentDefinition;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDocumentDefinition(i)];
                    case 1:
                        documentDefinition = _a.sent();
                        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_9___default.a.createPdf(documentDefinition).open();
                        return [2 /*return*/];
                }
            });
        });
    };
    ListaPedidoComponent.prototype.getDocHeader = function (company, logo, correlativo, fecha, vendedor, condicionVenta) {
        var headerLeft = [
            {
                text: company.name,
                style: "name"
            },
            {
                text: company.address
            },
            {
                text: company.rif
            },
            {
                text: "Correo : " + company.mail
            },
            {
                text: "Teléfono : " + company.tlf
            }
        ];
        var headerRight = [
            this.getProfilePicObject(logo)
        ].concat(this.getVendedorObject(vendedor, condicionVenta), [
            {
                text: correlativo,
                alignment: "right"
            },
            {
                text: fecha,
                alignment: "right"
            }
        ]);
        return {
            columns: [headerLeft, headerRight]
        };
    };
    ListaPedidoComponent.prototype.getDocumentDefinition = function (i) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var reporte, username, pedidos, productos, precios, pedido, vendedor, company, logo, cliente, id, fecha, observaciones, productosPedidos, montoTotal, fields, values, item, correlativo;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        reporte = {
                            titulo: "Cotizaci\u00F3n",
                            subtituloA: "Datos del cliente",
                            subtituloB: "Informaci\u00F3n del pedido"
                        };
                        username = this.auth.getUsername();
                        pedidos = this.dbHandler.getLocal("pedidosValues");
                        productos = this.dbHandler.getLocal("productosValues");
                        precios = this.dbHandler.getLocal("preciosValues");
                        pedido = pedidos[i];
                        vendedor = pedido.vendedor;
                        company = this.dbHandler.getLocal("companyValues")[0];
                        return [4 /*yield*/, this.fileHandler.imgTobase64("/assets/logo.png")];
                    case 1:
                        logo = _a.sent();
                        cliente = pedido.cliente;
                        id = pedido._id;
                        fecha = this.datepipe.transform(pedido.fecha, "yyyy-MM-dd");
                        observaciones = pedido.observaciones;
                        productosPedidos = pedido.productosPedidos;
                        montoTotal = pedido.montoTotal;
                        fields = [
                            "Item",
                            "Código",
                            "Nombre",
                            "Cantidad",
                            "Precio unitario",
                            "Subtotal"
                        ];
                        values = [];
                        item = 1;
                        productosPedidos.forEach(function (productoPedido) {
                            var precioId = productoPedido.producto.precio;
                            var qty = productoPedido.qty;
                            var precio;
                            precios.forEach(function (prec) {
                                if (prec._id == precioId) {
                                    precio = prec.valor;
                                    return;
                                }
                            });
                            var subtotal = productoPedido.montoProducto;
                            var aux = [
                                item,
                                productoPedido.producto.code,
                                productoPedido.producto.name,
                                qty,
                                precio,
                                productoPedido.montoProducto
                            ];
                            values.push(aux);
                            item++;
                        });
                        correlativo = "";
                        return [2 /*return*/, {
                                content: [
                                    this.getDocHeader(company, logo, correlativo, fecha, vendedor, pedido.condicionVenta),
                                    {
                                        text: reporte.titulo,
                                        bold: true,
                                        fontSize: 20,
                                        alignment: "center",
                                        margin: [0, 0, 0, 20]
                                    },
                                    {
                                        text: reporte.subtituloA,
                                        style: "header"
                                    },
                                    this.getClienteObject(cliente),
                                    {
                                        text: reporte.subtituloB,
                                        style: "header"
                                    },
                                    this.getValuesObject(fields, values),
                                    {
                                        text: "Monto total: " + montoTotal,
                                        alignment: "right",
                                        style: "name"
                                    },
                                    {
                                        text: "Observaciones",
                                        style: "header"
                                    },
                                    {
                                        text: observaciones
                                    },
                                    {
                                        text: "Firmas",
                                        style: "sign"
                                    },
                                    {
                                        columns: [
                                            {
                                                text: "Procesado por",
                                                alignment: "right"
                                            }
                                        ]
                                    }
                                ],
                                info: {
                                    title: reporte.titulo,
                                    author: username,
                                    subject: "REPORTE",
                                    keywords: "REPORTE, CONTROL"
                                },
                                styles: {
                                    header: {
                                        fontSize: 18,
                                        bold: true,
                                        margin: [0, 20, 0, 10],
                                        decoration: "underline"
                                    },
                                    name: {
                                        fontSize: 16,
                                        bold: true
                                    },
                                    jobTitle: {
                                        fontSize: 14,
                                        bold: true,
                                        italics: true
                                    },
                                    sign: {
                                        margin: [0, 50, 0, 10],
                                        alignment: "right",
                                        italics: true
                                    },
                                    tableHeader: {
                                        bold: true
                                    }
                                }
                            }];
                }
            });
        });
    };
    ListaPedidoComponent.prototype.getValuesObject = function (fields, values) {
        var titleRow = [];
        var widths = [];
        var titleContent = [];
        var wLength = fields.length;
        for (var i = 0; i < wLength; i++) {
            widths.push("*");
        }
        fields.forEach(function (field) {
            var aux = {
                text: field,
                style: "tableHeader"
            };
            titleRow.push(aux);
        });
        values.forEach(function (value) {
            var aux = [];
            value.forEach(function (item) {
                var auxb = {
                    text: item,
                    style: "tableContent"
                };
                aux.push(auxb);
            });
            titleContent.push(aux);
        });
        return {
            table: {
                widths: widths,
                body: [titleRow].concat(titleContent)
            }
        };
    };
    ListaPedidoComponent.prototype.getProfilePicObject = function (logo) {
        if (logo) {
            return {
                image: logo,
                width: 150,
                alignment: "right"
            };
        }
        return null;
    };
    ListaPedidoComponent.prototype.getClienteObject = function (cliente) {
        var block = [
            {
                columns: [
                    [
                        {
                            text: "Nombre: " + cliente.name,
                            style: "jobTitle"
                        },
                        {
                            text: "Tel\u00E9fono: " + cliente.ws
                        },
                        {
                            text: "Correo: " + cliente.mail
                        }
                    ],
                    [
                        {
                            text: "Rif: " + cliente.rif,
                            alignment: "right",
                            style: "jobTitle"
                        },
                        {
                            text: "Direcci\u00F3n: " + cliente.address,
                            alignment: "right"
                        }
                    ]
                ]
            }
        ];
        return {
            table: {
                widths: ["*"],
                body: [block]
            }
        };
    };
    ListaPedidoComponent.prototype.getVendedorObject = function (vendedor, condicion) {
        return [
            {
                text: "Vendedor : " + vendedor.name,
                alignment: "right"
            },
            {
                text: "Condición de venta : " + condicion,
                alignment: "right"
            }
        ];
        /*       let block =
            [{
              columns: [
                [{
                  text: `Nombre: ${vendedor.name}`,
                  style: 'jobTitle'
                }],
                [{
                  text: `Condición de venta: ${condicion}`,
                  alignment: 'right',
                  style: 'jobTitle'
                }]
              ]
            }] */
        /*     return {
          table: {
            widths: ['*'],
            body: [
              block
            ]
          }
        };
     */
    };
    ListaPedidoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-lista-pedido",
            template: __webpack_require__(/*! ./lista-pedido.component.html */ "./src/app/dashboard/components/lista-pedido/lista-pedido.component.html"),
            styles: [__webpack_require__(/*! ./lista-pedido.component.scss */ "./src/app/dashboard/components/lista-pedido/lista-pedido.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_file_handler_service__WEBPACK_IMPORTED_MODULE_3__["FileHandlerService"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_4__["DbHandlerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], ListaPedidoComponent);
    return ListaPedidoComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/lista-producto/lista-producto.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-producto/lista-producto.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cardBox\" *ngIf=\"!isEmpty\">\n\t<div class=\"btnBox\">\n\t\t<button class=\"buttonBox\" (click)=\"agregar()\">\n\t\t\t{{ addText }}\n\t\t </button>\n\t</div>\n  <div class=\"listBox\">\n    \t<table class=\"classtable\">\n\t\t\t<thead class=\"classthead\">\n\t\t\t\t<tr class=\"classtr\">\n\t\t\t\t\t<th class=\"classth\" scope=\"col\">Acciones</th>\n\t\t\t\t\t<th class=\"classth\" scope=\"col\" *ngFor=\"let field of fields\">{{ field }}</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody class=\"classtbody\">\n\t\t\t\t<tr class=\"classtr\" *ngFor=\"let value of values; let i = index\">\n\t\t\t\t\t<div class=\"btn-details\">\n\t\t\t\t\t\t<fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEye\" size=\"2x\" (click)=\"verDetalle($event, i)\"></fa-icon>\n\t\t\t\t\t\t<fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEdit\" size=\"2x\" (click)=\"openUpdate($event, i)\"></fa-icon>\n\t\t\t\t\t\t<fa-icon style=\"color: red; stroke: black\" class=\"faIcon\" [icon]=\"faPdf\" size=\"2x\"\n\t\t\t\t\t\t(click)=\"generatePdf($event, i)\"></fa-icon>\n\t\t\t\t\t\t<fa-icon style=\"color: red\" class=\"faIcon\" [icon]=\"faTrash\" size=\"2x\" (click)=\"confirmDelete($event, i)\">\n\t\t\t\t\t\t</fa-icon>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<td class=\"classtd\" *ngFor=\"let item of value\">\n\t\t\t\t\t\t<p>{{ item }}</p>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n    \t</table>\n\n    <br><br>\n  </div>\n  <!--\t<div class=\"titleRow\">-->\n      <!--<p style=\"width: 250px;\">Acciones</p>\n      <p *ngFor=\"let field of fields\">{{ field }}</p>-->\n   \t<!--<div class=\"contentRow\" *ngFor=\"let value of values; let i = index\">\n      \t<!--<div class=\"actionBox\" style=\"width: 250px;\">\n        \t<!-- <p class=\"listButton\"> -->\n        \t<!-- <button type=\"button\" id=\"closeB\" (click)=\"deleteItem($event, i)\">X</button>-->\n         <!--<img id=\"updateB\" src=\"/assets/tuerca.png\" (click)=\"openUpdate($event, i)\"/>-->\n        \t\t<!--<fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEye\" size=\"2x\" (click)=\"verDetalle($event, i)\"></fa-icon>\n        \t\t<fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEdit\" size=\"2x\" (click)=\"openUpdate($event, i)\"></fa-icon>\n        \t\t<fa-icon style=\"color: red; stroke: black\" class=\"faIcon\" [icon]=\"faPdf\" size=\"2x\" (click)=\"generatePdf($event, i)\"></fa-icon>\n        \t\t<fa-icon style=\"color: red\" class=\"faIcon\" [icon]=\"faTrash\" size=\"2x\" (click)=\"confirmDelete($event, i)\"></fa-icon>-->\n        \t<!-- <button\n              style=\"background-color: orange\"\n              type=\"button\"\n              class=\"actionButton\"\n              (click)=\"openUpdate($event, i)\"\n            >\n              <p>EDITAR</p>\n            </button>-->\n            <!--<button\n              style=\"background-color: red\"\n              type=\"button\"\n              class=\"actionButton\"\n              (click)=\"confirmDelete($event, i)\"\n            >\n              <p>ELIMINAR</p>\n            </button>    -->\n\n        <!-- <button\n              style=\"background-color: green\"\n              type=\"button\"\n              class=\"actionButton\"\n              (click)=\"habilitarElemento($event, i, 1)\"\n            >\n              <p>HABILITAR</p>\n            </button>-->\n            <!--<button\n              style=\"background-color: red\"\n              type=\"button\"\n              class=\"actionButton\"\n              (click)=\"habilitarElemento($event, i, 0)\"\n            >\n              <p>DESHABILITAR</p>\n            </button> -->\n      \t<!--</div>-->\n      <!--<div *ngFor=\"let item of value\">\n        <p>{{ item }}</p>-->\n   \n</div>\n<div class=\"cardBox\" *ngIf=\"isEmpty\">\n  <p>No hay elementos para mostrar</p>\n</div>\n\n\n\n<app-error class=\"errorBox\" [msg]='errorMsg' [ngClass]=\"showError\" (closeError)=\"closeError()\"></app-error>\n\n<div class=\"confirmBox\" [ngClass]=\"showConfirm\">\n  <div class=\"blackBox\" (click)=\"closeConfirm()\"></div>\n  <div class=\"logBox2\">\n    <p class=\"confirmHeader\">CONFIRMACIÓN</p>\n    <p class=\"confirmContent\">Segro que quiere eliminar este elemento</p>\n    <div class=\"confirmButtons\">\n      <button type=\"button\" class=\"confirm buttonBox\" (click)=\"deleteItem($event, deletedItem)\">\n        <p>SÍ</p>\n      </button>\n      <button type=\"button\" class=\"goback buttonBox\" (click)=\"closeConfirm()\">\n        <p>NO</p>\n      </button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/components/lista-producto/lista-producto.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-producto/lista-producto.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2xpc3RhLXByb2R1Y3RvL2xpc3RhLXByb2R1Y3RvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/components/lista-producto/lista-producto.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-producto/lista-producto.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ListaProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaProductoComponent", function() { return ListaProductoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__);









pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default.a.pdfMake.vfs;
var ListaProductoComponent = /** @class */ (function () {
    function ListaProductoComponent(auth, dbHandler, router, fb) {
        this.auth = auth;
        this.dbHandler = dbHandler;
        this.router = router;
        this.fb = fb;
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTrashAlt"];
        this.faPdf = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faFilePdf"];
        this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEye"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEdit"];
    }
    ListaProductoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initComponent("/productos", "Lista de Productos", "Agregar Producto", "productos");
        this.initForm();
        this.isEmpty = true;
        var auxfields = this.dbHandler.getLocal(this.name + "Fields");
        var auxValues = this.dbHandler.getLocal(this.name + "Values");
        this.fields = [
            "Id",
            "Código",
            "Nombre",
            "Marca",
            "Cantidad disponible",
            "Cantidad bloqueada"
        ];
        this.values = [];
        auxValues.forEach(function (value) {
            var aux = [
                value._id,
                value.code,
                value.name,
                value.brand,
                value.disponibilidad.qtyDisponible,
                value.disponibilidad.qtyBloqueada
            ];
            _this.values.push(aux);
        });
        if (this.values.length) {
            this.isEmpty = false;
        }
        this.isDetalle = false;
    };
    ListaProductoComponent.prototype.initComponent = function (endpoint, title, addText, name) {
        this.endpoint = endpoint;
        this.title = title;
        this.addText = addText;
        this.name = name;
    };
    ListaProductoComponent.prototype.deleteItem = function (event, index) {
        var _this = this;
        var auxValues = this.dbHandler.getLocal(this.name + "Values");
        var item = auxValues[index];
        var myEnd = this.endpoint;
        var type = this.auth.getType();
        this.isAdmin = type === "Admin";
        this.isVendedor = type === "Vendedor";
        this.isSuperAdmin = type === "SuperAdmin";
        //Autorizacion basada en roles. Modificar eventualmente a basada en reglas
        console.log(this.isSuperAdmin);
        console.log(this.isAdmin);
        if (!(this.isAdmin || this.isSuperAdmin)) {
            this.closeConfirm();
            var errorMsg = "Usuario no autorizado";
            this.openError(errorMsg);
        }
        else {
            this.dbHandler.deleteSomething(item._id, myEnd).subscribe(function (data) {
                _this.closeConfirm();
                if (!data.status) {
                    var errorMsg = data.msg;
                    _this.openError(errorMsg);
                }
                else {
                    _this.dbHandler.actualizar();
                }
            });
        }
    };
    ListaProductoComponent.prototype.confirmDelete = function (event, item) {
        this.deletedItem = item;
        this.openConfirm();
    };
    ListaProductoComponent.prototype.openConfirm = function () {
        this.showConfirm = {
            confirmAct: true
        };
    };
    ListaProductoComponent.prototype.closeConfirm = function () {
        this.showConfirm = {
            confirmAct: false
        };
    };
    ListaProductoComponent.prototype.verDetalle = function (event, i) {
        var _this = this;
        this.fields2 = ["Almacen", "Cantidad"];
        var almacenes = this.dbHandler.getLocal("almacenesValues");
        var productos = this.dbHandler.getLocal("productosValues");
        var producto = productos[i];
        var disponibilidad = producto.disponibilidad;
        var dispoAlmacen = disponibilidad.dispoAlmacen;
        this.values2 = [];
        almacenes.forEach(function (almacen) {
            var almacenCode;
            var qty;
            dispoAlmacen.forEach(function (item) {
                if (almacen._id == item.almacen) {
                    almacenCode = almacen.code;
                    qty = item.qty;
                }
            });
            var aux = [almacenCode, qty];
            _this.values2.push(aux);
        });
        this.isDetalle = true;
    };
    ListaProductoComponent.prototype.openUpdate = function (event, item) {
        this.router.navigateByUrl("/actualizar/producto/" + item);
    };
    ListaProductoComponent.prototype.agregar = function () {
        this.router.navigateByUrl("/registro/producto");
    };
    ListaProductoComponent.prototype.habilitarElemento = function (event, elemento, isHabilitar) { };
    ListaProductoComponent.prototype.openError = function (msg) {
        this.errorMsg = msg;
        this.showError = {
            errorAct: true
        };
    };
    ListaProductoComponent.prototype.closeError = function () {
        this.showError = {
            errorAct: false
        };
    };
    ListaProductoComponent.prototype.initForm = function () {
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("")
        });
    };
    ListaProductoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-lista-producto",
            template: __webpack_require__(/*! ./lista-producto.component.html */ "./src/app/dashboard/components/lista-producto/lista-producto.component.html"),
            styles: [__webpack_require__(/*! ./lista-producto.component.scss */ "./src/app/dashboard/components/lista-producto/lista-producto.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], ListaProductoComponent);
    return ListaProductoComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/lista-proformas/lista-proformas.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-proformas/lista-proformas.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"buttonBox\" (click)=\"agregar()\">\n  {{ addText }}\n</button>\n\n<div class=\"cardBox\" *ngIf=\"!isEmpty\">\n  <div class=\"listBox\">\n    <div class=\"titleRow\">\n      <p style=\"width: 250px;\">Acciones</p>\n      <p *ngFor=\"let field of fields\">{{ field }}</p>\n    </div>\n    <div class=\"contentRow\" *ngFor=\"let value of values; let i = index\">\n      <div class=\"actionBox\" style=\"width: 250px;\">\n\n        <fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEye\" size=\"2x\" (click)=\"verDetalle($event, i)\"></fa-icon>\n        <fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEdit\" size=\"2x\" (click)=\"openUpdate($event, i)\"></fa-icon>\n        <fa-icon style=\"color: red; stroke: black\" class=\"faIcon\" [icon]=\"faPdf\" size=\"2x\"\n          (click)=\"generatePdf($event, i)\"></fa-icon>\n        <fa-icon style=\"color: red\" class=\"faIcon\" [icon]=\"faTrash\" size=\"2x\" (click)=\"confirmDelete($event, i)\">\n        </fa-icon>\n\n      </div>\n      <div *ngFor=\"let item of value\">\n        <p>{{ item }}</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"cardBox\" *ngIf=\"isEmpty\">\n  <p>No hay elementos para mostrar</p>\n</div>\n\n<app-error class=\"errorBox\" [msg]='errorMsg' [ngClass]=\"showError\" (closeError)=\"closeError()\"></app-error>\n\n<div class=\"confirmBox\" [ngClass]=\"showConfirm\">\n  <div class=\"blackBox\" (click)=\"closeConfirm()\"></div>\n\n  <div class=\"logBox\">\n    <div class=\"closeButton\">\n      <button class=\"closeB\" (click)=\"closeConfirm()\">X</button>\n    </div>\n    <p class=\"confirmHeader\">CONFIRMACIÓN</p>\n    <p class=\"confirmContent\">Segro que quiere eliminar este elemento</p>\n    <div class=\"confirmButtons\">\n      <button type=\"button\" class=\"confirm formButton\" (click)=\"deleteItem($event, deletedItem)\">\n        <p>SÍ</p>\n      </button>\n      <button type=\"button\" class=\"goback formButton\" (click)=\"closeConfirm()\">\n        <p>NO</p>\n      </button>\n    </div>\n\n  </div>"

/***/ }),

/***/ "./src/app/dashboard/components/lista-proformas/lista-proformas.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-proformas/lista-proformas.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2xpc3RhLXByb2Zvcm1hcy9saXN0YS1wcm9mb3JtYXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/components/lista-proformas/lista-proformas.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-proformas/lista-proformas.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ListaProformasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaProformasComponent", function() { return ListaProformasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__);









pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default.a.pdfMake.vfs;
var ListaProformasComponent = /** @class */ (function () {
    function ListaProformasComponent(auth, dbHandler, router, fb) {
        this.auth = auth;
        this.dbHandler = dbHandler;
        this.router = router;
        this.fb = fb;
        this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEye"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTrashAlt"];
        this.faPdf = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faFilePdf"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEdit"];
    }
    ListaProformasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initComponent("/proformas", "Lista de Proformas", "Agregar Proforma", "proformas");
        this.initForm();
        this.isEmpty = true;
        var auxfields = this.dbHandler.getLocal(this.name + "Fields");
        var auxValues = this.dbHandler.getLocal(this.name + "Values");
        this.fields = ["Id", "Fecha", "Monto Total", "Monto Pendiente", "Cliente"];
        this.values = [];
        auxValues.forEach(function (value) {
            var aux = [
                value._id,
                value.fecha,
                value.montoTotal,
                value.montoPendiente,
                value.cliente.name
            ];
            _this.values.push(aux);
        });
        if (this.values.length) {
            this.isEmpty = false;
        }
    };
    ListaProformasComponent.prototype.initForm = function () {
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("")
        });
    };
    ListaProformasComponent.prototype.initComponent = function (endpoint, title, addText, name) {
        this.endpoint = endpoint;
        this.title = title;
        this.addText = addText;
        this.name = name;
    };
    ListaProformasComponent.prototype.deleteItem = function (event, index) {
        var _this = this;
        var auxValues = this.dbHandler.getLocal(this.name + "Values");
        var item = auxValues[index];
        var myEnd = this.endpoint;
        var type = this.auth.getType();
        this.isAdmin = type === "Admin";
        this.isVendedor = type === "Vendedor";
        this.isSuperAdmin = type === "SuperAdmin";
        //Autorizacion basada en roles. Modificar eventualmente a basada en reglas
        console.log(this.isSuperAdmin);
        console.log(this.isAdmin);
        if (!(this.isAdmin || this.isSuperAdmin)) {
            this.closeConfirm();
            var errorMsg = "Usuario no autorizado";
            this.openError(errorMsg);
        }
        else {
            this.dbHandler.deleteSomething(item._id, myEnd).subscribe(function (data) {
                _this.closeConfirm();
                if (!data.status) {
                    var errorMsg = data.msg;
                    _this.openError(errorMsg);
                }
                else {
                    _this.dbHandler.actualizar();
                }
            });
        }
    };
    ListaProformasComponent.prototype.confirmDelete = function (event, item) {
        this.deletedItem = item;
        this.openConfirm();
    };
    ListaProformasComponent.prototype.openConfirm = function () {
        this.showConfirm = {
            confirmAct: true
        };
    };
    ListaProformasComponent.prototype.closeConfirm = function () {
        this.showConfirm = {
            confirmAct: false
        };
    };
    ListaProformasComponent.prototype.openUpdate = function (event, item) {
        this.router.navigateByUrl("/actualizar/proforma/" + item);
    };
    ListaProformasComponent.prototype.agregar = function () {
        this.router.navigateByUrl("/registro/proforma");
    };
    ListaProformasComponent.prototype.habilitarElemento = function (event, elemento, isHabilitar) { };
    ListaProformasComponent.prototype.openError = function (msg) {
        this.errorMsg = msg;
        this.showError = {
            errorAct: true
        };
    };
    ListaProformasComponent.prototype.closeError = function () {
        this.showError = {
            errorAct: false
        };
    };
    ListaProformasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-lista-proformas",
            template: __webpack_require__(/*! ./lista-proformas.component.html */ "./src/app/dashboard/components/lista-proformas/lista-proformas.component.html"),
            styles: [__webpack_require__(/*! ./lista-proformas.component.scss */ "./src/app/dashboard/components/lista-proformas/lista-proformas.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], ListaProformasComponent);
    return ListaProformasComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/lista-proveedores/lista-proveedores.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-proveedores/lista-proveedores.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"buttonBox\" (click)=\"agregar()\">\n  {{ addText }}\n</button>\n\n<div class=\"cardBox\" *ngIf=\"!isEmpty\">\n  <div class=\"listBox\">\n    <div class=\"titleRow\">\n      <p style=\"width: 250px;\">Acciones</p>\n      <p *ngFor=\"let field of fields\">{{ field }}</p>\n    </div>\n    <div class=\"contentRow\" *ngFor=\"let value of values; let i = index\">\n      <div class=\"actionBox\" style=\"width: 250px;\">\n        <!-- <p class=\"listButton\"> -->\n        <!-- <button type=\"button\" id=\"closeB\" (click)=\"deleteItem($event, i)\">\n            X\n          </button>\n          <img\n            id=\"updateB\"\n            src=\"/assets/tuerca.png\"\n            (click)=\"openUpdate($event, i)\"\n          /> -->\n        <fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEye\" size=\"2x\" (click)=\"verDetalle($event, i)\"></fa-icon>\n        <fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEdit\" size=\"2x\" (click)=\"openUpdate($event, i)\"></fa-icon>\n        <fa-icon style=\"color: red; stroke: black\" class=\"faIcon\" [icon]=\"faPdf\" size=\"2x\"\n          (click)=\"generatePdf($event, i)\"></fa-icon>\n        <fa-icon style=\"color: red\" class=\"faIcon\" [icon]=\"faTrash\" size=\"2x\" (click)=\"confirmDelete($event, i)\">\n        </fa-icon>\n        <!-- <button\n              style=\"background-color: orange\"\n              type=\"button\"\n              class=\"actionButton\"\n              (click)=\"openUpdate($event, i)\"\n            >\n              <p>EDITAR</p>\n            </button>\n            <button\n              style=\"background-color: red\"\n              type=\"button\"\n              class=\"actionButton\"\n              (click)=\"confirmDelete($event, i)\"\n            >\n              <p>ELIMINAR</p>\n            </button>    -->\n\n        <!-- <button\n              style=\"background-color: green\"\n              type=\"button\"\n              class=\"actionButton\"\n              (click)=\"habilitarElemento($event, i, 1)\"\n            >\n              <p>HABILITAR</p>\n            </button>\n            <button\n              style=\"background-color: red\"\n              type=\"button\"\n              class=\"actionButton\"\n              (click)=\"habilitarElemento($event, i, 0)\"\n            >\n              <p>DESHABILITAR</p>\n            </button> -->\n      </div>\n      <div *ngFor=\"let item of value\">\n        <p>{{ item }}</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"cardBox\" *ngIf=\"isEmpty\">\n  <p>No hay elementos para mostrar</p>\n</div>\n\n<app-error class=\"errorBox\" [msg]='errorMsg' [ngClass]=\"showError\" (closeError)=\"closeError()\"></app-error>\n\n<div class=\"confirmBox\" [ngClass]=\"showConfirm\">\n  <div class=\"blackBox\" (click)=\"closeConfirm()\"></div>\n\n  <div class=\"logBox\">\n    <div class=\"closeButton\">\n      <button class=\"closeB\" (click)=\"closeConfirm()\">X</button>\n    </div>\n    <p class=\"confirmHeader\">CONFIRMACIÓN</p>\n    <p class=\"confirmContent\">Segro que quiere eliminar este elemento</p>\n    <div class=\"confirmButtons\">\n      <button type=\"button\" class=\"confirm formButton\" (click)=\"deleteItem($event, deletedItem)\">\n        <p>SÍ</p>\n      </button>\n      <button type=\"button\" class=\"goback formButton\" (click)=\"closeConfirm()\">\n        <p>NO</p>\n      </button>\n    </div>\n\n  </div>"

/***/ }),

/***/ "./src/app/dashboard/components/lista-proveedores/lista-proveedores.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-proveedores/lista-proveedores.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2xpc3RhLXByb3ZlZWRvcmVzL2xpc3RhLXByb3ZlZWRvcmVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/components/lista-proveedores/lista-proveedores.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-proveedores/lista-proveedores.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ListaProveedoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaProveedoresComponent", function() { return ListaProveedoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__);









pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default.a.pdfMake.vfs;
var ListaProveedoresComponent = /** @class */ (function () {
    function ListaProveedoresComponent(auth, dbHandler, router, fb) {
        this.auth = auth;
        this.dbHandler = dbHandler;
        this.router = router;
        this.fb = fb;
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTrashAlt"];
        this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEye"];
        this.faPdf = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faFilePdf"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEdit"];
    }
    ListaProveedoresComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initComponent("/proveedores", "Lista de Proveedores", "Agregar Proveedor", "proveedores");
        this.initForm();
        this.isEmpty = true;
        var auxfields = this.dbHandler.getLocal(this.name + "Fields");
        var auxValues = this.dbHandler.getLocal(this.name + "Values");
        this.fields = [
            "Id",
            "RIF",
            "Nombre",
            "Correo",
            "Dirección",
            "Teléfono",
            "Instagram"
        ];
        this.values = [];
        auxValues.forEach(function (value) {
            var aux = [
                value._id,
                value.rif,
                value.name,
                value.mail,
                value.address,
                value.ws,
                value.ig
            ];
            _this.values.push(aux);
        });
        if (this.values.length) {
            this.isEmpty = false;
        }
    };
    ListaProveedoresComponent.prototype.initComponent = function (endpoint, title, addText, name) {
        this.endpoint = endpoint;
        this.title = title;
        this.addText = addText;
        this.name = name;
    };
    ListaProveedoresComponent.prototype.deleteItem = function (event, index) {
        var _this = this;
        var auxValues = this.dbHandler.getLocal(this.name + "Values");
        var item = auxValues[index];
        var myEnd = this.endpoint;
        var type = this.auth.getType();
        this.isAdmin = type === "Admin";
        this.isVendedor = type === "Vendedor";
        this.isSuperAdmin = type === "SuperAdmin";
        //Autorizacion basada en roles. Modificar eventualmente a basada en reglas
        console.log(this.isSuperAdmin);
        console.log(this.isAdmin);
        if (!(this.isAdmin || this.isSuperAdmin)) {
            this.closeConfirm();
            var errorMsg = "Usuario no autorizado";
            this.openError(errorMsg);
        }
        else {
            this.dbHandler.deleteSomething(item._id, myEnd).subscribe(function (data) {
                _this.closeConfirm();
                if (!data.status) {
                    var errorMsg = data.msg;
                    _this.openError(errorMsg);
                }
                else {
                    _this.dbHandler.actualizar();
                }
            });
        }
    };
    ListaProveedoresComponent.prototype.confirmDelete = function (event, item) {
        this.deletedItem = item;
        this.openConfirm();
    };
    ListaProveedoresComponent.prototype.openConfirm = function () {
        this.showConfirm = {
            confirmAct: true
        };
    };
    ListaProveedoresComponent.prototype.closeConfirm = function () {
        this.showConfirm = {
            confirmAct: false
        };
    };
    ListaProveedoresComponent.prototype.openUpdate = function (event, item) {
        this.router.navigateByUrl("/actualizar/proveedor/" + item);
    };
    ListaProveedoresComponent.prototype.agregar = function () {
        this.router.navigateByUrl("/registro/proveedor");
    };
    ListaProveedoresComponent.prototype.habilitarElemento = function (event, elemento, isHabilitar) { };
    ListaProveedoresComponent.prototype.openError = function (msg) {
        this.errorMsg = msg;
        this.showError = {
            errorAct: true
        };
    };
    ListaProveedoresComponent.prototype.closeError = function () {
        this.showError = {
            errorAct: false
        };
    };
    ListaProveedoresComponent.prototype.initForm = function () {
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("")
        });
    };
    ListaProveedoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-lista-proveedores",
            template: __webpack_require__(/*! ./lista-proveedores.component.html */ "./src/app/dashboard/components/lista-proveedores/lista-proveedores.component.html"),
            styles: [__webpack_require__(/*! ./lista-proveedores.component.scss */ "./src/app/dashboard/components/lista-proveedores/lista-proveedores.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], ListaProveedoresComponent);
    return ListaProveedoresComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/lista-rol/lista-rol.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-rol/lista-rol.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cardBox\" *ngIf=\"!isEmpty\">\n\t<div class=\"btnBox\">\n\t\t<button class=\"buttonBox\" (click)=\"agregar()\">\n\t\t\t{{ addText }}\n\t\t </button>\n\t</div>\n  <div class=\"listBox\">\n    \t<table class=\"classtable\">\n\t\t\t<thead class=\"classthead\">\n\t\t\t\t<tr class=\"classtr\">\n\t\t\t\t\t<th class=\"classth\" scope=\"col\">Acciones</th>\n\t\t\t\t\t<th class=\"classth\" scope=\"col\" *ngFor=\"let field of fields\">{{ field }}</th>\n\t\t\t\t</tr>\n\t\t\t</thead>\n\t\t\t<tbody class=\"classtbody\">\n\t\t\t\t<tr class=\"classtr\" *ngFor=\"let value of values; let i = index\">\n\t\t\t\t\t<div class=\"btn-details\">\n\t\t\t\t\t\t<fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEye\" size=\"2x\" (click)=\"verDetalle($event, i)\"></fa-icon>\n\t\t\t\t\t\t<fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEdit\" size=\"2x\" (click)=\"openUpdate($event, i)\"></fa-icon>\n\t\t\t\t\t\t<fa-icon style=\"color: red; stroke: black\" class=\"faIcon\" [icon]=\"faPdf\" size=\"2x\"\n\t\t\t\t\t\t(click)=\"generatePdf($event, i)\"></fa-icon>\n\t\t\t\t\t\t<fa-icon style=\"color: red\" class=\"faIcon\" [icon]=\"faTrash\" size=\"2x\" (click)=\"confirmDelete($event, i)\">\n\t\t\t\t\t\t</fa-icon>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<td class=\"classtd\" *ngFor=\"let item of value\">\n\t\t\t\t\t\t<p>{{ item }}</p>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t</tbody>\n    \t</table>\n\n    <br><br>\n  </div>\n  <!--\t<div class=\"titleRow\">-->\n      <!--<p style=\"width: 250px;\">Acciones</p>\n      <p *ngFor=\"let field of fields\">{{ field }}</p>-->\n   \t<!--<div class=\"contentRow\" *ngFor=\"let value of values; let i = index\">\n      \t<!--<div class=\"actionBox\" style=\"width: 250px;\">\n        \t<!-- <p class=\"listButton\"> -->\n        \t<!-- <button type=\"button\" id=\"closeB\" (click)=\"deleteItem($event, i)\">X</button>-->\n         <!--<img id=\"updateB\" src=\"/assets/tuerca.png\" (click)=\"openUpdate($event, i)\"/>-->\n        \t\t<!--<fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEye\" size=\"2x\" (click)=\"verDetalle($event, i)\"></fa-icon>\n        \t\t<fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEdit\" size=\"2x\" (click)=\"openUpdate($event, i)\"></fa-icon>\n        \t\t<fa-icon style=\"color: red; stroke: black\" class=\"faIcon\" [icon]=\"faPdf\" size=\"2x\" (click)=\"generatePdf($event, i)\"></fa-icon>\n        \t\t<fa-icon style=\"color: red\" class=\"faIcon\" [icon]=\"faTrash\" size=\"2x\" (click)=\"confirmDelete($event, i)\"></fa-icon>-->\n        \t<!-- <button\n              style=\"background-color: orange\"\n              type=\"button\"\n              class=\"actionButton\"\n              (click)=\"openUpdate($event, i)\"\n            >\n              <p>EDITAR</p>\n            </button>-->\n            <!--<button\n              style=\"background-color: red\"\n              type=\"button\"\n              class=\"actionButton\"\n              (click)=\"confirmDelete($event, i)\"\n            >\n              <p>ELIMINAR</p>\n            </button>    -->\n\n        <!-- <button\n              style=\"background-color: green\"\n              type=\"button\"\n              class=\"actionButton\"\n              (click)=\"habilitarElemento($event, i, 1)\"\n            >\n              <p>HABILITAR</p>\n            </button>-->\n            <!--<button\n              style=\"background-color: red\"\n              type=\"button\"\n              class=\"actionButton\"\n              (click)=\"habilitarElemento($event, i, 0)\"\n            >\n              <p>DESHABILITAR</p>\n            </button> -->\n      \t<!--</div>-->\n      <!--<div *ngFor=\"let item of value\">\n        <p>{{ item }}</p>-->\n   \n</div>\n\n<div class=\"cardBox\" *ngIf=\"isEmpty\">\n  <p>No hay elementos para mostrar</p>\n</div>\n\n\n<app-error class=\"errorBox\" [msg]='errorMsg' [ngClass]=\"showError\" (closeError)=\"closeError()\"></app-error>\n\n<div class=\"confirmBox\" [ngClass]=\"showConfirm\">\n  <div class=\"blackBox\" (click)=\"closeConfirm()\"></div>\n  <div class=\"logBox2\">\n    <p class=\"confirmHeader\">CONFIRMACIÓN</p>\n    <p class=\"confirmContent\">Segro que quiere eliminar este elemento</p>\n    <div class=\"confirmButtons\">\n      <button type=\"button\" class=\"confirm buttonBox\" (click)=\"deleteItem($event, deletedItem)\">\n        <p>SÍ</p>\n      </button>\n      <button type=\"button\" class=\"goback buttonBox\" (click)=\"closeConfirm()\">\n        <p>NO</p>\n      </button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/components/lista-rol/lista-rol.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-rol/lista-rol.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2xpc3RhLXJvbC9saXN0YS1yb2wuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/components/lista-rol/lista-rol.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/components/lista-rol/lista-rol.component.ts ***!
  \***********************************************************************/
/*! exports provided: ListaRolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaRolComponent", function() { return ListaRolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__);









pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default.a.pdfMake.vfs;
var ListaRolComponent = /** @class */ (function () {
    function ListaRolComponent(auth, dbHandler, router, fb) {
        this.auth = auth;
        this.dbHandler = dbHandler;
        this.router = router;
        this.fb = fb;
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTrashAlt"];
        this.faPdf = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faFilePdf"];
        this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEye"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEdit"];
    }
    ListaRolComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initComponent("/roles", "Lista de Roles", "Agregar Rol", "roles");
        this.initForm();
        this.isEmpty = true;
        var auxfields = this.dbHandler.getLocal(this.name + "Fields");
        var auxValues = this.dbHandler.getLocal(this.name + "Values");
        this.fields = ["Id", "Nombre"];
        this.values = [];
        auxValues.forEach(function (value) {
            var aux = [value._id, value.nombre];
            _this.values.push(aux);
        });
        if (this.values.length) {
            this.isEmpty = false;
        }
    };
    ListaRolComponent.prototype.initComponent = function (endpoint, title, addText, name) {
        this.endpoint = endpoint;
        this.title = title;
        this.addText = addText;
        this.name = name;
    };
    ListaRolComponent.prototype.deleteItem = function (event, index) {
        var _this = this;
        var auxValues = this.dbHandler.getLocal(this.name + "Values");
        var item = auxValues[index];
        var myEnd = this.endpoint;
        var type = this.auth.getType();
        this.isAdmin = type === "Admin";
        this.isVendedor = type === "Vendedor";
        this.isSuperAdmin = type === "SuperAdmin";
        //Autorizacion basada en roles. Modificar eventualmente a basada en reglas
        console.log(this.isSuperAdmin);
        console.log(this.isAdmin);
        if (!this.isSuperAdmin) {
            this.closeConfirm();
            var errorMsg = "Usuario no autorizado";
            this.openError(errorMsg);
        }
        else {
            this.dbHandler.deleteSomething(item._id, myEnd).subscribe(function (data) {
                _this.closeConfirm();
                if (!data.status) {
                    var errorMsg = data.msg;
                    _this.openError(errorMsg);
                }
                else {
                    _this.dbHandler.actualizar();
                }
            });
        }
    };
    ListaRolComponent.prototype.confirmDelete = function (event, item) {
        this.deletedItem = item;
        this.openConfirm();
    };
    ListaRolComponent.prototype.openConfirm = function () {
        this.showConfirm = {
            confirmAct: true
        };
    };
    ListaRolComponent.prototype.closeConfirm = function () {
        this.showConfirm = {
            confirmAct: false
        };
    };
    ListaRolComponent.prototype.openUpdate = function (event, item) {
        this.router.navigateByUrl("/actualizar/rol/" + item);
    };
    ListaRolComponent.prototype.agregar = function () {
        this.router.navigateByUrl("/registro/rol");
    };
    ListaRolComponent.prototype.habilitarElemento = function (event, elemento, isHabilitar) { };
    ListaRolComponent.prototype.openError = function (msg) {
        this.errorMsg = msg;
        this.showError = {
            errorAct: true
        };
    };
    ListaRolComponent.prototype.closeError = function () {
        this.showError = {
            errorAct: false
        };
    };
    ListaRolComponent.prototype.initForm = function () {
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("")
        });
    };
    ListaRolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-lista-rol",
            template: __webpack_require__(/*! ./lista-rol.component.html */ "./src/app/dashboard/components/lista-rol/lista-rol.component.html"),
            styles: [__webpack_require__(/*! ./lista-rol.component.scss */ "./src/app/dashboard/components/lista-rol/lista-rol.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], ListaRolComponent);
    return ListaRolComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/lista-usuario/lista-usuario.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-usuario/lista-usuario.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"btnBox\">\n  <button class=\"buttonBox\" (click)=\"agregar()\">\n    {{ addText }}\n  </button>\n</div>\n<div class=\"cardBox\" *ngIf=\"!isEmpty\">\n  <div class=\"listBox\">\n    <table class=\"classtable\">\n      <thead class=\"classthead\">\n        <tr class=\"classtr\">\n          <th class=\"classth\" scope=\"col\">Acciones</th>\n          <th class=\"classth\" scope=\"col\" *ngFor=\"let field of fields\">{{ field }}</th>\n        </tr>\n      </thead>\n      <tbody class=\"classtbody\">\n        <tr class=\"classtr\" *ngFor=\"let value of values; let i = index\">\n          <div class=\"btn-details\">\n            <fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEye\" size=\"2x\" (click)=\"verDetalle($event, i)\">\n            </fa-icon>\n            <fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEdit\" size=\"2x\" (click)=\"openUpdate($event, i)\">\n            </fa-icon>\n            <fa-icon style=\"color: red; stroke: black\" class=\"faIcon\" [icon]=\"faPdf\" size=\"2x\"\n              (click)=\"generatePdf($event, i)\"></fa-icon>\n            <fa-icon style=\"color: red\" class=\"faIcon\" [icon]=\"faTrash\" size=\"2x\" (click)=\"confirmDelete($event, i)\">\n            </fa-icon>\n          </div>\n\n          <td class=\"classtd\" *ngFor=\"let item of value\">\n            <p>{{ item }}</p>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n    <br><br>\n  </div>\n\n</div>\n<div class=\"cardBox\" *ngIf=\"isEmpty\">\n  <p>No hay elementos para mostrar</p>\n</div>\n\n\n<app-error class=\"errorBox\" [msg]='errorMsg' [ngClass]=\"showError\" (closeError)=\"closeError()\"></app-error>\n\n<div class=\"confirmBox\" [ngClass]=\"showConfirm\">\n  <div class=\"blackBox\" (click)=\"closeConfirm()\"></div>\n  <div class=\"logBox2\">\n    <p class=\"confirmHeader\">CONFIRMACIÓN</p>\n    <p class=\"confirmContent\">Segro que quiere eliminar este elemento</p>\n    <div class=\"confirmButtons\">\n      <button type=\"button\" class=\"confirm buttonBox\" (click)=\"deleteItem($event, deletedItem)\">\n        <p>SÍ</p>\n      </button>\n      <button type=\"button\" class=\"goback buttonBox\" (click)=\"closeConfirm()\">\n        <p>NO</p>\n      </button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/components/lista-usuario/lista-usuario.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-usuario/lista-usuario.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL2xpc3RhLXVzdWFyaW8vbGlzdGEtdXN1YXJpby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/components/lista-usuario/lista-usuario.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/components/lista-usuario/lista-usuario.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ListaUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaUsuarioComponent", function() { return ListaUsuarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__);









pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default.a.pdfMake.vfs;
var ListaUsuarioComponent = /** @class */ (function () {
    function ListaUsuarioComponent(auth, dbHandler, router, fb) {
        this.auth = auth;
        this.dbHandler = dbHandler;
        this.router = router;
        this.fb = fb;
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTrashAlt"];
        this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEye"];
        this.faPdf = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faFilePdf"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEdit"];
    }
    ListaUsuarioComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initComponent("/users", "Lista de Usuarios", "Agregar Usuario", "users");
        this.initForm();
        this.isEmpty = true;
        var auxfields = this.dbHandler.getLocal(this.name + "Fields");
        var auxValues = this.dbHandler.getLocal(this.name + "Values");
        this.fields = ["Id", "Nombre", "Usuario", "Correo", "Tipo"];
        this.values = [];
        auxValues.forEach(function (value) {
            var aux = [value._id, value.name, value.username, value.mail, value.type];
            _this.values.push(aux);
        });
        if (this.values.length) {
            this.isEmpty = false;
        }
    };
    ListaUsuarioComponent.prototype.initComponent = function (endpoint, title, addText, name) {
        this.endpoint = endpoint;
        this.title = title;
        this.addText = addText;
        this.name = name;
    };
    ListaUsuarioComponent.prototype.deleteItem = function (event, index) {
        var _this = this;
        var auxValues = this.dbHandler.getLocal(this.name + "Values");
        var item = auxValues[index];
        var myEnd = this.endpoint;
        var type = this.auth.getType();
        this.isAdmin = type === "Admin";
        this.isVendedor = type === "Vendedor";
        this.isSuperAdmin = type === "SuperAdmin";
        //Autorizacion basada en roles. Modificar eventualmente a basada en reglas
        console.log(this.isSuperAdmin);
        console.log(this.isAdmin);
        if (!this.isSuperAdmin) {
            this.closeConfirm();
            var errorMsg = "Usuario no autorizado";
            this.openError(errorMsg);
        }
        else {
            this.dbHandler.deleteSomething(item._id, myEnd).subscribe(function (data) {
                _this.closeConfirm();
                if (!data.status) {
                    var errorMsg = data.msg;
                    _this.openError(errorMsg);
                }
                else {
                    _this.dbHandler.actualizar();
                }
            });
        }
    };
    ListaUsuarioComponent.prototype.confirmDelete = function (event, item) {
        this.deletedItem = item;
        this.openConfirm();
    };
    ListaUsuarioComponent.prototype.openConfirm = function () {
        this.showConfirm = {
            confirmAct: true
        };
    };
    ListaUsuarioComponent.prototype.closeConfirm = function () {
        this.showConfirm = {
            confirmAct: false
        };
    };
    ListaUsuarioComponent.prototype.openUpdate = function (event, item) {
        this.router.navigateByUrl("/actualizar/usuario/" + item);
    };
    ListaUsuarioComponent.prototype.agregar = function () {
        this.router.navigateByUrl("/registro/usuario");
    };
    ListaUsuarioComponent.prototype.habilitarElemento = function (event, elemento, isHabilitar) { };
    ListaUsuarioComponent.prototype.initForm = function () {
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("")
        });
    };
    ListaUsuarioComponent.prototype.openError = function (msg) {
        this.errorMsg = msg;
        this.showError = {
            errorAct: true
        };
    };
    ListaUsuarioComponent.prototype.closeError = function () {
        this.showError = {
            errorAct: false
        };
    };
    ListaUsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-lista-usuario",
            template: __webpack_require__(/*! ./lista-usuario.component.html */ "./src/app/dashboard/components/lista-usuario/lista-usuario.component.html"),
            styles: [__webpack_require__(/*! ./lista-usuario.component.scss */ "./src/app/dashboard/components/lista-usuario/lista-usuario.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], ListaUsuarioComponent);
    return ListaUsuarioComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/components/sidemenu/sidemenu.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/components/sidemenu/sidemenu.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"cisNav\" class=\"navBox\">\n    <ul class=\"navList\">\n        <div class=\"listMenuBox\" *ngFor=\"let item of myMenu;\">\n            <li [id]=\"item.id\" class=\"navElement opt\" (click)=\"tMenu($event, item)\">\n                <a>\n                    <fa-icon [icon]=\"item.icon\" class=\"menuIcon\"></fa-icon>{{item.name}}\n                </a>\n            </li>\n            <ul class=\"navList\">\n                <div class=\"lBox\" [ngClass]=\"item.class\" *ngFor=\"let child of item.childs;\">\n                    <li [id]=\" child.id \" class=\"navChild \">\n                        <a [routerLinkActive]=\"[ 'active'] \" [routerLinkActiveOptions]=\"{exact:true} \"\n                            [routerLink]=\"child.link \">\n                            {{child.name}}\n                        </a>\n                    </li>\n                </div>\n            </ul>\n        </div>\n    </ul>\n</nav>"

/***/ }),

/***/ "./src/app/dashboard/components/sidemenu/sidemenu.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/components/sidemenu/sidemenu.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navBox {\n  width: 100%;\n  height: 100%;\n  z-index: 2500;\n  font-family: \"Montserrat\", sans-serif; }\n\n/*.navBox::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n    border-radius: 10px;\n    background-color: #afccf4;\n    border-color: #9ba6c0;\n    border-width: 2px;\n    border-style: solid;\n}\n\n.navBox::-webkit-scrollbar {\n    width: 12px;\n    background-color: #f5f5f5;\n}\n\n.navBox::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n    background-color: #819fe2;\n}*/\n\n.listMenuBox {\n  width: 100%;\n  overflow: hidden; }\n\n.navList {\n  padding: 0px;\n  width: 100%;\n  display: inline-flex;\n  align-self: center;\n  flex-direction: column;\n  align-items: flex-start;\n  color: white; }\n\n.menuIcon {\n  margin-right: 15px;\n  font-size: 18px; }\n\n.navList a {\n  width: 100%;\n  color: white;\n  font-size: 14px; }\n\n.navElement {\n  display: flex;\n  align-items: center;\n  color: black;\n  width: 100%;\n  height: 50px;\n  cursor: pointer;\n  padding: 12px 25px;\n  transition: all 0.3s ease; }\n\n.navElement:hover {\n    background: #212535; }\n\na {\n  text-decoration: none !important; }\n\n.navElement a:active {\n  display: flex;\n  align-items: flex-start; }\n\n.lBox {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: flex-start;\n  overflow: hidden;\n  width: 100%;\n  margin-bottom: 1px;\n  max-height: 0;\n  transition: max-height 0.2s ease-out; }\n\n.navChild {\n  display: flex;\n  align-items: center;\n  color: white;\n  width: 100%;\n  height: 30px;\n  cursor: pointer;\n  margin: 10px 23px;\n  padding-left: 7px;\n  padding-top: 6px; }\n\n.navChild a {\n  width: 100%;\n  height: 100%;\n  color: white;\n  font-size: 12px; }\n\n.navChild:hover {\n  border-left: 3px solid #347fc4; }\n\n.aBox {\n  max-height: 200vh; }\n\n.aMenu {\n  background-color: white;\n  margin-bottom: 0;\n  color: #0297E7;\n  font-weight: bold; }\n\n.sideFoot {\n  display: block;\n  margin-top: 50px;\n  width: 100%;\n  height: auto; }\n\n.sImg {\n  display: block;\n  width: 80%;\n  position: relative;\n  margin: 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZ2Vsb2Fjci9Qcm95ZWN0b3MvSW5WZW4vaW52ZW5BcHAvaW52ZW5hcHAvc3JjL2FwcC9kYXNoYm9hcmQvY29tcG9uZW50cy9zaWRlbWVudS9zaWRlbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2NvbXBvbmVudHMvc2lkZW1lbnUvc2lkZW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUE7RUFDQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixxQ0FOK0IsRUFBQTs7QUFTaEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQ1NFOztBRFdGO0VBQ0MsV0FBVztFQUNSLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUduQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUduQjtFQUNDLGFBQWE7RUFDVixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNsQixrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUE7O0FBUjFCO0lBVUUsbUJBQW1CLEVBQUE7O0FBSXJCO0VBQ0ksZ0NBQWdDLEVBQUE7O0FBR3BDO0VBQ0MsYUFBYTtFQUNWLHVCQUF1QixFQUFBOztBQUczQjtFQUNDLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixvQ0FBb0MsRUFBQTs7QUFHckM7RUFDQyxhQUFhO0VBQ1YsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWUsRUFBQTs7QUFHbkI7RUFDQyw4QkFuSGdCLEVBQUE7O0FBc0hqQjtFQUNDLGlCQUFpQixFQUFBOztBQUdsQjtFQUNDLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUdsQjtFQUNDLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHYjtFQUNDLGNBQWM7RUFDZCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wb25lbnRzL3NpZGVtZW51L3NpZGVtZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHByaW1hcnk6ICMzNDdmYzQ7IC8vcmdiKDUyLDEyNywxOTYpO1xuJHNlY29uZGFyeTogIzMxZTk4MTtcbiRib3JkZXItaW5wdXQ6ICMzNDdmYzQ7XG4kdGhpcmQ6ICMxNjE5MjU7XG4kZm9udDE6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuJGZvbnQyOiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiRmb250MzogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuXG4ubmF2Qm94e1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHR6LWluZGV4OiAyNTAwO1xuXHRmb250LWZhbWlseTogJGZvbnQzO1xufVxuXG4vKi5uYXZCb3g6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FmY2NmNDtcbiAgICBib3JkZXItY29sb3I6ICM5YmE2YzA7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuLm5hdkJveDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbi5uYXZCb3g6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgxOWZlMjtcbn0qL1xuXG4ubGlzdE1lbnVCb3h7XG5cdHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5uYXZMaXN0e1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5tZW51SWNvbntcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ubmF2TGlzdCBhe1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5uYXZFbGVtZW50e1xuXHRkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cdHBhZGRpbmc6IDEycHggMjVweDtcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblx0Jjpob3ZlciB7XG5cdFx0YmFja2dyb3VuZDogIzIxMjUzNTtcblx0fVxufVxuXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcdFxufVxuXG4ubmF2RWxlbWVudCBhOmFjdGl2ZXtcblx0ZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLmxCb3h7XG5cdGRpc3BsYXk6IGlubGluZS1mbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0d2lkdGg6IDEwMCU7XG5cdG1hcmdpbi1ib3R0b206IDFweDtcblx0bWF4LWhlaWdodDogMDtcblx0dHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjJzIGVhc2Utb3V0O1xufVxuXG4ubmF2Q2hpbGR7XG5cdGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW46IDEwcHggMjNweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xufVxuXG4ubmF2Q2hpbGQgYXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm5hdkNoaWxkOmhvdmVye1xuXHRib3JkZXItbGVmdDogM3B4IHNvbGlkICRwcmltYXJ5O1xufVxuXG4uYUJveHtcblx0bWF4LWhlaWdodDogMjAwdmg7XG59XG5cbi5hTWVudXtcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdG1hcmdpbi1ib3R0b206IDA7XG5cdGNvbG9yOiAjMDI5N0U3O1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNpZGVGb290e1xuXHRkaXNwbGF5OiBibG9jaztcblx0bWFyZ2luLXRvcDogNTBweDtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogYXV0bzsgXG59XG5cbi5zSW1ne1xuXHRkaXNwbGF5OiBibG9jaztcblx0d2lkdGg6IDgwJTtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRtYXJnaW46IDAgYXV0bztcbn0iLCIubmF2Qm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMjUwMDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmOyB9XG5cbi8qLm5hdkJveDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZjY2Y0O1xuICAgIGJvcmRlci1jb2xvcjogIzliYTZjMDtcbiAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG4ubmF2Qm94Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cblxuLm5hdkJveDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODE5ZmUyO1xufSovXG4ubGlzdE1lbnVCb3gge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuXG4ubmF2TGlzdCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBjb2xvcjogd2hpdGU7IH1cblxuLm1lbnVJY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBmb250LXNpemU6IDE4cHg7IH1cblxuLm5hdkxpc3QgYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDsgfVxuXG4ubmF2RWxlbWVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxMnB4IDI1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7IH1cbiAgLm5hdkVsZW1lbnQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICMyMTI1MzU7IH1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50OyB9XG5cbi5uYXZFbGVtZW50IGE6YWN0aXZlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IH1cblxuLmxCb3gge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC4ycyBlYXNlLW91dDsgfVxuXG4ubmF2Q2hpbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAxMHB4IDIzcHg7XG4gIHBhZGRpbmctbGVmdDogN3B4O1xuICBwYWRkaW5nLXRvcDogNnB4OyB9XG5cbi5uYXZDaGlsZCBhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEycHg7IH1cblxuLm5hdkNoaWxkOmhvdmVyIHtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjMzQ3ZmM0OyB9XG5cbi5hQm94IHtcbiAgbWF4LWhlaWdodDogMjAwdmg7IH1cblxuLmFNZW51IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGNvbG9yOiAjMDI5N0U3O1xuICBmb250LXdlaWdodDogYm9sZDsgfVxuXG4uc2lkZUZvb3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bzsgfVxuXG4uc0ltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogODAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/components/sidemenu/sidemenu.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/components/sidemenu/sidemenu.component.ts ***!
  \*********************************************************************/
/*! exports provided: SidemenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuComponent", function() { return SidemenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");




var SidemenuComponent = /** @class */ (function () {
    function SidemenuComponent(auth) {
        this.auth = auth;
        this.isSuperAdmin = true;
    }
    SidemenuComponent.prototype.ngOnInit = function () {
        /* 		this.user = this.auth.decode();
                this.isAdmin = (this.user.type === 'Admin');
                this.isVendedor = (this.user.type === 'Vendedor');
                this.isSuperAdmin = (this.user.type === 'SuperAdmin'); */
        if (this.isAdmin) {
            this.setAdminMenu();
        }
        else if (this.isVendedor) {
            this.setVendedorMenu();
        }
        else if (this.isSuperAdmin) {
            this.setSuperAdminMenu();
        }
    };
    SidemenuComponent.prototype.setAdminMenu = function () {
        this.myMenu = [{
                name: 'Directorio',
                link: '/dir/0',
                id: 0,
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faUserCog"],
                boxOn: false, childs: [{
                        name: 'Registrar clientes',
                        link: '/registro/cliente',
                        id: 0
                    }, {
                        name: 'Ver clientes',
                        link: '/lista/cliente',
                        id: 1
                    }, {
                        name: 'Registrar proveedores',
                        link: '/registro/proveedor',
                        id: 2
                    }, {
                        name: 'Ver proveedores',
                        link: '/lista/proveedor',
                        id: 3
                    }],
            }, {
                name: 'Inventario',
                link: '/inventario/0',
                id: 1,
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCalendarPlus"],
                boxOn: false, childs: [{
                        name: 'Registrar almacenes',
                        link: '/registro/almacen',
                        id: 0
                    }, {
                        name: 'Ver almacen',
                        link: '/lista/almacen',
                        id: 1
                    }, {
                        name: 'Registrar productos',
                        link: '/registro/producto',
                        id: 2
                    }, {
                        name: 'Ver disponibilidad de material',
                        link: '/lista/producto',
                        id: 3
                    }, {
                        name: 'Lista de precios',
                        link: '/precios',
                        id: 4
                    }]
            }, , {
                name: 'Compras',
                link: '/compras',
                id: 2,
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCalendarPlus"],
                boxOn: false, childs: [{
                        name: 'Registrar compra de mercancia',
                        link: '/registro/compra',
                        id: 0
                    }, {
                        name: 'Ver compra de mercancia',
                        link: '/lista/compra',
                        id: 1
                    } /* ,{
                        name: 'Registrar egreso de mercancia',
                        link: '/registro/egreso',
                        id: 2
                    },{
                        name: 'Ver egresos de mercancia',
                        link: '/lista/egreso',
                        id: 3
                    } */
                ],
            }, {
                name: 'Ventas',
                link: '/ventas',
                id: 3,
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCalendarPlus"],
                boxOn: false, childs: [{
                        name: 'Registrar solicitud de pedido',
                        link: '/registro/pedido',
                        id: 0
                    }, {
                        name: 'Ver solicitudes de pedido',
                        link: '/lista/pedido',
                        id: 1
                    }, {
                        name: 'Registrar proforma',
                        link: '/registro/proforma',
                        id: 2
                    }, {
                        name: 'Ver proformas',
                        link: '/lista/proforma',
                        id: 3
                    }],
            }, {
                name: 'Finanzas',
                link: '/finanzas',
                id: 4,
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCalendarPlus"],
                boxOn: false, childs: [{
                        name: 'Registrar banco',
                        link: '/registro/banco',
                        id: 0
                    }, {
                        name: 'Ver bancos',
                        link: '/lista/banco',
                        id: 1
                    }, {
                        name: 'Disponibilidad bancaria',
                        link: '/disponibilidadbancaria',
                        id: 2
                    }, {
                        name: 'Flujo de caja',
                        link: '/flujodecaja',
                        id: 3
                    }, {
                        name: 'Proyecciones',
                        link: '/proyecciones',
                        id: 4
                    }],
            }, {
                name: 'Contabilidad',
                link: '/contabilidad',
                id: 5,
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCalendarPlus"],
                boxOn: false, childs: [{
                        name: 'Registrar cuenta T',
                        link: '/registro/cuentat',
                        id: 0
                    }, {
                        name: 'Ver cuentas T',
                        link: '/lista/cuentat',
                        id: 1
                    }, {
                        name: 'Registrar movimiento diario',
                        link: '/registro/movimientodiario',
                        id: 2
                    }, {
                        name: 'Ver movimientos diarios',
                        link: '/lista/movimientodiario',
                        id: 3
                    }, {
                        name: 'Ver cuentas por cobrar',
                        link: '/lista/cuentasporcobrar',
                        id: 4
                    }, {
                        name: 'Ver cuentas por pagar',
                        link: '/lista/cuentasporpagar',
                        id: 5
                    }, {
                        name: 'Estado de resultados',
                        link: '/estadoderesultados',
                        id: 6
                    },]
            }];
    };
    SidemenuComponent.prototype.setVendedorMenu = function () {
        this.myMenu = [{
                name: 'Directorio',
                link: '/dir',
                id: 0,
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faUserCog"],
                boxOn: false, childs: [{
                        name: 'Registrar cliente',
                        link: '/registro/cliente',
                        id: 0
                    }, {
                        name: 'Ver clientes',
                        link: '/lista/cliente',
                        id: 1
                    }],
            }, {
                name: 'Inventario',
                link: '/inventario',
                id: 1,
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCalendarPlus"],
                boxOn: false, childs: [{
                        name: 'Ver disponibilidad de material',
                        link: '/lista/producto',
                        id: 0
                    }],
            }, {
                name: 'Ventas',
                link: '/ventas',
                id: 2,
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCalendarPlus"],
                boxOn: false, childs: [{
                        name: 'Registrar solicitud de pedido',
                        link: '/registro/pedido',
                        id: 0
                    }, {
                        name: 'Ver solicitudes de pedido',
                        link: '/lista/pedido',
                        id: 1
                    }],
            }];
    };
    SidemenuComponent.prototype.setSuperAdminMenu = function () {
        this.myMenu = [{
                name: 'Directorio',
                link: '/dir',
                id: 0,
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faUserCog"],
                boxOn: false, childs: [{
                        name: 'Registrar clientes',
                        link: '/registro/cliente',
                        id: 0
                    }, {
                        name: 'Ver clientes',
                        link: '/lista/cliente',
                        id: 1
                    }, {
                        name: 'Registrar proveedores',
                        link: '/registro/proveedor',
                        id: 2
                    }, {
                        name: 'Ver proveedor',
                        link: '/lista/proveedor',
                        id: 3
                    }],
            }, {
                name: 'Inventario',
                link: '/inventario',
                id: 1,
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCalendarPlus"],
                boxOn: false, childs: [{
                        name: 'Registrar almacenes',
                        link: '/registro/almacen',
                        id: 0
                    }, {
                        name: 'Ver almacen',
                        link: '/lista/almacen',
                        id: 1
                    }, {
                        name: 'Registrar productos',
                        link: '/registro/producto',
                        id: 2
                    }, {
                        name: 'Ver disponibilidad de material',
                        link: '/lista/producto',
                        id: 3
                    }, {
                        name: 'Lista de precios',
                        link: '/precios',
                        id: 4
                    }]
            }, {
                name: 'Compras',
                link: '/compras',
                id: 2,
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCalendarPlus"],
                boxOn: false, childs: [{
                        name: 'Registrar compra de mercancia',
                        link: '/registro/compra',
                        id: 0
                    }, {
                        name: 'Ver compra de mercancia',
                        link: '/lista/compra',
                        id: 1
                    }, {
                        name: 'Registrar gasto',
                        link: '/registro/gasto',
                        id: 2
                    }, {
                        name: 'Ver gastos',
                        link: '/lista/gasto',
                        id: 3
                    }, {
                        name: 'Registrar pago',
                        link: '/registro/pago',
                        id: 4
                    }, {
                        name: 'Ver pagos',
                        link: '/lista/pago',
                        id: 5
                    }, {
                        name: 'Registrar cuenta por pagar',
                        link: '/registro/cuentasporpagar',
                        id: 6
                    }, {
                        name: 'Ver cuentas por pagar',
                        link: '/lista/cuentasporpagar',
                        id: 7
                    },],
            }, {
                name: 'Ventas',
                link: '/ventas',
                id: 3,
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCalendarPlus"],
                boxOn: false, childs: [{
                        name: 'Registrar solicitud de pedido',
                        link: '/registro/pedido',
                        id: 0
                    }, {
                        name: 'Ver solicitudes de pedido',
                        link: '/lista/pedido',
                        id: 1
                    }, {
                        name: 'Registrar proforma',
                        link: '/registro/proforma',
                        id: 2
                    }, {
                        name: 'Ver proformas',
                        link: '/lista/proforma',
                        id: 3
                    }, {
                        name: 'Registrar cobro',
                        link: '/registro/cobro',
                        id: 4
                    }, {
                        name: 'Ver cobros',
                        link: '/lista/cobro',
                        id: 5
                    }, {
                        name: 'Registrar cuenta por cobrar',
                        link: '/registro/cuentaporcobrar',
                        id: 6
                    }, {
                        name: 'Ver cuentas por cobrar',
                        link: '/lista/cuentasporcobrar',
                        id: 7
                    },],
            }, {
                name: 'Finanzas',
                link: '/finanzas',
                id: 4,
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCalendarPlus"],
                boxOn: false, childs: [{
                        name: 'Registrar banco',
                        link: '/registro/banco',
                        id: 0
                    }, {
                        name: 'Ver bancos',
                        link: '/lista/banco',
                        id: 1
                    }, {
                        name: 'Disponibilidad bancaria',
                        link: '/disponibilidadbancaria',
                        id: 2
                    }, {
                        name: 'Flujo de caja',
                        link: '/flujodecaja',
                        id: 3
                    }, {
                        name: 'Proyecciones',
                        link: '/proyecciones',
                        id: 4
                    }],
            }, {
                name: 'Contabilidad',
                link: '/contabilidad',
                id: 5,
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCalendarPlus"],
                boxOn: false, childs: [{
                        name: 'Registrar cuenta T',
                        link: '/registro/cuentat',
                        id: 0
                    }, {
                        name: 'Ver cuentas T',
                        link: '/lista/cuentat',
                        id: 1
                    }, {
                        name: 'Estado de resultados',
                        link: '/estadoderesultados',
                        id: 2
                    },]
            }, {
                name: 'Administrador',
                link: '/administrador',
                id: 6,
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCalendarPlus"],
                boxOn: false, childs: [{
                        name: 'Registro de usuarios',
                        link: '/registro/usuario',
                        id: 0
                    }, {
                        name: 'Lista de usuarios',
                        link: '/lista/usuario',
                        id: 1
                    }, {
                        name: 'Registro de roles',
                        link: '/registro/rol',
                        id: 2
                    }, {
                        name: 'Lista de roles',
                        link: '/lista/rol',
                        id: 3
                    }, {
                        name: 'Datos de la compañía',
                        link: '/compañia',
                        id: 4
                    }],
            }];
    };
    SidemenuComponent.prototype.tMenu = function (event, item) {
        if (this.prevMenu == null) {
            this.prevMenu = item.id;
        }
        this.menuOn = item.id;
        if (this.prevMenu != this.menuOn) {
            this.closeMenus();
        }
        this.prevMenu = this.menuOn;
        this.myMenu[item.id].boxOn = !this.myMenu[item.id].boxOn;
        this.myMenu[item.id].class = {
            aBox: this.myMenu[item.id].boxOn,
        };
    };
    SidemenuComponent.prototype.closeMenus = function () {
        this.myMenu.forEach(function (item) {
            item.boxOn = false;
            item.class = {
                aBox: false,
            };
        });
    };
    SidemenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidemenu',
            template: __webpack_require__(/*! ./sidemenu.component.html */ "./src/app/dashboard/components/sidemenu/sidemenu.component.html"),
            styles: [__webpack_require__(/*! ./sidemenu.component.scss */ "./src/app/dashboard/components/sidemenu/sidemenu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SidemenuComponent);
    return SidemenuComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/containers/actualizar/actualizar.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/containers/actualizar/actualizar.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modBox\">\n  <app-form-clientes class=\"modChild\" *ngIf=\"isCliente\" [editMode]=\"editMode\" [cliente]=\"selectedeItem\"\n    (onData)=\"onData($event)\"></app-form-clientes>\n  <app-form-proveedores class=\"modChild\" *ngIf=\"isProveedor\" [editMode]=\"editMode\" [proveedor]=\"selectedeItem\"\n    (onData)=\"onData($event)\"></app-form-proveedores>\n  <app-form-pedido class=\"modChild\" *ngIf=\"isPedido\" [editMode]=\"editMode\" [pedido]=\"selectedeItem\"\n    (onData)=\"onData($event)\"></app-form-pedido>\n  <app-form-producto class=\"modChild\" *ngIf=\"isProducto\" [editMode]=\"editMode\" [producto]=\"selectedeItem\"\n    (onData)=\"onData($event)\"></app-form-producto>\n  <app-form-almacen class=\"modChild\" *ngIf=\"isAlmacen\" [editMode]=\"editMode\" [almacen]=\"selectedeItem\"\n    (onData)=\"onData($event)\"></app-form-almacen>\n  <app-form-usuario class=\"modChild\" *ngIf=\"isUsuario\" [editMode]=\"editMode\" [usuario]=\"selectedeItem\"\n    (onData)=\"onData($event)\"></app-form-usuario>\n  <app-form-rol class=\"modChild\" *ngIf=\"isRol\" [editMode]=\"editMode\" [rol]=\"selectedeItem\" (onData)=\"onData($event)\">\n  </app-form-rol>\n  <app-form-compra class=\"modChild\" *ngIf=\"isCompra\" [editMode]=\"editMode\" [compra]=\"selectedeItem\"\n    (onData)=\"onData($event)\"></app-form-compra>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/containers/actualizar/actualizar.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/containers/actualizar/actualizar.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb250YWluZXJzL2FjdHVhbGl6YXIvYWN0dWFsaXphci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/containers/actualizar/actualizar.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/containers/actualizar/actualizar.component.ts ***!
  \*************************************************************************/
/*! exports provided: ActualizarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActualizarComponent", function() { return ActualizarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var ActualizarComponent = /** @class */ (function () {
    function ActualizarComponent(actRoute, dbHandler, router, fb) {
        var _this = this;
        this.actRoute = actRoute;
        this.dbHandler = dbHandler;
        this.router = router;
        this.fb = fb;
        this.editMode = 0;
        this.actRoute.params.subscribe(function (params) {
            _this.id = params["index"];
            _this.item = params["item"];
        });
        this.router.events.subscribe(function (event) {
            _this.actRoute.url.subscribe(function (value) {
                var url = value[0].path;
                if (url == "actualizar") {
                    if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                        _this.ngOnInit();
                    }
                }
            });
        });
    }
    ActualizarComponent.prototype.ngOnInit = function () {
        this.isProveedor = false;
        this.isCliente = false;
        this.isUsuario = false;
        this.isRol = false;
        this.isPedido = false;
        this.isCompra = false;
        this.isProducto = false;
        this.isAlmacen = false;
        var auxValues;
        switch (this.item) {
            case "cliente":
                this.isCliente = true;
                auxValues = this.dbHandler.getLocal("clientesValues");
                //            this.selectedItem = auxValues[this.id];
                break;
            case "proveedor":
                this.isProveedor = true;
                auxValues = this.dbHandler.getLocal("proveedoresValues");
                //            this.selectedItem = auxValues[this.id];
                break;
            case "pedido":
                this.isPedido = true;
                auxValues = this.dbHandler.getLocal("pedidosValues");
                //            this.selectedItem = auxValues[this.id];
                break;
            case "almacen":
                this.isAlmacen = true;
                auxValues = this.dbHandler.getLocal("almacenesValues");
                //            this.selectedItem = auxValues[this.id];
                break;
            case "producto":
                this.isProducto = true;
                auxValues = this.dbHandler.getLocal("productosValues");
                //            this.selectedItem = auxValues[this.id];
                break;
            case "compra":
                this.isCompra = true;
                auxValues = this.dbHandler.getLocal("comprasValues");
                //            this.selectedItem = auxValues[this.id];
                break;
            case "rol":
                this.isRol = true;
                auxValues = this.dbHandler.getLocal("rolesValues");
                //            this.selectedItem = auxValues[this.id];
                break;
            default:
                this.isUsuario = true;
                auxValues = this.dbHandler.getLocal("usersValues");
                //            this.selectedItem = auxValues[this.id];
                break;
        }
        this.selectedItem = auxValues[this.id];
    };
    ActualizarComponent.prototype.onData = function (event) {
        this.dbHandler.actualizar();
    };
    ActualizarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-actualizar",
            template: __webpack_require__(/*! ./actualizar.component.html */ "./src/app/dashboard/containers/actualizar/actualizar.component.html"),
            styles: [__webpack_require__(/*! ./actualizar.component.scss */ "./src/app/dashboard/containers/actualizar/actualizar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], ActualizarComponent);
    return ActualizarComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/containers/blank/blank.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/containers/blank/blank.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/containers/blank/blank.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/containers/blank/blank.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb250YWluZXJzL2JsYW5rL2JsYW5rLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/containers/blank/blank.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/containers/blank/blank.component.ts ***!
  \***************************************************************/
/*! exports provided: BlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankComponent", function() { return BlankComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlankComponent = /** @class */ (function () {
    function BlankComponent() {
    }
    BlankComponent.prototype.ngOnInit = function () { };
    BlankComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-blank",
            template: __webpack_require__(/*! ./blank.component.html */ "./src/app/dashboard/containers/blank/blank.component.html"),
            styles: [__webpack_require__(/*! ./blank.component.scss */ "./src/app/dashboard/containers/blank/blank.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlankComponent);
    return BlankComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/containers/company/company.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/containers/company/company.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modBox\">\n  <app-form-company class=\"modChild\" [editMode]=\"editMode\" [company]=\"company\" (onData)=\"onData($event)\">\n  </app-form-company>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/containers/company/company.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/containers/company/company.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb250YWluZXJzL2NvbXBhbnkvY29tcGFueS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/containers/company/company.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/containers/company/company.component.ts ***!
  \*******************************************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var CompanyComponent = /** @class */ (function () {
    function CompanyComponent(actRoute, dbHandler, router, fb) {
        var _this = this;
        this.actRoute = actRoute;
        this.dbHandler = dbHandler;
        this.router = router;
        this.fb = fb;
        this.editMode = 0;
        this.actRoute.params.subscribe(function (params) {
            _this.id = params["id"];
        });
        this.router.events.subscribe(function (event) {
            _this.actRoute.url.subscribe(function (value) {
                var url = value[0].path;
                if (url == "company") {
                    if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                        _this.ngOnInit();
                    }
                }
            });
        });
    }
    CompanyComponent.prototype.ngOnInit = function () {
        var auxCompany = this.dbHandler.getLocal("companyValues");
        if (auxCompany.length != 0) {
            this.company = auxCompany[0];
            this.editMode = 1;
        }
    };
    CompanyComponent.prototype.onData = function (event) {
        this.dbHandler.actualizar();
    };
    CompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-company",
            template: __webpack_require__(/*! ./company.component.html */ "./src/app/dashboard/containers/company/company.component.html"),
            styles: [__webpack_require__(/*! ./company.component.scss */ "./src/app/dashboard/containers/company/company.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/containers/detalle/detalle.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/containers/detalle/detalle.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modBox\">\n  <app-detalle-almacen class=\"modChild\" *ngIf=\"isAlmacen\"></app-detalle-almacen>\n  <app-detalle-banco class=\"modChild\" *ngIf=\"isBanco\"></app-detalle-banco>\n  <app-detalle-cliente class=\"modChild\" *ngIf=\"isCliente\"></app-detalle-cliente>\n  <app-detalle-cobro class=\"modChild\" *ngIf=\"isCobro\"></app-detalle-cobro>\n  <app-detalle-compra class=\"modChild\" *ngIf=\"isCompra\"></app-detalle-compra>\n  <app-detalle-cuenta-por-cobrar class=\"modChild\" *ngIf=\"isCuentasPorCobrar\"></app-detalle-cuenta-por-cobrar>\n  <app-detalle-cuenta-por-pagar class=\"modChild\" *ngIf=\"isCuentasPorPagar\"></app-detalle-cuenta-por-pagar>\n  <app-detalle-cuenta-t class=\"modChild\" *ngIf=\"isCuentasT\">\n  </app-detalle-cuenta-t>\n  <app-detalle-gasto class=\"modChild\" *ngIf=\"isGasto\"></app-detalle-gasto>\n  <app-detalle-pago class=\"modChild\" *ngIf=\"isPago\"></app-detalle-pago>\n  <app-detalle-pedido class=\"modChild\" *ngIf=\"isPedido\"></app-detalle-pedido>\n  <app-detalle-producto class=\"modChild\" *ngIf=\"isProducto\"></app-detalle-producto>\n  <app-detalle-proforma class=\"modChild\" *ngIf=\"isProforma\"></app-detalle-proforma>\n  <app-detalle-proveedor class=\"modChild\" *ngIf=\"isProveedor\"></app-detalle-proveedor>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/containers/detalle/detalle.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/containers/detalle/detalle.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb250YWluZXJzL2RldGFsbGUvZGV0YWxsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/containers/detalle/detalle.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/containers/detalle/detalle.component.ts ***!
  \*******************************************************************/
/*! exports provided: DetalleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleComponent", function() { return DetalleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var DetalleComponent = /** @class */ (function () {
    function DetalleComponent(actRoute, dbHandler, router, fb) {
        var _this = this;
        this.actRoute = actRoute;
        this.dbHandler = dbHandler;
        this.router = router;
        this.fb = fb;
        this.actRoute.params.subscribe(function (params) {
            _this.id = params["id"];
        });
        this.router.events.subscribe(function (event) {
            _this.actRoute.url.subscribe(function (value) {
                var url = value[0].path;
                if (url == "lista") {
                    if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                        _this.ngOnInit();
                    }
                }
            });
        });
    }
    DetalleComponent.prototype.ngOnInit = function () {
        this.isProveedor = false;
        this.isCliente = false;
        this.isUsuario = false;
        this.isRol = false;
        this.isPedido = false;
        this.isCompra = false;
        this.isProducto = false;
        this.isAlmacen = false;
        this.isBanco = false;
        this.isCobro = false;
        this.isPago = false;
        this.isGasto = false;
        this.isProforma = false;
        this.isMovimientoDiario = false;
        this.isCuentasT = false;
        this.isCuentasPorCobrar = false;
        this.isCuentasPorPagar = false;
        switch (this.id) {
            case "cliente":
                this.isCliente = true;
                break;
            case "proveedor":
                this.isProveedor = true;
                break;
            case "pedido":
                this.isPedido = true;
                break;
            case "almacen":
                this.isAlmacen = true;
                break;
            case "producto":
                this.isProducto = true;
                break;
            case "compra":
                this.isCompra = true;
                break;
            case "rol":
                this.isRol = true;
                break;
            case "banco":
                this.isBanco = true;
                break;
            case "movimientodiario":
                this.isMovimientoDiario = true;
                break;
            case "cuentat":
                this.isCuentasT = true;
                break;
            case "gasto":
                this.isGasto = true;
                break;
            case "cobro":
                this.isCobro = true;
                break;
            case "pago":
                this.isPago = true;
                break;
            case "proforma":
                this.isProforma = true;
                break;
            case "cuentasporcobrar":
                this.isCuentasPorCobrar = true;
                break;
            case "cuentasporpagar":
                this.isCuentasPorPagar = true;
                break;
            default:
                this.isUsuario = true;
                break;
        }
    };
    DetalleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-detalle",
            template: __webpack_require__(/*! ./detalle.component.html */ "./src/app/dashboard/containers/detalle/detalle.component.html"),
            styles: [__webpack_require__(/*! ./detalle.component.scss */ "./src/app/dashboard/containers/detalle/detalle.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], DetalleComponent);
    return DetalleComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/containers/disponibilidad-bancaria/disponibilidad-bancaria.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/dashboard/containers/disponibilidad-bancaria/disponibilidad-bancaria.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cardBox\" *ngIf=\"!isEmpty\">\n  <div class=\"listBox\">\n    <table class=\"classtable\">\n      <thead class=\"classthead\">\n        <tr class=\"classtr\">\n          <th class=\"classth\" scope=\"col\">Acciones</th>\n          <th class=\"classth\" scope=\"col\" *ngFor=\"let field of fields\">{{ field }}</th>\n        </tr>\n      </thead>\n      <tbody class=\"classtbody\">\n        <tr class=\"classtr\" *ngFor=\"let value of values; let i = index\">\n          <div class=\"btn-details-btnhd\">\n            <div>\n              <fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEye\" size=\"2x\" (click)=\"verDetalle($event, i)\">\n              </fa-icon>\n              <fa-icon style=\"color: grey\" class=\"faIcon\" [icon]=\"faEdit\" size=\"2x\" (click)=\"openUpdate($event, i)\">\n              </fa-icon>\n              <fa-icon style=\"color: red; stroke: black\" class=\"faIcon\" [icon]=\"faPdf\" size=\"2x\"\n                (click)=\"generatePdf($event, i)\"></fa-icon>\n              <fa-icon style=\"color: red\" class=\"faIcon\" [icon]=\"faTrash\" size=\"2x\" (click)=\"confirmDelete($event, i)\">\n              </fa-icon>\n            </div>\n\n            <div class=\"actionBox\">\n              <button type=\"button\" class=\"actionButton\" (click)=\"habilitarElemento($event, i, 1)\">\n                <p>HABILITAR</p>\n              </button>\n              <button type=\"button\" class=\"actionButton\" (click)=\"habilitarElemento($event, i, 0)\">\n                <p>DESHABILITAR</p>\n              </button>\n            </div>\n\n          </div>\n\n          <td class=\"classtd\" *ngFor=\"let item of value\">\n            <p>{{ item }}</p>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n    <br><br>\n  </div>\n</div>\n\n<div class=\"cardBox\" *ngIf=\"isEmpty\">\n  <p>No hay elementos para mostrar</p>\n</div>\n\n<app-error class=\"errorBox\" [msg]='errorMsg' [ngClass]=\"showError\" (closeError)=\"closeError()\"></app-error>\n\n<div class=\"confirmBox\" [ngClass]=\"showConfirm\">\n  <div class=\"blackBox\" (click)=\"closeConfirm()\"></div>\n  <div class=\"logBox2\">\n    <p class=\"confirmHeader\">CONFIRMACIÓN</p>\n    <p class=\"confirmContent\">Segro que quiere eliminar este elemento</p>\n    <div class=\"confirmButtons\">\n      <button type=\"button\" class=\"confirm buttonBox\" (click)=\"deleteItem($event, deletedItem)\">\n        <p>SÍ</p>\n      </button>\n      <button type=\"button\" class=\"goback buttonBox\" (click)=\"closeConfirm()\">\n        <p>NO</p>\n      </button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/containers/disponibilidad-bancaria/disponibilidad-bancaria.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/dashboard/containers/disponibilidad-bancaria/disponibilidad-bancaria.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb250YWluZXJzL2Rpc3BvbmliaWxpZGFkLWJhbmNhcmlhL2Rpc3BvbmliaWxpZGFkLWJhbmNhcmlhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/containers/disponibilidad-bancaria/disponibilidad-bancaria.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/dashboard/containers/disponibilidad-bancaria/disponibilidad-bancaria.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: DisponibilidadBancariaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisponibilidadBancariaComponent", function() { return DisponibilidadBancariaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8__);









pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_7___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_8___default.a.pdfMake.vfs;
var DisponibilidadBancariaComponent = /** @class */ (function () {
    function DisponibilidadBancariaComponent(auth, dbHandler, router, fb) {
        this.auth = auth;
        this.dbHandler = dbHandler;
        this.router = router;
        this.fb = fb;
        this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEye"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTrashAlt"];
        this.faPdf = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faFilePdf"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEdit"];
    }
    DisponibilidadBancariaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initComponent("/bancos", "Lista de Bancos", "Agregar Banco", "bancos");
        this.initForm();
        this.isEmpty = true;
        var auxfields = this.dbHandler.getLocal(this.name + "Fields");
        var auxValues = this.dbHandler.getLocal(this.name + "Values");
        this.fields = ["Alias", "Balance"];
        this.values = [];
        auxValues.forEach(function (value) {
            var aux = [value.alias, value.disponibilidad.montoDisponible];
            _this.values.push(aux);
        });
        if (this.values.length) {
            this.isEmpty = false;
        }
    };
    DisponibilidadBancariaComponent.prototype.initForm = function () {
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("")
        });
    };
    DisponibilidadBancariaComponent.prototype.initComponent = function (endpoint, title, addText, name) {
        this.endpoint = endpoint;
        this.title = title;
        this.addText = addText;
        this.name = name;
    };
    DisponibilidadBancariaComponent.prototype.deleteItem = function (event, index) {
        var _this = this;
        var auxValues = this.dbHandler.getLocal(this.name + "Values");
        var item = auxValues[index];
        var myEnd = this.endpoint;
        var type = this.auth.getType();
        this.isAdmin = type === "Admin";
        this.isVendedor = type === "Vendedor";
        this.isSuperAdmin = type === "SuperAdmin";
        //Autorizacion basada en roles. Modificar eventualmente a basada en reglas
        console.log(this.isSuperAdmin);
        console.log(this.isAdmin);
        if (!(this.isAdmin || this.isSuperAdmin)) {
            this.closeConfirm();
            var errorMsg = "Usuario no autorizado";
            this.openError(errorMsg);
        }
        else {
            this.dbHandler.deleteSomething(item._id, myEnd).subscribe(function (data) {
                _this.closeConfirm();
                if (!data.status) {
                    var errorMsg = data.msg;
                    _this.openError(errorMsg);
                }
                else {
                    _this.dbHandler.actualizar();
                }
            });
        }
    };
    DisponibilidadBancariaComponent.prototype.confirmDelete = function (event, item) {
        this.deletedItem = item;
        this.openConfirm();
    };
    DisponibilidadBancariaComponent.prototype.openConfirm = function () {
        this.showConfirm = {
            confirmAct: true
        };
    };
    DisponibilidadBancariaComponent.prototype.closeConfirm = function () {
        this.showConfirm = {
            confirmAct: false
        };
    };
    DisponibilidadBancariaComponent.prototype.openUpdate = function (event, item) {
        this.router.navigateByUrl("/actualizar/banco/" + item);
    };
    DisponibilidadBancariaComponent.prototype.agregar = function () {
        this.router.navigateByUrl("/registro/banco");
    };
    DisponibilidadBancariaComponent.prototype.habilitarElemento = function (event, elemento, isHabilitar) { };
    DisponibilidadBancariaComponent.prototype.openError = function (msg) {
        this.errorMsg = msg;
        this.showError = {
            errorAct: true
        };
    };
    DisponibilidadBancariaComponent.prototype.closeError = function () {
        this.showError = {
            errorAct: false
        };
    };
    DisponibilidadBancariaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-disponibilidad-bancaria",
            template: __webpack_require__(/*! ./disponibilidad-bancaria.component.html */ "./src/app/dashboard/containers/disponibilidad-bancaria/disponibilidad-bancaria.component.html"),
            styles: [__webpack_require__(/*! ./disponibilidad-bancaria.component.scss */ "./src/app/dashboard/containers/disponibilidad-bancaria/disponibilidad-bancaria.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], DisponibilidadBancariaComponent);
    return DisponibilidadBancariaComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/containers/estado-de-resultados/estado-de-resultados.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/dashboard/containers/estado-de-resultados/estado-de-resultados.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  estado-de-resultados works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/containers/estado-de-resultados/estado-de-resultados.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/dashboard/containers/estado-de-resultados/estado-de-resultados.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb250YWluZXJzL2VzdGFkby1kZS1yZXN1bHRhZG9zL2VzdGFkby1kZS1yZXN1bHRhZG9zLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/containers/estado-de-resultados/estado-de-resultados.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/dashboard/containers/estado-de-resultados/estado-de-resultados.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: EstadoDeResultadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadoDeResultadosComponent", function() { return EstadoDeResultadosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EstadoDeResultadosComponent = /** @class */ (function () {
    function EstadoDeResultadosComponent() {
    }
    EstadoDeResultadosComponent.prototype.ngOnInit = function () {
    };
    EstadoDeResultadosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-estado-de-resultados',
            template: __webpack_require__(/*! ./estado-de-resultados.component.html */ "./src/app/dashboard/containers/estado-de-resultados/estado-de-resultados.component.html"),
            styles: [__webpack_require__(/*! ./estado-de-resultados.component.scss */ "./src/app/dashboard/containers/estado-de-resultados/estado-de-resultados.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EstadoDeResultadosComponent);
    return EstadoDeResultadosComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/containers/flujodecaja/flujodecaja.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/containers/flujodecaja/flujodecaja.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  flujodecaja works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/containers/flujodecaja/flujodecaja.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/containers/flujodecaja/flujodecaja.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb250YWluZXJzL2ZsdWpvZGVjYWphL2ZsdWpvZGVjYWphLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/containers/flujodecaja/flujodecaja.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard/containers/flujodecaja/flujodecaja.component.ts ***!
  \***************************************************************************/
/*! exports provided: FlujodecajaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlujodecajaComponent", function() { return FlujodecajaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FlujodecajaComponent = /** @class */ (function () {
    function FlujodecajaComponent() {
    }
    FlujodecajaComponent.prototype.ngOnInit = function () {
    };
    FlujodecajaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-flujodecaja',
            template: __webpack_require__(/*! ./flujodecaja.component.html */ "./src/app/dashboard/containers/flujodecaja/flujodecaja.component.html"),
            styles: [__webpack_require__(/*! ./flujodecaja.component.scss */ "./src/app/dashboard/containers/flujodecaja/flujodecaja.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FlujodecajaComponent);
    return FlujodecajaComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/containers/lista/lista.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/containers/lista/lista.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modBox\">\n  <app-lista-clientes class=\"modChild\" *ngIf=\"isCliente\"></app-lista-clientes>\n  <app-lista-proveedores class=\"modChild\" *ngIf=\"isProveedor\"></app-lista-proveedores>\n  <app-lista-pedido class=\"modChild\" *ngIf=\"isPedido\"></app-lista-pedido>\n  <app-lista-producto class=\"modChild\" *ngIf=\"isProducto\"></app-lista-producto>\n  <app-lista-almacen class=\"modChild\" *ngIf=\"isAlmacen\"></app-lista-almacen>\n  <app-lista-usuario class=\"modChild\" *ngIf=\"isUsuario\"></app-lista-usuario>\n  <app-lista-rol class=\"modChild\" *ngIf=\"isRol\"></app-lista-rol>\n  <app-lista-compra class=\"modChild\" *ngIf=\"isCompra\"></app-lista-compra>\n  <app-lista-gasto class=\"modChild\" *ngIf=\"isGasto\"></app-lista-gasto>\n  <app-lista-banco class=\"modChild\" *ngIf=\"isBanco\"></app-lista-banco>\n  <app-lista-pago class=\"modChild\" *ngIf=\"isPago\"></app-lista-pago>\n  <app-lista-cobro class=\"modChild\" *ngIf=\"isCobro\"></app-lista-cobro>\n  <app-lista-cuentas-t class=\"modChild\" *ngIf=\"isCuentasT\"></app-lista-cuentas-t>\n  <app-lista-cuentas-por-pagar class=\"modChild\" *ngIf=\"isCuentasPorPagar\"></app-lista-cuentas-por-pagar>\n  <app-lista-cuentas-por-cobrar class=\"modChild\" *ngIf=\"isCuentasPorCobrar\"></app-lista-cuentas-por-cobrar>\n  <app-lista-movimiento-diario class=\"modChild\" *ngIf=\"isMovimientoDiario\"></app-lista-movimiento-diario>\n  <app-lista-proformas class=\"modChild\" *ngIf=\"isProforma\"></app-lista-proformas>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/containers/lista/lista.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard/containers/lista/lista.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb250YWluZXJzL2xpc3RhL2xpc3RhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/containers/lista/lista.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboard/containers/lista/lista.component.ts ***!
  \***************************************************************/
/*! exports provided: ListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaComponent", function() { return ListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var ListaComponent = /** @class */ (function () {
    function ListaComponent(actRoute, dbHandler, router, fb) {
        var _this = this;
        this.actRoute = actRoute;
        this.dbHandler = dbHandler;
        this.router = router;
        this.fb = fb;
        this.actRoute.params.subscribe(function (params) {
            _this.id = params["id"];
        });
        this.router.events.subscribe(function (event) {
            _this.actRoute.url.subscribe(function (value) {
                var url = value[0].path;
                if (url == "lista") {
                    if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                        _this.ngOnInit();
                    }
                }
            });
        });
    }
    ListaComponent.prototype.ngOnInit = function () {
        this.isProveedor = false;
        this.isCliente = false;
        this.isUsuario = false;
        this.isRol = false;
        this.isPedido = false;
        this.isCompra = false;
        this.isProducto = false;
        this.isAlmacen = false;
        this.isBanco = false;
        this.isCobro = false;
        this.isPago = false;
        this.isGasto = false;
        this.isProforma = false;
        this.isMovimientoDiario = false;
        this.isCuentasT = false;
        this.isCuentasPorCobrar = false;
        this.isCuentasPorPagar = false;
        switch (this.id) {
            case "cliente":
                this.isCliente = true;
                break;
            case "proveedor":
                this.isProveedor = true;
                break;
            case "pedido":
                this.isPedido = true;
                break;
            case "almacen":
                this.isAlmacen = true;
                break;
            case "producto":
                this.isProducto = true;
                break;
            case "compra":
                this.isCompra = true;
                break;
            case "rol":
                this.isRol = true;
                break;
            case "banco":
                this.isBanco = true;
                break;
            case "movimientodiario":
                this.isMovimientoDiario = true;
                break;
            case "cuentat":
                this.isCuentasT = true;
                break;
            case "gasto":
                this.isGasto = true;
                break;
            case "cobro":
                this.isCobro = true;
                break;
            case "pago":
                this.isPago = true;
                break;
            case "proforma":
                this.isProforma = true;
                break;
            case "cuentasporcobrar":
                this.isCuentasPorCobrar = true;
                break;
            case "cuentasporpagar":
                this.isCuentasPorPagar = true;
                break;
            default:
                this.isUsuario = true;
                break;
        }
    };
    ListaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-lista",
            template: __webpack_require__(/*! ./lista.component.html */ "./src/app/dashboard/containers/lista/lista.component.html"),
            styles: [__webpack_require__(/*! ./lista.component.scss */ "./src/app/dashboard/containers/lista/lista.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], ListaComponent);
    return ListaComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/containers/precios/precios.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/containers/precios/precios.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modBox\">\n\t<div class=\"cardBox\" *ngIf=\"!isEmpty\">\n\t\t<button *ngIf=\"isGuardar\" class=\"buttonBox\" (click)=\"guardarPrecios()\">Guardar</button>\n\t\t<div class=\"listBox\">\n\t\t\t<table class=\"classtable2\">\n\t\t\t\t<thead class=\"classthead\">\n\t\t\t\t\t<tr class=\"classtr\">\n\t\t\t\t\t\t<th class=\"classth2\" scope=\"col\">Acciones</th>\n\t\t\t\t\t\t<th class=\"classth2\" scope=\"col\" *ngFor=\"let field of fields\">{{ field }}</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody class=\"classtbody\">\n\t\t\t\t\t<tr class=\"classtr2\" *ngFor=\"let value of values; let i = index\">\n\t\t\t\t\t\t<td class=\"classtd2\">\n\t\t\t\t\t\t\t<fa-icon \n\t\t\t\t\t\t\t\tstyle=\"color: grey\" \n\t\t\t\t\t\t\t\tclass=\"faIcon\" \n\t\t\t\t\t\t\t\t[icon]=\"faEdit\" \n\t\t\t\t\t\t\t\tsize=\"2x\" \n\t\t\t\t\t\t\t\t(click)=\"openUpdate($event, i)\">\n\t\t\t\t\t\t\t</fa-icon>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<td class=\"classtd2\">\n\t\t\t\t\t\t\t<p>{{ value[0] }}</p>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<td class=\"classtd2\">\n\t\t\t\t\t\t\t<div *ngIf=\"!isUpdate[i]\">\n\t\t\t\t\t\t\t\t<p>{{ value[1]  | dot2comma }}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngIf=\"isUpdate[i]\">\n\t\t\t\t\t\t\t\t<form class=\"formBoxpre\" [formGroup]=\"prices.controls[i]\">\n\t\t\t\t\t\t\t\t\t<div class=\"qtyField\">\n\t\t\t\t\t\t\t\t\t\t<input \n\t\t\t\t\t\t\t\t\t\t\tclass=\"qtyInput\" \n\t\t\t\t\t\t\t\t\t\t\tlang=\"es\" \n\t\t\t\t\t\t\t\t\t\t\tstep=\"0.05\" \n\t\t\t\t\t\t\t\t\t\t\ttype=\"number\" \n\t\t\t\t\t\t\t\t\t\t\tmin=\"0\" \n\t\t\t\t\t\t\t\t\t\t\tformControlName=\"valor\"\n\t\t\t\t\t\t\t\t\t\t\tname=\"valor\" />\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t</div>\n\n  \t<div class=\"cardBox\" *ngIf=\"isEmpty\">\n    \t<p>No hay elementos para mostrar</p>\n  \t</div>\n\n  \t\n  \t<app-error class=\"errorBox\" [msg]='errorMsg' [ngClass]=\"showError\" (closeError)=\"closeError()\"></app-error>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/containers/precios/precios.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/containers/precios/precios.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".qtyField {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: nowrap;\n  align-self: center;\n  width: 100%; }\n\n.formBox {\n  width: 70%; }\n\n.qtyInput {\n  width: 100%;\n  text-align: right;\n  font-size: 14px;\n  height: 30px;\n  border: none;\n  padding-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZ2Vsb2Fjci9Qcm95ZWN0b3MvSW5WZW4vaW52ZW5BcHAvaW52ZW5hcHAvc3JjL2FwcC9kYXNoYm9hcmQvY29udGFpbmVycy9wcmVjaW9zL3ByZWNpb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxXQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2NvbnRhaW5lcnMvcHJlY2lvcy9wcmVjaW9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnF0eUZpZWxke1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm1Cb3h7XG4gICAgd2lkdGg6IDcwJTtcbn1cblxuLnF0eUlucHV0e1xuICAgIHdpZHRoOjEwMCU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/containers/precios/precios.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard/containers/precios/precios.component.ts ***!
  \*******************************************************************/
/*! exports provided: PreciosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreciosComponent", function() { return PreciosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");








var PreciosComponent = /** @class */ (function () {
    function PreciosComponent(auth, dbHandler, router, fb) {
        this.auth = auth;
        this.dbHandler = dbHandler;
        this.router = router;
        this.fb = fb;
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faTrashAlt"];
        this.faPdf = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faFilePdf"];
        this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faEye"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faEdit"];
        this.prices = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([]);
    }
    PreciosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initComponent("/precios", "Lista de Precios", "Agregar Precio", "precios");
        this.initForm();
        this.isGuardar = false;
        this.isEmpty = true;
        var auxfields = this.dbHandler.getLocal(this.name + "Fields");
        this.precios = this.dbHandler.getLocal("preciosValues");
        this.productos = this.dbHandler.getLocal("productosValues");
        this.fields = ["Nombre del producto", "Precio"];
        this.values = [];
        this.isUpdate = [];
        /*     this.productos.forEach(producto => {
          let precioProducto;
          precios.forEach(precio => {
            if(precio.producto == producto._id){
              precioProducto = precio.valor;
              return;
            }
          });
          console.log(precioProducto)
          let aux = [
            producto.name,
            precioProducto
          ]
          this.values.push(aux)
        }); */
        if (this.productos.length) {
            this.isEmpty = false;
        }
        this.precios.forEach(function (precio) {
            var aux = [precio.producto.name, precio.valor];
            var price = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                valor: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("")
            });
            price.controls["valor"].setValue(precio.valor);
            _this.values.push(aux);
            _this.prices.push(price);
            _this.isUpdate.push(false);
        });
    };
    PreciosComponent.prototype.initComponent = function (endpoint, title, addText, name) {
        this.endpoint = endpoint;
        this.title = title;
        this.addText = addText;
        this.name = name;
    };
    PreciosComponent.prototype.openUpdate = function (event, item) {
        this.isUpdate[item] = true;
        this.isGuardar = true;
    };
    PreciosComponent.prototype.habilitarElemento = function (event, elemento, isHabilitar) { };
    PreciosComponent.prototype.openError = function (msg) {
        this.errorMsg = msg;
        this.showError = {
            errorAct: true
        };
    };
    PreciosComponent.prototype.closeError = function () {
        this.showError = {
            errorAct: false
        };
    };
    PreciosComponent.prototype.guardarPrecios = function () {
        var _this = this;
        var toUpdate = [];
        var pricesControls = this.prices.controls;
        var i = 0;
        for (var _i = 0, pricesControls_1 = pricesControls; _i < pricesControls_1.length; _i++) {
            var control = pricesControls_1[_i];
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]) {
                if (this.isUpdate[i]) {
                    var valor = control.controls["valor"].value;
                    var producto = this.precios[i].producto;
                    var id = this.precios[i]._id;
                    var precio = {
                        id: id,
                        valor: valor,
                        producto: producto
                    };
                    toUpdate.push(precio);
                }
                i++;
            }
        }
        var dataArray = [];
        toUpdate.forEach(function (element) {
            dataArray.push(_this.dbHandler.updateSomething(element, "/precios"));
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])(dataArray).subscribe(function (info) {
            var i = 0;
            var dataLength = info.length - 1;
            info.forEach(function (data) {
                if (!data.status) {
                    _this.openError(data.msg);
                    return;
                }
                else if (i == dataLength) {
                    _this.dbHandler.actualizar();
                }
                i++;
            });
        });
    };
    PreciosComponent.prototype.initForm = function () {
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("")
        });
    };
    PreciosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-precios",
            template: __webpack_require__(/*! ./precios.component.html */ "./src/app/dashboard/containers/precios/precios.component.html"),
            styles: [__webpack_require__(/*! ./precios.component.scss */ "./src/app/dashboard/containers/precios/precios.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], PreciosComponent);
    return PreciosComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/containers/proyecciones/proyecciones.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/containers/proyecciones/proyecciones.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  proyecciones works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/containers/proyecciones/proyecciones.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/containers/proyecciones/proyecciones.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb250YWluZXJzL3Byb3llY2Npb25lcy9wcm95ZWNjaW9uZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/containers/proyecciones/proyecciones.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/containers/proyecciones/proyecciones.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProyeccionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyeccionesComponent", function() { return ProyeccionesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProyeccionesComponent = /** @class */ (function () {
    function ProyeccionesComponent() {
    }
    ProyeccionesComponent.prototype.ngOnInit = function () {
    };
    ProyeccionesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-proyecciones',
            template: __webpack_require__(/*! ./proyecciones.component.html */ "./src/app/dashboard/containers/proyecciones/proyecciones.component.html"),
            styles: [__webpack_require__(/*! ./proyecciones.component.scss */ "./src/app/dashboard/containers/proyecciones/proyecciones.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProyeccionesComponent);
    return ProyeccionesComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/containers/registro/registro.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/containers/registro/registro.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modBox\">\n  <app-form-clientes class=\"modChild\" *ngIf=\"isCliente\" [editMode]=\"editMode\" (onData)=\"onData($event)\">\n  </app-form-clientes>\n  <app-form-proveedores class=\"modChild\" *ngIf=\"isProveedor\" [editMode]=\"editMode\" (onData)=\"onData($event)\">\n  </app-form-proveedores>\n  <app-form-pedido class=\"modChild\" *ngIf=\"isPedido\" [editMode]=\"editMode\" (onData)=\"onData($event)\"></app-form-pedido>\n  <app-form-producto class=\"modChild\" *ngIf=\"isProducto\" [editMode]=\"editMode\" (onData)=\"onData($event)\">\n  </app-form-producto>\n  <app-form-almacen class=\"modChild\" *ngIf=\"isAlmacen\" [editMode]=\"editMode\" (onData)=\"onData($event)\">\n  </app-form-almacen>\n  <app-form-usuario class=\"modChild\" *ngIf=\"isUsuario\" [editMode]=\"editMode\" (onData)=\"onData($event)\">\n  </app-form-usuario>\n  <app-form-rol class=\"modChild\" *ngIf=\"isRol\" [editMode]=\"editMode\" (onData)=\"onData($event)\"></app-form-rol>\n  <app-form-compra class=\"modChild\" *ngIf=\"isCompra\" [editMode]=\"editMode\" (onData)=\"onData($event)\">\n  </app-form-compra>\n  <app-form-gasto class=\"modChild\" *ngIf=\"isGasto\" [editMode]=\"editMode\" (onData)=\"onData($event)\"></app-form-gasto>\n  <app-form-pago class=\"modChild\" *ngIf=\"isPago\" [editMode]=\"editMode\" (onData)=\"onData($event)\"></app-form-pago>\n  <app-form-cobro class=\"modChild\" *ngIf=\"isCobro\" [editMode]=\"editMode\" (onData)=\"onData($event)\"></app-form-cobro>\n  <app-form-banco class=\"modChild\" *ngIf=\"isBanco\" [editMode]=\"editMode\" (onData)=\"onData($event)\"></app-form-banco>\n  <app-form-cuentas-t class=\"modChild\" *ngIf=\"isCuentaT\" [editMode]=\"editMode\" (onData)=\"onData($event)\">\n  </app-form-cuentas-t>\n  <app-form-movimiento-diario class=\"modChild\" *ngIf=\"isMovimientoDiario\" [editMode]=\"editMode\"\n    (onData)=\"onData($event)\"></app-form-movimiento-diario>\n  <app-form-proforma class=\"modChild\" *ngIf=\"isProforma\" [editMode]=\"editMode\" (onData)=\"onData($event)\">\n  </app-form-proforma>\n\n</div>"

/***/ }),

/***/ "./src/app/dashboard/containers/registro/registro.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/containers/registro/registro.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb250YWluZXJzL3JlZ2lzdHJvL3JlZ2lzdHJvLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/containers/registro/registro.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/containers/registro/registro.component.ts ***!
  \*********************************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var RegistroComponent = /** @class */ (function () {
    function RegistroComponent(actRoute, dbHandler, router, fb) {
        var _this = this;
        this.actRoute = actRoute;
        this.dbHandler = dbHandler;
        this.router = router;
        this.fb = fb;
        this.editMode = 0;
        this.actRoute.params.subscribe(function (params) {
            _this.id = params["id"];
        });
        this.router.events.subscribe(function (event) {
            _this.actRoute.url.subscribe(function (value) {
                var url = value[0].path;
                if (url == "registro") {
                    if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                        _this.ngOnInit();
                    }
                }
            });
        });
    }
    RegistroComponent.prototype.ngOnInit = function () {
        this.isProveedor = false;
        this.isCliente = false;
        this.isUsuario = false;
        this.isRol = false;
        this.isPedido = false;
        this.isCompra = false;
        this.isProducto = false;
        this.isAlmacen = false;
        this.isBanco = false;
        this.isCobro = false;
        this.isPago = false;
        this.isGasto = false;
        this.isProforma = false;
        this.isMovimientoDiario = false;
        this.isCuentaT = false;
        switch (this.id) {
            case "cliente":
                this.isCliente = true;
                break;
            case "proveedor":
                this.isProveedor = true;
                break;
            case "pedido":
                this.isPedido = true;
                break;
            case "almacen":
                this.isAlmacen = true;
                break;
            case "producto":
                this.isProducto = true;
                break;
            case "compra":
                this.isCompra = true;
                break;
            case "rol":
                this.isRol = true;
                break;
            case "banco":
                this.isBanco = true;
                break;
            case "cobro":
                this.isCobro = true;
                break;
            case "pago":
                this.isPago = true;
                break;
            case "movimientodiario":
                this.isMovimientoDiario = true;
                break;
            case "cuentat":
                this.isCuentaT = true;
                break;
            case "gasto":
                this.isGasto = true;
                break;
            case "proforma":
                this.isProforma = true;
                break;
            default:
                this.isUsuario = true;
                break;
        }
    };
    RegistroComponent.prototype.onData = function (event) {
        this.dbHandler.actualizar();
    };
    RegistroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-registro",
            template: __webpack_require__(/*! ./registro.component.html */ "./src/app/dashboard/containers/registro/registro.component.html"),
            styles: [__webpack_require__(/*! ./registro.component.scss */ "./src/app/dashboard/containers/registro/registro.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_db_handler_service__WEBPACK_IMPORTED_MODULE_3__["DbHandlerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], RegistroComponent);
    return RegistroComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers_blank_blank_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/blank/blank.component */ "./src/app/dashboard/containers/blank/blank.component.ts");
/* harmony import */ var _containers_registro_registro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/registro/registro.component */ "./src/app/dashboard/containers/registro/registro.component.ts");
/* harmony import */ var _containers_lista_lista_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/lista/lista.component */ "./src/app/dashboard/containers/lista/lista.component.ts");
/* harmony import */ var _containers_actualizar_actualizar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/actualizar/actualizar.component */ "./src/app/dashboard/containers/actualizar/actualizar.component.ts");
/* harmony import */ var _containers_company_company_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers/company/company.component */ "./src/app/dashboard/containers/company/company.component.ts");
/* harmony import */ var _containers_precios_precios_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers/precios/precios.component */ "./src/app/dashboard/containers/precios/precios.component.ts");
/* harmony import */ var _containers_flujodecaja_flujodecaja_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./containers/flujodecaja/flujodecaja.component */ "./src/app/dashboard/containers/flujodecaja/flujodecaja.component.ts");
/* harmony import */ var _containers_proyecciones_proyecciones_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./containers/proyecciones/proyecciones.component */ "./src/app/dashboard/containers/proyecciones/proyecciones.component.ts");
/* harmony import */ var _containers_estado_de_resultados_estado_de_resultados_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./containers/estado-de-resultados/estado-de-resultados.component */ "./src/app/dashboard/containers/estado-de-resultados/estado-de-resultados.component.ts");
/* harmony import */ var _containers_disponibilidad_bancaria_disponibilidad_bancaria_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./containers/disponibilidad-bancaria/disponibilidad-bancaria.component */ "./src/app/dashboard/containers/disponibilidad-bancaria/disponibilidad-bancaria.component.ts");
/* harmony import */ var _services_guard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/guard.service */ "./src/app/services/guard.service.ts");














var routes = [
    {
        path: "",
        component: _containers_blank_blank_component__WEBPACK_IMPORTED_MODULE_3__["BlankComponent"],
        canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_13__["GuardService"]]
    },
    {
        path: "registro/:id",
        component: _containers_registro_registro_component__WEBPACK_IMPORTED_MODULE_4__["RegistroComponent"],
        canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_13__["GuardService"]],
        data: {
            role1: "Admin"
        }
    },
    {
        path: "lista/:id",
        component: _containers_lista_lista_component__WEBPACK_IMPORTED_MODULE_5__["ListaComponent"],
        canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_13__["GuardService"]],
        data: {
            role1: "Admin"
        }
    },
    {
        path: "compañia",
        component: _containers_company_company_component__WEBPACK_IMPORTED_MODULE_7__["CompanyComponent"],
        canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_13__["GuardService"]],
        data: {
            role1: "Admin"
        }
    },
    {
        path: "precios",
        component: _containers_precios_precios_component__WEBPACK_IMPORTED_MODULE_8__["PreciosComponent"],
        canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_13__["GuardService"]],
        data: {
            role1: "Admin"
        }
    },
    {
        path: "actualizar/:item/:id",
        component: _containers_actualizar_actualizar_component__WEBPACK_IMPORTED_MODULE_6__["ActualizarComponent"],
        canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_13__["GuardService"]],
        data: {
            role1: "Admin"
        }
    },
    {
        path: "flujodecaja",
        component: _containers_flujodecaja_flujodecaja_component__WEBPACK_IMPORTED_MODULE_9__["FlujodecajaComponent"],
        canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_13__["GuardService"]],
        data: {
            role1: "Admin"
        }
    },
    {
        path: "proyecciones",
        component: _containers_proyecciones_proyecciones_component__WEBPACK_IMPORTED_MODULE_10__["ProyeccionesComponent"],
        canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_13__["GuardService"]],
        data: {
            role1: "Admin"
        }
    },
    {
        path: "estadoderesultados",
        component: _containers_estado_de_resultados_estado_de_resultados_component__WEBPACK_IMPORTED_MODULE_11__["EstadoDeResultadosComponent"],
        canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_13__["GuardService"]],
        data: {
            role1: "Admin"
        }
    },
    {
        path: "disponibilidadbancaria",
        component: _containers_disponibilidad_bancaria_disponibilidad_bancaria_component__WEBPACK_IMPORTED_MODULE_12__["DisponibilidadBancariaComponent"],
        canActivate: [_services_guard_service__WEBPACK_IMPORTED_MODULE_13__["GuardService"]],
        data: {
            role1: "Admin"
        }
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".appBox {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.headerBox {\n  width: 100%;\n  height: 10vh;\n}\n\n.menuBox {\n  width: 0%;\n  min-width: 0;\n  overflow-y: scroll;\n  transition: min-width 0.5s ease-out;\n  background-color: #161925;\n  box-shadow: 5px -2px 10px -2px rgba(0, 0, 0, 0.3);\n}\n\n.aMenu {\n  min-width: 262px;\n  transition: min-width 0.5s ease-out;\n}\n\n.contentBox {\n  margin-left: 10px;\n  width: 100%;\n  overflow: scroll;\n}\n\n.panelBox {\n  width: 100%;\n  display: flex;\n  height: 90vh;\n  flex-wrap: nowrap;\n  flex-direction: row;\n  align-items: stretch;\n  overflow: hidden;\n}\n\n.menuHeader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 64px;\n  width: 100%;\n  background: #607d8b;\n  padding-left: 13px;\n  padding-right: 13px;\n}\n\n.contentBox::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: white;\n  border-color: white;\n  border-width: 2px;\n  border-style: solid;\n}\n\n.contentBox::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n  background-color: white;\n}\n\n.contentBox::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #161925;\n}\n\n.menuBox::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #161925;\n  border-color: #9ba6c0;\n  border-width: 1px;\n  border-style: solid;\n}\n\n.menuBox::-webkit-scrollbar {\n  width: 6px;\n  height: 6px;\n  background-color: #161925;\n}\n\n.menuBox::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFNBQVM7RUFDVCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyx5QkFBeUI7RUFHekIsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9EQUFvRDtFQUNwRCx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixvREFBb0Q7RUFDcEQseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usb0RBQW9EO0VBQ3BELHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG9EQUFvRDtFQUNwRCx1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwQm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uaGVhZGVyQm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTB2aDtcbn1cblxuLm1lbnVCb3gge1xuICB3aWR0aDogMCU7XG4gIG1pbi13aWR0aDogMDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB0cmFuc2l0aW9uOiBtaW4td2lkdGggMC41cyBlYXNlLW91dDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2MTkyNTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiA1cHggLTJweCAxMHB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAtbW96LWJveC1zaGFkb3c6IDVweCAtMnB4IDEwcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJveC1zaGFkb3c6IDVweCAtMnB4IDEwcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5hTWVudSB7XG4gIG1pbi13aWR0aDogMjYycHg7XG4gIHRyYW5zaXRpb246IG1pbi13aWR0aCAwLjVzIGVhc2Utb3V0O1xufVxuXG4uY29udGVudEJveCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLnBhbmVsQm94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogOTB2aDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubWVudUhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDY0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjNjA3ZDhiO1xuICBwYWRkaW5nLWxlZnQ6IDEzcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEzcHg7XG59XG5cbi5jb250ZW50Qm94Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuLmNvbnRlbnRCb3g6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDZweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGVudEJveDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYxOTI1O1xufVxuXG4ubWVudUJveDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYxOTI1O1xuICBib3JkZXItY29sb3I6ICM5YmE2YzA7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG4ubWVudUJveDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2MTkyNTtcbn1cblxuLm1lbnVCb3g6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"appBox\">\n  <div class=\"headerBox\">\n    <app-header (menu)=\"tMenu()\"></app-header>\n  </div>\n  <div class=\"panelBox\">\n    <div class=\"menuBox\" [ngClass]=\"aMenu\">\n      <app-sidemenu></app-sidemenu>\n    </div>\n    <div class=\"contentBox\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router) {
        var _this = this;
        this.router = router;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.ngOnInit();
            }
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.menuOn = true;
        this.aMenu = {
            aMenu: this.menuOn
        };
    };
    DashboardComponent.prototype.tMenu = function () {
        this.menuOn = !this.menuOn;
        this.aMenu = {
            aMenu: this.menuOn
        };
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "dashboard-root",
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _services_db_handler_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/db-handler.service */ "./src/app/dashboard/services/db-handler.service.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _containers_blank_blank_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./containers/blank/blank.component */ "./src/app/dashboard/containers/blank/blank.component.ts");
/* harmony import */ var _containers_registro_registro_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./containers/registro/registro.component */ "./src/app/dashboard/containers/registro/registro.component.ts");
/* harmony import */ var _containers_lista_lista_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./containers/lista/lista.component */ "./src/app/dashboard/containers/lista/lista.component.ts");
/* harmony import */ var _containers_actualizar_actualizar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./containers/actualizar/actualizar.component */ "./src/app/dashboard/containers/actualizar/actualizar.component.ts");
/* harmony import */ var _containers_company_company_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./containers/company/company.component */ "./src/app/dashboard/containers/company/company.component.ts");
/* harmony import */ var _containers_precios_precios_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./containers/precios/precios.component */ "./src/app/dashboard/containers/precios/precios.component.ts");
/* harmony import */ var _containers_flujodecaja_flujodecaja_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./containers/flujodecaja/flujodecaja.component */ "./src/app/dashboard/containers/flujodecaja/flujodecaja.component.ts");
/* harmony import */ var _containers_proyecciones_proyecciones_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./containers/proyecciones/proyecciones.component */ "./src/app/dashboard/containers/proyecciones/proyecciones.component.ts");
/* harmony import */ var _containers_estado_de_resultados_estado_de_resultados_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./containers/estado-de-resultados/estado-de-resultados.component */ "./src/app/dashboard/containers/estado-de-resultados/estado-de-resultados.component.ts");
/* harmony import */ var _containers_disponibilidad_bancaria_disponibilidad_bancaria_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./containers/disponibilidad-bancaria/disponibilidad-bancaria.component */ "./src/app/dashboard/containers/disponibilidad-bancaria/disponibilidad-bancaria.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/dashboard/components/header/header.component.ts");
/* harmony import */ var _components_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/sidemenu/sidemenu.component */ "./src/app/dashboard/components/sidemenu/sidemenu.component.ts");
/* harmony import */ var _components_form_clientes_form_clientes_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/form-clientes/form-clientes.component */ "./src/app/dashboard/components/form-clientes/form-clientes.component.ts");
/* harmony import */ var _components_form_proveedores_form_proveedores_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/form-proveedores/form-proveedores.component */ "./src/app/dashboard/components/form-proveedores/form-proveedores.component.ts");
/* harmony import */ var _components_form_almacen_form_almacen_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/form-almacen/form-almacen.component */ "./src/app/dashboard/components/form-almacen/form-almacen.component.ts");
/* harmony import */ var _components_form_compra_form_compra_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/form-compra/form-compra.component */ "./src/app/dashboard/components/form-compra/form-compra.component.ts");
/* harmony import */ var _components_form_pedido_form_pedido_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/form-pedido/form-pedido.component */ "./src/app/dashboard/components/form-pedido/form-pedido.component.ts");
/* harmony import */ var _components_form_producto_form_producto_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/form-producto/form-producto.component */ "./src/app/dashboard/components/form-producto/form-producto.component.ts");
/* harmony import */ var _components_lista_clientes_lista_clientes_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/lista-clientes/lista-clientes.component */ "./src/app/dashboard/components/lista-clientes/lista-clientes.component.ts");
/* harmony import */ var _components_lista_proveedores_lista_proveedores_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/lista-proveedores/lista-proveedores.component */ "./src/app/dashboard/components/lista-proveedores/lista-proveedores.component.ts");
/* harmony import */ var _components_lista_almacen_lista_almacen_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/lista-almacen/lista-almacen.component */ "./src/app/dashboard/components/lista-almacen/lista-almacen.component.ts");
/* harmony import */ var _components_lista_compra_lista_compra_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/lista-compra/lista-compra.component */ "./src/app/dashboard/components/lista-compra/lista-compra.component.ts");
/* harmony import */ var _components_lista_pedido_lista_pedido_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/lista-pedido/lista-pedido.component */ "./src/app/dashboard/components/lista-pedido/lista-pedido.component.ts");
/* harmony import */ var _components_lista_producto_lista_producto_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/lista-producto/lista-producto.component */ "./src/app/dashboard/components/lista-producto/lista-producto.component.ts");
/* harmony import */ var _components_form_usuario_form_usuario_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/form-usuario/form-usuario.component */ "./src/app/dashboard/components/form-usuario/form-usuario.component.ts");
/* harmony import */ var _components_lista_usuario_lista_usuario_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/lista-usuario/lista-usuario.component */ "./src/app/dashboard/components/lista-usuario/lista-usuario.component.ts");
/* harmony import */ var _components_form_rol_form_rol_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/form-rol/form-rol.component */ "./src/app/dashboard/components/form-rol/form-rol.component.ts");
/* harmony import */ var _components_lista_rol_lista_rol_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/lista-rol/lista-rol.component */ "./src/app/dashboard/components/lista-rol/lista-rol.component.ts");
/* harmony import */ var _components_form_company_form_company_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/form-company/form-company.component */ "./src/app/dashboard/components/form-company/form-company.component.ts");
/* harmony import */ var _components_form_proforma_form_proforma_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/form-proforma/form-proforma.component */ "./src/app/dashboard/components/form-proforma/form-proforma.component.ts");
/* harmony import */ var _components_lista_proformas_lista_proformas_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/lista-proformas/lista-proformas.component */ "./src/app/dashboard/components/lista-proformas/lista-proformas.component.ts");
/* harmony import */ var _components_form_banco_form_banco_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/form-banco/form-banco.component */ "./src/app/dashboard/components/form-banco/form-banco.component.ts");
/* harmony import */ var _components_lista_banco_lista_banco_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/lista-banco/lista-banco.component */ "./src/app/dashboard/components/lista-banco/lista-banco.component.ts");
/* harmony import */ var _components_form_egreso_form_egreso_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/form-egreso/form-egreso.component */ "./src/app/dashboard/components/form-egreso/form-egreso.component.ts");
/* harmony import */ var _components_lista_egreso_lista_egreso_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/lista-egreso/lista-egreso.component */ "./src/app/dashboard/components/lista-egreso/lista-egreso.component.ts");
/* harmony import */ var _components_form_cuentas_t_form_cuentas_t_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/form-cuentas-t/form-cuentas-t.component */ "./src/app/dashboard/components/form-cuentas-t/form-cuentas-t.component.ts");
/* harmony import */ var _components_lista_cuentas_t_lista_cuentas_t_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/lista-cuentas-t/lista-cuentas-t.component */ "./src/app/dashboard/components/lista-cuentas-t/lista-cuentas-t.component.ts");
/* harmony import */ var _components_form_movimiento_diario_form_movimiento_diario_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/form-movimiento-diario/form-movimiento-diario.component */ "./src/app/dashboard/components/form-movimiento-diario/form-movimiento-diario.component.ts");
/* harmony import */ var _components_lista_movimiento_diario_lista_movimiento_diario_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/lista-movimiento-diario/lista-movimiento-diario.component */ "./src/app/dashboard/components/lista-movimiento-diario/lista-movimiento-diario.component.ts");
/* harmony import */ var _components_lista_cuentas_por_cobrar_lista_cuentas_por_cobrar_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./components/lista-cuentas-por-cobrar/lista-cuentas-por-cobrar.component */ "./src/app/dashboard/components/lista-cuentas-por-cobrar/lista-cuentas-por-cobrar.component.ts");
/* harmony import */ var _components_lista_cuentas_por_pagar_lista_cuentas_por_pagar_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/lista-cuentas-por-pagar/lista-cuentas-por-pagar.component */ "./src/app/dashboard/components/lista-cuentas-por-pagar/lista-cuentas-por-pagar.component.ts");
/* harmony import */ var _containers_detalle_detalle_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./containers/detalle/detalle.component */ "./src/app/dashboard/containers/detalle/detalle.component.ts");
/* harmony import */ var _pipes_dot2comma_pipe__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./pipes/dot2comma.pipe */ "./src/app/dashboard/pipes/dot2comma.pipe.ts");
/* harmony import */ var _components_form_cobro_form_cobro_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/form-cobro/form-cobro.component */ "./src/app/dashboard/components/form-cobro/form-cobro.component.ts");
/* harmony import */ var _components_form_gasto_form_gasto_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/form-gasto/form-gasto.component */ "./src/app/dashboard/components/form-gasto/form-gasto.component.ts");
/* harmony import */ var _components_form_pago_form_pago_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./components/form-pago/form-pago.component */ "./src/app/dashboard/components/form-pago/form-pago.component.ts");
/* harmony import */ var _components_lista_cobro_lista_cobro_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./components/lista-cobro/lista-cobro.component */ "./src/app/dashboard/components/lista-cobro/lista-cobro.component.ts");
/* harmony import */ var _components_lista_gasto_lista_gasto_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./components/lista-gasto/lista-gasto.component */ "./src/app/dashboard/components/lista-gasto/lista-gasto.component.ts");
/* harmony import */ var _components_lista_pago_lista_pago_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./components/lista-pago/lista-pago.component */ "./src/app/dashboard/components/lista-pago/lista-pago.component.ts");
/* harmony import */ var _components_detalle_proforma_detalle_proforma_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./components/detalle-proforma/detalle-proforma.component */ "./src/app/dashboard/components/detalle-proforma/detalle-proforma.component.ts");
/* harmony import */ var _components_detalle_cobro_detalle_cobro_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./components/detalle-cobro/detalle-cobro.component */ "./src/app/dashboard/components/detalle-cobro/detalle-cobro.component.ts");
/* harmony import */ var _components_detalle_pago_detalle_pago_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./components/detalle-pago/detalle-pago.component */ "./src/app/dashboard/components/detalle-pago/detalle-pago.component.ts");
/* harmony import */ var _components_detalle_compra_detalle_compra_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./components/detalle-compra/detalle-compra.component */ "./src/app/dashboard/components/detalle-compra/detalle-compra.component.ts");
/* harmony import */ var _components_detalle_gasto_detalle_gasto_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./components/detalle-gasto/detalle-gasto.component */ "./src/app/dashboard/components/detalle-gasto/detalle-gasto.component.ts");
/* harmony import */ var _components_detalle_producto_detalle_producto_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./components/detalle-producto/detalle-producto.component */ "./src/app/dashboard/components/detalle-producto/detalle-producto.component.ts");
/* harmony import */ var _components_detalle_almacen_detalle_almacen_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./components/detalle-almacen/detalle-almacen.component */ "./src/app/dashboard/components/detalle-almacen/detalle-almacen.component.ts");
/* harmony import */ var _components_detalle_banco_detalle_banco_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./components/detalle-banco/detalle-banco.component */ "./src/app/dashboard/components/detalle-banco/detalle-banco.component.ts");
/* harmony import */ var _components_detalle_cuenta_por_cobrar_detalle_cuenta_por_cobrar_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./components/detalle-cuenta-por-cobrar/detalle-cuenta-por-cobrar.component */ "./src/app/dashboard/components/detalle-cuenta-por-cobrar/detalle-cuenta-por-cobrar.component.ts");
/* harmony import */ var _components_detalle_cuenta_por_pagar_detalle_cuenta_por_pagar_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./components/detalle-cuenta-por-pagar/detalle-cuenta-por-pagar.component */ "./src/app/dashboard/components/detalle-cuenta-por-pagar/detalle-cuenta-por-pagar.component.ts");
/* harmony import */ var _components_detalle_pedido_detalle_pedido_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./components/detalle-pedido/detalle-pedido.component */ "./src/app/dashboard/components/detalle-pedido/detalle-pedido.component.ts");
/* harmony import */ var _components_detalle_cliente_detalle_cliente_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./components/detalle-cliente/detalle-cliente.component */ "./src/app/dashboard/components/detalle-cliente/detalle-cliente.component.ts");
/* harmony import */ var _components_detalle_proveedor_detalle_proveedor_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ./components/detalle-proveedor/detalle-proveedor.component */ "./src/app/dashboard/components/detalle-proveedor/detalle-proveedor.component.ts");
/* harmony import */ var _components_detalle_cuenta_t_detalle_cuenta_t_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./components/detalle-cuenta-t/detalle-cuenta-t.component */ "./src/app/dashboard/components/detalle-cuenta-t/detalle-cuenta-t.component.ts");











































































var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _components_form_clientes_form_clientes_component__WEBPACK_IMPORTED_MODULE_23__["FormClientesComponent"],
                _dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                _components_sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_22__["SidemenuComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_21__["HeaderComponent"],
                _containers_blank_blank_component__WEBPACK_IMPORTED_MODULE_11__["BlankComponent"],
                _containers_registro_registro_component__WEBPACK_IMPORTED_MODULE_12__["RegistroComponent"],
                _containers_lista_lista_component__WEBPACK_IMPORTED_MODULE_13__["ListaComponent"],
                _containers_actualizar_actualizar_component__WEBPACK_IMPORTED_MODULE_14__["ActualizarComponent"],
                _containers_company_company_component__WEBPACK_IMPORTED_MODULE_15__["CompanyComponent"],
                _containers_precios_precios_component__WEBPACK_IMPORTED_MODULE_16__["PreciosComponent"],
                _containers_disponibilidad_bancaria_disponibilidad_bancaria_component__WEBPACK_IMPORTED_MODULE_20__["DisponibilidadBancariaComponent"],
                _containers_flujodecaja_flujodecaja_component__WEBPACK_IMPORTED_MODULE_17__["FlujodecajaComponent"],
                _containers_proyecciones_proyecciones_component__WEBPACK_IMPORTED_MODULE_18__["ProyeccionesComponent"],
                _containers_estado_de_resultados_estado_de_resultados_component__WEBPACK_IMPORTED_MODULE_19__["EstadoDeResultadosComponent"],
                _pipes_dot2comma_pipe__WEBPACK_IMPORTED_MODULE_53__["Dot2commaPipe"],
                _containers_detalle_detalle_component__WEBPACK_IMPORTED_MODULE_52__["DetalleComponent"],
                _components_form_proveedores_form_proveedores_component__WEBPACK_IMPORTED_MODULE_24__["FormProveedoresComponent"],
                _components_form_almacen_form_almacen_component__WEBPACK_IMPORTED_MODULE_25__["FormAlmacenComponent"],
                _components_form_compra_form_compra_component__WEBPACK_IMPORTED_MODULE_26__["FormCompraComponent"],
                _components_form_pedido_form_pedido_component__WEBPACK_IMPORTED_MODULE_27__["FormPedidoComponent"],
                _components_form_producto_form_producto_component__WEBPACK_IMPORTED_MODULE_28__["FormProductoComponent"],
                _components_lista_clientes_lista_clientes_component__WEBPACK_IMPORTED_MODULE_29__["ListaClientesComponent"],
                _components_lista_proveedores_lista_proveedores_component__WEBPACK_IMPORTED_MODULE_30__["ListaProveedoresComponent"],
                _components_lista_almacen_lista_almacen_component__WEBPACK_IMPORTED_MODULE_31__["ListaAlmacenComponent"],
                _components_lista_compra_lista_compra_component__WEBPACK_IMPORTED_MODULE_32__["ListaCompraComponent"],
                _components_lista_pedido_lista_pedido_component__WEBPACK_IMPORTED_MODULE_33__["ListaPedidoComponent"],
                _components_lista_producto_lista_producto_component__WEBPACK_IMPORTED_MODULE_34__["ListaProductoComponent"],
                _components_form_usuario_form_usuario_component__WEBPACK_IMPORTED_MODULE_35__["FormUsuarioComponent"],
                _components_lista_usuario_lista_usuario_component__WEBPACK_IMPORTED_MODULE_36__["ListaUsuarioComponent"],
                _components_form_rol_form_rol_component__WEBPACK_IMPORTED_MODULE_37__["FormRolComponent"],
                _components_lista_rol_lista_rol_component__WEBPACK_IMPORTED_MODULE_38__["ListaRolComponent"],
                _components_form_company_form_company_component__WEBPACK_IMPORTED_MODULE_39__["FormCompanyComponent"],
                _components_form_proforma_form_proforma_component__WEBPACK_IMPORTED_MODULE_40__["FormProformaComponent"],
                _components_lista_proformas_lista_proformas_component__WEBPACK_IMPORTED_MODULE_41__["ListaProformasComponent"],
                _components_form_banco_form_banco_component__WEBPACK_IMPORTED_MODULE_42__["FormBancoComponent"],
                _components_lista_banco_lista_banco_component__WEBPACK_IMPORTED_MODULE_43__["ListaBancoComponent"],
                _components_form_egreso_form_egreso_component__WEBPACK_IMPORTED_MODULE_44__["FormEgresoComponent"],
                _components_lista_egreso_lista_egreso_component__WEBPACK_IMPORTED_MODULE_45__["ListaEgresoComponent"],
                _components_form_cuentas_t_form_cuentas_t_component__WEBPACK_IMPORTED_MODULE_46__["FormCuentasTComponent"],
                _components_lista_cuentas_t_lista_cuentas_t_component__WEBPACK_IMPORTED_MODULE_47__["ListaCuentasTComponent"],
                _components_form_movimiento_diario_form_movimiento_diario_component__WEBPACK_IMPORTED_MODULE_48__["FormMovimientoDiarioComponent"],
                _components_lista_movimiento_diario_lista_movimiento_diario_component__WEBPACK_IMPORTED_MODULE_49__["ListaMovimientoDiarioComponent"],
                _components_lista_cuentas_por_cobrar_lista_cuentas_por_cobrar_component__WEBPACK_IMPORTED_MODULE_50__["ListaCuentasPorCobrarComponent"],
                _components_lista_cuentas_por_pagar_lista_cuentas_por_pagar_component__WEBPACK_IMPORTED_MODULE_51__["ListaCuentasPorPagarComponent"],
                _components_form_cobro_form_cobro_component__WEBPACK_IMPORTED_MODULE_54__["FormCobroComponent"],
                _components_form_gasto_form_gasto_component__WEBPACK_IMPORTED_MODULE_55__["FormGastoComponent"],
                _components_form_pago_form_pago_component__WEBPACK_IMPORTED_MODULE_56__["FormPagoComponent"],
                _components_lista_cobro_lista_cobro_component__WEBPACK_IMPORTED_MODULE_57__["ListaCobroComponent"],
                _components_lista_gasto_lista_gasto_component__WEBPACK_IMPORTED_MODULE_58__["ListaGastoComponent"],
                _components_lista_pago_lista_pago_component__WEBPACK_IMPORTED_MODULE_59__["ListaPagoComponent"],
                _components_detalle_proforma_detalle_proforma_component__WEBPACK_IMPORTED_MODULE_60__["DetalleProformaComponent"],
                _components_detalle_cobro_detalle_cobro_component__WEBPACK_IMPORTED_MODULE_61__["DetalleCobroComponent"],
                _components_detalle_pago_detalle_pago_component__WEBPACK_IMPORTED_MODULE_62__["DetallePagoComponent"],
                _components_detalle_compra_detalle_compra_component__WEBPACK_IMPORTED_MODULE_63__["DetalleCompraComponent"],
                _components_detalle_gasto_detalle_gasto_component__WEBPACK_IMPORTED_MODULE_64__["DetalleGastoComponent"],
                _components_detalle_producto_detalle_producto_component__WEBPACK_IMPORTED_MODULE_65__["DetalleProductoComponent"],
                _components_detalle_almacen_detalle_almacen_component__WEBPACK_IMPORTED_MODULE_66__["DetalleAlmacenComponent"],
                _components_detalle_banco_detalle_banco_component__WEBPACK_IMPORTED_MODULE_67__["DetalleBancoComponent"],
                _components_detalle_cuenta_por_cobrar_detalle_cuenta_por_cobrar_component__WEBPACK_IMPORTED_MODULE_68__["DetalleCuentaPorCobrarComponent"],
                _components_detalle_cuenta_por_pagar_detalle_cuenta_por_pagar_component__WEBPACK_IMPORTED_MODULE_69__["DetalleCuentaPorPagarComponent"],
                _components_detalle_pedido_detalle_pedido_component__WEBPACK_IMPORTED_MODULE_70__["DetallePedidoComponent"],
                _components_detalle_cliente_detalle_cliente_component__WEBPACK_IMPORTED_MODULE_71__["DetalleClienteComponent"],
                _components_detalle_proveedor_detalle_proveedor_component__WEBPACK_IMPORTED_MODULE_72__["DetalleProveedorComponent"],
                _components_detalle_cuenta_t_detalle_cuenta_t_component__WEBPACK_IMPORTED_MODULE_73__["DetalleCuentaTComponent"]
            ],
            entryComponents: [
                _containers_detalle_detalle_component__WEBPACK_IMPORTED_MODULE_52__["DetalleComponent"],
                _components_form_proveedores_form_proveedores_component__WEBPACK_IMPORTED_MODULE_24__["FormProveedoresComponent"],
                _components_form_almacen_form_almacen_component__WEBPACK_IMPORTED_MODULE_25__["FormAlmacenComponent"],
                _components_form_compra_form_compra_component__WEBPACK_IMPORTED_MODULE_26__["FormCompraComponent"],
                _components_form_pedido_form_pedido_component__WEBPACK_IMPORTED_MODULE_27__["FormPedidoComponent"],
                _components_form_producto_form_producto_component__WEBPACK_IMPORTED_MODULE_28__["FormProductoComponent"],
                _components_form_usuario_form_usuario_component__WEBPACK_IMPORTED_MODULE_35__["FormUsuarioComponent"],
                _components_form_rol_form_rol_component__WEBPACK_IMPORTED_MODULE_37__["FormRolComponent"],
                _components_form_company_form_company_component__WEBPACK_IMPORTED_MODULE_39__["FormCompanyComponent"],
                _components_form_proforma_form_proforma_component__WEBPACK_IMPORTED_MODULE_40__["FormProformaComponent"],
                _components_form_banco_form_banco_component__WEBPACK_IMPORTED_MODULE_42__["FormBancoComponent"],
                _components_form_egreso_form_egreso_component__WEBPACK_IMPORTED_MODULE_44__["FormEgresoComponent"],
                _components_form_cuentas_t_form_cuentas_t_component__WEBPACK_IMPORTED_MODULE_46__["FormCuentasTComponent"],
                _components_form_movimiento_diario_form_movimiento_diario_component__WEBPACK_IMPORTED_MODULE_48__["FormMovimientoDiarioComponent"],
                _components_form_cobro_form_cobro_component__WEBPACK_IMPORTED_MODULE_54__["FormCobroComponent"],
                _components_form_gasto_form_gasto_component__WEBPACK_IMPORTED_MODULE_55__["FormGastoComponent"],
                _components_form_pago_form_pago_component__WEBPACK_IMPORTED_MODULE_56__["FormPagoComponent"],
                _components_lista_cobro_lista_cobro_component__WEBPACK_IMPORTED_MODULE_57__["ListaCobroComponent"],
                _components_lista_gasto_lista_gasto_component__WEBPACK_IMPORTED_MODULE_58__["ListaGastoComponent"],
                _components_lista_pago_lista_pago_component__WEBPACK_IMPORTED_MODULE_59__["ListaPagoComponent"],
                _components_lista_clientes_lista_clientes_component__WEBPACK_IMPORTED_MODULE_29__["ListaClientesComponent"],
                _components_lista_proveedores_lista_proveedores_component__WEBPACK_IMPORTED_MODULE_30__["ListaProveedoresComponent"],
                _components_lista_almacen_lista_almacen_component__WEBPACK_IMPORTED_MODULE_31__["ListaAlmacenComponent"],
                _components_lista_compra_lista_compra_component__WEBPACK_IMPORTED_MODULE_32__["ListaCompraComponent"],
                _components_lista_pedido_lista_pedido_component__WEBPACK_IMPORTED_MODULE_33__["ListaPedidoComponent"],
                _components_lista_producto_lista_producto_component__WEBPACK_IMPORTED_MODULE_34__["ListaProductoComponent"],
                _components_lista_usuario_lista_usuario_component__WEBPACK_IMPORTED_MODULE_36__["ListaUsuarioComponent"],
                _components_lista_rol_lista_rol_component__WEBPACK_IMPORTED_MODULE_38__["ListaRolComponent"],
                _components_lista_proformas_lista_proformas_component__WEBPACK_IMPORTED_MODULE_41__["ListaProformasComponent"],
                _components_lista_banco_lista_banco_component__WEBPACK_IMPORTED_MODULE_43__["ListaBancoComponent"],
                _components_lista_egreso_lista_egreso_component__WEBPACK_IMPORTED_MODULE_45__["ListaEgresoComponent"],
                _components_lista_cuentas_t_lista_cuentas_t_component__WEBPACK_IMPORTED_MODULE_47__["ListaCuentasTComponent"],
                _components_lista_movimiento_diario_lista_movimiento_diario_component__WEBPACK_IMPORTED_MODULE_49__["ListaMovimientoDiarioComponent"],
                _components_lista_cuentas_por_cobrar_lista_cuentas_por_cobrar_component__WEBPACK_IMPORTED_MODULE_50__["ListaCuentasPorCobrarComponent"],
                _components_lista_cuentas_por_pagar_lista_cuentas_por_pagar_component__WEBPACK_IMPORTED_MODULE_51__["ListaCuentasPorPagarComponent"],
                _components_detalle_proforma_detalle_proforma_component__WEBPACK_IMPORTED_MODULE_60__["DetalleProformaComponent"],
                _components_detalle_cobro_detalle_cobro_component__WEBPACK_IMPORTED_MODULE_61__["DetalleCobroComponent"],
                _components_detalle_pago_detalle_pago_component__WEBPACK_IMPORTED_MODULE_62__["DetallePagoComponent"],
                _components_detalle_compra_detalle_compra_component__WEBPACK_IMPORTED_MODULE_63__["DetalleCompraComponent"],
                _components_detalle_gasto_detalle_gasto_component__WEBPACK_IMPORTED_MODULE_64__["DetalleGastoComponent"],
                _components_detalle_producto_detalle_producto_component__WEBPACK_IMPORTED_MODULE_65__["DetalleProductoComponent"],
                _components_detalle_almacen_detalle_almacen_component__WEBPACK_IMPORTED_MODULE_66__["DetalleAlmacenComponent"],
                _components_detalle_banco_detalle_banco_component__WEBPACK_IMPORTED_MODULE_67__["DetalleBancoComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__["DashboardRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
            ],
            exports: [_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"]],
            providers: [_services_db_handler_service__WEBPACK_IMPORTED_MODULE_9__["DbHandlerService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/pipes/dot2comma.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/dashboard/pipes/dot2comma.pipe.ts ***!
  \***************************************************/
/*! exports provided: Dot2commaPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dot2commaPipe", function() { return Dot2commaPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Dot2commaPipe = /** @class */ (function () {
    function Dot2commaPipe() {
    }
    Dot2commaPipe.prototype.transform = function (value) {
        return this.localeString(value);
    };
    Dot2commaPipe.prototype.missingOneDecimalCheck = function (nStr) {
        nStr += '';
        var x = nStr.split(',')[1];
        if (x && x.length === 1)
            return true;
        return false;
    };
    Dot2commaPipe.prototype.missingAllDecimalsCheck = function (nStr) {
        nStr += '';
        var x = nStr.split(',')[1];
        if (!x)
            return true;
        return false;
    };
    Dot2commaPipe.prototype.localeString = function (nStr) {
        if (nStr === '')
            return '';
        var x, x1, x2, rgx, y1, y2;
        nStr += '';
        x = nStr.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? ',' + x[1] : '';
        rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + '.' + '$2');
        }
        /** If value was inputed by user, it could have many decimals(up to 7)
            so we need to reformat previous x1 results */
        if (x1.indexOf(',') !== -1) {
            y1 = x1.slice(x1.lastIndexOf(',')).replace(/\./g, '');
            y2 = x1.split(',');
            x = y2[0] + y1;
        }
        else {
            x = x1 + x2;
            if (this.missingOneDecimalCheck(x))
                return x += '0';
            if (this.missingAllDecimalsCheck(x))
                return x += ',00';
        }
        return x;
    };
    Dot2commaPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'dot2comma'
        })
    ], Dot2commaPipe);
    return Dot2commaPipe;
}());



/***/ }),

/***/ "./src/app/dashboard/services/db-handler.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/services/db-handler.service.ts ***!
  \**********************************************************/
/*! exports provided: DbHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbHandlerService", function() { return DbHandlerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var DbHandlerService = /** @class */ (function () {
    function DbHandlerService(http, datePipe, auth) {
        this.http = http;
        this.datePipe = datePipe;
        this.auth = auth;
        this.today = new Date();
        this.localSource = "http://localhost:3400";
        this.serverSource = "";
        //mySource = this.localSource;
        this.mySource = this.serverSource;
    }
    DbHandlerService.prototype.createSomething = function (body, endpoint) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append("Content-Type", "application/json");
        var token = this.auth.getToken();
        if (token != null) {
            headers = headers.append("Authorization", token);
        }
        var address = this.mySource;
        address = address + endpoint;
        return this.http.post(address, body, { headers: headers });
    };
    DbHandlerService.prototype.getSomething = function (endpoint) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append("Content-Type", "application/json");
        var token = this.auth.getToken();
        headers = headers.append("Authorization", token);
        var address = this.mySource;
        address = address + endpoint;
        return this.http.get(address, { headers: headers });
    };
    DbHandlerService.prototype.updateSomething = function (body, endpoint) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append("Content-Type", "application/json");
        var token = this.auth.getToken();
        headers = headers.append("Authorization", token);
        var address = this.mySource;
        address = address + endpoint;
        return this.http.put(address, body, { headers: headers });
    };
    DbHandlerService.prototype.deleteSomething = function (item, endpoint) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers = headers.append("Content-Type", "application/json");
        var token = this.auth.getToken();
        headers = headers.append("Authorization", token);
        var address = this.mySource;
        address = address + endpoint;
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        params = params.append("item", item);
        var options = {
            headers: headers,
            params: params
        };
        return this.http.delete(address, options);
    };
    DbHandlerService.prototype.setLocal = function (name, value) {
        localStorage.removeItem(name);
        localStorage.setItem(name, JSON.stringify(value));
    };
    DbHandlerService.prototype.getLocal = function (name) {
        var value = JSON.parse(localStorage.getItem(name));
        return value;
    };
    DbHandlerService.prototype.refreshData = function (info, name) {
        console.log("starting refreshment");
        var fields = [];
        var values = [];
        if (info["values"] && info["values"].length) {
            var dataFields = Object.keys(info["values"][0]);
            var j = 0;
            dataFields.forEach(function (field) {
                field = field[0].toUpperCase() + field.slice(1);
                fields.push(field);
                j++;
            });
            /* info["values"].forEach(value => {
              let valueArray = Object.values(value);
              let vAux: any = {};
              var i = 0;
              dataFields.forEach(field => {
                if (field !== "id") {
                  vAux[i] = valueArray[i];
                }
                i++;
              });
              values.push(vAux);
            }); */
            values = info["values"];
            this.setLocal(name + "Fields", fields);
            this.setLocal(name + "Values", values);
        }
        else {
            this.setLocal(name + "Values", []);
            this.setLocal(name + "Fields", []);
        }
    };
    DbHandlerService.prototype.actualizar = function () {
        var _this = this;
        var user = this.auth.decode();
        var tipo = user.type;
        var refreshList;
        if (tipo == "SuperAdmin") {
            refreshList = [
                {
                    endpoint: "/users/all",
                    name: "users"
                },
                {
                    endpoint: "/clientes/all",
                    name: "clientes"
                },
                {
                    endpoint: "/gastos/all",
                    name: "gastos"
                },
                {
                    endpoint: "/proveedores/all",
                    name: "proveedores"
                },
                {
                    endpoint: "/productos/all",
                    name: "productos"
                },
                {
                    endpoint: "/almacenes/all",
                    name: "almacenes"
                },
                {
                    endpoint: "/compras/all",
                    name: "compras"
                },
                {
                    endpoint: "/pedidos/all",
                    name: "pedidos"
                },
                {
                    endpoint: "/precios/all",
                    name: "precios"
                },
                {
                    endpoint: "/roles/all",
                    name: "roles"
                },
                {
                    endpoint: "/bancos/all",
                    name: "bancos"
                },
                {
                    endpoint: "/proformas/all",
                    name: "proformas"
                },
                {
                    endpoint: "/cuentast/all",
                    name: "cuentast"
                },
                {
                    endpoint: "/cuentasporcobrar/all",
                    name: "cuentasporcobrar"
                },
                {
                    endpoint: "/cuentasporpagar/all",
                    name: "cuentasporpagar"
                },
                {
                    endpoint: "/cobros/all",
                    name: "cobros"
                },
                {
                    endpoint: "/pagos/all",
                    name: "pagos"
                },
                {
                    endpoint: "/company",
                    name: "company"
                } /*
                {
                  endpoint: "/movimientosdiarios/all",
                  name: "movimientosdiarios"
                } */
            ];
        }
        else if (tipo == "Admin") {
            refreshList = [
                {
                    endpoint: "/clientes/all",
                    name: "clientes"
                },
                {
                    endpoint: "/proveedores/all",
                    name: "proveedores"
                },
                {
                    endpoint: "/productos/all",
                    name: "productos"
                },
                {
                    endpoint: "/almacenes/all",
                    name: "almacenes"
                },
                {
                    endpoint: "/compras/all",
                    name: "compras"
                },
                {
                    endpoint: "/pedidos/all",
                    name: "pedidos"
                },
                {
                    endpoint: "/bancos/all",
                    name: "bancos"
                },
                {
                    endpoint: "/proformas/all",
                    name: "proformas"
                },
                {
                    endpoint: "/cuentast/all",
                    name: "cuentast"
                },
                {
                    endpoint: "/cuentasporcobrar/all",
                    name: "cuentasporcobrar"
                },
                {
                    endpoint: "/cuentasporpagar/all",
                    name: "cuentasporpagar"
                },
                {
                    endpoint: "/precios/all",
                    name: "precios"
                },
                {
                    endpoint: "/company",
                    name: "company"
                } /*
                {
                  endpoint: "/movimientosdiarios/all",
                  name: "movimientosdiarios"
                } */
            ];
        }
        else if (tipo == "Vendedor") {
            refreshList = [
                {
                    endpoint: "/clientes/all",
                    name: "clientes"
                },
                {
                    endpoint: "/productos/all",
                    name: "productos"
                },
                {
                    endpoint: "/almacenes/all",
                    name: "almacenes"
                },
                {
                    endpoint: "/company",
                    name: "company"
                },
                {
                    endpoint: "/pedidos/all",
                    name: "pedidos"
                }
            ];
        }
        var dataArray = [];
        refreshList.forEach(function (element) {
            dataArray.push(_this.getSomething(element.endpoint));
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(dataArray).subscribe(function (info) {
            var i = 0;
            refreshList.forEach(function (element) {
                _this.refreshData(info[i], element.name);
                i++;
            });
            window.location.reload();
        });
    };
    DbHandlerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], DbHandlerService);
    return DbHandlerService;
}());



/***/ }),

/***/ "./src/app/dashboard/services/file-handler.service.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/services/file-handler.service.ts ***!
  \************************************************************/
/*! exports provided: FileHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileHandlerService", function() { return FileHandlerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var FileHandlerService = /** @class */ (function () {
    function FileHandlerService(http) {
        this.http = http;
    }
    FileHandlerService.prototype.imgTobase64 = function (path) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(path, { responseType: "blob" }).toPromise()];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var reader = new FileReader();
                                reader.readAsDataURL(res);
                                reader.onloadend = function () {
                                    console.log("Returning data");
                                    var base64data = reader.result;
                                    resolve(base64data);
                                };
                            })];
                }
            });
        });
    };
    FileHandlerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FileHandlerService);
    return FileHandlerService;
}());



/***/ }),

/***/ "./src/app/directives/fileControl.ts":
/*!*******************************************!*\
  !*** ./src/app/directives/fileControl.ts ***!
  \*******************************************/
/*! exports provided: FileValueAccessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileValueAccessor", function() { return FileValueAccessor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var FileValueAccessor = /** @class */ (function () {
    function FileValueAccessor() {
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    FileValueAccessor_1 = FileValueAccessor;
    FileValueAccessor.prototype.writeValue = function (value) { };
    FileValueAccessor.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    FileValueAccessor.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    var FileValueAccessor_1;
    FileValueAccessor = FileValueAccessor_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: "input[type=file]",
            host: {
                "(change)": "onChange($event.target.files)",
                "(blur)": "onTouched()"
            },
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], useExisting: FileValueAccessor_1, multi: true }
            ]
        })
    ], FileValueAccessor);
    return FileValueAccessor;
}());



/***/ }),

/***/ "./src/app/directives/fileValidator.ts":
/*!*********************************************!*\
  !*** ./src/app/directives/fileValidator.ts ***!
  \*********************************************/
/*! exports provided: FileValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileValidator", function() { return FileValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var FileValidator = /** @class */ (function () {
    function FileValidator() {
    }
    FileValidator_1 = FileValidator;
    FileValidator.validate = function (c) {
        return c.value == null || c.value.length == 0 ? { required: true } : null;
    };
    FileValidator.prototype.validate = function (c) {
        return FileValidator_1.validate(c);
    };
    var FileValidator_1;
    FileValidator = FileValidator_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: "[requireFile]",
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: FileValidator_1, multi: true }
            ]
        })
    ], FileValidator);
    return FileValidator;
}());



/***/ }),

/***/ "./src/app/directives/must-match.validator.ts":
/*!****************************************************!*\
  !*** ./src/app/directives/must-match.validator.ts ***!
  \****************************************************/
/*! exports provided: ConfirmPasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPasswordValidator", function() { return ConfirmPasswordValidator; });
var ConfirmPasswordValidator = /** @class */ (function () {
    function ConfirmPasswordValidator() {
    }
    ConfirmPasswordValidator.MatchPassword = function (control) {
        var password = control.get("password").value;
        var confirmPassword = control.get("cpassword").value;
        if (password != confirmPassword) {
            control.get("cpassword").setErrors({ ConfirmPassword: true });
        }
        else {
            return null;
        }
    };
    return ConfirmPasswordValidator;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);





var AuthService = /** @class */ (function () {
    function AuthService(http, datePipe) {
        this.http = http;
        this.datePipe = datePipe;
        this.endpoint = "/auth";
        this.today = new Date();
        this.localSource = "http://localhost:3400";
        this.serverSource = "";
        this.prodSource = "";
        //mySource = this.localSource;
        this.mySource = this.serverSource;
    }
    AuthService.prototype.login = function (logData) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append("Content-Type", "application/json");
        var body = {
            username: logData.username,
            password: logData.password
        };
        var address = this.mySource + this.endpoint + "/";
        return this.http.post(address, body, { headers: headers });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem("loggedIn");
        localStorage.removeItem("token");
        localStorage.clear();
        window.location.reload();
    };
    AuthService.prototype.storeData = function (storeData) {
        localStorage.setItem("token", storeData.token);
        localStorage.setItem("loggedIn", storeData.status);
    };
    AuthService.prototype.resetPass = function (resetData) { };
    AuthService.prototype.decode = function () {
        try {
            var token = localStorage.getItem("token");
            return jwt_decode__WEBPACK_IMPORTED_MODULE_4__(token);
        }
        catch (Error) {
            return null;
        }
    };
    AuthService.prototype.getType = function () {
        try {
            var user = this.decode();
            var type = user.type;
            return type;
        }
        catch (Error) {
            return null;
        }
    };
    AuthService.prototype.getUsername = function () {
        try {
            var user = this.decode();
            var username = user.username;
            return username;
        }
        catch (Error) {
            return null;
        }
    };
    AuthService.prototype.getId = function () {
        try {
            var id = this.decode()._id;
            return id;
        }
        catch (Error) {
            return null;
        }
    };
    AuthService.prototype.isAuthenticated = function () {
        return true;
        var loggedIn = localStorage.getItem("loggedIn");
        var isLogged = loggedIn == "true";
        return isLogged;
    };
    AuthService.prototype.getToken = function () {
        var token = localStorage.getItem("token");
        return token;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/guard.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/guard.service.ts ***!
  \*******************************************/
/*! exports provided: GuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardService", function() { return GuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");




var GuardService = /** @class */ (function () {
    function GuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    GuardService.prototype.canActivate = function (next, state) {
        if (!this.auth.isAuthenticated() && state.url != "/login") {
            this.router.navigate(["/login"]);
            return false;
        }
        if (this.auth.isAuthenticated() && state.url == "/login") {
            this.router.navigate(["/"]);
        }
        return true;
    };
    GuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GuardService);
    return GuardService;
}());



/***/ }),

/***/ "./src/app/shared/components/error/error.component.css":
/*!*************************************************************!*\
  !*** ./src/app/shared/components/error/error.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blackBox {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transition: all 1s ease;\n  background-color: rgba(14, 4, 4, 0.555);\n  border: none;\n}\n\n.alertBox {\n  width: 380px;\n  height: 270px;\n  margin: auto;\n  position: relative;\n  top: 30%;\n  background-color: #fff;\n  border-radius: 12px;\n  box-shadow: 4px 6px 26px 6px rgba(0,0,0,0.48);\n}\n\n.errorHeader {\n  width: 90px;\n  height: 90px;\n  font-size: 46px;\n  color: white;\n  background-color: rgb(235, 27, 27);\n  border-radius: 100%;\n  position: absolute;\n  top: -50px;\n  left: 39%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Roboto Condensed', sans-serif;\n}\n\n.errorContent {\n  font-size: 16px;\n  color: rgba(0, 0, 0, 0.74);\n  padding-top: 60px; \n  padding-bottom: 50px;\n  text-align: center;\n  font-family: 'Roboto', sans-serif;\n}\n\nbutton {\n  border: none;\n  background: none;\n}\n\n.formButton {\n  width: 80%;\n  margin: auto;\n  display: flex;\n  align-items: center;\n  height: 48px;\n  background-color: rgb(235, 27, 27);\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n.formButton:hover {\n  color: red;\n  background-color: rgb(238, 44, 44);\n}\n\n.formButton p {\n  color: white;\n  margin: 0;\n  font-size: 15px;\n  width: 100%;\n  text-decoration: none !important;\n  font-family: 'Roboto Condensed', sans-serif;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHVDQUF1QztFQUN2QyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFHbkIsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFNBQVM7RUFDVCxlQUFlO0VBQ2YsV0FBVztFQUNYLGdDQUFnQztFQUNoQywyQ0FBMkM7QUFDN0MiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9lcnJvci9lcnJvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsYWNrQm94IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0LCA0LCA0LCAwLjU1NSk7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmFsZXJ0Qm94IHtcbiAgd2lkdGg6IDM4MHB4O1xuICBoZWlnaHQ6IDI3MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogNHB4IDZweCAyNnB4IDZweCByZ2JhKDAsMCwwLDAuNDgpO1xuICAtbW96LWJveC1zaGFkb3c6IDRweCA2cHggMjZweCA2cHggcmdiYSgwLDAsMCwwLjQ4KTtcbiAgYm94LXNoYWRvdzogNHB4IDZweCAyNnB4IDZweCByZ2JhKDAsMCwwLDAuNDgpO1xufVxuXG4uZXJyb3JIZWFkZXIge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBmb250LXNpemU6IDQ2cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjcsIDI3KTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC01MHB4O1xuICBsZWZ0OiAzOSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xufVxuXG4uZXJyb3JDb250ZW50IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc0KTtcbiAgcGFkZGluZy10b3A6IDYwcHg7IFxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmZvcm1CdXR0b24ge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjcsIDI3KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mb3JtQnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IHJlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgNDQsIDQ0KTtcbn1cblxuLmZvcm1CdXR0b24gcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/shared/components/error/error.component.html":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/error/error.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"blackBox\" (click)=\"close()\"></div>\n\n<div class=\"alertBox\">\n  <p class=\"errorHeader\">X</p>\n  <p class=\"errorContent\"><strong style=\"font-size: 30px;\">¡Error!</strong> <br><br> {{msg}}</p>\n  <button type=\"button\" class=\"formButton\" (click)=\"close()\">\n    <p>VOLVER</p>\n  </button>\n\n</div>"

/***/ }),

/***/ "./src/app/shared/components/error/error.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/error/error.component.ts ***!
  \************************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
        this.closeError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ErrorComponent.prototype.ngOnInit = function () { };
    ErrorComponent.prototype.close = function () {
        this.closeError.emit("Cerrando error");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ErrorComponent.prototype, "msg", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ErrorComponent.prototype, "closeError", void 0);
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-error",
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/shared/components/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/shared/components/error/error.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/not-found/not-found.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/not-found/not-found.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/components/not-found/not-found.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/not-found/not-found.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>"

/***/ }),

/***/ "./src/app/shared/components/not-found/not-found.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/not-found/not-found.component.ts ***!
  \********************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () { };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-not-found",
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/shared/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/shared/components/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/shared/components/error/error.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/shared/components/not-found/not-found.component.ts");





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_error_error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"], _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [_components_error_error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"]]
        })
    ], SharedModule);
    return SharedModule;
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

module.exports = __webpack_require__(/*! /home/angeloacr/Proyectos/InVen/invenApp/invenapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map