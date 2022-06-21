require("dotenv").config();
import express from "express";
import cors from "cors";
import passport from "passport"
import cookieSession from "cookie-session";

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
app.use(cors());

const port = process.env.PORT || 3001;
