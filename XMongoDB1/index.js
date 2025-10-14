const express = require('express');
const app = express();
const connectDB = require('./db');
const users = require('./routes/users');

connectDB();

app.use(express.json());
app.use('/api', users);

const PORT = 3000;

app.get('/', (req, res) => {
  console.log("I’m inside the home page handler");
  res.send("Hello, welcome to Anmol Sunar");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
