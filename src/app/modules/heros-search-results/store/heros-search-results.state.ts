import { HerosSearchResultsStateModel } from './heros-search-results-state-model.interface';
import { State, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { ChangePageAction, GoBackToFirstPage } from './heros-search-results.actions';
import { initHerosSearchResultStateModel } from './heros-search-result-state-model.init';
import { UpdateFormValue } from '@ngxs/form-plugin';

@State<HerosSearchResultsStateModel>({
  name: 'herosSearchResults',
  defaults: { ...initHerosSearchResultStateModel }
})
@Injectable({
  providedIn: 'root'
})
export class HerosSearchResultsState {
  @Action(ChangePageAction)
  changePage(ctx: StateContext<HerosSearchResultsStateModel>, action: ChangePageAction) {
    ctx.patchState({ pageEvent: action.pageEvent });
  }

  @Action(GoBackToFirstPage)
  goBackToFirstPage(ctx: StateContext<HerosSearchResultsStateModel>, action: ChangePageAction) {
    ctx.patchState({ pageEvent: { ...ctx.getState().pageEvent, pageIndex: 0 } });
  }
}
