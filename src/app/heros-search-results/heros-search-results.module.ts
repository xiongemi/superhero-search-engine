import { NgModule } from '@angular/core';
import { HerosSearchFormModule } from '../hero-search-form/hero-search-form.module';
import { HerosSearchResultsComponent } from './heros-search-results.component';
import { HerosSearchResultsRoutingModule } from './heros-search-results.routing.module';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HerosListComponent } from './components/heros-list/heros-list.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [HerosSearchResultsComponent, HerosListComponent, HeroCardComponent],
  imports: [CommonModule, MaterialModule, HerosSearchFormModule, HerosSearchResultsRoutingModule]
})
export class HerosSearchResultsModule { }
