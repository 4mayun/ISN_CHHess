// Classe ABSTRAITE: ne pas instancier
// --> elle sert à créer les classes pour toutes les pieces (roi, reine, etc)
// ABSTRACT classe: don't instantiate
// --> it's used to create classes for all pieces (king, queen, etc)

class Piece {
    constructor(gameRef) {
        this.gRef = gameRef;
        if (this.constructor === Piece) // Verification de l'origine de la classe
            console.error("[ERROR]: Can't instantiate a Piece object\n       : Piece is an abstract class\n");

        this.side = undefined; // Sera défini dans init
        this.sprite = undefined; // Sera chargé dans init
        this.alive = true;
        this.pos = undefined; // Sera defini dans init
    }

    init(pieceSide) {
        if (pieceSide==='white' || pieceSide==='black') {
            this.side = pieceSide;
        } else {
            console.error("[ERROR]: You just set a "+this.constructor.name+" piece with a wrong side.");
            console.error("       : "+pieceSide+" is not a correct piece side.");
            console.error("       : Please review the code which is supposed to create and init this piece");
        }
    }

    draw() {
        image( // Dessine la piece sur l'echiquier
            this.sprite,
            this.pos.x*(window[this.gRef].config.square.size + window[this.gRef].config.margin) + width/2-window[this.gRef].config.sizeW/2,
            this.pos.y*(window[this.gRef].config.square.size + window[this.gRef].config.margin) + height/2-window[this.gRef].config.sizeH/2,
            window[this.gRef].config.square.size,
            window[this.gRef].config.square.size
        );
    }
}
