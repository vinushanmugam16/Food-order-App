import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainpageComponent } from './mainpage.component';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

describe('MainpageComponent', () => {
  let component: MainpageComponent;
  let fixture: ComponentFixture<MainpageComponent>;
  let translate: TranslateService;

  beforeEach(() => {
    // const translateServiceSpy = jasmine.createSpyObj('TranslateService', ['use']);
    // const translateStoreSpy = jasmine.createSpyObj('TranslateStore');
    TestBed.configureTestingModule({
      declarations: [MainpageComponent],
      providers:[TranslateService],
      imports:[TranslateModule]

    });
    fixture = TestBed.createComponent(MainpageComponent);
    component = fixture.componentInstance;
    translate= TestBed.inject(TranslateService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a translation', () => {
    const trans = fixture.nativeElement;
    translate.setTranslation('en', {
      'hello': 'Hello',
      'food zone': 'We invite you for our Food zone!',
      'variety': 'Delicious Varieties of Food',
      'start': 'Start Ordering Food'
    });
    translate.use('en');

    fixture.detectChanges();

    expect(trans.querySelector('h1').textContent).toContain('Hello');
    expect(trans.querySelector('h2').textContent).toContain('We invite you for our Food zone!');
    expect(trans.querySelector('i').textContent).toContain('Delicious Varieties of Food');
    expect(trans.querySelector('button').textContent).toContain('Start Ordering Food');

  });
});
