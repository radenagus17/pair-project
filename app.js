const express = require("express");
const router = require("./routes");
const session = require('express-session');
const bcrypt = require('bcryptjs');
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: "supercalifragilisticexpialidocious",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000
    }
  }));
app.use("/", router);

app.listen(port, () => console.log(`I Love yaa... ${port}`));
