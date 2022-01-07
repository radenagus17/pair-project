const router = require("express").Router();
const GoCheckUpController = require("../controllers/goCheckUpController");
const Controller = require("../controllers/index");

router.get("/", Controller.getHome);
router.get("/login", Controller.getLogin);
router.post("/login", Controller.postLogin);
router.get("/logout", Controller.getLogout);
router.post("/register", Controller.postRegister);
// router.use(function (req, res, next) {
//     if(req.session) next()
//     else res.redirect('/login')
//   })
router.post("/checkUp", GoCheckUpController.getAllSymtomps);
router.post("/goCheckUp", GoCheckUpController.postResult);
router.get("/medicalRecords", GoCheckUpController.medicalRecords);

module.exports = router;
