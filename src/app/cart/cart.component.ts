import { Component, OnInit } from '@angular/core';
import { AddcartService } from '../Service/addcart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})

export class CartComponent implements OnInit {

  foodItem=[];
  total = 0;
  imageUrl = '/assets/image/emptycart.png';
  constructor(private addingtoCart: AddcartService) {}

  ngOnInit() {
    this.addingtoCart.getItemListadd()
      .subscribe((response) => {
        this.foodItem = response;
      })
  }

  removeItem(id:number) {
    this.addingtoCart.removeCartItem(id);
  }

  removeAll() {
    this.addingtoCart.removeAll();
  }
}