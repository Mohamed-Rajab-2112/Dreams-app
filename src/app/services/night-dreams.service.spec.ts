import { TestBed } from '@angular/core/testing';

import { NightDreamsService } from './night-dreams.service';

describe('NightDreamsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NightDreamsService = TestBed.get(NightDreamsService);
    expect(service).toBeTruthy();
  });
});
