const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// Use cookie-parser middleware
app.use(cookieParser());

// Route to set a cookie
app.get('/set-cookie', (req, res) => {
    res.cookie('username', 'JohnDoe');
    res.send('Cookie has been set');
});

// Route to clear the cookie
app.get('/clear-cookie', (req, res) => {
    res.clearCookie('username');
    res.send('Cookie has been cleared');
});

app.listen(5555, () => {
    console.log('Application running at port 5550');
});
