import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing"
import { CartService } from "./cart.service";


describe('CartService',()=>{
   let service:CartService;
   let httpMock:HttpTestingController;

   
    beforeEach(()=>{
        TestBed.configureTestingModule({
        imports:[HttpClientTestingModule],
        providers:[CartService]
    });
         service=TestBed.inject(CartService);
         httpMock=TestBed.inject(HttpTestingController); 
        });
    // afterEach(()=>{
    //     httpMock.verify();
    // });

    it('should be created',()=>{
        expect(service).toBeTruthy();
    });

    it('should get data from json',()=>{ 
        
        service.getItem().subscribe((items)=>{
            expect(items).toBeTruthy();

        })
    
        // const result=httpMock.expectOne('http://localhost:3000/FoodItems');
        // expect(result.request.method).toBe('GET');
        // result.flush();
    })

   })