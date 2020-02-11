import { HerosSearchFormStateModel } from '../hero-search-form/types/heros-search-form-state-model.interface';
import { HerosStateModel } from './heros/heros-state-model.interface';

export interface AppStateModel {
  herosSearchForm: HerosSearchFormStateModel;
  heros: HerosStateModel;
}
