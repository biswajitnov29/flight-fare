import { TestBed } from '@angular/core/testing';

import { SkyscannerService } from './skyscanner.service';

describe('SkyscannerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkyscannerService = TestBed.get(SkyscannerService);
    expect(service).toBeTruthy();
  });
});
