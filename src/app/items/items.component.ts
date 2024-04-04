import { Component, OnInit } from '@angular/core';
import { CartService } from '../Service/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],

})
export class ItemsComponent implements OnInit {

  public cartItem: any = [];
  public userdata: any;
  public cartAdd = [];
  private foodItem: any[];
  public pageSize = 10;
  public totalItems=20;
  public searchFood: string;
  public pageNumber: number = 1;

  constructor(private cartList: CartService, private toast: ToastrService) {}

  ngOnInit() {
    try {
      this.cartList.getItem()
        .subscribe(response => {
          this.cartItem = response;
        })
    }
    catch (err) {
      console.error(`Error:${err}`);
    }
  }

  public addingTocart(item: any) {
    const userName = sessionStorage.getItem('user');
    item.userName = userName;

    this.cartList.getCart().subscribe((data: any) => {
      this.foodItem = data.filter((cartFood: { userName: string | null; }) => cartFood.userName === userName);

      if (this.foodItem.find((val) => val.userName === userName)) {
        const food = this.foodItem
      }

      const foundItem = this.foodItem.find((food: { itemName: string; }) =>
        food.itemName === item.itemName
      )
      if (!foundItem) {
        this.cartList.createCart(item).subscribe(() => {
          this.cartList.itemLength();
          this.toast.success('Item added to cart!');
        })
      }
      else {
        this.toast.info('Item already added to cart!');
        this.cartList.itemLength();
      }
    })
  }
}