import { HerosSearchFormStateModel } from '../hero-search-form/types/heros-search-form-state-model.interface';
import { HerosStateModel } from './heros/heros-state-model.interface';
import { HerosSearchResultsStateModel } from '../heros-search-results/store/heros-search-results-state-model.interface';
import { HeroDetailsStateModel } from '../hero-details/store/hero-details-state-model.interface';

export interface AppStateModel {
  herosSearchForm: HerosSearchFormStateModel;
  herosSearchResults: HerosSearchResultsStateModel;
  heros: HerosStateModel;
  heroDetails: HeroDetailsStateModel;
}
