//get and set user details

import User from "../models/user";

export const getUser = async (req, res, next) => {
    try {
      const user = await User.findById(req.params.userId);
      if (!user) {
        
        return res.status(404).json("404", "user not found");
      }
      const { password, ...rest } = user._doc;
      res.status(200).json(rest);
    } catch (error) {
      console.log(error);
    }
};


export const updateUser = async (req, res, next) => {
    // if (req.user.id !== req.params.userId) {
    //  return res.status(403).json("403", 'You are not allowed to update this user');
      
    // }
    if (req.body.password) {
      if (req.body.password.length < 6) {
        
        return res.status(403).json('400', 'Password must be at least 6 characters');
      }
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    if (req.body.username) {
      if (req.body.username.length < 7 || req.body.username.length > 20) {
        return res.status(400).json('400', 'username must be at least 7 characters and max 20');
      }
      if (req.body.username.includes(' ')) {
        return res.status(400).json('400', 'Username cannot contain spaces');
       
      }
      if (req.body.username !== req.body.username.toLowerCase()) {
        return res.status(400).json('400', 'Username must be in lowercase');
      }
      if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
        return res.status(400).json('400', 'Username can only contain letters and numbers');
       
      }
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.userId,
        {
          $set: {
            username: req.body.username,
            email: req.body.email,
            profilePicture: req.body.profilePicture,
            password: req.body.password,
          },
        },
        { new: true }
      );
      const { password, ...rest } = updatedUser._doc;
      res.status(200).json(rest);
    } catch (error) {
      console.log(error);
    }
  };