import { Component, OnInit } from '@angular/core';
import { AddcartService } from '../Service/addcart.service';
import { CartService } from '../Service/cart.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
 
})
export class ItemsComponent implements OnInit{

  cartItem:any;
  // itemList: any;
  constructor(private cartList:CartService, private addCart:AddcartService){}

  // 
// addingTocart(item){
//  console.log(item)
//   this.addCart.addingCart(item)
// }

// get cartItems(){
//   return this.addCart.getItemListadd();
// }
  ngOnInit(){
    this.cartList.getItem()
    .subscribe(response=>{
      this.cartItem=response;

      this.cartItem.forEach((value)=>{
        Object.assign(value,{quantity:1,total:value.price});
      })
     
    })
  }



  addingTocart(item){
    this.addCart.addtoCart(item);
    // this.cartList.addtoCart(item)
  }
}







// this.itemList.forEach((val)=>{
//   Object.assign(val,{quantity:1,total:val.price});
// })