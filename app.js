const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.get('/getMovies', (req, res) => {
    fs.readFile('./data/db.json', (err, data) => {
        if (err) {
            console.log("Error reading file");
            return err;
        } else {
            let parsedData = JSON.parse(data);
            res.send(parsedData);
        };
    });
});

app.get('/', (req, res) => {
    res.send(`<a href='http://localhost:3000/getMovies'>Click to get all movies</a> `);
});

app.listen(port, (err) => {
    console.log(`Server is running on ${port}`);
});
