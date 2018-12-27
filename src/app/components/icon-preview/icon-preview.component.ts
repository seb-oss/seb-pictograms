import { Component, OnInit, ViewEncapsulation, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-icon-preview',
  templateUrl: './icon-preview.component.html',
  styleUrls: ['./icon-preview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IconPreviewComponent implements OnInit, OnChanges {

  @Input()
  icon: string;

  readonly iconSizes = ['seb-size-5x', 'seb-size-3x', 'seb-size-2x', 'seb-size-lg', 'seb-size-sm', 'seb-size-xs'];
  readonly fontWeights = ['seb-icon', 'seb-light-icon'];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes)
    if (changes['icon']) {
      console.log('icon', this.icon)
    }
  }

}
