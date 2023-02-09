const express = require('express');
const favicon = require('express-favicon');
const path = require('path');

const port = process.env.PORT || 7200;
const host = '0.0.0.0';

const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'dist')));
app.get('/ping', (req, res) => res.send('pong'));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.listen(port, host, () => console.log(`listening on ${host}:${port}`));