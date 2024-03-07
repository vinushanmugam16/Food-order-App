import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  constructor(private http:HttpClient) { }
  
  getItem(){
    return this.http.get('http://localhost:3000/FoodItems');
  }
 

}
