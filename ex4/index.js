const CharacterService = require('./services/characters');
const api = require('./lib/api'); // dependencia


async function init () {
  const characterService = new CharacterService(api);
  const url = characterService.gerUrl('characters');

  console.log(url);
  const results = await characterService.getCharacters(url);

  const names = results.map((character) => character.name);

  console.log(names);
}

init();
