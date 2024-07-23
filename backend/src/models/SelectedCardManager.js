const AbstractManager = require("./AbstractManager");

class SelectedCardManager extends AbstractManager {
  constructor() {
    super({ table: "Selected_Cards" });
  }

  async getAll() {
    const [cards] = await this.database.query(`SELECT * FROM Selected_Cards`);
    return cards;
  }

  async play() {
    const [cards] = await this.database
      .query(`INSERT INTO Selected_Cards (player_hand_id)
SELECT id
FROM Player_Hand
ORDER BY RAND()
LIMIT 5;`);
    return cards;
  }
}

module.exports = SelectedCardManager;
