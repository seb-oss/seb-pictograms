import { TestBed } from '@angular/core/testing';
import { PictogramsRouteGuard } from './pictograms-route.guard';
import { PictogramsService } from '../services/pictograms.service';

const pictogramsServiceMock = {
  pictograms: [],
};

describe('PictogramsRouteGuard', () => {
  let guard: PictogramsRouteGuard;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PictogramsRouteGuard,
         { provide : PictogramsService, useValue: pictogramsServiceMock },
        ]
    });
    guard = TestBed.get(PictogramsRouteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
