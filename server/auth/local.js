var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;


module.exports = function(User) {

    passport.use(new LocalStrategy(
        function(username, password, done) {
            User.findOne({ name: username }, function(err, user) {
                if (err) { return done(err); }
                if (!user) {
                    return done(null, false, { message: 'Incorrect username.' });
                }
                if (!user.authenticate(password)) {
                    return done(null, false, { message: 'Incorrect password.' });
                }
                return done(null, user);
            });
        }
    ));
}
