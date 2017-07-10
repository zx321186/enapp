import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController, ToastController } from 'ionic-angular';

import { SearchPagePage } from '../search-page/search-page';
import { ShoppingCarPage } from '../shopping-car/shopping-car';
import { LoginPage } from '../login/login';
import { PersonCenterPage } from '../person-center/person-center';
import { MsgListPage } from '../msg-list/msg-list';
import { ProductDetailPage } from '../product-detail/product-detail';
import { ListPage } from '../list/list';
import { Index } from '../../providers/index';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html',
  providers: [Index,],
})
export class HelloIonicPage {

  banner_list : any;
  nav_list : any;
  list_id: any;
  new_list : any;
  hot_list : any;
  class_list : any;
  show: boolean = false;

  constructor(public navCtrl:NavController , public navParams:NavParams, public popoverCtrl: PopoverController, public serve: Index,public toastCtrl: ToastController) {

  }

  //初始化
  ionViewDidLoad() {
    this.serve.indexContent().then(data => {
      this.list_id = data;
      this.new_list = this.list_id.new;
      this.hot_list = this.list_id.red;
      this.class_list = this.list_id.class;
      console.log(this.class_list)
    });

    this.serve.indexNav().then(data => {
      this.nav_list = data;
    });

    this.serve.indexBanner().then(data => {
      this.banner_list = data;
    });
  }

  mySlideOptions = {
    initialSlide: 0,
    loop: true,
    pager:true,
    autoplay:3000,
  }

  myHeader = {
    initialSlide: 0,
    loop: false,
    slidesPerView:4.5,
    spaceBetween:10,
  }

  myNew = {
    initialSlide: 0,
    loop: false,
    slidesPerView:3,
  }

  openSearch(keys){
    console.log(keys)
  	this.navCtrl.push(SearchPagePage,{items:
                                        {key:keys}
                                     });
  }

  openDetail(id){
    this.navCtrl.push(ProductDetailPage,{goods_id:id});
  }

  search(obj){
    let val = obj.value.replace(/(^\s*)|(\s*$)/g, "");
    console.log(obj)
    if(val.length>0){
      this.show = true;
    }else{
      this.show = false;
    }
  }

  enter(val){
    let value = val.replace(/(^\s*)|(\s*$)/g, "");
    this.show = false;
    this.navCtrl.push(SearchPagePage,{items:
                                        {key:value,gc_id:'',b_id:''}
                                     });
  }

  message(){
    this.navCtrl.push(MsgListPage);
  }


  list_index(id){
    if(id=='1069'){
      let toast = this.toastCtrl.create({
        message: '功能暂不开放，敬请期待!',
        duration: 1000,
        position: 'middle'
      });

      toast.present();
    return;
    }else{
      this.navCtrl.push(ListPage,{items:
                                  {classid:id}
                                })
    }
    
  }

  //遍历对象
  getObj(item){
    for(let i in item){
      console.log(i);
      return Object.keys(item[i])
    }
  }
}
