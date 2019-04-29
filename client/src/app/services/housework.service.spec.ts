import { TestBed } from '@angular/core/testing';

import { HouseworkService } from './housework.service';

describe('HouseworkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HouseworkService = TestBed.get(HouseworkService);
    expect(service).toBeTruthy();
  });
});
