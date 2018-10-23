// import modules
const bCrypt = require('bcrypt-nodejs');

module.exports = function(passport, user) {
    var User = user;
    var LocalStrategy = require('passport-local').Strategy;
    
    // local signup strategy
    passport.use('local-signup', new LocalStrategy(
        {
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        }, function(req, username, password, done) {
            // handles storing user data
            var generateHash = function(password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };
            
            // checks if user already exists in DB
            User.findOne({
                where: {
                    username: username
                }
            }).then(function(user) {
    
                if (user) {
    
                    return done(null, false, {
                        message: 'That username is already taken'
                    });
                }
                // if the user doesn't exist, create the new user 
                else {
                    var userPassword = generateHash(password);
                    var data =
                        {
                            username: username,
                            userPassword: userPassword,
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            userType: req.body.userType,
                            type: "type"
                        };
    
                    User.create(data).then(function(newUser, created) {
    
                        if (!newUser) {
    
                            return done(null, false);
    
                        }
    
                        else if (newUser) {
    
                            return done(null, newUser);
    
                        }
    
                    });
    
                }
    
            });
    
        }
        
    ));

    // Local sign-in strategy
    passport.use('local-signin', new LocalStrategy(
        {
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        function(req, username, password, done) {
            var User = user;
            
            // checks if the password matches
            var isValidPassword = function(userpass, password) {
                return bCrypt.compareSync(password, userpass);
            }
            // find the user to log them in
            User.findOne({
                where: {
                    username: username
                }
            }).then(function(user) {
                
                // if the user doesn't exist
                if(!user) {
                    return done(null, false, {
                        message: "User does not exist"
                    });
                
                }
                // checks if the passwords don't match
                if(!isValidPassword(user.userPassword, password)) {
                    return done(null, false, {
                        message: "Incorrect Password"
                    });
                }
                // if successful, the user is now logged in
                var userInfo = user.get();
                console.log(userInfo)
                return done(null, userInfo);
                // check for other potential sign-in errors
            }).catch(function(err){
                console.log("Error: " + err);
                return done(null, false, {
                    message: "Issue with Signin"
                });
            });
        }
    ));

    // serialize user
    // saves user ID to the session
    passport.serializeUser(function(user, done) {
        
            done(null, user.userID);
        
        });
    
        // deserialize user 
        passport.deserializeUser(function(id, done) {
        
            User.findById(id).then(function(user) {
    
                if (user) {
                    done(null, user.get());
                } 
                else {
                    done(user.errors, null); 
                }
            });
        });

}