import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Index } from '../../providers/index';

/*
  Generated class for the ReviewsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-reviews-page',
  templateUrl: 'reviews-page.html',
  providers: [Index,],
})
export class ReviewsPagePage {
  
  item:any = [{type:'全部评价',str:'0'},{type:'好评',str:'1'},{type:'中评',str:'2'},{type:'差评',str:'3'},{type:'订单晒图',str:'4'},{type:'追加评价',str:'5'}];
  reviewsType: any = [{type:'全部评价',str:'0'},{type:'好评',str:'1'},{type:'中评',str:'2'},{type:'差评',str:'3'},{type:'订单晒图',str:'4'},{type:'追加评价',str:'5'}];
  selectId: any = this.reviewsType[0].str;
  page:number = 1;
  goods_id :any ;
  reviews_list : any = [];
  data : any ;
  constructor(public navCtrl: NavController, public navParams: NavParams, public serve: Index,) {
    this.goods_id = this.navParams.get('goods_id');
  }

  ionViewDidLoad() {
    this.serve.reviews(this.goods_id,'',10).then(data => {
      this.data = data;
      this.reviews_list = this.data.datas.goods_eval_list;
    });
  }

  //设置默认值
  setClasses(id){
    if(id==this.selectId){
      return {
        checked:true
      }
    }
  }

  selectList(id){
     this.selectId = id;
     this.page = 1;
     this.serve.reviews(this.goods_id,id,10).then(data => {
      this.data = data;
      this.reviews_list = this.data.datas.goods_eval_list;
    });
  }

  //下拉加载
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    console.log(this.selectId);
    setTimeout(() => {
        this.page ++;
        this.serve.reviews(this.goods_id,this.selectId,10).then(data => {
        this.data = data;
        this.reviews_list = this.data.datas.goods_eval_list;
      });

      infiniteScroll.complete();
    }, 500);
  }

}
