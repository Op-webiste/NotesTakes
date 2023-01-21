const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const port = 80;
mongoose.connect('mongodb://127.0.0.1:27017/NotesTakes_website_SignUp', { useNewUrlParser: true, useUnifiedTopology: true });

const SignUp = require('./database/signup');
const Contact = require('./database/contact');

app.use('/static', express.static('static'))
app.use(express.urlencoded())

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.status(200).render('home.pug')
})

app.get('/takenotes', (req, res) => {
    res.status(200).render('takenotes.pug')
})

app.get('/contact', (req, res) => {
    res.status(200).render('contact.pug')
})

app.post('/contact', (req, res) => {
    var mydata = new Contact(req.body);
    mydata.save().then(() => {
        res.send("Your Message is Delivered!")
    }).catch(() => {
        res.status(200).send("Your Message is not Delivered!")
    });
})

app.get('/login', (req, res) => {
    res.status(200).render('login.pug')
})




app.get('/signup', (req, res) => {
    res.status(200).render('SignUp.pug')
})


app.post('/signup', (req, res) => {
    const password = req.body.password;
    const cpassword = req.body.confirmpassword;

    const email = req.body.email;
    const cemail = req.body.confirmemail;

    if(password === cpassword && email===cemail){
        var mydata = new SignUp(req.body);
        mydata.save().then(() => {
            res.status(200).render('home.pug');
        }).catch(() => {
            res.status(200).send("This data is already exsits or this data is wrong, Please insert unique and correct data.")
        });
    }
    else{
        res.send("INVALID DATA");
    }
  
})



app.post('/login',async(req,res)=>{

    try{
        const email = req.body.email;
        const password = req.body.password;

        const username = await SignUp.findOne({email:email});

        if(username.password === password){
           res.status(200).render("takenotes.pug")
        }
        else{
            res.status(200).send("Invalid data")
        }
    }
    catch(error){
     res.status(400).send('Email Not Found')
    }
    


})
app.listen(80, () => {
    console.log("We are live now..!")
})