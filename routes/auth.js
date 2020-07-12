const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

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

        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(req.body.password, salt);

        await newUser.save();

        return res.status(201).json({ data: newUser });
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

        const isMatch = await bcrypt.compare(req.body.password, user.password);

        if(!isMatch){
            return res.status(400).json({ errors: 'Invalid email or password' });
        }

        const payload = { id: user.id };

        jwt.sign(payload, keys.secretOrKey, { expiresIn: '1 days' },
            (err, token) => {
                if (err) throw err;
                res.status(200).json({ token });
            }
        );
        
    } catch(err){
        console.error(err);
    }
});

module.exports = router;