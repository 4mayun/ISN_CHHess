class Piece {
    constructor(gameRef, pieceType, pieceSide) {
        this.gRef = gameRef;

        this.type = pieceType;
        this.side = pieceSide;
        this.alive = true;
        this.sprite = undefined; // Sera chargé dans init
        this.interact = undefined; // Sera defini dans init
    }

    init() {
        this.sprite = loadImage( // Charge l'image correspondant a la piece et sa couleur
            window[this.gRef].config.ressource.piece[this.side][this.type], // Recupere le chemin vers l'image
            function() {/* Empty function xd */},
            function() {console.error("[ERROR]: Failed to load "+this.type+" image.");} // Failure callback
        );

        this.interact = new Function('mx', 'my', window[this.gRef].config.behavior[this.type].function);
    }

    draw(x, y) {
        if (this.alive) {
            image( // Dessine la piece sur l'echiquier
                this.sprite,
                x*(window[this.gRef].config.square.size+window[this.gRef].config.margin) + width/2-window[this.gRef].config.sizeW/2,
                y*(window[this.gRef].config.square.size+window[this.gRef].config.margin) + height/2-window[this.gRef].config.sizeH/2,
                window[this.gRef].config.square.size,
                window[this.gRef].config.square.size
            );
        }
    }
}
