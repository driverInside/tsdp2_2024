const api = require('./api');

async function init() {
  const characters = await api.getCharacters();
  const locations = await api.getLocations();
  console.log(characters);
  console.log(locations);
}

init();
