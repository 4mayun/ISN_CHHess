class Chess {
  constructor() {
    this.config = {
      square: {color1: 'white', color2: 'black', size: 100, num: 8},
      margin: 5,     // La marge entre les blocs est de 5 pixels
      backgroundColor: [128, 128, 128], //La couleur du fond est un gris chelou
      size: { //Taille de la "fenetre" du jeu
        w: this.square.num*this.square.size+this.margin*(this.square.num+1)
        h: this.square.num*this.square.size+this.margin*(this.square.num+1)
      }
    };

    // Ajouter les deux joueurs...
  }

  draw() { //Dessin du jeu, a utiliser dans p5

  }
}
