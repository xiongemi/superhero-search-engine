import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HerosSearchFormComponent } from './heros-search-form.component';
import { NgModule } from '@angular/core';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsModule } from '@ngxs/store';
import { HerosSearchFormState } from './store/heros-searh-form-state';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HerosSearchFormComponent],
  imports: [
    SharedModule,
    NgxsModule.forFeature([HerosSearchFormState]),
    NgxsFormPluginModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [HerosSearchFormComponent]
})
export class HerosSearchFormModule {}
