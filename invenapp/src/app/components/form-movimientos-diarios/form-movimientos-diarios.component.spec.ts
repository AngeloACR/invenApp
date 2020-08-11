import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMovimientosDiariosComponent } from './form-movimientos-diarios.component';

describe('FormMovimientosDiariosComponent', () => {
  let component: FormMovimientosDiariosComponent;
  let fixture: ComponentFixture<FormMovimientosDiariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMovimientosDiariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMovimientosDiariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
