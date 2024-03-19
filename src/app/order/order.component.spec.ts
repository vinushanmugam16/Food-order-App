import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderComponent } from './order.component';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderComponent]
    });
    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should render text', () => {
  //   const test = TestBed.createComponent(OrderComponent);
  //   test.detectChanges();
  //   const compile = test.nativeElement as HTMLElement;
  //   expect(compile.querySelector('h2').textContent).toContain('Checkout');
  // })

});
