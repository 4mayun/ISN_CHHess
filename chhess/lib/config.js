class Config {
    constructor() {
        this.square = {color1: 255, color2: 64, size: 80, cornerRadius: 5};
        this.nbC = 8;        // l'échiquier est de 8 par 8 cases
        this.margin = 6;         // Marge entre les blocs en pixels
        this.backgroundColor = 144; //La couleur du fond est un gris chelou

        this.sizeW = this.nbC*this.square.size+this.margin*(this.nbC-1);
        this.sizeH = this.nbC*this.square.size+this.margin*(this.nbC-1);

        this.maxFrameRate = 60;

        this.behavior = { // Chaque piece doit sa fonction. Parametres: mx et my, qui correspondent a la case ou se situe la piece
            king: {
                function: "\
                    let matrix = generateMatrix(window[this.gRef].config.nbC);\
                    for (let  ri=-1; ri<2; ri++) {\
                        for (let rj=-1; rj<2; rj++) {\
                            let canAttack = false;\
                            let x = mx+ri, y = my+rj;\
                            let cMax = window[this.gRef].config.nbC-1;\
                            if (ri==0 && rj==0) continue;\
                            if (x<0||x>cMax||y<0||y>cMax) continue;\
                            if (window[this.gRef].chessboard[x][y]) {\
                                if (window[this.gRef].chessboard[x][y].side == this.side) {\
                                    continue;\
                                } else {\
                                    canAttack = true;\
                                }\
                            }\
                            matrix[x][y] = {canAttack: canAttack};\
                        }\
                    }\
                    return matrix;\
                    "
            },
            queen: {
                function: ""
            },
            bishop: {
                function: ""
            },
            knight: {
                function: ""
            },
            rook: {
                function: ""
            },
            pawn: {
                lineDb: {
                    white: 6,
                    black: 1
                },
                function: ""
            }
        };

        this.initialPos = {
            white: {
                king: [
                    {x: 4, y: 7},
                    {x: 3, y: 3} // Pour le test
                ],
                queen: [
                    {x: 3, y: 7}
                ],
                bishop: [
                    {x: 2, y: 7},
                    {x: 5, y: 7}
                ],
                knight: [
                    {x: 1, y: 7},
                    {x: 6, y: 7}
                ],
                rook: [
                    {x: 0, y: 7},
                    {x: 7, y: 7}
                ],
                pawn: [
                    {x: 0, y: 6},
                    {x: 1, y: 6},
                    {x: 2, y: 6},
                    {x: 3, y: 6},
                    {x: 4, y: 6},
                    {x: 5, y: 6},
                    {x: 6, y: 6},
                    {x: 7, y: 6}
                ]
            },
            black: {
                king: [
                    {x: 4, y: 0}
                ],
                queen: [
                    {x: 3, y: 0}
                ],
                bishop: [
                    {x: 2, y: 0},
                    {x: 5, y: 0}
                ],
                knight: [
                    {x: 1, y: 0},
                    {x: 6, y: 0}
                ],
                rook: [
                    {x: 0, y: 0},
                    {x: 7, y: 0}
                ],
                pawn: [
                    {x: 0, y: 1},
                    {x: 1, y: 1},
                    {x: 2, y: 1},
                    {x: 3, y: 1},
                    {x: 4, y: 1},
                    {x: 5, y: 1},
                    {x: 6, y: 1},
                    {x: 7, y: 1}
                ]
            }
        };

        this.ressource = { // Chemins vers les fichiers ressources
            cursor: { // Chemin vers les fichiers d'icônes
                white: "chhess/ressources/cursor/dark_matter.png",
                black: "chhess/ressources/cursor/hot_matter.png"
            },

            piece: { // Chemin vers les fchiers d'images des pieces
                white: {
                    king: "chhess/ressources/pieces/roi_blanc.png",
                    queen: "chhess/ressources/pieces/reine_blanche.png",
                    bishop: "chhess/ressources/pieces/fou_blanc.png",
                    knight: "chhess/ressources/pieces/cheval_blanc.png",
                    rook: "chhess/ressources/pieces/tour_blanche.png",
                    pawn: "chhess/ressources/pieces/pion_blanc.png"
                },
                black: {
                    king: "chhess/ressources/pieces/roi_noir.png",
                    queen: "chhess/ressources/pieces/reine_noire.png",
                    bishop: "chhess/ressources/pieces/fou_noir.png",
                    knight: "chhess/ressources/pieces/cheval_noir.png",
                    rook: "chhess/ressources/pieces/tour_noire.png",
                    pawn: "chhess/ressources/pieces/pion_noir.png"
                }
            }
        };
    }
}
