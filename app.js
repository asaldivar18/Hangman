const express = require('express')
const app = express()
const path = require("path");
const mongoose = require("mongoose")
const users = require("./routes/api/login")
const bodyParser = require('body-parser')



app.use(express.static(__dirname + '/Public'));
app.use(bodyParser.urlencoded({ extended: true }));
//DB CONFIG
const db = require('./config/keys').mongoURI

mongoose.connect(db, { useNewUrlParser: true })
    .then(() => {
        console.log("connected")
    }).catch(err => {
        console.log(err)
    })


app.use('/api/login', users)


const port = process.env.PORT || 3000


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + "/Public/index.html"));
});

app.listen(port, () => console.log('Server started listening on port ' + port))