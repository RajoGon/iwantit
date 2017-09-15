webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service_component__ = __webpack_require__("../../../../../src/app/services/product.service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_register_service_component__ = __webpack_require__("../../../../../src/app/services/register.service.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'my-app',
        template: "<navigation></navigation><router-outlet></router-outlet><myfooter></myfooter>",
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_product_service_component__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__services_register_service_component__["a" /* RegisterService */]]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navigation_component_navigation_component__ = __webpack_require__("../../../../../src/app/components/navigation-component/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navigation_component_login_component_login_component__ = __webpack_require__("../../../../../src/app/components/navigation-component/login-component/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navigation_component_register_component_register_component__ = __webpack_require__("../../../../../src/app/components/navigation-component/register-component/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_footer_component_footer_component__ = __webpack_require__("../../../../../src/app/components/footer-component/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_category_component_category_component__ = __webpack_require__("../../../../../src/app/components/home/category-component/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_home_advanced_search_component_advanced_search_component__ = __webpack_require__("../../../../../src/app/components/home/advanced-search-component/advanced.search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_home_product_display_component_product_display_component__ = __webpack_require__("../../../../../src/app/components/home/product-display-component/product.display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_myaccount_myaccount_component__ = __webpack_require__("../../../../../src/app/components/myaccount/myaccount.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_product_view_product_view_component__ = __webpack_require__("../../../../../src/app/components/product-view/product.view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */] },
                { path: 'myaccount', component: __WEBPACK_IMPORTED_MODULE_14__components_myaccount_myaccount_component__["a" /* MyAccountComponent */] },
                { path: 'productview', component: __WEBPACK_IMPORTED_MODULE_15__components_product_view_product_view_component__["a" /* ProductViewComponent */] }
            ])
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_6__components_navigation_component_navigation_component__["a" /* NavigationComponent */], __WEBPACK_IMPORTED_MODULE_7__components_navigation_component_login_component_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_navigation_component_register_component_register_component__["a" /* RegisterComponent */], __WEBPACK_IMPORTED_MODULE_9__components_footer_component_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_home_category_component_category_component__["a" /* CategoryComponent */], __WEBPACK_IMPORTED_MODULE_12__components_home_advanced_search_component_advanced_search_component__["a" /* AdvancedSearchComponent */], __WEBPACK_IMPORTED_MODULE_13__components_home_product_display_component_product_display_component__["a" /* ProductDisplayComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_myaccount_myaccount_component__["a" /* MyAccountComponent */], __WEBPACK_IMPORTED_MODULE_15__components_product_view_product_view_component__["a" /* ProductViewComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer-component/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br>\r\n\t\t<div class=\"footer\">\r\n\t\t    <div  class=\"row\">\r\n                <div class=\"col-md-4\" id=\"contact\">\r\n                    Contact us :<br><hr>\r\n                    <span class=\"glyphicon glyphicon-envelope\"> Customersupport@iwantthat.com</span><br>\r\n                    <span class=\"glyphicon glyphicon-phone-alt\"> 9766110856/98872981</span><br>\r\n                    <a id=\"web\" href=\"#\"><span class=\"glyphicon glyphicon-bookmark\"> https://www.iwantthat.com</span></a>\r\n\r\n\r\n                </div>\r\n                <div class=\"col-md-4\" id=\"contact2\">\r\n           \r\n                    Connect to us Socially:<br><hr>\r\n                    <div class=\"row\">\r\n                    <div class=\"col-md-2\">\r\n                      <a id=\"\" href=\"#\"><img class=\"img-circle\" style=\"height:50px; width:50px; \" src=\"images/fb.png\" alt=\"Nature\" ></a>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                     <a id=\"\" href=\"#\"><img class=\"img-circle\" style=\"height:50px; width:50px; \" src=\"images/twit.jpg\" alt=\"Nature\" ></a>\r\n                     </div>\r\n                     <div class=\"col-md-2\">\r\n                    <a id=\"\" href=\"#\"> <img class=\"img-circle\" style=\"height:50px; width:50px; \" src=\"images/insta.jfif\" alt=\"Nature\" ></a>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                     <a id=\"\" href=\"#\"><img class=\"img-circle\" style=\"height:50px; width:50px; \" src=\"images/ln.png\" alt=\"Nature\" ></a>\r\n                     </div>\r\n                     <div class=\"col-md-2\">\r\n                     <a id=\"\" href=\"#\"><img class=\"img-circle\" style=\"height:50px; width:50px; \" src=\"images/git.png\" alt=\"Nature\" ></a>\r\n                     </div>\r\n                     <div class=\"col-md-2\">\r\n                     <a id=\"\" href=\"#\"><img class=\"img-circle\" style=\"height:50px; width:50px; \" src=\"images/gplus.png\" alt=\"Nature\" ></a>\r\n                     </div>\r\n                </div>\r\n\r\n                </div>\r\n                  <div class=\"col-md-4\">\r\n                     You will find us here:<br><hr>\r\n                     <!-- <span class=\"glyphicon glyphicon-object-align-vertical\"> Sr. No. 33/1, Opposite Chhatrapati Shivaji Sports Complex, near Octroi Naka, Balewadi, Pune, Maharashtra 411045</span><br><br> -->\r\n                     <span class=\"glyphicon glyphicon-home\"> A804, Off Wakad Hinjewadi Road, Opp Sukhwani Petrol Pump, Wakad, Pune, 411057</span>\r\n                </div>\r\n          </div>\r\n          <div class=\" row copyright\">\r\n          \t\t&copy; I want that pvt ltd.\r\n          </div>\r\n\t\t</div>"

/***/ }),

/***/ "../../../../../src/app/components/footer-component/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'myfooter',
        template: __webpack_require__("../../../../../src/app/components/footer-component/footer.component.html"),
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/advanced-search-component/advanced.search.component.html":
/***/ (function(module, exports) {

module.exports = "\t\t<div class=\"col-md-3 asearch\"  >\r\n\t\t\t<div scrollSpyElement=\"test\" id=\"aser2\">\r\n\t\t\t\t<form class=\"form-horizontal\">\r\n\t\t\t\t\t<fieldset>\r\n\r\n\t\t\t\t\t<!-- Form Name -->\r\n\t\t\t\t\t<legend>Advanced Search</legend>\r\n\r\n\t\t\t\t\t<!-- Text input-->\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t  <label class=\"col-md-4 control-label\" for=\"searchtext\">Category:</label>  \r\n\t\t\t\t\t  <div class=\"col-md-8\">\r\n\t\t\t\t\t  <input id=\"searchtext\" name=\"searchtext\" placeholder=\"Enter any text\" class=\"form-control input-md\" type=\"text\">\r\n\t\t\t\t\t    \r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<!-- Text input-->\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t  <label class=\"col-md-4 control-label\" for=\"postedby\">Posted by:</label>  \r\n\t\t\t\t\t  <div class=\"col-md-8\">\r\n\t\t\t\t\t  <input id=\"postedby\" name=\"postedby\" placeholder=\"placeholder\" class=\"form-control input-md\" type=\"text\">\r\n\t\t\t\t\t    \r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t<!-- Search input-->\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t  <label class=\"col-md-4 control-label\" for=\"fromdate\">Date Conditions:</label>\r\n\t\t\t\t\t  <div class=\"col-md-8\">\r\n\t\t\t\t\t    <select name=\"choose\" #updateCategory class=\"form-control\"  ngModel>\r\n\t\t\t\t\t\t\t\t    <option *ngFor=\"let y of dateList\">{{y.datecondition}}</option>\r\n\t\t\t\t\t\t\t\t  </select>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<!-- Search input-->\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t  <label class=\"col-md-4 control-label\" for=\"todate\">Select Date:</label>\r\n\t\t\t\t\t  <div class=\"col-md-8\">\r\n\t\t\t\t\t    <input type=\"date\" name=\"dateSelect\">\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<!-- Select Basic -->\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t  <label class=\"col-md-4 control-label\" for=\"sortby\">Sort By:</label>\r\n\t\t\t\t\t  <div class=\"col-md-8\">\r\n\t\t\t\t\t    <select id=\"sortby\" name=\"sortby\" class=\"form-control\">\r\n\t\t\t\t\t      <option value=\"1\">Price low to high</option>\r\n\t\t\t\t\t      <option value=\"2\">Price high to low</option>\r\n\t\t\t\t\t      <option value=\"3\">Latest</option>\r\n\t\t\t\t\t      <option value=\"4\">Popularity</option>\r\n\t\t\t\t\t    </select>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<!-- Text input-->\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t  <label class=\"col-md-4 control-label\" for=\"index\">Start Index:</label>  \r\n\t\t\t\t\t  <div class=\"col-md-8\">\r\n\t\t\t\t\t  <input id=\"index\" name=\"index\" placeholder=\"Enter index\" class=\"form-control input-md\" type=\"text\">\r\n\t\t\t\t\t    \r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<!-- Text input-->\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t  <label class=\"col-md-4 control-label\" for=\"records\">Search Records</label>  \r\n\t\t\t\t\t  <div class=\"col-md-8\">\r\n\t\t\t\t\t  <input id=\"records\" name=\"records\" placeholder=\"Enter record\" class=\"form-control input-md\" type=\"text\">\r\n\t\t\t\t\t  <div >  <button [disabled]=\"true\"  type=\"button\" id=\"searchButton\" class=\"btn btn-default\">Comming Soon!</button></div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</fieldset>\r\n\t\t\t\t\t</form>\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/advanced-search-component/advanced.search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvancedSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service_component__ = __webpack_require__("../../../../../src/app/services/product.service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_register_service_component__ = __webpack_require__("../../../../../src/app/services/register.service.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdvancedSearchComponent = (function () {
    function AdvancedSearchComponent(productService, registerService) {
        var _this = this;
        this.productService = productService;
        this.registerService = registerService;
        this.dateList = [];
        //get dates
        this.productService.getDateConditions().subscribe(function (response) {
            _this.dateList = response.data.dateList;
            console.log('date conditions are ', _this.dateList);
        }, function (error) {
            console.log('Error');
        });
    }
    return AdvancedSearchComponent;
}());
AdvancedSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'advanced-search',
        template: __webpack_require__("../../../../../src/app/components/home/advanced-search-component/advanced.search.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service_component__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_product_service_component__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_register_service_component__["a" /* RegisterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_register_service_component__["a" /* RegisterService */]) === "function" && _b || Object])
], AdvancedSearchComponent);

var _a, _b;
//# sourceMappingURL=advanced.search.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/category-component/category.component.html":
/***/ (function(module, exports) {

module.exports = "\t\t<div id=\"cat\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\" col-md-2 dropdown\" id=\"catdropdown\">\r\n  \t\t\t\t<button id=\"catbutton\" class=\"btn btn-primary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Categories\r\n  \t\t\t\t<span class=\"caret\"></span></button>\r\n  \t\t\t\t<ul class=\"dropdown-menu\" id=\"categorydropdown\">\r\n\t  \t\t\t\t<div class=\"row>\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t    \t\t\t\t<li><a  (click)=\"setCategory('All Products')\" href=\"#\"><span><img src=\"images/vehicle.png\" height=\"25px\"></span> All</a></li>\r\n\t\t    \t\t\t</div>\r\n\t\t  \t\t\t\t<div class=\"col-md-3\" *ngFor=\"let x of categoryList\">\r\n\t\t    \t\t\t\t<li><a  (click)=\"setCategory(x)\" href=\"#\"><span><img src=\"images/vehicle.png\" height=\"25px\"></span> {{x}}</a></li>\r\n\t\t    \t\t\t</div>\r\n\t    \t\t\t</div>\r\n  \t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-6\" id=\"payby\">\r\n\t\t\t\t\t<!-- <button  type=\"button\" class=\"btn btn-success\">Advanced Search</button> -->\r\n\t\t\t\t\t<img class=\"img-responsive\" src=\"images/payment2.png\" alt=\"Los Angeles\" width=\"300\" height=\"20\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-4 webdesigntuts-workshop\">\r\n\t\t\t\t\t<form action=\"\" method=\"\">\t\r\n\t\t\t\t\t<div>\t    \r\n\t\t\t\t\t\t<input type=\"search\" #searchProduct placeholder=\"What are you looking for?\">\t\t    \t\r\n\t\t\t\t\t\t<button (click)=\"searchAds(searchProduct.value)\">Search</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t\t<!-- Banner -->\r\n\t\t<div class=\"banner\">\r\n\t\t\t<!-- <img  src=\"images/advert.jpg\" > -->\r\n\t\t\t<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n\t\t\t\t\t\t\t\t\t\t  <!-- Indicators -->\r\n\t\t\t\t\t\t\t\t\t\t  <ol class=\"carousel-indicators\">\r\n\t\t\t\t\t\t\t\t\t\t    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n\t\t\t\t\t\t\t\t\t\t    <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n\t\t\t\t\t\t\t\t\t\t    <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n\t\t\t\t\t\t\t\t\t\t  </ol>\r\n\r\n\t\t\t\t\t\t\t\t\t\t  <!-- Wrapper for slides -->\r\n\t\t\t\t\t\t\t\t\t\t  <div class=\"carousel-inner\">\r\n\t\t\t\t\t\t\t\t\t\t    <div class=\"item active\">\r\n\t\t\t\t\t\t\t\t\t\t      <img class=\" intr\" src=\"images/advert.jpg\" alt=\"Los Angeles\" >\r\n\t\t\t\t\t\t\t\t\t\t    </div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t    <div class=\"item\">\r\n\t\t\t\t\t\t\t\t\t\t      <img class=\"img-responsive intr\" src=\"images/advert2.jpg\" alt=\"Chicago\" >\r\n\t\t\t\t\t\t\t\t\t\t    </div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t    <div class=\"item\">\r\n\t\t\t\t\t\t\t\t\t\t      <img class=\"intr\" src=\"images/advert3.jpg\" alt=\"New York\" >\r\n\t\t\t\t\t\t\t\t\t\t    </div>\r\n\t\t\t\t\t\t\t\t\t\t  </div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t  <!-- Left and right controls -->\r\n\t\t\t\t\t\t\t\t\t\t  <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\r\n\t\t\t\t\t\t\t\t\t\t    <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n\t\t\t\t\t\t\t\t\t\t    <span class=\"sr-only\">Previous</span>\r\n\t\t\t\t\t\t\t\t\t\t  </a>\r\n\t\t\t\t\t\t\t\t\t\t  <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\r\n\t\t\t\t\t\t\t\t\t\t    <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n\t\t\t\t\t\t\t\t\t\t    <span class=\"sr-only\">Next</span>\r\n\t\t\t\t\t\t\t\t\t\t  </a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- Products -->\r\n\t\t<h3>&nbsp;&nbsp;<b>{{selectedCategory}}</b> </h3><hr>"

/***/ }),

/***/ "../../../../../src/app/components/home/category-component/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service_component__ = __webpack_require__("../../../../../src/app/services/product.service.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryComponent = (function () {
    function CategoryComponent(productService, router) {
        var _this = this;
        this.productService = productService;
        this.router = router;
        this.categoryList = [];
        this.selectedCategory = 'Featured Products';
        this.searchedList = [];
        this.productService.fetchCategory().subscribe(function (response) {
            _this.categories = response.data.itemList;
            _this.generateCategories();
        }, function (error) {
            console.log('Error');
        });
    }
    CategoryComponent.prototype.generateCategories = function () {
        for (var _i = 0, _a = this.categories; _i < _a.length; _i++) {
            var x = _a[_i];
            this.categoryList.push(x.name);
        }
    };
    CategoryComponent.prototype.setCategory = function (category) {
        this.selectedCategory = category;
        this.productService.sendCategory(this.selectedCategory);
    };
    CategoryComponent.prototype.searchAds = function (searchText) {
        //this.productService.searchbyText(searchText);
        this.router.navigate(['/'], { queryParams: { search: searchText } });
        //   .subscribe(
        //   (response)=>{
        //     this.searchedList=response.data.advertiseList;
        //      this.productService.sendSearchedProducts(this.searchedList);      
        //   },
        //   (error)=>console.log('error')
        // )
    };
    return CategoryComponent;
}());
CategoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'category',
        template: __webpack_require__("../../../../../src/app/components/home/category-component/category.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service_component__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_product_service_component__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], CategoryComponent);

var _a, _b;
//# sourceMappingURL=category.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<category></category>\r\n<!--<h3>&nbsp;&nbsp;<b>Featured Products</b> </h3><hr>-->\r\n\t\t<!-- First row -->\r\n\t\t<br>\r\n<div class=\"row\" id=\"aser\">\r\n    <advanced-search></advanced-search>\r\n    <product-display></product-display>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    HomeComponent.prototype.ngOnInit = function () { };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/product-display-component/product.display.component.html":
/***/ (function(module, exports) {

module.exports = "\t\t<div class=\"col-md-9\"> <!-- All products start -->\r\n\t\t<div class=\"containter\" id=\"allproducts\">\r\n\t\t\t<div class=\"row products\">\r\n\t\t\t<a routerLink=\"/productview\" (click)=\"goToProduct(x)\" *ngFor=\"let x of productList\">\r\n\t\t\t\t<div class=\"col-md-4 hvr-float-shadow\" style=\"margin-bottom: 20px\">\r\n\t\t\t\t\t\t<img class=\"img-responsive\" src=\"images/prod1.jpg\" alt=\"Chania\" >\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"row desc\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tProduct Name\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t{{x.title| slice:0:10}}\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row desc\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tCategory\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t{{x.category}}\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row desc\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tPosted By\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t{{x.name | slice:0:15}}\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!--<div class=\"row desc\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tPosted on \r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t14/07/2017\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>-->\r\n\t\t\t\t\t\t<!--<div class=\"row desc\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tPrice \r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t1,41,000\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>-->\r\n\t\t\t\t\t\t<div class=\"desc2\">\r\n\t\t\t\t\t\t\t<div class=\"row desc\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\tDescription\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row desc\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t{{x.description| slice:0:15}} \r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</a>\r\n\t\t\t\t<!--<a href=\"productview.html\">\r\n\t\t\t\t<div class=\"col-md-4 hvr-float-shadow\">\r\n\t\t\t\t\t\t<img class=\"img-responsive\" src=\"images/prod1.jpg\" alt=\"Chania\" >\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"row desc\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tProduct Name\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tLaptop\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row desc\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tCategory\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tElectronics\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row desc\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tPosted By\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tAditya\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row desc\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tPosted on \r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t14/07/2017\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row desc\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tPrice \r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t1,41,000\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc2\">\r\n\t\t\t\t\t\t\t<div class=\"row desc\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\tDescription\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row desc\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\tAn alienware laptop which the latest nvidia 1000 series gpu and an overclocked cpu. \r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</a>\r\n\t\t\t\t<a href=\"productview.html\">\r\n\t\t\t\t<div class=\"col-md-4 hvr-float-shadow\">\r\n\t\t\t\t\t\t<img class=\"img-responsive\" src=\"images/prod1.jpg\" alt=\"Chania\" >\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"row desc\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tProduct Name\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tLaptop\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row desc\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tCategory\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tElectronics\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row desc\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tPosted By\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tAditya\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row desc\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tPosted on \r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t14/07/2017\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row desc\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\tPrice \r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t1,41,000\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"desc2\">\r\n\t\t\t\t\t\t\t<div class=\"row desc\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\tDescription\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row desc\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\tAn alienware laptop which the latest nvidia 1000 series gpu and an overclocked cpu. \r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</a>-->\r\n\r\n\t\t\t</div>\r\n\t\t<!-- </div> -->\r\n\t\t<br>\r\n\r\n\r\n\t\t</div>\r\n\t\t</div> <!-- All products end -->"

/***/ }),

/***/ "../../../../../src/app/components/home/product-display-component/product.display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service_component__ = __webpack_require__("../../../../../src/app/services/product.service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductDisplayComponent = (function () {
    function ProductDisplayComponent(productService, router, activatedRoute) {
        var _this = this;
        this.productService = productService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.productList = [];
        this.selectedCategory = null;
        this.searchText = null;
        this.productService.getAllProducts().subscribe(function (response) {
            _this.products = response.data.advertiseList;
            _this.generateCategories(null);
        }, function (error) {
            console.log('Error');
        });
    }
    ProductDisplayComponent.prototype.ngDoCheck = function () {
        this.selectedCategory = this.productService.getCategory();
        if (this.selectedCategory != null) {
            this.generateCategories(this.selectedCategory);
        }
    };
    ProductDisplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (queryParam) {
            _this.searchText = queryParam['search'];
            if (_this.searchText != null) {
                _this.productService.searchByText(_this.searchText).subscribe(function (response) {
                    _this.products = response.data.advertiseList;
                    _this.generateCategories(null);
                }, function (error) {
                    console.log('Error');
                });
                console.log("Search text", _this.searchText);
            }
        });
    };
    // subscribe to router event
    ProductDisplayComponent.prototype.generateCategories = function (categories) {
        console.log("getting", categories);
        this.productList = [];
        this.selectedCategory = categories;
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var x = _a[_i];
            if (this.selectedCategory == null || this.selectedCategory == "All Products") {
                this.productList.push(x);
            }
            else {
                console.log("specific.");
                if (x.category == this.selectedCategory) {
                    this.productList.push(x);
                }
            }
        }
        this.selectedCategory = null;
    };
    ProductDisplayComponent.prototype.goToProduct = function (productToView) {
        var productToSend;
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var x = _a[_i];
            if (x.id == productToView.id) {
                this.productService.sendProduct(x);
            }
        }
        this.router.navigate(['/productview']);
    };
    return ProductDisplayComponent;
}());
ProductDisplayComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'product-display',
        template: __webpack_require__("../../../../../src/app/components/home/product-display-component/product.display.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service_component__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_product_service_component__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], ProductDisplayComponent);

var _a, _b, _c;
//# sourceMappingURL=product.display.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/myaccount/myaccount.component.html":
/***/ (function(module, exports) {

module.exports = "\t\t<category></category>\r\n        <br>\r\n\t\t<div class=\"container\">\r\n\t\t  <div class=\"jumbotron\" id=\"myaccjumbo\">\r\n\t\t    <h1>Welcome {{userInfo.firstName}} {{userInfo.lastName}},</h1> \r\n\t\t    <p>Here you can edit your account details, view your ads, and post new ads</p> \r\n\t\t  </div>\r\n\t\t <!-- Panels -->\r\n\t\t  <div class=\"panel-group\" id=\"accordion\">\r\n\t\t  <div class=\"panel panel-default\">\r\n\t\t    <div class=\"panel-heading\">\r\n\t\t      <h4 class=\"panel-title\">\r\n\t\t        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse1\">\r\n\t\t        Profile</a>\r\n\t\t      </h4>\r\n\t\t    </div>\r\n\t\t    <div id=\"collapse1\" class=\"panel-collapse collapse in\">\r\n\t\t      \t<div class=\"userdetails\">\r\n\t\t\t\t    <div class=\"row panel-body\">\r\n\t\t\t\t        <div class=\"col-md-6\"> Name</div>\r\n\t\t\t\t        <div class=\"col-md-6\"> {{userInfo.firstName}} {{userInfo.lastName}}</div>\r\n\t\t\t\t    </div>\r\n\t\t\t\t    <div class=\"row panel-body\">\r\n\t\t\t\t        <div class=\"col-md-6\"> Username</div>\r\n\t\t\t\t        <div class=\"col-md-6\"> {{userInfo.userName}}</div>\r\n\t\t\t\t    </div>\r\n\t\t\t\t    <div class=\"row panel-body\">\r\n\t\t\t\t        <div class=\"col-md-6\"> Email Address</div>\r\n\t\t\t\t        <div class=\"col-md-6\"> {{userInfo.email}}</div>\r\n\t\t\t\t    </div>\r\n\t\t\t\t    <div class=\"row panel-body\">\r\n\t\t\t\t        <div class=\"col-md-6\"> Phone</div>\r\n\t\t\t\t        <div class=\"col-md-6\"> {{userInfo.phone}}</div>\r\n\t\t\t\t    </div>\r\n\t\t\t\t</div>\r\n\t\t    </div>\r\n\t\t  </div>\r\n\t\t  <div class=\"panel panel-default\" id=\"adhistory\">\r\n\t\t    <div class=\"panel-heading\">\r\n\t\t      <h4 class=\"panel-title\">\r\n\t\t        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse2\">\r\n\t\t        My Advertisement History</a>\r\n\t\t      </h4>\r\n\t\t    </div>\r\n\t\t    <div id=\"tfheader\">\r\n\r\n\t\t\t\t        <input type=\"text\" id=\"tfq\" class=\"tftextinput2\" name=\"q\" size=\"21\" maxlength=\"120\" placeholder=\"Search a specific ad\">\r\n\r\n\t\t\t\t<div class=\"tfclear\"></div>\r\n\t\t\t</div>\r\n\t\t    <div id=\"collapse2\" class=\"panel-collapse collapse addetails\">\r\n\t\t\t    <div class=\"row panel-body adpad\" *ngFor=\"let x of productList\"> <!-- first ad -->\r\n\t\t\t\t    <div class=\"col-md-5\">\r\n\t\t\t\t    \t\t<div class=\"row panel-body\">\r\n\t\t\t\t\t    \t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t<b>Ad id: {{x.id}} </b>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\tPosted on {{x.createdDate}}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t    \t\t</div>\r\n\t\t\t\t    \t\t<div class=\"row panel-body\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t<b>Product Name</b>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t{{x.title}}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row panel-body\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t<b>Category</b>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t{{x.category}}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row panel-body\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t<b>Ad status</b>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t{{x.status}}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row panel-body\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t<b>Description:</b>\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t{{x.description}}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row panel-body\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t<a (click)=\"updateAd(x.id,x.title,x.category,x.description,x.name)\">Edit Ad</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t    </div>\r\n\t\t\t\t    <div class=\"col-md-7\">\r\n\t\t\t\t    \t\t\t    \r\n\t\t\t\t\t\t\t\t      <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n\t\t\t\t\t\t\t\t\t\t  <!-- Indicators -->\r\n\t\t\t\t\t\t\t\t\t\t  <ol class=\"carousel-indicators\">\r\n\t\t\t\t\t\t\t\t\t\t    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n\t\t\t\t\t\t\t\t\t\t    <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n\t\t\t\t\t\t\t\t\t\t    <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n\t\t\t\t\t\t\t\t\t\t  </ol>\r\n\r\n\t\t\t\t\t\t\t\t\t\t  <!-- Wrapper for slides -->\r\n\t\t\t\t\t\t\t\t\t\t  <div class=\"carousel-inner\">\r\n\t\t\t\t\t\t\t\t\t\t    <div class=\"item active\">\r\n\t\t\t\t\t\t\t\t\t\t      <img class=\"img-responsive\" src=\"images/pimages/1_1.jpg\" alt=\"Los Angeles\" height=\"300\" width=\"400\">\r\n\t\t\t\t\t\t\t\t\t\t    </div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t    <div class=\"item\">\r\n\t\t\t\t\t\t\t\t\t\t      <img class=\"img-responsive\" src=\"images/pimages/1_2.jfif\" alt=\"Chicago\" height=\"300\" width=\"400\">\r\n\t\t\t\t\t\t\t\t\t\t    </div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t    <div class=\"item\">\r\n\t\t\t\t\t\t\t\t\t\t      <img class=\"img-responsive\" src=\"images/pimages/1_3.jfif\" alt=\"New York\" height=\"300\" width=\"400\">\r\n\t\t\t\t\t\t\t\t\t\t    </div>\r\n\t\t\t\t\t\t\t\t\t\t  </div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t  <!-- Left and right controls -->\r\n\t\t\t\t\t\t\t\t\t\t  <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\r\n\t\t\t\t\t\t\t\t\t\t    <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n\t\t\t\t\t\t\t\t\t\t    <span class=\"sr-only\">Previous</span>\r\n\t\t\t\t\t\t\t\t\t\t  </a>\r\n\t\t\t\t\t\t\t\t\t\t  <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\r\n\t\t\t\t\t\t\t\t\t\t    <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n\t\t\t\t\t\t\t\t\t\t    <span class=\"sr-only\">Next</span>\r\n\t\t\t\t\t\t\t\t\t\t  </a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t   \r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t</div><!-- product1 --> <!-- second ad -->\r\n\t\t\t\t\t<!--<div class=\"row panel-body\">\r\n\t\t\t\t    <div class=\"col-md-5\">\r\n\t\t\t\t    \t\t<div class=\"row panel-body\">\r\n\t\t\t\t\t    \t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t<b>Advertisement No.2</b>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\tPosted on 14/07/2017\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t    \t\t</div>\r\n\t\t\t\t    \t\t<div class=\"row panel-body\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t<b>Product Name</b>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\tLaptop\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row panel-body\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t<b>Category</b>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\tElectronics\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row panel-body\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t<b>Price</b>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t1,14,000\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row panel-body\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t<b>Description:</b>\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\tAn alienware laptop which the latest nvidia 1000 series gpu and an overclocked cpu. \r\n\t\t\t\t\t\t\t\tAn alienware laptop which the latest nvidia 1000 series gpu and an overclocked cpu\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row panel-body\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t<a>Update Ad</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t<a>Delete Ad</a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t    </div>\r\n\t\t\t\t    <div class=\"col-md-7\">\r\n\t\t\t\t    \t\t\t    \r\n\t\t\t\t\t\t\t\t      <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n\t\t\t\t\t\t\t\t\t\t  \r\n\t\t\t\t\t\t\t\t\t\t  <ol class=\"carousel-indicators\">\r\n\t\t\t\t\t\t\t\t\t\t    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n\t\t\t\t\t\t\t\t\t\t    <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n\t\t\t\t\t\t\t\t\t\t    <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n\t\t\t\t\t\t\t\t\t\t  </ol>\r\n\r\n\t\t\t\t\t\t\t\t\t\t  \r\n\t\t\t\t\t\t\t\t\t\t  <div class=\"carousel-inner\">\r\n\t\t\t\t\t\t\t\t\t\t    <div class=\"item active\">\r\n\t\t\t\t\t\t\t\t\t\t      <img class=\"img-responsive\" src=\"images/pimages/1_1.jpg\" alt=\"Los Angeles\" height=\"300\" width=\"400\">\r\n\t\t\t\t\t\t\t\t\t\t    </div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t    <div class=\"item\">\r\n\t\t\t\t\t\t\t\t\t\t      <img class=\"img-responsive\" src=\"images/pimages/1_2.jfif\" alt=\"Chicago\" height=\"300\" width=\"400\">\r\n\t\t\t\t\t\t\t\t\t\t    </div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t    <div class=\"item\">\r\n\t\t\t\t\t\t\t\t\t\t      <img class=\"img-responsive\" src=\"images/pimages/1_3.jfif\" alt=\"New York\" height=\"300\" width=\"400\">\r\n\t\t\t\t\t\t\t\t\t\t    </div>\r\n\t\t\t\t\t\t\t\t\t\t  </div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t\t  <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\r\n\t\t\t\t\t\t\t\t\t\t    <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n\t\t\t\t\t\t\t\t\t\t    <span class=\"sr-only\">Previous</span>\r\n\t\t\t\t\t\t\t\t\t\t  </a>\r\n\t\t\t\t\t\t\t\t\t\t  <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\r\n\t\t\t\t\t\t\t\t\t\t    <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n\t\t\t\t\t\t\t\t\t\t    <span class=\"sr-only\">Next</span>\r\n\t\t\t\t\t\t\t\t\t\t  </a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t   \r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t</div> product2 -->\r\n\t\t\t</div>\r\n\r\n\t\t  </div>\r\n\t\t  <div class=\"panel panel-default\">\r\n\t\t    <div class=\"panel-heading\">\r\n\t\t      <h4 class=\"panel-title\">\r\n\t\t        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse3\">\r\n\t\t        Advertisement Management section</a>\r\n\t\t      </h4>\r\n\t\t    </div>\r\n\t\t\t\t<!--<div>\r\n\t\t\t\t\t<h4 class=\"panel-title\" style=\"margin-left:20px\">\r\n\t\t        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse3\">\r\n\t\t        {{currentAction}}</a>\r\n\t\t      </h4>\r\n\t\t\t\t</div>-->\r\n\t\t    <div id=\"collapse3\" class=\"panel-collapse collapse in\">\r\n\t\t      <div class=\"panel-body\">\r\n\t\t\t\t\t<form class=\"form-horizontal\" #productForm=\"ngForm\" novalidate>\r\n\t\t\t\t\t  <div class=\"form-group\">\r\n\t\t\t\t\t    <label class=\"control-label col-sm-2\" for=\"email\">Product Title:</label>\r\n\t\t\t\t\t    <div class=\"col-sm-10\">\r\n\t\t\t\t\t      <input type=\"text\" name=\"title\" #productTitle #productTitleRef=\"ngModel\" class=\"form-control\" id=\"email\" required ngModel=\"{{productUpdate.title}}\">\r\n\t\t\t\t\t    </div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t<div id=\"productTitleError\" *ngIf=\"productTitleRef.errors\" [hidden]=\"productTitleRef.untouched && (productTitleRef.valid || productTitleRef.pristine)\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t\tPlease enter a product title.\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t <div class=\"form-group\">\r\n\t\t\t\t\t    <label class=\"control-label col-sm-2\" for=\"email\">Name:</label>\r\n\t\t\t\t\t    <div class=\"col-sm-10\">\r\n\t\t\t\t\t      <input type=\"text\" name=\"name\" #productNameRef=\"ngModel\"  #productName class=\"form-control\" id=\"email\" required  ngModel=\"{{productUpdate.name}}\">\r\n\t\t\t\t\t    </div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t<div id=\"productNameError\" *ngIf=\"productNameRef.errors\" [hidden]=\"productNameRef.untouched && (productNameRef.valid || productNameRef.pristine)\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t\tPlease enter your name.\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t  <!--<div class=\"form-group\">\r\n\t\t\t\t\t    <label class=\"control-label col-sm-2\" for=\"pwd\">Price:</label>\r\n\t\t\t\t\t    <div class=\"col-sm-10\"> \r\n\t\t\t\t\t      <input type=\"text\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter the price you want to sell the product at\">\r\n\t\t\t\t\t    </div>\r\n\t\t\t\t\t  </div>-->\r\n\t\t\t\t\t  <div class=\"form-group\">\r\n\t\t\t\t\t\t  <label style=\"margin-right: 30px;\" class=\"control-label col-sm-2\" for=\"comment\">Description:</label>\r\n\t\t\t\t\t\t  <textarea name=\"description\" #productDescriptionRef=\"ngModel\" #productDescription class=\"form-group col-sm-9\" rows=\"5\" id=\"comment\"  required ngModel=\"{{productUpdate.description}}\"></textarea>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div id=\"productDescriptionError\" *ngIf=\"productDescriptionRef.errors\" [hidden]=\"productDescriptionRef.untouched && (productDescriptionRef.valid || productDescriptionRef.pristine)\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t\tPlease enter a product description.\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t   <div class=\"form-inline form-group\">\r\n\t\t\t\t\t  \t<div class=\"row\">\r\n\t\t\t\t\t  \t\t\t<div class=\"col-md-2\" style=\"text-align: right; padding-right:0px\">\r\n\t\t\t\t\t\t\t\t  <label for=\"sel1\">Select Category:</label>\r\n\t\t\t\t\t\t\t\t </div>\r\n\t\t\t\t\t\t\t\t <div class=\"col-md-10\" style=\"padding-left: 25px;\">\r\n\t\t\t\t\t\t\t\t  <select name=\"category\" #productCategory class=\"form-control\" id=\"sel1\" ngModel=\"{{productUpdate.category}}\">\r\n\t\t\t\t\t\t\t\t    <option *ngFor=\"let x of categoryList\">{{x}}</option>\r\n\t\t\t\t\t\t\t\t  </select>\r\n\t\t\t\t\t\t\t\t\t<div [hidden]=\"toUpdate\">\r\n\t\t\t\t\t\t\t\t\t<select name=\"choose\" #updateCategory class=\"form-control\"  ngModel>\r\n\t\t\t\t\t\t\t\t    <option *ngFor=\"let y of actionList\">{{y.name}}</option>\r\n\t\t\t\t\t\t\t\t  </select>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  <!--<div class=\"form-group\">\r\n\t\t\t\t\t    <label class=\"control-label col-sm-2\" for=\"pwd\">Upload Photo 1:</label>\r\n\t\t\t\t\t    <div class=\"col-sm-10\"> \r\n\t\t\t\t\t      <input type=\"file\" class=\"form-control\" id=\"pwd\" placeholder=\"\">\r\n\t\t\t\t\t    </div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t  <div class=\"form-group\"> \r\n\t\t\t\t\t    <div class=\"col-sm-offset-2 col-sm-10\">\r\n\t\t\t\t\t      <button type=\"button\" class=\"btn btn-default\">Upload more images</button>\r\n\t\t\t\t\t    </div>\r\n\t\t\t\t\t  </div>-->\r\n\t\t\t\t\t<div [hidden]=\"updateSuccess\" class=\"alert alert-success\">\r\n  \t\t\t\t\t<strong>Successfully carried out action.</strong> \r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div [hidden]=\"postSuccess\" id=\"userSuccess\" class=\"alert alert-success\">\r\n  \t\t\t\t\t\t\t\t\t\t\t<strong>Ad posted successfully!</strong> \r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t  <div class=\"form-group\"> \r\n\t\t\t\t\t    <div class=\"col-sm-offset-2 col-sm-10\">\r\n\t\t\t\t\t    <div [hidden]=\"toPost\">  <button  type=\"button\" id=\"postadbutton\" [disabled]=\"!productForm.form.valid\" (click)=\"postAd(productTitle.value,productName.value,productDescription.value,productCategory.value)\" class=\"btn btn-default\">Submit</button></div>\r\n\t\t\t\t\t\t\t<div [hidden]=\"toUpdate\">\t<button  type=\"button\" id=\"postadbutton\" [disabled]=\"!productForm.form.valid\" (click)=\"update(productUpdate.postId,productTitle.value,productName.value,productDescription.value,productCategory.value,updateCategory.value)\" class=\"btn btn-default\">Update</button></div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t  </div>\r\n\t\t\t\t\t</form>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t  </div>\r\n\t\t</div>\r\n\t\t</div>"

/***/ }),

/***/ "../../../../../src/app/components/myaccount/myaccount.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service_component__ = __webpack_require__("../../../../../src/app/services/product.service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_register_service_component__ = __webpack_require__("../../../../../src/app/services/register.service.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyAccountComponent = (function () {
    function MyAccountComponent(activatedRoute, productService, registerService, router) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.registerService = registerService;
        this.router = router;
        this.updateSuccess = true;
        this.userInfo = [];
        this.categoryList = [];
        this.loginToken = null;
        this.loginToken2 = null;
        this.productList = [];
        this.postDate = null;
        this.toPost = false;
        this.toUpdate = true;
        this.actionList = [];
        this.postSuccess = true;
        this.currentAction = "Post a new ad";
        this.productUpdate = {
            postId: null,
            status: "Open",
            name: this.productName,
            title: this.productTitle,
            description: this.productDescription,
            category: this.productcategory
        };
        this.productService.fetchCategory().subscribe(function (response) {
            _this.categories = response.data.itemList;
            _this.generateCategories();
        }, function (error) {
            console.log('Error');
        });
        //get user info
        this.username = this.registerService.getUser();
        this.registerService.getUserInfo(this.username, this.loginToken).subscribe(function (response) {
            _this.userInfo = response.data.user;
            console.log('User details are', _this.userInfo);
        }, function (error) {
            console.log('Error');
        });
        //getproducts
        // this.productService.getAllProducts().subscribe(
        // (response) => {               
        //     this.products=response.data.advertiseList;            
        //     this.generateProducts(this.products);
        // },
        // (error) => {
        //   console.log('Error');
        // });
        this.productService.getUserProducts(this.loginToken = this.registerService.getToken()).subscribe(function (response) {
            console.log('Success', response.data.mypostList);
            _this.products = response.data.mypostList;
            _this.generateProducts(_this.products);
        }, function (error) {
            console.log('Error');
        });
        //get actions
        this.productService.getActions(this.loginToken).subscribe(function (response) {
            _this.actionList = response.data.actionList;
            console.log('actions are ', _this.actionList);
        }, function (error) {
            console.log('Error');
        });
    }
    ;
    MyAccountComponent.prototype.generateCategories = function () {
        for (var _i = 0, _a = this.categories; _i < _a.length; _i++) {
            var x = _a[_i];
            this.categoryList.push(x.name);
        }
    };
    MyAccountComponent.prototype.generateProducts = function (products) {
        this.productList = [];
        var username = this.registerService.getUser();
        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {
            var x = _a[_i];
            // if(x.userId == username ){
            //   x.createdDate=new Date(x.createdDate).toLocaleDateString('en-GB');
            //   this.productList.push(x);
            // }
            this.productList.push(x);
        }
        console.log('products are ', this.productList, ' of user ', username);
    };
    MyAccountComponent.prototype.ngDoCheck = function () {
        this.loginToken = this.registerService.getToken();
        //console.log('In Account',this.loginToken);   
        // this.registerService.getUserInfo(this.username,this.loginToken).subscribe(
        //     (response) => {               
        //         this.userInfo=response.data.user;            
        //         console.log('User details are', this.userInfo);
        //     },
        //     (error) => {
        //       console.log('Error');
        //     });
    };
    MyAccountComponent.prototype.postAd = function (productTitle, productName, productDescription, productCategory) {
        var _this = this;
        this.productService.postNewAd(this.loginToken, productTitle, productCategory, productDescription, productName).subscribe(function (response) { return _this.postSuccess = false; });
        window.location.reload();
    };
    //updatead
    MyAccountComponent.prototype.updateAd = function (id, title, category, description, name) {
        console.log('product id is', id);
        this.toPost = true;
        this.toUpdate = false;
        this.productUpdate = {
            postId: id,
            status: "Open",
            name: name,
            title: title,
            description: description,
            category: category
        };
        // this.productService.updateAd(this.loginToken,this.productUpdate);         
    };
    MyAccountComponent.prototype.update = function (id, productTitle, productName, productDescription, productCategory, action) {
        var _this = this;
        this.productUpdate = {
            postId: id,
            status: "Open",
            name: productName,
            title: productTitle,
            description: productDescription,
            category: productCategory
        };
        this.currentAction = "Edit your ad";
        if (action == "Update") {
            this.productService.updateAdOnServer(this.loginToken, this.productUpdate).subscribe(function (response) {
                _this.updateSuccess = false;
                _this.toPost = false;
                _this.toUpdate = true;
            }, function (error) { return console.log('could not update'); });
            window.location.reload();
        }
        else {
            this.productService.deleteAdOnServer(this.loginToken, this.productUpdate).subscribe(function (response) {
                _this.updateSuccess = false;
                _this.toPost = false;
                _this.toUpdate = true;
            }, function (error) { return console.log('could not delete'); });
            window.location.reload();
        }
    };
    return MyAccountComponent;
}());
MyAccountComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'myaccount',
        template: __webpack_require__("../../../../../src/app/components/myaccount/myaccount.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service_component__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_product_service_component__["a" /* ProductService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_register_service_component__["a" /* RegisterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_register_service_component__["a" /* RegisterService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], MyAccountComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=myaccount.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navigation-component/login-component/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"log\" class=\"modal fade\" role=\"dialog\">\r\n\t\t  <div class=\"modal-dialog\">\r\n\t\t    <!-- Modal content-->\r\n\t\t    <div class=\"form-group\" id=\"login\">\r\n\t\t\t    <form #loginForm=\"ngForm\" novalidate>\r\n\t\t\t\t\t<h1>Login Form</h1>\r\n\t\t\t\t\t<div [hidden]=\"showError\" id=\"userExists\" class=\"alert alert-danger\">\r\n  \t\t\t\t\t<strong>Invalid credentials, please try again.</strong> \r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div [hidden]=\"showSuccess\" id=\"userSuccess\" class=\"alert alert-success\">\r\n  \t\t\t\t\t<strong>Successfully logged in. Redirecting to home page...</strong> \r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"uname\">\r\n\t\t\t\t\t\t<input #username #usernameRef=\"ngModel\" name=\"username\" required class=\"form-control\" type=\"text\" placeholder=\"Username\" required=\"\" id=\"username\" ngModel/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"usernameLoginError\" *ngIf=\"usernameRef.errors\" [hidden]=\"usernameRef.untouched && (usernameRef.valid || usernameRef.pristine)\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t\tPlease a username.\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<input #password required #passwordRef=\"ngModel\" class=\"form-control\" name=\"password\" type=\"password\" placeholder=\"Password\" required=\"\" id=\"password\" ngModel/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"usernameLoginError\" *ngIf=\"passwordRef.errors\" [hidden]=\"passwordRef.untouched && (passwordRef.valid || passwordRef.pristine)\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t\tPlease a password.\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<input id=\"loginbutton\" [disabled]=\"!loginForm.form.valid\" type=\"button\" (click)=\"loginUser(username.value,password.value)\" value=\"Log in\"><br>\r\n\t\t\t\t\t\t<a data-dismiss=\"modal\" id=\"closeModal\" data-dismiss=\"modal\"></a>\r\n\t\t\t\t\t\t<a href=\"#sign\" data-target=\"#sign\" data-toggle=\"modal\" data-dismiss=\"modal\">Register</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t  </div>\r\n\t\t</div>"

/***/ }),

