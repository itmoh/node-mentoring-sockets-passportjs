'use strict';
var db = require('./config/mongoose')

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express'),
    mongodbUri = require('mongodb-uri'),
    config = require('./config/environment');

// Connect to database
db(formatMongooseDbUriFromEnv(config.mongo));

// Setup server
var app = express();
app.use(express.static(__dirname + '/public'));
require('./config/express')(app);
require('./routes')(app);

// Start server
app.listen(config.port, function () {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;

function formatMongooseDbUriFromEnv(mongoConfig) {
    return mongodbUri.formatMongoose({
        scheme: 'mongodb',
        hosts: [
            {
                host: mongoConfig.DB_HOST,
                port: mongoConfig.DB_PORT
            }
        ],
        username: mongoConfig.DB_USER,
        password: mongoConfig.DB_PASSWORD,
        database: mongoConfig.DB_NAME
    });
}
