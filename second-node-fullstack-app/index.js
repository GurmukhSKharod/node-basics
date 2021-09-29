const { response } = require('express');
const express = require('express');
const { readFile } = require('fs');
const { request } = require('http');
const app = express();

//request - users incoming data, response - servers outgoing data
//the following code uses callbacks
app.get('/', (request, response) => {
    readFile('./home.html', 'utf8', (err, html) => {
        if(err){
            response.status(500).send("sorry, out of order.");
        }
        response.send(html);
    })
});

//the following code uses promises, not callbacks
const { readFile } = require('fs').promises;

app.get('/', async (request, response) => {
    response.send( await readFile('./home.html', 'utf8') );
});


app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`))

