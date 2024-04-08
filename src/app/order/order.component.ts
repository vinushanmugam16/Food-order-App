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

  public foodItem: any=[];
  public food: Item[];
  public totalPrice: number = 0;
  public ordered: any = [];

  constructor(private cart: CartService, private route: Router) { }

  ngOnInit() {
    this.getFoodItem();
  }

  public getFoodItem() {
    try {
      this.cart.getCart()
        .subscribe((response) => {
          this.foodItem = response;
          this.food = this.foodItem.filter((item: { userName: string | null; }) =>
            item.userName === sessionStorage.getItem('user'))
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
      sessionStorage.setItem('total', JSON.stringify(this.totalPrice));
    })
    return this.totalPrice;
  }

  public orderSelected(item: any) {
    // this.cart.orderedItem.push(item);
    // this.cart.getHistory(item);
    // console.log(this.cart.orderedItem);
    // console.log('item', item[0]);
    item.map((val: Item) => {
      this.cart.createOrderedHistory(val)
        .subscribe((response) => {
          console.log(response);
        })
    })

    this.cart.itemLength();
    this.route.navigateByUrl('payment');
  }
}