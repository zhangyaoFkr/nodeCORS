var express = require("express");
var cors = require("cors");

var app = express();

app.use(cors());

// app.all("*", function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
//   );
//   res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");

//   if (req.method == "OPTIONS") {
//     res.send(200);
//     /让options请求快速返回/;
//   } else {
//     next();
//   }
// });

app.post("/", function(req, res) {
  res.send("123");
});

app.listen(6060);
console.log("server is starting on 6060");
