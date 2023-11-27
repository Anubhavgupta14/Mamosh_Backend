const bcrypt = require('bcrypt');
const model = require("../models/User");
const jwt = require('jsonwebtoken')
const User = model.User;

exports.signup = async (req, res) => {
    try {
        const { firstname, lastname, email, phoneno, password } = req.body;

        // Check if the email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user instance
        const newUser = new User({
            firstname,
            lastname,
            email,
            phoneno,
            password: hashedPassword,
        });

        // Save the user to the database
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.signin = async(req,res)=>{
    try{
        const {email, password} = req.body
        const user = await User.findOne({ email });

        // Check if the user exists
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const token = jwt.sign({ email: user.email, userpassword: user.password }, process.env.SECRET_KEY, { expiresIn: '1h' });

        // Set the token in a cookie
        res.cookie('token', token, { httpOnly: true });

        // Send the token in the response payload
        res.status(200).json({ token });

    }
    catch(err){
        console.error(err);
        res.status(500).json({ error: err });
    }
};