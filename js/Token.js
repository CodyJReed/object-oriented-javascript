class Token {
  constructor() {
    this.owner = owner;
    this.id = `token-${index}-${owner.id}`;
    this.dropped = false;
  }

  drawHTMLToken() {
    const underlay = document.createElement("div");

    document.getElementById("game-board-underlay").appendChild(underlay);

    underlay.setAttribute("id", this.id);
    underlay
      .setAttribute("class", "token")
      .style.backGroundColor(this.owner.color);
  }

  get htmlToken() {
    return underlay;
  }
}
