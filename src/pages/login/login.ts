import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RegisterPage } from '../register/register';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

	loginForm:FormGroup;
	password:any;
	username:any;
	
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private formBuilder: FormBuilder) {
  	this.loginForm = formBuilder.group({
      password: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(32), Validators.required])],
      username: ['', Validators.compose([Validators.required, Validators.minLength(1), ])],
    });
    this.password= this.loginForm.controls['password'];
    this.username = this.loginForm.controls['username'];

  }
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(data){
  	let alert = this.alertCtrl.create({
      title: '登陆成功!',
      subTitle: '恭喜您登陆成功, 快去买买买吧!',
      buttons: [{
      	text:'Ok',
      	handler: ()=>{
      		this.navCtrl.popToRoot();
      	}
      }],
    });
    alert.present();
    console.log(data)

  }

  register(){
  	this.navCtrl.push(RegisterPage);
  }

  

}
