class Config {
    constructor() {
        this.square = {color1: 255, color2: 64, size: 80, cornerRadius: 5};
        this.num = 8;        // l'échiquier est de 8 par 8 cases
        this.margin = 6;         // Marge entre les blocs en pixels
        this.backgroundColor = 144; //La couleur du fond est un gris chelou

        this.sizeW = this.num*this.square.size+this.margin*(this.num-1);
        this.sizeH = this.num*this.square.size+this.margin*(this.num-1);

        this.maxFrameRate = 60;

        this.initialPos = {
            white: {
                king: [
                    {x: 4, y: 7}
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
        }

        this.ressource = { // Chemins vers les fichiers ressources
            cursor: { // Chemin vers les fichiers d'icônes
                dark: "chhess/ressources/cursor/dark_matter.png",
                hot: "chhess/ressources/cursor/hot_matter.png"
            },

            piece: { // Chemin vers les fchiers d'images des pieces
                king: {
                    white: "chhess/ressources/pieces/roi_blanc.png",
                    black: "chhess/ressources/pieces/roi_noir.png"
                },
                queen: {
                    white: "chhess/ressources/pieces/reine_blanche.png",
                    black: "chhess/ressources/pieces/reine_noire.png"
                },
                bishop: {
                    white: "chhess/ressources/pieces/fou_blanc.png",
                    black: "chhess/ressources/pieces/fou_noir.png"
                },
                knight: {
                    white: "chhess/ressources/pieces/cheval_blanc.png",
                    black: "chhess/ressources/pieces/cheval_noir.png"
                },
                rook: {
                    white: "chhess/ressources/pieces/tour_blanche.png",
                    black: "chhess/ressources/pieces/tour_noire.png"
                },
                pawn: {
                    white: "chhess/ressources/pieces/pion_blanc.png",
                    black: "chhess/ressources/pieces/pion_noir.png"
                }
            }
        };
    }
}
