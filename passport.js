import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";
import User from './models/Users'

passport.use(
    new GoogleStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "/login/google/callback",
        passReqToCallback: true
    }, async (req, accessToken, refreshToken, profile, callback) => {
        const defaultUser ={
            name: `${profile.name.givenName} ${profile.name.familyName}`,
            email: profile.emails[0].value,
            password: profile.password,
            isAdmin: false,
            googleId: profile.id,
        }

        // const user = await User.findOrCreate({ where: { googleId: profile.id}, defaults: defaultUser}).catch((err) => {
        const user = await User.find({ googleId: profile.id})
        .then(() => {
            
        })
        .catch((err) => {
            console.log('Error signing up', err);
            callback(err, null)
        })

    if(user && user[0]) {
        return callback(null, user && user[0])
    }

}))


passport.serializeUser((user, done) => {
    console.log('Serializing user: ', user)
    done(null, user.id);
})

passport.deserializeUser(async (user, done) => {
    user = await User.findOne({ where: {id}}).catch((err) => {
        console.log("Error Deserializing: ", err)
        done(err, null);
    })

    console.log('Deserializing user: ', user)

    if (user) done(null, user)
})