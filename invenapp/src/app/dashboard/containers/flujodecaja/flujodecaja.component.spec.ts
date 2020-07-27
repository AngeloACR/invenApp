import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlujodecajaComponent } from './flujodecaja.component';

describe('FlujodecajaComponent', () => {
  let component: FlujodecajaComponent;
  let fixture: ComponentFixture<FlujodecajaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlujodecajaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlujodecajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
