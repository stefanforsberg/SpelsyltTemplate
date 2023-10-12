import Phaser from "phaser";
import LoadingScene from "./loadingScene";
import GameScene from "./gameScene";
import GameSceneWithPhysics from "./gameSceneWithPhysics";
import GameSceneWithPhysics2 from "./gameSceneWithPhysics2";

const config = {
    type: Phaser.AUTO,
    transparent: true,
    scale: {
        parent: "game",
        width: 600,
        height: 600,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        mode: Phaser.Scale.FIT,
    },
    parent: "game",
    scene: [LoadingScene, GameScene, GameSceneWithPhysics, GameSceneWithPhysics2],
    pixelArt: false,
    physics: {
        default: "arcade",
        arcade: {
            debug: true,
        },
    },
};

const game = new Phaser.Game(config);

export default game;