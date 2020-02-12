import { PageEvent } from '@angular/material/paginator';

export class ChangePageAction {
  static readonly type = '[Heros Search Results] Change Page';

  constructor(public pageEvent: PageEvent) { }
}

export class GoBackToFirstPage {
  static readonly type = '[Heros Search Results] Go Back To First';
}
