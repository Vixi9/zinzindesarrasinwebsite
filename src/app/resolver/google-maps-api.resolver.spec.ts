import { TestBed } from '@angular/core/testing';

import { GoogleMapsApiResolver } from './google-maps-api.resolver';

describe('GoogleMapsApiResolver', () => {
  let resolver: GoogleMapsApiResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GoogleMapsApiResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
