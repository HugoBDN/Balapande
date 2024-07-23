const tables = require("../tables");

const getAll = async (req, res, next) => {
  try {
    const deck = await tables.Deck.getAll();
    res.json(deck);
  } catch (error) {
    next(error);
  }
};

const fillDeck = async (req, res, next) => {
  try {
    const getCards = await tables.Deck.getAllCards();
    res.json(getCards);
  } catch (error) {
    next(error);
  }
};

const deleteDistributedCards = async (req, res, next) => {
  try {
    const updateDeck = await tables.Deck.deleteCards();
    res.json(updateDeck);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  fillDeck,
  deleteDistributedCards,
};
