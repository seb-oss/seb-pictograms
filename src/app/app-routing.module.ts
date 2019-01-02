import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PictogramPreviewComponent } from './components/pictogram-preview/pictogram-preview.component';
import { PictogramListComponent } from './components/pictogram-list/pictogram-list.component';
import { PictogramsRouteGuard } from './gruards/pictograms-route.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: PictogramListComponent },
  { path: ':pictogram', component: PictogramPreviewComponent, canActivate: [PictogramsRouteGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
