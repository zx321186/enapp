import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { NavMoreComponent } from '../components/nav-more/nav-more';
import { SearchPagePage } from '../pages/search-page/search-page';
import { SortProductComponent } from '../components/sort-product/sort-product';
import { ProductDetailPage } from '../pages/product-detail/product-detail';
import { ChangeTypeComponent } from '../components/change-type/change-type';
import { ShoppingCarPage } from '../pages/shopping-car/shopping-car';
import { ReviewsPagePage } from '../pages/reviews-page/reviews-page';
import { OrderSubmitPage } from '../pages/order-submit/order-submit';
import { AddressListComponent } from '../components/address-list/address-list';
import { PaymentWayComponent } from '../components/payment-way/payment-way';
import { InvoiceInforComponent } from '../components/invoice-infor/invoice-infor';
import { AddAddressComponent } from '../components/add-address/add-address';
import { PaymentChoiceComponent } from '../components/payment-choice/payment-choice';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { PersonCenterPage } from '../pages/person-center/person-center';
import { CollectionPage } from '../pages/collection/collection';
import { SafePage } from '../pages/safe/safe';
import { FeedBackPage } from '../pages/feed-back/feed-back';
import { AddressAdminPage } from '../pages/address-admin/address-admin';
import { VoucherPage } from '../pages/voucher/voucher';
import { MsgListPage } from '../pages/msg-list/msg-list';
import { MsgDetailPage } from '../pages/msg-detail/msg-detail';
import { OrderListPage } from '../pages/order-list/order-list';
import { TabsPage } from '../pages/tabs/tabs';
import { ClassifyPage } from '../pages/classify/classify';
import { OrderDetailPage } from '../pages/order-detail/order-detail';
import { ListPage } from '../pages/list/list';


//管道
import { ToFixedTwo } from '../pipes/to-fixed-two';
import { ObjPipe } from '../pipes/obj-pipe';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    NavMoreComponent,
    SearchPagePage,
    SortProductComponent,
    ProductDetailPage,
    ChangeTypeComponent,
    ShoppingCarPage,
    ReviewsPagePage,
    OrderSubmitPage,
    AddressListComponent,
    PaymentWayComponent,
    InvoiceInforComponent,
    AddAddressComponent,
    ToFixedTwo,
    PaymentChoiceComponent,
    LoginPage,
    RegisterPage,
    PersonCenterPage,
    CollectionPage,
    SafePage,
    FeedBackPage,
    AddressAdminPage,
    VoucherPage,
    MsgListPage,
    MsgDetailPage,
    OrderListPage,
    TabsPage,
    ClassifyPage,
    OrderDetailPage,
    ObjPipe,
    ListPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp,{
      backButtonText: 'Back',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      mode: 'ios',
      tabsHideOnSubPages: true,
      locationStrategy:'https://www.baidu.com',
    }, {
      link:[{ component: ShoppingCarPage, name: 'ShoppingCarPage', segment: 'home' },

            ]
    }
  ),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    NavMoreComponent,
    SearchPagePage,
    SortProductComponent,
    ProductDetailPage,
    ChangeTypeComponent,
    ShoppingCarPage,
    ReviewsPagePage,
    OrderSubmitPage,
    AddressListComponent,
    PaymentWayComponent,
    InvoiceInforComponent,
    AddAddressComponent,
    PaymentChoiceComponent,
    LoginPage,
    RegisterPage,
    PersonCenterPage,
    CollectionPage,
    SafePage,
    FeedBackPage,
    AddressAdminPage,
    VoucherPage,
    MsgListPage,
    MsgDetailPage,
    OrderListPage,
    TabsPage,
    ClassifyPage,
    OrderDetailPage,
    ListPage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
