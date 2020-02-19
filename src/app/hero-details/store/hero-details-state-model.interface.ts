import { Hero } from 'src/app/types/hero.interface';

export interface HeroDetailsStateModel {
  hero: Hero;
  loading: boolean;
}
