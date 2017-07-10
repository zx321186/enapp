import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController, ModalController } from 'ionic-angular';
import { NavMoreComponent } from '../../components/nav-more/nav-more';
import { AddressListComponent } from '../../components/address-list/address-list';
import { PaymentWayComponent } from '../../components/payment-way/payment-way';
import { InvoiceInforComponent } from '../../components/invoice-infor/invoice-infor';
import { PaymentChoiceComponent } from '../../components/payment-choice/payment-choice';


/*
  Generated class for the OrderSubmit page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-order-submit',
  templateUrl: 'order-submit.html'
})
export class OrderSubmitPage {

  message:any = {
    name:'小明',
    phone:'13111111111',
    position:'广东广州',
    address:'天河区棠东',
  }
  invoiceNeed:any = '不需要发票';
  payments:any = '在线付款';

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public modalCtrl: ModalController,) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderSubmitPage');
  }

  addressList(){
  	let profileModal = this.modalCtrl.create(AddressListComponent, { userId: 8675309 });
    profileModal.onDidDismiss(data => {
      if(data){
        this.message = data;
        console.log(this.message)
      }
    });
    profileModal.present();

  }

  payment(){
  	let profileModal = this.modalCtrl.create(PaymentWayComponent, { userId: 8675309 });
    profileModal.onDidDismiss(data => {
      if(data){
        if(data.id==1){
          this.payments = data.name;
        }else if(data.id==2){
          this.payments = data.name;
        }
      }
    });
    profileModal.present();

  }

  invoice(){
  	let profileModal = this.modalCtrl.create(InvoiceInforComponent, { userId: 8675309 });
    profileModal.onDidDismiss(data => {
      if(data){
        if(data.id==1){
          this.invoiceNeed = data.name;
        }else if(data.id==2){
          this.invoiceNeed = data.name;
        }
      }
    });
    profileModal.present();

  }

  paymentChoice(){
    let profileModal = this.modalCtrl.create(PaymentChoiceComponent, {parentCtrl:this.navCtrl});
    profileModal.onDidDismiss(data => {
      if(data){
        if(data.id==1){
          this.payments = data.name;
        }else if(data.id==2){
          this.payments = data.name;
        }
      }
    });
    profileModal.present();
  }

}
