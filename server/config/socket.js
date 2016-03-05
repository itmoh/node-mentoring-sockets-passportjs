var User = require('../api/user/user.model');

module.exports = function (server) {
    var io = require('socket.io').listen(server);

    io.sockets.on('connection', function (socket) {

        socket.on('joinPoker', function (data) {
            User.findById(data.userId)
                .then(function (result) {
                    socket.broadcast.emit('newUser', {
                        userId: data.userId,
                        userName: result.name
                    });
                });
        });

        socket.on('selectMark', function (data) {
            socket.broadcast.emit('onMarkSelect', data)
        });
    });
}