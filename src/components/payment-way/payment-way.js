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
/*
  Generated class for the PaymentWay component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
var PaymentWayComponent = (function () {
    function PaymentWayComponent(viewCtrl) {
        this.viewCtrl = viewCtrl;
        this.payWay = [{ name: '在线支付', id: '1', checked: true }, { name: '货到付款', id: '2', checked: false }];
        console.log('Hello PaymentWay Component');
        this.text = 'Hello World';
    }
    PaymentWayComponent.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    PaymentWayComponent.prototype.save = function () {
        var data;
        for (var i = 0; i < this.payWay.length; i++) {
            if (this.payWay[i].checked == true) {
                data = this.payWay[i];
            }
        }
        this.viewCtrl.dismiss(data);
    };
    PaymentWayComponent.prototype.select = function (id) {
        for (var i = 0; i < this.payWay.length; i++) {
            if (id == this.payWay[i].id) {
                this.payWay[i].checked = true;
            }
            else {
                this.payWay[i].checked = false;
            }
        }
    };
    return PaymentWayComponent;
}());
PaymentWayComponent = __decorate([
    Component({
        selector: 'payment-way',
        templateUrl: 'payment-way.html'
    }),
    __metadata("design:paramtypes", [ViewController])
], PaymentWayComponent);
export { PaymentWayComponent };
//# sourceMappingURL=payment-way.js.map