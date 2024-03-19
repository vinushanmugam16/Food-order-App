import { Component, OnInit } from '@angular/core';
import { AddcartService } from '../Service/addcart.service';
import { CartService } from '../Service/cart.service';
import { UserService } from '../Service/user.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],

})
export class ItemsComponent implements OnInit {

  public cartItem;
  constructor(private cartList: CartService, private addCart: AddcartService) {}

  ngOnInit() {
    this.cartList.getItem()
      .subscribe(response => {
        this.cartItem = response;
      })
  }

  // public addingToCart(item) {
  //   this.addCart.addToCart(item);
  //   this.cartList.createCart(item)
  //     .subscribe((response: any[]) => { // Assuming response is an array of objects
  //       console.log(response);
  //       const found = response.find(val => val.itemName === item.itemName);
  //       if (found) {
  //         console.log('Item found:', found);
  //         // Do something with the found item
  //       } else {
  //         console.log('Item not found');
  //       }
  //     });
  // }
  
  public addingTocart(item) {
    this.addCart.addtoCart(item);
    this.cartList.createCart(item)
      .subscribe((response:any[]) => {
        console.log(response);

        // const found = response.find((val=>val.itemName === item.itemName))
        // console.log(found);
        
        // if(found){
        //   console.log('Item checked');
        //   found.quantity++;
        // }
        // else{
        //   console.log('Item is not there!');
          
        // }
      });
  }
}

