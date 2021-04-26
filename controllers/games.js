const connection = require('../sql/api')

const showGames = (req, res) => {
  console.log('In the /GET games route');

  const sql = "SELECT * from top10_video_games";
  connection.query(sql, (err, results) => {
    if(err){
      console.log(`ERROR: ${err}`);
      res.status(500).send(`internal service error (show games)`)
    };
    console.log(results);
    res.json(results)
  })
};

const showGamesById = (req, res) => {
  console.log('In the /GET/:id games route');
    const sql = `SELECT * from top10_video_games where game_id ='${req.params.id}'`;
  connection.query(sql, (err, results) => {
    if(err){
      console.log(`ERROR: ${err}`);
      res.status(500).send(`internal service error (show game by id)`)
    };
    console.log(results);
    res.json(results)
  })
};

const createGame = (req, res) => {
  console.log('In the /POST games route');
    
  let game_name = req.body.game_name;
  let game_description = req.body.game_description;
  let game_developer = req.body.game_developer;
  let game_release_year = req.body.game_release_year;

    if(req.body) {
      let sql = `INSERT into top10_video_games values (game_id, ?, ?, ?, ?)`;
      let body = [];
      
      body.push(game_name) 
      body.push(game_description)
      body.push(game_developer)
      body.push(game_release_year);

      connection.query(sql, body, (err) => {
        if(err) {
          console.log(`ERROR: ${err}`);
          res.status(500).send(`internal service error (create game)`)
        }
        res.send(`successfully added new game: ${body}`)
      })
    }
  };

const updateGame = (req, res) => {
  console.log('In the /PUT games route');

  let sql = `UPDATE top10_video_games SET
  game_name = ?,
  game_description = ?,
  game_developer = ?,
  game_release_year = ?
  WHERE game_id = ${req.params.id}`;
  let body = [];

  body.push(req.body.game_name) 
  body.push(req.body.game_description)
  body.push(req.body.game_developer)
  body.push(req.body.game_release_year);

  connection.query(sql, body, (err) => {
    if(err) {
      console.log(`ERROR: ${err}`);
      res.status(500).send(`internal service error (create game)`)
    }
    res.send(`successfully updated new game: ${body}`)
  })
};

const deleteGame = (req, res) => {
  console.log('In the /DELETE games route');
  
  let sql = `DELETE FROM top10_video_games WHERE game_id = ${req.params.id}`;

  connection.query(sql, (err) => {
    if(err) {
      console.log(`ERROR: ${err}`);
      res.status(500).send(`internal service error (create game)`)
    }
    res.send(`successfully deleted game: ${req.params.id}`)
  })
};

module.exports = {showGames, showGamesById, createGame, updateGame, deleteGame};