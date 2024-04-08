const axios = require('axios');

const getCharacters = async (url) => {
  const response = await axios.get(url);

  return response.data.results;
};

module.exports = {
  getCharacters
}
