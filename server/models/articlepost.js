
const mongoose = require( 'mongoose');
const Comment = require('../models/comment')

const postSchema = new mongoose.Schema(

  {

    postId: {
      
      type: String,
      required: true,
    },
    userId: {
      type: String,
      // required: true,
    },
    
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      // required: true
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default:
        'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png',
    },
    category: {
      type: String,
      default: 'uncategorized',
    },
    slug: {
      type: String,
      // required: true,
      unique: true,
    },
    comments : [Comment.schema],
    
    
  },
  { timestamps: true }
  
);

const Post = mongoose.model('Post', postSchema);


module.exports = Post;