const app = require('express')();

app.get("/", (_, res) => res.status(200).send("hello world"));

app.listen(3000, () => console.log("server running"))