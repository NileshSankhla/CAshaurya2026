//backend/server.js


/* eslint-env node */
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

dotenv.config();

const app = express();

// ✅ Trust proxy (important if CIC puts Nginx/Apache in front)
app.set('trust proxy', 1);

// Allowed origins (update with your actual frontend domains)
const allowedOrigins = [
  'http://localhost:5173',
  'https://ca.shauryaiitkgp.in',
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })
);

app.use(express.json());

// ✅ Rate limiter (10 requests/minute per IP)
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  message: 'Too many requests, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// --- DB test route (add here) ---
app.get('/db-test', async (req, res) => {
  try {
    const { pool } = require('./db');
    const [rows] = await pool.query('SELECT NOW() AS currentTime');
    res.json({ success: true, dbTime: rows[0].currentTime });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

const { initDB } = require('./db');
initDB();

// ✅ Routes
app.use('/api/register', require('./routes/register'));
app.use('/api/faq', require('./routes/faq'));

// ✅ Root health check
app.get('/', (req, res) => {
  res.send('✅ Shaurya backend is running with MySQL');
});

// ✅ Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
