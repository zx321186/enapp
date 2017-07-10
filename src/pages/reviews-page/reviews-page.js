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
import { NavController, NavParams } from 'ionic-angular';
/*
  Generated class for the ReviewsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ReviewsPagePage = (function () {
    function ReviewsPagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.item = [{ type: '全部评价', str: '0' }, { type: '好评', str: '1' }, { type: '中评', str: '2' }, { type: '差评', str: '3' }, { type: '订单晒图', str: '4' }, { type: '追加评价', str: '5' }];
        this.reviewsType = [{ type: '全部评价', str: '0' }, { type: '好评', str: '1' }, { type: '中评', str: '2' }, { type: '差评', str: '3' }, { type: '订单晒图', str: '4' }, { type: '追加评价', str: '5' }];
        this.selectId = this.reviewsType[0].str;
    }
    ReviewsPagePage.prototype.ionViewDidLoad = function () {
        console.log(this.reviewsType.length);
    };
    //设置默认值
    ReviewsPagePage.prototype.setClasses = function (id) {
        if (id == this.selectId) {
            return {
                checked: true
            };
        }
    };
    ReviewsPagePage.prototype.selectList = function (id) {
        this.selectId = id;
    };
    //下拉加载
    ReviewsPagePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log('Begin async operation');
        console.log(this.selectId);
        setTimeout(function () {
            for (var i = 0; i < _this.reviewsType.length; i++) {
                _this.item.push(_this.reviewsType[i]);
            }
            infiniteScroll.complete();
        }, 500);
    };
    return ReviewsPagePage;
}());
ReviewsPagePage = __decorate([
    Component({
        selector: 'page-reviews-page',
        templateUrl: 'reviews-page.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], ReviewsPagePage);
export { ReviewsPagePage };
//# sourceMappingURL=reviews-page.js.map