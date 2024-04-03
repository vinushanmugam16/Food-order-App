import { Component, OnDestroy, TemplateRef } from '@angular/core';
import { UserService } from '../Service/user.service';
import { TranslateService } from '@ngx-translate/core';
import { CartService } from '../Service/cart.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {

  public cartLength:number;
 public address:any;
  locateAddress: any;
  userAddress: any;
setAddress: any;
  constructor(public cart: CartService,
    public user: UserService,
    public translate: TranslateService, private modalService:NgbModal) 
  {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en')
  }

  userName=sessionStorage.getItem('user');
  
  public logoutPage() {
    this.user.logout();
  }

  ngOnDestroy(){
    this.logoutPage();
  }
  // profile() {
  //   this.logoutPage();
  // }

  public switchLang(lang: string) {
    this.translate.use(lang)
  }

  ngOnInit(){
    // this.address = new FormGroup({
    //   street: new FormControl('', [Validators.required]),
    //   city: new FormControl('', [Validators.required, Validators.pattern("([a-zA-Z']+([a-zA-Z']+)*){2,15}")]),
    //   pincode: new FormControl('', [Validators.required, Validators.pattern("[0-9]{6}")]),
    //   userName: new FormControl('')
    // })
    // this.cartLength=
  }

  onSave() {

    const value = {
      street: this.address.get('street')?.value, city: this.address.get('city')?.value, pincode: this.address.get('pincode')?.value,
      userName: sessionStorage.getItem('user')
    };
  
    this.cart.createAddress(value)
      .subscribe(() => {
        this.gettingAddress();
      })
  }

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
  
        let streetAddress = this.address.value.street;
        let cityAddress = this.address.value.city;
        let pinAddress = this.address.value.pincode;
        // this.closeResult = `Address: ${streetAddress},${cityAddress},${pinAddress} ${result}`;
      }
    );
  }

  gettingAddress() {
    this.cart.getAddress()
      .subscribe((res: any) => {
        this.locateAddress = res;
        const storeUser = sessionStorage.getItem('user');
        this.locateAddress.userName = storeUser;
        this.userAddress = this.locateAddress.filter((val: { userName: string | null; }) => val.userName === storeUser);
      })
  }

  addressed(event:Event){
    const destination = event.target as HTMLSelectElement;
    this.setAddress=destination.value
  }
}
