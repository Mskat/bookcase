const mysql = require('mysql2');

const pool = mysql.createPool({
	host: '',
	user: '',
	password: '', 
	database: '',
	port: 0
});

module.exports = pool.promise();
