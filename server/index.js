const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
var mysql = require('mysql');
app.use(cors());
app.use(bodyParser());
const PORT = 8888;
const http = require('http').Server(app);

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'home'
});

connection.connect(function (e, d) {
    if (e) console.log(e);
    console.log('con success');
})


app.get('/addtodo', function (req, res) {
    let sql = "SELECT * FROM family_members"
    connection.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    })
});


app.get('/todolist', function (req, res) {
    var temp=[];
    var temp2=[];
    var the_result = undefined;
        let sql = "SELECT * FROM tasks_list"
        connection.query(sql, function (err, result, fields) {
            if (err) throw err;
            for(let i=0; i < result.length; i++){
            //  console.log(result[i].id_family_member)
            temp2.push(result[i].id_family_member)
            }
            // console.log(temp2)
            the_result=result;
        })
        setTimeout(function(){
        for(let i=0; i<temp2.length; i++){
        let sql1 = "SELECT `name` FROM `family_members` WHERE id = " + temp2[i]
        connection.query(sql1, function (err, result2, fields) {
            if (err) throw err;
            console.log(result2)
            temp.push(result2) 
        }) 
    }
    setTimeout(function(){
    for(let i=0; i<temp.length; i++){
    the_result[i].id_family_member = temp[i][0].name;
    }
    res.send(the_result);
    }, 100);
    }, 50);
    });

    
    
    app.post('/addtodo', function (req, res) {
        // console.log(req.body)
        let sql1 = "SELECT `id` FROM `family_members` WHERE name ='"+ req.body.id_family_member +"'"
        connection.query(sql1, function (err, result3, fields) {
            if (err) throw err;
            console.log(result3)
           req.body.id_family_member=result3[0].id;
        //    console.log(req.body)
       })
   setTimeout(function(){
       let sql = "INSERT INTO tasks_list SET?"
      connection.query(sql, req.body, function (err, result) {
        if (err) throw err;
        res.json("ok");
       })
    }, 200);
     })


app.listen(PORT, () => {
    console.log('Listening on ',PORT);
});