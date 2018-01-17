class Player {
    constructor(gameRef, playerSide) {
        this.gRef = gameRef; // Nom de l'objet game principal pour pouvoir acceder a l'objet config sans aucun souci, philosophie, hakuna matata
        this.pieces = [];
        this.cursor = undefined;

        // Verifie que le player side est bon et definit le curseur
        if (playerSide==='white' || playerSide==='black') {
            this.side = playerSide;
            if (playerSide=='white') this.cursor = window[this.gRef].config.ressource.cursor.dark;
            if (playerSide=='black') this.cursor = window[this.gRef].config.ressource.cursor.hot;
        } else {
            console.error("[ERROR]: "+playerSide+" is not a correct player side.");
        }

    }

    init() { // A utiliser avec p5
        this.pieces = [ // Declaration des pieces
            new King(this.gRef),
            /* new Queen(),
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
            new Pawn('8'), */
        ];

        for (let piece in this.pieces) this.pieces[piece].init(this.side);
    }

    draw() {
        for (let piece in this.pieces) this.pieces[piece].draw();
    }

}

Player.PLAYER1 = 'white';
Player.PLAYER2 = 'black';
