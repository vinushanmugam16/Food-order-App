import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AddcartService {

  cartItemList = [];
  itemListadd = new BehaviorSubject([]);

  getItemListadd() {
    return this.itemListadd;
  }
  setItem(item: []) {
    this.cartItemList.push(...item);
    this.itemListadd.next(item);
  }

  addtoCart(item: string) {
    this.cartItemList.push(item);
    this.itemListadd.next(this.cartItemList);
  }

  removeCartItem(id: number) {
    this.cartItemList.splice(id, 1);
    this.itemListadd.next(this.cartItemList);
  }

  removeAll() {
    this.cartItemList = [];
    this.itemListadd.next(this.cartItemList);
  }
}

