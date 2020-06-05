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


    __webpack_exports__["default"] = "<ion-header translucent=\"false\" class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title>\n      Restaurant\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div *ngFor=\"let i of menus\">\n    <ion-card button=\"true\" [routerLink]=\"['./', i.id]\">\n      <div class=\"img-gradient\">\n        <img [src]=\"i.image\" />\n      </div>\n      <ion-card-content>\n        <ion-card-title>{{ i.title }}</ion-card-title>\n        <ion-card-subtitle>{{ i.description }}</ion-card-subtitle>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <!-- <ion-list color=\"dark\">\n    <ion-item *ngFor=\"let menu of menus\" color=\"dark\">\n\n      <ion-img [src]=\"menu.image\"></ion-img>\n\n      <ion-label>\n        <h3>{{ menu.category }}</h3>\n        <p>{{ menu.description }}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list> -->\n\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-button expand=\"block\" class=\"button-bg\" size=\"large\">\n      <ion-icon slot=\"start\" name=\"cart-outline\"></ion-icon>\n      Food Cart\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>";
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


    __webpack_exports__["default"] = ".title {\n  position: absolute;\n  top: 85%;\n  color: #fff;\n  font-size: 24px;\n  font-weight: 700px;\n}\n\n.img-gradient {\n  position: relative;\n  display: inline-block;\n}\n\n.img-gradient:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: inline-block;\n  /* FF3.6+ */\n  /* Chrome,Safari4+ */\n  /* Chrome10+,Safari5.1+ */\n  /* Opera 11.10+ */\n  /* IE10+ */\n  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);\n  /* W3C */\n}\n\n.img-gradient img {\n  display: block;\n}\n\nion-content {\n  --background: linear-gradient(to bottom, #ffefba, #ffffff);\n}\n\nion-content ion-toolbar {\n  margin: 10px 0;\n}\n\n.button-bg {\n  --background: linear-gradient(to bottom, #ffefba, #ffffff);\n  --color: #000000e0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJraHV6MTkyNS9Eb2N1bWVudHMvUHJvamVjdHMvb3RoZXJzL3Jlc3RhdXJhbnQtYXBwL3Jlc3RhdXJhbnQtYXBwL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDM0JGOztBRDhCQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUMzQkY7O0FEOEJBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUFRLE1BQUE7RUFDUixXQUFBO0VBQVksWUFBQTtFQUNaLHFCQUFBO0VBQzJGLFdBQUE7RUFDNkMsb0JBQUE7RUFDM0MseUJBQUE7RUFDTCxpQkFBQTtFQUNDLFVBQUE7RUFDekYsMEZBQUE7RUFBMkYsUUFBQTtBQ25CN0Y7O0FEdUJBO0VBQ0UsY0FBQTtBQ3BCRjs7QUR1QkE7RUFDRSwwREFBQTtBQ3BCRjs7QUQ4QkE7RUFDRSxjQUFBO0FDM0JGOztBRDhCQTtFQUVFLDBEQUFBO0VBQ0Esa0JBQUE7QUM1QkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gI2NvbnRhaW5lciB7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIGxlZnQ6IDA7XG4vLyAgIHJpZ2h0OiAwO1xuLy8gICB0b3A6IDUwJTtcbi8vICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuLy8gfVxuXG4vLyAjY29udGFpbmVyIHN0cm9uZyB7XG4vLyAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4vLyB9XG5cbi8vICNjb250YWluZXIgcCB7XG4vLyAgIGZvbnQtc2l6ZTogMTZweDtcbi8vICAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbi8vICAgY29sb3I6ICM4YzhjOGM7XG5cbi8vICAgbWFyZ2luOiAwO1xuLy8gfVxuXG4vLyAjY29udGFpbmVyIGEge1xuLy8gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyB9XG5cbi50aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4NSU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDBweDtcbn1cblxuLmltZy1ncmFkaWVudHtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xufVxuXG4uaW1nLWdyYWRpZW50OmFmdGVyIHtcbiAgY29udGVudDonJztcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIGxlZnQ6MDsgdG9wOjA7XG4gIHdpZHRoOjEwMCU7IGhlaWdodDoxMDAlO1xuICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDAsIDAsIDAsIDAuNSkgMTAwJSk7IC8qIEZGMy42KyAqL1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLHJnYmEoMCwgMCwgMCwgMC41KSksIGNvbG9yLXN0b3AoMTAwJSxyZ2JhKDU4LCA1OCwgNTgsIDAuNSkpKTsgLyogQ2hyb21lLFNhZmFyaTQrICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSxyZ2JhKDAsIDAsIDAsIDAuNSkgMTAwJSk7IC8qIENocm9tZTEwKyxTYWZhcmk1LjErICovXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUscmdiYSgwLCAwLCAwLCAwLjUpIDEwMCUpOyAvKiBPcGVyYSAxMS4xMCsgKi9cbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUscmdiYSgwLCAwLCAwLCAwLjUpIDEwMCUpOyAvKiBJRTEwKyAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLHJnYmEoMCwgMCwgMCwgMC41KSAxMDAlKTsgLyogVzNDICovXG4gIC8vIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjMDAyZjRiJywgZW5kQ29sb3JzdHI9JyMwMDAwMDAwMCcsR3JhZGllbnRUeXBlPTAgKTsgLyogSUU2LTkgKi9cbn1cblxuLmltZy1ncmFkaWVudCBpbWd7XG4gIGRpc3BsYXk6YmxvY2s7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZlZmJhLCAjZmZmZmZmKTtcbiAgLy8gLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMGI0ODZiLCAjZjU2MjE3KTsgXG4gIC8vIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzE0MWUzMCwgIzI0M2I1NSk7XG59XG5cbi8vIGlvbi10b29sYmFyIHtcbi8vICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZmZmZmZWIsICNmZmZmZmZlYiwgI2ZmZmZmZmViKTtcbi8vICAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbi8vIH1cblxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuLmJ1dHRvbi1iZyB7XG4gIC8vIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZkYzgzMCwgI2YzNzMzNSlcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZlZmJhLCAjZmZmZmZmKTtcbiAgLS1jb2xvcjogIzAwMDAwMGUwO1xufSIsIi50aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4NSU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDBweDtcbn1cblxuLmltZy1ncmFkaWVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uaW1nLWdyYWRpZW50OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDAsIDAsIDAsIDAuNSkgMTAwJSk7XG4gIC8qIEZGMy42KyAqL1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCByZ2JhKDAsIDAsIDAsIDAuNSkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoNTgsIDU4LCA1OCwgMC41KSkpO1xuICAvKiBDaHJvbWUsU2FmYXJpNCsgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDAsIDAsIDAsIDAuNSkgMTAwJSk7XG4gIC8qIENocm9tZTEwKyxTYWZhcmk1LjErICovXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsIHJnYmEoMCwgMCwgMCwgMC41KSAxMDAlKTtcbiAgLyogT3BlcmEgMTEuMTArICovXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKDAsIDAsIDAsIDAuNSkgMTAwJSk7XG4gIC8qIElFMTArICovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsIHJnYmEoMCwgMCwgMCwgMC41KSAxMDAlKTtcbiAgLyogVzNDICovXG59XG5cbi5pbWctZ3JhZGllbnQgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZmZlZmJhLCAjZmZmZmZmKTtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuLmJ1dHRvbi1iZyB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZWZiYSwgI2ZmZmZmZik7XG4gIC0tY29sb3I6ICMwMDAwMDBlMDtcbn0iXX0= */";
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


    var _service_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../service/menu.service */
    "./src/app/service/menu.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HomePage = /*#__PURE__*/function () {
      function HomePage(_menuService, _router) {
        _classCallCheck(this, HomePage);

        this._menuService = _menuService;
        this._router = _router;
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.menus = this._menuService.getMenuCategory();
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _service_menu_service__WEBPACK_IMPORTED_MODULE_1__["MenuService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
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