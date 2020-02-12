import { NgModule } from '@angular/core';
import { HerosSearchFormModule } from '../hero-search-form/hero-search-form.module';
import { HerosSearchResultsComponent } from './heros-search-results.component';
import { HerosSearchResultsRoutingModule } from './heros-search-results.routing.module';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HerosListComponent } from './components/heros-list/heros-list.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { NgxsModule } from '@ngxs/store';
import { HerosSearchResultsState } from './store/heros-search-results.state';
import { HerosPaginator } from './components/paginator/paginator.component';

@NgModule({
  declarations: [HerosSearchResultsComponent, HerosListComponent, HeroCardComponent, HerosPaginator],
  imports: [CommonModule, MaterialModule, HerosSearchFormModule, HerosSearchResultsRoutingModule, FlexLayoutModule, NgxsModule.forFeature([HerosSearchResultsState]),]
})
export class HerosSearchResultsModule { }
