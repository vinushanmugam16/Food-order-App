import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { User } from '../model/user';
import { Router, RouterModule } from '@angular/router';
import { Loginuser } from '../model/loginuser';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;
  let route: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterModule],
      providers: [UserService, { provide: Router, useValue: {} }],
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
    route = TestBed.inject(Router);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create user data', () => {
    const registerUser: User = {
        "firstname": "Gomathi",
        "lastname": "Thiru",
        "username": "GOMATHI2000",
        "password": "Aspire@123",
        "confirmpassword": "Aspire@123",
        "dob": "2000-09-23",
        "email": "gomathi@gmail.com",
        "phoneNumber": 9876543210,
        "gender": "Female"
      }

    service.createData(registerUser).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const result = httpMock.expectOne('http://localhost:3000/registerdetails');
    expect(result.request.method).toBe('POST');
    result.flush({ registerUser });
  });

  it('should create login data', () => {
    const loginUser: Loginuser = {
      "username": "VINUSHA2024",
      "password": "Vinu@123",
    };

    service.createLogin(loginUser).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const response = httpMock.expectOne('http://localhost:3000/logindetails');
    expect(response.request.method).toBe('POST');
    response.flush({ loginUser });

  });

  it('should return true if user is logged in', () => {
    sessionStorage.setItem('user', 'VINUSHA2024');
    sessionStorage.setItem('password', 'Vinu@123');
    const isLoggedIn = service.login();
    expect(isLoggedIn).toBeTruthy();
  });

  it('should logout', () => {
    spyOn(sessionStorage, 'removeItem');
    service.logout();
    expect(sessionStorage.removeItem).toHaveBeenCalledWith('user');
    expect(sessionStorage.removeItem).toHaveBeenCalledWith('password');
   const spy= spyOn(route, 'navigateByUrl');
    expect(spy).toHaveBeenCalledWith('login');
  });

});