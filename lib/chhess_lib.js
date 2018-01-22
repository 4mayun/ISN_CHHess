/******************************************************************************\
*                                                                              *
*                                JEU D'ECHEC                                   *
*                      Par Amayun Houery et Quentin Huc                        *
*                                                                              *
*           Dans le cadre du mini-projet d'ISN au lycée Louis Rascol           *
*         avec nos chers professeurs M. Duthil Sicardon et Mme Sicard          *
*                                                                              *
*                                2017 - 2018                                   *
*                                                                              *
*              Script pour inclure tous les fichiers nécessaires               *
*               à l'utilisation du jeu d'échec (chhess_main.js)                *
*                                                                              *
\******************************************************************************/

// Fonction pour inclure des scripts
function include(scriptFilePath) {
    document.write("<script type=\"text/javascript\" src=\""+scriptFilePath+"\"></script>");
}


// -------------------- Chargement de la bibliotheque --------------------

{ // Chargement des librairies pour le jeu d'échec
    // Dossier contenant les libraires par rapport au fichier .html
    let lib_Dir_Path = "chhess/lib/";

    include(lib_Dir_Path+"game.js");
    include(lib_Dir_Path+"config.js");
    include(lib_Dir_Path+"player.js");
    include(lib_Dir_Path+"piece.js");
}

// Fonction pour charger un fichier .json
// Retourne l'objet à partir du json.
// VOIR CETTE FONCTION PLUS TARD
/* function loadJson(jsonFilePath) {
    let reqTime = new Date().getTime();
    let xmlReq = new XMLHttpRequest();
    xmlReq.overrideMimeType("application/json");
    xmlReq.onerror = function() {
        console.error("[ERROR]: Impossible de charger "+jsonFilePath);
        delete this;
        return;
    }
    xmlReq.onreadystatechange = function() {
        if (this.readyState===XMLHttpRequest.DONE && this.status===200) {
            console.info("Le fichier "+jsonFilePath+" a été chargé en "+(new Date().getTime()-reqTime)+" millisecondes.");
        }
    }
    xmlReq.open('GET', jsonFilePath, true);
    xmlReq.send(null);
} */

// Fonction pour generer une matrice
// Retourne la matrice
function generateMatrix(nbr, fill=undefined) {
    let errorLevel = false;

    if (typeof nbr != "number") {
        console.log("Generate matrix error: "+nbr+" is not a number");
        errorLevel = true;
    }

    if (nbr <= 0) {
        console.log("Generate matrix error: "+nbr+" is not a correct number, it must be at least 1 or more.");
        errorLevel = true;
    }

    if (nbr != parseInt(nbr, 10)) {
        console.log("Generate matrix error: "+nbr+" must be an integer.");
        errorLevel = true;
    }

    if (errorLevel) return undefined;

    let matrix = [];

    for (let i=0; i<nbr; i++) {
        matrix.push(new Array(nbr).fill(fill));
    }

    return matrix;
}
