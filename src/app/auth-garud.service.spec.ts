import { TestBed } from '@angular/core/testing';

import { AuthGarudService } from './auth-garud.service';

describe('AuthGarudService', () => {
  let service: AuthGarudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGarudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
