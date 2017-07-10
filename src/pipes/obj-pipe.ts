import { Injectable, Pipe } from '@angular/core';

/*
  Generated class for the ObjPipe pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'objPipe'
})
@Injectable()
export class ObjPipe {
  /*
    Takes a value and makes it lowercase.
   */ 
  transform(value, args) {
     if (!value) {
      return value;
    } 
    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    } 
    console.log(keys)
    return keys;
  }
}
