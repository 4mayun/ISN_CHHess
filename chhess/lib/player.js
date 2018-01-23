class Player {
    constructor(gameRef, playerSide) {
        this.gRef = gameRef; // Nom de l'objet game principal pour pouvoir acceder a l'objet config sans aucun souci, philosophie, hakuna matata
        this.cursor = undefined; // Sera defini dans init

        // Verifie que le player side est bon et le définit
        if (playerSide==='white' || playerSide==='black') {
            this.side = playerSide;
        } else {
            console.error("[ERROR]: "+playerSide+" is not a correct player side.");
        }

    }

    init() { // Sera utilisé avec p5
        // Set les curseurs
        if (this.side=='white') this.cursor = window[this.gRef].config.ressource.cursor.dark;
        if (this.side=='black') this.cursor = window[this.gRef].config.ressource.cursor.hot;

        // Place les pieces du joueur dans l'echiquier
        for (let piece in window[this.gRef].config.initialPos[this.side]) {
            for (let coord of window[this.gRef].config.initialPos[this.side][piece]) {
                window[this.gRef].chessboard[coord.x][coord.y] = new Piece(this.gRef, piece, this.side);
            }
        }
    }

    move(sx, sy, dx, dy) {
        if (!window[this.gRef].chessboard[sx][sy]) {
            console.log("Piece move error: there is no piece on ("+sx+";"+sy+") case.");
            return;
        }

        if (window[this.gRef].chessboard[sx][sy].side != this.side) {
            console.log("Piece move error: a "+this.side+" player can't move a "+window[this.gRef].chessboard[sx][sy].side+" piece !");
            return;
        }

        if (window[this.gRef].chessboard[dx][dy] && window[this.gRef].chessboard[dx][dy].side == this.side) {
            console.log("Piece move error: a "+this.side+" player can't move a piece on another "+window[this.gRef].chessboard[sx][sy].side+" piece !");
            return;
        }

        let newPlayer;
        switch (window[this.gRef].playing) {
            case 'white': newPlayer = 'black'; break;
            case 'black': newPlayer = 'white'; break;
            default:
                console.log("Piece move error: Please don't code à trois heure du mat fdp.");
                return;
        }

        // window[this.gRef].playing = newPlayer;

        window[this.gRef].chessboard[dx][dy] = window[this.gRef].chessboard[sx][sy];
        window[this.gRef].chessboard[sx][sy] = null;

        window[this.gRef].caseSelect = null;
        window[this.gRef].interacts  = null;
    }
}
