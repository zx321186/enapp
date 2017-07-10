import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { ProductDetailPage } from '../product-detail/product-detail';
import { NavMoreComponent } from '../../components/nav-more/nav-more';
import { OrderSubmitPage } from '../order-submit/order-submit';
import { MsgListPage} from '../msg-list/msg-list';

/*
  Generated class for the ShoppingCar page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-shopping-car',
  templateUrl: 'shopping-car.html',
})
export class ShoppingCarPage {
	dataArr: any = [{name:'我是酒',id:'1',context:'这酒不错',price:'10.1',number:'1',stock:'2',},{name:'我是糖',id:'2',context:'这糖不错',price:'20.22',number:'3',stock:'4',},{name:'我是茶',id:'3',context:'好茶好喝',price:'30.02',number:'5',stock:'6',}];
	proNumber:number = 1;
	totalPrice:any = 0;
	totalNumber:number = 0;
	allSelect: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController,) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingCarPage');
    console.log(this.navParams.get('user'));
    //总量
    for(let i = 0; i<this.dataArr.length; i++){
    	this.totalNumber += parseInt(this.dataArr[i].number);
    }

    //总价
    for(let i = 0; i<this.dataArr.length; i++){
    	this.totalPrice += this.dataArr[i].number*this.dataArr[i].price;
    }

    this.totalPrice = this.totalPrice;
  }

  //进入详情页
  openDetail(id){
  	console.log(id)
  	this.navCtrl.push(ProductDetailPage,{id:id})
  }

  //查看更多
  showMore(myEvent){
  	let popover = this.popoverCtrl.create(NavMoreComponent,{parentCtrl:this.navCtrl});
    popover.present({
      ev: myEvent
    });
  }

  //增加数量
  add(id){
  	console.log('增加'+id);
  }

  //减少数量
  reduce(id){
  	console.log('减少'+id);
  }

  //购物车结算
  carSubmit(){
  	console.log('开始结算');
    this.navCtrl.push(OrderSubmitPage);
  }

  //打钩
  selectGoods(id,checked){
  	if(checked){
	  	for(let i = 0; i<this.dataArr.length; i++){
	  		if(this.dataArr[i].id==id){
	  			this.totalNumber += parseInt(this.dataArr[i].number);
	  		}
	  	}
  	}else{
	  	for(let i = 0; i<this.dataArr.length; i++){
	  		if(this.dataArr[i].id==id){
	  			this.totalNumber -= parseInt(this.dataArr[i].number);
	  		}
	  	}	
  	}
  	
  }

  //全选
  selectAll(checked){
  	if(checked){
  		this.allSelect = true;
  	}else{
  		this.allSelect = false;
  	}
  }

  //修改数量
  changeNumber(id,value){
  	console.log(id);
  	console.log(value);
  }

  message(){
    this.navCtrl.push(MsgListPage);
  }
}
