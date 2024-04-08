const api = require('./api');

console.log(api.getUrl('characters'));
console.log(api.getUrl('locations'));

async function init() {
  const characters = await api.getCharacters();
  console.log(characters)
}

init();
