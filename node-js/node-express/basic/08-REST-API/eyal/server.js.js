/******************************************
 *  Author : eyal shemuel   
 *  Created On : Mon Dec 28 2020
 *  File : server.js.js
 *******************************************/

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static('public'))






app.listen(port, () => { console.log(`Listen on port ${port}`) });
