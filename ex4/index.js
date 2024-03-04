const CharacterService = require('./services/characters');
const api = require('./lib/api'); // dependencia

const characterService = new CharacterService(api);

console.log(characterService.gerUrl('characters'));

