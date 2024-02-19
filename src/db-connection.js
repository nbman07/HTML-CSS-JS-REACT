const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'football',
    insecureAuth: true
});

// console.log("JS file has been run");
// db.connect(function (err) {
//     if (err) {
//         console.log("Not connected!");
//     } else {
//         console.log("Connected!");
//     }
// });
module.exports = db;
// module.exports = {
//     HOST: 'localhost',
//     USER: 'root',
//     PASSWORD: 'root',
//     DB: "football"
// };