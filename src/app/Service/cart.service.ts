import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Item } from '../model/item';
import { User } from '../model/user';
import { Address } from '../model/address';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  public totalItem: number;
  public foodItem: any;
  public food: any;
  totalPrice: number = 0;

  constructor(private http: HttpClient) { }

  fooditemsUrl = environment.baseUrl + environment.foodItemsUrl;
  cartUrl = environment.baseUrl + environment.addCart;
  userUrl = environment.baseUrl + environment.regUrl;
  addressUrl = environment.baseUrl + environment.addressUrl;

  public getItem() {
    return this.http.get(this.fooditemsUrl);
  }

  public createCart(addingCart: Item) {
    console.log(addingCart);
    return this.http.post(this.cartUrl, addingCart);
  }

  // public createCartItems(items:Item){
  //   return this.http.post(this.userUrl,items)
  // }

  // public gettingItems(){
  //   return this.http.get(this.userUrl)
  // }

  // public getUserData(username:any){
  //   return this.http.get(`${this.userUrl}?username=${username}`);
  // }

  // public updateCart(id:any,item:User){
  //   return this.http.put(this.userUrl+'/'+id,item);
  // }

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



  public getAddress(){
    return this.http.get(this.addressUrl);
  }

  public createAddress(locate:Address){
    return this.http.post(this.addressUrl,locate)
  }

  public deleteAddress(id:string){
    return this.http.delete(`${this.addressUrl}/${id}`);
  }

  public selectAddress(id:string){
    return this.http.get(`${this.addressUrl}/${id}`);
  }
}