import { AppStateModel } from "../app-state-model.interface";
import { HerosStateModel } from './heros-state-model.interface';
import { Hero } from 'src/app/types/hero.interface';
import { createSelector } from '@ngxs/store';
import { getHerosSearchFormValue } from 'src/app/hero-search-form/store/heros-search-form.selectors';
import { HerosSearchFormValueModel } from 'src/app/hero-search-form/types/heros-search-form-value-model.interface';
import { doesHeroMatchFormValue } from 'src/app/shared/hero.helpers';

export const getHerosState = (appState: AppStateModel): HerosStateModel => {
  return appState.heros;
}

export const getHeros = (appState: AppStateModel): Hero[] => {
  return getHerosState(appState).heros;
}

export const getFilteredHeros = createSelector([getHeros, getHerosSearchFormValue], (heros: Hero[], formValue: HerosSearchFormValueModel) => {
  return heros.filter(hero => {
    return doesHeroMatchFormValue(hero, formValue);
  });
});

