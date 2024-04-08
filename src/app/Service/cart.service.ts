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
  public food: any;
  public totalPrice: number = 0;
  // public orderedItem: any = [];

  constructor(private http: HttpClient) {
    this.totalItem = this.itemLength()
  }

  public fooditemsUrl = environment.baseUrl + environment.foodItemsUrl;
  public cartUrl = environment.baseUrl + environment.addCart;
  public userUrl = environment.baseUrl + environment.regUrl;
  public addressUrl = environment.baseUrl + environment.addressUrl;
  public historyUrl = environment.baseUrl + environment.historyUrl;

  public getItem() {
    return this.http.get(this.fooditemsUrl);
  }

  public createCart(addingCart: Item) {
    return this.http.post(this.cartUrl, addingCart);
  }

  public getCart() {
    return this.http.get(this.cartUrl);
  }

  public deleteItem(id: number) {
    return this.http.delete(`${this.cartUrl}/${id}`);
  }

  public updateQuantity(id: string | number, foodItem: Item) {
    return this.http.put(this.cartUrl + '/' + id, foodItem);
  }

  public itemLength() {
    this.getCart()
      .subscribe((response: any) => {
        this.foodItem = response;
        this.food = this.foodItem.filter((item: any) => item.userName === sessionStorage.getItem('user'))
        this.totalItem = this.food.length;
      })
  }

  public getAddress() {
    return this.http.get(this.addressUrl);
  }

  public createAddress(locate: Address) {
    return this.http.post(this.addressUrl, locate)
  }

  public deleteAddress(id: string) {
    return this.http.delete(`${this.addressUrl}/${id}`);
  }

  public selectAddress(id: string) {
    return this.http.get(`${this.addressUrl}/${id}`);
  }

  public updateAddress(id: string, address: Address) {
    return this.http.put(this.addressUrl + '/' + id, address)
  }

  generateOrderId() {
    const time = new Date().getTime().toString(36);
    const randomNumber = Math.random().toString(36).substr(2, 5);
    const orderId = time + randomNumber;
    return orderId.toUpperCase();
  }

  // getHistory(item:any){
  //   this.orderedItem.push(item);
  //   sessionStorage.setItem('history', JSON.stringify(this.orderedItem));

  // }

  getOrderedHistory() {
    return this.http.get(this.historyUrl);
  }

  createOrderedHistory(history: Item) {
    return this.http.post(this.historyUrl, history);
  }

  updateHistory(id: number, history: Item) {
    return this.http.put(this.historyUrl + '/' + id, history);
  }
}