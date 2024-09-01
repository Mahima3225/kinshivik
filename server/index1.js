const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3030;

app.use(cors());

app.get('/data', (req, res) => {
    res.json({ message: 'Hello, World!', status: 'success' })
  
});

app.get('/componenta', (req, res) => {
  res.json({ message: 'componenta is here', status: 'success' })

});


app.get('/componentb', (req, res) => {
  res.json({ message: 'componentb is here', status: 'success' })

});


app.get('/componentc', (req, res) => {
  res.json({ message: 'componentc is here', status: 'success' })

});




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
