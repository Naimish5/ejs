const express = require('express')
const app = express();
const mysql = require('mysql');
var bodyParser = require('body-parser');
app.set('view engine','ejs');
app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended:true
}));

app.get('/',function(req,res){
    res.render('home');
})

app.post('/getdata',function(req,res){
    console.log(req.body);

    var con = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"naimish"
    })

    con.connect();
    console.log("DataBase Connected");


    var name = req.body.name;
    var email = req.body.email;
    var address= req.body.address;
    var phoneno = req.body.phoneno;

    // console.log(name,email,address,phone);
    var sql ="insert into login_info(name,email,address,phoneno)values('"+name+"','"+email+"','"+address+"','"+phoneno+"')"

    con.query(sql,function(error){
        if (error) throw error;
        console.log("Data Inserted");
    })
    // res.send('Sucess');
    res.redirect('/');
})


app.listen(4444);   