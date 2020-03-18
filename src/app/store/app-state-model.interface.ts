import { HerosSearchFormStateModel } from '../modules/hero-search-form/types/heros-search-form-state-model.interface';
import { HerosSearchResultsStateModel } from '../modules/heros-search-results/store/heros-search-results-state-model.interface';
import { HeroDetailsStateModel } from '../modules/hero-details/store/hero-details-state-model.interface';
import { Hero } from '../types/hero.interface';

export interface AppStateModel {
  herosSearchForm?: HerosSearchFormStateModel;
  herosSearchResults?: HerosSearchResultsStateModel;
  heros?: Hero[];
  heroDetails?: HeroDetailsStateModel;
}
