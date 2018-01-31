class Config {
    constructor() {
        this.square = {color1: 255, color2: 64, size: 80, cornerRadius: 5};
        this.nbC = 8;        // l'échiquier est de 8 par 8 cases
        this.margin = 6;         // Marge entre les blocs en pixels
        this.background = {type: 'image', value: 0};

        this.sizeW = this.nbC*this.square.size+this.margin*(this.nbC-1);
        this.sizeH = this.nbC*this.square.size+this.margin*(this.nbC-1);

        this.maxFrameRate = 60;

        this.killThisPieceToWin = 'king';

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
        };

        this.ressource = { // Chemins vers les fichiers ressources
            cursor: { // Chemin vers les fichiers d'icônes
                white: "chhess/ressources/cursor/dark_matter.png",
                black: "chhess/ressources/cursor/hot_matter.png"
            },

            background: [
                "chhess/ressources/background/gris.jpg",
                "chhess/ressources/background/blue_wave_abstract.jpg"
            ],

            piece: { // Chemin vers les fchiers d'images des pieces
                white: {
                    king: "chhess/ressources/pieces/roi_blanc.png",
                    queen: "chhess/ressources/pieces/reine_blanche.png",
                    bishop: "chhess/ressources/pieces/fou_blanc.png",
                    knight: "chhess/ressources/pieces/cheval_blanc.png",
                    rook: "chhess/ressources/pieces/tour_blanche.png",
                    pawn: "chhess/ressources/pieces/pion_blanc.png"
                },
                black: {
                    king: "chhess/ressources/pieces/roi_noir.png",
                    queen: "chhess/ressources/pieces/reine_noire.png",
                    bishop: "chhess/ressources/pieces/fou_noir.png",
                    knight: "chhess/ressources/pieces/cheval_noir.png",
                    rook: "chhess/ressources/pieces/tour_noire.png",
                    pawn: "chhess/ressources/pieces/pion_noir.png"
                }
            }
        };

        this.behavior = { // Chaque piece a sa fonction. Parametres: mx et my, qui correspondent a la case ou se situe la piece
            king: {
                function: "\
                    let cMax = window[this.gRef].config.nbC-1;\
                    let matrix = generateMatrix(cMax+1);\
                    for (let  ri=-1; ri<2; ri++) {\
                        for (let rj=-1; rj<2; rj++) {\
                            let canAttack = false;\
                            let x = mx+ri, y = my+rj;\
                            if (ri==0 && rj==0) continue;\
                            if (x<0 || x>cMax || y<0 || y>cMax) continue;\
                            if (window[this.gRef].chessboard[x][y]) {\
                                if (window[this.gRef].chessboard[x][y].side == this.side) {\
                                    continue;\
                                } else {\
                                    canAttack = true;\
                                }\
                            }\
                            matrix[x][y] = {canAttack: canAttack};\
                        }\
                    }\
                    return matrix;\
                    "
            },
            queen: {
                function: "\
                let cMax = window[this.gRef].config.nbC-1;\
                let matrix = generateMatrix(window[this.gRef].config.nbC);\
                let dir = {};\
                for (dir.x = -1; dir.x<2; dir.x++) {\
                    for (dir.y = -1; dir.y<2; dir.y++) {\
                        let x = mx, y = my;\
                        let avancer = true;\
                        do {\
                            x += dir.x; y += dir.y;\
                            if (x<0 || x>cMax || y<0 || y>cMax) break;\
                            if (window[this.gRef].chessboard[x][y]) {\
                                avancer  = false;\
                                if (window[this.gRef].chessboard[x][y].side != this.side) {\
                                    matrix[x][y] = {canAttack: true};\
                                }\
                            } else {\
                                matrix[x][y] = {canAttack: false};\
                            }\
                        } while (avancer);\
                    }\
                }\
                return matrix;\
                "
            },
            bishop: {
                function: "\
                let cMax = window[this.gRef].config.nbC-1;\
                let matrix = generateMatrix(window[this.gRef].config.nbC);\
                let events = [\
                    {x: -1, y: -1},\
                    {x: +1, y: -1},\
                    {x: -1, y: +1},\
                    {x: +1, y: +1}\
                ];\
                for (let dir of events) {\
                    let x = mx, y = my;\
                    let avancer = true;\
                    do {\
                        x += dir.x; y += dir.y;\
                        if (x<0 || x>cMax || y<0 || y>cMax) break;\
                        if (window[this.gRef].chessboard[x][y]) {\
                            avancer  = false;\
                            if (window[this.gRef].chessboard[x][y].side != this.side) {\
                                matrix[x][y] = {canAttack: true};\
                            }\
                        } else {\
                            matrix[x][y] = {canAttack: false};\
                        }\
                    } while (avancer);\
                }\
                return matrix;\
                "
            },
            knight: {
                function: "\
                let cMax = window[this.gRef].config.nbC-1;\
                let matrix = generateMatrix(window[this.gRef].config.nbC);\
                let dirX = [1,2,2,1];\
                for (let dx=-1; dx<2; dx+=2) {\
                    for (let i=0, ay=dx*2; i<dirX.length; i++, ay-=dx) {\
                        if (!ay) ay-=dx;\
                        let x = mx + dx*dirX[i];\
                        let y = my + ay;\
                        if (x<0 || x>cMax || y<0 || y>cMax) continue;\
                        if (window[this.gRef].chessboard[x][y]) {\
                            if (window[this.gRef].chessboard[x][y].side == this.side) {\
                                continue;\
                            } else {\
                                matrix[x][y] = {canAttack: true};\
                            }\
                        } else {\
                            matrix[x][y] = {canAttack: false};\
                        }\
                    }\
                }\
                return matrix;\
                "
            },
            rook: {
                function: "\
                let cMax = window[this.gRef].config.nbC-1;\
                let matrix = generateMatrix(window[this.gRef].config.nbC);\
                let events = [\
                    {x:  0, y: -1},\
                    {x:  0, y: +1},\
                    {x: -1, y:  0},\
                    {x: +1, y:  0}\
                ];\
                for (let dir of events) {\
                    let x = mx, y = my;\
                    let avancer = true;\
                    do {\
                        x += dir.x; y += dir.y;\
                        if (x<0 || x>cMax || y<0 || y>cMax) break;\
                        if (window[this.gRef].chessboard[x][y]) {\
                            avancer  = false;\
                            if (window[this.gRef].chessboard[x][y].side != this.side) {\
                                matrix[x][y] = {canAttack: true};\
                            }\
                        } else {\
                            matrix[x][y] = {canAttack: false};\
                        }\
                    } while (avancer);\
                }\
                return matrix;\
                "
            },
            pawn: {
                lineDb: {
                    white: 6,
                    black: 1
                },
                yDir: {
                    white: -1,
                    black: 1
                },
                function: "\
                    let cMax = window[this.gRef].config.nbC-1;\
                    let matrix = generateMatrix(cMax+1);\
                    let forward = window[this.gRef].config.behavior.pawn.yDir[this.side];\
                    let events = {\
                        diag1: {x: mx-1, y: my+forward, onlyAtt: true},\
                        diag2: {x: mx+1, y: my+forward, onlyAtt: true},\
                        forward: {x: mx, y: my+forward}\
                    };\
                    if (my == window[this.gRef].config.behavior.pawn.lineDb[this.side]) {\
                        events.fwPlus = {x: mx, y: my+2*forward, requireFw: true};\
                    }\
                    for (let caze in events) {\
                        let x = events[caze].x, y = events[caze].y;\
                        if (x<0 || x>cMax || y<0 || y>cMax) continue;\
                        let piece = window[this.gRef].chessboard[x][y];\
                        if (events[caze].requireFw == undefined) {\
                            if (piece) {\
                                if (piece.side != this.side && events[caze].onlyAtt) {\
                                matrix[x][y] = {canAttack: true};\
                            }\
                        } else {\
                                if (!events[caze].onlyAtt) matrix[x][y] = {canAttack: false};\
                            }\
                        } else if (matrix[x][y-forward]  && !matrix[x][y-forward].canAttack) {\
                            if (!piece) matrix[x][y] = {canAttack: false};\
                        }\
                    }\
                    return matrix;\
                    "
            }
        };
    }
}
