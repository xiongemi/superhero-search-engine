import { Hero } from '../types/hero.interface';
import { Gender } from './gender.enum';

export const getHeroGender = (hero: Hero): Gender => {
  switch (hero.appearance.gender) {
    case 'Female':
      return Gender.Female;
      break;
    case 'Male':
      return Gender.Male;
      break;
    default:
      return Gender.Other;
      break;
  }
};
