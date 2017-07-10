import { Component } from '@angular/core';
import { ViewController, ModalController} from 'ionic-angular';
import { AddAddressComponent } from '../add-address/add-address';

/*
  Generated class for the AddressList component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'address-list',
  templateUrl: 'address-list.html'
})
export class AddressListComponent {

  text: string;
  message: any;
  addressArray: Array<any> = [{name:'小明',phone:'13111111111',position:'广东广州',address:'棠东'},{name:'中明',phone:'13111111112',position:'广东广州',address:'棠东'},{name:'大明',phone:'13111111113',position:'广东广州',address:'棠东'}];

  constructor(public viewCtrl: ViewController, public modalCtrl: ModalController) {
    console.log('Hello AddressList Component');
    this.text = 'Hello World';
  }

  back(){
    this.viewCtrl.dismiss();
  }

  makeSure(item){
    let data ;
    for(let i=0; i<this.addressArray.length; i++){
      if(this.addressArray[i]==item){
        data = this.addressArray[i];
      }
    }
    console.log(data)
    this.viewCtrl.dismiss(data);
  }

  addAddress(){
    let profileModal = this.modalCtrl.create(AddAddressComponent, { userId: 8675309 });
    profileModal.onDidDismiss(data => {
      if(data){
        this.addressArray.push(data);
      }
    });
    profileModal.present();
  }

  edit(item){
    let profileModal = this.modalCtrl.create(AddAddressComponent,{message:item});
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
