class Chess {
  constructor() {
    this.config = new Config();


    // Ajouter les deux joueurs...
  }


  init() {
    cursor(this.config.cursor.dark_matter);
    frameRate(this.maxFrameRate);
  }


  setHoverCasing(mX, mY) { // A utiliser avec p5, dans mouseMoved
    mX -= width/2-this.config.sizeW/2;     // mX et mY se situent par rapport au coin supérieur gauche
    mY -= height/2-this.config.sizeH/2;   //  de l'échiquier et non plus par rapport à l'origine du canvas

    if (mX>=0 && mX<this.config.sizeW
      && mY>=0 && mY<this.config.sizeH) // Si la souris se situe au dessus de l'échiquier
    {
      let columnA = Math.floor(mX/(this.config.square.size+this.config.margin));
      let columnD = 7 - Math.floor((this.config.sizeW-mX)/(this.config.square.size+this.config.margin));
      let column = (columnA===columnD) ? columnA : -1; // Si la souris ne se situe pas entre deux cases

      let lineA = Math.floor(mY/(this.config.square.size+this.config.margin));
      let lineD = 7 - Math.floor((this.config.sizeH-mY)/(this.config.square.size+this.config.margin));
      let line = (lineA===lineD) ? lineA : -1;

      // Si la souris ne se situe pas entre deux cases
      if (column!==-1 && line!==-1) {
        this.caseOn = {X: column, Y: line};
        return;
      }
    }

    this.caseOn = null; // Si la souris n'est pas au dessus de l'échiquier ou est entre deux cases
  }


  draw() { //Dessin du jeu, a utiliser avec p5, dans le draw
    background(this.config.backgroundColor);

    for (let i = 0; i<this.config.num; i++) {
      for (let j = 0; j<this.config.num; j++) {
        noStroke();
        // (!(i%2)&&!(j%2)||i%2&&j%2) ? fill(this.config.square.color1) : fill(this.config.square.color2);
        (!((i+j)%2)) ? fill(this.config.square.color1) : fill(this.config.square.color2);
        rect(
          width/2-this.config.sizeW/2 + i*this.config.square.size + i*this.config.margin,
          height/2-this.config.sizeH/2 + j*this.config.square.size + j*this.config.margin,
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
        this.config.sizeH,
        this.config.square.cornerRadius
      );
    }
  }
}
