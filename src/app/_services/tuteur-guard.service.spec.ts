import { TestBed } from '@angular/core/testing';

import { TuteurGuardService } from './tuteur-guard.service';

describe('TuteurGuardService', () => {
  let service: TuteurGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TuteurGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
