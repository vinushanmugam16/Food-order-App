import { Component, OnInit } from '@angular/core';
import { CartService } from '../Service/cart.service';
import { Item } from '../model/item';
import { ToastrService } from 'ngx-toastr';
import { User } from '../model/user';
import { map } from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],

})
export class ItemsComponent implements OnInit {

  public cartItem: any;
  public userdata:any;
  public cartAdd=[];
  foodItem:Item;
  constructor(private cartList: CartService ,private toast:ToastrService) { }

  ngOnInit() {
    try{
      this.cartList.getItem()
      .subscribe(response => {
        this.cartItem = response;
      })
    }
    catch(err){
      this.cartItem='Items not added !'
    }
  
  }

  public addingTocart(item: User) {
    // this.cartList.getCart().subscribe((data: any) => {
    //   const foodItem = data;
    //   const foundItem = foodItem.find((food: { itemName: string; }) =>
    //     food.itemName === item.itemName
    //   )
    //   if (!foundItem) {
    //     this.cartList.createCart(item).subscribe(() => {
    //       this.cartList.itemLength();
    //       this.toast.success('Item added to cart!');
    //     })
    //   }
    //   else{
    //     this.toast.info('Item already added to cart!');
    //   }
    // })

    // const currentUser=sessionStorage.getItem('user');
    // this.cartList.gettingItems().subscribe((items)=>{
    //   const foodItem=items;
    //   console.log('detaisss',foodItem);
     
    //   if(Array.isArray(foodItem)){
    //  const found= foodItem.filter((name)=>name.username===item.username)

    //   this.userdata=found;

    //   console.log('iuytrdfghjk',found);
      

    //   }
      
    // })
    // this.cartList.gettingItems().subscribe((items)=>{
    //   const foodItem=items;
    //   // items.addtoCart
    //   // console.log('Cart',items);
  // })
      // console.log('Itemss',foodItem);



      


      const currentUser=sessionStorage.getItem('user');
      console.log(sessionStorage.getItem('user'));


      this.cartList.getUserData(currentUser).subscribe((data)=>{
         this.userdata=data;
         console.log('Stored items',item);
         console.log( 'userdata',this.userdata);
         
        //  console.log(`dfghjkk........`,this.userdata[0].addtoCart);

         
        const merge=this.userdata[0].addtoCart.push(item);
         console.log(`cartt`,this.userdata[0].addtoCart);

         this.cartList.updateCart(this.userdata[0].id,this.userdata)
         .subscribe((data)=>{
          console.log('updatee',data);
         })






        //  this.cartList.createCartItems(this.userdata[0].addtoCart)
        //   .subscribe((data)=>{
        //     console.log(data);
            
        //   })
         
      //    this.cartAdd.push()
      // //  this.cartAdd =  this.userdata.addtoCart
      //    console.log('Adding to cart',this.cartAdd);
         
      //    this.cartList.createCartItems(this.cartAdd)
      //    .subscribe((item: any)=>{
      //       console.log('helllooo',item);
      //    })
      })



      // if(currentUser){
      //   this.cartList.gettingItems().subscribe((items)=>{
      //       const user=items;
      //       console.log('Details of current  user',user);
            
      //   })
      // }


      // if(currentUser){
       
      // }
        
     

      // const foundItem= 
    

    // this.cartList.createCartItems(item).subscribe((items)=>{
    //   console.log('Items added',items);
    // })




  }

  onSearch(){
    // this.cartList.getItem()
    // .pipe(map(items=>{
    //   items.
    // }))
  }

}

