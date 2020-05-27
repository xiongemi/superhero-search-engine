import { MockHerosService } from 'src/app/shared/services/heros.service.mock';
import { HerosState } from './heros.state';
import { MockStateContext } from '../state-context.mock';
import { mockMaleHumanHero, mockOtherNonHumanNeutral } from 'src/app/types/heros.mock';
import { of, throwError } from 'rxjs';
import { HandleApiError } from '../api-error/api-error.actions';
import { GetSuperheros } from './heros.actions';
import { HttpErrorResponse } from '@angular/common/http';

describe('Heros State', () => {
  let herosService: MockHerosService;
  let herosState: HerosState;
  let stateContext: MockStateContext;

  beforeEach(() => {
    stateContext = new MockStateContext();
    herosService = new MockHerosService();
    herosState = new HerosState(herosService as any);
  });

  it('should set heros if it does not exist', done => {
    const heros = [mockMaleHumanHero, mockOtherNonHumanNeutral];
    stateContext.getState.mockReturnValue([]);
    herosService.getHeros.mockReturnValue(of(heros));

    herosState.getHeros(stateContext as any).subscribe(() => {
      expect(stateContext.setState).toHaveBeenCalledWith(heros);
      done();
    });
  });

  it('should not call service if heros already exist in the state', () => {
    const heros = [mockMaleHumanHero, mockOtherNonHumanNeutral];
    stateContext.getState.mockReturnValue(heros);
    herosService.getHeros.mockReturnValue(of(heros));

    expect(herosService.getHeros).not.toHaveBeenCalled();
  });

  it('should distapch action to handle error', done => {
    const error = new HttpErrorResponse({ status: 404 });
    herosService.getHeros.mockReturnValue(throwError(error));
    stateContext.getState.mockReturnValue([]);
    stateContext.dispatch.mockReturnValue(of(error));

    herosState.getHeros(stateContext as any).subscribe(() => {
      expect(stateContext.dispatch).toHaveBeenCalledWith(
        new HandleApiError(new GetSuperheros(), error)
      );
      done();
    });
  });
});
