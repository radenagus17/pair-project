const { User,Symtomp, Disease, MedicalRecord } = require("../models");

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
    User.findOne({
      where: { id: req.session.UserId },
      include: [Disease,MedicalRecord]
    })
    .then(records => {
      
      console.log(records.Diseases);
      res.render('medical_records',{records})
    })
    .catch(err =>{
      res.send(err.message)
    })
    // MedicalRecord.findAll()
    //   .then((result) => {
    //     console.log(result);
    //     res.render("medical_records", { records: result });
    //   })
    //   .catch((err) => res.send(err.message));
  }

  static postResult(req, res){
    console.log(req.session)
    MedicalRecord.create({UserId :req.session.UserId, DiseaseId:req.body.DiseaseId,date: new Date()})
    .then((result) => {
      console.log(result);
      res.redirect("/medicalRecords");
    })
    .catch(err =>{
      res.send(err)
    })
  }
}

module.exports = GoCheckUpController;
