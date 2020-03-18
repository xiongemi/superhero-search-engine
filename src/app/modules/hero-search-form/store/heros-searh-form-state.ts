import { State } from '@ngxs/store';
import { initFormStateModel } from 'src/app/types/form-state-model.init';
import { Injectable } from '@angular/core';

@State({
  name: 'herosSearchForm',
  defaults: {
    ...initFormStateModel
  }
})
@Injectable({
  providedIn: 'root'
})
export class HerosSearchFormState {}
