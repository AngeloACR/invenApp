import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCuentasTComponent } from './form-cuentas-t.component';

describe('FormCuentasTComponent', () => {
  let component: FormCuentasTComponent;
  let fixture: ComponentFixture<FormCuentasTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCuentasTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCuentasTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
