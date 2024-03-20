import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../model/item';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})

export class AddcartService {

  constructor(private cart:CartService){}

  cartItemList = [];
  itemListadd = new BehaviorSubject([]);

  public getItemListadd() {
    return this.itemListadd;
  }
  public setItem(item: []) {
    this.cartItemList.push(...item);
    this.itemListadd.next(item);
  }

  public addtoCart(item: Item) {

  
    const found= this.cartItemList.find((list)=> list.itemName === item.itemName);
    // console.log(`found`,item);

    if(found !== undefined){
      console.log(' compared item checked');
      
      

      this.cart.updateQuantity(found.quantity++,found.id)
      .subscribe(response=>{
        console.log('Put',response)
      })

      // this.itemListadd.next(this.cartItemList);
    }       
    // if(this.cartItemList.find((list)=> list.itemName === item.itemName)
    // ){
    //  console.log(this.cartItemList);
    //   console.log('checking' , this.cartItemList.find((list)=> list.itemName === item.itemName));
      
    //   this.cartItemList.find((val)=>val.quantity++)
    //   this.itemListadd.next(this.cartItemList);
    // }
    else{
      console.log('else part',this.cartItemList);
      
      this.cartItemList.push(item);
      this.itemListadd.next(this.cartItemList);
    }   
  }

  public removeCartItem(id: number) {
      this.cartItemList.splice(id, 1);
      this.itemListadd.next(this.cartItemList);
  }

  public removeAll() {
    this.cartItemList = [];
    this.itemListadd.next(this.cartItemList);
  }

}


