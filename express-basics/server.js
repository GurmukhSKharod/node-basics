const express = require('express')
const app = express()


app.use(express.static("public")) //use folder of static files
app.use(express.urlencoded({extended: true}))//middleware for post
app.use(express.json());


app.set('view engine', 'ejs')
//app.use(logger) //location of this code matters, top to bottom


//we route to localhost:3000/ defined below. 
//Can use middleware "logger" in between the "/" and the actual get code.
app.get("/", logger, logger, (req, res) => {
    console.log('Here');
    // res.download('server.js'); //download this file
    // res.status(500).send("hello from status error 500");
    // res.json({message: "message from json"});
    // res.send("hello from send")

    /*
    1. "npm i ejs" 
    2. rename html to index.ejs 
    3. install ejs language support 
    4. app.set('view engine','ejs')
    5. we render text to index.ejs using <% ... %>, and use locals to get all info
    */
    res.render('index', { text: "World"});

})


//import the users.js router
const userRouter = require('./routes/users')
app.use("/users", userRouter)


//middleware for logging -> req,res,next
function logger(req,res,next) {
    console.log(req.originalUrl);
    next();
}


app.listen(3000)
