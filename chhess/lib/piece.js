// Classe ABSTRAITE: ne pas instancier
// --> elle sert à créer les classes pour toutes les pieces (roi, reine, etc)
// ABSTRACT classe: don't instantiate
// --> it's used to create classes for all pieces (king, queen, etc)

class Piece {
    constructor(gameRef) {
        this.gRef = gameRef;
        if (this.constructor === Piece) // Verification de l'origine de la classe
            console.error("[ERROR]: Can't instantiate a Piece object\n       : Piece is an abstract class\n");
        this.side = undefined; // Sera défini plus tard
        this.sprite = undefined; // Sera chargé dans init
        this.alive = true;
    }

    setSide(pieceSide) {
        if (pieceSide==='white' || pieceSide==='black') {
            this.side = pieceSide;
        } else {
            console.error("[ERROR]: You just set a "+this.constructor.name+" piece with a wrong side.");
        }
    }

    init() {
        if (this.side===undefined) { // Verifie que le type est bien defini
            console.error("[ERROR]: The side of this "+this.constructor.name+" piece hasn't been defined !");
            console.error("       : Please review the code which is supposed to create and init this piece");
        }
    }

    draw() {
        // Dessin de la piece
    }
}
