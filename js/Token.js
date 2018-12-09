class Token {
  constructor(index, owner) {
    this.owner = owner;
    this.id = `token-${index}-${owner.id}`;
    this.dropped = false;
  }

  drawHTMLToken() {
    const underlay = document.createElement("div");

    document.getElementById("game-board-underlay").appendChild(underlay);

    underlay.setAttribute("id", this.id);
    underlay.setAttribute("class", "token");
    underlay.style.backgroundColor = this.owner.color;
  }

  get htmlToken() {
    return underlay;
  }
}
