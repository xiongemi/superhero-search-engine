import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HerosSearchLandingComponent } from './modules/heros-search-landing/heros-search-landing.component';
import { RoutePath } from './types/route-path.enum';

const routes: Routes = [
  {
    path: '',
    component: HerosSearchLandingComponent
  },
  {
    path: RoutePath.search,
    loadChildren: () =>
      import('./modules/heros-search-results/heros-search-results.module').then(
        m => m.HerosSearchResultsModule
      )
  },
  {
    path: RoutePath.details,
    loadChildren: () =>
      import('./modules/hero-details/hero-details.module').then(m => m.HerosDetailsModule)
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
