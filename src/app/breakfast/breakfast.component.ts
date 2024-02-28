import { Component } from '@angular/core';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent {

  idlyimage='/assets/image/idly.jpeg'
  dosaimage='/assets/image/dosa.jpeg'
  venpongalimage='/assets/image/venpongal.jpeg'

  count=0;
  increaseCount(){
    this.count++;
  }
  decreaseCount(){
    this.count--;
  }

  idlyPrice=30;
  dosaPrice=75;  
  pongalPrice=60;
 

  addingCart(){
    alert('Successfully Added to cart');
  }

}
