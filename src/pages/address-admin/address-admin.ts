import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { AddAddressComponent } from '../../components/add-address/add-address';

/*
  Generated class for the AddressAdmin page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-address-admin',
  templateUrl: 'address-admin.html'
})
export class AddressAdminPage {

  message:any = {
    name:'小明',
    phone:'13111111111',
    position:'广东广州',
    address:'天河区棠东',
  }
  addressArray: Array<any> = [{name:'小明',phone:'13111111111',position:'广东广州',address:'棠东'},{name:'中明',phone:'13111111112',position:'广东广州',address:'棠东'},{name:'大明',phone:'13111111113',position:'广东广州',address:'棠东'}];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressAdminPage');
  }

  addAddress(){
    console.log(AddAddressComponent);
  	let profileModal = this.modalCtrl.create(AddAddressComponent, { userId: 8675309 });
    profileModal.onDidDismiss(data => {
      if(data){
        this.message = data;
        console.log(this.message)
      }
    });
    profileModal.present();
  }

  makeSure(item){
  	console.log(item);
  	this.navCtrl.pop();
  }

  edit(item){
    let profileModal = this.modalCtrl.create(AddAddressComponent, {message:item});
    profileModal.onDidDismiss(data => {
      if(data){
        this.message = data;
        console.log(this.message)
      }
    });
    profileModal.present();
    event.cancelBubble = true;
  }

}
