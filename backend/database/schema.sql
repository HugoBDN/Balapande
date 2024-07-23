/* create table item (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null
);
*/

CREATE TABLE Cards (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A') NOT NULL,
    valeur INT NOT NULL,
    couleur VARCHAR(50) NOT NULL,
    points INT NOT NULL,
    img VARCHAR(250) NOT NULL
);

CREATE TABLE Deck (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    card_id INT NOT NULL,
    player_hand_id INT,
    FOREIGN KEY (card_id) REFERENCES Cards(id) ON DELETE CASCADE,
    FOREIGN KEY (player_hand_id) REFERENCES Deck(id) ON DELETE CASCADE
);

CREATE TABLE Player_Hand (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    deck_id INT,
    card_id INT NOT NULL,
    FOREIGN KEY (deck_id) REFERENCES Deck(id) ON DELETE SET NULL,
    FOREIGN KEY (card_id) REFERENCES Cards(id) ON DELETE CASCADE
);

CREATE TABLE Jokers (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom VARCHAR(255) NOT NULL,
    effet VARCHAR(255) NOT NULL
);

CREATE TABLE Slot_Jokers (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    joker_id INT NOT NULL,
    FOREIGN KEY (joker_id) REFERENCES Jokers(id) ON DELETE CASCADE
);

CREATE TABLE Combinaison (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom VARCHAR(255) NOT NULL,
    valeur INT NOT NULL,
    points INT NOT NULL,
    multi INT NOT NULL
);

CREATE TABLE Discard (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    player_hand_id INT NOT NULL,
    FOREIGN KEY (player_hand_id) REFERENCES Player_Hand(id) ON DELETE CASCADE
);

CREATE TABLE Selected_Cards (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    player_hand_id INT NOT NULL,
    combinaison_id INT,
    slot_Jokers_id INT,
    FOREIGN KEY (slot_Jokers_id) REFERENCES Slot_Jokers(id) ON DELETE CASCADE,
    FOREIGN KEY (player_hand_id) REFERENCES Player_Hand(id) ON DELETE CASCADE,
    FOREIGN KEY (combinaison_id) REFERENCES Combinaison(id) ON DELETE CASCADE
);

CREATE TABLE User (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    birthday DATE NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);