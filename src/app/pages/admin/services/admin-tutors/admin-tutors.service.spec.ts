import { TestBed } from '@angular/core/testing';

import { AdminTutorsService } from './admin-tutors.service';

describe('AdminTutorsService', () => {
  let service: AdminTutorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminTutorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
