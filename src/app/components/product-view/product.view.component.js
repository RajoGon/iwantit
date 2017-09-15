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
var product_service_component_1 = require("../../services/product.service.component");
var register_service_component_1 = require("../../services/register.service.component");
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
    core_1.Component({
        selector: 'product-view',
        templateUrl: './product.view.component.html',
    }),
    __metadata("design:paramtypes", [product_service_component_1.ProductService, register_service_component_1.RegisterService])
], ProductViewComponent);
exports.ProductViewComponent = ProductViewComponent;
//# sourceMappingURL=product.view.component.js.map