export interface FormStateModel<T = any> {
  model: T;
  dirty: boolean;
  status: string;
  errors: any;
}
