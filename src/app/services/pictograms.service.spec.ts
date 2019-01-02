import { TestBed } from '@angular/core/testing';

import { PictogramsService } from './pictograms.service';

describe('PictogramsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  let service: PictogramsService;
  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [PictogramsService],
    });
    service = TestBed.get(PictogramsService);
  });

  it('should be created', () => {

    expect(service).toBeTruthy();
  });
});
