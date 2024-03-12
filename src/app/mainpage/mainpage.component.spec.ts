import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainpageComponent } from './mainpage.component';

describe('MainpageComponent', () => {
  let component: MainpageComponent;
  let fixture: ComponentFixture<MainpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainpageComponent]
    });
    fixture = TestBed.createComponent(MainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a text', () => {
    const test = TestBed.createComponent(MainpageComponent);
    test.detectChanges();
    const compile = test.nativeElement as HTMLElement;
    expect(compile.querySelector('h2').textContent).toContain('We invite you for our Food zone');
  });

  it('should render a text', () => {
    const test = TestBed.createComponent(MainpageComponent);
    test.detectChanges();
    const compile = test.nativeElement as HTMLElement;
    expect(compile.querySelector('button').textContent).toContain('Start Ordering Food');
  });

  it('should render a text', () => {
    const test = TestBed.createComponent(MainpageComponent);
    test.detectChanges();
    const compile = test.nativeElement as HTMLElement;
    expect(compile.querySelector('i').textContent).toContain('Delicious varieties of food');
  });

});
