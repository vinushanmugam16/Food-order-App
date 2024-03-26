import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Item } from '../model/item';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  
  public totalItem:number;
  public foodItem:any;
  totalPrice: number=0;

  constructor(private http:HttpClient) { }

  fooditemsUrl=environment.baseUrl+environment.foodItemsUrl;
  cartUrl = environment.baseUrl+environment.addCart;
  userUrl=environment.baseUrl+environment.regUrl

  public getItem(){
    return this.http.get(this.fooditemsUrl);
  }

  public createCart(addingCart: Item) {
    return this.http.post(this.cartUrl, addingCart);
  }

  public createCartItems(items:Item){
    return this.http.post(this.userUrl,items)
  }

  public gettingItems(){
    return this.http.get(this.userUrl)
  }

  public getUserData(username:any){
    return this.http.get(`${this.userUrl}?username=${username}`);
  }

  public updateCart(id:any,item:User){
    return this.http.put(this.userUrl+'/'+id,item);
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
}