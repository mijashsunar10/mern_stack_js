//yo file sare items specific routes ko store garxa

const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Hello World!')
});

router.post('/about',(req,res)=>{
  // res.send('Post request to the homepage')
  res.json({x:1,y:2});
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

module.exports = router;