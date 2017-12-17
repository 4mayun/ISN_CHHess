class Chess {
  constructor() {
    this.config = new (function(){
      this.square = {color1: 'white', color2: 'black', size: 90, cornerRadius: 10};
      this.num = 8;    // l'échiquier est de 8 par 8 cases
      this.margin = 10;     // La marge entre les blocs est de 5 pixels
      this.backgroundColor = [100, 100, 100]; //La couleur du fond est un gris chelou
      this.sizeW = this.num*this.square.size+this.margin*(this.num+1);
      this.sizeH = this.num*this.square.size+this.margin*(this.num+1);

      this.cursor = { // Définir les différents curseurs ici
        dark_matter: "ressources/cursor/dark_matter.png"
      };
    })();

    // Ajouter les deux joueurs...
  }

  init() {
    cursor(this.config.cursor.dark_matter);
  }

  draw() { //Dessin du jeu, a utiliser dans p5
    textSize(12); text(int(frameRate())+" fps", 1, height-2);

    for (let i = 0; i<this.config.num; i++) {
      for (let j = 0; j<this.config.num; j++) {
        noStroke();
        (!(i%2)&&!(j%2)||i%2&&j%2) ? fill(this.config.square.color1) : fill(this.config.square.color2);
        rect(
          width/2-this.config.sizeW/2 + i*this.config.square.size+(i+1)*this.config.margin,
          height/2-this.config.sizeH/2 + j*this.config.square.size+(j+1)*this.config.margin,
          this.config.square.size,
          this.config.square.size,
          this.config.square.cornerRadius
        ); // Dessin des cases
      }
    }

    if (this.caseOn) { // Si une case est survolée
      fill(200, 200, 200, 100);
      rect(
        width/2-this.config.sizeW/2,
        height/2-this.config.sizeH/2,
        this.config.sizeW,
        this.config.sizeH, 40
      );
    }
  }

  setOverCasing(mX, mY) {
    if (mX>width/2-this.config.sizeW/2 && mX<width/2+this.config.sizeW/2
    && mY>height/2-this.config.sizeH/2 && mY<height/2+this.config.sizeH/2) {
      this.caseOn = true
    } else {
      this.caseOn = null;
    }
  }
}
