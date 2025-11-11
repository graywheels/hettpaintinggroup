const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files (for images, CSS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// ==================== ROUTES ====================

// Home page route
app.get('/', (req, res) => {
    res.render('index');
});

// Login page route
app.get('/login', (req, res) => {
    res.render('login', { error: undefined });
});

// Login form submission (placeholder - no authentication yet)
app.post('/login', (req, res) => {
    // For now, just redirect back to home
    // Authentication logic will be added later
    res.redirect('/');
});

// ==================== START SERVER ====================

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(`📄 View the site at http://localhost:${PORT}`);
});

