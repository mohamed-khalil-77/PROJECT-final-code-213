import express from 'express';
import { DbConnection } from './db.js';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'
dotenv.config();

const app = express();
DbConnection('projectDatabase', 'mongodb://127.0.0.1:27017/project');

app.use(express.json());
app.use(cookieParser());
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
