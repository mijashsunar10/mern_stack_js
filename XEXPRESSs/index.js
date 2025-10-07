//includgin express module and initializing the app

const express = require('express');//needed to import express
const app = express();//app variable ma express ko instance store garxa
const port = 3000;//port number define garxa

// Start your app or server

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

// to run the server: node index.js