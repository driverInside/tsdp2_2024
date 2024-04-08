const axios = require('axios');
const Character = require('./characters');
const api = require('../lib/api'); 

jest.mock('axios');

const mockCharacterNames = [
  'Rick Sanchez',
  'Morty Smith',
  'Summer Smith',
  'Beth Smith',
  'Jerry Smith',
  'Abadango Cluster Princess',
  'Abradolf Lincler',
  'Adjudicator Rick',
  'Agency Director',
  'Alan Rails',
  'Albert Einstein',
  'Alexander',
  'Alien Googah',
  'Alien Morty',
  'Alien Rick',
  'Amish Cyborg',
  'Annie',
  'Antenna Morty',
  'Antenna Rick',
  'Ants in my Eyes Johnson'
];

describe('Character service', () => {
  it('should throws an error', () => {
    const characterService = new Character();
    expect(() => {
      characterService.get('any_key');
    }).toThrow();
  });

  it('should return the characters url', () => {
    const characterService = new Character();

    expect(characterService.gerUrl('characters')).toBe('https://rickandmortyapi.com/api/character');
  });

  it('should return the characters names', async () => {
    const characterService = new Character();
    const url = characterService.gerUrl('characters');

    expect(await characterService.getCharacters(url))
      .toStrictEqual(mockCharacterNames);
  });
});
