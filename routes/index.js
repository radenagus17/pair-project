const router = require("express").Router();
const GoCheckUpController = require("../controllers/goCheckUpController");
const Controller = require("../controllers/index");

router.get("/", Controller.getHome);
router.get("/login", Controller.getLogin);
router.post("/login", Controller.postLogin);
router.get("/logout", Controller.getLogout);
router.post("/register", Controller.postRegister);
router.post("/checkUp", GoCheckUpController.getAllSymtomps);
router.get("/medicalRecords", GoCheckUpController.medicalRecords);
router.get("/symtomps", (req, res) => res.send("hallo symtomps"));
router.get("/diseases", (req, res) => res.send("hallo diseases"));

module.exports = router;
