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
import { Guard } from './guard';

const routes: Routes = [
  {path:'', title:'Food Order App',component:HomepageComponent},
  {path:'header',component:HeaderComponent},
  {path:'registration',title:'Registration', component:RegistrationComponent},
  {path:'login',title:'Login',component:LoginComponent ,canActivate: [Guard]},
  {path:'footer',component:FooterComponent},
  {path:'mainpage',component:MainpageComponent},
  {path:'contact',title:'Contact',component:ContactComponent},
  {path:'cart',title:'Cart',component:CartComponent},
  {path:'items',title:'Items',component:ItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
