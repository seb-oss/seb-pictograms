import { TestBed } from '@angular/core/testing';

import { IconsService } from './icons.service';

describe('IconsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  let service: IconsService;
  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [IconsService],
    });
    service = TestBed.get(IconsService);
  });

  it('should be created', () => {

    expect(service).toBeTruthy();
  });
});
