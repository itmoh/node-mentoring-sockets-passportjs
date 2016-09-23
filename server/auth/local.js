var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;


module.exports = function(User) {

    passport.serializeUser(function(user, done) {
        var userId = user._id.toString();
        done(null, userId);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id)
            .then(function(user) {
                done(null, user)
            })
            .catch(done);
    });

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
