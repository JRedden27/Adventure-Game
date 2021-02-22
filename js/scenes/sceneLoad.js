class SceneLoad extends Phaser.Scene {
    constructor() {
        super('SceneLoad');
    }
    preload() {

        this.bar = new Bar({scene: this, x: game.config.width / 2, y: game.config.height / 2});
        this.progText = this.add.text(game.config.width / 2, game.config.height / 2, "0%", {color: '#ffffff', fontSize: game.config.width / 20})
        this.progText.setOrigin(0.5, 0.5);
        this.load.on('progress', this.onProgress, this);

        this.load.image("button1", "images/ui/buttons/2/1.png");
        this.load.image("button2", "images/ui/buttons/2/5.png");

        this.load.image("toggleBack", "images/ui/toggles/3.png");
        this.load.image("sfxOff", "images/ui/icons/sfx_off.png");
        this.load.image("sfxOn", "images/ui/icons/sfx_on.png");
        this.load.image("musicOn", "images/ui/icons/music_on.png");
        this.load.image("musicOff", "images/ui/icons/music_off.png");

        this.load.image("house", "images/houseExterior.png");
        this.load.image("entrance", "images/mansionInteriorSketch.jpg");
        this.load.image("hallway", "images/upstairsHallwaySketch.jpg");
        this.load.image("basement", "images/basementSketch.jpg");
        this.load.image("garden", "images/gardenSketch.jpg");
        this.load.image("graveyard", "images/graveyardSketch.jpg");
        this.load.image("arrow", "images/up-arrow.png");
        this.load.image("backArrow", "images/down-arrow.png");
    }
    onProgress(value) {
        this.bar.setPercent(value);
        let per = Math.floor(value * 100);
        this.progText.setText(per + "%");
    }
    create() {
        this.scene.start("SceneTitle");
    }
}