import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCuentasPorCobrarComponent } from './lista-cuentas-por-cobrar.component';

describe('ListaCuentasPorCobrarComponent', () => {
  let component: ListaCuentasPorCobrarComponent;
  let fixture: ComponentFixture<ListaCuentasPorCobrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCuentasPorCobrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCuentasPorCobrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
