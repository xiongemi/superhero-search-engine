import { FormStateModel } from './form-state-model.interface';

export const initFormStateModel: FormStateModel = {
  model: undefined,
  dirty: false,
  status: '',
  errors: {}
};
