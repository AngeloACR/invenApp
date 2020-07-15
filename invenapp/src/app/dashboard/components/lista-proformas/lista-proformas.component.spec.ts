import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProformasComponent } from './lista-proformas.component';

describe('ListaProformasComponent', () => {
  let component: ListaProformasComponent;
  let fixture: ComponentFixture<ListaProformasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaProformasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProformasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
