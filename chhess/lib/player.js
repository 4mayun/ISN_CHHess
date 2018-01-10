class Player {
  constructor(objRef) {
    // window[objRef].config.
    this.pieces = [
      new King(objRef),
      new Queen(objRef),
      new Bishop(objRef, 'left'),
      new Bishop(objRef, 'right'),
      new Knight(objRef, 'left'),
      new Knight(objRef, 'right'),
      new Rook(objRef, 'left'),
      new Rook(objRef, 'right'),
      new Pawn(objRef, '1'),
      new Pawn(objRef, '2'),
      new Pawn(objRef, '3'),
      new Pawn(objRef, '4'),
      new Pawn(objRef, '5'),
      new Pawn(objRef, '6'),
      new Pawn(objRef, '7'),
      new Pawn(objRef, '8'),
    ];

    if (playerType==='white') {
      for (let piece in this.pieces) this.pieces[piece].setType('white');
      this.cursor = "ressources/cursor/dark_matter.png";
    } else if (playerType==='black') {
      for (let piece in this.pieces) this.pieces[piece].setType('black');
      this.cursor = "ressources/cursor/hot_matter";
    } else {
      // message d'erreur dans le cas où un mauvais parametre est passé
    }

  }

  init() { // A utiliser avec p5
    for (let piece in this.pieces) this.pieces.piece.init();

  }

}
