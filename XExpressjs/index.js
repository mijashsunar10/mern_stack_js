const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/', (req, res) => {
//   res.send('Hello World!')

// });

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dummy.html')
});

app.post('/items',(req,res)=>{
  // res.send('Post request to the homepage')
  res.json({x:1,y:2});
});

app.put('/items/:id',(req,res)=>{
  res.send('Put request to item ')
});

app.delete('/items/:id',(req,res)=>{
  res.send('Delete request to item ')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})