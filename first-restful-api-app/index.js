const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json()); //middleware that converts all incoming user requests into JSON, so it can be destructured below in app.post.

app.listen( PORT, () => {
     console.log(`App running on http://localhost:${PORT}`);
})

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: 'tshirt',
        size: 'large'
    })
})

//the url from client sends over an id, and some JSON with a logo.
//middleware converts any non-json into json.
app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if(!logo) {
        res.status(418).send({
            message: "We need a logo!"
        })
    }

    res.send({
        tshirt: `tshirt with your ${logo} and ID of ${id}`
    })
})

