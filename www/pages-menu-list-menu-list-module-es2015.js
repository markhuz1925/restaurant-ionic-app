(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-list-menu-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu-list/menu-list.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu-list/menu-list.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>\n\t\t\t{{ menuItem.title }}\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n\t<ion-grid fixed class=\"ion-no-padding\">\n\t\t<ion-row>\n\t\t\t<ion-col class=\"ion-no-padding\">\n\t\t\t\t<div class=\"img-gradient\">\n\t\t\t\t\t<ion-img [src]=\"menuItem.image\"></ion-img>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<div class=\"menu-list\">\n\t\t\t<ion-row>\n\t\t\t\t<ion-col class=\"ion-no-padding\">\n\t\t\t\t\t<ion-card *ngFor=\"let i of menuItem.menus\" class=\"ion-no-padding\">\n\t\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\t\t<ion-card-title>{{ i.name }}</ion-card-title>\n\t\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t\t<img [src]=\"i.imgUrl\" />\n\t\t\t\t\t\t<ion-card-content>\n\t\t\t\t\t\t\t<ion-text>\n\t\t\t\t\t\t\t\t<h3>{{ i.description }}</h3>\n\t\t\t\t\t\t\t</ion-text>\n\t\t\t\t\t\t</ion-card-content>\n\t\t\t\t\t\t<ion-item lines=\"none\">\n\t\t\t\t\t\t\t<ion-note color=\"danger\" slot=\"start\">{{ i.price | currency: 'Php'}}</ion-note>\n\t\t\t\t\t\t\t<ion-button slot=\"end\" color=\"success\" (click)=\"addCart(i)\">Order</ion-button>\n\t\t\t\t\t\t</ion-item>\n\t\t\t\t\t</ion-card>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</div>\n\n\t</ion-grid>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/menu-list/menu-list-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/menu-list/menu-list-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: MenuListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuListPageRoutingModule", function() { return MenuListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _menu_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-list.page */ "./src/app/pages/menu-list/menu-list.page.ts");




const routes = [
    {
        path: '',
        component: _menu_list_page__WEBPACK_IMPORTED_MODULE_3__["MenuListPage"]
    }
];
let MenuListPageRoutingModule = class MenuListPageRoutingModule {
};
MenuListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MenuListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/menu-list/menu-list.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/menu-list/menu-list.module.ts ***!
  \*****************************************************/
/*! exports provided: MenuListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuListPageModule", function() { return MenuListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _menu_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-list-routing.module */ "./src/app/pages/menu-list/menu-list-routing.module.ts");
/* harmony import */ var _menu_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-list.page */ "./src/app/pages/menu-list/menu-list.page.ts");







let MenuListPageModule = class MenuListPageModule {
};
MenuListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _menu_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuListPageRoutingModule"]
        ],
        declarations: [_menu_list_page__WEBPACK_IMPORTED_MODULE_6__["MenuListPage"]]
    })
], MenuListPageModule);



/***/ }),

