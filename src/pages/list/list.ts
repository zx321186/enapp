import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Index } from '../../providers/index';
import { ProductDetailPage } from '../product-detail/product-detail';

/*
  Generated class for the List page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  providers: [Index,],
})
export class ListPage {

	nav_list : any;
	class_id : any;
	banner_list: any;
	data: any;
	segmentsArray:any;
	productDetail:any;
	new_list: any; 
	hot_list: any;
	class_list: any;
	clicked: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public serve: Index,public toastCtrl: ToastController) {}

  ionViewDidLoad() {
  	this.class_id = this.navParams.get('items').classid;
    this.serve.indexNav().then(data => {
      this.nav_list = data;
      this.segmentsArray = this.nav_list.goods_class;
	  this.productDetail = this.segmentsArray[0].gc_id;
    });

    this.serve.listBanner(this.class_id).then(data => {
      this.banner_list = data;
    });

    this.serve.listContent(this.class_id).then(data => {
      this.data = data;
      this.new_list = this.data.new;
      this.hot_list = this.data.red;
      this.class_list = this.data.class;
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

  myHot = {
    initialSlide: 0,
    loop: false,
    slidesPerView:3,
  }

  segmentChange(ev){
  	this.productDetail = ev;
  	console.log(this.productDetail)
  	if(this.productDetail=='1069'){
  		let toast = this.toastCtrl.create({
		    message: '功能暂不开放，敬请期待!',
		    duration: 1000,
		    position: 'middle'
		  });

		  toast.present();
		return;
  	}else{
  		if(this.clicked[ev]){
  			return;
  		}else{
  			this.serve.listBanner(this.productDetail).then(data => {
		      this.banner_list = data;
		    });

		    this.serve.listContent(this.productDetail).then(data => {
		      this.data = data;
		      this.new_list = this.data.new;
		      this.hot_list = this.data.red;
		      this.class_list = this.data.class;
		    });

		    this.clicked[ev] == true;
  		}
  		
	    
  	}
  	
  }

  openDetail(url){
  	let id = this.getData(url);
  	if(id){
  		this.navCtrl.push(ProductDetailPage,{goods_id:id});
  	}
  }

  getData(url){
  	var splitIndex = arguments[0].indexOf('?')+1;
	var newString = arguments[0].substr(splitIndex);
	if(newString.indexOf('amp;')!=-1){
			newString = newString.replace(/amp;/g,'');
	}

	if(newString=="#"){
		 let toast = this.toastCtrl.create({
		    message: '商品不存在，请联系客服!',
		    duration: 1000,
		    position: 'middle'
		  });

		  toast.present();
		return;
	}else{
		var Arr = newString.split('&');
		var newObject = {};
		for(var i=0;i<Arr.length;i++){
			var newArr = Arr[i].split('=');
			newObject[newArr[0]]=newArr[1];
		}

		return newObject['goods_id'];
	}

  }

}
