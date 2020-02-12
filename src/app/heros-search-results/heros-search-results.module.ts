import { NgModule } from '@angular/core';
import { HerosSearchFormModule } from '../hero-search-form/hero-search-form.module';
import { HerosSearchResultsComponent } from './heros-search-results.component';
import { HerosSearchResultsRoutingModule } from './heros-search-results.routing.module';

@NgModule({
  declarations: [HerosSearchResultsComponent],
  imports: [HerosSearchFormModule, HerosSearchResultsRoutingModule]
})
export class HerosSearchResultsModule {}
