import { Hero } from '../../types/hero.interface';

export interface HerosStateModel {
  heros: Hero[];
  loading: boolean;
  error: any;
}
