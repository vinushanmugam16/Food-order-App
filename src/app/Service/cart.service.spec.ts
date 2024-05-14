import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { CartService } from "./cart.service";
import { Item } from "../model/item";
import { of } from "rxjs";

describe('CartService', () => {
  let service: CartService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CartService]
    });
    service = TestBed.inject(CartService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should get data from json', () => {
  //   service.getItem().subscribe((items) => {
  //     expect(items).toBeTruthy();
  //   });

  //   const result = httpMock.expectOne('http://localhost:3000/FoodItems');
  //   expect(result.request.method).toBe('GET');
  // });

  // it('should create cart items ', () => {
  //   const items: Item = {
  //     "id": 4,
  //     "imageUrl": "/assets/image/poori.jpeg",
  //     "itemName": "Poori",
  //     "quantity": 1,
  //     "price": 60,
  //     "variety": "veg"
  //   };

  //   service.createCart(items).subscribe(response => {
  //     expect(response).toBeTruthy();
  //   });
  //   const result = httpMock.expectOne('http://localhost:3000/addcart');
  //   expect(result.request.method).toBe('POST');
  //   result.flush({ items });
  // });

  // it('should get cart items from json', () => {
  //   service.getItem().subscribe((items) => {
  //     expect(items).toBeTruthy();
  //   });

  //   const result = httpMock.expectOne('http://localhost:3000/FoodItems');
  //   expect(result.request.method).toBe('GET');
  // });

  // it('should delete cart data from json', () => {
  //   const items: Item = {
  //     "id": 4,
  //     "imageUrl": "/assets/image/poori.jpeg",
  //     "itemName": "Poori",
  //     "quantity": 1,
  //     "price": 60,
  //     "variety": "veg"
  //   };

  //   service.deleteItem(items.id).subscribe((items) => {
  //     expect(items).toBeTruthy();
  //   });

  //   const result = httpMock.expectOne('http://localhost:3000/addcart/' + items.id);
  //   expect(result.request.method).toBe('DELETE');

  // });

  // it('should send a PUT request to the correct URL', () => {
  //   const cart: Item = {
  //     "id": 4,
  //     "imageUrl": "/assets/image/poori.jpeg",
  //     "itemName": "Poori",
  //     "quantity": 1,
  //     "price": 60,
  //     "variety": "veg"
  //   };
  //   const item = cart.id;
  //   service.updateQuantity(item, cart).subscribe((data) => {
  //     expect(data).toBeTruthy();
  //   })

  //   const req = httpMock.expectOne('http://localhost:3000/addcart/' + item);
  //   expect(req.request.method).toBe('PUT');
  //   req.flush({ cart });
  // });

  // it('should get length of the items ', () => {
  //   const mock: Item = {
  //     "id": 4,
  //     "imageUrl": "/assets/image/poori.jpeg",
  //     "itemName": "Poori",
  //     "quantity": 1,
  //     "price": 60,
  //     "variety": "veg"
  //   };
  //   spyOn(service, 'getCart').and.returnValue(of(mock))
  //   service.itemLength();
  //   expect(service.getCart).toHaveBeenCalled();
  // })
})
