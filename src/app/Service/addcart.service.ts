import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddcartService {

  cartItemList:any=[];
  itemListadd=new BehaviorSubject([]);
  
  constructor() { }

  getItemListadd(){
   return this.cartItemList;
  }
  setItem(item){
    this.cartItemList.push(...item);
    // this.cartItemList.next(item);
    this.itemListadd.next(item);
  }

  // addingCart(item){
  //   this.cartItemList.push(item)
  //   
  // }


  addtoCart(item: any){
    this.cartItemList.push(item);
    this.itemListadd.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }

  getTotalPrice(){
    let totalAll=0;
    this.cartItemList.map((val)=>{
      totalAll +=val.total
    })
    return totalAll
  }

  getQuantity(){
     this.cartItemList.find((val)=>{
      if(val.itemName === this.cartItemList.itemName){
      }
     })
  }



}

