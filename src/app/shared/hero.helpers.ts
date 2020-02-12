import { Hero } from '../types/hero.interface';
import { Gender } from '../types/gender.enum';
import { Race } from '../types/race.enum';
import { Alignment } from '../types/alignment.enum';
import { HerosSearchFormValueModel } from '../hero-search-form/types/heros-search-form-value-model.interface';
import { compareTwoStrings } from 'string-similarity';

export function getHeroGender(hero: Hero): Gender {
  if (hero.appearance.gender === 'Male') {
    return Gender.Male;
  }
  if (hero.appearance.gender === 'Female') {
    return Gender.Female;
  }
  return Gender.Other
}

export function getHeroRace(hero: Hero): Race {
  if (hero.appearance.race === 'Human') {
    return Race.Human;
  }
  if (hero.appearance.race === 'Mutant') {
    return Race.Mutant;
  }
  return Race.NonHuman;
}

export function getHeroAlignment(hero: Hero): Alignment {
  if (hero.biography.alignment === 'good') {
    return Alignment.Hero;
  }
  if (hero.biography.alignment === 'bad') {
    return Alignment.Villian;
  }
  return Alignment.Neutral;
}

export function doesHeroMatchFormValue(hero: Hero, formValue: HerosSearchFormValueModel) {
  let isMatch = true;
  if (formValue.name && formValue.name.length > 2) {
    isMatch = hero.slug.includes(formValue.name.toLowerCase()) || compareTwoStrings(hero.name, formValue.name) > 0.4 || compareTwoStrings(hero.biography.fullName, formValue.name) > 0.4;
  }
  if (formValue.gender) {
    isMatch = isMatch && getHeroGender(hero) === formValue.gender;
  }
  if (formValue.race) {
    isMatch = isMatch && getHeroRace(hero) === formValue.race;
  }
  if (formValue.alignment) {
    isMatch = isMatch && getHeroAlignment(hero) === formValue.alignment;
  }
  return isMatch;
}