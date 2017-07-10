import { Component } from '@angular/core';
import { ViewController, NavParams, NavController } from 'ionic-angular';
import { PersonCenterPage } from '../../pages/person-center/person-center';
import { MsgListPage } from '../../pages/msg-list/msg-list';


/*
  Generated class for the NavMore component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'nav-more',
  templateUrl: 'nav-more.html'
})
export class NavMoreComponent {
  text: string;
  data:any;
  constructor(public viewCtrl: ViewController, public navParams: NavParams, public navCtrl: NavController) {
    console.log('Hello NavMore Component');
    this.text = 'Hello World';
    this.data = navParams.get('parentCtrl');
  }

  backIndex(){
    this.viewCtrl.dismiss();
    this.data.popToRoot();
  }

  messageList(){
    this.navCtrl.push(MsgListPage,{});
    this.viewCtrl.dismiss();
  }
}
