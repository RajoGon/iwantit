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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
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
        var headers = new http_1.Headers();
        headers.append('auth-token', loginToken);
        // console.log('getting specific with token ',loginToken);
        var options = new http_1.RequestOptions({ headers: headers });
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
        var headers = new http_1.Headers();
        headers.append('auth-token', loginToken);
        var options = new http_1.RequestOptions({ headers: headers });
        //console.log('getting product with id',postId,loginToken);
        return this._http.get('https://testwant.herokuapp.com/viewAd?postId=' + postId, options).map(function (response) { return response.json(); });
    };
    ProductService.prototype.searchByText = function (searchText) {
        var headers = new http_1.Headers();
        var options = new http_1.RequestOptions({ headers: headers });
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
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('auth-token', token);
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post('https://testwant.herokuapp.com/postAd', JSON.stringify(ad), options).map(function (response) { return response.json(); });
    };
    ProductService.prototype.updateAdOnServer = function (loginToken, productUpdate) {
        var headers = new http_1.Headers();
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
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.put('https://testwant.herokuapp.com/postAd', JSON.stringify(newad), options).map(function (response) { return response.json(); });
    };
    ProductService.prototype.getActions = function (loginToken) {
        var headers = new http_1.Headers();
        headers.append('auth-token', loginToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.get('https://testwant.herokuapp.com/actions', options).map(function (response) { return response.json(); });
    };
    ProductService.prototype.getDateConditions = function () {
        var headers = new http_1.Headers();
        headers.append('auth-token', sessionStorage.getItem("auth-token"));
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.get('https://testwant.herokuapp.com/dateconditions', options).map(function (response) { return response.json(); });
    };
    ProductService.prototype.deleteAdOnServer = function (loginToken, productUpdate) {
        var headers = new http_1.Headers();
        headers.append('auth-token', loginToken);
        //console.log('Deleting ad with token ',loginToken,'and id = ',productUpdate.postId );
        var options = new http_1.RequestOptions({ headers: headers });
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
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('auth-token', loginToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post('https://testwant.herokuapp.com/message', JSON.stringify(this.messageToSeller), options).map(function (response) { return response.json(); });
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.component.js.map