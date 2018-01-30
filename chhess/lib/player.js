class Player {
    constructor(gameRef, playerSide) {
        this.gRef = gameRef; // Nom de l'objet game principal pour pouvoir acceder a l'objet config sans aucun souci, philosophie, hakuna matata
        this.cursor = undefined; // Sera defini dans init
        this.kills = [];

        // Verifie que le player side est bon et le définit
        if (playerSide==='white' || playerSide==='black') {
            this.side = playerSide;
        } else {
            console.error("[ERROR]: "+playerSide+" is not a correct player side.");
        }

    }

    init() { // Sera utilisé avec p5
        // Set le curseur
        this.cursor = window[this.gRef].config.ressource.cursor[this.side];

        // Place les pieces du joueur dans l'echiquier
        for (let piece in window[this.gRef].config.initialPos[this.side]) {
            for (let coord of window[this.gRef].config.initialPos[this.side][piece]) {
                window[this.gRef].chessboard[coord.x][coord.y] = new Piece(this.gRef, piece, this.side);
            }
        }
    }

    move(sx, sy, dx, dy) {
        let cMax = window[this.gRef].config.nbC-1;
        if (dx<0 || dx>cMax || dy<0 || dy>cMax) {
            console.log("Piece move error: ("+dx+";"+dy+") is outside the chessboard. Can't move piece on.");
            return;
        }

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

        if (window[this.gRef].interacts[dx][dy].canAttack) {
            window[this.gRef].players[window[this.gRef].playing].kills.push(window[this.gRef].chessboard[dx][dy]);

        }

        window[this.gRef].playing = newPlayer; // Change de joueur

        window[this.gRef].chessboard[dx][dy] = window[this.gRef].chessboard[sx][sy]; // Place la piece à sa nouvelle position (cree une "copie")
        window[this.gRef].chessboard[sx][sy] = null; // Vide la case ou etait la piece avant (supprimer l'"ancienne copie")

        window[this.gRef].caseOn = null;
        window[this.gRef].caseSelect = null;
        window[this.gRef].interacts  = null;

        cursor(window[this.gRef].players[window[this.gRef].playing].cursor); // Definit le nouveau curseur a l'effigie du joueur en train de jouer
    }
}
