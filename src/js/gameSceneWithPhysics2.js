import Phaser from "phaser";

export default class GameSceneWithPhysics2 extends Phaser.Scene {
  constructor() {
    super({
      key: "GameSceneWithPhysics2",
    });
  }

  create() {
    this.instructionText = this.add.text(50, 50, 'Mer fysik. Lite graviation och studs. Gå utanför din plattform.').setFontFamily('Arial').setFontSize(20).setColor('#232323');

    this.cursors = this.input.keyboard.createCursorKeys();

    this.square = this.physics.add.image(225, 100, "imgGubbe").setOrigin(0);
    this.square.setCollideWorldBounds();
    this.square.body.setBounceY(0.4);

    this.platform = this.physics.add.image(150, 200, "imgPlatform").setOrigin(0).setImmovable();
    this.platform.body.setAllowGravity(false);

    this.physics.add.collider(this.square, this.platform);

    this.physics.world.gravity.y = 150;
  }

  update() {
    this.square.body.setVelocityX(0);

    if (this.cursors.left.isDown) {
      this.square.body.setVelocityX(-150);
    }
    if (this.cursors.right.isDown) {
      this.square.body.setVelocityX(150);
    }
  }
}