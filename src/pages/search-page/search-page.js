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
import { NavController, NavParams, MenuController, AlertController, PopoverController } from 'ionic-angular';
import { NavMoreComponent } from '../../components/nav-more/nav-more';
import { SortProductComponent } from '../../components/sort-product/sort-product';
import { ProductDetailPage } from '../product-detail/product-detail';
import { Index } from '../../providers/index';
/*
  Generated class for the SearchPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var SearchPagePage = (function () {
    function SearchPagePage(navCtrl, navParams, menuCtrl, alertCtrl, popoverCtrl, serve) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.alertCtrl = alertCtrl;
        this.popoverCtrl = popoverCtrl;
        this.serve = serve;
        this.sortText = '综合排序';
        this.key = navParams.get('items').key;
        this.items = navParams.get('items').items;
        this.show = false;
        console.log(this.serve.load().then(function (data) { console.log(data); }));
    }
    //初始化
    SearchPagePage.prototype.ionViewDidLoad = function () {
        console.log(this.items);
    };
    SearchPagePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        setTimeout(function () {
            for (var i = 0; i < _this.can.length; i++) {
                _this.items.push(_this.can[i]);
            }
            console.log(_this.items);
            infiniteScroll.complete();
        }, 500);
    };
    //筛选
    SearchPagePage.prototype.filter = function () {
        this.menuCtrl.enable(true, 'filter');
        this.menuCtrl.enable(false, 'position');
        this.menuCtrl.open();
    };
    //排序
    SearchPagePage.prototype.sort = function (myEvent) {
        var _this = this;
        var popover = this.popoverCtrl.create(SortProductComponent);
        popover.onDidDismiss(function (data) {
            if (data) {
                _this.sortText = data.string;
            }
        });
        popover.present({
            ev: myEvent
        });
    };
    SearchPagePage.prototype.getItems = function (value) {
        var str = value;
        str = str.replace(/(^\s*)|(\s*$)/g, "");
        console.log(str);
    };
    SearchPagePage.prototype.itemSelected = function () {
    };
    SearchPagePage.prototype.showMore = function (myEvent) {
        var popover = this.popoverCtrl.create(NavMoreComponent, { parentCtrl: this.navCtrl });
        popover.present({
            ev: myEvent
        });
    };
    SearchPagePage.prototype.backIndexS = function () {
        this.navCtrl.pop();
    };
    //进入详情页
    SearchPagePage.prototype.openDetail = function (id) {
        this.navCtrl.push(ProductDetailPage, { id: id });
    };
    SearchPagePage.prototype.search = function (obj) {
        obj.setFocus();
    };
    return SearchPagePage;
}());
SearchPagePage = __decorate([
    Component({
        selector: 'page-search-page',
        templateUrl: 'search-page.html',
        providers: [Index],
    }),
    __metadata("design:paramtypes", [NavController, NavParams, MenuController, AlertController, PopoverController, Index])
], SearchPagePage);
export { SearchPagePage };
//# sourceMappingURL=search-page.js.map