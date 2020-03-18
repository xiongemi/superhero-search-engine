export class HandleApiError {
  static type = '[APP] Handle Api Error';

  constructor(public action: any, public error: any) {}
}
