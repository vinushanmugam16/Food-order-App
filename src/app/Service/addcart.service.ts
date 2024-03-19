import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../model/item';

@Injectable({
  providedIn: 'root'
})

export class AddcartService {

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

    // this.cartItemList.push(item);
   

    // if(this.cartItemList.find((list)=>list.itemName === item.itemName)){

    //   console.log('Comparing item name');
    //   this.cartItemList[0].quantity++;
      
    //   this.itemListadd.next(this.cartItemList);
      
    // }
    const found= this.cartItemList.filter((list)=> list.itemName === item.itemName);
    console.log(`found`,item);

    if(found){
      console.log(' compared item checked');
      
      // found.quantity++;
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
      
      // this.cartItemList.next(item);
      // this.itemListadd.next(this.cartItemList);
    }   
    // this.itemListadd.next(this.cartItemList);
//    this.cartItemList.map((list) => console.log(list.id === item.id));

// console.log('check',this.cartItemList.find((list) => list.id === item.id));

//     if (this.cartItemList.find((list) => { list.id === item.id;
//       console.log(`this.cartItemList`, list.itemName, item.itemName)

//     })) 

//       this.cartItemList[0].quantity++;
//     //   // this.cartItemList.find((val) => val.quantity++)
      
//     //   console.log('adding to cart');
      
//     // }
//     else {
//       this.cartItemList.push(item);
//       console.log('cart push');
//     // this.itemListadd.next(this.cartItemList);
      
//     //   // this.itemListadd.next(this.cartItemList);
//     }

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


