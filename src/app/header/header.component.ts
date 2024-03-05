import { Component, OnInit } from '@angular/core';
import { AddcartService } from '../Service/addcart.service';
import { Router } from '@angular/router';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  today = Date.now();
  totalItem=0;
  log=false;
  constructor(private addCart:AddcartService,
              private route:Router ,private user:UserService){}
  ngOnInit(){
    this.addCart.getItemListadd()
    .subscribe(response=>{
        this.totalItem=response.length;
    })
  }

  loginPage(){
    this.log=true;
      this.user.login();
  }

  logoutPage(){
      this.user.logout()
      
   }


}
