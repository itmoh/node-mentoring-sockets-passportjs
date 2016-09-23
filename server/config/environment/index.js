'use strict';

var path = require('path'),
    dotenv = require('dotenv'),
    envPath = path.join(__dirname, '/../../../.env');
dotenv.config({ path: envPath });

// All configurations will extend these options
// ============================================
var all = {
    env: process.env.NODE_ENV,

    // Root path of server
    root: path.normalize(__dirname + '/../../..'),

    // Server port
    port: process.env.PORT || 9000,

    // Secret for session, you will want to change this and make it an environment variable
    secrets: {
        session: 'test-secret'
    },

    // MongoDB connection options
    mongo: {
        options: {
            db: {
                safe: true
            }
        }
    },

};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = Object.assign(
    all,
    require('./' + process.env.NODE_ENV + '.js') || {});
