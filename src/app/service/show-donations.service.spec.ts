import { TestBed } from '@angular/core/testing';

import { ShowDonationsService } from './show-donations.service';

describe('ShowDonationsService', () => {
  let service: ShowDonationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowDonationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
