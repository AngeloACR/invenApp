import { TestBed } from '@angular/core/testing';

import { PdfHandlerService } from './pdf-handler.service';

describe('PdfHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PdfHandlerService = TestBed.get(PdfHandlerService);
    expect(service).toBeTruthy();
  });
});
