import { Component, Input } from '@angular/core';
import { CartService } from '../Service/cart.service';
import { BreakfastComponent } from '../breakfast/breakfast.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers:[BreakfastComponent]
})
export class CartComponent {
 
  // @Input() breakfastItems:any[];


    // cartItems=[];

    constructor(private addCart:BreakfastComponent){}

    // ngOnInit(){
    //   this.cartItems=this.addCart.getCartItems();
    // }

    getCartItem(){
      this.addCart.cartItemList;
    }
}
