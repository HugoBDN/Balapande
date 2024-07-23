const tables = require("../tables");

const getAll = async (req, res, next) => {
  try {
    const jokers = await tables.Jokers.getAll();
    res.json(jokers);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
};
