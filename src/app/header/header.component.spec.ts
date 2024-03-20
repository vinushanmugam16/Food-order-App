import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let translate: TranslateService

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports:[HttpClientModule,TranslateModule],
      providers:[TranslateService,TranslateStore]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    translate =TestBed.inject(TranslateService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render text', () => {
    const test = TestBed.createComponent(HeaderComponent);
    test.detectChanges();
    const compile = test.nativeElement as HTMLElement;
    expect(compile.querySelector('h1')?.textContent).toContain('Food Order App');
  })

  it('should switch language', () => {
    const lang = 'en';
    component.switchLang(lang);
    expect(translate.use).toHaveBeenCalledWith(lang);
  });

});
