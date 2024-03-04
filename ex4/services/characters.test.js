const Character = require('./characters');

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

  it('should return the characters names', () => {
    
  });
});