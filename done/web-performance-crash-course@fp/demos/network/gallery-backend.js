var http = require("http"),
    fileServer = require("node-static").Server,
    file = new fileServer("./");

function pushKitten(response, cat) {
  cat.pipe(response);
}

function pipeKitten(request, response) {
  var url = request.url.replace("-", ".");

  console.log("Kitty, kitty, kitty ... %s", url);
  http.get("http:/" + url, pushKitten.bind(null, response));
}

require("http").createServer(
  function (request, response) {
    if (request.method === "GET" && request.url.indexOf("kitten") !== -1) {
      setTimeout(pipeKitten.bind(null, request, response), 1000);
    } else {
      file.serve(request, response);
    }
  }).listen(8000);