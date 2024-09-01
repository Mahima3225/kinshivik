// import mongoose from "mongoose";
// const Schema = mongoose.Schema;



// const articleSchema = new Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   actors: [{ type: String, required: true }],
//   uploadDate: {
//     type: Date,
//     required: true,
//   },
//   thumbnailImageUrl: {
//     type: String,
//     required: true,
//   },
  
//   bookings: [{ type: mongoose.Types.ObjectId, ref: "Booking" }],
//   admin: {
//     type: mongoose.Types.ObjectId,
//     ref: "Admin",
//     required: true,
//   },
// });

// export default mongoose.model("Movie", movieSchema);



import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
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
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

export default Post;