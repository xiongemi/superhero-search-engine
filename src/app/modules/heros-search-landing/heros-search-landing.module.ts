import { NgModule } from '@angular/core';
import { HerosSearchFormModule } from '../hero-search-form/hero-search-form.module';
import { HerosSearchLandingComponent } from './heros-search-landing.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HerosSearchLandingComponent],
  imports: [HerosSearchFormModule, SharedModule]
})
export class HerosSearchLandingModule {}
