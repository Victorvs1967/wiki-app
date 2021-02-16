const express = require('express');
const template = require('./src/template');

const app = express();
app.use('/dist', express.static('../dist'));

app.get('*', (req, res) => res.send(template('Hello, World!')));
app.listen(process.env.APP_FRONTEND_PORT);
