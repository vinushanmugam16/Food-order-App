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

  public cartItem: any = [];
  private foodItem: any = [];
  public pageSize: number = 10;
  public searchFood: string;
  public pageNumber: number = 1;
  public filteredItems: Item[];
  public totalItems: number;
  public selectingOption: string;
  public vegCount: number = 0;
  public nonvegCount: number = 0;
  public dessertCount: number = 0;
  public filterUser: any = [];

  constructor(private cartList: CartService, private toast: ToastrService) { }

  ngOnInit() {
    try {
      this.cartList.getItemDisplay()
        .subscribe((response: any) => {
          this.cartItem = response.items;
          this.filteredItems = this.cartItem;
          this.vegCount = response.vegCount;
          this.nonvegCount = response.nonvegCount;
          this.dessertCount = response.dessertCount;
        })
    }
    catch (err) {
      console.error(`Error:${err}`);
    }
  }

  public addingTocart(item: any) {
    this.cartList.getCartItem().subscribe((data: any) => {
      this.foodItem = data
      const foundItem = this.foodItem.find((food: { itemName: string; }) =>
        food.itemName === item.itemName
      )
      if (!foundItem) {

        this.cartList.createCartItem(item).subscribe(() => {
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

  public filterItems() {
    if (!this.searchFood && !this.selectingOption) {
      this.filteredItems = this.cartItem;
    }
    else {
      let itemFiltered = this.cartItem;

      if (this.selectingOption) {
        itemFiltered = itemFiltered.filter((item: { variety: string; }) =>
          item.variety.toLowerCase().includes(this.selectingOption.toLowerCase())
        );
      }
      if (this.searchFood) {
        itemFiltered = itemFiltered.filter((item: { itemName: string; price: { toString: () => string; }; }) =>
          item.itemName.toLowerCase().includes(this.searchFood.toLowerCase()) ||
          item.price.toString().includes(this.searchFood.toLowerCase())
        );
      }
      this.filteredItems = itemFiltered;
    }
    this.totalItems = this.filteredItems.length;
  }

  public selectOption(event: Event) {
    const key = event.target as HTMLSelectElement;
    this.selectingOption = key.value;
    this.filterItems();
  }
}