import { Component, OnInit } from '@angular/core';
import { CartService } from '../Service/cart.service';
import { ToastrService } from 'ngx-toastr';
import { Item } from '../model/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],

})
export class ItemsComponent implements OnInit {

  public cartItem:any=[];
  private foodItem: any[];
  public pageSize = 10;
  public searchFood: string;
  public pageNumber: number = 1;
  public filteredItems: Item[];
  public totalItems: number;
  public selectingOption:string

  constructor(private cartList: CartService, private toast: ToastrService) {
  }

  ngOnInit() {
    try {
      this.cartList.getItem()
        .subscribe(response => {
          this.cartItem = response;
          this.filteredItems = this.cartItem;
        })
    }
    catch (err) {
      console.error(`Error:${err}`);
    }
  }

  public addingTocart(item: any) {
    const userName = sessionStorage.getItem('user');
    item.userName = userName;

    this.cartList.getCart().subscribe((data:any) => {
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

      // sessionStorage.setItem('history',JSON.stringify(this.foodItem));
    })
  }

  filterItems() {
    if (!this.searchFood) {
      this.filteredItems = this.cartItem;
    }
    else {
      this.filteredItems = this.cartItem.filter((item: { itemName: string; price: number; variety: string }) =>
        item.itemName.toLowerCase().includes(this.searchFood.toLowerCase()) ||
        item.price.toString().includes(this.searchFood.toLowerCase()) ||
        item.variety.toLowerCase().includes(this.searchFood.toLowerCase())
      );
      this.totalItems=this.filteredItems.length;
    }
  }

  // selectOption(event:Event){
  //   const key=event.target as HTMLSelectElement;
  //   this.selectingOption=key.value;
  // }
}