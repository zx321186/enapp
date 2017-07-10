import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

/*
  Generated class for the AddAddress component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'add-address',
  templateUrl: 'add-address.html'
})
export class AddAddressComponent {

  text: string;
  addForm: FormGroup;
  name:any;
  phone:any;
  position:any;
  address:any;
  item:any;

  constructor(public viewCtrl: ViewController, private formBuilder: FormBuilder, public navParams: NavParams) {
    console.log('Hello AddAddress Component');
    if(this.navParams.get('message')){
      console.log(1)
      this.item = navParams.get('message');
      this.name = this.item.name;
      this.phone = this.item.phone;
      this.position = this.item.position;
      this.address = this.item.address;
    }
    this.text = 'Hello World';
    //表单验证
    this.addForm = formBuilder.group({
      phone: [this.phone||'', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required, Validators.pattern("^(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$")])],
      name: [this.name||'', Validators.compose([Validators.required, Validators.minLength(1)])],
      position: [this.position||'', Validators.compose([Validators.required, Validators.minLength(1)])],
      address: [this.address||'', Validators.compose([Validators.required, Validators.minLength(1)])],
    });
    this.phone = this.addForm.controls['phone'];
    this.name = this.addForm.controls['name'];
    this.position = this.addForm.controls['position'];
    this.address = this.addForm.controls['address'];
  }

  back(){
    this.viewCtrl.dismiss();
  }

  saveAddress(data){
    console.log(data);
    this.viewCtrl.dismiss(data);
  }

}
