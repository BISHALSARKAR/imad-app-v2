var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
'article-one':{
    title: 'ARTICLE ONE |BISHAL SARKAR',
    heading:' Article One',
    date:'Feb 4,2017',
    content:` <p> This the content of my first article.This the content of my first article.This the content of my first article.This the content of my first article.This the content of my first article.This the content of my first article.This the content of my first article.
            </p>
             <p> This the content of my first article.This the content of my first article.This the content of my first article.This the content of my first article.This the content of my first article.This the content of my first article.This the content of my first article.
            </p>
             <p> This the content of my first article.This the content of my first article.This the content of my first article.This the content of my first article.This the content of my first article.This the content of my first article.This the content of my first article.
            </p>`
},
'article-two':{title: 'ARTICLE TWO |BISHAL SARKAR',
    heading:' Article Two',
    date:'Feb 5,2017',
    content:` <p> This the content of my second article.This the content of my second article.This the content of my second article.This the content of my second article.
            </p>
             <p> 
             This the content of my second article.This the content of my second article.This the content of my second article.This the content of my second article.
            </p>
             <p> 
             This the content of my second article.This the content of my second article.This the content of my second article.This the content of my second article.
            </p>`},
'article-three':{title: 'ARTICLE THREE |BISHAL SARKAR',
    heading:' Article Three',
    date:'Feb 6,2017',
    content:` <p> This the content of my third article.
            </p>
             <p> 
            This the content of my third article.This the content of my third article.This the content of my third article.This the content of my third article.
            </p>
             <p> 
            This the content of my third article.This the content of my third article.This the content of my third article.
            </p>`}
};

function createTemplate (data){
    var title=data.title;
var date=data.date;
var heading=data.heading;
var content=data.content;
var htmlTemplate=`
<html>
    
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
              <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
           ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
           ${content}
            </div>
        </div>
    </body>
    
</html>
`;
return htmlTemplate;
         
     }
     
app.get('/',function(req,res){res.sendFile(path.join(__dirname, 'ui','index.html'));});
var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString())
});
app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});


app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var names=[];
app.get('/submit-name/:name',function(req,res){
    //Get the name from request object
    var name=req.params.name;
    names.push(name);
    //JSON:JAVASCRIPT OBJECT NOTATION:a way of convertion javascript objects into an string
    res.send(JSON.stringify(names));
});
var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
