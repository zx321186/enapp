import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { PaymentChoiceComponent } from '../../components/payment-choice/payment-choice';
import { OrderDetailPage } from '../order-detail/order-detail';

/*
  Generated class for the OrderList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-order-list',
  templateUrl: 'order-list.html'
})
export class OrderListPage {
	order_state:any;
  now_state:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public modalCtrl: ModalController) {
  	this.order_state = [{state:'',text:'全部',active:true},{state:'state_new',text:'待付款'},{state:'state_send',text:'待收货',active:false},{state:'state_notakes',text:'待自提',active:false},{state:'state_noeval',text:'待评价',active:false}];
    this.now_state = this.navParams.get('item').data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderListPage');
  }

  cancelOrder(){
  	let confirm = this.alertCtrl.create({
      title: '确定取消订单?',
      message: '您确定要取消该订单吗？取消订单后，不能恢复。',
      buttons: [
        {
          text: '确定',
          handler: () => {
            alert('取消成功')
          }
        },
        {
          text: '取消',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  payOrder(){
  	let profileModal = this.modalCtrl.create(PaymentChoiceComponent, {parentCtrl:this.navCtrl});
    profileModal.onDidDismiss(data => {
      if(data){
        if(data.id==1){
          // this.payments = data.name;
        }else if(data.id==2){
          // this.payments = data.name;
        }
      }
    });
    profileModal.present();
  }

  order(item){
  	for(let i=0;i<this.order_state.length;i++){
  		if(this.order_state[i]==item){
        this.now_state = this.order_state[i].state;
  			this.order_state[i].active = true;
        console.log(this.now_state);
  		}else{
  			this.order_state[i].active = false;
  		}
  	}
  }

  orderDetail(item){
    this.navCtrl.push(OrderDetailPage);
  }
}
