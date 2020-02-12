import { State, Action, StateContext } from '@ngxs/store';
import { UpdateFormValue } from '@ngxs/form-plugin';
import { GoBackToFirstPage } from 'src/app/heros-search-results/store/heros-search-results.actions';

@State({
  name: 'herosSearchForm',
  defaults: {
    model: undefined,
    dirty: false,
    status: '',
    errors: {}
  }
})
export class HerosSearchFormState {

  @Action(UpdateFormValue)
  goBackToFirstPage(ctx: StateContext<HerosSearchFormState>) {
    ctx.dispatch(new GoBackToFirstPage());
  }
}
