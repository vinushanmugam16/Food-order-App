import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../Service/user.service';
import { AddcartService } from '../Service/addcart.service';
import { CartService } from '../Service/cart.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ItemsComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[UserService,AddcartService,CartService]
})
export class ItemsModule { }
