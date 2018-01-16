class Config {
    constructor() {
        this.square = {color1: 255, color2: 48, size: 80, cornerRadius: 5};
        this.num = 8;        // l'échiquier est de 8 par 8 cases
        this.margin = 6;         // Marge entre les blocs en pixels
        this.backgroundColor = 128; //La couleur du fond est un gris chelou

        this.sizeW = this.num*this.square.size+this.margin*(this.num-1);
        this.sizeH = this.num*this.square.size+this.margin*(this.num-1);

        this.maxFrameRate = 60;

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
