import { State } from '@ngxs/store';
import { initFormStateModel } from 'src/app/types/form-state-model.init';

@State({
  name: 'herosSearchForm',
  defaults: {
    ...initFormStateModel
  }
})
export class HerosSearchFormState {}
