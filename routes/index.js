const router = require("express").Router();

router.get("/", (req, res) => res.render("userLogin"));
router.get("/symtomps", (req, res) => res.send("hallo symtomps"));
router.get("/diseases", (req, res) => res.send("hallo diseases"));

module.exports = router;
