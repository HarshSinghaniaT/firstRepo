import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountCalcumationComponent } from './amount-calcumation.component';

describe('AmountCalcumationComponent', () => {
  let component: AmountCalcumationComponent;
  let fixture: ComponentFixture<AmountCalcumationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountCalcumationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountCalcumationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
