import { TestBed } from '@angular/core/testing';

import { CommonHttpInterceptorService } from './common-http-interceptor.service';

describe('CommonHttpInterceptorService', () => {
  let service: CommonHttpInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonHttpInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
