const express = require('express')
const app = express()
const path = require("path");
const mongoose = require("mongoose")
const users = require("./routes/api/login")
const bodyParser = require('body-parser')
var session = require('express-session')
var http = require("http").Server(app);





app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    useNewUrlParser: true
})); //DB CONFIG
const db = require('./config/keys').mongoURI

//use sessions for tracking logins
app.use(session({
    user: {},
    secret: 'secret',
    resave: true,
    saveUninitialized: false
}));


mongoose.connect(db, { useNewUrlParser: true })
    .then(() => {
        console.log("connected")
    }).catch(err => {
        console.log(err)
    })


app.use('/api/login', users)

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "/index.html"));
});
app.get('/invalidpassword', function(req, res) {
    res.sendFile(path.join(__dirname, "/invalidpassword.html"))
})

http.listen(process.env.PORT || 3000, function() {
    console.log("Listening on port 3000");
})