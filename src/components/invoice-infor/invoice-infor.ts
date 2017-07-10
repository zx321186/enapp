import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

/*
  Generated class for the InvoiceInfor component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'invoice-infor',
  templateUrl: 'invoice-infor.html'
})
export class InvoiceInforComponent {

  text: string;
  payWay: Array<any> = [{name:'不需要发票',id:'1',checked:true},{name:'需要并填写发票信息',id:'2',checked:false}];
  invoiceType: Array<any> = [{name:'个人',id:'1',checked:true},{name:'单位',id:'2',checked:false}];
  checked: boolean = false;
  checkedNeed: boolean = false;
  addForm: FormGroup;

  constructor(public viewCtrl: ViewController, private formBuilder: FormBuilder) {
    console.log('Hello InvoiceInfor Component');
    this.text = 'Hello World';
    this.addForm =  formBuilder.group({
      phone: ['', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required, Validators.pattern("^(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$")])],
      name: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      position: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      address: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
    });
  }

  back(){
    this.viewCtrl.dismiss();
  }

  save(){
    let data ;
    for(let i=0; i<this.payWay.length; i++){
      if(this.payWay[i].checked==true){
        data = this.payWay[i];
      }
    }
    this.viewCtrl.dismiss(data)
  }

  select(id){
    for(let i=0; i<this.payWay.length; i++){
      if(id==this.payWay[i].id){
        this.payWay[i].checked = true;
      }else{
         this.payWay[i].checked = false;
      }

      if(id==2){
        this.checkedNeed = true;
      }else{
        this.checkedNeed = false;
      }
    }
  }

  selectType(item){
    for(let i=0; i<this.invoiceType.length; i++){
      if(item==this.invoiceType[i]){
        this.invoiceType[i].checked = true;
      }else{
         this.invoiceType[i].checked = false;
      }
    }
  }

  changeCheck(){
    this.checked = !this.checked;
  }
}
