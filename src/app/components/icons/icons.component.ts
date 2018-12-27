import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IconsService } from 'src/app/services/icons.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class IconsComponent implements OnInit {

  constructor(private iconsService: IconsService) {
  }

  ngOnInit() {
  }

  get icons() {
    return this.iconsService.icons;
  }

}
