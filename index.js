/* Ejercicio de prueba*/
require('dotenv').config();
const cors = require('cors');

const morgan = require('morgan');

const mongo = require('./connectToMongoDB');

const port = process.env.APP_PORT;
const morganFormat = process.env.APP_MORGAN_FORMAT;

const express = require('express')
const app = express()

app.use(cors());

app.use(morgan('dev'));

app.get('/', function (req, res) {
    const texto = 'Esta es información obtenidad desde tu API Meeting 41!!';
    console.log(texto)
    res.send(texto)
})

app.get('/version', function (req, res) {
    res.send('API v1.0 (con soporte de RDS by AWS')
})


app.post('/users', async (req, res) => {
    try {
        await mongo.addNewUser();
        res.sendStatus(200);
    } catch (err) {
        console.error(`Error: `, err.message);
    }
})

app.get('/users', async (req, res) => {
    try {
        let users = await mongo.getAllUsers();
        res.send(users);
    } catch (err) {
        console.error(`Error: `, err.message);
    }
})

app.listen(port, () => {
    console.log(`Aplicación escuchando en el puerto ${port}`);
})
