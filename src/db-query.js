const mysql = require('mysql2');
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'football'
});

app.get('/player/data', function (req, res) {
  db.connect(function (err, connection) {
    db.query('SELECT * FROM player', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });
  });
});

app.post('/player/create', function (req, res) {
  
  const firstName = req.body.first_name;
  const lastName = req.body.last_name;
  const countryID = req.body.country_id;
  const clubID = req.body.club_id;
  
  db.connect(function (err, connection) {
    db.query('INSERT INTO player (first_name,last_name,country_id,club_id) VALUES (?,?,?,?)', [firstName, lastName,1,1], function (error, results, fields) {
      if (error) throw error;
      console.log(error)
      console.log(results)
    });
  });
});

app.delete('/player/delete', function (req, res) {
  
  const playerID = req.body.player_id;
  
  db.connect(function (err, connection) {
    db.query('DELETE FROM player WHERE player_id = ?', playerID, function (error, results, fields) {
      if (error) throw error;
      console.log(error)
      console.log(results)
    });
  });
});




// Start the server 
app.listen(3001, () => {
  console.log('Server running on port 3001');
});