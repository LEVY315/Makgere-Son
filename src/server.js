const http = require('http');
const fs = require('fs');
const path = require('path');

// Define the file path to your home.html
const filePath = path.join(__dirname, 'home.html');

const server = http.createServer((req, res) => {
    // Check if the request is for the root URL
    if (req.url === '/' || req.url === '/home.html') {
        // Read the home.html file
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content, 'utf-8');
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

// Set the server to listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
