const AbstractManager = require("./AbstractManager");

class CardManager extends AbstractManager {
  constructor() {
    super({ table: "Cards" });
  }

  async getAll() {
    const [result] = await this.database.query(`SELECT * FROM Cards`);
    return result;
  }
}

module.exports = CardManager;
