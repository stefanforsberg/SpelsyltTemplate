import Phaser from "phaser";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({
      key: "GameScene",
    });
  }

  create() {
    this.instructionText = this.add.text(50, 50, 'Flytta bilden med höger och vänster piltangent.\nKlicka på bilden för att lägga till en tween\nFlytta bilden utanför vänstra kanten för att fortsätta.').setFontFamily('Arial').setFontSize(20).setColor('#232323');

    this.image = this.add.image(100, 200, "imgTja").setScale(0.4).setOrigin(0, 0);

    this.cursors = this.input.keyboard.createCursorKeys();

    this.image.setInteractive();
    this.image.on("pointerup", () => {

      this.tweens.add({
        targets: this.image,
        scale: 0.6,
        loop: -1,
        yoyo: true
      });

    })
  }

  update() {
    if (this.cursors.left.isDown) {
      this.image.setX(this.image.x - 2);
    }

    if (this.cursors.right.isDown) {
      this.image.setX(this.image.x + 2);
    }

    if (this.image.x + this.image.displayWidth < 0) {
      this.scene.start("GameSceneWithPhysics");
    }
  }
}