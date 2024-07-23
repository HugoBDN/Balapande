const tables = require("../tables");

const getAll = async (req, res, next) => {
  try {
    const users = await tables.User.getAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
};
