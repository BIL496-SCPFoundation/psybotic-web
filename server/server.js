const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '..', 'build')));

// create a GET route
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..','public', 'index.html'));
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));