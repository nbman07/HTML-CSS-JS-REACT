// const mysql = require("mysql");
// const dbConfig = require("db-connection.js");

// // Create a connection to the database


// // open the MySQL connection
// connection.connect(error => {
//   if (error) throw error;
//   console.log("Successfully connected to the database.");
// });

// module.exports = connection

// Set up a MySQL connection 


// const db = require('./db-connection.js');
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
  // insecureAuth: true
});

// Connect to the MySQL database 
// db.connect(); 

// Create an API endpoint to fetch data from the database 
// app.get('/players/data', (req, res) => { 
//   const query = 'SELECT * FROM club'; 

//   // Execute the query and send the results back to the ReactJS application 
//   db.query(query, (error, results) => { 
//     if (error) throw error; 
//     res.send(results); 
//   }); 
// }); 

app.get('/player/data', function (req, res) {
  // Connecting to the database.
  db.connect(function (err, connection) {
    db.query('SELECT * FROM player', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });
  });
});
// Start the server 
app.listen(3001, () => {
  console.log('Server running on port 3001');
});

// app.get("/player", (req, res) => {
//   res.json({ firstName: "Bruno",
// lastName: "Fernandes" });
// });
