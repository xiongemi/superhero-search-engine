import { HerosSearchResultsStateModel } from './heros-search-results-state-model.interface';

export const initHerosSearchResultStateModel: HerosSearchResultsStateModel = {
  pageEvent: {
    pageSize: 24,
    pageIndex: 0,
    length: 0
  }
};
