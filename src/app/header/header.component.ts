import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../Service/user.service';
import { TranslateService } from '@ngx-translate/core';
import { CartService } from '../Service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy, OnInit {

  public cartLength: number;
  public userName: string | null;

  constructor(public cart: CartService,
    public user: UserService,
    public translate: TranslateService,
    private route:Router) { }

  ngOnInit() {
    this.userName = sessionStorage.getItem('user');
    this.translate.addLangs(['en', 'fr']);
    this.translate.setDefaultLang('en');
  }

  ngOnDestroy() {
    this.logoutPage();
  }

  public updateProfile(){
    this.route.navigateByUrl('profile');
  }

  public logoutPage() {
    this.cart.itemLength();
    this.user.logout();
  }

  public switchLang(lang: string) {
    this.translate.use(lang)
  }
}