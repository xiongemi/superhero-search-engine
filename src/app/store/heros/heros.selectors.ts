import { AppStateModel } from '../app-state-model.interface';
import { HerosStateModel } from './heros-state-model.interface';
import { Hero } from 'src/app/types/hero.interface';
import { createSelector } from '@ngxs/store';
import { getHerosSearchFormValue } from 'src/app/hero-search-form/store/heros-search-form.selectors';
import { HerosSearchFormValueModel } from 'src/app/hero-search-form/types/heros-search-form-value-model.interface';
import { doesHeroMatchFormValue } from 'src/app/shared/hero.helpers';
import { PageEvent } from '@angular/material/paginator';
import { getPageEvent } from 'src/app/heros-search-results/store/heros-search-results.selectors';

export const getHerosState = (appState: AppStateModel): HerosStateModel => {
  return appState.heros;
};

export const getHeros = (appState: AppStateModel): Hero[] => {
  return getHerosState(appState).heros;
};

export const getFilteredHeros = createSelector(
  [getHeros, getHerosSearchFormValue],
  (heros: Hero[], formValue: HerosSearchFormValueModel) => {
    return heros.filter(hero => {
      return doesHeroMatchFormValue(hero, formValue);
    });
  }
);

export const getHerosLength = createSelector([getFilteredHeros], heros => heros.length);

export const getFilteredHerosOnPage = createSelector(
  [getFilteredHeros, getPageEvent],
  (heros: Hero[], pageEvent: PageEvent) => {
    return heros.slice(
      pageEvent.pageSize * pageEvent.pageIndex,
      pageEvent.pageSize * (pageEvent.pageIndex + 1)
    );
  }
);
