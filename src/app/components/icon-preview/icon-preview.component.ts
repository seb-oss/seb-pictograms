import { Component, OnInit, ViewEncapsulation, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DocumentService } from 'src/app/services/document.service';


@Component({
  selector: 'app-icon-preview',
  templateUrl: './icon-preview.component.html',
  styleUrls: ['./icon-preview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IconPreviewComponent implements OnInit, OnDestroy {

  icon: string;

  readonly iconSizes = ['seb-size-6x', 'seb-size-5x', 'seb-size-4x', 'seb-size-3x', 'seb-size-2x', 'seb-size-1x'];
  readonly fontWeights = [{ type: 'seb-icon', name: 'Regular' }, { type: 'seb-light-icon', name: 'Light' }];

  fontWeight: string;

  @ViewChild('code')
  code: ElementRef;

  private componentSubscriptions: Subscription[];

  constructor(
    private route: ActivatedRoute,
    private doc: DocumentService,
  ) { }

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

  copyIconCode() {
    this.doc.copy(this.code.nativeElement.innerText);
  }
}
