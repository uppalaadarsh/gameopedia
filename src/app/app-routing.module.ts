import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { MoviesComponent}  from './movies/movies.component'
const routes: Routes = [
  // { path : '', redirectTo: '/', pathMatch: 'full' },
  {path : '', component: MoviesComponent},
  { path : 'overview', component: OverviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [OverviewComponent, MoviesComponent]
