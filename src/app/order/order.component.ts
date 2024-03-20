import { Component, OnInit } from '@angular/core';
import { CartService } from '../Service/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  public foodItem;
  public totalPrice = 0;
  constructor(private cart:CartService) { }

  ngOnInit() {
    this.getFoodItem();
  }

  public getFoodItem(){
    this.cart.getCart()
    .subscribe((res)=>{
      this.foodItem=res;
      this.totalPrice = this.totalAll();
    })
  }

  public totalAll() {
    this.foodItem.map((value) => {
      this.totalPrice += value.price*value.quantity ;
    })
    return this.totalPrice;
  }

  public orderSelected() {
    alert('Selected items are ordered Successfully!');
    this.foodItem.map((item)=>{
      this.cart.deleteItem(item.id).subscribe(()=>
      {
      this.getFoodItem();
      this.totalPrice = 0;
      this.cart.itemLength();
      })
    })
    
  }

}