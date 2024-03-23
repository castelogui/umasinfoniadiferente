import { TestBed } from '@angular/core/testing';

import { AdminEventosService } from './admin-eventos.service';

describe('AdminEventosService', () => {
  let service: AdminEventosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminEventosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
