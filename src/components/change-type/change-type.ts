import { Component } from '@angular/core';
import { ViewController, NavParams, NavController } from 'ionic-angular';
import { ShoppingCarPage } from '../../pages/shopping-car/shopping-car';

/*
  Generated class for the ChangeType component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'change-type',
  templateUrl: 'change-type.html'
})
export class ChangeTypeComponent {

  text: string;
  data: any;
  proList: any;
  selectId: any;
  proNumber: number = 1;
  collection: boolean = false;

  constructor(public viewCtrl: ViewController, public navParams: NavParams, public navCtrl: NavController) {
    console.log('Hello ChangeType Component');
    this.text = 'Hello World';
    this.data = navParams.get('goodsInfo');
    this.proList = this.transform(this.data.goods_spec);
    this.selectId = this.proList[0].key;
  }

  ionViewDidLoad(){
    console.log(this.data);
  }

  dismiss() {
   this.viewCtrl.dismiss();
  }

  selectList(id){
     console.log(id)
  }

  add(value){
    this.proNumber++;
    if(this.proNumber>200){
      this.proNumber=200;
    }
  }

  reduce(value){
     this.proNumber--;
     if(this.proNumber<1){
       this.proNumber=1;
     }
  }

  changeNumber(value){
    if(value>200){
      value=200;
    }else if(value<1){
      value=1;
    }
    this.proNumber = parseInt(value);
    console.log(this.proNumber)
  }

  //设置默认值
  setClasses(id){
    if(id==this.selectId){
      return {
        checked:true
      }
    }
  }

  //立即购买
  bugNow(){
    alert(this.selectId+'购买成功！');
    let data = { 'foo': 'bar' };
    //返回参数
    this.viewCtrl.dismiss(data);
  }

  //加入购物车
  addCart(){
    alert(this.selectId+'成功加入购物车！');
    let data = { 'foo': 'bar' };
    //返回参数
    this.viewCtrl.dismiss(data);
  }

  //加入收藏
  collect(){
    this.collection = !this.collection;
  }

  //进入购物车
  shoppingCar(){
    this.navCtrl.push(ShoppingCarPage);
  }

   transform(value) {
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
