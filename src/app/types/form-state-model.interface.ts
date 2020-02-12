export interface FormStateModel<T> {
  model: T;
  dirty: boolean;
  status: string;
  errors: any;
}
