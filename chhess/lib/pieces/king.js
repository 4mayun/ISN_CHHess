class King extends Piece {
    constructor(gameRef) {
        super(gameRef);
    }

    init() {
        super.init();
        this.sprite = loadImage(window[this.gRef].config.ressource.piece.king[this.side]);
    }
}
