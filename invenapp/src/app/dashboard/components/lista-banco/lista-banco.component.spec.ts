import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBancoComponent } from './lista-banco.component';

describe('ListaBancoComponent', () => {
  let component: ListaBancoComponent;
  let fixture: ComponentFixture<ListaBancoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaBancoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaBancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
