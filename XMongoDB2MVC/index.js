const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');
const connectDB = require('./config/db');

dotenv.config();

// ✅ Connect to DB
connectDB();

// ✅ Middleware to parse JSON (must come BEFORE routes)
app.use(express.json());

// ✅ Routes
app.use('/api', productRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
