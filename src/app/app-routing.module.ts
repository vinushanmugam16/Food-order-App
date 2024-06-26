import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistrationComponent } from './registration/registration.component';
import { FooterComponent } from './footer/footer.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './guard/auth.guard';
import { ItemsComponent } from './items/items.component';
import { PaymentComponent } from './payment/payment.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrderedItemsComponent } from './ordered-items/ordered-items.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', title: 'Food Order App', component: HomepageComponent },
  { path: 'home', title: 'Home', component: HomepageComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'registration', title: 'Registration', component: RegistrationComponent },
  { path: 'login', title: 'Login', component: LoginComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'mainpage', title: 'Food Order App', component: MainpageComponent, canActivate: [AuthGuard] },
  { path: 'contact', title: 'Contact', component: ContactComponent, canActivate: [AuthGuard] },
  { path: 'cart', title: 'Cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'items', title: 'Items', component: ItemsComponent, canActivate: [AuthGuard] },
  { path: 'ordering', title: 'Order', loadChildren: () => import('./order/order.module').then((m) => m.OrderModule) },
  { path: 'payment', title: 'Payment', component: PaymentComponent, canActivate: [AuthGuard] },
  { path: 'ordered', title: 'My Order', component: OrderedItemsComponent, canActivate: [AuthGuard] },
  { path: 'profile', title: 'Profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '**', title: '404 Error', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }