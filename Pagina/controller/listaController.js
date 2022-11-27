//Herramientas
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/Connection.js");

const { usuarios } = require("../models/Usuario.js");

//Rellena la tabla con los usuarios
async function getAll(req, res, next) {
  let Usuarios = await usuarios.findAll();

  res.render("lista", { Usuarios, res });
}

module.exports = {
  getAll,
};
