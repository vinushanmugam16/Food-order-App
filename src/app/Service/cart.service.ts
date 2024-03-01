import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  constructor(private http:HttpClient) { }
   
  // cart:Item[]=[]


  // addtoCart(state:Item){
  //   this.cart.push(state);
  //   console.log(this.cart);
  // }

  getItem(){
    return this.http.get('http://localhost:3000/FoodItems')
    // .pipe(map((val)=>{
    //   return val;
    // }))
  }


  // getLunchItem(){
  //   return this.http.get('http://localhost:3000/lunchItems');
  // }

  


}
