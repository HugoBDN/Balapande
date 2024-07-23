const AbstractManager = require("./AbstractManager");

class DiscardManager extends AbstractManager {
  constructor() {
    super({ table: "Discard" });
  }

  async getAll() {
    const [allDiscard] = await this.database.query(`SELECT * FROM Discard`);
    return allDiscard;
  }
}
module.exports = DiscardManager;
