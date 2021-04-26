const express = require('express');
const router = express.Router();
const controller = require('../controllers/games');

// GET a list of all games
router.get('/top10games', controller.showGames);


// GET a game by ID
router.get('/top10games/:id', controller.showGamesById);

// POST a new game to the top10_video_games DB
router.post('/top10games', controller.createGame)

// PUT new info into a game in the games top10_video_games DB
router.put('/top10games/:id', controller.updateGame)

// DELETE game in the games top10_video_games DB
router.delete('/top10games/:id', controller.deleteGame)

module.exports = router;