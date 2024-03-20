import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterOutlet } from '@angular/router';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
