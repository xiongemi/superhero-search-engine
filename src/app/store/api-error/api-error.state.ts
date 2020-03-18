import { State, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Hero } from 'src/app/types/hero.interface';
import { HandleApiError } from './api-error.actions';
import { MatDialog } from '@angular/material/dialog';
import { ApiErrorDialogComponent } from 'src/app/components/api-error-dialog/api-error-dialog.component';
import { map } from 'rxjs/operators';

@State<Hero[]>({
  name: 'apiError',
  defaults: undefined
})
@Injectable({
  providedIn: 'root'
})
export class ApiErrorState {
  constructor(private dialog: MatDialog) {}

  @Action(HandleApiError)
  getHeros(ctx: StateContext<void>, action: HandleApiError) {
    const dialogRef = this.dialog.open(ApiErrorDialogComponent, { disableClose: true });

    return dialogRef.afterClosed().pipe(
      map(() => {
        ctx.dispatch(action.action);
      })
    );
  }
}
