// const http = require('http')
// const PORT = 8080

// const server = http.createServer((request, response) => {
//     // console.log(request.url)
//     // response.end("hello")
//     switch (request.url) {
//         case '/':
//             response.end("Hello.. Welcome to the nodejs")
//             break
//         case '/about':
//             response.end("this is the about page")
//             break
//         default:
//             response.end("404 error")
//     }

// })

// server.listen(PORT, () => {
//     console.log("server is running on 8080")
// })

const http = require('http');

const requestListener = (req, res) => {
    res.setHeader('Content-Type', 'application/json'); // Set content type to JSON

    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200);
        res.end(JSON.stringify({ message: 'Welcome to the Node.js HTTP Server!' }));
    } else if (req.method === 'GET' && req.url === '/about') {
        res.writeHead(200);
        res.end(JSON.stringify({ message: 'This is the about page.' }));
    } else if (req.method === 'POST' && req.url === '/submit') {
        let body = '';

        // Accumulate data chunks
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                // Parse JSON data
                const parsedData = JSON.parse(body);

                // Log parsed JSON data
                console.log('Form Data Received:', parsedData);

                // Send response in JSON format
                res.writeHead(200);
                res.end(JSON.stringify({ message: 'Data received!', data: parsedData }));
            } catch (error) {
                // Handle JSON parsing error
                res.writeHead(400);
                res.end(JSON.stringify({ error: 'Invalid JSON format' }));
            }
        });
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: '404 Not Found' }));
    }
};

// Create and start the server
const server = http.createServer(requestListener);

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
