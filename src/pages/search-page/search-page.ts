import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, AlertController, PopoverController } from 'ionic-angular';
import { NavMoreComponent } from '../../components/nav-more/nav-more';
import { SortProductComponent } from '../../components/sort-product/sort-product';
import { ProductDetailPage } from '../product-detail/product-detail';
import { MsgListPage } from '../msg-list/msg-list';

import { Index } from '../../providers/index';


/*
  Generated class for the SearchPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-search-page',
  templateUrl: 'search-page.html',
  providers: [Index],
})
export class SearchPagePage {

	key:any;
	items:any = [];
	can:any;
  testRadioOpen:boolean;
  testRadioResult:any;
  show:boolean;
  backIndex:any;
  sortText:string = '综合排序';
  some: any;
  page: number = 1;
  back: any = {str1:'',str2:''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController, public alertCtrl: AlertController, public popoverCtrl: PopoverController, public serve: Index,) {
  	this.key = navParams.get('items').key;
    this.show = false;
  	this.can = [
  				{title:'111',content:'11111',boolean:true,toeChoice:'1',id:'1'},
	  			{title:'222',content:'22222',boolean:true,toeChoice:'2',id:'2'},
	  			{title:'333',content:'33333',boolean:true,toeChoice:'2',id:'3'},
	  			{title:'444',content:'44444',boolean:false,toeChoice:'1',id:'4'},
	  			{title:'555',content:'55555',boolean:true,toeChoice:'1',id:'5'},
	  			{title:'666',content:'66666',boolean:true,toeChoice:'1',id:'6'},
	 			];

  }
  //初始化
  ionViewDidLoad() {
    this.serve.load(this.page,this.back).then(data => {
      this.some = data;
      for(let i = 0; i<this.some.length; i++){
        this.items.push(this.some[i])
      }
    });
  }


  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      this.page++;
      this.serve.load(this.page,this.back).then(data => {
        this.some = data;
        for(let i = 0; i<this.some.length; i++){
          this.items.push(this.some[i])
        }
      });

 		console.log(this.items);

      infiniteScroll.complete();
    }, 500);
  }

  //筛选
  filter(){
    this.menuCtrl.enable(true, 'filter');
    this.menuCtrl.enable(false, 'position');
    this.menuCtrl.open();
  }

  //排序
  sort(myEvent){
    let popover = this.popoverCtrl.create(SortProductComponent);
    popover.onDidDismiss(data => {
      if(data){
        this.sortText = data.string;
        this.page = 0;
        this.back.str1 = data.str1;
        this.back.str2 = data.str2;
        this.items = [];
        this.serve.load(this.page,this.back).then(data => {
        this.some = data;
        for(let i = 0; i<this.some.length; i++){
          this.items.push(this.some[i])
        }
      });
      }
      
    });
    popover.present({
      ev: myEvent
    });
  }

  getItems(value){
    let str = value;
    str = str.replace(/(^\s*)|(\s*$)/g, "");
    console.log(str)
  }

  itemSelected(){

  }

  showMore(myEvent){
    let popover = this.popoverCtrl.create(NavMoreComponent,{parentCtrl:this.navCtrl});
    popover.present({
      ev: myEvent
    });
  }

  backIndexS(){
    this.navCtrl.pop();
  }

  //进入详情页
  openDetail(id){
    this.navCtrl.push(ProductDetailPage,{id:id});
  }

  search(obj){
    obj.setFocus();
  }

  message(){
    this.navCtrl.push(MsgListPage);
  }

}
