import { Component, OnInit, ViewEncapsulation, Input, OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-icon-preview',
  templateUrl: './icon-preview.component.html',
  styleUrls: ['./icon-preview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IconPreviewComponent implements OnInit, OnDestroy {


  icon: string;

  readonly iconSizes = ['seb-size-7x', 'seb-size-6x', 'seb-size-5x', 'seb-size-3x', 'seb-size-2x', 'seb-size-1x'];
  readonly fontWeights = [{ type: 'seb-icon', name: 'Regular' }, { type: 'seb-light-icon', name: 'Light' }];

  fontWeight: string;

  private componentSubscriptions: Subscription[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.fontWeight = this.fontWeights[0].type;
    this.componentSubscriptions = [];
    this.componentSubscriptions.push(
      this.route.params.subscribe(params => {
        this.icon = params.icon;
      }));
  }

  ngOnDestroy(): void {
    this.componentSubscriptions.forEach(s => s.unsubscribe());
  }
}
