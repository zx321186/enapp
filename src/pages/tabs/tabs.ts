import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { PersonCenterPage } from '../person-center/person-center';
import { ShoppingCarPage } from '../shopping-car/shopping-car';
import { ClassifyPage } from '../classify/classify';

/*
  Generated class for the Tabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
	  tab1: any;
  	tab2: any;
  	tab3: any;
  	tab4: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.tab1 = HelloIonicPage;
    this.tab2 = ClassifyPage;
  	this.tab3 = ShoppingCarPage ;
  	this.tab4 = PersonCenterPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
