"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var navigation_component_1 = require("./components/navigation-component/navigation.component");
var login_component_1 = require("./components/navigation-component/login-component/login.component");
var register_component_1 = require("./components/navigation-component/register-component/register.component");
var footer_component_1 = require("./components/footer-component/footer.component");
var home_component_1 = require("./components/home/home.component");
var category_component_1 = require("./components/home/category-component/category.component");
var advanced_search_component_1 = require("./components/home/advanced-search-component/advanced.search.component");
var product_display_component_1 = require("./components/home/product-display-component/product.display.component");
var myaccount_component_1 = require("./components/myaccount/myaccount.component");
var product_view_component_1 = require("./components/product-view/product.view.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot([
                { path: '', component: home_component_1.HomeComponent },
                { path: 'myaccount', component: myaccount_component_1.MyAccountComponent },
                { path: 'productview', component: product_view_component_1.ProductViewComponent }
            ])
        ],
        declarations: [app_component_1.AppComponent, navigation_component_1.NavigationComponent, login_component_1.LoginComponent,
            register_component_1.RegisterComponent, footer_component_1.FooterComponent, home_component_1.HomeComponent,
            category_component_1.CategoryComponent, advanced_search_component_1.AdvancedSearchComponent, product_display_component_1.ProductDisplayComponent,
            myaccount_component_1.MyAccountComponent, product_view_component_1.ProductViewComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map