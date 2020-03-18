import { AppStateModel } from '../app-state-model.interface';
import { Hero } from 'src/app/types/hero.interface';
import { createSelector } from '@ngxs/store';
import { doesHeroMatchFormValue } from 'src/app/shared/services/hero.helpers';
import { PageEvent } from '@angular/material/paginator';
import { getHerosSearchFormValue } from 'src/app/modules/hero-search-form/store/heros-search-form.selectors';
import { HerosSearchFormValueModel } from 'src/app/modules/hero-search-form/types/heros-search-form-value-model.interface';
import { getPageEvent } from 'src/app/modules/heros-search-results/store/heros-search-results.selectors';

export const getHeros = (appState: AppStateModel): Hero[] => {
  return appState.heros;
};

export const isHerosLoaded = createSelector([getHeros], heros => !heros.length);

export const getFilteredHeros = createSelector(
  [getHeros, getHerosSearchFormValue],
  (heros: Hero[], formValue: HerosSearchFormValueModel) => {
    return heros && heros.length && formValue
      ? heros.filter(hero => {
          return doesHeroMatchFormValue(hero, formValue);
        })
      : [];
  }
);

export const getHerosLength = createSelector([getFilteredHeros], heros => heros.length);

export const getFilteredHerosOnPage = createSelector(
  [getFilteredHeros, getPageEvent],
  (heros: Hero[], pageEvent: PageEvent): Hero[] => {
    return (
      heros.slice(
        pageEvent.pageSize * pageEvent.pageIndex,
        pageEvent.pageSize * (pageEvent.pageIndex + 1)
      ) || []
    );
  }
);

export const getHeroIds = createSelector([getHeros], (heros: Hero[]): number[] =>
  heros.map(hero => hero.id)
);

export const getRandomHeroId = () =>
  createSelector([getHeroIds], (ids: number[]) => ids[Math.floor(Math.random() * ids.length)]);
