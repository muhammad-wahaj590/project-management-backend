import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import projectRoutes from './routes/projectRoute.js';

const app = express()
const port = 5000

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes 
app.use('/api', projectRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})