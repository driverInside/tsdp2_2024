require('dotenv').config();
console.log(process.env);

const app = require('./app');

app.get('/', function (_, res) {
  res.send({
    message: 'Hola FES Aragón'
  });
});

app.listen(3000, () => {
  console.log('El servidor está corriendo en el puerto 3000');
});
