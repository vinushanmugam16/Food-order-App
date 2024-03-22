import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  
  public totalItem:number;
  public foodItem:any;
  totalPrice: number=0;

  constructor(private http:HttpClient) { }

  fooditemsUrl=environment.foodItemsUrl;
  cartUrl = environment.addCart;

  public getItem(){
    return this.http.get(this.fooditemsUrl);
  }

  public createCart(addingCart: Item) {
    return this.http.post(this.cartUrl, addingCart);
  }

  public getCart(){
    return this.http.get(this.cartUrl);   
  }

  public deleteItem(id: number){
    return this.http.delete(`${this.cartUrl}/${id}`);
  }

  public updateQuantity(id: string | number,foodItem: Item){
    return this.http.put(this.cartUrl+'/'+id,foodItem);
  }

  public itemLength(){   
    this.getCart()
    .subscribe((response:any)=>{
      this.totalItem = response.length;
    })
  }
  
  // public totalAll() {
  //   this.foodItem.map((value: { price: number; quantity: number; }) => {
  //     this.totalPrice += value.price*value.quantity;
  //   })
  //   return this.totalPrice;
  // }

}