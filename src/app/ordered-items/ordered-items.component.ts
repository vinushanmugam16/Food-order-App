import { Component, OnInit } from '@angular/core';
import { CartService } from '../Service/cart.service';
import { Item } from '../model/item';

@Component({
  selector: 'app-ordered-items',
  templateUrl: './ordered-items.component.html',
  styleUrls: ['./ordered-items.component.css']
})
export class OrderedItemsComponent implements OnInit {

  public foodItem: Item[];
  public totalPrice: number = 0;
  public orderId: string;
  public myOrder: any=[];
  constructor(private cart: CartService) { }

  ngOnInit() {
    const orderedItems:any= sessionStorage.getItem('myorder');
    this.myOrder =JSON.parse(orderedItems);
    this.totalAll()
  }

  public totalAll() {
    this.myOrder.map((value: { price: number; quantity: number; }) => {
      this.totalPrice += value.price * value.quantity;
      this.orderId = this.cart.generateOrderId();
    })
    return this.totalPrice;
  }
}