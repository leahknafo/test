import { TestBed } from '@angular/core/testing';

import { FamilyMembersService } from './family-members.service';

describe('FamilyMembersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FamilyMembersService = TestBed.get(FamilyMembersService);
    expect(service).toBeTruthy();
  });
});
