// Classe ABSTRAITE: ne pas instancier
// --> elle sert à créer les classes pour toutes les pieces (roi, reine, etc)
// ABSTRACT classe: don't instantiate
// --> it's used to create classes for all pieces (king, queen, etc)

class Piece {
  constructor(gameRef) {
    this.gRef = gameRef;
    if (this.constructor === Piece) console.error("[ERROR]: Can't instantiate a Piece object\n       : Piece is an abstract class\n"); // Verification de l'origine de la classe

    this.type = undefined; // Sera défini plus tard
    this.alive = true;
  }

  init() {
    // Initialiser la piece
  }

  setType(pieceType) {
    if (pieceType==='white' || pieceType==='black') {
      this.type = pieceType;
    } else {
      // message d'erreur dans le cas où un mauvais parametre est passé
    }
  }

  draw() {
    // Dessin de la piece
  }
}
