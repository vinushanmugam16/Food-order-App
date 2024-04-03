import { Component, OnInit } from '@angular/core';
import { CartService } from '../Service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  public foodItem: any;
  public food: any;
  public totalPrice: number = 0;
  constructor(private cart: CartService, private route: Router) { }

  ngOnInit() {
    this.getFoodItem();
  }

  public getFoodItem() {
    this.cart.getCart()
      .subscribe((response) => {
        this.foodItem = response;
        this.food = this.foodItem.filter((item: any) => item.userName === sessionStorage.getItem('user'))
        this.totalPrice = this.totalAll();
      })
  }

  public totalAll() {
    this.food.map((value: { price: number; quantity: number; }) => {
      this.totalPrice += value.price * value.quantity;
    })
    return this.totalPrice;
  }

  public orderSelected(item: any) {
    console.log(item);
    this.cart.createOrder(item)
    .subscribe((resp)=>{
      console.log(resp);
    })
    this.cart.itemLength();
    this.route.navigateByUrl('payment');
  }
}