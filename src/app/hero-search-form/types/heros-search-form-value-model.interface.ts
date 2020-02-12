import { Gender } from 'src/app/types/gender.enum';
import { Race } from 'src/app/types/race.enum';
import { Alignment } from 'src/app/types/alignment.enum';

export interface HerosSearchFormValueModel {
  name?: string;
  race?: Race;
  gender?: Gender;
  alignment?: Alignment;
}
