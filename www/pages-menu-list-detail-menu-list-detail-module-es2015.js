(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-list-detail-menu-list-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu-list-detail/menu-list-detail.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu-list-detail/menu-list-detail.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"danger\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col class=\"ion-no-padding\">\n        <ion-img [src]=\"menuListItem.image\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-label>\n\n    </ion-label>\n\n  </ion-grid>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/menu-list-detail/menu-list-detail-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/menu-list-detail/menu-list-detail-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: MenuListDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuListDetailPageRoutingModule", function() { return MenuListDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _menu_list_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-list-detail.page */ "./src/app/pages/menu-list-detail/menu-list-detail.page.ts");




const routes = [
    {
        path: '',
        component: _menu_list_detail_page__WEBPACK_IMPORTED_MODULE_3__["MenuListDetailPage"]
    }
];
let MenuListDetailPageRoutingModule = class MenuListDetailPageRoutingModule {
};
MenuListDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MenuListDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/menu-list-detail/menu-list-detail.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/menu-list-detail/menu-list-detail.module.ts ***!
  \*******************************************************************/
/*! exports provided: MenuListDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuListDetailPageModule", function() { return MenuListDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _menu_list_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-list-detail-routing.module */ "./src/app/pages/menu-list-detail/menu-list-detail-routing.module.ts");
/* harmony import */ var _menu_list_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-list-detail.page */ "./src/app/pages/menu-list-detail/menu-list-detail.page.ts");







let MenuListDetailPageModule = class MenuListDetailPageModule {
};
MenuListDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _menu_list_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuListDetailPageRoutingModule"]
        ],
        declarations: [_menu_list_detail_page__WEBPACK_IMPORTED_MODULE_6__["MenuListDetailPage"]]
    })
], MenuListDetailPageModule);



/***/ }),

/***/ "./src/app/pages/menu-list-detail/menu-list-detail.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/menu-list-detail/menu-list-detail.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnUtbGlzdC1kZXRhaWwvbWVudS1saXN0LWRldGFpbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/menu-list-detail/menu-list-detail.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/menu-list-detail/menu-list-detail.page.ts ***!
  \*****************************************************************/
/*! exports provided: MenuListDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuListDetailPage", function() { return MenuListDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/menu.service */ "./src/app/service/menu.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




let MenuListDetailPage = class MenuListDetailPage {
    constructor(activatedRoute, _menuService) {
        this.activatedRoute = activatedRoute;
        this._menuService = _menuService;
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            if (!paramMap.has('menuListId')) {
                return;
            }
            const menuListId = paramMap.get('menuListId');
            this.menuListItem = this._menuService.getMenuList(menuListId);
        });
    }
};
MenuListDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _service_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"] }
];
MenuListDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-menu-list-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./menu-list-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu-list-detail/menu-list-detail.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./menu-list-detail.page.scss */ "./src/app/pages/menu-list-detail/menu-list-detail.page.scss")).default]
    })
], MenuListDetailPage);



/***/ })

}]);
//# sourceMappingURL=pages-menu-list-detail-menu-list-detail-module-es2015.js.map