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
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { ProductDetailPage } from '../product-detail/product-detail';
import { NavMoreComponent } from '../../components/nav-more/nav-more';
import { OrderSubmitPage } from '../order-submit/order-submit';
/*
  Generated class for the ShoppingCar page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ShoppingCarPage = (function () {
    function ShoppingCarPage(navCtrl, navParams, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.dataArr = [{ name: '我是酒', id: '1', context: '这酒不错', price: '10.1', number: '1', stock: '2', }, { name: '我是糖', id: '2', context: '这糖不错', price: '20.22', number: '3', stock: '4', }, { name: '我是茶', id: '3', context: '好茶好喝', price: '30.02', number: '5', stock: '6', }];
        this.proNumber = 1;
        this.totalPrice = 0;
        this.totalNumber = 0;
        this.allSelect = true;
    }
    ShoppingCarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShoppingCarPage');
        console.log(this.navParams.get('user'));
        //总量
        for (var i = 0; i < this.dataArr.length; i++) {
            this.totalNumber += parseInt(this.dataArr[i].number);
        }
        //总价
        for (var i = 0; i < this.dataArr.length; i++) {
            this.totalPrice += this.dataArr[i].number * this.dataArr[i].price;
        }
        this.totalPrice = this.totalPrice;
    };
    //进入详情页
    ShoppingCarPage.prototype.openDetail = function (id) {
        console.log(id);
        this.navCtrl.push(ProductDetailPage, { id: id });
    };
    //查看更多
    ShoppingCarPage.prototype.showMore = function (myEvent) {
        var popover = this.popoverCtrl.create(NavMoreComponent, { parentCtrl: this.navCtrl });
        popover.present({
            ev: myEvent
        });
    };
    //增加数量
    ShoppingCarPage.prototype.add = function (id) {
        console.log('增加' + id);
    };
    //减少数量
    ShoppingCarPage.prototype.reduce = function (id) {
        console.log('减少' + id);
    };
    //购物车结算
    ShoppingCarPage.prototype.carSubmit = function () {
        console.log('开始结算');
        this.navCtrl.push(OrderSubmitPage);
    };
    //打钩
    ShoppingCarPage.prototype.selectGoods = function (id, checked) {
        if (checked) {
            for (var i = 0; i < this.dataArr.length; i++) {
                if (this.dataArr[i].id == id) {
                    this.totalNumber += parseInt(this.dataArr[i].number);
                }
            }
        }
        else {
            for (var i = 0; i < this.dataArr.length; i++) {
                if (this.dataArr[i].id == id) {
                    this.totalNumber -= parseInt(this.dataArr[i].number);
                }
            }
        }
    };
    //全选
    ShoppingCarPage.prototype.selectAll = function (checked) {
        if (checked) {
            this.allSelect = true;
        }
        else {
            this.allSelect = false;
        }
    };
    //修改数量
    ShoppingCarPage.prototype.changeNumber = function (id, value) {
        console.log(id);
        console.log(value);
    };
    return ShoppingCarPage;
}());
ShoppingCarPage = __decorate([
    Component({
        selector: 'page-shopping-car',
        templateUrl: 'shopping-car.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, PopoverController])
], ShoppingCarPage);
export { ShoppingCarPage };
//# sourceMappingURL=shopping-car.js.map