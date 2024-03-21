import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartComponent } from './cart.component';
import { CartService } from '../Service/cart.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Item } from '../model/item';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let service : CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartComponent],
      providers:[CartService],
      imports:[HttpClientTestingModule]
    })

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service=TestBed.inject(CartService);
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getFoodItem method on initialisation', () => {
    spyOn(component,'getFoodItem')
    component.ngOnInit();
    expect(component.getFoodItem).toHaveBeenCalled();
  });

  it('should set foodItem when getFoodItem is called', () => {
    const mockResponse :Item= {
        "id": 4,
        "imageUrl": "/assets/image/poori.jpeg",
        "itemName": "Poori",
        "quantity":1,
        "price": 60
      };
    spyOn(service, 'getCart').and.returnValue(of(mockResponse));
    component.getFoodItem();
    expect(component.foodItem).toEqual(mockResponse);
  });

  it('should call getFoodItem and itemLength when removeItem is called', () => {
    const mockItemId = '1'; 
    spyOn(component, 'getFoodItem');
    spyOn(component.cart, 'itemLength'); 
    spyOn(service, 'deleteItem').and.returnValue(of(null)); 

    component.removeItem(mockItemId);

    expect(service.deleteItem).toHaveBeenCalledWith(mockItemId); 
    expect(component.getFoodItem).toHaveBeenCalled(); 
    expect(component.cart.itemLength).toHaveBeenCalled(); 
  });
});