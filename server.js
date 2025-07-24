
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Connect to SQLite DB
const db = new sqlite3.Database('./rhyscoin.db', (err) => {
  if (err) return console.error('DB Connection Error:', err.message);
  console.log('Connected to the rhyscoin.db database.');
});

// Example route
app.get('/', (req, res) => {
  res.send('🎮 Rhys Coin Game Backend Running!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
