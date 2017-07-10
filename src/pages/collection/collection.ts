import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { NavMoreComponent } from '../../components/nav-more/nav-more';
import { ProductDetailPage } from '../product-detail/product-detail';
import { MsgListPage } from '../msg-list/msg-list';

/*
  Generated class for the Collection page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-collection',
  templateUrl: 'collection.html'
})
export class CollectionPage {
	arr: any = [{price:'22.00',name:'施巴儿童洗发液 150ml',shop:'融生活自营店',goodsId:1},{price:'33.00',name:'柏龙小麦白啤 5L',shop:'融生活自营店',goodsId:2},{price:'44.00',name:'智利原瓶进口芜茉保斯康ULMOBOSQUE蜂蜜ULMO1939 500g',shop:'融生活自营店',goodsId:3}];

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CollectionPage');
  }

  message(){
    this.navCtrl.push(MsgListPage);
  }

  delete(id){
  	alert(id+'已删除商品');
  }

  addCart(id){
  	alert(id+'已增加到购物车');
  }

  openDetail(id){
  	this.navCtrl.push(ProductDetailPage,{id:id});
  }

}
