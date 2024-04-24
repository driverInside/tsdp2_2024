require('dotenv').config();

require('./db/mongo');

const app = require('./app');


const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log('El servidor está corriendo en el puerto ' + PORT);
});
