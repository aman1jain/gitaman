var express = require('express');
var mysql = require('mysql');
var app = express();

//create connect method 
var connection = mysql.createConnection({
//properties
host: 'localhost',
user: 'root',
password: 'span@12345',
database: 'new'
});
connection.connect(function(error){
    if(!!error){
        console.log('Error');
    }
    else{
     console.log('connected');
    }
});
app.post('/aman', function(req,resp) {
     connection.query("select * from students",function (error,rows,fields){
        // connection.query("")
        if(!!error){
            console.log('Error in the query');
            console.log('Error in the query');

        }else {
            console.log('succesfull query');
            console.log(rows[0].firstname);
            resp.send ('Hello, ' + rows[0].firstname);
        
        }

    });
})
app.listen(3000);
