import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent {
  

  constructor(private route:Router){}

 breakfast=[
  {imageUrl:'/assets/image/idly.jpeg',
   itemName: 'Idly',
   price:35},
   {imageUrl:'/assets/image/dosa.jpeg',
    itemName:'Dosa',
    price:75
   },
   {
    imageUrl:'/assets/image/venpongal.jpeg',
    itemName:'Venpongal',
    price:50
   },
   {imageUrl:'/assets/image/poori.jpeg',
    itemName:'Poori',
    price:60
   }
 ]

 cartItemList=[];


addingCart(item){
 console.log( this.cartItemList.push(item));
  // this.cartItemList.push(item);
  // alert('Successfully Added to cart');
  // this.route.navigate['Cart'];
}



}
