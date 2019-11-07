import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyAdderComponent } from './currency-adder.component';

describe('CurrencyAdderComponent', () => {
  let component: CurrencyAdderComponent;
  let fixture: ComponentFixture<CurrencyAdderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyAdderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
