import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProformaComponent } from './form-proforma.component';

describe('FormProformaComponent', () => {
  let component: FormProformaComponent;
  let fixture: ComponentFixture<FormProformaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormProformaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
