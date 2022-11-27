//renderizacion de ayuda
async function ayuda(req, res) {
  res.render("ayuda", { res });
}

module.exports = {
  ayuda,
};
