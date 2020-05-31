const express = require( "express" );
const router = express.Router();
const user = require('../models/users.model');


router.post('/login',(req,res) => {

    const {email,password} = req.body;
    res.send(`email:${email}  &  pass:${password}`);
    //todo..
    // validation 
    //jwt ?
    
})

router.get('/login',(req,res) => {
    res.send('hello from login router');
})


module.exports = router;