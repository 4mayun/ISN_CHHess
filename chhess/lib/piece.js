// Classe ABSTRAITE: ne pas instancier
// --> elle sert à créer les classes pour toutes les pieces (roi, reine, etc)
// ABSTRACT classe: don't instantiate
// --> it's used to create classes for all pieces (king, queen, etc)

class Piece {
  constructor(gameRef) {
    if (this.constructor === Piece) console.error("[ERROR]: Can't instantiate a Piece object\n       : Piece is an abstract class\n"); // Verification de l'origine de la classe

    this.gRef = gameRef;
  }
}
