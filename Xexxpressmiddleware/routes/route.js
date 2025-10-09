const express = require('express')
const router = express.Router()

// middleware that is specific to this router
const auth = function (req, res, next) {
  console.log('I m inside auth wala middleware');

//   req.user = {userId:1, role:"admin"}; //uset ko role student xa tei vara admin ko validate hudena studen t ko matra hunxa
req.user = {userId:1, role:"=student"}; //uset ko role student xa tei vara admin ko validate hudena studen t ko matra hunxa
  if(req.user)
  {
    next()

  }
  else{
    res.json({
        success:false,
        message:"User not authenticated"
    })
  }
  
}

const isStudent = function(req,res,next)
{
    console.log('I m inside isStudent wala middleware');
    if(req.user.role==="student")
    {
        next();
    }
    else{
        res.json({
            success:false,
            message:"User not a student"
        })
    }
}


const isAdmin = function(req,res,next)
{
    console.log('I m inside isAdmin wala middleware');
    if(req.user.role==="admin")
    {
        next();
    }
    else{
        res.json({
            success:false,
            message:"User not an admin"
        })
    }
}

router.get('/students', auth, isStudent, (req, res) => {
   console.log('I m inside students wala route');
   res.send('Hello Students'    );
});

router.get('/admins', auth, isAdmin, (req, res) => {
    console.log('I m inside admins wala route');
    res.send('Hello Admins'    );
 });

module.exports = router
