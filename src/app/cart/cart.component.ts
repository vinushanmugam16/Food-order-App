import { Component, OnInit } from '@angular/core';
import { CartService } from '../Service/cart.service';
import { Item } from '../model/item';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})

export class CartComponent implements OnInit {

  public food: any=[];
  public cartFoodItem: Object;
  public imageUrl = '/assets/image/emptycart.png';
  constructor(public cart: CartService, private toast: ToastrService) { }

  ngOnInit() {
    this.getFoodItem();
  }

  public getFoodItem() {
    try {
        this.cart.getCartItem().subscribe(
          (res) => {
              this.food = res;
              // console.log('getting items', this.food);
          })
    }
    catch (err) {
      console.error(err);
    }
  }

  public increaseQuantity(item: Item) {
    try {
      this.cart.getCartItem().subscribe((data) => {
        this.cartFoodItem = data;
      });
      item.quantity++;
      this.cart.updateItemQuantity(item.id,item)
        .subscribe(() => {
          this.getFoodItem();
        })
    }
    catch (err) {
      console.error(err);
    }
  }

  public decreaseQuantity(item: Item) {
    try {
      this.cart.getCartItem().subscribe((data) => {
        this.cartFoodItem = data;
      });
      if (item.quantity > 1) {
        item.quantity--;
        this.toast.error('Item has been deleted from Cart')
      }
      else {
        this.removeItem(item.id);
      }
      this.cart.updateItemQuantity(item.id,item)
        .subscribe(() => {
          this.getFoodItem();
        })
    }
    catch (err) {
      console.error(err);
    }
  }

  public removeItem(id: any) {
    try {
      this.cart.deleteCartItem(id).subscribe(() => {
        this.getFoodItem();
        this.cart.itemLength();
        this.toast.error('Item has been deleted from Cart!')
      });
    }
    catch (err) {
      console.error(err);
    }
  }

  public removeAll() {
    try {
      this.cart.deleteAll().subscribe(()=>{
        this.getFoodItem();
        this.toast.error('Cart Items are deleted');
      })
    }
    catch (err) {
      console.error(err);
    }
  }
}