import { Component, ViewEncapsulation } from '@angular/core';
import { IconsService } from './services/icons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

  constructor() {
  }
}
