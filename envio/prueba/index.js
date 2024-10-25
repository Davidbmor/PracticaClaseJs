const express = require('express');
var cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // Middleware para procesar el cuerpo JSON

const mensaje = {
  lista: [
    {
      marca: 'Seat',
      matricula: '45345',
      color: 'rojo',
      averia: 'motor.'
    },
    {
      marca: 'Seat',
      matricula: '65765',
      color: 'azul',
      averia: 'gfdgdf'
    },
    {
      marca: 'Opel',
      matricula: '63345',
      color: 'verde',
      averia: 'ruedas.'
    }
  ]
};

app.get('/', (req, res) => {
  res.send(mensaje);
});

app.post('/newCar', (req, res) => {
  console.log(req.body); // Esto ahora debería mostrar el cuerpo de la solicitud en la consola
  res.send('Car received'); // Agrega una respuesta para confirmar la recepción
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
