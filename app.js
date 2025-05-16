import express from 'express';
import router from './routes/tasks.js';
import './db/connect.js';
import {connectDB} from "./db/connect.js";
import 'dotenv/config'

const app = express();

const port = process.env.PORT || 3000;

// middlewares

app.use(express.json());


app.get('/hello', (req, res) => {
    res.send('Task manager app');
})

app.use('/api/v1/tasks', router);


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);

        app.listen(port, () => {
            console.log(` http://localhost:3000 | App listening on port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()
    .then(() => console.log('Server started!'));




