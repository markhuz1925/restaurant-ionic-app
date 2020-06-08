function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cart-cart-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCartCartPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent=\"false\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Cart\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid fixed class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col class=\"ion-no-padding\">\n\n        <ion-card *ngFor=\"let i of items\" class=\"ion-no-padding\">\n\n          <ion-card-header class=\"ion-no-padding\">\n            <ion-item lines=\"none\" class=\"ion-no-padding\">\n              <ion-button (click)=\"removeItem(i)\" color=\"medium\" fill=\"clear\" slot=\"end\" class=\"ion-no-padding\">\n                <ion-icon name=\"close-circle-outline\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n              <div class=\"ion-text-nowrap ion-margin-start\">\n                <h2>{{ i.name }}</h2>\n              </div>\n            </ion-item>\n          </ion-card-header>\n\n          <ion-card-content>\n            <ion-text>\n              <h3>{{ i.description }}</h3>\n            </ion-text>\n          </ion-card-content>\n          <ion-item lines=\"none\">\n            <ion-note color=\"default\" slot=\"start\">Amount:</ion-note>\n            <ion-note color=\"default\" slot=\"end\">{{ (i.price | currency: '₱')  }}</ion-note>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-note color=\"default\" slot=\"start\">Qty:</ion-note>\n            <ion-note color=\"default\" slot=\"end\">{{ i.qty }}</ion-note>\n          </ion-item>\n          <ion-item lines=\"none\">\n\t\t\t\t\t\t<ion-button fill=\"clear\" slot=\"start\" (click)=\"decreaseQty(i)\">\n\t\t\t\t\t\t\t<ion-icon slot=\"icon-only\" name=\"remove-circle-outline\"></ion-icon>\n\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t<ion-note slot=\"end\">\n\t\t\t\t\t\t\t<ion-label slot=\"start\">{{i.qty}}</ion-label>\n\t\t\t\t\t\t</ion-note>\n\t\t\t\t\t\t<ion-button fill=\"clear\" slot=\"end\" (click)=\"increaseQty(i)\">\n\t\t\t\t\t\t\t<ion-icon slot=\"icon-only\" name=\"add-circle-outline\"></ion-icon>\n\t\t\t\t\t\t</ion-button>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-text slot=\"start\">\n              Subtotal\n            </ion-text>\n            <ion-text slot=\"end\">\n              {{ (i.price * (i.qty > 10? 10: i.qty)) | currency: '₱' }}\n            </ion-text>\n          </ion-item>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-item lines=\"none\">\n      <ion-text slot=\"start\">Total</ion-text>\n      <ion-text slot=\"end\" color=\"primary\">{{ getTotalAmountInCart() | currency: '₱' }}</ion-text>\n    </ion-item>\n\n    <ion-button color=\"primary\" fill=\"solid\" size=\"large\" expand=\"block\">\n      Checkout\n    </ion-button>\n\n  </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/cart/cart-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/cart/cart-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: CartPageRoutingModule */

  /***/
  function srcAppPagesCartCartRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartPageRoutingModule", function () {
      return CartPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _cart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cart.page */
    "./src/app/pages/cart/cart.page.ts");

    var routes = [{
      path: '',
      component: _cart_page__WEBPACK_IMPORTED_MODULE_3__["CartPage"]
    }];

    var CartPageRoutingModule = function CartPageRoutingModule() {
      _classCallCheck(this, CartPageRoutingModule);
    };

    CartPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CartPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/cart/cart.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/cart/cart.module.ts ***!
    \*******************************************/

  /*! exports provided: CartPageModule */

  /***/
  function srcAppPagesCartCartModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartPageModule", function () {
      return CartPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cart-routing.module */
    "./src/app/pages/cart/cart-routing.module.ts");
    /* harmony import */


    var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cart.page */
    "./src/app/pages/cart/cart.page.ts");

    var CartPageModule = function CartPageModule() {
      _classCallCheck(this, CartPageModule);
    };

    CartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartPageRoutingModule"]],
      declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
    })], CartPageModule);
    /***/
  },

  /***/
  "./src/app/pages/cart/cart.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/cart/cart.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCartCartPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcnQvY2FydC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/cart/cart.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/cart/cart.page.ts ***!
    \*****************************************/

  /*! exports provided: CartPage */

  /***/
  function srcAppPagesCartCartPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartPage", function () {
      return CartPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../service/user.service */
    "./src/app/service/user.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CartPage = /*#__PURE__*/function () {
      function CartPage(_userService) {
        _classCallCheck(this, CartPage);

        this._userService = _userService;
        this.items = [];
      }

      _createClass(CartPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.items = this._userService.getCartItems();
        }
      }, {
        key: "removeItem",
        value: function removeItem(item) {
          var index = this.items.indexOf(item);
          this.items.splice(index, 1);
        }
      }, {
        key: "getTotalAmountInCart",
        value: function getTotalAmountInCart() {
          return this._userService.getTotalAmount();
        }
      }, {
        key: "increaseQty",
        value: function increaseQty(i) {
          if (i.qty === undefined) {
            i.qty = 1;
          } else {
            i.qty++;
          }
        }
      }, {
        key: "decreaseQty",
        value: function decreaseQty(i) {
          if (i.qty === undefined) {
            i.qty = 0;
          } else {
            if (i.qty <= 1) {
              this.removeItem(i);
            } else {
              i.qty--;
            }
          }
        }
      }]);

      return CartPage;
    }();

    CartPage.ctorParameters = function () {
      return [{
        type: _service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
      }];
    };

    CartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-cart',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./cart.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./cart.page.scss */
      "./src/app/pages/cart/cart.page.scss"))["default"]]
    })], CartPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-cart-cart-module-es5.js.map