/**
 * Created by Miguel on 08/02/2017.
 */

var express = require('express');
var bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());


app.get('/', function(req, res) {
    res.status(200).send("Conectado al servidor local");
});

app.listen(3000, function(){
    console.log("Servidor funcionando en puerto 3000");
})

