import { Component } from '@angular/core';
import { CartService } from '../Service/cart.service';
import { Item } from '../model/item';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  foodItem: Item[];
  totalPrice: number = 0;
  showTotal: boolean = false;
  payment: FormGroup;
  paymentMethod: string;
  cod:boolean=false;

  constructor(private cart: CartService, private toast:ToastrService) { }

  ngOnInit() {
    this.totalAll();

    this.payment = new FormGroup({
      paymentOption: new FormControl('', Validators.required),
      upiId: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,4}$/)]),
      address: new FormGroup({
        street: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required, Validators.pattern("([a-zA-Z']+([a-zA-Z']+)*){2,15}")]),
        pincode: new FormControl('', [Validators.required, Validators.pattern("[0-9]{6}")])
      }),
    })
  }

  selectPaymentMethod(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.paymentMethod = target.value;
    if (this.paymentMethod === 'gpay' || this.paymentMethod === 'phonepay') {
      this.showTotal = true;
    }
    else {
      this.cod=true;
    }
  }

  public totalAll() {
    this.cart.getCart()
      .subscribe((resp: any) => {
        this.foodItem = resp;
        this.totalPrice = this.foodItem.reduce((total, food) => total + (food.price * food.quantity), 0);
      })
  }

  processPayment() {
    this.foodItem.map((item: { id: number }) => {
      this.cart.deleteItem(item.id).subscribe(() => {
        this.totalPrice = 0;
        this.cart.itemLength();
        this.toast.success('Successfully Paid!');
      })
    })
  }
}