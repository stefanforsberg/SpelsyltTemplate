import Phaser from "phaser";

export default class GameSceneWithPhysics extends Phaser.Scene {
  constructor() {
    super({
      key: "GameSceneWithPhysics",
    });
  }

  create() {
    this.instructionText = this.add.text(50, 50, 'Fysikmotor! Flytta fyrkanten med piltangenterna\nDu kan inte gå utanför skärmen eller genom\ndet röda hindret. Gå till blå fyrkant för nästa steg').setFontFamily('Arial').setFontSize(20).setColor('#232323');

    // Register than you are interested in the cursor keys
    this.cursors = this.input.keyboard.createCursorKeys();

    this.square = this.physics.add.image(100, 150, "imgGubbe").setOrigin(0);
    this.square.setCollideWorldBounds();

    this.hinder = this.physics.add.image(400, 150, "imgHinder").setOrigin(0).setImmovable();
    this.physics.add.collider(this.square, this.hinder);

    this.goal = this.physics.add.image(500, 400, "imgGubbe").setOrigin(0).setImmovable();
    this.goal.setTint(0x2377bb);
    this.physics.add.collider(this.square, this.goal, () => {
      // Callback, objekten har kolliderat om vi kommer hit 🥳
      this.scene.start("GameSceneWithPhysics2");

    });
  }

  update() {
    this.square.body.setVelocity(0);

    if (this.cursors.left.isDown) {
      this.square.body.setVelocityX(-150);
    }
    if (this.cursors.right.isDown) {
      this.square.body.setVelocityX(150);
    }
    if (this.cursors.up.isDown) {
      this.square.body.setVelocityY(-150);
    }
    if (this.cursors.down.isDown) {
      this.square.body.setVelocityY(150);
    }
  }
}