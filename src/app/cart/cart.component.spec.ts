// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { CartComponent } from './cart.component';
// import { CartService } from '../Service/cart.service';
// import { of } from 'rxjs';

// describe('CartComponent', () => {
//   let component: CartComponent;
//   let fixture: ComponentFixture<CartComponent>;
//   let myService: jasmine.SpyObj<CartService>;

//   beforeEach(() => {
//     const spy = jasmine.createSpyObj('CartService', ['deleteItem','getCart']);
    
//     TestBed.configureTestingModule({
//       declarations:[CartComponent],
//       providers: [
//         CartService,
//         { provide: CartService, useValue: spy }
//       ]
//   })
//   .compileComponents()
  
//     fixture = TestBed.createComponent(CartComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//     myService = TestBed.inject(CartService)as jasmine.SpyObj<CartService>;
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   // it('should call getFoodItem() on ngOnInit', () => {
//   //   component.ngOnInit();
//   //   expect(myService.getFoodItem).toHaveBeenCalled();
//   // });

//   // it('should set foodItem when getCart returns a value', () => {
//   //   const mockFoodItem = [{
//   //     "id": 4,
//   //     "imageUrl": "/assets/image/poori.jpeg",
//   //     "itemName": "Poori",
//   //     "quantity":1,
//   //     "price": 60
//   //   }];
//   //   myService.getCart.and.returnValue(of(mockFoodItem));

//   //   component.getFoodItem();

//   //   expect(component.foodItem).toEqual(mockFoodItem);
//   // });

//   // it('should remove all items', () => {
//   //   const foodItems = [{ id: 1 }, { id: 2 }, { id: 3 }];
//   //   component.foodItem = foodItems;
//   //   myService.deleteItem.and.returnValue(of(true));
//   //   component.removeAll();
//   //   expect(myService.deleteItem.calls.count()).toBe(foodItems.length);
//   // });

//   // it('should get food items from cart', () => {
//   //   const mockFoodItems = [{ id: 1, name: 'Food 1' }, { id: 2, name: 'Food 2' }]; 
//   //   const cartServiceResponse = of(mockFoodItems);
//   //   myService.getCart.and.returnValue(cartServiceResponse);
//   //   component.getFoodItem();
//   //   expect(component.foodItem).toEqual(mockFoodItems);
//   // });

  
// });