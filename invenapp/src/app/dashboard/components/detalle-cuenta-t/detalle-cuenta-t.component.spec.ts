import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCuentaTComponent } from './detalle-cuenta-t.component';

describe('DetalleCuentaTComponent', () => {
  let component: DetalleCuentaTComponent;
  let fixture: ComponentFixture<DetalleCuentaTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleCuentaTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCuentaTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
