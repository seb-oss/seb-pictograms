import { Component, OnInit, ViewEncapsulation, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DocumentService } from 'src/app/services/document.service';


@Component({
  selector: 'app-pictogram-preview',
  templateUrl: './pictogram-preview.component.html',
  styleUrls: ['./pictogram-preview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PictogramPreviewComponent implements OnInit, OnDestroy {

  pictogram: string;

  readonly pictogramSizes = ['seb-size-6x', 'seb-size-5x', 'seb-size-4x', 'seb-size-3x', 'seb-size-2x', 'seb-size-1x'];
  readonly fontWeights = [{ type: 'seb-pictogram', name: 'Regular' }, { type: 'seb-light-pictogram', name: 'Light' }];

  fontWeight: string;

  @ViewChild('code', { static: true })
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
        this.pictogram = params.pictogram;
      }));
  }

  ngOnDestroy(): void {
    this.componentSubscriptions.forEach(s => s.unsubscribe());
  }

  copyPictogramCode() {
    this.doc.copy(this.code.nativeElement.innerText);
  }
}
