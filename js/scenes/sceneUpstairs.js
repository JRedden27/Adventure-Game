class SceneUpstairs extends Phaser.Scene {
    constructor() {
        super('SceneUpstairs');
    }
    preload() {
        //load our images or sounds
        
    }
    create() {
        //define our objects
        this.background = this.add.image(0, 0, 'hallway');
        this.background.setOrigin(0, 0);
        this.background.displayWidth = game.config.width;
        this.background.displayHeight = game.config.height;

        let sb = new SoundButtons({scene: this});

        this.uiGrid = new AlignGrid({scene: this, rows: 7, cols: 7});
        //this.uiGrid.showNumbers();

        this.arrow = this.add.image(this.centerX, this.centerY, 'arrow');
        this.uiGrid.placeAtIndex(21, this.arrow);
        Align.scaleToGameW(this.arrow, .0625);
        this.arrow.setInteractive();
        this.arrow.on('pointerdown', this.enterRecRoom, this);

        this.arrow2 = this.add.image(this.centerX, this.centerY, 'arrow');
        this.uiGrid.placeAtIndex(16, this.arrow2);
        Align.scaleToGameW(this.arrow2, .0625);
        this.arrow2.setInteractive();
        this.arrow2.on('pointerdown', this.enterBathroom, this);

        this.arrow3 = this.add.image(this.centerX, this.centerY, 'arrow');
        this.uiGrid.placeAtIndex(18, this.arrow3);
        Align.scaleToGameW(this.arrow3, .0625);
        this.arrow3.setInteractive();
        this.arrow3.on('pointerdown', this.enterBedroom, this);

        this.arrow4 = this.add.image(this.centerX, this.centerY, 'arrow');
        this.uiGrid.placeAtIndex(3, this.arrow4);
        Align.scaleToGameW(this.arrow4, .0625);
        this.arrow4.setInteractive();
        this.arrow4.on('pointerdown', this.enterAttic, this);

        this.backArrow = this.add.image(this.centerX, this.centerY, 'backArrow');
        this.uiGrid.placeAtIndex(38, this.backArrow);
        Align.scaleToGameW(this.backArrow, .0625);
        this.backArrow.setInteractive();
        this.backArrow.on('pointerdown', this.goBack, this);
    }
    enterRecRoom() {
        emitter.emit(G.PLAY_SOUND, "doorOpen");
        this.scene.start("SceneRecRoom");
    }
    enterBathroom() {
        emitter.emit(G.PLAY_SOUND, "doorOpen");
        this.scene.start("SceneBathroom");
    }
    enterBedroom() {
        emitter.emit(G.PLAY_SOUND, "doorOpen");
        this.scene.start("SceneBedroom");
    }
    enterAttic() {
        emitter.emit(G.PLAY_SOUND, "climbLadder");
        this.scene.start("SceneAttic");
    }
    goBack() {
        emitter.emit(G.PLAY_SOUND, "walkStairs");
        this.scene.start("SceneEntrance");
    }
    update() {
        //constant running loop
    }
    customFunctions() {
        
    }
}