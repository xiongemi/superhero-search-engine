import { PowerStats } from './power-stats.interface';

export interface Hero {
  id: number;
  name: string;
  slug: string;
  powerstats: PowerStats;
  appearance: {
    gender: string;
    race: string;
    height: string[];
    weight: string[];
    eyeColor: string[];
    hairColor: string[];
  };
  biography: {
    fullName: string;
    alterEgos: string;
    aliases: string[];
    placeOfBirth: string;
    firstAppearance: string;
    publisher: string;
    alignment: string;
  };
  work: {
    occupation: string;
    base: string;
  };
  connections: {
    groupAffiliation: string;
    relatives: string;
  };
  images: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
}
