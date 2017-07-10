import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
/*
  Generated class for the SortProduct component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'sort-product',
  templateUrl: 'sort-product.html'
})
export class SortProductComponent {

  text: string;

  constructor(public viewCtrl:ViewController) {
    console.log('Hello SortProduct Component');
    this.text = 'Hello World';
  }

  sortList(str1,str2,string){
    console.log(str1+','+str2);
    this.viewCtrl.dismiss({str1:str1,str2:str2,string:string});
  }

}
