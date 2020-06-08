(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-list-menu-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu-list/menu-list.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu-list/menu-list.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header translucent=\"false\">\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>\n\t\t\t{{ menuItem.title }}\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n\t<ion-row>\n\t\t<ion-col class=\"ion-no-padding\">\n\t\t\t<div class=\"img-gradient\">\n\t\t\t\t<ion-img [src]=\"menuItem.image\"></ion-img>\n\t\t\t</div>\n\t\t</ion-col>\n\t</ion-row>\n\n\t<div class=\"menu-list\">\n\t\t<ion-row>\n\t\t\t<ion-col class=\"ion-no-padding\">\n\t\t\t\t<ion-card *ngFor=\"let i of menuItem.menus\" class=\"ion-no-padding\">\n\t\t\t\t\t<ion-card-header>\n\t\t\t\t\t\t<ion-card-title>{{ i.name }}</ion-card-title>\n\t\t\t\t\t</ion-card-header>\n\t\t\t\t\t<img [src]=\"i.imgUrl\" />\n\t\t\t\t\t<ion-card-content>\n\t\t\t\t\t\t<ion-text>\n\t\t\t\t\t\t\t<h3>{{ i.description }}</h3>\n\t\t\t\t\t\t</ion-text>\n\t\t\t\t\t</ion-card-content>\n\t\t\t\t\t<ion-item lines=\"none\" class=\"ion-padding-bottom\">\n\t\t\t\t\t\t<ion-note color=\"success\" slot=\"start\">{{ i.price | currency: '₱'}}</ion-note>\n\n\t\t\t\t\t\t<ion-button fill=\"clear\" slot=\"end\" (click)=\"removeMoreItemToCart(i)\">\n\t\t\t\t\t\t\t<ion-icon slot=\"icon-only\" name=\"remove-circle-outline\"></ion-icon>\n\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t<ion-note slot=\"end\">\n\t\t\t\t\t\t\t{{i.qty}}\n\t\t\t\t\t\t</ion-note>\n\t\t\t\t\t\t<ion-button fill=\"clear\" slot=\"end\" (click)=\"addMoreItemToCart(i)\">\n\t\t\t\t\t\t\t<ion-icon slot=\"icon-only\" name=\"add-circle-outline\"></ion-icon>\n\t\t\t\t\t\t</ion-button>\n\n\t\t\t\t\t\t<ion-button size=\"default\" slot=\"end\" color=\"primary\" (click)=\"addCart(i, i.qty); i.qty=0;\">\n\t\t\t\t\t\t\tAdd\n\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-card>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</div>\n\n</ion-content>\n\n<ion-footer>\n\t<ion-toolbar>\n\t\t<ion-button expand=\"block\" color=\"primary\" size=\"large\" (click)=\"goToMyCart()\">\n\t\t\t<!-- <ion-icon name=\"cart-outline\"></ion-icon> -->\n\t\t\tMy Cart\n\t\t\t<ion-note color=\"light\" *ngIf=\"cart.length > 0\">({{ cart.length }})</ion-note>\n\t\t</ion-button>\n\t</ion-toolbar>\n</ion-footer>");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-img {\n  --size: 100% ;\n}\n\n.button-bg {\n  --background: linear-gradient(to bottom, #fdc830, #f37335) ;\n}\n\n.menu-list {\n  position: absolute;\n  margin-top: -20px;\n  border-radius: 25px;\n  background: var(--ion-background-color, #ffffff);\n  margin-bottom: 80px;\n}\n\n.img-gradient {\n  position: relative;\n  display: inline-block;\n}\n\n.img-gradient:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: inline-block;\n  /* FF3.6+ */\n  /* Chrome,Safari4+ */\n  /* Chrome10+,Safari5.1+ */\n  /* Opera 11.10+ */\n  /* IE10+ */\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);\n  /* W3C */\n}\n\n.img-gradient img {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJraHV6MTkyNS9Eb2N1bWVudHMvUHJvamVjdHMvcGVyc29uYWwvcmVzdGF1cmFudC1pb25pYy1hcHAvc3JjL2FwcC9wYWdlcy9tZW51LWxpc3QvbWVudS1saXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWVudS1saXN0L21lbnUtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0Y7O0FEZUE7RUFDRSwyREFBQTtBQ1pGOztBRGVBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQkFBQTtBQ1pGOztBRGVBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQ1pGOztBRGVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUFRLE1BQUE7RUFDUixXQUFBO0VBQVksWUFBQTtFQUNaLHFCQUFBO0VBQzJGLFdBQUE7RUFDNkMsb0JBQUE7RUFDM0MseUJBQUE7RUFDTCxpQkFBQTtFQUNDLFVBQUE7RUFDekYsMEZBQUE7RUFBMkYsUUFBQTtBQ0o3Rjs7QURRQTtFQUNFLGNBQUE7QUNMRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnUtbGlzdC9tZW51LWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWltZyB7XG4gIC0tc2l6ZTogMTAwJVxufVxuXG4vLyBpb24tY29udGVudCB7XG4vLyAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZWZiYSwgI2ZmZmZmZik7XG4vLyB9XG5cbi8vIGlvbi10b29sYmFyIHtcbi8vICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZmZmZmZWIsICNmZmZmZmZlYiwgI2ZmZmZmZmViKTtcbi8vICAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbi8vIH1cblxuLy8gaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuLy8gICBtYXJnaW46IDEwcHggMDtcbi8vIH1cblxuLmJ1dHRvbi1iZyB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZkYzgzMCwgI2YzNzMzNSlcbn1cblxuLm1lbnUtbGlzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmZmZmKTtcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcbn1cblxuLmltZy1ncmFkaWVudHtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xufVxuXG4uaW1nLWdyYWRpZW50OmFmdGVyIHtcbiAgY29udGVudDonJztcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIGxlZnQ6MDsgdG9wOjA7XG4gIHdpZHRoOjEwMCU7IGhlaWdodDoxMDAlO1xuICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDAsIDAsIDAsIDAuNSkgMTAwJSk7IC8qIEZGMy42KyAqL1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLHJnYmEoMCwgMCwgMCwgMC41KSksIGNvbG9yLXN0b3AoMTAwJSxyZ2JhKDU4LCA1OCwgNTgsIDAuNSkpKTsgLyogQ2hyb21lLFNhZmFyaTQrICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSxyZ2JhKDAsIDAsIDAsIDAuNSkgMTAwJSk7IC8qIENocm9tZTEwKyxTYWZhcmk1LjErICovXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUscmdiYSgwLCAwLCAwLCAwLjUpIDEwMCUpOyAvKiBPcGVyYSAxMS4xMCsgKi9cbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUscmdiYSgwLCAwLCAwLCAwLjUpIDEwMCUpOyAvKiBJRTEwKyAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLHJnYmEoMCwgMCwgMCwgMC41KSAxMDAlKTsgLyogVzNDICovXG4gIC8vIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjMDAyZjRiJywgZW5kQ29sb3JzdHI9JyMwMDAwMDAwMCcsR3JhZGllbnRUeXBlPTAgKTsgLyogSUU2LTkgKi9cbn1cblxuLmltZy1ncmFkaWVudCBpbWd7XG4gIGRpc3BsYXk6YmxvY2s7XG59IiwiaW9uLWltZyB7XG4gIC0tc2l6ZTogMTAwJSA7XG59XG5cbi5idXR0b24tYmcge1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZGM4MzAsICNmMzczMzUpIDtcbn1cblxuLm1lbnUtbGlzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmZmZmKTtcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcbn1cblxuLmltZy1ncmFkaWVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uaW1nLWdyYWRpZW50OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDAsIDAsIDAsIDAuNSkgMTAwJSk7XG4gIC8qIEZGMy42KyAqL1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCByZ2JhKDAsIDAsIDAsIDAuNSkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoNTgsIDU4LCA1OCwgMC41KSkpO1xuICAvKiBDaHJvbWUsU2FmYXJpNCsgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDAsIDAsIDAsIDAuNSkgMTAwJSk7XG4gIC8qIENocm9tZTEwKyxTYWZhcmk1LjErICovXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsIHJnYmEoMCwgMCwgMCwgMC41KSAxMDAlKTtcbiAgLyogT3BlcmEgMTEuMTArICovXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDAsIDAsIDAsIDAuNSkgMTAwJSk7XG4gIC8qIElFMTArICovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsIHJnYmEoMCwgMCwgMCwgMC41KSAxMDAlKTtcbiAgLyogVzNDICovXG59XG5cbi5pbWctZ3JhZGllbnQgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */");

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
        this.cart = [];
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('menuId')) {
                return;
            }
            const menuId = paramMap.get('menuId');
            this.menuItem = this._menuService.getMenu(menuId);
            this.menuItem.menus.forEach((item) => item.qty = 0);
        });
        this._userService.getOrders();
        this.cart = this._userService.getCartItems();
    }
    addCart(i, qty) {
        qty = qty === 0 ? 1 : qty;
        let item = this._userService.getCartItems().find(item => item.id == i.menuid);
        if (item === undefined) {
            this._userService.getCartItems().push({
                id: i.menuid,
                name: i.name,
                description: i.description,
                price: i.price,
                qty: qty
            });
        }
        else {
            item.qty = item.qty + qty;
        }
    }
    goToMyCart() {
        this.router.navigateByUrl('/cart');
    }
    IsItemOnCart(item) {
        return this._userService.IsItemOnCart(item);
    }
    addMoreItemToCart(i) {
        if (i.qty === undefined) {
            i.qty = 1;
        }
        else {
            i.qty++;
        }
    }
    removeMoreItemToCart(i) {
        if (i.qty === undefined) {
            i.qty = 0;
        }
        else {
            if (i.qty <= 1) {
                i.qty = 0;
                return;
            }
            else {
                i.qty--;
            }
        }
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