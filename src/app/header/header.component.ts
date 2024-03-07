import { Component, OnInit } from '@angular/core';
import { AddcartService } from '../Service/addcart.service';
import { UserService } from '../Service/user.service';
// import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  today = Date.now();
  totalItem=0;
  constructor(private addCart:AddcartService,
              public user:UserService ){}

  ngOnInit(){
    this.addCart.getItemListadd()
    .subscribe(response=>{
        this.totalItem=response.length;
    })

      // this.addCart.removeCartItem(id)
    


  }

  logoutPage(){
    this.user.logout();
  } 


}
