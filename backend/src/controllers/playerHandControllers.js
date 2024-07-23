const tables = require("../tables");

const getAll = async (req, res, next) => {
  try {
    const playerHand = await tables.Player_Hand.getAll();
    res.json(playerHand);
  } catch (error) {
    next(error);
  }
};

const startGame = async (req, res, next) => {
  try {
    const starter = await tables.Player_Hand.start();
    res.json(starter);
  } catch (error) {
    next(error);
  }
};

const fillHand = async (req, res, next) => {
  try {
    const filledCards = await tables.Player_Hand.fill();
    res.json(filledCards);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  startGame,
  fillHand,
};
