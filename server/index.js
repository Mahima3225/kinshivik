const multer = require("multer");
const sharp = require("sharp");
const { S3Client, PutObjectCommand }= require("@aws-sdk/client-s3");

const { GetObjectCommand , DeleteObjectCommand} = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const dotenv = require("dotenv");







const express = require('express');

const mongoose = require("mongoose");
const bcryptjs = require('bcryptjs');
const crypto = require('crypto');
const app = express();
const cors = require("cors");
// import User from './models/user';
const User = require('./models/user');
const Post = require('./models/articlepost');
const Comment = require('./models/comment');
const Category = require("./models/categories");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const slugify = require('slugify');
const port = 9090;
const host = 'http://127.0.0.1:' + port;









dotenv.config();


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const bucketName = process.env.BUCKET_NAME;
const region = process.env.BUCKET_REGION;
const accessKeyId = process.env.ACCESS_KEY;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const s3Client = new S3Client({
  region,
  credentials: {
    accessKeyId,
    secretAccessKey
  }
})





const mongodbURL = 'mongodb://127.0.0.1:27017/kinshivik';

async function main() {
    try {
      
        await mongoose.connect(mongodbURL, { dbName: "kinshivik" });
        console.log("***connected***");
    } catch (err) {
        console.log(err);
    }
}

main();







app.get("/",async(req,res,next)=>{
    res.send("hi");

});

app.post("/login",async(req,res,next)=>{
    
    const user = await User.findOne({ email: req.body.email.toLowerCase()});

    if (user) {
        // console.log('User found:', user);
        if(user.password === req.body.password){

            const randomString = crypto.randomBytes(32).toString('hex');



            res.cookie("accesskey",randomString);
            res.cookie('userid',user.userid);
            console.log(user.userid);

            await User.findOneAndUpdate(
                { email: req.body.email.toLowerCase() },
                { $set: {accesskey : randomString} },
                { new: true }
            );


            
            res.json({isValid : 'true',userfound : 'false'})
        }
        else {
            res.json({ isValid: 'false' });
        }
        
    } 
    else{
        res.json({isValid : 'false',userfound : 'false'});
        
    }
    // console.log(req.body);
    // console.log(req.body.email);
    // console.log(req.body.password);


    // res.json(req.body);





});


app.get('/testauth',async (req,res)=>{
    // const user = await User.findOne({ userid: req.cookies.userid.toLowerCase()});

    const userId = req.cookies.userid;
    if (!userId) {
      return res.status(400).json({ error: 'User ID cookie is missing' });
    }

    const user = await User.findOne({ userid: userId.toLowerCase() });


    if(req.cookies.accesskey === user.accesskey){
        res.send("you are good");

    }
    else{
        res.send("unauthorized");
    }

});


app.get('/mycook',(req,res)=>{
    console.log(req.cookies);
    res.send("Hello")
});


app.post("/users/add", async(req,res)=>{
    // const data = [
    // {
        
    //     "firstname": "Bella ",
    //     "lastname" :"Gandsin" ,
    //     "userid" : "14a",
    //     "email" : "belgan9@yahoo.com",
    //     "password" :"abcd123" ,
    //     "birthDate" :30 ,
    //     "birthMonth" :12 ,
    //     "birthYear" : 2005,
    //     "gender" : 0,
    //     "subscriptions": [
    //         {
    //             "userid" : "6a",
    //             "firstname": "Jake",
    //             "lastname": "Jester",
    //         },
    //         {
    //             "userid": '5a',
    //             "firstname": 'Apurva',
    //             "lastname": 'Kaushik',
                
    //         },
    //     ],

        

    // },
    // {
        
    //     "firstname": "Chelsea Marquez",
    //     "lastname" :"Keely" ,
    //     "userid" : "15a",
    //     "email" : "Chelsea35@google.com",
    //     "password" :"willchelsed123" ,
    //     "birthDate" :11 ,
    //     "birthMonth" :7 ,
    //     "birthYear" : 1997,
    //     "gender" : 0,

        

    // },
    
    


    // ];
    console.log(req.body.username);
    const data = [
       {

        "firstname": req.body.firstname,
        "lastname" :req.body.lastname ,
        "userid" :req.body.userid,
        "email" : req.body.email,
        "password" :req.body.password ,
        "birthDate" :req.body.birthDate,
        "birthMonth" :req.body.birthMonth ,
        "birthYear" : req.body.birthYear,
       } ,
        
    ]


    try {
        const result = await User.insertMany(data);
        res.json({registered : 'true'})
        // res.send(result);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error inserting users");
    }
    
});




app.post("/post/comment",async(req,res)=>{
    const data = [
        {
            "postId": "post1a" ,
            "userId": "5a",
            "commentId" :"1c",
            


            "content":"Good read.",
            "numberOfLikes" : 3,
        },
        {
            "postId": "post2a" ,
            "userId": "13a",
            "commentId" :"2c",

            
            "content":"Nice Article",


            "numberOfLikes" : 5,
            
        },
    
        
        
    
    


    ];


    try {
        const result = await Comment.insertMany(data);
        res.send(result);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error inserting comments");
    }
    
});


