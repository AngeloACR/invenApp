import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCobroComponent } from './form-cobro.component';

describe('FormCobroComponent', () => {
  let component: FormCobroComponent;
  let fixture: ComponentFixture<FormCobroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCobroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCobroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
