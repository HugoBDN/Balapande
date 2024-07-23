const tables = require("../tables");

const getAll = async (req, res, next) => {
  try {
    const allCards = await tables.Cards.getAll();
    res.json(allCards);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll };
