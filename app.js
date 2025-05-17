import express from 'express';
import tasks from './routes/tasks.js';
import connectDB from './db/connect.js';
import notFound from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
import 'dotenv/config'

const app = express();

const port = process.env.PORT || 5000;


// middleware

app.use(express.static('./public'));
app.use(express.json());

// routes

app.use('/api/v1/tasks', tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);



const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log('Connected to DB');
    app.listen(port, () =>
      console.log(`Server is listening on port ${port} http://localhost:${port}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
