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
var register_service_component_1 = require("../../services/register.service.component");
var router_1 = require("@angular/router");
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
    core_1.Component({
        selector: 'navigation',
        templateUrl: './navigation.component.html'
    }),
    __metadata("design:paramtypes", [register_service_component_1.RegisterService, router_1.Router])
], NavigationComponent);
exports.NavigationComponent = NavigationComponent;
//# sourceMappingURL=navigation.component.js.map