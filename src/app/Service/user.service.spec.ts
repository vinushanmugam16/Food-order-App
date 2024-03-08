import { TestBed} from '@angular/core/testing';
import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { Loginuser } from '../model/loginuser';
import { Item } from '../model/item';

describe('UserService', () => {
  let service: UserService;
  let httpMock:HttpTestingController

beforeEach(() => {
  TestBed.configureTestingModule({
        imports:[HttpClientTestingModule],
        providers: [UserService, { provide: Router, useValue: {} }],
        });
  service = TestBed.inject(UserService);
  httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(()=>{
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should create user data', () => {
    const registerUser: User = { 
      "firstname": "Vinu",
      "lastname": "shanmugam",
      "username": "Vinushan",
      "dob": "2024-03-01",
      "email": "vinu@gmail.com",
      "address": {
        "street": "12/61,Sri Sakthi Nagar",
        "city": "Gobi",
        "pincode": 7654322 },
      "phoneNumber": 876543123,
      "gender": "female",
      "country": "India" 
    };

      service.createData(registerUser).subscribe(response => {
        expect(response).toBeTruthy();
      });
  
      const result = httpMock.expectOne('http://localhost:3000/registerdetails');
      expect(result.request.method).toBe('POST');
      result.flush({ registerUser });
    });

  it('should create login data',()=>{
    const loginUser:Loginuser={
        "username": "VINUSHA2024",
        "password": "Vinu@123",
      };

    service.createLogin(loginUser).subscribe(response => {
    expect(response).toBeTruthy();
    });

    const response= httpMock.expectOne('http://localhost:3000/logindetails');
    expect(response.request.method).toBe('POST');
    response.flush({loginUser});
      
    });

    it('should create cart items ',()=>{
      const items:Item={
          "id": 4,
          "imageUrl": "/assets/image/poori.jpeg",
          "itemName": "Poori",
          "price": 60
      };

      service.createCart(items).subscribe(response=>{
        expect(response).toBeTruthy();
      });
      const result = httpMock.expectOne('http://localhost:3000/addcart');
      expect(result.request.method).toBe('POST');
      result.flush({items});
    });
    
    it('should get username by user details',()=>{
      const username:User={
        "firstname": "Vinu",
        "lastname": "shanmugam",
        "username": "Vinushan",
        "dob": "2024-03-01",
        "email": "vinu@gmail.com",
        "address": {
          "street": "12/61,Sri Sakthi Nagar",
          "city": "Gobi",
          "pincode": 7654322 },
        "phoneNumber": 876543123,
        "gender": "female",
        "country": "India" 
      }

      service.getUsername(username).subscribe(response=>{
        expect(response).toBeTruthy;
      })
      const result = httpMock.expectOne('http://localhost:3000/registerdetails');
      expect(result.request.method).toBe('GET');
      result.flush({username});
    })
    it('should return true if user is logged in', () => {
      sessionStorage.setItem('user', 'VINUSHA2024');
      const isLoggedIn = service.login();
      expect(isLoggedIn).toBe(true);
    });
});
