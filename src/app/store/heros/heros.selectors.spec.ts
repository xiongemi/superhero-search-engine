import { AppStateModel } from '../app-state-model.interface';
import {
  getHeros,
  getFilteredHeros,
  getHerosLength,
  getFilteredHerosOnPage
} from './heros.selectors';
import { initFormStateModel } from 'src/app/types/form-state-model.init';
import { initHerosSearchResultStateModel } from 'src/app/modules/heros-search-results/store/heros-search-result-state-model.init';
import { mockHerosSearchFormValue } from 'src/app/modules/hero-search-form/types/heros-search-form-value.mock';
import { mockMaleHumanHero, mockOtherNonHumanNeutral } from 'src/app/types/heros.mock';
import { Race } from 'src/app/types/race.enum';

describe('Heros Selectors', () => {
  describe('initial value', () => {
    const mockState: AppStateModel = {
      heros: [],
      herosSearchForm: initFormStateModel
    };

    it('should get an empty array as the list of heros', () => {
      const actual = getHeros(mockState);
      const expected = [];
      expect(actual).toEqual(expected);
    });

    it('should get an empty array as the the list of filtered heros', () => {
      const actual = getFilteredHeros(mockState.heros, undefined);
      const expected = [];
      expect(actual).toEqual(expected);
    });

    it('should get 0 as heros length', () => {
      const actual = getHerosLength(mockState.heros);
      const expected = 0;
      expect(actual).toEqual(expected);
    });

    it('should get an empty array as the list of heros on the page', () => {
      const actual = getFilteredHerosOnPage([], initHerosSearchResultStateModel.pageEvent);
      const expected = [];
      expect(actual).toEqual(expected);
    });
  });

  describe('when heros are loaded', () => {
    const mockState: AppStateModel = {
      heros: [mockMaleHumanHero, mockOtherNonHumanNeutral],
      herosSearchForm: initFormStateModel
    };

    it('should the list of heros', () => {
      const actual = getHeros(mockState);
      const expected = [mockMaleHumanHero, mockOtherNonHumanNeutral];
      expect(actual).toEqual(expected);
    });

    it('should get an empty array as the list of filtered heros if form is not defined', () => {
      const actual = getFilteredHeros(mockState.heros, undefined);
      const expected = [];
      expect(actual).toEqual(expected);
    });

    it('should get the list of filtered heros if form is defined', () => {
      const actual = getFilteredHeros(mockState.heros, {
        race: Race.Human
      });
      const expected = [mockMaleHumanHero];
      expect(actual).toEqual(expected);
    });

    it('should get the heros length', () => {
      const actual = getHerosLength(mockState.heros);
      const expected = 2;
      expect(actual).toEqual(expected);
    });

    it('should the list of heros on the page', () => {
      const actual = getFilteredHerosOnPage(
        mockState.heros,
        initHerosSearchResultStateModel.pageEvent
      );
      const expected = mockState.heros;
      expect(actual).toEqual(expected);
    });
  });
});
