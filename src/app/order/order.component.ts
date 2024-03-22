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
  public totalPrice: number = 0;
  constructor(private cart: CartService, private route: Router) { }

  ngOnInit() {
    this.getFoodItem();
  }

  public getFoodItem() {
    this.cart.getCart()
      .subscribe((response) => {
        this.foodItem = response;
        this.totalPrice = this.totalAll();
      })
  }

  public totalAll() {
    this.foodItem.map((value: { price: number; quantity: number; }) => {
      this.totalPrice += value.price * value.quantity;
    })
    return this.totalPrice;
  }

  public orderSelected() {
    // alert('Selected items are ordered Successfully!');
    // this.foodItem.map((item: { id: number; }) => {
    //   this.cart.deleteItem(item.id).subscribe(() => {
    //     this.getFoodItem();
    //     // this.totalPrice = 0;
    //     this.cart.itemLength();
    //   })
    // })
    this.cart.itemLength();
    this.route.navigateByUrl('payment');
  }
}