const tables = require("../tables");

const getAll = async (req, res, next) => {
  try {
    const alldiscard = await tables.Discard.getAll();
    res.json(alldiscard);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
};
