const { Symtomp, Disease, MedicalRecord } = require("../models");

class GoCheckUpController {
  static getAllSymtomps(req, res) {
    const gejala = [req.body.gejala1, req.body.gejala2, req.body.gejala3];
    const countGejala1 = gejala.filter((x) => x === req.body.gejala1).length;
    const countGejala2 = gejala.filter((x) => x === req.body.gejala2).length;
    const countGejala3 = gejala.filter((x) => x === req.body.gejala3).length;

    if (countGejala1 === 2) {
      Disease.findOne({
        where: {
          id: req.body.gejala1,
        },
      }).then((result) => {
        res.render("formResult", { disease: result });
        // res.send(`Diagnosa penyakit awalnya adalah ${result.name}`);
      });
    } else if (countGejala2 === 2) {
      Disease.findOne({
        where: {
          id: req.body.gejala2,
        },
      }).then((result) => {
        res.render("formResult", { disease: result });
        // res.send(`Diagnosa penyakit awalnya adalah ${result.name}`);
      });
    } else if (countGejala3 === 2) {
      Disease.findOne({
        where: {
          id: req.body.gejala3,
        },
      }).then((result) => {
        res.render("formResult", { disease: result });
        // res.send(`Diagnosa penyakit awalnya adalah ${result.name}`);
      });
    } else {
      res.render("formResult", { disease: { name: "Diagnosa Penyakit Tidak Ditemukan", description: "-", level: "-" } });
    }
  }

  static medicalRecords(req, res) {
    MedicalRecord.findAll()
      .then((result) => {
        console.log(result);
        res.render("medical_records", { records: result });
      })
      .catch((err) => res.send(err.message));
  }
}

module.exports = GoCheckUpController;
