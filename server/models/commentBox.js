const mongoose = require("mongoose");
const { commentSchema} = require("./comment");

const commentBoxSchema = new mongoose.Schema(
    {
        commentBoxid : {type : String,unique : true},
        commentsArray : [commentSchema]


    }
);


const Commentbox = mongoose.model('commentboxes',commentBoxSchema);
module.exports = Commentbox; 
 

