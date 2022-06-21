import express from 'express';
import passport from 'passport';

const router = express.Router();

router.get('login/failed', (req, res) => {
    res.status(401).json({
        error: true,
        message: "Falha ao fazer login, tente novamente."
    })
})

router.get('login/success', (req, res) => {
    if(req.user) {
        res.status(200).json({
            error: false,
            message: "Login feito com sucesso!",
            user: req.user
        })

    } else {
        res.status(403).json({
            error: true,
            message: "Não autorizado, tente novamente."
        })
    }
})

router.get("/google/callback", passport.authenticate("google", {
        successRedirect: process.env.CLIENT_URL,
        failureRedirect: '/login/failed',

    })
)

router.get("/google", passport.authenticate("google", ["profile", "email"]))

router.get('logout', (req, res) => {
    req.logOut();
    res.redirect(process.env.CLIENT_URL)
})

export default router;