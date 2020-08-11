import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMovimientoDiarioComponent } from './lista-movimiento-diario.component';

describe('ListaMovimientoDiarioComponent', () => {
  let component: ListaMovimientoDiarioComponent;
  let fixture: ComponentFixture<ListaMovimientoDiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMovimientoDiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMovimientoDiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
