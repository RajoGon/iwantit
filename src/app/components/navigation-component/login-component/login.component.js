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
var register_service_component_1 = require("../../../services/register.service.component");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(registerService, router) {
        this.registerService = registerService;
        this.router = router;
        this.showError = true;
        this.showSuccess = true;
        this.childEvent = new core_1.EventEmitter();
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
            }
        }, function (error) {
            console.log('Error');
            _this.showError = false;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: './login.component.html',
        outputs: ['childEvent']
    }),
    __metadata("design:paramtypes", [register_service_component_1.RegisterService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map