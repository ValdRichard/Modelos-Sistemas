const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/Connection.js");

const { productos } = require("../models/Productos");

//Muestra todo los productos

async function getAll(req, res) {
  let producto = await productos.findAll({ offset: 0, limit: 9 });

  console.log(res.locals.userAdmin);

  res.render("productos", { producto, res });
}

//Muestra los prductos con la categoria que selecciono
async function categoria(req, res) {
  let producto = await productos.findAll({
    offset: 0,
    limit: 9,
    where: { categoria: req.params.categoria },
  });

  res.render("productos", { producto, res });
}

// Paginacion

async function paginacion(req, res) {
  const offset = +req.params.offset;

  const limit = +req.params.limit;

  let producto = await productos.findAll({ offset: offset, limit: limit });

  res.render("productos", { producto, res });
}

module.exports = {
  getAll,
  categoria,
  paginacion,
};
