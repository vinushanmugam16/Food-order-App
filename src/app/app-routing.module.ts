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
import { ItemsComponent } from './items/items.component';
import { AuthguardService } from './Service/authguard.service';
import { OrderComponent } from './order/order.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path:'', title:'Food Order App',component:HomepageComponent},
  {path:'home',title:'Home',component:HomepageComponent},
  {path:'header',component:HeaderComponent},
  {path:'registration',title:'Registration', component:RegistrationComponent},
  {path:'login',title:'Login',component:LoginComponent},
  {path:'footer',component:FooterComponent},
  {path:'mainpage',title:'Food Order App',component:MainpageComponent},
  {path:'contact',title:'Contact',component:ContactComponent},
  {path:'cart',title:'Cart',component:CartComponent},
  {path:'items',title:'Items',component:ItemsComponent,canActivate:[AuthguardService]},
  {path:'order',title:'Order',component:OrderComponent},
  {path:'logout',title:'Logout',component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
