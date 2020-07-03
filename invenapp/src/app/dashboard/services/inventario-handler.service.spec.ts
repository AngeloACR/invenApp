import { TestBed } from '@angular/core/testing';

import { InventarioHandlerService } from './inventario-handler.service';

describe('InventarioHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InventarioHandlerService = TestBed.get(InventarioHandlerService);
    expect(service).toBeTruthy();
  });
});
