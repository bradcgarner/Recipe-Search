'use strict';

const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || 8080, () => console.log(`listening on port ${process.env.PORT || 8080}`));