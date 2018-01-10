class Player {
  constructor(objRef) {
    window[objRef].config.square.size;
    this.pieces = [
      new King(),
      new Queen(),
      new Bishop('left'),
      new Bishop('right'),
      new Knight('left'),
      new Knight('right'),
      new Rook('left'),
      new Rook('right'),
      new Pawn('1'),
      new Pawn('2'),
      new Pawn('3'),
      new Pawn('4'),
      new Pawn('5'),
      new Pawn('6'),
      new Pawn('7'),
      new Pawn('8'),
    ];

    if (playerType==='white') {
      for (let piece in this.pieces) this.pieces.piece.setType('white');
      this.cursor = "ressources/cursor/dark_matter.png";
    } else if (playerType==='black') {
      for (let piece in this.pieces) this.pieces.piece.setType('black');
      this.cursor = "ressources/cursor/hot_matter";
    } else {
      // message d'erreur dans le cas où un mauvais parametre est passé
    }

  }

  init() { // A utiliser avec p5
    // Initialiser les pieces, notamment charger les images
  }

}
