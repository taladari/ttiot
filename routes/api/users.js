const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const config = require('config');


const { check, validationResult } = require('express-validator/check');

const router = express.Router();

// @route  POST /api/users
// @desc   Registers a new user
// @access Public
router.post(
    '/',
    [
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Please enter a password with 1 or more characters').isLength({min: 1})
    ],
    async (req, res) => {
        console.log('register request');
    // Validate user input
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const { email, password } = req.body;  
    
    try {
        // See if user already exists
        let user = await User.findOne({ email });

        if (user){
            return res.status(400).json({ errors: [ { msg: 'User already exists' } ] });
        }
        
        // Create new user model
        user = new User({
            email,
            password
        });

        // Encrypt pasword 
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // Save user to DB
        await user.save();

        return res.json({ msg: "success" });
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;