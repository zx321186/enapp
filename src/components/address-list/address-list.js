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
import { ViewController, ModalController } from 'ionic-angular';
import { AddAddressComponent } from '../add-address/add-address';
/*
  Generated class for the AddressList component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
var AddressListComponent = (function () {
    function AddressListComponent(viewCtrl, modalCtrl) {
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.addressArray = [{ name: '小明', phone: '13111111111', position: '广东广州', address: '棠东' }, { name: '中明', phone: '13111111111', position: '广东广州', address: '棠东' }, { name: '大明', phone: '13111111111', position: '广东广州', address: '棠东' }];
        console.log('Hello AddressList Component');
        this.text = 'Hello World';
    }
    AddressListComponent.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    AddressListComponent.prototype.makeSure = function (item) {
        var data;
        for (var i = 0; i < this.addressArray.length; i++) {
            if (this.addressArray[i] == item) {
                data = this.addressArray[i];
            }
        }
        console.log(data);
        this.viewCtrl.dismiss(data);
    };
    AddressListComponent.prototype.addAddress = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create(AddAddressComponent, { userId: 8675309 });
        profileModal.onDidDismiss(function (data) {
            if (data) {
                _this.addressArray.push(data);
            }
        });
        profileModal.present();
    };
    return AddressListComponent;
}());
AddressListComponent = __decorate([
    Component({
        selector: 'address-list',
        templateUrl: 'address-list.html'
    }),
    __metadata("design:paramtypes", [ViewController, ModalController])
], AddressListComponent);
export { AddressListComponent };
//# sourceMappingURL=address-list.js.map