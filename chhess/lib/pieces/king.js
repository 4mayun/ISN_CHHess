class King extends Piece {
    constructor(gameRef) {
        super(gameRef);
    }

    init(pieceSide) {
        super.init(pieceSide);

        this.pos = window[this.gRef].config.initialPos.king[this.side];

        this.sprite = loadImage(
            window[this.gRef].config.ressource.piece.king[this.side],
            function() {console.info("[GAME]: King image as been correctly loaded.");},
            function() {console.error("[ERROR]: King image failed to be loaded.");}
        );
    }
}
