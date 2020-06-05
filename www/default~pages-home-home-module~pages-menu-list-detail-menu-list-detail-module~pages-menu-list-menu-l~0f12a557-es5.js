function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-home-home-module~pages-menu-list-detail-menu-list-detail-module~pages-menu-list-menu-l~0f12a557"], {
  /***/
  "./src/app/service/menu.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/service/menu.service.ts ***!
    \*****************************************/

  /*! exports provided: MenuService */

  /***/
  function srcAppServiceMenuServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuService", function () {
      return MenuService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MenuService = /*#__PURE__*/function () {
      function MenuService() {
        _classCallCheck(this, MenuService);

        this.data = [{
          id: "1",
          title: "Appetizers",
          description: "",
          image: "/assets/images/appetizer-salad.jpeg",
          menus: [{
            menuid: "1",
            name: "Fried Vegetable Lumpia",
            description: "Spring rolls stuffed with vegetables, Served with spiced vinegar",
            price: "150.00",
            imgUrl: "/assets/images/fried-lumpia-vegetable.jpg"
          }, {
            menuid: "2",
            name: "Spicy Squid",
            description: "Deep fried calamari in a sweet-spicy sauce served with ranc dip",
            price: "200.00",
            imgUrl: "/assets/images/spicy-squid.jpg"
          }, {
            menuid: "3",
            name: "Tokwa't Baboy",
            description: "Deep-fried tofu and pork marinated in our special sauce",
            price: "230.00",
            imgUrl: "/assets/images/tokwababoy.jpg"
          }]
        }, {
          id: "2",
          title: "Entrée",
          description: "Served with Steamed Rice",
          image: "/assets/images/filipino-asian.jpg",
          menus: [{
            menuid: "4",
            name: "Kalaw Chicken Inasal",
            description: "Grilled chicken quarter served with chili, calamansi and soy vinegar sauce",
            price: "300.00",
            imgUrl: "/assets/images/kalaw-chicken-inasal.jpg"
          }, {
            menuid: "5",
            name: "Crispy Pork Kare-kare",
            description: "Crispy fried pork belly in a bed of vegetables, smothered with savory peanut gravy",
            price: "320.00",
            imgUrl: "/assets/images/crispy-karekare.jpg"
          }, {
            menuid: "6",
            name: "Grilled Tanigue",
            description: "Tanigue steak seasoned with calamansi",
            price: "320.00",
            imgUrl: "/assets/images/grilled-tanigue.jpg"
          }]
        }, {
          id: "3",
          title: "Vegetables",
          description: "",
          image: "/assets/images/vegetables.jpg",
          menus: [{
            menuid: "7",
            name: "Pinakbet",
            description: "Local vegetables and pork simmered with fish saucce",
            price: "240.00",
            imgUrl: "/assets/images/Pinakbet.jpg"
          }, {
            menuid: "8",
            name: "Chopsuey",
            description: "Stir fried vegetables drizzled with sesame oil",
            price: "240.00",
            imgUrl: "/assets/images/chop-suey-filipino.jpg"
          }]
        }, {
          id: "4",
          title: "Rice",
          description: "",
          image: "/assets/images/rices.jpg",
          menus: [{
            menuid: "9",
            name: "Plain Rice",
            description: "",
            price: "50.00",
            imgUrl: "/assets/images/white-rice.jpg"
          }, {
            menuid: "10",
            name: "Adobo Rice",
            description: "Rice sautéed with bits of pork adobo",
            price: "100.00",
            imgUrl: "/assets/images/adobo-rice.jpg"
          }, {
            menuid: "11",
            name: "Bagoong Rice",
            description: "Stir fried with onion, garlic and shrimp paste",
            price: "100.00",
            imgUrl: "/assets/images/bagoong-rice.jpg"
          }, {
            menuid: "12",
            name: "Seafood Fried Rice",
            description: "Stir fried rice with shrimp, squid and fish",
            price: "100.00",
            imgUrl: "/assets/images/seafood-fried-rice.jpg"
          }]
        }, {
          id: "5",
          title: "Pasta and Noodles",
          description: "",
          image: "/assets/images/pasta.jpg",
          menus: [{
            menuid: "13",
            name: "Spaghetti Aglio Olio",
            description: "Sautéed in olive oil and garlic",
            price: "200.00",
            imgUrl: "/assets/images/aglio-e-olio.jpg"
          }, {
            menuid: "14",
            name: "Lomi Noodle Soup",
            description: "Thick egg noodles with chicken and vegetables cooked in chicken stock.",
            price: "250.00",
            imgUrl: "/assets/images/pancit-lomi.jpg"
          }, {
            menuid: "15",
            name: "Pancit Bihon or Canton",
            description: "",
            price: "270.00",
            imgUrl: "/assets/images/Pancit-Canton-and-Bihon-Filipino-Noodles-4.jpg"
          }]
        }, {
          id: "6",
          title: "All Day Breakfast",
          description: "Filipino Favorites Silog Selection served with plain rice or garlic rice and two eggs any style",
          image: "/assets/images/breakfast.jpg",
          menus: [{
            menuid: "16",
            name: "Lamayo",
            description: "Palawan favorite, vinegar marinated fish, fried to a crisp",
            price: "140.00",
            imgUrl: "/assets/images/lamayo.jpg"
          }, {
            menuid: "17",
            name: "Tapa",
            description: "Pork. Homemade marinade.",
            price: "260.00",
            imgUrl: "/assets/images/tapsi.jpg"
          }, {
            menuid: "18",
            name: "Tocino",
            description: "Chicken. Sweet and savory.",
            price: "230.00",
            imgUrl: "/assets/images/tosilog.jpg"
          }, {
            menuid: "19",
            name: "Longganisa",
            description: "Chicken. Local sausage.",
            price: "220.00",
            imgUrl: "/assets/images/longsilog.jpg"
          }, {
            menuid: "20",
            name: "Fried Chicken and Waffles or Pancakes",
            description: "Homemade fried chicken with mushroom gravy.",
            price: "230.00",
            imgUrl: "/assets/images/siken-wapols.jpg"
          }, {
            menuid: "21",
            name: "Corned Beef Hash, Eggs and Waffles or Pancake",
            description: "Two eggs any style with Maple syrup drizzle",
            price: "280.00",
            imgUrl: "/assets/images/beef-has-eggs.jpg"
          }]
        }, {
          id: "7",
          title: "Dessert",
          description: "",
          image: "/assets/images/dessert.jpg",
          menus: [{
            menuid: "22",
            name: "Golden Turon",
            description: "Deep-fried banana spring roll with sugar, jack fruit. Drizzled with golden caramel.",
            price: "100.00",
            imgUrl: "/assets/images/turon.jpg"
          }, {
            menuid: "23",
            name: "Mango Madness",
            description: "A delectable mix of frozen cream and ripe mangoes.",
            price: "160.00",
            imgUrl: "/assets/images/mango-madness.jpg"
          }, {
            menuid: "24",
            name: "Icebox Cake",
            description: "Chilled dessert. Whipped cream. Cream cheese. Chocolate. Biscuit.",
            price: "200.00",
            imgUrl: "/assets/images/icebox-cake.jpg"
          }, {
            menuid: "25",
            name: "Kasoykolate",
            description: "Palawan Cashews in Dark Chocolate. Bar or Nibblers. White Chocolate Mango",
            price: "200.00",
            imgUrl: "/assets/images/kasoykolate.jpg"
          }]
        }, {
          id: "8",
          title: "Drinks",
          description: "",
          image: "/assets/images/spirit _ wines.png",
          menus: [{
            menuid: "26",
            name: "Summit Bottled Water",
            description: "Water",
            price: "140.00",
            imgUrl: ""
          }, {
            menuid: "27",
            name: "Banana Juice",
            description: "Fresh Banana Juice",
            price: "170.00",
            imgUrl: ""
          }, {
            menuid: "28",
            name: "Mango Juice",
            description: "Fresh Mango Juice",
            price: "200.00",
            imgUrl: ""
          }, {
            menuid: "29",
            name: "Coke Regular",
            description: "Soda drink - Coca Cola",
            price: "110.00",
            imgUrl: ""
          }, {
            menuid: "30",
            name: "Sprite",
            description: "Soda drink - Sprite",
            price: "110.00",
            imgUrl: ""
          }, {
            menuid: "31",
            name: "Tonic Water",
            description: "Soda drink - Tonic Water",
            price: "115.00",
            imgUrl: ""
          }, {
            menuid: "32",
            name: "San Miguel Pale Pilsen",
            description: "Local Beer",
            price: "110.00",
            imgUrl: ""
          }, {
            menuid: "33",
            name: "San Mig Lights",
            description: "Local Beer",
            price: "110.00",
            imgUrl: ""
          }, {
            menuid: "34",
            name: "Red Horse Extra Strong",
            description: "Local Beer",
            price: "110.00",
            imgUrl: ""
          }, {
            menuid: "35",
            name: "Obikwa Chardonnay",
            description: "White Wine - Glass",
            price: "330.00",
            imgUrl: ""
          }, {
            menuid: "36",
            name: "Obikwa Chardonnay",
            description: "White Wine - Bottle",
            price: "1190.00",
            imgUrl: ""
          }, {
            menuid: "37",
            name: "Monkey Bay Sauvignon Blanc",
            description: "White Wine - Bottle",
            price: "2500.00",
            imgUrl: ""
          }, {
            menuid: "38",
            name: "Camas Sauvignon Blanc",
            description: "White Wine - Bottle",
            price: "1940.00",
            imgUrl: ""
          }, {
            menuid: "39",
            name: "Misterio Cabernet Sauvignon",
            description: "Red Wine - Glass",
            price: "330.00",
            imgUrl: ""
          }, {
            menuid: "40",
            name: "Misterio Cabernet Sauvignon",
            description: "Red Wine - Bottle",
            price: "1270.00",
            imgUrl: ""
          }, {
            menuid: "41",
            name: "Pepperwood Grove Merlot",
            description: "Red Wine - Bottle",
            price: "1270.00",
            imgUrl: ""
          }, {
            menuid: "42",
            name: "Deakin Estate Merlot",
            description: "Red Wine - Bottle",
            price: "1320.00",
            imgUrl: ""
          }, {
            menuid: "43",
            name: "Colombelle Merlot",
            description: "Red Wine - Bottle",
            price: "1800.00",
            imgUrl: ""
          }, {
            menuid: "40",
            name: "Torres Sangre De Toro",
            description: "Red Wine - Bottle",
            price: "2500.00",
            imgUrl: ""
          }]
        }];
      }

      _createClass(MenuService, [{
        key: "getMenuCategory",
        value: function getMenuCategory() {
          return _toConsumableArray(this.data);
        }
      }, {
        key: "getMenu",
        value: function getMenu(menuId) {
          return Object.assign({}, this.data.find(function (menu) {
            return menu.id === menuId;
          }));
        }
      }, {
        key: "getMenuList",
        value: function getMenuList(menuListId) {
          return Object.assign({}, this.data.find(function (m) {
            return m.menus.find(function (i) {
              return i.menuid === menuListId;
            });
          }));
        }
      }]);

      return MenuService;
    }();

    MenuService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MenuService);
    /***/
  }
}]);
//# sourceMappingURL=default~pages-home-home-module~pages-menu-list-detail-menu-list-detail-module~pages-menu-list-menu-l~0f12a557-es5.js.map