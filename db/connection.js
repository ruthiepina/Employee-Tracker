const mysql = require("mysql2");

const db = mysql.createConnection(
   //* Connects to the database
   {
      host: "localhost",
      user: "root", // MySQL username
      password: "PleaseIgnoreThis!2023", // MySQL password
      database: "employee_tracker_db",
   },
   console.log("You are now connected to the employee_tracker_db database.")
);

module.exports = db;
