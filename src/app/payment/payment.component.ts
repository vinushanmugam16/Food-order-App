import { Component, TemplateRef } from '@angular/core';
import { CartService } from '../Service/cart.service';
import { Item } from '../model/item';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Address } from '../model/address';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  foodItem: Item[];
  food: any
  totalPrice: number = 0;
  showTotal: boolean = false;
  payment: FormGroup;
  address: FormGroup;
  paymentMethod: string;
  cod: boolean = false;
  closeResult: string;
  locateAddress: any;
  location:any;
  setAddress: any

  constructor(private cart: CartService, private toast: ToastrService, private modalService: NgbModal) {}

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
      pincode: new FormControl('', [Validators.required, Validators.pattern("[0-9]{6}")])
    })
  }

  selectPaymentMethod(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.paymentMethod = target.value;
    if (this.paymentMethod === 'gpay' || this.paymentMethod === 'phonepay') {
      this.showTotal = true;
      this.setAddress = `${this.location.street},${this.location.city},${this.location.pincode}`;
    }
    else {
      this.cod = true;
      this.setAddress = `${this.location.street},${this.location.city},${this.location.pincode}`;

    }
  }

  public totalAll() {
    this.cart.getCart()
      .subscribe((resp: any) => {
        this.foodItem = resp;
        this.food = this.foodItem.filter((item: any) => item.userName === sessionStorage.getItem('user'))
        this.totalPrice = this.food.reduce((total: number, food: { price: number; quantity: number; }) => total + (food.price * food.quantity), 0);
      })
  }

  processPayment() {
    this.food.map((item: { id: number }) => {
      this.cart.deleteItem(item.id).subscribe(() => {
        this.totalPrice = 0;
        this.cart.itemLength();
        this.toast.success('Successfully Paid!');
      })
    })
  }


 
  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {

        let streetAddress = this.address.value.street;
        let cityAddress = this.address.value.city;
        let pinAddress = this.address.value.pincode;
        this.closeResult = `Address: ${streetAddress},${cityAddress},${pinAddress} ${result}`;
      }
    );
  }

  gettingAddress() {
    this.cart.getAddress()
      .subscribe((res) => {
        this.locateAddress = res
      })
  }

  onSave() {
    this.cart.createAddress(this.address.value)
      .subscribe((data) => {
        console.log(data);
        this.locateAddress = data;
        this.gettingAddress();
      })
  }

  removeAddress(id: any) {
    this.cart.deleteAddress(id)
      .subscribe(() => {
        this.gettingAddress();
        this.toast.error('Address has been deleted')
      })
  }

  selectedAddress(id: string) {
    this.cart.selectAddress(id)
      .subscribe((result) => {
        // console.log(result);
        this.location=result;
        console.log(this.location);
        
        this.toast.success('Has selected the address for order');
      })
  }
}