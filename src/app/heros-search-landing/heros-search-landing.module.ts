import { NgModule } from '@angular/core';
import { HerosSearchFormModule } from '../hero-search-form/hero-search-form.module';
import { HerosSearchLandingComponent } from './heros-search-landing.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [HerosSearchLandingComponent],
  imports: [HerosSearchFormModule, MaterialModule]
})
export class HerosSearchLandingModule {}
