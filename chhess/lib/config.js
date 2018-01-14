class Config {
  constructor() {
    this.square = {color1: 255, color2: 48, size: 80, cornerRadius: 5};
    this.num = 8;    // l'échiquier est de 8 par 8 cases
    this.margin = 6;     // Marge entre les blocs en pixels
    this.backgroundColor = 128; //La couleur du fond est un gris chelou

    this.sizeW = this.num*this.square.size+this.margin*(this.num-1);
    this.sizeH = this.num*this.square.size+this.margin*(this.num-1);

    this.maxFrameRate = 60;

    this.cursor = { // Chemin vers les fichiers d'icônes
      dark: "ressources/cursor/dark_matter.png",
      hot: "ressources/cursor/hot_matter.png"
    };
  }
}
