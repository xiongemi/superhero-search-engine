import { State, Action, StateContext } from '@ngxs/store';
import { HerosService } from '../../../shared/services/heros.service';
import { tap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HeroDetailsStateModel } from './hero-details-state-model.interface';
import { GetHeroById } from './hero-details.actions';
import { initHeroDetailsStateModel } from './hero-details-state-model.init';
import { MatDialog } from '@angular/material/dialog';
import { HandleApiError } from 'src/app/store/api-error/api-error.actions';
import { randomHeroDetailsActionCreator } from 'src/app/store/heros/heros.actions';

@State<HeroDetailsStateModel>({
  name: 'heroDetails',
  defaults: { ...initHeroDetailsStateModel }
})
@Injectable()
export class HeroDetailsState {
  constructor(private herosService: HerosService, private dialog: MatDialog) {}

  @Action(GetHeroById)
  getHeros(ctx: StateContext<HeroDetailsStateModel>, action: GetHeroById) {
    ctx.patchState({ hero: null });
    return this.herosService.getHeroById(action.id).pipe(
      tap(hero => {
        ctx.patchState({
          hero
        });
      }),
      catchError(() => {
        return ctx.dispatch(new HandleApiError(randomHeroDetailsActionCreator()));
      })
    );
  }
}
