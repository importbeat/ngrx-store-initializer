import { TestBed } from '@angular/core/testing';

import { NgrxStoreInitializerService } from './ngrx-store-initializer.service';

describe('NgrxStoreInitializerService', () => {
  let service: NgrxStoreInitializerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgrxStoreInitializerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
