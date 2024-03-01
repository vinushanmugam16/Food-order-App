import { Component } from '@angular/core';
import { AddcartService } from '../Service/addcart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  today = Date.now();
  totalItem=0;

  constructor(private addCart:AddcartService){}
  ngOnInit(){
    this.addCart.getItemListadd()
    .subscribe(response=>{
        this.totalItem=response.length
    })
  }

  
}
