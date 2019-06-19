const express = require('express');
const mongoose = require('mongoose');
const User = require('../../models/User');
const auth = require('../../middleware/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');


const router = express.Router();


// @route  GET /api/auth
// @desc   Get user data
// @access Private
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

// @route  POST /api/auth
// @desc   Authenticate user and get token
// @access Public
router.post('/', async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;  
    
    try {
        // See if user already exists
        let user = await User.findOne({ email });

        if (!user){
            res.status(400).json({ errors: [ { msg: 'Invalid Credentials' } ] });
        }
        // Validate password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            res.status(400).json({ errors: [ { msg: 'Invalid Credentials' } ] });
        }

        // return jsonwebtoken
        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 360000 },
        (err, token) => {
            if (err) throw err;
            res.json({token});
        });
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
});


module.exports = router;