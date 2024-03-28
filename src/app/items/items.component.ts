import { Component, OnInit } from '@angular/core';
import { CartService } from '../Service/cart.service';
import { Item } from '../model/item';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],

})
export class ItemsComponent implements OnInit {

  public cartItem: any=[];
  public userdata: any;
  public cartAdd = [];
  foodItem: any;
  itemper = 10;
  searchFood: any='';
  pageNumber: number = 1;
  filterItems: any=[];
  constructor(private cartList: CartService, private toast: ToastrService) { }

  ngOnInit() {
    try {
      this.cartList.getItem()
        .subscribe(response => {
          this.cartItem = response;
          // this.filterItems=[...this.cartItem]
        })
    }
    catch (err) {
      this.cartItem = 'Items not added !'
    }


  }

  public addingTocart(item: Item) {

    const userName = sessionStorage.getItem('user')
    item.userName = userName;
    console.log(userName);

    this.cartList.getCart().subscribe((data: any) => {
      this.foodItem = data.filter((foodItem: any) => foodItem.userName === userName);
      // const name = data.userName;
      // console.log('Name:',name);

      if (this.foodItem.find((item: any) => item.userName === userName)) {

        // const food = this.foodItem.filter((item:any)=>item.userName === userName);
        // console.log('userfoood',food);
        const food = this.foodItem
        console.log(food);
      }

      console.log('FoodItem', this.foodItem);

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

  onSearch(event: Event) {
    // this.cartList.getItem()
    // .pipe(map(items=>{
    //   items.
    // }))
    const inputElement = event.target as HTMLInputElement;
    let response = inputElement.value;
    console.log('input', response);
    // console.log(this.cartItem);

    this.filterItems = this.cartItem.filter((item: any) => {
      // console.log(item);
       item.itemName.toLowerCase().includes(response.toLowerCase());
    });
    console.log(this.filterItems)




  }

}


