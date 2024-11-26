const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema(
  {

    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    postId: {
      type: String,
      required: true,
    },
    commentId:{
      type: String,
      required: true,

    },
    
    numberOfLikes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

// const Comment = mongoose.model('Comment', commentSchema);
// module.exports = {Comment, commentSchema};
module.exports = {commentSchema};


