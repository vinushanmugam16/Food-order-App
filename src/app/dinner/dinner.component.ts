import { Component } from '@angular/core';

@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.css']
})
export class DinnerComponent {


  dinner=[
    {imageUrl:'/assets/image/dosa.jpeg',
     itemName: 'Dosa',
     price:75},
     {imageUrl:'/assets/image/idly.jpeg',
      itemName:'Idly',
      price:40
     },
     {
      imageUrl:'/assets/image/naan.jpeg',
      itemName:'Butter Naan',
      price:230
     },
     {imageUrl:'/assets/image/paneerbutter.jpeg',
      itemName:'Paneer Butter Masala',
      price:310
     },
     {imageUrl:'/assets/image/dessert.jpeg',
     itemName:'Dessert',
     price:110
    }
   ]
   cartItems=[]

  diningItem(food){
      console.log(this.cartItems.push(food));
  }
}
