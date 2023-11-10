var mysql = require('mysql');
const express = require("express");
const bodyparser= require("body-parser");

var email;
var name;
var books=[]
var blogdata = [
  {
    title: "The story of Sun and Moon",
    content: "The sun sets over the horizon, casting an orange glow on the weathered stones of the ancient ruins. Each step echoes through the centuries-old corridors, whispering stories of a forgotten civilization. Moss-covered statues stand guard, their faces worn by time and mystery. In the heart of the ruins, a hidden chamber holds a treasure trove of artifacts, each one a link to the past.As the wind rustles through the leaves, it carries with it the secrets of this enigmatic place. Birds flit between the cracks in the walls, reclaiming their ancestral home. The air is thick with the scent of history, a tangible reminder of the lives that once thrived here.I sit amidst the remnants of an era long gone, my fingers tracing the intricate carvings on the stones. Each mark tells a story, a testament to the artistry and craftsmanship of those who came before. It's a humbling experience, to be a visitor in a world that predates our own.As the day fades into night, the ruins take on a new life. Shadows dance on the ancient stones, and the stars above seem to align with the forgotten constellations. In this timeless moment, I feel a connection to something greater, something beyond the scope of my understanding.",
    imagepath: '/images/one.jpg'
  }]
  const second={
    title: "The story of Sun and Moon",
    content: "The sun sets over the horizon, casting an orange glow on the weathered stones of the ancient ruins. Each step echoes through the centuries-old corridors, whispering stories of a forgotten civilization. Moss-covered statues stand guard, their faces worn by time and mystery. In the heart of the ruins, a hidden chamber holds a treasure trove of artifacts, each one a link to the past.As the wind rustles through the leaves, it carries with it the secrets of this enigmatic place. Birds flit between the cracks in the walls, reclaiming their ancestral home. The air is thick with the scent of history, a tangible reminder of the lives that once thrived here.I sit amidst the remnants of an era long gone, my fingers tracing the intricate carvings on the stones. Each mark tells a story, a testament to the artistry and craftsmanship of those who came before. It's a humbling experience, to be a visitor in a world that predates our own.As the day fades into night, the ruins take on a new life. Shadows dance on the ancient stones, and the stars above seem to align with the forgotten constellations. In this timeless moment, I feel a connection to something greater, something beyond the scope of my understanding.",
    imagepath: '/images/two.jpg'
  }
  blogdata.push(second)
  const third ={
    title: "The story of Sun and Moon",
    content: "The sun sets over the horizon, casting an orange glow on the weathered stones of the ancient ruins. Each step echoes through the centuries-old corridors, whispering stories of a forgotten civilization. Moss-covered statues stand guard, their faces worn by time and mystery. In the heart of the ruins, a hidden chamber holds a treasure trove of artifacts, each one a link to the past.As the wind rustles through the leaves, it carries with it the secrets of this enigmatic place. Birds flit between the cracks in the walls, reclaiming their ancestral home. The air is thick with the scent of history, a tangible reminder of the lives that once thrived here.I sit amidst the remnants of an era long gone, my fingers tracing the intricate carvings on the stones. Each mark tells a story, a testament to the artistry and craftsmanship of those who came before. It's a humbling experience, to be a visitor in a world that predates our own.As the day fades into night, the ruins take on a new life. Shadows dance on the ancient stones, and the stars above seem to align with the forgotten constellations. In this timeless moment, I feel a connection to something greater, something beyond the scope of my understanding.",
    imagepath: '/images/three.jpg'
  }
  blogdata.push(third)




var imageurl;
// const serverrecieve= require(__dirname+"/public/Firstpage.js");
//const reader = require('xlsx');
const app = express();
app.use(express.json());
app.set('view engine', 'EJS');
app.use(bodyparser.urlencoded({extended: true}));

app.use(express.static('public', { 
 setHeaders: (res, path, stat) => {
   if (path.endsWith('.js')) {
     res.set('Content-Type', 'application/javascript');
   }
 }
}));

app.get("/",function(req,res)
{
    res.render("Home.ejs", {blogs:blogdata})
});

app.get("/createblog",function(req,res)
{
    res.render("createblog.ejs")
});
app.get("/contact",function(req,res)
{
    res.render("contact.ejs")
});
app.get("/about",function(req,res)
{
    res.render("about.ejs")
});


const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });

app.post("/createblog",upload.single('image'),function(req,res)
{

 const image_path = `/images/${req.file.originalname}`;
 console.log(req.file)

 const newblog= {
  title:req.body.title,
  content:req.body.content,
  imagepath:image_path
 }
 blogdata.push(newblog)

 res.redirect("/")

});





app.listen(3002, function() {
    console.log("Server is running")
});
