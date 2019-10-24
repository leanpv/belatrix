import { TestBed } from '@angular/core/testing';

import { ExchangeRestServiceService } from './exchange-rest-service.service';

describe('ExchangeRestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExchangeRestServiceService = TestBed.get(ExchangeRestServiceService);
    expect(service).toBeTruthy();
  });
});
