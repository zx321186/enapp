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
import { NavController, NavParams, PopoverController, ModalController, MenuController } from 'ionic-angular';
import { NavMoreComponent } from '../../components/nav-more/nav-more';
import { ChangeTypeComponent } from '../../components/change-type/change-type';
import { ReviewsPagePage } from '../reviews-page/reviews-page';
import { ShoppingCarPage } from '../shopping-car/shopping-car';
/*
  Generated class for the ProductDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ProductDetailPage = ProductDetailPage_1 = (function () {
    function ProductDetailPage(navCtrl, navParams, popoverCtrl, modalCtrl, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.menuCtrl = menuCtrl;
        this.segmentsArray = ['product', 'detail', 'judge'];
        this.productDetail = this.segmentsArray[0];
        this.collection = false;
        this.productName = '净含量500ml';
        this.cityArray = ['广西柳州', '广东广州', '湖南长沙'];
        this.pushPro = [{ name: '智利原瓶进口芜茉保斯康ULMOBOSQUE蜂蜜 ULMO1946 500g', price: '110', id: '1' },
            { name: '智利原瓶进口芜茉保斯康ULMOBOSQUE蜂蜜 ULMO1946 500g', price: '120', id: '2' },
            { name: '智利原瓶进口芜茉保斯康ULMOBOSQUE蜂蜜 ULMO1946 500g', price: '130', id: '3' },
            { name: '智利原瓶进口芜茉保斯康ULMOBOSQUE蜂蜜 ULMO1946 500g', price: '140', id: '4' },
            { name: '智利原瓶进口芜茉保斯康ULMOBOSQUE蜂蜜 ULMO1946 500g', price: '150', id: '5' },
            { name: '智利原瓶进口芜茉保斯康ULMOBOSQUE蜂蜜 ULMO1946 500g', price: '160', id: '6' },
            { name: '智利原瓶进口芜茉保斯康ULMOBOSQUE蜂蜜 ULMO1946 500g', price: '170', id: '7' },
            { name: '智利原瓶进口芜茉保斯康ULMOBOSQUE蜂蜜 ULMO1946 500g', price: '180', id: '8' },
        ];
        this.city = '全国';
        this.mySlideOptions = {
            initialSlide: 0,
            loop: true,
            pager: true,
        };
    }
    ProductDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductDetailPage');
        console.log('我的id是:' + this.navParams.get('id'));
    };
    ProductDetailPage.prototype.showMore = function (myEvent) {
        var popover = this.popoverCtrl.create(NavMoreComponent, { parentCtrl: this.navCtrl });
        popover.present({
            ev: myEvent
        });
    };
    ProductDetailPage.prototype.segmentChange = function (ev) {
        console.log(ev);
    };
    ProductDetailPage.prototype.changeType = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create(ChangeTypeComponent, { userId: 8675309 });
        profileModal.onDidDismiss(function (data) {
            _this.productName = data.foo;
            console.log(_this.productName);
        });
        profileModal.present();
    };
    //选择收货地址
    ProductDetailPage.prototype.itemSelected = function (item) {
        this.city = item;
        this.menuCtrl.close();
        console.log(this.city);
    };
    //加入收藏
    ProductDetailPage.prototype.collect = function () {
        this.collection = !this.collection;
    };
    //查看评价
    ProductDetailPage.prototype.reviews = function () {
        this.navCtrl.push(ReviewsPagePage);
    };
    //地区选择
    ProductDetailPage.prototype.changePosition = function () {
        var menuArray = this.menuCtrl.getMenus();
        for (var i = 0; i < menuArray.length; i++) {
            if (i == menuArray.length - 1) {
                menuArray[i].enable(true);
            }
            else {
                menuArray[i].enable(false);
            }
        }
        this.menuCtrl.open();
    };
    //查看推荐商品
    ProductDetailPage.prototype.pushDetail = function (id) {
        this.navCtrl.push(ProductDetailPage_1, { id: id });
    };
    //购物车
    ProductDetailPage.prototype.shoppingCar = function () {
        this.navCtrl.push(ShoppingCarPage);
    };
    return ProductDetailPage;
}());
ProductDetailPage = ProductDetailPage_1 = __decorate([
    Component({
        selector: 'page-product-detail',
        templateUrl: 'product-detail.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, PopoverController, ModalController, MenuController])
], ProductDetailPage);
export { ProductDetailPage };
var ProductDetailPage_1;
//# sourceMappingURL=product-detail.js.map