var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/js', express.static('js'));

// Htmlの内容がClient端末を送る。
app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');
});

// サーバーをモニタリングする。
app.listen(port);
console.log('Client Server Running')