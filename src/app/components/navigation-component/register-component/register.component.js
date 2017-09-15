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
var RegisterComponent = (function () {
    function RegisterComponent(registerService) {
        this.registerService = registerService;
        this.showError = true;
        this.showSuccess = true;
    }
    RegisterComponent.prototype.registerUser = function (username, firstname, lastname, password, email, phone) {
        var _this = this;
        this.userdata = {
            userName: username,
            firstName: firstname,
            lastName: lastname,
            password: password,
            email: email,
            phone: phone
        };
        this.registerService.sendUserData(this.userdata).subscribe(function (response) {
            _this.showSuccess = false;
            _this.showError = true;
            _this.data = response;
            console.log(_this.data);
        }, function (error) {
            _this.showError = false;
            _this.showSuccess = true;
            _this.data = error;
            console.log(error);
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'register',
        templateUrl: './register.component.html'
    }),
    __metadata("design:paramtypes", [register_service_component_1.RegisterService])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map