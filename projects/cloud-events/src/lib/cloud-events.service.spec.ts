import { TestBed } from '@angular/core/testing';

import { CloudEventsService } from './cloud-events.service';

describe('CloudEventsService', () => {
  let service: CloudEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CloudEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
