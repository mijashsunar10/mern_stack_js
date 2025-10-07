const express = require('express')
const app = express()
const port = 3000

const item = require('./routes/item');

const bird = require('./routes/bird');

app.use('/api', item);

app.use('/bird', bird);

//jaba pani /api -> item get ma janxa
// /api/items >items post request ma janxa
// /api/items/:id >items put ra delete request ma janxa

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/', (req, res) => {
//   res.send('Hello World!')

// });

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/dummy.html')
// });

// app.post('/items',(req,res)=>{
//   // res.send('Post request to the homepage')
//   res.json({x:1,y:2});
// });

// app.put('/items/:id',(req,res)=>{
//   res.send('Put request to item ')
// });

// app.delete('/items/:id',(req,res)=>{
//   res.send('Delete request to item ')
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})