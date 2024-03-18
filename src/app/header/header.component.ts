import { Component, OnInit } from '@angular/core';
import { AddcartService } from '../Service/addcart.service';
import { UserService } from '../Service/user.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public today = Date.now();
  public totalItem = 0;
  constructor(private addCart: AddcartService,
    public user: UserService, public translate:TranslateService) {
      translate.addLangs(['en','fr']);
      translate.setDefaultLang('en')
     }

  
  ngOnInit() {
    this.addCart.getItemListadd()
      .subscribe(response => {
        this.totalItem = response.length;
      })
  }

  public logoutPage() {
    this.user.logout();
  }

  public switchLang(lang:string){
    this.translate.use(lang)
  }
}