/***/ "../../../../../src/app/components/navigation-component/login-component/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_register_service_component__ = __webpack_require__("../../../../../src/app/services/register.service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(registerService, router) {
        this.registerService = registerService;
        this.router = router;
        this.showError = true;
        this.showSuccess = true;
        this.childEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    LoginComponent.prototype.loginUser = function (username, password) {
        var _this = this;
        this.loginDetails = {
            userName: username,
            password: password
        };
        this.registerService.login(this.loginDetails).subscribe(function (response) {
            _this.loginToken = response.data['auth-token'];
            localStorage.setItem("auth-token", _this.loginToken);
            _this.username = response.data.userId;
            localStorage.setItem("userId", _this.username);
            if (_this.loginToken == null) {
                _this.showError = false;
                _this.showSuccess = true;
            }
            else {
                _this.showSuccess = false;
                _this.showError = true;
                _this.registerService.sendToken(_this.loginToken, _this.username);
                document.getElementById('closeModal').click();
                _this.showSuccess = true;
                _this.router.navigate(['/']);
                _this.childEvent.emit('Hello nav');
                // this.router.navigate(['/myaccount']).then(
                //    () => {
                //         this.router.navigate(['']);
                //         });
            }
        }, function (error) {
            console.log('Error');
            _this.showError = false;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'login',
        template: __webpack_require__("../../../../../src/app/components/navigation-component/login-component/login.component.html"),
        outputs: ['childEvent']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_register_service_component__["a" /* RegisterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_register_service_component__["a" /* RegisterService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navigation-component/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "\t\t<nav class=\"navbar navbar-inverse\">\r\n  \t\t\t<div class=\"container-fluid\">\r\n    \t\t\t<div class=\"navbar-header\">\r\n     \t\t\t\t <a class=\"navbar-brand\" href=\"index.html\">\r\n     \t\t\t\t \t<img src=\"images/logo.jpg\" class=\"img-rounded\" alt=\"Cinque Terre\" width=\"200\" height=\"70\">\r\n     \t\t\t\t </a>\r\n    \t\t\t</div>\r\n\t\t    \t<ul class=\"nav navbar-nav\">\r\n\t\t      \t\t<li routerLinkActive=\"active\"><a href=\"/iwantit/\">Home</a></li>\r\n\t\t      \t\t<li><a>Product view</a></li>\r\n\t\t      \t\t<li><a href=\"help.html\">Help</a></li>\r\n\t\t     \t\t \r\n\t\t    \t</ul>\r\n\t\t    \t<ul class=\"nav navbar-nav navbar-right\">\t\r\n\t\t    \t\t<li><a *ngIf=\"!showLogout\" routerLink=\"/myaccount\"><span class=\"glyphicon glyphicon-open\"></span> <button type=\"button\" class=\"btn btn-primary\">Post an Ad</button></a></li>\r\n\t\t    \t\t<li><a *ngIf=\"!showLogout\" routerLink=\"/myaccount\" routerLinkActive=\"active\"> <span class=\"glyphicon glyphicon-briefcase\"></span> My Account</a></li>\r\n\r\n\t\t\t\t\t\t\t<li *ngIf=\"showLogout\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#sign\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\r\n\t\t      \t\t\t\t<li *ngIf=\"showLogout\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#log\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\t\t\t\t\t\r\n\t\t\t\t\t<li *ngIf=\"!showLogout\"><a href=\"#\" (click)=\"logoutUser()\"><span class=\"glyphicon glyphicon-log-in\"></span> Logout</a></li>\t\t\t\t\r\n\t\t\t\t</ul>\r\n  \t\t\t</div>\r\n\t\t</nav>\r\n\t\t<login (childEvent)=\"childData=$event\"></login>\r\n\t\t<register></register>"

/***/ }),

/***/ "../../../../../src/app/components/navigation-component/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_register_service_component__ = __webpack_require__("../../../../../src/app/services/register.service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = (function () {
    function NavigationComponent(registerService, router) {
        this.registerService = registerService;
        this.router = router;
        this.loginToken = "";
        this.childData = null;
        this.logoutToken = null;
        this.showLogout = false;
        console.log("Inside contruct");
        this.loginToken = localStorage.getItem("auth-token");
        console.log("login token", this.loginToken);
        if (this.loginToken === "") {
            this.showLogout = true;
            console.log("showlogout", this.showLogout, this.loginToken);
        }
        else {
            this.showLogout = false;
            console.log("showlogout", this.showLogout, this.loginToken);
        }
    }
    NavigationComponent.prototype.ngDoCheck = function () {
        this.loginToken = localStorage.getItem("auth-token");
        console.log("login token", this.loginToken);
        if (this.loginToken === "") {
            this.showLogout = true;
            console.log("showlogout", this.showLogout, this.loginToken);
        }
        else {
            this.showLogout = false;
            console.log("showlogout", this.showLogout, this.loginToken);
        }
        console.log('In Nav ', this.loginToken);
    };
    NavigationComponent.prototype.ngOnInit = function () {
        this.loginToken = localStorage.getItem("auth-token");
        console.log("login token", this.loginToken);
        if (this.loginToken === "") {
            this.showLogout = true;
            console.log("showlogout", this.showLogout, this.loginToken);
        }
        else {
            this.showLogout = false;
            console.log("showlogout", this.showLogout, this.loginToken);
        }
    };
    NavigationComponent.prototype.logoutUser = function () {
        var _this = this;
        console.log("Logging out");
        this.logoutToken = this.loginToken;
        this.loginToken = null;
        this.registerService.logoutUser(this.logoutToken).subscribe(function (response) {
            _this.loginToken = localStorage.getItem("auth-token");
            console.log("login token", _this.loginToken);
            if (_this.loginToken === "") {
                _this.showLogout = true;
                console.log("showlogout", _this.showLogout, _this.loginToken);
            }
            else {
                _this.showLogout = false;
                console.log("showlogout", _this.showLogout, _this.loginToken);
            }
            _this.registerService.sendToken("", "");
            _this.router.navigate(['']);
        }, function (error) {
        });
        this.loginToken = "";
        this.registerService.sendToken("", "");
        this.router.navigate(['']);
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'navigation',
        template: __webpack_require__("../../../../../src/app/components/navigation-component/navigation.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_register_service_component__["a" /* RegisterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_register_service_component__["a" /* RegisterService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NavigationComponent);

var _a, _b;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navigation-component/register-component/register.component.html":
/***/ (function(module, exports) {

module.exports = "\t\t<div id=\"sign\" class=\"modal fade\" role=\"dialog\"> \r\n\t\t  <div class=\"modal-dialog\">\r\n\r\n\t\t    <!-- Modal content-->\r\n\t\t    <div class=\"form-group\" id=\"sign2\">\r\n\t\t\t    <form #signupForm=\"ngForm\" novalidate>\r\n\t\t\t\t\t<h1>Signup</h1>\r\n\t\t\t\t\t<div [hidden]=\"showError\" id=\"userExists\" class=\"alert alert-danger\">\r\n  \t\t\t\t\t<strong>User Already Exists, try again!</strong> \r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div [hidden]=\"showSuccess\" id=\"userSuccess\" class=\"alert alert-success\">\r\n  \t\t\t\t\t<strong>Successfully registered, please login.</strong> \r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"uname22\">\r\n\t\t\t\t\t\t<input name=\"userName\" minlength=\"3\" #username #usernameRef=\"ngModel\" class=\"form-control\" type=\"text\" placeholder=\"Username\" required id=\"username\" ngModel />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"uname3\" *ngIf=\"usernameRef.errors && usernameRef.touched\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t<div [hidden]=\"!usernameRef.errors.required\" > Please enter a username</div>\r\n\t\t\t\t\t\t\t<div [hidden]=\"!usernameRef.errors.minlength\"> Username needs minimum 3 characters.</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div id=\"uname22\">\r\n\t\t\t\t\t\t<input name=\"firstName\" #nameModelRef=\"ngModel\" #firstname class=\"form-control\" type=\"text\" placeholder=\"First Name\" required id=\"fname\" ngModel />\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"fnameError\" *ngIf=\"nameModelRef.errors\" [hidden]=\"nameModelRef.untouched && (nameModelRef.valid || nameModelRef.pristine)\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t\tPlease enter first name\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"uname22\">\r\n\t\t\t\t\t\t<input name=\"lastName\" #lastname #LnameModelRef=\"ngModel\" class=\"form-control\" type=\"text\" placeholder=\"Last Name\" required id=\"lname\" ngModel/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"lnameError\" *ngIf=\"LnameModelRef.errors\" [hidden]=\"LnameModelRef.untouched && (LnameModelRef.valid || LnameModelRef.pristine)\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t\tPlease enter last name\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"uname22\"> \r\n\t\t\t\t\t\t<input name=\"password\" #password #passwordRef=\"ngModel\" class=\"form-control\" type=\"password\" placeholder=\"Password\" required minlength=\"5\" id=\"password\" ngModel/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!--<div id=\"passwordError\" [hidden]=\"passwordRef.untouched && (passwordRef.valid || passwordRef.pristine)\" class=\"alert alert-danger\" >\r\n\t\t\t\t\t\t\tPlease enter a password\r\n\t\t\t\t\t\t</div>-->\r\n\t\t\t\t\t<div id=\"passwordError\" *ngIf=\"passwordRef.errors && passwordRef.touched\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t<div [hidden]=\"!passwordRef.errors.required\" > Please enter a password</div>\r\n\t\t\t\t\t\t\t<div [hidden]=\"!passwordRef.errors.minlength\"> Password needs minimum 5 characters.</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"uname22\">\r\n\t\t\t\t\t\t<input name=\"email\" #email #emailRef=\"ngModel\" required class=\"form-control\" type=\"email\" placeholder=\"Email\" id=\"email\" ngModel/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"emailError\" *ngIf=\"emailRef.errors && emailRef.touched\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t<div [hidden]=\"!emailRef.errors.required\" > Please enter an amail</div>\r\n\t\t\t\t\t\t\t<div [hidden]=\"!emailRef.errors.valid\"> Email is not valid.</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"uname22\">\r\n\t\t\t\t\t\t<input name=\"phone\" #phoneRef=\"ngModel\" #phone class=\"form-control\" type=\"text\" placeholder=\"Phone number\" required id=\"phone\" ngModel/>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div id=\"phoneError\" *ngIf=\"phoneRef.errors\" [hidden]=\"phoneRef.untouched && (phoneRef.valid || phoneRef.pristine)\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t\tPlease a phone number.\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<input id=\"signinbutton\" [disabled]=\"!signupForm.form.valid\" type=\"button\" value=\"Sign up\" (click)=\"registerUser(username.value,firstname.value,lastname.value,password.value,email.value,phone.value)\"><br>\r\n\t\t\t\t\t\t<a href=\"#\" data-target=\"#log\" data-toggle=\"modal\" data-dismiss=\"modal\">Already have an account? Login</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\r\n\t\t  </div>\r\n\t\t</div>"

/***/ }),

/***/ "../../../../../src/app/components/navigation-component/register-component/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_register_service_component__ = __webpack_require__("../../../../../src/app/services/register.service.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = (function () {
    function RegisterComponent(registerService) {
        this.registerService = registerService;
        this.showError = true;
        this.showSuccess = true;
    }
    RegisterComponent.prototype.registerUser = function (username, firstname, lastname, password, email, phone) {
        var _this = this;
        this.userdata = {
            userName: username,
            firstName: firstname,
            lastName: lastname,
            password: password,
            email: email,
            phone: phone
        };
        this.registerService.sendUserData(this.userdata).subscribe(function (response) {
            _this.showSuccess = false;
            _this.showError = true;
            _this.data = response;
            console.log(_this.data);
        }, function (error) {
            _this.showError = false;
            _this.showSuccess = true;
            _this.data = error;
            console.log(error);
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'register',
        template: __webpack_require__("../../../../../src/app/components/navigation-component/register-component/register.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_register_service_component__["a" /* RegisterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_register_service_component__["a" /* RegisterService */]) === "function" && _a || Object])
], RegisterComponent);

var _a;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/product-view/product.view.component.html":
/***/ (function(module, exports) {

module.exports = "\t\t\t\t\t<h3>&nbsp;&nbsp;<b>Product Name :{{productToView.title}} </b> </h3><hr>\r\n\t\t<br>\r\n\t\t\t\t\t\t\t\t\t<div id=\"adCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n\t\t\t\t\t\t\t\t\t\t  <!-- Indicators -->\r\n\t\t\t\t\t\t\t\t\t\t  <ol class=\"carousel-indicators\">\r\n\t\t\t\t\t\t\t\t\t\t    <li data-target=\"#adCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n\t\t\t\t\t\t\t\t\t\t    <li data-target=\"#adCarousel\" data-slide-to=\"1\"></li>\r\n\t\t\t\t\t\t\t\t\t\t    <li data-target=\"#adCarousel\" data-slide-to=\"2\"></li>\r\n\t\t\t\t\t\t\t\t\t\t  </ol>\r\n\r\n\t\t\t\t\t\t\t\t\t\t  <!-- Wrapper for slides -->\r\n\t\t\t\t\t\t\t\t\t\t  <div class=\"carousel-inner\">\r\n\t\t\t\t\t\t\t\t\t\t    <div class=\"item active\">\r\n\t\t\t\t\t\t\t\t\t\t      <img class=\"img-responsive\" src=\"images/pimages/1_1.jpg\" alt=\"Los Angeles\" height=\"600\" width=\"800\">\r\n\t\t\t\t\t\t\t\t\t\t    </div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t    <div class=\"item\">\r\n\t\t\t\t\t\t\t\t\t\t      <img class=\"img-responsive\" src=\"images/pimages/1_2.jfif\" alt=\"Chicago\" height=\"600\" width=\"800\">\r\n\t\t\t\t\t\t\t\t\t\t    </div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t    <div class=\"item\">\r\n\t\t\t\t\t\t\t\t\t\t      <img class=\"img-responsive\" src=\"images/pimages/1_3.jfif\" alt=\"New York\" height=\"600\" width=\"800\">\r\n\t\t\t\t\t\t\t\t\t\t    </div>\r\n\t\t\t\t\t\t\t\t\t\t  </div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t  <!-- Left and right controls -->\r\n\t\t\t\t\t\t\t\t\t\t  <a class=\"left carousel-control\" href=\"#adCarousel\" data-slide=\"prev\">\r\n\t\t\t\t\t\t\t\t\t\t    <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n\t\t\t\t\t\t\t\t\t\t    <span class=\"sr-only\">Previous</span>\r\n\t\t\t\t\t\t\t\t\t\t  </a>\r\n\t\t\t\t\t\t\t\t\t\t  <a class=\"right carousel-control\" href=\"#adCarousel\" data-slide=\"next\">\r\n\t\t\t\t\t\t\t\t\t\t    <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n\t\t\t\t\t\t\t\t\t\t    <span class=\"sr-only\">Next</span>\r\n\t\t\t\t\t\t\t\t\t\t  </a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n            <div class=\"showadvert\">\r\n\t\t\t\t    \t\t<div class=\"row panel-body\">\r\n\t\t\t\t\t    \t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\tPosted on\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t{{productToView.createdDate}}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t    \t\t</div>\r\n\t\t\t\t    \t\t<div class=\"row panel-body\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\tProduct Name\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t{{productToView.title}}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row panel-body\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\tCategory\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t{{productToView.category}}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row panel-body\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\tPosted By\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t{{productToView.name}}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!--<div class=\"row panel-body\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\tPrice\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t1,14,000\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>-->\r\n\t\t\t\t\t\t\t<div class=\"row panel-body\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\tDescription\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t{{productToView.description}}\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!--<div class=\"row panel-body\">\r\n\t\t\t\t\t    \t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\tContact Seller\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t9766110818\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t    \t</div>-->\r\n\t\t\t\t    \t\t<!--<div class=\"row panel-body\">\r\n\t\t\t\t\t    \t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\tEmail Seller\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\tRajorshi.Gon@Xoriant.com\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t    \t\t</div>-->\r\n\t\t\t\t    \t\t<div class=\"row panel-body\">\r\n\t\t\t\t\t    \t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\tMessage Seller\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t<form class=\"form-horizontal\">\r\n\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t  <div class=\"col-md-12\">                     \r\n\t\t\t\t\t\t\t\t\t\t    <textarea #message class=\"form-control\" id=\"message\" name=\"message\"></textarea>\r\n\t\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t\t  <div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t\t    <button id=\"sendmessage\" type=\"button\" (click)=\"sendMessage(message.value)\" name=\"sendmessage\" class=\"btn btn-primary\">Send</button>\r\n\t\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div [hidden]=\"messagesent\" id=\"userSuccess\" class=\"alert alert-success\">\r\n  \t\t\t\t\t\t\t\t\t\t\t<strong>Message sent successfully...</strong> \r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t</form>\r\n\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t    \t\t</div>\r\n\t\t\t\t    </div>"

/***/ }),

/***/ "../../../../../src/app/components/product-view/product.view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service_component__ = __webpack_require__("../../../../../src/app/services/product.service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_register_service_component__ = __webpack_require__("../../../../../src/app/services/register.service.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductViewComponent = (function () {
    function ProductViewComponent(productService, registerService) {
        this.productService = productService;
        this.registerService = registerService;
        this.messagesent = true;
    }
    ProductViewComponent.prototype.ngDoCheck = function () {
        this.loginToken = this.registerService.getToken();
        this.postId = this.productService.getPostId();
        this.productService.getspecificproduct(this.loginToken, this.postId);
        this.productToView = this.productService.getProduct();
        //console.log("in product view",this.productToView ); 
        this.postDate = new Date(this.productToView.createdDate).toLocaleDateString('en-GB');
        //console.log('date',this.postDate);
        this.productToView.createdDate = this.postDate;
        console.log('product id is ', this.productToView.id);
    };
    ProductViewComponent.prototype.sendMessage = function (message) {
        var _this = this;
        this.messageToken = this.registerService.getToken();
        this.toSendMessage = message;
        this.productService.sendMessagetoSeller(this.toSendMessage, this.productToView.id, this.messageToken).subscribe(function (response) {
            _this.messagesent = false;
        }, function (error) {
            console.log('error');
        });
    };
    return ProductViewComponent;
}());
ProductViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'product-view',
        template: __webpack_require__("../../../../../src/app/components/product-view/product.view.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service_component__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_product_service_component__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_register_service_component__["a" /* RegisterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_register_service_component__["a" /* RegisterService */]) === "function" && _b || Object])
], ProductViewComponent);

var _a, _b;
//# sourceMappingURL=product.view.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/product.service.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductService = (function () {
    function ProductService(_http) {
        this._http = _http;
        this.selectedCategory = null;
        this.searchedProductList = [];
        this.searchCategory = null;
    }
    ProductService.prototype.fetchCategory = function () {
        return this._http.get('https://testwant.herokuapp.com/categories').map(function (response) { return response.json(); });
    };
    ProductService.prototype.getUserProducts = function (loginToken) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('auth-token', loginToken);
        // console.log('getting specific with token ',loginToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get('https://testwant.herokuapp.com/posts', options).map(function (response) { return response.json(); });
    };
    ProductService.prototype.sendCategory = function (category) {
        this.selectedCategory = category;
        // console.log("Category in service", this.selectedCategory);
    };
    ProductService.prototype.getCategory = function () {
        // console.log("returning category ",this.selectedCategory);
        return this.selectedCategory;
    };
    ProductService.prototype.sendProduct = function (product) {
        this.productToView = product;
    };
    ProductService.prototype.getProduct = function () {
        return this.productToView;
    };
    ProductService.prototype.getPostId = function () {
        return this.productToView.postId;
    };
    ProductService.prototype.getspecificproduct = function (loginToken, postId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('auth-token', loginToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        //console.log('getting product with id',postId,loginToken);
        return this._http.get('https://testwant.herokuapp.com/viewAd?postId=' + postId, options).map(function (response) { return response.json(); });
    };
    ProductService.prototype.searchByText = function (searchText) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log('getting product with search text', searchText);
        return this._http.get('https://testwant.herokuapp.com/posts/search/text?searchText=' + searchText, options).map(function (response) { return response.json(); });
    };
    ProductService.prototype.postNewAd = function (token, title, category, description, uname) {
        var ad = {
            "title": title,
            "name": uname,
            "category": category,
            "description": description,
        };
        //console.log(ad);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('auth-token', token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post('https://testwant.herokuapp.com/postAd', JSON.stringify(ad), options).map(function (response) { return response.json(); });
    };
    ProductService.prototype.updateAdOnServer = function (loginToken, productUpdate) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var newad = {
            "postId": productUpdate.postId,
            "status": "Open",
            "name": productUpdate.name,
            "title": productUpdate.title,
            "description": productUpdate.description,
            "category": productUpdate.category
        };
        headers.append('Content-Type', 'application/json');
        headers.append('auth-token', loginToken);
        //console.log('updating ad ',newad,'with token ',loginToken );
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.put('https://testwant.herokuapp.com/postAd', JSON.stringify(newad), options).map(function (response) { return response.json(); });
    };
    ProductService.prototype.getActions = function (loginToken) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('auth-token', loginToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get('https://testwant.herokuapp.com/actions', options).map(function (response) { return response.json(); });
    };
    ProductService.prototype.getDateConditions = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('auth-token', sessionStorage.getItem("auth-token"));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get('https://testwant.herokuapp.com/dateconditions', options).map(function (response) { return response.json(); });
    };
    ProductService.prototype.deleteAdOnServer = function (loginToken, productUpdate) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('auth-token', loginToken);
        //console.log('Deleting ad with token ',loginToken,'and id = ',productUpdate.postId );
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.delete('https://testwant.herokuapp.com/post?postId=' + productUpdate.postId, options).map(function (response) { return response.json(); });
    };
    ProductService.prototype.searchbyText = function (text) {
        this.searchCategory = text;
        // let headers = new Headers();    
        // let options = new RequestOptions({ headers: headers });
        // return this._http.get('http://192.168.3.144:9000/posts/search?category='+text,options).map((response: Response)=>response.json());
    };
    // sendSearchedProducts(searchedProducts:any){
    //     console.log(searchedProducts);
    //     this.searchedProductList=searchedProducts;
    // }
    ProductService.prototype.getAllProducts = function () {
        return this._http.get('https://testwant.herokuapp.com/posts/search').map(function (response) { return response.json(); });
    };
    ProductService.prototype.sendMessagetoSeller = function (Message, postid, loginToken) {
        console.log('Sending message ', Message, 'with token ', loginToken, 'and post id', postid);
        this.messageToSeller = {
            "message": Message,
            "postId": postid
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('auth-token', loginToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post('https://testwant.herokuapp.com/message', JSON.stringify(this.messageToSeller), options).map(function (response) { return response.json(); });
    };
    return ProductService;
}());
ProductService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ProductService);

var _a;
//# sourceMappingURL=product.service.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/register.service.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterService = (function () {
    function RegisterService(_http) {
        this._http = _http;
    }
    RegisterService.prototype.ngOnInit = function () {
        localStorage.setItem("auth-token", "");
        localStorage.setItem("userId", "");
        console.log("Register init service", localStorage.getItem("auth-token"));
    };
    RegisterService.prototype.sendUserData = function (userData) {
        this.userData = userData;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        return this._http.post('https://testwant.herokuapp.com/register', this.userData, this.options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    RegisterService.prototype.login = function (loginData) {
        this.loginDetails = {
            userName: loginData.userName,
            password: loginData.password
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        // headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        // headers.append('Access-Control-Allow-Credentials', 'true');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post('https://testwant.herokuapp.com/login', this.loginDetails, options).map(function (response) { return response.json(); });
    };
    RegisterService.prototype.sendToken = function (loginToken, userId) {
        this.loginToken = loginToken;
        this.username = userId;
        localStorage.setItem("auth-token", this.loginToken);
        localStorage.setItem("userId", this.username);
        console.log('In service', this.loginToken, this.username);
    };
    RegisterService.prototype.getToken = function () {
        console.log("get token", localStorage.getItem("auth-token"));
        return localStorage.getItem("auth-token");
        //return this.loginToken;
    };
    RegisterService.prototype.getUser = function () {
        return localStorage.getItem("userId");
        //return this.username;
    };
    RegisterService.prototype.logoutUser = function (loginToken) {
        localStorage.setItem("auth-token", "");
        localStorage.setItem("userId", "");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('auth-token', localStorage.getItem("auth-token"));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.delete('https://testwant.herokuapp.com/logout', options)
            .map(function (response) { return response.json(); });
    };
    RegisterService.prototype.getUserInfo = function (username, loginToken) {
        console.log('Getting details', localStorage.getItem("auth-token"), ' name is ', localStorage.getItem("userId"));
        //console.log('uname is ',username, ' token is ',this.loginToken);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('auth-token', localStorage.getItem("auth-token"));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get('https://testwant.herokuapp.com/user?userId=' + localStorage.getItem("userId"), options).map(function (response) { return response.json(); });
    };
    return RegisterService;
}());
RegisterService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], RegisterService);

var _a;
//# sourceMappingURL=register.service.component.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map