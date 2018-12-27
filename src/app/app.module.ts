import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconPreviewComponent } from './components/icon-preview/icon-preview.component';
import { IconsComponent } from './components/icons/icons.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IconPreviewComponent,
    IconsComponent,
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
