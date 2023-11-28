
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const fs = require('fs');

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.get('/version1', (req, res) => {
  const file = fs.readFileSync('./ab1.json');
  res.send(JSON.parse(file));
})
app.get('/version2', (req, res) => {
    const file = fs.readFileSync('./ab2.json');
    res.send(JSON.parse(file));
  })

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
app.get('/account', (req, res) => {
    res.sendFile(__dirname + '/account.html');
})
app.get('/basket', (req, res) => {
    fs.readFile(__dirname + '/basket.html', 'utf8', (err, response) => {
        if (err) {
            res.status(500).send('Error reading file');
            return;
        }
        res.json({ content: response });
    });
})
app.get('/account', (req, res) => {

    fs.readFile(__dirname + '/account.html', 'utf8', (err, response) => {
        if (err) {
            res.status(500).send('Error reading file');
            return;
        }
        res.send(response);
    });

})

app.get('/final', (req, res) => {

    fs.readFile(__dirname + '/final.html', 'utf8', (err, response) => {
        if (err) {
            res.status(500).send('Error reading file');
            return;
        }
        res.send(response);
    });

})

app.post('/basket', (req, res) => {
    console.log('body', req.body);
    // sauvegarde dans la database 
    res.json(req.body);
})

app.post('/account', (req, res) => {
    console.log(req.body);
    res.json(req.body);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})