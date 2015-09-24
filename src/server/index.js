import koa from "koa";
import serve from "koa-static";
import router from "koa-router";
import path from "path";

var app = koa();

var routes = router()
  .get("/", function*() { serve("public/index.html"); })
  .routes();

var server =
  app
    .use(serve(path.resolve(__dirname + "/../../public")))
    .use(routes)
    .listen(3000, () => {
      console.log("Serving Koa app from port %s", server.address().port);
    });
