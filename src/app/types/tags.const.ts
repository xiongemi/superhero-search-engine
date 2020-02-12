import { ToggleButton } from './toggle-button.interface';
import { TagValue } from './tag-value.enum';

export const Tags: ToggleButton<TagValue>[] = [
  { value: TagValue.Female, viewValue: 'Female' },
  { value: TagValue.Male, viewValue: 'Male' },
  { value: TagValue.OtherGender, viewValue: 'Other Gender' },
  { value: TagValue.Human, viewValue: 'Human' },
  { value: TagValue.NonHuman, viewValue: 'Non-Human' },
  { value: TagValue.Hero, viewValue: 'Hero' },
  { value: TagValue.Villian, viewValue: 'Villian' },
  { value: TagValue.Neutral, viewValue: 'Neutral' }
];
