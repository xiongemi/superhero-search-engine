import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HerosSearchResultsComponent } from './heros-search-results.component';

const routes: Routes = [{ path: '', component: HerosSearchResultsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HerosSearchResultsRoutingModule {}
