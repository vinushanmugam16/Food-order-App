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

  public foodItem: any;
  public food:any;
  public cartfoodItem: Object;
  public imageUrl = '/assets/image/emptycart.png';
  constructor(public cart: CartService, private toast:ToastrService) { }

  ngOnInit() {
    this.getFoodItem();
  }

  public getFoodItem() {
    try{
      this.cart.getCart()
      .subscribe((res) => {
        this.foodItem = res;
        this.food=this.foodItem.filter((item:any)=>item.userName === sessionStorage.getItem('user'))
      })
    }
    catch(err){
      console.error(err);
    }
  
  }

  public increaseQuantity(item: Item) {
    this.cart.getCart().subscribe((data) => {
      this.cartfoodItem = data;
    });
    item.quantity++;
    this.cart.updateQuantity(item.id, item)
      .subscribe(() => {
        this.getFoodItem();
      })
  }

  public decreaseQuantity(item: Item) {
    this.cart.getCart().subscribe((data) => {
      this.cartfoodItem = data;
    });
    if (item.quantity > 1) {
      item.quantity--;
      this.toast.error('Item has been deleted from Cart')
    }
    else {
      this.removeItem(item.id);
    }
    this.cart.updateQuantity(item.id, item)
      .subscribe(() => {
        this.getFoodItem();
      })
  }

  public removeItem(id:any) {
    this.cart.deleteItem(id).subscribe(() => {
      this.getFoodItem();
      this.cart.itemLength();
      this.toast.error('Item has been deleted from Cart!')
    });
  }

  public removeAll() {
    this.food.map((item: { id: number; }) => {
      this.cart.deleteItem(item.id).subscribe(() => {
        this.getFoodItem();
        this.toast.error('Cart Items are deleted');
      })
    })
  }
}



