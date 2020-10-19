const { error } = require('console');
const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Holy_8448',
    database: 'uts_tst',
})

con.connect((error) => {
    if (error) throw error;
    console.log("Connected"); //beri pesan ke user kalau sudah connected
})

module.exports = con; //export ke module