
const mongoose = require('mongoose');
// const Post = require('./articlepost');
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
      // posts:[String],
      posts: {
        type: [String], 
        set: function (posts) { 
          // Ensure uniqueness 
          return Array.from(new Set(posts));
        } 
      }
    },
    { timestamps: true }
  );

  categorySchema.pre('save', function (next) {
     this.posts = Array.from(new Set(this.posts)); 
     next(); 
    }
  );
  
  const Category = mongoose.model('Category', categorySchema);
  module.exports = Category;
  
 