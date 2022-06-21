import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/users.js';
import clientRoutes from './routes/clients.js';
import loginRoutes from './routes/login.js';
import trainingRoutes from './routes/trainingSession.js';
require('dotenv').config();

// import authRoutes from './routes/auth.js';
// import passportSetup from './passport.js'

const app = express();
app.use(express.json());
app.use(cors());

// app.use(
//     cookieSession({
//         name: "session",
//         keys: ['mypersonaltrainer'],
//         maxAge: 24 * 60 * 60 * 100
//     })
// );

// app.use(passport.initialize());
// app.use(passport.session());

app.use('/usuarios', userRoutes);
app.use('/clientes', clientRoutes);
app.use('/login', loginRoutes);
app.use('/treinos', trainingRoutes);
// app.use('/auth', authRoutes);

// app.use(express.static(path.join(__dirname, "/clientSide")));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '/clientSide/build', 'index.html'));
// });

const CONNECTION_URL = process.env.CONNECTION_URL || "mongodb+srv://rafonha:Nqbg9UeBqj2WCa7@tcc.yczzd.mongodb.net/TCCdb?retryWrites=true&w=majority"
const PORT = process.env.PORT || 3001;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((err) => console.log(err.message));