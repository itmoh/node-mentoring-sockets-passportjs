var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

exports.setup = function (User, config) {
    passport.use(new LocalStrategy({
            usernameField: 'name',
            passwordField: 'password' // this is the virtual field on the model
        },
        function (name, password, done) {
            return User.findOne({
                    name: {$regex: new RegExp("^" + name + "$", "i")}
                })
                .then(function (user) {
                    if (user && user.authenticate(password)) {
                        done(null, user);
                    }
                    else {
                        done(null, false);
                    }
                })
                .catch(function (err) {
                    return done(err);
                });
        })
    )
};
