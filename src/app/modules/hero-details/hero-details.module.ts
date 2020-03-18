import { HeroDetailsRoutingModule } from './hero-details.routing.module';
import { HeroDetailsComponent } from './hero-details.component';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { HeroDetailsState } from './store/hero-details.state';
import { AppearanceTableComponent } from './components/appearance-table/appearance-table.component';
import { PowerStatsComponent } from './components/power-stats/power-stats.component';
import { DetailsTableComponent } from './components/details-table/details-table.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HeroDetailsComponent,
    AppearanceTableComponent,
    PowerStatsComponent,
    DetailsTableComponent
  ],
  imports: [SharedModule, HeroDetailsRoutingModule, NgxsModule.forFeature([HeroDetailsState])]
})
export class HerosDetailsModule {}
