import { Component, OnInit } from '@angular/core';
import { AddcartService } from '../Service/addcart.service';
import { Item } from '../model/item';
import { CartService } from '../Service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})

export class CartComponent implements OnInit {

  foodItem=[];
  total = 0;
  quantity=1;
  imageUrl = '/assets/image/emptycart.png';
  constructor(private addingtoCart: AddcartService, private cart:CartService) {}

  ngOnInit() {
    this.addingtoCart.getItemListadd()
      .subscribe((response) => {
        this.foodItem = response;
      })
  }

  decrease(id){
  
    this.cart.gettingItemId(id)
    .subscribe((response)=>{
      // if(response.value.quantity === ){

      // }
      console.log('werfds',response[0].quantity);
      
    }
     
      )
    // this.quantity--;
  }
  increase(id){
    // this.cart.gettingItemId(id)
    // .subscribe((response)=>
    //   this.quantity=response)
  }

  removeItem(id:number) {
    this.addingtoCart.removeCartItem(id);
  }

  removeAll() {
    this.addingtoCart.removeAll();
  }
}