import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';

/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

	passwordT:any;
	confirmPasswordT:any;
	usernameT:any;
  pwd:any;
  configpwd:any;
  all:any = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(data){
  	let alert = this.alertCtrl.create({
      title: '成册成功!',
      subTitle: '恭喜您注册成功, 快去买买买吧!',
      buttons: [{
      	text:'Ok',
      	handler: ()=>{
      	  this.navCtrl.popToRoot();
      	}
      }],
    });
    alert.present();
  }

  login(){
  	this.navCtrl.push(LoginPage);
  }

  usernameReg(value){
      var mail = /^[a-z0-9-]{1,30}@[a-z0-9-]{1,65}(\.[a-z0-9-]{1,65})*$/;
      var phone = /^(1{1})+\d{10}$/;
      var nor = /^[a-z][a-z_0-9]*$/i;

    if(mail.test(value)||phone.test(value)||nor.test(value)){
      this.usernameT = true;
      if(this.passwordT&&this.confirmPasswordT&&this.usernameT){
        this.all = true;
      }
    }else{
      this.usernameT = false;
    }
  }

  passwordReg(value){
    this.pwd = value;
    if(this.pwd.length<6||this.pwd.length>16){
      this.passwordT = false;
    }else{
      this.passwordT = true;
      if(this.passwordT&&this.confirmPasswordT&&this.usernameT){
        this.all = true;
      }
    }
  }

  configPwdReg(value){
    this.configpwd = value;
    if(this.configpwd!=this.pwd){
      this.confirmPasswordT = false;
    }else{
      this.confirmPasswordT = true;
      if(this.passwordT&&this.confirmPasswordT&&this.usernameT){
        this.all = true;
      }
    }
  }

}
