import { Component, OnInit } from '@angular/core';
import { CartService } from '../Service/cart.service';
import { Router } from '@angular/router';
import { Item } from '../model/item';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  public food: Item[];
  public totalPrice: number = 0;

  constructor(private cart: CartService, private route: Router) { }

  ngOnInit() {
    this.getFoodItem();
  }

  public getFoodItem() {
    try {
      this.cart.getCartItem()
        .subscribe((response: any) => {
          this.food = response;
          this.totalPrice = this.totalAll();
          sessionStorage.setItem('myorder', JSON.stringify(this.food));
        })
    }
    catch (err) {
      console.error(err);
    }
  }

  public totalAll() {
    this.food.map((value: { price: number; quantity: number; }) => {
      this.totalPrice += value.price * value.quantity;
    })
    return this.totalPrice;
  }

  public orderSelected() {
    this.cart.itemLength();
    this.route.navigateByUrl('payment');
  }
}