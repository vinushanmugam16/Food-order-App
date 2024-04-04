import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderComponent } from './order.component';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderComponent],
      imports:[HttpClientModule],
      providers:[Router]
    });
    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a text', ()=>{
    const test = TestBed.createComponent(OrderComponent);
    test.detectChanges();
    const compile = test.nativeElement as HTMLElement;
    expect(compile.querySelector('h2')?.textContent).toContain('Checkout');
  })

  it('should render a text', ()=>{
    const test = TestBed.createComponent(OrderComponent);
    test.detectChanges();
    const compile = test.nativeElement as HTMLElement;
    expect(compile.querySelector('h2')?.textContent).toContain('Checkout');
  })
  
  it('should calculate the total price of all items correctly', () => {
    component.foodItem = [
      { price: 40, quantity: 2 },
      { price: 120, quantity: 3 },
      { price: 60, quantity: 1 }
    ];

    const totalPrice = component.totalAll();
    const expectedTotalPrice = (40 * 2) + (120 * 3) + (60 * 1);
    expect(totalPrice).toEqual(expectedTotalPrice);
  });
});

