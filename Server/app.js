/*
Title:Hello TimerがWebSocketデモ
Description:Client向け現在の時間が送る。

Ver:1.0.0
Create Time:２０１６－０９－０５
*/

var util = require('util');
var http = require('http');
var express = require('express');
var app = exports.app = express();

/**
 * Configure application
 */

require('./config')(app);

/*
 * Passportjs auth strategy
 */

require('./utils/strategy')(app);

/*
 * Web Serverを作る。
 */
var server = http.createServer(app);
// IPポートが4000番を指定
var port = process.env.PORT || app.get('port');


require('./router')(app);

// サーバーをモニタリングする。
exports.server = server.listen(port);
// Socketをモニタリング
require('./Socket/scokets')(exports.server);

console.log("Server is running");
