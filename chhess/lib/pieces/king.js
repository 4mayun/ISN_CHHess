class King extends Piece {
    constructor(gameRef) {
        super(gameRef);
    }

    init(pieceSide) {
        super.init(pieceSide);

        this.pos = window[this.gRef].config.initialPos.king[this.side];

        this.sprite = loadImage( // Charge l'image correspondant a la piece et sa couleur
            window[this.gRef].config.ressource.piece.king[this.side], // Recupere le chemin vers l'image
            function() {/* Empty function xd */},
            function() {console.error("[ERROR]: Failed to load King image.");} // Failure callback
        );
    }
}
