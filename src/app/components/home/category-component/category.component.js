"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_service_component_1 = require("../../../services/product.service.component");
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
    core_1.Component({
        selector: 'category',
        templateUrl: './category.component.html',
    }),
    __metadata("design:paramtypes", [product_service_component_1.ProductService, router_1.Router])
], CategoryComponent);
exports.CategoryComponent = CategoryComponent;
//# sourceMappingURL=category.component.js.map