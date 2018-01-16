class Player {
    constructor(gameRef, playerSide) {
        this.gRef = gameRef; // Nom de l'objet game principal pour pouvoir acceder a l'objet config sans aucun souci, philosophie, hakuna matata

        /* this.pieces = [
            new King(),
            new Queen(),
            new Bishop('left'),
            new Bishop('right'),
            new Knight('left'),
            new Knight('right'),
            new Rook('left'),
            new Rook('right'),
            new Pawn('1'),
            new Pawn('2'),
            new Pawn('3'),
            new Pawn('4'),
            new Pawn('5'),
            new Pawn('6'),
            new Pawn('7'),
            new Pawn('8'),
        ]; */

        // Definit le type des pieces en fonction du type du joueur + definit le curseur
        if (playerSide==='white' || playerSide==='black') {
            for (let piece in this.pieces) this.pieces[piece].setSide(playerSide);
            if (playerSide=='white') this.cursor = window[this.gRef].config.cursor.dark;
            if (playerSide=='black') this.cursor = window[this.gRef].config.cursor.hot;
        } else {
            // message d'erreur dans le cas où un mauvais parametre est passé
        }

    }

    init() { // A utiliser avec p5
        // Initialiser les pieces
    }

    draw() {
        // Dessin des pieces
    }

}
