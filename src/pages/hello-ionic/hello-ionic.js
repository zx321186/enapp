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
import { SearchPagePage } from '../search-page/search-page';
import { ShoppingCarPage } from '../shopping-car/shopping-car';
var HelloIonicPage = (function () {
    function HelloIonicPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.list_id = [{ name: '妈妈宝贝', id: '1' }, { name: '美妆个护', id: '2' }, { name: '休闲美食', id: '3' }, { name: '进口酒类', id: '4' }, { name: '幸福厨房', id: '5' }, { name: '营养保健', id: '6' }, { name: '宠物乐园', id: '7' }];
        this.banner_list = ['1', '2', '3'];
        this.mySlideOptions = {
            initialSlide: 0,
            loop: true,
            pager: true,
        };
    }
    HelloIonicPage.prototype.openSearch = function (ev) {
        this.navCtrl.push(SearchPagePage, {
            items: {
                key: '123',
                items: [
                    { title: '111', content: '11111', boolean: true, toeChoice: '1', id: '1' },
                    { title: '222', content: '22222', boolean: true, toeChoice: '2', id: '2' },
                    { title: '333', content: '33333', boolean: true, toeChoice: '2', id: '3' },
                    { title: '444', content: '44444', boolean: false, toeChoice: '1', id: '4' },
                    { title: '555', content: '55555', boolean: true, toeChoice: '1', id: '5' },
                    { title: '666', content: '66666', boolean: true, toeChoice: '1', id: '6' },
                ]
            }
        });
    };
    HelloIonicPage.prototype.shoppingCar = function () {
        this.navCtrl.push(ShoppingCarPage, {
            user: '11',
        });
    };
    HelloIonicPage.prototype.list_index = function (id) {
        console.log(id);
    };
    return HelloIonicPage;
}());
HelloIonicPage = __decorate([
    Component({
        selector: 'page-hello-ionic',
        templateUrl: 'hello-ionic.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], HelloIonicPage);
export { HelloIonicPage };
//# sourceMappingURL=hello-ionic.js.map