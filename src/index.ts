import express, {Application} from 'express';
import router from './routes/tasks';
import connectDB from './db/connect';
import notFound from './middleware/not-found';
import errorHandlerMiddleware from './middleware/error-handler';
import 'dotenv/config'

const index: Application = express();

const port: string | number = process.env.PORT || 5000;


// middleware

index.use(express.static('./public'));
index.use(express.json());

// routes

index.use('/api/v1/tasks', router);

index.use(notFound);
index.use(errorHandlerMiddleware);



const start: Function = async (): Promise<void> => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log('Connected to DB');
    index.listen(port, (): void =>
      console.log(`Server is listening on port ${port} http://localhost:${port}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
