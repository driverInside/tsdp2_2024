require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT;


app.get('/', function (_, res) {
  res.send({
    message: 'Hola FES Aragón'
  });
});

app.listen(PORT, () => {
  console.log('El servidor está corriendo en el puerto ' + PORT);
});
