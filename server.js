import'dotenv/config'
import express from "express";
import cors from "cors";
import passport from "passport"
import cookieSession from "cookie-session";
import AuthRoutes from "./routes/auth.js"

const app = express();

app.use(
    cookieSession({
        name: "session",
        keys: ['mypersonaltrainer'],
        maxAge: 24 * 60 * 60 * 100
    })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(cors({
    origin: "https://my-personal-trainer-webapp.herokuapp.com",
    methods: "GET, POST, PUT, DELETE",
    credentials: true
}));

app.use("/auth", AuthRoutes)

const port = process.env.PORT || 3001;
