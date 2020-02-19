import { State, Action, StateContext } from '@ngxs/store';
import { HerosService } from '../../shared/services/heros.service';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HeroDetailsStateModel } from './hero-details-state-model.interface';
import { GetHeroById } from './hero-details.actions';

@State<HeroDetailsStateModel>({
  name: 'heroDetails',
  defaults: {
    hero: null,
    loading: false
  }
})
@Injectable()
export class HeroDetailsState {
  constructor(private herosService: HerosService) {}

  @Action(GetHeroById)
  getHeros(ctx: StateContext<HeroDetailsStateModel>, action: GetHeroById) {
    ctx.patchState({
      loading: false
    });
    return this.herosService.getHeroById(action.id).pipe(
      tap(hero => {
        ctx.patchState({
          hero,
          loading: true
        });
      })
    );
  }
}
