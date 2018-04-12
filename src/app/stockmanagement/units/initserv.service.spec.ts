import { TestBed, inject } from '@angular/core/testing';

import { InitservService } from './initserv.service';

describe('InitservService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InitservService]
    });
  });

  it('should be created', inject([InitservService], (service: InitservService) => {
    expect(service).toBeTruthy();
  }));
});
