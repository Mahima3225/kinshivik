const mongoose = require('mongoose');
const Commentbox = require('./models/commentBox');
const Comment = require('./models/comment');
(async function (){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/kinshivik');
        console.log("connected");

    }
    catch(err){
        console.log(err);

    }
})();

const addcmntstopostId = "post7018ec854889140894ecdabfd17bab1f4788242b3d15dad1dd4bc2bcc5d81176";
const commentboxid = "commentbox" + addcmntstopostId;


async function commenthere(){
    try{

        const newcommentobject = {
            userId : "2a",
            content: "This is Anand's  first comment on hand of destiny" ,
            postId: addcmntstopostId ,
            commentId: commentboxid,
            numberOfLikes: 36,

        }

        const result = await Commentbox.updateOne( { "commentBoxid": commentboxid },
             { $push: { commentsArray: newcommentobject } },
             { upsert: true } );
        
        
        console.log("done commenting");
        console.log(result);
        const comments = await Commentbox.findOne({"commentBoxid" : commentboxid},'commentsArray');
        console.log(comments.commentsArray);
    
    }
    catch(error){
        console.error(error); 
        console.log('Error  commenting');
    
    }
    
}
commenthere();
