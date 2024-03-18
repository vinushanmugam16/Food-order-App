import { Component, OnInit } from '@angular/core';
import { AddcartService } from '../Service/addcart.service';
import { CartService } from '../Service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})

export class CartComponent implements OnInit {

  public foodItem;
  public total = 0;
  public imageUrl = '/assets/image/emptycart.png';
  constructor(private addingtoCart: AddcartService, private cart:CartService) {}

  ngOnInit() {
    this.addingtoCart.getItemListadd()
      .subscribe((response) => {
        this.foodItem = response;
      })
  }

  public removeItem(id:number) {
    // this.addingtoCart.removeCartItem(id);
    this.cart.delete(id).subscribe((data)=>
    {
      console.log("hello All",data);
      // this.foodItem=data
     this.foodItem.splice(id,1);
    })
  }

  public removeAll() {
    this.addingtoCart.removeAll();
    // this.cart.deleteAll().subscribe((response)=>{
    //   this.foodItem=response;
    //   console.log('Hello');
    // })
  }
}



