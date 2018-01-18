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

    canMoveOn() {
        let caseArray = [];
        for (let ri=-1; ri<2; ri++) {
            for (let rj=-1; rj<2; rj++) {
                let x = ri+this.pos.x, y = rj+this.pos.y;
                if (x<0||x>7||y<0||y>7) continue;
                if (ri==0 && rj==0) continue;
                caseArray.push({x: x, y: y});
            }
        }
        return caseArray;
    }
}
