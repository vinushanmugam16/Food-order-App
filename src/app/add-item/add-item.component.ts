import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {

  @Input() addItemtoCart:any[];
  @Output() itemAdded =new EventEmitter();
  addingCart(item){
    this.itemAdded.emit(item)
  }
}
