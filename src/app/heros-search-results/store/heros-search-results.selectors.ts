import { AppStateModel } from 'src/app/store/app-state-model.interface';
import { HerosSearchResultsStateModel } from './heros-search-results-state-model.interface';
import { PageEvent } from '@angular/material/paginator';

export const getHerosSearchResults = (appState: AppStateModel): HerosSearchResultsStateModel => {
  return appState.herosSearchResults;
};

export const getPageEvent = (appState: AppStateModel): PageEvent => {
  return getHerosSearchResults(appState).pageEvent;
};

export const getPageSize = (appState: AppStateModel): number => {
  return getPageEvent(appState).pageSize;
};

export const getPageIndex = (appState: AppStateModel): number => {
  return getPageEvent(appState).pageIndex;
};
