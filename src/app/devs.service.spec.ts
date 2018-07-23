/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DevsService } from './devs.service';

describe('DevsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DevsService]
    });
  });

  it('should ...', inject([DevsService], (service: DevsService) => {
    expect(service).toBeTruthy();
  }));
});
