import { HerosSearchFormValueModel } from '../types/heros-search-form-value-model.interface';
import { AppStateModel } from 'src/app/store/app-state-model.interface';
import { HerosSearchFormStateModel } from '../types/heros-search-form-state-model.interface';

export const getHerosSearchFormState = (appState: AppStateModel): HerosSearchFormStateModel =>
  appState.herosSearchForm;

export const getHerosSearchFormValue = (appState: AppStateModel): HerosSearchFormValueModel =>
  getHerosSearchFormState(appState).model;

export const isHerosSearchFormFilled = (appState: AppStateModel): boolean =>
  Object.values(getHerosSearchFormValue(appState)).some(Boolean);
