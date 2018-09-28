import { TestBed } from '@angular/core/testing';

import { ResolveeditService } from './resolveedit.service';

describe('ResolveeditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResolveeditService = TestBed.get(ResolveeditService);
    expect(service).toBeTruthy();
  });
});