/***/ "./src/app/pages/menu-list/menu-list.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/menu-list/menu-list.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-img {\n  --size: 100% ;\n}\n\nion-content {\n  --background: linear-gradient(to bottom, #ffefba, #ffffff);\n}\n\nion-content ion-toolbar {\n  margin: 10px 0;\n}\n\n.button-bg {\n  --background: linear-gradient(to bottom, #fdc830, #f37335) ;\n}\n\n.menu-list {\n  position: absolute;\n  margin-top: -20px;\n  border-radius: 25px;\n  background: var(--ion-background-color, linear-gradient(to bottom, #ffefba, #ffffff));\n}\n\n.img-gradient {\n  position: relative;\n  display: inline-block;\n}\n\n.img-gradient:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: inline-block;\n  /* FF3.6+ */\n  /* Chrome,Safari4+ */\n  /* Chrome10+,Safari5.1+ */\n  /* Opera 11.10+ */\n  /* IE10+ */\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);\n  /* W3C */\n}\n\n.img-gradient img {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJraHV6MTkyNS9Eb2N1bWVudHMvUHJvamVjdHMvb3RoZXJzL3Jlc3RhdXJhbnQtYXBwL3Jlc3RhdXJhbnQtYXBwL3NyYy9hcHAvcGFnZXMvbWVudS1saXN0L21lbnUtbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21lbnUtbGlzdC9tZW51LWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsMERBQUE7QUNDRjs7QURPQTtFQUNFLGNBQUE7QUNKRjs7QURPQTtFQUNFLDJEQUFBO0FDSkY7O0FET0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxRkFBQTtBQ0pGOztBRE9BO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQ0pGOztBRE9BO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUFRLE1BQUE7RUFDUixXQUFBO0VBQVksWUFBQTtFQUNaLHFCQUFBO0VBQzJGLFdBQUE7RUFDNkMsb0JBQUE7RUFDM0MseUJBQUE7RUFDTCxpQkFBQTtFQUNDLFVBQUE7RUFDekYsMEZBQUE7RUFBMkYsUUFBQTtBQ0k3Rjs7QURBQTtFQUNFLGNBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnUtbGlzdC9tZW51LWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWltZyB7XG4gIC0tc2l6ZTogMTAwJVxufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZWZiYSwgI2ZmZmZmZik7XG59XG5cbi8vIGlvbi10b29sYmFyIHtcbi8vICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZmZmZmZWIsICNmZmZmZmZlYiwgI2ZmZmZmZmViKTtcbi8vICAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbi8vIH1cblxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuLmJ1dHRvbi1iZyB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZkYzgzMCwgI2YzNzMzNSlcbn1cblxuLm1lbnUtbGlzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZlZmJhLCAjZmZmZmZmKSk7XG59XG5cbi5pbWctZ3JhZGllbnR7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICBkaXNwbGF5OmlubGluZS1ibG9jaztcbn1cblxuLmltZy1ncmFkaWVudDphZnRlciB7XG4gIGNvbnRlbnQ6Jyc7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICBsZWZ0OjA7IHRvcDowO1xuICB3aWR0aDoxMDAlOyBoZWlnaHQ6MTAwJTtcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSwgcmdiYSgwLCAwLCAwLCAwLjUpIDEwMCUpOyAvKiBGRjMuNisgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSxyZ2JhKDAsIDAsIDAsIDAuNSkpLCBjb2xvci1zdG9wKDEwMCUscmdiYSg1OCwgNTgsIDU4LCAwLjUpKSk7IC8qIENocm9tZSxTYWZhcmk0KyAqL1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUscmdiYSgwLCAwLCAwLCAwLjUpIDEwMCUpOyAvKiBDaHJvbWUxMCssU2FmYXJpNS4xKyAqL1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLHJnYmEoMCwgMCwgMCwgMC41KSAxMDAlKTsgLyogT3BlcmEgMTEuMTArICovXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLHJnYmEoMCwgMCwgMCwgMC41KSAxMDAlKTsgLyogSUUxMCsgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSxyZ2JhKDAsIDAsIDAsIDAuNSkgMTAwJSk7IC8qIFczQyAqL1xuICAvLyBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzAwMmY0YicsIGVuZENvbG9yc3RyPScjMDAwMDAwMDAnLEdyYWRpZW50VHlwZT0wICk7IC8qIElFNi05ICovXG59XG5cbi5pbWctZ3JhZGllbnQgaW1ne1xuICBkaXNwbGF5OmJsb2NrO1xufSIsImlvbi1pbWcge1xuICAtLXNpemU6IDEwMCUgO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZWZiYSwgI2ZmZmZmZik7XG59XG5cbmlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbi5idXR0b24tYmcge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZGM4MzAsICNmMzczMzUpIDtcbn1cblxuLm1lbnUtbGlzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZlZmJhLCAjZmZmZmZmKSk7XG59XG5cbi5pbWctZ3JhZGllbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmltZy1ncmFkaWVudDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSwgcmdiYSgwLCAwLCAwLCAwLjUpIDEwMCUpO1xuICAvKiBGRjMuNisgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSwgcmdiYSgwLCAwLCAwLCAwLjUpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDU4LCA1OCwgNTgsIDAuNSkpKTtcbiAgLyogQ2hyb21lLFNhZmFyaTQrICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSwgcmdiYSgwLCAwLCAwLCAwLjUpIDEwMCUpO1xuICAvKiBDaHJvbWUxMCssU2FmYXJpNS4xKyAqL1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDAsIDAsIDAsIDAuNSkgMTAwJSk7XG4gIC8qIE9wZXJhIDExLjEwKyAqL1xuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSwgcmdiYSgwLCAwLCAwLCAwLjUpIDEwMCUpO1xuICAvKiBJRTEwKyAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDAsIDAsIDAsIDAuNSkgMTAwJSk7XG4gIC8qIFczQyAqL1xufVxuXG4uaW1nLWdyYWRpZW50IGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/menu-list/menu-list.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/menu-list/menu-list.page.ts ***!
  \***************************************************/
/*! exports provided: MenuListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuListPage", function() { return MenuListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _service_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/menu.service */ "./src/app/service/menu.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let MenuListPage = class MenuListPage {
    constructor(activatedRoute, _menuService, _userService, router) {
        this.activatedRoute = activatedRoute;
        this._menuService = _menuService;
        this._userService = _userService;
        this.router = router;
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('menuId')) {
                return;
            }
            const menuId = paramMap.get('menuId');
            this.menuItem = this._menuService.getMenu(menuId);
        });
    }
    addCart(i) {
        // this._userService.addItemsCart(i);
        let item = this._userService.getCartItems().find(item => item.id == i.menuid);
        if (item === undefined) {
            this._userService.getCartItems().push({
                id: i.menuid,
                name: i.name,
                description: i.description,
                price: i.price,
                qty: 1
            });
        }
        else {
            item.qty++;
        }
        this.router.navigateByUrl('/cart');
    }
};
MenuListPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _service_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"] },
    { type: _service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
MenuListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menu-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./menu-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu-list/menu-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./menu-list.page.scss */ "./src/app/pages/menu-list/menu-list.page.scss")).default]
    })
], MenuListPage);



/***/ })

}]);
//# sourceMappingURL=pages-menu-list-menu-list-module-es2015.js.map