import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HerosSearchLandingComponent } from './heros-search-landing/heros-search-landing.component';

const routes: Routes = [
  { path: '', component: HerosSearchLandingComponent },
  {
    path: 'search',
    loadChildren: () =>
      import('./heros-search-results/heros-search-results.module').then(
        m => m.HerosSearchResultsModule
      )
  },
  {
    path: 'details',
    loadChildren: () => import('./hero-details/hero-details.module').then(m => m.HerosDetailsModule)
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