app.get("/article/get/:slug",async(req,res)=>{
    try {
        const article = await Post.findOne({ slug: req.params.slug });
        if (article) {
            res.send(article);
          
        } else {
          console.log('No article found with the given slug.');
        }
      } catch (error) {
        console.error('Error finding article:', error);
      }
})




// const generateFileName = (bytes = 32) => crypto.randomBytes(bytes).toString('hex');
// app.post("/article/create",upload.single('image'),async(req,res)=>{
    
//     const file = req.file;
//     const title = req.body.title;
//     const description = req.body.description;
//     const content = req.body.content;


//     const fileBuffer = file.buffer;
  
//     const fileName = `${title}-${generateFileName()}`;
//     const postid = `postpost${generateFileName()}`;
  
//     const uploadParams = {
//         Bucket: bucketName,
//         Body: fileBuffer,
//         Key: fileName,
//         ContentType: file.mimetype
//     };


//     // Send the upload to S3
//     await s3Client.send(new PutObjectCommand(uploadParams));
  
    


//     try {
//         const post = await Post.insertMany([{
//             image: fileName,
//             title: title,
//             description: description,
//             content: content,
//             postId : postid,
//         },]);
//         // const result = await Post.insertMany(data);
//         res.send(post);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send("Error inserting posts");
//     }
    
// })



app.post("/article/create", upload.single('image'), async (req, res) => {

    const generateFileName = (bytes = 32) => crypto.randomBytes(bytes).toString('hex');
    try {
        const file = req.file;
        if (!file) {
            return res.status(400).send("No file uploaded");
        }

        const title = req.body.title;
        const description = req.body.description;
        const content = req.body.content;




        const slug = slugify(title, { lower: true, strict: true });
        if (!slug) {
            return res.status(400).send("Slug cannot be null");
        }

        const existingPost = await Post.findOne({ slug });
        if (existingPost) {
            slug = `${slug}${generateFileName()}`
            // return res.status(400).send("Slug already exists");
        }





        const fileBuffer = file.buffer;
        const fileName = `${title}-${generateFileName()}`;
        const postid = `post${generateFileName()}`;

        const uploadParams = {
            Bucket: bucketName,
            Body: fileBuffer,
            Key: fileName,
            ContentType: file.mimetype
        };

        await s3Client.send(new PutObjectCommand(uploadParams));

        const post = await Post.insertMany([{
            image: fileName,
            title: title,
            description: description,
            content: content,
            postId: postid,
            slug: slug,
        }]);

        res.send(post);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error inserting posts");
    }
});






app.get("/posts", async (req, res) => {
    try {
        const posts = await Post.find().sort({ created: -1 });

        // Generate signed URLs in parallel
        const postsWithUrls = await Promise.all(posts.map(async (post) => {

            const postObj = post.toObject();




            postObj.imageUrl = await getSignedUrl(
                s3Client,
                new GetObjectCommand({
                    Bucket: bucketName,
                    Key: post.image
                }),
                { expiresIn: 900 } // 900 seconds
            );
            console.log(postObj.imageUrl);
            return postObj;
        }));
        console.log(`Here are the postswithurls ---------*----------- ${postsWithUrls}`);

        res.send(postsWithUrls);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).send({ error: 'Error fetching posts' });
    }
});


// app.get('/post/:id',async(req,res)=>{

//     const id = req.params.id;
    

//     Post.findOne({ postId: id }, (err, post) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).send("Error fetching post");
//         }
//         if (!post) {
//             return res.status(404).send("Post not found");
//         }
//         res.send(post.toObject());
//     });

// })

app.get('/post/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const post = await Post.findOne({ postId: id });
        if (!post) {
            return res.status(404).send("Post not found");
        }




        const postObj = post.toObject();




            postObj.imageUrl = await getSignedUrl(
                s3Client,
                new GetObjectCommand({
                    Bucket: bucketName,
                    Key: post.image
                }),
                { expiresIn: 900 } // 900 seconds
            );
            console.log(postObj.imageUrl);
           






        res.send(postObj);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching post");
    }
});



app.post("/categories/add/:category",async(req,res)=>{
    const data = [
        {
            "categoryId": "category1d" ,
            "title" : "Geo-politics",
            "description": "A category about  Rivalry , Struggle and Conquest",
            "slug" : "category1d-geo-politics",
            "posts" : [
                "post4a-work-begins-on-german-military-base-near-russian-border",
                
            ],
            


           
        },
        {
            "categoryId": "category2d" ,
            "title" : "UK",
            "description": "A category about United Kingdom",
            "slug" : "category2d-uk",
            "posts" : [
                "post3a-Morgan-Stanley-chairman-missing-after-yacht-sinking",
               
            ],
            

            
        },
    
        
        
    
    


    ];

    try {
        const result = await Category.insertMany(data);
        res.send(result);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error inserting comments");
    }

});

app.listen(port, () => console.log( `Server is running on port ${port} and host is ${host}`));
