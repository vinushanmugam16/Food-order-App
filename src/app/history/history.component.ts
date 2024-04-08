import { Component, OnInit } from '@angular/core';
import { CartService } from '../Service/cart.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  public orderedHistory: any = [];
  public userName: string | null;
  public itemLength: number;
  public totalPrice: number;
  public orderId: string;
  public address:string|null;
  constructor(private cart: CartService) { }

  ngOnInit() {
  
    const savedHistory: any = sessionStorage.getItem('history');

    this.orderedHistory = JSON.parse(savedHistory);
    // console.log(this.orderedHistory);

    if(Array.isArray(this.orderedHistory)){
      this.itemLength = this.orderedHistory.length;
      console.log(this.itemLength);
    }
    else{
      console.log('not an array');
    }

    this.userName = sessionStorage.getItem('user');
    const total: any = sessionStorage.getItem('total')
    this.totalPrice = JSON.parse(total);
    this.address=sessionStorage.getItem('address');
    this.orderId = this.cart.generateOrderId();
  }

}
