import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IconsComponent } from './components/icons/icons.component';
import { IconPreviewComponent } from './components/icon-preview/icon-preview.component';
import { IconsRouteGuard } from './gruards/icons-route.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: IconsComponent },
  { path: ':icon', component: IconPreviewComponent, canActivate: [IconsRouteGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
