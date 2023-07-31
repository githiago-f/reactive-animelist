import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowListComponent } from './show/show-list/show-list.component';
import { ShowDetailComponent } from './show/show-detail/show-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ShowListComponent },
  { path: 'show/:slug', component: ShowDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
