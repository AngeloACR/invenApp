import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCuentaPorCobrarComponent } from './detalle-cuenta-por-cobrar.component';

describe('DetalleCuentaPorCobrarComponent', () => {
  let component: DetalleCuentaPorCobrarComponent;
  let fixture: ComponentFixture<DetalleCuentaPorCobrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleCuentaPorCobrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCuentaPorCobrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
