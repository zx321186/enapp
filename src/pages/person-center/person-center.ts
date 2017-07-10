import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController, ActionSheetController } from 'ionic-angular';
import { NavMoreComponent } from '../../components/nav-more/nav-more';
import { CollectionPage } from '../collection/collection';
import { SafePage } from '../safe/safe';
import { AddressAdminPage } from '../address-admin/address-admin';
import { VoucherPage } from '../voucher/voucher';
import { OrderListPage } from '../order-list/order-list';
import { MsgListPage } from '../msg-list/msg-list';

/*
  Generated class for the PersonCenter page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-person-center',
  templateUrl: 'person-center.html'
})
export class PersonCenterPage {

  backIndex:boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public actionSheetCtrl: ActionSheetController) {
    this.backIndex = navParams.get('back')||true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonCenterPage');
  }

  showMore(myEvent){
    let popover = this.popoverCtrl.create(NavMoreComponent,{parentCtrl:this.navCtrl,nav:true});
    popover.present({
      ev: myEvent
    });
  }

  collectGoods(){
    this.navCtrl.push(CollectionPage);
  }

  back(){
    this.navCtrl.pop();
  }

  voucher(){
    this.navCtrl.push(VoucherPage);
  }

  addressAdmin(){
    console.log(AddressAdminPage);
    this.navCtrl.push(AddressAdminPage);
  }

  safe(){
    this.navCtrl.push(SafePage);
  }

  orderList(type){
    console.log(type)
    this.navCtrl.push(OrderListPage,{item:{
                                      data:type
    }});
  }

  message(){
    this.navCtrl.push(MsgListPage);
  }

  avatar(){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: '拍照',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: '我的相册',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: '取消',
          role: 'destructive',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
