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
import { NavController, NavParams, PopoverController, ModalController } from 'ionic-angular';
import { NavMoreComponent } from '../../components/nav-more/nav-more';
import { AddressListComponent } from '../../components/address-list/address-list';
import { PaymentWayComponent } from '../../components/payment-way/payment-way';
import { InvoiceInforComponent } from '../../components/invoice-infor/invoice-infor';
/*
  Generated class for the OrderSubmit page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var OrderSubmitPage = (function () {
    function OrderSubmitPage(navCtrl, navParams, popoverCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.message = {
            name: '小明',
            phone: '13111111111',
            position: '广东广州',
            address: '天河区棠东',
        };
        this.invoiceNeed = '不需要发票';
        this.payments = '在线付款';
    }
    OrderSubmitPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderSubmitPage');
    };
    OrderSubmitPage.prototype.showMore = function (myEvent) {
        var popover = this.popoverCtrl.create(NavMoreComponent, { parentCtrl: this.navCtrl });
        popover.present({
            ev: myEvent
        });
    };
    OrderSubmitPage.prototype.addressList = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create(AddressListComponent, { userId: 8675309 });
        profileModal.onDidDismiss(function (data) {
            if (data) {
                _this.message = data;
                console.log(_this.message);
            }
        });
        profileModal.present();
    };
    OrderSubmitPage.prototype.payment = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create(PaymentWayComponent, { userId: 8675309 });
        profileModal.onDidDismiss(function (data) {
            if (data) {
                if (data.id == 1) {
                    _this.payments = data.name;
                }
                else if (data.id == 2) {
                    _this.payments = data.name;
                }
            }
        });
        profileModal.present();
    };
    OrderSubmitPage.prototype.invoice = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create(InvoiceInforComponent, { userId: 8675309 });
        profileModal.onDidDismiss(function (data) {
            if (data) {
                if (data.id == 1) {
                    _this.invoiceNeed = data.name;
                }
                else if (data.id == 2) {
                    _this.invoiceNeed = data.name;
                }
            }
        });
        profileModal.present();
    };
    return OrderSubmitPage;
}());
OrderSubmitPage = __decorate([
    Component({
        selector: 'page-order-submit',
        templateUrl: 'order-submit.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, PopoverController, ModalController])
], OrderSubmitPage);
export { OrderSubmitPage };
//# sourceMappingURL=order-submit.js.map