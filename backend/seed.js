/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import Faker library for generating fake data
// const { faker } = require("@faker-js/faker");

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queries = [];

    /* ************************************************************************* */
    await database.query("SET FOREIGN_KEY_CHECKS = 0;");
    await database.query("truncate User");
    await database.query("truncate Cards");
    await database.query("truncate Combinaison");
    await database.query("truncate Deck");
    await database.query("truncate Player_Hand");
    await database.query("SET FOREIGN_KEY_CHECKS = 1;");
    // Generating Seed Data

    // Insert fake data into the 'user' table
    queries.push(
      database.query(`INSERT INTO User (name, lastname, birthday, email, password) VALUES 
("Smith", "Alice", "1985-09-20", "alice.smith@example.com", "password123"),
("Brown", "Emma", "1992-04-10", "emma.brown@example.com", "qwerty123"),
("Johnson", "Michael", "1978-12-03", "michael.johnson@example.com", "abc123");`)
    );

    queries.push(
      database.query(`INSERT INTO Combinaison (nom, valeur, points, multi) VALUES 
("Carte haute", 1, 5, 1),
("Paire", 2, 10, 2),
("Double paire", 3, 20, 2),
("Brelan", 4, 30, 3),
("Quinte", 5, 40, 4),
("Couleur", 6, 50, 5),
("Full house", 7, 60, 6),
("Carré", 8, 70, 7),
("Quinte Flush", 9, 80, 8),
("Quinte Flush Royale", 10, 100, 10),
("Flush full house", 11, 500, 25);`)
    );

    queries.push(
      database.query(`INSERT INTO Cards (name, valeur, couleur, points, img) VALUES
('2', 1, 'Coeur', 2, 'public/2_of_hearts.png'),
('3', 2, 'Coeur', 3, 'public/3_of_hearts.png'),
('4', 3, 'Coeur', 4, 'public/4_of_hearts.png'),
('5', 4, 'Coeur', 5, 'public/5_of_hearts.png'),
('6', 5, 'Coeur', 6, 'public/6_of_hearts.png'),
('7', 6, 'Coeur', 7, 'public/7_of_hearts.png'),
('8', 7, 'Coeur', 8, 'public/8_of_hearts.png'),
('9', 8, 'Coeur', 9, 'public/9_of_hearts.png'),
('10', 9, 'Coeur', 10, 'public/10_of_hearts.png'),
('J', 10, 'Coeur', 10, 'public/jack_of_hearts.png'),
('Q', 11, 'Coeur', 10, 'public/queen_of_hearts.png'),
('K', 12, 'Coeur', 10, 'public/king_of_hearts.png'),
('A', 13, 'Coeur', 11, 'public/ace_of_hearts.png'),

('2', 1, 'Pique', 2, 'public/2_of_spades.png'),
('3', 2, 'Pique', 3, 'public/3_of_spades.png'),
('4', 3, 'Pique', 4, 'public/4_of_spades.png'),
('5', 4, 'Pique', 5, 'public/5_of_spades.png'),
('6', 5, 'Pique', 6, 'public/6_of_spades.png'),
('7', 6, 'Pique', 7, 'public/7_of_spades.png'),
('8', 7, 'Pique', 8, 'public/8_of_spades.png'),
('9', 8, 'Pique', 9, 'public/9_of_spades.png'),
('10', 9, 'Pique', 10, 'public/10_of_spades.png'),
('J', 10, 'Pique', 10, 'public/jack_of_spades.png'),
('Q', 11, 'Pique', 10, 'public/queen_of_spades.png'),
('K', 12, 'Pique', 10, 'public/king_of_spades.png'),
('A', 13, 'Pique', 11, 'public/ace_of_spades.png'),

('2', 1, 'Trèfle', 2, 'public/2_of_clubs.png'),
('3', 2, 'Trèfle', 3, 'public/3_of_clubs.png'),
('4', 3, 'Trèfle', 4, 'public/4_of_clubs.png'),
('5', 4, 'Trèfle', 5, 'public/5_of_clubs.png'),
('6', 5, 'Trèfle', 6, 'public/6_of_clubs.png'),
('7', 6, 'Trèfle', 7, 'public/7_of_clubs.png'),
('8', 7, 'Trèfle', 8, 'public/8_of_clubs.png'),
('9', 8, 'Trèfle', 9,'public/9_of_clubs.png'),
('10', 9, 'Trèfle', 10, 'public/10_of_clubs.png'),
('J', 10, 'Trèfle', 10, 'public/jack_of_clubs.png'),
('Q', 11, 'Trèfle', 10, 'public/queen_of_clubs.png'),
('K', 12, 'Trèfle', 10, 'public/king_of_clubs.png'),
('A', 13, 'Trèfle', 11, 'public/ace_of_clubs.png'),

('2', 1, 'Carreau', 2, 'public/2_of_diamonds.png'),
('3', 2, 'Carreau', 3, 'public/3_of_diamonds.png'),
('4', 3, 'Carreau', 4, 'public/4_of_diamonds.png'),
('5', 4, 'Carreau', 5, 'public/5_of_diamonds.png'),
('6', 5, 'Carreau', 6, 'public/6_of_diamonds.png'),
('7', 6, 'Carreau', 7, 'public/7_of_diamonds.png'),
('8', 7, 'Carreau', 8, 'public/8_of_diamonds.png'),
('9', 8, 'Carreau', 9, 'public/9_of_diamonds.png'),
('10', 9, 'Carreau', 10, 'public/10_of_diamonds.png'),
('J', 10, 'Carreau', 10, 'public/jack_of_diamonds.png'),
('Q', 11, 'Carreau', 10, 'public/queen_of_diamonds.png'),
('K', 12, 'Carreau', 10, 'public/king_of_diamonds.png'),
('A', 13, 'Carreau', 11, 'public/ace_of_diamonds.png');`)
    );

    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
