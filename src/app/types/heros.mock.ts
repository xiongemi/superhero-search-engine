import { Hero } from './hero.interface';

export const mockMaleHumanHero: Hero = {
  id: 1,
  name: 'A-Bomb',
  slug: '1-a-bomb',
  powerstats: {
    intelligence: 38,
    strength: 100,
    speed: 17,
    durability: 80,
    power: 24,
    combat: 64
  },
  appearance: {
    gender: 'Male',
    race: 'Human',
    height: [
      '6\'8',
      '203 cm'
    ],
    weight: [
      '980 lb',
      '441 kg'
    ],
    eyeColor: 'Yellow',
    hairColor: 'No Hair'
  },
  biography: {
    fullName: 'Richard Milhouse Jones',
    alterEgos: 'No alter egos found.',
    aliases: [
      'Rick Jones'
    ],
    placeOfBirth: 'Scarsdale, Arizona',
    firstAppearance: 'Hulk Vol 2 #2 (April, 2008) (as A-Bomb)',
    publisher: 'Marvel Comics',
    alignment: 'good'
  },
  work: {
    occupation: 'Musician, adventurer, author; formerly talk show host',
    base: '-'
  },
  connections: {
    groupAffiliation: 'Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom',
    relatives: 'Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)'
  },
  images: {
    xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/1-a-bomb.jpg',
    sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/1-a-bomb.jpg',
    md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/1-a-bomb.jpg',
    lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/1-a-bomb.jpg'
  }
};

export const mockOtherNonHumanNeutral: Hero = {
  id: 503,
  name: 'One-Above-All',
  slug: '503-one-above-all',
  powerstats: {
    intelligence: 100,
    strength: 100,
    speed: 100,
    durability: 100,
    power: 100,
    combat: 100
  },
  appearance: {
    gender: '-',
    race: 'Cosmic Entity',
    height: [
      '-',
      '0 cm'
    ],
    weight: [
      '- lb',
      '0 kg'
    ],
    eyeColor: '-',
    hairColor: '-'
  },
  biography: {
    fullName: '',
    alterEgos: 'No alter egos found.',
    aliases: [
      'One Above All'
    ],
    placeOfBirth: '-',
    firstAppearance: 'Doctor Strange Vol 2 #13',
    publisher: 'Marvel Comics',
    alignment: 'neutral'
  },
  work: {
    occupation: '-',
    base: '-'
  },
  connections: {
    groupAffiliation: '-',
    relatives: 'Living Tribunal (creation)'
  },
  images: {
    xs: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/xs/503-one-above-all.jpg',
    sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/503-one-above-all.jpg',
    md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/503-one-above-all.jpg',
    lg: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/lg/503-one-above-all.jpg'
  }
};
