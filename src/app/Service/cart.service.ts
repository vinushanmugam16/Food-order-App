import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart=[];


  addingCart(item: any) {
    this.cart.push(item)
  }
  getCartItems(){
    return this.cart;
  }

  constructor() { }

  // breakfast=[
  //   {imageUrl:'/assets/image/idly.jpeg',
  //    itemName: 'Idly',
  //    price:35},
  //    {imageUrl:'/assets/image/dosa.jpeg',
  //     itemName:'Dosa',
  //     price:75
  //    },
  //    {
  //     imageUrl:'/assets/image/venpongal.jpeg',
  //     itemName:'Venpongal',
  //     price:50
  //    },
  //    {imageUrl:'/assets/image/poori.jpeg',
  //     itemName:'Poori',
  //     price:60
  //    }
  //  ]
   
}
