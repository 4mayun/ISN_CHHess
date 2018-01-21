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

}

function afficheEchiquier() {
    console.log("Voici l'échiquier:");
    for (let i=0; i<8; i++) {
        let ligne = "| "+chess.chessboard[i][0].type+" | "+chess.chessboard[i][1].type+" | "+chess.chessboard[i][2].type+" | "+chess.chessboard[i][3].type+" | "
            +chess.chessboard[i][4].type+" | "+chess.chessboard[i][5].type+" | "+chess.chessboard[i][6].type+" | "+chess.chessboard[i][7].type+" | ";
        console.log(ligne);
    }
}
