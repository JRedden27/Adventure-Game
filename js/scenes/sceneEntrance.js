class SceneEntrance extends Phaser.Scene {
    constructor() {
        super('SceneEntrance');
    }
    preload() {
        //load our images or sounds
        
    }
    create() {
        //define our objects
        this.background = this.add.image(0, 0, 'entrance');
        this.background.setOrigin(0, 0);
        this.background.displayWidth = game.config.width;
        this.background.displayHeight = game.config.height;

        let sb = new SoundButtons({scene: this});

        this.uiGrid = new AlignGrid({scene: this, rows: 7, cols: 7});
        //this.uiGrid.showNumbers();
        
        this.arrow = this.add.image(this.centerX, this.centerY, 'arrow');
        this.uiGrid.placeAtIndex(28, this.arrow);
        Align.scaleToGameW(this.arrow, .0625);
        this.arrow.setInteractive();
        this.arrow.on('pointerdown', this.enterUpstairs, this);

        this.arrow2 = this.add.image(this.centerX, this.centerY, 'arrow');
        this.uiGrid.placeAtIndex(22, this.arrow2);
        Align.scaleToGameW(this.arrow2, .0625);
        this.arrow2.setInteractive();
        this.arrow2.on('pointerdown', this.enterBasement, this);

        this.arrow3 = this.add.image(this.centerX, this.centerY, 'arrow');
        this.uiGrid.placeAtIndex(24, this.arrow3);
        Align.scaleToGameW(this.arrow3, .0625);
        this.arrow3.setInteractive();
        this.arrow3.on('pointerdown', this.enterGarden, this);

        this.arrow4 = this.add.image(this.centerX, this.centerY, 'arrow');
        this.uiGrid.placeAtIndex(27, this.arrow4);
        Align.scaleToGameW(this.arrow4, .0625);
        this.arrow4.setInteractive();
        this.arrow4.on('pointerdown', this.enterDiningRoom, this);

        this.backArrow = this.add.image(this.centerX, this.centerY, 'backArrow');
        this.uiGrid.placeAtIndex(38, this.backArrow);
        Align.scaleToGameW(this.backArrow, .0625);
        this.backArrow.setInteractive();
        this.backArrow.on('pointerdown', this.goBack, this);
    }
    enterUpstairs() {
        emitter.emit(G.PLAY_SOUND, "walkStairs");
        this.scene.start("SceneUpstairs");
    }
    enterBasement() {
        emitter.emit(G.PLAY_SOUND, "stoneDoorOpen");
        this.scene.start("SceneBasement");
    }
    enterGarden() {
        emitter.emit(G.PLAY_SOUND, "doorOpen");
        this.scene.start("SceneGarden");
    }
    enterDiningRoom() {
        emitter.emit(G.PLAY_SOUND, "doorOpen");
        this.scene.start("SceneDiningRoom");
    }
    goBack() {
        emitter.emit(G.PLAY_SOUND, "doorOpen");
        this.scene.start("SceneMain");
    }
    update() {
        //constant running loop
    }
    customFunctions() {
        
    }
}