const express = require('express');

const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
// import User from './models/user';
const User = require('./models/user');
const Post = require('./models/articlepost');
const Comment = require('./models/comment');
const Category = require("./models/categories");
const port = 8080;
const host = 'http://127.0.0.1:' + port;


app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(cors());

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

app.post("/users/add", async(req,res)=>{
    const data = [
    {
        
        "firstname": "Bella ",
        "lastname" :"Gandsin" ,
        "userid" : "14a",
        "email" : "belgan9@yahoo.com",
        "password" :"abcd123" ,
        "birthDate" :30 ,
        "birthMonth" :12 ,
        "birthYear" : 2005,
        "gender" : 0,
        "subscriptions": [
            {
                "userid" : "6a",
                "firstname": "Jake",
                "lastname": "Jester",
            },
            {
                "userid": '5a',
                "firstname": 'Apurva',
                "lastname": 'Kaushik',
                
            },
        ],

        

    },
    {
        
        "firstname": "Chelsea Marquez",
        "lastname" :"Keely" ,
        "userid" : "15a",
        "email" : "Chelsea35@google.com",
        "password" :"willchelsed123" ,
        "birthDate" :11 ,
        "birthMonth" :7 ,
        "birthYear" : 1997,
        "gender" : 0,

        

    },
    
    


    ];


    try {
        const result = await User.insertMany(data);
        res.send(result);
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



app.post("/article/create",async(req,res)=>{
    const data = [
        {
            "postId": "post3a" ,
            "userId": "5a",
            "title": "‘British Bill Gates’ and Morgan Stanley chairman missing after yacht sinking",
            "description":"Tech entrepreneur Mike Lynch and his friend, investment banker Jonathan Bloomer, are among six people unaccounted for after a tornado hit their vessel near Sicily" ,


            "content":"British tech entrepreneur Mike Lynch and Morgan Stanley International chairman Jonathan Bloomer have been reported missing after their superyacht sank off the coast of Sicily on Monday, according to media reports.The Guardian reported, citing the head of Sicily’s civil protection agency, that Bloomer, Lynch, his 18-year-old daughter Hannah, and lawyer Chris Morvillo are among the six people still unaccounted for as of late Monday. The yacht they were traveling on, a British-flagged, 56-meter sailboat called the‘Bayesian’, was carrying a total of 22 people – 12 crew members and ten passengers – at the time of the incident and was anchored off the port of Porticello. According to the Italian Coast Guard, the vessel was hit by a waterspout – a type of tornado that forms over water — in the early hours of Monday morning. So far, one man, understood to be the ship’s chef, has been confirmed dead. Fifteen people have been rescued, including Lynch’s wife Angela Bacares, who owns the yacht, and a one-year-old girl who was saved by her mother.  ",
            "category":"UK" ,
            "slug": "post3a-Morgan-Stanley-chairman-missing-after-yacht-sinking",
        },
        {
            "postId": "post4a" ,
            "userId": "11a",
            "title": "Work begins on German military base near Russian border",
            "description":"Lithuania has an agreement in place with its NATO ally whereby Berlin will deploy 4,800 troops and various weapons systems to the Baltic state" ,

            "content":"Lithuania has begun building a military base between Russia’s Kaliningrad and Belarus, the Defense Ministry in Vilnius has announced. When completed, the facility will house a contingent of German troops, some 20km (12 miles) from the Belarusian border, close to the Russian exclave of Kaliningrad.The two NATO member states sealed the agreement to build the base in December 2023, during a meeting between German Defense Minister Boris Pistorius and his Lithuanian counterpart at the time, Arvydas Anusauskas. The plan envisages the first permanent deployment of German troops on foreign soil since the end of World War II.The garrison is expected to reach its projected strength of 4,800 combat-ready troops and 200 civilian specialists, complete with heavy armaments and support infrastructure, by the end of 2027. Called the heavy 42nd Armored Brigade, the unit will comprise three combat battalions. Two of them will be German-only, and include an armored battalion and a heavy infantry battalion. The other will be multinational.Speaking at the time, Pistorius characterized the future deployment as a way for his nation to “assume leadership responsibility” within NATO.EU state testing bunker designsREAD MORE: EU state testing bunker designs . In a post on X on Monday, the Lithuanian Defense Ministry wrote that the country had “just launched its largest-ever military project at Rudninkai, building a base to house 80% of the German brigade.”",


            "category":"Geo-Politics" ,
            "slug": "post4a-work-begins-on-german-military-base-near-russian-border",

            "comments" : [
                {
                    "postId": "post3a" ,
                    "userId": "7a",
                    "commentId" :"3c",
                    
        
        
                    "content":"Good read.",
                    "numberOfLikes" : 3,
                },
                {
                    "postId": "post4a" ,
                    "userId": "3a",
                    "commentId" :"4c",
        
                    
                    "content":"Nice Article",
        
        
                    "numberOfLikes" : 5,
                    
                },
            ],
        },
    
        
        
    
    


    ];


    try {
        const result = await Post.insertMany(data);
        res.send(result);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error inserting users");
    }
    
})


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
