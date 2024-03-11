import { Component, OnInit } from '@angular/core';
import { AddcartService } from '../Service/addcart.service';
import { CartService } from '../Service/cart.service';
import { UserService } from '../Service/user.service';
import { Item } from '../model/item';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],

})
export class ItemsComponent implements OnInit {

  cartItem;
  foodItems:Item[];
  constructor(private cartList: CartService, private addCart: AddcartService, private user: UserService) { 
    console.log('vinu'); 
  }

  ngOnInit() {
    this.cartList.getItem()
      .subscribe(response => {
        this.cartItem = response;
        console.log(this.cartItem);
      })
  }
  addingTocart(item) {
    this.addCart.addtoCart(item);
    this.user.createCart(item)
      .subscribe(response => console.log(response));
  }
}

