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
  constructor(private addingtoCart: AddcartService, private cart:CartService ) {}

  ngOnInit() {
   this.getFoodItem();
  }

  public getFoodItem(){
    this.cart.getCart()
    .subscribe((res)=>{
      this.foodItem=res;
    })
  }

  public removeItem(id) {
    this.cart.deleteItem(id).subscribe((item)=>
    {
      console.log("hello All",item);
      this.getFoodItem();
    });
  }

  public removeAll() {
    this.cart.deleteAll().subscribe(()=>{
      console.log('deleting');
    });
  }
  
}



