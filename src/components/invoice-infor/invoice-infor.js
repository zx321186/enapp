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
  Generated class for the InvoiceInfor component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
var InvoiceInforComponent = (function () {
    function InvoiceInforComponent(viewCtrl, formBuilder) {
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.payWay = [{ name: '不需要发票', id: '1', checked: true }, { name: '需要并填写发票信息', id: '2', checked: false }];
        this.invoiceType = [{ name: '个人', id: '1', checked: true }, { name: '单位', id: '2', checked: false }];
        this.checked = false;
        this.checkedNeed = false;
        console.log('Hello InvoiceInfor Component');
        this.text = 'Hello World';
        this.addForm = formBuilder.group({
            phone: ['', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required, Validators.pattern("^(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$")])],
            name: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
            position: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
            address: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
        });
    }
    InvoiceInforComponent.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    InvoiceInforComponent.prototype.save = function () {
        var data;
        for (var i = 0; i < this.payWay.length; i++) {
            if (this.payWay[i].checked == true) {
                data = this.payWay[i];
            }
        }
        this.viewCtrl.dismiss(data);
    };
    InvoiceInforComponent.prototype.select = function (id) {
        for (var i = 0; i < this.payWay.length; i++) {
            if (id == this.payWay[i].id) {
                this.payWay[i].checked = true;
            }
            else {
                this.payWay[i].checked = false;
            }
            if (id == 2) {
                this.checkedNeed = true;
            }
            else {
                this.checkedNeed = false;
            }
        }
    };
    InvoiceInforComponent.prototype.selectType = function (item) {
        for (var i = 0; i < this.invoiceType.length; i++) {
            if (item == this.invoiceType[i]) {
                this.invoiceType[i].checked = true;
            }
            else {
                this.invoiceType[i].checked = false;
            }
        }
    };
    InvoiceInforComponent.prototype.changeCheck = function () {
        this.checked = !this.checked;
    };
    return InvoiceInforComponent;
}());
InvoiceInforComponent = __decorate([
    Component({
        selector: 'invoice-infor',
        templateUrl: 'invoice-infor.html'
    }),
    __metadata("design:paramtypes", [ViewController, FormBuilder])
], InvoiceInforComponent);
export { InvoiceInforComponent };
//# sourceMappingURL=invoice-infor.js.map