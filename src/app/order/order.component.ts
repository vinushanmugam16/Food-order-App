import { Component, OnInit } from '@angular/core';
import { AddcartService } from '../Service/addcart.service';
import { CartService } from '../Service/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  foodItem;
  total= 0;
  constructor(private addingtoCart: AddcartService ,private cart:CartService) { }

  ngOnInit() {
    this.addingtoCart.getItemListadd()
      .subscribe((response) => {
        this.foodItem = response;
        this.total= this.totalAll();
      })
  }

  totalAll(){
    this.foodItem.map((value)=>{
      this.total += value.price;
    })
    return this.total;
  }

  orderSelected() {
    alert('Selected items are ordered Successfully!');
    this.addingtoCart.removeAll();
    this.total = 0; 
  }
}