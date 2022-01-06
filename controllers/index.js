const {User} = require('../models/index')
const bcrypt = require('bcrypt')

class Controller{
    static getHome(req ,res){
        if(req.session.isLoggedIn === true) {
            res.render('home', {
              username: req.session.username
            });
          }
          else {
            res.redirect('/login');
          }
    }

    static getLogin(req ,res){
        if (req.query.err) {
            res.render('userLogin', {
              errorLogin: true
            });
          }
          else {
            res.render('userLogin', {
              errorLogin: false
            });
          }
    }

    static postLogin(req ,res){
      console.log(req.body);
        User.findOne({
            where: {
              uname: req.body.uname
            }
          })
            .then(data => {
              if (data === null) {
                res.redirect('/login?err=true');
              }
              else {
                console.log(data)
                bcrypt.compare(req.body.upass, data.upass)
                  .then(result => {
                    // Baca dari dokumentasi, hasil nya adalah result true or false
                    if (result === true) {
                      req.session.isLoggedIn = true;
                      req.session.username = data.uname;
        
                      res.redirect('/');
                    }
                    else {
                      res.redirect('/login?err=true');
                    }
                  });
              }
            })
            .catch(err => {
              console.log(err)
              res.send(err);
            });
    }

    static getLogout(req ,res){
      req.session.destroy(err => {
        if(err) {
          res.send(err);
        }
        res.redirect('/login');
      });
    }

    static async postRegister (req ,res){
      const body = req.body;

      if (!(body.uname && body.upass)) {
        return  res.redirect('/login?err=true');
      }
      
      const salt = await bcrypt.genSalt(12);
      // now we set user password to hashed password
      console.log(salt);
      body.upass = await bcrypt.hash(body.upass, salt);
      User.create(body)
      .then((data)=>{
        console.log(data)
        req.session.isLoggedIn = true;
        req.session.username = body.uname;
        res.redirect('/');
      })
      .catch((err) =>{
        res.redirect(`login?err='${err.errors[0].message}'`)
        // res.send({err, hai:'hai'})
      })
    }
}

module.exports = Controller