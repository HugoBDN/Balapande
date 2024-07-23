const tables = require("../tables");

const getAll = async (req, res, next) => {
  try {
    const cards = await tables.Selected_Cards.getAll();
    res.json(cards);
  } catch (error) {
    next(error);
  }
};

const selectCards = async (req, res, next) => {
  try {
    const playedCards = await tables.Selected_Cards.play();
    res.json(playedCards);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  selectCards,
};
