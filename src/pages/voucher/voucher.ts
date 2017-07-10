import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/*
  Generated class for the Voucher page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-voucher',
  templateUrl: 'voucher.html'
})
export class VoucherPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad VoucherPage');
  }

  getVoucher() {
    let prompt = this.alertCtrl.create({
      title: '领取优惠券',
      message: "请输入20位代金券卡密",
      inputs: [
        {
          placeholder: '请输入20位代金券卡密'
        },
      ],
      buttons: [
        {
          text: '取消',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '确定',
          handler: data => {
            alert('领取成功!');
          }
        }
      ]
    });
    prompt.present();
  }

}
