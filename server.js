import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import projectRoutes from './routes/projectRoute.js';

const app = express();
const port = process.env.PORT || 5000;

// Enhanced CORS Configuration
const corsOptions = {
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000', 'http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes 
app.use('/api', projectRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK',
    message: 'Project Manager API is running',
    timestamp: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});