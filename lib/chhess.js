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
\******************************************************************************/

// Fonction pour inclure des scripts
function include(scriptFilePath) {
  document.write("<script type=\"text/javascript\" src=\""+scriptFilePath+"\"></script>");
}

// Dossier contenant les libraires par rapport au fichier .html
let lib_Directory_Path = "chhess/lib/";

// Chargement des librairies pour le jeu d'échec
include(lib_Directory_Path+"config.js");
include(lib_Directory_Path+"game.js");
