# node-mentoring-sockets-passportjs
examples and presentation for mentoring program. Contains information about pasportjs and socket.io

### Sessions and authentication in node.js. PassportJS

    * strategies
    * Sessions
    * Configurations
    * Local autentification
    * OPENID
    * OAUTH 1.0, 2.0
    * Ginhub autorisation

### Sockets

1. SOCKET.IO AT A HIGH LEVEL
 * Thin wrapper around [WebSockets](http://www.html5rocks.com/en/tutorials/websockets/basics/)
 * Works in tandem with an HTTP Server  
 * Documentation: less than awesome, [wiki is better] (https://github.com/socketio/socket.io) than site
2. KEY FEATURES
 * Client/Server Push
 * Broadcast
 * Client "session" information
 * Message namespaces
 * Plain ol' WebSockets API as well  

todo: explain WebSockets itself
what is realtime?
    * providing of realtime
        * Periodic pooling
        * long pooling (memory )
        * forever polling (can't findout where client is missing)
        * websockets

websockets emit on all users, emin on spesific user, emit on overs
server part
client part
namespaces
broadcast
volatile


### Unit testing