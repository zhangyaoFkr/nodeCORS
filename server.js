var http = require("http");

http
  .createServer(function(req, res) {
    var postData = "";
    req.setEncoding("utf8");

    req.on("data", function(chunk) {
      postData += chunk;
    });

    req.on("end", function() {
      res.setHeader("Access-Control-Allow-Origin", "http://localhost:6061");
      res.end(postData + "haha");
    });
  })
  .listen(6060);
console.log("server is starting on 6060");
