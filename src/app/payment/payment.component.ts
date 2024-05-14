import { Component, OnInit, TemplateRef } from '@angular/core';
import { CartService } from '../Service/cart.service';
import { Item } from '../model/item';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Address } from '../model/address';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  private foodItem: Item[];
  public food: Item[];
  public totalPrice: number = 0;
  public showTotal: boolean = false;
  public payment: FormGroup;
  public address: FormGroup;
  private paymentMethod: string;
  public cod: boolean = false;
  public locateAddress: any;
  public setAddress: string;
  public userAddress: Address[];

  constructor(private cart: CartService, private toast: ToastrService, private modalService: NgbModal,
    private route: Router) { }

  ngOnInit() {
    this.gettingAddress();
    this.totalAll();

    this.payment = new FormGroup({
      paymentOption: new FormControl('', Validators.required),
      upiId: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,4}$/)]),
    })

    this.address = new FormGroup({
      street: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required, Validators.pattern("([a-zA-Z']+([a-zA-Z']+)*){2,15}")]),
      pincode: new FormControl('', [Validators.required, Validators.pattern("[0-9]{6}")]),
      userName: new FormControl('')
    })
  }

  public selectPaymentMethod(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.paymentMethod = target.value;
    if (this.paymentMethod === 'gpay' || this.paymentMethod === 'phonepay') {
      this.showTotal = true;
    }
    else {
      this.cod = true;
    }
  }

  public totalAll() {
    try {
      this.cart.getCartItem()
        .subscribe((resp: any) => {
          this.foodItem = resp;
          this.totalPrice = this.foodItem.reduce((total: number, food: { price: number; quantity: number; }) => total + (food.price * food.quantity), 0);
        })
    }
    catch (err) {
      console.error(err);
    }
  }

  public processPayment() {
    this.cart.deleteAll().subscribe(()=>{
        this.cart.itemLength();
        this.toast.success('Successfully Paid!');
        this.route.navigateByUrl('ordered');
      })
  }

  public open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      () => { }
    );
  }

  public gettingAddress() {
    this.cart.getAllAddress()
      .subscribe((res:any) => {
        this.userAddress = res;
      })
  }

  public onSave() {

    const value = {
      street: this.address.get('street')?.value, city: this.address.get('city')?.value, pincode: this.address.get('pincode')?.value,
      userName: sessionStorage.getItem('user')
    };

    this.cart.createAllAddress(value)
      .subscribe(() => {
        this.gettingAddress();
      })
  }

  public addressed(event: Event) {
    const destination = event.target as HTMLSelectElement;
    this.setAddress = destination.value;
    sessionStorage.setItem('address',this.setAddress);
    this.toast.success('Has selected the address for order');
  }
}