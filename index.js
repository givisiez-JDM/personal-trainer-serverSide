import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/users.js';
import clientRoutes from './routes/clients.js';
import loginRoutes from './routes/login.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/usuarios', userRoutes);
app.use('/clientes', clientRoutes);
app.use('/login', loginRoutes);

const CONNECTION_URL = 'mongodb+srv://rafonha:Nqbg9UeBqj2WCa7@tcc.yczzd.mongodb.net/TCCdb?retryWrites=true&w=majority'
const PORT = process.env.PORT || 3001; 

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((err) => console.log(err.message));