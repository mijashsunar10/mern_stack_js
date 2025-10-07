//yo file sare items specific routes ko store garxa

const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Hello World!')
});

router.post('/items',(req,res)=>{
  // res.send('Post request to the homepage')
  res.json({x:1,y:2});
});

router.put('/items/:id',(req,res)=>{
  res.send('Put request to item ')
});

router.delete('/items/:id',(req,res)=>{
  res.send('Delete request to item ')
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

module.exports = router;