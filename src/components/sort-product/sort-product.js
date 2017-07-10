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
  Generated class for the SortProduct component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
var SortProductComponent = (function () {
    function SortProductComponent(viewCtrl) {
        this.viewCtrl = viewCtrl;
        console.log('Hello SortProduct Component');
        this.text = 'Hello World';
    }
    SortProductComponent.prototype.sortList = function (str1, str2, string) {
        console.log(str1 + ',' + str2);
        this.viewCtrl.dismiss({ str1: str1, str2: str2, string: string });
    };
    return SortProductComponent;
}());
SortProductComponent = __decorate([
    Component({
        selector: 'sort-product',
        templateUrl: 'sort-product.html'
    }),
    __metadata("design:paramtypes", [ViewController])
], SortProductComponent);
export { SortProductComponent };
//# sourceMappingURL=sort-product.js.map