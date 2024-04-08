const RICK_AND_MORTY_API_URL = 'https://rickandmortyapi.com/api/';

const endpoints = {
  characters: 'character',
  locations: 'location',
};

function getUrl(key) {
  if (!endpoints[key]) {
    throw new Error('Invalid key provided');
  }
  return `${RICK_AND_MORTY_API_URL}${endpoints[key]}`;
}

async function getCharacters() {
  const url = getUrl('characters');

  const data = await fetch(url)
    .then(result => result.json());

  /*
  { info: {}, results: [{ name: 'rick'}]}
  
  */
  const names = data.results.map(character => character.name)
  
  return names;
}






























// async function getCharacters() {
//   const url = getUrl('characters');

//   const characters = await fetch(url).then(result => result.json());
//   return characters;
// }

// async function getLocations() {
//   const url = getUrl('locations');

//   const locations = await fetch(url)
//     .then(result => result.json())

//   return locations;
// }

module.exports = {
  getCharacters,
  // getLocations,
  getUrl,
};
