import { TestBed } from '@angular/core/testing';
import { IconsRouteGuard } from './icons-route.guard';
import { IconsService } from '../services/icons.service';

const iconsServiceMock = {
  icons: [],
};

describe('IconsRouteGuard', () => {
  let guard: IconsRouteGuard;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IconsRouteGuard,
         { provide : IconsService, useValue: iconsServiceMock },
        ]
    });
    guard = TestBed.get(IconsRouteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
