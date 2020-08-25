import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCobroComponent } from './lista-cobro.component';

describe('ListaCobroComponent', () => {
  let component: ListaCobroComponent;
  let fixture: ComponentFixture<ListaCobroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCobroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCobroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
