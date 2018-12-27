import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IconsService, Icon } from 'src/app/services/icons.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class IconsComponent implements OnInit {

  filter: string;

  private _icons: Icon[];

  constructor(private iconsService: IconsService) {
  }

  ngOnInit() {
    this.filter = '';
  }

  get icons() {
    if (!this._icons) {
      const filter = this.filter.toLowerCase();
      this._icons = this.iconsService.icons
      .filter(i => i.names.find(n => n.indexOf(filter) > -1));
    }
    return this._icons;
  }

  onFilterChange() {
    this._icons = undefined;
  }
}
