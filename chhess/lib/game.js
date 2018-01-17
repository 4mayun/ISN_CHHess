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
        this.players = [];
        this.playing = 0;
        this.caseOn = null;
    }


    init() { // A utiliser avec p5, dans setup
        { // ----- Verification de l'objet -----
            let errorLevel = 0;
            this.superSecretKey = Math.floor(1e8*Math.random());

            if (window[this.name]===undefined) { // L'objet n'est pas bien initialise
                errorLevel = 1;
            } else if (window[this.name].superSecretKey!==this.superSecretKey) {
                errorLevel = 1;
            }

            if (errorLevel) {
                console.error(
                    "[ERROR]: GAME CLASS COULD NOT BE INSTANTIATED\n" +
                    "       : *p5 errors incoming*\n" +
                    "       : Verify that you set the right object name in the game constructor parameter as a string.\n" +
                    "       : (See the beginning of game.js file for more details)"
                );
                delete window[this.name];
            } else {
                console.info("[GAME]: Game has been correctly instantiated");
            }

            delete this.superSecretKey;
        } // -----* Fin de la vérification de l'objet *-----

        // Declaration de tous les attributs
        this.config = new Config();
        this.players = [
            new Player(this.name, Player.PLAYER1),
            new Player(this.name, Player.PLAYER2)
        ];

        for (let player in this.players) this.players[player].init();

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
                for (let piece of this.players[this.playing].pieces) {
                    if (piece.pos.x===column && piece.pos.y===line) {
                        this.caseOn = {x: column, y: line};
                        break;
                    }
                }
            }
        }
    }


    draw() { //Dessin du jeu, a utiliser avec p5, dans le draw
        background(this.config.backgroundColor); // Efface le canevas

        for (let i = 0; i<this.config.num; i++) { // Affiche les cases
            for (let j = 0; j<this.config.num; j++) {
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

        // Dessin des pieces des joueurs
        for (let player in this.players) this.players[player].draw();


        if (this.caseOn) { // Si une case est survolée
            fill(128, 128, 128, 128);
            rect( // Dessine le rectangle transparent
                width/2-this.config.sizeW/2 + this.caseOn.x*(this.config.square.size+this.config.margin),
                height/2-this.config.sizeH/2 + this.caseOn.y*(this.config.square.size+this.config.margin),
                this.config.square.size,
                this.config.square.size,
                this.config.square.cornerRadius
            );
        }

        fill(255);
        textSize(12); text(width+"x"+height+":  "+int(frameRate())+" fps", 1, height-2);
    }
}
