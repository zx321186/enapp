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
import { ViewController, NavParams, NavController } from 'ionic-angular';
import { ShoppingCarPage } from '../../pages/shopping-car/shopping-car';
/*
  Generated class for the ChangeType component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
var ChangeTypeComponent = (function () {
    function ChangeTypeComponent(viewCtrl, navParams, navCtrl) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.proList = [{ name: '卡门妮雅', id: '1' }, { name: '梅洛', id: '2' }, { name: '西拉', id: '3' }, { name: '赤霞珠', id: '4' }];
        this.proNumber = 1;
        this.selectId = this.proList[0].id;
        this.collection = false;
        console.log('Hello ChangeType Component');
        this.text = 'Hello World';
        this.data = navParams.get('userId');
    }
    ChangeTypeComponent.prototype.ionViewDidLoad = function () {
        console.log(this.data);
    };
    ChangeTypeComponent.prototype.dismiss = function () {
        var data = { 'foo': 'bar' };
        this.viewCtrl.dismiss(data);
    };
    ChangeTypeComponent.prototype.selectList = function (id) {
        this.selectId = id;
    };
    ChangeTypeComponent.prototype.add = function (value) {
        this.proNumber++;
        if (this.proNumber > 200) {
            this.proNumber = 200;
        }
    };
    ChangeTypeComponent.prototype.reduce = function (value) {
        this.proNumber--;
        if (this.proNumber < 1) {
            this.proNumber = 1;
        }
    };
    ChangeTypeComponent.prototype.changeNumber = function (value) {
        if (value > 200) {
            value = 200;
        }
        else if (value < 1) {
            value = 1;
        }
        this.proNumber = parseInt(value);
        console.log(this.proNumber);
    };
    //设置默认值
    ChangeTypeComponent.prototype.setClasses = function (id) {
        if (id == this.selectId) {
            return {
                checked: true
            };
        }
    };
    //立即购买
    ChangeTypeComponent.prototype.bugNow = function () {
        alert(this.selectId + '购买成功！');
        var data = { 'foo': 'bar' };
        //返回参数
        this.viewCtrl.dismiss(data);
    };
    //加入购物车
    ChangeTypeComponent.prototype.addCart = function () {
        alert(this.selectId + '成功加入购物车！');
        var data = { 'foo': 'bar' };
        //返回参数
        this.viewCtrl.dismiss(data);
    };
    //加入收藏
    ChangeTypeComponent.prototype.collect = function () {
        this.collection = !this.collection;
    };
    //进入购物车
    ChangeTypeComponent.prototype.shoppingCar = function () {
        this.navCtrl.push(ShoppingCarPage);
    };
    return ChangeTypeComponent;
}());
ChangeTypeComponent = __decorate([
    Component({
        selector: 'change-type',
        templateUrl: 'change-type.html'
    }),
    __metadata("design:paramtypes", [ViewController, NavParams, NavController])
], ChangeTypeComponent);
export { ChangeTypeComponent };
//# sourceMappingURL=change-type.js.map