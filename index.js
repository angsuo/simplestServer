require("express")()
  .get("/", (_, s) => s.send("hi"))
  .listen(3000);