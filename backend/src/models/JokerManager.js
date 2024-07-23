const AbstractManager = require("./AbstractManager");

class JokerManager extends AbstractManager {
  constructor() {
    super({ table: "Jokers" });
  }

  async getAll() {
    const [result] = await this.database.query(`SELECT * FROM Jokers`);
    return result;
  }
}

module.exports = JokerManager;
