import { Injectable, Pipe, PipeTransform } from '@angular/core';

/*
  Generated class for the ToFixedTwo pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'tofixedtwo'
})
@Injectable()
export class ToFixedTwo implements PipeTransform {
  /*
    Takes a value and makes it lowercase.
   */
  transform(value, args) {
   // make sure it's a string
    return value.toFixed(2);
  }
}
