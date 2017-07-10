import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FeedBackPage } from '../feed-back/feed-back';

/*
  Generated class for the Safe page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-safe',
  templateUrl: 'safe.html'
})
export class SafePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SafePage');
  }

  feedBack(){
  	this.navCtrl.push(FeedBackPage);
  }

}
