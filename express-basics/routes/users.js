const express = require('express')
const router = express.Router()

router.use(logger) //logs out /users, /users/new, etc.

//users.js is a router, which is independent from main router
//this file goes from top to bottom, so think of each "router." as an if-statement, where the file checks if the url matches the below requirements.

router.get('/', (req, res) => {
   console.log(req.query.name); //get query param from url
    res.send("hello from users")
})

//connected with below code, for router.post, takes firstName
router.get('/new', (req, res) => {
    res.render("users/new")
})

router.post('/', (req, res) => {
    const isValid = true;
    if (isValid) {
        users.push({firstName: req.body.firstName})
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log('error');
        res.render('users/new', {firstName: req.body.firstName})
    }
})

//get all urls with an /:id at the end, dynamic routes places at the bottom of 'router.' list
router
.route('/:id')
.get((req, res) => {
    console.log(req.user);
    res.send(`get users id ${req.params.id}`)
})
.put((req, res) => {
    res.send(`put users id ${req.params.id}`)
})
.delete((req, res) => {
    res.send(`delete users id ${req.params.id}`)
})

const users = [{name: "A"}, {name: "B"}]
//router.param looks for code with route of "id", (above)
//router.param is middleware that works between req/res
router.param('id', (req, res, next, id) => {
    req.user = users[id] //can be used throughout the code
    next(); //run get above, so no infinite load
})

function logger(req,res,next) {
    console.log(req.originalUrl);
    next();
}

//notice how get uses / and /new, and we export our new router.
module.exports = router; 