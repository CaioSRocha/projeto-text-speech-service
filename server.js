const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const cors = require('cors')

// View engine
server.set('view engine', 'ejs');

server.use(cors())

server.use(express.static('public'));

//Body parser
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

// Router
server.use('/', require('./routes/routes'));

// End Router
server.listen(3000, () => {
    console.log("O servidor está rodando!")
})