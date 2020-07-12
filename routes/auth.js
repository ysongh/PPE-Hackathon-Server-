const express = require('express');
const router = express.Router();

const User = require('../models/Users');

// POST /api/auth/register
// create a new user
router.post('/register', async (req, res) => {
    try{
        const user = await User.findOne({ email: req.body.email });

        if(user){
            return res.status(400).json({ errors: 'Email Already Exists' });
        }

        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });

        const dataUser = await User.create(newUser);

        return res.status(201).json({ data: dataUser });
    } catch(err){
        console.error(err);
    }
});

// PUT /api/auth/login
// login user
router.put('/login', async (req, res) => {
    try{
        const user = await User.findOne({ email: req.body.email });

        if(!user){
            return res.status(400).json({ errors: 'Email not found' });
        }

        if(req.body.password != user.password){
            return res.status(400).json({ errors: 'Invalid email or password' });
        }

        const loginData = {
            name: user.name,
            email: user.email,
        };

        return res.status(200).json({ data: loginData });
    } catch(err){
        console.error(err);
    }
});

module.exports = router;