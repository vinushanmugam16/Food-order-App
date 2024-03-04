import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item';
import { AddcartService } from '../Service/addcart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {


  foodItem:Item[]=[];
  total=0;

  constructor( private addingtoCart:AddcartService ){}

  ngOnInit(){
    this.addingtoCart.getItemListadd()
    .subscribe((response)=>{
      this.foodItem=response;
      // this.total=this.addingtoCart.getTotalPrice();
    })
  }
  
  getTotal(){
    this.total=this.addingtoCart.getTotalPrice();
  }

  orderSelected(){
    alert('Selected items are ordered Successfully!');
  }
   
}
