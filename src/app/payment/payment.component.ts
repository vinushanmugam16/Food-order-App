import { Component, TemplateRef } from '@angular/core';
import { CartService } from '../Service/cart.service';
import { Item } from '../model/item';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

//   public payment: FormGroup;
//   public address: FormGroup;
//   public foodItem: Item[];
//   public food: any
//   public totalPrice: number = 0;
//   public showTotal: boolean = false;
//   private paymentMethod: string;
//   public cod: boolean = false;
//   closeResult: string;
//   private locateAddress: any;
//   private location: any;
//   public setAddress: string;
//   public userAddress: any;
//   public orderId: string;
//   public selectValue: string;
//   public ordering:boolean=false;
//   // public selectAdd:any
//   // setlocate:any
//   constructor(private cart: CartService, private toast: ToastrService, private modalService: NgbModal, private route: Router) { }

//   ngOnInit() {

//     this.gettingAddress();
//     this.totalAll();

//     this.payment = new FormGroup({
//       paymentOption: new FormControl('', Validators.required),
//       upiId: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,4}$/)]),
//     })

//     this.address = new FormGroup({
//       street: new FormControl('', [Validators.required]),
//       city: new FormControl('', [Validators.required, Validators.pattern("([a-zA-Z']+([a-zA-Z']+)*){2,15}")]),
//       pincode: new FormControl('', [Validators.required, Validators.pattern("[0-9]{6}")]),
//       userName: new FormControl(''),
//       // addr:new FormControl('')
//     })
//   }

//   onAddressChange(): void {
//     // this.selectAdd = this.address.get('addr')?.value;
//     // this.setlocate=`${this.selectAdd.street},${this.selectAdd.city},${this.selectAdd.pincode}`
//   }

//   selectPaymentMethod(event: Event) {
//     const target = event.target as HTMLSelectElement;
//     this.paymentMethod = target.value;
//       if (this.paymentMethod === 'gpay' || this.paymentMethod === 'phonepay') {
//         this.showTotal = true;
//         this.setAddress = `${this.location.street},${this.location.city},${this.location.pincode}`;
//       }
//       else {
//         this.cod = true;
//         this.setAddress = `${this.location.street},${this.location.city},${this.location.pincode}`;
//       }
//   }

//   public totalAll() {
//     try{
//       this.cart.getCart()
//       .subscribe((resp: any) => {
//         this.foodItem = resp;
//         this.food = this.foodItem.filter((item: any) => item.userName === sessionStorage.getItem('user'))
//         this.totalPrice = this.food.reduce((total: number, food: { price: number; quantity: number; }) => total + (food.price * food.quantity), 0);
//       })
//     }
//     catch(err){
//       console.error(err);
//     }
//   }

//   processPayment() {

  
//     // this.route.navigateByUrl('ordered');
//     this.food.map((item: { id: number }) => {
//       this.cart.deleteItem(item.id).subscribe(() => {
//         this.totalPrice = 0;
//         this.cart.itemLength();
//         this.toast.success('Successfully Paid!');
//         this.orderId = this.cart.generateOrderId();    

//       })
//     })
    
//     // this.food.map((item: { id: number }) => {
//     //   this.cart.deleteItem(item.id).subscribe(() => {
//     //     this.totalPrice = 0;
//     //     this.cart.itemLength();
//     //     this.orderId = this.cart.generateOrderId();    

//     //     this.toast.success('Successfully Paid!');
//     // })
//     // })
//   }

//   open(content: TemplateRef<any>) {
//     this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
//       (result) => {

//         let streetAddress = this.address.value.street;
//         let cityAddress = this.address.value.city;
//         let pinAddress = this.address.value.pincode;
//         this.closeResult = `Address: ${streetAddress},${cityAddress},${pinAddress} ${result}`;
//       }
//     );
//   }

//   gettingAddress() {
//     this.cart.getAddress()
//       .subscribe((res) => {
//         this.locateAddress = res;
//         const storeUser = sessionStorage.getItem('user');
//         this.locateAddress.userName = storeUser;
//         this.userAddress = this.locateAddress.filter((val: { userName: string | null; }) => val.userName === storeUser);
//       })
//   }

//   onSave() {

//     const value = {
//       street: this.address.get('street')?.value, city: this.address.get('city')?.value, pincode: this.address.get('pincode')?.value,
//       userName: sessionStorage.getItem('user')
//     };

//     this.cart.createAddress(value)
//       .subscribe(() => {
//         this.gettingAddress();
//       })
//   }

//   removeAddress(id: any) {
//     this.cart.deleteAddress(id)
//       .subscribe(() => {
//         this.gettingAddress();
//         this.toast.error('Address has been deleted')
//       })
//   }

//   selectedAddress(id: string) {
//     this.cart.selectAddress(id)
//       .subscribe((result) => {
//         this.location = result;
//         this.toast.success('Has selected the address for order');
//       })
//   }





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
location: any;
setAddress: any;
userAddress: any;
orderId: string;

constructor(private cart: CartService, private toast: ToastrService, private modalService: NgbModal) { }

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
    userName: new FormControl(''),
    setAddress:new FormControl('')
  })
    // this.setAddress = `${this.location.street},${this.location.city},${this.location.pincode}`;

}
// const loc=  this.address.get('setAddress')?.value

selectPaymentMethod(event: Event) {
  const target = event.target as HTMLSelectElement;
  this.paymentMethod = target.value;
  if (this.paymentMethod === 'gpay' || this.paymentMethod === 'phonepay') {
    this.showTotal = true;
    // this.setAddress = `${this.location.street},${this.location.city},${this.location.pincode}`;
  }
  else {
    this.cod = true;
    // this.setAddress = `${this.location.street},${this.location.city},${this.location.pincode}`;
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
 
  this.totalPrice = 0;
  this.cart.itemLength();
  this.toast.success('Successfully Paid!');
  this.orderId = this.cart.generateOrderId(); 
  
  this.food.map((item: { id: number }) => {
    this.cart.deleteItem(item.id).subscribe(() => {
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
    .subscribe((res: any) => {
      this.locateAddress = res;
      const storeUser = sessionStorage.getItem('user');
      this.locateAddress.userName = storeUser;
      this.userAddress = this.locateAddress.filter((val: { userName: string | null; }) => val.userName === storeUser);
    })
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
      this.location = result;
      this.toast.success('Has selected the address for order');
    })
}
 
addressed(event:Event){
  const destination = event.target as HTMLSelectElement;
  this.setAddress=destination.value
}

}