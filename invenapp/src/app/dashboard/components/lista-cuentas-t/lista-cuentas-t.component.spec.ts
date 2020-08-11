import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCuentasTComponent } from './lista-cuentas-t.component';

describe('ListaCuentasTComponent', () => {
  let component: ListaCuentasTComponent;
  let fixture: ComponentFixture<ListaCuentasTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCuentasTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCuentasTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
