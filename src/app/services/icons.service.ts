import { Injectable } from '@angular/core';

import data from './../../../projects/seb-icons/data.json';

@Injectable({
  providedIn: 'root'
})
export class IconsService {

  private _icons: Icon[];

  constructor() { }

  get icons() {
    if (!this._icons) {
      this._icons = data.sort(this.sortIcon.bind(this));
    }
    return this._icons;
  }

  private sortIcon(a: Icon, b: Icon) {
    return this.sortString(a.names[0], b.names[0]);
  }

  private sortString(a: string, b: string) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }
}

export interface Icon {
  readonly names: string[];
  readonly code: string;
}
