import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IconsService } from '../services/icons.service';

@Injectable({
  providedIn: 'root'
})
export class IconsRouteGuard implements CanActivate {

  constructor(private iconsService: IconsService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const icon = next.params.icon;
    return !!this.iconsService.icons.find(i => !!i.names.find(n => icon === n));
  }
}
