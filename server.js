// Start by importing the http module
const http = require('http');
const port = 3000;

// Initialize your server
const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/") {
        res.end("Welcome to our home page");
      } else if (req.method === "GET" && req.url === "/about") {
        res.end("Here is our short history");
      } else {
        res.end("Ohh! Page not found");
      }
})

//Listening on port 3000
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });