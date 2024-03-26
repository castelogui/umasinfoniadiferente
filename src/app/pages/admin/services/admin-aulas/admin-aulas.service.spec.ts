import { TestBed } from '@angular/core/testing';

import { AdminAulasService } from './admin-aulas.service';

describe('AdminAulasService', () => {
  let service: AdminAulasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAulasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
