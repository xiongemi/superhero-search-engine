import { HerosSearchFormValueModel } from './heros-search-form-value-model.interface';
import { Gender } from 'src/app/types/gender.enum';
import { Race } from 'src/app/types/race.enum';
import { Alignment } from 'src/app/types/alignment.enum';

export const mockHerosSearchFormValue: HerosSearchFormValueModel = {
  name: 'one',
  gender: Gender.Other,
  race: Race.NonHuman,
  alignment: Alignment.Neutral
};
