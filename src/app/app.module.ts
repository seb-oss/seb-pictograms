import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PictogramPreviewComponent } from './components/pictogram-preview/pictogram-preview.component';
import { PictogramListComponent } from './components/pictogram-list/pictogram-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PictogramPreviewComponent,
    PictogramListComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbAlertModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
