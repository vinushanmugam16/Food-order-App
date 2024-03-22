import { Component } from '@angular/core';
import { CartService } from '../Service/cart.service';
import { Item } from '../model/item';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  foodItem: Item[];
  totalPrice: number = 0;
  showTotal=false;
  
  paymentMethod: string;
  constructor(private cart: CartService) { }

  ngOnInit() {
     this.totalAll();
  }

  processPayment() {
    alert('Successfully Paid, Order is on the way!', )
  }

  payment :NgForm;
  
  public totalAll() {
    this.cart.getCart()
      .subscribe((resp: any) => {
        this.foodItem = resp;
        console.log(this.foodItem);
        let tot = this.foodItem.map((food) => food.price * food.quantity)
        console.log(tot);
        this.totalPrice = tot.reduce((curr, next) => curr + next);
        console.log('Grandtotal', this.totalPrice);
      })
    return this.totalPrice;
  }


  selectPaymentMethod(event:Event){
    const target = event.target as HTMLSelectElement;
    this.paymentMethod = target.value; 
       if(this.paymentMethod === 'gpay' || this.paymentMethod === 'phonepay' ){
            this.showTotal=true;
       }
       else{
        
        this.showTotal=false;
       }
  }

  submitting(){

  }
}
