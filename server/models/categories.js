
const mongoose = require('mongoose');
const Post = require('./articlepost');
const categorySchema = new mongoose.Schema(
    {
      categoryId: {
        type: String,
        required: true,
      },
      
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        
      },
      
      image: {
        type: String,
        default:
          'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png',
      },
      
      slug: {
        type: String,
        required: true,
        unique: true,
      },

      //slug-strings
      posts:[String],
    },
    { timestamps: true }
  );
  
  const Category = mongoose.model('Category', categorySchema);
  module.exports = Category;
  
 