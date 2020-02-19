import { MockHerosService } from 'src/app/shared/services/heros.service.mock';
import { HerosState } from './heros.state';
import { MockStateContext } from '../state-context.mock';
import { mockMaleHumanHero, mockOtherNonHumanNeutral } from 'src/app/types/heros.mock';
import { initHerosState } from './heros-state.init.const';
import { of } from 'rxjs';

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
    stateContext.getState.mockReturnValue(initHerosState);
    herosService.getHeros.mockReturnValue(of(heros));

    herosState.getHeros(stateContext as any).subscribe(() => {
      expect(stateContext.patchState).toHaveBeenCalledWith({
        loading: true,
        heros
      });
      done();
    });
  });

  it('should not call service if heros already exist in the state', () => {
    const heros = [mockMaleHumanHero, mockOtherNonHumanNeutral];
    stateContext.getState.mockReturnValue({ heros });
    herosService.getHeros.mockReturnValue(of(heros));

    expect(herosService.getHeros).not.toHaveBeenCalled();
  });
});
