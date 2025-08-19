const express = require('express');
const cors = require('cors');
const indiaData = require('./data');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  const query = req.query.q?.toLowerCase();
  if (!query) return res.json([]);

  const results = indiaData.filter(item => {
    const combined = `${item.state} ${item.topic}`.toLowerCase();
    return combined.includes(query);
  });

  res.json(results);
});

app.listen(3000, () => {
  console.log('✅ Server running at http://localhost:3000');
});