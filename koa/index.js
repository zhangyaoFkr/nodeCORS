var Koa = require('koa');
var route = require('koa-route');
var cors = require('koa-cors');
var app = new Koa();

app.use(cors());

app.use(route.post('/', function() {
  this.body = { msg: 'Hello World!' };
}));

app.listen(6060);
console.log("server is starting on 6060");
