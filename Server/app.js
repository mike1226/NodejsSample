/*
Title:Hello TimerがWebSocketデモ
Description:Client向け現在の時間が送る。

Ver:1.0.0
Create Time:２０１６－０９－０５
*/

var util = require('util');
var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var server = http.createServer(app);

// IPポートが4000番を指定
var port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var io = require('socket.io')(server);

// メッセージ内容
var message = "World";
//　時間が表すのフラグ
var showtime = true;
// 表して時間
var time = getTime();

// POSTによって、Client向け通知する。
app.post('/', function(req, res) {

    message = req.body.message;
    console.log(message);
    io.sockets.emit('message', {
        message: message
    });
    res.sendStatus(200);
});

app.post('/showtime', function(req, res) {
    showtime = req.body.show;
    console.log("ShowTime:" + showtime)
    res.sendStatus(200);
});

// サーバーをモニタリングする。
server.listen(port);
console.log("Server is running");

// Scoketに、名前はHelloというがモニタリングしている。
io.on('connection', function(socket) {
    setInterval(function() {
        if (showtime) {
            time = getTime();
            socket.emit('time', {
                time: time
            });
        }
    }, 1000);

    // Send Message
    socket.emit('message', {
        message: message
    });

});

function getTime() {
    // 新た時間を取得する
    var dat = new Date();

    // 取得したの時間を戻る。
    return util.format("%s/%s/%s %s:%s:%s",
        dat.getFullYear(),
        dat.getMonth() + 1,
        dat.getDate(),
        dat.getHours(),
        dat.getMinutes(),
        dat.getSeconds());
}