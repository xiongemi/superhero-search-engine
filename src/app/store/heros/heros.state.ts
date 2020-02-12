import { State, Action, StateContext } from '@ngxs/store';
import { HerosStateModel } from './heros-state-model.interface';
import { GetSuperheros } from './heros.actions';
import { HerosService } from 'src/app/services/heros.service';
import { tap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@State<HerosStateModel>({
  name: 'heros',
  defaults: {
    heros: [],
    loading: false,
    error: null
  }
})
@Injectable()
export class HerosState {
  constructor(private herosService: HerosService) {}

  @Action(GetSuperheros)
  getHeros(ctx: StateContext<HerosStateModel>) {
    return this.herosService.getHeros().pipe(
      tap(heros => {
        ctx.patchState({
          heros,
          loading: true
        });
      })
      // catchError(error => console.log(error))
    );
  }
}
