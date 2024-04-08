const RICK_AND_MORTY_API_URL = 'https://rickandmortyapi.com/api/';

class Character {
  constructor (api) {
    this.endpoints = {
      characters: 'character',
      locations: 'location',
    };
    this.url = RICK_AND_MORTY_API_URL;
    this.api = api;
  }

  gerUrl(key) {
    if (!this.endpoints[key]) {
      throw new Error('Invalid key provided');
    }
    return `${RICK_AND_MORTY_API_URL}${this.endpoints[key]}`;
  }

  async getCharacters(url) {
    return this.api.getCharacters(url);
  }
}

module.exports = Character;
