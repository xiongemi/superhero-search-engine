import {
  getHeroGender,
  getHeroAlignment,
  getHeroRace,
  doesHeroMatchFormValue
} from './hero.helpers';
import { mockMaleHumanHero, mockOtherNonHumanNeutral } from '../types/heros.mock';
import { Gender } from '../types/gender.enum';
import { Race } from '../types/race.enum';
import { Alignment } from '../types/alignment.enum';
import { mockHerosSearchFormValue } from '../hero-search-form/types/heros-search-form-value.mock';

describe('Hero Helpers', () => {
  describe('Male Human Hero', () => {
    it('should get hero gender', () => {
      const actual = getHeroGender('Male');
      const expected = Gender.Male;
      expect(actual).toEqual(expected);
    });

    it('should get hero race', () => {
      const actual = getHeroRace('Human');
      const expected = Race.Human;
      expect(actual).toEqual(expected);
    });

    it('should get hero alignment', () => {
      const actual = getHeroAlignment('good');
      const expected = Alignment.Hero;
      expect(actual).toEqual(expected);
    });
  });

  describe('Other Non Human Neutral', () => {
    it('should get hero gender', () => {
      const actual = getHeroGender('-');
      const expected = Gender.Other;
      expect(actual).toEqual(expected);
    });

    it('should get hero race', () => {
      const actual = getHeroRace('Cosmic Entity');
      const expected = Race.NonHuman;
      expect(actual).toEqual(expected);
    });

    it('should get hero alignment', () => {
      const actual = getHeroAlignment('neutral');
      const expected = Alignment.Neutral;
      expect(actual).toEqual(expected);
    });
  });

  describe('doesHeroMatchFormValue', () => {
    it('should return true if hero matches filter form value', () => {
      const actual = doesHeroMatchFormValue(mockOtherNonHumanNeutral, mockHerosSearchFormValue);
      const expected = true;
      expect(actual).toEqual(expected);
    });

    it('should return false if hero matches filter form value', () => {
      const actual = doesHeroMatchFormValue(mockMaleHumanHero, mockHerosSearchFormValue);
      const expected = false;
      expect(actual).toEqual(expected);
    });

    it('should return true if hero race matches the form value', () => {
      const actual = doesHeroMatchFormValue(mockOtherNonHumanNeutral, { name: 'Cosmic Entity' });
      const expected = true;
      expect(actual).toEqual(expected);
    });
  });
});
