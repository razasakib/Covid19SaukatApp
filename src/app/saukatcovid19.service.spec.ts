import { TestBed } from '@angular/core/testing';

import { Saukatcovid19Service } from './saukatcovid19.service';

describe('Saukatcovid19Service', () => {
  let service: Saukatcovid19Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Saukatcovid19Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
