import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PictogramsService } from '../services/pictograms.service';

@Injectable({
  providedIn: 'root'
})
export class PictogramsRouteGuard implements CanActivate {

  constructor(private pictogramsService: PictogramsService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const pictogram = next.params.pictogram;
    return !!this.pictogramsService.pictograms.find(i => !!i.names.find(n => pictogram === n));
  }
}
