import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCuentasPorPagarComponent } from './lista-cuentas-por-pagar.component';

describe('ListaCuentasPorPagarComponent', () => {
  let component: ListaCuentasPorPagarComponent;
  let fixture: ComponentFixture<ListaCuentasPorPagarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCuentasPorPagarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCuentasPorPagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
