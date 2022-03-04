const http = require("http");

// YOUR NODE SERVER CODE GOES HERE
const server = http.createServer((request, response) => {
    response.end("Hello, Galvanize!");
  });

  server.listen(3000, "127.0.0.1", () => {
    console.log(`Server running at http://127.0.0.1:3000/`);
  });