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
var register_service_component_1 = require("../../../services/register.service.component");
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
    core_1.Component({
        selector: 'advanced-search',
        templateUrl: './advanced.search.component.html',
    }),
    __metadata("design:paramtypes", [product_service_component_1.ProductService, register_service_component_1.RegisterService])
], AdvancedSearchComponent);
exports.AdvancedSearchComponent = AdvancedSearchComponent;
//# sourceMappingURL=advanced.search.component.js.map