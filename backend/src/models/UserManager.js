const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "User" });
  }

  async getAll() {
    const [result] = await this.database.query(`SELECT * FROM User`);
    return [result];
  }
}

module.exports = UserManager;
