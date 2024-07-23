const AbstractManager = require("./AbstractManager");

class DeckManager extends AbstractManager {
  constructor() {
    super({ table: "Deck" });
  }

  async getAllCards() {
    const [filledDeck] = await this.database.query(
      `INSERT INTO Deck (card_id)
SELECT id FROM Cards;`
    );
    return filledDeck;
  }

  async getAll() {
    const [result] = await this.database.query(
      `SELECT name, Cards.id AS cards, couleur FROM Deck LEFT JOIN Cards ON Deck.card_id = Cards.id`
    );
    return result;
  }

  async deleteCards() {
    const [result] = await this.database.query(`DELETE FROM Deck
WHERE id IN (SELECT deck_id FROM Player_Hand);`);
    return result;
  }
}

module.exports = DeckManager;
