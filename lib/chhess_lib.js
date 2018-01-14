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

// ---------- Utilitaires ----------

// Fonction pour inclure des scripts
function include(scriptFilePath) {
  document.write("<script type=\"text/javascript\" src=\""+scriptFilePath+"\"></script>");
}

// Fonction pour charger un fichier .json (wip)



// -------------------- Chargement de la bibliotheque --------------------

// Dossier contenant les libraires par rapport au fichier .html
let lib_Dir_Path = "chhess/lib/";

// Chargement des librairies pour le jeu d'échec
include(lib_Dir_Path+"game.js");
include(lib_Dir_Path+"player.js");
include(lib_Dir_Path+"piece.js");
  include(lib_Dir_Path+"pieces/king.js");
  include(lib_Dir_Path+"pieces/queen.js");
  include(lib_Dir_Path+"pieces/bishop.js");
  include(lib_Dir_Path+"pieces/knight.js");
  include(lib_Dir_Path+"pieces/rook.js");
  include(lib_Dir_Path+"pieces/pawn.js");
include(lib_Dir_Path+"config.js");
