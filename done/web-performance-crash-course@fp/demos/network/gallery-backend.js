var http = require("http"),
    fileServer = require("node-static").Server,
    file = new fileServer("./");

require('http').createServer(function (request, response) {

    if (request.method === "GET" && request.url.indexOf("kitten") !== -1) {
      setTimeout(function() {
        console.log("http:/" + request.url.replace("-", "."));

        http.get("http:/" + request.url.replace("-", "."), function(cat) {
          cat.pipe(response);
        });
      }, 1000);
    } else {
      file.serve(request, response);
    }

}).listen(8000);