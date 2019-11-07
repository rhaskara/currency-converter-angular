const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 8080;

app.use(cors());

app.use(express.static(path.join(__dirname + '/public')));

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Invalid end point');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, function(){
    console.log('Server started on port ' + port);
});