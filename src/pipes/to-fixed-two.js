var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable, Pipe } from '@angular/core';
/*
  Generated class for the ToFixedTwo pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
var ToFixedTwo = (function () {
    function ToFixedTwo() {
    }
    /*
      Takes a value and makes it lowercase.
     */
    ToFixedTwo.prototype.transform = function (value, args) {
        // make sure it's a string
        return value.toFixed(2);
    };
    return ToFixedTwo;
}());
ToFixedTwo = __decorate([
    Pipe({
        name: 'tofixedtwo'
    }),
    Injectable()
], ToFixedTwo);
export { ToFixedTwo };
//# sourceMappingURL=to-fixed-two.js.map