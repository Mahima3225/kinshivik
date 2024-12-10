const mongoose = require( 'mongoose');


const adSchema = new mongoose.Schema(

  {

    adId: {
        type: String,
        required: true,

    },

    categoryIdAd: {
      
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

    url: {
        type: String,
        required: true,
    },
    
    
    image: {
      type: String,
      default:
        'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png',
    },

    budget : {
        type : Number,

    }
    
    
    
    
  },
  { timestamps: true }
  
);

const Advertisement = mongoose.model('ad', adSchema);


module.exports = Advertisement;