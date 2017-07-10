var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
/*
  Generated class for the AddAddress component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
var AddAddressComponent = (function () {
    function AddAddressComponent(viewCtrl, formBuilder) {
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        console.log('Hello AddAddress Component');
        this.text = 'Hello World';
        //表单验证
        this.addForm = formBuilder.group({
            phone: ['', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required, Validators.pattern("^(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$")])],
            name: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
            position: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
            address: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
        });
        this.phone = this.addForm.controls['phone'];
        this.name = this.addForm.controls['name'];
        this.position = this.addForm.controls['position'];
        this.address = this.addForm.controls['address'];
    }
    AddAddressComponent.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    AddAddressComponent.prototype.saveAddress = function (data) {
        console.log(data);
        this.viewCtrl.dismiss(data);
    };
    return AddAddressComponent;
}());
AddAddressComponent = __decorate([
    Component({
        selector: 'add-address',
        templateUrl: 'add-address.html'
    }),
    __metadata("design:paramtypes", [ViewController, FormBuilder])
], AddAddressComponent);
export { AddAddressComponent };
//# sourceMappingURL=add-address.js.map