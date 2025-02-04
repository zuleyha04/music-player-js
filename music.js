class Music {
  constructor(title, singer, img, file) {
    this.title = title;
    this.singer = singer;
    this.img = img;
    this.file = file;
  }

  getName() {
    return this.title + " - " + this.singer;
  }
}

const musicList = [
    new Music("Piano", "Beethoven", "pianoo.jpg", "piano.mp3"),
    new Music("Gitar", "Buray", "gitar.jpg", "gitar.mp3"),
    new Music("Keman", "Aslı", "keman.jpg", "keman.mp3"),
    new Music("Elektro", "NBand", "band.jpg", "elektro.mp3")
];
