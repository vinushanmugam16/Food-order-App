import { Component, OnInit } from '@angular/core';
import { AddcartService } from '../Service/addcart.service';
import { Item } from '../model/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
 
})
export class CartComponent implements OnInit{
 

  foodItem:Item[]=[];
  total=0;
  // itemList:Item[]=[]
  imageUrl='/assets/image/emptycart.png'

  
  constructor( private addingtoCart:AddcartService ){}

  ngOnInit(){
    this.addingtoCart.getItemListadd()
    .subscribe((response)=>{
      this.foodItem=response;
      this.total=this.addingtoCart.getTotalPrice();
    })
  }

  removeItem(item:Item){
    this.addingtoCart.removeCartItem(item);
  }
  

}