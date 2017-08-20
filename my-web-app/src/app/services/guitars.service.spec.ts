import { TestBed, inject } from '@angular/core/testing';

import { GuitarsService } from './guitars.service';

describe('GuitarsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuitarsService]
    });
  });

  it('should ...', inject([GuitarsService], (service: GuitarsService) => {
    expect(service).toBeTruthy();
  }));
});
