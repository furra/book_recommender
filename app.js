var bodyParser 		= require("body-parser"),
mongoose 			= require("mongoose"),
express 			= require("express"),
app 				= express();

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
	res.render("index");
});

app.post("/recommendations/",function(req,res){
	console.log(req.body);
	res.redirect("/");
});

app.listen(3000,function(){
	console.log("Server running...");
});