import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HerosSearchFormComponent } from './heros-search-form.component';
import { MaterialModule } from '../material.module';
import { NgModule } from '@angular/core';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsModule } from '@ngxs/store';
import { HerosSearchFormState } from './store/heros-searh-form-state';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HerosSearchFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    NgxsModule.forFeature([HerosSearchFormState]),
    NgxsFormPluginModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [HerosSearchFormComponent]
})
export class HerosSearchFormModule {}
