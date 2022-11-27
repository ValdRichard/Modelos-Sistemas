//Herramientas

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/Connection.js");

const { usuarios } = require("../models/Usuario");

//rendriza el login
async function login(req, res) {
  res.render("login", { res });
}


// comprueba que la contraseña sea igual al usuario con el correo que ingreso
async function logeo(req, res, next) {
  const datos = req.body;
  let user = await usuarios.findOne({ where: { email: datos.email } });

  if (!user) {
    let loggedin = true;
    res.render("login", { loggedin, res });
  } else if (datos.contraseña !== user.contraseña) {
    let loggedin = true;

    res.render("login", { loggedin, res });
  } else {
    res.locals.userFound = true;

    req.session.user = user.id_usuario;

    next();
  }
}

//deslogear

function logout(req, res, next) {
  req.session.destroy();
  res.locals.userFound = false;

  next();
}

module.exports = {
  login: login,
  logeo: logeo,
  logout: logout,
};
