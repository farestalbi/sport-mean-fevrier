const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const { $ } = require('protractor');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sport', {useNewUrlParser: true, useUnifiedTopology: true});
                  //URL/NomDB(test)
const Player = require('./models/player');

const User =require('./models/user');

//#region  Security configuration

//#region players
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/getAllPlayers', (req, res) => {
    Player.find((err,docs) => {
        if (err){
            console.log('error with DB');
        } else {
            res.status(200).json({
                allPlayers: docs
            });
        }
    })
});

app.post('/addPlayer', (req, res) => {
    console.log('Appel de AddPlayer');
    //Insert data into DB
    const player = new Player({
        name: req.body.name,
        poste:req.body.post,
        n:req.body.n,
        age:req.body.age,
        description : req.body.description,
    });

    player.save().then(
        (data)=> {
            if (data) {
                res.status(200).json({
                    message: 'Player Added with success'
                })
            }
        }
    );
});

app.get('/getPlayerById', (req, res) => {
    console.log('appel de getPlyaerById');
});

app.delete('/deletePlayer/:id', (req, res) => {
    console.log('Delete player By ID', req.params.id);
    Player.deleteOne({_id: req.params.id}).then(
        res.status(200).json({
            message: 'Player deleted with success'
        })
    )
});


app.put('/editPlayer/:id', (req, res) => {
    console.log('New Player', req.body);

});
//#endregion


app.post('/signup', (req, res)=>{
    bcrypt.hash(req.body.pwd, 10).then((cryptedPwd) => {
            const user = new User({
                firstName: req.body.firstName,
                lastName:req.body.lastName,
                email:req.body.email,
                pwd:cryptedPwd,
                    });
                    user.save().then(
                        res.status(200).json({
                            message:"User addes Successfully",
                        })
                    );
        });
  
});
module.exports = app;