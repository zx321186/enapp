import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/*
  Generated class for the PaymentWay component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'payment-way',
  templateUrl: 'payment-way.html'
})
export class PaymentWayComponent {

  text: string;
  payWay: Array<any> = [{name:'在线支付',id:'1',checked:true},{name:'货到付款',id:'2',checked:false}];

  constructor(public viewCtrl: ViewController) {
    console.log('Hello PaymentWay Component');
    this.text = 'Hello World';
  }

  back(){
    this.viewCtrl.dismiss();
  }

  save(){
    let data ;
    for(let i=0; i<this.payWay.length; i++){
      if(this.payWay[i].checked==true){
        data = this.payWay[i];
      }
    }
    this.viewCtrl.dismiss(data)
  }

  select(id){
    for(let i=0; i<this.payWay.length; i++){
      if(id==this.payWay[i].id){
        this.payWay[i].checked = true;
      }else{
         this.payWay[i].checked = false;
      }
    }
  }

}
