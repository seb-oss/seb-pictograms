import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-icon-preview',
  templateUrl: './icon-preview.component.html',
  styleUrls: ['./icon-preview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IconPreviewComponent implements OnInit {

  @Input()
  icon: string;

  readonly iconSizes = ['seb-size-5x', 'seb-size-3x', 'seb-size-2x', 'seb-size-lg', 'seb-size-sm', 'seb-size-xs'];
  readonly fontWeights = ['seb-icon', 'seb-light-icon'];

  fontWeight: string;

  constructor() { }

  ngOnInit() {
    this.fontWeight = this.fontWeights[0];
  }
}
