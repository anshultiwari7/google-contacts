const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');

const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log({ accessToken, refreshToken, profile });
      try {
        const user = await User.findOneAndUpdate(
          { googleId: profile.id },
          {
            name: profile.displayName,
            email: profile.emails[0].value,
            accessToken,
          },
          { upsert: true, new: true, setDefaultsOnInsert: true }
        );
        console.log(user);
        done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);
