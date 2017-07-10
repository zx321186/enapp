import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

/*
  Generated class for the PaymentChoice component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'payment-choice',
  templateUrl: 'payment-choice.html'
})
export class PaymentChoiceComponent {

  text: string;
  arr: any = [{value:'1',name:'支付宝'},{value:'2',name:'微信'},{value:'3',name:'京东'}];
  data: any = null;
  backIndex: any = null;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    console.log('Hello PaymentChoice Component');
    this.text = 'Hello World';
    this.backIndex = navParams.get('parentCtrl');
  }

  dismiss() {
   let data = { 'foo': 'bar' };
   this.viewCtrl.dismiss(data);
  }

  payment(value){
    for(let i=0; i<this.arr.length; i++){
      if(this.arr[i].value==value){
        this.data = this.arr[i].value;
      }
    }
    console.log(this.data);
  }

  toPay(){
    console.log(this.data);
    this.viewCtrl.dismiss(this.data);
    this.backIndex.popToRoot();
  }
}
