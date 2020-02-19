import { NgModule } from '@angular/core';
import { HerosSearchFormModule } from '../hero-search-form/hero-search-form.module';
import { HerosSearchResultsComponent } from './heros-search-results.component';
import { HerosSearchResultsRoutingModule } from './heros-search-results.routing.module';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HerosListComponent } from './components/heros-list/heros-list.component';
import { NgxsModule } from '@ngxs/store';
import { HerosSearchResultsState } from './store/heros-search-results.state';
import { HerosPaginator } from './components/paginator/paginator.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HerosSearchResultsComponent,
    HerosListComponent,
    HeroCardComponent,
    HerosPaginator
  ],
  imports: [
    SharedModule,
    HerosSearchFormModule,
    HerosSearchResultsRoutingModule,
    NgxsModule.forFeature([HerosSearchResultsState])
  ]
})
export class HerosSearchResultsModule {}
