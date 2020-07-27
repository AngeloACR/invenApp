import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisponibilidadBancariaComponent } from './disponibilidad-bancaria.component';

describe('DisponibilidadBancariaComponent', () => {
  let component: DisponibilidadBancariaComponent;
  let fixture: ComponentFixture<DisponibilidadBancariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisponibilidadBancariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisponibilidadBancariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
