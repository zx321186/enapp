import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MsgDetailPage } from '../msg-detail/msg-detail';

/*
  Generated class for the MsgList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-msg-list',
  templateUrl: 'msg-list.html'
})
export class MsgListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MsgListPage');
  }

  msgDetail(){
  	this.navCtrl.push(MsgDetailPage);
  }

}
