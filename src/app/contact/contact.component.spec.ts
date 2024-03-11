import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from '../contact/contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent]
    });
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render text', () => {
    const test = TestBed.createComponent(ContactComponent);
    test.detectChanges();
    const compile = test.nativeElement as HTMLElement;
    expect(compile.querySelector('h3').textContent).toContain('HelpLines');
  })
});
