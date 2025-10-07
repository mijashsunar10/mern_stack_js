 //dev nam ko script add garni so we an run nodemon in pacakge.json

 
 const express = require('express');//needed to import express
 const app = express();//app variable ma express ko instance store garxa
 const port = 3000;//port number define garxa
 

 // Start your app or server
 app.use(express.json());//middleware to parse json data

//middleware - logging, auth, validation
//creation of the middleware
const loggingMiddleware = function(req,res,next)
{
   console.log('Login is made');
    next();
}
app.use(loggingMiddleware);//application ke under load kardiya

const authMiddleware = function(req,res,next)
{
    console.log('Auth is done');
    // res.send('Auth is done');//response patha diya so next call haina
     next(); //if next is not done then next middleware is not done
}
app.use(authMiddleware);//application ke under load kardiya

const validationMiddleware = function(req,res,next)
{
    console.log('Validation is done');
     next();
}
app.use(validationMiddleware);//application ke under load kardiya


//order is very important in middleware



 app.get('/', (req, res) => {
    console.log(req.body);
   res.send('hello world')
 });
 
 app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
 });
 
 // to run the server: node index.js