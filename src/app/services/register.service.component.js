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
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
        return this._http.post('https://testwant.herokuapp.com/register', this.userData, this.options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    RegisterService.prototype.login = function (loginData) {
        this.loginDetails = {
            userName: loginData.userName,
            password: loginData.password
        };
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        // headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        // headers.append('Access-Control-Allow-Credentials', 'true');
        var options = new http_1.RequestOptions({ headers: headers });
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
        var headers = new http_1.Headers();
        headers.append('auth-token', localStorage.getItem("auth-token"));
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.delete('https://testwant.herokuapp.com/logout', options)
            .map(function (response) { return response.json(); });
    };
    RegisterService.prototype.getUserInfo = function (username, loginToken) {
        console.log('Getting details', localStorage.getItem("auth-token"), ' name is ', localStorage.getItem("userId"));
        //console.log('uname is ',username, ' token is ',this.loginToken);
        var headers = new http_1.Headers();
        headers.append('auth-token', localStorage.getItem("auth-token"));
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.get('https://testwant.herokuapp.com/user?userId=' + localStorage.getItem("userId"), options).map(function (response) { return response.json(); });
    };
    return RegisterService;
}());
RegisterService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], RegisterService);
exports.RegisterService = RegisterService;
//# sourceMappingURL=register.service.component.js.map