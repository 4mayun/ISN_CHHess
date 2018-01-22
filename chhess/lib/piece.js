class Piece {
    constructor(gameRef, pieceType, pieceSide) {
        this.gRef = gameRef;

        this.type = pieceType;
        this.side = pieceSide;
        this.sprite = undefined; // Sera chargé dans init
        this.alive = true;
    }

    init() {
        this.sprite = loadImage( // Charge l'image correspondant a la piece et sa couleur
            window[this.gRef].config.ressource.piece[this.type][this.side], // Recupere le chemin vers l'image
            function() {/* Empty function xd */},
            function() {console.error("[ERROR]: Failed to load King image.");} // Failure callback
        );

        if (this.type == 'king') {
            this.interact = function(mx, my) {
                let matrix = generateMatrix(8);

                for (let  ri=-1; ri<2; ri++) {
                    for (let rj=-1; rj<2; rj++) {
                        let x = mx+ri, y = my+rj, canAttack = false;

                        if (ri==0 && rj==0) continue;
                        if (x<0||x>7||y<0||y>7) continue;

                        if (window[this.gRef].chessboard[x][y]) {
                            if (window[this.gRef].chessboard[x][y].side == this.side) {
                                continue;
                            } else {
                                canAttack = true;
                            }
                        }

                        matrix[x][y] = {canAttack: canAttack};
                    }
                }

                return matrix;
            }
        }
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
