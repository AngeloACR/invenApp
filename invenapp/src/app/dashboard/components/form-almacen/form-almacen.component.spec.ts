import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLocacionComponent } from './form-locacion.component';

describe('FormLocacionComponent', () => {
  let component: FormLocacionComponent;
  let fixture: ComponentFixture<FormLocacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLocacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLocacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
