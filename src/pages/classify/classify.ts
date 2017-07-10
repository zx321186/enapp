import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SearchPagePage } from '../search-page/search-page';
import { MsgListPage } from '../msg-list/msg-list';
import { Index } from '../../providers/index';

/*
  Generated class for the Classify page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-classify',
  templateUrl: 'classify.html',
  providers:[Index],
})
export class ClassifyPage {
  list_id: any ;
  can:any;
  items:any = [];
  list_content: any;
  data:any ;
  constructor(public navCtrl: NavController, public navParams: NavParams, public serve: Index) {
  	this.items = [
				{title:'111',content:'11111',boolean:true,toeChoice:'1',id:'1'},
				{title:'222',content:'22222',boolean:true,toeChoice:'2',id:'2'},
				{title:'333',content:'33333',boolean:true,toeChoice:'2',id:'3'},
				{title:'444',content:'44444',boolean:false,toeChoice:'1',id:'4'},
				{title:'555',content:'55555',boolean:true,toeChoice:'1',id:'5'},
				{title:'666',content:'66666',boolean:true,toeChoice:'1',id:'6'},
				];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassifyPage');
    this.serve.classify().then(data => {
      this.data = data;
      this.list_id = [{id:0,gc_name:'品牌推荐'}];
      for(let i=0; i<this.data.datas.class_list.length;i++){
        this.list_id.push(this.data.datas.class_list[i]);
      }
      
      console.log(this.list_id)
    });

    this.serve.classifyIn({id:0}).then(data => {
      this.list_content = data;
    });
  }

  searchPage(id){
  	console.log(id);
  	this.navCtrl.push(SearchPagePage,{item:
  										{key:'',gc_id:'',b_id:''}
  									});
  }

  message(){
    this.navCtrl.push(MsgListPage);
  }

  classify(item){
    this.serve.classifyIn(item).then(data => {
      this.list_content = data;
    });
  }

}
