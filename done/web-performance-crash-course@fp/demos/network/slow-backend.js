var http = require("http"),
    fileServer = require("node-static").Server,
    file = new fileServer("./");

function serveFile(request, response) {
  file.serve(request, response);
}

function sendJson(response) {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify({ data: [ "important response" ] }));
}

function ack(response) {
  response.writeHead(200);
  response.end("OK");
}

require('http').createServer(
  function (request, response) {
    if (request.method === "POST") {
      setTimeout(ack.bind(null, response, 10000);
    } else if (request.method === "GET" && request.url.indexOf("get-data") !== -1) {
      setTimeout(sendJson.bind(null, response), 5000);
    } else if (request.method === "GET" && request.url.indexOf("blocking") !== -1) {
      setTimeout(serveFile.bind(null, request, response), 5000);
    } else {
      serveFile(request, response);
    }
  }).listen(8000);