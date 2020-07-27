import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMovimientoDiarioComponent } from './form-movimiento-diario.component';

describe('FormMovimientoDiarioComponent', () => {
  let component: FormMovimientoDiarioComponent;
  let fixture: ComponentFixture<FormMovimientoDiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMovimientoDiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMovimientoDiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
