import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Item } from '../model/item';
import { Address } from '../model/address';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  public totalItem;
  public foodItem = [];
  public food: any = [];
  public totalPrice: number = 0;

  constructor(private http: HttpClient) {
    this.totalItem = this.itemLength()
  }

  public fooditemsUrl = environment.baseUrl + environment.foodItemsUrl;
  public cartUrl = environment.baseUrl + environment.addCart;
  public userUrl = environment.baseUrl + environment.regUrl;
  public addressUrl = environment.baseUrl + environment.addressUrl;

  //BE
  public getItemDisplay() {
    // return this.http.get('http://localhost:4000/item')
    return this.http.get(this.fooditemsUrl);
  }

  //BE
  public createCartItem(addingCart: Item) {
    // console.log('service call', addingCart);
    return this.http.post(this.cartUrl,addingCart)
    // return this.http.post('http://localhost:4000/addtocart', addingCart);
  }
  public getCartItem() {
    // return this.http.get('http://localhost:4000/addtocart');
    return this.http.get(this.cartUrl);
  }

  //BE
  public deleteCartItem(id: number) {
    return this.http.delete('http://localhost:4000/destroy/' + `${id}`)
  }

  public deleteAll() {
    return this.http.delete('http://localhost:4000/destroyall');
  }

  //BE
  public updateItemQuantity(id: string | number, foodItem: Item) {
    return this.http.put('http://localhost:4000/update/' + id, foodItem);
  }

  public itemLength() {
    this.getCartItem()
      .subscribe((response: any) => {
        this.food= response;
        this.totalItem = this.food.length;
      })
  }

  //BE
  public getAllAddress() {
    // return this.http.get('http://localhost:4000/address');
    return this.http.get(this.addressUrl)
  }
  public createAllAddress(locate: Address) {
    // return this.http.post('http://localhost:4000/address', locate)
    return this.http.post(this.addressUrl,locate)
  }


  generateOrderId() {
    const time = new Date().getTime().toString(36);
    const randomNumber = Math.random().toString(36).substr(2, 5);
    const orderId = time + randomNumber;
    return orderId.toUpperCase();
  }
}