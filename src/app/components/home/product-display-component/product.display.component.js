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
var product_service_component_1 = require("../../../services/product.service.component");
var router_1 = require("@angular/router");
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
    core_1.Component({
        selector: 'product-display',
        templateUrl: './product.display.component.html',
    }),
    __metadata("design:paramtypes", [product_service_component_1.ProductService, router_1.Router, router_1.ActivatedRoute])
], ProductDisplayComponent);
exports.ProductDisplayComponent = ProductDisplayComponent;
//# sourceMappingURL=product.display.component.js.map