const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3030;

app.use(cors());

app.get('/data', (req, res) => {
    res.json({ message: 'Hello, World!', status: 'success' })
  
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
