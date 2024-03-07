import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddcartService {

  cartItemList=[];
  itemListadd=new BehaviorSubject([]);

  getItemListadd(){
   return this.itemListadd;
  }
  setItem(item: []){
    this.cartItemList.push(...item);
    this.itemListadd.next(item);
  }

  addtoCart(item: string){
    this.cartItemList.push(item);
    this.itemListadd.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }

  getTotalPrice(){
    let totalAll=0;
    this.cartItemList.map((val)=>{
      totalAll +=val.price
    })
    return totalAll;
  }

  removeCartItem(id: number){
    this.cartItemList.splice(id,1);
    this.itemListadd.next(this.cartItemList);
  }
 

}

