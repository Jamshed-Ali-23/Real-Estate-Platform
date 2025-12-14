const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Import routes
const authRoutes = require('./routes/auth');
const propertyRoutes = require('./routes/propertyRoutes');
const leadRoutes = require('./routes/leads');
const messageRoutes = require('./routes/messages');
const appointmentRoutes = require('./routes/appointments');
const analyticsRoutes = require('./routes/analytics');
const contactRoutes = require('./routes/contact');
const settingsRoutes = require('./routes/settings');

// Initialize express app
const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001', process.env.FRONTEND_URL],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// Handle OPTIONS preflight for all routes
app.options('*', cors());

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Request logging middleware for debugging
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`\n📥 [${timestamp}] ${req.method} ${req.url}`);
  if (req.body && Object.keys(req.body).length > 0) {
    console.log('📦 Body:', JSON.stringify(req.body, null, 2));
  }
  
  // Log response when finished
  const originalSend = res.send;
  res.send = function(body) {
    console.log(`📤 Response: ${res.statusCode}`);
    return originalSend.call(this, body);
  };
  
  next();
});

// Static files for uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/properties', propertyRoutes);
app.use('/api/leads', leadRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/settings', settingsRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Real Estate Platform API is running',
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Start server
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`
╔══════════════════════════════════════════════════════════╗
║                                                          ║
║   🏠 Real Estate Platform Backend                        ║
║                                                          ║
║   🌐 Server: http://localhost:${PORT}                     ║
║   🗄️  Database: MongoDB Atlas Connected                  ║
║   🔧 Environment: ${process.env.NODE_ENV || 'development'}                            ║
║                                                          ║
║   API Endpoints:                                         ║
║   - GET  /api/properties                                 ║
║   - GET  /api/properties/:id                             ║
║   - POST /api/properties                                 ║
║   - PUT  /api/properties/:id                             ║
║   - DELETE /api/properties/:id                           ║
║                                                          ║
║   Health Check: http://localhost:${PORT}/api/health       ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
    `);
  });
});

module.exports = app;
