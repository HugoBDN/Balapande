const AbstractManager = require("./AbstractManager");

class CombinaisonManager extends AbstractManager {
  constructor() {
    super({ table: "Combinaison" });
  }

  async getAll() {
    const [result] = await this.database.query(`SELECT * FROM Combinaison`);
    return result;
  }
}

module.exports = CombinaisonManager;
