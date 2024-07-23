const AbstractManager = require("./AbstractManager");

class PlayerHand extends AbstractManager {
  constructor() {
    super({ table: "Player_Hand" });
  }

  async getAll() {
    const [result] = await this.database.query(
      `SELECT * FROM Player_Hand LEFT JOIN Cards ON Player_Hand.Card_id = Cards.id`
    );
    return result;
  }

  async start() {
    const [starter] = await this.database
      .query(`INSERT INTO Player_Hand (deck_id, card_id)
SELECT id, card_id FROM Deck ORDER BY RAND() LIMIT 10;`);
    return starter;
  }

  async fill() {
    const [filledCards] = await this.database
      .query(`INSERT INTO Player_Hand (deck_id, card_id)
SELECT deck_id, card_id
FROM Deck 
WHERE deck_id NOT IN (
    SELECT deck_id 
    FROM Player_Hand
) 
LIMIT (10 - (
    SELECT COUNT(*) 
    FROM Player_Hand
));`);
    return filledCards;
  }
}

module.exports = PlayerHand;
