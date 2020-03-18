import { Hero } from '../../types/hero.interface';
import { Gender } from '../../types/gender.enum';
import { Race } from '../../types/race.enum';
import { Alignment } from '../../types/alignment.enum';
import { HerosSearchFormValueModel } from '../../modules/hero-search-form/types/heros-search-form-value-model.interface';
import { compareTwoStrings } from 'string-similarity';
import { ParamMap } from '@angular/router';

export function getHeroGender(gender: string): Gender {
  if (gender === 'Male') {
    return Gender.Male;
  }
  if (gender === 'Female') {
    return Gender.Female;
  }
  return Gender.Other;
}

export function getHeroRace(race: string): Race {
  if (race === 'Human') {
    return Race.Human;
  }
  if (race === 'Mutant') {
    return Race.Mutant;
  }
  return Race.NonHuman;
}

export function getHeroAlignment(alignment: string): Alignment {
  if (alignment === 'good' || alignment === Alignment.Hero) {
    return Alignment.Hero;
  }
  if (alignment === 'bad' || alignment === Alignment.Villian) {
    return Alignment.Villian;
  }
  return Alignment.Neutral;
}

export function doesHeroMatchFormValue(hero: Hero, formValue: HerosSearchFormValueModel) {
  let isMatch = true;
  if (formValue.name && formValue.name.length > 2) {
    isMatch =
      hero.slug.includes(formValue.name.toLowerCase()) ||
      compareTwoStrings(hero.name, formValue.name) > 0.4 ||
      compareTwoStrings(hero.biography.fullName, formValue.name) > 0.4 ||
      (hero.appearance.race && compareTwoStrings(hero.appearance.race, formValue.name) > 0.8);
  }
  if (formValue.gender) {
    isMatch = isMatch && getHeroGender(hero.appearance.gender) === formValue.gender;
  }
  if (formValue.race) {
    isMatch = isMatch && getHeroRace(hero.appearance.race) === formValue.race;
  }
  if (formValue.alignment) {
    isMatch = isMatch && getHeroAlignment(hero.biography.alignment) === formValue.alignment;
  }
  return isMatch;
}

export function transformsQueryMapToFormValues(paramMap: ParamMap): HerosSearchFormValueModel {
  return {
    name: !paramMap.get('name') || paramMap.get('name') === 'null' ? null : paramMap.get('name'),
    gender:
      !paramMap.get('gender') || paramMap.get('gender') === 'null'
        ? null
        : getHeroGender(paramMap.get('gender')),
    race:
      !paramMap.get('race') || paramMap.get('race') === 'null'
        ? null
        : getHeroRace(paramMap.get('race')),
    alignment:
      !paramMap.get('alignment') || paramMap.get('alignment') === 'null'
        ? null
        : getHeroAlignment(paramMap.get('alignment'))
  };
}
