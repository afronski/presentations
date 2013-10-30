var http = require("http"),
    fileServer = require("node-static").Server,
    file = new fileServer("./");

require('http').createServer(function (request, response) {

    if (request.method === "POST") {
      setTimeout(function() {
        response.writeHead(200);
        response.end("OK");
      }, 10000);
    } else if (request.method === "GET" && request.url.indexOf("get-data") !== -1) {
      setTimeout(function() {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(JSON.stringify({ data: new Array(1000).join("!") }));
      }, 5000);
    } else if (request.method === "GET" && request.url.indexOf("blocking") !== -1) {
      setTimeout(function() {
        file.serve(request, response);
      }, 5000);
    } else {
      file.serve(request, response);
    }

}).listen(8000);