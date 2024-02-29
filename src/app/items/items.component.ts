import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
 
})
export class ItemsComponent implements OnInit{

 @Input() breakfastItems=[];
 @Output() addItem=new EventEmitter();
 addingCart(item){
   this.addItem.emit(item);
 }


 @Input() lunchItems=[];
 @Output() addlunchItem=new EventEmitter();
 addLunchItem(dish){
    this.addlunchItem.emit(dish);
 }
 
 @Input() dinnerItems=[];
 @Output() addDinnerItem=new EventEmitter();
 dinnerItem(food){
  this.addDinnerItem.emit(food)
 }
 
 // items=[];
  ngOnInit(){
    // this.items=this.itemdata.getBreakfast();
  }

  

}
