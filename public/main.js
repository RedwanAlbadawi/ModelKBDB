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
/*! exports provided: routing, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _modeldb_modeldb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modeldb/modeldb.component */ "./src/app/modeldb/modeldb.component.ts");





var routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]
    },
    {
        path: 'modeldb',
        component: _modeldb_modeldb_component__WEBPACK_IMPORTED_MODULE_4__["ModeldbComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image{\r\n  height:59em; background-size:cover; width:100%;\r\n  background-image:url('architecture.jpg');\r\n  background-position:50% 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUUscUJBQXFCLEVBQUUsVUFBVTtFQUM5Qyx3Q0FBa0Q7RUFDbEQsMkJBQTJCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2V7XHJcbiAgaGVpZ2h0OjU5ZW07IGJhY2tncm91bmQtc2l6ZTpjb3Zlcjsgd2lkdGg6MTAwJTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnLi4vYXNzZXRzL2FyY2hpdGVjdHVyZS5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOjUwJSA1MCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"image\">\r\n  <app-header></app-header>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
        this.title = 'ModelKBDB';
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _modeldb_modeldb_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modeldb/modeldb.component */ "./src/app/modeldb/modeldb.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



















// Initialize Firebase
var firebaseConfig = {
    apiKey: 'AIzaSyCsDkYE3JaFLz0UOB3mOkua-MbNilY9Jx4',
    authDomain: 'modelkb-db.firebaseapp.com',
    databaseURL: 'https://modelkb-db.firebaseio.com',
    projectId: 'modelkb-db',
    storageBucket: 'modelkb-db.appspot.com',
    messagingSenderId: '67869158599'
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _modeldb_modeldb_component__WEBPACK_IMPORTED_MODULE_17__["ModeldbComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__["FileSelectDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["routing"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabaseModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(firebaseConfig),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            ],
            providers: [
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"],
                _auth_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"],
                _auth_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");






var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.authService.user$
            .map(function (user) {
            if (user.uid && user) {
                return true;
            }
            else {
                _this.router.navigate(['/']).then(function (_) { return false; });
            }
        });
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);




var AuthService = /** @class */ (function () {
    function AuthService(router, afAuth) {
        this.router = router;
        this.afAuth = afAuth;
        this.user$ = this.afAuth.authState;
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (_) { return _this.router.navigate(['/modeldb']); })
            .catch(function (error) { return console.log('auth error', error); });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.afAuth.auth.signOut()
            .then(function (_) { return _this.router.navigate(['/']); });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n  background-color:#007bff;\r\n  display: inline-block;\r\n  text-align: center;\r\n  width:100%;\r\n}\r\n\r\n.navbar-text {\r\n  color: white;\r\n}\r\n\r\nh1 {\r\n  font-size:72pt;\r\n}\r\n\r\n.navbar-right {\r\n  position: absolute;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzAwN2JmZjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbi5uYXZiYXItdGV4dCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC1zaXplOjcycHQ7XHJcbn1cclxuXHJcbi5uYXZiYXItcmlnaHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\">\r\n  <a class=\"navbar-left\" href=\"#\">\r\n    <img src=\"../../assets/kb_logo.png\" width=\"150\" height=\"150\" class=\"d-inline-block align-top\" alt=\"\">\r\n    <a class=\"navbar-text\" href=\"#\">\r\n      <h1>ModelKB DB</h1>\r\n    </a>\r\n    <a class=\"navbar-right\" href=\"#\" *ngIf=\"(authService.user$ | async)?.uid\">\r\n      <button class=\"btn btn-light\" (click)=\"authService.logout()\">Logout</button>\r\n    </a>\r\n  </a>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".primary-panel{\r\n  width:40%;\r\n  margin-left: 30%;\r\n  margin-right: 30%;\r\n}\r\n\r\n.panel-heading {\r\n  margin-top:10px;\r\n  color: darkblue;\r\n  text-align: center;\r\n  padding: 25px;\r\n}\r\n\r\nform {\r\n  font-family: Verdana;\r\n}\r\n\r\n.form-group{\r\n  color: black;\r\n  font-weight: 10pt;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbWFyeS1wYW5lbHtcclxuICB3aWR0aDo0MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDMwJTtcclxufVxyXG5cclxuLnBhbmVsLWhlYWRpbmcge1xyXG4gIG1hcmdpbi10b3A6MTBweDtcclxuICBjb2xvcjogZGFya2JsdWU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC13ZWlnaHQ6IDEwcHQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #LoginForm=\"ngForm\" (ngSubmit)=\"loginEvent(LoginForm.value)\">\r\n  <div class=\"panel primary-panel\">\r\n    <div class=\"panel-heading\">\r\n      <h2 class=\"panel-title\">Login</h2>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n      <div class=\"form-group\">\r\n        <label>Email Address:</label>\r\n        <input type=\"text\" required class=\"form-control\" name=\"email\" ngModel>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel primary-panel\">\r\n    <div class=\"form-group\">\r\n      <label>Password:</label>\r\n      <input required type=\"password\" class=\"form-control\" name=\"password\" ngModel>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"panel primary-panel\">\r\n    <button class=\"btn btn-primary\">Login</button><br><br>\r\n    <h6>New User? <a routerLink=\"/register\">Register</a></h6>\r\n    <h6>Forgot your password? <a routerLink=\"/register\">Reset</a></h6>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
        this.alert = '';
    }
    LoginComponent.prototype.loginEvent = function (value) {
        this.email = value.email.toString();
        this.password = value.password.toString();
        console.log(this.email);
        console.log(this.password);
        if (this.email !== '' && this.password !== '') {
            this.authService.login(this.email, this.password);
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modeldb/modeldb.component.css":
/*!***********************************************!*\
  !*** ./src/app/modeldb/modeldb.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kZWxkYi9tb2RlbGRiLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9tb2RlbGRiL21vZGVsZGIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modeldb/modeldb.component.html":
/*!************************************************!*\
  !*** ./src/app/modeldb/modeldb.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n<h3>Upload File</h3>\r\n<input type=\"file\" (change)=\"onFileSelected($event)\">\r\n<button type=\"button\" (click)=\"onUpload()\">Upload</button>\r\n</body>\r\n\r\n<button type=\"button\" (click)=\"test()\">Test</button>\r\n"

/***/ }),

/***/ "./src/app/modeldb/modeldb.component.ts":
/*!**********************************************!*\
  !*** ./src/app/modeldb/modeldb.component.ts ***!
  \**********************************************/
/*! exports provided: ModeldbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModeldbComponent", function() { return ModeldbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ModeldbComponent = /** @class */ (function () {
    function ModeldbComponent(http) {
        this.http = http;
        this.selectedFile = null;
    }
    ModeldbComponent.prototype.ngOnInit = function () {
    };
    ModeldbComponent.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
    };
    ModeldbComponent.prototype.onUpload = function () {
        console.log(this.selectedFile);
        var fd = new FormData();
        fd.append('file', this.selectedFile, this.selectedFile.name);
        this.http.post('/api/upload', fd)
            .subscribe(function (res) {
            console.log(res);
        });
        this.http.get('/api/collection/' + this.bucketname)
            .subscribe(function (res) {
            console.log(res);
        });
    };
    ModeldbComponent.prototype.test = function () {
        this.http.get('/api/collection/CNN011019-221632')
            .subscribe(function (res) {
            console.log(res);
        });
    };
    ModeldbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modeldb',
            template: __webpack_require__(/*! ./modeldb.component.html */ "./src/app/modeldb/modeldb.component.html"),
            styles: [__webpack_require__(/*! ./modeldb.component.css */ "./src/app/modeldb/modeldb.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ModeldbComponent);
    return ModeldbComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".primary-panel, .panel-body{\r\n  width:70%;\r\n  margin-left: 15%;\r\n  margin-right: 15%\r\n}\r\n\r\n.panel-heading {\r\n  margin-top:10px;\r\n  color: darkblue;\r\n  text-align: center;\r\n  padding: 25px;\r\n}\r\n\r\nform {\r\n  font-family: Verdana;\r\n}\r\n\r\n.form-group{\r\n  color: black;\r\n  font-weight: 10pt;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW1hcnktcGFuZWwsIC5wYW5lbC1ib2R5e1xyXG4gIHdpZHRoOjcwJTtcclxuICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gIG1hcmdpbi1yaWdodDogMTUlXHJcbn1cclxuXHJcbi5wYW5lbC1oZWFkaW5nIHtcclxuICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgY29sb3I6IGRhcmtibHVlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBmb250LWZhbWlseTogVmVyZGFuYTtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMHB0O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #RegForm=\"ngForm\" (ngSubmit)=\"registerEvent(RegForm.value)\">\r\n  <div class=\"panel primary-panel\">\r\n    <div class=\"panel-heading\">\r\n      <h2 class=\"panel-title\">New User Registration</h2>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n      <div class=\"form-group\">\r\n        <label>Email Address:</label>\r\n        <input type=\"text\" required class=\"form-control\" name=\"email\" ngModel>\r\n      </div>\r\n    </div>\r\n    <div class=\"panel primary-panel\">\r\n      <div class=\"form-group\">\r\n        <label>Password:</label>\r\n        <input required type=\"password\" class=\"form-control\" name=\"password\" ngModel>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"panel primary-panel\">\r\n      <div class=\"form-group\">\r\n        <label>Confirm Password:</label>\r\n        <input required type=\"password\" class=\"form-control\" name=\"Cpassword\" ngModel>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"panel primary-panel\">\r\n      <button class=\"btn btn-primary\">Register</button><br><br>\r\n      <h6>Existing User? <a routerLink=\"/login\">Login</a></h6>\r\n    </div>\r\n  </div>\r\n</form>\r\n\r\n<div *ngFor=\"let login of logins\">{{ login }}</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(firebaseauth) {
        this.firebaseauth = firebaseauth;
        this.alert = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerEvent = function (value) {
        var _this = this;
        this.email = value.email.toString();
        this.password = value.password.toString();
        console.log(this.email);
        console.log(this.password);
        try {
            this.firebaseauth.auth.createUserWithEmailAndPassword(this.email, this.password).then(function () {
            }).catch(function () {
                _this.alert = 'Invalid email/password should be of 6 characters';
            });
        }
        catch (e) {
            console.error(e);
        }
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], RegisterComponent);
    return RegisterComponent;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\br030614\Documents\ModelKBDB\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map