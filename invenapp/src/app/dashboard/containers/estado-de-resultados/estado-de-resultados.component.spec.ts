import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoDeResultadosComponent } from './estado-de-resultados.component';

describe('EstadoDeResultadosComponent', () => {
  let component: EstadoDeResultadosComponent;
  let fixture: ComponentFixture<EstadoDeResultadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoDeResultadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoDeResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
