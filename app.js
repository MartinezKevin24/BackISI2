const http = require('http');

const mysql=require('mysql');

const connectionSql=mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'personal'
});

connectionSql.connect((error)=>{
    if(error){
        throw error;
    }else{
        console.log('Conectado');
    }
});

var query = connectionSql.query('SELECT name, id, role FROM users', function(error, result){
    if(error){
        throw error;
    }else{
        var resultado = result;
        console.log(result);
    }
});
connectionSql.end();