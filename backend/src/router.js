const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");
const combinaisonControllers = require("./controllers/combinaisonControllers");
const deckControllers = require("./controllers/deckControllers");
const playerHandControllers = require("./controllers/playerHandControllers");
const jokerControllers = require("./controllers/jokerControllers");
const cardsControllers = require("./controllers/cardsControllers");
const discardControllers = require("./controllers/discardControllers");
const selectedCardsControllers = require("./controllers/selectedCardsControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);

router.get("/user", userControllers.getAll);
router.get("/combinaison", combinaisonControllers.getAll);
router.get("/deck", deckControllers.getAll);
router.get("/playerhand", playerHandControllers.getAll);
router.get("/joker", jokerControllers.getAll);
router.get("/cards", cardsControllers.getAll);
router.get("/discard", discardControllers.getAll);
router.get("/selectedcards", selectedCardsControllers.getAll);

router.get("/filldeck", deckControllers.fillDeck);

router.get("/fillplayerhand", playerHandControllers.fillHand);

router.get("/starter", playerHandControllers.startGame);
// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);

router.post("/commitcards", selectedCardsControllers.selectCards);

router.delete("/updatedeck", deckControllers.deleteDistributedCards);

/* ************************************************************************* */

module.exports = router;
