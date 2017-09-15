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
var MyAccountComponent = (function () {
    function MyAccountComponent(productService, registerService) {
        var _this = this;
        this.productService = productService;
        this.registerService = registerService;
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
        }
        else {
            this.productService.deleteAdOnServer(this.loginToken, this.productUpdate).subscribe(function (response) {
                _this.updateSuccess = false;
                _this.toPost = false;
                _this.toUpdate = true;
            }, function (error) { return console.log('could not delete'); });
        }
    };
    return MyAccountComponent;
}());
MyAccountComponent = __decorate([
    core_1.Component({
        selector: 'myaccount',
        templateUrl: './myaccount.component.html',
    }),
    __metadata("design:paramtypes", [product_service_component_1.ProductService, register_service_component_1.RegisterService])
], MyAccountComponent);
exports.MyAccountComponent = MyAccountComponent;
//# sourceMappingURL=myaccount.component.js.map