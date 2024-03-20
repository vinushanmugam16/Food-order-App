import { Component, OnInit } from '@angular/core';
import { AddcartService } from '../Service/addcart.service';
import { CartService } from '../Service/cart.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],

})
export class ItemsComponent implements OnInit {

  public cartItem;
  constructor(private cartList: CartService, private addCart: AddcartService) { }

  ngOnInit() {
    this.cartList.getItem()
      .subscribe(response => {
        this.cartItem = response;
      })
  }

  public addingTocart(item) {
    this.cartList.getCart().subscribe((data: any) => {
      const foodItem = data;
      // console.log(`cart data`,foodItem);
      
      const foundItem = foodItem.find((food) => 
        food.itemName === item.itemName     
      )
     
      if (foundItem === undefined) {
        this.cartList.createCart(item).subscribe((data)=>{console.log("Data added successfully");
        })
      }
      else{
        foundItem.quantity++;
        this.cartList.updateQuantity(foundItem.id,foundItem).subscribe((data)=>{
          console.log("quantity added successfully",data);
        })
      }
    })
  }
}

