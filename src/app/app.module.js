var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { RouterModule } from '@angular/router';
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
//管道
import { ToFixedTwo } from '../pipes/to-fixed-two';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
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
        ],
        imports: [
            IonicModule.forRoot(MyApp, {
                backButtonText: 'Back',
                modalEnter: 'modal-slide-in',
                modalLeave: 'modal-slide-out',
                tabsPlacement: 'bottom',
                mode: 'ios',
            }, {}),
            RouterModule.forRoot([
              {
                path: 'heroes',
                component: HeroesComponent
              }
            ])
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
        ],
        providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map