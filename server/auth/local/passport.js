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
                    return user /*|| new User({
                     name: name,
                     password: password
                     }).save()*/;
                })
                .then(function (user) {
                    done(null, user)
                })
                .catch(function (err) {
                    return done(err);
                });
        })
    )
};
