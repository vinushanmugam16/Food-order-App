import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { UserService } from './Service/user.service';
import { CartService } from './Service/cart.service';
import { CurrencyPipe } from '@angular/common';
import { ItemsComponent } from './items/items.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PaymentComponent } from './payment/payment.component';
import { ToastNoAnimationModule } from 'ngx-toastr';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { CustomFilterPipe } from './custom-filter.pipe';
import { EncryptDecryptService } from './Service/encryptDecrypt.service';
import { OrderedItemsComponent } from './ordered-items/ordered-items.component';
import { PhonemockPipe } from './phonemock.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomepageComponent,
    RegistrationComponent,
    FooterComponent,
    MainpageComponent,
    ContactComponent,
    CartComponent,
    ItemsComponent,
    PaymentComponent,
    NotFoundComponent,
    CustomFilterPipe,
    OrderedItemsComponent,
    PhonemockPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CurrencyPipe,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    ToastNoAnimationModule.forRoot(
     { preventDuplicates:true}
    ),
    NgbModule,
    NgxPaginationModule

  ],
  providers: [UserService,
    CartService,
    TranslateService,
    EncryptDecryptService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}