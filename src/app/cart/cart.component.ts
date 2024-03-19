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
  quan=0;
  public imageUrl = '/assets/image/emptycart.png';
  constructor(private addingtoCart: AddcartService, private cart:CartService ) {}

  ngOnInit() {
    // this.addingtoCart.getItemListadd()
    //   .subscribe((response) => {
    //     this.foodItem = response;
    //   })
 
    this.cart.getCart()
    .subscribe((res)=>{
      this.foodItem=res;
    })
  }

  public removeItem(id:number) {
    // this.addingtoCart.removeCartItem(id);
    this.cart.deleteItem(id).subscribe((item)=>
    {
      console.log("hello All",item);
      // this.foodItem.splice(id,1);
      // this.foodItem=item;
    });
    this.cart.getCart()
    .subscribe(data=>this.foodItem=data)

    // this.addingtoCart.getItemListadd()
    //   .subscribe((response) => {
    //     this.foodItem = response;
    //   })
    // this.addingtoCart.getItemListadd().subscribe((res)=>this.foodItem=res)
  }

  public removeAll() {
    // this.addingtoCart.removeAll();
    // this.cart.deleteAll().subscribe(()=>{
    //   // this.foodItem=response;
    //   console.log('deleting');
    // })
    this.cart.deleteAll()
  }
  
}



