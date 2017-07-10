import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController, ModalController, MenuController } from 'ionic-angular';
import { NavMoreComponent } from '../../components/nav-more/nav-more';
import { ChangeTypeComponent } from '../../components/change-type/change-type';
import { ReviewsPagePage } from '../reviews-page/reviews-page';
import { ShoppingCarPage } from '../shopping-car/shopping-car';
import { Index } from '../../providers/index';

/*
  Generated class for the ProductDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
  providers: [Index,],
})
export class ProductDetailPage {
  goods_id : any ;
  items: any ;
  imgShowArr : any ;
	segmentsArray = ['product','detail','judge'];
	productDetail:string = this.segmentsArray[0];
  collection: boolean = false;
  productName:string = '净含量500ml';
  cityArray:Array<string> = ['广西柳州','广东广州','湖南长沙'];
  city:string = '全国';
  imgArr :any ;
  clicked : boolean = true;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public modalCtrl: ModalController, public menuCtrl: MenuController, public serve: Index,) {
  	this.goods_id = this.navParams.get('goods_id');
  }

  ionViewDidLoad() {
    this.serve.productDetail(this.goods_id).then(data => {
      this.items = data;
      this.imgShowArr = this.items.datas.goods_image.split(',');
    });
  }

  mySlideOptions = {
    initialSlide: 0,
    loop: false,
    pager:true,
  }
  
  showMore(myEvent){
    let popover = this.popoverCtrl.create(NavMoreComponent,{parentCtrl:this.navCtrl});
    popover.present({
      ev: myEvent
    });
  }

  segmentChange(ev){
    if(ev.value=="detail"){
      if(this.clicked){
        this.serve.productDetailImg(this.goods_id).then(data => {
          this.imgArr = data;
          this.clicked = false;
        });
      }
    }
  }

  changeType(){
  	let profileModal = this.modalCtrl.create(ChangeTypeComponent, { goodsInfo: this.items.datas.goods_info });
    profileModal.onDidDismiss(data => {
      // this.productName = data.foo;
      // console.log(this.productName)
    });
    profileModal.present();

	}

  //选择收货地址
  itemSelected(item){
    this.city = item;
    this.menuCtrl.close();
    console.log(this.city)
  }

  //加入收藏
  collect(){
    this.collection = !this.collection;
  }

  //查看评价
  reviews(){
    this.navCtrl.push(ReviewsPagePage,{goods_id:this.goods_id});
  }

  //地区选择
  changePosition(){
    let menuArray = this.menuCtrl.getMenus();
    for(var i = 0; i<menuArray.length;i++){
      if(i==menuArray.length-1){
        menuArray[i].enable(true)
      }else{
        menuArray[i].enable(false)
      }
    }
    this.menuCtrl.open();
  }

  //查看推荐商品
  pushDetail(id){
    this.navCtrl.push(ProductDetailPage,{goods_id:id});
  }

  //购物车
  shoppingCar(){
    this.navCtrl.push(ShoppingCarPage);
  }

}
