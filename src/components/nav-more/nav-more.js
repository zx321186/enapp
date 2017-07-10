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
import { ViewController, NavParams } from 'ionic-angular';
/*
  Generated class for the NavMore component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
var NavMoreComponent = (function () {
    function NavMoreComponent(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        console.log('Hello NavMore Component');
        this.text = 'Hello World';
        this.data = navParams.get('parentCtrl');
    }
    NavMoreComponent.prototype.backIndex = function () {
        this.viewCtrl.dismiss();
        this.data.popToRoot();
    };
    return NavMoreComponent;
}());
NavMoreComponent = __decorate([
    Component({
        selector: 'nav-more',
        templateUrl: 'nav-more.html'
    }),
    __metadata("design:paramtypes", [ViewController, NavParams])
], NavMoreComponent);
export { NavMoreComponent };
//# sourceMappingURL=nav-more.js.map