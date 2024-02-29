import { Component } from '@angular/core';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent {

  lunch=[
    {imageUrl:'/assets/image/curdrice.jpeg',
     itemName: 'Curdrice',
     price:45},
     {imageUrl:'/assets/image/friedrice.jpeg',
      itemName:'Chicken Fried Rice',
      price:120
     },
     {
      imageUrl:'/assets/image/mushroombriyani.jpeg',
      itemName:'Mushroom Briyani',
      price:230
     },
     {imageUrl:'/assets/image/sambar.jpeg',
      itemName:'Sambar',
      price:80
     }
   ]

   cartItems=[];

   addLunchItem(dish){
    console.log(this.cartItems.push(dish));

   }
  
}
