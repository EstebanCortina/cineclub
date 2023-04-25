const m = (req, res, next) => {
  res.send("Mensaje");
};

module.exports = { m: m }