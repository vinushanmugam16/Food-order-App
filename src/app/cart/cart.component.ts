import { Component, OnInit } from '@angular/core';
import { BreakfastComponent } from '../breakfast/breakfast.component';
import { AddcartService } from '../Service/addcart.service';
import { Item } from '../model/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
 
})
export class CartComponent implements OnInit{
 

  foodItem=[];
  total:number=0;
  itemList:Item=[]
  imageUrl='/assets/image/emptycart.png'

  
  constructor( private addingtoCart:AddcartService ){}

  ngOnInit(){
    this.addingtoCart.getItemListadd()
    .subscribe((response)=>{
      this.foodItem=response;
      this.total=this.addingtoCart.getTotalPrice();
    })
  }

  fetchItem(){
      // this.cartItem.getItem()
      // .subscribe((response)=>
      // this.itemList=response)
  }
   
  deleteItem(){

  }
 

}