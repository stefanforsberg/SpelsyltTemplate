import Phaser from "phaser";
import imgTja from "../img/tja.png";
import imgGubbe from "../img/gubbe.png";
import imgHinder from "../img/hinder.png";
import imgPlatform from "../img/platform.png";

export default class StartScene extends Phaser.Scene {
  constructor() {
    super({
      key: "StartScene",
    });
  }

  preload() {
    this.loadingText = this.add.text(50, 100, 'Laddar bilder!').setFontFamily('Arial').setFontSize(32).setColor('#232323');
    this.load.image("imgTja", imgTja);
    this.load.image("imgGubbe", imgGubbe);
    this.load.image("imgHinder", imgHinder);
    this.load.image("imgPlatform", imgPlatform);
  }

  create() {
    this.loadingText.setText("Laddning klar klicka/tryck på\nden här texten för att fortsätta");
    this.loadingText.setInteractive();
    this.loadingText.on("pointerup", () => {
      this.scene.start("GameScene");
    });
  }
}