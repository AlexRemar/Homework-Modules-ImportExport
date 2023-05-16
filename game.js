class Game {
    start() {
      console.log('game started');
    }
  }
  
  class GameSavingData {
  }
  
  function readGameSaving() {
  }
  
  function writeGameSaving() {
  }

  const character = require('./domain.js').default

  export default {
    Game
}
  module.exports = {
    GameSavingData,
    readGameSaving,
    writeGameSaving
  }