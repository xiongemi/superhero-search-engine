import { AppStateModel } from 'src/app/store/app-state-model.interface';
import { HeroDetailsStateModel } from './hero-details-state-model.interface';
import { Hero } from 'src/app/types/hero.interface';

export const getHeroDetailsState = (appState: AppStateModel): HeroDetailsStateModel =>
  appState.heroDetails;

export const getHeroDetails = (appState: AppStateModel): Hero => getHeroDetailsState(appState).hero;
