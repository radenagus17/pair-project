const express = require("express");
const router = require("../routes");
const session = require("express-session");
const app = express();
const serverless = require("serverless-http");
// const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "supercalifragilisticexpialidocious",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000,
    },
  })
);
app.use("/.netlify/functions/server", router);
app.use("/", (req, res) => res.sendFile(path.join(__dirname, "../index.html")));

// app.listen(port, () => console.log(`I Love yaa... ${port}`));
module.exports = app;
module.exports.handler = serverless(app);
