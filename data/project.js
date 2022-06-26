const mysql=require("mysql")    // require mysql 

const d=mysql.createConnection({    // here conection database to project.js file 
    host:"localhost",
    user:"root",
    database:"crud",    // database name 
    password:"MGovind@123" // change after mysql password
})

module.exports=d    // export conection d to app.js file 
