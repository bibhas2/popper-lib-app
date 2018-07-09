import { TestBed, inject } from '@angular/core/testing';

import { PopperLibService } from './popper-lib.service';

describe('PopperLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopperLibService]
    });
  });

  it('should be created', inject([PopperLibService], (service: PopperLibService) => {
    expect(service).toBeTruthy();
  }));
});
