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
    component.foodItem=[{
      "id": 4,
      "imageUrl": "/assets/image/poori.jpeg",
      "itemName": "Poori",
      "quantity":1,
      "price": 60
    }];
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
        "variety":"Veg",
        "price": 60,
        "userName":"VINUSHA2002"
      };
    spyOn(service, 'getCart').and.returnValue(of(mockResponse));
    component.getFoodItem();
    expect(component.foodItem).toEqual(mockResponse);
  });

});