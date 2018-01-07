class Player {
  constructor(objRef) {
    window[objRef].config.square.size;

    if (playerType===1) {
      // définir les pieces de type 'white'

      this.cursor = "ressources/cursor/dark_matter.png";
    } else if (playerType===2) {
      // définir les piecs de type 'black'

      this.cursor = "ressources/cursor/hot_matter";
    } else {
      // message d'erreur dans le cas où un mauvais parametre est passé
    }
  }

  init() { // A utiliser avec p5
    // Initialiser les pieces
  }
}
