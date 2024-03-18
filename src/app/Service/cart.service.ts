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

  public getItem(){
    return this.http.get(this.fooditemsUrl);
  }

  public gettingItemId(id){
    return this.http.get(this.cartUrl + '?id=' + id);
  }

  public delete(id){
    return this.http.delete(`${this.cartUrl}/${id}`);
  }

  public deleteAll(){
    return this.http.delete(this.cartUrl);
  }
}
