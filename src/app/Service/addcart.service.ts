import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})

export class AddcartService {

  cartItemList = [];
  quantity=1;
  itemListadd = new BehaviorSubject([]);

  getItemListadd() {
    return this.itemListadd;
  }
  setItem(item: []) {
    this.cartItemList.push(...item);
    this.itemListadd.next(item);
  }

  public addtoCart(item:Item) {
    if(this.cartItemList.find((list)=> list.itemName === item.itemName)
    ){
     console.log(this.cartItemList);
      
      this.cartItemList.find((val)=>val.quantity++)
      this.itemListadd.next(this.cartItemList);
    }
    else{
      this.cartItemList.push(item);
      this.itemListadd.next(this.cartItemList);
    }   
  }

  public removeCartItem(id: number) {
    this.cartItemList.splice(id, 1);
    this.itemListadd.next(this.cartItemList);
  }

  public removeAll() {
    this.cartItemList = [];
    this.itemListadd.next(this.cartItemList);
  }
}


