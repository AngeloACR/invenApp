import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMovimientosDiariosComponent } from './lista-movimientos-diarios.component';

describe('ListaMovimientosDiariosComponent', () => {
  let component: ListaMovimientosDiariosComponent;
  let fixture: ComponentFixture<ListaMovimientosDiariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMovimientosDiariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMovimientosDiariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
