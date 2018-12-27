import { TestBed, async, inject } from '@angular/core/testing';

import { IconsRouteGuard } from './icons-route.guard';

describe('IconsRouteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IconsRouteGuard]
    });
  });

  it('should ...', inject([IconsRouteGuard], (guard: IconsRouteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
