import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarolCommponentComponent } from './carol-commponent.component';

describe('CarolCommponentComponent', () => {
  let component: CarolCommponentComponent;
  let fixture: ComponentFixture<CarolCommponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarolCommponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarolCommponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
