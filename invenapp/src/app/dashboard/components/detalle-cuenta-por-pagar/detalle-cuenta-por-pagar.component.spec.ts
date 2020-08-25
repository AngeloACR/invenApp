import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCuentaPorPagarComponent } from './detalle-cuenta-por-pagar.component';

describe('DetalleCuentaPorPagarComponent', () => {
  let component: DetalleCuentaPorPagarComponent;
  let fixture: ComponentFixture<DetalleCuentaPorPagarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleCuentaPorPagarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCuentaPorPagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
