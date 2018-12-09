const game = new Game();

const beginGame = document.getElementById("begin-game");

beginGame.addEventListener("click", () => {
  game.startGame();

  this.style.display = "none";
  document.getElementById("play-area").style.opacity = "1";
});
