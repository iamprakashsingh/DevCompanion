// We are using Socket.io, which integrates more directly with an HTTP server
// than with an Express app. That's why we export the Express `app` separately,
// and import it into `server.js`, where we create and use an `http` server.
// The actual listening happens on the `http` server, not directly on the Express app.


// so as to use environment variables we imported dotenv
// Environment variables are key-value pairs stored outside your code that define important configuration for your application — like:
// API keys
// Database URLs
// Secret tokens
// Environment mode

// dotenv is an NPM package that loads environment variables from a .env file into process.env in your Node.js app.
import 'dotenv/config';
import http from 'http';
import app from './app.js';

const port = process.env.PORT || 3000;
const server = http.createServer(app);


server.listen(port,()=>{
    console.log(`Server is running on port ${3000}`);
})