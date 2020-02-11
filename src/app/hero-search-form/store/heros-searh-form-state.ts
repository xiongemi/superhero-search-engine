import { State } from '@ngxs/store';

@State({
  name: 'herosSearchForm',
  defaults: {
    model: undefined,
    dirty: false,
    status: '',
    errors: {}
  }
})
export class HerosSearchFormState { }
