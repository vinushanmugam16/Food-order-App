import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsComponent } from './items.component';

describe('ItemsComponent', () => {
  let component: ItemsComponent;
  let fixture: ComponentFixture<ItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemsComponent]
    });
    fixture = TestBed.createComponent(ItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should render text', () => {
  //   const test = TestBed.createComponent(ItemsComponent);
  //   test.detectChanges();
  //   const compile = test.nativeElement as HTMLElement;
  //   expect(compile.querySelector('h1')?.textContent).toContain('Food Varieties ');
  // })
});
