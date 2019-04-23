var http = require("http");

var postHTML = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title></title>
      <script src="https://cdn.bootcss.com/jquery/3.4.0/jquery.min.js"></script>
      <script type="text/javascript">
        $(function() {
          $("#test").click(function() {
            $.ajax({
              url: "http://localhost:6060",
              method: "POST",
              data: {},
              success: function(data) {
                console.log(data);
              }
            });
          });
        });
      </script>
    </head>
    <body>
      <p id="test">click me</p>
    </body>
  </html>`;

http
  .createServer(function(req, res) {
    req.on("data", function(chunk) {});
    req.on("end", function() {
      // 设置响应头部信息及编码
      res.writeHead(200, { "Content-Type": "text/html; charset=utf8" });
      res.write(postHTML);
      res.end();
    });
  })
  .listen(6061);
console.log("server is starting on 6061");
