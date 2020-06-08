function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent=\"false\">\n  <ion-toolbar>\n    <ion-title>\n      Restaurant\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div *ngFor=\"let i of menus\">\n    <ion-card button=\"true\" [routerLink]=\"['./', i.id]\">\n      <div class=\"img-gradient\">\n        <img [src]=\"i.image\" />\n      </div>\n      <ion-card-content>\n        <ion-card-title>{{ i.title }}</ion-card-title>\n        <ion-card-subtitle>{{ i.description }}</ion-card-subtitle>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <!-- <ion-list color=\"dark\">\n    <ion-item *ngFor=\"let menu of menus\" color=\"dark\">\n\n      <ion-img [src]=\"menu.image\"></ion-img>\n\n      <ion-label>\n        <h3>{{ menu.category }}</h3>\n        <p>{{ menu.description }}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list> -->\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-button expand=\"block\" color=\"primary\" size=\"large\" (click)=\"goToMyCart()\">\n      <!-- <ion-icon name=\"cart-outline\"></ion-icon> -->\n      My Cart\n      <ion-note color=\"light\" *ngIf=\"cart.length > 0\">({{ cart.length }})</ion-note>\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n\n<!-- <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n  <ion-fab-button>\n    <ion-icon name=\"cart-outline\"></ion-icon>\n  </ion-fab-button>\n</ion-fab> -->";
    /***/
  },

  /***/
  "./src/app/pages/home/home-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/home/home-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppPagesHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
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


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/pages/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/home/home.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.module.ts ***!
    \*******************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppPagesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/pages/home/home.page.ts");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/pages/home/home-routing.module.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/pages/home/home.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".title {\n  position: absolute;\n  top: 85%;\n  color: #fff;\n  font-size: 24px;\n  font-weight: 700px;\n}\n\n.img-gradient {\n  position: relative;\n  display: inline-block;\n}\n\n.img-gradient:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: inline-block;\n  /* FF3.6+ */\n  /* Chrome,Safari4+ */\n  /* Chrome10+,Safari5.1+ */\n  /* Opera 11.10+ */\n  /* IE10+ */\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);\n  /* W3C */\n}\n\n.img-gradient img {\n  display: block;\n}\n\nion-content ion-toolbar {\n  margin: 10px 0;\n}\n\n.button-bg {\n  --background: linear-gradient(to bottom, #ffefba, #ffffff);\n  --color: #000000e0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJraHV6MTkyNS9Eb2N1bWVudHMvUHJvamVjdHMvcGVyc29uYWwvcmVzdGF1cmFudC1pb25pYy1hcHAvc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUMzQkY7O0FEOEJBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQzNCRjs7QUQ4QkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQVEsTUFBQTtFQUNSLFdBQUE7RUFBWSxZQUFBO0VBQ1oscUJBQUE7RUFDMkYsV0FBQTtFQUM2QyxvQkFBQTtFQUMzQyx5QkFBQTtFQUNMLGlCQUFBO0VBQ0MsVUFBQTtFQUN6RiwwRkFBQTtFQUEyRixRQUFBO0FDbkI3Rjs7QUR1QkE7RUFDRSxjQUFBO0FDcEJGOztBRGtDQTtFQUNFLGNBQUE7QUMvQkY7O0FEa0NBO0VBRUUsMERBQUE7RUFDQSxrQkFBQTtBQ2hDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAjY29udGFpbmVyIHtcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgbGVmdDogMDtcbi8vICAgcmlnaHQ6IDA7XG4vLyAgIHRvcDogNTAlO1xuLy8gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4vLyB9XG5cbi8vICNjb250YWluZXIgc3Ryb25nIHtcbi8vICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICBsaW5lLWhlaWdodDogMjZweDtcbi8vIH1cblxuLy8gI2NvbnRhaW5lciBwIHtcbi8vICAgZm9udC1zaXplOiAxNnB4O1xuLy8gICBsaW5lLWhlaWdodDogMjJweDtcblxuLy8gICBjb2xvcjogIzhjOGM4YztcblxuLy8gICBtYXJnaW46IDA7XG4vLyB9XG5cbi8vICNjb250YWluZXIgYSB7XG4vLyAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbi8vIH1cblxuLnRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDg1JTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMHB4O1xufVxuXG4uaW1nLWdyYWRpZW50e1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG59XG5cbi5pbWctZ3JhZGllbnQ6YWZ0ZXIge1xuICBjb250ZW50OicnO1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgbGVmdDowOyB0b3A6MDtcbiAgd2lkdGg6MTAwJTsgaGVpZ2h0OjEwMCU7XG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsIHJnYmEoMCwgMCwgMCwgMC41KSAxMDAlKTsgLyogRkYzLjYrICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUscmdiYSgwLCAwLCAwLCAwLjUpKSwgY29sb3Itc3RvcCgxMDAlLHJnYmEoNTgsIDU4LCA1OCwgMC41KSkpOyAvKiBDaHJvbWUsU2FmYXJpNCsgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLHJnYmEoMCwgMCwgMCwgMC41KSAxMDAlKTsgLyogQ2hyb21lMTArLFNhZmFyaTUuMSsgKi9cbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSxyZ2JhKDAsIDAsIDAsIDAuNSkgMTAwJSk7IC8qIE9wZXJhIDExLjEwKyAqL1xuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSxyZ2JhKDAsIDAsIDAsIDAuNSkgMTAwJSk7IC8qIElFMTArICovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUscmdiYSgwLCAwLCAwLCAwLjUpIDEwMCUpOyAvKiBXM0MgKi9cbiAgLy8gZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyMwMDJmNGInLCBlbmRDb2xvcnN0cj0nIzAwMDAwMDAwJyxHcmFkaWVudFR5cGU9MCApOyAvKiBJRTYtOSAqL1xufVxuXG4uaW1nLWdyYWRpZW50IGltZ3tcbiAgZGlzcGxheTpibG9jaztcbn1cblxuLy8gaW9uLWNvbnRlbnQge1xuLy8gICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmVmYmEsICNmZmZmZmYpO1xuLy8gICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwYjQ4NmIsICNmNTYyMTcpOyBcbi8vICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMTQxZTMwLCAjMjQzYjU1KTtcbi8vIH1cblxuLy8gaW9uLXRvb2xiYXIge1xuLy8gICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmZmZmZlYiwgI2ZmZmZmZmViLCAjZmZmZmZmZWIpO1xuLy8gICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuLy8gfVxuXG5pb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG4uYnV0dG9uLWJnIHtcbiAgLy8gLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmRjODMwLCAjZjM3MzM1KVxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmVmYmEsICNmZmZmZmYpO1xuICAtLWNvbG9yOiAjMDAwMDAwZTA7XG59IiwiLnRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDg1JTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMHB4O1xufVxuXG4uaW1nLWdyYWRpZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5pbWctZ3JhZGllbnQ6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsIHJnYmEoMCwgMCwgMCwgMC41KSAxMDAlKTtcbiAgLyogRkYzLjYrICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUsIHJnYmEoMCwgMCwgMCwgMC41KSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSg1OCwgNTgsIDU4LCAwLjUpKSk7XG4gIC8qIENocm9tZSxTYWZhcmk0KyAqL1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsIHJnYmEoMCwgMCwgMCwgMC41KSAxMDAlKTtcbiAgLyogQ2hyb21lMTArLFNhZmFyaTUuMSsgKi9cbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSwgcmdiYSgwLCAwLCAwLCAwLjUpIDEwMCUpO1xuICAvKiBPcGVyYSAxMS4xMCsgKi9cbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsIHJnYmEoMCwgMCwgMCwgMC41KSAxMDAlKTtcbiAgLyogSUUxMCsgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSwgcmdiYSgwLCAwLCAwLCAwLjUpIDEwMCUpO1xuICAvKiBXM0MgKi9cbn1cblxuLmltZy1ncmFkaWVudCBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuLmJ1dHRvbi1iZyB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZWZiYSwgI2ZmZmZmZik7XG4gIC0tY29sb3I6ICMwMDAwMDBlMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/home/home.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/home/home.page.ts ***!
    \*****************************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppPagesHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var _service_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../service/menu.service */
    "./src/app/service/menu.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HomePage = /*#__PURE__*/function () {
      function HomePage(_menuService, router, _userService) {
        _classCallCheck(this, HomePage);

        this._menuService = _menuService;
        this.router = router;
        this._userService = _userService;
        this.cart = [];
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.menus = this._menuService.getMenuCategory();
          this.cart = this._userService.getCartItems();
        }
      }, {
        key: "goToMyCart",
        value: function goToMyCart() {
          this.router.navigateByUrl('/cart');
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _service_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
      }];
    };

    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/pages/home/home.page.scss"))["default"]]
    })], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-home-home-module-es5.js.map