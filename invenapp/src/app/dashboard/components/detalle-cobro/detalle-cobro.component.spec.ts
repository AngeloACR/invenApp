import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCobroComponent } from './detalle-cobro.component';

describe('DetalleCobroComponent', () => {
  let component: DetalleCobroComponent;
  let fixture: ComponentFixture<DetalleCobroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleCobroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCobroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
