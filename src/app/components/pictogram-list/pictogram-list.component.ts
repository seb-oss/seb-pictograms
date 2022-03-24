import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PictogramsService, Pictogram } from 'src/app/services/pictograms.service';

@Component({
  selector: 'app-pictogram-list',
  templateUrl: './pictogram-list.component.html',
  styleUrls: ['./pictogram-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PictogramListComponent implements OnInit {

  filter: string;

  private _pictograms: Pictogram[];

  constructor(private pictogramsService: PictogramsService) {
  }

  ngOnInit() {
    this.filter = '';
  }

  get pictograms() {
    console.log('pictograms')
    if (!this._pictograms) {
      const filter = this.filter.toLowerCase();
      this._pictograms = this.pictogramsService.pictograms
      .filter(i => i.names.find(n => n.indexOf(filter) > -1));
    }
    return this._pictograms;
  }

  onFilterChange() {
    this._pictograms = undefined;
  }
}
