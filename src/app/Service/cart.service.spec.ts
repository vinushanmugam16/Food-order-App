import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"
import { CartService } from "./cart.service";
import { Item } from "../model/item";

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

    it('should get data from json', () => {
        service.getItem().subscribe((items) => {
            expect(items).toBeTruthy();
        });

        const result = httpMock.expectOne('http://localhost:3000/FoodItems');
        expect(result.request.method).toBe('GET');
    });

    it('should create cart items ', () => {
    const items: Item = {
      "id": 4,
      "imageUrl": "/assets/image/poori.jpeg",
      "itemName": "Poori",
      "quantity":1,
      "price": 60
    };

    service.createCart(items).subscribe(response => {
      expect(response).toBeTruthy();
    });
    const result = httpMock.expectOne('http://localhost:3000/addcart');
    expect(result.request.method).toBe('POST');
    result.flush({ items });
  });

  it('should get cart data from json', () => {
    service.getItem().subscribe((items) => {
        expect(items).toBeTruthy();
    });

    const result = httpMock.expectOne('http://localhost:3000/addcart');
    expect(result.request.method).toBe('GET');
  });

  it('should delete cart data from json', () => {
    const items: Item = {
        "id": 4,
        "imageUrl": "/assets/image/poori.jpeg",
        "itemName": "Poori",
        "quantity":1,
        "price": 60
      };

    service.deleteItem(items.id).subscribe((items) => {
        expect(items).toBeTruthy();
    });

    const result = httpMock.expectOne('http://localhost:3000/addcart');
    expect(result.request.method).toBe('DELETE');
  });

  it('should send a DELETE request to the correct URL', () => {
    service.deleteAll();
    
    const req = httpMock.expectOne(service.cartUrl);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
})