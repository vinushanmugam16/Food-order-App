import { Component, OnInit } from '@angular/core';
import { CartService } from '../Service/cart.service';
import { Item } from '../model/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})

export class CartComponent implements OnInit {

  public foodItem;
  public cartfoodItem;
  public imageUrl = '/assets/image/emptycart.png';
  constructor(public cart: CartService) { }

  ngOnInit() {
    this.getFoodItem();
  }

  public getFoodItem() {
    this.cart.getCart()
      .subscribe((res) => {
        this.foodItem = res;
      })
  }

  increaseQuantity(item: Item) {
    this.cart.getCart().subscribe((data) => {
      this.cartfoodItem = data;
    });
    item.quantity++;
    this.cart.updateQuantity(item.id, item)
      .subscribe(() => {
        this.getFoodItem();
      })
  }

  decreaseQuantity(item: Item) {
    this.cart.getCart().subscribe((data) => {
      this.cartfoodItem = data;
    });
    if (item.quantity > 1) {
      item.quantity--;
    }
    else {
      this.removeItem(item.id);
    }
    this.cart.updateQuantity(item.id, item)
      .subscribe(() => {
        this.getFoodItem();
      })
  }

  public removeItem(id) {
    this.cart.deleteItem(id).subscribe(() => {
      this.getFoodItem();
      this.cart.itemLength();
    });
  }

  public removeAll() {
    this.foodItem.map((item) => {
      this.cart.deleteItem(item.id).subscribe(() => {
        this.getFoodItem();
      })
    })
  }
}



