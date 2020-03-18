import { State, Action, StateContext } from '@ngxs/store';
import { GetSuperheros } from './heros.actions';
import { HerosService } from '../../shared/services/heros.service';
import { tap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Hero } from 'src/app/types/hero.interface';
import { HandleApiError } from '../api-error/api-error.actions';

@State<Hero[]>({
  name: 'heros',
  defaults: []
})
@Injectable({
  providedIn: 'root'
})
export class HerosState {
  constructor(private herosService: HerosService) {}

  @Action(GetSuperheros)
  getHeros(ctx: StateContext<Hero[]>) {
    if (ctx.getState().length) {
      return;
    }
    return this.herosService.getHeros().pipe(
      tap(heros => {
        ctx.setState(heros);
      }),
      catchError(error => {
        return ctx.dispatch(new HandleApiError(new GetSuperheros(), error));
      })
    );
  }
}
