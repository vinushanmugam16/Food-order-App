import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { HistoryComponent } from '../history/history.component';


@NgModule({
  declarations: [
    OrderComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule
  ],
  exports: [OrderComponent]
})
export class OrderModule { }
