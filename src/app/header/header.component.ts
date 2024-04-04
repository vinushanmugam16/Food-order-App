import { Component, OnDestroy, TemplateRef } from '@angular/core';
import { UserService } from '../Service/user.service';
import { TranslateService } from '@ngx-translate/core';
import { CartService } from '../Service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {

  public cartLength: number;
  public address: any;
  public locateAddress: any;
  public userAddress: any;
  public setAddress: any;

  constructor(public cart: CartService,
    public user: UserService,
    public translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en')
  }

  userName = sessionStorage.getItem('user');

  public logoutPage() {
    this.user.logout();
  }

  ngOnDestroy() {
    this.logoutPage();
  }

  public switchLang(lang: string) {
    this.translate.use(lang)
  }
}
