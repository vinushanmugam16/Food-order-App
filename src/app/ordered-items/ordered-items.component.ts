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
      // this.cart.getCart()
      //   .subscribe((response) => {
      //     this.foodItem = response;
      //     this.food = this.foodItem.filter((item: any) => item.userName === sessionStorage.getItem('user'))
      //     this.totalPrice = this.totalAll();
          
      //   })
    this.cart.getOrder()
    .subscribe((resp)=>{
      this.myOrder=resp;
      console.log(resp);
      
    })
        this.orderId=this.cart.generateOrderId();
  }
  public totalAll() {
    this.food.map((value: { price: number; quantity: number; }) => {
      this.totalPrice += value.price * value.quantity;
    })
    return this.totalPrice;
  }

}
