import { Injectable } from '@angular/core';

import data from './../../../projects/seb-pictograms/data.json';

@Injectable({
  providedIn: 'root'
})
export class PictogramsService {

  private _pictograms: Pictogram[];

  constructor() { }

  get pictograms() {
    if (!this._pictograms) {
      this._pictograms = data.sort(this.comparePictogram.bind(this));
    }
    return this._pictograms;
  }

  private comparePictogram(a: Pictogram, b: Pictogram) {
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

export interface Pictogram {
  readonly names: string[];
  readonly code: string;
}
