import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEgresoComponent } from './form-egreso.component';

describe('FormEgresoComponent', () => {
  let component: FormEgresoComponent;
  let fixture: ComponentFixture<FormEgresoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEgresoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
