// Routerを作る
var app = angular.module('app', ['ngRoute']);
app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: '/index.html'
        });
    }
]);

// SocketがDIとして作成する。
app.factory('socket', ['$rootScope',
    function($rootScope) {
        var socket = io.connect('http://localhost:4000');

        return {
            on: function(eventName, callback) {
                socket.on(eventName, callback);
            },
            emit: function(eventName, data) {
                socket.emit(eventName, data);
            }
        };
    }
]);

// コントローラを設定
app.controller('HelloController', function($scope, socket) {

    // タイムを表す
    socket.on('signaltime', function(data) {
        $scope.$apply(function() {
            $scope.time = data.signaltime;
        });
    });

    // メッセージを表す
    socket.on('message', function(data) {
        $scope.$apply(function() {
            $scope.name = data.message;
        });
    });
});