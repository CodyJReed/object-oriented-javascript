class Game {
  constructor() {
    this.players = this.createPlayers();
    this.board = new Board();
    this.ready = false;
  }

  createPlayers() {
    const players = [
      new Player("indigo", 1, "#e15258", true),
      new Player("scarlett", 2, "#e59a13")
    ];
    return players;
  }

  // Gets game ready to play
  startGame() {
    this.board.drawHTMLBoard();
    this.activePlayer.activeToken.drawHTMLToken();
    this.ready = true;
  }

  get activePlayer() {
    return this.players.find(player => player.active);
  }
}
