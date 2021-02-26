class SceneDiningRoom extends Phaser.Scene {
    constructor() {
        super('SceneDiningRoom');
    }
    preload() {
        //load our images or sounds
        
    }
    create() {
        //define our objects
        this.background = this.add.image(0, 0, 'diningRoom');
        this.background.setOrigin(0, 0);
        this.background.displayWidth = game.config.width;
        this.background.displayHeight = game.config.height;

        let sb = new SoundButtons({scene: this});

        this.uiGrid = new AlignGrid({scene: this, rows: 7, cols: 7});
        //this.uiGrid.showNumbers();

        this.arrow = this.add.image(this.centerX, this.centerY, 'arrow');
        this.uiGrid.placeAtIndex(22, this.arrow);
        Align.scaleToGameW(this.arrow, .0625);
        this.arrow.setInteractive();
        this.arrow.on('pointerdown', this.enterKitchen, this);

        this.backArrow = this.add.image(this.centerX, this.centerY, 'backArrow');
        this.uiGrid.placeAtIndex(38, this.backArrow);
        Align.scaleToGameW(this.backArrow, .0625);
        this.backArrow.setInteractive();
        this.backArrow.on('pointerdown', this.goBack, this);
    }
    enterKitchen() {
        emitter.emit(G.PLAY_SOUND, "doorOpen");
        this.scene.start("SceneKitchen");
    }
    goBack() {
        emitter.emit(G.PLAY_SOUND, "doorOpen");
        this.scene.start("SceneEntrance");
    }
    update() {
        //constant running loop
    }
    customFunctions() {
        
    }
}