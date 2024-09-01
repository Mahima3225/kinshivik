const path = require('path');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const bcryptjs = require('bcryptjs');
const fsPromises = require('fs').promises;
const User = require("../models/user");





// ---*---*---*---*---*---*---*---Signup function*---*---*---*---*---*---*---*---*---*




export const signup = async (req, res, next) => {

    // const {firstname,lastname, username,email, password,birthDate,birthMonth,birthYear,gender } = req.body;

    const reqBodyObject = req.body;
    if (!reqBodyObject.username || !reqBodyObject.password){
       return (res.status(400).json({ 'message': 'Username and password are required.' })); 
    } 

    
    const duplicate = await User.findOne({ username: `${reqBodyObject.username}` });
    if (duplicate) {
        return res.sendStatus(409); //conflict
      
    } 


    try{  
        //encrypt the password using 3rd party library
        const hashedPassword = await bcryptjs.hash(reqBodyObject.password,10);

        //store the new user
    

        const newUser = new User({
            firstname : reqBodyObject.firstname,
            lastname : reqBodyObject.lastname,
            username : reqBodyObject.username,
            email : reqBodyObject.email,
            password : hashedPassword,
            birthDate : reqBodyObject.birthDate,
            birthMonth : reqBodyObject.birthMonth,
            birthYear : reqBodyObject.birthYear,
            gender : reqBodyObject.gender

        });

         
        await newUser.save();
        res.status(201).json({ 'success': `Signup successful! New user ${username} created!` });
            
         
    }
    catch(err){
        res.status(500).json({ 'message': err.message });

    }



} 




// ---*---*---*---*---*---*---*---Signin function*---*---*---*---*---*---*---*---*---*


export const signin = async (req, res, next) => {
    const { email, password } = req.body;
  
    if (!email || !password || email === '' || password === '') {
        return (res.status(400).json({ 'message': 'Username and password are required.' }));
      
    }
  
    try {
      //Find User
      const validUser = await User.findOne({ email : email });
      
      if (!validUser) {
        return (res.status(404).json({ 'message': 'User not found' }));
      }

      //Validate Password
      const validPassword = await bcryptjs.compare(password, validUser.password);
      
      if (!validPassword) {
        return (res.status(403).json({ 'Access Denied': 'Password invalid ,Access Denied !' }));
      }






























































      

      //Sign JWT token
      const accessToken = jwt.sign(
        {
            "username" : validUser.username

        },process.env.ACCESS_TOKEN_SECRET,{expiresIn:'50s'}
      );

      const refreshToken = jwt.sign(
        {
            "username" : foundUser.username

        },process.env.REFRESH_TOKEN_SECRET,{expiresIn:'1d'}
      );

      // Saving refreshToken with current user
      const otherUsers = usersDB.users.filter(person => person.username !== foundUser.username);
      const currentUser = { ...foundUser, refreshToken };
      usersDB.setUsers([...otherUsers, currentUser]);
      await fsPromises.writeFile(
          path.join(__dirname, '..', 'data', 'users.json'),
          JSON.stringify(usersDB.users)
      );
      res.cookie('jwt', refreshToken, {httpOnly : true, maxAge : 24 * 60 * 60 * 1000})
      // res.json({ 'success': `User ${user} is logged in!` });
      res.json({accessToken})
     















      const token = jwt.sign(
        { id: validUser._id, isAdmin: validUser.isAdmin },
        process.env.JWT_SECRET
      );
  
      const { password: pass, ...rest } = validUser._doc;
  
      res
        .status(200)
        .cookie('access_token', token, {
          httpOnly: true,
        })
        .json(rest);
    } catch (error) {
      next(error);
    }
  };