import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  constructor(private http:HttpClient) { }
  fooditemsUrl=environment.foodItemsUrl;
  cartUrl = environment.addCart;

  getItem(){
    return this.http.get(this.fooditemsUrl);
  }

  gettingItemId(id){
    return this.http.get(this.cartUrl+'?id='+id);
  }
}

