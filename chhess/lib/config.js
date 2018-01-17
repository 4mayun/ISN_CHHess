class Config {
    constructor() {
        this.square = {color1: 255, color2: 48, size: 80, cornerRadius: 5};
        this.num = 8;        // l'échiquier est de 8 par 8 cases
        this.margin = 6;         // Marge entre les blocs en pixels
        this.backgroundColor = 128; //La couleur du fond est un gris chelou

        this.sizeW = this.num*this.square.size+this.margin*(this.num-1);
        this.sizeH = this.num*this.square.size+this.margin*(this.num-1);

        this.maxFrameRate = 60;

        this.initialPos = {
            king: {
                white: {x: 4, y: 7},
                black: {x: 4, y: 0}
            },
            queen: {
                white: {x: 3, y: 7},
                black: {x: 3, y: 0}
            },
            bishop: {
                white: {
                    left: {x: 2, y: 7},
                    right: {x: 5, y: 7}
                },
                black: {
                    left: {x: 2, y: 0},
                    right: {x: 5, y: 0}
                }
            },
            knight: {
                white: {
                    left: {x: 1, y: 7},
                    right: {x: 6, y: 7}
                },
                black: {
                    left: {x: 1, y: 0},
                    right: {x: 6, y: 0}
                }
            },
            rook: {
                white: {
                    left: {x: 0, y: 7},
                    right: {x: 7, y: 7}
                },
                black: {
                    left: {x: 0, y: 0},
                    right: {x: 7, y: 0}
                }
            },
            pawn: [
                {white: {x: 0, y: 6}, black: {x: 0, y: 1}},
                {white: {x: 1, y: 6}, black: {x: 1, y: 1}},
                {white: {x: 2, y: 6}, black: {x: 2, y: 1}},
                {white: {x: 3, y: 6}, black: {x: 3, y: 1}},
                {white: {x: 4, y: 6}, black: {x: 4, y: 1}},
                {white: {x: 5, y: 6}, black: {x: 5, y: 1}},
                {white: {x: 6, y: 6}, black: {x: 6, y: 1}},
                {white: {x: 7, y: 6}, black: {x: 7, y: 1}}
            ]
        }

        this.ressource = { // Chemins vers les fichiers ressources
            piece: {
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
            },
            cursor: { // Chemin vers les fichiers d'icônes
                dark: "chhess/ressources/cursor/dark_matter.png",
                hot: "chhess/ressources/cursor/hot_matter.png"
            }
        };
    }
}
