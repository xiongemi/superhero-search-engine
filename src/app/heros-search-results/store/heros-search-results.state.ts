import { HerosSearchResultsStateModel } from './heros-search-results-state-model.interface';
import { State, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { ChangePageAction, GoBackToFirstPage } from './heros-search-results.actions';

@State<HerosSearchResultsStateModel>({
  name: 'herosSearchResults',
  defaults: {
    pageEvent: {
      pageSize: 24,
      pageIndex: 0,
      length: 0
    }
  }
})
@Injectable()
export class HerosSearchResultsState {
  constructor() { }

  @Action(ChangePageAction)
  changePage(ctx: StateContext<HerosSearchResultsStateModel>, action: ChangePageAction) {
    ctx.patchState({ pageEvent: action.pageEvent });
  }

  @Action(GoBackToFirstPage)
  goBackToFirstPage(ctx: StateContext<HerosSearchResultsStateModel>, action: ChangePageAction) {
    ctx.patchState({ pageEvent: { ...ctx.getState().pageEvent, pageIndex: 0 } });
  }


}