const tables = require("../tables");

const getAll = async (req, res, next) => {
  try {
    const combinaisons = await tables.Combinaison.getAll();
    res.json(combinaisons);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
};
