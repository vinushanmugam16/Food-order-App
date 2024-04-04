import { Component, OnInit } from '@angular/core';
import { CartService } from '../Service/cart.service';

@Component({
  selector: 'app-ordered-items',
  templateUrl: './ordered-items.component.html',
  styleUrls: ['./ordered-items.component.css']
})
export class OrderedItemsComponent implements OnInit{
  public food:any;
  public foodItem:any
  public totalPrice: number=0;
  public orderId:string;
  public myOrder: any;

  constructor(private cart:CartService){}
  
  ngOnInit(){



   const orderItems=sessionStorage.getItem('myorder')
   if(orderItems){
    this.myOrder=orderItems
   }
        this.orderId=this.cart.generateOrderId();
  }
  public totalAll() {
    this.food.map((value: { price: number; quantity: number; }) => {
      this.totalPrice += value.price * value.quantity;
    })
    return this.totalPrice;
  }

}
