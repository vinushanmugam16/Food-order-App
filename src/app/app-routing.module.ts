import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './header/login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistrationComponent } from './registration/registration.component';
import { FooterComponent } from './footer/footer.component';
import { SavedataComponent } from './savedata/savedata.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { LunchComponent } from './lunch/lunch.component';
import { DinnerComponent } from './dinner/dinner.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { ItemsComponent } from './items/items.component';
import { Guard } from './Service/guard';

const routes: Routes = [
  {path:'', title:'Food Cart',component:HomepageComponent},
  {path:'Header',component:HeaderComponent},
  {path:'Registration',title:'Registration', component:RegistrationComponent},
  // {path:'SaveData', title:'Registration' , component:SavedataComponent},
  {path:'Login',title:'Login',component:LoginComponent ,canActivate: [Guard]},
  {path:'Footer',component:FooterComponent},
  {path:'Mainpage',component:MainpageComponent},
  {path:'Breakfast',title:'Breakfast',component:BreakfastComponent},
  {path:'Lunch',title:'Lunch',component:LunchComponent},
  {path:'Dinner', title:'Dinner',component:DinnerComponent},
  {path:'Contact',title:'Contact',component:ContactComponent},
  {path:'Cart',title:'Cart',component:CartComponent},
  {path:'Items',title:'Items',component:ItemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
