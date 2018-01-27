// ATTENTION:
// La chaine de caractere passee en parametre du constructeur DOIT ETRE le
// nom de l'instance de cette classe
// Exemple:
//    var game = new Game('gaem')    //CECI N'EST PAS BON
//    var game = new Game('game')    // ceci est bon

class Game {
    constructor(name) {
        this.name = name;

        this.config = null;
        this.chessboard = [];

        this.playing = 'white';
        this.caseOn = null;
        this.caseSelect = null;
        this.interacts = null;
    }


    init(windowOffset = 0) { // A utiliser avec p5, dans setup
        { // ----- Verification de l'objet -----
            let errorLevel = 0; this.superSecretKey = Math.floor(1e8*Math.random());
            if (window[this.name]===undefined) errorLevel = 1;
            else if (window[this.name].superSecretKey!==this.superSecretKey) errorLevel = 1;
            if (errorLevel) {
                console.error(
                    "[ERROR]: GAME CLASS COULD NOT BE INSTANTIATED\n" +
                    "       : *p5 errors incoming*\n" +
                    "       : Verify that you set the right object name in the game constructor parameter as a string.\n" +
                    "       : (See the beginning of game.js file for more details)"
                );
                delete window[this.name];
            } else console.info("[GAME]: Game has been correctly instantiated");
            delete this.superSecretKey;
        } // -----* Fin de la vérification de l'objet *-----

        // Declaration de tous les attributs
        this.config = new Config();
        this.chessboard = generateMatrix(this.config.nbC, null);
        this.players = {
            white: new Player(this.name, 'white'),
            black: new Player(this.name, 'black')
        };

        // Initialise les joueurs
        for (let player in this.players) this.players[player].init();

        // Initialise les pieces
        for (let array of this.chessboard) {
            for (let piece of array) {
                if (piece) piece.init();
            }
        }

        cursor(this.players[this.playing].cursor);
        createCanvas(windowWidth-windowOffset, windowHeight-windowOffset);
        frameRate(this.config.maxFrameRate);
    }


    setHoverCasing(mX, mY) { // A utiliser avec p5, dans mouseMoved
        mX -= width/2-this.config.sizeW/2;         // mX et mY se situent par rapport au coin supérieur gauche
        mY -= height/2-this.config.sizeH/2;     //    de l'echiquier et non plus par rapport à l'origine du canvas

        this.caseOn = null; // Si la souris n'est pas au dessus de l'échiquier ou est entre deux cases

        if (mX>=0 && mX<this.config.sizeW &&
            mY>=0 && mY<this.config.sizeH) // Si la souris se situe au dessus de l'échiquier
        {
            let columnA = Math.floor(mX/(this.config.square.size+this.config.margin));
            let columnD = 7 - Math.floor((this.config.sizeW-mX)/(this.config.square.size+this.config.margin));
            let column = (columnA===columnD) ? columnA : -1; // Si la souris ne se situe pas entre deux cases

            let lineA = Math.floor(mY/(this.config.square.size+this.config.margin));
            let lineD = 7 - Math.floor((this.config.sizeH-mY)/(this.config.square.size+this.config.margin));
            let line = (lineA===lineD) ? lineA : -1;

            // Si la souris ne se situe pas entre deux cases
            if (column!==-1 && line!==-1) {
                if (this.chessboard[column][line] && this.chessboard[column][line].side===this.playing ||
                    this.interacts && this.interacts[column][line])
                { // Si la case survolee contient une piece et si elle appartient au joueur
                    this.caseOn = {x: column, y: line};
                }
            }
        }
    }


    onClick() { // A utiliser avec p5, dans mousePressed
        if (this.caseOn) { // Si un case est survolee
            let selectCase = false;

            if (this.caseSelect) { // Si une case est selectionnee
                if (this.caseOn.x == this.caseSelect.x && this.caseOn.y == this.caseSelect.y) { // Si la case cliquee est la meme que la case selectionnee
                    this.caseSelect = null; // Deselectionne la case
                    this.interacts = null;
                } else { // Si la case cliquee n'est pas la meme que la case selectionnee
                    let x = this.caseOn.x, y = this.caseOn.y;
                    if (this.chessboard[x][y] && this.chessboard[x][y].side === this.playing) selectCase = true;

                    if (this.interacts[x][y]) {
                        this.players[this.playing].move(this.caseSelect.x, this.caseSelect.y, x, y);
                    }
                }
            } else {
                selectCase = true;
            }

            if (selectCase) {
                this.caseSelect = this.caseOn;
                let x = this.caseSelect.x, y = this.caseSelect.y;
                this.interacts = null;
                this.interacts = this.chessboard[x][y].interact(x, y);
            }
        } else {
            this.caseSelect = null;
            this.interacts = null;
        }
    }


    draw() { //Dessin du jeu, a utiliser avec p5, dans le draw
        background(this.config.backgroundColor); // Efface le canevas

        for (let i = 0; i<this.config.nbC; i++) { // Affiche les cases
            for (let j = 0; j<this.config.nbC; j++) {
                noStroke();
                ((i+j)%2) ? fill(this.config.square.color2) : fill(this.config.square.color1);
                rect( // Dessin des cases
                    width/2-this.config.sizeW/2 + i*(this.config.square.size + this.config.margin),
                    height/2-this.config.sizeH/2 + j*(this.config.square.size + this.config.margin),
                    this.config.square.size,
                    this.config.square.size,
                    this.config.square.cornerRadius
                );
            }
        }

        // Dessin des pieces
        for (let array in this.chessboard) {
            for (let piece in this.chessboard[array]) {
                if (this.chessboard[array][piece]) this.chessboard[array][piece].draw(array, piece);
            }
        }

        if (this.interacts) {
            for (let array in this.interacts) {
                for (let piece in this.interacts[array]) {
                    if (this.interacts[array][piece]) {
                        if (this.interacts[array][piece].canAttack) {
                            fill(255, 0, 0, 96); // Set la couleur sur du rouge, à moitié transparent
                        } else {
                            fill(0, 0, 255, 96); // Set la couleur sur du bleu, à moitié transparent
                        }
                        noStroke();
                        rect(
                            array*(this.config.square.size+this.config.margin) + width/2-this.config.sizeW/2,
                            piece*(this.config.square.size+this.config.margin) + height/2-this.config.sizeH/2,
                            this.config.square.size,
                            this.config.square.size,
                            this.config.square.cornerRadius
                        );
                    }
                }
            }
        }

        if (this.caseOn) { // Si une case est survolee
            fill(128, 128, 128, 128); noStroke();
            rect( // Dessine le rectangle transparent
                this.caseOn.x*(this.config.square.size+this.config.margin) + width/2-this.config.sizeW/2,
                this.caseOn.y*(this.config.square.size+this.config.margin) + height/2-this.config.sizeH/2,
                this.config.square.size,
                this.config.square.size,
                this.config.square.cornerRadius
            );
        }

        if (this.caseSelect) { // Si une case est selectionnee
            stroke('green'); strokeWeight(this.config.margin); noFill();
            rect( // Dessine le rectangle de selection
                this.caseSelect.x*(this.config.square.size+this.config.margin) + width/2-this.config.sizeW/2,
                this.caseSelect.y*(this.config.square.size+this.config.margin) + height/2-this.config.sizeH/2,
                this.config.square.size,
                this.config.square.size,
                this.config.square.cornerRadius
            );
        }

        fill(255); noStroke();
        textSize(12); text(width+"x"+height+":  "+int(frameRate())+" fps", 1, height-2);
    }
}
