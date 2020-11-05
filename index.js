require("express")()
  .get("/", (_, res) => res.send("hello world"))
  .listen(3000);